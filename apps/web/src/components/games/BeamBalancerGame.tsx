'use client';

import React, { useState, useMemo } from 'react';
import { Activity, CheckCircle2, RotateCcw, Target } from 'lucide-react';
import { soundEngine } from '@/lib/audio/soundEffects';
import { useGamificationStore } from '@/lib/store/gamificationStore';

interface BeamChallenge {
  id: string;
  title: string;
  targetGoal: string;
  hint: string;
  checkSuccess: (ra: number, rb: number, mmax: number, zeroShearX: number) => boolean;
}

const beamChallenges: BeamChallenge[] = [
  {
    id: 'balance_reactions',
    title: '任務 1：達成對稱平衡 (R_A = R_B)',
    targetGoal: '調整集中載重位置 a 或均布載重，使左支承反力 R_A 與右支承反力 R_B 完全相等。',
    hint: '提示：當所有載重合力之作用線恰好通過簡支梁正中點時，兩端支承反力必定相等。',
    checkSuccess: (ra, rb) => Math.abs(ra - rb) <= 0.5,
  },
  {
    id: 'target_max_moment',
    title: '任務 2：精準調控最大彎矩 (M_max ≈ 50 kN·m)',
    targetGoal: '調整載重參數，使簡支梁所承受之最大彎矩 M_max 落在 48 ~ 52 kN·m 之間。',
    hint: '提示：集中載重 P 越靠中間、均布載重 w 越大，中央彎矩就越高。',
    checkSuccess: (_ra, _rb, mmax) => mmax >= 48 && mmax <= 52,
  },
  {
    id: 'center_zero_shear',
    title: '任務 3：鎖定中央剪力過零點 (x = 3.0 m)',
    targetGoal: '使剪力過零點（剪力圖穿越水平軸處）恰好落在梁中點 x = 3.0 m 處。',
    hint: '提示：剪力過零點正是彎矩產生極大值（相對最大值）的斷面位置。',
    checkSuccess: (_ra, _rb, _mmax, zeroShearX) => Math.abs(zeroShearX - 3.0) <= 0.1,
  },
];

