import type { TopicVisualMap } from './types';
import {
  angle, area, arrow, barChart, box, circle, dim, dot, ground, line, lineChart, path, pill,
  point, polar, polygon, polyline, rect, rightAngle, svg, text, type Pt,
} from './kit';

/** 簡化的三腳架儀器符號：(x, y) 為儀器頂點 */
function instrument(x: number, y: number, tone: 'ink' | 'blue' | 'red' | 'green' = 'ink'): string {
  return rect(x - 9, y - 6, 18, 10, { tone, fill: tone, soft: true, w: 1.4, rx: 2 }) +
    line(x, y + 4, x - 12, y + 36, { tone: 'muted', w: 1.4 }) + line(x, y + 4, x, y + 36, { tone: 'muted', w: 1.4 }) + line(x, y + 4, x + 12, y + 36, { tone: 'muted', w: 1.4 });
}

/** 標尺：底部 (x, yb)，高 h */
function staff(x: number, yb: number, h: number, label: string, tone: 'ink' | 'blue' | 'red' | 'green' | 'amber' = 'amber'): string {
  let s = rect(x - 4, yb - h, 8, h, { tone, fill: tone, soft: true, w: 1.3 });
  for (let k = 1; k < h / 12; k++) s += line(x - 4, yb - k * 12, x, yb - k * 12, { tone, w: 1 });
  return s + text(x, yb + 16, label, { anchor: 'middle', weight: 'bold', size: 12 });
}

