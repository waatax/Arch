'use client';

import { useState } from 'react';
import { BookMarked, HelpCircle, X } from 'lucide-react';

interface Step0TooltipProps {
  prerequisites?: string[];
}

export default function Step0Tooltip({ prerequisites }: Step0TooltipProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!prerequisites || prerequisites.length === 0) return null;

  return (
    <div className="rounded-2xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/40 dark:bg-amber-950/20 p-4 transition-all">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BookMarked className="size-4 text-amber-700 dark:text-amber-400 shrink-0" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300">
            Step-0 零痛先備跳板 (Prerequisites)
          </span>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1 text-[11px] font-bold text-amber-800 dark:text-amber-300 hover:text-amber-950 dark:hover:text-amber-100 transition-colors cursor-pointer"
          aria-expanded={isOpen}
          aria-label={isOpen ? '收合先備知識' : '展開先備知識'}
        >
          <HelpCircle className="size-3.5" />
          <span>{isOpen ? '收合' : '30秒先備檢核'}</span>
        </button>
      </div>

      <div className="mt-2 flex flex-wrap gap-1.5">
        {prerequisites.map((req, idx) => (
          <span
            key={idx}
            className="inline-flex items-center rounded-lg bg-amber-100/70 dark:bg-amber-900/40 px-2.5 py-1 text-xs font-medium text-amber-900 dark:text-amber-200 border border-amber-200/80 dark:border-amber-800/60"
          >
            ✓ {req}
          </span>
        ))}
      </div>

      {isOpen && (
        <div className="mt-3 rounded-xl border border-amber-300 dark:border-amber-800 bg-white dark:bg-slate-900 p-3.5 text-xs text-slate-700 dark:text-slate-300 space-y-2 shadow-sm animate-fade-in-up">
          <div className="flex items-center justify-between font-bold text-amber-900 dark:text-amber-200">
            <span>💡 國中與基礎銜接提醒</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              aria-label="關閉"
            >
              <X className="size-3.5" />
            </button>
          </div>
          <p className="leading-relaxed">
            如果在閱讀本章時感到計算吃力，90% 的原因是上述先備公式（如直角三角形三角比或單位因次換算）尚未完全反射。建議先複習上述基礎概念，即可無痛吸收本章核心！
          </p>
        </div>
      )}
    </div>
  );
}
