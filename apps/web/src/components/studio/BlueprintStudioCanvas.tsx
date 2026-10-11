'use client';

import React, { useState } from 'react';
import {
  Building2,
  Sparkles,
  Download,
  Layers,
  Compass,
  CheckCircle2,
  Eye,
  Award,
  Quote,
  ShieldCheck,
} from 'lucide-react';
import { IconStudioForge } from '@/components/ui/ArchitecturalIcons';
import { soundEngine } from '@/lib/audio/soundEffects';
import { useGamificationStore, LandmarkProgress } from '@/lib/store/gamificationStore';

export type XRayMode = 'architectural' | 'structural' | 'construction';

interface LandmarkPhilosophy {
  architect: string;
  year: string;
  quote: string;
  cnsSpec: string;
  loadPath: string;
}

const LANDMARK_PHILOSOPHIES: Record<string, LandmarkPhilosophy> = {
  luce_chapel: {
    architect: '貝聿銘 (I.M. Pei) & 陳其寬',
    year: '1963',
    quote: '「結構就是形式，形式即是結構。屋面即為牆體，無一根樑柱，直通蒼穹。」',
    cnsSpec: 'CNS 3090 預拌混凝土 · 菱形陶磚勾縫防震排水',
    loadPath: '雙曲拋物面薄膜拉壓應力流 ➔ 四角厚重基礎基座傳遞自重與風力',
  },
  taichung_opera: {
    architect: '伊東豊雄 (Toyo Ito) & 空間桁架工程團隊',
    year: '2014',
    quote: '「告別均質的直角格子，建築應像人體器官與自然洞穴，充滿流動的聲音與呼吸。」',
    cnsSpec: '3D 空間鋼桁架定位 · CNS 13463 耐震自充填噴凝土 40cm',
    loadPath: '連續三維雙曲面涵洞無樑柱消除集中彎矩 ➔ 連續壁基底剛性抗剪',
  },
  taipei_101: {
    architect: '李祖原建築師事務所 & 永峻工程顧問',
    year: '2004',
    quote: '「以節節高升的竹節隱喻東方氣節；以 660 噸阻尼球在雲端定住千鈞之風。」',
    cnsSpec: 'SN490B 建築耐震高延性鋼板 · 10,000 psi SCC 自充填混凝土',
    loadPath: '8 組外伸桁架 (Outriggers) 傳遞傾覆力矩 ➔ 660T TMD 風阻尼慣性反力減震 40%',
  },
  danjiang_bridge: {
    architect: '扎哈·哈蒂建築事務所 (ZHA) & 中興工程',
    year: '2026',
    quote: '「單主塔如雙手合十祈福立於淡水出海口，保留百年落日餘暉天際線。」',
    cnsSpec: '1860 MPa 鍍鋅高強低鬆弛鋼絞線 · 水下特大雙沉箱深基礎',
    loadPath: '主塔不對稱單向傾斜抗彎 ➔ 放射狀空間斜拉索向兩側引導橋面活載',
  },
  museum_921: {
    architect: '莊學能建築師 & 大硯建築',
    year: '2004',
    quote: '「不粉飾撕裂的傷痕，以極致輕盈的懸吊薄膜，溫柔覆蓋大地的歷史記憶。」',
    cnsSpec: '高透光 PTFE 耐候抗撕裂薄膜 · 微型無侵入加固鋼管斜撐',
    loadPath: '車籠埔斷層垂直錯動 2.5m 原貌留存 ➔ 張拉預力懸索對抗風吸上揚力',
  },
};

