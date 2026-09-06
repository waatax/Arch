'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Volume2, 
  Play, 
  Pause, 
  Headphones, 
  Sliders, 
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import type { TopicContent } from '@/data/types';

interface EnglishAudioHubProps {
  topic: TopicContent;
}

export default function EnglishAudioHub({ topic }: EnglishAudioHubProps) {
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(0.9);
  const [isPlayingAll, setIsPlayingAll] = useState<boolean>(false);
  const [activeWordIndex, setActiveWordIndex] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Extract vocabulary/phrases with TTS tags from topic concepts & worked examples
  const extractedPhrases = React.useMemo(() => {
    const items: Array<{ en: string; note: string }> = [];
    const seen = new Set<string>();

    const extractFromText = (str: string, source: string) => {
      if (!str) return;
      const regex = /\[TTS:([^\]]+)\]/g;
      let match;
      while ((match = regex.exec(str)) !== null) {
        const text = match[1].trim();
        // Keep unique words/phrases with length > 1 and < 50
        if (text.length > 1 && text.length < 50 && !seen.has(text.toLowerCase())) {
          seen.add(text.toLowerCase());
          items.push({ en: text, note: source });
        }
      }
    };

    // Scan concepts
    topic.concepts?.forEach((c, idx) => {
      extractFromText(c.body || '', `概念 ${idx + 1}`);
      c.table?.rows?.forEach((row) => {
        row.forEach((cell) => extractFromText(cell, '重點表格'));
      });
    });

    // Scan worked examples
    topic.worked_examples?.forEach((we) => {
      extractFromText(we.question || '', '精選示範題');
    });

    // Limit to top 24 high-priority items for fast loading & tidy UI
    return items.slice(0, 24);
  }, [topic]);

  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const stopAll = () => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setIsPlayingAll(false);
    setActiveWordIndex(null);
  };

  const playSingle = (text: string, index?: number) => {
    stopAll();
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    if (index !== undefined) {
      setActiveWordIndex(index);
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = playbackSpeed;

    utterance.onend = () => {
      setActiveWordIndex(null);
    };
    utterance.onerror = () => {
      setActiveWordIndex(null);
    };

    window.speechSynthesis.speak(utterance);
  };

  const playAllSequence = () => {
    if (isPlayingAll) {
      stopAll();
      return;
    }

    if (typeof window === 'undefined' || !window.speechSynthesis || extractedPhrases.length === 0) return;

    stopAll();
    setIsPlayingAll(true);

    const playNext = (idx: number) => {
      if (idx >= extractedPhrases.length) {
        setIsPlayingAll(false);
        setActiveWordIndex(null);
        return;
      }

      setActiveWordIndex(idx);
      const utterance = new SpeechSynthesisUtterance(extractedPhrases[idx].en);
      utterance.lang = 'en-US';
      utterance.rate = playbackSpeed;

      utterance.onend = () => {
        timerRef.current = setTimeout(() => {
          playNext(idx + 1);
        }, 500);
      };

      utterance.onerror = () => {
        setIsPlayingAll(false);
        setActiveWordIndex(null);
      };

      window.speechSynthesis.speak(utterance);
    };

    playNext(0);
  };

  return (
    <div className="rounded-2xl border border-sky-200/90 bg-linear-to-br from-sky-50/70 via-indigo-50/30 to-blue-50/50 dark:border-sky-900/60 dark:from-slate-900 dark:via-indigo-950/20 dark:to-slate-900 p-4 sm:p-5 shadow-xs transition-all">
      {/* Top Controller Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-linear-to-br from-sky-500 to-blue-600 text-white shadow-xs">
            <Headphones className="size-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-serif text-base font-bold text-slate-900 dark:text-white">
                技高英語文 · 核心單字片語聽力快播吧 (TVE Audio Hub)
              </h3>
              <span className="rounded-full bg-sky-100 dark:bg-sky-950 px-2 py-0.5 text-[10px] font-bold text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800 font-mono">
                {extractedPhrases.length} 個高頻字彙
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              點擊任意單字即時發音，或啟動全章自動連播沉浸跟讀
            </p>
          </div>
        </div>

        {/* Speed and Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Speed Selector */}
          <div className="flex items-center gap-1 bg-white dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-mono font-bold shadow-2xs">
            <Sliders className="size-3 text-slate-400 ml-1" />
            <button
              onClick={() => setPlaybackSpeed(0.8)}
              className={`px-2 py-0.5 rounded-lg transition-all cursor-pointer ${
                playbackSpeed === 0.8
                  ? 'bg-sky-600 text-white shadow-2xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
              title="0.8倍速（基礎慢速）"
            >
              0.8x
            </button>
            <button
              onClick={() => setPlaybackSpeed(1.0)}
              className={`px-2 py-0.5 rounded-lg transition-all cursor-pointer ${
                playbackSpeed === 1.0
                  ? 'bg-sky-600 text-white shadow-2xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
              title="1.0倍速（標準語速）"
            >
              1.0x
            </button>
            <button
              onClick={() => setPlaybackSpeed(1.2)}
              className={`px-2 py-0.5 rounded-lg transition-all cursor-pointer ${
                playbackSpeed === 1.2
                  ? 'bg-sky-600 text-white shadow-2xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
              title="1.2倍速（考場挑戰速度）"
            >
              1.2x
            </button>
          </div>

          {/* Play All / Stop All */}
          <button
            onClick={playAllSequence}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all shadow-2xs cursor-pointer active:scale-95 ${
              isPlayingAll
                ? 'bg-rose-600 text-white hover:bg-rose-700 ring-2 ring-rose-300 dark:ring-rose-800'
                : 'bg-sky-600 text-white hover:bg-sky-700'
            }`}
          >
            {isPlayingAll ? (
              <>
                <Pause className="size-3.5 animate-pulse" />
                <span>停止連播</span>
              </>
            ) : (
              <>
                <Play className="size-3.5 fill-current" />
                <span>連續朗讀</span>
              </>
            )}
          </button>

          {/* Expand / Collapse Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors cursor-pointer"
            title={isExpanded ? '收合單字面板' : '展開單字面板'}
          >
            {isExpanded ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
          </button>
        </div>
      </div>

      {/* Vocabulary Chips Grid */}
      {isExpanded && extractedPhrases.length > 0 && (
        <div className="mt-4 pt-3 border-t border-sky-100 dark:border-sky-900/40 space-y-2">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
            <span>點擊字卡即可發音；連播時高亮單字將同步跟隨：</span>
            <span>支援原生美式發音 (en-US)</span>
          </div>

          <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto pr-1">
            {extractedPhrases.map((phrase, idx) => {
              const isSpeaking = activeWordIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => playSingle(phrase.en, idx)}
                  className={`group relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer border ${
                    isSpeaking
                      ? 'bg-sky-600 text-white border-sky-700 shadow-md ring-2 ring-sky-300 dark:ring-sky-700 scale-105'
                      : 'bg-white dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-sky-300 dark:hover:border-sky-600 hover:bg-sky-50 dark:hover:bg-slate-800'
                  }`}
                  title={`${phrase.en} (${phrase.note})`}
                >
                  <Volume2 className={`size-3.5 transition-transform ${isSpeaking ? 'animate-bounce text-white' : 'text-sky-500 group-hover:scale-110'}`} />
                  <span>{phrase.en}</span>
                  {isSpeaking && (
                    <span className="size-1.5 rounded-full bg-white animate-ping ml-0.5" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
