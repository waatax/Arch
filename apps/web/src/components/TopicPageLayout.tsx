'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { SubjectData, TopicContent } from '@/data/types';
import MathText from '@/components/MathText';
import InteractiveVisualizer from '@/components/visualizers/InteractiveVisualizer';
import { getTopicRealLifeGuide } from '@/lib/pedagogy/realLifeHelpers';
import { getTopicInterestHook } from '@/lib/pedagogy/interestHooks';
import { getTopicDeepKnowledge } from '@/lib/pedagogy/topicKnowledgeExpander';
import { buildDetailedSolution } from '@/lib/pedagogy/solutionSteps';
import { getLearningSources } from '@/lib/pedagogy/learningSources';
import { isAnswerChoiceCorrect, isAnswerCorrect, isMultipleChoiceAnswer, toggleSelectedChoice } from '@/lib/examAnswers';
import coverageRegistry from '../../../../data/registry/exam-coverage.json';
import commonRegistry from '../../../../data/registry/common-exam-questions.json';

interface TopicPageLayoutProps {
  subject: SubjectData;
  topic: TopicContent;
}

interface MappedExamQuestion {
  id: string;
  subject?: string;
  topic?: string;
  lessonRoute?: string | null;
  sourceLabel?: string;
  sourceUrl?: string;
  year?: number;
  questionNo?: number;
  excerpt: string;
  figureImage?: string | null;
  answer: string;
  options?: Partial<Record<'A' | 'B' | 'C' | 'D', string>>;
}

