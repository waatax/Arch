'use client';

import { useState, useMemo, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Volume2, VolumeX, ChevronDown } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { topicSearchIndex } from '@/data/topicSearchIndex';
import { useGamificationStore } from '@/lib/store/gamificationStore';
import { triggerHaptic } from '@/lib/haptics';
import {
  IconProps,
  IconTrussBeam,
  IconDraftingTools,
  IconSurveyingLevel,
  IconSlumpCone,
  IconClassicalOrder,
  IconBIMModel,
  IconFieldSafety,
  IconExamLicense,
  IconStudioForge,
  IconConstellationMap,
  IconFastFormula,
  IconTopicDiscovery,
  IconPerspective,
  IconGreenBuilding,
} from '@/components/ui/ArchitecturalIcons';

// ── 專業分組導覽體系 (信達雅架構) ──
interface NavGroupItem {
  href: string;
  label: string;
  desc: string;
  icon: React.ComponentType<IconProps>;
  badge?: string;
}

interface NavGroup {
  id: string;
  label: string;
  icon: React.ComponentType<IconProps>;
  items: NavGroupItem[];
}

const navGroups: NavGroup[] = [
  {
    id: 'curriculum',
    label: '課程與學科',
    icon: IconDraftingTools,
    items: [
      {
        href: '/curriculum',
        label: '學習地圖總覽',
        desc: '108 課綱 13 科 120 主題三年三階完整路徑',
        icon: IconDraftingTools,
        badge: '全學程',
      },
      {
        href: '/subjects/mechanics',
        label: '工程力學 (專一)',
        desc: '靜力平衡、桁架零力桿、SFD/BMD 剪力彎矩圖與莫爾圓',
        icon: IconTrussBeam,
      },
      {
        href: '/subjects/materials',
        label: '材料與試驗 (專一)',
        desc: '混凝土坍度、水灰比、抗壓強度、水泥骨材與鋼筋竹節',
        icon: IconSlumpCone,
      },
      {
        href: '/subjects/surveying',
        label: '測量實習 (專二)',
        desc: '水準儀視距差、高程閉合平差、經緯儀測角與全測站',
        icon: IconSurveyingLevel,
      },
      {
        href: '/subjects/drafting',
        label: '製圖實習 (專二)',
        desc: 'CNS 11567 建築製圖標準、第三角投影、透視消點與詳圖',
        icon: IconPerspective,
      },
      {
        href: '/prerequisites',
        label: '先備知識探索',
        desc: '國中幾何、物理與英文基底補強，無痛銜接高職',
        icon: IconTopicDiscovery,
      },
      {
        href: '/review',
        label: '學期考前複習',
        desc: '高一至高三各學期單元重難點手冊與 A4 複習筆記',
        icon: IconFastFormula,
      },
    ],
  },
  {
    id: 'labs',
    label: '圖解與工坊',
    icon: IconTrussBeam,
    items: [
      {
        href: '/visualizers',
        label: '互動圖解實驗室',
        desc: '簡支梁受力、莫爾圓主應力、第三角折疊箱與水準調平',
        icon: IconTrussBeam,
        badge: '8大沙盒',
      },
      {
        href: '/studio',
        label: '幾何名築大師工坊',
        desc: '手作路思義教堂、台中歌劇院與台北 101 幾何力學',
        icon: IconStudioForge,
        badge: '3D 幾何',
      },
      {
        href: '/constellation',
        label: '建築大師技能星空',
        desc: '13 科 120 主題跨領域星系網絡，點亮力學材料恆星',
        icon: IconConstellationMap,
      },
      {
        href: '/quest',
        label: '60 天冒險戰役',
        desc: '高二開學情境式工程任務、懸賞委託與藍圖碎片',
        icon: IconFieldSafety,
      },
    ],
  },
  {
    id: 'field',
    label: '實務與工具',
    icon: IconBIMModel,
    items: [
      {
        href: '/cad-software',
        label: '建築電腦繪圖全鑑',
        desc: 'AutoCAD、Revit BIM、SketchUp、Blender、Rhino 與即時光追',
        icon: IconBIMModel,
        badge: '8大軟體',
      },
      {
        href: '/field-guide',
        label: '營造工程現場手冊',
        desc: '施工規範、CNS 坍度氯離子、高張力螺栓與鋼筋綁紮防錯',
        icon: IconFieldSafety,
      },
      {
        href: '/cheatsheets',
        label: '考點高頻速查指南',
        desc: '力學材料測量核心公式卡、物理量綱與一鍵複製 LaTeX',
        icon: IconFastFormula,
        badge: '公式卡',
      },
      {
        href: '/cases',
        label: '台灣經典建築案例',
        desc: '臺中國家歌劇院、路思義教堂、台北 101 與 921 園區解析',
        icon: IconClassicalOrder,
      },
    ],
  },
  {
    id: 'pathway',
    label: '建築之路與升學',
    icon: IconClassicalOrder,
    items: [
      {
        href: '/pathway',
        label: '建築之路：5年制課綱',
        desc: '大學 5 年制 B.Arch 10 學期 Studio、8 大學術領域與評圖指南',
        icon: IconClassicalOrder,
        badge: 'B.Arch',
      },
      {
        href: '/practice',
        label: '近五年統測全真模擬',
        desc: '111–115 年全科目 925 題逐題五段式解析與錯題 X 光',
        icon: IconFastFormula,
        badge: '925題',
      },
      {
        href: '/exam-116',
        label: '116 統測入學指南',
        desc: '考科結構、級分換算、大專院校建築科系選填與備審指引',
        icon: IconExamLicense,
      },
      {
        href: '/goals',
        label: '終極目標',
        desc: '建築師、結構工程技師、土木工程技師報考資格與執業差異',
        icon: IconExamLicense,
        badge: '證照',
      },
      {
        href: '/resources',
        label: '資格考試法規資源',
        desc: '考選部高考大綱、命題大綱、公會權威與歷屆試題庫',
        icon: IconGreenBuilding,
      },
    ],
  },
];

