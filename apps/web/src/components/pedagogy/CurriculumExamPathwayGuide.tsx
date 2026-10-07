'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  GraduationCap,
  Compass,
  BookOpen,
  Calendar,
  Sparkles,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';
import {
  IconClassicalOrder,
  IconDraftingTools,
  IconTrussBeam,
  IconFastFormula,
} from '@/components/ui/ArchitecturalIcons';

export default function CurriculumExamPathwayGuide() {
  const [activeTrack, setActiveTrack] = useState<'both' | 'gsat' | 'tcte'>('both');

  return (
    <section className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-9" aria-labelledby="curriculum-guide-heading">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-6 dark:border-slate-800">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700 dark:bg-blue-950/80 dark:text-blue-300">
              <Sparkles className="size-3.5" /> 108 課綱升學全景圖
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-mono font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-400">
              過去 7 年（109–115）歷屆深度對齊
            </span>
          </div>
          <h2 id="curriculum-guide-heading" className="mt-3 font-serif text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
            學測 GSAT × 統測 TCTE 雙軌大考預備導航
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            無論你立志透過學測申請一般大學五年制建築學系（成大、東海、逢甲、實踐等），或是經由統測報考頂尖科技大學建築系（台科大、北科大、高科大等），Arch 13 科 120 主題與 7 年大考題庫提供無斷層的素養教學。
          </p>
        </div>

        {/* Track Filter Tabs */}
        <div className="flex rounded-xl bg-slate-100 p-1 dark:bg-slate-800 text-xs font-bold">
          <button
            type="button"
            onClick={() => setActiveTrack('both')}
            className={`rounded-lg px-3.5 py-2 transition-all cursor-pointer ${
              activeTrack === 'both'
                ? 'bg-white text-blue-700 shadow-xs dark:bg-slate-900 dark:text-blue-400'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
            }`}
          >
            雙軌全覽
          </button>
          <button
            type="button"
            onClick={() => setActiveTrack('gsat')}
            className={`rounded-lg px-3.5 py-2 transition-all cursor-pointer ${
              activeTrack === 'gsat'
                ? 'bg-white text-blue-700 shadow-xs dark:bg-slate-900 dark:text-blue-400'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
            }`}
          >
            學測大學軌 (GSAT)
          </button>
          <button
            type="button"
            onClick={() => setActiveTrack('tcte')}
            className={`rounded-lg px-3.5 py-2 transition-all cursor-pointer ${
              activeTrack === 'tcte'
                ? 'bg-white text-blue-700 shadow-xs dark:bg-slate-900 dark:text-blue-400'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
            }`}
          >
            統測科大軌 (TCTE)
          </button>
        </div>
      </div>

      {/* Track Cards Grid */}
      <div className="mt-7 grid gap-6 lg:grid-cols-2">
        {/* Track A: GSAT */}
        {(activeTrack === 'both' || activeTrack === 'gsat') && (
          <div className="rounded-2xl border border-blue-200/80 bg-blue-50/30 p-6 dark:border-blue-900/40 dark:bg-blue-950/20">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
                  <GraduationCap className="size-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    Pathway A · 大學申請入學
                  </span>
                  <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white">
                    大學學測軌道 (GSAT / B.Arch)
                  </h3>
                </div>
              </div>
              <span className="rounded-md bg-blue-100 px-2 py-0.5 text-[10px] font-bold text-blue-800 dark:bg-blue-900/60 dark:text-blue-200">
                5 年制建築學士
              </span>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
              主要目標校系：國立成功大學建築系、東海大學建築系、中原大學建築系、逢甲大學建築系、實踐大學建築設計學系、淡江大學建築系等。
            </p>

            <div className="mt-5 space-y-3">
              <div className="rounded-xl bg-white p-3.5 shadow-xs dark:bg-slate-800/90 border border-slate-100 dark:border-slate-700/60">
                <p className="text-xs font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                  <Compass className="size-4 text-blue-600 dark:text-blue-400" />
                  108 課綱學測採計重點
                </p>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-normal">
                  國文、英文、數學 A/B，以及自然科（物理/化學）或社會科（歷史/地理/公民）。重視跨領域探索、空間觀察與論述能力。
                </p>
              </div>

              <div className="rounded-xl bg-white p-3.5 shadow-xs dark:bg-slate-800/90 border border-slate-100 dark:border-slate-700/60">
                <p className="text-xs font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                  <BookOpen className="size-4 text-blue-600 dark:text-blue-400" />
                  Arch 對應充實科目
                </p>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {[
                    { name: '國語文', href: '/subjects/chinese' },
                    { name: '英語文', href: '/subjects/english' },
                    { name: '自然物理', href: '/subjects/physics' },
                    { name: '自然化學', href: '/subjects/chemistry' },
                    { name: '歷史環境', href: '/subjects/history' },
                    { name: '地理分析', href: '/subjects/geography' },
                    { name: '公民法規', href: '/subjects/civics' },
                  ].map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className="rounded-lg bg-blue-50 px-2 py-1 text-[11px] font-bold text-blue-700 hover:bg-blue-600 hover:text-white transition-colors dark:bg-blue-900/40 dark:text-blue-300"
                    >
                      {sub.name} →
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-blue-200/60 pt-4 dark:border-blue-900/40">
              <span className="text-[11px] text-slate-500">學習歷程自述 · 空間作品集準備</span>
              <Link
                href="/pathway"
                className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline dark:text-blue-400"
              >
                探索 B.Arch 大學課綱全景 <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        )}

        {/* Track B: TCTE */}
        {(activeTrack === 'both' || activeTrack === 'tcte') && (
          <div className="rounded-2xl border border-teal-200/80 bg-teal-50/30 p-6 dark:border-teal-900/40 dark:bg-teal-950/20">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-xl bg-teal-600 text-white shadow-sm">
                  <IconClassicalOrder size={24} />
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400">
                    Pathway B · 四技二專升學
                  </span>
                  <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white">
                    技高統測軌道 (TCTE / 土建群 06)
                  </h3>
                </div>
              </div>
              <span className="rounded-md bg-teal-100 px-2 py-0.5 text-[10px] font-bold text-teal-800 dark:bg-teal-900/60 dark:text-teal-200">
                頂尖科技大學
              </span>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
              主要目標校系：國立臺灣科技大學建築系、國立臺北科技大學建築系、國立雲林科技大學建築與室內設計系、國立高雄科技大學等。
            </p>

            <div className="mt-5 space-y-3">
              <div className="rounded-xl bg-white p-3.5 shadow-xs dark:bg-slate-800/90 border border-slate-100 dark:border-slate-700/60">
                <p className="text-xs font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                  <IconDraftingTools size={16} className="text-teal-600 dark:text-teal-400" />
                  108 課綱統測考科完整覆蓋
                </p>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-normal">
                  共同科目（國、英、數C）+ 專業科目（一）基礎工程力學與材料試驗 + 專業科目（二）測量實習與製圖實習。
                </p>
              </div>

              <div className="rounded-xl bg-white p-3.5 shadow-xs dark:bg-slate-800/90 border border-slate-100 dark:border-slate-700/60">
                <p className="text-xs font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                  <IconTrussBeam size={16} className="text-teal-600 dark:text-teal-400" />
                  Arch 對應核心考科
                </p>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {[
                    { name: '基礎工程力學 (13章)', href: '/subjects/mechanics' },
                    { name: '材料與試驗 (13章)', href: '/subjects/materials' },
                    { name: '測量實習 (8章)', href: '/subjects/surveying' },
                    { name: '製圖實習 (16章)', href: '/subjects/drafting' },
                    { name: '數學 C (6章)', href: '/subjects/math-c' },
                  ].map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className="rounded-lg bg-teal-50 px-2 py-1 text-[11px] font-bold text-teal-800 hover:bg-teal-600 hover:text-white transition-colors dark:bg-teal-900/40 dark:text-teal-200"
                    >
                      {sub.name} →
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-teal-200/60 pt-4 dark:border-teal-900/40">
              <span className="text-[11px] text-slate-500">116 新制自主選考防誤導策略</span>
              <Link
                href="/exam-116"
                className="inline-flex items-center gap-1 text-xs font-bold text-teal-700 hover:underline dark:text-teal-400"
              >
                解讀 116 考招選考規則 <ArrowRight className="size-3.5" />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Past 7 Years Quality Assurance Banner */}
      <div className="mt-7 rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-800/40">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-blue-600 text-white font-mono font-bold text-sm">
              7Y
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                過去 7 年（109–115 學年度）大考題目完整對齊與名師解析
                <TrendingUp className="size-4 text-emerald-500" />
              </h4>
              <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-400">
                100% 逐題提供「五段式名師思維 SOP（審題線索 ➔ 核心原理 ➔ 官方正解 ➔ 誘答陷阱 ➔ 延伸驗算）」與課綱教學頁直達按鈕。
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <Link
              href="/exams"
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 shadow-xs cursor-pointer"
            >
              <Calendar className="size-3.5 text-blue-600" />
              查看 7 年歷屆試題庫 →
            </Link>
            <Link
              href="/practice"
              className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2 text-xs font-bold text-white hover:bg-blue-700 shadow-xs cursor-pointer"
            >
              <IconFastFormula size={14} />
              進入全真模擬考場 →
            </Link>
          </div>
        </div>

        {/* 7-Year Timeline Mini Badges */}
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7 pt-4 border-t border-slate-200/80 dark:border-slate-700/60 text-center">
          {[
            { year: 115, label: '最新前瞻模考', tag: '素養整合' },
            { year: 114, label: '第三屆新題型', tag: '情境題組' },
            { year: 113, label: '第二屆真題', tag: '空間圖表' },
            { year: 112, label: '首屆深化應用', tag: '規範推論' },
            { year: 111, label: '108課綱首屆', tag: '新制基準' },
            { year: 110, label: '新制前導試題', tag: '過渡試測' },
            { year: 109, label: '課綱銜接大考', tag: '基礎底蘊' },
          ].map((item) => (
            <div key={item.year} className="rounded-lg bg-white p-2 text-xs shadow-2xs dark:bg-slate-800 border border-slate-100 dark:border-slate-700/50">
              <span className="font-mono font-bold text-blue-600 dark:text-blue-400">{item.year} 學年</span>
              <p className="font-medium text-[11px] text-slate-800 dark:text-slate-200 mt-0.5">{item.label}</p>
              <span className="inline-block mt-1 rounded bg-slate-100 dark:bg-slate-700 px-1.5 py-0.2 text-[10px] text-slate-600 dark:text-slate-300">
                {item.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
