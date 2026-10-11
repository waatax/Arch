'use client';

import React, { useState, useEffect } from 'react';
import {
  BrainCircuit,
  X,
  ChevronLeft,
  ChevronRight,
  RotateCw,
  CheckCircle2,
  Sparkles,
  Award,
} from 'lucide-react';
import type { TopicContent, SubjectData } from '@/data/types';
import { useGamificationStore } from '@/lib/store/gamificationStore';
import { useStudentStore } from '@/lib/store/studentStore';
import { soundEngine } from '@/lib/audio/soundEffects';
import MathText from '@/components/MathText';

interface TopicActiveRecallDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  topic: TopicContent;
  subject: SubjectData;
}

export default function TopicActiveRecallDrawer({
  isOpen,
  onClose,
  topic,
  subject,
}: TopicActiveRecallDrawerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredMap, setMasteredMap] = useState<Record<number, boolean>>({});

  const { addExp, soundEnabled } = useGamificationStore();
  const { toggleConceptProgress } = useStudentStore();

  const concepts = topic.concepts;
  const currentConcept = concepts[currentIndex] || concepts[0];
  const route = `/subjects/${subject.slug}/${topic.slug}`;

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        setIsFlipped((prev) => !prev);
      } else if (e.key === 'ArrowRight') {
        if (currentIndex < concepts.length - 1) {
          setCurrentIndex((prev) => prev + 1);
          setIsFlipped(false);
        }
      } else if (e.key === 'ArrowLeft') {
        if (currentIndex > 0) {
          setCurrentIndex((prev) => prev - 1);
          setIsFlipped(false);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, concepts.length, onClose]);

  if (!isOpen) return null;

  const handleNext = () => {
    if (currentIndex < concepts.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setIsFlipped(false);
      if (soundEnabled) soundEngine.playClickBeep();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setIsFlipped(false);
      if (soundEnabled) soundEngine.playClickBeep();
    }
  };

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
    if (soundEnabled) soundEngine.playClickBeep();
  };

  const handleMarkMastered = () => {
    if (!masteredMap[currentIndex]) {
      setMasteredMap((prev) => ({ ...prev, [currentIndex]: true }));
      addExp(5);
      toggleConceptProgress(route, currentIndex);
      if (soundEnabled) soundEngine.playCorrectChime();
    }
    if (currentIndex < concepts.length - 1) {
      handleNext();
    }
  };

  const masteredCount = Object.values(masteredMap).filter(Boolean).length;
  const progressPercent = Math.round((masteredCount / (concepts.length || 1)) * 100);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="flashcard-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative flex w-full max-w-2xl flex-col rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 px-6 py-4">
          <div className="flex items-center gap-2.5">
            <div className="flex size-9 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-2xs">
              <BrainCircuit className="size-5" />
            </div>
            <div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block">
                Active Recall Mode
              </span>
              <h2 id="flashcard-title" className="font-serif text-lg font-bold text-slate-900 dark:text-white">
                核心觀念主動回憶快卡 ({currentIndex + 1} / {concepts.length})
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-xl p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition-colors cursor-pointer"
            aria-label="關閉快卡模式"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / concepts.length) * 100}%` }}
          />
        </div>

        {/* Flashcard Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          <div
            onClick={handleFlip}
            className={`min-h-[260px] rounded-3xl border-2 p-6 sm:p-8 transition-all duration-300 cursor-pointer shadow-sm flex flex-col justify-between ${
              isFlipped
                ? 'border-indigo-300 dark:border-indigo-800 bg-gradient-to-br from-indigo-50/50 via-white to-blue-50/30 dark:from-indigo-950/30 dark:via-slate-850 dark:to-slate-900'
                : 'border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 hover:border-indigo-300'
            }`}
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                <span className="flex items-center gap-1 font-bold text-indigo-600 dark:text-indigo-400">
                  <Sparkles className="size-3.5" />
                  觀念 {currentIndex + 1}
                </span>
                <span className="flex items-center gap-1">
                  <RotateCw className="size-3" />
                  {isFlipped ? '背面：解答與公式' : '點擊卡片翻面 (空白鍵)'}
                </span>
              </div>

              {!isFlipped ? (
                // Front Side
                <div className="space-y-4 py-4">
                  <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
                    {currentConcept.heading}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    🤔 請在腦海中主動回憶：這個觀念的核心定義是什麼？適用的邊界限制、推導口訣或計算公式為何？
                  </p>
                  <div className="pt-4 flex items-center gap-2 text-xs font-mono text-indigo-600 dark:text-indigo-400">
                    <span className="rounded-lg bg-indigo-100 dark:bg-indigo-950/60 px-2.5 py-1 font-bold">
                      點擊翻面查看正確核心公式 →
                    </span>
                  </div>
                </div>
              ) : (
                // Back Side
                <div className="space-y-4 py-2 animate-in fade-in duration-200">
                  <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white">
                    {currentConcept.heading}
                  </h3>

                  <div className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    <MathText content={currentConcept.body} />
                  </div>

                  {currentConcept.formula && (
                    <div className="rounded-2xl border border-indigo-200 dark:border-indigo-900/60 bg-white dark:bg-slate-900 p-4 shadow-2xs">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block mb-1">
                        核心公式定理：
                      </span>
                      <div className="font-mono text-sm font-bold text-indigo-950 dark:text-indigo-200 overflow-x-auto">
                        <MathText content={currentConcept.formula} />
                      </div>
                    </div>
                  )}

                  {currentConcept.steps && currentConcept.steps.length > 0 && (
                    <div className="space-y-1.5 pt-1 text-xs text-slate-600 dark:text-slate-400">
                      <span className="font-bold text-slate-700 dark:text-slate-300 block">SOP 思考步驟：</span>
                      <ol className="list-decimal pl-4 space-y-1">
                        {currentConcept.steps.slice(0, 3).map((st, i) => (
                          <li key={i}>{st}</li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>{isFlipped ? '✅ 答對了嗎？標記熟練度：' : '按空白鍵翻面'}</span>
              <span>{currentIndex + 1} of {concepts.length}</span>
            </div>
          </div>
        </div>

        {/* Footer Controls */}
        <div className="border-t border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-850 p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="inline-flex items-center gap-1 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 disabled:opacity-40 transition-colors cursor-pointer"
            >
              <ChevronLeft className="size-4" />
              上一張
            </button>

            <button
              type="button"
              onClick={handleNext}
              disabled={currentIndex === concepts.length - 1}
              className="inline-flex items-center gap-1 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 disabled:opacity-40 transition-colors cursor-pointer"
            >
              下一張
              <ChevronRight className="size-4" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleFlip}
              className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              翻面
            </button>

            <button
              type="button"
              onClick={handleMarkMastered}
              className={`inline-flex items-center gap-1.5 rounded-xl px-5 py-2 text-xs font-bold shadow-xs transition-all cursor-pointer ${
                masteredMap[currentIndex]
                  ? 'bg-emerald-600 text-white'
                  : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-600/20'
              }`}
            >
              <CheckCircle2 className="size-3.5" />
              <span>{masteredMap[currentIndex] ? '已精熟 (+5 EXP)' : '標記精熟 (+5 EXP)'}</span>
            </button>
          </div>
        </div>

        {/* Global mastery bar in modal footer */}
        <div className="bg-slate-100 dark:bg-slate-800/80 px-6 py-2.5 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span className="flex items-center gap-1.5">
            <Award className="size-3 text-amber-500" />
            本章快卡精熟進度：{masteredCount} / {concepts.length} ({progressPercent}%)
          </span>
          <span>支援鍵盤 ← → 鍵切換，空白鍵翻面</span>
        </div>
      </div>
    </div>
  );
}
