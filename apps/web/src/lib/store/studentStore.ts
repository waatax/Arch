import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type MistakeReason = 'K' | 'F' | 'U' | 'G' | 'A' | 'R' | 'T' | 'X';

export interface MistakeCard {
  id: string;
  prompt: string;
  correction: string;
  reason: MistakeReason;
  nextReviewAt: string;
  reviewStage: 0 | 1 | 2 | 3;
  createdAt: string;
  subject?: string;
  topic?: string;
  userChoice?: string;
  correctAnswer?: string;
  lessonRoute?: string;
}

/** 最近造訪的章節與閱讀位置（用於「繼續上次學習」） */
export interface RecentTopic {
  route: string;
  visitedAt: string;
  /** 最後停留的段落 id，例如 concept-2、worked、practice */
  section?: string;
}

export interface StudentState {
  questionsCompleted: number;
  dailyGoal: number;
  recentAccuracy: number[];
  lastActiveDate: string | null;
  completedCycles: number;
  mistakeCards: MistakeCard[];
  bookmarkedTopics: string[];
  completedTopics: string[];
  streakDays: number;
  topicConceptProgress: Record<string, number[]>;
  highlightedConcepts: Record<string, number[]>;
  recentTopics: RecentTopic[];
  updateAccuracy: (isCorrect: boolean) => void;
  completeCycle: () => void;
  addMistakeCard: (card: Pick<MistakeCard, 'id' | 'prompt' | 'correction' | 'reason'> & Partial<Pick<MistakeCard, 'subject' | 'topic' | 'userChoice' | 'correctAnswer' | 'lessonRoute'>>) => void;
  removeMistakeCard: (id: string) => void;
  reviewMistakeCard: (id: string, recalled: boolean) => void;
  resetDailyIfNewDay: () => void;
  toggleBookmark: (topicRoute: string) => void;
  markTopicCompleted: (topicRoute: string) => void;
  toggleConceptProgress: (topicRoute: string, conceptIndex: number) => boolean;
  toggleConceptHighlight: (topicRoute: string, conceptIndex: number) => boolean;
  recordDailyActivity: () => void;
  recordTopicVisit: (route: string, section?: string) => void;
}

const reviewIntervals = [1, 7, 21] as const;
const addDays = (days: number) => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString();
};

export const useStudentStore = create<StudentState>()(
  persist(
    (set, get) => ({
      questionsCompleted: 0,
      dailyGoal: 5,
      recentAccuracy: [],
      lastActiveDate: null,
      completedCycles: 0,
      mistakeCards: [],
      bookmarkedTopics: [],
      completedTopics: [],
      streakDays: 1,
      topicConceptProgress: {},
      highlightedConcepts: {},
      recentTopics: [],

      updateAccuracy: (isCorrect) => {
        get().recordDailyActivity();
        set((state) => ({
          recentAccuracy: [...state.recentAccuracy, isCorrect ? 1 : 0].slice(-10),
          questionsCompleted: state.questionsCompleted + 1,
        }));
      },

      completeCycle: () => set((state) => ({ completedCycles: state.completedCycles + 1 })),

      addMistakeCard: (card) => set((state) => ({
        mistakeCards: [
          ...state.mistakeCards.filter((item) => item.id !== card.id),
          {
            ...card,
            createdAt: new Date().toISOString(),
            nextReviewAt: addDays(reviewIntervals[0]),
            reviewStage: 0,
          },
        ],
      })),

      removeMistakeCard: (id) => set((state) => ({
        mistakeCards: state.mistakeCards.filter((card) => card.id !== id),
      })),

      reviewMistakeCard: (id, recalled) => set((state) => ({
        mistakeCards: state.mistakeCards.map((card) => {
          if (card.id !== id) return card;
          const nextStage = recalled ? Math.min(3, card.reviewStage + 1) as 0 | 1 | 2 | 3 : 0;
          const interval = reviewIntervals[Math.min(nextStage, 2)];
          return { ...card, reviewStage: nextStage, nextReviewAt: addDays(interval) };
        }),
      })),

      resetDailyIfNewDay: () => {
        const today = new Date().toDateString();
        const last = get().lastActiveDate;
        if (last !== today) {
          get().recordDailyActivity();
          set({ questionsCompleted: 0 });
        }
      },

      recordDailyActivity: () => {
        const today = new Date();
        const todayStr = today.toDateString();
        const lastActive = get().lastActiveDate;

        if (lastActive === todayStr) {
          return;
        }

        let newStreak = get().streakDays || 0;
        if (lastActive) {
          const lastDate = new Date(lastActive);
          const diffTime = today.getTime() - lastDate.getTime();
          const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

          if (diffDays === 1) {
            newStreak += 1;
          } else if (diffDays > 1) {
            newStreak = 1;
          }
        } else {
          newStreak = 1;
        }

        set({
          lastActiveDate: todayStr,
          streakDays: Math.max(1, newStreak),
        });
      },

      toggleBookmark: (topicRoute) => set((state) => {
        const current = state.bookmarkedTopics || [];
        const exists = current.includes(topicRoute);
        return {
          bookmarkedTopics: exists
            ? current.filter((r) => r !== topicRoute)
            : [...current, topicRoute],
        };
      }),

      markTopicCompleted: (topicRoute) => {
        get().recordDailyActivity();
        set((state) => {
          const current = state.completedTopics || [];
          if (current.includes(topicRoute)) return state;
          return { completedTopics: [...current, topicRoute] };
        });
      },

      toggleConceptProgress: (topicRoute, conceptIndex) => {
        get().recordDailyActivity();
        const currentMap = get().topicConceptProgress || {};
        const currentList = currentMap[topicRoute] || [];
        const exists = currentList.includes(conceptIndex);
        const nextList = exists
          ? currentList.filter((idx) => idx !== conceptIndex)
          : [...currentList, conceptIndex];

        set({
          topicConceptProgress: {
            ...currentMap,
            [topicRoute]: nextList,
          },
        });
        return !exists;
      },

      toggleConceptHighlight: (topicRoute, conceptIndex) => {
        get().recordDailyActivity();
        const currentMap = get().highlightedConcepts || {};
        const currentList = currentMap[topicRoute] || [];
        const exists = currentList.includes(conceptIndex);
        const nextList = exists
          ? currentList.filter((idx) => idx !== conceptIndex)
          : [...currentList, conceptIndex];

        set({
          highlightedConcepts: {
            ...currentMap,
            [topicRoute]: nextList,
          },
        });
        return !exists;
      },

      recordTopicVisit: (route, section) => set((state) => {
        const previous = (state.recentTopics || []).find((item) => item.route === route);
        const entry: RecentTopic = { route, visitedAt: new Date().toISOString(), section: section ?? previous?.section };
        return { recentTopics: [entry, ...(state.recentTopics || []).filter((item) => item.route !== route)].slice(0, 12) };
      }),
    }),
    { name: 'arch-student-storage', version: 3 },
  ),
);
