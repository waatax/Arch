'use client';

import React, { useId, useState } from 'react';
import type { InfographicAnnotation } from '@/lib/pedagogy/topicInfographicsData';
import { TOPIC_INFOGRAPHIC_SCENES, type SceneMarkers } from './infographicScenes';

interface TopicInfographicSvgViewerProps {
  conceptType: string;
  topicSlug: string;
  subjectSlug: string;
  title: string;
  visualHighlights?: InfographicAnnotation[];
  className?: string;
}

export default function TopicInfographicSvgViewer({
  conceptType,
  topicSlug,
  subjectSlug,
  title,
  visualHighlights = [],
  className = '',
}: TopicInfographicSvgViewerProps) {
  const [activeHighlightIndex, setActiveHighlightIndex] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'blueprint' | 'schematic'>('blueprint');
  const rawUid = useId().replace(/[^a-zA-Z0-9_-]/g, '');

  const gridMinorId = `ig-grid-${rawUid}`;
  const gridMajorId = `ig-grid-major-${rawUid}`;
  const markers: SceneMarkers = {
    arrowBlue: `ig-arrow-blue-${rawUid}`,
    arrowRose: `ig-arrow-rose-${rawUid}`,
    arrowEmerald: `ig-arrow-emerald-${rawUid}`,
    arrowAmber: `ig-arrow-amber-${rawUid}`,
    dotBlue: `ig-dot-blue-${rawUid}`,
  };

  const routeKey = `${subjectSlug}/${topicSlug}`;
  const sceneRenderer = TOPIC_INFOGRAPHIC_SCENES[routeKey];

  const renderDefs = () => (
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
  );

  const renderFallback = () => (
    <g transform="translate(40, 40)">
      <rect width="680" height="240" rx="14" className="fill-white/85 dark:fill-slate-900/80 stroke-indigo-300 dark:stroke-indigo-800" strokeWidth="1.5" />
      <text x="340" y="96" textAnchor="middle" className="fill-indigo-900 dark:fill-indigo-200 text-sm font-bold">
        {title}
      </text>
      <text x="340" y="132" textAnchor="middle" className="fill-slate-500 text-xs font-mono">
        {routeKey} · {conceptType}
      </text>
    </g>
  );

  return (
    <div className={`relative overflow-hidden rounded-2xl border border-indigo-200/80 dark:border-indigo-900/60 bg-slate-900/5 dark:bg-slate-950/80 p-2 sm:p-4 shadow-inner ${className}`}>
      {/* Visual Controls Bar */}
      <div className="mb-2 flex items-center justify-between px-2 text-xs">
        <div className="flex items-center gap-1.5 font-mono text-slate-500 dark:text-slate-400">
          <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-bold">專屬知識向量圖解 · {title || '空間表徵'}</span>
          <span className="text-[10px] text-slate-400 dark:text-slate-600 hidden sm:inline">({subjectSlug}/{topicSlug})</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setViewMode(viewMode === 'blueprint' ? 'schematic' : 'blueprint')}
            className="rounded-lg bg-white/80 dark:bg-slate-800 px-2.5 py-1 font-mono text-[11px] font-semibold text-indigo-700 dark:text-indigo-300 border border-slate-200 dark:border-slate-700 hover:bg-indigo-50 dark:hover:bg-slate-700 transition"
          >
            {viewMode === 'blueprint' ? '📐 藍圖網格模式' : '📑 簡化圖式模式'}
          </button>
        </div>
      </div>

      {/* Main SVG Canvas */}
      <div className="relative w-full overflow-hidden rounded-xl border border-slate-200/60 dark:border-slate-800/80 bg-white dark:bg-slate-950 shadow-xs">
        <svg
          viewBox="0 0 760 320"
          className="w-full h-auto select-none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label={`${title} 向量圖解`}
        >
          <title>{`${title} - ${subjectSlug}/${topicSlug}`}</title>
          {renderDefs()}
          {viewMode === 'blueprint' && (
            <rect width="760" height="320" fill={`url(#${gridMajorId})`} />
          )}
          {sceneRenderer ? sceneRenderer(markers) : renderFallback()}
        </svg>
      </div>

      {/* Interactive Highlight Nodes */}
      {visualHighlights.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2 px-1">
          {visualHighlights.map((hl, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveHighlightIndex(activeHighlightIndex === idx ? null : idx)}
              className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-mono transition-all ${
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

      {/* Active Highlight Description Tooltip */}
      {activeHighlightIndex !== null && visualHighlights[activeHighlightIndex] && (
        <div className="mt-2 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50/90 dark:bg-indigo-950/60 p-3 text-xs leading-relaxed text-indigo-950 dark:text-indigo-200 animate-in fade-in duration-200">
          <strong>{visualHighlights[activeHighlightIndex].label}：</strong>
          {visualHighlights[activeHighlightIndex].desc}
        </div>
      )}
    </div>
  );
}
