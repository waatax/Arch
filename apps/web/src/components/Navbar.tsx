'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import { allSubjects } from '@/data/subjects';

const navLinks = [
  { href: '/', label: '首頁' },
  { href: '/exam-116', label: '116 選考指南' },
  { href: '/curriculum', label: '課程地圖' },
  { href: '/practice', label: '歷屆模擬' },
  { href: '/cases', label: '建築案例' },
  { href: '/exams', label: '統測題庫' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Keyboard shortcut Ctrl+K or Cmd+K to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filter topics for quick search
  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();
    const results: Array<{ subjectSlug: string; subjectTitle: string; topicSlug: string; topicTitle: string; desc: string }> = [];

    for (const sub of allSubjects) {
      for (const t of sub.topics) {
        if (
          t.title.toLowerCase().includes(q) ||
          t.desc.toLowerCase().includes(q) ||
          sub.title.toLowerCase().includes(q)
        ) {
          results.push({
            subjectSlug: sub.slug,
            subjectTitle: sub.title,
            topicSlug: t.slug,
            topicTitle: t.title,
            desc: t.desc
          });
          if (results.length >= 12) break;
        }
      }
      if (results.length >= 12) break;
    }
    return results;
  }, [searchQuery]);

  return (
    <>
      <nav
        className="sticky top-0 z-50 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md transition-colors"
        aria-label="主要導覽"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2.5 group" aria-label="Arch 學習平台首頁">
              <span className="flex size-9 items-center justify-center rounded-xl bg-blue-600 dark:bg-blue-500 text-white font-mono text-base font-bold shadow-sm transition-transform duration-200 group-hover:scale-105">
                ◺
              </span>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-serif text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                    Arch
                  </span>
                  <span className="rounded-full bg-blue-600/10 dark:bg-blue-400/10 px-2 py-0.5 text-[10px] font-mono font-bold text-blue-700 dark:text-blue-300 border border-blue-600/20">
                    V5.0
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 -mt-1 hidden sm:inline">
                  台灣高工建築科
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-all ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-950/50 font-bold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Search Trigger, Exam Badge & Theme Controls */}
          <div className="flex items-center gap-2">
            {/* Quick Search Button */}
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/80 px-3 py-1.5 text-xs text-slate-500 dark:text-slate-400 hover:border-blue-400 dark:hover:border-blue-500 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer shadow-2xs"
              aria-label="搜尋章節與考點"
            >
              <span>🔍 搜尋考點</span>
              <kbd className="hidden lg:inline-block rounded bg-white dark:bg-slate-900 px-1.5 py-0.5 text-[10px] font-mono border border-slate-200 dark:border-slate-700">
                ⌘K
              </kbd>
            </button>

            {/* TVET Countdown Badge */}
            <div className="hidden xl:flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 text-[11px] font-mono text-emerald-700 dark:text-emerald-300">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>115 統測衝刺</span>
            </div>

            <div className="hidden sm:block h-5 w-px bg-slate-200 dark:bg-slate-800" />

            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex size-10 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 text-lg text-slate-900 dark:text-white md:hidden hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label={mobileMenuOpen ? '關閉選單' : '開啟選單'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-4 md:hidden shadow-lg space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex h-11 items-center rounded-lg px-4 text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Global Quick Search Modal (Cmd+K) */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 p-4 pt-20 backdrop-blur-sm animate-fade-in"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="w-full max-w-2xl rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center border-b border-slate-200 dark:border-slate-800 px-4 py-3">
              <span className="text-lg text-slate-400 mr-3">🔍</span>
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="搜尋 86 個章節、公式、結構力學、測量、材料或建築案例..."
                className="w-full bg-transparent text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden font-sans"
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="rounded-lg bg-slate-100 dark:bg-slate-800 px-2 py-1 text-xs font-mono text-slate-500 hover:text-slate-900 dark:hover:text-white"
              >
                ESC
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-2">
              {filteredResults.length > 0 ? (
                <div className="space-y-1">
                  {filteredResults.map((item) => (
                    <Link
                      key={`${item.subjectSlug}-${item.topicSlug}`}
                      href={`/subjects/${item.subjectSlug}/${item.topicSlug}`}
                      onClick={() => setSearchOpen(false)}
                      className="flex flex-col gap-0.5 rounded-xl p-3 hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span className="rounded bg-blue-600/10 px-1.5 py-0.5 text-[10px] font-mono font-bold text-blue-700 dark:text-blue-300">
                          {item.subjectTitle}
                        </span>
                        <span className="font-bold text-sm text-slate-900 dark:text-white">
                          {item.topicTitle}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                        {item.desc}
                      </p>
                    </Link>
                  ))}
                </div>
              ) : searchQuery.trim() ? (
                <div className="p-8 text-center text-sm text-slate-500">
                  沒有找到符合「{searchQuery}」的章節或考點。
                </div>
              ) : (
                <div className="p-6 text-xs text-slate-500 dark:text-slate-400 space-y-2">
                  <div className="font-bold uppercase tracking-wider text-[10px]">💡 熱門搜尋建議：</div>
                  <div className="flex flex-wrap gap-2">
                    {['向量分解', '簡支梁剪力彎矩', '水準儀視線高', '混凝土坍度', '第三角投影法', '臺中國家歌劇院', '九二一斷層'].map((k) => (
                      <button
                        key={k}
                        onClick={() => setSearchQuery(k)}
                        className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-slate-700 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-950 cursor-pointer"
                      >
                        {k}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
