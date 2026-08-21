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

const stats = [];

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
    let hasPlaceholder = false;
    let placeholderDetails = [];

    for (const [idx, concept] of topic.concepts.entries()) {
      if (concept.heading === 'C1' || concept.heading === 'C2' || concept.heading === 'C3' || concept.body.includes('B1B1B1') || concept.body.length < 40) {
        hasPlaceholder = true;
        placeholderDetails.push(`Concept ${idx+1} placeholder: heading="${concept.heading}", bodyLen=${concept.body.length}`);
      }
    }

    for (const [idx, we] of (topic.worked_examples || []).entries()) {
      if (we.question === 'Q1' || we.question === 'Q2' || we.question.length < 15 || we.answer === 'A' || we.steps?.some(s => s.includes('B1B1B1'))) {
        hasPlaceholder = true;
        placeholderDetails.push(`WorkedExample ${idx+1} placeholder: Q="${we.question}", A="${we.answer}"`);
      }
    }

    const practices = topic.practices || (topic.practice ? [topic.practice] : []);
    for (const [idx, p] of practices.entries()) {
      if (p.question === 'Q1' || p.question === 'Q2' || p.question === 'Q3' || p.question === 'Q4' || p.question === 'Q5' || p.question.length < 15 || p.answer === 'A') {
        hasPlaceholder = true;
        placeholderDetails.push(`Practice ${idx+1} placeholder: Q="${p.question}", A="${p.answer}"`);
      }
    }

    stats.push({
      subject: subject.slug,
      subjectTitle: subject.title,
      topic: topic.slug,
      topicTitle: topic.title,
      conceptsCount: topic.concepts.length,
      workedCount: topic.worked_examples?.length || 0,
      practicesCount: practices.length,
      hasPlaceholder,
      placeholderDetails
    });
  }
}

console.log(`Total topics scanned: ${stats.length}`);
const placeholderTopics = stats.filter(s => s.hasPlaceholder);
console.log(`Topics with placeholders: ${placeholderTopics.length} / ${stats.length}`);

for (const p of placeholderTopics) {
  console.log(`\n[${p.subjectTitle}] ${p.topicTitle} (${p.topic}):`);
  for (const d of p.placeholderDetails) {
    console.log(`  - ${d}`);
  }
}
