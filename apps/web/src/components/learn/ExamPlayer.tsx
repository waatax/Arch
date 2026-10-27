'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { Check, ExternalLink, Loader2, Medal, X } from 'lucide-react';
import { clsx } from 'clsx';
import MathText from '@/components/MathText';
import { isAnswerCorrect, normalizedChoices } from '@/lib/examAnswers';
import {
  TIERS,
  certifiedTier,
  estimatePercentile,
  percentileToScore,
  tierRank,
  tierReached,
  tierThresholds,
  type ExamItemMeta,
  type ExamStandard,
  type TierId,
} from '@/lib/learn/examAlign';
import { haptic, sfx } from '@/lib/learn/sfx';
import Portal from './Portal';

interface ShardQuestion {
  id: string;
  questionNo: number;
  answer: string;
  excerpt: string;
  options: Record<'A' | 'B' | 'C' | 'D', string>;
  figureImage: string | null;
  groupTitle: string | null;
  passage: string | null;
  sourceUrl: string;
  lessonRoute: string;
}

export interface ExamFinish {
  answers: { id: string; correct: boolean }[];
  pct: number;
  thresholds: Record<TierId, number>;
  tier: TierId | null;
}

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const shardCache = new Map<string, Promise<ShardQuestion[]>>();
function loadShard(name: string) {
  if (!shardCache.has(name)) {
    shardCache.set(
      name,
      fetch(`${base}/practice-data/shards/${name}.json`)
        .then((r) => {
          if (!r.ok) throw new Error(String(r.status));
          return r.json();
        })
        .then((j: { questions: ShardQuestion[] }) => j.questions)
        .catch((e) => {
          shardCache.delete(name);
          throw e;
        }),
    );
  }
  return shardCache.get(name)!;
}

const LETTERS = ['A', 'B', 'C', 'D'] as const;

