'use client';

import React, { useState, useMemo } from 'react';
import { Layers, Play, RotateCcw, Sparkles, Activity } from 'lucide-react';
import { soundEngine } from '@/lib/audio/soundEffects';
import { useGamificationStore } from '@/lib/store/gamificationStore';

export default function ConcreteSlumpLab() {
  const [waterKg, setWaterKg] = useState<number>(180); // kg/m³
  const [cementKg, setCementKg] = useState<number>(360); // kg/m³
  const [aggregateQuality, setAggregateQuality] = useState<'well_graded' | 'poor_graded'>('well_graded');
  const [isConeLifted, setIsConeLifted] = useState<boolean>(false);
  const [isCompressTesting, setIsCompressTesting] = useState<boolean>(false);
  const [testProgress, setTestProgress] = useState<number>(0); // 0 to 100%
  const [testCompleted, setTestCompleted] = useState<boolean>(false);

  const { recordPuzzleSolved, recordSandboxExperiment } = useGamificationStore();

  // Water-Cement ratio & mechanical properties
  const { wcRatio, slumpCm, slumpType, fc28Mpa } = useMemo(() => {
    const wc = waterKg / Math.max(1, cementKg);
    // Abrams formula: fc = A / B^(w/c)
    const fc = Math.max(12, Math.min(65, 98 / Math.pow(8.5, wc)));

    // Slump calculation based on water content & grading
    let slump = (waterKg - 130) * 0.28;
    if (aggregateQuality === 'poor_graded') slump += 4;
    slump = Math.max(2, Math.min(28, slump));

    let type: 'true_slump' | 'shear_slump' | 'collapse_slump' = 'true_slump';
    if (slump >= 22 || wc > 0.68) {
      type = 'collapse_slump';
    } else if (aggregateQuality === 'poor_graded' && slump > 12) {
      type = 'shear_slump';
    }

    return {
      wcRatio: Number(wc.toFixed(2)),
      slumpCm: Number(slump.toFixed(1)),
      slumpType: type,
      fc28Mpa: Number(fc.toFixed(1)),
    };
  }, [waterKg, cementKg, aggregateQuality]);

  const handleLiftCone = () => {
    soundEngine.playBubbleLevel();
    setIsConeLifted(true);
    recordSandboxExperiment();
  };

  const handleRunCompressionTest = () => {
    if (isCompressTesting) return;
    setIsCompressTesting(true);
    setTestCompleted(false);
    setTestProgress(0);

    let prog = 0;
    const interval = setInterval(() => {
      prog += 10;
      setTestProgress(prog);
      if (prog >= 100) {
        clearInterval(interval);
        setIsCompressTesting(false);
        setTestCompleted(true);
        soundEngine.playConcreteCrack();
        recordPuzzleSolved('concrete_compression_test');
      }
    }, 120);
  };

  const handleReset = () => {
    setIsConeLifted(false);
    setIsCompressTesting(false);
    setTestProgress(0);
    setTestCompleted(false);
  };

  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-amber-100 dark:bg-amber-900/60 px-3 py-1 text-xs font-mono font-bold text-amber-700 dark:text-amber-300">
              MATERIALS LAB 04
            </span>
            <span className="text-xs font-bold text-slate-500">
              建築材料與試驗 · CNS 1176 坍度與 28 天抗壓試驗
            </span>
          </div>
          <h3 className="mt-1 font-serif text-2xl font-bold text-slate-900 dark:text-white">
            混凝土配比坍度與破壞試驗機 (Concrete Slump & Compression Lab)
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-2xl bg-amber-50 dark:bg-amber-950/40 px-4 py-2 border border-amber-200 dark:border-amber-900/40">
            <Layers className="size-4 text-amber-600 dark:text-amber-400" />
            <span className="font-mono text-xs font-bold text-slate-700 dark:text-slate-300">
              水灰比 W/C = <strong className="text-amber-600 dark:text-amber-400 text-sm">{wcRatio}</strong>
            </span>
          </div>
          <button
            onClick={handleReset}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300 cursor-pointer"
            title="重設試驗"
          >
            <RotateCcw className="size-4" />
          </button>
        </div>
      </div>

      {/* Control Sliders */}
      <div className="grid gap-4 sm:grid-cols-3 rounded-2xl bg-slate-50 dark:bg-slate-950/60 p-5 border border-slate-200/80 dark:border-slate-800 font-mono text-xs">
        <div className="space-y-2">
          <div className="flex justify-between font-bold text-slate-700 dark:text-slate-300">
            <span>單位用水量 W</span>
            <span className="text-blue-600 dark:text-blue-400">{waterKg} kg/m³</span>
          </div>
          <input
            type="range"
            min="140"
            max="230"
            step="5"
            value={waterKg}
            onChange={(e) => {
              setWaterKg(Number(e.target.value));
              setIsConeLifted(false);
              setTestCompleted(false);
            }}
            className="w-full accent-blue-600"
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between font-bold text-slate-700 dark:text-slate-300">
            <span>單位水泥量 C</span>
            <span className="text-amber-600 dark:text-amber-400">{cementKg} kg/m³</span>
          </div>
          <input
            type="range"
            min="260"
            max="500"
            step="10"
            value={cementKg}
            onChange={(e) => {
              setCementKg(Number(e.target.value));
              setIsConeLifted(false);
              setTestCompleted(false);
            }}
            className="w-full accent-amber-600"
          />
        </div>

        <div className="space-y-2">
          <span className="font-bold text-slate-700 dark:text-slate-300 block">骨材級配品質</span>
          <div className="flex gap-2">
            <button
              onClick={() => setAggregateQuality('well_graded')}
              className={`flex-1 py-2 rounded-lg font-bold transition-colors cursor-pointer ${
                aggregateQuality === 'well_graded'
                  ? 'bg-amber-600 text-white'
                  : 'bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300'
              }`}
            >
              良好級配
            </button>
            <button
              onClick={() => setAggregateQuality('poor_graded')}
              className={`flex-1 py-2 rounded-lg font-bold transition-colors cursor-pointer ${
                aggregateQuality === 'poor_graded'
                  ? 'bg-amber-600 text-white'
                  : 'bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300'
              }`}
            >
              不良級配 (易剪切)
            </button>
          </div>
        </div>
      </div>

      {/* Lab Simulation Visualizer Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Slump Test Animation (SVG) */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-950 p-5 space-y-3 select-none">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <Sparkles className="size-3.5 text-amber-400" />
              1. 坍度試驗 (CNS 1176 坍度筒 30 cm)
            </span>
            <button
              onClick={handleLiftCone}
              disabled={isConeLifted}
              className="px-3 py-1 rounded-lg bg-amber-600 hover:bg-amber-500 disabled:opacity-40 text-white font-bold cursor-pointer transition-colors"
            >
              {isConeLifted ? '✓ 已提昇坍度筒' : '提昇坍度筒 (垂直向上提)'}
            </button>
          </div>

          <svg viewBox="0 0 320 200" className="w-full h-52">
            {/* Base Plate */}
            <rect x="40" y="170" width="240" height="8" rx="2" fill="#475569" />

            {/* Slump Cone (Ghost outline before lift) */}
            <polygon
              points="140,50 180,50 200,170 120,170"
              fill="none"
              stroke="#94a3b8"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            <text x="160" y="42" fontSize="9" fill="#94a3b8" textAnchor="middle" fontFamily="monospace">
              坍度筒高 30 cm
            </text>

            {/* Deformed Concrete Specimen */}
            {isConeLifted ? (
              <g className="animate-fadeIn">
                {slumpType === 'true_slump' && (
                  // Symmetrical True Slump
                  <path
                    d={`M 130,${50 + slumpCm * 3.5} Q 160,${45 + slumpCm * 3.5} 190,${50 + slumpCm * 3.5} L 210,170 L 110,170 Z`}
                    fill="#78716c"
                    stroke="#a8a29e"
                    strokeWidth="2"
                  />
                )}
                {slumpType === 'shear_slump' && (
                  // Asymmetrical Shear Slump
                  <path
                    d={`M 130,${60 + slumpCm * 3} L 180,${80 + slumpCm * 4} L 220,170 L 110,170 Z`}
                    fill="#78716c"
                    stroke="#f59e0b"
                    strokeWidth="2"
                  />
                )}
                {slumpType === 'collapse_slump' && (
                  // Full Collapse Flat Puddle
                  <path
                    d="M 80,165 Q 160,140 240,165 L 240,170 L 80,170 Z"
                    fill="#78716c"
                    stroke="#ef4444"
                    strokeWidth="2"
                  />
                )}

                {/* Slump Measurement Ruler */}
                <line x1="225" y1="50" x2="225" y2={50 + slumpCm * 3.5} stroke="#38bdf8" strokeWidth="2" />
                <line x1="220" y1="50" x2="230" y2="50" stroke="#38bdf8" strokeWidth="2" />
                <line x1="220" y1={50 + slumpCm * 3.5} x2="230" y2={50 + slumpCm * 3.5} stroke="#38bdf8" strokeWidth="2" />
                <text
                  x="240"
                  y={50 + (slumpCm * 3.5) / 2 + 4}
                  fontSize="11"
                  fontWeight="bold"
                  fill="#38bdf8"
                  fontFamily="monospace"
                >
                  坍度 = {slumpCm} cm
                </text>
              </g>
            ) : (
              // Inside the cone (un-lifted)
              <polygon points="140,50 180,50 200,170 120,170" fill="#78716c" stroke="#d6d3d1" strokeWidth="2" />
            )}
          </svg>

          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400">
              坍度型態：
              <strong className={slumpType === 'true_slump' ? 'text-emerald-400' : 'text-rose-400'}>
                {slumpType === 'true_slump' ? '真坍度 (正常工作度)' : slumpType === 'shear_slump' ? '剪切坍度 (骨材分離)' : '崩塌坍度 (W/C 過高)'}
              </strong>
            </span>
          </div>
        </div>

        {/* Compression Test Machine (SVG) */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-950 p-5 space-y-3 select-none">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <Activity className="size-3.5 text-blue-400" />
              2. 圓柱試體 28 天抗壓試驗 (CNS 1232)
            </span>
            <button
              onClick={handleRunCompressionTest}
              disabled={isCompressTesting}
              className="flex items-center gap-1 px-3 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white font-bold cursor-pointer transition-colors"
            >
              <Play className="size-3 fill-current" />
              {isCompressTesting ? '試驗加壓中...' : '開始破壞試驗'}
            </button>
          </div>

          <svg viewBox="0 0 320 200" className="w-full h-52">
            {/* Compression Platen Machine Frame */}
            <rect x="70" y="20" width="180" height="15" fill="#475569" rx="2" />
            <rect x="70" y="165" width="180" height="15" fill="#475569" rx="2" />
            <line x1="85" y1="35" x2="85" y2="165" stroke="#334155" strokeWidth="8" />
            <line x1="235" y1="35" x2="235" y2="165" stroke="#334155" strokeWidth="8" />

            {/* Cylinder Specimen (15x30cm) */}
            {(() => {
              const pressOffset = (testProgress / 100) * 8;
              const curStress = ((testProgress / 100) * fc28Mpa).toFixed(1);
              return (
                <g>
                  {/* Hydraulic Ram Piston */}
                  <rect x="125" y={35} width="70" height={20 + pressOffset} fill="#64748b" />

                  {/* Concrete Cylinder */}
                  <rect
                    x="125"
                    y={55 + pressOffset}
                    width="70"
                    height={110 - pressOffset}
                    rx="4"
                    fill="#78716c"
                    stroke="#a8a29e"
                    strokeWidth="2"
                  />

                  {/* Cracks at failure */}
                  {testCompleted && (
                    <g className="animate-fadeIn">
                      <path d="M 135,65 L 150,110 L 140,150" stroke="#ef4444" strokeWidth="2.5" fill="none" />
                      <path d="M 185,70 L 170,120 L 180,155" stroke="#ef4444" strokeWidth="2.5" fill="none" />
                      <text x="160" y="115" fontSize="12" fontWeight="bold" fill="#ef4444" textAnchor="middle">
                        CRACK!
                      </text>
                    </g>
                  )}

                  {/* Stress readout */}
                  <text x="160" y="195" fontSize="11" fontWeight="bold" fill="#38bdf8" textAnchor="middle" fontFamily="monospace">
                    即時抗壓強度 σ = {testCompleted ? fc28Mpa : curStress} MPa (f&apos;c = {fc28Mpa} MPa)
                  </text>
                </g>
              );
            })()}
          </svg>

          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400">
              28 天規定抗壓強度 f&apos;c：<strong className="text-blue-400">{fc28Mpa} MPa</strong> ({Number((fc28Mpa * 10.197).toFixed(0))} kgf/cm²)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
