'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';

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
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [revealed, setRevealed] = useState(false);

  const current = session[index];
  const selected = current ? answers[current.id] : undefined;
  const completed = session.length > 0 && index >= session.length;
  const score = useMemo(() => session.filter((question) => answers[question.id] && isCorrect(question.answer, answers[question.id])).length, [session, answers]);
  const mistakes = useMemo(() => session.filter((question) => answers[question.id] && !isCorrect(question.answer, answers[question.id])), [session, answers]);

  const start = () => {
    const pool = questions.filter((question) => question.year === year && question.paper === paper);
    setSession(shuffled(pool).slice(0, count));
    setIndex(0);
    setAnswers({});
    setRevealed(false);
  };

  if (!session.length) return <section className="rounded-2xl border border-(--color-concrete-300) bg-(--color-paper-100) p-5 shadow-sm sm:p-8" aria-labelledby="setup-title">
    <div className="max-w-2xl"><p className="text-xs font-mono uppercase tracking-widest text-(--color-teal-700)">Simulation setup</p><h2 id="setup-title" className="mt-1 font-serif text-3xl font-bold text-(--color-ink-900)">建立你的模擬練習</h2><p className="mt-3 text-sm leading-7 text-(--color-ink-650)">每次會從指定年度隨機抽題。題目及答案標示原統測年份；含圖題請同步開啟官方題本判讀。</p></div>
    <div className="mt-7 grid gap-5 sm:grid-cols-3">
      <label className="text-sm font-bold text-(--color-ink-900)">學年度<select value={year} onChange={(event) => setYear(Number(event.target.value))} className="mt-2 min-h-12 w-full rounded-lg border border-(--color-concrete-300) bg-(--color-paper-50) px-3 font-normal">{[115, 114, 113, 112, 111].map((value) => <option key={value} value={value}>{value} 年</option>)}</select></label>
      <label className="text-sm font-bold text-(--color-ink-900)">考科<select value={paper} onChange={(event) => setPaper(Number(event.target.value))} className="mt-2 min-h-12 w-full rounded-lg border border-(--color-concrete-300) bg-(--color-paper-50) px-3 font-normal"><option value={1}>專業科目（一）</option><option value={2}>專業科目（二）</option></select></label>
      <label className="text-sm font-bold text-(--color-ink-900)">題數<select value={count} onChange={(event) => setCount(Number(event.target.value))} className="mt-2 min-h-12 w-full rounded-lg border border-(--color-concrete-300) bg-(--color-paper-50) px-3 font-normal"><option value={10}>10 題暖身</option><option value={20}>20 題半回</option><option value={40}>40 題完整</option></select></label>
    </div>
    <button type="button" onClick={start} className="mt-7 min-h-12 rounded-xl bg-(--color-teal-700) px-7 py-3 font-bold text-(--color-paper-50) hover:shadow-lg">開始模擬練習</button>
  </section>;

  if (completed) return <section className="rounded-2xl border border-(--color-concrete-300) bg-(--color-paper-100) p-5 sm:p-8" aria-live="polite"><p className="text-xs font-mono uppercase tracking-widest text-(--color-teal-700)">Result</p><h2 className="mt-1 font-serif text-3xl font-bold text-(--color-ink-900)">本次完成：{score} / {session.length}</h2><p className="mt-3 text-sm leading-7 text-(--color-ink-650)">答對率 {Math.round(score / session.length * 100)}%。先補強錯題觀念，再重新作答會比只記答案更有效。</p>
    {mistakes.length ? <div className="mt-7"><h3 className="font-bold text-(--color-ink-900)">錯題回課</h3><ul className="mt-3 grid gap-2 sm:grid-cols-2">{mistakes.map((question) => <li key={question.id}><Link href={question.lessonRoute} className="flex items-center justify-between rounded-lg border border-(--color-concrete-300) p-3 text-sm text-(--color-ink-650) hover:border-(--color-teal-700)"><span>{question.sourceLabel} · 第 {question.questionNo} 題</span><strong className="text-(--color-teal-700)">複習 →</strong></Link></li>)}</ul></div> : <p className="mt-7 rounded-lg bg-(--color-paper-50) p-4 font-bold text-(--color-teal-700)">全部答對，可以挑戰另一年度或完整 40 題。</p>}
    <button type="button" onClick={() => setSession([])} className="mt-7 min-h-11 rounded-lg border border-(--color-concrete-300) px-5 font-bold text-(--color-ink-900)">建立下一回練習</button>
  </section>;

  return <section className="overflow-hidden rounded-2xl border border-(--color-concrete-300) bg-(--color-paper-100) shadow-sm" aria-labelledby="question-title">
    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-(--color-concrete-300) bg-(--color-paper-50) px-5 py-4 sm:px-8"><div><p className="text-xs font-mono text-(--color-teal-700)">{current.sourceLabel} · 專業科目（{current.paper === 1 ? '一' : '二'}）</p><p className="mt-1 text-sm font-bold text-(--color-ink-900)">模擬第 {index + 1} / {session.length} 題<span className="ml-2 font-normal text-(--color-ink-650)">原題號 {current.questionNo}</span></p></div><div className="text-sm text-(--color-ink-650)">目前答對 <strong className="text-(--color-teal-700)">{score}</strong> 題</div></div>
    <div className="p-5 sm:p-8"><h2 id="question-title" className="text-lg font-bold leading-8 text-(--color-ink-900)">{current.excerpt}</h2>
      {current.requiresOfficialFigure ? <div className="mt-4 rounded-lg border border-(--color-sun-500) bg-(--color-sun-500)/10 p-4 text-sm leading-6 text-(--color-ink-650)">此題需要查看原題圖面。<a href={current.sourceUrl} target="_blank" rel="noreferrer" className="ml-1 font-bold text-(--color-teal-700) hover:underline">開啟 {current.sourceLabel}官方題本 ↗</a></div> : null}
      <div className="mt-6 grid gap-3">{choices.map((choice) => { const active = selected === choice; const correct = revealed && isCorrect(current.answer, choice); const wrong = revealed && active && !correct; return <button key={choice} type="button" disabled={revealed} onClick={() => setAnswers((value) => ({ ...value, [current.id]: choice }))} className={`flex min-h-12 items-start gap-3 rounded-xl border p-4 text-left text-sm leading-6 transition ${correct ? 'border-(--color-teal-700) bg-(--color-teal-700)/10' : wrong ? 'border-(--color-brick-700) bg-(--color-brick-700)/10' : active ? 'border-(--color-teal-700) bg-(--color-paper-50)' : 'border-(--color-concrete-300) hover:border-(--color-teal-700)'}`}><strong className="font-mono text-(--color-ink-900)">{choice}</strong><span className="text-(--color-ink-650)">{current.options[choice]}</span></button>; })}</div>
      {revealed ? <div className="mt-6 rounded-xl bg-(--color-paper-50) p-5" aria-live="polite"><p className="font-bold text-(--color-ink-900)">{isCorrect(current.answer, selected ?? '') ? '答對了' : `正確答案：${current.answer}`}</p><p className="mt-2 text-sm leading-6 text-(--color-ink-650)">對應考點：{current.topic}。不要只記選項，請確認自己能說出判斷理由。</p><Link href={current.lessonRoute} className="mt-3 inline-block text-sm font-bold text-(--color-teal-700) hover:underline">開啟對應教學 →</Link></div> : null}
      <div className="mt-7 flex flex-wrap gap-3">{!revealed ? <button type="button" disabled={!selected} onClick={() => setRevealed(true)} className="min-h-12 rounded-xl bg-(--color-teal-700) px-6 font-bold text-(--color-paper-50) disabled:cursor-not-allowed disabled:opacity-40">確認答案</button> : <button type="button" onClick={() => { setIndex((value) => value + 1); setRevealed(false); }} className="min-h-12 rounded-xl bg-(--color-teal-700) px-6 font-bold text-(--color-paper-50)">{index + 1 === session.length ? '查看成績' : '下一題'}</button>}<button type="button" onClick={() => setSession([])} className="min-h-12 rounded-xl border border-(--color-concrete-300) px-5 font-bold text-(--color-ink-650)">結束本回</button></div>
    </div>
  </section>;
}
