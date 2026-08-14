'use client';

import React, { useState } from 'react';

interface MechanicsVisualizerProps {
  topicSlug: string;
}

export default function MechanicsVisualizer({ topicSlug }: MechanicsVisualizerProps) {
  // === 1. Vector Resolution Simulator State ===
  const [forceMag, setForceMag] = useState<number>(100);
  const [forceAngle, setForceAngle] = useState<number>(30);

  // === 2. Simple Beam SFD/BMD Simulator State ===
  const [beamLength, setBeamLength] = useState<number>(6); // meters
  const [loadP, setLoadP] = useState<number>(60); // kN
  const [loadPos, setLoadPos] = useState<number>(2); // meters from A

  // === 3. Friction & Inclined Plane State ===
  const [inclineAngle, setInclineAngle] = useState<number>(25);
  const [blockMass, setBlockMass] = useState<number>(20); // kg
  const [frictionCoeff, setFrictionCoeff] = useState<number>(0.4);

  // === Computations ===
  // Vector
  const rad = (forceAngle * Math.PI) / 180;
  const fx = forceMag * Math.cos(rad);
  const fy = forceMag * Math.sin(rad);

  // Beam reactions: RA + RB = P, sumMA = 0 => RB * L = P * a => RB = P * a / L, RA = P * (L - a) / L
  const ra = (loadP * (beamLength - loadPos)) / beamLength;
  const rb = (loadP * loadPos) / beamLength;
  const maxMoment = (loadP * loadPos * (beamLength - loadPos)) / beamLength;

  // Incline
  const g = 9.8;
  const weight = blockMass * g;
  const inclineRad = (inclineAngle * Math.PI) / 180;
  const wParallel = weight * Math.sin(inclineRad);
  const wPerp = weight * Math.cos(inclineRad);
  const maxFriction = frictionCoeff * wPerp;
  const willSlide = wParallel > maxFriction;

  return (
    <div className="rounded-xl border border-teal-200/80 bg-teal-50/20 dark:border-teal-800/60 dark:bg-teal-950/20 p-5 sm:p-6 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-teal-200/60 dark:border-teal-800/40 pb-3">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-lg bg-teal-600 text-white text-xs font-mono font-bold">
            📐
          </span>
          <div>
            <h3 className="font-serif text-base font-bold text-slate-900 dark:text-white">
              工程力學 · 動態互動結構模擬器
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              拖動滑桿即時觀察力學數值、向量幾何與結構反力變化
            </p>
          </div>
        </div>
        <span className="rounded-full bg-teal-600/10 px-2.5 py-0.5 text-xs font-mono font-bold text-teal-700 dark:text-teal-300 border border-teal-600/20">
          統測必考力學分析
        </span>
      </div>

      {/* Simulator Selector or Sub-views based on topic */}
      {topicSlug.includes('vector') || topicSlug.includes('force') || topicSlug.includes('equilibrium') || topicSlug.includes('parallel') || topicSlug.includes('nonconcurrent') || topicSlug.includes('spatial') ? (
        // Vector Resolution Simulator
        <div className="grid gap-6 lg:grid-cols-2 items-center">
          {/* SVG Canvas */}
          <div className="relative aspect-square max-h-[300px] w-full rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 flex items-center justify-center overflow-hidden shadow-inner">
            <svg viewBox="-150 -150 300 300" className="w-full h-full">
              {/* Grid axes */}
              <line x1="-130" y1="0" x2="130" y2="0" stroke="currentColor" strokeWidth="1" className="text-slate-300 dark:text-slate-700" />
              <line x1="0" y1="-130" x2="0" y2="130" stroke="currentColor" strokeWidth="1" className="text-slate-300 dark:text-slate-700" />
              
              {/* Fx (Horizontal projection) */}
              <line
                x1="0"
                y1="0"
                x2={(fx / 150) * 120}
                y2="0"
                stroke="#0284C7"
                strokeWidth="2.5"
                strokeDasharray="4 2"
              />
              {/* Fy (Vertical projection) */}
              <line
                x1="0"
                y1="0"
                x2="0"
                y2={-(fy / 150) * 120}
                stroke="#0D9488"
                strokeWidth="2.5"
                strokeDasharray="4 2"
              />

              {/* Main Force Vector */}
              <line
                x1="0"
                y1="0"
                x2={(fx / 150) * 120}
                y2={-(fy / 150) * 120}
                stroke="#EA580C"
                strokeWidth="3.5"
                markerEnd="url(#arrowhead)"
              />

              {/* Angle Arc Indicator */}
              <path
                d={`M 35 0 A 35 35 0 0 0 ${35 * Math.cos(rad)} ${-35 * Math.sin(rad)}`}
                fill="none"
                stroke="#EA580C"
                strokeWidth="1.5"
              />
              <text
                x={45 * Math.cos(rad / 2)}
                y={-45 * Math.sin(rad / 2)}
                fontSize="10"
                className="fill-orange-600 font-mono font-bold"
              >
                {forceAngle}°
              </text>

              {/* Markers */}
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="8"
                  markerHeight="6"
                  refX="6"
                  refY="3"
                  orient="auto"
                >
                  <polygon points="0 0, 8 3, 0 6" fill="#EA580C" />
                </marker>
              </defs>
            </svg>
          </div>

          {/* Controls & Realtime Math */}
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono font-bold">
                <span className="text-slate-700 dark:text-slate-300">合力大小 |F|:</span>
                <span className="text-orange-600 dark:text-orange-400">{forceMag} N</span>
              </div>
              <input
                type="range"
                min="10"
                max="150"
                value={forceMag}
                onChange={(e) => setForceMag(Number(e.target.value))}
                className="w-full accent-orange-600"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono font-bold">
                <span className="text-slate-700 dark:text-slate-300">夾角 θ:</span>
                <span className="text-orange-600 dark:text-orange-400">{forceAngle}°</span>
              </div>
              <input
                type="range"
                min="0"
                max="90"
                value={forceAngle}
                onChange={(e) => setForceAngle(Number(e.target.value))}
                className="w-full accent-orange-600"
              />
            </div>

            {/* Computation Output Badges */}
            <div className="grid grid-cols-2 gap-2 pt-2">
              <div className="rounded-lg bg-sky-50 dark:bg-sky-950/40 p-2.5 border border-sky-200 dark:border-sky-800/60">
                <div className="text-[10px] font-mono text-sky-700 dark:text-sky-300 font-bold uppercase">水平分力 Fx</div>
                <div className="font-mono text-sm font-bold text-sky-900 dark:text-sky-100">
                  {fx.toFixed(1)} N
                </div>
                <div className="text-[10px] text-slate-500 font-mono">F · cos({forceAngle}°)</div>
              </div>
              <div className="rounded-lg bg-teal-50 dark:bg-teal-950/40 p-2.5 border border-teal-200 dark:border-teal-800/60">
                <div className="text-[10px] font-mono text-teal-700 dark:text-teal-300 font-bold uppercase">垂直分力 Fy</div>
                <div className="font-mono text-sm font-bold text-teal-900 dark:text-teal-100">
                  {fy.toFixed(1)} N
                </div>
                <div className="text-[10px] text-slate-500 font-mono">F · sin({forceAngle}°)</div>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 dark:text-slate-400 italic">
              💡 核心定理：合力平方和等於分力平方和 (Fx² + Fy² = F²)。
            </p>
          </div>
        </div>
      ) : topicSlug.includes('beam') || topicSlug.includes('shear') || topicSlug.includes('bending') || topicSlug.includes('truss') ? (
        // Simple Beam SFD/BMD Visualizer
        <div className="space-y-5">
          {/* Controls */}
          <div className="grid sm:grid-cols-3 gap-3">
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-mono font-bold">
                <span>梁總跨度 (L):</span>
                <span>{beamLength} m</span>
              </div>
              <input
                type="range"
                min="4"
                max="12"
                value={beamLength}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setBeamLength(val);
                  if (loadPos >= val) setLoadPos(val - 1);
                }}
                className="w-full accent-teal-600 cursor-pointer"
              />
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-mono font-bold">
                <span>集中載重 (P):</span>
                <span>{loadP} kN</span>
              </div>
              <input
                type="range"
                min="10"
                max="120"
                value={loadP}
                onChange={(e) => setLoadP(Number(e.target.value))}
                className="w-full accent-red-600 cursor-pointer"
              />
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-mono font-bold">
                <span>載重位置 (a, 距A端):</span>
                <span>{loadPos} m</span>
              </div>
              <input
                type="range"
                min="0.5"
                max={beamLength - 0.5}
                step="0.5"
                value={loadPos}
                onChange={(e) => setLoadPos(Number(e.target.value))}
                className="w-full accent-amber-600 cursor-pointer"
              />
            </div>
          </div>

          {/* SVG Diagram for Beam + SFD + BMD */}
          <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 space-y-4 shadow-inner">
            {/* Beam Schema */}
            <div>
              <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-1">
                1. 梁結構與支承反力 (Structural Beam & Support Reactions)
              </span>
              <svg viewBox="0 0 500 80" className="w-full h-20">
                {/* Main Beam */}
                <line x1="50" y1="45" x2="450" y2="45" stroke="#1E293B" strokeWidth="8" className="dark:stroke-slate-200" />
                {/* Supports */}
                {/* Pin support A */}
                <polygon points="50,49 40,65 60,65" fill="#0D9488" />
                <line x1="35" y1="65" x2="65" y2="65" stroke="#0D9488" strokeWidth="2" />
                <text x="45" y="77" fontSize="10" className="font-bold fill-slate-700 dark:fill-slate-300 font-mono">A</text>
                {/* Roller support B */}
                <circle cx="450" cy="56" r="6" fill="none" stroke="#0284C7" strokeWidth="2" />
                <line x1="435" y1="65" x2="465" y2="65" stroke="#0284C7" strokeWidth="2" />
                <text x="445" y="77" fontSize="10" className="font-bold fill-slate-700 dark:fill-slate-300 font-mono">B</text>

                {/* Point Load Arrow P */}
                {(() => {
                  const xPos = 50 + (loadPos / beamLength) * 400;
                  return (
                    <g>
                      <line x1={xPos} y1="10" x2={xPos} y2="41" stroke="#DC2626" strokeWidth="3" markerEnd="url(#arrow)" />
                      <polygon points={`${xPos},43 ${xPos - 5},30 ${xPos + 5},30`} fill="#DC2626" />
                      <text x={xPos - 18} y="8" fontSize="11" className="fill-red-600 font-bold font-mono">
                        P={loadP}kN
                      </text>
                    </g>
                  );
                })()}

                {/* Reactions Text */}
                <text x="15" y="42" fontSize="10" className="fill-teal-700 dark:fill-teal-400 font-bold font-mono">
                  RA={ra.toFixed(1)}kN
                </text>
                <text x="415" y="42" fontSize="10" className="fill-sky-700 dark:fill-sky-400 font-bold font-mono">
                  RB={rb.toFixed(1)}kN
                </text>
              </svg>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-200 dark:border-slate-800 text-center font-mono">
              <div className="p-2 rounded bg-slate-50 dark:bg-slate-800">
                <div className="text-[10px] text-slate-500">左支承反力 RA</div>
                <div className="text-sm font-bold text-teal-700 dark:text-teal-300">{ra.toFixed(2)} kN</div>
              </div>
              <div className="p-2 rounded bg-slate-50 dark:bg-slate-800">
                <div className="text-[10px] text-slate-500">右支承反力 RB</div>
                <div className="text-sm font-bold text-sky-700 dark:text-sky-300">{rb.toFixed(2)} kN</div>
              </div>
              <div className="p-2 rounded bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60">
                <div className="text-[10px] text-amber-700 dark:text-amber-300">最大彎矩 Mmax</div>
                <div className="text-sm font-bold text-amber-900 dark:text-amber-100">{maxMoment.toFixed(2)} kN·m</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Friction & Incline Default
        <div className="grid gap-6 sm:grid-cols-2 items-center">
          <div className="relative aspect-video rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 flex items-center justify-center shadow-inner">
            <svg viewBox="0 0 300 180" className="w-full h-full">
              {/* Incline Triangle */}
              {(() => {
                const x0 = 30;
                const y0 = 150;
                const len = 220;
                const x1 = x0 + len * Math.cos(inclineRad);
                const y1 = y0 - len * Math.sin(inclineRad);
                return (
                  <g>
                    <polygon
                      points={`${x0},${y0} ${x1},${y1} ${x1},${y0}`}
                      fill="rgba(13, 148, 136, 0.15)"
                      stroke="#0D9488"
                      strokeWidth="2"
                    />
                    <line x1={x0} y1={y0} x2={x1 + 30} y2={y0} stroke="#94A3B8" strokeWidth="1" />
                    {/* Angle arc */}
                    <text x={x0 + 40} y={y0 - 6} fontSize="10" className="fill-amber-600 font-mono font-bold">
                      θ = {inclineAngle}°
                    </text>

                    {/* Block on slope */}
                    {(() => {
                      const bx = x0 + (len * 0.55) * Math.cos(inclineRad);
                      const by = y0 - (len * 0.55) * Math.sin(inclineRad);
                      const deg = -inclineAngle;
                      return (
                        <g transform={`translate(${bx}, ${by}) rotate(${deg})`}>
                          <rect x="-20" y="-30" width="40" height="30" fill={willSlide ? '#EF4444' : '#0D9488'} rx="3" />
                          <text x="-12" y="-12" fontSize="9" fill="#FFF" className="font-mono font-bold">
                            {blockMass}kg
                          </text>
                        </g>
                      );
                    })()}
                  </g>
                );
              })()}
            </svg>
          </div>

          <div className="space-y-3">
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-mono font-bold">
                <span>斜面傾角 (θ):</span>
                <span>{inclineAngle}°</span>
              </div>
              <input
                type="range"
                min="5"
                max="60"
                value={inclineAngle}
                onChange={(e) => setInclineAngle(Number(e.target.value))}
                className="w-full accent-teal-600 cursor-pointer"
              />
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-mono font-bold">
                <span>物體質量 (m):</span>
                <span className="text-blue-700 dark:text-blue-300">{blockMass} kg</span>
              </div>
              <input
                type="range"
                min="5"
                max="50"
                value={blockMass}
                onChange={(e) => setBlockMass(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-mono font-bold">
                <span>靜摩擦係數 (μs):</span>
                <span>{frictionCoeff}</span>
              </div>
              <input
                type="range"
                min="0.1"
                max="0.8"
                step="0.05"
                value={frictionCoeff}
                onChange={(e) => setFrictionCoeff(Number(e.target.value))}
                className="w-full accent-amber-600 cursor-pointer"
              />
            </div>

            <div className={`p-3 rounded-lg border text-xs font-mono ${willSlide ? 'bg-red-50 dark:bg-red-950/40 border-red-200 dark:border-red-800 text-red-900 dark:text-red-200' : 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'}`}>
              <div className="font-bold flex items-center gap-1.5">
                <span>{willSlide ? '⚠️ 物體開始向下滑動！' : '✓ 物體處於靜力平衡（不滑動）'}</span>
              </div>
              <div className="mt-1 space-y-0.5 opacity-90">
                <div>下滑力 W·sin(θ) = {wParallel.toFixed(1)} N</div>
                <div>最大靜摩擦力 fs_max = μ·N = {maxFriction.toFixed(1)} N</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
