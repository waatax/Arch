import type { TopicVisualMap } from './types';
import {
  arrow, barChart, box, circle, dim, dot, flow, line, lineChart, path, pill, polar, polyline, rect,
  svg, text, type Pt,
} from './kit';

/** 波耳模型：殼層電子數 */
function bohr(cx: number, cy: number, shells: number[], symbol: string): string {
  let s = circle(cx, cy, 14, { tone: 'red', fill: 'red', soft: true, w: 1.6 }) + text(cx, cy + 4, symbol, { anchor: 'middle', weight: 'bold', size: 12 });
  shells.forEach((n, k) => {
    const r = 26 + k * 18;
    s += circle(cx, cy, r, { tone: 'muted', w: 1 });
    for (let i = 0; i < n; i++) { const [x, y] = polar(cx, cy, r, 90 + (360 / n) * i); s += dot(x, y, 3.4, 'blue'); }
  });
  return s;
}

export const chemistryVisuals: TopicVisualMap = {
  'matter-composition': [
    {
      concept: '物質的分類與建築材料相態',
      kind: 'diagram',
      title: '物質分類樹狀架構（純物質 vs. 混合物）與建材 VOC 逸散機制圖解',
      caption: '將建築常見物質依組成是否固定分為純物質（元素、化合物）與混合物（均勻溶液/合金、不均勻複合材如混凝土），並標示塗料 VOC 逸散過程。',
      svg: (() => {
        let s = '';
        s += box(20, 82, 96, 56, ['建築物質', '相態與分類'], { tone: 'ink', size: 12 });
        s += arrow(116, 98, 152, 52, { tone: 'blue', w: 1.8 });
        s += arrow(116, 122, 152, 168, { tone: 'green', w: 1.8 });
        s += box(154, 22, 156, 62, ['純物質 (固定熔沸點)', '具單一化學式'], { tone: 'blue', size: 11.5 });
        s += box(154, 140, 156, 62, ['混合物 (無固定熔點)', '物理混合、性質隨配比變'], { tone: 'green', size: 11.5 });
        s += arrow(310, 40, 348, 32, { tone: 'blue', w: 1.6 });
        s += arrow(310, 65, 348, 86, { tone: 'blue', w: 1.6 });
        s += arrow(310, 158, 348, 144, { tone: 'green', w: 1.6 });
        s += arrow(310, 182, 348, 196, { tone: 'amber', w: 1.6 });
        s += box(350, 12, 192, 42, ['元素：銅線 Cu、純鐵 Fe、鋁 Al'], { tone: 'blue', size: 11 });
        s += box(350, 64, 192, 42, ['化合物：石英 SiO₂、生石灰 CaO'], { tone: 'violet', size: 11 });
        s += box(350, 122, 192, 42, ['均勻混合物：結構鋼合金、空氣'], { tone: 'green', size: 11 });
        s += box(350, 176, 192, 42, ['不均勻混合物：混凝土、花崗岩'], { tone: 'amber', size: 11 });
        return svg(560, 230, s);
      })(),
      takeaways: [
        '建築核心材料如**混凝土、水泥、木材、瀝青、油漆、不鏽鋼、青銅**全部屬於**混合物**（不具單一分子式，熔點為一範圍）。',
        '碳酸鈣 $\\text{CaCO}_3$、熟石灰 $\\text{Ca(OH)}_2$、二氧化矽 $\\text{SiO}_2$、純水 $\\text{H}_2\\text{O}$ 則為具有固定組成比例的**純物質（化合物）**。',
      ],
    },
    {
      concept: '奈米二氧化鈦 (TiO₂) 光觸媒催化空氣淨化與自潔化學',
      kind: 'chart',
      title: '室內裝修後 TVOC 濃度一階衰減示意曲線（通風不良、自然換氣、TiO₂ 光觸媒）',
      caption: '以一階衰減模型 C(t) = C₀·e^(−kt) 示意三種情境的 TVOC 下降速率（k 值為教學假設），並標示我國室內空氣品質標準 TVOC 1 小時值 0.56 ppm。',
      svg: lineChart({
        w: 520,
        h: 250,
        x: { min: 0, max: 14, ticks: [0, 3, 7, 10, 14], label: '裝修完工後天數 t (天)', fmt: (v) => `${v}天` },
        y: { min: 0, max: 2.5, ticks: [0, 0.56, 1.0, 1.5, 2.0, 2.5], label: '室內 TVOC 濃度 (ppm)' },
        series: [
          { name: '通風不良 (衰減極慢)', tone: 'red', points: [[0, 2.4], [3, 2.0], [7, 1.6], [10, 1.35], [14, 1.1]], markers: true, smooth: true },
          { name: '標準自然換氣', tone: 'blue', points: [[0, 2.4], [3, 1.3], [7, 0.65], [10, 0.42], [14, 0.25]], markers: true, smooth: true },
          { name: '搭配 TiO₂ 光觸媒分解', tone: 'green', dash: 'dash', points: [[0, 2.4], [3, 0.8], [7, 0.28], [10, 0.12], [14, 0.05]], markers: true, smooth: true },
        ],
        overlay: (f) => line(f.box.left, f.Y(0.56), f.box.left + f.box.width, f.Y(0.56), { tone: 'amber', w: 1.5, dash: 'dot' }) +
          text(f.box.left + f.box.width - 6, f.Y(0.56) - 6, '室內空氣品質標準 TVOC ≤ 0.56 ppm', { tone: 'amber', size: 11, anchor: 'end', weight: 'bold' }),
      }),
      table: {
        headers: ['裝修後時間 t', '通風不良 TVOC (ppm)', '標準換氣 TVOC (ppm)', 'TiO₂ 光觸媒分解 TVOC'],
        rows: [
          ['第 0 天 (剛完工)', '2.40 (嚴重超標)', '2.40', '2.40'],
          ['第 3 天', '2.00', '1.30', '0.80'],
          ['第 7 天 (一週)', '1.60', '0.65', '0.28 (已達標 < 0.56)'],
          ['第 14 天 (兩週)', '1.10 (仍超標)', '0.25 (達標 < 0.56)', '0.05 (完全淨化)'],
        ],
      },
      takeaways: [
        '健康綠建材標章重點管制兩大逸散物：**甲醛（$\\text{HCHO}$，致癌物）**與**總揮發性有機化合物（$\\text{TVOC}$，含苯、甲苯、二甲苯）**。',
        '奈米二氧化鈦（$\\text{TiO}_2$）光觸媒在紫外光照射下產生強氧化力之氫氧自由基（$\\cdot\\text{OH}$），可將有機污染物與 VOCs 氧化分解為無害的 $\\text{CO}_2$ 與 $\\text{H}_2\\text{O}$。',
      ],
    },
    {
      concept: '微觀原子結構與化學鍵結 (Atomic Structure & Chemical Bonding)',
      kind: 'table',
      title: '四大化學鍵結與建築材料物理機械性質對應總表',
      caption: '從微觀化學鍵（離子鍵、共價網狀、金屬鍵、分子間凡得瓦力）解釋建築石材、玻璃、鋼鐵與高分子塑膠之巨觀工程特性。',
      table: {
        headers: ['化學鍵結類型', '微觀粒子與鍵結機制', '巨觀工程力學與物理性質', '代表性建築工程材料'],
        rows: [
          ['離子鍵 (Ionic)', '陰陽離子靜電庫侖引力排列成晶格', '高熔點、硬而脆、固態不導電、熔融或水溶液導電', '大理石 CaCO₃、石膏 CaSO₄·2H₂O、食鹽 NaCl'],
          ['共價網狀固體', '原子間以連續強共價鍵結成三維網狀', '極高硬度、極高熔點、化學性質極穩定、不導電', '石英砂 SiO₂、花崗岩矽酸鹽、金剛石鑽頭'],
          ['金屬鍵 (Metallic)', '金屬陽離子浸泡於自由移動「電子海」', '具良好延展性（受剪力滑移不斷裂）、高導熱與導電', '建築結構鋼筋 (Fe)、銅導線 (Cu)、鋁帷幕牆 (Al)'],
          ['共價分子／高分子', '分子內共價鍵強，鏈間靠凡得瓦力或交聯', '密度輕、絕緣隔熱佳，受紫外線 UV 易斷鍵老化', 'PVC 塑膠管、PU 防水材、壓克力塗料'],
        ],
      },
      takeaways: [
        '**鋼材具延展性（韌性）**是因為金屬鍵具有「自由電子海」，原子層滑移時不會破壞鍵結；**石材與陶瓷硬而脆**則是因為離子鍵或共價網狀一旦錯位即同性電荷相斥斷裂。',
        '石英（$\\text{SiO}_2$）與金剛石（$\\text{C}$）屬於**共價網狀晶體**（非一般分子晶體），熔點極高且固態、液態皆不導電。',
      ],
    },
    {
      concept: '原子結構、電子排列與元素週期表',
      kind: 'diagram',
      title: '矽與鈣的電子排列（波耳模型）：價電子決定化學性質',
      caption: '矽 Si（原子序 14）電子排列 2, 8, 4，價電子 4，屬第 14 族；鈣 Ca（原子序 20）電子排列 2, 8, 8, 2，價電子 2，屬第 2 族。',
      svg: (() => {
        let s = '';
        s += bohr(140, 120, [2, 8, 4], 'Si');
        s += bohr(400, 120, [2, 8, 8, 2], 'Ca');
        s += text(140, 220, '矽 Si：2, 8, 4（第 14 族）', { anchor: 'middle', weight: 'bold', size: 12.5 });
        s += text(400, 228, '鈣 Ca：2, 8, 8, 2（第 2 族）', { anchor: 'middle', weight: 'bold', size: 12.5 });
        s += text(140, 24, '石英、玻璃的主要元素', { anchor: 'middle', size: 12, tone: 'muted' });
        s += text(400, 24, '石灰石、水泥、石膏的主要元素', { anchor: 'middle', size: 12, tone: 'muted' });
        return svg(560, 240, s);
      })(),
      takeaways: [
        '第 n 層最多容納 2n² 個電子；週期數等於電子殼層數。',
        '同族元素價電子數相同，化學性質相似。',
      ],
    },
    {
      concept: '物質的三相圖與分離、鑑定方法',
      kind: 'diagram',
      title: '水的三相圖（示意，未按比例）',
      caption: '三條曲線分隔固、液、氣三相；三相點約 0.01 ℃、0.006 atm，臨界點約 374 ℃、218 atm。水的固液平衡線斜率為負，加壓會使冰熔化。',
      svg: (() => {
        let s = '';
        const O: Pt = [70, 200];
        s += arrow(O[0], O[1], 520, O[1], { tone: 'ink', w: 1.4 }) + text(516, O[1] + 18, '溫度', { anchor: 'end', weight: 'bold' });
        s += arrow(O[0], O[1], O[0], 24, { tone: 'ink', w: 1.4 }) + text(O[0] + 8, 32, '壓力', { weight: 'bold' });
        const T: Pt = [190, 160];
        const C: Pt = [440, 60];
        s += path(`M80,196 Q140,186 ${T[0]},${T[1]}`, { tone: 'violet', w: 2.2 });
        s += path(`M${T[0]},${T[1]} L172,40`, { tone: 'blue', w: 2.2 });
        s += path(`M${T[0]},${T[1]} Q330,140 ${C[0]},${C[1]}`, { tone: 'red', w: 2.2 });
        s += dot(T[0], T[1], 5, 'green') + text(T[0] + 8, T[1] + 18, '三相點', { tone: 'green', weight: 'bold', size: 12 });
        s += dot(C[0], C[1], 5, 'red') + text(C[0] + 8, C[1] - 6, '臨界點', { tone: 'red', weight: 'bold', size: 12 });
        s += text(110, 100, '固', { size: 18, weight: 'bold', tone: 'violet' });
        s += text(260, 80, '液', { size: 18, weight: 'bold', tone: 'blue' });
        s += text(330, 180, '氣', { size: 18, weight: 'bold', tone: 'red' });
        s += line(O[0], 130, 500, 130, { tone: 'muted', w: 1, dash: 'dash' }) + text(500, 124, '1 atm', { tone: 'muted', size: 11, anchor: 'end' });
        s += text(185, 124, '0 ℃', { tone: 'blue', size: 11, anchor: 'end' });
        s += text(318, 124, '100 ℃', { tone: 'red', size: 11 });
        return svg(560, 220, s);
      })(),
      takeaways: [
        '在 1 atm 下，水在 0 ℃ 熔化、100 ℃ 沸騰；三相點與臨界點是水的特性點。',
        '冰的密度比水小、結冰體積約膨脹 9%，是水管凍裂與混凝土凍融破壞的原因。',
      ],
    },
    {
      concept: '化學式與分子模型',
      kind: 'diagram',
      title: '常見分子的形狀：正四面體、角形、直線形',
      caption: '甲烷 CH₄ 為正四面體（鍵角約 109.5°），水 H₂O 為角形（約 104.5°），二氧化碳 CO₂ 為直線形（180°）。',
      svg: (() => {
        let s = '';
        const atom = (x: number, y: number, label: string, tone: 'ink' | 'red' | 'blue' | 'muted', r = 14) => circle(x, y, r, { tone, fill: tone, soft: true, w: 1.6 }) + text(x, y + 4, label, { anchor: 'middle', weight: 'bold', size: 12 });
        const C: Pt = [100, 110];
        const H4: Pt[] = [[100, 50], [48, 140], [100, 160], [152, 140]];
        H4.forEach((p) => { s += line(C[0], C[1], p[0], p[1], { w: 2 }); });
        s += atom(C[0], C[1], 'C', 'ink', 16) + H4.map((p) => atom(p[0], p[1], 'H', 'muted', 11)).join('');
        s += text(100, 200, 'CH₄ 正四面體 109.5°', { anchor: 'middle', weight: 'bold', size: 12 });
        const O: Pt = [280, 90];
        const Ha = polar(O[0], O[1], 60, 270 - 52.25);
        const Hb = polar(O[0], O[1], 60, 270 + 52.25);
        s += line(O[0], O[1], Ha[0], Ha[1], { w: 2 }) + line(O[0], O[1], Hb[0], Hb[1], { w: 2 });
        s += atom(O[0], O[1], 'O', 'red', 16) + atom(Ha[0], Ha[1], 'H', 'muted', 11) + atom(Hb[0], Hb[1], 'H', 'muted', 11);
        s += text(280, 200, 'H₂O 角形 104.5°', { anchor: 'middle', weight: 'bold', size: 12 });
        s += line(400, 110, 520, 110, { w: 2 });
        s += atom(400, 110, 'O', 'red', 15) + atom(460, 110, 'C', 'ink', 15) + atom(520, 110, 'O', 'red', 15);
        s += text(460, 200, 'CO₂ 直線形 180°', { anchor: 'middle', weight: 'bold', size: 12 });
        return svg(560, 216, s);
      })(),
      takeaways: [
        '球棒模型看鍵角與方向，填充模型看原子相對大小與分子外形。',
        '二氧化矽 SiO₂ 是三維網狀固體，沒有獨立分子，SiO₂ 只代表原子數比。',
      ],
    },
  ],

  'chemical-reactions': [
    {
      concept: '水化熱控制與卜特嵐礦物摻和料 (Fly Ash & Slag) 之波左蘭反應',
      kind: 'diagram',
      title: '波特蘭水泥水化反應 (C₃S, C₂S) 生成 C-S-H 膠體與波左蘭二次反應機制圖',
      caption: '水泥熟料加水後生成主力強度來源 C-S-H 膠體與副產物氫氧化鈣 Ca(OH)₂（提供 pH 12.5 高鹼護鋼筋），摻入飛灰或爐石粉可進行波左蘭反應消耗 Ca(OH)₂ 轉化為額外 C-S-H。',
      svg: (() => {
        let s = '';
        s += box(18, 56, 128, 108, [
          '波特蘭水泥 + 水',
          'C₃S (早強、高熱)',
          'C₂S (晚強、低熱)',
          '石膏 (防 C₃A 閃凝)',
        ], { tone: 'blue', size: 11.5 });
        s += arrow(146, 86, 198, 54, { tone: 'green', w: 2 });
        s += arrow(146, 134, 198, 166, { tone: 'amber', w: 2 });
        s += box(200, 18, 166, 68, [
          'C-S-H 水化矽酸鈣膠體',
          '佔 50~60%，提供核心抗壓強度',
        ], { tone: 'green', size: 11.5 });
        s += box(200, 134, 166, 72, [
          '副產物 Ca(OH)₂ 熟石灰',
          '維持 pH ≈ 12.5~13.5 強鹼',
          '在鋼筋表面形成防鏽鈍化膜',
        ], { tone: 'amber', size: 11 });
        s += arrow(366, 170, 404, 170, { tone: 'red', w: 2, label: '+ SiO₂', labelPos: 'mid', labelOffset: [0, -8] });
        s += box(406, 118, 138, 92, [
          '波左蘭二次水化反應',
          '飛灰 / 爐石粉活性 SiO₂',
          '+ Ca(OH)₂ + H₂O',
          '⇒ 二次 C-S-H 膠體！',
        ], { tone: 'red', size: 11 });
        s += box(406, 18, 138, 68, [
          '巨體積混凝土效益',
          '降低水化熱 ΔT_adiab',
          '填塞毛細孔、提升晚期強度',
        ], { tone: 'violet', size: 11 });
        return svg(560, 230, s);
      })(),
      takeaways: [
        '水泥研磨時必加入 $3\\sim 5\\%$ 的**石膏（$\\text{CaSO}_4\\cdot 2\\text{H}_2\\text{O}$）**，目的是與鋁酸三鈣（$\\text{C}_3\\text{A}$）反應生成鈣礬石薄膜，**防止水泥發生瞬凝（閃凝 Flash Set）**。',
        '石灰石熱循環三部曲：石灰石 $\\text{CaCO}_3 \\xrightarrow{\\Delta} \\text{CaO（生石灰）} + \\text{CO}_2\\uparrow$；生石灰加水 $\\text{CaO} + \\text{H}_2\\text{O} \\to \\text{Ca(OH)}_2\\text{（熟石灰，強放熱）}$；熟石灰吸收空氣 $\\text{CO}_2 \\to \\text{CaCO}_3$ 硬化。',
      ],
    },
    {
      concept: '波特蘭水泥四大熟料礦物水化特性比較',
      kind: 'chart',
      title: '波特蘭水泥四大熟料礦物 (C₃S, C₂S, C₃A, C₄AF) 抗壓強度隨齡期發展曲線',
      caption: '比較水泥四大熟料礦物在 7 天至 90 天養護齡期的抗壓強度發展：C₃S 主導 28 天內早期強度，C₂S 早期緩慢但 28 天後後期強度大幅追上。',
      svg: lineChart({
        w: 520,
        h: 250,
        x: { min: 0, max: 90, ticks: [1, 7, 28, 60, 90], label: '養護齡期 (天)', fmt: (v) => `${v}天` },
        y: { min: 0, max: 70, ticks: [0, 15, 30, 45, 60], label: '化合物抗壓強度 (MPa)' },
        series: [
          { name: 'C₃S 矽酸三鈣 (早強主力)', tone: 'red', points: [[1, 14], [7, 36], [28, 52], [60, 58], [90, 62]], markers: true, smooth: true },
          { name: 'C₂S 矽酸二鈣 (晚強主力)', tone: 'blue', points: [[1, 2], [7, 8], [28, 25], [60, 46], [90, 58]], markers: true, smooth: true },
          { name: 'C₃A 鋁酸三鈣 (瞬凝高熱、低強)', tone: 'amber', dash: 'dash', points: [[1, 6], [7, 9], [28, 11], [60, 12], [90, 12]], markers: true, smooth: true },
        ],
      }),
      table: {
        headers: ['熟料礦物簡稱', '化學式', '水化速率與水化熱', '對混凝土工程強度之貢獻'],
        rows: [
          ['C₃S (矽酸三鈣)', '3CaO · SiO₂ (佔 50%)', '水化快、水化熱高', '貢獻 1～28 天早期強度主力（第 III 型高早強水泥增 C₃S）'],
          ['C₂S (矽酸二鈣)', '2CaO · SiO₂ (佔 25%)', '水化最慢、水化熱最低', '貢獻 28 天以後晚期長期強度（第 IV 型低熱巨積水泥增 C₂S）'],
          ['C₃A (鋁酸三鈣)', '3CaO · Al₂O₃ (佔 10%)', '瞬間反應、水化熱最高', '強度貢獻極小，易受硫酸鹽侵蝕（第 V 型抗硫水泥嚴格限制 C₃A ≤ 5%）'],
          ['C₄AF (鐵鋁酸四鈣)', '4CaO · Al₂O₃ · Fe₂O₃', '水化中速、熱量中低', '作為助熔劑降低窯燒溫度，賦予水泥深灰色澤'],
        ],
      },
      takeaways: [
        '**水化熱大小順序**：$\\text{C}_3\\text{A} > \\text{C}_3\\text{S} > \\text{C}_4\\text{AF} > \\text{C}_2\\text{S}$；水庫大壩等巨體積混凝土為防溫差裂縫，必須採用高 $\\text{C}_2\\text{S}$、低 $\\text{C}_3\\text{A}$ 的第 IV 型低熱水泥或摻加飛灰／爐石粉。',
        '化學計量必背：煅燒 $100\\text{ g}$ 碳酸鈣（$\\text{CaCO}_3$，分子量 $100 = 40+12+48$）完全分解恰產生 $56\\text{ g}$ 生石灰（$\\text{CaO}$）與 $44\\text{ g}$ 二氧化碳（$\\text{CO}_2$，$1\\text{ mol}$）。',
      ],
    },
    {
      concept: '莫耳與化學計量計算 (Stoichiometry)',
      kind: 'table',
      title: '莫耳化學計量公式與 CNS 卜特蘭水泥五大型號工程選用對照表',
      caption: '整理莫耳數換算三大公式，以及波特蘭水泥第 I 至第 V 型之熟料化學調整與適用工程。',
      table: {
        headers: ['化學計量／水泥型號', '核心公式或熟料成分特徵', '物理化學關鍵參數', '土木與建築工程應用'],
        rows: [
          ['莫耳數三大換算', 'n = W/M = N/(6.02×10²³) = V_STP/22.4', 'STP (0℃, 1atm) 氣體莫耳體積 22.4 L', '計算水泥窯煅燒 CaCO₃ 之 CO₂ 排放量'],
          ['第 I 型 vs 第 II 型', 'I 型普通水泥；II 型平熱中抗硫 (C₃A ≤ 8%)', 'II 型水化熱與抗硫酸鹽皆居中', '一般 RC 建築用 I 型；地下基礎工程用 II 型'],
          ['第 III 型 (早強水泥)', '提高 C₃S 比例並提高研磨細度 (比表面積)', '1～3 天即達高強度，但水化熱極大', '道路緊急搶修、冬季低溫施工、預力構件拆模'],
          ['第 IV 型 vs 第 V 型', 'IV 型低熱 (高 C₂S)；V 型抗硫酸鹽 (C₃A ≤ 5%)', '抑制鈣礬石結晶膨脹破壞與溫度裂縫', '水壩巨積混凝土用 IV 型；海港溫泉區用 V 型'],
        ],
      },
      takeaways: [
        '莫耳濃度（體積莫耳濃度）公式：$M = \\frac{\\text{溶質莫耳數 } n (\\text{mol})}{\\text{溶液體積 } V (\\text{L})}$；溶液稀釋前後溶質莫耳數不變：$M_1 V_1 = M_2 V_2$。',
        '海港防波堤或地下含高濃度硫酸鹽（$\\text{SO}_4^{2-}$）土壤，必須選用**第 V 型抗硫酸鹽水泥（限制 $\\text{C}_3\\text{A} \\le 5\\%$）**，避免生成二次鈣礬石膨脹開裂。',
      ],
    },
    {
      concept: '氣體的性質與氣體定律',
      kind: 'chart',
      title: '波以耳定律：定溫下 1 mol 氣體的壓力與體積成反比（約 25 ℃）',
      caption: 'PV = nRT ≈ 24.5 atm·L 為定值：體積減半，壓力加倍；氣體定律中的溫度一律使用絕對溫度 K。',
      svg: lineChart({
        w: 520,
        h: 260,
        x: { min: 4, max: 25, ticks: [5, 10, 15, 20, 25], label: '體積 V (L)' },
        y: { min: 0, max: 6, ticks: [0, 1, 2, 3, 4, 5, 6], label: '壓力 P (atm)' },
        series: [{ name: 'PV ≈ 24.5', tone: 'blue', points: [4.5, 5, 6, 8, 10, 12.25, 15, 20, 24.5].map((v) => [v, Math.round((24.5 / v) * 100) / 100] as Pt), smooth: true, markers: true }],
        overlay: (f) => text(f.X(12.25) + 8, f.Y(2) - 8, 'V = 12.25 L → P = 2 atm', { tone: 'red', size: 11, weight: 'bold' }) + text(f.X(24.5) - 4, f.Y(1) - 10, 'V = 24.5 L → P = 1 atm', { tone: 'red', size: 11, weight: 'bold', anchor: 'end' }),
      }),
      table: { headers: ['體積 V (L)', '壓力 P (atm)', 'P × V'], rows: [['24.5', '1.0', '24.5'], ['12.25', '2.0', '24.5'], ['6.125', '4.0', '24.5']] },
      takeaways: [
        '波以耳定律：P₁V₁ = P₂V₂（定溫）；查理定律：V₁/T₁ = V₂/T₂（定壓，T 用 K）。',
        '同溫同壓下，同體積氣體含相同分子數（亞佛加厥定律）。',
      ],
    },
    {
      concept: '反應速率與影響因素',
      kind: 'chart',
      title: '溫度升高時反應物濃度下降得更快（示意）',
      caption: '以一級反應示意：溫度升高 10 ℃ 使速率常數約加倍，反應物濃度下降一半所需的時間縮短。',
      svg: lineChart({
        w: 520,
        h: 250,
        x: { min: 0, max: 60, ticks: [0, 10, 20, 30, 40, 50, 60], label: '時間 (min)' },
        y: { min: 0, max: 1, ticks: [0, 0.25, 0.5, 0.75, 1], label: '反應物濃度 (M)' },
        series: [
          { name: '25 ℃（k）', tone: 'blue', points: [0, 10, 20, 30, 40, 50, 60].map((t) => [t, Math.round(Math.exp(-0.0231 * t) * 1000) / 1000] as Pt), smooth: true, markers: true },
          { name: '35 ℃（約 2k）', tone: 'red', points: [0, 10, 20, 30, 40, 50, 60].map((t) => [t, Math.round(Math.exp(-0.0462 * t) * 1000) / 1000] as Pt), smooth: true, markers: true },
        ],
        overlay: (f) => line(f.box.left, f.Y(0.5), f.box.left + f.box.width, f.Y(0.5), { tone: 'muted', w: 1, dash: 'dash' }) + text(f.X(15) + 4, f.Y(0.5) + 16, '35 ℃：15 min 剩一半', { tone: 'red', size: 11, weight: 'bold' }) + text(f.X(30) + 4, f.Y(0.5) - 6, '25 ℃：30 min 剩一半', { tone: 'blue', size: 11, weight: 'bold' }),
      }),
      takeaways: [
        '溫度升高使具有足夠能量（≥ 活化能）的粒子比例增加，有效碰撞變多。',
        '此圖為「溫度升高 10 ℃ 速率約加倍」的示意；實際倍數依反應而異。',
      ],
    },
    {
      concept: '可逆反應、動態平衡與勒沙特列原理',
      kind: 'chart',
      title: '可逆反應達到動態平衡：濃度不再改變，但反應仍在進行（示意）',
      caption: '反應開始時反應物濃度下降、生成物濃度上升；達平衡後兩者濃度維持定值，此時正、逆反應速率相等。',
      svg: lineChart({
        w: 520,
        h: 250,
        x: { min: 0, max: 50, ticks: [0, 10, 20, 30, 40, 50], label: '時間' },
        y: { min: 0, max: 1, ticks: [0, 0.2, 0.4, 0.6, 0.8, 1], label: '濃度 (M)' },
        series: [
          { name: '反應物', tone: 'blue', points: [0, 5, 10, 15, 20, 30, 40, 50].map((t) => [t, Math.round((0.4 + 0.6 * Math.exp(-t / 6)) * 1000) / 1000] as Pt), smooth: true },
          { name: '生成物', tone: 'red', points: [0, 5, 10, 15, 20, 30, 40, 50].map((t) => [t, Math.round(0.6 * (1 - Math.exp(-t / 6)) * 1000) / 1000] as Pt), smooth: true },
        ],
        overlay: (f) => line(f.X(25), f.box.top, f.X(25), f.box.top + f.box.height, { tone: 'muted', w: 1, dash: 'dash' }) + text(f.X(25) + 6, f.box.top + 14, '達到平衡', { tone: 'green', size: 11, weight: 'bold' }),
      }),
      takeaways: [
        '平衡時濃度「不再改變」，不代表反應物與生成物濃度「相等」。',
        '勒沙特列原理：改變濃度、壓力或溫度，平衡會向減弱該改變的方向移動；催化劑不改變平衡位置。',
      ],
    },
  ],

  'acids-bases-salts': [
    {
      concept: '混凝土中性化（碳化反應）化學與鋼筋防護失效',
      kind: 'diagram',
      title: '混凝土大氣 CO₂ 中性化（碳化）擴散與鋼筋鈍化膜破壞機制圖解',
      caption: '大氣中 CO₂ 由混凝土表面毛細孔向內擴散，與孔隙水中的 Ca(OH)₂ 中和生成 CaCO₃，使 pH 值由 13 驟降至 9 以下，當碳化前緣抵達鋼筋表面即破壞鈍化膜引發鏽蝕膨脹。',
      svg: (() => {
        let s = '';
        // 混凝土剖面
        s += rect(45, 28, 85, 165, { tone: 'amber', fill: 'amber', soft: true, w: 1.6 });
        s += rect(130, 28, 155, 165, { tone: 'blue', fill: 'blue', soft: true, w: 1.6 });
        s += line(130, 24, 130, 198, { tone: 'red', w: 2.2, dash: 'dash' });
        // 鋼筋
        s += circle(168, 110, 18, { tone: 'ink', fill: 'red', soft: true, w: 2.5 });
        s += text(168, 114, 'Fe', { anchor: 'middle', weight: 'bold', size: 12, tone: 'red' });
        // CO2 擴散箭頭
        s += arrow(8, 65, 75, 65, { tone: 'red', w: 2.2, label: 'CO₂ + H₂O', labelPos: 'start', labelOffset: [0, -10] });
        s += arrow(8, 145, 75, 145, { tone: 'red', w: 2.2 });
        s += text(87, 50, '已碳化區', { anchor: 'middle', tone: 'amber', weight: 'bold', size: 12 });
        s += text(87, 98, 'CaCO₃ 生成', { anchor: 'middle', size: 11.5 });
        s += text(87, 118, 'pH < 9.0', { anchor: 'middle', tone: 'red', weight: 'bold', size: 12 });
        s += text(87, 175, '酚酞試液：無色', { anchor: 'middle', size: 11, tone: 'muted' });
        s += text(215, 50, '未碳化健全區', { anchor: 'middle', tone: 'blue', weight: 'bold', size: 12 });
        s += text(215, 74, '富含 Ca(OH)₂', { anchor: 'middle', size: 11.5 });
        s += text(215, 96, 'pH ≈ 12.5 ~ 13.5', { anchor: 'middle', tone: 'blue', weight: 'bold', size: 12 });
        s += text(215, 175, '酚酞試液：紫紅色', { anchor: 'middle', size: 11, tone: 'red', weight: 'bold' });
        s += dim(45, 210, 130, 210, '碳化深度 x_c = k√t', { tone: 'red' });
        s += dim(45, 16, 150, 16, '保護層厚度 c', { tone: 'ink' });
        s += box(302, 28, 242, 82, [
          '混凝土碳化化學反應式',
          'Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O',
          '鹼性耗盡 (pH < 11) ⇒ 鋼筋鈍化膜 γ-Fe₂O₃ 瓦解',
        ], { tone: 'red', size: 11 });
        s += box(302, 122, 242, 82, [
          '碳化深度菲克擴散定律 (Fick Law)',
          'x_c = k · √t（與時間平方根成正比）',
          '降低水灰比 W/C、加厚保護層 c 可延壽',
        ], { tone: 'blue', size: 11 });
        return svg(560, 230, s);
      })(),
      takeaways: [
        '工地檢測混凝土中性化（碳化）深度標準方法：在鑽心試體新劈裂面噴灑 **$1\\%$ 酚酞（Phenolphthalein）酒精溶液**，**未碳化健全區（$\\text{pH} > 10$）呈紫紅色，已碳化區（$\\text{pH} < 8.5$）呈無色**。',
        '碳化深度公式 $x_c = k\\sqrt{t}$：碳化深度變為 $2$ 倍，所需時間 $t$ 為 **$4$ 倍**！',
      ],
    },
    {
      concept: '溶液 pH 值計算與水的離子積',
      kind: 'chart',
      title: '常見建築與環境液體之 pH 值刻度（酸雨、純水、海水、新鮮混凝土孔隙水）比較圖',
      caption: '對照工業酸雨 (pH 4.2)、天然雨水 (pH 5.6)、中性純水 (pH 7.0)、碳化混凝土 (pH 8.5) 與健全混凝土孔隙水 (pH 13.0) 之酸鹼度分佈。',
      svg: barChart({
        w: 520,
        h: 250,
        categories: ['工業酸雨', '正常雨水臨界', '25℃ 純水', '碳化後混凝土', '新鮮健全混凝土'],
        y: { min: 0, max: 14, ticks: [0, 3.5, 5.6, 7.0, 10.5, 14], label: '酸鹼值 pH = -log[H⁺]' },
        values: true,
        series: [
          { name: '溶液與建材孔隙液 pH 值', tone: 'blue', values: [4.2, 5.6, 7.0, 8.5, 13.0] },
        ],
      }),
      table: {
        headers: ['環境或建材液體', 'pH 值範圍', '氫離子濃度 [H⁺] (M)', '建築材料化學效應'],
        rows: [
          ['工業酸雨 (SO₂, NOₓ)', 'pH < 5.0 (例 4.2)', '> 10⁻⁵ M', '溶解大理石雕像 CaCO₃ + 2H⁺ → Ca²⁺ + CO₂↑ + H₂O'],
          ['正常雨水 (溶有 CO₂)', 'pH ≈ 5.6 (酸雨分界)', '2.5 × 10⁻⁶ M', '大氣 CO₂ 溶於水生成弱碳酸 H₂CO₃'],
          ['25℃ 中性純水', 'pH = 7.0', '1.0 × 10⁻⁷ M', '[H⁺] = [OH⁻] = 10⁻⁷ M，Kw = 10⁻¹⁴'],
          ['碳化後混凝土孔隙液', 'pH ≈ 8.5 ～ 9.0', '≈ 10⁻⁹ M', '酚酞呈無色，鋼筋失去鈍化保護開始生鏽'],
          ['健全混凝土孔隙液', 'pH ≈ 12.5 ～ 13.5', '≈ 10⁻¹³ M ([OH⁻]=0.1M)', '飽和 Ca(OH)₂ 強鹼環境，鋼筋表面生成緻密鈍化膜'],
        ],
      },
      takeaways: [
        '$25^\\circ\\text{C}$ 時水的離子積常數 $K_w = [\\text{H}^+][\\text{OH}^-] = 10^{-14} \\implies \\text{pH} + \\text{pOH} = 14$。',
        '$\\text{pH} = -\\log_{10}[\\text{H}^+]$：**$\\text{pH}$ 每相差 $1$，氫離子濃度 $[\\text{H}^+]$ 相差 $10$ 倍**（例如 $\\text{pH } 4$ 的酸雨比 $\\text{pH } 6$ 的雨水酸度強 $10^2 = 100$ 倍）。',
      ],
    },
    {
      concept: '常用建築材料對酸鹼化學環境之耐蝕性比較',
      kind: 'table',
      title: '酸鹼學說、酸雨成因與常用建築材料耐酸鹼腐蝕特性比較表',
      caption: '彙整阿瑞尼斯與布忍斯特酸鹼定義、酸雨分界標準，以及大理石、花崗岩、玻璃與兩性金屬鋁之耐酸鹼表現。',
      table: {
        headers: ['化學主題／建材', '化學反應式與核心機制', '耐酸／耐鹼特性判別', '建築外牆與工程選材對策'],
        rows: [
          ['酸鹼學說與酸雨', '阿瑞尼斯：水溶液中解離 H⁺ 為酸、OH⁻ 為鹼', '布忍斯特：酸給出 H⁺、鹼接受 H⁺', '酸雨定義為 pH < 5.6（元凶為 SO₂ 與 NOₓ）'],
          ['大理石 vs 花崗岩', '大理石 (CaCO₃) 遇酸冒泡溶解；花崗岩 (SiO₂) 耐酸', '碳酸鹽石材怕酸雨；矽酸鹽石材耐酸雨', '戶外建築外牆與廣場地坪應選花崗岩而非大理石'],
          ['建築玻璃 (SiO₂)', 'SiO₂ + 4HF → SiF₄↑ + 2H₂O；SiO₂ + 2NaOH → Na₂SiO₃', '耐一般強酸（唯獨怕氫氟酸 HF），微溶於強鹼', '水泥漿（強鹼）濺到玻璃窗須立即清洗以免霧化蝕刻'],
          ['兩性金屬：鋁 (Al)', '既溶於強酸亦溶於強鹼放出氫氣 H₂↑', '水泥砂漿強鹼 (pH 13) 會腐蝕未處理鋁框', '鋁門窗表面須經「陽極氧化處理 (Anodizing)」形成 Al₂O₃'],
        ],
      },
      takeaways: [
        '**酸雨分界值為 $\\text{pH} < 5.6$**（因為正常雨水溶有空氣中 $\\text{CO}_2$ 本身即呈微酸性 $\\text{pH} \\approx 5.6$，必須因 $\\text{SO}_2, \\text{NO}_x$ 污染使 $\\text{pH} < 5.6$ 才叫酸雨）。',
        '**兩性金屬（$\\text{Al}, \\text{Zn}, \\text{Sn}, \\text{Pb}$）**既怕酸也怕強鹼，故鋁門窗嵌裝於新鮮水泥砂漿時必須有保護塗層隔離。',
      ],
    },
    {
      concept: '水的性質、硬水軟化與水質淨化',
      kind: 'diagram',
      title: '自來水淨水流程：混凝 → 沉澱 → 過濾 → 消毒',
      caption: '加入明礬或多元氯化鋁使微粒凝聚，沉澱後經砂濾與活性碳過濾，最後加氯消毒；需要純水時再以離子交換或逆滲透處理。',
      svg: (() => {
        let s = '';
        s += flow(10, 50, [['原水', '河川、水庫'], ['混凝', '明礬、PAC'], ['沉澱', '靜置'], ['過濾', '砂濾、活性碳'], ['消毒', '加氯'], ['清水', '配水管網']], { w: 80, h: 56, gap: 12, tones: ['muted', 'violet', 'blue', 'green', 'red', 'blue'], size: 11.5 });
        s += box(120, 140, 320, 46, ['硬水軟化：暫時硬水煮沸；永久硬水用碳酸鈉或離子交換'], { tone: 'amber', size: 11.5 });
        return svg(560, 200, s);
      })(),
      takeaways: [
        '煮沸只能去除暫時硬度（碳酸氫鹽），會在熱水器與水壺留下水垢 CaCO₃。',
        '逆滲透與蒸餾可去除大部分溶解離子，用於製造純水。',
      ],
    },
  ],

  redox: [
    {
      concept: '氧化還原 Reactions 與氧化數',
      kind: 'diagram',
      title: '鋼筋電化學腐蝕微電池與犧牲陽極陰極防蝕法（鋅塊保護鐵管）圖解',
      caption: '左圖展示鋼筋表面陽極區鐵失去電子氧化 (Fe → Fe²⁺ + 2e⁻)、陰極區氧氣與水得電子還原，最終生成體積膨脹 2.5~6 倍的紅鐵鏽；右圖展示連接活性更大的鎂/鋅塊作為犧牲陽極保護鋼構。',
      svg: (() => {
        let s = '';
        // 左：鋼筋腐蝕微電池
        s += rect(25, 118, 235, 62, { tone: 'muted', fill: 'muted', soft: true, w: 1.8 });
        s += text(142, 168, '鋼筋母材 Fe (電子 e⁻ 導體通道)', { anchor: 'middle', weight: 'bold', size: 11.5 });
        s += arrow(92, 140, 192, 140, { tone: 'amber', w: 2.2, label: '2e⁻', labelPos: 'mid', labelOffset: [0, -8] });
        // 水膜電解質
        s += rect(35, 68, 215, 50, { tone: 'blue', fill: 'blue', soft: true, dash: 'dash' });
        s += box(38, 76, 86, 36, ['陽極 (氧化腐蝕)', 'Fe → Fe²⁺ + 2e⁻'], { tone: 'red', size: 10.5 });
        s += box(152, 76, 94, 36, ['陰極 (氧氣還原)', '½O₂+H₂O+2e⁻→2OH⁻'], { tone: 'green', size: 10 });
        s += pill(142, 42, '紅鐵鏽 Fe₂O₃·nH₂O (體積膨脹 2.5~6 倍脹裂混凝土！)', 'red', 11);
        s += text(142, 198, '氯離子 Cl⁻ (海砂) 具穿透鈍化膜與催化腐蝕雙重破壞', { anchor: 'middle', size: 11, tone: 'red' });
        // 右：犧牲陽極陰極防蝕
        s += box(302, 52, 92, 68, ['犧牲陽極', '鋅塊 Zn / 鎂 Mg', '(活性大、失電子)'], { tone: 'amber', size: 11 });
        s += box(442, 52, 96, 68, ['被保護陰極', '地下鋼管 / 鋼樁', '(得電子不生鏽)'], { tone: 'blue', size: 11 });
        s += arrow(394, 86, 442, 86, { tone: 'red', w: 2.4, label: 'e⁻ 補充', labelPos: 'mid', labelOffset: [0, -10] });
        s += box(302, 140, 236, 68, [
          '陰極防蝕法 (Cathodic Protection)',
          '1. 犧牲陽極法：接活性較大金屬 (Mg, Zn, Al)',
          '2. 外加電流法：直流電源「負極」接被保護鋼構',
        ], { tone: 'green', size: 11 });
        return svg(560, 230, s);
      })(),
      takeaways: [
        '氧化還原口訣：**「失電子為氧化（氧化數上升，發生在陽極），得電子為還原（氧化數下降，發生在陰極）」**；本身被氧化者稱為**還原劑**。',
        '鋼筋生鏽必須同時具備**「氧氣 $\\text{O}_2$」與「水份 $\\text{H}_2\\text{O}$」**，且鐵鏽體積膨脹達原本的 **$2.5 \\sim 6$ 倍**，是造成海砂屋混凝土保護層剝落的主因。',
      ],
    },
    {
      concept: '常用建築金屬之活性序列、標準電位與防蝕特性比較',
      kind: 'chart',
      title: '常用建築金屬標準還原電位 E° (V) 與活性序列比較圖',
      caption: '標準還原電位 E° 愈負代表金屬活性愈大、愈容易失去電子氧化（可作犧牲陽極如 Mg, Al, Zn）；E° 愈正代表愈穩定抗腐蝕（如 Cu）。',
      svg: barChart({
        w: 520,
        h: 250,
        categories: ['鎂 Mg (犧牲陽極)', '鋁 Al (門窗)', '鋅 Zn (鍍鋅鋼)', '鐵 Fe (鋼筋)', '銅 Cu (電線/水管)'],
        y: { min: -2.5, max: 0.6, ticks: [-2.4, -1.6, -0.8, 0, 0.4], label: '標準還原電位 E° (V)' },
        values: true,
        series: [
          { name: '標準還原電位 E° (V，愈負愈活潑易氧化)', tone: 'blue', values: [-2.37, -1.66, -0.76, -0.44, 0.34] },
        ],
      }),
      table: {
        headers: ['建築金屬', '標準還原電位 E° (V)', '金屬活性順序', '與鐵 (Fe) 接觸時之電化學角色'],
        rows: [
          ['鎂 (Mg)', '-2.37 V (最負)', '極高（最易失電子氧化）', '作犧牲陽極，強烈釋放電子保護地下鋼管'],
          ['鋁 (Al)', '-1.66 V', '高（表面自然形成緻密 Al₂O₃）', '活性大於鐵，若與鋼構直接接觸須加絕緣墊片'],
          ['鋅 (Zn)', '-0.76 V', '中高（大於鐵 Fe）', '熱浸鍍鋅鋼板：刮傷時鋅先犧牲氧化保護鐵母材'],
          ['鐵 (Fe)', '-0.44 V (基準)', '中（建築結構主力）', '在潮濕含氧環境易氧化成 Fe²⁺ → Fe(OH)₃ 紅鏽'],
          ['銅 (Cu)', '+0.34 V (正值)', '低（惰性穩定耐蝕）', '若銅管與鐵管直接相接，會加速鐵管發生賈凡尼腐蝕！'],
        ],
      },
      takeaways: [
        '金屬活性大小順序必背：**$\\text{K} > \\text{Ca} > \\text{Na} > \\text{Mg} > \\text{Al} > \\text{Zn} > \\text{Fe} > \\text{Sn} > \\text{Pb} > (\\text{H}) > \\text{Cu} > \\text{Ag} > \\text{Au}$**。',
        '**異種金屬接觸腐蝕（Galvanic Corrosion）**：活性大的金屬（如 $\\text{Zn}$）與鐵接觸會保護鐵；但活性小的金屬（如**銅管 $\\text{Cu}$** 或馬口鐵的**錫 $\\text{Sn}$**）一旦與鐵接觸或破皮，反而會抽走鐵的電子，**讓鐵加速腐蝕穿孔**！',
      ],
    },
    {
      concept: '金屬防蝕化學方法：犧牲陽極法',
      kind: 'table',
      title: '建築鋼結構與鋼筋四大防蝕技術（鍍鋅、鍍錫、陰極防蝕、不鏽鋼）比較表',
      caption: '對照熱浸鍍鋅（白鐵皮）與鍍錫（馬口鐵）破皮後的截然不同命運，以及外加電流法與不鏽鋼鈍化原理。',
      table: {
        headers: ['防蝕技術名稱', '化學與電化學防蝕原理', '表面塗層刮傷破損時之反應', '建築與土木工程實例'],
        rows: [
          ['熱浸鍍鋅鋼 (白鐵皮)', '鐵表面鍍活性較大的鋅 (Zn > Fe)', '鋅當犧牲陽極先氧化，鐵母材依然不生鏽', '戶外鋼構、公路護欄、輕鋼架龍骨、鍍鋅鋼管'],
          ['鍍錫鐵皮 (馬口鐵)', '鐵表面鍍活性較小的錫 (Fe > Sn)', '一旦刮傷，鐵變陽極加速生鏽穿孔！', '僅限密封食品罐頭，不可用於戶外淋雨建築構件'],
          ['外加電流陰極防蝕', '直流電源「負極」接被保護鋼構，正極接輔助陽極', '強制源源不絕補充電子，使鋼構維持陰極狀態', '跨海大橋鋼管樁、長途地下自來水與天然氣鋼管'],
          ['不鏽鋼合金化 (SUS)', '鋼中添加 ≥ 10.5% 鉻 (Cr) 與鎳 (Ni)', '鉻氧化形成極緻密 Cr₂O₃ 鈍化膜並具自癒能力', '304 不鏽鋼 (18%Cr-8%Ni)；海邊須用含鉬 316 不鏽鋼'],
        ],
      },
      takeaways: [
        '統測最愛考對比：**白鐵皮（鍍鋅鐵，$\\text{Zn} > \\text{Fe}$）刮傷後鐵不會生鏽**；**馬口鐵（鍍錫鐵，$\\text{Fe} > \\text{Sn}$）刮傷後鐵會加速生鏽**。',
        '外加電流陰極防蝕法中，被保護的鋼筋或鋼管必須連接直流電源的**負極（陰極，接收電子）**，千萬不可接正極（接正極會瞬間電解溶蝕）！',
      ],
    },
    {
      concept: '化學電池原理與常見電池',
      kind: 'diagram',
      title: '鋅銅電池：負極氧化、正極還原，電子經外電路流動',
      caption: '鋅（活性大）為負極：Zn → Zn²⁺ + 2e⁻；銅為正極：Cu²⁺ + 2e⁻ → Cu。鹽橋讓離子移動維持電中性，標準電壓約 1.10 V。',
      svg: (() => {
        let s = '';
        s += path('M40,110 L40,210 L210,210 L210,110', { w: 2 }) + path('M330,110 L330,210 L500,210 L500,110', { w: 2 });
        s += rect(42, 140, 166, 68, { tone: 'muted', fill: 'muted', soft: true, w: 0 }) + rect(332, 140, 166, 68, { tone: 'blue', fill: 'blue', soft: true, w: 0 });
        s += rect(110, 70, 16, 120, { tone: 'muted', fill: 'muted', w: 1.4 }) + text(118, 62, 'Zn（負極）', { anchor: 'middle', weight: 'bold', size: 12 });
        s += rect(410, 70, 16, 120, { tone: 'red', fill: 'red', soft: true, w: 1.4 }) + text(418, 62, 'Cu（正極）', { anchor: 'middle', weight: 'bold', size: 12, tone: 'red' });
        s += path('M170,150 L170,100 Q270,70 370,100 L370,150', { tone: 'amber', w: 10 });
        s += text(270, 102, '鹽橋', { anchor: 'middle', weight: 'bold', size: 12 });
        s += line(118, 70, 118, 30, { w: 1.6 }) + line(118, 30, 418, 30, { w: 1.6 }) + line(418, 30, 418, 70, { w: 1.6 });
        s += circle(270, 30, 15, { tone: 'ink', fill: 'paper', w: 1.6 }) + text(270, 34, 'V', { anchor: 'middle', weight: 'bold' });
        s += arrow(170, 22, 236, 22, { tone: 'green', w: 1.8, label: 'e⁻', labelOffset: [4, -2] });
        s += text(125, 228, 'Zn → Zn²⁺ + 2e⁻（氧化）', { anchor: 'middle', size: 11.5 });
        s += text(415, 228, 'Cu²⁺ + 2e⁻ → Cu（還原）', { anchor: 'middle', size: 11.5 });
        return svg(560, 240, s);
      })(),
      takeaways: [
        '原電池中「陽極＝負極（氧化）」、「陰極＝正極（還原）」，不要把陽極與正極混為一談。',
        '鋼筋腐蝕是無意間形成的小電池；犧牲陽極法則是刻意讓鋅或鎂當負極保護鋼材。',
      ],
    },
  ],

  'organic-chemistry': [
    {
      concept: '建築高分子塗料與樹脂 (Paints & Resins) 的化學合成與結構',
      kind: 'diagram',
      title: '熱塑性線性鏈（可加熱重塑回收）vs. 熱固性三維交聯網狀高分子結構圖解',
      caption: '左圖展示熱塑性塑膠（如 PVC, PE, 壓克力）由獨立線性分子鏈靠凡得瓦力聚集，受熱可軟化回收；右圖展示熱固性樹脂（如環氧樹脂 Epoxy、酚醛樹脂）經共價交聯成三維網狀，受熱不熔化。',
      svg: (() => {
        let s = '';
        // 左：熱塑性線性高分子
        s += box(22, 16, 240, 32, '熱塑性高分子 (Thermoplastic)：線性/支鏈結構', { tone: 'blue', size: 11.5 });
        for (let r = 0; r < 3; r++) {
          const y = 72 + r * 38;
          s += polyline([[40, y], [85, y - 10], [130, y + 8], [175, y - 8], [220, y + 6]], { tone: 'blue', w: 2.5 });
          for (let c = 0; c < 5; c++) s += dot(40 + c * 45, y + (c % 2 ? -9 : 4), 4.5, 'blue');
        }
        s += text(142, 182, '鏈與鏈間僅靠微弱「凡得瓦力」吸引', { anchor: 'middle', size: 11.5, tone: 'blue', weight: 'bold' });
        s += text(142, 202, '加熱軟化可塑形、可回收 (例：PVC 管、PE、PMMA)', { anchor: 'middle', size: 11, tone: 'muted' });
        // 右：熱固性三維交聯網狀高分子
        s += box(295, 16, 245, 32, '熱固性高分子 (Thermosetting)：三維共價交聯', { tone: 'red', size: 11.5 });
        for (let r = 0; r < 3; r++) {
          const y = 72 + r * 38;
          s += line(315, y, 515, y, { tone: 'red', w: 2.5 });
          for (let c = 0; c < 5; c++) {
            const x = 315 + c * 50;
            if (r < 2) s += line(x, y, x, y + 38, { tone: 'amber', w: 2.2 });
            s += dot(x, y, 4.5, 'red');
          }
        }
        s += text(418, 182, '鏈間以強韌「共價交聯鍵 (Cross-link)」鎖死', { anchor: 'middle', size: 11.5, tone: 'red', weight: 'bold' });
        s += text(418, 202, '固化後加熱不軟化、耐高溫高強 (例：Epoxy、矽利康)', { anchor: 'middle', size: 11, tone: 'muted' });
        return svg(560, 230, s);
      })(),
      takeaways: [
        '**熱塑性塑膠**（線性結構，加熱軟化冷卻定型，可回收再製）：**PVC（聚氯乙烯水管）、PE（聚乙烯）、PP、PS（保麗龍隔熱板）、PMMA（壓克力採光罩）**。',
        '**熱固性樹脂**（三維共價網狀交聯，一經固化加熱不再熔化）：**Epoxy（環氧樹脂結構補強與地坪）、酚醛樹脂（電木插座）、不飽和聚酯（FRP）、矽利康（Silicone）**。',
      ],
    },
    {
      concept: '常用建築樹脂塗料 (Epoxy, PU, Acrylic, Silicone) 之化學與物理比較',
      kind: 'chart',
      title: '建築四大工程樹脂塗料：接著強度與耐候性相對特性示意',
      caption: '以 0–100 的相對示意評分比較 Epoxy、PU、Acrylic、Silicone 的結構接著強度與戶外耐 UV 性（教學比較用，非試驗數據）。',
      svg: barChart({
        w: 520,
        h: 250,
        categories: ['Epoxy 環氧樹脂', 'PU 聚氨酯防水', 'Acrylic 壓克力漆', 'Silicone 矽利康'],
        y: { min: 0, max: 100, ticks: [0, 25, 50, 75, 100], label: '相對特性示意評分 (0~100)' },
        values: true,
        series: [
          { name: '結構接著與耐磨強度', tone: 'blue', values: [95, 70, 60, 55] },
          { name: '戶外耐 UV 紫外光抗老化性', tone: 'amber', values: [30, 65, 85, 98] },
        ],
      }),
      table: {
        headers: ['建築樹脂種類', '主要工程強項', '化學弱點與老化機制', '標準建築適用位置'],
        rows: [
          ['Epoxy (環氧樹脂)', '接著力極強、耐磨耐酸鹼、硬化無收縮', '含芳香環，遇戶外陽光 UV 極易黃變粉化！', '室內無塵室/停車場地坪、裂縫灌注、植筋膠'],
          ['PU (聚氨酯)', '高彈性伸長率 (>300%)，可橋接微裂縫', '施工時素地必須絕對乾燥，否則起泡鼓起', '屋頂彈性塗膜防水、運動跑道（戶外需加耐候面漆）'],
          ['Acrylic (壓克力樹脂)', '耐光耐候性佳、保色性好、水性低 VOC', '耐溶劑性與結構強度較 Epoxy 低', '建築內外牆乳膠漆、透明採光罩 (PMMA)'],
          ['Silicone (聚矽氧烷)', '無機 Si-O 骨幹鍵能極高，耐 UV 與耐溫最佳', '價格較高、表面不可直接上漆（非塗裝性）', '玻璃帷幕牆結構耐候填縫膠、外牆撥水劑'],
        ],
      },
      takeaways: [
        '**環氧樹脂（Epoxy）嚴禁用於戶外直接曝曬面漆**：因陽光紫外線（UV）光子能量高於碳-碳共價鍵能，會打斷高分子鏈造成**黃變與粉化（Chalking）**。',
        '**矽利康（Silicone）耐候性稱霸**的原因：其主鏈為無機的**矽-氧鍵（$\\text{Si-O}$，鍵能約 $452\\text{ kJ/mol}$）**，遠強於一般有機塑膠的碳-碳鍵（$\\text{C-C}$，約 $348\\text{ kJ/mol}$），紫外光打不斷。',
      ],
    },
    {
      concept: '建築塑膠管材 (PVC, CPVC, PEX, HDPE) 化學結構與工程特徵',
      kind: 'table',
      title: '有機烴類通式、建築塑膠管材 (PVC/CPVC/HDPE) 與水性環保塗料對照表',
      caption: '彙整烷、烯、炔與芳香烴化學通式，常用建築給排水塑膠管材特性，以及油性溶劑型與水性塗料之 VOC 差異。',
      table: {
        headers: ['有機化學與建材類別', '化學結構與通式', '物理化學關鍵特性', '建築設備與裝修工程規範'],
        rows: [
          ['烷烴／烯烴／芳香烴', '烷 C_nH_(2n+2)；烯 C_nH_2n；苯環 C₆H₆', '甲烷 CH₄ 為天然氣主成分；苯、甲苯為油漆毒性溶劑', '液化石油氣 (桶裝瓦斯 LPG) 主成分為丙烷 C₃H₈ 與丁烷'],
          ['PVC vs. CPVC 管', '聚氯乙烯 (-CH₂-CHCl-)_n vs. 氯化聚氯乙烯', 'PVC 含氯具自熄性，但耐熱僅 60℃；CPVC 耐熱達 90℃', '一般冷水與排水用 PVC 管；建築熱水管用 CPVC 或不鏽鋼管'],
          ['HDPE 高密度聚乙烯管', '(-CH₂-CH₂-)_n 無氯純碳氫鏈、結晶度高', '韌性極佳、耐震不斷裂、熱熔對接無漏水、燃燒無戴奧辛', '都市地下自來水幹管、瓦斯管與耐震埋地管線首選'],
          ['油性塗料 vs. 水性乳膠漆', '油性以甲苯/二甲苯為稀釋劑；水性以水分散乳膠', '油性乾燥揮發大量 TVOC；水性塗料低 VOC 且無引火危險', '室內裝修優先選用綠建材標章「水性低 VOC 乳膠漆」'],
        ],
      },
      takeaways: [
        '天然氣（LNG）主成分為**甲烷（$\\text{CH}_4$，比空氣輕，漏氣往上飄，偵測器裝天花板下）**；桶裝液化石油氣（LPG）主成分為**丙烷（$\\text{C}_3\\text{H}_8$）與丁烷（$\\text{C}_4\\text{H}_{10}$，比空氣重，漏氣往下沉，偵測器裝地板上方）**。',
        'PVC 塑膠雖因含氯原子而具有難燃自熄性，但火災不完全燃燒時會釋放劇毒的**氯化氫（$\\text{HCl}$）腐蝕氣體與戴奧辛（Dioxin）**。',
      ],
    },
    {
      concept: '生活中的化學：肥皂與清潔劑、衣料纖維、食品與藥物',
      kind: 'diagram',
      title: '肥皂微胞去污原理：親油端包住油污，親水端朝向水',
      caption: '肥皂分子一端親水（羧酸根，圓點）、一端親油（長碳鏈），在水中排列成微胞把油污包在中心，隨水洗去。',
      svg: (() => {
        let s = '';
        const C: Pt = [200, 115];
        s += circle(C[0], C[1], 42, { tone: 'amber', fill: 'amber', soft: true, w: 1.6 });
        s += text(C[0], C[1] + 5, '油污', { anchor: 'middle', weight: 'bold', tone: 'amber' });
        for (let i = 0; i < 14; i++) {
          const d = (360 / 14) * i;
          const a = polar(C[0], C[1], 46, d);
          const b = polar(C[0], C[1], 82, d);
          s += line(a[0], a[1], b[0], b[1], { tone: 'muted', w: 2 });
          s += dot(...polar(C[0], C[1], 88, d), 6, 'blue');
        }
        s += line(380, 70, 470, 70, { tone: 'muted', w: 2 }) + dot(476, 70, 6, 'blue');
        s += text(380, 54, '親油端（碳鏈）', { size: 12, tone: 'muted', weight: 'bold' });
        s += text(476, 96, '親水端', { size: 12, tone: 'blue', weight: 'bold', anchor: 'middle' });
        s += text(430, 150, '皂化反應：', { anchor: 'middle', size: 12, weight: 'bold' });
        s += text(430, 172, '油脂 + NaOH → 肥皂 + 甘油', { anchor: 'middle', size: 12 });
        s += text(430, 200, '硬水中 Ca²⁺、Mg²⁺ 生成皂垢', { anchor: 'middle', size: 11.5, tone: 'red' });
        return svg(560, 226, s);
      })(),
      takeaways: [
        '肥皂在硬水中會與 Ca²⁺、Mg²⁺ 形成皂垢，去污力下降；合成清潔劑在硬水中仍可去污。',
        '鼻涕蟲實驗中 PVA 與硼砂形成交聯，說明交聯會使高分子變稠、變有彈性。',
      ],
    },
  ],

  'environmental-chemistry': [
    {
      concept: '建築生命週期評估 (LCA) 雙指標：隱含碳 (Embodied) vs 營運碳 (Operational)',
      kind: 'diagram',
      title: '建築全生命週期評估 (LCA) 四階段邊界：隱含碳 (A1–A5) vs. 營運碳 (B6) 圖解',
      caption: '依據 ISO 14040 / EN 15978 標準，將建築碳足跡拆解為建材生產運輸施工之「隱含碳 (Embodied Carbon)」與日常空調照明耗電之「營運碳 (Operational Carbon)」。',
      svg: (() => {
        let s = '';
        s += flow(18, 28, [
          ['A1–A3 建材生產', '水泥煅燒 CaCO₃', '煉鋼高爐排放', '(隱含碳主力)'],
          ['A4–A5 運輸施工', '預拌車運輸油耗', '工地機具吊裝', '(營造施工碳)'],
          ['B1–B7 建築使用', 'B6 空調與照明', '日常耗電度數', '(營運碳佔70%)'],
          ['C1–C4 拆除廢棄', '結構拆除破碎', '再生骨材回收', '(循環經濟減碳)'],
        ], { w: 118, h: 78, gap: 16, tones: ['red', 'amber', 'blue', 'green'], size: 11 });
        s += box(18, 126, 252, 84, [
          '隱含碳 (Embodied Carbon, Upfront)',
          '在建築完工啟用前即已排入大氣！',
          '減碳對策：飛灰/爐石低碳水泥、木構造 CLT',
        ], { tone: 'red', size: 11 });
        s += box(286, 126, 256, 84, [
          '營運碳 (Operational Carbon)',
          '隨 50~60 年使用年限累積之電力排放',
          '減碳對策：外殼隔熱 Low-E、高 COP 空調、光電',
        ], { tone: 'blue', size: 11 });
        return svg(560, 230, s);
      })(),
      takeaways: [
        '水泥工業是全球高碳排產業（佔約 $7\\sim 8\\%$），因為除了燃料燃燒外，**石灰石熱分解 $\\text{CaCO}_3 \\xrightarrow{\\Delta} \\text{CaO} + \\text{CO}_2\\uparrow$ 本身就會釋放大量化學製程 $\\text{CO}_2$**（每生產 $1\\text{ kg}$ 波特蘭水泥熟料約排放 $0.85\\text{ kg CO}_2\\text{e}$）。',
        '建築全生命週期總碳排 $= \\text{隱含碳（建材生產施工）} + \\text{營運碳（日常空調照明耗能）}$。',
      ],
    },
    {
      concept: '常見建築結構與裝修材料之碳足跡與環境效應比較',
      kind: 'chart',
      title: '常見建築結構材料每公斤隱含碳足跡 (kg CO₂e / kg) 與負碳木構造比較圖',
      caption: '比較原生鋁材、結構鋼材、普通波特蘭水泥、一般混凝土與直交集成板 (CLT) 工程木材之單位質量碳排放因子（數值為文獻常見量級，依資料庫、製程與計算邊界而異）。',
      svg: barChart({
        w: 520,
        h: 250,
        categories: ['原生鋁材 Al', '結構型鋼 Steel', '波特蘭水泥', 'RC 混凝土', 'CLT 工程木材'],
        y: { min: -1.5, max: 9.5, ticks: [-1.5, 0, 2, 4, 6, 8], label: '碳排因子 (kg CO₂e / kg)' },
        values: true,
        series: [
          { name: '單位質量建材隱含碳排 (kg CO₂e / kg)', tone: 'blue', values: [8.2, 1.85, 0.85, 0.13, -0.8] },
        ],
      }),
      table: {
        headers: ['建築材料名稱', '隱含碳因子 (kg CO₂e/kg)', '高碳排或負碳之化學成因', '低碳循環替代方案'],
        rows: [
          ['原生金屬鋁 (Virgin Al)', '+8.20 (極高耗電)', '電解氧化鋁 (Al₂O₃) 消耗巨量電力', '採用回收再生鋁材可減碳高達 90% 以上'],
          ['高爐煉鋼型鋼 (Steel)', '+1.85', '焦炭還原鐵礦 Fe₂O₃ + 3CO → 2Fe + 3CO₂', '改用電弧爐 (EAF) 廢鋼再生鋼筋減碳約 60%'],
          ['普通波特蘭水泥 (OPC)', '+0.85', 'CaCO₃ 煅燒化學分解 (60%) + 旋窯燃料 (40%)', '以水淬高爐石粉、飛灰或石灰石粉 (PLC) 取代熟料'],
          ['一般預拌混凝土', '+0.12 ～ +0.15', '單位質量碳排雖低，但建築使用總噸數極龐大', '採用 CO₂ 礦化固碳養護混凝土與再生骨材'],
          ['CLT 直交集成木材', '-0.80 (生物固碳)', '樹木光合作用 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂', '森林永續認證 (FSC) 木構造將碳長期鎖在建築物內'],
        ],
      },
      takeaways: [
        '雖然混凝土「每公斤」碳排（$\\approx 0.13\\text{ kg CO}_2\\text{e/kg}$）遠低於鋼與鋁，但因一棟建築的**混凝土總用量極其龐大**，故混凝土仍是建築結構**隱含碳總量最高**的來源。',
        '工程木材（如 Glulam 集成材、CLT 直交集成板）在生長期間透過光合作用吸收大氣 $\\text{CO}_2$，具備**生物碳儲存（Carbon Storage，負碳建材）**效益。',
      ],
    },
    {
      concept: '臭氧層破壞化學與空調低 GWP 環保冷媒演進',
      kind: 'table',
      title: '大氣環境化學三大危機（溫室效應、臭氧層破洞、室內 IAQ 污染）與低碳對策表',
      caption: '嚴格區分溫室效應 (GWP)、臭氧層破壞 (ODP) 的元凶氣體與冷媒演進，以及低碳固碳建材與室內空氣污染物。',
      table: {
        headers: ['環境化學議題', '主要元凶化學物質', '化學反應機制與環境指標', '綠建築與國際公約改善對策'],
        rows: [
          ['溫室效應與暖化', 'CO₂ (最大宗)、CH₄ (甲烷)、N₂O、SF₆', '吸收地表紅外線長波輻射；指標為 GWP (全球暖化潛勢)', '《巴黎協定》2050 淨零排放；低碳卜特蘭石灰石水泥 PLC'],
          ['臭氧層破壞 (破洞)', 'CFCs (氟氯碳化物，如 R-12)、HCFCs', 'UV 打斷 C-Cl 鍵釋出氯自由基 Cl· 催化分解 O₃', '《蒙特婁議定書》禁用 CFCs，空調改用 R-32 / HFOs 冷媒'],
          ['固碳與鹼激發膠結材', 'CO₂ 礦化養護混凝土、地質聚合物 (Geopolymer)', '將捕集 CO₂ 注入新拌混凝土生成奈米 CaCO₃ 晶體強化', '以爐石/飛灰經鹼激發聚合取代水泥，減碳可達 50~80%'],
          ['室內空氣品質 (IAQ)', '甲醛 HCHO、苯系物 TVOC、地下氡氣 Rn-222', '合板膠著劑釋放甲醛；花崗岩與地層裂隙釋放放射性氡氣', '健康綠建材標章 (F1 低甲醛)、地下室強制正壓機械換氣'],
        ],
      },
      takeaways: [
        '必考環保指標區別：**ODP（臭氧層破壞潛勢，元凶為含氯冷媒 $\\text{CFCs}$，由《蒙特婁議定書》管制）** vs. **GWP（全球暖化潛勢，以 $\\text{CO}_2 = 1$ 為基準，由《京都議定書／巴黎協定》管制）**。',
        '**氡氣（$\\text{Rn}$，Radon）**是無色無味但具**天然放射性**的惰性氣體（第 18 族），源自土壤或花崗岩石材中鈾/鐳衰變，易積聚於通風不良的地下室引發肺癌。',
      ],
    },
    {
      concept: '化石燃料、石油分餾與汽油辛烷值',
      kind: 'diagram',
      title: '石油分餾塔：沸點越低越往上，塔底殘餘物為瀝青',
      caption: '原油加熱後送入分餾塔，各成分依沸點在不同高度冷凝取出：上層為石油氣與汽油，下層為柴油與重油，塔底殘餘物為鋪路與防水用的瀝青。',
      svg: (() => {
        let s = '';
        s += rect(200, 30, 90, 190, { tone: 'ink', fill: 'muted', soft: true, w: 2, rx: 10 });
        const outs: [string, string, number][] = [['石油氣', 'C1–C4，桶裝瓦斯', 50], ['汽油', 'C5–C12', 80], ['煤油', '航空燃油', 110], ['柴油', '施工機具、發電機', 140], ['重油', '船舶、工業燃料', 170]];
        outs.forEach(([n, use, y]) => {
          s += arrow(290, y, 340, y, { tone: 'blue', w: 1.6 });
          s += text(348, y + 4, `${n}：${use}`, { size: 12 });
          s += line(204, y + 12, 286, y + 12, { tone: 'muted', w: 1, dash: 'dash' });
        });
        s += arrow(245, 220, 245, 246, { tone: 'red', w: 2 });
        s += text(258, 242, '瀝青（殘餘物）：道路鋪面、屋頂防水', { size: 12, tone: 'red', weight: 'bold' });
        s += arrow(110, 190, 196, 190, { tone: 'amber', w: 2.4, label: '原油（加熱）', labelPos: 'start', labelOffset: [0, -10] });
        s += text(180, 44, '上冷', { anchor: 'end', size: 12, tone: 'blue', weight: 'bold' });
        s += text(180, 214, '下熱', { anchor: 'end', size: 12, tone: 'red', weight: 'bold' });
        return svg(560, 256, s);
      })(),
      takeaways: [
        '分餾利用沸點差異分離，屬於物理變化；碳數越多沸點越高。',
        '不完全燃燒會產生劇毒的一氧化碳，瓦斯熱水器必須裝在通風良好處。',
      ],
    },
    {
      concept: '水汙染、土壤汙染與自然界的物質循環',
      kind: 'diagram',
      title: '碳循環與營建材料：煅燒釋放 CO₂、混凝土碳化緩慢吸收 CO₂',
      caption: '植物光合作用吸收 CO₂；燃燒化石燃料與水泥煅燒（CaCO₃ → CaO + CO₂）釋放 CO₂；混凝土中的 Ca(OH)₂ 會緩慢與 CO₂ 反應形成 CaCO₃（碳化）。',
      svg: (() => {
        let s = '';
        s += box(200, 16, 160, 46, ['大氣中的 CO₂'], { tone: 'muted', size: 13 });
        s += box(20, 120, 140, 56, ['植物', '光合作用'], { tone: 'green', size: 12 });
        s += box(210, 150, 140, 56, ['化石燃料', '燃燒發電、運輸'], { tone: 'red', size: 12 });
        s += box(400, 120, 140, 56, ['水泥煅燒', 'CaCO₃ → CaO + CO₂'], { tone: 'amber', size: 11.5 });
        s += box(400, 196, 140, 40, ['混凝土碳化（吸收）'], { tone: 'blue', size: 11.5 });
        s += arrow(220, 62, 110, 118, { tone: 'green', w: 1.8, label: '吸收', labelPos: 'mid', labelOffset: [-8, 0] });
        s += arrow(280, 148, 280, 64, { tone: 'red', w: 1.8, label: '排放', labelPos: 'mid', labelOffset: [8, 0] });
        s += arrow(450, 118, 340, 64, { tone: 'amber', w: 1.8, label: '排放', labelPos: 'mid', labelOffset: [8, 0] });
        s += arrow(370, 62, 520, 194, { tone: 'blue', w: 1.4, dash: 'dash', label: '緩慢吸收', labelPos: 'mid', labelOffset: [10, 0] });
        return svg(560, 246, s);
      })(),
      takeaways: [
        '水泥的碳排除了燃料燃燒，還來自石灰石分解本身釋放的 CO₂。',
        '水汙染看 BOD（越高越髒）、優養化看氮與磷；工地廢水須沉澱、中和後才能排放。',
      ],
    },
  ],
};
