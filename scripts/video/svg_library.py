# -*- coding: utf-8 -*-
"""
Bespoke 108-Curriculum Vector SVG Diagram Library for High School Math C (MC01 - MC15)
Dark Architectural Blueprint Palette (#0B1220 canvas, #38BDF8 cyan, #F59E0B amber, #10B981 emerald, #F43F5E rose)
"""

SVGS = {
    # ================= MC01: 坐標系與函數圖形 =================
    "functions-graphs": [
        # 0: Number line absolute value
        """<svg viewBox="0 0 820 270" width="100%" height="270" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="820" height="270" rx="18" fill="#0B1220" stroke="#1E293B" stroke-width="2"/>
  <text x="36" y="42" fill="#34D399" font-size="22" font-weight="700">|x − a| ≤ b ：夾在中間（到中心 a 距離不超過 b）</text>
  <line x1="70" y1="98" x2="750" y2="98" stroke="#475569" stroke-width="3"/>
  <polygon points="750,91 766,98 750,105" fill="#475569"/>
  <rect x="250" y="88" width="320" height="20" rx="10" fill="rgba(16,185,129,0.35)" stroke="#10B981" stroke-width="2.5"/>
  <circle cx="250" cy="98" r="8" fill="#10B981"/><circle cx="410" cy="98" r="8" fill="#F59E0B"/><circle cx="570" cy="98" r="8" fill="#10B981"/>
  <text x="250" y="132" text-anchor="middle" fill="#E2E8F0" font-size="20" font-weight="700">a − b</text>
  <text x="410" y="132" text-anchor="middle" fill="#FBBF24" font-size="20" font-weight="700">中心 a</text>
  <text x="570" y="132" text-anchor="middle" fill="#E2E8F0" font-size="20" font-weight="700">a + b</text>
  <text x="36" y="180" fill="#FB7185" font-size="22" font-weight="700">|x − a| ≥ b ：落在兩側（離中心 a 至少 b）</text>
  <line x1="70" y1="224" x2="750" y2="224" stroke="#475569" stroke-width="3"/>
  <rect x="80" y="214" width="170" height="20" rx="10" fill="rgba(244,63,94,0.35)" stroke="#F43F5E" stroke-width="2.5"/>
  <rect x="570" y="214" width="170" height="20" rx="10" fill="rgba(244,63,94,0.35)" stroke="#F43F5E" stroke-width="2.5"/>
  <circle cx="250" cy="224" r="8" fill="#F43F5E"/><circle cx="410" cy="224" r="7" fill="#94A3B8"/><circle cx="570" cy="224" r="8" fill="#F43F5E"/>
  <text x="165" y="254" text-anchor="middle" fill="#FDA4AF" font-size="19" font-weight="700">x ≤ a − b</text>
  <text x="655" y="254" text-anchor="middle" fill="#FDA4AF" font-size="19" font-weight="700">x ≥ a + b</text>
</svg>""",
        # 1: Section point cross-weight
        """<svg viewBox="0 0 760 300" width="100%" height="300" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="760" height="300" rx="18" fill="#0B1220" stroke="#1E293B" stroke-width="2"/>
  <line x1="120" y1="150" x2="293" y2="150" stroke="#38BDF8" stroke-width="8" stroke-linecap="round"/>
  <line x1="293" y1="150" x2="640" y2="150" stroke="#F59E0B" stroke-width="8" stroke-linecap="round"/>
  <circle cx="120" cy="150" r="12" fill="#38BDF8"/><circle cx="293" cy="150" r="14" fill="#10B981" stroke="#ECFDF5" stroke-width="3"/><circle cx="640" cy="150" r="12" fill="#F59E0B"/>
  <text x="120" y="198" text-anchor="middle" fill="#E2E8F0" font-size="23" font-weight="700">A(x₁, y₁)</text>
  <text x="293" y="204" text-anchor="middle" fill="#34D399" font-size="25" font-weight="800">P</text>
  <text x="640" y="198" text-anchor="middle" fill="#E2E8F0" font-size="23" font-weight="700">B(x₂, y₂)</text>
  <text x="206" y="114" text-anchor="middle" fill="#38BDF8" font-size="24" font-weight="800">m</text>
  <text x="466" y="114" text-anchor="middle" fill="#FBBF24" font-size="24" font-weight="800">n</text>
  <rect x="110" y="232" width="540" height="48" rx="12" fill="rgba(16,185,129,0.16)" stroke="#10B981" stroke-width="2"/>
  <text x="380" y="264" text-anchor="middle" fill="#ECFDF5" font-size="22" font-weight="700">交叉配重：P = (n·A + m·B) / (m + n)</text>
</svg>""",
        # 2: Parabola signs
        """<svg viewBox="0 0 640 400" width="100%" height="400" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="640" height="400" rx="18" fill="#0B1220" stroke="#1E293B" stroke-width="2"/>
  <line x1="50" y1="240" x2="590" y2="240" stroke="#64748B" stroke-width="2.5"/>
  <line x1="210" y1="375" x2="210" y2="30" stroke="#64748B" stroke-width="2.5"/>
  <line x1="360" y1="50" x2="360" y2="360" stroke="#F59E0B" stroke-width="2.5" stroke-dasharray="7,6"/>
  <path d="M 165,380 Q 360,-180 555,380" fill="none" stroke="#38BDF8" stroke-width="5"/>
  <circle cx="360" cy="100" r="9" fill="#F59E0B"/><text x="376" y="108" fill="#FBBF24" font-size="21" font-weight="700">頂點 h = −b/(2a) &gt; 0</text>
  <circle cx="210" cy="266" r="9" fill="#FB7185"/><text x="115" y="290" fill="#FDA4AF" font-size="22" font-weight="700">c &lt; 0</text>
  <circle cx="222" cy="240" r="8" fill="#10B981"/><circle cx="498" cy="240" r="8" fill="#10B981"/>
  <text x="506" y="224" fill="#34D399" font-size="20" font-weight="700">兩交點 ⇒ D &gt; 0</text>
</svg>""",
    ],

    # ================= MC02: 三角函數 =================
    "trigonometry": [
        # 0: Unit circle & ASTC
        """<svg viewBox="0 0 640 420" width="100%" height="420" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="640" height="420" rx="18" fill="#0B1220" stroke="#1E293B" stroke-width="2"/>
  <line x1="60" y1="210" x2="580" y2="210" stroke="#64748B" stroke-width="2.5"/>
  <line x1="320" y1="390" x2="320" y2="30" stroke="#64748B" stroke-width="2.5"/>
  <circle cx="320" cy="210" r="145" fill="rgba(56,189,248,0.08)" stroke="#38BDF8" stroke-width="3.5"/>
  <!-- Angle ray 50 deg -->
  <line x1="320" y1="210" x2="413" y2="99" stroke="#F59E0B" stroke-width="4.5"/>
  <line x1="413" y1="99" x2="413" y2="210" stroke="#10B981" stroke-width="3" stroke-dasharray="6,5"/>
  <line x1="320" y1="210" x2="413" y2="210" stroke="#38BDF8" stroke-width="4"/>
  <circle cx="413" cy="99" r="9" fill="#F59E0B"/>
  <text x="428" y="96" fill="#FBBF24" font-size="21" font-weight="800">P(cosθ, sinθ)</text>
  <text x="424" y="162" fill="#34D399" font-size="20" font-weight="700">sinθ</text>
  <text x="355" y="236" fill="#38BDF8" font-size="20" font-weight="700">cosθ</text>
  <!-- ASTC -->
  <text x="495" y="75" fill="#34D399" font-size="24" font-weight="900">I：All 全正</text>
  <text x="85" y="75" fill="#38BDF8" font-size="24" font-weight="900">II：Sin 正</text>
  <text x="85" y="365" fill="#FBBF24" font-size="24" font-weight="900">III：Tan 正</text>
  <text x="485" y="365" fill="#FB7185" font-size="24" font-weight="900">IV：Cos 正</text>
</svg>""",
        # 1: Sector arc length & area + special triangles
        """<svg viewBox="0 0 760 300" width="100%" height="300" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="760" height="300" rx="18" fill="#0B1220" stroke="#1E293B" stroke-width="2"/>
  <!-- Left: Sector -->
  <path d="M 110,235 L 290,235 A 180,180 0 0,0 200,79 Z" fill="rgba(56,189,248,0.22)" stroke="#38BDF8" stroke-width="4"/>
  <text x="195" y="265" text-anchor="middle" fill="#E2E8F0" font-size="22" font-weight="700">半徑 r</text>
  <text x="165" y="210" fill="#FBBF24" font-size="23" font-weight="800">θ (弧度)</text>
  <text x="278" y="140" fill="#34D399" font-size="23" font-weight="800">弧長 s = rθ</text>
  <text x="278" y="176" fill="#FBBF24" font-size="22" font-weight="700">面積 A = ½ r²θ</text>
  <!-- Right: 30-60-90 triangle -->
  <polygon points="460,235 690,235 690,102" fill="rgba(245,158,11,0.16)" stroke="#F59E0B" stroke-width="4"/>
  <rect x="670" y="215" width="20" height="20" fill="none" stroke="#F59E0B" stroke-width="2"/>
  <text x="575" y="266" text-anchor="middle" fill="#38BDF8" font-size="22" font-weight="800">√3</text>
  <text x="712" y="176" fill="#34D399" font-size="22" font-weight="800">1</text>
  <text x="556" y="154" fill="#FBBF24" font-size="22" font-weight="800">2</text>
  <text x="506" y="224" fill="#E2E8F0" font-size="20" font-weight="700">30°</text>
  <text x="645" y="148" fill="#E2E8F0" font-size="20" font-weight="700">60°</text>
</svg>""",
        # 2: Sine wave period & amplitude
        """<svg viewBox="0 0 760 280" width="100%" height="280" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="760" height="280" rx="18" fill="#0B1220" stroke="#1E293B" stroke-width="2"/>
  <line x1="60" y1="150" x2="710" y2="150" stroke="#64748B" stroke-width="2.5"/>
  <line x1="110" y1="255" x2="110" y2="30" stroke="#64748B" stroke-width="2.5"/>
  <path d="M 110,150 C 170,40 230,40 290,150 C 350,260 410,260 470,150 C 530,40 590,40 650,150" fill="none" stroke="#38BDF8" stroke-width="5"/>
  <line x1="110" y1="68" x2="650" y2="68" stroke="#F59E0B" stroke-width="2" stroke-dasharray="6,6"/>
  <line x1="110" y1="232" x2="650" y2="232" stroke="#F59E0B" stroke-width="2" stroke-dasharray="6,6"/>
  <text x="72" y="75" fill="#FBBF24" font-size="20" font-weight="700">+A</text>
  <text x="72" y="238" fill="#FBBF24" font-size="20" font-weight="700">−A</text>
  <line x1="110" y1="42" x2="470" y2="42" stroke="#10B981" stroke-width="3"/>
  <text x="290" y="34" text-anchor="middle" fill="#34D399" font-size="21" font-weight="800">週期 T = 2π / |b|</text>
</svg>""",
    ],

    # ================= MC03: 平面向量 =================
    "vectors": [
        # 0: Vector addition parallelogram
        """<svg viewBox="0 0 640 380" width="100%" height="380" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="640" height="380" rx="18" fill="#0B1220" stroke="#1E293B" stroke-width="2"/>
  <polygon points="110,300 370,300 510,120 250,120" fill="rgba(56,189,248,0.10)" stroke="#475569" stroke-width="2" stroke-dasharray="7,6"/>
  <line x1="110" y1="300" x2="370" y2="300" stroke="#38BDF8" stroke-width="6"/>
  <polygon points="365,290 385,300 365,310" fill="#38BDF8"/>
  <line x1="110" y1="300" x2="250" y2="120" stroke="#10B981" stroke-width="6"/>
  <polygon points="237,124 256,112 253,134" fill="#10B981"/>
  <line x1="110" y1="300" x2="505" y2="125" stroke="#F59E0B" stroke-width="6"/>
  <polygon points="495,119 516,120 503,137" fill="#F59E0B"/>
  <text x="240" y="336" text-anchor="middle" fill="#38BDF8" font-size="24" font-weight="800">向量 a</text>
  <text x="148" y="195" fill="#34D399" font-size="24" font-weight="800">向量 b</text>
  <text x="345" y="182" fill="#FBBF24" font-size="25" font-weight="800">合力 a + b</text>
</svg>""",
        # 1: Dot product & orthogonal projection
        """<svg viewBox="0 0 760 300" width="100%" height="300" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="760" height="300" rx="18" fill="#0B1220" stroke="#1E293B" stroke-width="2"/>
  <line x1="100" y1="230" x2="640" y2="230" stroke="#38BDF8" stroke-width="6"/>
  <polygon points="636,220 656,230 636,240" fill="#38BDF8"/>
  <line x1="100" y1="230" x2="390" y2="85" stroke="#F59E0B" stroke-width="6"/>
  <polygon points="380,79 402,79 389,97" fill="#F59E0B"/>
  <line x1="390" y1="85" x2="390" y2="230" stroke="#94A3B8" stroke-width="2.5" stroke-dasharray="6,6"/>
  <rect x="372" y="212" width="18" height="18" fill="none" stroke="#94A3B8" stroke-width="2"/>
  <line x1="100" y1="230" x2="390" y2="230" stroke="#10B981" stroke-width="10"/>
  <text x="235" y="138" fill="#FBBF24" font-size="24" font-weight="800">a</text>
  <text x="530" y="264" fill="#38BDF8" font-size="24" font-weight="800">b</text>
  <text x="245" y="268" text-anchor="middle" fill="#34D399" font-size="22" font-weight="800">正射影長 = |a| cosθ = (a·b)/|b|</text>
  <text x="175" y="214" fill="#E2E8F0" font-size="22" font-weight="700">θ</text>
</svg>""",
    ],

    # ================= MC04: 式的運算 =================
    "algebra": [
        # 0: Polynomial division / Remainder Theorem flow
        """<svg viewBox="0 0 760 280" width="100%" height="280" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="760" height="280" rx="18" fill="#0B1220" stroke="#1E293B" stroke-width="2"/>
  <rect x="45" y="55" width="670" height="72" rx="14" fill="#1E293B" stroke="#38BDF8" stroke-width="2.5"/>
  <text x="380" y="100" text-anchor="middle" fill="#F8FAFC" font-size="28" font-weight="800">f(x) = (ax − b) · Q(x) + r</text>
  <line x1="250" y1="128" x2="250" y2="178" stroke="#F59E0B" stroke-width="4"/>
  <polygon points="240,174 250,192 260,174" fill="#F59E0B"/>
  <rect x="65" y="192" width="630" height="62" rx="12" fill="rgba(16,185,129,0.16)" stroke="#10B981" stroke-width="2.5"/>
  <text x="380" y="232" text-anchor="middle" fill="#34D399" font-size="24" font-weight="800">代入 x = b/a ⇒ 餘式 r = f(b/a) ｜ 若 r = 0 則 (ax − b) 為因式！</text>
</svg>""",
        # 1: Complex i cycle
        """<svg viewBox="0 0 640 360" width="100%" height="360" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="640" height="360" rx="18" fill="#0B1220" stroke="#1E293B" stroke-width="2"/>
  <circle cx="320" cy="180" r="115" fill="none" stroke="#38BDF8" stroke-width="3" stroke-dasharray="8,6"/>
  <circle cx="320" cy="65" r="28" fill="#F59E0B"/><text x="320" y="73" text-anchor="middle" fill="#0F172A" font-size="22" font-weight="900">i¹=i</text>
  <circle cx="205" cy="180" r="32" fill="#F43F5E"/><text x="205" y="188" text-anchor="middle" fill="#FFF" font-size="21" font-weight="900">i²=−1</text>
  <circle cx="320" cy="295" r="32" fill="#38BDF8"/><text x="320" y="303" text-anchor="middle" fill="#0F172A" font-size="21" font-weight="900">i³=−i</text>
  <circle cx="435" cy="180" r="32" fill="#10B981"/><text x="435" y="188" text-anchor="middle" fill="#0F172A" font-size="21" font-weight="900">i⁴=1</text>
  <text x="320" y="188" text-anchor="middle" fill="#FDE68A" font-size="24" font-weight="800">每 4 次一循環</text>
</svg>""",
    ],

    # ================= MC05: 直線與圓 =================
    "lines-circles": [
        # 0: Circle and line 3 cases
        """<svg viewBox="0 0 780 300" width="100%" height="300" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="780" height="300" rx="18" fill="#0B1220" stroke="#1E293B" stroke-width="2"/>
  <!-- Case 1: d < r -->
  <circle cx="140" cy="135" r="68" fill="rgba(56,189,248,0.12)" stroke="#38BDF8" stroke-width="3.5"/>
  <line x1="65" y1="168" x2="225" y2="168" stroke="#10B981" stroke-width="4"/>
  <circle cx="140" cy="135" r="5" fill="#F59E0B"/>
  <text x="140" y="242" text-anchor="middle" fill="#34D399" font-size="21" font-weight="800">d &lt; r：相交兩點（割線）</text>
  <!-- Case 2: d = r -->
  <circle cx="390" cy="135" r="68" fill="rgba(245,158,11,0.14)" stroke="#F59E0B" stroke-width="3.5"/>
  <line x1="305" y1="203" x2="475" y2="203" stroke="#F59E0B" stroke-width="4"/>
  <circle cx="390" cy="135" r="5" fill="#F59E0B"/><circle cx="390" cy="203" r="6" fill="#F59E0B"/>
  <line x1="390" y1="135" x2="390" y2="203" stroke="#FBBF24" stroke-width="2.5" stroke-dasharray="5,4"/>
  <text x="390" y="242" text-anchor="middle" fill="#FBBF24" font-size="21" font-weight="800">d = r：相切一點（切線）</text>
  <!-- Case 3: d > r -->
  <circle cx="640" cy="122" r="62" fill="rgba(244,63,94,0.10)" stroke="#FB7185" stroke-width="3.5"/>
  <line x1="560" y1="208" x2="720" y2="208" stroke="#F43F5E" stroke-width="4"/>
  <circle cx="640" cy="122" r="5" fill="#F59E0B"/>
  <text x="640" y="242" text-anchor="middle" fill="#FDA4AF" font-size="21" font-weight="800">d &gt; r：不相交（相離）</text>
</svg>""",
    ],

    # ================= MC06: 數列與級數 =================
    "sequences-series": [
        """<svg viewBox="0 0 760 290" width="100%" height="290" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="760" height="290" rx="18" fill="#0B1220" stroke="#1E293B" stroke-width="2"/>
  <text x="45" y="48" fill="#38BDF8" font-size="23" font-weight="800">等差數列（每次 +d，線性階梯）</text>
  <rect x="55" y="195" width="46" height="45" rx="6" fill="#0284C7"/>
  <rect x="115" y="165" width="46" height="75" rx="6" fill="#0EA5E9"/>
  <rect x="175" y="135" width="46" height="105" rx="6" fill="#38BDF8"/>
  <rect x="235" y="105" width="46" height="135" rx="6" fill="#7DD3FC"/>
  <text x="170" y="270" text-anchor="middle" fill="#CBD5E1" font-size="19">Sₙ = n(a₁ + aₙ) / 2</text>

  <text x="410" y="48" fill="#FBBF24" font-size="23" font-weight="800">無窮等比級數（|r| &lt; 1 收斂）</text>
  <rect x="420" y="88" width="290" height="150" rx="10" fill="rgba(245,158,11,0.12)" stroke="#F59E0B" stroke-width="2.5"/>
  <rect x="420" y="88" width="145" height="150" fill="rgba(245,158,11,0.32)" stroke="#F59E0B"/>
  <rect x="565" y="88" width="145" height="75" fill="rgba(16,185,129,0.30)" stroke="#10B981"/>
  <rect x="565" y="163" width="72" height="75" fill="rgba(56,189,248,0.30)" stroke="#38BDF8"/>
  <text x="492" y="170" text-anchor="middle" fill="#FDE68A" font-size="22" font-weight="800">1/2</text>
  <text x="637" y="133" text-anchor="middle" fill="#A7F3D0" font-size="21" font-weight="800">1/4</text>
  <text x="601" y="208" text-anchor="middle" fill="#BAE6FD" font-size="19" font-weight="800">1/8</text>
  <text x="565" y="270" text-anchor="middle" fill="#FDE68A" font-size="19" font-weight="700">S = a₁ / (1 − r)（前提：−1 &lt; r &lt; 1）</text>
</svg>""",
    ],

    # ================= MC07: 排列組合 =================
    "permutations-combinations": [
        """<svg viewBox="0 0 760 280" width="100%" height="280" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="760" height="280" rx="18" fill="#0B1220" stroke="#1E293B" stroke-width="2"/>
  <rect x="40" y="45" width="320" height="190" rx="16" fill="rgba(56,189,248,0.12)" stroke="#38BDF8" stroke-width="2.5"/>
  <text x="200" y="88" text-anchor="middle" fill="#38BDF8" font-size="25" font-weight="900">排列 P(n, k)：講究順序</text>
  <text x="200" y="138" text-anchor="middle" fill="#F8FAFC" font-size="28" font-weight="800">AB ≠ BA</text>
  <text x="200" y="184" text-anchor="middle" fill="#CBD5E1" font-size="20">選班長＋副班長、排座位</text>
  <text x="200" y="216" text-anchor="middle" fill="#FBBF24" font-size="21" font-weight="700">P(n,k) = n! / (n − k)!</text>

  <rect x="400" y="45" width="320" height="190" rx="16" fill="rgba(16,185,129,0.12)" stroke="#10B981" stroke-width="2.5"/>
  <text x="560" y="88" text-anchor="middle" fill="#34D399" font-size="25" font-weight="900">組合 C(n, k)：不管順序</text>
  <text x="560" y="138" text-anchor="middle" fill="#F8FAFC" font-size="28" font-weight="800">AB = BA</text>
  <text x="560" y="184" text-anchor="middle" fill="#CBD5E1" font-size="20">抽 2 位代表、選題目</text>
  <text x="560" y="216" text-anchor="middle" fill="#34D399" font-size="21" font-weight="700">C(n,k) = P(n,k) / k!</text>
</svg>""",
    ],

    # ================= MC08: 三角函數的應用 =================
    "trig-applications": [
        # 0: Complex Polar Form (for concept 2)
        """<svg viewBox="0 0 640 380" width="100%" height="380" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="640" height="380" rx="18" fill="#0B1220" stroke="#1E293B" stroke-width="2"/>
  <line x1="80" y1="290" x2="570" y2="290" stroke="#64748B" stroke-width="2.5"/>
  <line x1="160" y1="345" x2="160" y2="35" stroke="#64748B" stroke-width="2.5"/>
  <text x="556" y="318" fill="#94A3B8" font-size="20" font-weight="700">實軸 Re</text>
  <text x="172" y="55" fill="#94A3B8" font-size="20" font-weight="700">虛軸 Im</text>
  <line x1="160" y1="290" x2="430" y2="115" stroke="#F59E0B" stroke-width="5"/>
  <line x1="430" y1="115" x2="430" y2="290" stroke="#10B981" stroke-width="3" stroke-dasharray="6,5"/>
  <line x1="160" y1="290" x2="430" y2="290" stroke="#38BDF8" stroke-width="4"/>
  <circle cx="430" cy="115" r="10" fill="#F59E0B"/>
  <text x="444" y="108" fill="#FBBF24" font-size="22" font-weight="800">z = a + bi</text>
  <text x="444" y="138" fill="#BAE6FD" font-size="20" font-weight="700">= r(cosθ + i sinθ)</text>
  <text x="275" y="185" fill="#FBBF24" font-size="23" font-weight="800">r = |z|</text>
  <text x="442" y="212" fill="#34D399" font-size="20" font-weight="700">b = r sinθ</text>
  <text x="295" y="320" text-anchor="middle" fill="#38BDF8" font-size="20" font-weight="700">a = r cosθ</text>
  <text x="225" y="275" fill="#E2E8F0" font-size="21" font-weight="700">θ (輻角)</text>
</svg>""",
        # 1: Elevation / Surveying triangle (for concept 4)
        """<svg viewBox="0 0 640 380" width="100%" height="380" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="640" height="380" rx="18" fill="#0B1220" stroke="#1E293B" stroke-width="2"/>
  <line x1="55" y1="315" x2="585" y2="315" stroke="#64748B" stroke-width="3"/>
  <!-- Building -->
  <rect x="440" y="95" width="95" height="220" fill="#1E293B" stroke="#38BDF8" stroke-width="3"/>
  <line x1="440" y1="95" x2="115" y2="315" stroke="#F59E0B" stroke-width="4" stroke-dasharray="8,5"/>
  <line x1="440" y1="95" x2="265" y2="315" stroke="#10B981" stroke-width="4" stroke-dasharray="8,5"/>
  <circle cx="115" cy="315" r="8" fill="#F59E0B"/>
  <circle cx="265" cy="315" r="8" fill="#10B981"/>
  <text x="115" y="346" text-anchor="middle" fill="#FBBF24" font-size="20" font-weight="800">測站 A（仰角 30°）</text>
  <text x="265" y="346" text-anchor="middle" fill="#34D399" font-size="20" font-weight="800">測站 B（45°）</text>
  <text x="550" y="210" fill="#38BDF8" font-size="23" font-weight="800">樓高 h</text>
  <text x="190" y="302" text-anchor="middle" fill="#E2E8F0" font-size="20" font-weight="700">距離 d</text>
  <text x="320" y="55" text-anchor="middle" fill="#FDE68A" font-size="22" font-weight="800">三角測量：利用仰角 tanθ = 對邊 / 鄰邊 間接求樓高！</text>
</svg>""",
    ],

    # ================= MC09: 指數與對數 =================
    "exponents-logarithms": [
        """<svg viewBox="0 0 640 390" width="100%" height="390" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="640" height="390" rx="18" fill="#0B1220" stroke="#1E293B" stroke-width="2"/>
  <line x1="60" y1="260" x2="580" y2="260" stroke="#64748B" stroke-width="2.5"/>
  <line x1="220" y1="365" x2="220" y2="35" stroke="#64748B" stroke-width="2.5"/>
  <!-- y = x mirror line -->
  <line x1="120" y1="360" x2="450" y2="30" stroke="#94A3B8" stroke-width="2" stroke-dasharray="6,6"/>
  <text x="448" y="54" fill="#94A3B8" font-size="20" font-weight="700">對稱軸 y = x</text>
  <!-- y = 2^x -->
  <path d="M 80,254 Q 200,250 250,190 T 330,45" fill="none" stroke="#38BDF8" stroke-width="5"/>
  <circle cx="220" cy="220" r="8" fill="#38BDF8"/>
  <text x="232" y="110" fill="#38BDF8" font-size="22" font-weight="800">y = aˣ (a &gt; 1)</text>
  <text x="145" y="218" fill="#BAE6FD" font-size="19">(0, 1)</text>
  <!-- y = log_2 x -->
  <path d="M 226,355 Q 245,250 320,210 T 555,145" fill="none" stroke="#10B981" stroke-width="5"/>
  <circle cx="260" cy="260" r="8" fill="#10B981"/>
  <text x="415" y="182" fill="#34D399" font-size="22" font-weight="800">y = logₐ x</text>
  <text x="255" y="292" fill="#A7F3D0" font-size="19">(1, 0)</text>
</svg>""",
    ],

    # ================= MC10: 空間向量 =================
    "space-vectors": [
        """<svg viewBox="0 0 640 380" width="100%" height="380" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="640" height="380" rx="18" fill="#0B1220" stroke="#1E293B" stroke-width="2"/>
  <!-- Plane parallelogram -->
  <polygon points="140,260 440,260 540,185 240,185" fill="rgba(56,189,248,0.16)" stroke="#38BDF8" stroke-width="3"/>
  <!-- Normal vector n = a x b -->
  <line x1="340" y1="222" x2="340" y2="62" stroke="#F59E0B" stroke-width="6"/>
  <polygon points="330,68 340,46 350,68" fill="#F59E0B"/>
  <rect x="340" y="204" width="18" height="18" fill="none" stroke="#F59E0B" stroke-width="2.5"/>
  <!-- Vectors a and b in plane -->
  <line x1="340" y1="222" x2="470" y2="222" stroke="#10B981" stroke-width="5"/>
  <line x1="340" y1="222" x2="275" y2="250" stroke="#38BDF8" stroke-width="5"/>
  <text x="362" y="90" fill="#FBBF24" font-size="24" font-weight="800">法向量 n = a × b</text>
  <text x="480" y="228" fill="#34D399" font-size="22" font-weight="800">b</text>
  <text x="252" y="256" fill="#38BDF8" font-size="22" font-weight="800">a</text>
  <text x="320" y="330" text-anchor="middle" fill="#E2E8F0" font-size="22" font-weight="700">平面方程式：ax + by + cz = d（法向量 (a, b, c)）</text>
</svg>""",
    ],

    # ================= MC11: 一次聯立方程式與矩陣 =================
    "matrices": [
        """<svg viewBox="0 0 760 280" width="100%" height="280" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="760" height="280" rx="18" fill="#0B1220" stroke="#1E293B" stroke-width="2"/>
  <!-- Left: Matrix A (m x k) -->
  <rect x="55" y="65" width="165" height="145" rx="12" fill="#1E293B" stroke="#38BDF8" stroke-width="3"/>
  <rect x="70" y="88" width="135" height="36" rx="8" fill="rgba(56,189,248,0.28)"/>
  <text x="137" y="114" text-anchor="middle" fill="#BAE6FD" font-size="21" font-weight="800">第 i 列 (橫)</text>
  <text x="137" y="242" text-anchor="middle" fill="#38BDF8" font-size="21" font-weight="800">A (m × k)</text>
  <text x="248" y="148" text-anchor="middle" fill="#F8FAFC" font-size="34" font-weight="900">×</text>
  <!-- Middle: Matrix B (k x n) -->
  <rect x="275" y="65" width="165" height="145" rx="12" fill="#1E293B" stroke="#F59E0B" stroke-width="3"/>
  <rect x="335" y="80" width="46" height="115" rx="8" fill="rgba(245,158,11,0.28)"/>
  <text x="358" y="142" text-anchor="middle" fill="#FDE68A" font-size="19" font-weight="800">第j行</text>
  <text x="358" y="242" text-anchor="middle" fill="#FBBF24" font-size="21" font-weight="800">B (k × n)</text>
  <text x="472" y="148" text-anchor="middle" fill="#F8FAFC" font-size="34" font-weight="900">=</text>
  <!-- Right: Matrix C (m x n) -->
  <rect x="505" y="65" width="205" height="145" rx="12" fill="#1E293B" stroke="#10B981" stroke-width="3"/>
  <text x="607" y="132" text-anchor="middle" fill="#34D399" font-size="23" font-weight="900">列 × 行 內積</text>
  <text x="607" y="172" text-anchor="middle" fill="#E2E8F0" font-size="20">注意：AB ≠ BA</text>
  <text x="607" y="242" text-anchor="middle" fill="#34D399" font-size="21" font-weight="800">C (m × n)</text>
</svg>""",
    ],

    # ================= MC12: 二元一次不等式與線性規劃 =================
    "linear-programming": [
        """<svg viewBox="0 0 640 380" width="100%" height="380" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="640" height="380" rx="18" fill="#0B1220" stroke="#1E293B" stroke-width="2"/>
  <line x1="80" y1="320" x2="580" y2="320" stroke="#64748B" stroke-width="2.5"/>
  <line x1="120" y1="350" x2="120" y2="35" stroke="#64748B" stroke-width="2.5"/>
  <!-- Feasible polygon -->
  <polygon points="120,320 420,320 340,160 120,105" fill="rgba(16,185,129,0.22)" stroke="#10B981" stroke-width="4"/>
  <!-- Objective parallel lines -->
  <line x1="200" y1="340" x2="480" y2="60" stroke="#F59E0B" stroke-width="3" stroke-dasharray="7,5"/>
  <circle cx="120" cy="320" r="8" fill="#38BDF8"/>
  <circle cx="420" cy="320" r="8" fill="#38BDF8"/>
  <circle cx="340" cy="160" r="11" fill="#F59E0B" stroke="#FEF3C7" stroke-width="3"/>
  <circle cx="120" cy="105" r="8" fill="#38BDF8"/>
  <text x="230" y="240" text-anchor="middle" fill="#A7F3D0" font-size="23" font-weight="800">可行解區域</text>
  <text x="360" y="155" fill="#FBBF24" font-size="22" font-weight="800">最佳極值頂點！</text>
  <text x="340" y="362" text-anchor="middle" fill="#CBD5E1" font-size="20" font-weight="700">頂點法：極值一定發生在多邊形頂點上</text>
</svg>""",
    ],

    # ================= MC13: 二次曲線 =================
    "geometry": [
        """<svg viewBox="0 0 780 300" width="100%" height="300" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="780" height="300" rx="18" fill="#0B1220" stroke="#1E293B" stroke-width="2"/>
  <!-- Parabola -->
  <path d="M 190,65 Q 70,150 190,235" fill="none" stroke="#38BDF8" stroke-width="4.5"/>
  <line x1="88" y1="55" x2="88" y2="245" stroke="#94A3B8" stroke-width="2.5" stroke-dasharray="6,5"/>
  <circle cx="155" cy="150" r="7" fill="#F59E0B"/>
  <text x="140" y="275" text-anchor="middle" fill="#38BDF8" font-size="21" font-weight="800">拋物線（焦距 c）</text>
  <!-- Ellipse -->
  <ellipse cx="395" cy="150" rx="105" ry="68" fill="rgba(16,185,129,0.12)" stroke="#10B981" stroke-width="4.5"/>
  <circle cx="325" cy="150" r="7" fill="#F59E0B"/><circle cx="465" cy="150" r="7" fill="#F59E0B"/>
  <text x="395" y="158" text-anchor="middle" fill="#A7F3D0" font-size="20" font-weight="700">a² = b² + c²</text>
  <text x="395" y="275" text-anchor="middle" fill="#34D399" font-size="21" font-weight="800">橢圓（距離和 = 2a）</text>
  <!-- Hyperbola -->
  <path d="M 575,65 Q 625,150 575,235" fill="none" stroke="#FB7185" stroke-width="4.5"/>
  <path d="M 715,65 Q 665,150 715,235" fill="none" stroke="#FB7185" stroke-width="4.5"/>
  <line x1="565" y1="75" x2="725" y2="225" stroke="#64748B" stroke-width="2" stroke-dasharray="5,5"/>
  <line x1="565" y1="225" x2="725" y2="75" stroke="#64748B" stroke-width="2" stroke-dasharray="5,5"/>
  <text x="645" y="275" text-anchor="middle" fill="#FDA4AF" font-size="21" font-weight="800">雙曲線（c² = a² + b²）</text>
</svg>""",
    ],

    # ================= MC14: 微分 =================
    "calculus": [
        """<svg viewBox="0 0 640 380" width="100%" height="380" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="640" height="380" rx="18" fill="#0B1220" stroke="#1E293B" stroke-width="2"/>
  <line x1="60" y1="310" x2="585" y2="310" stroke="#64748B" stroke-width="2.5"/>
  <line x1="100" y1="345" x2="100" y2="35" stroke="#64748B" stroke-width="2.5"/>
  <!-- Cubic curve with local max & min -->
  <path d="M 115,295 C 185,50 285,50 350,185 C 415,320 500,300 565,80" fill="none" stroke="#38BDF8" stroke-width="5"/>
  <!-- Horizontal tangent at local max -->
  <line x1="165" y1="112" x2="305" y2="112" stroke="#F59E0B" stroke-width="3.5"/>
  <circle cx="235" cy="112" r="9" fill="#F59E0B"/>
  <text x="235" y="88" text-anchor="middle" fill="#FBBF24" font-size="21" font-weight="800">極大值：f'(x) = 0</text>
  <!-- Horizontal tangent at local min -->
  <line x1="385" y1="264" x2="515" y2="264" stroke="#10B981" stroke-width="3.5"/>
  <circle cx="450" cy="264" r="9" fill="#10B981"/>
  <text x="450" y="296" text-anchor="middle" fill="#34D399" font-size="21" font-weight="800">極小值：f'(x) = 0</text>
  <text x="150" y="195" fill="#34D399" font-size="19" font-weight="700">f' &gt; 0 遞增</text>
  <text x="355" y="175" fill="#FDA4AF" font-size="19" font-weight="700">f' &lt; 0 遞減</text>
</svg>""",
    ],

    # ================= MC15: 積分 =================
    "integration": [
        """<svg viewBox="0 0 640 380" width="100%" height="380" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="640" height="380" rx="18" fill="#0B1220" stroke="#1E293B" stroke-width="2"/>
  <line x1="60" y1="305" x2="585" y2="305" stroke="#64748B" stroke-width="2.5"/>
  <line x1="100" y1="340" x2="100" y2="35" stroke="#64748B" stroke-width="2.5"/>
  <!-- Shaded area under curve from a=180 to b=480 -->
  <path d="M 180,305 L 180,185 Q 330,65 480,155 L 480,305 Z" fill="rgba(16,185,129,0.26)" stroke="none"/>
  <!-- Riemann slices -->
  <g stroke="rgba(56,189,248,0.45)" stroke-width="1.5">
    <line x1="240" y1="145" x2="240" y2="305"/><line x1="300" y1="126" x2="300" y2="305"/>
    <line x1="360" y1="124" x2="360" y2="305"/><line x1="420" y1="135" x2="420" y2="305"/>
  </g>
  <path d="M 120,235 Q 330,45 550,185" fill="none" stroke="#38BDF8" stroke-width="5"/>
  <line x1="180" y1="185" x2="180" y2="305" stroke="#F59E0B" stroke-width="3"/>
  <line x1="480" y1="155" x2="480" y2="305" stroke="#F59E0B" stroke-width="3"/>
  <text x="180" y="335" text-anchor="middle" fill="#FBBF24" font-size="22" font-weight="800">a</text>
  <text x="480" y="335" text-anchor="middle" fill="#FBBF24" font-size="22" font-weight="800">b</text>
  <text x="330" y="230" text-anchor="middle" fill="#ECFDF5" font-size="25" font-weight="900">面積 = ∫ₐᵇ f(x) dx = F(b) − F(a)</text>
</svg>""",
    ],
}

