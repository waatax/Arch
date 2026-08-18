'use client';
/* eslint-disable @next/next/no-img-element */
import { Fragment, useEffect, useMemo, useRef, useState } from 'react';
import type { VisualFigureData } from '../data/types';
import ChartRenderer from './ChartRenderer';
import TableRenderer from './TableRenderer';
import MathText from './MathText';
import { isAnswerChoiceCorrect, isAnswerCorrect, isMultipleChoiceAnswer, toggleSelectedChoice } from '../lib/examAnswers';
import { Flag, Play, Pause, RotateCcw, Clock, CheckCircle, AlertCircle, BookOpen, PenTool } from 'lucide-react';
import ScratchpadCanvas from './pedagogy/ScratchpadCanvas';

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
  corruptedOcr?: boolean;
  figureImage?: string | null;
  visualData?: VisualFigureData;
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

export interface PracticeShardDescriptor {
  exam: string;
  label: string;
  count: number;
  href: string;
}

export interface PracticeCatalog {
  version: string;
  total: number;
  years: Array<{
    year: number;
    count: number;
    shards: PracticeShardDescriptor[];
  }>;
}

interface PracticeShard {
  version: string;
  year: number;
  exam: string;
  questions: SimulationQuestion[];
}

interface SessionSnapshot {
  year: number;
  exam: string;
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

function examLabel(exam: string) {
  return examOptions.find(([value]) => value === exam)?.[1] ?? exam;
}

const examOrder = ['chinese', 'english', 'math-c', 'professional-1', 'professional-2'];

function officialOrder(a: SimulationQuestion, b: SimulationQuestion) {
  return examOrder.indexOf(a.exam) - examOrder.indexOf(b.exam) || a.questionNo - b.questionNo;
}

function formatDuration(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
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

export default function ExamSimulator({ catalog }: { catalog: PracticeCatalog }) {
  const [year, setYear] = useState(catalog.years[0]?.year ?? 115);
  const [exam, setExam] = useState('all');
  const [count, setCount] = useState('20');
  const [session, setSession] = useState<SimulationQuestion[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [flagged, setFlagged] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [filterResult, setFilterResult] = useState<'all' | 'wrong' | 'correct' | 'flagged'>('all');
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [sessionSnapshot, setSessionSnapshot] = useState<SessionSnapshot | null>(null);
  
  // Timer state
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  
  // Scratchpad state
  const [isCanvasOpen, setIsCanvasOpen] = useState(false);

  const requestGenerationRef = useRef(0);
  const abortControllerRef = useRef<AbortController | null>(null);

  // Timer interval effect
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (timerRunning && !submitted && session.length > 0) {
      interval = setInterval(() => {
        setElapsedSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerRunning, submitted, session.length]);

  useEffect(() => () => {
    requestGenerationRef.current += 1;
    abortControllerRef.current?.abort();
    abortControllerRef.current = null;
  }, []);

  const selectedYear = catalog.years.find((entry) => entry.year === year);
  const availableCount = exam === 'all'
    ? selectedYear?.count ?? 0
    : selectedYear?.shards.find((shard) => shard.exam === exam)?.count ?? 0;
  const answeredCount = Object.keys(answers).filter((id) => session.some((question) => question.id === id)).length;
  const flaggedCount = Object.keys(flagged).filter((id) => flagged[id] && session.some((q) => q.id === id)).length;
  const allAnswered = session.length > 0 && answeredCount === session.length;
  const score = useMemo(() => session.filter((question) => answers[question.id] && isAnswerCorrect(question.answer, answers[question.id])).length, [session, answers]);

  const displayedSession = useMemo(() => {
    if (!submitted) {
      if (filterResult === 'flagged') {
        return session.filter((q) => flagged[q.id]);
      }
      return session;
    }
    if (filterResult === 'all') return session;
    if (filterResult === 'wrong') {
      return session.filter((q) => !isAnswerCorrect(q.answer, answers[q.id]));
    }
    if (filterResult === 'correct') {
      return session.filter((q) => isAnswerCorrect(q.answer, answers[q.id]));
    }
    if (filterResult === 'flagged') {
      return session.filter((q) => flagged[q.id]);
    }
    return session;
  }, [session, submitted, filterResult, answers, flagged]);

  const scrollToTop = () => {
    const lowMemoryMode = document.documentElement.classList.contains('arch-lite');
    window.scrollTo({ top: 0, behavior: lowMemoryMode ? 'auto' : 'smooth' });
  };

  const toggleFlag = (id: string) => {
    setFlagged((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const start = async () => {
    if (!selectedYear || loading) return;
    const requestGeneration = requestGenerationRef.current + 1;
    requestGenerationRef.current = requestGeneration;
    abortControllerRef.current?.abort();
    const abortController = typeof AbortController === 'undefined' ? null : new AbortController();
    abortControllerRef.current = abortController;
    const requestedYear = year;
    const requestedExam = exam;
    const requestedCount = count;
    setLoading(true);
    setLoadError(null);
    try {
      const selectedShards = selectedYear.shards.filter(
        (shard) => requestedExam === 'all' || shard.exam === requestedExam,
      );
      const loadShard = async (shard: PracticeShardDescriptor) => {
        const response = await fetch(`${basePath}${shard.href}?v=${encodeURIComponent(catalog.version)}`, {
          cache: 'force-cache',
          signal: abortController?.signal,
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const payload = await response.json() as PracticeShard;
        if (
          payload.version !== catalog.version
          || payload.year !== requestedYear
          || payload.exam !== shard.exam
          || !Array.isArray(payload.questions)
        ) {
          throw new Error('Invalid practice shard');
        }
        return payload.questions;
      };
      const payloads: SimulationQuestion[][] = [];
      if (document.documentElement.classList.contains('arch-lite')) {
        // Keep only one parsed response in flight on constrained WebViews.
        for (const shard of selectedShards) payloads.push(await loadShard(shard));
      } else {
        payloads.push(...await Promise.all(selectedShards.map(loadShard)));
      }
      if (requestGeneration !== requestGenerationRef.current || abortController?.signal.aborted) return;
      const pool = payloads.flat();
      const amount = requestedCount === 'all' ? pool.length : Number(requestedCount);
      setSession(requestedCount === 'all' ? pool.sort(officialOrder) : sampleWholeGroups(pool, amount));
      setSessionSnapshot({ year: requestedYear, exam: requestedExam });
      setAnswers({});
      setFlagged({});
      setSubmitted(false);
      setFilterResult('all');
      setElapsedSeconds(0);
      setTimerRunning(true);
      scrollToTop();
    } catch (error) {
      if (
        requestGeneration !== requestGenerationRef.current
        || abortController?.signal.aborted
        || (error as { name?: string })?.name === 'AbortError'
      ) return;
      setLoadError('題庫載入失敗，請確認網路後再試一次。已載入過的試卷仍可離線使用。');
    } finally {
      if (requestGeneration === requestGenerationRef.current) {
        abortControllerRef.current = null;
        setLoading(false);
      }
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setTimerRunning(false);
    
    // Save mistakes to local storage
    try {
      const wrongQuestions = session.filter((q) => !isAnswerCorrect(q.answer, answers[q.id]));
      if (wrongQuestions.length > 0) {
        const saved = typeof window !== 'undefined' ? localStorage.getItem('arch_mistakes_vault_v7') : null;
        const currentList: SimulationQuestion[] = saved ? JSON.parse(saved) : [];
        const combined = [...wrongQuestions, ...currentList.filter((c) => !wrongQuestions.some((w) => w.id === c.id))].slice(0, 100);
        localStorage.setItem('arch_mistakes_vault_v7', JSON.stringify(combined));
      }
    } catch {
      // ignore
    }

    scrollToTop();
  };

  const reset = () => {
    setSession([]);
    setSessionSnapshot(null);
    setAnswers({});
    setFlagged({});
    setSubmitted(false);
    setFilterResult('all');
    setElapsedSeconds(0);
    setTimerRunning(false);
    scrollToTop();
  };

  if (!session.length) return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8 dark:border-slate-800 dark:bg-slate-900" aria-labelledby="setup-title" aria-busy={loading}>
      <div className="max-w-2xl">
        <p className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">All-subject simulation</p>
        <h2 id="setup-title" className="mt-1 font-serif text-3xl font-bold text-slate-900 dark:text-white">建立全科目模擬試卷</h2>
        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
          收錄 111–115 年歷屆五科共 925 題。支援全真計時器、標記待核對、錯題自動收錄與解析導航。
        </p>
      </div>

      <div className="mt-7 grid gap-5 sm:grid-cols-3">
        <label className="text-sm font-bold text-slate-900 dark:text-slate-200">
          學年度
          <select value={year} disabled={loading} onChange={(event) => setYear(Number(event.target.value))} className="mt-2 min-h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 font-normal disabled:cursor-wait disabled:opacity-60 dark:border-slate-700 dark:bg-slate-800">
            {catalog.years.map(({ year: value }) => <option key={value} value={value}>{value} 學年度</option>)}
          </select>
        </label>
        <label className="text-sm font-bold text-slate-900 dark:text-slate-200">
          考科
          <select value={exam} disabled={loading} onChange={(event) => { setExam(event.target.value); setCount('20'); }} className="mt-2 min-h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 font-normal disabled:cursor-wait disabled:opacity-60 dark:border-slate-700 dark:bg-slate-800">
            {examOptions.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
          </select>
        </label>
        <label className="text-sm font-bold text-slate-900 dark:text-slate-200">
          題數
          <select value={count} disabled={loading} onChange={(event) => setCount(event.target.value)} className="mt-2 min-h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 font-normal disabled:cursor-wait disabled:opacity-60 dark:border-slate-700 dark:bg-slate-800">
            <option value="5">5 題快速檢測</option>
            <option value="10">10 題精準衝刺</option>
            <option value="20">20 題標準練習</option>
            {exam === 'all' ? <option value="50">50 題五科綜合</option> : null}
            <option value="all">完整{exam === 'all' ? '五科' : '考科'}（{availableCount} 題）</option>
          </select>
        </label>
      </div>

      <div className="mt-5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 px-4 py-3 text-xs leading-6 text-amber-800 dark:text-amber-300 flex items-center gap-2">
        <Clock className="size-4 shrink-0 text-amber-600 dark:text-amber-400" />
        <span>點擊下方按鈕後將自動啟動作答計時器。完成全部題目並提交前不顯示正解，模擬全真考試環境。</span>
      </div>

      {loadError ? <p role="alert" className="mt-5 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-bold text-rose-700 dark:border-rose-900/50 dark:bg-rose-950/40 dark:text-rose-300">{loadError}</p> : null}
      
      <button 
        type="button" 
        onClick={start} 
        disabled={loading || availableCount === 0} 
        className="btn-tactile mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3 font-bold text-white shadow-sm hover:bg-blue-700 disabled:cursor-wait disabled:opacity-60 cursor-pointer"
      >
        <Play className="size-4 fill-current" />
        {loading ? '正在載入試卷分片…' : '開始全真模考'}
      </button>
    </section>
  );

  return (
    <div className="space-y-6">
      {/* Sticky Progress & Timer Bar */}
      <aside className="sticky top-16 z-40 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200/80 bg-white/95 px-4 py-3 shadow-md backdrop-blur dark:border-slate-800 dark:bg-slate-900/95" aria-live="polite">
        <div className="flex items-center gap-4">
          <div>
            <p className="text-xs font-mono text-blue-600 dark:text-blue-400 font-bold">
              {sessionSnapshot?.year ?? year} 學年度 · {examLabel(sessionSnapshot?.exam ?? exam)}
            </p>
            <p className="text-sm font-bold text-slate-900 dark:text-white">
              {submitted ? `作答成績：${score} / ${session.length} 題` : `作答進度：${answeredCount} / ${session.length} 題`}
            </p>
          </div>

          {/* Timer Display */}
          <div className="flex items-center gap-2 border-l border-slate-200 dark:border-slate-700 pl-4">
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 px-3 py-1 font-mono text-xs font-bold text-slate-700 dark:text-slate-300">
              <Clock className="size-3.5 text-blue-600 dark:text-blue-400" />
              {formatDuration(elapsedSeconds)}
            </span>
            {!submitted && (
              <button
                type="button"
                onClick={() => setTimerRunning(!timerRunning)}
                className="p-1 rounded-md text-slate-500 hover:text-slate-900 dark:hover:text-white cursor-pointer"
                title={timerRunning ? '暫停計時' : '繼續計時'}
                aria-label={timerRunning ? '暫停計時' : '繼續計時'}
              >
                {timerRunning ? <Pause className="size-3.5" /> : <Play className="size-3.5 fill-current" />}
              </button>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          {flaggedCount > 0 && !submitted && (
            <button
              type="button"
              onClick={() => setFilterResult(filterResult === 'flagged' ? 'all' : 'flagged')}
              className={`rounded-lg px-3 py-1.5 text-xs font-mono font-bold transition-colors cursor-pointer inline-flex items-center gap-1 ${
                filterResult === 'flagged'
                  ? 'bg-amber-600 text-white'
                  : 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800'
              }`}
            >
              <Flag className="size-3 fill-current" />
              待核對 ({flaggedCount})
            </button>
          )}

          <a 
            href={`${basePath}/cheatsheets`} 
            target="_blank" 
            rel="noreferrer" 
            className="hidden sm:inline-flex rounded-lg bg-slate-100 dark:bg-slate-800 px-3 py-1.5 text-xs font-mono font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-200 transition-colors"
          >
            ⚡ 考點速查卡 ↗
          </a>
          
          <button 
            type="button" 
            onClick={() => setIsCanvasOpen(true)} 
            className="rounded-lg border border-slate-200 dark:border-slate-700 px-3.5 py-1.5 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer inline-flex items-center gap-1"
          >
            <PenTool className="size-3" />
            工程草稿紙
          </button>
          <button 
            type="button" 
            onClick={reset} 
            className="rounded-lg border border-slate-200 dark:border-slate-700 px-3.5 py-1.5 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer inline-flex items-center gap-1"
          >
            <RotateCcw className="size-3" />
            結束
          </button>
        </div>
      </aside>

      {/* Result Overview Box */}
      {submitted && (
        <section className="rounded-3xl border border-blue-200 dark:border-blue-900 bg-blue-50/60 dark:bg-blue-950/40 p-6 sm:p-8 space-y-4 shadow-sm" aria-labelledby="result-title">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 dark:bg-blue-900/80 px-3 py-1 text-xs font-mono font-bold text-blue-700 dark:text-blue-300">
                <CheckCircle className="size-3.5" />
                作答完成 · 測驗結果報告
              </div>
              <h2 id="result-title" className="mt-2 font-serif text-3xl font-bold text-slate-900 dark:text-white">
                答對題數：{score} / {session.length} 題
              </h2>
              <div className="mt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600 dark:text-slate-400">
                <span>答對率：<strong className="text-blue-600 dark:text-blue-400 font-bold">{Math.round((score / session.length) * 100)}%</strong></span>
                <span>總耗時：<strong className="text-slate-900 dark:text-white">{formatDuration(elapsedSeconds)}</strong></span>
                <span>平均每題：<strong className="text-slate-900 dark:text-white">{Math.round(elapsedSeconds / Math.max(1, session.length))} 秒</strong></span>
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-1.5 text-xs font-mono font-bold">
              <button
                type="button"
                onClick={() => setFilterResult('all')}
                className={`rounded-xl px-3 py-1.5 transition-colors cursor-pointer ${
                  filterResult === 'all' ? 'bg-blue-600 text-white' : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                全部 ({session.length})
              </button>
              <button
                type="button"
                onClick={() => setFilterResult('wrong')}
                className={`rounded-xl px-3 py-1.5 transition-colors cursor-pointer ${
                  filterResult === 'wrong' ? 'bg-rose-600 text-white' : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                錯題 ({session.length - score})
              </button>
              <button
                type="button"
                onClick={() => setFilterResult('correct')}
                className={`rounded-xl px-3 py-1.5 transition-colors cursor-pointer ${
                  filterResult === 'correct' ? 'bg-emerald-600 text-white' : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                答對 ({score})
              </button>
              {flaggedCount > 0 && (
                <button
                  type="button"
                  onClick={() => setFilterResult('flagged')}
                  className={`rounded-xl px-3 py-1.5 transition-colors cursor-pointer ${
                    filterResult === 'flagged' ? 'bg-amber-600 text-white' : 'text-slate-600 dark:text-slate-400'
                  }`}
                >
                  已標記 ({flaggedCount})
                </button>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Question List */}
      <ol className="space-y-6">
        {displayedSession.map((question, index) => {
          const selected = answers[question.id];
          const isCorrect = submitted && isAnswerCorrect(question.answer, selected);
          const multiple = isMultipleChoiceAnswer(question.answer);
          const isFlagged = flagged[question.id];
          const startsGroup = Boolean(question.groupId && displayedSession[index - 1]?.groupId !== question.groupId);

          return (
            <Fragment key={question.id}>
              {startsGroup && (
                <li className="lesson-deferred-section rounded-3xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/40 dark:bg-blue-950/20 p-6 sm:p-8 space-y-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">
                    Passage · 題組 {question.groupId?.split('-g').at(-1)}
                  </span>
                  <h2 className="font-serif text-xl font-bold leading-8 text-slate-900 dark:text-white">
                    <MathText content={question.groupTitle} />
                  </h2>
                  <div className="whitespace-pre-line rounded-2xl border-l-4 border-blue-600 bg-white dark:bg-slate-900 p-5 sm:p-7 text-[15px] leading-8 text-slate-900 dark:text-slate-100 shadow-xs">
                    <MathText content={question.passage} />
                  </div>
                  <p className="text-xs text-slate-500">請閱讀上方文章，再依序完成下列所有對應題目。</p>
                </li>
              )}

              <li
                id={`question-${index + 1}`}
                className={`lesson-deferred-section scroll-mt-36 rounded-3xl border bg-white dark:bg-slate-900 p-6 sm:p-7 shadow-xs transition-all space-y-5 ${
                  submitted
                    ? isCorrect
                      ? 'border-emerald-300 dark:border-emerald-800'
                      : 'border-rose-300 dark:border-rose-800'
                    : isFlagged
                    ? 'border-amber-300 dark:border-amber-700 bg-amber-50/20'
                    : 'border-slate-200 dark:border-slate-800'
                }`}
              >
                {/* Meta Header & Flag Toggle */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                      第 {index + 1} 題 · {question.subjectName} 原題第 {question.questionNo} 題
                    </span>
                    {isFlagged && (
                      <span className="rounded-md bg-amber-100 dark:bg-amber-900/60 px-2 py-0.5 text-[10px] font-mono font-bold text-amber-700 dark:text-amber-300">
                        🚩 待核對
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    {!submitted && (
                      <button
                        type="button"
                        onClick={() => toggleFlag(question.id)}
                        className={`p-1.5 rounded-lg text-xs font-mono font-bold transition-colors cursor-pointer inline-flex items-center gap-1 ${
                          isFlagged
                            ? 'bg-amber-100 dark:bg-amber-900/60 text-amber-700 dark:text-amber-300'
                            : 'text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
                        }`}
                        title={isFlagged ? '取消標記' : '標記本題為待核對'}
                        aria-label={`標記第 ${index + 1} 題`}
                      >
                        <Flag className="size-3.5" />
                        <span className="hidden sm:inline">{isFlagged ? '已標記' : '標記'}</span>
                      </button>
                    )}

                    {question.sourceUrl ? (
                      <a
                        href={question.sourceUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1 text-[11px] font-mono text-slate-600 dark:text-slate-400 hover:bg-blue-600 hover:text-white transition-colors"
                        title="開啟官方 PDF 原卷"
                      >
                        {question.sourceLabel} ↗
                      </a>
                    ) : (
                      <span className="rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1 text-[11px] font-mono text-slate-600 dark:text-slate-400">
                        {question.sourceLabel}
                      </span>
                    )}
                  </div>
                </div>

                {/* Excerpt */}
                {!question.corruptedOcr && (
                  <h2 className="whitespace-pre-line text-base font-bold leading-8 text-slate-900 dark:text-white">
                    <MathText content={question.excerpt} />
                  </h2>
                )}

                {question.corruptedOcr && (
                  <div className="rounded-xl border border-amber-200 dark:border-amber-900/50 bg-amber-50 dark:bg-amber-950/40 p-4 text-xs font-bold text-amber-800 dark:text-amber-300 flex items-center gap-2">
                    <AlertCircle className="size-4 shrink-0" />
                    原題含有複雜符號與幾何圖形，已自動展開官方高清圖面以供精確作答。
                  </div>
                )}

                {/* Visual figure / Table / Chart */}
                {question.visualData?.table && <TableRenderer data={question.visualData.table} />}
                {question.visualData?.chart && <ChartRenderer data={question.visualData.chart} />}
                {question.figureImage && (
                  <figure className="mt-4 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-2 sm:p-4">
                    <a href={assetHref(question.figureImage)} target="_blank" rel="noreferrer" title="在新分頁放大本題圖面">
                      <img
                        src={assetHref(question.figureImage)}
                        alt={`${question.sourceLabel}第 ${question.questionNo} 題單題圖面`}
                        loading="lazy"
                        decoding="async"
                        className="mx-auto h-auto max-h-[42rem] max-w-full rounded-lg"
                      />
                    </a>
                    <figcaption className="mt-2 flex flex-wrap items-center justify-between gap-2 px-1 text-[11px] text-slate-500">
                      <span>官方圖表／公式 · 僅裁切原題第 {question.questionNo} 題</span>
                      <a href={assetHref(question.figureImage)} target="_blank" rel="noreferrer" className="font-bold text-blue-600 dark:text-blue-400">
                        放大本題圖面 ↗
                      </a>
                    </figcaption>
                  </figure>
                )}

                {/* Options */}
                <fieldset className="mt-4 grid gap-3 sm:grid-cols-2" disabled={submitted}>
                  <legend className={multiple ? 'mb-2 text-sm font-bold text-slate-600 dark:text-slate-300 sm:col-span-2' : 'sr-only'}>
                    {multiple ? `第 ${index + 1} 題為多選題，請選出所有正確選項` : `第 ${index + 1} 題選項`}
                  </legend>
                  {choices.map((choice) => {
                    const active = selected?.includes(choice) ?? false;
                    const answerChoice = submitted && isAnswerChoiceCorrect(question.answer, choice);
                    const wrongChoice = submitted && active && !answerChoice;

                    return (
                      <label
                        key={choice}
                        className={`flex min-h-12 cursor-pointer items-start gap-3 rounded-2xl border p-4 text-sm leading-6 transition-all ${
                          answerChoice
                            ? 'border-emerald-500 bg-emerald-50/80 dark:bg-emerald-950/40 text-emerald-950 dark:text-emerald-200 font-bold'
                            : wrongChoice
                            ? 'border-rose-500 bg-rose-50/80 dark:bg-rose-950/40 text-rose-950 dark:text-rose-200'
                            : active
                            ? 'border-blue-600 bg-blue-50/60 dark:bg-blue-950/40 text-slate-900 dark:text-white font-medium ring-1 ring-blue-500/20'
                            : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800/80'
                        }`}
                      >
                        <input
                          type={multiple ? 'checkbox' : 'radio'}
                          name={question.id}
                          value={choice}
                          checked={active}
                          onChange={() =>
                            setAnswers((value) => ({
                              ...value,
                              [question.id]: multiple ? toggleSelectedChoice(value[question.id], choice) : choice,
                            }))
                          }
                          className="mt-1 accent-blue-600"
                        />
                        <strong className="font-mono text-slate-900 dark:text-white shrink-0">{choice}</strong>
                        {!question.corruptedOcr && question.options[choice] ? (
                          <MathText className="text-slate-700 dark:text-slate-300" content={question.options[choice]} />
                        ) : (
                          <span className="text-slate-500">原題選項 {choice}</span>
                        )}
                      </label>
                    );
                  })}
                </fieldset>

                {/* Submitted Analysis */}
                {submitted && (
                  <div className="mt-5 border-t border-slate-100 dark:border-slate-800 pt-5 space-y-3">
                    <div className="flex items-center gap-2">
                      {isCorrect ? (
                        <span className="inline-flex items-center gap-1 text-sm font-bold text-emerald-600 dark:text-emerald-400">
                          <CheckCircle className="size-4" />
                          答對！官方正解：{question.answer}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-sm font-bold text-rose-600 dark:text-rose-400">
                          <AlertCircle className="size-4" />
                          答錯；你的作答：{selected || '未填'}，官方正解：{question.answer}
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-mono text-slate-500">
                      考科歸屬／知識點：{question.subjectName} · {question.topic}
                    </p>
                    {question.lessonRoute && (
                      <a
                        href={localHref(question.lessonRoute)}
                        className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 px-4 py-2 text-xs font-bold text-white transition-colors cursor-pointer"
                      >
                        <BookOpen className="size-3.5" />
                        前往該章節深入學習 →
                      </a>
                    )}
                  </div>
                )}
              </li>
            </Fragment>
          );
        })}
      </ol>

      {/* Action Footer */}
      {!submitted ? (
        <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 text-center shadow-xs space-y-3">
          <p className="text-sm font-mono text-slate-600 dark:text-slate-400">
            {allAnswered
              ? '✨ 全部題目已作答完成，可以立即交卷查看詳細解析。'
              : `尚有 ${session.length - answeredCount} 題未填答，請完成全部題目後交卷。`}
          </p>
          <button
            type="button"
            disabled={!allAnswered}
            onClick={handleSubmit}
            className="btn-tactile inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-blue-600 px-8 font-bold text-white shadow-sm hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer text-sm"
          >
            <CheckCircle className="size-4" />
            交卷並查看完整解析
          </button>
        </section>
      ) : (
        <button
          type="button"
          onClick={reset}
          className="btn-tactile min-h-12 w-full rounded-2xl bg-slate-950 dark:bg-white text-white dark:text-slate-950 px-7 font-bold transition-opacity hover:opacity-90 cursor-pointer text-sm"
        >
          開始下一回全真模擬練習
        </button>
      )}
      <ScratchpadCanvas isOpen={isCanvasOpen} onClose={() => setIsCanvasOpen(false)} />
    </div>
  );
}
