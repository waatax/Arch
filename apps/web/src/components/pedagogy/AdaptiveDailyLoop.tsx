'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { PlayCircle, Flame, CheckCircle2, RotateCcw } from 'lucide-react';
import { useStudentStore } from '@/lib/store/studentStore';

import MistakeNotebookModal from './MistakeNotebookModal';

export default function AdaptiveDailyLoop() {
  const { questionsCompleted, dailyGoal, mistakeCards, resetDailyIfNewDay } = useStudentStore();
  const [mounted, setMounted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    resetDailyIfNewDay();
  }, [resetDailyIfNewDay]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const progress = Math.min((questionsCompleted / dailyGoal) * 100, 100);
  const isCompleted = questionsCompleted >= dailyGoal;
  
  // Find cards due today
  const today = new Date().toISOString();
  const dueCards = mistakeCards.filter(card => card.nextReviewAt <= today);

  return (
    <>
      <section className="mb-10 rounded-[2rem] border border-blue-200 bg-white p-6 shadow-xl shadow-blue-900/5 dark:border-blue-900/40 dark:bg-slate-900 dark:shadow-blue-900/20 sm:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-mono font-bold text-blue-700 dark:bg-blue-900/60 dark:text-blue-300">
                TODAY&apos;S LOOP
              </span>
              {isCompleted && (
                <span className="flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300">
                  <CheckCircle2 className="size-3" /> 達標
                </span>
              )}
            </div>
            <h2 className="mt-2 font-serif text-2xl font-bold text-slate-900 dark:text-white">
              今日 25 分鐘微迴圈
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              依照 1/7/21 間隔遺忘曲線，每天只需完成一小步。系統會自動調配暖身錯題與新觀念。
            </p>
            
            <div className="mt-5 max-w-sm space-y-2">
              <div className="flex justify-between text-xs font-bold font-mono">
                <span className="text-blue-700 dark:text-blue-400">進度 {questionsCompleted}/{dailyGoal} 題</span>
                <span className="text-slate-500">{progress.toFixed(0)}%</span>
              </div>
              <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                <div 
                  className={`h-full transition-all duration-1000 ${isCompleted ? 'bg-emerald-500' : 'bg-blue-600'}`}
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

          <div className="flex shrink-0 flex-col gap-3">
            {dueCards.length > 0 ? (
              <Link 
                href="/practice" 
                className="group flex min-h-14 items-center justify-center gap-2 rounded-full bg-rose-600 px-8 font-bold text-white shadow-lg shadow-rose-900/20 transition hover:bg-rose-700 hover:scale-[1.02]"
              >
                <RotateCcw className="size-5 transition-transform group-hover:-rotate-45" />
                <span>搶救 {dueCards.length} 題錯題 (暖身)</span>
              </Link>
            ) : (
              <Link 
                href="/curriculum" 
                className="group flex min-h-14 items-center justify-center gap-2 rounded-full bg-blue-700 px-8 font-bold text-white shadow-lg shadow-blue-900/20 transition hover:bg-blue-800 hover:scale-[1.02]"
              >
                <PlayCircle className="size-5 transition-transform group-hover:scale-110" />
                <span>{isCompleted ? '繼續學習新章節' : '開始今日新學習'}</span>
              </Link>
            )}
            
            <button 
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
            >
              <Flame className="size-4 text-amber-500" />
              打開錯題本分析
            </button>
          </div>
        </div>
      </section>
      
      <MistakeNotebookModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
