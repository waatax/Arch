/**
 * 闖關學習（/learn）品質閘門
 *
 * 1. 課程目錄：六個學期都有課；部定專業／實習與技能領域的學期、學分符合
 *    國教院《土木與建築群課程手冊》表 2-2、2-3；部定一般科目各領域都有開課。
 * 2. 題庫：每門課的單元數、每單元題數、指南重點、題型多樣性、題目格式。
 * 3. 數學式：所有 $...$ 都要能被 KaTeX 解析；資料中不得有吃掉反斜線的控制字元。
 * 4. 教學頁連結：=> subject/topic 必須真的存在。
 * 5. 引擎：連續天數（含休息日卡）、關卡切分、數值判分與每日任務的回歸測試。
 *
 * 用法：node scripts/validate-learn-path.mjs
 */
import { createRequire } from 'node:module';
import path from 'node:path';
import { loadTsModule, repoRoot } from './lib/load-ts-module.mjs';

const require = createRequire(path.join(repoRoot, 'apps', 'web', 'package.json'));
const katex = require('katex');

const errors = [];
const warns = [];
const err = (m) => errors.push(m);
const warn = (m) => warns.push(m);

const lp = await loadTsModule('apps/web/src/data/learnPath/index.ts');
const engine = await loadTsModule('apps/web/src/lib/learn/engine.ts');
const { allSubjects } = await loadTsModule('apps/web/src/data/subjects.ts');

let courses;
try {
  courses = lp.getAllCourses();
} catch (e) {
  console.error('❌ 題庫解析失敗：\n' + e.message);
  process.exit(1);
}

/* ───────────── 1. 課程目錄 ───────────── */

const OFFICIAL = [
  // [semester, key, credits]  表 2-2
  ['g10s1', 'intro', 2],
  ['g10s2', 'construction', 2],
  ['g11s1', 'mechanics-1', 3],
  ['g11s2', 'mechanics-2', 3],
  ['g10s1', 'survey-1', 4],
  ['g10s2', 'survey-2', 4],
  ['g11s1', 'design-tech-1', 2],
  ['g11s2', 'design-tech-2', 2],
  ['g11s1', 'building-tech-1', 3],
  ['g11s2', 'building-tech-2', 3],
  ['g11s1', 'materials-1', 2],
  ['g11s2', 'materials-2', 2],
  ['g10s1', 'drafting-1', 4],
  ['g10s2', 'drafting-2', 4],
  ['g11s1', 'cad-1', 3],
  ['g11s2', 'cad-2', 3],
  // 表 2-3 專業製圖技能領域（建築科）
  ['g11s1', 'arch-drawing', 3],
  ['g11s2', 'working-drawing', 3],
];

for (const [sem, key, credits] of OFFICIAL) {
  const c = courses.find((x) => x.key === key);
  if (!c) {
    err(`[目錄] 缺少部定科目 ${key}`);
    continue;
  }
  if (c.semester !== sem) err(`[目錄] ${c.title} 應在 ${sem}（官方建議授課年段），目前在 ${c.semester}`);
  if (c.credits !== credits) err(`[目錄] ${c.title} 學分應為 ${credits}，目前 ${c.credits}`);
  if (!c.officialPlacement) err(`[目錄] ${c.title} 應標示 officialPlacement`);
}
for (const c of courses) {
  if (c.officialPlacement && !OFFICIAL.some(([s, k]) => s === c.semester && k === c.key)) {
    err(`[目錄] ${c.title} 標了官方建議學期，但不在表 2-2／2-3 清單中`);
  }
}

// 部定專業科目 10 學分、部定實習（不含技能領域）36 學分
const sum = (pred) => courses.filter(pred).reduce((n, c) => n + c.credits, 0);
const proCredits = sum((c) => c.category === '部定專業科目');
const pracCredits = sum((c) => c.category === '部定實習科目');
if (proCredits !== 10) err(`[目錄] 部定專業科目合計應為 10 學分，目前 ${proCredits}`);
if (pracCredits !== 36) err(`[目錄] 部定實習科目合計應為 36 學分，目前 ${pracCredits}`);