/** 統測對標檢定：以歷屆真題作答，依官方能力組答對率換算低標／中標／高標 */
export default function ExamPlayer({
  title,
  examLabel,
  items,
  standard,
  standardYear,
  counted,
  onFinish,
  onClose,
}: {
  title: string;
  examLabel: string;
  items: ExamItemMeta[];
  standard: ExamStandard;
  standardYear: number;
  counted: boolean;
  onFinish: (f: ExamFinish) => { xp: number; bricks: number; improved: boolean };
  onClose: () => void;
}) {
  const [questions, setQuestions] = useState<Record<string, ShardQuestion> | null>(null);
  const [error, setError] = useState(false);
  const [pos, setPos] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);
  const [answers, setAnswers] = useState<{ id: string; correct: boolean }[]>([]);
  const [reward, setReward] = useState<{ xp: number; bricks: number; improved: boolean } | null>(null);
  /** 收合的題組（換到下一個題組時自動展開） */
  const [collapsed, setCollapsed] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const thresholds = useMemo(() => tierThresholds(items), [items]);

  useEffect(() => {
    let alive = true;
    const shards = [...new Set(items.map((it) => it.shard))];
    Promise.all(shards.map(loadShard))
      .then((lists) => {
        if (!alive) return;
        const map: Record<string, ShardQuestion> = {};
        for (const q of lists.flat()) map[q.id] = q;
        setQuestions(map);
      })
      .catch(() => alive && setError(true));
    return () => {
      alive = false;
    };
  }, [items]);

  useEffect(() => {
    dialogRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const meta = items[pos];
  const q = meta && questions ? questions[meta.id] : undefined;
  const prevMeta = items[pos - 1];
  const groupKey = meta?.group ?? meta?.id ?? '';
  const showPassage = collapsed !== groupKey || !prevMeta || prevMeta.group !== meta.group;
  const done = answers.length === items.length && items.length > 0;

  const check = () => {
    if (!q || !selected) return;
    const ok = isAnswerCorrect(q.answer, selected);
    setChecked(true);
    if (ok) {
      sfx.correct();
      haptic('success');
    } else {
      sfx.wrong();
      haptic('warning');
    }
    const nextAnswers = [...answers, { id: meta.id, correct: ok }];
    setAnswers(nextAnswers);
    if (nextAnswers.length === items.length) {
      const right = nextAnswers.filter((a) => a.correct).length;
      const pct = Math.round((100 * right) / nextAnswers.length);
      // 徽章：答對率過門檻，且能力估計有 70% 以上把握達到該標，兩者取較低者
      const est = estimatePercentile(nextAnswers.map((a, i) => ({ bands: items[i].bands, correct: a.correct })));
      const tier = minTier(tierReached(pct, thresholds), certifiedTier(est));
      setReward(onFinish({ answers: nextAnswers, pct, thresholds, tier }));
      window.setTimeout(() => {
        sfx.fanfare();
        haptic(tier ? 'success' : 'light');
      }, 400);
    }
  };

  const next = () => {
    setSelected(null);
    setChecked(false);
    if (pos + 1 < items.length) setPos(pos + 1);
  };

  const result = useMemo(() => {
    if (!done) return null;
    const right = answers.filter((a) => a.correct).length;
    const pct = Math.round((100 * right) / answers.length);
    const est = estimatePercentile(
      answers.map((a, i) => ({ bands: items[i].bands, correct: a.correct })),
    );
    const raw = tierReached(pct, thresholds);
    const tier = minTier(raw, certifiedTier(est));
    return { right, pct, tier, raw, est };
  }, [done, answers, items, thresholds]);


  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (done) return;
    if (!checked && /^[1-4a-dA-D]$/.test(e.key)) {
      const idx = /\d/.test(e.key) ? Number(e.key) - 1 : 'abcd'.indexOf(e.key.toLowerCase());
      setSelected(LETTERS[idx]);
    }
    if (e.key === 'Enter') {
      if (checked) next();
      else check();
    }
  };

  return (
    <Portal>
      <div
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onKeyDown={onKey}
        className="fixed inset-0 z-[100] flex flex-col bg-white outline-none dark:bg-slate-950"
      >
        <header className="flex items-center gap-3 border-b border-slate-200 px-4 py-3 dark:border-slate-800">
          <button type="button" onClick={onClose} className="rounded-lg p-1.5 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="離開檢定">
            <X className="h-6 w-6" />
          </button>
          <div className="h-3 flex-1 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800" role="progressbar" aria-valuemin={0} aria-valuemax={items.length} aria-valuenow={answers.length}>
            <div className="h-full rounded-full bg-indigo-500 transition-all" style={{ width: `${(100 * answers.length) / Math.max(1, items.length)}%` }} />
          </div>
          <span className="text-sm font-bold tabular-nums text-slate-500">
            {Math.min(pos + 1, items.length)}/{items.length}
          </span>
        </header>

        <div className="flex-1 overflow-y-auto">
          <div className="mx-auto w-full max-w-2xl px-4 py-5">
            {error && (
              <p className="rounded-xl bg-rose-50 p-4 text-rose-700 dark:bg-rose-950/40 dark:text-rose-300">
                題目載入失敗，請檢查網路後重新開啟。
              </p>
            )}
            {!error && !questions && (
              <p className="flex items-center gap-2 text-slate-500">
                <Loader2 className="h-5 w-5 animate-spin" /> 載入歷屆試題…
              </p>
            )}

            {q && !done && (
              <>
                <p className="mb-2 text-xs font-bold tracking-wide text-indigo-600 dark:text-indigo-400">
                  {meta.year} 年統測 · {examLabel} 第 {meta.no} 題 · 全體答對率 {Math.round(meta.p)}%
                </p>
                {q.passage && (
                  <div className="mb-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900">
                    <button type="button" className="mb-1 text-sm font-bold text-slate-600 dark:text-slate-300" onClick={() => setCollapsed(showPassage ? groupKey : null)} aria-expanded={showPassage}>
                      {q.groupTitle ?? '閱讀題組'} {showPassage ? '▲' : '▼'}
                    </button>
                    {showPassage && (
                      <div className="max-h-72 overflow-y-auto whitespace-pre-wrap text-[15px] leading-7 text-slate-700 dark:text-slate-200">
                        <MathText content={q.passage} />
                      </div>
                    )}
                  </div>
                )}
                <div className="text-lg font-bold leading-8 text-slate-900 dark:text-slate-50">
                  <MathText content={q.excerpt} />
                </div>
                {q.figureImage && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={`${base}${q.figureImage}`} alt={`${meta.year} 年第 ${meta.no} 題官方附圖`} className="mt-3 max-h-80 w-auto rounded-lg border border-slate-200 bg-white dark:border-slate-700" />
                )}
                <div className="mt-4 grid gap-2.5">
                  {LETTERS.map((L, i) => {
                    const correctSet = normalizedChoices(q.answer);
                    const isRight = checked && correctSet.includes(L);
                    const isWrongPick = checked && selected === L && !correctSet.includes(L);
                    return (
                      <button
                        key={L}
                        type="button"
                        disabled={checked}
                        onClick={() => {
                          setSelected(L);
                          sfx.tap();
                        }}
                        className={clsx(
                          'flex items-start gap-3 rounded-2xl border-2 border-b-4 px-4 py-3 text-left text-base transition',
                          isRight
                            ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40'
                            : isWrongPick
                              ? 'border-rose-500 bg-rose-50 dark:bg-rose-950/40'
                              : selected === L
                                ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950/40'
                                : 'border-slate-200 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-900',
                        )}
                      >
                        <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg border border-slate-300 text-sm font-black dark:border-slate-600">
                          {i + 1}
                        </span>
                        <span className="min-w-0 flex-1 text-slate-800 dark:text-slate-100">
                          <span className="mr-1 font-black">({L})</span>
                          <MathText content={q.options[L]} />
                        </span>
                      </button>
                    );
                  })}
                </div>
              </>
            )}

            {done && result && (
              <ResultPanel
                result={result}
                thresholds={thresholds}
                counted={counted}
                reward={reward}
                standard={standard}
                standardYear={standardYear}
                examLabel={examLabel}
              />
            )}
          </div>
        </div>

        <footer
          className={clsx(
            'border-t-2 px-4 py-4',
            checked && !done
              ? answers[answers.length - 1]?.correct
                ? 'border-emerald-200 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950/50'
                : 'border-rose-200 bg-rose-50 dark:border-rose-900 dark:bg-rose-950/50'
              : 'border-slate-200 dark:border-slate-800',
          )}
        >
          <div className="mx-auto flex max-w-2xl flex-wrap items-center gap-3">
            {checked && !done && q && (
              <div className="min-w-0 flex-1">
                <p className={clsx('flex items-center gap-1.5 text-lg font-black', answers[answers.length - 1]?.correct ? 'text-emerald-700 dark:text-emerald-300' : 'text-rose-700 dark:text-rose-300')}>
                  {answers[answers.length - 1]?.correct ? <Check className="h-5 w-5" /> : <X className="h-5 w-5" />}
                  {answers[answers.length - 1]?.correct ? '答對了' : `正解：${q.answer}`}
                </p>
                <p className="mt-0.5 flex flex-wrap gap-x-3 text-sm">
                  <Link href={q.lessonRoute} className="font-bold text-indigo-700 underline dark:text-indigo-300">
                    看這個主題的教學
                  </Link>
                  <a href={q.sourceUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-slate-500 underline">
                    官方試題 <ExternalLink className="h-3 w-3" />
                  </a>
                </p>
              </div>
            )}
            <div className="ml-auto">
              {done ? (
                <button type="button" onClick={onClose} className="rounded-2xl border-b-4 border-indigo-700 bg-indigo-500 px-8 py-3 font-black text-white">
                  完成
                </button>
              ) : checked ? (
                <button type="button" onClick={next} className="rounded-2xl border-b-4 border-indigo-700 bg-indigo-500 px-8 py-3 font-black text-white">
                  繼續
                </button>
              ) : (
                <button
                  type="button"
                  onClick={check}
                  disabled={!selected || !q}
                  className="rounded-2xl border-b-4 border-indigo-700 bg-indigo-500 px-8 py-3 font-black text-white disabled:border-slate-300 disabled:bg-slate-200 disabled:text-slate-400 dark:disabled:border-slate-700 dark:disabled:bg-slate-800"
                >
                  檢查
                </button>
              )}
            </div>
          </div>
        </footer>
      </div>
    </Portal>
  );
}

