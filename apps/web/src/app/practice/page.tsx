import ExamSimulator, { type SimulationQuestion } from '@/components/ExamSimulator';
import Link from 'next/link';
import coverage from '../../../../../data/registry/exam-coverage.json';
import common from '../../../../../data/registry/common-exam-questions.json';
import pageMapData from '../../../../../data/registry/exam-page-map.json';

export const metadata = { title: '全科目歷屆統測模擬練習｜Arch V5', description: '使用 111–115 年國文、英文、數學(C)與建築群專業科目共 925 題進行整份模擬練習。' };

const professionalNames: Record<number, string> = { 1: '專業科目（一）', 2: '專業科目（二）' };
const pageMap = pageMapData as Record<string, { figureImage: string; originalPage: number }>;

export default function PracticePage() {
  const professional = coverage.questions.map((question) => ({
    ...question,
    exam: `professional-${question.paper}`,
    subjectName: professionalNames[question.paper],
    ...pageMap[question.id],
  }));
  const questions = [...common.questions, ...professional] as SimulationQuestion[];
  return <main className="mx-auto max-w-5xl space-y-9 px-4 py-10 sm:px-6 sm:py-14"><header><p className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">All-subject past exam simulator</p><h1 className="mt-2 font-serif text-3xl font-bold text-slate-900 dark:text-white sm:text-5xl">全科目歷屆統測模擬</h1><p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-400">收錄 111–115 年五科共 925 題。題幹與選項已逐題辨識；英文與國文短文依官方題組一次呈現文章及全部對應題目，公式、圖表和製圖則顯示單題裁切圖面。</p></header><div className="-mt-4 flex justify-end"><Link href="/exams" className="text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline">查看五年統測題庫與解答 →</Link></div><ExamSimulator questions={questions} /></main>;
}
