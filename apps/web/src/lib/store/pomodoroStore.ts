import { create } from 'zustand';

interface PomodoroState {
  isActive: boolean;
  timeLeft: number;
  mode: 'focus' | 'break';
  start: () => void;
  pause: () => void;
  reset: () => void;
  tick: () => void;
  setMode: (mode: 'focus' | 'break') => void;
}

const FOCUS_TIME = 25 * 60;
const BREAK_TIME = 5 * 60;

export const usePomodoroStore = create<PomodoroState>((set) => ({
  isActive: false,
  timeLeft: FOCUS_TIME,
  mode: 'focus',
  start: () => set({ isActive: true }),
  pause: () => set({ isActive: false }),
  reset: () => set((state) => ({ 
    isActive: false, 
    timeLeft: state.mode === 'focus' ? FOCUS_TIME : BREAK_TIME 
  })),
  tick: () => set((state) => {
    if (state.timeLeft > 0) {
      return { timeLeft: state.timeLeft - 1 };
    }
    // Auto switch mode when time is up
    const newMode = state.mode === 'focus' ? 'break' : 'focus';
    return {
      isActive: false,
      mode: newMode,
      timeLeft: newMode === 'focus' ? FOCUS_TIME : BREAK_TIME
    };
  }),
  setMode: (mode) => set({ 
    mode, 
    isActive: false, 
    timeLeft: mode === 'focus' ? FOCUS_TIME : BREAK_TIME 
  }),
}));
