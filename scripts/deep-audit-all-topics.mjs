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

const report = [];

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
    const issues = [];

    // Check concepts
    if (!topic.concepts || topic.concepts.length === 0) {
      issues.push('NO concepts defined');
    } else {
      topic.concepts.forEach((c, i) => {
        if (!c.heading || c.heading.length < 3 || c.heading.startsWith('C') && c.heading.length <= 3) {
          issues.push(`Concept ${i+1} heading is dummy/short: "${c.heading}"`);
        }
        if (!c.body || c.body.length < 50 || c.body.includes('B1B1B1') || c.body.includes('B2B2B2')) {
          issues.push(`Concept ${i+1} body is dummy/short (len=${c.body?.length}): "${c.body?.slice(0, 30)}..."`);
        }
      });
    }

    // Check worked examples
    const worked = topic.worked_examples || [];
    if (worked.length === 0) {
      // some older format might use practice
    } else {
      worked.forEach((w, i) => {
        if (w.question === 'Q1' || w.question === 'Q2' || w.question.length < 15) {
          issues.push(`WorkedExample ${i+1} question is dummy: "${w.question}"`);
        }
        if (w.answer === 'A' || w.answer.length < 2) {
          issues.push(`WorkedExample ${i+1} answer is dummy: "${w.answer}"`);
        }
        if (w.steps?.some(s => s === 'A' || s.includes('B1B1B1'))) {
          issues.push(`WorkedExample ${i+1} steps contains dummy values`);
        }
      });
    }

    // Check practices
    const practices = topic.practices || (topic.practice ? [topic.practice] : []);
    practices.forEach((p, i) => {
      if (p.question.startsWith('Q') && p.question.length <= 4 || p.question.length < 15) {
        issues.push(`Practice ${i+1} question is dummy: "${p.question}"`);
      }
      if (p.answer === 'A' && p.question.startsWith('Q')) {
        issues.push(`Practice ${i+1} answer is dummy: "${p.answer}"`);
      }
    });

    // Check fatalTraps
    if (topic.fatalTraps) {
      topic.fatalTraps.forEach((t, i) => {
        if (t.wrongThinking === 'W' || t.correctThinking === 'C' || t.trapDescription === 'T' || t.wrongThinking.length < 5) {
          issues.push(`FatalTrap ${i+1} is dummy: W="${t.wrongThinking}"`);
        }
      });
    }

    // Check eliteMentalModels
    if (topic.eliteMentalModels) {
      topic.eliteMentalModels.forEach((m, i) => {
        if (m.technique === 'T' || m.explanation === 'E' || m.technique.length < 3) {
          issues.push(`MentalModel ${i+1} is dummy: "${m.technique}"`);
        }
      });
    }

    // Check step0Prerequisites
    if (topic.step0Prerequisites) {
      topic.step0Prerequisites.forEach((p, i) => {
        if (p === 'P1' || p.length < 3) {
          issues.push(`Prerequisite ${i+1} is dummy: "${p}"`);
        }
      });
    }

    report.push({
      subject: subject.slug,
      subjectTitle: subject.title,
      topic: topic.slug,
      topicTitle: topic.title,
      issues
    });
  }
}

const defective = report.filter(r => r.issues.length > 0);
console.log(`Total topics: ${report.length}`);
console.log(`Defective topics: ${defective.length}`);

for (const d of defective) {
  console.log(`\n❌ [${d.subjectTitle}] ${d.topicTitle} (/subjects/${d.subject}/${d.topic})`);
  d.issues.forEach(issue => console.log(`   • ${issue}`));
}
