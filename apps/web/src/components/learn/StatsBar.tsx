'use client';

import { Flame, Snowflake, Volume2, VolumeX, Zap } from 'lucide-react';
import { clsx } from 'clsx';
import { displayStreak, localDateKey } from '@/lib/learn/engine';
import { todayStats, useLearnStore } from '@/lib/store/learnStore';

/** 連續天數、今日 XP、磚塊；hydrated 前顯示佔位，避免伺服器與瀏覽器不一致 */
export default function StatsBar({ hydrated, compact = false }: { hydrated: boolean; compact?: boolean }) {
  const streak = useLearnStore((s) => s.streak);
  const day = useLearnStore((s) => s.day);
  const bricks = useLearnStore((s) => s.bricks);
  const dailyGoal = useLearnStore((s) => s.dailyGoal);
  const soundOn = useLearnStore((s) => s.soundOn);
  const toggleSound = useLearnStore((s) => s.toggleSound);
  const restDays = useLearnStore((s) => s.restDays);

  const today = localDateKey();
  const days = hydrated ? displayStreak(streak, today, restDays) : 0;
  const learnedToday = hydrated && streak.lastDay === today;
  const xp = hydrated ? todayStats(day, today).xp : 0;

  const chip = 'flex items-center gap-1.5 rounded-xl px-2.5 py-1.5 text-sm font-black tabular-nums';
  return (
    <div className={clsx('flex flex-wrap items-center', compact ? 'gap-1' : 'gap-2')} aria-label="學習狀態">
      <span
        className={clsx(chip, learnedToday ? 'text-orange-500' : 'text-slate-400 dark:text-slate-500')}
        title={learnedToday ? '今天已學習' : '今天完成一關就能延續連續天數'}
      >
        <Flame className={clsx('h-5 w-5', learnedToday && 'fill-orange-400')} aria-hidden />
        {days}
        <span className="sr-only">天連續學習</span>
      </span>
      <span className={clsx(chip, 'text-amber-500')} title="今日 XP / 每日目標">
        <Zap className="h-5 w-5 fill-amber-300" aria-hidden />
        {xp}
        {!compact && <span className="text-xs font-bold text-slate-400">/ {dailyGoal}</span>}
      </span>
      <span className={clsx(chip, 'text-rose-600 dark:text-rose-400')} title="磚塊：可兌換休息日卡">
        <span aria-hidden>🧱</span>
        {hydrated ? bricks : 0}
      </span>
      {!compact && hydrated && streak.freezes > 0 && (
        <span className={clsx(chip, 'text-sky-500')} title="休息日卡：漏學一天時自動保住連續天數">
          <Snowflake className="h-4 w-4" aria-hidden />
          {streak.freezes}
        </span>
      )}
      <button
        type="button"
        onClick={() => {
          toggleSound();
        }}
        className="rounded-xl p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800"
        aria-label={soundOn ? '關閉音效' : '開啟音效'}
        aria-pressed={soundOn}
      >
        {soundOn ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
      </button>
    </div>
  );
}
