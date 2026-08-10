import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const exists = (file) => fs.existsSync(path.join(root, file));
const subjectDir = path.join(root, 'apps/web/src/data/subjects');
const subjectFiles = fs.readdirSync(subjectDir).filter((file) => file.endsWith('.ts')).sort();

function loadSubjects() {
  return subjectFiles.map((file) => {
    const source = fs.readFileSync(path.join(subjectDir, file), 'utf8');
    const match = source.match(/export const (\w+): SubjectData =/);
    if (!match) throw new Error(`${file}: SubjectData export missing`);
    const executable = source.replace(/^import[^\n]*\n/gm, '').replace(`export const ${match[1]}: SubjectData =`, `const ${match[1]} =`);
    return new Function(`${executable}\nreturn ${match[1]};`)();
  });
}

const subjects = loadSubjects();
const topics = subjects.flatMap((subject) => subject.topics.map((topic) => ({ subject, topic })));
const routes = new Set(topics.map(({ subject, topic }) => `/subjects/${subject.slug}/${topic.slug}`));
const registries = ['data/registry/common-exam-questions.json', 'data/registry/exam-coverage.json'].flatMap((file) => JSON.parse(read(file)).questions);
const layout = read('apps/web/src/components/TopicPageLayout.tsx');
const store = read('apps/web/src/lib/store/studentStore.ts');
const core = read('V6-Core.md');

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
  ['116 制度防誤導', () => core.includes('自主選考至少 2 科') && core.includes('不得顯示任何「總分 / 700」') && exists('apps/web/src/app/exam-116/page.tsx')],
];

const failures = [];
let passNo = 0;
for (let iteration = 1; iteration <= 7; iteration += 1) {
  for (const [name, check] of checks) {
    passNo += 1;
    let ok = false;
    try { ok = Boolean(check()); } catch { ok = false; }
    console.log(`${ok ? 'PASS' : 'FAIL'} ${String(passNo).padStart(2, '0')}/70 · R${iteration} · ${name}`);
    if (!ok) failures.push(`R${iteration} ${name}`);
  }
}

console.log(`\n證據摘要：${subjects.length} 科、${topics.length} 主題、${registries.length} 筆真題映射、${passNo} 個可重跑檢查。`);
if (failures.length) {
  console.error(`V6 品質閘門失敗（${failures.length}）：${failures.join('、')}`);
  process.exit(1);
}
console.log('V6 70-Pass 品質閘門全部通過。');
