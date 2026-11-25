import React from 'react';
import { LeftCard, RightCard, StepRow, type SceneRenderer } from './scenePrimitives';

export const mathScenes: Record<string, SceneRenderer> = {
  'math-c/functions-graphs': (m) => (
    <g>
      <LeftCard title="二次函數頂點式 y = a(x - h)² + k 與判別式 Δ" subtitle="配方找頂點 V(h, k) 與對稱軸 x = h ； a &gt; 0 開口向上有最小值">
        <line x1="48" y1="185" x2="365" y2="185" stroke="currentColor" strokeWidth="1.5" className="text-slate-400" markerEnd={`url(#${m.arrowBlue})`} />
        <line x1="125" y1="248" x2="125" y2="56" stroke="currentColor" strokeWidth="1.5" className="text-slate-400" markerEnd={`url(#${m.arrowBlue})`} />
        <path d="M 115 72 Q 215 305 315 72" fill="none" stroke="currentColor" strokeWidth="3" className="text-indigo-600 dark:text-indigo-400" />
        <line x1="215" y1="58" x2="215" y2="238" stroke="currentColor" strokeDasharray="4 3" className="text-amber-600" />
        <circle cx="215" cy="188.5" r="5" className="fill-rose-600" />
        <text x="225" y="208" className="fill-rose-700 dark:fill-rose-300 text-[11px] font-mono font-bold">頂點 V(h, k)</text>
        <text x="222" y="72" className="fill-amber-700 dark:fill-amber-300 text-[10px] font-mono font-bold">對稱軸 x = -b/(2a)</text>
        <text x="204" y="258" textAnchor="middle" className="fill-slate-700 dark:fill-slate-300 text-[10.5px] font-mono font-bold">
          絕對值距離：|x - a| ≤ r ⇔ a - r ≤ x ≤ a + r （夾中間！）
        </text>
      </LeftCard>
      <RightCard title="判別式 Δ = b² - 4ac 與恆正條件" subtitle="統測二次不等式必考口訣">
        <StepRow y={54} num="Δ>0" label="交 X 軸相異兩點 (兩實根)" detail="Δ = 0 相切一點（重根）； Δ < 0 懸空無實根" tone="blue" />
        <StepRow y={112} num="恆+" label="二次式 ax²+bx+c > 0 恆成立" detail="必同時滿足：開口向上 a > 0 且 懸空 Δ < 0！" tone="rose" />
        <StepRow y={170} num="算" label="算幾不等式 (a, b > 0)" detail="(a + b) / 2 ≥ √(ab)，等號成立於 a = b 時" tone="emerald" />
      </RightCard>
    </g>
  ),

  'math-c/trigonometry': (m) => (
    <g>
      <LeftCard title="廣義角單位圓 P(cosθ, sinθ) 與四象限正負號" subtitle="口訣：「一全正、二正弦(sin)、三正切(tan)、四餘弦(cos)」">
        <line x1="55" y1="152" x2="345" y2="152" stroke="currentColor" strokeWidth="1.5" className="text-slate-400" markerEnd={`url(#${m.arrowBlue})`} />
        <line x1="200" y1="252" x2="200" y2="54" stroke="currentColor" strokeWidth="1.5" className="text-slate-400" markerEnd={`url(#${m.arrowBlue})`} />
        <circle cx="200" cy="152" r="78" className="fill-indigo-500/8 stroke-indigo-600 dark:stroke-indigo-400" strokeWidth="2" />
        <line x1="200" y1="152" x2="262" y2="105" stroke="currentColor" strokeWidth="2.8" className="text-rose-600" />
        <line x1="262" y1="105" x2="262" y2="152" stroke="currentColor" strokeDasharray="3 2" className="text-emerald-600" />
        <circle cx="262" cy="105" r="4.5" className="fill-rose-600" />
        <text x="270" y="102" className="fill-rose-700 dark:fill-rose-300 text-[10.5px] font-mono font-bold">P(cosθ, sinθ)</text>
        <text x="115" y="102" className="fill-emerald-700 dark:fill-emerald-300 text-[11px] font-bold">II: sin +</text>
        <text x="115" y="205" className="fill-amber-700 dark:fill-amber-300 text-[11px] font-bold">III: tan +</text>
        <text x="235" y="205" className="fill-blue-700 dark:fill-blue-300 text-[11px] font-bold">IV: cos +</text>
      </LeftCard>
      <RightCard title="正弦定理 vs 餘弦定理（測量力學通用）" subtitle="sin²θ + cos²θ = 1 ； tanθ = sinθ / cosθ">
        <StepRow y={54} num="正" label="正弦定理（對邊配對角＋外接圓R）" detail="a / sinA = b / sinB = c / sinC = 2R" tone="blue" />
        <StepRow y={112} num="餘" label="餘弦定理（SAS 夾角或 SSS 求角）" detail="c² = a² + b² - 2ab·cosC" tone="emerald" />
        <StepRow y={170} num="面" label="三角形面積與扇形弧長公式" detail="面積 Δ = ½ab·sinC ； 弧長 s = rθ (θ用弳度!)" tone="amber" />
      </RightCard>
    </g>
  ),

  'math-c/vectors': (m) => (
    <g>
      <LeftCard title="平面向量內積 a·b 與正射影 (Orthogonal Projection)" subtitle="a·b = |a||b|cosθ = x₁x₂ + y₁y₂">
        <line x1="68" y1="212" x2="338" y2="212" stroke="currentColor" strokeWidth="2.8" className="text-blue-600" markerEnd={`url(#${m.arrowBlue})`} />
        <line x1="68" y1="212" x2="228" y2="92" stroke="currentColor" strokeWidth="3" className="text-rose-600" markerEnd={`url(#${m.arrowRose})`} />
        <line x1="228" y1="92" x2="228" y2="212" stroke="currentColor" strokeWidth="1.8" strokeDasharray="4 3" className="text-slate-500" />
        <line x1="68" y1="218" x2="228" y2="218" stroke="currentColor" strokeWidth="4" className="text-emerald-600" />
        <text x="142" y="138" className="fill-rose-700 dark:fill-rose-300 text-[11.5px] font-mono font-bold">向量 a</text>
        <text x="305" y="202" className="fill-blue-700 dark:fill-blue-300 text-[11.5px] font-mono font-bold">向量 b</text>
        <text x="148" y="242" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[10.5px] font-mono font-bold">
          正射影 = [(a·b) / |b|²] · b
        </text>
        <text x="108" y="200" className="fill-amber-700 dark:fill-amber-300 text-[11px] font-mono font-bold">θ</text>
      </LeftCard>
      <RightCard title="平行 vs 垂直條件 ＆ 柯西不等式" subtitle="統測向量三大秒殺判別式">
        <StepRow y={54} num="⊥" label="兩向量垂直 ⇔ 內積等於 0" detail="a ⊥ b ⇔ x₁x₂ + y₁y₂ = 0" tone="rose" />
        <StepRow y={112} num="∥" label="兩向量平行 ⇔ 分量成比例" detail="a ∥ b ⇔ x₁/x₂ = y₁/y₂ (即 x₁y₂ - x₂y₁ = 0)" tone="blue" />
        <StepRow y={170} num="柯" label="柯西不等式求極值" detail="(x₁²+y₁²)(x₂²+y₂²) ≥ (x₁x₂ + y₁y₂)²" tone="indigo" />
      </RightCard>
    </g>
  ),

  'math-c/algebra': () => (
    <g>
      <LeftCard title="多項式除法原理 f(x) = g(x)q(x) + r(x) 與餘式定理" subtitle="deg r(x) &lt; deg g(x) ； 除以 (x - a) 之餘數必等於 f(a)！">
        <rect x="34" y="64" width="340" height="84" rx="10" className="fill-indigo-500/12 stroke-indigo-600" strokeWidth="1.8" />
        <text x="204" y="96" textAnchor="middle" className="fill-indigo-900 dark:fill-indigo-100 text-[14px] font-mono font-bold">
          f(x) = (x - a) · q(x) + r
        </text>
        <text x="204" y="124" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 text-[11px] font-mono font-bold">
          代入 x = a 讓商式整坨歸零 ⇒ 餘數 r = f(a)！
        </text>
        <rect x="34" y="166" width="340" height="82" rx="10" className="fill-emerald-500/12 stroke-emerald-600" strokeWidth="1.6" />
        <text x="204" y="196" textAnchor="middle" className="fill-emerald-800 dark:fill-emerald-200 text-[11.5px] font-bold">
          因式定理：(x - a) 為 f(x) 因式 ⇔ f(a) = 0
        </text>
        <text x="204" y="222" textAnchor="middle" className="fill-slate-600 dark:fill-slate-300 text-[10px] font-mono">
          綜合除法注意：缺項務必補 0！除式為 (ax-b) 時商需再除以 a！
        </text>
      </LeftCard>
      <RightCard title="韋達根與係數關係 ＆ 分式行列式" subtitle="ax² + bx + c = 0 兩根 α, β 不必硬解根">
        <StepRow y={54} num="根" label="兩根之和與兩根之積" detail="α + β = -b / a ； α · β = c / a" tone="blue" />
        <StepRow y={112} num="變" label="對稱式變形秒殺" detail="α² + β² = (α + β)² - 2αβ" tone="emerald" />
        <StepRow y={170} num="克" label="克拉瑪公式解聯立方程" detail="Δ ≠ 0 恰一解； Δ=0 且 Δx=Δy=0 無限多解(重合)" tone="amber" />
      </RightCard>
    </g>
  ),

  'math-c/lines-circles': () => (
    <g>
      <LeftCard title="圓與直線位置關係（比較圓心距 d 與半徑 r）" subtitle="圓標準式：(x - h)² + (y - k)² = r² ， 圓心 O(h, k)">
        <circle cx="152" cy="148" r="68" className="fill-blue-500/12 stroke-blue-600" strokeWidth="2.4" />
        <circle cx="152" cy="148" r="4" className="fill-blue-700" />
        {/* Secant, Tangent, Disjoint lines */}
        <line x1="65" y1="108" x2="265" y2="108" stroke="currentColor" strokeWidth="2" className="text-emerald-600" />
        <line x1="65" y1="80" x2="295" y2="80" stroke="currentColor" strokeWidth="2.4" className="text-rose-600" />
        <line x1="65" y1="54" x2="295" y2="54" stroke="currentColor" strokeDasharray="5 3" className="text-slate-400" />
        <line x1="152" y1="148" x2="152" y2="80" stroke="currentColor" strokeWidth="2" className="text-amber-600" />
        <text x="160" y="132" className="fill-amber-700 dark:fill-amber-300 text-[10.5px] font-mono font-bold">r</text>
        <text x="302" y="58" className="fill-slate-500 text-[10px] font-mono">d &gt; r 不相交</text>
        <text x="302" y="84" className="fill-rose-700 dark:fill-rose-300 text-[10px] font-mono font-bold">d = r 相切!</text>
        <text x="272" y="112" className="fill-emerald-700 dark:fill-emerald-300 text-[10px] font-mono font-bold">d &lt; r 割兩點</text>
        <text x="204" y="252" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-300 text-[10.5px] font-mono font-bold">
          弦長半畢氏定理：(弦長/2)² + d² = r²
        </text>
      </LeftCard>
      <RightCard title="直線斜率 m 與點到直線距離公式" subtitle="幾何與測量座標計算共通核心">
        <StepRow y={54} num="m" label="直線斜率與平行／垂直" detail="平行 m₁ = m₂ ； 垂直 m₁ · m₂ = -1" tone="blue" />
        <StepRow y={112} num="距" label="點 P(x₀,y₀) 到 ax+by+c=0 距離" detail="d = |ax₀ + by₀ + c| / √(a² + b²)" tone="rose" />
        <StepRow y={170} num="切" label="圓外一點 P 到圓之切線段長" detail="L_切 = √[(x₀-h)² + (y₀-k)² - r²]" tone="emerald" />
      </RightCard>
    </g>
  ),

  'math-c/sequences-series': () => (
    <g>
      <LeftCard title="等差數列（線性階梯 +d） vs 等比數列（指數倍增 ×r）" subtitle="建築階梯踏步高程（等差） vs 複利折舊與分貝（等比）">
        {/* Arithmetic vs Geometric bars */}
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect x={48 + i * 36} y={208 - (i + 1) * 26} width="24" height={(i + 1) * 26} rx="3" className="fill-blue-500/40 stroke-blue-600" />
            <rect x={220 + i * 38} y={208 - Math.pow(2, i) * 16} width="24" height={Math.pow(2, i) * 16} rx="3" className="fill-rose-500/40 stroke-rose-600" />
          </g>
        ))}
        <text x="112" y="232" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[11px] font-bold">等差 aₙ = a₁+(n-1)d</text>
        <text x="285" y="232" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 text-[11px] font-bold">等比 aₙ = a₁·r^(n-1)</text>
        <text x="204" y="262" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-300 text-[10.5px] font-mono font-bold">
          等差中項 b = (a+c)/2 ； 等比中項 b² = a·c （注意 b 有正負號 ±√ac！）
        </text>
      </LeftCard>
      <RightCard title="級數求和 Σ 三大必背公式" subtitle="注意項數 n 與公比 r=1 特例">
        <StepRow y={54} num="差" label="等差前 n 項和 Sₙ（梯形公式）" detail="Sₙ = n(a₁ + aₙ) / 2 = n[2a₁+(n-1)d]/2" tone="blue" />
        <StepRow y={112} num="比" label="等比前 n 項和 Sₙ (r ≠ 1)" detail="Sₙ = a₁(1 - rⁿ) / (1 - r)" tone="rose" />
        <StepRow y={170} num="Σ" label="自然數與平方和公式" detail="Σk = n(n+1)/2 ； Σk² = n(n+1)(2n+1)/6" tone="emerald" />
      </RightCard>
    </g>
  ),

  'math-c/permutations-combinations': (m) => (
    <g>
      <LeftCard title="排列 P(n,r) vs 組合 C(n,r) 核心決策分流樹" subtitle="唯一關鍵問句：「交換順序後，結果算不算同一種？」">
        <rect x="118" y="56" width="172" height="44" rx="10" className="fill-amber-500/20 stroke-amber-600" strokeWidth="2" />
        <text x="204" y="82" textAnchor="middle" className="fill-amber-900 dark:fill-amber-100 text-[11.5px] font-bold">n 個相異物取 r 個：看順序嗎？</text>
        <line x1="160" y1="100" x2="105" y2="148" stroke="currentColor" strokeWidth="2.2" className="text-rose-600" markerEnd={`url(#${m.arrowRose})`} />
        <line x1="248" y1="100" x2="303" y2="148" stroke="currentColor" strokeWidth="2.2" className="text-emerald-600" markerEnd={`url(#${m.arrowEmerald})`} />
        <rect x="28" y="152" width="158" height="72" rx="10" className="fill-rose-500/15 stroke-rose-600" strokeWidth="1.8" />
        <text x="107" y="178" textAnchor="middle" className="fill-rose-800 dark:fill-rose-200 text-[11px] font-bold">有順序 → 排列 P(n,r)</text>
        <text x="107" y="200" textAnchor="middle" className="fill-slate-600 dark:fill-slate-300 text-[9.5px] font-mono">排座位、選正副班長、數字</text>
        <rect x="222" y="152" width="158" height="72" rx="10" className="fill-emerald-500/15 stroke-emerald-600" strokeWidth="1.8" />
        <text x="301" y="178" textAnchor="middle" className="fill-emerald-800 dark:fill-emerald-200 text-[11px] font-bold">無順序 → 組合 C(n,r)</text>
        <text x="301" y="200" textAnchor="middle" className="fill-slate-600 dark:fill-slate-300 text-[9.5px] font-mono">選委員、握手、多邊形對角線</text>
        <text x="204" y="256" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-300 text-[10.5px] font-mono font-bold">
          C(n, r) = P(n, r) / r! = C(n, n - r) （餘組合對稱性！）
        </text>
      </LeftCard>
      <RightCard title="二項式定理與古典機率期望值" subtitle="相鄰用「綁一起」；不相鄰用「插空隙」">
        <StepRow y={54} num="項" label="(x + y)ⁿ 展開一般項" detail="T_{k+1} = C(n, k) · x^(n-k) · y^k" tone="indigo" />
        <StepRow y={112} num="機" label="條件機率 P(B | A)" detail="P(B|A) = P(A ∩ B) / P(A) （縮小樣本空間）" tone="blue" />
        <StepRow y={170} num="望" label="數學期望值 E(X) ＆ 標準差" detail="E(X) = Σ xᵢ·pᵢ （公平賭局期望淨利 = 0）" tone="emerald" />
      </RightCard>
    </g>
  ),

  'math-c/trig-applications': (m) => (
    <g>
      <LeftCard title="複數極式 z = r(cosθ + i·sinθ) 與棣美弗旋轉定理" subtitle="複數相乘 = 長度相乘 r₁r₂ 、 角度相加 (θ₁ + θ₂)！">
        <line x1="58" y1="215" x2="348" y2="215" stroke="currentColor" strokeWidth="1.5" className="text-slate-400" markerEnd={`url(#${m.arrowBlue})`} />
        <line x1="92" y1="242" x2="92" y2="56" stroke="currentColor" strokeWidth="1.5" className="text-slate-400" markerEnd={`url(#${m.arrowBlue})`} />
        <text x="348" y="232" textAnchor="end" className="fill-slate-500 text-[10px] font-mono">實軸 Re</text>
        <text x="102" y="58" className="fill-slate-500 text-[10px] font-mono">虛軸 Im</text>
        <line x1="92" y1="215" x2="235" y2="165" stroke="currentColor" strokeWidth="2.5" className="text-blue-600" markerEnd={`url(#${m.arrowBlue})`} />
        <line x1="92" y1="215" x2="215" y2="75" stroke="currentColor" strokeWidth="3" className="text-rose-600" markerEnd={`url(#${m.arrowRose})`} />
        <path d="M 162 190 A 75 75 0 0 0 142 158" fill="none" stroke="currentColor" strokeWidth="2" className="text-amber-600" markerEnd={`url(#${m.arrowAmber})`} />
        <text x="242" y="166" className="fill-blue-700 dark:fill-blue-300 text-[10.5px] font-mono font-bold">z₁ = r₁∠θ₁</text>
        <text x="224" y="76" className="fill-rose-700 dark:fill-rose-300 text-[10.5px] font-mono font-bold">z₁·z₂ = r₁r₂∠(θ₁+θ₂)</text>
        <text x="204" y="258" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-300 text-[10.5px] font-mono font-bold">
          棣美弗定理：[r(cosθ + i·sinθ)]ⁿ = rⁿ(cos nθ + i·sin nθ)
        </text>
      </LeftCard>
      <RightCard title="和差角、二倍角與正餘弦疊合" subtitle="建築日照角與交流電波峰值必用">
        <StepRow y={54} num="和" label="正餘弦和差角口訣" detail="sin(α±β)=sincos±cossin ； cos=coscos∓sinsin" tone="blue" />
        <StepRow y={112} num="倍" label="二倍角三變形" detail="sin2θ=2sinθcosθ ； cos2θ=2cos²θ-1=1-2sin²θ" tone="emerald" />
        <StepRow y={170} num="疊" label="a·sinθ + b·cosθ 極值秒殺" detail="最大值 +√(a² + b²) ， 最小值 -√(a² + b²)！" tone="rose" />
      </RightCard>
    </g>
  ),

  'math-c/exponents-logarithms': (m) => (
    <g>
      <LeftCard title="指數 y = aˣ 與對數 y = log_a(x) 鏡射對稱於 y = x" subtitle="底數 a &gt; 1 嚴格遞增 ； 0 &lt; a &lt; 1 嚴格遞減（真數 x &gt; 0!）">
        <line x1="54" y1="196" x2="352" y2="196" stroke="currentColor" strokeWidth="1.5" className="text-slate-400" markerEnd={`url(#${m.arrowBlue})`} />
        <line x1="126" y1="252" x2="126" y2="54" stroke="currentColor" strokeWidth="1.5" className="text-slate-400" markerEnd={`url(#${m.arrowBlue})`} />
        {/* y = x mirror line */}
        <line x1="76" y1="246" x2="268" y2="54" stroke="currentColor" strokeDasharray="5 3" className="text-amber-600" />
        {/* y = 2^x */}
        <path d="M 65 188 Q 126 168 195 62" fill="none" stroke="currentColor" strokeWidth="2.8" className="text-rose-600" />
        {/* y = log2 x */}
        <path d="M 134 248 Q 154 196 292 126" fill="none" stroke="currentColor" strokeWidth="2.8" className="text-blue-600" />
        <circle cx="126" cy="168" r="4" className="fill-rose-600" />
        <circle cx="154" cy="196" r="4" className="fill-blue-600" />
        <text x="198" y="68" className="fill-rose-700 dark:fill-rose-300 text-[11px] font-mono font-bold">y = aˣ 必過(0,1)</text>
        <text x="242" y="122" className="fill-blue-700 dark:fill-blue-300 text-[11px] font-mono font-bold">y = log_a x 必過(1,0)</text>
        <text x="262" y="76" className="fill-amber-700 dark:fill-amber-300 text-[10px] font-mono">y = x 對稱軸</text>
      </LeftCard>
      <RightCard title="對數運算律、換底公式與地震分貝" subtitle="定義域檢核：底數 a>0, a≠1 且 真數 x>0！">
        <StepRow y={54} num="律" label="真數相乘變相加、相除變相減" detail="log(MN) = logM + logN ； log(Mⁿ) = n·logM" tone="blue" />
        <StepRow y={112} num="換" label="換底公式與連鎖消去" detail="log_a(b) = log b / log a ； log_a(b)·log_b(c)=log_a(c)" tone="emerald" />
        <StepRow y={170} num="震" label="芮氏地震規模能量倍數" detail="log E = 11.8+1.5M → 規模差1級能量差 10^1.5≈31.6倍!" tone="rose" />
      </RightCard>
    </g>
  ),

  'math-c/space-vectors': (m) => (
    <g>
      <LeftCard title="空間平面法向量 n = (a, b, c) 與外積 a × b" subtitle="平面方程式：a(x - x₀) + b(y - y₀) + c(z - z₀) = 0">
        {/* Tilted plane + normal vector n */}
        <polygon points="62,188 232,226 346,158 176,120" className="fill-indigo-500/18 stroke-indigo-600" strokeWidth="2" />
        <line x1="204" y1="173" x2="204" y2="66" stroke="currentColor" strokeWidth="3.2" className="text-rose-600" markerEnd={`url(#${m.arrowRose})`} />
        <line x1="204" y1="173" x2="292" y2="162" stroke="currentColor" strokeWidth="2.4" className="text-blue-600" markerEnd={`url(#${m.arrowBlue})`} />
        <line x1="204" y1="173" x2="142" y2="198" stroke="currentColor" strokeWidth="2.4" className="text-emerald-600" markerEnd={`url(#${m.arrowEmerald})`} />
        <rect x="204" y="159" width="12" height="12" fill="none" stroke="currentColor" className="text-amber-600" />
        <text x="214" y="74" className="fill-rose-700 dark:fill-rose-300 text-[11.5px] font-mono font-bold">法向量 n = u × v (垂直平面)</text>
        <text x="295" y="160" className="fill-blue-700 dark:fill-blue-300 text-[10.5px] font-mono font-bold">u</text>
        <text x="128" y="206" className="fill-emerald-700 dark:fill-emerald-300 text-[10.5px] font-mono font-bold">v</text>
        <text x="204" y="258" textAnchor="middle" className="fill-slate-700 dark:fill-slate-300 text-[10.5px] font-mono font-bold">
          |u × v| = 平行四邊形面積 = 2 × 空間三角形面積！
        </text>
      </LeftCard>
      <RightCard title="空間直線參數式與點面距離" subtitle="三垂線定理與空間幾何核心">
        <StepRow y={54} num="外" label="外積右手定則 (u × v 同時垂直 u,v)" detail="求包含兩向量之平面法向量 n 直接做外積!" tone="rose" />
        <StepRow y={112} num="線" label="空間直線對稱比例式／參數式" detail="(x-x₀)/l = (y-y₀)/m = (z-z₀)/n = t" tone="blue" />
        <StepRow y={170} num="距" label="點 P 到平面 ax+by+cz+d=0 距離" detail="D = |ax₀ + by₀ + cz₀ + d| / √(a²+b²+c²)" tone="emerald" />
      </RightCard>
    </g>
  ),

  'math-c/matrices': (m) => (
    <g>
      <LeftCard title="增廣矩陣高斯消去法 [A | B] → [I | X] ＆ 二階反矩陣" subtitle="矩陣乘法「列 × 行」：一般情況 AB ≠ BA（不可隨意交換!）">
        <rect x="34" y="76" width="142" height="106" rx="10" className="fill-blue-500/12 stroke-blue-600" strokeWidth="1.8" />
        <text x="105" y="106" textAnchor="middle" className="fill-blue-900 dark:fill-blue-200 text-[12px] font-mono font-bold">[ a  b | e ]</text>
        <text x="105" y="136" textAnchor="middle" className="fill-blue-900 dark:fill-blue-200 text-[12px] font-mono font-bold">[ c  d | f ]</text>
        <text x="105" y="166" textAnchor="middle" className="fill-slate-500 text-[9.5px] font-mono">初始增廣矩陣</text>
        <line x1="184" y1="129" x2="222" y2="129" stroke="currentColor" strokeWidth="2.5" className="text-indigo-600" markerEnd={`url(#${m.arrowBlue})`} />
        <text x="203" y="118" textAnchor="middle" className="fill-indigo-700 text-[9.5px] font-bold">基本列運算</text>
        <rect x="230" y="76" width="148" height="106" rx="10" className="fill-emerald-500/15 stroke-emerald-600" strokeWidth="1.8" />
        <text x="304" y="106" textAnchor="middle" className="fill-emerald-900 dark:fill-emerald-200 text-[12px] font-mono font-bold">[ 1  0 | x ]</text>
        <text x="304" y="136" textAnchor="middle" className="fill-emerald-900 dark:fill-emerald-200 text-[12px] font-mono font-bold">[ 0  1 | y ]</text>
        <text x="304" y="166" textAnchor="middle" className="fill-emerald-700 text-[9.5px] font-mono font-bold">直接讀出唯一解!</text>
        <text x="204" y="238" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 text-[11px] font-mono font-bold">
          A⁻¹ = [1 / (ad - bc)] · [ d  -b ; -c   a ] （主對調、副變號!）
        </text>
      </LeftCard>
      <RightCard title="可逆判別 det(A) 與馬可夫轉移矩陣" subtitle="電腦圖學旋轉鏡射變換與結構勁度矩陣基礎">
        <StepRow y={54} num="逆" label="反矩陣存在充要條件" detail="行列式 det(A) = ad - bc ≠ 0" tone="rose" />
        <StepRow y={112} num="乘" label="矩陣乘積可結合律 A(BC)=(AB)C" detail="注意 (A+B)² = A² + AB + BA + B²！" tone="blue" />
        <StepRow y={170} num="移" label="轉移矩陣 M 特徵" detail="各元 ≥ 0 且「每一行（直行）總和 = 1」；穩定態 MX=X" tone="emerald" />
      </RightCard>
    </g>
  ),

  'math-c/linear-programming': () => (
    <g>
      <LeftCard title="二元一次聯立不等式可行解區與「頂點法求極值」" subtitle="目標函數 f(x, y) = ax + by 之最大／最小值必發生於凸多邊形頂點！">
        {/* Feasible convex polygon */}
        <polygon points="74,218 74,106 168,78 256,142 222,218" className="fill-emerald-500/22 stroke-emerald-600" strokeWidth="2.4" />
        {/* Parallel objective level lines */}
        <line x1="125" y1="226" x2="225" y2="96" stroke="currentColor" strokeDasharray="4 3" className="text-slate-400" />
        <line x1="178" y1="242" x2="296" y2="90" stroke="currentColor" strokeWidth="2.4" strokeDasharray="6 3" className="text-rose-600" />
        <circle cx="256" cy="142" r="5.5" className="fill-rose-600 stroke-white" strokeWidth="1.5" />
        <text x="266" y="146" className="fill-rose-700 dark:fill-rose-300 text-[11px] font-mono font-bold">最佳頂點 P*(x*,y*)</text>
        <text x="148" y="168" textAnchor="middle" className="fill-emerald-800 dark:fill-emerald-200 text-[11px] font-bold">可行解區域</text>
        <text x="204" y="256" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-300 text-[10.5px] font-mono font-bold">
          營建資源調度最佳化：將各交點座標逐一代入 f(x,y) 比大小即得解！
        </text>
      </LeftCard>
      <RightCard title="半平面左右側速判與整數解提醒" subtitle="看 x 係數正號時：> 在右半平面、< 在左半平面！">
        <StepRow y={54} num="側" label="兩點在直線同側 vs 異側判別" detail="代入 ax+by+c：同號在同側、相乘 < 0 在異側!" tone="blue" />
        <StepRow y={112} num="頂" label="頂點法三步驟" detail="畫邊界線 → 解聯立求各頂點 → 代入目標函數比大小" tone="emerald" />
        <StepRow y={170} num="整" label="格子點（整數解）陷阱" detail="若人數/車數須為整數且頂點為分數，需檢核鄰近整數點!" tone="amber" />
      </RightCard>
    </g>
  ),

  'math-c/geometry': () => (
    <g>
      <LeftCard title="三大圓錐曲線標準幾何圖譜（拋物線／橢圓／雙曲線）" subtitle="拋物線拱橋、橢圓國家歌劇院穹頂、雙曲面冷卻塔結構原型">
        {/* Parabola */}
        <g transform="translate(22, 62)">
          <rect width="112" height="156" rx="8" className="fill-blue-500/10 stroke-blue-500/50" />
          <line x1="24" y1="26" x2="24" y2="130" stroke="currentColor" strokeDasharray="3 2" className="text-amber-600" />
          <path d="M 88 26 Q 12 78 88 130" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-blue-600" />
          <circle cx="66" cy="78" r="3.5" className="fill-rose-600" />
          <text x="56" y="146" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[10px] font-bold">拋物線 y²=4cx</text>
        </g>
        {/* Ellipse */}
        <g transform="translate(148, 62)">
          <rect width="112" height="156" rx="8" className="fill-emerald-500/10 stroke-emerald-500/50" />
          <ellipse cx="56" cy="78" rx="44" ry="28" className="fill-emerald-500/15 stroke-emerald-600" strokeWidth="2.5" />
          <circle cx="32" cy="78" r="3" className="fill-rose-600" />
          <circle cx="80" cy="78" r="3" className="fill-rose-600" />
          <text x="56" y="146" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[10px] font-bold">橢圓 a²=b²+c²</text>
        </g>
        {/* Hyperbola */}
        <g transform="translate(274, 62)">
          <rect width="112" height="156" rx="8" className="fill-rose-500/10 stroke-rose-500/50" />
          <line x1="16" y1="32" x2="96" y2="124" stroke="currentColor" strokeDasharray="3 2" className="text-slate-400" />
          <line x1="16" y1="124" x2="96" y2="32" stroke="currentColor" strokeDasharray="3 2" className="text-slate-400" />
          <path d="M 20 42 Q 52 78 20 114 M 92 42 Q 60 78 92 114" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-rose-600" />
          <text x="56" y="146" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 text-[10px] font-bold">雙曲線 c²=a²+b²</text>
        </g>
        <text x="204" y="252" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-300 text-[10.5px] font-mono font-bold">
          正焦弦長：拋物線 |4c| ； 橢圓與雙曲線皆為 2b² / a！
        </text>
      </LeftCard>
      <RightCard title="焦點距離定義與參數 a, b, c 大小" subtitle="千萬別把橢圓與雙曲線誰最大搞反！">
        <StepRow y={54} num="拋" label="拋物線：到焦點距 = 到準線距" detail="頂點在焦點與準線正中央，焦距 |c| = 1/4 正焦弦" tone="blue" />
        <StepRow y={112} num="橢" label="橢圓：PF₁ + PF₂ = 2a（a 最大!）" detail="誰分母大長軸就在哪軸； a² = b² + c²" tone="emerald" />
        <StepRow y={170} num="雙" label="雙曲線：|PF₁ - PF₂| = 2a（c 最大!）" detail="誰前面正號貫軸就在哪軸； c² = a² + b²" tone="rose" />
      </RightCard>
    </g>
  ),

  'math-c/calculus': (m) => (
    <g>
      <LeftCard title="導數幾何意義（切線斜率 f'(a)）與極值反曲點" subtitle="dM/dx = V（彎矩微分即剪力）！ f'(x)=0 找水平切線極值候選點">
        <line x1="48" y1="226" x2="365" y2="226" stroke="currentColor" strokeWidth="1.5" className="text-slate-400" markerEnd={`url(#${m.arrowBlue})`} />
        <line x1="68" y1="246" x2="68" y2="54" stroke="currentColor" strokeWidth="1.5" className="text-slate-400" markerEnd={`url(#${m.arrowBlue})`} />
        {/* Cubic curve with max & min */}
        <path d="M 78 205 C 125 45, 195 45, 225 142 C 255 235, 315 235, 355 85" fill="none" stroke="currentColor" strokeWidth="3" className="text-indigo-600 dark:text-indigo-400" />
        <line x1="108" y1="84" x2="196" y2="84" stroke="currentColor" strokeWidth="2.2" className="text-rose-600" />
        <line x1="252" y1="198" x2="332" y2="198" stroke="currentColor" strokeWidth="2.2" className="text-emerald-600" />
        <circle cx="152" cy="84" r="4.5" className="fill-rose-600" />
        <circle cx="292" cy="198" r="4.5" className="fill-emerald-600" />
        <circle cx="225" cy="142" r="4.5" className="fill-amber-600" />
        <text x="152" y="72" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 text-[10px] font-mono font-bold">極大 f&apos;=0, f&apos;&apos;&lt;0</text>
        <text x="292" y="218" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[10px] font-mono font-bold">極小 f&apos;=0, f&apos;&apos;&gt;0</text>
        <text x="234" y="138" className="fill-amber-700 dark:fill-amber-300 text-[9.5px] font-mono font-bold">反曲點 f&apos;&apos;=0</text>
      </LeftCard>
      <RightCard title="微分四大公式與物理力學對應" subtitle="(xⁿ)' = n·x^(n-1) ； 常數微分 = 0">
        <StepRow y={54} num="乘" label="乘法律與連鎖律 (Chain Rule)" detail="(fg)' = f'g + fg' ； [g(x)ⁿ]' = n·g(x)^(n-1)·g'(x)" tone="blue" />
        <StepRow y={112} num="切" label="過切點 (a, f(a)) 切線方程式" detail="y - f(a) = f'(a) · (x - a)" tone="indigo" />
        <StepRow y={170} num="物" label="位置 s(t) → 速度 v(t) → 加速度 a(t)" detail="v(t) = s'(t) ； a(t) = v'(t) = s''(t)" tone="emerald" />
      </RightCard>
    </g>
  ),

  'math-c/integration': (m) => (
    <g>
      <LeftCard title="黎曼長方形分割與微積分基本定理 ∫ₐᵇ f(x)dx = F(b) - F(a)" subtitle="兩曲線圍成面積 A = ∫ₐᵇ |上曲線 f(x) - 下曲線 g(x)| dx">
        <line x1="52" y1="224" x2="365" y2="224" stroke="currentColor" strokeWidth="1.5" className="text-slate-400" markerEnd={`url(#${m.arrowBlue})`} />
        <line x1="72" y1="242" x2="72" y2="54" stroke="currentColor" strokeWidth="1.5" className="text-slate-400" markerEnd={`url(#${m.arrowBlue})`} />
        {/* Riemann rectangles */}
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const x = 108 + i * 32;
          const h = 55 + Math.round(65 * Math.sin((i + 0.5) * 0.48));
          return (
            <rect key={i} x={x} y={224 - h} width="32" height={h} className="fill-emerald-500/22 stroke-emerald-600/70" strokeWidth="1.2" />
          );
        })}
        <path d="M 95 182 Q 205 68 325 148" fill="none" stroke="currentColor" strokeWidth="3" className="text-indigo-600 dark:text-indigo-400" />
        <text x="108" y="242" textAnchor="middle" className="fill-slate-700 dark:fill-slate-300 text-[11px] font-mono font-bold">x = a</text>
        <text x="300" y="242" textAnchor="middle" className="fill-slate-700 dark:fill-slate-300 text-[11px] font-mono font-bold">x = b</text>
        <text x="204" y="92" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-200 text-[11px] font-mono font-bold">y = f(x)</text>
      </LeftCard>
      <RightCard title="積分公式、無窮等比級數與旋轉體" subtitle="不定積分務必加常數 +C；定積分注意正負號！">
        <StepRow y={54} num="冪" label="多項式反導函數公式" detail="∫ xⁿ dx = x^(n+1) / (n + 1) + C (n ≠ -1)" tone="blue" />
        <StepRow y={112} num="無" label="無窮等比級數收斂和 (|r| < 1)" detail="S = a₁ / (1 - r) （若 |r| ≥ 1 則發散無和!）" tone="amber" />
        <StepRow y={170} num="體" label="繞 X 軸旋轉體體積（圓盤法）" detail="V = π · ∫ₐᵇ [f(x)]² dx （半徑平方乘 π!）" tone="emerald" />
      </RightCard>
    </g>
  ),
};
