import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const common = JSON.parse(fs.readFileSync(path.join(root, 'data', 'registry', 'common-exam-questions.json'), 'utf8'));
const professional = JSON.parse(fs.readFileSync(path.join(root, 'data', 'registry', 'exam-coverage.json'), 'utf8'));
const pageMap = JSON.parse(fs.readFileSync(path.join(root, 'data', 'registry', 'exam-page-map.json'), 'utf8'));
const publicRoot = path.join(root, 'apps', 'web', 'public');
const errors = [];
const documentNoise = /(?:共同科目\s*共\s*12\s*頁|非選擇題|寫作測驗|【以下空白】|公告試題僅供參考|答案卷之作答欄|第\s*\d+\s*頁\s*\d{3}\s*年四技)/;

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
  if (!question.excerpt?.trim()) errors.push(`${question.id}: missing recognized question text`);
  if (!['A', 'B', 'C', 'D'].every((key) => question.options?.[key]?.trim())) errors.push(`${question.id}: missing recognized options`);
  for (const [key, value] of Object.entries(question.options ?? {})) {
    if (documentNoise.test(value)) errors.push(`${question.id} option ${key}: contains page chrome or another exam section`);
  }
  if (documentNoise.test(question.excerpt ?? '') || documentNoise.test(question.passage ?? '')) {
    errors.push(`${question.id}: question text contains page chrome or another exam section`);
  }
  if ('questionImage' in question) errors.push(`${question.id}: full-page image field is forbidden`);
  if (question.figureImage) {
    const image = path.join(publicRoot, ...question.figureImage.split('/').filter(Boolean));
    if (!fs.existsSync(image)) errors.push(`${question.id}: missing single-question figure crop`);
  }
  if (question.groupId && (!question.passage?.trim() || !question.groupTitle?.trim())) errors.push(`${question.id}: incomplete passage group`);
}

for (const groupId of new Set(common.questions.map((question) => question.groupId).filter(Boolean))) {
  const members = common.questions.filter((question) => question.groupId === groupId);
  if (members.length < 2) errors.push(`${groupId}: passage group has fewer than two questions`);
  if (new Set(members.map((question) => question.passage)).size !== 1) errors.push(`${groupId}: passage must be shared once by all member questions`);
}

for (const year of [111, 112, 113, 114, 115]) {
  for (let number = 21; number <= 42; number++) {
    const question = common.questions.find((item) => item.year === year && item.exam === 'english' && item.questionNo === number);
    if (!question?.groupId) errors.push(`${year}-english-${number}: cloze/reading question must belong to a passage group`);
  }

  for (const number of [...Array.from({ length: 8 }, (_, index) => index + 1), ...Array.from({ length: 10 }, (_, index) => index + 11)]) {
    const question = common.questions.find((item) => item.year === year && item.exam === 'english' && item.questionNo === number);
    const blanks = question?.excerpt?.match(/________/g)?.length ?? 0;
    if (blanks !== 1) errors.push(`${year}-english-${number}: expected exactly one answer blank, got ${blanks}`);
  }

  for (const number of [9, 10]) {
    const question = common.questions.find((item) => item.year === year && item.exam === 'english' && item.questionNo === number);
    if (question?.excerpt?.includes('________')) errors.push(`${year}-english-${number}: underlined-word question must not gain an answer blank`);
  }

  for (let number = 21; number <= 28; number++) {
    const question = common.questions.find((item) => item.year === year && item.exam === 'english' && item.questionNo === number);
    if (!new RegExp(`(?:^|\\D)${number} ________`).test(question?.passage ?? '')) {
      errors.push(`${year}-english-${number}: cloze passage is missing its numbered answer blank`);
    }
  }
}

if (fs.existsSync(path.join(publicRoot, 'exams', 'pages'))) errors.push('full-page exam image directory must be removed');

for (const question of professional.questions.filter((item) => item.requiresOfficialFigure)) {
  const mapping = pageMap[question.id];
  if (!mapping) errors.push(`${question.id}: missing professional figure mapping`);
  else {
    const image = path.join(publicRoot, ...mapping.figureImage.split('/').filter(Boolean));
    if (!fs.existsSync(image)) errors.push(`${question.id}: missing professional single-question figure crop`);
  }
}

for (const question of professional.questions) {
  for (const [key, value] of Object.entries(question.options ?? {})) {
    if (documentNoise.test(value)) errors.push(`${question.id} option ${key}: contains page chrome or another exam section`);
  }
  if (documentNoise.test(question.excerpt ?? '')) {
    errors.push(`${question.id}: question text contains page chrome or another exam section`);
  }
}

if (errors.length) {
  console.error(`全科目題庫驗證失敗：\n${errors.join('\n')}`);
  process.exit(1);
}

console.log(`全科目題庫驗證通過：925 題逐題文字、題組文章與單題圖面完整。`);
