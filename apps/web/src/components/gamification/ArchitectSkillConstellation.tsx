'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, Star, CheckCircle2, ArrowRight, BookOpen } from 'lucide-react';
import { soundEngine } from '@/lib/audio/soundEffects';
import { useGamificationStore } from '@/lib/store/gamificationStore';

interface ConstellationNode {
  id: string;
  name: string;
  galaxy: 'mechanics' | 'materials' | 'surveying' | 'drafting' | 'math_c';
  x: number; // 0 to 440
  y: number; // 0 to 260
  chapterRoute: string;
  conceptSnippet: string;
  connections: string[]; // Connected star ids
}

const constellationStars: ConstellationNode[] = [
  // Mechanics Galaxy (力學星系)
  { id: 'star_mech_vector', name: '向量與力系', galaxy: 'mechanics', x: 80, y: 70, chapterRoute: '/subjects/mechanics/units-and-vectors', conceptSnippet: '方向餘弦 cos²α+cos²β+cos²γ=1', connections: ['star_mech_equil', 'star_math_vector'] },
  { id: 'star_mech_equil', name: '力系平衡', galaxy: 'mechanics', x: 120, y: 130, chapterRoute: '/subjects/mechanics/equilibrium', conceptSnippet: '三力共點定理與拉密定理', connections: ['star_mech_truss', 'star_mech_beam'] },
  { id: 'star_mech_truss', name: '桁架分析', galaxy: 'mechanics', x: 60, y: 190, chapterRoute: '/subjects/mechanics/trusses', conceptSnippet: '零力桿判斷原則與節點截面法', connections: ['star_mech_beam'] },
  { id: 'star_mech_beam', name: '靜定梁受力', galaxy: 'mechanics', x: 150, y: 210, chapterRoute: '/subjects/mechanics/statically-determinate-beams', conceptSnippet: '剪力彎矩微分關係 dV/dx = -w', connections: ['star_mech_stress'] },
  { id: 'star_mech_stress', name: '虎克與莫爾圓', galaxy: 'mechanics', x: 180, y: 110, chapterRoute: '/subjects/mechanics/stress-strain', conceptSnippet: '正應力 σ=P/A 與主應力 σ₁/σ₂', connections: ['star_mat_steel'] },

  // Materials Galaxy (材料星系)
  { id: 'star_mat_cement', name: '波特蘭水泥五型', galaxy: 'materials', x: 250, y: 60, chapterRoute: '/subjects/materials/cement-types', conceptSnippet: 'C3S早強、C2S後強、C3A水化熱', connections: ['star_mat_concrete'] },
  { id: 'star_mat_concrete', name: '混凝土水灰比', galaxy: 'materials', x: 290, y: 110, chapterRoute: '/subjects/materials/concrete-properties', conceptSnippet: 'W/C水灰比與28天抗壓強度', connections: ['star_mat_steel', 'star_mat_timber'] },
  { id: 'star_mat_steel', name: '鋼材應力應變', galaxy: 'materials', x: 240, y: 160, chapterRoute: '/subjects/materials/steel-properties', conceptSnippet: '降伏點、極限強度與延展性', connections: ['star_mat_timber'] },
  { id: 'star_mat_timber', name: '木材含水率', galaxy: 'materials', x: 300, y: 190, chapterRoute: '/subjects/materials/timber-properties', conceptSnippet: '纖維飽和點 FSP 30% 與順橫紋', connections: [] },

  // Surveying Galaxy (測量星系)
  { id: 'star_surv_level', name: '水準視線高法', galaxy: 'surveying', x: 370, y: 70, chapterRoute: '/subjects/surveying/leveling', conceptSnippet: '視線高 IH = BM + BS', connections: ['star_surv_angle'] },
  { id: 'star_surv_angle', name: '角度與方位角', galaxy: 'surveying', x: 390, y: 140, chapterRoute: '/subjects/surveying/angles-azimuth', conceptSnippet: '閉合多邊形內角和 (n-2)×180°', connections: ['star_surv_traverse'] },
  { id: 'star_surv_traverse', name: '導線經緯距', galaxy: 'surveying', x: 360, y: 210, chapterRoute: '/subjects/surveying/traverse-computations', conceptSnippet: '緯距 ΔN = S·cosθ, 經距 ΔE = S·sinθ', connections: [] },

  // Drafting Galaxy (製圖星系)
  { id: 'star_draft_lines', name: '線條與字法', galaxy: 'drafting', x: 80, y: 20, chapterRoute: '/subjects/drafting/lines-and-lettering', conceptSnippet: '粗中細 4:2:1 比例原則', connections: ['star_draft_ortho'] },
  { id: 'star_draft_ortho', name: '第三角正投影', galaxy: 'drafting', x: 180, y: 30, chapterRoute: '/subjects/drafting/orthographic-projection', conceptSnippet: 'CNS 俯視在上、正視在下、側視在右', connections: ['star_draft_section'] },
  { id: 'star_draft_section', name: '剖面與符號', galaxy: 'drafting', x: 280, y: 20, chapterRoute: '/subjects/drafting/section-views', conceptSnippet: '45° 細實線剖面線與材料圖例', connections: [] },

  // Math-C Foundation Star (數學 C 地基星系)
  { id: 'star_math_vector', name: '平面向量與三角', galaxy: 'math_c', x: 30, y: 110, chapterRoute: '/subjects/math-c/plane-vectors', conceptSnippet: '向量內積 a·b = |a||b|cosθ', connections: ['star_mech_vector'] },
];

