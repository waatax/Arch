# -*- coding: utf-8 -*-
"""
Lesson 01: 坐標系與函數圖形 (TCTE115-MC1)
Target length: ~10 minutes (~3,100 Traditional Chinese chars across 23 visual beats, rate=+8%)
Source: apps/web/src/data/subjects/math-c.ts (functions-graphs) + 111-115 TCTE exams
"""

LESSON_META = {
    "id": "MC01",
    "slug": "functions-graphs",
    "code": "TCTE115-MC1",
    "title": "坐標系與函數圖形",
    "subtitle": "高工數學 C 十分鐘精講｜第 01 課",
    "output_name": "MC01-坐標系與函數圖形.mp4",
    "voice": "zh-TW-HsiaoChenNeural",
    "rate": "+8%",
    "chapters": [
        "01 開場破題",
        "02 核心知識點",
        "03 致命陷阱",
        "04 統測實戰",
        "05 考前懶人包",
    ],
}

SVG_NUMBER_LINE_ABS = """
<svg viewBox="0 0 820 270" width="100%" height="270" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="820" height="270" rx="18" fill="#0B1220" stroke="#1E293B" stroke-width="2"/>
  <text x="36" y="42" fill="#34D399" font-size="22" font-weight="700">|x − a| ≤ b ：夾在中間（到中心 a 距離不超過 b）</text>
  <line x1="70" y1="98" x2="750" y2="98" stroke="#475569" stroke-width="3"/>
  <polygon points="750,91 766,98 750,105" fill="#475569"/>
  <rect x="250" y="88" width="320" height="20" rx="10" fill="rgba(16,185,129,0.35)" stroke="#10B981" stroke-width="2.5"/>
  <circle cx="250" cy="98" r="8" fill="#10B981"/>
  <circle cx="410" cy="98" r="8" fill="#F59E0B"/>
  <circle cx="570" cy="98" r="8" fill="#10B981"/>
  <path d="M255,76 Q330,54 405,76" fill="none" stroke="#38BDF8" stroke-width="2" stroke-dasharray="5,4"/>
  <text x="330" y="64" text-anchor="middle" fill="#38BDF8" font-size="18" font-weight="700">距離 b</text>
  <path d="M415,76 Q490,54 565,76" fill="none" stroke="#38BDF8" stroke-width="2" stroke-dasharray="5,4"/>
  <text x="490" y="64" text-anchor="middle" fill="#38BDF8" font-size="18" font-weight="700">距離 b</text>
  <text x="250" y="132" text-anchor="middle" fill="#E2E8F0" font-size="20" font-weight="700">a − b</text>
  <text x="410" y="132" text-anchor="middle" fill="#FBBF24" font-size="20" font-weight="700">中心 a</text>
  <text x="570" y="132" text-anchor="middle" fill="#E2E8F0" font-size="20" font-weight="700">a + b</text>

  <text x="36" y="180" fill="#FB7185" font-size="22" font-weight="700">|x − a| ≥ b ：落在兩側（離中心 a 至少 b）</text>
  <line x1="70" y1="224" x2="750" y2="224" stroke="#475569" stroke-width="3"/>
  <polygon points="750,217 766,224 750,231" fill="#475569"/>
  <rect x="80" y="214" width="170" height="20" rx="10" fill="rgba(244,63,94,0.35)" stroke="#F43F5E" stroke-width="2.5"/>
  <rect x="570" y="214" width="170" height="20" rx="10" fill="rgba(244,63,94,0.35)" stroke="#F43F5E" stroke-width="2.5"/>
  <circle cx="250" cy="224" r="8" fill="#F43F5E"/>
  <circle cx="410" cy="224" r="7" fill="#94A3B8"/>
  <circle cx="570" cy="224" r="8" fill="#F43F5E"/>
  <text x="165" y="254" text-anchor="middle" fill="#FDA4AF" font-size="19" font-weight="700">x ≤ a − b</text>
  <text x="410" y="254" text-anchor="middle" fill="#94A3B8" font-size="18">a</text>
  <text x="655" y="254" text-anchor="middle" fill="#FDA4AF" font-size="19" font-weight="700">x ≥ a + b</text>
</svg>
"""

SVG_COORD_DISTANCE = """
<svg viewBox="0 0 640 420" width="100%" height="420" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="640" height="420" rx="18" fill="#0B1220" stroke="#1E293B" stroke-width="2"/>
  <g stroke="#1E293B" stroke-width="1">
    <line x1="120" y1="40" x2="120" y2="380"/><line x1="220" y1="40" x2="220" y2="380"/>
    <line x1="320" y1="40" x2="320" y2="380"/><line x1="420" y1="40" x2="420" y2="380"/>
    <line x1="520" y1="40" x2="520" y2="380"/>
    <line x1="60" y1="100" x2="580" y2="100"/><line x1="60" y1="180" x2="580" y2="180"/>
    <line x1="60" y1="260" x2="580" y2="260"/><line x1="60" y1="340" x2="580" y2="340"/>
  </g>
  <line x1="60" y1="340" x2="585" y2="340" stroke="#64748B" stroke-width="2.5"/>
  <line x1="120" y1="380" x2="120" y2="40" stroke="#64748B" stroke-width="2.5"/>
  <text x="575" y="368" fill="#94A3B8" font-size="20" font-weight="700">x</text>
  <text x="95" y="58" fill="#94A3B8" font-size="20" font-weight="700">y</text>

  <polygon points="180,290 490,290 490,110" fill="rgba(56,189,248,0.12)" stroke="none"/>
  <line x1="180" y1="290" x2="490" y2="290" stroke="#38BDF8" stroke-width="3" stroke-dasharray="8,6"/>
  <line x1="490" y1="290" x2="490" y2="110" stroke="#38BDF8" stroke-width="3" stroke-dasharray="8,6"/>
  <rect x="470" y="270" width="20" height="20" fill="none" stroke="#38BDF8" stroke-width="2"/>
  <line x1="180" y1="290" x2="490" y2="110" stroke="#F59E0B" stroke-width="5"/>
  <circle cx="180" cy="290" r="9" fill="#38BDF8"/>
  <circle cx="335" cy="200" r="9" fill="#10B981"/>
  <circle cx="490" cy="110" r="9" fill="#38BDF8"/>

  <text x="165" y="325" fill="#E2E8F0" font-size="22" font-weight="700">A(x₁, y₁)</text>
  <text x="455" y="92" fill="#E2E8F0" font-size="22" font-weight="700">B(x₂, y₂)</text>
  <text x="275" y="182" fill="#34D399" font-size="22" font-weight="700">中點 M</text>
  <text x="335" y="320" text-anchor="middle" fill="#38BDF8" font-size="22" font-weight="700">Δx = x₂ − x₁</text>
  <text x="505" y="206" fill="#38BDF8" font-size="22" font-weight="700">Δy = y₂ − y₁</text>
  <text x="295" y="246" fill="#FBBF24" font-size="22" font-weight="700">AB = √(Δx² + Δy²)</text>
</svg>
"""

