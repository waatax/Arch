'use client';

import React, { useState, useEffect, useRef } from 'react';

export interface DialogueLine {
  speaker: string;
  en: string;
  zh: string;
}

export interface InteractiveDialogueProps {
  title?: string;
  lines: DialogueLine[];
}

export default function InteractiveDialogue({ title = '情境對話範例 (Practical Dialogue)', lines }: InteractiveDialogueProps) {
  const [isPlayingAll, setIsPlayingAll] = useState(false);
  const [activeLineIndex, setActiveLineIndex] = useState<number | null>(null);
  const [showTranslations, setShowTranslations] = useState(true);
  const [playbackRate, setPlaybackRate] = useState<number>(0.9);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Stop speech if unmounted
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const stopPlayback = () => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsPlayingAll(false);
    setActiveLineIndex(null);
  };

  const playSingleLine = (index: number) => {
    stopPlayback();
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    setActiveLineIndex(index);
    const line = lines[index];
    // Strip any residual TTS brackets or tags from speech text
    const cleanText = line.en.replace(/\[TTS:[^\]]+\]/g, '').trim();
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'en-US';
    utterance.rate = playbackRate;

    utterance.onend = () => {
      setActiveLineIndex(null);
    };
    utterance.onerror = () => {
      setActiveLineIndex(null);
    };

    window.speechSynthesis.speak(utterance);
  };

  const playAllLines = () => {
    if (isPlayingAll) {
      stopPlayback();
      return;
    }

    if (typeof window === 'undefined' || !window.speechSynthesis || lines.length === 0) return;

    stopPlayback();
    setIsPlayingAll(true);

    const playSequence = (idx: number) => {
      if (idx >= lines.length) {
        setIsPlayingAll(false);
        setActiveLineIndex(null);
        return;
      }

      setActiveLineIndex(idx);
      const cleanText = lines[idx].en.replace(/\[TTS:[^\]]+\]/g, '').trim();
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = 'en-US';
      utterance.rate = playbackRate;

      utterance.onend = () => {
        timeoutRef.current = setTimeout(() => {
          playSequence(idx + 1);
        }, 450); // Pause between dialogue turns
      };

      utterance.onerror = () => {
        setIsPlayingAll(false);
        setActiveLineIndex(null);
      };

      window.speechSynthesis.speak(utterance);
    };

    playSequence(0);
  };

  const getSpeakerStyle = (speaker: string, index: number) => {
    const s = speaker.toLowerCase();
    if (s.includes('a') || s.includes('engineer') || s.includes('teacher') || s.includes('john') || s.includes('alex') || index % 2 === 0) {
      return {
        badgeBg: 'bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-200 border-blue-200 dark:border-blue-800',
        cardBg: 'border-l-blue-500 bg-blue-50/40 dark:bg-blue-950/20'
      };
    }
    return {
      badgeBg: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200 border-emerald-200 dark:border-emerald-800',
      cardBg: 'border-l-emerald-500 bg-emerald-50/40 dark:bg-emerald-950/20'
    };
  };

  return (
    <div className="my-4 rounded-2xl border border-slate-200 bg-white shadow-xs dark:border-slate-800 dark:bg-slate-900/90 overflow-hidden">
      {/* Dialogue Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 bg-slate-50/80 px-4 py-3 dark:border-slate-800 dark:bg-slate-800/60">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-lg bg-sky-500 text-white text-xs font-mono font-bold shadow-2xs">
            💬
          </span>
          <div>
            <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Dialogue In Context
            </h4>
            <span className="text-sm font-bold text-slate-900 dark:text-white">
              {title}
            </span>
          </div>
        </div>

        {/* Global Action Controls */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs font-medium">
          {/* Play All Button */}
          <button
            type="button"
            onClick={playAllLines}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-bold transition-all shadow-2xs cursor-pointer ${
              isPlayingAll
                ? 'bg-rose-600 text-white hover:bg-rose-700 animate-pulse'
                : 'bg-blue-600 text-white hover:bg-blue-700 active:scale-95'
            }`}
            title={isPlayingAll ? '停止連續播放' : '從頭到尾自動連續播放整段對話'}
          >
            {isPlayingAll ? '⏹️ 停止播放' : '🎧 一次播放整段會話'}
          </button>

          {/* Toggle Translations Button */}
          <button
            type="button"
            onClick={() => setShowTranslations(!showTranslations)}
            className="inline-flex items-center gap-1 rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer shadow-2xs"
            title="切換顯示或隱藏中文翻譯以練習聽力"
          >
            {showTranslations ? '👁️ 隱藏中文 (聽力測驗)' : '📖 顯示中文翻譯'}
          </button>

          {/* Speed Toggle */}
          <select
            value={playbackRate}
            aria-label="語速調整"
            onChange={(e) => setPlaybackRate(parseFloat(e.target.value))}
            className="rounded-lg border border-slate-300 bg-white px-2 py-1.5 text-xs text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 cursor-pointer shadow-2xs"
          >
            <option value="0.8">0.8x 慢速</option>
            <option value="0.9">0.9x 標準</option>
            <option value="1.1">1.1x 快速</option>
          </select>
        </div>
      </div>

      {/* Dialogue Lines */}
      <div className="p-4 sm:p-5 space-y-3">
        {lines.map((line, idx) => {
          const isCurrentActive = activeLineIndex === idx;
          const style = getSpeakerStyle(line.speaker, idx);
          const cleanEnText = line.en.replace(/\[TTS:[^\]]+\]/g, '').trim();

          return (
            <div
              key={idx}
              className={`rounded-xl border-l-4 p-3.5 transition-all duration-200 border border-slate-200/80 dark:border-slate-800/80 ${
                isCurrentActive
                  ? 'bg-amber-50/80 dark:bg-amber-950/40 border-l-amber-500 ring-2 ring-amber-400/50 shadow-md scale-[1.01]'
                  : `${style.cardBg} hover:shadow-xs`
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 space-y-1.5">
                  {/* Speaker and English line */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className={`inline-block rounded-md px-2 py-0.5 text-[11px] font-bold font-mono border ${style.badgeBg}`}
                    >
                      {line.speaker}
                    </span>
                    <p className="text-[15px] font-medium leading-relaxed text-slate-900 dark:text-slate-100">
                      {cleanEnText}
                    </p>
                  </div>

                  {/* Chinese translation line */}
                  {showTranslations && (
                    <p className="text-xs text-slate-600 dark:text-slate-400 pl-1 border-l-2 border-slate-300 dark:border-slate-700 mt-1 leading-relaxed">
                      {line.zh}
                    </p>
                  )}
                </div>

                {/* Individual Line TTS Button */}
                <button
                  type="button"
                  onClick={() => playSingleLine(idx)}
                  className={`shrink-0 inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium transition-all cursor-pointer ${
                    isCurrentActive
                      ? 'bg-amber-500 text-white font-bold animate-pulse shadow-xs'
                      : 'bg-sky-100 text-sky-700 hover:bg-sky-200 dark:bg-sky-950/60 dark:text-sky-300 dark:hover:bg-sky-900 border border-sky-200 dark:border-sky-800'
                  }`}
                  title="單句播放發音"
                >
                  🔊 {isCurrentActive ? '朗讀中' : '播放'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
