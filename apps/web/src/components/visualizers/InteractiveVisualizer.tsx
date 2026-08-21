'use client';

import React, { useState } from 'react';
import MechanicsVisualizer from './MechanicsVisualizer';
import SurveyingVisualizer from './SurveyingVisualizer';
import MaterialsVisualizer from './MaterialsVisualizer';
import DraftingVisualizer from './DraftingVisualizer';
import MathScienceVisualizer from './MathScienceVisualizer';
import HumanitiesVisualizer from './HumanitiesVisualizer';
import BuildingEngineeringVisualizer from './BuildingEngineeringVisualizer';

interface InteractiveVisualizerProps {
  subjectSlug: string;
  topicSlug: string;
}

export default function InteractiveVisualizer({ subjectSlug, topicSlug }: InteractiveVisualizerProps) {
  const [activeTabOverride, setActiveTabOverride] = useState<string | null>(null);

  const defaultModule = (() => {
    if (subjectSlug === 'mechanics') return 'mechanics';
    if (subjectSlug === 'surveying') return 'surveying';
    if (subjectSlug === 'materials') return 'materials';
    if (subjectSlug === 'drafting') return 'drafting';
    if (['extensions'].includes(subjectSlug) || topicSlug.includes('bim') || topicSlug.includes('green') || topicSlug.includes('far')) {
      return 'building';
    }
    if (['chinese', 'english', 'history', 'geography', 'civics'].includes(subjectSlug)) {
      return 'humanities';
    }
    return 'math-science';
  })();

  const currentModule = activeTabOverride ?? defaultModule;

  return (
    <div className="space-y-3">
      {/* Visualizer Quick Lab Switcher */}
      <div className="flex items-center justify-between overflow-x-auto pb-1 text-xs font-mono">
        <span className="text-slate-500 dark:text-slate-400 font-bold shrink-0 mr-2">
          🔬 互動圖解實驗室：
        </span>
        <div className="flex gap-1 shrink-0 bg-slate-100 dark:bg-slate-800/80 p-1 rounded-xl border border-slate-200 dark:border-slate-700/60">
          <button
            onClick={() => setActiveTabOverride(defaultModule)}
            className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
              currentModule === defaultModule
                ? 'bg-blue-600 text-white shadow-2xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            本章推薦圖解
          </button>
          <button
            onClick={() => setActiveTabOverride('mechanics')}
            className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
              currentModule === 'mechanics'
                ? 'bg-teal-600 text-white shadow-2xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            結構力學
          </button>
          <button
            onClick={() => setActiveTabOverride('surveying')}
            className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
              currentModule === 'surveying'
                ? 'bg-emerald-600 text-white shadow-2xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            測量實習
          </button>
          <button
            onClick={() => setActiveTabOverride('materials')}
            className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
              currentModule === 'materials'
                ? 'bg-amber-600 text-white shadow-2xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            材料試驗
          </button>
          <button
            onClick={() => setActiveTabOverride('drafting')}
            className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
              currentModule === 'drafting'
                ? 'bg-sky-600 text-white shadow-2xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            建築製圖
          </button>
          <button
            onClick={() => setActiveTabOverride('building')}
            className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
              currentModule === 'building'
                ? 'bg-emerald-700 text-white shadow-2xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            BIM / 綠建築
          </button>
          <button
            onClick={() => setActiveTabOverride('humanities')}
            className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
              currentModule === 'humanities'
                ? 'bg-indigo-600 text-white shadow-2xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            人文社會
          </button>
          <button
            onClick={() => setActiveTabOverride('math-science')}
            className={`px-2.5 py-1 rounded-lg font-bold transition-all ${
              currentModule === 'math-science'
                ? 'bg-purple-600 text-white shadow-2xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            數理科學
          </button>
        </div>
      </div>

      {/* Render matching visualizer module */}
      {currentModule === 'mechanics' && <MechanicsVisualizer topicSlug={topicSlug} />}
      {currentModule === 'surveying' && <SurveyingVisualizer topicSlug={topicSlug} />}
      {currentModule === 'materials' && <MaterialsVisualizer topicSlug={topicSlug} />}
      {currentModule === 'drafting' && <DraftingVisualizer topicSlug={topicSlug} />}
      {currentModule === 'building' && <BuildingEngineeringVisualizer topicSlug={topicSlug} />}
      {currentModule === 'humanities' && <HumanitiesVisualizer subjectSlug={subjectSlug} topicSlug={topicSlug} />}
      {currentModule === 'math-science' && <MathScienceVisualizer topicSlug={topicSlug} />}
    </div>
  );
}
