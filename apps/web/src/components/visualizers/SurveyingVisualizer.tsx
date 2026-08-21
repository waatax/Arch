'use client';

import React, { useState } from 'react';
import MathText from '@/components/MathText';

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

  // === 3. Circular Curve Setting State ===
  const [curveRadius, setCurveRadius] = useState<number>(200); // R (m)
  const [intersectAngle, setIntersectAngle] = useState<number>(40); // I (deg)

  // === 4. Contour Slope State ===
  const [contourDiffH, setContourDiffH] = useState<number>(10); // delta H (m)
  const [horizDistD, setHorizDistD] = useState<number>(50); // D (m)
  const [topoType, setTopoType] = useState<'ridge' | 'valley'>('ridge');

  // Calculations:
  // Leveling:
  const hi = bmElevation + backsight;
  const targetElev = hi - foresight;

  // Coordinates:
  const azRad = (azimuthAngle * Math.PI) / 180;
  const deltaX = horizDistance * Math.sin(azRad);
  const deltaY = horizDistance * Math.cos(azRad);
  const targetX = stationX + deltaX;
  const targetY = stationY + deltaY;

  // Circular Curve:
  const iRad = (intersectAngle * Math.PI) / 180;
  const tangentT = curveRadius * Math.tan(iRad / 2);
  const curveL = curveRadius * iRad;
  const externalE = curveRadius * (1 / Math.cos(iRad / 2) - 1);
  const middleM = curveRadius * (1 - Math.cos(iRad / 2));

  // Slope:
  const slopePercent = horizDistD > 0 ? (contourDiffH / horizDistD) * 100 : 0;
  const slopeAngleDeg = (Math.atan(contourDiffH / horizDistD) * 180) / Math.PI;

  return (
    <div className="rounded-xl border border-emerald-200/80 bg-emerald-50/20 dark:border-emerald-800/60 dark:bg-emerald-950/20 p-5 sm:p-6 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-emerald-200/60 dark:border-emerald-800/40 pb-3">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-lg bg-emerald-600 text-white text-xs font-mono font-bold">
            🔭
          </span>
          <div>
            <h3 className="font-serif text-base font-bold text-slate-900 dark:text-white">
              測量實習 · 儀器視準、等高線地形與道路曲線互動模擬實驗室
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              探索水準高程 (HI/FS)、全測站正反坐標、等高線山脊山谷判讀與道路圓曲線主點測設
            </p>
          </div>
        </div>
        <span className="rounded-full bg-emerald-600/10 px-2.5 py-0.5 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-300 border border-emerald-600/20">
          統測專業二（測量）
        </span>
      </div>

      {topicSlug.includes('curve') || topicSlug.includes('route') ? (
        // === 3. Circular Curve Setting ===
        <div className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-3 text-xs font-mono">
            <div className="space-y-1">
              <div className="flex justify-between font-bold">
                <span>曲線半徑 (R):</span>
                <span className="text-emerald-600">{curveRadius} m</span>
              </div>
              <input
                type="range"
                min="50"
                max="500"
                step="10"
                value={curveRadius}
                onChange={(e) => setCurveRadius(Number(e.target.value))}
                className="w-full accent-emerald-600 cursor-pointer"
              />
            </div>
            <div className="space-y-1">
              <div className="flex justify-between font-bold">
                <span>轉折交角 (I):</span>
                <span className="text-blue-600">{intersectAngle}°</span>
              </div>
              <input
                type="range"
                min="10"
                max="90"
                step="2"
                value={intersectAngle}
                onChange={(e) => setIntersectAngle(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 items-center rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 shadow-inner">
            <div className="relative aspect-video rounded-lg bg-slate-50 dark:bg-slate-950 p-2 flex items-center justify-center">
              <svg viewBox="0 0 300 180" className="w-full h-full">
                <line x1="50" y1="140" x2="150" y2="30" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="150" y1="30" x2="250" y2="140" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="3 3" />
                <path d="M 50 140 Q 150 75 250 140" fill="none" stroke="#059669" strokeWidth="3" />

                <circle cx="50" cy="140" r="4" fill="#059669" />
                <text x="30" y="155" fontSize="9" className="font-bold fill-slate-700 font-mono">BC (起點)</text>

                <circle cx="150" cy="30" r="4" fill="#DC2626" />
                <text x="140" y="22" fontSize="9" className="font-bold fill-red-600 font-mono">IP (交點) I={intersectAngle}°</text>

                <circle cx="250" cy="140" r="4" fill="#059669" />
                <text x="240" y="155" fontSize="9" className="font-bold fill-slate-700 font-mono">EC (終點)</text>

                <circle cx="150" cy="107" r="3" fill="#2563EB" />
                <text x="155" y="105" fontSize="8" className="fill-blue-600 font-mono font-bold">MC (中點)</text>
              </svg>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
                  <div className="text-[10px] text-emerald-700 dark:text-emerald-300">切線長 T = R·tan(I/2)</div>
                  <div className="text-base font-bold text-emerald-900 dark:text-emerald-100">{tangentT.toFixed(2)} m</div>
                </div>
                <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
                  <div className="text-[10px] text-blue-700 dark:text-blue-300">曲線長 L = R·I(rad)</div>
                  <div className="text-base font-bold text-blue-900 dark:text-blue-100">{curveL.toFixed(2)} m</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="p-2.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800">
                  <div className="text-[10px] text-indigo-700 dark:text-indigo-300">外距 E = R(sec(I/2)-1)</div>
                  <div className="text-sm font-bold text-indigo-900 dark:text-indigo-100">{externalE.toFixed(2)} m</div>
                </div>
                <div className="p-2.5 rounded-lg bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800">
                  <div className="text-[10px] text-teal-700 dark:text-teal-300">中矢高 M = R(1-cos(I/2))</div>
                  <div className="text-sm font-bold text-teal-900 dark:text-teal-100">{middleM.toFixed(2)} m</div>
                </div>
              </div>

              <div className="text-[11px] text-slate-500 font-sans">
                <MathText content="💡 **測設公式：** 切線長 $T = R \tan(I/2)$、曲線長 $L = R \cdot I_{\text{rad}}$。測設時由交點 IP 沿切線量距 $T$ 即可定出曲線起點 BC 與終點 EC。" />
              </div>
            </div>
          </div>
        </div>
      ) : topicSlug.includes('contour') || topicSlug.includes('topography') || topicSlug.includes('area') ? (
        // === 4. Contour & Slope Grading Visualizer ===
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
            <div className="flex gap-1 bg-white dark:bg-slate-900 p-1 rounded-lg border border-slate-200 dark:border-slate-800">
              <button
                onClick={() => setTopoType('ridge')}
                className={`px-3 py-1 rounded font-bold transition-colors ${topoType === 'ridge' ? 'bg-emerald-600 text-white' : 'text-slate-600 dark:text-slate-400'}`}
              >
                山脊線判別 (Ridge)
              </button>
              <button
                onClick={() => setTopoType('valley')}
                className={`px-3 py-1 rounded font-bold transition-colors ${topoType === 'valley' ? 'bg-emerald-600 text-white' : 'text-slate-600 dark:text-slate-400'}`}
              >
                山谷線判別 (Valley)
              </button>
            </div>

            <div className="flex items-center gap-2">
              <span>坡度百分比:</span>
              <span className="font-bold text-emerald-600">{slopePercent.toFixed(1)}% ({slopeAngleDeg.toFixed(1)}°)</span>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 items-center rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 shadow-inner">
            <div className="relative aspect-video rounded-lg bg-slate-50 dark:bg-slate-950 p-2 flex items-center justify-center">
              <svg viewBox="0 0 300 180" className="w-full h-full">
                {topoType === 'ridge' ? (
                  <g>
                    <path d="M 50 150 Q 150 100 250 150" fill="none" stroke="#64748B" strokeWidth="2" />
                    <text x="35" y="155" fontSize="8" className="fill-slate-500 font-mono">100m</text>
                    <path d="M 70 120 Q 150 70 230 120" fill="none" stroke="#64748B" strokeWidth="2" />
                    <text x="55" y="125" fontSize="8" className="fill-slate-500 font-mono">110m</text>
                    <path d="M 90 90 Q 150 40 210 90" fill="none" stroke="#059669" strokeWidth="2.5" />
                    <text x="75" y="95" fontSize="8" className="fill-emerald-700 font-mono font-bold">120m (山頂高處)</text>

                    <line x1="150" y1="40" x2="150" y2="160" stroke="#DC2626" strokeWidth="2" strokeDasharray="4 2" />
                    <text x="155" y="60" fontSize="9" className="fill-red-600 font-mono font-bold">分水嶺山脊線</text>
                  </g>
                ) : (
                  <g>
                    <path d="M 50 40 Q 150 90 250 40" fill="none" stroke="#64748B" strokeWidth="2" />
                    <text x="35" y="45" fontSize="8" className="fill-slate-500 font-mono">120m (兩側高山)</text>
                    <path d="M 70 70 Q 150 120 230 70" fill="none" stroke="#64748B" strokeWidth="2" />
                    <text x="55" y="75" fontSize="8" className="fill-slate-500 font-mono">110m</text>
                    <path d="M 90 100 Q 150 150 210 100" fill="none" stroke="#0284C7" strokeWidth="2.5" />
                    <text x="75" y="105" fontSize="8" className="fill-sky-700 font-mono font-bold">100m (溪流低處)</text>

                    <line x1="150" y1="20" x2="150" y2="160" stroke="#0284C7" strokeWidth="2.5" />
                    <text x="155" y="145" fontSize="9" className="fill-blue-600 font-mono font-bold">合水線溪谷</text>
                  </g>
                )}
              </svg>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="space-y-1">
                <div className="flex justify-between font-bold">
                  <span>兩點高差 ΔH:</span>
                  <span className="text-slate-900 dark:text-white">{contourDiffH} m</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="50"
                  value={contourDiffH}
                  onChange={(e) => setContourDiffH(Number(e.target.value))}
                  className="w-full accent-slate-600 cursor-pointer"
                />
              </div>

              <div className="space-y-1">
                <div className="flex justify-between font-bold">
                  <span>水平平距 D:</span>
                  <span className="text-emerald-600">{horizDistD} m</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="200"
                  value={horizDistD}
                  onChange={(e) => setHorizDistD(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
              </div>

              <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 space-y-1">
                <div className="font-bold text-emerald-900 dark:text-emerald-100">
                  {topoType === 'ridge' ? '🏔️ 山脊線 (分水嶺)：' : '💧 山谷線 (集水線)：'}
                </div>
                <p className="text-slate-600 dark:text-slate-300 font-sans text-[11px]">
                  {topoType === 'ridge' ? '等高線 V 字型或舌狀尖端<strong>指向低處</strong>者為山脊（雨水向兩側分流）。' :
                   '等高線 V 字型尖端<strong>指向高處</strong>者為山谷（雨水向中央匯集形成溪流）。'}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : topicSlug.includes('elevation') || topicSlug.includes('leveling') || topicSlug.includes('distance') || topicSlug === 'surveying-fundamentals' ? (
        // === 1. Leveling Simulation ===
        <div className="grid gap-6 lg:grid-cols-2 items-center">
          <div className="relative aspect-video rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-3 flex items-center justify-center shadow-inner overflow-hidden">
            <svg viewBox="0 0 400 200" className="w-full h-full">
              <path
                d="M 20 160 Q 120 150 200 140 T 380 120"
                fill="none"
                stroke="#64748B"
                strokeWidth="2"
              />
              <text x="30" y="180" fontSize="9" className="fill-slate-500 font-mono">基準點 BM (高程 {bmElevation.toFixed(2)}m)</text>
              <text x="310" y="145" fontSize="9" className="fill-slate-500 font-mono">未知點 P (高程 {targetElev.toFixed(3)}m)</text>

              <rect x="50" y="50" width="8" height="110" fill="#CBD5E1" stroke="#475569" strokeWidth="1" />
              <line x1="50" y1="80" x2="58" y2="80" stroke="#DC2626" strokeWidth="1.5" />
              <text x="25" y="83" fontSize="9" className="fill-red-600 font-bold font-mono">BS={backsight.toFixed(3)}m</text>

              <g transform="translate(195, 80)">
                <path d="M 0 0 L -15 35 L 15 35 Z" fill="none" stroke="#0D9488" strokeWidth="1.5" />
                <rect x="-12" y="-6" width="24" height="10" fill="#0D9488" rx="2" />
                <circle cx="0" cy="-1" r="3" fill="#FFF" />
              </g>

              <line x1="50" y1="80" x2="350" y2="80" stroke="#0D9488" strokeWidth="1.5" strokeDasharray="3 3" />
              <text x="160" y="72" fontSize="9" className="fill-teal-700 dark:fill-teal-300 font-bold font-mono">
                視線高 HI = {hi.toFixed(3)} m
              </text>

              <rect x="345" y="20" width="8" height="110" fill="#CBD5E1" stroke="#475569" strokeWidth="1" />
              <line x1="345" y1="80" x2="353" y2="80" stroke="#2563EB" strokeWidth="1.5" />
              <text x="357" y="83" fontSize="9" className="fill-blue-600 font-bold font-mono">FS={foresight.toFixed(3)}m</text>
            </svg>
          </div>

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
          </div>
        </div>
      ) : (
        // === 2. Coordinates & Azimuth Simulator ===
        <div className="grid gap-6 lg:grid-cols-2 items-center">
          <div className="relative aspect-square max-h-[280px] w-full rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 flex items-center justify-center shadow-inner overflow-hidden">
            <svg viewBox="-140 -140 280 280" className="w-full h-full">
              <circle cx="0" cy="0" r="110" fill="none" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="-125" y1="0" x2="125" y2="0" stroke="#94A3B8" strokeWidth="1" />
              <line x1="0" y1="-125" x2="0" y2="125" stroke="#94A3B8" strokeWidth="1" />
              <text x="110" y="-5" fontSize="10" className="fill-slate-500 font-mono font-bold">E (+X)</text>
              <text x="5" y="-115" fontSize="10" className="fill-slate-500 font-mono font-bold">N (+Y)</text>

              <circle cx="0" cy="0" r="4" fill="#0D9488" />
              <text x="-25" y="16" fontSize="9" className="fill-slate-600 font-mono">測站 A</text>

              {(() => {
                const px = (deltaX / 120) * 100;
                const py = -(deltaY / 120) * 100;
                return (
                  <g>
                    <line x1="0" y1="0" x2={px} y2={py} stroke="#059669" strokeWidth="3" />
                    <circle cx={px} cy={py} r="4" fill="#059669" />
                    <text x={px + 6} y={py + 4} fontSize="10" className="fill-emerald-700 dark:fill-emerald-300 font-mono font-bold">
                      目標 B ({targetX.toFixed(1)}, {targetY.toFixed(1)})
                    </text>
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
                <span>方位角 (Azimuth, α):</span>
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
          </div>
        </div>
      )}
    </div>
  );
}
