'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Zap, AlertCircle } from 'lucide-react';
import { SemesterWorkedExample as SemesterWorkedExampleType } from '@/data/semesterReviews/types';

interface SemesterWorkedExampleProps {
  example: SemesterWorkedExampleType;
  index: number;
}

export default function SemesterWorkedExample({ example, index }: SemesterWorkedExampleProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <article
      className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7 shadow-xs space-y-5 print:border print:border-slate-400 print:p-4 print:break-inside-avoid print:shadow-none"
    >
      {/* Header Info */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3 print:pb-2">
        <div className="flex items-center gap-2">
          <span className="flex size-6 items-center justify-center rounded-lg bg-blue-600 text-white font-mono text-xs font-bold print:border print:border-black print:bg-transparent print:text-black">
            {index + 1}
          </span>
          <span className="rounded-full bg-blue-50 dark:bg-blue-950/60 px-2.5 py-0.5 text-xs font-mono font-bold text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900/40 print:border-none print:p-0">
            {example.id}
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
            {example.examPaper} ｜ 第 {example.questionNo} 題
          </span>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="print:hidden inline-flex items-center gap-1 text-xs font-mono font-bold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
        >
          <span>{isOpen ? '收起詳解' : '查看五步 SOP 詳解'}</span>
          {isOpen ? <ChevronUp className="size-3.5" /> : <ChevronDown className="size-3.5" />}
        </button>
      </div>

      {/* Stem & Options */}
      <div className="space-y-4">
        <div className="text-sm sm:text-base font-serif font-bold text-slate-900 dark:text-white leading-relaxed">
          {example.stem}
        </div>

        {/* Options Grid */}
        <div className="grid gap-2 sm:grid-cols-2 text-xs sm:text-sm font-sans">
          {(['A', 'B', 'C', 'D'] as const).map((opt) => (
            <div
              key={opt}
              className={`p-3 rounded-xl border flex items-start gap-2.5 transition-colors ${
                isOpen && example.answer === opt
                  ? 'border-emerald-500 bg-emerald-50/60 dark:bg-emerald-950/30 text-emerald-950 dark:text-emerald-200 font-bold'
                  : 'border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300'
              }`}
            >
              <span
                className={`flex size-5 items-center justify-center rounded-full text-xs font-mono shrink-0 font-bold ${
                  isOpen && example.answer === opt
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                }`}
              >
                {opt}
              </span>
              <span className="leading-snug pt-0.5">{example.options[opt]}</span>
            </div>
          ))}
        </div>

        {/* Print-Only Answer Writing Box for Quiz Mode */}
        <div className="print-answer-box" aria-hidden="true">
          <div className="text-[10pt] font-mono text-slate-500 mb-1">【考生手寫作答與計算欄】</div>
          <div className="border border-dashed border-slate-400 h-24 rounded-lg p-2 text-slate-400 text-[9pt]">
            選擇答案：［　］｜ 計算推導：
          </div>
        </div>
      </div>

      {/* Detailed SOP Solution (Visible in Full Mode, hidden in Quiz Mode via CSS) */}
      <div className={`space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800 ${isOpen ? 'block' : 'hidden print:block'}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex size-5 items-center justify-center rounded-full bg-emerald-600 text-white text-xs font-bold">
              ✓
            </span>
            <span className="text-xs font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              官方正解：({example.answer})
            </span>
          </div>
          <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
            Five-Step SOP Breakdown
          </span>
        </div>

        {/* 5-Step SOP Flow */}
        <div className="space-y-2.5">
          {example.sopSteps.map((step) => (
            <div
              key={step.stepNo}
              className="rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 p-3 text-xs space-y-1"
            >
              <div className="flex items-center gap-2 font-mono font-bold text-blue-600 dark:text-blue-400">
                <span className="rounded bg-blue-100 dark:bg-blue-900/60 px-1.5 py-0.5 text-[10px]">
                  步驟 {step.stepNo}
                </span>
                <span>{step.title}</span>
              </div>
              <p className="font-sans text-slate-700 dark:text-slate-300 leading-relaxed pl-1">
                {step.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Examiner Trap & Quick Shortcut */}
        <div className="grid gap-3 sm:grid-cols-2 text-xs pt-1">
          <div className="p-3.5 rounded-2xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-100 dark:border-rose-900/40 text-slate-700 dark:text-slate-300 space-y-1">
            <div className="flex items-center gap-1.5 font-mono font-bold text-rose-800 dark:text-rose-300">
              <AlertCircle className="size-3.5 text-rose-600" />
              <span>命題教授設陷心理剖析</span>
            </div>
            <p className="font-sans leading-relaxed text-[11px] text-rose-950 dark:text-rose-200">
              {example.examinerTrapNotes}
            </p>
          </div>

          <div className="p-3.5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40 text-slate-700 dark:text-slate-300 space-y-1">
            <div className="flex items-center gap-1.5 font-mono font-bold text-amber-800 dark:text-amber-300">
              <Zap className="size-3.5 text-amber-600" />
              <span>學霸秒殺心智模型</span>
            </div>
            <p className="font-sans leading-relaxed text-[11px] text-amber-950 dark:text-amber-200">
              {example.quickShortcut}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
