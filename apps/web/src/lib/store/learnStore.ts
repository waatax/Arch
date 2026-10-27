'use client';

/**
 * 闖關學習進度（只存在使用者裝置的 localStorage，可隨時重設）
 *
 * skipHydration：靜態匯出頁面第一次渲染一律使用預設值，掛載後才讀取 localStorage，
 * 避免伺服器 HTML 與瀏覽器狀態不一致造成 React #418。
 */
import { useEffect, useSyncExternalStore } from 'react';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Exercise } from '@/data/learnPath/types';
import {
  CHEST_BRICKS,
  EMPTY_DAY,
  FREEZE_PRICE,
  MAX_FREEZES,
  addDaysKey,
  advanceStreak,
  lessonXp,
  localDateKey,
  type DayStats,
  type LessonResult,
  type StreakState,
} from '@/lib/learn/engine';
import { tierRank, type TierId } from '@/lib/learn/examAlign';

/** 統測對標檢定的最佳紀錄 */
export interface CertRecord {
  tier: TierId | null;
  pct: number;
  thresholds: Record<TierId, number>;
  at: string;
  attempts: number;
}

export interface ExamTestCompletion {
  courseId: string;
  subject: string;
  /** 每題首答 */
  answers: { id: string; correct: boolean }[];
  pct: number;
  thresholds: Record<TierId, number>;
  tier: TierId | null;
  /** 新題比例達標才列入認證 */
  counted: boolean;
}

export const TIER_BRICKS: Record<TierId, number> = { low: 15, mid: 25, high: 40, top: 60, ace: 100 };

export interface NodeRecord {
  at: string;
  /** 首答正確率 0–1 */
  accuracy: number;
  plays: number;
  skipped?: boolean;
}

export interface MistakeRecord {
  item: Exercise;
  courseId: string;
  courseTitle: string;
  unitTitle: string;
  wrong: number;
  lastWrong: string;
}

export interface LessonCompletion {
  nodeId: string;
  courseId: string;
  subject: string;
  result: LessonResult;
  wrongItems: { item: Exercise; unitTitle: string; courseTitle: string }[];
  rightItemIds: string[];
}

export interface CompletionOutcome {
  xp: number;
  streakBefore: number;
  streakAfter: number;
  goalReachedNow: boolean;
}

interface LearnState {
  totalXp: number;
  bricks: number;
  dailyGoal: number;
  xpByDay: Record<string, number>;
  day: { key: string; stats: DayStats };
  streak: StreakState;
  completed: Record<string, NodeRecord>;
  coursesCompleted: string[];
  mistakes: Record<string, MistakeRecord>;
  claimedQuests: string[];
  lessonsDone: number;
  perfectCount: number;
  reviewsDone: number;
  subjectsTouched: string[];
  soundOn: boolean;
  hapticsOn: boolean;
  /** 休息模式的日期：這些天沒學習也不會中斷連續天數，且不消耗休息日卡 */
  restDays: string[];
  lastCourse: string | null;
  /** 統測歷屆題首答紀錄：1 = 對、0 = 錯（用於能力估計） */
  examResp: Record<string, 0 | 1>;
  certs: Record<string, CertRecord>;

  completeLesson: (c: LessonCompletion) => CompletionOutcome;
  /** 錯題複習（isReview）或課程隨機練習：給 XP，但不改變關卡完成狀態 */
  completeSession: (
    c: Omit<LessonCompletion, 'nodeId' | 'courseId' | 'subject'> & { isReview: boolean; courseId?: string; subject?: string },
  ) => CompletionOutcome;
  openChest: (nodeId: string) => number;
  skipNodes: (nodeIds: string[], c: Omit<LessonCompletion, 'nodeId'>) => CompletionOutcome;
  markCourseComplete: (courseId: string) => void;
  claimQuest: (questId: string, reward: number) => void;
  buyFreeze: () => boolean;
  setDailyGoal: (xp: number) => void;
  toggleSound: () => void;
  toggleHaptics: () => void;
  /** 從今天起休息 n 天（0 = 取消）；每 7 天最多 3 天 */
  setRest: (days: number) => void;
  /** 回傳 XP 與新取得的磚塊（升級才給） */
  completeExamTest: (c: ExamTestCompletion) => CompletionOutcome & { bricks: number; improved: boolean };
  setLastCourse: (courseId: string) => void;
  resetProgress: () => void;
}

const initialStreak: StreakState = { current: 0, longest: 0, lastDay: null, freezes: 1, frozenDays: [] };

const initialData = {
  totalXp: 0,
  bricks: 0,
  dailyGoal: 20,
  xpByDay: {} as Record<string, number>,
  day: { key: '', stats: EMPTY_DAY },
  streak: initialStreak,
  completed: {} as Record<string, NodeRecord>,
  coursesCompleted: [] as string[],
  mistakes: {} as Record<string, MistakeRecord>,
  claimedQuests: [] as string[],
  lessonsDone: 0,
  perfectCount: 0,
  reviewsDone: 0,
  subjectsTouched: [] as string[],
  soundOn: true,
  hapticsOn: true,
  restDays: [] as string[],
  lastCourse: null as string | null,
  examResp: {} as Record<string, 0 | 1>,
  certs: {} as Record<string, CertRecord>,
};

