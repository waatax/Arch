'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { BarChart3, Maximize2, PencilRuler, Table2, X } from 'lucide-react';
import MathText from '@/components/MathText';
import type { ConceptVisual } from '@/data/conceptVisuals/types';

const KIND_META = {
  diagram: { label: '圖解', Icon: PencilRuler, tone: 'text-blue-700 dark:text-sky-300 bg-blue-50 dark:bg-sky-950/50 border-blue-200 dark:border-sky-800' },
  chart: { label: '圖表', Icon: BarChart3, tone: 'text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/50 border-teal-200 dark:border-teal-800' },
  table: { label: '對照表', Icon: Table2, tone: 'text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/50 border-indigo-200 dark:border-indigo-800' },
} as const;

function escapeAttr(value: string) {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

function FigureTable({ headers, rows, label }: { headers: string[]; rows: string[][]; label: string }) {
  return (
    <div className="mobile-scroll overflow-x-auto" tabIndex={0} role="region" aria-label={label}>
      <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
        <thead>
          <tr className="bg-slate-100/80 dark:bg-slate-800/70">
            {headers.map((header) => (
              <th key={header} scope="col" className="border-b border-slate-200 px-3 py-2.5 font-bold text-slate-900 dark:border-slate-700 dark:text-white">
                <MathText content={header} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="even:bg-slate-50/50 dark:even:bg-slate-800/25">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className={`whitespace-pre-line px-3 py-2.5 leading-relaxed text-slate-700 dark:text-slate-300 ${cellIndex === 0 ? 'font-semibold text-slate-900 dark:text-slate-100' : ''}`}>
                  <MathText content={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ConceptFigure({ visual, figureNumber }: { visual: ConceptVisual; figureNumber: string }) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [showData, setShowData] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const meta = KIND_META[visual.kind];
  const accessibleLabel = `${visual.title}${visual.caption ? `：${visual.caption}` : ''}`;

  const svg = useMemo(() => {
    if (!visual.svg) return '';
    return visual.svg.includes('aria-label=')
      ? visual.svg
      : visual.svg.replace('<svg ', `<svg aria-label="${escapeAttr(accessibleLabel)}" `);
  }, [visual.svg, accessibleLabel]);

  useEffect(() => {
    if (!isZoomed) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const timer = window.setTimeout(() => closeRef.current?.focus(), 0);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsZoomed(false);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [isZoomed]);

  const Wrapper = visual.kind === 'table' ? 'div' : 'figure';

  return (
    <Wrapper className="cv-figure overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs dark:border-slate-800 dark:bg-slate-900/70">
      <div className="flex items-start justify-between gap-3 border-b border-slate-200 bg-slate-50/80 px-4 py-2.5 dark:border-slate-800 dark:bg-slate-800/50">
        <div className="flex min-w-0 items-start gap-2">
          <span className={`mt-0.5 inline-flex shrink-0 items-center gap-1 rounded-md border px-1.5 py-0.5 text-[10px] font-bold ${meta.tone}`}>
            <meta.Icon size={12} aria-hidden="true" />
            {meta.label} {figureNumber}
          </span>
          <p className="text-sm font-bold leading-snug text-slate-900 dark:text-slate-100">{visual.title}</p>
        </div>
        {svg ? (
          <button
            type="button"
            onClick={() => setIsZoomed(true)}
            className="cv-figure-zoom inline-flex shrink-0 items-center gap-1 rounded-md border border-slate-300 bg-white px-2 py-1 text-[11px] font-bold text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 print:hidden"
            aria-label={`放大檢視：${visual.title}`}
          >
            <Maximize2 size={12} aria-hidden="true" /> 放大
          </button>
        ) : null}
      </div>

      {svg ? (
        <div className="cv-figure-canvas mobile-scroll overflow-x-auto px-3 py-4 sm:px-5" tabIndex={0} aria-label={`${visual.title}（可左右捲動）`}>
          <div className="mx-auto max-w-[40rem]" dangerouslySetInnerHTML={{ __html: svg }} />
        </div>
      ) : null}

      {visual.kind === 'table' && visual.table ? (
        <FigureTable headers={visual.table.headers} rows={visual.table.rows} label={visual.title} />
      ) : null}

      {(visual.caption || visual.takeaways?.length || (visual.kind === 'chart' && visual.table)) ? (
        <figcaption className="space-y-2.5 border-t border-slate-200 px-4 py-3 text-[13.5px] leading-relaxed text-slate-700 dark:border-slate-800 dark:text-slate-300">
          {visual.caption ? (
            <p className="text-slate-600 dark:text-slate-400">
              <MathText content={visual.caption} />
            </p>
          ) : null}
          {visual.takeaways?.length ? (
            <div>
              <p className="mb-1 text-[11px] font-bold tracking-wider text-blue-700 dark:text-sky-300">讀圖重點</p>
              <ul className="space-y-1">
                {visual.takeaways.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-[0.55em] size-1.5 shrink-0 rounded-full bg-blue-600 dark:bg-sky-400" aria-hidden="true" />
                    <span>
                      <MathText content={item} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          {visual.kind === 'chart' && visual.table ? (
            <div className="print:hidden">
              <button
                type="button"
                onClick={() => setShowData((value) => !value)}
                aria-expanded={showData}
                className="text-[12px] font-bold text-teal-700 underline-offset-2 hover:underline dark:text-teal-300"
              >
                {showData ? '隱藏數據表' : '顯示圖表數據表'}
              </button>
              {showData ? (
                <div className="mt-2 overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700">
                  <FigureTable headers={visual.table.headers} rows={visual.table.rows} label={`${visual.title}數據表`} />
                </div>
              ) : null}
            </div>
          ) : null}
        </figcaption>
      ) : null}

      {isZoomed && svg ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/75 p-3 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`放大檢視：${visual.title}`}
          onClick={() => setIsZoomed(false)}
        >
          <div
            className="max-h-full w-full max-w-5xl overflow-auto rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl dark:border-slate-700 dark:bg-slate-900 sm:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="text-sm font-bold text-slate-900 dark:text-white">
                {meta.label} {figureNumber}　{visual.title}
              </p>
              <button
                ref={closeRef}
                type="button"
                onClick={() => setIsZoomed(false)}
                className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
              >
                <X size={14} aria-hidden="true" /> 關閉
              </button>
            </div>
            <div className="cv-figure-canvas rounded-xl p-2 sm:p-4 [&_.cv-svg]:min-w-0" dangerouslySetInnerHTML={{ __html: svg }} />
          </div>
        </div>
      ) : null}
    </Wrapper>
  );
}
