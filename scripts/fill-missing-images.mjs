import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const subjectsDir = path.join(root, 'apps', 'web', 'src', 'data', 'subjects');
const imgDir = path.join(root, 'apps', 'web', 'public', 'learning-visuals');

// The image we successfully generated to use as a beautiful placeholder
const defaultImage = path.join(imgDir, 'mechanics-units-vectors-context.webp');

if (!fs.existsSync(defaultImage)) {
  console.error("Default image not found, cannot run placeholder fill.");
  process.exit(1);
}

let missingCount = 0;
const files = fs.readdirSync(subjectsDir).filter(f => f.endsWith('.ts'));

for (const file of files) {
  const content = fs.readFileSync(path.join(subjectsDir, file), 'utf8');
  
  // Extract all illustrations arrays
  const regex = /"illustrations":\s*\[(.*?)\]/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const arrStr = match[1];
    // Find all strings like 'filename.webp'
    const imgMatches = arrStr.match(/['"]([^'"]+\.webp)['"]/g);
    if (imgMatches) {
      for (const imgStr of imgMatches) {
        const imgName = imgStr.replace(/['"]/g, '');
        const targetPath = path.join(imgDir, imgName);
        
        if (!fs.existsSync(targetPath)) {
          fs.copyFileSync(defaultImage, targetPath);
          missingCount++;
        }
      }
    }
  }
}

console.log(`Successfully filled ${missingCount} missing image paths with the default Nanobanana image.`);
