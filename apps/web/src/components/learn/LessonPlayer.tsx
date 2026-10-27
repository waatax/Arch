'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { BookOpen, Check, Flame, RotateCcw, Sparkles, Target, Timer, Trophy, X, Zap } from 'lucide-react';
import { clsx } from 'clsx';
import MathText from '@/components/MathText';
import type { CourseColor, Exercise } from '@/data/learnPath/types';
import {
  type Answer,
  type LessonResult,
  correctAnswerText,
  isCorrect,
  shuffle,
} from '@/lib/learn/engine';
import type { CompletionOutcome } from '@/lib/store/learnStore';
import { sfx } from '@/lib/learn/sfx';
import { triggerHaptic } from '@/lib/haptics';
import { COURSE_COLORS, TYPE_LABEL } from './theme';
import { ChoiceList, MatchBoard, NumberInput, OrderBuilder, Prompt, TrueFalse, speak } from './Exercises';
import Portal from './Portal';

export type PlayerMode = 'lesson' | 'practice' | 'challenge' | 'jump' | 'review';

export interface PlayerFinish {
  result: LessonResult;
  wrongIds: string[];
  rightIds: string[];
  passed: boolean;
}

export interface LessonPlayerProps {
  title: string;
  subtitle?: string;
  items: Exercise[];
  color: CourseColor;
  mode: PlayerMode;
  intro?: { title: string; points: string[] };
  passRatio?: number;
  dailyGoal: number;
  todayXpBefore: number;
  onFinish: (f: PlayerFinish) => CompletionOutcome;
  onClose: () => void;
  onRetry?: () => void;
}

const PRAISE = ['答對了！', '太棒了！', '精準！', '漂亮！', '完全正確！', '穩穩的！'];
const MAX_RETRY = 2;

type Phase = 'intro' | 'answer' | 'feedback' | 'done';

