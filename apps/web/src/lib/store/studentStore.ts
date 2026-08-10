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
}

export interface StudentState {
  questionsCompleted: number;
  dailyGoal: number;
  recentAccuracy: number[];
  lastActiveDate: string | null;
  completedCycles: number;
  mistakeCards: MistakeCard[];
  updateAccuracy: (isCorrect: boolean) => void;
  completeCycle: () => void;
  addMistakeCard: (card: Pick<MistakeCard, 'id' | 'prompt' | 'correction' | 'reason'>) => void;
  reviewMistakeCard: (id: string, recalled: boolean) => void;
  resetDailyIfNewDay: () => void;
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

      updateAccuracy: (isCorrect) => set((state) => ({
        recentAccuracy: [...state.recentAccuracy, isCorrect ? 1 : 0].slice(-10),
        questionsCompleted: state.questionsCompleted + 1,
        lastActiveDate: new Date().toDateString(),
      })),

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
        if (get().lastActiveDate !== today) {
          set({ questionsCompleted: 0, lastActiveDate: today });
        }
      },
    }),
    { name: 'arch-student-storage', version: 2 },
  ),
);
