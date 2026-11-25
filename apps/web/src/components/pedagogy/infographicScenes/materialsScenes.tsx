import React from 'react';
import { LeftCard, RightCard, StepRow, type SceneRenderer } from './scenePrimitives';

export const materialsScenes: Record<string, SceneRenderer> = {
  'materials/basic-properties': () => (
    <g>
      <LeftCard title="材料三相微觀孔隙模型（固相＋開口孔隙＋封閉孔隙）" subtitle="孔隙率 P + 密實度 D = 100% ； 視比重 &gt; 體比重">
        <rect x="48" y="64" width="190" height="162" rx="12" className="fill-slate-300/70 dark:fill-slate-700 stroke-slate-600" strokeWidth="2" />
        {/* Closed pores */}
        <circle cx="105" cy="112" r="16" className="fill-amber-200 dark:fill-amber-900/60 stroke-amber-600" strokeWidth="1.5" />
        <circle cx="165" cy="168" r="14" className="fill-amber-200 dark:fill-amber-900/60 stroke-amber-600" strokeWidth="1.5" />
        {/* Open pores connected to edge */}
        <path d="M 48 150 Q 82 145 88 165 Q 82 185 48 180 Z" className="fill-sky-400/45 stroke-sky-600" strokeWidth="1.5" />
        <path d="M 238 96 Q 196 102 192 122 Q 198 140 238 134 Z" className="fill-sky-400/45 stroke-sky-600" strokeWidth="1.5" />
        <text x="140" y="88" textAnchor="middle" className="fill-slate-800 dark:fill-slate-100 text-[11px] font-bold">固體實質骨架 Vs</text>
        <text x="105" y="116" textAnchor="middle" className="fill-amber-900 dark:fill-amber-200 text-[9px] font-bold">封閉孔</text>
        <text x="260" y="118" className="fill-sky-700 dark:fill-sky-300 text-[10.5px] font-mono font-bold">← 開口孔隙 Vo (吸水通道)</text>
        <text x="260" y="172" className="fill-amber-700 dark:fill-amber-300 text-[10.5px] font-mono font-bold">← 封閉孔隙 Vc (保溫隔熱)</text>
        <text x="204" y="254" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-300 text-[10.5px] font-mono font-bold">
          含水率 w = (W_wet - W_dry) / W_dry × 100% （分母永遠是絕乾重！）
        </text>
      </LeftCard>
      <RightCard title="精密度 vs 準確度 ＆ 變異係數 CV" subtitle="CV = (標準差 S / 平均值 x̄) × 100%">
        {/* Target 1: Precise + Accurate */}
        <circle cx="78" cy="112" r="38" fill="none" stroke="currentColor" className="text-slate-400" />
        <circle cx="78" cy="112" r="18" fill="none" stroke="currentColor" className="text-emerald-500" />
        <circle cx="76" cy="110" r="3.5" className="fill-emerald-600" />
        <circle cx="81" cy="114" r="3.5" className="fill-emerald-600" />
        <circle cx="77" cy="116" r="3.5" className="fill-emerald-600" />
        <text x="78" y="168" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[10px] font-bold">又準又精密</text>
        {/* Target 2: Precise but biased */}
        <circle cx="206" cy="112" r="38" fill="none" stroke="currentColor" className="text-slate-400" />
        <circle cx="206" cy="112" r="18" fill="none" stroke="currentColor" className="text-amber-500" />
        <circle cx="226" cy="90" r="3.5" className="fill-rose-600" />
        <circle cx="230" cy="94" r="3.5" className="fill-rose-600" />
        <circle cx="224" cy="96" r="3.5" className="fill-rose-600" />
        <text x="206" y="168" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 text-[10px] font-bold">高精密但低準確</text>
        <StepRow y={188} num="CV" label="品管穩定度指標" detail="CV 越小代表拌合廠批次品質越均勻穩定" tone="indigo" />
      </RightCard>
    </g>
  ),

  'materials/cement-composition': (m) => (
    <g>
      <LeftCard title="波特蘭水泥四大熟料礦物強度發展曲線" subtitle="C₃S 衝早期強度 ； C₂S 撐晚期強度">
        <line x1="54" y1="232" x2="375" y2="232" stroke="currentColor" strokeWidth="1.5" className="text-slate-500" markerEnd={`url(#${m.arrowBlue})`} />
        <line x1="54" y1="232" x2="54" y2="54" stroke="currentColor" strokeWidth="1.5" className="text-slate-500" markerEnd={`url(#${m.arrowBlue})`} />
        <text x="372" y="250" textAnchor="end" className="fill-slate-600 text-[10px] font-mono">齡期 (1d → 28d → 1yr)</text>
        <text x="60" y="48" className="fill-slate-600 text-[10px] font-mono">抗壓強度</text>
        {/* C3S */}
        <path d="M 54 232 Q 115 95 360 72" fill="none" stroke="currentColor" strokeWidth="3" className="text-rose-600" />
        <text x="235" y="76" className="fill-rose-700 dark:fill-rose-300 text-[11px] font-mono font-bold">C₃S (早期高強主力)</text>
        {/* C2S */}
        <path d="M 54 232 Q 185 205 360 84" fill="none" stroke="currentColor" strokeWidth="3" className="text-blue-600" />
        <text x="250" y="138" className="fill-blue-700 dark:fill-blue-300 text-[11px] font-mono font-bold">C₂S (晚期長久強度)</text>
        {/* C3A & C4AF */}
        <path d="M 54 232 Q 80 185 360 182" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5 3" className="text-amber-600" />
        <text x="255" y="176" className="fill-amber-700 dark:fill-amber-300 text-[10px] font-mono font-bold">C₃A (瞬凝高熱低強)</text>
        <path d="M 54 232 Q 95 208 360 202" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" className="text-slate-500" />
        <text x="265" y="218" className="fill-slate-600 dark:fill-slate-400 text-[10px] font-mono">C₄AF (鐵灰色助熔)</text>
      </LeftCard>
      <RightCard title="水化熱排行與石膏緩凝機制" subtitle="旋窯 1450°C 燒結 ＋ 3~5% 石膏研磨">
        <StepRow y={54} num="熱" label="水化放熱量＆反應速率排行" detail="C₃A > C₃S > C₄AF > C₂S (必背!)" tone="rose" />
        <StepRow y={110} num="膠" label="C-S-H 水化矽酸鈣膠體" detail="決定強度與耐久性核心；Ca(OH)₂ 保鹼防鏽" tone="emerald" />
        <StepRow y={166} num="緩" label="二水石膏 (CaSO₄·2H₂O)" detail="包覆 C₃A 防止閃凝，爭取運送澆置時間" tone="amber" />
        <text x="16" y="246" className="fill-slate-600 dark:fill-slate-300 text-[10px] font-mono">
          ★ 忌把 Ca(OH)₂ 當強度來源：它易溶出且與酸反應！
        </text>
      </RightCard>
    </g>
  ),

  'materials/cement-types': () => (
    <g>
      <LeftCard title="CNS 61 波特蘭水泥五大類型工程對照" subtitle="調整熟料比例與細度以適應特殊工況">
        {[
          { y: 56, tag: '第 I 型', name: '普通水泥', bar: 180, desc: '一般 RC 建築梁柱樓板（用量最大）', cls: 'fill-blue-500' },
          { y: 98, tag: '第 II 型', name: '平熱中抗硫', bar: 150, desc: '地下基礎、橋墩（C₃A ≤ 8%）', cls: 'fill-teal-500' },
          { y: 140, tag: '第 III 型', name: '早強水泥', bar: 235, desc: '緊急搶修、預力構件（高 C₃S＋高細度）', cls: 'fill-rose-500' },
          { y: 182, tag: '第 IV 型', name: '低熱水泥', bar: 105, desc: '巨積水壩防溫差裂縫（高 C₂S、低 C₃A）', cls: 'fill-emerald-500' },
          { y: 224, tag: '第 V 型', name: '抗硫酸鹽', bar: 135, desc: '海港碼頭、溫泉區（嚴控 C₃A ≤ 5%！）', cls: 'fill-indigo-500' },
        ].map((r, i) => (
          <g key={i} transform={`translate(18, ${r.y})`}>
            <rect width="62" height="28" rx="6" className={r.cls} />
            <text x="31" y="18" textAnchor="middle" className="fill-white text-[10.5px] font-bold font-mono">{r.tag}</text>
            <text x="70" y="13" className="fill-slate-900 dark:fill-white text-[11px] font-bold">{r.name}</text>
            <text x="70" y="26" className="fill-slate-600 dark:fill-slate-300 text-[9.5px] font-mono">{r.desc}</text>
          </g>
        ))}
      </LeftCard>
      <RightCard title="混合水泥與卜作嵐二次反應" subtitle="爐石粉／矽灰／飛灰節能減碳增緻密">
        <StepRow y={56} num="1" label="水泥水化先釋出氫氧化鈣" detail="C₃S/C₂S + H₂O → C-S-H + Ca(OH)₂" tone="blue" />
        <StepRow y={112} num="2" label="活性 SiO₂ 吃掉弱相變強膠" detail="飛灰/爐石 + Ca(OH)₂ → 二次 C-S-H 膠體" tone="emerald" />
        <StepRow y={168} num="3" label="三大工程效益" detail="降巨積水化熱、塞毛細孔防滲、後期高強" tone="amber" />
        <text x="16" y="246" className="fill-slate-600 dark:fill-slate-300 text-[10px] font-mono">
          ★ 白水泥嚴控氧化鐵 Fe₂O₃ &lt; 0.5%，專供裝飾磁磚填縫
        </text>
      </RightCard>
    </g>
  ),

  'materials/cement-vicat': (m) => (
    <g>
      <LeftCard title="CNS 786 費開氏針儀 (Vicat Apparatus) 凝結試驗" subtitle="標準稠度：10mm 試桿 30 秒貫入頂面下 10±1 mm">
        {/* Stand & Scale */}
        <rect x="90" y="54" width="14" height="190" className="fill-slate-400 dark:fill-slate-600" />
        <rect x="70" y="238" width="250" height="10" rx="3" className="fill-slate-500" />
        {/* Movable rod + 300g weight */}
        <rect x="176" y="58" width="28" height="24" rx="4" className="fill-indigo-600" />
        <text x="190" y="74" textAnchor="middle" className="fill-white text-[9.5px] font-mono font-bold">300g</text>
        <line x1="190" y1="82" x2="190" y2="195" stroke="currentColor" strokeWidth="3" className="text-rose-600" />
        {/* Conical ring mold */}
        <polygon points="145,178 235,178 248,238 132,238" className="fill-emerald-500/20 stroke-emerald-700 dark:stroke-emerald-400" strokeWidth="2" />
        <line x1="140" y1="215" x2="240" y2="215" stroke="currentColor" strokeDasharray="4 2" className="text-amber-600" />
        <line x1="258" y1="178" x2="258" y2="215" stroke="currentColor" strokeWidth="2" className="text-rose-600" markerEnd={`url(#${m.arrowRose})`} />
        <text x="268" y="200" className="fill-rose-700 dark:fill-rose-300 text-[10.5px] font-mono font-bold">貫入 25mm = 初凝!</text>
        <text x="190" y="264" textAnchor="middle" className="fill-slate-700 dark:fill-slate-300 text-[10.5px] font-mono font-bold">
          試模高 40mm（初凝針 1mm 貫入 25mm ⇔ 距底板 15mm）
        </text>
      </LeftCard>
      <RightCard title="初凝 vs 終凝 法定時間邊界" subtitle="太快來不及澆置；太慢拖延拆模工期">
        <StepRow y={56} num="初" label="初凝時間 ≥ 45 分鐘" detail="失去可塑性起點：拌合運送搗實須在此前完成" tone="amber" />
        <StepRow y={112} num="終" label="終凝時間 ≤ 375 分鐘 (6h15m)" detail="1mm 針不留明顯印痕，開始硬化養護起強" tone="rose" />
        <StepRow y={168} num="吉" label="吉爾摩針 (Gillmore) 對照" detail="初凝輕粗針 (113.4g) vs 終凝重細針 (453.6g)" tone="blue" />
        <text x="16" y="246" className="fill-slate-600 dark:fill-slate-300 text-[10px] font-mono">
          ★ 細度越細、溫度越高、W/C 越小 → 凝結越快！
        </text>
      </RightCard>
    </g>
  ),

  'materials/cement-strength': (m) => (
    <g>
      <LeftCard title="CNS 1010 水泥砂漿 50mm 立方體抗壓試驗" subtitle="水泥 : 標準砂 = 1 : 2.75 ， A = 50×50 = 2500 mm²">
        {/* Compression platens + 50mm cube */}
        <rect x="135" y="72" width="120" height="16" rx="3" className="fill-slate-600" />
        <line x1="195" y1="42" x2="195" y2="70" stroke="currentColor" strokeWidth="3.5" className="text-rose-600" markerEnd={`url(#${m.arrowRose})`} />
        <text x="205" y="56" className="fill-rose-700 dark:fill-rose-300 text-[11px] font-mono font-bold">最大破壞載重 P (N)</text>
        {/* Cube with hourglass shear cracks */}
        <rect x="150" y="88" width="90" height="90" className="fill-amber-500/20 stroke-amber-700 dark:stroke-amber-400" strokeWidth="2.2" />
        <path d="M 150 88 Q 182 133 150 178 M 240 88 Q 208 133 240 178" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" className="text-rose-600" />
        <rect x="135" y="178" width="120" height="16" rx="3" className="fill-slate-600" />
        <text x="254" y="136" className="fill-emerald-700 dark:fill-emerald-300 text-[10.5px] font-mono font-bold">← 施壓於平滑模壁側面!</text>
        <text x="195" y="216" textAnchor="middle" className="fill-slate-700 dark:fill-slate-300 text-[11px] font-mono font-bold">
          50 mm × 50 mm × 50 mm 立方體試體
        </text>
        <text x="195" y="252" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-300 text-[11px] font-mono font-bold">
          抗壓強度 f_c = P (N) / 2500 (mm²) = MPa
        </text>
      </LeftCard>
      <RightCard title="為什麼不直接壓「純水泥漿」？" subtitle="試驗細節決定統測高分">
        <StepRow y={54} num="1" label="純水泥漿乾縮極大必開裂" detail="加渥太華標準石英砂 (1:2.75) 穩定體積" tone="amber" />
        <StepRow y={110} num="2" label="翻轉 90° 壓側面（非頂面）" detail="金屬模壁接觸面平整平行，不必另外蓋平" tone="emerald" />
        <StepRow y={166} num="3" label="飽和石灰水濕治養護 23±2°C" detail="防止 Ca(OH)₂ 溶出並確保充分水化起強" tone="blue" />
        <text x="16" y="246" className="fill-slate-600 dark:fill-slate-300 text-[10px] font-mono">
          ★ 第 I 型水泥抗壓門檻：3天≥12 MPa、7天≥19 MPa、28天≥28 MPa
        </text>
      </RightCard>
    </g>
  ),

  'materials/cement-storage': () => (
    <g>
      <LeftCard title="工地袋裝水泥防潮倉儲標準剖面" subtitle="每袋 50 kg（體積約 33 公升）— 先進先出原則">
        {/* Wall & Ground */}
        <rect x="44" y="54" width="14" height="176" className="fill-slate-400 dark:fill-slate-600" />
        <line x1="44" y1="230" x2="375" y2="230" stroke="currentColor" strokeWidth="2.5" className="text-slate-600" />
        {/* Wooden pallet raised >= 20~30cm */}
        <rect x="98" y="198" width="210" height="10" className="fill-amber-600" />
        <rect x="108" y="208" width="16" height="22" className="fill-amber-700" />
        <rect x="195" y="208" width="16" height="22" className="fill-amber-700" />
        <rect x="282" y="208" width="16" height="22" className="fill-amber-700" />
        {/* Cement bags stack (<= 10 layers) */}
        {[0, 1, 2, 3, 4].map((row) => (
          <g key={row} transform={`translate(110, ${176 - row * 22})`}>
            <rect x="0" y="0" width="88" height="19" rx="5" className="fill-emerald-500/25 stroke-emerald-700 dark:stroke-emerald-400" strokeWidth="1.5" />
            <rect x="96" y="0" width="88" height="19" rx="5" className="fill-emerald-500/25 stroke-emerald-700 dark:stroke-emerald-400" strokeWidth="1.5" />
          </g>
        ))}
        <text x="78" y="150" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 text-[10px] font-mono font-bold">離牆≥30cm</text>
        <text x="342" y="218" textAnchor="middle" className="fill-amber-700 dark:fill-amber-300 text-[10px] font-mono font-bold">架高≥20~30cm</text>
        <text x="204" y="76" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-200 text-[11px] font-mono font-bold">
          堆疊高度 ≤ 10 袋（存逾 60 天改 ≤ 7 袋防結塊）
        </text>
        <text x="204" y="258" textAnchor="middle" className="fill-slate-600 dark:fill-slate-300 text-[10px] font-mono">
          受潮吸濕 CO₂ 風化 → 比重下降、強熱減量提高、28天強度暴跌！
        </text>
      </LeftCard>
      <RightCard title="假凝 (False Set) vs 閃凝 (Flash Set)" subtitle="摸溫度一秒判生死！">
        <StepRow y={56} num="假" label="假凝：石膏研磨過熱脫水再結晶" detail="不放大量熱！不加水直接強拌即可恢復強度" tone="emerald" />
        <StepRow y={116} num="閃" label="閃凝（瞬凝）：石膏不足 C₃A 失控" detail="劇烈發燙！不可逆永久破壞，整車退料禁用" tone="rose" />
        <StepRow y={176} num="檢" label="手指輕壓結塊簡易判讀" detail="一捏即碎尚可降級用；硬塊敲不碎嚴禁用於結構" tone="amber" />
      </RightCard>
    </g>
  ),

  'materials/concrete': (m) => (
    <g>
      <LeftCard title="亞伯拉姆水灰比定律 ＆ 骨材面乾內飽和 (SSD)" subtitle="W/C 越小越緻密高強；SSD 骨材不搶水也不吐水！">
        <line x1="50" y1="220" x2="225" y2="220" stroke="currentColor" strokeWidth="1.5" className="text-slate-500" markerEnd={`url(#${m.arrowBlue})`} />
        <line x1="50" y1="220" x2="50" y2="62" stroke="currentColor" strokeWidth="1.5" className="text-slate-500" markerEnd={`url(#${m.arrowBlue})`} />
        <path d="M 65 76 Q 115 170 210 205" fill="none" stroke="currentColor" strokeWidth="3" className="text-rose-600" />
        <text x="145" y="112" className="fill-rose-700 dark:fill-rose-300 text-[10.5px] font-mono font-bold">f&apos;c 隨 W/C 反比下降</text>
        <text x="135" y="238" textAnchor="middle" className="fill-slate-600 text-[10px] font-mono">水灰比 W/C (0.35 → 0.70)</text>
        {/* SSD aggregate icon */}
        <g transform="translate(248, 72)">
          <circle cx="68" cy="68" r="44" className="fill-sky-500/25 stroke-slate-600 dark:stroke-slate-300" strokeWidth="2.5" strokeDasharray="none" />
          <circle cx="56" cy="58" r="9" className="fill-sky-500/60" />
          <circle cx="80" cy="76" r="10" className="fill-sky-500/60" />
          <text x="68" y="132" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[10.5px] font-bold">SSD 面乾內飽和</text>
          <text x="68" y="148" textAnchor="middle" className="fill-slate-500 text-[9.5px] font-mono">內孔飽水、表面無水膜</text>
        </g>
        <text x="204" y="262" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-300 text-[10.5px] font-mono font-bold">
          改善工作性應加「減水劑」，工地嚴禁私自加水拉高 W/C！
        </text>
      </LeftCard>
      <RightCard title="CNS 1176 坍度錐試驗規格" subtitle="上徑 10cm × 下徑 20cm × 高 30cm">
        <polygon points="115,62 90,192 140,192" fill="none" stroke="currentColor" strokeWidth="1.8" strokeDasharray="4 2" className="text-slate-400" />
        <path d="M 105,112 Q 115,106 125,112 Q 152,145 148,192 L 82,192 Q 78,145 105,112 Z" className="fill-emerald-500/25 stroke-emerald-600" strokeWidth="2" />
        <line x1="115" y1="62" x2="178" y2="62" stroke="currentColor" className="text-rose-600" />
        <line x1="172" y1="62" x2="172" y2="112" stroke="currentColor" strokeWidth="2.2" className="text-rose-600" markerEnd={`url(#${m.arrowRose})`} />
        <text x="182" y="92" className="fill-rose-700 dark:fill-rose-300 text-[11px] font-mono font-bold">坍度 S = 30 - h</text>
        <StepRow y={208} num="3×25" label="分 3 層（每層約1/3體積）" detail="以 16mm 圓頭搗棒每層均勻搗實 25 下" tone="blue" />
      </RightCard>
    </g>
  ),

  'materials/stone-ceramics-glass': (m) => (
    <g>
      <LeftCard title="複層 Low-E 節能玻璃光譜反射剖面" subtitle="奈米銀膜反射遠紅外線熱輻射、保留自然可見光">
        <rect x="135" y="56" width="16" height="175" className="fill-cyan-500/30 stroke-cyan-600" strokeWidth="1.5" />
        <line x1="151" y1="56" x2="151" y2="231" stroke="currentColor" strokeWidth="3.5" className="text-amber-500" />
        <rect x="152" y="56" width="28" height="175" className="fill-slate-200/50 dark:fill-slate-800" />
        <rect x="180" y="56" width="16" height="175" className="fill-cyan-500/30 stroke-cyan-600" strokeWidth="1.5" />
        {/* Solar visible light passes */}
        <line x1="52" y1="98" x2="290" y2="98" stroke="currentColor" strokeWidth="2.8" className="text-emerald-600" markerEnd={`url(#${m.arrowEmerald})`} />
        <text x="54" y="90" className="fill-emerald-700 dark:fill-emerald-300 text-[10px] font-mono font-bold">可見光高穿透採光</text>
        {/* Infrared heat reflected */}
        <polyline points="52,155 149,175 62,205" fill="none" stroke="currentColor" strokeWidth="2.8" className="text-rose-600" markerEnd={`url(#${m.arrowRose})`} />
        <text x="52" y="146" className="fill-rose-700 dark:fill-rose-300 text-[10px] font-mono font-bold">紅外線輻射熱阻擋反射!</text>
        <text x="166" y="248" textAnchor="middle" className="fill-amber-700 dark:fill-amber-300 text-[10px] font-mono font-bold">Low-E 鍍膜＋乾燥氣層</text>
        <text x="275" y="168" className="fill-slate-700 dark:fill-slate-200 text-[11px] font-bold">室內涼爽節能</text>
      </LeftCard>
      <RightCard title="石材／紅磚／安全玻璃必考辨析" subtitle="統測三大無機非金屬考點">
        <StepRow y={54} num="石" label="外牆選花崗岩、室內選大理石" detail="大理石含 CaCO₃ 遇都市酸雨易溶蝕吐白" tone="amber" />
        <StepRow y={110} num="磚" label="CNS 382 普通磚：200×95×53 mm" detail="陶瓷吸水率低至高：瓷器 < 石器 < 陶器 < 土器" tone="rose" />
        <StepRow y={166} num="玻" label="強化玻璃 vs 膠合玻璃 (PVB膜)" detail="強化不可事後切割；天窗帷幕防墜選膠合玻璃!" tone="blue" />
        <text x="16" y="246" className="fill-slate-600 dark:fill-slate-300 text-[10px] font-mono">
          ★ 強化玻璃強度為普通玻璃 3~5 倍，破成鈍角顆粒
        </text>
      </RightCard>
    </g>
  ),

  'materials/wood': (m) => (
    <g>
      <LeftCard title="木材橫切面構造 ＆ 纖維飽和點 FSP (30%)" subtitle="含水率 &lt; FSP (吸著水變化) 才會乾縮濕脹且強度上升！">
        {/* Wood trunk cross section */}
        <circle cx="112" cy="142" r="68" className="fill-amber-200/70 dark:fill-amber-900/30 stroke-amber-800" strokeWidth="3" />
        <circle cx="112" cy="142" r="42" className="fill-amber-600/45 stroke-amber-700" strokeWidth="1.8" />
        <circle cx="112" cy="142" r="22" fill="none" stroke="currentColor" className="text-amber-800/60" />
        <text x="112" y="146" textAnchor="middle" className="fill-amber-950 dark:fill-amber-100 text-[10.5px] font-bold">心材 (耐腐)</text>
        <text x="112" y="90" textAnchor="middle" className="fill-amber-800 dark:fill-amber-200 text-[9.5px] font-bold">邊材</text>
        {/* FSP curve */}
        <line x1="212" y1="215" x2="382" y2="215" stroke="currentColor" strokeWidth="1.5" className="text-slate-500" markerEnd={`url(#${m.arrowBlue})`} />
        <line x1="212" y1="215" x2="212" y2="68" stroke="currentColor" strokeWidth="1.5" className="text-slate-500" markerEnd={`url(#${m.arrowBlue})`} />
        <polyline points="212,82 292,168 372,168" fill="none" stroke="currentColor" strokeWidth="3" className="text-emerald-600" />
        <line x1="292" y1="72" x2="292" y2="215" stroke="currentColor" strokeDasharray="4 2" className="text-rose-600" />
        <text x="292" y="66" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 text-[10px] font-mono font-bold">FSP ≈ 30%</text>
        <text x="250" y="232" textAnchor="middle" className="fill-emerald-700 text-[9.5px] font-mono">吸著水區</text>
        <text x="336" y="232" textAnchor="middle" className="fill-slate-500 text-[9.5px] font-mono">自由水(不變形)</text>
      </LeftCard>
      <RightCard title="木材三方向乾縮率與強度排行" subtitle="高度異向性材料（順紋最強、弦向最縮）">
        <StepRow y={56} num="縮" label="乾縮變形量大小排行 (必考!)" detail="弦向(6~12%) > 徑向(3~6%) ≫ 縱向(0.1~0.3%)" tone="rose" />
        <StepRow y={114} num="強" label="順紋力學強度關係" detail="順紋抗拉 > 抗彎 > 順紋抗壓 ≫ 橫紋強度" tone="emerald" />
        <StepRow y={172} num="CLT" label="工程木（合板／CLT 直交集成板）" detail="奇數層纖維正交膠合，消除異向變形且固碳" tone="blue" />
        <text x="16" y="248" className="fill-slate-600 dark:fill-slate-300 text-[10px] font-mono">
          ★ 台灣氣乾平衡含水率 EMC 約為 12% ~ 15%
        </text>
      </RightCard>
    </g>
  ),

  'materials/polymers-asphalt': () => (
    <g>
      <LeftCard title="瀝青三大物理試驗（針入度／軟化點／延展性）" subtitle="感溫性材料：夏防車轍軟化、冬防低溫脆裂">
        {/* Penetration */}
        <g transform="translate(24, 68)">
          <rect width="112" height="145" rx="8" className="fill-blue-500/10 stroke-blue-500/50" />
          <line x1="56" y1="22" x2="56" y2="85" stroke="currentColor" strokeWidth="2.5" className="text-blue-600" />
          <rect x="24" y="75" width="64" height="36" rx="4" className="fill-slate-800" />
          <text x="56" y="128" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[10.5px] font-bold">針入度（稠度軟硬）</text>
          <text x="56" y="140" textAnchor="middle" className="fill-slate-500 text-[9px] font-mono">25°C,100g,5s(0.1mm)</text>
        </g>
        {/* Ring and Ball */}
        <g transform="translate(148, 68)">
          <rect width="112" height="145" rx="8" className="fill-rose-500/10 stroke-rose-500/50" />
          <circle cx="56" cy="52" r="9" className="fill-rose-600" />
          <path d="M 34 62 Q 56 105 78 62" fill="none" stroke="currentColor" strokeWidth="3" className="text-slate-700 dark:text-slate-300" />
          <text x="56" y="128" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 text-[10.5px] font-bold">環球軟化點</text>
          <text x="56" y="140" textAnchor="middle" className="fill-slate-500 text-[9px] font-mono">高溫抗垂流耐熱度</text>
        </g>
        {/* Ductility */}
        <g transform="translate(272, 68)">
          <rect width="112" height="145" rx="8" className="fill-emerald-500/10 stroke-emerald-500/50" />
          <path d="M 18 58 L 36 68 L 76 68 L 94 58 L 94 82 L 76 72 L 36 72 L 18 82 Z" className="fill-emerald-600/60" />
          <text x="56" y="128" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[10.5px] font-bold">延展度（塑性韌性）</text>
          <text x="56" y="140" textAnchor="middle" className="fill-slate-500 text-[9px] font-mono">5cm/min 拉斷長度cm</text>
        </g>
        <text x="204" y="252" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-300 text-[10.5px] font-mono font-bold">
          針入度數值越大代表瀝青越「軟」！（台灣炎熱道路常用 AC-20）
        </text>
      </LeftCard>
      <RightCard title="熱塑性 vs 熱固性高分子塑膠" subtitle="鏈狀可熱熔回收 vs 網狀交聯耐熱不熔">
        <StepRow y={56} num="塑" label="熱塑性 (PE, PVC, PMMA, PC)" detail="線型分子鏈：加熱軟化可塑型回收" tone="blue" />
        <StepRow y={114} num="固" label="熱固性 (Epoxy, 酚醛, FRP, 美耐皿)" detail="三維網狀交聯：一旦硬化加熱不熔化" tone="rose" />
        <StepRow y={172} num="防" label="建築防水材黃金選用" detail="屋頂伸縮選 PU、帷幕耐 UV 填縫選 Silicone" tone="emerald" />
      </RightCard>
    </g>
  ),

  'materials/metals': () => (
    <g>
      <LeftCard title="CNS 560 竹節鋼筋軋印標記識讀（SD420W）" subtitle="耐震主筋必選加 W（可銲高延性抗震鋼筋）！">
        {/* Deformed rebar graphic */}
        <rect x="44" y="96" width="320" height="44" rx="8" className="fill-slate-600 dark:fill-slate-700 stroke-slate-800" strokeWidth="2" />
        {[65, 95, 125, 285, 315, 345].map((x) => (
          <line key={x} x1={x} y1="94" x2={x - 10} y2="142" stroke="currentColor" strokeWidth="4" className="text-slate-400" />
        ))}
        <text x="205" y="124" textAnchor="middle" className="fill-amber-300 text-[16px] font-mono font-bold tracking-widest">
          D25 · SD420W
        </text>
        {/* Callouts */}
        <text x="115" y="76" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[10.5px] font-mono font-bold">#8 號筋 ≈ 25.4mm</text>
        <text x="225" y="176" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[10.5px] font-mono font-bold">fy ≥ 420 MPa (4200 kgf/cm²)</text>
        <text x="204" y="212" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 text-[10.5px] font-mono font-bold">
          W = 實測抗拉/實測降伏 ≥ 1.25（確保梁端塑性鉸大變形不斷裂！）
        </text>
        <text x="204" y="252" textAnchor="middle" className="fill-slate-600 dark:fill-slate-300 text-[10px] font-mono">
          號數換算：#3 ~ #8 號筋直徑 (mm) ≈ 號數 × 3.175 (1/8 英吋)
        </text>
      </LeftCard>
      <RightCard title="含碳量效應與鋼材防蝕防火" subtitle="鋼骨 550°C 強度腰斬，必施作防火被覆！">
        <StepRow y={56} num="C%" label="含碳量 ↑：硬度強度升、延性銲接降" detail="熟鐵(<0.02%) → 建築低碳鋼 → 脆硬生鐵(>2.1%)" tone="amber" />
        <StepRow y={114} num="Zn" label="熱浸鍍鋅（犧牲陽極防蝕）" detail="鋅活性 > 鐵，刮傷時鋅優先氧化保護鋼骨" tone="blue" />
        <StepRow y={172} num="火" label="鋼結構防火弱點與對策" detail="噴塗岩棉防火被覆或膨脹型防火漆達法定時效" tone="rose" />
      </RightCard>
    </g>
  ),

  'materials/green-materials': () => (
    <g>
      <LeftCard title="台灣綠建材標章（GBM）四大分類體系" subtitle="健康無毒、生態天然、高性能物理、循環再生">
        {[
          { x: 24, y: 56, title: '健康綠建材 (市占最高)', sub: '低甲醛 HCHO ≤ 0.08 / 低 TVOC', ex: '水性乳膠漆、低甲醛木心板', cls: 'fill-emerald-500/15 stroke-emerald-600' },
          { x: 214, y: 56, title: '生態綠建材', sub: '無匱乏天然認證生質原料', ex: 'FSC 人工林木製材、亞麻仁油漆', cls: 'fill-teal-500/15 stroke-teal-600' },
          { x: 24, y: 162, title: '高性能綠建材', sub: '防音 / 透水 / 節能三大機能', ex: '隔音墊、海綿透水磚、Low-E玻璃', cls: 'fill-blue-500/15 stroke-blue-600' },
          { x: 214, y: 162, title: '再生綠建材', sub: '回收本土廢棄物再製達標', ex: '高爐石水泥磚、回收玻璃陶瓷磚', cls: 'fill-amber-500/15 stroke-amber-600' },
        ].map((b, i) => (
          <g key={i} transform={`translate(${b.x}, ${b.y})`}>
            <rect width="174" height="90" rx="10" className={b.cls} strokeWidth="1.6" />
            <text x="12" y="24" className="fill-slate-900 dark:fill-white text-[11px] font-bold">{b.title}</text>
            <text x="12" y="46" className="fill-indigo-700 dark:fill-indigo-300 text-[9.5px] font-mono font-bold">{b.sub}</text>
            <text x="12" y="68" className="fill-slate-600 dark:fill-slate-300 text-[9.5px]">{b.ex}</text>
          </g>
        ))}
      </LeftCard>
      <RightCard title="綠建築 EEWH vs 綠建材 GBM" subtitle="整棟建築九大指標 vs 單一建材標章">
        <StepRow y={56} num="法" label="建築技術規則強制使用率" detail="室內裝修綠建材 ≥ 60% ； 戶外地面 ≥ 20%" tone="emerald" />
        <StepRow y={114} num="9" label="台灣綠建築 EEWH 九大指標" detail="生態、節能、減廢、健康（鑽石級至合格級）" tone="blue" />
        <StepRow y={172} num="禁" label="全面禁用危害物質通則" detail="石綿、重金屬（鉛鎘汞鉻）、放射性與甲醛超標" tone="rose" />
      </RightCard>
    </g>
  ),

  'materials/green-building-materials': (m) => (
    <g>
      <LeftCard title="建築全生命週期減碳（蘊含碳 vs 營運碳）" subtitle="從搖籃到搖籃 (Cradle-to-Cradle) 循環營建路徑">
        {[
          { x: 26, label: 'A1-A3 建材製造', sub: '熟料取代 SCM', cls: 'fill-rose-500/20 stroke-rose-600' },
          { x: 122, label: 'A4-A5 預鑄施工', sub: '系統模減廢料', cls: 'fill-amber-500/20 stroke-amber-600' },
          { x: 218, label: 'B1-B7 營運節能', sub: 'BERS 1+ 近零碳', cls: 'fill-blue-500/20 stroke-blue-600' },
          { x: 314, label: 'C/D 拆解再生', sub: 'RCA 再生粒料', cls: 'fill-emerald-500/20 stroke-emerald-600' },
        ].map((st, idx) => (
          <g key={idx} transform={`translate(${st.x}, 90)`}>
            <rect width="82" height="86" rx="10" className={st.cls} strokeWidth="1.8" />
            <text x="41" y="36" textAnchor="middle" className="fill-slate-900 dark:fill-white text-[10px] font-bold">{st.label}</text>
            <text x="41" y="58" textAnchor="middle" className="fill-slate-600 dark:fill-slate-300 text-[9px] font-mono">{st.sub}</text>
            {idx < 3 && (
              <line x1="84" y1="43" x2="94" y2="43" stroke="currentColor" strokeWidth="2" className="text-indigo-500" markerEnd={`url(#${m.arrowBlue})`} />
            )}
          </g>
        ))}
        <path d="M 355 182 Q 204 242 65 182" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5 3" className="text-emerald-600" markerEnd={`url(#${m.arrowEmerald})`} />
        <text x="204" y="232" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[10.5px] font-mono font-bold">
          循環營建閉迴路：廢混凝土破碎分選 → 再生骨材／再生綠建材
        </text>
      </LeftCard>
      <RightCard title="低碳建築減碳三大黃金槓桿" subtitle="對準 2050 淨零建築轉型目標">
        <StepRow y={56} num="1" label="低碳混凝土配比" detail="高爐石粉/飛灰取代 30~50% 高碳排熟料" tone="emerald" />
        <StepRow y={114} num="2" label="電弧爐再生鋼筋 ＆ CLT 木構" detail="廢鋼電爐煉鋼減碳逾 60%；木構造生物固碳" tone="blue" />
        <StepRow y={172} num="3" label="乾式可拆解構造 (DfD)" detail="減少濕式打除廢棄物，延長建築結構壽命" tone="indigo" />
      </RightCard>
    </g>
  ),
};
