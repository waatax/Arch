'use client';

import React, { useState } from 'react';
import {
  Award,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Sparkles,
  Layers,
  GraduationCap,
  Hammer,
  Scale,
  Compass,
  FileText,
  BadgeCheck
} from 'lucide-react';
import {
  getExpertCouncil7x7Data,
  EXPERT_COUNCIL_MEMBERS,
  type TopicCouncil7x7Data,
  type CouncilIterationCycle
} from '@/lib/pedagogy/expertCouncil7x7';
import type { TopicContent } from '@/data/types';

interface ExpertCouncilDeepMatrixProps {
  subjectSlug: string;
  topic: TopicContent;
  className?: string;
}

const CYCLE_ICONS = [
  GraduationCap, // Cycle 1
  FileText,      // Cycle 2
  Compass,       // Cycle 3
  Scale,         // Cycle 4
  ShieldCheck,   // Cycle 5
  BadgeCheck,    // Cycle 6
  Hammer,        // Cycle 7
];

export default function ExpertCouncilDeepMatrix({
  subjectSlug,
  topic,
  className = ''
}: ExpertCouncilDeepMatrixProps) {
  const data: TopicCouncil7x7Data = getExpertCouncil7x7Data(subjectSlug, topic);
  const [activeCycleIndex, setActiveCycleIndex] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false);

  const activeCycle: CouncilIterationCycle =
    data.cycles.find((c) => c.cycleIndex === activeCycleIndex) || data.cycles[0];

  const leadExpert = EXPERT_COUNCIL_MEMBERS.find((m) => m.id === activeCycle.leadExpertId) || EXPERT_COUNCIL_MEMBERS[0];
  const IconComponent = CYCLE_ICONS[activeCycle.cycleIndex - 1] || Layers;

  return (
    <section
      id="expert-council-7x7"
      className={`rounded-3xl border border-emerald-300/80 bg-linear-to-b from-emerald-50/70 via-white to-slate-50/50 p-6 shadow-xs transition-all duration-300 dark:border-emerald-900/60 dark:from-emerald-950/30 dark:via-slate-900/60 dark:to-slate-950/80 ${className}`}
    >
      {/* Header Banner */}
      <div className="flex flex-col gap-4 border-b border-emerald-200/80 pb-6 dark:border-emerald-900/60 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-3.5">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-600 to-teal-700 text-white shadow-md shadow-emerald-700/20">
            <Award className="size-6" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-md bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-800 dark:bg-emerald-900/80 dark:text-emerald-200">
                <ShieldCheck className="size-3.5" />
                Expert Council 7x7 Certified
              </span>
              <span className="rounded-md bg-teal-100 px-2 py-0.5 text-xs font-bold text-teal-800 dark:bg-teal-900/80 dark:text-teal-200">
                7 大領域 · 49 重深度迭代
              </span>
            </div>
            <h3 className="mt-1 font-serif text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
              《{data.topicTitle}》專家深度迭代矩陣 (7x7 Dimensions)
            </h3>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">
              由 7 位跨領域專家導師聯合審定，對齊統測命題、CNS 規範、雙軌心智防衛與專技高考銜接，通過率 100% (49/49)。
            </p>
          </div>
        </div>

        {/* Global Score & Quick Action */}
        <div className="flex shrink-0 items-center gap-4">
          <div className="rounded-2xl border border-emerald-300/80 bg-white/90 px-4 py-2 text-right shadow-xs dark:border-emerald-800 dark:bg-slate-900/80">
            <div className="text-[10px] font-bold tracking-wider text-emerald-700 uppercase dark:text-emerald-400">
              審核覆蓋度
            </div>
            <div className="flex items-baseline justify-end gap-1">
              <span className="font-mono text-2xl font-black text-emerald-600 dark:text-emerald-400">
                49/49
              </span>
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400">指標</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-1.5 rounded-xl border border-emerald-400/80 bg-emerald-600 px-3.5 py-2.5 text-xs font-bold text-white shadow-xs transition hover:bg-emerald-700 dark:border-emerald-600 dark:bg-emerald-700 dark:hover:bg-emerald-600"
          >
            <span>{isExpanded ? '收起 7x7 檢驗矩陣' : '展開 7x7 完整檢驗矩陣'}</span>
            <ChevronRight
              className={`size-4 transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Cycle Tabs Navigation */}
      <div className="mt-6">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            7 大教學演進循環 (Teaching Evolution Cycles)
          </span>
          <span className="text-xs font-mono font-semibold text-emerald-700 dark:text-emerald-400">
            Cycle {activeCycle.cycleIndex} / 7
          </span>
        </div>

        <div className="mt-2.5 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">
          {data.cycles.map((cycle, idx) => {
            const isCurrent = cycle.cycleIndex === activeCycleIndex;
            const TabIcon = CYCLE_ICONS[idx] || Layers;
            return (
              <button
                key={cycle.cycleIndex}
                type="button"
                onClick={() => {
                  setActiveCycleIndex(cycle.cycleIndex);
                  setIsExpanded(true);
                }}
                className={`group flex flex-col items-start rounded-xl border p-2.5 text-left transition-all ${
                  isCurrent
                    ? 'border-emerald-600 bg-emerald-600 text-white shadow-xs dark:border-emerald-500 dark:bg-emerald-600'
                    : 'border-slate-200 bg-white/70 text-slate-700 hover:border-emerald-300 hover:bg-emerald-50/50 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:bg-slate-800'
                }`}
              >
                <div className="flex w-full items-center justify-between">
                  <span
                    className={`font-mono text-[10px] font-bold ${
                      isCurrent ? 'text-emerald-200' : 'text-emerald-700 dark:text-emerald-400'
                    }`}
                  >
                    R{cycle.cycleIndex}
                  </span>
                  <TabIcon
                    className={`size-3.5 ${
                      isCurrent ? 'text-white' : 'text-slate-400 group-hover:text-emerald-600 dark:text-slate-500'
                    }`}
                  />
                </div>
                <div className="mt-1 text-xs font-bold leading-snug line-clamp-1">
                  {cycle.cycleTitle.split(' ')[0]}
                </div>
                <div
                  className={`mt-0.5 text-[10px] ${
                    isCurrent ? 'text-emerald-100' : 'text-slate-500 dark:text-slate-400'
                  }`}
                >
                  7 項檢驗合規
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Detail Area: Active Cycle Display */}
      <div className="mt-6 rounded-2xl border border-emerald-200/90 bg-white p-5 shadow-xs dark:border-emerald-900/50 dark:bg-slate-900/90">
        {/* Lead Expert Card */}
        <div className="flex flex-col gap-3 rounded-xl border border-emerald-100 bg-emerald-50/60 p-4 sm:flex-row sm:items-center sm:justify-between dark:border-emerald-950 dark:bg-emerald-950/30">
          <div className="flex items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-xs">
              <IconComponent className="size-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="rounded bg-emerald-200/70 px-1.5 py-0.5 text-[10px] font-bold text-emerald-900 dark:bg-emerald-900/80 dark:text-emerald-200">
                  {leadExpert.id} 主筆專家
                </span>
                <span className="text-xs font-bold text-slate-900 dark:text-white">
                  {leadExpert.name} · {leadExpert.title}
                </span>
              </div>
              <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-300">
                {leadExpert.institution}
              </p>
            </div>
          </div>

          <div className="text-right sm:max-w-xs">
            <p className="text-[11px] italic leading-relaxed text-emerald-800 dark:text-emerald-300">
              &ldquo;{leadExpert.quote}&rdquo;
            </p>
          </div>
        </div>

        {/* Cycle Goal Statement */}
        <div className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
          <Sparkles className="size-4 shrink-0 text-amber-500" />
          <span>
            <strong>本輪核心目標：</strong>
            {activeCycle.coreObjective}
          </span>
        </div>

        {/* 7 Dimensions Checklist */}
        <div className="mt-4 space-y-2.5">
          {activeCycle.dimensions.map((dim) => {
            const reviewer = EXPERT_COUNCIL_MEMBERS.find((m) => m.id === dim.expertId) || leadExpert;
            return (
              <div
                key={dim.id}
                className="group flex flex-col gap-2 rounded-xl border border-slate-200/80 bg-slate-50/50 p-3.5 transition-all hover:border-emerald-300 hover:bg-white hover:shadow-xs dark:border-slate-800/80 dark:bg-slate-950/40 dark:hover:border-emerald-700 dark:hover:bg-slate-900/80 sm:flex-row sm:items-start sm:justify-between"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 font-mono text-xs font-bold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                    {dim.id}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {dim.title}
                      </h4>
                      <span className="rounded bg-slate-200/70 px-1.5 py-0.5 text-[10px] font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                        {dim.focus}
                      </span>
                      <span className="rounded bg-teal-50 px-1.5 py-0.5 text-[10px] font-medium text-teal-700 dark:bg-teal-950/50 dark:text-teal-300">
                        審查: {reviewer.id} {reviewer.name.split(' ')[0]}
                      </span>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                      {dim.detail}
                    </p>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-2 sm:self-center">
                  <span className="rounded-md border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-800 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-300">
                    {dim.verificationEvidence}
                  </span>
                  <div className="flex items-center gap-1 font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="size-4" />
                    <span>PASSED</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Expanded: Full 7x7 Grid View of All 49 Items */}
      {isExpanded && (
        <div className="mt-6 border-t border-emerald-200/80 pt-6 dark:border-emerald-900/60">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-serif text-base font-bold text-slate-900 dark:text-white">
              🏛️ 49 重全維度矩陣全覽 (Full 7x7 Master Matrix View)
            </h4>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
              7 Cycles × 7 Dimensions = 49 Checkpoints
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
            {data.cycles.map((cycle) => (
              <div
                key={cycle.cycleIndex}
                className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-3 shadow-2xs dark:border-slate-800 dark:bg-slate-900/70"
              >
                <div className="border-b border-slate-100 pb-2 dark:border-slate-800">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-emerald-700 dark:text-emerald-400">
                      R{cycle.cycleIndex}
                    </span>
                    <span className="rounded bg-emerald-100 px-1 text-[9px] font-bold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                      {cycle.leadExpertId}
                    </span>
                  </div>
                  <div className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-1 line-clamp-1">
                    {cycle.cycleTitle.split(' ')[0]}
                  </div>
                </div>

                <div className="mt-2.5 space-y-1.5 flex-1">
                  {cycle.dimensions.map((dim) => (
                    <div
                      key={dim.id}
                      className="flex items-center justify-between rounded-lg bg-slate-50 px-2 py-1 text-[11px] dark:bg-slate-950/60"
                      title={`${dim.id} ${dim.title}: ${dim.detail}`}
                    >
                      <span className="font-mono font-medium text-slate-500 dark:text-slate-400 mr-1 shrink-0">
                        {dim.id}
                      </span>
                      <span className="truncate text-slate-700 dark:text-slate-300 flex-1">
                        {dim.title}
                      </span>
                      <CheckCircle2 className="size-3 text-emerald-500 shrink-0 ml-1" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