export const surveyingVisuals: TopicVisualMap = {
  'surveying-fundamentals': [
    {
      concept: '測量工作與基準',
      kind: 'diagram',
      title: '地面點、大地水準面 (Geoid) 與參考橢球面之正高 H、橢球高 h、大地起伏 N 幾何關係圖',
      caption: '全測站儀與水準儀以重力鉛垂線（垂直於大地水準面）為基準量測正高 H；GNSS 衛星定位則以橢球法線量測橢球高 h，兩者相差大地起伏 N (h = H + N)。',
      svg: (() => {
        let s = '';
        // 地球內部兩個基準曲面與地形表面
        s += path('M30,192 Q280,152 530,192', { tone: 'blue', w: 2.4 });
        s += path('M30,164 Q180,120 330,148 Q440,168 530,138', { tone: 'green', w: 2.2, dash: 'dash' });
        s += path('M30,122 Q150,98 250,58 Q330,28 420,88 Q480,118 530,96', { tone: 'amber', w: 2.4 });

        // 地面測站點 P 與下方投影
        const px = 290, py = 46;
        const gx = 290, gy = 140; // Geoid 交點
        const ex = 290, ey = 172; // Ellipsoid 交點
        s += dot(px, py, 4.5, 'red') + text(px, py - 10, '地面點 P (測站)', { anchor: 'middle', size: 12, tone: 'red', weight: 'bold' });
        s += dot(gx, gy, 3.8, 'green');
        s += dot(ex, ey, 3.8, 'blue');

        // 鉛垂線與橢球法線
        s += line(px, py, ex, ey + 18, { tone: 'ink', w: 1.5, dash: 'dot' });
        s += rightAngle(gx, gy, 90, 0, 8, 'green');
        s += rightAngle(ex, ey, 90, 180, 8, 'blue');

        // 尺寸標註 H, N, h
        s += dim(px - 18, py, gx - 18, gy, '正高 H (海拔高程)', { offset: -54, tone: 'green', size: 11.5 });
        s += dim(gx - 18, gy, ex - 18, ey, '大地起伏 N', { offset: -54, tone: 'amber', size: 11 });
        s += dim(px + 18, py, ex + 18, ey, '橢球高 h = H + N (GNSS 測得)', { offset: 68, tone: 'blue', size: 11.5 });

        // 曲面標籤
        s += text(44, 110, '自然地形表面', { size: 11.5, tone: 'amber', weight: 'bold' });
        s += text(44, 152, '大地水準面 Geoid (平均海水面延伸・重力等位面)', { size: 11, tone: 'green', weight: 'bold' });
        s += text(44, 206, '參考橢球面 Reference Ellipsoid (TWD97 數學規則曲面)', { size: 11, tone: 'blue', weight: 'bold' });
        s += pill(455, 36, '核心公式：h = H + N', 'red', 12);

        return svg(560, 224, s);
      })(),
      takeaways: [
        '三大高程關係必考公式：**橢球高 $h =$ 正高 $H +$ 大地起伏 $N$**（其中 $h$ 由 GPS/GNSS 測得，$H$ 由直接水準測量測得，台灣基隆平均海水面定為 $H = 0\\text{ m}$）。',
        '**大地水準面 (Geoid)** 是受地球內部質量分布不均影響的「重力等位面」，處處與鉛垂線正交，並非規則數學曲面；**參考橢球面**則是為了平面投影計算而定義的規則旋轉橢球。',
        '台灣現行法定平面座標系統為 **TWD97（採用 GRS80 橢球，TM2 二度分帶投影，中央經線東經 $121^\\circ$，尺度比 $0.9999$，西移假定值 $250,000\\text{ m}$）**，高程基準為 **TWVD2001**。',
      ],
    },
    {
      concept: '誤差、錯誤與精度',
      kind: 'chart',
      title: '精密度 (Precision) 與準確度 (Accuracy) 在觀測誤差分布上之比較圖',
      caption: '高精密度代表偶然誤差小（曲線高聳集中，標準差 σ 小）；高準確度代表無系統誤差偏移（峰值對準真值 X = 0）。',
      svg: lineChart({
        w: 520,
        h: 260,
        x: { min: -10, max: 10, ticks: [-8, -4, 0, 4, 8], label: '觀測誤差 e = 觀測值 − 真值 (mm)' },
        y: { min: 0, max: 100, ticks: [0, 25, 50, 75, 100], label: '出現機率密度 (%)' },
        series: [
          {
            name: '高精密 + 高準確 (理想狀態)',
            tone: 'green',
            points: [[-8, 1], [-4, 8], [-2, 42], [-1, 78], [0, 96], [1, 78], [2, 42], [4, 8], [8, 1]],
            smooth: true,
          },
          {
            name: '高精密但低準確 (含系統誤差 +4 mm)',
            tone: 'red',
            points: [[-4, 1], [0, 8], [2, 42], [3, 78], [4, 96], [5, 78], [6, 42], [8, 8], [10, 2]],
            smooth: true,
            dash: 'dash',
          },
          {
            name: '高準確但低精密 (偶然誤差 σ 較大)',
            tone: 'blue',
            points: [[-10, 6], [-6, 22], [-3, 44], [0, 56], [3, 44], [6, 22], [10, 6]],
            smooth: true,
            dash: 'dot',
          },
        ],
        overlay: (f) =>
          line(f.X(0), f.box.top, f.X(0), f.box.top + f.box.height, { tone: 'ink', w: 1.5, dash: 'dash' }) +
          text(f.X(0) - 6, f.box.top + 16, '真值 (誤差=0)', { anchor: 'end', size: 11, weight: 'bold' }) +
          arrow(f.X(0), f.Y(88), f.X(4), f.Y(88), { tone: 'red', w: 1.8, both: true, head: 6 }) +
          text(f.X(2), f.Y(88) - 6, '系統誤差 Δ', { anchor: 'middle', size: 11, tone: 'red', weight: 'bold' }),
      }),
      table: {
        headers: ['誤差與精度類型', '主要成因', '彈著點 / 統計特徵', '工程消除與改善對策'],
        rows: [
          ['錯誤 / 過失 (Mistake / Blunder)', '觀測員粗心讀錯尺、記錯數字、照準錯目標', '數值異常偏離，不符合機率法則', '多餘觀測、雙人獨立檢核、閉合檢核予以剔除重測'],
          ['系統誤差 (Systematic Error)', '尺長不準、溫度膨脹、儀器視準軸偏移', '具固定正負號與累積性，影響「準確度 Accuracy」', '儀器檢校、施用物理修正公式、採取對稱觀測(如正倒鏡、前後視等距)'],
          ['偶然誤差 (Random Error)', '人眼照準極限、大氣微擾、估讀極限', '服從高斯常態分布，影響「精密度 Precision」', '增加觀測次數 n 取算術平均值，使中誤差縮小為 1/√n'],
          ['精度指標：中誤差 σ', 'σ = ±√([vv] / (n−1))', '±1σ 涵蓋 68.3% 機率；±3σ 涵蓋 99.7% (容許誤差極限)', '選用更精密等級儀器、改善觀測環境穩定度'],
        ],
      },
      takeaways: [
        '**精密度 (Precision)** 反映觀測值彼此間的聚散程度，受**偶然誤差**控制；**準確度 (Accuracy)** 反映觀測平均值接近真值的程度，受**系統誤差**控制。',
        '**偶然誤差四大統計特性**：(1) 小誤差出現機率大於大誤差；(2) 絕對值相等之正負誤差出現機率相等；(3) 極大誤差不會發生（常以 **$2\\sigma$ 或 $3\\sigma$ 為容許誤差限值**）；(4) 當觀測次數 $n \\to \\infty$ 時，偶然誤差之算術平均趨近於 $0$。',
      ],
    },
    {
      concept: '有效數字與單位',
      kind: 'table',
      title: '測量三大角度制、面積單位換算與「四捨六入五成雙」有效數字規則表',
      caption: '彙整六十進制 (DMS)、百進制 (Grad/gon)、弧度制 (rad) 與台灣地籍面積（坪、甲、公頃）之精確換算關係。',
      table: {
        headers: ['計量類別', '標準單位與制度', '精確換算關係式', '統測常考代表數值與規則'],
        rows: [
          ['角度三進制換算', '六十進制 (° ′ ″) vs 百進制 (g, c, cc) vs 弧度 (rad)', '1 周角 = 360° = 400 gon(g) = 2π rad', '1 rad = ρ° ≈ 57.2958° = 3437.75′ ≈ 206265″ (ρ″ 必背！)'],
          ['地籍與工程面積', '平方公尺 (m²)、公頃 (ha)、坪、甲', '1 坪 = (6 台尺)² = (1.818 m)² ≈ 3.3058 m²', '1 m² = 0.3025 坪；1 甲 = 2934 坪 ≈ 0.9699 ha；1 ha = 10000 m²'],
          ['有效數字位數判定', '所有準確數字 + 最後 1 位估讀可疑數字', '前導 0 不算有效數字 (0.0250 m 為 3 位有效數字)', '加減法以「小數位數最少者」為準；乘除法以「有效位數最少者」為準'],
          ['四捨六入五成雙', '測量數據修約標準 (避免傳統四捨五入正偏差累積)', '擬捨棄位 <5 捨去、>5 進位；恰為 5 且後無非零數時「奇進偶不進」', '例：保留小數1位時，12.35 → 12.4 (奇進)；12.45 → 12.4 (偶捨)；12.451 → 12.5'],
        ],
      },
      takeaways: [
        '微小角度弧度換算神器 **$\\rho\'\' = 206265\'\'$**：當視準軸偏角為 $\\alpha\'\'$、距離為 $D$ 時，橫向偏差量直接由 $\\Delta = D \\cdot \\frac{\\alpha\'\'}{206265\'\'}$ 秒算得出！',
        '台灣面積換算秒殺口訣：**「平方公尺乘 $0.3025$ 等於坪；$1$ 坪 $= 3.3058\\text{ m}^2$；$1$ 甲 $= 2934$ 坪」**。',
      ],
    },
    {
      concept: '測量作業基本程序、任務編組與工作安全',
      kind: 'diagram',
      title: '測量作業六步驟：由整體到局部、先控制後碎部、步步有檢核',
      caption: '外業觀測前要先踏勘選點與檢校儀器，觀測後在內業完成計算、平差與檢核，最後才製圖與提交成果。',
      svg: (() => {
        let s = '';
        const steps = [['1 計畫踏勘', '了解範圍與需求'], ['2 選點埋樁', '布設控制點'], ['3 儀器檢校', '檢點與校正'], ['4 外業觀測', '距離、角度、高差'], ['5 內業計算', '平差與檢核'], ['6 成果製圖', '報告與交付']];
        steps.forEach((st, i) => {
          const row = Math.floor(i / 3);
          const col = row === 0 ? i : 5 - i;
          const x = 24 + col * 180;
          const y = 26 + row * 92;
          s += box(x, y, 150, 56, st, { tone: i < 3 ? 'blue' : i < 5 ? 'green' : 'violet', size: 12 });
        });
        s += arrow(176, 54, 202, 54, { tone: 'muted', w: 1.6 }) + arrow(356, 54, 382, 54, { tone: 'muted', w: 1.6 });
        s += arrow(459, 84, 459, 116, { tone: 'muted', w: 1.6 });
        s += arrow(382, 146, 356, 146, { tone: 'muted', w: 1.6 }) + arrow(202, 146, 176, 146, { tone: 'muted', w: 1.6 });
        s += text(280, 206, '每一步都要檢核：記錄手複誦讀數、閉合差檢查、獨立點位複測', { anchor: 'middle', size: 12, tone: 'muted' });
        return svg(560, 220, s);
      })(),
      takeaways: [
        '過失（讀錯、記錯）不是誤差，只能靠記錄手複誦與閉合檢核發現後重測。',
        '測量的基本觀測量只有距離、角度、高差三種，所有點位、面積都由它們計算而來。',
      ],
    },
  ],

  'indirect-distance-elevation': [
    {
      concept: '視距測量',
      kind: 'diagram',
      title: '視距測量 (Stadia Surveying) 上下絲夾距 L 與傾斜視線幾何原理圖',
      caption: '利用望遠鏡十字絲之上下視距絲夾距 L = a − b，配合垂直角 α（或天頂距 z），一次求得水平距離 D 與高程差 Δh。',
      svg: (() => {
        let s = '';
        // 地面斜坡與測站 A、目標點 B
        s += polygon([[20, 200], [540, 124], [540, 218], [20, 218]], { tone: 'muted', fill: 'muted', soft: true, w: 1.4 });
        const ax = 75, ay = 192; // A 地面點
        const ix = 75, iy = 136; // 儀器中心 i = 1.45 m
        const bx = 456, by = 136; // B 地面點
        // 儀器與三腳架
        s += line(ax, ay, ix - 14, ay, { tone: 'ink', w: 1.5 });
        s += line(ix, iy, ax - 14, ay, { tone: 'ink', w: 1.8 }) + line(ix, iy, ax + 14, ay, { tone: 'ink', w: 1.8 });
        s += circle(ix, iy, 6, { tone: 'blue', fill: 'blue', soft: false });
        s += dim(ax - 24, iy, ax - 24, ay, '儀高 i', { offset: -16, tone: 'blue', size: 11 });

        // B 點水準尺
        const staffTop = 26;
        s += rect(bx - 5, staffTop, 10, by - staffTop, { tone: 'ink', fill: 'amber', soft: true, w: 1.6 });
        // 上中下三絲視線
        const uY = 42, mY = 72, lY = 102;
        s += line(ix, iy, bx - 5, uY, { tone: 'blue', w: 1.2, dash: 'dash' });
        s += line(ix, iy, bx - 5, mY, { tone: 'red', w: 2 });
        s += line(ix, iy, bx - 5, lY, { tone: 'blue', w: 1.2, dash: 'dash' });
        // 水平基準線
        s += line(ix, iy, bx + 30, iy, { tone: 'muted', w: 1.3, dash: 'center' });
        s += angle(ix, iy, 68, 0, 9.5, '仰角 α', { tone: 'red', labelR: 88 });

        // 尺上標註 a, m, b 與夾距 L
        s += text(bx + 12, uY + 3, '上絲 a', { size: 11, tone: 'blue', weight: 'bold' });
        s += text(bx + 12, mY + 3, '中絲 z_m (v)', { size: 11, tone: 'red', weight: 'bold' });
        s += text(bx + 12, lY + 3, '下絲 b', { size: 11, tone: 'blue', weight: 'bold' });
        s += dim(bx + 68, uY, bx + 68, lY, '夾距 L = a−b', { offset: 16, tone: 'blue', size: 11 });
        s += dim(bx + 68, mY, bx + 68, by, '中絲高 v', { offset: 16, tone: 'amber', size: 11 });
        s += dim(bx - 16, mY, bx - 16, iy, 'V = ½KL sin 2α', { offset: -42, tone: 'red', size: 11 });
        s += dim(ix, 210, bx, 210, '水平距離 D = K·L·cos²α + C·cos α', { offset: 4, tone: 'ink', size: 11.5 });

        return svg(560, 232, s);
      })(),
      takeaways: [
        '內對光望遠鏡之**視距乘常數 $K = 100$、視距加常數 $C = 0$**；當視線水平（$\\alpha = 0^\\circ$）時，水平距離 $D = 100 \\times (a - b)$。',
        '當視線傾斜仰角為 $\\alpha$（或天頂距 $z = 90^\\circ - \\alpha$）時：**水平距離 $D = K L \\cos^2\\alpha = K L \\sin^2 z$**；**垂直高差分量 $V = \\frac{1}{2} K L \\sin 2\\alpha = D \\tan\\alpha$**。',
        '目標點高程公式：**$H_B = H_A + i + V - v$**（其中 $i$ 為儀器高，$v$ 為中絲讀數；下絲加、上絲加之檢核：$a + b = 2v$）。',
      ],
    },
    {
      concept: '三角高程',
      kind: 'chart',
      title: '長距離三角高程測量之地球曲率差 c₁、大氣折光差 c₂ 與兩差聯合修正量 c 曲線',
      caption: '隨水平距離 D (km) 增加，地球曲率使尺讀數偏大 (+0.0785 D²)，大氣折光使視線下彎約抵消 1/7 (−0.0110 D²)，聯合修正量 c = +0.0675 D² (m)。',
      svg: lineChart({
        w: 520,
        h: 260,
        x: { min: 0, max: 4, ticks: [0, 1, 2, 3, 4], label: '觀測水平距離 D (km)' },
        y: { min: -0.3, max: 1.4, ticks: [-0.2, 0, 0.4, 0.8, 1.2], label: '高程修正量 (m)', fmt: (v) => v.toFixed(2) },
        series: [
          {
            name: '地球曲率差 c₁ = +0.0785 D² (正值)',
            tone: 'blue',
            points: [[0, 0], [1, 0.0785], [2, 0.314], [3, 0.7065], [4, 1.256]],
            dash: 'dash',
          },
          {
            name: '兩差聯合修正 c = +0.0675 D² (實務採用)',
            tone: 'red',
            points: [[0, 0], [1, 0.0675], [2, 0.27], [3, 0.6075], [4, 1.08]],
            markers: true,
          },
          {
            name: '大氣折光差 c₂ = −0.0110 D² (負值)',
            tone: 'green',
            points: [[0, 0], [1, -0.011], [2, -0.044], [3, -0.099], [4, -0.176]],
            dash: 'dot',
          },
        ],
        overlay: (f) =>
          line(f.box.left, f.Y(0), f.box.left + f.box.width, f.Y(0), { tone: 'muted', w: 1.2 }) +
          point(f, 2, 0.27, 'D = 2 km 時 c = +0.27 m', { tone: 'red', dx: -30, dy: -10 }),
      }),
      table: {
        headers: ['觀測距離 D (km)', '地球曲率差 c₁ (m)', '大氣折光差 c₂ (m)', '兩差聯合修正 c = c₁+c₂ (m)'],
        rows: [
          ['0.5 km (500 m)', '+0.020 m (+2.0 cm)', '−0.003 m', '+0.017 m (+1.7 cm)'],
          ['1.0 km (1000 m)', '+0.0785 m (+7.85 cm)', '−0.0110 m', '+0.0675 m (+6.75 cm，必背常數！)'],
          ['2.0 km (2000 m)', '+0.314 m', '−0.044 m', '+0.270 m (+27.0 cm)'],
          ['3.0 km (3000 m)', '+0.707 m', '−0.099 m', '+0.608 m (+60.8 cm)'],
        ],
      },
      takeaways: [
        '必背公式：當距離 $D$ 以**公里 ($\\text{km}$)** 為單位時，**兩差聯合修正量 $c = (1 - k)\\frac{D^2}{2R} \\approx +0.0675 D^2\\text{ (m)}$**（其中大氣折光係數 $k \\approx 0.14$，地球半徑 $R \\approx 6370\\text{ km}$）。',
        '單向三角高程完整公式：$H_B = H_A + D\\tan\\alpha + i - v + 0.0675 D^2$；若採取**兩端對向觀測取平均**，則地球曲率差、大氣折光差與儀器誤差可自動抵消！',
      ],
    },
    {
      concept: '視距測量',
      kind: 'table',
      title: '間接距離與不可達高程測量四大典型幾何解法與公式總表',
      caption: '針對隔河測距、懸崖塔頂測高與視距斜距換算，整理現場基線佈設與三角函數計算公式。',
      table: {
        headers: ['測量情境', '已知觀測量', '核心幾何計算公式', '精度控制與檢核要點'],
        rows: [
          ['水平視距測量 (α = 0°)', '上絲 a、下絲 b (夾距 L=a−b)', 'D = K·L + C = 100·L (內對光 C=0)', '視距絲讀數誤差會被乘常數 K 放大 100 倍'],
          ['傾斜視距測量 (仰角 α)', '夾距 L、垂直角 α、儀高 i、中絲 v', 'D = 100·L·cos²α；Δh = 50·L·sin 2α + i − v', '檢核上絲 + 下絲 = 2 × 中絲，防止讀尺過失'],
          ['同側垂直平面測不可達高程', '水平基線長 b (前後兩站距離)、兩站仰角 α₁, α₂', 'D₁ = b / (1 − tan α₁ / tan α₂)；h = b·tan α₁·tan α₂ / (tan α₂ − tan α₁)', '兩測站高程若不同，應先用水準尺調至同一視線高 HI'],
          ['隔河不可達距離 (正弦定理)', '河岸基線長 c 及兩端水平夾角 A, B', '先算對角 C = 180°−(A+B)，再由 D = c · sin A / sin C 求解', '基線夾角宜接近 60°~90° 良態三角形，避免過小銳角誤差放大'],
        ],
      },
      takeaways: [
        '同一直線上前後兩站（相距 $b$）觀測高塔仰角 $\\alpha_1$（遠站）與 $\\alpha_2$（近站）時，塔高距視準線之高差速算公式為 **$\\Delta H = \\frac{b}{\\cot\\alpha_1 - \\cot\\alpha_2}$**。',
        '視距測量距離精度約僅 $1/300 \\sim 1/500$，主要誤差來源為**標尺分劃估讀誤差（被乘常數 $100$ 倍放大）**與近地面大氣折光跳動，故僅用於地形碎部點測量。',
      ],
    },
    {
      concept: '雙高法：照準標尺上兩個高度求水平距離與高差',
      kind: 'diagram',
      title: '雙高法：兩個已知覘標高 v₁、v₂ 與兩個垂直角求水平距離 D',
      caption: 'v₂ − v₁ = D(tanα₂ − tanα₁) ⇒ D = (v₂ − v₁) / (tanα₂ − tanα₁)；例：2.000 / (0.05241 − 0.03492) ≈ 114.4 m。',
      svg: (() => {
        let s = '';
        const O: [number, number] = [90, 160];
        s += ground(20, 200, 196) + ground(380, 540, 176);
        s += line(200, 196, 380, 176, { tone: 'muted', w: 1.4 });
        s += instrument(O[0], O[1] + 4, 'blue');
        s += line(O[0], O[1], 430, O[1], { tone: 'muted', w: 1.1, dash: 'dash' });
        s += staff(430, 176, 140, '標尺');
        const t1: [number, number] = [430, 136];
        const t2: [number, number] = [430, 56];
        s += dot(t1[0], t1[1], 4.5, 'green') + dot(t2[0], t2[1], 4.5, 'red');
        s += line(O[0], O[1], t1[0], t1[1], { tone: 'green', w: 1.8 }) + line(O[0], O[1], t2[0], t2[1], { tone: 'red', w: 1.8 });
        s += text(444, t1[1] + 4, 'v₁ = 1.000 m', { tone: 'green', size: 12, weight: 'bold' });
        s += text(444, t2[1] + 4, 'v₂ = 3.000 m', { tone: 'red', size: 12, weight: 'bold' });
        s += angle(O[0], O[1], 120, 0, 4.0, 'α₁', { tone: 'green', labelR: 140 });
        s += angle(O[0], O[1], 80, 0, 17.0, 'α₂', { tone: 'red', labelR: 98 });
        s += dim(90, 214, 430, 214, '水平距離 D', { offset: 0 });
        return svg(560, 232, s);
      })(),
      takeaways: [
        '兩個垂直角相差越大，求得的距離越可靠；兩角太接近時誤差會被放大。',
        '求得 D 後，高差 h = D·tanα₁ + i − v₁（i 為儀器高）。',
      ],
    },
  ],

  'distance-and-angle': [
    {
      concept: '距離測量方法與鋼卷尺五大修正公式',
      kind: 'diagram',
      title: '鋼卷尺精密量距五大系統誤差修正與傾斜/懸空垂曲幾何示意圖',
      caption: '量得斜距 L 後，需依序進行尺長、溫度、拉力、垂曲（懸空負修正）與傾斜（高差負修正）五項系統誤差修正。',
      svg: (() => {
        let s = '';
        // 左側：傾斜修正幾何三角形 + 懸空垂曲弧線
        const x1 = 44, y1 = 158, x2 = 274, y2 = 66;
        s += line(x1, y1, x2, y1, { tone: 'blue', w: 2.2 });
        s += line(x2, y1, x2, y2, { tone: 'amber', w: 2 });
        s += rightAngle(x2, y1, 90, 180, 10, 'muted');
        s += line(x1, y1, x2, y2, { tone: 'ink', w: 2 });
        // 懸空垂曲曲線 (Sag)
        s += path(`M${x1},${y1} Q${(x1 + x2) / 2 + 12},${(y1 + y2) / 2 + 28} ${x2},${y2}`, { tone: 'red', w: 2, dash: 'dash' });

        s += dot(x1, y1, 4, 'ink') + text(x1 - 10, y1 + 4, 'A', { anchor: 'end', weight: 'bold' });
        s += dot(x2, y2, 4, 'ink') + text(x2 + 8, y2, 'B', { weight: 'bold' });
        s += angle(x1, y1, 56, 0, 21.8, 'θ', { tone: 'ink', labelR: 70 });

        s += text((x1 + x2) / 2 - 14, (y1 + y2) / 2 - 10, '斜距 L', { size: 12, weight: 'bold' });
        s += text((x1 + x2) / 2 + 22, (y1 + y2) / 2 + 28, '懸空垂曲 (C_s 恆為負)', { size: 11, tone: 'red', weight: 'bold' });
        s += text((x1 + x2) / 2, y1 + 20, '水平距離 D = L − h²/(2L)', { anchor: 'middle', size: 12, tone: 'blue', weight: 'bold' });
        s += text(x2 + 10, (y1 + y2) / 2 + 4, '高差 h', { size: 12, tone: 'amber', weight: 'bold' });

        // 右側：五大修正公式記憶卡片
        s += box(332, 18, 212, 194, [
          '鋼卷尺五大修正公式 (D = L + ΣC)',
          '1. 尺長：C_l = (Δl / l₀) · L',
          '   口訣：「量距尺長正、放樣尺長負」',
          '2. 溫度：C_t = α · (T − T₀) · L',
          '   (鋼 α ≈ 1.15×10⁻⁵ /°C)',
          '3. 拉力：C_p = (P − P₀)·L / (A·E)',
          '4. 垂曲：C_s = −w²L³ / (24 P²) [恆負]',
          '5. 傾斜：C_h = −h² / (2L) [恆負]',
        ], { tone: 'blue', size: 11 });

        return svg(560, 226, s);
      })(),
      takeaways: [
        '尺長修正正負號必考口訣：**「尺比標準長（實長 $> l_0$），量距讀數偏小故修正為正 ($+$)；放樣定樁時則相反為負 ($-$)。」**',
        '**垂曲修正 $C_s = -\\frac{w^2 L^3}{24 P^2} = -\\frac{W^2 L}{24 P^2}$** 與 **傾斜修正 $C_h = -\\frac{h^2}{2L}$** 兩者永遠使尺讀數偏大，因此**修正量恆為負值 ($-$)**！',
        '一般鋼卷尺熱膨脹係數 $\\alpha \\approx 1.15 \\times 10^{-5}\\text{ /^\\circ C}$，意味著溫度每變化約 **$8.7^\\circ\\text{C}$**，量距就會產生 $1/10,000$ 的相對誤差。',
      ],
    },
    {
      concept: '光電測距儀 (EDM) & 全測站儀原理與加乘常數',
      kind: 'chart',
      title: '光電測距儀 EDM 精度公式 ±(a + b·ppm·D) 與傳統量距之標準誤差曲線比較',
      caption: 'EDM 全測站儀標稱精度 ±(2 mm + 2 ppm × D) 隨距離呈極平緩線性微增，在百公尺以上精度遠勝鋼卷尺與視距測量。',
      svg: lineChart({
        w: 520,
        h: 260,
        x: { min: 0, max: 1000, ticks: [0, 200, 400, 600, 800, 1000], label: '量測距離 D (m)' },
        y: { min: 0, max: 12, ticks: [0, 2, 4, 6, 8, 10, 12], label: '距離標準誤差 σ_D (mm)' },
        series: [
          {
            name: 'EDM ±(2 mm + 2 ppm·D)',
            tone: 'blue',
            points: [[0, 2.0], [200, 2.4], [400, 2.8], [600, 3.2], [800, 3.6], [1000, 4.0]],
            markers: true,
          },
          {
            name: 'EDM ±(3 mm + 5 ppm·D)',
            tone: 'green',
            points: [[0, 3.0], [200, 4.0], [400, 5.0], [600, 6.0], [800, 7.0], [1000, 8.0]],
            dash: 'dash',
            markers: true,
          },
          {
            name: '精密鋼卷尺量距 (誤差 ∝ √D)',
            tone: 'red',
            points: [[0, 0], [100, 3.5], [200, 5.0], [400, 7.1], [600, 8.7], [800, 10.0], [1000, 11.2]],
            dash: 'dot',
          },
        ],
        overlay: (f) =>
          point(f, 1000, 4.0, 'D=1 km 時 σ = 2 + 2×1 = ±4 mm', { tone: 'blue', dx: -40, dy: -10 }),
      }),
      table: {
        headers: ['測距距離 D', 'EDM ±(2mm + 2ppm)', 'EDM ±(3mm + 5ppm)', 'EDM 相對精度 (以 2mm+2ppm 計)'],
        rows: [
          ['100 m (0.1 km)', '±2.2 mm', '±3.5 mm', '1 / 45,450'],
          ['500 m (0.5 km)', '±3.0 mm', '±5.5 mm', '1 / 166,600'],
          ['1,000 m (1.0 km)', '±4.0 mm', '±8.0 mm', '1 / 250,000 (距離愈長相對精度愈高)'],
          ['2,000 m (2.0 km)', '±6.0 mm', '±13.0 mm', '1 / 333,300'],
        ],
      },
      takeaways: [
        'EDM 測距精度表示式 **$\\pm(a\\text{ mm} + b\\text{ ppm} \\times D)$**：其中 **$a$ 為固定誤差**（來自相位測定、儀器對中與稜鏡加常數誤差，與距離無關）；**$b\\text{ ppm}$ 為比例誤差**（$1\\text{ ppm} = 10^{-6} = 1\\text{ mm/km}$，來自大氣溫壓折射率與晶體振盪頻率偏差）。',
        '統測必考秒算：標稱精度 $\\pm(3\\text{ mm} + 2\\text{ ppm})$ 量測 $D = 2\\text{ km}$ 時，中誤差 $= \\pm(3 + 2 \\times 2) = \\mathbf{\\pm 7\\text{ mm}}$！',
      ],
    },
    {
      concept: '經緯儀角度測量原理與觀測方法 SOP',
      kind: 'table',
      title: '經緯儀水平角觀測法（單角法、方向法、複測法）與垂直角正倒鏡公式比較表',
      caption: '對照不同水平角觀測方法之適用情境，以及天頂距式經緯儀正倒鏡計算垂直角與指標差之核心公式。',
      table: {
        headers: ['觀測方法 / 項目', '操作程序與幾何特徵', '核心計算與檢核公式', '消除誤差與工程適用情境'],
        rows: [
          ['方向法 (Direction Method)', '一測回內以正鏡順時針依序照準 A→B→C→D，再倒鏡逆時針照準歸零', '兩方向夾角 = 終方向平均值 − 始方向平均值', '3 個以上多目標控制網（三角測量、精密導線）標準方法'],
          ['複測法 (Repetition Method)', '利用水平微動與複測機構，將同一單角連續累加觀測 n 次後除以 n', '單角值 β = (第 n 次終讀數 − 初讀數) / n', '將度盤分劃與讀數誤差縮小為 1/n；適用於單一角度高精度量測'],
          ['天頂距 (Zenith Angle) 垂直角', '0° 在正天頂；水平視線正鏡 Z_L = 90°、倒鏡 Z_R = 270°', '仰俯角 α = 90° − Z_L = Z_R − 270° = ½(Z_R − Z_L − 180°)', '正常無誤差時：正鏡 + 倒鏡 Z_L + Z_R = 360°'],
          ['垂直度盤指標差 i_v', '垂直度盤零點偏移，導致 Z_L + Z_R ≠ 360°', '指標差 x = ½ [360° − (Z_L + Z_R)]；真天頂距 Z = Z_L + x', '採取正鏡、倒鏡觀測取平均，即可完全消除垂直度盤指標差！'],
        ],
      },
      takeaways: [
        '天頂距式經緯儀必背黃金恆等式：**正鏡天頂距 $Z_L +$ 倒鏡天頂距 $Z_R = 360^\\circ$**；若不等於 $360^\\circ$，差值的一半即為**指標差**，取正倒鏡平均仰角 $\\alpha = \\frac{(90^\\circ - Z_L) + (Z_R - 270^\\circ)}{2}$ 即可完全消除！',
        '水平角觀測每多做一個測回，應將起始度盤位置變換 **$180^\\circ / m$**（$m$ 為測回數），以均勻分配並消除水平度盤分劃刻線不均誤差。',
      ],
    },
    {
      concept: '角度測量之認識與直線定向',
      kind: 'diagram',
      title: '三種基準北：真北、磁北、方格北與磁偏角 δ、子午線收斂角 γ（角度示意放大）',
      caption: '磁北與真北的夾角稱磁偏角 δ，方格北與真北的夾角稱子午線收斂角 γ；方位角一律由所選基準北順時針量起。',
      svg: (() => {
        let s = '';
        const O: [number, number] = [220, 200];
        const tn = polar(O[0], O[1], 160, 90);
        const mn = polar(O[0], O[1], 150, 102);
        const gn = polar(O[0], O[1], 150, 84);
        s += arrow(O[0], O[1], tn[0], tn[1], { tone: 'ink', w: 2.4 });
        s += text(tn[0], tn[1] - 8, '真北', { anchor: 'middle', weight: 'bold' });
        s += arrow(O[0], O[1], mn[0], mn[1], { tone: 'red', w: 2.2 });
        s += text(mn[0] - 6, mn[1] - 6, '磁北', { anchor: 'end', tone: 'red', weight: 'bold' });
        s += arrow(O[0], O[1], gn[0], gn[1], { tone: 'blue', w: 2.2 });
        s += text(gn[0] + 6, gn[1] - 4, '方格北', { tone: 'blue', weight: 'bold' });
        s += angle(O[0], O[1], 110, 90, 102, 'δ', { tone: 'red', labelR: 124 });
        s += angle(O[0], O[1], 96, 84, 90, 'γ', { tone: 'blue', labelR: 108 });
        const P = polar(O[0], O[1], 150, 26);
        s += arrow(O[0], O[1], P[0], P[1], { tone: 'green', w: 2.4 });
        s += text(P[0] - 4, P[1] - 10, '直線 AB', { tone: 'green', weight: 'bold', anchor: 'end' });
        s += angle(O[0], O[1], 60, 26, 90, '真方位角', { tone: 'green', labelR: 82 });
        s += dot(O[0], O[1], 4) + text(O[0] - 8, O[1] + 14, 'A', { weight: 'bold', anchor: 'end' });
        s += box(400, 40, 150, 120, ['換算', '真方位角', '= 磁方位角 + δ', '（磁北偏東 +、偏西 −）', '例：120° − 4° = 116°'], { tone: 'violet', size: 11.5 });
        return svg(560, 220, s);
      })(),
      takeaways: [
        '方位角由北方順時針量 0°–360°；換算基準北時，先畫出三種北的相對位置再加減角度。',
        '圖中角度為示意放大；實際的子午線收斂角在臺灣通常很小，磁偏角則依地點與年份而變。',
      ],
    },
    {
      concept: '垂直角測量：天頂距、指標差與正倒鏡計算',
      kind: 'diagram',
      title: '垂直角 α 與天頂距 Z 的關係：Z = 90° − α',
      caption: '望遠鏡由水平視線向上轉 α 照準目標，同一條視線與天頂方向的夾角就是天頂距 Z；現代儀器多直接讀 Z。',
      svg: (() => {
        let s = '';
        const O: [number, number] = [150, 180];
        s += instrument(O[0], O[1] + 4, 'blue');
        s += line(O[0], O[1], 340, O[1], { tone: 'muted', w: 1.2, dash: 'dash' });
        s += text(338, O[1] - 6, '水平視線', { tone: 'muted', size: 11.5, anchor: 'end' });
        s += line(O[0], O[1], O[0], 30, { tone: 'muted', w: 1.2, dash: 'dash' });
        s += text(O[0] + 6, 38, '天頂', { tone: 'muted', size: 11.5 });
        const T = polar(O[0], O[1], 300, 25);
        s += arrow(O[0], O[1], T[0], T[1], { tone: 'red', w: 2.4 });
        s += dot(T[0], T[1], 5, 'red') + text(T[0] - 6, T[1] - 10, '目標', { tone: 'red', weight: 'bold', anchor: 'end' });
        s += angle(O[0], O[1], 90, 0, 25, 'α（垂直角）', { tone: 'red', labelR: 128 });
        s += angle(O[0], O[1], 60, 25, 90, 'Z（天頂距）', { tone: 'blue', labelR: 84 });
        s += box(360, 150, 190, 60, ['正倒鏡消除指標差', 'Z = (L − R + 360°) / 2'], { tone: 'violet', size: 12 });
        return svg(560, 226, s);
      })(),
      takeaways: [
        '仰角 α 為正、俯角為負；天頂距 Z 一律由天頂量起，所以 Z < 90° 為仰角、Z > 90° 為俯角。',
        '只用正鏡讀數會把指標差帶入結果；正倒鏡取平均才能消除。',
      ],
    },
    {
      concept: '稜鏡加常數之測定（三點法）',
      kind: 'diagram',
      title: '三點法測定稜鏡常數：K = d_AC − d_AB − d_BC',
      caption: 'A、B、C 三點位於同一直線且 B 在中間，分別測 d_AB、d_BC、d_AC；每段都含同一常數 K，由幾何關係即可解出 K。',
      svg: (() => {
        let s = '';
        s += line(50, 100, 510, 100, { tone: 'muted', w: 1.4 });
        [[50, 'A'], [230, 'B'], [510, 'C']].forEach(([x, n]) => { s += dot(x as number, 100, 5.5) + text(x as number, 86, n as string, { anchor: 'middle', weight: 'bold' }); });
        s += dim(50, 100, 230, 100, 'd_AB = 50.012 m', { offset: 24 });
        s += dim(230, 100, 510, 100, 'd_BC = 70.015 m', { offset: 24 });
        s += dim(50, 100, 510, 100, 'd_AC = 120.000 m', { offset: -36, textOffset: -6 });
        s += text(280, 168, 'K = 120.000 − 50.012 − 70.015 = −0.027 m（−27 mm）', { anchor: 'middle', weight: 'bold', tone: 'red' });
        return svg(560, 186, s);
      })(),
      takeaways: [
        '三點必須嚴格共線，且 B 位於 A、C 之間，否則公式不成立。',
        '更換稜鏡型號後要重新設定稜鏡常數，否則每段距離都會帶入相同的系統誤差。',
      ],
    },
  ],

  'elevation-and-leveling': [
    {
      concept: '水準測量記錄表：視線高法 (HI Method) 完整計算與檢核',
      kind: 'diagram',
      title: '直接水準測量幾何原理：後視 (BS)、視線高 (HI)、前視 (FS) 與轉點 (TP) 關係圖',
      caption: '由已知高程水準點 BM1 出發，讀後視 BS 求得視線高 HI = H_A + BS，再減去前視 FS 得未知點或轉點 TP 高程 H_B = HI − FS。',
      svg: (() => {
        let s = '';
        // 地形剖面曲線
        s += polygon([[20, 195], [140, 178], [290, 142], [430, 114], [540, 102], [540, 218], [20, 218]], { tone: 'muted', fill: 'muted', soft: true, w: 1.5 });
        // 海平面基準線 H = 0
        s += line(20, 218, 540, 218, { tone: 'blue', w: 2 });
        s += text(532, 211, '高程基準面 (TWVD2001 基隆平均海水面 H = 0 m)', { anchor: 'end', size: 10.5, tone: 'blue', weight: 'bold' });

        // BM1 (A點)、TP1 (B點轉點)、BM2 (C點)
        const ax = 68, ay = 186;
        const bx = 290, by = 142;
        const cx = 500, cy = 106;

        // 第一站水準儀 I1 (HI_1 = 96)
        const i1x = 178, hi1 = 104;
        s += line(i1x, hi1, i1x - 10, 162, { tone: 'ink', w: 1.6 }) + line(i1x, hi1, i1x + 10, 162, { tone: 'ink', w: 1.6 });
        s += rect(i1x - 12, hi1 - 4, 24, 8, { tone: 'blue', fill: 'blue', soft: false, rx: 2 });
        s += line(ax, hi1, bx, hi1, { tone: 'red', w: 1.8, dash: 'dash' });
        s += text(i1x, hi1 - 10, '視線高 HI₁ = H_A + BS₁', { anchor: 'middle', size: 11, tone: 'red', weight: 'bold' });

        // 第二站水準儀 I2 (HI_2 = 52)
        const i2x = 395, hi2 = 54;
        s += line(i2x, hi2, i2x - 10, 122, { tone: 'ink', w: 1.6 }) + line(i2x, hi2, i2x + 10, 122, { tone: 'ink', w: 1.6 });
        s += rect(i2x - 12, hi2 - 4, 24, 8, { tone: 'blue', fill: 'blue', soft: false, rx: 2 });
        s += line(bx, hi2, cx, hi2, { tone: 'red', w: 1.8, dash: 'dash' });
        s += text(i2x, hi2 - 10, '視線高 HI₂ = H_TP + BS₂', { anchor: 'middle', size: 11, tone: 'red', weight: 'bold' });

        // 三支水準尺
        s += rect(ax - 4, hi1 - 16, 8, ay - (hi1 - 16), { tone: 'ink', fill: 'amber', soft: true, w: 1.5 });
        s += rect(bx - 4, hi2 - 14, 8, by - (hi2 - 14), { tone: 'ink', fill: 'amber', soft: true, w: 1.5 });
        s += rect(cx - 4, hi2 - 14, 8, cy - (hi2 - 14), { tone: 'ink', fill: 'amber', soft: true, w: 1.5 });

        s += dim(ax - 12, hi1, ax - 12, ay, 'BS₁ (後視)', { offset: -18, tone: 'green', size: 10.5 });
        s += dim(bx + 12, hi1, bx + 12, by, 'FS₁ (前視)', { offset: 18, tone: 'amber', size: 10.5 });
        s += dim(bx - 12, hi2, bx - 12, by, 'BS₂ (後視)', { offset: -18, tone: 'green', size: 10.5 });
        s += dim(cx + 12, hi2, cx + 12, cy, 'FS₂ (前視)', { offset: 18, tone: 'amber', size: 10.5 });

        s += pill(ax, ay + 14, 'BM₁ (已知)', 'blue', 10.5);
        s += pill(bx, by + 14, 'TP₁ (轉點・墊尺鈑)', 'amber', 10.5);
        s += pill(cx, cy + 14, 'BM₂ (未知)', 'green', 10.5);

        return svg(560, 232, s);
      })(),
      takeaways: [
        '直接水準測量核心公式：**後視減前視等於高程差 ($\\Delta h = BS - FS = H_{\\text{前}} - H_{\\text{後}}$)**；總高程差 $\\Sigma BS - \\Sigma FS = H_{\\text{終}} - H_{\\text{始}}$。',
        '**轉點 (Turning Point, TP)** 是傳遞高程的中繼樞紐，該點必須**先作為前視 (FS) 讀尺，待儀器搬站後再於同一點作為後視 (BS) 讀尺**，現場必須放置堅固的**尺墊（龜殼鈑）**防下陷。',
        '**間視點 (Intermediate Sight, IS / IFS)** 僅供測繪地形碎部高程，不參與傳遞高程，因此**不列入 $\\Sigma BS - \\Sigma FS$ 之算術檢核**。',
      ],
    },
    {
      concept: '水準測量記錄表：視線高法',
      kind: 'chart',
      title: '各等級水準測量容許閉合差規範 (±C·√K mm) 隨路線長 K (km) 變化曲線',
      caption: '水準測量誤差隨測站數（路線公里數 K）之平方根成正比累積，因此容許閉合差公式皆為 ±C√K (mm)。',
      svg: lineChart({
        w: 520,
        h: 260,
        x: { min: 0, max: 16, ticks: [0, 1, 4, 9, 16], label: '水準路線總長 K (km)' },
        y: { min: 0, max: 100, ticks: [0, 20, 40, 60, 80, 100], label: '容許高程閉合差 |f_h| (mm)' },
        series: [
          {
            name: '一般工地普通水準 (±20√K mm)',
            tone: 'red',
            points: [[0, 0], [1, 20], [4, 40], [9, 60], [16, 80]],
            markers: true,
          },
          {
            name: '公共工程三等水準 (±12√K mm)',
            tone: 'amber',
            points: [[0, 0], [1, 12], [4, 24], [9, 36], [16, 48]],
            markers: true,
          },
          {
            name: '二等精密水準 (±8√K mm)',
            tone: 'blue',
            points: [[0, 0], [1, 8], [4, 16], [9, 24], [16, 32]],
            dash: 'dash',
          },
          {
            name: '一等國家基準水準 (±3√K mm)',
            tone: 'green',
            points: [[0, 0], [1, 3], [4, 6], [9, 9], [16, 12]],
            dash: 'dot',
          },
        ],
        overlay: (f) =>
          point(f, 4, 24, 'K = 4 km 時三等容許 ±24 mm', { tone: 'amber', dx: 8, dy: -8 }),
      }),
      table: {
        headers: ['水準測量等級', '容許閉合差公式 (mm)', '路線 K = 4 km 容許值', '高程閉合差改正數分配原則'],
        rows: [
          ['一等精密水準測量', '±3 √K mm', '±6.0 mm', '與各測段距離 K_i (或測站數 n_i) 成正比，且改正符號與閉合差 f_h 相反'],
          ['二等水準測量', '±8 √K mm', '±16.0 mm', 'v_i = −f_h × (K_i / ΣK)'],
          ['三等工程水準測量', '±12 √K mm (常考！)', '±24.0 mm', '閉合水準網實測 ΣBS − ΣFS = f_h (理論應為 0)'],
          ['四等 / 普通工地水準', '±20 √K ~ ±24 √K mm', '±40.0 ~ ±48.0 mm', '附合水準路線 f_h = (H_終算 − H_終知)'],
        ],
      },
      takeaways: [
        '高程閉合差計算：**閉合水準路線 $f_h = \\Sigma BS - \\Sigma FS$**（理論值為 $0$）；**附合水準路線 $f_h = (\\Sigma BS - \\Sigma FS) - (H_{\\text{終知}} - H_{\\text{始知}})$**。',
        '平差分配原則：水準測量誤差與距離（或測站數）成正比，故各測段改正數 **$v_i = -f_h \\times \\frac{L_i}{\\Sigma L}$**（或 $-f_h \\times \\frac{n_i}{\\Sigma n}$）。',
      ],
    },
    {
      concept: '水準儀 i 角誤差 (視準軸不平行水準管軸) 兩點法 (Peg Test) 檢驗與校正',
      kind: 'table',
      title: '視線高法 vs 高差法水準手簿檢核與木樁法 (Peg Test) i 角誤差校正比較表',
      caption: '整理兩大水準手簿記錄格式之算術檢核恆等式，以及每站前後視距相等所能消除之系統誤差。',
      table: {
        headers: ['方法 / 檢驗項目', '核心計算步驟', '算術檢核恆等式', '工程優勢與誤差消除機制'],
        rows: [
          ['視線高法 (HI Method)', 'HI = H + BS；未知點高程 H_i = HI − FS (或 IS)', 'ΣBS − ΣFS = H_末 − H_初 (僅算轉點與起終點)', '同站有多個間視點 (IS) 放樣或測地形斷面時，共用同一 HI 最迅速'],
          ['高差法 (Rise & Fall)', '逐點相鄰相減 Δh = BS − FS (正填升部 +、負填降部 −)', 'ΣBS − ΣFS = Σ(+) − Σ(−) = H_末 − H_初', '具備「雙重算術檢核」，能確保每一中间點高程加減皆無誤'],
          ['前後視距離相等 (d_BS = d_FS)', '每站架設於前後尺中點，使後視距 = 前視距', 'Δh_真 = (BS−e) − (FS−e) = BS − FS (誤差 e 相同互消)', '同時完全消除：(1)視準軸偏斜 i 角誤差、(2)地球曲率差、(3)大氣折光差'],
          ['木樁法 / 兩點法 (Peg Test)', '先架中點求真高差 Δh_真，再移近一尺旁讀近尺 b₁ 與遠尺 a₂', '遠尺應有正確讀數 a₂* = b₁ − Δh_真；傾角 i″ = [(a₂−a₂*)/D] × 206265″', '調整十字絲環上下校正螺絲，使橫絲直接對準遠尺正確讀數 a₂*'],
        ],
      },
      takeaways: [
        '必考黃金觀念：水準測量每一站保持**「前後視距離相等」**，即可一次消除 **(1) 水準儀視準軸不平行水準管軸之 $i$ 角誤差**、**(2) 地球曲率差**、**(3) 大氣折光差** 三大系統誤差！',
        '定樁法（木樁法 Peg Test）口訣：**「中點設站求真高差，近端設站求正確遠尺讀數」**。',
      ],
    },
    {
      concept: '對向水準測量：跨越河谷的高差觀測',
      kind: 'diagram',
      title: '對向水準測量：兩岸各設站一次，取平均消除 i 角與兩差',
      caption: '第一站設在 A 岸近處（讀 a₁、b₁），第二站設在 B 岸近處（讀 a₂、b₂）；兩次高差的誤差大小相近、符號相反，平均後抵消。',
      svg: (() => {
        let s = '';
        s += ground(20, 200, 180) + ground(360, 540, 170);
        s += path('M200,180 C230,196 250,204 280,204 C310,204 330,196 360,170', { tone: 'muted', w: 1.4 });
        s += path('M214,196 Q240,188 262,196 T310,196 T346,188', { tone: 'blue', w: 1.6 });
        s += text(280, 222, '河流', { anchor: 'middle', tone: 'blue', size: 12, weight: 'bold' });
        s += staff(60, 180, 96, 'A 尺');
        s += staff(500, 170, 96, 'B 尺');
        s += instrument(110, 128, 'red');
        s += instrument(450, 118, 'green');
        s += line(110, 124, 60, 124, { tone: 'red', w: 1.4 }) + line(110, 124, 500, 124, { tone: 'red', w: 1.2, dash: 'dash' });
        s += line(450, 114, 500, 114, { tone: 'green', w: 1.4 }) + line(450, 114, 60, 114, { tone: 'green', w: 1.2, dash: 'dash' });
        s += text(72, 140, 'a₁', { tone: 'red', weight: 'bold' }) + text(486, 140, 'b₁', { tone: 'red', weight: 'bold', anchor: 'end' });
        s += text(72, 108, 'a₂', { tone: 'green', weight: 'bold' }) + text(486, 108, 'b₂', { tone: 'green', weight: 'bold', anchor: 'end' });
        s += text(110, 52, '第 1 站（A 岸近處）', { tone: 'red', size: 12, weight: 'bold', anchor: 'middle' });
        s += text(450, 52, '第 2 站（B 岸近處）', { tone: 'green', size: 12, weight: 'bold', anchor: 'middle' });
        s += text(280, 30, 'ΔH_AB = [(a₁ − b₁) + (a₂ − b₂)] / 2', { anchor: 'middle', weight: 'bold' });
        return svg(560, 236, s);
      })(),
      takeaways: [
        '兩站都以 A 尺為後視、B 尺為前視計算「後視 − 前視」，兩次高差符號才一致。',
        '例：Δh₁ = +0.319 m、Δh₂ = +0.313 m，ΔH = +0.316 m；兩次差值 0.006 m 反映 i 角與兩差的影響。',
      ],
    },
    {
      concept: '方格水準測量與挖填土方計算',
      kind: 'diagram',
      title: '方格水準角點法：依角點被共用的方格數加權',
      caption: '兩個 10 m × 10 m 方格的挖深（m）：外角點各屬 1 格（× 1），中間邊點屬 2 格（× 2）；V = (a² / 4)(Σh₁ + 2Σh₂) = 25 × 6.8 = 170 m³。',
      svg: (() => {
        let s = '';
        const X = [60, 180, 300];
        const Y = [50, 170];
        s += rect(60, 50, 240, 120, { tone: 'blue', fill: 'blue', soft: true, w: 1.6 });
        s += line(180, 50, 180, 170, { tone: 'blue', w: 1.6 });
        const h = [[1.2, 0.9, 0.8], [1.0, 0.7, 0.6]];
        Y.forEach((y, r) => X.forEach((x, c) => {
          const shared = c === 1;
          s += dot(x, y, 5, shared ? 'red' : 'ink');
          s += text(x, y + (r === 0 ? -12 : 22), `${h[r][c].toFixed(1)}${shared ? '（×2）' : '（×1）'}`, { anchor: 'middle', size: 12, weight: 'bold', tone: shared ? 'red' : 'ink' });
        }));
        s += text(120, 114, '方格 ①', { anchor: 'middle', tone: 'blue', size: 12 });
        s += text(240, 114, '方格 ②', { anchor: 'middle', tone: 'blue', size: 12 });
        s += dim(60, 214, 180, 214, 'a = 10 m', { offset: 0 });
        s += box(330, 40, 210, 140, ['角點法土方計算', 'Σh₁ = 1.2 + 0.8 + 1.0 + 0.6 = 3.6', 'Σh₂ = 0.9 + 0.7 = 1.6', 'V = (100 / 4)(3.6 + 2 × 1.6)', '　= 25 × 6.8 = 170 m³'], { tone: 'violet', size: 12 });
        return svg(560, 230, s);
      })(),
      takeaways: [
        '角點權重＝共用該點的方格數：外角 1、邊點 2、L 形內凹轉角 3、內點 4。',
        '驗算：左格平均 0.95 m（95 m³）＋右格平均 0.75 m（75 m³）＝ 170 m³。',
      ],
    },
    {
      concept: '旋轉雷射儀與雷射墨線儀',
      kind: 'diagram',
      title: '旋轉雷射儀：一個雷射基準面，接收器在各點讀出高差',
      caption: '雷射頭旋轉形成水平基準面；標尺上的接收器對準雷射面時讀數，讀數越大代表地面越低。圖中 A 點讀 1.25 m、B 點讀 0.80 m，B 比 A 高 0.45 m。',
      svg: (() => {
        let s = '';
        s += polyline([[20, 200], [160, 200], [300, 190], [420, 160], [540, 150]], { tone: 'muted', w: 1.6 });
        s += instrument(90, 104, 'red');
        s += text(90, 86, '旋轉雷射儀', { anchor: 'middle', tone: 'red', size: 12, weight: 'bold' });
        s += line(100, 100, 540, 100, { tone: 'red', w: 1.4, dash: 'dash' });
        s += text(536, 92, '雷射水平基準面', { anchor: 'end', tone: 'red', size: 11.5 });
        s += staff(260, 192, 110, 'A');
        s += staff(440, 158, 80, 'B');
        s += rect(252, 94, 16, 12, { tone: 'green', fill: 'green', soft: true, w: 1.3 }) + rect(432, 94, 16, 12, { tone: 'green', fill: 'green', soft: true, w: 1.3 });
        s += text(274, 132, '讀數 1.25 m', { tone: 'green', size: 12, weight: 'bold' });
        s += text(454, 126, '讀數 0.80 m', { tone: 'green', size: 12, weight: 'bold' });
        s += text(280, 30, 'B 比 A 高 = 1.25 − 0.80 = 0.45 m', { anchor: 'middle', weight: 'bold' });
        return svg(560, 226, s);
      })(),
      takeaways: [
        '旋轉雷射儀可單人作業：一人持尺與接收器，即可快速完成整地與樓板高程控制。',
        '作業中途要回到已知水準點 BM 檢核，確認儀器沒有被碰撞或下陷。',
      ],
    },
  ],

  'instrument-setup': [
    {
      concept: '雙腳螺絲「左手大拇指法則」與三螺絲精平操作邏輯',
      kind: 'diagram',
      title: '經緯儀與全測站儀幾何三軸關係 (VV・HH・ZZ・LL) 與左手大拇指精平法則圖解',
      caption: '左：直立軸 VV、橫軸 HH、視準軸 ZZ 與盤水準管軸 LL 之正交關係；右：雙腳螺旋相向或相背旋轉，氣泡恆隨左手大拇指方向移動。',
      svg: (() => {
        let s = '';
        // 左側：經緯儀幾何四軸構造
        const cx = 155, cy = 112;
        // 直立軸 VV
        s += line(cx, 24, cx, 206, { tone: 'blue', w: 2.4, dash: 'center' });
        s += text(cx, 16, '直立軸 VV (垂直方向)', { anchor: 'middle', size: 11.5, tone: 'blue', weight: 'bold' });
        // 橫軸 HH (水平軸)
        s += line(cx - 95, cy, cx + 95, cy, { tone: 'green', w: 2.4 });
        s += text(cx - 98, cy + 4, 'H', { anchor: 'end', size: 12, tone: 'green', weight: 'bold' });
        s += text(cx + 98, cy + 4, 'H 橫軸', { size: 12, tone: 'green', weight: 'bold' });
        // 支架與基座
        s += polyline([[cx - 56, cy], [cx - 56, 162], [cx + 56, 162], [cx + 56, cy]], { tone: 'ink', w: 2 });
        s += rect(cx - 66, 162, 132, 14, { tone: 'ink', fill: 'muted', soft: true, w: 1.6 });
        // 盤水準管軸 LL
        s += rect(cx - 32, 146, 64, 10, { tone: 'amber', fill: 'amber', soft: true, rx: 5, w: 1.5 });
        s += text(cx + 38, 154, '水準軸 LL', { size: 10.5, tone: 'amber', weight: 'bold' });
        // 視準軸 ZZ (斜交示意)
        s += line(cx - 52, cy + 32, cx + 58, cy - 36, { tone: 'red', w: 2.4 });
        s += text(cx + 62, cy - 36, '視準軸 ZZ', { size: 11.5, tone: 'red', weight: 'bold' });
        s += rightAngle(cx, cy, 0, 90, 11, 'blue');

        // 右側：三腳螺旋精平與左手大拇指法則
        const rx = 420, ry = 108;
        s += polygon([[rx - 68, ry - 32], [rx + 68, ry - 32], [rx, ry + 78]], { tone: 'muted', fill: 'paper', dash: 'dash', w: 1.4 });
        s += circle(rx - 68, ry - 32, 15, { tone: 'blue', fill: 'blue', soft: true, w: 1.8 });
        s += circle(rx + 68, ry - 32, 15, { tone: 'blue', fill: 'blue', soft: true, w: 1.8 });
        s += circle(rx, ry + 78, 15, { tone: 'amber', fill: 'amber', soft: true, w: 1.8 });
        s += text(rx - 68, ry - 32, 'A', { anchor: 'middle', baseline: 'middle', weight: 'bold', halo: false });
        s += text(rx + 68, ry - 32, 'B', { anchor: 'middle', baseline: 'middle', weight: 'bold', halo: false });
        s += text(rx, ry + 78, 'C', { anchor: 'middle', baseline: 'middle', weight: 'bold', halo: false });

        // 第一步水準管平行 AB
        s += rect(rx - 44, ry - 38, 88, 12, { tone: 'green', fill: 'green', soft: true, rx: 6, w: 1.6 });
        s += arrow(rx - 22, ry - 52, rx + 22, ry - 52, { tone: 'red', w: 2, head: 7, label: '氣泡隨左手大拇指移動', labelPos: 'mid', labelOffset: [0, -8] });
        // 第二步轉 90° 對準 C
        s += rect(rx - 6, ry - 12, 12, 68, { tone: 'amber', fill: 'amber', soft: true, rx: 6, w: 1.4, dash: 'dash' });

        s += text(rx, 22, '三腳螺旋精平 SOP', { anchor: 'middle', size: 13, weight: 'bold' });
        s += text(rx, 208, '1. 水準管平行 AB → 兩手反向對轉 A, B', { anchor: 'middle', size: 11, weight: 'bold', tone: 'blue' });
        s += text(rx, 224, '2. 旋轉 90° 垂直 AB → 單手轉動 C 螺旋', { anchor: 'middle', size: 11, weight: 'bold', tone: 'amber' });

        return svg(560, 236, s);
      })(),
      takeaways: [
        '儀器整置標準程序：**架設腳架 $\\rightarrow$ 初步對中 $\\rightarrow$ 伸縮腳架腿使圓盒氣泡居中（粗平）$\\rightarrow$ 旋轉三顆腳螺旋使長水準管氣泡居中（精平）$\\rightarrow$ 鬆開中心螺旋微調精確定心 $\\rightarrow$ 複核精平**。',
        '**伸縮三腳架腿對應「圓盒氣泡（粗平）」**；**旋轉基座三顆腳螺旋對應「盤水準管（精平）」**。',
        '**左手大拇指法則**：雙手同時反向旋轉兩顆腳螺旋（皆向內或皆向外）時，水準管氣泡移動方向必與**左手大拇指所指方向一致**。',
      ],
    },
    {
      concept: '經緯儀與全測站儀幾何三軸關係與檢驗條件',
      kind: 'chart',
      title: '經緯儀視準軸偏心誤差 c 與橫軸傾斜誤差 i 隨目標仰角 α 放大對比圖',
      caption: '當視線水平 (α = 0°) 時橫軸誤差 i 不影響水平角，但隨仰角 α 增大，兩項誤差皆按 sec α 與 tan α 劇烈放大，唯有正倒鏡取平均可完全抵消。',
      svg: lineChart({
        w: 520,
        h: 260,
        x: { min: 0, max: 60, ticks: [0, 15, 30, 45, 60], label: '照準目標仰角 α (度)' },
        y: { min: -40, max: 60, ticks: [-40, -20, 0, 20, 40, 60], label: '水平方向讀數誤差 (角秒 ″)' },
        series: [
          {
            name: '正鏡單次誤差 (+c·sec α + i·tan α)',
            tone: 'red',
            points: [[0, 15], [15, 23.6], [30, 34.6], [45, 51.2], [60, 81.9]],
            markers: true,
          },
          {
            name: '倒鏡單次誤差 (−c·sec α − i·tan α)',
            tone: 'blue',
            points: [[0, -15], [15, -23.6], [30, -34.6], [45, -51.2], [60, -81.9]],
            dash: 'dash',
          },
          {
            name: '正倒鏡平均值誤差 (完全抵消 = 0″)',
            tone: 'green',
            points: [[0, 0], [15, 0], [30, 0], [45, 0], [60, 0]],
            w: 3,
          },
        ],
        overlay: (f) =>
          point(f, 45, 0, '正倒鏡平均誤差恆為 0″', { tone: 'green', dx: -20, dy: -10 }),
      }),
      table: {
        headers: ['目標仰角 α', '視準軸影響 c·sec α (設 c=15″)', '橫軸影響 i·tan α (設 i=30″)', '正倒鏡平均值殘餘誤差'],
        rows: [
          ['0° (水平視線)', '+15.0″ (倒鏡 −15.0″)', '0.0″ (水平時無影響)', '0.0″ (完全消除)'],
          ['30° (中仰角)', '+17.3″ (倒鏡 −17.3″)', '+17.3″ (倒鏡 −17.3″)', '0.0″ (完全消除)'],
          ['45° (高仰角)', '+21.2″ (倒鏡 −21.2″)', '+30.0″ (倒鏡 −30.0″)', '0.0″ (完全消除)'],
          ['60° (陡仰角)', '+30.0″ (倒鏡 −30.0″)', '+52.0″ (倒鏡 −52.0″)', '0.0″ (完全消除)'],
        ],
      },
      takeaways: [
        '**正倒鏡觀測取平均值**能自動抵消正負號相反的所有儀器偏心與軸系誤差，但**唯一無法由正倒鏡消除的軸系誤差是「直立軸 VV 未垂直（整平不良）」**！',
        '因此全測站儀內建**雙軸自動補償器 (Dual-Axis Compensator)**，專門即時偵測並數值修正直立軸在視準方向與橫軸方向的微小傾斜量。',
      ],
    },
    {
      concept: '經緯儀與全測站儀幾何三軸關係與檢驗條件',
      kind: 'table',
      title: '經緯儀四大軸系幾何正交條件、檢驗方法與正倒鏡消差能力總表',
      caption: '統測超高頻考題：熟記 L⊥V、Z⊥H、H⊥V 三大垂直條件，以及何種誤差不能靠正倒鏡消除。',
      table: {
        headers: ['幾何條件式', '軸系關係中文名稱', '違反時產生之誤差名稱', '正倒鏡平均能否消除？'],
        rows: [
          ['LL ⊥ VV', '盤水準管軸 ⊥ 直立軸', '直立軸傾斜誤差 (定平誤差，最嚴重！)', '❌ 不能消除！必須先精確整平或開雙軸補償器'],
          ['ZZ ⊥ HH', '視準軸 ⊥ 橫軸 (水平軸)', '視準軸偏心誤差 c (Collimation Error, 2c 差)', '✅ 完全消除！(正倒鏡讀數差偏離 180° 之半即為 c)'],
          ['HH ⊥ VV', '橫軸 ⊥ 直立軸', '橫軸傾斜誤差 i (隨仰角 tan α 放大)', '✅ 完全消除！(高處牆面投影點正倒鏡取中點)'],
          ['度盤中心無偏心', '照準部旋轉軸與水平度盤中心重合', '度盤偏心誤差 e', '✅ 完全消除！(對徑讀數或正倒鏡相差 180° 互消)'],
        ],
      },
      takeaways: [
        '必背檢驗校正順序：**先校 $LL \\perp VV$（水準軸垂直直立軸）$\\rightarrow$ 次校 $ZZ \\perp HH$（視準軸垂直橫軸）$\\rightarrow$ 最後校 $HH \\perp VV$（橫軸垂直直立軸）**。',
        '**半半校正法**（二分之一校正法）：在檢校水準管軸 $LL \\perp VV$ 與視準軸 $ZZ \\perp HH$ 時，旋轉 180° 或正倒鏡所顯現的偏差量都是**真實誤差的 $2$ 倍 ($2e$ 或 $2c$)**，故調整十字絲或水準管校正螺絲時**只須撥回差值的一半**！',
      ],
    },
  ],

  'traverse-surveying': [
    {
      concept: '正方位角 (Forward Azimuth) 與反方位角 (Back Azimuth) 關係',
      kind: 'diagram',
      title: '三種導線佈設型式（閉合、附合、展開）與正反方位角連續推算幾何圖',
      caption: '左：閉合導線自起點繞回起點、附合導線連通兩已知控制網；右：由後視邊反方位角（φ_AB ± 180°）加折角 β 推算前視邊方位角。',
      svg: (() => {
        let s = '';
        // 左側：閉合導線五邊形
        const pts: Pt[] = [[64, 152], [48, 76], [126, 42], [198, 86], [166, 168]];
        s += polygon(pts, { tone: 'blue', fill: 'blue', soft: true, w: 2.2 });
        const labels = ['A(起終點)', '1', '2', '3', '4'];
        pts.forEach(([x, y], i) => {
          s += dot(x, y, 4.2, i === 0 ? 'red' : 'blue');
          s += text(x + (i === 1 ? -10 : 8), y + (i === 2 ? -8 : 14), labels[i], { size: 11, weight: 'bold', tone: i === 0 ? 'red' : 'ink' });
        });
        s += text(122, 114, '閉合導線', { anchor: 'middle', size: 12.5, weight: 'bold', tone: 'blue' });
        s += text(122, 132, 'Σβ_內 = (n−2)×180°', { anchor: 'middle', size: 11, tone: 'ink' });
        s += text(122, 198, '附合導線：已知 A-B 測至已知 C-D', { anchor: 'middle', size: 11, tone: 'green', weight: 'bold' });
        s += text(122, 214, '展開(支)導線：無閉合檢核・僅單向延伸', { anchor: 'middle', size: 10.5, tone: 'red' });

        // 右側：方位角連續推算幾何圖
        const ax = 285, ay = 172;
        const bx = 395, by = 112;
        const cx = 515, cy = 158;
        // 指北線 N
        s += arrow(ax, ay + 14, ax, ay - 76, { tone: 'muted', w: 1.5, head: 7, label: 'N', labelOffset: [-4, -6] });
        s += arrow(bx, by + 14, bx, by - 82, { tone: 'muted', w: 1.5, head: 7, label: 'N', labelOffset: [-4, -6] });
        // 導線邊 AB 與 BC 及延長虛線
        s += arrow(ax, ay, bx, by, { tone: 'blue', w: 2.4, head: 8 });
        s += line(bx, by, bx + 65, by - 35, { tone: 'blue', w: 1.2, dash: 'dash' });
        s += arrow(bx, by, cx, cy, { tone: 'red', w: 2.4, head: 8 });

        s += dot(ax, ay, 4, 'ink') + text(ax - 10, ay + 6, 'A', { anchor: 'end', weight: 'bold' });
        s += dot(bx, by, 4.5, 'ink') + text(bx - 12, by - 6, 'B', { anchor: 'end', weight: 'bold' });
        s += dot(cx, cy, 4, 'ink') + text(cx + 8, cy + 4, 'C', { weight: 'bold' });

        // 方位角弧與左角/右角標註
        s += angle(ax, ay, 38, 28, 90, 'φ_AB', { tone: 'blue', labelR: 52 });
        s += angle(bx, by, 34, -152, 90, 'φ_BA = φ_AB+180°', { tone: 'amber', labelR: 58 });
        s += angle(bx, by, 54, -21, 90, 'φ_BC', { tone: 'red', labelR: 68 });

        s += box(282, 184, 262, 38, [
          '方位角推算通式：φ前 = φ後 ± 180° + β左（或 − β右）',
          '等同於：前邊方位角 = 後邊反方位角 + 左角 (− 右角)',
        ], { tone: 'amber', size: 10.5 });

        return svg(560, 232, s);
      })(),
      takeaways: [
        '正反方位角換算：**$\\phi_{BA} = \\phi_{AB} \\pm 180^\\circ$**（小於 $180^\\circ$ 加 $180^\\circ$，大於 $180^\\circ$ 減 $180^\\circ$）。',
        '方位角連續推算必背公式：**$\\phi_{BC} = \\phi_{AB} \\pm 180^\\circ + \\beta_{\\text{左}}$（左角相加）** 或 **$\\phi_{BC} = \\phi_{AB} \\pm 180^\\circ - \\beta_{\\text{右}}$（右角相減）**；若算出結果 $< 0^\\circ$ 則 $+ 360^\\circ$，若 $\\ge 360^\\circ$ 則 $- 360^\\circ$。',
        '若題目給的是**偏角 $\\gamma$（前視邊偏離後視延長線之夾角，右偏為 $+$、左偏為 $-$）**，則直接 **$\\phi_{BC} = \\phi_{AB} + \\gamma_{\\text{右}} - \\gamma_{\\text{左}}$**（不必加 $180^\\circ$！）。',
      ],
    },
    {
      concept: '多邊形多角形內角和與外角和理論公式',
      kind: 'chart',
      title: '閉合多邊形導線邊數 n 對應之理論內角和與外角和比較圖',
      caption: 'n 邊形閉合導線之理論內角和為 (n − 2) × 180°，理論外角和為 (n + 2) × 180°，兩者恆相差 4 × 180° = 720°。',
      svg: barChart({
        w: 520,
        h: 260,
        categories: ['三角形 (n=3)', '四邊形 (n=4)', '五邊形 (n=5)', '六邊形 (n=6)', '八邊形 (n=8)'],
        series: [
          { name: '理論內角和 (n−2)×180°', tone: 'blue', values: [180, 360, 540, 720, 1080] },
          { name: '理論外角和 (n+2)×180°', tone: 'amber', values: [900, 1080, 1260, 1440, 1800] },
        ],
        y: { min: 0, max: 2000, ticks: [0, 360, 720, 1080, 1440, 1800], label: '角度總和 (度 °)' },
        values: true,
        catSize: 11,
      }),
      table: {
        headers: ['多邊形點數 (邊數 n)', '理論內角和 (n−2)×180°', '理論外角和 (n+2)×180°', '三等導線容許角度閉合差 (±30″√n)'],
        rows: [
          ['三角形導線 (n = 3)', '180°', '900°', '±52″'],
          ['四邊形導線 (n = 4)', '360°', '1080°', '±60″ (±1′00″)'],
          ['五邊形導線 (n = 5，最常考)', '540°', '1260°', '±67″ (±1′07″)'],
          ['六邊形導線 (n = 6)', '720°', '1440°', '±73″ (±1′13″)'],
        ],
      },
      takeaways: [
        '角度閉合差定義：**$f_\\beta = \\Sigma\\beta_{\\text{實測}} - \\Sigma\\beta_{\\text{理論}}$**；若在容許範圍 $\\pm C\\sqrt{n}$ 內，每個角度分配相等的改正數 **$v_\\beta = -\\frac{f_\\beta}{n}$（與邊長無關，平均分配！）**。',
        '順時針前進的閉合導線，觀測「左角」即為多邊形**內角**；逆時針前進的閉合導線，觀測「右角」亦為**內角**。',
      ],
    },
    {
      concept: '導線佈設型式與幾何檢核條件比較',
      kind: 'table',
      title: '方位角 (Azimuth) 與象限角 (Bearing) 四象限換算及三大導線檢核條件總表',
      caption: '完整對照北偏東/南偏東/南偏西/北偏西四象限角與全圓方位角 (0°~360°) 之轉換公式與三角函數正負號。',
      table: {
        headers: ['所在象限', '方位角 φ 範圍', '象限角 R 表示與換算公式', '緯距 ΔN = D·cos φ 與經距 ΔE = D·sin φ 正負號'],
        rows: [
          ['第 I 象限 (東北 NE)', '0° < φ < 90°', 'N R E ，其中 R = φ', 'ΔN > 0 (+) ， ΔE > 0 (+)'],
          ['第 II 象限 (東南 SE)', '90° < φ < 180°', 'S R E ，其中 R = 180° − φ', 'ΔN < 0 (−) ， ΔE > 0 (+)'],
          ['第 III 象限 (西南 SW)', '180° < φ < 270°', 'S R W ，其中 R = φ − 180°', 'ΔN < 0 (−) ， ΔE < 0 (−)'],
          ['第 IV 象限 (西北 NW)', '270° < φ < 360°', 'N R W ，其中 R = 360° − φ', 'ΔN > 0 (+) ， ΔE < 0 (−)'],
        ],
      },
      takeaways: [
        '**方位角 ($\\phi$)** 一律由**正北 ($N$) 順時針**量至測線，範圍 $0^\\circ \\sim 360^\\circ$；**象限角 ($R$)** 則由正北 ($N$) 或正南 ($S$) 向東 ($E$) 或向西 ($W$) 量取銳角，範圍恆為 **$0^\\circ \\sim 90^\\circ$**。',
        '三大導線幾何檢核條件比較：**閉合導線與附合導線皆具備「1 個角度閉合檢核 + 2 個座標（縱橫距）閉合檢核」**；唯獨**展開（支）導線完全無幾何檢核條件**，精度最難確保。',
      ],
    },
  ],

  'coordinate-computation': [
    {
      concept: '緯距 (ΔN) 與經距 (ΔE) 正反算公式',
      kind: 'diagram',
      title: '測量平面座標系 (N-E) 緯距 ΔN、經距 ΔE 正反算與位置閉合差向量 f_d 圖解',
      caption: '左：測量座標縱軸為北 N (X)、橫軸為東 E (Y)，方位角 φ 由北軸順時針起算；右：閉合導線終點未回到起點 A 所形成之位置閉合差 f_d。',
      svg: (() => {
        let s = '';
        // 左側：座標正反算直角三角形
        const ox = 56, oy = 186;
        s += arrow(ox, oy + 16, ox, 24, { tone: 'ink', w: 1.5, head: 8, label: '北 N (縱軸)', labelOffset: [8, 4] });
        s += arrow(ox - 16, oy, 266, oy, { tone: 'ink', w: 1.5, head: 8, label: '東 E (橫軸)', labelOffset: [-36, 18] });

        const ax = 86, ay = 158;
        const bx = 224, by = 56;
        s += line(ax, ay, ax, ay - 92, { tone: 'muted', w: 1.2, dash: 'dash' });
        s += text(ax, ay - 96, 'N', { anchor: 'middle', size: 11, tone: 'muted', weight: 'bold' });

        // ΔN 與 ΔE 分量
        s += arrow(ax, ay, ax, by, { tone: 'green', w: 2.2, head: 7 });
        s += arrow(ax, by, bx, by, { tone: 'amber', w: 2.2, head: 7 });
        s += arrow(ax, ay, bx, by, { tone: 'blue', w: 2.8, head: 9 });
        s += rightAngle(ax, by, 0, -90, 10, 'muted');
        s += angle(ax, ay, 42, 36.5, 90, 'φ_AB', { tone: 'blue', labelR: 56 });

        s += dot(ax, ay, 4.2, 'red') + text(ax - 8, ay + 14, 'A(E_A, N_A)', { anchor: 'end', size: 11, weight: 'bold' });
        s += dot(bx, by, 4.2, 'red') + text(bx + 6, by - 6, 'B(E_B, N_B)', { size: 11, weight: 'bold' });
        s += text(ax - 8, (ay + by) / 2, '緯距 ΔN = D·cos φ', { anchor: 'end', size: 11.5, tone: 'green', weight: 'bold' });
        s += text((ax + bx) / 2, by - 8, '經距 ΔE = D·sin φ', { anchor: 'middle', size: 11.5, tone: 'amber', weight: 'bold' });
        s += text((ax + bx) / 2 + 12, (ay + by) / 2 + 14, 'D = √(ΔN²+ΔE²)', { size: 11.5, tone: 'blue', weight: 'bold' });

        // 右側：閉合導線位置閉合差放大圖
        s += box(302, 22, 240, 188, [
          '閉合導線位置閉合差與精度',
          '• 緯距閉合差：f_N = ΣΔN (理論為 0)',
          '• 經距閉合差：f_E = ΣΔE (理論為 0)',
          '• 位置閉合差 (直線總誤差)：',
          '  f_d = √(f_N² + f_E²)',
          '• 導線相對閉合差 (精度指標)：',
          '  f_r = f_d / ΣD = 1 / (ΣD / f_d)',
          '  (分母愈大代表精度愈高！)',
        ], { tone: 'red', size: 11.5 });

        return svg(560, 226, s);
      })(),
      takeaways: [
        '**測量平面座標系與數學笛卡兒座標系不同**：測量以**北方 $N$ 為縱軸、東方 $E$ 為橫軸**，方位角 $\\phi$ 由北軸順時針起算，故 **$\\Delta N = D \\cos\\phi$、$\\Delta E = D \\sin\\phi$**（剛好把數學的 $\\cos/\\sin$ 對調而無需轉換角度！）。',
        '**座標反算**已知兩點座標求距離與方位角：$D_{AB} = \\sqrt{\\Delta N^2 + \\Delta E^2}$，象限角 $R = \\arctan\\left|\\frac{\\Delta E}{\\Delta N}\\right|$，再依 $\\Delta N$ 與 $\\Delta E$ 的正負號決定所在象限與方位角 $\\phi_{AB}$。',
        '**導線相對精度 $1 / K$**：例如導線總長 $\\Sigma D = 600\\text{ m}$，$f_N = +0.06\\text{ m}$、$f_E = -0.08\\text{ m}$，則 $f_d = \\sqrt{0.06^2 + (-0.08)^2} = 0.10\\text{ m}$，相對閉合差 $= \\frac{0.10}{600} = \\mathbf{1 / 6000}$。',
      ],
    },
    {
      concept: '羅盤儀法則 (Bowditch / Compass Rule) 嚴謹平差計算',
      kind: 'chart',
      title: '羅盤儀法則 (Bowditch Rule) 按各邊長比例分配緯距與經距改正數示意圖',
      caption: '設導線總長 ΣD = 500 m，閉合差 f_N = −20 cm、f_E = +15 cm，各邊改正數 v_i = −f × (D_i / ΣD) 與邊長嚴格成正比。',
      svg: barChart({
        w: 520,
        h: 260,
        categories: ['邊1 (50 m)', '邊2 (100 m)', '邊3 (150 m)', '邊4 (200 m)'],
        series: [
          { name: '緯距改正數 v_N (cm, 總和 +20)', tone: 'blue', values: [2, 4, 6, 8] },
          { name: '經距改正數 |v_E| (cm, 總和 15)', tone: 'amber', values: [1.5, 3.0, 4.5, 6.0] },
        ],
        y: { min: 0, max: 10, ticks: [0, 2, 4, 6, 8, 10], label: '改正數大小 (cm)' },
        values: true,
      }),
      table: {
        headers: ['導線邊號', '邊長 D_i (m)', '權重比例 D_i / ΣD', '緯距改正 v_Ni (cm) / 經距改正 v_Ei (cm)'],
        rows: [
          ['AB 邊 (第 1 邊)', '50 m', '50 / 500 = 10%', 'v_N1 = +2.0 cm ； v_E1 = −1.5 cm'],
          ['BC 邊 (第 2 邊)', '100 m', '100 / 500 = 20%', 'v_N2 = +4.0 cm ； v_E2 = −3.0 cm'],
          ['CD 邊 (第 3 邊)', '150 m', '150 / 500 = 30%', 'v_N3 = +6.0 cm ； v_E3 = −4.5 cm'],
          ['DA 邊 (第 4 邊，總和 Σ=500m)', '200 m', '200 / 500 = 40%', 'v_N4 = +8.0 cm ； v_E4 = −6.0 cm (Σv = −f)'],
        ],
      },
      takeaways: [
        '**羅盤儀法則（Bowditch Rule，又稱鮑迪奇法則）**假設測角精度與量距精度相當，故各邊之緯距、經距改正數與**該邊邊長 $D_i$ 成正比**：$v_{Ni} = -f_N \\cdot \\frac{D_i}{\\Sigma D}$、$v_{Ei} = -f_E \\cdot \\frac{D_i}{\\Sigma D}$。',
        '必考檢核：所有邊的**改正數總和必須等於閉合差的相反數**（$\\Sigma v_N = -f_N$、$\\Sigma v_E = -f_E$），使得平差後的改正緯距總和與改正經距總和嚴格歸零！',
      ],
    },
    {
      concept: '經緯儀法則 (Transit Rule) 與羅盤儀法則比較',
      kind: 'table',
      title: '導線平差「羅盤儀法則」與「經緯儀法則」及導線計算 7 步驟比較表',
      caption: '比較兩大經典導線座標平差法則之理論假設、分配權重公式與適用儀器組合。',
      table: {
        headers: ['比較項目', '羅盤儀法則 (Compass / Bowditch Rule)', '經緯儀法則 (Transit Rule)', '導線計算表檢核重點'],
        rows: [
          ['理論基本假設', '假設測角與量距所引起之點位誤差相等', '假設測角精度遠高於量距精度 (誤差主要來自量距)', '先配賦角度閉合差，再算方位角與縱橫距'],
          ['緯距改正數公式 v_Ni', 'v_Ni = −f_N × (D_i / ΣD) [按邊長比例]', 'v_Ni = −f_N × (|ΔN_i| / Σ|ΔN|) [按緯距絕對值比例]', '改正後 Σ(ΔN_i + v_Ni) 必須等於 0 (閉合導線)'],
          ['經距改正數公式 v_Ei', 'v_Ei = −f_E × (D_i / ΣD) [按邊長比例]', 'v_Ei = −f_E × (|ΔE_i| / Σ|ΔE|) [按經距絕對值比例]', '改正後 Σ(ΔE_i + v_Ei) 必須等於 0 (閉合導線)'],
          ['工程實務適用情境', '全測站儀 (EDM + 電子測角) 現代標準首選法則', '精密經緯儀搭配皮尺/鋼卷尺量距之傳統作業', '最後由起點座標累加改正縱橫距，終點必走回原座標'],
        ],
      },
      takeaways: [
        '秒殺區分口訣：**「羅盤儀法則按『邊長 $D_i / \\Sigma D$』分配；經緯儀法則按『縱橫距絕對值 $|\\Delta N_i| / \\Sigma|\\Delta N|$』分配。」**',
        '導線計算必須**先完成角度閉合差平差並推算出改正後方位角**，才能用改正後方位角計算各邊的緯距 $\\Delta N$ 與經距 $\\Delta E$！',
      ],
    },
    {
      concept: '控制點的應用：極坐標法點位測設（放樣）',
      kind: 'diagram',
      title: '極坐標法放樣：由坐標反算方位角 φ 與距離 D',
      caption: 'A(1000, 2000) 到 P(1030, 2040)：ΔN = 30、ΔE = 40，D = 50.000 m，φ = tan⁻¹(40/30) = 53°07′48″；全站儀後視 B（正北）後順時針轉 φ 量 D 即得 P。',
      svg: (() => {
        let s = '';
        const A: [number, number] = [140, 196];
        const P: [number, number] = [140 + 160, 196 - 120];
        s += arrow(A[0], A[1], A[0], 40, { tone: 'muted', w: 1.6, dash: 'dash' });
        s += text(A[0] + 6, 46, 'N（後視 B，φ = 0°）', { tone: 'muted', size: 12 });
        s += arrow(A[0], A[1], 330, A[1], { tone: 'muted', w: 1.2 });
        s += text(334, A[1] + 4, 'E', { tone: 'muted', weight: 'bold' });
        s += line(A[0], A[1], P[0], A[1], { tone: 'blue', w: 1.2, dash: 'dash' }) + line(P[0], A[1], P[0], P[1], { tone: 'blue', w: 1.2, dash: 'dash' });
        s += text((A[0] + P[0]) / 2, A[1] + 16, 'ΔE = 40', { tone: 'blue', size: 12, anchor: 'middle', weight: 'bold' });
        s += text(P[0] + 8, (A[1] + P[1]) / 2, 'ΔN = 30', { tone: 'blue', size: 12, weight: 'bold' });
        s += arrow(A[0], A[1], P[0], P[1], { tone: 'red', w: 2.6, label: 'D = 50.000 m', labelPos: 'mid', labelOffset: [-14, -8] });
        s += angle(A[0], A[1], 54, 36.87, 90, 'φ', { tone: 'red', labelR: 68 });
        s += dot(A[0], A[1], 5) + text(A[0] - 8, A[1] + 4, 'A', { weight: 'bold', anchor: 'end' });
        s += dot(P[0], P[1], 5, 'red') + text(P[0] + 8, P[1] - 6, 'P', { weight: 'bold', tone: 'red' });
        s += box(380, 52, 168, 116, ['反算公式', 'D = √(ΔN² + ΔE²)', 'φ = tan⁻¹(ΔE / ΔN)', '（依象限修正）'], { tone: 'violet', size: 12 });
        return svg(560, 222, s);
      })(),
      takeaways: [
        '測量坐標的方位角以 N 軸為基準、順時針為正，所以用 tan⁻¹(ΔE / ΔN)。',
        '放樣完成後一定要從另一個控制點檢核 P 的坐標，誤差在容許範圍內才算完成。',
      ],
    },
  ],

  'area-and-error': [
    {
      concept: '辛普森法 (Simpson\'s 1/3 Rule) 不規則邊界面積計算',
      kind: 'diagram',
      title: '鞋帶公式 (座標法) 投影梯形面積加減與辛普森 1/3 法則拋物線邊界圖解',
      caption: '左：多邊形面積由各邊向縱軸投影之梯形面積代數和求得；右：不規則曲線邊界以偶數等分區間搭配辛普森 1-4-2-4-1 權重積分。',
      svg: (() => {
        let s = '';
        // 左側：鞋帶公式座標投影梯形
        const ox = 42, oy = 196;
        s += arrow(ox, oy + 10, ox, 26, { tone: 'ink', w: 1.4, head: 7, label: 'N(Y)', labelOffset: [6, 4] });
        s += arrow(ox - 10, oy, 256, oy, { tone: 'ink', w: 1.4, head: 7, label: 'E(X)', labelOffset: [-26, 16] });

        const p1: Pt = [92, 146], p2: Pt = [154, 52], p3: Pt = [232, 112];
        s += area([ [p1[0], oy], p1, p2, p3, [p3[0], oy] ], 'blue', true, 0.25);
        s += polygon([p1, p2, p3], { tone: 'blue', fill: 'blue', soft: true, w: 2.2 });
        s += line(p1[0], p1[1], p1[0], oy, { tone: 'muted', w: 1.1, dash: 'dash' });
        s += line(p2[0], p2[1], p2[0], oy, { tone: 'muted', w: 1.1, dash: 'dash' });
        s += line(p3[0], p3[1], p3[0], oy, { tone: 'muted', w: 1.1, dash: 'dash' });

        s += dot(p1[0], p1[1], 4, 'red') + text(p1[0] - 6, p1[1] - 8, '1(E₁,N₁)', { anchor: 'end', size: 10.5, weight: 'bold' });
        s += dot(p2[0], p2[1], 4, 'red') + text(p2[0], p2[1] - 8, '2(E₂,N₂)', { anchor: 'middle', size: 10.5, weight: 'bold' });
        s += dot(p3[0], p3[1], 4, 'red') + text(p3[0] + 6, p3[1] - 6, '3(E₃,N₃)', { size: 10.5, weight: 'bold' });
        s += text(155, 112, '面積 A', { anchor: 'middle', size: 12, weight: 'bold', tone: 'blue' });
        s += text(148, 236, '2A = |Σ(E_i·N_{i+1} − E_{i+1}·N_i)|', { anchor: 'middle', size: 11, weight: 'bold' });

        // 右側：辛普森 1/3 法則 (偶數區間 n=4, 5條支距 h0~h4)
        const sx = 304, sy = 176, dx = 52;
        const hs = [56, 98, 122, 106, 68];
        const topPts: Pt[] = hs.map((h, i) => [sx + i * dx, sy - h]);
        s += area([[sx, sy], ...topPts, [sx + 4 * dx, sy]], 'green', true);
        s += path(`M${topPts[0][0]},${topPts[0][1]} C${topPts[1][0] - 18},${topPts[1][1] - 14} ${topPts[2][0] - 18},${topPts[2][1]} ${topPts[2][0]},${topPts[2][1]} C${topPts[3][0] - 10},${topPts[3][1]} ${topPts[3][0] + 15},${topPts[3][1] + 6} ${topPts[4][0]},${topPts[4][1]}`, { tone: 'green', w: 2.4 });
        s += line(sx, sy, sx + 4 * dx, sy, { tone: 'ink', w: 1.8 });

        const weights = ['1·h₀', '4·h₁', '2·h₂', '4·h₃', '1·h₄'];
        hs.forEach((h, i) => {
          const x = sx + i * dx;
          s += line(x, sy, x, sy - h, { tone: i % 2 === 1 ? 'red' : 'amber', w: 1.6, dash: i % 2 === 1 ? undefined : 'dash' });
          s += dot(x, sy - h, 3.5, 'green');
          s += text(x, sy - h - 8, weights[i], { anchor: 'middle', size: 10.5, weight: 'bold', tone: i % 2 === 1 ? 'red' : 'ink' });
          if (i < 4) s += dim(x, sy, x + dx, sy, 'd', { offset: 14, size: 10 });
        });
        s += text(408, 22, '辛普森 1/3 法則 (偶數區間 n)', { anchor: 'middle', size: 12.5, weight: 'bold', tone: 'green' });
        s += text(408, 218, 'A = (d/3)·[h₀ + h_n + 4Σh_奇 + 2Σh_偶]', { anchor: 'middle', size: 11, weight: 'bold', tone: 'green' });

        return svg(560, 232, s);
      })(),
      takeaways: [
        '**鞋帶公式（座標法）**：將多邊形頂點依順時針或逆時針順序排列並**把第 1 點重抄於最末列**，則**兩倍面積 $2A = |\\Sigma(E_i N_{i+1} - E_{i+1} N_i)| = |\\Sigma N_i(E_{i+1} - E_{i-1})|$**。',
        '**辛普森 1/3 法則 (Simpson\'s Rule)** 以二次拋物線逼近曲線邊界，精度高於梯形法，但**等分區間數 $n$ 必須為偶數（即支距線條數為奇數）**！係數口訣：**「頭尾 1、奇數 4、偶數 2，再乘 $d/3$」**。',
        '若區間數 $n$ 為奇數，前 $(n-1)$ 個偶數區間用辛普森法，最後 $1$ 個區間單獨用**梯形法 $A_{\\text{末}} = \\frac{h_{n-1} + h_n}{2} \\cdot d$** 補齊。',
      ],
    },
    {
      concept: '等精度獨立觀測值之最妥值 (MPV) 與中誤差 (Standard Error σ)',
      kind: 'chart',
      title: '觀測次數 n 對算術平均數中誤差 σ_M = σ / √n 之誤差衰減曲線',
      caption: '依據誤差傳播定律，等精度獨立觀測 n 次取算術平均，其中誤差按 1/√n 衰減：欲使精度提高為 2 倍，觀測次數須增為 4 倍；提高 3 倍則須 9 次。',
      svg: lineChart({
        w: 520,
        h: 260,
        x: { min: 1, max: 16, ticks: [1, 4, 9, 16], label: '等精度獨立觀測次數 n (次)' },
        y: { min: 0, max: 15, ticks: [0, 3, 6, 9, 12, 15], label: '算術平均值中誤差 σ_M (mm)' },
        series: [
          {
            name: '單次 σ = ±12 mm 之平均值中誤差 σ_M = 12/√n',
            tone: 'blue',
            points: [[1, 12.0], [2, 8.49], [3, 6.93], [4, 6.0], [6, 4.9], [9, 4.0], [12, 3.46], [16, 3.0]],
            markers: true,
          },
          {
            name: 'n 段獨立量距總和之中誤差 σ_Σ = 12·√n (÷5倍顯示)',
            tone: 'red',
            points: [[1, 2.4], [4, 4.8], [9, 7.2], [16, 9.6]],
            dash: 'dash',
            markers: true,
          },
        ],
        overlay: (f) =>
          point(f, 4, 6.0, 'n=4 次：σ_M = 12/2 = ±6 mm (精度變2倍)', { tone: 'blue', dx: 8, dy: -8 }) +
          point(f, 9, 4.0, 'n=9 次：σ_M = 12/3 = ±4 mm (精度變3倍)', { tone: 'blue', dx: 8, dy: -8 }),
      }),
      table: {
        headers: ['觀測或計算方式', '觀測次數 n', '算術平均值中誤差 σ_M = σ/√n', '總和之中誤差 σ_Σ = σ·√n'],
        rows: [
          ['單次觀測 (基準)', 'n = 1 次', '±12.0 mm (100%)', '±12.0 mm (1 段)'],
          ['重複 4 次觀測', 'n = 4 次', '±6.0 mm (縮小為 1/2)', '±24.0 mm (4 段相加放大 2 倍)'],
          ['重複 9 次觀測', 'n = 9 次', '±4.0 mm (縮小為 1/3)', '±36.0 mm (9 段相加放大 3 倍)'],
          ['重複 16 次觀測', 'n = 16 次', '±3.0 mm (縮小為 1/4)', '±48.0 mm (16 段相加放大 4 倍)'],
        ],
      },
      takeaways: [
        '統測必考兩大對比公式：(1) **$n$ 個同精度（$\\pm\\sigma$）觀測值相加減之總和**：中誤差放大為 **$\\sigma_{sum} = \\pm\\sigma\\sqrt{n}$**；(2) **$n$ 次同精度觀測取算術平均值**：中誤差縮小為 **$\\sigma_{\\bar{x}} = \\pm\\frac{\\sigma}{\\sqrt{n}}$**。',
        '若為不同精度獨立觀測值之線性函數 $Z = aX + bY \\pm c$，則誤差傳播定律通式為：**$\\sigma_Z = \\pm\\sqrt{(a\\sigma_X)^2 + (b\\sigma_Y)^2}$**（注意：不論原式是加或減，誤差平方項一律**相加**，且常數項 $c$ 微分為 $0$ 不產生誤差！）。',
      ],
    },
    {
      concept: '誤差傳播定律 (Law of Error Propagation) 通式與常見應用',
      kind: 'table',
      title: '誤差傳播定律典型工程應用（矩形面積、正方形、最妥值與中誤差）速查總表',
      caption: '彙整統測最常出題之偏微分誤差傳播公式、殘差 v 檢核性質與倍經距法 (DMD) 面積計算規則。',
      table: {
        headers: ['計算模型與項目', '函數關係式', '中誤差 / 核心計算公式', '統測解題關鍵要點'],
        rows: [
          ['等精度最妥值 (MPV) 與殘差', 'x̄ = (Σx_i)/n ； 殘差 v_i = x̄ − x_i', '單次中誤差 σ = ±√([vv]/(n−1))；最妥值中誤差 σ_M = ±√([vv]/(n(n−1)))', '殘差總和恆等於零 (Σv_i = 0)，且殘差平方和 [vv] 為最小 (最小二乘法)'],
          ['正方形邊長求面積 A = a²', '邊長實測值 a ± σ_a', '面積中誤差 σ_A = (dA/da)·σ_a = ±2a·σ_a；相對誤差 σ_A/A = 2·(σ_a/a)', '注意：A = a² 是「同一邊長自乘」，故係數是 2a·σ_a；若是兩獨立邊量測才是 √2·a·σ_a！'],
          ['長方形面積 A = L × W', '長 L ± σ_L 、 寬 W ± σ_W (獨立量測)', '面積中誤差 σ_A = ±√((W·σ_L)² + (L·σ_W)²)', '對 L 偏微分得 W，對 W 偏微分得 L；各自乘上該邊誤差後平方相加開根號'],
          ['倍經距法 (DMD) 面積計算', 'DMD_1 = ΔE_1；DMD_{i} = DMD_{i-1} + ΔE_{i-1} + ΔE_i', '2A = |Σ(DMD_i × ΔN_i)| (倍經距乘以該邊緯距之代數和)', '閉合檢核：最後一邊之倍經距 DMD_n 必等於該邊經距的負值 (−ΔE_n)！'],
        ],
      },
      takeaways: [
        '**極易混淆陷阱**：同一個正方形只量一次邊長 $a \\pm \\sigma_a$ 求面積 $A = a^2$，屬同一變數函數，**$\\sigma_A = \\pm 2a\\sigma_a$**；若一個正方形分別獨立量測相鄰兩邊 $a_1, a_2$ 求 $A = a_1 a_2$，屬兩獨立變數，此時才是 **$\\sigma_A = \\pm\\sqrt{a^2\\sigma_a^2 + a^2\\sigma_a^2} = \\pm\\sqrt{2}a\\sigma_a$**！',
        '**倍經距法 (DMD)** 口訣：**「首邊 DMD 等於首邊經距；次邊 DMD 等於前邊 DMD 加前邊經距再加本邊經距；末邊 DMD 等於末邊經距加負號。」**',
      ],
    },
  ],
};
