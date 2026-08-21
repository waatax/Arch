import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const subjectsDir = path.join(root, 'apps', 'web', 'src', 'data', 'subjects');
const files = fs.readdirSync(subjectsDir).filter((file) => file.endsWith('.ts') && file !== 'professional-gap-topics.ts').sort();

const gapSource = fs.readFileSync(path.join(subjectsDir, 'professional-gap-topics.ts'), 'utf8')
  .replace(/^import[^\n]*\n/gm, '')
  .replace(/: string\[\]/g, '')
  .replace(/: string/g, '')
  .replace(/: TopicContent\[\]/g, '')
  .replace(/export const /g, 'const ');
const gapTopics = new Function(`${gapSource}\nreturn { mechanicsGapTopics, surveyingGapTopics, draftingGapTopics };`)();

const patterns = [
  '本章核心基礎：',
  '80% 考生在概念題中因粗心',
  '第一性原理拆解法',
  '直覺選擇字面相近選項',
  '依據工程力學核心規範',
  '工程實務破題法：善用對稱性',
  'B1B1B1',
  'B2B2B2',
  'B3B3B3',
  'Q1',
  'Q2',
  'Q3',
  'Q4',
  'Q5',
  'P1',
];

const results = {};

for (const file of files) {
  const filename = path.join(subjectsDir, file);
  const source = fs.readFileSync(filename, 'utf8');
  const exportMatch = source.match(/export const (\w+): SubjectData =/);
  if (!exportMatch) continue;
  const executable = source
    .replace(/^import[^\n]*\n/gm, '')
    .replace(`export const ${exportMatch[1]}: SubjectData =`, `const ${exportMatch[1]} =`);
  const subject = new Function('mechanicsGapTopics', 'surveyingGapTopics', 'draftingGapTopics', `${executable}\nreturn ${exportMatch[1]};`)(gapTopics.mechanicsGapTopics, gapTopics.surveyingGapTopics, gapTopics.draftingGapTopics);

  for (const topic of subject.topics) {
    const topicStr = JSON.stringify(topic);
    const matchedPatterns = [];
    for (const pat of patterns) {
      if (topicStr.includes(pat)) {
        matchedPatterns.push(pat);
      }
    }
    if (matchedPatterns.length > 0) {
      results[`${subject.slug}/${topic.slug}`] = {
        subject: subject.title,
        topic: topic.title,
        matchedPatterns
      };
    }
  }
}

console.log(`Found ${Object.keys(results).length} topics matching AI boilerplate/slop patterns:`);
for (const [slug, data] of Object.entries(results)) {
  console.log(`\n[${data.subject}] ${data.topic} (${slug}):`);
  console.log(`  Patterns: ${data.matchedPatterns.join(', ')}`);
}
