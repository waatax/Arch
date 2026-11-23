# -*- coding: utf-8 -*-
"""
Blueprint-Dark Vector SVG Diagrams for Vocational High School (高工建築科／統測土木與建築群)
Used by build_vocational_v2.py to inject crisp 1080p engineering illustrations into core TCTE chapters.
"""

VOCATIONAL_SVGS: dict[str, str] = {
    # 1. Beam Internal Stress (ME12: Neutral Axis, Bending sigma = My/I, Transverse Shear tau = VQ/It)
    "beam_internal_stress": """
    <svg viewBox="0 0 640 420" width="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="640" height="420" rx="18" fill="#0B1220" stroke="#334155" stroke-width="2"/>
      <text x="320" y="34" fill="#F8FAFC" font-size="20" font-weight="800" text-anchor="middle">矩形梁斷面：彎曲應力 σ(y) 與 橫向剪應力 τ(y) 分布對照</text>
      <!-- Cross section -->
      <rect x="64" y="86" width="110" height="230" fill="#1E293B" stroke="#38BDF8" stroke-width="3"/>
      <line x1="42" y1="201" x2="205" y2="201" stroke="#F59E0B" stroke-width="2.5" stroke-dasharray="8 6"/>
      <text x="119" y="74" fill="#94A3B8" font-size="16" font-weight="700" text-anchor="middle">寬 b</text>
      <text x="48" y="206" fill="#F59E0B" font-size="16" font-weight="800" text-anchor="end">N.A.</text>
      <text x="119" y="342" fill="#38BDF8" font-size="17" font-weight="700" text-anchor="middle">斷面 b × h</text>
      <!-- Bending stress linear triangle -->
      <line x1="295" y1="86" x2="295" y2="316" stroke="#64748B" stroke-width="2"/>
      <line x1="220" y1="201" x2="390" y2="201" stroke="#F59E0B" stroke-width="2" stroke-dasharray="6 5"/>
      <polygon points="295,86 232,86 295,201" fill="rgba(244,63,94,0.32)" stroke="#FB7185" stroke-width="3"/>
      <polygon points="295,201 358,316 295,316" fill="rgba(16,185,129,0.32)" stroke="#34D399" stroke-width="3"/>
      <text x="242" y="76" fill="#FB7185" font-size="16" font-weight="800">σ_c 壓 (最大)</text>
      <text x="352" y="338" fill="#34D399" font-size="16" font-weight="800" text-anchor="middle">σ_t 拉 (最大)</text>
      <text x="308" y="195" fill="#FDE68A" font-size="15" font-weight="700">σ = 0</text>
      <text x="295" y="378" fill="#F8FAFC" font-size="18" font-weight="800" text-anchor="middle">σ_max = Mc/I = 6M/(bh²)</text>
      <!-- Shear stress parabola -->
      <line x1="465" y1="86" x2="465" y2="316" stroke="#64748B" stroke-width="2"/>
      <line x1="435" y1="201" x2="605" y2="201" stroke="#F59E0B" stroke-width="2" stroke-dasharray="6 5"/>
      <path d="M465,86 Q605,201 465,316 Z" fill="rgba(56,189,248,0.28)" stroke="#38BDF8" stroke-width="3"/>
      <line x1="465" y1="201" x2="535" y2="201" stroke="#38BDF8" stroke-width="4"/>
      <polygon points="535,195 548,201 535,207" fill="#38BDF8"/>
      <text x="548" y="192" fill="#38BDF8" font-size="16" font-weight="800">τ_max</text>
      <text x="548" y="220" fill="#BAE6FD" font-size="15" font-weight="700">= 1.5 V/A</text>
      <text x="480" y="82" fill="#94A3B8" font-size="15">τ = 0 (上下緣)</text>
      <text x="520" y="378" fill="#38BDF8" font-size="18" font-weight="800" text-anchor="middle">τ = VQ/(It) 拋物線</text>
    </svg>
    """,

    # 2. Shear Force & Bending Moment Diagram (ME11)
    "beam_sfd_bmd": """
    <svg viewBox="0 0 640 420" width="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="640" height="420" rx="18" fill="#0B1220" stroke="#334155" stroke-width="2"/>
      <text x="320" y="32" fill="#F8FAFC" font-size="19" font-weight="800" text-anchor="middle">簡支梁受均布載重 w：載重 → 剪力圖 (V) → 彎矩圖 (M) 微分積分關係</text>
      <!-- Beam + Load -->
      <rect x="90" y="82" width="460" height="14" rx="4" fill="#38BDF8"/>
      <rect x="90" y="54" width="460" height="24" fill="rgba(245,158,11,0.25)" stroke="#F59E0B" stroke-width="2"/>
      <text x="320" y="71" fill="#FDE68A" font-size="15" font-weight="800" text-anchor="middle">均布載重 w (kN/m)，跨距 L</text>
      <polygon points="90,96 76,118 104,118" fill="#94A3B8"/>
      <circle cx="550" cy="107" r="11" fill="#94A3B8"/>
      <text x="90" y="136" fill="#34D399" font-size="15" font-weight="700" text-anchor="middle">R_A = wL/2</text>
      <text x="550" y="136" fill="#34D399" font-size="15" font-weight="700" text-anchor="middle">R_B = wL/2</text>
      <!-- SFD -->
      <line x1="90" y1="205" x2="550" y2="205" stroke="#64748B" stroke-width="2"/>
      <polygon points="90,205 90,158 320,205" fill="rgba(56,189,248,0.3)" stroke="#38BDF8" stroke-width="3"/>
      <polygon points="320,205 550,252 550,205" fill="rgba(244,63,94,0.3)" stroke="#FB7185" stroke-width="3"/>
      <text x="46" y="210" fill="#38BDF8" font-size="16" font-weight="800">V 圖</text>
      <text x="112" y="172" fill="#BAE6FD" font-size="15" font-weight="700">+wL/2</text>
      <text x="502" y="246" fill="#FECDD3" font-size="15" font-weight="700">-wL/2</text>
      <circle cx="320" cy="205" r="6" fill="#F59E0B"/>
      <text x="320" y="192" fill="#FDE68A" font-size="14" font-weight="800" text-anchor="middle">V = 0 (危險斷面)</text>
      <!-- BMD -->
      <line x1="90" y1="362" x2="550" y2="362" stroke="#64748B" stroke-width="2"/>
      <path d="M90,362 Q320,248 550,362 Z" fill="rgba(16,185,129,0.28)" stroke="#34D399" stroke-width="3.5"/>
      <text x="46" y="355" fill="#34D399" font-size="16" font-weight="800">M 圖</text>
      <circle cx="320" cy="305" r="6" fill="#F59E0B"/>
      <text x="320" y="290" fill="#FDE68A" font-size="17" font-weight="800" text-anchor="middle">M_max = wL² / 8 (二次拋物線)</text>
      <text x="320" y="396" fill="#CBD5E1" font-size="15" font-weight="700" text-anchor="middle">微積分口訣：dV/dx = -w  ｜  dM/dx = V  ｜  V = 0 處即 M 極值！</text>
    </svg>
    """,

    # 3. Mohr's Circle (ME13)
    "mohrs_circle": """
    <svg viewBox="0 0 640 420" width="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="640" height="420" rx="18" fill="#0B1220" stroke="#334155" stroke-width="2"/>
      <text x="320" y="34" fill="#F8FAFC" font-size="20" font-weight="800" text-anchor="middle">平面應力莫耳圓 (Mohr's Circle)：圓心 C、半徑 R 與 2θ 旋轉法則</text>
      <line x1="65" y1="220" x2="585" y2="220" stroke="#64748B" stroke-width="2.5"/>
      <line x1="150" y1="68" x2="150" y2="368" stroke="#64748B" stroke-width="2.5"/>
      <text x="572" y="208" fill="#94A3B8" font-size="18" font-weight="800">+σ</text>
      <text x="162" y="84" fill="#94A3B8" font-size="18" font-weight="800">+τ</text>
      <circle cx="350" cy="220" r="122" fill="rgba(56,189,248,0.12)" stroke="#38BDF8" stroke-width="3.5"/>
      <line x1="264" y1="306" x2="436" y2="134" stroke="#F59E0B" stroke-width="3"/>
      <circle cx="350" cy="220" r="6" fill="#F59E0B"/>
      <circle cx="472" cy="220" r="7" fill="#34D399"/>
      <circle cx="228" cy="220" r="7" fill="#34D399"/>
      <circle cx="350" cy="98" r="7" fill="#FB7185"/>
      <circle cx="436" cy="134" r="6" fill="#FDE68A"/>
      <text x="358" y="246" fill="#FDE68A" font-size="16" font-weight="800">C (σ_avg, 0)</text>
      <text x="480" y="244" fill="#34D399" font-size="17" font-weight="800">σ_1 = C + R</text>
      <text x="218" y="246" fill="#34D399" font-size="17" font-weight="800" text-anchor="end">σ_2 = C - R</text>
      <text x="350" y="84" fill="#FB7185" font-size="16" font-weight="800" text-anchor="middle">τ_max = R</text>
      <text x="448" y="128" fill="#FDE68A" font-size="15" font-weight="700">X (σ_x, τ_xy)</text>
      <text x="320" y="395" fill="#E2E8F0" font-size="16" font-weight="700" text-anchor="middle">C = (σ_x+σ_y)/2 ｜ R = √[((σ_x-σ_y)/2)² + τ_xy²] ｜ 實體轉 θ = 圓上轉 2θ</text>
    </svg>
    """,

    # 4. Concrete W/C Ratio & Sieve FM (MT3 / MATL14)
    "concrete_wc_sieve": """
    <svg viewBox="0 0 640 420" width="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="640" height="420" rx="18" fill="#0B1220" stroke="#334155" stroke-width="2"/>
      <text x="320" y="34" fill="#F8FAFC" font-size="20" font-weight="800" text-anchor="middle">亞伯蘭水灰比定律 (W/C) × 細骨材細度模數 (FM) 品管曲線</text>
      <!-- Axes -->
      <line x1="85" y1="320" x2="365" y2="320" stroke="#94A3B8" stroke-width="2.5"/>
      <line x1="85" y1="80" x2="85" y2="320" stroke="#94A3B8" stroke-width="2.5"/>
      <text x="225" y="352" fill="#94A3B8" font-size="16" font-weight="700" text-anchor="middle">水灰比 W/C (0.35 → 0.70)</text>
      <text x="42" y="200" fill="#38BDF8" font-size="16" font-weight="700" transform="rotate(-90 42 200)" text-anchor="middle">28天抗壓強度 f'c</text>
      <!-- Curve -->
      <path d="M105,102 Q185,210 345,294" fill="none" stroke="#34D399" stroke-width="4.5"/>
      <circle cx="155" cy="166" r="7" fill="#F59E0B"/>
      <text x="168" y="158" fill="#FDE68A" font-size="15" font-weight="800">W/C 愈低 → 強度愈高</text>
      <text x="168" y="180" fill="#A7F3D0" font-size="14">孔隙率低、抗滲耐久佳</text>
      <circle cx="300" cy="272" r="7" fill="#FB7185"/>
      <text x="200" y="268" fill="#FECDD3" font-size="14" font-weight="700">工地亂加水 → 強度暴跌!</text>
      <!-- Right info box: FM & Chloride -->
      <rect x="392" y="78" width="220" height="114" rx="14" fill="#1E293B" stroke="#38BDF8" stroke-width="2"/>
      <text x="502" y="108" fill="#38BDF8" font-size="17" font-weight="800" text-anchor="middle">細骨材細度模數 FM</text>
      <text x="502" y="136" fill="#FDE68A" font-size="16" font-weight="700" text-anchor="middle">FM = Σ累積停留% / 100</text>
      <text x="502" y="164" fill="#CBD5E1" font-size="14" text-anchor="middle">標準範圍 2.3 ~ 3.1 (7支標準篩)</text>
      <text x="502" y="184" fill="#34D399" font-size="13" text-anchor="middle">數值愈大 = 砂粒愈粗</text>
      <rect x="392" y="208" width="220" height="114" rx="14" fill="#1E293B" stroke="#F59E0B" stroke-width="2"/>
      <text x="502" y="238" fill="#FBBF24" font-size="17" font-weight="800" text-anchor="middle">CNS 3090 氯離子上限</text>
      <text x="502" y="268" fill="#FECDD3" font-size="16" font-weight="800" text-anchor="middle">一般 RC ≤ 0.15 kg/m³</text>
      <text x="502" y="294" fill="#CBD5E1" font-size="14" text-anchor="middle">防海砂屋鋼筋電化學鏽蝕</text>
      <text x="320" y="394" fill="#CBD5E1" font-size="15" font-weight="700" text-anchor="middle">統測鐵律：工地嚴禁現場加水調稀；坍度不足應添加合法強塑劑！</text>
    </svg>
    """,

    # 5. Surveying Leveling & Angle / Azimuth (SV3 / SV4 / SURV09)
    "surveying_azimuth_angle": """
    <svg viewBox="0 0 640 420" width="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="640" height="420" rx="18" fill="#0B1220" stroke="#334155" stroke-width="2"/>
      <text x="320" y="34" fill="#F8FAFC" font-size="20" font-weight="800" text-anchor="middle">測量定向：全圓方位角 φ (0°–360°) × 象限方向角 × 正倒鏡消差</text>
      <!-- Compass circle -->
      <circle cx="190" cy="215" r="118" fill="rgba(56,189,248,0.08)" stroke="#38BDF8" stroke-width="2.5"/>
      <line x1="190" y1="82" x2="190" y2="348" stroke="#64748B" stroke-width="2"/>
      <line x1="58" y1="215" x2="322" y2="215" stroke="#64748B" stroke-width="2"/>
      <text x="190" y="74" fill="#F59E0B" font-size="18" font-weight="900" text-anchor="middle">N (0°)</text>
      <text x="336" y="221" fill="#94A3B8" font-size="16" font-weight="700">E (90°)</text>
      <text x="190" y="368" fill="#94A3B8" font-size="16" font-weight="700" text-anchor="middle">S (180°)</text>
      <text x="42" y="221" fill="#94A3B8" font-size="16" font-weight="700" text-anchor="end">W</text>
      <!-- Azimuth vector -->
      <line x1="190" y1="215" x2="278" y2="275" stroke="#34D399" stroke-width="4"/>
      <path d="M190,152 A63,63 0 0,1 242,251" fill="none" stroke="#F59E0B" stroke-width="3"/>
      <text x="255" y="176" fill="#FDE68A" font-size="16" font-weight="800">方位角 φ</text>
      <text x="284" y="294" fill="#34D399" font-size="15" font-weight="800">P (S θ E)</text>
      <!-- Right formulas -->
      <rect x="368" y="76" width="244" height="122" rx="14" fill="#1E293B" stroke="#F59E0B" stroke-width="2"/>
      <text x="490" y="106" fill="#FBBF24" font-size="17" font-weight="800" text-anchor="middle">坐標增量口訣</text>
      <text x="490" y="138" fill="#F8FAFC" font-size="18" font-weight="800" text-anchor="middle">ΔN = L · cos φ (北餘弦)</text>
      <text x="490" y="168" fill="#38BDF8" font-size="18" font-weight="800" text-anchor="middle">ΔE = L · sin φ (東正弦)</text>
      <rect x="368" y="214" width="244" height="130" rx="14" fill="#1E293B" stroke="#10B981" stroke-width="2"/>
      <text x="490" y="244" fill="#34D399" font-size="17" font-weight="800" text-anchor="middle">正倒鏡 (FL/FR) 消差檢核</text>
      <text x="490" y="274" fill="#E2E8F0" font-size="15" text-anchor="middle">✅ 消除：視準軸誤差 c、橫軸誤差 i</text>
      <text x="490" y="300" fill="#E2E8F0" font-size="15" text-anchor="middle">✅ 消除：度盤偏心差、垂直指標差</text>
      <text x="490" y="328" fill="#FECDD3" font-size="15" font-weight="800" text-anchor="middle">❌ 無法消除：豎軸不鉛垂！</text>
      <text x="320" y="400" fill="#CBD5E1" font-size="15" font-weight="700" text-anchor="middle">天頂距正倒鏡檢核：Z_L + Z_R = 360° ｜ 指標差 x = (Z_L + Z_R − 360°) / 2</text>
    </svg>
    """,

    # 6. Drafting Projection Quadrants (DR5 / DRFT17)
    "drafting_quadrants": """
    <svg viewBox="0 0 640 420" width="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="640" height="420" rx="18" fill="#0B1220" stroke="#334155" stroke-width="2"/>
      <text x="320" y="34" fill="#F8FAFC" font-size="20" font-weight="800" text-anchor="middle">第一角法 vs 第三角法（CNS 標準）：象限投影與三視圖排列</text>
      <!-- Left: First angle -->
      <rect x="36" y="64" width="270" height="290" rx="14" fill="#1E293B" stroke="#F59E0B" stroke-width="2"/>
      <text x="171" y="96" fill="#FBBF24" font-size="18" font-weight="800" text-anchor="middle">第一角法（歐規）</text>
      <text x="171" y="122" fill="#CBD5E1" font-size="15" text-anchor="middle">順序：觀察者 → 物體 → 投影面</text>
      <rect x="132" y="144" width="78" height="62" rx="6" fill="rgba(56,189,248,0.2)" stroke="#38BDF8" stroke-width="2.5"/>
      <text x="171" y="181" fill="#F8FAFC" font-size="16" font-weight="800" text-anchor="middle">前視圖</text>
      <rect x="132" y="220" width="78" height="52" rx="6" fill="rgba(245,158,11,0.2)" stroke="#F59E0B" stroke-width="2.5"/>
      <text x="171" y="251" fill="#FDE68A" font-size="15" font-weight="800" text-anchor="middle">俯視在下</text>
      <rect x="48" y="144" width="70" height="62" rx="6" fill="rgba(16,185,129,0.2)" stroke="#10B981" stroke-width="2"/>
      <text x="83" y="180" fill="#A7F3D0" font-size="14" font-weight="700" text-anchor="middle">右側在左</text>
      <text x="171" y="318" fill="#94A3B8" font-size="14" text-anchor="middle">點投影：a' 在基線 GL 上，a 在下</text>
      <!-- Right: Third angle -->
      <rect x="334" y="64" width="270" height="290" rx="14" fill="#1E293B" stroke="#38BDF8" stroke-width="3"/>
      <text x="469" y="96" fill="#38BDF8" font-size="18" font-weight="800" text-anchor="middle">第三角法（台灣 CNS 標準）</text>
      <text x="469" y="122" fill="#BAE6FD" font-size="15" font-weight="700" text-anchor="middle">順序：觀察者 → 投影面 → 物體</text>
      <rect x="394" y="140" width="78" height="52" rx="6" fill="rgba(245,158,11,0.22)" stroke="#F59E0B" stroke-width="2.5"/>
      <text x="433" y="171" fill="#FDE68A" font-size="15" font-weight="800" text-anchor="middle">俯視在上</text>
      <rect x="394" y="206" width="78" height="62" rx="6" fill="rgba(56,189,248,0.25)" stroke="#38BDF8" stroke-width="2.5"/>
      <text x="433" y="243" fill="#F8FAFC" font-size="16" font-weight="800" text-anchor="middle">前視圖</text>
      <rect x="486" y="206" width="78" height="62" rx="6" fill="rgba(16,185,129,0.22)" stroke="#34D399" stroke-width="2.5"/>
      <text x="525" y="243" fill="#A7F3D0" font-size="15" font-weight="800" text-anchor="middle">右側在右</text>
      <text x="469" y="318" fill="#A7F3D0" font-size="14" font-weight="700" text-anchor="middle">點投影：a 在基線 GL 上，a' 在下</text>
      <text x="320" y="394" fill="#E2E8F0" font-size="16" font-weight="700" text-anchor="middle">三視圖對齊鐵律：長對正（前俯）｜高平齊（前側）｜寬相等（俯側 45° 折線）</text>
    </svg>
    """,
}

TOPIC_SVG_MAPPING: dict[tuple[str, str], str] = {
    ("mechanics", "beam"): "beam_sfd_bmd",
    ("mechanics", "beam-internal-stress"): "beam_internal_stress",
    ("mechanics", "plane-stress"): "mohrs_circle",
    ("materials", "concrete"): "concrete_wc_sieve",
    ("materials", "concrete-aggregates-chloride-qc"): "concrete_wc_sieve",
    ("surveying", "distance-and-angle"): "surveying_azimuth_angle",
    ("surveying", "traverse-surveying"): "surveying_azimuth_angle",
    ("surveying", "angle-surveying-calibration"): "surveying_azimuth_angle",
    ("drafting", "orthographic-projection"): "drafting_quadrants",
    ("drafting", "projection-principles"): "drafting_quadrants",
}