SVG_SECTION_POINT = """
<svg viewBox="0 0 760 320" width="100%" height="320" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="760" height="320" rx="18" fill="#0B1220" stroke="#1E293B" stroke-width="2"/>
  <line x1="120" y1="165" x2="640" y2="165" stroke="#475569" stroke-width="6" stroke-linecap="round"/>
  <line x1="120" y1="165" x2="293" y2="165" stroke="#38BDF8" stroke-width="8" stroke-linecap="round"/>
  <line x1="293" y1="165" x2="640" y2="165" stroke="#F59E0B" stroke-width="8" stroke-linecap="round"/>
  <circle cx="120" cy="165" r="12" fill="#38BDF8"/>
  <circle cx="293" cy="165" r="14" fill="#10B981" stroke="#ECFDF5" stroke-width="3"/>
  <circle cx="640" cy="165" r="12" fill="#F59E0B"/>

  <text x="120" y="212" text-anchor="middle" fill="#E2E8F0" font-size="24" font-weight="700">A(−2, 1)</text>
  <text x="293" y="218" text-anchor="middle" fill="#34D399" font-size="26" font-weight="800">P(0, 3)</text>
  <text x="640" y="212" text-anchor="middle" fill="#E2E8F0" font-size="24" font-weight="700">B(4, 7)</text>

  <path d="M128,142 Q206,104 285,142" fill="none" stroke="#38BDF8" stroke-width="3"/>
  <text x="206" y="112" text-anchor="middle" fill="#38BDF8" font-size="24" font-weight="800">m = 1</text>
  <path d="M302,142 Q466,94 632,142" fill="none" stroke="#F59E0B" stroke-width="3"/>
  <text x="466" y="106" text-anchor="middle" fill="#FBBF24" font-size="24" font-weight="800">n = 2</text>

  <rect x="115" y="248" width="530" height="50" rx="12" fill="rgba(16,185,129,0.16)" stroke="#10B981" stroke-width="2"/>
  <text x="380" y="281" text-anchor="middle" fill="#ECFDF5" font-size="22" font-weight="700">交叉配重：P 靠近 A ⇒ A 乘 2、B 乘 1 ⇒ P = (2A + 1B) / 3</text>
</svg>
"""

SVG_LINEAR_MAP = """
<svg viewBox="0 0 760 280" width="100%" height="280" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="760" height="280" rx="18" fill="#0B1220" stroke="#1E293B" stroke-width="2"/>
  <rect x="48" y="60" width="220" height="160" rx="16" fill="#1E293B" stroke="#38BDF8" stroke-width="2.5"/>
  <text x="158" y="102" text-anchor="middle" fill="#38BDF8" font-size="22" font-weight="700">原始資料區間</text>
  <text x="158" y="152" text-anchor="middle" fill="#F8FAFC" font-size="36" font-weight="800">[ p , q ]</text>
  <text x="158" y="195" text-anchor="middle" fill="#94A3B8" font-size="19">寬度 = q − p</text>

  <line x1="286" y1="140" x2="464" y2="140" stroke="#F59E0B" stroke-width="5"/>
  <polygon points="462,129 484,140 462,151" fill="#F59E0B"/>
  <rect x="305" y="72" width="150" height="46" rx="10" fill="rgba(245,158,11,0.18)" stroke="#F59E0B" stroke-width="2"/>
  <text x="380" y="103" text-anchor="middle" fill="#FBBF24" font-size="23" font-weight="800">f(x) = ax + b</text>
  <text x="380" y="182" text-anchor="middle" fill="#E2E8F0" font-size="20" font-weight="700">a = (s − r) / (q − p)</text>
  <text x="380" y="212" text-anchor="middle" fill="#94A3B8" font-size="18">（a &gt; 0 遞增，端點依序對應）</text>

  <rect x="492" y="60" width="220" height="160" rx="16" fill="#1E293B" stroke="#10B981" stroke-width="2.5"/>
  <text x="602" y="102" text-anchor="middle" fill="#34D399" font-size="22" font-weight="700">轉換後區間</text>
  <text x="602" y="152" text-anchor="middle" fill="#F8FAFC" font-size="36" font-weight="800">[ r , s ]</text>
  <text x="602" y="195" text-anchor="middle" fill="#94A3B8" font-size="19">寬度 = s − r</text>
</svg>
"""

# Exact parabola: y(x) = 110 + (280 / 195^2) * (x - 360)^2
# At x=210: dx=-150 -> y = 110 + 280*(22500/38025) = 275.7
# At y=250: dx = 195 * sqrt(140/280) = 137.9 -> x = 222.1 and 497.9
SVG_PARABOLA_SIGNS = """
<svg viewBox="0 0 640 420" width="100%" height="420" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="640" height="420" rx="18" fill="#0B1220" stroke="#1E293B" stroke-width="2"/>
  <line x1="50" y1="250" x2="590" y2="250" stroke="#64748B" stroke-width="2.5"/>
  <line x1="210" y1="390" x2="210" y2="35" stroke="#64748B" stroke-width="2.5"/>
  <text x="576" y="278" fill="#94A3B8" font-size="22" font-weight="700">x</text>
  <text x="184" y="54" fill="#94A3B8" font-size="22" font-weight="700">y</text>
  <text x="184" y="276" fill="#94A3B8" font-size="20">O</text>

  <line x1="360" y1="55" x2="360" y2="375" stroke="#F59E0B" stroke-width="2.5" stroke-dasharray="7,6"/>
  <text x="372" y="84" fill="#FBBF24" font-size="20" font-weight="700">對稱軸 x = −b/(2a) &gt; 0</text>

  <path d="M 165,390 Q 360,-170 555,390" fill="none" stroke="#38BDF8" stroke-width="5"/>
  <circle cx="360" cy="110" r="9" fill="#F59E0B"/>
  <text x="376" y="118" fill="#FBBF24" font-size="21" font-weight="700">頂點在第一象限</text>
  <circle cx="210" cy="276" r="9" fill="#FB7185"/>
  <text x="108" y="302" fill="#FDA4AF" font-size="22" font-weight="700">c &lt; 0</text>
  <circle cx="222" cy="250" r="8" fill="#10B981"/>
  <circle cx="498" cy="250" r="8" fill="#10B981"/>
  <text x="506" y="234" fill="#34D399" font-size="20" font-weight="700">兩交點 ⇒ D &gt; 0</text>
</svg>
"""

SVG_QUAD_INEQ = """
<svg viewBox="0 0 760 300" width="100%" height="300" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="760" height="300" rx="18" fill="#0B1220" stroke="#1E293B" stroke-width="2"/>
  <line x1="60" y1="165" x2="700" y2="165" stroke="#64748B" stroke-width="3"/>
  <text x="688" y="196" fill="#94A3B8" font-size="20" font-weight="700">x</text>

  <rect x="70" y="157" width="180" height="16" rx="8" fill="rgba(244,63,94,0.4)"/>
  <rect x="510" y="157" width="180" height="16" rx="8" fill="rgba(244,63,94,0.4)"/>
  <rect x="250" y="157" width="260" height="16" rx="8" fill="rgba(16,185,129,0.45)"/>

  <path d="M 165,30 Q 380,455 595,30" fill="none" stroke="#38BDF8" stroke-width="5"/>
  <circle cx="250" cy="165" r="9" fill="#F59E0B"/>
  <circle cx="510" cy="165" r="9" fill="#F59E0B"/>
  <text x="235" y="148" fill="#FBBF24" font-size="24" font-weight="800">α</text>
  <text x="515" y="148" fill="#FBBF24" font-size="24" font-weight="800">β</text>

  <text x="145" y="132" text-anchor="middle" fill="#FDA4AF" font-size="20" font-weight="700">f(x) &gt; 0（左側）</text>
  <text x="615" y="132" text-anchor="middle" fill="#FDA4AF" font-size="20" font-weight="700">f(x) &gt; 0（右側）</text>
  <text x="380" y="218" text-anchor="middle" fill="#34D399" font-size="22" font-weight="800">f(x) &lt; 0（夾在兩根之間：α &lt; x &lt; β）</text>
  <text x="380" y="280" text-anchor="middle" fill="#94A3B8" font-size="18">前提：先把領導係數整理成 a &gt; 0（開口向上）</text>
</svg>
"""

