'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  Layers, 
  Lightbulb, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  BookmarkCheck,
  Compass
} from 'lucide-react';
import { topicInfographicsMap } from '@/lib/pedagogy/topicInfographicsData';
import { commonTopicInfographicsMap } from '@/lib/pedagogy/topicInfographicsCommon';

interface TopicInfographicCardProps {
  subjectSlug: string;
  topicSlug: string;
  className?: string;
}

const conceptTypeBadgeMap: Record<string, { label: string; color: string }> = {
  'equilibrium-vector': { label: '向量平衡與力系解析', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 border-blue-200 dark:border-blue-800' },
  'structural-stress': { label: '結構應力與極限破壞', color: 'bg-rose-100 text-rose-800 dark:bg-rose-900/50 dark:text-rose-200 border-rose-200 dark:border-rose-800' },
  'material-reaction': { label: '材料水化與化學相變', color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200 border-emerald-200 dark:border-emerald-800' },
  'survey-geometry': { label: '大地坐標與幾何閉合', color: 'bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-200 border-amber-200 dark:border-amber-800' },
  'drafting-projection': { label: 'CNS 正投影與空間圖學', color: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-200 border-indigo-200 dark:border-indigo-800' },
  'flowchart-logic': { label: '思維決策樹與邏輯推論', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200 border-purple-200 dark:border-purple-800' },
  'comparative-matrix': { label: '對照矩陣與特徵分類', color: 'bg-teal-100 text-teal-800 dark:bg-teal-900/50 dark:text-teal-200 border-teal-200 dark:border-teal-800' },
  'environmental-physics': { label: '建築物理與環境熱工', color: 'bg-sky-100 text-sky-800 dark:bg-sky-900/50 dark:text-sky-200 border-sky-200 dark:border-sky-800' },
};

export default function TopicInfographicCard({
  subjectSlug,
  topicSlug,
  className = '',
}: TopicInfographicCardProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const key = `${subjectSlug}/${topicSlug}`;
  const infographic = topicInfographicsMap[key] || commonTopicInfographicsMap[key];

  if (!infographic) {
    return null;
  }

  const badgeInfo = conceptTypeBadgeMap[infographic.conceptType] || {
    label: '專業圖解',
    color: 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700',
  };

  return (
    <section 
      aria-labelledby="topic-infographic-title"
      className={`overflow-hidden rounded-3xl border border-indigo-200/80 bg-gradient-to-b from-indigo-50/40 via-white to-white shadow-md dark:border-indigo-900/40 dark:from-slate-900/90 dark:via-slate-900/70 dark:to-slate-950 ${className}`}
    >
      {/* Header Banner */}
      <div className="border-b border-indigo-100 bg-gradient-to-r from-indigo-50/80 via-blue-50/50 to-indigo-50/30 p-5 dark:border-indigo-950 dark:from-indigo-950/40 dark:via-slate-900 dark:to-indigo-950/20 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3.5">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-600 text-2xl shadow-md shadow-indigo-600/20 dark:bg-indigo-500">
              <span>{infographic.icon}</span>
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-bold tracking-wide ${badgeInfo.color}`}>
                  <Compass className="size-3" />
                  {badgeInfo.label}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-semibold text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                  <Sparkles className="size-3 text-emerald-600 dark:text-emerald-400" />
                  專家審核視覺
                </span>
              </div>
              <h2 id="topic-infographic-title" className="mt-1 font-serif text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
                {infographic.title}
              </h2>
              <p className="mt-0.5 text-xs font-medium text-slate-600 dark:text-slate-400 sm:text-sm">
                {infographic.subtitle}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex self-end items-center gap-1.5 rounded-xl border border-indigo-200 bg-white/80 px-3 py-1.5 text-xs font-semibold text-indigo-700 shadow-sm transition hover:bg-indigo-50 dark:border-indigo-800 dark:bg-slate-800 dark:text-indigo-300 dark:hover:bg-slate-700 sm:self-center"
            aria-expanded={isExpanded}
          >
            <span>{isExpanded ? '收合視覺圖解' : '展開視覺圖解'}</span>
            {isExpanded ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="space-y-6 p-5 sm:p-7">
          {/* Formula Banner (if available) */}
          {infographic.formulaBanner && (
            <div className="rounded-2xl border border-indigo-200/90 bg-indigo-500/[0.04] p-4 dark:border-indigo-900/60 dark:bg-indigo-950/30">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400">
                <BookmarkCheck className="size-4 text-indigo-600 dark:text-indigo-400" />
                <span>核心定量關係與幾何公式</span>
              </div>
              <div className="mt-2 font-mono text-sm font-bold text-indigo-950 dark:text-indigo-200 sm:text-base">
                {infographic.formulaBanner}
              </div>
            </div>
          )}

          {/* Diagram Context Description */}
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-5 dark:border-slate-800 dark:bg-slate-900/40">
            <div className="flex items-center gap-2">
              <Layers className="size-4 text-blue-600 dark:text-blue-400" />
              <h3 className="font-bold text-slate-900 dark:text-white">
                {infographic.diagramTitle}
              </h3>
            </div>
            <p className="mt-2 text-sm leading-7 text-slate-700 dark:text-slate-300">
              {infographic.diagramDescription}
            </p>
          </div>

          {/* Visual Annotations Grid */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <Lightbulb className="size-4 text-amber-600 dark:text-amber-400" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                關鍵視覺特徵與空間解析點 (Visual Highlights)
              </h4>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {infographic.visualHighlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 transition-all hover:border-indigo-300 hover:shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-700"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-bold text-slate-900 dark:text-white">
                        {highlight.label}
                      </span>
                      {highlight.badge && (
                        <span className="rounded-md bg-indigo-50 px-2 py-0.5 text-[10px] font-bold text-indigo-700 dark:bg-indigo-950/80 dark:text-indigo-300">
                          {highlight.badge}
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                      {highlight.desc}
                    </p>
                  </div>
                  <div className="mt-3 flex items-center justify-end">
                    <span className="text-[10px] font-bold text-slate-300 dark:text-slate-600">
                      POINT #{index + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Takeaways */}
          <div className="rounded-2xl border border-emerald-200/80 bg-emerald-50/40 p-5 dark:border-emerald-950 dark:bg-emerald-950/20">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-400" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                專家精選核心心法 (Expert Council Key Takeaways)
              </h4>
            </div>
            <ul className="mt-3 grid gap-2 sm:grid-cols-3">
              {infographic.keyTakeaways.map((takeaway, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-2 rounded-xl bg-white/70 p-3 text-xs leading-relaxed text-slate-700 shadow-[0_1px_2px_rgba(0,0,0,0.02)] dark:bg-slate-900/60 dark:text-slate-300"
                >
                  <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[10px] font-bold text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300">
                    {index + 1}
                  </span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
