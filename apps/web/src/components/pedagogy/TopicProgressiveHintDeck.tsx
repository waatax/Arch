'use client';

import React, { useState } from 'react';
import {
  Lightbulb,
  Sparkles,
  ChevronRight,
  RotateCcw,
  CheckCircle2,
} from 'lucide-react';
import MathText from '@/components/MathText';
import { soundEngine } from '@/lib/audio/soundEffects';

interface ProgressiveHint {
  step: number;
  title: string;
  body: string;
}

interface ExampleLike {
  question: string;
  answer: string;
  steps?: string[];
  difficulty?: string;
}

interface TopicProgressiveHintDeckProps {
  hints?: ProgressiveHint[];
  example?: ExampleLike;
  topicTitle?: string;
  questionExcerpt?: string;
  onAllHintsRevealed?: () => void;
}

function generateDefaultHints(example?: ExampleLike, topicTitle?: string): ProgressiveHint[] {
  const steps = example?.steps ?? [];
  const qText = example?.question ?? '';

  const hint1Body = qText.length > 60
    ? `審題關鍵：先抓出題目給定的已知條件與目標未知數。先不要急著代公式，想一想本題屬於《${topicTitle ?? '本科目'}》的哪一種典型題型架構？`
    : `審題關鍵：題目問的是核心未知數。先確認已知數據的單位是否一致，並在草稿紙上標註已知條件與關鍵約束。`;

  const hint2Body = steps.length > 0
    ? `核心定律：依據本章主題，本題切入點為：${steps[0].replace(/^[0-9.、\s]+/, '')}。確認使用哪條物理定理、力平衡方程式或設計規範。`
    : `核心定律：請回想《${topicTitle ?? '本科目'}》的核心公式與定理。列出聯繫已知量與目標未知數的基本關係式。`;

  const hint3Body = steps.length > 1
    ? `代入運算檢核：將數值謹慎代入方程式：${steps[1].replace(/^[0-9.、\s]+/, '')}。注意符號正負號判定、有效位數與單位量綱是否正確。`
    : `代入運算檢核：將已知數值代入展開計算，驗證答案的物理意義與合理性（例如長度不為負、應力在容許範圍內）。`;

  return [
    {
      step: 1,
      title: '第 1 階 · 破題觀察與已知條件拆解',
      body: hint1Body,
    },
    {
      step: 2,
      title: '第 2 階 · 核心定律與公式關係式',
      body: hint2Body,
    },
    {
      step: 3,
      title: '第 3 階 · 運算代入與自我合理性檢驗',
      body: hint3Body,
    },
  ];
}

export default function TopicProgressiveHintDeck({
  hints: propHints,
  example,
  topicTitle,
  questionExcerpt,
  onAllHintsRevealed,
}: TopicProgressiveHintDeckProps) {
  const hints = propHints && propHints.length > 0 ? propHints : generateDefaultHints(example, topicTitle);
  const [unlockedLevel, setUnlockedLevel] = useState(0);

  const handleRevealNext = () => {
    if (unlockedLevel < hints.length) {
      const nextLevel = unlockedLevel + 1;
      setUnlockedLevel(nextLevel);
      soundEngine.playClickBeep();
      if (nextLevel === hints.length && onAllHintsRevealed) {
        onAllHintsRevealed();
      }
    }
  };

  const handleResetHints = () => {
    setUnlockedLevel(0);
    soundEngine.playClickBeep();
  };

  return (
    <div className="rounded-2xl border border-amber-200/90 dark:border-amber-900/60 bg-gradient-to-r from-amber-50/50 via-white to-orange-50/30 dark:from-amber-950/20 dark:via-slate-900 dark:to-orange-950/20 p-4 sm:p-5 shadow-xs space-y-4">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-200/60 dark:border-amber-900/40 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="flex size-8 items-center justify-center rounded-xl bg-amber-500 text-white shadow-xs shrink-0">
            <Lightbulb className="size-4.5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 bg-amber-100 dark:bg-amber-900/60 px-2 py-0.5 rounded">
                均一漸進引導
              </span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                自主思考思考支架
              </span>
            </div>
            <h4 className="font-serif text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-0.5 flex items-center gap-2">
              <span>做題卡住了？點開 3 段式階梯破題提示</span>
            </h4>
          </div>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto font-mono text-xs">
          <span className="text-amber-700 dark:text-amber-400 font-bold text-[11px]">
            提示進度：{unlockedLevel} / {hints.length}
          </span>
          {unlockedLevel > 0 && (
            <button
              type="button"
              onClick={handleResetHints}
              className="p-1 rounded-lg hover:bg-amber-100 dark:hover:bg-amber-950/60 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors cursor-pointer"
              title="重置提示"
            >
              <RotateCcw className="size-3.5" />
            </button>
          )}
        </div>
      </div>

      {questionExcerpt && (
        <p className="text-xs text-slate-600 dark:text-slate-400 font-mono italic line-clamp-1 border-l-2 border-amber-300 dark:border-amber-700 pl-2">
          聚焦題目：{questionExcerpt}
        </p>
      )}

      {/* Hints Display Area */}
      <div className="space-y-3">
        {hints.slice(0, unlockedLevel).map((hint, idx) => (
          <div
            key={hint.step}
            className="p-3.5 rounded-xl border border-amber-300/80 dark:border-amber-800/80 bg-white dark:bg-slate-900 shadow-2xs space-y-1.5 animate-in slide-in-from-top-2 duration-300"
          >
            <div className="flex items-center gap-2">
              <span className="size-5 rounded-full bg-amber-500 text-white font-mono font-bold text-[10px] flex items-center justify-center shrink-0">
                {idx + 1}
              </span>
              <h5 className="font-serif font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                {hint.title}
              </h5>
            </div>
            <div className="text-xs sm:text-[13px] leading-relaxed text-slate-700 dark:text-slate-300 pl-7">
              <MathText content={hint.body} />
            </div>
          </div>
        ))}
      </div>

      {/* Action Trigger Button */}
      <div className="pt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {unlockedLevel < hints.length ? (
          <button
            type="button"
            onClick={handleRevealNext}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white px-4 py-2.5 text-xs font-bold transition shadow-xs cursor-pointer"
          >
            <Sparkles className="size-3.5 text-amber-200" />
            <span>
              {unlockedLevel === 0 ? '領取第 1 個破題提示（不破梗先思考）' : `解鎖第 ${unlockedLevel + 1} 階深入引導`}
            </span>
            <ChevronRight className="size-3.5" />
          </button>
        ) : (
          <div className="inline-flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-xs">
            <CheckCircle2 className="size-4" />
            <span>3 階破題提示已全數解鎖！試著在草稿紙上完成最終運算吧！</span>
          </div>
        )}

        <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
          均一教育心理學：先啟發概念，再列式計算，學習效果最佳。
        </p>
      </div>
    </div>
  );
}