function ResultPanel({
  result,
  thresholds,
  counted,
  reward,
  standard,
  standardYear,
  examLabel,
}: {
  result: { right: number; pct: number; tier: TierId | null; raw: TierId | null; est: ReturnType<typeof estimatePercentile> };
  thresholds: Record<TierId, number>;
  counted: boolean;
  reward: { xp: number; bricks: number; improved: boolean } | null;
  standard: ExamStandard;
  standardYear: number;
  examLabel: string;
}) {
  const tierInfo = TIERS.find((t) => t.id === result.tier);
  const est = result.est;
  return (
    <div className="text-center">
      <Medal className={clsx('mx-auto h-16 w-16', tierInfo ? 'text-amber-500' : 'text-slate-300')} aria-hidden />
      <h2 className="mt-2 text-2xl font-black text-slate-900 dark:text-white">
        {tierInfo ? `${tierInfo.emoji} 達到${tierInfo.label}` : '尚未達到低標'}
      </h2>
      <p className="mt-1 text-slate-600 dark:text-slate-300">
        答對 {result.right} 題，答對率 {result.pct}%
      </p>

      <ThresholdBar pct={result.pct} thresholds={thresholds} />

      {tierRank(result.raw) > tierRank(result.tier) && (
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          答對率已過{TIERS[tierRank(result.raw) - 1].label}門檻，但答對的題目偏簡單、或題數還少，能力估計還沒有 70% 把握，先不頒發這枚徽章。
        </p>
      )}

      {est && (
        <div className="mt-5 rounded-2xl bg-indigo-50 p-4 text-left dark:bg-indigo-950/40">
          <p className="text-sm font-bold text-indigo-800 dark:text-indigo-200">這份檢定推估的程度</p>
          <p className="mt-1 text-slate-700 dark:text-slate-200">
            約在全體考生第 <b>{est.percentile}</b> 百分位（80% 區間 {est.lo}～{est.hi}），
            換算 {standardYear} 年{examLabel}約 <b>{percentileToScore(est.percentile, standard)}</b> 分
            （後標 {standard.low}／均標 {standard.mid}／前標 {standard.top}）。
          </p>
          <p className="mt-1 text-xs text-slate-500">只有 {est.n} 題，誤差大，僅供參考；多做幾份檢定後，首頁的「統測能力儀表板」會合併所有作答一起估計。</p>
        </div>
      )}

      {reward && (
        <p className="mt-4 font-bold text-amber-600">
          +{reward.xp} XP{reward.bricks > 0 && ` · +${reward.bricks} 🧱（升級獎勵）`}
        </p>
      )}
      {!counted && (
        <p className="mt-3 rounded-xl bg-amber-50 p-3 text-sm text-amber-800 dark:bg-amber-950/40 dark:text-amber-200">
          這份檢定大多是做過的題目，成績當作練習，不更新徽章。題池換新題後再來挑戰！
        </p>
      )}
    </div>
  );
}

