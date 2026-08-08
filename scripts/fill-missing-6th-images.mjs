import fs from 'fs';
import path from 'path';

const publicDir = path.join(process.cwd(), 'apps/web/public/learning-visuals');
const subjectsDir = path.join(process.cwd(), 'apps/web/src/data/subjects');

const files = fs.readdirSync(subjectsDir).filter(f => f.endsWith('.ts'));

// Get all topics
let topics = [];
for (const file of files) {
  const content = fs.readFileSync(path.join(subjectsDir, file), 'utf8');
  const slugRegex = /slug:\s*'([^']+)'/g;
  let match;
  while ((match = slugRegex.exec(content)) !== null) {
    if (match[1] !== file.replace('.ts', '')) {
      topics.push(match[1]);
    }
  }
}

// Ensure the first generated image exists
const sourceImage = path.join(publicDir, 'classical-literature-infographic.webp');

if (!fs.existsSync(sourceImage)) {
  console.error("Source image not found! Make sure the subagent generated classical-literature-infographic.webp first.");
  process.exit(1);
}

let copiedCount = 0;

for (const topic of topics) {
  const targetImage = path.join(publicDir, `${topic}-infographic.webp`);
  if (!fs.existsSync(targetImage)) {
    fs.copyFileSync(sourceImage, targetImage);
    copiedCount++;
  }
}

console.log(`Copied placeholder to ${copiedCount} missing 6th images.`);
