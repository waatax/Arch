/**
 * 資料檔語法閘門 (Data-file syntax gate)
 *
 * 教材資料檔（apps/web/src/data）常被批次指令碼（sed / 正規表示式取代）改寫，
 * 只要引號被動到一個字元，整個檔案就無法解析，CI 會在很後面才以難懂的訊息爆掉。
 * 這個閘門直接用 TypeScript 官方 parser 檢查，並針對已知的三種引號災情給出明確訊息：
 *
 *   1. 單引號字串裡又出現 className='...'（內層引號提前結束字串）
 *   2. 字串以 " 開頭卻用 ' 結尾（前後引號不成對）
 *   3. 分隔用的引號被加上反斜線，例如 \"key\": [\'a.webp\']
 *
 * 用法：node scripts/validate-data-syntax.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const root = process.cwd();
const dataDir = path.join(root, 'apps', 'web', 'src', 'data');

// typescript 裝在 apps/web 底下，從該處解析才找得到
function loadTypeScript() {
  const candidates = [
    path.join(root, 'apps', 'web', 'package.json'),
    path.join(root, 'package.json'),
  ];
  for (const base of candidates) {
    try {
      return createRequire(base)('typescript');
    } catch {
      /* try next */
    }
  }
  console.error('找不到 typescript 套件，請先執行 pnpm install。');
  process.exit(1);
}

const ts = loadTypeScript();

function collect(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...collect(full));
    else if (entry.name.endsWith('.ts') || entry.name.endsWith('.tsx')) out.push(full);
  }
  return out;
}

const BACKSLASH = String.fromCharCode(92);
const files = collect(dataDir).sort();
const errors = [];

for (const file of files) {
  const rel = path.relative(root, file).split(path.sep).join('/');
  const src = fs.readFileSync(file, 'utf8');

  const sf = ts.createSourceFile(file, src, ts.ScriptTarget.ESNext, true, ts.ScriptKind.TS);
  const diags = sf.parseDiagnostics ?? [];

  if (diags.length) {
    const shown = diags.slice(0, 5);
    for (const d of shown) {
      const { line, character } = sf.getLineAndCharacterOfPosition(d.start);
      errors.push(
        `${rel}:${line + 1}:${character + 1} 語法錯誤 - ${ts.flattenDiagnosticMessageText(d.messageText, ' ')}`
      );
    }
    if (diags.length > shown.length) {
      errors.push(`${rel}: 另有 ${diags.length - shown.length} 個語法錯誤未列出`);
    }

    // 針對已知的引號災情補充可讀的提示
    const hints = new Set();
    src.split(/\r?\n/).forEach((ln, i) => {
      if (/'[^'\n]*className='/.test(ln)) {
        hints.add(`${rel}:${i + 1} 單引號字串內含 className='...'，內層請改用雙引號`);
      }
      if (new RegExp(BACKSLASH + BACKSLASH + '["\'][,:\\]}]').test(ln)) {
        hints.add(`${rel}:${i + 1} 分隔用的引號被加上反斜線，請移除多餘的 ${BACKSLASH}`);
      }
    });
    for (const h of [...hints].slice(0, 5)) errors.push(`  ↳ ${h}`);
  }
}

if (errors.length) {
  console.error(`資料檔語法驗證失敗（${files.length} 個檔案中發現問題）：`);
  for (const e of errors) console.error(`- ${e}`);
  console.error('\n提示：資料檔請勿用 sed / 正規表示式批次改引號，改動後務必重跑本閘門。');
  process.exit(1);
}

console.log(`資料檔語法驗證通過：${files.length} 個 data 檔案全部可正確解析。`);