export function todayStats(day: { key: string; stats: DayStats }, today = localDateKey()): DayStats {
  return day.key === today ? day.stats : EMPTY_DAY;
}

type Draft = typeof initialData;

/** 一堂課結束後共用的記帳流程 */
function applyResult(
  s: Draft,
  args: { subject?: string; result: LessonResult; isReview?: boolean },
): Partial<Draft> & { outcome: CompletionOutcome } {
  const today = localDateKey();
  const xp = lessonXp(args.result);
  const before = todayStats(s.day, today);
  const perfect = args.result.total > 0 && args.result.firstTryCorrect === args.result.total;
  const stats: DayStats = {
    xp: before.xp + xp,
    lessons: before.lessons + 1,
    bestCombo: Math.max(before.bestCombo, args.result.maxCombo),
    perfect: before.perfect + (perfect ? 1 : 0),
    subjects: args.subject && !before.subjects.includes(args.subject) ? [...before.subjects, args.subject] : before.subjects,
    reviews: before.reviews + (args.isReview ? 1 : 0),
  };
  const streak = advanceStreak(s.streak, today, s.restDays);
  return {
    totalXp: s.totalXp + xp,
    xpByDay: { ...s.xpByDay, [today]: (s.xpByDay[today] ?? 0) + xp },
    day: { key: today, stats },
    streak,
    lessonsDone: s.lessonsDone + 1,
    perfectCount: s.perfectCount + (perfect ? 1 : 0),
    reviewsDone: s.reviewsDone + (args.isReview ? 1 : 0),
    subjectsTouched:
      args.subject && !s.subjectsTouched.includes(args.subject) ? [...s.subjectsTouched, args.subject] : s.subjectsTouched,
    outcome: {
      xp,
      streakBefore: s.streak.lastDay === today ? s.streak.current : 0,
      streakAfter: streak.current,
      goalReachedNow: before.xp < s.dailyGoal && stats.xp >= s.dailyGoal,
    },
  };
}

function mergeMistakes(
  current: Record<string, MistakeRecord>,
  courseId: string,
  wrongItems: LessonCompletion['wrongItems'],
  rightItemIds: string[],
) {
  const next = { ...current };
  const now = new Date().toISOString();
  for (const id of rightItemIds) delete next[id];
  for (const w of wrongItems) {
    const prev = next[w.item.id];
    next[w.item.id] = {
      item: w.item,
      courseId,
      courseTitle: w.courseTitle,
      unitTitle: w.unitTitle,
      wrong: (prev?.wrong ?? 0) + 1,
      lastWrong: now,
    };
  }
  // 最多保留 150 題，先淘汰最舊的
  const entries = Object.entries(next);
  if (entries.length > 150) {
    entries.sort((a, b) => a[1].lastWrong.localeCompare(b[1].lastWrong));
    for (const [id] of entries.slice(0, entries.length - 150)) delete next[id];
  }
  return next;
}

