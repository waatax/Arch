'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import MathText from '@/components/MathText';
import ConceptFigure from '@/components/pedagogy/ConceptFigure';
import type { ConceptVisual } from '@/data/conceptVisuals/types';
import type { TopicContent } from '@/data/types';
import { stripMarkup } from '@/data/knowledgeFramework';

type Concept = TopicContent['concepts'][number];

/** 需要「單位與正負號檢核」提醒的計算型科目 */
const CALCULATION_SUBJECTS = new Set(['mechanics', 'materials', 'surveying', 'physics']);

interface ConceptCardProps {
  concept: Concept;
  index: number;
  total: number;
  subjectSlug: string;
  subjectColor: string;
  visuals: ConceptVisual[];
  isUnderstood: boolean;
  onToggleUnderstood: () => void;
}

export default function ConceptCard({ concept, index, total, subjectSlug, subjectColor, visuals, isUnderstood, onToggleUnderstood }: ConceptCardProps) {
  const [copied, setCopied] = useState(false);
  const heading = stripMarkup(concept.heading);

  const copyFormula = async () => {
    if (!concept.formula) return;
    try {
      await navigator.clipboard.writeText(stripMarkup(concept.formula));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id={`concept-${index}`}
      aria-labelledby={`concept-${index}-title`}
      className={`concept-card scroll-mt-28 space-y-5 rounded-2xl border p-5 transition-colors sm:p-7 ${
        isUnderstood
          ? 'border-emerald-300 bg-emerald-50/30 dark:border-emerald-800/80 dark:bg-emerald-950/15'
          : 'border-slate-200 bg-white shadow-xs dark:border-slate-800 dark:bg-slate-900'
      }`}
    >
      <header className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-start gap-3">
          <span
            className="flex size-8 shrink-0 items-center justify-center rounded-xl font-mono text-sm font-bold text-white shadow-xs"
            style={{ backgroundColor: `var(--color-${subjectColor})` }}
            aria-hidden="true"
          >
            {index + 1}
          </span>
          <div className="min-w-0">
            <p className="text-xs font-bold text-slate-500 dark:text-slate-400">
              觀念 {index + 1} / {total}
            </p>
            <h3 id={`concept-${index}-title`} className="mt-0.5 font-serif text-xl font-bold leading-snug text-slate-900 dark:text-white">
              {heading}
            </h3>
          </div>
        </div>
        <button
          type="button"
          onClick={onToggleUnderstood}
          aria-pressed={isUnderstood}
          className={`inline-flex min-h-9 shrink-0 items-center gap-1.5 rounded-lg px-3 text-xs font-bold transition-colors ${
            isUnderstood
              ? 'bg-emerald-600 text-white shadow-xs hover:bg-emerald-700'
              : 'border border-slate-300 bg-slate-50 text-slate-700 hover:border-emerald-400 hover:bg-emerald-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-emerald-950/50'
          }`}
        >
          {isUnderstood ? <Check className="size-3.5" aria-hidden="true" /> : null}
          {isUnderstood ? '已理解' : '我懂了'}
        </button>
      </header>

      <div className="concept-body whitespace-pre-line text-[15px] leading-[1.85] text-slate-700 dark:text-slate-300 sm:text-[15.5px]">
        <MathText content={concept.body} />
      </div>

      {visuals.length ? (
        <div className="concept-figures space-y-4">
          {visuals.map((visual, visualIndex) => (
            <ConceptFigure key={visual.title} visual={visual} figureNumber={`${index + 1}-${visualIndex + 1}`} />
          ))}
        </div>
      ) : null}

      {concept.steps?.length ? (
        <div className="concept-steps space-y-3 rounded-2xl border border-slate-200 bg-slate-50/80 p-4 dark:border-slate-800 dark:bg-slate-800/40 sm:p-5">
          <p className="text-xs font-bold text-teal-700 dark:text-teal-300">步驟 · 共 {concept.steps.length} 步</p>
          <ol className="space-y-2.5">
            {concept.steps.map((step, stepIndex) => (
              <li key={step} className="flex gap-3 rounded-xl border border-slate-200/70 bg-white/80 p-3 text-sm leading-relaxed text-slate-800 dark:border-slate-800/70 dark:bg-slate-900/50 dark:text-slate-200">
                <span className="mt-0.5 shrink-0 font-mono text-xs font-bold" style={{ color: `var(--color-${subjectColor})` }}>
                  {stepIndex + 1}.
                </span>
                <span className="min-w-0 flex-1">
                  <MathText content={step} />
                </span>
              </li>
            ))}
          </ol>
        </div>
      ) : null}

      {concept.formula ? (
        <div
          className="space-y-3 rounded-r-xl border-l-4 bg-slate-50 p-4 shadow-xs dark:bg-slate-800/60 sm:p-5"
          style={{ borderColor: `var(--color-${subjectColor})` }}
          role="note"
          aria-label={`${heading}公式`}
        >
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400">公式／關係式</span>
            <button
              type="button"
              onClick={copyFormula}
              className="inline-flex items-center gap-1 rounded-md border border-slate-300 bg-white px-2.5 py-1 text-xs text-slate-700 transition-colors hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-blue-950 print:hidden"
            >
              {copied ? <Check className="size-3" aria-hidden="true" /> : <Copy className="size-3" aria-hidden="true" />}
              {copied ? '已複製' : '複製'}
            </button>
          </div>
          <div className="mobile-scroll overflow-x-auto whitespace-pre-line font-mono text-base font-bold leading-relaxed text-slate-900 dark:text-white sm:text-lg">
            <MathText content={concept.formula} />
          </div>
          {CALCULATION_SUBJECTS.has(subjectSlug) ? (
            <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              代入前先統一單位（N／kN、mm／m、MPa = N/mm²），算完檢查正負號與數量級是否合理。
            </p>
          ) : null}
        </div>
      ) : null}

      {concept.table ? (
        <div className="concept-table overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs dark:border-slate-800 dark:bg-slate-900/60" role="region" aria-label={`${heading}重點整理表`}>
          <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-2.5 text-xs dark:border-slate-800 dark:bg-slate-800/80">
            <span className="font-bold text-indigo-700 dark:text-indigo-300">重點整理表</span>
            <span className="hidden text-slate-500 dark:text-slate-400 sm:inline print:hidden">表格可左右捲動</span>
          </div>
          <div className="mobile-scroll overflow-x-auto" tabIndex={0}>
            <table className="w-full min-w-[40rem] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-slate-100/70 dark:bg-slate-800/60">
                  {concept.table.headers.map((header) => (
                    <th key={header} scope="col" className="border-b border-slate-200 px-4 py-3 font-bold text-slate-900 dark:border-slate-700 dark:text-white">
                      <MathText content={header} />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                {concept.table.rows.map((row, rowIndex) => (
                  <tr key={rowIndex} className="even:bg-slate-50/40 dark:even:bg-slate-800/20">
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className={`whitespace-pre-line px-4 py-3 leading-relaxed text-slate-700 dark:text-slate-300 ${cellIndex === 0 ? 'font-semibold text-slate-900 dark:text-slate-100' : ''}`}>
                        <MathText content={cell} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : null}

      {concept.diagram?.svg ? (
        <figure className="concept-diagram space-y-2.5 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900/60">
          <figcaption className="flex flex-wrap items-center justify-between gap-2 text-xs">
            <span className="font-bold text-indigo-700 dark:text-indigo-300">{concept.diagram.title}</span>
            {concept.diagram.caption ? <span className="text-slate-500 dark:text-slate-400">{concept.diagram.caption}</span> : null}
          </figcaption>
          <div className="legacy-diagram w-full overflow-x-auto rounded-lg bg-white p-2" dangerouslySetInnerHTML={{ __html: concept.diagram.svg }} />
        </figure>
      ) : null}
    </section>
  );
}
