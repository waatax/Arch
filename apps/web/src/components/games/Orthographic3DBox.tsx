'use client';

import React, { useState } from 'react';
import { DraftingCompass, Box, Layers, RotateCcw } from 'lucide-react';
import { soundEngine } from '@/lib/audio/soundEffects';
import { useGamificationStore } from '@/lib/store/gamificationStore';

interface BlockModel {
  id: string;
  name: string;
  desc: string;
  missingLineQuestion: string;
  missingLineOptions: Array<{ id: string; label: string; isCorrect: boolean }>;
  explanation: string;
}

const blockModels: BlockModel[] = [
  {
    id: 'l_block_stepped',
    name: '階梯缺角塊 (Stepped Notch Block)',
    desc: '標準 L 型缺角建築塊體，具備一隱藏台階。',
    missingLineQuestion: '觀察右側視圖 (Right Elevation)，從右方看過去時，左下方之隱藏缺口應繪製為：',
    missingLineOptions: [
      { id: 'A', label: '一條水平中虛線（代表不可見之內凹台階稜線）', isCorrect: true },
      { id: 'B', label: '一條垂直粗實線（外輪廓線）', isCorrect: false },
      { id: 'C', label: '一條 45 度細剖面線', isCorrect: false },
      { id: 'D', label: '不需繪製任何線條（不可見者略過）', isCorrect: false },
    ],
    explanation: '依 CNS 3 建築製圖規範：物體內部或背後不可見之交線與輪廓，必須以「中虛線（隱藏線）」明確標繪。',
  },
  {
    id: 'cylinder_hole',
    name: '圓柱通孔塊 (Through Hole Block)',
    desc: '立方體中央貫穿一垂直圓形通孔。',
    missingLineQuestion: '在正視圖 (Front Elevation) 與側視圖中，貫穿之圓孔應如何表示？',
    missingLineOptions: [
      { id: 'A', label: '兩條對稱之中虛線（孔徑邊緣）＋ 中央一條細鏈線（中心線）', isCorrect: true },
      { id: 'B', label: '只畫一條粗實線', isCorrect: false },
      { id: 'C', label: '以波浪線畫出破斷', isCorrect: false },
      { id: 'D', label: '以雙折線標註', isCorrect: false },
    ],
    explanation: '圓柱孔在正視與側視均投影為矩形隱藏輪廓（兩側虛線），且必須繪製軸心「細鏈線（中心線）」伸出輪廓 2~3 mm。',
  },
];

