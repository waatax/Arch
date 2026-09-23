'use client';

import React, { useState } from 'react';
import { CheckSquare, Square } from 'lucide-react';

interface SemesterChecklistProps {
  checklist: string[];
}

export default function SemesterChecklist({ checklist }: SemesterChecklistProps) {
  const [checkedIndices, setCheckedIndices] = useState<Set<number>>(new Set());

  const toggleCheck = (index: number) => {
    const next = new Set(checkedIndices);
    if (next.has(index)) {
      next.delete(index);
    } else {
      next.add(index);
    }
    setCheckedIndices(next);
  };

  const completedCount = checkedIndices.size;
  const totalCount = checklist.length;
  const percent = Math.round((completedCount / totalCount) * 100);

  return (
    <section
      id="pre-exam-checklist"
      className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xs space-y-5 print:border print:border-slate-400 print:p-4 print:break-inside-avoid print:shadow-none"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex size-7 items-center justify-center rounded-lg bg-indigo-600 text-white text-xs font-bold">
              ✓
            </span>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              10-Minute Pre-Exam Final Check
            </span>
          </div>
          <h3 className="mt-1 font-serif text-2xl font-bold text-slate-900 dark:text-white">
            考前 10 分鐘核心概念自我檢核清單
          </h3>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            逐項自檢本學期考點；確認能閉眼清晰說出背後原理與計算口訣者，請勾選標記。
          </p>
        </div>

        {/* Progress Pill */}
        <div className="print:hidden flex items-center gap-3 bg-slate-50 dark:bg-slate-800 px-4 py-2 rounded-2xl border border-slate-200 dark:border-slate-700">
          <div className="text-right">
            <span className="block text-[10px] font-mono text-slate-400">掌握進度</span>
            <span className="text-sm font-mono font-bold text-indigo-600 dark:text-indigo-400">
              {completedCount} / {totalCount} ({percent}%)
            </span>
          </div>
          <div className="w-16 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-indigo-600 transition-all duration-300"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Checklist Grid */}
      <div className="grid gap-2.5">
        {checklist.map((item, index) => {
          const isChecked = checkedIndices.has(index);
          return (
            <div
              key={index}
              onClick={() => toggleCheck(index)}
              className={`flex items-start gap-3 p-3.5 rounded-2xl border transition-all cursor-pointer select-none print:border-none print:p-1.5 ${
                isChecked
                  ? 'border-indigo-300 bg-indigo-50/50 dark:border-indigo-800 dark:bg-indigo-950/30 text-indigo-950 dark:text-indigo-200'
                  : 'border-slate-100 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-800/30 text-slate-800 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <button
                type="button"
                className="shrink-0 mt-0.5 text-indigo-600 dark:text-indigo-400"
                aria-label={`勾選第 ${index + 1} 項`}
              >
                {isChecked ? (
                  <CheckSquare className="size-4.5 text-indigo-600 fill-indigo-100 dark:fill-indigo-950" />
                ) : (
                  <Square className="size-4.5 text-slate-400" />
                )}
              </button>
              <span className={`text-xs sm:text-sm font-sans leading-relaxed ${isChecked ? 'font-bold' : ''}`}>
                {item}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