SVG_SINE_COSINE_LAW = """<svg viewBox="0 0 640 380" width="100%" height="380" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="640" height="380" rx="18" fill="#0B1220" stroke="#1E293B" stroke-width="2"/>
  <circle cx="320" cy="195" r="145" fill="rgba(56,189,248,0.08)" stroke="#38BDF8" stroke-width="2.5" stroke-dasharray="7,5"/>
  <polygon points="195,270 455,270 345,53" fill="rgba(245,158,11,0.15)" stroke="#F59E0B" stroke-width="4"/>
  <circle cx="320" cy="195" r="6" fill="#38BDF8"/>
  <line x1="320" y1="195" x2="345" y2="53" stroke="#38BDF8" stroke-width="2.5"/>
  <text x="342" y="136" fill="#38BDF8" font-size="20" font-weight="700">R</text>
  <text x="172" y="292" fill="#E2E8F0" font-size="24" font-weight="800">B</text>
  <text x="466" y="292" fill="#E2E8F0" font-size="24" font-weight="800">C</text>
  <text x="345" y="42" text-anchor="middle" fill="#E2E8F0" font-size="24" font-weight="800">A</text>
  <text x="325" y="302" text-anchor="middle" fill="#34D399" font-size="22" font-weight="800">a（對角 A）</text>
  <text x="242" y="160" fill="#FBBF24" font-size="22" font-weight="800">c</text>
  <text x="418" y="160" fill="#FBBF24" font-size="22" font-weight="800">b</text>
  <text x="320" y="356" text-anchor="middle" fill="#FDE68A" font-size="21" font-weight="800">正弦：a/sinA = 2R　｜　餘弦：a² = b² + c² − 2bc cosA</text>
</svg>"""

