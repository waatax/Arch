'use client';

import React from 'react';
import type { PathwayIllustration } from '@/data/pathwayCurriculum';
import { Sparkles } from 'lucide-react';

interface PathwayIllustrationViewerProps {
  illustration: PathwayIllustration;
  className?: string;
}

export default function PathwayIllustrationViewer({
  illustration,
  className = '',
}: PathwayIllustrationViewerProps) {
  const renderSvgDiagram = () => {
    switch (illustration.svgType) {
      case 'spatial':
        return (
          <svg viewBox="0 0 600 280" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Background Blueprint Grid */}
            <defs>
              <pattern id="grid-spatial" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-blue-500/10 dark:text-blue-400/10" />
              </pattern>
            </defs>
            <rect width="600" height="280" fill="url(#grid-spatial)" rx="12" />

            {/* Bubble 1: Public Entry (West) */}
            <circle cx="120" cy="140" r="55" className="fill-blue-500/10 stroke-blue-500/40 dark:fill-blue-500/20" strokeWidth="2" strokeDasharray="4 2" />
            <text x="120" y="135" textAnchor="middle" className="fill-blue-900 dark:fill-blue-200 text-xs font-bold font-sans">西側水岸大廳</text>
            <text x="120" y="152" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400 text-[10px] font-mono">Public Plaza</text>

            {/* Flow Arrow 1 to 2 */}
            <path d="M 175 140 L 235 140" stroke="currentColor" strokeWidth="2.5" markerEnd="url(#arrow)" className="text-blue-600 dark:text-blue-400" />

            {/* Bubble 2: Central Double-Height Void */}
            <rect x="245" y="80" width="130" height="120" rx="16" className="fill-indigo-500/15 stroke-indigo-500 dark:fill-indigo-500/25" strokeWidth="2" />
            <text x="310" y="125" textAnchor="middle" className="fill-indigo-950 dark:fill-indigo-100 text-xs font-bold font-sans">挑高中庭與大階梯</text>
            <text x="310" y="142" textAnchor="middle" className="fill-indigo-700 dark:fill-indigo-300 text-[10px] font-mono">Double-Height Void</text>
            <text x="310" y="160" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-400 text-[9px] font-bold">★ 空間高潮節點</text>

            {/* Flow Arrow 2 to 3 */}
            <path d="M 375 140 L 435 140" stroke="currentColor" strokeWidth="2.5" className="text-blue-600 dark:text-blue-400" />

            {/* Bubble 3: Quiet Reading Zone (East) */}
            <circle cx="495" cy="140" r="55" className="fill-emerald-500/10 stroke-emerald-500/40 dark:fill-emerald-500/20" strokeWidth="2" strokeDasharray="4 2" />
            <text x="495" y="135" textAnchor="middle" className="fill-emerald-900 dark:fill-emerald-200 text-xs font-bold font-sans">東側靜態閱覽室</text>
            <text x="495" y="152" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 text-[10px] font-mono">Quiet Study</text>

            {/* Service & Egress Spine (Top/Bottom) */}
            <rect x="210" y="25" width="200" height="30" rx="8" className="fill-slate-500/10 stroke-slate-400 dark:fill-slate-800" strokeWidth="1.5" />
            <text x="310" y="45" textAnchor="middle" className="fill-slate-700 dark:text-slate-300 text-[10px] font-mono font-bold">後勤垂直服務核 (Core: 梯/廁/機電)</text>
            <path d="M 310 55 L 310 80" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" className="text-slate-400" />

            {/* Dimension & Section Level Marker */}
            <path d="M 60 220 L 540 220" stroke="currentColor" strokeWidth="1" className="text-slate-300 dark:text-slate-700" />
            <circle cx="120" cy="220" r="3" className="fill-blue-600" />
            <circle cx="310" cy="220" r="3" className="fill-indigo-600" />
            <circle cx="495" cy="220" r="3" className="fill-emerald-600" />
            <text x="120" y="240" textAnchor="middle" className="fill-slate-500 text-[10px] font-mono">GL +0.0m (架空防汛)</text>
            <text x="310" y="240" textAnchor="middle" className="fill-slate-500 text-[10px] font-mono">2F +4.5m (景觀平台)</text>
            <text x="495" y="240" textAnchor="middle" className="fill-slate-500 text-[10px] font-mono">3F +8.5m (靜態層)</text>
          </svg>
        );

      case 'detailing':
        return (
          <svg viewBox="0 0 600 280" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="600" height="280" rx="12" className="fill-teal-500/5 dark:fill-teal-950/20" />
            {/* Column Outline */}
            <rect x="180" y="20" width="140" height="240" className="fill-slate-200/50 dark:fill-slate-800/50 stroke-teal-600 dark:stroke-teal-500" strokeWidth="2.5" />
            <text x="250" y="45" textAnchor="middle" className="fill-teal-900 dark:fill-teal-200 text-xs font-bold font-mono">RC 柱 60×60 cm</text>

            {/* Beam Outlines (Left & Right) */}
            <rect x="40" y="90" width="140" height="100" className="fill-slate-200/50 dark:fill-slate-800/50 stroke-teal-600 dark:stroke-teal-500" strokeWidth="2.5" />
            <rect x="320" y="90" width="240" height="100" className="fill-slate-200/50 dark:fill-slate-800/50 stroke-teal-600 dark:stroke-teal-500" strokeWidth="2.5" />
            <text x="440" y="145" textAnchor="middle" className="fill-teal-900 dark:fill-teal-200 text-xs font-bold font-mono">主梁 40×70 cm</text>

            {/* Beam Top Reinforcement with 90° Hook into Column */}
            <path d="M 550 110 L 210 110 L 210 170" stroke="currentColor" strokeWidth="3" className="text-rose-600 dark:text-rose-400" />
            <text x="420" y="102" className="fill-rose-600 dark:fill-rose-400 text-[10px] font-bold font-mono">梁上層主筋 4-D25</text>
            <text x="140" y="125" className="fill-rose-700 dark:fill-rose-300 text-[9px] font-mono">90° 錨定彎折 ≥ 12db</text>

            {/* Beam Bottom Reinforcement */}
            <path d="M 550 170 L 210 170" stroke="currentColor" strokeWidth="3" className="text-rose-600 dark:text-rose-400" />
            <text x="420" y="185" className="fill-rose-600 dark:fill-rose-400 text-[10px] font-bold font-mono">梁下層主筋 3-D25</text>

            {/* Core Joint Closely Spaced Ties */}
            <rect x="195" y="95" width="110" height="90" rx="4" className="stroke-amber-600 dark:stroke-amber-400 fill-amber-500/10" strokeWidth="1.5" strokeDasharray="3 3" />
            <line x1="200" y1="110" x2="300" y2="110" stroke="currentColor" strokeWidth="1.5" className="text-amber-600" />
            <line x1="200" y1="130" x2="300" y2="130" stroke="currentColor" strokeWidth="1.5" className="text-amber-600" />
            <line x1="200" y1="150" x2="300" y2="150" stroke="currentColor" strokeWidth="1.5" className="text-amber-600" />
            <line x1="200" y1="170" x2="300" y2="170" stroke="currentColor" strokeWidth="1.5" className="text-amber-600" />
            <text x="250" y="215" textAnchor="middle" className="fill-amber-800 dark:fill-amber-300 text-[10px] font-mono font-bold">接頭核心密排箍筋 D13 @ 10cm (135° 耐震鉤)</text>
          </svg>
        );

      case 'physics':
        return (
          <svg viewBox="0 0 600 280" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="600" height="280" rx="12" className="fill-emerald-500/5 dark:fill-emerald-950/20" />
            
            {/* Sun Rays (Outdoor Left) */}
            <circle cx="70" cy="50" r="22" className="fill-amber-400/80 stroke-amber-500" strokeWidth="2" />
            <line x1="70" y1="20" x2="70" y2="10" stroke="currentColor" strokeWidth="2" className="text-amber-500" />
            <line x1="95" y1="50" x2="105" y2="50" stroke="currentColor" strokeWidth="2" className="text-amber-500" />
            <line x1="88" y1="68" x2="98" y2="78" stroke="currentColor" strokeWidth="2" className="text-amber-500" />
            <text x="70" y="100" textAnchor="middle" className="fill-amber-700 dark:fill-amber-300 text-[11px] font-bold">室外高溫 36°C</text>
            <text x="70" y="115" textAnchor="middle" className="fill-amber-600 text-[9px] font-mono">Solar Heat 800 W/m²</text>

            {/* Composite Wall Layers (Series of Slabs) */}
            {/* Layer 1: Tile */}
            <rect x="150" y="40" width="30" height="190" rx="2" className="fill-stone-300 dark:fill-stone-700 stroke-stone-400" strokeWidth="1" />
            <text x="165" y="245" textAnchor="middle" className="fill-slate-600 dark:text-slate-400 text-[9px] font-mono">磨石子 3cm</text>

            {/* Layer 2: XPS Insulation */}
            <rect x="180" y="40" width="65" height="190" rx="2" className="fill-blue-400/40 dark:fill-blue-600/40 stroke-blue-500" strokeWidth="2" />
            <text x="212" y="130" textAnchor="middle" className="fill-blue-900 dark:fill-blue-100 text-xs font-bold font-mono">XPS 保溫板 5cm</text>
            <text x="212" y="145" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[9px] font-mono">R = 1.67 m²·K/W</text>
            <text x="212" y="245" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400 text-[9px] font-bold">★ 85% 隔熱貢獻</text>

            {/* Layer 3: Waterproof Membrane */}
            <line x1="247" y1="40" x2="247" y2="230" stroke="currentColor" strokeWidth="3" className="text-rose-600" />

            {/* Layer 4: Concrete RC Slab */}
            <rect x="250" y="40" width="130" height="190" rx="2" className="fill-slate-300 dark:fill-slate-800 stroke-slate-400" strokeWidth="1" />
            <text x="315" y="135" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 text-xs font-bold font-mono">RC 結構板 15cm</text>
            <text x="315" y="150" textAnchor="middle" className="fill-slate-600 dark:text-slate-400 text-[9px] font-mono">R = 0.086 m²·K/W</text>
            <text x="315" y="245" textAnchor="middle" className="fill-slate-600 dark:text-slate-400 text-[9px] font-mono">混凝土層</text>

            {/* Temperature Gradient Line (Steep drop across XPS) */}
            <path d="M 130 65 L 180 80 L 245 190 L 380 200 L 450 205" stroke="currentColor" strokeWidth="3" className="text-rose-600 dark:text-rose-400" />
            <circle cx="180" cy="80" r="4" className="fill-rose-600" />
            <circle cx="245" cy="190" r="4" className="fill-blue-600" />
            <text x="280" y="185" className="fill-rose-700 dark:fill-rose-300 text-[10px] font-bold">急遽溫降線 (ΔT = 24°C)</text>

            {/* Indoor Comfortable Space (Right) */}
            <rect x="420" y="50" width="140" height="170" rx="10" className="fill-emerald-500/10 stroke-emerald-500/30" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="490" y="125" textAnchor="middle" className="fill-emerald-900 dark:fill-emerald-100 text-xs font-bold">室內恆溫 24°C</text>
            <text x="490" y="145" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[10px] font-mono">U = 0.514 W/m²·K</text>
            <text x="490" y="165" textAnchor="middle" className="fill-emerald-600 dark:fill-emerald-400 text-[9px] font-bold">符合綠建築 EEWH 標章</text>
          </svg>
        );

      case 'structure':
        return (
          <svg viewBox="0 0 600 280" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="600" height="280" rx="12" className="fill-sky-500/5 dark:fill-sky-950/20" />
            
            {/* 5-Story Building Frame */}
            {/* Columns */}
            <line x1="160" y1="30" x2="160" y2="230" stroke="currentColor" strokeWidth="5" className="text-slate-400 dark:text-slate-600" />
            <line x1="280" y1="30" x2="280" y2="230" stroke="currentColor" strokeWidth="5" className="text-slate-400 dark:text-slate-600" />
            <line x1="400" y1="30" x2="400" y2="230" stroke="currentColor" strokeWidth="5" className="text-slate-400 dark:text-slate-600" />

            {/* Floor Slabs */}
            <line x1="140" y1="30" x2="420" y2="30" stroke="currentColor" strokeWidth="4" className="text-sky-600" />
            <line x1="140" y1="70" x2="420" y2="70" stroke="currentColor" strokeWidth="4" className="text-sky-600" />
            <line x1="140" y1="110" x2="420" y2="110" stroke="currentColor" strokeWidth="4" className="text-sky-600" />
            <line x1="140" y1="150" x2="420" y2="150" stroke="currentColor" strokeWidth="4" className="text-sky-600" />
            <line x1="140" y1="190" x2="420" y2="190" stroke="currentColor" strokeWidth="4" className="text-sky-600" />

            {/* Foundation Line */}
            <line x1="120" y1="230" x2="440" y2="230" stroke="currentColor" strokeWidth="6" className="text-slate-800 dark:text-slate-300" />
            <text x="280" y="255" textAnchor="middle" className="fill-slate-600 dark:text-slate-400 text-xs font-mono font-bold">剛性筏式基礎 (GL ±0.0m)</text>

            {/* Inverted Triangle Seismic Force Distribution (Left) */}
            <path d="M 60 30 L 140 30" stroke="currentColor" strokeWidth="3" markerEnd="url(#arrow)" className="text-rose-600" />
            <text x="50" y="34" textAnchor="end" className="fill-rose-600 font-bold font-mono text-xs">F5 = 80 tf (最大)</text>

            <path d="M 75 70 L 140 70" stroke="currentColor" strokeWidth="2.5" className="text-rose-500" />
            <text x="65" y="74" textAnchor="end" className="fill-rose-500 font-mono text-[10px]">F4 = 64 tf</text>

            <path d="M 90 110 L 140 110" stroke="currentColor" strokeWidth="2" className="text-rose-500" />
            <text x="80" y="114" textAnchor="end" className="fill-rose-500 font-mono text-[10px]">F3 = 48 tf</text>

            <path d="M 105 150 L 140 150" stroke="currentColor" strokeWidth="1.5" className="text-rose-400" />
            <text x="95" y="154" textAnchor="end" className="fill-rose-400 font-mono text-[10px]">F2 = 32 tf</text>

            <path d="M 120 190 L 140 190" stroke="currentColor" strokeWidth="1" className="text-rose-300" />
            <text x="110" y="194" textAnchor="end" className="fill-rose-300 font-mono text-[10px]">F1 = 16 tf</text>

            {/* Inverted Triangle dashed outline */}
            <path d="M 50 25 L 130 220" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="text-rose-400/60" />

            {/* Base Shear Reaction (V = 240 tf) */}
            <path d="M 440 230 L 530 230" stroke="currentColor" strokeWidth="4" className="text-blue-600 dark:text-blue-400" />
            <text x="485" y="220" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 font-bold font-mono text-xs">基底剪力 V = 240 tf</text>
            <text x="485" y="248" textAnchor="middle" className="fill-blue-600 dark:fill-blue-400 text-[10px] font-mono">ΣFi = 240 tf 平衡</text>
          </svg>
        );

      case 'site':
        return (
          <svg viewBox="0 0 600 280" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="600" height="280" rx="12" className="fill-indigo-500/5 dark:fill-indigo-950/20" />
            
            {/* Original Natural Slope Line */}
            <path d="M 60 50 L 540 210" stroke="currentColor" strokeWidth="2" strokeDasharray="4 3" className="text-slate-400 dark:text-slate-500" />
            <text x="100" y="60" className="fill-slate-500 font-mono text-[10px]">原始山坡地表 (坡度 10%)</text>
            <text x="500" y="225" className="fill-slate-500 font-mono text-[10px]">+13.5m 西端</text>
            <text x="70" y="45" className="fill-slate-500 font-mono text-[10px]">+16.5m 東端</text>

            {/* Cut Area (Excavation) */}
            <path d="M 120 70 L 300 130 L 120 130 Z" className="fill-rose-500/25 stroke-rose-500" strokeWidth="1.5" />
            <text x="170" y="115" className="fill-rose-800 dark:fill-rose-200 font-bold text-xs font-mono">挖方區 (Cut) 225 m³</text>
            <text x="170" y="95" className="fill-rose-600 text-[10px] font-mono">h_max = +1.5m</text>

            {/* Fill Area (Compacted Earth) */}
            <path d="M 300 130 L 480 190 L 480 130 Z" className="fill-emerald-500/25 stroke-emerald-500" strokeWidth="1.5" />
            <text x="390" y="155" className="fill-emerald-800 dark:fill-emerald-200 font-bold text-xs font-mono">填方區 (Fill) 225 m³</text>
            <text x="390" y="175" className="fill-emerald-600 text-[10px] font-mono">h_max = -1.5m</text>

            {/* Graded Flat Building Platform (+15.0m Level) */}
            <line x1="120" y1="130" x2="480" y2="130" stroke="currentColor" strokeWidth="4" className="text-indigo-600 dark:text-indigo-400" />
            <text x="300" y="122" textAnchor="middle" className="fill-indigo-900 dark:fill-indigo-100 font-bold text-xs font-sans">
              平坦建築平台 20×30m (標高 +15.0m · 完美零土方外運)
            </text>

            {/* Retaining Wall & Drainage */}
            <rect x="475" y="130" width="10" height="60" className="fill-stone-600" />
            <text x="495" y="165" className="fill-stone-700 dark:fill-stone-300 text-[10px] font-mono font-bold">加勁擋土牆</text>

            {/* U-Shape Intercepting Ditch (East Mountain Top) */}
            <rect x="110" y="65" width="10" height="8" className="fill-blue-500" />
            <text x="90" y="85" textAnchor="end" className="fill-blue-600 text-[9px] font-bold">截水溝 (Catch Drain)</text>
          </svg>
        );

      case 'codes':
        return (
          <svg viewBox="0 0 600 280" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="600" height="280" rx="12" className="fill-rose-500/5 dark:fill-rose-950/20" />
            
            {/* Big Floor Plan Outer Wall */}
            <rect x="60" y="30" width="480" height="200" rx="8" className="stroke-slate-700 dark:stroke-slate-300 fill-white/80 dark:fill-slate-900/80" strokeWidth="2.5" />
            
            {/* 1-Hour Fire Compartment Wall (Dividing line) */}
            <line x1="300" y1="30" x2="300" y2="230" stroke="currentColor" strokeWidth="3" strokeDasharray="6 3" className="text-rose-600" />
            <rect x="294" y="115" width="12" height="30" className="fill-amber-500" />
            <text x="300" y="110" textAnchor="middle" className="fill-rose-600 text-[9px] font-bold">甲種 60A 防火門</text>

            {/* Egress Stair 1 (Left Wing) */}
            <rect x="75" y="45" width="55" height="65" rx="4" className="fill-emerald-500/20 stroke-emerald-600" strokeWidth="2" />
            <text x="102" y="75" textAnchor="middle" className="fill-emerald-800 dark:fill-emerald-200 text-[10px] font-bold font-mono">特別安全梯 1</text>
            <text x="102" y="90" textAnchor="middle" className="fill-emerald-600 text-[9px] font-mono">排煙室 W ≥ 1.6m</text>

            {/* Egress Stair 2 (Right Wing) */}
            <rect x="470" y="150" width="55" height="65" rx="4" className="fill-emerald-500/20 stroke-emerald-600" strokeWidth="2" />
            <text x="497" y="180" textAnchor="middle" className="fill-emerald-800 dark:fill-emerald-200 text-[10px] font-bold font-mono">特別安全梯 2</text>
            <text x="497" y="195" textAnchor="middle" className="fill-emerald-600 text-[9px] font-mono">排煙室 W ≥ 1.6m</text>

            {/* Walk Distance Path Measurement (From corner to stair) */}
            <circle cx="85" cy="205" r="4" className="fill-rose-600" />
            <text x="95" y="215" className="fill-rose-700 dark:fill-rose-300 text-[10px] font-bold font-mono">最遠點 (Corner Point)</text>
            <path d="M 85 205 L 85 110 L 102 110" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" className="text-blue-600" />
            <text x="95" y="145" className="fill-blue-700 dark:fill-blue-300 text-[10px] font-mono font-bold">步行距離 L = 42m ≤ 50m (合法)</text>

            {/* Two-way Egress Diagonal Distance (Separation Rule) */}
            <line x1="130" y1="80" x2="470" y2="180" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="text-slate-400" />
            <text x="310" y="180" textAnchor="middle" className="fill-slate-500 text-[9px] font-mono">樓梯間距 D ≥ 1/3 最大對角線 (符合雙向逃生)</text>
          </svg>
        );

      case 'digital':
        return (
          <svg viewBox="0 0 600 280" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="600" height="280" rx="12" className="fill-purple-500/5 dark:fill-purple-950/20" />
            
            {/* Grasshopper Canvas Wireflow */}
            {/* Node 1: Divide Curve */}
            <rect x="40" y="70" width="90" height="50" rx="6" className="fill-slate-800 stroke-purple-500" strokeWidth="1.5" />
            <text x="85" y="92" textAnchor="middle" className="fill-white text-[10px] font-mono font-bold">DivideCurve</text>
            <text x="85" y="106" textAnchor="middle" className="fill-purple-300 text-[8px] font-mono">Count = 100</text>

            {/* Wire to Node 2 */}
            <path d="M 130 95 C 150 95, 150 95, 170 95" stroke="currentColor" strokeWidth="2" className="text-purple-400" />

            {/* Node 2: Sun Vector Angle */}
            <rect x="170" y="70" width="95" height="50" rx="6" className="fill-slate-800 stroke-amber-500" strokeWidth="1.5" />
            <text x="217" y="92" textAnchor="middle" className="fill-white text-[10px] font-mono font-bold">SunAngle 2D</text>
            <text x="217" y="106" textAnchor="middle" className="fill-amber-300 text-[8px] font-mono">Azimuth 95°</text>

            {/* Wire to Node 3 */}
            <path d="M 265 95 C 285 95, 285 95, 305 95" stroke="currentColor" strokeWidth="2" className="text-purple-400" />

            {/* Node 3: Remap / Bounds */}
            <rect x="305" y="70" width="85" height="50" rx="6" className="fill-slate-800 stroke-blue-500" strokeWidth="1.5" />
            <text x="347" y="92" textAnchor="middle" className="fill-white text-[10px] font-mono font-bold">RemapDomain</text>
            <text x="347" y="106" textAnchor="middle" className="fill-blue-300 text-[8px] font-mono">-75° ~ +75°</text>

            {/* Wire to Node 4: Rotate & Extrude */}
            <path d="M 390 95 C 410 95, 410 95, 430 95" stroke="currentColor" strokeWidth="2" className="text-purple-400" />
            <rect x="430" y="65" width="120" height="60" rx="6" className="fill-purple-900/80 stroke-purple-400" strokeWidth="2" />
            <text x="490" y="90" textAnchor="middle" className="fill-white text-[11px] font-mono font-bold">Rotate & Extrude</text>
            <text x="490" y="108" textAnchor="middle" className="fill-emerald-300 text-[9px] font-mono">3D Louvers Gen</text>

            {/* Parametric Louvers Visual Model Preview (Bottom) */}
            <rect x="80" y="175" width="440" height="70" rx="8" className="fill-slate-900/90 stroke-slate-700" strokeWidth="1" />
            {Array.from({ length: 18 }).map((_, i) => {
              const angle = -50 + i * 6;
              const x = 100 + i * 23;
              return (
                <g key={i} transform={`rotate(${angle} ${x} 210)`}>
                  <line x1={x} y1="190" x2={x} y2="230" stroke="currentColor" strokeWidth="3" className="text-amber-400 dark:text-amber-300" />
                </g>
              );
            })}
            <text x="300" y="260" textAnchor="middle" className="fill-slate-400 text-[9px] font-mono">
              ★ 即時立面百葉旋轉角度漸變 (隨太陽照射仰角自動調控開孔遮陽)
            </text>
          </svg>
        );

      case 'history':
      default:
        return (
          <svg viewBox="0 0 600 280" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="600" height="280" rx="12" className="fill-amber-500/5 dark:fill-amber-950/20" />
            
            {/* Dom-Ino Concrete Slab Frame */}
            {/* Bottom Slab */}
            <polygon points="120,200 440,200 480,225 160,225" className="fill-slate-300 dark:fill-slate-700 stroke-amber-700" strokeWidth="1.5" />
            {/* Middle Slab */}
            <polygon points="120,130 440,130 480,155 160,155" className="fill-slate-300 dark:fill-slate-700 stroke-amber-700" strokeWidth="1.5" />
            {/* Roof Slab */}
            <polygon points="120,60 440,60 480,85 160,85" className="fill-slate-300 dark:fill-slate-700 stroke-amber-700" strokeWidth="1.5" />

            {/* 6 Slender Columns (Dom-Ino) */}
            <line x1="160" y1="60" x2="160" y2="225" stroke="currentColor" strokeWidth="4" className="text-amber-600" />
            <line x1="300" y1="60" x2="300" y2="225" stroke="currentColor" strokeWidth="4" className="text-amber-600" />
            <line x1="440" y1="60" x2="440" y2="225" stroke="currentColor" strokeWidth="4" className="text-amber-600" />

            {/* Ribbon Window Highlight on Mid Level */}
            <rect x="180" y="105" width="220" height="25" className="fill-sky-400/30 stroke-sky-500" strokeWidth="1.5" strokeDasharray="3 2" />
            <text x="290" y="122" textAnchor="middle" className="fill-sky-800 dark:fill-sky-200 text-[10px] font-bold font-mono">水平帶狀長窗 (Ribbon Window)</text>

            {/* Annotations */}
            <text x="90" y="45" className="fill-amber-800 dark:fill-amber-300 font-bold text-xs font-mono">屋頂花園 (Roof Garden)</text>
            <text x="490" y="145" className="fill-amber-800 dark:fill-amber-300 font-bold text-xs font-mono">自由立面 (Free Facade)</text>
            <text x="90" y="240" className="fill-amber-800 dark:fill-amber-300 font-bold text-xs font-mono">底層架空柱列 (Pilotis)</text>
          </svg>
        );
    }
  };

  return (
    <div className={`overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 px-5 py-3.5 bg-slate-50/70 dark:bg-slate-950/50">
        <div className="flex items-center gap-2">
          <span className="flex size-6 items-center justify-center rounded-lg bg-blue-600 text-white text-xs font-bold">
            📐
          </span>
          <h4 className="font-serif text-sm font-bold text-slate-900 dark:text-white">
            {illustration.title}
          </h4>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 dark:bg-blue-900/50 px-2.5 py-0.5 text-[10px] font-mono font-bold text-blue-800 dark:text-blue-300">
          <Sparkles className="size-3" />
          大學課綱專屬視覺圖解
        </span>
      </div>

      {/* SVG Canvas Area */}
      <div className="p-4 sm:p-6 bg-slate-50/30 dark:bg-slate-950/30">
        {renderSvgDiagram()}
      </div>

      {/* Diagram Description */}
      <div className="border-t border-slate-100 dark:border-slate-800 p-4 sm:p-5 bg-white dark:bg-slate-900 space-y-3">
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
          {illustration.diagramDescription}
        </p>

        {/* Visual Highlights Points */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
          {illustration.visualHighlights.map((point, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/40 p-3 space-y-1"
            >
              <div className="flex items-center justify-between gap-1">
                <span className="font-serif font-bold text-xs text-slate-900 dark:text-white">
                  {point.label}
                </span>
                {point.badge && (
                  <span className="rounded bg-slate-200 dark:bg-slate-800 px-1.5 py-0.2 text-[9px] font-mono font-semibold text-slate-700 dark:text-slate-300">
                    {point.badge}
                  </span>
                )}
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
