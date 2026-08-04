'use client';
/* eslint-disable @next/next/no-img-element */

import { Fragment, useMemo, useState } from 'react';

export interface SimulationQuestion {
  id: string;
  year: number;
  exam: string;
  subjectName: string;
  questionNo: number;
  answer: string;
  excerpt: string;
  options: Record<'A' | 'B' | 'C' | 'D', string>;
  requiresOfficialFigure: boolean;
  figureImage?: string | null;
  originalPage?: number;
  groupId?: string | null;
  groupTitle?: string | null;
  passage?: string | null;
  sourceLabel: string;
  lessonRoute?: string | null;
  sourceUrl: string;
  subject: string;
  topic: string;
}

const choices = ['A', 'B', 'C', 'D'] as const;
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const examOptions = [
  ['all', '全科目（五科）'],
  ['chinese', '國文'],
  ['english', '英文'],
  ['math-c', '數學(C)'],
  ['professional-1', '專業科目（一）'],
  ['professional-2', '專業科目（二）'],
] as const;

function localHref(route: string) {
  return `${basePath}${route.replace(/\/$/, '')}/`;
}

function assetHref(route: string) {
  return `${basePath}${route}`;
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

function examLabel(exam: string) {
  return examOptions.find(([value]) => value === exam)?.[1] ?? exam;
}

const examOrder = ['chinese', 'english', 'math-c', 'professional-1', 'professional-2'];

function officialOrder(a: SimulationQuestion, b: SimulationQuestion) {
  return examOrder.indexOf(a.exam) - examOrder.indexOf(b.exam) || a.questionNo - b.questionNo;
}

function sampleWholeGroups(pool: SimulationQuestion[], amount: number) {
  const units = new Map<string, SimulationQuestion[]>();
  for (const question of pool) {
    const key = question.groupId ?? question.id;
    units.set(key, [...(units.get(key) ?? []), question]);
  }
  const selected: SimulationQuestion[] = [];
  for (const unit of shuffled([...units.values()])) {
    selected.push(...unit);
    if (selected.length >= amount) break;
  }
  return selected.sort(officialOrder);
}

export default function ExamSimulator({ questions }: { questions: SimulationQuestion[] }) {
  const [year, setYear] = useState(115);
  const [exam, setExam] = useState('all');
  const [count, setCount] = useState('20');
  const [session, setSession] = useState<SimulationQuestion[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const availableCount = questions.filter((question) => question.year === year && (exam === 'all' || question.exam === exam)).length;
  const answeredCount = Object.keys(answers).filter((id) => session.some((question) => question.id === id)).length;
  const allAnswered = session.length > 0 && answeredCount === session.length;
  const score = useMemo(() => session.filter((question) => answers[question.id] && isCorrect(question.answer, answers[question.id])).length, [session, answers]);

  const start = () => {
    const pool = questions.filter((question) => question.year === year && (exam === 'all' || question.exam === exam));
    const amount = count === 'all' ? pool.length : Number(count);
    setSession(count === 'all' ? [...pool].sort(officialOrder) : sampleWholeGroups(pool, amount));
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
    <div className="max-w-2xl"><p className="text-xs font-mono uppercase tracking-widest text-(--color-teal-700)">All-subject simulation</p><h2 id="setup-title" className="mt-1 font-serif text-3xl font-bold text-(--color-ink-900)">建立全科目模擬試卷</h2><p className="mt-3 text-sm leading-7 text-(--color-ink-650)">可練習國文、英文、數學(C)、專業科目（一）與（二），或一次混合五科。全部作答並提交之前，不顯示答案與解析。</p></div>
    <div className="mt-7 grid gap-5 sm:grid-cols-3">
      <label className="text-sm font-bold text-(--color-ink-900)">學年度<select value={year} onChange={(event) => setYear(Number(event.target.value))} className="mt-2 min-h-12 w-full rounded-lg border border-(--color-concrete-300) bg-(--color-paper-50) px-3 font-normal">{[115, 114, 113, 112, 111].map((value) => <option key={value} value={value}>{value} 年</option>)}</select></label>
      <label className="text-sm font-bold text-(--color-ink-900)">考科<select value={exam} onChange={(event) => { setExam(event.target.value); setCount('20'); }} className="mt-2 min-h-12 w-full rounded-lg border border-(--color-concrete-300) bg-(--color-paper-50) px-3 font-normal">{examOptions.map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></label>
      <label className="text-sm font-bold text-(--color-ink-900)">題數<select value={count} onChange={(event) => setCount(event.target.value)} className="mt-2 min-h-12 w-full rounded-lg border border-(--color-concrete-300) bg-(--color-paper-50) px-3 font-normal"><option value="10">10 題暖身</option><option value="20">20 題練習</option>{exam === 'all' ? <option value="50">50 題五科綜合</option> : null}<option value="all">完整{exam === 'all' ? '五科' : '考科'}（{availableCount} 題）</option></select></label>
    </div>
    <div className="mt-5 rounded-xl bg-(--color-sun-500)/10 px-4 py-3 text-xs leading-6 text-(--color-ink-650)">題幹與選項已逐題辨識為文字；英文與國文短文會以「文章一次、題目成組」呈現。只有公式、圖表或製圖會保留單題裁切圖面。</div>
    <button type="button" onClick={start} className="mt-7 min-h-12 rounded-xl bg-(--color-teal-700) px-7 py-3 font-bold text-(--color-paper-50) hover:shadow-lg">開始整份作答</button>
  </section>;

  return <div className="space-y-6">
    <aside className="sticky top-16 z-40 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-(--color-concrete-300) bg-(--color-paper-100)/95 px-4 py-3 shadow-sm backdrop-blur" aria-live="polite"><div><p className="text-xs font-mono text-(--color-teal-700)">{year} 年統測 · {examLabel(exam)}</p><p className="text-sm font-bold text-(--color-ink-900)">{submitted ? `作答結果：${score} / ${session.length}` : `作答進度：${answeredCount} / ${session.length}`}</p></div><button type="button" onClick={reset} className="min-h-10 rounded-lg border border-(--color-concrete-300) px-4 text-xs font-bold text-(--color-ink-650)">結束本回</button></aside>

    {submitted ? <section className="rounded-2xl border border-(--color-teal-700) bg-(--color-teal-700)/10 p-6 sm:p-8" aria-labelledby="result-title"><p className="text-xs font-mono uppercase tracking-widest text-(--color-teal-700)">Complete analysis</p><h2 id="result-title" className="mt-1 font-serif text-3xl font-bold text-(--color-ink-900)">整份解析：{score} / {session.length}</h2><p className="mt-3 text-sm leading-7 text-(--color-ink-650)">答對率 {Math.round(score / session.length * 100)}%。下方已一次展開全部題目的正誤與官方答案；專業科目並附對應教學。</p></section> : null}

    <ol className="space-y-6">{session.map((question, index) => { const selected = answers[question.id]; const correct = submitted && isCorrect(question.answer, selected); const startsGroup = Boolean(question.groupId && session[index - 1]?.groupId !== question.groupId); return <Fragment key={question.id}>{startsGroup ? <li className="rounded-2xl border border-(--color-blueprint-700)/30 bg-(--color-paper-50) p-5 sm:p-8"><p className="text-xs font-mono uppercase tracking-widest text-(--color-teal-700)">Passage · 題組 {question.groupId?.split('-g').at(-1)}</p><h2 className="mt-2 font-serif text-xl font-bold leading-8 text-(--color-ink-900)">{question.groupTitle}</h2><div className="mt-5 whitespace-pre-line rounded-xl border-l-4 border-(--color-teal-700) bg-white p-5 text-[15px] leading-8 text-(--color-ink-900) sm:p-7">{question.passage}</div><p className="mt-4 text-xs leading-6 text-(--color-ink-650)">請閱讀上方文章，再依序完成下列所有對應題目。</p></li> : null}<li id={`question-${index + 1}`} className={`scroll-mt-36 rounded-2xl border bg-(--color-paper-100) p-5 sm:p-7 ${submitted ? correct ? 'border-(--color-teal-700)' : 'border-(--color-brick-700)' : 'border-(--color-concrete-300)'}`}>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2"><span className="text-xs font-mono font-bold text-(--color-teal-700)">模擬第 {index + 1} 題 · {question.subjectName}原題第 {question.questionNo} 題</span><span className="rounded-full bg-(--color-paper-50) px-3 py-1 text-[11px] font-mono text-(--color-ink-650)">{question.sourceLabel}</span></div>
      <h2 className="whitespace-pre-line text-base font-bold leading-8 text-(--color-ink-900)">{question.excerpt}</h2>
      {question.figureImage ? <figure className="mt-4 overflow-hidden rounded-xl border border-(--color-concrete-300) bg-white p-2 sm:p-4"><a href={assetHref(question.figureImage)} target="_blank" rel="noreferrer" title="在新分頁放大本題圖面"><img src={assetHref(question.figureImage)} alt={`${question.sourceLabel}第 ${question.questionNo} 題單題圖面`} loading="lazy" className="mx-auto h-auto max-h-[42rem] max-w-full" /></a><figcaption className="mt-2 flex flex-wrap items-center justify-between gap-2 px-1 text-[11px] text-(--color-ink-650)"><span>官方圖表／公式 · 僅裁切原題第 {question.questionNo} 題</span><a href={assetHref(question.figureImage)} target="_blank" rel="noreferrer" className="font-bold text-(--color-teal-700)">放大本題圖面 ↗</a></figcaption></figure> : null}
      <fieldset className="mt-5 grid gap-3 sm:grid-cols-2" disabled={submitted}><legend className="sr-only">第 {index + 1} 題選項</legend>{choices.map((choice) => { const active = selected === choice; const answerChoice = submitted && isCorrect(question.answer, choice); const wrongChoice = submitted && active && !answerChoice; return <label key={choice} className={`flex min-h-12 cursor-pointer items-start gap-3 rounded-xl border p-4 text-sm leading-6 ${answerChoice ? 'border-(--color-teal-700) bg-(--color-teal-700)/10' : wrongChoice ? 'border-(--color-brick-700) bg-(--color-brick-700)/10' : active ? 'border-(--color-blueprint-700) bg-(--color-paper-50)' : 'border-(--color-concrete-300)'}`}><input type="radio" name={question.id} value={choice} checked={active} onChange={() => setAnswers((value) => ({ ...value, [question.id]: choice }))} className="mt-1" /><strong className="font-mono text-(--color-ink-900)">{choice}</strong>{question.options[choice] ? <span className="text-(--color-ink-650)">{question.options[choice]}</span> : <span className="text-(--color-ink-650)">選項 {choice}</span>}</label>; })}</fieldset>
      {submitted ? <div className="mt-5 border-t border-(--color-concrete-300) pt-5"><p className="font-bold text-(--color-ink-900)">{correct ? `答對；官方答案：${question.answer}` : `答錯；你的答案：${selected}，官方答案：${question.answer}`}</p><p className="mt-2 text-sm text-(--color-ink-650)">考科／考點：{question.subjectName} · {question.topic}</p>{question.lessonRoute ? <a href={localHref(question.lessonRoute)} className="mt-3 inline-flex min-h-11 items-center rounded-lg bg-(--color-teal-700) px-4 text-sm font-bold text-(--color-paper-50)">開啟對應教學 →</a> : <p className="mt-3 text-xs leading-6 text-(--color-ink-650)">本題文字與選項已逐題辨識，答案依官方標準答案校對。</p>}</div> : null}
    </li></Fragment>; })}</ol>

    {!submitted ? <section className="rounded-2xl border border-(--color-concrete-300) bg-(--color-paper-100) p-5 text-center sm:p-7"><p className="text-sm text-(--color-ink-650)">{allAnswered ? '所有題目均已作答，可以一次提交並查看完整解析。' : `尚有 ${session.length - answeredCount} 題未作答，完成全部題目後才能提交。`}</p><button type="button" disabled={!allAnswered} onClick={() => { setSubmitted(true); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="mt-4 min-h-12 rounded-xl bg-(--color-teal-700) px-7 font-bold text-(--color-paper-50) disabled:cursor-not-allowed disabled:opacity-40">提交整份試卷並查看解析</button></section> : <button type="button" onClick={reset} className="min-h-12 w-full rounded-xl bg-(--color-ink-900) px-7 font-bold text-(--color-paper-50)">建立下一回模擬練習</button>}
  </div>;
}
