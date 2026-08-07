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
  
  // The regex finds the end of the illustrations array and appends the 5th image
  // Current format: "illustrations": ['...-context.webp', '...-mechanism.webp', '...-comparison.webp', '...-step.webp'],
  // We want to add: , '...-real-world.webp'
  
  // Match the specific string from our previous script
  const searchStr = `'${subjectSlug}-step.webp'],`;
  const replaceStr = `'${subjectSlug}-step.webp', '${subjectSlug}-real-world.webp'],`;
  
  if (content.includes(searchStr)) {
      content = content.replaceAll(searchStr, replaceStr);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${file} with 5th image.`);
  } else {
      // Fallback: try finding the array and appending it if it's uniquely formatted
      console.log(`Skipped ${file} (Search string not found, might have been modified manually)`);
  }
}
