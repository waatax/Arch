'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  Check,
  ChevronLeft,
  Crown,
  Dumbbell,
  ExternalLink,
  Gift,
  GraduationCap,
  Lock,
  Star,
  Trophy,
  X,
} from 'lucide-react';
import { clsx } from 'clsx';
import MathText from '@/components/MathText';
import type { Exercise, LearnCourse, LearnUnit, PathNode } from '@/data/learnPath/types';
import {
  JUMP_PASS_RATIO,
  buildCoursePath,
  frontierIndex,
  jumpTestItems,
  localDateKey,
  shuffle,
} from '@/lib/learn/engine';
import { todayStats, useLearnHydration, useLearnStore } from '@/lib/store/learnStore';
import { sfx } from '@/lib/learn/sfx';
import { triggerHaptic } from '@/lib/haptics';
import LessonPlayer, { type PlayerFinish, type PlayerMode } from './LessonPlayer';
import StatsBar from './StatsBar';
import Portal from './Portal';
import { COURSE_COLORS } from './theme';

export interface SiblingCourse {
  id: string;
  href: string;
  title: string;
  emoji: string;
}

interface Session {
  mode: PlayerMode;
  title: string;
  items: Exercise[];
  node?: PathNode;
  jumpUnit?: number;
  intro?: { title: string; points: string[] };
  key: number;
  /** 開局時的今日 XP（結算畫面用；store 更新後不能再讀） */
  xpBefore: number;
}

/** Duolingo 式蜿蜒路徑的水平位移（px） */
const ZIGZAG = [0, 44, 72, 44, 0, -44, -72, -44];

