'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { BookOpen, CheckCircle2, Clock3, Download, RefreshCcw } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';
import { useStudentStore } from '@/lib/store/studentStore';

const cycle = [
  ['暖身回收', '3 分鐘', '先回想 2 張到期錯題卡'],
  ['觀念建模', '8 分鐘', '看圖、找變因、說出核心規則'],
  ['主動練習', '6 分鐘', '不看解答完成 3 題'],
  ['錯題轉化', '5 分鐘', '只把真正卡住的地方做成錯題卡'],
  ['離開檢核', '3 分鐘', '用自己的話說明並驗證答案'],
];

export default function StudentDashboard() {
  const { questionsCompleted, dailyGoal, completedCycles, mistakeCards, resetDailyIfNewDay, completeCycle } = useStudentStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    resetDailyIfNewDay();
    const timer = window.setTimeout(() => setMounted(true), 0);
    return () => window.clearTimeout(timer);
  }, [resetDailyIfNewDay]);

  const dueCards = useMemo(
    () => mistakeCards.filter((card) => new Date(card.nextReviewAt) <= new Date()).length,
    [mistakeCards],
  );
  if (!mounted) return null;

  const progress = Math.min(100, Math.round((questionsCompleted / dailyGoal) * 100));
  const handleExportPDF = () => window.print();

  return (
    <main className="min-h-screen bg-slate-50 p-6 dark:bg-slate-950 md:p-12">
      <div className="mx-auto max-w-6xl space-y-8">
        <header className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-blue-600">Today&apos;s learning loop</p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">今天只完成一個 25 分鐘迴圈</h1>
            <p className="mt-2 text-slate-600 dark:text-slate-400">不排名、不追連勝；把一個知識點學會、練過、訂正，就是有效進步。</p>
          </div>
          <button onClick={handleExportPDF} className="flex items-center gap-2 self-start rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-500">
            <Download size={18} />列印／匯出學習歷程
          </button>
        </header>

        <section className="grid gap-4 md:grid-cols-5" aria-label="25 分鐘微迴圈">
          {cycle.map(([title, time, detail], index) => (
            <GlassCard key={title} className="p-5">
              <span className="font-mono text-xs font-bold text-blue-600">{index + 1} · {time}</span>
              <h2 className="mt-2 font-bold text-slate-900 dark:text-white">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{detail}</p>
            </GlassCard>
          ))}
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          <GlassCard className="p-6 md:col-span-2">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">今日主動練習</h2>
                <p className="mt-1 text-sm text-slate-500">{questionsCompleted} / {dailyGoal} 題；正確與否都算完成學習證據。</p>
              </div>
              <Clock3 className="text-blue-500" />
            </div>
            <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800"><div className="h-full bg-blue-600" style={{ width: `${progress}%` }} /></div>
            <button onClick={completeCycle} className="mt-5 inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-bold text-white hover:bg-emerald-500">
              <CheckCircle2 size={17} />完成本次微迴圈
            </button>
          </GlassCard>

          <GlassCard className="p-6">
            <RefreshCcw className="text-amber-500" />
            <h2 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">錯題回收</h2>
            <p className="mt-2 text-3xl font-black text-slate-900 dark:text-white">{dueCards} <span className="text-base font-medium text-slate-500">張今日到期</span></p>
            <p className="mt-2 text-sm text-slate-500">依 1／7／21 天間隔回收。答錯是找到可以補的洞。</p>
          </GlassCard>
        </section>

        <GlassCard className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center">
          <div className="flex size-20 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 dark:bg-emerald-950"><BookOpen className="text-emerald-600" size={34} /></div>
          <div className="flex-1">
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">全科全備 · 自主排序</p>
            <h2 className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">從完整課程選擇今天的一章</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400">共同科目、專業科目與建築素養都保留；依目標校系與目前弱點調整順序，不替你押單一組合。</p>
          </div>
          <Link href="/curriculum" className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-bold text-slate-800 hover:bg-slate-100 dark:border-slate-700 dark:text-white dark:hover:bg-slate-800">選擇課程 →</Link>
        </GlassCard>

        <p className="text-center text-xs text-slate-500">累計完成 {completedCycles} 個 25 分鐘迴圈</p>
      </div>
    </main>
  );
}
