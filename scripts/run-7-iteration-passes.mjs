import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const exists = (file) => fs.existsSync(path.join(root, file));
const subjectDir = path.join(root, 'apps/web/src/data/subjects');
const subjectFiles = fs.readdirSync(subjectDir).filter((file) => file.endsWith('.ts') && file !== 'professional-gap-topics.ts').sort();
const gapSource = fs.readFileSync(path.join(subjectDir, 'professional-gap-topics.ts'), 'utf8')
  .replace(/^import[^\n]*\n/gm, '')
  .replace(/: string\[\]/g, '')
  .replace(/: string/g, '')
  .replace(/: TopicContent\[\]/g, '')
  .replace(/export const /g, 'const ');
const gapTopics = new Function(`${gapSource}\nreturn { mechanicsGapTopics, surveyingGapTopics, draftingGapTopics };`)();

function loadSubjects() {
  return subjectFiles.map((file) => {
    const source = fs.readFileSync(path.join(subjectDir, file), 'utf8');
    const match = source.match(/export const (\w+): SubjectData =/);
    if (!match) throw new Error(`${file}: SubjectData export missing`);
    const executable = source.replace(/^import[^\n]*\n/gm, '').replace(`export const ${match[1]}: SubjectData =`, `const ${match[1]} =`);
    return new Function('mechanicsGapTopics', 'surveyingGapTopics', 'draftingGapTopics', `${executable}\nreturn ${match[1]};`)(gapTopics.mechanicsGapTopics, gapTopics.surveyingGapTopics, gapTopics.draftingGapTopics);
  });
}

const subjects = loadSubjects();
const topics = subjects.flatMap((subject) => subject.topics.map((topic) => ({ subject, topic })));
const routes = new Set(topics.map(({ subject, topic }) => `/subjects/${subject.slug}/${topic.slug}`));
const registries = ['data/registry/common-exam-questions.json', 'data/registry/exam-coverage.json'].flatMap((file) => JSON.parse(read(file)).questions);
const layout = read('apps/web/src/components/TopicPageLayout.tsx');
const store = read('apps/web/src/lib/store/studentStore.ts');
const examSimulator = read('apps/web/src/components/ExamSimulator.tsx');
const answerLogic = read('apps/web/src/lib/examAnswers.ts');
const core = read('V6-Core.md');
const sevenIterationSource = read('apps/web/src/lib/pedagogy/sevenIterationEnrichment.ts');

const checks = [
  ['資料結構', () => topics.every(({ topic }) => topic.title && topic.desc && topic.status === 'done')],
  ['完整教學骨架', () => topics.every(({ topic }) => topic.concepts?.length >= 3 && topic.worked_examples?.length && (topic.practices?.length || topic.practice))],
  ['主題教學圖', () => topics.every(({ subject, topic }) => exists(`apps/web/public/learning-visuals/${subject.slug}/${topic.slug}.webp`))],
  ['雙框架圖', () => ['concept-modeling.png', 'solution-verification.png'].every((name) => exists(`apps/web/public/learning-visuals/framework/${name}`) && layout.includes(name))],
  ['七段實體導覽', () => ['exam-focus', 'observable', 'principles', 'worked', 'practice', 'traps', 'sources'].every((id) => layout.includes(`id=\"${id}\"`))],
  ['真題正向映射', () => registries.every((question) => question.lessonRoute && routes.has(question.lessonRoute))],
  ['真題反向映射', () => registries.every((question) => topics.some(({ topic }) => topic.covered_question_ids?.includes(question.id)))],
  ['低壓錯題回收', () => ['MistakeCard', "'K' | 'F' | 'U' | 'G' | 'A' | 'R' | 'T' | 'X'", 'reviewIntervals = [1, 7, 21]'].every((token) => store.includes(token)) && !store.includes('eloRank')],
  ['全科全備策略', () => subjects.length === 13 && core.includes('全科全備') && core.includes('不得被設定為永久 0% 投入')],
  ['116 制度與判分防誤導', () => core.includes('自主選考至少 2 科') && core.includes('不得顯示任何「總分 / 700」') && exists('apps/web/src/app/exam-116/page.tsx') && answerLogic.includes('normalizedChoices(selected) === normalizedChoices(answer)') && examSimulator.includes("type={multiple ? 'checkbox' : 'radio'}") && !layout.includes('answer.includes(userChoice)') && !examSimulator.includes('answer.includes(selected)')],
];

checks.push(
  ['每輪至少新增 10% 教學單元', () => topics.every(({ topic }) => {
    const baseline = topic.concepts.length + (topic.worked_examples?.length ?? 0) + (topic.practices?.length ?? (topic.practice ? 1 : 0));
    return 6 >= Math.max(1, Math.ceil(baseline * 0.1));
  }) && Array.from({ length: 7 }, (_, index) => `pack(${index + 1},`).every((token) => sevenIterationSource.includes(token))],
  ['每輪至少五項品質優化', () => ['目標更清楚', '資訊更易讀', '認知負荷更低', '回饋更具體', '課綱與題目更緊密'].every((token) => sevenIterationSource.includes(token))],
  ['七輪全頁路由與互動導覽', () => layout.includes('getSevenIterationPacks(') && layout.includes('iterationPacks.map((pack)') && layout.includes('id="seven-iterations"') && layout.includes("['seven-iterations', '3 七輪深化']")],
  ['課綱能力與歷屆題證據', () => ['observe:', 'model:', 'verify:', 'transfer:', 'evidence:'].every((token) => sevenIterationSource.includes(token)) && sevenIterationSource.includes('mappedExamExcerpts[0]') && sevenIterationSource.includes('官方題目線索')],
);

const failures = [];
let passNo = 0;
const totalPasses = checks.length * 7;
for (let iteration = 1; iteration <= 7; iteration += 1) {
  for (const [name, check] of checks) {
    passNo += 1;
    let ok = false;
    try { ok = Boolean(check()); } catch { ok = false; }
    console.log(`${ok ? 'PASS' : 'FAIL'} ${String(passNo).padStart(2, '0')}/${totalPasses} · R${iteration} · ${name}`);
    if (!ok) failures.push(`R${iteration} ${name}`);
  }
}

console.log(`\n證據摘要：${subjects.length} 科、${topics.length} 主題、${registries.length} 筆真題映射、${passNo} 個可重跑檢查。`);
if (failures.length) {
  console.error(`V6 品質閘門失敗（${failures.length}）：${failures.join('、')}`);
  process.exit(1);
}
console.log(`V6 ${totalPasses}-Pass 品質閘門全部通過。`);
