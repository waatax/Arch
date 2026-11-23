'use client';

import { Compass, Eye, Lightbulb, Repeat, Wrench } from 'lucide-react';
import type { TopicRealLifeGuide } from '@/lib/pedagogy/realLifeHelpers';
import type { TopicDeepKnowledge } from '@/lib/pedagogy/topicKnowledgeExpander';
import MathText from '@/components/MathText';

interface RealLifeVariationsPanelProps {
  topicTitle: string;
  realLifeGuide: TopicRealLifeGuide;
  deepKnowledge: TopicDeepKnowledge;
}

export default function RealLifeVariationsPanel({
  topicTitle,
  realLifeGuide,
  deepKnowledge,
}: RealLifeVariationsPanelProps) {
  const variations = realLifeGuide.applicationVariations?.length
    ? realLifeGuide.applicationVariations
    : deepKnowledge.examTrend.keyQuestionTypes.slice(0, 3);

  return (
    <section
      id="real-life-variations"
      aria-labelledby="real-life-variations-title"
      className="scroll-mt-24 rounded-3xl border border-emerald-200/90 dark:border-emerald-900/70 bg-gradient-to-br from-emerald-50/75 via-white to-cyan-50/60 dark:from-emerald-950/30 dark:via-slate-900 dark:to-cyan-950/20 p-5 sm:p-7 shadow-xs space-y-6"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-emerald-200/70 dark:border-emerald-900/50 pb-4">
        <div className="flex items-center gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-sm">
            <Compass className="size-5" />
          </span>
          <div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
              Connection to Real Life &amp; Application Variations
            </span>
            <h2
              id="real-life-variations-title"
              className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-white"
            >
              為何要學《{topicTitle}》× 真實生活哪裡用到 × 應用變化全剖析
            </h2>
          </div>
        </div>
        <span className="rounded-full bg-emerald-100 dark:bg-emerald-900/60 px-3 py-1 text-xs font-mono font-bold text-emerald-800 dark:text-emerald-200 border border-emerald-300/70 dark:border-emerald-800">
          生活連結 × 條件變形
        </span>
      </div>

      {/* Row 1: Why Learn + Where Used */}
      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-emerald-200/80 dark:border-emerald-900/60 bg-white/90 dark:bg-slate-900/80 p-4 sm:p-5 space-y-2">
          <h3 className="flex items-center gap-2 text-sm font-bold text-emerald-800 dark:text-emerald-300">
            <Lightbulb className="size-4 shrink-0" />
            <span>為何要學（真實世界的重要性）</span>
          </h3>
          <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">
            <MathText content={realLifeGuide.realLifeImportance} />
          </p>
        </article>

        <article className="rounded-2xl border border-cyan-200/80 dark:border-cyan-900/60 bg-white/90 dark:bg-slate-900/80 p-4 sm:p-5 space-y-2">
          <h3 className="flex items-center gap-2 text-sm font-bold text-cyan-800 dark:text-cyan-300">
            <Wrench className="size-4 shrink-0" />
            <span>哪裡用到（工程現場・生活場域・考證職涯）</span>
          </h3>
          <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">
            <MathText
              content={
                realLifeGuide.whereUsed ||
                `${deepKnowledge.landmarkCase.name}（${deepKnowledge.landmarkCase.location}）：${deepKnowledge.landmarkCase.structuralFeature}`
              }
            />
          </p>
        </article>
      </div>

      {/* Row 2: Everyday Analogy + Hands-on Observation */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-amber-200/80 dark:border-amber-900/60 bg-amber-50/60 dark:bg-amber-950/25 p-4 space-y-1.5">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300">
            🧠 一秒聽懂的生活直覺類比
          </div>
          <p className="text-sm leading-6 text-slate-800 dark:text-slate-200">
            <MathText content={realLifeGuide.everydayAnalogy} />
          </p>
        </div>

        <div className="rounded-2xl border border-indigo-200/80 dark:border-indigo-900/60 bg-indigo-50/60 dark:bg-indigo-950/25 p-4 space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-800 dark:text-indigo-300">
            <Eye className="size-3.5" />
            <span>現在就能動手觀察驗證</span>
          </div>
          <p className="text-sm leading-6 text-slate-800 dark:text-slate-200">
            <MathText content={realLifeGuide.handsOnObservation} />
          </p>
        </div>
      </div>

      {/* Row 3: Application Variations & Condition Shifts */}
      <div className="rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/95 dark:bg-slate-950/70 p-4 sm:p-5 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="flex items-center gap-2 text-sm sm:text-base font-bold text-slate-900 dark:text-white">
            <Repeat className="size-4 text-blue-600 dark:text-blue-400" />
            <span>應用變化與條件變形（當現場或考題條件一變，解法怎麼跟著變？）</span>
          </h3>
          <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
            共 {variations.length} 大變形場景
          </span>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {variations.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 p-3.5 space-y-1.5"
            >
              <span className="inline-block rounded-md bg-blue-600/15 dark:bg-blue-500/20 px-2 py-0.5 font-mono text-[11px] font-bold text-blue-700 dark:text-blue-300">
                應用變化 0{idx + 1}
              </span>
              <p className="text-xs sm:text-sm leading-6 text-slate-700 dark:text-slate-300">
                <MathText content={item} />
              </p>
            </div>
          ))}
        </div>

        {deepKnowledge.examTrend.killerTrick && (
          <div className="rounded-xl border border-amber-300/80 dark:border-amber-800/70 bg-amber-50/80 dark:bg-amber-950/30 px-4 py-3 text-xs sm:text-sm text-amber-950 dark:text-amber-100">
            <strong className="font-bold text-amber-800 dark:text-amber-300">⚡ 萬變不離其宗破題口訣：</strong>
            <MathText content={deepKnowledge.examTrend.killerTrick} />
          </div>
        )}
      </div>
    </section>
  );
}
