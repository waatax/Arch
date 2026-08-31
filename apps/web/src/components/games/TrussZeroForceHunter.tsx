'use client';

import React, { useState, useMemo } from 'react';
import { Sparkles, CheckCircle2, RotateCcw, HelpCircle } from 'lucide-react';
import { soundEngine } from '@/lib/audio/soundEffects';
import { useGamificationStore } from '@/lib/store/gamificationStore';

interface TrussMember {
  id: string;
  name: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  isZeroForce: boolean;
  reason: string;
  theorem: 'case1' | 'case2' | 'loaded';
}

interface TrussConfig {
  id: string;
  name: string;
  desc: string;
  loadLabel: string;
  members: TrussMember[];
  nodes: Array<{ id: string; x: number; y: number; label: string; isSupport?: 'pin' | 'roller'; load?: { fx: number; fy: number; label: string } }>;
}

const trussConfigurations: TrussConfig[] = [
  {
    id: 'pratt_standard',
    name: '標準普拉特桁架 (Pratt Truss 經典考題)',
    desc: '最常見之統測試題構型。節點 E 處無外力作用，節點 D 處受一向下集中荷載 P。',
    loadLabel: '節點 D 受集中載重 P = 40 kN 向下',
    nodes: [
      { id: 'A', x: 80, y: 180, label: 'A (Pin)', isSupport: 'pin' },
      { id: 'B', x: 220, y: 180, label: 'B' },
      { id: 'C', x: 360, y: 180, label: 'C (Roller)', isSupport: 'roller' },
      { id: 'D', x: 80, y: 60, label: 'D', load: { fx: 0, fy: 35, label: 'P=40kN' } },
      { id: 'E', x: 220, y: 60, label: 'E' },
      { id: 'F', x: 360, y: 60, label: 'F' },
    ],
    members: [
      { id: 'm_AB', name: '桿件 AB (下弦)', x1: 80, y1: 180, x2: 220, y2: 180, isZeroForce: false, reason: '下弦受拉力桿', theorem: 'loaded' },
      { id: 'm_BC', name: '桿件 BC (下弦)', x1: 220, y1: 180, x2: 360, y2: 180, isZeroForce: false, reason: '下弦受拉力桿', theorem: 'loaded' },
      { id: 'm_DE', name: '桿件 DE (上弦)', x1: 80, y1: 60, x2: 220, y2: 60, isZeroForce: false, reason: '上弦受壓力桿', theorem: 'loaded' },
      { id: 'm_EF', name: '桿件 EF (上弦)', x1: 220, y1: 60, x2: 360, y2: 60, isZeroForce: true, reason: '節點 F 無外力且 FC, EF 夾角不共線，故 EF 為零力桿', theorem: 'case1' },
      { id: 'm_AD', name: '桿件 AD (端豎桿)', x1: 80, y1: 180, x2: 80, y2: 60, isZeroForce: false, reason: '支承反力傳遞豎桿', theorem: 'loaded' },
      { id: 'm_BE', name: '桿件 BE (中豎桿)', x1: 220, y1: 180, x2: 220, y2: 60, isZeroForce: true, reason: '【原則二】節點 E 無外力，DE 與 EF 共線，則垂直之第三桿 BE 必為零力桿！', theorem: 'case2' },
      { id: 'm_CF', name: '桿件 CF (端豎桿)', x1: 360, y1: 180, x2: 360, y2: 60, isZeroForce: true, reason: '【原則一】節點 F 無外力且僅有 EF 與 CF 兩不共線桿件，故 CF 必為零力桿！', theorem: 'case1' },
      { id: 'm_DB', name: '桿件 DB (斜腹桿)', x1: 80, y1: 60, x2: 220, y2: 180, isZeroForce: false, reason: '主要受拉斜腹桿', theorem: 'loaded' },
      { id: 'm_EC', name: '桿件 EC (斜腹桿)', x1: 220, y1: 60, x2: 360, y2: 180, isZeroForce: false, reason: '斜腹桿傳遞剪力', theorem: 'loaded' },
    ],
  },
  {
    id: 'howe_roof',
    name: '豪氏屋架 (Howe Roof Truss 節點判定)',
    desc: '屋頂對稱桁架，觀察屋頂未受風載重時之多餘支撐構件。',
    loadLabel: '屋頂頂點 C 受豎向載重 P = 60 kN',
    nodes: [
      { id: 'A', x: 60, y: 170, label: 'A (Pin)', isSupport: 'pin' },
      { id: 'B', x: 180, y: 170, label: 'B' },
      { id: 'D', x: 300, y: 170, label: 'D' },
      { id: 'E', x: 420, y: 170, label: 'E (Roller)', isSupport: 'roller' },
      { id: 'C', x: 240, y: 50, label: 'C (Apex)', load: { fx: 0, fy: 35, label: 'P=60kN' } },
      { id: 'F', x: 150, y: 110, label: 'F' },
      { id: 'G', x: 330, y: 110, label: 'G' },
    ],
    members: [
      { id: 'm_AB', name: '桿件 AB', x1: 60, y1: 170, x2: 180, y2: 170, isZeroForce: false, reason: '下弦主要拉桿', theorem: 'loaded' },
      { id: 'm_BD', name: '桿件 BD', x1: 180, y1: 170, x2: 300, y2: 170, isZeroForce: false, reason: '中央下弦拉桿', theorem: 'loaded' },
      { id: 'm_DE', name: '桿件 DE', x1: 300, y1: 170, x2: 420, y2: 170, isZeroForce: false, reason: '下弦對稱拉桿', theorem: 'loaded' },
      { id: 'm_AF', name: '桿件 AF', x1: 60, y1: 170, x2: 150, y2: 110, isZeroForce: false, reason: '上弦壓桿', theorem: 'loaded' },
      { id: 'm_FC', name: '桿件 FC', x1: 150, y1: 110, x2: 240, y2: 50, isZeroForce: false, reason: '上弦壓桿', theorem: 'loaded' },
      { id: 'm_CG', name: '桿件 CG', x1: 240, y1: 50, x2: 330, y2: 110, isZeroForce: false, reason: '上弦壓桿', theorem: 'loaded' },
      { id: 'm_GE', name: '桿件 GE', x1: 330, y1: 110, x2: 420, y2: 170, isZeroForce: false, reason: '上弦壓桿', theorem: 'loaded' },
      { id: 'm_FB', name: '桿件 FB', x1: 150, y1: 110, x2: 180, y2: 170, isZeroForce: true, reason: '【原則二】節點 F 無外力，AF 與 FC 共線，則與其相交之 FB 必為零力桿！', theorem: 'case2' },
      { id: 'm_GD', name: '桿件 GD', x1: 330, y1: 110, x2: 300, y2: 170, isZeroForce: true, reason: '【原則二】節點 G 無外力，CG 與 GE 共線，則與其相交之 GD 必為零力桿！', theorem: 'case2' },
      { id: 'm_BC', name: '桿件 BC', x1: 180, y1: 170, x2: 240, y2: 50, isZeroForce: false, reason: '中央斜拉桿', theorem: 'loaded' },
      { id: 'm_CD', name: '桿件 CD', x1: 240, y1: 50, x2: 300, y2: 170, isZeroForce: false, reason: '中央斜拉桿', theorem: 'loaded' },
    ],
  },
];

