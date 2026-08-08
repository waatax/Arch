import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface StudentState {
  streak: number;
  eloRank: number;
  questionsCompleted: number;
  dailyGoal: number;
  recentAccuracy: number[]; 
  lastActiveDate: string | null;
  incrementStreak: () => void;
  updateAccuracy: (isCorrect: boolean) => void;
  resetDailyIfNewDay: () => void;
}

export const useStudentStore = create<StudentState>()(
  persist(
    (set, get) => ({
      streak: 0,
      eloRank: 1200,
      questionsCompleted: 0,
      dailyGoal: 50,
      recentAccuracy: [],
      lastActiveDate: null,

      incrementStreak: () => set((state) => ({ streak: state.streak + 1 })),
      
      updateAccuracy: (isCorrect: boolean) => set((state) => {
        const newAccuracy = [...state.recentAccuracy, isCorrect ? 1 : 0].slice(-10); // Keep last 10
        const eloChange = isCorrect ? 15 : -5;
        
        return {
          recentAccuracy: newAccuracy,
          questionsCompleted: state.questionsCompleted + 1,
          eloRank: Math.max(0, state.eloRank + eloChange),
          lastActiveDate: new Date().toDateString()
        };
      }),

      resetDailyIfNewDay: () => {
        const today = new Date().toDateString();
        const state = get();
        if (state.lastActiveDate !== today) {
          // If the last active date wasn't yesterday, break the streak
          // (Simplified logic: if lastActiveDate is not today, we just check if we missed a day)
          // For a true streak, you'd check if yesterday === lastActiveDate
          
          set({
            questionsCompleted: 0, // Reset daily goal progress
            lastActiveDate: today,
          });
        }
      }
    }),
    {
      name: 'arch-student-storage', // unique name
    }
  )
);
