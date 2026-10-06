'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Search,
  Filter,
  Bookmark,
  CheckCircle2,
  Compass
} from 'lucide-react';
import type { SubjectData } from '@/data/types';
import { useStudentStore } from '@/lib/store/studentStore';
import { soundEngine } from '@/lib/audio/soundEffects';

interface SubjectTopicExplorerProps {
  subject: SubjectData;
}

type FilterTag = 'all' | 'high_hit' | 'formulas' | 'practical' | 'bookmarked' | 'completed';

export default function SubjectTopicExplorer({ subject }: SubjectTopicExplorerProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<FilterTag>('all');

  const {
    bookmarkedTopics,
    toggleBookmark,
    completedTopics,
    topicConceptProgress,
  } = useStudentStore();

  // 計算本科目整體掌握進度
  const subjectCompletedCount = subject.topics.filter((t) =>
    (completedTopics || []).includes(`/subjects/${subject.slug}/${t.slug}`)
  ).length;

  const totalSubjectConcepts = subject.topics.reduce((acc, t) => acc + t.concepts.length, 0);

  const completedConceptsInSubject = subject.topics.reduce((acc, t) => {
    const r = `/subjects/${subject.slug}/${t.slug}`;
    const list = topicConceptProgress?.[r] || [];
    return acc + list.length;
  }, 0);

  const subjectProgressPercent = Math.round(
    (completedConceptsInSubject / (totalSubjectConcepts || 1)) * 100
  );

  // 篩選章節清單
  const filteredTopics = useMemo(() => {
    return subject.topics.filter((topic) => {
      const route = `/subjects/${subject.slug}/${topic.slug}`;
      const isBookmarked = (bookmarkedTopics || []).includes(route);
      const isCompleted = (completedTopics || []).includes(route);

      // 關鍵字比對
      const q = searchQuery.trim().toLowerCase();
      if (q) {
        const titleMatch = topic.title.toLowerCase().includes(q);
        const descMatch = topic.desc.toLowerCase().includes(q);
        const conceptMatch = topic.concepts.some((c) =>
          c.heading.toLowerCase().includes(q) || c.body.toLowerCase().includes(q)
        );
        if (!titleMatch && !descMatch && !conceptMatch) {
          return false;
        }
      }

      // 標籤比對
      if (selectedTag === 'bookmarked') return isBookmarked;
      if (selectedTag === 'completed') return isCompleted;
      if (selectedTag === 'high_hit') {
        return (topic.examHitRate ?? 5) >= 5 || topic.gradeLevel === 11;
      }
      if (selectedTag === 'formulas') {
        return topic.concepts.some((c) => Boolean(c.formula));
      }
      if (selectedTag === 'practical') {
        return Boolean(topic.worked_examples?.length) || topic.concepts.some((c) => Boolean(c.table));
      }

      return true;
    });
  }, [subject, searchQuery, selectedTag, bookmarkedTopics, completedTopics]);

  return (
    <div className="space-y-6">
      {/* ── 本科即時學習儀表板 ── */}
      <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900 p-5 sm:p-7 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800/80 pb-5">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Learner Mastery Dashboard
              </span>
              <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                即時同步
              </span>
            </div>
            <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-white mt-1">
              📊 {subject.title} 學習戰情與進度指標
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <span className="text-[11px] font-mono text-slate-400 block">整體精熟進度</span>
              <span className="text-2xl font-mono font-bold text-blue-600 dark:text-blue-400">
                {subjectProgressPercent}%
              </span>
            </div>
            <div className="h-10 w-10 rounded-full border-4 border-blue-500/20 border-t-blue-600 dark:border-t-blue-400 flex items-center justify-center font-mono text-xs font-bold text-slate-700 dark:text-slate-300">
              {subjectCompletedCount}/{subject.topics.length}
            </div>
          </div>
        </div>

        {/* 進度指標細項 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 font-mono text-xs">
          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800">
            <span className="text-slate-400 block text-[10px]">已攻克章節</span>
            <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
              {subjectCompletedCount} <span className="text-xs font-normal text-slate-500">/ {subject.topics.length} 章</span>
            </span>
          </div>
          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800">
            <span className="text-slate-400 block text-[10px]">掌握核心觀念</span>
            <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
              {completedConceptsInSubject} <span className="text-xs font-normal text-slate-500">/ {totalSubjectConcepts} 個</span>
            </span>
          </div>
          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800">
            <span className="text-slate-400 block text-[10px]">已收藏書籤</span>
            <span className="text-lg font-bold text-amber-600 dark:text-amber-400">
              {subject.topics.filter(t => (bookmarkedTopics || []).includes(`/subjects/${subject.slug}/${t.slug}`)).length} <span className="text-xs font-normal text-slate-500">章</span>
            </span>
          </div>
          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-800">
            <span className="text-slate-400 block text-[10px]">可直接複習</span>
            <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
              100% <span className="text-xs font-normal text-slate-500">全解鎖</span>
            </span>
          </div>
        </div>
      </div>

      {/* ── 搜尋列與分類過濾標籤 ── */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* 即時搜尋框 */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`在 ${subject.title} 中搜尋章節、公式、CNS 規範或核心觀念...`}
              className="w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-3 pl-10 pr-4 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-2xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 hover:text-slate-600"
              >
                清除
              </button>
            )}
          </div>
        </div>

        {/* 分類快速過濾 Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-1 text-xs font-mono scrollbar-none">
          <span className="shrink-0 text-slate-400 font-bold text-[11px] mr-1 flex items-center gap-1">
            <Filter className="size-3" /> 篩選：
          </span>
          {[
            { id: 'all', label: `全部 (${subject.topics.length})` },
            { id: 'high_hit', label: '⭐⭐⭐⭐⭐ 統測必考' },
            { id: 'formulas', label: '⚡ 核心公式重點' },
            { id: 'practical', label: '🛠️ 步驟與重點表格' },
            { id: 'bookmarked', label: '📌 我的收藏' },
            { id: 'completed', label: '🏆 已攻克' },
          ].map((tab) => {
            const isActive = selectedTag === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedTag(tab.id as FilterTag)}
                className={`shrink-0 px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white font-bold shadow-xs'
                    : 'bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── 章節列表卡片網格 ── */}
      <div className="grid gap-5 md:grid-cols-2">
        {filteredTopics.length === 0 ? (
          <div className="col-span-full py-16 text-center rounded-3xl border border-dashed border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900/50">
            <Compass className="size-10 mx-auto text-slate-400 mb-2" />
            <p className="text-sm font-bold text-slate-700 dark:text-slate-300">找不到符合條件的章節</p>
            <p className="text-xs text-slate-400 mt-1">請嘗試變更搜尋關鍵字或清除篩選標籤</p>
            <button
              type="button"
              onClick={() => { setSearchQuery(''); setSelectedTag('all'); }}
              className="mt-3 px-4 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-xs font-bold hover:bg-blue-100 transition-colors cursor-pointer"
            >
              重設所有條件
            </button>
          </div>
        ) : (
          filteredTopics.map((topic) => {
            const originalIndex = subject.topics.findIndex((t) => t.slug === topic.slug);
            const route = `/subjects/${subject.slug}/${topic.slug}`;
            const visualSrc = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/learning-visuals/${subject.slug}/${topic.slug}.webp`;
            const isBookmarked = (bookmarkedTopics || []).includes(route);
            const isCompleted = (completedTopics || []).includes(route);
            const completedConceptList = topicConceptProgress?.[route] || [];
            const topicProgress = Math.round((completedConceptList.length / (topic.concepts.length || 1)) * 100);

            return (
              <article
                key={topic.slug}
                className={`group relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xs hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 ${
                  topic.status === 'done' ? 'card-lift' : 'opacity-70'
                }`}
              >
                {/* 書籤收藏按鈕 */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleBookmark(route);
                    soundEngine.playClickBeep();
                  }}
                  className={`absolute right-3.5 top-3.5 z-20 p-2 rounded-xl backdrop-blur-md transition-all cursor-pointer ${
                    isBookmarked
                      ? 'bg-amber-500 text-white shadow-xs'
                      : 'bg-white/80 dark:bg-slate-800/80 text-slate-400 hover:text-amber-500 hover:bg-white'
                  }`}
                  title={isBookmarked ? '取消收藏' : '加入重點書籤'}
                  aria-label="收藏章節"
                >
                  <Bookmark className={`size-4 ${isBookmarked ? 'fill-current' : ''}`} />
                </button>

                <Link
                  href={topic.status === 'done' ? route : '#'}
                  className="grid h-full grid-cols-[8rem_1fr] sm:grid-cols-[10rem_1fr]"
                  aria-disabled={topic.status !== 'done'}
                >
                  {/* 插圖區塊 */}
                  <div className="relative min-h-48 overflow-hidden border-r border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 flex items-center justify-center">
                    <Image
                      src={visualSrc}
                      alt={`${topic.title}觀念插圖`}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 130px, 170px"
                    />
                    <span className="absolute left-3 top-3 rounded-lg bg-black/75 px-2.5 py-1 text-xs font-mono font-bold text-white backdrop-blur-md">
                      第 {originalIndex + 1} 章
                    </span>
                    {isCompleted && (
                      <span className="absolute left-3 bottom-3 rounded-lg bg-emerald-600/90 px-2 py-0.5 text-[10px] font-mono font-bold text-white backdrop-blur-md flex items-center gap-1">
                        <CheckCircle2 className="size-3" /> 已攻克
                      </span>
                    )}
                  </div>

                  {/* 內文資訊區塊 */}
                  <div className="flex min-w-0 flex-col justify-between p-4 sm:p-5 space-y-3">
                    <div>
                      {/* 標籤群 */}
                      <div className="mb-2 flex flex-wrap items-center gap-1.5">
                        <span className="rounded-md bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 text-[10px] font-mono font-bold text-blue-700 dark:text-blue-300">
                          {topic.concepts.length} 個觀念
                        </span>
                        {topic.worked_examples?.length ? (
                          <span className="rounded-md bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 text-[10px] font-mono font-bold text-emerald-700 dark:text-emerald-300">
                            {topic.worked_examples.length} 道步驟化例題
                          </span>
                        ) : null}
                        {topic.examHitRate && topic.examHitRate >= 5 && (
                          <span className="rounded-md bg-amber-50 dark:bg-amber-950/60 px-1.5 py-0.5 text-[10px] font-mono font-bold text-amber-700 dark:text-amber-300">
                            🔥 統測高頻
                          </span>
                        )}
                      </div>

                      <h3 className="font-serif text-base sm:text-lg font-bold leading-snug text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {topic.title}
                      </h3>

                      <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                        {topic.desc}
                      </p>
                    </div>

                    {/* 章節觀念進度條與跳轉 */}
                    <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
                        <span>觀念掌握：{completedConceptList.length}/{topic.concepts.length}</span>
                        <span className="font-bold text-blue-600 dark:text-blue-400">{topicProgress}%</span>
                      </div>
                      <div className="h-1 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                        <div
                          className="h-full bg-blue-600 dark:bg-blue-400 transition-all duration-300"
                          style={{ width: `${topicProgress}%` }}
                        />
                      </div>
                      <div className="flex items-center justify-between pt-1 text-xs font-bold text-blue-600 dark:text-blue-400">
                        <span>開始深度學習</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            );
          })
        )}
      </div>
    </div>
  );
}
