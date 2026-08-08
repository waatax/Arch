'use client';

import React, { useState } from 'react';

interface DraftingVisualizerProps {
  topicSlug: string;
}

export default function DraftingVisualizer({ topicSlug }: DraftingVisualizerProps) {
  // === 1. 3rd Angle Orthographic Projection Views State ===
  const [activeView, setActiveView] = useState<'all' | 'top' | 'front' | 'right'>('all');
  const [showHiddenLines, setShowHiddenLines] = useState<boolean>(true);

  // === 2. Hatch Pattern Selector State ===
  const [selectedMaterial, setSelectedMaterial] = useState<'rc' | 'steel' | 'wood' | 'brick' | 'soil'>('rc');

  const materials = [
    { id: 'rc', name: '鋼筋混凝土 (RC)', desc: '實線 45° 斜線配合實心黑點（骨材粒料）', lineCode: 'CNS 建築標準圖例' },
    { id: 'steel', name: '結構鋼材 (Steel)', desc: '細緻 45° 雙平行斜線或全黑填滿', lineCode: 'CNS B1001 製圖規範' },
    { id: 'wood', name: '木材構造 (Wood)', desc: '橫斷面同心年輪紋理與縱向木紋線條', lineCode: 'CNS 建築構造圖例' },
    { id: 'brick', name: '紅磚砌體 (Brick)', desc: '實線 45° 間隔均勻斜剖面線', lineCode: 'CNS 建築材料符號' },
    { id: 'soil', name: '基地土壤 (Soil)', desc: '水平三短線配合垂直間歇點列', lineCode: '地質與基礎圖例' }
  ];

  return (
    <div className="rounded-xl border border-sky-200/80 bg-sky-50/20 dark:border-sky-800/60 dark:bg-sky-950/20 p-5 sm:p-6 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-sky-200/60 dark:border-sky-800/40 pb-3">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-lg bg-sky-600 text-white text-xs font-mono font-bold">
            📐
          </span>
          <div>
            <h3 className="font-serif text-base font-bold text-slate-900 dark:text-white">
              製圖實習 · 第三角投影三視圖與建築圖例互動解讀器
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              掌握 CNS 建築製圖規範：長對正、高平齊、寬相等，剖面材料線型與隱藏虛線判讀
            </p>
          </div>
        </div>
        <span className="rounded-full bg-sky-600/10 px-2.5 py-0.5 text-xs font-mono font-bold text-sky-700 dark:text-sky-300 border border-sky-600/20">
          第三角投影法 (CNS)
        </span>
      </div>

      {topicSlug.includes('projection') || topicSlug.includes('section') || topicSlug.includes('view') ? (
        // 3rd Angle Orthographic Visualizer
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            {/* View Selector Tabs */}
            <div className="flex items-center gap-1 rounded-lg bg-white dark:bg-slate-900 p-1 border border-slate-200 dark:border-slate-800 text-xs font-mono">
              <button
                onClick={() => setActiveView('all')}
                className={`px-3 py-1 rounded transition-colors ${activeView === 'all' ? 'bg-sky-600 text-white font-bold' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
              >
                完整三視圖展開
              </button>
              <button
                onClick={() => setActiveView('top')}
                className={`px-3 py-1 rounded transition-colors ${activeView === 'top' ? 'bg-sky-600 text-white font-bold' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
              >
                俯視圖 (Top)
              </button>
              <button
                onClick={() => setActiveView('front')}
                className={`px-3 py-1 rounded transition-colors ${activeView === 'front' ? 'bg-sky-600 text-white font-bold' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
              >
                正視圖 (Front)
              </button>
              <button
                onClick={() => setActiveView('right')}
                className={`px-3 py-1 rounded transition-colors ${activeView === 'right' ? 'bg-sky-600 text-white font-bold' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
              >
                右側視圖 (Right)
              </button>
            </div>

            <label className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300 font-mono cursor-pointer">
              <input
                type="checkbox"
                checked={showHiddenLines}
                onChange={(e) => setShowHiddenLines(e.target.checked)}
                className="accent-sky-600 rounded"
              />
              <span>顯示內部隱藏虛線 (Hidden Line)</span>
            </label>
          </div>

          {/* 3rd Angle Orthographic Projection Layout Grid */}
          <div className="grid grid-cols-2 gap-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 shadow-inner">
            {/* Top View (Upper Left in 3rd Angle) */}
            {(activeView === 'all' || activeView === 'top') && (
              <div className="border border-dashed border-sky-300 dark:border-sky-800 rounded-lg p-3 bg-sky-50/30 dark:bg-sky-950/20">
                <span className="text-[11px] font-mono font-bold text-sky-700 dark:text-sky-300 block mb-2">
                  1. 俯視圖 Top View (長 x 寬)
                </span>
                <svg viewBox="0 0 160 100" className="w-full h-24">
                  <rect x="20" y="10" width="120" height="80" fill="none" stroke="#0284C7" strokeWidth="2" />
                  <rect x="50" y="25" width="60" height="50" fill="rgba(2, 132, 199, 0.1)" stroke="#0284C7" strokeWidth="1.5" />
                  {showHiddenLines && (
                    <line x1="20" y1="50" x2="140" y2="50" stroke="#DC2626" strokeWidth="1.5" strokeDasharray="4 2" />
                  )}
                  {/* Alignment guide line */}
                  <text x="65" y="55" fontSize="9" className="fill-slate-500 font-mono">開口階梯槽</text>
                </svg>
              </div>
            )}

            {/* 45 Degree Projection Line Area (Upper Right) */}
            {activeView === 'all' && (
              <div className="border border-dashed border-slate-200 dark:border-slate-800 rounded-lg p-3 flex items-center justify-center bg-slate-50/50 dark:bg-slate-800/20">
                <svg viewBox="0 0 100 100" className="w-20 h-20 opacity-60">
                  <line x1="0" y1="100" x2="100" y2="0" stroke="#D97706" strokeWidth="1.5" strokeDasharray="3 3" />
                  <text x="35" y="60" fontSize="10" className="fill-amber-600 font-mono">45° 投射基準線</text>
                </svg>
              </div>
            )}

            {/* Front View (Lower Left in 3rd Angle) */}
            {(activeView === 'all' || activeView === 'front') && (
              <div className="border border-dashed border-sky-300 dark:border-sky-800 rounded-lg p-3 bg-sky-50/30 dark:bg-sky-950/20">
                <span className="text-[11px] font-mono font-bold text-sky-700 dark:text-sky-300 block mb-2">
                  2. 正視圖 Front View (長 x 高)
                </span>
                <svg viewBox="0 0 160 100" className="w-full h-24">
                  {/* Stepped outline */}
                  <path
                    d="M 20 90 L 20 30 L 70 30 L 70 60 L 140 60 L 140 90 Z"
                    fill="rgba(2, 132, 199, 0.15)"
                    stroke="#0284C7"
                    strokeWidth="2"
                  />
                  {showHiddenLines && (
                    <line x1="70" y1="30" x2="70" y2="90" stroke="#DC2626" strokeWidth="1.5" strokeDasharray="4 2" />
                  )}
                  <text x="30" y="75" fontSize="9" className="fill-sky-800 dark:fill-sky-200 font-mono">基準主立面</text>
                </svg>
              </div>
            )}

            {/* Right Side View (Lower Right in 3rd Angle) */}
            {(activeView === 'all' || activeView === 'right') && (
              <div className="border border-dashed border-sky-300 dark:border-sky-800 rounded-lg p-3 bg-sky-50/30 dark:bg-sky-950/20">
                <span className="text-[11px] font-mono font-bold text-sky-700 dark:text-sky-300 block mb-2">
                  3. 右側視圖 Right Side (寬 x 高)
                </span>
                <svg viewBox="0 0 120 100" className="w-full h-24">
                  <rect x="20" y="60" width="80" height="30" fill="rgba(2, 132, 199, 0.1)" stroke="#0284C7" strokeWidth="2" />
                  {showHiddenLines && (
                    <line x1="20" y1="30" x2="60" y2="30" stroke="#DC2626" strokeWidth="1.5" strokeDasharray="4 2" />
                  )}
                  <text x="35" y="80" fontSize="9" className="fill-slate-600 font-mono">側面投影</text>
                </svg>
              </div>
            )}
          </div>

          <div className="text-xs text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-800 space-y-1">
            <div>💡 <strong>第三角投影法口訣：</strong>「俯視圖在上方、正視圖在下方、右側視圖在右方」。</div>
            <div>投影線對齊三原則：<strong>正俯長對正、正側高平齊、俯側寬相等</strong>。</div>
          </div>
        </div>
      ) : (
        // Hatching & Line Patterns Selector
        <div className="space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {materials.map((mat) => (
              <button
                key={mat.id}
                onClick={() => setSelectedMaterial(mat.id as typeof selectedMaterial)}
                className={`p-3 rounded-xl border text-left transition-all ${selectedMaterial === mat.id ? 'border-sky-500 bg-sky-50 dark:bg-sky-950/50 shadow-xs' : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300'}`}
              >
                <div className="font-bold text-xs text-slate-900 dark:text-white">{mat.name}</div>
                <div className="text-[10px] text-slate-500 font-mono mt-0.5">{mat.lineCode}</div>
              </button>
            ))}
          </div>

          {/* Material Pattern Preview Canvas */}
          <div className="grid sm:grid-cols-2 gap-4 items-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
            <div className="relative aspect-video rounded-lg border border-slate-300 dark:border-slate-700 overflow-hidden flex items-center justify-center">
              <svg viewBox="0 0 200 120" className="w-full h-full">
                <defs>
                  {/* RC Pattern */}
                  <pattern id="rcPattern" width="20" height="20" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="0" x2="0" y2="20" stroke="#0284C7" strokeWidth="1" />
                    <circle cx="10" cy="10" r="1.5" fill="#0284C7" />
                  </pattern>
                  {/* Brick Pattern */}
                  <pattern id="brickPattern" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                    <line x1="0" y1="0" x2="0" y2="10" stroke="#EA580C" strokeWidth="1.5" />
                  </pattern>
                </defs>

                {selectedMaterial === 'rc' ? (
                  <rect x="20" y="20" width="160" height="80" fill="url(#rcPattern)" stroke="#0284C7" strokeWidth="2" />
                ) : selectedMaterial === 'brick' ? (
                  <rect x="20" y="20" width="160" height="80" fill="url(#brickPattern)" stroke="#EA580C" strokeWidth="2" />
                ) : (
                  <g>
                    <rect x="20" y="20" width="160" height="80" fill="rgba(2, 132, 199, 0.05)" stroke="#0284C7" strokeWidth="2" />
                    <line x1="20" y1="20" x2="180" y2="100" stroke="#0284C7" strokeWidth="1.5" />
                    <line x1="20" y1="100" x2="180" y2="20" stroke="#0284C7" strokeWidth="1.5" />
                  </g>
                )}
                <text x="30" y="112" fontSize="9" className="fill-slate-500 font-mono">CNS 建築剖面材料圖例</text>
              </svg>
            </div>

            <div className="space-y-2 text-xs">
              <span className="text-[10px] font-mono uppercase tracking-wider text-sky-600 block">
                剖面材料線型規範
              </span>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                {materials.find((m) => m.id === selectedMaterial)?.name}
              </h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {materials.find((m) => m.id === selectedMaterial)?.desc}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
