import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const coverage = JSON.parse(fs.readFileSync(path.join(root, 'data', 'registry', 'exam-coverage.json'), 'utf8'));
const subjectDir = path.join(root, 'apps', 'web', 'src', 'data', 'subjects');
const subjectSources = new Map(['mechanics', 'materials', 'surveying', 'drafting'].map((subject) => [subject, fs.readFileSync(path.join(subjectDir, `${subject}.ts`), 'utf8')]));
const errors = [];
if (coverage.version !== '5.0.0') errors.push('coverage.version must be 5.0.0');
if (coverage.questions.length !== 400) errors.push(`expected 400 questions, got ${coverage.questions.length}`);
const ids = new Set();
for (const q of coverage.questions) {
  if (ids.has(q.id)) errors.push(`duplicate id ${q.id}`);
  ids.add(q.id);
  if (!/^(?:[ABCD]{1,2}|送分)$/.test(q.answer)) errors.push(`${q.id}: invalid answer`);
  if (!['A', 'B', 'C', 'D'].every((key) => typeof q.options?.[key] === 'string')) errors.push(`${q.id}: missing options`);
  if (q.sourceLabel !== `${q.year} 年統測試題`) errors.push(`${q.id}: invalid source label`);
  if (!['covered', 'partial', 'missing', 'source-conflict'].includes(q.coverage)) errors.push(`${q.id}: invalid coverage`);
  if (!subjectSources.get(q.subject)?.includes(`slug: '${q.topic}'`)) errors.push(`${q.id}: missing lesson ${q.lessonRoute}`);
  if (!q.sourceUrl.startsWith('https://web1.tcte.edu.tw/EXAM/')) errors.push(`${q.id}: non-official source`);
}
for (const year of [111, 112, 113, 114, 115]) for (const paper of [1, 2]) for (let no = 1; no <= 40; no++) if (!ids.has(`${year}-${paper}-${no}`)) errors.push(`missing ${year}-${paper}-${no}`);
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
const covered = coverage.questions.filter((q) => q.coverage === 'covered').length;
console.log(`統測逐題映射驗證通過：${coverage.questions.length} 題，covered ${covered} 題，覆蓋率 ${(covered / coverage.questions.length * 100).toFixed(1)}%。`);
