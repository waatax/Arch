'use client';

import { useState, useEffect } from 'react';
import { Award, CheckCircle2, Circle, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import type { SubjectData, TopicContent } from '@/data/types';
import type { TopicDeepKnowledge } from '@/lib/pedagogy/topicKnowledgeExpander';
import type { TopicRealLifeGuide } from '@/lib/pedagogy/realLifeHelpers';
import { useGamificationStore } from '@/lib/store/gamificationStore';
import { soundEngine } from '@/lib/audio/soundEffects';

interface TopicMasteryChecklistProps {
  subject: SubjectData;
  topic: TopicContent;
  deepKnowledge: TopicDeepKnowledge;
  realLifeGuide: TopicRealLifeGuide;
  starNode?: { id: string; name: string; chapterNumber?: string | number } | null;
  isStarLit?: boolean;
}

export default function TopicMasteryChecklist({
  subject,
  topic,
  deepKnowledge,
  realLifeGuide,
  starNode,
  isStarLit,
}: TopicMasteryChecklistProps) {
  const { unlockStarNode, soundEnabled } = useGamificationStore();

  // Dynamic mastery criteria items
  const primaryConcept = topic.concepts[0]?.heading || topic.title;
  const hasFormula = topic.concepts.some((c) => c.formula);
  const primaryTrap = topic.fatalTraps?.[0];

  const checklistItems = [
    {
      id: 'concept',
      category: '觀念本質',
      text: `能用自己的話完整說明「${primaryConcept}」的核心定義與適用條件。`,
      tip: `核心白話：「${realLifeGuide.oneSentenceRecap}」`,
    },
    {
      id: 'formula-or-rule',
      category: hasFormula ? '公式與量綱' : '法規與標準',
      text: hasFormula
        ? `能默寫主要計算公式，並能在解題時統一單位制（如 m, mm, N, kN, MPa）。`
        : `能精確掌握 ${deepKnowledge.cnsAndCodes.code} 之規範要旨與標準分類。`,
      tip: hasFormula ? '注意長度與力的單位換算，避免因單位錯誤痛失分數！' : deepKnowledge.cnsAndCodes.title,
    },
    {
      id: 'sop',
      category: 'SOP 解題實作',
      text: `能依據三步驟決策流（題型識別 → 公式展開 → 常識檢核），獨立算完本章示範例題。`,
      tip: `破題口訣：${deepKnowledge.examTrend.killerTrick}`,
    },
    {
      id: 'trap',
      category: '陷阱防衛',
      text: primaryTrap
        ? `能辨識並避開「${primaryTrap.wrongThinking.slice(0, 30)}...」之考場思維盲區。`
        : `能辨認統測題目中的干擾誘答選項，確實理解各選項正誤原因。`,
      tip: primaryTrap ? `正確思考：${primaryTrap.correctThinking}` : '統測題目常在邊界條件與方向正負號設陷阱。',
    },
    {
      id: 'engineering',
      category: '工程實務連結',
      text: `能舉出「${deepKnowledge.landmarkCase.name}」等建築實例，說出本章理論在營造現場的作用。`,
      tip: `案例洞察：${deepKnowledge.landmarkCase.pedagogicalInsight}`,
    },
  ];

  // Checkbox state with localStorage persistence
  const [checkedState, setCheckedState] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        const saved = localStorage.getItem(`mastery_checklist_${subject.slug}_${topic.slug}`);
        if (saved) {
          setCheckedState(JSON.parse(saved));
        }
      } catch {
        // Ignore in SSR
      }
    }, 0);
    return () => clearTimeout(timer);
  }, [subject.slug, topic.slug]);

  const toggleItem = (id: string) => {
    const next = { ...checkedState, [id]: !checkedState[id] };
    setCheckedState(next);
    try {
      localStorage.setItem(`mastery_checklist_${subject.slug}_${topic.slug}`, JSON.stringify(next));
    } catch {
      // Ignore
    }

    if (soundEnabled && next[id]) {
      const allDone = checklistItems.every((item) => next[item.id]);
      if (allDone) {
        soundEngine.playCorrectChime();
      } else {
        soundEngine.playClickBeep();
      }
    }
  };

  const completedCount = checklistItems.filter((item) => checkedState[item.id]).length;
  const isAllCompleted = completedCount === checklistItems.length;
  const percent = Math.round((completedCount / checklistItems.length) * 100);

  return (
    <section
      id="mastery-checklist"
      className="mastery-checklist scroll-mt-24 rounded-3xl border border-emerald-200/90 dark:border-emerald-900/70 bg-gradient-to-br from-emerald-50/60 via-white to-teal-50/50 dark:from-emerald-950/25 dark:via-slate-900 dark:to-teal-950/20 p-5 sm:p-7 shadow-sm space-y-6"
      aria-labelledby="mastery-checklist-title"
    >
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-emerald-200/60 dark:border-emerald-900/40 pb-4">
        <div className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-sm">
            <Award className="size-5" />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                Complete Knowledge Mastery Audit · 知識掌握度自評
              </span>
              <span className="rounded-full bg-emerald-100 dark:bg-emerald-900/60 px-2 py-0.5 text-[10px] font-mono font-bold text-emerald-800 dark:text-emerald-200 border border-emerald-300/80 dark:border-emerald-800">
                5項全知驗證
              </span>
            </div>
            <h2 id="mastery-checklist-title" className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {topic.title} · 全知識點精熟檢核表
            </h2>
          </div>
        </div>

        {/* Progress Badge */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 block">
              已達成 {completedCount} / {checklistItems.length} 項
            </span>
            <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
              掌握度 {percent}%
            </span>
          </div>
          <div className="relative size-10 flex items-center justify-center">
            <svg className="size-10 -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-slate-200 dark:text-slate-800"
                strokeWidth="3.5"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-emerald-600 dark:text-emerald-400 transition-all duration-500 ease-out"
                strokeDasharray={`${percent}, 100`}
                strokeWidth="3.5"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <span className="absolute font-mono text-[10px] font-bold text-slate-800 dark:text-slate-200">
              {percent}%
            </span>
          </div>
        </div>
      </div>

      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
        在進入下一章或參加考試前，請逐項檢視是否真正掌握本章所有的核心能力與知識點。點擊項目即可完成打勾：
      </p>

      {/* Checklist items */}
      <div className="space-y-3">
        {checklistItems.map((item, index) => {
          const isChecked = !!checkedState[item.id];
          return (
            <div
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className={`group flex items-start gap-3.5 p-4 rounded-2xl border transition-all cursor-pointer ${
                isChecked
                  ? 'border-emerald-300 bg-emerald-50/50 dark:border-emerald-800/80 dark:bg-emerald-950/30'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 hover:border-emerald-200 hover:bg-emerald-50/20'
              }`}
            >
              <button
                type="button"
                className="mt-0.5 shrink-0 focus:outline-none"
                aria-label={isChecked ? '取消勾選' : '標記為已掌握'}
              >
                {isChecked ? (
                  <CheckCircle2 className="size-5 text-emerald-600 dark:text-emerald-400 transition-transform group-hover:scale-110" />
                ) : (
                  <Circle className="size-5 text-slate-400 dark:text-slate-600 transition-transform group-hover:scale-110" />
                )}
              </button>

              <div className="space-y-1 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs font-bold text-slate-500 dark:text-slate-400">
                    0{index + 1}
                  </span>
                  <span className="rounded-full bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-[10px] font-bold text-slate-700 dark:text-slate-300">
                    {item.category}
                  </span>
                </div>
                <p
                  className={`text-sm leading-relaxed ${
                    isChecked
                      ? 'text-emerald-950 dark:text-emerald-100 font-bold line-through/none'
                      : 'text-slate-800 dark:text-slate-200 font-medium'
                  }`}
                >
                  {item.text}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  💡 {item.tip}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* 100% Celebration Banner */}
      {isAllCompleted && (
        <div className="rounded-2xl border border-emerald-400 dark:border-emerald-700 bg-emerald-100/70 dark:bg-emerald-950/60 p-5 space-y-3 animate-fade-in shadow-sm">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-xl bg-emerald-600 text-white text-xl">
              🏆
            </span>
            <div>
              <h3 className="font-serif text-lg font-bold text-emerald-950 dark:text-emerald-100">
                太棒了！本章 5 大核心知識點已 100% 完全精熟！
              </h3>
              <p className="text-xs text-emerald-800 dark:text-emerald-300">
                你已經建立扎實的架構，無論統測題型如何變換，都能以穩健的物理觀念與 SOP 順利破題！
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            {starNode && !isStarLit && (
              <button
                type="button"
                onClick={() => {
                  unlockStarNode(starNode.id);
                  if (soundEnabled) soundEngine.playCorrectChime();
                }}
                className="flex items-center gap-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white px-3.5 py-2 font-mono font-bold text-xs transition-colors shadow-sm cursor-pointer"
              >
                <Sparkles className="size-3.5 text-amber-300" />
                <span>點亮本科星座標節點 (+40 EXP)</span>
              </button>
            )}

            <a
              href="#exam-qs-title"
              className="flex items-center gap-1.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white px-3.5 py-2 font-bold text-xs transition-colors shadow-sm"
            >
              <ShieldCheck className="size-3.5" />
              <span>實戰歷屆統測題驗證</span>
            </a>

            <Link
              href="/practice"
              className="flex items-center gap-1.5 rounded-xl border border-emerald-300 dark:border-emerald-700 bg-white dark:bg-slate-800 px-3.5 py-2 font-bold text-xs text-emerald-800 dark:text-emerald-200 hover:bg-emerald-50 dark:hover:bg-slate-700 transition-colors"
            >
              <span>模擬考場測驗</span>
              <ArrowRight className="size-3" />
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
