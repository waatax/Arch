import React, { createContext, useContext } from 'react';

export interface SceneMarkers {
  arrowBlue: string;
  arrowRose: string;
  arrowEmerald: string;
  arrowAmber: string;
  dotBlue: string;
}

export type SceneRenderer = (m: SceneMarkers) => React.ReactNode;

export interface InfographicSceneContextValue {
  activeHighlightIndex: number | null;
  onSelectHighlight?: (index: number) => void;
}

export const InfographicSceneContext = createContext<InfographicSceneContextValue>({
  activeHighlightIndex: null,
});

function estimateSvgTextWidth(text: string, fontSize: number): number {
  let width = 0;
  for (const ch of text) {
    if (/[\u3000-\u9FFF\uFF00-\uFFEF]/.test(ch)) width += fontSize * 1.02;
    else if (/[A-Z]/.test(ch)) width += fontSize * 0.66;
    else width += fontSize * 0.56;
  }
  return width;
}

export function wrapSvgLines(text: string, maxWidthPx: number, fontSize: number): string[] {
  if (!text) return [];
  if (estimateSvgTextWidth(text, fontSize) <= maxWidthPx) return [text];

  // Try to find a clean break near the target width (preferring punctuation/spaces)
  let acc = 0;
  let lastGoodBreak = -1;
  let hardBreak = text.length;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    const cw = /[\u3000-\u9FFF\uFF00-\uFFEF]/.test(ch)
      ? fontSize * 1.02
      : /[A-Z]/.test(ch)
        ? fontSize * 0.66
        : fontSize * 0.56;
    if (acc + cw > maxWidthPx) {
      hardBreak = Math.max(1, i);
      break;
    }
    acc += cw;
    if (/[\s；，、。：｜/→（(]/.test(ch) && acc >= maxWidthPx * 0.45) {
      lastGoodBreak = ch === '（' || ch === '(' ? i : i + 1;
    }
  }

  const splitAt = lastGoodBreak > 0 ? lastGoodBreak : hardBreak;
  const line1 = text.slice(0, splitAt).trim();
  const line2 = text.slice(splitAt).trim();
  return line2 ? [line1, line2] : [line1];
}

export function LeftCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  const titleLines = wrapSvgLines(title, 412, 12);
  const subLines = subtitle ? wrapSvgLines(subtitle, 412, 9.8) : [];
  const subStartY = titleLines.length > 1 ? 39 : 38;
  const titleLineHeight = 14;
  const subLineHeight = 12;
  const extraHeaderOffset =
    (titleLines.length > 1 ? 10 : 0) + (subLines.length > 1 ? 10 : 0);

  return (
    <g transform="translate(18, 16)">
      <rect
        width="444"
        height="324"
        rx="12"
        className="fill-white/85 dark:fill-slate-900/75 stroke-slate-200 dark:stroke-slate-800"
        strokeWidth="1"
      />
      <text x="16" y="22" className="fill-slate-900 dark:fill-white text-[12px] font-bold font-sans">
        {titleLines.map((line, idx) => (
          <tspan key={idx} x="16" dy={idx === 0 ? 0 : titleLineHeight}>
            {line}
          </tspan>
        ))}
      </text>
      {subLines.length > 0 && (
        <text
          x="16"
          y={titleLines.length > 1 ? subStartY + 12 : subStartY}
          className="fill-slate-500 dark:fill-slate-400 text-[9.8px] font-mono"
        >
          {subLines.map((line, idx) => (
            <tspan key={idx} x="16" dy={idx === 0 ? 0 : subLineHeight}>
              {line}
            </tspan>
          ))}
        </text>
      )}
      <g transform={`translate(18, ${10 + extraHeaderOffset})`}>{children}</g>
    </g>
  );
}

