import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');

console.log('📊 啟動 Arch 13 科 120 主題專屬教學 Infographic (視覺資訊圖解) 覆蓋率檢驗...\n');

// 1. Load subjects exactly like validate-course-data.mjs
const subjectsDir = path.join(root, 'apps', 'web', 'src', 'data', 'subjects');
const files = fs.readdirSync(subjectsDir).filter((file) => file.endsWith('.ts') && file !== 'professional-gap-topics.ts').sort();
const gapSource = fs.readFileSync(path.join(subjectsDir, 'professional-gap-topics.ts'), 'utf8')
  .replace(/^import[^\n]*\n/gm, '')
  .replace(/: string\[\]/g, '')
  .replace(/: string/g, '')
  .replace(/: TopicContent\[\]/g, '')
  .replace(/export const /g, 'const ');
const gapTopics = new Function(`${gapSource}\nreturn { mechanicsGapTopics, surveyingGapTopics, draftingGapTopics };`)();

const allSubjectTopics = [];
let totalTopics = 0;

for (const file of files) {
  const filename = path.join(subjectsDir, file);
  const source = fs.readFileSync(filename, 'utf8');
  const exportMatch = source.match(/export const (\w+): SubjectData =/);
  if (!exportMatch) continue;

  const executable = source
    .replace(/^import[^\n]*\n/gm, '')
    .replace(`export const ${exportMatch[1]}: SubjectData =`, `const ${exportMatch[1]} =`);
  const subject = new Function('mechanicsGapTopics', 'surveyingGapTopics', 'draftingGapTopics', `${executable}\nreturn ${exportMatch[1]};`)(gapTopics.mechanicsGapTopics, gapTopics.surveyingGapTopics, gapTopics.draftingGapTopics);

  if (!subject || !Array.isArray(subject.topics)) continue;

  allSubjectTopics.push({
    subjectSlug: subject.slug,
    topics: subject.topics.map((t) => t.slug),
  });
  totalTopics += subject.topics.length;
}

console.log(`總科目數: ${allSubjectTopics.length}`);
console.log(`總知識點主題數: ${totalTopics}`);

// 2. Load Infographics Data files
const dataContent1 = fs.readFileSync(path.join(root, 'apps/web/src/lib/pedagogy/topicInfographicsData.ts'), 'utf-8');
const dataContent2 = fs.readFileSync(path.join(root, 'apps/web/src/lib/pedagogy/topicInfographicsCommon.ts'), 'utf-8');
const combinedData = dataContent1 + '\n' + dataContent2;

let missingInfographics = 0;
let validInfographics = 0;

for (const subj of allSubjectTopics) {
  for (const topicSlug of subj.topics) {
    const key = `${subj.subjectSlug}/${topicSlug}`;
    const hasEntry = combinedData.includes(`'${key}':`) || combinedData.includes(`"${key}":`);
    
    if (hasEntry) {
      validInfographics++;
    } else {
      console.error(`❌ 缺失專屬 Infographic: ${key}`);
      missingInfographics++;
    }
  }
}

console.log(`\n============================================================`);
console.log(`已建立專屬 Infographic 主題數: ${validInfographics} / ${totalTopics} (${((validInfographics / totalTopics) * 100).toFixed(1)}%)`);
console.log(`============================================================\n`);

if (missingInfographics > 0) {
  console.error(`❌ 檢驗失敗：尚有 ${missingInfographics} 個主題未配置專屬 Infographic！`);
  process.exit(1);
} else {
  console.log(`🎉 驗證全數通過！全站 13 科 120 個知識點教學頁面皆具備專屬高品質教學 Infographic！`);
  process.exit(0);
}
