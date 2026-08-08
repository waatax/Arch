export default function Footer() {
  return (
    <footer className="safe-bottom w-full bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-800 py-8 sm:py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Brand */}
          <div>
            <p className="font-serif text-lg font-semibold text-slate-900 dark:text-white tracking-tight">
              Arch
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-md leading-relaxed">
              台灣高工建築科學習、建築素養與志向養成平台
            </p>
          </div>

          {/* Info Tags */}
          <div className="flex flex-wrap gap-2 sm:gap-3 text-xs font-mono">
            <span className="px-3 py-1.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full text-slate-600 dark:text-slate-400">
              108 課綱對齊
            </span>
            <span className="px-3 py-1.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full text-slate-600 dark:text-slate-400">
              統測四考科
            </span>
            <span className="px-3 py-1.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full text-slate-600 dark:text-slate-400">
              開放學習資料庫
            </span>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/60 text-xs text-slate-600 dark:text-slate-400/70 text-center md:text-left">
          © {new Date().getFullYear()} Arch — Single Source of Truth · 公共學習資料庫
        </div>
      </div>
    </footer>
  );
}
