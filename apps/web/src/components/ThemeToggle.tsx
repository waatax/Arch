'use client';

import { useState, useRef, useEffect } from 'react';
import { useTheme, type Theme, type FontSize } from './ThemeProvider';
import { triggerHaptic } from '@/lib/haptics';

export default function ThemeToggle() {
  const { theme, fontSize, setTheme, setFontSize, readingWidth, setReadingWidth } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const fontSizes: Array<{ key: FontSize; label: string; desc: string }> = [
    { key: 'sm', label: 'A-', desc: '精巧 (14px)' },
    { key: 'base', label: 'A', desc: '標準 (16px)' },
    { key: 'lg', label: 'A+', desc: '放大 (18px)' },
    { key: 'xl', label: 'A++', desc: '特大 (20px)' },
  ];

  const themes: Array<{ key: Theme; label: string; icon: string; bg: string; border: string }> = [
    { key: 'light', label: '和紙白', icon: '☀️', bg: '#FAF8F5', border: '#DCE5EA' },
    { key: 'sepia', label: '護眼杏', icon: '🍵', bg: '#F6EFE6', border: '#DCD0C0' },
    { key: 'dark', label: '幽玄岩', icon: '🌙', bg: '#081622', border: '#1E3545' },
    { key: 'oled', label: '極夜黑', icon: '🖤', bg: '#000000', border: '#334155' },
  ];

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isOpen]);

  const activeThemeObj = themes.find((t) => t.key === theme) ?? themes[0];

  return (
    <div ref={containerRef} className="relative flex shrink-0 items-center gap-1.5">
      {/* Desktop Quick Font Size Controls */}
      <div
        className="hidden md:flex items-center border border-(--color-concrete-300) dark:border-slate-800 rounded-xl overflow-hidden bg-white/60 dark:bg-slate-900/60 p-0.5 shadow-2xs"
        role="group"
        aria-label="字體大小調節"
      >
        {fontSizes.map((fs) => (
          <button
            key={fs.key}
            type="button"
            onClick={() => {
              triggerHaptic('selection');
              setFontSize(fs.key);
            }}
            className={`min-h-8 min-w-7 px-2 py-1 text-xs font-mono rounded-lg transition-all duration-150 cursor-pointer ${
              fontSize === fs.key
                ? 'bg-(--color-teal-700) text-white font-bold shadow-2xs scale-102'
                : 'text-(--color-ink-650) hover:text-(--color-ink-900) hover:bg-slate-200/50 dark:hover:bg-slate-800'
            }`}
            aria-label={`字體大小 ${fs.desc}`}
            aria-pressed={fontSize === fs.key}
            title={fs.desc}
          >
            {fs.label}
          </button>
        ))}
      </div>

      {/* Main Theme / Reader Settings Button */}
      <button
        type="button"
        onClick={() => {
          triggerHaptic('light');
          setIsOpen(!isOpen)}
        }
        className="h-9 px-2.5 flex items-center gap-1.5 rounded-xl border border-(--color-concrete-300) dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 text-(--color-ink-650) hover:text-(--color-ink-900) hover:border-slate-400 dark:hover:border-slate-700 transition-all duration-200 active:scale-95 shadow-2xs cursor-pointer"
        aria-label="開啟閱讀偏好與色調設定"
        aria-expanded={isOpen}
        title={`當前色調：${activeThemeObj.label}（點擊調整閱讀色調與字級）`}
      >
        <span className="text-sm select-none" aria-hidden="true">{activeThemeObj.icon}</span>
        <span className="text-xs font-medium font-sans hidden sm:inline">{activeThemeObj.label}</span>
        <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">▼</span>
      </button>

      {/* Reader Settings Popover / Dropdown Modal */}
      {isOpen && (
        <div
          className="absolute right-0 top-full mt-2 w-72 sm:w-80 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 shadow-2xl z-50 animate-fade-in-up"
          role="dialog"
          aria-label="閱讀與排版偏好設定"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <span className="text-base">📖</span>
              <span className="text-sm font-bold text-slate-900 dark:text-white">閱讀偏好設定</span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xs font-mono p-1"
              aria-label="關閉設定面板"
            >
              ✕
            </button>
          </div>

          {/* Section 1: Themes / Reading Palettes */}
          <div className="mt-3 space-y-2">
            <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 block">
              🎨 閱讀色調（長時間護眼模式）
            </span>
            <div className="grid grid-cols-2 gap-2">
              {themes.map((t) => {
                const isSelected = theme === t.key;
                return (
                  <button
                    key={t.key}
                    type="button"
                    onClick={() => {
                      triggerHaptic('medium');
                      setTheme(t.key);
                    }}
                    className={`flex items-center gap-2.5 p-2 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'border-teal-600 dark:border-teal-400 ring-2 ring-teal-500/20 bg-teal-50/40 dark:bg-teal-950/30'
                        : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50/50 dark:bg-slate-800/40'
                    }`}
                  >
                    <div
                      className="size-5 rounded-full border shadow-2xs shrink-0 flex items-center justify-center text-[10px]"
                      style={{ backgroundColor: t.bg, borderColor: t.border }}
                    >
                      {isSelected ? '✓' : ''}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-800 dark:text-slate-200">{t.label}</div>
                      <div className="text-[10px] text-slate-500 font-mono">{t.key}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section 2: Mobile & Desktop Font Sizing */}
          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">
                🔠 閱讀字級大小
              </span>
              <span className="text-[11px] font-mono text-teal-700 dark:text-teal-400 font-bold">
                {fontSizes.find((f) => f.key === fontSize)?.desc}
              </span>
            </div>
            <div className="grid grid-cols-4 gap-1.5 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-xl">
              {fontSizes.map((fs) => (
                <button
                  key={fs.key}
                  type="button"
                  onClick={() => {
                    triggerHaptic('selection');
                    setFontSize(fs.key);
                  }}
                  className={`py-2 px-1 text-center rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                    fontSize === fs.key
                      ? 'bg-white dark:bg-slate-700 text-teal-700 dark:text-teal-300 shadow-sm scale-102'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <span className="block text-sm leading-none mb-1">{fs.label}</span>
                  <span className="block text-[10px] opacity-75">{fs.key}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Section 3: Reading Width (Desktop) */}
          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 hidden sm:block">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400">
                📐 螢幕排版寬度
              </span>
              <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-0.5 rounded-lg text-xs font-mono">
                <button
                  type="button"
                  onClick={() => {
                    triggerHaptic('selection');
                    setReadingWidth('standard');
                  }}
                  className={`px-2 py-0.5 rounded-md transition-colors cursor-pointer ${
                    readingWidth === 'standard'
                      ? 'bg-white dark:bg-slate-700 text-teal-700 dark:text-teal-300 font-bold shadow-2xs'
                      : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  專注 (768px)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    triggerHaptic('selection');
                    setReadingWidth('wide');
                  }}
                  className={`px-2 py-0.5 rounded-md transition-colors cursor-pointer ${
                    readingWidth === 'wide'
                      ? 'bg-white dark:bg-slate-700 text-teal-700 dark:text-teal-300 font-bold shadow-2xs'
                      : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  全景 (1152px)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
