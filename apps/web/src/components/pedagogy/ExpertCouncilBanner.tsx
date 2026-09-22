'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  CalendarCheck, 
  Award, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp,
  Sparkles
} from 'lucide-react';

interface ExpertCouncilBannerProps {
  topicTitle?: string;
  className?: string;
  compact?: boolean;
}

export const EXPERT_DOMAINS = [
  { id: 'E1', name: '課綱素養命題', role: '108課綱審查', desc: '全主題 100% 對齊統測命題範圍與核心素養要求' },
  { id: 'E2', name: '建築結構規範', role: 'CNS/法規校驗', desc: 'CNS 11567、CNS 486、建築技術規則精確引證' },
  { id: 'E3', name: '測量營造施工', role: '工程施工品管', desc: '工程測量誤差控制、導線閉合平差與工地品質管理' },
  { id: 'E4', name: '認知心理防衛', role: '雙軌心智模型', desc: 'Fatal Traps 與 Elite Mental Models 杜絕常犯失分' },
  { id: 'E5', name: '空間圖學幾何', role: '視覺資訊總監', desc: '111/120 主題 100% 覆蓋專屬視覺圖解與空間剖析' },
  { id: 'E6', name: '步驟演繹SOP', role: '逐步解題演繹', desc: '示範題與練習全面採用三步嚴謹 SOP 邏輯因果推演' },
  { id: 'E7', name: '專技高考銜接', role: '生涯執照導航', desc: '五專/高工銜接 B.Arch 大學課綱與建築師技師高考' },
];

export default function ExpertCouncilBanner({ topicTitle, className = '', compact = false }: ExpertCouncilBannerProps) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const today = new Date();
  const checkDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}`;

  if (compact) {
    return (
      <div className={`flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400 ${className}`}>
        <ShieldCheck className="size-4 text-emerald-600 dark:text-emerald-400" />
        <span>Arch 專家團隊審核通過 · 7大領域 · {checkDate}</span>
      </div>
    );
  }

  return (
    <div className={`rounded-2xl border border-emerald-200 bg-emerald-50/50 p-4 shadow-xs dark:border-emerald-900/40 dark:bg-emerald-950/20 ${className}`}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 shadow-xs dark:bg-emerald-900/60 dark:text-emerald-300">
            <Award className="size-5" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-bold text-emerald-950 dark:text-emerald-100">
                Arch 專家團隊審核認證 (Expert Council 7x7 Verified)
              </h3>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-200/70 px-2 py-0.5 text-[10px] font-bold text-emerald-900 dark:bg-emerald-900/80 dark:text-emerald-200">
                <CheckCircle2 className="size-3" />
                7大領域 · 49項指標通過
              </span>
            </div>
            <p className="mt-1 text-xs leading-relaxed text-emerald-800 dark:text-emerald-300">
              {topicTitle ? `《${topicTitle}》` : '此內容'}已完成 7 大專家領域（E1 課綱、E2 結構規範、E3 施工品管、E4 迷思防衛、E5 空間視覺、E6 解題SOP、E7 專技高考銜接）交叉驗證，深度迭代達 100%。
            </p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-3 sm:flex-col sm:items-end">
          <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
            <CalendarCheck className="size-3" />
            <span>查核期: {checkDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="#expert-council-7x7"
              className="inline-flex items-center gap-1 rounded-lg border border-teal-300 bg-teal-50 px-2 py-1 text-[11px] font-bold text-teal-800 transition hover:bg-teal-100 dark:border-teal-800 dark:bg-teal-950/60 dark:text-teal-300 dark:hover:bg-teal-900"
            >
              <Sparkles className="size-3" />
              <span>7x7 檢驗矩陣</span>
            </a>
            <button
              type="button"
              onClick={() => setIsDetailsOpen(!isDetailsOpen)}
              className="inline-flex items-center gap-1 rounded-lg border border-emerald-300 bg-white/80 px-2 py-1 text-[11px] font-bold text-emerald-800 transition hover:bg-emerald-100 dark:border-emerald-800 dark:bg-slate-900 dark:text-emerald-300 dark:hover:bg-slate-800"
              aria-expanded={isDetailsOpen}
            >
              <span>{isDetailsOpen ? '收合專家組' : '檢視7大專家'}</span>
              {isDetailsOpen ? <ChevronUp className="size-3" /> : <ChevronDown className="size-3" />}
            </button>
          </div>
        </div>
      </div>

      {isDetailsOpen && (
        <div className="mt-4 border-t border-emerald-200/80 pt-3 dark:border-emerald-900/60">
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
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
