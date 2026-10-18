import type { TopicVisualMap } from './types';
import {
  angle, arrow, axes, barChart, box, circle, curve, dim, dot, ellipse, flow, frame,
  line, lineChart, oblique, point, polar, polygon, polyline, rect, rightAngle,
  shadeUnder, signedFill, svg, text, type Pt,
} from './kit';

export const mathCVisuals: TopicVisualMap = {
  'functions-graphs': [
    {
      concept: '二次函數配方法、由圖判斷係數與一元二次不等式',
      kind: 'diagram',
      title: '二次函數頂點配方法與判別式 Δ 幾何圖解',
      caption: '將 y = ax² + bx + c 配方為 a(x - h)² + k，比較 Δ > 0、Δ = 0、Δ < 0 三種拋物線與 x 軸交點關係。',
      svg: (() => {
        const f = frame([-3, 5], [-3, 6], { left: 48, top: 20, width: 310, height: 185 });
        let s = axes(f, { xTicks: [-2, 1, 4], yTicks: [-2, 2, 5], xLabel: 'x', yLabel: 'y' });
        s += curve(f, (x) => 0.5 * (x - 1) * (x - 1) - 2, { tone: 'blue', w: 2.3 });
        s += curve(f, (x) => 0.5 * (x - 1) * (x - 1), { tone: 'green', w: 2, dash: 'dash' });
        s += curve(f, (x) => 0.5 * (x - 1) * (x - 1) + 2, { tone: 'amber', w: 2, dash: 'dot' });
        s += line(f.X(1), f.box.top, f.X(1), f.box.top + f.box.height, { tone: 'red', w: 1.2, dash: 'center' });
        s += point(f, 1, -2, 'V(h, k)=(1,-2)', { tone: 'red', dx: 8, dy: 12 });
        s += point(f, -1, 0, 'α', { tone: 'blue', dx: -10, dy: -8 });
        s += point(f, 3, 0, 'β', { tone: 'blue', dx: 8, dy: -8 });
        s += box(378, 24, 168, 52, ['Δ = b² - 4ac > 0', '相異兩實根 (交兩點)'], { tone: 'blue', size: 11.5 });
        s += box(378, 88, 168, 52, ['Δ = 0 (重根相切)', '頂點恰在 x 軸上'], { tone: 'green', size: 11.5 });
        s += box(378, 152, 168, 52, ['Δ < 0 (恆正無實根)', '圖形完全在 x 軸上方'], { tone: 'amber', size: 11.5 });
        return svg(560, 230, s);
      })(),
      takeaways: [
        '頂點坐標 $(h, k) = \\left(-\\frac{b}{2a}, -\\frac{b^2-4ac}{4a}\\right)$，對稱軸方程式為 $x = -\\frac{b}{2a}$。',
        '根式化簡必記 $\\sqrt{x^2} = |x|$；二次函數恆正條件為開口向上 ($a > 0$) 且與 $x$ 軸無交點 ($\\Delta < 0$)。',
      ],
    },
    {
      concept: '絕對值：距離意義',
      kind: 'chart',
      title: '絕對值折線函數 y = |x - a| + |x - b| 距離和變化圖',
      caption: '呈現數線上動點 x 到兩定點 A(-1)、B(3) 的距離和 y = |x + 1| + |x - 3|，在區間 [-1, 3] 內具有平底最小值 4。',
      svg: lineChart({
        w: 520,
        h: 250,
        x: { min: -3, max: 5, ticks: [-3, -1, 1, 3, 5], label: 'x 坐標' },
        y: { min: 0, max: 10, ticks: [0, 2, 4, 6, 8, 10], label: '距離和 y' },
        series: [
          { name: 'y = |x+1| + |x-3|', tone: 'blue', points: [[-3, 8], [-1, 4], [1, 4], [3, 4], [5, 8]], markers: true },
          { name: 'y = |x-1| (單一絕對值)', tone: 'amber', dash: 'dash', points: [[-3, 4], [-1, 2], [1, 0], [3, 2], [5, 4]], markers: true },
        ],
      }),
      table: {
        headers: ['動點位置 x', '到 A(-1) 距離 |x+1|', '到 B(3) 距離 |x-3|', '距離總和 y'],
        rows: [
          ['x = -3 (左側外部)', '2', '6', '8'],
          ['x = -1 (左轉折點)', '0', '4', '4 (最小值)'],
          ['x = 1 (區間中點)', '2', '2', '4 (平底極小區間)'],
          ['x = 3 (右轉折點)', '4', '0', '4 (最小值)'],
          ['x = 5 (右側外部)', '6', '2', '8'],
        ],
      },
      takeaways: [
        '$|x - a| \\le k \\iff a - k \\le x \\le a + k$（夾在中間）；$|x - a| \\ge k \\iff x \\ge a + k$ 或 $x \\le a - k$（散在兩側）。',
        '雙絕對值和 $|x - a| + |x - b|$ 在 $x \\in [a, b]$ 之間恆等於 $|a - b|$，圖形呈平底碗狀。',
      ],
    },
    {
      concept: '平面坐標系：距離公式',
      kind: 'table',
      title: '平面坐標系距離、內分點、外分點與重心公式對照表',
      caption: '整理平面上兩點 A(x₁, y₁)、B(x₂, y₂) 與三角形 ABC 之核心坐標幾何公式與統測常考比例條件。',
      table: {
        headers: ['幾何公式名稱', '代數坐標公式', '幾何條件與圖形位置', '統測常考陷阱'],
        rows: [
          ['兩點距離公式', 'AB = √[(x₂ - x₁)² + (y₂ - y₁)²]', '直角三角形畢氏定理斜邊長', '注意坐標相減時負號平方恆正'],
          ['中點坐標公式', 'M = ((x₁ + x₂)/2, (y₁ + y₂)/2)', 'AP : PB = 1 : 1 平分線段', '平行四邊形對角線中點重合：A+C = B+D'],
          ['內分點公式', 'P = ((nx₁ + mx₂)/(m+n), (ny₁ + my₂)/(m+n))', 'P 在 AB 線段內部，AP : PB = m : n', '分子係數交叉相乘（m 乘 B、n 乘 A）'],
          ['三角形重心 G', 'G = ((x₁ + x₂ + x₃)/3, (y₁ + y₂ + y₃)/3)', '三中線交點，頂點到重心 : 重心到底邊 = 2 : 1', '面積被三中線六等分：△GAB = 1/3 △ABC'],
        ],
      },
      takeaways: [
        '內分點記憶口訣：「分母比例相加 $m+n$，分子交叉相乘 $nA + mB$」。',
        '平行四邊形 $ABCD$ 頂點按順序排列時，必滿足對角頂點坐標和相等：$A + C = B + D$。',
      ],
    },
  ],

  trigonometry: [
    {
      concept: '任意角的三角函數：單位圓定義、象限正負與角度化簡',
      kind: 'diagram',
      title: '單位圓廣義角定義與四象限正負號 (ASTC) 圖解',
      caption: '以單位圓 r = 1 上的動點 P(cos θ, sin θ) 定義任意角三角函數，並標示四個象限為正的函數與扇形弧長 s = rθ。',
      svg: (() => {
        const cx = 155, cy = 115, R = 78;
        let s = '';
        s += arrow(cx - 105, cy, cx + 110, cy, { tone: 'ink', w: 1.4, head: 8, label: 'x' });
        s += arrow(cx, cy + 98, cx, cy - 98, { tone: 'ink', w: 1.4, head: 8, label: 'y' });
        s += circle(cx, cy, R, { tone: 'blue', w: 2, fill: 'blue', soft: true });
        const [px, py] = polar(cx, cy, R, 50);
        s += line(cx, cy, px, py, { tone: 'red', w: 2.2 });
        s += line(px, py, px, cy, { tone: 'green', w: 1.8, dash: 'dash' });
        s += rightAngle(px, cy, 90, 180, 8);
        s += angle(cx, cy, 26, 0, 50, 'θ', { tone: 'amber', labelR: 38 });
        s += dot(px, py, 4, 'red');
        s += text(px + 8, py - 6, 'P(cos θ, sin θ)', { tone: 'red', size: 12, weight: 'bold' });
        s += text(cx + 38, cy - 48, 'I 全 +', { tone: 'blue', size: 11.5, weight: 'bold' });
        s += text(cx - 56, cy - 48, 'II sin +', { tone: 'green', size: 11.5, weight: 'bold' });
        s += text(cx - 58, cy + 56, 'III tan +', { tone: 'amber', size: 11.5, weight: 'bold' });
        s += text(cx + 34, cy + 56, 'IV cos +', { tone: 'violet', size: 11.5, weight: 'bold' });
        s += box(315, 24, 225, 82, ['弧度量與扇形公式 (θ 以 rad 計)', 'π rad = 180°，1 rad ≈ 57.3°', '弧長 s = rθ，面積 A = ½r²θ = ½rs'], { tone: 'blue', size: 12 });
        s += box(315, 122, 225, 82, ['廣義角化簡口訣：奇變偶不變', '90°×k ± θ：k 奇數換餘函數', '正負看原函數在原象限之符號'], { tone: 'amber', size: 12 });
        return svg(560, 230, s);
      })(),
      takeaways: [
        '扇形弧長 $s = r\\theta$ 與面積 $A = \\frac{1}{2}r^2\\theta = \\frac{1}{2}rs$ 中，$\\theta$ 必須先換算為**弧度 (rad)**。',
        '單位圓上 $x = \\cos\\theta$、$y = \\sin\\theta$、斜率 $m = \\tan\\theta = \\frac{y}{x}$，故象限正負直接對應 $(x, y)$ 坐標正負。',
      ],
    },
    {
      concept: '三角函數的基本性質：平方、商數、倒數與餘角關係',
      kind: 'chart',
      title: '特殊角 0°～90° 之 sin θ、cos θ、tan θ 數值趨勢比較圖',
      caption: '在第一象限隨角度 θ 由 0° 增加至 90°，sin θ 與 tan θ 嚴格遞增，cos θ 嚴格遞減，且於 45° 時 sin 45° = cos 45°。',
      svg: lineChart({
        w: 520,
        h: 250,
        x: { min: 0, max: 90, ticks: [0, 30, 45, 60, 90], label: '角度 θ (°)', fmt: (v) => `${v}°` },
        y: { min: 0, max: 1.8, ticks: [0, 0.5, 1.0, 1.5], label: '三角函數值' },
        series: [
          { name: 'sin θ (遞增)', tone: 'blue', points: [[0, 0], [30, 0.5], [45, 0.707], [60, 0.866], [90, 1]], markers: true, smooth: true },
          { name: 'cos θ (遞減)', tone: 'red', points: [[0, 1], [30, 0.866], [45, 0.707], [60, 0.5], [90, 0]], markers: true, smooth: true },
          { name: 'tan θ (坡度)', tone: 'green', dash: 'dash', points: [[0, 0], [30, 0.577], [45, 1.0], [60, 1.732]], markers: true, smooth: true },
        ],
      }),
      table: {
        headers: ['特殊角 θ', 'sin θ', 'cos θ', 'tan θ (坡度百分比)'],
        rows: [
          ['30° (π/6)', '1/2 = 0.500', '√3/2 ≈ 0.866', '1/√3 ≈ 0.577 (57.7%)'],
          ['45° (π/4)', '√2/2 ≈ 0.707', '√2/2 ≈ 0.707', '1 (100% 等高坡)'],
          ['60° (π/3)', '√3/2 ≈ 0.866', '1/2 = 0.500', '√3 ≈ 1.732 (173.2%)'],
          ['3-4-5 工程角 (≈37°)', '3/5 = 0.600', '4/5 = 0.800', '3/4 = 0.750 (75%)'],
        ],
      },
      takeaways: [
        '當 $0^\\circ < \\theta < 45^\\circ$ 時 $\\cos\\theta > \\sin\\theta$；當 $45^\\circ < \\theta < 90^\\circ$ 時 $\\sin\\theta > \\cos\\theta$。',
        '建築無障礙坡道坡度 $\\tan\\theta = \\frac{\\text{垂直高差}}{\\text{水平距離}} \\le \\frac{1}{12} \\approx 8.33\\%$。',
      ],
    },
    {
      concept: '正弦定理、餘弦定理與三角形面積',
      kind: 'table',
      title: '三角函數基本恆等式、正弦定理與餘弦定理總整理表',
      caption: '彙整同角平方商數關係、知和求積恆等式，以及解斜三角形必備的正弦與餘弦定理。',
      table: {
        headers: ['定理／性質類別', '核心數學公式', '適用條件與已知量', '解題關鍵轉換'],
        rows: [
          ['平方與商數關係', 'sin²θ + cos²θ = 1，tan θ = sin θ / cos θ', '同角 θ 化簡、知一求二', '(sin θ ± cos θ)² = 1 ± 2 sin θ cos θ'],
          ['餘角與倒數關係', 'sin(90°-θ) = cos θ，tan θ · cot θ = 1', '互餘兩角合計 90° (如 20° 與 70°)', 'sin²10° + sin²80° = sin²10° + cos²10° = 1'],
          ['正弦定理 (Sine Law)', 'a/sin A = b/sin B = c/sin C = 2R', '已知 AAS、ASA 或外接圓半徑 R', '邊長比 a : b : c = sin A : sin B : sin C'],
          ['餘弦定理 (Cosine Law)', 'c² = a² + b² - 2ab cos C', '已知 SAS 求第三邊，或 SSS 求夾角', 'cos C = (a² + b² - c²) / (2ab)'],
        ],
      },
      takeaways: [
        '遇到 $\\sin\\theta + \\cos\\theta = k$，立刻兩邊平方得 $1 + 2\\sin\\theta\\cos\\theta = k^2 \\implies \\sin\\theta\\cos\\theta = \\frac{k^2-1}{2}$。',
        '三角形面積公式：$\\Delta = \\frac{1}{2}ab\\sin C = \\sqrt{s(s-a)(s-b)(s-c)}$（海龍公式，$s = \\frac{a+b+c}{2}$）。',
      ],
    },
  ],

  vectors: [
    {
      concept: '正射影與點到直線距離',
      kind: 'diagram',
      title: '平面向量三角形加減法、內積與正射影幾何圖解',
      caption: '左圖展示向量平行四邊形加法 a+b 與三角形減法 a-b（終點減起點）；右圖展示向量 a 在 b 上的正射影與垂足 H。',
      svg: (() => {
        let s = '';
        // 左：向量加減
        const ox = 42, oy = 185;
        const ax = 175, ay = 185;
        const bx = 95, by = 68;
        const cx = ax + (bx - ox), cy = ay + (by - oy);
        s += polygon([[ox, oy], [ax, ay], [cx, cy], [bx, by]], { tone: 'muted', fill: 'blue', soft: true, dash: 'dash' });
        s += arrow(ox, oy, ax, ay, { tone: 'blue', w: 2.4, label: 'a', labelPos: 'mid', labelOffset: [0, 18] });
        s += arrow(ox, oy, bx, by, { tone: 'green', w: 2.4, label: 'b', labelPos: 'mid', labelOffset: [-16, 0] });
        s += arrow(ox, oy, cx, cy, { tone: 'red', w: 2.4, label: 'a + b', labelPos: 'mid', labelOffset: [8, -8] });
        s += arrow(bx, by, ax, ay, { tone: 'amber', w: 2, dash: 'dash', label: 'a - b', labelPos: 'mid', labelOffset: [-18, -8] });
        s += text(135, 28, '向量加法與減法 (OA - OB = BA)', { anchor: 'middle', weight: 'bold', size: 13 });
        // 右：正射影
        const rx = 310, ry = 185;
        const rbx = 525, rby = 185;
        const rax = 435, ray = 68;
        s += arrow(rx, ry, rbx, rby, { tone: 'blue', w: 2.2, label: 'b', labelPos: 'end', labelOffset: [8, 4] });
        s += arrow(rx, ry, rax, ray, { tone: 'red', w: 2.4, label: 'a', labelPos: 'mid', labelOffset: [-14, -6] });
        s += line(rax, ray, rax, ry, { tone: 'muted', w: 1.5, dash: 'dash' });
        s += rightAngle(rax, ry, 90, 180, 9);
        s += arrow(rx, ry + 6, rax, ry + 6, { tone: 'green', w: 2.8 });
        s += angle(rx, ry, 32, 0, 43, 'θ', { tone: 'amber', labelR: 44 });
        s += dot(rax, ry, 4, 'green');
        s += text((rx + rax) / 2, ry + 26, '正射影 ((a·b)/|b|²) b', { anchor: 'middle', tone: 'green', size: 12, weight: 'bold' });
        s += text(420, 28, '向量內積與正射影長 |a|cos θ', { anchor: 'middle', weight: 'bold', size: 13 });
        return svg(560, 230, s);
      })(),
      takeaways: [
        '向量減法口訣：「後減前」$\\vec{AB} = B - A = \\vec{OB} - \\vec{OA}$；三點共線充要條件為 $\\vec{OP} = \\alpha\\vec{OA} + \\beta\\vec{OB}$ 且 $\\alpha + \\beta = 1$。',
        '$\\vec{a}$ 在 $\\vec{b}$ 上的正射影向量為 $\\left(\\frac{\\vec{a}\\cdot\\vec{b}}{|\\vec{b}|^2}\\right)\\vec{b}$，正射影長為 $\\frac{|\\vec{a}\\cdot\\vec{b}|}{|\\vec{b}|}$。',
      ],
    },
    {
      concept: '內積的定義、坐標計算與夾角',
      kind: 'chart',
      title: '固定長度向量 |a|=4, |b|=3 在不同夾角 θ 下之內積與合力長變化圖',
      caption: '隨兩向量夾角 θ 從 0° 增至 180°，內積 a·b = |a||b|cos θ 由 +12 遞減至 -12（90° 時為 0），合力長 |a+b| 由 7 減至 1。',
      svg: lineChart({
        w: 520,
        h: 250,
        x: { min: 0, max: 180, ticks: [0, 60, 90, 120, 180], label: '向量夾角 θ (°)', fmt: (v) => `${v}°` },
        y: { min: -12, max: 14, ticks: [-12, -6, 0, 6, 12], label: '數值大小' },
        series: [
          { name: '內積 a·b = 12 cos θ', tone: 'blue', points: [[0, 12], [60, 6], [90, 0], [120, -6], [180, -12]], markers: true, smooth: true },
          { name: '合力長 |a+b|', tone: 'green', points: [[0, 7], [60, 6.08], [90, 5], [120, 3.61], [180, 1]], markers: true, smooth: true },
        ],
      }),
      table: {
        headers: ['夾角 θ', 'cos θ', '內積 a·b = 12 cos θ', '合成向量長 |a+b| = √(25 + 2a·b)'],
        rows: [
          ['0° (同向平行)', '1', '+12 (最大內積)', '√49 = 7 (最大合力)'],
          ['60° (銳角)', '1/2', '+6', '√37 ≈ 6.08'],
          ['90° (互相垂直)', '0', '0 (垂直充要條件)', '√25 = 5 (畢氏定理)'],
          ['120° (鈍角)', '-1/2', '-6', '√13 ≈ 3.61'],
          ['180° (反向平行)', '-1', '-12 (最小內積)', '√1 = 1 (最小合力)'],
        ],
      },
      takeaways: [
        '向量長度與內積轉換必背：$|\\vec{a} \\pm \\vec{b}|^2 = |\\vec{a}|^2 \\pm 2(\\vec{a}\\cdot\\vec{b}) + |\\vec{b}|^2$。',
        '內積正負判讀角度：$\\vec{a}\\cdot\\vec{b} > 0$ 為銳角、$\\vec{a}\\cdot\\vec{b} = 0$ 為垂直、$\\vec{a}\\cdot\\vec{b} < 0$ 為鈍角。',
      ],
    },
    {
      concept: '內積的應用：三角形面積、二階行列式與柯西不等式',
      kind: 'table',
      title: '平面向量平行、垂直、三角形面積與柯西不等式速查表',
      caption: '設 a = (x₁, y₁)、b = (x₂, y₂)，對照平行與垂直之坐標條件、二階行列式面積及柯西不等式極值配方。',
      table: {
        headers: ['向量關係／定理', '坐標代數條件', '幾何意義與公式', '統測解題關鍵'],
        rows: [
          ['向量平行 a ∥ b', 'x₁y₂ - x₂y₁ = 0 (分量成比例)', '夾角 0° 或 180°，二階行列式為 0', 'x₁/x₂ = y₁/y₂ = k（分量比相等）'],
          ['向量垂直 a ⊥ b', 'a·b = x₁x₂ + y₁y₂ = 0', '夾角 90°，內積恆等於 0', '看到「垂直」立刻列 x₁x₂ + y₁y₂ = 0'],
          ['三角形面積公式', 'Δ = ½ √(|a|²|b|² - (a·b)²) = ½ |x₁y₂ - x₂y₁|', '以 a, b 為鄰邊之三角形面積', '平行四邊形面積不乘 ½，直接取 |x₁y₂ - x₂y₁|'],
          ['柯西不等式', '(x₁² + y₁²)(x₂² + y₂²) ≥ (x₁x₂ + y₁y₂)²', '由 |cos θ| ≤ 1 推導之極值不等式', '等號成立時 x₁/x₂ = y₁/y₂（兩向量平行）'],
        ],
      },
      takeaways: [
        '**平行看比例**（$x_1 y_2 - x_2 y_1 = 0$），**垂直看內積**（$x_1 x_2 + y_1 y_2 = 0$），兩者切勿混淆！',
        '已知一次式求平方和最小值（或反之），直接套用柯西不等式 $(a^2+b^2)(x^2+y^2) \\ge (ax+by)^2$。',
      ],
    },
  ],

  algebra: [
    {
      concept: '餘式定理與因式定理：代值取代長除法',
      kind: 'diagram',
      title: '多項式除法原理與綜合除法、餘式定理流程圖',
      caption: '從除法原理 f(x) = g(x)q(x) + r(x) 出發，對照一次除式 (x - a) 的綜合除法降次流程與餘式定理 r = f(a) 代值法。',
      svg: (() => {
        let s = '';
        s += box(24, 20, 512, 50, ['除法原理：被除式 f(x) = 除式 (x - a) × 商式 q(x) + 餘式 r', '關鍵條件：deg r(x) < deg g(x) 或 r(x) = 0（除式為一次時，餘式 r 為常數）'], { tone: 'blue', size: 12 });
        s += flow(24, 96, [
          ['缺項補 0', '降冪排列係數'],
          ['除式 x - a = 0', '置根 x = a 於右'],
          ['首項直落', '乘 a 加下一行'],
          ['末項為餘數 r', '前段為商 q(x)'],
        ], { w: 112, h: 56, gap: 21, tones: ['blue', 'green', 'amber', 'red'], size: 11.5 });
        s += box(24, 170, 248, 46, ['只求餘數：餘式定理 r = f(a)'], { tone: 'red', size: 12.5 });
        s += box(288, 170, 248, 46, ['整除判別：因式定理 (x-a)|f(x) ⇔ f(a)=0'], { tone: 'green', size: 12.5 });
        return svg(560, 230, s);
      })(),
      takeaways: [
        '綜合除法運算前**缺項務必補 0**；若除式為 $ax - b$，算出的第一層係數須**再除以 $a$** 才是真正的商式 $q(x)$（餘數 $r$ 不變）。',
        '餘式定理：令除式為 0 的 $x = a$ 直接代入被除式，即得餘數 $r = f(a)$，免做長除法。',
      ],
    },
    {
      concept: '餘式定理與因式定理',
      kind: 'chart',
      title: '三次多項式 f(x) = x³ - 2x² - x + 2 函數值與因式根對應圖',
      caption: '將 x = -1, 1, 2 代入 f(x) 皆得餘數 f(a) = 0，對應圖形與 x 軸的三個交點，驗證因式分解 f(x) = (x+1)(x-1)(x-2)。',
      svg: lineChart({
        w: 520,
        h: 250,
        x: { min: -2, max: 3, ticks: [-2, -1, 0, 1, 2, 3], label: '代入值 x = a' },
        y: { min: -15, max: 10, ticks: [-15, -10, -5, 0, 5, 10], label: '餘數 f(a)' },
        series: [
          { name: 'f(x) = x³ - 2x² - x + 2', tone: 'blue', points: [[-2, -12], [-1, 0], [0, 2], [1, 0], [2, 0], [3, 8]], markers: true, smooth: true },
        ],
        overlay: (f) => line(f.box.left, f.Y(0), f.box.left + f.box.width, f.Y(0), { tone: 'red', w: 1.4, dash: 'dash' }),
      }),
      table: {
        headers: ['代入值 x = a', '對應一次除式', '餘式定理計算 f(a)', '因式分解結論'],
        rows: [
          ['a = -1', 'x + 1', '(-1)³ - 2(-1)² - (-1) + 2 = 0', '(x + 1) 為 f(x) 的因式'],
          ['a = 0', 'x', 'f(0) = 2 (常數項)', '除以 x 的餘數為 2'],
          ['a = 1', 'x - 1', '1 - 2 - 1 + 2 = 0 (係數和=0)', '(x - 1) 為 f(x) 的因式'],
          ['a = 2', 'x - 2', '8 - 8 - 2 + 2 = 0', '(x - 2) 為 f(x) 的因式'],
        ],
      },
      takeaways: [
        '各項係數總和 $f(1) = 0 \\iff (x - 1)$ 為因式；偶次項係數和等於奇次項係數和 $f(-1) = 0 \\iff (x + 1)$ 為因式。',
        '若被二次式 $(x - \\alpha)(x - \\beta)$ 除，必設餘式為一次式 $r(x) = ax + b$，再代 $f(\\alpha)$、$f(\\beta)$ 解聯立。',
      ],
    },
    {
      concept: '多項式方程式：根與係數關係',
      kind: 'table',
      title: '多項式特殊代值、韋達定理（根與係數）與分式化簡總表',
      caption: '彙整多項式係數和、一元二次與三次方程式之根與係數關係，以及部分分式拆解公式。',
      table: {
        headers: ['代數主題', '核心公式與恆等式', '代數結構與條件', '統測常考應用'],
        rows: [
          ['多項式特殊代值', '常數項 = f(0)，全係數和 = f(1)', '偶次項和 = [f(1)+f(-1)]/2', '奇次項係數和 = [f(1)-f(-1)]/2'],
          ['二次根與係數 (韋達)', 'α + β = -b/a，αβ = c/a', 'ax² + bx + c = 0 之兩根 α, β', 'α² + β² = (α+β)² - 2αβ'],
          ['三次根與係數關係', 'α+β+γ = -b/a，αβ+βγ+γα = c/a，αβγ = -d/a', 'ax³ + bx² + cx + d = 0', '實係數方程式虛根必共軛成對 a ± bi'],
          ['部分分式拆解公式', '1 / [n(n+k)] = (1/k) · [1/n - 1/(n+k)]', '分母為兩因式相乘之級數求和', '前後對消法求 1/(1×2) + 1/(2×3) + …'],
        ],
      },
      takeaways: [
        '已知兩根 $\\alpha, \\beta$ 求對稱式時，不需解出根，直接以 $\\alpha+\\beta = -\\frac{b}{a}$ 與 $\\alpha\\beta = \\frac{c}{a}$ 代換。',
        '實係數多項式方程式若有虛根 $p + qi$，則其共軛複數 $p - qi$ 必亦為一根。',
      ],
    },
  ],

  'lines-circles': [
    {
      concept: '圓與直線的關係：相交、相切、相離、弦長與切線',
      kind: 'diagram',
      title: '圓與直線之相割、相切、相離距離判別與弦長畢氏定理圖',
      caption: '利用圓心 O(h, k) 到直線 L 的垂直距離 d 與半徑 r 比大小判別位置關係，並以畢氏定理求相割弦長 AB = 2√(r² - d²)。',
      svg: (() => {
        const cx = 175, cy = 118, r = 72;
        let s = '';
        s += circle(cx, cy, r, { tone: 'blue', w: 2.2, fill: 'blue', soft: true });
        // 相割線 L1 (y = cy - 42)
        const ySec = cy - 42;
        const dx = Math.sqrt(r * r - 42 * 42);
        s += line(40, ySec, 320, ySec, { tone: 'green', w: 2 });
        s += text(326, ySec + 4, 'L₁ 相割 (d < r)', { tone: 'green', size: 12, weight: 'bold' });
        s += line(cx, cy, cx, ySec, { tone: 'amber', w: 1.8 });
        s += line(cx, cy, cx - dx, ySec, { tone: 'red', w: 2 });
        s += rightAngle(cx, ySec, 180, 270, 8);
        s += dot(cx, cy, 4, 'ink');
        s += text(cx + 8, cy + 14, 'O(h, k)', { size: 12, weight: 'bold' });
        s += dot(cx - dx, ySec, 3.8, 'green') + dot(cx + dx, ySec, 3.8, 'green') + dot(cx, ySec, 3.5, 'amber');
        s += text(cx + 6, (cy + ySec) / 2 + 4, 'd', { tone: 'amber', size: 12.5, weight: 'bold' });
        s += text(cx - dx / 2 - 8, (cy + ySec) / 2 + 12, 'r', { tone: 'red', size: 12.5, weight: 'bold' });
        s += text(cx - dx - 6, ySec - 8, 'A', { tone: 'green', size: 12, weight: 'bold' });
        s += text(cx + dx + 4, ySec - 8, 'B', { tone: 'green', size: 12, weight: 'bold' });
        // 相切線 L2 (y = cy + r)
        s += line(40, cy + r, 320, cy + r, { tone: 'red', w: 2 });
        s += dot(cx, cy + r, 4, 'red');
        s += text(326, cy + r + 4, 'L₂ 相切 (d = r)', { tone: 'red', size: 12, weight: 'bold' });
        // 相離線 L3
        s += line(40, cy + r + 24, 320, cy + r + 24, { tone: 'muted', w: 1.6, dash: 'dash' });
        s += text(326, cy + r + 28, 'L₃ 相離 (d > r)', { tone: 'muted', size: 12, weight: 'bold' });
        s += box(370, 20, 175, 68, ['弦長公式 (畢氏定理)', '半弦長 AM = √(r² - d²)', '弦長 AB = 2√(r² - d²)'], { tone: 'green', size: 11.5 });
        s += box(370, 102, 175, 68, ['圓外一點 P 切線段長', 'L_t = √(OP² - r²)', '將 P 代入圓一般式開根號'], { tone: 'red', size: 11.5 });
        return svg(560, 230, s);
      })(),
      takeaways: [
        '處理圓與直線問題，**永遠用圓心到直線距離 $d = \\frac{|ah+bk+c|}{\\sqrt{a^2+b^2}}$ 與半徑 $r$ 比較**，絕對比代入消去法快！',
        '弦心距 $d$、半弦長 $\\frac{\\overline{AB}}{2}$ 與半徑 $r$ 構成直角三角形：$\\overline{AB} = 2\\sqrt{r^2 - d^2}$。',
      ],
    },
    {
      concept: '圓與直線的關係：相交、相切、相離、弦長與切線',
      kind: 'chart',
      title: '半徑 r = 5 之圓在不同圓心距 d 下的相割弦長變化圖',
      caption: '當圓心到直線距離 d 由 0（過圓心直徑）增加至 5（相切）時，弦長 L = 2√(25 - d²) 由最大值 10 遞減至 0。',
      svg: lineChart({
        w: 520,
        h: 250,
        x: { min: 0, max: 5, ticks: [0, 1, 2, 3, 4, 5], label: '圓心到直線距離 d' },
        y: { min: 0, max: 11, ticks: [0, 2, 4, 6, 8, 10], label: '弦長 AB = 2√(25 - d²)' },
        series: [
          { name: '弦長 AB (r = 5)', tone: 'blue', points: [[0, 10], [1, 9.8], [2, 9.17], [3, 8], [4, 6], [5, 0]], markers: true, smooth: true },
        ],
      }),
      table: {
        headers: ['圓心距 d', '半徑 r', '半弦長 √(r² - d²)', '總弦長 AB 與位置關係'],
        rows: [
          ['d = 0 (過圓心)', '5', '√25 = 5', 'AB = 10 (最大弦長 = 直徑)'],
          ['d = 3 (相割)', '5', '√(25 - 9) = 4', 'AB = 8 (3-4-5 畢氏數)'],
          ['d = 4 (相割)', '5', '√(25 - 16) = 3', 'AB = 6 (3-4-5 畢氏數)'],
          ['d = 5 (相切)', '5', '√(25 - 25) = 0', 'AB = 0 (恰交於一切點)'],
        ],
      },
      takeaways: [
        '直線 $ax + by + c = 0$ 的斜率為 $m = -\\frac{a}{b}$；平行設法為 $ax + by + k = 0$，垂直設法為 $bx - ay + k = 0$。',
        '兩直線垂直且斜率皆存在時，斜率相乘 $m_1 \\cdot m_2 = -1$。',
      ],
    },
    {
      concept: '圓方程式：標準式、一般式與求圓的條件',
      kind: 'table',
      title: '直線四種方程式、距離公式與圓方程式標準表',
      caption: '整合直線方程式四種形式、點線距與平行線距，以及圓的標準式與一般式判別條件。',
      table: {
        headers: ['公式名稱', '標準數學方程式', '給定條件與參數意義', '統測解題速算法'],
        rows: [
          ['點斜式／斜截式', 'y - y₀ = m(x - x₀) ／ y = mx + b', '過點 (x₀, y₀)、斜率 m = tan θ', '已知一點一斜率必用點斜式'],
          ['截距式', 'x/a + y/b = 1 (a, b ≠ 0)', 'x 截距 (a, 0)、y 截距 (0, b)', '與兩軸圍成直角三角形面積 = ½|ab|'],
          ['點線距／平行線距', 'd = |ax₀+by₀+c| / √(a²+b²)', '兩平行線距離 d = |c₁-c₂| / √(a²+b²)', '求平行線距離前，x, y 係數必須先化為相同'],
          ['圓標準式／一般式', '(x-h)²+(y-k)²=r² ／ x²+y²+dx+ey+f=0', '圓心 (-d/2, -e/2)，Δ = d²+e²-4f > 0', '半徑 r = ½ √(d² + e² - 4f)'],
        ],
      },
      takeaways: [
        '過圓 $(x-h)^2+(y-k)^2=r^2$ 上一點 $P(x_0, y_0)$ 的切線公式（破半代點）：$(x_0-h)(x-h)+(y_0-k)(y-k)=r^2$。',
        '圓外一點 $P(x_0, y_0)$ 到圓的切線段長 $L = \\sqrt{x_0^2 + y_0^2 + dx_0 + ey_0 + f}$，直接將點坐標代入圓一般式開根號。',
      ],
    },
  ],

  'sequences-series': [
    {
      concept: '等差數列：公差、一般項',
      kind: 'diagram',
      title: '等差級數倒置梯形面積法與等比級數錯位相減圖解',
      caption: '左圖將等差級數 S_n 正擺與倒擺拼成 n 列 × (a₁ + a_n) 寬的矩形；右圖展示等差中項與等比中項的幾何關係。',
      svg: (() => {
        let s = '';
        // 左：等差梯形拼成長方形
        const x0 = 36, y0 = 188, u = 22, h = 24;
        for (let i = 0; i < 5; i++) {
          const w1 = (i + 2) * u;
          const w2 = (6 - i) * u;
          const y = y0 - (i + 1) * h;
          s += rect(x0, y, w1, h - 2, { tone: 'blue', fill: 'blue', soft: true });
          s += rect(x0 + w1 + 2, y, w2, h - 2, { tone: 'amber', fill: 'amber', soft: true });
        }
        s += dim(x0, y0 + 14, x0 + 8 * u + 2, y0 + 14, '每列總寬恆為 a₁ + a_n', { tone: 'ink' });
        s += text(x0 + 4 * u, 36, '2 S_n = n(a₁ + a_n) ⇒ S_n = n(a₁ + a_n)/2', { anchor: 'middle', weight: 'bold', size: 12.5, tone: 'blue' });
        s += text(x0 + 2 * u, 130, '正放 S_n', { anchor: 'middle', size: 12, weight: 'bold', tone: 'blue' });
        s += text(x0 + 6 * u, 130, '倒放 S_n', { anchor: 'middle', size: 12, weight: 'bold', tone: 'amber' });
        // 右：等差與等比核心公式卡片
        s += box(265, 30, 270, 82, ['等差數列 (Arithmetic, 公差 d)', '一般項：a_n = a₁ + (n - 1)d = a_m + (n - m)d', '等差中項：b = (a + c) / 2'], { tone: 'blue', size: 12 });
        s += box(265, 126, 270, 82, ['等比數列 (Geometric, 公比 r)', '一般項：a_n = a₁ · r^(n-1) = a_m · r^(n-m)', '等比中項：G² = a · c ⇒ G = ±√(ac)'], { tone: 'green', size: 12 });
        return svg(560, 230, s);
      })(),
      takeaways: [
        '已知兩項求公差：$d = \\frac{a_n - a_m}{n - m}$（斜率觀念）；等差級數 $S_n = \\frac{n(a_1 + a_n)}{2} = n \\cdot a_{\\text{中}}$。',
        '$a, G, b$ 成等比時，$G = \\pm\\sqrt{ab}$ 有**正負兩解**（除非題目限定各項同號）。',
      ],
    },
    {
      concept: '等比數列：公比、一般項與等比中項',
      kind: 'chart',
      title: '等差線性成長 vs. 等比指數成長數列一般項比較圖',
      caption: '同以首項 a₁ = 2 出發，比較公差 d = 3 的等差數列與公比 r = 2 的等比數列在前 6 項的成長差異。',
      svg: barChart({
        w: 520,
        h: 250,
        categories: ['n=1', 'n=2', 'n=3', 'n=4', 'n=5', 'n=6'],
        y: { min: 0, max: 70, ticks: [0, 16, 32, 48, 64], label: '一般項 a_n 數值' },
        values: true,
        series: [
          { name: '等差 a_n = 2 + 3(n-1)', tone: 'blue', values: [2, 5, 8, 11, 14, 17] },
          { name: '等比 a_n = 2 · 2^(n-1)', tone: 'red', values: [2, 4, 8, 16, 32, 64] },
        ],
      }),
      table: {
        headers: ['項數 n', '等差一般項 a_n (d=3)', '等差前 n 項和 S_n', '等比一般項 a_n (r=2)', '等比前 n 項和 S_n'],
        rows: [
          ['n = 1', '2', '2', '2', '2'],
          ['n = 2', '5', '7', '4', '6'],
          ['n = 3', '8', '15', '8', '14'],
          ['n = 4', '11', '26', '16', '30'],
          ['n = 6', '17', '57', '64', '126'],
        ],
      },
      takeaways: [
        '由前 $n$ 項和 $S_n$ 還原第 $n$ 項：當 $n \\ge 2$ 時 $a_n = S_n - S_{n-1}$，且首項 $a_1 = S_1$ 必須單獨檢驗！',
        '等比級數求和公式（$r \\neq 1$）：$S_n = \\frac{a_1(1 - r^n)}{1 - r} = \\frac{a_1(r^n - 1)}{r - 1}$。',
      ],
    },
    {
      concept: '等比數列：公比、一般項',
      kind: 'table',
      title: '等差與等比數列、級數及 Σ 連加公式全攻略對照表',
      caption: '將等差與等比之定義、一般項、中項、級數和與三大 Σ 連加公式並列比對。',
      table: {
        headers: ['項目名稱', '等差數列與級數 (d)', '等比數列與級數 (r ≠ 0, 1)', 'Σ 連加公式 (k = 1 到 n)'],
        rows: [
          ['相鄰項與一般項', 'a_n - a_{n-1} = d，a_n = a₁ + (n-1)d', 'a_n / a_{n-1} = r，a_n = a₁ · r^(n-1)', 'Σ c = cn（常數連加 n 次）'],
          ['中項性質', 'a + c = 2b（算術平均數）', 'a · c = b² ⇒ b = ±√(ac)（幾何平均）', 'Σ k = n(n + 1) / 2'],
          ['前 n 項級數和 S_n', 'S_n = n[2a₁ + (n-1)d] / 2', 'S_n = a₁(r^n - 1) / (r - 1)', 'Σ k² = n(n + 1)(2n + 1) / 6'],
          ['分段級數性質', 'S_n, S_{2n}-S_n, S_{3n}-S_{2n} 仍成等差', 'S_n, S_{2n}-S_n, S_{3n}-S_{2n} 仍成等比', 'Σ k³ = [n(n + 1) / 2]² = (Σ k)²'],
        ],
      },
      takeaways: [
        '自然數平方和必背：$\\sum_{k=1}^{n} k^2 = \\frac{n(n+1)(2n+1)}{6}$（如 $n=10$ 時為 $385$）。',
        '複利本利和為等比數列應用：$A_n = P(1 + r)^n$；定期定額年金終值則為等比級數求和。',
      ],
    },
  ],

  'permutations-combinations': [
    {
      concept: '計數的基本原理：樹狀圖',
      kind: 'diagram',
      title: '排列組合破題決策樹：分類加法、分步乘法、先選後排',
      caption: '依「完成或未完成」區分加法與乘法原理，再依「順序是否影響結果」決定使用排列 P(n,r) 或組合 C(n,r)。',
      svg: (() => {
        let s = '';
        s += box(20, 82, 118, 64, ['計數問題', '判斷事件結構'], { tone: 'ink', size: 12 });
        s += arrow(138, 100, 182, 56, { tone: 'blue', w: 1.8 });
        s += arrow(138, 128, 182, 172, { tone: 'green', w: 1.8 });
        s += box(184, 24, 152, 62, ['分類完成 (或)', '加法原理 m + n', '各類互斥不重疊'], { tone: 'blue', size: 11.5 });
        s += box(184, 142, 152, 62, ['分步完成 (且)', '乘法原理 m × n', '步驟連續缺一不可'], { tone: 'green', size: 11.5 });
        s += arrow(336, 160, 382, 76, { tone: 'red', w: 1.8 });
        s += arrow(336, 184, 382, 172, { tone: 'amber', w: 1.8 });
        s += box(384, 24, 156, 86, ['順序有差 ⇒ 排列', '相異物：P(n,r) = n!/(n-r)!', '可重複：n^r', '不盡相異：n!/(p!q!)'], { tone: 'red', size: 11 });
        s += box(384, 128, 156, 86, ['順序無差 ⇒ 組合', '只選不排：C(n,r)', 'C(n,r) = P(n,r) / r!', '分組分堆與幾何圖形'], { tone: 'amber', size: 11 });
        return svg(560, 230, s);
      })(),
      takeaways: [
        '**加法原理看「分類」**（每一類都能獨立完成任務）；**乘法原理看「分步」**（各步驟全做完才算完成）。',
        '排列與組合的橋樑：$P^n_r = C^n_r \\times r!$，亦即「先從 $n$ 個選出 $r$ 個（$C^n_r$），再將這 $r$ 個排順序（$r!$）」。',
      ],
    },
    {
      concept: '組合 C(n, r)：只選不排與基本性質',
      kind: 'chart',
      title: '從 n = 6 個相異物取出 r 個之排列數 P(6,r) 與組合數 C(6,r) 比較圖',
      caption: '比較 n = 6 時不同取數 r 的 P(6,r) 與 C(6,r)：組合數呈現左右對稱 C(6,r) = C(6,6-r)，而排列數隨 r 呈階乘倍數暴增。',
      svg: barChart({
        w: 520,
        h: 250,
        categories: ['r=1', 'r=2', 'r=3', 'r=4', 'r=5'],
        y: { min: 0, max: 750, ticks: [0, 150, 300, 450, 600, 750], label: '方法數' },
        values: true,
        series: [
          { name: '排列 P(6, r)', tone: 'red', values: [6, 30, 120, 360, 720] },
          { name: '組合 C(6, r)', tone: 'blue', values: [6, 15, 20, 15, 6] },
        ],
      }),
      table: {
        headers: ['取出個數 r', '組合數 C(6, r)（只選不排）', '順序階乘 r!', '排列數 P(6, r) = C(6, r) × r!'],
        rows: [
          ['r = 1', 'C(6, 1) = 6', '1! = 1', 'P(6, 1) = 6'],
          ['r = 2', 'C(6, 2) = 15', '2! = 2', 'P(6, 2) = 30'],
          ['r = 3', 'C(6, 3) = 20 (峰值)', '3! = 6', 'P(6, 3) = 120'],
          ['r = 4', 'C(6, 4) = C(6, 2) = 15', '4! = 24', 'P(6, 4) = 360'],
          ['r = 5', 'C(6, 5) = C(6, 1) = 6', '5! = 120', 'P(6, 5) = 720'],
        ],
      },
      takeaways: [
        '組合餘數性質：$C^n_r = C^n_{n-r}$；當 $C^n_x = C^n_y$ 時，必為 $x = y$ 或 $x + y = n$。',
        '巴斯卡定理：$C^n_r + C^n_{r-1} = C^{n+1}_r$（上標加 1，下標取大）。',
      ],
    },
    {
      concept: '重複排列與含相同物的排列',
      kind: 'table',
      title: '排列組合六大經典題型與破題口訣速查表',
      caption: '針對統測必考的相鄰、不相鄰、重複排列、相同物排列（捷徑問題）與二項式定理整理標準算式。',
      table: {
        headers: ['經典題型', '破題口訣與核心觀念', '標準數學公式', '統測代表實例'],
        rows: [
          ['甲乙必相鄰', '打包捆綁法：視為 1 大體先排，內部再自排', '(n - k + 1)! × k!', '5 人排成一列，甲乙相鄰：4! × 2! = 48'],
          ['甲乙不相鄰', '插空隙法：無限制者先排，再選空隙插入', 'm! × P(m + 1, k)', '3 男 2 女女不相鄰：3! × P(4, 2) = 72'],
          ['重複排列', '可重複選取，口訣：「被爭取者為底數」', 'n^r（每步皆有 n 種選擇）', '4 封不同信投入 3 個郵筒：3⁴ = 81'],
          ['不盡相異物排列', '全排除以相同物階乘（消除重複順序）', 'n! / (p! q! r!)', '走棋盤格 4 右 3 上捷徑：7! / (4!3!) = 35'],
        ],
      },
      takeaways: [
        '重複排列口訣：**「不可重複者（信、人、球）當指數，可重複接收者（郵筒、船、箱）當底數」**。',
        '二項式定理 $(x+y)^n$ 展開式一般項為 $T_{r+1} = C^n_r x^{n-r} y^r$，各項二項式係數總和為 $C^n_0 + C^n_1 + \\dots + C^n_n = 2^n$。',
      ],
    },
  ],

  'trig-applications': [
    {
      concept: '三角測量：仰角、俯角與不可到達的距離',
      kind: 'diagram',
      title: '正弦餘弦疊合振幅 R = √(a² + b²) 與三角測量仰角俯角圖解',
      caption: '左圖將 a sin θ + b cos θ 轉為直角三角形斜邊振幅 R = √(a² + b²)；右圖展示建築高程三角測量之仰角 α 與俯角 β。',
      svg: (() => {
        let s = '';
        // 左：疊合直角三角形
        const ox = 45, oy = 185, ax = 185, ay = 80;
        s += polygon([[ox, oy], [ax, oy], [ax, ay]], { tone: 'blue', fill: 'blue', soft: true, w: 2 });
        s += rightAngle(ax, oy, 90, 180, 10);
        s += angle(ox, oy, 34, 0, 37, 'φ', { tone: 'amber', labelR: 46 });
        s += text((ox + ax) / 2, oy + 20, 'a (sin 係數)', { anchor: 'middle', tone: 'blue', weight: 'bold', size: 12 });
        s += text(ax + 8, (oy + ay) / 2, 'b (cos 係數)', { tone: 'blue', weight: 'bold', size: 12 });
        s += text((ox + ax) / 2 - 14, (oy + ay) / 2 - 10, 'R = √(a²+b²)', { anchor: 'middle', tone: 'red', weight: 'bold', size: 12.5 });
        s += text(135, 32, '疊合：y = R sin(θ + φ)，極值 ±R', { anchor: 'middle', weight: 'bold', size: 13 });
        // 右：三角測量仰角俯角
        const bx = 320, by = 185, tx = 490, ty = 55, eyeY = 125;
        s += line(295, by, 530, by, { tone: 'muted', w: 1.8 });
        s += rect(tx - 16, ty, 32, by - ty, { tone: 'ink', fill: 'muted', soft: true, w: 1.8 });
        s += line(bx, by, bx, eyeY, { tone: 'blue', w: 2.5 });
        s += dot(bx, eyeY, 4, 'blue');
        s += line(bx, eyeY, tx - 16, eyeY, { tone: 'muted', w: 1.4, dash: 'dash' });
        s += arrow(bx, eyeY, tx - 16, ty, { tone: 'red', w: 2 });
        s += arrow(bx, eyeY, tx - 16, by, { tone: 'green', w: 1.8 });
        s += angle(bx, eyeY, 38, 0, 25, '仰角 α', { tone: 'red', labelR: 60 });
        s += angle(bx, eyeY, 38, -21, 0, '俯角 β', { tone: 'green', labelR: 60 });
        s += text(tx + 22, (ty + by) / 2, '塔高 H', { tone: 'ink', weight: 'bold', size: 12.5 });
        s += text(420, 32, '水平視線向上為仰角、向下為俯角', { anchor: 'middle', weight: 'bold', size: 13 });
        return svg(560, 230, s);
      })(),
      takeaways: [
        '正餘弦疊合 $y = a\\sin\\theta + b\\cos\\theta = \\sqrt{a^2+b^2}\\sin(\\theta + \\phi)$，無範圍限制時最大值為 $+\\sqrt{a^2+b^2}$、最小值為 $-\\sqrt{a^2+b^2}$。',
        '仰角與俯角皆是**視線與水平線**的夾角（絕非與鉛垂線的夾角），且由頂部看底部的俯角等於由底部看頂部的仰角（內錯角相等）。',
      ],
    },
    {
      concept: '和角、差角與二倍角公式',
      kind: 'chart',
      title: '疊合波 y = 3 sin θ + 4 cos θ 與單一分量波形比較圖',
      caption: '將振幅 3 的正弦波與振幅 4 的餘弦波疊加，合成振幅放大為 R = √(3² + 4²) = 5 的單一正弦波。',
      svg: lineChart({
        w: 520,
        h: 250,
        x: { min: 0, max: 360, ticks: [0, 90, 180, 270, 360], label: '角度 θ (°)', fmt: (v) => `${v}°` },
        y: { min: -6, max: 6, ticks: [-5, -3, 0, 3, 5], label: '函數值 y' },
        series: [
          { name: '合成波 3sin θ + 4cos θ (極值 ±5)', tone: 'red', points: [[0, 4], [37, 5], [90, 3], [180, -4], [217, -5], [270, -3], [360, 4]], markers: true, smooth: true },
          { name: '3 sin θ', tone: 'blue', dash: 'dash', points: [[0, 0], [90, 3], [180, 0], [270, -3], [360, 0]], smooth: true },
          { name: '4 cos θ', tone: 'green', dash: 'dot', points: [[0, 4], [90, 0], [180, -4], [270, 0], [360, 4]], smooth: true },
        ],
      }),
      table: {
        headers: ['角度 θ', '3 sin θ', '4 cos θ', '疊合值 y = 3 sin θ + 4 cos θ'],
        rows: [
          ['0°', '0', '4', '4 (y 軸截距)'],
          ['≈ 37° (cos θ = 4/5)', '3 × (3/5) = 1.8', '4 × (4/5) = 3.2', '+5 (最大值 √(3²+4²))'],
          ['90°', '3', '0', '3'],
          ['180°', '0', '-4', '-4'],
          ['≈ 217°', '-1.8', '-3.2', '-5 (最小值 -√(3²+4²))'],
        ],
      },
      takeaways: [
        '常見畢氏數疊合振幅：$(1, \\sqrt{3}) \\to R=2$、$(1, 1) \\to R=\\sqrt{2}$、$(3, 4) \\to R=5$、$(5, 12) \\to R=13$。',
        '二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$；$\\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta = 2\\cos^2\\theta - 1 = 1 - 2\\sin^2\\theta$。',
      ],
    },
    {
      concept: '複數平面、複數的絕對值',
      kind: 'table',
      title: '和差角公式、複數極式與隸美弗定理總整理表',
      caption: '彙整和差角公式口訣、複數極式轉換 z = r(cos θ + i sin θ) 及極式乘除與次方運算規則。',
      table: {
        headers: ['公式類別', '數學恆等式', '結構特徵與記憶口訣', '統測高頻考點'],
        rows: [
          ['正弦和差角', 'sin(α ± β) = sin α cos β ± cos α sin β', '口訣：「辛可可辛，正負同號」', 'sin 75° = sin(45°+30°) = (√6 + √2)/4'],
          ['餘弦和差角', 'cos(α ± β) = cos α cos β ∓ sin α sin β', '口訣：「可可辛辛，正負異號」', 'cos 15° = cos(45°-30°) = (√6 + √2)/4'],
          ['正切和差角', 'tan(α ± β) = (tan α ± tan β) / (1 ∓ tan α tan β)', '分子同號、分母異號', '兩直線夾角 tan θ = |(m₁ - m₂)/(1 + m₁m₂)|'],
          ['複數極式與隸美弗', 'z = r(cos θ + i sin θ)，z^n = r^n(cos nθ + i sin nθ)', '模長 r = √(a²+b²)，主幅角 θ', '極式相乘：模長相乘、幅角相加'],
        ],
      },
      takeaways: [
        '當 $\\alpha + \\beta = 45^\\circ$ 時，必有 $(1 + \\tan\\alpha)(1 + \\tan\\beta) = 2$（如 $(1+\\tan 20^\\circ)(1+\\tan 25^\\circ) = 2$）。',
        '複數極式運算口訣：**「乘除變加減（角度），次方變倍數（隸美弗定理 $z^n$）」**。',
      ],
    },
  ],

  'exponents-logarithms': [
    {
      concept: '對數函數的圖形與指數、對數方程式',
      kind: 'diagram',
      title: '指數函數 y = aˣ 與對數函數 y = logₐ x 關於直線 y = x 對稱圖解',
      caption: '展示底數 a > 1 時，指數函數 y = 2ˣ（恆過 (0,1)、漸近線 x 軸）與對數函數 y = log₂ x（恆過 (1,0)、漸近線 y 軸）互為反函數之鏡射關係。',
      svg: (() => {
        const f = frame([-2.5, 4.5], [-2.5, 4.5], { left: 48, top: 18, width: 250, height: 190 });
        let s = axes(f, { xTicks: [-2, 1, 2, 4], yTicks: [-2, 1, 2, 4], xLabel: 'x', yLabel: 'y' });
        s += curve(f, (x) => x, { tone: 'muted', w: 1.4, dash: 'dash' });
        s += curve(f, (x) => Math.pow(2, x), { tone: 'blue', w: 2.3, to: 2.2 });
        s += curve(f, (x) => Math.log2(x), { tone: 'red', w: 2.3, from: 0.18, to: 4.4 });
        s += point(f, 0, 1, '(0, 1)', { tone: 'blue', dx: -36, dy: -6 });
        s += point(f, 1, 0, '(1, 0)', { tone: 'red', dx: 6, dy: 14 });
        s += point(f, 2, 4, '(2, 4)', { tone: 'blue', dx: 6, dy: -4 });
        s += point(f, 4, 2, '(4, 2)', { tone: 'red', dx: -10, dy: -8 });
        s += text(f.X(3.5), f.Y(3.7), 'y = x', { tone: 'muted', size: 11.5, weight: 'bold' });
        s += box(325, 22, 215, 86, ['指數函數 y = a^x (a > 0, a ≠ 1)', '定義域：全體實數 R，值域：y > 0', '必過定點 (0, 1)，漸近線為 x 軸'], { tone: 'blue', size: 11.5 });
        s += box(325, 122, 215, 86, ['對數函數 y = log_a x (真數 x > 0)', '定義域：x > 0，值域：全體實數 R', '必過定點 (1, 0)，與 y = a^x 對稱於 y=x'], { tone: 'red', size: 11.5 });
        return svg(560, 230, s);
      })(),
      takeaways: [
        '對數有意義的三大限制：**底數 $a > 0$ 且 $a \\neq 1$，真數 $x > 0$**（解對數方程式與不等式最後一步必驗算真數 $> 0$）。',
        '當底數 $0 < a < 1$ 時，指數與對數函數皆為**嚴格遞減**，解不等式去底數時**不等號方向必須反轉**！',
      ],
    },
    {
      concept: '指數函數 y = aˣ 的圖形',
      kind: 'chart',
      title: '底數 a > 1 遞增成長 (y = 2ˣ) vs. 0 < a < 1 遞減衰減 (y = (1/2)ˣ) 比較圖',
      caption: '比較 y = 2ˣ 與 y = (1/2)ˣ = 2⁻ˣ 的函數值：兩圖形關於 y 軸左右對稱，且皆恆在 x 軸上方 (y > 0)、同過定點 (0, 1)。',
      svg: lineChart({
        w: 520,
        h: 250,
        x: { min: -3, max: 3, ticks: [-3, -2, -1, 0, 1, 2, 3], label: '指數 x' },
        y: { min: 0, max: 9, ticks: [0, 2, 4, 6, 8], label: '函數值 y' },
        series: [
          { name: 'y = 2^x (a > 1 遞增成長)', tone: 'blue', points: [[-3, 0.125], [-2, 0.25], [-1, 0.5], [0, 1], [1, 2], [2, 4], [3, 8]], markers: true, smooth: true },
          { name: 'y = (1/2)^x (0 < a < 1 遞減衰減)', tone: 'amber', dash: 'dash', points: [[-3, 8], [-2, 4], [-1, 2], [0, 1], [1, 0.5], [2, 0.25], [3, 0.125]], markers: true, smooth: true },
        ],
      }),
      table: {
        headers: ['自變數 x', 'y = 2ˣ (a = 2 > 1)', 'y = (1/2)ˣ (a = 0.5 < 1)', '對數反運算 log₂ y'],
        rows: [
          ['x = -2', '2⁻² = 1/4 = 0.25', '(1/2)⁻² = 4', 'log₂(1/4) = -2'],
          ['x = -1', '2⁻¹ = 1/2 = 0.50', '(1/2)⁻¹ = 2', 'log₂(1/2) = -1'],
          ['x = 0', '2⁰ = 1 (共同定點)', '(1/2)⁰ = 1 (共同定點)', 'log₂(1) = 0'],
          ['x = 1', '2¹ = 2', '(1/2)¹ = 0.50', 'log₂(2) = 1'],
          ['x = 3', '2³ = 8', '(1/2)³ = 0.125', 'log₂(8) = 3'],
        ],
      },
      takeaways: [
        '有理數指數換算：$a^{-n} = \\frac{1}{a^n}$，$a^{\\frac{m}{n}} = \\sqrt[n]{a^m}$；指數相乘底數同則指數相加 $a^m \\cdot a^n = a^{m+n}$。',
        '半衰期模型：$N(t) = N_0 \\left(\\frac{1}{2}\\right)^{\\frac{t}{T}}$，每經過一個半衰期 $T$，數量減半。',
      ],
    },
    {
      concept: '對數的定義與運算性質',
      kind: 'table',
      title: '對數運算性質、換底公式與常用對數必背數值表',
      caption: '彙整對數加減拆合、次方提出、換底連鎖律，以及估計位數必背的 log 2 與 log 3 近似值。',
      table: {
        headers: ['運算規則名稱', '數學恆等式 (a>0, a≠1, M,N>0)', '口訣與易錯提醒', '統測實戰範例'],
        rows: [
          ['真數相乘／相除', 'log_a(MN) = log_a M + log_a N；log_a(M/N) = log_a M - log_a N', '真數相乘 ⇔ 對數相加（切勿寫成對數相乘）', 'log₁₀ 2 + log₁₀ 5 = log₁₀ 10 = 1'],
          ['次方提出公式', 'log_(a^m)(b^n) = (n/m) log_a b', '底數次方放分母 m，真數次方放分子 n', 'log₈ 9 = log_(2³)(3²) = (2/3) log₂ 3'],
          ['換底與連鎖律', 'log_a b = log_c b / log_c a；log_a b · log_b c = log_a c', '底數不同時一律換成常用對數 log₁₀', 'log₂ 3 · log₃ 4 = log₂ 4 = 2'],
          ['常用對數與位數', 'log 2 ≈ 0.3010，log 3 ≈ 0.4771，log 7 ≈ 0.8451', 'log N = n + α (0≤α<1) ⇒ 整數部分 n+1 位數', 'log 5 = log(10/2) = 1 - log 2 ≈ 0.6990'],
        ],
      },
      takeaways: [
        '**黄金恆等式**：$\\log_{10} 2 + \\log_{10} 5 = 1 \\implies \\log_{10} 5 = 1 - \\log_{10} 2 \\approx 0.6990$（統測不給 $\\log 5$，要自己用 $1 - \\log 2$ 算）。',
        '科學記號 $N = a \\times 10^n$ ($1 \\le a < 10$)：若 $n \\ge 0$ 則 $N$ 為 **$n+1$ 位數**；最高位數字由尾數 $\\log a$ 夾擠求得。',
      ],
    },
  ],

  'space-vectors': [
    {
      concept: '空間概念：直線、平面的位置關係',
      kind: 'diagram',
      title: '空間三垂線定理與平面法向量立體幾何示意圖',
      caption: '若 PA ⊥ 平面 E 於 A，且 AB ⊥ 直線 L 於 B，則斜線 PB 必垂直於直線 L（構成三個直角三角形 PAB、PBC、ABC）。',
      svg: (() => {
        const P3 = oblique(180, 155, 1, 0.55, 215);
        let s = '';
        // 平面 E 平行四邊形
        const e1 = P3(-90, -110, 0), e2 = P3(-90, 140, 0), e3 = P3(110, 140, 0), e4 = P3(110, -110, 0);
        s += polygon([e1, e2, e3, e4], { tone: 'muted', fill: 'blue', soft: true, w: 1.5 });
        s += text(e4[0] + 18, e4[1] - 8, '平面 E', { tone: 'blue', weight: 'bold', size: 12.5 });
        const P: Pt = [150, 32];
        const A: Pt = [150, 145];
        const B: Pt = [245, 165];
        const C: Pt = [295, 118];
        // 直線 L 通過 B, C
        s += line(215, 193, 325, 90, { tone: 'ink', w: 2.2 });
        s += text(332, 92, '直線 L', { weight: 'bold', size: 12.5 });
        // PA, AB, PB, PC, AC
        s += line(P[0], P[1], A[0], A[1], { tone: 'red', w: 2.4 });
        s += line(A[0], A[1], B[0], B[1], { tone: 'blue', w: 2.2 });
        s += line(P[0], P[1], B[0], B[1], { tone: 'green', w: 2.4 });
        s += line(A[0], A[1], C[0], C[1], { tone: 'muted', w: 1.4, dash: 'dash' });
        s += line(P[0], P[1], C[0], C[1], { tone: 'amber', w: 1.8, dash: 'dash' });
        s += dot(P[0], P[1], 4, 'red') + dot(A[0], A[1], 4, 'blue') + dot(B[0], B[1], 4, 'green') + dot(C[0], C[1], 3.5, 'amber');
        s += text(P[0] - 10, P[1] - 6, 'P (空間點)', { tone: 'red', weight: 'bold', size: 12, anchor: 'end' });
        s += text(A[0] - 10, A[1] + 14, 'A (垂足 1)', { tone: 'blue', weight: 'bold', size: 12, anchor: 'end' });
        s += text(B[0] + 10, B[1] + 12, 'B (垂足 2)', { tone: 'green', weight: 'bold', size: 12 });
        s += text(C[0] + 10, C[1] + 4, 'C', { tone: 'amber', weight: 'bold', size: 12 });
        s += box(358, 22, 186, 185, [
          '三垂線定理三個直角 △：',
          '1. PA ⊥ 平面 E ⇒ PA ⊥ AB',
          '   PB² = PA² + AB²',
          '2. AB ⊥ L 於 B ⇒ PB ⊥ L',
          '   PC² = PB² + BC²',
          '3. 地面直角：AC² = AB² + BC²',
        ], { tone: 'green', size: 11.5 });
        return svg(560, 230, s);
      })(),
      takeaways: [
        '三垂線定理核心結論：**三個直角三角形 $\\triangle PAB$、$\\triangle PBC$、$\\triangle ABC$**，連用三次畢氏定理即可解出空間點到直線距離：$\\overline{PC}^2 = \\overline{PA}^2 + \\overline{AB}^2 + \\overline{BC}^2$。',
        '平面方程式 $ax + by + cz + d = 0$ 的係數 $(a, b, c)$ 直接就是該平面的**法向量 $\\vec{n}$**。',
      ],
    },
    {
      concept: '空間坐標系、兩點距離與中點',
      kind: 'chart',
      title: '長方體空間對角線與各座標平面投影長度比較圖 (長 3、寬 4、高 12)',
      caption: '展示頂點 P(3, 4, 12) 到原點距離 OP = √(3²+4²+12²) = 13，以及投影到 xy 平面長 5 與到 z 軸距離 5 之幾何關係。',
      svg: barChart({
        w: 520,
        h: 250,
        categories: ['x 軸距離', 'y 軸距離', 'z 軸距離', 'xy 平面投影', '空間對角線 OP'],
        y: { min: 0, max: 15, ticks: [0, 3, 6, 9, 12, 15], label: '幾何距離長度' },
        values: true,
        series: [
          { name: 'P(3, 4, 12) 各項幾何距離', tone: 'blue', values: [12.65, 12.37, 5, 5, 13] },
        ],
      }),
      table: {
        headers: ['距離或投影項目', '空間坐標計算公式', '代入 P(3, 4, 12) 算式', '計算結果'],
        rows: [
          ['到 xy 平面距離', '|z|（看缺項坐標絕對值）', '|12|', '12'],
          ['到 z 軸垂直距離', '√(x² + y²)（看另外兩軸平方和）', '√(3² + 4²)', '5'],
          ['在 xy 平面投影點距離', '投影點 (x, y, 0) 到原點距離', '√(3² + 4² + 0²)', '5'],
          ['到原點空間距離 OP', '√(x² + y² + z²)', '√(3² + 4² + 12²) = √169', '13'],
        ],
      },
      takeaways: [
        '空間點 $P(a, b, c)$ **到 $xy$ 平面的距離為 $|c|$**（缺誰看誰）；**到 $z$ 軸的距離為 $\\sqrt{a^2 + b^2}$**（缺誰算另外兩個的畢氏定理）。',
        '常見空間畢氏數組：$(3, 4, 12) \\to 13$、$(1, 2, 2) \\to 3$、$(2, 3, 6) \\to 7$。',
      ],
    },
    {
      concept: '空間中的平面：法向量、平面方程式與鏡射最短路徑',
      kind: 'table',
      title: '空間坐標投影、空間向量內積與平面方程式總整理表',
      caption: '彙整空間點對座標軸／座標平面之投影與對稱點、空間內積夾角，以及平面方程式與點面距公式。',
      table: {
        headers: ['空間幾何項目', '公式與坐標表示 (設 P(a, b, c))', '幾何意義與條件', '統測常考重點'],
        rows: [
          ['投影點與對稱點', '投影 xy 平面：(a,b,0)；對稱 xy 平面：(a,b,-c)', '投影誰留誰（其餘補 0）；對稱誰留誰（其餘變號）', '投影 x 軸為 (a,0,0)；對稱 x 軸為 (a,-b,-c)'],
          ['空間向量內積', 'a·b = x₁x₂ + y₁y₂ + z₁z₂ = |a||b|cos θ', 'a ⊥ b ⇔ x₁x₂ + y₁y₂ + z₁z₂ = 0', '方向餘弦平方和 cos²α + cos²β + cos²γ = 1'],
          ['平面點法式', 'a(x - x₀) + b(y - y₀) + c(z - z₀) = 0', '法向量 n = (a, b, c)，過點 P₀(x₀, y₀, z₀)', '平面截距式 x/p + y/q + z/r = 1'],
          ['點到平面距離', 'd(P₀, E) = |ax₀ + by₀ + cz₀ + d| / √(a²+b²+c²)', '平面二維點線距公式自然延伸至三維', '兩平行平面距離 d = |d₁ - d₂| / √(a²+b²+c²)'],
        ],
      },
      takeaways: [
        '投影與對稱口訣：**「投影到誰，誰不變，其餘變 0；對稱於誰，誰不變，其餘變負號」**。',
        '同側兩點 $A, B$ 到平面 $E$ 上動點 $P$ 之距離和 $\\overline{PA} + \\overline{PB}$ 最小值：先求 $A$ 對平面 $E$ 的對稱點 $A\'$，則最小值即為直線段 $\\overline{A\'B}$。',
      ],
    },
  ],

  matrices: [
    {
      concept: '增廣矩陣與列運算（高斯消去法）',
      kind: 'diagram',
      title: '增廣矩陣列運算（高斯消去法）與二階反方陣公式流程圖',
      caption: '透過三種基本列運算將增廣矩陣 [A | b] 化為階梯形矩陣，並根據末列係數判別恰有一解、無解或無限多解。',
      svg: (() => {
        let s = '';
        s += flow(20, 22, [
          ['聯立方程組', 'a₁x + b₁y = c₁', 'a₂x + b₂y = c₂'],
          ['寫成增廣矩陣', '[ a₁  b₁ | c₁ ]', '[ a₂  b₂ | c₂ ]'],
          ['基本列運算', '1. 兩列互換', '2. 乘非零常數', '3. 乘倍數加他列'],
          ['化簡列階梯形', '[ 1  0 | p ]', '[ 0  1 | q ]'],
        ], { w: 118, h: 74, gap: 16, tones: ['blue', 'green', 'amber', 'red'], size: 11 });
        s += box(20, 118, 168, 92, ['恰有一組解 (相交一點)', 'Δ = ad - bc ≠ 0', '末列 [ 0  0  1 | k ]'], { tone: 'blue', size: 11.5 });
        s += box(196, 118, 168, 92, ['無限多組解 (重合)', 'Δ = Δx = Δy = 0', '末列全為 0：[ 0  0  0 | 0 ]'], { tone: 'green', size: 11.5 });
        s += box(372, 118, 168, 92, ['無解 (矛盾平行)', 'Δ = 0 但 Δx, Δy ≠ 0', '末列矛盾：[ 0  0  0 | k≠0 ]'], { tone: 'red', size: 11.5 });
        return svg(560, 230, s);
      })(),
      takeaways: [
        '增廣矩陣末列若出現 $[0\\; 0\\; 0 \\mid k]$：當 **$k = 0$ 時為無限多組解**（含自由變數 $t$）；當 **$k \\neq 0$ 時為矛盾無解**。',
        '二階方陣 $A = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$ 的反方陣口訣：**「分母放行列式 $ad-bc$，主對角線對調 $(d, a)$，副對角線變號 $(-b, -c)$」**。',
      ],
    },
    {
      concept: '三元一次方程組：消去法與解的情形',
      kind: 'chart',
      title: '二元一次聯立方程組兩直線 L₁, L₂ 斜率與解的個數定量比較圖',
      caption: '在同一坐標平面繪製 L₁: 2x + y = 4 與相交線 L₂ (唯一解 (1,2))、平行線 L₃ (無解) 的幾何關係。',
      svg: lineChart({
        w: 520,
        h: 250,
        x: { min: -1, max: 3, ticks: [-1, 0, 1, 2, 3], label: 'x 坐標' },
        y: { min: -2, max: 6, ticks: [-2, 0, 2, 4, 6], label: 'y 坐標' },
        series: [
          { name: 'L₁: 2x + y = 4', tone: 'blue', points: [[-1, 6], [0, 4], [1, 2], [2, 0], [3, -2]], markers: true },
          { name: 'L₂: x - y = -1 (交於 (1,2))', tone: 'red', points: [[-1, 0], [0, 1], [1, 2], [2, 3], [3, 4]], markers: true },
          { name: 'L₃: 2x + y = 1 (平行無解)', tone: 'amber', dash: 'dash', points: [[-1, 3], [0, 1], [1, -1], [2, -3]], markers: true },
        ],
      }),
      table: {
        headers: ['直線配對', '係數比關係', '行列式 Δ = a₁b₂ - a₂b₁', '幾何意義與解的個數'],
        rows: [
          ['L₁ 與 L₂ (相交)', 'a₁/a₂ ≠ b₁/b₂ (2/1 ≠ 1/-1)', 'Δ = -3 ≠ 0', '相交於唯一一點 (1, 2)（恰有一解）'],
          ['L₁ 與 L₃ (平行)', 'a₁/a₂ = b₁/b₂ ≠ c₁/c₂', 'Δ = 0，但 Δx = -3 ≠ 0', '兩平行直線永不相交（矛盾無解）'],
          ['L₁ 與 2L₁ (重合)', 'a₁/a₂ = b₁/b₂ = c₁/c₂', 'Δ = Δx = Δy = 0', '兩直線完全重合（無限多組解）'],
        ],
      },
      takeaways: [
        '克拉瑪公式判別法：$\\Delta \\neq 0 \\implies$ 恰有一解 $(x, y) = (\\frac{\\Delta_x}{\\Delta}, \\frac{\\Delta_y}{\\Delta})$；$\\Delta = 0$ 時再看係數比區分平行（無解）與重合（無限多解）。',
        '齊次方程組（常數項全為 0）必通過原點 $(0,0,0)$，若想要有「非零解（異於 0 的解）」，充要條件為係數行列式 $\\Delta = 0$。',
      ],
    },
    {
      concept: '矩陣的加減、係數積與乘法',
      kind: 'table',
      title: '矩陣階數、乘法規則、交換律陷阱與二階反方陣總整理表',
      caption: '彙整矩陣加減與乘法的階數條件、不具交換律造成的展開式差異，以及反方陣存在判別條件。',
      table: {
        headers: ['矩陣性質', '代數定義與公式', '成立條件與階數限制', '統測常考陷阱'],
        rows: [
          ['矩陣乘法 A·B', 'A_(m×n) · B_(n×p) = C_(m×p)', '前矩陣「行數 n」= 後矩陣「列數 n」', '第 i 列與第 j 行作內積得 c_ij'],
          ['乘法不具交換律', '一般而言 AB ≠ BA', '(A + B)² = A² + AB + BA + B²', '(A+B)(A-B) = A² - AB + BA - B² ≠ A² - B²'],
          ['二階反方陣 A⁻¹', 'A⁻¹ = [1/(ad-bc)] · [ d  -b ; -c   a ]', '可逆充要條件：det(A) = ad - bc ≠ 0', '若 det(A) = 0 稱為不可逆（奇異矩陣）'],
          ['矩陣解方程組', 'AX = B ⇒ X = A⁻¹B', 'A⁻¹ 必須乘在等號兩側的「同側（左邊）」', '(AB)⁻¹ = B⁻¹A⁻¹（穿脫鞋襪順序相反）'],
        ],
      },
      takeaways: [
        '矩陣乘法因為 **$AB \\neq BA$**，故 $(A+B)^2 = A^2 + 2AB + B^2$ **只有在 $AB = BA$ 時才成立**！',
        '已知 $AX = B$ 求 $X$，必須左乘 $A^{-1}$ 得 $X = A^{-1}B$；若為 $XA = B$，則必須右乘 $A^{-1}$ 得 $X = BA^{-1}$。',
      ],
    },
  ],

  'linear-programming': [
    {
      concept: '線性規劃：頂點法求最大值、最小值與範圍',
      kind: 'diagram',
      title: '線性規劃可行解區域與平行線平移頂點法圖解',
      caption: '繪出聯立不等式 x ≥ 0, y ≥ 0, x + 2y ≤ 8, 3x + y ≤ 9 的可行解多邊形 OABC，並平移目標函數線 f(x,y) = 2x + y 在頂點 B(2,3) 取得最大值 7。',
      svg: (() => {
        const f = frame([-0.5, 9], [-0.5, 5.5], { left: 48, top: 18, width: 290, height: 188 });
        let s = axes(f, { xTicks: [0, 2, 3, 6, 8], yTicks: [0, 3, 4, 5], xLabel: 'x', yLabel: 'y' });
        const polyPts: Pt[] = [f.P(0, 0), f.P(3, 0), f.P(2, 3), f.P(0, 4)];
        s += polygon(polyPts, { tone: 'blue', fill: 'blue', soft: true, w: 2 });
        s += curve(f, (x) => (8 - x) / 2, { tone: 'blue', w: 1.8, from: -0.4, to: 8.5 });
        s += curve(f, (x) => 9 - 3 * x, { tone: 'green', w: 1.8, from: 1.2, to: 3.2 });
        // 目標函數平行線 2x + y = k
        s += curve(f, (x) => 4 - 2 * x, { tone: 'red', w: 1.4, dash: 'dash', from: -0.3, to: 2.3 });
        s += curve(f, (x) => 7 - 2 * x, { tone: 'red', w: 2.2, from: 0.7, to: 3.8 });
        s += point(f, 0, 0, 'O(0,0)', { tone: 'ink', dx: -34, dy: 14 });
        s += point(f, 3, 0, 'A(3,0)', { tone: 'blue', dx: 6, dy: -8 });
        s += point(f, 2, 3, 'B(2,3) 最大值 7', { tone: 'red', dx: 8, dy: -6 });
        s += point(f, 0, 4, 'C(0,4)', { tone: 'blue', dx: 8, dy: -4 });
        s += text(f.X(1), f.Y(1.4), '可行解區域', { tone: 'blue', size: 12, weight: 'bold' });
        s += box(356, 22, 188, 86, ['半平面左右判別法 (a > 0)', 'ax + by + c ≥ 0 在直線「右側」', 'ax + by + c ≤ 0 在直線「左側」'], { tone: 'blue', size: 11.5 });
        s += box(356, 122, 188, 86, ['頂點法求極值 SOP', '1. 聯立邊界直線求各頂點', '2. 將頂點代入目標函數 f(x,y)', '3. 比大小得 Max 與 Min'], { tone: 'red', size: 11.5 });
        return svg(560, 230, s);
      })(),
      takeaways: [
        '將直線先整理為 **$x$ 係數 $a > 0$**：則 $> 0$ 恆為**右半平面**、$< 0$ 恆為**左半平面**；含等號畫實線，不含等號畫虛線。',
        '兩點 $A, B$ 在直線 $L: ax+by+c=0$ 的**異側** $\\iff L(A) \\cdot L(B) < 0$；若題目說「線段 $AB$ 與直線 $L$ 相交」，記得加上等號 $L(A) \\cdot L(B) \\le 0$。',
      ],
    },
    {
      concept: '線性規劃：頂點法求最大值、最小值與範圍',
      kind: 'chart',
      title: '可行解區域四個頂點 O, A, B, C 代入目標函數 f(x,y) = 2x + y 數值比較圖',
      caption: '比較多邊形四個頂點 O(0,0)、A(3,0)、B(2,3)、C(0,4) 在兩種目標函數下的得分，驗證極值必發生在邊界頂點。',
      svg: barChart({
        w: 520,
        h: 250,
        categories: ['O(0, 0)', 'A(3, 0)', 'B(2, 3)', 'C(0, 4)'],
        y: { min: 0, max: 14, ticks: [0, 3, 6, 9, 12], label: '目標函數值' },
        values: true,
        series: [
          { name: 'f(x,y) = 2x + y', tone: 'blue', values: [0, 6, 7, 4] },
          { name: 'g(x,y) = x + 3y', tone: 'amber', values: [0, 3, 11, 12] },
        ],
      }),
      table: {
        headers: ['邊界頂點坐標', '交會邊界直線', 'f(x, y) = 2x + y', 'g(x, y) = x + 3y'],
        rows: [
          ['O(0, 0)', 'x = 0 與 y = 0', '2(0) + 0 = 0 (最小值)', '0 + 3(0) = 0 (最小值)'],
          ['A(3, 0)', '3x + y = 9 與 y = 0', '2(3) + 0 = 6', '3 + 3(0) = 3'],
          ['B(2, 3)', 'x + 2y = 8 與 3x + y = 9', '2(2) + 3 = 7 (f 最大值)', '2 + 3(3) = 11'],
          ['C(0, 4)', 'x = 0 與 x + 2y = 8', '2(0) + 4 = 4', '0 + 3(4) = 12 (g 最大值)'],
        ],
      },
      takeaways: [
        '線性規劃頂點法：不需畫出目標函數平移線，只要解出可行解區域所有**頂點坐標**並逐一代入目標函數，最大者即為最大值、最小者即為最小值。',
        '應用題若變數代表人數、桌數、產品件數（須為整數），且最佳頂點算出來是分數時，需檢驗頂點附近的**格子點（整數點）**。',
      ],
    },
    {
      concept: '二元一次不等式的圖形：半平面與測試點',
      kind: 'table',
      title: '二元一次不等式圖形判別、同異側條件與線性規劃建模表',
      caption: '整理半平面方向速判法、原點測試法、兩點同異側判別，以及線性規劃文字應用題列式步驟。',
      table: {
        headers: ['判別項目', '數學條件（先令 x 係數 a > 0）', '圖形意義與邊界線', '統測常考題型'],
        rows: [
          ['右半平面 vs 左半平面', 'ax + by + c > 0 為右；< 0 為左', '含等號 (≥, ≤) 為實線；不含為虛線', '由陰影區域反推聯立不等式正負號'],
          ['原點 (0,0) 代入測試法', '將 (0,0) 代入看常數項 c 正負', '若滿足不等式則陰影包含原點一側', '直線不通過原點 (c ≠ 0) 時最快'],
          ['兩點 A, B 同側與異側', '同側：L(A)·L(B) > 0；異側：L(A)·L(B) < 0', '代點後的兩個函數值相乘看正負號', '線段 AB 與直線相交 ⇔ L(A)·L(B) ≤ 0'],
          ['線性規劃應用題建模', '設產量 x ≥ 0, y ≥ 0，列原料限制不等式', '利潤函數 P = px + qy 代各頂點求 Max', '工場生產配料、營養攝取最低成本問題'],
        ],
      },
      takeaways: [
        '看圖寫不等式三步驟：先求直線方程式（建議用截距式 $\\frac{x}{a}+\\frac{y}{b}=1$），再代入原點 $(0,0)$ 決定不等號方向，最後看實虛線決定有無等號。',
        '若目標函數在相鄰兩頂點 $A, B$ 算出相同的最大值，代表目標函數與邊界線段 $\\overline{AB}$ 平行，整條線段 $\\overline{AB}$ 上所有點都是最佳解。',
      ],
    },
  ],

  geometry: [
    {
      concept: '雙曲線：距離差為 2a、c² = a² + b² 與漸近線',
      kind: 'diagram',
      title: '二次曲線三大定義對照：拋物線 (PF=d)、橢圓 (PF₁+PF₂=2a)、雙曲線 (|PF₁-PF₂|=2a)',
      caption: '並列展示拋物線焦點與準線等距、橢圓兩焦點距離和恆為 2a（拱頂特徵三角形 a²=b²+c²），以及雙曲線漸近線矩形框。',
      svg: (() => {
        let s = '';
        // 1. 拋物線 (左)
        s += line(30, 120, 165, 120, { tone: 'muted', w: 1.2 });
        s += line(90, 35, 90, 200, { tone: 'muted', w: 1.2 });
        s += line(62, 38, 62, 198, { tone: 'amber', w: 1.8, dash: 'dash' });
        const pPts: Pt[] = [];
        for (let t = -70; t <= 70; t += 7) pPts.push([90 + (t * t) / 80, 120 - t]);
        s += polyline(pPts, { tone: 'blue', w: 2.3 });
        s += dot(118, 120, 4, 'red');
        s += text(122, 134, 'F(c,0)', { tone: 'red', size: 11, weight: 'bold' });
        s += text(56, 32, '準線 x=-c', { tone: 'amber', size: 11, weight: 'bold', anchor: 'middle' });
        s += text(98, 18, '拋物線 y² = 4cx', { anchor: 'middle', weight: 'bold', size: 12.5 });
        s += text(98, 216, 'PF = PL，正焦弦長 |4c|', { anchor: 'middle', size: 11, tone: 'muted' });
        // 2. 橢圓 (中)
        const ecx = 285, ecy = 120, ea = 72, eb = 48, ec = Math.round(Math.sqrt(ea * ea - eb * eb));
        s += line(ecx - 82, ecy, ecx + 82, ecy, { tone: 'muted', w: 1.2 });
        s += line(ecx, ecy - 62, ecx, ecy + 62, { tone: 'muted', w: 1.2 });
        s += ellipse(ecx, ecy, ea, eb, { tone: 'green', w: 2.3, fill: 'green', soft: true });
        s += polygon([[ecx, ecy], [ecx + ec, ecy], [ecx, ecy - eb]], { tone: 'red', w: 1.8 });
        s += dot(ecx - ec, ecy, 3.8, 'red') + dot(ecx + ec, ecy, 3.8, 'red') + dot(ecx, ecy - eb, 3.8, 'blue');
        s += text(ecx + ec / 2 + 12, ecy - eb / 2 - 4, 'a', { tone: 'red', size: 12, weight: 'bold' });
        s += text(ecx - 8, ecy - eb / 2, 'b', { tone: 'red', size: 12, weight: 'bold' });
        s += text(ecx + ec / 2, ecy + 14, 'c', { tone: 'red', size: 12, weight: 'bold' });
        s += text(ecx, 18, '橢圓 x²/a² + y²/b² = 1', { anchor: 'middle', weight: 'bold', size: 12.5 });
        s += text(ecx, 216, 'PF₁+PF₂ = 2a，a² = b² + c²', { anchor: 'middle', size: 11, tone: 'muted' });
        // 3. 雙曲線 (右)
        const hcx = 468, hcy = 120, ha = 32, hb = 42;
        s += rect(hcx - ha, hcy - hb, 2 * ha, 2 * hb, { tone: 'muted', w: 1.2, dash: 'dot' });
        s += line(hcx - 64, hcy + 84, hcx + 64, hcy - 84, { tone: 'amber', w: 1.4, dash: 'dash' });
        s += line(hcx - 64, hcy - 84, hcx + 64, hcy + 84, { tone: 'amber', w: 1.4, dash: 'dash' });
        const hRight: Pt[] = [], hLeft: Pt[] = [];
        for (let t = -1.2; t <= 1.2; t += 0.15) {
          hRight.push([hcx + ha * Math.cosh(t), hcy - hb * Math.sinh(t)]);
          hLeft.push([hcx - ha * Math.cosh(t), hcy - hb * Math.sinh(t)]);
        }
        s += polyline(hRight, { tone: 'violet', w: 2.3 }) + polyline(hLeft, { tone: 'violet', w: 2.3 });
        s += dot(hcx - 53, hcy, 3.8, 'red') + dot(hcx + 53, hcy, 3.8, 'red');
        s += text(hcx, 18, '雙曲線 x²/a² - y²/b² = 1', { anchor: 'middle', weight: 'bold', size: 12.5 });
        s += text(hcx, 216, '|PF₁-PF₂| = 2a，c² = a² + b²', { anchor: 'middle', size: 11, tone: 'muted' });
        return svg(560, 230, s);
      })(),
      takeaways: [
        '參數最大者記法：**橢圓 $a$ 最大**（$a^2 = b^2 + c^2$，分母誰大焦點就在哪軸）；**雙曲線 $c$ 最大**（$c^2 = a^2 + b^2$，誰正焦點就在哪軸）。',
        '正焦弦長必背：拋物線為 $|4c|$；橢圓與雙曲線皆為 $\\frac{2b^2}{a}$。',
      ],
    },
    {
      concept: '橢圓：距離和為 2a',
      kind: 'chart',
      title: '三種常見畢氏數橢圓之長軸 2a、短軸 2b、焦距 2c 與正焦弦長 2b²/a 比較圖',
      caption: '對照三組常見畢氏數橢圓參數 (a,b,c) = (5,4,3)、(5,3,4) 與 (13,12,5) 之幾何尺寸變化。',
      svg: barChart({
        w: 520,
        h: 250,
        categories: ['長軸長 2a', '短軸長 2b', '焦距 2c', '正焦弦長 2b²/a'],
        y: { min: 0, max: 28, ticks: [0, 7, 14, 21, 28], label: '幾何長度' },
        values: true,
        series: [
          { name: '橢圓 I (a=5, b=4, c=3)', tone: 'blue', values: [10, 8, 6, 6.4] },
          { name: '橢圓 II (a=5, b=3, c=4)', tone: 'green', values: [10, 6, 8, 3.6] },
          { name: '橢圓 III (a=13, b=12, c=5)', tone: 'amber', values: [26, 24, 10, 22.15] },
        ],
      }),
      table: {
        headers: ['橢圓標準式', '半軸與半焦距 (a, b, c)', '長軸 2a ／ 短軸 2b ／ 焦距 2c', '正焦弦長 2b²/a'],
        rows: [
          ['x²/25 + y²/16 = 1', 'a = 5, b = 4, c = 3', '2a = 10 ／ 2b = 8 ／ 2c = 6', '2(16)/5 = 32/5 = 6.4'],
          ['x²/25 + y²/9 = 1', 'a = 5, b = 3, c = 4', '2a = 10 ／ 2b = 6 ／ 2c = 8', '2(9)/5 = 18/5 = 3.6'],
          ['x²/169 + y²/144 = 1', 'a = 13, b = 12, c = 5', '2a = 26 ／ 2b = 24 ／ 2c = 10', '2(144)/13 ≈ 22.15'],
        ],
      },
      takeaways: [
        '橢圓上任一點 $P$ 與兩焦點 $F_1, F_2$ 所圍成的焦點三角形 $\\triangle PF_1F_2$ **周長恆等於 $2a + 2c$**。',
        '橢圓方程式判別開口方向只看**分母大小**：$x^2$ 分母較大為橫橢圓（焦點在水平線），$y^2$ 分母較大為直橢圓（焦點在鉛垂線）。',
      ],
    },
    {
      concept: '雙曲線：距離差為 2a',
      kind: 'table',
      title: '拋物線、橢圓與雙曲線幾何要素與標準式全比較表',
      caption: '將二次曲線三姊妹的軌跡定義、標準方程式、参数平方關係、正焦弦長與漸近線並列對照。',
      table: {
        headers: ['二次曲線種類', '幾何軌跡定義', '中心在原點之標準式', '核心參數關係與特殊直線'],
        rows: [
          ['拋物線 (Parabola)', '到焦點 F 距離 = 到準線 L 距離', '左右：y² = 4cx；上下：x² = 4cy', '頂點到焦點距離 |c|，正焦弦長 = |4c|'],
          ['橢圓 (Ellipse)', '到兩焦點距離和 PF₁ + PF₂ = 2a', '橫：x²/a² + y²/b² = 1 (a > b > 0)', 'a² = b² + c²（a 最大），正焦弦長 = 2b²/a'],
          ['雙曲線 (Hyperbola)', '到兩焦點距離差 |PF₁ - PF₂| = 2a', '左右：x²/a² - y²/b² = 1', 'c² = a² + b²（c 最大），漸近線 x/a ± y/b = 0'],
          ['等軸與共軛雙曲線', '貫軸長 2a = 共軛軸長 2b', '等軸：x² - y² = a²（漸近線互相垂直）', '共軛雙曲線：將常數項 1 改為 -1（共用漸近線）'],
        ],
      },
      takeaways: [
        '雙曲線求漸近線超快口訣：**「將標準式等號右邊的 $1$ 改為 $0$，再將平方差因式分解」**，即 $\\frac{(x-h)^2}{a^2} - \\frac{(y-k)^2}{b^2} = 0 \\implies \\frac{x-h}{a} \\pm \\frac{y-k}{b} = 0$。',
        '拋物線記得先整理為 $(y-k)^2 = 4c(x-h)$，係數除以 $4$ 才是焦距 $c$（正右負左、正上負下）。',
      ],
    },
  ],

  calculus: [
    {
      concept: '導數的定義與幾何意義：切線斜率',
      kind: 'diagram',
      title: '導數幾何意義（割線逼近切線斜率）與極大值、極小值判別圖解',
      caption: '展示三次函數 y = f(x) 的切線斜率 f′(x) 變化：在遞增區間 f′(x) > 0、遞減區間 f′(x) < 0，且於水平切線 f′(x) = 0 處產生相對極大與極小值。',
      svg: (() => {
        const f = frame([-2.2, 2.2], [-3, 3], { left: 48, top: 18, width: 295, height: 188 });
        let s = axes(f, { xTicks: [-2, -1, 1, 2], yTicks: [-2, 2], xLabel: 'x', yLabel: 'y' });
        const fn = (x: number) => x * x * x - 3 * x;
        s += curve(f, fn, { tone: 'blue', w: 2.5, from: -2.05, to: 2.05 });
        // 極大點 (-1, 2) 與極小點 (1, -2) 水平切線
        s += line(f.X(-1.8), f.Y(2), f.X(-0.2), f.Y(2), { tone: 'red', w: 2 });
        s += line(f.X(0.2), f.Y(-2), f.X(1.8), f.Y(-2), { tone: 'green', w: 2 });
        s += point(f, -1, 2, '極大 (-1, 2), f′=0', { tone: 'red', dx: -10, dy: -10, anchor: 'middle', guides: true });
        s += point(f, 1, -2, '極小 (1, -2), f′=0', { tone: 'green', dx: 10, dy: 16, anchor: 'middle', guides: true });
        s += point(f, 0, 0, '反曲點 f″=0', { tone: 'amber', dx: 8, dy: -6 });
        s += text(f.X(-1.65), f.Y(0.2), '遞增 f′>0', { tone: 'blue', size: 11, weight: 'bold' });
        s += text(f.X(0), f.Y(1.2), '遞減 f′<0', { tone: 'amber', size: 11, weight: 'bold' });
        s += box(362, 22, 182, 86, ['導數 = 切線斜率 = 瞬時變化率', 'm_tan = f′(a) = lim [f(x)-f(a)]/(x-a)', '切線：y - f(a) = f′(a)(x - a)'], { tone: 'blue', size: 11 });
        s += box(362, 122, 182, 86, ['一階導數極值判別法', 'f′(x) 由 + 變 - ⇒ 相對極大值', 'f′(x) 由 - 變 + ⇒ 相對極小值'], { tone: 'red', size: 11.5 });
        return svg(560, 230, s);
      })(),
      takeaways: [
        '過曲線上點 $(a, f(a))$ 的**切線斜率即為導數 $m = f\'(a)$**；位置函數微分得速度 $v(t) = s\'(t)$，速度微分得加速度 $a(t) = v\'(t) = s\'\'(t)$。',
        '求三次函數極值三步驟：(1) 求導函數 $f\'(x)$，(2) 解 $f\'(x) = 0$ 得臨界點 $x = \\alpha, \\beta$，(3) 代回原函數 $f(x)$ 得極大值與極小值。',
      ],
    },
    {
      concept: '導函數與微分公式',
      kind: 'chart',
      title: '函數 f(x) = x³ - 3x 與其導函數 f′(x) = 3x² - 3 對應關係圖',
      caption: '對照原函數 f(x) 與導函數 f′(x)：當 x = ±1 時導函數 f′(±1) = 0 恰過 x 軸，對應原函數 f(x) 的波峰（極大值 2）與波谷（極小值 -2）。',
      svg: lineChart({
        w: 520,
        h: 250,
        x: { min: -2, max: 2, ticks: [-2, -1, 0, 1, 2], label: 'x 坐標' },
        y: { min: -4, max: 10, ticks: [-3, 0, 3, 6, 9], label: '函數值 / 斜率' },
        series: [
          { name: '原函數 f(x) = x³ - 3x', tone: 'blue', points: [[-2, -2], [-1, 2], [0, 0], [1, -2], [2, 2]], markers: true, smooth: true },
          { name: '導函數 f′(x) = 3x² - 3 (切線斜率)', tone: 'red', dash: 'dash', points: [[-2, 9], [-1, 0], [0, -3], [1, 0], [2, 9]], markers: true, smooth: true },
        ],
        overlay: (f) => line(f.box.left, f.Y(0), f.box.left + f.box.width, f.Y(0), { tone: 'muted', w: 1.2 }),
      }),
      table: {
        headers: ['自變數 x', '導函數 f′(x) = 3x² - 3', '切線傾斜與增減狀態', '原函數值 f(x) = x³ - 3x'],
        rows: [
          ['x = -2', '+9 (> 0)', '切線右上傾斜（嚴格遞增）', 'f(-2) = -2'],
          ['x = -1', '0 (水平切線)', 'f′ 由正變負 ⇒ 相對極大點', 'f(-1) = +2 (相對極大值)'],
          ['x = 0', '-3 (< 0)', '切線右下傾斜（嚴格遞減、反曲點）', 'f(0) = 0'],
          ['x = 1', '0 (水平切線)', 'f′ 由負變正 ⇒ 相對極小點', 'f(1) = -2 (相對極小值)'],
          ['x = 2', '+9 (> 0)', '切線右上傾斜（嚴格遞增）', 'f(2) = +2'],
        ],
      },
      takeaways: [
        '二階導數判別法：當 $f\'(c) = 0$ 時，若 $f\'\'(c) < 0$（凹向下）則 $f(c)$ 為**相對極大值**；若 $f\'\'(c) > 0$（凹向上）則 $f(c)$ 為**相對極小值**。',
        '注意 $f\'(c) = 0$ 只是極值的必要條件而非充分條件（例如 $f(x) = x^3$ 在 $x=0$ 處 $f\'(0)=0$，但兩側皆正，無極值）。',
      ],
    },
    {
      concept: '導函數與微分公式',
      kind: 'table',
      title: '極限不定型化簡、微分四大公式與物理運動學微分表',
      caption: '彙整 0/0 不定型極限解法、次方律／乘積律／連鎖律微分公式，以及切線與極值應用。',
      table: {
        headers: ['微積分主題', '核心數學公式', '運算規則與口訣', '統測代表考題'],
        rows: [
          ['0/0 不定型極限', 'lim_(x→a) [f(x)-f(a)]/(x-a) = f′(a)', '因式分解消去零因式 (x-a)，或用羅必達法則', 'lim_(h→0) [f(a+mh)-f(a+nh)]/h = (m-n)f′(a)'],
          ['多項式次方微分', 'd/dx (c · x^n) = c · n · x^(n-1)，常數微分 = 0', '次方 n 搬下來相乘，指數減 1', '(x³ - 4x² + 5x - 7)′ = 3x² - 8x + 5'],
          ['乘積律與連鎖律', '(fg)′ = f′g + fg′；[(g(x))^n]′ = n[g(x)]^(n-1) · g′(x)', '前微後不微 + 前不微後微；外層微乘內層微', '[(2x + 1)⁴]′ = 4(2x + 1)³ · 2 = 8(2x + 1)³'],
          ['運動學與最佳化', 'v(t) = s′(t)，a(t) = v′(t) = s″(t)', '折返瞬間 v(t) = 0；求面積體積最大令 V′(x) = 0', '鐵皮四角剪去 x 折成無蓋盒求最大容積'],
        ],
      },
      takeaways: [
        '極限秒殺公式：$\\lim_{h \\to 0} \\frac{f(a + mh) - f(a + nh)}{kh} = \\frac{m - n}{k} f\'(a)$（直接看 $h$ 的係數相減除以分母係數）。',
        '用羅必達法則解 $\\frac{0}{0}$ 極限：當分子分母代入 $x=a$ 皆為 $0$ 時，$\\lim_{x\\to a}\\frac{g(x)}{h(x)} = \\lim_{x\\to a}\\frac{g\'(x)}{h\'(x)}$。',
      ],
    },
  ],

  integration: [
    {
      concept: '積分的概念：分割、逼近與面積',
      kind: 'diagram',
      title: '黎曼和矩形分割逼近與定積分正負有向面積圖解',
      caption: '左圖展示將區間 [a, b] 分割為 n 個細長條，當 n → ∞ 時矩形面積和收斂為定積分；右圖展示求實際圍成面積須對 x 軸下方區域取絕對值。',
      svg: (() => {
        let s = '';
        // 左：黎曼和分割
        const f1 = frame([0, 4], [0, 5], { left: 36, top: 22, width: 220, height: 178 });
        const fn1 = (x: number) => 0.25 * x * x + 0.8;
        s += shadeUnder(f1, fn1, 0.5, 3.5, 'blue');
        const n = 6, a = 0.5, b = 3.5, dx = (b - a) / n;
        for (let i = 0; i < n; i++) {
          const xi = a + i * dx;
          const h = fn1(xi + dx);
          s += rect(f1.X(xi), f1.Y(h), f1.X(xi + dx) - f1.X(xi), f1.Y(0) - f1.Y(h), { tone: 'blue', w: 1.2 });
        }
        s += curve(f1, fn1, { tone: 'red', w: 2.3, from: 0.2, to: 3.8 });
        s += axes(f1, { xTicks: [0.5, 3.5], xTickLabel: (v) => (v === 0.5 ? 'a' : 'b'), yTicks: [], xLabel: 'x', yLabel: 'y' });
        s += text(146, 16, '黎曼和 lim Σ f(x_k)Δx = ∫_a^b f(x)dx', { anchor: 'middle', weight: 'bold', size: 12 });
        // 右：定積分正負號與實際面積
        const f2 = frame([0, 4], [-2.5, 2.5], { left: 305, top: 22, width: 225, height: 178 });
        const pts: Pt[] = [];
        for (let i = 0; i <= 60; i++) {
          const x = 0.3 + (3.4 * i) / 60;
          pts.push([x, 2 * Math.sin(((x - 0.3) / 3.4) * Math.PI * 2)]);
        }
        s += signedFill(f2, pts, { pos: 'blue', neg: 'red', w: 2.2 });
        s += axes(f2, { xTicks: [], yTicks: [], xLabel: 'x', yLabel: 'y' });
        s += text(f2.X(1.15), f2.Y(0.9), '+A₁', { tone: 'blue', weight: 'bold', size: 13, anchor: 'middle' });
        s += text(f2.X(2.85), f2.Y(-0.9), '-A₂', { tone: 'red', weight: 'bold', size: 13, anchor: 'middle' });
        s += text(418, 16, '定積分 = A₁ - A₂；總面積 = A₁ + |A₂|', { anchor: 'middle', weight: 'bold', size: 12 });
        return svg(560, 230, s);
      })(),
      takeaways: [
        '微積分基本定理：若 $F\'(x) = f(x)$，則 $\\int_a^b f(x)\\,dx = [F(x)]_a^b = F(b) - F(a)$。',
        '**定積分有正負，面積恆為正**：當圖形在 $x$ 軸下方時定積分為負，求圍成區域總面積必須在交點分段並加上絕對值 $\\int_a^b |f(x)|\\,dx$。',
      ],
    },
    {
      concept: '積分的概念：分割、逼近與面積',
      kind: 'chart',
      title: 'y = x² 在 [0, 2] 區間隨分割數 n 增加之上和 U_n、下和 L_n 收斂至真值 8/3 圖',
      caption: '將 [0, 2] 分為 n 等份計算 y = x² 的上和 U_n 與下和 L_n，隨著 n 由 2 增至 32，上下和迅速夾擠收斂至定積分真值 8/3 ≈ 2.67。',
      svg: lineChart({
        w: 520,
        h: 250,
        x: { min: 2, max: 32, ticks: [2, 4, 8, 16, 32], label: '分割等份數 n' },
        y: { min: 0.5, max: 5.5, ticks: [1, 2, 2.67, 4, 5], label: '矩形面積和' },
        series: [
          { name: '上和 U_n (高估)', tone: 'red', points: [[2, 5.0], [4, 3.75], [8, 3.19], [16, 2.92], [32, 2.79]], markers: true, smooth: true },
          { name: '定積分真值 ∫₀² x² dx = 8/3', tone: 'green', dash: 'dash', points: [[2, 2.67], [32, 2.67]] },
          { name: '下和 L_n (低估)', tone: 'blue', points: [[2, 1.0], [4, 1.75], [8, 2.19], [16, 2.42], [32, 2.54]], markers: true, smooth: true },
        ],
      }),
      table: {
        headers: ['分割數 n', '下和 L_n', '上和 U_n', '上下和差距 U_n - L_n', '定積分真值 ∫₀² x² dx'],
        rows: [
          ['n = 2', '1.00', '5.00', '4.00', '8/3 ≈ 2.67'],
          ['n = 4', '1.75', '3.75', '2.00', '8/3 ≈ 2.67'],
          ['n = 8', '2.19', '3.19', '1.00', '8/3 ≈ 2.67'],
          ['n = 16', '2.42', '2.92', '0.50', '8/3 ≈ 2.67'],
          ['n → ∞', '收斂至 8/3', '收斂至 8/3', '趨近於 0', '8/3 ≈ 2.67'],
        ],
      },
      takeaways: [
        '多項式積分次方律：$\\int x^n\\,dx = \\frac{1}{n+1}x^{n+1} + C$（次方加 1，再除以新次方）。',
        '無窮等比級數 $\\sum_{n=1}^{\\infty} a_1 r^{n-1}$ 收斂條件為 **$-1 < r < 1$**，其無窮項總和公式為 $S = \\frac{a_1}{1 - r}$。',
      ],
    },
    {
      concept: '多項式函數的不定積分與定積分',
      kind: 'table',
      title: '分式數列極限、無窮等比級數與定積分面積秒殺公式表',
      caption: '彙整 n → ∞ 有理分式極限速判法、循環小數化分數、定積分性質與拋物線六分之一面積公式。',
      table: {
        headers: ['積分與極限主題', '核心公式與判別條件', '關鍵結構與範圍', '統測秒殺技巧'],
        rows: [
          ['分式數列極限 (n→∞)', '分子次方 < 分母 ⇒ 0；同次方 ⇒ 最高次係數比', '分子次方 > 分母 ⇒ 發散 (不存在)', 'lim (3n²+5n)/(2n²-1) = 3/2'],
          ['無窮等比數列與級數', '數列 r^n 收斂 ⇔ -1 < r ≤ 1；級數收斂 ⇔ |r| < 1', '無窮等比級數和 S = a₁ / (1 - r)', '注意數列收斂含 r = 1，但級數不含 r = 1'],
          ['定積分對稱與分段', '∫_a^b f + ∫_b^c f = ∫_a^c f；∫_a^b f = -∫_b^a f', '對稱區間 [-a, a]：奇函數積分 = 0', '偶函數 ∫_(-a)^a f(x)dx = 2 ∫_0^a f(x)dx'],
          ['拋物線圍面積秒殺', 'A = (|a| / 6) · (β - α)³', '拋物線 y = ax²+bx+c 與直線交於 x = α, β', '免算積分，直接代 |a|/6 × (兩根差)³'],
        ],
      },
      takeaways: [
        '**拋物線 $\\frac{1}{6}$ 面積秒殺公式**：拋物線與 x 軸（或任一割線）交於兩根 $\\alpha < \\beta$，所圍封閉面積必為 $A = \\frac{|a|}{6}(\\beta - \\alpha)^3$！',
        '運動學積分：速度的定積分 $\\int_{t_1}^{t_2} v(t)\\,dt$ 為**位移（末位置減初位置）**；速率的定積分 $\\int_{t_1}^{t_2} |v(t)|\\,dt$ 為**總路徑長（實際行走距離）**。',
      ],
    },
  ],
};
