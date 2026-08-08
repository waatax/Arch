'use client';

import React, { useState } from 'react';

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

  return (
    <div className="rounded-xl border border-indigo-200/80 bg-indigo-50/20 dark:border-indigo-800/60 dark:bg-indigo-950/20 p-5 sm:p-6 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-indigo-200/60 dark:border-indigo-800/40 pb-3">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-lg bg-indigo-600 text-white text-xs font-mono font-bold">
            ⚡
          </span>
          <div>
            <h3 className="font-serif text-base font-bold text-slate-900 dark:text-white">
              基礎學科 · 三角函數與材料水化動力學互動模擬器
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              三角函數單位圓 (sin/cos/tan)、坡度高程換算與水泥 28 天水化強度成長預測
            </p>
          </div>
        </div>
        <span className="rounded-full bg-indigo-600/10 px-2.5 py-0.5 text-xs font-mono font-bold text-indigo-700 dark:text-indigo-300 border border-indigo-600/20">
          統測數 C / 自然科學
        </span>
      </div>

      {topicSlug.includes('trig') || topicSlug.includes('triangle') || topicSlug.includes('vector') || topicSlug.includes('math') || topicSlug.includes('wave') ? (
        // Trigonometric Unit Circle Simulator
        <div className="grid gap-6 lg:grid-cols-2 items-center">
          {/* Unit Circle SVG */}
          <div className="relative aspect-square max-h-[280px] w-full rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 flex items-center justify-center shadow-inner overflow-hidden">
            <svg viewBox="-140 -140 280 280" className="w-full h-full">
              {/* Axes */}
              <line x1="-120" y1="0" x2="120" y2="0" stroke="#94A3B8" strokeWidth="1" />
              <line x1="0" y1="-120" x2="0" y2="120" stroke="#94A3B8" strokeWidth="1" />
              <text x="105" y="-5" fontSize="9" className="fill-slate-400 font-mono">cos(θ)</text>
              <text x="5" y="-105" fontSize="9" className="fill-slate-400 font-mono">sin(θ)</text>

              {/* Unit circle radius 90px */}
              <circle cx="0" cy="0" r="90" fill="none" stroke="#CBD5E1" strokeWidth="1.5" />

              {/* Point on unit circle */}
              {(() => {
                const px = 90 * cosVal;
                const py = -90 * sinVal;
                return (
                  <g>
                    {/* Radius ray */}
                    <line x1="0" y1="0" x2={px} y2={py} stroke="#4F46E5" strokeWidth="2.5" />
                    {/* Triangle horizontal cos leg */}
                    <line x1="0" y1="0" x2={px} y2="0" stroke="#0284C7" strokeWidth="2.5" />
                    {/* Triangle vertical sin leg */}
                    <line x1={px} y1="0" x2={px} y2={py} stroke="#DC2626" strokeWidth="2.5" />
                    {/* Circle dot */}
                    <circle cx={px} cy={py} r="4" fill="#4F46E5" />
                    {/* Value tags */}
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

          {/* Controls */}
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

            {/* Results Grid */}
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

            <p className="text-xs text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-800">
              💡 <strong>建築製圖與放樣應用：</strong> 建築斜屋頂坡度常用正切 tan(θ) = 高差 ΔH / 水平長度 L 標示（例如 1:3 坡度）；斜拉索張力則透過 sin(θ) 與 cos(θ) 進行正交分力分解。
            </p>
          </div>
        </div>
      ) : (
        // Hydration & Strength Growth Simulator
        <div className="grid gap-6 lg:grid-cols-2 items-center">
          <div className="relative aspect-video rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 flex items-center justify-center shadow-inner overflow-hidden">
            <svg viewBox="0 0 300 180" className="w-full h-full">
              {/* Axes */}
              <line x1="30" y1="150" x2="280" y2="150" stroke="#94A3B8" strokeWidth="1" />
              <line x1="30" y1="150" x2="30" y2="20" stroke="#94A3B8" strokeWidth="1" />
              <text x="250" y="165" fontSize="8" className="fill-slate-500 font-mono">養護天數 (Days)</text>
              <text x="10" y="30" fontSize="8" className="fill-slate-500 font-mono">強度 %</text>

              {/* 28-day reference line */}
              <line x1="220" y1="40" x2="220" y2="150" stroke="#0D9488" strokeWidth="1" strokeDasharray="3 3" />
              <text x="210" y="165" fontSize="8" className="fill-teal-700 font-mono">28d (100%)</text>

              {/* Strength Growth Curve */}
              <path
                d="M 30 150 Q 80 80 140 60 T 280 40"
                fill="none"
                stroke="#6366F1"
                strokeWidth="2.5"
              />

              {/* Current probe point */}
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
