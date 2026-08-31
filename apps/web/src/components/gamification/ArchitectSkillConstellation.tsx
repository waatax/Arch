'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Star,
  ArrowRight,
  Compass,
  Zap,
  Trophy,
} from 'lucide-react';
import { soundEngine } from '@/lib/audio/soundEffects';
import { useGamificationStore } from '@/lib/store/gamificationStore';
import {
  subjectConstellations,
  getAllConstellationStars,
} from '@/data/constellations/subjectConstellations';
import SubjectConstellationCanvas from './SubjectConstellationCanvas';

const CATEGORIES = [
  { id: 'all', label: '🌟 全部 13 科星系' },
  { id: '專業科目（一）', label: '🏗️ 專業一 (力學·材料)' },
  { id: '專業科目（二）', label: '📐 專業二 (測量·製圖)' },
  { id: '共同科目', label: '📚 共同 (國·英·數C)' },
  { id: '自然科學', label: '⚡ 自然 (物理·化學)' },
  { id: '社會領域', label: '🌍 社會 (歷史·地理·公民)' },
  { id: '實習與實務', label: '✨ 前瞻 (選修·作品集)' },
];

export default function ArchitectSkillConstellation() {
  const { unlockedStars, unlockStarNode, rankTitle, exp, soundEnabled } = useGamificationStore();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeSubjectSlug, setActiveSubjectSlug] = useState<string>('mechanics');

  const allStars = getAllConstellationStars();
  const totalStarsCount = allStars.length;
  const totalUnlockedCount = allStars.filter((s) => unlockedStars.includes(s.id)).length;
  const globalProgressPct = Math.round((totalUnlockedCount / totalStarsCount) * 100);

  const filteredSubjects = subjectConstellations.filter(
    (s) => activeCategory === 'all' || s.category === activeCategory,
  );

  const currentSubject =
    subjectConstellations.find((s) => s.subjectSlug === activeSubjectSlug) || subjectConstellations[0];

  const handleLightUpAllGlobal = () => {
    allStars.forEach((star) => unlockStarNode(star.id));
    if (soundEnabled) soundEngine.playCorrectChime();
  };

  const handleSelectSubject = (slug: string) => {
    setActiveSubjectSlug(slug);
    if (soundEnabled) soundEngine.playClickBeep();
  };

  return (
    <div className="space-y-8">
      {/* Hero Grand Cosmic Banner */}
      <div className="rounded-[2.5rem] border border-indigo-900/50 bg-gradient-to-br from-[#0a0d24] via-[#090b1c] to-[#040610] p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[32rem] h-[32rem] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/20 border border-indigo-400/30 px-3.5 py-1 text-xs font-mono font-bold text-indigo-300">
              <Sparkles className="size-3.5 text-amber-400 animate-pulse" />
              13 科 111 主題全宇宙專業技能星圖 · ARCHITECTURAL GALAXY
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-100 to-indigo-300">
              點亮你的專業技能星系網絡
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              將高職建築科 13 個科目、111 個教學單元構築為宏偉的知識點星圖。每點亮一顆恆星節點，即可啟動跨學科知識光束，直通專屬教學單元頁面！
            </p>
          </div>

          {/* Global Progress Metrics Box */}
          <div className="rounded-2xl bg-white/5 backdrop-blur-md p-5 border border-white/10 space-y-2.5 min-w-[280px] font-mono text-xs shadow-inner">
            <div className="flex justify-between items-center text-slate-300">
              <span className="flex items-center gap-1.5 font-bold">
                <Trophy className="size-4 text-amber-400" />
                <span>全星系點亮進度</span>
              </span>
              <span className="text-indigo-300 font-bold text-sm">{globalProgressPct}%</span>
            </div>

            <div className="h-2.5 w-full bg-white/10 rounded-full overflow-hidden p-0.5">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 via-sky-400 to-emerald-400 rounded-full transition-all duration-700 shadow-sm"
                style={{ width: `${globalProgressPct}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
              <span>
                🌟 已點亮 <strong className="text-white">{totalUnlockedCount}</strong> / {totalStarsCount} 恆星
              </span>
              <span className="text-indigo-300 font-semibold">{rankTitle.split(' ')[0]}</span>
            </div>

            <div className="pt-1 border-t border-white/10 flex justify-between items-center">
              <span className="text-[10px] text-slate-400">總累積經驗: {exp} EXP</span>
              <button
                type="button"
                onClick={handleLightUpAllGlobal}
                className="text-[10px] font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 transition"
              >
                <Zap className="size-3" />
                點亮全宇宙
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Navigation & View Mode Toggles */}
      <div className="space-y-4">
        {/* Category Pills Bar */}
        <div className="flex flex-wrap items-center gap-2 pb-2">
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setActiveCategory(cat.id);
                  if (soundEnabled) soundEngine.playClickBeep();
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-indigo-300 dark:hover:border-indigo-700'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* 13 Subject Cards Horizontal Carousel / Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2.5">
          {filteredSubjects.map((sub) => {
            const isSelected = currentSubject.subjectSlug === sub.subjectSlug;
            const subUnlocked = sub.stars.filter((s) => unlockedStars.includes(s.id)).length;
            const subPct = Math.round((subUnlocked / sub.stars.length) * 100);

            return (
              <button
                key={sub.subjectSlug}
                type="button"
                onClick={() => handleSelectSubject(sub.subjectSlug)}
                className={`p-3 rounded-2xl text-left border transition-all relative overflow-hidden group ${
                  isSelected
                    ? 'bg-white dark:bg-slate-900 border-2 shadow-md'
                    : 'bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
                style={{
                  borderColor: isSelected ? sub.color : undefined,
                }}
              >
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="text-base">{sub.symbolEmoji}</span>
                  <span
                    className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-full"
                    style={{
                      backgroundColor: `${sub.color}15`,
                      color: sub.color,
                    }}
                  >
                    {subPct}%
                  </span>
                </div>
                <div className="font-bold text-xs text-slate-900 dark:text-white truncate">
                  {sub.title}
                </div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono mt-0.5 truncate">
                  {sub.stars.length} 顆恆星
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Single Subject Constellation Canvas */}
      <section className="space-y-4">
        <SubjectConstellationCanvas
          subjectSlug={currentSubject.subjectSlug}
          showTitleHeader={true}
        />
      </section>

      {/* Macro Interconnected Galaxy Atlas Footer */}
      <section className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              CROSS-DISCIPLINARY BRIDGES
            </span>
            <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
              13 科跨領域知識星橋矩陣
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              各科知識點非孤立存在，而是透過力學平衡、材料配比、坐標測量與空間圖說相互交織為強韌的建築大師智慧網絡。
            </p>
          </div>
          <Link
            href="/curriculum"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-mono font-bold transition self-start sm:self-auto"
          >
            <Compass className="size-3.5" />
            檢視 108 課綱完整課表
            <ArrowRight className="size-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {subjectConstellations.map((sub) => {
            const unlockedInSub = sub.stars.filter((s) => unlockedStars.includes(s.id)).length;
            const pct = Math.round((unlockedInSub / sub.stars.length) * 100);

            return (
              <div
                key={sub.subjectSlug}
                className="p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40 space-y-3 hover:shadow-sm transition"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{sub.symbolEmoji}</span>
                    <div>
                      <h4 className="font-bold text-xs text-slate-900 dark:text-white">
                        {sub.title}
                      </h4>
                      <span className="text-[10px] text-slate-500 font-mono">
                        {sub.constellationShapeName}
                      </span>
                    </div>
                  </div>
                  <span
                    className="text-xs font-mono font-bold px-2 py-0.5 rounded-full"
                    style={{
                      backgroundColor: `${sub.color}20`,
                      color: sub.color,
                    }}
                  >
                    {pct}%
                  </span>
                </div>

                <p className="text-[11px] text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {sub.description}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-slate-200/60 dark:border-slate-800/80 text-[11px] font-mono">
                  <button
                    type="button"
                    onClick={() => handleSelectSubject(sub.subjectSlug)}
                    className="font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
                  >
                    <Star className="size-3" />
                    切換至本科星圖
                  </button>
                  <Link
                    href={`/subjects/${sub.subjectSlug}`}
                    className="text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center gap-0.5"
                  >
                    科目總覽 →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