export default function TrussZeroForceHunter() {
  const [selectedTrussIdx, setSelectedTrussIdx] = useState(0);
  const [discoveredMembers, setDiscoveredMembers] = useState<Record<string, boolean>>({});
  const [activeHint, setActiveHint] = useState<string | null>(null);
  const [showAllZero, setShowAllZero] = useState(false);

  const { recordPuzzleSolved } = useGamificationStore();
  const currentTruss = trussConfigurations[selectedTrussIdx];

  const totalZeroMembers = useMemo(
    () => currentTruss.members.filter((m) => m.isZeroForce).length,
    [currentTruss],
  );

  const foundZeroMembers = useMemo(
    () => currentTruss.members.filter((m) => m.isZeroForce && discoveredMembers[m.id]).length,
    [currentTruss, discoveredMembers],
  );

  const isStageClear = totalZeroMembers > 0 && foundZeroMembers === totalZeroMembers;

  const handleMemberClick = (m: TrussMember) => {
    soundEngine.playClickBeep();

    if (m.isZeroForce) {
      soundEngine.playZeroForceSnap();
      setDiscoveredMembers((prev) => ({ ...prev, [m.id]: true }));
      setActiveHint(`🎯 命中零力桿！${m.name}：${m.reason}`);

      // Check if newly cleared
      if (foundZeroMembers + 1 === totalZeroMembers && !discoveredMembers[m.id]) {
        recordPuzzleSolved(`truss_${currentTruss.id}`);
      }
    } else {
      setActiveHint(`⚠️ ${m.name} 是受力桿件（${m.reason}），非零力桿。請檢查節點是否有外力或兩桿共線！`);
    }
  };

  const handleReset = () => {
    setDiscoveredMembers({});
    setActiveHint(null);
    setShowAllZero(false);
  };

  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-blue-100 dark:bg-blue-900/60 px-3 py-1 text-xs font-mono font-bold text-blue-700 dark:text-blue-300">
              STRUCTURAL PUZZLE 01
            </span>
            <span className="text-xs font-bold text-slate-500">
              統測專一高頻考點 · 秒殺判斷法
            </span>
          </div>
          <h3 className="mt-1 font-serif text-2xl font-bold text-slate-900 dark:text-white">
            桁架零力桿神射手 (Zero-Force Member Hunter)
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-2xl bg-blue-50 dark:bg-blue-950/40 px-4 py-2 border border-blue-200 dark:border-blue-900/40">
            <Sparkles className="size-4 text-blue-600 dark:text-blue-400" />
            <span className="font-mono text-xs font-bold text-slate-700 dark:text-slate-300">
              已找出零力桿：<strong className="text-blue-600 dark:text-blue-400 text-sm">{foundZeroMembers}</strong> / {totalZeroMembers}
            </span>
          </div>
          <button
            onClick={handleReset}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300 cursor-pointer"
            title="重新挑戰"
          >
            <RotateCcw className="size-4" />
          </button>
        </div>
      </div>

      {/* Truss Switcher Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-mono">
        {trussConfigurations.map((t, idx) => (
          <button
            key={t.id}
            onClick={() => {
              setSelectedTrussIdx(idx);
              handleReset();
            }}
            className={`px-3.5 py-2 rounded-xl font-bold transition-all shrink-0 cursor-pointer ${
              selectedTrussIdx === idx
                ? 'bg-blue-600 text-white shadow-md shadow-blue-900/20'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {t.name}
          </button>
        ))}
      </div>

      {/* Description & Mission Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-slate-50 dark:bg-slate-950/60 p-4 border border-slate-200/80 dark:border-slate-800 text-xs">
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
          💡 <strong>任務說明</strong>：點擊畫面中的桁架桿件。若是零力桿，桿件將亮起青藍光芒並揭露公理；若非零力桿則會給予提示。
        </p>
        <span className="font-mono font-bold text-amber-600 dark:text-amber-400 shrink-0">
          📍 {currentTruss.loadLabel}
        </span>
      </div>

      {/* Interactive SVG Canvas */}
      <div className="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-950 p-4 select-none overflow-hidden">
        <div className="absolute top-3 left-3 flex items-center gap-2 text-[11px] font-mono text-slate-400">
          <span className="inline-block size-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>點擊桿件進行透視判斷</span>
        </div>

        <svg viewBox="0 0 480 240" className="w-full h-64 sm:h-72">
          {/* Background Blueprint Grid */}
          <defs>
            <pattern id="trussGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="480" height="240" fill="url(#trussGrid)" />

          {/* Members Lines */}
          {currentTruss.members.map((m) => {
            const isFound = discoveredMembers[m.id] || showAllZero;
            const isZero = m.isZeroForce;
            let strokeColor = '#64748b'; // Default neutral
            let strokeWidth = 3;

            if (isFound && isZero) {
              strokeColor = '#38bdf8'; // Glowing cyan
              strokeWidth = 5;
            }

            return (
              <g key={m.id} onClick={() => handleMemberClick(m)} className="cursor-pointer group">
                {/* Thick transparent hit area for easy touch/click */}
                <line
                  x1={m.x1}
                  y1={m.y1}
                  x2={m.x2}
                  y2={m.y2}
                  stroke="transparent"
                  strokeWidth="24"
                  strokeLinecap="round"
                />
                {/* Visual Line */}
                <line
                  x1={m.x1}
                  y1={m.y1}
                  x2={m.x2}
                  y2={m.y2}
                  stroke={strokeColor}
                  strokeWidth={strokeWidth}
                  strokeLinecap="round"
                  className="transition-all duration-300 group-hover:stroke-amber-400"
                />
                {/* Zero force glow pulse */}
                {isFound && isZero && (
                  <line
                    x1={m.x1}
                    y1={m.y1}
                    x2={m.x2}
                    y2={m.y2}
                    stroke="#38bdf8"
                    strokeWidth="10"
                    opacity="0.3"
                    strokeLinecap="round"
                    className="animate-pulse"
                  />
                )}
                {/* Member Label */}
                <text
                  x={(m.x1 + m.x2) / 2}
                  y={(m.y1 + m.y2) / 2 - 6}
                  fontSize="9"
                  fontFamily="monospace"
                  fill={isFound && isZero ? '#38bdf8' : '#94a3b8'}
                  textAnchor="middle"
                  fontWeight="bold"
                >
                  {isFound && isZero ? 'F=0' : ''}
                </text>
              </g>
            );
          })}

          {/* Supports & Nodes */}
          {currentTruss.nodes.map((node) => (
            <g key={node.id}>
              {/* Supports Graphic */}
              {node.isSupport === 'pin' && (
                <polygon
                  points={`${node.x - 10},${node.y + 16} ${node.x + 10},${node.y + 16} ${node.x},${node.y}`}
                  fill="#0284c7"
                />
              )}
              {node.isSupport === 'roller' && (
                <g>
                  <polygon
                    points={`${node.x - 10},${node.y + 12} ${node.x + 10},${node.y + 12} ${node.x},${node.y}`}
                    fill="#0d9488"
                  />
                  <circle cx={node.x - 5} cy={node.y + 15} r="2.5" fill="#0d9488" />
                  <circle cx={node.x + 5} cy={node.y + 15} r="2.5" fill="#0d9488" />
                </g>
              )}

              {/* Node Joint Circle */}
              <circle cx={node.x} cy={node.y} r="5" fill="#f8fafc" stroke="#334155" strokeWidth="2" />
              <text x={node.x} y={node.y - 8} fontSize="11" fontWeight="bold" fill="#e2e8f0" textAnchor="middle">
                {node.label}
              </text>

              {/* Load Arrow if present */}
              {node.load && (
                <g>
                  <line
                    x1={node.x}
                    y1={node.y - node.load.fy}
                    x2={node.x}
                    y2={node.y - 6}
                    stroke="#f59e0b"
                    strokeWidth="3"
                  />
                  <polygon
                    points={`${node.x - 4},${node.y - 12} ${node.x + 4},${node.y - 12} ${node.x},${node.y - 5}`}
                    fill="#f59e0b"
                  />
                  <text
                    x={node.x}
                    y={node.y - node.load.fy - 4}
                    fontSize="10"
                    fontWeight="bold"
                    fill="#f59e0b"
                    textAnchor="middle"
                  >
                    {node.load.label}
                  </text>
                </g>
              )}
            </g>
          ))}
        </svg>
      </div>

      {/* Live Feedback & Hint Message */}
      {activeHint && (
        <div className="p-4 rounded-2xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 flex items-start gap-3 animate-fadeIn">
          <HelpCircle className="size-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-mono leading-relaxed">
            {activeHint}
          </p>
        </div>
      )}

      {/* Stage Clear Victory Banner */}
      {isStageClear && (
        <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-800 flex items-center justify-between gap-4 animate-fadeIn">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="size-6 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <div>
              <h4 className="font-bold text-sm text-emerald-900 dark:text-emerald-100">
                🎉 太神了！本題所有零力桿已全數鎖定！
              </h4>
              <p className="text-xs text-emerald-700 dark:text-emerald-300 mt-0.5">
                已獲得 +50 EXP 建築經驗值，並點亮結構直覺圖章。
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              if (selectedTrussIdx < trussConfigurations.length - 1) {
                setSelectedTrussIdx((prev) => prev + 1);
                handleReset();
              }
            }}
            className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shrink-0 cursor-pointer"
          >
            下一題挑戰 →
          </button>
        </div>
      )}

      {/* Educational Theorem Footnotes */}
      <div className="grid gap-3 sm:grid-cols-2 rounded-2xl bg-slate-50 dark:bg-slate-950/60 p-4 border border-slate-200/80 dark:border-slate-800 text-xs">
        <div className="space-y-1">
          <span className="font-bold text-blue-700 dark:text-blue-400 block font-mono">
            📌 原則一（兩桿不共線無外力）
          </span>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            若節點僅連接<strong>兩根不共線桿件</strong>且<strong>無外力／支承反力</strong>作用，則此兩桿必皆為零力桿（$F_1 = 0, F_2 = 0$）。
          </p>
        </div>
        <div className="space-y-1">
          <span className="font-bold text-teal-700 dark:text-teal-400 block font-mono">
            📌 原則二（三桿中兩桿共線無外力）
          </span>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            若節點連接<strong>三根桿件</strong>，其中<strong>兩桿在同一直線上</strong>且<strong>節點無外力</strong>，則<strong>第三桿必為零力桿</strong>！
          </p>
        </div>
      </div>
    </div>
  );
}
