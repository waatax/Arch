'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Monitor,
  ExternalLink,
  ChevronRight,
  Sparkles,
  GraduationCap,
  Building2,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Flame,
  BookOpen,
  Keyboard,
  AlertTriangle,
  Lightbulb,
  Share2,
  Zap,
  ShieldCheck,
  Compass,
  Maximize2,
} from 'lucide-react';
import { CadSoftware } from '@/data/cad-software/cadSoftwareData';

interface Props {
  software: CadSoftware;
  prevSoftware: { slug: string; name: string };
  nextSoftware: { slug: string; name: string };
}

export default function CadSoftwareDetailView({ software, prevSoftware, nextSoftware }: Props) {
  const [activeRound, setActiveRound] = useState<number>(1);
  const [shortcutFilter, setShortcutFilter] = useState<string>('all');

  const currentCycle = software.sevenIterations.find((i) => i.round === activeRound) || software.sevenIterations[0];

  const filteredShortcuts = software.beginnerGuide.shortcuts.filter((s) => {
    if (shortcutFilter === 'all') return true;
    return s.frequency === shortcutFilter;
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-24 text-slate-800 dark:text-slate-100">
      {/* Top Breadcrumb Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-16 z-30 px-4 py-3 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400">
            <Link href="/" className="hover:text-blue-600 transition">首頁</Link>
            <span>/</span>
            <Link href="/cad-software" className="hover:text-blue-600 transition flex items-center gap-1">
              <Monitor className="size-3" />
              電腦繪圖軟體全鑑
            </Link>
            <span>/</span>
            <span className="font-bold text-slate-900 dark:text-white">{software.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={software.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/80 px-2.5 py-1 text-xs font-medium hover:bg-blue-100 transition"
            >
              <ExternalLink className="size-3" />
              官網
            </a>
            <a
              href={software.studentLicenseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/80 px-2.5 py-1 text-xs font-medium hover:bg-emerald-100 transition"
            >
              <GraduationCap className="size-3" />
              學生教育版
            </a>
          </div>
        </div>
      </div>

      {/* Hero Header Section */}
      <section className="border-b border-slate-200 dark:border-slate-800 bg-gradient-to-b from-blue-50/40 via-white to-slate-50 dark:from-blue-950/20 dark:via-slate-900 dark:to-slate-950 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1 rounded-full bg-blue-600 text-white px-3 py-1 text-xs font-mono font-bold tracking-wider">
              <Monitor className="size-3.5" />
              TAG: 電腦繪圖
            </span>
            <span className="rounded-full bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 px-3 py-1 text-xs font-mono font-bold">
              {software.category}
            </span>
            <span className="rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20 px-2.5 py-1 text-xs font-mono font-medium">
              {software.badge}
            </span>
            <span className="text-xs text-slate-400 font-mono">
              開發商：{software.vendor} · 初版：{software.releaseYear}
            </span>
          </div>

          <h1 className="font-serif text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            {software.name}
          </h1>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-mono mt-1">
            {software.englishName}
          </p>

          <p className="mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            {software.fullDesc}
          </p>

          {/* Hero Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
            {software.heroMetrics.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 p-4 shadow-sm"
              >
                <span className="block text-xs text-slate-400 font-mono">{m.label}</span>
                <span className="text-xl font-bold font-mono text-blue-600 dark:text-blue-400 mt-1 block">
                  {m.value}
                </span>
              </div>
            ))}
          </div>

          {/* Rating Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mt-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono">
            <div>
              <span className="text-slate-400 block text-[10px]">學習曲線</span>
              <span className="font-bold text-slate-700 dark:text-slate-300">{software.rating.learningCurve}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px]">業界普及率</span>
              <span className="font-bold text-slate-700 dark:text-slate-300">{software.rating.industryAdoption}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px]">BIM 資訊深度</span>
              <span className="font-bold text-slate-700 dark:text-slate-300">{software.rating.bimCapability}</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px]">施工圖說成圖</span>
              <span className="font-bold text-slate-700 dark:text-slate-300">{software.rating.drawingOutput}</span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="text-slate-400 block text-[10px]">渲染擬真能力</span>
              <span className="font-bold text-slate-700 dark:text-slate-300">{software.rating.renderingQuality}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 space-y-16">

        {/* SECTION 1: 建築製圖與工程實務核心應用 */}
        <section id="applications" className="space-y-6">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
              <Building2 className="size-4" />
              PART 01 · ARCHITECTURAL APPLICATIONS
            </span>
            <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              在建築製圖與工程設計上的核心應用
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              深度解析 {software.name} 在當代建築專業工作流中的實質角色與交付圖說標準
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {software.architecturalApplications.map((app, idx) => (
              <div
                key={app.title}
                className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="flex size-6 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-mono font-bold">
                      0{idx + 1}
                    </span>
                    <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-bold">
                      {app.area}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {app.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {app.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 block">
                      核心技術細節與手法：
                    </span>
                    <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                      {app.technicalDetails.map((tech) => (
                        <li key={tech} className="flex items-start gap-2">
                          <CheckCircle2 className="size-3.5 text-blue-500 mt-0.5 shrink-0" />
                          <span>{tech}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-[11px] font-mono text-slate-400 block mb-1.5">主要產出與交付成果：</span>
                  <div className="flex flex-wrap gap-1.5">
                    {app.deliverables.map((del) => (
                      <span
                        key={del}
                        className="rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2 py-0.5 text-[11px] font-mono"
                      >
                        {del}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: 7 輪深度進化與維度躍遷 (7-Round Mastery Cycles) */}
        <section id="seven-iterations" className="space-y-6">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 flex items-center gap-1.5">
                  <Sparkles className="size-4" />
                  PART 02 · 7-ROUND EVOLUTIONARY MASTERY CYCLES
                </span>
                <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  完整 7 輪深度進化：每輪遞增 100%+ 實戰維度
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  依循七輪指數級躍遷架構，從底層幾何認知、CNS 圖說規範、BIM 參數算料到雲端 AI 協同
                </p>
              </div>
              <span className="rounded-full bg-purple-600/10 text-purple-700 dark:text-purple-300 border border-purple-600/20 px-3 py-1 text-xs font-mono font-bold">
                每輪至少 +100% 延伸內容
              </span>
            </div>
          </div>

          {/* Round Selector Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700">
            {software.sevenIterations.map((iter) => (
              <button
                key={iter.round}
                onClick={() => setActiveRound(iter.round)}
                className={`flex-1 min-w-[130px] px-3 py-2.5 rounded-xl text-xs font-mono font-bold transition text-center ${
                  activeRound === iter.round
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-500/20'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-700/50'
                }`}
              >
                <div>{iter.badge.split(' ')[0]}</div>
                <div className="text-[11px] font-normal truncate mt-0.5">{iter.badge.split(' ')[1]}</div>
              </button>
            ))}
          </div>

          {/* Active Round Content Card */}
          <div className="rounded-3xl border-2 border-purple-200 dark:border-purple-900/60 bg-white dark:bg-slate-900 p-6 sm:p-10 shadow-lg shadow-purple-500/5 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 px-2.5 py-1 text-xs font-mono font-bold">
                    {currentCycle.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    目標焦點：{currentCycle.focus}
                  </span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-2">
                  {currentCycle.title}
                </h3>
              </div>

              {/* 100%+ Content Expansion Badge */}
              <div className="rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 p-3 text-xs max-w-sm">
                <span className="font-mono font-bold text-purple-600 dark:text-purple-400 flex items-center gap-1">
                  <Zap className="size-3.5" />
                  本次輪次 100%+ 深度躍遷：
                </span>
                <p className="text-slate-600 dark:text-slate-400 text-[11px] mt-1 leading-relaxed">
                  {currentCycle.contentExpansion}
                </p>
              </div>
            </div>

            {/* Core Theory */}
            <div className="rounded-2xl bg-purple-50/40 dark:bg-purple-950/20 border border-purple-100 dark:border-purple-900/40 p-5">
              <span className="text-xs font-mono font-bold text-purple-700 dark:text-purple-300 flex items-center gap-1.5 mb-2">
                <BookOpen className="size-4" />
                底層架構理論與幾何原理 (Core Theory)
              </span>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {currentCycle.coreTheory}
              </p>
            </div>

            {/* Practical Walkthrough SOP */}
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block">
                工程實務操作流程步驟 (Practical Walkthrough SOP)：
              </span>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {currentCycle.practicalWalkthrough.map((step, idx) => (
                  <div
                    key={step}
                    className="flex items-start gap-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 p-3.5"
                  >
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-purple-600 text-white font-mono text-xs font-bold">
                      {idx + 1}
                    </span>
                    <span className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Standards and Pitfalls */}
            <div className="grid gap-4 sm:grid-cols-2 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs">
              <div className="rounded-xl border border-blue-100 dark:border-blue-900/40 bg-blue-50/30 dark:bg-blue-950/20 p-4">
                <span className="font-mono font-bold text-blue-700 dark:text-blue-300 flex items-center gap-1.5 mb-1.5">
                  <ShieldCheck className="size-4" />
                  遵循之工程規範與標準代碼：
                </span>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {currentCycle.industryStandardOrCode}
                </p>
              </div>

              <div className="rounded-xl border border-amber-100 dark:border-amber-900/40 bg-amber-50/30 dark:bg-amber-950/20 p-4">
                <span className="font-mono font-bold text-amber-700 dark:text-amber-300 flex items-center gap-1.5 mb-1.5">
                  <AlertTriangle className="size-4" />
                  防錯要點與驗證檢驗方法：
                </span>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {currentCycle.pitfallsAndVerification}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: 基礎新手開始使用 TIP 教學及建議 */}
        <section id="beginner-guide" className="space-y-8">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
              <Compass className="size-4" />
              PART 03 · BEGINNER ONBOARDING & PRO TIPS
            </span>
            <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              基礎新手開始使用 TIP 教學及實戰建議
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              {software.beginnerGuide.introduction}
            </p>
          </div>

          {/* Viewport Navigation Controls */}
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm">
            <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <Maximize2 className="size-4 text-blue-500" />
              視窗導航與三維空間操控手感
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {software.beginnerGuide.viewportControls.map((ctrl) => (
                <div
                  key={ctrl.action}
                  className="rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 p-4"
                >
                  <span className="text-xs font-bold text-slate-900 dark:text-white block">{ctrl.action}</span>
                  <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-bold block mt-1">
                    {ctrl.keyOrMouse}
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-2 leading-relaxed">
                    {ctrl.tip}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 10 Steps SOP */}
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm">
            <div className="mb-6">
              <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <CheckCircle2 className="size-5 text-emerald-500" />
                新手從零開始 10 步驟實戰 SOP：產出第一張合規圖面
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                嚴格遵循此標準流程，初學者能在 30 分鐘內建立完整的建築空間模型並完成出圖
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {software.beginnerGuide.tenStepsSop.map((step) => (
                <div
                  key={step.step}
                  className="flex items-start gap-4 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 p-4"
                >
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white font-mono text-xs font-bold">
                    {step.step}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">{step.title}</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-mono">
                      {step.action}
                    </p>
                    <p className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded inline-block">
                      💡 核心要訣：{step.keyPoint}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Shortcut Key Cheatsheet */}
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Keyboard className="size-5 text-blue-500" />
                  高頻必備快捷鍵秘笈（左手盲打速查對照表）
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  右手握滑鼠、左手固定鍵盤左側，是所有繪圖高手的共同特徵
                </p>
              </div>

              <div className="flex gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs font-mono">
                {['all', '必須秒按', '高頻常用', '工程利器'].map((f) => (
                  <button
                    key={f}
                    onClick={() => setShortcutFilter(f)}
                    className={`px-2.5 py-1 rounded-lg transition ${
                      shortcutFilter === f
                        ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 font-bold shadow-sm'
                        : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {f === 'all' ? '全部' : f}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {filteredShortcuts.map((sc) => (
                <div
                  key={sc.key}
                  className="flex flex-col justify-between rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 p-3.5"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <kbd className="rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-2.5 py-1 font-mono text-xs font-bold text-blue-600 dark:text-blue-400 shadow-sm">
                      {sc.key}
                    </kbd>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                        sc.frequency === '必須秒按'
                          ? 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300 font-bold'
                          : sc.frequency === '高頻常用'
                          ? 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300'
                          : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
                      }`}
                    >
                      {sc.frequency}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-xs text-slate-800 dark:text-slate-200 block">{sc.command}</span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 block leading-relaxed">
                      {sc.explanation}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fatal Traps & Pro Tips */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Fatal Traps */}
            <div className="rounded-3xl border border-rose-200 dark:border-rose-900/50 bg-rose-50/30 dark:bg-rose-950/10 p-6 sm:p-8 space-y-4">
              <h3 className="font-serif text-lg font-bold text-rose-900 dark:text-rose-200 flex items-center gap-2">
                <AlertTriangle className="size-5 text-rose-500" />
                新手必踩致命陷阱與解藥
              </h3>
              <div className="space-y-3">
                {software.beginnerGuide.fatalTraps.map((trap, idx) => (
                  <div
                    key={trap.trap}
                    className="rounded-2xl border border-rose-200/60 dark:border-rose-900/40 bg-white dark:bg-slate-900 p-4 space-y-1.5"
                  >
                    <span className="font-bold text-xs text-rose-700 dark:text-rose-400 block">
                      ⚠️ 陷阱 0{idx + 1}：{trap.trap}
                    </span>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      <strong>致錯原因：</strong>{trap.reason}
                    </p>
                    <p className="text-xs text-emerald-700 dark:text-emerald-400 font-medium leading-relaxed">
                      <strong>✅ 權威解法：</strong>{trap.solution}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pro Tips */}
            <div className="rounded-3xl border border-blue-200 dark:border-blue-900/50 bg-blue-50/30 dark:bg-blue-950/10 p-6 sm:p-8 space-y-4">
              <h3 className="font-serif text-lg font-bold text-blue-900 dark:text-blue-200 flex items-center gap-2">
                <Lightbulb className="size-5 text-amber-500" />
                專家級工作流心法 (Pro Tips)
              </h3>
              <div className="space-y-3">
                {software.beginnerGuide.proTips.map((tip) => (
                  <div
                    key={tip.title}
                    className="rounded-2xl border border-blue-200/60 dark:border-blue-900/40 bg-white dark:bg-slate-900 p-4 space-y-1"
                  >
                    <span className="font-bold text-xs text-blue-700 dark:text-blue-400 block flex items-center gap-1.5">
                      <Flame className="size-3.5 text-amber-500" />
                      {tip.title}
                    </span>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {tip.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: 業界工作流管線 (Industry Pipeline) */}
        <section id="pipeline" className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Share2 className="size-4 text-blue-500" />
              PART 04 · INDUSTRY PIPELINE & INTEROPERABILITY
            </span>
            <h2 className="mt-1 font-serif text-2xl font-bold text-slate-900 dark:text-white">
              跨軟體協同與檔案格式交換流線
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {software.industryPipeline.softwareRole}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/50 p-4 border border-slate-100 dark:border-slate-800">
              <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 block mb-2">
                支援匯入格式 (Import)
              </span>
              <div className="flex flex-wrap gap-1">
                {software.industryPipeline.fileFormats.import.map((fmt) => (
                  <span key={fmt} className="rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-2 py-0.5 text-xs font-mono text-slate-700 dark:text-slate-300">
                    {fmt}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/50 p-4 border border-slate-100 dark:border-slate-800">
              <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 block mb-2">
                支援匯出格式 (Export)
              </span>
              <div className="flex flex-wrap gap-1">
                {software.industryPipeline.fileFormats.export.map((fmt) => (
                  <span key={fmt} className="rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-2 py-0.5 text-xs font-mono text-blue-700 dark:text-blue-300 font-bold">
                    {fmt}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/50 p-4 border border-slate-100 dark:border-slate-800">
              <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 block mb-2">
                業界常見協同軟體
              </span>
              <div className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                {software.industryPipeline.collaborationWith.map((collab) => (
                  <div key={collab} className="flex items-center gap-1.5">
                    <ChevronRight className="size-3 text-blue-500 shrink-0" />
                    <span>{collab}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: 官方網站與正版教育授權連結 */}
        <section id="official-links" className="rounded-3xl border border-blue-200 dark:border-blue-900/60 bg-gradient-to-r from-blue-50/50 via-white to-purple-50/50 dark:from-blue-950/20 dark:via-slate-900 dark:to-purple-950/20 p-6 sm:p-10 shadow-sm">
          <div className="max-w-2xl mb-6">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
              <ExternalLink className="size-4" />
              OFFICIAL RESOURCES & COMMUNITY
            </span>
            <h2 className="mt-1 font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              官方正版資源、學生教育授權與原廠學習社群
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              堅持使用官方正版與學生教育版軟體，獲取最穩定的修訂更新與原廠安全保證
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href={software.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 hover:border-blue-500 transition shadow-sm"
            >
              <div>
                <span className="text-xs text-slate-400 font-mono block">原廠官方網站</span>
                <span className="font-bold text-sm text-slate-900 dark:text-white mt-1 group-hover:text-blue-600 transition block">
                  造訪 {software.name} 官網
                </span>
              </div>
              <span className="mt-4 inline-flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 font-bold">
                前往官網 <ExternalLink className="size-3" />
              </span>
            </a>

            <a
              href={software.studentLicenseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 hover:border-emerald-500 transition shadow-sm"
            >
              <div>
                <span className="text-xs text-emerald-600 font-mono block font-bold">學生與教育版</span>
                <span className="font-bold text-sm text-slate-900 dark:text-white mt-1 group-hover:text-emerald-600 transition block">
                  申請學生免費授權
                </span>
              </div>
              <span className="mt-4 inline-flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 font-bold">
                申請通道 <ExternalLink className="size-3" />
              </span>
            </a>

            <a
              href={software.docUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 hover:border-purple-500 transition shadow-sm"
            >
              <div>
                <span className="text-xs text-slate-400 font-mono block">官方文檔與手冊</span>
                <span className="font-bold text-sm text-slate-900 dark:text-white mt-1 group-hover:text-purple-600 transition block">
                  原廠完整說明中心
                </span>
              </div>
              <span className="mt-4 inline-flex items-center gap-1 text-xs text-purple-600 dark:text-purple-400 font-bold">
                查閱手冊 <ExternalLink className="size-3" />
              </span>
            </a>

            <a
              href={software.communityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 hover:border-amber-500 transition shadow-sm"
            >
              <div>
                <span className="text-xs text-slate-400 font-mono block">全球使用者社群</span>
                <span className="font-bold text-sm text-slate-900 dark:text-white mt-1 group-hover:text-amber-600 transition block">
                  官方論壇與問答庫
                </span>
              </div>
              <span className="mt-4 inline-flex items-center gap-1 text-xs text-amber-600 dark:text-amber-400 font-bold">
                加入討論 <ExternalLink className="size-3" />
              </span>
            </a>
          </div>
        </section>

        {/* Bottom Pager Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200 dark:border-slate-800">
          <Link
            href={`/cad-software/${prevSoftware.slug}`}
            className="flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2.5 text-xs font-mono font-medium hover:border-blue-500 transition"
          >
            <ArrowLeft className="size-3.5" />
            <span>上一款軟體：{prevSoftware.name}</span>
          </Link>

          <Link
            href="/cad-software"
            className="rounded-xl bg-slate-100 dark:bg-slate-800 px-4 py-2 text-xs font-mono text-slate-600 dark:text-slate-400 hover:bg-slate-200 transition"
          >
            返回電腦繪圖軟體全鑑大廳
          </Link>

          <Link
            href={`/cad-software/${nextSoftware.slug}`}
            className="flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2.5 text-xs font-mono font-medium hover:border-blue-500 transition"
          >
            <span>下一款軟體：{nextSoftware.name}</span>
            <ArrowRight className="size-3.5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
