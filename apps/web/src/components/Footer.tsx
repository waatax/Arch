import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="safe-bottom w-full bg-slate-50/90 dark:bg-slate-900/90 border-t border-slate-200 dark:border-slate-800 py-12 sm:py-16 mt-auto transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-200 dark:border-slate-800">
          {/* Brand & Mission & Experts */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-lg bg-blue-700 dark:bg-blue-600 text-white font-mono text-sm font-bold">
                ◺
              </span>
              <span className="font-serif text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                Arch
              </span>
              <span className="rounded-full bg-blue-700/10 dark:bg-blue-400/10 px-2 py-0.5 text-[10px] font-mono font-bold text-blue-700 dark:text-blue-300 border border-blue-700/20">
                V8.01
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 max-w-md">
              面向台灣高工建築科學生的開放學習基地。整合 108 課綱技術型高中土木與建築群大綱、四技二專統測歷屆 925 道全真題、動態圖解實驗室、營造工程現場檢驗手冊與本機優先的無障礙自主學習架構。
            </p>
            <div className="rounded-xl border border-emerald-200/50 bg-emerald-50/50 p-3 dark:border-emerald-900/30 dark:bg-emerald-950/20">
              <p className="mb-2 text-[10px] font-bold tracking-wider text-emerald-800 dark:text-emerald-400">7 大領域專家團隊品質背書 (EXPERT COUNCIL VERIFIED)</p>
              <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[10px] text-emerald-700 dark:text-emerald-500">
                <span>E1: 課綱與升學策劃</span>
                <span>E2: 工程力學與材料審核</span>
                <span>E3: 技術高中現場教學</span>
                <span>E4: 認知科學與數位評量</span>
                <span>E5: 全端與極致離線架構</span>
                <span>E6: Android 性能體驗</span>
                <span className="col-span-2">E7: 建築美學與無障礙 WCAG 2.2 AA</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-2.5 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-slate-600 dark:text-slate-400">
                108 課綱技術型高中標準
              </span>
              <span className="px-2.5 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-slate-600 dark:text-slate-400">
                13 科 · 99 逐頁主題
              </span>
              <span className="px-2.5 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-slate-600 dark:text-slate-400">
                統測五科全收錄 (925 題)
              </span>
            </div>
          </div>

          {/* Core Hubs */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider">
              學習與實務核心專區
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400 font-mono">
              <li>
                <Link href="/visualizers" className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors text-blue-700 dark:text-blue-400 font-bold">
                  • 🔬 互動圖解實驗室 (Interactive Lab)
                </Link>
              </li>
              <li>
                <Link href="/field-guide" className="hover:text-teal-700 dark:hover:text-teal-400 transition-colors text-teal-700 dark:text-teal-400 font-bold">
                  • 🏗️ 營造工程現場手冊 (Field Guide)
                </Link>
              </li>
              <li>
                <Link href="/cheatsheets" className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors text-amber-700 dark:text-amber-400 font-bold">
                  • ⚡ 統測考點速查指南 (Cheatsheets)
                </Link>
              </li>
              <li>
                <Link href="/curriculum" className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
                  • 課程地圖 (13 科 99 章)
                </Link>
              </li>
              <li>
                <Link href="/goals" className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
                  • 終極目標：三大專業證照地圖
                </Link>
              </li>
              <li>
                <Link href="/exam-116" className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
                  • 116 四技二專土木建築群指南
                </Link>
              </li>
              <li>
                <Link href="/practice" className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
                  • 歷屆統測全科目模擬測驗
                </Link>
              </li>
              <li>
                <Link href="/cases" className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors">
                  • 台灣經典建築案例實驗室
                </Link>
              </li>
            </ul>
          </div>

          {/* Professional Subjects */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider">
              統測專業核心考科
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400 font-mono">
              <li>
                <Link href="/subjects/mechanics" className="hover:text-teal-600 transition-colors">
                  • 專業（一）：工程力學 (7 章)
                </Link>
              </li>
              <li>
                <Link href="/subjects/materials" className="hover:text-amber-600 transition-colors">
                  • 專業（一）：材料與試驗 (12 章)
                </Link>
              </li>
              <li>
                <Link href="/subjects/surveying" className="hover:text-emerald-600 transition-colors">
                  • 專業（二）：測量實習 (6 章)
                </Link>
              </li>
              <li>
                <Link href="/subjects/drafting" className="hover:text-sky-600 transition-colors">
                  • 專業（二）：製圖實習 (8 章)
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-blue-600 transition-colors">
                  • 官方課綱與學習資源庫
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & privacy statement */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400 font-mono">
          <div>
            © {new Date().getFullYear()} Arch — 台灣高工建築科開放學習基地 · 靜態極速架構
          </div>
          <div className="flex items-center gap-4">
            <Link href="/goals" className="hover:text-slate-800 dark:hover:text-slate-200 transition-colors">證照地圖</Link>
            <span>·</span>
            <Link href="/resources" className="hover:text-slate-800 dark:hover:text-slate-200 transition-colors">官方來源</Link>
            <span>·</span>
            <span>開放教育資源 (OER)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
