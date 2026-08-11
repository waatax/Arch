'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, RotateCcw, Coffee, Brain } from 'lucide-react';
import { usePomodoroStore } from '../../lib/store/pomodoroStore';
import { GlassCard } from '../ui/GlassCard';

export function PomodoroTimer() {
  const { isActive, timeLeft, mode, start, pause, reset, tick, setMode } = usePomodoroStore();

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        tick();
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft, tick]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const totalTime = mode === 'focus' ? 25 * 60 : 5 * 60;
  const progress = ((totalTime - timeLeft) / totalTime) * 100;

  return (
    <motion.div 
      drag 
      dragConstraints={{ left: -500, right: 500, top: -500, bottom: 500 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-20 right-3 z-50 sm:bottom-6 sm:right-6 sm:cursor-move"
    >
      <GlassCard className="hidden p-4 sm:flex items-center gap-4 border-emerald-500/30">
        <div className="relative w-16 h-16 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              className="text-slate-200 dark:text-slate-700"
            />
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              strokeDasharray={`${2 * Math.PI * 28}`}
              strokeDashoffset={`${2 * Math.PI * 28 * (1 - progress / 100)}`}
              className={mode === 'focus' ? "text-emerald-500 transition-all duration-1000" : "text-blue-500 transition-all duration-1000"}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            {mode === 'focus' ? <Brain size={16} className="text-emerald-600" /> : <Coffee size={16} className="text-blue-600" />}
          </div>
        </div>

        <div className="flex flex-col">
          <span className="text-2xl font-bold font-mono tracking-wider text-slate-800 dark:text-slate-100">
            {formatTime(timeLeft)}
          </span>
          <div className="flex gap-2 mt-1">
            <button 
              onClick={isActive ? pause : start}
              className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors text-slate-600 dark:text-slate-300"
              aria-label={isActive ? '暫停番茄鐘' : '開始番茄鐘'}
            >
              {isActive ? <Pause size={14} /> : <Play size={14} />}
            </button>
            <button 
              onClick={reset}
              className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors text-slate-600 dark:text-slate-300"
              aria-label="重設番茄鐘"
            >
              <RotateCcw size={14} />
            </button>
            <button 
              onClick={() => setMode(mode === 'focus' ? 'break' : 'focus')}
              className="text-xs font-medium px-2 py-1 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors text-slate-600 dark:text-slate-300 ml-2"
              aria-label={mode === 'focus' ? '切換到休息模式' : '切換到專注模式'}
            >
              {mode === 'focus' ? 'Break' : 'Focus'}
            </button>
          </div>
        </div>
      </GlassCard>
      <GlassCard className="flex items-center gap-2 border-emerald-500/40 px-2.5 py-2 shadow-lg sm:hidden">
        <button onClick={isActive ? pause : start} className="flex size-9 items-center justify-center rounded-full bg-emerald-600 text-white" aria-label={isActive ? '暫停番茄鐘' : '開始番茄鐘'}>
          {isActive ? <Pause size={15} /> : <Play size={15} />}
        </button>
        <span className="font-mono text-sm font-bold tabular-nums text-slate-800 dark:text-slate-100">{formatTime(timeLeft)}</span>
        <button onClick={reset} className="flex size-8 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="重設番茄鐘"><RotateCcw size={14} /></button>
      </GlassCard>
    </motion.div>
  );
}
