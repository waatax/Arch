import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const webRoot = path.resolve(scriptDirectory, '..');
const outRoot = path.join(webRoot, 'out');
const practiceHtmlPath = path.join(outRoot, 'practice', 'index.html');
const shardRoot = path.join(outRoot, 'practice-data', 'shards');
const simulatorSource = fs.readFileSync(
  path.join(webRoot, 'src', 'components', 'ExamSimulator.tsx'),
  'utf8',
);
const errors = [];

if (
  (simulatorSource.match(/<select[^>]*disabled=\{loading\}/g) ?? []).length !== 3
  || !simulatorSource.includes('requestGenerationRef')
  || !simulatorSource.includes('abortControllerRef.current?.abort()')
  || !simulatorSource.includes('setSessionSnapshot({ year: requestedYear, exam: requestedExam })')
  || !simulatorSource.includes('aria-busy={loading}')
  || !simulatorSource.includes('encodeURIComponent(catalog.version)')
  || !simulatorSource.includes('payload.version !== catalog.version')
) {
  errors.push('practice loader is missing stale-request, version, unmount, snapshot, or accessible loading guards');
}

if (!fs.existsSync(practiceHtmlPath)) {
  errors.push('missing exported /practice/index.html');
} else {
  const html = fs.readFileSync(practiceHtmlPath, 'utf8');
  const htmlBytes = Buffer.byteLength(html);
  if (htmlBytes > 160 * 1024) {
    errors.push(`/practice HTML is ${(htmlBytes / 1024).toFixed(1)} KiB; expected at most 160 KiB`);
  }
  if (html.includes('111-chinese-1') || (html.match(/sourceLabel/g) ?? []).length > 2) {
    errors.push('/practice HTML contains serialized question-bank records');
  }
  if (!html.includes('practice-data/shards')) {
    errors.push('/practice HTML is missing its lightweight shard catalog');
  }
}

const shards = fs.existsSync(shardRoot)
  ? fs.readdirSync(shardRoot).filter((file) => file.endsWith('.json'))
  : [];
if (shards.length !== 25) errors.push(`expected 25 exported question shards, found ${shards.length}`);

const serviceWorkerPath = path.join(outRoot, 'sw.js');
if (fs.existsSync(serviceWorkerPath)) {
  const serviceWorker = fs.readFileSync(serviceWorkerPath, 'utf8');
  if (serviceWorker.includes('111-chinese.json') || serviceWorker.includes('115-professional-2.json')) {
    errors.push('practice shards were added to the service-worker precache');
  }
}

if (errors.length) {
  console.error(`Practice build gate failed:\n${errors.map((error) => `- ${error}`).join('\n')}`);
  process.exit(1);
}

const htmlKiB = fs.existsSync(practiceHtmlPath)
  ? (fs.statSync(practiceHtmlPath).size / 1024).toFixed(1)
  : '0.0';
console.log(`Practice build gate passed: ${htmlKiB} KiB HTML, 25 lazy-loaded shards, no question-bank precache.`);