export function ThresholdBar({ pct, thresholds }: { pct?: number; thresholds: Record<TierId, number> }) {
  return (
    <div className="mx-auto mt-5 max-w-md text-left">
      <div className="relative h-4 rounded-full bg-gradient-to-r from-slate-200 via-slate-200 to-slate-200 dark:from-slate-800 dark:to-slate-800">
        {pct !== undefined && <div className="h-full rounded-full bg-indigo-500" style={{ width: `${pct}%` }} />}
        {TIERS.map((t) => (
          <div key={t.id} className="absolute -top-1 h-6 w-0.5 bg-slate-700 dark:bg-slate-300" style={{ left: `${thresholds[t.id]}%` }} aria-hidden />
        ))}
      </div>
      <div className="relative mt-1 h-10 text-[11px] font-bold text-slate-600 dark:text-slate-300">
        {TIERS.map((t, i) => (
          <span key={t.id} className="absolute -translate-x-1/2 text-center leading-tight" style={{ left: `${thresholds[t.id]}%`, top: i === 1 ? 14 : 0 }}>
            {t.label} {thresholds[t.id]}%
          </span>
        ))}
      </div>
    </div>
  );
}

function minTier(a: TierId | null, b: TierId | null): TierId | null {
  return tierRank(a) <= tierRank(b) ? a : b;
}
