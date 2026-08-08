import Link from 'next/link';
import coverage from '../../../../../data/registry/exam-coverage.json';
import common from '../../../../../data/registry/common-exam-questions.json';

export const metadata = {
  title: '近五年統測全科目題庫｜Arch V5',
  description: '111 至 115 學年度國文、英文、數學(C)及土木與建築群專業科目，共 925 題官方試題與答案。',
};

const paperNames: Record<number, string> = {
  1: '專業科目（一）基礎工程力學、材料與試驗',
  2: '專業科目（二）測量實習、製圖實習',
};

const subjectNames: Record<string, string> = {
  mechanics: '工程力學', materials: '材料與試驗', surveying: '測量實習', drafting: '製圖實習',
};

export default function ExamsPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  const learningHref = (route: string) => `${basePath}${route.replace(/\/$/, '')}/`;
  const topicCount = new Set(coverage.questions.map((question) => question.lessonRoute)).size;

  return <main className="mx-auto max-w-6xl space-y-12 px-4 py-10 sm:px-6 sm:py-14">
    <header className="grid gap-8 lg:grid-cols-[1fr_23rem] lg:items-end">
      <div><p className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">Arch V5 · 2022–2026</p><h1 className="mt-2 font-serif text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-5xl">近五年建築群統測<br />全科目題庫</h1><p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-400">完整收錄國文、英文、數學(C)、專業科目（一）與（二）。共同科目提供官方原題與答案；400 題專業科目另連到 Arch 對應教學章節。</p><Link href="/practice" className="mt-6 inline-flex min-h-12 items-center rounded-xl bg-blue-600 dark:bg-blue-500 px-6 font-bold text-white">開始全科目模擬測試 →</Link></div>
      <aside className="grid grid-cols-3 gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-4 text-center"><div><strong className="block font-serif text-2xl text-slate-900 dark:text-white">5</strong><span className="text-xs text-slate-600 dark:text-slate-400">學年度</span></div><div><strong className="block font-serif text-2xl text-slate-900 dark:text-white">5</strong><span className="text-xs text-slate-600 dark:text-slate-400">完整考科</span></div><div><strong className="block font-serif text-2xl text-blue-600 dark:text-blue-400">925</strong><span className="text-xs text-slate-600 dark:text-slate-400">選擇題</span></div></aside>
    </header>

    <section className="grid gap-4 sm:grid-cols-3" aria-label="題庫說明"><div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 p-5"><strong className="text-slate-900 dark:text-white">全科目收錄</strong><p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">每學年度均含國文 38 題、英文 42 題、數學(C) 25 題，以及兩科專業科目各 40 題。</p></div><div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 p-5"><strong className="text-slate-900 dark:text-white">原題圖面</strong><p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">模擬作答頁直接呈現官方原題頁；圖表、製圖與閱讀版面不需另外下載 PDF。</p></div><div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 p-5"><strong className="text-slate-900 dark:text-white">專業科目導學</strong><p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">400 題專業題逐題連到 {topicCount} 個 Arch 學習節點，作答後可立即補強。</p></div></section>

    <section className="space-y-6" aria-labelledby="archive-title"><div><p className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400">Official all-subject archive</p><h2 id="archive-title" className="font-serif text-2xl font-bold text-slate-900 dark:text-white">111–115 學年度全科目題庫與解答</h2></div>
      {[115, 114, 113, 112, 111].map((year) => <article key={year} className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800"><div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 px-5 py-4 sm:px-7"><div><p className="text-xs font-mono text-slate-600 dark:text-slate-400">{year + 1911}</p><h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">{year} 學年度 · 全科目</h3></div><a href={`https://web1.tcte.edu.tw/EXAM/${year}_4y/`} target="_blank" rel="noreferrer" className="rounded-lg bg-blue-600 dark:bg-blue-500 px-4 py-2 text-sm font-bold text-white">官方年度頁 ↗</a></div>
        <div className="space-y-8 p-5 sm:p-7">
          <section><div className="mb-4"><p className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400">Common subjects</p><h4 className="font-serif text-xl font-bold text-slate-900 dark:text-white">共同科目</h4></div><div className="grid gap-4 lg:grid-cols-3">{(['chinese', 'english', 'math-c'] as const).map((exam) => { const questions = common.questions.filter((question) => question.year === year && question.exam === exam); const source = common.sources.find((item) => item.year === year && item.exam === exam); return <section key={exam} className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-4"><h5 className="font-bold text-slate-900 dark:text-white">{source?.name}</h5><div className="mt-2 flex gap-3 text-xs font-bold"><a href={source?.sourceUrl} target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">官方題本 ↗</a><a href={source?.answerUrl} target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">標準答案 ↗</a></div><details className="mt-3 rounded-lg border border-slate-200 dark:border-slate-800"><summary className="cursor-pointer list-none px-3 py-2 text-xs font-bold text-slate-900 dark:text-white">展開 {questions.length} 題答案</summary><ol className="grid max-h-72 grid-cols-2 gap-px overflow-y-auto border-t border-slate-200 dark:border-slate-800 bg-(--color-concrete-300)">{questions.map((question) => <li key={question.id} className="flex justify-between bg-white dark:bg-slate-800 px-3 py-2 text-xs"><span>第 {question.questionNo} 題</span><strong>{question.answer}</strong></li>)}</ol></details></section>; })}</div></section>
          <section><div className="mb-4"><p className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400">Professional subjects</p><h4 className="font-serif text-xl font-bold text-slate-900 dark:text-white">專業科目</h4></div><div className="grid gap-6 lg:grid-cols-2">{[1, 2].map((paper) => { const questions = coverage.questions.filter((question) => question.year === year && question.paper === paper); const source = coverage.sources.find((item) => item.year === year && item.paper === paper); return <section key={paper} className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-4"><p className="text-xs font-mono text-blue-600 dark:text-blue-400">Paper {paper}</p><h5 className="font-bold leading-6 text-slate-900 dark:text-white">{paperNames[paper]}</h5><div className="mt-2 flex gap-3 text-xs font-bold"><a href={source?.sourceUrl} target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">官方題本 ↗</a><a href={source?.answerUrl} target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">標準答案 ↗</a></div><details className="mt-3 rounded-lg border border-slate-200 dark:border-slate-800"><summary className="cursor-pointer list-none px-3 py-2 text-xs font-bold text-slate-900 dark:text-white">展開 40 題教學對照</summary><ol className="max-h-96 divide-y divide-(--color-concrete-300) overflow-y-auto border-t border-slate-200 dark:border-slate-800">{questions.map((question) => <li key={question.id} className="grid grid-cols-[3.5rem_2rem_1fr_auto] items-center gap-2 px-3 py-2 text-xs"><span>第 {question.questionNo} 題</span><strong>{question.answer}</strong><span className="truncate text-slate-600 dark:text-slate-400">{subjectNames[question.subject]} · {question.topic}</span><a href={learningHref(question.lessonRoute)} className="font-bold text-blue-600 dark:text-blue-400 hover:underline">去複習 →</a></li>)}</ol></details></section>; })}</div></section>
        </div>
      </article>)}
    </section>
  </main>;
}