for (const s of lp.SEMESTERS) {
  if (!courses.some((c) => c.semester === s.id)) err(`[目錄] ${s.label} 沒有任何課程`);
}

const countKey = (prefix) => courses.filter((c) => c.key === prefix || c.key.startsWith(`${prefix}-`)).length;
const REQUIRED_GENERAL = [
  ['chinese', 6, '國語文 16 學分（六學期）'],
  ['english', 6, '英語文 12 學分（六學期）'],
  ['math', 4, '數學 C 部定（第一、二學年）'],
  ['pe', 6, '體育 12 學分（六學期）'],
  ['history', 1, '社會領域：歷史'],
  ['geography', 1, '社會領域：地理'],
  ['civics', 1, '社會領域：公民與社會'],
  ['physics', 2, '自然領域：物理 B'],
  ['chemistry', 1, '自然領域：化學 B'],
  ['biology', 1, '自然領域：生物 A'],
  ['art', 1, '藝術領域：美術'],
  ['music', 1, '藝術領域：音樂'],
  ['health', 1, '健康與護理'],
  ['defense', 1, '全民國防教育'],
  ['native-lang', 1, '本土語文'],
  ['career', 1, '綜合活動領域'],
  ['info-tech', 1, '科技領域'],
];
for (const [k, n, label] of REQUIRED_GENERAL) {
  const got = countKey(k);
  if (got < n) err(`[目錄] ${label} 需 ${n} 門，目前 ${got}`);
}
for (const c of courses.filter((x) => x.key.startsWith('math-') && x.category === '部定一般科目')) {
  if (!['g10s1', 'g10s2', 'g11s1', 'g11s2'].includes(c.semester)) err(`[目錄] 數學 C 部定應在第一、二學年：${c.id}`);
}

const ids = new Set();
for (const c of courses) {
  if (ids.has(c.id)) err(`[目錄] 課程 id 重複：${c.id}`);
  ids.add(c.id);
}

/* ───────────── 2. 題庫 ───────────── */

const topicSet = new Set(allSubjects.flatMap((s) => s.topics.map((t) => `${s.slug}/${t.slug}`)));
const CTRL = /[\u0000-\u0008\u000B\u000C\u000E-\u001F]/;
const BANNED_CHOICES = /^(以上皆是|以上皆非|以上皆對|以上皆錯|皆是|皆非)$/;

function checkMath(where, text) {
  if (CTRL.test(text)) err(`${where} 含控制字元（LaTeX 反斜線可能被吃掉）：${JSON.stringify(text.slice(0, 40))}`);
  const parts = text.match(/\$[^$]+\$/g) || [];
  for (const p of parts) {
    try {
      katex.renderToString(p.slice(1, -1), { throwOnError: true, strict: 'ignore' });
    } catch (e) {
      err(`${where} KaTeX 無法解析 ${p}：${e.message.split('\n')[0]}`);
    }
  }
  if ((text.match(/\$/g) || []).length % 2 === 1) err(`${where} 的 $ 數量不成對`);
}

const isCore = (c) =>
  ['部定專業科目', '部定實習科目', '技能領域'].includes(c.category) ||
  /^(chinese|english|math)-/.test(c.key) ||
  c.key.startsWith('exam-');

let totalItems = 0;
let totalUnits = 0;
const typeTotals = {};

