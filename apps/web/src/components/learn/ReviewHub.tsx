'use client';

import { useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, RotateCcw, Trash2 } from 'lucide-react';
import MathText from '@/components/MathText';
import { correctAnswerText, localDateKey } from '@/lib/learn/engine';
import { todayStats, useLearnHydration, useLearnStore, type MistakeRecord } from '@/lib/store/learnStore';
import LessonPlayer from './LessonPlayer';
import StatsBar from './StatsBar';

const REVIEW_SIZE = 10;

export default function ReviewHub() {
  const hydrated = useLearnHydration();
  const mistakes = useLearnStore((s) => s.mistakes);
  const dailyGoal = useLearnStore((s) => s.dailyGoal);
  const completeSession = useLearnStore((s) => s.completeSession);
  const [session, setSession] = useState<{ key: number; records: MistakeRecord[]; xpBefore: number } | null>(null);

  const list = useMemo(
    () =>
      hydrated
        ? Object.values(mistakes).sort((a, b) => b.wrong - a.wrong || b.lastWrong.localeCompare(a.lastWrong))
        : [],
    [hydrated, mistakes],
  );
  const byCourse = useMemo(() => {
    const m = new Map<string, MistakeRecord[]>();
    for (const r of list) m.set(r.courseTitle, [...(m.get(r.courseTitle) ?? []), r]);
    return [...m.entries()];
  }, [list]);

  const runs = useRef(0);
  const startReview = (records: MistakeRecord[]) => {
    runs.current += 1;
    const st = useLearnStore.getState();
    setSession({ key: runs.current, records: records.slice(0, REVIEW_SIZE), xpBefore: todayStats(st.day, localDateKey()).xp });
  };

  const removeOne = (id: string) => {
    const next = { ...useLearnStore.getState().mistakes };
    delete next[id];
    useLearnStore.setState({ mistakes: next });
  };

  return (
    <div className="min-h-screen bg-[#fafaf9] pb-28 dark:bg-slate-950">
      <div className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
        <div className="mx-auto flex max-w-4xl items-center gap-2 px-3 py-2 sm:px-6">
          <Link href="/learn" className="flex items-center gap-1 rounded-xl px-2 py-1.5 text-sm font-bold text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">
            <ChevronLeft className="h-4 w-4" aria-hidden /> 闖關首頁
          </Link>
          <div className="ml-auto">
            <StatsBar hydrated={hydrated} compact />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 pt-8 sm:px-6">
        <h1 className="text-3xl font-black text-slate-900 dark:text-white">錯題複習</h1>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          闖關時首答答錯的題目會自動收進這裡。複習時答對就會移出錯題本；答錯的會留下來，下次再練。
        </p>

        {!hydrated ? (
          <p className="mt-10 text-sm text-slate-400">載入錯題本…</p>
        ) : list.length === 0 ? (
          <div className="mt-10 rounded-3xl border-2 border-dashed border-slate-300 p-10 text-center dark:border-slate-700">
            <p className="text-5xl">🧹</p>
            <p className="mt-3 font-black text-slate-800 dark:text-slate-100">錯題本是空的</p>
            <p className="mt-1 text-sm text-slate-500">去闖幾關吧，答錯的題目會出現在這裡。</p>
            <Link href="/learn" className="mt-5 inline-block rounded-2xl border-b-4 border-emerald-700 bg-emerald-500 px-6 py-3 text-sm font-black text-white">
              回到闖關首頁
            </Link>
          </div>
        ) : (
          <>
            <button
              type="button"
              onClick={() => startReview(list)}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl border-b-4 border-violet-800 bg-violet-600 py-4 text-base font-black text-white transition active:translate-y-[2px] active:border-b-2 sm:w-auto sm:px-10"
            >
              <RotateCcw className="h-5 w-5" aria-hidden /> 複習最常錯的 {Math.min(REVIEW_SIZE, list.length)} 題
            </button>

            <div className="mt-8 space-y-8">
              {byCourse.map(([courseTitle, records]) => (
                <section key={courseTitle} aria-label={courseTitle}>
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <h2 className="text-lg font-black text-slate-900 dark:text-white">
                      {courseTitle} <span className="text-sm text-slate-400">{records.length} 題</span>
                    </h2>
                    <button type="button" onClick={() => startReview(records)} className="text-sm font-black text-violet-600 hover:underline dark:text-violet-300">
                      只複習這科
                    </button>
                  </div>
                  <ul className="space-y-2">
                    {records.map((r) => (
                      <li key={r.item.id} className="rounded-2xl border-2 border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                        <div className="flex items-start gap-3">
                          <div className="min-w-0 flex-1">
                            <p className="text-xs font-bold text-slate-400">
                              {r.unitTitle}・錯 {r.wrong} 次
                            </p>
                            <p className="mt-1 text-sm font-semibold text-slate-800 dark:text-slate-100">
                              <MathText content={r.item.prompt.replace(/\{\{|\}\}/g, '')} />
                            </p>
                            <p className="mt-1 text-xs text-emerald-700 dark:text-emerald-300">
                              正解：<MathText content={correctAnswerText(r.item)} />
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeOne(r.item.id)}
                            className="rounded-lg p-1.5 text-slate-300 hover:bg-slate-100 hover:text-rose-500 dark:hover:bg-slate-800"
                            aria-label="從錯題本移除"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </>
        )}
      </div>

      {session && (
        <LessonPlayer
          key={session.key}
          title="錯題複習"
          items={session.records.map((r) => r.item)}
          color="violet"
          mode="review"
          dailyGoal={dailyGoal}
          todayXpBefore={session.xpBefore}
          onFinish={(f) =>
            completeSession({
              result: f.result,
              wrongItems: [],
              rightItemIds: f.rightIds,
              isReview: true,
            })
          }
          onClose={() => setSession(null)}
        />
      )}
    </div>
  );
}