export default function CoursePath({
  course,
  semesterLabel,
  siblings,
}: {
  course: LearnCourse;
  semesterLabel: string;
  siblings: SiblingCourse[];
}) {
  const hydrated = useLearnHydration();
  const completed = useLearnStore((s) => s.completed);
  const dailyGoal = useLearnStore((s) => s.dailyGoal);
  const completeLesson = useLearnStore((s) => s.completeLesson);
  const completeSession = useLearnStore((s) => s.completeSession);
  const skipNodes = useLearnStore((s) => s.skipNodes);
  const openChest = useLearnStore((s) => s.openChest);
  const markCourseComplete = useLearnStore((s) => s.markCourseComplete);

  const tokens = COURSE_COLORS[course.color];
  const nodes = useMemo(() => buildCoursePath(course), [course]);
  const itemMap = useMemo(() => {
    const m = new Map<string, { item: Exercise; unit: LearnUnit }>();
    for (const u of course.units) for (const it of u.items) m.set(it.id, { item: it, unit: u });
    return m;
  }, [course]);

  const done = hydrated ? completed : {};
  const frontier = frontierIndex(nodes, done);
  const doneCount = nodes.filter((n) => done[n.id]).length;
  const [openNode, setOpenNode] = useState<string | null>(null);
  const [guideUnit, setGuideUnit] = useState<LearnUnit | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [chestToast, setChestToast] = useState<string | null>(null);
  // 每次開新關卡遞增，作為播放器 key 與隨機練習的洗牌種子
  const runs = useRef(0);

  // 讀到進度後，把畫面捲到目前關卡（只在第一次載入時捲動）
  const scrolled = useRef(false);
  const frontierNodeId = frontier === -1 ? null : nodes[frontier]?.id;
  useEffect(() => {
    if (!hydrated || scrolled.current || !frontierNodeId || frontier <= 0) return;
    scrolled.current = true;
    document.getElementById(`node-${frontierNodeId}`)?.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }, [hydrated, frontierNodeId, frontier]);

  const meta = (items: Exercise[]) =>
    items.map((it) => ({ item: it, unitTitle: itemMap.get(it.id)?.unit.title ?? '', courseTitle: course.title }));

  const start = (s: Omit<Session, 'key' | 'xpBefore'>) => {
    setOpenNode(null);
    runs.current += 1;
    const st = useLearnStore.getState();
    setSession({ ...s, key: runs.current, xpBefore: todayStats(st.day, localDateKey()).xp });
  };

  const startNode = (node: PathNode) => {
    const unit = course.units[node.unitIndex];
    const items = node.itemIds.map((id) => itemMap.get(id)?.item).filter(Boolean) as Exercise[];
    start({
      mode: node.kind === 'challenge' ? 'challenge' : 'lesson',
      title: `${course.title}・${unit.title}`,
      items,
      node,
      intro: node.kind === 'lesson' ? { title: unit.title, points: unit.guide } : undefined,
    });
  };

  const startPractice = () => {
    const learnedUnits = course.units.filter((u) => nodes.some((n) => n.unitIndex === u.index && done[n.id]));
    const pool = (learnedUnits.length ? learnedUnits : course.units.slice(0, 1)).flatMap((u) => u.items);
    start({
      mode: 'practice',
      title: `${course.title}・隨機練習`,
      items: shuffle(pool, `${course.id}-practice-${runs.current}-${pool.length}`).slice(0, 10),
    });
  };

  const startJump = (unitIndex: number) => {
    start({
      mode: 'jump',
      title: `${course.title}・跳級測驗`,
      items: jumpTestItems(course, unitIndex - 1),
      jumpUnit: unitIndex,
    });
  };

  const handleFinish = (s: Session, f: PlayerFinish) => {
    const wrongItems = meta(s.items.filter((it) => f.wrongIds.includes(it.id)));
    const base = { result: f.result, wrongItems, rightItemIds: f.rightIds };
    let outcome;
    if (s.mode === 'jump' && s.jumpUnit !== undefined) {
      const ids = nodes.filter((n) => n.unitIndex < (s.jumpUnit as number)).map((n) => n.id);
      outcome = f.passed
        ? skipNodes(ids, { ...base, courseId: course.id, subject: course.shortTitle })
        : completeSession({ ...base, isReview: false, courseId: course.id, subject: course.shortTitle });
    } else if (s.node) {
      outcome = completeLesson({ ...base, nodeId: s.node.id, courseId: course.id, subject: course.shortTitle });
    } else {
      outcome = completeSession({ ...base, isReview: false, courseId: course.id, subject: course.shortTitle });
    }
    const after = useLearnStore.getState().completed;
    if (nodes.every((n) => after[n.id])) markCourseComplete(course.id);
    return outcome;
  };

  const handleChest = (node: PathNode) => {
    const got = openChest(node.id);
    setOpenNode(null);
    if (got > 0) {
      sfx.chest();
      triggerHaptic('success');
      setChestToast(`打開寶箱，獲得 ${got} 塊磚！`);
      window.setTimeout(() => setChestToast(null), 2200);
      const after = useLearnStore.getState().completed;
      if (nodes.every((n) => after[n.id])) markCourseComplete(course.id);
    }
  };

  if (course.units.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center">
        <p className="text-5xl">🚧</p>
        <h1 className="mt-4 text-2xl font-black">{course.title} 題庫建置中</h1>
        <Link href="/learn" className="mt-6 inline-block font-bold text-emerald-600 hover:underline">
          回到闖關首頁
        </Link>
      </div>
    );
  }

  const pct = nodes.length ? Math.round((doneCount / nodes.length) * 100) : 0;
  const frontierUnit = frontier === -1 ? course.units.length : nodes[frontier].unitIndex;

  return (
    <div className="min-h-screen bg-[#fafaf9] pb-28 dark:bg-slate-950">
      {/* 頂部狀態列 */}
      <div className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
        <div className="mx-auto flex max-w-6xl items-center gap-2 px-3 py-2 sm:px-6">
          <Link
            href="/learn"
            className="flex items-center gap-1 rounded-xl px-2 py-1.5 text-sm font-bold text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden />
            <span className="hidden sm:inline">闖關首頁</span>
          </Link>
          <span className="truncate text-sm font-black text-slate-800 dark:text-slate-100">
            {course.emoji} {course.title}
          </span>
          <div className="ml-auto">
            <StatsBar hydrated={hydrated} compact />
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-8 px-4 pt-6 sm:px-6 lg:grid-cols-[1fr_320px]">
        {/* 路徑 */}
        <div className="min-w-0">
          {course.units.map((unit) => {
            const unitNodes = nodes.filter((n) => n.unitIndex === unit.index);
            const unitDone = unitNodes.filter((n) => done[n.id]).length;
            const canJump = hydrated && unit.index > 0 && unit.index > frontierUnit;
            return (
              <section key={unit.id} className="mb-10" aria-labelledby={`${unit.id}-title`}>
                <div className={clsx('rounded-2xl border-b-4 p-4 text-white sm:p-5', tokens.banner)}>
                  <div className="flex items-start gap-3">
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-black tracking-widest text-white/80">
                        {semesterLabel}・第 {unit.index + 1} 單元
                      </p>
                      <h2 id={`${unit.id}-title`} className="mt-0.5 text-lg font-black leading-snug sm:text-xl">
                        {unit.title}
                      </h2>
                      <p className="mt-1 text-xs leading-relaxed text-white/80">{unit.outline}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setGuideUnit(unit)}
                      className="flex shrink-0 items-center gap-1.5 rounded-xl border-2 border-white/40 px-3 py-2 text-xs font-black hover:bg-white/10"
                    >
                      <BookOpen className="h-4 w-4" aria-hidden />
                      <span className="hidden sm:inline">重點指南</span>
                    </button>
                  </div>
                  <div className="mt-3 flex flex-wrap items-center gap-2 text-xs font-bold">
                    <span className="rounded-full bg-black/15 px-2.5 py-1">
                      {unitDone}/{unitNodes.length} 關・{unit.items.length} 題
                    </span>
                    {unit.topic && (
                      <Link
                        href={`/subjects/${unit.topic.subject}/${unit.topic.topic}`}
                        className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2.5 py-1 hover:bg-white/30"
                      >
                        <GraduationCap className="h-3.5 w-3.5" aria-hidden />
                        深入教學頁
                        <ExternalLink className="h-3 w-3" aria-hidden />
                      </Link>
                    )}
                    {canJump && (
                      <button
                        type="button"
                        onClick={() => startJump(unit.index)}
                        className="inline-flex items-center gap-1 rounded-full bg-amber-300 px-2.5 py-1 text-amber-950 hover:bg-amber-200"
                      >
                        跳級到這裡？
                      </button>
                    )}
                  </div>
                </div>

                <ol className="mt-8 flex flex-col items-center gap-6">
                  {unitNodes.map((node, i) => {
                    const globalIdx = nodes.indexOf(node);
                    const state = done[node.id] ? 'done' : globalIdx === frontier ? 'active' : 'locked';
                    const shift = ZIGZAG[(unit.index * 3 + i) % ZIGZAG.length];
                    return (
                      <li
                        key={node.id}
                        id={`node-${node.id}`}
                        className={clsx('relative flex scroll-mt-24 flex-col items-center', openNode === node.id && 'z-20')}
                        style={{ transform: `translateX(${shift}px)` }}
                      >
                        <PathNodeButton
                          node={node}
                          state={hydrated ? state : 'locked'}
                          tokens={tokens}
                          accuracy={done[node.id]?.accuracy}
                          skipped={done[node.id]?.skipped}
                          onClick={() => setOpenNode(openNode === node.id ? null : node.id)}
                        />
                        {openNode === node.id && (
                          <NodePopover
                            node={node}
                            state={state}
                            unit={unit}
                            tokens={tokens}
                            onStart={() => (node.kind === 'chest' ? handleChest(node) : startNode(node))}
                            onClose={() => setOpenNode(null)}
                          />
                        )}
                      </li>
                    );
                  })}
                </ol>
              </section>
            );
          })}

          <div className="rounded-2xl border-2 border-dashed border-slate-300 p-6 text-center dark:border-slate-700">
            <p className="text-3xl">🏁</p>
            <p className="mt-2 font-black text-slate-800 dark:text-slate-100">課程終點</p>
            <p className="mt-1 text-sm text-slate-500">完成所有單元挑戰，就能拿到「{course.shortTitle}」結業章。</p>
          </div>
        </div>

        {/* 側欄 */}
        <aside className="space-y-4 lg:sticky lg:top-20 lg:self-start">
          <div className={clsx('rounded-2xl border-2 p-5', tokens.border)}>
            <div className="flex items-center gap-3">
              <span className={clsx('flex h-12 w-12 items-center justify-center rounded-2xl text-2xl', tokens.soft)}>
                {course.emoji}
              </span>
              <div>
                <p className={clsx('text-xs font-black', tokens.text)}>
                  {semesterLabel}・{course.category}
                </p>
                <h1 className="text-lg font-black leading-tight text-slate-900 dark:text-white">{course.title}</h1>
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{course.blurb}</p>
            <dl className="mt-3 space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex gap-2">
                <dt className="shrink-0 font-bold">學分</dt>
                <dd>{course.credits}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="shrink-0 font-bold">排課</dt>
                <dd>
                  {course.officialPlacement && (
                    <span className="mr-1 rounded bg-emerald-100 px-1.5 py-0.5 font-bold text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200">
                      官方建議學期
                    </span>
                  )}
                  {course.placement}
                </dd>
              </div>
              {course.exam && (
                <div className="flex gap-2">
                  <dt className="shrink-0 font-bold">統測</dt>
                  <dd>{course.exam}</dd>
                </div>
              )}
            </dl>
            <div className="mt-4">
              <div className="mb-1 flex justify-between text-xs font-bold text-slate-500">
                <span>課程進度</span>
                <span className="tabular-nums">{hydrated ? pct : 0}%</span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                <div className={clsx('h-full rounded-full', tokens.bar)} style={{ width: `${hydrated ? pct : 0}%` }} />
              </div>
            </div>
            <button
              type="button"
              onClick={startPractice}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-b-4 border-slate-200 bg-white py-3 text-sm font-black text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            >
              <Dumbbell className="h-4 w-4" aria-hidden /> 隨機練習 10 題
            </button>
          </div>

          <div className="rounded-2xl border-2 border-slate-200 p-4 dark:border-slate-800">
            <p className="mb-2 text-xs font-black tracking-widest text-slate-400">本學期其他科目</p>
            <ul className="space-y-1">
              {siblings.map((s) => (
                <li key={s.id}>
                  <Link
                    href={s.href}
                    className={clsx(
                      'flex items-center gap-2 rounded-xl px-2 py-1.5 text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-800',
                      s.id === course.id ? 'bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-white' : 'text-slate-600 dark:text-slate-300',
                    )}
                    aria-current={s.id === course.id ? 'page' : undefined}
                  >
                    <span aria-hidden>{s.emoji}</span>
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      {chestToast && (
        <Portal>
        <div
          className="fixed bottom-24 left-1/2 z-[80] -translate-x-1/2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-black text-white shadow-xl dark:bg-white dark:text-slate-900"
          role="status"
        >
          🎁 {chestToast}
        </div>
        </Portal>
      )}

      {guideUnit && <GuideModal unit={guideUnit} tokens={tokens} onClose={() => setGuideUnit(null)} />}

      {session && (
        <LessonPlayer
          key={session.key}
          title={session.title}
          items={session.items}
          color={course.color}
          mode={session.mode}
          intro={session.intro}
          passRatio={JUMP_PASS_RATIO}
          dailyGoal={dailyGoal}
          todayXpBefore={session.xpBefore}
          onFinish={(f) => handleFinish(session, f)}
          onClose={() => setSession(null)}
          onRetry={
            session.mode === 'jump'
              ? undefined
              : () => {
                  runs.current += 1;
                  const st = useLearnStore.getState();
                  setSession({ ...session, intro: undefined, key: runs.current, xpBefore: todayStats(st.day, localDateKey()).xp });
                }
          }
        />
      )}
    </div>
  );
}

type Tokens = (typeof COURSE_COLORS)[keyof typeof COURSE_COLORS];

function PathNodeButton({
  node,
  state,
  tokens,
  accuracy,
  skipped,
  onClick,
}: {
  node: PathNode;
  state: 'done' | 'active' | 'locked';
  tokens: Tokens;
  accuracy?: number;
  skipped?: boolean;
  onClick: () => void;
}) {
  const Icon =
    state === 'locked'
      ? node.kind === 'chest'
        ? Gift
        : Lock
      : node.kind === 'chest'
        ? Gift
        : node.kind === 'challenge'
          ? state === 'done'
            ? Crown
            : Trophy
          : state === 'done'
            ? Check
            : node.kind === 'practice'
              ? Dumbbell
              : Star;
  const label = `${node.title}${state === 'done' ? '（已完成）' : state === 'active' ? '（目前關卡）' : '（未解鎖）'}`;
  return (
    <div className="relative">
      {state === 'active' && (
        <span className="absolute -top-9 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-xl border-2 border-slate-200 bg-white px-3 py-1 text-xs font-black text-slate-700 shadow-sm animate-bounce dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
          {node.kind === 'chest' ? '開寶箱' : '開始'}
        </span>
      )}
      <button
        type="button"
        onClick={onClick}
        aria-label={label}
        className={clsx(
          'relative flex items-center justify-center rounded-full border-b-[6px] transition active:translate-y-[3px] active:border-b-[3px]',
          node.kind === 'challenge' ? 'h-20 w-20' : 'h-[4.5rem] w-[4.5rem]',
          state === 'locked'
            ? 'border-slate-300 bg-slate-200 text-slate-400 dark:border-slate-800 dark:bg-slate-700 dark:text-slate-500'
            : node.kind === 'chest' && state === 'done'
              ? 'border-amber-600 bg-amber-300 text-amber-800'
              : tokens.node,
          state === 'active' && clsx('ring-8 ring-offset-0', tokens.ring),
        )}
      >
        <Icon className={clsx(node.kind === 'challenge' ? 'h-9 w-9' : 'h-8 w-8', state !== 'locked' && 'drop-shadow')} aria-hidden />
        {state === 'done' && node.kind !== 'chest' && !skipped && accuracy !== undefined && accuracy >= 0.999 && (
          <span className="absolute -right-1 -top-1 rounded-full bg-amber-400 px-1.5 text-[10px] font-black text-amber-950">
            滿分
          </span>
        )}
      </button>
    </div>
  );
}

function NodePopover({
  node,
  state,
  unit,
  tokens,
  onStart,
  onClose,
}: {
  node: PathNode;
  state: 'done' | 'active' | 'locked';
  unit: LearnUnit;
  tokens: Tokens;
  onStart: () => void;
  onClose: () => void;
}) {
  const kindText = {
    lesson: '新觀念：先看重點，再作答',
    practice: '練習：混入前一關的題目做間隔複習',
    chest: '寶箱：打開獲得磚塊，可兌換休息日卡',
    challenge: '單元挑戰：整個單元混合出題，XP ×1.5',
  }[node.kind];
  return (
    <div
      className={clsx(
        'absolute top-full z-20 mt-3 w-72 rounded-2xl border-2 bg-white p-4 shadow-xl dark:bg-slate-900',
        state === 'locked' ? 'border-slate-200 dark:border-slate-700' : tokens.border,
      )}
      role="dialog"
      aria-label={node.title}
    >
      <div className="flex items-start gap-2">
        <div className="min-w-0 flex-1">
          <p className={clsx('text-xs font-black', state === 'locked' ? 'text-slate-400' : tokens.text)}>
            第 {unit.index + 1} 單元・{node.title}
          </p>
          <p className="mt-1 text-sm font-bold leading-snug text-slate-800 dark:text-slate-100">{unit.title}</p>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{kindText}</p>
        </div>
        <button type="button" onClick={onClose} className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="關閉">
          <X className="h-4 w-4" />
        </button>
      </div>
      {state === 'locked' ? (
        <p className="mt-3 rounded-xl bg-slate-100 p-3 text-xs leading-relaxed text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          先完成前面的關卡就會解鎖。已經學過？可在單元標題按「跳級到這裡？」直接挑戰。
        </p>
      ) : node.kind === 'chest' && state === 'done' ? (
        <p className="mt-3 text-sm font-bold text-amber-600">寶箱已打開 🎉</p>
      ) : (
        <button
          type="button"
          onClick={onStart}
          className={clsx(
            'mt-3 w-full rounded-2xl border-b-4 py-3 text-sm font-black text-white transition active:translate-y-[2px] active:border-b-2',
            tokens.node,
          )}
        >
          {node.kind === 'chest' ? '打開寶箱' : state === 'done' ? `再練一次（${node.itemIds.length} 題）` : `開始（${node.itemIds.length} 題）`}
        </button>
      )}
    </div>
  );
}

function GuideModal({ unit, tokens, onClose }: { unit: LearnUnit; tokens: Tokens; onClose: () => void }) {
  return (
    <Portal>
    <div className="fixed inset-0 z-[80] flex items-end justify-center bg-black/40 p-0 sm:items-center sm:p-6" role="dialog" aria-modal="true" aria-label={`${unit.title} 重點指南`} onClick={onClose}>
      <div
        className="max-h-[85vh] w-full max-w-xl overflow-y-auto rounded-t-3xl bg-white p-6 dark:bg-slate-900 sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start gap-3">
          <BookOpen className={clsx('mt-1 h-6 w-6 shrink-0', tokens.text)} aria-hidden />
          <div className="flex-1">
            <p className={clsx('text-xs font-black tracking-widest', tokens.text)}>第 {unit.index + 1} 單元重點指南</p>
            <h3 className="text-xl font-black text-slate-900 dark:text-white">{unit.title}</h3>
            <p className="mt-1 text-xs text-slate-500">課綱對應：{unit.outline}</p>
          </div>
          <button type="button" onClick={onClose} className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="關閉">
            <X className="h-5 w-5" />
          </button>
        </div>
        <ul className="mt-5 space-y-3">
          {unit.guide.map((g) => (
            <li key={g} className={clsx('rounded-2xl p-4 text-[15px] leading-relaxed text-slate-700 dark:text-slate-200', tokens.soft)}>
              <MathText content={g} />
            </li>
          ))}
        </ul>
        {unit.topic && (
          <Link
            href={`/subjects/${unit.topic.subject}/${unit.topic.topic}`}
            className={clsx('mt-5 inline-flex items-center gap-1.5 text-sm font-black hover:underline', tokens.text)}
          >
            <GraduationCap className="h-4 w-4" aria-hidden /> 到深入教學頁看完整講解
          </Link>
        )}
      </div>
    </div>
    </Portal>
  );
}
