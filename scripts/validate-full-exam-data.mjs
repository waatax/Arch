import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const common = JSON.parse(fs.readFileSync(path.join(root, 'data', 'registry', 'common-exam-questions.json'), 'utf8'));
const professional = JSON.parse(fs.readFileSync(path.join(root, 'data', 'registry', 'exam-coverage.json'), 'utf8'));
const pageMap = JSON.parse(fs.readFileSync(path.join(root, 'data', 'registry', 'exam-page-map.json'), 'utf8'));
const publicRoot = path.join(root, 'apps', 'web', 'public');
const errors = [];

if (common.questions.length !== 525) errors.push(`expected 525 common questions, got ${common.questions.length}`);
if (professional.questions.length + common.questions.length !== 925) errors.push('all-subject total must be 925 questions');

const expectedCounts = { chinese: 38, english: 42, 'math-c': 25 };
for (const year of [111, 112, 113, 114, 115]) {
  for (const [exam, count] of Object.entries(expectedCounts)) {
    const questions = common.questions.filter((question) => question.year === year && question.exam === exam);
    if (questions.length !== count) errors.push(`${year} ${exam}: expected ${count}, got ${questions.length}`);
  }
}

for (const question of common.questions) {
  if (!/^(?:[ABCD]{1,2}|送分)$/.test(question.answer)) errors.push(`${question.id}: invalid answer`);
  const image = path.join(publicRoot, ...question.questionImage.split('/').filter(Boolean));
  if (!fs.existsSync(image)) errors.push(`${question.id}: missing original page image`);
}

for (const question of professional.questions.filter((item) => item.requiresOfficialFigure)) {
  const mapping = pageMap[question.id];
  if (!mapping) errors.push(`${question.id}: missing professional figure mapping`);
  else {
    const image = path.join(publicRoot, ...mapping.questionImage.split('/').filter(Boolean));
    if (!fs.existsSync(image)) errors.push(`${question.id}: missing professional original page image`);
  }
}

if (errors.length) {
  console.error(`全科目題庫驗證失敗：\n${errors.join('\n')}`);
  process.exit(1);
}

console.log(`全科目題庫驗證通過：共同科目 525 題 + 專業科目 400 題，共 925 題；原題圖面完整。`);
