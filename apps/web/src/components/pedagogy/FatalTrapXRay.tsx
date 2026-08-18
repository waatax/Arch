'use client';

import { useState } from 'react';
import { AlertOctagon, CheckCircle2, ChevronDown, Flame, ShieldAlert } from 'lucide-react';
import MathText from '@/components/MathText';
import type { FatalTrapItem } from '@/data/types';

interface FatalTrapXRayProps {
  traps?: FatalTrapItem[];
}

export default function FatalTrapXRay({ traps }: FatalTrapXRayProps) {
  const [isOpen, setIsOpen] = useState(true);

  if (!traps || traps.length === 0) return null;

  return (
    <section aria-labelledby="fatal-traps-heading" className="rounded-3xl border border-rose-200 dark:border-rose-900/50 bg-rose-50/20 dark:bg-rose-950/10 p-5 sm:p-7 shadow-xs space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex size-9 items-center justify-center rounded-xl bg-rose-600 text-white shadow-xs">
            <Flame className="size-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400">
                補教名師預警 · 致命陷阱 X 光比對
              </span>
              <span className="rounded-full bg-rose-100 dark:bg-rose-900/60 px-2 py-0.5 text-[10px] font-bold text-rose-800 dark:text-rose-200">
                80% 考生失分區
              </span>
            </div>
            <h3 id="fatal-traps-heading" className="font-serif text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              考場必死盲點與正確思路 X 光穿透
            </h3>
          </div>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
          aria-expanded={isOpen}
          aria-label={isOpen ? '收合致命陷阱' : '展開致命陷阱'}
        >
          <span>{isOpen ? '收合' : '展開'}</span>
          <ChevronDown className={`size-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
        補習班大數據統計：統測考生在此主題最常犯的直覺推導錯誤。在下筆作答前，先用 X 光比對「死穴思維」與「滿分推導」。
      </p>

      {isOpen && (
        <div className="space-y-4 pt-1">
          {traps.map((trap, idx) => (
            <div key={idx} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 overflow-hidden shadow-xs">
              {/* Trap Header */}
              <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800/80 bg-slate-50/80 dark:bg-slate-800/50 px-4 py-2.5 text-xs font-bold text-slate-700 dark:text-slate-300">
                <ShieldAlert className="size-4 text-rose-600 dark:text-rose-400 shrink-0" />
                <span>陷阱 #{idx + 1}：{trap.trapDescription}</span>
              </div>

              {/* Dual-Column X-Ray Comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-800">
                {/* Wrong Thinking Column (Red Zone) */}
                <div className="xray-danger p-4 sm:p-5 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-rose-800 dark:text-rose-300">
                    <AlertOctagon className="size-4 shrink-0 text-rose-600 dark:text-rose-400" />
                    <span>❌ 80% 考生的直覺誤區 (Fatal Pitfall)</span>
                  </div>
                  <div className="text-xs sm:text-sm text-rose-950 dark:text-rose-100 leading-relaxed">
                    <MathText content={trap.wrongThinking} />
                  </div>
                </div>

                {/* Correct Thinking Column (Green Zone) */}
                <div className="xray-safe p-4 sm:p-5 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-800 dark:text-emerald-300">
                    <CheckCircle2 className="size-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    <span>✅ 滿分專家的正規破題 (Mastery Derivation)</span>
                  </div>
                  <div className="text-xs sm:text-sm text-emerald-950 dark:text-emerald-100 leading-relaxed font-medium">
                    <MathText content={trap.correctThinking} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