for (const c of courses) {
  const tag = `[${c.id}]`;
  const minUnits = isCore(c) ? 4 : 3;
  if (c.units.length < minUnits) err(`${tag} 至少需要 ${minUnits} 個單元，目前 ${c.units.length}`);
  const prompts = new Set();
  const types = new Set();
  let explained = 0;
  let items = 0;
  for (const u of c.units) {
    totalUnits++;
    const ut = `${tag}「${u.title}」`;
    if (u.items.length < 6) err(`${ut} 至少 6 題，目前 ${u.items.length}`);
    if (u.items.length > 14) warn(`${ut} 有 ${u.items.length} 題，建議拆成兩個單元`);
    if (u.guide.length < 2) err(`${ut} 指南重點至少 2 條`);
    if (u.topic && !topicSet.has(`${u.topic.subject}/${u.topic.topic}`)) err(`${ut} 教學頁連結不存在：${u.topic.subject}/${u.topic.topic}`);
    for (const g of u.guide) checkMath(`${ut} 指南`, g);
    for (const it of u.items) {
      items++;
      types.add(it.type);
      typeTotals[it.type] = (typeTotals[it.type] ?? 0) + 1;
      if (it.explain) explained++;
      const where = `${ut} ${it.id}`;
      if (prompts.has(it.prompt)) err(`${where} 題幹重複：${it.prompt.slice(0, 30)}`);
      prompts.add(it.prompt);
      if (it.prompt.length > 170) warn(`${where} 題幹過長（${it.prompt.length} 字）`);
      checkMath(where, it.prompt);
      if (it.explain) checkMath(`${where} 解析`, it.explain);
      switch (it.type) {
        case 'mcq':
          if (it.choices.length < 3 || it.choices.length > 4) err(`${where} 選擇題需 3–4 個選項`);
          {
            // 正解明顯比所有誘答長，學生只要挑最長的就能答對
            const len = (x) => [...x].length;
            const longestWrong = Math.max(...it.choices.slice(1).map(len));
            if (len(it.choices[0]) >= 2 * longestWrong && len(it.choices[0]) - longestWrong >= 6) {
              err(`${where} 正解長度是誘答的兩倍以上，請把誘答改寫成長度相近的合理迷思`);
            }
          }
          for (const ch of it.choices) {
            if (BANNED_CHOICES.test(ch)) err(`${where} 不使用「${ch}」類選項（洗牌後語意會錯）`);
            if (ch.length > 60) warn(`${where} 選項過長：${ch.slice(0, 20)}…`);
            checkMath(where, ch);
          }
          break;
        case 'match':
          if (it.pairs.length > 5) err(`${where} 配對題最多 5 組`);
          for (const [l, r] of it.pairs) {
            if (l.length > 26 || r.length > 30) warn(`${where} 配對文字過長：${l} / ${r}`);
            checkMath(where, l);
            checkMath(where, r);
          }
          break;
        case 'order':
          if (it.tiles.length > 7) err(`${where} 排序題最多 7 步`);
          for (const t of it.tiles) {
            if (t.length > 40) warn(`${where} 排序步驟過長：${t.slice(0, 20)}…`);
            checkMath(where, t);
          }
          break;
        case 'num':
          if (!Number.isFinite(it.answer)) err(`${where} 數值答案無效`);
          break;
        case 'tf':
          break;
      }
    }
  }
  totalItems += items;
  if (items && types.size < 3) err(`${tag} 題型太單一（只有 ${[...types].join('、')}），至少 3 種`);
  if (items && explained / items < 0.8) err(`${tag} 有解析的題目僅 ${Math.round((explained / items) * 100)}%，需 ≥ 80%`);
  // 是非題答案不要全部同一邊
  const tfs = c.units.flatMap((u) => u.items).filter((i) => i.type === 'tf');
  if (tfs.length >= 4 && tfs.every((t) => t.answer === tfs[0].answer)) {
    warn(`${tag} 是非題 ${tfs.length} 題答案全是 ${tfs[0].answer ? 'O' : 'X'}`);
  }
}

/* ───────────── 3. 引擎回歸測試 ───────────── */

