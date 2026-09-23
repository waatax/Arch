import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { 
  allSemesterReviews, 
  getSemesterReview, 
  getSubjectSemesters 
} from '@/data/semesterReviews';
import SemesterPrintToolbar from '@/components/review/SemesterPrintToolbar';
import SemesterTableOfContents from '@/components/review/SemesterTableOfContents';
import SemesterWorkedExample from '@/components/review/SemesterWorkedExample';
import SemesterChecklist from '@/components/review/SemesterChecklist';
import { 
  Star, 
  AlertTriangle, 
  CheckCircle2, 
  TrendingUp, 
  ChevronRight,
  ArrowLeft
} from 'lucide-react';

export function generateStaticParams() {
  return allSemesterReviews.map((r) => ({
    subject: r.subjectSlug,
    semester: r.semesterCode,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ subject: string; semester: string }>;
}): Promise<Metadata> {
  const { subject: subjectSlug, semester: semesterCode } = await params;
  const review = getSemesterReview(subjectSlug, semesterCode);
  if (!review) return { title: 'Review Not Found' };

  return {
    title: `${review.subjectTitle} ${review.semesterTitle} 考前筆記大複習手冊 (A4 PDF) ｜ Arch V9.00`,
    description: `${review.curriculumScope}。涵蓋觀念精講、公式定理速查、高工必背對照表、致命陷阱避坑與歷屆統測真題五步 SOP 詳解。`,
  };
}

export default async function SemesterReviewDetailPage({
  params,
}: {
  params: Promise<{ subject: string; semester: string }>;
}) {
  const { subject: subjectSlug, semester: semesterCode } = await params;
  const review = getSemesterReview(subjectSlug, semesterCode);
  if (!review) notFound();

  const subjectMeta = getSubjectSemesters(subjectSlug);
  const otherSemesters = subjectMeta?.semesters ?? [];

  return (
    <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-10 space-y-10 min-h-screen">
      {/* ── 列印專用講義封面資訊欄（紙本列印時自動出現在第一頁最上方） ── */}
      <div className="print-cover print-only" aria-hidden="true">
        <div className="print-cover-kicker">
          Arch 108 課綱技術型高中統測複習講義 ｜ {review.category} ｜ {review.subjectTitle} ｜ {review.semesterTitle}
        </div>
        <div className="print-cover-title">
          {review.subjectTitle} 考前衝刺筆記大複習 ({review.semesterTitle})
        </div>
        <div className="print-cover-meta">
          課綱範圍：{review.curriculumScope} ｜ 統測比重：{review.examAnalysis.examWeight}
        </div>
        <div className="print-cover-meta">
          本講義收錄 <strong>{review.chapters.length}</strong> 章核心觀念、
          <strong>{review.chapters.reduce((acc, c) => acc + (c.tables?.length ?? 0), 0)}</strong> 張必背重點表格、
          <strong>{review.curatedPastQuestions.length}</strong> 道統測真題五步 SOP 詳解
        </div>
        <div className="print-cover-fields">
          <span>學校：_____________</span>
          <span>班級：_____________</span>
          <span>座號：_______</span>
          <span>姓名：_____________</span>
          <span>複習日期：___年___月___日</span>
        </div>
      </div>

      {/* ── 螢幕專用麵包屑與回航 ── */}
      <div className="print:hidden flex items-center justify-between text-xs font-mono text-slate-500">
        <div className="flex items-center gap-1.5">
          <Link href="/review" className="hover:text-blue-600 transition-colors">
            總複習大廳
          </Link>
          <ChevronRight className="size-3 text-slate-400" />
          <Link href={`/subjects/${review.subjectSlug}`} className="hover:text-blue-600 transition-colors">
            {review.subjectTitle}
          </Link>
          <ChevronRight className="size-3 text-slate-400" />
          <span className="text-slate-900 dark:text-white font-bold">{review.semesterTitle}</span>
        </div>

        <Link
          href={`/subjects/${review.subjectSlug}`}
          className="inline-flex items-center gap-1 text-slate-500 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="size-3" />
          <span>返回知識點星圖</span>
        </Link>
      </div>

      {/* ── 螢幕專用主標題 Hero ── */}
      <header className="print:hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-9 shadow-xs space-y-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-blue-600/10 px-3 py-1 text-xs font-mono font-bold text-blue-700 dark:text-blue-300 border border-blue-600/20">
            {review.category}
          </span>
          <span className="rounded-full bg-emerald-600/10 px-3 py-1 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-300 border border-emerald-600/20">
            高{review.gradeLevel === 10 ? '一' : review.gradeLevel === 11 ? '二' : '三'}
          </span>
          <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-xs font-mono text-slate-600 dark:text-slate-400">
            {review.chapters.length} 章核心考點
          </span>
        </div>

        <div className="space-y-2">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            {review.subjectTitle} {review.semesterTitle}
          </h1>
          <p className="font-serif text-lg text-blue-600 dark:text-blue-400 font-bold">
            {review.subtitle}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 pt-1">
            <strong>108 課綱對應範圍：</strong>{review.curriculumScope}
          </p>
        </div>

        {/* Semester switcher buttons if multiple semesters exist */}
        {otherSemesters.length > 1 && (
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
            <span className="text-[11px] font-mono text-slate-400 block mb-2">切換學期：</span>
            <div className="flex flex-wrap gap-2">
              {otherSemesters.map((sem) => {
                const isActive = sem.code === review.semesterCode;
                return (
                  <Link
                    key={sem.code}
                    href={`/review/${review.subjectSlug}/${sem.code}`}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {sem.title}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* ── 列印與 PDF 匯出工具列 ── */}
      <SemesterPrintToolbar
        subjectTitle={review.subjectTitle}
        semesterTitle={review.semesterTitle}
        category={review.category}
        chapterCount={review.chapters.length}
        questionCount={review.curatedPastQuestions.length}
      />

      {/* ── 浮動章節目錄導覽 ── */}
      <SemesterTableOfContents
        chapters={review.chapters}
        trapsCount={review.highFrequencyTraps.length}
        questionsCount={review.curatedPastQuestions.length}
        checklistCount={review.preExamChecklist.length}
      />

      {/* ── 第一大區塊：108 課綱與統測命題趨勢全景雷達 ── */}
      <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xs space-y-5 print:border print:border-slate-400 print:p-4 print:break-inside-avoid print:shadow-none">
        <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
          <span className="flex size-7 items-center justify-center rounded-lg bg-blue-600 text-white text-xs font-bold">
            <TrendingUp className="size-4" />
          </span>
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Exam Radar & Weight
            </span>
            <h2 className="font-serif text-xl font-bold text-slate-900 dark:text-white">
              統測命題趨勢與得分全景雷達
            </h2>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 text-xs">
          <div className="p-4 rounded-2xl bg-blue-50/50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40 space-y-2">
            <strong className="text-blue-800 dark:text-blue-300 font-mono text-sm block">
              📊 統測配分佔比
            </strong>
            <p className="font-serif text-base font-bold text-blue-950 dark:text-blue-200">
              {review.examAnalysis.examWeight}
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[11px]">
              {review.examAnalysis.targetScoreAdvice}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 space-y-2">
            <strong className="text-slate-800 dark:text-slate-200 font-mono text-sm block">
              🎯 近年命題演變脈絡
            </strong>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              {review.examAnalysis.recentTrends}
            </p>
          </div>
        </div>

        {/* Core Themes Chips */}
        <div className="space-y-2 pt-2">
          <span className="text-slate-400 font-mono text-[11px] font-bold block">
            本學期五大必考命題主題群：
          </span>
          <div className="grid gap-2">
            {review.examAnalysis.coreExamThemes.map((theme, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 bg-slate-50/70 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800/80"
              >
                <span className="size-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                <span className="leading-relaxed">{theme}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 第二大區塊：各章節教科書級考前筆記大整理 ── */}
      <section className="space-y-8">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold block">
            Chapter Notes & Formulas
          </span>
          <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-white mt-1">
            章節深度考前筆記與核心定理
          </h2>
        </div>

        {review.chapters.map((chapter) => (
          <article
            key={chapter.chapterNo}
            id={`chapter-${chapter.chapterNo}`}
            className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-xs space-y-6 print:border print:border-slate-400 print:p-4 print:break-inside-avoid print:shadow-none"
          >
            {/* Chapter Header */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div>
                <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400 block mb-0.5">
                  CHAPTER {chapter.chapterNo}
                </span>
                <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
                  第 {chapter.chapterNo} 章：{chapter.title}
                </h3>
              </div>
              <div className="flex items-center gap-1 text-amber-500 font-mono text-xs" title={`統測考點命中率：${chapter.examFrequency} 顆星`}>
                <span className="text-slate-400 mr-1 text-[11px]">統測命中率</span>
                {Array.from({ length: chapter.examFrequency }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-current" />
                ))}
              </div>
            </div>

            {/* Core Concepts */}
            <div className="space-y-4">
              {chapter.coreConcepts.map((concept, cIdx) => (
                <div
                  key={cIdx}
                  className="rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 p-4 sm:p-5 space-y-2.5"
                >
                  <h4 className="font-serif font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="flex size-5 items-center justify-center rounded-md bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 text-[10px] font-mono">
                      {cIdx + 1}
                    </span>
                    {concept.heading}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                    {concept.explanation}
                  </p>
                  <ul className="space-y-1.5 pt-1">
                    {concept.keyPoints.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <span className="text-blue-600 dark:text-blue-400 font-bold shrink-0">•</span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Formula Card */}
            {chapter.formulaCard && (
              <div className="rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/50 p-4 sm:p-5 space-y-3 print:bg-white print:border-black">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300">
                    ⚡ 核心公式速查卡 (Formula Card)
                  </span>
                  <span className="text-[10px] font-mono text-amber-700 dark:text-amber-400">
                    標準單位：[{chapter.formulaCard.unit}]
                  </span>
                </div>

                <div className="rounded-xl bg-white dark:bg-slate-900 p-3.5 border border-amber-200 dark:border-amber-900/40 text-center overflow-x-auto print:border-none print:p-1">
                  <code className="font-mono text-sm sm:text-base font-bold text-amber-950 dark:text-amber-200">
                    {chapter.formulaCard.formula}
                  </code>
                </div>

                <div className="space-y-1 text-xs">
                  <p className="text-amber-900 dark:text-amber-200">
                    <strong>物理意涵：</strong>{chapter.formulaCard.meaning}
                  </p>
                  <p className="text-rose-800 dark:text-rose-300 text-[11px]">
                    <strong>⚠️ 計算盲點與警告：</strong>{chapter.formulaCard.cautions}
                  </p>
                </div>
              </div>
            )}

            {/* Structured Comparison Tables */}
            {chapter.tables && chapter.tables.length > 0 && (
              <div className="space-y-4">
                {chapter.tables.map((table, tIdx) => (
                  <div key={tIdx} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-blue-600" />
                      <h4 className="font-serif font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                        {table.title}
                      </h4>
                    </div>

                    <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 print:overflow-visible">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-slate-100 dark:bg-slate-800/80 font-mono text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700">
                          <tr>
                            {table.headers.map((h, hIdx) => (
                              <th key={hIdx} className="px-3.5 py-2.5 font-bold whitespace-nowrap">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900">
                          {table.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                              {row.map((cell, cIdx) => (
                                <td
                                  key={cIdx}
                                  className={`px-3.5 py-2.5 text-slate-700 dark:text-slate-300 leading-relaxed ${
                                    cIdx === 0 ? 'font-bold text-slate-900 dark:text-white' : ''
                                  }`}
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Chapter Checklist */}
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 space-y-1.5 text-xs">
              <span className="font-mono font-bold text-slate-500 block text-[11px]">
                章節掌握度檢定點：
              </span>
              <div className="grid gap-1">
                {chapter.mustMasterChecklist.map((item, mIdx) => (
                  <div key={mIdx} className="flex items-start gap-1.5 text-slate-600 dark:text-slate-400">
                    <CheckCircle2 className="size-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* ── 第三大區塊：統測致命陷阱避坑指南 ── */}
      <section
        id="fatal-traps"
        className="rounded-3xl border border-rose-200 dark:border-rose-900/50 bg-rose-50/40 dark:bg-rose-950/20 p-6 sm:p-8 shadow-xs space-y-6 print:border print:border-slate-400 print:p-4 print:break-inside-avoid print:shadow-none"
      >
        <div className="flex items-center gap-2 border-b border-rose-200/60 dark:border-rose-900/40 pb-3">
          <span className="flex size-7 items-center justify-center rounded-lg bg-rose-600 text-white text-xs font-bold">
            <AlertTriangle className="size-4" />
          </span>
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-700 dark:text-rose-300">
              Fatal Traps Defense
            </span>
            <h2 className="font-serif text-2xl font-bold text-rose-950 dark:text-rose-100">
              統測高頻易錯致命陷阱破解
            </h2>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {review.highFrequencyTraps.map((trap, tIdx) => (
            <div
              key={tIdx}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-rose-200/80 dark:border-rose-900/50 shadow-xs space-y-3"
            >
              <h3 className="font-serif font-bold text-sm text-rose-900 dark:text-rose-200">
                {trap.title}
              </h3>

              <div className="p-3 rounded-xl bg-rose-50/60 dark:bg-rose-950/40 border border-rose-100 dark:border-rose-900/30 text-xs space-y-1">
                <span className="font-mono font-bold text-rose-700 dark:text-rose-300 block text-[11px]">
                  ❌ 歷屆考生常見致命錯誤：
                </span>
                <p className="text-rose-950 dark:text-rose-200 leading-relaxed font-sans">
                  {trap.trap}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/30 text-xs space-y-1">
                <span className="font-mono font-bold text-emerald-700 dark:text-emerald-300 block text-[11px]">
                  ✓ 學霸正確避坑破解路徑：
                </span>
                <p className="text-emerald-950 dark:text-emerald-200 leading-relaxed font-sans">
                  {trap.solution}
                </p>
              </div>

              <span className="text-[10px] font-mono text-slate-400 block pt-1">
                對應考點：{trap.relatedExamConcept}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── 第四大區塊：歷屆統測真題五步 SOP 實戰精解 ── */}
      <section id="worked-questions" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold block">
              Curated Past Exam SOP
            </span>
            <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-white mt-1">
              歷屆統測真題五步 SOP 實戰精解
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400">
            收錄 {review.curatedPastQuestions.length} 道標準代表性真題
          </span>
        </div>

        <div className="space-y-6">
          {review.curatedPastQuestions.map((q, qIdx) => (
            <SemesterWorkedExample key={q.id} example={q} index={qIdx} />
          ))}
        </div>
      </section>

      {/* ── 第五大區塊：考前 10 分鐘自主檢核清單 ── */}
      <SemesterChecklist checklist={review.preExamChecklist} />

      {/* ── 列印專用頁末筆記訂正欄與版權聲明 ── */}
      <div className="print-only" aria-hidden="true">
        <div className="print-note-lines">
          <strong style={{ fontSize: '10pt' }}>考生個人錯題訂正與考前註記欄：</strong>
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="print-colophon">
          Arch 開放學習平台 ｜ {review.subjectTitle} {review.semesterTitle} 考前衝刺講義 ｜ 完全對齊 108 課綱與技專校院入學測驗中心統測大綱 ｜ 本講義提供永久免費離線學習與列印使用。
        </div>
      </div>
    </div>
  );
}
