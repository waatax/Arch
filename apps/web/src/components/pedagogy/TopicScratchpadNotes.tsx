'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  PenTool,
  Copy,
  Check,
  Trash2,
  Download,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Save,
} from 'lucide-react';
import { soundEngine } from '@/lib/audio/soundEffects';

interface TopicScratchpadNotesProps {
  topicTitle: string;
  topicSlug: string;
  subjectTitle: string;
  subjectSlug: string;
}

const COMMON_SYMBOLS = [
  { label: '∑Fx=0', value: '∑Fx = 0' },
  { label: '∑Fy=0', value: '∑Fy = 0' },
  { label: '∑M=0', value: '∑M = 0' },
  { label: 'σ=P/A', value: 'σ = P / A' },
  { label: 'τ=VQ/Ib', value: 'τ = (V·Q) / (I·b)' },
  { label: "fc'≥280", value: "f'c ≥ 280 kgf/cm²" },
  { label: 'w/c≤0.5', value: 'w/c ≤ 0.50' },
  { label: 'ΔH=a-b', value: 'ΔH = a - b (視距高程差)' },
  { label: 'CNS 粗實線', value: 'CNS 11567 粗實線 (0.5mm 斷面輪廓)' },
  { label: 'θ', value: 'θ' },
  { label: '±', value: '±' },
];

const TEMPLATES = [
  {
    label: '💡 私房直覺',
    snippet: '\n\n💡【核心直覺心得】：\n- 物理因果關係：\n- 記憶關鍵字：\n',
  },
  {
    label: '⚠️ 易混淆地雷',
    snippet: '\n\n⚠️【失分盲點防禦】：\n- 最容易粗心的地方：\n- 正確檢查 SOP：\n',
  },
  {
    label: '📐 大考必背公式',
    snippet: '\n\n📐【統測速記公式】：\n- 核心公式：\n- 單位換算提醒：\n',
  },
];

