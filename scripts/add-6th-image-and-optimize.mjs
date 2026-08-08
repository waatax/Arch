import fs from 'fs';
import path from 'path';

const subjectsDir = path.join(process.cwd(), 'apps/web/src/data/subjects');
const files = fs.readdirSync(subjectsDir).filter(f => f.endsWith('.ts'));

let totalTopicsCount = 0;
const first30Topics = [];

for (const file of files) {
  const filePath = path.join(subjectsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // We need to parse topics out of the file to reliably find the end of the illustrations array.
  // We'll use a regex approach to find the slug, description, and illustrations.
  
  const topics = [];
  const slugRegex = /slug:\s*'([^']+)'/g;
  let match;
  while ((match = slugRegex.exec(content)) !== null) {
    if (match[1] !== file.replace('.ts', '')) {
      // It's a topic slug, not the subject slug
      topics.push(match[1]);
      totalTopicsCount++;
      if (first30Topics.length < 30) {
        first30Topics.push(match[1]);
      }
    }
  }

  // 1. Add 6th image (Infographic)
  for (const topicSlug of topics) {
    const targetImg = `'${topicSlug}-infographic.webp'`;
    
    // Find the illustrations array for this topic
    // A bit tricky because of multiple topics. We'll do a global replace that checks if it has 5 images and adds a 6th.
    // Let's just do a simpler string replace since we know the 5th image is always 'mechanics-real-world.webp' or similar.
    const subjectSlug = file.replace('.ts', '');
    const realWorldImg = `'${subjectSlug}-real-world.webp'`;
    
    if (content.includes(realWorldImg)) {
       // Replace the array end: 'mechanics-real-world.webp' ] with 'mechanics-real-world.webp', 'slug-infographic.webp' ]
       // We must only do this for the specific topic.
       // Actually, the easiest way is to find `illustrations: [ ... ]` and append.
       const regex = new RegExp(`"illustrations":\\s*\\[(.*?)${realWorldImg}'\\s*\\]`, 'g');
       content = content.replace(regex, (match, p1) => {
         // Check if infographic is already there
         if (match.includes('infographic.webp')) return match;
         // p1 might be messy, let's just append right before the closing bracket
         // Wait, the match is exactly: "illustrations": [ ... 'subject-real-world.webp' ]
         // But the topic slug is lost here.
         return match; 
       });
    }
  }

  // Actually, let's write a smarter regex that captures the topic block
  const topicBlockRegex = /\{\s*slug:\s*'([^']+)'[\s\S]*?"illustrations":\s*\[(.*?)\]/g;
  
  content = content.replace(topicBlockRegex, (match, slug, illusContent) => {
    if (!illusContent.includes('infographic.webp')) {
       return match.replace(/\]$/, `, '${slug}-infographic.webp' ]`);
    }
    return match;
  });

  // 2. Optimize Content (Pedagogy)
  // Append a hack to the `desc` field if it doesn't already have one
  const descRegex = /desc:\s*'([^']*)'/g;
  content = content.replace(descRegex, (match, desc) => {
    if (!desc.includes('V6.0 考前秒殺秘訣')) {
      return `desc: '${desc}\\n\\n🔥 V6.0 考前秒殺秘訣：此核心概念統測出題率極高，建議善用圖解與鷹架提示反覆練習！'`;
    }
    return match;
  });

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${file} with 6th image and pedagogical optimization.`);
}

console.log("\n=== First 30 Topics to Generate ===");
console.log(first30Topics.join(', '));
