'use client';

import { useMemo, useState } from 'react';
import { Volume2 } from 'lucide-react';
import { clsx } from 'clsx';
import MathText from '@/components/MathText';
import type { MatchExercise, OrderExercise } from '@/data/learnPath/types';
import { shuffle } from '@/lib/learn/engine';
import { haptic, sfx } from '@/lib/learn/sfx';

const tileBase =
  'w-full rounded-2xl border-2 border-b-4 px-4 py-3 text-left text-[15px] leading-snug font-medium transition-all active:translate-y-[2px] active:border-b-2 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-300 dark:focus-visible:ring-sky-700';
const tileIdle =
  'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800';
const tileSelected = 'bg-sky-50 dark:bg-sky-950/60 border-sky-400 dark:border-sky-500 text-sky-800 dark:text-sky-100';
const tileRight = 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-500 text-emerald-800 dark:text-emerald-200';
const tileWrong = 'bg-rose-50 dark:bg-rose-950/50 border-rose-400 text-rose-800 dark:text-rose-200';

export function speak(text: string) {
  if (typeof window === 'undefined' || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'en-US';
  u.rate = 0.9;
  window.speechSynthesis.speak(u);
}

/** 題幹：{{英文}} 片段顯示為可朗讀的文字 */
export function Prompt({ text }: { text: string }) {
  const parts = text.split(/(\{\{[\s\S]+?\}\})/g);
  return (
    <p className="text-lg sm:text-xl font-bold leading-relaxed text-slate-900 dark:text-slate-50">
      {parts.map((p, i) => {
        if (p.startsWith('{{') && p.endsWith('}}')) {
          const en = p.slice(2, -2);
          return (
            <button
              key={i}
              type="button"
              onClick={() => speak(en)}
              className="mx-1 inline-flex items-center gap-1.5 rounded-xl border-2 border-sky-200 dark:border-sky-800 bg-sky-50 dark:bg-sky-950/60 px-2 py-0.5 text-sky-800 dark:text-sky-200 hover:bg-sky-100"
              aria-label={`朗讀英文：${en}`}
            >
              <Volume2 className="h-4 w-4 shrink-0" aria-hidden />
              <span>{en}</span>
            </button>
          );
        }
        return <MathText key={i} content={p} />;
      })}
    </p>
  );
}

export function ChoiceList({
  choices,
  selected,
  onSelect,
  locked,
  correct,
}: {
  choices: string[];
  selected: string | null;
  onSelect: (c: string) => void;
  locked: boolean;
  correct: string;
}) {
  const wide = choices.some((c) => c.length > 14);
  return (
    <div className={clsx('grid gap-3', wide ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2')} role="radiogroup">
      {choices.map((c, i) => {
        const isSel = selected === c;
        const state = locked ? (c === correct ? tileRight : isSel ? tileWrong : tileIdle) : isSel ? tileSelected : tileIdle;
        return (
          <button
            key={c}
            type="button"
            role="radio"
            aria-checked={isSel}
            disabled={locked}
            onClick={() => {
              sfx.tap();
              haptic('selection');
              onSelect(c);
            }}
            className={clsx(tileBase, state, 'flex items-center gap-3 disabled:cursor-default')}
          >
            <kbd className="hidden sm:inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border-2 border-current/30 text-xs font-black opacity-60">
              {i + 1}
            </kbd>
            <span className="min-w-0 break-words">
              <MathText content={c} />
            </span>
          </button>
        );
      })}
    </div>
  );
}

export function TrueFalse({
  value,
  onSelect,
  locked,
  correct,
}: {
  value: boolean | null;
  onSelect: (v: boolean) => void;
  locked: boolean;
  correct: boolean;
}) {
  const opts: [boolean, string, string][] = [
    [true, '⭕', '正確'],
    [false, '❌', '錯誤'],
  ];
  return (
    <div className="grid grid-cols-2 gap-4" role="radiogroup">
      {opts.map(([v, icon, label], i) => {
        const isSel = value === v;
        const state = locked ? (v === correct ? tileRight : isSel ? tileWrong : tileIdle) : isSel ? tileSelected : tileIdle;
        return (
          <button
            key={label}
            type="button"
            role="radio"
            aria-checked={isSel}
            disabled={locked}
            onClick={() => {
              sfx.tap();
              haptic('selection');
              onSelect(v);
            }}
            className={clsx(tileBase, state, 'flex flex-col items-center gap-1 py-6 text-center disabled:cursor-default')}
          >
            <span className="text-3xl" aria-hidden>
              {icon}
            </span>
            <span className="text-base font-black">{label}</span>
            <kbd className="hidden sm:block text-[11px] opacity-50">按 {i + 1}</kbd>
          </button>
        );
      })}
    </div>
  );
}

export function OrderBuilder({
  item,
  seed,
  placed,
  onChange,
  locked,
}: {
  item: OrderExercise;
  seed: string;
  placed: string[];
  onChange: (next: string[]) => void;
  locked: boolean;
}) {
  const bank = useMemo(() => {
    let s = shuffle(item.tiles, seed);
    // 避免洗完剛好是正確順序
    if (s.join('|') === item.tiles.join('|')) s = [...s.slice(1), s[0]];
    return s;
  }, [item.tiles, seed]);

  return (
    <div className="space-y-5">
      <div
        className="min-h-[7rem] rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-600 p-3 flex flex-wrap content-start gap-2"
        aria-label="你的排列"
      >
        {placed.length === 0 && <span className="m-auto text-sm text-slate-400">點下方的步驟，依序放到這裡</span>}
        {placed.map((t, i) => (
          <button
            key={t}
            type="button"
            disabled={locked}
            onClick={() => onChange(placed.filter((x) => x !== t))}
            className={clsx(
              'rounded-xl border-2 border-b-4 px-3 py-2 text-sm font-semibold text-left',
              locked
                ? t === item.tiles[i]
                  ? tileRight
                  : tileWrong
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 hover:bg-slate-50',
            )}
          >
            <span className="mr-1.5 text-xs opacity-60">{i + 1}.</span>
            <MathText content={t} />
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2" aria-label="可選步驟">
        {bank.map((t) => {
          const used = placed.includes(t);
          return (
            <button
              key={t}
              type="button"
              disabled={used || locked}
              onClick={() => {
                sfx.tap();
                haptic('selection');
                onChange([...placed, t]);
              }}
              className={clsx(
                'rounded-xl border-2 border-b-4 px-3 py-2 text-sm font-semibold text-left transition',
                used
                  ? 'border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 text-transparent select-none'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800 active:translate-y-[2px]',
              )}
              aria-hidden={used}
            >
              <MathText content={t} />
            </button>
          );
        })}
      </div>
    </div>
  );
}

/** 配對題：全部配完才結束；配錯會閃紅並計次 */
export function MatchBoard({
  item,
  seed,
  onDone,
}: {
  item: MatchExercise;
  seed: string;
  onDone: (mistakes: number) => void;
}) {
  const left = useMemo(() => shuffle(item.pairs.map((p) => p[0]), `${seed}-L`), [item.pairs, seed]);
  const right = useMemo(() => shuffle(item.pairs.map((p) => p[1]), `${seed}-R`), [item.pairs, seed]);
  const answer = useMemo(() => new Map(item.pairs), [item.pairs]);
  const [selL, setSelL] = useState<string | null>(null);
  const [selR, setSelR] = useState<string | null>(null);
  const [matched, setMatched] = useState<string[]>([]);
  const [flash, setFlash] = useState<[string, string] | null>(null);
  const [mistakes, setMistakes] = useState(0);

  const tryPair = (l: string | null, r: string | null) => {
    if (!l || !r) return;
    if (answer.get(l) === r) {
      const next = [...matched, l];
      setMatched(next);
      sfx.tap();
      haptic('light');
      setSelL(null);
      setSelR(null);
      if (next.length === item.pairs.length) onDone(mistakes);
    } else {
      setMistakes((m) => m + 1);
      setFlash([l, r]);
      sfx.wrong();
      haptic('warning');
      setSelL(null);
      setSelR(null);
      window.setTimeout(() => setFlash(null), 450);
    }
  };

  const doneRight = new Set(matched.map((l) => answer.get(l)));
  const cell = (side: 'L' | 'R', text: string) => {
    const done = side === 'L' ? matched.includes(text) : doneRight.has(text);
    const sel = side === 'L' ? selL === text : selR === text;
    const bad = flash && (side === 'L' ? flash[0] === text : flash[1] === text);
    return (
      <button
        key={`${side}-${text}`}
        type="button"
        disabled={done}
        onClick={() => {
          if (side === 'L') {
            setSelL(text);
            tryPair(text, selR);
          } else {
            setSelR(text);
            tryPair(selL, text);
          }
        }}
        className={clsx(
          tileBase,
          'min-h-[3.5rem] text-sm text-center flex items-center justify-center',
          done
            ? 'bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 text-slate-300 dark:text-slate-600'
            : bad
              ? tileWrong + ' animate-[shake_0.35s]'
              : sel
                ? tileSelected
                : tileIdle,
        )}
      >
        <MathText content={text} />
      </button>
    );
  };

  return (
    <div className="space-y-2">
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-3">{left.map((t) => cell('L', t))}</div>
        <div className="space-y-3">{right.map((t) => cell('R', t))}</div>
      </div>
      <p className="text-xs text-slate-500 dark:text-slate-400 text-center" aria-live="polite">
        已配對 {matched.length} / {item.pairs.length}
        {mistakes > 0 && `・配錯 ${mistakes} 次`}
      </p>
    </div>
  );
}

export function NumberInput({
  value,
  onChange,
  unit,
  locked,
  onSubmit,
}: {
  value: string;
  onChange: (v: string) => void;
  unit?: string;
  locked: boolean;
  onSubmit: () => void;
}) {
  return (
    <div className="flex items-center gap-3">
      <input
        type="text"
        inputMode="decimal"
        autoComplete="off"
        value={value}
        disabled={locked}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            e.stopPropagation();
            onSubmit();
          }
        }}
        placeholder="輸入數字（可用小數或分數）"
        aria-label="答案"
        className="w-full max-w-xs rounded-2xl border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-4 py-3 text-xl font-bold text-slate-900 dark:text-slate-50 focus:border-sky-400 focus:outline-none focus:ring-4 focus:ring-sky-200 dark:focus:ring-sky-900"
      />
      {unit && <span className="text-lg font-bold text-slate-600 dark:text-slate-300">{unit}</span>}
    </div>
  );
}
