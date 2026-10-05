'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  IconTrussBeam,
  IconMohrCircle,
  IconDraftingTools,
  IconSurveyingLevel,
  IconSlumpCone,
  IconRebarSection,
  IconOrthographicBox,
  IconClassicalOrder,
  IconBIMModel,
  IconFieldSafety,
  IconExamLicense,
  IconStudioForge,
  IconFastFormula,
  IconGreenBuilding,
  IconTopicDiscovery,
  IconPerspective,
  IconProps,
} from '@/components/ui/ArchitecturalIcons';
import { topicSearchIndex, type TopicSearchItem } from '@/data/topicSearchIndex';
import { triggerHaptic } from '@/lib/haptics';

// ── 專業領域定義 ──
interface DomainCategory {
  id: string;
  name: string;
  icon: React.ComponentType<IconProps>;
  desc: string;
  count: string;
  tone: string;
  subjectSlugs: string[];
}

const DOMAIN_CATEGORIES: DomainCategory[] = [
  {
    id: 'all',
    name: '全部領域',
    icon: IconTopicDiscovery,
    desc: '全站 13 科 120 主題與 8 大工程工坊',
    count: '120+ 主題',
    tone: 'blue',
    subjectSlugs: [],
  },
  {
    id: 'mechanics',
    name: '結構力學與分析',
    icon: IconTrussBeam,
    desc: '靜力平衡、桁架零力桿、SFD/BMD 剪力彎矩、莫爾圓與斷面慣性矩',
    count: '13 章',
    tone: 'blue',
    subjectSlugs: ['mechanics'],
  },
  {
    id: 'materials',
    name: '建築材料與營造',
    icon: IconSlumpCone,
    desc: '混凝土坍度試驗、水灰比、抗壓強度、水泥骨材級配與鋼筋竹節',
    count: '13 章',
    tone: 'amber',
    subjectSlugs: ['materials'],
  },
  {
    id: 'surveying',
    name: '測量實習與技術',
    icon: IconSurveyingLevel,
    desc: '水準儀視距差、高程閉合平差、經緯儀測角、導線計算與 GNSS 全測站',
    count: '8 章',
    tone: 'teal',
    subjectSlugs: ['surveying'],
  },
  {
    id: 'drafting',
    name: '製圖圖學與規範',
    icon: IconDraftingTools,
    desc: 'CNS 11567 建築製圖標準、第三角投影、透視消點、平立剖與大樣詳圖',
    count: '16 章',
    tone: 'indigo',
    subjectSlugs: ['drafting'],
  },
  {
    id: 'cad-bim',
    name: '電腦繪圖與 BIM',
    icon: IconBIMModel,
    desc: 'AutoCAD、Revit BIM、SketchUp、Blender、Rhino 與即時光追渲染全鑑',
    count: '8 軟體',
    tone: 'violet',
    subjectSlugs: ['cad-software'],
  },
  {
    id: 'pathway-design',
    name: '建築設計與史論',
    icon: IconClassicalOrder,
    desc: '大學 5 年制 B.Arch 課綱、建築史論、路思義教堂、歌劇院與 EEWH 綠建築',
    count: '10 學期',
    tone: 'emerald',
    subjectSlugs: ['extensions', 'pathway', 'cases'],
  },
  {
    id: 'math-science',
    name: '數學 C 與工程基礎',
    icon: IconMohrCircle,
    desc: '統測數學 C 核心單元、三角函數、向量幾何、物理力學與材料化學反應',
    count: '3 科 25 章',
    tone: 'rose',
    subjectSlugs: ['math-c', 'physics', 'chemistry'],
  },
];

// ── 學習場景定義 ──
interface ScenarioCategory {
  id: string;
  name: string;
  badge: string;
  icon: React.ComponentType<IconProps>;
  desc: string;
  href?: string;
}

