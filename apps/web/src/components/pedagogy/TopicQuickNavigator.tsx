'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Bookmark,
  CheckCircle2,
  ChevronDown,
  Layers,
  Sparkles,
  Zap,
  BookOpen,
  Target,
  Flame,
  Award,
  Share2,
  Maximize2,
  Minimize2,
  ArrowRight,
  ListOrdered
} from 'lucide-react';
import type { SubjectData, TopicContent } from '@/data/types';
import { useStudentStore } from '@/lib/store/studentStore';
import { useGamificationStore } from '@/lib/store/gamificationStore';
import { soundEngine } from '@/lib/audio/soundEffects';
import { findStarByTopic } from '@/data/constellations/subjectConstellations';

interface TopicQuickNavigatorProps {
  subject: SubjectData;
  topic: TopicContent;
  currentIndex: number;
  totalConcepts: number;
  completedConceptsCount: number;
  learningMode: 'standard' | 'fast' | 'zen';
  setLearningMode: (mode: 'standard' | 'fast' | 'zen') => void;
  isZenMode: boolean;
  setIsZenMode: (val: boolean) => void;
  onOpenFormulaDrawer: () => void;
  onOpenMistakeNotebook: () => void;
  formulaCount: number;
}

export default function TopicQuickNavigator({
  subject,
  topic,
  currentIndex,
  totalConcepts,
  completedConceptsCount,
  learningMode,
  setLearningMode,
  isZenMode,
  setIsZenMode,
  onOpenFormulaDrawer,
  onOpenMistakeNotebook,
  formulaCount,
}: TopicQuickNavigatorProps) {
  const router = useRouter();
  const [isChapterMenuOpen, setIsChapterMenuOpen] = useState(false);
  const [activeStage, setActiveStage] = useState('stage-intuition');
  const [showCelebration, setShowCelebration] = useState(false);

  const topicRoute = `/subjects/${subject.slug}/${topic.slug}`;
  const {
    bookmarkedTopics,
    toggleBookmark,
    completedTopics,
    markTopicCompleted,
    mistakeCards,
  } = useStudentStore();

  const { addExp, unlockStarNode, soundEnabled } = useGamificationStore();
  const starNode = findStarByTopic(subject.slug, topic.slug);

  const isBookmarked = (bookmarkedTopics || []).includes(topicRoute);
  const isCompleted = (completedTopics || []).includes(topicRoute);

  const masteryPercent = Math.round(
    ((completedConceptsCount + (isCompleted ? totalConcepts : 0)) / (totalConcepts * 2 || 1)) * 100
  );

  // ScrollSpy for Active Stage
  useEffect(() => {
    const stageIds = [
      'stage-intuition',
      'visual-learning-title',
      'stage-concepts',
      'stage-worked-traps',
      'stage-exam-practice',
      'stage-advanced',
    ];

    const handleScroll = () => {
      const scrollY = window.scrollY + 180;
      for (let i = stageIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(stageIds[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveStage(stageIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleBookmark = () => {
    toggleBookmark(topicRoute);
    if (soundEnabled) soundEngine.playClickBeep();
  };

  const handleMarkChapterMastered = () => {
    if (!isCompleted) {
      markTopicCompleted(topicRoute);
      addExp(80);
      if (starNode) {
        unlockStarNode(starNode.id);
      }
      if (soundEnabled) soundEngine.playCorrectChime();
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 3600);
    }
  };

  const scrollToStage = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="print:hidden space-y-3">
      {/* ── 頂部互動式 HUD 資訊列 ── */}
      <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-3.5 sm:p-4 shadow-xs transition-all">
        <div className="flex flex-wrap items-center justify-between gap-3">
          
          {/* 章節切換下拉選單 (Chapter Switcher) */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsChapterMenuOpen(!isChapterMenuOpen)}
              className="flex items-center gap-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 px-3 py-1.5 text-xs font-medium text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 transition-colors cursor-pointer"
              aria-expanded={isChapterMenuOpen}
              aria-label="章節切換選單"
            >
              <span className="font-mono font-bold text-blue-600 dark:text-blue-400">
                第 {currentIndex + 1} / {subject.topics.length} 章
              </span>
              <span className="hidden sm:inline max-w-[140px] truncate text-slate-600 dark:text-slate-300">
                {topic.title}
              </span>
              <ChevronDown className={`size-3.5 text-slate-400 transition-transform ${isChapterMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* 下拉面板 */}
            {isChapterMenuOpen && (
              <div
                className="absolute left-0 top-full mt-1.5 w-72 sm:w-80 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl z-50 p-2 max-h-80 overflow-y-auto"
                role="menu"
              >
                <div className="px-2.5 py-1.5 text-[11px] font-mono font-bold text-slate-400 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                  <span>{subject.title} 全部章節</span>
                  <span>共 {subject.topics.length} 章</span>
                </div>
                <div className="py-1 space-y-1">
                  {subject.topics.map((t, idx) => {
                    const isCur = t.slug === topic.slug;
                    const r = `/subjects/${subject.slug}/${t.slug}`;
                    const isTCompleted = (completedTopics || []).includes(r);
                    return (
                      <Link
                        key={t.slug}
                        href={r}
                        onClick={() => setIsChapterMenuOpen(false)}
                        className={`flex items-center justify-between px-2.5 py-2 rounded-xl text-xs transition-colors ${
                          isCur
                            ? 'bg-blue-50 dark:bg-blue-950/60 font-bold text-blue-600 dark:text-blue-300'
                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <span className="font-mono text-[11px] text-slate-400 shrink-0">
                            {idx + 1}.
                          </span>
                          <span className="truncate">{t.title}</span>
                        </div>
                        {isTCompleted && (
                          <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0 ml-1" />
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* 學習模式切換器 (Learning Mode Tabs) */}
          <div className="flex items-center rounded-xl bg-slate-100/90 dark:bg-slate-800/90 p-1 text-xs">
            <button
              type="button"
              onClick={() => { setLearningMode('standard'); setIsZenMode(false); }}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                learningMode === 'standard' && !isZenMode
                  ? 'bg-white dark:bg-slate-700 font-bold text-blue-600 dark:text-blue-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
              title="循序精讀模式：完整步驟研讀"
            >
              <BookOpen className="size-3.5" />
              <span>精讀</span>
            </button>

            <button
              type="button"
              onClick={() => { setLearningMode('fast'); setIsZenMode(false); }}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                learningMode === 'fast'
                  ? 'bg-white dark:bg-slate-700 font-bold text-amber-600 dark:text-amber-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
              title="考前速記模式：直擊公式、圖表與陷阱"
            >
              <Zap className="size-3.5" />
              <span>⚡速記</span>
            </button>

            <button
              type="button"
              onClick={() => scrollToStage('stage-exam-practice')}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer"
              title="跳轉歷屆統測刷題區"
            >
              <Target className="size-3.5" />
              <span>真題</span>
            </button>
          </div>

          {/* 快捷操作群 (Bookmarks, Formulas, Mistakes, Mastery) */}
          <div className="flex items-center gap-1.5">
            {/* 快速公式庫 */}
            {formulaCount > 0 && (
              <button
                type="button"
                onClick={onOpenFormulaDrawer}
                className="flex items-center gap-1 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/50 px-2.5 py-1 text-xs font-mono font-bold text-blue-600 dark:text-blue-400 hover:bg-blue-100 transition-colors cursor-pointer"
                title="開啟本章公式卡速查"
              >
                <span>∑</span>
                <span className="hidden sm:inline">公式 ({formulaCount})</span>
              </button>
            )}

            {/* 錯題筆記本 */}
            <button
              type="button"
              onClick={onOpenMistakeNotebook}
              className="flex items-center gap-1 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/50 px-2.5 py-1 text-xs font-mono font-bold text-rose-600 dark:text-rose-400 hover:bg-rose-100 transition-colors cursor-pointer"
              title="開啟錯題本"
            >
              <Flame className="size-3.5 fill-current text-rose-500" />
              <span className="hidden sm:inline">錯題</span>
              <span>({mistakeCards.length})</span>
            </button>

            {/* 書籤收藏 */}
            <button
              type="button"
              onClick={handleToggleBookmark}
              className={`p-1.5 rounded-xl border transition-all cursor-pointer ${
                isBookmarked
                  ? 'bg-amber-500 border-amber-600 text-white shadow-xs'
                  : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500 hover:text-amber-500'
              }`}
              title={isBookmarked ? '已收藏此章' : '加入重點書籤'}
              aria-label="書籤收藏"
            >
              <Bookmark className={`size-4 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>

            {/* 標記本章精熟掌握 */}
            <button
              type="button"
              onClick={handleMarkChapterMastered}
              className={`flex items-center gap-1 px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isCompleted
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-600 hover:text-white'
              }`}
              title={isCompleted ? '已精通本章' : '完成本章學習並獲得 +80 EXP'}
            >
              <Award className="size-3.5" />
              <span>{isCompleted ? '已掌握 ✓' : '攻克本章'}</span>
            </button>
          </div>

        </div>

        {/* 觀念掌握度進度條 */}
        <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
          <div className="flex items-center gap-2">
            <span className="text-slate-400">核心觀念掌握：</span>
            <span className="font-bold text-blue-600 dark:text-blue-400">
              {completedConceptsCount} / {totalConcepts} 個
            </span>
          </div>
          <div className="flex items-center gap-2 w-36 sm:w-48">
            <div className="h-1.5 w-full rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 transition-all duration-500"
                style={{ width: `${Math.min(100, (completedConceptsCount / (totalConcepts || 1)) * 100)}%` }}
              />
            </div>
            <span className="font-bold text-slate-600 dark:text-slate-300 shrink-0">
              {Math.round((completedConceptsCount / (totalConcepts || 1)) * 100)}%
            </span>
          </div>
        </div>
      </div>

      {/* ── 學習階段目錄導覽列 (Stage TOC Subnav) ── */}
      <nav
        className="flex items-center gap-1.5 overflow-x-auto py-1 text-xs font-mono scrollbar-none"
        aria-label="章節內部學習階段"
      >
        <span className="shrink-0 text-slate-400 font-bold text-[11px] mr-1">
          學習階段：
        </span>
        {[
          { id: 'stage-intuition', label: '1.生活直覺' },
          { id: 'visual-learning-title', label: '2.視覺圖解' },
          { id: 'stage-concepts', label: '3.原理公式' },
          { id: 'stage-worked-traps', label: '4.例題與陷阱' },
          { id: 'stage-exam-practice', label: '5.統測真題' },
          { id: 'stage-advanced', label: '6.學用與專家' },
        ].map((stage) => {
          const isActive = activeStage === stage.id;
          return (
            <button
              key={stage.id}
              type="button"
              onClick={() => scrollToStage(stage.id)}
              className={`shrink-0 px-2.5 py-1 rounded-xl transition-all cursor-pointer ${
                isActive
                  ? 'bg-blue-600 text-white font-bold shadow-xs'
                  : 'bg-white/80 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300'
              }`}
            >
              {stage.label}
            </button>
          );
        })}
      </nav>

      {/* 慶祝浮窗動畫 (Celebration Toast) */}
      {showCelebration && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 animate-bounce">
          <div className="flex items-center gap-3 rounded-2xl bg-emerald-600 px-5 py-3 text-white shadow-2xl border border-emerald-400">
            <Sparkles className="size-6 text-yellow-300 animate-spin" />
            <div>
              <p className="font-bold text-sm">🎉 恭喜攻克【{topic.title}】！</p>
              <p className="text-xs text-emerald-100">經驗值 +80 EXP · 技能星空已點亮 ✨</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
