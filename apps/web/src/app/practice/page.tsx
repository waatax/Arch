import ExamSimulator, { type PracticeCatalog } from '@/components/ExamSimulator';
import Link from 'next/link';
import catalogData from '../../../public/practice-data/index.json';

export const metadata = { title: '全科目歷屆統測模擬練習｜Arch V8.01', description: '使用 111–115 年國文、英文、數學(C)與建築群專業科目共 925 題進行整份模擬練習。' };

export default function PracticePage() {
  return <main className="mx-auto max-w-6xl space-y-9 px-4 py-10 sm:px-6 sm:py-14"><header><p className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">All-subject past exam simulator</p><h1 className="mt-2 font-serif text-3xl font-bold text-slate-900 dark:text-white sm:text-5xl">全科目歷屆統測模擬</h1><p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-400">收錄 111–115 年五科共 925 題。題幹與選項已逐題辨識；英文與國文短文依官方題組一次呈現文章及全部對應題目，公式、圖表和製圖則顯示單題裁切圖面。</p><a href="#question-bank" className="mt-5 inline-flex text-sm font-bold text-blue-600 hover:underline dark:text-blue-400">前往統測題庫 ↓</a></header><ExamSimulator catalog={catalogData as PracticeCatalog} />
    <section id="question-bank" className="space-y-6 border-t border-slate-200 pt-12 dark:border-slate-800" aria-labelledby="question-bank-title">
      <div><p className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400">Official all-subject archive</p><h2 id="question-bank-title" className="mt-1 font-serif text-3xl font-bold text-slate-900 dark:text-white">統測題庫</h2><p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-400">選擇學年度查看國文、英文、數學(C)與建築群專業科目的官方題本、標準答案與教學對照。</p></div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{[115, 114, 113, 112, 111].map((year) => <article key={year} className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"><p className="text-xs font-mono text-slate-500">{year + 1911}</p><h3 className="mt-1 font-serif text-2xl font-bold text-slate-900 dark:text-white">{year} 學年度</h3><div className="mt-5 flex flex-col gap-3 text-sm font-bold"><Link href={`/exams#year-${year}`} className="text-blue-600 hover:underline dark:text-blue-400">題庫與解答 →</Link><a href={`https://web1.tcte.edu.tw/EXAM/${year}_4y/`} target="_blank" rel="noreferrer" className="text-slate-600 hover:underline dark:text-slate-400">官方年度頁 ↗</a></div></article>)}</div>
    </section>
  </main>;
}
