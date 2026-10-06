'use client';

import React, { useState } from 'react';
import { X, Copy, Check, ExternalLink, Calculator } from 'lucide-react';
import type { TopicConcept } from '@/data/types';
import MathText from '@/components/MathText';
import { soundEngine } from '@/lib/audio/soundEffects';

interface TopicFormulaDrawerModalProps {
  isOpen: boolean;
  onClose: () => void;
  topicTitle: string;
  concepts: TopicConcept[];
  onJumpToConcept: (index: number) => void;
}

export default function TopicFormulaDrawerModal({
  isOpen,
  onClose,
  topicTitle,
  concepts,
  onJumpToConcept,
}: TopicFormulaDrawerModalProps) {
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  if (!isOpen) return null;

  const formulaConcepts = concepts
    .map((c, index) => ({ concept: c, index }))
    .filter(({ concept }) => Boolean(concept.formula));

  const handleCopy = (formula: string, idx: number) => {
    navigator.clipboard.writeText(formula);
    soundEngine.playPencilDraw();
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl max-h-[85vh] flex flex-col rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="formula-drawer-title"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-800/80 px-6 py-4 bg-slate-50/70 dark:bg-slate-800/40">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 dark:text-blue-400 font-mono font-bold text-lg">
              ∑
            </div>
            <div>
              <h2 id="formula-drawer-title" className="font-serif text-lg font-bold text-slate-900 dark:text-white">
                【{topicTitle}】公式速查卡
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                本章收錄 {formulaConcepts.length} 組核心必背公式與運算定義
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-xl text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition-colors cursor-pointer"
            aria-label="關閉公式速查卡"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="overflow-y-auto p-6 space-y-4">
          {formulaConcepts.length === 0 ? (
            <div className="text-center py-12 text-slate-500">
              <Calculator className="size-12 mx-auto mb-2 text-slate-300" />
              <p>本章節以圖學或材料法規原理為主，無純數值計算公式。</p>
            </div>
          ) : (
            formulaConcepts.map(({ concept, index }) => (
              <div
                key={concept.heading}
                className="group rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 p-4 transition-all hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-xs"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded-md">
                      觀念 {index + 1}
                    </span>
                    <h3 className="font-bold text-sm text-slate-800 dark:text-slate-100">
                      {concept.heading}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => handleCopy(concept.formula || '', index)}
                      className="flex items-center gap-1 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-2.5 py-1 text-xs font-mono text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors cursor-pointer"
                      title="複製公式算式"
                    >
                      {copiedIdx === index ? (
                        <>
                          <Check className="size-3 text-emerald-500" />
                          <span className="text-emerald-600 dark:text-emerald-400">已複製</span>
                        </>
                      ) : (
                        <>
                          <Copy className="size-3" />
                          <span>複製</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onJumpToConcept(index);
                      }}
                      className="flex items-center gap-1 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-2 py-1 text-xs text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors cursor-pointer"
                      title="跳轉至章節內觀念位置"
                    >
                      <ExternalLink className="size-3" />
                    </button>
                  </div>
                </div>

                {/* Formula Display Box */}
                <div className="rounded-xl border border-blue-100 dark:border-blue-950 bg-white dark:bg-slate-900 p-3 overflow-x-auto text-blue-900 dark:text-blue-200 font-mono text-sm shadow-2xs">
                  <MathText content={concept.formula || ''} />
                </div>

                {/* Concept Brief Explanations */}
                <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400 line-clamp-2">
                  {concept.body}
                </p>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer */}
        <div className="border-t border-slate-200/80 dark:border-slate-800/80 px-6 py-3 bg-slate-50/50 dark:bg-slate-800/20 flex justify-between items-center text-xs font-mono text-slate-500">
          <span>💡 提示：點擊右側跳轉鈕可直達章節細部推導</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 font-bold transition-colors cursor-pointer"
          >
            關閉
          </button>
        </div>
      </div>
    </div>
  );
}