const eq = (name, got, want) => {
  const g = JSON.stringify(got);
  const w = JSON.stringify(want);
  if (g !== w) err(`[引擎] ${name}：預期 ${w}，得到 ${g}`);
};
{
  const base = { current: 0, longest: 0, lastDay: null, freezes: 1, frozenDays: [] };
  let s = engine.advanceStreak(base, '2026-10-01');
  eq('首日連續', s.current, 1);
  s = engine.advanceStreak(s, '2026-10-01');
  eq('同日不重複累加', s.current, 1);
  s = engine.advanceStreak(s, '2026-10-02');
  eq('隔日 +1', s.current, 2);
  s = engine.advanceStreak(s, '2026-10-04');
  eq('漏一天用掉休息日卡', [s.current, s.freezes, s.frozenDays], [3, 0, ['2026-10-03']]);
  s = engine.advanceStreak(s, '2026-10-07');
  eq('無卡可用時從 1 重來', [s.current, s.longest], [1, 3]);
  eq('跨月日期差', engine.daysBetween('2026-10-31', '2026-11-01'), 1);
  eq('週一為週首', engine.weekStartKey('2026-10-27'), '2026-10-26');
  eq('週日歸前一週', engine.weekStartKey('2026-11-01'), '2026-10-26');
  eq('顯示用：漏一天且有卡', engine.displayStreak({ ...base, current: 5, lastDay: '2026-10-01' }, '2026-10-03'), 5);
  eq('顯示用：漏兩天沒卡', engine.displayStreak({ ...base, freezes: 0, current: 5, lastDay: '2026-10-01' }, '2026-10-04'), 0);
  eq('chunkSizes(6)', engine.chunkSizes(6), [6]);
  eq('chunkSizes(8)', engine.chunkSizes(8), [4, 4]);
  eq('chunkSizes(11)', engine.chunkSizes(11), [4, 4, 3]);
  eq('分數輸入', engine.parseNumberInput('1/4'), 0.25);
  eq('全形輸入', engine.parseNumberInput('－１２．５'.normalize('NFKC')), -12.5);
  eq('千分位輸入', engine.parseNumberInput('5,000'), 5000);
  const num = { id: 'x', type: 'num', prompt: '', answer: 49.91, tolerance: 0.01 };
  eq('數值容許誤差內', engine.isCorrect(num, { type: 'num', value: '49.9' }), true);
  eq('數值超出誤差', engine.isCorrect(num, { type: 'num', value: '49.8' }), false);
  eq('每日任務固定', engine.dailyQuests('2026-10-27').map((q) => q.title), engine.dailyQuests('2026-10-27').map((q) => q.title));
  eq('XP：5 題全對', engine.lessonXp({ total: 5, firstTryCorrect: 5, maxCombo: 5, kind: 'lesson' }), 15);
  eq('XP：挑戰 ×1.5', engine.lessonXp({ total: 10, firstTryCorrect: 8, maxCombo: 3, kind: 'challenge' }), 24);
  for (const c of courses) {
    const nodes = engine.buildCoursePath(c);
    const nid = new Set(nodes.map((n) => n.id));
    if (nid.size !== nodes.length) err(`[引擎] ${c.id} 關卡 id 重複`);
    for (const n of nodes) {
      if (n.kind !== 'chest' && n.itemIds.length === 0) err(`[引擎] ${n.id} 沒有題目`);
      if (new Set(n.itemIds).size !== n.itemIds.length) err(`[引擎] ${n.id} 同一關題目重複`);
    }
  }
}


/* ───────────── 4. 統測對標檢定 ───────────── */

