import type { CourseColor } from '@/data/learnPath/types';

/**
 * Tailwind 需在原始碼中看到完整 class 字串才會產生樣式，所以逐色列出。
 * node：立體按鈕（底部加深邊框）；banner：單元標題列；soft：淺底；text：主色文字。
 */
export interface ColorTokens {
  node: string;
  banner: string;
  soft: string;
  text: string;
  bar: string;
  ring: string;
  border: string;
}

export const COURSE_COLORS: Record<CourseColor, ColorTokens> = {
  emerald: {
    node: 'bg-emerald-500 border-emerald-700 text-white',
    banner: 'bg-emerald-600 border-emerald-800',
    soft: 'bg-emerald-50 dark:bg-emerald-950/40',
    text: 'text-emerald-700 dark:text-emerald-300',
    bar: 'bg-emerald-500',
    ring: 'ring-emerald-300 dark:ring-emerald-700',
    border: 'border-emerald-200 dark:border-emerald-800',
  },
  sky: {
    node: 'bg-sky-500 border-sky-700 text-white',
    banner: 'bg-sky-600 border-sky-800',
    soft: 'bg-sky-50 dark:bg-sky-950/40',
    text: 'text-sky-700 dark:text-sky-300',
    bar: 'bg-sky-500',
    ring: 'ring-sky-300 dark:ring-sky-700',
    border: 'border-sky-200 dark:border-sky-800',
  },
  violet: {
    node: 'bg-violet-500 border-violet-700 text-white',
    banner: 'bg-violet-600 border-violet-800',
    soft: 'bg-violet-50 dark:bg-violet-950/40',
    text: 'text-violet-700 dark:text-violet-300',
    bar: 'bg-violet-500',
    ring: 'ring-violet-300 dark:ring-violet-700',
    border: 'border-violet-200 dark:border-violet-800',
  },
  amber: {
    node: 'bg-amber-500 border-amber-700 text-white',
    banner: 'bg-amber-600 border-amber-800',
    soft: 'bg-amber-50 dark:bg-amber-950/40',
    text: 'text-amber-700 dark:text-amber-300',
    bar: 'bg-amber-500',
    ring: 'ring-amber-300 dark:ring-amber-700',
    border: 'border-amber-200 dark:border-amber-800',
  },
  rose: {
    node: 'bg-rose-500 border-rose-700 text-white',
    banner: 'bg-rose-600 border-rose-800',
    soft: 'bg-rose-50 dark:bg-rose-950/40',
    text: 'text-rose-700 dark:text-rose-300',
    bar: 'bg-rose-500',
    ring: 'ring-rose-300 dark:ring-rose-700',
    border: 'border-rose-200 dark:border-rose-800',
  },
  teal: {
    node: 'bg-teal-500 border-teal-700 text-white',
    banner: 'bg-teal-600 border-teal-800',
    soft: 'bg-teal-50 dark:bg-teal-950/40',
    text: 'text-teal-700 dark:text-teal-300',
    bar: 'bg-teal-500',
    ring: 'ring-teal-300 dark:ring-teal-700',
    border: 'border-teal-200 dark:border-teal-800',
  },
  indigo: {
    node: 'bg-indigo-500 border-indigo-700 text-white',
    banner: 'bg-indigo-600 border-indigo-800',
    soft: 'bg-indigo-50 dark:bg-indigo-950/40',
    text: 'text-indigo-700 dark:text-indigo-300',
    bar: 'bg-indigo-500',
    ring: 'ring-indigo-300 dark:ring-indigo-700',
    border: 'border-indigo-200 dark:border-indigo-800',
  },
  orange: {
    node: 'bg-orange-500 border-orange-700 text-white',
    banner: 'bg-orange-600 border-orange-800',
    soft: 'bg-orange-50 dark:bg-orange-950/40',
    text: 'text-orange-700 dark:text-orange-300',
    bar: 'bg-orange-500',
    ring: 'ring-orange-300 dark:ring-orange-700',
    border: 'border-orange-200 dark:border-orange-800',
  },
  lime: {
    node: 'bg-lime-600 border-lime-800 text-white',
    banner: 'bg-lime-700 border-lime-900',
    soft: 'bg-lime-50 dark:bg-lime-950/40',
    text: 'text-lime-700 dark:text-lime-300',
    bar: 'bg-lime-600',
    ring: 'ring-lime-300 dark:ring-lime-700',
    border: 'border-lime-200 dark:border-lime-800',
  },
  cyan: {
    node: 'bg-cyan-500 border-cyan-700 text-white',
    banner: 'bg-cyan-600 border-cyan-800',
    soft: 'bg-cyan-50 dark:bg-cyan-950/40',
    text: 'text-cyan-700 dark:text-cyan-300',
    bar: 'bg-cyan-500',
    ring: 'ring-cyan-300 dark:ring-cyan-700',
    border: 'border-cyan-200 dark:border-cyan-800',
  },
  fuchsia: {
    node: 'bg-fuchsia-500 border-fuchsia-700 text-white',
    banner: 'bg-fuchsia-600 border-fuchsia-800',
    soft: 'bg-fuchsia-50 dark:bg-fuchsia-950/40',
    text: 'text-fuchsia-700 dark:text-fuchsia-300',
    bar: 'bg-fuchsia-500',
    ring: 'ring-fuchsia-300 dark:ring-fuchsia-700',
    border: 'border-fuchsia-200 dark:border-fuchsia-800',
  },
  slate: {
    node: 'bg-slate-500 border-slate-700 text-white',
    banner: 'bg-slate-600 border-slate-800',
    soft: 'bg-slate-100 dark:bg-slate-800/60',
    text: 'text-slate-700 dark:text-slate-300',
    bar: 'bg-slate-500',
    ring: 'ring-slate-300 dark:ring-slate-600',
    border: 'border-slate-200 dark:border-slate-700',
  },
};

export const TYPE_LABEL: Record<string, string> = {
  mcq: '選出正確答案',
  tf: '判斷對或錯',
  match: '點選配對',
  order: '依正確順序排列',
  num: '計算並輸入答案',
};
