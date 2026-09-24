'use client';

import { useState } from 'react';
import { Sparkles, Check, Copy, Flame, ShieldAlert, Compass, BookOpen, Layers } from 'lucide-react';
import type { SubjectData, TopicContent } from '@/data/types';
import type { TopicDeepKnowledge } from '@/lib/pedagogy/topicKnowledgeExpander';
import type { TopicRealLifeGuide } from '@/lib/pedagogy/realLifeHelpers';
import MathText from '@/components/MathText';

interface TopicKnowledgeHighlightsProps {
  subject: SubjectData;
  topic: TopicContent;
  deepKnowledge: TopicDeepKnowledge;
  realLifeGuide: TopicRealLifeGuide;
}

export default function TopicKnowledgeHighlights({
  subject,
  topic,
  deepKnowledge,
  realLifeGuide,
}: TopicKnowledgeHighlightsProps) {
  const [copied, setCopied] = useState(false);

  // Extract first primary formula if available
  const primaryFormulaConcept = topic.concepts.find((c) => c.formula);
  const primaryFormula = primaryFormulaConcept?.formula;

  // Primary fatal trap
  const primaryTrap = topic.fatalTraps?.[0];

  // Quick summary text for clipboard copy
  const handleCopyHighlights = async () => {
    const textToCopy = `【${topic.title} · 核心知識亮點速記】
📌 核心精髓：${realLifeGuide.oneSentenceRecap}
🎯 統測考頻：${deepKnowledge.examTrend.frequency}
⚡ 秒殺口訣：${deepKnowledge.examTrend.killerTrick}
${primaryFormula ? `📐 必背公式：${primaryFormula}\n` : ''}${primaryTrap ? `⚠️ 易錯盲區：${primaryTrap.wrongThinking} ➔ 應為：${primaryTrap.correctThinking}\n` : ''}🏛️ 實務地標：${deepKnowledge.landmarkCase.name}（${deepKnowledge.landmarkCase.location}）`;

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(textToCopy);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="knowledge-highlights"
      className="knowledge-highlights-card scroll-mt-24 rounded-3xl border border-amber-200/90 dark:border-amber-900/70 bg-gradient-to-br from-amber-50/70 via-white to-sky-50/60 dark:from-amber-950/30 dark:via-slate-900 dark:to-sky-950/20 p-5 sm:p-7 shadow-sm space-y-6"
      aria-labelledby="knowledge-highlights-title"
    >
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-amber-200/60 dark:border-amber-900/40 pb-4">
        <div className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-xl bg-amber-500 text-white shadow-sm">
            <Sparkles className="size-5" />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300">
                {subject.title} · Core Knowledge Highlights · 知識亮點速查
              </span>
              <span className="rounded-full bg-amber-100 dark:bg-amber-900/60 px-2 py-0.5 text-[10px] font-mono font-bold text-amber-800 dark:text-amber-200 border border-amber-300/80 dark:border-amber-800">
                30秒速讀
              </span>
            </div>
            <h2 id="knowledge-highlights-title" className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {topic.title} · 核心考點與精華提煉
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-2 print:hidden">
          <span className="rounded-full bg-red-100 dark:bg-red-950/80 px-2.5 py-1 text-xs font-bold text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800">
            {deepKnowledge.examTrend.frequency}
          </span>
          <button
            type="button"
            onClick={handleCopyHighlights}
            className="flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-1.5 text-xs font-mono font-bold text-slate-700 dark:text-slate-300 hover:bg-amber-50 dark:hover:bg-amber-950/50 hover:text-amber-700 dark:hover:text-amber-300 transition-colors shadow-2xs cursor-pointer"
            title="一鍵複製核心亮點筆記"
          >
            {copied ? (
              <>
                <Check className="size-3.5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">已複製速記</span>
              </>
            ) : (
              <>
                <Copy className="size-3.5" />
                <span>複製速記</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Highlights Grid */}
      <div className="grid gap-4 sm:grid-cols-2">
        {/* Highlight 1: Core Essence */}
        <article className="rounded-2xl border border-amber-200/80 dark:border-amber-900/60 bg-white/95 dark:bg-slate-900/90 p-4 sm:p-5 space-y-2 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-xs font-bold text-amber-800 dark:text-amber-300">
              <BookOpen className="size-4" />
              <span>1. 一句話掌握核心本質</span>
            </span>
            <span className="rounded-md bg-amber-50 dark:bg-amber-950/60 px-2 py-0.5 text-[10px] font-mono text-amber-700 dark:text-amber-300 font-bold">
              靈魂白話
            </span>
          </div>
          <p className="font-serif text-sm sm:text-base font-bold leading-relaxed text-slate-900 dark:text-white">
            「{realLifeGuide.oneSentenceRecap}」
          </p>
          <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-2">
            {topic.desc}
          </p>
        </article>

        {/* Highlight 2: Exam Killer Trick & Patterns */}
        <article className="rounded-2xl border border-rose-200/80 dark:border-rose-900/60 bg-white/95 dark:bg-slate-900/90 p-4 sm:p-5 space-y-2 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-xs font-bold text-rose-700 dark:text-rose-300">
              <Flame className="size-4" />
              <span>2. 統測秒殺破題神技</span>
            </span>
            <span className="rounded-md bg-rose-50 dark:bg-rose-950/60 px-2 py-0.5 text-[10px] font-mono text-rose-700 dark:text-rose-300 font-bold">
              考場心法
            </span>
          </div>
          <div className="rounded-xl bg-rose-50/70 dark:bg-rose-950/40 p-3 text-xs leading-relaxed text-rose-950 dark:text-rose-100 font-medium border border-rose-200/60 dark:border-rose-900/40">
            🎯 <strong>解題口訣：</strong>
            {deepKnowledge.examTrend.killerTrick}
          </div>
          <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
            <strong>高頻命題題型：</strong>
            {deepKnowledge.examTrend.keyQuestionTypes.join('、')}
          </p>
        </article>

        {/* Highlight 3: Formula or Core Standard */}
        <article className="rounded-2xl border border-blue-200/80 dark:border-blue-900/60 bg-white/95 dark:bg-slate-900/90 p-4 sm:p-5 space-y-2 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-xs font-bold text-blue-700 dark:text-blue-300">
              <Layers className="size-4" />
              <span>3. {primaryFormula ? '必備黃金公式與量綱' : '法規規範與核心依據'}</span>
            </span>
            <span className="rounded-md bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 text-[10px] font-mono text-blue-700 dark:text-blue-300 font-bold">
              {primaryFormula ? '公式防坑' : '標準依據'}
            </span>
          </div>

          {primaryFormula ? (
            <div className="space-y-2">
              <div className="rounded-xl bg-slate-50 dark:bg-slate-800/60 p-3 overflow-x-auto text-sm font-mono font-bold text-slate-900 dark:text-white border border-slate-200/70 dark:border-slate-800">
                <MathText content={primaryFormula} />
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                ⚠️ <strong>量綱陷阱：</strong>計算時務必統一長度 (m/mm)、作用力 (N/kN) 與應力 (MPa = N/mm²)，代入前先確認正負號！
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="text-xs font-mono font-bold text-slate-900 dark:text-white">
                📜 {deepKnowledge.cnsAndCodes.title}
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {deepKnowledge.cnsAndCodes.description}
              </p>
            </div>
          )}
        </article>

        {/* Highlight 4: Fatal Trap or Practical Landmark */}
        <article className="rounded-2xl border border-indigo-200/80 dark:border-indigo-900/60 bg-white/95 dark:bg-slate-900/90 p-4 sm:p-5 space-y-2 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-xs font-bold text-indigo-700 dark:text-indigo-300">
              {primaryTrap ? <ShieldAlert className="size-4 text-amber-600" /> : <Compass className="size-4" />}
              <span>4. {primaryTrap ? '高頻盲區防衛警報' : '台灣建築名築對照'}</span>
            </span>
            <span className="rounded-md bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 text-[10px] font-mono text-indigo-700 dark:text-indigo-300 font-bold">
              {primaryTrap ? '陷阱排雷' : '工程實務'}
            </span>
          </div>

          {primaryTrap ? (
            <div className="space-y-1.5 text-xs leading-relaxed">
              <div className="rounded-lg bg-rose-50/70 dark:bg-rose-950/30 p-2.5 text-rose-900 dark:text-rose-200 border border-rose-200/60 dark:border-rose-900/30">
                ❌ <strong>常見錯誤直覺：</strong>{primaryTrap.wrongThinking}
              </div>
              <div className="rounded-lg bg-emerald-50/70 dark:bg-emerald-950/30 p-2.5 text-emerald-900 dark:text-emerald-200 border border-emerald-200/60 dark:border-emerald-900/30 font-medium">
                ✅ <strong>專家正確思考：</strong>{primaryTrap.correctThinking}
              </div>
            </div>
          ) : (
            <div className="space-y-1.5 text-xs leading-relaxed">
              <p className="font-bold text-slate-900 dark:text-white">
                🏛️ {deepKnowledge.landmarkCase.name}（{deepKnowledge.landmarkCase.location}）
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                {deepKnowledge.landmarkCase.structuralFeature}
              </p>
            </div>
          )}
        </article>
      </div>

      {/* Footer Strip: Landmark Link & Quick Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white/70 dark:bg-slate-900/70 p-3.5 border border-slate-200/70 dark:border-slate-800 text-xs">
        <div className="flex items-center gap-2">
          <Compass className="size-4 text-sky-600 dark:text-sky-400 shrink-0" />
          <span className="text-slate-700 dark:text-slate-300">
            <strong>實務工程對照：</strong>{deepKnowledge.landmarkCase.name} · {deepKnowledge.landmarkCase.pedagogicalInsight}
          </span>
        </div>
        <a
          href="#principles"
          className="font-mono font-bold text-blue-600 dark:text-blue-400 hover:underline shrink-0"
        >
          前往核心觀念精講 ↓
        </a>
      </div>
    </section>
  );
}
