'use client';

import React from 'react';
import { Star, Hash, AlertTriangle, HelpCircle, CheckSquare } from 'lucide-react';
import { SemesterChapterSummary } from '@/data/semesterReviews/types';

interface SemesterTableOfContentsProps {
  chapters: SemesterChapterSummary[];
  trapsCount: number;
  questionsCount: number;
  checklistCount: number;
}

export default function SemesterTableOfContents({
  chapters,
  trapsCount,
  questionsCount,
  checklistCount,
}: SemesterTableOfContentsProps) {
  return (
    <nav
      className="print:hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 shadow-xs space-y-4"
      aria-label="章節考點快速導覽"
    >
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Hash className="size-4 text-blue-600 dark:text-blue-400" />
          <h3 className="font-serif text-base font-bold text-slate-900 dark:text-white">
            學期考點目錄導航
          </h3>
        </div>
        <span className="text-[11px] font-mono text-slate-400">
          共 {chapters.length} 章
        </span>
      </div>

      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {chapters.map((ch) => (
          <a
            key={ch.chapterNo}
            href={`#chapter-${ch.chapterNo}`}
            className="group flex flex-col justify-between p-3 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-600 bg-slate-50/50 dark:bg-slate-800/30 transition-all text-xs"
          >
            <div className="flex items-start justify-between gap-1 mb-1">
              <span className="font-mono font-bold text-blue-600 dark:text-blue-400">
                第 {ch.chapterNo} 章
              </span>
              <div className="flex items-center gap-0.5 text-amber-500 shrink-0" title={`出題命中率：${ch.examFrequency} 顆星`}>
                {Array.from({ length: ch.examFrequency }).map((_, i) => (
                  <Star key={i} className="size-2.5 fill-current" />
                ))}
              </div>
            </div>
            <span className="font-serif font-bold text-slate-800 dark:text-slate-200 line-clamp-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {ch.title}
            </span>
          </a>
        ))}
      </div>

      {/* Quick Jump Anchors for Traps, Questions, Checklist */}
      <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
        <a
          href="#fatal-traps"
          className="inline-flex items-center gap-1.5 rounded-lg bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 px-3 py-1.5 font-bold hover:bg-rose-100 dark:hover:bg-rose-900/40 transition-colors border border-rose-200 dark:border-rose-900/50"
        >
          <AlertTriangle className="size-3 text-rose-600" />
          <span>⚠️ 統測致命陷阱 ({trapsCount})</span>
        </a>
        <a
          href="#worked-questions"
          className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 px-3 py-1.5 font-bold hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition-colors border border-emerald-200 dark:border-emerald-900/50"
        >
          <HelpCircle className="size-3 text-emerald-600" />
          <span>🎯 歷屆真題五步 SOP ({questionsCount})</span>
        </a>
        <a
          href="#pre-exam-checklist"
          className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 px-3 py-1.5 font-bold hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-colors border border-indigo-200 dark:border-indigo-900/50"
        >
          <CheckSquare className="size-3 text-indigo-600" />
          <span>✅ 考前 10 分鐘自主檢核 ({checklistCount})</span>
        </a>
      </div>
    </nav>
  );
}