const categoryFilters = [
  { id: 'all', label: '全部' },
  { id: 'cad', label: '電腦繪圖' },
  { id: 'hubs', label: '專題工具' },
  { id: 'mechanics', label: '工程力學' },
  { id: 'materials', label: '材料試驗' },
  { id: 'survey-draft', label: '測量與製圖' },
  { id: 'cases', label: '經典案例' },
  { id: 'goals', label: '證照與升學' },
];

const specialHubs = [
  {
    title: '🖥️ 建築電腦繪圖軟體全鑑 (CAD / BIM)',
    desc: '業界學界 8 大主力軟體全鑑（SketchUp, Blender, AutoCAD, Revit, 3ds Max, ArchiCAD, Rhino, 即時光追引擎），含新手 10 步 SOP、快捷鍵速查與 7 輪深度進化指南',
    href: '/cad-software',
    badge: '電腦繪圖',
    category: 'cad',
    tags: ['電腦繪圖', 'cad', 'sketchup', 'blender', 'autocad', 'revit', '3dsmax', 'archicad', 'rhino', 'bim', '建築製圖', '3d建模', '渲染', 'enscape', 'lumion', 'd5', 'twinmotion', '繪圖軟體'],
  },
  {
    title: '🏛️ 建築之路：大學建築系 5 年制完整課綱 (Architecture Pathway)',
    desc: '5 年 10 學期進程、8 大核心領域（設計Studio、史論、構造、環控EEWH、結構系統、敷地、法規實務、BIM）與評圖文化指南',
    href: '/pathway',
    badge: '建築之路',
    category: 'goals',
    tags: ['建築之路', '大學建築系', 'b.arch', '課綱', 'studio', '評圖', '建築設計', '建築史', '構造', '細部', '環控', 'eewh', '結構系統', '敷地', '建築師', 'pathway'],
  },
  {
    title: '🔬 互動圖解實驗室 (Interactive Lab)',
    desc: '簡支梁剪力彎矩圖、莫爾圓主應力旋轉、CNS 第三角投影展開、水準儀高程與混凝土水灰比模擬器',
    href: '/visualizers',
    badge: '實驗室',
    category: 'hubs',
    tags: ['實驗室', '模擬', '簡支梁', '莫爾圓', '主應力', '第三角', '水準儀', '水灰比', 'u值', 'visualizer', 'sfd', 'bmd'],
  },
  {
    title: '✨ 建築大師技能星空圖 (Constellation)',
    desc: '13 科 120 主題專業技能星空圖，點亮力學、材料、測量、製圖與數學 C 跨領域星系網絡',
    href: '/constellation',
    badge: '技能星空',
    category: 'hubs',
    tags: ['星空', '技能樹', '星座', '恆星', '力學星系', '材料星系', '測量星系', '製圖星系', '數學c', 'constellation'],
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
  {
    title: '📑 資格考試資源彙整 (Qualifications & Exam Directory)',
    desc: '考選部專技高考（建築師、結構技師、土木技師）、考試院、工程會、公會權威與統測官方考綱一站式彙整',
    href: '/resources',
    badge: '資格考試',
    category: 'goals',
    tags: ['資格考試', '資源', '考選部', '考試院', '歷屆試題', '命題大綱', '建築師', '結構技師', '土木技師', '技師報', '技術士'],
  },
  {
    title: '📝 近五年統測全科目題庫與全真模擬',
    desc: '111–115 年國文、英文、數學(C)、專一、專二共 925 題全題庫逐題解析與線上測驗',
    href: '/practice',
    badge: '歷屆模擬',
    category: 'hubs',
    tags: ['題庫', '歷屆', '模擬', '測驗', '925題', '統測', '刷題', '解析'],
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { soundEnabled, toggleSound } = useGamificationStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpandedGroup, setMobileExpandedGroup] = useState<string | null>('curriculum');

  const [recentSearches, setRecentSearches] = useState<string[]>(() => {
    try {
      const saved = typeof window !== 'undefined' ? localStorage.getItem('arch_recent_searches') : null;
      return saved ? JSON.parse(saved).slice(0, 5) : [];
    } catch {
      return [];
    }
  });

  const searchInputRef = useRef<HTMLInputElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);

  // 關閉下拉選單（點擊外部）
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navContainerRef.current && !navContainerRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // 路由切換時關閉所有浮層（依據 React 官方模式，在渲染階段調整狀態，避免 cascading render）
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  }

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
        triggerHaptic('medium');
        setSearchOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setSearchOpen(false);
        setOpenDropdown(null);
      }
    };
    const handleCustomOpen = () => {
      triggerHaptic('medium');
      setSearchOpen(true);
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('arch:open-search', handleCustomOpen);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('arch:open-search', handleCustomOpen);
    };
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
    if (activeCategory === 'cad') {
      list = specialHubs.filter((h) => h.category === 'cad');
    } else if (activeCategory === 'hubs') {
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
    let list = [...topicSearchIndex];

    if (activeCategory === 'mechanics') {
      list = list.filter((t) => t.subjectSlug === 'mechanics');
    } else if (activeCategory === 'materials') {
      list = list.filter((t) => t.subjectSlug === 'materials');
    } else if (activeCategory === 'survey-draft') {
      list = list.filter((t) => t.subjectSlug === 'surveying' || t.subjectSlug === 'drafting');
    } else if (activeCategory === 'hubs' || activeCategory === 'cases' || activeCategory === 'goals' || activeCategory === 'cad') {
      return [];
    }

    if (!searchQuery.trim()) {
      return activeCategory === 'all' ? [] : list.slice(0, 10);
    }

    const q = searchQuery.toLowerCase().trim();
    const results = [];

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
        ref={navContainerRef}
        className="sticky top-0 z-50 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md transition-colors"
        aria-label="主要導覽"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          {/* 品牌標誌與標語 */}
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
                    V9.00
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 -mt-1 hidden sm:inline">
                  台灣高工建築科
                </span>
              </div>
            </Link>
          </div>

          {/* ── 桌面版分組導覽 (信達雅建築結構化選單) ── */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-colors ${
                pathname === '/'
                  ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300'
                  : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
              }`}
            >
              首頁
            </Link>

            {navGroups.map((group) => {
              const isOpen = openDropdown === group.id;
              const isGroupActive = group.items.some((item) => pathname.startsWith(item.href) && item.href !== '/');
              const GroupIcon = group.icon;

              return (
                <div key={group.id} className="relative">
                  <button
                    type="button"
                    onClick={() => {
                      triggerHaptic('light');
                      setOpenDropdown((prev) => (prev === group.id ? null : group.id));
                    }}
                    onMouseEnter={() => setOpenDropdown(group.id)}
                    className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isGroupActive || isOpen
                        ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300'
                        : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                    }`}
                    aria-expanded={isOpen}
                  >
                    <GroupIcon size={16} />
                    <span>{group.label}</span>
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${isOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`}
                    />
                  </button>

                  {/* 懸浮 Mega-Menu 下拉浮層 */}
                  {isOpen && (
                    <div
                      onMouseLeave={() => setOpenDropdown(null)}
                      className="absolute left-0 top-full pt-2 w-80 sm:w-96 z-50 animate-fade-in"
                    >
                      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl p-3 shadow-2xl shadow-slate-900/10">
                        <div className="px-3 py-1.5 border-b border-slate-100 dark:border-slate-800/80 mb-1 flex items-center justify-between">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                            {group.label} 專區導覽
                          </span>
                          <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400">
                            {group.items.length} 個子項目
                          </span>
                        </div>
                        <div className="space-y-1">
                          {group.items.map((item) => {
                            const ItemIcon = item.icon;
                            const isActive = pathname === item.href;
                            return (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => {
                                  triggerHaptic('selection');
                                  setOpenDropdown(null);
                                }}
                                className={`group flex items-start gap-3 p-2.5 rounded-xl transition-all ${
                                  isActive
                                    ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300'
                                    : 'hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-800 dark:text-slate-200'
                                }`}
                              >
                                <div
                                  className={`p-2 rounded-lg shrink-0 mt-0.5 transition-colors ${
                                    isActive
                                      ? 'bg-blue-600 text-white'
                                      : 'bg-slate-100 dark:bg-slate-800 text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600 dark:group-hover:bg-blue-950 dark:group-hover:text-blue-300'
                                  }`}
                                >
                                  <ItemIcon size={18} strokeWidth={1.75} />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <div className="flex items-center justify-between gap-1">
                                    <span className="font-serif font-bold text-xs group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                      {item.label}
                                    </span>
                                    {item.badge && (
                                      <span className="rounded bg-blue-100 dark:bg-blue-900/40 px-1.5 py-0.2 text-[9px] font-mono font-bold text-blue-700 dark:text-blue-300 shrink-0">
                                        {item.badge}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                                    {item.desc}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ── 右側動作區：快速搜尋、主題切換、音效與行動版漢堡選單 ── */}
          <div className="flex items-center gap-2">
            {/* Quick Search Button (Omnibar) */}
            <button
              type="button"
              onClick={() => {
                triggerHaptic('medium');
                setSearchOpen(true);
              }}
              className="flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 px-3 py-1.5 text-xs font-mono text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700 transition-all active:scale-95 cursor-pointer"
              aria-label="快速搜尋全站章節 (Ctrl+K)"
            >
              <IconTopicDiscovery size={16} className="text-blue-600 dark:text-blue-400" />
              <span className="hidden md:inline font-sans">搜尋 120 主題／實驗／公式...</span>
              <span className="hidden md:inline-block rounded bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 px-1 text-[10px] text-slate-400">
                Ctrl+K
              </span>
            </button>

            <ThemeToggle />

            {/* Sound Effects Toggle Button */}
            <button
              type="button"
              onClick={() => {
                triggerHaptic('light');
                toggleSound();
              }}
              className="flex size-9 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all active:scale-95 cursor-pointer"
              aria-label={soundEnabled ? '關閉音效' : '開啟音效'}
              title={soundEnabled ? '音效已開啟 (點擊靜音)' : '音效已靜音 (點擊開啟)'}
            >
              {soundEnabled ? <Volume2 className="size-4 text-blue-600 dark:text-blue-400" /> : <VolumeX className="size-4 text-slate-400" />}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => {
                triggerHaptic('light');
                setMobileMenuOpen((prev) => !prev);
              }}
              className="flex size-9 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all active:scale-95 lg:hidden cursor-pointer"
              aria-label={mobileMenuOpen ? '關閉主選單' : '開啟主選單'}
              aria-expanded={mobileMenuOpen}
            >
              <span className="text-lg font-bold">{mobileMenuOpen ? '✕' : '☰'}</span>
            </button>
          </div>
        </div>

        {/* ── 行動版結構化抽屜選單 ── */}
        {mobileMenuOpen && (
          <div className="border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl px-4 py-4 lg:hidden max-h-[80vh] overflow-y-auto space-y-3">
            <button
              type="button"
              onClick={() => {
                triggerHaptic('medium');
                setMobileMenuOpen(false);
                setSearchOpen(true);
              }}
              className="w-full flex items-center justify-between rounded-xl bg-blue-50 dark:bg-blue-950/40 px-4 py-3 text-xs font-mono font-bold text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
            >
              <div className="flex items-center gap-2">
                <IconTopicDiscovery size={18} />
                <span>全站快速搜尋 (Omnibar · 120 主題)</span>
              </div>
              <span className="rounded bg-blue-700 px-2 py-0.5 text-[10px] text-white">開啟</span>
            </button>

            <Link
              href="/"
              onClick={() => {
                triggerHaptic('selection');
                setMobileMenuOpen(false);
              }}
              className={`block rounded-xl px-4 py-2.5 text-sm font-bold transition ${
                pathname === '/'
                  ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300'
                  : 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              首頁
            </Link>

            {/* 行動端手風琴分類 */}
            <div className="space-y-2 pt-1 border-t border-slate-200/60 dark:border-slate-800/60">
              {navGroups.map((group) => {
                const isExpanded = mobileExpandedGroup === group.id;
                const GroupIcon = group.icon;

                return (
                  <div key={group.id} className="rounded-xl border border-slate-200/80 dark:border-slate-800/80 overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setMobileExpandedGroup((prev) => (prev === group.id ? null : group.id))}
                      className="w-full flex items-center justify-between p-3 bg-slate-50/50 dark:bg-slate-800/40 text-left font-bold text-xs text-slate-800 dark:text-slate-200"
                    >
                      <div className="flex items-center gap-2">
                        <GroupIcon size={18} className="text-blue-600 dark:text-blue-400" />
                        <span>{group.label}</span>
                      </div>
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${isExpanded ? 'rotate-180 text-blue-600' : 'text-slate-400'}`}
                      />
                    </button>

                    {isExpanded && (
                      <div className="p-2 space-y-1 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
                        {group.items.map((item) => {
                          const ItemIcon = item.icon;
                          const isActive = pathname === item.href;
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => {
                                triggerHaptic('selection');
                                setMobileMenuOpen(false);
                              }}
                              className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium transition ${
                                isActive
                                  ? 'bg-blue-50 text-blue-700 font-bold dark:bg-blue-950/60 dark:text-blue-300'
                                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                              }`}
                            >
                              <ItemIcon size={16} className="text-slate-400 shrink-0" />
                              <span className="flex-1">{item.label}</span>
                              {item.badge && (
                                <span className="text-[10px] font-mono text-slate-400 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">
                                  {item.badge}
                                </span>
                              )}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {/* ── Global Quick Search Omnibar Modal (Cmd+K) ── */}
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
              <IconTopicDiscovery size={22} className="text-blue-600 dark:text-blue-400 mr-3" />
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
                placeholder="搜尋 120 個建築主題、公式速查、現場手冊、圖解實驗室或名築案例..."
                className="w-full bg-transparent text-sm sm:text-base text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden font-sans"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="mr-2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
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
                    triggerHaptic('selection');
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
              <span className="hidden sm:inline">Arch V9.00 Omnibar</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
