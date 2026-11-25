import React from 'react';

export interface SceneMarkers {
  arrowBlue: string;
  arrowRose: string;
  arrowEmerald: string;
  arrowAmber: string;
  dotBlue: string;
}

export type SceneRenderer = (m: SceneMarkers) => React.ReactNode;

export function LeftCard({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <g transform="translate(24, 18)">
      <rect
        width="408"
        height="284"
        rx="12"
        className="fill-white/80 dark:fill-slate-900/75 stroke-slate-200 dark:stroke-slate-800"
        strokeWidth="1"
      />
      <text x="16" y="24" className="fill-slate-900 dark:fill-white text-[12px] font-bold font-sans">
        {title}
      </text>
      {subtitle && (
        <text x="16" y="40" className="fill-slate-500 dark:fill-slate-400 text-[10px] font-mono">
          {subtitle}
        </text>
      )}
      {children}
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
  return (
    <g transform="translate(446, 18)">
      <rect
        width="290"
        height="284"
        rx="12"
        className="fill-white/85 dark:fill-slate-900/80 stroke-slate-200 dark:stroke-slate-800"
        strokeWidth="1"
      />
      <text x="16" y="24" className="fill-indigo-950 dark:fill-indigo-200 text-[12px] font-bold font-sans">
        {title}
      </text>
      {subtitle && (
        <text x="16" y="40" className="fill-slate-500 dark:fill-slate-400 text-[10px] font-mono">
          {subtitle}
        </text>
      )}
      {children}
    </g>
  );
}

export function StepRow({
  y,
  num,
  label,
  detail,
  tone = 'blue',
}: {
  y: number;
  num: string;
  label: string;
  detail: string;
  tone?: 'blue' | 'emerald' | 'amber' | 'rose' | 'indigo';
}) {
  const styles = {
    blue: 'fill-blue-500/12 stroke-blue-500/60 text-blue-700 dark:text-blue-300',
    emerald: 'fill-emerald-500/12 stroke-emerald-500/60 text-emerald-700 dark:text-emerald-300',
    amber: 'fill-amber-500/12 stroke-amber-500/60 text-amber-700 dark:text-amber-300',
    rose: 'fill-rose-500/12 stroke-rose-500/60 text-rose-700 dark:text-rose-300',
    indigo: 'fill-indigo-500/12 stroke-indigo-500/60 text-indigo-700 dark:text-indigo-300',
  }[tone];

  return (
    <g transform={`translate(16, ${y})`}>
      <rect width="258" height="46" rx="8" className={styles} strokeWidth="1.2" />
      <circle cx="20" cy="23" r="10" className="fill-slate-900/10 dark:fill-white/10" />
      <text x="20" y="27" textAnchor="middle" className="fill-slate-900 dark:fill-white text-[10px] font-bold font-mono">
        {num}
      </text>
      <text x="38" y="19" className="fill-slate-900 dark:fill-white text-[11px] font-bold">
        {label}
      </text>
      <text x="38" y="35" className="fill-slate-600 dark:fill-slate-300 text-[9.5px] font-mono">
        {detail}
      </text>
    </g>
  );
}
