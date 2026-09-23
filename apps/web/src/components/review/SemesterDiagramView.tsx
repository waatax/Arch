'use client';

import React from 'react';
import { SemesterDiagram } from '@/data/semesterReviews/types';
import { Compass, GitBranch, Activity, Box, Clock } from 'lucide-react';

interface SemesterDiagramViewProps {
  diagram: SemesterDiagram;
  chapterNo?: number;
}

export default function SemesterDiagramView({ diagram, chapterNo }: SemesterDiagramViewProps) {
  const getTypeIcon = () => {
    switch (diagram.type) {
      case 'fbd':
      case 'stress':
        return <Activity className="size-3.5 text-blue-500" />;
      case 'projection':
      case 'section':
      case 'cross-section':
      case 'component':
        return <Box className="size-3.5 text-indigo-500" />;
      case 'flowchart':
      case 'decision-tree':
      case 'matrix':
      case 'mindmap':
        return <GitBranch className="size-3.5 text-emerald-500" />;
      case 'timeline':
        return <Clock className="size-3.5 text-amber-500" />;
      case 'chart':
      case 'geometry':
      default:
        return <Compass className="size-3.5 text-violet-500" />;
    }
  };

  const getTypeBadge = () => {
    switch (diagram.type) {
      case 'fbd':
        return '力學受力圖 (FBD)';
      case 'stress':
        return '應力分佈圖';
      case 'projection':
        return '正投影幾何';
      case 'section':
      case 'cross-section':
        return '構造剖面圖';
      case 'component':
        return '構造儀器圖';
      case 'flowchart':
        return '邏輯流程圖';
      case 'decision-tree':
        return '文法決策樹';
      case 'mindmap':
        return '思維心智導圖';
      case 'matrix':
        return '空間矩陣架構';
      case 'timeline':
        return '時態時間軸';
      case 'chart':
        return '特性曲線圖';
      case 'geometry':
      default:
        return '幾何原理圖解';
    }
  };

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-900 text-slate-100 p-3.5 sm:p-4 space-y-3 shadow-xs print:bg-white print:text-black print:border-slate-400 print:p-2.5">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 print:border-slate-300">
        <div className="flex items-center gap-1.5">
          {getTypeIcon()}
          <span className="font-serif text-xs sm:text-sm font-bold tracking-tight text-white print:text-black">
            {chapterNo ? `第 ${chapterNo} 章・${diagram.title}` : diagram.title}
          </span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-800 text-blue-300 border border-slate-700 print:border-black print:text-black print:bg-transparent">
          {getTypeBadge()}
        </span>
      </div>

      {/* Visual Canvas (SVG or Clean ASCII Graphic) */}
      <div className="bg-slate-950/80 rounded-xl p-3 border border-slate-800/80 font-mono text-[11px] leading-tight overflow-x-auto text-emerald-400 select-all print:bg-slate-50 print:text-slate-900 print:border-slate-300">
        {diagram.svgContent ? (
          <div
            className="w-full flex justify-center py-1 [&_svg]:max-w-full [&_svg]:h-auto text-current"
            dangerouslySetInnerHTML={{ __html: diagram.svgContent }}
          />
        ) : diagram.asciiArt ? (
          <pre className="whitespace-pre font-mono text-[11px] leading-[1.3] text-emerald-300 print:text-slate-900 m-0">
            {diagram.asciiArt}
          </pre>
        ) : null}
      </div>

      {/* Caption & Explanation */}
      <p className="text-[11px] sm:text-xs text-slate-300 print:text-slate-700 leading-relaxed">
        <strong className="text-blue-400 print:text-black">圖解重點：</strong>
        {diagram.caption}
      </p>

      {/* Key Labels / Annotations */}
      {diagram.labels && diagram.labels.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1 border-t border-slate-800/60 print:border-slate-200">
          {diagram.labels.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-1.5 text-[10px] sm:text-[11px] bg-slate-800/50 dark:bg-slate-950 p-1.5 rounded-lg border border-slate-700/50 print:bg-transparent print:border-slate-200"
            >
              <span className="font-bold text-amber-400 print:text-black shrink-0 font-mono">
                [{item.label}]
              </span>
              <span className="text-slate-300 print:text-slate-800 leading-snug">
                {item.desc}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