# Exact mapping: (slug, concept_index) -> SVG string
CONCEPT_SVG_MAP = {
    ("trigonometry", 1): SVGS["trigonometry"][1],        # 銳角三角函數與特殊角 + 扇形
    ("trigonometry", 3): SVGS["trigonometry"][0],        # 任意角單位圓 ASTC
    ("trigonometry", 4): SVGS["trigonometry"][2],        # 三角函數圖形與週期
    ("trigonometry", 5): SVG_SINE_COSINE_LAW,            # 正弦定理與餘弦定理
    ("vectors", 0): SVGS["vectors"][0],                  # 向量加減平行四邊形
    ("vectors", 3): SVGS["vectors"][1],                  # 正射影與內積
    ("algebra", 1): SVGS["algebra"][0],                  # 餘式定理與因式定理
    ("algebra", 2): SVGS["algebra"][1],                  # 複數四則與 i 循環
    ("lines-circles", 4): SVGS["lines-circles"][0],      # 圓與直線三種關係
    ("sequences-series", 0): SVGS["sequences-series"][0],# 等差數列與無窮等比
    ("permutations-combinations", 1): SVGS["permutations-combinations"][0], # 排列 vs 組合
    ("trig-applications", 2): SVGS["trig-applications"][0], # 複數極式
    ("trig-applications", 4): SVGS["trig-applications"][1], # 三角測量仰角
    ("exponents-logarithms", 1): SVGS["exponents-logarithms"][0], # 指對數對稱圖形
    ("space-vectors", 3): SVGS["space-vectors"][0],      # 空間平面與法向量
    ("matrices", 2): SVGS["matrices"][0],                # 矩陣乘法列乘行
    ("linear-programming", 2): SVGS["linear-programming"][0], # 線性規劃頂點法
    ("geometry", 0): SVGS["geometry"][0],                # 二次曲線三家族
    ("calculus", 3): SVGS["calculus"][0],                # 微分應用極值切線
    ("integration", 0): SVGS["sequences-series"][0],     # 數列極限與無窮等比級數收斂
    ("integration", 1): SVGS["integration"][0],          # 積分分割逼近與面積
}

try:
    from svg_library_extra import EXTRA_CONCEPT_SVGS
    CONCEPT_SVG_MAP.update(EXTRA_CONCEPT_SVGS)
except ImportError:
    pass