export function RightCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  const titleLines = wrapSvgLines(title, 354, 12);
  const subLines = subtitle ? wrapSvgLines(subtitle, 354, 9.8) : [];
  const subStartY = titleLines.length > 1 ? 39 : 38;
  const extraHeaderOffset =
    (titleLines.length > 1 ? 10 : 0) + (subLines.length > 1 ? 10 : 0);

  return (
    <g transform="translate(476, 16)">
      <rect
        width="386"
        height="324"
        rx="12"
        className="fill-white/90 dark:fill-slate-900/80 stroke-slate-200 dark:stroke-slate-800"
        strokeWidth="1"
      />
      <text x="16" y="22" className="fill-indigo-950 dark:fill-indigo-200 text-[12px] font-bold font-sans">
        {titleLines.map((line, idx) => (
          <tspan key={idx} x="16" dy={idx === 0 ? 0 : 14}>
            {line}
          </tspan>
        ))}
      </text>
      {subLines.length > 0 && (
        <text
          x="16"
          y={titleLines.length > 1 ? subStartY + 12 : subStartY}
          className="fill-slate-500 dark:fill-slate-400 text-[9.8px] font-mono"
        >
          {subLines.map((line, idx) => (
            <tspan key={idx} x="16" dy={idx === 0 ? 0 : 12}>
              {line}
            </tspan>
          ))}
        </text>
      )}
      <g transform={`translate(0, ${10 + extraHeaderOffset})`}>{children}</g>
    </g>
  );
}

export function StepRow({
  y,
  num,
  label,
  detail,
  tone = 'blue',
  highlightIndex,
}: {
  y: number;
  num: string;
  label: string;
  detail: string;
  tone?: 'blue' | 'emerald' | 'amber' | 'rose' | 'indigo';
  highlightIndex?: number;
}) {
  const { activeHighlightIndex, onSelectHighlight } = useContext(InfographicSceneContext);
  const inferredIndex = highlightIndex ?? (y < 92 ? 0 : y < 148 ? 1 : 2);
  const isHighlighted = activeHighlightIndex === inferredIndex;
  const isDimmed = activeHighlightIndex !== null && !isHighlighted;

  const styles = {
    blue: 'fill-blue-500/12 stroke-blue-500/60 text-blue-700 dark:text-blue-300',
    emerald: 'fill-emerald-500/12 stroke-emerald-500/60 text-emerald-700 dark:text-emerald-300',
    amber: 'fill-amber-500/12 stroke-amber-500/60 text-amber-700 dark:text-amber-300',
    rose: 'fill-rose-500/12 stroke-rose-500/60 text-rose-700 dark:text-rose-300',
    indigo: 'fill-indigo-500/12 stroke-indigo-500/60 text-indigo-700 dark:text-indigo-300',
  }[tone];

  const labelLines = wrapSvgLines(label, 304, 11);
  const detailLines = wrapSvgLines(detail, 304, 9.5);
  const rowHeight = detailLines.length > 1 ? 52 : 48;

  return (
    <g
      transform={`translate(16, ${y})`}
      opacity={isDimmed ? 0.48 : 1}
      className={onSelectHighlight ? 'cursor-pointer transition-opacity' : undefined}
      onClick={onSelectHighlight ? () => onSelectHighlight(inferredIndex) : undefined}
    >
      {isHighlighted && (
        <rect
          x="-2.5"
          y="-2.5"
          width="359"
          height={rowHeight + 5}
          rx="10.5"
          fill="none"
          className="stroke-indigo-500 dark:stroke-indigo-400"
          strokeWidth="2"
          strokeDasharray="5 2"
        />
      )}
      <rect
        width="354"
        height={rowHeight}
        rx="8"
        className={isHighlighted ? 'fill-indigo-500/20 stroke-indigo-600 dark:stroke-indigo-400' : styles}
        strokeWidth={isHighlighted ? '1.8' : '1.2'}
      />
      <circle
        cx="21"
        cy={rowHeight / 2}
        r="11"
        className={isHighlighted ? 'fill-indigo-600 dark:fill-indigo-500' : 'fill-slate-900/10 dark:fill-white/10'}
      />
      <text
        x="21"
        y={rowHeight / 2 + 3.5}
        textAnchor="middle"
        className={`text-[9.5px] font-bold font-mono ${isHighlighted ? 'fill-white' : 'fill-slate-900 dark:fill-white'}`}
      >
        {num}
      </text>
      <text x="40" y={detailLines.length > 1 ? 15.5 : 19} className="fill-slate-900 dark:fill-white text-[11px] font-bold">
        {labelLines[0]}
      </text>
      <text
        x="40"
        y={detailLines.length > 1 ? 30 : 35.5}
        className="fill-slate-600 dark:fill-slate-300 text-[9.5px] font-mono"
      >
        {detailLines.map((line, idx) => (
          <tspan key={idx} x="40" dy={idx === 0 ? 0 : 11.5}>
            {line}
          </tspan>
        ))}
      </text>
    </g>
  );
}
