import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const subjectDir = path.join(root, 'apps/web/src/data/subjects');
const subjectFiles = fs.readdirSync(subjectDir).filter((file) => file.endsWith('.ts') && file !== 'professional-gap-topics.ts').sort();

const gapSource = fs.readFileSync(path.join(subjectDir, 'professional-gap-topics.ts'), 'utf8')
  .replace(/^import[^\n]*\n/gm, '')
  .replace(/: string\[\]/g, '')
  .replace(/: string/g, '')
  .replace(/: TopicContent\[\]/g, '')
  .replace(/export const /g, 'const ');

const gapTopics = new Function(`${gapSource}\nreturn { mechanicsGapTopics, surveyingGapTopics, draftingGapTopics };`)();

const subjects = subjectFiles.map((file) => {
  const source = fs.readFileSync(path.join(subjectDir, file), 'utf8');
  const match = source.match(/export const (\w+): SubjectData =/);
  if (!match) throw new Error(`${file}: SubjectData export missing`);
  const executable = source
    .replace(/^import[^\n]*\n/gm, '')
    .replace(`export const ${match[1]}: SubjectData =`, `const ${match[1]} =`);
  return new Function(
    'mechanicsGapTopics',
    'surveyingGapTopics',
    'draftingGapTopics',
    `${executable}\nreturn ${match[1]};`
  )(gapTopics.mechanicsGapTopics, gapTopics.surveyingGapTopics, gapTopics.draftingGapTopics);
});

let totalSubjects = 0;
let totalTopics = 0;
let topicsWithTables = 0;
let topicsWithoutTables = [];
let totalTableRows = 0;

for (const subject of subjects) {
  totalSubjects++;
  for (const topic of subject.topics) {
    totalTopics++;
    const tables = (topic.concepts || []).filter(
      (c) => c.table && Array.isArray(c.table.headers) && c.table.headers.length > 0 && Array.isArray(c.table.rows) && c.table.rows.length > 0
    );

    if (tables.length > 0) {
      topicsWithTables++;
      for (const t of tables) {
        totalTableRows += t.table.rows.length;
      }
    } else {
      topicsWithoutTables.push({
        subjectId: subject.id,
        subjectTitle: subject.title,
        topicSlug: topic.slug,
        topicTitle: topic.title,
      });
    }
  }
}

console.log('='.repeat(60));
console.log(`📊 知識點教學頁面結構化重點表格 (Concept Tables) 完整度檢驗`);
console.log('='.repeat(60));
console.log(`總科目數: ${totalSubjects}`);
console.log(`總知識點主題數: ${totalTopics}`);
console.log(`已具備結構化表格的主題數: ${topicsWithTables} / ${totalTopics} (${((topicsWithTables / totalTopics) * 100).toFixed(1)}%)`);
console.log(`重點整理與公式表格總列數 (Rows): ${totalTableRows} 列`);

if (topicsWithoutTables.length > 0) {
  console.error(`\n❌ 以下 ${topicsWithoutTables.length} 個主題缺少結構化表格：`);
  for (const item of topicsWithoutTables) {
    console.error(`  - [${item.subjectId}] ${item.topicSlug}: ${item.topicTitle}`);
  }
  process.exit(1);
} else {
  console.log(`\n🎉 驗證全數通過！全部 ${totalTopics} 個知識點教學頁面皆已具備高質量重點/公式/記憶表格！`);
  process.exit(0);
}