export default function TopicScratchpadNotes({
  topicTitle,
  topicSlug,
  subjectTitle,
}: TopicScratchpadNotesProps) {
  const [content, setContent] = useState('');
  const [isExpanded, setIsExpanded] = useState(true);
  const [isCopied, setIsCopied] = useState(false);
  const [lastSaved, setLastSaved] = useState<string | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const storageKey = `arch_scratchpad_${topicSlug}`;

  // 從 localStorage 讀取筆記
  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        setTimeout(() => {
          setContent(saved);
          setLastSaved('已讀取歷史筆記');
        }, 0);
      }
    } catch {
      // ignore
    }
  }, [storageKey]);

  // 儲存筆記
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    setContent(val);
    try {
      localStorage.setItem(storageKey, val);
      const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      setLastSaved(`已自動儲存 (${timeStr})`);
    } catch {
      // ignore
    }
  };

  // 插入文字於游標處
  const insertTextAtCursor = (textToInsert: string) => {
    soundEngine.playPencilDraw();
    const textarea = textareaRef.current;
    if (!textarea) {
      const next = content + textToInsert;
      setContent(next);
      localStorage.setItem(storageKey, next);
      return;
    }

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const before = content.substring(0, start);
    const after = content.substring(end);
    const next = before + textToInsert + after;

    setContent(next);
    localStorage.setItem(storageKey, next);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + textToInsert.length, start + textToInsert.length);
    }, 0);
  };

  // 複製筆記
  const handleCopy = () => {
    if (!content) return;
    navigator.clipboard.writeText(content);
    setIsCopied(true);
    soundEngine.playClickBeep();
    setTimeout(() => setIsCopied(false), 2000);
  };

  // 下載文字筆記
  const handleDownload = () => {
    if (!content) return;
    const blob = new Blob([`【Arch 建築學習筆記】\n科目：${subjectTitle}\n章節：${topicTitle}\n\n${content}`], {
      type: 'text/plain;charset=utf-8',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Arch筆記_${subjectTitle}_${topicTitle}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    soundEngine.playClickBeep();
  };

  // 清除筆記
  const handleClear = () => {
    if (!content) return;
    if (window.confirm('確定要清除本章的隨堂筆記嗎？此操作無法復原。')) {
      setContent('');
      localStorage.removeItem(storageKey);
      setLastSaved(null);
      soundEngine.playClickBeep();
    }
  };

  return (
    <section
      id="scratchpad-notes"
      className="lesson-deferred-section scroll-mt-24 rounded-3xl border border-amber-200/90 dark:border-amber-900/50 bg-gradient-to-b from-amber-50/50 via-white to-amber-50/30 dark:from-amber-950/20 dark:via-slate-900 dark:to-amber-950/10 p-5 sm:p-7 shadow-xs space-y-4"
    >
      <div className="flex items-center justify-between gap-3 border-b border-amber-200/60 dark:border-amber-900/40 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-amber-500 text-white shadow-2xs">
            <PenTool className="size-4.5" />
          </div>
          <div>
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 block">
              Personal Study Scratchpad
            </span>
            <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              隨堂速記便籤 · 私房直覺與考點筆記
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          {lastSaved && (
            <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 hidden sm:inline flex items-center gap-1">
              <Save className="size-3" />
              {lastSaved}
            </span>
          )}
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-amber-100/60 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label={isExpanded ? '折疊筆記欄' : '展開筆記欄'}
          >
            {isExpanded ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
          </button>
        </div>
      </div>

      {isExpanded && (
        <div className="space-y-3">
          {/* 工具列：常用工程符號快速插入 */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span className="flex items-center gap-1">
                <Sparkles className="size-3 text-amber-500" />
                點擊快速插入常用建築與力學符號：
              </span>
              <span>{content.length} 字</span>
            </div>

            <div className="flex flex-wrap gap-1.5 items-center">
              {COMMON_SYMBOLS.map((sym) => (
                <button
                  key={sym.label}
                  type="button"
                  onClick={() => insertTextAtCursor(sym.value)}
                  className="rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2 py-1 text-xs font-mono font-medium text-slate-700 dark:text-slate-300 hover:border-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors shadow-2xs cursor-pointer"
                >
                  {sym.label}
                </button>
              ))}

              <span className="text-slate-300 dark:text-slate-700 px-1">|</span>

              {TEMPLATES.map((tmpl) => (
                <button
                  key={tmpl.label}
                  type="button"
                  onClick={() => insertTextAtCursor(tmpl.snippet)}
                  className="rounded-lg bg-amber-100/80 dark:bg-amber-950/60 border border-amber-300/80 dark:border-amber-800 px-2 py-1 text-xs font-bold text-amber-800 dark:text-amber-200 hover:bg-amber-200/80 transition-colors cursor-pointer"
                >
                  {tmpl.label}
                </button>
              ))}
            </div>
          </div>

          {/* 筆記多行輸入框 */}
          <div className="relative">
            <textarea
              ref={textareaRef}
              value={content}
              onChange={handleContentChange}
              rows={5}
              placeholder={`在此記錄針對【${topicTitle}】的心得、記憶口訣或考前易錯提醒...\n（所有內容會自動保存在您的瀏覽器中，換頁或重新整理都不會消失）`}
              className="w-full rounded-2xl border border-amber-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-950/70 p-4 font-mono text-xs sm:text-sm text-slate-800 dark:text-slate-200 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 leading-relaxed shadow-inner resize-y"
            />
          </div>

          {/* 底部操作欄 */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs font-mono">
            <span className="text-[11px] text-slate-400">
              💡 提示：按 Tab 或使用上方符號快捷鍵，打造您專屬的技術工筆記本。
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopy}
                disabled={!content}
                className="inline-flex items-center gap-1 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 px-3 py-1.5 font-bold transition-colors disabled:opacity-40 cursor-pointer"
              >
                {isCopied ? <Check className="size-3 text-emerald-500" /> : <Copy className="size-3" />}
                <span>{isCopied ? '已複製' : '複製筆記'}</span>
              </button>

              <button
                type="button"
                onClick={handleDownload}
                disabled={!content}
                className="inline-flex items-center gap-1 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 px-3 py-1.5 font-bold transition-colors disabled:opacity-40 cursor-pointer"
              >
                <Download className="size-3" />
                <span>匯出 TXT</span>
              </button>

              <button
                type="button"
                onClick={handleClear}
                disabled={!content}
                className="inline-flex items-center gap-1 rounded-xl hover:bg-rose-50 dark:hover:bg-rose-950/40 text-slate-400 hover:text-rose-600 px-2.5 py-1.5 transition-colors disabled:opacity-40 cursor-pointer"
                title="清除本章筆記"
              >
                <Trash2 className="size-3" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
