'use client';

import React, { useState } from 'react';
import MathText from '@/components/MathText';

interface BuildingEngineeringVisualizerProps {
  topicSlug: string;
}

export default function BuildingEngineeringVisualizer({ topicSlug }: BuildingEngineeringVisualizerProps) {
  // === 1. BIM LOD & Multi-D State ===
  const [lodLevel, setLodLevel] = useState<100 | 200 | 300 | 400 | 500>(300);

  // === 2. FAR & BCR Calculator State ===
  const [siteArea, setSiteArea] = useState<number>(600); // m2
  const [bcrPercent, setBcrPercent] = useState<number>(50); // % (Building Coverage Ratio)
  const [farPercent, setFarPercent] = useState<number>(300); // % (Floor Area Ratio)

  // Computed Building Geometry:
  const maxFootprint = Math.round((siteArea * bcrPercent) / 100);
  const maxTotalFloorArea = Math.round((siteArea * farPercent) / 100);
  const calculatedFloors = maxFootprint > 0 ? Math.ceil(maxTotalFloorArea / maxFootprint) : 1;

  // === 3. Green Building EEWH State ===
  const [activeCategory, setActiveCategory] = useState<'ecology' | 'energy' | 'waste' | 'health'>('energy');

  // === 4. Architectural Acoustics Sabine Reverberation State ===
  const [roomVolume, setRoomVolume] = useState<number>(3500); // m3
  const [absorptionCoeff, setAbsorptionCoeff] = useState<number>(0.25); // avg alpha
  const surfaceArea = 1400; // m2

  // Sabine calculation: T60 = 0.161 * V / (S * alpha)
  const totalAbsorptionA = surfaceArea * absorptionCoeff;
  const rt60 = totalAbsorptionA > 0 ? (0.161 * roomVolume) / totalAbsorptionA : 0;

  let acousticEvaluation = '🎵 適合交響音樂廳 (Concert Hall: 1.7 ~ 2.2 秒，音質飽滿溫暖)';
  if (rt60 < 1.0) {
    acousticEvaluation = '🗣️ 適合演講廳 / 會議室 (Speech Clarity: 0.7 ~ 1.0 秒，清晰度高無回音)';
  } else if (rt60 <= 1.5) {
    acousticEvaluation = '🎭 適合歌劇院 / 綜合多功能劇場 (Opera/Theater: 1.2 ~ 1.5 秒，兼顧歌聲與口白)';
  } else if (rt60 > 2.3) {
    acousticEvaluation = '⛪ 適合大教堂 / 聖樂合唱 (Cathedral: > 2.3 秒，殘響極長，口語清晰度偏低)';
  }

  return (
    <div className="rounded-xl border border-emerald-200/80 bg-emerald-50/20 dark:border-emerald-800/60 dark:bg-emerald-950/20 p-5 sm:p-6 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-emerald-200/60 dark:border-emerald-800/40 pb-3">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-lg bg-emerald-600 text-white text-xs font-mono font-bold">
            🏢
          </span>
          <div>
            <h3 className="font-serif text-base font-bold text-slate-900 dark:text-white">
              建築實務與永續工程 · 數位 BIM、法規容積與綠建築聲學實驗室
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              探索建築技術規則容積建蔽率、EEWH 綠建築九大指標、BIM LOD 演進與音樂廳殘響計算
            </p>
          </div>
        </div>
        <span className="rounded-full bg-emerald-600/10 px-2.5 py-0.5 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-300 border border-emerald-600/20">
          建築專業實務
        </span>
      </div>

      {topicSlug.includes('bim') ? (
        // 1. BIM LOD & Multi-D Visualizer
        <div className="space-y-4">
          <div className="flex flex-wrap gap-1 rounded-lg bg-white dark:bg-slate-900 p-1 border border-slate-200 dark:border-slate-800 text-xs font-mono">
            {([100, 200, 300, 400, 500] as const).map((lvl) => (
              <button
                key={lvl}
                onClick={() => setLodLevel(lvl)}
                className={`px-3 py-1 rounded transition-colors ${lodLevel === lvl ? 'bg-emerald-600 text-white font-bold' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
              >
                LOD {lvl}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 items-center rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 shadow-inner">
            {/* SVG Visual Model */}
            <div className="relative aspect-video rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-4 flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 240 180" className="w-full h-full">
                {lodLevel === 100 ? (
                  <g>
                    <polygon points="120,40 190,75 120,110 50,75" fill="rgba(16, 185, 129, 0.2)" stroke="#059669" strokeWidth="2" />
                    <polygon points="50,75 120,110 120,160 50,125" fill="rgba(16, 185, 129, 0.3)" stroke="#059669" strokeWidth="2" />
                    <polygon points="190,75 120,110 120,160 190,125" fill="rgba(16, 185, 129, 0.15)" stroke="#059669" strokeWidth="2" />
                    <text x="75" y="100" fontSize="9" fill="#059669" className="font-mono font-bold">概念體量 (Massing)</text>
                  </g>
                ) : lodLevel === 200 ? (
                  <g>
                    <rect x="60" y="50" width="120" height="90" fill="rgba(16, 185, 129, 0.1)" stroke="#059669" strokeWidth="2" strokeDasharray="3 3" />
                    <line x1="60" y1="95" x2="180" y2="95" stroke="#059669" strokeWidth="1.5" />
                    <rect x="75" y="65" width="30" height="20" fill="#059669" opacity="0.3" />
                    <rect x="135" y="65" width="30" height="20" fill="#059669" opacity="0.3" />
                    <text x="75" y="125" fontSize="9" fill="#059669" className="font-mono font-bold">示意性系統 (Schematic)</text>
                  </g>
                ) : lodLevel === 300 ? (
                  <g>
                    <rect x="50" y="40" width="140" height="100" fill="rgba(16, 185, 129, 0.1)" stroke="#059669" strokeWidth="2" />
                    <rect x="65" y="55" width="35" height="35" fill="none" stroke="#0284C7" strokeWidth="2" />
                    <line x1="65" y1="55" x2="100" y2="90" stroke="#0284C7" strokeWidth="1" />
                    <rect x="140" y="55" width="35" height="35" fill="none" stroke="#0284C7" strokeWidth="2" />
                    <line x1="140" y1="55" x2="175" y2="90" stroke="#0284C7" strokeWidth="1" />
                    <line x1="50" y1="105" x2="190" y2="105" stroke="#D97706" strokeWidth="2" />
                    <text x="65" y="130" fontSize="9" fill="#059669" className="font-mono font-bold">精確施工構件 (Detailed)</text>
                  </g>
                ) : lodLevel === 400 ? (
                  <g>
                    <rect x="50" y="40" width="140" height="100" fill="rgba(16, 185, 129, 0.05)" stroke="#059669" strokeWidth="2" />
                    <circle cx="65" cy="55" r="3" fill="#DC2626" />
                    <circle cx="175" cy="55" r="3" fill="#DC2626" />
                    <circle cx="65" cy="125" r="3" fill="#DC2626" />
                    <circle cx="175" cy="125" r="3" fill="#DC2626" />
                    <rect x="62" y="52" width="116" height="76" fill="none" stroke="#DC2626" strokeWidth="1.5" strokeDasharray="4 2" />
                    <text x="65" y="95" fontSize="9" fill="#DC2626" className="font-mono font-bold">加工組裝級鋼筋與螺栓</text>
                  </g>
                ) : (
                  <g>
                    <rect x="50" y="40" width="140" height="100" fill="rgba(16, 185, 129, 0.15)" stroke="#059669" strokeWidth="2" />
                    <circle cx="120" cy="80" r="18" fill="#059669" opacity="0.2" />
                    <text x="110" y="84" fontSize="12" fill="#059669" className="font-bold">✓</text>
                    <text x="75" y="115" fontSize="9" fill="#059669" className="font-mono font-bold">竣工履歷與維護營運 (FM)</text>
                  </g>
                )}
              </svg>
            </div>

            <div className="space-y-3 text-xs">
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-600 font-bold block">
                BIM Level of Development (AIA E202 規範)
              </span>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                {lodLevel === 100 ? 'LOD 100：概念規劃體量 (Conceptual Massing)' :
                 lodLevel === 200 ? 'LOD 200：基本設計示意 (Schematic Design)' :
                 lodLevel === 300 ? 'LOD 300：細部設計與發包 (Detailed Design)' :
                 lodLevel === 400 ? 'LOD 400：工廠預鑄與加工 (Fabrication & Assembly)' :
                 'LOD 500：竣工查驗與智慧物業營運 (As-Built & O&M)'}
              </h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {lodLevel === 100 ? '以整體體量、形狀與方位呈現，用於容積率檢討、都市景觀審查與初步日照風場模擬。' :
                 lodLevel === 200 ? '構件具備近似尺寸、形狀與位置，定義出空間動線與主要結構骨架。' :
                 lodLevel === 300 ? '構件具備精確長寬高、幾何定位、材料規格與系統關聯，可直接產出施工圖面與數量清單 (BOQ)。' :
                 lodLevel === 400 ? '包含鋼筋彎折排布、鋼骨接頭螺栓銲道、預埋管線與吊裝配件，可直接指導入廠加工與現場組裝。' :
                 '模型經現場三維雷射掃描 (3D Laser Scan) 驗證，包含設備型號、原廠保固與維護週期資料庫，串聯數位雙生 (Digital Twin)。'}
              </p>
            </div>
          </div>
        </div>
      ) : topicSlug.includes('far') || topicSlug.includes('code') || topicSlug.includes('building-codes') ? (
        // 2. BCR & FAR Visualizer
        <div className="grid gap-6 lg:grid-cols-2 items-center">
          <div className="relative aspect-video rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 flex items-center justify-center shadow-inner overflow-hidden">
            <svg viewBox="0 0 320 220" className="w-full h-full">
              <polygon points="160,180 290,140 160,100 30,140" fill="rgba(148, 163, 184, 0.2)" stroke="#64748B" strokeWidth="2" />
              <text x="130" y="195" fontSize="10" className="fill-slate-600 font-mono font-bold">基地面積 = {siteArea} m²</text>

              {(() => {
                const fpScale = Math.sqrt(bcrPercent / 100);
                const x0 = 160;
                const y0 = 140;
                const dx = 100 * fpScale;
                const dy = 30 * fpScale;
                const h = Math.min(100, calculatedFloors * 12);
                return (
                  <g>
                    <polygon
                      points={`${x0},${y0 + dy} ${x0 + dx},${y0} ${x0},${y0 - dy} ${x0 - dx},${y0}`}
                      fill="rgba(16, 185, 129, 0.3)"
                      stroke="#059669"
                      strokeWidth="1.5"
                    />
                    <polygon
                      points={`${x0 - dx},${y0} ${x0},${y0 + dy} ${x0},${y0 + dy - h} ${x0 - dx},${y0 - h}`}
                      fill="rgba(5, 150, 105, 0.6)"
                      stroke="#059669"
                      strokeWidth="1.5"
                    />
                    <polygon
                      points={`${x0 + dx},${y0} ${x0},${y0 + dy} ${x0},${y0 + dy - h} ${x0 + dx},${y0 - h}`}
                      fill="rgba(4, 120, 87, 0.8)"
                      stroke="#059669"
                      strokeWidth="1.5"
                    />
                    <polygon
                      points={`${x0},${y0 + dy - h} ${x0 + dx},${y0 - h} ${x0},${y0 - dy - h} ${x0 - dx},${y0 - h}`}
                      fill="#10B981"
                      stroke="#059669"
                      strokeWidth="1.5"
                    />
                    {Array.from({ length: calculatedFloors }).map((_, fIdx) => {
                      const curH = (fIdx / calculatedFloors) * h;
                      return (
                        <line
                          key={fIdx}
                          x1={x0 - dx}
                          y1={y0 - curH}
                          x2={x0}
                          y2={y0 + dy - curH}
                          stroke="#FFF"
                          strokeWidth="0.8"
                          opacity="0.6"
                        />
                      );
                    })}
                    <text x={x0 - 25} y={y0 + dy - h - 8} fontSize="11" fill="#047857" className="font-mono font-bold">
                      {calculatedFloors} 層樓建築
                    </text>
                  </g>
                );
              })()}
            </svg>
          </div>

          <div className="space-y-4 text-xs">
            <div className="space-y-1">
              <div className="flex justify-between font-mono font-bold">
                <span>基地面積 (Site Area):</span>
                <span className="text-slate-900 dark:text-white">{siteArea} m²</span>
              </div>
              <input
                type="range"
                min="200"
                max="2000"
                step="50"
                value={siteArea}
                onChange={(e) => setSiteArea(Number(e.target.value))}
                className="w-full accent-slate-600 cursor-pointer"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <div className="flex justify-between font-mono font-bold">
                  <span>建蔽率 (BCR):</span>
                  <span className="text-emerald-600">{bcrPercent}%</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="80"
                  step="5"
                  value={bcrPercent}
                  onChange={(e) => setBcrPercent(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between font-mono font-bold">
                  <span>容積率 (FAR):</span>
                  <span className="text-blue-600">{farPercent}%</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="800"
                  step="20"
                  value={farPercent}
                  onChange={(e) => setFarPercent(Number(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 font-mono text-center">
              <div className="rounded-lg bg-emerald-50 dark:bg-emerald-950/40 p-2 border border-emerald-200 dark:border-emerald-800/60">
                <div className="text-[10px] text-emerald-700 dark:text-emerald-300">最大建築面積</div>
                <div className="text-sm font-bold text-emerald-900 dark:text-emerald-100">{maxFootprint} m²</div>
              </div>
              <div className="rounded-lg bg-blue-50 dark:bg-blue-950/40 p-2 border border-blue-200 dark:border-blue-800/60">
                <div className="text-[10px] text-blue-700 dark:text-blue-300">總容積樓地板</div>
                <div className="text-sm font-bold text-blue-900 dark:text-blue-100">{maxTotalFloorArea} m²</div>
              </div>
              <div className="rounded-lg bg-indigo-50 dark:bg-indigo-950/40 p-2 border border-indigo-200 dark:border-indigo-800/60">
                <div className="text-[10px] text-indigo-700 dark:text-indigo-300">預估建築層數</div>
                <div className="text-sm font-bold text-indigo-900 dark:text-indigo-100">約 {calculatedFloors} F</div>
              </div>
            </div>

            <div className="text-[11px] text-slate-500 dark:text-slate-400">
              <MathText content="💡 **公式重點：** 建築面積 $B = A \times \text{BCR}$；總容積樓地板面積 $F = A \times \text{FAR}$；樓層數 $N = F / B = \text{FAR} / \text{BCR}$。" />
            </div>
          </div>
        </div>
      ) : topicSlug.includes('green') || topicSlug.includes('eewh') || topicSlug.includes('sustainable') ? (
        // 3. Green Building EEWH Visualizer
        <div className="space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { id: 'ecology', name: '🌿 生態 (Ecology)', count: '3 項指標' },
              { id: 'energy', name: '⚡ 節能 (Energy)', count: '日常節能指標' },
              { id: 'waste', name: '♻️ 減廢 (Waste)', count: 'CO2 與廢棄物' },
              { id: 'health', name: '💧 健康 (Health)', count: '室內/水資源/污水' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as typeof activeCategory)}
                className={`p-3 rounded-xl border text-left transition-all ${activeCategory === cat.id ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/50 shadow-xs' : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300'}`}
              >
                <div className="font-bold text-xs text-slate-900 dark:text-white">{cat.name}</div>
                <div className="text-[10px] text-slate-500 font-mono mt-0.5">{cat.count}</div>
              </button>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 text-xs">
            <h4 className="font-bold text-sm text-emerald-900 dark:text-emerald-200">
              {activeCategory === 'ecology' ? '生態範疇：生物多樣性、綠化量、基地保水' :
               activeCategory === 'energy' ? '節能範疇：日常節能指標 (ENVLOAD、空調節能、照明節能)' :
               activeCategory === 'waste' ? '減廢範疇：二氧化碳減量指標、廢棄物減量指標' :
               '健康範疇：室內環境指標、水資源指標、污水垃圾改善指標'}
            </h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {activeCategory === 'ecology' ? '評估基地綠化覆蓋、多層次喬灌木蜜源植物配置，以及透水鋪面與雨水滲透陰井，使都市基地維持天然水文循環與微氣候調節。' :
               activeCategory === 'energy' ? '建築外殼節能（外殼耗能量 ENVLOAD、遮陽係數與開窗率）、高效率變頻冰水主機 (COP) 與全面採用 LED 智能調光照明系統。' :
               activeCategory === 'waste' ? '評估建築生命週期結構輕量化、高爐石與飛灰混凝土替代水泥（減少碳排）、以及營建工地土方挖填平衡與模矩化預鑄施工減廢。' :
               '注重室內自然採光通風、低甲醛 VOC 綠建材認證、省水標章衛生設備與雨水/中水回收澆灌系統。'}
            </p>
          </div>
        </div>
      ) : (
        // 4. Architectural Acoustics & Reverberation Time Visualizer
        <div className="grid gap-6 lg:grid-cols-2 items-center">
          <div className="relative aspect-video rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 flex items-center justify-center shadow-inner overflow-hidden">
            <svg viewBox="0 0 300 180" className="w-full h-full">
              <polygon points="30,150 270,150 270,40 180,30 30,60" fill="rgba(16, 185, 129, 0.05)" stroke="#64748B" strokeWidth="2" />
              <circle cx="50" cy="135" r="6" fill="#DC2626" />
              <text x="35" y="120" fontSize="9" className="fill-red-600 font-bold font-mono">聲源 S</text>

              <circle cx="230" cy="135" r="6" fill="#2563EB" />
              <text x="215" y="120" fontSize="9" className="fill-blue-600 font-bold font-mono">受音點 R</text>

              <line x1="50" y1="135" x2="230" y2="135" stroke="#DC2626" strokeWidth="2.5" />
              <polyline points="50,135 150,35 230,135" fill="none" stroke="#F59E0B" strokeWidth="2" strokeDasharray="4 2" />
              <polyline points="50,135 180,30 270,90 230,135" fill="none" stroke="#10B981" strokeWidth="1.5" strokeDasharray="3 3" />

              <text x="80" y="165" fontSize="10" className="fill-slate-600 font-mono font-bold">
                T60 = {rt60.toFixed(2)} 秒 (Sabine)
              </text>
            </svg>
          </div>

          <div className="space-y-4 text-xs">
            <div className="space-y-1">
              <div className="flex justify-between font-mono font-bold">
                <span>廳堂容積 V (m³):</span>
                <span className="text-slate-900 dark:text-white">{roomVolume} m³</span>
              </div>
              <input
                type="range"
                min="500"
                max="12000"
                step="250"
                value={roomVolume}
                onChange={(e) => setRoomVolume(Number(e.target.value))}
                className="w-full accent-slate-600 cursor-pointer"
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between font-mono font-bold">
                <span>平均吸音係數 (α, 0.05 ~ 0.80):</span>
                <span className="text-emerald-600 font-bold">{absorptionCoeff.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="0.05"
                max="0.80"
                step="0.05"
                value={absorptionCoeff}
                onChange={(e) => setAbsorptionCoeff(Number(e.target.value))}
                className="w-full accent-emerald-600 cursor-pointer"
              />
            </div>

            <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 space-y-1 font-mono">
              <div className="flex justify-between font-bold text-emerald-900 dark:text-emerald-100">
                <span>計算殘響時間 T60：</span>
                <span className="text-base text-emerald-700 dark:text-emerald-300">{rt60.toFixed(2)} 秒</span>
              </div>
              <div className="text-[11px] text-slate-600 dark:text-slate-300 font-sans pt-1 border-t border-emerald-200/60">
                {acousticEvaluation}
              </div>
            </div>

            <div className="text-[11px] text-slate-500 dark:text-slate-400">
              <MathText content="💡 **塞賓公式 (Sabine Formula)：** $T_{60} = \frac{0.161 \cdot V}{A}$，其中總吸音力 $A = \sum S_i \alpha_i$。容積越大殘響越長，吸音材料越多殘響越短。" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
