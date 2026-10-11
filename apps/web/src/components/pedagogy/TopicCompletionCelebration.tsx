'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Trophy,
  Sparkles,
  ArrowRight,
  Hammer,
  CheckCircle2,
  Share2,
  Compass,
} from 'lucide-react';
import type { TopicContent, SubjectData } from '@/data/types';
import { useGamificationStore, type LandmarkProgress } from '@/lib/store/gamificationStore';
import { useStudentStore } from '@/lib/store/studentStore';
import { soundEngine } from '@/lib/audio/soundEffects';

interface TopicCompletionCelebrationProps {
  topic: TopicContent;
  subject: SubjectData;
  nextTopic: TopicContent | null;
}

const LANDMARK_IDS: (keyof Record<string, LandmarkProgress>)[] = [
  'luce_chapel',
  'taichung_opera',
  'taipei_101',
  'danjiang_bridge',
  'museum_921',
];

export default function TopicCompletionCelebration({
  topic,
  subject,
  nextTopic,
}: TopicCompletionCelebrationProps) {
  const [claimed, setClaimed] = useState(false);
  const [rewardLandmark, setRewardLandmark] = useState<string | null>(null);

  const { addExp, unlockStarNode, unlockLandmarkPart, landmarks, soundEnabled } = useGamificationStore();
  const { markTopicCompleted } = useStudentStore();

  const handleClaimMastery = () => {
    if (claimed) return;

    setClaimed(true);
    addExp(50);
    unlockStarNode(`star_${topic.slug}`);
    markTopicCompleted(`/subjects/${subject.slug}/${topic.slug}`);

    // 隨機獎勵 5 大名築藍圖碎片之一
    const randomLandmarkId = LANDMARK_IDS[Math.floor(Math.random() * LANDMARK_IDS.length)] as
      | 'luce_chapel'
      | 'taichung_opera'
      | 'taipei_101'
      | 'danjiang_bridge'
      | 'museum_921';

    unlockLandmarkPart(randomLandmarkId);
    setRewardLandmark(landmarks[randomLandmarkId]?.name || '經典名築');

    if (soundEnabled) {
      soundEngine.playCorrectChime();
    }
  };

  return (
    <section className="lesson-deferred-section scroll-mt-24 rounded-3xl border border-emerald-200/90 dark:border-emerald-900/60 bg-gradient-to-br from-emerald-50/60 via-white to-blue-50/40 dark:from-emerald-950/30 dark:via-slate-900 dark:to-blue-950/20 p-6 sm:p-9 shadow-xs space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-emerald-100 dark:border-emerald-900/40 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-md shadow-emerald-600/20 shrink-0">
            <Trophy className="size-6" />
          </div>
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 block">
              Chapter Mastery Milestone
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              恭喜研讀完畢！點亮【{topic.title}】專屬技能星宿
            </h3>
          </div>
        </div>

        <span className="font-mono text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100/80 dark:bg-emerald-950/60 px-3 py-1.5 rounded-xl border border-emerald-200 dark:border-emerald-800 self-start sm:self-auto">
          +50 EXP 藍圖獎勵
        </span>
      </div>

      <div className="space-y-4">
        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 max-w-3xl">
          你已經完整探索了本章的生活直覺、專屬圖解、核心定理、步驟例題與避坑心法。
          每一次專注的投入，都是為未來的建築師之路打下不可動搖的地基！
        </p>

        {!claimed ? (
          <div className="pt-2">
            <button
              type="button"
              onClick={handleClaimMastery}
              className="group inline-flex items-center gap-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-4 text-sm font-bold shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/35 transition-all cursor-pointer"
            >
              <Sparkles className="size-5 text-amber-300 animate-spin" style={{ animationDuration: '4s' }} />
              <span>點亮本章技能星宿 · 領取 +50 EXP 與藍圖碎片</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        ) : (
          <div className="rounded-2xl border border-emerald-300 dark:border-emerald-800 bg-white dark:bg-slate-850 p-5 space-y-3 animate-in zoom-in-95 duration-300">
            <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300 font-bold text-sm">
              <CheckCircle2 className="size-5 text-emerald-600" />
              <span>已解鎖本章星宿！獲得 +50 EXP</span>
              {rewardLandmark && (
                <span className="ml-2 font-mono text-xs text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2.5 py-0.5 rounded-md border border-amber-200 dark:border-amber-800">
                  🏛️ 獲得【{rewardLandmark}】藍圖碎片
                </span>
              )}
            </div>

            <div className="flex flex-wrap gap-3 pt-2 text-xs font-bold">
              <Link
                href="/studio"
                className="inline-flex items-center gap-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white px-4 py-2.5 transition-colors shadow-xs"
              >
                <Hammer className="size-4" />
                <span>前往「大師工坊」組裝名築</span>
              </Link>

              <Link
                href="/constellation"
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-4 py-2.5 hover:bg-slate-50 transition-colors"
              >
                <Compass className="size-4 text-indigo-500" />
                <span>查看技能星空全貌</span>
              </Link>

              {nextTopic && (
                <Link
                  href={`/subjects/${subject.slug}/${nextTopic.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 transition-colors shadow-xs"
                >
                  <span>前進下一章：{nextTopic.title}</span>
                  <ArrowRight className="size-4" />
                </Link>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
        <span>全科全真題庫 · 108 課綱技術高中建築科</span>
        <button
          type="button"
          onClick={() => {
            if (navigator.share) {
              navigator.share({
                title: `${topic.title} | Arch 建築學習基地`,
                text: `我剛在 Arch 完成了【${subject.title}】第 ${topic.title} 的研讀！`,
                url: window.location.href,
              }).catch(() => {});
            }
          }}
          className="hover:text-slate-600 dark:hover:text-slate-300 flex items-center gap-1 cursor-pointer"
        >
          <Share2 className="size-3" />
          <span>分享進度</span>
        </button>
      </div>
    </section>
  );
}