SVG_FENCE_SITE = """
<svg viewBox="0 0 640 360" width="100%" height="360" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="640" height="360" rx="18" fill="#0B1220" stroke="#1E293B" stroke-width="2"/>
  <rect x="60" y="52" width="520" height="28" fill="#334155" stroke="#64748B" stroke-width="2"/>
  <text x="320" y="72" text-anchor="middle" fill="#E2E8F0" font-size="18" font-weight="700">既有圍牆（不需圍籬）</text>
  <rect x="130" y="80" width="380" height="170" fill="rgba(56,189,248,0.14)" stroke="none"/>
  <polyline points="130,80 130,250 510,250 510,80" fill="none" stroke="#F59E0B" stroke-width="6"/>
  <text x="102" y="172" text-anchor="end" fill="#FBBF24" font-size="24" font-weight="800">x</text>
  <text x="536" y="172" fill="#FBBF24" font-size="24" font-weight="800">x</text>
  <text x="320" y="286" text-anchor="middle" fill="#38BDF8" font-size="24" font-weight="800">60 − 2x</text>
  <text x="320" y="170" text-anchor="middle" fill="#F8FAFC" font-size="26" font-weight="800">堆置區面積 A(x)</text>
  <text x="320" y="206" text-anchor="middle" fill="#94A3B8" font-size="20">A(x) = x(60 − 2x) = −2x² + 60x</text>
  <rect x="145" y="304" width="350" height="38" rx="10" fill="rgba(244,63,94,0.2)" stroke="#F43F5E" stroke-width="2"/>
  <text x="320" y="330" text-anchor="middle" fill="#FDA4AF" font-size="20" font-weight="700">通道寬度限制：0 &lt; x ≤ 12 m</text>
</svg>
"""

SVG_FENCE_GRAPH = """
<svg viewBox="0 0 640 360" width="100%" height="360" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="640" height="360" rx="18" fill="#0B1220" stroke="#1E293B" stroke-width="2"/>
  <line x1="70" y1="300" x2="590" y2="300" stroke="#64748B" stroke-width="2.5"/>
  <line x1="90" y1="320" x2="90" y2="40" stroke="#64748B" stroke-width="2.5"/>
  <text x="578" y="328" fill="#94A3B8" font-size="20">x</text>
  <text x="54" y="54" fill="#94A3B8" font-size="20">A(x)</text>

  <rect x="90" y="50" width="200" height="250" fill="rgba(16,185,129,0.12)"/>
  <line x1="290" y1="50" x2="290" y2="300" stroke="#10B981" stroke-width="3" stroke-dasharray="7,5"/>
  <text x="190" y="76" text-anchor="middle" fill="#34D399" font-size="19" font-weight="700">允許區間 0 &lt; x ≤ 12</text>

  <path d="M 90,300 Q 340,-110 590,300" fill="none" stroke="#475569" stroke-width="3" stroke-dasharray="6,6"/>
  <path d="M 90,300 Q 190,140 290,103" fill="none" stroke="#10B981" stroke-width="6"/>

  <circle cx="340" cy="95" r="8" fill="#F43F5E"/>
  <text x="358" y="96" fill="#FDA4AF" font-size="20" font-weight="700">頂點 (15, 450) ✗ 超界</text>

  <circle cx="290" cy="103" r="10" fill="#F59E0B" stroke="#FEF3C7" stroke-width="3"/>
  <rect x="102" y="138" width="180" height="36" rx="8" fill="rgba(15,23,42,0.88)" stroke="#F59E0B" stroke-width="1.5"/>
  <text x="192" y="162" text-anchor="middle" fill="#FBBF24" font-size="19" font-weight="800">最大 (12, 432) ✓</text>

  <text x="290" y="328" text-anchor="middle" fill="#34D399" font-size="20" font-weight="700">12</text>
  <text x="340" y="328" text-anchor="middle" fill="#FDA4AF" font-size="20" font-weight="700">15</text>
</svg>
"""

SVG_CHAIN_INEQ = """
<svg viewBox="0 0 820 260" width="100%" height="260" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="820" height="260" rx="18" fill="#0B1220" stroke="#1E293B" stroke-width="2"/>
  <line x1="60" y1="205" x2="760" y2="205" stroke="#64748B" stroke-width="3"/>
  <g fill="#E2E8F0" font-size="20" font-weight="700" text-anchor="middle">
    <text x="170" y="238">−2</text><text x="270" y="238">−1</text>
    <text x="370" y="238">0</text><text x="570" y="238">2</text><text x="690" y="238">4</text>
  </g>
  <text x="45" y="54" fill="#38BDF8" font-size="20" font-weight="700">① x² − x − 2 &gt; 0 ⇒ x &lt; −1 或 x &gt; 2</text>
  <line x1="70" y1="78" x2="270" y2="78" stroke="#38BDF8" stroke-width="6"/>
  <circle cx="270" cy="78" r="7" fill="#0B1220" stroke="#38BDF8" stroke-width="3"/>
  <line x1="570" y1="78" x2="750" y2="78" stroke="#38BDF8" stroke-width="6"/>
  <circle cx="570" cy="78" r="7" fill="#0B1220" stroke="#38BDF8" stroke-width="3"/>

  <text x="45" y="122" fill="#FBBF24" font-size="20" font-weight="700">② x² − 2x − 8 &lt; 0 ⇒ −2 &lt; x &lt; 4</text>
  <line x1="170" y1="145" x2="690" y2="145" stroke="#F59E0B" stroke-width="6"/>
  <circle cx="170" cy="145" r="7" fill="#0B1220" stroke="#F59E0B" stroke-width="3"/>
  <circle cx="690" cy="145" r="7" fill="#0B1220" stroke="#F59E0B" stroke-width="3"/>

  <rect x="170" y="196" width="100" height="18" rx="9" fill="rgba(16,185,129,0.5)" stroke="#10B981" stroke-width="2.5"/>
  <rect x="570" y="196" width="120" height="18" rx="9" fill="rgba(16,185,129,0.5)" stroke="#10B981" stroke-width="2.5"/>
  <text x="410" y="185" text-anchor="middle" fill="#34D399" font-size="21" font-weight="800">交集答案：−2 &lt; x &lt; −1 或 2 &lt; x &lt; 4</text>
</svg>
"""

