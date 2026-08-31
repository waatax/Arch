'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Activity, ShieldAlert, CheckCircle2, RotateCcw, Play } from 'lucide-react';
import { soundEngine } from '@/lib/audio/soundEffects';
import { useGamificationStore } from '@/lib/store/gamificationStore';

interface EarthquakeWave {
  id: string;
  name: string;
  pga: number; // in g
  frequencyHz: number;
  durationSec: number;
  description: string;
}

const earthquakeWaves: EarthquakeWave[] = [
  {
    id: 'chichi_921',
    name: '921 集集大地震 (1999 TCU129 測站)',
    pga: 0.40,
    frequencyHz: 1.2,
    durationSec: 4.0,
    description: '近斷層強震波，具備大幅度速度脈衝與強烈低頻地盤位移。',
  },
  {
    id: 'hualien_0403',
    name: '0403 花蓮大地震 (2024 崇德測站)',
    pga: 0.45,
    frequencyHz: 2.2,
    durationSec: 3.5,
    description: '東台灣板塊隱沒帶強烈高頻振動，考驗結構韌性抗剪能力。',
  },
  {
    id: 'el_centro_1940',
    name: 'El Centro 經典耐震波 (1940 國際標準)',
    pga: 0.35,
    frequencyHz: 1.8,
    durationSec: 3.0,
    description: '全球抗震工程最經典的規範基準地震加速度歷時紀錄。',
  },
];

