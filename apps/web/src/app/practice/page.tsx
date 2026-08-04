import ExamSimulator, { type SimulationQuestion } from '@/components/ExamSimulator';
import coverage from '../../../../../data/registry/exam-coverage.json';

export const metadata = { title: '歷屆統測模擬練習｜Arch V5', description: '使用 111–115 年土木與建築群統測試題進行 10、20 或 40 題模擬練習。' };

export default function PracticePage() {
  return <main className="mx-auto max-w-5xl space-y-9 px-4 py-10 sm:px-6 sm:py-14"><header><p className="text-xs font-mono uppercase tracking-[0.2em] text-(--color-teal-700)">Past Exam Simulator</p><h1 className="mt-2 font-serif text-3xl font-bold text-(--color-ink-900) sm:text-5xl">歷屆統測模擬練習</h1><p className="mt-5 max-w-3xl text-base leading-8 text-(--color-ink-650)">題目取自 111–115 年四技二專統測土木與建築群公開試題，並清楚標示年份。可選 10 題暖身、20 題半回或 40 題完整模擬。</p></header><ExamSimulator questions={coverage.questions as SimulationQuestion[]} /></main>;
}
