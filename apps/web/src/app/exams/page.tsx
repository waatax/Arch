import Link from 'next/link';
import coverage from '../../../../../data/registry/exam-coverage.json';

export const metadata = {
  title: '近五年統測逐題覆蓋｜Arch V5',
  description: '111 至 115 學年度土木與建築群 400 題官方答案、考點與 Arch 教學頁逐題對照。',
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
  const covered = coverage.questions.filter((question) => question.coverage === 'covered').length;
  const topicCount = new Set(coverage.questions.map((question) => question.lessonRoute)).size;

  return <main className="mx-auto max-w-6xl space-y-12 px-4 py-10 sm:px-6 sm:py-14">
    <header className="grid gap-8 lg:grid-cols-[1fr_23rem] lg:items-end">
      <div><p className="text-xs font-mono uppercase tracking-[0.2em] text-(--color-teal-700)">Arch V5 · 2022–2026</p><h1 className="mt-2 font-serif text-3xl font-bold leading-tight text-(--color-ink-900) sm:text-5xl">近五年建築科統測<br />逐題學習地圖</h1><p className="mt-5 max-w-3xl text-base leading-8 text-(--color-ink-650)">AI Agent 已交叉比對 111–115 學年度官方題本、標準答案與 Arch 教學路由。選一年度開始作答，對答案後直接回到該題需要的觀念頁。</p><Link href="/practice" className="mt-6 inline-flex min-h-12 items-center rounded-xl bg-(--color-teal-700) px-6 font-bold text-(--color-paper-50)">開始歷屆試題模擬練習 →</Link></div>
      <aside className="grid grid-cols-3 gap-2 rounded-xl border border-(--color-concrete-300) bg-(--color-paper-50) p-4 text-center"><div><strong className="block font-serif text-2xl text-(--color-ink-900)">5</strong><span className="text-xs text-(--color-ink-650)">學年度</span></div><div><strong className="block font-serif text-2xl text-(--color-ink-900)">400</strong><span className="text-xs text-(--color-ink-650)">專業題</span></div><div><strong className="block font-serif text-2xl text-(--color-teal-700)">{Math.round(covered / coverage.questions.length * 100)}%</strong><span className="text-xs text-(--color-ink-650)">已映射</span></div></aside>
    </header>

    <section className="grid gap-4 sm:grid-cols-3" aria-label="覆蓋說明"><div className="rounded-xl border border-(--color-concrete-300) bg-(--color-paper-100) p-5"><strong className="text-(--color-ink-900)">官方來源</strong><p className="mt-2 text-sm leading-7 text-(--color-ink-650)">題本與答案直接連到技專校院入學測驗中心；更正答案以官方公告為準。</p></div><div className="rounded-xl border border-(--color-concrete-300) bg-(--color-paper-100) p-5"><strong className="text-(--color-ink-900)">逐題對應</strong><p className="mt-2 text-sm leading-7 text-(--color-ink-650)">每題均記錄年度、科目、題號、答案、考點與教學頁，共連到 {topicCount} 個學習節點。</p></div><div className="rounded-xl border border-(--color-concrete-300) bg-(--color-paper-100) p-5"><strong className="text-(--color-ink-900)">建議順序</strong><p className="mt-2 text-sm leading-7 text-(--color-ink-650)">先限時作答，再展開答案；錯題立刻進入教學頁，隔天不看答案重做。</p></div></section>

    <section className="space-y-6" aria-labelledby="archive-title"><div><p className="text-xs font-mono uppercase tracking-widest text-(--color-teal-700)">Official archive</p><h2 id="archive-title" className="font-serif text-2xl font-bold text-(--color-ink-900)">111–115 學年度題庫與解答</h2></div>
      {[115, 114, 113, 112, 111].map((year) => <article key={year} className="overflow-hidden rounded-xl border border-(--color-concrete-300) bg-(--color-paper-100)"><div className="flex flex-wrap items-center justify-between gap-3 border-b border-(--color-concrete-300) bg-(--color-paper-50) px-5 py-4 sm:px-7"><div><p className="text-xs font-mono text-(--color-ink-650)">{year + 1911}</p><h3 className="font-serif text-2xl font-bold text-(--color-ink-900)">{year} 學年度</h3></div><a href={`https://web1.tcte.edu.tw/EXAM/${year}_4y/`} target="_blank" rel="noreferrer" className="rounded-lg bg-(--color-teal-700) px-4 py-2 text-sm font-bold text-(--color-paper-50)">官方年度頁 ↗</a></div>
        <div className="grid gap-6 p-5 sm:p-7 lg:grid-cols-2">{[1, 2].map((paper) => { const questions = coverage.questions.filter((question) => question.year === year && question.paper === paper); const source = coverage.sources.find((item) => item.year === year && item.paper === paper); return <section key={paper}><div className="mb-3"><p className="text-xs font-mono text-(--color-teal-700)">Paper {paper}</p><h4 className="font-bold leading-6 text-(--color-ink-900)">{paperNames[paper]}</h4><div className="mt-2 flex gap-3 text-xs font-bold"><a href={source?.sourceUrl} target="_blank" rel="noreferrer" className="text-(--color-teal-700) hover:underline">官方題本 ↗</a><a href={source?.answerUrl} target="_blank" rel="noreferrer" className="text-(--color-teal-700) hover:underline">標準答案 ↗</a></div></div><details className="rounded-lg border border-(--color-concrete-300)"><summary className="cursor-pointer list-none px-4 py-3 text-sm font-bold text-(--color-ink-900)">展開 40 題逐題對照</summary><ol className="max-h-[34rem] divide-y divide-(--color-concrete-300) overflow-y-auto border-t border-(--color-concrete-300)">{questions.map((question) => <li key={question.id} className="grid grid-cols-[3.5rem_3.5rem_1fr_auto] items-center gap-2 px-3 py-2.5 text-xs"><span className="font-mono text-(--color-ink-650)">第 {question.questionNo} 題</span><strong className="rounded bg-(--color-paper-50) px-2 py-1 text-center text-(--color-ink-900)">{question.answer}</strong><span className="truncate text-(--color-ink-650)" title={question.topic}>{subjectNames[question.subject]} · {question.topic}</span><a href={learningHref(question.lessonRoute)} className="font-bold text-(--color-teal-700) hover:underline">去複習 →</a></li>)}</ol></details></section>; })}</div>
      </article>)}
    </section>
  </main>;
}
