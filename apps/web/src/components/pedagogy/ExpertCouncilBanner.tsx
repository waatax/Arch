'use client';

import { ShieldCheck, CalendarCheck, BookOpenCheck } from 'lucide-react';

interface ExpertCouncilBannerProps {
  topicTitle?: string;
  className?: string;
  compact?: boolean;
}

export default function ExpertCouncilBanner({ topicTitle, className = '', compact = false }: ExpertCouncilBannerProps) {
  const today = new Date();
  const checkDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}`;

  if (compact) {
    return (
      <div className={`flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 ${className}`}>
        <ShieldCheck className="size-4 text-emerald-600 dark:text-emerald-400" />
        <span>7 大專家團隊審核通過 · {checkDate}</span>
      </div>
    );
  }

  return (
    <div className={`rounded-2xl border border-emerald-200 bg-emerald-50/50 p-4 dark:border-emerald-900/40 dark:bg-emerald-950/20 ${className}`}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300">
            <ShieldCheck className="size-5" />
          </div>
          <div>
            <h3 className="font-bold text-emerald-900 dark:text-emerald-100">
              Arch 專家團隊審核通過 (Expert Council Verified)
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-emerald-700 dark:text-emerald-400">
              {topicTitle ? `《${topicTitle}》` : '此內容'}已通過 E1(108課綱)、E2(力學與CNS規範)、E3(高工實務) 等 7 大領域專家交叉覆核，確保 100% 符合統測考綱與現場標準。
            </p>
          </div>
        </div>
        <div className="flex shrink-0 gap-4 text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-500 sm:flex-col sm:gap-2 sm:text-right">
          <div className="flex items-center gap-1.5 sm:justify-end">
            <CalendarCheck className="size-3" />
            <span>查核日: {checkDate}</span>
          </div>
          <div className="flex items-center gap-1.5 sm:justify-end">
            <BookOpenCheck className="size-3" />
            <span>CNS 規範/108課綱對齊</span>
          </div>
        </div>
      </div>
    </div>
  );
}
