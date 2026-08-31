'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Star,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Compass,
  Zap,
  Layers,
} from 'lucide-react';
import { soundEngine } from '@/lib/audio/soundEffects';
import { useGamificationStore } from '@/lib/store/gamificationStore';
import {
  ConstellationStarNode,
  getSubjectConstellation,
} from '@/data/constellations/subjectConstellations';

interface SubjectConstellationCanvasProps {
  subjectSlug: string;
  activeTopicSlug?: string;
  compact?: boolean;
  showTitleHeader?: boolean;
}

export default function SubjectConstellationCanvas({
  subjectSlug,
  activeTopicSlug,
  compact = false,
  showTitleHeader = true,
}: SubjectConstellationCanvasProps) {
  const constellation = getSubjectConstellation(subjectSlug);
  const { unlockedStars, unlockStarNode, soundEnabled } = useGamificationStore();

  const defaultStar = activeTopicSlug
    ? constellation?.stars.find((s) => s.topicSlug === activeTopicSlug) || constellation?.stars[0]
    : constellation?.stars[0];

  const [selectedStar, setSelectedStar] = useState<ConstellationStarNode | null>(defaultStar ?? null);
  const [hoveredStar, setHoveredStar] = useState<ConstellationStarNode | null>(null);

  if (!constellation) {
    return null;
  }

  const handleStarClick = (star: ConstellationStarNode) => {
    setSelectedStar(star);
    if (!unlockedStars.includes(star.id)) {
      unlockStarNode(star.id);
      if (soundEnabled) soundEngine.playCorrectChime();
    } else {
      if (soundEnabled) soundEngine.playClickBeep();
    }
  };

  const handleLightUpAll = () => {
    const allIds = constellation.stars.map((s) => s.id);
    allIds.forEach((id) => unlockStarNode(id));
    if (soundEnabled) soundEngine.playCorrectChime();
  };

  const unlockedSubjectStars = constellation.stars.filter((s) => unlockedStars.includes(s.id));
  const progressPct = Math.round((unlockedSubjectStars.length / constellation.stars.length) * 100);

  const themeColor = constellation.color || '#818cf8';

  return (
    <div className="space-y-6">
      {showTitleHeader && (
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-mono font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                <Compass className="size-3.5" style={{ color: themeColor }} />
                <span>{constellation.constellationShapeName}</span>
                <span className="text-slate-400">·</span>
                <span>{constellation.category}</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-2">
                <span>{constellation.symbolEmoji}</span>
                <span>{constellation.title} · 知識點星圖網絡</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                {constellation.description}
              </p>
            </div>

            {/* Progress Capsule Bar */}
            <div className="rounded-2xl bg-slate-50 dark:bg-slate-950 p-4 border border-slate-200 dark:border-slate-800 space-y-2 min-w-[240px] font-mono text-xs">
              <div className="flex justify-between items-center text-slate-600 dark:text-slate-300">
                <span className="flex items-center gap-1 font-bold">
                  <Sparkles className="size-3.5 text-amber-500" />
                  本科星圖點亮率
                </span>
                <span className="font-bold font-mono" style={{ color: themeColor }}>
                  {progressPct}%
                </span>
              </div>
              <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full transition-all duration-700 rounded-full"
                  style={{
                    width: `${progressPct}%`,
                    backgroundColor: themeColor,
                  }}
                />
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 pt-0.5">
                <span>
                  已點亮 {unlockedSubjectStars.length} / {constellation.stars.length} 顆恆星
                </span>
                <button
                  type="button"
                  onClick={handleLightUpAll}
                  className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-0.5"
                >
                  <Zap className="size-3" />
                  一鍵點亮
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Interactive Constellation Canvas Grid */}
      <div className={`grid gap-6 ${compact ? 'lg:grid-cols-1' : 'lg:grid-cols-12'} items-start`}>
        {/* SVG Deep Space Sky Map */}
        <div
          className={`${
            compact ? 'w-full' : 'lg:col-span-8'
          } rounded-3xl border-2 border-slate-800/80 bg-[#060814] p-4 sm:p-6 relative select-none overflow-hidden shadow-2xl`}
        >
          {/* Deep Space Background Nebula Glow */}
          <div
            className="absolute inset-0 opacity-40 pointer-events-none transition-all duration-1000"
            style={{
              background: `radial-gradient(ellipse at 50% 40%, ${themeColor}33, transparent 70%), radial-gradient(circle at 80% 20%, #38bdf822, transparent 50%)`,
            }}
          />

          {/* Celestial Grid Overhead Metadata */}
          <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400 border-b border-slate-800 pb-3 mb-3">
            <span className="flex items-center gap-1.5 font-bold text-slate-200">
              <Star className="size-3.5 fill-current" style={{ color: themeColor }} />
              <span>{constellation.constellationShapeName}</span>
              <span className="text-[10px] text-slate-500">({constellation.stars.length} 知識座標節點)</span>
            </span>
            <span className="text-slate-500 text-[10px] hidden sm:inline">
              點擊恆星節點 · 點亮並導航至教學單元
            </span>
          </div>

          {/* Interactive SVG Starfield Canvas */}
          <div className="relative w-full aspect-[600/360] min-h-[300px]">
            <svg
              viewBox="0 0 600 360"
              className="w-full h-full relative z-10 overflow-visible"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id={`grad-${subjectSlug}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={themeColor} stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.3" />
                </linearGradient>
                <filter id={`glow-${subjectSlug}`} x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Background Tiny Dust Stars */}
              {Array.from({ length: 45 }).map((_, i) => (
                <circle
                  key={i}
                  cx={(i * 47 + 19) % 580 + 10}
                  cy={(i * 61 + 23) % 340 + 10}
                  r={i % 4 === 0 ? 1.4 : 0.7}
                  fill="#ffffff"
                  opacity={i % 3 === 0 ? 0.6 : 0.25}
                />
              ))}

              {/* Constellation Connection Beams */}
              {constellation.stars.map((star) =>
                star.connections.map((targetId) => {
                  const target = constellation.stars.find((s) => s.id === targetId);
                  if (!target) return null;

                  const isStarUnlocked = unlockedStars.includes(star.id);
                  const isTargetUnlocked = unlockedStars.includes(target.id);
                  const isBeamActive = isStarUnlocked && isTargetUnlocked;
                  const isRelatedToSelected =
                    selectedStar?.id === star.id || selectedStar?.id === target.id;

                  return (
                    <g key={`${star.id}-${target.id}`}>
                      {/* Glow line for active beams */}
                      {isBeamActive && (
                        <line
                          x1={star.x}
                          y1={star.y}
                          x2={target.x}
                          y2={target.y}
                          stroke={themeColor}
                          strokeWidth={isRelatedToSelected ? 3 : 1.5}
                          strokeOpacity={0.6}
                          filter={`url(#glow-${subjectSlug})`}
                        />
                      )}
                      {/* Main Connection Line */}
                      <line
                        x1={star.x}
                        y1={star.y}
                        x2={target.x}
                        y2={target.y}
                        stroke={isBeamActive ? '#f8fafc' : isRelatedToSelected ? themeColor : '#334155'}
                        strokeWidth={isBeamActive ? (isRelatedToSelected ? 2 : 1.2) : 0.9}
                        strokeDasharray={isBeamActive ? 'none' : '3 3'}
                        opacity={isBeamActive ? 0.9 : 0.45}
                        className="transition-all duration-500"
                      />
                    </g>
                  );
                }),
              )}

              {/* Interactive Stars Nodes */}
              {constellation.stars.map((star) => {
                const isUnlocked = unlockedStars.includes(star.id);
                const isSelected = selectedStar?.id === star.id;
                const isHovered = hoveredStar?.id === star.id;
                const isCurrentTopic = activeTopicSlug === star.topicSlug;

                return (
                  <g
                    key={star.id}
                    onClick={() => handleStarClick(star)}
                    onMouseEnter={() => setHoveredStar(star)}
                    onMouseLeave={() => setHoveredStar(null)}
                    className="cursor-pointer group focus:outline-none"
                    role="button"
                    tabIndex={0}
                    aria-label={`${star.name} (第 ${star.chapterNumber} 章)`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        handleStarClick(star);
                      }
                    }}
                  >
                    {/* Outer Pulsing Halo when Selected or Current Page Topic */}
                    {(isSelected || isCurrentTopic) && (
                      <circle
                        cx={star.x}
                        cy={star.y}
                        r={22}
                        fill={themeColor}
                        opacity={0.25}
                        className="animate-ping"
                      />
                    )}

                    {/* Aura Glow on Unlocked */}
                    {(isUnlocked || isSelected || isHovered) && (
                      <circle
                        cx={star.x}
                        cy={star.y}
                        r={isSelected ? 16 : isHovered ? 14 : 10}
                        fill={themeColor}
                        opacity={isSelected ? 0.5 : isHovered ? 0.4 : 0.25}
                        filter={`url(#glow-${subjectSlug})`}
                      />
                    )}

                    {/* Main Star Celestial Body */}
                    <circle
                      cx={star.x}
                      cy={star.y}
                      r={isSelected ? 7.5 : isHovered ? 6.5 : 5}
                      fill={isUnlocked ? (isSelected ? '#ffffff' : themeColor) : '#1e293b'}
                      stroke={isSelected ? '#ffffff' : isUnlocked ? themeColor : '#475569'}
                      strokeWidth={isSelected ? 2.5 : 1.5}
                      className="transition-all duration-300 transform group-hover:scale-125"
                    />

                    {/* Chapter Identifier Badge on Star */}
                    <text
                      x={star.x}
                      y={star.y - 10}
                      fontSize="8"
                      fontFamily="monospace"
                      fontWeight="bold"
                      fill={isSelected ? '#38bdf8' : isUnlocked ? '#cbd5e1' : '#64748b'}
                      textAnchor="middle"
                      className="pointer-events-none select-none"
                    >
                      CH.{star.chapterNumber}
                    </text>

                    {/* Star Topic Name Label */}
                    <text
                      x={star.x}
                      y={star.y + 14}
                      fontSize="9"
                      fontFamily="sans-serif"
                      fontWeight={isSelected ? 'bold' : 'normal'}
                      fill={isSelected ? '#ffffff' : isUnlocked ? '#f1f5f9' : '#94a3b8'}
                      textAnchor="middle"
                      className="pointer-events-none select-none drop-shadow-md"
                    >
                      {star.name}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Selected Star Details & Learning Action Panel */}
        <div
          className={`${
            compact ? 'w-full' : 'lg:col-span-4'
          } space-y-4 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm`}
        >
          {selectedStar ? (
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <Layers className="size-3.5" style={{ color: themeColor }} />
                    第 {selectedStar.chapterNumber} 單元 知識節點
                  </span>
                  {unlockedStars.includes(selectedStar.id) ? (
                    <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                      <CheckCircle2 className="size-3.5" /> 已點亮
                    </span>
                  ) : (
                    <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                      🔭 待探索
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                  {selectedStar.name}
                </h3>

                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <span
                    className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold border"
                    style={{
                      backgroundColor: `${themeColor}15`,
                      color: themeColor,
                      borderColor: `${themeColor}40`,
                    }}
                  >
                    {constellation.chineseName}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-mono text-slate-600 dark:text-slate-400">
                    高{selectedStar.gradeLevel === 10 ? '一' : selectedStar.gradeLevel === 11 ? '二' : '三'}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 text-[10px] font-mono font-bold border border-amber-200 dark:border-amber-900/50">
                    統測考頻 ★{selectedStar.examHitRate}/5
                  </span>
                </div>
              </div>

              {/* Micro-Capsule Concept Box */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 space-y-2 text-xs">
                <span className="font-bold text-slate-800 dark:text-slate-200 block font-mono flex items-center gap-1.5">
                  <Sparkles className="size-3.5 text-amber-500" />
                  核心觀念微膠囊：
                </span>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                  {selectedStar.conceptSnippet}
                </p>
              </div>

              {/* Key Formula Snippet */}
              {selectedStar.formulaSnippet && (
                <div className="p-3.5 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/40 border border-indigo-200/60 dark:border-indigo-900/50 space-y-1 text-xs font-mono">
                  <span className="text-[10px] font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wider block">
                    📐 核心公式 / 判別準則：
                  </span>
                  <p className="text-indigo-900 dark:text-indigo-200 font-semibold break-words">
                    {selectedStar.formulaSnippet}
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="space-y-2 pt-1">
                <Link
                  href={selectedStar.chapterRoute}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl text-white font-bold text-xs sm:text-sm transition shadow-lg shadow-indigo-600/20"
                  style={{ backgroundColor: themeColor }}
                >
                  <BookOpen className="size-4" />
                  <span>進入本單元精熟學習</span>
                  <ArrowRight className="size-4" />
                </Link>

                {!unlockedStars.includes(selectedStar.id) && (
                  <button
                    type="button"
                    onClick={() => handleStarClick(selectedStar)}
                    className="w-full py-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs transition border border-slate-200 dark:border-slate-700 flex items-center justify-center gap-1.5"
                  >
                    <Sparkles className="size-3.5 text-amber-500" />
                    點亮此恆星節點 (+40 EXP)
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="p-6 text-center text-xs text-slate-500 font-mono space-y-2">
              <Compass className="size-8 mx-auto text-slate-400" />
              <p>點擊星空中的任意恆星節點，檢視單元觀念微膠囊與公式。</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
