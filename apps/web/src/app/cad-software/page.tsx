'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Monitor,
  ExternalLink,
  Sparkles,
  ArrowRight,
  Flame,
} from 'lucide-react';
import { cadSoftwareList } from '@/data/cad-software/cadSoftwareData';

export default function CadSoftwareHubPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: '全部核心軟體 (8 套)' },
    { id: 'bim', label: 'BIM 建築資訊模型' },
    { id: 'cad', label: '2D/3D CAD 與施工圖' },
    { id: 'parametric', label: '參數化與自由曲面' },
    { id: 'rendering', label: '即時光追與視覺化' },
  ];

  const filteredList = cadSoftwareList.filter((soft) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'bim') return soft.category.includes('BIM');
    if (selectedCategory === 'cad') return soft.category.includes('CAD') || soft.category.includes('施工圖');
    if (selectedCategory === 'parametric') return soft.category.includes('參數化') || soft.category.includes('曲面') || soft.slug === 'blender' || soft.slug === 'rhino';
    if (selectedCategory === 'rendering') return soft.category.includes('視覺化') || soft.category.includes('渲染') || soft.slug === '3dsmax' || soft.slug === 'rendering-engines';
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-24 text-slate-800 dark:text-slate-100">
      {/* Hero Header */}
      <section className="relative overflow-hidden border-b border-slate-200 dark:border-slate-800 bg-gradient-to-b from-blue-50/50 via-white to-slate-50 dark:from-blue-950/20 dark:via-slate-900 dark:to-slate-950 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Breadcrumb & Tags */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <Link
              href="/"
              className="text-xs font-mono text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition"
            >
              首頁
            </Link>
            <span className="text-slate-400 text-xs">/</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 text-white px-3 py-1 text-xs font-mono font-bold tracking-wider shadow-sm shadow-blue-500/20">
              <Monitor className="size-3.5" />
              TAG: 電腦繪圖
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 px-2.5 py-0.5 text-xs font-mono font-medium">
              業界學界 8 大主力軟體全鑑
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20 px-2.5 py-0.5 text-xs font-mono font-medium">
              7 輪深度進化 100%+ 躍遷
            </span>
          </div>

          <h1 className="font-serif text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            建築電腦繪圖軟體全鑑
            <span className="block text-2xl sm:text-4xl text-blue-600 dark:text-blue-400 mt-2 font-normal">
              業界與學界主力工具 · 深度獨立專頁與 7 輪躍遷體系
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            從高工建築科製圖實習、大學建築系（B.Arch）五年間的設計 Studio，到專技高考建築師、工程顧問公司與營造廠現場，電腦繪圖（CAD / BIM / 3D 建模 / 參數化 / 即時光追）是建築人實踐空間想像的最強武器。
            本專區針對台灣與國際最核心的 8 大軟體體系，建立每套軟體的獨立深度介紹頁面、新手起步 10 步實戰教學、高頻快捷鍵秘笈、5 大避坑指南，以及每輪擴充 100%+ 知識維度的 7 輪深度進化心法。
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm">
              <span className="block text-xs text-slate-500 dark:text-slate-400">收錄獨立專題軟體</span>
              <span className="text-2xl font-bold font-mono text-blue-600 dark:text-blue-400">8 大神兵</span>
              <span className="block text-[11px] text-slate-400 mt-1">涵蓋 CAD/BIM/CG/曲面</span>
            </div>
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm">
              <span className="block text-xs text-slate-500 dark:text-slate-400">深度迭代輪次</span>
              <span className="text-2xl font-bold font-mono text-purple-600 dark:text-purple-400">7 輪躍遷</span>
              <span className="block text-[11px] text-slate-400 mt-1">每輪延伸 100%+ 深度內容</span>
            </div>
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm">
              <span className="block text-xs text-slate-500 dark:text-slate-400">新手實作 SOP</span>
              <span className="text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-400">10 步起步法</span>
              <span className="block text-[11px] text-slate-400 mt-1">零基礎從空白到第一張圖</span>
            </div>
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm">
              <span className="block text-xs text-slate-500 dark:text-slate-400">官方正版教育授權</span>
              <span className="text-2xl font-bold font-mono text-amber-600 dark:text-amber-400">100% 直連</span>
              <span className="block text-[11px] text-slate-400 mt-1">學生免費申請通道彙整</span>
            </div>
          </div>
        </div>
      </section>

      {/* Software Filter & List */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Flame className="size-5 text-amber-500" />
              核心電腦繪圖軟體獨立介紹專頁
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              點擊進入每款軟體的專屬深研頁面，閱讀建築製圖應用、新手起步 SOP、快捷鍵與 7 輪進化指南。
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 p-1 bg-slate-200/60 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                  selectedCategory === cat.id
                    ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Software Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {filteredList.map((soft) => (
            <div
              key={soft.slug}
              className="group relative flex flex-col justify-between rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-xl hover:shadow-blue-500/5"
            >
              <div>
                {/* Header tags */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 px-3 py-0.5 text-xs font-mono font-bold">
                      {soft.category}
                    </span>
                    <span className="rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20 px-2 py-0.5 text-[11px] font-mono">
                      {soft.badge}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">{soft.vendor}</span>
                </div>

                {/* Software Title */}
                <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                  {soft.name}
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">{soft.englishName}</p>

                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {soft.shortDesc}
                </p>

                {/* Metrics Mini-grid */}
                <div className="grid grid-cols-2 gap-2 mt-5 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 text-xs font-mono">
                  <div>
                    <span className="text-slate-400 block text-[10px]">學習難度曲線</span>
                    <span className="font-medium text-slate-700 dark:text-slate-300 truncate block">
                      {soft.rating.learningCurve}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">業界定位／普及</span>
                    <span className="font-medium text-slate-700 dark:text-slate-300 truncate block">
                      {soft.rating.industryAdoption}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">BIM 資訊深度</span>
                    <span className="font-medium text-slate-700 dark:text-slate-300 truncate block">
                      {soft.rating.bimCapability}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">施工圖紙輸出</span>
                    <span className="font-medium text-slate-700 dark:text-slate-300 truncate block">
                      {soft.rating.drawingOutput}
                    </span>
                  </div>
                </div>

                {/* 7-Iteration Feature Highlights */}
                <div className="mt-5 space-y-1.5">
                  <div className="text-[11px] font-bold tracking-wider text-slate-400 uppercase flex items-center gap-1.5">
                    <Sparkles className="size-3 text-purple-500" />
                    7 輪躍遷核心演算法亮點
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {soft.sevenIterations.slice(0, 4).map((iter) => (
                      <span
                        key={iter.round}
                        className="inline-flex items-center rounded-md bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-[11px] text-slate-600 dark:text-slate-400 font-mono"
                      >
                        {iter.badge.split(' ')[0]}: {iter.title.split('與')[0].slice(0, 10)}
                      </span>
                    ))}
                    <span className="inline-flex items-center rounded-md bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-300 px-2 py-0.5 text-[11px] font-mono font-bold">
                      + 共 7 輪完整迭代
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                <a
                  href={soft.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 font-medium transition"
                  title="前往官方正版網站"
                >
                  <ExternalLink className="size-3.5" />
                  官網
                </a>

                <Link
                  href={`/cad-software/${soft.slug}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 text-xs font-bold shadow-md shadow-blue-600/20 transition group-hover:shadow-blue-600/30"
                >
                  進入獨立介紹專頁
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Decision Tree: Architecture Learning Roadmap */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-12 shadow-sm">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              LEARNING ROADMAP & DECISION TREE
            </span>
            <h2 className="mt-2 font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              建築人電腦繪圖軟體修煉路徑：何時該學哪一套？
            </h2>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              很多初學者常問：「我到底該學 AutoCAD、Revit 還是 SketchUp、Rhino？」答案取決於你目前的學習階段與專案目標。以下是台灣建築界公認的最佳進階順序：
            </p>
          </div>

          <div className="grid gap-6 mt-8 sm:grid-cols-3">
            {/* Stage 1 */}
            <div className="rounded-2xl border border-blue-100 dark:border-blue-900/40 bg-blue-50/40 dark:bg-blue-950/20 p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="flex size-7 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white font-mono">
                  1
                </span>
                <span className="text-xs font-mono font-bold text-blue-700 dark:text-blue-300">
                  高工建築科 / 大一基礎
                </span>
              </div>
              <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white mb-2">
                2D 圖學底子與直覺 3D 發想
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                首先精通 <strong>AutoCAD</strong>（掌握 CNS 建築製圖投影法、線型線寬與圖層概念），同時上手 <strong>SketchUp</strong> 建立直覺的三維推拉與空間尺度感。
              </p>
              <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                <span className="rounded bg-white dark:bg-slate-800 px-2 py-0.5 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                  AutoCAD (2D施工圖基石)
                </span>
                <span className="rounded bg-white dark:bg-slate-800 px-2 py-0.5 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                  SketchUp (直覺體量)
                </span>
              </div>
            </div>

            {/* Stage 2 */}
            <div className="rounded-2xl border border-purple-100 dark:border-purple-900/40 bg-purple-50/40 dark:bg-purple-950/20 p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="flex size-7 items-center justify-center rounded-full bg-purple-600 text-xs font-bold text-white font-mono">
                  2
                </span>
                <span className="text-xs font-mono font-bold text-purple-700 dark:text-purple-300">
                  大學大二到大三 / 競圖深化
                </span>
              </div>
              <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white mb-2">
                自由曲面參數化與即時光追
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                進階掌握 <strong>Rhino 3D + Grasshopper</strong> 進行演算法幾何造型與日照遮陽分析；同步掛載 <strong>Enscape / Lumion / D5</strong> 實現評圖當天的 60fps 照片級即時透視渲染。
              </p>
              <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                <span className="rounded bg-white dark:bg-slate-800 px-2 py-0.5 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                  Rhino + Grasshopper
                </span>
                <span className="rounded bg-white dark:bg-slate-800 px-2 py-0.5 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                  Enscape / D5 Render
                </span>
              </div>
            </div>

            {/* Stage 3 */}
            <div className="rounded-2xl border border-emerald-100 dark:border-emerald-900/40 bg-emerald-50/40 dark:bg-emerald-950/20 p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="flex size-7 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white font-mono">
                  3
                </span>
                <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-300">
                  高年級畢業設計 / 事務所就業
                </span>
              </div>
              <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white mb-2">
                BIM 建築資訊模型與工程協同
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                全流程掌握 <strong>Autodesk Revit</strong> 或 <strong>Archicad</strong>（參數族群、平立剖連動施工圖、工程數量估算、管線碰撞檢討）以及 <strong>Blender (Bonsai openBIM)</strong>，完成學用無縫接軌。
              </p>
              <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                <span className="rounded bg-white dark:bg-slate-800 px-2 py-0.5 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  Revit / Archicad (BIM旗艦)
                </span>
                <span className="rounded bg-white dark:bg-slate-800 px-2 py-0.5 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  3ds Max (頂級效果圖)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Matrix Table */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm overflow-hidden">
          <div className="mb-6">
            <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
              8 大建築繪圖軟體性能橫向對比總表
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              以建築師事務所與營造工程實務視角，橫向對比各軟體核心能力與指標
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse font-mono">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400">
                  <th className="p-3 font-bold">軟體名稱</th>
                  <th className="p-3 font-bold">核心定位領域</th>
                  <th className="p-3 font-bold">學習門檻</th>
                  <th className="p-3 font-bold">BIM 支援度</th>
                  <th className="p-3 font-bold">施工圖產出能力</th>
                  <th className="p-3 font-bold">渲染真實度</th>
                  <th className="p-3 font-bold">官方教育版</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {cadSoftwareList.map((soft) => (
                  <tr key={soft.slug} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition">
                    <td className="p-3 font-bold text-slate-900 dark:text-white">
                      <Link href={`/cad-software/${soft.slug}`} className="hover:text-blue-600 transition">
                        {soft.name}
                      </Link>
                    </td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">{soft.category}</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">{soft.rating.learningCurve.split('(')[0]}</td>
                    <td className="p-3">
                      <span className={`inline-block px-2 py-0.5 rounded text-[10px] ${
                        soft.rating.bimCapability.includes('天花板') || soft.rating.bimCapability.includes('頂級')
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-bold'
                          : soft.rating.bimCapability.includes('中階') || soft.rating.bimCapability.includes('強大')
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'
                          : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                      }`}>
                        {soft.rating.bimCapability.split('(')[0]}
                      </span>
                    </td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">{soft.rating.drawingOutput.split('(')[0]}</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">{soft.rating.renderingQuality.split('(')[0]}</td>
                    <td className="p-3 text-emerald-600 dark:text-emerald-400 font-bold">
                      {soft.slug === 'blender' ? '完全開源免費' : '學生免費授權'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
