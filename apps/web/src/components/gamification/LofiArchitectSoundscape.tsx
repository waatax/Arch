'use client';

import React, { useState, useEffect } from 'react';
import { CloudRain, Wind, Coffee, Play, Pause, RotateCcw, Sparkles, Clock } from 'lucide-react';
import { soundEngine } from '@/lib/audio/soundEffects';
import { useGamificationStore } from '@/lib/store/gamificationStore';

export default function LofiArchitectSoundscape() {
  const { lofiAmbient, lofiVolume, setLofiAmbient, addExp, soundEnabled } = useGamificationStore();
  const [timerSeconds, setTimerSeconds] = useState<number>(25 * 60); // 25 min
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [completedSessions, setCompletedSessions] = useState<number>(0);

  // 25-minute Pomodoro countdown timer
  useEffect(() => {
    if (!isTimerRunning) return;
    const timer = setInterval(() => {
      setTimerSeconds((prev) => {
        if (prev <= 1) {
          setIsTimerRunning(false);
          setCompletedSessions((c) => c + 1);
          if (soundEnabled) soundEngine.playCorrectChime();
          addExp(100);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isTimerRunning, soundEnabled, addExp]);

  const handleToggleTimer = () => {
    if (soundEnabled) soundEngine.playClickBeep();
    setIsTimerRunning(!isTimerRunning);
  };

  const handleResetTimer = () => {
    setIsTimerRunning(false);
    setTimerSeconds(25 * 60);
  };

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-indigo-100 dark:bg-indigo-900/60 px-3 py-1 text-xs font-mono font-bold text-indigo-700 dark:text-indigo-300">
              ZEN FOCUS SPACE 10
            </span>
            <span className="text-xs font-bold text-slate-500">
              Web Audio 原生合成 · 建築事務所 Lofi 聲景與 25 分鐘番茄鐘
            </span>
          </div>
          <h3 className="mt-1 font-serif text-2xl font-bold text-slate-900 dark:text-white">
            建築事務所 Lofi 聲景專注空間 (Architect&apos;s Focus Soundscape)
          </h3>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs font-bold text-slate-700 dark:text-slate-300">
          <Clock className="size-4 text-indigo-600 dark:text-indigo-400" />
          <span>累計專注：{completedSessions} 輪 (25 min/輪)</span>
        </div>
      </div>

      {/* Grid Layout: Soundscape Presets & 25-min Pomodoro Timer */}
      <div className="grid gap-6 lg:grid-cols-12 items-center">
        {/* Soundscape Presets */}
        <div className="lg:col-span-7 space-y-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 p-5 border border-slate-200/80 dark:border-slate-800 font-mono text-xs">
          <span className="font-bold text-slate-700 dark:text-slate-300 block">
            選擇沉浸專注聲景 (Procedural Lofi Ambient)
          </span>

          <div className="grid gap-2.5 sm:grid-cols-3">
            <button
              onClick={() => setLofiAmbient(lofiAmbient === 'rain' ? 'none' : 'rain')}
              className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-2 ${
                lofiAmbient === 'rain'
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/60 text-blue-900 dark:text-blue-100 shadow-sm'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <CloudRain className={`size-5 ${lofiAmbient === 'rain' ? 'text-blue-600' : 'text-slate-400'}`} />
                {lofiAmbient === 'rain' && <span className="size-2 rounded-full bg-blue-500 animate-ping" />}
              </div>
              <div>
                <span className="font-bold block">天窗細雨</span>
                <span className="text-[10px] text-slate-500 block">柔和白噪音濾波</span>
              </div>
            </button>

            <button
              onClick={() => setLofiAmbient(lofiAmbient === 'breeze' ? 'none' : 'breeze')}
              className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-2 ${
                lofiAmbient === 'breeze'
                  ? 'border-teal-500 bg-teal-50 dark:bg-teal-950/60 text-teal-900 dark:text-teal-100 shadow-sm'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <Wind className={`size-5 ${lofiAmbient === 'breeze' ? 'text-teal-600' : 'text-slate-400'}`} />
                {lofiAmbient === 'breeze' && <span className="size-2 rounded-full bg-teal-500 animate-ping" />}
              </div>
              <div>
                <span className="font-bold block">設計館微風</span>
                <span className="text-[10px] text-slate-500 block">低頻通透清涼聲</span>
              </div>
            </button>

            <button
              onClick={() => setLofiAmbient(lofiAmbient === 'office' ? 'none' : 'office')}
              className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-2 ${
                lofiAmbient === 'office'
                  ? 'border-amber-500 bg-amber-50 dark:bg-amber-950/60 text-amber-900 dark:text-amber-100 shadow-sm'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <Coffee className={`size-5 ${lofiAmbient === 'office' ? 'text-amber-600' : 'text-slate-400'}`} />
                {lofiAmbient === 'office' && <span className="size-2 rounded-full bg-amber-500 animate-ping" />}
              </div>
              <div>
                <span className="font-bold block">事務所專注混音</span>
                <span className="text-[10px] text-slate-500 block">雨聲＋微風雙軌混音</span>
              </div>
            </button>
          </div>

          <div className="flex items-center justify-between text-slate-500 pt-1">
            <span>聲景音量：{Math.round(lofiVolume * 100)}%</span>
            <button
              onClick={() => setLofiAmbient('none')}
              className="text-[11px] text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
            >
              一鍵靜音聲景
            </button>
          </div>
        </div>

        {/* 25-minute Pomodoro Focus Timer */}
        <div className="lg:col-span-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-950 p-6 flex flex-col items-center justify-center space-y-4 text-white">
          <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
            <Sparkles className="size-3.5 text-indigo-400" /> 25 分鐘專注微迴圈計時
          </span>

          <div className="font-mono text-5xl font-black tracking-widest text-indigo-300">
            {formatTime(timerSeconds)}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleToggleTimer}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs transition cursor-pointer ${
                isTimerRunning ? 'bg-amber-600 hover:bg-amber-500 text-white' : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30'
              }`}
            >
              {isTimerRunning ? <Pause className="size-4" /> : <Play className="size-4 fill-current" />}
              <span>{isTimerRunning ? '暫停計時' : '啟動專注'}</span>
            </button>
            <button
              onClick={handleResetTimer}
              className="p-2.5 rounded-xl border border-slate-700 hover:bg-slate-800 text-slate-400 hover:text-white transition cursor-pointer"
              title="重設 25 分鐘"
            >
              <RotateCcw className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
