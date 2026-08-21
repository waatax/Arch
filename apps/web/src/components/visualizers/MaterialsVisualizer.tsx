'use client';

import React, { useState } from 'react';
import MathText from '@/components/MathText';

interface MaterialsVisualizerProps {
  topicSlug: string;
}

export default function MaterialsVisualizer({ topicSlug }: MaterialsVisualizerProps) {
  // === 1. Concrete Slump Simulation State ===
  const [slumpValue, setSlumpValue] = useState<number>(15); // cm
  const [waterCementRatio, setWaterCementRatio] = useState<number>(0.5); // w/c

  // === 2. Steel Stress Strain Exploration State ===
  const [strainInput, setStrainInput] = useState<number>(0.002); // strain ε

  // === 3. Mix Design Absolute Volume State ===
  const [targetStrength, setTargetStrength] = useState<number>(28); // MPa (fc')
  const [sandRatio, setSandRatio] = useState<number>(42); // % (S/A)

  // === 4. Wood Warpage State ===
  const [woodCutType, setWoodCutType] = useState<'flat' | 'quarter'>('flat');

  // === 5. Steel Welding Symbol State ===
  const [weldType, setWeldType] = useState<'fillet' | 'v-groove' | 'field' | 'all-around'>('fillet');

  // Calculations:
  // Concrete Strength estimation
  const estStrengthMPa = Math.round(100 / Math.pow(2.5, 1.8 * waterCementRatio));

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
  const es = 200000;
  const ey = 420 / es;
  let stressMPa = 0;
  let stageName = '彈性階段 (Elastic Region)';

  if (strainInput <= ey) {
    stressMPa = strainInput * es;
    stageName = '彈性階段 (Elastic Region) — 應力與應變成正比，遵守虎克定律';
  } else if (strainInput <= 0.015) {
    stressMPa = 420;
    stageName = '降伏平台 (Yield Plateau) — 應力維持 420 MPa，變形急劇塑性延伸';
  } else if (strainInput <= 0.08) {
    const t = (strainInput - 0.015) / (0.08 - 0.015);
    stressMPa = 420 + 200 * Math.sin((t * Math.PI) / 2);
    stageName = '應變硬化階段 (Strain Hardening) — 晶格滑移受阻，強度攀升至抗拉極限 UTS';
  } else {
    const t = (strainInput - 0.08) / (0.15 - 0.08);
    stressMPa = 620 - 150 * t;
    stageName = '頸縮斷裂階段 (Necking & Rupture) — 局部斷面變細，最終產生杯錐狀破壞';
  }

  // Mix Design Absolute Volume Calculations (1 m3 = 1000 L)
  const waterKg = 185; // kg (185 L)
  const cementKg = Math.round(waterKg / (0.45 + (35 - targetStrength) * 0.01));
  const cementVolL = Math.round(cementKg / 3.15);
  const airVolL = 20; // 2% air
  const remainingAggVolL = 1000 - waterKg - cementVolL - airVolL;
  const sandVolL = Math.round((remainingAggVolL * sandRatio) / 100);
  const coarseVolL = remainingAggVolL - sandVolL;
  const sandKg = Math.round(sandVolL * 2.65);
  const coarseKg = Math.round(coarseVolL * 2.65);

  return (
    <div className="rounded-xl border border-amber-200/80 bg-amber-50/20 dark:border-amber-800/60 dark:bg-amber-950/20 p-5 sm:p-6 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-200/60 dark:border-amber-800/40 pb-3">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-lg bg-amber-600 text-white text-xs font-mono font-bold">
            🧱
          </span>
          <div>
            <h3 className="font-serif text-base font-bold text-slate-900 dark:text-white">
              材料與試驗 · 混凝土配比、木材乾縮與鋼構銲接實驗室
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              探索 CNS 試驗標準：絕對體積配比法、坍度試驗、木材三向度變形、鋼筋拉伸曲線與鋼構銲接圖例
            </p>
          </div>
        </div>
        <span className="rounded-full bg-amber-600/10 px-2.5 py-0.5 text-xs font-mono font-bold text-amber-700 dark:text-amber-300 border border-amber-600/20">
          統測專業一（材料）
        </span>
      </div>

      {topicSlug.includes('mix-design') || topicSlug.includes('mix') ? (
        // === 3. Mix Design Absolute Volume Visualizer ===
        <div className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-3 text-xs font-mono">
            <div className="space-y-1">
              <div className="flex justify-between font-bold">
                <span>設計抗壓強度 (fc&apos;):</span>
                <span className="text-amber-700 dark:text-amber-300">{targetStrength} MPa</span>
              </div>
              <input
                type="range"
                min="21"
                max="40"
                step="1"
                value={targetStrength}
                onChange={(e) => setTargetStrength(Number(e.target.value))}
                className="w-full accent-amber-600 cursor-pointer"
              />
            </div>
            <div className="space-y-1">
              <div className="flex justify-between font-bold">
                <span>砂率 (S/A %):</span>
                <span className="text-blue-600">{sandRatio}%</span>
              </div>
              <input
                type="range"
                min="35"
                max="50"
                step="1"
                value={sandRatio}
                onChange={(e) => setSandRatio(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />
            </div>
          </div>

          <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 space-y-3 shadow-inner font-mono text-xs">
            <span className="text-[11px] font-bold text-slate-500 block">
              1.0 m³ (1000 公升) 混凝土絕對體積堆疊分配
            </span>
            <div className="w-full h-10 rounded-lg overflow-hidden flex text-center font-bold text-white text-[11px] leading-10 shadow-sm">
              <div style={{ width: `${(waterKg / 1000) * 100}%` }} className="bg-sky-500" title={`水: ${waterKg}L`}>
                水 {waterKg}L
              </div>
              <div style={{ width: `${(cementVolL / 1000) * 100}%` }} className="bg-slate-600" title={`水泥: ${cementVolL}L (${cementKg}kg)`}>
                水泥 {cementVolL}L
              </div>
              <div style={{ width: `${(sandVolL / 1000) * 100}%` }} className="bg-amber-600" title={`砂: ${sandVolL}L (${sandKg}kg)`}>
                砂 {sandVolL}L
              </div>
              <div style={{ width: `${(coarseVolL / 1000) * 100}%` }} className="bg-stone-500" title={`石: ${coarseVolL}L (${coarseKg}kg)`}>
                石 {coarseVolL}L
              </div>
              <div style={{ width: `${(airVolL / 1000) * 100}%` }} className="bg-emerald-500" title="空氣 20L">
                氣 2%
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2 pt-1 text-center">
              <div className="p-2 rounded bg-slate-50 dark:bg-slate-800">
                <div className="text-[10px] text-slate-500">水泥用量 C</div>
                <div className="font-bold text-slate-900 dark:text-white">{cementKg} kg/m³</div>
              </div>
              <div className="p-2 rounded bg-sky-50 dark:bg-sky-950/40">
                <div className="text-[10px] text-sky-700">水量 W</div>
                <div className="font-bold text-sky-900 dark:text-sky-200">{waterKg} kg/m³</div>
              </div>
              <div className="p-2 rounded bg-amber-50 dark:bg-amber-950/40">
                <div className="text-[10px] text-amber-700">細粒料 S</div>
                <div className="font-bold text-amber-900 dark:text-amber-200">{sandKg} kg/m³</div>
              </div>
              <div className="p-2 rounded bg-stone-100 dark:bg-stone-800">
                <div className="text-[10px] text-stone-600">粗粒料 G</div>
                <div className="font-bold text-stone-900 dark:text-stone-200">{coarseKg} kg/m³</div>
              </div>
            </div>

            <div className="text-[11px] text-slate-500 font-sans">
              <MathText content="💡 **絕對體積法公式：** $V_w + \frac{C}{3.15 \times 1000} + \frac{S}{G_{sb} \times 1000} + \frac{G}{G_{gb} \times 1000} + V_{\text{air}} = 1.0\text{ m}^3$。各固體材料體積等於其質量除以比重。" />
            </div>
          </div>
        </div>
      ) : topicSlug.includes('wood') || topicSlug.includes('timber') ? (
        // === 4. Wood Warpage & Shrinkage Visualizer ===
        <div className="space-y-4">
          <div className="flex flex-wrap gap-1 rounded-lg bg-white dark:bg-slate-900 p-1 border border-slate-200 dark:border-slate-800 text-xs font-mono">
            <button
              onClick={() => setWoodCutType('flat')}
              className={`px-3 py-1 rounded transition-colors ${woodCutType === 'flat' ? 'bg-amber-600 text-white font-bold' : 'text-slate-600 dark:text-slate-400'}`}
            >
              弦切板 (Flat Sawn - 易翹曲)
            </button>
            <button
              onClick={() => setWoodCutType('quarter')}
              className={`px-3 py-1 rounded transition-colors ${woodCutType === 'quarter' ? 'bg-amber-600 text-white font-bold' : 'text-slate-600 dark:text-slate-400'}`}
            >
              徑切板 (Quarter Sawn - 最穩定)
            </button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 items-center rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 shadow-inner">
            <div className="relative aspect-video rounded-lg bg-slate-50 dark:bg-slate-950 p-2 flex items-center justify-center">
              <svg viewBox="0 0 240 160" className="w-full h-full">
                {woodCutType === 'flat' ? (
                  <g>
                    <path
                      d="M 40 90 Q 120 70 200 90 L 195 110 Q 120 90 45 110 Z"
                      fill="rgba(217, 119, 6, 0.2)"
                      stroke="#D97706"
                      strokeWidth="2"
                    />
                    <path d="M 50 100 Q 120 82 190 100" fill="none" stroke="#B45309" strokeWidth="1.5" strokeDasharray="3 2" />
                    <text x="75" y="60" fontSize="9" fill="#DC2626" className="font-mono font-bold">反翹彎曲 (Cupping)</text>
                    <text x="85" y="130" fontSize="9" fill="#78350F" className="font-mono">年輪背向側凸起</text>
                  </g>
                ) : (
                  <g>
                    <rect x="50" y="70" width="140" height="25" fill="rgba(217, 119, 6, 0.2)" stroke="#D97706" strokeWidth="2" />
                    <line x1="80" y1="70" x2="80" y2="95" stroke="#B45309" strokeWidth="1.5" />
                    <line x1="110" y1="70" x2="110" y2="95" stroke="#B45309" strokeWidth="1.5" />
                    <line x1="140" y1="70" x2="140" y2="95" stroke="#B45309" strokeWidth="1.5" />
                    <line x1="170" y1="70" x2="170" y2="95" stroke="#B45309" strokeWidth="1.5" />
                    <text x="80" y="55" fontSize="9" fill="#059669" className="font-mono font-bold">尺寸極穩定 (無反翹)</text>
                  </g>
                )}
              </svg>
            </div>

            <div className="space-y-2 text-xs">
              <span className="text-xs font-mono font-bold text-amber-700 dark:text-amber-300 uppercase tracking-wider block">
                木材三向度乾縮率定律
              </span>
              <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 font-mono">
                <strong>乾縮率大小：弦向 (T) &gt; 徑向 (R) &gt;&gt; 縱向 (L)</strong>
                <div className="text-[11px] text-slate-600 dark:text-slate-300 font-sans mt-1">
                  • 弦向乾縮率約 6% ~ 10%（最大）<br/>
                  • 徑向乾縮率約 3% ~ 5%（約為弦向一半）<br/>
                  • 縱向乾縮率僅 0.1% ~ 0.2%（極微小可忽略）
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : topicSlug.includes('steel') || topicSlug.includes('weld') || topicSlug.includes('metal') ? (
        // === 5. Structural Steel Welding Visualizer ===
        <div className="space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { id: 'fillet', name: '填角銲 (Fillet Weld)' },
              { id: 'v-groove', name: 'V型開槽對接銲' },
              { id: 'field', name: '現場銲接旗幟符號' },
              { id: 'all-around', name: '全周銲圓圈符號' },
            ].map((wt) => (
              <button
                key={wt.id}
                onClick={() => setWeldType(wt.id as typeof weldType)}
                className={`p-2.5 rounded-xl border text-xs font-mono font-bold text-left transition-all ${weldType === wt.id ? 'bg-amber-50 dark:bg-amber-950/60 border-amber-500 text-amber-900 dark:text-amber-200' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400'}`}
              >
                {wt.name}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-4 items-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-xl">
            <div className="relative aspect-video rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-2 flex items-center justify-center">
              <svg viewBox="0 0 200 120" className="w-full h-full">
                <line x1="30" y1="60" x2="130" y2="60" stroke="#0284C7" strokeWidth="2" />
                <line x1="130" y1="60" x2="170" y2="90" stroke="#0284C7" strokeWidth="2" />
                <polygon points="170,90 162,82 168,80" fill="#0284C7" />

                {weldType === 'fillet' ? (
                  <g>
                    <polygon points="70,60 70,80 90,60" fill="#DC2626" />
                    <text x="50" y="55" fontSize="10" fill="#0284C7" className="font-mono font-bold">6</text>
                    <text x="60" y="105" fontSize="9" fill="#DC2626" className="font-bold">6mm 填角銲</text>
                  </g>
                ) : weldType === 'v-groove' ? (
                  <g>
                    <polyline points="70,60 80,80 90,60" fill="none" stroke="#DC2626" strokeWidth="2" />
                    <text x="65" y="105" fontSize="9" fill="#DC2626" className="font-bold">V 型對接開槽銲</text>
                  </g>
                ) : weldType === 'field' ? (
                  <g>
                    <polygon points="70,60 70,80 90,60" fill="#DC2626" />
                    <line x1="130" y1="60" x2="130" y2="40" stroke="#1E293B" strokeWidth="2" />
                    <polygon points="130,40 145,45 130,50" fill="#DC2626" />
                    <text x="135" y="35" fontSize="8" fill="#DC2626" className="font-bold">現場銲接 (Field Flag)</text>
                  </g>
                ) : (
                  <g>
                    <polygon points="70,60 70,80 90,60" fill="#DC2626" />
                    <circle cx="130" cy="60" r="8" fill="none" stroke="#DC2626" strokeWidth="2" />
                    <text x="120" y="35" fontSize="8" fill="#DC2626" className="font-bold">全周銲 (All-Around)</text>
                  </g>
                )}
              </svg>
            </div>

            <div className="space-y-2 text-xs">
              <span className="text-[10px] font-mono uppercase tracking-wider text-amber-600 font-bold block">
                CNS 建築鋼結構銲接符號規範
              </span>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {weldType === 'fillet' ? '三角形符號代表填角銲（直角三角形成垂直壁與板片連接）；符號位於基準線下方表示「箭頭側銲接」，上方表示「另一側銲接」。' :
                 weldType === 'v-groove' ? 'V 字形符號代表開槽對接銲，用於兩塊厚鋼板全滲透或部分滲透之對接接頭。' :
                 weldType === 'field' ? '基準線轉折處插上小黑旗，代表非工廠預作，而是在「營建工地現場」進行組裝施銲。' :
                 '基準線與引導線交點畫圓圈，代表沿構件周邊「全周封閉銲接」（常用於鋼管柱與封底板接頭）。'}
              </p>
            </div>
          </div>
        </div>
      ) : topicSlug.includes('concrete') || topicSlug.includes('aggregates') ? (
        // === 1. Concrete Slump Visualizer ===
        <div className="grid gap-6 lg:grid-cols-2 items-center">
          <div className="relative aspect-video rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 flex items-center justify-center shadow-inner overflow-hidden">
            <svg viewBox="0 0 300 200" className="w-full h-full">
              <rect x="30" y="170" width="240" height="8" fill="#64748B" rx="2" />
              <line x1="200" y1="50" x2="200" y2="170" stroke="#0284C7" strokeWidth="3" />
              <polygon
                points="110,50 170,50 190,170 90,170"
                fill="none"
                stroke="#94A3B8"
                strokeWidth="1.5"
                strokeDasharray="4 3"
              />
              <text x="75" y="45" fontSize="9" className="fill-slate-400 font-mono">坍度錐原高 30 cm</text>

              {(() => {
                const slumpFraction = slumpValue / 30;
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
                    <line x1="140" y1="50" x2="140" y2={curHeight} stroke="#DC2626" strokeWidth="2" strokeDasharray="2 2" />
                    <text x="148" y={50 + (curHeight - 50) / 2 + 4} fontSize="11" className="fill-red-600 font-bold font-mono">
                      坍度 = {slumpValue} cm
                    </text>
                  </g>
                );
              })()}
            </svg>
          </div>

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
        // === 2. Steel Stress Strain Exploration ===
        <div className="grid gap-6 lg:grid-cols-2 items-center">
          <div className="relative aspect-video rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 flex items-center justify-center shadow-inner overflow-hidden">
            <svg viewBox="0 0 320 200" className="w-full h-full">
              <line x1="40" y1="170" x2="300" y2="170" stroke="#94A3B8" strokeWidth="1.5" />
              <line x1="40" y1="170" x2="40" y2="20" stroke="#94A3B8" strokeWidth="1.5" />
              <text x="270" y="185" fontSize="9" className="fill-slate-500 font-mono">應變 ε</text>
              <text x="15" y="30" fontSize="9" className="fill-slate-500 font-mono">應力 σ (MPa)</text>

              <path
                d="M 40 170 L 65 95 L 95 95 Q 160 50 220 50 Q 260 50 280 80"
                fill="none"
                stroke="#D97706"
                strokeWidth="2.5"
              />

              <text x="60" y="90" fontSize="8" className="fill-slate-500 font-mono">降伏點 fy=420</text>
              <text x="210" y="42" fontSize="8" className="fill-slate-500 font-mono">極限 UTS=620</text>
              <circle cx="65" cy="95" r="3" fill="#D97706" />
              <circle cx="220" cy="50" r="3" fill="#D97706" />
              <circle cx="280" cy="80" r="3" fill="#EF4444" />

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
