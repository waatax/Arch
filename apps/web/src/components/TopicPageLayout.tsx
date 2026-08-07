'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { SubjectData, TopicContent } from '@/data/types';

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
  const isExamSubject = ['mechanics', 'materials', 'surveying', 'drafting'].includes(subject.slug);

  // === [Iteration 1] Concept Learning Progress Checkbox State ===
  const [completedConcepts, setCompletedConcepts] = useState<Record<number, boolean>>({});
  const [copiedFormulaIndex, setCopiedFormulaIndex] = useState<number | null>(null);

  // === [Iteration 6] High-Res Image Lightbox State ===
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // === [Iteration 3] Worked Example Steps Toggle State ===
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
  const progressPercent = Math.round((completedCount / topic.concepts.length) * 100);

  // === [Iteration 2] Copy Formula Helper ===
  const handleCopyFormula = (formulaText: string, index: number) => {
    navigator.clipboard.writeText(formulaText);
    setCopiedFormulaIndex(index);
    setTimeout(() => setCopiedFormulaIndex(null), 2000);
  };

  const toggleSteps = (index: number) => {
    setShowSolutionSteps((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <article className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 sm:py-12 pb-24">
      {/* Header Navigation & Title */}
      <header className="space-y-5">
        <nav className="mobile-scroll flex items-center gap-2 overflow-x-auto whitespace-nowrap pb-2 text-xs font-mono" aria-label="麵包屑導覽">
          <Link href="/curriculum" className="hover:underline">課程地圖</Link>
          <span aria-hidden="true">/</span>
          <Link href={`/subjects/${subject.slug}`} className="hover:underline">{subject.title}</Link>
          <span aria-hidden="true">/</span>
          <span>第 {currentIndex + 1} 章</span>
        </nav>
        
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs font-mono uppercase tracking-[0.18em]" style={{ color: `var(--color-${subject.color})` }}>
              從生活直覺開始，再走到統測解題
            </span>
            <span className="rounded-full bg-(--color-teal-700)/10 px-2.5 py-0.5 text-xs font-medium text-(--color-teal-700)">
              統測高頻考點
            </span>
          </div>
          <h1 className="font-serif text-3xl font-bold leading-tight text-(--color-ink-900) sm:text-4xl">{topic.title}</h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-(--color-ink-650)">{topic.desc}</p>
        </div>

        {/* === [Iteration 1] Concept Progress Bar === */}
        <div className="rounded-xl border border-(--color-concrete-300) bg-(--color-paper-50) p-4 space-y-2">
          <div className="flex justify-between items-center text-xs font-bold text-(--color-ink-900)">
            <span>章節觀念理解進度</span>
            <span>{completedCount} / {topic.concepts.length} 觀念 ({progressPercent}%)</span>
          </div>
          <div className="w-full bg-(--color-concrete-300) h-2 rounded-full overflow-hidden">
            <div 
              className="h-full transition-all duration-300 ease-out" 
              style={{ width: `${progressPercent}%`, backgroundColor: `var(--color-${subject.color})` }}
            />
          </div>
        </div>

        {/* Learning Guide */}
        <aside className="grid gap-3 rounded-xl border border-(--color-concrete-300) bg-(--color-paper-50) p-5 sm:grid-cols-3" aria-label="本章學習指引">
          <div><strong className="block text-sm text-(--color-ink-900)">先看懂</strong><span className="text-sm leading-6 text-(--color-ink-650)">{visualConcept.heading}</span></div>
          <div><strong className="block text-sm text-(--color-ink-900)">再做得到</strong><span className="text-sm leading-6 text-(--color-ink-650)">用自己的話說明觀念，並照步驟完成一題。</span></div>
          <div><strong className="block text-sm text-(--color-ink-900)">最後會檢查</strong><span className="text-sm leading-6 text-(--color-ink-650)">核對單位、正負號與答案是否符合常識。</span></div>
        </aside>
      </header>

      {/* === [Iteration 6] Interactive Visual Figure with Lightbox Zoom === */}
      <figure className="group relative overflow-hidden rounded-xl border border-(--color-concrete-300) bg-(--color-paper-100) shadow-sm">
        <div 
          className="relative aspect-[4/3] bg-(--color-paper-50) sm:aspect-[16/9] cursor-zoom-in"
          onClick={() => setIsLightboxOpen(true)}
          role="button"
          tabIndex={0}
          aria-label="放大檢視高清觀念圖解"
        >
          <Image src={visualSrc} alt={`${topic.title}：${visualConcept.heading}概念圖`} className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]" width={960} height={720} priority />
          <span className="absolute bottom-3 right-3 rounded-lg bg-black/60 px-2.5 py-1 text-xs text-white backdrop-blur-xs flex items-center gap-1 opacity-90 group-hover:opacity-100">
            🔍 點擊放大圖解
          </span>
        </div>
        <figcaption className="border-t border-(--color-concrete-300) px-5 py-4">
          <span className="text-[11px] font-mono uppercase tracking-widest text-(--color-teal-700)">先觀察，再閱讀</span>
          <p className="mt-1 text-sm font-bold text-(--color-ink-900)">{visualConcept.heading}</p>
          <p className="mt-1 text-xs leading-6 text-(--color-ink-650)">先指出圖中的已知條件與變化方向，再對照下方文字；不用急著背公式。</p>
        </figcaption>
      </figure>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-xl bg-white p-2">
            <button 
              className="absolute top-3 right-3 z-10 rounded-full bg-black/60 px-3 py-1 text-xs text-white"
              onClick={() => setIsLightboxOpen(false)}
            >
              ✕ 關閉
            </button>
            <Image src={visualSrc} alt={`${topic.title} 高清放大圖`} className="max-h-[85vh] w-auto object-contain" width={1200} height={900} />
          </div>
        </div>
      )}

      {/* === [Iteration 2] Concepts List with Progress Checkbox & Formula Copy === */}
      {topic.concepts.map((concept, index) => {
        const isChecked = !!completedConcepts[index];
        return (
          <section key={concept.heading} className={`space-y-5 rounded-xl border transition-all duration-200 ${isChecked ? 'border-teal-300 bg-teal-50/20' : 'border-(--color-concrete-300) bg-(--color-paper-100)'} p-5 sm:p-8`}>
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full font-mono text-sm font-bold text-(--color-paper-50)" style={{ backgroundColor: `var(--color-${subject.color})` }}>{index + 1}</span>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-xs text-(--color-ink-650)">核心觀念 {index + 1}</p>
                    {isChecked && <span className="rounded bg-teal-100 px-1.5 py-0.5 text-[10px] font-bold text-teal-800">已理解</span>}
                  </div>
                  <h2 className="font-serif text-xl font-bold text-(--color-ink-900)">{concept.heading}</h2>
                </div>
              </div>
              
              {/* Checkbox */}
              <button
                onClick={() => toggleConceptProgress(index)}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-colors ${isChecked ? 'bg-teal-700 text-white' : 'bg-(--color-paper-50) text-(--color-ink-650) border border-(--color-concrete-300) hover:bg-teal-50'}`}
              >
                {isChecked ? '✓ 已標記理解' : '標記為理解'}
              </button>
            </div>

            <p className="whitespace-pre-line text-[15px] leading-8 text-(--color-ink-650)">{concept.body}</p>

            {concept.steps?.length ? (
              <ol className="space-y-3 rounded-lg border border-(--color-concrete-300) bg-(--color-paper-50) p-4">
                {concept.steps.map((step, stepIndex) => (
                  <li key={step} className="flex gap-3 text-sm leading-7 text-(--color-ink-900)">
                    <span className="font-mono font-bold" style={{ color: `var(--color-${subject.color})` }}>{stepIndex + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            ) : null}

            {/* === [Iteration 2] Formula Copy & Interactive Box === */}
            {concept.formula ? (
              <div className="relative space-y-4 rounded-r-lg border-l-4 bg-(--color-paper-50) p-5 shadow-xs" style={{ borderColor: `var(--color-${subject.color})` }} role="note" aria-label="公式與使用提醒">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold uppercase tracking-widest text-(--color-ink-650)">核心公式與符號說明</p>
                  <button
                    onClick={() => handleCopyFormula(concept.formula!, index)}
                    className="flex items-center gap-1 rounded bg-(--color-paper-100) border border-(--color-concrete-300) px-2.5 py-1 text-xs font-mono text-(--color-ink-900) hover:bg-teal-50"
                  >
                    {copiedFormulaIndex === index ? '✓ 已複製' : '📋 複製公式'}
                  </button>
                </div>
                <div className="mobile-scroll overflow-x-auto whitespace-pre-line font-mono text-base leading-8 text-(--color-ink-900) sm:text-lg">{concept.formula}</div>
                <p className="text-sm leading-7 text-(--color-ink-650)"><strong>解題順序：</strong>先寫已知與未知 → 統一單位 → 選公式 → 代入數值 → 檢查正負號、單位與合理性。</p>
              </div>
            ) : null}

            {concept.table ? (
              <div className="mobile-scroll overflow-x-auto" tabIndex={0} role="region" aria-label={`${concept.heading}整理表`}>
                <table className="min-w-[40rem] border-collapse text-left text-sm">
                  <thead><tr>{concept.table.headers.map((header) => <th key={header} className="border border-(--color-concrete-300) bg-(--color-paper-50) px-4 py-3 text-(--color-ink-900)">{header}</th>)}</tr></thead>
                  <tbody>{concept.table.rows.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={cellIndex} className="whitespace-pre-line border border-(--color-concrete-300) px-4 py-3 leading-6 text-(--color-ink-650)">{cell}</td>)}</tr>)}</tbody>
                </table>
              </div>
            ) : null}
          </section>
        );
      })}

      {/* === [Iteration 3 & 4] Worked Examples & Practices Section === */}
      <section className="space-y-5" aria-labelledby="practice-title">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-(--color-teal-700)">Worked Examples & Practice</p>
            <h2 id="practice-title" className="font-serif text-2xl font-bold text-(--color-ink-900)">跟著做，再自己做</h2>
          </div>
          {isExamSubject ? <Link href={`/exams#${subject.slug}`} className="text-sm font-bold text-(--color-teal-700) hover:underline">查看近五年統測對應題庫 →</Link> : null}
        </div>

        {/* Topic Worked Examples */}
        {topic.worked_examples?.length ? (
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-(--color-ink-650)">精選考點步驟化經典例題</h3>
            {topic.worked_examples.map((we, index) => {
              const isStepsShown = !!showSolutionSteps[index];
              return (
                <div key={index} className="rounded-xl border border-teal-200 bg-teal-50/10 p-5 sm:p-7 space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded bg-teal-700 px-2.5 py-1 text-xs font-bold text-white">經典例題</span>
                    <span className="text-xs font-mono text-(--color-ink-650)">難度：{we.difficulty}</span>
                  </div>
                  <p className="font-bold leading-7 text-(--color-ink-900)">{we.question}</p>
                  
                  {/* Toggle button */}
                  <button
                    onClick={() => toggleSteps(index)}
                    className="flex items-center gap-1.5 text-xs font-bold text-(--color-teal-700) hover:underline"
                  >
                    {isStepsShown ? '🙈 隱藏推導步驟' : '💡 查看詳細推導與解答步驟'}
                  </button>

                  {isStepsShown && (
                    <div className="space-y-3 border-t border-teal-100 pt-4 transition-all">
                      <ol className="space-y-2 pl-5 text-sm leading-7 text-(--color-ink-650)">
                        {we.steps.map((step) => (
                          <li key={step} className="list-decimal">{step}</li>
                        ))}
                      </ol>
                      <div className="rounded-lg bg-teal-100/50 p-4 text-sm font-bold text-teal-900">
                        答案：{we.answer}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : null}

        {/* Regular Practices */}
        {practices.length ? practices.map((practice, index) => (
          <details key={index} className="group rounded-xl border border-(--color-concrete-300) bg-(--color-paper-100) p-5 sm:p-7">
            <summary className="cursor-pointer list-none font-bold leading-7 text-(--color-ink-900)"><span className="mr-2 rounded bg-(--color-teal-700) px-2 py-1 text-xs text-(--color-paper-50)">自我練習 {index + 1}</span>{practice.question}<span className="ml-2 text-xs font-normal text-(--color-ink-650)">（點開看解析）</span></summary>
            <div className="mt-5 space-y-4 border-t border-(--color-concrete-300) pt-5">
              <p className="text-xs font-mono text-(--color-ink-650)">難度：{practice.difficulty}</p>
              <ol className="space-y-2 pl-5 text-sm leading-7 text-(--color-ink-650)">{practice.steps.map((step) => <li key={step} className="list-decimal">{step}</li>)}</ol>
              <p className="rounded-lg bg-(--color-paper-50) p-4 text-sm text-(--color-ink-900)"><strong>答案：</strong>{practice.answer}</p>
            </div>
          </details>
        )) : null}
      </section>

      {/* === [Iteration 7] Fixed Bottom Floating Navigation Bar === */}
      <footer className="fixed bottom-0 left-0 right-0 z-40 border-t border-(--color-concrete-300) bg-(--color-paper-50)/95 px-4 py-3 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between text-xs font-bold text-(--color-ink-900)">
          {prevTopic ? (
            <Link href={`/subjects/${subject.slug}/${prevTopic.slug}`} className="flex items-center gap-1 hover:text-(--color-teal-700)">
              ‹ 上一章：{prevTopic.title}
            </Link>
          ) : <span className="opacity-40">已是第一章</span>}

          <Link href="/curriculum" className="rounded-md bg-(--color-paper-100) border border-(--color-concrete-300) px-3 py-1.5 text-(--color-ink-650) hover:bg-teal-50">
            課程地圖
          </Link>

          {nextTopic ? (
            <Link href={`/subjects/${subject.slug}/${nextTopic.slug}`} className="flex items-center gap-1 hover:text-(--color-teal-700)">
              下一章：{nextTopic.title} ›
            </Link>
          ) : <span className="opacity-40">已是最後一章</span>}
        </div>
      </footer>
    </article>
  );
}
