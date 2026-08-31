'use client';

import React, { useState } from 'react';
import { Building2, Sparkles, Download, Layers, Compass, CheckCircle2 } from 'lucide-react';
import { soundEngine } from '@/lib/audio/soundEffects';
import { useGamificationStore, LandmarkProgress } from '@/lib/store/gamificationStore';

export default function BlueprintStudioCanvas() {
  const { landmarks, rankTitle, exp, unlockLandmarkPart, soundEnabled } = useGamificationStore();
  const [selectedLandmarkId, setSelectedLandmarkId] = useState<keyof typeof landmarks>('luce_chapel');

  const currentLandmark: LandmarkProgress = landmarks[selectedLandmarkId] || landmarks.luce_chapel;

  const handleUnlockPiece = () => {
    if (currentLandmark.unlockedParts < currentLandmark.totalParts) {
      unlockLandmarkPart(currentLandmark.id);
    }
  };

  const handlePrintBlueprint = () => {
    if (soundEnabled) soundEngine.playStampThud();
    window.print();
  };

  return (
    <div className="space-y-8">
      {/* Studio Banner & Master Header */}
      <div className="rounded-[2.5rem] border border-blue-200 dark:border-blue-900/40 bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 border border-blue-400/30 px-3.5 py-1 text-xs font-mono font-bold text-blue-300">
              <Sparkles className="size-3.5 text-blue-400" />
              建築大師工坊 · ARCHITECT&apos;S BLUEPRINT STUDIO
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
              打造屬於你的台灣經典名築畫布
            </h2>
            <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
              每次完成學習微迴圈或攻克工程解謎，即可獲得經典建築幾何構件。在專屬藍圖畫布上親手組裝台灣五大現代建築地標！
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0 font-mono text-xs">
            <div className="rounded-2xl bg-white/10 backdrop-blur-md p-4 border border-white/15 space-y-1">
              <span className="text-slate-400 block">目前建築師階級</span>
              <strong className="text-blue-300 text-sm block font-bold">{rankTitle}</strong>
              <span className="text-slate-400 text-[11px]">累計經驗值：{exp} EXP</span>
            </div>
            <button
              onClick={handlePrintBlueprint}
              className="flex items-center gap-2 rounded-2xl bg-white text-slate-950 px-5 py-3.5 font-bold transition hover:bg-blue-50 cursor-pointer shadow-lg"
            >
              <Download className="size-4" />
              <span>匯出藍圖銘牌</span>
            </button>
          </div>
        </div>
      </div>

      {/* Landmark Blueprint Switcher */}
      <div className="grid gap-3 sm:grid-cols-5 font-mono text-xs">
        {Object.values(landmarks).map((lm) => {
          const isSelected = selectedLandmarkId === lm.id;
          const isFull = lm.unlockedParts === lm.totalParts;

          return (
            <button
              key={lm.id}
              onClick={() => {
                soundEngine.playClickBeep();
                setSelectedLandmarkId(lm.id);
              }}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-3 ${
                isSelected
                  ? 'border-blue-500 bg-blue-50/80 dark:bg-blue-950/50 shadow-md ring-2 ring-blue-500/20'
                  : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <Building2 className={`size-5 ${isSelected ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400'}`} />
                  {isFull && <CheckCircle2 className="size-4 text-emerald-500" />}
                </div>
                <h4 className="font-bold text-sm text-slate-900 dark:text-white mt-2 font-serif">{lm.name}</h4>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>建造進度</span>
                  <span>{lm.unlockedParts}/{lm.totalParts}</span>
                </div>
                <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 transition-all duration-500"
                    style={{ width: `${(lm.unlockedParts / lm.totalParts) * 100}%` }}
                  />
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Blueprint Visual Canvas */}
      <div className="grid gap-6 lg:grid-cols-12 items-center">
        {/* SVG Blueprint Paper Screen */}
        <div className="lg:col-span-8 rounded-3xl border-2 border-blue-900/50 bg-[#0f172a] p-6 sm:p-8 relative select-none overflow-hidden shadow-xl">
          {/* Blueprint Grid Watermark */}
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-70" />

          {/* Blueprint Header Tag */}
          <div className="relative z-10 flex items-center justify-between border-b border-blue-900/60 pb-4 mb-4 text-xs font-mono text-blue-300">
            <div className="flex items-center gap-2">
              <Compass className="size-4 text-blue-400" />
              <span>OFFICIAL TAIWAN ARCHITECTURAL BLUEPRINT</span>
            </div>
            <span className="bg-blue-900/60 px-2.5 py-1 rounded border border-blue-700/50">
              SCALE: 1/100 · CNS STANDARD
            </span>
          </div>

          {/* Dynamic SVG Landmark Vector Rendering */}
          <div className="relative z-10 w-full h-80 flex items-center justify-center">
            <svg viewBox="0 0 440 260" className="w-full h-full">
              {/* --- 1. Luce Chapel SVG (路思義教堂) --- */}
              {currentLandmark.id === 'luce_chapel' && (
                <g className="animate-fadeIn">
                  {/* Ground Foundation line */}
                  <line x1="40" y1="220" x2="400" y2="220" stroke="#38bdf8" strokeWidth="2" strokeDasharray="6 3" />
                  
                  {/* Hypar Left Shell */}
                  {currentLandmark.unlockedParts >= 1 && (
                    <path
                      d="M 220,40 Q 150,120 70,220 L 220,220 Z"
                      fill="rgba(56, 189, 248, 0.2)"
                      stroke="#38bdf8"
                      strokeWidth="2.5"
                    />
                  )}

                  {/* Hypar Right Shell */}
                  {currentLandmark.unlockedParts >= 2 && (
                    <path
                      d="M 220,40 Q 290,120 370,220 L 220,220 Z"
                      fill="rgba(56, 189, 248, 0.25)"
                      stroke="#38bdf8"
                      strokeWidth="2.5"
                    />
                  )}

                  {/* Top Ridge Skylight Window */}
                  {currentLandmark.unlockedParts >= 3 && (
                    <g>
                      <line x1="220" y1="40" x2="220" y2="220" stroke="#f59e0b" strokeWidth="3" />
                      <text x="220" y="32" fontSize="9" fill="#f59e0b" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                        頂部一線天中央採光天窗
                      </text>
                    </g>
                  )}

                  {/* Diamond Lattice Tiles Grid */}
                  {currentLandmark.unlockedParts >= 4 && (
                    <g opacity="0.6">
                      {Array.from({ length: 7 }).map((_, i) => (
                        <line
                          key={i}
                          x1={100 + i * 20}
                          y1={200 - i * 15}
                          x2={200 + i * 15}
                          y2={80 + i * 20}
                          stroke="#7dd3fc"
                          strokeWidth="1"
                          strokeDasharray="2 2"
                        />
                      ))}
                      <text x="220" y="245" fontSize="10" fontWeight="bold" fill="#38bdf8" textAnchor="middle" fontFamily="monospace">
                        ✓ 雙曲拋物面（Conoid Hypar）無樑柱薄殼結構完成
                      </text>
                    </g>
                  )}
                </g>
              )}

              {/* --- 2. Taichung Opera SVG (臺中國家歌劇院) --- */}
              {currentLandmark.id === 'taichung_opera' && (
                <g className="animate-fadeIn">
                  <rect x="50" y="40" width="340" height="180" fill="none" stroke="#334155" strokeWidth="1.5" />
                  {/* Curved Wall Units (美聲涵洞) */}
                  {currentLandmark.unlockedParts >= 1 && (
                    <path
                      d="M 80,220 C 80,120 160,120 160,40 L 190,40 C 190,140 110,140 110,220 Z"
                      fill="rgba(45, 212, 191, 0.25)"
                      stroke="#2dd4bf"
                      strokeWidth="2.5"
                    />
                  )}
                  {currentLandmark.unlockedParts >= 2 && (
                    <path
                      d="M 240,220 C 240,100 320,100 320,40 L 350,40 C 350,130 270,130 270,220 Z"
                      fill="rgba(45, 212, 191, 0.25)"
                      stroke="#2dd4bf"
                      strokeWidth="2.5"
                    />
                  )}
                  {currentLandmark.unlockedParts >= 3 && (
                    <ellipse cx="200" cy="140" rx="30" ry="45" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 2" />
                  )}
                  {currentLandmark.unlockedParts >= 4 && (
                    <text x="220" y="245" fontSize="10" fontWeight="bold" fill="#2dd4bf" textAnchor="middle" fontFamily="monospace">
                      ✓ 3D 桁架曲牆噴凝土（Sound Cave 涵洞）體系完成
                    </text>
                  )}
                </g>
              )}

              {/* --- 3. Taipei 101 SVG (台北 101) --- */}
              {currentLandmark.id === 'taipei_101' && (
                <g className="animate-fadeIn">
                  {/* Tower Shaft Tiers */}
                  {Array.from({ length: 6 }).map((_, i) => (
                    <polygon
                      key={i}
                      points={`${180 - i * 4},${190 - i * 24} ${260 + i * 4},${190 - i * 24} ${250 + i * 4},${170 - i * 24} ${190 - i * 4},${170 - i * 24}`}
                      fill={currentLandmark.unlockedParts >= 1 ? 'rgba(56, 189, 248, 0.2)' : 'none'}
                      stroke="#38bdf8"
                      strokeWidth="1.5"
                    />
                  ))}
                  {/* Spire */}
                  <line x1="220" y1="46" x2="220" y2="10" stroke="#38bdf8" strokeWidth="3" />
                  {/* Tuned Mass Damper (TMD) */}
                  {currentLandmark.unlockedParts >= 3 && (
                    <g>
                      <circle cx="220" cy="85" r="14" fill="#f59e0b" stroke="#fbbf24" strokeWidth="2" />
                      <line x1="220" y1="55" x2="220" y2="71" stroke="#f59e0b" strokeWidth="2" />
                      <text x="220" y="112" fontSize="9" fill="#f59e0b" textAnchor="middle" fontFamily="monospace">
                        660T 風阻尼球 (TMD)
                      </text>
                    </g>
                  )}
                  {currentLandmark.unlockedParts >= 4 && (
                    <text x="220" y="245" fontSize="10" fontWeight="bold" fill="#38bdf8" textAnchor="middle" fontFamily="monospace">
                      ✓ 巨型外伸桁架 + 阻尼減震系統全部加固完成
                    </text>
                  )}
                </g>
              )}

              {/* --- 4. Danjiang Bridge SVG (淡江大橋) --- */}
              {currentLandmark.id === 'danjiang_bridge' && (
                <g className="animate-fadeIn">
                  {/* Deck */}
                  <line x1="40" y1="180" x2="400" y2="180" stroke="#64748b" strokeWidth="6" />
                  {/* Single Tower */}
                  <polygon points="160,220 180,40 190,40 210,220" fill="rgba(129, 140, 248, 0.3)" stroke="#818cf8" strokeWidth="2" />
                  {/* Stay Cables */}
                  {currentLandmark.unlockedParts >= 2 && (
                    <g stroke="#38bdf8" strokeWidth="1.5" opacity="0.8">
                      <line x1="185" y1="60" x2="60" y2="180" />
                      <line x1="185" y1="80" x2="100" y2="180" />
                      <line x1="185" y1="100" x2="140" y2="180" />
                      <line x1="185" y1="60" x2="380" y2="180" />
                      <line x1="185" y1="80" x2="320" y2="180" />
                      <line x1="185" y1="100" x2="260" y2="180" />
                    </g>
                  )}
                  {currentLandmark.unlockedParts >= 4 && (
                    <text x="220" y="245" fontSize="10" fontWeight="bold" fill="#818cf8" textAnchor="middle" fontFamily="monospace">
                      ✓ 全球最大單塔不對稱斜張橋結構閉合完成
                    </text>
                  )}
                </g>
              )}

              {/* --- 5. 921 Museum SVG (921 地震園區) --- */}
              {currentLandmark.id === 'museum_921' && (
                <g className="animate-fadeIn">
                  {/* Fault offset step */}
                  <path d="M 40,190 L 180,190 L 220,130 L 400,130" fill="none" stroke="#ef4444" strokeWidth="3" />
                  <text x="200" y="115" fontSize="9" fill="#ef4444" fontWeight="bold" fontFamily="monospace">
                    車籠埔斷層地盤錯動 (差高 2.5m)
                  </text>
                  {/* Tensile Membrane Cover */}
                  {currentLandmark.unlockedParts >= 2 && (
                    <path
                      d="M 50,170 Q 200,60 390,110 L 390,130 Q 200,80 50,190 Z"
                      fill="rgba(56, 189, 248, 0.2)"
                      stroke="#38bdf8"
                      strokeWidth="2"
                    />
                  )}
                  {currentLandmark.unlockedParts >= 4 && (
                    <text x="220" y="245" fontSize="10" fontWeight="bold" fill="#38bdf8" textAnchor="middle" fontFamily="monospace">
                      ✓ 斷層保存張拉薄膜與抗震防護結構全量竣工
                    </text>
                  )}
                </g>
              )}
            </svg>
          </div>

          {/* Blueprint Footer Stamp */}
          <div className="relative z-10 flex items-center justify-between border-t border-blue-900/60 pt-4 mt-2 text-[11px] font-mono text-slate-400">
            <span>LOCATION: {currentLandmark.location}</span>
            <span className="text-blue-300 font-bold">STATUS: {currentLandmark.unlockedParts >= currentLandmark.totalParts ? '✓ 竣工啟用' : '🚧 施工組裝中'}</span>
          </div>
        </div>

        {/* Blueprint Specification & Assembly Panel */}
        <div className="lg:col-span-4 space-y-4 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              STRUCTURAL SPECIFICATION
            </span>
            <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
              {currentLandmark.name}
            </h3>
            <p className="text-xs text-slate-500 font-mono">{currentLandmark.location}</p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 space-y-2 text-xs">
            <span className="font-bold text-slate-700 dark:text-slate-300 block font-mono">
              🏛️ 核心工程構造特徵：
            </span>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
              {currentLandmark.description}
            </p>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center gap-1.5 text-blue-700 dark:text-blue-400 font-bold font-mono">
              <Layers className="size-3.5" />
              <span>{currentLandmark.featureSnippet}</span>
            </div>
          </div>

          {/* Assembly Action */}
          <div className="space-y-3 pt-2">
            <button
              onClick={handleUnlockPiece}
              disabled={currentLandmark.unlockedParts >= currentLandmark.totalParts}
              className="w-full py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 disabled:bg-slate-200 dark:disabled:bg-slate-800 disabled:text-slate-400 text-white font-bold text-sm transition shadow-lg shadow-blue-600/20 cursor-pointer"
            >
              {currentLandmark.unlockedParts >= currentLandmark.totalParts
                ? '🏆 本地標已 100% 竣工'
                : `組裝下一組幾何構件 (${currentLandmark.unlockedParts + 1}/${currentLandmark.totalParts})`}
            </button>
            <p className="text-[11px] text-center text-slate-500 font-mono">
              完成章節練習、錯題修復或工程解謎可獲得組裝經驗
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