const SCENARIOS: ScenarioCategory[] = [
  {
    id: 'exam-rush',
    name: '統測高頻考點',
    badge: '考前速成',
    icon: IconFastFormula,
    desc: '歷屆 925 題出題率最高、計算失分陷阱最密集章節',
  },
  {
    id: 'interactive-labs',
    name: '動態圖解實驗室',
    badge: '8 大互動沙盒',
    icon: IconTrussBeam,
    desc: '簡支梁受力、莫爾圓旋轉、第三角折疊箱與水準調平',
    href: '/visualizers',
  },
  {
    id: 'site-practice',
    name: '營造現場檢驗手冊',
    badge: '工程實務',
    icon: IconFieldSafety,
    desc: '施工品管、氯離子檢測、高張力螺栓與鋼筋綁紮防錯',
    href: '/field-guide',
  },
  {
    id: 'barch-goals',
    name: '建築師國考與大學先修',
    badge: '生涯領航',
    icon: IconExamLicense,
    desc: 'B.Arch 評圖指南、高考建築師/結構技師/土木技師大綱',
    href: '/pathway',
  },
  {
    id: 'studio-geometry',
    name: '幾何名築大師工坊',
    badge: '3D 互動畫布',
    icon: IconStudioForge,
    desc: '手作路思義教堂、台中歌劇院與台北 101 幾何力學',
    href: '/studio',
  },
];

// ── 熱門興趣標籤 ──
const POPULAR_TAGS = [
  { label: '簡支梁受力 (SFD/BMD)', query: '剪力彎矩' },
  { label: '莫爾圓主應力', query: '莫爾圓' },
  { label: '桁架零力桿', query: '零力桿' },
  { label: '混凝土坍度試驗', query: '坍度' },
  { label: '水準儀高程閉合', query: '水準儀' },
  { label: '第三角正投影', query: '第三角' },
  { label: '台北 101 阻尼器', query: '阻尼器' },
  { label: '建築透視消點', query: '透視' },
  { label: 'Revit BIM 建模', query: 'revit' },
  { label: '建築師資格考試', query: '建築師' },
  { label: 'CNS 11567 製圖標準', query: '製圖' },
  { label: '路思義教堂幾何', query: '路思義' },
];

function TopicCardIcon({ subjectSlug, topicSlug, ...props }: IconProps & { subjectSlug: string; topicSlug: string }) {
  if (topicSlug.includes('mohr') || topicSlug.includes('stress')) return <IconMohrCircle {...props} />;
  if (topicSlug.includes('truss') || topicSlug.includes('beam')) return <IconTrussBeam {...props} />;
  if (topicSlug.includes('slump') || topicSlug.includes('concrete')) return <IconSlumpCone {...props} />;
  if (topicSlug.includes('rebar') || topicSlug.includes('steel')) return <IconRebarSection {...props} />;
  if (topicSlug.includes('level') || topicSlug.includes('survey')) return <IconSurveyingLevel {...props} />;
  if (topicSlug.includes('orthographic') || topicSlug.includes('projection')) return <IconOrthographicBox {...props} />;
  if (topicSlug.includes('perspective')) return <IconPerspective {...props} />;
  if (topicSlug.includes('bim') || topicSlug.includes('cad')) return <IconBIMModel {...props} />;
  if (topicSlug.includes('green') || topicSlug.includes('eewh')) return <IconGreenBuilding {...props} />;
  if (subjectSlug === 'mechanics') return <IconTrussBeam {...props} />;
  if (subjectSlug === 'materials') return <IconSlumpCone {...props} />;
  if (subjectSlug === 'surveying') return <IconSurveyingLevel {...props} />;
  if (subjectSlug === 'drafting') return <IconDraftingTools {...props} />;
  return <IconClassicalOrder {...props} />;
}

