export interface AnswerRecord {
  correct: boolean;
  earned: boolean;
  attempts: number;
  lastDay: string;
  due: string;
  streak: number;
}
export interface PlanUnit { id: string; title: string; subject: string; href: string }
export const dayKey = (date = new Date()) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
export function validDay(day: unknown): day is string {
  return typeof day === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(day) && Number.isFinite(Date.parse(day)) && new Date(day).toISOString().slice(0, 10) === day;
}
export const addDays = (day: string, amount: number) => new Date(Date.parse(day) + amount * 86400000).toISOString().slice(0, 10);
export function recordAnswer(previous: AnswerRecord | undefined, correct: boolean, day: string): AnswerRecord {
  const streak = correct ? previous?.correct && previous.lastDay !== day ? previous.streak + 1 : previous?.correct ? previous.streak : 1 : 0;
  return {
    correct, earned: Boolean(previous?.earned || correct), attempts: (previous?.attempts ?? 0) + 1,
    lastDay: day, streak,
    due: correct ? addDays(day, [1, 3, 7, 14][Math.min(Math.max(streak - 1, 0), 3)]) : day,
  };
}
export function buildPlan(units: PlanUnit[], date: string, minutes: number, today: string) {
  const days = validDay(date) ? Math.floor((Date.parse(date) - Date.parse(today)) / 86400000) : 0;
  const capacity = Math.max(1, Math.floor(minutes / 10));
  // Reserve the exam date itself for rest and checking equipment.
  const available = Math.max(0, days);
  const rows = units.map((unit, i) => ({ ...unit, day: addDays(today, Math.floor(i / capacity)), overflow: Math.floor(i / capacity) >= available }));
  return { rows, days: available, capacity, overflow: rows.filter((r) => r.overflow).length };
}
