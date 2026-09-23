'use client';

import React, { useState } from 'react';
import { BlockMath } from 'react-katex';
import { Copy, Check, Zap } from 'lucide-react';
import MathText from '@/components/MathText';
import { SemesterFormulaCard } from '@/data/semesterReviews/types';

interface SemesterFormulaCardViewProps {
  formulaCard: SemesterFormulaCard;
  chapterNo?: number;
}

export default function SemesterFormulaCardView({
  formulaCard,
  chapterNo,
}: SemesterFormulaCardViewProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLatex = async () => {
    const textToCopy = formulaCard.latex || formulaCard.formula;
    if (!textToCopy) return;

    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      // Fallback
    }
  };

  // Helper to determine whether a string should be rendered via KaTeX BlockMath
  const renderFormulaContent = (raw: string) => {
    if (!raw) return null;

    // If it contains dollar delimiters ($...$ or $$...$$), use MathText directly
    if (raw.includes('$')) {
      return (
        <div className="text-center font-sans text-xs sm:text-sm text-slate-800 dark:text-slate-100 leading-relaxed">
          <MathText content={raw} />
        </div>
      );
    }

    // If it has LaTeX syntax commands (e.g. \frac, \times, \cdot, \text, \sum, \sqrt, _, ^, \le, \ge, etc.)
    const hasLatex = /\\[a-zA-Z]+|[_^]|\{|\}/.test(raw);

    if (hasLatex) {
      return (
        <div className="text-center text-xs sm:text-sm text-amber-950 dark:text-amber-100 overflow-x-auto py-1">
          <BlockMath
            math={raw}
            renderError={() => (
              <span className="font-mono text-xs text-rose-600 dark:text-rose-400 break-all">
                {raw}
              </span>
            )}
          />
        </div>
      );
    }

    // Pure text or plain math formula
    return (
      <div className="text-center font-mono text-xs sm:text-sm font-bold text-amber-950 dark:text-amber-200">
        {raw}
      </div>
    );
  };

  const hasDistinctLatex =
    formulaCard.latex &&
    formulaCard.latex.trim() !== '' &&
    formulaCard.latex.trim() !== formulaCard.formula.trim();

  return (
    <div className="rounded-2xl bg-gradient-to-br from-amber-50/90 to-amber-100/40 dark:from-amber-950/40 dark:to-slate-900 border border-amber-200/90 dark:border-amber-900/60 p-3.5 sm:p-4 space-y-3 print:bg-white print:border-black shadow-xs">
      {/* Header with Title and Unit */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5">
          <span className="flex items-center justify-center size-5 rounded-md bg-amber-500/20 text-amber-700 dark:text-amber-300">
            <Zap className="size-3.5 fill-current" />
          </span>
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-900 dark:text-amber-200">
            {chapterNo ? `第 ${chapterNo} 章核心速查公式` : '核心速查公式 (Key Formula)'}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {formulaCard.unit && (
            <span className="text-[10px] font-mono font-medium text-amber-800 dark:text-amber-300 bg-amber-100/80 dark:bg-amber-900/60 px-2 py-0.5 rounded-md border border-amber-300/60 dark:border-amber-800/50">
              {formulaCard.unit}
            </span>
          )}
          <button
            type="button"
            onClick={handleCopyLatex}
            className="p-1 rounded-md text-amber-800 dark:text-amber-300 hover:bg-amber-200/70 dark:hover:bg-amber-900/80 transition-colors cursor-pointer print:hidden"
            title="複製公式 LaTeX 代碼"
            aria-label="複製公式"
          >
            {copied ? (
              <Check className="size-3.5 text-emerald-600 dark:text-emerald-400" />
            ) : (
              <Copy className="size-3.5" />
            )}
          </button>
        </div>
      </div>

      {/* Primary Formula Display Box */}
      <div className="rounded-xl bg-white/95 dark:bg-slate-900/95 p-3 border border-amber-200/80 dark:border-amber-900/50 shadow-2xs print:border-none print:p-1 overflow-x-auto">
        {renderFormulaContent(formulaCard.formula)}
      </div>

      {/* Secondary / Extended Formula (if provided) */}
      {hasDistinctLatex && (
        <div className="rounded-xl bg-amber-50/60 dark:bg-slate-900/60 p-2.5 border border-amber-200/60 dark:border-amber-900/40 text-[11px] overflow-x-auto">
          <span className="text-[10px] font-mono font-bold text-amber-800 dark:text-amber-400 block mb-1">
            ⚡ 延伸計算式 / 水化化學反應式：
          </span>
          {renderFormulaContent(formulaCard.latex!)}
        </div>
      )}

      {/* Explanation & Caution */}
      <div className="space-y-1.5 text-[11px] pt-0.5">
        {formulaCard.meaning && (
          <div className="text-amber-950 dark:text-amber-200 leading-snug">
            <strong className="text-amber-900 dark:text-amber-300">意涵：</strong>
            <MathText content={formulaCard.meaning} />
          </div>
        )}
        {formulaCard.cautions && (
          <div className="text-rose-900 dark:text-rose-300 text-[10.5px] leading-snug bg-rose-50/70 dark:bg-rose-950/30 p-2 rounded-lg border border-rose-200/60 dark:border-rose-900/40">
            <strong className="text-rose-700 dark:text-rose-400 font-bold">⚠️ 統測盲點：</strong>
            <MathText content={formulaCard.cautions} />
          </div>
        )}
      </div>
    </div>
  );
}
