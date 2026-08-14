'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import { topicSearchIndex } from '@/data/topicSearchIndex';

const navLinks = [
  { href: '/', label: '首頁' },
  { href: '/curriculum', label: '課程地圖' },
  { href: '/visualizers', label: '圖解實驗室' },
  { href: '/field-guide', label: '現場手冊' },
  { href: '/cheatsheets', label: '速查指南' },
  { href: '/practice', label: '歷屆模擬' },
  { href: '/cases', label: '建築案例' },
  { href: '/goals', label: '終極目標' },
  { href: '/exam-116', label: '入學指南' },
  { href: '/resources', label: '學習資源' },
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

  // Filter topics and major hubs for quick search
  const filteredHubs = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();
    const hubs = [
      { title: '🔬 互動圖解實驗室 (Interactive Lab)', desc: '簡支梁剪力彎矩圖、莫爾圓主應力旋轉、CNS 第三角投影展開、水準儀高與混凝土水灰比模擬器', href: '/visualizers', badge: '實驗室', tags: ['實驗室', '模擬', '簡支梁', '莫爾圓', '主應力', '第三角', '水準儀', '水灰比', 'u值', 'visualizer', 'sfd', 'bmd'] },
      { title: '🏗️ 營造現場工程實務手冊 (Field Guide)', desc: 'RC 混凝土品質管制、氯離子檢測、高張力螺栓扭矩、深開挖監測、梁穿孔檢討與綠建築 EEWH', href: '/field-guide', badge: '現場實務', tags: ['現場', '手冊', '營造', '施工', '品管', '氯離子', '螺栓', '穿梁', '開孔', '坍度', 'eewh', '綠建築'] },
      { title: '⚡ 統測考點高頻速查指南 (Cheatsheets)', desc: '力學、材料、測量、製圖、數學 C 核心公式卡、物理量綱、記憶口訣與 LaTeX 一鍵複製', href: '/cheatsheets', badge: '公式速查', tags: ['速查', '公式', '考點', '量綱', '口訣', '公式卡', 'cheatsheet', 'latex'] },
      { title: '🎯 終極目標：三大專業證照地圖', desc: '建築師、結構工程技師、土木工程技師報考資格、專業考科、領證執業與工作差異全景導引', href: '/goals', badge: '證照地圖', tags: ['目標', '證照', '建築師', '結構技師', '土木技師', '技師', '高考', '開業'] },
      { title: '🏛️ 台灣經典建築案例實驗室', desc: '臺中國家歌劇院、路思義教堂、921地震園區、台北101、北投圖書館等建築結構與工法解析', href: '/cases', badge: '建築案例', tags: ['案例', '歌劇院', '路思義', '101', '地震', '北投', '建築案例'] },
    ];

    return hubs.filter((h) =>
      h.title.toLowerCase().includes(q) ||
      h.desc.toLowerCase().includes(q) ||
      h.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase().trim();
    const results: Array<{ subjectSlug: string; subjectTitle: string; topicSlug: string; topicTitle: string; desc: string }> = [];

    for (const topic of topicSearchIndex) {
      if (
        topic.topicTitle.toLowerCase().includes(q) ||
        topic.desc.toLowerCase().includes(q) ||
        topic.subjectTitle.toLowerCase().includes(q)
      ) {
        results.push(topic);
        if (results.length >= 12) break;
      }
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
          <div className="flex shrink-0 items-center gap-3">
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
                    V7.3
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 -mt-1 hidden sm:inline">
                  台灣高工建築科
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-2.5 py-1.5 text-xs font-mono font-bold transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right Actions: Quick Search, Theme Toggle, Mobile Menu Button */}
          <div className="flex items-center gap-2">
            {/* Quick Search Button */}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 px-3 py-1.5 text-xs font-mono text-slate-500 hover:border-slate-300 dark:hover:border-slate-700 transition-colors cursor-pointer"
              aria-label="快速搜尋全站章節 (Ctrl+K)"
            >
              <span className="text-sm">🔍</span>
              <span className="hidden md:inline">搜尋章節／公式／案例...</span>
              <span className="hidden md:inline-block rounded bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 px-1 text-[10px] text-slate-400">
                Ctrl+K
              </span>
            </button>

            <ThemeToggle />

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="flex size-9 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors xl:hidden cursor-pointer"
              aria-label={mobileMenuOpen ? '關閉主選單' : '開啟主選單'}
              aria-expanded={mobileMenuOpen}
            >
              <span className="text-lg font-bold">{mobileMenuOpen ? '✕' : '☰'}</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 xl:hidden space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block rounded-lg px-3 py-2 text-sm font-mono font-bold transition-colors ${
                  pathname === link.href
                    ? 'bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400'
                    : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
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
                placeholder="搜尋 99 個章節、公式速查、現場手冊、圖解實驗室或建築案例..."
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
              {filteredHubs.length > 0 && (
                <div className="mb-2 space-y-1 border-b border-slate-100 dark:border-slate-800 pb-2">
                  <div className="px-3 pt-1 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                    專題工具與核心專區 (Special Hubs)
                  </div>
                  {filteredHubs.map((hub) => (
                    <Link
                      key={hub.href}
                      href={hub.href}
                      onClick={() => setSearchOpen(false)}
                      className="flex flex-col gap-0.5 rounded-xl p-3 bg-blue-50/50 dark:bg-blue-950/20 hover:bg-blue-100 dark:hover:bg-blue-950/60 transition-colors border border-blue-100 dark:border-blue-900/40"
                    >
                      <div className="flex items-center gap-2">
                        <span className="rounded bg-blue-600 px-1.5 py-0.5 text-[10px] font-mono font-bold text-white">
                          {hub.badge}
                        </span>
                        <span className="font-bold text-sm text-slate-900 dark:text-white">
                          {hub.title}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-1">
                        {hub.desc}
                      </p>
                    </Link>
                  ))}
                </div>
              )}

              {filteredResults.length > 0 ? (
                <div className="space-y-1">
                  {filteredHubs.length > 0 && (
                    <div className="px-3 pt-1 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      教學章節與知識點 (Curriculum Lessons)
                    </div>
                  )}
                  {filteredResults.map((item) => (
                    <Link
                      key={`${item.subjectSlug}-${item.topicSlug}`}
                      href={`/subjects/${item.subjectSlug}/${item.topicSlug}`}
                      onClick={() => setSearchOpen(false)}
                      className="flex flex-col gap-0.5 rounded-xl p-3 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
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
              ) : filteredHubs.length === 0 && searchQuery.trim() ? (
                <div className="p-8 text-center text-sm text-slate-500">
                  沒有找到符合「{searchQuery}」的章節或專區。
                </div>
              ) : !searchQuery.trim() ? (
                <div className="p-6 text-xs text-slate-500 dark:text-slate-400 space-y-3">
                  <div className="font-bold uppercase tracking-wider text-[10px]">💡 熱門推薦專區與搜尋：</div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    <Link
                      href="/visualizers"
                      onClick={() => setSearchOpen(false)}
                      className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 hover:border-blue-500 transition-colors"
                    >
                      <span className="font-bold text-slate-900 dark:text-white block">🔬 互動圖解實驗室</span>
                      <span className="text-[10px] text-slate-400">梁受力／莫爾圓／投影</span>
                    </Link>
                    <Link
                      href="/field-guide"
                      onClick={() => setSearchOpen(false)}
                      className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 hover:border-teal-500 transition-colors"
                    >
                      <span className="font-bold text-slate-900 dark:text-white block">🏗️ 營造現場手冊</span>
                      <span className="text-[10px] text-slate-400">RC品管／螺栓／穿梁</span>
                    </Link>
                    <Link
                      href="/cheatsheets"
                      onClick={() => setSearchOpen(false)}
                      className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 hover:border-amber-500 transition-colors"
                    >
                      <span className="font-bold text-slate-900 dark:text-white block">⚡ 考點速查指南</span>
                      <span className="text-[10px] text-slate-400">高頻公式／量綱／口訣</span>
                    </Link>
                  </div>
                  <div className="pt-2 flex flex-wrap gap-2">
                    {['簡支梁剪力彎矩', '莫爾圓主應力', '水準儀視線高', '混凝土水灰比', '第三角投影法', '三大專業證照', '臺中國家歌劇院'].map((k) => (
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
              ) : null}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
