'use client';

import React, { useState } from 'react';
import { DraftingCompass, CheckCircle2, RotateCcw, PenTool, Layers } from 'lucide-react';
import { soundEngine } from '@/lib/audio/soundEffects';
import { useGamificationStore } from '@/lib/store/gamificationStore';

type LineType = 'solid_thick' | 'hidden_medium' | 'center_thin' | 'hatch_45';
type TriangleType = 'triangle_45' | 'triangle_30_60';

interface DrawingLine {
  id: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  type: LineType;
}

export default function VirtualDraftingTable() {
  const [tSquareY, setTSquareY] = useState<number>(140); // 40 to 240
  const [triangleX, setTriangleX] = useState<number>(180); // 60 to 360
  const [activeTriangle, setActiveTriangle] = useState<TriangleType>('triangle_45');
  const [selectedLineType, setSelectedLineType] = useState<LineType>('solid_thick');
  const [drawnLines, setDrawnLines] = useState<DrawingLine[]>([
    // Initial foundation guideline
    { id: 'l_base', x1: 60, y1: 220, x2: 380, y2: 220, type: 'solid_thick' },
    { id: 'l_axis', x1: 220, y1: 40, x2: 220, y2: 230, type: 'center_thin' },
  ]);
  const [drawingChallengeSuccess, setDrawingChallengeSuccess] = useState<boolean>(false);

  const { recordPuzzleSolved, recordSandboxExperiment, soundEnabled } = useGamificationStore();

  const handleDrawHorizontalLine = () => {
    if (soundEnabled) soundEngine.playPencilDraw();
    const newLine: DrawingLine = {
      id: `line_${Date.now()}`,
      x1: 60,
      y1: tSquareY,
      x2: 380,
      y2: tSquareY,
      type: selectedLineType,
    };
    setDrawnLines((prev) => [...prev, newLine]);
    recordSandboxExperiment();

    // Check challenge completion
    if (drawnLines.length >= 4 && !drawingChallengeSuccess) {
      setDrawingChallengeSuccess(true);
      recordPuzzleSolved('drafting_table_layout');
    }
  };

  const handleDrawVerticalLine = () => {
    if (soundEnabled) soundEngine.playPencilDraw();
    const newLine: DrawingLine = {
      id: `line_${Date.now()}`,
      x1: triangleX,
      y1: Math.max(40, tSquareY - 100),
      x2: triangleX,
      y2: tSquareY,
      type: selectedLineType,
    };
    setDrawnLines((prev) => [...prev, newLine]);
    recordSandboxExperiment();
  };

  const handleDrawHatchLine = () => {
    if (soundEnabled) soundEngine.playPencilDraw();
    const newLine: DrawingLine = {
      id: `line_${Date.now()}`,
      x1: triangleX - 40,
      y1: tSquareY,
      x2: triangleX + 40,
      y2: tSquareY - 80,
      type: 'hatch_45',
    };
    setDrawnLines((prev) => [...prev, newLine]);
    recordSandboxExperiment();
  };

  const handleClearLines = () => {
    setDrawnLines([
      { id: 'l_base', x1: 60, y1: 220, x2: 380, y2: 220, type: 'solid_thick' },
      { id: 'l_axis', x1: 220, y1: 40, x2: 220, y2: 230, type: 'center_thin' },
    ]);
    setDrawingChallengeSuccess(false);
  };

  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-sky-100 dark:bg-sky-900/60 px-3 py-1 text-xs font-mono font-bold text-sky-700 dark:text-sky-300">
              DRAFTING STUDIO 06
            </span>
            <span className="text-xs font-bold text-slate-500">
              CNS 3 建築製圖實習 · 數位平行尺與三角板作業桌
            </span>
          </div>
          <h3 className="mt-1 font-serif text-2xl font-bold text-slate-900 dark:text-white">
            數位平行尺製圖桌實驗室 (Virtual Drafting Table Lab)
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-2xl bg-sky-50 dark:bg-sky-950/40 px-4 py-2 border border-sky-200 dark:border-sky-900/40">
            <DraftingCompass className="size-4 text-sky-600 dark:text-sky-400" />
            <span className="font-mono text-xs font-bold text-slate-700 dark:text-slate-300">
              筆觸線條：<strong className="text-sky-600 dark:text-sky-400">{drawnLines.length} 條</strong>
            </span>
          </div>
          <button
            onClick={handleClearLines}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300 cursor-pointer"
            title="清空圖面重畫"
          >
            <RotateCcw className="size-4" />
          </button>
        </div>
      </div>

      {/* Tool Controls Bar */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 p-5 border border-slate-200/80 dark:border-slate-800 font-mono text-xs">
        {/* Line Type Selector */}
        <div className="space-y-2">
          <span className="font-bold text-slate-700 dark:text-slate-300 block">CNS 線條種類</span>
          <select
            value={selectedLineType}
            onChange={(e) => setSelectedLineType(e.target.value as LineType)}
            className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 p-2 font-bold text-slate-900 dark:text-white"
          >
            <option value="solid_thick">粗實線 (0.5mm 輪廓線)</option>
            <option value="hidden_medium">中虛線 (0.35mm 隱藏線)</option>
            <option value="center_thin">細鏈線 (0.18mm 中心線)</option>
            <option value="hatch_45">細實線 (45° 剖面線)</option>
          </select>
        </div>

        {/* Parallel Ruler (T-Square) Position */}
        <div className="space-y-2">
          <div className="flex justify-between font-bold text-slate-700 dark:text-slate-300">
            <span>平行尺高度 Y</span>
            <span className="text-blue-600 dark:text-blue-400">{tSquareY} mm</span>
          </div>
          <input
            type="range"
            min="60"
            max="220"
            step="5"
            value={tSquareY}
            onChange={(e) => setTSquareY(Number(e.target.value))}
            className="w-full accent-blue-600"
          />
        </div>

        {/* Set Square (Triangle) Position */}
        <div className="space-y-2">
          <div className="flex justify-between font-bold text-slate-700 dark:text-slate-300">
            <span>三角板位置 X</span>
            <span className="text-amber-600 dark:text-amber-400">{triangleX} mm</span>
          </div>
          <input
            type="range"
            min="80"
            max="340"
            step="5"
            value={triangleX}
            onChange={(e) => setTriangleX(Number(e.target.value))}
            className="w-full accent-amber-600"
          />
        </div>

        {/* Triangle Type */}
        <div className="space-y-2">
          <span className="font-bold text-slate-700 dark:text-slate-300 block">三角板規格</span>
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTriangle('triangle_45')}
              className={`flex-1 py-2 rounded-lg font-bold transition-colors cursor-pointer ${
                activeTriangle === 'triangle_45'
                  ? 'bg-sky-600 text-white'
                  : 'bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300'
              }`}
            >
              45° - 45°
            </button>
            <button
              onClick={() => setActiveTriangle('triangle_30_60')}
              className={`flex-1 py-2 rounded-lg font-bold transition-colors cursor-pointer ${
                activeTriangle === 'triangle_30_60'
                  ? 'bg-sky-600 text-white'
                  : 'bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300'
              }`}
            >
              30° - 60°
            </button>
          </div>
        </div>
      </div>

      {/* Action Draw Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-2">
          <button
            onClick={handleDrawHorizontalLine}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-colors cursor-pointer shadow-sm"
          >
            <PenTool className="size-3.5" />
            沿平行尺描繪水平線
          </button>
          <button
            onClick={handleDrawVerticalLine}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold transition-colors cursor-pointer shadow-sm"
          >
            <PenTool className="size-3.5" />
            沿三角板描繪垂直線
          </button>
          <button
            onClick={handleDrawHatchLine}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold transition-colors cursor-pointer shadow-sm"
          >
            <Layers className="size-3.5" />
            沿斜邊描繪 45° 剖面線
          </button>
        </div>

        {drawingChallengeSuccess && (
          <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold animate-fadeIn">
            <CheckCircle2 className="size-4" />
            <span>✓ 建築三視圖圖面佈局完成！獲得 +50 EXP</span>
          </div>
        )}
      </div>

      {/* Virtual Drafting Table Canvas (SVG) */}
      <div className="rounded-3xl border-2 border-slate-300 dark:border-slate-700 bg-[#f8fafc] dark:bg-[#090d16] p-6 relative select-none overflow-hidden shadow-inner">
        {/* Drawing Paper Sheet (A3/A4 Grid) */}
        <svg viewBox="0 0 440 260" className="w-full h-72">
          {/* Blueprint Grid pattern */}
          <defs>
            <pattern id="draftGrid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#cbd5e1" strokeWidth="0.5" strokeOpacity="0.4" />
            </pattern>
          </defs>
          <rect x="40" y="20" width="360" height="220" fill="url(#draftGrid)" stroke="#94a3b8" strokeWidth="1.5" />

          {/* Title Block Box (右下角標題欄) */}
          <rect x="280" y="200" width="120" height="40" fill="none" stroke="#64748b" strokeWidth="1.5" />
          <line x1="280" y1="220" x2="400" y2="220" stroke="#64748b" strokeWidth="1" />
          <text x="340" y="214" fontSize="8" fill="#64748b" textAnchor="middle" fontFamily="monospace">
            ARCH 2026 製圖作業桌
          </text>
          <text x="340" y="233" fontSize="8" fill="#64748b" textAnchor="middle" fontFamily="monospace">
            SCALE: 1/1 · CNS 3
          </text>

          {/* Drawn Lines */}
          {drawnLines.map((line) => {
            let strokeColor = '#0f172a'; // solid black
            let strokeWidth = 2.5;
            let dashArray = 'none';

            if (line.type === 'hidden_medium') {
              strokeColor = '#d97706'; // hidden amber
              strokeWidth = 1.8;
              dashArray = '5 3';
            } else if (line.type === 'center_thin') {
              strokeColor = '#0284c7'; // center line cyan
              strokeWidth = 1.0;
              dashArray = '12 3 3 3';
            } else if (line.type === 'hatch_45') {
              strokeColor = '#059669'; // hatching green
              strokeWidth = 1.0;
              dashArray = 'none';
            }

            return (
              <line
                key={line.id}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                strokeDasharray={dashArray}
                className="transition-all duration-300"
              />
            );
          })}

          {/* Parallel Ruler (T-Square Blade Visual) */}
          <g className="transition-all duration-150">
            <rect x="20" y={tSquareY - 4} width="400" height="10" rx="2" fill="rgba(59, 130, 246, 0.4)" stroke="#2563eb" strokeWidth="1.5" />
            <line x1="20" y1={tSquareY} x2="420" y2={tSquareY} stroke="#1d4ed8" strokeWidth="1" />
            {/* Millimeter Ticks */}
            {Array.from({ length: 39 }).map((_, i) => (
              <line
                key={i}
                x1={30 + i * 10}
                y1={tSquareY - 3}
                x2={30 + i * 10}
                y2={tSquareY + 3}
                stroke="#1e40af"
                strokeWidth="0.8"
              />
            ))}
          </g>

          {/* Set Square Triangle Visual */}
          <g className="transition-all duration-150">
            {activeTriangle === 'triangle_45' ? (
              <polygon
                points={`${triangleX},${tSquareY} ${triangleX + 90},${tSquareY} ${triangleX},${tSquareY - 90}`}
                fill="rgba(245, 158, 11, 0.3)"
                stroke="#d97706"
                strokeWidth="1.5"
              />
            ) : (
              <polygon
                points={`${triangleX},${tSquareY} ${triangleX + 60},${tSquareY} ${triangleX},${tSquareY - 104}`}
                fill="rgba(245, 158, 11, 0.3)"
                stroke="#d97706"
                strokeWidth="1.5"
              />
            )}
          </g>
        </svg>

        <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-2 border-t border-slate-200 dark:border-slate-800">
          <span>操作說明：滑動上方控制條移動平行尺與三角板，點擊描繪按鈕體驗工程製圖線條。</span>
          <span className="text-blue-600 dark:text-blue-400 font-bold">CNS 3 建築製圖標準比例</span>
        </div>
      </div>
    </div>
  );
}
