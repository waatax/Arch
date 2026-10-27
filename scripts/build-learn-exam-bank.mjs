/**
 * 產生闖關學習的「統測對標檢定」題庫索引：apps/web/src/data/learnPath/generated/examBank.json
 *
 * 來源：
 *   - apps/web/public/practice-data/shards/*.json：111～115 學年度統測歷屆試題（題目內容於執行期再載入）
 *   - data/registry/tcte-item-stats.json：測驗中心公布的每題答對率與五個能力組答對率（scripts/import-tcte-opendata.mjs）
 *
 * 每門與統測相關的課程得到一個題池：
 *   - 階段課程（高一～高二）：111～114 學年度、屬於該課程單元範圍的題目
 *   - 高三課程：整份 114 或 115 學年度試卷（模擬考）
 * 題組（同一篇閱讀）整組保留，避免拆散。
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const shardDir = path.join(root, 'apps/web/public/practice-data/shards');
const stats = JSON.parse(fs.readFileSync(path.join(root, 'data/registry/tcte-item-stats.json'), 'utf8'));

const STAGE_YEARS = [111, 112, 113, 114];
const r = (s) => `/subjects/${s}`;

/** course key → { exam, title, filter(q) } */
const POOLS = {
  'math-1': { exam: 'math-c', routes: ['functions-graphs', 'trigonometry', 'vectors'].map((t) => r(`math-c/${t}`)) },
  'math-2': { exam: 'math-c', routes: ['algebra', 'lines-circles', 'sequences-series', 'permutations-combinations'].map((t) => r(`math-c/${t}`)) },
  'math-3': { exam: 'math-c', routes: ['trig-applications', 'exponents-logarithms', 'space-vectors', 'matrices'].map((t) => r(`math-c/${t}`)) },
  'math-4': { exam: 'math-c', routes: ['linear-programming', 'geometry', 'calculus', 'integration'].map((t) => r(`math-c/${t}`)) },
  'survey-1': { exam: 'professional-2', routes: ['elevation-and-leveling', 'instrument-setup'].map((t) => r(`surveying/${t}`)) },
  'survey-2': { exam: 'professional-2', routes: ['distance-and-angle', 'traverse-surveying', 'coordinate-computation', 'area-and-error'].map((t) => r(`surveying/${t}`)) },
  'drafting-1': { exam: 'professional-2', routes: ['lines-and-lettering', 'scale', 'dimensioning-and-symbols'].map((t) => r(`drafting/${t}`)) },
  'drafting-2': { exam: 'professional-2', routes: ['orthographic-projection', 'sectional-views', 'architectural-plan', 'architectural-elevation'].map((t) => r(`drafting/${t}`)) },
  'mechanics-1': { exam: 'professional-1', routes: ['units-vectors', 'force-equilibrium', 'friction', 'truss'].map((t) => r(`mechanics/${t}`)) },
  'mechanics-2': { exam: 'professional-1', routes: ['centroid', 'stress-strain', 'beam'].map((t) => r(`mechanics/${t}`)) },
  'materials-1': { exam: 'professional-1', routes: ['basic-properties', 'cement-types', 'cement-vicat', 'cement-strength', 'concrete'].map((t) => r(`materials/${t}`)) },
  'materials-2': { exam: 'professional-1', routes: ['stone-ceramics-glass', 'wood', 'polymers-asphalt', 'metals', 'green-materials'].map((t) => r(`materials/${t}`)) },
  'english-1': { exam: 'english', years: [111, 112, 113], routes: [r('english/vocabulary-phrases'), r('english/grammar-patterns')] },
  'english-2': { exam: 'english', years: [111, 112, 113], routes: [r('english/conversation-daily-use')] },
  'english-3': { exam: 'english', years: [111, 112, 113], routes: [r('english/cloze-passage-structure')] },
  'english-4': { exam: 'english', years: [111, 112, 113], routes: [r('english/reading-comprehension')] },
  'english-5': { exam: 'english', years: [114], full: true },
  'english-6': { exam: 'english', years: [115], full: true },
  // 國文 1～4：111～113 年的題目（題組整組）依序輪流分配，使每階段都有字音字形、國學常識與閱讀
  'chinese-1': { exam: 'chinese', years: [111, 112, 113], deal: [0, 4] },
  'chinese-2': { exam: 'chinese', years: [111, 112, 113], deal: [1, 4] },
  'chinese-3': { exam: 'chinese', years: [111, 112, 113], deal: [2, 4] },
  'chinese-4': { exam: 'chinese', years: [111, 112, 113], deal: [3, 4] },
  'chinese-5': { exam: 'chinese', years: [114], full: true },
  'chinese-6': { exam: 'chinese', years: [115], full: true },
  'math-review': { exam: 'math-c', years: [115], full: true },
  'exam-pro1': { exam: 'professional-1', years: [115], full: true },
  'exam-pro2': { exam: 'professional-2', years: [115], full: true },
};

