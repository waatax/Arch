import fs from 'fs';
import path from 'path';

const SHARDS_DIR = path.join(process.cwd(), 'apps/web/public/practice-data/shards');
const FIGURES_DIR = path.join(process.cwd(), 'apps/web/public/exams/figures');

// Build a flat list of all figure files
const allFigures = [];
function walkDirSafe(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDirSafe(fullPath);
    } else {
      if (file.endsWith('.png') || file.endsWith('.webp') || file.endsWith('.jpg')) {
        const normalized = fullPath.replace(/\\/g, '/');
        const index = normalized.indexOf('/apps/web/public');
        const webPath = index !== -1 ? normalized.substring(index + '/apps/web/public'.length) : '';
        allFigures.push({ name: file, fullPath, webPath });
      }
    }
  }
}
walkDirSafe(FIGURES_DIR);
console.log(`Found ${allFigures.length} figures in total.`);

const examAliases = {
  'math-c': ['math-c', 'mc'],
  'chinese': ['chinese', 'ch'],
  'english': ['english', 'en'],
  'professional-1': ['professional-1', '1'],
  'professional-2': ['professional-2', '2']
};

let totalFixedOcr = 0;
let totalMappedImages = 0;

function heuristicFix(text) {
  if (!text) return text;
  let original = text;
  text = text.replace(/最 k 1 小正整數/g, '最小正整數');
  text = text.replace(/x2\s*\+\s*y2/g, 'x^2 + y^2');
  
  // Only replace x2 or y2 with x^2 if they appear as variables 
  // (not parts of hex strings or normal words, but since it's Chinese text, they usually are variables).
  text = text.replace(/(?<![a-zA-Z])x2(?![a-zA-Z])/g, 'x^2');
  text = text.replace(/(?<![a-zA-Z])y2(?![a-zA-Z])/g, 'y^2');
  
  if (original !== text) totalFixedOcr++;
  return text;
}

const shards = fs.readdirSync(SHARDS_DIR).filter(f => f.endsWith('.json'));
for (const shard of shards) {
  const shardPath = path.join(SHARDS_DIR, shard);
  const data = JSON.parse(fs.readFileSync(shardPath, 'utf8'));
  let modified = false;
  
  for (const q of data.questions) {
    const year = q.year;
    const exam = q.exam;
    const qNo = q.questionNo;
    const aliases = examAliases[exam] || [exam];
    
    let matchedFigure = null;
    for (const fig of allFigures) {
      if (fig.webPath.includes(`/${year}/`) || fig.name.startsWith(`${year}-`) || fig.name.includes(`${year}chinese`)) {
        for (const alias of aliases) {
          const pattern1 = new RegExp(`^${year}-${alias}-${qNo}\\.(png|webp|jpg)$`);
          const pattern2 = new RegExp(`^${alias}-q${qNo}\\.(png|webp|jpg)$`);
          const pattern3 = new RegExp(`^${alias}-${qNo}\\.(png|webp|jpg)$`);
          const pattern4 = new RegExp(`^${year}${alias}-${qNo}\\.(png|webp|jpg)$`); // for 115chinese-14.png
          const pattern5 = new RegExp(`^${year}-${alias}q${qNo}\\.(png|webp|jpg)$`);
          
          if (pattern1.test(fig.name) || pattern2.test(fig.name) || pattern3.test(fig.name) || pattern4.test(fig.name) || pattern5.test(fig.name)) {
            matchedFigure = fig;
            break;
          }
        }
      }
      if (matchedFigure) break;
    }
    
    if (matchedFigure && q.figureImage !== matchedFigure.webPath) {
      q.figureImage = matchedFigure.webPath;
      q.requiresOfficialFigure = true;
      totalMappedImages++;
      modified = true;
    }
    
    const originalExcerpt = q.excerpt;
    q.excerpt = heuristicFix(q.excerpt);
    
    const checkPlaceholder = (str) => {
      if (!str) return false;
      return str.includes('公式或圖形請參照本題圖面') || str.includes('圖形請參照') || str.includes('無法以文字呈現');
    };
    
    let hasPlaceholder = checkPlaceholder(q.excerpt);
    
    if (q.options) {
      for (const [key, val] of Object.entries(q.options)) {
        const originalOpt = val;
        q.options[key] = heuristicFix(val);
        if (checkPlaceholder(val)) hasPlaceholder = true;
        if (originalOpt !== q.options[key]) modified = true;
      }
    }
    
    if (originalExcerpt !== q.excerpt) modified = true;
    
    if (hasPlaceholder && !q.requiresOfficialFigure) {
      q.requiresOfficialFigure = true;
      modified = true;
    }
  }
  
  if (modified) {
    fs.writeFileSync(shardPath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`Updated ${shard}`);
  }
}

console.log(`\\nAudit Complete!`);
console.log(`Total OCR fixes applied: ${totalFixedOcr}`);
console.log(`Total images mapped: ${totalMappedImages}`);
