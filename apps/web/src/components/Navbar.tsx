'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
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

const categoryFilters = [
  { id: 'all', label: '全部' },
  { id: 'hubs', label: '專題工具' },
  { id: 'mechanics', label: '工程力學' },
  { id: 'materials', label: '材料試驗' },
  { id: 'survey-draft', label: '測量與製圖' },
  { id: 'cases', label: '經典案例' },
  { id: 'goals', label: '證照與升學' },
];

const specialHubs = [
  {
    title: '🔬 互動圖解實驗室 (Interactive Lab)',
    desc: '簡支梁剪力彎矩圖、莫爾圓主應力旋轉、CNS 第三角投影展開、水準儀高與混凝土水灰比模擬器',
    href: '/visualizers',
    badge: '實驗室',
    category: 'hubs',
    tags: ['實驗室', '模擬', '簡支梁', '莫爾圓', '主應力', '第三角', '水準儀', '水灰比', 'u值', 'visualizer', 'sfd', 'bmd'],
  },
  {
    title: '🏗️ 營造現場工程實務手冊 (Field Guide)',
    desc: 'RC 混凝土品質管制、氯離子檢測、高張力螺栓扭矩、深開挖監測、梁穿孔檢討與鋼筋綁紮檢查表',
    href: '/field-guide',
    badge: '現場實務',
    category: 'hubs',
    tags: ['現場', '手冊', '營造', '施工', '品管', '氯離子', '螺栓', '穿梁', '開孔', '坍度', '鋼筋', '保護層', 'eewh', '綠建築'],
  },
  {
    title: '⚡ 統測考點高頻速查指南 (Cheatsheets)',
    desc: '力學、材料、測量、製圖、數學 C 核心公式卡、物理量綱、記憶口訣與 LaTeX 一鍵複製',
    href: '/cheatsheets',
    badge: '公式速查',
    category: 'hubs',
    tags: ['速查', '公式', '考點', '量綱', '口訣', '公式卡', 'cheatsheet', 'latex'],
  },
  {
    title: '🎯 終極目標：三大專業證照地圖',
    desc: '建築師、結構工程技師、土木工程技師報考資格、專業考科、領證執業與工作差異全景導引',
    href: '/goals',
    badge: '證照地圖',
    category: 'goals',
    tags: ['目標', '證照', '建築師', '結構技師', '土木技師', '技師', '高考', '開業'],
  },
  {
    title: '🏛️ 台灣經典建築案例實驗室',
    desc: '臺中國家歌劇院、路思義教堂、921地震園區、台北101、北投圖書館等建築結構與工法解析',
    href: '/cases',
    badge: '建築案例',
    category: 'cases',
    tags: ['案例', '歌劇院', '路思義', '101', '地震', '北投', '建築案例'],
  },
  {
    title: '🎓 116 四技二專土木建築群入學指南',
    desc: '116 考科結構、級分換算、大專院校建築科系志願選填與備審準備指引',
    href: '/exam-116',
    badge: '入學指南',
    category: 'goals',
    tags: ['116', '入學', '統測', '落點', '志願', '土木建築群', '高職'],
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [recentSearches, setRecentSearches] = useState<string[]>(() => {
    try {
      const saved = typeof window !== 'undefined' ? localStorage.getItem('arch_recent_searches') : null;
      return saved ? JSON.parse(saved).slice(0, 5) : [];
    } catch {
      return [];
    }
  });
  const searchInputRef = useRef<HTMLInputElement>(null);

  const saveRecentSearch = (query: string) => {
    if (!query.trim()) return;
    try {
      const next = [query.trim(), ...recentSearches.filter((s) => s !== query.trim())].slice(0, 5);
      setRecentSearches(next);
      localStorage.setItem('arch_recent_searches', JSON.stringify(next));
    } catch {
      // ignore
    }
  };

  // Keyboard shortcut Ctrl+K or Cmd+K to open search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
      if (e.key === 'Escape' && searchOpen) {
        setSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [searchOpen]);

  // Focus input when modal opens
  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    }
  }, [searchOpen]);

  // Filter topics and major hubs for quick search
  const filteredHubs = useMemo(() => {
    let list = specialHubs;
    if (activeCategory === 'hubs') {
      list = specialHubs.filter((h) => h.category === 'hubs');
    } else if (activeCategory === 'cases') {
      list = specialHubs.filter((h) => h.category === 'cases');
    } else if (activeCategory === 'goals') {
      list = specialHubs.filter((h) => h.category === 'goals');
    } else if (activeCategory !== 'all') {
      return [];
    }

    if (!searchQuery.trim()) {
      return activeCategory === 'all' ? [] : list;
    }

    const q = searchQuery.toLowerCase().trim();
    return list.filter(
      (h) =>
        h.title.toLowerCase().includes(q) ||
        h.desc.toLowerCase().includes(q) ||
        h.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [searchQuery, activeCategory]);

  const filteredResults = useMemo(() => {
    let list: Array<{ subjectSlug: string; subjectTitle: string; topicSlug: string; topicTitle: string; desc: string }> = [...topicSearchIndex];

    if (activeCategory === 'mechanics') {
      list = list.filter((t) => t.subjectSlug === 'mechanics');
    } else if (activeCategory === 'materials') {
      list = list.filter((t) => t.subjectSlug === 'materials');
    } else if (activeCategory === 'survey-draft') {
      list = list.filter((t) => t.subjectSlug === 'surveying' || t.subjectSlug === 'drafting');
    } else if (activeCategory === 'hubs' || activeCategory === 'cases' || activeCategory === 'goals') {
      return [];
    }

    if (!searchQuery.trim()) {
      return activeCategory === 'all' ? [] : list.slice(0, 10);
    }

    const q = searchQuery.toLowerCase().trim();
    const results: Array<{ subjectSlug: string; subjectTitle: string; topicSlug: string; topicTitle: string; desc: string }> = [];

    for (const topic of list) {
      if (
        topic.topicTitle.toLowerCase().includes(q) ||
        topic.desc.toLowerCase().includes(q) ||
        topic.subjectTitle.toLowerCase().includes(q)
      ) {
        results.push(topic);
        if (results.length >= 15) break;
      }
    }
    return results;
  }, [searchQuery, activeCategory]);

  // Combined flat items for keyboard arrow navigation
  const flatSearchResults = useMemo(() => {
    const items: Array<{ type: 'hub' | 'lesson'; title: string; href: string }> = [];
    filteredHubs.forEach((h) => items.push({ type: 'hub', title: h.title, href: h.href }));
    filteredResults.forEach((r) =>
      items.push({
        type: 'lesson',
        title: `${r.subjectTitle} · ${r.topicTitle}`,
        href: `/subjects/${r.subjectSlug}/${r.topicSlug}`,
      })
    );
    return items;
  }, [filteredHubs, filteredResults]);

  // Handle arrow keys and enter
  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (flatSearchResults.length > 0 ? (prev + 1) % flatSearchResults.length : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) =>
        flatSearchResults.length > 0 ? (prev - 1 + flatSearchResults.length) % flatSearchResults.length : 0
      );
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (flatSearchResults.length > 0 && flatSearchResults[selectedIndex]) {
        const target = flatSearchResults[selectedIndex];
        saveRecentSearch(searchQuery || target.title);
        setSearchOpen(false);
        router.push(target.href);
      }
    }
  };

  const handleSelectNav = (href: string, title?: string) => {
    if (title) saveRecentSearch(title);
    setSearchOpen(false);
    router.push(href);
  };

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
              <span className="flex size-9 items-center justify-center rounded-xl bg-blue-700 dark:bg-blue-600 text-white font-mono text-base font-bold shadow-sm transition-transform duration-200 group-hover:scale-105">
                ◺
              </span>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-serif text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                    Arch
                  </span>
                  <span className="rounded-full bg-blue-700/10 dark:bg-blue-400/10 px-2 py-0.5 text-[10px] font-mono font-bold text-blue-700 dark:text-blue-300 border border-blue-700/20">
                    V8.01
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
                      ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300'
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
              className="flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 px-3 py-1.5 text-xs font-mono text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700 transition-colors cursor-pointer"
              aria-label="快速搜尋全站章節 (Ctrl+K)"
            >
              <span className="text-sm">🔍</span>
              <span className="hidden md:inline font-sans">搜尋 99 章／公式／實驗室...</span>
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
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                setSearchOpen(true);
              }}
              className="w-full flex items-center justify-between rounded-lg bg-blue-50 dark:bg-blue-950/40 px-3 py-2.5 text-xs font-mono font-bold text-blue-700 dark:text-blue-300 mb-2 border border-blue-200 dark:border-blue-800"
            >
              <span>🔍 全站快速搜尋 (Omnibar)</span>
              <span className="rounded bg-blue-700 px-1.5 py-0.5 text-[10px] text-white">開啟</span>
            </button>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block rounded-lg px-3 py-2 text-sm font-mono font-bold transition-colors ${
                  pathname === link.href
                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300'
                    : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Global Quick Search Omnibar Modal (Cmd+K) */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 p-4 pt-12 sm:pt-20 backdrop-blur-md animate-fade-in"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="w-full max-w-3xl rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Input Header */}
            <div className="flex items-center border-b border-slate-200 dark:border-slate-800 px-4 py-3.5 bg-slate-50/50 dark:bg-slate-800/30">
              <span className="text-xl text-slate-400 mr-3">🔍</span>
              <input
                id="search-input"
                ref={searchInputRef}
                type="text"
                role="combobox"
                aria-expanded="true"
                aria-controls="search-listbox"
                aria-activedescendant={flatSearchResults.length > 0 ? `search-result-${selectedIndex}` : undefined}
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleInputKeyDown}
                placeholder="搜尋 99 個章節、公式速查、現場手冊、圖解實驗室或建築案例..."
                className="w-full bg-transparent text-sm sm:text-base text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden font-sans"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="mr-2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  清除
                </button>
              )}
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="rounded-lg bg-slate-200 dark:bg-slate-800 px-2 py-1 text-xs font-mono text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white cursor-pointer"
              >
                ESC
              </button>
            </div>

            {/* Category Filter Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto px-4 py-2 border-b border-slate-100 dark:border-slate-800/60 bg-white dark:bg-slate-900 text-xs font-mono mobile-scroll">
              <span className="text-slate-400 mr-1 shrink-0 text-[11px]">篩選：</span>
              {categoryFilters.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setSelectedIndex(0);
                  }}
                  className={`rounded-full px-2.5 py-0.5 transition-colors shrink-0 cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-blue-700 text-white font-bold'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div id="search-listbox" role="listbox" className="overflow-y-auto p-3 space-y-3 flex-1">
              {/* Special Hubs Section */}
              {filteredHubs.length > 0 && (
                <div className="space-y-1">
                  <div className="px-3 pt-1 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                    專題工具與核心專區 ({filteredHubs.length})
                  </div>
                  {filteredHubs.map((hub) => {
                    const itemIndex = flatSearchResults.findIndex((i) => i.href === hub.href);
                    const isSelected = itemIndex === selectedIndex;
                    return (
                      <div
                        id={`search-result-${itemIndex}`}
                        role="option"
                        aria-selected={isSelected}
                        key={hub.href}
                        onClick={() => handleSelectNav(hub.href, hub.title)}
                        className={`flex flex-col gap-0.5 rounded-xl p-3 cursor-pointer transition-all border ${
                          isSelected
                            ? 'bg-blue-100 dark:bg-blue-950/80 border-blue-500 shadow-xs'
                            : 'bg-blue-50/40 dark:bg-blue-950/20 hover:bg-blue-100/70 dark:hover:bg-blue-950/50 border-blue-100/80 dark:border-blue-900/30'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="rounded bg-blue-700 px-1.5 py-0.5 text-[10px] font-mono font-bold text-white">
                              {hub.badge}
                            </span>
                            <span className="font-bold text-sm text-slate-900 dark:text-white">
                              {hub.title}
                            </span>
                          </div>
                          {isSelected && <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-bold">↵ 前往</span>}
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-1 mt-0.5">
                          {hub.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Lesson Topics Section */}
              {filteredResults.length > 0 && (
                <div className="space-y-1">
                  <div className="px-3 pt-1 text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                    教學章節與知識點 ({filteredResults.length})
                  </div>
                  {filteredResults.map((item) => {
                    const targetHref = `/subjects/${item.subjectSlug}/${item.topicSlug}`;
                    const itemIndex = flatSearchResults.findIndex((i) => i.href === targetHref);
                    const isSelected = itemIndex === selectedIndex;
                    return (
                      <div
                        id={`search-result-${itemIndex}`}
                        role="option"
                        aria-selected={isSelected}
                        key={`${item.subjectSlug}-${item.topicSlug}`}
                        onClick={() => handleSelectNav(targetHref, `${item.subjectTitle} · ${item.topicTitle}`)}
                        className={`flex flex-col gap-0.5 rounded-xl p-3 cursor-pointer transition-all border ${
                          isSelected
                            ? 'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-600'
                            : 'border-transparent hover:bg-slate-50 dark:hover:bg-slate-800/60'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="rounded bg-blue-700/10 px-1.5 py-0.5 text-[10px] font-mono font-bold text-blue-700 dark:text-blue-300">
                              {item.subjectTitle}
                            </span>
                            <span className="font-bold text-sm text-slate-900 dark:text-white">
                              {item.topicTitle}
                            </span>
                          </div>
                          {isSelected && <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-bold">↵ 前往</span>}
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Empty state when searching with no matches */}
              {filteredHubs.length === 0 && filteredResults.length === 0 && searchQuery.trim() && (
                <div className="p-8 text-center text-sm text-slate-500 space-y-2">
                  <p>沒有找到符合「<span className="font-bold text-slate-900 dark:text-white">{searchQuery}</span>」的章節或專區。</p>
                  <p className="text-xs text-slate-400">試試搜尋：簡支梁、莫爾圓、水灰比、第三角投影、高張力螺栓或建築師證照</p>
                </div>
              )}

              {/* Initial Suggestions when search is empty */}
              {!searchQuery.trim() && activeCategory === 'all' && (
                <div className="p-3 text-xs text-slate-500 dark:text-slate-400 space-y-4">
                  {recentSearches.length > 0 && (
                    <div>
                      <div className="font-bold uppercase tracking-wider text-[10px] mb-2 text-slate-400">🕒 最近搜尋：</div>
                      <div className="flex flex-wrap gap-1.5">
                        {recentSearches.map((term) => (
                          <button
                            key={term}
                            type="button"
                            onClick={() => setSearchQuery(term)}
                            className="rounded-lg bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-slate-700 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-950/60 cursor-pointer flex items-center gap-1"
                          >
                            <span>{term}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <div className="font-bold uppercase tracking-wider text-[10px] mb-2 text-slate-400">⚡ 核心功能快速直達：</div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <div
                        onClick={() => handleSelectNav('/visualizers', '互動圖解實驗室')}
                        className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 hover:border-blue-500 transition-colors cursor-pointer"
                      >
                        <span className="font-bold text-slate-900 dark:text-white block">🔬 互動圖解實驗室</span>
                        <span className="text-[10px] text-slate-400">簡支梁／莫爾圓／第三角展開</span>
                      </div>
                      <div
                        onClick={() => handleSelectNav('/field-guide', '營造現場手冊')}
                        className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 hover:border-teal-500 transition-colors cursor-pointer"
                      >
                        <span className="font-bold text-slate-900 dark:text-white block">🏗️ 營造現場手冊</span>
                        <span className="text-[10px] text-slate-400">RC品管／螺栓扭矩／穿梁防錯</span>
                      </div>
                      <div
                        onClick={() => handleSelectNav('/cheatsheets', '考點速查指南')}
                        className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 hover:border-amber-500 transition-colors cursor-pointer"
                      >
                        <span className="font-bold text-slate-900 dark:text-white block">⚡ 考點速查指南</span>
                        <span className="text-[10px] text-slate-400">高頻公式卡／量綱／記憶口訣</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="font-bold uppercase tracking-wider text-[10px] mb-2 text-slate-400">💡 熱門推薦關鍵字：</div>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        '簡支梁剪力彎矩',
                        '莫爾圓主應力',
                        '水準儀視線高',
                        '混凝土水灰比',
                        '第三角投影法',
                        '鋼筋保護層',
                        '建築師高考',
                        '結構技師考科',
                        '臺中國家歌劇院',
                        '路思義教堂',
                      ].map((k) => (
                        <button
                          key={k}
                          type="button"
                          onClick={() => setSearchQuery(k)}
                          className="rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-slate-700 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-950 cursor-pointer transition-colors"
                        >
                          {k}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer Navigation Hints */}
            <div className="border-t border-slate-100 dark:border-slate-800 px-4 py-2 bg-slate-50/50 dark:bg-slate-900 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <div className="flex items-center gap-3">
                <span><kbd className="rounded bg-white dark:bg-slate-800 border px-1">↑</kbd> <kbd className="rounded bg-white dark:bg-slate-800 border px-1">↓</kbd> 移動焦點</span>
                <span><kbd className="rounded bg-white dark:bg-slate-800 border px-1">↵</kbd> 選取前往</span>
                <span><kbd className="rounded bg-white dark:bg-slate-800 border px-1">ESC</kbd> 關閉</span>
              </div>
              <span className="hidden sm:inline">Arch V8.01 Omnibar</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
