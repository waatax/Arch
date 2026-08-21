'use client';

import React, { useState } from 'react';
import MathText from '@/components/MathText';

interface MathScienceVisualizerProps {
  topicSlug: string;
}

export default function MathScienceVisualizer({ topicSlug }: MathScienceVisualizerProps) {
  // === 1. Trigonometric Unit Circle Simulator ===
  const [angleDeg, setAngleDeg] = useState<number>(45);

  const angleRad = (angleDeg * Math.PI) / 180;
  const sinVal = Math.sin(angleRad);
  const cosVal = Math.cos(angleRad);
  const tanVal = Math.tan(angleRad);

  // === 2. pH & Chemistry / Hydration heat state ===
  const [curingDays, setCuringDays] = useState<number>(7);
  // Concrete strength gain curve: fc(t) = fc28 * (t / (4 + 0.85*t))
  const strengthFraction = Math.min(100, Math.round((curingDays / (4 + 0.85 * curingDays)) * 100));

  // === 3. Vector Dot & Cross Product State ===
  const [vectorAngle, setVectorAngle] = useState<number>(60);
  const [vecAMag, setVecAMag] = useState<number>(10);
  const [vecBMag, setVecBMag] = useState<number>(8);

  const vecRad = (vectorAngle * Math.PI) / 180;
  const dotProduct = vecAMag * vecBMag * Math.cos(vecRad);
  const crossProductMag = vecAMag * vecBMag * Math.sin(vecRad);

  // === 4. Chemical Corrosion State ===
  const [concretePH, setConcretePH] = useState<number>(12.5);
  const isCorroding = concretePH < 10.0;

  return (
    <div className="rounded-xl border border-indigo-200/80 bg-indigo-50/20 dark:border-indigo-800/60 dark:bg-indigo-950/20 p-5 sm:p-6 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-indigo-200/60 dark:border-indigo-800/40 pb-3">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-lg bg-indigo-600 text-white text-xs font-mono font-bold">
            ⚡
          </span>
          <div>
            <h3 className="font-serif text-base font-bold text-slate-900 dark:text-white">
              基礎科學 · 向量幾何、水化動力學與電化學腐蝕實驗室
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              探索三角函數單位圓、向量內外積幾何、水泥水化硬化強度曲線與鋼筋電化學鈍化膜
            </p>
          </div>
        </div>
        <span className="rounded-full bg-indigo-600/10 px-2.5 py-0.5 text-xs font-mono font-bold text-indigo-700 dark:text-indigo-300 border border-indigo-600/20">
          統測數 C / 自然科學
        </span>
      </div>

      {topicSlug.includes('vector') || topicSlug.includes('cross') || topicSlug.includes('dot') ? (
        // === 3. Vector Dot & Cross Product Visualizer ===
        <div className="space-y-4">
          <div className="grid sm:grid-cols-3 gap-3 text-xs font-mono">
            <div className="space-y-1">
              <div className="flex justify-between font-bold">
                <span>向量夾角 (θ):</span>
                <span className="text-indigo-600">{vectorAngle}°</span>
              </div>
              <input
                type="range"
                min="0"
                max="180"
                value={vectorAngle}
                onChange={(e) => setVectorAngle(Number(e.target.value))}
                className="w-full accent-indigo-600 cursor-pointer"
              />
            </div>
            <div className="space-y-1">
              <div className="flex justify-between font-bold">
                <span>|向量 A|:</span>
                <span className="text-blue-600">{vecAMag}</span>
              </div>
              <input
                type="range"
                min="2"
                max="15"
                value={vecAMag}
                onChange={(e) => setVecAMag(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />
            </div>
            <div className="space-y-1">
              <div className="flex justify-between font-bold">
                <span>|向量 B|:</span>
                <span className="text-red-600">{vecBMag}</span>
              </div>
              <input
                type="range"
                min="2"
                max="15"
                value={vecBMag}
                onChange={(e) => setVecBMag(Number(e.target.value))}
                className="w-full accent-red-600 cursor-pointer"
              />
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 items-center rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 shadow-inner">
            <div className="relative aspect-video rounded-lg bg-slate-50 dark:bg-slate-950 p-2 flex items-center justify-center">
              <svg viewBox="0 0 280 180" className="w-full h-full">
                {(() => {
                  const scale = 7;
                  const ax = vecAMag * scale;
                  const ay = 0;
                  const bx = vecBMag * scale * Math.cos(vecRad);
                  const by = -vecBMag * scale * Math.sin(vecRad);
                  const ox = 50;
                  const oy = 140;

                  return (
                    <g>
                      <polygon
                        points={`${ox},${oy} ${ox + ax},${oy + ay} ${ox + ax + bx},${oy + ay + by} ${ox + bx},${oy + by}`}
                        fill="rgba(99, 102, 241, 0.15)"
                        stroke="#6366F1"
                        strokeWidth="1"
                        strokeDasharray="3 3"
                      />
                      <line x1={ox} y1={oy} x2={ox + ax} y2={oy + ay} stroke="#2563EB" strokeWidth="3" />
                      <text x={ox + ax + 6} y={oy + 4} fontSize="10" className="fill-blue-600 font-bold font-mono">向量 A</text>

                      <line x1={ox} y1={oy} x2={ox + bx} y2={oy + by} stroke="#DC2626" strokeWidth="3" />
                      <text x={ox + bx + 4} y={oy + by - 4} fontSize="10" className="fill-red-600 font-bold font-mono">向量 B</text>

                      <circle cx={ox} cy={oy} r="4" fill="#1E293B" />
                      <text x={ox + 15} y={oy - 8} fontSize="9" className="fill-slate-600 font-mono">θ={vectorAngle}°</text>
                    </g>
                  );
                })()}
              </svg>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800">
                  <div className="text-[10px] text-blue-700 dark:text-blue-300 font-bold">內積 (純量) A · B</div>
                  <div className="text-base font-bold text-blue-900 dark:text-blue-100">{dotProduct.toFixed(1)}</div>
                  <div className="text-[9px] text-slate-500">|A||B|·cos(θ)</div>
                </div>
                <div className="p-2.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800">
                  <div className="text-[10px] text-indigo-700 dark:text-indigo-300 font-bold">外積大小 (面積) |A×B|</div>
                  <div className="text-base font-bold text-indigo-900 dark:text-indigo-100">{crossProductMag.toFixed(1)}</div>
                  <div className="text-[9px] text-slate-500">|A||B|·sin(θ)</div>
                </div>
              </div>

              <div className="text-[11px] text-slate-500 font-sans">
                <MathText content="💡 **力學與幾何應用：** 內積用於計算**功與投影量**（兩向量垂直時內積為 0）；外積大小等於兩向量張成的**平行四邊形面積**，方向依右手定則垂直於平面（用於力對點之力矩 $\vec{M} = \vec{r} \times \vec{F}$）。" />
              </div>
            </div>
          </div>
        </div>
      ) : topicSlug.includes('redox') || topicSlug.includes('acid') || topicSlug.includes('corrosion') ? (
        // === 4. Chemical Redox & Corrosion Visualizer ===
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="font-bold">混凝土內部孔隙液 pH 值環境：</span>
            <span className={`font-bold ${isCorroding ? 'text-red-600' : 'text-emerald-600'}`}>pH = {concretePH.toFixed(1)}</span>
          </div>
          <input
            type="range"
            min="8.0"
            max="13.5"
            step="0.1"
            value={concretePH}
            onChange={(e) => setConcretePH(Number(e.target.value))}
            className="w-full accent-indigo-600 cursor-pointer"
          />

          <div className="grid gap-6 sm:grid-cols-2 items-center rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 shadow-inner">
            <div className="relative aspect-video rounded-lg bg-slate-50 dark:bg-slate-950 p-2 flex items-center justify-center">
              <svg viewBox="0 0 240 160" className="w-full h-full">
                <rect x="20" y="20" width="200" height="120" fill="rgba(148, 163, 184, 0.2)" stroke="#64748B" strokeWidth="2" />
                <text x="30" y="38" fontSize="8" className="fill-slate-500 font-mono">混凝土保護層 (Cover)</text>

                <rect x="50" y="70" width="140" height="30" fill={isCorroding ? '#EF4444' : '#0D9488'} rx="3" />
                <text x="75" y="88" fontSize="10" fill="#FFF" className="font-mono font-bold">
                  {isCorroding ? '鋼筋鏽蝕膨脹 (Rust)' : '鋼筋鈍化膜保護 (Fe2O3)'}
                </text>

                {isCorroding && (
                  <g>
                    <line x1="120" y1="70" x2="120" y2="20" stroke="#DC2626" strokeWidth="2" strokeDasharray="3 1" />
                    <line x1="80" y1="100" x2="60" y2="140" stroke="#DC2626" strokeWidth="2" strokeDasharray="3 1" />
                    <text x="125" y="45" fontSize="8" className="fill-red-600 font-bold">膨脹龜裂</text>
                  </g>
                )}
              </svg>
            </div>

            <div className="space-y-2 text-xs">
              <div className={`p-3 rounded-lg border font-mono ${isCorroding ? 'bg-red-50 dark:bg-red-950/40 border-red-200 text-red-900 dark:text-red-200' : 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 text-emerald-900 dark:text-emerald-200'}`}>
                <div className="font-bold">{isCorroding ? '⚠️ 鈍化膜破壞：電化學鏽蝕啟動！' : '✓ 鹼性環境保護良好 (Passivated)'}</div>
                <div className="text-[11px] font-sans mt-1">
                  {isCorroding ? (
                    <>
                      陽極反應：Fe → Fe²⁺ + 2e⁻（鐵溶解）<br/>
                      陰極反應：O₂ + 2H₂O + 4e⁻ → 4OH⁻<br/>
                      生成鐵鏽體積膨脹 2~6 倍，導致保護層崩裂。
                    </>
                  ) : (
                    <>
                      水泥水化生成高濃度 Ca(OH)₂，使混凝土孔隙液保持 pH 12.5~13.5 強鹼性，在鋼筋表面形成緻密 γ-Fe₂O₃ 鈍化保護膜。
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : topicSlug.includes('trig') || topicSlug.includes('triangle') || topicSlug.includes('math') || topicSlug.includes('wave') ? (
        // === 1. Trigonometric Unit Circle Simulator ===
        <div className="grid gap-6 lg:grid-cols-2 items-center">
          <div className="relative aspect-square max-h-[280px] w-full rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 flex items-center justify-center shadow-inner overflow-hidden">
            <svg viewBox="-140 -140 280 280" className="w-full h-full">
              <line x1="-120" y1="0" x2="120" y2="0" stroke="#94A3B8" strokeWidth="1" />
              <line x1="0" y1="-120" x2="0" y2="120" stroke="#94A3B8" strokeWidth="1" />
              <text x="105" y="-5" fontSize="9" className="fill-slate-400 font-mono">cos(θ)</text>
              <text x="5" y="-105" fontSize="9" className="fill-slate-400 font-mono">sin(θ)</text>

              <circle cx="0" cy="0" r="90" fill="none" stroke="#CBD5E1" strokeWidth="1.5" />

              {(() => {
                const px = 90 * cosVal;
                const py = -90 * sinVal;
                return (
                  <g>
                    <line x1="0" y1="0" x2={px} y2={py} stroke="#4F46E5" strokeWidth="2.5" />
                    <line x1="0" y1="0" x2={px} y2="0" stroke="#0284C7" strokeWidth="2.5" />
                    <line x1={px} y1="0" x2={px} y2={py} stroke="#DC2626" strokeWidth="2.5" />
                    <circle cx={px} cy={py} r="4" fill="#4F46E5" />
                    <text x={px / 2} y="14" fontSize="9" className="fill-sky-700 font-mono font-bold">
                      cos={cosVal.toFixed(2)}
                    </text>
                    <text x={px + 4} y={py / 2} fontSize="9" className="fill-red-600 font-mono font-bold">
                      sin={sinVal.toFixed(2)}
                    </text>
                  </g>
                );
              })()}
            </svg>
          </div>

          <div className="space-y-4">
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-mono font-bold">
                <span>旋轉角度 (θ, 0° ~ 360°):</span>
                <span className="text-indigo-700 dark:text-indigo-300">{angleDeg}° ({(angleRad / Math.PI).toFixed(2)}π rad)</span>
              </div>
              <input
                type="range"
                min="0"
                max="360"
                value={angleDeg}
                onChange={(e) => setAngleDeg(Number(e.target.value))}
                className="w-full accent-indigo-600 cursor-pointer"
              />
            </div>

            <div className="grid grid-cols-3 gap-2 font-mono text-center">
              <div className="rounded-lg bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800/60 p-2">
                <span className="text-[10px] text-sky-700 dark:text-sky-300 block">sin({angleDeg}°)</span>
                <span className="text-sm font-bold text-sky-900 dark:text-sky-100">{sinVal.toFixed(3)}</span>
              </div>
              <div className="rounded-lg bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 p-2">
                <span className="text-[10px] text-blue-700 dark:text-blue-300 block">cos({angleDeg}°)</span>
                <span className="text-sm font-bold text-blue-900 dark:text-blue-100">{cosVal.toFixed(3)}</span>
              </div>
              <div className="rounded-lg bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 p-2">
                <span className="text-[10px] text-indigo-700 dark:text-indigo-300 block">tan({angleDeg}°)</span>
                <span className="text-sm font-bold text-indigo-900 dark:text-indigo-100">
                  {Math.abs(cosVal) < 0.01 ? '∞ (無窮大)' : tanVal.toFixed(3)}
                </span>
              </div>
            </div>

            <div className="text-xs text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-800">
              <MathText content="💡 **建築製圖與放樣應用：** 建築斜屋頂坡度常用正切 $\tan(\theta) = \frac{\Delta H}{L}$ 標示（例如 1:3 坡度）；斜拉索張力則透過 $\sin(\theta)$ 與 $\cos(\theta)$ 進行正交分力分解。" />
            </div>
          </div>
        </div>
      ) : (
        // === 2. Hydration & Strength Growth Simulator ===
        <div className="grid gap-6 lg:grid-cols-2 items-center">
          <div className="relative aspect-video rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 flex items-center justify-center shadow-inner overflow-hidden">
            <svg viewBox="0 0 300 180" className="w-full h-full">
              <line x1="30" y1="150" x2="280" y2="150" stroke="#94A3B8" strokeWidth="1" />
              <line x1="30" y1="150" x2="30" y2="20" stroke="#94A3B8" strokeWidth="1" />
              <text x="250" y="165" fontSize="8" className="fill-slate-500 font-mono">養護天數 (Days)</text>
              <text x="10" y="30" fontSize="8" className="fill-slate-500 font-mono">強度 %</text>

              <line x1="220" y1="40" x2="220" y2="150" stroke="#0D9488" strokeWidth="1" strokeDasharray="3 3" />
              <text x="210" y="165" fontSize="8" className="fill-teal-700 font-mono">28d (100%)</text>

              <path
                d="M 30 150 Q 80 80 140 60 T 280 40"
                fill="none"
                stroke="#6366F1"
                strokeWidth="2.5"
              />

              {(() => {
                const px = 30 + (curingDays / 28) * 190;
                const py = 150 - (strengthFraction / 100) * 110;
                return (
                  <g>
                    <circle cx={px} cy={py} r="4" fill="#DC2626" />
                    <line x1={px} y1={py} x2={px} y2="150" stroke="#DC2626" strokeWidth="1" strokeDasharray="2 2" />
                    <text x={px - 15} y={py - 8} fontSize="9" className="fill-red-600 font-mono font-bold">
                      {strengthFraction}% (第 {curingDays} 天)
                    </text>
                  </g>
                );
              })()}
            </svg>
          </div>

          <div className="space-y-4">
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-mono font-bold">
                <span>水化養護天數 (Days):</span>
                <span className="text-indigo-700 dark:text-indigo-300">{curingDays} 天</span>
              </div>
              <input
                type="range"
                min="1"
                max="28"
                value={curingDays}
                onChange={(e) => setCuringDays(Number(e.target.value))}
                className="w-full accent-indigo-600 cursor-pointer"
              />
            </div>

            <div className="rounded-lg bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 p-3 text-xs space-y-1 font-mono">
              <div className="flex justify-between font-bold text-indigo-900 dark:text-indigo-100">
                <span>預估達標強度比例：</span>
                <span className="text-sm text-indigo-700 dark:text-indigo-300">{strengthFraction}% fc&apos; (28d)</span>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 font-sans leading-relaxed pt-1">
                水化反應前 7 天強度成長最劇烈（約達 65% ~ 70% 設計強度），在此期間必須保持濕治養護（CNS 3090 規定），防止水分提早蒸發導致假凝、乾縮龜裂或強度受損。
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
