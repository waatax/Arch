'use client';

import Link from 'next/link';
import { Bookmark, BookmarkCheck, Clock, History } from 'lucide-react';
import type { SubjectData, TopicContent } from '@/data/types';
import Step0Tooltip from '@/components/pedagogy/Step0Tooltip';
import { PrintControls } from '@/components/pedagogy/PrintHandout';
import { ArchitecturalSubjectIcon } from '@/components/ui/ArchitecturalIcons';
import { estimateStudyMinutes, gradeLabel, importanceLabel } from './lessonUtils';
import type { LessonPlacement } from './types';

interface LessonHeaderProps {
  subject: SubjectData;
  topic: TopicContent;
  placement: LessonPlacement;
  examQuestionCount: number;
  understoodCount: number;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
  resumeLabel: string | null;
  onResume: () => void;
}

export default function LessonHeader({
  subject,
  topic,
  placement,
  examQuestionCount,
  understoodCount,
  isBookmarked,
  onToggleBookmark,
  resumeLabel,
  onResume,
}: LessonHeaderProps) {
  const total = topic.concepts.length;
  const percent = total ? Math.round((understoodCount / total) * 100) : 0;
  const grade = gradeLabel(topic.gradeLevel);
  const importance = importanceLabel(topic.examHitRate);
  const minutes = estimateStudyMinutes(topic);
  const counts = [
    { label: '觀念', value: total },
    { label: '例題', value: topic.worked_examples?.length ?? 0 },
    { label: '練習', value: topic.practices?.length ?? 0 },
    { label: '真題', value: examQuestionCount },
  ].filter((item) => item.value > 0);

  return (
    <header className="lesson-header space-y-5">
      <nav aria-label="麵包屑" className="mobile-scroll flex items-center gap-1.5 overflow-x-auto whitespace-nowrap text-xs text-slate-500 dark:text-slate-400 print:hidden">
        <Link href="/curriculum" className="hover:text-blue-600 hover:underline dark:hover:text-blue-400">課程地圖</Link>
        <span aria-hidden="true">/</span>
        <Link href={`/subjects/${subject.slug}`} className="hover:text-blue-600 hover:underline dark:hover:text-blue-400">{subject.title}</Link>
        <span aria-hidden="true">/</span>
        <Link href={`/subjects/${subject.slug}#unit-${placement.unitIndex + 1}`} className="hover:text-blue-600 hover:underline dark:hover:text-blue-400">{placement.unitTitle}</Link>
      </nav>

      <div className="flex items-start gap-4">
        <div className="mt-1 hidden shrink-0 rounded-2xl border border-blue-200/60 bg-blue-50 p-3 text-blue-700 dark:border-blue-900/40 dark:bg-blue-950/60 dark:text-blue-300 sm:block print:hidden">
          <ArchitecturalSubjectIcon slug={subject.slug} size={28} strokeWidth={1.75} />
        </div>
        <div className="min-w-0 flex-1 space-y-2">
          <p className="text-sm font-bold text-blue-700 dark:text-blue-300">
            {subject.title} · 第 {placement.chapter} 章 <span className="font-normal text-slate-500 dark:text-slate-400">／共 {placement.totalChapters} 章 · 單元 {placement.unitIndex + 1}「{placement.unitTitle}」</span>
          </p>
          <h1 className="font-serif text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl">{topic.title}</h1>
          <p className="max-w-3xl text-base leading-relaxed text-slate-600 dark:text-slate-400">{topic.desc}</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 text-xs print:hidden">
        {grade ? <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 font-bold text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">{grade}</span> : null}
        {importance ? (
          <span
            className="rounded-full border border-amber-300/70 bg-amber-50 px-2.5 py-1 font-bold text-amber-800 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-200"
            title="統測重要度為編輯依考綱與歷屆題分布的評估"
          >
            <span className="tracking-tight">{importance.stars}</span> {importance.label}
          </span>
        ) : null}
        <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
          <Clock className="size-3.5" aria-hidden="true" /> 約 {minutes} 分鐘
        </span>
        {counts.map((item) => (
          <span key={item.label} className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            {item.label} <strong className="font-mono text-slate-900 dark:text-white">{item.value}</strong>
          </span>
        ))}
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs dark:border-slate-800 dark:bg-slate-900 print:hidden">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="min-w-[12rem] flex-1">
            <div className="mb-1.5 flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
              <span>本章進度：已理解 {understoodCount}/{total} 個觀念</span>
              <span className="font-mono">{percent}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800" role="progressbar" aria-valuenow={percent} aria-valuemin={0} aria-valuemax={100} aria-label="本章觀念理解進度">
              <div className="h-full rounded-full bg-emerald-500 transition-all duration-300" style={{ width: `${percent}%` }} />
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {resumeLabel ? (
              <button
                type="button"
                onClick={onResume}
                className="inline-flex min-h-10 max-w-[18rem] items-center gap-1.5 rounded-xl bg-blue-600 px-3.5 text-sm font-bold text-white shadow-xs hover:bg-blue-700"
              >
                <History className="size-4 shrink-0" aria-hidden="true" />
                <span className="truncate">繼續：{resumeLabel}</span>
              </button>
            ) : (
              <a href="#principles" className="inline-flex min-h-10 items-center rounded-xl bg-blue-600 px-3.5 text-sm font-bold text-white shadow-xs hover:bg-blue-700">
                開始讀觀念 ↓
              </a>
            )}
            <button
              type="button"
              onClick={onToggleBookmark}
              aria-pressed={isBookmarked}
              className={`inline-flex min-h-10 items-center gap-1.5 rounded-xl border px-3 text-sm font-bold transition-colors ${
                isBookmarked
                  ? 'border-amber-400 bg-amber-50 text-amber-800 dark:border-amber-700 dark:bg-amber-950/40 dark:text-amber-200'
                  : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200'
              }`}
            >
              {isBookmarked ? <BookmarkCheck className="size-4" aria-hidden="true" /> : <Bookmark className="size-4" aria-hidden="true" />}
              {isBookmarked ? '已收藏' : '收藏'}
            </button>
            <PrintControls compact />
          </div>
        </div>
      </div>

      {topic.step0Prerequisites?.length ? <Step0Tooltip prerequisites={topic.step0Prerequisites} subjectSlug={subject.slug} /> : null}

      {placement.unitTopics.length > 1 ? (
        <nav aria-label={`單元「${placement.unitTitle}」的章節`} className="print:hidden">
          <p className="mb-1.5 text-xs font-bold text-slate-500 dark:text-slate-400">同單元章節</p>
          <div className="mobile-scroll flex gap-2 overflow-x-auto pb-1">
            {placement.unitTopics.map((item) => {
              const current = item.slug === topic.slug;
              return current ? (
                <span key={item.slug} aria-current="page" className="shrink-0 rounded-xl border border-blue-500 bg-blue-50 px-3 py-2 text-sm font-bold text-blue-800 dark:bg-blue-950/50 dark:text-blue-200">
                  {item.chapter}. {item.title}
                </span>
              ) : (
                <Link key={item.slug} href={`/subjects/${subject.slug}/${item.slug}`} className="shrink-0 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:border-blue-300 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:text-blue-300">
                  {item.chapter}. {item.title}
                </Link>
              );
            })}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