SCENES = [
    # ================= PART 1: 開場破題 (0:00 - 0:45) =================
    {
        "id": "01",
        "chapter_idx": 0,
        "chime": True,
        "layout": "cover",
        "badge": "108 課綱 × 111–115 統測精講",
        "title": "第 01 課：坐標系與函數圖形",
        "subtitle": "十分鐘打包高工數學 C 開局核心｜知識點 × 避坑心法 × 統測題型解析",
        "stats": [
            ("課綱代碼", "TCTE115-MC1"),
            ("111–115 命題數", "9 題高頻必考"),
            ("建議學習時間", "10 分鐘精講"),
            ("工程實務連結", "放樣・品管・最佳化"),
        ],
        "narration": (
            "哈囉大家好，歡迎來到 Arch 高工數學懶人包！我是你的數學領航員。"
            "工地放樣要看坐標、預鑄板品管要算誤差絕對值、圍籬規劃要算最大面積，全都藏在高工數學 C 第一課！"
            "近五年統測這章直接考了九題，都是最穩的基本分。接下來十分鐘，我們用圖像跟口訣幫你一次打包！"
        ),
    },
    {
        "id": "02",
        "chapter_idx": 0,
        "chime": False,
        "layout": "roadmap",
        "title": "本課 10 分鐘作戰地圖",
        "subtitle": "依照 Arch 優化課綱，把 5 大知識點、4 大陷阱、4 題實戰一次串起來",
        "items": [
            ("01", "實數與根式運算", "√(x²) = |x|、分母有理化、算幾不等式"),
            ("02", "絕對值與不等式", "用「數線距離」秒解 |x − a| ≤ b 與範圍反推"),
            ("03", "平面坐標與分點", "距離公式、中點與「交叉權重」分點公式"),
            ("04", "一次與二次函數", "區間線性變換、配方法頂點、由圖判係數正負"),
            ("05", "統測避坑 × 實戰", "拆解 111–115 統測誘答陷阱，帶練 4 大經典題型"),
        ],
        "narration": (
            "先花十秒看作戰地圖：我們會依序破解實數根式、絕對值距離、平面分點、一次與二次函數，最後直擊考場四大雷區，帶練四道統測經典題。馬上出發！"
        ),
    },

    # ================= PART 2: 核心知識點精講 (0:45 - 5:20) =================
    {
        "id": "03",
        "chapter_idx": 1,
        "chime": True,
        "layout": "concept_table",
        "tag": "知識點 1A｜MC1.1",
        "title": "實數分類與根式鐵則：√(x²) = |x|",
        "formula": "√(x²) = |x|　　　∛(x³) = x（所有實數皆成立）",
        "bullets": [
            "有理數＝可寫成分數 p/q（含有限、循環小數）；無理數＝無限不循環小數（如 √2、π）。",
            "工程計算先保留根號（如 5√2 m ≈ 7.07 m），最後一步才取近似值，避免累積誤差。",
            "關鍵差別：平方再開根號會「吃掉負號」，必須加絕對值；立方根則保留正負號！",
        ],
        "table": {
            "headers": ["數的類別", "判斷特徵", "常見例子", "考場提醒"],
            "rows": [
                ["有理數", "可寫成 p/q", "3/4、−2、0.25", "有限與循環小數都是有理數"],
                ["無理數", "無限不循環小數", "√2、√3、π", "√4 = 2 是有理數，別看到根號就誤判"],
                ["√(x²)", "結果必非負", "√((−3)²) = |−3| = 3", "只有 x ≥ 0 時才等於 x"],
                ["∛(x³)", "正負號保留", "∛((−2)³) = −2", "立方根沒有非負限制"],
            ],
        },
        "narration": (
            "第一站：實數與根式。能寫成分數或循環小數的是有理數，像根號四等於二其實是有理數喔！"
            "必考鐵則是「根號 x 平方等於絕對值 x」，平方再開方會吃掉負號，像負三平方開根號是正三。"
            "反過來，三次根號 x 三次方會保留正負號，對所有實數都直接等於 x。"
        ),
    },
    {
        "id": "04a",
        "chapter_idx": 1,
        "chime": False,
        "layout": "math_steps",
        "tag": "知識點 1B｜分母有理化（一步一步化解）",
        "title": "分母有理化：用平方差消去分母根號",
        "formula_html": (
            '核心公式：'
            '<span class="frac"><span class="num">1</span><span class="den">√a − √b</span></span>'
            ' = '
            '<span class="frac"><span class="num">√a + √b</span><span class="den">a − b</span></span>'
            '　（利用 <span class="hl-cyan">(A − B)(A + B) = A² − B²</span>）'
        ),
        "active_step": 1,
        "math_steps": [
            (
                "原題目",
                '<span class="frac"><span class="num">1</span><span class="den hl-rose">√5 − 2</span></span>',
                "分母有根號 √5 − 2，不能直接當最終答案，必須把分母變有理數。",
            ),
            (
                "步驟 1｜同乘共軛",
                '<span class="frac"><span class="num">1</span><span class="den">√5 − 2</span></span>'
                ' × '
                '<span class="frac hl-amber"><span class="num">√5 + 2</span><span class="den">√5 + 2</span></span>',
                "分母是「減」，就上下同乘「加」的共軛式 (√5 + 2)！上下同乘相當於乘 1，原式值不變。",
            ),
        ],
        "narration": (
            "接下來我們把「分母有理化」一步一步拆開來算給你看！"
            "看這題：根號五減二分之一。因為分母有根號，統測選項一定會要求化簡。"
            "第一步，看到分母是「根號五減二」，我們就把分子跟分母，同時乘上它的好兄弟共軛式「根號五加二」。上下同乘等於乘以一，數值完全不會改變。"
        ),
    },
    {
        "id": "04b",
        "chapter_idx": 1,
        "chime": False,
        "layout": "math_steps",
        "tag": "知識點 1B｜分母有理化（一步一步化解）",
        "title": "分母有理化：分子相乘、分母套平方差",
        "formula_html": (
            '核心公式：'
            '<span class="frac"><span class="num">1</span><span class="den">√a − √b</span></span>'
            ' = '
            '<span class="frac"><span class="num">√a + √b</span><span class="den">a − b</span></span>'
            '　（利用 <span class="hl-cyan">(A − B)(A + B) = A² − B²</span>）'
        ),
        "active_step": 2,
        "math_steps": [
            (
                "原題目",
                '<span class="frac"><span class="num">1</span><span class="den">√5 − 2</span></span>',
                "目標：讓分母的根號徹底消失。",
            ),
            (
                "步驟 1｜同乘共軛",
                '<span class="frac"><span class="num">1</span><span class="den">√5 − 2</span></span>'
                ' × '
                '<span class="frac"><span class="num">√5 + 2</span><span class="den">√5 + 2</span></span>',
                "分子分母同乘 (√5 + 2)。",
            ),
            (
                "步驟 2｜平方差展開",
                '= <span class="frac"><span class="num hl-cyan">1 × (√5 + 2)</span><span class="den hl-amber">(√5)² − 2²</span></span>',
                "關鍵來了！分母 (√5 − 2)(√5 + 2) 直接套平方差變成 (√5)² 減 2²，中間交叉項自動抵銷！",
            ),
        ],
        "narration": (
            "第二步最關鍵！分子一乘上根號五加二，就是根號五加二；"
            "分母的根號五減二，乘上根號五加二，直接套用國中學過的平方差公式，變成「根號五的平方，減掉二的平方」，討厭的中間根號項就自動消掉了！"
        ),
    },
    {
        "id": "04c",
        "chapter_idx": 1,
        "chime": False,
        "layout": "math_steps",
        "tag": "知識點 1B｜分母有理化（一步一步化解）",
        "title": "分母有理化：化簡完成＋數值驗算",
        "formula_html": (
            '核心公式：'
            '<span class="frac"><span class="num">1</span><span class="den">√a − √b</span></span>'
            ' = '
            '<span class="frac"><span class="num">√a + √b</span><span class="den">a − b</span></span>'
            '　（利用 <span class="hl-cyan">(A − B)(A + B) = A² − B²</span>）'
        ),
        "active_step": 2,
        "math_steps": [
            (
                "步驟 1｜同乘共軛",
                '<span class="frac"><span class="num">1</span><span class="den">√5 − 2</span></span>'
                ' × '
                '<span class="frac"><span class="num">√5 + 2</span><span class="den">√5 + 2</span></span>',
                "上下同乘 (√5 + 2)。",
            ),
            (
                "步驟 2｜平方差展開",
                '= <span class="frac"><span class="num">√5 + 2</span><span class="den">(√5)² − 2²</span></span>',
                "分母展開為平方差，注意中間是「減號」不是加號！",
            ),
            (
                "步驟 3｜化簡得解",
                '= <span class="frac"><span class="num">√5 + 2</span><span class="den hl-amber">5 − 4</span></span>'
                ' = <span class="frac"><span class="num">√5 + 2</span><span class="den">1</span></span>'
                ' = <span class="hl-green">√5 + 2</span>',
                "(√5)² = 5、2² = 4，分母 5 − 4 = 1，直接化簡成最清爽的 √5 + 2！",
            ),
        ],
        "verify": "考場防呆驗算：√5 ≈ 2.236 ⇒ 原式 1 ÷ (2.236 − 2) ≈ 4.24；答案 2.236 + 2 = 4.236，完全吻合！",
        "narration": (
            "第三步算出來：根號五的平方是五，二的平方是四，千萬別把減號算成加號喔！五減四等於一，所以答案就是清爽的「根號五加二」。"
            "不放心的話，用根號五約二點二三六代回去驗算，兩邊都約四點二四，百分之百正確！"
        ),
    },
    {
        "id": "04d",
        "chapter_idx": 1,
        "chime": False,
        "layout": "math_steps",
        "tag": "知識點 1C｜算幾不等式（一步一步求極值）",
        "title": "算幾不等式實戰：已知 x > 0，求 x + 9/x 的最小值",
        "formula_html": (
            '算幾不等式（a, b > 0）：'
            '<span class="frac"><span class="num">a + b</span><span class="den">2</span></span>'
            ' ≥ √(a · b)　　<span class="hl-cyan">口訣：積固定，相等時和最小！</span>'
        ),
        "active_step": 2,
        "math_steps": [
            (
                "步驟 1｜代入公式",
                '<span class="frac"><span class="num">x + <span class="hl-cyan">9/x</span></span><span class="den">2</span></span>'
                ' ≥ √( <span class="hl-amber">x · (9/x)</span> )',
                "因為 x > 0 且 9/x > 0，符合兩正數條件！直接把兩項塞進算幾不等式。",
            ),
            (
                "步驟 2｜約分開根號",
                '<span class="frac"><span class="num">x + 9/x</span><span class="den">2</span></span>'
                ' ≥ √9 = <span class="hl-amber">3</span>',
                "最爽的一步：根號裡面的 x 跟分母的 x 互相約掉，只剩 √9 = 3！",
            ),
            (
                "步驟 3｜求最小值",
                'x + 9/x ≥ <span class="hl-green">6</span>　（等號於 x = 9/x ⇒ <span class="hl-cyan">x = 3</span> 時成立）',
                "兩邊同乘 2 得最小值 6；等號發生在「兩數相等」時，解 x² = 9 得 x = 3！",
            ),
        ],
        "verify": "提醒：算幾不等式一定要先確認兩數「皆為正數」，且等號條件 a = b 必須真的解得出來！",
        "narration": (
            "接著獨立看「算幾不等式」，我們一樣用一題實戰一步步算：已知 x 大於零，求 x 加 x 分之九的最小值。"
            "第一步，因為兩項都是正數，直接代入二分之 a 加 b 大於等於根號 ab。"
            "第二步最爽，根號裡 x 跟分母的 x 剛好約掉，只剩根號九等於三！"
            "第三步兩邊同乘二，立刻得到 x 加 x 分之九大於等於六，最小值就是六！而且等號發生在兩數相等，也就是 x 等於三的時候，是不是超好懂？"
        ),
    },
    {
        "id": "05",
        "chapter_idx": 1,
        "chime": False,
        "layout": "concept_svg",
        "tag": "知識點 2A｜MC1.2",
        "title": "絕對值＝數線上的距離，看圖秒解不等式",
        "formula": "|x − a| ≤ b ⇔ a − b ≤ x ≤ a + b　　|x − a| ≥ b ⇔ x ≤ a − b 或 x ≥ a + b",
        "svg": SVG_NUMBER_LINE_ABS,
        "bullets": [
            "不要死背正負號！把 |x − a| 直接翻譯成「x 到中心 a 的距離」。",
            "小於等於 b：距離不超過 b ⇒ 夾在中心左右 b 的線段中間。",
            "大於等於 b：距離至少 b ⇒ 落在中心左右 b 以外的兩條射線。",
        ],
        "narration": (
            "第二站：絕對值！別死背公式，把絕對值 x 減 a 讀成「x 到中心 a 的距離」。"
            "看數線圖：小於等於 b 代表距離不超過 b，所以夾在 a 減 b 跟 a 加 b 中間；大於等於 b 代表離中心至少 b，解就落在左右兩側！先標中心再走半徑，方向絕不搞反。"
        ),
    },
    {
        "id": "06",
        "chapter_idx": 1,
        "chime": False,
        "layout": "concept_cards",
        "tag": "知識點 2B｜MC1.2",
        "title": "統測高頻變形：範圍反推 & 提出係數",
        "formula": "p ≤ x ≤ q  ⇔  |x − c| ≤ d，其中 中心 c = (p + q)/2、半徑 d = (q − p)/2",
        "cards": [
            {
                "color": "emerald",
                "heading": "招式 1：已知範圍反推絕對值（111、115 統測必考）",
                "body": "給定合格區間 p ≤ x ≤ q，要求寫成 |x − c| ≤ d：",
                "example": "例：3.1 ≤ x ≤ 4.9 ⇒ 中心 c = (3.1+4.9)/2 = 4，半徑 d = (4.9−3.1)/2 = 0.9 ⇒ |x − 4| ≤ 0.9",
            },
            {
                "color": "cyan",
                "heading": "招式 2：x 前面有係數時，先提出來！",
                "body": "看到 |2x − 6| ≤ 4，先把 2 提出變 2|x − 3| ≤ 4，同除以 2：",
                "example": "|x − 3| ≤ 2 ⇒ 中心 3、半徑 2 ⇒ 1 ≤ x ≤ 5（端點含等號要特別檢查！）",
            },
        ],
        "narration": (
            "統測超愛反過來考！給你範圍三點一到四點九，求中心就把兩端相加除以二得四，求半徑把兩端相減除以二得零點九，秒寫成絕對值 x 減四小於等於零點九。"
            "若 x 前面有係數，像絕對值二 x 減六小於等於四，先把二提出來同除以二，就能一眼讀出中心跟半徑！"
        ),
    },
    {
        "id": "07",
        "chapter_idx": 1,
        "chime": False,
        "layout": "split_svg",
        "tag": "知識點 3A｜MC1.3",
        "title": "平面坐標系：兩點距離與中點公式",
        "svg": SVG_COORD_DISTANCE,
        "formula": "AB = √[(x₂ − x₁)² + (y₂ − y₁)²]　　M = ((x₁ + x₂)/2, (y₁ + y₂)/2)",
        "bullets": [
            "兩點距離本質就是「畢氏定理」：水平差 Δx 平方 ＋ 垂直差 Δy 平方，再開根號。",
            "建築與測量應用：算柱位中心距、基地對角線長，全靠它！",
            "中點公式：x、y 各自取平均，常用於找樑跨中點或門窗置中。",
            "象限判斷：(+, +) 一、(−, +) 二、(−, −) 三、(+, −) 四；坐標軸上不屬任何象限。",
        ],
        "narration": (
            "第三站：平面坐標系。建築放樣跟 CAD 都在平面上定位。"
            "看左圖，兩點距離就是畢氏定理：水平差平方加垂直差平方再開根號；中點公式就是 x、y 各自取平均，拿來找樑跨中點超實用。"
            "象限判斷更單純，只要分別看 x 跟 y 的正負號就行。"
        ),
    },
    {
        "id": "08",
        "chapter_idx": 1,
        "chime": False,
        "layout": "concept_svg",
        "tag": "知識點 3B｜MC1.3",
        "title": "分點公式：「交叉權重」一眼看懂不代反",
        "formula": "若 AP : PB = m : n，則 P = (n·A + m·B) / (m + n)",
        "svg": SVG_SECTION_POINT,
        "bullets": [
            "直覺記憶：P 越靠近 A（AP 越短），A 的影響力越大，所以 A 要乘上「對面」的 n！",
            "x、y 坐標各自做加權平均，也是第 3 課「平面向量分點」的前身。",
            "秒殺驗算：算完 P 後，檢查 AP 是否佔全長 AB 的 m/(m+n)，一秒防代反。",
        ],
        "narration": (
            "最容易代反的是分點公式！看圖上 AP 比 PB 等於一比二，P 明顯靠近 A，所以 A 拉它的力道比較大，權重是交叉的：A 乘二、B 乘一再除以三！"
            "把負二逗點一跟四逗點七代入，立刻算出 P 點零逗點三。記住「近的權重大、比例交叉乘」，保證不代反。"
        ),
    },
    {
        "id": "09",
        "chapter_idx": 1,
        "chime": False,
        "layout": "concept_svg",
        "tag": "知識點 4｜MC1.4",
        "title": "函數判別與一次函數區間變換（113 統測熱點）",
        "formula": "f(x) = ax + b　｜　[p, q] → [r, s]（a > 0）⇒ a = (s − r)/(q − p)，b = r − a·p",
        "svg": SVG_LINEAR_MAP,
        "bullets": [
            "鉛直線檢驗：一個輸入 x 只能對應唯一輸出 y，鉛直線最多只交圖形一點。",
            "一次函數 f(x) = ax + b：斜率 a 是「輸出變化量 ÷ 輸入變化量」，b 是 y 截距。",
            "113 年統測考「生成式 AI 資料轉換」：[p, q] 映到 [r, s]，鎖定端點 (p, r) 與 (q, s)！",
        ],
        "narration": (
            "第四站：函數與一次函數。判斷函數用「鉛直線檢驗」，垂直線最多只交一點。"
            "一一三年統測考了生成式 AI 資料轉換，把區間 p 到 q 用遞增一次函數映到 r 到 s。超簡單：斜率 a 就是新寬度 s 減 r 除以舊寬度 q 減 p，再代任一端點就解出 b 囉！"
        ),
    },
    {
        "id": "10",
        "chapter_idx": 1,
        "chime": False,
        "layout": "concept_cards",
        "tag": "知識點 5A｜MC1.4",
        "title": "二次函數配方法與「定義域」極值觀念",
        "formula": "f(x) = ax² + bx + c = a(x − h)² + k　｜　頂點 h = −b/(2a)，k = f(h)",
        "cards": [
            {
                "color": "cyan",
                "heading": "配方法三步驟（必練基本功）",
                "body": "① 提出 x² 係數 a；② 括號內補「一次項係數一半的平方」；③ 括號外扣回 a 倍常數！",
                "example": "例：−x² + 6x = −(x² − 6x + 9) + 9 = −(x − 3)² + 9 ⇒ 頂點 (3, 9)，最大值 9",
            },
            {
                "color": "rose",
                "heading": "工程應用必看：頂點在定義域內嗎？",
                "body": "邊長不能為負、基地有寬度上限！求極值前一定要先檢查頂點 h 是否落在定義域內。",
                "example": "若頂點落在範圍外 ⇒ 極值一定發生在「離頂點最近的端點」，千萬別直接抄 k！",
            },
        ],
        "narration": (
            "第五站是壓軸重點：二次函數！配方先提 a、括號裡補一次項一半的平方、外面記得乘 a 平衡，或直接套 h 等於負二 a 分之 b 找頂點。"
            "但注意喔，應用題一定有範圍限制，算完頂點先檢查有沒有超界；如果超界，極值會改落在離頂點最近的端點上！"
        ),
    },
    {
        "id": "11",
        "chapter_idx": 1,
        "chime": False,
        "layout": "split_svg",
        "tag": "知識點 5B｜MC1.4",
        "title": "由拋物線圖秒判係數正負（115 統測必考）",
        "svg": SVG_PARABOLA_SIGNS,
        "formula": "開口 → a　｜　y 截距 → c　｜　對稱軸 −b/(2a) → b　｜　x 軸交點 → D = b² − 4ac",
        "bullets": [
            "看開口：向上 ⇒ a > 0；向下 ⇒ a < 0。",
            "看 y 軸交點：令 x = 0 得 y = c；原點上方 c > 0，下方 c < 0。",
            "看對稱軸（左同右異）：軸在 y 軸右側 ⇒ −b/(2a) > 0 ⇒ a、b 異號！",
            "看 x 軸交點數：兩交點 ⇒ D > 0；相切 ⇒ D = 0；無交點 ⇒ D < 0。",
        ],
        "narration": (
            "一一五年統測剛考過看圖判係數！四條線索直接秒殺：開口向上 a 正、向下 a 負；跟 y 軸交點直接看 c 正負；對稱軸記四字口訣「左同右異」，在左邊 a、b 同號，在右邊 a、b 異號；最後看跟 x 軸交點數，兩交點判別式 D 就大於零！"
        ),
    },
    {
        "id": "12",
        "chapter_idx": 1,
        "chime": False,
        "layout": "concept_svg",
        "tag": "知識點 5C｜MC1.4",
        "title": "一元二次不等式：看圖找上下，連鎖拆兩段",
        "formula": "整理成 a > 0，兩根 α < β：　ax²+bx+c < 0 ⇒ α < x < β　｜　> 0 ⇒ x < α 或 x > β",
        "svg": SVG_QUAD_INEQ,
        "bullets": [
            "第一步把 x² 係數調成正數（同乘負數記得不等號變向！）。",
            "第二步因式分解求兩根 α、β，畫開口向上的拋物線。",
            "小於零找 x 軸下方 ⇒ 夾在兩根中間；大於零找上方 ⇒ 落在兩側。",
            "連鎖不等式 A < B < C：拆成「A < B」且「B < C」，各自解完取交集！",
        ],
        "narration": (
            "解一元二次不等式只要三步：先把 x 平方係數調正，接著因式分解找兩根，開口向上時，小於零夾兩根中間、大於零落兩側。"
            "遇到 A 小於 B 小於 C 的連鎖不等式，就拆成左右兩條分別解，最後在數線上取交集！"
        ),
    },

    # ================= PART 3: 致命陷阱 × 秒殺心法 (5:20 - 6:40) =================
    {
        "id": "13",
        "chapter_idx": 2,
        "chime": True,
        "layout": "trap_compare",
        "tag": "考場致命陷阱 1 & 2",
        "title": "111–115 統測最高頻的兩個失分雷區",
        "traps": [
            {
                "num": "陷阱 01｜112 統測第 2 題",
                "wrong": "看到 √(x²) 就直接消掉根號寫成 x！",
                "right": "√(x²) = |x|（非負）；只有立方根 ∛(x³) = x 才對所有實數成立。",
                "tip": "破解妙招：考場直接代負數（例如 x = −2）測試選項，3 秒抓出錯誤選項！",
            },
            {
                "num": "陷阱 02｜絕對值方向寫反",
                "wrong": "解 |x − a| ≥ b 時，習慣性寫成 a − b ≤ x ≤ a + b。",
                "right": "「≤」才夾中間；「≥」是離中心至少 b，解在兩側：x ≤ a − b 或 x ≥ a + b。",
                "tip": "破解妙招：每次看到絕對值先唸出「到中心 a 的距離」，線段與射線馬上分清。",
            },
        ],
        "narration": (
            "進入考場排雷區！第一個大坑就在一一二年統測第二題：千萬別把根號 x 平方寫成 x，考場直接代 x 等於負二進去測，三秒抓包錯選項！"
            "第二個坑是絕對值大於等於寫反成夾中間，記住大於往外跑兩側，小於才夾中間。"
        ),
    },
    {
        "id": "14",
        "chapter_idx": 2,
        "chime": False,
        "layout": "trap_compare",
        "tag": "考場致命陷阱 3 & 4",
        "title": "二次不等式與極值最常見的兩個盲點",
        "traps": [
            {
                "num": "陷阱 03｜二次不等式亂開根號",
                "wrong": "解 x² < 4 時，直接兩邊開根號寫成 x < ±2。",
                "right": "移項因式分解：(x − 2)(x + 2) < 0 ⇒ −2 < x < 2；若 x² > 4 則是 x < −2 或 x > 2。",
                "tip": "破解妙招：不等式不能直接開根號加正負號！一定要因式分解畫兩根。",
            },
            {
                "num": "陷阱 04｜求最大最小值忘記看範圍",
                "wrong": "配方算出頂點 (15, 450) 就直接填 450，沒注意到題目限制 x ≤ 12。",
                "right": "先寫定義域！若頂點不在允許範圍內，改代入範圍內最靠近頂點的端點。",
                "tip": "破解妙招：看到「邊長、通道寬度限制」，立刻用紅筆圈出定義域！",
            },
        ],
        "narration": (
            "第三個坑：解 x 平方小於四不能直接開根號寫成 x 小於正負二，一定要因式分解取負二到二之間！"
            "第四個坑最可惜：配方算對頂點卻沒看題目範圍限制，把超界頂點填上去。應用題永遠先寫定義域！"
        ),
    },
    {
        "id": "15",
        "chapter_idx": 2,
        "chime": False,
        "layout": "concept_cards",
        "tag": "名師秒殺心法",
        "title": "帶進考場的兩大萬用思維模型",
        "formula": "心法一：距離思維（中心 ± 半徑）　　心法二：拋物線三看（開口・頂點・交點）",
        "cards": [
            {
                "color": "amber",
                "heading": "心法一：絕對值＝中心 ± 半徑（雙向秒轉）",
                "body": "正算：|x − c| ≤ d ⇒ 從中心 c 往左右走 d。\n反算：已知 p ≤ x ≤ q ⇒ 中心 c = (p+q)/2、半徑 d = (q−p)/2。",
                "example": "工程誤差「設計值 ± 容許差」直接對應「中心 ± 半徑」，10 秒列完式！",
            },
            {
                "color": "emerald",
                "heading": "心法二：二次函數三看（加贈 y 截距）",
                "body": "一看開口（a）；二看對稱軸（左同右異判 b）；三看與 x 軸交點數（判別式 D）。",
                "example": "外加 y 截距直接就是 c，四個係數條件 15 秒全數破解！",
            },
        ],
        "narration": (
            "帶進考場的兩大萬用心法：第一「距離思維」，用中心加減半徑雙向秒轉絕對值；第二「拋物線三看」，開口、對稱軸、x 軸交點再加 y 截距，十五秒搞定係數正負。馬上來實戰四題！"
        ),
    },

    # ================= PART 4: 統測經典題型實戰解析 (6:40 - 9:20) =================
    {
        "id": "16",
        "chapter_idx": 3,
        "chime": True,
        "layout": "example",
        "tag": "實戰題 1｜基礎・統測絕對值品管題型",
        "title": "預鑄混凝土版寬度檢驗：哪幾片合格？",
        "problem": "某預鑄混凝土版的設計寬度為 120 cm，出廠檢驗允許誤差 ±0.8 cm。設版寬為 x cm：（1）以 |x − c| ≤ d 的形式表示合格範圍；（2）若量得 5 片寬度為 119.1、119.4、120.6、120.8、121.0 cm，哪幾片合格？",
        "steps": [
            ("審題線索", "「設計值 120 ± 誤差 0.8」直接對應「中心 c = 120、半徑 d = 0.8」。"),
            ("關鍵提醒", "允許誤差「不超過」0.8 cm ⇒ 不等號含等號（≤），端點 120.8 要特別確認！"),
        ],
        "shortcut": None,
        "narration": (
            "實戰第一題：預鑄混凝土版設計寬度一百二十公分，允許誤差正負零點八公分，求絕對值不等式並檢查五片寬度哪幾片合格。"
            "一眼抓出中心一百二十、半徑零點八，而且允許誤差包含端點，不等號記得帶等號！"
        ),
    },
    {
        "id": "17",
        "chapter_idx": 3,
        "chime": False,
        "layout": "example",
        "tag": "實戰題 1｜完整四步解析 × 名師秒殺法",
        "title": "預鑄混凝土版寬度檢驗：步驟與驗算",
        "problem": "合格條件：中心 c = 120 cm，半徑 d = 0.8 cm，實測 5 片：119.1、119.4、120.6、120.8、121.0 cm。",
        "steps": [
            ("步驟 1｜列式", "直接寫出絕對值不等式：|x − 120| ≤ 0.8。"),
            ("步驟 2｜展開範圍", "120 − 0.8 ≤ x ≤ 120 + 0.8 ⇒ 119.2 ≤ x ≤ 120.8。"),
            ("步驟 3｜逐片判讀", "119.1（✗）；119.4（✓）；120.6（✓）；120.8（✓ 壓線含等號！）；121.0（✗）。"),
            ("答案", "（1）|x − 120| ≤ 0.8；（2）119.4、120.6、120.8 cm 共 3 片合格。"),
        ],
        "shortcut": "名師秒殺：直接算每片與 120 的差：−0.9、−0.6、+0.6、+0.8、+1.0，絕對值 ≤ 0.8 立刻過關！",
        "narration": (
            "列式就是絕對值 x 減一百二十小於等於零點八，展開為一百一十九點二到一百二十點八。注意一百二十點八壓線含等號所以合格，共三片過關！"
            "秒殺法更狂：直接心算每片跟一百二十的差值，不超過零點八就過關，五秒寫完！"
        ),
    },
    {
        "id": "18",
        "chapter_idx": 3,
        "chime": False,
        "layout": "split_svg",
        "tag": "實戰題 2｜中等・對標 115 統測第 9 題",
        "title": "由拋物線圖判斷係數與點 (abc, b² − 4ac) 象限",
        "svg": SVG_PARABOLA_SIGNS,
        "formula": "結果：a < 0、b > 0、c < 0、D > 0 ⇒ abc > 0、D > 0 ⇒ 第一象限！",
        "bullets": [
            "① 開口向下 ⇒ a < 0。",
            "② 對稱軸在 y 軸右側 ⇒「右異」⇒ a、b 異號 ⇒ b > 0。",
            "③ 與 y 軸交於原點下方 ⇒ c < 0。",
            "④ 與 x 軸有兩個交點 ⇒ D = b² − 4ac > 0。",
            "⑤ abc = (−)(+)(−) > 0，D > 0 ⇒ 點 (abc, D) 在第一象限！",
        ],
        "narration": (
            "第二題對標一一五年統測第九題！看左圖開口向下得 a 小於零；對稱軸在右邊用「右異」推出 b 大於零；y 截距在下方得 c 小於零；交 x 軸兩點得判別式 D 大於零。"
            "所以 a b c 是負正負相乘得正，D 也是正，點就在第一象限，超俐落！"
        ),
    },
    {
        "id": "19",
        "chapter_idx": 3,
        "chime": False,
        "layout": "split_svg",
        "tag": "實戰題 3｜中等・二次函數定義域極值",
        "title": "工地 60m 圍籬最大面積：先畫圖、先定範圍！",
        "svg": SVG_FENCE_SITE,
        "formula": "A(x) = x(60 − 2x) = −2x² + 60x　｜　定義域：0 < x ≤ 12",
        "bullets": [
            "題目：用 60 m 圍籬靠既有圍牆圍矩形堆置區，受通道限制垂直牆邊長 x ≤ 12 m，求最大面積。",
            "步驟 1｜列式：垂直牆兩邊各 x，平行牆為 60 − 2x ⇒ A(x) = −2x² + 60x。",
            "步驟 2｜寫定義域：邊長大於零且 x ≤ 12 ⇒ 0 < x ≤ 12。",
            "先寫定義域，才能避開「把超界頂點當答案」的最大陷阱！",
        ],
        "narration": (
            "第三題工地圍籬最佳化：六十公尺圍籬靠牆圍三邊，垂直牆邊長 x 受通道限制不得超過十二公尺。"
            "平行牆的邊就是六十減二 x，面積函數負二 x 平方加六十 x。關鍵動作先寫定義域：零小於 x 小於等於十二！"
        ),
    },
    {
        "id": "20",
        "chapter_idx": 3,
        "chime": False,
        "layout": "split_svg",
        "tag": "實戰題 3｜配方與端點極值揭曉",
        "title": "頂點 x = 15 超界！真正最大值在端點 x = 12",
        "svg": SVG_FENCE_GRAPH,
        "formula": "A(x) = −2(x − 15)² + 450　⇒　x = 12 時最大：A(12) = 12 × 36 = 432 m²",
        "bullets": [
            "步驟 3｜配方：A(x) = −2(x − 15)² + 450，頂點在 x = 15。",
            "步驟 4｜查定義域：x = 15 超出 0 < x ≤ 12，不能取 450！",
            "步驟 5｜看圖定極值：開口向下在頂點左側遞增 ⇒ 最大值必在右端點 x = 12。",
            "代入：A(12) = 12 × 36 = 432 m²（驗算 x = 11 得 418 < 432 ✓）。",
        ],
        "narration": (
            "配方得負二倍 x 減十五平方加四百五十，頂點在十五，但看左圖綠色允許區間到十二就切斷了！所以不能填四百五十。"
            "拋物線在頂點左側一路往上爬，最高點就在右端點 x 等於十二，代進去十二乘三十六，最大面積是四百三十二平方公尺！"
        ),
    },
    {
        "id": "21",
        "chapter_idx": 3,
        "chime": False,
        "layout": "concept_svg",
        "tag": "實戰題 4｜進階・連鎖二次不等式",
        "title": "拆兩條＋畫數線取交集：x + 1 < x² − 1 < 2x + 7",
        "formula": "① x² − x − 2 > 0 (x < −1 或 x > 2)　∩　② x² − 2x − 8 < 0 (−2 < x < 4)",
        "svg": SVG_CHAIN_INEQ,
        "bullets": [
            "左半部：x² − x − 2 > 0 ⇒ (x − 2)(x + 1) > 0 ⇒ x < −1 或 x > 2（藍線）。",
            "右半部：x² − 2x − 8 < 0 ⇒ (x − 4)(x + 2) < 0 ⇒ −2 < x < 4（黃線）。",
            "數線找藍線與黃線「重疊區域」⇒ −2 < x < −1 或 2 < x < 4。",
        ],
        "narration": (
            "最後進階題：連鎖不等式 x 加一小於 x 平方減一小於二 x 加七。拆兩條！"
            "左邊因式分解得 x 小於負一或大於二，是藍色兩段；右邊因式分解得負二到四之間，是黃色一段。數線上找重疊處，答案就是負二到負一，或二到四！"
        ),
    },

    # ================= PART 5: 30 秒考前懶人包總結 (9:20 - 10:00) =================
    {
        "id": "22",
        "chapter_idx": 4,
        "chime": True,
        "layout": "summary",
        "tag": "30 秒考前懶人包｜歡迎截圖複習",
        "title": "第 01 課《坐標系與函數圖形》終極速查表",
        "cards": [
            ("1. 根式鐵則", "√(x²) = |x|；∛(x³) = x；分母有理化用平方差；算幾 (a+b)/2 ≥ √(ab)"),
            ("2. 絕對值距離", "|x − c| ≤ d 夾中間；≥ d 落兩側；範圍反推 c=(p+q)/2、d=(q−p)/2"),
            ("3. 平面分點", "AP:PB = m:n ⇒ 交叉權重 P = (nA + mB)/(m+n)；距離即畢氏定理"),
            ("4. 二次函數三看", "開口判 a、y 截距判 c、對稱軸「左同右異」判 b、x 軸交點判 D"),
            ("5. 極值與不等式", "配方後先查「定義域」；二次不等式先調 a>0，因式分解看圖取區間"),
        ],
        "narration": (
            "最後送上考前懶人包，歡迎直接截圖！一，根號 x 平方是絕對值 x；二，絕對值看中心加減半徑；三，分點公式近的權重大交叉乘；四，拋物線開口看 a、截距看 c、軸左同右異看 b、交點看 D；五，極值先查定義域，二次不等式調正畫兩根！"
        ),
    },
    {
        "id": "23",
        "chapter_idx": 4,
        "chime": False,
        "layout": "outro",
        "tag": "Arch 高工數學 C · 15 課完整系列",
        "title": "第 01 課完賽！下一步刷題拿滿分",
        "subtitle": "打開 Arch 平台 `/subjects/math-c/functions-graphs` 練習 111–115 統測真題",
        "next_title": "下一課預告：第 02 課《三角函數》",
        "next_desc": "統測 5 年狂考 20 題的超級大魔王！10 分鐘用單位圓與 ASTC 口訣徹底馴服它。",
        "narration": (
            "恭喜你打通高工數學 C 第一課！趁記憶最熱，打開 Arch 平台把歷屆統測真題刷過一遍，基本分穩穩入袋。"
            "下一課我們要挑戰五年狂考二十題的大魔王——第二課《三角函數》！我們下課見，掰掰！"
        ),
    },
]
