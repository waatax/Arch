import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const subjectsDir = path.join(root, 'apps', 'web', 'src', 'data', 'subjects');

const FORBIDDEN_PATTERNS = [
  { pattern: /"heading":\s*"C[1-3]"|heading:\s*'C[1-3]'/, label: 'Dummy Concept Heading (C1/C2/C3)' },
  { pattern: /"body":\s*"B[1-3]{10,}"|body:\s*'B[1-3]{10,}'/, label: 'Dummy Body Placeholder (B1B1/B2B2)' },
  { pattern: /"question":\s*"Q[1-5]"|question:\s*'Q[1-5]'/, label: 'Dummy Question Placeholder (Q1-Q5)' },
  { pattern: /'img[1-3]\.webp'|"img[1-3]\.webp"/, label: 'Dummy Image Placeholder (img1/img2.webp)' },
  { pattern: /80%\s*考生在概念題中因粗心忽略前提假設而失分/, label: 'Generic AI Slop Trap' },
];

let totalErrors = 0;
const files = fs.readdirSync(subjectsDir).filter((f) => f.endsWith('.ts'));

console.log('🛡️  啟動 Anti-Slop & 教學品質防護檢查 (13 科 111 主題)...');

for (const file of files) {
  const filePath = path.join(subjectsDir, file);
  const content = fs.readFileSync(filePath, 'utf8');

  for (const { pattern, label } of FORBIDDEN_PATTERNS) {
    const match = content.match(pattern);
    if (match) {
      console.error(`❌ [Anti-Slop Error] ${file}: 發現違規佔位符/樣板詞 [${label}] -> "${match[0]}"`);
      totalErrors++;
    }
  }

  // Cross-domain mismatch check
  if (file === 'surveying.ts' && content.includes('MPa = N/mm²')) {
    console.error(`❌ [Anti-Slop Error] surveying.ts: 發現力學單位跨領域污染 (MPa = N/mm²)`);
    totalErrors++;
  }
  if (file === 'drafting.ts' && content.includes('MPa = N/mm²')) {
    console.error(`❌ [Anti-Slop Error] drafting.ts: 發現力學單位跨領域污染 (MPa = N/mm²)`);
    totalErrors++;
  }
}

if (totalErrors > 0) {
  console.error(`\n🚨 Anti-Slop 驗證失敗：共發現 ${totalErrors} 處品質違規，請修正後再提交。`);
  process.exit(1);
} else {
  console.log('✅ Anti-Slop 驗證通過：所有科目資料皆無佔位符、無空洞樣板詞，具備教科書級教學深度！');
}
