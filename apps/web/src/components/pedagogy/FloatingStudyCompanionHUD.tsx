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
  Radio,
  BrainCircuit,
} from 'lucide-react';
import { soundEngine } from '@/lib/audio/soundEffects';

interface FloatingStudyCompanionHUDProps {
  topicTitle: string;
  onOpenFormulaDrawer?: () => void;
  onOpenRecallDrawer?: () => void;
  speechText?: string;
  activeStage?: string;
  totalConcepts?: number;
  completedConceptsCount?: number;
  highlightedConceptsCount?: number;
}

export default function FloatingStudyCompanionHUD({
  topicTitle,
  onOpenFormulaDrawer,
  onOpenRecallDrawer,
  speechText,
  activeStage,
  totalConcepts = 3,
  completedConceptsCount = 0,
  highlightedConceptsCount = 0,
}: FloatingStudyCompanionHUDProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'toc' | 'ambient' | 'speech' | 'pomodoro'>('toc');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Ambient sound state
  const [ambientSound, setAmbientSound] = useState<'none' | 'rain' | 'breeze'>('none');
  const ambientVolume = 0.12;

  // Web Speech API narration state
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechRate, setSpeechRate] = useState(1.0);

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

  // Web Speech API handlers
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleToggleSpeech = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();
    const textToSpeak = speechText || `正在為您朗讀章節：${topicTitle}。請跟隨畫面閱讀核心觀念與步驟例題。`;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = 'zh-TW';
    utterance.rate = speechRate;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
    soundEngine.playClickBeep();
  };

  const handleChangeSpeechRate = (rate: number) => {
    setSpeechRate(rate);
    if (isSpeaking && typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const textToSpeak = speechText || `章節：${topicTitle}。`;
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.lang = 'zh-TW';
      utterance.rate = rate;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
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
          <div className="mt-3 grid grid-cols-4 gap-1 rounded-xl bg-slate-100 p-1 dark:bg-slate-800 text-xs font-bold">
            <button
              type="button"
              onClick={() => setActiveTab('toc')}
              className={`flex items-center justify-center gap-1 rounded-lg py-1.5 transition-all cursor-pointer ${
                activeTab === 'toc'
                  ? 'bg-white text-blue-600 shadow-2xs dark:bg-slate-900 dark:text-blue-400'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              <List className="size-3" />
              <span>目錄</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('ambient')}
              className={`flex items-center justify-center gap-1 rounded-lg py-1.5 transition-all cursor-pointer ${
                activeTab === 'ambient'
                  ? 'bg-white text-blue-600 shadow-2xs dark:bg-slate-900 dark:text-blue-400'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              <Headphones className="size-3" />
              <span>聲景</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('speech')}
              className={`flex items-center justify-center gap-1 rounded-lg py-1.5 transition-all cursor-pointer ${
                activeTab === 'speech'
                  ? 'bg-white text-blue-600 shadow-2xs dark:bg-slate-900 dark:text-blue-400'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              <Radio className={`size-3 ${isSpeaking ? 'text-emerald-500 animate-pulse' : ''}`} />
              <span>朗讀</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('pomodoro')}
              className={`flex items-center justify-center gap-1 rounded-lg py-1.5 transition-all cursor-pointer ${
                activeTab === 'pomodoro'
                  ? 'bg-white text-blue-600 shadow-2xs dark:bg-slate-900 dark:text-blue-400'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              <Timer className="size-3" />
              <span>番茄鐘</span>
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

              {highlightedConceptsCount > 0 && (
                <div className="flex items-center justify-between rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/70 dark:border-amber-800/60 px-3 py-1.5 text-[11px] font-mono text-amber-800 dark:text-amber-300">
                  <span className="font-bold flex items-center gap-1">
                    <span>✨</span> 核心重點已標記
                  </span>
                  <span>{highlightedConceptsCount} 處重點突破</span>
                </div>
              )}
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

              {onOpenRecallDrawer && (
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    onOpenRecallDrawer();
                  }}
                  className="w-full mt-1.5 inline-flex items-center justify-center gap-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-indigo-800 dark:text-indigo-200 py-2 text-xs font-bold hover:bg-indigo-100 transition-colors cursor-pointer"
                >
                  <BrainCircuit className="size-3.5" />
                  核心觀念主動回憶快卡
                </button>
              )}

              <button
                type="button"
                onClick={() => {
                  if (typeof document !== 'undefined') {
                    if (!document.fullscreenElement) {
                      document.documentElement.requestFullscreen().catch(() => {});
                    } else {
                      document.exitFullscreen().catch(() => {});
                    }
                  }
                }}
                className="w-full mt-1.5 inline-flex items-center justify-center gap-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 py-2 text-xs font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
              >
                <span>⛶ 切換橫式全螢幕劇院視野</span>
              </button>
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

          {/* ── Tab 3: Speech Audio Narration ── */}
          {activeTab === 'speech' && (
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5 font-bold text-slate-700 dark:text-slate-300">
                  <Radio className={`size-3.5 ${isSpeaking ? 'text-emerald-500 animate-pulse' : 'text-slate-400'}`} />
                  {isSpeaking ? '語音導讀進行中...' : 'Web Speech 語音導讀'}
                </span>
                <span className="font-mono text-[10px] text-slate-400">離線可用</span>
              </div>

              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 p-3.5 space-y-3">
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 font-serif">
                  {speechText ? speechText.slice(0, 90) + '...' : `章節核心導讀：${topicTitle}`}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
                  <button
                    type="button"
                    onClick={handleToggleSpeech}
                    className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-bold text-white shadow-xs transition-all cursor-pointer ${
                      isSpeaking ? 'bg-amber-600 hover:bg-amber-700' : 'bg-emerald-600 hover:bg-emerald-700'
                    }`}
                  >
                    {isSpeaking ? <Pause className="size-3.5" /> : <Play className="size-3.5 fill-current" />}
                    <span>{isSpeaking ? '暫停' : '播放導讀'}</span>
                  </button>

                  {/* 語速調節 */}
                  <div className="flex items-center gap-1 text-[10px] font-mono font-bold">
                    <span className="text-slate-400 mr-0.5">速：</span>
                    {[0.8, 1.0, 1.25, 1.5].map((rate) => (
                      <button
                        key={rate}
                        type="button"
                        onClick={() => handleChangeSpeechRate(rate)}
                        className={`px-1.5 py-0.5 rounded cursor-pointer transition-colors ${
                          speechRate === rate
                            ? 'bg-blue-600 text-white font-bold'
                            : 'bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                        }`}
                      >
                        {rate}x
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 leading-normal">
                💡 通勤與視力疲勞伴聽首選，自動朗讀課綱重點。
              </p>
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
