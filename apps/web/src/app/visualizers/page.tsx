'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  DraftingCompass, 
  Layers, 
  Compass, 
  Activity, 
  Sun, 
  BookOpen, 
  Sparkles,
  Copy,
  Check,
  Zap
} from 'lucide-react';
import TrussZeroForceHunter from '@/components/games/TrussZeroForceHunter';
import LevelingBubbleMaster from '@/components/games/LevelingBubbleMaster';
import Orthographic3DBox from '@/components/games/Orthographic3DBox';
import ConcreteSlumpLab from '@/components/games/ConcreteSlumpLab';
import BeamBalancerGame from '@/components/games/BeamBalancerGame';
import VirtualDraftingTable from '@/components/games/VirtualDraftingTable';
import SeismicDefenseLab from '@/components/games/SeismicDefenseLab';
import TotalStationTraverseLab from '@/components/games/TotalStationTraverseLab';
import SiteHazardDetective from '@/components/gamification/SiteHazardDetective';
import LofiArchitectSoundscape from '@/components/gamification/LofiArchitectSoundscape';

const materialProps = {
  a36: { name: 'CNS A36 低碳鋼', E: 200, fy: 250, desc: 'E = 200 GPa, fy = 250 MPa' },
  'high-strength': { name: '預力高強鋼絞線', E: 205, fy: 1600, desc: 'E = 205 GPa, fy = 1600 MPa' },
  aluminum: { name: '6061-T6 結構鋁合金', E: 70, fy: 240, desc: 'E = 70 GPa, fy = 240 MPa' },
  timber: { name: '針葉樹結構木材 (順紋)', E: 11, fy: 30, desc: 'E = 11 GPa, fy = 30 MPa' },
};

