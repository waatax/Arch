'use client';

import { useState } from 'react';
import { ChevronDown, Compass, Sparkles, Zap } from 'lucide-react';
import MathText from '@/components/MathText';
import type { EliteMentalModelItem } from '@/data/types';

interface EliteMentalModelProps {
  models?: EliteMentalModelItem[];
  topicTitle: string;
}

export default function EliteMentalModel({ models, topicTitle }: EliteMentalModelProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!models || models.length === 0) return null;

  return (
    <section aria-labelledby="elite-model-heading" className="rounded-3xl elite-panel p-5 sm:p-7 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="flex size-9 items-center justify-center rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-xs">
            <Compass className="size-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                學霸思維透視鏡 · 降維打擊
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-400/10 px-2 py-0.5 text-[10px] font-bold text-amber-300 border border-amber-400/30">
                <Sparkles className="size-3" /> 台大學霸解題視角
              </span>
            </div>
            <h3 id="elite-model-heading" className="font-serif text-lg sm:text-xl font-bold text-white">
              {topicTitle} · 頂層心智模型與秒殺直覺
            </h3>
          </div>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1.5 text-xs font-bold text-amber-300/80 hover:text-amber-200 transition-colors cursor-pointer px-3 py-1.5 rounded-xl border border-amber-500/30 bg-amber-950/40 hover:bg-amber-900/50"
          aria-expanded={isExpanded}
          aria-label={isExpanded ? '收合學霸思維' : '展開學霸思維'}
        >
          <span>{isExpanded ? '收合心法' : '解鎖學霸心法'}</span>
          <ChevronDown className={`size-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
        </button>
      </div>

      <p className="text-xs text-slate-300/90 leading-relaxed">
        台大/建北學霸讀書不是死背公式，而是建立「極端值驗算法」、「量綱同性原理」與「第一性原理直覺」。看懂標準解法後，點開查看如何將題目降維秒殺。
      </p>

      {isExpanded && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 animate-fade-in-up">
          {models.map((model, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-amber-500/20 bg-black/40 p-4 space-y-2 backdrop-blur-xs hover:border-amber-500/40 transition-colors"
            >
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-300">
                <Zap className="size-4 text-amber-400 shrink-0" />
                <span>心法 #{idx + 1}：{model.technique}</span>
              </div>
              <div className="text-xs text-slate-200 leading-relaxed">
                <MathText content={model.explanation} />
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