export default function BlueprintStudioCanvas() {
  const { landmarks, rankTitle, exp, unlockLandmarkPart, soundEnabled } = useGamificationStore();
  const [selectedLandmarkId, setSelectedLandmarkId] = useState<keyof typeof landmarks>('luce_chapel');
  const [xrayMode, setXrayMode] = useState<XRayMode>('architectural');

  const currentLandmark: LandmarkProgress = landmarks[selectedLandmarkId] || landmarks.luce_chapel;
  const currentPhilosophy = LANDMARK_PHILOSOPHIES[selectedLandmarkId] || LANDMARK_PHILOSOPHIES.luce_chapel;

  const handleUnlockPiece = () => {
    if (currentLandmark.unlockedParts < currentLandmark.totalParts) {
      unlockLandmarkPart(currentLandmark.id);
      if (soundEnabled) soundEngine.playCorrectChime();
    }
  };

  const handlePrintBlueprint = () => {
    if (soundEnabled) soundEngine.playStampThud();
    window.print();
  };

  const isFull = currentLandmark.unlockedParts >= currentLandmark.totalParts;

  return (
    <div className="space-y-8">
      {/* Studio Banner & Master Header */}
      <div className="rounded-[2.5rem] border border-blue-200 dark:border-blue-900/40 bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-start gap-5">
            <div className="hidden sm:flex size-16 shrink-0 items-center justify-center rounded-2xl bg-blue-500/20 border border-blue-400/30 text-blue-300 shadow-inner">
              <IconStudioForge size={36} strokeWidth={1.8} />
            </div>
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 border border-blue-400/30 px-3.5 py-1 text-xs font-mono font-bold text-blue-300">
                <Sparkles className="size-3.5 text-blue-400" />
                建築大師工坊 · ARCHITECT&apos;S BLUEPRINT STUDIO
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
                打造屬於你的台灣經典名築畫布
              </h2>
              <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
                每次完成章節學習、攻克大考題庫或主動回憶快卡，即可獲得名築幾何構件。在專屬藍圖畫布上親手組裝台灣五大現代建築地標！
              </p>
            </div>
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
              <span>匯出藍圖銘牌 (Print)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Landmark Blueprint Switcher */}
      <div className="grid gap-3 sm:grid-cols-5 font-mono text-xs">
        {Object.values(landmarks).map((lm) => {
          const isSelected = selectedLandmarkId === lm.id;
          const isComplete = lm.unlockedParts === lm.totalParts;

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
                  {isComplete && <CheckCircle2 className="size-4 text-emerald-500" />}
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
      <div className="grid gap-6 lg:grid-cols-12 items-start">
        {/* SVG Blueprint Paper Screen */}
        <div className="lg:col-span-8 rounded-3xl border-2 border-blue-900/50 bg-[#0f172a] p-6 sm:p-8 relative select-none overflow-hidden shadow-xl">
          {/* Blueprint Grid Watermark */}
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-70" />

          {/* Blueprint Header Tag with X-Ray Filter Mode */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-blue-900/60 pb-4 mb-4 text-xs font-mono text-blue-300">
            <div className="flex items-center gap-2">
              <Compass className="size-4 text-blue-400" />
              <span>OFFICIAL TAIWAN ARCHITECTURAL BLUEPRINT</span>
            </div>

            {/* X-Ray Filter Switcher */}
            <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-blue-800/60">
              <button
                type="button"
                onClick={() => {
                  setXrayMode('architectural');
                  soundEngine.playClickBeep();
                }}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                  xrayMode === 'architectural'
                    ? 'bg-blue-600 text-white font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                立面幾何
              </button>
              <button
                type="button"
                onClick={() => {
                  setXrayMode('structural');
                  soundEngine.playClickBeep();
                }}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1 ${
                  xrayMode === 'structural'
                    ? 'bg-amber-600 text-white font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Eye className="size-3" />
                <span>力流 X-Ray</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setXrayMode('construction');
                  soundEngine.playClickBeep();
                }}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                  xrayMode === 'construction'
                    ? 'bg-emerald-600 text-white font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                CNS 施工標註
              </button>
            </div>
          </div>

          {/* Dynamic SVG Landmark Vector Rendering */}
          <div className="relative z-10 w-full h-84 flex items-center justify-center">
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

                  {/* Structural X-Ray Force Vectors */}
                  {xrayMode === 'structural' && (
                    <g className="animate-fadeIn">
                      <path d="M 215,60 Q 160,130 90,210" fill="none" stroke="#f43f5e" strokeWidth="2" strokeDasharray="4 2" />
                      <path d="M 225,60 Q 280,130 350,210" fill="none" stroke="#f43f5e" strokeWidth="2" strokeDasharray="4 2" />
                      <text x="130" y="110" fontSize="8" fill="#fb7185" fontFamily="monospace">拉應力流 (Tension)</text>
                      <text x="310" y="110" fontSize="8" fill="#fb7185" fontFamily="monospace">壓應力基座 (Thrust)</text>
                    </g>
                  )}

                  {/* CNS Construction Specs Callout */}
                  {xrayMode === 'construction' && (
                    <g className="animate-fadeIn">
                      <rect x="50" y="45" width="130" height="20" rx="4" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" strokeWidth="1" />
                      <text x="115" y="58" fontSize="8" fill="#34d399" textAnchor="middle" fontFamily="monospace">CNS 3090 預拌耐震混凝土</text>
                      <rect x="260" y="45" width="130" height="20" rx="4" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" strokeWidth="1" />
                      <text x="325" y="58" fontSize="8" fill="#34d399" textAnchor="middle" fontFamily="monospace">雙曲黃色釉面菱形陶磚</text>
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

                  {xrayMode === 'structural' && (
                    <g className="animate-fadeIn">
                      <path d="M 120,70 Q 200,100 280,70" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" />
                      <text x="200" y="90" fontSize="8" fill="#fbbf24" textAnchor="middle" fontFamily="monospace">連續曲面消解集中彎矩</text>
                    </g>
                  )}

                  {xrayMode === 'construction' && (
                    <g className="animate-fadeIn">
                      <text x="220" y="25" fontSize="9" fill="#34d399" textAnchor="middle" fontFamily="monospace">
                        CNS 13463 3D 空間鋼桁架 + 噴凝土工法
                      </text>
                    </g>
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

                  {xrayMode === 'structural' && (
                    <g className="animate-fadeIn">
                      <line x1="160" y1="110" x2="280" y2="110" stroke="#ef4444" strokeWidth="2" strokeDasharray="3 2" />
                      <text x="320" y="113" fontSize="8" fill="#f87171" fontFamily="monospace">外伸桁架 (Outrigger)</text>
                      <path d="M 205,85 A 15,15 0 0,0 235,85" fill="none" stroke="#fbbf24" strokeWidth="2" strokeDasharray="2 2" />
                      <text x="220" y="125" fontSize="8" fill="#fbbf24" textAnchor="middle" fontFamily="monospace">±100cm 擺幅耗能</text>
                    </g>
                  )}

                  {xrayMode === 'construction' && (
                    <g className="animate-fadeIn">
                      <text x="220" y="25" fontSize="9" fill="#34d399" textAnchor="middle" fontFamily="monospace">
                        SN490B 耐震鋼板 · 10,000 psi SCC 自充填混凝土
                      </text>
                    </g>
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

                  {xrayMode === 'structural' && (
                    <g className="animate-fadeIn">
                      <line x1="185" y1="50" x2="185" y2="25" stroke="#f43f5e" strokeWidth="2" markerEnd="url(#arrow)" />
                      <text x="185" y="20" fontSize="8" fill="#fb7185" textAnchor="middle" fontFamily="monospace">
                        主塔偏心抗彎平衡力矩
                      </text>
                    </g>
                  )}

                  {xrayMode === 'construction' && (
                    <g className="animate-fadeIn">
                      <text x="220" y="25" fontSize="9" fill="#34d399" textAnchor="middle" fontFamily="monospace">
                        1860 MPa 鍍鋅高強鋼絞線 · 水下特大深沉箱
                      </text>
                    </g>
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

                  {xrayMode === 'structural' && (
                    <g className="animate-fadeIn">
                      <path d="M 120,140 Q 200,90 280,110" fill="none" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" />
                      <text x="200" y="80" fontSize="8" fill="#fbbf24" textAnchor="middle" fontFamily="monospace">
                        預力懸索對抗風吸上揚力
                      </text>
                    </g>
                  )}

                  {xrayMode === 'construction' && (
                    <g className="animate-fadeIn">
                      <text x="220" y="25" fontSize="9" fill="#34d399" textAnchor="middle" fontFamily="monospace">
                        PTFE 氟碳自潔薄膜 · 微型無侵入樁基
                      </text>
                    </g>
                  )}
                </g>
              )}
            </svg>
          </div>

          {/* Blueprint Footer Stamp */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-blue-900/60 pt-4 mt-2 text-[11px] font-mono text-slate-400">
            <span>LOCATION: {currentLandmark.location}</span>
            <div className="flex items-center gap-2">
              <span className="text-slate-500">FILTER: {xrayMode.toUpperCase()}</span>
              <span className="text-blue-300 font-bold">STATUS: {isFull ? '✓ 竣工啟用' : '🚧 施工組裝中'}</span>
            </div>
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

          {/* Architect's Masterstroke Philosophy Quote */}
          <div className="p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-900/60 space-y-2 text-xs">
            <div className="flex items-center gap-1.5 font-bold text-blue-900 dark:text-blue-200 font-serif">
              <Quote className="size-3.5 text-blue-600 dark:text-blue-400" />
              <span>大師建築哲學 ({currentPhilosophy.architect} · {currentPhilosophy.year})</span>
            </div>
            <p className="italic text-slate-700 dark:text-slate-300 leading-relaxed font-serif">
              {currentPhilosophy.quote}
            </p>
          </div>

          {/* Engineering Characteristics */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 space-y-2 text-xs">
            <span className="font-bold text-slate-700 dark:text-slate-300 block font-mono">
              🏛️ 核心工程構造特徵：
            </span>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
              {currentLandmark.description}
            </p>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 space-y-1.5 text-slate-600 dark:text-slate-400">
              <div className="flex items-start gap-1.5 font-mono text-[11px]">
                <Layers className="size-3.5 shrink-0 text-blue-600 mt-0.5" />
                <span><strong>力傳導：</strong>{currentPhilosophy.loadPath}</span>
              </div>
              <div className="flex items-start gap-1.5 font-mono text-[11px]">
                <ShieldCheck className="size-3.5 shrink-0 text-emerald-600 mt-0.5" />
                <span><strong>CNS 規範：</strong>{currentPhilosophy.cnsSpec}</span>
              </div>
            </div>
          </div>

          {/* Assembly Action or Certified Stamp */}
          <div className="space-y-3 pt-2">
            {!isFull ? (
              <button
                onClick={handleUnlockPiece}
                className="w-full py-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition shadow-lg shadow-blue-600/20 cursor-pointer flex items-center justify-center gap-2"
              >
                <Sparkles className="size-4 text-amber-300" />
                <span>組裝下一組幾何構件 ({currentLandmark.unlockedParts + 1}/{currentLandmark.totalParts})</span>
              </button>
            ) : (
              <div className="rounded-2xl border-2 border-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 p-4 text-center space-y-2">
                <div className="flex items-center justify-center gap-1.5 text-emerald-700 dark:text-emerald-300 font-bold text-sm">
                  <Award className="size-5 text-emerald-600" />
                  <span>CNS 建築師國家級數位銘牌認證</span>
                </div>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 font-mono">
                  認證編號：CNS-ARCH-2026-TW · 構件組裝完備率 100%
                </p>
              </div>
            )}
            <p className="text-[11px] text-center text-slate-500 font-mono">
              完成章節研讀、主動回憶快卡或真題練習可自動獲取名築藍圖碎片
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
