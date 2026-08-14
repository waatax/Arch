'use client';

import React, { useState } from 'react';

interface SurveyingVisualizerProps {
  topicSlug: string;
}

export default function SurveyingVisualizer({ topicSlug }: SurveyingVisualizerProps) {
  // === 1. Leveling Instrument Elevation Simulation State ===
  const [bmElevation, setBmElevation] = useState<number>(100.0); // Benchmark Elevation (m)
  const [backsight, setBacksight] = useState<number>(1.452); // BS (m)
  const [foresight, setForesight] = useState<number>(0.835); // FS (m)

  // === 2. Total Station Polar to Cartesian Coordinate State ===
  const [stationX, setStationX] = useState<number>(500.0);
  const [stationY, setStationY] = useState<number>(300.0);
  const [azimuthAngle, setAzimuthAngle] = useState<number>(45); // Azimuth (degrees)
  const [horizDistance, setHorizDistance] = useState<number>(85.0); // Distance (m)

  // Calculations:
  // Leveling:
  // Height of Instrument: HI = BM + BS
  const hi = bmElevation + backsight;
  // Elevation of Unknown Point P: Elev_P = HI - FS = BM + BS - FS
  const targetElev = hi - foresight;
  const deltaH = backsight - foresight;

  // Coordinates:
  // Azimuth in rad:
  const azRad = (azimuthAngle * Math.PI) / 180;
  // Delta X = S * sin(Azimuth), Delta Y = S * cos(Azimuth) (Geodetic / Surveying coordinate system: X is East, Y is North)
  const deltaX = horizDistance * Math.sin(azRad);
  const deltaY = horizDistance * Math.cos(azRad);
  const targetX = stationX + deltaX;
  const targetY = stationY + deltaY;

  return (
    <div className="rounded-xl border border-emerald-200/80 bg-emerald-50/20 dark:border-emerald-800/60 dark:bg-emerald-950/20 p-5 sm:p-6 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-emerald-200/60 dark:border-emerald-800/40 pb-3">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-lg bg-emerald-600 text-white text-xs font-mono font-bold">
            🔭
          </span>
          <div>
            <h3 className="font-serif text-base font-bold text-slate-900 dark:text-white">
              測量實習 · 儀器視準與高程坐標互動計算模擬器
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              調整水準尺讀數或經緯儀方位角，即時掌握視線高 (HI)、高程差 (∆h) 與正反坐標計算
            </p>
          </div>
        </div>
        <span className="rounded-full bg-emerald-600/10 px-2.5 py-0.5 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-300 border border-emerald-600/20">
          統測必考測量計算
        </span>
      </div>

      {topicSlug.includes('elevation') || topicSlug.includes('leveling') || topicSlug.includes('distance') || topicSlug === 'surveying-fundamentals' ? (
        // Leveling Simulation
        <div className="grid gap-6 lg:grid-cols-2 items-center">
          {/* Leveling Visual Schematic */}
          <div className="relative aspect-video rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 flex items-center justify-center shadow-inner overflow-hidden">
            <svg viewBox="0 0 400 200" className="w-full h-full">
              {/* Ground Profile */}
              <path
                d="M 20 160 Q 120 150 200 140 T 380 120"
                fill="none"
                stroke="#64748B"
                strokeWidth="2"
              />
              <text x="30" y="180" fontSize="9" className="fill-slate-500 font-mono">基準點 BM (高程 {bmElevation.toFixed(2)}m)</text>
              <text x="310" y="145" fontSize="9" className="fill-slate-500 font-mono">未知點 P (高程 {targetElev.toFixed(3)}m)</text>

              {/* Leveling Staff A at BM */}
              <rect x="50" y="50" width="8" height="110" fill="#CBD5E1" stroke="#475569" strokeWidth="1" />
              {/* Scale marks on Staff A */}
              <line x1="50" y1="80" x2="58" y2="80" stroke="#DC2626" strokeWidth="1.5" />
              <text x="25" y="83" fontSize="9" className="fill-red-600 font-bold font-mono">BS={backsight.toFixed(3)}m</text>

              {/* Instrument at Center */}
              <g transform="translate(195, 80)">
                <path d="M 0 0 L -15 35 L 15 35 Z" fill="none" stroke="#0D9488" strokeWidth="1.5" />
                <rect x="-12" y="-6" width="24" height="10" fill="#0D9488" rx="2" />
                <circle cx="0" cy="-1" r="3" fill="#FFF" />
              </g>

              {/* Collimation Line (Horizontal Sight Line) */}
              <line x1="50" y1="80" x2="350" y2="80" stroke="#0D9488" strokeWidth="1.5" strokeDasharray="3 3" />
              <text x="160" y="72" fontSize="9" className="fill-teal-700 dark:fill-teal-300 font-bold font-mono">
                視線高 HI = {hi.toFixed(3)} m
              </text>

              {/* Leveling Staff B at Point P */}
              <rect x="345" y="20" width="8" height="110" fill="#CBD5E1" stroke="#475569" strokeWidth="1" />
              {/* Scale mark on Staff B */}
              <line x1="345" y1="80" x2="353" y2="80" stroke="#2563EB" strokeWidth="1.5" />
              <text x="357" y="83" fontSize="9" className="fill-blue-600 font-bold font-mono">FS={foresight.toFixed(3)}m</text>
            </svg>
          </div>

          {/* Controls & Math Output */}
          <div className="space-y-4">
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-mono font-bold">
                <span>水準點 BM 高程 (m):</span>
                <span className="text-slate-900 dark:text-white">{bmElevation.toFixed(2)} m</span>
              </div>
              <input
                type="range"
                min="50"
                max="200"
                step="1"
                value={bmElevation}
                onChange={(e) => setBmElevation(Number(e.target.value))}
                className="w-full accent-slate-600 cursor-pointer"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono font-bold">
                  <span>後視讀數 (BS):</span>
                  <span className="text-red-600">{backsight.toFixed(3)} m</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="3.0"
                  step="0.001"
                  value={backsight}
                  onChange={(e) => setBacksight(Number(e.target.value))}
                  className="w-full accent-red-600 cursor-pointer"
                />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono font-bold">
                  <span>前視讀數 (FS):</span>
                  <span className="text-blue-600">{foresight.toFixed(3)} m</span>
                </div>
                <input
                  type="range"
                  min="0.2"
                  max="3.0"
                  step="0.001"
                  value={foresight}
                  onChange={(e) => setForesight(Number(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer"
                />
              </div>
            </div>

            {/* Calculations Card */}
            <div className="grid grid-cols-2 gap-2 pt-1 font-mono">
              <div className="rounded-lg bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800/60 p-3">
                <span className="text-[10px] text-teal-700 dark:text-teal-300 block">
                  儀器高法：視線高 HI = BM + BS
                </span>
                <span className="text-lg font-bold text-teal-900 dark:text-teal-100">
                  {hi.toFixed(3)} <span className="text-xs font-normal">m</span>
                </span>
              </div>

              <div className="rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 p-3">
                <span className="text-[10px] text-emerald-700 dark:text-emerald-300 block">
                  P 點高程 Elev_P = HI - FS
                </span>
                <span className="text-lg font-bold text-emerald-900 dark:text-emerald-100">
                  {targetElev.toFixed(3)} <span className="text-xs font-normal">m</span>
                </span>
              </div>
            </div>

            <div className="text-xs text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-800 space-y-1">
              <div>💡 <strong>高差法驗算：</strong> ∆h = BS - FS = {backsight.toFixed(3)} - {foresight.toFixed(3)} = {deltaH > 0 ? `+${deltaH.toFixed(3)}` : deltaH.toFixed(3)} m</div>
              <div>目標點 P 高程 = BM + ∆h = {bmElevation.toFixed(2)} + ({deltaH.toFixed(3)}) = <strong>{targetElev.toFixed(3)} m</strong>（完全吻合）</div>
            </div>
          </div>
        </div>
      ) : (
        // Coordinates & Azimuth Simulator
        <div className="grid gap-6 lg:grid-cols-2 items-center">
          <div className="relative aspect-square max-h-[280px] w-full rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 flex items-center justify-center shadow-inner overflow-hidden">
            <svg viewBox="-140 -140 280 280" className="w-full h-full">
              {/* Compass Grid */}
              <circle cx="0" cy="0" r="110" fill="none" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="-125" y1="0" x2="125" y2="0" stroke="#94A3B8" strokeWidth="1" />
              <line x1="0" y1="-125" x2="0" y2="125" stroke="#94A3B8" strokeWidth="1" />
              <text x="110" y="-5" fontSize="10" className="fill-slate-500 font-mono font-bold">E (+X)</text>
              <text x="5" y="-115" fontSize="10" className="fill-slate-500 font-mono font-bold">N (+Y)</text>

              {/* Station Origin */}
              <circle cx="0" cy="0" r="4" fill="#0D9488" />
              <text x="-25" y="16" fontSize="9" className="fill-slate-600 font-mono">測站 A</text>

              {/* Vector to Target Point */}
              {(() => {
                const px = (deltaX / 120) * 100;
                const py = -(deltaY / 120) * 100;
                return (
                  <g>
                    {/* Direction Line */}
                    <line x1="0" y1="0" x2={px} y2={py} stroke="#059669" strokeWidth="3" />
                    <circle cx={px} cy={py} r="4" fill="#059669" />
                    <text x={px + 6} y={py + 4} fontSize="10" className="fill-emerald-700 dark:fill-emerald-300 font-mono font-bold">
                      目標 B ({targetX.toFixed(1)}, {targetY.toFixed(1)})
                    </text>

                    {/* Right-angled Triangle Delta X and Delta Y */}
                    <line x1="0" y1="0" x2="0" y2={py} stroke="#2563EB" strokeWidth="1.5" strokeDasharray="3 2" />
                    <line x1="0" y1={py} x2={px} y2={py} stroke="#DC2626" strokeWidth="1.5" strokeDasharray="3 2" />
                  </g>
                );
              })()}
            </svg>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono font-bold">
                  <span>測站 XA 坐標:</span>
                  <span className="text-slate-900 dark:text-white">{stationX} m</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="1000"
                  step="10"
                  value={stationX}
                  onChange={(e) => setStationX(Number(e.target.value))}
                  className="w-full accent-slate-600 cursor-pointer"
                />
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-mono font-bold">
                  <span>測站 YA 坐標:</span>
                  <span className="text-slate-900 dark:text-white">{stationY} m</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="1000"
                  step="10"
                  value={stationY}
                  onChange={(e) => setStationY(Number(e.target.value))}
                  className="w-full accent-slate-600 cursor-pointer"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono font-bold">
                <span>方位角 (Azimuth, α，由正北順時針):</span>
                <span className="text-emerald-700 dark:text-emerald-300">{azimuthAngle}°</span>
              </div>
              <input
                type="range"
                min="0"
                max="360"
                value={azimuthAngle}
                onChange={(e) => setAzimuthAngle(Number(e.target.value))}
                className="w-full accent-emerald-600 cursor-pointer"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono font-bold">
                <span>水平距離 (S):</span>
                <span className="text-sky-700 dark:text-sky-300">{horizDistance} m</span>
              </div>
              <input
                type="range"
                min="10"
                max="150"
                value={horizDistance}
                onChange={(e) => setHorizDistance(Number(e.target.value))}
                className="w-full accent-sky-600 cursor-pointer"
              />
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1 font-mono">
              <div className="rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800/60 p-3">
                <span className="text-[10px] text-red-700 dark:text-red-300 block">
                  橫坐標差 ∆X = S · sin(α)
                </span>
                <span className="text-base font-bold text-red-900 dark:text-red-100">
                  {deltaX > 0 ? `+${deltaX.toFixed(2)}` : deltaX.toFixed(2)} m
                </span>
              </div>

              <div className="rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 p-3">
                <span className="text-[10px] text-blue-700 dark:text-blue-300 block">
                  縱坐標差 ∆Y = S · cos(α)
                </span>
                <span className="text-base font-bold text-blue-900 dark:text-blue-100">
                  {deltaY > 0 ? `+${deltaY.toFixed(2)}` : deltaY.toFixed(2)} m
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-800">
              💡 <strong>坐標正算公式：</strong> XB = XA + S·sin(α) = {targetX.toFixed(2)}，YB = YA + S·cos(α) = {targetY.toFixed(2)}。
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
