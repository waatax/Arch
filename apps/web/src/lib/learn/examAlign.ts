/**
 * 統測能力對標（純函式，validate-learn-path.mjs 也會直接測試）
 *
 * 依據：技專校院入學測驗中心公告的 D3「各科答對率及鑑別指數表」。每題都有五個各占 20%
 * 的能力組答對率 Pa～Pe，分別代表第 90、70、50、30、10 百分位附近考生的答對率。
 *
 * - 第 q 百分位考生答對某題的機率 = 五組答對率在 q 上的線性內插
 * - 一份檢定的「低標／中標／高標」門檻 = 第 25／50／75 百分位考生在這些題目的預期答對率
 *   （對應 B1 的後標、均標、前標）
 * - 能力估計：以每題首答對錯，對百分位 q 求後驗分布（均勻先驗），再用最新年度三標換算成預估分數
 *
 * 用 111～115 年完整試卷驗證：選擇題試卷（數學 C、英文、專一、專二）模型三標與官方三標相差多在 4 分以內。
 */

export type Bands = readonly [number, number, number, number, number];

export interface ExamItemMeta {
  id: string;
  shard: string;
  year: number;
  no: number;
  group?: string;
  route: string;
  /** 全體答對率（%） */
  p: number;
  /** 鑑別指數 */
  d: number;
  /** Pa～Pe（%），高分組在前 */
  bands: Bands;
  /** 1 = 113 年官方五組資料不一致，改用 3PL 由 P、Ph、Pl 重建 */
  est?: 1;
}

export interface ExamStandard {
  takers: number;
  mean: number;
  top: number;
  mid: number;
  low: number;
}

export interface ExamPool {
  exam: string;
  examLabel: string;
  mode: 'stage' | 'paper';
  years: number[];
  /** 每個單位是一題或一個題組 */
  units: ExamItemMeta[][];
}

export type TierId = 'low' | 'mid' | 'high';

export const TIERS: { id: TierId; label: string; official: string; percentile: number; emoji: string }[] = [
  { id: 'low', label: '低標', official: '後標', percentile: 25, emoji: '🥉' },
  { id: 'mid', label: '中標', official: '均標', percentile: 50, emoji: '🥈' },
  { id: 'high', label: '高標', official: '前標', percentile: 75, emoji: '🥇' },
];

export const TEST_SIZE = 20;
/** 一次檢定至少要有這個比例是沒看過的題目，成績才列入認證（避免背答案） */
export const FRESH_RATIO = 0.75;

const CENTERS = [90, 70, 50, 30, 10];

/** 第 q 百分位（0–100）考生答對此題的機率（0–1） */
export function passRateAt(bands: Bands, q: number): number {
  let v: number;
  if (q >= CENTERS[0]) v = bands[0] + ((bands[0] - bands[1]) * (q - CENTERS[0])) / 20;
  else if (q <= CENTERS[4]) v = bands[4] - ((bands[3] - bands[4]) * (CENTERS[4] - q)) / 20;
  else {
    const k = CENTERS.findIndex((c) => q >= c); // 1..4
    const [hi, lo] = [CENTERS[k - 1], CENTERS[k]];
    v = bands[k] + ((bands[k - 1] - bands[k]) * (q - lo)) / (hi - lo);
  }
  return Math.min(0.99, Math.max(0.01, v / 100));
}

/** 這組題目的三個門檻（答對率 %，四捨五入到整數） */
export function tierThresholds(items: readonly Pick<ExamItemMeta, 'bands'>[]): Record<TierId, number> {
  const at = (q: number) => (100 * items.reduce((s, it) => s + passRateAt(it.bands, q), 0)) / Math.max(1, items.length);
  return { low: Math.round(at(25)), mid: Math.round(at(50)), high: Math.round(at(75)) };
}

export function tierReached(pct: number, t: Record<TierId, number>): TierId | null {
  if (pct >= t.high) return 'high';
  if (pct >= t.mid) return 'mid';
  if (pct >= t.low) return 'low';
  return null;
}

export const tierRank = (t: TierId | null | undefined) => (t ? TIERS.findIndex((x) => x.id === t) + 1 : 0);

export interface Response {
  bands: Bands;
  correct: boolean;
}

export interface AbilityEstimate {
  /** 後驗平均百分位 */
  percentile: number;
  /** 80% 可信區間 */
  lo: number;
  hi: number;
  n: number;
  /** 能力至少達到第 25／50／75 百分位的後驗機率 */
  probAtLeast: Record<TierId, number>;
}

