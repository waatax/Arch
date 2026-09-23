'use client';

import React, { useState } from 'react';
import { Printer, FileDown, BookOpen, TableProperties, PenTool } from 'lucide-react';

export type SemesterPrintMode = 'full' | 'tables' | 'quiz';

interface SemesterPrintToolbarProps {
  subjectTitle: string;
  semesterTitle: string;
  category: string;
  chapterCount: number;
  questionCount: number;
}

export default function SemesterPrintToolbar({
  subjectTitle,
  semesterTitle,
  category,
  chapterCount,
  questionCount,
}: SemesterPrintToolbarProps) {
  const [activeMode, setActiveMode] = useState<SemesterPrintMode>('full');
  const [isExporting, setIsExporting] = useState(false);

  const handlePrint = (mode: SemesterPrintMode) => {
    setActiveMode(mode);
    setIsExporting(true);
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      root.dataset.printMode = mode;
      const restore = () => {
        delete root.dataset.printMode;
        setIsExporting(false);
        window.removeEventListener('afterprint', restore);
      };
      window.addEventListener('afterprint', restore);
      window.setTimeout(restore, 60000);
      window.print();
    }
  };

  return (
    <div className="print:hidden space-y-4 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-7 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex size-7 items-center justify-center rounded-lg bg-blue-600 text-white text-xs font-bold shadow-xs">
              <Printer className="size-4" />
            </span>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              A4 Printable Handout & PDF Export
            </span>
          </div>
          <h3 className="mt-1 font-serif text-xl font-bold text-slate-900 dark:text-white">
            轉存 PDF 講義與紙本列印
          </h3>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            {category} ｜ {subjectTitle} ｜ {semesterTitle} ｜ 共收錄 {chapterCount} 章核心考點與 {questionCount} 道統測真題 SOP 詳解
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handlePrint('full')}
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 text-xs font-bold font-mono transition-all shadow-sm cursor-pointer"
          >
            <FileDown className="size-3.5" />
            <span>一鍵下載 / 列印 PDF</span>
          </button>
        </div>
      </div>

      {/* 3 Print Layout Options */}
      <div className="grid gap-3 sm:grid-cols-3">
        <button
          type="button"
          onClick={() => handlePrint('full')}
          className={`flex flex-col text-left p-3.5 rounded-2xl border transition-all cursor-pointer ${
            activeMode === 'full'
              ? 'border-blue-500 bg-blue-50/60 dark:bg-blue-950/40 text-blue-950 dark:text-blue-200 shadow-xs'
              : 'border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 hover:border-slate-300 dark:hover:border-slate-700'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white">
              <BookOpen className="size-3.5 text-blue-600 dark:text-blue-400" />
              🖨️ 完整複習講義
            </span>
            <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400 font-bold">全內容</span>
          </div>
          <p className="mt-1 text-[11px] leading-relaxed text-slate-600 dark:text-slate-400">
            觀念筆記 + 必背表格 + 陷阱突破 + 統測 SOP 詳解 + 考前檢核，適合全面複習。
          </p>
        </button>

        <button
          type="button"
          onClick={() => handlePrint('tables')}
          className={`flex flex-col text-left p-3.5 rounded-2xl border transition-all cursor-pointer ${
            activeMode === 'tables'
              ? 'border-blue-500 bg-blue-50/60 dark:bg-blue-950/40 text-blue-950 dark:text-blue-200 shadow-xs'
              : 'border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 hover:border-slate-300 dark:hover:border-slate-700'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white">
              <TableProperties className="size-3.5 text-emerald-600 dark:text-emerald-400" />
              ⚡ 考前 30 分鐘速記表
            </span>
            <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">精華版</span>
          </div>
          <p className="mt-1 text-[11px] leading-relaxed text-slate-600 dark:text-slate-400">
            只列印章節核心公式與結構化必背對照表格，方便考前快速刷題複習。
          </p>
        </button>

        <button
          type="button"
          onClick={() => handlePrint('quiz')}
          className={`flex flex-col text-left p-3.5 rounded-2xl border transition-all cursor-pointer ${
            activeMode === 'quiz'
              ? 'border-blue-500 bg-blue-50/60 dark:bg-blue-950/40 text-blue-950 dark:text-blue-200 shadow-xs'
              : 'border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 hover:border-slate-300 dark:hover:border-slate-700'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white">
              <PenTool className="size-3.5 text-amber-600 dark:text-amber-400" />
              📝 題目實戰練習卷
            </span>
            <span className="text-[10px] font-mono text-amber-600 dark:text-amber-400 font-bold">測驗卷</span>
          </div>
          <p className="mt-1 text-[11px] leading-relaxed text-slate-600 dark:text-slate-400">
            僅輸出題目與專屬空白作答欄，答案與 SOP 詳解自動隱藏，供自我測驗。
          </p>
        </button>
      </div>

      <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 pt-1">
        <span>
          💡 <strong>列印提示</strong>：列印設定請選「A4 直向」、邊距選「預設」，勾選「背景圖形」以保留表格網格線條。
        </span>
        <span className="font-mono text-blue-600 dark:text-blue-400 font-bold">
          {isExporting ? '⏳ 正在開啟列印與轉存視窗...' : '支援 Chrome / Edge 原生另存 PDF'}
        </span>
      </div>
    </div>
  );
}
