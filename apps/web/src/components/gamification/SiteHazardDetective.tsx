'use client';

import React, { useState } from 'react';
import { HardHat, CheckCircle2, Eye } from 'lucide-react';
import { soundEngine } from '@/lib/audio/soundEffects';
import { useGamificationStore } from '@/lib/store/gamificationStore';

interface HazardItem {
  id: string;
  name: string;
  x: number;
  y: number;
  r: number;
  lawClause: string;
  description: string;
  rectification: string;
}

const siteHazards: HazardItem[] = [
  {
    id: 'hazard_edge_guardrail',
    name: '1. 樓板臨邊未設防墜護欄',
    x: 80,
    y: 80,
    r: 25,
    lawClause: '營造安全衛生設施標準第 19 條',
    description: '高度 2 公尺以上之樓板邊緣未設置高度 90 公分以上之標準防護欄杆與中欄。',
    rectification: '應立即設置上欄杆 (90~100cm)、中欄杆 (35~45cm) 及 10cm 高防滑擋腳板。',
  },
  {
    id: 'hazard_safety_harness',
    name: '2. 高處作業未繫掛安全母索',
    x: 350,
    y: 60,
    r: 25,
    lawClause: '營造安全衛生設施標準第 23 條',
    description: '鋼構組配高空作業勞工未確實鉤掛雙大鉤安全帶於水平防墜母索上。',
    rectification: '強制設置直徑 14mm 以上尼龍繩或鋼索安全母索，並落實一鉤一索確實繫掛。',
  },
  {
    id: 'hazard_gas_cylinder',
    name: '3. 乙炔鋼瓶未直立固定',
    x: 330,
    y: 200,
    r: 22,
    lawClause: '職業安全衛生設施規則第 106 條',
    description: '焊接用氧氣與乙炔氣瓶平躺放置於地面，無防傾倒鏈條固定，存在爆炸回火風險。',
    rectification: '氣瓶必須直立置於專用手推車內，以鐵鏈固定，並安裝防回火裝置與滅火器。',
  },
  {
    id: 'hazard_elcb_switch',
    name: '4. 臨時配電箱未裝漏電斷路器',
    x: 100,
    y: 210,
    r: 20,
    lawClause: '職業安全衛生設施規則第 243 條',
    description: '潮濕水坑環境中之臨時動力配電箱未裝設高感度高速型漏電斷路器 (ELCB)。',
    rectification: '加裝感應電流 30mA、動作時間 0.1 秒以內之漏電斷路器，電線架高防碾壓。',
  },
  {
    id: 'hazard_scaffold_toeboard',
    name: '5. 施工架踏板未設擋腳板',
    x: 220,
    y: 130,
    r: 24,
    lawClause: '營造安全衛生設施標準第 40 條',
    description: '雙排鋼管施工架作業平台板縫過大，未依規定滿鋪踏板且無防落物擋腳板。',
    rectification: '踏板縫隙不得大於 3cm，滿鋪並用鐵絲固定，兩側設置 10cm 以上之擋腳板。',
  },
];

