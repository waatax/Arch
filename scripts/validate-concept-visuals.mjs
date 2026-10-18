// Validate apps/web/src/data/conceptVisuals: every figure attaches to exactly one concept, renders with theme
// classes only, stays inside its viewBox, and never presents invented exam statistics as data.
import fs from 'node:fs';
import path from 'node:path';
import { loadTsModule, repoRoot } from './lib/load-ts-module.mjs';

const MIN_VISUALS_PER_TOPIC = 3;
const dir = path.join(repoRoot, 'apps/web/src/data/conceptVisuals');
const { allSubjects } = await loadTsModule('apps/web/src/data/subjects.ts');
const { conceptVisualRegistry, normalizeHeading } = await loadTsModule('apps/web/src/data/conceptVisuals/index.ts');

const errors = [];
const warn = [];
let total = 0;
const kinds = { diagram: 0, chart: 0, table: 0 };

// Exam-frequency numbers have no public source; charts must not claim them.
const FABRICATED_STATS = /(命題|出題|考題)(比重|占比|佔比|配比|分布|分佈|頻率)|考頻統計|歷年出現頻率|題數變化趨勢|考點占比|考點比重/;

const visualFiles = fs.readdirSync(dir).filter((f) => !['index.ts', 'kit.ts', 'types.ts'].includes(f)).map((f) => f.replace(/\.ts$/, ''));
for (const subject of visualFiles) {
  if (!conceptVisualRegistry[subject]) errors.push(`${subject}.ts 未在 conceptVisuals/index.ts 註冊`);
}

for (const subject of allSubjects) {
  const map = conceptVisualRegistry[subject.slug] ?? {};
  for (const slug of Object.keys(map)) {
    if (!subject.topics.some((t) => t.slug === slug)) errors.push(`${subject.slug}/${slug}: 圖像對應的主題不存在`);
  }
  for (const topic of subject.topics) {
    const route = `${subject.slug}/${topic.slug}`;
    const visuals = map[topic.slug] ?? [];
    if (visuals.length < MIN_VISUALS_PER_TOPIC) errors.push(`${route}: 圖像 ${visuals.length} 張 < ${MIN_VISUALS_PER_TOPIC}`);
    const headings = topic.concepts.map((c) => normalizeHeading(c.heading));
    const titles = new Set();
    for (const v of visuals) {
      total++;
      kinds[v.kind] = (kinds[v.kind] ?? 0) + 1;
      const label = `${route} 「${v.title}」`;
      const key = normalizeHeading(v.concept);
      const hits = headings.filter((h) => h.startsWith(key));
      if (hits.length !== 1) errors.push(`${label}: concept「${v.concept}」對到 ${hits.length} 個觀念（需恰好 1 個）`);
      if (titles.has(v.title)) errors.push(`${label}: 同主題標題重複`);
      titles.add(v.title);
      if (!['diagram', 'chart', 'table'].includes(v.kind)) errors.push(`${label}: kind 不合法 (${v.kind})`);
      if ((v.kind === 'diagram' || v.kind === 'chart') && !v.svg) errors.push(`${label}: ${v.kind} 缺 svg`);
      if (v.kind === 'table' && !v.table) errors.push(`${label}: table 缺資料`);
      if (v.table) {
        const width = v.table.headers.length;
        v.table.rows.forEach((row, i) => { if (row.length !== width) errors.push(`${label}: 表格第 ${i + 1} 列欄數 ${row.length} ≠ ${width}`); });
      }
      if (FABRICATED_STATS.test(`${v.title} ${v.caption ?? ''}`)) errors.push(`${label}: 宣稱考題統計數據（無公開來源，請改為參考表格）`);
      if (!v.takeaways?.length) warn.push(`${label}: 缺讀圖重點`);
      if (v.svg) {
        if (/#[0-9a-fA-F]{3,8}\b/.test(v.svg)) errors.push(`${label}: SVG 含寫死色碼，請改用 cv-* 主題類別`);
        const vb = v.svg.match(/viewBox="(-?[\d.]+) (-?[\d.]+) ([\d.]+) ([\d.]+)"/);
        if (!vb) { errors.push(`${label}: SVG 缺 viewBox`); continue; }
        const [X0, Y0, W, H] = vb.slice(1, 5).map(Number);
        for (const m of v.svg.matchAll(/<text x="(-?[\d.]+)" y="(-?[\d.]+)"/g)) {
          const [x, y] = [Number(m[1]), Number(m[2])];
          if (x < X0 - 2 || x > X0 + W + 2 || y < Y0 || y > Y0 + H + 4) { errors.push(`${label}: 文字座標 (${x}, ${y}) 超出 viewBox`); break; }
        }
      }
    }
  }
}

console.log(`🖼️  概念圖像驗證：${total} 張（圖解 ${kinds.diagram}、圖表 ${kinds.chart}、表格 ${kinds.table}）`);
if (warn.length) console.log(`⚠️  ${warn.length} 項提醒\n  ${warn.slice(0, 10).join('\n  ')}`);
if (errors.length) {
  console.error(`❌ ${errors.length} 項錯誤\n  ${errors.slice(0, 60).join('\n  ')}`);
  process.exit(1);
}
console.log('✅ 每張圖都對應唯一觀念、使用主題色類別、無越界文字、無虛構考題統計');
