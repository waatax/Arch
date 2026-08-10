import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const subjectsDir = path.join(root, 'apps', 'web', 'src', 'data', 'subjects');
const files = fs.readdirSync(subjectsDir).filter((file) => file.endsWith('.ts')).sort();
const expectedCategories = new Map([
  ['mechanics', '專業科目（一）'],
  ['materials', '專業科目（一）'],
  ['surveying', '專業科目（二）'],
  ['drafting', '專業科目（二）'],
  ['chinese', '共同科目'],
  ['english', '共同科目'],
  ['math-c', '共同科目'],
  ['physics', '自然科學'],
  ['chemistry', '自然科學'],
  ['history', '社會領域'],
  ['geography', '社會領域'],
  ['civics', '社會領域'],
  ['extensions', '實習與實務'],
]);

const subjects = [];
const errors = [];
const seenRoutes = new Set();
const topicsByRoute = new Map();
const visualsDir = path.join(root, 'apps', 'web', 'public', 'learning-visuals');
const sharedLessonVisuals = [
  path.join(visualsDir, 'framework', 'concept-modeling.png'),
  path.join(visualsDir, 'framework', 'solution-verification.png'),
];

for (const visual of sharedLessonVisuals) {
  if (!fs.existsSync(visual)) errors.push(`缺少全課程共用 OpenAI 教學圖：${path.relative(root, visual)}`);
}

for (const file of files) {
  const filename = path.join(subjectsDir, file);
  const source = fs.readFileSync(filename, 'utf8');
  const exportMatch = source.match(/export const (\w+): SubjectData =/);
  if (!exportMatch) {
    errors.push(`${file}: 找不到 SubjectData export`);
    continue;
  }
  const executable = source
    .replace(/^import[^\n]*\n/gm, '')
    .replace(`export const ${exportMatch[1]}: SubjectData =`, `const ${exportMatch[1]} =`);
  const subject = new Function(`${executable}\nreturn ${exportMatch[1]};`)();

  if (!subject) {
    errors.push(`${file}: 找不到 SubjectData export`);
    continue;
  }

  subjects.push(subject);
  if (expectedCategories.get(subject.slug) !== subject.category) {
    errors.push(`${subject.slug}: category 應為「${expectedCategories.get(subject.slug)}」，目前為「${subject.category}」`);
  }
  if (!Array.isArray(subject.topics) || subject.topics.length === 0) {
    errors.push(`${subject.slug}: 沒有課程主題`);
    continue;
  }

  for (const topic of subject.topics) {
    const route = `/subjects/${subject.slug}/${topic.slug}`;
    if (seenRoutes.has(route)) errors.push(`${route}: 重複路由`);
    seenRoutes.add(route);
    topicsByRoute.set(route, topic);
    if (!topic.title?.trim() || !topic.desc?.trim()) errors.push(`${route}: 缺少標題或摘要`);
    if (topic.status !== 'done') errors.push(`${route}: 尚未完成（${topic.status}）`);
    if (!Array.isArray(topic.concepts) || topic.concepts.length < 3) errors.push(`${route}: 概念卡少於 3 張`);
    const practices = topic.practices?.length ? topic.practices : topic.practice ? [topic.practice] : [];
    if (practices.length === 0) errors.push(`${route}: 沒有練習題`);
    if (!fs.existsSync(path.join(visualsDir, subject.slug, `${topic.slug}.webp`))) {
      errors.push(`${route}: 缺少 OpenAI 教學圖解`);
    }
    for (const [index, practice] of practices.entries()) {
      if (!practice.question?.trim() || !practice.answer?.trim() || !practice.steps?.length) {
        errors.push(`${route}: 第 ${index + 1} 題缺少題幹、步驟或答案`);
      }
    }
    if (!topic.covered_question_ids || !Array.isArray(topic.covered_question_ids)) {
      errors.push(`${route}: 缺少 covered_question_ids 陣列`);
    }
    if (!topic.worked_examples || topic.worked_examples.length === 0) {
      errors.push(`${route}: 缺少 worked_examples (至少需 1 題步驟化例題)`);
    }
    if (!topic.illustrations || topic.illustrations.length < 3) {
      errors.push(`${route}: 缺少 3 張以上之 Nanobanana 圖解`);
    }
  }
}

// 以終為始：每一道歷屆統測題都必須正向連到已發布教學頁，教學頁也必須
// 反向登錄該題，且具備核心知識點、步驟化例題與練習。
const examRegistries = [
  JSON.parse(fs.readFileSync(path.join(root, 'data', 'registry', 'common-exam-questions.json'), 'utf8')),
  JSON.parse(fs.readFileSync(path.join(root, 'data', 'registry', 'exam-coverage.json'), 'utf8')),
];
const allExamQuestions = examRegistries.flatMap((registry) => registry.questions);
for (const question of allExamQuestions) {
  const topic = topicsByRoute.get(question.lessonRoute);
  if (!topic) {
    errors.push(`${question.id}: 無對應的完整教學頁 ${question.lessonRoute ?? '(missing route)'}`);
    continue;
  }
  if (!topic.covered_question_ids?.includes(question.id)) {
    errors.push(`${question.id}: 教學頁 ${question.lessonRoute} 未反向登錄此題`);
  }
  const practices = topic.practices?.length ? topic.practices : topic.practice ? [topic.practice] : [];
  if (topic.concepts.length < 3 || !topic.worked_examples?.length || !practices.length) {
    errors.push(`${question.id}: 對應教學頁缺少核心知識點、步驟化例題或練習`);
  }
}

const topicLayout = fs.readFileSync(
  path.join(root, 'apps', 'web', 'src', 'components', 'TopicPageLayout.tsx'),
  'utf8',
);
for (const requiredVisual of ['concept-modeling.png', 'solution-verification.png']) {
  if (!topicLayout.includes(requiredVisual)) {
    errors.push(`所有學習頁必須實際呈現 OpenAI 教學圖：${requiredVisual}`);
  }
}

if (subjects.length !== expectedCategories.size) {
  errors.push(`科目數應為 ${expectedCategories.size}，目前為 ${subjects.length}`);
}

const topicCount = subjects.reduce((total, subject) => total + subject.topics.length, 0);
if (errors.length) {
  console.error(`課程資料驗證失敗（${errors.length} 項）`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`課程資料驗證通過：${subjects.length} 科、${topicCount} 個主題、${seenRoutes.size} 條學習路由。`);
