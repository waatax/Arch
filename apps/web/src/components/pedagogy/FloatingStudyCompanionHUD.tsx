'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  List,
  Headphones,
  Timer,
  ChevronUp,
  X,
  Play,
  Pause,
  RotateCcw,
  BookOpen,
  Volume2,
  VolumeX,
  CloudRain,
  Wind,
} from 'lucide-react';
import { soundEngine } from '@/lib/audio/soundEffects';

interface FloatingStudyCompanionHUDProps {
  topicTitle: string;
  onOpenFormulaDrawer?: () => void;
  activeStage?: string;
  totalConcepts?: number;
  completedConceptsCount?: number;
}

export default function FloatingStudyCompanionHUD({
  topicTitle,
  onOpenFormulaDrawer,
  activeStage,
  totalConcepts = 3,
  completedConceptsCount = 0,
}: FloatingStudyCompanionHUDProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'toc' | 'ambient' | 'pomodoro'>('toc');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Ambient sound state
  const [ambientSound, setAmbientSound] = useState<'none' | 'rain' | 'breeze'>('none');
  const ambientVolume = 0.12;

  // Pomodoro timer state
  const [pomodoroSeconds, setPomodoroSeconds] = useState(25 * 60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Track scroll progress & back-to-top visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) {
        setScrollProgress(Math.min(100, Math.max(0, Math.round((scrollY / total) * 100))));
      }
      setShowBackToTop(scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Pomodoro Interval effect
  useEffect(() => {
    if (isTimerRunning) {
      timerIntervalRef.current = setInterval(() => {
        setPomodoroSeconds((prev) => {
          if (prev <= 1) {
            setIsTimerRunning(false);
            soundEngine.playCorrectChime();
            return 25 * 60;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }
    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, [isTimerRunning]);

  // Handle ambient sound change
  const handleToggleAmbient = (type: 'none' | 'rain' | 'breeze') => {
    soundEngine.stopAllAmbient();
    if (ambientSound === type || type === 'none') {
      setAmbientSound('none');
    } else {
      setAmbientSound(type);
      if (type === 'rain') {
        soundEngine.startRainAmbient(ambientVolume);
      } else if (type === 'breeze') {
        soundEngine.startBreezeAmbient(ambientVolume);
      }
    }
  };

  const scrollToAnchor = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      soundEngine.playClickBeep();
      setIsOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    soundEngine.playClickBeep();
  };

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const sections = [
    { id: 'stage-intuition', label: '生活直覺', desc: '生活情境啟發與觀察' },
    { id: 'visual-learning-title', label: '專屬圖解', desc: 'CNS 建築視覺資訊圖' },
    { id: 'stage-concepts', label: '核心觀念', desc: '課綱觀念與公式定理' },
    { id: 'stage-worked-traps', label: '示範解題', desc: '名師 SOP 與防禦心智' },
    { id: 'scratchpad-notes', label: '隨堂便籤', desc: '私房筆記與公式速寫' },
    { id: 'stage-exam-practice', label: '實戰驗證', desc: '自主練習與歷屆大考題' },
    { id: 'seven-iterations', label: '七輪深化', desc: '由淺入深認知躍遷' },
    { id: 'sources', label: '研究來源', desc: '官方題本與規範標準' },
  ];

  return (
    <aside
      aria-label="學習專注工具箱與導覽"
      className="fixed bottom-16 right-4 z-40 flex flex-col items-end gap-2.5 sm:bottom-20 sm:right-6"
    >
      {/* ── 展開後的功能主面板 ── */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="hud-panel-title"
          className="w-80 max-w-[calc(100vw-2rem)] rounded-3xl border border-slate-200/90 bg-white/95 p-5 shadow-2xl backdrop-blur-md dark:border-slate-800/90 dark:bg-slate-900/95 animate-in fade-in zoom-in-95 duration-200"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 dark:border-slate-800">
            <div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Focus Study HUD · 學習伴讀
              </span>
              <h2 id="hud-panel-title" className="font-serif text-sm font-bold text-slate-900 dark:text-white truncate max-w-[14rem]">
                {topicTitle}
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200 cursor-pointer transition-colors"
              aria-label="關閉工具箱"
            >
              <X className="size-4" />
            </button>
          </div>

          {/* Tab Selector */}
          <div className="mt-3 grid grid-cols-3 gap-1 rounded-xl bg-slate-100 p-1 dark:bg-slate-800 text-xs font-bold">
            <button
              type="button"
              onClick={() => setActiveTab('toc')}
              className={`flex items-center justify-center gap-1.5 rounded-lg py-1.5 transition-all cursor-pointer ${
                activeTab === 'toc'
                  ? 'bg-white text-blue-600 shadow-2xs dark:bg-slate-900 dark:text-blue-400'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              <List className="size-3.5" /> 目錄
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('ambient')}
              className={`flex items-center justify-center gap-1.5 rounded-lg py-1.5 transition-all cursor-pointer ${
                activeTab === 'ambient'
                  ? 'bg-white text-blue-600 shadow-2xs dark:bg-slate-900 dark:text-blue-400'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              <Headphones className="size-3.5" /> 聲景
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('pomodoro')}
              className={`flex items-center justify-center gap-1.5 rounded-lg py-1.5 transition-all cursor-pointer ${
                activeTab === 'pomodoro'
                  ? 'bg-white text-blue-600 shadow-2xs dark:bg-slate-900 dark:text-blue-400'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              <Timer className="size-3.5" /> 番茄鐘
            </button>
          </div>

          {/* ── Tab 1: Table of Contents TOC ── */}
          {activeTab === 'toc' && (
            <div className="mt-4 space-y-1.5 max-h-60 overflow-y-auto pr-1">
              <div className="flex items-center justify-between text-[11px] text-slate-500 pb-1">
                <span>章節大綱跳轉</span>
                <span>
                  進度：{completedConceptsCount}/{totalConcepts} 觀念
                </span>
              </div>
              {sections.map((sec, idx) => {
                const isActive = activeStage === sec.id;
                return (
                  <button
                    key={sec.id}
                    type="button"
                    onClick={() => scrollToAnchor(sec.id)}
                    className={`w-full flex items-center justify-between rounded-xl px-3 py-2 text-left text-xs transition-all cursor-pointer ${
                      isActive
                        ? 'bg-blue-50 text-blue-700 font-bold dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200/60 dark:border-blue-900/40'
                        : 'text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-slate-400">{idx + 1}</span>
                      <div>
                        <p className="font-bold">{sec.label}</p>
                        <p className="text-[10px] text-slate-400 font-normal">{sec.desc}</p>
                      </div>
                    </div>
                    {isActive && <span className="size-1.5 rounded-full bg-blue-600" />}
                  </button>
                );
              })}

              {onOpenFormulaDrawer && (
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    onOpenFormulaDrawer();
                  }}
                  className="w-full mt-2 inline-flex items-center justify-center gap-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-200 py-2 text-xs font-bold hover:bg-amber-100 transition-colors cursor-pointer"
                >
                  <BookOpen className="size-3.5" />
                  展開全章核心公式卡
                </button>
              )}
            </div>
          )}

          {/* ── Tab 2: Ambient Study Soundscapes ── */}
          {activeTab === 'ambient' && (
            <div className="mt-4 space-y-3">
              <p className="text-xs text-slate-500 leading-relaxed">
                專為建築人打造的純原生 Web Audio 沉浸聲景，零下載、無干擾：
              </p>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => handleToggleAmbient('rain')}
                  className={`flex flex-col items-center gap-1.5 rounded-2xl p-3 border text-xs font-bold transition-all cursor-pointer ${
                    ambientSound === 'rain'
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 shadow-2xs'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                  }`}
                >
                  <CloudRain className="size-5 text-blue-500" />
                  <span>雨打清水模</span>
                  <span className="text-[10px] text-slate-400 font-normal">雨聲 Lofi 白噪音</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleToggleAmbient('breeze')}
                  className={`flex flex-col items-center gap-1.5 rounded-2xl p-3 border text-xs font-bold transition-all cursor-pointer ${
                    ambientSound === 'breeze'
                      ? 'border-teal-500 bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 shadow-2xs'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                  }`}
                >
                  <Wind className="size-5 text-teal-500" />
                  <span>建築工作室微風</span>
                  <span className="text-[10px] text-slate-400 font-normal">空氣自然流動感</span>
                </button>
              </div>

              {ambientSound !== 'none' && (
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-500 flex items-center gap-1">
                    <Volume2 className="size-3.5 text-blue-600" /> 播放中
                  </span>
                  <button
                    type="button"
                    onClick={() => handleToggleAmbient('none')}
                    className="text-rose-600 hover:underline cursor-pointer font-bold inline-flex items-center gap-1 text-[11px]"
                  >
                    <VolumeX className="size-3" /> 關閉聲景
                  </button>
                </div>
              )}
            </div>
          )}

          {/* ── Tab 3: Pomodoro Focus Timer ── */}
          {activeTab === 'pomodoro' && (
            <div className="mt-4 space-y-4 text-center">
              <div>
                <p className="font-mono text-3xl font-bold tracking-wider text-slate-900 dark:text-white">
                  {formatTimer(pomodoroSeconds)}
                </p>
                <p className="text-[11px] text-slate-500 mt-1">25 分鐘專注微迴圈 · 克服拖延</p>
              </div>

              <div className="flex items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsTimerRunning(!isTimerRunning);
                    soundEngine.playClickBeep();
                  }}
                  className={`inline-flex items-center gap-1.5 rounded-xl px-5 py-2 text-xs font-bold text-white shadow-xs transition-all cursor-pointer ${
                    isTimerRunning
                      ? 'bg-amber-600 hover:bg-amber-700'
                      : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  {isTimerRunning ? <Pause className="size-3.5" /> : <Play className="size-3.5 fill-current" />}
                  {isTimerRunning ? '暫停計時' : '開始專注'}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setIsTimerRunning(false);
                    setPomodoroSeconds(25 * 60);
                    soundEngine.playClickBeep();
                  }}
                  className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-200 cursor-pointer transition-colors"
                  title="重置 25 分鐘"
                  aria-label="重置 25 分鐘番茄鐘"
                >
                  <RotateCcw className="size-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ── 底部按鈕區 (Back-to-top & Floating Capsule Trigger) ── */}
      <div className="flex items-center gap-2">
        {showBackToTop && (
          <button
            type="button"
            onClick={scrollToTop}
            className="flex size-10 items-center justify-center rounded-full border border-slate-200/90 bg-white/95 text-slate-700 shadow-md backdrop-blur-md hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900/95 dark:text-slate-200 cursor-pointer transition-all hover:-translate-y-0.5"
            title="回到頂部"
            aria-label="回到頁面頂部"
          >
            <ChevronUp className="size-5" />
          </button>
        )}

        <button
          type="button"
          onClick={() => {
            setIsOpen(!isOpen);
            soundEngine.playClickBeep();
          }}
          className={`flex items-center gap-2 rounded-full border px-4 py-2.5 shadow-lg backdrop-blur-md transition-all cursor-pointer hover:scale-105 ${
            isOpen
              ? 'border-blue-500 bg-blue-600 text-white'
              : 'border-slate-200/90 bg-white/95 text-slate-800 dark:border-slate-800 dark:bg-slate-900/95 dark:text-white'
          }`}
          aria-label={isOpen ? '收合學習工具箱' : '展開學習專注工具箱'}
        >
          {ambientSound !== 'none' ? (
            <Headphones className="size-4 animate-pulse text-blue-400" />
          ) : isTimerRunning ? (
            <Timer className="size-4 text-amber-500" />
          ) : (
            <List className="size-4" />
          )}

          <span className="font-mono text-xs font-bold">
            {scrollProgress}%
          </span>

          <span className="hidden sm:inline text-xs font-medium text-slate-500 dark:text-slate-400">
            {isTimerRunning ? formatTimer(pomodoroSeconds) : '學習工具'}
          </span>
        </button>
      </div>
    </aside>
  );
}