export default function Orthographic3DBox() {
  const [selectedModelIdx, setSelectedModelIdx] = useState(0);
  const [isUnfolded, setIsUnfolded] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const { recordPuzzleSolved, recordSandboxExperiment } = useGamificationStore();
  const currentModel = blockModels[selectedModelIdx];

  const handleToggleUnfold = () => {
    soundEngine.playPencilDraw();
    setIsUnfolded(!isUnfolded);
    recordSandboxExperiment();
  };

  const handleSelectOption = (optId: string, isCorrect: boolean) => {
    setSelectedOption(optId);
    setIsAnswered(true);
    if (isCorrect) {
      soundEngine.playCorrectChime();
      recordPuzzleSolved(`ortho_${currentModel.id}`);
    } else {
      soundEngine.playClickBeep();
    }
  };

  const handleReset = () => {
    setIsUnfolded(false);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-sky-100 dark:bg-sky-900/60 px-3 py-1 text-xs font-mono font-bold text-sky-700 dark:text-sky-300">
              DRAFTING 3D LAB 03
            </span>
            <span className="text-xs font-bold text-slate-500">
              建築製圖實習 · 第三角正投影空間解構
            </span>
          </div>
          <h3 className="mt-1 font-serif text-2xl font-bold text-slate-900 dark:text-white">
            第三角正投影 3D 空間折疊箱 (Orthographic 3D Folding Box)
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleToggleUnfold}
            className="flex items-center gap-2 rounded-2xl bg-sky-600 hover:bg-sky-700 px-4 py-2 font-bold text-white text-xs transition-colors cursor-pointer shadow-sm"
          >
            <Layers className="size-4" />
            <span>{isUnfolded ? '📦 閉合為 3D 空間箱' : '📐 展開為 2D 三視圖'}</span>
          </button>
          <button
            onClick={handleReset}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300 cursor-pointer"
            title="重設模型"
          >
            <RotateCcw className="size-4" />
          </button>
        </div>
      </div>

      {/* Model Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-mono">
        {blockModels.map((m, idx) => (
          <button
            key={m.id}
            onClick={() => {
              setSelectedModelIdx(idx);
              handleReset();
            }}
            className={`px-3.5 py-2 rounded-xl font-bold transition-all shrink-0 cursor-pointer ${
              selectedModelIdx === idx
                ? 'bg-sky-600 text-white shadow-md shadow-sky-900/20'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {m.name}
          </button>
        ))}
      </div>

      {/* Visual Workspace */}
      <div className="grid gap-6 lg:grid-cols-12 items-center">
        {/* SVG Orthographic / 3D Canvas */}
        <div className="lg:col-span-7 rounded-2xl bg-slate-950 border border-slate-800 p-5 relative overflow-hidden select-none">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
            <span className="flex items-center gap-1.5">
              <Box className="size-3.5 text-sky-400" />
              {isUnfolded ? '第三角法三視圖（俯視在上、正視在下、側視在右）' : '3D 等角等斜投影視角 (Isometric Glass Box)'}
            </span>
            <span className="text-sky-400 font-bold">{isUnfolded ? '2D 平面展開' : '3D 空間立體'}</span>
          </div>

          <svg viewBox="0 0 400 300" className="w-full h-72">
            {isUnfolded ? (
              // 2D Orthographic Unfolded 3-Views
              <g className="animate-fadeIn">
                {/* 45 degree projection line */}
                <line x1="260" y1="130" x2="380" y2="10" stroke="#0284c7" strokeWidth="1.5" strokeDasharray="4 4" />
                <text x="320" y="75" fontSize="9" fill="#0284c7" fontFamily="monospace">45° 投射斜線</text>

                {/* Alignment Crosshair lines */}
                <line x1="50" y1="130" x2="380" y2="130" stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="260" y1="20" x2="260" y2="280" stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />

                {/* TOP VIEW (俯視圖) */}
                <g transform="translate(100, 20)">
                  <rect x="0" y="0" width="120" height="90" fill="#0369a1" fillOpacity="0.2" stroke="#38bdf8" strokeWidth="2.5" />
                  <line x1="70" y1="0" x2="70" y2="90" stroke="#38bdf8" strokeWidth="2" />
                  <text x="60" y="50" fontSize="11" fontWeight="bold" fill="#e0f2fe" textAnchor="middle">俯視圖 (Top)</text>
                </g>

                {/* FRONT VIEW (正視圖) */}
                <g transform="translate(100, 150)">
                  <polygon points="0,0 70,0 70,40 120,40 120,100 0,100" fill="#0284c7" fillOpacity="0.25" stroke="#38bdf8" strokeWidth="2.5" />
                  <text x="50" y="60" fontSize="11" fontWeight="bold" fill="#e0f2fe" textAnchor="middle">正視圖 (Front)</text>
                </g>

                {/* RIGHT VIEW (右側視圖) */}
                <g transform="translate(280, 150)">
                  <rect x="0" y="0" width="90" height="100" fill="#0d9488" fillOpacity="0.2" stroke="#2dd4bf" strokeWidth="2.5" />
                  {/* Hidden Line (虛線) */}
                  <line x1="0" y1="40" x2="90" y2="40" stroke="#f59e0b" strokeWidth="2" strokeDasharray="5 3" />
                  <text x="45" y="70" fontSize="11" fontWeight="bold" fill="#ccfbf1" textAnchor="middle">右側視圖 (Right)</text>
                  <text x="45" y="35" fontSize="9" fill="#f59e0b" textAnchor="middle">隱藏中虛線</text>
                </g>
              </g>
            ) : (
              // 3D Isometric View in Glass Box
              <g className="animate-fadeIn">
                {/* Glass Box Outline */}
                <polygon points="80,100 200,40 320,100 200,160" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" />
                <polygon points="80,100 80,220 200,280 200,160" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" />
                <polygon points="200,160 200,280 320,220 320,100" fill="none" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" />

                {/* 3D Stepped Block Faces */}
                {/* Top face 1 */}
                <polygon points="120,130 180,100 220,120 160,150" fill="#38bdf8" fillOpacity="0.7" stroke="#e0f2fe" strokeWidth="2" />
                {/* Top face 2 (lower step) */}
                <polygon points="220,150 260,130 300,150 260,170" fill="#0284c7" fillOpacity="0.8" stroke="#e0f2fe" strokeWidth="2" />

                {/* Front Faces */}
                <polygon points="120,130 160,150 160,220 120,200" fill="#0369a1" stroke="#e0f2fe" strokeWidth="2" />
                <polygon points="160,170 220,150 220,120 160,150" fill="#0284c7" stroke="#e0f2fe" strokeWidth="2" />
                <polygon points="160,170 220,150 220,220 160,240" fill="#0369a1" stroke="#e0f2fe" strokeWidth="2" />

                {/* Right Faces */}
                <polygon points="260,170 300,150 300,220 260,240" fill="#0f766e" stroke="#e0f2fe" strokeWidth="2" />
                <polygon points="220,150 260,170 260,240 220,220" fill="#115e59" stroke="#e0f2fe" strokeWidth="2" />

                <text x="200" y="270" fontSize="11" fontWeight="bold" fill="#94a3b8" textAnchor="middle">
                  點擊右上角「展開為 2D 三視圖」體驗投影箱展開過程
                </text>
              </g>
            )}
          </svg>
        </div>

        {/* Spatial Question & Quiz Panel */}
        <div className="lg:col-span-5 space-y-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 p-5 border border-slate-200/80 dark:border-slate-800 font-mono text-xs">
          <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
            <DraftingCompass className="size-4 text-sky-600 dark:text-sky-400" />
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">CNS 製圖空間考題挑戰</h4>
          </div>

          <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-sans text-xs">
            {currentModel.missingLineQuestion}
          </p>

          {/* Options */}
          <div className="space-y-2 pt-1">
            {currentModel.missingLineOptions.map((opt) => {
              const isChosen = selectedOption === opt.id;
              let btnStyle = 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-sky-500';

              if (isAnswered && isChosen) {
                btnStyle = opt.isCorrect
                  ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-100'
                  : 'border-rose-500 bg-rose-50 dark:bg-rose-950/60 text-rose-900 dark:text-rose-100';
              }

              return (
                <button
                  key={opt.id}
                  onClick={() => handleSelectOption(opt.id, opt.isCorrect)}
                  className={`w-full text-left p-3 rounded-xl border transition-all flex items-start gap-2.5 cursor-pointer ${btnStyle}`}
                >
                  <span className="font-bold shrink-0">{opt.id}.</span>
                  <span className="font-sans leading-relaxed">{opt.label}</span>
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {isAnswered && (
            <div className="p-3.5 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900/60 space-y-1 animate-fadeIn">
              <span className="font-bold text-blue-700 dark:text-blue-300 block font-mono">
                💡 CNS 規範精闢解說：
              </span>
              <p className="text-slate-600 dark:text-slate-300 font-sans leading-relaxed text-[11px]">
                {currentModel.explanation}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