export default function LessonPlayer(props: LessonPlayerProps) {
  const { items, color, mode, intro, passRatio = 0.8 } = props;
  const tokens = COURSE_COLORS[color];

  const [phase, setPhase] = useState<Phase>(intro && intro.points.length ? 'intro' : 'answer');
  const [queue, setQueue] = useState<number[]>(() => items.map((_, i) => i));
  const [pos, setPos] = useState(0);
  const [tries, setTries] = useState<Record<string, number>>({});
  const [firstTry, setFirstTry] = useState<Record<string, boolean>>({});
  const [resolved, setResolved] = useState<string[]>([]);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [lastCorrect, setLastCorrect] = useState(false);
  const [praise, setPraise] = useState(PRAISE[0]);
  const startedAt = useRef(0);
  const [elapsed, setElapsed] = useState(0);
  const [outcome, setOutcome] = useState<CompletionOutcome | null>(null);
  const [finish, setFinish] = useState<PlayerFinish | null>(null);

  // 作答草稿
  const [choice, setChoice] = useState<string | null>(null);
  const [tf, setTf] = useState<boolean | null>(null);
  const [order, setOrder] = useState<string[]>([]);
  const [num, setNum] = useState('');
  const [matchMistakes, setMatchMistakes] = useState<number | null>(null);

  const item = items[queue[pos]];
  const attempt = item ? tries[item.id] ?? 0 : 0;
  const seed = item ? `${item.id}#${attempt}` : '';

  const choices = useMemo(
    () => (item && item.type === 'mcq' ? shuffle(item.choices, seed) : []),
    [item, seed],
  );

  const resetDraft = () => {
    setChoice(null);
    setTf(null);
    setOrder([]);
    setNum('');
    setMatchMistakes(null);
  };

  const canCheck =
    phase === 'answer' &&
    !!item &&
    ((item.type === 'mcq' && choice !== null) ||
      (item.type === 'tf' && tf !== null) ||
      (item.type === 'order' && order.length === item.tiles.length) ||
      (item.type === 'num' && num.trim() !== '') ||
      (item.type === 'match' && matchMistakes !== null));

  const grade = useCallback(
    (forcedMatchMistakes?: number) => {
      if (!item) return;
      let answer: Answer;
      switch (item.type) {
        case 'mcq':
          answer = { type: 'mcq', choice: choice ?? '' };
          break;
        case 'tf':
          answer = { type: 'tf', value: tf ?? false };
          break;
        case 'order':
          answer = { type: 'order', tiles: order };
          break;
        case 'num':
          answer = { type: 'num', value: num };
          break;
        case 'match':
          answer = { type: 'match', solved: (forcedMatchMistakes ?? matchMistakes ?? 1) === 0 };
          break;
      }
      const ok = isCorrect(item, answer);
      const nth = (tries[item.id] ?? 0) + 1;
      setTries((t) => ({ ...t, [item.id]: nth }));
      if (nth === 1) setFirstTry((f) => ({ ...f, [item.id]: ok }));
      setLastCorrect(ok);
      if (ok) {
        const c = combo + 1;
        setCombo(c);
        setMaxCombo((m) => Math.max(m, c));
        setPraise(c >= 3 ? `連續答對 ${c} 題！` : PRAISE[(nth + pos) % PRAISE.length]);
        setResolved((r) => (r.includes(item.id) ? r : [...r, item.id]));
        sfx.correct();
        triggerHaptic('success');
      } else {
        setCombo(0);
        // 配對題已在過程中看到全部正解，不再重出；其他題型答錯排到最後再練一次
        if (item.type !== 'match' && nth < MAX_RETRY) {
          setQueue((q) => [...q, queue[pos]]);
        } else {
          setResolved((r) => (r.includes(item.id) ? r : [...r, item.id]));
        }
        sfx.wrong();
        triggerHaptic('error');
      }
      setPhase('feedback');
    },
    [item, choice, tf, order, num, matchMistakes, tries, combo, pos, queue],
  );

  const finishLesson = useCallback(() => {
    const total = items.length;
    const firstTryCorrect = items.filter((it) => firstTry[it.id]).length;
    const result: LessonResult = {
      total,
      firstTryCorrect,
      maxCombo,
      kind: mode === 'jump' ? 'jump' : mode === 'challenge' ? 'challenge' : mode === 'review' ? 'review' : 'lesson',
    };
    const f: PlayerFinish = {
      result,
      wrongIds: items.filter((it) => !firstTry[it.id]).map((it) => it.id),
      rightIds: items.filter((it) => firstTry[it.id]).map((it) => it.id),
      passed: mode !== 'jump' || firstTryCorrect / Math.max(total, 1) >= passRatio,
    };
    setFinish(f);
    setElapsed(Math.round((Date.now() - startedAt.current) / 1000));
    setOutcome(props.onFinish(f));
    setPhase('done');
    sfx.fanfare();
    triggerHaptic('success');
  }, [items, firstTry, maxCombo, mode, passRatio, props]);

  const next = useCallback(() => {
    if (pos + 1 >= queue.length) {
      finishLesson();
      return;
    }
    setPos(pos + 1);
    resetDraft();
    setPhase('answer');
  }, [pos, queue.length, finishLesson]);

  // 鍵盤：Enter 檢查／繼續；1–4 選選項；Esc 離開
  const keyRef = useRef<(e: KeyboardEvent) => void>(() => {});
  const dialogRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    keyRef.current = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement && e.key !== 'Escape') return;
      if (e.key === 'Escape') {
        props.onClose();
        return;
      }
      if (e.key === 'Enter') {
        if (phase === 'intro') setPhase('answer');
        else if (phase === 'answer' && canCheck) grade();
        else if (phase === 'feedback') next();
        e.preventDefault();
        return;
      }
      if (phase !== 'answer' || !item) return;
      const n = Number(e.key);
      if (item.type === 'mcq' && n >= 1 && n <= choices.length) setChoice(choices[n - 1]);
      if (item.type === 'tf' && (n === 1 || n === 2)) setTf(n === 1);
    };
  });
  useEffect(() => {
    startedAt.current = Date.now();
    const opener = document.activeElement as HTMLElement | null;
    dialogRef.current?.focus();
    const h = (e: KeyboardEvent) => keyRef.current(e);
    window.addEventListener('keydown', h);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', h);
      document.body.style.overflow = prev;
      opener?.focus?.();
    };
  }, []);

  const progress = items.length ? resolved.length / items.length : 0;

  return (
    <Portal>
    <div
      ref={dialogRef}
      tabIndex={-1}
      className="fixed inset-0 z-[100] flex flex-col bg-white outline-none dark:bg-slate-950"
      role="dialog"
      aria-modal="true"
      aria-label={props.title}
    >
      {/* 頂部：關閉、進度條、連擊 */}
      <div className="mx-auto flex w-full max-w-3xl items-center gap-3 px-4 pt-4 sm:pt-6">
        <button
          type="button"
          onClick={props.onClose}
          className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200"
          aria-label="離開關卡"
        >
          <X className="h-6 w-6" />
        </button>
        <div
          className="relative h-4 flex-1 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={items.length}
          aria-valuenow={resolved.length}
          aria-label="關卡進度"
        >
          <div
            className={clsx('h-full rounded-full transition-[width] duration-500 ease-out', tokens.bar)}
            style={{ width: `${Math.max(progress * 100, phase === 'done' ? 100 : 3)}%` }}
          >
            <div className="mx-2 mt-1 h-1 rounded-full bg-white/40" />
          </div>
        </div>
        <div
          className={clsx(
            'flex min-w-[3.5rem] items-center justify-end gap-1 text-sm font-black tabular-nums',
            combo >= 2 ? 'text-orange-500' : 'text-slate-300 dark:text-slate-600',
          )}
          aria-label={`連續答對 ${combo} 題`}
        >
          <Flame className="h-5 w-5" aria-hidden />
          {combo}
        </div>
      </div>

      <div className="mx-auto flex min-h-0 w-full max-w-3xl flex-1 flex-col overflow-y-auto px-4 pb-6 pt-6 sm:px-6 sm:pt-10">
        {phase === 'intro' && intro && (
          <div className="m-auto w-full max-w-xl space-y-6 text-center">
            <div className={clsx('mx-auto flex h-16 w-16 items-center justify-center rounded-2xl', tokens.soft)}>
              <BookOpen className={clsx('h-8 w-8', tokens.text)} aria-hidden />
            </div>
            <div>
              <p className={clsx('text-xs font-black tracking-widest', tokens.text)}>重點速覽</p>
              <h2 className="mt-1 text-2xl font-black text-slate-900 dark:text-white">{intro.title}</h2>
            </div>
            <ul className="space-y-3 text-left">
              {intro.points.map((p) => (
                <li
                  key={p}
                  className={clsx('flex gap-3 rounded-2xl border-2 p-4 text-[15px] leading-relaxed text-slate-700 dark:text-slate-200', tokens.border)}
                >
                  <Sparkles className={clsx('mt-0.5 h-5 w-5 shrink-0', tokens.text)} aria-hidden />
                  <span>
                    <MathText content={p} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {(phase === 'answer' || phase === 'feedback') && item && (
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className={clsx('rounded-full px-3 py-1 text-xs font-black', tokens.soft, tokens.text)}>
                {TYPE_LABEL[item.type]}
              </span>
              {attempt > 0 && phase === 'answer' && (
                <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800 dark:bg-amber-900/50 dark:text-amber-200">
                  <RotateCcw className="h-3.5 w-3.5" aria-hidden /> 再試一次
                </span>
              )}
              {item.type === 'mcq' && item.speak && (
                <button
                  type="button"
                  onClick={() => speak(item.speak as string)}
                  className="ml-auto text-xs font-bold text-sky-600 hover:underline"
                >
                  🔊 朗讀
                </button>
              )}
            </div>
            <Prompt text={item.prompt} />

            {item.type === 'mcq' && (
              <ChoiceList
                choices={choices}
                selected={choice}
                onSelect={setChoice}
                locked={phase === 'feedback'}
                correct={item.choices[item.answer]}
              />
            )}
            {item.type === 'tf' && (
              <TrueFalse value={tf} onSelect={setTf} locked={phase === 'feedback'} correct={item.answer} />
            )}
            {item.type === 'order' && (
              <OrderBuilder item={item} seed={seed} placed={order} onChange={setOrder} locked={phase === 'feedback'} />
            )}
            {item.type === 'num' && (
              <NumberInput
                value={num}
                onChange={setNum}
                unit={item.unit}
                locked={phase === 'feedback'}
                onSubmit={() => (phase === 'answer' && num.trim() ? grade() : phase === 'feedback' ? next() : undefined)}
              />
            )}
            {item.type === 'match' && (
              <MatchBoard
                key={seed}
                item={item}
                seed={seed}
                onDone={(m) => {
                  setMatchMistakes(m);
                  grade(m);
                }}
              />
            )}
          </div>
        )}

        {phase === 'done' && finish && (
          <DoneScreen
            mode={mode}
            finish={finish}
            outcome={outcome}
            elapsed={elapsed}
            dailyGoal={props.dailyGoal}
            todayXpBefore={props.todayXpBefore}
          />
        )}
      </div>

      {/* 底部操作列與回饋 */}
      <div
        className={clsx(
          'shrink-0 border-t-2 transition-colors',
          phase === 'feedback'
            ? lastCorrect
              ? 'border-emerald-200 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950/60'
              : 'border-rose-200 bg-rose-50 dark:border-rose-900 dark:bg-rose-950/60'
            : 'border-slate-200 dark:border-slate-800',
        )}
      >
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:px-6 sm:py-6">
          {phase === 'feedback' && item ? (
            <div className="flex-1 space-y-1" aria-live="assertive">
              <p
                className={clsx(
                  'flex items-center gap-2 text-xl font-black',
                  lastCorrect ? 'text-emerald-700 dark:text-emerald-300' : 'text-rose-700 dark:text-rose-300',
                )}
              >
                {lastCorrect ? <Check className="h-6 w-6" aria-hidden /> : <X className="h-6 w-6" aria-hidden />}
                {lastCorrect ? praise : item.type === 'match' ? '配對完成，但有配錯' : '正確答案：'}
              </p>
              {!lastCorrect && item.type !== 'match' && (
                <p className="text-[15px] font-semibold text-rose-800 dark:text-rose-200">
                  <MathText content={correctAnswerText(item)} />
                </p>
              )}
              {item.explain && (
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  <MathText content={item.explain} />
                </p>
              )}
              {!lastCorrect && item.type !== 'match' && (tries[item.id] ?? 0) < MAX_RETRY && (
                <p className="text-xs text-slate-500 dark:text-slate-400">這題稍後會再出現一次，加深印象。</p>
              )}
            </div>
          ) : (
            <div className="hidden flex-1 sm:block">
              {phase === 'answer' && item?.type === 'match' && (
                <p className="text-sm text-slate-500">點左欄再點右欄，配完自動檢查</p>
              )}
            </div>
          )}

          {phase === 'intro' && <PrimaryButton onClick={() => setPhase('answer')}>開始作答</PrimaryButton>}
          {phase === 'answer' && item?.type !== 'match' && (
            <PrimaryButton onClick={() => grade()} disabled={!canCheck}>
              檢查
            </PrimaryButton>
          )}
          {phase === 'feedback' && (
            <PrimaryButton onClick={next} tone={lastCorrect ? 'green' : 'red'}>
              繼續
            </PrimaryButton>
          )}
          {phase === 'done' && (
            <div className="flex w-full gap-3 sm:w-auto">
              {props.onRetry && (
                <button
                  type="button"
                  onClick={props.onRetry}
                  className="flex-1 rounded-2xl border-2 border-b-4 border-slate-200 bg-white px-6 py-3 text-sm font-black tracking-wide text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 sm:flex-none"
                >
                  再練一次
                </button>
              )}
              <PrimaryButton onClick={props.onClose}>繼續</PrimaryButton>
            </div>
          )}
        </div>
      </div>
    </div>
    </Portal>
  );
}

function PrimaryButton({
  children,
  onClick,
  disabled,
  tone = 'green',
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  tone?: 'green' | 'red';
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'w-full rounded-2xl border-b-4 px-8 py-3.5 text-base font-black tracking-wide transition active:translate-y-[2px] active:border-b-2 sm:w-auto sm:min-w-[10rem]',
        disabled
          ? 'cursor-not-allowed border-slate-300 bg-slate-200 text-slate-400 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-600'
          : tone === 'green'
            ? 'border-emerald-700 bg-emerald-500 text-white hover:bg-emerald-400'
            : 'border-rose-700 bg-rose-500 text-white hover:bg-rose-400',
      )}
    >
      {children}
    </button>
  );
}

function DoneScreen({
  mode,
  finish,
  outcome,
  elapsed,
  dailyGoal,
  todayXpBefore,
}: {
  mode: PlayerMode;
  finish: PlayerFinish;
  outcome: CompletionOutcome | null;
  elapsed: number;
  dailyGoal: number;
  todayXpBefore: number;
}) {
  const { total, firstTryCorrect } = finish.result;
  const acc = total ? Math.round((firstTryCorrect / total) * 100) : 100;
  const perfect = total > 0 && firstTryCorrect === total;
  const xp = outcome?.xp ?? 0;
  const todayAfter = todayXpBefore + xp;
  const streakUp = outcome && outcome.streakAfter > outcome.streakBefore;

  const heading =
    mode === 'jump'
      ? finish.passed
        ? '跳級成功！'
        : '這次還差一點'
      : perfect
        ? '完美通關！'
        : mode === 'review'
          ? '錯題複習完成！'
          : mode === 'challenge'
            ? '單元挑戰完成！'
            : '關卡完成！';

  return (
    <div className="m-auto w-full max-w-lg space-y-8 py-4 text-center">
      <div className="space-y-3">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-amber-100 text-5xl dark:bg-amber-900/40 animate-[pop_0.5s_ease-out]">
          {mode === 'jump' && !finish.passed ? '🧗' : perfect ? '🏆' : '🎉'}
        </div>
        <h2 className="text-3xl font-black text-amber-500">{heading}</h2>
        {mode === 'jump' && (
          <p className="text-sm text-slate-600 dark:text-slate-300">
            {finish.passed
              ? '前面的關卡已幫你標記完成，直接從這個單元往下學吧。'
              : '跳級需首答正確 80% 以上。沒關係，從目前的關卡穩穩往前也很好。'}
          </p>
        )}
      </div>

      <div className="grid grid-cols-3 gap-3">
        <StatTile icon={<Zap className="h-4 w-4" />} label="獲得 XP" value={`+${xp}`} tone="amber" />
        <StatTile icon={<Target className="h-4 w-4" />} label="首答正確率" value={`${acc}%`} tone="emerald" />
        <StatTile
          icon={<Timer className="h-4 w-4" />}
          label="用時"
          value={elapsed >= 60 ? `${Math.floor(elapsed / 60)}:${String(elapsed % 60).padStart(2, '0')}` : `${elapsed}s`}
          tone="sky"
        />
      </div>

      <div className="space-y-2 rounded-2xl border-2 border-slate-200 p-4 text-left dark:border-slate-800">
        <div className="flex items-center justify-between text-sm font-bold text-slate-700 dark:text-slate-200">
          <span className="flex items-center gap-1.5">
            <Trophy className="h-4 w-4 text-amber-500" aria-hidden /> 今日目標
          </span>
          <span className="tabular-nums">
            {Math.min(todayAfter, dailyGoal)} / {dailyGoal} XP
          </span>
        </div>
        <div className="h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
          <div
            className="h-full rounded-full bg-amber-400 transition-[width] duration-700"
            style={{ width: `${Math.min(100, (todayAfter / dailyGoal) * 100)}%` }}
          />
        </div>
        {outcome?.goalReachedNow && <p className="text-sm font-bold text-amber-600">今日目標達成，做得好！</p>}
        {streakUp && (
          <p className="flex items-center gap-1.5 text-sm font-bold text-orange-600">
            <Flame className="h-4 w-4" aria-hidden /> 連續學習第 {outcome?.streakAfter} 天
          </p>
        )}
        {finish.result.maxCombo >= 3 && (
          <p className="text-sm text-slate-600 dark:text-slate-300">最高連擊：{finish.result.maxCombo} 題</p>
        )}
        {finish.wrongIds.length > 0 && mode !== 'review' && (
          <p className="text-sm text-slate-600 dark:text-slate-300">
            {finish.wrongIds.length} 題已收進錯題本，之後可在「錯題複習」再練。
          </p>
        )}
      </div>
    </div>
  );
}

function StatTile({
  icon,
  label,
  value,
  tone,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  tone: 'amber' | 'emerald' | 'sky';
}) {
  const t = {
    amber: 'border-amber-300 text-amber-600 dark:border-amber-700 dark:text-amber-300',
    emerald: 'border-emerald-300 text-emerald-600 dark:border-emerald-700 dark:text-emerald-300',
    sky: 'border-sky-300 text-sky-600 dark:border-sky-700 dark:text-sky-300',
  }[tone];
  return (
    <div className={clsx('rounded-2xl border-2 p-3', t)}>
      <p className="flex items-center justify-center gap-1 text-[11px] font-black">
        {icon}
        {label}
      </p>
      <p className="mt-1 text-2xl font-black tabular-nums">{value}</p>
    </div>
  );
}
