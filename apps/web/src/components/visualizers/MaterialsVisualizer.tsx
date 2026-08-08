'use client';

import React, { useState } from 'react';

interface MaterialsVisualizerProps {
  topicSlug: string;
}

export default function MaterialsVisualizer({ topicSlug }: MaterialsVisualizerProps) {
  // === 1. Concrete Slump Simulation State ===
  const [slumpValue, setSlumpValue] = useState<number>(15); // cm
  const [waterCementRatio, setWaterCementRatio] = useState<number>(0.5); // w/c

  // === 2. Steel Stress Strain Exploration State ===
  const [strainInput, setStrainInput] = useState<number>(0.002); // strain ε

  // Concrete Strength estimation (Abrams Law simplified: fc = A / B^(1.5 * w/c))
  const estStrengthMPa = Math.round(100 / Math.pow(2.5, 1.8 * waterCementRatio));

  // Concrete Workability text
  let workabilityCategory = '塑性混凝土 (Medium Workability)';
  let applicationText = '適用於一般鋼筋混凝土樑、柱、樓板結構，容易澆置與搗實。';
  if (slumpValue < 8) {
    workabilityCategory = '乾硬性混凝土 (Low Slump)';
    applicationText = '適用於路面、大體積重力式壩體或預力預鑄構件，需強力震動機搗實。';
  } else if (slumpValue > 18) {
    workabilityCategory = '流動性 / 自密實混凝土 (High Slump / SCC)';
    applicationText = '適用於密布鋼筋柱樑接頭、高層建築泵送或鋼骨鋼筋混凝土 (SRC) 狹窄斷面。';
  }

  // Steel Stress (fy = 420 MPa for SD420 steel)
  const es = 200000; // Elastic Modulus = 200,000 MPa
  const ey = 420 / es; // 0.0021
  let stressMPa = 0;
  let stageName = '彈性階段 (Elastic Region)';

  if (strainInput <= ey) {
    stressMPa = strainInput * es;
    stageName = '彈性階段 (Elastic Region) — 應力與應變成正比，遵守虎克定律';
  } else if (strainInput <= 0.015) {
    stressMPa = 420;
    stageName = '降伏平台 (Yield Plateau) — 應力維持 420 MPa，變形急劇塑性延伸';
  } else if (strainInput <= 0.08) {
    // Strain hardening up to 620 MPa
    const t = (strainInput - 0.015) / (0.08 - 0.015);
    stressMPa = 420 + 200 * Math.sin((t * Math.PI) / 2);
    stageName = '應變硬化階段 (Strain Hardening) — 晶格滑移受阻，強度攀升至抗拉極限 UTS';
  } else {
    // Necking
    const t = (strainInput - 0.08) / (0.15 - 0.08);
    stressMPa = 620 - 150 * t;
    stageName = '頸縮斷裂階段 (Necking & Rupture) — 局部斷面變細，最終產生杯錐狀破壞';
  }

  return (
    <div className="rounded-xl border border-amber-200/80 bg-amber-50/20 dark:border-amber-800/60 dark:bg-amber-950/20 p-5 sm:p-6 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-200/60 dark:border-amber-800/40 pb-3">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-lg bg-amber-600 text-white text-xs font-mono font-bold">
            🧱
          </span>
          <div>
            <h3 className="font-serif text-base font-bold text-slate-900 dark:text-white">
              材料與試驗 · 應力應變與混凝土試驗互動模擬器
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              探索 CNS 國家標準試驗：坍度量測、水灰比抗壓強度曲線與鋼筋拉伸破壞力學
            </p>
          </div>
        </div>
        <span className="rounded-full bg-amber-600/10 px-2.5 py-0.5 text-xs font-mono font-bold text-amber-700 dark:text-amber-300 border border-amber-600/20">
          CNS 試驗標準
        </span>
      </div>

      {topicSlug.includes('concrete') || topicSlug.includes('mix-design') || topicSlug.includes('aggregates') ? (
        // Concrete Slump & Compressive Strength Visualizer
        <div className="grid gap-6 lg:grid-cols-2 items-center">
          {/* Slump Cone Diagram */}
          <div className="relative aspect-video rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 flex items-center justify-center shadow-inner overflow-hidden">
            <svg viewBox="0 0 300 200" className="w-full h-full">
              {/* Base plate */}
              <rect x="30" y="170" width="240" height="8" fill="#64748B" rx="2" />
              {/* Reference ruler & rod */}
              <line x1="200" y1="50" x2="200" y2="170" stroke="#0284C7" strokeWidth="3" />
              {/* Original Cone Outline (Height 30 cm) */}
              <polygon
                points="110,50 170,50 190,170 90,170"
                fill="none"
                stroke="#94A3B8"
                strokeWidth="1.5"
                strokeDasharray="4 3"
              />
              <text x="75" y="45" fontSize="9" className="fill-slate-400 font-mono">坍度錐原高 30 cm</text>

              {/* Slumped Concrete Profile */}
              {(() => {
                const slumpFraction = slumpValue / 30; // 0 to 1
                const curHeight = 170 - (1 - slumpFraction) * 120;
                const spread = 90 + slumpFraction * 35;
                const rightSpread = 190 - slumpFraction * 35;
                return (
                  <g>
                    <path
                      d={`M ${110 - slumpFraction * 15} ${curHeight} Q 140 ${curHeight - 5} ${170 + slumpFraction * 15} ${curHeight} L ${rightSpread + 25} 170 L ${spread - 25} 170 Z`}
                      fill="#CBD5E1"
                      stroke="#475569"
                      strokeWidth="2"
                    />
                    {/* Measurement line */}
                    <line x1="140" y1="50" x2="140" y2={curHeight} stroke="#DC2626" strokeWidth="2" strokeDasharray="2 2" />
                    <text x="148" y={50 + (curHeight - 50) / 2 + 4} fontSize="11" className="fill-red-600 font-bold font-mono">
                      坍度 = {slumpValue} cm
                    </text>
                  </g>
                );
              })()}
            </svg>
          </div>

          {/* Controls */}
          <div className="space-y-4">
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-mono font-bold">
                <span>坍度值 (Slump, 0 ~ 25 cm):</span>
                <span className="text-red-600 font-bold">{slumpValue} cm</span>
              </div>
              <input
                type="range"
                min="2"
                max="25"
                step="0.5"
                value={slumpValue}
                onChange={(e) => setSlumpValue(Number(e.target.value))}
                className="w-full accent-red-600 cursor-pointer"
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs font-mono font-bold">
                <span>水灰比 (W/C, 0.35 ~ 0.70):</span>
                <span className="text-amber-700 dark:text-amber-300 font-bold">{waterCementRatio.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="0.35"
                max="0.70"
                step="0.01"
                value={waterCementRatio}
                onChange={(e) => setWaterCementRatio(Number(e.target.value))}
                className="w-full accent-amber-600 cursor-pointer"
              />
            </div>

            <div className="rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 p-3 space-y-1 text-xs">
              <div className="font-bold text-amber-900 dark:text-amber-100 flex items-center justify-between">
                <span>{workabilityCategory}</span>
                <span className="text-xs font-mono bg-white dark:bg-slate-900 px-2 py-0.5 rounded border border-amber-300">
                  預估 28 天抗壓強度 fc&apos; ≈ {estStrengthMPa} MPa
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-400">{applicationText}</p>
            </div>
          </div>
        </div>
      ) : (
        // Steel Stress Strain Exploration
        <div className="grid gap-6 lg:grid-cols-2 items-center">
          {/* Stress Strain Curve SVG */}
          <div className="relative aspect-video rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 flex items-center justify-center shadow-inner overflow-hidden">
            <svg viewBox="0 0 320 200" className="w-full h-full">
              {/* Axes */}
              <line x1="40" y1="170" x2="300" y2="170" stroke="#94A3B8" strokeWidth="1.5" />
              <line x1="40" y1="170" x2="40" y2="20" stroke="#94A3B8" strokeWidth="1.5" />
              <text x="270" y="185" fontSize="9" className="fill-slate-500 font-mono">應變 ε</text>
              <text x="15" y="30" fontSize="9" className="fill-slate-500 font-mono">應力 σ (MPa)</text>

              {/* Stress-strain curve path */}
              <path
                d="M 40 170 L 65 95 L 95 95 Q 160 50 220 50 Q 260 50 280 80"
                fill="none"
                stroke="#D97706"
                strokeWidth="2.5"
              />

              {/* Characteristic Labels */}
              <text x="60" y="90" fontSize="8" className="fill-slate-500 font-mono">降伏點 fy=420</text>
              <text x="210" y="42" fontSize="8" className="fill-slate-500 font-mono">極限 UTS=620</text>
              <circle cx="65" cy="95" r="3" fill="#D97706" />
              <circle cx="220" cy="50" r="3" fill="#D97706" />
              <circle cx="280" cy="80" r="3" fill="#EF4444" />

              {/* Dynamic Probe Point based on strainInput */}
              {(() => {
                let px = 40;
                let py = 170;
                if (strainInput <= ey) {
                  px = 40 + (strainInput / ey) * 25;
                  py = 170 - (stressMPa / 420) * 75;
                } else if (strainInput <= 0.015) {
                  px = 65 + ((strainInput - ey) / (0.015 - ey)) * 30;
                  py = 95;
                } else if (strainInput <= 0.08) {
                  px = 95 + ((strainInput - 0.015) / (0.08 - 0.015)) * 125;
                  py = 95 - ((stressMPa - 420) / 200) * 45;
                } else {
                  px = 220 + ((strainInput - 0.08) / (0.15 - 0.08)) * 60;
                  py = 50 + ((620 - stressMPa) / 150) * 30;
                }
                return (
                  <g>
                    <circle cx={px} cy={py} r="5" fill="#0D9488" stroke="#FFF" strokeWidth="1.5" />
                    <line x1={px} y1={py} x2={px} y2="170" stroke="#0D9488" strokeWidth="1" strokeDasharray="2 2" />
                    <line x1={px} y1={py} x2="40" y2={py} stroke="#0D9488" strokeWidth="1" strokeDasharray="2 2" />
                  </g>
                );
              })()}
            </svg>
          </div>

          {/* Controls */}
          <div className="space-y-4">
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-mono font-bold">
                <span>施加應變 (Strain, ε):</span>
                <span className="text-teal-700 dark:text-teal-300 font-bold">{strainInput.toFixed(4)}</span>
              </div>
              <input
                type="range"
                min="0.0002"
                max="0.14"
                step="0.0005"
                value={strainInput}
                onChange={(e) => setStrainInput(Number(e.target.value))}
                className="w-full accent-teal-600 cursor-pointer"
              />
            </div>

            <div className="rounded-lg bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800/60 p-3 space-y-1 font-mono">
              <div className="flex justify-between text-xs font-bold text-teal-900 dark:text-teal-100">
                <span>計算應力 σ:</span>
                <span className="text-base text-teal-700 dark:text-teal-300">{Math.round(stressMPa)} MPa</span>
              </div>
              <div className="text-[11px] text-slate-600 dark:text-slate-400 font-sans leading-relaxed pt-1 border-t border-teal-200/60">
                {stageName}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
