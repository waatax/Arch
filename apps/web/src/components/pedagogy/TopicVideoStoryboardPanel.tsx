'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ExternalLink, PlayCircle, ListVideo, Tv, CheckCircle2 } from 'lucide-react';
import type { SubjectData, TopicContent } from '@/data/types';
import { buildTopicVideoEpisode, VIDEO_PRODUCTION_SPEC } from '@/data/videoSyllabus';
import { getVideosForTopic, YOUTUBE_PLAYLIST_URL } from '@/data/youtubeVideos';

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
  const [activeEmbedCode, setActiveEmbedCode] = useState<string | null>(null);

  const episode = buildTopicVideoEpisode(subject, topic, chapterIndex);
  const topicVideos = getVideosForTopic(subject.slug, topic.slug);
  const primaryVideo = topicVideos[0];
  const extraVideos = topicVideos.slice(1);
  const activeEmbedVideo = topicVideos.find((v) => v.episodeCode === activeEmbedCode && v.youtubeEmbedUrl);

  return (
    <div
      id="topic-video-panel"
      className="print:hidden scroll-mt-24 rounded-2xl border border-indigo-200/80 dark:border-indigo-900/60 bg-gradient-to-r from-indigo-50/80 via-white to-blue-50/60 dark:from-indigo-950/35 dark:via-slate-900 dark:to-blue-950/25 shadow-2xs overflow-hidden"
    >
      {/* Top YouTube Teaching Video Action Strip */}
      <div className="px-4 py-3.5 sm:px-5 border-b border-indigo-200/60 dark:border-indigo-900/50 bg-white/75 dark:bg-slate-900/75 flex flex-col gap-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-lg bg-red-600 px-2.5 py-1 text-[11px] font-mono font-bold text-white shadow-2xs">
              <PlayCircle className="w-3.5 h-3.5" />
              {primaryVideo?.episodeCode ?? episode.episodeCode}
            </span>
            {primaryVideo?.youtubeUrl && (
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 px-2.5 py-0.5 text-[11px] font-mono font-bold text-emerald-700 dark:text-emerald-300">
                <CheckCircle2 className="w-3 h-3" />
                YouTube 已上架 · {primaryVideo.durationLabel}
              </span>
            )}
            <span className="font-serif text-sm sm:text-base font-bold text-slate-900 dark:text-white">
              本章 YouTube 教學影片（為何要學 × 觀念圖解 × 應用變化 × 統測真題）
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {primaryVideo?.youtubeUrl ? (
              <>
                <button
                  type="button"
                  onClick={() =>
                    setActiveEmbedCode((prev) =>
                      prev === primaryVideo.episodeCode ? null : primaryVideo.episodeCode
                    )
                  }
                  className="inline-flex items-center gap-1.5 rounded-xl bg-red-600 hover:bg-red-700 text-white px-3.5 py-1.5 text-xs font-bold transition-colors cursor-pointer shadow-2xs"
                >
                  <Tv className="w-3.5 h-3.5" />
                  {activeEmbedCode === primaryVideo.episodeCode ? '收合站內播放器' : '站內播放影片'}
                </button>
                <a
                  href={primaryVideo.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-red-200 dark:border-red-900/70 bg-red-50 dark:bg-red-950/40 hover:bg-red-100 dark:hover:bg-red-950/70 text-red-700 dark:text-red-300 px-3 py-1.5 text-xs font-bold transition-colors"
                >
                  <span>前往 YouTube 觀看</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </>
            ) : (
              <a
                href={YOUTUBE_PLAYLIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl bg-red-600 hover:bg-red-700 text-white px-3.5 py-1.5 text-xs font-bold transition-colors shadow-2xs"
              >
                <ListVideo className="w-3.5 h-3.5" />
                <span>前往高工 13 科 YouTube 播放清單</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <Link
              href={`/videos?subject=${subject.slug}`}
              className="inline-flex items-center gap-1.5 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50/90 dark:bg-indigo-950/40 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 px-3 py-1.5 text-xs font-bold transition-colors"
            >
              <span>全部教學影片總覽</span>
            </Link>
          </div>
        </div>

        {/* Linked Standalone TCTE Extra Chapter(s), if any */}
        {extraVideos.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
            <span className="rounded-md bg-amber-100 dark:bg-amber-950/60 border border-amber-300/70 dark:border-amber-800 px-2 py-0.5 font-mono font-bold text-amber-800 dark:text-amber-300">
              統測加碼獨立專章
            </span>
            {extraVideos.map((extra) => (
              <div
                key={extra.episodeCode}
                className="inline-flex flex-wrap items-center gap-2 rounded-lg border border-amber-200/80 dark:border-amber-900/60 bg-amber-50/70 dark:bg-amber-950/25 px-2.5 py-1"
              >
                <span className="font-mono font-bold text-amber-900 dark:text-amber-200">
                  {extra.episodeCode}
                </span>
                <span className="text-slate-700 dark:text-slate-300 font-medium">
                  {extra.topicTitle}
                </span>
                {extra.youtubeUrl ? (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setActiveEmbedCode((prev) =>
                          prev === extra.episodeCode ? null : extra.episodeCode
                        )
                      }
                      className="text-red-700 dark:text-red-300 font-bold underline underline-offset-2 cursor-pointer"
                    >
                      {activeEmbedCode === extra.episodeCode ? '收合' : '播放'}
                    </button>
                    <a
                      href={extra.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-0.5 text-red-700 dark:text-red-300 font-bold hover:underline"
                    >
                      YouTube <ExternalLink className="w-3 h-3" />
                    </a>
                  </>
                ) : (
                  <a
                    href={YOUTUBE_PLAYLIST_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-0.5 text-indigo-700 dark:text-indigo-300 font-bold hover:underline"
                  >
                    播放清單 <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Inline YouTube Embed Player or Click-to-Play Thumbnail Preview */}
        {activeEmbedVideo?.youtubeEmbedUrl ? (
          <div className="pt-1">
            <div className="relative w-full overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-950 aspect-video shadow-sm">
              <iframe
                src={activeEmbedVideo.youtubeEmbedUrl}
                title={`${activeEmbedVideo.episodeCode} ${activeEmbedVideo.topicTitle}`}
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        ) : primaryVideo?.youtubeVideoId ? (
          <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 rounded-xl border border-red-200/70 dark:border-red-900/50 bg-gradient-to-r from-red-50/50 via-white to-slate-50/60 dark:from-red-950/20 dark:via-slate-900 dark:to-slate-900 p-3">
            <button
              type="button"
              onClick={() => setActiveEmbedCode(primaryVideo.episodeCode)}
              className="group relative w-full sm:w-56 shrink-0 overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-950 aspect-video cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label={`站內播放 ${primaryVideo.episodeCode} ${primaryVideo.topicTitle}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://i.ytimg.com/vi/${primaryVideo.youtubeVideoId}/hqdefault.jpg`}
                alt={`${primaryVideo.episodeCode} ${primaryVideo.topicTitle}`}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover opacity-90 transition-transform duration-300 group-hover:scale-105 group-hover:opacity-100"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/25 group-hover:bg-black/15 transition-colors">
                <span className="inline-flex items-center justify-center rounded-full bg-red-600/95 p-2.5 text-white shadow-lg transition-transform group-hover:scale-110">
                  <PlayCircle className="w-6 h-6 fill-white/20" />
                </span>
              </div>
              <span className="absolute right-1.5 bottom-1.5 rounded bg-black/80 px-1.5 py-0.5 font-mono text-[10px] font-bold text-white">
                {primaryVideo.durationLabel}
              </span>
            </button>
            <div className="flex-1 min-w-0 space-y-1.5 text-xs">
              <div className="font-mono text-[11px] font-bold text-red-700 dark:text-red-400">
                點擊縮圖即可在站內直接播放完整 {primaryVideo.durationLabel} 影音課程
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed line-clamp-2">
                {primaryVideo.realLifeSummary}
              </p>
              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                搭配下方互動圖解、公式速查與統測真題演練，學習吸收效率最佳。
              </div>
            </div>
          </div>
        ) : null}
      </div>

      {/* Collapsible 5-Part Storyboard Drawer */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        className="w-full flex flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-5 text-left hover:bg-indigo-100/40 dark:hover:bg-indigo-950/40 transition-colors cursor-pointer"
      >
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-center gap-1 rounded-lg bg-indigo-600 px-2.5 py-1 text-[11px] font-mono font-bold text-white shadow-2xs">
            🎬 分鏡大綱
          </span>
          <span className="font-serif text-sm font-bold text-slate-900 dark:text-white">
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
