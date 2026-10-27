/**
 * 匯入技專校院入學測驗中心「公告資料專區」的官方統計，供闖關學習做能力對齊。
 *
 *   B1 各群類成績標準一覽表：前標、均標、後標
 *   D3 各科答對率及鑑別指數表：每題 P、Ph（前 25%）、Pl（後 25%）、Pa～Pe（五個各 20% 能力組）、D
 *
 * 下載位址（每年一份）：
 *   https://www.tcte.edu.tw/index.php?mod=TVETest/opendata4y/yt/{學年度}/fn/{學年度}-4Y-ReportB1.pdf
 *   https://www.tcte.edu.tw/index.php?mod=TVETest/opendata4y/yt/{學年度}/fn/{學年度}-4Y-ReportD3.pdf
 *
 * 用法：node scripts/import-tcte-opendata.mjs <放 PDF 的資料夾>
 *   需要 pdftotext（poppler / xpdf）。輸出 data/registry/tcte-item-stats.json。
 *
 * 品質處理：113 學年度 D3 的 Pa～Pe 與 P 不一致（五組平均與 P 相差 2～13 個百分點），
 * 但 P、Ph、Pl 正常。凡是「五組平均與 P 相差超過 1 個百分點」的科目，改以 P、Ph、Pl
 * 擬合三參數邏輯斯模型（3PL，能力常態分布）推回五組答對率，並標註 bandSource = '3pl'。
 * 此法在資料一致的 114 學年度回推五組答對率的平均誤差約 1～2 個百分點。
 */
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const [pdfDir] = process.argv.slice(2);
if (!pdfDir) {
  console.error('用法：node scripts/import-tcte-opendata.mjs <PDF 資料夾>');
  process.exit(1);
}

const YEARS = [111, 112, 113, 114, 115];
const SECTIONS = {
  '共同科目-國文': 'chinese',
  '共同科目-英文': 'english',
  '共同科目-數學(C)': 'math-c',
  '專業科目(一)-土木與建築群': 'professional-1',
  '專業科目(二)-土木與建築群': 'professional-2',
};

const pdftext = (file, mode) =>
  execFileSync('pdftotext', ['-enc', 'UTF-8', mode, file, '-'], { encoding: 'utf8', maxBuffer: 1 << 28 });

/* ───────────── B1 成績標準 ───────────── */
function parseStandards(y) {
  const out = {};
  const lines = pdftext(path.join(pdfDir, `${y}-B1.pdf`), '-raw').split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // 111–113：同一列「四技二專-專業科目(一)-土木與建築群 到考 平均 前標 均標 後標」
    const full = line.match(/四技二專-(?:共同科目|專業科目\((一|二)\))-(國文|英文|數學\(C\)|土木與建築群)\s+([\d,]+)\s+([\d.]+)\s+(\d+)\s+(\d+)\s+(\d+)/);
    // 114–115：科目名稱與數字同列、群別前綴在上一列
    const short = line.match(/^(國文|英文|數學\(C\)|土木與建築群)\s+([\d,]+)\s+([\d.]+)\s+(\d+)\s+(\d+)\s+(\d+)/);
    let key;
    let m;
    if (full) {
      m = [null, full[3], full[4], full[5], full[6], full[7]];
      key = full[2] === '國文' ? 'chinese' : full[2] === '英文' ? 'english' : full[2] === '數學(C)' ? 'math-c' : full[1] === '二' ? 'professional-2' : 'professional-1';
    } else if (short) {
      m = [null, short[2], short[3], short[4], short[5], short[6]];
      if (short[1] === '國文') key = 'chinese';
      else if (short[1] === '英文') key = 'english';
      else if (short[1] === '數學(C)') key = 'math-c';
      else key = out['professional-1'] ? 'professional-2' : 'professional-1';
    } else continue;
    if (out[key]) continue;
    out[key] = {
      takers: Number(m[1].replace(/,/g, '')),
      mean: Number(m[2]),
      top: Number(m[3]), // 前標（第 75 百分位）
      mid: Number(m[4]), // 均標（第 50 百分位）
      low: Number(m[5]), // 後標（第 25 百分位）
    };
  }
  for (const k of Object.values(SECTIONS)) if (!out[k]) throw new Error(`${y} B1 缺少 ${k}`);
  return out;
}