export default function TopicDiscoveryHub() {
  const [activeDomain, setActiveDomain] = useState<string>('all');
  const [activeScenario, setActiveScenario] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // 篩選核心邏輯
  const filteredTopics = useMemo(() => {
    let list: TopicSearchItem[] = [...topicSearchIndex];

    // 依專業領域過濾
    if (activeDomain !== 'all') {
      const selected = DOMAIN_CATEGORIES.find((d) => d.id === activeDomain);
      if (selected && selected.subjectSlugs.length > 0) {
        list = list.filter((t) => selected.subjectSlugs.includes(t.subjectSlug));
      }
    }

    // 依學習場景過濾
    if (activeScenario === 'exam-rush') {
      // 挑選歷年統測命題最核心熱點章節
      const coreSlugs = [
        'force-systems',
        'truss-analysis',
        'centroid-moment-of-inertia',
        'beam-shear-bending-moment',
        'stress-strain',
        'concrete-aggregate',
        'concrete-mix-slump',
        'differential-leveling',
        'traverse-surveying',
        'orthographic-projection',
        'perspective-projection',
        'derivatives-applications',
      ];
      list = list.filter((t) => coreSlugs.includes(t.topicSlug));
    }

    // 依搜尋字詞過濾
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (t) =>
          t.topicTitle.toLowerCase().includes(q) ||
          t.desc.toLowerCase().includes(q) ||
          t.subjectTitle.toLowerCase().includes(q)
      );
    }

    return list;
  }, [activeDomain, activeScenario, searchQuery]);

  const handleDomainClick = (id: string) => {
    triggerHaptic('light');
    setActiveDomain(id);
    setActiveScenario('all');
  };

  const handleScenarioClick = (id: string) => {
    triggerHaptic('light');
    setActiveScenario((prev) => (prev === id ? 'all' : id));
  };

  const handleTagClick = (query: string) => {
    triggerHaptic('selection');
    setSearchQuery(query);
  };

  return (
    <section className="relative my-8 sm:my-16" aria-label="主題探索與興趣導航盤">
      {/* ── 幾何背景與標頭 ── */}
      <div className="relative rounded-[2.5rem] border border-slate-200/90 dark:border-slate-800/90 bg-gradient-to-b from-white via-slate-50/50 to-blue-50/20 dark:from-slate-900 dark:via-slate-900/60 dark:to-blue-950/20 p-6 sm:p-12 shadow-xl shadow-slate-900/5">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 border-b border-slate-200/80 dark:border-slate-800/80 pb-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-700/10 dark:bg-blue-400/10 px-3 py-1 border border-blue-700/20 text-blue-700 dark:text-blue-300 font-mono text-xs font-bold tracking-wider">
              <IconTopicDiscovery className="size-4 animate-spin-slow" />
              <span>TOPIC & INTEREST DISCOVERY · 信達雅建築導航盤</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              探索你有興趣的建築主題
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
              無論你想解開一根簡支梁的內力、觀察混凝土坍度、組裝 3D 名築幾何，或是為建築師國考奠定基礎，從這裡出發，1 秒直達對應知識點。
            </p>
          </div>

          {/* 總主題計數與快速重置 */}
          <div className="flex items-center gap-4">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-800/80 px-5 py-3 shadow-xs">
              <span className="text-[10px] font-mono uppercase text-slate-500 block">目前篩選結果</span>
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif text-2xl font-bold text-blue-700 dark:text-blue-400 tabular-nums">
                  {filteredTopics.length}
                </span>
                <span className="text-xs text-slate-500 font-medium">/ 120 主題</span>
              </div>
            </div>
            {(activeDomain !== 'all' || activeScenario !== 'all' || searchQuery) && (
              <button
                type="button"
                onClick={() => {
                  triggerHaptic('light');
                  setActiveDomain('all');
                  setActiveScenario('all');
                  setSearchQuery('');
                }}
                className="rounded-2xl border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 px-4 py-3 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition cursor-pointer"
              >
                重設篩選
              </button>
            )}
          </div>
        </div>

        {/* ── 核心搜尋欄位與熱門標籤 ── */}
        <div className="mt-8 space-y-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <IconTopicDiscovery className="size-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="🔍 輸入感興趣的主題或關鍵字（例如：莫爾圓、剪力彎矩、坍度試驗、第三角投影、Revit、阻尼器）..."
              className="w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/70 pl-12 pr-10 py-3.5 text-sm sm:text-base text-slate-900 dark:text-white placeholder-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-hidden transition shadow-xs"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                aria-label="清除搜尋"
              >
                ✕
              </button>
            )}
          </div>

          {/* 熱門興趣標籤 Chips */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mr-1">
              熱門探索：
            </span>
            {POPULAR_TAGS.map((tag) => (
              <button
                key={tag.label}
                type="button"
                onClick={() => handleTagClick(tag.query)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition active:scale-95 cursor-pointer ${
                  searchQuery.toLowerCase() === tag.query.toLowerCase()
                    ? 'bg-blue-600 text-white font-bold shadow-sm'
                    : 'bg-white/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500'
                }`}
              >
                #{tag.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── 領域維度選擇器 (Discipline Tabs) ── */}
        <div className="mt-8 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
              按建築專業領域瀏覽 (ARCHITECTURAL DISCIPLINES)
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
            {DOMAIN_CATEGORIES.map((domain) => {
              const Icon = domain.icon;
              const isActive = activeDomain === domain.id;
              return (
                <button
                  key={domain.id}
                  type="button"
                  onClick={() => handleDomainClick(domain.id)}
                  className={`group flex flex-col items-center justify-center p-3 rounded-2xl border text-center transition-all duration-200 active:scale-95 cursor-pointer ${
                    isActive
                      ? 'border-blue-600 bg-blue-50/80 dark:bg-blue-950/50 shadow-md ring-2 ring-blue-600/20'
                      : 'border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-white dark:hover:bg-slate-800'
                  }`}
                >
                  <div
                    className={`p-2.5 rounded-xl mb-2 transition-colors ${
                      isActive
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400'
                    }`}
                  >
                    <Icon size={22} />
                  </div>
                  <span
                    className={`text-xs font-bold leading-tight ${
                      isActive
                        ? 'text-blue-900 dark:text-blue-100'
                        : 'text-slate-800 dark:text-slate-200'
                    }`}
                  >
                    {domain.name}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 mt-1">{domain.count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── 學習場景與專題捷徑 (Learning Scenarios) ── */}
        <div className="mt-6 pt-6 border-t border-slate-200/60 dark:border-slate-800/60">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mr-2">
              快速場景導航：
            </span>
            {SCENARIOS.map((sc) => {
              const Icon = sc.icon;
              const isSelected = activeScenario === sc.id;
              if (sc.href) {
                return (
                  <Link
                    key={sc.id}
                    href={sc.href}
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-800/90 px-3.5 py-2 text-xs font-bold text-slate-700 dark:text-slate-200 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition"
                  >
                    <Icon size={16} />
                    <span>{sc.name}</span>
                    <span className="rounded bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 text-[10px] text-slate-500 dark:text-slate-400">
                      {sc.badge}
                    </span>
                  </Link>
                );
              }
              return (
                <button
                  key={sc.id}
                  type="button"
                  onClick={() => handleScenarioClick(sc.id)}
                  className={`inline-flex items-center gap-2 rounded-xl border px-3.5 py-2 text-xs font-bold transition active:scale-95 cursor-pointer ${
                    isSelected
                      ? 'border-amber-500 bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 shadow-sm'
                      : 'border-slate-200 dark:border-slate-700 bg-white/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 hover:border-amber-400'
                  }`}
                >
                  <Icon size={16} />
                  <span>{sc.name}</span>
                  <span className="rounded bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 px-1.5 py-0.5 text-[10px]">
                    {sc.badge}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── 篩選結果卡片瀑布流 ── */}
        <div className="mt-10">
          {filteredTopics.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredTopics.slice(0, 24).map((topic) => (
                <Link
                  key={`${topic.subjectSlug}-${topic.topicSlug}`}
                  href={`/subjects/${topic.subjectSlug}/${topic.topicSlug}`}
                  onClick={() => triggerHaptic('selection')}
                  className="group flex flex-col justify-between rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/90 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-900/5 dark:hover:border-blue-500"
                >
                  <div>
                    {/* 頂部徽章與信達雅圖示 */}
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <span className="inline-block rounded-md bg-blue-50 dark:bg-blue-950/60 px-2 py-1 text-[11px] font-mono font-bold text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-900/40">
                        {topic.subjectTitle}
                      </span>
                      <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/40 transition-colors">
                        <TopicCardIcon subjectSlug={topic.subjectSlug} topicSlug={topic.topicSlug} size={20} strokeWidth={1.75} />
                      </div>
                    </div>

                      {/* 主題名稱 */}
                      <h3 className="font-serif text-base font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors line-clamp-1 mb-2">
                        {topic.topicTitle}
                      </h3>

                      {/* 知識重點摘要 */}
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2">
                        {topic.desc}
                      </p>
                    </div>

                    {/* 底部行動欄位 */}
                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-mono text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      <span className="text-[11px]">25 min 微循環</span>
                      <span className="font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        進入學習 →
                      </span>
                    </div>
                  </Link>
                ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/40 p-12 text-center">
              <IconTopicDiscovery className="mx-auto size-12 text-slate-400 mb-3" />
              <h4 className="font-serif text-lg font-bold text-slate-700 dark:text-slate-300 mb-1">
                沒有找到相符的建築主題
              </h4>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                請嘗試搜尋其他關鍵字（例如：「剪力」、「水準」、「坍度」、「第三角」、「Revit」）或切換專業領域分類。
              </p>
            </div>
          )}

          {filteredTopics.length > 24 && (
            <div className="mt-8 text-center">
              <Link
                href="/curriculum"
                className="inline-flex items-center gap-2 rounded-full border border-blue-600 px-6 py-2.5 text-xs font-bold text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-500 dark:hover:text-slate-950 transition"
              >
                <span>在完整課程地圖中查看全部 {filteredTopics.length} 個主題</span>
                <span>→</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