export default function VisualizersPage() {
  const [activeTab, setActiveTab] = useState<'mechanics' | 'drafting' | 'surveying' | 'materials' | 'physics'>('mechanics');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  // --- 1. Mechanics Beam Simulator State ---
  const [beamLength, setBeamLength] = useState<number>(6); // meters
  const [pointLoad, setPointLoad] = useState<number>(30); // kN
  const [loadPos, setLoadPos] = useState<number>(2); // meters from left support
  const [distLoad, setDistLoad] = useState<number>(10); // kN/m

  // Beam Calculations
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

  // --- Mohr's Circle State ---
  const [sigmaX, setSigmaX] = useState<number>(60); // MPa
  const [sigmaY, setSigmaY] = useState<number>(20); // MPa
  const [tauXY, setTauXY] = useState<number>(30); // MPa
  const [theta, setTheta] = useState<number>(0); // degrees

  const mohrResults = useMemo(() => {
    const center = (sigmaX + sigmaY) / 2;
    const radius = Math.sqrt(Math.pow((sigmaX - sigmaY) / 2, 2) + Math.pow(tauXY, 2));
    const sigma1 = center + radius;
    const sigma2 = center - radius;
    const tauMax = radius;
    const twoThetaP = (Math.atan2(2 * tauXY, sigmaX - sigmaY || 0.0001) * 180) / Math.PI;
    const thetaP = twoThetaP / 2;

    const rad2 = (2 * theta * Math.PI) / 180;
    const sigmaTheta = center + ((sigmaX - sigmaY) / 2) * Math.cos(rad2) + tauXY * Math.sin(rad2);
    const tauTheta = -((sigmaX - sigmaY) / 2) * Math.sin(rad2) + tauXY * Math.cos(rad2);

    return {
      center: Number(center.toFixed(1)),
      radius: Number(radius.toFixed(1)),
      sigma1: Number(sigma1.toFixed(1)),
      sigma2: Number(sigma2.toFixed(1)),
      tauMax: Number(tauMax.toFixed(1)),
      thetaP: Number(thetaP.toFixed(1)),
      sigmaTheta: Number(sigmaTheta.toFixed(1)),
      tauTheta: Number(tauTheta.toFixed(1)),
    };
  }, [sigmaX, sigmaY, tauXY, theta]);

  // --- Hooke's Law & Axial Bar Deformation State ---
  const [axialP, setAxialP] = useState<number>(60); // kN
  const [barL, setBarL] = useState<number>(3.0); // meters
  const [barArea, setBarArea] = useState<number>(10); // cm^2
  const [barMaterial, setBarMaterial] = useState<'a36' | 'high-strength' | 'aluminum' | 'timber'>('a36');

  const hookeResults = useMemo(() => {
    const mat = materialProps[barMaterial];
    const A_mm2 = barArea * 100;
    const P_N = axialP * 1000;
    const sigma = P_N / Math.max(1, A_mm2);
    const E_MPa = mat.E * 1000;
    const strain = sigma / E_MPa;
    const deltaL_mm = (P_N * (barL * 1000)) / (A_mm2 * E_MPa);
    const k = (A_mm2 * E_MPa) / (barL * 1000 * 1000);
    const isYielded = sigma > mat.fy;

    return {
      sigma: Number(sigma.toFixed(2)),
      strain: Number(strain.toFixed(6)),
      deltaL_mm: Number(deltaL_mm.toFixed(3)),
      k: Number(k.toFixed(2)),
      isYielded,
      fy: mat.fy,
      matName: mat.name,
    };
  }, [axialP, barL, barArea, barMaterial]);

  // --- 2. Drafting Visualizer State ---
  const [orthoView, setOrthoView] = useState<'3d' | 'unfold' | 'cns-symbols'>('unfold');
  const [selectedSymbol, setSelectedSymbol] = useState<'rc' | 'steel' | 'wood' | 'brick' | 'insulation' | 'glass'>('rc');

  // --- 3. Surveying Leveling State ---
  const [bmElevation, setBmElevation] = useState<number>(50.0); // m
  const [backSight, setBackSight] = useState<number>(1.652); // m
  const [foreSight, setForeSight] = useState<number>(0.842); // m

  const levelingResults = useMemo(() => {
    const hi = bmElevation + backSight;
    const tpElevation = hi - foreSight;
    const diff = backSight - foreSight;
    return {
      hi: Number(hi.toFixed(3)),
      tpElevation: Number(tpElevation.toFixed(3)),
      diff: Number(diff.toFixed(3)),
    };
  }, [bmElevation, backSight, foreSight]);

  // --- 4. Materials Concrete & Rebar State ---
  const [waterWeight, setWaterWeight] = useState<number>(180); // kg/m3
  const [cementWeight, setCementWeight] = useState<number>(360); // kg/m3

  const concreteResults = useMemo(() => {
    const wc = waterWeight / Math.max(1, cementWeight);
    const fc = Math.max(10, Math.min(60, 96 / Math.pow(8.2, wc)));
    const slump = Math.max(3, Math.min(25, (waterWeight - 140) * 0.25 + 10));

    return {
      wcRatio: Number(wc.toFixed(2)),
      fc28: Number(fc.toFixed(1)),
      slump: Number(slump.toFixed(1)),
    };
  }, [waterWeight, cementWeight]);

  // --- 5. Building Physics & Envelope State ---
  const [wallThickness, setWallThickness] = useState<number>(20); // cm RC
  const [insulationThickness, setInsulationThickness] = useState<number>(5); // cm XPS
  const [glassType, setGlassType] = useState<'single' | 'double' | 'low-e'>('double');

  const physicsResults = useMemo(() => {
    const rRc = (wallThickness / 100) / 1.7;
    const rIns = (insulationThickness / 100) / 0.034;
    const rPlaster = 0.02 / 0.8;
    const totalR = 0.13 + 0.04 + rRc + rIns + rPlaster;
    const uValue = 1 / totalR;

    const glassU = glassType === 'single' ? 5.8 : glassType === 'double' ? 2.8 : 1.6;
    const glassShgc = glassType === 'single' ? 0.82 : glassType === 'double' ? 0.70 : 0.45;

    return {
      totalR: Number(totalR.toFixed(2)),
      uValue: Number(uValue.toFixed(2)),
      glassU,
      glassShgc,
    };
  }, [wallThickness, insulationThickness, glassType]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 space-y-10">
      {/* Page Header */}
      <header className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-blue-900/80 bg-blue-50/80 dark:bg-blue-950/40 px-3.5 py-1 text-xs font-mono font-bold text-blue-700 dark:text-blue-300">
          <Sparkles className="size-3.5 text-blue-600 dark:text-blue-400" />
          Arch V8.02 互動圖解實驗室 (Interactive Engineering Lab)
        </div>
        <h1 className="font-serif text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
          把抽象公式，變成看得見的動態工程模型。
        </h1>
        <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
          動手滑動載重、旋轉應力元素、展開正投影三視圖、模擬水準平差、觀察虎克定律拉壓與調整混凝土配比。
          透視建築工程背後的物理規律與 CNS 規範。
        </p>
      </header>

      {/* Module Selector Tabs */}
      <nav className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 border-b border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-mono mobile-scroll" aria-label="實驗室模組切換">
        {[
          { id: 'mechanics', label: '🛠️ 結構力學實驗台', icon: Activity },
          { id: 'drafting', label: '📐 建築製圖實驗台', icon: DraftingCompass },
          { id: 'surveying', label: '🔭 工程測量實驗台', icon: Compass },
          { id: 'materials', label: '🧱 材料試驗實驗台', icon: Layers },
          { id: 'physics', label: '🌿 建築物理環境', icon: Sun },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 font-bold transition-all cursor-pointer ${
                isActive
                  ? 'bg-blue-700 text-white shadow-md shadow-blue-900/20'
                  : 'bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <Icon className="size-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </nav>

      {/* --- Tab 1: Structural Mechanics Simulator --- */}
      {activeTab === 'mechanics' && (
        <div className="space-y-10 animate-fadeIn">
          {/* Interactive Game: Truss Zero Force Member Hunter */}
          <TrussZeroForceHunter />

          {/* Section 1: Beam Shear & Moment */}
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-700 dark:text-blue-400">
                  Simulation 01 · Beam Shear & Moment Diagrams
                </span>
                <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-white mt-1">
                  簡支梁受力 · 剪力圖 V(x) 與彎矩圖 M(x) 即時模擬
                </h2>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="rounded-lg bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 text-emerald-700 dark:text-emerald-300 font-bold border border-emerald-200 dark:border-emerald-900/50">
                  左支承 R_A = {ra} kN
                </span>
                <span className="rounded-lg bg-teal-50 dark:bg-teal-950/60 px-3 py-1 text-teal-700 dark:text-teal-300 font-bold border border-teal-200 dark:border-teal-900/50">
                  右支承 R_B = {rb} kN
                </span>
              </div>
            </div>

            {/* Quick Engineering Presets */}
            <div className="flex items-center gap-2 overflow-x-auto text-xs font-mono text-slate-500 pb-1">
              <span className="shrink-0 flex items-center gap-1 font-bold"><Zap className="size-3.5 text-amber-500" /> 工程預設：</span>
              <button
                onClick={() => { setBeamLength(6); setPointLoad(30); setLoadPos(3); setDistLoad(10); }}
                className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-blue-950/60 text-slate-700 dark:text-slate-300 transition-colors shrink-0 cursor-pointer"
              >
                標準對稱載重 (L=6m, P=30kN, w=10)
              </button>
              <button
                onClick={() => { setBeamLength(8); setPointLoad(0); setDistLoad(15); }}
                className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-blue-950/60 text-slate-700 dark:text-slate-300 transition-colors shrink-0 cursor-pointer"
              >
                純均布載重 (w=15kN/m)
              </button>
              <button
                onClick={() => { setBeamLength(6); setPointLoad(60); setLoadPos(2); setDistLoad(0); }}
                className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-blue-950/60 text-slate-700 dark:text-slate-300 transition-colors shrink-0 cursor-pointer"
              >
                偏心集中載重 (P=60kN, a=2m)
              </button>
            </div>

            {/* Controls Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 p-5 border border-slate-200/80 dark:border-slate-800">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                  <span>梁長跨度 L</span>
                  <span className="text-blue-700 dark:text-blue-400">{beamLength} m</span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="12"
                  step="0.5"
                  value={beamLength}
                  onChange={(e) => {
                    const l = Number(e.target.value);
                    setBeamLength(l);
                    if (loadPos > l) setLoadPos(l);
                  }}
                  className="w-full accent-blue-700"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                  <span>集中載重 P</span>
                  <span className="text-amber-600 dark:text-amber-400">{pointLoad} kN</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value={pointLoad}
                  onChange={(e) => setPointLoad(Number(e.target.value))}
                  className="w-full accent-amber-600"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                  <span>集中載重位置 a</span>
                  <span className="text-amber-600 dark:text-amber-400">{loadPos} m</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max={beamLength}
                  step="0.5"
                  value={loadPos}
                  onChange={(e) => setLoadPos(Number(e.target.value))}
                  className="w-full accent-amber-600"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                  <span>均布載重 w</span>
                  <span className="text-sky-600 dark:text-sky-400">{distLoad} kN/m</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="30"
                  step="1"
                  value={distLoad}
                  onChange={(e) => setDistLoad(Number(e.target.value))}
                  className="w-full accent-sky-600"
                />
              </div>
            </div>

            {/* Dynamic Diagram Visualizer Canvas/SVG */}
            <div className="space-y-6">
              {/* 1. Beam Free Body Diagram (FBD) */}
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-4 space-y-2">
                <span className="text-xs font-mono font-bold text-slate-500">1. 梁受力模型 (Free Body Diagram)</span>
                <svg viewBox="0 0 800 140" className="w-full h-32 select-none">
                  {/* Beam main body */}
                  <rect x="100" y="70" width="600" height="16" rx="4" fill="#64748b" />
                  
                  {/* Supports */}
                  <polygon points="90,105 110,105 100,86" fill="#1F567A" />
                  <line x1="80" y1="106" x2="120" y2="106" stroke="#1F567A" strokeWidth="3" />
                  <text x="100" y="125" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1F567A">A (Pin)</text>

                  <polygon points="690,105 710,105 700,86" fill="#0d9488" />
                  <circle cx="695" cy="110" r="4" fill="#0d9488" />
                  <circle cx="705" cy="110" r="4" fill="#0d9488" />
                  <line x1="680" y1="116" x2="720" y2="116" stroke="#0d9488" strokeWidth="3" />
                  <text x="700" y="132" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0d9488">B (Roller)</text>

                  {/* Distributed load arrows */}
                  {distLoad > 0 && (
                    <>
                      <line x1="100" y1="40" x2="700" y2="40" stroke="#0284c7" strokeWidth="2" strokeDasharray="4 4" />
                      {Array.from({ length: 9 }).map((_, i) => {
                        const x = 100 + i * (600 / 8);
                        return (
                          <g key={i}>
                            <line x1={x} y1="40" x2={x} y2="68" stroke="#0284c7" strokeWidth="2" />
                            <polygon points={`${x-3},62 ${x+3},62 ${x},68`} fill="#0284c7" />
                          </g>
                        );
                      })}
                      <text x="400" y="32" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0284c7">
                        w = {distLoad} kN/m
                      </text>
                    </>
                  )}

                  {/* Point Load Arrow */}
                  {pointLoad > 0 && (
                    <g>
                      {(() => {
                        const px = 100 + (loadPos / beamLength) * 600;
                        return (
                          <>
                            <line x1={px} y1="15" x2={px} y2="68" stroke="#d97706" strokeWidth="3" />
                            <polygon points={`${px-5},60 ${px+5},60 ${px},68`} fill="#d97706" />
                            <text x={px} y="10" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#d97706">
                              P = {pointLoad} kN (a = {loadPos}m)
                            </text>
                          </>
                        );
                      })()}
                    </g>
                  )}
                </svg>
              </div>

              {/* Summary Stats & Formula */}
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 font-mono text-xs space-y-1">
                  <span className="text-slate-500">最大彎矩 M_max</span>
                  <strong className="text-xl text-blue-700 dark:text-blue-400 block">{maxMoment} kN·m</strong>
                  <span className="text-[11px] text-slate-400">發生於 x = {zeroShearPos} m 處 (剪力過零點)</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 font-mono text-xs space-y-1">
                  <span className="text-slate-500">力平衡檢算 ΣF_y</span>
                  <strong className="text-xl text-emerald-600 block">{Number((ra + rb).toFixed(2))} kN</strong>
                  <span className="text-[11px] text-slate-400">總載重 P + wL = {Number((pointLoad + distLoad * beamLength).toFixed(2))} kN (平衡)</span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-mono text-slate-500 block">複製計算結果</span>
                    <span className="text-xs font-bold text-slate-900 dark:text-white">Ra={ra}kN, Rb={rb}kN, Mmax={maxMoment}kN·m</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard('beam', `簡支梁長度 L=${beamLength}m, P=${pointLoad}kN(a=${loadPos}m), w=${distLoad}kN/m => Ra=${ra}kN, Rb=${rb}kN, Mmax=${maxMoment}kN·m`)}
                    className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-blue-500 transition-colors cursor-pointer text-slate-600 dark:text-slate-300"
                    title="複製算式"
                  >
                    {copiedKey === 'beam' ? <Check className="size-4 text-emerald-600" /> : <Copy className="size-4" />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Game: Beam Balancer Game */}
          <BeamBalancerGame />

          {/* Section 2: Mohr's Circle Simulator */}
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-teal-700 dark:text-teal-400">
                  Simulation 02 · Mohr&apos;s Circle for Plane Stress
                </span>
                <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-white mt-1">
                  莫爾圓應力轉換 · 主應力 σ₁/σ₂ 與最大剪應力 τ_max 幾何可視化
                </h2>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="rounded-lg bg-blue-50 dark:bg-blue-950/60 px-3 py-1 text-blue-700 dark:text-blue-300 font-bold border border-blue-200 dark:border-blue-900/50">
                  第一主應力 σ₁ = {mohrResults.sigma1} MPa
                </span>
                <span className="rounded-lg bg-teal-50 dark:bg-teal-950/60 px-3 py-1 text-teal-700 dark:text-teal-300 font-bold border border-teal-200 dark:border-teal-900/50">
                  最大剪應力 τ_max = {mohrResults.tauMax} MPa
                </span>
              </div>
            </div>

            {/* Presets */}
            <div className="flex items-center gap-2 overflow-x-auto text-xs font-mono text-slate-500 pb-1">
              <span className="shrink-0 flex items-center gap-1 font-bold"><Zap className="size-3.5 text-teal-500" /> 應力狀態預設：</span>
              <button
                onClick={() => { setSigmaX(0); setSigmaY(0); setTauXY(40); setTheta(0); }}
                className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-teal-100 dark:hover:bg-teal-950/60 text-slate-700 dark:text-slate-300 transition-colors shrink-0 cursor-pointer"
              >
                純剪力狀態 (Pure Shear)
              </button>
              <button
                onClick={() => { setSigmaX(80); setSigmaY(0); setTauXY(0); setTheta(0); }}
                className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-teal-100 dark:hover:bg-teal-950/60 text-slate-700 dark:text-slate-300 transition-colors shrink-0 cursor-pointer"
              >
                單軸拉伸 (Uniaxial Tension)
              </button>
              <button
                onClick={() => { setSigmaX(60); setSigmaY(20); setTauXY(30); setTheta(mohrResults.thetaP); }}
                className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-teal-100 dark:hover:bg-teal-950/60 text-slate-700 dark:text-slate-300 transition-colors shrink-0 cursor-pointer"
              >
                主應力旋轉面 (θ = θp)
              </button>
            </div>

            {/* Controls */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 p-5 border border-slate-200/80 dark:border-slate-800">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                  <span>水平正應力 σ_x</span>
                  <span className="text-blue-700 dark:text-blue-400">{sigmaX} MPa</span>
                </div>
                <input
                  type="range"
                  min="-100"
                  max="100"
                  step="5"
                  value={sigmaX}
                  onChange={(e) => setSigmaX(Number(e.target.value))}
                  className="w-full accent-blue-700"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                  <span>垂直正應力 σ_y</span>
                  <span className="text-teal-700 dark:text-teal-400">{sigmaY} MPa</span>
                </div>
                <input
                  type="range"
                  min="-100"
                  max="100"
                  step="5"
                  value={sigmaY}
                  onChange={(e) => setSigmaY(Number(e.target.value))}
                  className="w-full accent-teal-700"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                  <span>剪應力 τ_xy</span>
                  <span className="text-purple-600 dark:text-purple-400">{tauXY} MPa</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="80"
                  step="5"
                  value={tauXY}
                  onChange={(e) => setTauXY(Number(e.target.value))}
                  className="w-full accent-purple-600"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                  <span>旋轉角度 θ</span>
                  <span className="text-amber-600 dark:text-amber-400">{theta}° (主向={mohrResults.thetaP}°)</span>
                </div>
                <input
                  type="range"
                  min="-90"
                  max="90"
                  step="1"
                  value={theta}
                  onChange={(e) => setTheta(Number(e.target.value))}
                  className="w-full accent-amber-600"
                />
              </div>
            </div>

            {/* Mohr Circle Visualizer */}
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-4">
                <svg viewBox="0 0 400 300" className="w-full h-64 select-none">
                  <line x1="20" y1="150" x2="380" y2="150" stroke="#94a3b8" strokeWidth="1.5" />
                  <line x1="200" y1="20" x2="200" y2="280" stroke="#94a3b8" strokeWidth="1.5" />
                  <text x="375" y="145" fontSize="10" fontWeight="bold" fill="#64748b">σ</text>
                  <text x="205" y="30" fontSize="10" fontWeight="bold" fill="#64748b">τ</text>

                  {(() => {
                    const cx = 200 + mohrResults.center * 1.2;
                    const cy = 150;
                    const r = Math.max(10, mohrResults.radius * 1.2);

                    const px1 = 200 + mohrResults.sigma1 * 1.2;
                    const px2 = 200 + mohrResults.sigma2 * 1.2;

                    const rotX = 200 + mohrResults.sigmaTheta * 1.2;
                    const rotY = 150 - mohrResults.tauTheta * 1.2;

                    return (
                      <>
                        <circle cx={cx} cy={cy} r={r} fill="rgba(13, 148, 136, 0.1)" stroke="#0d9488" strokeWidth="2" />
                        <circle cx={cx} cy={cy} r="4" fill="#0d9488" />
                        
                        <circle cx={px1} cy={cy} r="4" fill="#1F567A" />
                        <text x={px1 + 5} y={cy - 8} fontSize="11" fontWeight="bold" fill="#1F567A">σ1={mohrResults.sigma1}</text>

                        <circle cx={px2} cy={cy} r="4" fill="#1F567A" />
                        <text x={px2 - 45} y={cy - 8} fontSize="11" fontWeight="bold" fill="#1F567A">σ2={mohrResults.sigma2}</text>

                        <line x1={cx} y1={cy} x2={rotX} y2={rotY} stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" />
                        <circle cx={rotX} cy={rotY} r="5" fill="#f59e0b" />
                        <text x={rotX + 8} y={rotY - 6} fontSize="10" fontWeight="bold" fill="#d97706">
                          θ={theta}° (σ={mohrResults.sigmaTheta}, τ={mohrResults.tauTheta})
                        </text>
                      </>
                    );
                  })()}
                </svg>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl bg-slate-50 dark:bg-slate-950/60 p-5 border border-slate-200 dark:border-slate-800 space-y-3 font-mono text-xs">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">莫爾圓數值解析結果</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                      <span className="text-slate-500 block">圓心坐標 C</span>
                      <strong className="text-slate-900 dark:text-white text-sm">{mohrResults.center} MPa</strong>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                      <span className="text-slate-500 block">圓半徑 R</span>
                      <strong className="text-slate-900 dark:text-white text-sm">{mohrResults.radius} MPa</strong>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                      <span className="text-slate-500 block">主應力面傾角 θ_p</span>
                      <strong className="text-amber-600 dark:text-amber-400 text-sm">{mohrResults.thetaP}°</strong>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                      <span className="text-slate-500 block">最大剪應力面傾角</span>
                      <strong className="text-purple-600 dark:text-purple-400 text-sm">{Number((mohrResults.thetaP + 45).toFixed(1))}°</strong>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-sans text-xs pt-1">
                    當單元旋轉至主應力平面時（τ = 0），剪應力完全消失，此時正應力達到極大值 σ₁ 與極小值 σ₂；最大剪應力面則與主應力面恰好夾 45°。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Hooke's Law & Axial Bar Deformation Simulator */}
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                  Simulation 03 · Hooke&apos;s Law &amp; Axial Bar Deformation
                </span>
                <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-white mt-1">
                  桿件軸向拉壓變形 · 虎克定律與應力應變關係 (ΔL = PL/AE)
                </h2>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="rounded-lg bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 text-indigo-700 dark:text-indigo-300 font-bold border border-indigo-200 dark:border-indigo-900/50">
                  軸向正應力 σ = {hookeResults.sigma} MPa
                </span>
                <span className="rounded-lg bg-amber-50 dark:bg-amber-950/60 px-3 py-1 text-amber-700 dark:text-amber-300 font-bold border border-amber-200 dark:border-amber-900/50">
                  軸向伸長量 ΔL = {hookeResults.deltaL_mm} mm
                </span>
              </div>
            </div>

            {/* Material selector */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 p-5 border border-slate-200/80 dark:border-slate-800">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 block">選用工程材料</span>
                <select
                  value={barMaterial}
                  onChange={(e) => setBarMaterial(e.target.value as typeof barMaterial)}
                  className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 p-2 text-xs font-mono font-bold text-slate-900 dark:text-white"
                >
                  {Object.entries(materialProps).map(([id, m]) => (
                    <option key={id} value={id}>{m.name}</option>
                  ))}
                </select>
                <span className="text-[11px] font-mono text-slate-400 block">{materialProps[barMaterial].desc}</span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                  <span>軸向拉力 P</span>
                  <span className="text-indigo-600 dark:text-indigo-400">{axialP} kN</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="300"
                  step="5"
                  value={axialP}
                  onChange={(e) => setAxialP(Number(e.target.value))}
                  className="w-full accent-indigo-600"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                  <span>桿件原長 L</span>
                  <span className="text-blue-600 dark:text-blue-400">{barL} m</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="0.5"
                  value={barL}
                  onChange={(e) => setBarL(Number(e.target.value))}
                  className="w-full accent-blue-600"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                  <span>斷面積 A</span>
                  <span className="text-emerald-600 dark:text-emerald-400">{barArea} cm² ({barArea * 100} mm²)</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="50"
                  step="1"
                  value={barArea}
                  onChange={(e) => setBarArea(Number(e.target.value))}
                  className="w-full accent-emerald-600"
                />
              </div>
            </div>

            {/* Hooke's Law Graphic */}
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-5 space-y-4">
                <span className="text-xs font-mono font-bold text-slate-500 block">桿件軸向伸長視覺化模型</span>
                <svg viewBox="0 0 400 120" className="w-full h-28 select-none">
                  {/* Fixed wall support */}
                  <rect x="20" y="20" width="16" height="80" fill="#64748b" />
                  {Array.from({ length: 5 }).map((_, i) => (
                    <line key={i} x1="12" y1={30 + i * 14} x2="20" y2={22 + i * 14} stroke="#475569" strokeWidth="2" />
                  ))}

                  {/* Deformed bar */}
                  {(() => {
                    const baseWidth = 240;
                    const deformWidth = Math.min(80, hookeResults.deltaL_mm * 8);
                    return (
                      <>
                        <rect x="36" y="45" width={baseWidth + deformWidth} height="30" rx="3" fill="#3b82f6" opacity="0.85" />
                        <line x1={36 + baseWidth} y1="35" x2={36 + baseWidth} y2="85" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />
                        
                        {/* Axial pull arrow */}
                        <line x1={36 + baseWidth + deformWidth} y1="60" x2={36 + baseWidth + deformWidth + 40} y2="60" stroke="#ef4444" strokeWidth="3" />
                        <polygon points={`${36 + baseWidth + deformWidth + 40},60 ${36 + baseWidth + deformWidth + 32},55 ${36 + baseWidth + deformWidth + 32},65`} fill="#ef4444" />
                        <text x={36 + baseWidth + deformWidth + 45} y="64" fontSize="11" fontWeight="bold" fill="#ef4444">P={axialP}kN</text>
                      </>
                    );
                  })()}
                </svg>
              </div>

              <div className="rounded-2xl bg-slate-50 dark:bg-slate-950/60 p-5 border border-slate-200 dark:border-slate-800 space-y-3 font-mono text-xs">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">虎克定律計算結果</h3>
                  {hookeResults.isYielded ? (
                    <span className="px-2 py-0.5 rounded bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 font-bold">⚠️ 超出降伏強度 (進入塑性區)</span>
                  ) : (
                    <span className="px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold">✓ 處於彈性範圍內</span>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <span className="text-slate-500 block">正應力 σ = P / A</span>
                    <strong className="text-indigo-600 dark:text-indigo-400 text-sm">{hookeResults.sigma} MPa</strong>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <span className="text-slate-500 block">應變 ε = σ / E</span>
                    <strong className="text-slate-900 dark:text-white text-sm">{hookeResults.strain}</strong>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <span className="text-slate-500 block">伸長量 ΔL = PL / AE</span>
                    <strong className="text-amber-600 dark:text-amber-400 text-sm">{hookeResults.deltaL_mm} mm</strong>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    <span className="text-slate-500 block">軸向勁度 k = AE / L</span>
                    <strong className="text-emerald-600 dark:text-emerald-400 text-sm">{hookeResults.k} kN/mm</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Game: Seismic Shaking Table Lab */}
          <SeismicDefenseLab />
        </div>
      )}

      {/* --- Tab 2: Architectural Drafting Simulator --- */}
      {activeTab === 'drafting' && (
        <div className="space-y-8 animate-fadeIn">
          {/* Interactive Game: Virtual Drafting Table Lab */}
          <VirtualDraftingTable />

          {/* Interactive Game: Orthographic 3D Box */}
          <Orthographic3DBox />

          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-600 dark:text-sky-400">
                  Simulation · CNS Orthographic Projection & Material Hatching
                </span>
                <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-white mt-1">
                  第三角正投影法 · 三視圖空間展開與 CNS 建築材料剖面圖例
                </h2>
              </div>
              <div className="flex items-center gap-1 rounded-xl bg-slate-100 dark:bg-slate-800 p-1 text-xs font-mono">
                <button
                  onClick={() => setOrthoView('unfold')}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-colors cursor-pointer ${orthoView === 'unfold' ? 'bg-sky-600 text-white' : 'text-slate-600 dark:text-slate-400'}`}
                >
                  三視圖展開對正
                </button>
                <button
                  onClick={() => setOrthoView('cns-symbols')}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-colors cursor-pointer ${orthoView === 'cns-symbols' ? 'bg-sky-600 text-white' : 'text-slate-600 dark:text-slate-400'}`}
                >
                  CNS 材料圖例字典
                </button>
              </div>
            </div>

            {orthoView === 'unfold' ? (
              <div className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2 rounded-2xl bg-slate-50 dark:bg-slate-950 p-6 border border-slate-200 dark:border-slate-800">
                  <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
                    {/* Top View */}
                    <div className="border-2 border-sky-400 rounded-xl p-4 bg-white dark:bg-slate-900 text-center space-y-2">
                      <span className="text-[11px] font-mono font-bold text-sky-700 dark:text-sky-300 block">
                        俯視圖 (Top View) · 長 × 寬
                      </span>
                      <svg viewBox="0 0 120 80" className="w-full h-20 mx-auto">
                        <rect x="15" y="10" width="90" height="60" fill="none" stroke="#0284c7" strokeWidth="2" />
                        <line x1="60" y1="10" x2="60" y2="70" stroke="#0284c7" strokeWidth="1.5" />
                        <circle cx="35" cy="40" r="10" fill="none" stroke="#0284c7" strokeWidth="1.5" />
                      </svg>
                    </div>

                    {/* 45-degree projection reflection line */}
                    <div className="border border-dashed border-slate-300 dark:border-slate-700 rounded-xl p-4 flex items-center justify-center bg-slate-100/50 dark:bg-slate-900/40">
                      <div className="text-center font-mono text-xs text-slate-400">
                        <span>45° 輔助投影轉折線</span>
                        <svg viewBox="0 0 60 60" className="w-12 h-12 mx-auto mt-1">
                          <line x1="5" y1="55" x2="55" y2="5" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="3 3" />
                        </svg>
                      </div>
                    </div>

                    {/* Front View */}
                    <div className="border-2 border-blue-600 rounded-xl p-4 bg-white dark:bg-slate-900 text-center space-y-2">
                      <span className="text-[11px] font-mono font-bold text-blue-700 dark:text-blue-300 block">
                        正視圖 (Front View) · 長 × 高
                      </span>
                      <svg viewBox="0 0 120 80" className="w-full h-20 mx-auto">
                        <polygon points="15,70 15,30 60,15 105,70" fill="none" stroke="#2563eb" strokeWidth="2" />
                        <line x1="15" y1="70" x2="105" y2="70" stroke="#2563eb" strokeWidth="2" />
                        <line x1="35" y1="70" x2="35" y2="25" stroke="#94a3b8" strokeWidth="1" strokeDasharray="2 2" />
                      </svg>
                    </div>

                    {/* Right View */}
                    <div className="border-2 border-teal-500 rounded-xl p-4 bg-white dark:bg-slate-900 text-center space-y-2">
                      <span className="text-[11px] font-mono font-bold text-teal-700 dark:text-teal-300 block">
                        右側視圖 (Right View) · 寬 × 高
                      </span>
                      <svg viewBox="0 0 120 80" className="w-full h-20 mx-auto">
                        <rect x="25" y="25" width="70" height="45" fill="none" stroke="#0d9488" strokeWidth="2" />
                        <line x1="25" y1="25" x2="95" y2="70" stroke="#0d9488" strokeWidth="1.5" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Projection Rules Card */}
                <div className="space-y-4">
                  <div className="rounded-2xl bg-sky-50/60 dark:bg-sky-950/30 p-5 border border-sky-200 dark:border-sky-900/50 space-y-3 font-mono text-xs">
                    <h3 className="font-bold text-sky-900 dark:text-sky-200 text-sm">CNS 第三角投影三大鐵律</h3>
                    <ul className="space-y-2.5 text-slate-700 dark:text-slate-300 font-sans">
                      <li className="flex items-start gap-2">
                        <span className="text-sky-600 font-bold font-mono">1.</span>
                        <span><strong>長對正：</strong>俯視圖與正視圖的左右長度必須嚴格垂直對齊。</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sky-600 font-bold font-mono">2.</span>
                        <span><strong>高平齊：</strong>正視圖與右側視圖的上下高度必須完全水平齊平。</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sky-600 font-bold font-mono">3.</span>
                        <span><strong>寬相等：</strong>俯視圖的上下寬度等於右側視圖的左右寬度（經 45° 線轉折）。</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-2xl bg-slate-50 dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-800 text-xs space-y-2 font-mono">
                    <span className="text-slate-500 font-bold block">CNS 建築線型與線寬規範</span>
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center"><span className="font-bold text-slate-900 dark:text-white">粗實線 (0.5mm)</span><span className="text-slate-500">主要結構外輪廓、剖切線</span></div>
                      <div className="flex justify-between items-center"><span className="font-bold text-slate-900 dark:text-white">中實線 (0.35mm)</span><span className="text-slate-500">次要輪廓、門窗框、家具</span></div>
                      <div className="flex justify-between items-center"><span className="font-bold text-slate-900 dark:text-white">細虛線 (0.25mm)</span><span className="text-slate-500">隱藏線、梁上突出線</span></div>
                      <div className="flex justify-between items-center"><span className="font-bold text-slate-900 dark:text-white">細單點鏈線 (0.18mm)</span><span className="text-slate-500">建築中心線、定位軸線</span></div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* CNS Material Symbols Dictionary */
              <div className="grid gap-6 lg:grid-cols-3">
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-slate-500">點選建築材料圖例：</span>
                  {[
                    { id: 'rc', name: '鋼筋混凝土 (RC)', desc: '實線 45° 斜線 + 實心圓點（粗細骨材）' },
                    { id: 'steel', name: '結構鋼材 (Steel)', desc: '45° 雙平行細斜線或全黑填滿' },
                    { id: 'wood', name: '木材 (Timber)', desc: '年輪紋理與縱向纖維木紋' },
                    { id: 'brick', name: '紅磚砌體 (Brick)', desc: '均勻 45° 實線剖面斜線' },
                    { id: 'insulation', name: '隔熱保溫層 (Insulation)', desc: '波浪連續曲線或交錯連續三角' },
                    { id: 'glass', name: '平板玻璃 (Glass)', desc: '長短交替 45° 細斜線' },
                  ].map((sym) => (
                    <button
                      key={sym.id}
                      onClick={() => setSelectedSymbol(sym.id as typeof selectedSymbol)}
                      className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer ${
                        selectedSymbol === sym.id
                          ? 'border-sky-500 bg-sky-50/70 dark:bg-sky-950/50 shadow-xs'
                          : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                      }`}
                    >
                      <strong className="text-xs font-bold text-slate-900 dark:text-white block">{sym.name}</strong>
                      <span className="text-[11px] text-slate-500 leading-tight block mt-0.5">{sym.desc}</span>
                    </button>
                  ))}
                </div>

                <div className="lg:col-span-2 rounded-2xl bg-slate-50 dark:bg-slate-950 p-6 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-slate-200 dark:border-slate-800 pb-3">
                      <h4 className="font-serif font-bold text-slate-900 dark:text-white text-lg">
                        CNS 建築製圖規範標準剖面圖例 · {selectedSymbol.toUpperCase()}
                      </h4>
                      <span className="text-xs font-mono bg-sky-100 dark:bg-sky-950 text-sky-800 dark:text-sky-300 px-2.5 py-1 rounded-full font-bold">
                        CNS 11567
                      </span>
                    </div>

                    <div className="h-44 w-full rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center p-4">
                      {selectedSymbol === 'rc' && (
                        <svg viewBox="0 0 200 100" className="w-64 h-32">
                          <rect x="10" y="10" width="180" height="80" fill="none" stroke="#0284c7" strokeWidth="2" />
                          {[20, 45, 70, 95, 120, 145, 170].map((x) => (
                            <line key={x} x1={x} y1="10" x2={x+40} y2="90" stroke="#0284c7" strokeWidth="1" />
                          ))}
                          <circle cx="50" cy="50" r="3" fill="#0284c7" />
                          <circle cx="110" cy="40" r="4" fill="#0284c7" />
                          <circle cx="150" cy="70" r="3" fill="#0284c7" />
                          <circle cx="80" cy="75" r="2.5" fill="#0284c7" />
                        </svg>
                      )}
                      {selectedSymbol === 'steel' && (
                        <svg viewBox="0 0 200 100" className="w-64 h-32">
                          <rect x="10" y="10" width="180" height="80" fill="none" stroke="#2563eb" strokeWidth="2" />
                          {[20, 30, 60, 70, 100, 110, 140, 150].map((x) => (
                            <line key={x} x1={x} y1="10" x2={x+35} y2="90" stroke="#2563eb" strokeWidth="1" />
                          ))}
                        </svg>
                      )}
                      {selectedSymbol === 'wood' && (
                        <svg viewBox="0 0 200 100" className="w-64 h-32">
                          <rect x="10" y="10" width="180" height="80" fill="none" stroke="#d97706" strokeWidth="2" />
                          <ellipse cx="60" cy="50" rx="30" ry="20" fill="none" stroke="#d97706" strokeWidth="1" />
                          <ellipse cx="60" cy="50" rx="45" ry="30" fill="none" stroke="#d97706" strokeWidth="1" />
                          <line x1="20" y1="20" x2="180" y2="30" stroke="#d97706" strokeWidth="1" />
                          <line x1="20" y1="75" x2="180" y2="80" stroke="#d97706" strokeWidth="1" />
                        </svg>
                      )}
                      {selectedSymbol === 'brick' && (
                        <svg viewBox="0 0 200 100" className="w-64 h-32">
                          <rect x="10" y="10" width="180" height="80" fill="none" stroke="#dc2626" strokeWidth="2" />
                          {[25, 50, 75, 100, 125, 150, 175].map((x) => (
                            <line key={x} x1={x} y1="10" x2={x+40} y2="90" stroke="#dc2626" strokeWidth="1.5" />
                          ))}
                        </svg>
                      )}
                      {selectedSymbol === 'insulation' && (
                        <svg viewBox="0 0 200 100" className="w-64 h-32">
                          <rect x="10" y="10" width="180" height="80" fill="none" stroke="#16a34a" strokeWidth="2" />
                          <path d="M 15 50 Q 30 20, 45 50 T 75 50 T 105 50 T 135 50 T 165 50 T 185 50" fill="none" stroke="#16a34a" strokeWidth="2" />
                        </svg>
                      )}
                      {selectedSymbol === 'glass' && (
                        <svg viewBox="0 0 200 100" className="w-64 h-32">
                          <rect x="10" y="10" width="180" height="80" fill="none" stroke="#0891b2" strokeWidth="2" />
                          <line x1="60" y1="20" x2="110" y2="80" stroke="#0891b2" strokeWidth="2" />
                          <line x1="75" y1="20" x2="105" y2="55" stroke="#0891b2" strokeWidth="1" />
                          <line x1="120" y1="35" x2="150" y2="70" stroke="#0891b2" strokeWidth="1" />
                        </svg>
                      )}
                    </div>
                  </div>

                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-4">
                    ※ 備註：在建築圖面中，剖面線通常以細實線繪製，傾角預設為 45°。若相鄰兩個同材質構件相鄰，應變換斜線方向（如一為 +45°，另一為 -45°）以便識別交界。
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* --- Tab 3: Surveying Leveling Simulator --- */}
      {activeTab === 'surveying' && (
        <div className="space-y-8 animate-fadeIn">
          {/* Interactive Game: Total Station Traverse Lab */}
          <TotalStationTraverseLab />

          {/* Interactive Game: Leveling Bubble Master */}
          <LevelingBubbleMaster />
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                  Simulation · Differential Leveling & Instrument Height
                </span>
                <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-white mt-1">
                  水準測量 · 儀高法 (HI) 與高差法 (ΔH) 實習計算模擬器
                </h2>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="rounded-lg bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 text-emerald-700 dark:text-emerald-300 font-bold border border-emerald-200 dark:border-emerald-900/50">
                  視線高 HI = {levelingResults.hi} m
                </span>
                <span className="rounded-lg bg-blue-50 dark:bg-blue-950/60 px-3 py-1 text-blue-700 dark:text-blue-300 font-bold border border-blue-200 dark:border-blue-900/50">
                  前視點高程 Elev_TP = {levelingResults.tpElevation} m
                </span>
              </div>
            </div>

            {/* Leveling Controls */}
            <div className="grid gap-6 sm:grid-cols-3 rounded-2xl bg-slate-50 dark:bg-slate-950/60 p-5 border border-slate-200/80 dark:border-slate-800">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                  <span>基準點高程 Elev_BM</span>
                  <span className="text-emerald-600 dark:text-emerald-400">{bmElevation} m</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  value={bmElevation}
                  onChange={(e) => setBmElevation(Number(e.target.value))}
                  className="w-full accent-emerald-600"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                  <span>後視讀數 BS (Back Sight)</span>
                  <span className="text-blue-600 dark:text-blue-400">+{backSight} m</span>
                </div>
                <input
                  type="range"
                  min="0.2"
                  max="3.5"
                  step="0.005"
                  value={backSight}
                  onChange={(e) => setBackSight(Number(e.target.value))}
                  className="w-full accent-blue-600"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                  <span>前視讀數 FS (Fore Sight)</span>
                  <span className="text-amber-600 dark:text-amber-400">-{foreSight} m</span>
                </div>
                <input
                  type="range"
                  min="0.2"
                  max="3.5"
                  step="0.005"
                  value={foreSight}
                  onChange={(e) => setForeSight(Number(e.target.value))}
                  className="w-full accent-amber-600"
                />
              </div>
            </div>

            {/* Leveling Visualizer Diagram */}
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-4">
              <svg viewBox="0 0 600 200" className="w-full h-44 select-none">
                <path d="M 40 160 Q 200 170, 300 150 T 560 120" fill="none" stroke="#78716c" strokeWidth="2" />

                <line x1="80" y1="162" x2="80" y2="70" stroke="#059669" strokeWidth="4" />
                <polygon points="76,162 84,162 80,168" fill="#059669" />
                <text x="80" y="185" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#059669">BM ({bmElevation}m)</text>

                <line x1="520" y1="124" x2="520" y2="35" stroke="#d97706" strokeWidth="4" />
                <polygon points="516,124 524,124 520,130" fill="#d97706" />
                <text x="520" y="145" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#d97706">TP1 ({levelingResults.tpElevation}m)</text>

                <polygon points="280,150 320,150 300,105" fill="#3b82f6" opacity="0.8" />
                <rect x="275" y="95" width="50" height="12" rx="3" fill="#2563eb" />
                <text x="300" y="170" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#2563eb">水準儀測站</text>

                <line x1="75" y1="100" x2="525" y2="100" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="4 4" />
                <text x="300" y="90" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#ef4444">
                  視準軸 HI = {levelingResults.hi} m
                </text>
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* --- Tab 4: Concrete Materials & Slump --- */}
      {activeTab === 'materials' && (
        <div className="space-y-8 animate-fadeIn">
          {/* Interactive Game: Concrete Slump Lab */}
          <ConcreteSlumpLab />

          {/* Interactive Game: Site Hazard Detective */}
          <SiteHazardDetective />
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                  Simulation · Concrete Mix & Compressive Strength
                </span>
                <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-white mt-1">
                  混凝土配比 · 水灰比 (W/C) 與 28 天抗壓強度 (fc&apos;) 經驗公式模擬
                </h2>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="rounded-lg bg-amber-50 dark:bg-amber-950/60 px-3 py-1 text-amber-700 dark:text-amber-300 font-bold border border-amber-200 dark:border-amber-900/50">
                  水灰比 W/C = {concreteResults.wcRatio}
                </span>
                <span className="rounded-lg bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 text-emerald-700 dark:text-emerald-300 font-bold border border-emerald-200 dark:border-emerald-900/50">
                  預估強度 fc&apos; = {concreteResults.fc28} MPa
                </span>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 rounded-2xl bg-slate-50 dark:bg-slate-950/60 p-5 border border-slate-200/80 dark:border-slate-800">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                  <span>單位用水量 W</span>
                  <span className="text-blue-600 dark:text-blue-400">{waterWeight} kg/m³</span>
                </div>
                <input
                  type="range"
                  min="140"
                  max="220"
                  step="5"
                  value={waterWeight}
                  onChange={(e) => setWaterWeight(Number(e.target.value))}
                  className="w-full accent-blue-600"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                  <span>單位水泥量 C</span>
                  <span className="text-slate-700 dark:text-slate-300">{cementWeight} kg/m³</span>
                </div>
                <input
                  type="range"
                  min="240"
                  max="500"
                  step="10"
                  value={cementWeight}
                  onChange={(e) => setCementWeight(Number(e.target.value))}
                  className="w-full accent-slate-600"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 font-mono text-xs space-y-1">
                <span className="text-slate-500">水灰比 (W/C)</span>
                <strong className="text-xl text-amber-600 block">{concreteResults.wcRatio}</strong>
                <span className="text-[11px] text-slate-400">CNS 規範：一般 RC 結構上限通常 ≤ 0.55</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 font-mono text-xs space-y-1">
                <span className="text-slate-500">預估 28 天抗壓強度</span>
                <strong className="text-xl text-emerald-600 block">{concreteResults.fc28} MPa</strong>
                <span className="text-[11px] text-slate-400">約合 {Number((concreteResults.fc28 * 10.197).toFixed(0))} kgf/cm²</span>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 font-mono text-xs space-y-1">
                <span className="text-slate-500">預估坍度 (Slump)</span>
                <strong className="text-xl text-blue-600 block">{concreteResults.slump} cm</strong>
                <span className="text-[11px] text-slate-400">工作性良好範圍：15 ± 3.8 cm</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- Tab 5: Building Physics --- */}
      {activeTab === 'physics' && (
        <div className="space-y-8 animate-fadeIn">
          {/* Interactive Component: Lofi Soundscape & Pomodoro Timer */}
          <LofiArchitectSoundscape />

          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                  Simulation · Thermal Transmittance (U-Value) & Envelope
                </span>
                <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-white mt-1">
                  外殼節能 · 外牆熱傳透率 U-Value 與節能玻璃熱阻計算
                </h2>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="rounded-lg bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 text-emerald-700 dark:text-emerald-300 font-bold border border-emerald-200 dark:border-emerald-900/50">
                  外牆熱傳透率 U = {physicsResults.uValue} W/(m²·K)
                </span>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-3 rounded-2xl bg-slate-50 dark:bg-slate-950/60 p-5 border border-slate-200/80 dark:border-slate-800">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                  <span>RC 牆體厚度</span>
                  <span className="text-slate-700 dark:text-slate-300">{wallThickness} cm</span>
                </div>
                <input
                  type="range"
                  min="12"
                  max="35"
                  step="1"
                  value={wallThickness}
                  onChange={(e) => setWallThickness(Number(e.target.value))}
                  className="w-full accent-slate-600"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                  <span>XPS 隔熱保溫層</span>
                  <span className="text-emerald-600 dark:text-emerald-400">{insulationThickness} cm</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="15"
                  step="1"
                  value={insulationThickness}
                  onChange={(e) => setInsulationThickness(Number(e.target.value))}
                  className="w-full accent-emerald-600"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                  <span>外窗玻璃配置</span>
                  <span className="text-blue-600 dark:text-blue-400">{glassType.toUpperCase()}</span>
                </div>
                <select
                  value={glassType}
                  onChange={(e) => setGlassType(e.target.value as typeof glassType)}
                  className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 p-2 text-xs font-mono font-bold text-slate-900 dark:text-white"
                >
                  <option value="single">單層透明玻璃 (6mm)</option>
                  <option value="double">雙層中空玻璃 (6+12A+6mm)</option>
                  <option value="low-e">Low-E 低輻射中空玻璃</option>
                </select>
              </div>
            </div>

            {/* Results */}
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-5 space-y-3 font-mono text-xs">
                <span className="font-bold text-slate-900 dark:text-white block">外牆構造分層熱阻明細</span>
                <div className="space-y-2 text-slate-600 dark:text-slate-400">
                  <div className="flex justify-between"><span>內表面熱傳阻抗 R_si</span><span>0.13</span></div>
                  <div className="flex justify-between"><span>室內粉刷層 (2cm)</span><span>0.025</span></div>
                  <div className="flex justify-between"><span>RC 鋼筋混凝土 ({wallThickness}cm)</span><span>{Number(((wallThickness/100)/1.7).toFixed(3))}</span></div>
                  <div className="flex justify-between"><span>XPS 隔熱保溫層 ({insulationThickness}cm)</span><span className="text-emerald-600 font-bold">+{Number(((insulationThickness/100)/0.034).toFixed(3))}</span></div>
                  <div className="flex justify-between"><span>外表面熱傳阻抗 R_se</span><span>0.04</span></div>
                </div>
                <div className="border-t border-slate-200 dark:border-slate-800 pt-2 flex justify-between font-bold text-slate-900 dark:text-white">
                  <span>總熱阻 ΣR</span>
                  <span>{physicsResults.totalR} m²·K/W</span>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-5 space-y-3 font-mono text-xs">
                <span className="font-bold text-slate-900 dark:text-white block">門窗節能指標</span>
                <div className="space-y-2 text-slate-600 dark:text-slate-400">
                  <div className="flex justify-between"><span>玻璃熱傳透率 U</span><strong className="text-blue-600 dark:text-blue-400">{physicsResults.glassU} W/(m²·K)</strong></div>
                  <div className="flex justify-between"><span>日光熱獲得係數 SHGC</span><strong className="text-amber-600 dark:text-amber-400">{physicsResults.glassShgc}</strong></div>
                </div>
                <p className="text-slate-500 text-[11px] leading-relaxed pt-2">
                  台灣建築技術規則規範：外牆平均熱傳透率 U_avg ≤ 3.5 W/(m²·K)；屋頂熱傳透率 U_roof ≤ 0.8 W/(m²·K)。
                </p>
              </div>

              <div className="rounded-2xl bg-teal-50/60 dark:bg-teal-950/30 p-5 border border-teal-200 dark:border-teal-900/50 space-y-2 font-mono text-xs">
                <span className="font-bold text-teal-900 dark:text-teal-200 block">綠建築 EEWH 外殼耗能 (ENVLOAD)</span>
                <p className="text-slate-700 dark:text-slate-300 font-sans text-xs leading-relaxed">
                  在亞熱帶氣候中，<strong>遮陽與 Low-E 玻璃</strong>對降低空調耗電的貢獻遠大於增加厚重牆體。適度配置深遮陽（遮陽係數 Ks）可阻絕 60% 以上直接日射輻射熱。
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Footer CTAs */}
      <section className="rounded-3xl bg-slate-950 text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center sm:text-left">
          <h3 className="font-serif text-2xl font-bold">準備好進入更多專業章節了嗎？</h3>
          <p className="text-slate-400 text-sm max-w-lg">
            將互動實驗室的直觀體會，帶回 13 科 99 個完整課程章節與 925 道統測歷屆解析。
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/field-guide"
            className="inline-flex items-center gap-2 rounded-xl bg-teal-600 hover:bg-teal-500 px-5 py-3 font-mono text-xs font-bold text-white transition-colors"
          >
            <BookOpen className="size-4" /> 探索營造現場手冊 →
          </Link>
          <Link
            href="/curriculum"
            className="inline-flex items-center gap-2 rounded-xl bg-white hover:bg-slate-100 px-5 py-3 font-mono text-xs font-bold text-slate-950 transition-colors"
          >
            返回課程地圖
          </Link>
        </div>
      </section>
    </div>
  );
}
