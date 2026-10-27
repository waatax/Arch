'use client';

import { useMemo, useRef, useState } from 'react';
import { Swords } from 'lucide-react';
import { clsx } from 'clsx';
import type { LearnCourse } from '@/data/learnPath/types';
import { EXAM_LATEST_YEAR, examPoolFor, latestStandard } from '@/data/learnPath/examBank';
import {
  FRESH_RATIO,
  TIERS,
  freshRatio,
  pickTest,
  tierRank,
  tierThresholds,
  type ExamItemMeta,
} from '@/lib/learn/examAlign';
import { hashString } from '@/lib/learn/engine';
import { useLearnStore } from '@/lib/store/learnStore';
import ExamPlayer, { ThresholdBar } from './ExamPlayer';

/**
 * 課程路徑底部的「統測對標檢定」：
 * 以本課程範圍的歷屆統測真題出題，門檻來自測驗中心公布的能力組答對率，
 * 達到門檻就代表「在真正的統測中，這些題目的表現相當於後標／均標／前標的考生」。
 */
export default function ExamCertCard({ course, hydrated }: { course: LearnCourse; hydrated: boolean }) {
  const pool = examPoolFor(course.key);
  const cert = useLearnStore((s) => s.certs[course.id]);
  const examResp = useLearnStore((s) => s.examResp);
  const completeExamTest = useLearnStore((s) => s.completeExamTest);
  const [test, setTest] = useState<{ items: ExamItemMeta[]; counted: boolean; key: number } | null>(null);
  const runs = useRef(0);

  const seen = useMemo(() => new Set(Object.keys(examResp)), [examResp]);
  const all = useMemo(() => pool?.units.flat() ?? [], [pool]);
  const poolThresholds = useMemo(() => tierThresholds(all), [all]);
  if (!pool) return null;

  const isPaper = pool.mode === 'paper';
  const unseen = hydrated ? all.filter((it) => !seen.has(it.id)).length : all.length;
  const best = hydrated ? cert?.tier ?? null : null;
  const standard = latestStandard(pool.exam);

  const start = () => {
    runs.current += 1;
    const items = pickTest(pool, seen, hashString(`${course.id}-${runs.current}-${Object.keys(examResp).length}`));
    setTest({ items, counted: freshRatio(items, seen) >= FRESH_RATIO, key: runs.current });
  };

  return (
    <section className="mb-10 rounded-3xl border-2 border-indigo-200 bg-gradient-to-b from-indigo-50 to-white p-5 dark:border-indigo-900 dark:from-indigo-950/40 dark:to-slate-950" aria-labelledby={`${course.id}-cert`}>
      <div className="flex items-start gap-3">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-indigo-500 text-white shadow-[0_4px_0_#4338ca]">
          <Swords className="h-6 w-6" aria-hidden />
        </span>
        <div className="min-w-0">
          <h2 id={`${course.id}-cert`} className="text-lg font-black text-slate-900 dark:text-white">
            {isPaper ? `${pool.years[0]} 年統測${pool.examLabel}・全真模擬` : `統測對標檢定・${pool.examLabel}`}
          </h2>
          <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-300">
            {isPaper
              ? `整份 ${all.length} 題原卷，依官方答對率判定低標／中標／高標，並換算預估分數。`
              : `從 ${pool.years[0]}～${pool.years[pool.years.length - 1]} 年統測中屬於本課範圍的 ${all.length} 題真題抽 20 題。`}
          </p>
        </div>
      </div>

      <ul className="mt-4 grid grid-cols-3 gap-2" aria-label="檢定徽章">
        {TIERS.map((t) => {
          const got = tierRank(best) >= tierRank(t.id);
          return (
            <li
              key={t.id}
              className={clsx(
                'rounded-2xl border-2 p-2 text-center',
                got ? 'border-amber-300 bg-amber-50 dark:border-amber-700 dark:bg-amber-950/40' : 'border-slate-200 bg-white/60 dark:border-slate-800 dark:bg-slate-900/60',
              )}
            >
              <span className={clsx('block text-2xl', !got && 'opacity-30 grayscale')} aria-hidden>
                {t.emoji}
              </span>
              <span className="block text-sm font-black text-slate-800 dark:text-slate-100">{t.label}</span>
              <span className="block text-[11px] text-slate-500">≈ 統測{t.official}</span>
              <span className="sr-only">{got ? '已取得' : '未取得'}</span>
            </li>
          );
        })}
      </ul>

      <p className="mt-3 text-xs font-bold text-slate-500">整個題池的門檻（每次抽題會依題目難度重算）</p>
      <ThresholdBar thresholds={poolThresholds} />

      <div className="mt-2 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={start}
          className="rounded-2xl border-b-4 border-indigo-700 bg-indigo-500 px-6 py-3 font-black text-white hover:bg-indigo-600"
        >
          {cert ? '再次挑戰' : '開始檢定'}
        </button>
        <span className="text-xs text-slate-500">
          未做過 {unseen}/{all.length} 題
          {hydrated && cert && ` · 最佳 ${cert.pct}%（${cert.attempts} 次）`}
        </span>
      </div>
      <p className="mt-3 text-[11px] leading-relaxed text-slate-500">
        門檻算法：測驗中心 D3 報表公布每題五個能力組（各 20% 考生）的答對率；低標、中標、高標分別是第 25、50、75 百分位考生在這些題目的預期答對率，對應統測的後標、均標、前標。用 111～115 年整卷驗證，模型三標與官方相差多在 4 分內。
        {unseen < all.length * FRESH_RATIO && ' 做過的題目超過四分之一時，該次成績當練習、不更新徽章。'}
      </p>

      {test && (
        <ExamPlayer
          key={test.key}
          title={`${course.shortTitle} 統測對標檢定`}
          examLabel={pool.examLabel}
          items={test.items}
          standard={standard}
          standardYear={EXAM_LATEST_YEAR}
          counted={test.counted}
          onFinish={(f) =>
            completeExamTest({ courseId: course.id, subject: course.shortTitle, counted: test.counted, ...f })
          }
          onClose={() => setTest(null)}
        />
      )}
    </section>
  );
}