const EXAM_LABEL = {
  chinese: '國文',
  english: '英文',
  'math-c': '數學(C)',
  'professional-1': '專業科目(一)',
  'professional-2': '專業科目(二)',
};

/* 讀入全部試題 */
const questions = [];
for (const f of fs.readdirSync(shardDir).filter((x) => x.endsWith('.json')).sort()) {
  const j = JSON.parse(fs.readFileSync(path.join(shardDir, f), 'utf8'));
  for (const q of j.questions) questions.push({ ...q, shard: f.replace(/\.json$/, '') });
}

const excluded = [];
function usable(q) {
  const st = stats.items[`${q.year}-${q.exam}-${q.questionNo}`];
  const why = !st ? '無官方答對率' : q.answer === '送分' ? '送分題' : q.corruptedOcr ? 'OCR 損毀' : !['A', 'B', 'C', 'D'].includes(q.answer[0]) ? '答案格式' : null;
  if (why) excluded.push(`${q.id}：${why}`);
  return !why;
}

const r1 = (x) => Math.round(x * 10) / 10;
function entry(q) {
  const st = stats.items[`${q.year}-${q.exam}-${q.questionNo}`];
  return {
    id: q.id,
    shard: q.shard,
    year: q.year,
    no: q.questionNo,
    group: q.groupId ?? undefined,
    route: q.lessonRoute,
    p: r1(st.p),
    d: r1(st.d),
    bands: st.bands.map(r1),
    est: st.bandSource === '3pl' ? 1 : undefined,
  };
}

/** 依題組合併成「單位」，確保同一篇閱讀不被拆開 */
function toUnits(list) {
  const units = [];
  const byGroup = new Map();
  for (const q of list) {
    const key = q.groupId ? `${q.year}-${q.exam}-${q.groupId}` : null;
    if (key && byGroup.has(key)) byGroup.get(key).push(q);
    else {
      const u = [q];
      units.push(u);
      if (key) byGroup.set(key, u);
    }
  }
  return units;
}

const pools = {};
for (const [key, def] of Object.entries(POOLS)) {
  const years = def.years ?? STAGE_YEARS;
  let list = questions
    .filter((q) => q.exam === def.exam && years.includes(q.year))
    .filter((q) => def.full || !def.routes || def.routes.includes(q.lessonRoute))
    .sort((a, b) => a.year - b.year || a.questionNo - b.questionNo);
  let units = toUnits(list);
  if (def.deal) units = units.filter((_, i) => i % def.deal[1] === def.deal[0]);
  units = units.map((u) => u.filter(usable)).filter((u) => u.length);
  pools[key] = {
    exam: def.exam,
    examLabel: EXAM_LABEL[def.exam],
    mode: def.full ? 'paper' : 'stage',
    years,
    units: units.map((u) => u.map(entry)),
  };
}

// 每份統測試卷所有題目的區間答對率平均，用來把百分位換算回分數時檢查模型
const standards = stats.standards;
const latestYear = Math.max(...Object.keys(standards).map(Number));

const out = {
  generatedFrom: ['data/registry/tcte-item-stats.json', 'apps/web/public/practice-data/shards'],
  latestYear,
  standards,
  pools,
};
const target = path.join(root, 'apps/web/src/data/learnPath/generated/examBank.json');
fs.mkdirSync(path.dirname(target), { recursive: true });
fs.writeFileSync(target, JSON.stringify(out) + '\n');

let total = 0;
for (const [k, p] of Object.entries(pools)) {
  const n = p.units.flat().length;
  total += n;
  console.log(k.padEnd(12), String(n).padStart(4), '題', `${p.units.length} 組`);
}
console.log(`共 ${total} 題（可重複歸屬）；排除 ${excluded.length}：${excluded.join('、')}`);
