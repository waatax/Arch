# -*- coding: utf-8 -*-
"""
Extended Vector SVG Diagrams for High School Math C (MC02 - MC15)
Ensures nearly EVERY curriculum concept has a crystal-clear, dark-blueprint visual diagram!
"""

EXTRA_CONCEPT_SVGS = {
    # MC02-0: Directed angle & coterminal angle
    ("trigonometry", 0): """<svg viewBox="0 0 640 380" width="100%" height="380" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="640" height="380" rx="18" fill="#0B1220" stroke="#1E293B" stroke-width="2"/>
  <line x1="70" y1="210" x2="570" y2="210" stroke="#475569" stroke-width="2"/>
  <line x1="300" y1="350" x2="300" y2="40" stroke="#475569" stroke-width="2"/>
  <!-- Initial side -->
  <line x1="300" y1="210" x2="520" y2="210" stroke="#38BDF8" stroke-width="5"/>
  <!-- Terminal side 55 deg -->
  <line x1="300" y1="210" x2="430" y2="65" stroke="#F59E0B" stroke-width="5"/>
  <!-- CCW positive arc -->
  <path d="M 380,210 A 80,80 0 0,0 352,150" fill="none" stroke="#10B981" stroke-width="4"/>
  <polygon points="358,144 344,146 350,159" fill="#10B981"/>
  <!-- CW negative arc -->
  <path d="M 415,210 A 115,115 0 1,1 372,124" fill="none" stroke="#FB7185" stroke-width="3" stroke-dasharray="6,5"/>
  <text x="455" y="236" fill="#38BDF8" font-size="21" font-weight="800">始邊 (0°)</text>
  <text x="442" y="74" fill="#FBBF24" font-size="22" font-weight="800">終邊（同界角重合！）</text>
  <text x="392" y="168" fill="#34D399" font-size="21" font-weight="800">逆時針 ＋θ</text>
  <text x="85" y="335" fill="#FDA4AF" font-size="20" font-weight="700">順時針為負角（差 360° 的整數倍＝同界角）</text>
</svg>""",

    # MC02-2: Fundamental trig identities
    ("trigonometry", 2): """<svg viewBox="0 0 640 380" width="100%" height="380" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="640" height="380" rx="18" fill="#0B1220" stroke="#1E293B" stroke-width="2"/>
  <rect x="45" y="42" width="550" height="88" rx="14" fill="rgba(56,189,248,0.14)" stroke="#38BDF8" stroke-width="2.5"/>
  <text x="320" y="80" text-anchor="middle" fill="#38BDF8" font-size="21" font-weight="800">平方關係（畢氏定理化身）</text>
  <text x="320" y="114" text-anchor="middle" fill="#F8FAFC" font-size="28" font-weight="900">sin²θ + cos²θ = 1　｜　1 + tan²θ = sec²θ</text>
  <rect x="45" y="150" width="265" height="92" rx="14" fill="rgba(245,158,11,0.14)" stroke="#F59E0B" stroke-width="2.5"/>
  <text x="177" y="186" text-anchor="middle" fill="#FBBF24" font-size="20" font-weight="800">商數關係</text>
  <text x="177" y="222" text-anchor="middle" fill="#F8FAFC" font-size="24" font-weight="800">tanθ = sinθ / cosθ</text>
  <rect x="330" y="150" width="265" height="92" rx="14" fill="rgba(16,185,129,0.14)" stroke="#10B981" stroke-width="2.5"/>
  <text x="462" y="186" text-anchor="middle" fill="#34D399" font-size="20" font-weight="800">餘角互換（相加 90°）</text>
  <text x="462" y="222" text-anchor="middle" fill="#F8FAFC" font-size="23" font-weight="800">sin(90°−θ) = cosθ</text>
  <rect x="45" y="264" width="550" height="76" rx="14" fill="#1E293B" stroke="#64748B" stroke-width="2"/>
  <text x="320" y="310" text-anchor="middle" fill="#FDE68A" font-size="22" font-weight="800">考場絕招：給 sinθ + cosθ 求乘積 ⇒ 兩邊平方立刻出 2sinθcosθ！</text>
</svg>""",

    # MC03-1: Vector section point triangle
    ("vectors", 1): """<svg viewBox="0 0 640 380" width="100%" height="380" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="640" height="380" rx="18" fill="#0B1220" stroke="#1E293B" stroke-width="2"/>
  <line x1="120" y1="300" x2="210" y2="85" stroke="#38BDF8" stroke-width="5"/>
  <line x1="120" y1="300" x2="540" y2="215" stroke="#F59E0B" stroke-width="5"/>
  <line x1="210" y1="85" x2="540" y2="215" stroke="#94A3B8" stroke-width="3" stroke-dasharray="6,5"/>
  <line x1="120" y1="300" x2="320" y2="128" stroke="#10B981" stroke-width="6"/>
  <circle cx="120" cy="300" r="8" fill="#E2E8F0"/>
  <circle cx="210" cy="85" r="9" fill="#38BDF8"/>
  <circle cx="320" cy="128" r="11" fill="#10B981" stroke="#ECFDF5" stroke-width="2.5"/>
  <circle cx="540" cy="215" r="9" fill="#F59E0B"/>
  <text x="92" y="315" fill="#E2E8F0" font-size="24" font-weight="800">O</text>
  <text x="195" y="70" fill="#38BDF8" font-size="24" font-weight="800">A</text>
  <text x="332" y="114" fill="#34D399" font-size="24" font-weight="800">P</text>
  <text x="554" y="224" fill="#FBBF24" font-size="24" font-weight="800">B</text>
  <text x="276" y="96" fill="#38BDF8" font-size="21" font-weight="800">m</text>
  <text x="442" y="156" fill="#FBBF24" font-size="21" font-weight="800">n</text>
  <rect x="65" y="325" width="510" height="40" rx="10" fill="rgba(16,185,129,0.16)" stroke="#10B981" stroke-width="2"/>
  <text x="320" y="352" text-anchor="middle" fill="#ECFDF5" font-size="21" font-weight="800">OP = [ n/(m+n) ] OA + [ m/(m+n) ] OB（係數和 = 1 必共線！）</text>
</svg>""",

    # MC03-2: Dot product angle sign (acute / right / obtuse)
    ("vectors", 2): """<svg viewBox="0 0 640 380" width="100%" height="380" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="640" height="380" rx="18" fill="#0B1220" stroke="#1E293B" stroke-width="2"/>
  <!-- Acute -->
  <line x1="60" y1="220" x2="180" y2="220" stroke="#38BDF8" stroke-width="5"/>
  <line x1="60" y1="220" x2="155" y2="125" stroke="#10B981" stroke-width="5"/>
  <text x="120" y="262" text-anchor="middle" fill="#34D399" font-size="22" font-weight="800">銳角：a·b &gt; 0</text>
  <text x="120" y="292" text-anchor="middle" fill="#94A3B8" font-size="18">同向助力</text>
  <!-- Right -->
  <line x1="265" y1="220" x2="385" y2="220" stroke="#38BDF8" stroke-width="5"/>
  <line x1="265" y1="220" x2="265" y2="100" stroke="#F59E0B" stroke-width="5"/>
  <rect x="265" y="198" width="22" height="22" fill="none" stroke="#F59E0B" stroke-width="2.5"/>
  <text x="325" y="262" text-anchor="middle" fill="#FBBF24" font-size="22" font-weight="800">垂直：a·b = 0</text>
  <text x="325" y="292" text-anchor="middle" fill="#94A3B8" font-size="18">統測最高頻！</text>
  <!-- Obtuse -->
  <line x1="495" y1="220" x2="600" y2="220" stroke="#38BDF8" stroke-width="5"/>
  <line x1="495" y1="220" x2="425" y2="130" stroke="#FB7185" stroke-width="5"/>
  <text x="520" y="262" text-anchor="middle" fill="#FDA4AF" font-size="22" font-weight="800">鈍角：a·b &lt; 0</text>
  <text x="520" y="292" text-anchor="middle" fill="#94A3B8" font-size="18">反向阻力</text>
  <text x="320" y="54" text-anchor="middle" fill="#FDE68A" font-size="24" font-weight="900">向量內積正負號＝夾角判斷器</text>
</svg>""",

    # MC04-0: Synthetic division board diagram
    ("algebra", 0): """<svg viewBox="0 0 640 380" width="100%" height="380" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="640" height="380" rx="18" fill="#0B1220" stroke="#1E293B" stroke-width="2"/>
  <text x="320" y="48" text-anchor="middle" fill="#38BDF8" font-size="23" font-weight="800">綜合除法口訣：降冪補零 → 直下 → 斜乘 → 相加</text>
  <text x="90" y="120" fill="#F8FAFC" font-size="30" font-weight="800">1</text>
  <text x="190" y="120" fill="#FB7185" font-size="30" font-weight="800">0（補零!）</text>
  <text x="360" y="120" fill="#F8FAFC" font-size="30" font-weight="800">−3</text>
  <text x="450" y="120" fill="#F8FAFC" font-size="30" font-weight="800">5</text>
  <line x1="510" y1="85" x2="510" y2="195" stroke="#F59E0B" stroke-width="3.5"/>
  <line x1="510" y1="138" x2="585" y2="138" stroke="#F59E0B" stroke-width="3.5"/>
  <text x="545" y="124" text-anchor="middle" fill="#FBBF24" font-size="30" font-weight="900">2</text>
  <text x="200" y="182" fill="#38BDF8" font-size="28" font-weight="700">+2</text>
  <text x="360" y="182" fill="#38BDF8" font-size="28" font-weight="700">+4</text>
  <text x="450" y="182" fill="#38BDF8" font-size="28" font-weight="700">+2</text>
  <line x1="65" y1="204" x2="510" y2="204" stroke="#E2E8F0" stroke-width="3.5"/>
  <text x="90" y="252" fill="#34D399" font-size="32" font-weight="900">1</text>
  <text x="200" y="252" fill="#34D399" font-size="32" font-weight="900">2</text>
  <text x="360" y="252" fill="#34D399" font-size="32" font-weight="900">1</text>
  <rect x="422" y="216" width="64" height="48" rx="10" fill="rgba(245,158,11,0.22)" stroke="#F59E0B" stroke-width="3"/>
  <text x="454" y="250" text-anchor="middle" fill="#FBBF24" font-size="32" font-weight="900">7</text>
  <text x="220" y="302" text-anchor="middle" fill="#34D399" font-size="22" font-weight="800">商式 Q(x) = x² + 2x + 1</text>
  <text x="454" y="302" text-anchor="middle" fill="#FBBF24" font-size="22" font-weight="800">餘式 = 7</text>
  <text x="320" y="352" text-anchor="middle" fill="#94A3B8" font-size="19">範例：(x³ − 3x + 5) ÷ (x − 2)，缺 x² 項一定要補 0！</text>
</svg>""",

    # MC05-0: Slope 4 cases
    ("lines-circles", 0): """<svg viewBox="0 0 640 380" width="100%" height="380" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="640" height="380" rx="18" fill="#0B1220" stroke="#1E293B" stroke-width="2"/>
  <text x="320" y="46" text-anchor="middle" fill="#FDE68A" font-size="24" font-weight="900">斜率 m = Δy / Δx（建築坡度直覺）</text>
  <!-- Positive -->
  <line x1="65" y1="220" x2="175" y2="115" stroke="#10B981" stroke-width="5"/>
  <text x="120" y="258" text-anchor="middle" fill="#34D399" font-size="21" font-weight="800">m &gt; 0 上坡</text>
  <!-- Negative -->
  <line x1="215" y1="115" x2="325" y2="220" stroke="#FB7185" stroke-width="5"/>
  <text x="270" y="258" text-anchor="middle" fill="#FDA4AF" font-size="21" font-weight="800">m &lt; 0 下坡</text>
  <!-- Zero -->
  <line x1="365" y1="168" x2="475" y2="168" stroke="#38BDF8" stroke-width="5"/>
  <text x="420" y="258" text-anchor="middle" fill="#38BDF8" font-size="21" font-weight="800">m = 0 水平</text>
  <!-- Undefined -->
  <line x1="555" y1="100" x2="555" y2="228" stroke="#F59E0B" stroke-width="5"/>
  <text x="555" y="258" text-anchor="middle" fill="#FBBF24" font-size="21" font-weight="800">鉛直無斜率</text>
  <rect x="55" y="292" width="530" height="58" rx="12" fill="#1E293B" stroke="#38BDF8" stroke-width="2"/>
  <text x="320" y="328" text-anchor="middle" fill="#E2E8F0" font-size="21" font-weight="800">平行：m₁ = m₂　｜　垂直：m₁ · m₂ = −1（倒數加負號！）</text>
</svg>""",

    # MC05-2: Point to line distance
    ("lines-circles", 2): """<svg viewBox="0 0 640 380" width="100%" height="380" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="640" height="380" rx="18" fill="#0B1220" stroke="#1E293B" stroke-width="2"/>
  <line x1="75" y1="295" x2="565" y2="145" stroke="#38BDF8" stroke-width="5"/>
  <circle cx="240" cy="115" r="10" fill="#F59E0B"/>
  <line x1="240" y1="115" x2="275" y2="233" stroke="#10B981" stroke-width="4.5" stroke-dasharray="7,5"/>
  <circle cx="275" cy="233" r="7" fill="#10B981"/>
  <text x="135" y="102" fill="#FBBF24" font-size="23" font-weight="800">點 P(x₀, y₀)</text>
  <text x="292" y="176" fill="#34D399" font-size="24" font-weight="900">最短垂直距 d</text>
  <text x="415" y="232" fill="#38BDF8" font-size="22" font-weight="800">直線 L：ax + by + c = 0</text>
  <rect x="65" y="310" width="510" height="52" rx="12" fill="rgba(245,158,11,0.16)" stroke="#F59E0B" stroke-width="2"/>
  <text x="320" y="344" text-anchor="middle" fill="#FDE68A" font-size="22" font-weight="800">口訣：點代進去加絕對值 ÷ 係數平方和開根號！</text>
</svg>""",

    # MC06-1: Arithmetic sum trapezoid Gauss pairing
    ("sequences-series", 1): """<svg viewBox="0 0 640 380" width="100%" height="380" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="640" height="380" rx="18" fill="#0B1220" stroke="#1E293B" stroke-width="2"/>
  <text x="320" y="48" text-anchor="middle" fill="#38BDF8" font-size="24" font-weight="900">高斯梯形公式直覺：正排＋倒排＝等高大矩形！</text>
  <!-- Forward stairs -->
  <rect x="90" y="210" width="70" height="40" fill="#0284C7" stroke="#0B1220" stroke-width="2"/>
  <rect x="160" y="180" width="70" height="70" fill="#0EA5E9" stroke="#0B1220" stroke-width="2"/>
  <rect x="230" y="150" width="70" height="100" fill="#38BDF8" stroke="#0B1220" stroke-width="2"/>
  <rect x="300" y="120" width="70" height="130" fill="#7DD3FC" stroke="#0B1220" stroke-width="2"/>
  <!-- Reversed stairs stacked on top -->
  <rect x="90" y="80" width="70" height="130" fill="rgba(245,158,11,0.45)" stroke="#F59E0B" stroke-width="2"/>
  <rect x="160" y="80" width="70" height="100" fill="rgba(245,158,11,0.45)" stroke="#F59E0B" stroke-width="2"/>
  <rect x="230" y="80" width="70" height="70" fill="rgba(245,158,11,0.45)" stroke="#F59E0B" stroke-width="2"/>
  <rect x="300" y="80" width="70" height="40" fill="rgba(245,158,11,0.45)" stroke="#F59E0B" stroke-width="2"/>
  <text x="495" y="155" text-anchor="middle" fill="#FBBF24" font-size="24" font-weight="800">每欄高 = a₁ + aₙ</text>
  <text x="495" y="196" text-anchor="middle" fill="#34D399" font-size="24" font-weight="800">共 n 欄，取一半！</text>
  <rect x="75" y="286" width="490" height="58" rx="12" fill="rgba(16,185,129,0.16)" stroke="#10B981" stroke-width="2"/>
  <text x="320" y="323" text-anchor="middle" fill="#ECFDF5" font-size="25" font-weight="900">Sₙ = n(a₁ + aₙ) / 2 = 項數 × 中間平均</text>
</svg>""",

    # MC07-0: Addition vs Multiplication principle
    ("permutations-combinations", 0): """<svg viewBox="0 0 640 380" width="100%" height="380" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="640" height="380" rx="18" fill="#0B1220" stroke="#1E293B" stroke-width="2"/>
  <text x="320" y="46" text-anchor="middle" fill="#FDE68A" font-size="24" font-weight="900">計數兩大引擎：分類用「加」、分步用「乘」</text>
  <!-- Addition: parallel -->
  <circle cx="80" cy="145" r="14" fill="#38BDF8"/>
  <circle cx="290" cy="145" r="14" fill="#38BDF8"/>
  <path d="M 94,140 Q 185,82 276,140" fill="none" stroke="#10B981" stroke-width="4"/>
  <path d="M 94,145 L 276,145" fill="none" stroke="#10B981" stroke-width="4"/>
  <path d="M 94,150 Q 185,208 276,150" fill="none" stroke="#F59E0B" stroke-width="4"/>
  <text x="185" y="232" text-anchor="middle" fill="#34D399" font-size="22" font-weight="800">加法原理：m + n</text>
  <text x="185" y="262" text-anchor="middle" fill="#94A3B8" font-size="18">（選一條就完成任務）</text>
  <!-- Multiplication: series -->
  <circle cx="365" cy="145" r="14" fill="#38BDF8"/>
  <circle cx="475" cy="145" r="14" fill="#F59E0B"/>
  <circle cx="585" cy="145" r="14" fill="#10B981"/>
  <path d="M 379,140 Q 420,100 461,140" fill="none" stroke="#38BDF8" stroke-width="4"/>
  <path d="M 379,150 Q 420,190 461,150" fill="none" stroke="#38BDF8" stroke-width="4"/>
  <path d="M 489,140 Q 530,96 571,140" fill="none" stroke="#F59E0B" stroke-width="4"/>
  <path d="M 489,145 L 571,145" fill="none" stroke="#F59E0B" stroke-width="4"/>
  <path d="M 489,150 Q 530,194 571,150" fill="none" stroke="#F59E0B" stroke-width="4"/>
  <text x="475" y="232" text-anchor="middle" fill="#FBBF24" font-size="22" font-weight="800">乘法原理：m × n</text>
  <text x="475" y="262" text-anchor="middle" fill="#94A3B8" font-size="18">（兩步都要走完）</text>
  <rect x="65" y="302" width="510" height="48" rx="12" fill="#1E293B" stroke="#38BDF8" stroke-width="2"/>
  <text x="320" y="333" text-anchor="middle" fill="#E2E8F0" font-size="21" font-weight="800">口訣：「或者」用加、「而且」用乘，遇到重複記得扣！</text>
</svg>""",

    # MC07-2: Adjacent bundle vs Non-adjacent gaps
    ("permutations-combinations", 2): """<svg viewBox="0 0 640 380" width="100%" height="380" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="640" height="380" rx="18" fill="#0B1220" stroke="#1E293B" stroke-width="2"/>
  <text x="320" y="46" text-anchor="middle" fill="#38BDF8" font-size="23" font-weight="800">排隊必考兩招：相鄰用「捆綁」、不相鄰用「插空」</text>
  <!-- Bundle -->
  <rect x="60" y="78" width="150" height="68" rx="14" fill="rgba(245,158,11,0.22)" stroke="#F59E0B" stroke-width="3.5"/>
  <text x="135" y="120" text-anchor="middle" fill="#FDE68A" font-size="24" font-weight="900">[ 甲 乙 ]</text>
  <rect x="235" y="86" width="68" height="52" rx="10" fill="#1E293B" stroke="#64748B" stroke-width="2"/>
  <text x="269" y="120" text-anchor="middle" fill="#E2E8F0" font-size="22" font-weight="700">丙</text>
  <rect x="325" y="86" width="68" height="52" rx="10" fill="#1E293B" stroke="#64748B" stroke-width="2"/>
  <text x="359" y="120" text-anchor="middle" fill="#E2E8F0" font-size="22" font-weight="700">丁</text>
  <text x="515" y="118" text-anchor="middle" fill="#FBBF24" font-size="22" font-weight="800">3! × 2!（別忘鬆綁!）</text>
  <!-- Gaps -->
  <text x="105" y="252" text-anchor="middle" fill="#34D399" font-size="28" font-weight="900">_</text>
  <rect x="135" y="216" width="64" height="52" rx="10" fill="#1E293B" stroke="#38BDF8" stroke-width="2"/>
  <text x="167" y="250" text-anchor="middle" fill="#E2E8F0" font-size="22" font-weight="700">丙</text>
  <text x="230" y="252" text-anchor="middle" fill="#34D399" font-size="28" font-weight="900">_</text>
  <rect x="260" y="216" width="64" height="52" rx="10" fill="#1E293B" stroke="#38BDF8" stroke-width="2"/>
  <text x="292" y="250" text-anchor="middle" fill="#E2E8F0" font-size="22" font-weight="700">丁</text>
  <text x="355" y="252" text-anchor="middle" fill="#34D399" font-size="28" font-weight="900">_</text>
  <text x="505" y="248" text-anchor="middle" fill="#34D399" font-size="22" font-weight="800">先排他人再插空！</text>
  <text x="320" y="336" text-anchor="middle" fill="#CBD5E1" font-size="21" font-weight="700">2 人排好生出 3 個空位 ⇒ 2! × P(3, 2)</text>
</svg>""",

    # MC08-1: Harmonic addition auxiliary right triangle
    ("trig-applications", 1): """<svg viewBox="0 0 640 380" width="100%" height="380" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="640" height="380" rx="18" fill="#0B1220" stroke="#1E293B" stroke-width="2"/>
  <text x="320" y="48" text-anchor="middle" fill="#FDE68A" font-size="24" font-weight="900">正餘弦疊合：提出斜邊 √(a² + b²) 變單一波形！</text>
  <polygon points="120,275 430,275 430,105" fill="rgba(56,189,248,0.14)" stroke="#38BDF8" stroke-width="4"/>
  <rect x="408" y="253" width="22" height="22" fill="none" stroke="#38BDF8" stroke-width="2.5"/>
  <text x="275" y="308" text-anchor="middle" fill="#38BDF8" font-size="24" font-weight="800">鄰邊 a</text>
  <text x="460" y="198" fill="#34D399" font-size="24" font-weight="800">對邊 b</text>
  <text x="242" y="172" text-anchor="middle" fill="#FBBF24" font-size="25" font-weight="900">斜邊 R = √(a² + b²)</text>
  <text x="182" y="262" fill="#E2E8F0" font-size="22" font-weight="700">φ</text>
  <rect x="55" y="324" width="530" height="42" rx="10" fill="rgba(16,185,129,0.16)" stroke="#10B981" stroke-width="2"/>
  <text x="320" y="352" text-anchor="middle" fill="#ECFDF5" font-size="21" font-weight="800">最大值 = +√(a² + b²)　｜　最小值 = −√(a² + b²)</text>
</svg>""",

    # MC09-0: Rational exponent bridge
    ("exponents-logarithms", 0): """<svg viewBox="0 0 640 380" width="100%" height="380" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="640" height="380" rx="18" fill="#0B1220" stroke="#1E293B" stroke-width="2"/>
  <text x="320" y="52" text-anchor="middle" fill="#38BDF8" font-size="25" font-weight="900">分數與負指數記憶橋樑</text>
  <rect x="65" y="88" width="510" height="86" rx="14" fill="rgba(245,158,11,0.16)" stroke="#F59E0B" stroke-width="2.5"/>
  <text x="320" y="128" text-anchor="middle" fill="#FDE68A" font-size="30" font-weight="900">a^(p/q) = ᵠ√(aᵖ)</text>
  <text x="320" y="160" text-anchor="middle" fill="#E2E8F0" font-size="20" font-weight="700">口訣：分子是次方、分母是開幾次根號（例：8^(2/3) = (∛8)² = 4）</text>
  <rect x="65" y="200" width="245" height="125" rx="14" fill="rgba(56,189,248,0.14)" stroke="#38BDF8" stroke-width="2.5"/>
  <text x="187" y="242" text-anchor="middle" fill="#38BDF8" font-size="24" font-weight="900">負指數＝倒數</text>
  <text x="187" y="286" text-anchor="middle" fill="#F8FAFC" font-size="26" font-weight="800">a⁻ⁿ = 1 / aⁿ</text>
  <rect x="330" y="200" width="245" height="125" rx="14" fill="rgba(16,185,129,0.14)" stroke="#10B981" stroke-width="2.5"/>
  <text x="452" y="242" text-anchor="middle" fill="#34D399" font-size="24" font-weight="900">零次方＝ 1</text>
  <text x="452" y="286" text-anchor="middle" fill="#F8FAFC" font-size="26" font-weight="800">a⁰ = 1 (a ≠ 0)</text>
</svg>""",

    # MC10-1: 3D Coordinate box distance
    ("space-vectors", 1): """<svg viewBox="0 0 640 380" width="100%" height="380" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="640" height="380" rx="18" fill="#0B1220" stroke="#1E293B" stroke-width="2"/>
  <!-- 3D Box wireframe -->
  <rect x="140" y="150" width="260" height="150" fill="rgba(56,189,248,0.10)" stroke="#38BDF8" stroke-width="3"/>
  <polygon points="140,150 235,85 495,85 400,150" fill="rgba(56,189,248,0.16)" stroke="#38BDF8" stroke-width="2.5"/>
  <polygon points="400,150 495,85 495,235 400,300" fill="rgba(16,185,129,0.12)" stroke="#38BDF8" stroke-width="2.5"/>
  <line x1="235" y1="85" x2="235" y2="235" stroke="#475569" stroke-width="2" stroke-dasharray="5,5"/>
  <line x1="140" y1="300" x2="235" y2="235" stroke="#475569" stroke-width="2" stroke-dasharray="5,5"/>
  <!-- Space diagonal -->
  <line x1="140" y1="300" x2="495" y2="85" stroke="#F59E0B" stroke-width="5"/>
  <circle cx="140" cy="300" r="8" fill="#38BDF8"/>
  <circle cx="495" cy="85" r="9" fill="#F59E0B"/>
  <text x="108" y="330" fill="#E2E8F0" font-size="21" font-weight="800">A(x₁,y₁,z₁)</text>
  <text x="458" y="72" fill="#FBBF24" font-size="21" font-weight="800">B(x₂,y₂,z₂)</text>
  <text x="270" y="332" fill="#38BDF8" font-size="20" font-weight="700">Δx</text>
  <text x="462" y="285" fill="#34D399" font-size="20" font-weight="700">Δy</text>
  <text x="510" y="168" fill="#FBBF24" font-size="20" font-weight="700">Δz</text>
  <text x="320" y="365" text-anchor="middle" fill="#FDE68A" font-size="22" font-weight="900">空間距離＝長方體對角線 = √(Δx² + Δy² + Δz²)</text>
</svg>""",

    # MC11-3: 2x2 Inverse matrix trick
    ("matrices", 3): """<svg viewBox="0 0 640 380" width="100%" height="380" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="640" height="380" rx="18" fill="#0B1220" stroke="#1E293B" stroke-width="2"/>
  <text x="320" y="48" text-anchor="middle" fill="#FDE68A" font-size="25" font-weight="900">二階反方陣 3 秒口訣：主對調、副變號、除行列式！</text>
  <!-- Matrix A -->
  <rect x="65" y="95" width="175" height="150" rx="14" fill="#1E293B" stroke="#38BDF8" stroke-width="3"/>
  <text x="115" y="152" text-anchor="middle" fill="#34D399" font-size="34" font-weight="900">a</text>
  <text x="190" y="152" text-anchor="middle" fill="#FB7185" font-size="34" font-weight="900">b</text>
  <text x="115" y="218" text-anchor="middle" fill="#FB7185" font-size="34" font-weight="900">c</text>
  <text x="190" y="218" text-anchor="middle" fill="#34D399" font-size="34" font-weight="900">d</text>
  <text x="278" y="182" text-anchor="middle" fill="#F59E0B" font-size="34" font-weight="900">⇒</text>
  <!-- Matrix A^-1 -->
  <text x="348" y="182" text-anchor="middle" fill="#FBBF24" font-size="26" font-weight="900">1 / Δ</text>
  <rect x="395" y="95" width="185" height="150" rx="14" fill="#1E293B" stroke="#10B981" stroke-width="3"/>
  <text x="445" y="152" text-anchor="middle" fill="#34D399" font-size="34" font-weight="900">d</text>
  <text x="528" y="152" text-anchor="middle" fill="#FB7185" font-size="34" font-weight="900">−b</text>
  <text x="445" y="218" text-anchor="middle" fill="#FB7185" font-size="34" font-weight="900">−c</text>
  <text x="528" y="218" text-anchor="middle" fill="#34D399" font-size="34" font-weight="900">a</text>
  <rect x="65" y="280" width="515" height="62" rx="12" fill="rgba(244,63,94,0.16)" stroke="#F43F5E" stroke-width="2"/>
  <text x="322" y="319" text-anchor="middle" fill="#FECDD3" font-size="22" font-weight="800">切記：Δ = ad − bc ≠ 0 才存在反方陣（Δ = 0 不可逆！）</text>
</svg>""",

    # MC12-0: Half-plane test point
    ("linear-programming", 0): """<svg viewBox="0 0 640 380" width="100%" height="380" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="640" height="380" rx="18" fill="#0B1220" stroke="#1E293B" stroke-width="2"/>
  <polygon points="80,310 470,310 150,70 80,70" fill="rgba(16,185,129,0.22)"/>
  <line x1="65" y1="310" x2="575" y2="310" stroke="#64748B" stroke-width="2.5"/>
  <line x1="150" y1="345" x2="150" y2="40" stroke="#64748B" stroke-width="2.5"/>
  <line x1="110" y1="40" x2="510" y2="340" stroke="#38BDF8" stroke-width="5"/>
  <circle cx="150" cy="310" r="10" fill="#F59E0B"/>
  <text x="168" y="295" fill="#FBBF24" font-size="22" font-weight="800">測試點 (0, 0) 代入成立 ✓</text>
  <text x="355" y="135" fill="#FDA4AF" font-size="22" font-weight="800">ax + by &gt; c（不成立區）</text>
  <text x="180" y="220" fill="#34D399" font-size="23" font-weight="900">ax + by ≤ c</text>
  <text x="320" y="360" text-anchor="middle" fill="#CBD5E1" font-size="20" font-weight="700">含等號畫實線、不含畫虛線；線不過原點就代 (0,0) 一秒判左右！</text>
</svg>""",

    # MC13-1: Ellipse geometry
    ("geometry", 1): """<svg viewBox="0 0 640 380" width="100%" height="380" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="640" height="380" rx="18" fill="#0B1220" stroke="#1E293B" stroke-width="2"/>
  <line x1="55" y1="195" x2="585" y2="195" stroke="#475569" stroke-width="2"/>
  <line x1="320" y1="345" x2="320" y2="45" stroke="#475569" stroke-width="2"/>
  <ellipse cx="320" cy="195" rx="210" ry="120" fill="rgba(16,185,129,0.12)" stroke="#10B981" stroke-width="4.5"/>
  <!-- Right triangle b, c, a -->
  <polygon points="320,195 492,195 320,75" fill="rgba(245,158,11,0.18)" stroke="#F59E0B" stroke-width="3.5"/>
  <circle cx="148" cy="195" r="8" fill="#F59E0B"/>
  <circle cx="492" cy="195" r="8" fill="#F59E0B"/>
  <text x="148" y="228" text-anchor="middle" fill="#FBBF24" font-size="21" font-weight="800">F₁</text>
  <text x="492" y="228" text-anchor="middle" fill="#FBBF24" font-size="21" font-weight="800">F₂</text>
  <text x="302" y="140" text-anchor="end" fill="#38BDF8" font-size="23" font-weight="800">b</text>
  <text x="406" y="220" text-anchor="middle" fill="#38BDF8" font-size="23" font-weight="800">c</text>
  <text x="424" y="128" fill="#FBBF24" font-size="24" font-weight="900">斜邊 = a</text>
  <text x="320" y="362" text-anchor="middle" fill="#A7F3D0" font-size="22" font-weight="900">橢圓：a 最大 ⇒ a² = b² + c²（到兩焦點距離和 = 2a）</text>
</svg>""",

    # MC13-2: Hyperbola geometry
    ("geometry", 2): """<svg viewBox="0 0 640 380" width="100%" height="380" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="640" height="380" rx="18" fill="#0B1220" stroke="#1E293B" stroke-width="2"/>
  <line x1="55" y1="190" x2="585" y2="190" stroke="#475569" stroke-width="2"/>
  <line x1="320" y1="335" x2="320" y2="45" stroke="#475569" stroke-width="2"/>
  <!-- Asymptotes -->
  <line x1="90" y1="65" x2="550" y2="315" stroke="#F59E0B" stroke-width="2.5" stroke-dasharray="7,6"/>
  <line x1="90" y1="315" x2="550" y2="65" stroke="#F59E0B" stroke-width="2.5" stroke-dasharray="7,6"/>
  <!-- Branches -->
  <path d="M 110,65 Q 245,190 110,315" fill="none" stroke="#FB7185" stroke-width="5"/>
  <path d="M 530,65 Q 395,190 530,315" fill="none" stroke="#FB7185" stroke-width="5"/>
  <circle cx="177" cy="190" r="8" fill="#38BDF8"/><circle cx="463" cy="190" r="8" fill="#38BDF8"/>
  <circle cx="120" cy="190" r="8" fill="#F59E0B"/><circle cx="520" cy="190" r="8" fill="#F59E0B"/>
  <text x="520" y="224" text-anchor="middle" fill="#FBBF24" font-size="21" font-weight="800">焦點 c</text>
  <text x="463" y="224" text-anchor="middle" fill="#38BDF8" font-size="21" font-weight="800">頂點 a</text>
  <text x="490" y="72" fill="#FBBF24" font-size="20" font-weight="800">漸近線 y = ±(b/a)x</text>
  <text x="320" y="362" text-anchor="middle" fill="#FDA4AF" font-size="22" font-weight="900">雙曲線：c 最大 ⇒ c² = a² + b²（距離差 = 2a）</text>
</svg>""",

    # MC14-1: Secant approaching tangent slope
    ("calculus", 1): """<svg viewBox="0 0 640 380" width="100%" height="380" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="640" height="380" rx="18" fill="#0B1220" stroke="#1E293B" stroke-width="2"/>
  <line x1="65" y1="315" x2="575" y2="315" stroke="#64748B" stroke-width="2.5"/>
  <line x1="100" y1="345" x2="100" y2="35" stroke="#64748B" stroke-width="2.5"/>
  <!-- Curve -->
  <path d="M 110,295 Q 320,285 520,65" fill="none" stroke="#38BDF8" stroke-width="5"/>
  <!-- Secant line -->
  <line x1="200" y1="280" x2="495" y2="105" stroke="#94A3B8" stroke-width="3" stroke-dasharray="7,5"/>
  <!-- Tangent line at P(270, 238) -->
  <line x1="150" y1="315" x2="455" y2="122" stroke="#F59E0B" stroke-width="4.5"/>
  <circle cx="270" cy="238" r="9" fill="#F59E0B"/>
  <circle cx="450" cy="132" r="8" fill="#10B981"/>
  <text x="278" y="272" fill="#FBBF24" font-size="21" font-weight="800">切點 P(a, f(a))</text>
  <text x="464" y="138" fill="#34D399" font-size="20" font-weight="800">Q → P (h → 0)</text>
  <text x="150" y="88" fill="#FDE68A" font-size="23" font-weight="900">導數 f'(a) = 割線逼近的「切線斜率」！</text>
</svg>""",

    # MC15-3: Area between two curves (top - bottom)
    ("integration", 3): """<svg viewBox="0 0 640 380" width="100%" height="380" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="640" height="380" rx="18" fill="#0B1220" stroke="#1E293B" stroke-width="2"/>
  <line x1="65" y1="305" x2="575" y2="305" stroke="#64748B" stroke-width="2.5"/>
  <line x1="100" y1="340" x2="100" y2="35" stroke="#64748B" stroke-width="2.5"/>
  <!-- Shaded region between top parabola and bottom line -->
  <path d="M 180,225 Q 330,45 480,155 L 480,155 L 180,225 Z" fill="rgba(16,185,129,0.28)" stroke="none"/>
  <!-- Upper curve f(x) -->
  <path d="M 130,275 Q 330,30 530,195" fill="none" stroke="#38BDF8" stroke-width="5"/>
  <!-- Lower line g(x) -->
  <line x1="130" y1="238" x2="530" y2="142" stroke="#F59E0B" stroke-width="4.5"/>
  <circle cx="180" cy="225" r="8" fill="#10B981"/><circle cx="480" cy="155" r="8" fill="#10B981"/>
  <text x="330" y="102" text-anchor="middle" fill="#38BDF8" font-size="22" font-weight="800">上函數 f(x)</text>
  <text x="365" y="220" text-anchor="middle" fill="#FBBF24" font-size="22" font-weight="800">下函數 g(x)</text>
  <text x="320" y="352" text-anchor="middle" fill="#A7F3D0" font-size="22" font-weight="900">封閉面積＝ ∫ₐᵇ [ 上函數 − 下函數 ] dx（記得先求交點！）</text>
</svg>""",
}
