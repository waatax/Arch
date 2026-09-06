'use client';

import React, { useState } from 'react';
import type { PathwayWorkedExample } from '@/data/pathwayCurriculum';
import { 
  FileCheck2, 
  HelpCircle, 
  Lightbulb, 
  ChevronDown, 
  ChevronUp,
  CheckCircle2
} from 'lucide-react';

interface PathwayWorkedExampleCardProps {
  example: PathwayWorkedExample;
  className?: string;
}

export default function PathwayWorkedExampleCard({
  example,
  className = '',
}: PathwayWorkedExampleCardProps) {
  const [isStepsOpen, setIsStepsOpen] = useState(true);

  const difficultyBadgeMap = {
    基礎養成: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-300',
    進階推敲: 'bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300 border-blue-300',
    高考建築師: 'bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300 border-rose-300',
    大師實戰: 'bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300 border-purple-300',
  };

  return (
    <div className={`overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm ${className}`}>
      {/* Header */}
      <div className="border-b border-slate-100 dark:border-slate-800 p-5 bg-gradient-to-r from-slate-50 via-white to-slate-50/50 dark:from-slate-950/60 dark:via-slate-900 dark:to-slate-950/40">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="flex size-7 items-center justify-center rounded-xl bg-amber-500 text-white shadow-xs">
              <FileCheck2 className="size-4" />
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className={`inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono font-bold ${difficultyBadgeMap[example.difficulty]}`}>
                  {example.difficulty}
                </span>
                <span className="text-[11px] font-mono text-slate-400 font-bold">
                  SOP 多步驟標準演繹
                </span>
              </div>
              <h4 className="mt-1 font-serif text-base font-bold text-slate-900 dark:text-white">
                {example.title}
              </h4>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsStepsOpen(!isStepsOpen)}
            className="inline-flex self-end sm:self-center items-center gap-1 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-700 dark:text-slate-300 shadow-xs hover:bg-slate-50 transition cursor-pointer"
          >
            <span>{isStepsOpen ? '收合推導步驟' : '展開完整 SOP'}</span>
            {isStepsOpen ? <ChevronUp className="size-3.5" /> : <ChevronDown className="size-3.5" />}
          </button>
        </div>

        {/* Scenario Context */}
        <div className="mt-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800 p-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300 font-sans">
          <span className="font-mono font-bold text-slate-500 block mb-0.5">【專案背景 / 題目情境】</span>
          {example.scenario}
        </div>

        {/* Question Statement */}
        <div className="mt-3 flex items-start gap-2 text-xs sm:text-sm font-serif font-bold text-slate-900 dark:text-white">
          <HelpCircle className="size-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
          <p>{example.question}</p>
        </div>
      </div>

      {/* Steps List */}
      {isStepsOpen && (
        <div className="p-5 space-y-4 bg-slate-50/20 dark:bg-slate-950/20">
          <div className="space-y-3">
            {example.steps.map((step, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 space-y-2"
              >
                <div className="flex items-center gap-2">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-blue-700 text-white font-mono text-xs font-bold">
                    0{idx + 1}
                  </span>
                  <h5 className="font-serif font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                    {step.title}
                  </h5>
                </div>

                <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300 font-sans whitespace-pre-line pl-8">
                  {step.content}
                </p>

                <div className="ml-8 mt-1 rounded-lg bg-blue-50/70 dark:bg-blue-950/30 border-l-2 border-blue-600 p-2 text-[11px] text-blue-800 dark:text-blue-300 font-sans leading-relaxed">
                  <span className="font-bold font-mono">推導原因與法規理論：</span>
                  {step.rationale}
                </div>
              </div>
            ))}
          </div>

          {/* Final Standard Answer Box */}
          <div className="rounded-xl border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/50 dark:bg-emerald-950/30 p-4 space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wider">
              <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400" />
              <span>標準解答總結 (Standard Resolution)</span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-800 dark:text-slate-200 font-sans">
              {example.answer}
            </p>
          </div>

          {/* Master Rationale / Elite Insight */}
          <div className="rounded-xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/40 dark:bg-amber-950/20 p-4 space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-800 dark:text-amber-300">
              <Lightbulb className="size-4 text-amber-600 dark:text-amber-400" />
              <span>大師評圖與國家考試破題心法 (Elite Insight)</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300 font-sans">
              {example.eliteInsight}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
