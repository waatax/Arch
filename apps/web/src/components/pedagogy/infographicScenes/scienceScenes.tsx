import React from 'react';
import { LeftCard, RightCard, StepRow, type SceneRenderer } from './scenePrimitives';

export const scienceScenes: Record<string, SceneRenderer> = {
  // ───────────── PHYSICS (6 TOPICS) ─────────────
  'physics/mechanics-motion': (m) => (
    <g>
      <LeftCard title="速度－時間圖 (v-t Graph)：斜率 = 加速度 a 、 面積 = 位移 Δx" subtitle="等加速度運動三大公式視覺推導核心！">
        <line x1="56" y1="222" x2="365" y2="222" stroke="currentColor" strokeWidth="1.5" className="text-slate-500" markerEnd={`url(#${m.arrowBlue})`} />
        <line x1="56" y1="222" x2="56" y2="56" stroke="currentColor" strokeWidth="1.5" className="text-slate-500" markerEnd={`url(#${m.arrowBlue})`} />
        <polygon points="56,222 56,162 308,82 308,222" className="fill-emerald-500/20 stroke-emerald-600" strokeWidth="2.4" />
        <line x1="56" y1="162" x2="308" y2="162" stroke="currentColor" strokeDasharray="4 3" className="text-blue-500" />
        <text x="48" y="166" textAnchor="end" className="fill-blue-700 dark:fill-blue-300 text-[10.5px] font-mono font-bold">v₀</text>
        <text x="316" y="86" className="fill-rose-700 dark:fill-rose-300 text-[10.5px] font-mono font-bold">v = v₀ + at</text>
        <text x="182" y="198" textAnchor="middle" className="fill-emerald-800 dark:fill-emerald-200 text-[11px] font-mono font-bold">矩形 v₀t</text>
        <text x="225" y="142" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-200 text-[11px] font-mono font-bold">三角形 ½at²</text>
        <text x="204" y="254" textAnchor="middle" className="fill-slate-700 dark:fill-slate-300 text-[10.5px] font-mono font-bold">
          總梯形面積 = 位移 S = v₀t + ½at² ； 斜率 Δv/Δt = a
        </text>
      </LeftCard>
      <RightCard title="牛頓三大運動定律與動量衝量" subtitle="建築隔震墊延長碰撞時間 Δt 降低衝擊力 F">
        <StepRow y={54} num="F" label="牛頓第二運動定律 ΣF = m·a" detail="1 N = 1 kg · m/s² （注意質量須用 kg!）" tone="rose" />
        <StepRow y={112} num="J" label="衝量－動量定理 F·Δt = Δ(mv)" detail="延長緩衝時間 Δt → 大幅減小地震或墜落衝擊力" tone="emerald" />
        <StepRow y={170} num="圓" label="等速率圓周運動向心加速度" detail="a_c = v² / r = r·ω² （方向永遠指向圓心）" tone="blue" />
      </RightCard>
    </g>
  ),

  'physics/work-energy': (m) => (
    <g>
      <LeftCard title="力學能守恆（位能 U=mgh ↔ 動能 K=½mv²）與斜面省力不省功" subtitle="無摩擦耗散時：高處位能完全轉化為底端動能 v = √(2gh)">
        <polygon points="56,216 326,216 116,84" className="fill-indigo-500/12 stroke-indigo-600" strokeWidth="2" />
        <circle cx="116" cy="76" r="10" className="fill-amber-500 stroke-amber-700" strokeWidth="1.5" />
        <circle cx="312" cy="206" r="10" className="fill-emerald-500 stroke-emerald-700" strokeWidth="1.5" />
        <line x1="116" y1="84" x2="116" y2="216" stroke="currentColor" strokeDasharray="4 3" className="text-rose-600" />
        <line x1="316" y1="206" x2="362" y2="206" stroke="currentColor" strokeWidth="2.8" className="text-emerald-600" markerEnd={`url(#${m.arrowEmerald})`} />
        <text x="106" y="156" textAnchor="end" className="fill-rose-700 dark:fill-rose-300 text-[11px] font-mono font-bold">高度 h</text>
        <text x="140" y="72" className="fill-amber-700 dark:fill-amber-300 text-[10.5px] font-mono font-bold">頂端：U=mgh, K=0</text>
        <text x="275" y="186" className="fill-emerald-700 dark:fill-emerald-300 text-[10.5px] font-mono font-bold">底端：K=½mv²</text>
        <text x="204" y="256" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-300 text-[10.5px] font-mono font-bold">
          功 W = F·d·cosθ （提重物水平行走 θ=90° → 重力作功 = 0！）
        </text>
      </LeftCard>
      <RightCard title="功率、電度換算與熱功當量" subtitle="1 度電 (1 kWh) = 3.6 × 10⁶ J">
        <StepRow y={54} num="功" label="功率 P = W / t = F · v (瓦特 W)" detail="1 馬力 HP ≈ 746 W ； 電梯配重再生發電節能" tone="blue" />
        <StepRow y={112} num="熱" label="焦耳熱功當量" detail="1 cal ≈ 4.186 J （1 kcal ≈ 4186 J）" tone="amber" />
        <StepRow y={170} num="COP" label="空調能源效率比 COP / CSPF" detail="COP = 冷房能力(W) / 消耗電功率(W)，越高越省電" tone="emerald" />
      </RightCard>
    </g>
  ),

  'physics/thermodynamics': () => (
    <g>
      <LeftCard title="建築複合外牆熱傳導剖面與熱傳透率 U 值" subtitle="q = U·A·ΔT ； 總熱阻 ΣR = R_外氣膜 + Σ(厚度 d / 導熱率 k) + R_內氣膜">
        {/* Sun + Layered Wall + Temperature profile */}
        <circle cx="58" cy="88" r="18" className="fill-amber-400 stroke-amber-600" strokeWidth="1.5" />
        <rect x="118" y="64" width="24" height="156" className="fill-slate-300 stroke-slate-500" />
        <rect x="142" y="64" width="42" height="156" className="fill-amber-200/80 stroke-amber-600" strokeWidth="1.8" />
        <rect x="184" y="64" width="76" height="156" className="fill-slate-400/70 stroke-slate-600" strokeWidth="1.8" />
        <rect x="260" y="64" width="20" height="156" className="fill-slate-200 stroke-slate-400" />
        {/* Steep temperature drop across insulation */}
        <polyline points="88,88 118,96 142,104 184,178 260,188 308,194" fill="none" stroke="currentColor" strokeWidth="3" className="text-rose-600" />
        <text x="82" y="114" textAnchor="end" className="fill-rose-700 dark:fill-rose-300 text-[10px] font-mono font-bold">室外 36°C</text>
        <text x="314" y="198" className="fill-blue-700 dark:fill-blue-300 text-[10px] font-mono font-bold">室內 26°C</text>
        <text x="163" y="236" textAnchor="middle" className="fill-amber-700 dark:fill-amber-300 text-[9.5px] font-bold">隔熱層(小k大R)</text>
        <text x="222" y="236" textAnchor="middle" className="fill-slate-700 dark:fill-slate-300 text-[9.5px] font-bold">RC牆 15cm</text>
        <text x="204" y="262" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-300 text-[10.5px] font-mono font-bold">
          U = 1 / ΣR （W/m²·K）：U 值越小代表外殼隔熱越強！
        </text>
      </LeftCard>
      <RightCard title="熱膨脹伸縮縫 ＆ 三種傳熱對策" subtitle="ΔL = α · L₀ · ΔT （橋梁與長外牆必留伸縮縫）">
        <StepRow y={54} num="導" label="熱傳導：選多孔低 k 值隔熱材" detail="空氣靜止層、岩棉、PS隔熱板阻斷固體導熱" tone="amber" />
        <StepRow y={112} num="流" label="熱對流：屋頂通氣層＋煙囪效應" detail="熱空氣密度小上升自高窗排出，冷風自低窗補入" tone="blue" />
        <StepRow y={170} num="輻" label="熱輻射：外遮陽＋淺色高反射漆" detail="不需介質光速傳播！外遮陽直接擋掉 70% 日射熱" tone="rose" />
      </RightCard>
    </g>
  ),

  'physics/waves-acoustics': () => (
    <g>
      <LeftCard title="室內聲學塞賓餘響時間 RT₆₀ = 0.161·V / A 與距離衰減" subtitle="聲音關掉後聲壓級衰減 60 dB（能量剩百萬分之一）所需秒數！">
        {/* Room sound reflection + decay graph */}
        <rect x="38" y="68" width="168" height="142" rx="8" className="fill-indigo-500/10 stroke-indigo-600" strokeWidth="2" />
        <circle cx="68" cy="142" r="7" className="fill-rose-600" />
        <polyline points="68,142 135,68 182,142" fill="none" stroke="currentColor" strokeDasharray="4 2" className="text-amber-600" strokeWidth="1.8" />
        <line x1="68" y1="142" x2="182" y2="142" stroke="currentColor" strokeWidth="2.4" className="text-blue-600" />
        <circle cx="182" cy="142" r="6" className="fill-emerald-600" />
        <text x="122" y="160" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[9.5px] font-bold">直達音</text>
        <text x="128" y="96" textAnchor="middle" className="fill-amber-700 dark:fill-amber-300 text-[9.5px] font-bold">吸音天花反射音</text>
        {/* Decay line */}
        <g transform="translate(226, 68)">
          <line x1="16" y1="138" x2="156" y2="138" stroke="currentColor" className="text-slate-400" />
          <line x1="16" y1="138" x2="16" y2="16" stroke="currentColor" className="text-slate-400" />
          <line x1="16" y1="28" x2="138" y2="128" stroke="currentColor" strokeWidth="2.8" className="text-rose-600" />
          <text x="82" y="66" className="fill-rose-700 dark:fill-rose-300 text-[10px] font-mono font-bold">-60 dB</text>
          <text x="84" y="154" textAnchor="middle" className="fill-indigo-700 dark:fill-indigo-300 text-[10px] font-mono font-bold">RT₆₀ (演講0.8s/音樂1.8s)</text>
        </g>
        <text x="204" y="256" textAnchor="middle" className="fill-slate-700 dark:fill-slate-300 text-[10.5px] font-mono font-bold">
          波速 v = f·λ ≈ 331 + 0.6t (m/s) ； 總吸音力 A = Σ(αᵢ · Sᵢ)
        </text>
      </LeftCard>
      <RightCard title="分貝對數運算 ＆ 吸音 vs 隔音" subtitle="dB = 10 · log₁₀(I / I₀) — 能量 10 倍加 10 dB！">
        <StepRow y={54} num="+3" label="兩台同音量機器疊加：只 +3 dB！" detail="70 dB + 70 dB = 73 dB（絕不是 140 dB!）" tone="rose" />
        <StepRow y={112} num="距" label="點聲源距離加倍 -6dB；線聲源 -3dB" detail="單一機器球面擴散 vs 高速公路車流圓柱擴散" tone="blue" />
        <StepRow y={170} num="材" label="多孔蓬鬆「吸音」 vs 厚重氣密「隔音」" detail="岩棉消室內回音(α)；厚 RC 牆擋鄰居穿牆音(STC)" tone="emerald" />
      </RightCard>
    </g>
  ),

  'physics/optics': (m) => (
    <g>
      <LeftCard title="司乃耳折射定律 n₁·sinθ₁ = n₂·sinθ₂ 與建築晝光採光" subtitle="光由空氣進入玻璃（慢介質 n₂&gt;n₁）必偏向法線；光纖利用全反射！">
        {/* Air / Glass boundary */}
        <rect x="44" y="146" width="185" height="82" className="fill-cyan-500/18 stroke-cyan-600" />
        <line x1="136" y1="62" x2="136" y2="228" stroke="currentColor" strokeDasharray="4 3" className="text-slate-500" />
        <line x1="68" y1="74" x2="136" y2="146" stroke="currentColor" strokeWidth="2.8" className="text-amber-500" markerEnd={`url(#${m.arrowAmber})`} />
        <line x1="136" y1="146" x2="172" y2="222" stroke="currentColor" strokeWidth="2.8" className="text-blue-600" markerEnd={`url(#${m.arrowBlue})`} />
        <text x="114" y="102" className="fill-amber-700 dark:fill-amber-300 text-[10px] font-mono font-bold">θ₁(空氣n≈1)</text>
        <text x="142" y="196" className="fill-blue-700 dark:fill-blue-300 text-[10px] font-mono font-bold">θ₂(玻璃n≈1.5)</text>
        {/* Inverse square illumination */}
        <g transform="translate(248, 72)">
          <circle cx="68" cy="18" r="10" className="fill-amber-400" />
          <polygon points="68,28 38,92 98,92" className="fill-amber-400/20 stroke-amber-500" />
          <polygon points="68,28 14,148 122,148" className="fill-amber-400/10 stroke-amber-500" strokeDasharray="3 2" />
          <text x="68" y="88" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 text-[9.5px] font-mono font-bold">r → E</text>
          <text x="68" y="142" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 text-[9.5px] font-mono font-bold">2r → E/4!</text>
        </g>
        <text x="204" y="256" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-300 text-[10.5px] font-mono font-bold">
          照度平方反比定律：E = I·cosθ / r² （製圖桌面標準照度 ≥ 750 lx）
        </text>
      </LeftCard>
      <RightCard title="全反射條件 ＆ 光學四大單位" subtitle="光通量 lm、發光強度 cd、照度 lx、輝度 cd/m²">
        <StepRow y={54} num="全" label="全反射兩大前提（缺一不可!）" detail="(1) 光密→光疏(n₁>n₂) 且 (2) 入射角 > 臨界角θc" tone="rose" />
        <StepRow y={112} num="lx" label="照度 E (勒克斯 lx = lm / m²)" detail="工作面每平方公尺接收光通量；導光板引光入深處" tone="blue" />
        <StepRow y={170} num="眩" label="防眩光與演色性 Ra ≥ 80" detail="避免光源直射眼睛造成失能眩光，美術館需高演色性" tone="emerald" />
      </RightCard>
    </g>
  ),

  'physics/electricity': () => (
    <g>
      <LeftCard title="台灣住宅「單相三線式 110V / 220V」配電與接地保護" subtitle="火線 L₁/L₂ 對中性線 N 為 110V ； 兩火線 L₁-L₂ 跨接為 220V 冷氣專用！">
        {/* 3 busbars L1, N, L2 */}
        <line x1="48" y1="82" x2="365" y2="82" stroke="currentColor" strokeWidth="3" className="text-rose-600" />
        <line x1="48" y1="138" x2="365" y2="138" stroke="currentColor" strokeWidth="3" className="text-slate-500" />
        <line x1="48" y1="194" x2="365" y2="194" stroke="currentColor" strokeWidth="3" className="text-slate-900 dark:text-amber-400" />
        <line x1="48" y1="232" x2="365" y2="232" stroke="currentColor" strokeWidth="2" strokeDasharray="6 3" className="text-emerald-600" />
        <text x="52" y="74" className="fill-rose-700 dark:fill-rose-300 text-[10px] font-mono font-bold">火線 L₁ (紅)</text>
        <text x="52" y="130" className="fill-slate-600 dark:fill-slate-300 text-[10px] font-mono font-bold">中性線 N (白 0V)</text>
        <text x="52" y="186" className="fill-amber-700 dark:fill-amber-300 text-[10px] font-mono font-bold">火線 L₂ (黑)</text>
        <text x="52" y="248" className="fill-emerald-700 dark:fill-emerald-300 text-[10px] font-mono font-bold">設備接地線 G (綠) → 導走漏電防觸電!</text>
        {/* 110V load vs 220V AC load */}
        <rect x="168" y="96" width="68" height="28" rx="6" className="fill-blue-500/20 stroke-blue-600" strokeWidth="1.6" />
        <text x="202" y="114" textAnchor="middle" className="fill-blue-800 dark:fill-blue-200 text-[10px] font-mono font-bold">110V 插座</text>
        <rect x="272" y="114" width="76" height="48" rx="6" className="fill-rose-500/20 stroke-rose-600" strokeWidth="1.8" />
        <text x="310" y="142" textAnchor="middle" className="fill-rose-800 dark:fill-rose-200 text-[10.5px] font-mono font-bold">220V 冷氣</text>
      </LeftCard>
      <RightCard title="歐姆定律、串並聯與用電安全" subtitle="家庭電器一律「並聯」（各享同電壓、獨立開關）">
        <StepRow y={54} num="P" label="電功率三公式（電線發熱 I²R!）" detail="P = I·V = I²·R = V²/R （延長線過載起火主因）" tone="rose" />
        <StepRow y={112} num="斷" label="NFB 無熔絲開關 vs ELCB 漏電斷路器" detail="NFB 防過載短路起火；浴廁廚房濕區必裝 ELCB 防電死!" tone="emerald" />
        <StepRow y={170} num="變" label="變壓器電磁感應（僅適用交流電 AC!）" detail="V₁ / V₂ = N₁ / N₂ （高壓輸電降電流減少 I²R 損耗）" tone="blue" />
      </RightCard>
    </g>
  ),

  // ───────────── CHEMISTRY (6 TOPICS) ─────────────
  'chemistry/matter-composition': () => (
    <g>
      <LeftCard title="物質分類樹（純物質 vs 混合物）與三大化學鍵" subtitle="水泥漿／空氣／合金（不鏽鋼、黃銅）皆為「混合物」，無固定熔沸點！">
        {/* 3 chemical bonds visual */}
        {[
          { x: 22, title: '離子鍵 (金+非金)', sub: 'CaO / NaCl / 石膏', desc: '硬而脆、熔點高、熔融導電', cls: 'fill-rose-500/15 stroke-rose-600' },
          { x: 148, title: '共價鍵 / 網狀固體', sub: '石英 SiO₂ / 高分子', desc: '共用電子對；石英網狀超硬', cls: 'fill-blue-500/15 stroke-blue-600' },
          { x: 274, title: '金屬鍵 (自由電子海)', sub: '鋼筋 Fe / 鋁門窗 Al', desc: '富延展性不脆斷、導熱導電', cls: 'fill-amber-500/15 stroke-amber-600' },
        ].map((b, i) => (
          <g key={i} transform={`translate(${b.x}, 68)`}>
            <rect width="114" height="142" rx="10" className={b.cls} strokeWidth="1.8" />
            <text x="57" y="28" textAnchor="middle" className="fill-slate-900 dark:fill-white text-[10.5px] font-bold">{b.title}</text>
            <text x="57" y="64" textAnchor="middle" className="fill-indigo-700 dark:fill-indigo-300 text-[10px] font-mono font-bold">{b.sub}</text>
            <text x="57" y="106" textAnchor="middle" className="fill-slate-600 dark:fill-slate-300 text-[9px]">{b.desc}</text>
          </g>
        ))}
        <text x="204" y="252" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-300 text-[10.5px] font-mono font-bold">
          原子結構：質量數 A = 質子數 Z + 中子數 N （中性原子：電子數 = 質子數）
        </text>
      </LeftCard>
      <RightCard title="建材化學組成與室內 VOCs 防護" subtitle="同素異形體（石墨 vs 金剛石）屬於元素純物質！">
        <StepRow y={54} num="純" label="純物質（元素／化合物） vs 混合物" detail="生石灰 CaO 是化合物；波特蘭水泥與鋼鐵是混合物!" tone="blue" />
        <StepRow y={112} num="漆" label="水性乳膠漆 vs 油性溶劑塗料" detail="水性以水稀釋低 TVOC；油性揮發甲苯二甲苯有害健康" tone="emerald" />
        <StepRow y={170} num="光" label="奈米 TiO₂ 光觸媒自潔外牆" detail="吸收紫外線分解有機污垢並產生超親水性雨水沖淨" tone="amber" />
      </RightCard>
    </g>
  ),

  'chemistry/chemical-reactions': (m) => (
    <g>
      <LeftCard title="化學反應活化能勢壘 (Ea) 與石灰循環三部曲" subtitle="水泥水化與生石灰熟化皆為「放熱反應 ΔH &lt; 0」；灰石煅燒為吸熱！">
        <line x1="52" y1="224" x2="365" y2="224" stroke="currentColor" strokeWidth="1.5" className="text-slate-500" markerEnd={`url(#${m.arrowBlue})`} />
        <line x1="52" y1="224" x2="52" y2="54" stroke="currentColor" strokeWidth="1.5" className="text-slate-500" markerEnd={`url(#${m.arrowBlue})`} />
        {/* Uncatalyzed vs Catalyzed curve */}
        <path d="M 65 138 L 115 138 Q 185 32 255 186 L 345 186" fill="none" stroke="currentColor" strokeWidth="2.8" className="text-rose-600" />
        <path d="M 115 138 Q 185 88 255 186" fill="none" stroke="currentColor" strokeWidth="2.4" strokeDasharray="5 3" className="text-emerald-600" />
        <text x="90" y="130" textAnchor="middle" className="fill-slate-700 dark:fill-slate-300 text-[10px] font-bold">反應物</text>
        <text x="305" y="178" textAnchor="middle" className="fill-slate-700 dark:fill-slate-300 text-[10px] font-bold">生成物(放熱ΔH&lt;0)</text>
        <text x="192" y="58" className="fill-rose-700 dark:fill-rose-300 text-[10px] font-mono font-bold">原活化能 Ea</text>
        <text x="196" y="112" className="fill-emerald-700 dark:fill-emerald-300 text-[10px] font-mono font-bold">加催化劑降 Ea!</text>
        <text x="204" y="256" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-300 text-[10.5px] font-mono font-bold">
          石灰循環：CaCO₃(100) → CaO(56)+CO₂ → Ca(OH)₂(熟石灰) → CaCO₃!
        </text>
      </LeftCard>
      <RightCard title="化學計量莫耳數與限量試劑" subtitle="催化劑只改速率，絕不改變反應熱 ΔH 與產量！">
        <StepRow y={54} num="mol" label="莫耳數換算萬用橋樑" detail="n = 質量 W / 分子量 M = 個數 / (6.02×10²³)" tone="blue" />
        <StepRow y={112} num="100" label="碳酸鈣煅燒減重必背數字" detail="100g CaCO₃ 高溫分解 → 56g CaO + 44g CO₂↑" tone="amber" />
        <StepRow y={170} num="速" label="水泥磨越細 → 表面積越大水化越快" detail="溫度每升 10°C 反應速率約倍增（巨積混凝土需冰水降溫）" tone="emerald" />
      </RightCard>
    </g>
  ),

  'chemistry/acids-bases-salts': () => (
    <g>
      <LeftCard title="混凝土鹼性鈍化膜 (pH 12.5) 與 CO₂ 中性化（碳化）剖面" subtitle="Ca(OH)₂ + CO₂ → CaCO₃ + H₂O ：pH 跌破 9~10 鋼筋立即失去保護生鏽撐裂！">
        {/* Concrete cover + rebar + phenolphthalein indicator */}
        <rect x="48" y="68" width="312" height="148" rx="10" className="fill-purple-500/22 stroke-slate-600" strokeWidth="2" />
        <rect x="48" y="68" width="112" height="148" rx="8" className="fill-slate-200 dark:fill-slate-700" />
        <circle cx="178" cy="142" r="22" className="fill-slate-700 stroke-amber-500" strokeWidth="3" />
        <text x="178" y="146" textAnchor="middle" className="fill-white text-[10px] font-mono font-bold">鋼筋 Fe</text>
        <text x="104" y="112" textAnchor="middle" className="fill-slate-700 dark:fill-slate-200 text-[10.5px] font-bold">外層已碳化區</text>
        <text x="104" y="132" textAnchor="middle" className="fill-rose-600 text-[9.5px] font-mono font-bold">pH &lt; 9 酚酞無色!</text>
        <text x="276" y="112" textAnchor="middle" className="fill-purple-900 dark:fill-purple-200 text-[10.5px] font-bold">內部健康強鹼區</text>
        <text x="276" y="132" textAnchor="middle" className="fill-purple-700 dark:fill-purple-300 text-[9.5px] font-mono font-bold">pH&gt;12 酚酞紫紅!</text>
        <text x="204" y="252" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-300 text-[10.5px] font-mono font-bold">
          酸鹼定義：pH = -log₁₀[H⁺] （pH 每降 1 代表氫離子濃度暴增 10 倍！）
        </text>
      </LeftCard>
      <RightCard title="海砂屋氯離子與白華（壁癌）防治" subtitle="台灣建築三大酸鹼鹽類病變">
        <StepRow y={54} num="Cl⁻" label="海砂屋氯離子破壞鈍化膜" detail="CNS 3090 嚴格管制新拌混凝土水溶性氯離子上限!" tone="rose" />
        <StepRow y={112} num="癌" label="白華 Efflorescence（壁癌成因）" detail="水分攜帶游離 Ca(OH)₂ 滲出表面遇 CO₂ 結成白毛碳酸鈣" tone="amber" />
        <StepRow y={170} num="兩" label="鋁（Al）與鋅（Zn）為兩性金屬" detail="既怕強酸也怕新拌水泥強鹼！鋁窗安裝必貼保護膜" tone="blue" />
      </RightCard>
    </g>
  ),

  'chemistry/redox': (m) => (
    <g>
      <LeftCard title="鋼鐵電化學腐蝕電池 vs 犧牲陽極（鋅塊 Zn）防蝕" subtitle="口訣：失電子氧化（陽極溶蝕） ； 得電子還原（陰極受保護）！">
        {/* Steel pipe connected to sacrificial Zn anode */}
        <rect x="54" y="96" width="168" height="72" rx="12" className="fill-slate-500/35 stroke-slate-700 dark:stroke-slate-300" strokeWidth="2.2" />
        <text x="138" y="130" textAnchor="middle" className="fill-slate-900 dark:fill-white text-[11.5px] font-bold">鋼骨／地下鋼管 (陰極)</text>
        <text x="138" y="148" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[9.5px] font-mono font-bold">得電子受保護不生鏽!</text>
        <rect x="282" y="106" width="84" height="52" rx="8" className="fill-amber-500/30 stroke-amber-600" strokeWidth="2.2" strokeDasharray="5 2" />
        <text x="324" y="130" textAnchor="middle" className="fill-amber-900 dark:fill-amber-200 text-[11px] font-bold">鋅塊 Zn (陽極)</text>
        <text x="324" y="146" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 text-[9px] font-mono">Zn → Zn²⁺ + 2e⁻</text>
        {/* Electron flow from Zn to Fe */}
        <path d="M 324 106 Q 230 52 138 96" fill="none" stroke="currentColor" strokeWidth="2.6" className="text-blue-600" markerEnd={`url(#${m.arrowBlue})`} />
        <text x="232" y="68" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[10.5px] font-mono font-bold">← 電子流 e⁻ 源源不絕補向鋼鐵</text>
        <text x="204" y="218" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 text-[10.5px] font-mono font-bold">
          鐵生鏽體積膨脹 2.5 ~ 6 倍，是 RC 保護層爆裂剝落的主因！
        </text>
        <text x="204" y="252" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-300 text-[10px] font-mono">
          活性序：Mg &gt; Al &gt; Zn(鍍鋅白鐵) &gt; Fe &gt; Sn(馬口鐵) &gt; Cu
        </text>
      </LeftCard>
      <RightCard title="鍍鋅白鐵皮 vs 鍍錫馬口鐵 ＆ 鈍態" subtitle="統測氧化還原第一高頻題！">
        <StepRow y={54} num="Zn" label="鍍鋅鐵皮刮傷：鐵仍不生鏽！" detail="因活性 Zn > Fe，鋅搶當陽極犧牲自己保護鐵" tone="emerald" />
        <StepRow y={112} num="Sn" label="鍍錫馬口鐵刮傷：鐵加速鏽穿！" detail="因活性 Fe > Sn，鐵被迫當陽極快速氧化溶蝕" tone="rose" />
        <StepRow y={170} num="Cr" label="不鏽鋼（鉻 Cr ≥ 11%）與陽極處理鋁" detail="表面生成極緻密 Cr₂O₃ / Al₂O₃ 氧化膜隔絕水氧" tone="blue" />
      </RightCard>
    </g>
  ),

  'chemistry/organic-chemistry': (m) => (
    <g>
      <LeftCard title="加成聚合（雙鍵打開無副產物） vs 縮合聚合（脫小分子）" subtitle="高分子鏈結構決定建築塑膠管材、塗料與防水材壽命！">
        {/* Addition polymerization */}
        <rect x="28" y="64" width="352" height="74" rx="10" className="fill-blue-500/12 stroke-blue-600" strokeWidth="1.6" />
        <text x="44" y="88" className="fill-blue-800 dark:fill-blue-200 text-[11px] font-bold">1. 加成聚合（PE 聚乙烯、PVC 管、PP、PMMA 壓克力）</text>
        <text x="44" y="116" className="fill-slate-800 dark:fill-slate-200 text-[11px] font-mono font-bold">
          n CH₂=CHCl  ──(打斷雙鍵)──►  [ -CH₂ - CHCl - ]ₙ （原子 100% 保留!）
        </text>
        {/* Crosslinked thermoset */}
        <rect x="28" y="156" width="352" height="84" rx="10" className="fill-rose-500/12 stroke-rose-600" strokeWidth="1.6" />
        <text x="44" y="180" className="fill-rose-800 dark:fill-rose-200 text-[11px] font-bold">2. 縮合聚合／網狀交聯（尼龍、PET 聚酯、酚醛樹脂、Epoxy）</text>
        <line x1="65" y1="202" x2="295" y2="202" stroke="currentColor" strokeWidth="2.5" className="text-rose-600" />
        <line x1="65" y1="222" x2="295" y2="222" stroke="currentColor" strokeWidth="2.5" className="text-rose-600" />
        {[105, 165, 225].map((kx) => (
          <line key={kx} x1={kx} y1="202" x2={kx + 12} y2="222" stroke="currentColor" strokeWidth="2" className="text-amber-600" markerEnd={`url(#${m.arrowAmber})`} />
        ))}
        <text x="305" y="216" className="fill-rose-700 dark:fill-rose-300 text-[9.5px] font-mono font-bold">交聯不熔化</text>
      </LeftCard>
      <RightCard title="建築塑膠管材與合成樹脂選用" subtitle="看懂縮寫代號，工地絕不裝錯管！">
        <StepRow y={54} num="管" label="PVC 僅限冷水 ； 熱水選 CPVC / PEX" detail="一般灰色 PVC 耐熱 <60°C；地下抗震幹管選 HDPE" tone="blue" />
        <StepRow y={112} num="膠" label="Epoxy 結構補強 vs PU 彈性防水" detail="Epoxy 硬強但怕曬粉化；Silicone 矽氧鍵最耐 UV!" tone="emerald" />
        <StepRow y={170} num="醛" label="甲醛 HCHO 室內逸散源頭" detail="合板尿素甲醛膠著劑，裝修必選 F1 / 健康綠建材" tone="rose" />
      </RightCard>
    </g>
  ),

  'chemistry/environmental-chemistry': (m) => (
    <g>
      <LeftCard title="溫室效應紅外線攔截、酸雨形成 (pH &lt; 5.0) 與淨零建材" subtitle="正常雨水溶有 CO₂ 呈弱酸性 pH ≈ 5.6 ； SOx / NOx 使雨水 pH &lt; 5.0 即為酸雨！">
        {/* Sun shortwave in, IR trapped + Acid rain cloud */}
        <circle cx="68" cy="78" r="18" className="fill-amber-400 stroke-amber-600" />
        <line x1="84" y1="92" x2="155" y2="212" stroke="currentColor" strokeWidth="2.5" className="text-amber-500" markerEnd={`url(#${m.arrowAmber})`} />
        <polyline points="168,212 208,112 238,185" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-rose-600" markerEnd={`url(#${m.arrowRose})`} />
        <text x="172" y="96" className="fill-rose-700 dark:fill-rose-300 text-[10px] font-mono font-bold">CO₂/CH₄ 攔截長波紅外線</text>
        {/* Acid rain cloud */}
        <ellipse cx="318" cy="96" rx="52" ry="24" className="fill-slate-400/40 stroke-slate-500" strokeWidth="1.5" />
        <text x="318" y="100" textAnchor="middle" className="fill-slate-800 dark:fill-slate-100 text-[9.5px] font-mono font-bold">H₂SO₄ / HNO₃</text>
        <line x1="298" y1="124" x2="288" y2="168" stroke="currentColor" strokeDasharray="4 2" className="text-blue-600" />
        <line x1="328" y1="124" x2="318" y2="168" stroke="currentColor" strokeDasharray="4 2" className="text-blue-600" />
        <rect x="275" y="172" width="76" height="44" rx="4" className="fill-emerald-500/20 stroke-emerald-600" />
        <text x="313" y="198" textAnchor="middle" className="fill-emerald-800 dark:fill-emerald-200 text-[9.5px] font-bold">腐蝕大理石鋼構</text>
        <text x="204" y="254" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-300 text-[10.5px] font-mono font-bold">
          水質指標：溶氧 DO 越高越潔淨 ； 生化需氧量 BOD 越高有機污染越重！
        </text>
      </LeftCard>
      <RightCard title="大氣污染、臭氧層與建築減碳" subtitle="分清楚「溫室效應」、「酸雨」與「臭氧破洞」元兇！">
        <StepRow y={54} num="氣" label="三大環境議題元兇對號入座" detail="暖化→CO₂/CH₄ ； 酸雨→SO₂/NOx ； 臭氧洞→CFCs冷媒" tone="rose" />
        <StepRow y={112} num="PM" label="細懸浮微粒 PM2.5 (粒徑 ≤ 2.5 μm)" detail="工地裸露地表灑水覆網、全熱交換器加裝 HEPA 濾網" tone="amber" />
        <StepRow y={170} num="碳" label="水泥低碳化學革新" detail="以高爐石粉與飛灰取代熟料，大減 CaCO₃ 煅燒碳排" tone="emerald" />
      </RightCard>
    </g>
  ),
};
