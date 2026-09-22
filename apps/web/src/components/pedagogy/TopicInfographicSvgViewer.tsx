'use client';

import React, { useState } from 'react';
import type { InfographicAnnotation } from '@/lib/pedagogy/topicInfographicsData';

interface TopicInfographicSvgViewerProps {
  conceptType: string;
  topicSlug: string;
  subjectSlug: string;
  title: string;
  visualHighlights?: InfographicAnnotation[];
  className?: string;
}

export default function TopicInfographicSvgViewer({
  conceptType,
  topicSlug,
  subjectSlug,
  title,
  visualHighlights = [],
  className = '',
}: TopicInfographicSvgViewerProps) {
  const [activeHighlightIndex, setActiveHighlightIndex] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'blueprint' | 'schematic'>('blueprint');

  // Blueprint Grid Definition
  const renderDefs = () => (
    <defs>
      <pattern id="arch-blueprint-grid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-indigo-500/10 dark:text-cyan-400/15" />
      </pattern>
      <pattern id="arch-blueprint-grid-major" width="100" height="100" patternUnits="userSpaceOnUse">
        <rect width="100" height="100" fill="url(#arch-blueprint-grid)" />
        <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1" className="text-indigo-500/20 dark:text-cyan-400/25" />
      </pattern>
      <marker id="arrow-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 10 5 L 0 9 z" className="fill-blue-600 dark:fill-blue-400" />
      </marker>
      <marker id="arrow-rose" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 10 5 L 0 9 z" className="fill-rose-600 dark:fill-rose-400" />
      </marker>
      <marker id="arrow-emerald" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 10 5 L 0 9 z" className="fill-emerald-600 dark:fill-emerald-400" />
      </marker>
      <marker id="arrow-amber" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 10 5 L 0 9 z" className="fill-amber-600 dark:fill-amber-400" />
      </marker>
      <marker id="dot-blue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4">
        <circle cx="5" cy="5" r="4" className="fill-blue-600 dark:fill-blue-400" />
      </marker>
    </defs>
  );

  // 1. EQUILIBRIUM VECTOR DIAGRAM
  const renderEquilibriumVector = () => (
    <g className="transition-all duration-300">
      {/* Coordinate Axes */}
      <line x1="50" y1="200" x2="360" y2="200" stroke="currentColor" strokeWidth="1.5" className="text-slate-400 dark:text-slate-600" markerEnd="url(#arrow-blue)" />
      <line x1="180" y1="320" x2="180" y2="40" stroke="currentColor" strokeWidth="1.5" className="text-slate-400 dark:text-slate-600" markerEnd="url(#arrow-blue)" />
      <text x="365" y="204" className="fill-slate-600 dark:fill-slate-400 text-[11px] font-mono font-bold">+X</text>
      <text x="180" y="30" textAnchor="middle" className="fill-slate-600 dark:fill-slate-400 text-[11px] font-mono font-bold">+Y</text>
      <text x="170" y="215" textAnchor="end" className="fill-slate-500 text-[10px] font-mono">O(0,0)</text>

      {/* Force Vectors from Origin */}
      {/* F1 Vector */}
      <line x1="180" y1="200" x2="310" y2="100" stroke="currentColor" strokeWidth="3" className="text-blue-600 dark:text-blue-400" markerEnd="url(#arrow-blue)" />
      <text x="320" y="95" className="fill-blue-700 dark:fill-blue-300 text-xs font-mono font-bold">F₁ = 100 kN (37°)</text>
      <line x1="310" y1="100" x2="310" y2="200" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="text-blue-400/70" />
      <line x1="310" y1="100" x2="180" y2="100" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="text-blue-400/70" />
      <text x="312" y="160" className="fill-blue-600 dark:fill-blue-400 text-[10px] font-mono">F₁y = 60 kN</text>
      <text x="245" y="215" className="fill-blue-600 dark:fill-blue-400 text-[10px] font-mono">F₁x = 80 kN</text>

      {/* F2 Vector */}
      <line x1="180" y1="200" x2="90" y2="120" stroke="currentColor" strokeWidth="2.5" className="text-amber-600 dark:text-amber-400" markerEnd="url(#arrow-amber)" />
      <text x="75" y="115" className="fill-amber-700 dark:fill-amber-300 text-xs font-mono font-bold">F₂ = 70 kN (140°)</text>

      {/* Resultant Vector R */}
      <line x1="180" y1="200" x2="260" y2="60" stroke="currentColor" strokeWidth="3.5" className="text-rose-600 dark:text-rose-400" markerEnd="url(#arrow-rose)" />
      <text x="270" y="55" className="fill-rose-700 dark:fill-rose-300 text-xs font-mono font-bold">合力 R = ΣF = 145 kN</text>

      {/* Vector Equilibrium Polygon (Right Side) */}
      <g transform="translate(420, 40)">
        <rect width="300" height="260" rx="12" className="fill-white/70 dark:fill-slate-900/70 stroke-slate-200 dark:stroke-slate-800" strokeWidth="1" />
        <text x="20" y="28" className="fill-indigo-900 dark:fill-indigo-200 text-xs font-bold font-sans">
          閉合力多邊形 (Force Polygon Equilibrium)
        </text>
        <text x="20" y="44" className="fill-slate-500 text-[10px] font-mono">
          首尾相接封閉時 ΣF = 0 (結構靜態平衡條件)
        </text>

        {/* Triangle / Polygon Path */}
        <path d="M 60 190 L 220 90 L 170 230 Z" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-emerald-600 dark:text-emerald-400" />
        <line x1="60" y1="190" x2="220" y2="90" stroke="currentColor" strokeWidth="2.5" className="text-blue-600" markerEnd="url(#arrow-blue)" />
        <line x1="220" y1="90" x2="170" y2="230" stroke="currentColor" strokeWidth="2.5" className="text-amber-600" markerEnd="url(#arrow-amber)" />
        <line x1="170" y1="230" x2="60" y2="190" stroke="currentColor" strokeWidth="2.5" className="text-rose-600" markerEnd="url(#arrow-rose)" />

        <text x="140" y="125" className="fill-blue-700 dark:fill-blue-300 text-[10px] font-mono font-bold">F₁ 向量</text>
        <text x="205" y="170" className="fill-amber-700 dark:fill-amber-300 text-[10px] font-mono font-bold">F₂ 向量</text>
        <text x="100" y="225" className="fill-rose-700 dark:fill-rose-300 text-[10px] font-mono font-bold">-R 平衡力</text>
        <circle cx="60" cy="190" r="4" className="fill-emerald-600" />
        <text x="50" y="180" className="fill-emerald-700 dark:fill-emerald-300 text-[9px] font-bold">閉合起點=終點</text>
      </g>
    </g>
  );

  // 2. STRUCTURAL STRESS & BEAM SFD/BMD
  const renderStructuralStress = () => (
    <g className="transition-all duration-300">
      {/* 1. Beam Layout */}
      <g transform="translate(60, 25)">
        <text x="0" y="12" className="fill-slate-800 dark:fill-slate-200 text-xs font-bold font-sans">
          簡支梁受載與支承反力 (Simple Beam & Load)
        </text>
        {/* Beam Body */}
        <rect x="50" y="30" width="300" height="12" rx="2" className="fill-slate-300 dark:fill-slate-700 stroke-slate-500" strokeWidth="1" />
        {/* Pin Support A */}
        <polygon points="50,42 40,60 60,60" className="fill-teal-600 dark:fill-teal-500" />
        <line x1="35" y1="62" x2="65" y2="62" stroke="currentColor" strokeWidth="2" className="text-teal-800 dark:text-teal-300" />
        <text x="50" y="75" textAnchor="middle" className="fill-teal-800 dark:fill-teal-300 text-[10px] font-mono font-bold">A點 (鉸支承)</text>
        {/* Roller Support B */}
        <polygon points="350,42 340,56 360,56" className="fill-teal-600 dark:fill-teal-500" />
        <circle cx="344" cy="59" r="2.5" className="fill-teal-700" />
        <circle cx="356" cy="59" r="2.5" className="fill-teal-700" />
        <line x1="335" y1="63" x2="365" y2="63" stroke="currentColor" strokeWidth="2" className="text-teal-800 dark:text-teal-300" />
        <text x="350" y="75" textAnchor="middle" className="fill-teal-800 dark:fill-teal-300 text-[10px] font-mono font-bold">B點 (滾支承)</text>
        {/* Applied Point Load P */}
        <line x1="170" y1="5" x2="170" y2="28" stroke="currentColor" strokeWidth="3" className="text-rose-600" markerEnd="url(#arrow-rose)" />
        <text x="170" y="0" textAnchor="middle" className="fill-rose-700 dark:fill-rose-400 text-xs font-mono font-bold">P = 60 kN</text>
        {/* Dimension Line */}
        <line x1="50" y1="20" x2="170" y2="20" stroke="currentColor" strokeWidth="1" className="text-slate-400" />
        <line x1="170" y1="20" x2="350" y2="20" stroke="currentColor" strokeWidth="1" className="text-slate-400" />
        <text x="110" y="16" textAnchor="middle" className="fill-slate-500 text-[9px] font-mono">a = 2 m</text>
        <text x="260" y="16" textAnchor="middle" className="fill-slate-500 text-[9px] font-mono">b = 4 m (L = 6 m)</text>
      </g>

      {/* 2. Shear Force Diagram (SFD) */}
      <g transform="translate(60, 115)">
        <text x="0" y="10" className="fill-indigo-700 dark:fill-indigo-300 text-[11px] font-bold font-mono">
          剪力圖 SFD (Shear Force Diagram)
        </text>
        <line x1="50" y1="35" x2="350" y2="35" stroke="currentColor" strokeWidth="1" className="text-slate-400" />
        {/* SFD Shape */}
        <polygon points="50,35 50,10 170,10 170,35" className="fill-blue-500/20 stroke-blue-600 dark:stroke-blue-400" strokeWidth="1.5" />
        <polygon points="170,35 170,55 350,55 350,35" className="fill-rose-500/20 stroke-rose-600 dark:stroke-rose-400" strokeWidth="1.5" />
        <text x="110" y="25" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[10px] font-mono font-bold">+VA = +40 kN</text>
        <text x="260" y="48" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 text-[10px] font-mono font-bold">-VB = -20 kN</text>
        <line x1="170" y1="30" x2="170" y2="40" stroke="currentColor" strokeWidth="2" className="text-amber-500" />
        <text x="175" y="32" className="fill-amber-600 dark:fill-amber-400 text-[9px] font-bold font-mono">剪力過零點 (V=0)</text>
      </g>

      {/* 3. Bending Moment Diagram (BMD) */}
      <g transform="translate(60, 205)">
        <text x="0" y="10" className="fill-purple-700 dark:fill-purple-300 text-[11px] font-bold font-mono">
          彎矩圖 BMD (Bending Moment Diagram)
        </text>
        <line x1="50" y1="15" x2="350" y2="15" stroke="currentColor" strokeWidth="1" className="text-slate-400" />
        {/* BMD Triangle */}
        <polygon points="50,15 170,65 350,15" className="fill-purple-500/20 stroke-purple-600 dark:stroke-purple-400" strokeWidth="2" />
        <text x="170" y="78" textAnchor="middle" className="fill-purple-800 dark:fill-purple-200 text-[11px] font-mono font-bold">
          M_max = +80 kN·m (剪力面積 40×2)
        </text>
        <text x="170" y="90" textAnchor="middle" className="fill-purple-600 dark:fill-purple-400 text-[9px] font-mono">
          dM/dx = V (正彎矩下凹：上壓下拉)
        </text>
      </g>

      {/* 4. Cross Section Stress Distribution (Right Side) */}
      <g transform="translate(450, 30)">
        <rect width="270" height="270" rx="12" className="fill-white/70 dark:fill-slate-900/70 stroke-slate-200 dark:stroke-slate-800" strokeWidth="1" />
        <text x="20" y="26" className="fill-slate-900 dark:fill-white text-xs font-bold font-sans">
          梁截面彎曲應力分佈 (σ = M·y / I)
        </text>

        {/* Rectangular Beam Section */}
        <rect x="30" y="60" width="50" height="150" className="fill-slate-200 dark:fill-slate-800 stroke-slate-500" strokeWidth="1.5" />
        <text x="55" y="52" textAnchor="middle" className="fill-slate-600 text-[9px] font-mono">b = 200</text>
        <text x="15" y="140" textAnchor="middle" className="fill-slate-600 text-[9px] font-mono">h=400</text>

        {/* Neutral Axis */}
        <line x1="20" y1="135" x2="240" y2="135" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" className="text-amber-600" />
        <text x="245" y="139" className="fill-amber-600 text-[10px] font-bold font-mono">中性軸 (N.A. σ=0)</text>

        {/* Stress Distribution Arrows */}
        {/* Top Compression */}
        <polygon points="120,60 180,60 120,135" className="fill-rose-500/20 stroke-rose-600" strokeWidth="1.5" />
        <line x1="180" y1="75" x2="135" y2="75" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow-rose)" className="text-rose-600" />
        <line x1="180" y1="100" x2="145" y2="100" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow-rose)" className="text-rose-600" />
        <text x="190" y="65" className="fill-rose-700 dark:fill-rose-400 text-[10px] font-mono font-bold">壓應力 -σ_top</text>

        {/* Bottom Tension */}
        <polygon points="120,135 60,210 120,210" className="fill-blue-500/20 stroke-blue-600" strokeWidth="1.5" />
        <line x1="120" y1="170" x2="85" y2="170" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow-blue)" className="text-blue-600" />
        <line x1="120" y1="195" x2="70" y2="195" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow-blue)" className="text-blue-600" />
        <text x="130" y="215" className="fill-blue-700 dark:fill-blue-400 text-[10px] font-mono font-bold">拉應力 +σ_bot</text>
      </g>
    </g>
  );

  // 3. MATERIAL REACTION & HYDRATION
  const renderMaterialReaction = () => (
    <g className="transition-all duration-300">
      {/* Hydration Heat Evolution Curve */}
      <g transform="translate(60, 30)">
        <text x="0" y="14" className="fill-slate-900 dark:fill-white text-xs font-bold font-sans">
          卜特蘭水泥水化放熱與凝結時序曲線 (Hydration Heat Curve)
        </text>
        {/* Axes */}
        <line x1="40" y1="230" x2="380" y2="230" stroke="currentColor" strokeWidth="1.5" className="text-slate-500" markerEnd="url(#arrow-blue)" />
        <line x1="40" y1="230" x2="40" y2="40" stroke="currentColor" strokeWidth="1.5" className="text-slate-500" markerEnd="url(#arrow-blue)" />
        <text x="385" y="234" className="fill-slate-600 text-[10px] font-mono">時間 Time (hr)</text>
        <text x="40" y="30" textAnchor="middle" className="fill-slate-600 text-[10px] font-mono">放熱率 dQ/dt</text>

        {/* 5 Stages Background Bands */}
        <rect x="40" y="40" width="30" height="190" className="fill-blue-500/5" />
        <rect x="70" y="40" width="70" height="190" className="fill-amber-500/5" />
        <rect x="140" y="40" width="90" height="190" className="fill-rose-500/5" />
        <rect x="230" y="40" width="90" height="190" className="fill-emerald-500/5" />
        <rect x="320" y="40" width="50" height="190" className="fill-indigo-500/5" />

        {/* Curve */}
        <path
          d="M 40 180 Q 50 60 65 140 Q 90 220 130 215 Q 170 190 190 70 Q 210 110 240 170 Q 280 200 370 215"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          className="text-rose-600 dark:text-rose-400"
        />

        {/* Stage Annotations */}
        <text x="52" y="55" textAnchor="middle" className="fill-blue-700 text-[9px] font-bold">第I階段</text>
        <text x="52" y="66" textAnchor="middle" className="fill-slate-500 text-[8px]">初始溶解</text>

        <text x="105" y="55" textAnchor="middle" className="fill-amber-700 text-[9px] font-bold">第II階段 (休眠期)</text>
        <text x="105" y="66" textAnchor="middle" className="fill-slate-500 text-[8px]">2~4 hr 澆置運送</text>

        <text x="185" y="55" textAnchor="middle" className="fill-rose-700 text-[9px] font-bold">第III階段 (加速期)</text>
        <text x="185" y="66" textAnchor="middle" className="fill-slate-500 text-[8px]">4~10 hr 初凝/終凝</text>

        <text x="275" y="55" textAnchor="middle" className="fill-emerald-700 text-[9px] font-bold">第IV階段 (減速期)</text>
        <text x="275" y="66" textAnchor="middle" className="fill-slate-500 text-[8px]">12~24 hr 硬化起強</text>

        {/* Initial and Final Set Points */}
        <circle cx="160" cy="140" r="4" className="fill-amber-600" />
        <text x="135" y="135" className="fill-amber-800 dark:fill-amber-300 text-[9px] font-bold font-mono">初凝 (Vicat ≥ 45m)</text>

        <circle cx="195" cy="80" r="4" className="fill-rose-600" />
        <text x="202" y="85" className="fill-rose-800 dark:fill-rose-300 text-[9px] font-bold font-mono">終凝 (Vicat ≤ 375m)</text>
      </g>

      {/* Slump Cone Test Diagram (Right Side) */}
      <g transform="translate(460, 30)">
        <rect width="250" height="260" rx="12" className="fill-white/70 dark:fill-slate-900/70 stroke-slate-200 dark:stroke-slate-800" strokeWidth="1" />
        <text x="20" y="26" className="fill-slate-900 dark:fill-white text-xs font-bold font-sans">
          混凝土坍度試驗 (CNS 1176 Slump Test)
        </text>

        {/* Mold Cone Wireframe */}
        <polygon points="125,60 100,200 150,200" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" className="text-slate-400" />
        <text x="125" y="52" textAnchor="middle" className="fill-slate-500 text-[9px] font-mono">上徑 100mm</text>
        <text x="125" y="215" textAnchor="middle" className="fill-slate-500 text-[9px] font-mono">下徑 200mm | 高 300mm</text>

        {/* Deformed Concrete Slump */}
        <path d="M 115 110 Q 125 105 135 110 Q 165 140 160 200 L 90 200 Q 85 140 115 110 Z" className="fill-emerald-500/20 stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="2" />

        {/* Slump Measurement Bar */}
        <line x1="125" y1="60" x2="185" y2="60" stroke="currentColor" strokeWidth="1" className="text-rose-600" />
        <line x1="185" y1="60" x2="185" y2="110" stroke="currentColor" strokeWidth="2" className="text-rose-600" markerEnd="url(#arrow-rose)" />
        <line x1="135" y1="110" x2="185" y2="110" stroke="currentColor" strokeWidth="1" className="text-rose-600" />
        <text x="195" y="90" className="fill-rose-700 dark:fill-rose-400 text-xs font-mono font-bold">
          坍度 S (cm)
        </text>

        <text x="20" y="240" className="fill-slate-600 dark:text-slate-400 text-[10px] leading-relaxed">
          ★ 三層各 25 下搗實；真坍 (True) 正常工作性，剪坍 (Shear) 與崩坍 (Collapse) 判定不良。
        </text>
      </g>
    </g>
  );

  // 4. SURVEY GEOMETRY & LEVELING/TRAVERSE
  const renderSurveyGeometry = () => (
    <g className="transition-all duration-300">
      {/* Differential Leveling Schematic */}
      <g transform="translate(50, 30)">
        <text x="0" y="14" className="fill-slate-900 dark:fill-white text-xs font-bold font-sans">
          水準測量高程幾何與儀器高法 (Differential Leveling & HI Method)
        </text>

        {/* Ground Terrain Profile */}
        <path d="M 30 210 Q 100 210 180 180 T 350 140" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-emerald-700 dark:text-emerald-500" />
        <text x="360" y="145" className="fill-emerald-700 text-[10px] font-mono">地表面 (Ground)</text>

        {/* Benchmark BM A */}
        <rect x="50" y="130" width="10" height="80" className="fill-slate-300 dark:fill-slate-700 stroke-slate-600" strokeWidth="1" />
        <polygon points="55,210 50,225 60,225" className="fill-amber-600" />
        <text x="55" y="238" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 text-[10px] font-mono font-bold">BM A (RL = 100.000 m)</text>

        {/* Target Point B */}
        <rect x="310" y="60" width="10" height="80" className="fill-slate-300 dark:fill-slate-700 stroke-slate-600" strokeWidth="1" />
        <polygon points="315,140 310,155 320,155" className="fill-amber-600" />
        <text x="315" y="168" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 text-[10px] font-mono font-bold">點 B (待求高程)</text>

        {/* Level Instrument Tripod in Middle */}
        <g transform="translate(180, 110)">
          <line x1="0" y1="0" x2="-20" y2="70" stroke="currentColor" strokeWidth="2" className="text-slate-600" />
          <line x1="0" y1="0" x2="20" y2="70" stroke="currentColor" strokeWidth="2" className="text-slate-600" />
          <line x1="0" y1="0" x2="0" y2="70" stroke="currentColor" strokeWidth="2" className="text-slate-600" />
          <rect x="-15" y="-12" width="30" height="12" rx="2" className="fill-teal-600 stroke-teal-800" />
          <circle cx="0" cy="-6" r="3" className="fill-white" />
          <text x="0" y="-18" textAnchor="middle" className="fill-teal-700 dark:fill-teal-300 text-[9px] font-bold">水準儀 (Station 1)</text>
        </g>

        {/* Sight Line Collimation */}
        <line x1="55" y1="104" x2="315" y2="104" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" className="text-rose-600" />
        <text x="180" y="98" textAnchor="middle" className="fill-rose-700 dark:fill-rose-400 text-[10px] font-mono font-bold">
          視準軸 (水平視線 HI = RL_A + BS)
        </text>

        {/* Staff Readings BS and FS */}
        <text x="45" y="110" textAnchor="end" className="fill-blue-700 dark:fill-blue-300 text-[10px] font-mono font-bold">BS = 1.450 m (後視)</text>
        <text x="325" y="110" className="fill-rose-700 dark:fill-rose-300 text-[10px] font-mono font-bold">FS = 0.820 m (前視)</text>
        <text x="180" y="225" textAnchor="middle" className="fill-slate-600 dark:text-slate-400 text-[10px] font-mono">
          RL_B = HI - FS = (100.000 + 1.450) - 0.820 = 100.630 m
        </text>
      </g>

      {/* Closed Traverse Polygon (Right Side) */}
      <g transform="translate(440, 30)">
        <rect width="280" height="260" rx="12" className="fill-white/70 dark:fill-slate-900/70 stroke-slate-200 dark:stroke-slate-800" strokeWidth="1" />
        <text x="20" y="24" className="fill-slate-900 dark:fill-white text-xs font-bold font-sans">
          閉合導線多邊形與閉合差平差
        </text>

        {/* 5-sided Traverse Polygon */}
        <polygon
          points="80,180 50,100 140,60 220,110 190,190"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className="text-blue-600 dark:text-blue-400"
        />
        {/* Traverse Stations */}
        <circle cx="80" cy="180" r="4" className="fill-rose-600" />
        <circle cx="50" cy="100" r="4" className="fill-blue-600" />
        <circle cx="140" cy="60" r="4" className="fill-blue-600" />
        <circle cx="220" cy="110" r="4" className="fill-blue-600" />
        <circle cx="190" cy="190" r="4" className="fill-blue-600" />

        <text x="75" y="195" className="fill-slate-800 dark:fill-slate-200 text-[10px] font-bold font-mono">P1</text>
        <text x="40" y="98" className="fill-slate-800 dark:fill-slate-200 text-[10px] font-bold font-mono">P2</text>
        <text x="140" y="50" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 text-[10px] font-bold font-mono">P3</text>
        <text x="230" y="112" className="fill-slate-800 dark:fill-slate-200 text-[10px] font-bold font-mono">P4</text>
        <text x="195" y="205" className="fill-slate-800 dark:fill-slate-200 text-[10px] font-bold font-mono">P5</text>

        {/* Closure Error Vector Magnified */}
        <circle cx="80" cy="180" r="14" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="text-rose-500" />
        <line x1="80" y1="180" x2="88" y2="173" stroke="currentColor" strokeWidth="2" className="text-rose-600" markerEnd="url(#arrow-rose)" />
        <text x="96" y="175" className="fill-rose-600 text-[9px] font-mono font-bold">閉合差 ΔW</text>

        <text x="20" y="230" className="fill-slate-600 dark:text-slate-400 text-[10px] leading-relaxed">
          ★ 角度閉合條件：Σ內角 = (n - 2) × 180°<br />
          ★ 坐標閉合差：閉合比數 = 1 / (Σ邊長 / √(ΔN² + ΔE²))
        </text>
      </g>
    </g>
  );

  // 5. DRAFTING PROJECTION & CNS 11567
  const renderDraftingProjection = () => (
    <g className="transition-all duration-300">
      {/* 3rd Angle Projection Glass Box Unfolded */}
      <g transform="translate(60, 20)">
        <text x="0" y="16" className="fill-slate-900 dark:fill-white text-xs font-bold font-sans">
          CNS 11567 第三角投影正投影圖位展開 (Third-Angle Orthographic Projection)
        </text>

        {/* 1. TOP VIEW (俯視圖) */}
        <g transform="translate(80, 35)">
          <rect width="100" height="70" rx="4" className="fill-indigo-500/10 stroke-indigo-600 dark:stroke-indigo-400" strokeWidth="2" />
          <line x1="60" y1="0" x2="60" y2="70" stroke="currentColor" strokeWidth="1.5" className="text-indigo-600" />
          <line x1="0" y1="35" x2="60" y2="35" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" className="text-slate-400" />
          <text x="50" y="85" textAnchor="middle" className="fill-indigo-700 dark:fill-indigo-300 text-[10px] font-mono font-bold">
            俯視圖 (Top View)
          </text>
        </g>

        {/* 2. FRONT VIEW (前視圖 / 正立面) */}
        <g transform="translate(80, 135)">
          <rect width="100" height="80" rx="4" className="fill-blue-500/15 stroke-blue-600 dark:stroke-blue-400" strokeWidth="2.5" />
          <line x1="60" y1="0" x2="60" y2="80" stroke="currentColor" strokeWidth="2" className="text-blue-600" />
          <line x1="60" y1="40" x2="100" y2="40" stroke="currentColor" strokeWidth="1.5" className="text-blue-600" />
          <text x="50" y="96" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[10px] font-mono font-bold">
            前視圖 (Front View / 主視圖)
          </text>
        </g>

        {/* 3. RIGHT SIDE VIEW (右側視圖) */}
        <g transform="translate(230, 135)">
          <rect width="70" height="80" rx="4" className="fill-emerald-500/10 stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="2" />
          <line x1="0" y1="40" x2="70" y2="40" stroke="currentColor" strokeWidth="1.5" className="text-emerald-600" />
          <line x1="35" y1="40" x2="35" y2="80" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" className="text-slate-400" />
          <text x="35" y="96" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[10px] font-mono font-bold">
            右側視圖 (Right Side View)
          </text>
        </g>

        {/* 45 Degree Miter Line (輔助轉折線) */}
        <line x1="180" y1="105" x2="230" y2="105" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="text-amber-500" />
        <line x1="230" y1="105" x2="230" y2="135" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="text-amber-500" />
        <line x1="180" y1="35" x2="300" y2="35" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="text-amber-500" />
        <line x1="300" y1="35" x2="300" y2="135" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="text-amber-500" />
        <line x1="230" y1="105" x2="300" y2="35" stroke="currentColor" strokeWidth="2" className="text-amber-600" />
        <text x="270" y="65" className="fill-amber-700 text-[9px] font-mono font-bold">45° 轉折線</text>

        {/* Projection Alignments */}
        <line x1="180" y1="175" x2="230" y2="175" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="text-blue-400" />
        <line x1="130" y1="105" x2="130" y2="135" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="text-blue-400" />
        <text x="155" y="248" textAnchor="middle" className="fill-slate-600 text-[10px] font-mono">
          第三角法對位原則：「長對正、高平齊、寬相等」
        </text>
      </g>

      {/* 3D Isometric Preview & Symbol (Right Side) */}
      <g transform="translate(440, 20)">
        <rect width="280" height="270" rx="12" className="fill-white/70 dark:fill-slate-900/70 stroke-slate-200 dark:stroke-slate-800" strokeWidth="1" />
        <text x="20" y="24" className="fill-slate-900 dark:fill-white text-xs font-bold font-sans">
          等角立體圖與 CNS 投影辨識標誌
        </text>

        {/* 3D Isometric L-block */}
        <g transform="translate(60, 45)">
          <polygon points="40,20 100,0 140,25 80,45" className="fill-indigo-400/30 stroke-indigo-600" strokeWidth="1.5" />
          <polygon points="40,20 80,45 80,95 40,70" className="fill-blue-500/40 stroke-blue-700" strokeWidth="1.5" />
          <polygon points="80,45 140,25 140,75 80,95" className="fill-emerald-500/30 stroke-emerald-700" strokeWidth="1.5" />
          {/* Step Cut */}
          <polygon points="80,95 110,80 110,130 80,145" className="fill-slate-400/20 stroke-slate-600" strokeWidth="1" />
        </g>

        {/* Official 3rd Angle Symbol Cone */}
        <g transform="translate(40, 200)">
          <circle cx="25" cy="20" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
          <circle cx="25" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
          <line x1="0" y1="20" x2="50" y2="20" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" className="text-slate-500" />
          <line x1="25" y1="-5" x2="25" y2="45" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" className="text-slate-500" />

          {/* Truncated Cone */}
          <polygon points="65,10 65,30 95,38 95,2" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-slate-800 dark:text-slate-200" />
          <line x1="55" y1="20" x2="105" y2="20" stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" className="text-slate-500" />
          <text x="115" y="24" className="fill-indigo-700 dark:fill-indigo-300 text-[10px] font-mono font-bold">
            CNS 第三角法符號
          </text>
        </g>
      </g>
    </g>
  );

  // 6. FLOWCHART LOGIC
  const renderFlowchartLogic = () => (
    <g className="transition-all duration-300">
      <g transform="translate(50, 30)">
        <text x="0" y="14" className="fill-slate-900 dark:fill-white text-xs font-bold font-sans">
          統測破題 3 步驟決策樹 (3-Step Fast Decision Tree)
        </text>

        {/* Step 1 Node */}
        <g transform="translate(20, 40)">
          <rect width="180" height="50" rx="10" className="fill-blue-500/15 stroke-blue-600 dark:stroke-blue-400" strokeWidth="2" />
          <text x="90" y="22" textAnchor="middle" className="fill-blue-900 dark:fill-blue-100 text-xs font-bold font-sans">步驟 1：題型結構辨識</text>
          <text x="90" y="38" textAnchor="middle" className="fill-slate-600 text-[10px] font-mono">幾何自由度 / 支承條件 / 未知數</text>
        </g>
        <line x1="200" y1="65" x2="260" y2="65" stroke="currentColor" strokeWidth="2" className="text-blue-600" markerEnd="url(#arrow-blue)" />

        {/* Decision Diamond */}
        <g transform="translate(260, 25)">
          <polygon points="45,0 90,40 45,80 0,40" className="fill-amber-500/20 stroke-amber-600 dark:stroke-amber-400" strokeWidth="2" />
          <text x="45" y="37" textAnchor="middle" className="fill-amber-950 dark:fill-amber-100 text-[11px] font-bold">靜定結構?</text>
          <text x="45" y="49" textAnchor="middle" className="fill-amber-800 text-[9px] font-mono">r = 3n</text>
        </g>

        {/* Yes Branch -> Step 2 */}
        <line x1="350" y1="65" x2="410" y2="65" stroke="currentColor" strokeWidth="2" className="text-emerald-600" markerEnd="url(#arrow-emerald)" />
        <text x="375" y="55" className="fill-emerald-700 text-[10px] font-bold">是 (靜定)</text>

        <g transform="translate(410, 40)">
          <rect width="260" height="50" rx="10" className="fill-emerald-500/15 stroke-emerald-600 dark:stroke-emerald-400" strokeWidth="2" />
          <text x="130" y="22" textAnchor="middle" className="fill-emerald-900 dark:fill-emerald-100 text-xs font-bold font-sans">步驟 2：核心公式展開</text>
          <text x="130" y="38" textAnchor="middle" className="fill-slate-600 text-[10px] font-mono">ΣFx=0, ΣFy=0, ΣM=0 三平差獨立求解</text>
        </g>

        {/* No Branch -> Downward */}
        <line x1="305" y1="105" x2="305" y2="160" stroke="currentColor" strokeWidth="2" className="text-rose-600" markerEnd="url(#arrow-rose)" />
        <text x="312" y="135" className="fill-rose-700 text-[10px] font-bold">否 (靜不定/桁架)</text>

        <g transform="translate(200, 160)">
          <rect width="210" height="50" rx="10" className="fill-rose-500/15 stroke-rose-600 dark:stroke-rose-400" strokeWidth="2" />
          <text x="105" y="22" textAnchor="middle" className="fill-rose-900 dark:fill-rose-100 text-xs font-bold font-sans">節點法/截面法拆解</text>
          <text x="105" y="38" textAnchor="middle" className="fill-slate-600 text-[10px] font-mono">尋找零力桿 (Zero-Force Member)</text>
        </g>

        {/* Step 3: Verification */}
        <line x1="540" y1="90" x2="540" y2="160" stroke="currentColor" strokeWidth="2" className="text-purple-600" markerEnd="url(#arrow-blue)" />
        <g transform="translate(450, 160)">
          <rect width="220" height="70" rx="12" className="fill-purple-500/15 stroke-purple-600 dark:stroke-purple-400" strokeWidth="2" />
          <text x="110" y="24" textAnchor="middle" className="fill-purple-900 dark:fill-purple-100 text-xs font-bold font-sans">步驟 3：量綱與常識反算</text>
          <text x="110" y="42" textAnchor="middle" className="fill-purple-700 dark:fill-purple-300 text-[10px] font-mono font-bold">
            1. 單位統一 (N/mm² = MPa)<br />
            2. 正負號檢核 (拉+, 壓-)
          </text>
        </g>
      </g>
    </g>
  );

  // 7. COMPARATIVE MATRIX / RADAR
  const renderComparativeMatrix = () => (
    <g className="transition-all duration-300">
      <g transform="translate(60, 30)">
        <text x="0" y="14" className="fill-slate-900 dark:fill-white text-xs font-bold font-sans">
          工程材料性能與構造型態特徵對照矩陣
        </text>

        {/* 4 Radar Axes */}
        <g transform="translate(180, 140)">
          <circle cx="0" cy="0" r="90" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="text-slate-300 dark:text-slate-700" />
          <circle cx="0" cy="0" r="60" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="text-slate-300 dark:text-slate-700" />
          <circle cx="0" cy="0" r="30" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="text-slate-300 dark:text-slate-700" />
          <line x1="-110" y1="0" x2="110" y2="0" stroke="currentColor" strokeWidth="1.5" className="text-slate-400" />
          <line x1="0" y1="-110" x2="0" y2="110" stroke="currentColor" strokeWidth="1.5" className="text-slate-400" />

          <text x="0" y="-115" textAnchor="middle" className="fill-slate-700 dark:fill-slate-300 text-[10px] font-bold">軸力/抗壓強度</text>
          <text x="115" y="4" className="fill-slate-700 dark:fill-slate-300 text-[10px] font-bold">耐火耐候性</text>
          <text x="0" y="125" textAnchor="middle" className="fill-slate-700 dark:fill-slate-300 text-[10px] font-bold">跨距承載力</text>
          <text x="-115" y="4" textAnchor="end" className="fill-slate-700 dark:fill-slate-300 text-[10px] font-bold">循環減碳度</text>

          {/* Polygon A: RC Concrete */}
          <polygon points="0,-80 75,0 0,60 -30,0" className="fill-blue-500/25 stroke-blue-600" strokeWidth="2" />
          {/* Polygon B: Steel Structure */}
          <polygon points="0,-60 25,0 0,85 -50,0" className="fill-amber-500/25 stroke-amber-600" strokeWidth="2" />
        </g>

        {/* Legend */}
        <g transform="translate(420, 50)">
          <rect width="280" height="190" rx="10" className="fill-white/80 dark:fill-slate-900/80 stroke-slate-200 dark:stroke-slate-800" />
          <text x="20" y="26" className="fill-slate-900 dark:fill-white text-xs font-bold font-sans">構造體系指標比對清單</text>
          <g transform="translate(20, 45)">
            <rect width="12" height="12" rx="2" className="fill-blue-600" />
            <text x="20" y="10" className="fill-slate-800 dark:fill-slate-200 text-xs font-bold">RC 鋼筋混凝土構造</text>
            <text x="20" y="24" className="fill-slate-500 text-[10px]">自重大、耐火隔音佳、造價合宜、施工期長</text>
          </g>
          <g transform="translate(20, 95)">
            <rect width="12" height="12" rx="2" className="fill-amber-600" />
            <text x="20" y="10" className="fill-slate-800 dark:fill-slate-200 text-xs font-bold">SS 鋼骨結構</text>
            <text x="20" y="24" className="fill-slate-500 text-[10px]">韌性高、大跨度、施工極快、需被覆防火漆</text>
          </g>
        </g>
      </g>
    </g>
  );

  // 8. ENVIRONMENTAL PHYSICS & HVAC
  const renderEnvironmentalPhysics = () => (
    <g className="transition-all duration-300">
      <g transform="translate(50, 30)">
        <text x="0" y="14" className="fill-slate-900 dark:fill-white text-xs font-bold font-sans">
          建築物理環境：日照遮陽幾何與外殼熱傳導 (Solar Path & Envelope U-Value)
        </text>

        {/* Building Section with Sun Rays */}
        <g transform="translate(40, 50)">
          {/* Wall and Window */}
          <rect x="140" y="40" width="30" height="150" className="fill-slate-300 dark:fill-slate-700 stroke-slate-600" strokeWidth="2" />
          {/* Window Opening */}
          <rect x="140" y="80" width="30" height="70" className="fill-cyan-400/20 stroke-cyan-500" strokeWidth="1.5" />
          <text x="155" y="120" textAnchor="middle" className="fill-cyan-700 text-[9px] font-mono">開口部</text>

          {/* Horizontal Overhang (水平遮陽板) */}
          <rect x="80" y="75" width="60" height="8" className="fill-amber-600 stroke-amber-800" />
          <text x="110" y="70" textAnchor="middle" className="fill-amber-700 dark:fill-amber-300 text-[10px] font-bold font-mono">
            水平遮陽板 D
          </text>

          {/* Summer Sun 75 deg */}
          <circle cx="20" cy="10" r="14" className="fill-rose-500 shadow-lg" />
          <line x1="20" y1="10" x2="140" y2="80" stroke="currentColor" strokeWidth="2" className="text-rose-500" strokeDasharray="4 2" />
          <text x="38" y="15" className="fill-rose-600 text-[10px] font-bold">夏至正午 (高角度 75°)</text>
          <text x="80" y="110" className="fill-emerald-700 dark:fill-emerald-300 text-[9px] font-bold">✓ 遮陽板完全遮蔽室內直射</text>

          {/* Winter Sun 38 deg */}
          <circle cx="10" cy="90" r="12" className="fill-amber-500" />
          <line x1="10" y1="90" x2="165" y2="135" stroke="currentColor" strokeWidth="1.5" className="text-amber-500" strokeDasharray="3 3" />
          <text x="25" y="95" className="fill-amber-600 text-[10px] font-bold">冬至正午 (低角度 38°)</text>
          <text x="180" y="140" className="fill-amber-700 text-[9px] font-bold">✓ 陽光深入室內增溫採光</text>
        </g>

        {/* Heat Transmission U-Value Section (Right Side) */}
        <g transform="translate(440, 40)">
          <rect width="280" height="200" rx="10" className="fill-white/80 dark:fill-slate-900/80 stroke-slate-200 dark:stroke-slate-800" />
          <text x="20" y="24" className="fill-slate-900 dark:fill-white text-xs font-bold font-sans">
            外牆熱傳導公式 q = U · A · ΔT
          </text>
          <text x="20" y="44" className="fill-slate-600 text-[10px] font-mono">
            U = 1 / ΣR = 1 / (R_si + Σ(d/k) + R_se)
          </text>

          {/* Layered Wall Cross Section */}
          <g transform="translate(20, 60)">
            <rect x="0" y="0" width="20" height="90" className="fill-slate-200 stroke-slate-400" />
            <rect x="20" y="0" width="30" height="90" className="fill-amber-200 stroke-amber-400" />
            <rect x="50" y="0" width="60" height="90" className="fill-slate-400 stroke-slate-600" />
            <rect x="110" y="0" width="20" height="90" className="fill-slate-200 stroke-slate-400" />

            <text x="10" y="105" textAnchor="middle" className="fill-slate-500 text-[8px]">粉刷</text>
            <text x="35" y="105" textAnchor="middle" className="fill-amber-700 text-[8px] font-bold">保溫板</text>
            <text x="80" y="105" textAnchor="middle" className="fill-slate-700 text-[8px] font-bold">RC 15cm</text>
            <text x="120" y="105" textAnchor="middle" className="fill-slate-500 text-[8px]">內粉刷</text>

            {/* Temperature Gradient Line */}
            <path d="M -10 15 L 0 25 L 20 30 L 50 70 L 110 75 L 130 80" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-rose-600" />
            <circle cx="-10" cy="15" r="3" className="fill-rose-600" />
            <circle cx="130" cy="80" r="3" className="fill-blue-600" />
            <text x="-15" y="12" textAnchor="end" className="fill-rose-700 text-[9px] font-bold">室外 35°C</text>
            <text x="135" y="85" className="fill-blue-700 text-[9px] font-bold">室內 26°C</text>
          </g>

          <text x="20" y="185" className="fill-emerald-700 dark:fill-emerald-300 text-[10px] font-bold">
            ★ 保溫層熱阻 R 最大，溫度降幅最劇烈，防止熱島效應。
          </text>
        </g>
      </g>
    </g>
  );

  const renderActiveDiagram = () => {
    switch (conceptType) {
      case 'equilibrium-vector':
        return renderEquilibriumVector();
      case 'structural-stress':
        return renderStructuralStress();
      case 'material-reaction':
        return renderMaterialReaction();
      case 'survey-geometry':
        return renderSurveyGeometry();
      case 'drafting-projection':
        return renderDraftingProjection();
      case 'flowchart-logic':
        return renderFlowchartLogic();
      case 'comparative-matrix':
        return renderComparativeMatrix();
      case 'environmental-physics':
      default:
        return renderEnvironmentalPhysics();
    }
  };

  return (
    <div className={`relative overflow-hidden rounded-2xl border border-indigo-200/80 dark:border-indigo-900/60 bg-slate-900/5 dark:bg-slate-950/80 p-2 sm:p-4 shadow-inner ${className}`}>
      {/* Visual Controls Bar */}
      <div className="mb-2 flex items-center justify-between px-2 text-xs">
        <div className="flex items-center gap-1.5 font-mono text-slate-500 dark:text-slate-400">
          <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-bold">CNS 向量幾何圖示 · {title || '空間表徵'}</span>
          <span className="text-[10px] text-slate-400 dark:text-slate-600 hidden sm:inline">({subjectSlug}/{topicSlug})</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setViewMode(viewMode === 'blueprint' ? 'schematic' : 'blueprint')}
            className="rounded-lg bg-white/80 dark:bg-slate-800 px-2.5 py-1 font-mono text-[11px] font-semibold text-indigo-700 dark:text-indigo-300 border border-slate-200 dark:border-slate-700 hover:bg-indigo-50 dark:hover:bg-slate-700 transition"
          >
            {viewMode === 'blueprint' ? '📐 藍圖網格模式' : '📑 簡化圖式模式'}
          </button>
        </div>
      </div>

      {/* Main SVG Canvas */}
      <div className="relative w-full overflow-hidden rounded-xl border border-slate-200/60 dark:border-slate-800/80 bg-white dark:bg-slate-950 shadow-xs">
        <svg
          viewBox="0 0 760 320"
          className="w-full h-auto select-none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label={`${title} 向量圖解`}
        >
          <title>{title} - {subjectSlug}/{topicSlug}</title>
          {renderDefs()}
          {/* Blueprint Grid Background if enabled */}
          {viewMode === 'blueprint' && (
            <rect width="760" height="320" fill="url(#arch-blueprint-grid-major)" />
          )}
          {renderActiveDiagram()}
        </svg>
      </div>

      {/* Interactive Highlight Nodes (if provided) */}
      {visualHighlights.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2 px-1">
          {visualHighlights.map((hl, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveHighlightIndex(activeHighlightIndex === idx ? null : idx)}
              className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-mono transition-all ${
                activeHighlightIndex === idx
                  ? 'bg-indigo-600 text-white shadow-xs scale-102'
                  : 'bg-white/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-300'
              }`}
            >
              <span className="size-1.5 rounded-full bg-indigo-500" />
              <span className="font-bold">{hl.label}</span>
              {hl.badge && (
                <span className="rounded bg-indigo-100 dark:bg-indigo-900/60 px-1 py-0.2 text-[9px] text-indigo-800 dark:text-indigo-200">
                  {hl.badge}
                </span>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Active Highlight Description Tooltip */}
      {activeHighlightIndex !== null && visualHighlights[activeHighlightIndex] && (
        <div className="mt-2 rounded-xl border border-indigo-200 dark:border-indigo-800 bg-indigo-50/90 dark:bg-indigo-950/60 p-3 text-xs leading-relaxed text-indigo-950 dark:text-indigo-200 animate-in fade-in duration-200">
          <strong>{visualHighlights[activeHighlightIndex].label}：</strong>
          {visualHighlights[activeHighlightIndex].desc}
        </div>
      )}
    </div>
  );
}
