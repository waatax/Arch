'use client';

import { Printer } from 'lucide-react';

export type PrintMode = 'full' | 'tables' | 'quiz';

const PRINT_MODES: { mode: PrintMode; label: string; hint: string }[] = [
  { mode: 'full', label: '完整講義', hint: '觀念解說 + 重點表 + 情境對話 + 例題與練習，適合課堂發放' },
  { mode: 'tables', label: '重點速記表', hint: '只輸出標題與重點整理表格，適合考前速刷與隨身讀' },
  { mode: 'quiz', label: '題目練習卷', hint: '只輸出例題、練習與歷屆題並附作答欄，詳解不印出' },
];

/** 在按下列印前設定列印模式；瀏覽器列印對話框關閉後自動還原。 */
function printWithMode(mode: PrintMode) {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  root.dataset.printMode = mode;
  const restore = () => {
    delete root.dataset.printMode;
    window.removeEventListener('afterprint', restore);
  };
  window.addEventListener('afterprint', restore);
  // Safari 舊版不觸發 afterprint，加上保險還原
  window.setTimeout(restore, 60000);
  window.print();
}

/** 螢幕專用：三種列印模式選擇列 */
export function PrintControls({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <button
        type="button"
        onClick={() => printWithMode('full')}
        className="print:hidden rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 px-3 py-0.5 text-xs font-mono font-bold text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
        title="以 A4 紙本格式列印或另存為 PDF 講義"
      >
        <Printer className="size-3 text-slate-600 dark:text-slate-300" />
        <span>列印講義 (A4)</span>
      </button>
    );
  }

  return (
    <section
      className="print:hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 sm:p-5 shadow-xs space-y-3"
      aria-labelledby="print-controls-title"
    >
      <div className="flex items-center gap-2">
        <span className="flex size-7 items-center justify-center rounded-lg bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-bold">
          <Printer className="size-3.5" />
        </span>
        <div>
          <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            A4 Handout Export
          </p>
          <h2 id="print-controls-title" className="font-serif text-lg font-bold text-slate-900 dark:text-white">
            列印複習講義（三種紙本版型）
          </h2>
        </div>
      </div>

      <div className="grid gap-2 sm:grid-cols-3">
        {PRINT_MODES.map(({ mode, label, hint }) => (
          <button
            key={mode}
            type="button"
            onClick={() => printWithMode(mode)}
            className="group flex h-full flex-col gap-1 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 px-3 py-2.5 text-left transition-colors hover:border-blue-500 hover:bg-blue-50 dark:hover:border-blue-500 dark:hover:bg-blue-950/40 cursor-pointer"
          >
            <span className="text-sm font-bold text-slate-900 dark:text-white">🖨️ {label}</span>
            <span className="text-[11px] leading-relaxed text-slate-600 dark:text-slate-400">{hint}</span>
          </button>
        ))}
      </div>

      <p className="text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
        列印小提示：紙張選 <strong>A4 直向</strong>、邊界選「預設」、勾選「背景圖形」可保留表格線；
        若要留頁碼與日期，請在列印對話框開啟「頁首及頁尾」。另存 PDF 亦適用同一版型。
      </p>
    </section>
  );
}

/** 列印專用：講義封面資訊列（僅第一頁） */
export function PrintHandoutCover({
  subjectTitle,
  subjectCategory,
  chapterNo,
  totalChapters,
  topicTitle,
  topicDesc,
  conceptCount,
  tableCount,
  questionCount,
  examHitRate,
}: {
  subjectTitle: string;
  subjectCategory: string;
  chapterNo: number;
  totalChapters: number;
  topicTitle: string;
  topicDesc?: string;
  conceptCount: number;
  tableCount: number;
  questionCount: number;
  examHitRate?: number;
}) {
  return (
    <div className="print-cover print-only" aria-hidden="true">
      <div className="print-cover-kicker">
        Arch 統測複習講義 ｜ {subjectCategory} ｜ {subjectTitle} ｜ 第 {chapterNo} / {totalChapters} 章
      </div>
      <div className="print-cover-title">{topicTitle}</div>
      {topicDesc ? <div className="print-cover-meta">{topicDesc}</div> : null}
      <div className="print-cover-meta">
        本講義收錄 <strong>{conceptCount}</strong> 個核心觀念、<strong>{tableCount}</strong> 張重點整理表、
        <strong>{questionCount}</strong> 題例題與練習
        {examHitRate ? ` ｜ 統測考點命中率 ${'★'.repeat(examHitRate)}${'☆'.repeat(Math.max(0, 5 - examHitRate))}` : ''}
      </div>
      <div className="print-cover-fields">
        <span>班級：</span>
        <span>座號：</span>
        <span>姓名：</span>
        <span>複習日期：</span>
      </div>
    </div>
  );
}

/** 列印專用：頁末筆記欄與出處 */
export function PrintHandoutColophon({
  subjectTitle,
  topicTitle,
  sourceNote,
}: {
  subjectTitle: string;
  topicTitle: string;
  sourceNote?: string;
}) {
  return (
    <div className="print-only" aria-hidden="true">
      <div className="print-note-lines">
        <strong style={{ fontSize: '9pt' }}>訂正與筆記欄</strong>
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
      <div className="print-colophon">
        Arch 開放學習平台 ｜ {subjectTitle} ｜ {topicTitle} ｜ 依當年度技專校院入學測驗中心公告之考試大綱與十二年國教技術型高中英文課綱編寫。
        {sourceNote ? ` ${sourceNote}` : ''}
      </div>
    </div>
  );
}