export const useLearnStore = create<LearnState>()(
  persist(
    (set, get) => ({
      ...initialData,

      completeLesson: (c) => {
        const s = get();
        const { outcome, ...patch } = applyResult(s, { subject: c.subject, result: c.result });
        const prev = s.completed[c.nodeId];
        const accuracy = c.result.total ? c.result.firstTryCorrect / c.result.total : 1;
        set({
          ...patch,
          completed: {
            ...s.completed,
            [c.nodeId]: {
              at: new Date().toISOString(),
              accuracy: Math.max(accuracy, prev?.skipped ? 0 : prev?.accuracy ?? 0),
              plays: (prev?.plays ?? 0) + 1,
            },
          },
          mistakes: mergeMistakes(s.mistakes, c.courseId, c.wrongItems, c.rightItemIds),
          lastCourse: c.courseId,
        });
        return outcome;
      },

      completeSession: (c) => {
        const s = get();
        const { outcome, ...patch } = applyResult(s, { subject: c.subject, result: c.result, isReview: c.isReview });
        // 答對的題目移出錯題本；新答錯的加入（錯題複習時仍答錯者原樣保留）
        const mistakes = c.isReview
          ? Object.fromEntries(Object.entries(s.mistakes).filter(([id]) => !c.rightItemIds.includes(id)))
          : mergeMistakes(s.mistakes, c.courseId ?? '', c.wrongItems, c.rightItemIds);
        set({ ...patch, mistakes });
        return outcome;
      },

      openChest: (nodeId) => {
        const s = get();
        if (s.completed[nodeId]) return 0;
        set({
          bricks: s.bricks + CHEST_BRICKS,
          completed: { ...s.completed, [nodeId]: { at: new Date().toISOString(), accuracy: 1, plays: 1 } },
        });
        return CHEST_BRICKS;
      },

      skipNodes: (nodeIds, c) => {
        const s = get();
        const { outcome, ...patch } = applyResult(s, { subject: c.subject, result: c.result });
        const completed = { ...s.completed };
        const at = new Date().toISOString();
        for (const id of nodeIds) {
          if (!completed[id]) completed[id] = { at, accuracy: 0, plays: 0, skipped: true };
        }
        set({
          ...patch,
          completed,
          mistakes: mergeMistakes(s.mistakes, c.courseId, c.wrongItems, c.rightItemIds),
          lastCourse: c.courseId,
        });
        return outcome;
      },

      markCourseComplete: (courseId) => {
        const s = get();
        if (!s.coursesCompleted.includes(courseId)) set({ coursesCompleted: [...s.coursesCompleted, courseId] });
      },

      claimQuest: (questId, reward) => {
        const s = get();
        if (s.claimedQuests.includes(questId)) return;
        // 只保留近 30 筆，避免無限成長
        set({ claimedQuests: [...s.claimedQuests, questId].slice(-30), bricks: s.bricks + reward });
      },

      buyFreeze: () => {
        const s = get();
        if (s.bricks < FREEZE_PRICE || s.streak.freezes >= MAX_FREEZES) return false;
        set({ bricks: s.bricks - FREEZE_PRICE, streak: { ...s.streak, freezes: s.streak.freezes + 1 } });
        return true;
      },

      setDailyGoal: (xp) => set({ dailyGoal: xp }),
      toggleSound: () => set({ soundOn: !get().soundOn }),
      toggleHaptics: () => set({ hapticsOn: !get().hapticsOn }),
      setRest: (days) => {
        const today = localDateKey();
        const kept = get().restDays.filter((d) => d < today);
        const next = Array.from({ length: Math.min(3, Math.max(0, days)) }, (_, i) => addDaysKey(today, i));
        set({ restDays: [...kept, ...next].slice(-30) });
      },

      completeExamTest: (c) => {
        const s = get();
        const correct = c.answers.filter((a) => a.correct).length;
        const { outcome, ...patch } = applyResult(s, {
          subject: c.subject,
          result: { total: c.answers.length, firstTryCorrect: correct, maxCombo: 0, kind: 'jump' },
        });
        // 能力估計只採第一次作答，重做同一題不覆蓋
        const examResp = { ...s.examResp };
        for (const a of c.answers) if (!(a.id in examResp)) examResp[a.id] = a.correct ? 1 : 0;
        const prev = s.certs[c.courseId];
        const improved = c.counted && tierRank(c.tier) > tierRank(prev?.tier);
        let bricks = 0;
        if (improved) {
          for (const t of ['low', 'mid', 'high', 'top', 'ace'] as TierId[]) {
            if (tierRank(t) > tierRank(prev?.tier) && tierRank(t) <= tierRank(c.tier)) bricks += TIER_BRICKS[t];
          }
        }
        const record: CertRecord =
          c.counted && (!prev || tierRank(c.tier) > tierRank(prev.tier) || (c.tier === prev.tier && c.pct > prev.pct))
            ? { tier: c.tier, pct: c.pct, thresholds: c.thresholds, at: new Date().toISOString(), attempts: (prev?.attempts ?? 0) + 1 }
            : prev
              ? { ...prev, attempts: prev.attempts + 1 }
              : { tier: null, pct: c.counted ? c.pct : 0, thresholds: c.thresholds, at: new Date().toISOString(), attempts: 1 };
        set({
          ...patch,
          examResp,
          certs: { ...s.certs, [c.courseId]: record },
          bricks: s.bricks + bricks,
          lastCourse: c.courseId,
        });
        return { ...outcome, bricks, improved };
      },
      setLastCourse: (courseId) => set({ lastCourse: courseId }),
      resetProgress: () => set({ ...initialData }),
    }),
    {
      name: 'arch-learn-path-v1',
      version: 2,
      // v1 → v2：新增統測檢定與休息模式欄位，舊資料補上預設值即可
      migrate: (persisted) => ({ ...initialData, ...(persisted as object) }),
      skipHydration: true,
      partialize: (s) => {
        const data: Partial<LearnState> = { ...s };
        for (const k of Object.keys(data) as (keyof LearnState)[]) {
          if (typeof data[k] === 'function') delete data[k];
        }
        return data;
      },
    },
  ),
);

const subscribeHydration = (cb: () => void) => useLearnStore.persist.onFinishHydration(cb);
const getHydrated = () => useLearnStore.persist.hasHydrated();
const getServerHydrated = () => false;

/** 掛載後讀取 localStorage，並回傳是否已載入完成 */
export function useLearnHydration(): boolean {
  useEffect(() => {
    if (!useLearnStore.persist.hasHydrated()) void useLearnStore.persist.rehydrate();
  }, []);
  return useSyncExternalStore(subscribeHydration, getHydrated, getServerHydrated);
}
