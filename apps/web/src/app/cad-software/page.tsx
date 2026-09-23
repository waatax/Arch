'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ExternalLink,
  Sparkles,
  ArrowRight,
  Flame,
  Workflow,
  BookOpen,
  Award,
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
  FileText,
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
            <span className="text-slate-300 dark:text-slate-700">/</span>
            <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
              TAG: 電腦繪圖
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20 px-2.5 py-0.5 text-xs font-mono font-medium">
              建築運算設計與營建工程資訊模型
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 px-2.5 py-0.5 text-xs font-mono font-medium">
              CNS 11567 & ISO 19650 標準
            </span>
          </div>

          <h1 className="font-serif text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            建築電腦繪圖軟體全鑑
            <span className="block text-2xl sm:text-4xl text-blue-600 dark:text-blue-400 mt-2 font-normal">
              業界與學界主力工具 · 幾何底層、工程法規與 7 輪深度進化體系
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            現代建築工程與運算化設計已從單純之二維幾何描繪，深化為結合建築資訊模型 (BIM)、非標準自由曲面演算法、環境物理模擬與即時光線追蹤之跨領域數位協同體系。
            本全鑑完整收錄台灣營建實務與國際頂尖事務所採用之 8 大核心軟體工具，從底層微分幾何、CNS 11567 國家製圖規範、ISO 19650 資訊管理架構到可執行自動化腳本，建立系統化之工程實務知識庫。
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm">
              <span className="block text-xs text-slate-500 dark:text-slate-400 font-mono">核心工具體系</span>
              <span className="text-2xl font-bold font-mono text-blue-600 dark:text-blue-400">8 大主力</span>
              <span className="block text-[11px] text-slate-400 mt-1">CAD / BIM / 曲面 / 即時光追</span>
            </div>
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm">
              <span className="block text-xs text-slate-500 dark:text-slate-400 font-mono">深度進化體系</span>
              <span className="text-2xl font-bold font-mono text-purple-600 dark:text-purple-400">7 輪躍遷</span>
              <span className="block text-[11px] text-slate-400 mt-1">數學公式、參數矩陣、除錯樹</span>
            </div>
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm">
              <span className="block text-xs text-slate-500 dark:text-slate-400 font-mono">法規與規範標準</span>
              <span className="text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-400">100% 貫穿</span>
              <span className="block text-[11px] text-slate-400 mt-1">CNS 11567 / ISO 19650 / IFC4</span>
            </div>
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm">
              <span className="block text-xs text-slate-500 dark:text-slate-400 font-mono">工程實務二次開發</span>
              <span className="text-2xl font-bold font-mono text-amber-600 dark:text-amber-400">可執行腳本</span>
              <span className="block text-[11px] text-slate-400 mt-1">LISP / Python / Dynamo / GDL</span>
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
              點擊進入每款軟體的專屬深研頁面，查閱建築實務應用、標準代碼範例、參數矩陣與 7 輪進化指南。
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

                {/* Certifications and Learning Resources badge */}
                <div className="mt-4 flex flex-wrap items-center gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] font-mono">
                  {soft.certificationStandards && soft.certificationStandards.length > 0 && (
                    <span className="inline-flex items-center gap-1 rounded bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-500/20 px-2 py-0.5 font-bold">
                      <Award className="size-3" />
                      對標 {soft.certificationStandards.length} 階國家/原廠證照
                    </span>
                  )}
                  {soft.learningResources && soft.learningResources.length > 0 && (
                    <span className="inline-flex items-center gap-1 rounded bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-500/20 px-2 py-0.5 font-medium">
                      <BookOpen className="size-3" />
                      收錄 {soft.learningResources.length} 筆權威教學連結
                    </span>
                  )}
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

      {/* Decision Tree: Architecture Professional Workflow Pipeline */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-12 shadow-sm">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
              <Workflow className="size-4" />
              ARCHITECTURAL WORKFLOW PIPELINE & SOFTWARE TAXONOMY
            </span>
            <h2 className="mt-2 font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              建築專業專案推進階段與軟體定位矩陣
            </h2>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              在現代營建工程與建築師事務所之專業分工體系中，不同軟體依據其幾何核心與資料結構，各自承擔特定的專案交付階段：
            </p>
          </div>

          <div className="grid gap-6 mt-8 sm:grid-cols-3">
            {/* Stage 1 */}
            <div className="rounded-2xl border border-blue-100 dark:border-blue-900/40 bg-blue-50/40 dark:bg-blue-950/20 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="flex size-7 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white font-mono">
                    I
                  </span>
                  <span className="text-xs font-mono font-bold text-blue-700 dark:text-blue-300">
                    概念方案推敲與 2D 圖說標準
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white mb-2">
                  2D 製圖規範與直覺體量建立
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  落實 <strong>AutoCAD</strong>（遵循 CNS 11567 國家標準正投影法、出圖樣式表 CTB 線寬階層與外部參考 XREF 多工種套繪）；結合 <strong>SketchUp Pro</strong> 進行概念量體推拉、法定冬至日照陰影分析與 Trimble LayOut 動態施工圖出圖。
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 font-mono text-[11px] pt-3 border-t border-blue-200/50 dark:border-blue-800/50">
                <span className="rounded bg-white dark:bg-slate-800 px-2 py-0.5 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 font-bold">
                  AutoCAD (CNS 11567 標準)
                </span>
                <span className="rounded bg-white dark:bg-slate-800 px-2 py-0.5 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 font-bold">
                  SketchUp Pro (概念體量)
                </span>
              </div>
            </div>

            {/* Stage 2 */}
            <div className="rounded-2xl border border-purple-100 dark:border-purple-900/40 bg-purple-50/40 dark:bg-purple-950/20 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="flex size-7 items-center justify-center rounded-full bg-purple-600 text-xs font-bold text-white font-mono">
                    II
                  </span>
                  <span className="text-xs font-mono font-bold text-purple-700 dark:text-purple-300">
                    自由曲面參數化與微氣候模擬
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white mb-2">
                  非標準幾何有理化與物理光追
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  運用 <strong>Rhino 8 & Grasshopper</strong> 進行高階 NURBS 自由曲面建模、高斯曲率展開分析與 Kangaroo 結構懸垂鬆弛；透過 Ladybug 模擬日照輻射與採光自主率；同步結合 <strong>即時渲染引擎 (D5 / Enscape / Twinmotion)</strong> 進行毫秒級光影評估。
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 font-mono text-[11px] pt-3 border-t border-purple-200/50 dark:border-purple-800/50">
                <span className="rounded bg-white dark:bg-slate-800 px-2 py-0.5 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 font-bold">
                  Rhino + GH (NURBS 演算法)
                </span>
                <span className="rounded bg-white dark:bg-slate-800 px-2 py-0.5 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 font-bold">
                  即時光追引擎群 (RTX 60fps)
                </span>
              </div>
            </div>

            {/* Stage 3 */}
            <div className="rounded-2xl border border-emerald-100 dark:border-emerald-900/40 bg-emerald-50/40 dark:bg-emerald-950/20 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="flex size-7 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white font-mono">
                    III
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-700 dark:text-emerald-300">
                    BIM 資訊模型、跨工種碰撞與營造交付
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white mb-2">
                  全生命週期數位資產與施工集成
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  架構 <strong>Autodesk Revit</strong> 或 <strong>Graphisoft Archicad</strong> 進行多專業中央協同、複合構造接頭優先級運算、CSD/SEM 機電穿梁干涉檢討與材料明細表提量；搭配 <strong>Blender (Bonsai)</strong> 落實 OpenBIM IFC4 原生資訊交付，及 <strong>3ds Max</strong> 產出電影級競圖成果。
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 font-mono text-[11px] pt-3 border-t border-emerald-200/50 dark:border-emerald-800/50">
                <span className="rounded bg-white dark:bg-slate-800 px-2 py-0.5 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 font-bold">
                  Revit / Archicad (BIM 旗艦)
                </span>
                <span className="rounded bg-white dark:bg-slate-800 px-2 py-0.5 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 font-bold">
                  Blender Bonsai (OpenBIM)
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
              8 大建築繪圖軟體性能與工程規格橫向對比總表
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              以建築師事務所、結構工程顧問與營造工程實務視角，橫向對比各軟體核心能力、幾何內核與標準規範
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse font-mono">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400">
                  <th className="p-3 font-bold">軟體名稱</th>
                  <th className="p-3 font-bold">核心定位領域</th>
                  <th className="p-3 font-bold">幾何與資料庫內核</th>
                  <th className="p-3 font-bold">BIM 資訊深度</th>
                  <th className="p-3 font-bold">施工圖紙輸出</th>
                  <th className="p-3 font-bold">二次開發語言</th>
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
                    <td className="p-3 text-slate-600 dark:text-slate-400">
                      {soft.slug === 'sketchup' && 'B-Rep 多邊形表面'}
                      {soft.slug === 'blender' && '網格多邊形 + OpenBIM STEP'}
                      {soft.slug === 'autocad' && '2D/3D 齊次向量坐標系'}
                      {soft.slug === 'revit' && '參數化關聯式建築資料庫'}
                      {soft.slug === '3dsmax' && '修改器堆疊 + 多邊形拓撲'}
                      {soft.slug === 'archicad' && '虛擬建築 + GDL 描述語言'}
                      {soft.slug === 'rhino' && '雙精度 NURBS + 節點資料樹'}
                      {soft.slug === 'rendering-engines' && 'RTX BVH 硬體即時光追'}
                    </td>
                    <td className="p-3">
                      <span className={`inline-block px-2 py-0.5 rounded text-[10px] ${
                        soft.rating.bimCapability.includes('天花板') || soft.rating.bimCapability.includes('頂級')
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-bold'
                          : soft.rating.bimCapability.includes('中階') || soft.rating.bimCapability.includes('強大') || soft.rating.bimCapability.includes('全能')
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'
                          : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                      }`}>
                        {soft.rating.bimCapability.split('(')[0]}
                      </span>
                    </td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">{soft.rating.drawingOutput.split('(')[0]}</td>
                    <td className="p-3 text-purple-600 dark:text-purple-400 font-bold">
                      {soft.slug === 'sketchup' && 'Ruby API'}
                      {soft.slug === 'blender' && 'Python (bpy)'}
                      {soft.slug === 'autocad' && 'AutoLISP / .NET'}
                      {soft.slug === 'revit' && 'Dynamo / C#'}
                      {soft.slug === '3dsmax' && 'MAXScript / Python'}
                      {soft.slug === 'archicad' && 'GDL / JSON API'}
                      {soft.slug === 'rhino' && 'Grasshopper / C#'}
                      {soft.slug === 'rendering-engines' && 'HLSL / WebXR'}
                    </td>
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

      {/* Statutory Standards & Certification Hub */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 space-y-8">
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 sm:p-12 shadow-sm space-y-8">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-6">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
              <ShieldCheck className="size-4" />
              NATIONAL STANDARDS & OCCUPATIONAL CERTIFICATION
            </span>
            <h2 className="mt-2 font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              電腦繪製建築圖國家標準 (CNS 11567)、技能檢定與實務套圖協同體系
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
              建築電腦繪圖絕非單純之電腦操作技能，而是依據國家法定技術規則、工程圖學標準與營建施工界面協同所建構之精密溝通語言。
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Box 1: CNS 11567 */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 p-6 space-y-3">
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-sm font-mono">
                <FileText className="size-4" />
                <span>CNS 11567《建築製圖》法典</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                經濟部標準檢驗局制定之建築工程法定製圖規範。
              </p>
              <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="size-3.5 text-blue-500 mt-0.5 shrink-0" />
                  <span><strong>線寬層級對比：</strong>粗線 (0.7mm 輪廓)、中線 (0.5mm)、細線 (0.25mm 標註/虛線)，嚴格維持 4:2:1 比例</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="size-3.5 text-blue-500 mt-0.5 shrink-0" />
                  <span><strong>18 種法定比例尺：</strong>1/1 到 1/600，嚴禁任意自訂非標準比例</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="size-3.5 text-blue-500 mt-0.5 shrink-0" />
                  <span><strong>三道尺寸標註法：</strong>外層總尺寸、中層柱心跨距、內層門窗垛牆開口細部</span>
                </li>
              </ul>
              <div className="pt-2">
                <a
                  href="https://www.cnsonline.com.tw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-blue-600 dark:text-blue-400 font-bold hover:underline inline-flex items-center gap-1"
                >
                  CNS 國家標準檢索入口 <ExternalLink className="size-3" />
                </a>
              </div>
            </div>

            {/* Box 2: 建築製圖應用技能檢定 */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 p-6 space-y-3">
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm font-mono">
                <GraduationCap className="size-4" />
                <span>全國技能檢定「建築製圖應用」</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                勞動部技檢中心主辦之職類檢定（代號 21100），分為電腦繪圖項與手繪圖項。
              </p>
              <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="size-3.5 text-amber-500 mt-0.5 shrink-0" />
                  <span><strong>丙級 (21101)：</strong>考核基本平立剖面圖、樓梯大樣圖、結構平面圖及 180 分鐘內出圖排程</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="size-3.5 text-amber-500 mt-0.5 shrink-0" />
                  <span><strong>乙級 (21100)：</strong>考核地下室坡道排水分區、昇降機道剖面大樣、帷幕牆泛水構造與 CAD 系統規劃</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="size-3.5 text-amber-500 mt-0.5 shrink-0" />
                  <span><strong>零分防衛天條：</strong>出圖未關閉 Fit-to-Paper 導致比例失真、主要圖面漏項、圖框範圍越界即判定不合格</span>
                </li>
              </ul>
              <div className="pt-2">
                <a
                  href="https://skill.tcte.edu.tw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-amber-600 dark:text-amber-400 font-bold hover:underline inline-flex items-center gap-1"
                >
                  技檢中心術科試題庫 <ExternalLink className="size-3" />
                </a>
              </div>
            </div>

            {/* Box 3: CSD / SEM 套圖協同 */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 p-6 space-y-3">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm font-mono">
                <Workflow className="size-4" />
                <span>CSD / SEM 界面整合套圖</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                公共工程與大型建案確保營造品質、避免現場敲除變更設計之核心圖說。
              </p>
              <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1.5 pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="size-3.5 text-emerald-500 mt-0.5 shrink-0" />
                  <span><strong>CSD (機電整合圖)：</strong>疊合空調風管、給排水、消防與強弱電纜槽，重力管優先排擠壓力管</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="size-3.5 text-emerald-500 mt-0.5 shrink-0" />
                  <span><strong>SEM (結構機電圖)：</strong>結構梁開孔 D &le; h/3，開孔中心落於中段 1/3 且距柱面 &ge; h</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="size-3.5 text-emerald-500 mt-0.5 shrink-0" />
                  <span><strong>BIM 數位升級：</strong>從傳統 2D XREF 疊合走向 Revit + Navisworks 3D 硬碰撞與間隙公差自動檢測</span>
                </li>
              </ul>
              <div className="pt-2">
                <a
                  href="https://www.abri.gov.tw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold hover:underline inline-flex items-center gap-1"
                >
                  建研所 BIM 協同指南 <ExternalLink className="size-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
