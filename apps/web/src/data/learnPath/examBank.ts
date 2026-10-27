/**
 * 統測對標檢定題池（由 scripts/build-learn-exam-bank.mjs 產生 generated/examBank.json）
 */
import bank from './generated/examBank.json';
import type { ExamPool, ExamStandard } from '@/lib/learn/examAlign';

const data = bank as unknown as {
  latestYear: number;
  standards: Record<string, Record<string, ExamStandard>>;
  pools: Record<string, ExamPool>;
  routeLabels: Record<string, string>;
};

/** 教學頁路徑的中文主題名稱 */
export const routeLabel = (route: string) => data.routeLabels[route] ?? route.split('/').pop() ?? route;

export const EXAM_LATEST_YEAR = data.latestYear;
export const EXAM_STANDARDS = data.standards;

/** 依課程 key（例如 math-1、exam-pro1）取題池；非統測課程回傳 undefined */
export function examPoolFor(courseKey: string): ExamPool | undefined {
  return data.pools[courseKey];
}

export function latestStandard(exam: string): ExamStandard {
  return data.standards[String(data.latestYear)][exam];
}

export const EXAM_POOLS = data.pools;

export const EXAM_SUBJECTS: { exam: string; label: string }[] = [
  { exam: 'chinese', label: '國文' },
  { exam: 'english', label: '英文' },
  { exam: 'math-c', label: '數學(C)' },
  { exam: 'professional-1', label: '專業科目(一)' },
  { exam: 'professional-2', label: '專業科目(二)' },
];