export default function ArchitectSkillConstellation() {
  const { unlockedStars, unlockStarNode, rankTitle, soundEnabled } = useGamificationStore();
  const [selectedStar, setSelectedStar] = useState<ConstellationNode | null>(constellationStars[0]);

  const handleStarClick = (star: ConstellationNode) => {
    setSelectedStar(star);
    if (!unlockedStars.includes(star.id)) {
      unlockStarNode(star.id);
    } else {
      if (soundEnabled) soundEngine.playClickBeep();
    }
  };

  const unlockedCount = constellationStars.filter((s) => unlockedStars.includes(s.id)).length;
  const progressPct = Math.round((unlockedCount / constellationStars.length) * 100);

  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <div className="rounded-[2.5rem] border border-blue-200 dark:border-blue-900/40 bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/20 border border-indigo-400/30 px-3.5 py-1 text-xs font-mono font-bold text-indigo-300">
              <Sparkles className="size-3.5 text-indigo-400" />
              建築大師技能星空圖 · ARCHITECTURAL CONSTELLATION
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
              點亮你的專業技能星系網絡
            </h2>
            <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
              將工程力學、建築材料、測量實習、製圖實習與數學 C 貫穿為五大星系。每解鎖一個恆星節點，即可啟動跨學科知識光束！
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 backdrop-blur-md p-5 border border-white/15 space-y-1.5 min-w-[220px] font-mono text-xs">
            <div className="flex justify-between text-slate-300">
              <span>星空點亮進度</span>
              <span className="text-indigo-300 font-bold">{progressPct}%</span>
            </div>
            <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-indigo-400 transition-all duration-700" style={{ width: `${progressPct}%` }} />
            </div>
            <span className="text-[11px] text-slate-400 block pt-0.5">
              已點亮 {unlockedCount} / {constellationStars.length} 顆恆星 · {rankTitle}
            </span>
          </div>
        </div>
      </div>

      {/* Main Interactive Constellation Canvas */}
      <div className="grid gap-6 lg:grid-cols-12 items-center">
        {/* SVG Deep Space Sky Map */}
        <div className="lg:col-span-8 rounded-3xl border-2 border-indigo-900/50 bg-[#060814] p-6 relative select-none overflow-hidden shadow-2xl">
          {/* Deep Space Background Glows */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-[#060814] opacity-80" />

          {/* Galaxy Titles Overlay */}
          <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400 border-b border-indigo-900/40 pb-3 mb-2">
            <span className="flex items-center gap-1 text-indigo-400 font-bold">
              <Star className="size-3.5 fill-current" /> 5 大專業恆星系網絡
            </span>
            <span className="text-slate-500">點擊恆星節點點亮並檢視觀念</span>
          </div>

          {/* Interactive SVG Starfield */}
          <svg viewBox="0 0 440 260" className="w-full h-80 relative z-10">
            {/* Background tiny random stars */}
            {Array.from({ length: 30 }).map((_, i) => (
              <circle
                key={i}
                cx={(i * 37) % 440}
                cy={(i * 53) % 260}
                r={(i % 3 === 0 ? 1.2 : 0.6)}
                fill="#94a3b8"
                opacity="0.4"
              />
            ))}

            {/* Constellation Connection Beams */}
            {constellationStars.map((star) =>
              star.connections.map((targetId) => {
                const target = constellationStars.find((s) => s.id === targetId);
                if (!target) return null;

                const isStarUnlocked = unlockedStars.includes(star.id);
                const isTargetUnlocked = unlockedStars.includes(target.id);
                const isBeamActive = isStarUnlocked && isTargetUnlocked;

                return (
                  <line
                    key={`${star.id}-${target.id}`}
                    x1={star.x}
                    y1={star.y}
                    x2={target.x}
                    y2={target.y}
                    stroke={isBeamActive ? '#818cf8' : '#1e293b'}
                    strokeWidth={isBeamActive ? 2 : 1}
                    strokeDasharray={isBeamActive ? 'none' : '3 3'}
                    opacity={isBeamActive ? 0.9 : 0.4}
                    className="transition-all duration-500"
                  />
                );
              }),
            )}

            {/* Interactive Stars Nodes */}
            {constellationStars.map((star) => {
              const isUnlocked = unlockedStars.includes(star.id);
              const isSelected = selectedStar?.id === star.id;

              let starColor = '#818cf8'; // indigo
              if (star.galaxy === 'materials') starColor = '#f59e0b';
              if (star.galaxy === 'surveying') starColor = '#10b981';
              if (star.galaxy === 'drafting') starColor = '#38bdf8';
              if (star.galaxy === 'math_c') starColor = '#ec4899';

              return (
                <g
                  key={star.id}
                  onClick={() => handleStarClick(star)}
                  className="cursor-pointer group"
                >
                  {/* Outer Glow Halo on Unlocked or Selected */}
                  {(isUnlocked || isSelected) && (
                    <circle
                      cx={star.x}
                      cy={star.y}
                      r={isSelected ? 16 : 10}
                      fill={starColor}
                      opacity={isSelected ? 0.35 : 0.2}
                      className={isSelected ? 'animate-ping' : ''}
                    />
                  )}

                  {/* Main Star Body */}
                  <circle
                    cx={star.x}
                    cy={star.y}
                    r={isSelected ? 7 : 5}
                    fill={isUnlocked ? starColor : '#334155'}
                    stroke={isSelected ? '#ffffff' : starColor}
                    strokeWidth={isSelected ? 2 : 1}
                    className="transition-all duration-200 group-hover:scale-125"
                  />

                  {/* Star Label */}
                  <text
                    x={star.x}
                    y={star.y + 14}
                    fontSize="8.5"
                    fontFamily="monospace"
                    fontWeight="bold"
                    fill={isUnlocked ? '#f8fafc' : '#64748b'}
                    textAnchor="middle"
                  >
                    {star.name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Selected Star Details & Jump Action Panel */}
        <div className="lg:col-span-4 space-y-4 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm">
          {selectedStar ? (
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                  STAR NODE DETAILS
                </span>
                <h3 className="font-serif text-2xl font-bold text-slate-900 dark:text-white">
                  {selectedStar.name}
                </h3>
                <div className="flex items-center gap-2 pt-1">
                  <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-[11px] font-mono font-bold text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-900/50">
                    {selectedStar.galaxy === 'mechanics' ? '🛠️ 工程力學星系' : selectedStar.galaxy === 'materials' ? '🧱 建築材料星系' : selectedStar.galaxy === 'surveying' ? '🔭 測量實習星系' : selectedStar.galaxy === 'drafting' ? '📐 建築製圖星系' : '📐 數學 C 地基星系'}
                  </span>
                  {unlockedStars.includes(selectedStar.id) && (
                    <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                      <CheckCircle2 className="size-3.5" /> 已點亮
                    </span>
                  )}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 space-y-2 text-xs">
                <span className="font-bold text-slate-700 dark:text-slate-300 block font-mono">
                  ✨ 核心觀念微膠囊：
                </span>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                  {selectedStar.conceptSnippet}
                </p>
              </div>

              <Link
                href={selectedStar.chapterRoute}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm transition shadow-lg shadow-indigo-600/20"
              >
                <BookOpen className="size-4" />
                <span>進入本章精熟學習</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          ) : (
            <p className="text-xs text-slate-500 font-mono">點擊星空中的任意恆星以檢視知識節點。</p>
          )}
        </div>
      </div>
    </div>
  );
}
