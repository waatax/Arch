'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  CheckCircle2, 
  Lock, 
  Play, 
  HardHat, 
  ArrowRight, 
  Award, 
  Target,
  Zap
} from 'lucide-react';
import { soundEngine } from '@/lib/audio/soundEffects';
import { useGamificationStore, CampaignStage } from '@/lib/store/gamificationStore';
import QuestInspectorModal from './QuestInspectorModal';

export default function CampaignQuestMap() {
  const { campaignStages, dailyBounties, completeCampaignStage, rankTitle, soundEnabled } = useGamificationStore();
  const [activeInspectorCase, setActiveInspectorCase] = useState<string | null>(null);

  const completedCount = campaignStages.filter((s) => s.completed).length;
  const progressPct = Math.round((completedCount / campaignStages.length) * 100);

  const handleLaunchInspector = (caseId?: string) => {
    if (caseId) {
      if (soundEnabled) soundEngine.playClickBeep();
      setActiveInspectorCase(caseId);
    }
  };

  const handleClaimStageClear = (stage: CampaignStage) => {
    completeCampaignStage(stage.stageId);
  };

  return (
    <div className="space-y-10">
      {/* Campaign Hero Banner */}
      <div className="rounded-[2.5rem] border border-blue-200 dark:border-blue-900/40 bg-gradient-to-br from-blue-900 via-slate-900 to-slate-950 p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 border border-blue-400/30 px-3.5 py-1 text-xs font-mono font-bold text-blue-300">
              <Sparkles className="size-3.5 text-blue-400" />
              2026 高二上學期 · 建築大師修煉戰役 (MASTER BUILDER CAMPAIGN)
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
              高二開學 60 天冒險戰役地圖
            </h2>
            <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
              專為升高二建築與土木科學生量身設計。循序漸進解開 8 大戰役關卡，把最難的力學、材料、測量與製圖轉化為沉浸式工程任務！
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0 font-mono text-xs">
            <div className="rounded-2xl bg-white/10 backdrop-blur-md p-5 border border-white/15 space-y-1.5 min-w-[200px]">
              <div className="flex justify-between text-slate-300">
                <span>戰役總進度</span>
                <span className="text-blue-300 font-bold">{progressPct}%</span>
              </div>
              <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-blue-400 transition-all duration-700" style={{ width: `${progressPct}%` }} />
              </div>
              <span className="text-[11px] text-slate-400 block pt-0.5">
                已通關 {completedCount} / {campaignStages.length} 關卡 · {rankTitle}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Daily Bounties Bar (每日工程懸賞) */}
      <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Zap className="size-4 text-amber-500" />
            <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white">
              今日工程懸賞委託 (Daily Bounties)
            </h3>
          </div>
          <span className="text-xs font-mono font-bold text-slate-500">每日更新 · 無中斷焦慮</span>
        </div>

        <div className="grid gap-3 sm:grid-cols-3 font-mono text-xs">
          {dailyBounties.map((bounty) => (
            <div
              key={bounty.id}
              className="p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/40 flex flex-col justify-between gap-3"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 dark:text-white text-sm">{bounty.title}</span>
                  <span className="text-amber-600 dark:text-amber-400 font-bold">+{bounty.expReward} EXP</span>
                </div>
                <p className="text-slate-500 font-sans text-xs mt-1 leading-relaxed">{bounty.desc}</p>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] text-slate-400">
                  {bounty.completed ? '✓ 已完成' : '進行中'}
                </span>
                <Link
                  href={bounty.targetType === 'solve_puzzle' ? '/visualizers' : '/practice'}
                  className="text-[11px] font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                >
                  前往完成 <ArrowRight className="size-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 8-Stage Campaign Timeline Quest Map */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Target className="size-5 text-blue-600 dark:text-blue-400" />
          <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
            戰役關卡路線 (Campaign Stages)
          </h3>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {campaignStages.map((stage) => {
            const isCompleted = stage.completed;
            const isUnlocked = stage.unlocked;

            let cardStyle = 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 opacity-60';
            if (isUnlocked && !isCompleted) {
              cardStyle = 'border-blue-500 dark:border-blue-600 bg-blue-50/30 dark:bg-blue-950/20 shadow-md ring-1 ring-blue-500/20 opacity-100';
            } else if (isCompleted) {
              cardStyle = 'border-emerald-300 dark:border-emerald-800 bg-white dark:bg-slate-900 opacity-100';
            }

            return (
              <div
                key={stage.stageId}
                className={`rounded-3xl border p-5 flex flex-col justify-between gap-4 transition-all duration-300 ${cardStyle}`}
              >
                <div>
                  {/* Stage Status Badge */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[11px] font-bold text-blue-700 dark:text-blue-400">
                      STAGE 0{stage.stageId}
                    </span>
                    {isCompleted ? (
                      <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 text-xs font-bold font-mono">
                        <CheckCircle2 className="size-3.5" /> 通關
                      </span>
                    ) : isUnlocked ? (
                      <span className="flex items-center gap-1 text-blue-600 dark:text-blue-400 text-xs font-bold font-mono animate-pulse">
                        <Play className="size-3 fill-current" /> 可挑戰
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-slate-400 text-xs font-mono">
                        <Lock className="size-3.5" /> 未解鎖
                      </span>
                    )}
                  </div>

                  <h4 className="font-serif text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    {stage.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                    {stage.subtitle}
                  </p>
                </div>

                {/* Reward & Action Area */}
                <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
                  <div className="flex items-center gap-1.5 text-amber-700 dark:text-amber-300 font-mono text-[11px]">
                    <Award className="size-3.5 shrink-0" />
                    <span className="truncate">解鎖：{stage.rewardPart}</span>
                  </div>

                  <div className="flex flex-col gap-2">
                    {isUnlocked && (
                      <Link
                        href={stage.topicRoute}
                        className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-colors"
                      >
                        <Play className="size-3 fill-current" /> 進入章節學習
                      </Link>
                    )}

                    {isUnlocked && stage.inspectorCaseId && (
                      <button
                        onClick={() => handleLaunchInspector(stage.inspectorCaseId)}
                        className="flex items-center justify-center gap-1.5 py-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold transition-colors cursor-pointer"
                      >
                        <HardHat className="size-3.5 text-amber-500" /> 啟動現場工程探案
                      </button>
                    )}

                    {isUnlocked && !isCompleted && (
                      <button
                        onClick={() => handleClaimStageClear(stage)}
                        className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 hover:underline text-center cursor-pointer pt-1"
                      >
                        ⚡ 標記通關本關卡
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Site Inspector Modal */}
      <QuestInspectorModal
        caseId={activeInspectorCase}
        isOpen={!!activeInspectorCase}
        onClose={() => setActiveInspectorCase(null)}
      />
    </div>
  );
}