export default function SeismicDefenseLab() {
  const [selectedWaveId, setSelectedWaveId] = useState<string>('chichi_921');
  const [hasShearWall, setHasShearWall] = useState<boolean>(false);
  const [hasBracing, setHasBracing] = useState<boolean>(false);
  const [hasTMD, setHasTMD] = useState<boolean>(false);
  const [hasBaseIsolator, setHasBaseIsolator] = useState<boolean>(false);

  const [isShaking, setIsShaking] = useState<boolean>(false);
  const [shakingFrame, setShakingFrame] = useState<number>(0);
  const [testResult, setTestResult] = useState<'none' | 'survived' | 'collapsed'>('none');

  const { recordPuzzleSolved, recordSandboxExperiment, soundEnabled } = useGamificationStore();

  const currentWave = earthquakeWaves.find((w) => w.id === selectedWaveId) || earthquakeWaves[0];

  // Structural Safety & Dynamic Drift Calculation
  const { maxDriftAnglePct, isSafe } = useMemo(() => {
    let stiffness = 100; // Base column stiffness
    let damping = 0.05; // 5% inherent damping

    if (hasShearWall) {
      stiffness += 180;
      damping += 0.04;
    }
    if (hasBracing) {
      stiffness += 120;
      damping += 0.03;
    }
    if (hasTMD) {
      damping += 0.15; // Tuned mass damper absorbs energy
    }
    if (hasBaseIsolator) {
      stiffness *= 0.45; // Decouples from ground motion
      damping += 0.20;
    }

    // Dynamic response amplitude
    const pgaFactor = currentWave.pga / 0.40;
    const rawDrift = (pgaFactor * 3.8) / (Math.sqrt(stiffness) * (1 + damping * 2.5));
    const driftPct = Number((rawDrift * 100).toFixed(2));
    const safe = driftPct <= 1.5; // CNS 建築耐震規範：層間變位角不得大於 1/200 (0.5%) ~ 1.5%

    const baseShear = Number((pgaFactor * 850 * (stiffness / 200)).toFixed(0));

    return {
      totalStiffness: Number(stiffness.toFixed(0)),
      totalDamping: Number((damping * 100).toFixed(1)),
      maxDriftAnglePct: driftPct,
      isSafe: safe,
      baseShearKn: baseShear,
    };
  }, [hasShearWall, hasBracing, hasTMD, hasBaseIsolator, currentWave]);

  // Shaking Table Animation Loop
  useEffect(() => {
    if (!isShaking) return;

    let frame = 0;
    const interval = setInterval(() => {
      frame += 1;
      setShakingFrame(frame);
      if (frame >= 40) {
        clearInterval(interval);
        setIsShaking(false);
        setTestResult(isSafe ? 'survived' : 'collapsed');

        if (isSafe) {
          if (soundEnabled) soundEngine.playCorrectChime();
          recordPuzzleSolved(`seismic_${currentWave.id}`);
        } else {
          if (soundEnabled) soundEngine.playConcreteCrack();
        }
      }
    }, 80);

    return () => clearInterval(interval);
  }, [isShaking, isSafe, currentWave, soundEnabled, recordPuzzleSolved]);

  const handleStartShaking = () => {
    if (isShaking) return;
    setTestResult('none');
    setIsShaking(true);
    setShakingFrame(0);
    if (soundEnabled) soundEngine.playShakingRumble(currentWave.durationSec);
    recordSandboxExperiment();
  };

  const handleReset = () => {
    setHasShearWall(false);
    setHasBracing(false);
    setHasTMD(false);
    setHasBaseIsolator(false);
    setIsShaking(false);
    setShakingFrame(0);
    setTestResult('none');
  };

  // Dynamic sway offset during shaking
  const swayOffset = isShaking
    ? Math.sin(shakingFrame * currentWave.frequencyHz) * maxDriftAnglePct * 12
    : 0;

  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-rose-100 dark:bg-rose-900/60 px-3 py-1 text-xs font-mono font-bold text-rose-700 dark:text-rose-300">
              STRUCTURAL DYNAMICS 07
            </span>
            <span className="text-xs font-bold text-slate-500">
              建築耐震設計規範 · 地震力與層間變位角 (Drift Angle)
            </span>
          </div>
          <h3 className="mt-1 font-serif text-2xl font-bold text-slate-900 dark:text-white">
            地震振動台耐震防衛實驗室 (Seismic Shaking Table Lab)
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-2xl bg-rose-50 dark:bg-rose-950/40 px-4 py-2 border border-rose-200 dark:border-rose-900/40">
            <Activity className="size-4 text-rose-600 dark:text-rose-400" />
            <span className="font-mono text-xs font-bold text-slate-700 dark:text-slate-300">
              層間變位角：
              <strong className={isSafe ? 'text-emerald-600 dark:text-emerald-400 text-sm' : 'text-rose-600 dark:text-rose-400 text-sm'}>
                {maxDriftAnglePct}% {isSafe ? '(安全 ≤1.5%)' : '(超標危險)'}
              </strong>
            </span>
          </div>
          <button
            onClick={handleReset}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300 cursor-pointer"
            title="重設抗震配置"
          >
            <RotateCcw className="size-4" />
          </button>
        </div>
      </div>

      {/* Earthquake Wave Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-mono">
        {earthquakeWaves.map((wave) => (
          <button
            key={wave.id}
            onClick={() => {
              setSelectedWaveId(wave.id);
              setTestResult('none');
            }}
            className={`px-3.5 py-2 rounded-xl font-bold transition-all shrink-0 cursor-pointer ${
              selectedWaveId === wave.id
                ? 'bg-rose-600 text-white shadow-md shadow-rose-900/20'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {wave.name} (PGA={wave.pga}g)
          </button>
        ))}
      </div>

      {/* Structural Defense Armory (抗震構件防衛裝備庫) */}
      <div className="grid gap-3 sm:grid-cols-4 font-mono text-xs">
        <button
          onClick={() => setHasShearWall(!hasShearWall)}
          className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
            hasShearWall
              ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/50 text-blue-900 dark:text-blue-100 shadow-sm'
              : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300'
          }`}
        >
          <div>
            <span className="font-bold block">🧱 RC 鋼筋剪力牆</span>
            <span className="text-[10px] text-slate-500 block mt-0.5">大幅提升側向剛度 +180</span>
          </div>
          {hasShearWall ? <CheckCircle2 className="size-4 text-blue-600" /> : <span className="text-slate-400">+加裝</span>}
        </button>

        <button
          onClick={() => setHasBracing(!hasBracing)}
          className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
            hasBracing
              ? 'border-teal-500 bg-teal-50 dark:bg-teal-950/50 text-teal-900 dark:text-teal-100 shadow-sm'
              : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300'
          }`}
        >
          <div>
            <span className="font-bold block">⚔️ 鋼骨 X 型斜撐</span>
            <span className="text-[10px] text-slate-500 block mt-0.5">抗剪防側移 +120</span>
          </div>
          {hasBracing ? <CheckCircle2 className="size-4 text-teal-600" /> : <span className="text-slate-400">+加裝</span>}
        </button>

        <button
          onClick={() => setHasTMD(!hasTMD)}
          className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
            hasTMD
              ? 'border-amber-500 bg-amber-50 dark:bg-amber-950/50 text-amber-900 dark:text-amber-100 shadow-sm'
              : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300'
          }`}
        >
          <div>
            <span className="font-bold block">🟡 頂層 TMD 阻尼球</span>
            <span className="text-[10px] text-slate-500 block mt-0.5">吸收共振動能 阻尼+15%</span>
          </div>
          {hasTMD ? <CheckCircle2 className="size-4 text-amber-600" /> : <span className="text-slate-400">+加裝</span>}
        </button>

        <button
          onClick={() => setHasBaseIsolator(!hasBaseIsolator)}
          className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
            hasBaseIsolator
              ? 'border-purple-500 bg-purple-50 dark:bg-purple-950/50 text-purple-900 dark:text-purple-100 shadow-sm'
              : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300'
          }`}
        >
          <div>
            <span className="font-bold block">🔘 LRB 鉛心橡膠隔震墊</span>
            <span className="text-[10px] text-slate-500 block mt-0.5">基底隔震解耦 阻尼+20%</span>
          </div>
          {hasBaseIsolator ? <CheckCircle2 className="size-4 text-purple-600" /> : <span className="text-slate-400">+加裝</span>}
        </button>
      </div>

      {/* Visual Shaking Table Canvas (SVG) */}
      <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-950 p-6 space-y-4 select-none relative overflow-hidden">
        <div className="flex items-center justify-between text-xs font-mono text-slate-400">
          <span>振動台狀態：{isShaking ? '⚠️ 地震波輸入中 (Shaking...)' : '待機中'}</span>
          <button
            onClick={handleStartShaking}
            disabled={isShaking}
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 disabled:opacity-40 text-white font-bold transition cursor-pointer shadow-lg shadow-rose-900/30"
          >
            <Play className="size-4 fill-current" />
            <span>啟動地震振動測試 ({currentWave.pga}g)</span>
          </button>
        </div>

        <svg viewBox="0 0 440 260" className="w-full h-72">
          {/* Shaking Table Base Plate */}
          <rect x="60" y="220" width="320" height="18" rx="3" fill="#334155" />
          <text x="220" y="233" fontSize="9" fill="#94a3b8" textAnchor="middle" fontFamily="monospace">
            ▲ 液壓地震振動台 (SHAKING TABLE) ▲
          </text>

          {/* Base Isolator if installed */}
          {hasBaseIsolator && (
            <g>
              <rect x="130" y="210" width="30" height="10" rx="2" fill="#a855f7" />
              <rect x="280" y="210" width="30" height="10" rx="2" fill="#a855f7" />
              <text x="220" y="206" fontSize="8" fill="#a855f7" textAnchor="middle" fontFamily="monospace">
                LRB 鉛心橡膠隔震層 (Base Isolation Layer)
              </text>
            </g>
          )}

          {/* Building Structural Frame (Dynamic Sway) */}
          <g transform={`translate(${swayOffset}, 0)`} className="transition-transform duration-75 ease-out">
            {/* Columns & Slabs */}
            {/* Ground floor */}
            <rect x="140" y={hasBaseIsolator ? 200 : 210} width="160" height="10" fill="#475569" />
            {/* 1st Story Columns */}
            <rect x="140" y="140" width="12" height="60" fill="#64748b" />
            <rect x="288" y="140" width="12" height="60" fill="#64748b" />
            {/* 1st Floor Slab */}
            <rect x="130" y="130" width="180" height="10" fill="#475569" />

            {/* 2nd Story Columns */}
            <rect x="140" y="60" width="12" height="70" fill="#64748b" />
            <rect x="288" y="60" width="12" height="70" fill="#64748b" />
            {/* Roof Slab */}
            <rect x="130" y="50" width="180" height="10" fill="#475569" />

            {/* Shear Wall if equipped */}
            {hasShearWall && (
              <rect x="195" y="60" width="50" height="140" fill="rgba(59, 130, 246, 0.4)" stroke="#3b82f6" strokeWidth="2" />
            )}

            {/* X-Bracing if equipped */}
            {hasBracing && (
              <g stroke="#14b8a6" strokeWidth="3">
                <line x1="152" y1="140" x2="288" y2="200" />
                <line x1="288" y1="140" x2="152" y2="200" />
                <line x1="152" y1="60" x2="288" y2="130" />
                <line x1="288" y1="60" x2="152" y2="130" />
              </g>
            )}

            {/* TMD Damper Ball if equipped */}
            {hasTMD && (
              <g>
                <circle cx="220" cy="85" r="14" fill="#f59e0b" stroke="#fbbf24" strokeWidth="2" />
                <line x1="220" y1="50" x2="220" y2="71" stroke="#f59e0b" strokeWidth="2" />
                <text x="220" y="112" fontSize="8" fill="#f59e0b" textAnchor="middle" fontFamily="monospace">
                  TMD 阻尼球
                </text>
              </g>
            )}

            {/* Failure Cracks if collapsed */}
            {testResult === 'collapsed' && (
              <g className="animate-fadeIn">
                <path d="M 140,190 L 155,195 L 140,205" stroke="#ef4444" strokeWidth="3" fill="none" />
                <path d="M 295,190 L 285,195 L 295,205" stroke="#ef4444" strokeWidth="3" fill="none" />
                <text x="220" y="165" fontSize="14" fontWeight="bold" fill="#ef4444" textAnchor="middle">
                  ❌ 柱底產生塑性鉸破壞！
                </text>
              </g>
            )}
          </g>
        </svg>

        {/* Victory / Failure Banner */}
        {testResult === 'survived' && (
          <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-mono text-xs flex items-center justify-between animate-fadeIn">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-5 text-emerald-400" />
              <span>🎉 結構完美耐震！層間變位角僅 {maxDriftAnglePct}%，通過 CNS 抗震耐震標準！(+50 EXP)</span>
            </div>
            <span className="font-bold text-emerald-400">韌性容量足夠</span>
          </div>
        )}

        {testResult === 'collapsed' && (
          <div className="p-4 rounded-2xl bg-rose-500/20 border border-rose-500/40 text-rose-300 font-mono text-xs flex items-center justify-between animate-fadeIn">
            <div className="flex items-center gap-2">
              <ShieldAlert className="size-5 text-rose-400" />
              <span>⚠️ 結構破壞！變位角高達 {maxDriftAnglePct}%。建議加裝「RC剪力牆」、「X型斜撐」或「TMD阻尼器」！</span>
            </div>
            <span className="font-bold text-rose-400">側向剛度不足</span>
          </div>
        )}
      </div>
    </div>
  );
}
