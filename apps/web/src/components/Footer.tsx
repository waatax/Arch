import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="safe-bottom w-full bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 sm:py-16 mt-auto transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-200 dark:border-slate-800">
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-lg bg-blue-600 dark:bg-blue-500 text-white font-mono text-sm font-bold">
                ◺
              </span>
              <span className="font-serif text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                Arch
              </span>
              <span className="rounded-full bg-blue-600/10 dark:bg-blue-400/10 px-2 py-0.5 text-[10px] font-mono font-bold text-blue-700 dark:text-blue-300 border border-blue-600/20">
                V5.0
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 max-w-md">
              面向台灣高工建築科學生的開放學習平台。將四技二專統測（土木與建築群）、建築專業實作、台灣經典建築案例與本機優先的自主學習教練整合在同一條清晰路徑。
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-2.5 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-slate-600 dark:text-slate-400">
                108 課綱技術型高中標準
              </span>
              <span className="px-2.5 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-slate-600 dark:text-slate-400">
                統測五科全收錄 (925 題)
              </span>
              <span className="px-2.5 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-slate-600 dark:text-slate-400">
                裝置端本機優先存檔
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-sm text-slate-900 dark:text-white uppercase tracking-wider">
              學習與題庫資源
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400 font-mono">
              <li>
                <Link href="/curriculum" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  • 完整 86 章課程地圖
                </Link>
              </li>
              <li>
                <Link href="/practice" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  • 歷屆統測全科目模擬器
                </Link>
              </li>
              <li>
                <Link href="/exams" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  • 111–115 五年統測題庫解析
                </Link>
              </li>
              <li>
                <Link href="/cases" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  • 台灣建築案例實驗室
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
                  • 專業（一）：基礎工程力學
                </Link>
              </li>
              <li>
                <Link href="/subjects/materials" className="hover:text-amber-600 transition-colors">
                  • 專業（一）：材料與試驗
                </Link>
              </li>
              <li>
                <Link href="/subjects/surveying" className="hover:text-emerald-600 transition-colors">
                  • 專業（二）：測量實習
                </Link>
              </li>
              <li>
                <Link href="/subjects/drafting" className="hover:text-sky-600 transition-colors">
                  • 專業（二）：製圖實習
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & privacy statement */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400 font-mono">
          <div>
            © {new Date().getFullYear()} Arch — 台灣高工建築科開放學習平台 · 靜態無伺服架構
          </div>
          <div className="flex items-center gap-4">
            <span>本機端練習資料隱私保護</span>
            <span>·</span>
            <span>開放教育資源 (OER)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
