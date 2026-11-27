'use client';

import React, { useEffect, useId, useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import type { InfographicAnnotation } from '@/lib/pedagogy/topicInfographicsData';
import { TOPIC_INFOGRAPHIC_SCENES, type SceneMarkers } from './infographicScenes';
import { InfographicSceneContext } from './infographicScenes/scenePrimitives';

interface TopicInfographicSvgViewerProps {
  conceptType: string;
  topicSlug: string;
  subjectSlug: string;
  title: string;
  visualHighlights?: InfographicAnnotation[];
  activeHighlightIndex?: number | null;
  onSelectHighlight?: (index: number | null) => void;
  hideInlineHighlights?: boolean;
  className?: string;
}

export default function TopicInfographicSvgViewer({
  conceptType,
  topicSlug,
  subjectSlug,
  title,
  visualHighlights = [],
  activeHighlightIndex: controlledActiveIndex,
  onSelectHighlight: controlledOnSelect,
  hideInlineHighlights = false,
  className = '',
}: TopicInfographicSvgViewerProps) {
  const [internalActiveIndex, setInternalActiveIndex] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'blueprint' | 'schematic'>('blueprint');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const rawUid = useId().replace(/[^a-zA-Z0-9_-]/g, '');

  const isControlled = controlledActiveIndex !== undefined;
  const activeHighlightIndex = isControlled ? controlledActiveIndex : internalActiveIndex;

  const toggleHighlight = (idx: number) => {
    const next = activeHighlightIndex === idx ? null : idx;
    if (controlledOnSelect) {
      controlledOnSelect(next);
    } else {
      setInternalActiveIndex(next);
    }
  };

  useEffect(() => {
    if (!isLightboxOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsLightboxOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isLightboxOpen]);

  const routeKey = `${subjectSlug}/${topicSlug}`;
  const sceneRenderer = TOPIC_INFOGRAPHIC_SCENES[routeKey];

  const renderSvgCanvas = (suffix: string) => {
    const gridMinorId = `ig-grid-${rawUid}-${suffix}`;
    const gridMajorId = `ig-grid-major-${rawUid}-${suffix}`;
    const markers: SceneMarkers = {
      arrowBlue: `ig-arrow-blue-${rawUid}-${suffix}`,
      arrowRose: `ig-arrow-rose-${rawUid}-${suffix}`,
      arrowEmerald: `ig-arrow-emerald-${rawUid}-${suffix}`,
      arrowAmber: `ig-arrow-amber-${rawUid}-${suffix}`,
      dotBlue: `ig-dot-blue-${rawUid}-${suffix}`,
    };

    const renderFallback = () => (
      <g transform="translate(40, 40)">
        <rect width="800" height="276" rx="14" className="fill-white/85 dark:fill-slate-900/80 stroke-indigo-300 dark:stroke-indigo-800" strokeWidth="1.5" />
        <text x="400" y="114" textAnchor="middle" className="fill-indigo-900 dark:fill-indigo-200 text-sm font-bold">
          {title}
        </text>
        <text x="400" y="150" textAnchor="middle" className="fill-slate-500 text-xs font-mono">
          {routeKey} · {conceptType}
        </text>
      </g>
    );

    return (
      <InfographicSceneContext.Provider
        value={{
          activeHighlightIndex,
          onSelectHighlight: toggleHighlight,
        }}
      >
        <svg
          viewBox="0 0 880 356"
          className="w-full h-auto select-none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label={`${title} 向量圖解`}
        >
          <title>{`${title} - ${subjectSlug}/${topicSlug}`}</title>
          <defs>
            <pattern id={gridMinorId} width="20" height="20" patternUnits="userSpaceOnUse">
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-indigo-500/10 dark:text-cyan-400/15"
              />
            </pattern>
            <pattern id={gridMajorId} width="100" height="100" patternUnits="userSpaceOnUse">
              <rect width="100" height="100" fill={`url(#${gridMinorId})`} />
              <path
                d="M 100 0 L 0 0 0 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-indigo-500/20 dark:text-cyan-400/25"
              />
            </pattern>
            <marker id={markers.arrowBlue} viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" className="fill-blue-600 dark:fill-blue-400" />
            </marker>
            <marker id={markers.arrowRose} viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" className="fill-rose-600 dark:fill-rose-400" />
            </marker>
            <marker id={markers.arrowEmerald} viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" className="fill-emerald-600 dark:fill-emerald-400" />
            </marker>
            <marker id={markers.arrowAmber} viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" className="fill-amber-600 dark:fill-amber-400" />
            </marker>
            <marker id={markers.dotBlue} viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4">
              <circle cx="5" cy="5" r="4" className="fill-blue-600 dark:fill-blue-400" />
            </marker>
          </defs>
          {viewMode === 'blueprint' && (
            <rect width="880" height="356" fill={`url(#${gridMajorId})`} />
          )}
          {sceneRenderer ? sceneRenderer(markers) : renderFallback()}
        </svg>
      </InfographicSceneContext.Provider>
    );
  };

  return (
    <div className={`relative overflow-hidden rounded-2xl border border-indigo-200/80 dark:border-indigo-900/60 bg-slate-900/5 dark:bg-slate-950/80 p-2 sm:p-4 shadow-inner ${className}`}>
      {/* Visual Controls Bar */}
      <div className="mb-2 flex flex-wrap items-center justify-between gap-2 px-2 text-xs">
        <div className="flex items-center gap-1.5 font-mono text-slate-500 dark:text-slate-400">
          <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-bold">專屬知識向量圖解 · {title || '空間表徵'}</span>
          <span className="text-[10px] text-slate-400 dark:text-slate-600 hidden sm:inline">({subjectSlug}/{topicSlug})</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setViewMode(viewMode === 'blueprint' ? 'schematic' : 'blueprint')}
            className="rounded-lg bg-white/80 dark:bg-slate-800 px-2.5 py-1 font-mono text-[11px] font-semibold text-indigo-700 dark:text-indigo-300 border border-slate-200 dark:border-slate-700 hover:bg-indigo-50 dark:hover:bg-slate-700 transition cursor-pointer"
          >
            {viewMode === 'blueprint' ? '📐 藍圖網格模式' : '📑 簡化圖式模式'}
          </button>
          <button
            type="button"
            onClick={() => setIsLightboxOpen(true)}
            className="inline-flex items-center gap-1 rounded-lg bg-indigo-600/10 dark:bg-indigo-500/20 px-2.5 py-1 font-mono text-[11px] font-semibold text-indigo-700 dark:text-indigo-200 border border-indigo-300/70 dark:border-indigo-700 hover:bg-indigo-600 hover:text-white transition cursor-pointer"
            aria-label="放大全螢幕檢視向量圖解"
          >
            <Maximize2 className="size-3" />
            <span>放大全螢幕</span>
          </button>
        </div>
      </div>

      {/* Main SVG Canvas */}
      <div className="relative w-full overflow-hidden rounded-xl border border-slate-200/60 dark:border-slate-800/80 bg-white dark:bg-slate-950 shadow-xs">
        {renderSvgCanvas('main')}
      </div>

      {/* Standalone Inline Highlights (hidden when controlled by TopicInfographicCard cards below) */}
      {!hideInlineHighlights && visualHighlights.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2 px-1">
          {visualHighlights.map((hl, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => toggleHighlight(idx)}
              className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-mono transition-all cursor-pointer ${
                activeHighlightIndex === idx
                  ? 'bg-indigo-600 text-white shadow-xs scale-102'
                  : 'bg-white/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-300'
              }`}
            >
              <span className="size-1.5 rounded-full bg-indigo-500" />
              <span className="font-bold">{hl.label}</span>
              {hl.badge && (
                <span className="rounded bg-indigo-100 dark:bg-indigo-900/60 px-1 py-0.2 text-[9px] text-indigo-800 dark:text-indigo-200">
                  {hl.badge}
                </span>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Active Highlight Spotlight Banner */}
      {activeHighlightIndex !== null && visualHighlights[activeHighlightIndex] && (
        <div className="mt-2.5 flex items-start justify-between gap-3 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50/90 dark:bg-indigo-950/60 p-3 text-xs leading-relaxed text-indigo-950 dark:text-indigo-200">
          <div>
            <span className="mr-1.5 inline-flex items-center rounded bg-indigo-600 px-1.5 py-0.5 font-mono text-[10px] font-bold text-white">
              重點 #{activeHighlightIndex + 1}
            </span>
            <strong>{visualHighlights[activeHighlightIndex].label}：</strong>
            {visualHighlights[activeHighlightIndex].desc}
          </div>
          <button
            type="button"
            onClick={() => toggleHighlight(activeHighlightIndex)}
            className="shrink-0 rounded-md px-2 py-0.5 text-[11px] font-mono text-indigo-600 hover:bg-indigo-100 dark:text-indigo-300 dark:hover:bg-indigo-900/60 cursor-pointer"
          >
            取消聚焦
          </button>
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} 全螢幕向量圖解`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 sm:p-8"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative w-full max-w-6xl rounded-2xl border border-indigo-400/40 bg-white dark:bg-slate-950 p-4 sm:p-6 shadow-2xl space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-3">
              <div>
                <h4 className="font-serif text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  {title}
                </h4>
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  點選圖解右側步驟列可互動聚焦重點 · 按 ESC 或點擊背景關閉
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="inline-flex items-center gap-1 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition cursor-pointer"
              >
                <X className="size-4" />
                <span>關閉</span>
              </button>
            </div>
            <div className="overflow-auto max-h-[78vh] rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
              {renderSvgCanvas('lightbox')}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
