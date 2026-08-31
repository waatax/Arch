'use client';

import React, { useState, useMemo } from 'react';
import { Compass, CheckCircle2, RotateCcw, Crosshair, Zap } from 'lucide-react';
import { soundEngine } from '@/lib/audio/soundEffects';
import { useGamificationStore } from '@/lib/store/gamificationStore';

interface TraverseStation {
  id: string;
  name: string;
  fromName: string;
  toName: string;
  distanceM: number;
  azimuthDeg: number;
}

const standardLoop: TraverseStation[] = [
  { id: 'st_1', name: '測站 A', fromName: 'A', toName: 'B', distanceM: 65.42, azimuthDeg: 45.0 },
  { id: 'st_2', name: '測站 B', fromName: 'B', toName: 'C', distanceM: 82.15, azimuthDeg: 135.0 },
  { id: 'st_3', name: '測站 C', fromName: 'C', toName: 'D', distanceM: 65.42, azimuthDeg: 225.0 },
  { id: 'st_4', name: '測站 D', fromName: 'D', toName: 'A', distanceM: 82.15, azimuthDeg: 315.0 },
];

export default function TotalStationTraverseLab() {
  const [currentStationIdx, setCurrentStationIdx] = useState<number>(0);
  const [prismAligned, setPrismAligned] = useState<boolean>(false);
  const [isMeasuringEDM, setIsMeasuringEDM] = useState<boolean>(false);
  const [measuredStations, setMeasuredStations] = useState<Record<number, boolean>>({});

  const { recordPuzzleSolved, recordSandboxExperiment, soundEnabled } = useGamificationStore();
  const currentStation = standardLoop[currentStationIdx];

  // Compute Coordinates, Latitudes, Departures & Area
  const traverseResults = useMemo(() => {
    let totalLength = 0;
    let sumLat = 0;
    let sumDep = 0;

    const coordinates: Array<{ name: string; n: number; e: number }> = [{ name: 'A', n: 1000.0, e: 1000.0 }];

    standardLoop.forEach((st, idx) => {
      totalLength += st.distanceM;
      const rad = (st.azimuthDeg * Math.PI) / 180;
      const lat = st.distanceM * Math.cos(rad); // ΔN
      const dep = st.distanceM * Math.sin(rad); // ΔE
      sumLat += lat;
      sumDep += dep;

      if (idx < standardLoop.length - 1) {
        const prev = coordinates[idx];
        coordinates.push({
          name: st.toName,
          n: Number((prev.n + lat).toFixed(2)),
          e: Number((prev.e + dep).toFixed(2)),
        });
      }
    });

    const closureK = Math.sqrt(sumLat * sumLat + sumDep * sumDep);
    const closureRatio = closureK > 0 ? Math.round(totalLength / closureK) : 99999;

    // Shoelace formula for polygon area
    let areaDouble = 0;
    for (let i = 0; i < coordinates.length; i++) {
      const next = (i + 1) % coordinates.length;
      areaDouble += coordinates[i].e * coordinates[next].n - coordinates[next].e * coordinates[i].n;
    }
    const polygonAreaM2 = Math.abs(areaDouble / 2);

    return {
      totalLength: Number(totalLength.toFixed(2)),
      sumLat: Number(sumLat.toFixed(3)),
      sumDep: Number(sumDep.toFixed(3)),
      closureK: Number(closureK.toFixed(3)),
      closureRatio,
      polygonAreaM2: Number(polygonAreaM2.toFixed(1)),
      coordinates,
    };
  }, []);

  const handleAlignPrism = () => {
    if (soundEnabled) soundEngine.playBubbleLevel();
    setPrismAligned(true);
    recordSandboxExperiment();
  };

  const handleFireEDM = () => {
    if (isMeasuringEDM) return;
    setIsMeasuringEDM(true);
    if (soundEnabled) soundEngine.playLaserBeep();

    setTimeout(() => {
      setIsMeasuringEDM(false);
      setMeasuredStations((prev) => ({ ...prev, [currentStationIdx]: true }));

      if (Object.keys(measuredStations).length + 1 >= standardLoop.length) {
        if (soundEnabled) soundEngine.playCorrectChime();
        recordPuzzleSolved('total_station_traverse');
      }
    }, 600);
  };

  const handleNextStation = () => {
    setCurrentStationIdx((prev) => (prev + 1) % standardLoop.length);
    setPrismAligned(false);
  };

  const handleReset = () => {
    setCurrentStationIdx(0);
    setPrismAligned(false);
    setIsMeasuringEDM(false);
    setMeasuredStations({});
  };

  const isAllMeasured = Object.keys(measuredStations).length === standardLoop.length;

  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-emerald-100 dark:bg-emerald-900/60 px-3 py-1 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-300">
              SURVEYING TOTAL STATION 08
            </span>
            <span className="text-xs font-bold text-slate-500">
              測量實習核心 · 全測站儀 EDM 測距與閉合導線平差
            </span>
          </div>
          <h3 className="mt-1 font-serif text-2xl font-bold text-slate-900 dark:text-white">
            全測站經緯儀電子導線放樣實驗室 (Total Station Traverse Lab)
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 px-4 py-2 border border-emerald-200 dark:border-emerald-900/40">
            <Compass className="size-4 text-emerald-600 dark:text-emerald-400" />
            <span className="font-mono text-xs font-bold text-slate-700 dark:text-slate-300">
              閉合比數 1/M = <strong className="text-emerald-600 dark:text-emerald-400 text-sm">1/{traverseResults.closureRatio}</strong> (CNS ≤ 1/5000)
            </span>
          </div>
          <button
            onClick={handleReset}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300 cursor-pointer"
            title="重設導線"
          >
            <RotateCcw className="size-4" />
          </button>
        </div>
      </div>

      {/* Station Selector Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-mono">
        {standardLoop.map((st, idx) => (
          <button
            key={st.id}
            onClick={() => {
              setCurrentStationIdx(idx);
              setPrismAligned(false);
            }}
            className={`px-3.5 py-2 rounded-xl font-bold transition-all shrink-0 cursor-pointer ${
              currentStationIdx === idx
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-900/20'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {measuredStations[idx] ? '✓ ' : ''}{st.name} → 稜鏡 {st.toName}
          </button>
        ))}
      </div>

      {/* Main Dual Panels: Telescope Eyepiece & Traverse Map */}
      <div className="grid gap-6 lg:grid-cols-12 items-center">
        {/* Telescope Viewfinder Eyepiece (SVG) */}
        <div className="lg:col-span-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-950 p-6 space-y-4 select-none relative overflow-hidden">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <Crosshair className="size-3.5 text-emerald-400" />
              望遠鏡物鏡瞄準反射稜鏡 ({currentStation.fromName} → {currentStation.toName})
            </span>
            <button
              onClick={handleAlignPrism}
              className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-emerald-400 font-bold transition cursor-pointer"
            >
              {prismAligned ? '🎯 稜鏡已十字對中' : '微調十字絲對準'}
            </button>
          </div>

          <svg viewBox="0 0 300 200" className="w-full h-56">
            {/* Viewfinder Circle */}
            <circle cx="150" cy="100" r="85" fill="#0f172a" stroke="#475569" strokeWidth="4" />

            {/* Target Prism in field of view */}
            <g transform={`translate(${prismAligned ? 150 : 175}, ${prismAligned ? 100 : 85})`}>
              {/* Prism Target Triangles */}
              <polygon points="0,-25 22,15 -22,15" fill="#f59e0b" stroke="#d97706" strokeWidth="2" />
              <circle cx="0" cy="0" r="10" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5" />
            </g>

            {/* Crosshairs & Stadia lines */}
            <line x1="65" y1="100" x2="235" y2="100" stroke="#38bdf8" strokeWidth="1.5" />
            <line x1="150" y1="15" x2="150" y2="185" stroke="#38bdf8" strokeWidth="1.5" />
            <line x1="120" y1="70" x2="180" y2="70" stroke="#38bdf8" strokeWidth="1" />
            <line x1="120" y1="130" x2="180" y2="130" stroke="#38bdf8" strokeWidth="1" />

            {/* Laser Beam during EDM */}
            {isMeasuringEDM && (
              <line x1="150" y1="100" x2="150" y2="100" stroke="#ef4444" strokeWidth="4" className="animate-ping" />
            )}
          </svg>

          <div className="flex items-center justify-between font-mono text-xs pt-1">
            <span className="text-slate-400">
              方位角 Azimuth = <strong className="text-emerald-400">{currentStation.azimuthDeg}°</strong>
            </span>
            <button
              onClick={handleFireEDM}
              disabled={!prismAligned || isMeasuringEDM}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 text-white font-bold transition cursor-pointer"
            >
              <Zap className="size-3.5 fill-current" />
              {isMeasuringEDM ? 'EDM 雷射發射中...' : '發射 EDM 雷射測距'}
            </button>
          </div>
        </div>

        {/* Traverse Coordinates & Map Panel (SVG) */}
        <div className="lg:col-span-6 space-y-4 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 font-mono text-xs">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <span className="font-bold text-slate-900 dark:text-white text-sm">
              閉合導線多邊形座標與面積檢算
            </span>
            <button
              onClick={handleNextStation}
              className="text-emerald-600 dark:text-emerald-400 font-bold hover:underline cursor-pointer"
            >
              切換下一站測量 →
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 space-y-1">
              <span className="text-slate-500 block">導線總周長 ΣS</span>
              <strong className="text-slate-900 dark:text-white text-sm">{traverseResults.totalLength} m</strong>
            </div>
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 space-y-1">
              <span className="text-slate-500 block">土地閉合面積 Area</span>
              <strong className="text-emerald-600 dark:text-emerald-400 text-sm">{traverseResults.polygonAreaM2} m²</strong>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/50 space-y-1">
            <span className="font-bold text-emerald-800 dark:text-emerald-200 block">
              📐 導線平差數學公式：
            </span>
            <p className="text-slate-600 dark:text-slate-300 font-sans leading-relaxed text-[11px]">
              緯距 ΔN = S · cosθ ； 經距 ΔE = S · sinθ ； 閉合差 K = √((ΣΔN)² + (ΣΔE)²)。
            </p>
          </div>

          {isAllMeasured && (
            <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-700 dark:text-emerald-300 font-bold flex items-center gap-2 animate-fadeIn">
              <CheckCircle2 className="size-4" />
              <span>全測站四站導線閉合測量 100% 竣工！獲得 +50 EXP</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
