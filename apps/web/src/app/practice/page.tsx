import ExamSimulator, { type SimulationQuestion } from '@/components/ExamSimulator';
import coverage from '../../../../../data/registry/exam-coverage.json';
import common from '../../../../../data/registry/common-exam-questions.json';
import pageMapData from '../../../../../data/registry/exam-page-map.json';

export const metadata = { title: '全科目歷屆統測模擬練習｜Arch V5', description: '使用 111–115 年國文、英文、數學(C)與建築群專業科目共 925 題進行整份模擬練習。' };

const professionalNames: Record<number, string> = { 1: '專業科目（一）', 2: '專業科目（二）' };
const pageMap = pageMapData as Record<string, { questionImage: string; originalPage: number }>;

export default function PracticePage() {
  const professional = coverage.questions.map((question) => ({
    ...question,
    exam: `professional-${question.paper}`,
    subjectName: professionalNames[question.paper],
    ...pageMap[question.id],
  }));
  const questions = [...common.questions, ...professional] as SimulationQuestion[];
  return <main className="mx-auto max-w-5xl space-y-9 px-4 py-10 sm:px-6 sm:py-14"><header><p className="text-xs font-mono uppercase tracking-[0.2em] text-(--color-teal-700)">All-subject past exam simulator</p><h1 className="mt-2 font-serif text-3xl font-bold text-(--color-ink-900) sm:text-5xl">全科目歷屆統測模擬</h1><p className="mt-5 max-w-3xl text-base leading-8 text-(--color-ink-650)">收錄 111–115 年國文、英文、數學(C)、專業科目（一）與（二），共 925 題。所有題目完成後一次提交解析；需要圖表與製圖判讀時，原題圖面直接顯示於作答頁。</p></header><ExamSimulator questions={questions} /></main>;
}
