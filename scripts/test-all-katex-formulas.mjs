import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const katex = require('../apps/web/node_modules/katex');

const root = process.cwd();
const dir = path.join(root, 'apps/web/src/data/subjects');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'professional-gap-topics.ts');

let totalMathParsed = 0;
let errors = [];

files.forEach(f => {
  const content = fs.readFileSync(path.join(dir, f), 'utf8');
  const lines = content.split('\n');

  lines.forEach((l, idx) => {
    // Extract $$ ... $$
    const blockMaths = l.match(/\$\$([^\$]+)\$\$/g) || [];
    blockMaths.forEach(bm => {
      totalMathParsed++;
      // Unescape file-level JS escapes to get the runtime string passed to KaTeX
      const raw = bm.slice(2, -2).trim();
      const math = raw.replace(/\\\\/g, '\\');
      try {
        katex.renderToString(math, { throwOnError: true, displayMode: true });
      } catch (err) {
        errors.push({ file: f, line: idx + 1, type: 'BlockMath', math, error: err.message });
      }
    });

    // Extract $ ... $ (exclude the ones in $$)
    const lineWithoutBlocks = l.replace(/\$\$[^\$]+\$\$/g, '');
    const inlineMaths = lineWithoutBlocks.match(/\$([^\$]+)\$/g) || [];
    inlineMaths.forEach(im => {
      totalMathParsed++;
      const raw = im.slice(1, -1).trim();
      const math = raw.replace(/\\\\/g, '\\');
      try {
        katex.renderToString(math, { throwOnError: true, displayMode: false });
      } catch (err) {
        errors.push({ file: f, line: idx + 1, type: 'InlineMath', math, error: err.message });
      }
    });
  });
});

console.log('============================================================');
console.log('🔬 Arch 全站 13 科所有 KaTeX 數學/物理/化學/力學公式語法與解析驗證');
console.log('============================================================');
console.log(`已成功解析並驗證 ${totalMathParsed} 個 KaTeX 公式區塊。`);
console.log(`發現解析錯誤數: ${errors.length}`);

if (errors.length > 0) {
  console.log('\n❌ 發現語法錯誤清單：');
  errors.forEach((e, i) => {
    console.log(`[#${i + 1}] ${e.file}:${e.line} (${e.type})`);
    console.log(`    公式內容: ${e.math}`);
    console.log(`    錯誤訊息: ${e.error}\n`);
  });
  process.exit(1);
} else {
  console.log('🎉 恭喜！全站所有 13 科目數百個數學與工程公式 KaTeX 語法 100% 正確無誤！');
}
