import fs from 'node:fs';

const filepath = 'apps/web/src/data/subjects/professional-gap-topics.ts';
let content = fs.readFileSync(filepath, 'utf8');

// Match status: "done" and status: 'done'
content = content.replace(/status:\s*['"]done['"],/g, `status: 'done',\n      gradeLevel: 10,`);
content = content.replace(/status:\s*['"]draft['"],/g, `status: 'draft',\n      gradeLevel: 10,`);
content = content.replace(/status:\s*['"]stub['"],/g, `status: 'stub',\n      gradeLevel: 10,`);

fs.writeFileSync(filepath, content, 'utf8');
console.log('Fixed professional-gap-topics.ts');
