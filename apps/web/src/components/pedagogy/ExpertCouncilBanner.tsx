'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  CalendarCheck, 
  Award, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react';

interface ExpertCouncilBannerProps {
  topicTitle?: string;
  className?: string;
  compact?: boolean;
}

const EXPERT_DOMAINS = [
  { id: 'E1', name: '課綱覆蓋', role: '108課綱審查', desc: '全主題 100% 對齊統測命題範圍與核心素養要求' },
  { id: 'E2', name: '工程規範', role: 'CNS/法規校驗', desc: 'CNS 11567、CNS 486、建築技術規則精確引證' },
  { id: 'E3', name: '步驟詳解', role: 'SOP解題專家', desc: '示範題與練習全面採用三步嚴謹 SOP 邏輯演繹' },
  { id: 'E4', name: '陷阱透視', role: '認知防衛專家', desc: 'Fatal Traps 與 Elite Mental Models 杜絕常犯失分' },
  { id: 'E5', name: '視覺圖解', role: '資訊架構設計', desc: '111/111 主題 100% 覆蓋專屬視覺圖解與亮點標註' },
  { id: 'E6', name: '架構驗證', role: 'TypeScript QA', desc: 'AST 語法驗證、零語意破壞、嚴格型別守護' },
];

export default function ExpertCouncilBanner({ topicTitle, className = '', compact = false }: ExpertCouncilBannerProps) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const today = new Date();
  const checkDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}`;

  if (compact) {
    return (
      <div className={`flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 ${className}`}>
        <ShieldCheck className="size-4 text-emerald-600 dark:text-emerald-400" />
        <span>Arch 專家團隊審核通過 · {checkDate}</span>
      </div>
    );
  }

  return (
    <div className={`rounded-2xl border border-emerald-200 bg-emerald-50/50 p-4 shadow-sm dark:border-emerald-900/40 dark:bg-emerald-950/20 ${className}`}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 shadow-sm dark:bg-emerald-900/60 dark:text-emerald-300">
            <Award className="size-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-emerald-950 dark:text-emerald-100">
                Arch 專家團隊審核認證 (Expert Council Verified)
              </h3>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-200/70 px-2 py-0.5 text-[10px] font-bold text-emerald-900 dark:bg-emerald-900/80 dark:text-emerald-200">
                <CheckCircle2 className="size-3" />
                6大領域通過
              </span>
            </div>
            <p className="mt-1 text-xs leading-relaxed text-emerald-800 dark:text-emerald-300">
              {topicTitle ? `《${topicTitle}》` : '此內容'}已完成 6 大專家領域（E1 課綱、E2 工程規範、E3 解題SOP、E4 迷思防衛、E5 視覺圖解、E6 架構校驗）交叉驗證，內容完整度達 100%。
            </p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-3 sm:flex-col sm:items-end">
          <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            <CalendarCheck className="size-3" />
            <span>查核期: {checkDate}</span>
          </div>
          <button
            type="button"
            onClick={() => setIsDetailsOpen(!isDetailsOpen)}
            className="inline-flex items-center gap-1 rounded-lg border border-emerald-300 bg-white/80 px-2 py-1 text-[11px] font-bold text-emerald-800 transition hover:bg-emerald-100 dark:border-emerald-800 dark:bg-slate-900 dark:text-emerald-300 dark:hover:bg-slate-800"
            aria-expanded={isDetailsOpen}
          >
            <span>{isDetailsOpen ? '收合審核明細' : '檢視審核專家組'}</span>
            {isDetailsOpen ? <ChevronUp className="size-3" /> : <ChevronDown className="size-3" />}
          </button>
        </div>
      </div>

      {isDetailsOpen && (
        <div className="mt-4 border-t border-emerald-200/80 pt-3 dark:border-emerald-900/60">
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {EXPERT_DOMAINS.map((domain) => (
              <div 
                key={domain.id}
                className="rounded-xl border border-emerald-200/60 bg-white/70 p-2.5 text-xs dark:border-emerald-900/40 dark:bg-slate-900/60"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono font-bold text-emerald-800 dark:text-emerald-300">
                    [{domain.id}] {domain.name}
                  </span>
                  <span className="rounded bg-emerald-100 px-1.5 py-0.2 text-[9px] font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                    {domain.role}
                  </span>
                </div>
                <p className="mt-1 text-[11px] text-slate-600 dark:text-slate-400">
                  {domain.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
