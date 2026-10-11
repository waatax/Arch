'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Flame, Compass, CheckCircle2 } from 'lucide-react';
import type { SubjectData } from '@/data/types';
import { useStudentStore } from '@/lib/store/studentStore';

interface SubjectContinueBannerProps {
  subject: SubjectData;
}

export default function SubjectContinueBanner({ subject }: SubjectContinueBannerProps) {
  const { completedTopics, bookmarkedTopics, topicConceptProgress } = useStudentStore();

  const status = useMemo(() => {
    // 找出本科目中已完成的章節
    const completedInSubject = subject.topics.filter((t) =>
      (completedTopics || []).includes(`/subjects/${subject.slug}/${t.slug}`)
    );

    // 找出本科目中收藏的章節
    const bookmarkedInSubject = subject.topics.filter((t) =>
      (bookmarkedTopics || []).includes(`/subjects/${subject.slug}/${t.slug}`)
    );

    // 找出第一個尚未完全攻克的章節
    const nextUncompletedTopic = subject.topics.find((t) => {
      const route = `/subjects/${subject.slug}/${t.slug}`;
      const isCompleted = (completedTopics || []).includes(route);
      return !isCompleted;
    }) || subject.topics[0];

    const completedCount = completedInSubject.length;
    const progressPercent = Math.round((completedCount / (subject.topics.length || 1)) * 100);

    return {
      hasStarted: completedCount > 0 || bookmarkedInSubject.length > 0 || Object.keys(topicConceptProgress || {}).some(k => k.startsWith(`/subjects/${subject.slug}`)),
      completedCount,
      progressPercent,
      targetTopic: nextUncompletedTopic,
      targetIndex: subject.topics.findIndex(t => t.slug === nextUncompletedTopic.slug) + 1,
    };
  }, [subject, completedTopics, bookmarkedTopics, topicConceptProgress]);

  if (!status.targetTopic) return null;

  return (
    <div className="rounded-3xl border border-blue-200/80 dark:border-blue-900/60 bg-gradient-to-r from-blue-50/70 via-indigo-50/40 to-white dark:from-blue-950/40 dark:via-indigo-950/20 dark:to-slate-900 p-5 sm:p-7 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-blue-600/10 px-2.5 py-0.5 font-mono text-[11px] font-bold text-blue-700 dark:text-blue-300 border border-blue-600/20">
              {status.hasStarted ? (
                <>
                  <Flame className="size-3 text-orange-500 fill-current" />
                  個人學習進度 · 接續學習
                </>
              ) : (
                <>
                  <Compass className="size-3 text-blue-500" />
                  專屬學習導航 · 推薦啟程
                </>
              )}
            </span>
            {status.hasStarted && (
              <span className="text-[11px] font-mono text-slate-500">
                已掌握 {status.completedCount} / {subject.topics.length} 章 ({status.progressPercent}%)
              </span>
            )}
          </div>

          <h2 className="font-serif text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
            {status.hasStarted
              ? `繼續研讀：第 ${status.targetIndex} 章【${status.targetTopic.title}】`
              : `推薦首站：第 1 章【${status.targetTopic.title}】`}
          </h2>

          <p className="text-xs text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            {status.targetTopic.desc}
          </p>
        </div>

        <Link
          href={`/subjects/${subject.slug}/${status.targetTopic.slug}`}
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-6 py-3.5 shadow-md shadow-blue-600/20 hover:shadow-blue-600/30 transition-all shrink-0 cursor-pointer"
        >
          <BookOpen className="size-4" />
          <span>{status.hasStarted ? '立即前往接續學習' : '開始研讀第一章'}</span>
          <ArrowRight className="size-4" />
        </Link>
      </div>

      {/* 學習進度條 */}
      {status.hasStarted && (
        <div className="mt-4 pt-4 border-t border-blue-100/80 dark:border-blue-900/40 flex items-center gap-3">
          <div className="flex-1 h-2 rounded-full bg-slate-200/80 dark:bg-slate-800 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-500"
              style={{ width: `${Math.max(5, status.progressPercent)}%` }}
            />
          </div>
          <span className="text-[11px] font-mono font-bold text-blue-600 dark:text-blue-400 shrink-0 flex items-center gap-1">
            <CheckCircle2 className="size-3" />
            {status.progressPercent}% 精熟
          </span>
        </div>
      )}
    </div>
  );
}
