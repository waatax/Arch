'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { allSubjects } from '@/data/subjects';

export default function CurriculumPage() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // 觸發 Skeleton Screen 過渡
    const timer = setTimeout(() => setIsLoaded(true), 150);
    return () => clearTimeout(timer);
  }, []);

  const totalTopics = allSubjects.reduce((acc, curr) => acc + curr.topics.length, 0);
  const doneTopics = allSubjects.reduce(
    (acc, curr) => acc + curr.topics.filter((t) => t.status === 'done').length,
    0
  );
  const progressPercent = Math.round((doneTopics / totalTopics) * 100);

  const navigationTabs = [
    { id: 'all', label: '全部課程 (3年學程)' },
    { id: 'g10', label: '高一 (基礎探索)' },
    { id: 'g11', label: '高二 (專業精進)' },
    { id: 'g12', label: '高三 (統測與專題)' },
  ];

  const getFilteredSubjects = useMemo(() => {
    return allSubjects.filter((subject) => {
      let matchesCategory = true;
      // 簡易 Grade 映射 (實際應由 TopicContent.gradeLevel 控制，此處為展示邏輯)
      if (activeTab === 'g10') matchesCategory = ['chinese', 'english', 'math-c', 'mechanics', 'materials', 'drafting', 'surveying'].includes(subject.slug);
      else if (activeTab === 'g11') matchesCategory = ['mechanics', 'materials', 'surveying', 'drafting', 'extensions'].includes(subject.slug);
      else if (activeTab === 'g12') matchesCategory = ['extensions', 'mechanics', 'materials', 'surveying', 'drafting'].includes(subject.slug);

      if (!matchesCategory) return false;

      if (searchKeyword.trim()) {
        const q = searchKeyword.toLowerCase().trim();
        const matchesSubject = subject.title.toLowerCase().includes(q);
        const matchesAnyTopic = subject.topics.some(
          (t) => t.title.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q)
        );
        return matchesSubject || matchesAnyTopic;
      }
      return true;
    });
  }, [activeTab, searchKeyword]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12 min-h-screen">
      {/* ── Architectural Editorial Header ── */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6 border-b border-slate-200 dark:border-slate-800 pb-8">
          <div className="space-y-2">
            <span className="text-xs font-mono text-blue-600 dark:text-blueprint-700 uppercase tracking-[0.2em] block font-bold">
              Arch V7.5 Curriculum
            </span>
            <h1 className="text-fluid-h1 font-serif font-bold text-slate-900 dark:text-white">
              土木與建築群學習地圖
            </h1>
            <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed mt-2">
              完全對齊 108 課綱與臺中高工三年三階課程配當。涵蓋高一基礎實作、高二丙乙級檢定、至高三四技二專統測衝刺。
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md p-4 shadow-xs flex-shrink-0 w-full sm:w-64">
            <div className="text-xs font-mono text-slate-500 mb-2 flex justify-between">
              <span>全站章節建置進度</span>
              <span className="font-bold text-blue-600 dark:text-blue-400">{progressPercent}%</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex-grow h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 dark:bg-blue-500 transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1)"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <span className="font-mono text-xs font-bold text-slate-900 dark:text-white">
                {doneTopics}/{totalTopics}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Fluid Navigation & Search ── */}
      <div className="space-y-6 sticky top-0 z-10 bg-background/90 backdrop-blur-md py-4 -mx-4 px-4 sm:mx-0 sm:px-0">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Navigation Tabs */}
          <div className="flex overflow-x-auto mobile-scroll pb-2 sm:pb-0 gap-2 font-mono text-xs font-bold w-full sm:w-auto flex-shrink-0">
            {navigationTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full transition-all duration-300 whitespace-nowrap btn-tactile ${
                  activeTab === tab.id
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative flex-grow">
            <input
              type="text"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              placeholder="🔍 依關鍵字搜尋 (例如: 向量, 水準儀, 剪力彎矩, 101阻尼器)..."
              className="w-full rounded-full border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 px-5 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:border-blue-500 focus:outline-hidden transition-all shadow-xs"
            />
            {searchKeyword && (
              <button
                onClick={() => setSearchKeyword('')}
                className="absolute right-4 top-2.5 text-xs text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors"
              >
                ✕ 清除
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── Subject Masonry / Grid ── */}
      <div className="space-y-12">
        {!isLoaded ? (
          // Shimmer Skeleton Screen (Zero CLS prep)
          <div className="space-y-8">
            {[1, 2].map((i) => (
              <div key={i} className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8">
                <div className="flex gap-4 mb-6">
                  <div className="w-4 h-4 skeleton-box rounded-full" />
                  <div className="w-48 h-6 skeleton-box" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3].map((j) => (
                    <div key={j} className="h-32 skeleton-box rounded-2xl" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : getFilteredSubjects.length > 0 ? (
          getFilteredSubjects.map((subject) => {
            const topicList = searchKeyword.trim()
              ? subject.topics.filter(
                  (t) =>
                    t.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
                    t.desc.toLowerCase().includes(searchKeyword.toLowerCase())
                )
              : subject.topics;

            if (topicList.length === 0) return null;

            return (
              <section
                key={subject.slug}
                className="animate-fade-in-up rounded-[2rem] border border-slate-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/40 backdrop-blur-sm p-6 sm:p-10 shadow-xs v7-route"
              >
                <header className="flex flex-wrap items-end justify-between gap-4 mb-8">
                  <div className="flex items-center gap-4">
                    <span
                      className="size-4 rounded-full shadow-inner"
                      style={{ backgroundColor: `var(--color-${subject.color})` }}
                    />
                    <div>
                      <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block mb-1">
                        {subject.category}
                      </span>
                      <h2 className="font-serif text-3xl font-bold text-slate-900 dark:text-white">
                        <Link href={`/subjects/${subject.slug}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                          {subject.title}
                        </Link>
                      </h2>
                    </div>
                  </div>
                  <Link
                    href={`/subjects/${subject.slug}`}
                    className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 px-4 py-2 rounded-full transition-colors border border-blue-100 dark:border-blue-900"
                  >
                    進入科目大綱 ({subject.topics.length} 章) →
                  </Link>
                </header>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {topicList.map((topic, idx) => (
                    <Link
                      key={topic.slug}
                      href={`/subjects/${subject.slug}/${topic.slug}`}
                      className="group flex flex-col justify-between rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-950/40 p-5 card-lift border-subtle-glow"
                    >
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between text-[11px] font-mono">
                          <span className="text-slate-500 bg-slate-200/50 dark:bg-slate-800/50 px-2 py-0.5 rounded-sm">
                            CH {String(idx + 1).padStart(2, '0')}
                          </span>
                          <div className="flex gap-2">
                            {topic.gradeLevel && (
                              <span className="text-blue-600 dark:text-blue-400 font-bold">高{topic.gradeLevel === 10 ? '一' : topic.gradeLevel === 11 ? '二' : '三'}</span>
                            )}
                            <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                              {topic.concepts.length} 觀念
                            </span>
                          </div>
                        </div>
                        <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {topic.title}
                        </h3>
                        <p className="line-clamp-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                          {topic.desc}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between text-xs font-bold text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        <span>{topic.estimatedMinutes ? `${topic.estimatedMinutes} 分鐘` : '25 分鐘'}微循環</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })
        ) : (
          <div className="rounded-[2rem] border-2 border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/20 p-16 text-center animate-fade-in-up">
            <div className="text-4xl mb-4 opacity-50">🏗️</div>
            <h3 className="font-serif text-xl font-bold text-slate-700 dark:text-slate-300 mb-2">
              查無相符章節
            </h3>
            <p className="text-sm text-slate-500">
              請嘗試其他關鍵字，或是切換不同的年級視角。
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
