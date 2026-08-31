'use client';

import React, { useState, useMemo } from 'react';
import { Compass, CheckCircle2, RotateCcw, Sparkles, Eye } from 'lucide-react';
import { soundEngine } from '@/lib/audio/soundEffects';
import { useGamificationStore } from '@/lib/store/gamificationStore';

export default function LevelingBubbleMaster() {
  // 3-screw tilt parameters
  const [screwA, setScrewA] = useState<number>(20); // -50 to +50
  const [screwB, setScrewB] = useState<number>(-15);
  const [screwC, setScrewC] = useState<number>(10);

  // Elevation calculation inputs
  const [bmElevation] = useState<number>(100.0); // Known BM = 100.000 m
  const [targetBsReading] = useState<number>(1.482); // True BS reading
  const [targetFsReading] = useState<number>(0.835); // True FS reading

  const [userIH, setUserIH] = useState<string>('');
  const [userElevation, setUserElevation] = useState<string>('');
  const [mathChecked, setMathChecked] = useState<boolean>(false);
  const [mathSuccess, setMathSuccess] = useState<boolean>(false);

  const { recordPuzzleSolved, recordSandboxExperiment } = useGamificationStore();

  // Compute 2D bubble position from foot screws A, B, C
  // Equilibrium at screwA=0, screwB=0, screwC=0
  const { bubbleX, bubbleY, distance, isCentered } = useMemo(() => {
    // Kinematic model for 3-point kinematic leveling
    const bx = (screwB - screwA) * 0.8;
    const by = screwC - (screwA + screwB) / 2;
    const dist = Math.sqrt(bx * bx + by * by);
    const centered = dist <= 4.0;

    return {
      bubbleX: Math.max(-38, Math.min(38, bx)),
      bubbleY: Math.max(-38, Math.min(38, by)),
      distance: Number(dist.toFixed(1)),
      isCentered: centered,
    };
  }, [screwA, screwB, screwC]);

  const handleLevelSnap = () => {
    setScrewA(0);
    setScrewB(0);
    setScrewC(0);
    soundEngine.playBubbleLevel();
    recordSandboxExperiment();
  };

  const handleVerifyCalculations = () => {
    soundEngine.playClickBeep();
    const trueIH = bmElevation + targetBsReading; // 101.482
    const trueElevation = trueIH - targetFsReading; // 100.647

    const parsedIH = parseFloat(userIH);
    const parsedElev = parseFloat(userElevation);

    const isIHAccurate = Math.abs(parsedIH - trueIH) <= 0.005;
    const isElevAccurate = Math.abs(parsedElev - trueElevation) <= 0.005;

    setMathChecked(true);
    if (isIHAccurate && isElevAccurate) {
      setMathSuccess(true);
      soundEngine.playCorrectChime();
      recordPuzzleSolved('leveling_mastery');
    } else {
      setMathSuccess(false);
    }
  };

  const handleReset = () => {
    setScrewA(25);
    setScrewB(-20);
    setScrewC(15);
    setUserIH('');
    setUserElevation('');
    setMathChecked(false);
    setMathSuccess(false);
  };

  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-teal-100 dark:bg-teal-900/60 px-3 py-1 text-xs font-mono font-bold text-teal-700 dark:text-teal-300">
              SURVEYING SIMULATOR 02
            </span>
            <span className="text-xs font-bold text-slate-500">
              測量實習必考 · 氣泡平差與視線高法 (IH Method)
            </span>
          </div>
          <h3 className="mt-1 font-serif text-2xl font-bold text-slate-900 dark:text-white">
            水準儀氣泡調平與視線高實作 (Leveling Bubble Master)
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-2xl bg-teal-50 dark:bg-teal-950/40 px-4 py-2 border border-teal-200 dark:border-teal-900/40">
            <Compass className="size-4 text-teal-600 dark:text-teal-400" />
            <span className="font-mono text-xs font-bold text-slate-700 dark:text-slate-300">
              氣泡狀態：
              <strong className={isCentered ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'}>
                {isCentered ? '🎯 已完全居中 (零傾角)' : `偏斜 ${distance} mm`}
              </strong>
            </span>
          </div>
          <button
            onClick={handleReset}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300 cursor-pointer"
            title="重設儀器"
          >
            <RotateCcw className="size-4" />
          </button>
        </div>
      </div>

      {/* Part 1: Interactive Bubble Vial & 3 Foot Screws */}
      <div className="grid gap-6 lg:grid-cols-12 items-center">
        {/* Circular Bubble Vial (SVG) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-950 border border-slate-800 relative">
          <span className="text-[11px] font-mono font-bold text-slate-400 mb-3 flex items-center gap-1.5">
            <Sparkles className="size-3 text-teal-400" /> 圓形水準器 (Circular Level Vial)
          </span>

          <svg viewBox="0 0 160 160" className="w-44 h-44 select-none">
            {/* Outer Metal Bezel */}
            <circle cx="80" cy="80" r="74" fill="#334155" stroke="#475569" strokeWidth="4" />
            <circle cx="80" cy="80" r="68" fill="#1e293b" />

            {/* Spirit Liquid Background */}
            <circle cx="80" cy="80" r="64" fill="#0f766e" opacity="0.4" />

            {/* Concentric Tolerance Circles */}
            <circle cx="80" cy="80" r="40" fill="none" stroke="#0d9488" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="80" cy="80" r="20" fill="none" stroke="#0d9488" strokeWidth="1.5" />
            {/* True Center Target Mark */}
            <circle cx="80" cy="80" r="6" fill="none" stroke="#38bdf8" strokeWidth="2" />
            <line x1="80" y1="70" x2="80" y2="90" stroke="#38bdf8" strokeWidth="1" />
            <line x1="70" y1="80" x2="90" y2="80" stroke="#38bdf8" strokeWidth="1" />

            {/* Dynamic Moving Bubble */}
            <circle
              cx={80 + bubbleX}
              cy={80 + bubbleY}
              r="12"
              fill="rgba(255, 255, 255, 0.85)"
              stroke="#0284c7"
              strokeWidth="2"
              className="transition-all duration-150 ease-out"
            />
            {/* Highlight inside bubble */}
            <circle
              cx={80 + bubbleX - 3}
              cy={80 + bubbleY - 3}
              r="3.5"
              fill="#ffffff"
              className="transition-all duration-150 ease-out"
            />
          </svg>

          {isCentered && (
            <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 px-3 py-0.5 text-xs font-mono font-bold text-emerald-400 animate-pulse">
              <CheckCircle2 className="size-3.5" /> 視準軸已呈完全水平
            </div>
          )}
        </div>

        {/* 3 Foot Screws Controls */}
        <div className="lg:col-span-7 space-y-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 p-5 border border-slate-200/80 dark:border-slate-800">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
              腳螺旋微調控制 (3 Foot Leveling Screws)
            </span>
            <button
              onClick={handleLevelSnap}
              className="text-[11px] font-mono font-bold text-teal-600 dark:text-teal-400 hover:underline cursor-pointer"
            >
              ⚡ 快速自動整平
            </button>
          </div>

          <div className="space-y-3">
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-mono text-slate-600 dark:text-slate-400">
                <span>腳螺旋 A (左前)</span>
                <span className="font-bold text-teal-600 dark:text-teal-400">{screwA}</span>
              </div>
              <input
                type="range"
                min="-50"
                max="50"
                step="1"
                value={screwA}
                onChange={(e) => {
                  setScrewA(Number(e.target.value));
                  soundEngine.playBubbleLevel();
                }}
                className="w-full accent-teal-600"
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs font-mono text-slate-600 dark:text-slate-400">
                <span>腳螺旋 B (右前)</span>
                <span className="font-bold text-teal-600 dark:text-teal-400">{screwB}</span>
              </div>
              <input
                type="range"
                min="-50"
                max="50"
                step="1"
                value={screwB}
                onChange={(e) => {
                  setScrewB(Number(e.target.value));
                  soundEngine.playBubbleLevel();
                }}
                className="w-full accent-teal-600"
              />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs font-mono text-slate-600 dark:text-slate-400">
                <span>腳螺旋 C (後方單螺旋)</span>
                <span className="font-bold text-teal-600 dark:text-teal-400">{screwC}</span>
              </div>
              <input
                type="range"
                min="-50"
                max="50"
                step="1"
                value={screwC}
                onChange={(e) => {
                  setScrewC(Number(e.target.value));
                  soundEngine.playBubbleLevel();
                }}
                className="w-full accent-teal-600"
              />
            </div>
          </div>

          <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
            💡 <strong>整平口訣</strong>：雙手拇指「同時向內」或「同時向外」旋轉螺旋 A 與 B，使氣泡移至 A-B 線垂線上；再單獨旋轉螺旋 C 使氣泡完全居中。
          </p>
        </div>
      </div>

      {/* Part 2: Eyepiece Reticle & IH Method Elevation Calculation */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-5 space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
          <Eye className="size-4 text-teal-600 dark:text-teal-400" />
          <h4 className="font-bold text-sm text-slate-900 dark:text-white">
            第二步：望遠鏡十字絲讀數與視線高法 (IH) 高程檢算
          </h4>
        </div>

        <div className="grid gap-6 md:grid-cols-12 items-center">
          {/* Eyepiece Crosshair View */}
          <div className="md:col-span-5 flex flex-col items-center justify-center p-4 rounded-xl bg-slate-900 border border-slate-800">
            <span className="text-[10px] font-mono text-slate-400 mb-2">望遠鏡十字絲視角 (E 尺讀數)</span>
            <svg viewBox="0 0 200 160" className="w-full h-36 select-none">
              {/* Eyepiece Circular Field of View */}
              <circle cx="100" cy="80" r="72" fill="#0284c7" fillOpacity="0.1" stroke="#334155" strokeWidth="4" />

              {/* Leveling Rod (E 尺標尺) */}
              <rect x="85" y="10" width="30" height="140" fill="#fef08a" stroke="#ca8a04" strokeWidth="1" />
              {/* E markings */}
              {Array.from({ length: 7 }).map((_, i) => (
                <g key={i}>
                  <rect x="85" y={20 + i * 18} width="12" height="9" fill="#dc2626" />
                  <text x="105" y={32 + i * 18} fontSize="9" fontWeight="bold" fill="#000000">
                    {Number((1.6 - i * 0.1).toFixed(1))}
                  </text>
                </g>
              ))}

              {/* Crosshair (十字絲) */}
              <line x1="28" y1="80" x2="172" y2="80" stroke="#0f172a" strokeWidth="1.5" />
              <line x1="100" y1="8" x2="100" y2="152" stroke="#0f172a" strokeWidth="1.5" />
              {/* Stadia hairs (上下視距絲) */}
              <line x1="75" y1="55" x2="125" y2="55" stroke="#0f172a" strokeWidth="1" />
              <line x1="75" y1="105" x2="125" y2="105" stroke="#0f172a" strokeWidth="1" />
            </svg>
            <div className="mt-2 text-center font-mono text-[11px] text-slate-300">
              <span>基準點 A (後視 BS) = <strong>{targetBsReading} m</strong></span><br />
              <span>轉點 TP (前視 FS) = <strong>{targetFsReading} m</strong></span>
            </div>
          </div>

          {/* Math Form */}
          <div className="md:col-span-7 space-y-3 font-mono text-xs">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="text-slate-500 block">已知水準點高程 Elevation(BM) = <strong>100.000 m</strong></span>
              <span className="text-teal-600 dark:text-teal-400 block font-bold">
                公式：視線高 IH = BM + BS ； 轉點高程 Elev(TP) = IH - FS
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-slate-500 block mb-1">計算 視線高 IH (m)</label>
                <input
                  type="number"
                  step="0.001"
                  placeholder="例：101.482"
                  value={userIH}
                  onChange={(e) => setUserIH(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 p-2 font-bold text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="text-slate-500 block mb-1">計算 轉點高程 Elev(TP) (m)</label>
                <input
                  type="number"
                  step="0.001"
                  placeholder="例：100.647"
                  value={userElevation}
                  onChange={(e) => setUserElevation(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 p-2 font-bold text-slate-900 dark:text-white"
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={handleVerifyCalculations}
                disabled={!userIH || !userElevation}
                className="px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 disabled:opacity-50 text-white font-bold transition-colors cursor-pointer"
              >
                核對高程計算正解
              </button>

              {mathChecked && (
                <span className={`font-bold ${mathSuccess ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {mathSuccess ? '✓ 計算 100% 精準！獲得 +50 EXP' : '❌ 數值有誤，請再檢查加減法！'}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
