/**
 * 闖關學習引擎（純函式，不碰 DOM／storage，方便用 node 腳本測試）
 *
 * - buildCoursePath：把單元題庫切成「關卡 → 關卡 → 寶箱 → 單元挑戰」的路徑
 * - 洗牌一律用 seed，讓同一關每次開啟的題序穩定、伺服器與瀏覽器輸出一致
 * - 連續學習採「休息日卡」：漏掉一天自動使用一張，不做扣分或懲罰
 */
import type { Exercise, LearnCourse, LearnUnit, PathNode } from '@/data/learnPath/types';

export const LESSON_SIZE = 5;
export const CHALLENGE_SIZE = 10;
export const JUMP_PASS_RATIO = 0.8;
export const XP_PER_CORRECT = 2;
export const PERFECT_BONUS = 5;
export const CHEST_BRICKS = 10;
export const FREEZE_PRICE = 50;
export const MAX_FREEZES = 2;

/* ───────────── 亂數與洗牌 ───────────── */

export function hashString(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function seededRandom(seed: number) {
  let s = seed || 1;
  return () => {
    s = (Math.imul(s ^ (s >>> 15), 1 | s) + 0x6d2b79f5) | 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 7), 61 | t) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function shuffle<T>(list: readonly T[], seed: string | number): T[] {
  const rand = seededRandom(typeof seed === 'number' ? seed : hashString(seed));
  const out = [...list];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/* ───────────── 路徑 ───────────── */

/** 把 n 題平均切成每組約 LESSON_SIZE 題 */
export function chunkSizes(n: number): number[] {
  if (n <= LESSON_SIZE + 1) return [n];
  const groups = Math.ceil(n / LESSON_SIZE);
  const base = Math.floor(n / groups);
  const extra = n % groups;
  return Array.from({ length: groups }, (_, i) => base + (i < extra ? 1 : 0));
}

export function buildUnitNodes(unit: LearnUnit): PathNode[] {
  const nodes: PathNode[] = [];
  const ids = unit.items.map((it) => it.id);
  let cursor = 0;
  chunkSizes(ids.length).forEach((size, i) => {
    const fresh = ids.slice(cursor, cursor + size);
    // 第二關起，帶入前一組的一題做間隔複習
    const review = i > 0 ? [ids[cursor - 1]] : [];
    nodes.push({
      id: `${unit.id}-l${i + 1}`,
      kind: i === 0 ? 'lesson' : 'practice',
      unitIndex: unit.index,
      order: nodes.length,
      title: i === 0 ? '新觀念' : `練習 ${i}`,
      itemIds: [...fresh, ...review],
    });
    cursor += size;
  });
  nodes.push({ id: `${unit.id}-chest`, kind: 'chest', unitIndex: unit.index, order: nodes.length, title: '寶箱', itemIds: [] });
  nodes.push({
    id: `${unit.id}-boss`,
    kind: 'challenge',
    unitIndex: unit.index,
    order: nodes.length,
    title: '單元挑戰',
    itemIds: shuffle(ids, unit.id).slice(0, CHALLENGE_SIZE),
  });
  return nodes;
}

export function buildCoursePath(course: LearnCourse): PathNode[] {
  return course.units.flatMap(buildUnitNodes);
}

/** 依完成紀錄找出「目前該挑戰的關卡」；全部完成時回傳 -1 */
export function frontierIndex(nodes: PathNode[], completed: Record<string, unknown>): number {
  return nodes.findIndex((n) => !completed[n.id]);
}

/** 跳級測驗：從第 1 到第 k 個單元各抽題，最多 12 題 */
export function jumpTestItems(course: LearnCourse, uptoUnit: number): Exercise[] {
  const units = course.units.slice(0, uptoUnit + 1);
  const per = Math.max(1, Math.floor(12 / units.length));
  return units.flatMap((u) => shuffle(u.items, `jump-${u.id}`).slice(0, per)).slice(0, 12);
}

export function nodesUpToUnit(nodes: PathNode[], uptoUnit: number) {
  return nodes.filter((n) => n.unitIndex <= uptoUnit);
}

/* ───────────── 作答 ───────────── */

export type Answer =
  | { type: 'mcq'; choice: string }
  | { type: 'tf'; value: boolean }
  | { type: 'match'; solved: boolean }
  | { type: 'order'; tiles: string[] }
  | { type: 'num'; value: string };

export function parseNumberInput(raw: string): number | null {
  const cleaned = raw.replace(/[，,\s]/g, '').replace(/^＋/, '+').replace(/^－/, '-').replace(/．/g, '.');
  if (!cleaned) return null;
  const frac = cleaned.match(/^(-?\d+(?:\.\d+)?)\/(\d+(?:\.\d+)?)$/);
  if (frac) {
    const d = Number(frac[2]);
    return d === 0 ? null : Number(frac[1]) / d;
  }
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : null;
}

export function isCorrect(item: Exercise, answer: Answer): boolean {
  switch (item.type) {
    case 'mcq':
      return answer.type === 'mcq' && answer.choice === item.choices[item.answer];
    case 'tf':
      return answer.type === 'tf' && answer.value === item.answer;
    case 'match':
      return answer.type === 'match' && answer.solved;
    case 'order':
      return answer.type === 'order' && answer.tiles.join('\u0000') === item.tiles.join('\u0000');
    case 'num': {
      if (answer.type !== 'num') return false;
      const v = parseNumberInput(answer.value);
      if (v === null) return false;
      const tol = Math.max(item.tolerance, Math.abs(item.answer) * 1e-9);
      return Math.abs(v - item.answer) <= tol + 1e-12;
    }
  }
}

/** 答錯時顯示的正解文字 */
export function correctAnswerText(item: Exercise): string {
  switch (item.type) {
    case 'mcq':
      return item.choices[item.answer];
    case 'tf':
      return item.answer ? '正確（O）' : '錯誤（X）';
    case 'match':
      return item.pairs.map(([l, r]) => `${l} ↔ ${r}`).join('；');
    case 'order':
      return item.tiles.join(' → ');
    case 'num':
      return `${item.answer}${item.unit ? ` ${item.unit}` : ''}`;
  }
}

/* ───────────── XP 與日期 ───────────── */

export interface LessonResult {
  total: number;
  firstTryCorrect: number;
  maxCombo: number;
  kind: PathNode['kind'] | 'review' | 'jump';
}

export function lessonXp(r: LessonResult): number {
  const base = r.firstTryCorrect * XP_PER_CORRECT;
  const perfect = r.total > 0 && r.firstTryCorrect === r.total ? PERFECT_BONUS : 0;
  const mult = r.kind === 'challenge' || r.kind === 'jump' ? 1.5 : 1;
  return Math.max(1, Math.round((base + perfect) * mult));
}

export function localDateKey(d: Date = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export function daysBetween(fromKey: string, toKey: string): number {
  const [a, b] = [fromKey, toKey].map((k) => {
    const [y, m, d] = k.split('-').map(Number);
    return Date.UTC(y, m - 1, d);
  });
  return Math.round((b - a) / 86400000);
}

export function addDaysKey(key: string, days: number): string {
  const [y, m, d] = key.split('-').map(Number);
  const date = new Date(Date.UTC(y, m - 1, d + days));
  return `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, '0')}-${String(date.getUTCDate()).padStart(2, '0')}`;
}

/** 週一為一週第一天 */
export function weekStartKey(key: string): string {
  const [y, m, d] = key.split('-').map(Number);
  const dow = new Date(Date.UTC(y, m - 1, d)).getUTCDay();
  return addDaysKey(key, -((dow + 6) % 7));
}

export interface StreakState {
  current: number;
  longest: number;
  lastDay: string | null;
  freezes: number;
  /** 被休息日卡保住的日期 */
  frozenDays: string[];
}

/**
 * 今天完成一堂課時呼叫。漏掉的天數若不超過持有的休息日卡，會自動補上；
 * 否則連續天數從 1 重新開始（不扣任何 XP 或磚塊）。
 */
export function advanceStreak(s: StreakState, today: string): StreakState {
  if (s.lastDay === today) return s;
  if (!s.lastDay) return { ...s, current: 1, longest: Math.max(s.longest, 1), lastDay: today };
  const gap = daysBetween(s.lastDay, today);
  if (gap <= 0) return s;
  const missed = gap - 1;
  if (missed === 0) {
    const current = s.current + 1;
    return { ...s, current, longest: Math.max(s.longest, current), lastDay: today };
  }
  if (missed <= s.freezes) {
    const frozen = Array.from({ length: missed }, (_, i) => addDaysKey(s.lastDay as string, i + 1));
    const current = s.current + 1;
    return {
      ...s,
      current,
      longest: Math.max(s.longest, current),
      lastDay: today,
      freezes: s.freezes - missed,
      frozenDays: [...s.frozenDays, ...frozen].slice(-30),
    };
  }
  return { ...s, current: 1, lastDay: today };
}

/** 顯示用：今天還沒學習時，目前仍有效的連續天數 */
export function displayStreak(s: StreakState, today: string): number {
  if (!s.lastDay) return 0;
  const gap = daysBetween(s.lastDay, today);
  if (gap <= 1) return s.current;
  return gap - 1 <= s.freezes ? s.current : 0;
}

/* ───────────── 個人週賽（只跟自己比） ───────────── */

export const WEEK_TIERS = [
  { name: '紅磚', min: 0, emoji: '🧱' },
  { name: '清水模', min: 60, emoji: '🪨' },
  { name: '鋼骨', min: 150, emoji: '🔩' },
  { name: '帷幕', min: 300, emoji: '🏙️' },
  { name: '地標', min: 600, emoji: '🗼' },
] as const;

export function tierFor(xp: number) {
  let tier: (typeof WEEK_TIERS)[number] = WEEK_TIERS[0];
  for (const t of WEEK_TIERS) if (xp >= t.min) tier = t;
  return tier;
}

export function weekXp(xpByDay: Record<string, number>, weekStart: string): number {
  let sum = 0;
  for (let i = 0; i < 7; i++) sum += xpByDay[addDaysKey(weekStart, i)] ?? 0;
  return sum;
}

/* ───────────── 每日任務 ───────────── */

export type QuestMetric = 'xp' | 'lessons' | 'combo' | 'perfect' | 'subjects' | 'review';

export interface DailyQuest {
  id: string;
  metric: QuestMetric;
  target: number;
  title: string;
  reward: number;
}

const QUEST_POOL: Omit<DailyQuest, 'id'>[] = [
  { metric: 'xp', target: 20, title: '今天獲得 20 XP', reward: 5 },
  { metric: 'xp', target: 40, title: '今天獲得 40 XP', reward: 10 },
  { metric: 'lessons', target: 2, title: '完成 2 個關卡', reward: 5 },
  { metric: 'lessons', target: 4, title: '完成 4 個關卡', reward: 10 },
  { metric: 'combo', target: 5, title: '連續答對 5 題', reward: 5 },
  { metric: 'combo', target: 8, title: '連續答對 8 題', reward: 10 },
  { metric: 'perfect', target: 1, title: '完美通關 1 次（全部首答正確）', reward: 10 },
  { metric: 'subjects', target: 2, title: '練習 2 個不同科目', reward: 8 },
  { metric: 'review', target: 1, title: '完成 1 次錯題複習', reward: 8 },
];

/** 每天固定 3 個任務：XP 類、關卡類各一，再加一個其他類型 */
export function dailyQuests(dayKey: string): DailyQuest[] {
  const pick = (metrics: QuestMetric[], salt: string) => {
    const pool = QUEST_POOL.filter((q) => metrics.includes(q.metric));
    return shuffle(pool, `${dayKey}-${salt}`)[0];
  };
  return [
    pick(['xp'], 'a'),
    pick(['lessons'], 'b'),
    pick(['combo', 'perfect', 'subjects', 'review'], 'c'),
  ].map((q, i) => ({ ...q, id: `${dayKey}-q${i}` }));
}

export interface DayStats {
  xp: number;
  lessons: number;
  bestCombo: number;
  perfect: number;
  subjects: string[];
  reviews: number;
}

export const EMPTY_DAY: DayStats = { xp: 0, lessons: 0, bestCombo: 0, perfect: 0, subjects: [], reviews: 0 };

export function questProgress(q: DailyQuest, d: DayStats): number {
  const value = {
    xp: d.xp,
    lessons: d.lessons,
    combo: d.bestCombo,
    perfect: d.perfect,
    subjects: d.subjects.length,
    review: d.reviews,
  }[q.metric];
  return Math.min(value, q.target);
}

/* ───────────── 成就 ───────────── */

export interface AchievementInput {
  totalXp: number;
  lessonsDone: number;
  perfectCount: number;
  longestStreak: number;
  coursesCompleted: string[];
  semestersCleared: string[];
  reviewsDone: number;
  subjectsTouched: number;
}

export interface Achievement {
  id: string;
  emoji: string;
  title: string;
  desc: string;
  test: (a: AchievementInput) => boolean;
}

export const ACHIEVEMENTS: Achievement[] = [
  { id: 'first-step', emoji: '👣', title: '破土動工', desc: '完成第一個關卡', test: (a) => a.lessonsDone >= 1 },
  { id: 'perfect-1', emoji: '💯', title: '一次到位', desc: '第一次完美通關', test: (a) => a.perfectCount >= 1 },
  { id: 'perfect-10', emoji: '🎯', title: '精準放樣', desc: '累積 10 次完美通關', test: (a) => a.perfectCount >= 10 },
  { id: 'streak-3', emoji: '🔥', title: '養成習慣', desc: '連續學習 3 天', test: (a) => a.longestStreak >= 3 },
  { id: 'streak-7', emoji: '📅', title: '一週不間斷', desc: '連續學習 7 天', test: (a) => a.longestStreak >= 7 },
  { id: 'streak-30', emoji: '🏆', title: '月度工程師', desc: '連續學習 30 天', test: (a) => a.longestStreak >= 30 },
  { id: 'xp-100', emoji: '⭐', title: '百分基礎', desc: '累積 100 XP', test: (a) => a.totalXp >= 100 },
  { id: 'xp-500', emoji: '🌟', title: '五百樓板', desc: '累積 500 XP', test: (a) => a.totalXp >= 500 },
  { id: 'xp-2000', emoji: '💎', title: '兩千高樓', desc: '累積 2000 XP', test: (a) => a.totalXp >= 2000 },
  { id: 'course-1', emoji: '🎓', title: '結業證書', desc: '完成一整門課程的所有關卡', test: (a) => a.coursesCompleted.length >= 1 },
  { id: 'course-10', emoji: '📚', title: '十門通透', desc: '完成 10 門課程', test: (a) => a.coursesCompleted.length >= 10 },
  { id: 'semester-1', emoji: '🏗️', title: '學期封頂', desc: '完成某一學期的所有課程', test: (a) => a.semestersCleared.length >= 1 },
  { id: 'all-rounder', emoji: '🧭', title: '五育並進', desc: '在 8 個不同科目答題', test: (a) => a.subjectsTouched >= 8 },
  { id: 'review-5', emoji: '🧹', title: '錯題清道夫', desc: '完成 5 次錯題複習', test: (a) => a.reviewsDone >= 5 },
];

export function unlockedAchievements(a: AchievementInput): string[] {
  return ACHIEVEMENTS.filter((x) => x.test(a)).map((x) => x.id);
}
