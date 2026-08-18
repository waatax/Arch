import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const subjectsDir = path.join(root, 'apps', 'web', 'src', 'data', 'subjects');
const files = fs.readdirSync(subjectsDir).filter((file) => file.endsWith('.ts') && file !== 'professional-gap-topics.ts');

const categoryToGrade = {
  '專業科目（一）': 10,
  '專業科目（二）': 11,
  '共同科目': 10,
  '自然科學': 10,
  '社會領域': 10,
  '實習與實務': 12,
};

const categoryMap = {
  'mechanics': '專業科目（一）',
  'materials': '專業科目（一）',
  'surveying': '專業科目（二）',
  'drafting': '專業科目（二）',
  'chinese': '共同科目',
  'english': '共同科目',
  'math-c': '共同科目',
  'physics': '自然科學',
  'chemistry': '自然科學',
  'history': '社會領域',
  'geography': '社會領域',
  'civics': '社會領域',
  'extensions': '實習與實務',
};

for (const file of files) {
  const filepath = path.join(subjectsDir, file);
  let content = fs.readFileSync(filepath, 'utf8');
  
  const subjectSlugMatch = file.replace('.ts', '');
  const cat = categoryMap[subjectSlugMatch] || '共同科目';
  const gradeLevel = categoryToGrade[cat] || 10;

  // Match both 'status': 'done' and "status": "done" and status: "done"
  // First, let's remove any previously incorrectly added gradeLevels if we ran this multiple times.
  content = content.replace(/\n\s*gradeLevel: \d+,/g, '');
  content = content.replace(/\n\s*"gradeLevel": \d+,/g, '');

  content = content.replace(/("?)status("?):\s*(['"])done(['"]),/g, `$1status$2: $3done$4,\n      gradeLevel: ${gradeLevel},`);
  content = content.replace(/("?)status("?):\s*(['"])draft(['"]),/g, `$1status$2: $3draft$4,\n      gradeLevel: ${gradeLevel},`);
  content = content.replace(/("?)status("?):\s*(['"])stub(['"]),/g, `$1status$2: $3stub$4,\n      gradeLevel: ${gradeLevel},`);

  fs.writeFileSync(filepath, content, 'utf8');
  console.log(`Updated ${file} with gradeLevel ${gradeLevel}`);
}