export default function SiteHazardDetective() {
  const { resolvedHazards, resolveHazard, soundEnabled } = useGamificationStore();
  const [selectedHazard, setSelectedHazard] = useState<HazardItem | null>(null);

  const handleHazardClick = (hazard: HazardItem) => {
    setSelectedHazard(hazard);
    if (!resolvedHazards.includes(hazard.id)) {
      resolveHazard(hazard.id);
    } else {
      if (soundEnabled) soundEngine.playClickBeep();
    }
  };

  const resolvedCount = siteHazards.filter((h) => resolvedHazards.includes(h.id)).length;
  const isAllResolved = resolvedCount === siteHazards.length;

  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-amber-100 dark:bg-amber-900/60 px-3 py-1 text-xs font-mono font-bold text-amber-700 dark:text-amber-300">
              SAFETY DETECTIVE 09
            </span>
            <span className="text-xs font-bold text-slate-500">
              營造安全衛生法規 · 施工現場 360° 隱患大搜尋
            </span>
          </div>
          <h3 className="mt-1 font-serif text-2xl font-bold text-slate-900 dark:text-white">
            營造現場 360 安衛隱患大偵探 (Site Hazard Detective)
          </h3>
        </div>

        <div className="flex items-center gap-2 rounded-2xl bg-amber-50 dark:bg-amber-950/40 px-4 py-2 border border-amber-200 dark:border-amber-900/40 font-mono text-xs font-bold">
          <HardHat className="size-4 text-amber-600 dark:text-amber-400" />
          <span className="text-slate-700 dark:text-slate-300">
            已排解隱患：<strong className="text-amber-600 dark:text-amber-400 text-sm">{resolvedCount}</strong> / {siteHazards.length}
          </span>
        </div>
      </div>

      {/* Description */}
      <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 text-xs font-sans text-slate-600 dark:text-slate-400 flex items-center gap-2">
        <Eye className="size-4 text-amber-500 shrink-0" />
        <span>
          💡 <strong>遊戲規則</strong>：觀察下方營造工地剖面圖，點擊閃爍紅色預警的光圈，查閱違規法條並完成工程安衛改善裁決！
        </span>
      </div>

      {/* Main Interactive Construction Site Canvas (SVG) */}
      <div className="grid gap-6 lg:grid-cols-12 items-center">
        <div className="lg:col-span-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-950 p-5 relative select-none overflow-hidden">
          <svg viewBox="0 0 440 260" className="w-full h-72">
            {/* Construction Building Concrete Frame */}
            <rect x="50" y="20" width="340" height="220" fill="none" stroke="#334155" strokeWidth="2" />
            <line x1="50" y1="95" x2="390" y2="95" stroke="#334155" strokeWidth="3" />
            <line x1="50" y1="170" x2="390" y2="170" stroke="#334155" strokeWidth="3" />
            <line x1="170" y1="20" x2="170" y2="240" stroke="#334155" strokeWidth="3" />
            <line x1="290" y1="20" x2="290" y2="240" stroke="#334155" strokeWidth="3" />

            {/* Scaffold Frame (施工架) */}
            <g stroke="#0284c7" strokeWidth="1.5" opacity="0.7">
              <line x1="200" y1="95" x2="250" y2="95" />
              <line x1="200" y1="170" x2="250" y2="170" />
              <line x1="200" y1="95" x2="200" y2="170" />
              <line x1="250" y1="95" x2="250" y2="170" />
              <line x1="200" y1="95" x2="250" y2="170" />
            </g>

            {/* Interactive Hazard Detection Hotspots */}
            {siteHazards.map((hazard) => {
              const isFound = resolvedHazards.includes(hazard.id);
              const isSelected = selectedHazard?.id === hazard.id;

              return (
                <g
                  key={hazard.id}
                  onClick={() => handleHazardClick(hazard)}
                  className="cursor-pointer group"
                >
                  {/* Warning Glow Circle */}
                  <circle
                    cx={hazard.x}
                    cy={hazard.y}
                    r={hazard.r}
                    fill={isFound ? 'rgba(16, 185, 129, 0.25)' : 'rgba(239, 68, 68, 0.3)'}
                    stroke={isFound ? '#10b981' : '#ef4444'}
                    strokeWidth={isSelected ? 3 : 1.5}
                    strokeDasharray={isFound ? 'none' : '4 2'}
                    className={!isFound ? 'animate-pulse' : ''}
                  />

                  {/* Icon mark */}
                  <text
                    x={hazard.x}
                    y={hazard.y + 4}
                    fontSize="11"
                    fontWeight="bold"
                    fill={isFound ? '#10b981' : '#ef4444'}
                    textAnchor="middle"
                    fontFamily="monospace"
                  >
                    {isFound ? '✓' : '!'}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Hazard Inspection Details & Ruling Panel */}
        <div className="lg:col-span-4 space-y-4 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm font-mono text-xs">
          {selectedHazard ? (
            <div className="space-y-3 animate-fadeIn">
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400 block uppercase">
                  HAZARD INSPECTION RULING
                </span>
                <h4 className="font-serif text-lg font-bold text-slate-900 dark:text-white">
                  {selectedHazard.name}
                </h4>
                <span className="text-[10px] text-slate-500 block">
                  法規依據：{selectedHazard.lawClause}
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/50 space-y-1">
                <span className="font-bold text-rose-800 dark:text-rose-200 block">
                  ⚠️ 現場違規事由：
                </span>
                <p className="text-slate-600 dark:text-slate-300 font-sans leading-relaxed text-[11px]">
                  {selectedHazard.description}
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/50 space-y-1">
                <span className="font-bold text-emerald-800 dark:text-emerald-200 block">
                  🛠️ 正確改善處置方案：
                </span>
                <p className="text-slate-600 dark:text-slate-300 font-sans leading-relaxed text-[11px]">
                  {selectedHazard.rectification}
                </p>
              </div>
            </div>
          ) : (
            <p className="text-slate-500 leading-relaxed font-sans">
              點擊左側工地畫面中的紅色預警圈，查閱違規事態與排解方案。
            </p>
          )}

          {isAllResolved && (
            <div className="p-3.5 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-700 dark:text-emerald-300 font-bold flex items-center gap-2 animate-fadeIn">
              <CheckCircle2 className="size-4" />
              <span>🎉 營造工地 5 大安全隱患全數排解完成！獲得 +80 EXP</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