export default function TopicPageLayout({ subject, topic }: TopicPageLayoutProps) {
  const currentIndex = subject.topics.findIndex((item) => item.slug === topic.slug);
  const prevTopic = currentIndex > 0 ? subject.topics[currentIndex - 1] : null;
  const nextTopic = currentIndex < subject.topics.length - 1 ? subject.topics[currentIndex + 1] : null;
  const visualConcept = topic.concepts.find((concept) => concept.formula) ?? topic.concepts[0];
  const visualSrc = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/learning-visuals/${subject.slug}/${topic.slug}.webp`;
  const conceptModelingSrc = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/learning-visuals/framework/concept-modeling.png`;
  const solutionVerificationSrc = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/learning-visuals/framework/solution-verification.png`;
  const practices = topic.practices?.length ? topic.practices : topic.practice ? [topic.practice] : [];
  const masteryQuestionCount = new Set([
    ...(topic.worked_examples ?? []).map((item) => item.question),
    ...practices.map((item) => item.question),
  ]).size;
  const learningSources = getLearningSources(subject.slug);
  const isExamSubject = ['mechanics', 'materials', 'surveying', 'drafting', 'chinese', 'english', 'math-c'].includes(subject.slug);

  const mappedExamQuestions = useMemo(() => {
    const route = `/subjects/${subject.slug}/${topic.slug}`;
    const prof = (coverageRegistry.questions as MappedExamQuestion[]).filter((q) => q.subject === subject.slug && q.topic === topic.slug);
    const comm = (commonRegistry.questions as MappedExamQuestion[]).filter((q) => q.lessonRoute === route);
    return [...prof, ...comm];
  }, [subject.slug, topic.slug]);

  // Exam Questions Interactive Answer State
  const [selectedExamAnswers, setSelectedExamAnswers] = useState<Record<string, string>>({});

  // Concept Progress Checkbox State
  const [completedConcepts, setCompletedConcepts] = useState<Record<number, boolean>>({});
  const [copiedFormulaIndex, setCopiedFormulaIndex] = useState<number | null>(null);

  // High-Res Image Lightbox State
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const interestImageButtonRef = useRef<HTMLButtonElement>(null);
  const lightboxCloseButtonRef = useRef<HTMLButtonElement>(null);

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

  useEffect(() => {
    if (!isLightboxOpen) return;

    const previousBodyOverflow = document.body.style.overflow;
    const focusTimer = window.setTimeout(() => lightboxCloseButtonRef.current?.focus(), 0);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsLightboxOpen(false);
      }
      if (event.key === 'Tab') {
        event.preventDefault();
        lightboxCloseButtonRef.current?.focus();
      }
    };

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousBodyOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      interestImageButtonRef.current?.focus();
    };
  }, [isLightboxOpen]);

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

  const jumpTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const realLifeGuide = getTopicRealLifeGuide(subject.slug, topic.slug);
  const interestHook = getTopicInterestHook({
    subjectSlug: subject.slug,
    topicSlug: topic.slug,
    topicTitle: topic.title,
    topicDescription: topic.desc,
    visualConceptHeading: visualConcept.heading,
    realLifeGuide,
  });
  const deepKnowledge = getTopicDeepKnowledge(subject.slug, topic.slug);

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
            {interestHook.topicSummary}
          </p>
        </div>

        {/* Every lesson opens with a route-specific interest hook and its own illustration. */}
        <section
          id="interest-hook"
          data-topic-interest-hook={`${subject.slug}/${topic.slug}`}
          className="scroll-mt-24 overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-amber-50/70 shadow-sm dark:border-blue-900/60 dark:from-blue-950/45 dark:via-slate-900 dark:to-amber-950/20"
          aria-labelledby="interest-hook-title"
        >
          <div className="grid lg:grid-cols-2">
            <div className="min-w-0 space-y-5 p-5 pb-4 sm:p-7 sm:pb-5 lg:col-start-1 lg:row-start-1 lg:p-8 lg:pb-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-blue-600 px-3 py-1 text-[11px] font-bold tracking-wide text-white shadow-sm">
                  先別急著背
                </span>
                <span className="rounded-full border border-blue-200 bg-white/85 px-3 py-1 text-[11px] font-bold text-blue-800 dark:border-blue-800 dark:bg-slate-900/75 dark:text-blue-200">
                  {interestHook.badge}
                </span>
              </div>

              <div className="space-y-3">
                <h2 id="interest-hook-title" className="font-serif text-2xl font-bold leading-tight text-slate-950 dark:text-white sm:text-3xl">
                  {interestHook.headline}
                </h2>
                <p data-interest-lead className="text-sm font-medium leading-7 text-slate-700 dark:text-slate-300 sm:text-base">
                  {interestHook.lead}
                </p>
              </div>
            </div>

            <figure id="observable" className="group flex min-w-0 scroll-mt-24 flex-col border-y border-blue-100 bg-white/80 dark:border-blue-950 dark:bg-slate-950/70 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:border-b-0 lg:border-l lg:border-r-0 lg:border-t-0">
              <button
                ref={interestImageButtonRef}
                type="button"
                className="relative block aspect-[4/3] w-full flex-1 cursor-zoom-in overflow-hidden bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-blue-600 dark:bg-slate-950 lg:min-h-[31rem]"
                onClick={() => setIsLightboxOpen(true)}
                aria-label={`放大檢視${topic.title}的知識點插圖`}
                aria-describedby="interest-hook-figure-caption"
              >
                <Image
                  src={visualSrc}
                  alt={interestHook.imageAlt}
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.025]"
                  width={960}
                  height={720}
                  priority
                />
                <span className="absolute bottom-3 right-3 rounded-full bg-slate-950/80 px-3 py-1.5 text-xs font-bold text-white shadow-lg backdrop-blur-md">
                  🔍 點圖放大
                </span>
              </button>
              <figcaption id="interest-hook-figure-caption" className="border-t border-slate-200 bg-white/90 px-5 py-4 dark:border-slate-800 dark:bg-slate-900/90">
                <p className="text-[11px] font-bold uppercase tracking-widest text-blue-700 dark:text-blue-300">
                  先看圖，再碰公式
                </p>
                <p className="mt-1 text-xs leading-6 text-slate-600 dark:text-slate-400">
                  {interestHook.imageCaption}
                </p>
              </figcaption>
            </figure>

            <div className="min-w-0 space-y-5 px-5 pb-5 sm:px-7 sm:pb-7 lg:col-start-1 lg:row-start-2 lg:px-8 lg:pb-8">

              <div id="exam-focus" className="grid scroll-mt-24 gap-3 sm:grid-cols-2">
                <article className="rounded-2xl border border-blue-200/80 bg-white/90 p-4 dark:border-blue-900/70 dark:bg-slate-900/80">
                  <h3 className="flex items-center gap-2 text-sm font-bold text-blue-800 dark:text-blue-200">
                    <span aria-hidden="true">🎯</span> 這個知識點為什麼重要？
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
                    {interestHook.importance}
                  </p>
                </article>

                <article className="rounded-2xl border border-emerald-200/80 bg-white/90 p-4 dark:border-emerald-900/70 dark:bg-slate-900/80">
                  <h3 className="flex items-center gap-2 text-sm font-bold text-emerald-800 dark:text-emerald-200">
                    <span aria-hidden="true">🏙️</span> 離開考卷，會在哪裡用到？
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
                    {interestHook.application}
                  </p>
                </article>
              </div>

              <aside className="rounded-2xl border border-amber-200 bg-amber-100/70 p-4 dark:border-amber-900/70 dark:bg-amber-950/35" aria-label="本章輕鬆記憶梗">
                <p className="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300">
                  😄 腦內小劇場，幫你記牢
                </p>
                <p className="mt-2 text-sm leading-6 text-amber-950 dark:text-amber-100">
                  {interestHook.hook}
                </p>
              </aside>
            </div>

          </div>

          <div className="flex items-start gap-3 border-t border-blue-100 bg-blue-50/65 px-5 py-4 text-sm leading-6 text-slate-700 dark:border-blue-950 dark:bg-blue-950/20 dark:text-slate-300 sm:px-7 lg:px-8">
            <span className="mt-0.5 shrink-0" aria-hidden="true">🧩</span>
            <p>
              <strong className="text-slate-900 dark:text-white">其實你不是從零開始：</strong>{' '}
              {interestHook.bridge}
            </p>
          </div>
        </section>

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

        {/* Seven-part lesson path: every control navigates to real content. */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 border-b border-slate-200 dark:border-slate-800 text-xs font-mono" aria-label="七段教學快速導覽">
          {[
            ['exam-focus', '1 這在考什麼'], ['observable', '2 看得到的東西'], ['principles', '3 原理推導'],
            ['worked', '4 示範題'], ['practice', '5 自己做'], ['traps', '6 最容易錯'], ['sources', '7 來源版本'],
          ].map(([id, label]) => (
            <button key={id} onClick={() => jumpTo(id)} className="shrink-0 rounded-t-lg px-3.5 py-2 font-bold text-slate-600 transition-colors hover:bg-blue-600 hover:text-white dark:text-slate-400">
              {label}
            </button>
          ))}
        </div>
      </header>

      {/* Every lesson gets two additional OpenAI-generated visual explanations. */}
      <section className="space-y-4" aria-labelledby="visual-learning-title">
        <div className="space-y-1">
          <p className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            Visual learning path
          </p>
          <h2 id="visual-learning-title" className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
            看懂觀念，再驗證答案
          </h2>
          <p className="text-sm leading-7 text-slate-600 dark:text-slate-400">
            兩張圖分別回答「知識怎麼建立」與「答案怎麼確認」。閱讀時，請把圖中的流程套用到本章的
            <strong className="text-slate-900 dark:text-white"> {visualConcept.heading}</strong>。
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="relative aspect-video bg-stone-50 dark:bg-slate-950">
              <Image
                src={conceptModelingSrc}
                alt={`${topic.title}觀念建模流程：從情境觀察、篩選變因、建立模型到回到現實檢核`}
                fill
                sizes="(min-width: 1024px) 416px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="space-y-2 p-5">
              <h3 className="font-bold text-slate-900 dark:text-white">圖一｜把現象轉成可用的觀念</h3>
              <p className="text-sm leading-7 text-slate-600 dark:text-slate-400">
                先觀察真實情境，再辨認關鍵條件與變因，最後用圖、表或關係式建立模型。本章可先抓住
                「{visualConcept.heading}」，並用章節案例檢查模型是否合理。
              </p>
              <ol className="grid grid-cols-2 gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                {['觀察情境', '篩選條件', '建立模型', '回到現實'].map((label, index) => (
                  <li key={label} className="rounded-lg bg-slate-50 px-3 py-2 dark:bg-slate-800">
                    {index + 1}. {label}
                  </li>
                ))}
              </ol>
            </figcaption>
          </figure>

          <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="relative aspect-video bg-stone-50 dark:bg-slate-950">
              <Image
                src={solutionVerificationSrc}
                alt={`${topic.title}解題驗證流程：讀題、選擇方法、執行、檢核與修正`}
                fill
                sizes="(min-width: 1024px) 416px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="space-y-2 p-5">
              <h3 className="font-bold text-slate-900 dark:text-white">圖二｜用驗證迴圈避免只背答案</h3>
              <p className="text-sm leading-7 text-slate-600 dark:text-slate-400">
                解題後不要立刻停筆：把結果放回原情境，檢查單位、方向、尺度、語意或因果是否一致；若不合理，
                回到假設與方法修正。這個迴圈同樣適用於本章例題與統測題。
              </p>
              <ol className="grid grid-cols-2 gap-2 text-xs font-medium text-slate-700 dark:text-slate-300 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                {['讀懂問題', '選擇方法', '執行求解', '檢核修正'].map((label, index) => (
                  <li key={label} className="rounded-lg bg-slate-50 px-3 py-2 dark:bg-slate-800">
                    {index + 1}. {label}
                  </li>
                ))}
              </ol>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="interest-lightbox-title"
            className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-2xl bg-white p-3 shadow-2xl dark:bg-slate-900"
            onClick={(event) => event.stopPropagation()}
          >
            <h2 id="interest-lightbox-title" className="sr-only">
              {topic.title}知識點插圖放大檢視
            </h2>
            <button
              ref={lightboxCloseButtonRef}
              type="button"
              aria-label={`關閉${topic.title}插圖放大檢視`}
              className="absolute top-4 right-4 z-10 rounded-full bg-black/70 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-black/90 transition-colors"
              onClick={() => setIsLightboxOpen(false)}
            >
              ✕ 關閉
            </button>
            <Image
              src={visualSrc}
              alt={`${interestHook.imageAlt}（高清放大）`}
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

      {/* === [Iconic Landmark Engineering Case Study] === */}
      <section className="rounded-2xl border border-sky-200 dark:border-sky-900/60 bg-sky-50/30 dark:bg-sky-950/20 p-5 sm:p-7 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-sky-200/60 dark:border-sky-900/40 pb-3">
          <div className="flex items-center gap-2">
            <span className="flex size-7 items-center justify-center rounded-lg bg-sky-600 text-white text-xs font-mono font-bold">
              🏛️
            </span>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-sky-700 dark:text-sky-300 font-bold block">
                台灣經典建築實務工程案例
              </span>
              <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white">
                {deepKnowledge.landmarkCase.name}
              </h3>
            </div>
          </div>
          <span className="rounded-full bg-sky-100 dark:bg-sky-900/60 px-2.5 py-0.5 text-xs font-mono font-bold text-sky-800 dark:text-sky-200 border border-sky-300 dark:border-sky-700">
            📍 {deepKnowledge.landmarkCase.location}
          </span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 text-xs leading-relaxed">
          <div className="rounded-xl bg-white dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="font-mono font-bold text-slate-500 block">結構與構造特色：</span>
            <p className="text-slate-700 dark:text-slate-300">
              {deepKnowledge.landmarkCase.structuralFeature}
            </p>
          </div>
          <div className="rounded-xl bg-white dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="font-mono font-bold text-sky-600 dark:text-sky-400 block">教學核心洞察：</span>
            <p className="text-slate-700 dark:text-slate-300">
              {deepKnowledge.landmarkCase.pedagogicalInsight}
            </p>
          </div>
        </div>
      </section>

      {/* === [Problem-Solving Decision Matrix & Exam Trend] === */}
      <section id="traps" className="scroll-mt-24 rounded-2xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/20 dark:bg-amber-950/20 p-5 sm:p-7 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-200/60 dark:border-amber-900/40 pb-3">
          <div className="flex items-center gap-2">
            <span className="flex size-7 items-center justify-center rounded-lg bg-amber-600 text-white text-xs font-mono font-bold">
              ⚡
            </span>
            <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white">
              統測解題秒殺決策樹 (3-Step Decision Flow)
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-red-100 dark:bg-red-950/80 px-2.5 py-0.5 text-xs font-bold text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800">
              {deepKnowledge.examTrend.frequency}
            </span>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3 text-xs leading-relaxed">
          <div className="rounded-xl bg-white dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="font-mono font-bold text-amber-700 dark:text-amber-300 block">步驟 1：題型識別</span>
            <p className="text-slate-700 dark:text-slate-300">{deepKnowledge.decisionFlow.step1}</p>
          </div>
          <div className="rounded-xl bg-white dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="font-mono font-bold text-blue-700 dark:text-blue-300 block">步驟 2：公式選定與展開</span>
            <p className="text-slate-700 dark:text-slate-300">{deepKnowledge.decisionFlow.step2}</p>
          </div>
          <div className="rounded-xl bg-white dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="font-mono font-bold text-emerald-700 dark:text-emerald-300 block">步驟 3：常識驗算與破題</span>
            <p className="text-slate-700 dark:text-slate-300">{deepKnowledge.decisionFlow.step3}</p>
          </div>
        </div>

        <div className="rounded-xl bg-amber-100/60 dark:bg-amber-950/60 p-3.5 text-xs text-amber-950 dark:text-amber-200 border border-amber-300/80 dark:border-amber-800">
          🎯 <strong>秒殺破題口訣：</strong>
          {deepKnowledge.examTrend.killerTrick}
        </div>
      </section>

      {/* === [CNS Standards & Bilingual Technical Glossary Tabs] === */}
      <section className="grid gap-4 sm:grid-cols-2">
        {/* CNS Standard Card */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-2 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-500">
            <span>📑</span>
            <span>國家標準與建築法規條文</span>
          </div>
          <h4 className="font-serif text-sm font-bold text-blue-900 dark:text-blue-200">
            {deepKnowledge.cnsAndCodes.code}：{deepKnowledge.cnsAndCodes.title}
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            {deepKnowledge.cnsAndCodes.description}
          </p>
        </div>

        {/* Bilingual Glossary Card */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-2.5 shadow-xs">
          <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-500">
            <span className="flex items-center gap-1.5">
              <span>🌐</span>
              <span>國際營建雙語名詞庫</span>
            </span>
            <span className="text-[10px] text-slate-400">ASTM / ACI / ISO</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {deepKnowledge.bilingualTerms.map((term, tIdx) => (
              <div key={tIdx} className="rounded-lg bg-slate-50 dark:bg-slate-800/60 p-2 border border-slate-100 dark:border-slate-800">
                <span className="font-bold text-slate-900 dark:text-white block font-mono text-[11px]">
                  {term.en}
                </span>
                <span className="text-[11px] text-slate-600 dark:text-slate-300">
                  {term.zh} {term.abbr && `(${term.abbr})`}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === Core Concepts List === */}
      <div id="principles" className="scroll-mt-24 space-y-6">
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
        <section id="worked" className="scroll-mt-24 space-y-4 pt-4" aria-labelledby="worked-title">
          <div className="flex items-center justify-between gap-2">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">
                Step-by-Step Worked Examples
              </span>
              <h2 id="worked-title" className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
                精選考點步驟化經典例題
              </h2>
              <p className="mt-1 text-xs font-bold text-emerald-700 dark:text-emerald-300">本頁共 {masteryQuestionCount} 題完整練習；每題至少五段推導與檢核。</p>
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
                        {buildDetailedSolution(we).map((step) => (
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
        <section id="practice" className="scroll-mt-24 space-y-4 pt-4" aria-labelledby="practice-title">
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
                    {buildDetailedSolution(practice).map((step) => (
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

      {/* === [Mapped Past Exam Questions: Active Retrieval Section] === */}
      {mappedExamQuestions.length > 0 ? (
        <section id="exam-questions-section" className="space-y-4 pt-4" aria-labelledby="exam-qs-title">
          <div className="flex items-center justify-between gap-2">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-bold">
                Official TCTE Exam Questions Retrieval
              </span>
              <h2 id="exam-qs-title" className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
                🎯 本章對應近六年統測真題實戰 ({mappedExamQuestions.length} 題)
              </h2>
            </div>
            <Link href="/practice" className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline">
              進入全科目模擬器 →
            </Link>
          </div>

          <div className="space-y-4">
            {mappedExamQuestions.map((q, idx: number) => {
              const userChoice = selectedExamAnswers[q.id];
              const isAnswered = Boolean(userChoice);
              const isCorrect = isAnswered && isAnswerCorrect(q.answer, userChoice);
              const isMultiple = isMultipleChoiceAnswer(q.answer);

              return (
                <div
                  key={q.id || idx}
                  className={`rounded-2xl border p-5 sm:p-6 space-y-4 shadow-xs transition-all ${
                    isAnswered
                      ? isCorrect
                        ? 'border-emerald-300 bg-emerald-50/20 dark:border-emerald-800 dark:bg-emerald-950/20'
                        : 'border-rose-300 bg-rose-50/20 dark:border-rose-800 dark:bg-rose-950/20'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-lg bg-indigo-600 px-2.5 py-1 text-xs font-bold text-white font-mono shadow-2xs">
                      {q.sourceLabel || `${q.year} 年統測`} · 第 {q.questionNo || idx + 1} 題
                    </span>
                    {q.sourceUrl ? (
                      <a
                        href={q.sourceUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[11px] font-mono text-slate-500 hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        官方題本 ↗
                      </a>
                    ) : null}
                  </div>

                  <div className="font-bold leading-relaxed text-slate-900 dark:text-white text-base">
                    <MathText content={q.excerpt} />
                  </div>

                  {q.figureImage && (
                    <figure className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${q.figureImage}`}
                        alt={`第 ${q.questionNo} 題圖面`}
                        className="mx-auto max-h-80 w-auto object-contain"
                      />
                    </figure>
                  )}

                  <div className="grid gap-2 sm:grid-cols-2 text-xs">
                    {(['A', 'B', 'C', 'D'] as const).map((choice) => {
                      const isSelected = userChoice?.includes(choice) ?? false;
                      const isRightChoice = isAnswered && isAnswerChoiceCorrect(q.answer, choice);
                      return (
                        <button
                          key={choice}
                          onClick={() => setSelectedExamAnswers((prev) => ({
                            ...prev,
                            [q.id]: isMultiple ? toggleSelectedChoice(prev[q.id], choice) : choice,
                          }))}
                          aria-pressed={isSelected}
                          className={`flex items-start gap-2.5 p-3 rounded-xl border text-left transition-all cursor-pointer ${
                            isSelected
                              ? isRightChoice
                                ? 'border-emerald-600 bg-emerald-100/70 text-emerald-950 dark:bg-emerald-900/60 dark:text-emerald-100 font-bold'
                                : 'border-rose-600 bg-rose-100/70 text-rose-950 dark:bg-rose-900/60 dark:text-rose-100 font-bold'
                              : isRightChoice
                              ? 'border-emerald-500 bg-emerald-50 text-emerald-900 dark:bg-emerald-950/80 dark:text-emerald-200 font-bold'
                              : 'border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                          }`}
                        >
                          <span className="font-mono font-bold shrink-0">{choice}.</span>
                          <span>
                            <MathText content={q.options?.[choice] || `選項 ${choice}`} />
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {isAnswered && (
                    <div className="rounded-xl bg-slate-100 dark:bg-slate-800 p-3.5 text-xs text-slate-800 dark:text-slate-200 font-medium space-y-1">
                      <p>
                        {isCorrect ? '✅ 答對了！' : `❌ 答錯了。你的選擇：${userChoice}，`}{' '}
                        <strong>官方標準答案：{q.answer}</strong>
                      </p>
                      <p className="text-slate-500 dark:text-slate-400">
                        💡 本題考點：{subject.title} · {topic.title}。解題關鍵知識點請參閱本頁上方的「核心概念精講」與「解題秒殺決策樹」。
                      </p>
                      <nav aria-label={`${q.sourceLabel || q.year} 第 ${q.questionNo} 題知識回鏈`} className="flex flex-wrap gap-2 pt-1">
                        <a href="#exam-focus" className="rounded-md border border-slate-300 px-2 py-1 text-[11px] font-bold text-blue-700 hover:bg-white dark:border-slate-700 dark:text-blue-300">① 回考點定位</a>
                        <a href="#principles" className="rounded-md border border-slate-300 px-2 py-1 text-[11px] font-bold text-blue-700 hover:bg-white dark:border-slate-700 dark:text-blue-300">② 回核心原理</a>
                        <a href="#worked" className="rounded-md border border-slate-300 px-2 py-1 text-[11px] font-bold text-blue-700 hover:bg-white dark:border-slate-700 dark:text-blue-300">③ 看同型例題</a>
                        <a href="#practice" className="rounded-md border border-slate-300 px-2 py-1 text-[11px] font-bold text-blue-700 hover:bg-white dark:border-slate-700 dark:text-blue-300">④ 做五題精熟</a>
                      </nav>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      ) : isExamSubject ? (
        <section id="exam-questions-section" className="rounded-2xl border border-amber-300 bg-amber-50 p-5 text-sm leading-7 text-amber-950 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-100">
          <p className="font-bold">本章目前沒有可誠實連入的 111–115 官方真題。</p>
          <p className="mt-1">教材與五題詳解仍依官方考綱持續建設；在逐題確認題幹確實考查本知識點之前，不以關鍵字硬掛真題，也不把合成題冒充歷屆題。</p>
        </section>
      ) : null}

      {/* === [One-Sentence Mastery Recap & Exit Check] === */}
      <section id="sources" className="scroll-mt-24 rounded-2xl border border-indigo-200 dark:border-indigo-900/60 bg-gradient-to-r from-indigo-50/50 via-white to-sky-50/40 dark:from-indigo-950/30 dark:via-slate-900 dark:to-slate-900 p-6 sm:p-7 shadow-xs space-y-3">
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
        <p className="border-t border-indigo-200 pt-3 text-xs leading-6 text-slate-500 dark:border-indigo-900 dark:text-slate-400">
          來源與版本：課程依 108 課綱與平台已登錄之統測題目覆蓋表整理；真題以題卡所連結的官方題本為準。法規、CNS 與招生採計可能更新，使用前請核對頁面標示年度及官方最新公告。
        </p>
        <div className="border-t border-indigo-200 pt-3 dark:border-indigo-900">
          <p className="mb-2 text-xs font-bold text-slate-700 dark:text-slate-300">本頁研究與交叉核對來源（最後檢查：2026-08-11）</p>
          <ul className="space-y-1.5 text-xs leading-5">
            {learningSources.map((source) => (
              <li key={source.url} className="flex items-start gap-2">
                <span className="shrink-0 rounded bg-indigo-100 px-1.5 py-0.5 font-mono text-[10px] text-indigo-800 dark:bg-indigo-950 dark:text-indigo-200">{source.kind}</span>
                <a href={source.url} target="_blank" rel="noreferrer" className="text-blue-700 underline-offset-2 hover:underline dark:text-blue-300">{source.label} ↗</a>
              </li>
            ))}
          </ul>
          <p className="mt-2 text-[11px] leading-5 text-slate-500">補教與公開解析僅用於比對題型、常見錯法與解題順序；答案及命題範圍一律以官方資料為準。</p>
        </div>
      </section>

      {/* === Fixed Bottom Floating Navigation Bar === */}
      <footer className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur-md shadow-lg sm:px-4 sm:py-3">
        <div className="mx-auto grid max-w-4xl grid-cols-[1fr_auto_1fr] items-center gap-2 text-xs font-bold text-slate-900 dark:text-white">
          {prevTopic ? (
            <Link
              href={`/subjects/${subject.slug}/${prevTopic.slug}`}
              aria-label={`上一章：${prevTopic.title}`}
              className="flex min-h-10 min-w-0 items-center gap-1 rounded-lg px-2 text-slate-700 hover:bg-slate-100 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400 transition-colors"
            >
              <span className="text-lg">‹</span><span className="hidden truncate sm:inline">上一章：{prevTopic.title}</span><span className="sm:hidden">上一章</span>
            </Link>
          ) : (
            <span className="px-2 text-left opacity-40">第一章</span>
          )}

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsFormulaDrawerOpen(true)}
              className="min-h-10 rounded-lg bg-amber-50 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-700 px-3 py-1.5 text-amber-800 dark:text-amber-200 hover:bg-amber-100 transition-colors cursor-pointer"
              title="本章公式速查卡"
            >
              📋 <span className="hidden sm:inline">公式卡</span>
            </button>
            <Link
              href={`/subjects/${subject.slug}`}
              className="flex min-h-10 items-center rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1.5 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors"
            >
              目錄
            </Link>
            <Link
              href="/curriculum"
              className="hidden min-h-10 items-center rounded-lg bg-blue-600 text-white px-3 py-1.5 hover:bg-blue-700 transition-colors shadow-2xs sm:flex"
            >
              課程地圖
            </Link>
          </div>

          {nextTopic ? (
            <Link
              href={`/subjects/${subject.slug}/${nextTopic.slug}`}
              aria-label={`下一章：${nextTopic.title}`}
              className="flex min-h-10 min-w-0 items-center justify-end gap-1 rounded-lg px-2 text-right text-slate-700 hover:bg-slate-100 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-400 transition-colors"
            >
              <span className="hidden truncate sm:inline">下一章：{nextTopic.title}</span><span className="sm:hidden">下一章</span><span className="text-lg">›</span>
            </Link>
          ) : (
            <span className="px-2 text-right opacity-40">末章</span>
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
