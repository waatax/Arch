import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dir = path.join(root, 'apps/web/src/data/subjects');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'professional-gap-topics.ts');

let totalConcepts = 0;
let totalFormulas = 0;
let issues = [];

files.forEach(f => {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  // Match concepts by "heading": or heading:
  const concepts = (content.match(/["']?heading["']?\s*:\s*['"]/g) || []).length;
  const formulas = (content.match(/["']?formula["']?\s*:\s*['"]/g) || []).length;
  totalConcepts += concepts;
  totalFormulas += formulas;
  console.log(f.padEnd(20), 'concepts:', String(concepts).padStart(3), 'formulas:', String(formulas).padStart(3));

  const lines = content.split('\n');
  lines.forEach((l, idx) => {
    // Check for \u000b (unescaped \v in strings)
    if (l.includes('\u000b') || l.includes('\\u000b')) {
      issues.push({ file: f, line: idx + 1, type: 'verticalTabEscape', preview: l.trim().slice(0, 100) });
    }

    // Check for raw unescaped math terms inside $...$:
    const mathMatches = l.match(/\$([^\$]+)\$/g);
    if (mathMatches) {
      mathMatches.forEach(m => {
        const brokenMath = m.match(/(?<!\\)\b(sigma|tau|alpha|beta|gamma|theta|lambda|omega|epsilon|circ|cos|sin|tan|sum|sqrt|pm|times|Delta|mu|rho|phi)\b/);
        if (brokenMath) {
          issues.push({ file: f, line: idx + 1, type: 'missingMathBackslash', word: brokenMath[0], formula: m, preview: l.trim().slice(0, 120) });
        }
      });
    }
  });
});


console.log('\n--- Deep Review Summary ---');
console.log(`Audited ${files.length} subjects.`);
console.log(`Total concepts: ${totalConcepts}, Total explicit formulas: ${totalFormulas}`);
console.log(`Total issues found: ${issues.length}`);
issues.forEach((iss, i) => {
  console.log(`[#${i+1}] ${iss.file}:${iss.line} [${iss.type}] ${iss.word || ''} in: ${iss.preview}`);
});

