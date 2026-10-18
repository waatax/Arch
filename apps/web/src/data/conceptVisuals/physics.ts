import type { TopicVisualMap } from './types';
import {
  angle, arrow, barChart, box, circle, dim, dot, ellipse, ground, hatchRect, line, lineChart, path,
  polygon, polyline, rect, svg, text, timeline, type Pt,
} from './kit';

const g = 9.8;

const traj = (v0: number, deg: number): Pt[] => {
  const th = (deg * Math.PI) / 180;
  const T = (2 * v0 * Math.sin(th)) / g;
  return Array.from({ length: 21 }, (_, i) => {
    const t = (T * i) / 20;
    return [Math.round(v0 * Math.cos(th) * t * 100) / 100, Math.max(0, Math.round((v0 * Math.sin(th) * t - 0.5 * g * t * t) * 100) / 100)] as Pt;
  });
};

export const physicsVisuals: TopicVisualMap = {
  'mechanics-motion': [
    {
      concept: '牛頓三大運動定律與建築地震慣性力',
      kind: 'diagram',
      title: '牛頓第二運動定律 F = ma 與建築地震基底剪力 V = C·W 圖解',
      caption: '當地表以地震加速度 a_g 向右運動時，樓層質量 m 產生向左的等效靜力地震慣性力 F_i = m·a_i，並在柱底匯聚為總基底剪力 V。',
      svg: (() => {
        let s = '';
        const gx = 75, gy = 198, bw = 135, fh = 48;
        s += ground(40, 255, gy);
        s += arrow(15, gy + 16, 75, gy + 16, { tone: 'amber', w: 2.4, label: '地動 a_g', labelPos: 'start', labelOffset: [0, -8] });
        const sway = [0, 8, 18, 28];
        for (let i = 1; i <= 3; i++) {
          const y0 = gy - fh * (i - 1);
          const y1 = gy - fh * i;
          s += line(gx + sway[i - 1], y0, gx + sway[i], y1, { tone: 'ink', w: 2.8 });
          s += line(gx + bw + sway[i - 1], y0, gx + bw + sway[i], y1, { tone: 'ink', w: 2.8 });
          s += rect(gx + sway[i] - 4, y1 - 5, bw + 8, 10, { tone: 'blue', fill: 'blue', soft: true, w: 1.6 });
          const fLen = 22 + i * 16;
          s += arrow(gx + bw + sway[i] + fLen, y1, gx + bw + sway[i] + 6, y1, { tone: 'red', w: 2.2 });
          s += text(gx + bw + sway[i] + fLen + 6, y1 + 4, `F_${i} = m_${i}a_${i}`, { tone: 'red', size: 11.5, weight: 'bold' });
        }
        s += arrow(gx, gy - 8, gx + 55, gy - 8, { tone: 'green', w: 2.6, label: '基底剪力 V = ΣF_i = C·W', labelPos: 'end', labelOffset: [6, 4] });
        s += box(330, 22, 212, 82, ['牛頓第二運動定律 F = ma', '1 N = 1 kg·m/s²；1 kgf = 9.8 N', '地震慣性力與建築總重 W 成正比'], { tone: 'blue', size: 11.5 });
        s += box(330, 118, 212, 86, ['剛體靜力平衡三大方程式', 'ΣF_x = 0（水平合力為零）', 'ΣF_y = 0（鉛垂合力為零）', 'ΣM_O = 0（任一點力矩和為零）'], { tone: 'green', size: 11.5 });
        return svg(560, 230, s);
      })(),
      takeaways: [
        '地震慣性力由牛頓第二定律 $F = ma$ 推得：基底剪力 $V = C \\cdot W$，故採用**輕質隔間與鋼構造減輕建築自重 $W$** 可直接降低地震受力。',
        '平面剛體完全靜力平衡必同時滿足**移動平衡 $\\sum F_x = 0, \\sum F_y = 0$** 與**轉動平衡 $\\sum M = 0$**。',
      ],
    },
    {
      concept: '運動學公式與建築高空施工落體防護 (Kinematics & Fall Protection)',
      kind: 'chart',
      title: '高空施工自由落體 (g = 9.8 m/s²) 隨時間 t 之瞬時速度 v 與墜落高度 h 圖',
      caption: '依據等加速度公式 v = gt 與 h = ½gt²，展示高空墜落物在 1～4 秒內速度線性增加、墜落距離呈平方拋物線暴增之危險趨勢。',
      svg: lineChart({
        w: 520,
        h: 250,
        x: { min: 0, max: 4, ticks: [0, 1, 2, 3, 4], label: '墜落時間 t (s)', fmt: (v) => `${v} s` },
        y: { min: 0, max: 85, ticks: [0, 20, 40, 60, 80], label: '速度 (m/s) / 距離 (m)' },
        series: [
          { name: '墜落距離 h = ½gt² (m)', tone: 'red', points: [[0, 0], [1, 4.9], [2, 19.6], [3, 44.1], [4, 78.4]], markers: true, smooth: true },
          { name: '瞬時速度 v = gt (m/s)', tone: 'blue', dash: 'dash', points: [[0, 0], [1, 9.8], [2, 19.6], [3, 29.4], [4, 39.2]], markers: true },
        ],
      }),
      table: {
        headers: ['墜落時間 t (s)', '瞬時速度 v = gt (m/s)', '墜落高度 h = ½gt² (m)', '約當建築樓層數 (每層 3.3m)'],
        rows: [
          ['t = 1 s', '9.8 m/s (≈ 35 km/h)', '4.9 m', '約 1.5 層樓高'],
          ['t = 2 s', '19.6 m/s (≈ 71 km/h)', '19.6 m', '約 6 層樓高'],
          ['t = 3 s', '29.4 m/s (≈ 106 km/h)', '44.1 m', '約 13 層樓高'],
          ['t = 4 s', '39.2 m/s (≈ 141 km/h)', '78.4 m', '約 24 層樓高'],
        ],
      },
      takeaways: [
        '自由落體著地速度公式：$v = \\sqrt{2gh}$（從 20 m 高處約 6 樓墜落，著地瞬時速度高達 $v \\approx \\sqrt{2 \\times 9.8 \\times 20} \\approx 19.8\\text{ m/s}$）。',
        '安全帶緩衝包原理：由衝量定理 $F \\cdot \\Delta t = m \\Delta v$，延長減速緩衝時間 $\\Delta t$ 可大幅降低人體承受的瞬間衝擊力 $F$。',
      ],
    },
    {
      concept: '運動學公式與建築高空施工落體防護',
      kind: 'table',
      title: '等加速度運動三大公式、斜面摩擦與虎克定律總整理表',
      caption: '彙整直線運動學三大公式（知三求二）、建築無障礙坡道摩擦角條件，以及結構材料虎克定律。',
      table: {
        headers: ['力學定律／公式', '標準物理數學式', '物理量與 SI 單位', '建築與土木工程應用'],
        rows: [
          ['等加速度三大公式', 'v = v₀+at；s = v₀t+½at²；v² = v₀²+2as', 'v (m/s), a (m/s²), s (m)', '無時間 t 時必用 v² = v₀² + 2as'],
          ['最大靜摩擦力', 'f_s,max = μ_s N = μ_s (mg cos θ)', 'μ_s 為靜摩擦係數（無單位）', '斜面不滑動條件：tan θ ≤ μ_s（靜止角）'],
          ['虎克定律 (應力應變)', 'F = kx；σ = F/A = E · ε = E(ΔL/L)', '應力 σ (Pa = N/m²)，楊氏模數 E', '軸向伸長量 ΔL = FL / (EA)'],
          ['斷面慣性矩 I', '矩形梁 I = bh³/12（與梁高 h³ 成正比）', '單位 m⁴ 或 cm⁴', '梁直立放置（增加高度 h）抗彎剛度 EI 暴增'],
        ],
      },
      takeaways: [
        '矩形梁斷面慣性矩 $I = \\frac{bh^3}{12}$ 與**梁高 $h$ 的三次方**成正比：梁高加倍，抗彎剛度變為 $2^3 = 8$ 倍！',
        '工程應力換算必背：$1\\text{ MPa} = 10^6\\text{ Pa} = 1\\text{ N/mm}^2 \\approx 10.2\\text{ kgf/cm}^2$。',
      ],
    },
    {
      concept: '平面向量、拋體運動與等速率圓周運動',
      kind: 'chart',
      title: '初速 20 m/s 的斜拋軌跡：30°、45°、60°（忽略空氣阻力）',
      caption: '射程 R = v₀² sin2θ / g：45° 射程最大約 40.8 m；30° 與 60° 互為餘角，射程相同約 35.3 m，但 60° 飛得更高。',
      svg: lineChart({
        w: 520,
        h: 270,
        x: { min: 0, max: 45, ticks: [0, 10, 20, 30, 40], label: '水平距離 x (m)' },
        y: { min: 0, max: 16, ticks: [0, 4, 8, 12, 16], label: '高度 y (m)' },
        series: [
          { name: 'θ = 30°', tone: 'blue', points: traj(20, 30), smooth: true },
          { name: 'θ = 45°', tone: 'red', points: traj(20, 45), smooth: true },
          { name: 'θ = 60°', tone: 'green', points: traj(20, 60), smooth: true },
        ],
      }),
      table: {
        headers: ['拋射角 θ', '射程 R = v₀² sin2θ / g', '最大高度 H = v₀² sin²θ / 2g'],
        rows: [['30°', '35.3 m', '5.1 m'], ['45°', '40.8 m', '10.2 m'], ['60°', '35.3 m', '15.3 m']],
      },
      takeaways: [
        '水平方向等速、鉛直方向等加速度，兩個方向獨立分析再合成。',
        '同高度起落、無空氣阻力時，45° 射程最大；互為餘角的兩個角度射程相同。',
      ],
    },
    {
      concept: '動量、衝量與動量守恆',
      kind: 'chart',
      title: '相同衝量 J = 20 N·s：作用時間越短，平均衝擊力越大',
      caption: '力–時間圖下的面積就是衝量。同樣讓 2 kg、10 m/s 的物體停下（Δp = 20 kg·m/s），0.5 s 內停止平均力 40 N，0.1 s 內停止則需 200 N。',
      svg: lineChart({
        w: 520,
        h: 260,
        x: { min: 0, max: 0.6, ticks: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6], label: '時間 t (s)' },
        y: { min: 0, max: 220, ticks: [0, 50, 100, 150, 200], label: '平均力 F (N)' },
        series: [
          { name: '緩衝 0.5 s（安全網）', tone: 'green', points: [[0, 0], [0, 40], [0.5, 40], [0.5, 0]] },
          { name: '硬撞 0.1 s', tone: 'red', points: [[0, 0], [0, 200], [0.1, 200], [0.1, 0]] },
        ],
        overlay: (f) => text(f.X(0.3), f.Y(40) - 8, '面積 = 40 × 0.5 = 20 N·s', { tone: 'green', size: 11, anchor: 'middle', weight: 'bold' }) +
          text(f.X(0.1) + 8, f.Y(200) + 14, '面積 = 200 × 0.1 = 20 N·s', { tone: 'red', size: 11, weight: 'bold' }),
      }),
      table: {
        headers: ['情況', '作用時間 Δt', '平均力 F = Δp / Δt'],
        rows: [['安全網緩衝', '0.5 s', '40 N'], ['撞擊硬地面', '0.1 s', '200 N'], ['更硬的撞擊', '0.01 s', '2000 N']],
      },
      takeaways: [
        '衝量–動量定理 F·Δt = Δp：延長作用時間是所有緩衝設計的共同原理。',
        '動量變化量相同時，F 與 Δt 成反比。',
      ],
    },
    {
      concept: '萬有引力定律與四種基本交互作用',
      kind: 'chart',
      title: '重力加速度隨距地心距離的變化：g ∝ 1 / r²',
      caption: '以地表 g₀ = 9.8 m/s² 為基準，距地心 2 倍地球半徑處 g 剩 1/4（約 2.45 m/s²），3 倍處剩 1/9。',
      svg: lineChart({
        w: 520,
        h: 250,
        x: { min: 1, max: 4, ticks: [1, 1.5, 2, 2.5, 3, 3.5, 4], label: '距地心距離 r / R' },
        y: { min: 0, max: 10, ticks: [0, 2, 4, 6, 8, 10], label: 'g (m/s²)' },
        series: [{ name: 'g = g₀ (R / r)²', tone: 'blue', points: [1, 1.25, 1.5, 1.75, 2, 2.5, 3, 3.5, 4].map((r) => [r, Math.round((9.8 / (r * r)) * 100) / 100] as Pt), smooth: true, markers: true }],
        overlay: (f) => text(f.X(2) + 8, f.Y(2.45) - 8, 'r = 2R：g ≈ 2.45 m/s²', { tone: 'red', size: 11, weight: 'bold' }),
      }),
      table: { headers: ['r / R', 'g (m/s²)'], rows: [['1（地表）', '9.80'], ['1.5', '4.36'], ['2', '2.45'], ['3', '1.09'], ['4', '0.61']] },
      takeaways: [
        '萬有引力與距離平方成反比，所以離地心 2 倍遠，g 變成 1/4。',
        '重量 W = mg 會隨 g 改變，質量 m 則不變。',
      ],
    },
  ],

  'work-energy': [
    {
      concept: '功與電力功率定義',
      kind: 'diagram',
      title: '機械功 W = F·d cos θ、吊車功率 P = F·v 與建築電梯配重節能圖解',
      caption: '左圖展示外力與位移夾角 θ 時僅水平分量 F cos θ 作功；右圖展示大樓電梯以配重塊 M_c = M_car + 0.5 M_load 平衡位能之省電原理。',
      svg: (() => {
        let s = '';
        // 左：作功 W = F d cos θ
        s += ground(25, 255, 175);
        s += rect(55, 133, 64, 42, { tone: 'blue', fill: 'blue', soft: true, w: 1.8 });
        s += rect(175, 133, 64, 42, { tone: 'muted', w: 1.4, dash: 'dash' });
        s += arrow(119, 154, 185, 108, { tone: 'red', w: 2.4, label: 'F', labelPos: 'end', labelOffset: [6, -4] });
        s += arrow(119, 154, 185, 154, { tone: 'green', w: 2, dash: 'dash', label: 'F cos θ', labelPos: 'end', labelOffset: [6, 12] });
        s += angle(119, 154, 30, 0, 35, 'θ', { tone: 'amber', labelR: 42 });
        s += dim(87, 192, 207, 192, '位移 d (m)', { tone: 'ink' });
        s += text(140, 26, '作功 W = F · d cos θ (單位 J = N·m)', { anchor: 'middle', weight: 'bold', size: 12.5 });
        s += text(140, 46, '垂直於位移的力 (θ=90°) 作功為 0', { anchor: 'middle', size: 11.5, tone: 'muted' });
        // 右：電梯配重系統
        const px = 415, py = 46, pr = 24;
        s += circle(px, py, pr, { tone: 'ink', fill: 'amber', soft: true, w: 2 });
        s += dot(px, py, 4, 'ink');
        s += line(px - pr, py, px - pr, 145, { tone: 'ink', w: 1.8 });
        s += line(px + pr, py, px + pr, 120, { tone: 'ink', w: 1.8 });
        s += box(px - pr - 36, 145, 72, 54, ['車廂 + 載客', 'M_car + M_p'], { tone: 'blue', size: 11 });
        s += box(px + pr - 30, 120, 60, 48, ['配重塊', 'M_c'], { tone: 'green', size: 11 });
        s += text(425, 214, '馬達只需克服不平衡重量差 ΔM·g·v', { anchor: 'middle', size: 11.5, tone: 'red', weight: 'bold' });
        return svg(560, 230, s);
      })(),
      takeaways: [
        '作功定義 $W = F d \\cos\\theta$：當提著重物在水平地面等速行走時，提力向上、位移水平（$\\theta = 90^\\circ, \\cos 90^\\circ = 0$），**提力作功為 $0$**。',
        '吊車或電梯以等速度 $v$ 吊起重量 $mg$ 時，輸出功率為 $P = \\frac{W}{t} = F \\cdot v = mgv$（單位：瓦特 $\\text{W} = \\text{J/s}$）。',
      ],
    },
    {
      concept: '動能與重力位能',
      kind: 'chart',
      title: '質量 m = 2 kg 物體自 H = 20 m 高處自由落下之位能 U、動能 K 與總力學能 E 守恆圖',
      caption: '在無空氣阻力下，隨高度 h 由 20 m 降至 0 m，重力位能 U = mgh 線性轉化為動能 K = ½mv²，但總力學能 E = U + K 恆保持 392 J。',
      svg: lineChart({
        w: 520,
        h: 250,
        x: { min: 0, max: 20, ticks: [0, 5, 10, 15, 20], label: '離地高度 h (m)', fmt: (v) => `${v} m` },
        y: { min: 0, max: 440, ticks: [0, 98, 196, 294, 392], label: '能量 (J)' },
        series: [
          { name: '重力位能 U = mgh', tone: 'blue', points: [[0, 0], [5, 98], [10, 196], [15, 294], [20, 392]], markers: true },
          { name: '動能 K = ½mv²', tone: 'red', points: [[0, 392], [5, 294], [10, 196], [15, 98], [20, 0]], markers: true },
          { name: '總力學能 E = U + K = 392 J', tone: 'green', dash: 'dash', points: [[0, 392], [10, 392], [20, 392]] },
        ],
      }),
      table: {
        headers: ['離地高度 h (m)', '重力位能 U = mgh (J)', '動能 K = ½mv² (J)', '總力學能 E = U + K (J)'],
        rows: [
          ['h = 20 m (最高點初釋放)', '392 J', '0 J (v = 0)', '392 J'],
          ['h = 15 m', '294 J', '98 J', '392 J'],
          ['h = 10 m (中點高度)', '196 J (一半)', '196 J (一半)', '392 J'],
          ['h = 0 m (觸地瞬間)', '0 J', '392 J (v ≈ 19.8 m/s)', '392 J'],
        ],
      },
      takeaways: [
        '動能 $K = \\frac{1}{2}mv^2$ 與**速度平方**成正比：車速或風速變為 $2$ 倍時，動能（及煞車距離）變為 **$4$ 倍**！',
        '功能定理：合力對物體所作的總功等於物體動能的變化量 $W_{\\text{net}} = \\Delta K = \\frac{1}{2}mv^2 - \\frac{1}{2}mv_0^2$。',
      ],
    },
    {
      concept: '能量與功率單位換算對照表 (Energy & Power Unit Conversions)',
      kind: 'table',
      title: '能量與功率單位換算、熱功當量與流體風機水泵相似定律表',
      caption: '整理焦耳、卡、度電 (kWh)、馬力 (hp) 之精確換算，以及空調水泵與風機變頻節能的三次方定律。',
      table: {
        headers: ['物理量與定律', '核心換算公式與比例關係', '標準單位與常數', '綠建築節能實務應用'],
        rows: [
          ['熱功當量 (Joule)', '1 cal = 4.186 J (常取 4.2 J)；1 kcal = 4186 J', 'Q = m c ΔT（水比熱 c = 1 cal/g·℃）', '電熱水器耗電能 W = Pt 轉換為水溫上升'],
          ['1 度電與馬力換算', '1 度電 = 1 kWh = 3.6 × 10⁶ J；1 hp ≈ 746 W', '電費度數 = 功率 (kW) × 時間 (hr)', '1000 W 空調連續運轉 5 小時耗電 5 度'],
          ['水泵揚程抽水功率', 'P_out = (ρ g Q H) / η = (mgh / t) / η', 'Q 為體積流量 (m³/s)，η 為機械效率', '屋頂水塔揚水馬達所需輸入電功率計算'],
          ['風機水泵相似定律', '流量 Q ∝ N；揚程 H ∝ N²；軸功率 P ∝ N³', 'N 為馬達轉速 (RPM)', '變頻調降轉速至 80%，耗電功率降至 0.8³ = 51.2%'],
        ],
      },
      takeaways: [
        '**1 度電 = $1\\text{ kWh} = 1000\\text{ W} \\times 3600\\text{ s} = 3.6 \\times 10^6\\text{ J}$**（注意「度」是**能量**單位，不是功率單位）。',
        '空調水泵與風機變頻節能核心：**耗電功率 $P$ 與轉速 $N$ 的三次方成正比**（$P \\propto N^3$），轉速減半則功率僅剩 $\\frac{1}{8}$！',
      ],
    },
    {
      concept: '靜止液體的壓力、浮力、帕斯卡原理與大氣壓力',
      kind: 'diagram',
      title: '帕斯卡原理：液壓千斤頂以小力舉起大重',
      caption: '密閉液體中壓力等量傳遞：P = F₁ / A₁ = F₂ / A₂。小活塞 2 cm² 施 100 N，大活塞 200 cm² 可產生 10,000 N 的力。',
      svg: (() => {
        let s = '';
        s += path('M60,60 L60,190 L460,190 L460,40', { w: 2.4 });
        s += path('M100,60 L100,150 L380,150 L380,40', { w: 2.4 });
        s += polygon([[62, 110], [98, 110], [98, 188], [62, 188]], { tone: 'blue', fill: 'blue', soft: true, w: 0 });
        s += polygon([[102, 152], [378, 152], [378, 188], [102, 188]], { tone: 'blue', fill: 'blue', soft: true, w: 0 });
        s += polygon([[382, 80], [458, 80], [458, 188], [382, 188]], { tone: 'blue', fill: 'blue', soft: true, w: 0 });
        s += rect(62, 100, 36, 10, { tone: 'ink', fill: 'muted', w: 1.4 });
        s += rect(382, 70, 76, 10, { tone: 'ink', fill: 'muted', w: 1.4 });
        s += arrow(80, 40, 80, 98, { tone: 'red', w: 2.6, label: 'F₁ = 100 N', labelPos: 'start', labelOffset: [8, 4] });
        s += arrow(420, 66, 420, 22, { tone: 'green', w: 3, label: 'F₂ = 10,000 N', labelPos: 'end', labelOffset: [8, 10] });
        s += text(80, 214, 'A₁ = 2 cm²', { anchor: 'middle', size: 12, weight: 'bold' });
        s += text(420, 214, 'A₂ = 200 cm²', { anchor: 'middle', size: 12, weight: 'bold' });
        s += text(240, 176, '液體壓力處處相等 P = 50 N/cm²', { anchor: 'middle', size: 12, tone: 'blue', weight: 'bold' });
        s += box(470, 100, 82, 70, ['F₂ / F₁', '= A₂ / A₁', '= 100 倍'], { tone: 'violet', size: 11.5 });
        return svg(560, 226, s);
      })(),
      takeaways: [
        '省力但不省功：大活塞上升的距離只有小活塞下壓距離的 1/100。',
        '液體壓力 P = ρgh 只與深度有關；浮力 B = ρ液 g V排 等於排開液體的重量。',
      ],
    },
  ],

  thermodynamics: [
    {
      concept: '熱阻 R 值與熱傳透率 U 值 (Thermal Resistance & Transmittance)',
      kind: 'diagram',
      title: '建築外牆多層複合構造熱阻 R 值串聯與熱傳透率 U 值圖解',
      caption: '室外熱流依序通過外表面氣膜 R_so、外飾磚、RC 結構牆、隔熱材與內表面氣膜 R_si，總熱阻為各層串聯相加 R_total = ΣR_i，U = 1 / R_total。',
      svg: (() => {
        let s = '';
        const y0 = 36, h = 135;
        // 複合牆體分層
        s += rect(70, y0, 28, h, { tone: 'amber', fill: 'amber', soft: true, w: 1.5 });
        s += rect(98, y0, 72, h, { tone: 'muted', fill: 'muted', soft: true, w: 1.5 });
        s += hatchRect(98, y0, 72, h, { spacing: 10, tone: 'muted' });
        s += rect(170, y0, 48, h, { tone: 'green', fill: 'green', soft: true, w: 1.5 });
        s += rect(218, y0, 22, h, { tone: 'blue', fill: 'blue', soft: true, w: 1.5 });
        // 溫度梯度折線
        s += polyline([[35, 52], [70, 62], [98, 70], [170, 92], [218, 145], [240, 152], [275, 160]], { tone: 'red', w: 2.6 });
        s += dot(35, 52, 4, 'red') + dot(275, 160, 4, 'blue');
        s += text(35, 42, '室外 T_o = 35℃', { tone: 'red', size: 11.5, weight: 'bold' });
        s += text(255, 178, '室內 T_i = 25℃', { tone: 'blue', size: 11.5, weight: 'bold' });
        s += arrow(22, 110, 64, 110, { tone: 'red', w: 2.2, label: '熱流 q', labelPos: 'start', labelOffset: [0, -8] });
        s += text(84, y0 + h + 16, '外磚', { anchor: 'middle', size: 11 });
        s += text(134, y0 + h + 16, 'RC 牆 (15cm)', { anchor: 'middle', size: 11 });
        s += text(194, y0 + h + 16, '隔熱層', { anchor: 'middle', size: 11, tone: 'green', weight: 'bold' });
        s += text(229, y0 + h + 16, '內裝', { anchor: 'middle', size: 11 });
        s += box(305, 24, 238, 86, [
          '單層熱阻 R_i = 厚度 d_i / 導熱係數 k_i',
          '串聯總熱阻 R_T = R_so + Σ(d_i/k_i) + R_si',
          '隔熱層 k 極小 ⇒ 貢獻最大熱阻與溫降！',
        ], { tone: 'green', size: 11.5 });
        s += box(305, 122, 238, 84, [
          '熱傳透率 U 值 = 1 / R_T (W/m²·K)',
          '穿牆總熱負荷 Q = U · A · ΔT',
          '綠建築規範：屋頂 U ≤ 0.8、外牆 U ≤ 2.0',
        ], { tone: 'blue', size: 11.5 });
        return svg(560, 230, s);
      })(),
      takeaways: [
        '單層熱阻 $R = \\frac{d}{k}$（單位 $\\text{m}^2\\cdot\\text{K/W}$）：厚度 $d$ 愈厚、導熱係數 $k$ 愈小，熱阻 $R$ 愈大。',
        '熱傳透率 $U = \\frac{1}{R_{\\text{total}}}$：**$U$ 值愈小代表隔熱性能愈好**，透過牆體進入室內的空調熱負荷 $Q = U \\cdot A \\cdot \\Delta T$ 愈低。',
      ],
    },
    {
      concept: '熱阻 R 值與熱傳透率 U 值',
      kind: 'chart',
      title: '常見建築材料熱傳導係數 k 值 (W/m·K) 比較圖',
      caption: '比較混凝土、玻璃、紅磚、木材與 PS 隔熱泡棉的熱傳導係數 k：隔熱泡棉的 k 值僅為 RC 混凝土的約 1/45。',
      svg: barChart({
        w: 520,
        h: 250,
        horizontal: true,
        categories: ['RC 鋼筋混凝土', '普通建築玻璃', '實心紅磚牆', '乾燥木材', 'PS 隔熱泡棉'],
        y: { min: 0, max: 1.8, ticks: [0, 0.4, 0.8, 1.2, 1.6], label: '熱傳導係數 k (W/m·K)' },
        values: true,
        series: [
          { name: '熱傳導係數 k (愈小愈隔熱)', tone: 'amber', values: [1.6, 1.0, 0.72, 0.15, 0.035] },
        ],
      }),
      table: {
        headers: ['建築材料名稱', '熱傳導係數 k (W/m·K)', '10 cm 厚度之熱阻 R = d/k', '建築熱環境角色'],
        rows: [
          ['RC 鋼筋混凝土', '1.60 W/m·K', '0.10 / 1.60 = 0.063 m²·K/W', '高導熱、高蓄熱體（需加隔熱層）'],
          ['普通建築玻璃', '1.00 W/m·K', '0.01 / 1.00 = 0.010 (1cm 厚)', '開窗為外殼最大熱負荷破口'],
          ['實心紅磚牆', '0.72 W/m·K', '0.10 / 0.72 = 0.139 m²·K/W', '中度導熱傳統砌體'],
          ['乾燥木材', '0.15 W/m·K', '0.10 / 0.15 = 0.667 m²·K/W', '天然優良隔熱裝修材'],
          ['PS 聚苯乙烯隔熱板', '0.035 W/m·K', '0.05 / 0.035 = 1.429 (僅 5cm 厚)', '屋頂與外牆主力隔熱材（R 值極高）'],
        ],
      },
      takeaways: [
        '$5\\text{ cm}$ 厚的 PS 隔熱板熱阻（$R \\approx 1.43$）相當於 **$228\\text{ cm}$ 厚的 RC 混凝土牆**，因此屋頂隔熱必須依賴低 $k$ 值隔熱層。',
        '雙層中空 Low-E 玻璃透過乾燥空氣層阻斷**熱傳導與對流**，並以低輻射鍍膜反射**紅外線熱輻射**。',
      ],
    },
    {
      concept: '顯熱、潛熱與建築空調負荷',
      kind: 'table',
      title: '熱傳遞三大機制、顯熱潛熱與空調冷凍性能指標 (COP / EER) 總表',
      caption: '彙整傳導、對流、輻射物理定律，顯熱與潛熱除濕負荷，以及空調主機 COP 與冷凍噸換算。',
      table: {
        headers: ['熱學主題', '核心物理公式', '物理意義與參數', '建築環境控制應用'],
        rows: [
          ['傳導／對流／輻射', '傅立葉 q = k(ΔT/d)；史蒂芬 q = εσT⁴', '輻射不需介質，與絕對溫度 T⁴ 成正比', '外牆雙層通風立面、屋頂高反射冷烤漆'],
          ['顯熱 vs. 潛熱', '顯熱 Q_s = mcΔT（升溫）；潛熱 Q_L = mL（相變）', '水蒸發潛熱 L ≈ 540 cal/g ≈ 2260 kJ/kg', '台灣夏季空調除濕（潛熱負荷）佔比達 30~40%'],
          ['空調 COP 與 EER', 'COP = 冷凍能力 Q_c (W) / 耗電功率 P (W)', 'EER (kcal/h·W) = 0.86 × COP', 'COP = 4.0 代表耗 1 kW 電可搬移 4 kW 熱量'],
          ['煙囪效應 (熱浮力)', 'ΔP = ρ_o g H (T_i - T_o) / T_i，風速 v ∝ √(H·ΔT)', '室內外溫差 ΔT 與天井高度差 H 驅動氣流', '綠建築挑高通風塔自然排熱免耗空調電'],
        ],
      },
      takeaways: [
        '顯熱改變**溫度**（乾球溫度計讀數變化），潛熱改變**相態／濕度**（水蒸氣凝結除濕，溫度不變）。',
        '冷凍能力 $1\\text{ 冷凍噸 (USRT)} \\approx 3024\\text{ kcal/h} \\approx 3.517\\text{ kW}$；性能係數 $\\text{COP} = \\frac{\\text{冷房能力 (kW)}}{\\text{輸入電功率 (kW)}}$ 愈高愈省電。',
      ],
    },
    {
      concept: '溫度、熱平衡、比熱與熱膨脹',
      kind: 'chart',
      title: '50 m 長的構件溫度變化 ΔT 與伸長量 ΔL（ΔL = α·L₀·ΔT）',
      caption: '鋁的膨脹係數約為鋼的 2 倍，同樣 30 ℃ 溫差，50 m 鋁構件伸長約 34.5 mm、鋼約 18 mm、混凝土約 15 mm。',
      svg: lineChart({
        w: 520,
        h: 260,
        x: { min: 0, max: 40, ticks: [0, 10, 20, 30, 40], label: '溫度變化 ΔT (℃)' },
        y: { min: 0, max: 50, ticks: [0, 10, 20, 30, 40, 50], label: '伸長量 ΔL (mm)' },
        series: [
          { name: '鋁 α ≈ 2.3×10⁻⁵', tone: 'violet', points: [[0, 0], [40, 46]] },
          { name: '鋼 α ≈ 1.2×10⁻⁵', tone: 'blue', points: [[0, 0], [40, 24]] },
          { name: '混凝土 α ≈ 1.0×10⁻⁵', tone: 'muted', points: [[0, 0], [40, 20]] },
        ],
        overlay: (f) => line(f.X(30), f.Y(0), f.X(30), f.Y(34.5), { tone: 'red', w: 1, dash: 'dash' }) + text(f.X(30) + 6, f.Y(18) + 4, 'ΔT = 30 ℃：鋼 18 mm', { tone: 'red', size: 11, weight: 'bold' }),
      }),
      table: {
        headers: ['材料', 'α (/℃)', 'ΔT = 30 ℃ 時 50 m 伸長'],
        rows: [['鋁', '2.3 × 10⁻⁵', '34.5 mm'], ['鋼', '1.2 × 10⁻⁵', '18 mm'], ['混凝土', '1.0 × 10⁻⁵', '15 mm']],
      },
      takeaways: [
        '鋼與混凝土的 α 相近，溫度變化時能一起伸縮，鋼筋混凝土才能共同作用。',
        '長建築物與橋梁設伸縮縫、鋁窗框預留間隙，都是為了容納熱膨脹。',
      ],
    },
    {
      concept: '熱力學定律與熱機、冷氣的效率',
      kind: 'chart',
      title: '卡諾效率上限 η = 1 − T_C / T_H（低溫熱庫 300 K）',
      caption: '熱機的高溫熱源溫度越高，理想效率上限越高；但即使是理想熱機，效率也不可能達到 100%（熱力學第二定律）。',
      svg: lineChart({
        w: 520,
        h: 250,
        x: { min: 400, max: 1000, ticks: [400, 500, 600, 700, 800, 900, 1000], label: '高溫熱源 T_H (K)' },
        y: { min: 0, max: 100, ticks: [0, 20, 40, 60, 80, 100], label: '效率上限 η (%)' },
        series: [{ name: 'η = 1 − 300 / T_H', tone: 'red', points: [400, 500, 600, 700, 800, 900, 1000].map((T) => [T, Math.round((1 - 300 / T) * 1000) / 10] as Pt), smooth: true, markers: true }],
        overlay: (f) => text(f.X(600) + 8, f.Y(50) + 16, 'T_H = 600 K：η = 50%', { tone: 'red', size: 11, weight: 'bold' }),
      }),
      table: { headers: ['T_H (K)', '卡諾效率上限'], rows: [['400', '25%'], ['600', '50%'], ['800', '62.5%'], ['1000', '70%']] },
      takeaways: [
        '溫度必須用絕對溫度 K 代入公式。',
        '冷氣則相反：室內外溫差越小，搬運同樣熱量所需的電功越少，COP 越高。',
      ],
    },
  ],

  'waves-acoustics': [
    {
      concept: '空間吸音與賽賓殘響時間公式 (Sabine\'s Reverberation Time RT60)',
      kind: 'diagram',
      title: '室內聲線傳播（直達音、反射音、吸音、透射）與賽賓殘響時間 RT60 圖解',
      caption: '聲源發出的聲能遇到牆面時分為反射 R、吸音 α 與透射 τ（滿足 R + α + τ = 1），音源停止後聲壓級衰減 60 dB 所需時間即為殘響時間 RT60。',
      svg: (() => {
        let s = '';
        // 牆體
        s += rect(210, 26, 28, 178, { tone: 'ink', fill: 'muted', soft: true, w: 1.8 });
        s += hatchRect(210, 26, 28, 178, { spacing: 9, tone: 'muted' });
        s += rect(202, 26, 8, 178, { tone: 'green', fill: 'green', soft: true, w: 1.2 });
        s += dot(52, 115, 6, 'red');
        s += text(52, 136, '聲源 S', { anchor: 'middle', tone: 'red', weight: 'bold', size: 12 });
        // 入射音 I
        s += arrow(58, 112, 200, 78, { tone: 'red', w: 2.4, label: '入射聲能 I', labelPos: 'mid', labelOffset: [-6, -10] });
        // 反射音 R
        s += arrow(200, 78, 82, 36, { tone: 'blue', w: 2, label: '反射 R (殘響)', labelPos: 'mid', labelOffset: [8, -8] });
        // 吸音 α (在多孔材料內轉為熱)
        s += text(162, 148, '吸音係數 α = (E_吸 + E_透)/I', { tone: 'green', size: 11.5, weight: 'bold', anchor: 'end' });
        s += arrow(200, 78, 224, 108, { tone: 'green', w: 2 });
        // 透射音 τ
        s += arrow(238, 108, 305, 128, { tone: 'amber', w: 2, label: '透射 τ (隔音 TL)', labelPos: 'end', labelOffset: [-30, 18] });
        s += box(322, 24, 222, 86, [
          '賽賓殘響時間公式 (Sabine Formula)',
          'RT60 = 0.161 · V / A (秒)',
          'V：室容積 (m³)，A = Σ α_i S_i (m²)',
        ], { tone: 'blue', size: 11.5 });
        s += box(322, 122, 222, 86, [
          '吸音 vs. 隔音材質黃金法則',
          '吸音 (降 RT60)：多孔纖維、穿孔板 (高 α)',
          '隔音 (高 TL)：厚重密實 RC 牆 (質量定律)',
        ], { tone: 'amber', size: 11.5 });
        return svg(560, 230, s);
      })(),
      takeaways: [
        '空氣中聲速公式：$v = 331 + 0.6 T$（$T$ 為攝氏溫度 ℃；$20^\\circ\\text{C}$ 時 $v = 343\\text{ m/s}$），且滿足波速公式 $v = f \\cdot \\lambda$。',
        '賽賓公式 $RT_{60} = \\frac{0.161 V}{A}$：室容積 $V$ 愈大殘響愈長，室內總吸音力 $A = \\sum \\alpha_i S_i$ 愈大則殘響愈短（語音清晰度提高）。',
      ],
    },
    {
      concept: '戶外道路交通噪音距離衰減模型 (Noise Propagation & Distance Decay)',
      kind: 'chart',
      title: '點聲源與線聲源（道路交通噪音）隨距離加倍之分貝衰減比較圖',
      caption: '以離聲源 10 m 處 80 dB 為基準，比較點聲源（距離加倍衰減 6 dB）與道路車流線聲源（距離加倍衰減 3 dB）之距離衰減曲線。',
      svg: lineChart({
        w: 520,
        h: 250,
        x: { min: 10, max: 80, ticks: [10, 20, 40, 80], label: '離聲源距離 r (m)', fmt: (v) => `${v} m` },
        y: { min: 55, max: 85, ticks: [60, 65, 70, 75, 80], label: '噪音分貝級 L (dB)' },
        series: [
          { name: '線聲源 (道路車流：距離加倍 -3 dB)', tone: 'amber', points: [[10, 80], [20, 77], [40, 74], [80, 71]], markers: true, smooth: true },
          { name: '點聲源 (單一機具：距離加倍 -6 dB)', tone: 'blue', points: [[10, 80], [20, 74], [40, 68], [80, 62]], markers: true, smooth: true },
        ],
      }),
      table: {
        headers: ['離聲源距離 r', '距離倍數 r / r₁', '點聲源分貝 L₂ = L₁ - 20 log(r/r₁)', '線聲源分貝 L₂ = L₁ - 10 log(r/r₁)'],
        rows: [
          ['r₁ = 10 m (基準)', '1 倍', '80 dB', '80 dB'],
          ['r = 20 m', '2 倍', '80 - 6 = 74 dB (衰減 6 dB)', '80 - 3 = 77 dB (衰減 3 dB)'],
          ['r = 40 m', '4 倍', '80 - 12 = 68 dB (衰減 12 dB)', '80 - 6 = 74 dB (衰減 6 dB)'],
          ['r = 80 m', '8 倍', '80 - 18 = 62 dB (衰減 18 dB)', '80 - 9 = 71 dB (衰減 9 dB)'],
        ],
      },
      takeaways: [
        '**分貝疊加口訣**：兩個相同分貝 $L$ 的獨立音源同時發出時，總能量加倍，分貝數**只增加 $3\\text{ dB}$**（例如 $70\\text{ dB} + 70\\text{ dB} = 73\\text{ dB}$，絕非 $140\\text{ dB}$！$10$ 台相同音源則 $+10\\text{ dB}$）。',
        '**距離衰減口訣**：點聲源距離變為 $2$ 倍，分貝**減 $6\\text{ dB}$**（距離變 $10$ 倍則減 $20\\text{ dB}$）。',
      ],
    },
    {
      concept: '聲學物理量與建築材料吸音/隔音參數對照表 (Acoustics Parameters)',
      kind: 'table',
      title: '建築聲學核心公式、吸音與隔音機制及最佳殘響時間對照表',
      caption: '彙整聲強級分貝定義、賽賓公式、隔音質量定律與浮動地板減振原理。',
      table: {
        headers: ['建築聲學指標', '物理公式與定義', '關鍵參數與影響因子', '建築空間設計基準'],
        rows: [
          ['聲強級 (分貝 dB)', 'L_I = 10 log₁₀(I / I₀)，I₀ = 10⁻¹² W/m²', '每 +10 dB 聲強能量變 10 倍；+20 dB 變 100 倍', '夜間住宅區環境音量標準約 50 dB(A)'],
          ['賽賓殘響時間 RT60', 'RT60 = 0.161 V / Σ(α_i S_i)', '演講廳最佳 RT60 ≈ 0.8~1.2 s（重清晰度）', '交響音樂廳最佳 RT60 ≈ 1.8~2.2 s（重豐滿度）'],
          ['空氣音隔音損失 TL', 'TL = 10 log₁₀(1 / τ)，質量定律：面密度加倍 +6 dB', '取決於牆體「單位面積質量 (kg/m²)」與氣密性', '雙層輕隔間牆中間填玻璃棉可大幅提升 STC'],
          ['樓板衝擊音 L_n,w', '數值「愈小」代表樓板隔絕腳步聲效果愈好', '法規強制樓板表面材衝擊音降低量 ΔL_w ≥ 17 dB', '採用橡膠隔振墊「浮動地板」切斷固體傳聲橋'],
        ],
      },
      takeaways: [
        '空氣傳音隔音看 $TL$ 或 $STC$（**數值愈大愈好**）；樓板衝擊音看 $L_{n,w}$（代表樓下測得的分貝，**數值愈小愈安靜**，降低量 $\\Delta L_w$ 則是愈大愈好）。',
        '貼吸音海綿只能降低室內的反射音與殘響時間 $RT_{60}$，幾乎無法阻擋聲音穿透牆壁；要隔音必須增加牆體面密度（質量定律）並封堵縫隙。',
      ],
    },
    {
      concept: '振動與波：週期、頻率、波速與繩波的反射和透射',
      kind: 'diagram',
      title: '繩波在固定端與自由端的反射',
      caption: '固定端反射時波形上下顛倒（相位反轉）；自由端反射時波形不顛倒。',
      svg: (() => {
        let s = '';
        const pulse = (x: number, y: number, up: boolean, tone: 'blue' | 'red' | 'green') => path(`M${x - 40},${y} Q${x},${y + (up ? -50 : 50)} ${x + 40},${y}`, { tone, w: 2.4 });
        s += text(20, 30, '固定端', { weight: 'bold', tone: 'red' });
        s += line(20, 80, 460, 80, { tone: 'muted', w: 1.2 });
        s += rect(460, 40, 14, 80, { tone: 'ink', fill: 'muted', soft: true, w: 1.6 });
        s += pulse(150, 80, true, 'blue') + arrow(200, 56, 250, 56, { tone: 'blue', w: 1.6, label: '入射', labelPos: 'mid', labelOffset: [0, -6] });
        s += pulse(370, 80, false, 'red') + arrow(330, 116, 280, 116, { tone: 'red', w: 1.6, label: '反射（顛倒）', labelPos: 'mid', labelOffset: [0, 16] });
        s += text(20, 160, '自由端', { weight: 'bold', tone: 'green' });
        s += line(20, 200, 460, 200, { tone: 'muted', w: 1.2 });
        s += line(466, 150, 466, 240, { tone: 'ink', w: 2 }) + circle(462, 200, 5, { tone: 'ink', fill: 'paper', w: 1.6 });
        s += pulse(150, 200, true, 'blue') + arrow(200, 176, 250, 176, { tone: 'blue', w: 1.6, label: '入射', labelPos: 'mid', labelOffset: [0, -6] });
        s += pulse(370, 200, true, 'green') + arrow(330, 176, 280, 176, { tone: 'green', w: 1.6, label: '反射（不顛倒）', labelPos: 'mid', labelOffset: [0, -6] });
        s += text(520, 120, 'v = f λ', { anchor: 'middle', weight: 'bold', size: 14 });
        return svg(560, 250, s);
      })(),
      takeaways: [
        '波由細繩傳到粗繩（波速變慢）時，反射波顛倒；由粗繩傳到細繩，反射波不顛倒；透射波都不顛倒。',
        '波傳到新介質時頻率不變，波速與波長改變。',
      ],
    },
  ],

  optics: [
    {
      concept: '光的反射、折射與全反射',
      kind: 'diagram',
      title: '斯涅爾折射定律 (n₁ sin θ₁ = n₂ sin θ₂) 與點光源照度平方反比定律圖解',
      caption: '左圖展示光線由空氣進入玻璃窗時偏向法線折射；右圖展示點光源發光強度 I 在距離 r 處被傾角 θ 表面接收之照度 E = (I cos θ) / r²。',
      svg: (() => {
        let s = '';
        // 左：反射與折射
        const cx = 135, cy = 118;
        s += rect(30, cy, 210, 82, { tone: 'blue', fill: 'blue', soft: true, w: 1.2 });
        s += line(30, cy, 240, cy, { tone: 'ink', w: 1.8 });
        s += line(cx, 30, cx, 202, { tone: 'muted', w: 1.4, dash: 'dash' });
        s += arrow(55, 42, cx, cy, { tone: 'red', w: 2.4, label: '入射光', labelPos: 'start', labelOffset: [-6, -6] });
        s += arrow(cx, cy, 215, 42, { tone: 'amber', w: 2, label: '反射光', labelPos: 'end', labelOffset: [-10, -8] });
        s += arrow(cx, cy, 178, 194, { tone: 'green', w: 2.4, label: '折射光', labelPos: 'end', labelOffset: [8, -4] });
        s += angle(cx, cy, 32, 90, 136, 'θ₁', { tone: 'red', labelR: 44 });
        s += angle(cx, cy, 36, -90, -60, 'θ₂', { tone: 'green', labelR: 48 });
        s += text(40, cy - 10, '空氣 n₁ = 1.0', { size: 11.5, tone: 'muted' });
        s += text(40, cy + 20, '玻璃 n₂ = 1.5 (偏向法線)', { size: 11.5, tone: 'blue', weight: 'bold' });
        s += text(135, 20, '斯涅爾定律：n₁ sin θ₁ = n₂ sin θ₂', { anchor: 'middle', weight: 'bold', size: 12.5 });
        // 右：照度平方反比與餘弦定律
        const sx = 310, sy = 52, px = 475, py = 175;
        s += dot(sx, sy, 6, 'amber');
        s += text(sx, sy - 12, '點光源 I (cd)', { anchor: 'middle', tone: 'amber', weight: 'bold', size: 12 });
        s += line(405, py, 540, py, { tone: 'ink', w: 2.4 });
        s += line(px, py, px, py - 78, { tone: 'muted', w: 1.4, dash: 'dash' });
        s += text(px + 6, py - 70, '法線 N', { size: 11, tone: 'muted' });
        s += arrow(sx, sy, px, py, { tone: 'red', w: 2.2, label: '距離 r', labelPos: 'mid', labelOffset: [-28, 12] });
        s += angle(px, py, 34, 90, 143, 'θ', { tone: 'blue', labelR: 46 });
        s += box(305, 184, 240, 34, ['照度 E = (I · cos θ) / r² (單位：lux = lm/m²)'], { tone: 'blue', size: 11.5 });
        s += text(425, 20, '點光源照度：距離平方反比 + 餘弦定律', { anchor: 'middle', weight: 'bold', size: 12.5 });
        return svg(560, 230, s);
      })(),
      takeaways: [
        '斯涅爾定律 $n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$：光由空氣（光疏 $n_1=1$）進入玻璃或水（光密 $n_2>1$）時，波速變慢、波長變短（**頻率 $f$ 不變**），折射角 $\\theta_2 < \\theta_1$（偏向法線）。',
        '點光源照度公式 $E = \\frac{I \\cos\\theta}{r^2}$：注意角度 $\\theta$ 是**入射光線與被照面法線的夾角**，且距離 $r$ 加倍時照度降為 **$1/4$**。',
      ],
    },
    {
      concept: '室內平均照度計算：利用係數法 (Zonal Cavity Lumen Method)',
      kind: 'chart',
      title: 'CNS 國家標準建築空間作業面基準照度 (lux) 比較圖',
      caption: '對照走廊樓梯、居家客廳、一般辦公室、學校教室黑板與建築製圖室之 CNS 法定最低照度規範。',
      svg: barChart({
        w: 520,
        h: 250,
        categories: ['走廊樓梯', '居家客廳', '一般辦公室', '教室桌面/黑板', '精細建築製圖'],
        y: { min: 0, max: 1100, ticks: [0, 250, 500, 750, 1000], label: '標準照度 E (lux)' },
        values: true,
        series: [
          { name: 'CNS 建議照度基準 (lux = lm/m²)', tone: 'amber', values: [100, 200, 500, 500, 1000] },
        ],
      }),
      table: {
        headers: ['建築空間類型', 'CNS 基準照度 E (lux)', '建議相關色溫 CCT (K)', '演色性 Ra (CRI) 要求'],
        rows: [
          ['走廊、樓梯、停車場', '75 ～ 150 lux', '3000K ～ 4000K', 'Ra ≥ 70（安全通行即可）'],
          ['住宅客廳、臥室', '150 ～ 300 lux', '2700K ～ 3000K (暖白光)', 'Ra ≥ 80（溫馨放鬆氛圍）'],
          ['一般辦公室、學校教室', '500 lux (黑板 ≥ 500~750)', '4000K ～ 5000K (自然晝白)', 'Ra ≥ 80（清晰閱讀防疲勞）'],
          ['建築製圖室、美術館展櫃', '750 ～ 1000+ lux', '5000K ～ 6500K (高演色日光)', 'Ra ≥ 90（精確辨色無色偏）'],
        ],
      },
      takeaways: [
        '室內平均照度流明法公式：$E = \\frac{\\Phi \\times N \\times UF \\times MF}{A}$（總光通量 $\\Phi N$ 乘以利用係數 $UF$ 與維護係數 $MF$，再除以地板面積 $A$）。',
        '自然採光係數 $\\text{DF (Daylight Factor)} = \\frac{E_{\\text{in}}}{E_{\\text{out}}} \\times 100\\%$（綠建築設計常以 $\\text{DF} \\ge 2\\%$ 作為居室採光參考值）。',
      ],
    },
    {
      concept: '核心光度學物理量：光通量、發光強度、照度與亮度 (Photometric Quantities)',
      kind: 'table',
      title: '四大核心光度學物理量（光通量、發光強度、照度、輝度）對照總表',
      caption: '釐清統測最易混淆的四個光度學名稱、英文代號、SI 國際單位與物理定義。',
      table: {
        headers: ['光度學物理量', '符號與 SI 單位', '物理定義與換算公式', '直覺比喻與照明應用'],
        rows: [
          ['光通量 (Luminous Flux)', 'Φ，流明 (lm)', '光源每秒輻射出人眼可感知的總光能', '燈泡包裝標示總輸出（發光效率 lm/W）'],
          ['發光強度 (Intensity)', 'I，燭光 (cd = lm/sr)', 'I = Φ / ω（單位立體角內的光通量）', '聚光燈特定方向的光束強弱'],
          ['照度 (Illuminance)', 'E，勒克斯 (lux = lm/m²)', 'E = Φ / A = (I cos θ) / r²', '桌面「被照亮」的程度（照度計量測值）'],
          ['輝度／亮度 (Luminance)', 'L，尼特 (nt = cd/m²)', '發光面或反射面進入人眼之單位投影面積強度', '人眼直視燈具或螢幕感受到的刺眼程度 (UGR)'],
        ],
      },
      takeaways: [
        '**照度 (lux)** 是「被照面每平方公尺接收到的流明數（$\\text{lm/m}^2$）」；**輝度 ($\\text{cd/m}^2$)** 則是「反射或發光進入人眼的明亮感」。',
        '色溫 (CCT) 愈低（$2700\\text{K}$）光色愈偏暖黃，色溫愈高（$6500\\text{K}$）光色愈偏冷藍白；演色性指數 $R_a$ 滿分為 $100$，愈高代表物體色彩愈真實。',
      ],
    },
    {
      concept: '光的干涉與繞射',
      kind: 'diagram',
      title: '楊氏雙狹縫干涉：光程差決定亮紋與暗紋',
      caption: '兩狹縫相距 d，到屏幕距離 L；光程差 d·sinθ = nλ 為亮紋，相鄰亮紋間距 Δy = λL / d。λ = 600 nm、d = 0.3 mm、L = 2 m 時 Δy = 4 mm。',
      svg: (() => {
        let s = '';
        s += arrow(20, 120, 90, 120, { tone: 'amber', w: 2, label: '單色光', labelPos: 'start', labelOffset: [0, -10] });
        s += line(110, 30, 110, 98, { w: 3 }) + line(110, 106, 110, 134, { w: 3 }) + line(110, 142, 110, 210, { w: 3 });
        s += text(98, 106, 'S₁', { anchor: 'end', size: 12, weight: 'bold' }) + text(98, 146, 'S₂', { anchor: 'end', size: 12, weight: 'bold' });
        s += line(460, 30, 460, 210, { w: 2 });
        for (let k = -3; k <= 3; k++) {
          const y = 120 + k * 26;
          s += rect(462, y - 5, 24, 10, { tone: 'amber', fill: 'amber', soft: k !== 0, w: 0 });
        }
        s += line(110, 102, 460, 68, { tone: 'red', w: 1.2 }) + line(110, 138, 460, 68, { tone: 'red', w: 1.2 });
        s += dot(460, 68, 4, 'red') + text(494, 72, 'P（亮紋）', { tone: 'red', size: 12, weight: 'bold' });
        s += line(110, 120, 460, 120, { tone: 'muted', w: 1, dash: 'dash' });
        s += text(285, 232, 'L', { anchor: 'middle', weight: 'bold' });
        s += line(110, 222, 460, 222, { tone: 'muted', w: 1 });
        s += text(504, 124, '中央亮紋', { size: 11, tone: 'amber' });
        s += text(504, 98, 'Δy', { size: 12, tone: 'violet', weight: 'bold' });
        return svg(560, 244, s);
      })(),
      takeaways: [
        '狹縫間距 d 越小、波長 λ 越長，亮紋間距越大。',
        '薄膜干涉造成肥皂泡色彩，也用於鏡頭與太陽能板的抗反射鍍膜。',
      ],
    },
    {
      concept: '近代物理：量子論、光電效應、原子光譜與波粒二象性',
      kind: 'chart',
      title: '光電效應：光電子最大動能與入射光頻率呈直線關係',
      caption: 'K_max = h·f − W，斜率為普朗克常數 h；頻率低於底限頻率 f₀ = W / h 時，無論光多強都打不出電子。圖以功函數約 2.3 eV 與 4.5 eV 的兩種金屬為例。',
      svg: lineChart({
        w: 520,
        h: 260,
        x: { min: 4, max: 14, ticks: [4, 6, 8, 10, 12, 14], label: '頻率 f (×10¹⁴ Hz)' },
        y: { min: 0, max: 4, ticks: [0, 1, 2, 3, 4], label: 'K_max (eV)' },
        series: [
          { name: '金屬甲 W ≈ 2.3 eV', tone: 'blue', points: [[4, 0], [5.56, 0], [8, 1.01], [10, 1.84], [12, 2.67], [14, 3.5]] },
          { name: '金屬乙 W ≈ 4.5 eV', tone: 'red', points: [[4, 0], [10.87, 0], [12, 0.47], [14, 1.3]] },
        ],
        overlay: (f) => text(f.X(5.56), f.Y(0) - 10, 'f₀ ≈ 5.6', { tone: 'blue', size: 11, anchor: 'middle', weight: 'bold' }) +
          text(f.X(10.87), f.Y(0) - 10, 'f₀ ≈ 10.9', { tone: 'red', size: 11, anchor: 'middle', weight: 'bold' }),
      }),
      table: {
        headers: ['頻率 (×10¹⁴ Hz)', '金屬甲 K_max (eV)', '金屬乙 K_max (eV)'],
        rows: [['5', '0（低於 f₀）', '0'], ['8', '1.01', '0'], ['10', '1.84', '0'], ['12', '2.67', '0.47']],
      },
      takeaways: [
        '兩條直線的斜率相同（都是 h），截距不同（由功函數決定）。',
        '光強度只影響打出的電子數，不影響最大動能——這是光具有粒子性的證據。',
      ],
    },
  ],

  electricity: [
    {
      concept: '建築用電安全、NFB 無熔絲開關與接地保護 (Electrical Safety & Grounding)',
      kind: 'diagram',
      title: '建築單相三線制 (110V / 220V) 分電盤、NFB 過載保護與接地迴路圖解',
      caption: '台電單相三線制提供兩條火線 L₁, L₂ 與一條中性線 N：火線對中性線為 110V（一般插座照明），兩火線跨接為 220V（冷氣大功率），並搭配設備接地線 G 防觸電。',
      svg: (() => {
        let s = '';
        // 三條主幹線 L1, N, L2, G
        s += line(35, 45, 325, 45, { tone: 'red', w: 2.5 });
        s += line(35, 95, 325, 95, { tone: 'blue', w: 2.5 });
        s += line(35, 145, 325, 145, { tone: 'ink', w: 2.5 });
        s += line(35, 190, 325, 190, { tone: 'green', w: 2, dash: 'dash' });
        s += text(28, 49, 'L₁ (紅)', { tone: 'red', size: 11.5, weight: 'bold', anchor: 'end' });
        s += text(28, 99, 'N (白)', { tone: 'blue', size: 11.5, weight: 'bold', anchor: 'end' });
        s += text(28, 149, 'L₂ (黑)', { tone: 'ink', size: 11.5, weight: 'bold', anchor: 'end' });
        s += text(28, 194, 'G (綠)', { tone: 'green', size: 11.5, weight: 'bold', anchor: 'end' });
        // 電壓標註
        s += dim(65, 45, 65, 95, '110V', { tone: 'red' });
        s += dim(65, 95, 65, 145, '110V', { tone: 'blue' });
        s += dim(115, 45, 115, 145, '220V', { tone: 'amber' });
        // 110V 負載與 220V 空調負載
        s += line(185, 45, 185, 60, { tone: 'red', w: 1.8 }) + line(185, 82, 185, 95, { tone: 'blue', w: 1.8 });
        s += box(150, 60, 70, 24, '110V 照明', { tone: 'blue', size: 11 });
        s += line(275, 45, 275, 78, { tone: 'red', w: 1.8 }) + line(275, 112, 275, 145, { tone: 'ink', w: 1.8 });
        s += line(275, 145, 275, 190, { tone: 'green', w: 1.5, dash: 'dot' });
        s += box(235, 78, 80, 34, ['220V 冷氣', '含外殼接地 G'], { tone: 'amber', size: 10.5 });
        s += box(345, 22, 198, 88, [
          '建築各分路一律採「並聯」接法',
          '各電器承受相同額定電壓 V',
          '分路總電流 I_T = I₁ + I₂ + …',
        ], { tone: 'blue', size: 11.5 });
        s += box(345, 122, 198, 88, [
          'NFB (防過載/短路) + ELB (防漏電)',
          '纜線焦耳熱損耗 P_loss = I²R',
          '提高電壓 220V ⇒ 電流減半，線損降為 1/4',
        ], { tone: 'red', size: 11.5 });
        return svg(560, 230, s);
      })(),
      takeaways: [
        '家庭與建築分路電器全部採用**並聯（Parallel）**連接：各電器獨立運作、承受相同電壓 $V$，但開啟愈多電器時總電流 $I_{\\text{total}} = \\sum I_k$ 愈大，超過額定即觸發 NFB 跳脫。',
        '高功率冷氣改用 $220\\text{V}$ 的原因：相同功率 $P = VI$ 下，電壓加倍使電流 $I$ 減半，電線發熱損耗 $P_{\\text{loss}} = I^2 R$ 降為 **$1/4$**！',
      ],
    },
    {
      concept: '歐姆定律與串並聯電路分析 (Ohm\'s Law & Series-Parallel Circuits)',
      kind: 'chart',
      title: '固定電阻 R₁ = 6 Ω 與可變電阻 R₂ 在串聯 vs. 並聯下之等效總電阻比較圖',
      caption: '當 R₂ 由 2 Ω 增加至 12 Ω 時，串聯總電阻 R_s = R₁ + R₂ 恆大於任一分電阻，而並聯總電阻 R_p = (R₁R₂)/(R₁+R₂) 恆小於最小分電阻。',
      svg: lineChart({
        w: 520,
        h: 250,
        x: { min: 2, max: 12, ticks: [2, 3, 6, 12], label: '電阻 R₂ (Ω)', fmt: (v) => `${v} Ω` },
        y: { min: 0, max: 20, ticks: [0, 4, 8, 12, 16, 20], label: '等效總電阻 R_eq (Ω)' },
        series: [
          { name: '串聯 R_s = 6 + R₂ (愈串愈大)', tone: 'red', points: [[2, 8], [3, 9], [6, 12], [12, 18]], markers: true },
          { name: '並聯 R_p = 6R₂ / (6 + R₂) (愈並愈小)', tone: 'blue', points: [[2, 1.5], [3, 2], [6, 3], [12, 4]], markers: true, smooth: true },
        ],
      }),
      table: {
        headers: ['電阻 R₁ (Ω)', '電阻 R₂ (Ω)', '串聯總電阻 R_s = R₁ + R₂', '並聯總電阻 R_p = R₁R₂/(R₁+R₂)'],
        rows: [
          ['6 Ω', '2 Ω', '8 Ω', '12 / 8 = 1.5 Ω'],
          ['6 Ω', '3 Ω (黃金組合)', '9 Ω', '18 / 9 = 2.0 Ω'],
          ['6 Ω', '6 Ω (兩相同電阻)', '12 Ω (加倍)', '36 / 12 = 3.0 Ω (減半)'],
          ['6 Ω', '12 Ω', '18 Ω', '72 / 18 = 4.0 Ω'],
        ],
      },
      takeaways: [
        '串聯分壓（$I$ 相同，$V \\propto R$）；並聯分流（$V$ 相同，$I \\propto \\frac{1}{R}$）。',
        '電功率三公式選用策略：已知電壓與電流用 $P = VI$；**串聯電路比較發熱用 $P = I^2 R$**（與 $R$ 成正比）；**並聯電路（家用電器）比較功率用 $P = \\frac{V^2}{R}$**（與 $R$ 成反比）。',
      ],
    },
    {
      concept: '交流電 (AC)、虛功率與功率因數',
      kind: 'table',
      title: '交流電功率三角形 (P, Q, S)、三相四線制與電氣保護裝置總整理表',
      caption: '彙整建築配電必考的導線電阻定律、功率因數改善、三相四線制電壓關係及安全保護開關。',
      table: {
        headers: ['建築電學主題', '核心數學公式', '物理量與單位', '建築機電工程實務'],
        rows: [
          ['導線電阻定律', 'R = ρ · (L / A)', '電阻率 ρ (Ω·m)，長 L，截面積 A (mm²)', '大電流主幹線須加大銅線截面積 A 以降低電阻發熱'],
          ['交流功率三角形', '實功 P = S cos φ (W)；視在 S = √(P²+Q²) (VA)', '功率因數 PF = cos φ = P / S', '並聯進相電容器補償電感性虛功 Q，提高 cos φ'],
          ['三相四線制配電', '線電壓 V_L = √3 V_P；三相功率 P = √3 V_L I_L cos φ', '常見 3φ4W 220V/380V (380 = 220×√3)', '大樓動力幹管（電梯、冰水主機）標準供電系統'],
          ['NFB vs. ELB vs. 接地', 'NFB 防過載與短路；ELB (RCD) 防感電漏電', '設備接地電阻愈小愈安全', '浴室、廚房潮濕插座法規強制裝設漏電斷路器 ELB'],
        ],
      },
      takeaways: [
        '交流電功率三角形必滿足畢氏定理：$S^2 = P^2 + Q^2$，且**功率因數 $\\cos\\phi = \\frac{P}{S}$**（例如 $P=8\\text{ kW}, Q=6\\text{ kVAR} \\implies S=10\\text{ kVA}, \\cos\\phi = 0.8$）。',
        '三相四線制中，**線電壓為相電壓的 $\\sqrt{3} \\approx 1.732$ 倍**（如 $110\\text{V}/190\\text{V}$ 或 $220\\text{V}/380\\text{V}$）。',
      ],
    },
    {
      concept: '靜電、電場、電位與電容',
      kind: 'diagram',
      title: '平行板電容器：兩板間為均勻電場 E = V / d',
      caption: '兩板接上電壓 V，板間電力線平行且等距（均勻電場），方向由正板指向負板；間距 2 mm、電壓 12 V 時 E = 6000 V/m。',
      svg: (() => {
        let s = '';
        s += rect(170, 40, 12, 150, { tone: 'red', fill: 'red', soft: true, w: 1.6 });
        s += rect(370, 40, 12, 150, { tone: 'blue', fill: 'blue', soft: true, w: 1.6 });
        for (let i = 0; i < 6; i++) {
          const y = 52 + i * 26;
          s += text(176, y + 4, '+', { anchor: 'middle', tone: 'red', weight: 'bold' });
          s += text(376, y + 4, '−', { anchor: 'middle', tone: 'blue', weight: 'bold' });
          s += arrow(186, y, 364, y, { tone: 'amber', w: 1.4, head: 7 });
        }
        s += line(176, 210, 376, 210, { tone: 'muted', w: 1 }) + text(276, 226, 'd', { anchor: 'middle', weight: 'bold' });
        s += box(400, 70, 150, 90, ['E = V / d', 'C = εA / d', 'U = ½CV²'], { tone: 'violet', size: 12.5 });
        s += text(90, 120, '電位高', { tone: 'red', anchor: 'middle', weight: 'bold' });
        s += text(90, 140, '(+V)', { tone: 'red', anchor: 'middle', size: 12 });
        return svg(560, 236, s);
      })(),
      takeaways: [
        '電力線越密電場越強；平行板內部電場均勻，邊緣才會彎曲。',
        '電場是向量、電位是純量；正電荷順著電場方向移動時電位能減少。',
      ],
    },
    {
      concept: '電流的磁效應與載流導線在磁場中受力',
      kind: 'diagram',
      title: '安培右手定則與馬達原理',
      caption: '左：長直導線電流向上，周圍磁場呈同心圓（右手拇指沿電流、四指彎曲方向為磁場）；右：載流導線在磁場中受力 F = ILB，是馬達轉動的原因。',
      svg: (() => {
        let s = '';
        s += arrow(130, 210, 130, 30, { tone: 'red', w: 3, label: 'I', labelOffset: [8, 10] });
        [26, 46, 66].forEach((r, i) => {
          s += ellipse(130, 120, r, r * 0.35, { tone: 'blue', w: 1.4 });
          s += arrow(130 + 3, 120 + r * 0.35, 130 - 4, 120 + r * 0.35, { tone: 'blue', w: 1.4, head: 7 });
          if (i === 2) s += text(130 + r + 6, 116, 'B', { tone: 'blue', weight: 'bold' });
        });
        s += text(130, 232, 'B = μ₀I / (2πr)', { anchor: 'middle', weight: 'bold', size: 12.5 });
        s += rect(300, 50, 40, 140, { tone: 'red', fill: 'red', soft: true, w: 1.6 }) + text(320, 124, 'N', { anchor: 'middle', weight: 'bold', tone: 'red', size: 16 });
        s += rect(500, 50, 40, 140, { tone: 'blue', fill: 'blue', soft: true, w: 1.6 }) + text(520, 124, 'S', { anchor: 'middle', weight: 'bold', tone: 'blue', size: 16 });
        for (let i = 0; i < 3; i++) s += arrow(344, 80 + i * 40, 494, 80 + i * 40, { tone: 'muted', w: 1, head: 6, dash: 'dash' });
        s += circle(420, 120, 9, { tone: 'ink', fill: 'paper', w: 1.8 }) + dot(420, 120, 3);
        s += text(436, 112, 'I（射出紙面）', { size: 11.5, weight: 'bold' });
        s += arrow(420, 108, 420, 46, { tone: 'green', w: 2.6, label: 'F = ILB', labelOffset: [8, 6] });
        return svg(560, 244, s);
      })(),
      takeaways: [
        '螺線管通電後內部為近似均勻磁場，可做成電磁鐵（電磁門鎖、電梯煞車）。',
        '導線與磁場垂直時受力最大，平行時不受力。',
      ],
    },
    {
      concept: '電磁感應：法拉第定律、冷次定律、發電機與電磁波',
      kind: 'diagram',
      title: '電磁波譜：波長由長到短與建築、生活應用',
      caption: '電磁波在真空中速度都是 3 × 10⁸ m/s；波長越短、頻率越高、光子能量越大。',
      svg: (() => {
        let s = '';
        const bands: [string, string, 'blue' | 'green' | 'amber' | 'red' | 'violet' | 'muted'][] = [
          ['無線電波', '通訊、Wi-Fi', 'blue'], ['微波', '微波爐、雷達', 'green'], ['紅外線', '熱像儀檢測外牆', 'red'],
          ['可見光', '採光與照明', 'amber'], ['紫外線', '殺菌、材料老化', 'violet'], ['X／γ 射線', '非破壞檢測', 'muted'],
        ];
        bands.forEach(([n, use, tone], i) => { s += box(14 + i * 90, 50, 84, 70, [n, use], { tone, size: 11.5 }); });
        s += arrow(20, 150, 540, 150, { tone: 'ink', w: 1.6 });
        s += text(20, 170, '波長長、頻率低', { size: 12, tone: 'muted' });
        s += text(540, 170, '波長短、頻率高、能量大', { size: 12, tone: 'muted', anchor: 'end' });
        s += text(280, 30, 'c = f·λ = 3 × 10⁸ m/s', { anchor: 'middle', weight: 'bold' });
        s += text(280, 200, '法拉第定律 ε = −N·ΔΦ / Δt：磁通量變化 → 感應電流（發電機原理）', { anchor: 'middle', size: 12 });
        return svg(560, 214, s);
      })(),
      takeaways: [
        '變動的電場與磁場互相感應而向外傳播，形成電磁波；不需要介質。',
        '冷次定律：感應電流的磁場總是反抗原磁通量的變化。',
      ],
    },
    {
      concept: '核能與物理學發展簡史',
      kind: 'diagram',
      title: '物理學發展里程碑：從古典力學到量子與核物理',
      caption: '伽利略與牛頓奠定古典力學，法拉第與馬克士威完成電磁學，普朗克與愛因斯坦開啟量子論與相對論，並帶來核能的應用。',
      svg: (() => {
        let s = '';
        s += timeline(40, 520, 120, [1600, 1950], [
          { at: 1638, label: ['伽利略', '落體與實驗方法'], tone: 'blue' },
          { at: 1687, label: ['牛頓《原理》', '運動定律、萬有引力'], tone: 'blue' },
          { at: 1831, label: ['法拉第', '電磁感應'], tone: 'green', up: true },
          { at: 1865, label: ['馬克士威', '電磁波理論'], tone: 'green', up: false },
          { at: 1903, label: ['普朗克、愛因斯坦', '量子論、E = mc²'], tone: 'red', up: true },
          { at: 1938, label: ['核分裂', '被發現'], tone: 'violet', up: false },
        ], { ticks: [1600, 1700, 1800, 1900], size: 11 });
        return svg(560, 220, s);
      })(),
      takeaways: [
        '牛頓力學是結構力學的基礎；電磁學帶來發電機與馬達；量子論帶來太陽能電池與雷射。',
        '核分裂依 E = mc²，少量質量虧損即放出巨大能量；輻射防護靠時間、距離、屏蔽。',
      ],
    },
  ],
};
