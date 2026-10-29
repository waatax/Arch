'use client';

import { useMemo, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { clsx } from 'clsx';
import MathText from '@/components/MathText';
import type { MatchExercise, OrderExercise } from '@/data/learnPath/types';
import { shuffle } from '@/lib/learn/engine';
import { haptic, sfx } from '@/lib/learn/sfx';
import { speakText, stopSpeech, type SpeechOptions } from '@/lib/learn/speech';

const tileBase =
  'w-full rounded-2xl border-2 border-b-4 px-4 py-3 text-left text-[15px] leading-snug font-medium transition-all active:translate-y-[2px] active:border-b-2 focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-300 dark:focus-visible:ring-sky-700';
const tileIdle =
  'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800';
const tileSelected = 'bg-sky-50 dark:bg-sky-950/60 border-sky-400 dark:border-sky-500 text-sky-800 dark:text-sky-100';
const tileRight = 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-500 text-emerald-800 dark:text-emerald-200';
const tileWrong = 'bg-rose-50 dark:bg-rose-950/50 border-rose-400 text-rose-800 dark:text-rose-200';
const tileHighlight = 'ring-4 ring-sky-400 border-sky-500 bg-sky-100/70 dark:bg-sky-900/40 text-sky-900 dark:text-sky-100';

/** 語音朗讀輔助（相容舊介面並支援全語系與 LaTeX 智慧轉譯） */
export function speak(text: string, options?: SpeechOptions) {
  speakText(text, options);
}

/** 題幹：支援 {{英文}} 片段朗讀與整句語音朗讀 */
export function Prompt({
  text,
  onSpeak,
  isSpeaking,
}: {
  text: string;
  onSpeak?: () => void;
  isSpeaking?: boolean;
}) {
  const parts = text.split(/(\{\{[\s\S]+?\}\})/g);
  return (
    <div className="flex items-start gap-3">
      {onSpeak && (
        <button
          type="button"
          onClick={onSpeak}
          className={clsx(
            'mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border-2 transition',
            isSpeaking
              ? 'border-sky-500 bg-sky-500 text-white shadow-md animate-pulse'
              : 'border-slate-200 bg-white text-slate-600 hover:border-sky-400 hover:bg-sky-50 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-sky-500 dark:hover:bg-sky-950/50',
          )}
          title={isSpeaking ? '停止朗讀' : '朗讀題目'}
          aria-label={isSpeaking ? '停止朗讀' : '朗讀題目'}
        >
          {isSpeaking ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
        </button>
      )}
      <p className="flex-1 text-lg sm:text-xl font-bold leading-relaxed text-slate-900 dark:text-slate-50">
        {parts.map((p, i) => {
          if (p.startsWith('{{') && p.endsWith('}}')) {
            const en = p.slice(2, -2);
            return (
              <button
                key={i}
                type="button"
                onClick={() => speak(en, { lang: 'en-US' })}
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
    </div>
  );
}

export function ChoiceList({
  choices,
  selected,
  onSelect,
  locked,
  correct,
  onSpeakChoice,
  highlightIdx,
}: {
  choices: string[];
  selected: string | null;
  onSelect: (c: string) => void;
  locked: boolean;
  correct: string;
  onSpeakChoice?: (choice: string, index: number) => void;
  highlightIdx?: number;
}) {
  const wide = choices.some((c) => c.length > 14);
  return (
    <div className={clsx('grid gap-3', wide ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2')} role="radiogroup">
      {choices.map((c, i) => {
        const isSel = selected === c;
        const isSpoken = highlightIdx === i;
        const state = locked
          ? c === correct
            ? tileRight
            : isSel
              ? tileWrong
              : tileIdle
          : isSpoken
            ? tileHighlight
            : isSel
              ? tileSelected
              : tileIdle;
        return (
          <div
            key={c}
            className={clsx(
              tileBase,
              state,
              'relative flex items-center gap-3 disabled:cursor-default group',
            )}
            role="radio"
            aria-checked={isSel}
            onClick={() => {
              if (locked) return;
              sfx.tap();
              haptic('selection');
              onSelect(c);
            }}
          >
            <kbd className="hidden sm:inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border-2 border-current/30 text-xs font-black opacity-60">
              {i + 1}
            </kbd>
            <span className="min-w-0 flex-1 break-words">
              <MathText content={c} />
            </span>
            {onSpeakChoice && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onSpeakChoice(c, i);
                }}
                className="opacity-0 group-hover:opacity-100 focus:opacity-100 rounded-lg p-1.5 text-slate-400 hover:bg-slate-200/60 hover:text-sky-600 dark:hover:bg-slate-700 dark:hover:text-sky-400 transition shrink-0"
                title={`朗讀選項 ${i + 1}`}
                aria-label={`朗讀選項 ${i + 1}`}
              >
                <Volume2 className="h-4 w-4" />
              </button>
            )}
          </div>
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
  onSpeakChoice,
}: {
  value: boolean | null;
  onSelect: (v: boolean) => void;
  locked: boolean;
  correct: boolean;
  onSpeakChoice?: (v: boolean, label: string) => void;
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
          <div
            key={label}
            role="radio"
            aria-checked={isSel}
            onClick={() => {
              if (locked) return;
              sfx.tap();
              haptic('selection');
              onSelect(v);
            }}
            className={clsx(tileBase, state, 'relative flex flex-col items-center gap-1 py-6 text-center cursor-pointer group')}
          >
            {onSpeakChoice && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onSpeakChoice(v, label);
                }}
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 focus:opacity-100 rounded-lg p-1.5 text-slate-400 hover:bg-slate-200/60 hover:text-sky-600 dark:hover:bg-slate-700 dark:hover:text-sky-400 transition"
                title={`朗讀「${label}」`}
                aria-label={`朗讀「${label}」`}
              >
                <Volume2 className="h-4 w-4" />
              </button>
            )}
            <span className="text-3xl" aria-hidden>
              {icon}
            </span>
            <span className="text-base font-black">{label}</span>
            <kbd className="hidden sm:block text-[11px] opacity-50">按 {i + 1}</kbd>
          </div>
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
      if (next.length === item.pairs.length) {
        onDone(mistakes);
      }
    } else {
      setFlash([l, r]);
      setMistakes((m) => m + 1);
      sfx.wrong();
      haptic('warning');
      setTimeout(() => {
        setFlash(null);
        setSelL(null);
        setSelR(null);
      }, 550);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4">
      <div className="space-y-2.5">
        {left.map((l) => {
          const isDone = matched.includes(l);
          const isSel = selL === l;
          const isErr = flash && flash[0] === l;
          return (
            <button
              key={l}
              type="button"
              disabled={isDone}
              onClick={() => {
                if (isDone) return;
                sfx.tap();
                setSelL(l);
                tryPair(l, selR);
              }}
              className={clsx(
                tileBase,
                'min-h-[3.25rem] text-sm',
                isDone
                  ? 'border-emerald-300 dark:border-emerald-900 bg-emerald-50/50 dark:bg-emerald-950/20 text-emerald-800 dark:text-emerald-300 opacity-60'
                  : isErr
                    ? tileWrong
                    : isSel
                      ? tileSelected
                      : tileIdle,
              )}
            >
              <MathText content={l} />
            </button>
          );
        })}
      </div>
      <div className="space-y-2.5">
        {right.map((r) => {
          const isDone = matched.some((l) => answer.get(l) === r);
          const isSel = selR === r;
          const isErr = flash && flash[1] === r;
          return (
            <button
              key={r}
              type="button"
              disabled={isDone}
              onClick={() => {
                if (isDone) return;
                sfx.tap();
                setSelR(r);
                tryPair(selL, r);
              }}
              className={clsx(
                tileBase,
                'min-h-[3.25rem] text-sm',
                isDone
                  ? 'border-emerald-300 dark:border-emerald-900 bg-emerald-50/50 dark:bg-emerald-950/20 text-emerald-800 dark:text-emerald-300 opacity-60'
                  : isErr
                    ? tileWrong
                    : isSel
                      ? tileSelected
                      : tileIdle,
              )}
            >
              <MathText content={r} />
            </button>
          );
        })}
      </div>
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
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center justify-center gap-2">
        <input
          type="text"
          inputMode="decimal"
          value={value}
          disabled={locked}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              onSubmit();
            }
          }}
          placeholder="輸入數字"
          className="w-48 rounded-2xl border-2 border-b-4 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-4 py-3 text-center text-2xl font-black text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-sky-400 focus:outline-none focus:ring-4 focus:ring-sky-200 dark:focus:ring-sky-800 disabled:opacity-70"
          autoFocus
        />
        {unit && <span className="text-lg font-bold text-slate-600 dark:text-slate-300">{unit}</span>}
      </div>
      <p className="text-xs text-slate-500">支援小數點、負數、分數（如 1/4）與千分位逗號</p>
    </div>
  );
}
