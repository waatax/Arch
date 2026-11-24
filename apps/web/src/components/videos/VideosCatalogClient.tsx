'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  PlayCircle,
  ExternalLink,
  Search,
  BookOpen,
  ListVideo,
  Tv,
  Sparkles,
  CheckCircle2,
  Clock,
} from 'lucide-react';
import type { SubjectVideoGroup, HighSchoolVideoEntry } from '@/data/youtubeVideos';
import { ArchitecturalSubjectIcon } from '@/components/ui/ArchitecturalIcons';

interface VideosCatalogClientProps {
  groups: SubjectVideoGroup[];
  stats: {
    totalSubjects: number;
    totalEpisodes: number;
    standardEpisodes: number;
    extraTcteEpisodes: number;
    uploadedCount: number;
    playlistId: string;
    playlistUrl: string;
    playlistTitle: string;
    updatedAt: string;
  };
}

export default function VideosCatalogClient({ groups, stats }: VideosCatalogClientProps) {
  const searchParams = useSearchParams();
  const initialSubjectParam = searchParams.get('subject');
  const [selectedSubjectOverride, setSelectedSubjectOverride] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState<'all' | 'uploaded'>('all');
  const [query, setQuery] = useState<string>('');
  const [activeEmbedCode, setActiveEmbedCode] = useState<string | null>(null);

  const selectedSubject = useMemo(() => {
    if (selectedSubjectOverride !== null) return selectedSubjectOverride;
    if (initialSubjectParam && groups.some((g) => g.subjectSlug === initialSubjectParam)) {
      return initialSubjectParam;
    }
    return 'all';
  }, [selectedSubjectOverride, initialSubjectParam, groups]);

  const setSelectedSubject = (slug: string) => setSelectedSubjectOverride(slug);

  const filteredGroups = useMemo(() => {
    const q = query.trim().toLowerCase();
    const mapped = groups
      .filter((g) => selectedSubject === 'all' || g.subjectSlug === selectedSubject)
      .map((g) => {
        let episodes = g.episodes;
        if (statusFilter === 'uploaded') {
          episodes = episodes.filter((ep) => Boolean(ep.youtubeUrl));
        }
        if (q) {
          episodes = episodes.filter(
            (ep) =>
              ep.episodeCode.toLowerCase().includes(q) ||
              ep.topicTitle.toLowerCase().includes(q) ||
              ep.curriculumCode.toLowerCase().includes(q) ||
              ep.realLifeSummary.toLowerCase().includes(q) ||
              ep.whereUsed.toLowerCase().includes(q) ||
              ep.subjectTitle.toLowerCase().includes(q)
          );
        }
        return { ...g, episodes };
      })
      .filter((g) => g.episodes.length > 0);

    // Put subjects with uploaded YouTube videos first when viewing all subjects
    if (selectedSubject === 'all') {
      return [...mapped].sort((a, b) => {
        if (b.uploadedCount > 0 && a.uploadedCount === 0) return 1;
        if (a.uploadedCount > 0 && b.uploadedCount === 0) return -1;
        return 0;
      });
    }
    return mapped;
  }, [groups, selectedSubject, statusFilter, query]);

  const visibleCount = useMemo(
    () => filteredGroups.reduce((sum, g) => sum + g.episodes.length, 0),
    [filteredGroups]
  );

  const renderEpisodeCard = (ep: HighSchoolVideoEntry) => {
    const isPlaying = activeEmbedCode === ep.episodeCode && Boolean(ep.youtubeEmbedUrl);
    return (
      <article
        key={ep.episodeCode}
        className="flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-4 sm:p-5 shadow-2xs hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors gap-3"
      >
        <div className="space-y-2.5">
          {/* Badges row */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="rounded-lg bg-slate-900 dark:bg-indigo-600 px-2.5 py-0.5 font-mono text-xs font-bold text-white">
                {ep.episodeCode}
              </span>
              <span className="rounded-md bg-slate-100 dark:bg-slate-800 px-2 py-0.5 font-mono text-[11px] font-semibold text-slate-600 dark:text-slate-300">
                {ep.curriculumCode}
              </span>
              <span className="rounded-md bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 font-mono text-[11px] font-semibold text-blue-700 dark:text-blue-300">
                高{ep.gradeLevel === 10 ? '一' : ep.gradeLevel === 11 ? '二' : '三'}
              </span>
              {ep.isExtraTcteChapter && (
                <span className="rounded-md bg-amber-100 dark:bg-amber-950/70 border border-amber-300/70 dark:border-amber-800 px-2 py-0.5 font-mono text-[11px] font-bold text-amber-800 dark:text-amber-300">
                  統測補齊專章
                </span>
              )}
            </div>

            {ep.youtubeUrl ? (
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 px-2 py-0.5 text-[11px] font-bold text-emerald-700 dark:text-emerald-300">
                <CheckCircle2 className="w-3 h-3" />
                YouTube 已上架
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:text-slate-400">
                <Clock className="w-3 h-3" />
                播放清單同步中
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="font-serif text-base font-bold leading-snug text-slate-900 dark:text-white">
            {ep.topicTitle}
          </h3>

          {/* Real-life hook */}
          <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
            <strong className="text-teal-700 dark:text-teal-400">為何要學：</strong>
            {ep.realLifeSummary}
          </p>
          <p className="text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
            <strong className="text-indigo-700 dark:text-indigo-300">哪裡用到：</strong>
            {ep.whereUsed}
          </p>

          {/* Inline YouTube Player or Thumbnail Preview */}
          {ep.youtubeVideoId && (
            <div className="pt-1">
              {isPlaying && ep.youtubeEmbedUrl ? (
                <div className="relative w-full overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-950 aspect-video shadow-sm">
                  <iframe
                    src={ep.youtubeEmbedUrl}
                    title={`${ep.episodeCode} ${ep.topicTitle}`}
                    className="absolute inset-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setActiveEmbedCode(ep.episodeCode)}
                  className="group relative block w-full overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-950 aspect-video cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500"
                  aria-label={`站內播放 ${ep.episodeCode} ${ep.topicTitle}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://i.ytimg.com/vi/${ep.youtubeVideoId}/hqdefault.jpg`}
                    alt={`${ep.episodeCode} ${ep.topicTitle}`}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover opacity-90 transition-transform duration-300 group-hover:scale-105 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/25 group-hover:bg-black/15 transition-colors">
                    <span className="inline-flex items-center justify-center rounded-full bg-red-600/95 p-3 text-white shadow-lg transition-transform group-hover:scale-110">
                      <PlayCircle className="w-7 h-7 fill-white/20" />
                    </span>
                  </div>
                  <span className="absolute right-2 bottom-2 rounded-md bg-black/80 px-2 py-0.5 font-mono text-[11px] font-bold text-white backdrop-blur-xs">
                    {ep.durationLabel}
                  </span>
                </button>
              )}
            </div>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
          {ep.youtubeUrl ? (
            <>
              <button
                type="button"
                onClick={() =>
                  setActiveEmbedCode((prev) => (prev === ep.episodeCode ? null : ep.episodeCode))
                }
                className="inline-flex items-center gap-1.5 rounded-xl bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 text-xs font-bold transition-colors cursor-pointer"
              >
                <Tv className="w-3.5 h-3.5" />
                {isPlaying ? '收合播放' : '站內觀看'}
              </button>
              <a
                href={ep.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-red-200 dark:border-red-900/70 bg-red-50 dark:bg-red-950/40 hover:bg-red-100 dark:hover:bg-red-950/70 text-red-700 dark:text-red-300 px-3 py-1.5 text-xs font-bold transition-colors"
              >
                <PlayCircle className="w-3.5 h-3.5" />
                <span>YouTube 連結</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </>
          ) : (
            <a
              href={ep.playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-red-600/90 hover:bg-red-700 text-white px-3 py-1.5 text-xs font-bold transition-colors"
            >
              <ListVideo className="w-3.5 h-3.5" />
              <span>YouTube 播放清單</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}

          <Link
            href={ep.topicHref}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 px-3 py-1.5 text-xs font-bold transition-colors ml-auto"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>對應教學講義</span>
          </Link>
        </div>
      </article>
    );
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 space-y-8">
      {/* Hero Banner */}
      <header className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-6 sm:p-10 text-white shadow-lg">
        <div className="relative z-10 space-y-5 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="inline-flex items-center gap-1 rounded-full bg-red-600 px-3 py-1 font-bold text-white">
              <PlayCircle className="w-3.5 h-3.5" />
              YouTube 公開影音課程 · 非兒童專屬
            </span>
            <span className="rounded-full bg-white/10 border border-white/15 px-3 py-1 text-indigo-100">
              108 課綱技術型高中土木與建築群 × 115/116 統測
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold leading-tight tracking-tight">
            高工建築科 13 科統測教學影片專區
          </h1>

          <p className="text-sm sm:text-base leading-relaxed text-slate-200 max-w-3xl">
            完整收錄高工統測 13 科共 <strong className="text-white">{stats.totalEpisodes} 支</strong> 全新深度教學影片（{stats.standardEpisodes} 個課綱章節＋{stats.extraTcteEpisodes} 個統測獨立補齊專章）。每支影片皆對齊站內講義，完整講解「為何要學與生活應用 → 核心知識點 SVG 圖解 → 應用變化與條件變形 → 致命陷阱與歷屆統測真題」。
          </p>

          {/* Metrics Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1 font-mono">
            <div className="rounded-2xl bg-white/10 border border-white/15 p-3.5">
              <span className="block text-[11px] text-slate-300">涵蓋科目</span>
              <span className="text-2xl font-bold text-white">{stats.totalSubjects} 科</span>
            </div>
            <div className="rounded-2xl bg-white/10 border border-white/15 p-3.5">
              <span className="block text-[11px] text-slate-300">高工統測總集數</span>
              <span className="text-2xl font-bold text-amber-300">{stats.totalEpisodes} 集</span>
            </div>
            <div className="rounded-2xl bg-white/10 border border-white/15 p-3.5">
              <span className="block text-[11px] text-slate-300">YouTube 已連結</span>
              <span className="text-2xl font-bold text-emerald-300">
                {stats.uploadedCount} / {stats.totalEpisodes}
              </span>
            </div>
            <div className="rounded-2xl bg-white/10 border border-white/15 p-3.5">
              <span className="block text-[11px] text-slate-300">畫質與字幕規格</span>
              <span className="text-base font-bold text-sky-300">1080p + 繁中字幕</span>
            </div>
          </div>

          {/* Primary CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {stats.uploadedCount > 0 && (
              <button
                type="button"
                onClick={() => {
                  setSelectedSubject('all');
                  setStatusFilter('uploaded');
                  document.getElementById('video-catalog-filters')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-3 text-sm font-bold transition-colors shadow-md cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>立即看已上架課程 ({stats.uploadedCount} 集)</span>
              </button>
            )}
            <a
              href={stats.playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-red-600 hover:bg-red-500 text-white px-5 py-3 text-sm font-bold transition-colors shadow-md"
            >
              <ListVideo className="w-4 h-4" />
              <span>開啟 YouTube 完整播放清單</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              href="/curriculum"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white px-5 py-3 text-sm font-bold transition-colors"
            >
              <Sparkles className="w-4 h-4" />
              <span>對照 13 科完整課程地圖</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Filter & Search Bar */}
      <section id="video-catalog-filters" className="scroll-mt-24 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 sm:p-5 space-y-4 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="relative flex-1 max-w-xl">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="搜尋集數代碼（如 CHEM01、CHIN03、CIVC01）、章節標題、課綱代碼或生活應用關鍵字..."
              aria-label="搜尋教學影片"
              className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 pl-10 pr-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex rounded-xl bg-slate-100 dark:bg-slate-800 p-1 text-xs font-bold">
              <button
                type="button"
                onClick={() => setStatusFilter('all')}
                className={`rounded-lg px-3 py-1 transition-colors cursor-pointer ${
                  statusFilter === 'all'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-2xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                全部 ({stats.totalEpisodes})
              </button>
              <button
                type="button"
                onClick={() => setStatusFilter('uploaded')}
                className={`inline-flex items-center gap-1 rounded-lg px-3 py-1 transition-colors cursor-pointer ${
                  statusFilter === 'uploaded'
                    ? 'bg-emerald-600 text-white shadow-2xs'
                    : 'text-emerald-700 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/50'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>YouTube 已上架 ({stats.uploadedCount})</span>
              </button>
            </div>
            <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
              顯示 <strong className="text-slate-900 dark:text-white">{visibleCount}</strong> 支
            </div>
          </div>
        </div>

        {/* Subject Filter Chips */}
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="依科目篩選教學影片">
          <button
            type="button"
            role="tab"
            aria-selected={selectedSubject === 'all'}
            onClick={() => setSelectedSubject('all')}
            className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-colors cursor-pointer ${
              selectedSubject === 'all'
                ? 'bg-indigo-600 text-white shadow-2xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            全部 13 科 ({stats.totalEpisodes})
          </button>
          {groups.map((g) => (
            <button
              key={g.subjectSlug}
              type="button"
              role="tab"
              aria-selected={selectedSubject === g.subjectSlug}
              onClick={() => setSelectedSubject(g.subjectSlug)}
              className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold transition-colors cursor-pointer ${
                selectedSubject === g.subjectSlug
                  ? 'bg-indigo-600 text-white shadow-2xs'
                  : g.uploadedCount > 0
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/70 text-emerald-800 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-950/70'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {g.uploadedCount > 0 && (
                <span
                  className={`h-2 w-2 rounded-full ${
                    selectedSubject === g.subjectSlug ? 'bg-emerald-300' : 'bg-emerald-500'
                  }`}
                />
              )}
              <span>{g.subjectTitle}</span>
              <span className="font-mono text-[11px] opacity-80">
                {g.uploadedCount > 0 ? `${g.uploadedCount}/${g.totalCount}` : `(${g.totalCount})`}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Subject-grouped Video Sections */}
      {filteredGroups.length === 0 ? (
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-10 text-center space-y-2">
          <p className="text-base font-bold text-slate-900 dark:text-white">找不到符合條件的教學影片</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            請嘗試更換關鍵字或切換回「全部 13 科」。
          </p>
        </div>
      ) : (
        <div className="space-y-10">
          {filteredGroups.map((group) => (
            <section
              key={group.subjectSlug}
              id={`subject-${group.subjectSlug}`}
              className="space-y-4 scroll-mt-24"
            >
              {/* Subject Section Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b-2 border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200/70 dark:border-indigo-800/60">
                    <ArchitecturalSubjectIcon slug={group.subjectSlug} size={24} strokeWidth={1.75} />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                        {group.subjectTitle}
                      </h2>
                      <span className="rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/70 dark:border-blue-800 px-2.5 py-0.5 text-[11px] font-mono font-bold text-blue-700 dark:text-blue-300">
                        {group.category}
                      </span>
                      <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 text-[11px] font-mono font-semibold text-slate-600 dark:text-slate-300">
                        {group.episodes.length} 集（已連結 {group.uploadedCount} 集）
                      </span>
                    </div>
                  </div>
                </div>

                <Link
                  href={`/subjects/${group.subjectSlug}`}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 px-3.5 py-2 text-xs font-bold text-slate-700 dark:text-slate-200 transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>進入 {group.subjectTitle} 科目講義 →</span>
                </Link>
              </div>

              {/* Episode Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.episodes.map(renderEpisodeCard)}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