const align = await loadTsModule('apps/web/src/lib/learn/examAlign.ts');
const fsMod = await import('node:fs');
const readJson = (rel) => JSON.parse(fsMod.readFileSync(path.join(repoRoot, rel), 'utf8'));
const tcte = readJson('data/registry/tcte-item-stats.json');
const bankJson = readJson('apps/web/src/data/learnPath/generated/examBank.json');
const certStats = [];
{
  // 4a. 模型重現官方三標：國文含寫作分數，不納入；其餘為純選擇題試卷
  const diffs = [];
  for (const y of tcte.source.years) {
    for (const exam of ['english', 'math-c', 'professional-1', 'professional-2']) {
      const its = Object.entries(tcte.items).filter(([k]) => k.startsWith(`${y}-${exam}-`)).map(([, v]) => v);
      const t = align.tierThresholds(its);
      const st = tcte.standards[y][exam];
      for (const [m, o] of [[t.low, st.low], [t.mid, st.mid], [t.high, st.top]]) diffs.push(Math.abs(m - o));
    }
  }
  const mae = diffs.reduce((a, b) => a + b, 0) / diffs.length;
  certStats.push(`模型三標與官方平均差 ${mae.toFixed(2)} 分、最大 ${Math.max(...diffs)} 分`);
  if (mae > 3) err(`[對標] 模型三標與官方平均差 ${mae.toFixed(2)} 分，超過 3 分`);
  if (Math.max(...diffs) > 6) err(`[對標] 模型三標與官方最大差 ${Math.max(...diffs)} 分，超過 6 分`);

  // 4b. 每門統測相關課程都有題池，且大小足以抽 20 題
  const examKeys = ['chinese-1', 'chinese-2', 'chinese-3', 'chinese-4', 'chinese-5', 'chinese-6',
    'english-1', 'english-2', 'english-3', 'english-4', 'english-5', 'english-6',
    'math-1', 'math-2', 'math-3', 'math-4', 'math-review', 'survey-1', 'survey-2', 'drafting-1', 'drafting-2',
    'mechanics-1', 'mechanics-2', 'materials-1', 'materials-2', 'exam-pro1', 'exam-pro2'];
  const courseKeys = new Set(courses.map((c) => c.key));
  for (const k of examKeys) {
    const pool = bankJson.pools[k];
    if (!courseKeys.has(k)) err(`[對標] 找不到課程 ${k}`);
    if (!pool) { err(`[對標] ${k} 沒有統測題池`); continue; }
    const items = pool.units.flat();
    if (items.length < align.TEST_SIZE) err(`[對標] ${k} 題池只有 ${items.length} 題，不足 ${align.TEST_SIZE} 題`);
    const t = align.tierThresholds(items);
    if (!(t.low < t.mid && t.mid < t.high && t.high <= t.top && t.top <= t.ace)) err(`[對標] ${k} 門檻不是遞增：${JSON.stringify(t)}`);
    for (const it of items) {
      if (it.bands.length !== 5 || it.bands.some((b) => !(b >= 0 && b <= 100))) err(`[對標] ${it.id} 能力組答對率異常`);
      if (!tcte.items[`${it.year}-${pool.exam}-${it.no}`]) err(`[對標] ${it.id} 沒有官方統計`);
    }
    // 抽題：題組不可拆散、題數接近 20
    const test = align.pickTest(pool, new Set(), 12345);
    if (pool.mode === 'stage' && (test.length < 15 || test.length > align.TEST_SIZE + 4)) err(`[對標] ${k} 抽出 ${test.length} 題`);
    const groups = new Map();
    for (const it of items) if (it.group) groups.set(it.group, (groups.get(it.group) ?? 0) + 1);
    for (const [g, n] of groups) {
      const got = test.filter((it) => it.group === g).length;
      if (got && got !== n) err(`[對標] ${k} 題組 ${g} 被拆散（${got}/${n}）`);
    }
  }
  certStats.push(`${examKeys.length} 門課程題池、合計 ${examKeys.reduce((n, k) => n + (bankJson.pools[k]?.units.flat().length ?? 0), 0)} 題次`);

  // 4c. 能力估計與分數換算
  eq('百分位內插：中位數等於 Pc', align.passRateAt([90, 70, 50, 30, 10], 50), 0.5);
  eq('百分位內插：第 80 百分位', align.passRateAt([90, 70, 50, 30, 10], 80), 0.8);
  eq('三標換算：均標', align.percentileToScore(50, { low: 24, mid: 36, top: 56 }), 36);
  eq('三標換算：滿分端', align.percentileToScore(100, { low: 24, mid: 36, top: 56 }), 100);
  eq('達標判定', align.tierReached(60, { low: 30, mid: 45, high: 60 }), 'high');
  eq('未達低標', align.tierReached(20, { low: 30, mid: 45, high: 60 }), null);
  const allRight = align.estimatePercentile(Array.from({ length: 30 }, () => ({ bands: [80, 60, 45, 30, 20], correct: true })));
  const allWrong = align.estimatePercentile(Array.from({ length: 30 }, () => ({ bands: [80, 60, 45, 30, 20], correct: false })));
  if (!(allRight.percentile > 85 && allWrong.percentile < 15)) err(`[對標] 能力估計方向錯誤：${allRight.percentile}/${allWrong.percentile}`);
  // 模擬考生：第 q 百分位的人照模型機率作答 200 題，估計值應落在 q ± 10
  const items = Object.values(tcte.items).filter((x) => x.bandSource === 'official').slice(0, 200);
  for (const q of [20, 50, 80]) {
    let seed = q;
    const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    const est = align.estimatePercentile(items.map((it) => ({ bands: it.bands, correct: rnd() < align.passRateAt(it.bands, q) })));
    if (Math.abs(est.percentile - q) > 10) err(`[對標] 模擬第 ${q} 百分位考生，估計為 ${est.percentile}`);
  }
}
{
  // 頂標／榜首級：模擬整卷作答，頂尖考生拿得到、一般考生拿不到
  let seed = 11;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  const papers = ['exam-pro1', 'exam-pro2', 'math-review', 'english-6'].map((k) => bankJson.pools[k].units.flat());
  const rate = (q, want) => {
    let hit = 0;
    for (let t = 0; t < 80; t++) {
      const items = papers[t % papers.length];
      const ans = items.map((it) => ({ bands: it.bands, correct: rnd() < align.passRateAt(it.bands, q) }));
      const pct = (100 * ans.filter((x) => x.correct).length) / ans.length;
      const raw = align.tierReached(pct, align.tierThresholds(items));
      const cert = align.certifiedTier(align.estimatePercentile(ans));
      if (Math.min(align.tierRank(raw), align.tierRank(cert)) >= align.tierRank(want)) hit++;
    }
    return hit / 80;
  };
  const top93 = rate(93, 'top');
  const top50 = rate(50, 'high');
  certStats.push(`整卷模擬：第 93 百分位考生得頂標 ${Math.round(top93 * 100)}%、第 50 百分位考生得高標以上 ${Math.round(top50 * 100)}%`);
  if (top93 < 0.4) err(`[對標] 頂標過難：第 93 百分位考生只有 ${top93} 拿到`);
  if (top50 > 0.05) err(`[對標] 高標過鬆：第 50 百分位考生有 ${top50} 拿到`);
}
{
  // 休息模式：排定的休息日不算漏掉，也不耗休息日卡
  const base = { current: 4, longest: 4, lastDay: '2026-10-01', freezes: 0, frozenDays: [] };
  eq('休息日不中斷連續', engine.advanceStreak(base, '2026-10-04', ['2026-10-02', '2026-10-03']).current, 5);
  eq('休息日不耗卡', engine.advanceStreak({ ...base, freezes: 1 }, '2026-10-03', ['2026-10-02']).freezes, 1);
  eq('休息日顯示', engine.displayStreak(base, '2026-10-03', ['2026-10-02']), 4);
}

