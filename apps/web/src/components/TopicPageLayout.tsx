'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { SubjectData, TopicContent } from '@/data/types';
import MathText from '@/components/MathText';
import InteractiveVisualizer from '@/components/visualizers/InteractiveVisualizer';
import { getTopicRealLifeGuide } from '@/lib/pedagogy/realLifeHelpers';

interface TopicPageLayoutProps {
  subject: SubjectData;
  topic: TopicContent;
}

export default function TopicPageLayout({ subject, topic }: TopicPageLayoutProps) {
  const currentIndex = subject.topics.findIndex((item) => item.slug === topic.slug);
  const prevTopic = currentIndex > 0 ? subject.topics[currentIndex - 1] : null;
  const nextTopic = currentIndex < subject.topics.length - 1 ? subject.topics[currentIndex + 1] : null;
  const visualConcept = topic.concepts.find((concept) => concept.formula) ?? topic.concepts[0];
  const visualSrc = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/learning-visuals/${subject.slug}/${topic.slug}.webp`;
  const practices = topic.practices?.length ? topic.practices : topic.practice ? [topic.practice] : [];
  const isExamSubject = ['mechanics', 'materials', 'surveying', 'drafting', 'chinese', 'english', 'math-c'].includes(subject.slug);

  // Active section tab
  const [activeTab, setActiveTab] = useState<'concepts' | 'visualizer' | 'traps' | 'worked' | 'practice'>('concepts');

  // Concept Progress Checkbox State
  const [completedConcepts, setCompletedConcepts] = useState<Record<number, boolean>>({});
  const [copiedFormulaIndex, setCopiedFormulaIndex] = useState<number | null>(null);

  // High-Res Image Lightbox State
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Quick Formula Drawer State
  const [isFormulaDrawerOpen, setIsFormulaDrawerOpen] = useState(false);

  // Worked Example Steps Toggle State
  const [showSolutionSteps, setShowSolutionSteps] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const saved = localStorage.getItem(`progress_${subject.slug}_${topic.slug}`);
        if (saved) {
          setCompletedConcepts(JSON.parse(saved));
        }
      } catch {
        // Ignore localStorage errors in SSR
      }
    }, 0);
    return () => clearTimeout(timer);
  }, [subject.slug, topic.slug]);

  const toggleConceptProgress = (index: number) => {
    const next = { ...completedConcepts, [index]: !completedConcepts[index] };
    setCompletedConcepts(next);
    try {
      localStorage.setItem(`progress_${subject.slug}_${topic.slug}`, JSON.stringify(next));
    } catch {
      // Ignore
    }
  };

  const completedCount = Object.values(completedConcepts).filter(Boolean).length;
  const progressPercent = topic.concepts.length > 0 ? Math.round((completedCount / topic.concepts.length) * 100) : 0;

  const handleCopyFormula = (formulaText: string, index: number) => {
    navigator.clipboard.writeText(formulaText);
    setCopiedFormulaIndex(index);
    setTimeout(() => setCopiedFormulaIndex(null), 2000);
  };

  const toggleSteps = (index: number) => {
    setShowSolutionSteps((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const realLifeGuide = getTopicRealLifeGuide(subject.slug, topic.slug, topic.title);

  return (
    <article className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 sm:py-12 pb-28">
      {/* Header Navigation & Breadcrumbs */}
      <header className="space-y-6">
        <nav className="mobile-scroll flex items-center gap-2 overflow-x-auto whitespace-nowrap text-xs font-mono text-slate-500 dark:text-slate-400" aria-label="麵包屑導覽">
          <Link href="/curriculum" className="hover:text-blue-600 dark:hover:text-blue-400 hover:underline">
            課程地圖
          </Link>
          <span aria-hidden="true">/</span>
          <Link href={`/subjects/${subject.slug}`} className="hover:text-blue-600 dark:hover:text-blue-400 hover:underline">
            {subject.title}
          </Link>
          <span aria-hidden="true">/</span>
          <span className="font-bold text-slate-900 dark:text-white">第 {currentIndex + 1} 章</span>
        </nav>

        {/* Title & Metadata Badges */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-blue-600/10 px-3 py-0.5 text-xs font-mono font-bold text-blue-700 dark:text-blue-300 border border-blue-600/20">
              {subject.category}
            </span>
            <span className="rounded-full bg-emerald-600/10 px-2.5 py-0.5 text-xs font-medium text-emerald-700 dark:text-emerald-300 border border-emerald-600/20">
              ⭐⭐⭐⭐⭐ 統測核心考點
            </span>
            <span className="rounded-full bg-amber-500/10 px-2.5 py-0.5 text-xs font-mono font-bold text-amber-700 dark:text-amber-300 border border-amber-500/20">
              🎒 國中程度無痛上手
            </span>
            <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 text-xs font-mono text-slate-600 dark:text-slate-400">
              ⏱️ 建議研讀 20-30 分鐘
            </span>
          </div>

          <h1 className="font-serif text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl">
            {topic.title}
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
            {topic.desc}
          </p>
        </div>

        {/* 🌟 Real-Life Importance & Engineering Context Banner */}
        <div className="rounded-2xl border border-blue-200 dark:border-blue-900/60 bg-gradient-to-br from-blue-50/70 via-white to-sky-50/50 dark:from-blue-950/40 dark:via-slate-900 dark:to-slate-900 p-5 sm:p-7 shadow-xs space-y-3">
          <div className="flex items-center gap-2">
            <span className="flex size-7 items-center justify-center rounded-lg bg-blue-600 text-white text-xs font-mono font-bold">
              🌟
            </span>
            <h2 className="font-serif text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              為什麼要學這個？真實生活與建築工程的關鍵角色
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 font-medium">
            {realLifeGuide.realLifeImportance}
          </p>

          <div className="grid gap-3 pt-2 sm:grid-cols-2 text-xs">
            <div className="rounded-xl bg-white dark:bg-slate-800/80 p-3.5 border border-slate-200 dark:border-slate-700/80 space-y-1">
              <span className="font-mono font-bold text-blue-700 dark:text-blue-300 flex items-center gap-1">
                🎒 國中先備知識銜接
              </span>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {realLifeGuide.juniorHighBridge}
              </p>
            </div>

            <div className="rounded-xl bg-white dark:bg-slate-800/80 p-3.5 border border-slate-200 dark:border-slate-700/80 space-y-1">
              <span className="font-mono font-bold text-amber-700 dark:text-amber-300 flex items-center gap-1">
                🍞 100% 國中生白話譬喻
              </span>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {realLifeGuide.everydayAnalogy}
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 p-3 text-xs text-emerald-900 dark:text-emerald-200 flex items-start gap-2">
            <span className="shrink-0 mt-0.5">🔍</span>
            <div>
              <strong>生活觀察與動手微任務：</strong>
              <span>{realLifeGuide.handsOnObservation}</span>
            </div>
          </div>
        </div>

        {/* Chapter Learning Progress Bar */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 space-y-2 shadow-xs">
          <div className="flex justify-between items-center text-xs font-bold text-slate-800 dark:text-slate-200">
            <span className="flex items-center gap-1.5">
              <span>🎯 章節觀念掌握度</span>
              {progressPercent === 100 && (
                <span className="text-emerald-600 dark:text-emerald-400">✓ 本章已完全通關！</span>
              )}
            </span>
            <span className="font-mono">
              {completedCount} / {topic.concepts.length} 觀念 ({progressPercent}%)
            </span>
          </div>
          <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 dark:bg-blue-500 transition-all duration-300 ease-out"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Learning Guide: 3-step Mastery */}
        <aside className="grid gap-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/60 p-4 sm:p-5 sm:grid-cols-3" aria-label="本章學習指引">
          <div className="space-y-1">
            <span className="inline-block px-2 py-0.5 rounded bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300 text-xs font-bold">
              1. 先看懂圖
            </span>
            <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              {visualConcept.heading}：指出已知、未知與受力或流向。
            </p>
          </div>
          <div className="space-y-1">
            <span className="inline-block px-2 py-0.5 rounded bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 text-xs font-bold">
              2. 再做得到
            </span>
            <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              照步驟統一單位、選定公式、代入運算並推導解題。
            </p>
          </div>
          <div className="space-y-1">
            <span className="inline-block px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 text-xs font-bold">
              3. 最後會檢查
            </span>
            <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              核對正負號、量綱單位與答案是否符合工程物理常識。
            </p>
          </div>
        </aside>

        {/* Quick Section Navigation Tabs */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 border-b border-slate-200 dark:border-slate-800 text-xs font-mono">
          <button
            onClick={() => setActiveTab('concepts')}
            className={`px-3.5 py-2 rounded-t-lg font-bold transition-colors ${activeTab === 'concepts' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
          >
            📖 核心概念精講 ({topic.concepts.length})
          </button>
          <button
            onClick={() => setActiveTab('visualizer')}
            className={`px-3.5 py-2 rounded-t-lg font-bold transition-colors ${activeTab === 'visualizer' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
          >
            📐 互動圖解模擬器
          </button>
          <button
            onClick={() => setActiveTab('worked')}
            className={`px-3.5 py-2 rounded-t-lg font-bold transition-colors ${activeTab === 'worked' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
          >
            💡 步驟化經典例題 ({topic.worked_examples?.length ?? 0})
          </button>
          <button
            onClick={() => setActiveTab('practice')}
            className={`px-3.5 py-2 rounded-t-lg font-bold transition-colors ${activeTab === 'practice' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
          >
            ✍️ 自我檢測 ({practices.length})
          </button>
        </div>
      </header>

      {/* Interactive Visual Figure with Lightbox Zoom */}
      <figure className="group relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
        <div
          className="relative aspect-[4/3] bg-slate-50 dark:bg-slate-950 sm:aspect-[16/9] cursor-zoom-in flex items-center justify-center"
          onClick={() => setIsLightboxOpen(true)}
          role="button"
          tabIndex={0}
          aria-label="放大檢視高清觀念圖解"
        >
          <Image
            src={visualSrc}
            alt={`${topic.title}：${visualConcept.heading}概念圖`}
            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            width={960}
            height={720}
            priority
          />
          <span className="absolute bottom-3 right-3 rounded-lg bg-black/70 px-3 py-1.5 text-xs text-white backdrop-blur-md flex items-center gap-1.5 opacity-90 group-hover:opacity-100 shadow-md">
            🔍 點擊放大高清圖解
          </span>
        </div>
        <figcaption className="border-t border-slate-200 dark:border-slate-800 px-5 py-4 bg-slate-50/50 dark:bg-slate-900/50">
          <span className="text-[11px] font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">
            建築圖面與工程直覺
          </span>
          <p className="mt-1 text-sm font-bold text-slate-900 dark:text-white">{visualConcept.heading}</p>
          <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
            先觀察圖中受力箭頭、尺寸標註、基準線與材料剖面；再搭配下方白話名詞與公式推導，不需死記硬背。
          </p>
        </figcaption>
      </figure>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-2xl bg-white dark:bg-slate-900 p-3 shadow-2xl">
            <button
              className="absolute top-4 right-4 z-10 rounded-full bg-black/70 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-black/90 transition-colors"
              onClick={() => setIsLightboxOpen(false)}
            >
              ✕ 關閉
            </button>
            <Image
              src={visualSrc}
              alt={`${topic.title} 高清放大圖`}
              className="max-h-[85vh] w-auto object-contain rounded-lg"
              width={1200}
              height={900}
            />
          </div>
        </div>
      )}

      {/* Embedded Dynamic Interactive Visualizer Widget */}
      <section className="space-y-4" aria-label="互動式幾何與力學模擬器">
        <InteractiveVisualizer subjectSlug={subject.slug} topicSlug={topic.slug} />
      </section>

      {/* === Core Concepts List === */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span>核心觀念與名詞精講</span>
            <span className="text-xs font-mono font-normal text-slate-500">
              (點擊「標記為理解」記錄學習進度)
            </span>
          </h2>
        </div>

        {topic.concepts.map((concept, index) => {
          const isChecked = !!completedConcepts[index];
          return (
            <section
              key={concept.heading}
              className={`space-y-5 rounded-2xl border transition-all duration-200 p-5 sm:p-7 ${
                isChecked
                  ? 'border-emerald-300 bg-emerald-50/25 dark:border-emerald-800/80 dark:bg-emerald-950/20'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <span
                    className="flex size-8 shrink-0 items-center justify-center rounded-xl font-mono text-sm font-bold text-white shadow-xs"
                    style={{ backgroundColor: `var(--color-${subject.color})` }}
                  >
                    {index + 1}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">
                        核心觀念 {index + 1}
                      </p>
                      {isChecked && (
                        <span className="rounded bg-emerald-100 dark:bg-emerald-900/60 px-2 py-0.5 text-[10px] font-bold text-emerald-800 dark:text-emerald-200">
                          ✓ 已熟練
                        </span>
                      )}
                    </div>
                    <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                      {concept.heading}
                    </h3>
                  </div>
                </div>

                {/* Mark as understood button */}
                <button
                  onClick={() => toggleConceptProgress(index)}
                  className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                    isChecked
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 hover:bg-emerald-50 dark:hover:bg-emerald-950/50'
                  }`}
                >
                  {isChecked ? '✓ 已標記理解' : '標記為理解'}
                </button>
              </div>

              {/* Concept Body with MathText Rendering */}
              <div className="whitespace-pre-line text-[15px] leading-relaxed text-slate-700 dark:text-slate-300">
                <MathText content={concept.body} />
              </div>

              {/* Step Sequence if available */}
              {concept.steps?.length ? (
                <div className="space-y-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 p-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold block mb-1">
                    標準操作與推導步驟 (SOP)
                  </span>
                  <ol className="space-y-2.5">
                    {concept.steps.map((step, stepIndex) => (
                      <li key={step} className="flex gap-3 text-sm leading-relaxed text-slate-800 dark:text-slate-200">
                        <span
                          className="font-mono font-bold shrink-0"
                          style={{ color: `var(--color-${subject.color})` }}
                        >
                          {stepIndex + 1}.
                        </span>
                        <span>
                          <MathText content={step} />
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              ) : null}

              {/* Formula & Symbol Card with 1-click copy */}
              {concept.formula ? (
                <div
                  className="relative space-y-3 rounded-r-xl border-l-4 bg-slate-50 dark:bg-slate-800/60 p-4 sm:p-5 shadow-xs"
                  style={{ borderColor: `var(--color-${subject.color})` }}
                  role="note"
                  aria-label="公式與使用提醒"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                      📐 核心公式與符號速查
                    </span>
                    <button
                      onClick={() => handleCopyFormula(concept.formula!, index)}
                      className="flex items-center gap-1 rounded-md bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 px-2.5 py-1 text-xs font-mono text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors shadow-2xs"
                    >
                      {copiedFormulaIndex === index ? '✓ 已複製' : '📋 複製公式'}
                    </button>
                  </div>
                  <div className="mobile-scroll overflow-x-auto whitespace-pre-line font-mono text-base leading-relaxed text-slate-900 dark:text-white font-bold sm:text-lg">
                    <MathText content={concept.formula} />
                  </div>
                  <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                    <strong>解題檢查五步驟：</strong>
                    寫出已知與未知 → 統一單位制 (m/mm, kN/N, MPa) → 選用主公式 → 代入計算 → 檢核正負號與物理量合理性。
                  </p>
                </div>
              ) : null}

              {/* Structured Comparison Table */}
              {concept.table ? (
                <div className="mobile-scroll overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800" tabIndex={0} role="region" aria-label={`${concept.heading}整理表`}>
                  <table className="min-w-[42rem] w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="bg-slate-100 dark:bg-slate-800">
                        {concept.table.headers.map((header) => (
                          <th key={header} className="border-b border-slate-200 dark:border-slate-700 px-4 py-3 font-bold text-slate-900 dark:text-white">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                      {concept.table.rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors">
                          {row.map((cell, cellIndex) => (
                            <td key={cellIndex} className="whitespace-pre-line px-4 py-3 leading-relaxed text-slate-700 dark:text-slate-300">
                              <MathText content={cell} />
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : null}
            </section>
          );
        })}
      </div>

      {/* === Worked Examples Section === */}
      {topic.worked_examples?.length ? (
        <section className="space-y-4 pt-4" aria-labelledby="worked-title">
          <div className="flex items-center justify-between gap-2">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">
                Step-by-Step Worked Examples
              </span>
              <h2 id="worked-title" className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
                精選考點步驟化經典例題
              </h2>
            </div>
            {isExamSubject ? (
              <Link href={`/exams#${subject.slug}`} className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline">
                歷屆統測題庫 →
              </Link>
            ) : null}
          </div>

          <div className="space-y-4">
            {topic.worked_examples.map((we, index) => {
              const isStepsShown = !!showSolutionSteps[index];
              return (
                <div key={index} className="rounded-2xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/20 dark:bg-blue-950/20 p-5 sm:p-7 space-y-4 shadow-xs">
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-lg bg-blue-600 px-2.5 py-1 text-xs font-bold text-white shadow-2xs">
                      經典示範題 {index + 1}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-600 dark:text-slate-400">
                      難度評級：{we.difficulty}
                    </span>
                  </div>
                  <div className="font-bold leading-relaxed text-slate-900 dark:text-white text-base">
                    <MathText content={we.question} />
                  </div>

                  {/* Toggle solution steps button */}
                  <button
                    onClick={() => toggleSteps(index)}
                    className="flex items-center gap-1.5 text-xs font-mono font-bold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                  >
                    {isStepsShown ? '🙈 隱藏推導與計算步驟' : '💡 查看標準解題 SOP 與詳細推導步驟'}
                  </button>

                  {isStepsShown && (
                    <div className="space-y-3 border-t border-blue-200/60 dark:border-blue-900/40 pt-4 transition-all">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block font-bold">
                        步驟化推導流程 (Derivation SOP)
                      </span>
                      <ol className="space-y-2 pl-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                        {we.steps.map((step) => (
                          <li key={step} className="list-decimal">
                            <MathText content={step} />
                          </li>
                        ))}
                      </ol>
                      <div className="rounded-xl bg-blue-100/70 dark:bg-blue-900/40 p-4 text-sm font-bold text-blue-950 dark:text-blue-100 border border-blue-200 dark:border-blue-800">
                        🎯 <strong>最終標準解答：</strong>
                        <MathText content={we.answer} />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      ) : null}

      {/* === Self Practice Section === */}
      {practices.length ? (
        <section className="space-y-4 pt-4" aria-labelledby="practice-title">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold">
              Progressive Self-Assessment
            </span>
            <h2 id="practice-title" className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
              漸進式自我練習與即時檢測
            </h2>
          </div>

          <div className="space-y-3">
            {practices.map((practice, index) => (
              <details
                key={index}
                className="group rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 shadow-xs"
              >
                <summary className="cursor-pointer list-none font-bold leading-relaxed text-slate-900 dark:text-white flex items-start gap-2.5">
                  <span className="mt-0.5 shrink-0 rounded-md bg-emerald-600 px-2 py-0.5 text-xs text-white shadow-2xs font-mono">
                    自我檢測 {index + 1}
                  </span>
                  <div className="flex-1">
                    <MathText content={practice.question} />
                    <span className="ml-2 text-xs font-normal text-slate-500 dark:text-slate-400 group-open:hidden">
                      (點擊展開看解析與答案)
                    </span>
                  </div>
                </summary>
                <div className="mt-5 space-y-4 border-t border-slate-200 dark:border-slate-800 pt-5">
                  <p className="text-xs font-mono text-slate-500">難度評級：{practice.difficulty}</p>
                  <ol className="space-y-2 pl-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    {practice.steps.map((step) => (
                      <li key={step} className="list-decimal">
                        <MathText content={step} />
                      </li>
                    ))}
                  </ol>
                  <div className="rounded-xl bg-slate-100 dark:bg-slate-800 p-4 text-sm font-bold text-slate-900 dark:text-white">
                    <strong>標準答案：</strong>
                    <MathText content={practice.answer} />
                  </div>
                </div>
              </details>
            ))}
          </div>
        </section>
      ) : null}

      {/* === [One-Sentence Mastery Recap & Exit Check] === */}
      <section className="rounded-2xl border border-indigo-200 dark:border-indigo-900/60 bg-gradient-to-r from-indigo-50/50 via-white to-sky-50/40 dark:from-indigo-950/30 dark:via-slate-900 dark:to-slate-900 p-6 sm:p-7 shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
            🏆 離開前一句話通關自評
          </span>
          <span className="text-xs font-mono text-slate-500">30 秒自我檢核</span>
        </div>
        <p className="font-serif text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-relaxed">
          「{realLifeGuide.oneSentenceRecap}」
        </p>
        <p className="text-xs text-slate-600 dark:text-slate-400">
          如果你能用自己的話把這句話解釋給身邊的朋友或同學聽懂，代表你已經完全掌握本章的核心靈魂！
        </p>
      </section>

      {/* === Fixed Bottom Floating Navigation Bar === */}
      <footer className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 px-4 py-3 backdrop-blur-md shadow-lg">
        <div className="mx-auto flex max-w-4xl items-center justify-between text-xs font-bold text-slate-900 dark:text-white">
          {prevTopic ? (
            <Link
              href={`/subjects/${subject.slug}/${prevTopic.slug}`}
              className="flex items-center gap-1 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              ‹ 上一章：{prevTopic.title}
            </Link>
          ) : (
            <span className="opacity-40">已是第一章</span>
          )}

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsFormulaDrawerOpen(true)}
              className="rounded-lg bg-amber-50 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-700 px-2.5 py-1.5 text-amber-800 dark:text-amber-200 hover:bg-amber-100 transition-colors cursor-pointer"
              title="本章公式速查卡"
            >
              📋 公式卡
            </button>
            <Link
              href={`/subjects/${subject.slug}`}
              className="rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1.5 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors"
            >
              {subject.title}目錄
            </Link>
            <Link
              href="/curriculum"
              className="rounded-lg bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700 transition-colors shadow-2xs"
            >
              課程地圖
            </Link>
          </div>

          {nextTopic ? (
            <Link
              href={`/subjects/${subject.slug}/${nextTopic.slug}`}
              className="flex items-center gap-1 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              下一章：{nextTopic.title} ›
            </Link>
          ) : (
            <span className="opacity-40">已是最後一章</span>
          )}
        </div>
      </footer>

      {/* Formula Cheat Sheet Modal */}
      {isFormulaDrawerOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsFormulaDrawerOpen(false)}
        >
          <div
            className="w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-2xl space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  Quick Formula Card
                </span>
                <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
                  {topic.title} · 核心公式速查卡
                </h3>
              </div>
              <button
                onClick={() => setIsFormulaDrawerOpen(false)}
                className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              >
                ✕ 關閉
              </button>
            </div>

            <div className="space-y-4">
              {topic.concepts
                .filter((c) => c.formula)
                .map((concept, idx) => (
                  <div key={idx} className="rounded-2xl border border-amber-200 dark:border-amber-800/60 bg-amber-50/20 dark:bg-amber-950/20 p-4 sm:p-5 space-y-2">
                    <span className="text-xs font-mono font-bold text-amber-800 dark:text-amber-300">
                      公式 {idx + 1}：{concept.heading}
                    </span>
                    <div className="overflow-x-auto whitespace-pre-line font-mono text-base font-bold text-slate-900 dark:text-white">
                      <MathText content={concept.formula} />
                    </div>
                  </div>
                ))}
            </div>

            <div className="rounded-xl bg-slate-50 dark:bg-slate-800/50 p-4 text-xs leading-relaxed text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800">
              💡 <strong>考前秒殺秘訣：</strong>
              解題前先統一單位（長度一律轉公尺 m 或公釐 mm、力一律轉牛頓 N 或千牛頓 kN、應力一律轉 MPa 或 N/mm²），選定公式後再代入計算，最後務必檢核正負號！
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
