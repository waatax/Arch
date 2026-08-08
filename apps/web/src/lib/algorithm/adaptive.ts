/**
 * V6.0 Adaptive Learning Algorithm (Lightweight IRT)
 * This module calculates the optimal difficulty and scaffolding needs for a student based on recent performance.
 */

export type DifficultyLevel = 'easy' | 'medium' | 'hard';

export interface StudentState {
  streak: number;
  recentAccuracy: number[]; // 1 for correct, 0 for incorrect (last 5 questions)
  averageTimePerQuestionMs: number;
}

/**
 * Calculates the next recommended difficulty based on the student's state.
 */
export function calculateNextDifficulty(state: StudentState): DifficultyLevel {
  const correctCount = state.recentAccuracy.reduce((a, b) => a + b, 0);
  const accuracyRate = state.recentAccuracy.length > 0 ? correctCount / state.recentAccuracy.length : 1;

  if (accuracyRate >= 0.8 && state.streak >= 3) {
    return 'hard';
  } else if (accuracyRate <= 0.4) {
    return 'easy';
  } else {
    return 'medium';
  }
}

/**
 * Determines if the student needs scaffolding (step-by-step hints) for the next question.
 * Triggered if the student gets 2 consecutive incorrect answers.
 */
export function needsScaffolding(state: StudentState): boolean {
  if (state.recentAccuracy.length < 2) return false;
  const lastTwo = state.recentAccuracy.slice(-2);
  return lastTwo[0] === 0 && lastTwo[1] === 0;
}