/* ───────────── D3 答對率 ───────────── */
function parseItems(y) {
  const out = {};
  const lines = pdftext(path.join(pdfDir, `${y}-D3.pdf`), '-layout').split(/\r?\n/);
  let current = null;
  let pendingNo = null;
  for (const line of lines) {
    const header = line.match(/學年度四技二專-(.+?)-答對率及鑑別指數表/);
    if (header) {
      current = SECTIONS[header[1]] ?? null;
      if (current) out[current] = out[current] || {};
      continue;
    }
    if (!current) continue;
    if (/^\s*\d+\s*$/.test(line)) {
      // 題號單獨一行而沒有數值（官方表格本身缺漏，例如 111 年第 1 題）
      pendingNo = Number(line.trim());
      continue;
    }
    let nums = line.trim().split(/\s+/);
    if (pendingNo !== null && nums.length >= 9 && nums[0].includes('.')) nums = [String(pendingNo), ...nums];
    pendingNo = null;
    if (nums.length < 10 || !/^\d+$/.test(nums[0])) continue;
    const vals = nums.slice(1, 10).map(Number);
    if (vals.some((v) => !Number.isFinite(v))) continue;
    const [p, ph, pl, pa, pb, pc, pd, pe, d] = vals;
    out[current][Number(nums[0])] = { p, ph, pl, bands: [pa, pb, pc, pd, pe], d };
  }
  return out;
}

/* ───────────── 3PL 擬合（能力 θ ~ N(0,1)） ───────────── */
const GRID = [];
for (let t = -4; t <= 4.0001; t += 0.02) GRID.push(t);
const WEIGHT = GRID.map((t) => Math.exp((-t * t) / 2));
function meanOver(f, lo, hi) {
  let s = 0;
  let w = 0;
  for (let i = 0; i < GRID.length; i++) {
    if (GRID[i] >= lo && GRID[i] < hi) {
      s += f(GRID[i]) * WEIGHT[i];
      w += WEIGHT[i];
    }
  }
  return s / w;
}
const Q25 = 0.6745;
const QUINTILES = [-Infinity, -0.8416, -0.2533, 0.2533, 0.8416, Infinity];
function fit3pl(P, Ph, Pl) {
  const target = [P / 100, Ph / 100, Pl / 100];
  let best = null;
  for (let c = 0; c <= 0.351; c += 0.05) {
    for (let a = 0.3; a <= 4.001; a += 0.1) {
      for (let b = -3; b <= 3.001; b += 0.05) {
        const f = (t) => c + (1 - c) / (1 + Math.exp(-1.7 * a * (t - b)));
        const m = [meanOver(f, -9, 9), meanOver(f, Q25, 9), meanOver(f, -9, -Q25)];
        const e = (m[0] - target[0]) ** 2 + (m[1] - target[1]) ** 2 + (m[2] - target[2]) ** 2;
        if (!best || e < best.e) best = { e, f };
      }
    }
  }
  const bands = [];
  for (let k = 4; k >= 0; k--) bands.push(+(100 * meanOver(best.f, QUINTILES[k], QUINTILES[k + 1])).toFixed(2));
  return bands;
}

/* ───────────── 組合輸出 ───────────── */
const standards = {};
const items = {};
const repaired = [];
for (const y of YEARS) {
  standards[y] = parseStandards(y);
  const parsed = parseItems(y);
  for (const [exam, rows] of Object.entries(parsed)) {
    const list = Object.values(rows);
    const gap = list.reduce((s, x) => s + Math.abs(x.bands.reduce((a, b) => a + b, 0) / 5 - x.p), 0) / list.length;
    const use3pl = gap > 1;
    if (use3pl) repaired.push(`${y}-${exam}（五組平均與 P 平均相差 ${gap.toFixed(1)}）`);
    for (const [no, x] of Object.entries(rows)) {
      items[`${y}-${exam}-${no}`] = {
        p: x.p,
        ph: x.ph,
        pl: x.pl,
        d: x.d,
        bands: use3pl ? fit3pl(x.p, x.ph, x.pl) : x.bands,
        bandSource: use3pl ? '3pl' : 'official',
      };
    }
  }
}

const out = {
  source: {
    publisher: '財團法人技專校院入學測驗中心基金會',
    reports: ['B1 各群(類)成績標準一覽表', 'D3 各科答對率及鑑別指數表'],
    urlPattern: 'https://www.tcte.edu.tw/index.php?mod=TVETest/opendata4y/yt/{year}/fn/{year}-4Y-Report{B1|D3}.pdf',
    years: YEARS,
    groups: ['共同科目：國文、英文、數學(C)', '土木與建築群：專業科目(一)、專業科目(二)'],
    notes: [
      '前標、均標、後標分別為第 75、50、25 百分位數之分數。',
      'Pa～Pe 為依總分由高至低各占 20% 的五個能力組答對率。',
      ...repaired.map((r) => `以 P、Ph、Pl 擬合 3PL 重建五組答對率：${r}`),
    ],
  },
  standards,
  items,
};

const target = path.join(root, 'data', 'registry', 'tcte-item-stats.json');
fs.writeFileSync(target, JSON.stringify(out, null, 1) + '\n');
console.log(`寫入 ${path.relative(root, target)}：${Object.keys(items).length} 題、${YEARS.length} 個學年度`);
if (repaired.length) console.log('以 3PL 重建：' + repaired.join('；'));
