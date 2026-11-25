import React from 'react';
import { LeftCard, RightCard, StepRow, type SceneRenderer } from './scenePrimitives';

export const draftingScenes: Record<string, SceneRenderer> = {
  'drafting/drafting-fundamentals': () => (
    <g>
      <LeftCard title="ISO / CNS 圖紙 A0~A4 對摺模矩（長寬比 √2 : 1）" subtitle="A0 面積 = 1 m² (841 × 1189 mm)，每對裁一次面積減半">
        <rect x="48" y="58" width="240" height="170" className="fill-indigo-500/10 stroke-indigo-600" strokeWidth="2" />
        <line x1="168" y1="58" x2="168" y2="228" stroke="currentColor" strokeWidth="1.8" className="text-blue-600" />
        <line x1="168" y1="143" x2="288" y2="143" stroke="currentColor" strokeWidth="1.6" className="text-emerald-600" />
        <line x1="228" y1="143" x2="228" y2="228" stroke="currentColor" strokeWidth="1.4" className="text-amber-600" />
        <line x1="228" y1="185.5" x2="288" y2="185.5" stroke="currentColor" strokeWidth="1.2" className="text-rose-600" />
        <text x="108" y="146" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-200 text-[14px] font-mono font-bold">A1</text>
        <text x="108" y="164" textAnchor="middle" className="fill-slate-500 text-[9.5px] font-mono">594×841</text>
        <text x="228" y="104" textAnchor="middle" className="fill-emerald-800 dark:fill-emerald-300 text-[13px] font-mono font-bold">A2</text>
        <text x="228" y="120" textAnchor="middle" className="fill-slate-500 text-[9px] font-mono">420×594</text>
        <text x="198" y="190" textAnchor="middle" className="fill-amber-800 dark:fill-amber-300 text-[11px] font-mono font-bold">A3</text>
        <text x="258" y="168" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 text-[10px] font-mono font-bold">A4</text>
        <text x="258" y="212" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 text-[10px] font-mono font-bold">210×297</text>
        <text x="345" y="142" textAnchor="middle" className="fill-slate-700 dark:fill-slate-300 text-[10.5px] font-mono font-bold">外框全幅 = A0</text>
        <text x="204" y="256" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-300 text-[10.5px] font-mono font-bold">
          裝訂邊（左側）留白 25 mm ； 標題欄固定置於右下角！
        </text>
      </LeftCard>
      <RightCard title="投影法兩大家族樹狀分類" subtitle="施工圖用正投影（量尺寸）；表現圖用透視（看空間）">
        <StepRow y={54} num="平" label="平行投影 → 正投影／軸測／斜投影" detail="投射線平行，可精準量取實長供現場按圖施工" tone="blue" />
        <StepRow y={112} num="中" label="中心投影 → 1點／2點／3點透視圖" detail="視線匯聚滅點 VP，近大遠小符合人眼真實視覺" tone="emerald" />
        <StepRow y={170} num="√2" label="為何長寬比選 √2 : 1 (1.414)？" detail="對摺後新圖紙長寬比仍維持 √2:1，影印縮放不變形" tone="amber" />
      </RightCard>
    </g>
  ),

  'drafting/drafting-instruments': (m) => (
    <g>
      <LeftCard title="丁字尺（或平行尺）＋ 兩塊三角板組合 15° 倍數角" subtitle="45°-45° 與 30°-60° 雙板疊合可畫所有 15° 整數倍斜線！">
        {/* Drawing board + T-square */}
        <rect x="42" y="54" width="324" height="190" rx="4" className="fill-amber-50/60 dark:fill-slate-800/60 stroke-slate-400" strokeWidth="1.5" />
        <rect x="34" y="168" width="16" height="54" rx="2" className="fill-slate-700" />
        <rect x="50" y="186" width="310" height="16" className="fill-indigo-600/80" />
        <text x="295" y="198" className="fill-white text-[10px] font-mono font-bold">丁字尺畫水平線 (左向右)</text>
        {/* 45 triangle + 30-60 triangle making 75 deg / 15 deg */}
        <polygon points="105,186 205,186 105,86" className="fill-cyan-500/25 stroke-cyan-600" strokeWidth="2" />
        <text x="132" y="172" className="fill-cyan-800 dark:fill-cyan-200 text-[10px] font-mono font-bold">45°</text>
        <polygon points="165,126 245,186 188,68" className="fill-emerald-500/25 stroke-emerald-600" strokeWidth="2" />
        <text x="200" y="142" className="fill-emerald-800 dark:fill-emerald-200 text-[10px] font-mono font-bold">30°</text>
        <line x1="165" y1="126" x2="215" y2="62" stroke="currentColor" strokeWidth="2.5" className="text-rose-600" markerEnd={`url(#${m.arrowRose})`} />
        <text x="224" y="68" className="fill-rose-700 dark:fill-rose-300 text-[11px] font-mono font-bold">45°+30° = 75° (及 15°)</text>
      </LeftCard>
      <RightCard title="鉛筆軟硬等級與運筆標準手勢" subtitle="9H (最硬最淡) ← HB → F → 6B (最軟最黑)">
        <StepRow y={54} num="2H" label="底稿輕線／輔助投射線" detail="使用 H ~ 2H 硬芯，輕畫不留壓痕好擦拭" tone="blue" />
        <StepRow y={112} num="HB" label="完稿加深實線與工程字" detail="使用 HB ~ B 搭配等速旋轉筆桿保持線寬均勻" tone="emerald" />
        <StepRow y={170} num="向" label="標準運筆方向（嚴禁逆推刺破紙!）" detail="水平由左向右、垂直由下向上，筆桿順向傾約 60°" tone="amber" />
        <text x="16" y="246" className="fill-slate-600 dark:fill-slate-300 text-[10px] font-mono">
          ★ 注意：比例尺僅供量度尺寸，嚴禁當直尺畫線磨損刻度！
        </text>
      </RightCard>
    </g>
  ),

  'drafting/lines-and-lettering': () => (
    <g>
      <LeftCard title="CNS 建築製圖線條種類、粗細階層與重疊優先序" subtitle="粗線 : 中線 : 細線 ≈ 4 : 2 : 1（常見 0.5 : 0.25~0.35 : 0.13~0.18 mm）">
        {[
          { y: 68, name: '1. 粗實線（剖切牆柱／可見輪廓）', dash: 'none', w: 4, cls: 'text-slate-900 dark:text-white' },
          { y: 108, name: '2. 虛線（不可見隱藏輪廓線）', dash: '10 4', w: 2.4, cls: 'text-blue-600 dark:text-blue-400' },
          { y: 148, name: '3. 割面線（兩端粗短線＋中細鏈線）', dash: '16 4 3 4', w: 2.8, cls: 'text-rose-600 dark:text-rose-400' },
          { y: 188, name: '4. 中心線／柱心軸線（細單點鏈線）', dash: '18 4 3 4', w: 1.4, cls: 'text-emerald-600 dark:text-emerald-400' },
          { y: 228, name: '5. 尺寸線／引出線／45°剖面線（細實線）', dash: 'none', w: 1.1, cls: 'text-amber-600 dark:text-amber-400' },
        ].map((ln, idx) => (
          <g key={idx}>
            <text x="20" y={ln.y - 8} className="fill-slate-700 dark:fill-slate-200 text-[10px] font-bold">{ln.name}</text>
            <line x1="20" y1={ln.y + 4} x2="382" y2={ln.y + 4} stroke="currentColor" strokeWidth={ln.w} strokeDasharray={ln.dash} className={ln.cls} />
          </g>
        ))}
        <text x="204" y="266" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-300 text-[10px] font-mono font-bold">
          重疊優先序：粗實線 ＞ 虛線 ＞ 割面線 ＞ 中心線 ＞ 折斷線 ＞ 尺寸線
        </text>
      </LeftCard>
      <RightCard title="CNS 3895 工程字法三大框格" subtitle="筆畫粗細均一、橫平豎直、布白勻稱">
        <StepRow y={56} num="方" label="方形字（寬 = 高，1 : 1）" detail="常見於大標題與傳統正方端莊標示" tone="indigo" />
        <StepRow y={114} num="長" label="長形字（寬 : 高 = 3 : 4）" detail="建築施工圖說明最常用！省橫向空間又易讀" tone="emerald" />
        <StepRow y={172} num="寬" label="寬形字（寬 : 高 = 4 : 3）＆ 斜體75°" detail="拉丁字母與數字可採直式或向右傾 75° 斜式" tone="blue" />
      </RightCard>
    </g>
  ),

  'drafting/scale': () => (
    <g>
      <LeftCard title="建築三稜比例尺 6 組刻度與圖面實長換算" subtitle="比例尺 S = 圖上長度 d / 實物真長 D （1/50 大於 1/200！）">
        {/* Scale ruler visual */}
        <rect x="36" y="78" width="336" height="52" rx="6" className="fill-amber-100/80 dark:fill-slate-800 stroke-amber-700" strokeWidth="2" />
        {[0, 1, 2, 3, 4, 5, 6].map((t) => (
          <g key={t} transform={`translate(${56 + t * 48}, 78)`}>
            <line x1="0" y1="0" x2="0" y2="18" stroke="currentColor" strokeWidth="2" className="text-slate-800 dark:text-slate-200" />
            <text x="0" y="34" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 text-[10px] font-mono font-bold">{t}m</text>
          </g>
        ))}
        <text x="204" y="124" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 text-[10px] font-mono font-bold">1 : 100 刻度（圖上 1 cm = 現場 100 cm = 1 m）</text>
        {/* Dimension trap highlight */}
        <line x1="56" y1="176" x2="248" y2="176" stroke="currentColor" strokeWidth="2" className="text-indigo-600" />
        <line x1="56" y1="164" x2="56" y2="188" stroke="currentColor" strokeWidth="1.5" className="text-indigo-600" />
        <line x1="248" y1="164" x2="248" y2="188" stroke="currentColor" strokeWidth="1.5" className="text-indigo-600" />
        <text x="152" y="168" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-200 text-[12px] font-mono font-bold">400 (標註永遠填「實物真長」!)</text>
        <text x="204" y="232" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 text-[10.5px] font-mono font-bold">
          面積縮放是「平方比」！比例 1:100 時，圖上面積 = 實地面積 × (1/100)² = 1/10,000
        </text>
      </LeftCard>
      <RightCard title="各類建築圖標準比例尺選用" subtitle="越細部的構造大樣，分母越小（大比例尺）">
        <StepRow y={54} num="配" label="基地配置圖：1/200 ~ 1/600" detail="表達地界、退縮、道路、指北針與整體棟距" tone="blue" />
        <StepRow y={112} num="平" label="平／立／剖面圖：1/100 或 1/50" detail="高工製圖實習與丙級檢定最核心標準比例" tone="emerald" />
        <StepRow y={170} num="詳" label="樓梯浴廁／簷口大樣圖：1/30 ~ 1/5" detail="清楚交代粉刷防水層、止水墩與收頭細部" tone="amber" />
        <text x="16" y="246" className="fill-slate-600 dark:fill-slate-300 text-[10px] font-mono">
          ★ 圖上尺寸數字與所採比例尺大小完全無關！
        </text>
      </RightCard>
    </g>
  ),

  'drafting/geometric-constructions': () => (
    <g>
      <LeftCard title="兩圓弧光滑切線連接（外切 R₁+R vs 內切 |R₁-R|）" subtitle="必先求連接圓心 O 與精確切點 T，絕不可徒手亂湊！">
        {/* Given circle O1 + tangent fillet arc O */}
        <circle cx="118" cy="148" r="52" className="fill-blue-500/12 stroke-blue-600" strokeWidth="2" />
        <circle cx="118" cy="148" r="3.5" className="fill-blue-600" />
        <text x="118" y="164" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[10.5px] font-mono font-bold">O₁(R₁)</text>
        {/* Auxiliary concentric arc R1 + R */}
        <path d="M 165 70 A 88 88 0 0 1 206 160" fill="none" stroke="currentColor" strokeDasharray="4 3" className="text-amber-600" strokeWidth="1.6" />
        {/* Fillet center O & line L offset R */}
        <line x1="160" y1="215" x2="355" y2="215" stroke="currentColor" strokeWidth="2.5" className="text-slate-700 dark:text-slate-200" />
        <line x1="175" y1="179" x2="355" y2="179" stroke="currentColor" strokeDasharray="4 3" className="text-amber-600" />
        <circle cx="202" cy="179" r="4" className="fill-rose-600" />
        <text x="212" y="172" className="fill-rose-700 dark:fill-rose-300 text-[10.5px] font-mono font-bold">圓心 O</text>
        {/* Smooth tangent arc */}
        <path d="M 166 168 A 36 36 0 0 0 202 215" fill="none" stroke="currentColor" strokeWidth="3.2" className="text-rose-600" />
        <line x1="118" y1="148" x2="202" y2="179" stroke="currentColor" strokeDasharray="3 2" className="text-emerald-600" />
        <text x="275" y="112" className="fill-amber-700 dark:fill-amber-300 text-[10.5px] font-mono font-bold">外切圓心距 = R₁ + R</text>
        <text x="204" y="256" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-300 text-[10.5px] font-mono font-bold">
          連心線 O₁O 與原圓交點即為精確切點 T₁；垂足即切點 T₂！
        </text>
      </LeftCard>
      <RightCard title="尺規幾何作圖高頻必考法則" subtitle="圓規與三角板平行線法的經典應用">
        <StepRow y={54} num="6" label="圓內接正六邊形作法" detail="邊長恰好等於外接圓半徑 R，圓規直接截 6 段!" tone="emerald" />
        <StepRow y={112} num="等" label="任意等分線段 AB（平行線截線法）" detail="過 A 引任意斜線量 n 等分，連末點平移三角板" tone="blue" />
        <StepRow y={170} num="橢" label="四心近似橢圓法（等角圓專用）" detail="60°菱形對角鈍角頂點向對邊中點連線求四圓心" tone="indigo" />
      </RightCard>
    </g>
  ),

  'drafting/orthographic-projection': () => (
    <g>
      <LeftCard title="CNS 第三角法透明玻璃箱展開（俯視在上、前視左下、右視右下）" subtitle="人 → 投影面 → 物 ； 長對正、高平齊、寬相等！">
        {/* Top View */}
        <g transform="translate(68, 48)">
          <rect width="105" height="68" rx="3" className="fill-indigo-500/12 stroke-indigo-600" strokeWidth="2" />
          <line x1="62" y1="0" x2="62" y2="68" stroke="currentColor" strokeWidth="1.8" className="text-indigo-600" />
          <text x="52" y="84" textAnchor="middle" className="fill-indigo-700 dark:fill-indigo-300 text-[10px] font-mono font-bold">俯視圖 (寬×深)</text>
        </g>
        {/* Front View */}
        <g transform="translate(68, 148)">
          <rect width="105" height="76" rx="3" className="fill-blue-500/15 stroke-blue-600" strokeWidth="2.4" />
          <polyline points="0,0 62,0 62,38 105,38 105,76 0,76 Z" className="fill-blue-500/20 stroke-blue-700" strokeWidth="2.2" />
          <text x="52" y="92" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[10px] font-mono font-bold">前視圖 (寬×高)</text>
        </g>
        {/* Right View */}
        <g transform="translate(226, 148)">
          <rect width="68" height="76" rx="3" className="fill-emerald-500/12 stroke-emerald-600" strokeWidth="2" />
          <line x1="0" y1="38" x2="68" y2="38" stroke="currentColor" strokeWidth="1.8" className="text-emerald-600" />
          <text x="34" y="92" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[10px] font-mono font-bold">右側視 (深×高)</text>
        </g>
        {/* 45 deg miter line */}
        <line x1="212" y1="128" x2="306" y2="34" stroke="currentColor" strokeWidth="2" className="text-amber-600" />
        <line x1="173" y1="48" x2="292" y2="48" stroke="currentColor" strokeDasharray="3 2" className="text-amber-500" />
        <line x1="292" y1="48" x2="292" y2="148" stroke="currentColor" strokeDasharray="3 2" className="text-amber-500" />
        <line x1="173" y1="148" x2="226" y2="148" stroke="currentColor" strokeDasharray="3 2" className="text-slate-400" />
        <line x1="130" y1="116" x2="130" y2="148" stroke="currentColor" strokeDasharray="3 2" className="text-slate-400" />
        <text x="315" y="76" className="fill-amber-700 dark:fill-amber-300 text-[10px] font-mono font-bold">45° 轉折線</text>
      </LeftCard>
      <RightCard title="第一角法 vs 第三角法符號秒辨" subtitle="台灣 CNS 工程製圖標準採「第三角法」">
        {/* 3rd angle cone symbol */}
        <g transform="translate(36, 66)">
          <circle cx="24" cy="20" r="9" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-emerald-600" />
          <circle cx="24" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-emerald-600" />
          <polygon points="62,11 62,29 96,38 96,2" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-emerald-600" />
          <text x="112" y="24" className="fill-emerald-700 dark:fill-emerald-300 text-[10.5px] font-bold">第三角（圓在左小端側）</text>
        </g>
        <StepRow y={118} num="單" label="單斜面：1 視圖積聚成斜線" detail="另 2 視圖面積縮小變形（需單輔助視圖求實形）" tone="blue" />
        <StepRow y={176} num="複" label="複斜面：3 視圖皆為縮小多邊形" detail="對三主投影面皆傾斜，無任何視圖積聚成直線!" tone="rose" />
      </RightCard>
    </g>
  ),

  'drafting/auxiliary-views': () => (
    <g>
      <LeftCard title="單斜面輔助視圖（平行斜面設參考線 RP 求真實形狀）" subtitle="投射線必垂直於斜面邊視線 ； 由相關視圖量取深度 d 移轉！">
        {/* Front view inclined block */}
        <polygon points="65,215 195,215 195,180 115,120 65,120" className="fill-blue-500/18 stroke-blue-600" strokeWidth="2.2" />
        <line x1="115" y1="120" x2="195" y2="180" stroke="currentColor" strokeWidth="3" className="text-rose-600" />
        <text x="128" y="234" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[10px] font-mono font-bold">前視圖（斜面呈邊視斜線）</text>
        {/* Parallel reference line & Auxiliary true shape */}
        <line x1="145" y1="80" x2="245" y2="155" stroke="currentColor" strokeWidth="1.8" strokeDasharray="6 3" className="text-amber-600" />
        <line x1="115" y1="120" x2="175" y2="40" stroke="currentColor" strokeDasharray="3 2" className="text-slate-400" />
        <line x1="195" y1="180" x2="255" y2="100" stroke="currentColor" strokeDasharray="3 2" className="text-slate-400" />
        <polygon points="163,56 243,116 267,84 187,24" className="fill-emerald-500/22 stroke-emerald-600" strokeWidth="2.2" />
        <circle cx="215" cy="70" r="14" className="fill-white/70 dark:fill-slate-900 stroke-emerald-700" strokeWidth="1.8" />
        <text x="292" y="72" className="fill-emerald-700 dark:fill-emerald-300 text-[10.5px] font-mono font-bold">← 斜面真實形狀</text>
        <text x="292" y="88" className="fill-emerald-700 dark:fill-emerald-300 text-[9.5px] font-mono">(圓孔呈正圓不變橢圓!)</text>
      </LeftCard>
      <RightCard title="輔助視圖作圖三步防呆 SOP" subtitle="斜屋頂天窗與斜交翼牆必備圖學">
        <StepRow y={54} num="1" label="找斜面「積聚成一條斜線」的視圖" detail="平行於該斜線畫折疊基準線 RP₁" tone="amber" />
        <StepRow y={112} num="2" label="過斜線兩端引 90° 垂直投射線" detail="三角板緊貼斜線滑移，確保嚴格正交" tone="blue" />
        <StepRow y={170} num="3" label="用分規回另一視圖量深度 d 截取" detail="常繪「局部輔助視圖」省去扭曲無用部分" tone="emerald" />
      </RightCard>
    </g>
  ),

  'drafting/sectional-views': () => (
    <g>
      <LeftCard title="對稱構件「半剖視圖」＆ 45° 剖面線規範" subtitle="左半畫外觀（省略虛線）、右半切掉 1/4 畫內部構造（以中心線分界!）">
        {/* Half-section cylinder/footing */}
        <g transform="translate(65, 62)">
          {/* Left half: exterior */}
          <rect x="30" y="20" width="90" height="135" className="fill-slate-200/70 dark:fill-slate-800 stroke-slate-700 dark:stroke-slate-200" strokeWidth="2.2" />
          <rect x="0" y="120" width="120" height="35" className="fill-slate-200/70 dark:fill-slate-800 stroke-slate-700 dark:stroke-slate-200" strokeWidth="2.2" />
          {/* Right half: sectioned */}
          <polygon points="120,20 165,20 165,120 240,120 240,155 120,155" className="fill-white dark:fill-slate-900" />
          <polygon points="165,20 210,20 210,120 240,120 240,155 165,155" className="fill-rose-500/18 stroke-rose-700 dark:stroke-rose-400" strokeWidth="2.2" />
          {/* 45 deg hatch lines on cut solid */}
          {[0, 1, 2, 3, 4, 5].map((k) => (
            <line key={k} x1={168} y1={35 + k * 20} x2={208} y2={15 + k * 20} stroke="currentColor" strokeWidth="1.2" className="text-rose-600" />
          ))}
          {/* Centerline */}
          <line x1="120" y1="4" x2="120" y2="172" stroke="currentColor" strokeWidth="1.6" strokeDasharray="16 4 3 4" className="text-emerald-600" />
          <text x="65" y="182" textAnchor="middle" className="fill-slate-600 dark:fill-slate-300 text-[10px] font-bold">左半：外部立面</text>
          <text x="185" y="182" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 text-[10px] font-bold">右半：內部剖面</text>
        </g>
        <text x="204" y="266" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-300 text-[10.5px] font-mono font-bold">
          注意：半剖面中間分界線永遠是「中心線（細鏈線）」，絕非粗實線！
        </text>
      </LeftCard>
      <RightCard title="剖視圖種類與「縱剖不畫剖面線」例外" subtitle="統測製圖年年必考陷阱！">
        <StepRow y={54} num="全" label="全剖／轉折剖面（階梯割面線）" detail="割面線可直角轉折穿過多處門窗孔洞，剖視不畫轉折線!" tone="blue" />
        <StepRow y={112} num="禁" label="縱向剖切「不畫剖面線」構件" detail="肋板(Rib)、輪輻、實心軸、螺栓螺帽、鉚釘、銷" tone="rose" />
        <StepRow y={170} num="反" label="相鄰兩零件剖面線區別" detail="45° 方向相反或間距疏密不同，以利分辨接合界面" tone="emerald" />
      </RightCard>
    </g>
  ),

  'drafting/dimensioning-and-symbols': () => (
    <g>
      <LeftCard title="建築平面圖外圍「三道尺寸線」標準層級" subtitle="由內而外：第1道細部開口 → 第2道柱心跨距 → 第3道建築總長">
        {/* Wall with window + 2 columns */}
        <rect x="65" y="182" width="24" height="24" className="fill-slate-800 dark:fill-slate-200" />
        <rect x="305" y="182" width="24" height="24" className="fill-slate-800 dark:fill-slate-200" />
        <rect x="89" y="188" width="66" height="12" className="fill-slate-400" />
        <rect x="155" y="191" width="84" height="6" className="fill-cyan-400/50 stroke-cyan-600" />
        <rect x="239" y="188" width="66" height="12" className="fill-slate-400" />
        {/* 3 tiers of dimensions */}
        {/* Tier 1: openings */}
        <line x1="77" y1="148" x2="317" y2="148" stroke="currentColor" className="text-blue-600" />
        <text x="116" y="143" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[9.5px] font-mono font-bold">150</text>
        <text x="197" y="143" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[9.5px] font-mono font-bold">180(窗)</text>
        <text x="278" y="143" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[9.5px] font-mono font-bold">150</text>
        {/* Tier 2: grid span */}
        <line x1="77" y1="112" x2="317" y2="112" stroke="currentColor" className="text-emerald-600" />
        <text x="197" y="106" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[10.5px] font-mono font-bold">480 (柱心跨距)</text>
        {/* Tier 3: overall */}
        <line x1="65" y1="76" x2="329" y2="76" stroke="currentColor" className="text-rose-600" />
        <text x="197" y="70" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 text-[11px] font-mono font-bold">530 (外皮總寬)</text>
        {/* Grid bubbles */}
        <circle cx="77" cy="238" r="11" fill="none" stroke="currentColor" className="text-amber-600" strokeWidth="1.5" />
        <text x="77" y="242" textAnchor="middle" className="fill-amber-700 text-[10px] font-mono font-bold">1</text>
        <circle cx="317" cy="238" r="11" fill="none" stroke="currentColor" className="text-amber-600" strokeWidth="1.5" />
        <text x="317" y="242" textAnchor="middle" className="fill-amber-700 text-[10px] font-mono font-bold">2</text>
      </LeftCard>
      <RightCard title="CNS 尺寸符號前綴與標註鐵律" subtitle="尺寸線絕不可互相交叉（小尺寸在內、大尺寸在外）">
        <StepRow y={54} num="∅/R" label="直徑 ∅（全圓或>半圓） vs 半徑 R" detail="半圓以下圓弧標 R；球面加 S∅ / SR；正方形 □" tone="blue" />
        <StepRow y={112} num="坡" label="斜度（直角三角形） vs 錐度（等腰）" detail="符號尖端方向必須與斜坡／圓錐變細方向一致!" tone="amber" />
        <StepRow y={170} num="起" label="建築尺寸起止符號" detail="常用 45° 粗短斜線（Tick）、實心小圓點或箭頭" tone="emerald" />
      </RightCard>
    </g>
  ),

  'drafting/architectural-plan': (m) => (
    <g>
      <LeftCard title="建築一層平面圖（距地 1.2~1.5m 水平剖切）" subtitle="塗黑 RC 柱 ＋ 粗線剖切牆 ＋ 90° 門扇開啟弧 ＋ 樓梯上行箭頭 UP">
        {/* Room Plan Box */}
        <rect x="58" y="68" width="260" height="162" fill="none" stroke="currentColor" strokeWidth="5" className="text-slate-700 dark:text-slate-200" />
        {/* 4 RC Corner Columns */}
        {[[52,62],[310,62],[52,222],[310,222]].map(([x, y], i) => (
          <rect key={i} x={x} y={y} width="14" height="14" className="fill-indigo-700 dark:fill-indigo-400" />
        ))}
        {/* Door swing on bottom wall */}
        <rect x="108" y="224" width="44" height="12" className="fill-white dark:fill-slate-900" />
        <line x1="108" y1="230" x2="108" y2="186" stroke="currentColor" strokeWidth="2.2" className="text-rose-600" />
        <path d="M 108 186 A 44 44 0 0 1 152 230" fill="none" stroke="currentColor" strokeDasharray="3 2" className="text-rose-500" />
        <text x="132" y="205" className="fill-rose-700 dark:fill-rose-300 text-[9.5px] font-mono font-bold">D1</text>
        {/* Window on top wall */}
        <rect x="148" y="64" width="80" height="8" className="fill-cyan-200 dark:fill-cyan-900 stroke-cyan-600" strokeWidth="1.2" />
        <text x="188" y="58" textAnchor="middle" className="fill-cyan-700 dark:fill-cyan-300 text-[9.5px] font-mono font-bold">W1 (雙線窗)</text>
        {/* Staircase with UP arrow & break line */}
        <g transform="translate(216, 96)">
          <rect width="78" height="46" fill="none" stroke="currentColor" className="text-emerald-600" strokeWidth="1.5" />
          {[13, 26, 39, 52, 65].map((sx) => (
            <line key={sx} x1={sx} y1="0" x2={sx} y2="46" stroke="currentColor" className="text-emerald-600/80" />
          ))}
          <line x1="8" y1="23" x2="68" y2="23" stroke="currentColor" strokeWidth="2" className="text-emerald-700" markerEnd={`url(#${m.arrowEmerald})`} />
          <text x="39" y="60" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[9.5px] font-mono font-bold">UP 樓梯上行</text>
        </g>
        {/* North Arrow */}
        <circle cx="358" cy="96" r="18" fill="none" stroke="currentColor" className="text-amber-600" strokeWidth="1.5" />
        <polygon points="358,78 352,102 358,96 364,102" className="fill-amber-600" />
        <text x="358" y="72" textAnchor="middle" className="fill-amber-700 dark:fill-amber-300 text-[10px] font-mono font-bold">N</text>
      </LeftCard>
      <RightCard title="平面圖必備識圖要點" subtitle="高於剖切面 1.5m 之雨遮／挑空用「虛線」繪製">
        <StepRow y={54} num="柱" label="橫軸編 1,2,3… ； 縱軸編 A,B,C…" detail="避開英文字母 I 與 O，以免跟數字 1、0 混淆!" tone="indigo" />
        <StepRow y={112} num="門" label="門代號 D（圓或六角框）、窗代號 W" detail="單開門畫 1/4 圓弧標示鉸鏈側與逃生開啟方向" tone="rose" />
        <StepRow y={170} num="梯" label="1F 樓梯在約第 7~8 級畫 45° 折斷線" detail="箭頭永遠由「本層踏步起點」指向「往上走方向(UP)」" tone="emerald" />
      </RightCard>
    </g>
  ),

  'drafting/architectural-elevation': () => (
    <g>
      <LeftCard title="建築正立面圖（超粗地盤線 GL ＋ 樓層高程線 ＋ 外牆材質）" subtitle="立面命名依「觀察者面對該牆面之座向」（南向立面 = 南側外牆）">
        {/* Super thick GL */}
        <line x1="38" y1="236" x2="350" y2="236" stroke="currentColor" strokeWidth="4.5" className="text-slate-800 dark:text-slate-100" />
        {/* Building facade */}
        <rect x="85" y="76" width="185" height="160" className="fill-slate-100/80 dark:fill-slate-800/80 stroke-slate-700 dark:stroke-slate-200" strokeWidth="2.4" />
        {/* Parapet & 2F / 1F windows */}
        <rect x="108" y="108" width="52" height="42" className="fill-cyan-500/20 stroke-cyan-600" strokeWidth="1.6" />
        <line x1="114" y1="124" x2="128" y2="112" stroke="currentColor" className="text-cyan-600" />
        <rect x="195" y="108" width="52" height="42" className="fill-cyan-500/20 stroke-cyan-600" strokeWidth="1.6" />
        <rect x="108" y="176" width="52" height="60" className="fill-amber-500/20 stroke-amber-700" strokeWidth="1.6" />
        {/* Hinged window dashed V symbol */}
        <polyline points="195,108 247,129 195,150" fill="none" stroke="currentColor" strokeDasharray="3 2" className="text-rose-500" />
        {/* Level datum markers on right */}
        {[
          { y: 76, lb: 'PH/RFL +780' },
          { y: 158, lb: '2FL +390' },
          { y: 236, lb: 'GL ±0' },
        ].map((lv, idx) => (
          <g key={idx}>
            <line x1="270" y1={lv.y} x2="325" y2={lv.y} stroke="currentColor" strokeDasharray="4 2" className="text-indigo-500" />
            <polygon points={`325,${lv.y} 317,${lv.y - 8} 333,${lv.y - 8}`} className="fill-indigo-600" />
            <text x="336" y={lv.y - 2} className="fill-indigo-800 dark:fill-indigo-200 text-[9.5px] font-mono font-bold">{lv.lb}</text>
          </g>
        ))}
      </LeftCard>
      <RightCard title="立面圖線重層次與門窗開啟虛線" subtitle="由平面圖直接拉垂直建構線 XLINE 對齊！">
        <StepRow y={54} num="GL" label="地盤線（Ground Line）全圖最粗" detail="穩固托起整棟建築視覺重心，地下基礎不畫實線" tone="indigo" />
        <StepRow y={112} num="窗" label="推射窗／外開窗虛線交點即「鉸鏈邊」" detail="虛線 V 字尖端指向上方代表上懸外推射窗!" tone="rose" />
        <StepRow y={170} num="材" label="外牆磁磚石材採「局部繪製示意」" detail="避免整面塗黑，搭配引出線文字註明材質規格" tone="emerald" />
      </RightCard>
    </g>
  ),

  'drafting/civil-architectural-drawings': () => (
    <g>
      <LeftCard title="全套建築與結構施工圖集編碼（A / S / M / E / P / F）" subtitle="建築圖看空間裝修、結構配筋圖看梁柱鋼筋號數與間距！">
        {[
          { x: 24, y: 58, code: 'A 圖 (Arch)', desc: '建築平立剖／門窗表／大樣', cls: 'fill-indigo-500/15 stroke-indigo-600' },
          { x: 214, y: 58, code: 'S 圖 (Struct)', desc: '基礎梁柱版結構配筋圖', cls: 'fill-rose-500/15 stroke-rose-600' },
          { x: 24, y: 142, code: 'E / T 圖 (Elec)', desc: '強電照明插座／弱電資訊圖', cls: 'fill-amber-500/15 stroke-amber-600' },
          { x: 214, y: 142, code: 'P / F / M 圖', desc: '給排水衛生／消防／空調風管', cls: 'fill-emerald-500/15 stroke-emerald-600' },
        ].map((g, idx) => (
          <g key={idx} transform={`translate(${g.x}, ${g.y})`}>
            <rect width="174" height="68" rx="10" className={g.cls} strokeWidth="1.8" />
            <text x="14" y="28" className="fill-slate-900 dark:fill-white text-[12px] font-mono font-bold">{g.code}</text>
            <text x="14" y="50" className="fill-slate-600 dark:fill-slate-300 text-[10px]">{g.desc}</text>
          </g>
        ))}
        <text x="204" y="248" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-300 text-[10.5px] font-mono font-bold">
          結構配筋識讀：`4-#7` = 4 支 7 號主筋 ； `#3@15` = 3 號箍筋每 15cm 一支！
        </text>
      </LeftCard>
      <RightCard title="CNS 建築材料標準剖面圖例" subtitle="看圖例一秒辨識牆板地面構造材質">
        <StepRow y={54} num="RC" label="鋼筋混凝土 vs 無筋混凝土(PC)" detail="45°雙斜線＋碎石三角點（加鋼筋線為 RC）" tone="rose" />
        <StepRow y={112} num="磚" label="紅磚砌體 vs 石材" detail="紅磚為 45° 等距平行細實線；木材橫剖畫年輪紋" tone="amber" />
        <StepRow y={170} num="溫" label="隔熱保溫棉／防水層" detail="保溫棉畫連續 S 型波浪捲曲紋；級配卵石畫小圓圈" tone="emerald" />
      </RightCard>
    </g>
  ),

  'drafting/perspective-projection': () => (
    <g>
      <LeftCard title="兩點透視（成角透視）空間構成：視平線 HL 與左右雙滅點" subtitle="垂直稜線保持鉛直平行；左右兩向水平線分別收斂於 VPL 與 VPR！">
        {/* Horizon line HL & Ground line GL */}
        <line x1="28" y1="142" x2="380" y2="142" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 3" className="text-amber-600" />
        <circle cx="48" cy="142" r="5" className="fill-rose-600" />
        <circle cx="360" cy="142" r="5" className="fill-rose-600" />
        <text x="48" y="132" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 text-[10px] font-mono font-bold">VPL 左滅點</text>
        <text x="360" y="132" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 text-[10px] font-mono font-bold">VPR 右滅點</text>
        <text x="204" y="136" textAnchor="middle" className="fill-amber-700 dark:fill-amber-300 text-[9.5px] font-mono font-bold">視平線 HL (人眼高)</text>
        {/* 2-point perspective building volume */}
        <polygon points="185,72 185,222 102,182 102,102" className="fill-indigo-500/22 stroke-indigo-600" strokeWidth="2.2" />
        <polygon points="185,72 185,222 288,186 288,104" className="fill-blue-500/18 stroke-blue-600" strokeWidth="2.2" />
        {/* Vanishing rays */}
        <line x1="102" y1="102" x2="48" y2="142" stroke="currentColor" strokeDasharray="3 2" className="text-slate-400" />
        <line x1="102" y1="182" x2="48" y2="142" stroke="currentColor" strokeDasharray="3 2" className="text-slate-400" />
        <line x1="288" y1="104" x2="360" y2="142" stroke="currentColor" strokeDasharray="3 2" className="text-slate-400" />
        <line x1="288" y1="186" x2="360" y2="142" stroke="currentColor" strokeDasharray="3 2" className="text-slate-400" />
        <line x1="185" y1="72" x2="185" y2="222" stroke="currentColor" strokeWidth="3" className="text-emerald-600" />
        <text x="185" y="248" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[10px] font-mono font-bold">貼緊畫面 PP 之稜線＝唯一真高線!</text>
      </LeftCard>
      <RightCard title="1 點／2 點／3 點透視與視點高度" subtitle="最佳視角圓錐約 30°~60° 防外圍扭曲變形">
        <StepRow y={54} num="1點" label="一點（平行）透視：室內空間首選" detail="正面平行畫面 PP，僅深度線匯聚於單一主滅點" tone="blue" />
        <StepRow y={112} num="2點" label="兩點（成角）透視：建築外觀首選" detail="建築轉角面對觀者，立體感最強且鉛垂線不歪斜" tone="indigo" />
        <StepRow y={170} num="高" label="鳥瞰圖 vs 人視圖 vs 蟲視仰視圖" detail="HL 高於屋頂為鳥瞰；HL 約 1.5~1.7m 為真實人視" tone="amber" />
      </RightCard>
    </g>
  ),

  'drafting/building-codes-far': () => (
    <g>
      <LeftCard title="建蔽率（BCR 管胖瘦留空地） vs 容積率（FAR 管總量疊樓高）" subtitle="例：基地 500 m²，建蔽率 50%（單層≤250 m²）、容積率 200%（總面積≤1000 m² → 可蓋4層）">
        {/* Site lot 500m2 */}
        <polygon points="48,212 188,242 252,196 112,166" className="fill-emerald-500/20 stroke-emerald-600" strokeWidth="2" />
        <text x="115" y="248" className="fill-emerald-700 dark:fill-emerald-300 text-[10px] font-mono font-bold">基地面積 500m² (法定空地 50%)</text>
        {/* Stacked 4 floors 250m2 each */}
        {[0, 1, 2, 3].map((fl) => (
          <g key={fl} transform={`translate(115, ${162 - fl * 26})`}>
            <polygon points="0,24 78,40 112,16 34,0" className="fill-indigo-500/28 stroke-indigo-700 dark:stroke-indigo-300" strokeWidth="1.6" />
          </g>
        ))}
        <text x="275" y="102" className="fill-indigo-800 dark:fill-indigo-200 text-[11px] font-mono font-bold">← 4層 × 250m²</text>
        <text x="275" y="120" className="fill-rose-700 dark:fill-rose-300 text-[10.5px] font-mono font-bold">= 總容積 1000m²</text>
        {/* Setback shadow slope line */}
        <line x1="48" y1="212" x2="149" y2="62" stroke="currentColor" strokeWidth="1.8" strokeDasharray="4 3" className="text-amber-600" />
        <text x="64" y="114" className="fill-amber-700 dark:fill-amber-300 text-[9.5px] font-mono font-bold">3.6:1 削線采光</text>
      </LeftCard>
      <RightCard title="建築技術規則必考法規紅線" subtitle="建照請照圖審查核心指標">
        <StepRow y={54} num="面" label="建蔽率 ＆ 容積率公式" detail="建蔽=建築面積/基地 ； 容積=容積總樓地板/基地" tone="indigo" />
        <StepRow y={112} num="火" label="防火區劃（原則每 1500 m² 區劃）" detail="以 1 小時以上防火牆／甲種防火門窗阻絕濃煙延燒" tone="rose" />
        <StepRow y={170} num="梯" label="直通樓梯步行距離與雙向逃生" detail="居室至直通樓梯距離受限（如非防火構造≤30m、防火≤50m）" tone="emerald" />
      </RightCard>
    </g>
  ),

  'drafting/cad-basics': (m) => (
    <g>
      <LeftCard title="AutoCAD 三種坐標輸入 ＆ 模型空間 → 配置視埠出圖流" subtitle="相對直角 `@ΔX,ΔY` ； 相對極坐標 `@長度&lt;逆時針角度`">
        {/* Coordinate demo */}
        <g transform="translate(36, 62)">
          <rect width="166" height="156" rx="10" className="fill-slate-900 text-cyan-400 stroke-slate-700" strokeWidth="1.5" />
          <line x1="28" y1="126" x2="136" y2="56" stroke="currentColor" strokeWidth="2.5" className="text-cyan-400" markerEnd={`url(#${m.arrowBlue})`} />
          <circle cx="28" cy="126" r="4" className="fill-amber-400" />
          <text x="20" y="144" className="fill-amber-300 text-[9.5px] font-mono">前一點 P₁</text>
          <text x="45" y="42" className="fill-emerald-300 text-[10px] font-mono font-bold">指令: @400&lt;30</text>
          <text x="45" y="60" className="fill-slate-300 text-[9px] font-mono">或 @346.4,200</text>
        </g>
        {/* Model space 1:1 -> Layout Viewport 1:100 */}
        <g transform="translate(224, 62)">
          <rect width="162" height="66" rx="8" className="fill-blue-500/15 stroke-blue-600" strokeWidth="1.6" />
          <text x="81" y="28" textAnchor="middle" className="fill-blue-800 dark:fill-blue-200 text-[10.5px] font-bold">模型空間 Model (永遠 1:1)</text>
          <text x="81" y="48" textAnchor="middle" className="fill-slate-600 dark:fill-slate-300 text-[9.5px] font-mono">真實公分/公釐原寸繪製</text>
          <line x1="81" y1="68" x2="81" y2="88" stroke="currentColor" strokeWidth="2" className="text-indigo-600" markerEnd={`url(#${m.arrowBlue})`} />
          <rect y="90" width="162" height="66" rx="8" className="fill-emerald-500/15 stroke-emerald-600" strokeWidth="1.6" />
          <text x="81" y="116" textAnchor="middle" className="fill-emerald-800 dark:fill-emerald-200 text-[10.5px] font-bold">配置空間 Layout 視埠</text>
          <text x="81" y="136" textAnchor="middle" className="fill-slate-600 dark:fill-slate-300 text-[9.5px] font-mono">套 A1/A3 圖框設比例 1:100</text>
        </g>
        <text x="204" y="254" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-300 text-[10.5px] font-mono font-bold">
          物件顏色／線型／線寬一律設「ByLayer（隨層）」，搭配 CTB 出圖筆寬表！
        </text>
      </LeftCard>
      <RightCard title="高頻快捷鍵與功能鍵 F3 / F8" subtitle="左手鍵盤指令、右手滑鼠精準鎖點">
        <StepRow y={54} num="F鍵" label="F3 物件鎖點(OSNAP) ／ F8 正交" detail="端點 END、中點 MID、交點 INT、垂足 PER" tone="blue" />
        <StepRow y={112} num="修" label="O 偏移、TR 修剪、EX 延伸、F 圓角" detail="設半徑 R=0 的 FILLET (F) 可一秒自動接齊轉角牆!" tone="emerald" />
        <StepRow y={170} num="塊" label="BLOCK 圖塊 vs XREF 外部參考" detail="門窗家具做圖塊；建築底圖用 XREF 供結構機電套圖" tone="amber" />
      </RightCard>
    </g>
  ),

  'drafting/bim-concepts': () => (
    <g>
      <LeftCard title="BIM 建築資訊模型整合與 MEP 管線碰撞檢核 (Clash Detection)" subtitle="單一參數化資料庫連動平、立、剖、3D 與數量明細表！">
        {/* 3 overlapping parametric layers -> unified BIM */}
        <rect x="44" y="72" width="115" height="44" rx="8" className="fill-indigo-500/20 stroke-indigo-600" strokeWidth="1.6" />
        <text x="101" y="98" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-200 text-[10.5px] font-bold">建築模型 Arch</text>
        <rect x="44" y="128" width="115" height="44" rx="8" className="fill-blue-500/20 stroke-blue-600" strokeWidth="1.6" />
        <text x="101" y="154" textAnchor="middle" className="fill-blue-800 dark:fill-blue-200 text-[10.5px] font-bold">結構模型 Struct</text>
        <rect x="44" y="184" width="115" height="44" rx="8" className="fill-emerald-500/20 stroke-emerald-600" strokeWidth="1.6" />
        <text x="101" y="210" textAnchor="middle" className="fill-emerald-800 dark:fill-emerald-200 text-[10.5px] font-bold">機電管線 MEP</text>
        {/* Clash highlight box */}
        <g transform="translate(198, 76)">
          <rect width="182" height="148" rx="12" className="fill-slate-100 dark:fill-slate-800 stroke-slate-400" strokeWidth="1.5" />
          {/* RC Beam + HVAC duct clashing */}
          <rect x="22" y="42" width="138" height="36" className="fill-slate-400/70 stroke-slate-600" strokeWidth="1.8" />
          <circle cx="92" cy="60" r="18" className="fill-rose-500/35 stroke-rose-600" strokeWidth="2.5" />
          <text x="91" y="32" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 text-[10px] font-mono font-bold">⚠ 硬碰撞偵測 (管穿梁!)</text>
          <text x="91" y="106" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[10px] font-bold">✓ 施工前預留穿梁套管</text>
          <text x="91" y="124" textAnchor="middle" className="fill-slate-500 text-[9.5px] font-mono">CSD/SEM 圖說整合零敲打</text>
        </g>
      </LeftCard>
      <RightCard title="BIM 3D~7D 維度與 LOD 發展程度" subtitle="IFC 開放格式實現跨軟體無損協作">
        <StepRow y={54} num="維" label="3D幾何 → 4D工期 → 5D估價 → 6D綠能 → 7D維運" detail="改一扇窗自動同步更新立面圖與門窗數量估價單!" tone="indigo" />
        <StepRow y={112} num="LOD" label="模型細緻度 LOD 100 ~ LOD 500" detail="LOD100概念量體 → 300設計發包 → 400施工 → 500竣工" tone="emerald" />
        <StepRow y={170} num="IFC" label="OpenBIM 國際標準交換格式 (.ifc)" detail="打通 Revit、Archicad、Tekla 與結構分析軟體" tone="amber" />
      </RightCard>
    </g>
  ),
};
