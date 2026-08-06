import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const subjectsDir = path.join(root, 'apps', 'web', 'src', 'data', 'subjects');
const coveragePath = path.join(root, 'data', 'registry', 'exam-coverage.json');

const coverageData = JSON.parse(fs.readFileSync(coveragePath, 'utf8'));

// Build topic to question mapping
const topicToQuestions = new Map(); // key: subjectSlug/topicSlug, value: string[]
for (const q of coverageData.questions) {
  if (q.coverage === 'covered' || q.coverage === 'partial') {
    const routeParts = q.lessonRoute.split('/');
    if (routeParts.length === 4) {
      const key = `${routeParts[2]}/${routeParts[3]}`;
      if (!topicToQuestions.has(key)) topicToQuestions.set(key, []);
      topicToQuestions.get(key).push(q.id);
    }
  }
}

const files = fs.readdirSync(subjectsDir).filter(f => f.endsWith('.ts'));

for (const file of files) {
  const filePath = path.join(subjectsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  const subjectSlugMatch = content.match(/"?slug"?:\s*['"]([^'"]+)['"]/);
  if (!subjectSlugMatch) continue;
  const subjectSlug = subjectSlugMatch[1];
  
  const topicRegex = /"?slug"?:\s*['"]([^'"]+)['"]/g;
  let match;
  const topicsFound = [];
  while ((match = topicRegex.exec(content)) !== null) {
    if (match[1] !== subjectSlug) {
      topicsFound.push(match[1]);
    }
  }

  // Deduplicate just in case
  const uniqueTopics = [...new Set(topicsFound)];

  for (const topicSlug of uniqueTopics) {
    const key = `${subjectSlug}/${topicSlug}`;
    const qIds = topicToQuestions.get(key) || [];
    
    // Check if we already migrated this topic
    if (content.includes(`covered_question_ids:`) && new RegExp(`"?slug"?:\\s*['"]${topicSlug}['"][\\s\\S]*?covered_question_ids`).test(content)) {
      continue;
    }

    const newFields = `
      "covered_question_ids": ${JSON.stringify(qIds)},
      "worked_examples": [
        {
          "question": '【V5.1 新增步驟化例題】待補全，對應考點解析',
          "difficulty": '基礎',
          "steps": ['步驟 1：建立模型', '步驟 2：代入公式', '步驟 3：求得解答'],
          "answer": '待補全'
        }
      ],
      "illustrations": ['context.webp', 'mechanism.webp', 'comparison.webp', 'step-by-step.webp'],`;

    // Try inserting after `status: '...'` or `"status": "..."`
    const topicBlockRegex = new RegExp(`("?slug"?:\\s*['"]${topicSlug}['"][\\s\\S]*?"?status"?:\\s*['"][^'"]+['"],)`);
    content = content.replace(topicBlockRegex, `$1${newFields}`);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Migrated ${file}`);
}
console.log('Migration complete!');
