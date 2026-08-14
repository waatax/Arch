'use client';

import React from 'react';
import MechanicsVisualizer from './MechanicsVisualizer';
import SurveyingVisualizer from './SurveyingVisualizer';
import MaterialsVisualizer from './MaterialsVisualizer';
import DraftingVisualizer from './DraftingVisualizer';
import MathScienceVisualizer from './MathScienceVisualizer';

interface InteractiveVisualizerProps {
  subjectSlug: string;
  topicSlug: string;
}

export default function InteractiveVisualizer({ subjectSlug, topicSlug }: InteractiveVisualizerProps) {
  if (subjectSlug === 'mechanics') {
    return <MechanicsVisualizer topicSlug={topicSlug} />;
  }

  if (subjectSlug === 'surveying') {
    return <SurveyingVisualizer topicSlug={topicSlug} />;
  }

  if (subjectSlug === 'materials') {
    return <MaterialsVisualizer topicSlug={topicSlug} />;
  }

  if (subjectSlug === 'drafting') {
    return <DraftingVisualizer topicSlug={topicSlug} />;
  }

  if (['math-c', 'physics', 'chemistry', 'extensions'].includes(subjectSlug)) {
    return <MathScienceVisualizer topicSlug={topicSlug} />;
  }

  return (
    <div className="rounded-2xl border border-blue-100 dark:border-blue-900/40 bg-blue-50/30 dark:bg-blue-950/20 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono">
      <div className="space-y-1">
        <span className="font-bold text-blue-900 dark:text-blue-200 flex items-center gap-1.5 text-sm">
          <span>🔬</span> Arch 互動圖解實驗室 (Interactive Studio)
        </span>
        <p className="text-slate-600 dark:text-slate-400 font-sans text-xs">
          探索全科目可互動之結構力學、CNS 投影製圖、工程測量水準平差與混凝土水灰比模擬器。
        </p>
      </div>
      <a
        href="/visualizers"
        className="shrink-0 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 transition-colors shadow-2xs"
      >
        打開實驗室 →
      </a>
    </div>
  );
}