export default function BeamBalancerGame() {
  const [selectedChallengeIdx, setSelectedChallengeIdx] = useState<number>(0);
  const [beamLength] = useState<number>(6); // Fixed L = 6m for standardization
  const [pointLoad, setPointLoad] = useState<number>(20); // kN
  const [loadPos, setLoadPos] = useState<number>(1.5); // m from left
  const [distLoad, setDistLoad] = useState<number>(5); // kN/m

  const { recordPuzzleSolved, recordSandboxExperiment } = useGamificationStore();
  const currentChallenge = beamChallenges[selectedChallengeIdx];

  // Mechanics calculations
  const { ra, rb, maxMoment, zeroShearPos } = useMemo(() => {
    const L = beamLength;
    const P = pointLoad;
    const a = Math.min(loadPos, L);
    const w = distLoad;

    const rbVal = (P * a + (w * L * L) / 2) / L;
    const raVal = P + w * L - rbVal;

    let xZero = raVal / (w || 0.0001);
    if (xZero > a) {
      xZero = (raVal - P) / (w || 0.0001);
    }
    xZero = Math.max(0, Math.min(L, xZero));

    const ma = raVal * a - (w * a * a) / 2;
    let mm = 0;
    if (xZero <= a) {
      mm = raVal * xZero - (w * xZero * xZero) / 2;
    } else {
      mm = raVal * xZero - (w * xZero * xZero) / 2 - P * (xZero - a);
    }
    const maxM = Math.max(ma, mm, 0);

    return {
      ra: Number(raVal.toFixed(2)),
      rb: Number(rbVal.toFixed(2)),
      maxMoment: Number(maxM.toFixed(2)),
      zeroShearPos: Number(xZero.toFixed(2)),
    };
  }, [beamLength, pointLoad, loadPos, distLoad]);

  const isCurrentChallengeMet = useMemo(() => {
    return currentChallenge.checkSuccess(ra, rb, maxMoment, zeroShearPos);
  }, [currentChallenge, ra, rb, maxMoment, zeroShearPos]);

  const handleClaimVictory = () => {
    if (isCurrentChallengeMet) {
      soundEngine.playCorrectChime();
      recordPuzzleSolved(`beam_${currentChallenge.id}`);
      if (selectedChallengeIdx < beamChallenges.length - 1) {
        setSelectedChallengeIdx((prev) => prev + 1);
      }
    }
  };

  const handleReset = () => {
    setPointLoad(20);
    setLoadPos(1.5);
    setDistLoad(5);
  };

  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-indigo-100 dark:bg-indigo-900/60 px-3 py-1 text-xs font-mono font-bold text-indigo-700 dark:text-indigo-300">
              MECHANICS CHALLENGE 05
            </span>
            <span className="text-xs font-bold text-slate-500">
              工程力學核心 · 剪力圖 V(x) 與彎矩圖 M(x) 幾何平衡
            </span>
          </div>
          <h3 className="mt-1 font-serif text-2xl font-bold text-slate-900 dark:text-white">
            簡支梁剪力彎矩天平解謎 (Beam Shear & Moment Balancer)
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 px-4 py-2 border border-indigo-200 dark:border-indigo-900/40">
            <Target className="size-4 text-indigo-600 dark:text-indigo-400" />
            <span className="font-mono text-xs font-bold text-slate-700 dark:text-slate-300">
              M_max = <strong className="text-indigo-600 dark:text-indigo-400 text-sm">{maxMoment}</strong> kN·m
            </span>
          </div>
          <button
            onClick={handleReset}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300 cursor-pointer"
            title="重設載重"
          >
            <RotateCcw className="size-4" />
          </button>
        </div>
      </div>

      {/* Challenge Selector */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-mono">
        {beamChallenges.map((c, idx) => (
          <button
            key={c.id}
            onClick={() => setSelectedChallengeIdx(idx)}
            className={`px-3.5 py-2 rounded-xl font-bold transition-all shrink-0 cursor-pointer ${
              selectedChallengeIdx === idx
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-900/20'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {c.title}
          </button>
        ))}
      </div>

      {/* Challenge Banner */}
      <div className="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/50 space-y-1">
        <div className="flex items-center justify-between">
          <span className="font-bold text-sm text-indigo-950 dark:text-indigo-100">
            🎯 目標：{currentChallenge.targetGoal}
          </span>
          {isCurrentChallengeMet && (
            <button
              onClick={handleClaimVictory}
              className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors cursor-pointer"
            >
              <CheckCircle2 className="size-3.5" /> 領取獎勵 +50 EXP
            </button>
          )}
        </div>
        <p className="text-xs text-indigo-800 dark:text-indigo-300 font-sans leading-relaxed">
          {currentChallenge.hint}
        </p>
      </div>

      {/* Slider Controls */}
      <div className="grid gap-4 sm:grid-cols-3 rounded-2xl bg-slate-50 dark:bg-slate-950/60 p-5 border border-slate-200/80 dark:border-slate-800 font-mono text-xs">
        <div className="space-y-2">
          <div className="flex justify-between font-bold text-slate-700 dark:text-slate-300">
            <span>集中載重 P</span>
            <span className="text-amber-600 dark:text-amber-400">{pointLoad} kN</span>
          </div>
          <input
            type="range"
            min="0"
            max="60"
            step="2"
            value={pointLoad}
            onChange={(e) => {
              setPointLoad(Number(e.target.value));
              soundEngine.playPencilDraw();
              recordSandboxExperiment();
            }}
            className="w-full accent-amber-600"
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between font-bold text-slate-700 dark:text-slate-300">
            <span>載重作用點 a</span>
            <span className="text-amber-600 dark:text-amber-400">{loadPos} m</span>
          </div>
          <input
            type="range"
            min="0.5"
            max={beamLength}
            step="0.5"
            value={loadPos}
            onChange={(e) => {
              setLoadPos(Number(e.target.value));
              soundEngine.playPencilDraw();
              recordSandboxExperiment();
            }}
            className="w-full accent-amber-600"
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between font-bold text-slate-700 dark:text-slate-300">
            <span>均布載重 w</span>
            <span className="text-blue-600 dark:text-blue-400">{distLoad} kN/m</span>
          </div>
          <input
            type="range"
            min="0"
            max="20"
            step="1"
            value={distLoad}
            onChange={(e) => {
              setDistLoad(Number(e.target.value));
              soundEngine.playPencilDraw();
              recordSandboxExperiment();
            }}
            className="w-full accent-blue-600"
          />
        </div>
      </div>

      {/* Dual Diagram Display: SFD & BMD (SVG) */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-950 p-5 space-y-4 select-none">
        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span className="flex items-center gap-1.5">
            <Activity className="size-3.5 text-indigo-400" />
            梁剪力圖 V(x) 與彎矩圖 M(x) 即時波形
          </span>
          <div className="flex items-center gap-3">
            <span className="text-emerald-400 font-bold">R_A = {ra} kN</span>
            <span className="text-teal-400 font-bold">R_B = {rb} kN</span>
          </div>
        </div>

        <svg viewBox="0 0 440 220" className="w-full h-56">
          {/* Axis reference lines */}
          <line x1="40" y1="55" x2="400" y2="55" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="40" y1="160" x2="400" y2="160" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />

          {/* Section labels */}
          <text x="25" y="58" fontSize="10" fontWeight="bold" fill="#38bdf8" textAnchor="end" fontFamily="monospace">
            V(x)
          </text>
          <text x="25" y="163" fontSize="10" fontWeight="bold" fill="#818cf8" textAnchor="end" fontFamily="monospace">
            M(x)
          </text>

          {/* Beam supports */}
          <circle cx="40" cy="55" r="4" fill="#0284c7" />
          <circle cx="400" cy="55" r="4" fill="#0d9488" />

          {/* SFD (Shear Diagram Path) */}
          {(() => {
            const scaleV = 0.6;
            const px = 40 + (loadPos / beamLength) * 360;
            const vLeft = 55 - ra * scaleV;
            const vMid1 = 55 - (ra - distLoad * loadPos) * scaleV;
            const vMid2 = 55 - (ra - distLoad * loadPos - pointLoad) * scaleV;
            const vRight = 55 + rb * scaleV;

            return (
              <g>
                <polygon
                  points={`40,55 40,${vLeft} ${px},${vMid1} ${px},${vMid2} 400,${vRight} 400,55`}
                  fill="rgba(56, 189, 248, 0.15)"
                  stroke="#38bdf8"
                  strokeWidth="2"
                />
                <circle cx={40 + (zeroShearPos / beamLength) * 360} cy="55" r="3" fill="#f59e0b" />
                <text
                  x={40 + (zeroShearPos / beamLength) * 360}
                  y="45"
                  fontSize="9"
                  fontWeight="bold"
                  fill="#f59e0b"
                  textAnchor="middle"
                  fontFamily="monospace"
                >
                  V=0 (x={zeroShearPos}m)
                </text>
              </g>
            );
          })()}

          {/* BMD (Moment Diagram Path) */}
          {(() => {
            const scaleM = 0.8;
            const px = 40 + (loadPos / beamLength) * 360;
            const mMaxY = 160 - Math.min(60, maxMoment * scaleM);

            return (
              <g>
                <path
                  d={`M 40,160 Q ${px},${mMaxY} 400,160`}
                  fill="rgba(129, 140, 248, 0.2)"
                  stroke="#818cf8"
                  strokeWidth="2.5"
                />
                <circle cx={40 + (zeroShearPos / beamLength) * 360} cy={mMaxY} r="4" fill="#a855f7" />
                <text
                  x={40 + (zeroShearPos / beamLength) * 360}
                  y={mMaxY - 8}
                  fontSize="10"
                  fontWeight="bold"
                  fill="#c084fc"
                  textAnchor="middle"
                  fontFamily="monospace"
                >
                  M_max = {maxMoment} kN·m
                </text>
              </g>
            );
          })()}
        </svg>
      </div>
    </div>
  );
}
