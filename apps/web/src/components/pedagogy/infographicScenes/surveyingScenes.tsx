import React from 'react';
import { LeftCard, RightCard, StepRow, type SceneRenderer } from './scenePrimitives';

export const surveyingScenes: Record<string, SceneRenderer> = {
  'surveying/surveying-fundamentals': (m) => (
    <g>
      <LeftCard title="旋轉橢球體 (TWD97) vs 大地水準面與高程關係" subtitle="大地高 h = 正高 H (海拔) + 大地水準面起伏 N">
        {/* Terrain, Geoid, Ellipsoid curves */}
        <path d="M 42 195 Q 204 148 368 195" fill="none" stroke="currentColor" strokeWidth="2.2" strokeDasharray="5 3" className="text-blue-600" />
        <path d="M 42 212 Q 160 156 260 185 T 368 176" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-teal-600" />
        <path d="M 42 162 Q 150 92 245 128 T 368 112" fill="none" stroke="currentColor" strokeWidth="2.8" className="text-emerald-700 dark:text-emerald-400" />
        {/* Point P vertical height lines */}
        <line x1="185" y1="108" x2="185" y2="173" stroke="currentColor" strokeWidth="2.2" className="text-rose-600" markerEnd={`url(#${m.arrowRose})`} />
        <line x1="215" y1="112" x2="215" y2="191" stroke="currentColor" strokeWidth="2.2" className="text-indigo-600" markerEnd={`url(#${m.arrowBlue})`} />
        <circle cx="185" cy="108" r="4.5" className="fill-rose-600" />
        <text x="176" y="144" textAnchor="end" className="fill-rose-700 dark:fill-rose-300 text-[10.5px] font-mono font-bold">正高 H (海拔)</text>
        <text x="224" y="152" className="fill-indigo-700 dark:fill-indigo-300 text-[10.5px] font-mono font-bold">大地高 h (GNSS)</text>
        <text x="305" y="110" className="fill-emerald-700 dark:fill-emerald-300 text-[10px] font-bold">真實地表面</text>
        <text x="295" y="172" className="fill-teal-700 dark:fill-teal-300 text-[10px] font-bold">大地水準面 (TWVD2001)</text>
        <text x="285" y="205" className="fill-blue-700 dark:fill-blue-300 text-[10px] font-bold">參考橢球面 (TWD97)</text>
        <text x="204" y="256" textAnchor="middle" className="fill-slate-700 dark:fill-slate-300 text-[10.5px] font-mono font-bold">
          兩差改正 C-R = 0.0675·K² (m)（地球曲率壓低、大氣折光抬高）
        </text>
      </LeftCard>
      <RightCard title="台灣法定坐標與測量鐵律" subtitle="從整體到局部、先控制後碎部">
        <StepRow y={54} num="橫" label="平面坐標 TWD97 (TM2 二度分帶)" detail="本島中央經線 121°E，西移假定值 250,000m" tone="blue" />
        <StepRow y={112} num="高" label="高程基準 TWVD2001" detail="以基隆平均海水面為 0.000 m 起算正高" tone="emerald" />
        <StepRow y={170} num="角" label="測角方向與象限順序" detail="正北 0° 順時針起算（I東北、II東南、III西南、IV西北）" tone="amber" />
        <text x="16" y="246" className="fill-slate-600 dark:fill-slate-300 text-[10px] font-mono">
          ★ 澎湖金馬則採中央經線 119°E 二度分帶投影！
        </text>
      </RightCard>
    </g>
  ),

  'surveying/distance-and-angle': (m) => (
    <g>
      <LeftCard title="傾斜地面量距水平改算 ＆ 經緯儀盤左／盤右觀測" subtitle="D = S·cosα ≈ S - h²/(2S) ； 正倒鏡平均消除儀器軸系誤差">
        {/* Slope distance triangle */}
        <polygon points="52,195 235,195 235,105" className="fill-blue-500/12 stroke-blue-600" strokeWidth="2" />
        <text x="135" y="140" className="fill-rose-700 dark:fill-rose-300 text-[11px] font-mono font-bold">斜距 S</text>
        <text x="145" y="214" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[11px] font-mono font-bold">水平距 D = S·cosα</text>
        <text x="244" y="156" className="fill-emerald-700 dark:fill-emerald-300 text-[11px] font-mono font-bold">高差 h</text>
        <text x="88" y="189" className="fill-amber-700 dark:fill-amber-300 text-[10.5px] font-mono font-bold">α</text>
        {/* Theodolite FL/FR icon */}
        <g transform="translate(318, 145)">
          <circle cx="0" cy="0" r="42" className="fill-indigo-500/10 stroke-indigo-600" strokeWidth="1.8" />
          <line x1="-34" y1="-20" x2="34" y2="20" stroke="currentColor" strokeWidth="2.5" className="text-indigo-600" markerEnd={`url(#${m.arrowBlue})`} />
          <circle cx="-18" cy="0" r="10" className="fill-amber-500/30 stroke-amber-600" />
          <text x="0" y="60" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-200 text-[10px] font-bold">正倒鏡均值</text>
        </g>
        <text x="204" y="254" textAnchor="middle" className="fill-slate-700 dark:fill-slate-300 text-[10.5px] font-mono font-bold">
          尺長改正：口訣「尺長實大（捲尺變長 → 讀數偏小 → 改正數為＋）」
        </text>
      </LeftCard>
      <RightCard title="捲尺量距四大改正與天頂距" subtitle="垂直角 α + 天頂距 Z = 90°">
        <StepRow y={54} num="溫" label="溫度熱脹冷縮改正 Ct" detail="Ct = α·L·(T - T₀) (T > T₀ 尺伸長為正)" tone="amber" />
        <StepRow y={112} num="垂" label="懸空垂曲改正 Cs（恆為負值!）" detail="Cs = -w²L³ / (24P²) 懸垂必使讀數偏多" tone="rose" />
        <StepRow y={170} num="鏡" label="盤左盤右消減誤差項目" detail="消除視準軸、橫軸傾斜與度盤偏心誤差（直立軸除外!）" tone="emerald" />
        <text x="16" y="246" className="fill-slate-600 dark:fill-slate-300 text-[10px] font-mono">
          ★ 注意：直立軸未鉛垂之誤差，正倒鏡平均無法消除！
        </text>
      </RightCard>
    </g>
  ),

  'surveying/elevation-and-leveling': () => (
    <g>
      <LeftCard title="逐差水準測量高程遞推（後視 BS → 儀器高 IH → 前視 FS）" subtitle="IH = H_BM + BS ； H_TP = IH - FS ； ΣBS - ΣFS = H_終 - H_起">
        <path d="M 38 222 Q 130 218 210 185 T 372 150" fill="none" stroke="currentColor" strokeWidth="2.8" className="text-emerald-700 dark:text-emerald-400" />
        {/* Staff A (BM) */}
        <rect x="64" y="102" width="10" height="118" className="fill-amber-100 stroke-amber-700" strokeWidth="1.5" />
        <text x="69" y="242" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 text-[10px] font-mono font-bold">BM1 (100.000m)</text>
        {/* Level Instrument midway */}
        <line x1="195" y1="126" x2="178" y2="190" stroke="currentColor" strokeWidth="2" className="text-slate-600" />
        <line x1="195" y1="126" x2="212" y2="190" stroke="currentColor" strokeWidth="2" className="text-slate-600" />
        <rect x="178" y="114" width="34" height="12" rx="3" className="fill-teal-600" />
        {/* Staff B (TP) */}
        <rect x="320" y="82" width="10" height="74" className="fill-amber-100 stroke-amber-700" strokeWidth="1.5" />
        <text x="325" y="174" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 text-[10px] font-mono font-bold">TP1 (101.630m)</text>
        {/* Horizontal Collimation Line */}
        <line x1="64" y1="120" x2="330" y2="120" stroke="currentColor" strokeWidth="2" strokeDasharray="5 3" className="text-rose-600" />
        <text x="195" y="106" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 text-[10.5px] font-mono font-bold">水平視準線 IH = 102.450 m</text>
        <text x="82" y="166" className="fill-blue-700 dark:fill-blue-300 text-[10.5px] font-mono font-bold">後視 BS=+2.450</text>
        <text x="236" y="138" className="fill-rose-700 dark:fill-rose-300 text-[10.5px] font-mono font-bold">前視 FS=-0.820</text>
      </LeftCard>
      <RightCard title="前後視距相等與水準閉合平差" subtitle="前後視等距自動抵銷視準軸誤差與兩差！">
        <StepRow y={54} num="加" label="後視 (BS) 永遠是「＋」" detail="已知高程點立尺，往上求視線高 IH" tone="blue" />
        <StepRow y={112} num="減" label="前視 (FS) 永遠是「－」" detail="待求點立尺，從視線高往下扣得地面高" tone="rose" />
        <StepRow y={170} num="差" label="水準閉合差分配原則" detail="容許差 ±c√K mm；改正數與距離或測站數成正比且反號!" tone="emerald" />
        <text x="16" y="246" className="fill-slate-600 dark:fill-slate-300 text-[10px] font-mono">
          ★ 天花板倒尺讀數記負號 (-)，視線之上即比視線更高！
        </text>
      </RightCard>
    </g>
  ),

  'surveying/instrument-setup': (m) => (
    <g>
      <LeftCard title="全測站經緯儀「定心＋整平」標準四步曲" subtitle="圓盒氣泡用腳架伸縮粗平 → 管水準器用腳螺旋左手拇指法則精平">
        {/* Tribrach 3 leveling screws + tubular bubble */}
        <polygon points="200,66 112,210 288,210" className="fill-indigo-500/12 stroke-indigo-600 dark:stroke-indigo-400" strokeWidth="2" />
        <circle cx="200" cy="66" r="14" className="fill-slate-700 stroke-amber-500" strokeWidth="2" />
        <circle cx="112" cy="210" r="14" className="fill-slate-700 stroke-blue-500" strokeWidth="2" />
        <circle cx="288" cy="210" r="14" className="fill-slate-700 stroke-blue-500" strokeWidth="2" />
        <text x="200" y="70" textAnchor="middle" className="fill-white text-[10px] font-mono font-bold">C</text>
        <text x="112" y="214" textAnchor="middle" className="fill-white text-[10px] font-mono font-bold">A</text>
        <text x="288" y="214" textAnchor="middle" className="fill-white text-[10px] font-mono font-bold">B</text>
        {/* Bubble parallel to AB first, then perpendicular */}
        <rect x="152" y="182" width="96" height="16" rx="8" className="fill-emerald-500/25 stroke-emerald-600" strokeWidth="1.5" />
        <circle cx="200" cy="190" r="5" className="fill-emerald-600" />
        <rect x="192" y="102" width="16" height="68" rx="8" className="fill-amber-500/25 stroke-amber-600" strokeWidth="1.5" />
        <circle cx="200" cy="136" r="5" className="fill-amber-600" />
        <line x1="135" y1="226" x2="175" y2="226" stroke="currentColor" strokeWidth="2" className="text-blue-600" markerEnd={`url(#${m.arrowBlue})`} />
        <line x1="265" y1="226" x2="225" y2="226" stroke="currentColor" strokeWidth="2" className="text-blue-600" markerEnd={`url(#${m.arrowBlue})`} />
        <text x="200" y="252" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[10.5px] font-mono font-bold">
          雙手反向等量旋轉 A、B 腳螺旋 → 氣泡隨「左手大拇指」方向移動！
        </text>
      </LeftCard>
      <RightCard title="消除視差與儀器三軸幾何條件" subtitle="十字絲與目標像未重合 = 視差 (Parallax)">
        <StepRow y={54} num="1" label="粗平靠「伸縮三腳架腿」" detail="圓氣泡偏哪腿，就把哪隻腳架調高或壓低" tone="blue" />
        <StepRow y={112} num="2" label="精平靠「三個腳螺旋」" detail="先平行雙螺旋對轉，再轉 90° 單獨調第 3 顆" tone="emerald" />
        <StepRow y={170} num="3" label="消除望遠鏡視差兩步驟" detail="先對天空調目鏡看清十字絲 → 再調物鏡對焦目標" tone="rose" />
        <text x="16" y="246" className="fill-slate-600 dark:fill-slate-300 text-[10px] font-mono">
          ★ 光學對點器確認中心偏離時，微鬆中心螺旋平移再複平
        </text>
      </RightCard>
    </g>
  ),

  'surveying/indirect-distance-elevation': () => (
    <g>
      <LeftCard title="視距測量三絲讀數 ＆ 三角高程測量幾何" subtitle="水平距 D = K·s·cos²α (K=100, s=上絲-下絲)">
        {/* Telescope at A sighting inclined staff at B */}
        <polygon points="62,225 74,185 86,225" className="fill-teal-600" />
        <circle cx="74" cy="180" r="6" className="fill-indigo-600" />
        <text x="74" y="242" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 text-[10px] font-mono font-bold">測站 A (儀高 i)</text>
        {/* Staff at B */}
        <rect x="322" y="64" width="12" height="122" className="fill-amber-100 stroke-amber-700" strokeWidth="1.5" />
        <line x1="74" y1="180" x2="322" y2="78" stroke="currentColor" strokeDasharray="3 2" className="text-blue-500" />
        <line x1="74" y1="180" x2="322" y2="112" stroke="currentColor" strokeWidth="2.2" className="text-rose-600" />
        <line x1="74" y1="180" x2="322" y2="146" stroke="currentColor" strokeDasharray="3 2" className="text-blue-500" />
        <line x1="74" y1="180" x2="322" y2="180" stroke="currentColor" strokeDasharray="4 3" className="text-slate-400" />
        <text x="342" y="82" className="fill-blue-700 dark:fill-blue-300 text-[9.5px] font-mono">上絲 u</text>
        <text x="342" y="116" className="fill-rose-700 dark:fill-rose-300 text-[9.5px] font-mono font-bold">中絲 m(覘高 t)</text>
        <text x="342" y="150" className="fill-blue-700 dark:fill-blue-300 text-[9.5px] font-mono">下絲 l</text>
        <text x="195" y="172" className="fill-amber-700 dark:fill-amber-300 text-[11px] font-mono font-bold">仰角 +α</text>
        <text x="246" y="142" className="fill-emerald-700 dark:fill-emerald-300 text-[10.5px] font-mono font-bold">V = D·tanα</text>
        <text x="204" y="262" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-300 text-[10.5px] font-mono font-bold">
          H_B = H_A + i + D·tanα - t （俯角時 α 代負值！）
        </text>
      </LeftCard>
      <RightCard title="視距檢核與三角高程必考公式" subtitle="上絲 + 下絲 ≈ 2 × 中絲（防讀錯防呆!）">
        <StepRow y={54} num="1" label="水平視線 (α = 0°) 視距公式" detail="D = 100 × s + C (內調焦儀器 C = 0)" tone="blue" />
        <StepRow y={112} num="2" label="傾斜視線雙公式 (cos² 與 sin2α)" detail="D = 100·s·cos²α ； V = ½·100·s·sin2α" tone="emerald" />
        <StepRow y={170} num="3" label="對向三角高程測量優點" detail="A↔B 往返觀測取平均，自動消去地球曲率與折光差!" tone="rose" />
      </RightCard>
    </g>
  ),

  'surveying/traverse-surveying': (m) => (
    <g>
      <LeftCard title="五邊形閉合導線內角檢核與方位角前推" subtitle="理論內角和 Σβ = (n - 2) × 180° = 540°">
        <polygon
          points="95,205 68,112 185,62 308,108 275,208"
          className="fill-blue-500/10 stroke-blue-600 dark:stroke-blue-400"
          strokeWidth="2.5"
        />
        {[[95,205,'A'],[68,112,'B'],[185,62,'C'],[308,108,'D'],[275,208,'E']].map(([cx, cy, lb], i) => (
          <g key={i}>
            <circle cx={Number(cx)} cy={Number(cy)} r="5" className="fill-rose-600 stroke-white" strokeWidth="1.5" />
            <text x={Number(cx)} y={Number(cy) - 10} textAnchor="middle" className="fill-slate-900 dark:fill-white text-[11px] font-mono font-bold">{lb}</text>
          </g>
        ))}
        {/* North arrow at B */}
        <line x1="68" y1="112" x2="68" y2="62" stroke="currentColor" strokeWidth="2" className="text-emerald-600" markerEnd={`url(#${m.arrowEmerald})`} />
        <text x="68" y="55" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[10px] font-mono font-bold">N</text>
        <path d="M 68 85 A 27 27 0 0 1 92 101" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-amber-600" />
        <text x="108" y="88" className="fill-amber-700 dark:fill-amber-300 text-[10.5px] font-mono font-bold">方位角 φ_BC</text>
        <text x="204" y="252" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-300 text-[10.5px] font-mono font-bold">
          正反方位角相差 180°：φ_BA = φ_AB ± 180°
        </text>
      </LeftCard>
      <RightCard title="方位角 vs 象限角 ＆ 推算口訣" subtitle="測量方位角永遠 0°~360° 順時針起算">
        <StepRow y={54} num="推" label="前推方位角「左加右減」法則" detail="φ_後 = (φ_前 ± 180°) + 左角 (或 - 右角)" tone="blue" />
        <StepRow y={112} num="象" label="象限角 RB 永遠介於 0°~90°" detail="如 φ=150° → S30°E ； φ=210° → S30°W" tone="amber" />
        <StepRow y={170} num="均" label="角度閉合差 f_β 平均分配" detail="每角改正數 v_β = -f_β / n（與邊長無關！）" tone="emerald" />
        <text x="16" y="246" className="fill-slate-600 dark:fill-slate-300 text-[10px] font-mono">
          ★ 外角和理論值則為 (n + 2) × 180°！切勿代錯公式
        </text>
      </RightCard>
    </g>
  ),

  'surveying/coordinate-computation': (m) => (
    <g>
      <LeftCard title="測量坐標正算（縱距 ΔN = D·cosφ，橫距 ΔE = D·sinφ）" subtitle="注意測量 X/N 軸朝北向上、Y/E 軸朝東向右（與數學相反!）">
        <line x1="78" y1="224" x2="342" y2="224" stroke="currentColor" strokeWidth="1.8" className="text-blue-600" markerEnd={`url(#${m.arrowBlue})`} />
        <line x1="78" y1="224" x2="78" y2="56" stroke="currentColor" strokeWidth="1.8" className="text-emerald-600" markerEnd={`url(#${m.arrowEmerald})`} />
        <text x="352" y="228" className="fill-blue-700 dark:fill-blue-300 text-[11px] font-mono font-bold">+E(橫)</text>
        <text x="78" y="48" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[11px] font-mono font-bold">+N(北/縱)</text>
        {/* Traverse leg AB */}
        <line x1="78" y1="224" x2="278" y2="94" stroke="currentColor" strokeWidth="3.2" className="text-rose-600" markerEnd={`url(#${m.arrowRose})`} />
        <line x1="78" y1="94" x2="278" y2="94" stroke="currentColor" strokeDasharray="4 3" className="text-blue-500" />
        <line x1="278" y1="224" x2="278" y2="94" stroke="currentColor" strokeDasharray="4 3" className="text-emerald-500" />
        <path d="M 78 172 A 52 52 0 0 1 122 195" fill="none" stroke="currentColor" strokeWidth="2" className="text-amber-600" />
        <text x="112" y="168" className="fill-amber-700 dark:fill-amber-300 text-[11px] font-mono font-bold">方位角 φ</text>
        <text x="178" y="86" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[11px] font-mono font-bold">橫距 ΔE = D·sinφ</text>
        <text x="286" y="164" className="fill-emerald-700 dark:fill-emerald-300 text-[11px] font-mono font-bold">縱距 ΔN=D·cosφ</text>
        <text x="180" y="176" className="fill-rose-700 dark:fill-rose-300 text-[11.5px] font-mono font-bold">邊長 D</text>
      </LeftCard>
      <RightCard title="羅盤儀法則平差與閉合比數" subtitle="Bowditch Rule：按邊長比例反號分配">
        <StepRow y={54} num="1" label="計算坐標閉合差 W" detail="W = √(f_N² + f_E²) （閉合導線理論和為 0）" tone="rose" />
        <StepRow y={112} num="2" label="導線相對精度（閉合比數）" detail="1 / (ΣD / W) 分母越大代表測量越精準！" tone="blue" />
        <StepRow y={170} num="3" label="羅盤儀法改正數公式" detail="v_Ni = -(f_N / ΣD) · D_i （邊越長分擔越多）" tone="emerald" />
        <text x="16" y="246" className="fill-slate-600 dark:fill-slate-300 text-[10px] font-mono">
          ★ 反算方位角：tanφ = ΔE / ΔN（務必依正負號判象限!）
        </text>
      </RightCard>
    </g>
  ),

  'surveying/area-and-error': () => (
    <g>
      <LeftCard title="坐標面積鞋帶公式 (Shoelace) ＆ 高斯誤差傳播" subtitle="2A = |Σ(Xi·Yi+1 - Xi+1·Yi)| — 首點坐標務必重抄於末列！">
        {/* Shoelace cross table visual */}
        <rect x="38" y="58" width="160" height="168" rx="10" className="fill-indigo-500/10 stroke-indigo-500/50" strokeWidth="1.5" />
        <text x="78" y="82" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-200 text-[11px] font-mono font-bold">N (X)</text>
        <text x="155" y="82" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-200 text-[11px] font-mono font-bold">E (Y)</text>
        {[0, 1, 2, 3].map((r) => (
          <g key={r} transform={`translate(0, ${104 + r * 30})`}>
            <text x="78" y="0" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 text-[10.5px] font-mono">{r === 3 ? 'X₁(回首)' : `X_${r + 1}`}</text>
            <text x="155" y="0" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 text-[10.5px] font-mono">{r === 3 ? 'Y₁(回首)' : `Y_${r + 1}`}</text>
            {r < 3 && (
              <>
                <line x1="92" y1="-3" x2="140" y2="24" stroke="currentColor" strokeWidth="1.6" className="text-emerald-600" />
                <line x1="140" y1="-3" x2="92" y2="24" stroke="currentColor" strokeWidth="1.6" strokeDasharray="3 2" className="text-rose-600" />
              </>
            )}
          </g>
        ))}
        {/* Bell curve on right half of LeftCard */}
        <path d="M 220 210 Q 255 208 275 145 Q 295 75 315 145 Q 335 208 375 210" fill="none" stroke="currentColor" strokeWidth="2.8" className="text-amber-600" />
        <line x1="295" y1="75" x2="295" y2="210" stroke="currentColor" strokeDasharray="3 3" className="text-slate-400" />
        <text x="295" y="228" textAnchor="middle" className="fill-amber-700 dark:fill-amber-300 text-[10px] font-mono font-bold">偶然誤差常態分布 ±σ</text>
        <text x="204" y="258" textAnchor="middle" className="fill-slate-700 dark:fill-slate-300 text-[10px] font-mono font-bold">
          單位換算：1 公頃 = 10,000 m² ； 1 坪 = 36 平方台尺 ≈ 3.3058 m²
        </text>
      </LeftCard>
      <RightCard title="三大誤差分類與中誤差傳播定律" subtitle="系統誤差用公式改正；偶然誤差取算術平均">
        <StepRow y={54} num="粗" label="粗差（人為讀錯記錯）" detail="多餘觀測檢核發現後，必須剔除重測！" tone="rose" />
        <StepRow y={112} num="和" label="線性加減誤差傳播 (Z = X ± Y)" detail="σ_Z = ±√(σ_X² + σ_Y²) （絕非直接相加!）" tone="blue" />
        <StepRow y={170} num="均" label="n 段同精度量距 vs 平均值中誤差" detail="總長 ±σ√n ； n 次觀測平均值 ±σ/√n" tone="emerald" />
        <text x="16" y="246" className="fill-slate-600 dark:fill-slate-300 text-[10px] font-mono">
          ★ 辛普森曲線面積法較梯形法更精準（拋物線擬合，偶數分段）
        </text>
      </RightCard>
    </g>
  ),
};
