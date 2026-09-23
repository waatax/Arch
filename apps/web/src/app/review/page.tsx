import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Printer, ArrowRight } from 'lucide-react';
import { allSubjectSemestersMeta, allSemesterReviews } from '@/data/semesterReviews';

export const metadata: Metadata = {
  title: '科目學期考前筆記大複習與 PDF 下載手冊 ｜ Arch V9.00',
  description: '依據 108 課綱與四技二專統測歷年考題，依照科目每個學期編排之教科書級考前筆記大複習手冊，支援一鍵轉存 A4 向量 PDF 供下載列印離線學習。',
};

export default function ReviewIndexPage() {
  const totalSemesters = allSemesterReviews.length;
  const totalChapters = allSemesterReviews.reduce((acc, r) => acc + r.chapters.length, 0);
  const totalPastQuestions = allSemesterReviews.reduce((acc, r) => acc + r.curatedPastQuestions.length, 0);

  // Group by category
  const categories = [
    { id: 'prof-1', title: '專業科目（一）', desc: '基礎工程力學、材料與試驗（統測專一 100 分核心考科）' },
    { id: 'prof-2', title: '專業科目（二）', desc: '測量實習、製圖實習（統測專二 100 分核心考科）' },
    { id: 'common', title: '共同科目', desc: '數學 C、國語文、英語文（統測共同核心考科）' },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 space-y-12 min-h-screen">
      {/* Hero Header */}
      <header className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-10 shadow-xs space-y-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-blue-600/10 px-3 py-1 text-xs font-mono font-bold text-blue-700 dark:text-blue-300 border border-blue-600/20">
            108 課綱技術型高中土木建築群
          </span>
          <span className="rounded-full bg-emerald-600/10 px-3 py-1 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-300 border border-emerald-600/20">
            歷年統測真題五步 SOP 破題
          </span>
          <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-xs font-mono font-bold text-indigo-700 dark:text-indigo-300 border border-indigo-600/20">
            🖨️ 支援 A4 向量 PDF 列印
          </span>
        </div>

        <div className="space-y-3 max-w-3xl">
          <h1 className="font-serif text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-5xl">
            科目學期考前筆記大複習
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            依照技術型高中三年各學期教學進度獨立編排之「教科書級考前衝刺總複習手冊」。結合觀念精講、公式定理速查、高工必背對照表、致命陷阱避坑與歷屆統測真題五步 SOP 詳解，並提供專屬 A4 排版支援直接轉存 PDF 下載列印。
          </p>
        </div>

        {/* Global Stats Metrics */}
        <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg font-mono text-xs">
          <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/60 p-3.5 border border-slate-200 dark:border-slate-800">
            <span className="text-slate-400 block text-[10px]">學期總複習頁</span>
            <span className="text-xl font-bold text-slate-900 dark:text-white">{totalSemesters} 個學期</span>
          </div>
          <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/60 p-3.5 border border-slate-200 dark:border-slate-800">
            <span className="text-slate-400 block text-[10px]">精選核心章節</span>
            <span className="text-xl font-bold text-blue-600 dark:text-blue-400">{totalChapters} 章精講</span>
          </div>
          <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/60 p-3.5 border border-slate-200 dark:border-slate-800">
            <span className="text-slate-400 block text-[10px]">統測 SOP 詳解</span>
            <span className="text-xl font-bold text-emerald-600 dark:text-emerald-400">{totalPastQuestions} 題真題</span>
          </div>
        </div>
      </header>

      {/* Categories & Subject Semesters Grid */}
      <div className="space-y-12">
        {categories.map((category) => {
          const subjects = allSubjectSemestersMeta.filter(
            (s) => s.category === category.title
          );
          if (subjects.length === 0) return null;

          return (
            <section key={category.id} className="space-y-6">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
                <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold block">
                  Curriculum Domain
                </span>
                <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-white mt-1">
                  {category.title}
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {category.desc}
                </p>
              </div>

              {/* Subjects in this category */}
              <div className="grid gap-6 md:grid-cols-2">
                {subjects.map((subject) => (
                  <article
                    key={subject.subjectSlug}
                    className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-7 shadow-xs space-y-5 flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      {/* Subject Meta */}
                      <div className="flex items-center justify-between">
                        <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                          {subject.subjectTitle}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          {subject.semesters.length} 個學期專冊
                        </span>
                      </div>

                      <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white">
                        {subject.subjectTitle} 學期總複習
                      </h3>

                      {/* Semesters list */}
                      <div className="grid gap-3 pt-1">
                        {subject.semesters.map((sem) => (
                          <div
                            key={sem.code}
                            className="p-4 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 hover:border-blue-400 dark:hover:border-blue-600 transition-all space-y-2 group"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-mono font-bold text-xs text-blue-600 dark:text-blue-400">
                                {sem.title} (高{sem.gradeLevel === 10 ? '一' : sem.gradeLevel === 11 ? '二' : '三'})
                              </span>
                              <span className="text-[11px] font-mono text-amber-600 dark:text-amber-400 font-bold">
                                {sem.examWeight}
                              </span>
                            </div>

                            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                              {sem.scope}
                            </p>

                            <div className="flex items-center justify-between pt-2 border-t border-slate-200/60 dark:border-slate-700/60 text-xs">
                              <span className="text-[11px] font-mono text-slate-400">
                                含 {sem.chapterCount} 章考點 ｜ {sem.questionCount} 題真題 SOP
                              </span>
                              <Link
                                href={`/review/${subject.subjectSlug}/${sem.code}`}
                                className="inline-flex items-center gap-1 font-mono font-bold text-blue-600 dark:text-blue-400 group-hover:underline"
                              >
                                <span>閱讀講義 & PDF</span>
                                <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-xs font-mono">
                      <Link
                        href={`/subjects/${subject.subjectSlug}`}
                        className="text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
                      >
                        ← 返回科目知識點星圖
                      </Link>
                      <Link
                        href={`/review/${subject.subjectSlug}/${subject.semesters[0]?.code}`}
                        className="font-bold text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        從第 1 學期開始複習 →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* PDF & Printing Instructions Banner */}
      <section className="rounded-3xl bg-slate-950 text-white p-8 sm:p-10 space-y-4">
        <div className="flex items-center gap-2">
          <Printer className="size-5 text-blue-400" />
          <h3 className="font-serif text-2xl font-bold">如何將總複習筆記轉存為 PDF 列印學習？</h3>
        </div>
        <p className="text-slate-300 text-sm leading-relaxed max-w-3xl">
          進入各學期的深度複習頁面後，點選頂部「一鍵下載 / 列印 PDF」或「🖨️ 完整複習手冊」按鈕，系統將自動套用專屬 A4 印刷樣式，去除瀏覽器導覽雜訊與背景色塊，以高解析度向量格式呈現公式、表格與作答欄。您可以在瀏覽器列印對話框中選擇「另存為 PDF (Save as PDF)」或直接輸出至實體印表機。
        </p>
        <div className="grid gap-3 sm:grid-cols-3 pt-2 text-xs font-mono">
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
            <strong className="text-blue-400 block mb-1">1. 紙張尺寸</strong>
            <span>選擇標準 A4 直向 (Portrait)</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
            <strong className="text-emerald-400 block mb-1">2. 邊距設定</strong>
            <span>選擇「預設」或「自訂 15mm」</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
            <strong className="text-amber-400 block mb-1">3. 背景圖形</strong>
            <span>勾選「背景圖形」以保留表格網格線條</span>
          </div>
        </div>
      </section>
    </div>
  );
}
