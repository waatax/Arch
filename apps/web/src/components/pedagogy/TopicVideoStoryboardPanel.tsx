'use client';

import { useState } from 'react';
import type { SubjectData, TopicContent } from '@/data/types';
import { buildTopicVideoEpisode, VIDEO_PRODUCTION_SPEC } from '@/data/videoSyllabus';

interface TopicVideoStoryboardPanelProps {
  subject: SubjectData;
  topic: TopicContent;
  chapterIndex: number;
}

export default function TopicVideoStoryboardPanel({
  subject,
  topic,
  chapterIndex,
}: TopicVideoStoryboardPanelProps) {
  const [isOpen, setIsOpen] = useState(false);
  const episode = buildTopicVideoEpisode(subject, topic, chapterIndex);

  return (
    <div className="print:hidden rounded-2xl border border-indigo-200/80 dark:border-indigo-900/60 bg-gradient-to-r from-indigo-50/80 via-white to-blue-50/60 dark:from-indigo-950/35 dark:via-slate-900 dark:to-blue-950/25 shadow-2xs overflow-hidden">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="w-full flex flex-wrap items-center justify-between gap-3 px-4 py-3.5 sm:px-5 text-left hover:bg-indigo-100/40 dark:hover:bg-indigo-950/40 transition-colors cursor-pointer"
      >
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-center gap-1 rounded-lg bg-indigo-600 px-2.5 py-1 text-[11px] font-mono font-bold text-white shadow-2xs">
            🎬 {episode.episodeCode}
          </span>
          <span className="font-serif text-sm sm:text-base font-bold text-slate-900 dark:text-white">
            教學影片設計大綱與 10 分鐘黃金分鏡腳本
          </span>
          <span className="rounded-md bg-indigo-100 dark:bg-indigo-900/60 px-2 py-0.5 text-[11px] font-mono font-semibold text-indigo-800 dark:text-indigo-200">
            5 段式 · {episode.targetDuration} · 1080p SVG 藍圖動畫
          </span>
        </div>
        <span className="text-xs font-mono font-bold text-indigo-700 dark:text-indigo-300 flex items-center gap-1">
          {isOpen ? '收合分鏡 ▲' : '展開 5 段腳本 ▼'}
        </span>
      </button>

      {isOpen && (
        <div className="border-t border-indigo-200/70 dark:border-indigo-900/50 p-4 sm:p-6 space-y-5 bg-white/90 dark:bg-slate-900/90 text-sm">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
            <div className="space-y-1">
              <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
                單元代碼：{episode.curriculumCode} ｜ 適用年級：高{episode.gradeLevel === 10 ? '一' : episode.gradeLevel === 11 ? '二' : '三'} ｜ 歷屆統測題數：{episode.tcteQuestionCount} 題
              </div>
              <p className="font-bold text-slate-900 dark:text-white">
                破題核心：{episode.hookQuestion}
              </p>
            </div>
            <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-xl">
              規格：{VIDEO_PRODUCTION_SPEC.resolution}
            </div>
          </div>

          <div className="grid gap-3">
            {episode.storyboardParts.map((part) => (
              <div
                key={part.partNumber}
                className="rounded-xl border border-slate-200/90 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/50 p-3.5 sm:p-4 space-y-2"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="rounded-md bg-blue-600/15 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 px-2 py-0.5 font-mono text-xs font-bold">
                      Part {part.partNumber}
                    </span>
                    <span className="font-bold text-slate-900 dark:text-white">
                      {part.stageTitle}
                    </span>
                  </div>
                  <span className="font-mono text-xs font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-0.5 rounded-md border border-indigo-200/60 dark:border-indigo-800/60">
                    ⏱️ {part.timeRange} ({part.durationSec}s)
                  </span>
                </div>

                <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                  <strong className="text-indigo-700 dark:text-indigo-300">🎨 畫面分鏡：</strong>
                  {part.visualCue}
                </p>
                <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                  <strong className="text-emerald-700 dark:text-emerald-300">🎙️ 旁白重點：</strong>
                  {part.narrationFocus}
                </p>

                {part.keyElements.length > 0 && (
                  <ul className="pl-4 list-disc space-y-1 text-xs text-slate-600 dark:text-slate-400 pt-1">
                    {part.keyElements.map((el, i) => (
                      <li key={i}>{el}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
