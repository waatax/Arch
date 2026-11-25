import React from 'react';
import { LeftCard, RightCard, StepRow, type SceneRenderer } from './scenePrimitives';

export const mechanicsScenes: Record<string, SceneRenderer> = {
  'mechanics/units-vectors': (m) => (
    <g>
      <LeftCard title="二維直角坐標正交分解 (Fx, Fy)" subtitle="F = 100 N, θ = 37° (3-4-5 黃金直角三角形)">
        <line x1="48" y1="226" x2="355" y2="226" stroke="currentColor" strokeWidth="1.5" className="text-slate-400" markerEnd={`url(#${m.arrowBlue})`} />
        <line x1="80" y1="256" x2="80" y2="62" stroke="currentColor" strokeWidth="1.5" className="text-slate-400" markerEnd={`url(#${m.arrowBlue})`} />
        <text x="364" y="230" className="fill-slate-600 dark:fill-slate-300 text-[11px] font-mono font-bold">+X</text>
        <text x="80" y="54" textAnchor="middle" className="fill-slate-600 dark:fill-slate-300 text-[11px] font-mono font-bold">+Y</text>
        <line x1="80" y1="226" x2="280" y2="96" stroke="currentColor" strokeWidth="3.5" className="text-rose-600 dark:text-rose-400" markerEnd={`url(#${m.arrowRose})`} />
        <line x1="80" y1="226" x2="280" y2="226" stroke="currentColor" strokeWidth="3" className="text-blue-600 dark:text-blue-400" markerEnd={`url(#${m.arrowBlue})`} />
        <line x1="280" y1="226" x2="280" y2="96" stroke="currentColor" strokeWidth="2.5" strokeDasharray="5 3" className="text-emerald-600 dark:text-emerald-400" markerEnd={`url(#${m.arrowEmerald})`} />
        <path d="M 132 226 A 52 52 0 0 0 123 198" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-amber-600" />
        <text x="142" y="213" className="fill-amber-700 dark:fill-amber-300 text-[11px] font-mono font-bold">θ = 37°</text>
        <text x="165" y="142" className="fill-rose-700 dark:fill-rose-300 text-[12px] font-mono font-bold">F = 100 N (斜邊 5)</text>
        <text x="180" y="248" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[11px] font-mono font-bold">Fx = F·cosθ = 80 N (鄰邊 4)</text>
        <text x="292" y="166" className="fill-emerald-700 dark:fill-emerald-300 text-[11px] font-mono font-bold">Fy = F·sinθ = 60 N</text>
      </LeftCard>
      <RightCard title="SI 工程單位與方向餘弦速查" subtitle="1 MPa = 1 N/mm² 黃金換算">
        <StepRow y={54} num="1" label="力與重量換算" detail="1 kgf = 9.8 N ； 1 tf = 1000 kgf" tone="blue" />
        <StepRow y={110} num="2" label="應力黃金等式 (必背)" detail="1 MPa = 10⁶ Pa = 1 N/mm²" tone="rose" />
        <StepRow y={166} num="3" label="三維方向餘弦恆等式" detail="cos²α + cos²β + cos²γ = 1" tone="emerald" />
        <text x="16" y="242" className="fill-slate-600 dark:fill-slate-300 text-[10px] font-mono">
          <tspan x="16">★ 夾角在哪軸，哪軸就乘 cosθ！</tspan>
          <tspan x="16" dy="16">★ 合力大小 R = √(ΣFx² + ΣFy²)</tspan>
        </text>
      </RightCard>
    </g>
  ),

  'mechanics/force-equilibrium': (m) => (
    <g>
      <LeftCard title="三力共點平衡與拉密定理 (Lami's Theorem)" subtitle="雙索懸吊重物 W：對角正弦值成正比">
        <line x1="60" y1="66" x2="340" y2="66" stroke="currentColor" strokeWidth="3" className="text-slate-600 dark:text-slate-400" />
        <line x1="200" y1="150" x2="95" y2="72" stroke="currentColor" strokeWidth="2.8" className="text-blue-600 dark:text-blue-400" markerEnd={`url(#${m.arrowBlue})`} />
        <line x1="200" y1="150" x2="295" y2="72" stroke="currentColor" strokeWidth="2.8" className="text-emerald-600 dark:text-emerald-400" markerEnd={`url(#${m.arrowEmerald})`} />
        <line x1="200" y1="150" x2="200" y2="246" stroke="currentColor" strokeWidth="3" className="text-rose-600 dark:text-rose-400" markerEnd={`url(#${m.arrowRose})`} />
        <circle cx="200" cy="150" r="5" className="fill-amber-500 stroke-white" strokeWidth="1.5" />
        <rect x="172" y="248" width="56" height="24" rx="4" className="fill-rose-500/20 stroke-rose-600" strokeWidth="1.5" />
        <text x="200" y="264" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 text-[10px] font-mono font-bold">W = 100N</text>
        <text x="92" y="118" className="fill-blue-700 dark:fill-blue-300 text-[11px] font-mono font-bold">T_A (左索)</text>
        <text x="255" y="118" className="fill-emerald-700 dark:fill-emerald-300 text-[11px] font-mono font-bold">T_B (右索)</text>
        <text x="198" y="114" textAnchor="middle" className="fill-amber-700 dark:fill-amber-300 text-[11px] font-mono font-bold">γ = 90°</text>
        <text x="150" y="182" className="fill-emerald-700 dark:fill-emerald-300 text-[10px] font-mono">β=127°</text>
        <text x="220" y="182" className="fill-blue-700 dark:fill-blue-300 text-[10px] font-mono">α=143°</text>
      </LeftCard>
      <RightCard title="首尾相接閉合三角形" subtitle="ΣFx = 0 , ΣFy = 0 ⇔ 向量封閉">
        <polygon points="75,205 75,85 195,145" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-300 dark:text-slate-700" />
        <line x1="75" y1="85" x2="75" y2="205" stroke="currentColor" strokeWidth="3" className="text-rose-600" markerEnd={`url(#${m.arrowRose})`} />
        <line x1="75" y1="205" x2="195" y2="145" stroke="currentColor" strokeWidth="3" className="text-blue-600" markerEnd={`url(#${m.arrowBlue})`} />
        <line x1="195" y1="145" x2="75" y2="85" stroke="currentColor" strokeWidth="3" className="text-emerald-600" markerEnd={`url(#${m.arrowEmerald})`} />
        <text x="58" y="150" textAnchor="end" className="fill-rose-700 dark:fill-rose-300 text-[11px] font-mono font-bold">W</text>
        <text x="148" y="192" className="fill-blue-700 dark:fill-blue-300 text-[11px] font-mono font-bold">T_A=60N</text>
        <text x="148" y="108" className="fill-emerald-700 dark:fill-emerald-300 text-[11px] font-mono font-bold">T_B=80N</text>
        <rect x="16" y="224" width="258" height="44" rx="8" className="fill-indigo-500/10 stroke-indigo-500/40" />
        <text x="145" y="244" textAnchor="middle" className="fill-indigo-900 dark:fill-indigo-200 text-[10.5px] font-mono font-bold">
          T_A / sinα = T_B / sinβ = W / sinγ
        </text>
        <text x="145" y="260" textAnchor="middle" className="fill-slate-500 text-[9.5px] font-mono">
          α + β + γ = 360° (三力共點平衡專用)
        </text>
      </RightCard>
    </g>
  ),

  'mechanics/parallel-force-systems': (m) => (
    <g>
      <LeftCard title="平行力系合成與分布載重濃縮" subtitle="瓦里農定理：R·x̄ = Σ(Fi·xi)">
        <rect x="48" y="185" width="310" height="12" rx="2" className="fill-slate-300 dark:fill-slate-700 stroke-slate-500" />
        {/* Uniform load rectangle */}
        <rect x="60" y="125" width="140" height="58" className="fill-blue-500/15 stroke-blue-500" strokeWidth="1.5" />
        <line x1="130" y1="95" x2="130" y2="180" stroke="currentColor" strokeWidth="3" className="text-blue-600" markerEnd={`url(#${m.arrowBlue})`} />
        <text x="130" y="88" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[10.5px] font-mono font-bold">R₁=wL (中點 L/2)</text>
        {/* Triangular load */}
        <polygon points="220,183 340,115 340,183" className="fill-amber-500/20 stroke-amber-600" strokeWidth="1.5" />
        <line x1="300" y1="88" x2="300" y2="180" stroke="currentColor" strokeWidth="3" className="text-rose-600" markerEnd={`url(#${m.arrowRose})`} />
        <text x="300" y="80" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 text-[10.5px] font-mono font-bold">R₂=½w₀L (距高側 L/3)</text>
        {/* Supports */}
        <polygon points="56,197 46,216 66,216" className="fill-teal-600" />
        <polygon points="348,197 338,214 358,214" className="fill-teal-600" />
        <text x="200" y="248" textAnchor="middle" className="fill-slate-700 dark:fill-slate-300 text-[10.5px] font-mono font-bold">
          總合力 R = R₁ + R₂ ， 作用點 x̄ = (R₁x₁ + R₂x₂) / R
        </text>
      </LeftCard>
      <RightCard title="力偶 (Couple) 三大特性" subtitle="等值反向平行力：ΣF = 0, M = F·d">
        <circle cx="145" cy="122" r="42" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" className="text-purple-500" />
        <line x1="103" y1="158" x2="103" y2="82" stroke="currentColor" strokeWidth="3" className="text-blue-600" markerEnd={`url(#${m.arrowBlue})`} />
        <line x1="187" y1="86" x2="187" y2="162" stroke="currentColor" strokeWidth="3" className="text-rose-600" markerEnd={`url(#${m.arrowRose})`} />
        <line x1="103" y1="122" x2="187" y2="122" stroke="currentColor" strokeWidth="1.5" className="text-amber-600" />
        <text x="145" y="116" textAnchor="middle" className="fill-amber-700 dark:fill-amber-300 text-[11px] font-mono font-bold">d</text>
        <text x="86" y="92" textAnchor="end" className="fill-blue-700 dark:fill-blue-300 text-[11px] font-mono font-bold">+F</text>
        <text x="202" y="158" className="fill-rose-700 dark:fill-rose-300 text-[11px] font-mono font-bold">-F</text>
        <StepRow y={182} num="★" label="自由向量（可任意平移）" detail="對平面任一點取矩恆為 M = F·d" tone="indigo" />
        <text x="16" y="252" className="fill-slate-600 dark:fill-slate-300 text-[10px] font-mono">
          ★ 單一力絕無法平衡力偶，唯有反向力偶可平衡！
        </text>
      </RightCard>
    </g>
  ),

  'mechanics/nonconcurrent-force-systems': (m) => (
    <g>
      <LeftCard title="三大支承反力與自由體圖 (FBD)" subtitle="口訣：限制哪種運動，就產生哪個反力！">
        {/* Roller */}
        <g transform="translate(36, 76)">
          <rect x="10" y="24" width="76" height="12" rx="2" className="fill-slate-300 dark:fill-slate-700 stroke-slate-500" />
          <polygon points="48,36 36,54 60,54" className="fill-blue-500/30 stroke-blue-600" strokeWidth="1.5" />
          <circle cx="41" cy="58" r="3" className="fill-blue-600" />
          <circle cx="55" cy="58" r="3" className="fill-blue-600" />
          <line x1="48" y1="98" x2="48" y2="66" stroke="currentColor" strokeWidth="2.8" className="text-blue-600" markerEnd={`url(#${m.arrowBlue})`} />
          <text x="48" y="120" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[11px] font-bold">滾支承 Roller</text>
          <text x="48" y="136" textAnchor="middle" className="fill-slate-500 text-[10px] font-mono">1 反力 (Ry)</text>
        </g>
        {/* Pin */}
        <g transform="translate(160, 76)">
          <rect x="10" y="24" width="76" height="12" rx="2" className="fill-slate-300 dark:fill-slate-700 stroke-slate-500" />
          <polygon points="48,36 34,58 62,58" className="fill-emerald-500/30 stroke-emerald-600" strokeWidth="1.5" />
          <line x1="48" y1="98" x2="48" y2="64" stroke="currentColor" strokeWidth="2.8" className="text-emerald-600" markerEnd={`url(#${m.arrowEmerald})`} />
          <line x1="8" y1="48" x2="32" y2="48" stroke="currentColor" strokeWidth="2.8" className="text-emerald-600" markerEnd={`url(#${m.arrowEmerald})`} />
          <text x="48" y="120" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[11px] font-bold">鉸支承 Pin</text>
          <text x="48" y="136" textAnchor="middle" className="fill-slate-500 text-[10px] font-mono">2 反力 (Rx, Ry)</text>
        </g>
        {/* Fixed */}
        <g transform="translate(284, 76)">
          <rect x="14" y="0" width="12" height="72" className="fill-slate-400 dark:fill-slate-600" />
          <rect x="26" y="28" width="68" height="12" rx="2" className="fill-slate-300 dark:fill-slate-700 stroke-slate-500" />
          <line x1="52" y1="98" x2="52" y2="46" stroke="currentColor" strokeWidth="2.8" className="text-rose-600" markerEnd={`url(#${m.arrowRose})`} />
          <line x1="-2" y1="34" x2="12" y2="34" stroke="currentColor" strokeWidth="2.8" className="text-rose-600" markerEnd={`url(#${m.arrowRose})`} />
          <path d="M 36 12 A 18 18 0 1 1 36 56" fill="none" stroke="currentColor" strokeWidth="2" className="text-amber-600" markerEnd={`url(#${m.arrowAmber})`} />
          <text x="48" y="120" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 text-[11px] font-bold">固定端 Fixed</text>
          <text x="48" y="136" textAnchor="middle" className="fill-slate-500 text-[10px] font-mono">3 反力 (Rx,Ry,M)</text>
        </g>
        <text x="204" y="256" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-300 text-[11px] font-mono font-bold">
          平面一般力系三平衡式：ΣFx = 0 ， ΣFy = 0 ， ΣM_A = 0
        </text>
      </LeftCard>
      <RightCard title="力的平移定理與破題順序" subtitle="移力必補附生力偶 M = F·d">
        <StepRow y={56} num="1" label="拆支承畫 FBD、斜力正交分解" detail="將斜向力拆成 Fx=Fcosθ 與 Fy=Fsinθ" tone="blue" />
        <StepRow y={112} num="2" label="對「雙未知數鉸支承」先取矩" detail="ΣM_A = 0 直接消去 Ax, Ay 秒殺 RB！" tone="emerald" />
        <StepRow y={168} num="3" label="代回 ΣFx=0, ΣFy=0 並驗算" detail="算出負號代表實際方向與假設相反" tone="amber" />
        <text x="16" y="246" className="fill-slate-600 dark:fill-slate-300 text-[10px] font-mono">
          ★ 二力構件：僅兩端鉸接無中載，力必沿兩端連線
        </text>
      </RightCard>
    </g>
  ),

  'mechanics/spatial-force-systems': (m) => (
    <g>
      <LeftCard title="三維空間力向量分解 (X-Y-Z 座標盒)" subtitle="單位向量 λ = (Δx, Δy, Δz) / L">
        {/* 3D Box & Axes */}
        <line x1="130" y1="185" x2="340" y2="185" stroke="currentColor" strokeWidth="1.5" className="text-slate-400" markerEnd={`url(#${m.arrowBlue})`} />
        <line x1="130" y1="185" x2="130" y2="55" stroke="currentColor" strokeWidth="1.5" className="text-slate-400" markerEnd={`url(#${m.arrowEmerald})`} />
        <line x1="130" y1="185" x2="55" y2="245" stroke="currentColor" strokeWidth="1.5" className="text-slate-400" markerEnd={`url(#${m.arrowAmber})`} />
        <text x="350" y="189" className="fill-blue-700 dark:fill-blue-300 text-[11px] font-mono font-bold">+Y</text>
        <text x="130" y="48" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[11px] font-mono font-bold">+Z</text>
        <text x="42" y="254" className="fill-amber-700 dark:fill-amber-300 text-[11px] font-mono font-bold">+X</text>
        {/* Box wireframe */}
        <polygon points="130,185 270,185 225,222 85,222" fill="none" stroke="currentColor" strokeDasharray="3 3" className="text-slate-400" />
        <line x1="225" y1="222" x2="225" y2="92" stroke="currentColor" strokeDasharray="3 3" className="text-slate-400" />
        <line x1="130" y1="55" x2="225" y2="92" stroke="currentColor" strokeDasharray="3 3" className="text-slate-400" />
        {/* 3D Force Vector */}
        <line x1="130" y1="185" x2="225" y2="92" stroke="currentColor" strokeWidth="3.5" className="text-rose-600" markerEnd={`url(#${m.arrowRose})`} />
        <circle cx="225" cy="92" r="4.5" className="fill-rose-600" />
        <text x="234" y="88" className="fill-rose-700 dark:fill-rose-300 text-[11px] font-mono font-bold">B(Δx, Δy, Δz)</text>
        <text x="180" y="128" className="fill-rose-700 dark:fill-rose-300 text-[12px] font-mono font-bold">F = F · λ</text>
        <text x="204" y="264" textAnchor="middle" className="fill-slate-700 dark:fill-slate-300 text-[10.5px] font-mono">
          L = √(Δx² + Δy² + Δz²) ， Fx = F·(Δx/L)
        </text>
      </LeftCard>
      <RightCard title="空間力系獨立平衡方程式數" subtitle="統測觀念必考分類對照">
        <StepRow y={56} num="3" label="空間共點力系 (三腳架吊重)" detail="ΣFx = 0 , ΣFy = 0 , ΣFz = 0" tone="blue" />
        <StepRow y={112} num="3" label="空間平行力系 (桌板柱支承)" detail="ΣFz = 0 , ΣMx = 0 , ΣMy = 0" tone="emerald" />
        <StepRow y={168} num="6" label="空間一般力系 (三維剛體)" detail="3 力平衡 + 3 軸力矩平衡 = 6 式" tone="rose" />
        <text x="16" y="246" className="fill-slate-600 dark:fill-slate-300 text-[10px] font-mono">
          ★ 注意：平行於軸或通過軸的力，對該軸力矩 = 0！
        </text>
      </RightCard>
    </g>
  ),

  'mechanics/truss': (m) => (
    <g>
      <LeftCard title="普拉特桁架力流與零力桿秒殺判別" subtitle="m + r = 2j (9 + 3 = 2×6 = 12 靜定穩定)">
        {/* Top & Bottom Chords */}
        <line x1="60" y1="195" x2="340" y2="195" stroke="currentColor" strokeWidth="3" className="text-blue-600 dark:text-blue-400" />
        <line x1="150" y1="95" x2="250" y2="95" stroke="currentColor" strokeWidth="3.5" className="text-rose-600 dark:text-rose-400" />
        <line x1="60" y1="195" x2="150" y2="95" stroke="currentColor" strokeWidth="3.5" className="text-rose-600 dark:text-rose-400" />
        <line x1="340" y1="195" x2="250" y2="95" stroke="currentColor" strokeWidth="3.5" className="text-rose-600 dark:text-rose-400" />
        {/* Verticals & Diagonal */}
        <line x1="150" y1="95" x2="150" y2="195" stroke="currentColor" strokeWidth="2.5" strokeDasharray="5 3" className="text-amber-500" />
        <line x1="250" y1="95" x2="250" y2="195" stroke="currentColor" strokeWidth="2.5" className="text-blue-600" />
        <line x1="150" y1="95" x2="250" y2="195" stroke="currentColor" strokeWidth="2.5" className="text-blue-600" />
        {/* Load at bottom right node */}
        <line x1="250" y1="198" x2="250" y2="245" stroke="currentColor" strokeWidth="3" className="text-rose-600" markerEnd={`url(#${m.arrowRose})`} />
        <text x="260" y="242" className="fill-rose-700 dark:fill-rose-300 text-[11px] font-mono font-bold">P = 24 kN</text>
        {/* Supports */}
        <polygon points="60,195 50,214 70,214" className="fill-teal-600" />
        <polygon points="340,195 330,214 350,214" className="fill-teal-600" />
        {/* Joints */}
        {[[60,195],[150,195],[250,195],[340,195],[150,95],[250,95]].map(([cx, cy], idx) => (
          <circle key={idx} cx={cx} cy={cy} r="5" className="fill-white dark:fill-slate-900 stroke-slate-700 dark:stroke-slate-200" strokeWidth="2" />
        ))}
        <text x="200" y="84" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 text-[10.5px] font-mono font-bold">上弦受壓 (C, -)</text>
        <text x="105" y="214" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[10.5px] font-mono font-bold">下弦受拉 (T, +)</text>
        <text x="142" y="152" textAnchor="end" className="fill-amber-700 dark:fill-amber-300 text-[10.5px] font-mono font-bold">零力桿 F=0!</text>
      </LeftCard>
      <RightCard title="零力桿視覺秒殺雙口訣" subtitle="節點法 vs 截面法（Ritter 法）">
        <StepRow y={56} num="L" label="L 型無載重二桿節點" detail="兩根非共線桿交會且無外力 → 兩桿皆 0" tone="amber" />
        <StepRow y={112} num="T" label="T 型無載重三桿節點" detail="兩桿共線＋第三桿分岔無外力 → 分岔桿=0" tone="emerald" />
        <StepRow y={168} num="切" label="截面法求指定跨中桿件" detail="一刀切斷 ≤3 桿，取矩一秒直攻目標桿" tone="indigo" />
        <text x="16" y="246" className="fill-slate-600 dark:fill-slate-300 text-[10px] font-mono">
          ★ 拉力箭頭「離開節點」，壓力箭頭「推向節點」！
        </text>
      </RightCard>
    </g>
  ),

  'mechanics/friction': (m) => (
    <g>
      <LeftCard title="斜面受力分解與摩擦角 φ" subtitle="臨界下滑靜止角：tanθ_s = μ_s = tanφ">
        {/* Inclined Plane */}
        <polygon points="55,225 345,225 345,105" className="fill-slate-200/70 dark:fill-slate-800 stroke-slate-500" strokeWidth="2" />
        <text x="115" y="218" className="fill-amber-700 dark:fill-amber-300 text-[11px] font-mono font-bold">θ</text>
        {/* Block rotated */}
        <g transform="translate(205, 163) rotate(-22.5)">
          <rect x="-32" y="-44" width="64" height="44" rx="4" className="fill-indigo-500/25 stroke-indigo-600 dark:stroke-indigo-400" strokeWidth="2" />
          <line x1="0" y1="0" x2="0" y2="-78" stroke="currentColor" strokeWidth="2.6" className="text-emerald-600" markerEnd={`url(#${m.arrowEmerald})`} />
          <text x="6" y="-72" className="fill-emerald-700 dark:fill-emerald-300 text-[10px] font-mono font-bold">N=Wcosθ</text>
          <line x1="0" y1="-4" x2="68" y2="-4" stroke="currentColor" strokeWidth="2.8" className="text-amber-600" markerEnd={`url(#${m.arrowAmber})`} />
          <text x="38" y="-12" className="fill-amber-700 dark:fill-amber-300 text-[10px] font-mono font-bold">f ≤ μs·N</text>
          <line x1="0" y1="-22" x2="-66" y2="-22" stroke="currentColor" strokeWidth="2.6" className="text-blue-600" markerEnd={`url(#${m.arrowBlue})`} />
          <text x="-70" y="-28" textAnchor="end" className="fill-blue-700 dark:fill-blue-300 text-[10px] font-mono font-bold">Wsinθ</text>
        </g>
        {/* Vertical Weight W */}
        <line x1="196" y1="143" x2="196" y2="238" stroke="currentColor" strokeWidth="2.8" className="text-rose-600" markerEnd={`url(#${m.arrowRose})`} />
        <text x="204" y="242" className="fill-rose-700 dark:fill-rose-300 text-[11px] font-mono font-bold">W (鉛垂向下)</text>
      </LeftCard>
      <RightCard title="滑動 vs 傾倒 ＆ 纜繩摩擦" subtitle="必須雙重檢核 P_滑 與 P_倒 取較小值！">
        <StepRow y={54} num="1" label="未達臨界前：靜摩擦 = 外推力" detail="千萬別直接代 μs·N！先比 F 與 f_max" tone="rose" />
        <StepRow y={110} num="2" label="防傾倒檢核：對前趾角取矩" detail="P·h = W·(b/2) ⇒ P_倒 = Wb/(2h)" tone="blue" />
        <StepRow y={166} num="3" label="圓柱皮帶摩擦 (β 用 rad!)" detail="T_max = T_min · e^(μs·β)" tone="emerald" />
        <text x="16" y="246" className="fill-slate-600 dark:fill-slate-300 text-[10px] font-mono">
          ★ min(P_滑, P_倒) 誰小誰先發生！動摩擦 μk &lt; μs
        </text>
      </RightCard>
    </g>
  ),

  'mechanics/centroid': (m) => (
    <g>
      <LeftCard title="T 型組合斷面形心定位與平行軸定理" subtitle="ȳ = Σ(Ai·yi) / ΣAi ； Ix = Īx + A·d²">
        {/* T-section */}
        <rect x="95" y="64" width="160" height="36" className="fill-blue-500/25 stroke-blue-600" strokeWidth="2" />
        <rect x="155" y="100" width="40" height="120" className="fill-emerald-500/25 stroke-emerald-600" strokeWidth="2" />
        {/* Individual centroids */}
        <circle cx="175" cy="82" r="4" className="fill-blue-600" />
        <text x="264" y="86" className="fill-blue-700 dark:fill-blue-300 text-[10px] font-mono font-bold">A₁ 翼版形心 y₁</text>
        <circle cx="175" cy="160" r="4" className="fill-emerald-600" />
        <text x="206" y="164" className="fill-emerald-700 dark:fill-emerald-300 text-[10px] font-mono font-bold">A₂ 腹版形心 y₂</text>
        {/* Composite Centroid Axis */}
        <line x1="55" y1="118" x2="345" y2="118" stroke="currentColor" strokeWidth="2" strokeDasharray="6 3" className="text-rose-600" />
        <circle cx="175" cy="118" r="5.5" className="fill-rose-600 stroke-white" strokeWidth="1.5" />
        <text x="60" y="112" className="fill-rose-700 dark:fill-rose-300 text-[11px] font-mono font-bold">總形心軸 N.A. (ȳ)</text>
        {/* Bottom datum */}
        <line x1="55" y1="220" x2="345" y2="220" stroke="currentColor" strokeWidth="1.5" className="text-slate-500" />
        <line x1="80" y1="220" x2="80" y2="118" stroke="currentColor" strokeWidth="1.8" className="text-amber-600" markerEnd={`url(#${m.arrowAmber})`} />
        <text x="72" y="175" textAnchor="end" className="fill-amber-700 dark:fill-amber-300 text-[11px] font-mono font-bold">ȳ</text>
        <text x="204" y="256" textAnchor="middle" className="fill-slate-700 dark:fill-slate-300 text-[10.5px] font-mono">
          挖空洞口面積代負值 (-A_hole)，慣性矩同步相減！
        </text>
      </LeftCard>
      <RightCard title="基本斷面慣性矩 Īx 必背庫" subtitle="高度 h 三次方效應：立放剛度遠勝平放">
        <StepRow y={54} num="矩" label="矩形斷面 (寬 b × 高 h)" detail="形心軸 bh³/12 ； 底邊軸 bh³/3" tone="blue" />
        <StepRow y={110} num="角" label="三角形斷面 (底 b × 高 h)" detail="形心軸 bh³/36 (距底h/3) ； 底邊 bh³/12" tone="emerald" />
        <StepRow y={166} num="圓" label="圓形斷面 (直徑 D = 2R)" detail="Īx = πD⁴/64 = πR⁴/4 ； Z = I/y_max" tone="indigo" />
        <text x="16" y="246" className="fill-slate-600 dark:fill-slate-300 text-[10px] font-mono">
          ★ 迴轉半徑 r = √(I / A) (壓桿細長比 KL/r 核心參數)
        </text>
      </RightCard>
    </g>
  ),

  'mechanics/stress-strain': (m) => (
    <g>
      <LeftCard title="低碳鋼拉伸應力－應變曲線 (σ-ε Curve)" subtitle="虎克定律斜率 E = σ / ε ≈ 200 GPa">
        <line x1="52" y1="232" x2="375" y2="232" stroke="currentColor" strokeWidth="1.5" className="text-slate-500" markerEnd={`url(#${m.arrowBlue})`} />
        <line x1="52" y1="232" x2="52" y2="52" stroke="currentColor" strokeWidth="1.5" className="text-slate-500" markerEnd={`url(#${m.arrowBlue})`} />
        <text x="372" y="250" textAnchor="end" className="fill-slate-600 text-[10px] font-mono">應變 ε = ΔL/L</text>
        <text x="56" y="48" className="fill-slate-600 text-[10px] font-mono">應力 σ = P/A</text>
        {/* Mild steel curve */}
        <path
          d="M 52 232 L 95 118 Q 102 106 110 124 L 168 124 Q 230 68 285 68 Q 325 68 350 105"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          className="text-rose-600 dark:text-rose-400"
        />
        <circle cx="95" cy="118" r="4" className="fill-blue-600" />
        <circle cx="138" cy="124" r="4" className="fill-amber-600" />
        <circle cx="285" cy="68" r="4.5" className="fill-emerald-600" />
        <circle cx="350" cy="105" r="4.5" className="fill-rose-700" />
        <text x="86" y="108" textAnchor="end" className="fill-blue-700 dark:fill-blue-300 text-[9.5px] font-mono font-bold">比例限/彈性區</text>
        <text x="140" y="142" textAnchor="middle" className="fill-amber-700 dark:fill-amber-300 text-[9.5px] font-mono font-bold">降伏平台 fy</text>
        <text x="285" y="58" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[10px] font-mono font-bold">極限強度 fu</text>
        <text x="348" y="124" textAnchor="end" className="fill-rose-700 dark:fill-rose-300 text-[9.5px] font-mono font-bold">頸縮斷裂</text>
        <text x="86" y="190" className="fill-indigo-700 dark:fill-indigo-300 text-[10.5px] font-mono font-bold">斜率 = E</text>
      </LeftCard>
      <RightCard title="軸向變形、蒲松比與熱應力" subtitle="三大材料力學定量公式">
        <StepRow y={54} num="δ" label="軸向伸長／縮短量" detail="δ = P·L / (A·E) (分段變形代數相加)" tone="blue" />
        <StepRow y={110} num="ν" label="蒲松比 (橫向變瘦效應)" detail="ν = -ε_橫 / ε_軸 (0 ≤ ν ≤ 0.5)" tone="emerald" />
        <StepRow y={166} num="T" label="兩端鎖死溫度熱應力" detail="σ_T = E·α·ΔT (與桿長 L 完全無關!)" tone="rose" />
        <text x="16" y="246" className="fill-slate-600 dark:fill-slate-300 text-[10px] font-mono">
          ★ 鋼材 E ≈ 200 GPa ； 混凝土 Ec ≈ 15000√f&apos;c (kgf/cm²)
        </text>
      </RightCard>
    </g>
  ),

  'mechanics/shear-properties': (m) => (
    <g>
      <LeftCard title="螺栓單剪 (1A) vs 雙剪 (2A) ＆ 剪應變 γ" subtitle="數清楚「切斷幾個螺栓圓截面」！">
        {/* Single shear */}
        <g transform="translate(28, 66)">
          <rect x="10" y="28" width="90" height="18" className="fill-slate-300 dark:fill-slate-700 stroke-slate-500" />
          <rect x="65" y="46" width="90" height="18" className="fill-slate-400 dark:fill-slate-600 stroke-slate-500" />
          <rect x="76" y="16" width="14" height="60" rx="2" className="fill-blue-500/40 stroke-blue-700" strokeWidth="1.8" />
          <line x1="68" y1="46" x2="98" y2="46" stroke="currentColor" strokeWidth="2.5" className="text-rose-600" />
          <text x="83" y="96" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[11px] font-bold">單搭接（單剪）</text>
          <text x="83" y="112" textAnchor="middle" className="fill-rose-600 text-[10.5px] font-mono font-bold">τ = P / A</text>
        </g>
        {/* Double shear */}
        <g transform="translate(212, 60)">
          <rect x="10" y="18" width="90" height="14" className="fill-slate-300 dark:fill-slate-700 stroke-slate-500" />
          <rect x="55" y="32" width="100" height="20" className="fill-slate-400 dark:fill-slate-600 stroke-slate-500" />
          <rect x="10" y="52" width="90" height="14" className="fill-slate-300 dark:fill-slate-700 stroke-slate-500" />
          <rect x="68" y="8" width="14" height="68" rx="2" className="fill-emerald-500/40 stroke-emerald-700" strokeWidth="1.8" />
          <line x1="60" y1="32" x2="90" y2="32" stroke="currentColor" strokeWidth="2.5" className="text-rose-600" />
          <line x1="60" y1="52" x2="90" y2="52" stroke="currentColor" strokeWidth="2.5" className="text-rose-600" />
          <text x="75" y="102" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[11px] font-bold">雙夾板（雙剪）</text>
          <text x="75" y="118" textAnchor="middle" className="fill-emerald-600 text-[10.5px] font-mono font-bold">τ = P / (2A)</text>
        </g>
        <text x="204" y="246" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-300 text-[10.5px] font-mono font-bold">
          剪應力互等：τ_xy = τ_yx ； 彈性常數換算：E = 2G(1 + ν)
        </text>
      </LeftCard>
      <RightCard title="矩形梁截面剪應力拋物線分布" subtitle="τ = V·Q / (I·b) — 中性軸處最大！">
        <rect x="34" y="68" width="44" height="136" className="fill-slate-200 dark:fill-slate-800 stroke-slate-500" strokeWidth="1.5" />
        <line x1="22" y1="136" x2="236" y2="136" stroke="currentColor" strokeDasharray="4 2" className="text-amber-600" />
        <path d="M 110 68 Q 225 136 110 204 Z" className="fill-rose-500/20 stroke-rose-600" strokeWidth="2" />
        <line x1="110" y1="136" x2="166" y2="136" stroke="currentColor" strokeWidth="2.5" className="text-rose-600" markerEnd={`url(#${m.arrowRose})`} />
        <text x="174" y="132" className="fill-rose-700 dark:fill-rose-300 text-[10.5px] font-mono font-bold">τ_max = 1.5(V/A)</text>
        <text x="112" y="64" className="fill-slate-500 text-[9.5px] font-mono">頂底緣 τ = 0</text>
        <text x="16" y="244" className="fill-slate-600 dark:fill-slate-300 text-[10px] font-mono">
          <tspan x="16">★ 彎應力頂底最大、中性軸為 0</tspan>
          <tspan x="16" dy="16">★ 剪應力剛好相反：中性軸最大 1.5 倍！</tspan>
        </text>
      </RightCard>
    </g>
  ),

  'mechanics/beam': () => (
    <g>
      <LeftCard title="簡支梁均布載重 → SFD 剪力圖 → BMD 彎矩圖" subtitle="階次遞升：0次水平載重 → 1次斜直線剪力 → 2次拋物線彎矩">
        {/* Beam + UDL */}
        <rect x="65" y="62" width="270" height="18" className="fill-blue-500/15 stroke-blue-500" />
        <rect x="65" y="80" width="270" height="10" className="fill-slate-300 dark:fill-slate-700 stroke-slate-600" />
        <polygon points="65,90 56,104 74,104" className="fill-teal-600" />
        <polygon points="335,90 326,104 344,104" className="fill-teal-600" />
        <text x="200" y="58" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[10px] font-mono font-bold">均布載重 w (跨度 L)</text>
        {/* SFD */}
        <line x1="65" y1="150" x2="335" y2="150" stroke="currentColor" strokeWidth="1" className="text-slate-400" />
        <polygon points="65,150 65,120 200,150" className="fill-emerald-500/20 stroke-emerald-600" strokeWidth="1.8" />
        <polygon points="200,150 335,180 335,150" className="fill-rose-500/20 stroke-rose-600" strokeWidth="1.8" />
        <text x="58" y="126" textAnchor="end" className="fill-emerald-700 dark:fill-emerald-300 text-[9.5px] font-mono font-bold">+wL/2</text>
        <text x="342" y="182" className="fill-rose-700 dark:fill-rose-300 text-[9.5px] font-mono font-bold">-wL/2</text>
        <circle cx="200" cy="150" r="4" className="fill-amber-500" />
        <text x="208" y="144" className="fill-amber-700 dark:fill-amber-300 text-[9.5px] font-mono font-bold">V=0 極值點!</text>
        {/* BMD */}
        <line x1="65" y1="205" x2="335" y2="205" stroke="currentColor" strokeWidth="1" className="text-slate-400" />
        <path d="M 65 205 Q 200 285 335 205 Z" className="fill-purple-500/20 stroke-purple-600" strokeWidth="2" />
        <text x="200" y="264" textAnchor="middle" className="fill-purple-800 dark:fill-purple-200 text-[11px] font-mono font-bold">
          M_max = +wL² / 8
        </text>
      </LeftCard>
      <RightCard title="四大基本梁最大彎矩速查表" subtitle="ΔM = 剪力圖面積 ； 集中力偶使彎矩跳躍">
        <StepRow y={54} num="1" label="簡支梁：跨中集中力 P" detail="V = ±P/2 ； M_max = PL / 4" tone="blue" />
        <StepRow y={110} num="2" label="簡支梁：滿布均布載重 w" detail="V = ±wL/2 ； M_max = wL² / 8" tone="emerald" />
        <StepRow y={166} num="3" label="懸臂梁：自由端 P ／ 滿布 w" detail="M_max = -PL 或 -wL²/2 (上拉下壓!)" tone="rose" />
        <text x="16" y="246" className="fill-slate-600 dark:fill-slate-300 text-[10px] font-mono">
          ★ 彎曲正應力公式：σ_max = M_max · y / I = M / Z
        </text>
      </RightCard>
    </g>
  ),

  'mechanics/plane-stress': (m) => (
    <g>
      <LeftCard title="平面應力莫耳圓 (Mohr's Circle)" subtitle="實體轉 θ 角 ⇔ 莫耳圓同向轉 2θ 角！">
        <line x1="40" y1="165" x2="375" y2="165" stroke="currentColor" strokeWidth="1.5" className="text-slate-500" markerEnd={`url(#${m.arrowBlue})`} />
        <line x1="115" y1="262" x2="115" y2="58" stroke="currentColor" strokeWidth="1.5" className="text-slate-500" markerEnd={`url(#${m.arrowBlue})`} />
        <text x="380" y="169" className="fill-slate-700 dark:fill-slate-300 text-[11px] font-mono font-bold">+σ</text>
        <text x="115" y="50" textAnchor="middle" className="fill-slate-700 dark:fill-slate-300 text-[11px] font-mono font-bold">τ</text>
        {/* Mohr's circle */}
        <circle cx="225" cy="165" r="82" className="fill-indigo-500/10 stroke-indigo-600 dark:stroke-indigo-400" strokeWidth="2.5" />
        <line x1="175" y1="100" x2="275" y2="230" stroke="currentColor" strokeWidth="2" strokeDasharray="4 3" className="text-amber-600" />
        <circle cx="225" cy="165" r="4.5" className="fill-amber-600" />
        <circle cx="307" cy="165" r="5" className="fill-rose-600" />
        <circle cx="143" cy="165" r="5" className="fill-blue-600" />
        <circle cx="225" cy="83" r="5" className="fill-emerald-600" />
        <text x="225" y="182" textAnchor="middle" className="fill-amber-700 dark:fill-amber-300 text-[10px] font-mono font-bold">C(σ_avg, 0)</text>
        <text x="314" y="156" className="fill-rose-700 dark:fill-rose-300 text-[10.5px] font-mono font-bold">σ₁ = C+R</text>
        <text x="138" y="156" textAnchor="end" className="fill-blue-700 dark:fill-blue-300 text-[10.5px] font-mono font-bold">σ₂ = C-R</text>
        <text x="225" y="74" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[10.5px] font-mono font-bold">τ_max = R</text>
      </LeftCard>
      <RightCard title="主應力與純剪狀態黃金關係" subtitle="主應力面上剪應力 τ = 0！">
        <StepRow y={54} num="C" label="圓心座標（平均正應力）" detail="C = (σx + σy) / 2 (應力不變量)" tone="amber" />
        <StepRow y={110} num="R" label="半徑（即平面最大剪應力）" detail="R = √[((σx - σy)/2)² + τxy²]" tone="emerald" />
        <StepRow y={166} num="45°" label="純剪狀態 (σx=σy=0, 僅 τ)" detail="圓心在原點 → 45° 斜面拉裂 σ₁=+τ!" tone="rose" />
        <text x="16" y="246" className="fill-slate-600 dark:fill-slate-300 text-[10px] font-mono">
          ★ RC 梁柱震後 45° 斜向剪力裂縫正是主拉應力所致！
        </text>
      </RightCard>
    </g>
  ),

  'mechanics/structural-failures': (m) => (
    <g>
      <LeftCard title="歐拉長柱挫屈有效長度係數 K (Euler Buckling)" subtitle="P_cr = π²EI / (KL)² ； 細長比 λ = KL / r">
        {[
          { x: 46, k: 'K = 1.0', name: '兩端鉸支', path: 'M 30 30 Q 52 100 30 170' },
          { x: 138, k: 'K = 0.5', name: '兩端固定', path: 'M 30 30 C 30 65, 48 75, 48 100 C 48 125, 30 135, 30 170' },
          { x: 230, k: 'K = 0.7', name: '一固一鉸', path: 'M 30 30 Q 50 85 30 140 L 30 170' },
          { x: 322, k: 'K = 2.0', name: '一固一自由', path: 'M 48 30 Q 46 110 30 170' },
        ].map((col, idx) => (
          <g key={idx} transform={`translate(${col.x}, 48)`}>
            <line x1="30" y1="30" x2="30" y2="170" stroke="currentColor" strokeDasharray="3 3" className="text-slate-400" />
            <path d={col.path} fill="none" stroke="currentColor" strokeWidth="2.8" className="text-rose-600 dark:text-rose-400" />
            <line x1="30" y1="8" x2="30" y2="28" stroke="currentColor" strokeWidth="2" className="text-blue-600" markerEnd={`url(#${m.arrowBlue})`} />
            <text x="30" y="192" textAnchor="middle" className="fill-indigo-700 dark:fill-indigo-300 text-[10.5px] font-mono font-bold">{col.k}</text>
            <text x="30" y="208" textAnchor="middle" className="fill-slate-600 dark:fill-slate-400 text-[9.5px]">{col.name}</text>
          </g>
        ))}
      </LeftCard>
      <RightCard title="延性預警 vs 脆性突潰（耐震核心）" subtitle="強柱弱梁、強剪弱彎設計哲學">
        <StepRow y={54} num="延" label="延性破壞 (拉力控制／梁端塑鉸)" detail="鋼筋先降伏大變形吸能，給人逃生時間" tone="emerald" />
        <StepRow y={110} num="脆" label="脆性破壞 (剪力破壞／短柱效應)" detail="窗台束制使柱高變短 V=2Mp/H 暴增瞬斷!" tone="rose" />
        <StepRow y={166} num="r" label="挫屈必繞最小慣性矩弱軸發生" detail="計算務必取 I_min 與最小迴轉半徑 r_min" tone="amber" />
        <text x="16" y="246" className="fill-slate-600 dark:fill-slate-300 text-[10px] font-mono">
          ★ 臨界挫屈應力：σ_cr = π²E / (KL / r)²
        </text>
      </RightCard>
    </g>
  ),
};
