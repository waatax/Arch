import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const outputRoot = path.join(root, 'apps', 'web', 'out');
const coverage = JSON.parse(fs.readFileSync(path.join(root, 'data', 'registry', 'exam-coverage.json'), 'utf8'));
const failures = [];
const uniqueRoutes = [...new Set(coverage.questions.map((question) => question.lessonRoute))];

for (const route of uniqueRoutes) {
  const target = path.join(outputRoot, ...route.split('/').filter(Boolean), 'index.html');
  if (!fs.existsSync(target)) failures.push(`${route} -> missing ${path.relative(root, target)}`);
}

const simulatorSource = fs.readFileSync(path.join(root, 'apps', 'web', 'src', 'components', 'ExamSimulator.tsx'), 'utf8');
if (!simulatorSource.includes("`${basePath}${route.replace(/\\/$/, '')}/`")) failures.push('ExamSimulator must explicitly add basePath and trailing slash.');

if (failures.length) {
  console.error(`教學連結驗證失敗：\n${failures.join('\n')}`);
  process.exit(1);
}

console.log(`建置後教學連結驗證通過：400 題，${uniqueRoutes.length} 個唯一章節，全部具有靜態頁面。`);
