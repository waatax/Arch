'use client';

import { useMemo, useState } from 'react';

export interface SimulationQuestion {
  id: string;
  year: number;
  paper: number;
  questionNo: number;
  answer: string;
  excerpt: string;
  options: Record<'A' | 'B' | 'C' | 'D', string>;
  requiresOfficialFigure: boolean;
  sourceLabel: string;
  lessonRoute: string;
  sourceUrl: string;
  subject: string;
  topic: string;
}

const choices = ['A', 'B', 'C', 'D'] as const;
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

function learningHref(route: string) {
  return `${basePath}${route.replace(/\/$/, '')}/`;
}

function shuffled<T>(values: T[]) {
  const copy = [...values];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function isCorrect(answer: string, selected: string) {
  return answer === '送分' || answer.includes(selected);
}

export default function ExamSimulator({ questions }: { questions: SimulationQuestion[] }) {
  const [year, setYear] = useState(115);
  const [paper, setPaper] = useState(1);
  const [count, setCount] = useState(10);
  const [session, setSession] = useState<SimulationQuestion[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const answeredCount = Object.keys(answers).filter((id) => session.some((question) => question.id === id)).length;
  const allAnswered = session.length > 0 && answeredCount === session.length;
  const score = useMemo(() => session.filter((question) => answers[question.id] && isCorrect(question.answer, answers[question.id])).length, [session, answers]);

  const start = () => {
    const pool = questions.filter((question) => question.year === year && question.paper === paper);
    setSession(count === 40 ? pool : shuffled(pool).slice(0, count));
    setAnswers({});
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const reset = () => {
    setSession([]);
    setAnswers({});
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!session.length) return <section className="rounded-2xl border border-(--color-concrete-300) bg-(--color-paper-100) p-5 shadow-sm sm:p-8" aria-labelledby="setup-title">
    <div className="max-w-2xl"><p className="text-xs font-mono uppercase tracking-widest text-(--color-teal-700)">Simulation setup</p><h2 id="setup-title" className="mt-1 font-serif text-3xl font-bold text-(--color-ink-900)">建立完整模擬試卷</h2><p className="mt-3 text-sm leading-7 text-(--color-ink-650)">開始後一次完成整回題目。全部作答並提交之前，不會顯示答案或解析。</p></div>
    <div className="mt-7 grid gap-5 sm:grid-cols-3"><label className="text-sm font-bold text-(--color-ink-900)">學年度<select value={year} onChange={(event) => setYear(Number(event.target.value))} className="mt-2 min-h-12 w-full rounded-lg border border-(--color-concrete-300) bg-(--color-paper-50) px-3 font-normal">{[115, 114, 113, 112, 111].map((value) => <option key={value} value={value}>{value} 年</option>)}</select></label><label className="text-sm font-bold text-(--color-ink-900)">考科<select value={paper} onChange={(event) => setPaper(Number(event.target.value))} className="mt-2 min-h-12 w-full rounded-lg border border-(--color-concrete-300) bg-(--color-paper-50) px-3 font-normal"><option value={1}>專業科目（一）</option><option value={2}>專業科目（二）</option></select></label><label className="text-sm font-bold text-(--color-ink-900)">題數<select value={count} onChange={(event) => setCount(Number(event.target.value))} className="mt-2 min-h-12 w-full rounded-lg border border-(--color-concrete-300) bg-(--color-paper-50) px-3 font-normal"><option value={10}>10 題練習</option><option value={20}>20 題半回</option><option value={40}>40 題完整試卷</option></select></label></div>
    <button type="button" onClick={start} className="mt-7 min-h-12 rounded-xl bg-(--color-teal-700) px-7 py-3 font-bold text-(--color-paper-50) hover:shadow-lg">開始整回作答</button>
  </section>;

  return <div className="space-y-6">
    <aside className="sticky top-16 z-40 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-(--color-concrete-300) bg-(--color-paper-100)/95 px-4 py-3 shadow-sm backdrop-blur" aria-live="polite"><div><p className="text-xs font-mono text-(--color-teal-700)">{year} 年統測試題 · 專業科目（{paper === 1 ? '一' : '二'}）</p><p className="text-sm font-bold text-(--color-ink-900)">{submitted ? `作答結果：${score} / ${session.length}` : `作答進度：${answeredCount} / ${session.length}`}</p></div><button type="button" onClick={reset} className="min-h-10 rounded-lg border border-(--color-concrete-300) px-4 text-xs font-bold text-(--color-ink-650)">結束本回</button></aside>

    {submitted ? <section className="rounded-2xl border border-(--color-teal-700) bg-(--color-teal-700)/10 p-6 sm:p-8" aria-labelledby="result-title"><p className="text-xs font-mono uppercase tracking-widest text-(--color-teal-700)">Complete analysis</p><h2 id="result-title" className="mt-1 font-serif text-3xl font-bold text-(--color-ink-900)">整回解析：{score} / {session.length}</h2><p className="mt-3 text-sm leading-7 text-(--color-ink-650)">答對率 {Math.round(score / session.length * 100)}%。下方已一次展開全部題目的正誤、官方答案與對應教學。</p></section> : null}

    <ol className="space-y-6">{session.map((question, index) => { const selected = answers[question.id]; const correct = submitted && isCorrect(question.answer, selected); return <li key={question.id} id={`question-${index + 1}`} className={`scroll-mt-36 rounded-2xl border bg-(--color-paper-100) p-5 sm:p-7 ${submitted ? correct ? 'border-(--color-teal-700)' : 'border-(--color-brick-700)' : 'border-(--color-concrete-300)'}`}>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2"><span className="text-xs font-mono font-bold text-(--color-teal-700)">模擬第 {index + 1} 題 · 原題號 {question.questionNo}</span><span className="rounded-full bg-(--color-paper-50) px-3 py-1 text-[11px] font-mono text-(--color-ink-650)">{question.sourceLabel}</span></div><h2 className="text-base font-bold leading-8 text-(--color-ink-900)">{question.excerpt}</h2>
      {question.requiresOfficialFigure ? <p className="mt-3 rounded-lg bg-(--color-sun-500)/10 p-3 text-xs leading-6 text-(--color-ink-650)">此題需配合原題圖面。<a href={question.sourceUrl} target="_blank" rel="noreferrer" className="ml-1 font-bold text-(--color-teal-700) hover:underline">開啟官方題本 ↗</a></p> : null}
      <fieldset className="mt-5 grid gap-3" disabled={submitted}><legend className="sr-only">第 {index + 1} 題選項</legend>{choices.map((choice) => { const active = selected === choice; const answerChoice = submitted && isCorrect(question.answer, choice); const wrongChoice = submitted && active && !answerChoice; return <label key={choice} className={`flex min-h-12 cursor-pointer items-start gap-3 rounded-xl border p-4 text-sm leading-6 ${answerChoice ? 'border-(--color-teal-700) bg-(--color-teal-700)/10' : wrongChoice ? 'border-(--color-brick-700) bg-(--color-brick-700)/10' : active ? 'border-(--color-blueprint-700) bg-(--color-paper-50)' : 'border-(--color-concrete-300)'}`}><input type="radio" name={question.id} value={choice} checked={active} onChange={() => setAnswers((value) => ({ ...value, [question.id]: choice }))} className="mt-1" /><strong className="font-mono text-(--color-ink-900)">{choice}</strong><span className="text-(--color-ink-650)">{question.options[choice]}</span></label>; })}</fieldset>
      {submitted ? <div className="mt-5 border-t border-(--color-concrete-300) pt-5"><p className="font-bold text-(--color-ink-900)">{correct ? '答對' : `答錯；你的答案：${selected}，官方答案：${question.answer}`}</p><p className="mt-2 text-sm text-(--color-ink-650)">對應考點：{question.topic}</p><a href={learningHref(question.lessonRoute)} className="mt-3 inline-flex min-h-11 items-center rounded-lg bg-(--color-teal-700) px-4 text-sm font-bold text-(--color-paper-50)">開啟對應教學 →</a></div> : null}
    </li>; })}</ol>

    {!submitted ? <section className="rounded-2xl border border-(--color-concrete-300) bg-(--color-paper-100) p-5 text-center sm:p-7"><p className="text-sm text-(--color-ink-650)">{allAnswered ? '所有題目均已作答，可以一次提交並查看完整解析。' : `尚有 ${session.length - answeredCount} 題未作答，完成全部題目後才能提交。`}</p><button type="button" disabled={!allAnswered} onClick={() => { setSubmitted(true); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="mt-4 min-h-12 rounded-xl bg-(--color-teal-700) px-7 font-bold text-(--color-paper-50) disabled:cursor-not-allowed disabled:opacity-40">提交整回試卷並查看解析</button></section> : <button type="button" onClick={reset} className="min-h-12 w-full rounded-xl bg-(--color-ink-900) px-7 font-bold text-(--color-paper-50)">建立下一回模擬練習</button>}
  </div>;
}
