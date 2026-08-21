'use client';

import React, { useState } from 'react';
import MathText from '@/components/MathText';

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

  // === 4. Mohr's Circle State ===
  const [sigmaX, setSigmaX] = useState<number>(80); // MPa
  const [sigmaY, setSigmaY] = useState<number>(-20); // MPa
  const [tauXY, setTauXY] = useState<number>(40); // MPa

  // === 5. Section Properties State ===
  const [beamSectionType, setBeamSectionType] = useState<'rect' | 'ibeam' | 'tbeam'>('ibeam');
  const [appliedMoment, setAppliedMoment] = useState<number>(50); // kN.m

  // === 6. Truss Zero-force Member State ===
  const [trussLoadJoint, setTrussLoadJoint] = useState<'C' | 'D' | 'E'>('D');

  // === Computations ===
  // 1. Vector
  const rad = (forceAngle * Math.PI) / 180;
  const fx = forceMag * Math.cos(rad);
  const fy = forceMag * Math.sin(rad);

  // 2. Beam
  const ra = (loadP * (beamLength - loadPos)) / beamLength;
  const rb = (loadP * loadPos) / beamLength;
  const maxMoment = (loadP * loadPos * (beamLength - loadPos)) / beamLength;

  // 3. Incline
  const g = 9.8;
  const weight = blockMass * g;
  const inclineRad = (inclineAngle * Math.PI) / 180;
  const wParallel = weight * Math.sin(inclineRad);
  const wPerp = weight * Math.cos(inclineRad);
  const maxFriction = frictionCoeff * wPerp;
  const willSlide = wParallel > maxFriction;

  // 4. Mohr's Circle Computations
  const sigmaAvg = (sigmaX + sigmaY) / 2;
  const mohrR = Math.sqrt(Math.pow((sigmaX - sigmaY) / 2, 2) + Math.pow(tauXY, 2));
  const sigma1 = sigmaAvg + mohrR;
  const sigma2 = sigmaAvg - mohrR;
  const tauMax = mohrR;
  const thetaP2Deg = ((Math.atan2(2 * tauXY, sigmaX - sigmaY) * 180) / Math.PI);
  const thetaPDeg = thetaP2Deg / 2;

  // 5. Section Properties Computations
  let sectionIx = 10000;
  let sectionHeight = 300;
  let sectionName = 'H 300 x 150 鋼樑';
  if (beamSectionType === 'rect') {
    sectionHeight = 400;
    sectionIx = (20 * Math.pow(40, 3)) / 12;
    sectionName = '矩形斷面 200 x 400 mm';
  } else if (beamSectionType === 'tbeam') {
    sectionHeight = 350;
    sectionIx = 14500;
    sectionName = 'T 型鋼樑 350 x 200 mm';
  } else {
    sectionHeight = 300;
    sectionIx = 7210;
    sectionName = 'H 型鋼樑 300 x 150 mm';
  }
  const yMax = sectionHeight / 2 / 10;
  const maxFlexuralStressMPa = (appliedMoment * 100 * yMax) / (sectionIx / 10);

  return (
    <div className="rounded-xl border border-teal-200/80 bg-teal-50/20 dark:border-teal-800/60 dark:bg-teal-950/20 p-5 sm:p-6 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-teal-200/60 dark:border-teal-800/40 pb-3">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-lg bg-teal-600 text-white text-xs font-mono font-bold">
            📐
          </span>
          <div>
            <h3 className="font-serif text-base font-bold text-slate-900 dark:text-white">
              工程力學 · 結構受力與應力變形互動模擬實驗室
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              拖動滑桿即時觀察向量分解、梁剪力彎矩、桁架零桿、莫爾圓主應力與斷面慣性矩
            </p>
          </div>
        </div>
        <span className="rounded-full bg-teal-600/10 px-2.5 py-0.5 text-xs font-mono font-bold text-teal-700 dark:text-teal-300 border border-teal-600/20">
          統測專業一（力學）
        </span>
      </div>

      {topicSlug.includes('truss') ? (
        // === 4. Truss Analysis & Zero-Force Members ===
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
            <span className="font-bold text-slate-700 dark:text-slate-300">選擇集中載重作用節點 (Joint Load P=50kN)：</span>
            <div className="flex gap-1 bg-white dark:bg-slate-900 p-1 rounded-lg border border-slate-200 dark:border-slate-800">
              {(['C', 'D', 'E'] as const).map((jt) => (
                <button
                  key={jt}
                  onClick={() => setTrussLoadJoint(jt)}
                  className={`px-3 py-1 rounded font-bold transition-colors ${trussLoadJoint === jt ? 'bg-teal-600 text-white' : 'text-slate-600 dark:text-slate-400'}`}
                >
                  節點 {jt}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 items-center rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 shadow-inner">
            <div className="relative aspect-video rounded-lg bg-slate-50 dark:bg-slate-950 p-2 flex items-center justify-center">
              <svg viewBox="0 0 340 180" className="w-full h-full">
                <line x1="40" y1="130" x2="280" y2="130" stroke="#0D9488" strokeWidth="4" />
                <line x1="120" y1="50" x2="200" y2="50" stroke="#0D9488" strokeWidth="4" />
                <line x1="40" y1="130" x2="120" y2="50" stroke="#0D9488" strokeWidth="3" />
                <line x1="120" y1="130" x2="120" y2="50" stroke={trussLoadJoint === 'C' ? '#DC2626' : '#10B981'} strokeWidth="3" strokeDasharray={trussLoadJoint === 'C' ? 'none' : '4 2'} />
                <line x1="120" y1="50" x2="200" y2="130" stroke="#0D9488" strokeWidth="3" />
                <line x1="200" y1="50" x2="200" y2="130" stroke={trussLoadJoint === 'E' ? '#DC2626' : '#10B981'} strokeWidth="3" strokeDasharray={trussLoadJoint === 'E' ? 'none' : '4 2'} />
                <line x1="200" y1="50" x2="280" y2="130" stroke="#0D9488" strokeWidth="3" />

                <circle cx="40" cy="130" r="5" fill="#0D9488" />
                <text x="30" y="145" fontSize="10" className="font-bold fill-slate-700 font-mono">A</text>
                <circle cx="120" cy="130" r="5" fill="#0D9488" />
                <text x="115" y="145" fontSize="10" className="font-bold fill-slate-700 font-mono">B</text>
                <circle cx="200" cy="130" r="5" fill="#0D9488" />
                <text x="195" y="145" fontSize="10" className="font-bold fill-slate-700 font-mono">D</text>
                <circle cx="280" cy="130" r="5" fill="#0D9488" />
                <text x="285" y="145" fontSize="10" className="font-bold fill-slate-700 font-mono">F</text>
                <circle cx="120" cy="50" r="5" fill="#0D9488" />
                <text x="115" y="42" fontSize="10" className="font-bold fill-slate-700 font-mono">C</text>
                <circle cx="200" cy="50" r="5" fill="#0D9488" />
                <text x="195" y="42" fontSize="10" className="font-bold fill-slate-700 font-mono">E</text>

                {(() => {
                  const jPos: Record<'C' | 'D' | 'E', [number, number]> = {
                    C: [120, 50],
                    D: [200, 130],
                    E: [200, 50],
                  };
                  const [lx, ly] = jPos[trussLoadJoint];
                  return (
                    <g>
                      <line x1={lx} y1={ly - 30} x2={lx} y2={ly - 5} stroke="#DC2626" strokeWidth="3" />
                      <polygon points={`${lx},${ly} ${lx - 4},${ly - 10} ${lx + 4},${ly - 10}`} fill="#DC2626" />
                      <text x={lx + 6} y={ly - 20} fontSize="10" className="fill-red-600 font-bold font-mono">P=50kN</text>
                    </g>
                  );
                })()}
              </svg>
            </div>

            <div className="space-y-2 text-xs">
              <span className="text-xs font-mono font-bold text-teal-700 dark:text-teal-300 uppercase tracking-wider block">
                零桿判別法則 (Zero-Force Member Rules)
              </span>
              <ul className="space-y-1.5 text-slate-600 dark:text-slate-300">
                <li className="p-2 rounded bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
                  <strong>法則 1 (L型無載重)：</strong> 兩桿相交於無載重節點且不共線，則兩桿皆為零桿（如無外力時的端節點）。
                </li>
                <li className="p-2 rounded bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
                  <strong>法則 2 (T型無載重)：</strong> 三桿相交於無載重節點，其中兩桿共線，則<strong>非共線之第三桿必為零桿</strong>（綠色虛線桿）。
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : topicSlug.includes('stress') || topicSlug.includes('mohr') ? (
        // === 5. Mohr's Circle Visualizer ===
        <div className="space-y-4">
          <div className="grid sm:grid-cols-3 gap-3">
            <div className="space-y-1 text-xs font-mono">
              <div className="flex justify-between font-bold">
                <span>水平應力 (σx):</span>
                <span className="text-teal-600">{sigmaX} MPa</span>
              </div>
              <input
                type="range"
                min="-100"
                max="150"
                value={sigmaX}
                onChange={(e) => setSigmaX(Number(e.target.value))}
                className="w-full accent-teal-600 cursor-pointer"
              />
            </div>

            <div className="space-y-1 text-xs font-mono">
              <div className="flex justify-between font-bold">
                <span>垂直應力 (σy):</span>
                <span className="text-blue-600">{sigmaY} MPa</span>
              </div>
              <input
                type="range"
                min="-100"
                max="150"
                value={sigmaY}
                onChange={(e) => setSigmaY(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />
            </div>

            <div className="space-y-1 text-xs font-mono">
              <div className="flex justify-between font-bold">
                <span>剪應力 (τxy):</span>
                <span className="text-orange-600">{tauXY} MPa</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={tauXY}
                onChange={(e) => setTauXY(Number(e.target.value))}
                className="w-full accent-orange-600 cursor-pointer"
              />
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 items-center rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 shadow-inner">
            <div className="relative aspect-square max-h-[260px] w-full rounded-lg bg-slate-50 dark:bg-slate-950 p-2 flex items-center justify-center">
              <svg viewBox="-140 -140 280 280" className="w-full h-full">
                <line x1="-120" y1="0" x2="120" y2="0" stroke="#94A3B8" strokeWidth="1" />
                <line x1="0" y1="-120" x2="0" y2="120" stroke="#94A3B8" strokeWidth="1" />
                <text x="105" y="-5" fontSize="9" className="fill-slate-500 font-mono font-bold">σ</text>
                <text x="5" y="-105" fontSize="9" className="fill-slate-500 font-mono font-bold">τ (順時針)</text>

                {(() => {
                  const scale = 0.6;
                  const cx = sigmaAvg * scale;
                  const r = Math.max(5, mohrR * scale);
                  const px = sigmaX * scale;
                  const py = -tauXY * scale;
                  const qx = sigmaY * scale;
                  const qy = tauXY * scale;

                  return (
                    <g>
                      <circle cx={cx} cy="0" r={r} fill="rgba(13, 148, 136, 0.15)" stroke="#0D9488" strokeWidth="2" />
                      <circle cx={cx} cy="0" r="3" fill="#0D9488" />
                      <line x1={px} y1={py} x2={qx} y2={qy} stroke="#EA580C" strokeWidth="2" strokeDasharray="3 2" />
                      <circle cx={px} cy={py} r="4" fill="#EA580C" />
                      <circle cx={qx} cy={qy} r="4" fill="#EA580C" />
                      <circle cx={cx + r} cy="0" r="4" fill="#2563EB" />
                      <circle cx={cx - r} cy="0" r="4" fill="#2563EB" />
                    </g>
                  );
                })()}
              </svg>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
                  <div className="text-[10px] text-blue-700 dark:text-blue-300 font-bold">最大主應力 σ1</div>
                  <div className="text-base font-bold text-blue-900 dark:text-blue-100">{sigma1.toFixed(1)} MPa</div>
                </div>
                <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
                  <div className="text-[10px] text-blue-700 dark:text-blue-300 font-bold">最小主應力 σ2</div>
                  <div className="text-base font-bold text-blue-900 dark:text-blue-100">{sigma2.toFixed(1)} MPa</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="p-2.5 rounded-lg bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800">
                  <div className="text-[10px] text-orange-700 dark:text-orange-300 font-bold">最大剪應力 τmax</div>
                  <div className="text-base font-bold text-orange-900 dark:text-orange-100">{tauMax.toFixed(1)} MPa</div>
                </div>
                <div className="p-2.5 rounded-lg bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800">
                  <div className="text-[10px] text-teal-700 dark:text-teal-300 font-bold">主平面夾角 θp</div>
                  <div className="text-base font-bold text-teal-900 dark:text-teal-100">{thetaPDeg.toFixed(1)}°</div>
                </div>
              </div>

              <div className="text-[11px] text-slate-500 font-sans">
                <MathText content="💡 **莫爾圓公式：** 圓心 $C = \left(\frac{\sigma_x+\sigma_y}{2}, 0\right)$，半徑 $R = \sqrt{\left(\frac{\sigma_x-\sigma_y}{2}\right)^2 + \tau_{xy}^2}$。主應力作用面上**剪應力必為零**！" />
              </div>
            </div>
          </div>
        </div>
      ) : topicSlug.includes('section') || topicSlug.includes('inertia') || topicSlug.includes('bending') ? (
        // === 6. Section Properties & Flexural Stress ===
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
            <div className="flex gap-1 bg-white dark:bg-slate-900 p-1 rounded-lg border border-slate-200 dark:border-slate-800">
              <button
                onClick={() => setBeamSectionType('ibeam')}
                className={`px-3 py-1 rounded font-bold transition-colors ${beamSectionType === 'ibeam' ? 'bg-teal-600 text-white' : 'text-slate-600 dark:text-slate-400'}`}
              >
                H 型鋼斷面
              </button>
              <button
                onClick={() => setBeamSectionType('rect')}
                className={`px-3 py-1 rounded font-bold transition-colors ${beamSectionType === 'rect' ? 'bg-teal-600 text-white' : 'text-slate-600 dark:text-slate-400'}`}
              >
                矩形混凝土梁
              </button>
              <button
                onClick={() => setBeamSectionType('tbeam')}
                className={`px-3 py-1 rounded font-bold transition-colors ${beamSectionType === 'tbeam' ? 'bg-teal-600 text-white' : 'text-slate-600 dark:text-slate-400'}`}
              >
                T 型梁斷面
              </button>
            </div>

            <div className="flex items-center gap-2">
              <span>作用彎矩 M:</span>
              <span className="font-bold text-teal-600">{appliedMoment} kN·m</span>
              <input
                type="range"
                min="10"
                max="200"
                step="5"
                value={appliedMoment}
                onChange={(e) => setAppliedMoment(Number(e.target.value))}
                className="w-24 accent-teal-600 cursor-pointer"
              />
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 items-center rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 shadow-inner">
            <div className="relative aspect-video rounded-lg bg-slate-50 dark:bg-slate-950 p-2 flex items-center justify-center">
              <svg viewBox="0 0 300 180" className="w-full h-full">
                {beamSectionType === 'ibeam' ? (
                  <g>
                    <rect x="50" y="30" width="60" height="15" fill="#0D9488" />
                    <rect x="74" y="45" width="12" height="90" fill="#0D9488" />
                    <rect x="50" y="135" width="60" height="15" fill="#0D9488" />
                  </g>
                ) : beamSectionType === 'rect' ? (
                  <rect x="55" y="30" width="50" height="120" fill="#0D9488" />
                ) : (
                  <g>
                    <rect x="40" y="30" width="80" height="20" fill="#0D9488" />
                    <rect x="70" y="50" width="20" height="100" fill="#0D9488" />
                  </g>
                )}

                <line x1="30" y1="90" x2="270" y2="90" stroke="#DC2626" strokeWidth="1.5" strokeDasharray="4 2" />
                <text x="32" y="85" fontSize="8" className="fill-red-600 font-mono font-bold">中性軸 (N.A.) σ=0</text>

                <line x1="200" y1="30" x2="200" y2="150" stroke="#94A3B8" strokeWidth="1.5" />
                <polygon points="200,90 240,30 200,30" fill="rgba(220, 38, 38, 0.2)" stroke="#DC2626" strokeWidth="1.5" />
                <polygon points="200,90 160,150 200,150" fill="rgba(37, 99, 235, 0.2)" stroke="#2563EB" strokeWidth="1.5" />
                <text x="210" y="45" fontSize="9" className="fill-red-600 font-bold font-mono">壓應力 (-σ)</text>
                <text x="145" y="145" fontSize="9" className="fill-blue-600 font-bold font-mono">拉應力 (+σ)</text>
              </svg>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-1">
                <div className="font-bold text-slate-900 dark:text-white">{sectionName}</div>
                <div className="text-slate-500">斷面慣性矩 Ix ≈ {Math.round(sectionIx)} cm⁴</div>
                <div className="text-slate-500">梁深高度 H = {sectionHeight} mm</div>
              </div>

              <div className="p-3 rounded-lg bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800">
                <div className="text-[10px] text-teal-700 dark:text-teal-300 font-bold uppercase">最外緣最大彎曲應力 σmax</div>
                <div className="text-lg font-bold text-teal-900 dark:text-teal-100">
                  {maxFlexuralStressMPa.toFixed(1)} <span className="text-xs font-normal">MPa (N/mm²)</span>
                </div>
              </div>

              <div className="text-[11px] text-slate-500 font-sans">
                <MathText content="💡 **梁彎曲應力公式：** $\sigma = \frac{M \cdot y}{I_x}$。中性軸處應力為零，最外緣 ($y = c$) 應力最大；中性軸之上受壓、之下受拉。" />
              </div>
            </div>
          </div>
        </div>
      ) : topicSlug.includes('vector') || topicSlug.includes('force') || topicSlug.includes('equilibrium') || topicSlug.includes('parallel') || topicSlug.includes('nonconcurrent') || topicSlug.includes('spatial') ? (
        // === 1. Vector Resolution Simulator ===
        <div className="grid gap-6 lg:grid-cols-2 items-center">
          <div className="relative aspect-square max-h-[300px] w-full rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 flex items-center justify-center overflow-hidden shadow-inner">
            <svg viewBox="-150 -150 300 300" className="w-full h-full">
              <line x1="-130" y1="0" x2="130" y2="0" stroke="currentColor" strokeWidth="1" className="text-slate-300 dark:text-slate-700" />
              <line x1="0" y1="-130" x2="0" y2="130" stroke="currentColor" strokeWidth="1" className="text-slate-300 dark:text-slate-700" />
              
              <line
                x1="0"
                y1="0"
                x2={(fx / 150) * 120}
                y2="0"
                stroke="#0284C7"
                strokeWidth="2.5"
                strokeDasharray="4 2"
              />
              <line
                x1="0"
                y1="0"
                x2="0"
                y2={-(fy / 150) * 120}
                stroke="#0D9488"
                strokeWidth="2.5"
                strokeDasharray="4 2"
              />

              <line
                x1="0"
                y1="0"
                x2={(fx / 150) * 120}
                y2={-(fy / 150) * 120}
                stroke="#EA580C"
                strokeWidth="3.5"
                markerEnd="url(#arrowhead)"
              />

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
      ) : topicSlug.includes('beam') || topicSlug.includes('shear') ? (
        // === 2. Simple Beam SFD/BMD Visualizer ===
        <div className="space-y-5">
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

          <div className="rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 space-y-4 shadow-inner">
            <div>
              <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-1">
                梁結構受力與支承反力
              </span>
              <svg viewBox="0 0 500 80" className="w-full h-20">
                <line x1="50" y1="45" x2="450" y2="45" stroke="#1E293B" strokeWidth="8" className="dark:stroke-slate-200" />
                <polygon points="50,49 40,65 60,65" fill="#0D9488" />
                <line x1="35" y1="65" x2="65" y2="65" stroke="#0D9488" strokeWidth="2" />
                <text x="45" y="77" fontSize="10" className="font-bold fill-slate-700 dark:fill-slate-300 font-mono">A</text>
                <circle cx="450" cy="56" r="6" fill="none" stroke="#0284C7" strokeWidth="2" />
                <line x1="435" y1="65" x2="465" y2="65" stroke="#0284C7" strokeWidth="2" />
                <text x="445" y="77" fontSize="10" className="font-bold fill-slate-700 dark:fill-slate-300 font-mono">B</text>

                {(() => {
                  const xPos = 50 + (loadPos / beamLength) * 400;
                  return (
                    <g>
                      <line x1={xPos} y1="10" x2={xPos} y2="41" stroke="#DC2626" strokeWidth="3" />
                      <polygon points={`${xPos},43 ${xPos - 5},30 ${xPos + 5},30`} fill="#DC2626" />
                      <text x={xPos - 18} y="8" fontSize="11" className="fill-red-600 font-bold font-mono">
                        P={loadP}kN
                      </text>
                    </g>
                  );
                })()}

                <text x="15" y="42" fontSize="10" className="fill-teal-700 dark:fill-teal-400 font-bold font-mono">
                  RA={ra.toFixed(1)}kN
                </text>
                <text x="415" y="42" fontSize="10" className="fill-sky-700 dark:fill-sky-400 font-bold font-mono">
                  RB={rb.toFixed(1)}kN
                </text>
              </svg>
            </div>

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
        // === 3. Friction & Incline Default ===
        <div className="grid gap-6 sm:grid-cols-2 items-center">
          <div className="relative aspect-video rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 flex items-center justify-center shadow-inner">
            <svg viewBox="0 0 300 180" className="w-full h-full">
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
                    <text x={x0 + 40} y={y0 - 6} fontSize="10" className="fill-amber-600 font-mono font-bold">
                      θ = {inclineAngle}°
                    </text>

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
