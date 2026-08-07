import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const subjectsDir = path.join(root, 'apps', 'web', 'src', 'data', 'subjects');

const files = fs.readdirSync(subjectsDir).filter(f => f.endsWith('.ts'));

for (const file of files) {
  const filePath = path.join(subjectsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  const slugMatch = content.match(/"?slug"?:\s*['"]([^'"]+)['"]/);
  const subjectSlug = slugMatch ? slugMatch[1] : file.replace('.ts', '');
  
  // Find "illustrations": [ ... ]
  // We want to add the real-world image to the end of the array if it's not already there.
  
  const newImage = `${subjectSlug}-real-world.webp`;
  
  if (!content.includes(newImage)) {
    // regex to match illustrations array
    content = content.replace(/"?illustrations"?: \[\s*(.*?)\s*\]/g, (match, p1) => {
      // p1 contains the items in the array. 
      // If p1 doesn't end with a comma, add one.
      const items = p1.trim();
      const lastChar = items.charAt(items.length - 1);
      if (lastChar === ',') {
        return `"illustrations": [ ${items} '${newImage}' ]`;
      } else {
        return `"illustrations": [ ${items}, '${newImage}' ]`;
      }
    });
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file} with 5th image: ${newImage}`);
  } else {
    console.log(`Skipped ${file} (Already has ${newImage})`);
  }
}