/* ───────────── 輸出 ───────────── */

console.log('🎮 闖關學習題庫驗證');
for (const s of lp.SEMESTERS) {
  const list = courses.filter((c) => c.semester === s.id);
  const n = list.reduce((a, c) => a + c.units.reduce((b, u) => b + u.items.length, 0), 0);
  console.log(`  ${s.label}：${list.length} 門課、${n} 題`);
  for (const c of list) {
    const k = c.units.reduce((b, u) => b + u.items.length, 0);
    console.log(`    ${c.officialPlacement ? '★' : '·'} ${c.title.padEnd(14, '　')} ${String(c.units.length).padStart(2)} 單元 ${String(k).padStart(3)} 題`);
  }
}
console.log(`  合計：${courses.length} 門課、${totalUnits} 單元、${totalItems} 題；題型 ${JSON.stringify(typeTotals)}`);
console.log(`  統測對標：${certStats.join("；")}`);
if (warns.length) {
  console.log(`\n⚠️  ${warns.length} 則提醒（不擋 CI）：`);
  for (const w of warns.slice(0, 40)) console.log('  - ' + w);
}
if (errors.length) {
  console.error(`\n❌ ${errors.length} 個錯誤：`);
  for (const e of errors.slice(0, 120)) console.error('  - ' + e);
  process.exit(1);
}
console.log('\n✅ 闖關學習題庫驗證通過');
