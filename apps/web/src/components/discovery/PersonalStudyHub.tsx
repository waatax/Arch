'use client';

import React from 'react';
import Link from 'next/link';
import { Flame, Bookmark, ArrowRight, BookOpen, Award } from 'lucide-react';
import { useStudentStore } from '@/lib/store/studentStore';
import { useGamificationStore } from '@/lib/store/gamificationStore';
import { topicSearchIndex } from '@/data/topicSearchIndex';

export default function PersonalStudyHub() {
  const {
    streakDays,
    questionsCompleted,
    dailyGoal,
    bookmarkedTopics,
  } = useStudentStore();

  const { exp, rankTitle, unlockedStars } = useGamificationStore();

  const latestBookmark = bookmarkedTopics?.[bookmarkedTopics.length - 1];
  let bookmarkMeta = null;
  if (latestBookmark) {
    const parts = latestBookmark.replace('/subjects/', '').split('/');
    bookmarkMeta = topicSearchIndex.find(
      (i) => i.subjectSlug === parts[0] && i.topicSlug === parts[1]
    );
  }

  return (
    <div className="rounded-3xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900 p-5 sm:p-7 shadow-xs">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        
        {/* 左側：每日打卡與成就摘要 */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/10 px-3 py-1 font-mono text-xs font-bold text-orange-600 dark:text-orange-400 border border-orange-500/20">
              <Flame className="size-3.5 fill-current text-orange-500" />
              連續學習 {streakDays || 1} 天
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/10 px-3 py-1 font-mono text-xs font-bold text-blue-600 dark:text-blue-400 border border-blue-500/20">
              <Award className="size-3.5" />
              {rankTitle} ({exp} EXP)
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-1 font-mono text-xs text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              ✨ 點亮星空 {unlockedStars.length} 顆
            </span>
          </div>

          <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            歡迎回來！今天也要為建築夢想添一塊磚。
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
            每日完成 5 題測驗或攻克 1 個知識點，漸進累積實力。所有筆記、錯題與觀念進度已在本地無縫同步。
          </p>
        </div>

        {/* 右側：繼續學習快速卡片與統計 */}
        <div className="flex flex-col sm:flex-row items-stretch gap-3 shrink-0">
          {latestBookmark ? (
            <Link
              href={latestBookmark}
              className="group flex flex-col justify-between p-4 rounded-2xl border border-amber-200 dark:border-amber-900/50 bg-amber-50/50 dark:bg-amber-950/20 hover:border-amber-400 transition-all sm:w-64"
            >
              <div>
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 flex items-center gap-1">
                  <Bookmark className="size-3 fill-current" /> 繼續我的書籤
                </span>
                <p className="font-bold text-sm text-slate-900 dark:text-white mt-1 truncate">
                  {bookmarkMeta?.topicTitle || '上次收藏的章節'}
                </p>
                <p className="text-[11px] text-slate-500 truncate mt-0.5">
                  {bookmarkMeta?.subjectTitle}
                </p>
              </div>
              <div className="flex items-center justify-between text-xs font-bold text-amber-700 dark:text-amber-400 pt-3 border-t border-amber-200/60 dark:border-amber-900/40 mt-2">
                <span>前往學習</span>
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ) : (
            <Link
              href="/subjects/mechanics/units-and-vectors"
              className="group flex flex-col justify-between p-4 rounded-2xl border border-blue-200 dark:border-blue-900/50 bg-blue-50/50 dark:bg-blue-950/20 hover:border-blue-400 transition-all sm:w-64"
            >
              <div>
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 flex items-center gap-1">
                  <BookOpen className="size-3" /> 推薦今日啟程
                </span>
                <p className="font-bold text-sm text-slate-900 dark:text-white mt-1 truncate">
                  工程力學 · 第 1 章
                </p>
                <p className="text-[11px] text-slate-500 truncate mt-0.5">
                  單位系統與向量力系地基
                </p>
              </div>
              <div className="flex items-center justify-between text-xs font-bold text-blue-700 dark:text-blue-400 pt-3 border-t border-blue-200/60 dark:border-blue-900/40 mt-2">
                <span>開始研讀</span>
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          )}

          {/* 每日題目進度小卡 */}
          <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/40 flex flex-col justify-between sm:w-48 font-mono">
            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">今日做題目標</span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">{questionsCompleted}</span>
                <span className="text-xs text-slate-400">/ {dailyGoal} 題</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-slate-200 dark:bg-slate-700 mt-2 overflow-hidden">
                <div
                  className="h-full bg-blue-600 dark:bg-blue-400 transition-all"
                  style={{ width: `${Math.min(100, (questionsCompleted / (dailyGoal || 1)) * 100)}%` }}
                />
              </div>
            </div>
            <Link
              href="/practice"
              className="text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center justify-between pt-3 border-t border-slate-200 dark:border-slate-700 mt-2"
            >
              <span>題庫實戰</span>
              <span>→</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
