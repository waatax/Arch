'use client';

import { useEffect, useRef, useState } from 'react';
import { BookMarked, Flame, Focus, Settings2, X } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import { LESSON_SECTIONS } from './lessonUtils';

interface LessonNavProps {
  availableIds: string[];
  conceptCount: number;
  understoodCount: number;
  mistakeCount: number;
  hasFormulaSheet: boolean;
  focusMode: boolean;
  onToggleFocus: () => void;
  onOpenFormulas: () => void;
  onOpenMistakes: () => void;
  onActiveChange?: (sectionId: string) => void;
}

const THEME_LABEL: Record<string, string> = { light: '和紙白', sepia: '護眼米', dark: '深岩藍', oled: '極夜黑' };

export default function LessonNav({
  availableIds,
  conceptCount,
  understoodCount,
  mistakeCount,
  hasFormulaSheet,
  focusMode,
  onToggleFocus,
  onOpenFormulas,
  onOpenMistakes,
  onActiveChange,
}: LessonNavProps) {
  const [active, setActive] = useState<string>('');
  const [settingsOpen, setSettingsOpen] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme, fontSize, setFontSize, readingWidth, setReadingWidth } = useTheme();
  const sections = LESSON_SECTIONS.filter((item) => availableIds.includes(item.id));
  const onActiveChangeRef = useRef(onActiveChange);
  useEffect(() => {
    onActiveChangeRef.current = onActiveChange;
  }, [onActiveChange]);

  // Scrollspy：追蹤主要段落與每個觀念卡（觀念卡用於記錄閱讀位置）
  useEffect(() => {
    const ids = [...availableIds, ...Array.from({ length: conceptCount }, (_, i) => `concept-${i}`)];
    const elements = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => Boolean(el));
    if (!elements.length) return;
    const visible = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.boundingClientRect.top);
          else visible.delete(entry.target.id);
        }
        if (!visible.size) return;
        const [topId] = [...visible.entries()].sort((a, b) => a[1] - b[1])[0];
        const sectionId = topId.startsWith('concept-') ? 'principles' : topId;
        setActive(sectionId);
        onActiveChangeRef.current?.(topId);
      },
      { rootMargin: '-140px 0px -55% 0px', threshold: 0 },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [availableIds, conceptCount]);

  // 讓目前段落的按鈕保持在可見範圍
  useEffect(() => {
    const button = listRef.current?.querySelector<HTMLElement>(`[data-section="${active}"]`);
    button?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }, [active]);

  useEffect(() => {
    if (!settingsOpen) return;
    const close = (event: MouseEvent | KeyboardEvent) => {
      if (event instanceof KeyboardEvent ? event.key === 'Escape' : !settingsRef.current?.contains(event.target as Node)) setSettingsOpen(false);
    };
    document.addEventListener('mousedown', close);
    document.addEventListener('keydown', close);
    return () => {
      document.removeEventListener('mousedown', close);
      document.removeEventListener('keydown', close);
    };
  }, [settingsOpen]);

  const jump = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const sizes = ['sm', 'base', 'lg', 'xl'] as const;
  const sizeIndex = sizes.indexOf(fontSize as (typeof sizes)[number]);

  return (
    <nav
      aria-label="本章段落導覽"
      className={`lesson-nav sticky z-30 -mx-4 border-b border-slate-200 bg-white/95 px-3 py-2 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/95 sm:-mx-6 sm:px-5 print:hidden ${focusMode ? 'top-0' : 'top-16'}`}
    >
      <div className="flex items-center gap-2">
        <div ref={listRef} className="mobile-scroll no-scrollbar flex min-w-0 flex-1 items-center gap-1 overflow-x-auto">
          {sections.map((section) => {
            const isActive = active === section.id;
            return (
              <button
                key={section.id}
                type="button"
                data-section={section.id}
                onClick={() => jump(section.id)}
                aria-current={isActive ? 'true' : undefined}
                className={`relative min-h-9 shrink-0 rounded-lg px-3 text-sm font-bold transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-blue-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-blue-300'
                }`}
              >
                {section.label}
                {section.id === 'principles' && conceptCount ? (
                  <span className={`ml-1 font-mono text-[11px] ${isActive ? 'text-blue-100' : 'text-slate-400'}`}>
                    {understoodCount}/{conceptCount}
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>

        <div className="flex shrink-0 items-center gap-1">
          {hasFormulaSheet ? (
            <button
              type="button"
              onClick={onOpenFormulas}
              className="inline-flex min-h-9 items-center gap-1 rounded-lg border border-amber-300 bg-amber-50 px-2.5 text-xs font-bold text-amber-800 hover:bg-amber-100 dark:border-amber-800 dark:bg-amber-950/50 dark:text-amber-200"
              title="本章公式與重點表速查"
            >
              <BookMarked className="size-3.5" aria-hidden="true" />
              <span className="hidden sm:inline">速查卡</span>
            </button>
          ) : null}
          <button
            type="button"
            onClick={onOpenMistakes}
            className="inline-flex min-h-9 items-center gap-1 rounded-lg border border-rose-200 bg-rose-50 px-2.5 text-xs font-bold text-rose-700 hover:bg-rose-100 dark:border-rose-900/60 dark:bg-rose-950/40 dark:text-rose-300"
            title="錯題本（間隔複習）"
          >
            <Flame className="size-3.5" aria-hidden="true" />
            <span className="font-mono">{mistakeCount}</span>
          </button>
          <div ref={settingsRef} className="relative">
            <button
              type="button"
              onClick={() => setSettingsOpen((value) => !value)}
              aria-expanded={settingsOpen}
              aria-haspopup="dialog"
              className="inline-flex min-h-9 items-center rounded-lg border border-slate-200 bg-slate-50 px-2.5 text-slate-700 hover:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              title="閱讀設定"
            >
              <Settings2 className="size-4" aria-hidden="true" />
              <span className="sr-only">閱讀設定</span>
            </button>
            {settingsOpen ? (
              <div role="dialog" aria-label="閱讀設定" className="absolute right-0 top-11 w-64 space-y-3 rounded-2xl border border-slate-200 bg-white p-4 text-sm shadow-xl dark:border-slate-700 dark:bg-slate-900">
                <div className="flex items-center justify-between">
                  <p className="font-bold text-slate-900 dark:text-white">閱讀設定</p>
                  <button type="button" onClick={() => setSettingsOpen(false)} className="rounded p-1 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="關閉閱讀設定">
                    <X className="size-4" />
                  </button>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-slate-600 dark:text-slate-400">字級</span>
                  <div className="flex items-center gap-1">
                    <button type="button" disabled={sizeIndex <= 0} onClick={() => setFontSize(sizes[Math.max(0, sizeIndex - 1)])} className="min-h-8 rounded-md border border-slate-200 px-2.5 font-bold disabled:opacity-40 dark:border-slate-700">A−</button>
                    <button type="button" disabled={sizeIndex >= sizes.length - 1} onClick={() => setFontSize(sizes[Math.min(sizes.length - 1, sizeIndex + 1)])} className="min-h-8 rounded-md border border-slate-200 px-2.5 font-bold disabled:opacity-40 dark:border-slate-700">A＋</button>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-slate-600 dark:text-slate-400">色調</span>
                  <button type="button" onClick={() => toggleTheme()} className="min-h-8 rounded-md border border-slate-200 px-3 font-bold dark:border-slate-700">
                    {THEME_LABEL[theme] ?? theme} ⟳
                  </button>
                </div>
                <div className="hidden items-center justify-between gap-2 lg:flex">
                  <span className="text-slate-600 dark:text-slate-400">版面寬度</span>
                  <button
                    type="button"
                    onClick={() => {
                      if (readingWidth === 'standard') setReadingWidth('wide');
                      else if (readingWidth === 'wide') setReadingWidth('full');
                      else setReadingWidth('standard');
                    }}
                    className="min-h-8 rounded-md border border-slate-200 px-3 font-bold dark:border-slate-700"
                  >
                    {readingWidth === 'full' ? '橫屏' : readingWidth === 'wide' ? '寬版' : '標準'} ⟳
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => { onToggleFocus(); setSettingsOpen(false); }}
                  className={`flex w-full min-h-9 items-center justify-center gap-1.5 rounded-lg font-bold ${focusMode ? 'bg-blue-600 text-white' : 'border border-blue-300 bg-blue-50 text-blue-800 dark:border-blue-800 dark:bg-blue-950/40 dark:text-blue-200'}`}
                >
                  <Focus className="size-4" aria-hidden="true" />
                  {focusMode ? '結束專注模式' : '專注模式（只看課文）'}
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </nav>
  );
}