/** 認證信心：能力達到該標的後驗機率至少要這麼高，才頒發徽章 */
export const CERT_CONFIDENCE = 0.7;

/** 依能力估計判定已「有把握」達到的最高等級 */
export function certifiedTier(est: AbilityEstimate | null): TierId | null {
  if (!est) return null;
  let tier: TierId | null = null;
  for (const t of TIERS) if (est.probAtLeast[t.id] >= CERT_CONFIDENCE) tier = t.id;
  return tier;
}

/** 依作答對錯估計百分位；題數為 0 時回傳 null */
export function estimatePercentile(responses: readonly Response[]): AbilityEstimate | null {
  if (!responses.length) return null;
  const grid: number[] = [];
  for (let q = 1; q <= 99; q++) grid.push(q);
  const logs = grid.map((q) =>
    responses.reduce((s, r) => {
      const p = passRateAt(r.bands, q);
      return s + Math.log(r.correct ? p : 1 - p);
    }, 0),
  );
  const max = Math.max(...logs);
  const w = logs.map((l) => Math.exp(l - max));
  const total = w.reduce((a, b) => a + b, 0);
  let mean = 0;
  let cum = 0;
  let lo = 1;
  let hi = 99;
  let loSet = false;
  let hiSet = false;
  grid.forEach((q, i) => {
    const pr = w[i] / total;
    mean += q * pr;
    cum += pr;
    if (!loSet && cum >= 0.1) {
      lo = q;
      loSet = true;
    }
    if (!hiSet && cum >= 0.9) {
      hi = q;
      hiSet = true;
    }
  });
  const above = (p: number) => grid.reduce((acc, q, i) => acc + (q >= p ? w[i] / total : 0), 0);
  return {
    percentile: Math.round(mean),
    lo,
    hi,
    n: responses.length,
    probAtLeast: { low: above(25), mid: above(50), high: above(75) },
  };
}

/** 百分位換算成統測分數：用官方三標分段內插，0 分與 100 分為兩端 */
export function percentileToScore(q: number, s: Pick<ExamStandard, 'low' | 'mid' | 'top'>): number {
  const pts: [number, number][] = [
    [0, 0],
    [25, s.low],
    [50, s.mid],
    [75, s.top],
    [100, 100],
  ];
  for (let i = 1; i < pts.length; i++) {
    if (q <= pts[i][0]) {
      const [x0, y0] = pts[i - 1];
      const [x1, y1] = pts[i];
      return Math.round(y0 + ((y1 - y0) * (q - x0)) / (x1 - x0));
    }
  }
  return 100;
}

export function tierForPercentile(q: number): TierId | null {
  if (q >= 75) return 'high';
  if (q >= 50) return 'mid';
  if (q >= 25) return 'low';
  return null;
}

/** 估計精確度：依作答題數 */
export function confidenceLabel(n: number): string {
  if (n >= 60) return '高';
  if (n >= 25) return '中';
  return '低';
}

/**
 * 抽一份檢定：題組整組抽、優先抽沒做過的題目，湊滿 size 題為止。
 * paper 模式（整份試卷）不抽樣，照原題號順序全部作答。
 */
export function pickTest(pool: ExamPool, seen: ReadonlySet<string>, seed: number, size = TEST_SIZE): ExamItemMeta[] {
  if (pool.mode === 'paper') return pool.units.flat();
  let s = seed || 1;
  const rand = () => {
    s = (Math.imul(s, 1103515245) + 12345) | 0;
    return ((s >>> 8) & 0xffff) / 0x10000;
  };
  const freshness = (u: ExamItemMeta[]) => u.filter((it) => !seen.has(it.id)).length / u.length;
  const order = pool.units
    .map((u) => ({ u, k: freshness(u) * 2 + rand() }))
    .sort((a, b) => b.k - a.k)
    .map((x) => x.u);
  const picked: ExamItemMeta[][] = [];
  let n = 0;
  for (const u of order) {
    if (n >= size) break;
    // 題組太大會撐破題數上限時先略過，除非目前還不到一半
    if (n + u.length > size + 3 && n >= size / 2) continue;
    picked.push(u);
    n += u.length;
  }
  // 依年份、題號排序，讓題組閱讀與原卷順序一致
  return picked.flat().sort((a, b) => a.year - b.year || a.no - b.no);
}

export function freshRatio(items: readonly ExamItemMeta[], seen: ReadonlySet<string>): number {
  return items.length ? items.filter((it) => !seen.has(it.id)).length / items.length : 0;
}
