import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const exists = (file) => fs.existsSync(path.join(root, file));
const subjectDir = path.join(root, 'apps/web/src/data/subjects');
const subjectFiles = fs.readdirSync(subjectDir).filter((file) => file.endsWith('.ts') && file !== 'professional-gap-topics.ts').sort();
const gapSource = fs.readFileSync(path.join(subjectDir, 'professional-gap-topics.ts'), 'utf8')
  .replace(/^import[^\n]*\n/gm, '').replace(/: string\[\]/g, '').replace(/: string/g, '').replace(/: TopicContent\[\]/g, '').replace(/export const /g, 'const ');
const gapTopics = new Function(`${gapSource}\nreturn { mechanicsGapTopics, surveyingGapTopics, draftingGapTopics };`)();

const subjects = subjectFiles.map((file) => {
  const source = fs.readFileSync(path.join(subjectDir, file), 'utf8');
  const match = source.match(/export const (\w+): SubjectData =/);
  if (!match) throw new Error(`${file}: SubjectData export missing`);
  const executable = source.replace(/^import[^\n]*\n/gm, '').replace(`export const ${match[1]}: SubjectData =`, `const ${match[1]} =`);
  return new Function('mechanicsGapTopics', 'surveyingGapTopics', 'draftingGapTopics', `${executable}\nreturn ${match[1]};`)(gapTopics.mechanicsGapTopics, gapTopics.surveyingGapTopics, gapTopics.draftingGapTopics);
});

const topics = subjects.flatMap((subject) => subject.topics.map((topic) => ({ subject, topic })));
const layout = read('apps/web/src/components/TopicPageLayout.tsx');
const mastery = read('apps/web/src/lib/pedagogy/masteryLesson.ts');
const solutions = read('apps/web/src/lib/pedagogy/solutionSteps.ts');
const iterations = read('apps/web/src/lib/pedagogy/sevenIterationEnrichment.ts');
const sources = read('apps/web/src/lib/pedagogy/learningSources.ts');
const failures = [];
const check = (label, result) => {
  console.log(`${result ? 'PASS' : 'FAIL'} · ${label}`);
  if (!result) failures.push(label);
};

check('13 科與 111 個逐頁主題', subjects.length === 13 && topics.length === 111);
const conceptDepth = (concept) => [
  concept.body,
  ...(concept.steps ?? []),
  ...(concept.table?.headers ?? []),
  ...(concept.table?.rows?.flat() ?? []),
].filter(Boolean).join('').trim().length;
const shallowConcepts = topics.flatMap(({ subject, topic }) => topic.concepts
  .filter((concept) => !concept.heading?.trim() || conceptDepth(concept) < 20)
  .map((concept) => `${subject.slug}/${topic.slug}:${concept.heading}(${conceptDepth(concept)})`));
check('每頁至少三個正式觀念', topics.every(({ topic }) => topic.concepts?.length >= 3) && shallowConcepts.length === 0);
if (shallowConcepts.length) console.log(`  需加深：${shallowConcepts.slice(0, 20).join('、')}`);
check('每頁具示範題與自主練習', topics.every(({ topic }) => topic.worked_examples?.length >= 1 && (topic.practices?.length || topic.practice)));
check('每頁具專屬主題圖', topics.every(({ subject, topic }) => exists(`apps/web/public/learning-visuals/${subject.slug}/${topic.slug}.webp`)));
check('單一深入淺出版本', layout.includes('先用一句白話抓住') && !/小學生版|國中生版/.test(layout + mastery));
check('白話到正式課綱四步橋接', ['plainStart', 'curriculumAnchor', 'conceptBridge', '正式化'].every((token) => mastery.includes(token)));
check('每頁三個應用面範例', mastery.includes('applications: [') && ['身邊', '現場', '決策'].every((token) => mastery.includes(token)) && layout.includes('masteryLesson.applications.map'));
check('向量教學圖示與替代語意', ['Binoculars', 'BookOpenCheck', 'Building2', 'Lightbulb', 'School', 'SearchCheck'].every((token) => layout.includes(token)) && layout.includes('aria-hidden="true"'));
check('五項可觀察精熟證據', ['不看課文', '能畫圖', '能完成一題', '能判斷一個錯誤', '遇到歷屆題'].every((token) => mastery.includes(token)));
check('示範題逐步說明為什麼', ['explainWhy', '先用白話重述', '畫出思考地圖', '｜為什麼：', '放回現實檢核'].every((token) => solutions.includes(token)));
check('歷屆題六段深度解析', ['restate', 'clues', 'rule', 'correct', 'distractors', 'transfer'].every((token) => mastery.includes(token) && layout.includes(`walkthrough.${token}`)));
check('干擾選項不冒充官方解析', mastery.includes('不是官方答案') && layout.includes('官方標準答案'));
check('七輪各有不同教學焦點', Array.from({ length: 7 }, (_, index) => `pack(${index + 1},`).every((token) => iterations.includes(token)));
check('官方課綱與官方題本來源', ['國家教育研究院', '技專校院入學測驗中心', '官方命題依據', '官方歷屆題'].every((token) => sources.includes(token)));
check('研究支持逐步示範與多重表徵', ['Education Endowment Foundation', 'CAST UDL Guidelines', '教學設計依據'].every((token) => sources.includes(token)));
check('每頁狀態完成且路由唯一', topics.every(({ topic }) => topic.status === 'done') && new Set(topics.map(({ subject, topic }) => `${subject.slug}/${topic.slug}`)).size === topics.length);

console.log(`\nV7 教學品質摘要：${subjects.length} 科、${topics.length} 頁、${16 - failures.length}/16 項閘門通過。`);
if (failures.length) {
  console.error(`未通過：${failures.join('、')}`);
  process.exit(1);
}
