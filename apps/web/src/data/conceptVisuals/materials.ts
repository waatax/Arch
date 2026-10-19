import type { TopicVisualMap } from './types';
import {
  arrow, barChart, box, circle, dim, dot, ellipse, flow, ground, hatchRect, line, lineChart,
  path, pill, point, polygon, polyline, rect, svg, text, wall, type Pt,
} from './kit';

export const materialsVisuals: TopicVisualMap = {
  'green-building-materials': [
    {
      concept: '台灣綠建材標章四大分類體系',
      kind: 'diagram',
      title: '台灣綠建材標章四大範疇與生命週期循環架構圖',
      caption: '以健康、生態、再生、高性能四大標章為核心，串聯原料開採、製造、使用至廢棄再生的循環營建流程。',
      svg: (() => {
        let s = '';
        s += box(195, 14, 170, 38, ['台灣綠建材標章', '基本門檻：低逸散・無毒害'], { tone: 'green', size: 12 });
        const cats = [
          { x: 18, t: '健康綠建材', sub: ['甲醛 F1~F3', 'TVOC 逸散控制'], tone: 'blue' as const },
          { x: 152, t: '生態綠建材', sub: ['FSC 永續林木', '天然無匱乏原料'], tone: 'green' as const },
          { x: 286, t: '再生綠建材', sub: ['回收骨材/爐石', '廢棄物再利用'], tone: 'amber' as const },
          { x: 420, t: '高性能綠建材', sub: ['防音・透水', '節能隔熱玻璃'], tone: 'violet' as const },
        ];
        for (const c of cats) {
          s += arrow(280, 52, c.x + 61, 82, { tone: 'muted', w: 1.4, head: 6 });
          s += box(c.x, 84, 122, 56, [c.t, ...c.sub], { tone: c.tone, size: 11.5 });
          s += arrow(c.x + 61, 140, c.x + 61, 170, { tone: c.tone, w: 1.5, head: 6 });
        }
        s += rect(28, 172, 504, 42, { tone: 'ink', fill: 'muted', soft: true, rx: 8, w: 1.4 });
        s += text(280, 189, '建築生命週期評估 (LCA)：原料取得 → 減碳製造 → 健康使用 → 拆解循環再生', { anchor: 'middle', size: 12, weight: 'bold' });
        s += text(280, 206, '建築技術規則規定：室內裝修綠建材使用率 ≥ 60%（戶外 ≥ 20%）', { anchor: 'middle', size: 11.5, tone: 'green', weight: 'bold' });
        return svg(560, 226, s);
      })(),
      takeaways: [
        '綠建材四大分類中以**健康綠建材**申請占比最高（約占 70% 以上），主要管制甲醛 ($\\text{HCHO}$) 與總揮發性有機化合物 ($\\text{TVOC}$)。',
        '《建築技術規則》規定供公眾使用建築物之室內裝修材料，綠建材使用率應達總面積 **60% 以上**。',
        '申請任一類別前，皆須先通過重金屬、石綿、放射性與甲醛等基本安全門檻測試。',
      ],
    },
    {
      concept: '低碳水泥與卜特蘭石灰石水泥',
      kind: 'chart',
      title: '各類膠結材料與摻合料之單位碳排量比較圖',
      caption: '以普通卜特蘭水泥 (OPC) 為基準，比較卜特蘭石灰石水泥 (PLC)、飛灰與高爐石粉之每公噸二氧化碳排放量。',
      svg: barChart({
        w: 520,
        h: 260,
        categories: ['普通水泥 OPC', '石灰石水泥 PLC', '飛灰摻合水泥', '高爐石水泥', '純水淬爐石粉'],
        series: [
          { name: '單位碳排量 (kg CO₂/t)', tone: 'green', values: [860, 740, 620, 480, 120] },
        ],
        y: { min: 0, max: 1000, ticks: [0, 250, 500, 750, 1000], label: 'kg CO₂ / 公噸' },
        values: true,
        catSize: 11.5,
      }),
      table: {
        headers: ['膠結材料類型', '熟料取代率 (%)', '碳排量 (kg CO₂/t)', '相對 OPC 減碳率'],
        rows: [
          ['普通卜特蘭水泥 (OPC)', '0%', '860', '基準 (0%)'],
          ['卜特蘭石灰石水泥 (PLC)', '10% ~ 15%', '740', '約 12% ~ 15%'],
          ['飛灰卜特蘭水泥', '15% ~ 25%', '620', '約 25% ~ 28%'],
          ['高爐石卜特蘭水泥', '40% ~ 50%', '480', '約 42% ~ 45%'],
          ['純水淬高爐石粉 (GGBFS)', '工業副產物', '120', '約 86%'],
        ],
      },
      takeaways: [
        '水泥碳排有約 **60%** 來自石灰石高溫鍛燒脫酸反應 ($\\text{CaCO}_3 \\rightarrow \\text{CaO} + \\text{CO}_2\\uparrow$)，40% 來自燃料燃燒與電力。',
        '卜特蘭石灰石水泥 (PLC, CNS 15286) 以 $5\\% \\sim 15\\%$ 微細石灰石粉取代熟料，可在維持早期強度的同時減碳約 $10\\% \\sim 15\\%$。',
      ],
    },
    {
      concept: '循環營建與再生骨材應用規範',
      kind: 'table',
      title: '天然骨材與營建再生骨材之物理性質與適用規範比較表',
      caption: '對照天然碎石與混凝土再生粗粒料表面附著舊水泥砂漿所造成的物理性質差異與工程限制。',
      table: {
        headers: ['評估項目', '天然粗骨材 (碎石)', '一級再生粗骨材', '二級再生粗骨材'],
        rows: [
          ['表面微觀構造', '緻密無附著舊砂漿', '少量附著硬化水泥漿體', '大量多孔舊水泥砂漿包覆'],
          ['烘乾比重 (OD)', '2.60 ~ 2.70', '≥ 2.45', '≥ 2.25'],
          ['吸水率規定', '0.5% ~ 2.0%', '≤ 3.0%', '≤ 5.0%'],
          ['工程適用範圍', '高強度與主體結構混凝土', '次要結構構件、一般版牆', '非結構混凝土、高壓地磚、級配基底'],
        ],
      },
      takeaways: [
        '再生骨材表面殘留多孔隙的**舊硬化水泥砂漿**，導致其**比重較低、吸水率較高**，界面過渡區 (ITZ) 較弱。',
        '依我國再生粒料規範，高吸水率之再生骨材嚴禁直接用於預力混凝土或重要主結構柱梁，多用於非結構回填、道路級配或透水磚。',
      ],
    },
  ],

  'basic-properties': [
    {
      concept: '粒料含水狀態與表面含水率修正公式 (Moisture States & Water Correction)',
      kind: 'diagram',
      title: '粒料四種含水狀態與孔隙水分布剖面圖解',
      caption: '由左至右依序為爐乾 (OD)、氣乾 (AD)、面乾內飽和 (SSD) 與濕潤狀態，藍色代表水分子填滿程度。',
      svg: (() => {
        const states = [
          { x: 75, name: '爐乾狀態 (OD)', sub: '105°C 烘至恆重', mode: 'od' },
          { x: 212, name: '氣乾狀態 (AD)', sub: '孔隙部分含水', mode: 'ad' },
          { x: 348, name: '面乾內飽和 (SSD)', sub: '內孔滿水・表面無水', mode: 'ssd' },
          { x: 485, name: '濕潤狀態 (Wet)', sub: '表面附著游離水膜', mode: 'wet' },
        ];
        let s = '';
        for (const st of states) {
          const cx = st.x, cy = 104, r = 42;
          if (st.mode === 'wet') {
            s += circle(cx, cy, r + 7, { tone: 'blue', fill: 'blue', soft: true, dash: 'dash', w: 1.5 });
          }
          s += circle(cx, cy, r, { tone: 'ink', fill: 'muted', soft: true, w: 1.8 });
          // 內部開口孔隙凹槽
          const pores: Pt[] = [[cx - 18, cy - 16], [cx + 16, cy - 14], [cx - 12, cy + 16], [cx + 15, cy + 14]];
          for (const [px, py] of pores) {
            if (st.mode === 'od') {
              s += circle(px, py, 7, { tone: 'ink', fill: 'paper', w: 1.2 });
            } else if (st.mode === 'ad') {
              s += circle(px, py, 7, { tone: 'blue', fill: 'blue', soft: true, w: 1.2 });
              s += circle(px - 2, py - 2, 3, { tone: 'paper', fill: 'paper', w: 0.8 });
            } else {
              s += circle(px, py, 7, { tone: 'blue', fill: 'blue', soft: false, w: 1.2 });
            }
          }
          s += text(cx, 168, st.name, { anchor: 'middle', size: 12, weight: 'bold', tone: st.mode === 'ssd' ? 'blue' : 'ink' });
          s += text(cx, 185, st.sub, { anchor: 'middle', size: 11, tone: 'muted' });
        }
        s += dim(75, 204, 348, 204, '有效吸水率 (Absorption)', { offset: 8, tone: 'blue' });
        s += dim(348, 204, 485, 204, '表面含水量 (Surface Water)', { offset: 8, tone: 'red' });
        return svg(560, 232, s);
      })(),
      takeaways: [
        '混凝土配比設計一律以 **面乾內飽和狀態 (SSD)** 為基準：此時骨材既不會吸走拌合水，也不會釋出多餘游離水改變水灰比。',
        '吸水率公式：$A(\\%) = \\frac{W_{SSD} - W_{OD}}{W_{OD}} \\times 100\\%$；有效含水率（表面含水率）$= W_{Wet} - W_{SSD}$。',
      ],
    },
    {
      concept: '力學性質與應力-應變關係',
      kind: 'chart',
      title: '延性低碳鋼與脆性混凝土之應力-應變曲線對比圖',
      caption: '低碳鋼具備明顯線彈性區、降伏平台、應變硬化與頸縮區；混凝土則呈現非線性脆性破壞且抗拉極弱。',
      svg: lineChart({
        w: 520,
        h: 260,
        x: { min: 0, max: 20, ticks: [0, 4, 8, 12, 16, 20], label: '應變 ε (%)' },
        y: { min: 0, max: 450, ticks: [0, 100, 200, 300, 400], label: '應力 σ (MPa)' },
        series: [
          {
            name: '低碳鋼 (延性材料)',
            tone: 'blue',
            points: [[0, 0], [1.2, 280], [1.6, 250], [3.5, 250], [8, 360], [13, 420], [18, 330]],
            smooth: false,
            markers: true,
          },
          {
            name: '高強混凝土×5倍放大 (脆性)',
            tone: 'red',
            points: [[0, 0], [0.8, 150], [1.6, 240], [2.2, 260], [3.0, 170]],
            dash: 'dash',
            markers: true,
          },
        ],
        overlay: (f) =>
          point(f, 1.2, 280, '上降伏點', { tone: 'blue', dx: 6, dy: -8 }) +
          point(f, 13, 420, '極限抗拉強度 σ_u', { tone: 'blue', dx: -40, dy: -10 }) +
          point(f, 18, 330, '斷裂點', { tone: 'red', dx: -20, dy: 18 }),
      }),
      table: {
        headers: ['變形階段', '低碳鋼應變範圍', '典型應力值 (MPa)', '微觀與巨觀工程特徵'],
        rows: [
          ['線彈性區 (虎克定律)', '0 ~ 0.14%', '0 ~ 250', '卸載完全恢復原狀，斜率 E ≈ 200 GPa'],
          ['降伏平台 (Yielding)', '0.14% ~ 2.5%', '約 250 ~ 280', '應力不增而應變劇增，產生永久塑性變形'],
          ['應變硬化 (Strain Hardening)', '2.5% ~ 13%', '280 → 420', '晶格錯位糾結，抵抗變形能力回升至極限強度'],
          ['頸縮與斷裂 (Necking)', '13% ~ 20%', '420 → 330', '局部斷面收縮，最終形成杯錐狀延性斷口'],
        ],
      },
      takeaways: [
        '應力-應變曲線下的總面積代表材料的**韌性模數 (Modulus of Toughness)**，即材料斷裂前單位體積所能吸收的最大能量。',
        '彈性限度內的三角形面積則稱為**彈性模數 / 回彈模數 (Modulus of Resilience)**：$\\frac{1}{2}\\sigma_y \\varepsilon_y = \\frac{\\sigma_y^2}{2E}$。',
      ],
    },
    {
      concept: '物理性質指標與密度體系',
      kind: 'table',
      title: '材料四大密度與比重體系定義、孔隙涵蓋範圍比較表',
      caption: '依據體積計算時是否計入開口孔隙與閉口孔隙，區分真密度、視密度与容積密度之大小關係。',
      table: {
        headers: ['性質名稱', '計入體積分母組成', '計算公式', '數值大小關係與工程應用'],
        rows: [
          ['真密度 (True Density)', '僅純實體體積 V_s (磨成細粉)', 'ρ = W / V_s', '數值最大；用李氏比重瓶測水泥真比重 (≈3.15)'],
          ['視密度 (Apparent)', '實體 + 閉口孔隙 (V_s + V_c)', 'ρ_a = W / (V_s + V_c)', '次大；以排水法量測緻密石材或實心骨材'],
          ['容積密度 (Bulk Density)', '實體 + 開口 + 閉口孔隙總體積 V', 'ρ_b = W / (V_s + V_o + V_c)', '較小；結構配比計算粒料佔有空間之核心指標'],
          ['單位重 (Unit Weight)', '顆粒總體積 + 顆粒間空隙 V_v', 'γ = W / V_total', '數值最小；用於散裝骨材砂石車載重與體積換算'],
        ],
      },
      takeaways: [
        '同一多孔材料之密度大小必滿足：**真密度 $>$ 視密度 $>$ 容積密度 $>$ 單位重（鬆方）**。',
        '孔隙率 (Porosity) $P = 1 - \\frac{\\rho_b}{\\rho}$ 與實積率 (Solidity) $S = \\frac{\\rho_b}{\\rho}$ 兩者之和恆等於 $100\\%$。',
      ],
    },
    {
      concept: '測定值、有效數字與精度',
      kind: 'chart',
      title: '混凝土抗壓強度品管管制圖（示例數據）',
      caption: '把每批試體的平均強度依序畫在管制圖上，中心線為長期平均值 x̄，上下管制界限為 x̄ ± 3s；超出界限或連續偏向一側都要追查原因。',
      svg: lineChart({
        w: 520,
        h: 260,
        x: { min: 1, max: 10, ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], label: '批次' },
        y: { min: 25, max: 34, ticks: [25, 26.5, 29.5, 32.5, 34], label: '平均抗壓強度 (MPa)' },
        series: [{ name: '各批平均強度', tone: 'blue', points: [[1, 29.3], [2, 30.1], [3, 28.8], [4, 29.9], [5, 31.0], [6, 28.5], [7, 29.6], [8, 30.4], [9, 26.1], [10, 29.8]], markers: true }],
        overlay: (f) =>
          line(f.box.left, f.Y(29.5), f.box.left + f.box.width, f.Y(29.5), { tone: 'green', w: 1.4 }) +
          line(f.box.left, f.Y(32.5), f.box.left + f.box.width, f.Y(32.5), { tone: 'red', w: 1.3, dash: 'dash' }) +
          line(f.box.left, f.Y(26.5), f.box.left + f.box.width, f.Y(26.5), { tone: 'red', w: 1.3, dash: 'dash' }) +
          text(f.box.left + f.box.width - 4, f.Y(29.5) - 6, '中心線 x̄ = 29.5', { tone: 'green', size: 11, anchor: 'end', weight: 'bold' }) +
          text(f.box.left + f.box.width - 4, f.Y(32.5) - 6, 'UCL = x̄ + 3s = 32.5', { tone: 'red', size: 11, anchor: 'end' }) +
          text(f.box.left + 6, f.Y(26.5) + 14, 'LCL = x̄ − 3s = 26.5', { tone: 'red', size: 11 }) +
          text(f.X(9) - 8, f.Y(26.1) + 4, '第 9 批超出 → 追查', { tone: 'red', size: 11, weight: 'bold', anchor: 'end' }),
      }),
      table: {
        headers: ['批次', '平均強度 (MPa)', '判讀'],
        rows: [['1–8', '28.5–31.0', '在管制界限內'], ['9', '26.1', '低於 LCL 26.5，需追查材料、配比或養護'], ['10', '29.8', '恢復正常']],
      },
      takeaways: [
        '此圖為說明管制圖用法的示例數據（s = 1.0 MPa），不是特定工程的實測值。',
        '管制圖看的是「趨勢與異常」：單點超出界限或連續多點偏向同一側，都表示製程可能出了問題。',
      ],
    },
  ],

  'cement-composition': [
    {
      concept: '卜特蘭水泥水化化學成分',
      kind: 'diagram',
      title: '卜特蘭水泥熟料四大礦物與石膏水化反應產物構造圖',
      caption: '矽酸三鈣 (C3S) 與矽酸二鈣 (C2S) 生成提供強度的 C-S-H 膠體；鋁酸三鈣 (C3A) 需藉石膏生成鈣礬石以防閃凝。',
      svg: (() => {
        let s = '';
        s += box(18, 22, 148, 44, ['C₃S (矽酸三鈣) 50%', '早期強度主力 (1~28天)'], { tone: 'blue', size: 11.5 });
        s += box(18, 76, 148, 44, ['C₂S (矽酸二鈣) 25%', '晚期強度主力 (>28天)'], { tone: 'green', size: 11.5 });
        s += box(18, 130, 148, 44, ['C₃A (鋁酸三鈣) 10%', '水化極快・發熱量最大'], { tone: 'red', size: 11.5 });
        s += box(18, 184, 148, 42, ['C₄AF (鐵鋁酸四鈣) 9%', '降低熟料燒成溫度'], { tone: 'amber', size: 11.5 });

        s += pill(228, 72, '+ H₂O 水化', 'blue', 11.5);
        s += pill(228, 152, '+ 石膏 CaSO₄', 'violet', 11.5);

        s += arrow(166, 44, 286, 56, { tone: 'blue', w: 1.6, head: 7 });
        s += arrow(166, 98, 286, 74, { tone: 'green', w: 1.6, head: 7 });
        s += arrow(166, 152, 286, 152, { tone: 'red', w: 1.6, head: 7 });
        s += arrow(166, 205, 286, 195, { tone: 'amber', w: 1.6, head: 7 });

        s += box(290, 26, 250, 74, [
          'C-S-H 水化矽酸鈣膠體 (占 50~60%)',
          '奈米纖維網狀結構 → 水泥強度主要來源',
          '+ Ca(OH)₂ 氫氧化鈣 (提供 pH > 12 強鹼防鏽)',
        ], { tone: 'blue', size: 11.5 });

        s += box(290, 118, 250, 56, [
          '鈣礬石 Ettringite (針狀結晶包覆 C₃A)',
          '阻隔水分子直接衝擊 C₃A → 達成緩凝控制',
        ], { tone: 'violet', size: 11.5 });

        s += box(290, 182, 250, 44, [
          '水化鐵鋁酸鈣固溶體',
          '賦予水泥灰暗色澤與抗折韌性',
        ], { tone: 'amber', size: 11.5 });

        return svg(560, 238, s);
      })(),
      takeaways: [
        '水化矽酸鈣膠體 (**C-S-H Gel**) 是水泥漿體硬固強度的最主要來源；副產物 $\\text{Ca(OH)}_2$ 雖無強度貢獻，但能維持高鹼性鈍化膜保護鋼筋。',
        '$\\text{C}_3\\text{S}$ 水化生成的 $\\text{Ca(OH)}_2$ 比例遠高於 $\\text{C}_2\\text{S}$，因此高 $\\text{C}_2\\text{S}$ 的低熱水泥耐酸鹼化學侵蝕性更佳。',
        '研磨熟料時添加 **3%~5% 石膏 ($\\text{CaSO}_4 \\cdot 2\\text{H}_2\\text{O}$)**，能與 $\\text{C}_3\\text{A}$ 形成鈣礬石薄膜，防止瞬間假凝或閃凝。',
      ],
    },
    {
      concept: '卜特蘭水泥水化化學成分 (Mineral Compositions)',
      kind: 'chart',
      title: '卜特蘭水泥四大熟料礦物隨齡期之抗壓強度發展曲線',
      caption: 'C3S 在前 28 天快速爬升；C2S 初期緩慢但 28 天後斜率不減，一年齡期強度逼近 C3S。',
      svg: lineChart({
        w: 520,
        h: 260,
        x: { min: 0, max: 360, ticks: [1, 7, 28, 90, 180, 360], label: '養護齡期 (天，示意尺度)' },
        y: { min: 0, max: 70, ticks: [0, 15, 30, 45, 60], label: '純礦物抗壓強度 (MPa)' },
        series: [
          { name: 'C₃S 矽酸三鈣', tone: 'blue', points: [[1, 14], [7, 36], [28, 52], [90, 60], [180, 64], [360, 67]], markers: true },
          { name: 'C₂S 矽酸二鈣', tone: 'green', points: [[1, 2], [7, 7], [28, 18], [90, 42], [180, 55], [360, 63]], markers: true },
          { name: 'C₃A 鋁酸三鈣', tone: 'red', points: [[1, 6], [7, 9], [28, 11], [90, 12], [180, 12], [360, 12]], dash: 'dash' },
          { name: 'C₄AF 鐵鋁酸四鈣', tone: 'amber', points: [[1, 3], [7, 5], [28, 7], [90, 8], [180, 9], [360, 9]], dash: 'dot' },
        ],
      }),
      table: {
        headers: ['熟料礦物簡寫', '水化熱 (J/g)', '7天強度表現', '360天長期強度表現'],
        rows: [
          ['C₃S (3CaO·SiO₂)', '約 500 (次高)', '極高 (達最終 60%)', '最高 (約 67 MPa)'],
          ['C₂S (2CaO·SiO₂)', '約 260 (最低)', '極低 (僅約 7 MPa)', '極高 (追平 C₃S 達 63 MPa)'],
          ['C₃A (3CaO·Al₂O₃)', '約 865 (最高)', '極快凝結但強度低', '低 (約 12 MPa)'],
          ['C₄AF (4CaO·Al₂O₃·Fe₂O₃)', '約 420 (中等)', '水化中速、強度低', '最低 (約 9 MPa)'],
        ],
      },
      takeaways: [
        '統測必背大小順序——**水化熱與水化速率**：$\\text{C}_3\\text{A} > \\text{C}_3\\text{S} > \\text{C}_4\\text{AF} > \\text{C}_2\\text{S}$。',
        '**早期強度 (1~28天)**：$\\text{C}_3\\text{S} > \\text{C}_2\\text{S}$；**晚期最終強度與耐化學侵蝕性**：$\\text{C}_2\\text{S} \\ge \\text{C}_3\\text{S} > \\text{C}_4\\text{AF} > \\text{C}_3\\text{A}$。',
      ],
    },
    {
      concept: '卜特蘭水泥水化化學成分 (Mineral Compositions)',
      kind: 'table',
      title: '卜特蘭水泥四大熟料礦物工程性能指標速查總表',
      caption: '從反應速率、發熱量、乾縮量與工程調整方向四個維度，掌握各類特種水泥配方的調配原理。',
      table: {
        headers: ['評估指標', '排名順序 (由大至小)', '主要控制礦物', '工程配比調整對策'],
        rows: [
          ['水化反應速率', 'C₃A > C₃S > C₄AF > C₂S', 'C₃A (瞬間反應)', '添加石膏抑制 C₃A 閃凝'],
          ['單位水化發熱量', 'C₃A > C₃S > C₄AF > C₂S', 'C₃A 與 C₃S', '巨積混凝土須降低 C₃A 與 C₃S、提高 C₂S'],
          ['乾縮變形潛勢', 'C₃A > C₃S > C₄AF > C₂S', 'C₃A (耗水量大)', '嚴控 C₃A 含量可減少乾縮裂縫'],
          ['抗硫酸鹽侵蝕性', 'C₂S > C₄AF > C₃S > C₃A', 'C₃A 為最弱環節', '抗硫酸鹽水泥規定 C₃A ≤ 5%'],
        ],
      },
      takeaways: [
        '只要考題問「發熱最大、反應最快、乾縮最大、最不耐硫酸鹽」，答案一律優先選 **$\\text{C}_3\\text{A}$（鋁酸三鈣）**。',
        '想要**早強**就提高 $\\text{C}_3\\text{S}$ 與水泥細度；想要**低熱**就提高 $\\text{C}_2\\text{S}$ 並降低 $\\text{C}_3\\text{A}$ 與 $\\text{C}_3\\text{S}$。',
      ],
    },
    {
      concept: '水泥的定義與硬化',
      kind: 'diagram',
      title: '波特蘭水泥從原料到硬化：燒成、磨細與水化',
      caption: '石灰石與黏土經旋窯約 1450 °C 燒成熟料，加入 3%–5% 石膏共同磨細成水泥；加水後先凝結（失去可塑性），再隨齡期持續硬化。',
      svg: (() => {
        let s = '';
        s += flow(12, 30, [['原料', '石灰石＋黏土'], ['旋窯燒成', '約 1450 °C'], ['熟料', 'C₃S、C₂S…'], ['＋石膏磨細', '3%–5%'], ['波特蘭水泥', '粉體']], { w: 96, h: 56, gap: 14, tones: ['amber', 'red', 'violet', 'green', 'blue'], size: 12 });
        s += arrow(493, 90, 493, 118, { tone: 'muted', w: 1.6 });
        s += box(150, 120, 390, 52, ['加水 → 水化反應：初凝 → 終凝（凝結）→ 強度成長（硬化）', '水中也能硬化 ⇒ 水硬性膠結材料'], { tone: 'blue', size: 12 });
        s += text(20, 148, '石膏：調節凝結時間，防止 C₃A 閃凝', { tone: 'muted', size: 11.5 });
        return svg(560, 186, s);
      })(),
      takeaways: [
        '「凝結」是失去可塑性的過程（用維卡儀測初凝、終凝），「硬化」是強度隨齡期成長的過程。',
        '石膏是磨細時加入的調凝劑，不是燒成原料；它與 C₃A 生成鈣礬石，避免閃凝。',
      ],
    },
  ],

  'cement-types': [
    {
      concept: 'CNS 61 卜特蘭水泥五大類型規格比較',
      kind: 'diagram',
      title: 'CNS 61 卜特蘭水泥五大類型熟料礦物調整與工程對映圖',
      caption: '以第 I 型普通水泥為基準，透過增減 C3S、C2S、C3A 比例，衍生出第 II 至第 V 型專用特種水泥。',
      svg: (() => {
        let s = '';
        s += box(195, 16, 170, 44, ['第 I 型：普通卜特蘭水泥', 'C₃S≈50%・C₂S≈25%・C₃A≈10%'], { tone: 'blue', size: 11.5 });
        const types = [
          { x: 14, t: '第 II 型：平熱/中抗硫', d: ['略降 C₃S 與 C₃A (≤8%)', '中型水壩・港灣橋墩'], tone: 'green' as const },
          { x: 150, t: '第 III 型：早強水泥', d: ['提高 C₃S + 磨極細', '緊急搶修・寒冷地區'], tone: 'red' as const },
          { x: 286, t: '第 IV 型：低熱水泥', d: ['大降 C₃S/C₃A・增 C₂S', '巨體積重力水壩工程'], tone: 'amber' as const },
          { x: 422, t: '第 V 型：抗硫酸鹽', d: ['嚴控 C₃A ≤ 5%', '海水中・溫泉硫磺區'], tone: 'violet' as const },
        ];
        for (const tp of types) {
          s += arrow(280, 60, tp.x + 62, 96, { tone: 'muted', w: 1.5, head: 6 });
          s += box(tp.x, 98, 124, 66, [tp.t, ...tp.d], { tone: tp.tone, size: 11 });
        }
        s += rect(20, 180, 520, 36, { tone: 'ink', fill: 'muted', soft: true, rx: 6, w: 1.2 });
        s += text(280, 202, '口訣記憶：一普、二平（中庸）、三早（C₃S高）、四低（C₂S高）、五抗硫（C₃A ≤ 5%）', { anchor: 'middle', size: 12, weight: 'bold' });
        return svg(560, 228, s);
      })(),
      takeaways: [
        '第 **III 型早強水泥** 3 天的強度即可相當於第 I 型普通水泥 7~28 天的強度，但水化熱高，不宜用於巨積混凝土。',
        '第 **IV 型低熱水泥**把 $\\text{C}_2\\text{S}$ 提高至約 $50\\%$，專門防止水壩等巨積混凝土產生內部熱應力裂縫。',
        '第 **V 型抗硫酸鹽水泥**強制規範 $\\text{C}_3\\text{A} \\le 5\\%$，阻絕土壤或海水中 $\\text{SO}_4^{2-}$ 生成膨脹性鈣礬石。',
      ],
    },
    {
      concept: 'CNS 61 卜特蘭水泥五大類型規格比較',
      kind: 'chart',
      title: 'CNS 61 五大類型卜特蘭水泥於各齡期之相對抗壓強度曲線',
      caption: '以第 I 型 28 天強度為 100% 基準，比較第 I~V 型水泥在 3 天、7 天、28 天與 90 天之強度發展率。',
      svg: lineChart({
        w: 520,
        h: 260,
        x: { min: 0, max: 90, ticks: [3, 7, 28, 90], label: '養護齡期 (天)' },
        y: { min: 0, max: 140, ticks: [0, 35, 70, 100, 135], label: '相對強度 (%)' },
        series: [
          { name: 'III 早強型', tone: 'red', points: [[3, 82], [7, 105], [28, 122], [90, 130]], markers: true },
          { name: 'I 普通型', tone: 'blue', points: [[3, 46], [7, 68], [28, 100], [90, 115]], markers: true },
          { name: 'II 平熱型', tone: 'green', points: [[3, 36], [7, 56], [28, 90], [90, 112]], dash: 'dash' },
          { name: 'V 抗硫型', tone: 'violet', points: [[3, 32], [7, 50], [28, 84], [90, 110]], dash: 'dot' },
          { name: 'IV 低熱型', tone: 'amber', points: [[3, 22], [7, 35], [28, 68], [90, 108]], markers: true },
        ],
      }),
      table: {
        headers: ['水泥類型', '3天相對強度', '28天相對強度', '90天相對強度'],
        rows: [
          ['第 I 型 (普通)', '46%', '100% (基準)', '115%'],
          ['第 II 型 (平熱)', '36%', '90%', '112%'],
          ['第 III 型 (早強)', '82%', '122%', '130%'],
          ['第 IV 型 (低熱)', '22%', '68%', '108%'],
          ['第 V 型 (抗硫酸鹽)', '32%', '84%', '110%'],
        ],
      },
      takeaways: [
        '早期強度 (3~7天) 高低排序為：**III (早強) $>$ I (普通) $>$ II (平熱) $>$ V (抗硫) $>$ IV (低熱)**。',
        '養護達 90 天至 1 年以上時，第 IV 型低熱水泥因高含量 $\\text{C}_2\\text{S}$ 持續水化，最終強度可追平第 I 型普通水泥。',
      ],
    },
    {
      concept: '依工程條件選型',
      kind: 'table',
      title: '特殊環境與工程條件之 CNS 61 水泥選型決策對照表',
      caption: '依據施工環境溫度、構件尺寸厚度、接觸水質與拆模工期需求，選擇最適合的水泥型號。',
      table: {
        headers: ['工程情境與環境條件', '主要工程風險', '首選水泥型號', '替代或輔助配比策略'],
        rows: [
          ['高寒地區冬季施工 / 路面搶修', '低溫水化停滯、凍害破壞', '第 III 型 (早強)', '提高水泥細度、使用溫水拌合或早強劑'],
          ['水庫大壩 / 超厚基礎筏基', '內部水化熱積聚引發溫差裂縫', '第 IV 型 (低熱)', '第 II 型水泥 + 大量飛灰或爐石粉取代'],
          ['海底隧道 / 硫酸鹽溫泉地工', '二次鈣礬石膨脹開裂 (硫酸鹽侵蝕)', '第 V 型 (抗硫)', '嚴控水膠比 W/B ≤ 0.45 提高致密性'],
          ['一般港灣碼頭 / 大尺寸橋墩', '兼具中度溫升與中度海水侵蝕', '第 II 型 (平熱)', '第 I 型水泥摻加 20%~30% 卜作嵐摻合料'],
        ],
      },
      takeaways: [
        '台灣實務上第 IV、V 型水泥產量較少，常以**第 I 或 II 型水泥摻加飛灰、水淬高爐石粉**來同時達成低水化熱與抗硫酸鹽侵蝕需求。',
        '硫酸鹽侵蝕屬於**體積膨脹型破壞**（生成次生石膏與二次鈣礬石，體積膨脹達 $2$ 倍以上），會由表及裡造成混凝土剝落。',
      ],
    },
  ],

  'cement-vicat': [
    {
      concept: '維卡儀 (Vicat Apparatus) 凝結時間試驗步驟',
      kind: 'diagram',
      title: 'CNS 786 維卡儀 (Vicat) 標準稠度與初凝、終凝針入度判定圖解',
      caption: '活動桿總重 300 g，依序搭配 10 mm 試桿測標準稠度、1 mm 方針測初凝（貫入 25 mm）與終凝環附件測終凝。',
      svg: (() => {
        let s = '';
        const stages = [
          { x: 100, title: '1. 標準稠度試驗', sub: 'Ø10 mm 試桿・30秒', depth: 10, maxD: 40, label: '貫入 10±1 mm', tone: 'blue' as const },
          { x: 280, title: '2. 初凝時間判定', sub: '1 mm² 試針・30秒', depth: 25, maxD: 40, label: '貫入 25 mm (≥45分)', tone: 'amber' as const },
          { x: 460, title: '3. 終凝時間判定', sub: '附環狀附件試針', depth: 2, maxD: 40, label: '僅針痕無環痕 (≤375分)', tone: 'green' as const },
        ];
        for (const st of stages) {
          const cx = st.x, topY = 95, h = 76;
          // 錐模梯形 (上內徑 60, 下內徑 70, 高 40 mm)
          s += polygon([[cx - 46, topY], [cx + 46, topY], [cx + 55, topY + h], [cx - 55, topY + h]], { tone: 'ink', fill: 'muted', soft: true, w: 1.8 });
          s += rect(cx - 64, topY + h, 128, 7, { tone: 'ink', fill: 'paper', w: 1.4 });
          // 活動桿與指針 (300 g)
          const rodW = st.depth === 10 ? 14 : 3.5;
          const penPx = (st.depth / st.maxD) * h;
          s += rect(cx - 18, 36, 36, 20, { tone: st.tone, fill: st.tone, soft: true, rx: 3, w: 1.4 });
          s += text(cx, 46, '300 g', { anchor: 'middle', baseline: 'middle', size: 10.5, weight: 'bold', halo: false });
          s += rect(cx - rodW / 2, 56, rodW, (topY - 56) + penPx, { tone: st.tone, fill: st.tone, soft: false, w: 1.2 });
          if (st.depth === 2) {
            s += rect(cx - 9, topY - 4, 18, 5, { tone: st.tone, fill: 'none', w: 1.5 });
          }
          if (st.depth >= 10) {
            s += dim(cx + 32, topY, cx + 32, topY + penPx, `${st.depth} mm`, { offset: 14, tone: st.tone, size: 11 });
          }
          s += text(cx, 20, st.title, { anchor: 'middle', size: 12.5, weight: 'bold', tone: st.tone });
          s += text(cx, 194, st.sub, { anchor: 'middle', size: 11, tone: 'muted' });
          s += pill(cx, 214, st.label, st.tone, 11);
        }
        return svg(560, 232, s);
      })(),
      takeaways: [
        '維卡儀活動桿總重固定為 **$300\\text{ g}$**，圓錐模尺寸為上頂內徑 $60\\text{ mm}$、下底內徑 $70\\text{ mm}$、高度 **$40\\text{ mm}$**。',
        '**標準稠度**：$\\varnothing 10\\text{ mm}$ 試桿釋放 $30$ 秒後，貫入頂面以下 **$10 \\pm 1\\text{ mm}$** 時之拌合水量百分比。',
        '**初凝時間**：$1\\text{ mm}$ 試針貫入頂面以下 **$25\\text{ mm}$**（CNS 規定不得早於 **$45\\text{ 分鐘}$**）；**終凝時間**：試針僅留針孔而無外環印痕（不得遲於 **$375\\text{ 分鐘}$** / $6\\text{ 小時 }15\\text{ 分}$）。',
      ],
    },
    {
      concept: '維卡儀 (Vicat Apparatus) 凝結時間試驗步驟 (CNS 786)',
      kind: 'chart',
      title: '水泥漿體凝結過程之維卡針貫入深度隨時間變化曲線',
      caption: '加水後前 45 分鐘保持完全可塑（貫入 40 mm 觸底）；達初凝點時貫入降至 25 mm，終凝時歸零。',
      svg: lineChart({
        w: 520,
        h: 260,
        x: { min: 0, max: 360, ticks: [0, 45, 90, 150, 240, 360], label: '加水後經過時間 (分鐘)' },
        y: { min: 0, max: 45, ticks: [0, 10, 25, 40], label: '1 mm 維卡針貫入深度 (mm)' },
        series: [
          {
            name: '第 I 型水泥貫入深度曲線',
            tone: 'blue',
            points: [[0, 40], [45, 40], [75, 36], [110, 25], [160, 12], [220, 3], [270, 0], [360, 0]],
            markers: true,
          },
        ],
        overlay: (f) =>
          line(f.box.left, f.Y(25), f.box.left + f.box.width, f.Y(25), { tone: 'amber', w: 1.3, dash: 'dash' }) +
          point(f, 110, 25, '初凝點 (貫入 25 mm)', { tone: 'amber', dx: 10, dy: -8 }) +
          point(f, 270, 0, '終凝點 (貫入 0 mm)', { tone: 'green', dx: -20, dy: -12 }),
      }),
      table: {
        headers: ['凝結階段', '経過時間範圍', '維卡針貫入度', '工地施工管制意義'],
        rows: [
          ['誘導可塑期', '0 ~ 45 分鐘以上', '40 mm (完全貫穿)', '完成拌合、預拌車運輸、泵送、澆置與振動搗實'],
          ['初凝點 (Initial Set)', '法規 ≥ 45 分鐘 (常約 90~150 分)', '25 mm', '漿體開始失去塑性，嚴禁再加水重拌或擾動鋼筋'],
          ['凝結過渡期', '初凝後 ~ 終凝前', '25 mm → 1 mm', '執行表面木鏝刀拍漿與鐵鏝刀粉光抹平作業'],
          ['終凝點 (Final Set)', '法規 ≤ 375 分鐘 (常約 240~300 分)', '0 mm (無環痕)', '漿體完全失去塑性轉為固體，開始灑水或濕治養護'],
        ],
      },
      takeaways: [
        '**初凝不宜過快（$\\ge 45$ 分鐘）**：確保混凝土有足夠時間完成拌合、運輸、澆置與搗實；初凝後若強行擾動會造成永久性內部裂縫。',
        '**終凝不宜過慢（$\\le 375$ 分鐘）**：確保澆置後能如期發展早期強度，避免延誤後續養護與拆模工期。',
      ],
    },
    {
      concept: '維卡儀 (Vicat Apparatus) 凝結時間試驗步驟 (CNS 786)',
      kind: 'table',
      title: '水泥凝結時間之環境影響因子與維卡儀 vs 吉爾摩針法比較表',
      caption: '彙整溫度、水灰比、細度與石膏對凝結時間的影響規律，以及 CNS 兩大凝結時間測定儀器規格。',
      table: {
        headers: ['比較項目 / 影響因子', '對凝結時間之影響', '維卡儀法 (Vicat, CNS 786)', '吉爾摩針法 (Gillmore, CNS 785)'],
        rows: [
          ['水泥細度愈細 / 溫度愈高', '水化加速 → 凝結時間縮短', '活動桿重 300 g，針徑 1 mm', '分初凝針與終凝針兩支獨立重錘'],
          ['水灰比 (W/C) 愈大', '顆粒間距變大 → 凝結時間延長', '初凝判定：貫入頂面下 25 mm', '初凝針：重 113.4 g (1/4 lb)、針徑 2.12 mm'],
          ['C₃A 含量高 / 石膏不足', '瞬間反應 → 凝結劇烈縮短(閃凝)', '終凝判定：附環試針不留環痕', '終凝針：重 453.6 g (1 lb)、針徑 1.06 mm'],
          ['CNS 第 I 型水泥合格標準', '初凝過快或終凝過慢皆不合格', '初凝 ≥ 45 分鐘；終凝 ≤ 375 分鐘', '初凝 ≥ 60 分鐘；終凝 ≤ 600 分鐘 (10小時)'],
        ],
      },
      takeaways: [
        '統測常考比較：**維卡儀法**規範初凝 $\\ge 45$ 分鐘、終凝 $\\le 375$ 分鐘；**吉爾摩針法**規範初凝 $\\ge 60$ 分鐘、終凝 $\\le 600$ 分鐘。',
        '試驗室標準溫濕度控制：拌合室溫度須維持在 **$20 \\sim 27.5^\\circ\\text{C}$**，濕氣箱相對濕度須 **$\\ge 90\\%$**，避免水分蒸發造成假性表面結皮。',
      ],
    },
  ],

  'cement-strength': [
    {
      concept: '水泥砂漿抗壓強度試驗步驟',
      kind: 'diagram',
      title: 'CNS 1010 水泥砂漿 50 mm 立方體試體與側面受壓試驗圖解',
      caption: '採水泥：標準砂 = 1：2.75、水灰比 0.485 製成邊長 50 mm 立方體，拆模後浸於飽和石灰水養護並以側面受壓。',
      svg: (() => {
        let s = '';
        s += box(18, 40, 150, 140, [
          'CNS 1010 標準配比',
          '水泥 : 渥太華標準砂',
          '= 1 : 2.75 (重量比)',
          '普通水泥 W/C = 0.485',
          '(早強水泥 W/C = 0.460)',
          '流度控制在 110 ± 5%',
        ], { tone: 'blue', size: 11.5 });

        s += arrow(172, 110, 214, 110, { tone: 'muted', w: 1.8, head: 7 });

        // 50 mm 立方體與上下加壓鈑
        const cx = 300, cy = 115, a = 74;
        s += rect(cx - 52, cy - a / 2 - 14, 104, 14, { tone: 'ink', fill: 'muted', soft: true, w: 1.6 });
        s += rect(cx - 52, cy + a / 2, 104, 14, { tone: 'ink', fill: 'muted', soft: true, w: 1.6 });
        s += arrow(cx, cy - a / 2 - 46, cx, cy - a / 2 - 15, { tone: 'red', w: 2.6, head: 9, label: 'P (載重速率 900~1800 N/s)', labelOffset: [0, -8] });
        s += rect(cx - a / 2, cy - a / 2, a, a, { tone: 'amber', fill: 'amber', soft: true, w: 2 });
        s += text(cx, cy - 8, '50 × 50 × 50 mm', { anchor: 'middle', size: 11, weight: 'bold' });
        s += text(cx, cy + 10, '受壓面積 A = 2500 mm²', { anchor: 'middle', size: 10.5, tone: 'blue', weight: 'bold' });
        s += dim(cx - a / 2, cy + a / 2 + 22, cx + a / 2, cy + a / 2 + 22, '邊長 50 mm (2 吋)', { offset: 8, tone: 'ink' });

        s += box(404, 46, 140, 128, [
          '側面受壓要點',
          '與模壁接觸之平整側面',
          '作為上下受壓面',
          '---',
          '養護環境：23 ± 2°C',
          '飽和石灰水養護池',
        ], { tone: 'green', size: 11.5 });

        return svg(560, 224, s);
      })(),
      takeaways: [
        '水泥不測「純水泥漿」抗壓強度，因為純水泥漿水化收縮極大、容易產生微裂縫失真，故一律摻加**渥太華標準砂 ($1 : 2.75$)** 測水泥砂漿強度。',
        '試體為邊長 **$50\\text{ mm}$ ($5\\text{ cm}$) 立方體**，受壓面積 $A = 2500\\text{ mm}^2 = 25\\text{ cm}^2$；抗壓強度 $f_c = P / A$。',
        '脫模後須浸泡於 **$23 \\pm 2^\\circ\\text{C}$ 飽和石灰水 ($\\text{Ca(OH)}_2$ 水溶液)** 中養護，防止試體內的氫氧化鈣溶出。',
      ],
    },
    {
      concept: '水泥砂漿抗壓強度試驗步驟 (CNS 1010)',
      kind: 'chart',
      title: 'CNS 61 第 I 型與第 III 型水泥砂漿最低抗壓強度規範比較圖',
      caption: '對比普通水泥 (Type I) 與早強水泥 (Type III) 在 1 天、3 天、7 天與 28 天齡期之法規最低抗壓強度門檻。',
      svg: barChart({
        w: 520,
        h: 260,
        categories: ['1 天齡期', '3 天齡期', '7 天齡期', '28 天齡期'],
        series: [
          { name: '第 I 型普通水泥 (MPa)', tone: 'blue', values: [0, 12.0, 19.0, 28.0] },
          { name: '第 III 型早強水泥 (MPa)', tone: 'red', values: [12.0, 24.0, 32.0, 40.0] },
        ],
        y: { min: 0, max: 45, ticks: [0, 10, 20, 30, 40], label: '抗壓強度 (MPa)' },
        values: true,
      }),
      table: {
        headers: ['養護齡期', '第 I 型普通水泥 (MPa)', '第 II 型平熱水泥 (MPa)', '第 III 型早強水泥 (MPa)'],
        rows: [
          ['1 天 (24 小時)', '無規定', '無規定', '≥ 12.0 MPa'],
          ['3 天 (72 小時)', '≥ 12.0 MPa', '≥ 10.0 MPa', '≥ 24.0 MPa (為 I 型兩倍)'],
          ['7 天', '≥ 19.0 MPa', '≥ 17.0 MPa', '≥ 32.0 MPa'],
          ['28 天', '≥ 28.0 MPa', '≥ 28.0 MPa', '實務達 38 ~ 42 MPa'],
        ],
      },
      takeaways: [
        '第 III 型早強水泥 **1 天強度 ($12\\text{ MPa}$)** 即達到第 I 型普通水泥 **3 天強度**的標準；其 **3 天強度 ($24\\text{ MPa}$)** 已接近第 I 型 28 天水準。',
        '渥太華標準砂 (Ottawa Standard Sand) 為純度極高之圓形石英砂，粒徑介於 **$0.15 \\sim 0.85\\text{ mm}$**（通過 #20 篩、停留於 #100 篩），可排除骨材級配差異之干擾。',
      ],
    },
    {
      concept: '水泥砂漿抗壓強度試驗步驟 (CNS 1010)',
      kind: 'table',
      title: '水泥砂漿抗壓試驗 (CNS 1010) 關鍵試驗條件與誤差防範表',
      caption: '整理試體製作、流度試驗、養護液體、受壓面選擇與加載速率之標準操作規範。',
      table: {
        headers: ['試驗環節', 'CNS 1010 標準規範值', '常見錯誤操作', '對強度結果之偏差影響'],
        rows: [
          ['拌合水灰比與流度', 'W/C = 0.485；25次落下流度 110±5%', '任意增減水量未控流度', '水量過多導致孔隙率增加、強度偏低'],
          ['拆模後養護液體', '23 ± 2°C 飽和石灰水浸泡', '浸泡於一般流動自來水', 'Ca(OH)₂ 被溶濾析出，試體多孔強度下降'],
          ['試驗受壓面選擇', '與模壁接觸之兩個平整側面', '以鏝刀抹平之頂面受壓', '頂面不平整產生偏心應力集中，測值偏低'],
          ['試驗機加載速率', '900 ~ 1800 N/s (在 20~80 秒內壓壞)', '加載過快或衝擊載重', '加載速率過快會使測得之抗壓強度虛高'],
        ],
      },
      takeaways: [
        '抗壓試驗時，若**加載速率越快**，材料來不及發展微裂縫潛變，測得的表觀抗壓強度會**偏高**；反之加載過慢則偏低。',
        '務必選擇與鋼模內壁接觸的**平整側面**作為受壓面，避免因頂面抹平不均造成局部應力集中，且無需像混凝土圓柱試體那樣另外蓋平 (Capping)。',
      ],
    },
  ],

  'cement-storage': [
    {
      concept: '水泥包裝與工地儲存防潮',
      kind: 'diagram',
      title: '工地袋裝水泥防潮倉儲標準配置剖面圖',
      caption: '遵循「離地 30 cm、離牆 30 cm、堆高不超過 10 袋、先進先出」四大防潮原則，防止水泥吸收水氣與二氧化碳風化結塊。',
      svg: (() => {
        let s = '';
        // 倉庫牆面與地面
        s += wall(48, 30, 196, 'left');
        s += ground(40, 520, 196);
        // 架高木棧板 (離地 30 cm)
        s += rect(120, 160, 250, 10, { tone: 'amber', fill: 'amber', soft: true, w: 1.6 });
        for (let x = 130; x <= 350; x += 70) {
          s += rect(x, 170, 18, 26, { tone: 'amber', fill: 'amber', soft: true, w: 1.4 });
        }
        // 堆疊水泥袋 (5排示範，標示上限 10 袋)
        for (let row = 0; row < 5; row++) {
          for (let col = 0; col < 3; col++) {
            const bx = 132 + col * 76;
            const by = 142 - row * 18;
            s += rect(bx, by, 72, 16, { tone: 'blue', fill: 'blue', soft: true, rx: 4, w: 1.3 });
          }
        }
        s += text(245, 56, '每包 50 kg（體積約 33 L）', { anchor: 'middle', size: 12, weight: 'bold', tone: 'blue' });
        // 尺寸標註
        s += dim(48, 115, 132, 115, '離牆 ≥ 30 cm', { offset: -14, tone: 'red' });
        s += dim(382, 160, 382, 196, '離地 ≥ 30 cm', { offset: 42, tone: 'red' });
        s += dim(382, 70, 382, 160, '堆高 ≤ 10 袋', { offset: 42, tone: 'blue' });

        s += box(435, 42, 112, 136, [
          '防潮四守則',
          '1. 離地 ≥ 30 cm',
          '2. 離牆 ≥ 30 cm',
          '3. 堆高 ≤ 10 袋',
          '   (長期 ≤ 7 袋)',
          '4. 先進先出原則',
        ], { tone: 'green', size: 11 });

        return svg(560, 224, s);
      })(),
      takeaways: [
        '台灣袋裝水泥標準每包重 **$50\\text{ kg}$**（比重 $3.15$，鬆方體積約 $0.033\\text{ m}^3$）；堆疊過高（$>10$ 袋）會因底層承受巨大靜壓而產生「壓實結塊 (Warehouse Pack)」。',
        '水泥受潮風化是同時吸收空氣中的 **$H_2O$（水氣）與 $CO_2$（二氧化碳）**，提前水化並碳化成無膠結力的碳酸鈣 $\\text{CaCO}_3$。',
      ],
    },
    {
      concept: '水泥包裝與工地儲存防潮',
      kind: 'chart',
      title: '水泥儲存時間對 28 天抗壓強度折減率之影響趨勢圖',
      caption: '水泥出廠後隨儲存月數增加，表面顆粒受潮風化，導致配製混凝土之 28 天抗壓強度顯著衰減。',
      svg: lineChart({
        w: 520,
        h: 260,
        x: { min: 0, max: 24, ticks: [0, 3, 6, 12, 24], label: '袋裝水泥儲存時間 (月)' },
        y: { min: 40, max: 105, ticks: [40, 60, 80, 100], label: '相對 28 天抗壓強度 (%)' },
        series: [
          {
            name: '一般工地防潮儲存強度保留率',
            tone: 'blue',
            points: [[0, 100], [3, 82], [6, 72], [12, 61], [24, 50]],
            markers: true,
          },
          {
            name: '潮濕不通風環境儲存',
            tone: 'red',
            points: [[0, 100], [3, 68], [6, 55], [12, 45]],
            dash: 'dash',
            markers: true,
          },
        ],
        overlay: (f) =>
          point(f, 3, 82, '3個月約折減 15~20%', { tone: 'blue', dx: 8, dy: -8 }) +
          point(f, 6, 72, '6個月折減約 25~30%', { tone: 'blue', dx: 8, dy: -8 }),
      }),
      table: {
        headers: ['儲存時間', '強度折減幅度', '結塊狀態檢查', '工程處置規定'],
        rows: [
          ['新鮮出廠 (< 1 個月)', '0% (100% 強度)', '粉末鬆散細緻', '正常依原配比使用'],
          ['儲存 3 個月', '約折減 15% ~ 20%', '偶有輕微假性結塊 (手捏即碎)', '須重新進行凝結與強度試驗合格方可使用'],
          ['儲存 6 個月', '約折減 25% ~ 30%', '部分產生硬結塊', '篩除結塊並降級使用於非結構次要工程'],
          ['儲存 1 年 ~ 2 年', '折減高達 40% ~ 50%', '嚴重風化硬塊 (手捏不碎)', '嚴禁用於結構工程，應予報廢淘汰'],
        ],
      },
      takeaways: [
        '袋裝水泥儲存超過 **3 個月**（散裝水泥超過 6 個月）時，使用前必須**重新抽樣檢驗**其凝結時間與砂漿抗壓強度。',
        '區分結塊性質：若用手指輕壓即碎成粉末，屬於堆疊壓力造成的「壓實假結塊」，過篩後仍可使用；若堅硬捏不碎，則為受潮水化之「真結塊」，必須廢棄。',
      ],
    },
    {
      concept: '假凝 (False Set) vs 閃凝 (Flash Set)',
      kind: 'table',
      title: '水泥假凝 (False Set) 與閃凝 (Flash Set / 瞬凝) 機制與挽救對照表',
      caption: '從成因化學反應、放熱程度、重拌可逆性與最終強度影響四個面向，精準區辨假凝與閃凝。',
      table: {
        headers: ['比較項目', '假凝 (False Set)', '閃凝 / 瞬凝 (Flash Set)', '正常初凝 (Normal Initial Set)'],
        rows: [
          ['化學成因', '磨製溫度過高(>120°C)，二水石膏脫水成半水石膏，遇水迅速還原結晶', '石膏添加不足或失效，C₃A 遇水瞬間劇烈水化', 'C₃S 與 C₃A 在石膏調控下正常生成 C-S-H 與鈣礬石'],
          ['發生時間與放熱', '加水後 1~5 分鐘內變硬；幾乎不放熱', '加水後數分鐘內瞬間硬化；放出大量高熱', '加水 45 分鐘以後；溫和穩定放熱'],
          ['不加水強行重拌', '可恢復塑性與工作度（可逆）', '無法恢復塑性，再度迅速變硬（不可逆）', '破壞初凝結構，不可重拌'],
          ['對最終強度影響', '重拌後使用，最終強度不受影響', '晶體結構疏鬆破壞，強度嚴重喪失（必須廢棄）', '正常發展設計強度'],
        ],
      },
      takeaways: [
        '必考口訣：**「假凝石膏熱脫水，不放熱、重拌可救不減強；閃凝 C3A 缺石膏，放高熱、不可逆轉必報廢。」**',
        '遇到假凝時，只需延長攪拌時間或**不額外加水直接重拌**即可打碎石膏針狀結晶網並恢復坍度；若誤加水反而會提高水灰比而降低強度！',
      ],
    },
  ],

  'concrete': [
    {
      concept: '水灰比理論 (Abrams\' Law) 與耐久性',
      kind: 'diagram',
      title: 'CNS 1176 混凝土坍度試驗錐尺規與水灰比孔隙結構示意圖',
      caption: '左：上徑 10 cm、下徑 20 cm、高 30 cm 之坍度錐分三層各搗 25 下，量測筒頂至試體頂面中心之垂直沉落差；右：水灰比對毛細孔隙的影響。',
      svg: (() => {
        let s = '';
        const gy = 198;
        s += ground(20, 320, gy);
        // 坍度錐虛線 (上 10 cm, 下 20 cm, 高 30 cm)
        const cx1 = 96, topY = 58, h = 140;
        s += polygon([[cx1 - 24, topY], [cx1 + 24, topY], [cx1 + 48, gy], [cx1 - 48, gy]], { tone: 'blue', fill: 'blue', soft: true, w: 1.8 });
        s += line(cx1 - 32, topY + h / 3, cx1 + 32, topY + h / 3, { tone: 'blue', w: 1.1, dash: 'dash' });
        s += line(cx1 - 40, topY + (2 * h) / 3, cx1 + 40, topY + (2 * h) / 3, { tone: 'blue', w: 1.1, dash: 'dash' });
        s += text(cx1, topY + 26, '第3層(25下)', { anchor: 'middle', size: 10, tone: 'blue' });
        s += text(cx1, topY + 72, '第2層(25下)', { anchor: 'middle', size: 10, tone: 'blue' });
        s += text(cx1, topY + 118, '第1層(25下)', { anchor: 'middle', size: 10, tone: 'blue' });
        s += dim(cx1 - 24, topY, cx1 + 24, topY, '上徑 10 cm', { offset: -12, size: 10.5 });
        s += dim(cx1 - 48, gy, cx1 + 48, gy, '下徑 20 cm', { offset: 18, size: 10.5 });
        s += dim(cx1 - 52, topY, cx1 - 52, gy, '高 30 cm', { offset: -14, size: 10.5 });

        // 脫模後坍落混凝土與搗棒量測
        const cx2 = 240, slump = 48;
        s += line(cx1 + 10, topY, cx2 + 45, topY, { tone: 'ink', w: 3 });
        s += text(cx2, topY - 8, 'Ø16 mm 圓頭搗棒平置筒頂', { anchor: 'middle', size: 10.5, weight: 'bold' });
        s += path(`M${cx2 - 58},${gy} Q${cx2 - 48},${topY + slump} ${cx2},${topY + slump} Q${cx2 + 48},${topY + slump} ${cx2 + 58},${gy} Z`, { tone: 'amber', fill: 'amber', soft: true, w: 1.8 });
        s += dim(cx2, topY, cx2, topY + slump, '坍度 S', { offset: 28, tone: 'red', size: 11.5 });
        s += text(170, 22, 'CNS 1176 坍度試驗', { anchor: 'middle', size: 13, weight: 'bold' });

        // 右側：低 W/C vs 高 W/C 孔隙結構比較
        s += box(352, 34, 190, 76, [
          '低水灰比 (W/C = 0.40)',
          '水泥顆粒間距小・C-S-H 交織緻密',
          '毛細孔隙不連通 → 高強・高水密',
        ], { tone: 'green', size: 11 });
        s += box(352, 124, 190, 76, [
          '高水灰比 (W/C = 0.65)',
          '多餘游離水蒸發留下連通毛細孔',
          '孔隙率大 → 強度低・易滲水碳化',
        ], { tone: 'red', size: 11 });

        return svg(560, 228, s);
      })(),
      takeaways: [
        '坍度錐尺寸必背：**上頂內徑 $10\\text{ cm}$、下底內徑 $20\\text{ cm}$、高 $30\\text{ cm}$**；配合 $\\varnothing 16\\text{ mm}$、長 $60\\text{ cm}$ 圓頭鋼搗棒，分 **3 層（每層約佔體積 1/3，高度約 7、16、30 cm）** 各均勻搗實 **25 次**。',
        '垂直提起坍度模需在 **$5 \\pm 2$ 秒**內完成，全過程自裝模至提模須在 **2.5 分鐘**內完成，量測筒高 $30\\text{ cm}$ 與試體坍落後**最高處中心點**之垂直距離即為坍度。',
      ],
    },
    {
      concept: '水灰比理論 (Abrams',
      kind: 'chart',
      title: '亞伯拉姆水灰比定律 (Abrams\' Law)：水灰比對 28 天抗壓強度影響曲線',
      caption: '在充分搗實前提下，混凝土抗壓強度與水灰比 (W/C) 成反比指數衰減；引氣混凝土因含微氣泡故同水灰比下強度略低。',
      svg: lineChart({
        w: 520,
        h: 260,
        x: { min: 0.3, max: 0.75, ticks: [0.35, 0.45, 0.55, 0.65, 0.75], label: '重量水灰比 W/C', fmt: (v) => v.toFixed(2) },
        y: { min: 10, max: 60, ticks: [10, 20, 30, 40, 50, 60], label: '28天抗壓強度 f\'c (MPa)' },
        series: [
          {
            name: '非引氣混凝土 (Non-Air-Entrained)',
            tone: 'blue',
            points: [[0.35, 52], [0.40, 45], [0.45, 38], [0.50, 32], [0.55, 27], [0.60, 23], [0.65, 19], [0.70, 16]],
            markers: true,
          },
          {
            name: '引氣混凝土 (Air-Entrained, 含氣量 5~6%)',
            tone: 'green',
            points: [[0.35, 42], [0.40, 36], [0.45, 30], [0.50, 25], [0.55, 21], [0.60, 18], [0.65, 15], [0.70, 13]],
            dash: 'dash',
            markers: true,
          },
        ],
        overlay: (f) =>
          point(f, 0.45, 38, '結構耐久上限 W/C ≤ 0.45~0.50', { tone: 'red', dx: 8, dy: -6 }),
      }),
      table: {
        headers: ['水灰比 (W/C)', '非引氣 28天強度 (MPa)', '引氣 28天強度 (MPa)', '典型工程配比定位'],
        rows: [
          ['0.35 ~ 0.40', '45 ~ 52 MPa', '36 ~ 42 MPa', '高強度結構柱、預力混凝土構件'],
          ['0.45', '約 38 MPa (385 kgf/cm²)', '約 30 MPa', '海工結構、暴露於腐蝕環境之耐久上限'],
          ['0.50 ~ 0.55', '27 ~ 32 MPa (280 kgf/cm²)', '21 ~ 25 MPa', '一般 RC 建築梁、柱、樓板標準配比'],
          ['0.65 ~ 0.70', '16 ~ 19 MPa (175 kgf/cm²)', '13 ~ 15 MPa', '非結構打底混凝土 (PC)、次要回填'],
        ],
      },
      takeaways: [
        '亞伯拉姆水灰比定律公式：$f\'_c = \\frac{A}{B^{(W/C)}}$，說明在骨材潔淨且搗實密實時，**水灰比 $W/C$ 是決定混凝土強度與孔隙率的最關鍵單一因素**。',
        '水泥完全水化所需的理論結合水量僅約水泥重量的 **$22\\% \\sim 25\\%$**（加上凝膠孔水共約 $38\\% \\sim 40\\%$），多加的水僅是為了提供施工流動性（工作度），蒸發後皆成為毛細孔隙。',
      ],
    },
    {
      concept: '特種混凝土比較：SCC vs HPC vs 輕質混凝土 vs 透水混凝土',
      kind: 'table',
      title: 'ACI 絕對體積法配比設計原理與四大特種混凝土性能比較表',
      caption: '匯整 1 m³ 混凝土絕對體積組成，並對照 SCC、HPC、輕質與透水混凝土之配比特徵。',
      table: {
        headers: ['混凝土類型', '核心配比特徵', '工作度 / 檢測指標', '主要工程功能與優勢'],
        rows: [
          ['普通結構混凝土 (RC)', 'W/C ≈ 0.45~0.55；含氣量 1~2%', '坍度 10 ~ 18 cm', '絕對體積和 V_w + V_c + V_s + V_g + V_air = 1 m³'],
          ['自充填混凝土 (SCC)', '高量粉體 + 強塑劑；減粗骨材', '坍流度 55 ~ 70 cm (免振動)', '穿越密集鋼筋不析離，消除蜂窩與噪音'],
          ['高性能混凝土 (HPC)', '低水膠比(W/B ≤ 0.38) + 矽灰/爐石', '高坍流度、高早期與長期強度', '極致密低滲透，耐久年限達百年以上'],
          ['透水混凝土 (Pervious)', '單一粒徑粗骨材、無細砂(No-fines)', '連續空隙率 15% ~ 25%', '雨水直接入滲地下，實踐海綿城市與降溫'],
        ],
      },
      takeaways: [
        '絕對體積法核心公式：每 $1\\text{ m}^3$ 混凝土中，$\\frac{W_w}{1000} + \\frac{W_c}{1000 G_c} + \\frac{W_s}{1000 G_s} + \\frac{W_g}{1000 G_g} + Air = 1.0\\text{ m}^3$。',
        '**自充填混凝土 (SCC)** 具備高流動性、抗析離性與鋼筋間隙通過性，改用**坍流度試驗（擴散直徑 $500 \\sim 700\\text{ mm}$）**與 V 型漏斗、U 型箱檢測。',
      ],
    },
    {
      concept: '細骨材篩分析與細度模數 FM',
      kind: 'chart',
      title: '細骨材篩分析累積停留百分率曲線（例題 FM = 2.90）',
      caption: '由粗到細各標準篩的累積停留百分率依序為 4、16、34、58、82、96%，加總後除以 100 得 FM = 2.90，屬於中粗砂。',
      svg: lineChart({
        w: 520,
        h: 260,
        x: { min: 1, max: 6, ticks: [1, 2, 3, 4, 5, 6], label: '標準篩', fmt: (v) => ['4.75mm', '2.36mm', '1.18mm', '600μm', '300μm', '150μm'][v - 1] },
        y: { min: 0, max: 100, ticks: [0, 20, 40, 60, 80, 100], label: '累積停留百分率 (%)' },
        series: [{ name: '累積停留 (%)', tone: 'blue', points: [[1, 4], [2, 16], [3, 34], [4, 58], [5, 82], [6, 96]], markers: true }],
        overlay: (f) => [[1, 4], [2, 16], [3, 34], [4, 58], [5, 82], [6, 96]].map(([x, y]) => text(f.X(x) - 6, f.Y(y) - 8, `${y}`, { tone: 'blue', size: 11, weight: 'bold', anchor: 'end' })).join(''),
      }),
      table: {
        headers: ['標準篩', '累積停留 (%)'],
        rows: [['4.75 mm', '4'], ['2.36 mm', '16'], ['1.18 mm', '34'], ['600 μm', '58'], ['300 μm', '82'], ['150 μm', '96'], ['FM', '(4+16+34+58+82+96)/100 = 2.90']],
      },
      takeaways: [
        'FM 越大代表砂越粗；混凝土用細骨材的 FM 一般約 2.3–3.1。',
        '累積停留百分率曲線越往左上方偏，代表粗顆粒越多。',
      ],
    },
    {
      concept: '混凝土摻料：化學摻料與礦物摻料',
      kind: 'diagram',
      title: '混凝土摻料分類與主要作用',
      caption: '化學摻料用量少，主要調整工作性、凝結與早期強度；礦物摻料可取代部分水泥，藉卜作嵐反應提高後期強度與耐久性並降低水化熱。',
      svg: (() => {
        let s = '';
        s += box(220, 12, 120, 40, '混凝土摻料', { tone: 'ink', size: 13 });
        s += arrow(250, 52, 140, 78, { tone: 'muted', w: 1.4 });
        s += arrow(310, 52, 420, 78, { tone: 'muted', w: 1.4 });
        s += box(40, 80, 200, 40, ['化學摻料（用量少）'], { tone: 'blue', size: 12.5 });
        s += box(320, 80, 200, 40, ['礦物摻料（取代部分水泥）'], { tone: 'green', size: 12.5 });
        const chem = [['輸氣劑', '抗凍融'], ['減水劑／強塑劑', '減水增強'], ['緩凝劑', '延遲凝結'], ['早強劑', '加速凝結']];
        chem.forEach((c, i) => { s += box(14 + (i % 2) * 128, 134 + Math.floor(i / 2) * 52, 120, 44, c, { tone: 'blue', size: 11.5 }); });
        const mine = [['飛灰', '降水化熱'], ['爐石粉', '抗硫酸鹽'], ['矽灰', '高強度']];
        mine.forEach((c, i) => { s += box(300 + i * 86, 134, 80, 44, c, { tone: 'green', size: 11.5 }); });
        s += text(420, 206, '卜作嵐反應：SiO₂ + Ca(OH)₂ → C-S-H', { tone: 'green', size: 11.5, anchor: 'middle', weight: 'bold' });
        return svg(560, 246, s);
      })(),
      takeaways: [
        '輸氣劑會降低強度，但能提高工作性與抗凍融能力；含氯早強劑不可用於鋼筋混凝土。',
        '礦物摻料早期強度發展較慢，但能降低水化熱、提高後期強度與耐久性，也能減少碳排放。',
      ],
    },
  ],

  'stone-ceramics-glass': [
    {
      concept: '石材乾掛工法 (Dry-Hanging System) 與防污處理',
      kind: 'diagram',
      title: '外牆石材乾掛工法 (Dry-Hanging) 錨栓構造與三大岩類轉化圖',
      caption: '左：以不鏽鋼膨脹錨栓、L型托架與插銷加環氧樹脂固定石材，預留空氣層消除白華；右：火成岩、沉積岩、變質岩循環。',
      svg: (() => {
        let s = '';
        // 左側：乾掛石材剖面
        s += rect(34, 30, 56, 176, { tone: 'ink', fill: 'muted', soft: true, w: 1.6 });
        s += hatchRect(34, 30, 56, 176, { spacing: 9, tone: 'muted' });
        s += text(62, 118, 'RC 結構牆', { anchor: 'middle', rotate: -90, size: 12, weight: 'bold' });

        // 不鏽鋼錨栓與 L 托架
        s += rect(70, 108, 68, 8, { tone: 'blue', fill: 'blue', soft: false, w: 1.2 });
        s += rect(130, 94, 8, 36, { tone: 'blue', fill: 'blue', soft: false, w: 1.2 });
        s += circle(90, 112, 5, { tone: 'blue', fill: 'paper', w: 1.5 });
        // 上下石材板塊
        s += rect(148, 32, 32, 76, { tone: 'amber', fill: 'amber', soft: true, w: 1.8 });
        s += rect(148, 116, 32, 88, { tone: 'amber', fill: 'amber', soft: true, w: 1.8 });
        // 扣件插銷 Pin 與耐候填縫膠
        s += rect(161, 98, 6, 28, { tone: 'red', fill: 'red', soft: false });
        s += circle(176, 112, 4, { tone: 'green', fill: 'green', soft: false });
        s += text(164, 70, '石材', { anchor: 'middle', size: 11, weight: 'bold' });
        s += text(164, 160, '30mm', { anchor: 'middle', size: 10.5, tone: 'muted' });
        s += dim(90, 188, 148, 188, '背後空氣層', { offset: 14, tone: 'blue', size: 10.5 });
        s += text(190, 96, '不鏽鋼插銷 + Epoxy', { size: 11, tone: 'red', weight: 'bold' });
        s += text(190, 116, 'Silicone 耐候填縫膠', { size: 11, tone: 'green', weight: 'bold' });
        s += text(190, 136, 'L型不鏽鋼角鋼托架', { size: 11, tone: 'blue', weight: 'bold' });

        // 右側：三大岩石分類與代表石材
        s += box(348, 26, 192, 52, ['火成岩：花崗岩・安山岩・玄武岩', '結晶緻密・吸水率最低・最耐磨耐酸'], { tone: 'red', size: 11 });
        s += box(348, 92, 192, 52, ['沉積岩：石灰岩・砂岩・頁岩', '具層理構造・孔隙較大・易受酸蝕'], { tone: 'amber', size: 11 });
        s += box(348, 158, 192, 52, ['變質岩：大理石 (結晶石灰岩)・板岩', '紋理華麗・主成分 CaCO₃ 怕酸雨'], { tone: 'violet', size: 11 });
        s += arrow(444, 78, 444, 92, { tone: 'muted', w: 1.4, head: 5 });
        s += arrow(444, 144, 444, 158, { tone: 'muted', w: 1.4, head: 5 });

        return svg(560, 224, s);
      })(),
      takeaways: [
        '**花崗岩（深成火成岩）**主成分為石英與長石，莫氏硬度高、吸水率 $< 0.5\\%$、耐酸雨，最適合做**建築外牆與高人流地坪**。',
        '**大理石（變質岩，原岩為石灰岩）**主成分為碳酸鈣 ($\\text{CaCO}_3$)，遇酸雨 ($\\text{H}_2\\text{SO}_4$) 會溶蝕失去光澤，故僅宜用於**室內裝修牆地坪**。',
        '**乾掛工法**免除傳統濕式水泥砂漿打底，徹底根絕游離鈣溶出造成的**白華（壁癌）與水斑**，並大幅提升耐震變位能力。',
      ],
    },
    {
      concept: '陶瓷製品分類與普通紅磚品質試驗',
      kind: 'chart',
      title: '四大陶瓷製品與 CNS 382 普通紅磚三個等級之吸水率與抗壓強度比較',
      caption: '燒結溫度愈高，坏體玻璃化程度愈高，吸水率愈低而抗壓強度愈高（瓷器 < 石器 < 陶器 < 土器）。',
      svg: barChart({
        w: 520,
        h: 260,
        categories: ['甲種紅磚', '乙種紅磚', '丙種紅磚', '陶質面磚', '石質面磚', '瓷質面磚'],
        series: [
          { name: '吸水率上限 (%)', tone: 'blue', values: [15, 19, 23, 18, 6, 1] },
          { name: '抗壓強度標準 (MPa)', tone: 'red', values: [15, 10, 7, 12, 22, 35] },
        ],
        y: { min: 0, max: 40, ticks: [0, 10, 20, 30, 40], label: '吸水率 (%) / 強度 (MPa)' },
        values: true,
        catSize: 11,
      }),
      table: {
        headers: ['陶瓷 / 磚材類別', '燒成溫度 (°C)', 'CNS 吸水率規定', 'CNS 抗壓強度 / 特性'],
        rows: [
          ['CNS 382 甲種普通磚', '約 950 ~ 1050°C', '≤ 15%', '≥ 15.0 MPa (約 150 kgf/cm²)'],
          ['CNS 382 乙種普通磚', '約 900 ~ 1000°C', '≤ 19%', '≥ 10.0 MPa (約 100 kgf/cm²)'],
          ['CNS 382 丙種普通磚', '約 800 ~ 900°C', '≤ 23%', '≥ 7.0 MPa (約 70 kgf/cm²)'],
          ['CNS 3299 瓷質面磚 (Ia)', '1200 ~ 1300°C', '≤ 0.5% ~ 1.0%', '完全玻化，外牆與重載地坪首選'],
        ],
      },
      takeaways: [
        '陶瓷製品依坏體緻密度與燒成溫度由高至低分為：**瓷器（吸水率 $<1\\%$）$>$ 石器（$<6\\%$）$>$ 陶器（$<18\\%$）$>$ 土器（紅磚、瓦，吸水率最高）**。',
        '台灣標準紅磚尺寸為 **$200 \\times 95 \\times 53\\text{ mm}$**，符合長 $= 2 \\times$ 寬 $+ 10\\text{ mm}$ 灰縫、長 $= 4 \\times$ 厚 $- 12\\text{ mm}$ 之模矩搭接比例。',
      ],
    },
    {
      concept: '建築玻璃種類與安全性能比較',
      kind: 'table',
      title: '建築安全與節能玻璃種類（強化、膠合、Low-E 複層）性能比較表',
      caption: '比較普通退火玻璃與三大建築機能玻璃之製程原理、破裂型態、現場裁切性與適用部位。',
      table: {
        headers: ['玻璃種類', '製造原理與構造', '破裂安全型態', '加工限制與最佳適用部位'],
        rows: [
          ['普通平板玻璃 (Annealed)', '浮式法成形後徐冷退火', '破裂成銳利大塊刀狀碎片，極易傷人', '可現場裁切；僅用於一般低樓層小窗'],
          ['強化玻璃 (Tempered)', '加熱至 650°C 後急速風冷，表面形成壓應力層', '強度為普通 3~5 倍；破成鈍角小顆粒 (但有自爆率)', '強化後嚴禁裁切鑽孔；用於無框玻璃門、淋浴間'],
          ['膠合玻璃 (Laminated)', '兩片玻璃間夾 PVB 強韌塑膠膜高溫高壓膠合', '破裂後碎片黏附於 PVB 膜不掉落、防穿透與隔音', '高空帷幕牆、採光天窗、防盜防彈窗首選'],
          ['Low-E 複層玻璃 (IGU)', '雙層玻璃夾乾燥空氣/氬氣層 + 金屬低輻射鍍膜', '反射遠紅外線熱輻射，U 值極低、防結露隔音', '不可裁切；綠建築節能外殼帷幕標準配備'],
        ],
      },
      takeaways: [
        '**強化玻璃**表面為壓應力、內部為拉應力，一旦切入內部拉應力區就會整片粉碎，故**所有裁切、磨邊與開孔必須在強化熱處理前完成**！',
        '高空玻璃帷幕與採光罩為防止玻璃自爆墜落傷人，應優先採用**膠合玻璃（或強化膠合玻璃）**，利用中間 **PVB 膜**黏住碎片。',
      ],
    },
  ],

  'wood': [
    {
      concept: '木材微觀構造與年輪組織',
      kind: 'diagram',
      title: '木材橫切面年輪組織與三向異向收縮（弦向 > 徑向 > 縱向）示意圖',
      caption: '左：原木橫切面顯示髓心、心材、邊材與徑切板 vs 弦切板之翹曲變形；右：三切面收縮比例。',
      svg: (() => {
        let s = '';
        const cx = 135, cy = 115;
        // 原木同心年輪
        s += circle(cx, cy, 82, { tone: 'amber', fill: 'amber', soft: true, w: 2.2 });
        s += circle(cx, cy, 56, { tone: 'amber', fill: 'amber', soft: true, w: 1.5 });
        s += circle(cx, cy, 34, { tone: 'red', fill: 'red', soft: true, w: 1.4 });
        s += circle(cx, cy, 14, { tone: 'red', fill: 'red', soft: true, w: 1.2 });
        s += dot(cx, cy, 3.5, 'ink');
        // 髓線
        for (let deg = 0; deg < 360; deg += 45) {
          const rad = (deg * Math.PI) / 180;
          s += line(cx, cy, cx + 82 * Math.cos(rad), cy + 82 * Math.sin(rad), { tone: 'muted', w: 0.9, dash: 'dot' });
        }
        // 弦切板 (Tangential) 與 徑切板 (Radial) 取材位置
        s += rect(cx - 52, cy - 68, 104, 14, { tone: 'blue', fill: 'paper', w: 1.8 });
        s += text(cx, cy - 61, '弦切板 (與年輪相切)', { anchor: 'middle', baseline: 'middle', size: 10, tone: 'blue', weight: 'bold', halo: false });
        s += rect(cx + 12, cy - 7, 66, 14, { tone: 'green', fill: 'paper', w: 1.8 });
        s += text(cx + 45, cy, '徑切板', { anchor: 'middle', baseline: 'middle', size: 10, tone: 'green', weight: 'bold', halo: false });

        s += text(cx - 20, cy + 24, '心材(深色耐腐)', { anchor: 'middle', size: 10.5, tone: 'red', weight: 'bold' });
        s += text(cx, cy + 70, '邊材(淺色易腐・含水高)', { anchor: 'middle', size: 10.5, tone: 'ink' });

        // 右側：弦切板瓦狀翹曲與三向收縮比
        s += text(395, 30, '弦切板乾縮向木表反翹（瓦狀變形）', { anchor: 'middle', size: 12, weight: 'bold', tone: 'blue' });
        s += path('M300,72 Q395,98 490,72 L490,88 Q395,114 300,88 Z', { tone: 'blue', fill: 'blue', soft: true, w: 1.8 });
        s += text(395, 62, '木表（遠離髓心側・弦向收縮大）', { anchor: 'middle', size: 10.5, tone: 'red' });
        s += text(395, 114, '木裏（靠近髓心側・收縮較小）', { anchor: 'middle', size: 10.5, tone: 'muted' });

        s += box(268, 134, 264, 76, [
          '木材乾縮率黃金比例（必考！）',
          '弦向 (T) : 徑向 (R) : 纖維縱向 (L)',
          '≈ 10 : 5 : 0.1~0.3',
          '（弦向收縮率 6~12% 最大，縱向幾乎不收縮）',
        ], { tone: 'amber', size: 11.5 });

        return svg(560, 224, s);
      })(),
      takeaways: [
        '木材各部位比較：**心材**細胞已停止生命活動、含樹脂單寧、顏色深、比重較大、**耐腐性強且不易翹曲**；**邊材**負責輸送水分、含水率高、易蛀蝕腐朽。',
        '同一年輪中，春夏生長的**春材（早材）**細胞腔大壁薄、色淺質軟；秋冬生長的**秋材（晚材）**細胞腔小壁厚、色深緻密，**秋材比例愈高則木材強度愈高**。',
        '乾縮變形量大小恆為：**弦向（切線方向，$6\\sim 12\\%$）$>$ 徑向（半徑方向，$3\\sim 6\\%$）$\\gg$ 縱向（平行纖維，$0.1\\sim 0.3\\%$）**，比例約為 **$10 : 5 : 0.2$**。',
      ],
    },
    {
      concept: '含水率 (Moisture Content) 與纖維飽和點',
      kind: 'chart',
      title: '木材含水率與纖維飽和點 (FSP ≈ 30%) 對抗壓強度及乾縮率之雙重關係圖',
      caption: '含水率在 FSP (30%) 以上時減少的是自由水，強度與體積皆不變；低於 FSP 時吸附水蒸發，木材開始收縮且強度隨乾燥而大幅提升。',
      svg: lineChart({
        w: 520,
        h: 260,
        x: { min: 0, max: 60, ticks: [0, 15, 30, 45, 60], label: '木材含水率 MC (%)' },
        y: { min: 0, max: 80, ticks: [0, 20, 40, 60, 80], label: '順紋抗壓強度 (MPa) / 乾縮指標' },
        series: [
          {
            name: '順紋抗壓強度 (MPa)',
            tone: 'blue',
            points: [[0, 74], [8, 58], [15, 45], [22, 34], [30, 26], [45, 26], [60, 26]],
            markers: true,
          },
          {
            name: '體積乾縮量 (×8倍顯示 %)',
            tone: 'red',
            points: [[0, 72], [8, 52], [15, 36], [22, 18], [30, 0], [45, 0], [60, 0]],
            dash: 'dash',
            markers: true,
          },
        ],
        overlay: (f) =>
          line(f.X(30), f.box.top, f.X(30), f.box.top + f.box.height, { tone: 'amber', w: 1.6, dash: 'dash' }) +
          point(f, 30, 26, '纖維飽和點 FSP ≈ 25~30%', { tone: 'amber', dx: 6, dy: -12 }) +
          point(f, 15, 45, '氣乾含水率 ≈ 12~15%', { tone: 'green', dx: -15, dy: -12 }),
      }),
      table: {
        headers: ['木材含水狀態', '含水率 MC (%)', '水分存在型態', '體積與力學強度變化'],
        rows: [
          ['生材 (Green Wood)', '40% ~ 100% 以上', '細胞腔滿載自由水 + 細胞壁飽含結合水', '體積最大、強度最低且維持定值'],
          ['纖維飽和點 (FSP)', '約 25% ~ 30% (平均 30%)', '細胞腔自由水 = 0；細胞壁結合水 100% 飽和', '物理與力學性質轉折臨界點！'],
          ['氣乾材 (Air-Dried)', '約 12% ~ 18% (台灣約 15%)', '與大氣溫濕度達成平衡含水率 (EMC)', '尺寸穩定，結構木作施工標準狀態'],
          ['爐乾 / 絕乾材 (OD)', '0%', '自由水與細胞壁結合水完全烘乾移除', '乾縮量達極限，強度最高但質地變脆'],
        ],
      },
      takeaways: [
        '**纖維飽和點 (FSP, 約 $30\\%$)** 是木材最核心的臨界點：**細胞腔內無自由水，而細胞壁內微毛細管之結合水（吸附水）恰達飽和**。',
        '當含水率 $\\text{MC} > \\text{FSP}$ 時，含水率增減只改變細胞腔自由水，**木材體積不脹縮、強度也不變**；當 $\\text{MC} < \\text{FSP}$ 時，含水率愈低，細胞壁結合水脫出，**木材體積收縮且強度顯著上升**。',
      ],
    },
    {
      concept: '工程木材規格：集成材 (Glulam) 與直交集成板 (CLT)',
      kind: 'table',
      title: '木材順紋與橫紋力學強度差異及工程木材 (Glulam vs CLT) 比較表',
      caption: '對比實木順紋與橫紋之受力強弱關係，以及現代大跨度木構造所用集成材與直交集成板之構造特性。',
      table: {
        headers: ['材料 / 受力方向', '結構組構或纖維方向', '力學強度特徵', '工程應用與設計定位'],
        rows: [
          ['實木順紋受力 (平行纖維)', '拉力與壓力平行於管胞纖維束', '順紋抗拉強度最高 (約為順紋抗壓 2~3 倍)，但易受木節削弱', '木桁架拉桿、梁柱主受力方向'],
          ['實木橫紋受力 (垂直纖維)', '外力垂直擠壓中空管胞細胞腔', '橫紋抗壓與橫紋抗拉極弱 (僅順紋 1/10~1/20)，易壓潰劈裂', '支承墊壓處須驗算橫紋承壓面積'],
          ['結構集成材 (Glulam)', '層積木板平行纖維方向膠合層壓', '剔除木節缺陷並分散配置，強度均質高於原木', '大跨度弧形木梁、體育館與教堂木拱柱'],
          ['直交集成板 (CLT)', '奇數層 (3, 5, 7層) 木板呈 90° 正交疊合', '雙向力學均質、消除異向乾縮翹曲，防火炭化層穩定', '中高層木構造大樓之承重剪力牆與實心樓板'],
        ],
      },
      takeaways: [
        '無缺陷清材的理論強度為**順紋抗拉 $>$ 順紋抗壓 $>$ 抗彎 $>$ 順紋剪力 $>$ 橫紋抗拉**；但工程實木因常有「木節」嚴重折減抗拉強度，故設計上多以順紋抗壓或抗彎控制。',
        '**直交集成板 (CLT)** 採奇數層 $90^\\circ$ 正交膠合，徹底克服木材橫紋脆弱與弦向乾縮問題，被譽為「綠色混凝土」，可興建 10 層以上高層木構建築。',
      ],
    },
  ],

  'polymers-asphalt': [
    {
      concept: '瀝青三大基本性質試驗 (CNS 2260 / CNS 2261)',
      kind: 'diagram',
      title: '瀝青三大基本性質試驗（針入度、軟化點環球法、延展性）裝置圖解',
      caption: '依序量測瀝青之稠度軟硬（25°C, 100g, 5s 貫入 0.1mm）、高溫感溫性（鋼球墜觸底板溫度）與低溫抗裂延展長度。',
      svg: (() => {
        let s = '';
        // 1. 針入度試驗
        const x1 = 96;
        s += rect(x1 - 46, 130, 92, 54, { tone: 'ink', fill: 'muted', soft: true, w: 1.6 });
        s += rect(x1 - 38, 140, 76, 44, { tone: 'ink', fill: 'ink', soft: true, w: 1.2 });
        s += rect(x1 - 16, 48, 32, 20, { tone: 'blue', fill: 'blue', soft: true, rx: 3, w: 1.4 });
        s += text(x1, 58, '100 g', { anchor: 'middle', baseline: 'middle', size: 10.5, weight: 'bold', halo: false });
        s += line(x1, 68, x1, 158, { tone: 'blue', w: 2.2 });
        s += text(x1, 22, '1. 針入度 (CNS 2260)', { anchor: 'middle', size: 12, weight: 'bold', tone: 'blue' });
        s += text(x1, 198, '25°C・100g・5秒', { anchor: 'middle', size: 11, tone: 'ink', weight: 'bold' });
        s += text(x1, 214, '每 0.1 mm = 1 度 (測稠度)', { anchor: 'middle', size: 10.5, tone: 'muted' });

        // 2. 軟化點（環球法 Ring & Ball）
        const x2 = 280;
        s += rect(x2 - 52, 66, 104, 118, { tone: 'blue', fill: 'blue', soft: true, w: 1.6 });
        s += rect(x2 - 18, 96, 36, 10, { tone: 'amber', fill: 'ink', soft: true, w: 1.6 });
        s += circle(x2, 88, 8, { tone: 'red', fill: 'red', soft: false });
        s += circle(x2, 160, 8, { tone: 'red', fill: 'red', soft: true, dash: 'dash' });
        s += arrow(x2, 108, x2, 150, { tone: 'red', w: 1.8, head: 7 });
        s += line(x2 - 38, 168, x2 + 38, 168, { tone: 'ink', w: 2 });
        s += dim(x2 + 24, 106, x2 + 24, 168, '25.4 mm', { offset: 16, tone: 'red', size: 10.5 });
        s += text(x2, 22, '2. 軟化點（環球法）', { anchor: 'middle', size: 12, weight: 'bold', tone: 'red' });
        s += text(x2, 198, '3.5g 鋼球下墜 25.4 mm', { anchor: 'middle', size: 11, tone: 'ink', weight: 'bold' });
        s += text(x2, 214, '加熱速率 5°C/min (測感溫性)', { anchor: 'middle', size: 10.5, tone: 'muted' });

        // 3. 延展性（延度）試驗
        const x3 = 464;
        s += rect(x3 - 66, 96, 132, 74, { tone: 'green', fill: 'green', soft: true, w: 1.5 });
        s += polygon([[x3 - 56, 122], [x3 - 36, 122], [x3 - 36, 144], [x3 - 56, 144]], { tone: 'amber', fill: 'amber', soft: true, w: 1.4 });
        s += polygon([[x3 + 36, 122], [x3 + 56, 122], [x3 + 56, 144], [x3 + 36, 144]], { tone: 'amber', fill: 'amber', soft: true, w: 1.4 });
        s += path(`M${x3 - 36},126 Q${x3},132 ${x3 + 36},126 L${x3 + 36},140 Q${x3},134 ${x3 - 36},140 Z`, { tone: 'ink', fill: 'ink', soft: false });
        s += arrow(x3 + 42, 112, x3 + 64, 112, { tone: 'red', w: 1.8, head: 6 });
        s += text(x3, 22, '3. 延展性 (CNS 2261)', { anchor: 'middle', size: 12, weight: 'bold', tone: 'green' });
        s += text(x3, 198, '25°C・拉伸速率 5 cm/min', { anchor: 'middle', size: 11, tone: 'ink', weight: 'bold' });
        s += text(x3, 214, '拉斷時之公分數 (測抗裂韌性)', { anchor: 'middle', size: 10.5, tone: 'muted' });

        return svg(560, 228, s);
      })(),
      takeaways: [
        '**針入度 (Penetration)**：在 **$25^\\circ\\text{C}$** 下，總重 **$100\\text{ g}$** 標準針自由貫入 **$5$ 秒**之深度，以 **$0.1\\text{ mm}$ 為 $1$ 度**；針入度愈大代表瀝青愈軟、黏度愈低。',
        '**軟化點（環球法）**：重 **$3.5\\text{ g}$** 鋼球置於銅環瀝青上，以 $5^\\circ\\text{C/min}$ 加熱至瀝青下垂觸及下方 **$25.4\\text{ mm}$ (1 吋)** 底板時之溫度；軟化點愈高代表高溫抗車轍穩定性愈好。',
        '**延展性（延度 Ductility）**：在 **$25^\\circ\\text{C}$** 水槽中以 **$5\\text{ cm/min}$** 速率拉伸「8 字形」試模至斷裂時的長度（$\text{cm}$）。',
      ],
    },
    {
      concept: '石油瀝青 (Asphalt) 分類與膠體學性質',
      kind: 'chart',
      title: '鋪面直餾瀝青 vs 屋頂防水氧化（吹製）瀝青之三大性質指標對比圖',
      caption: '將空氣吹入熱瀝青氧化（吹製瀝青）後，瀝青質增加，使軟化點大幅提高（耐屋頂日曬不流淌），但針入度與延展性下降。',
      svg: barChart({
        w: 520,
        h: 260,
        categories: ['針入度 (0.1 mm)', '軟化點 (°C)', '延展性 (cm)'],
        series: [
          { name: '直餾瀝青 (道路鋪面用)', tone: 'blue', values: [85, 48, 110] },
          { name: '氧化/吹製瀝青 (屋頂防水用)', tone: 'amber', values: [25, 92, 15] },
        ],
        y: { min: 0, max: 130, ticks: [0, 30, 60, 90, 120], label: '試驗測值' },
        values: true,
      }),
      table: {
        headers: ['瀝青種類', '膠體結構型態', '針入度 / 軟化點 / 延度', '主要工程用途'],
        rows: [
          ['直餾瀝青 (Straight Asphalt)', '溶膠型 (Sol) 偏凝膠', '針入度大(60~100)、軟化點低(45~55°C)、延度極大(>100cm)', '公路 AC 瀝青混凝土柔性鋪面'],
          ['氧化/吹製瀝青 (Blown Asphalt)', '凝膠型 (Gel，富含瀝青質)', '針入度小(10~40)、軟化點高(85~105°C)、延度小', '屋頂防水油毛氈塗敷、地下室防潮與伸縮縫填縫'],
          ['天然湖瀝青 (Trinidad)', '含天然礦物粉與灰分', '質地堅硬、耐磨抗老化極佳', '摻入直餾瀝青改良高級橋面與機場跑道鋪面'],
          ['乳化瀝青 (Emulsified)', '瀝青微粒分散於乳化劑水中', '常溫液態免加熱、無有機溶劑揮發', '路面透層 (Prime Coat)、黏層 (Tack Coat) 常溫施工'],
        ],
      },
      takeaways: [
        '瀝青三大膠體組分：**油分（Oils，賦予流動性）**、**樹脂（Resins，賦予黏結性與延展性）**、**瀝青質（Asphaltenes，賦予硬度、體幹與高軟化點）**。',
        '**直餾瀝青**延度大、黏結力強但感溫性敏感，適合**道路鋪面**；**氧化（吹製）瀝青**軟化點高、感溫性鈍（夏日曝曬不流淌、冬日不脆裂），專用於**建築屋頂防水**。',
      ],
    },
    {
      concept: '高分子塑膠分類：熱塑性 (Thermoplastic) vs 熱固性 (Thermosetting)',
      kind: 'table',
      title: '高分子塑膠分類（熱塑性 vs 熱固性）與建築三大防水樹脂比較表',
      caption: '區辨受熱可逆塑形之線型高分子與受熱交聯硬化之網狀高分子，並對照 Epoxy、PU、Silicone 之工地應用。',
      table: {
        headers: ['高分子材料名稱', '分子結構與熱分類', '關鍵物理與化學特性', '建築工程標準用途'],
        rows: [
          ['PVC (聚氯乙烯 #3) / PE / PP', '線型鏈狀・熱塑性塑膠 (加熱軟化可回收重塑)', '耐酸鹼腐蝕、電絕緣佳、質輕易加工', '建築給排水管、電線導管、止水帶、塑膠地磚'],
          ['環氧樹脂 (Epoxy)', '三維網狀・熱固性樹脂 (主劑+硬化劑交聯不可逆)', '接著力極強、硬度高、耐化學品，但無彈性且不耐 UV 粉化', '結構裂縫低壓灌注補強、植筋膠、廠房耐磨地坪'],
          ['聚胺酯 (PU, Polyurethane)', '彈性體交聯樹脂 (單液濕氣固化或雙液型)', '高延伸率、具裂縫追從彈性，但基底潮濕易起鼓泡', '屋頂與中庭彈性塗膜防水、跑道地坪、伸縮縫填縫'],
          ['矽利康 (Silicone, 聚矽氧烷)', '無機 Si-O 矽氧主鏈高分子', '耐紫外線 (UV) 與耐候性冠絕群倫、憎水彈性佳', '外牆玻璃帷幕、鋁門窗框周邊耐候防水填縫膠'],
        ],
      },
      takeaways: [
        '**熱塑性塑膠**（PVC、PE、PP、PS、壓克力 PMMA、PC、ABS）受熱軟化、冷卻硬化，具可逆性；**熱固性樹脂**（酚醛電木、尿素、三聚氰胺美耐皿、Epoxy、不飽和聚酯 FRP）一旦硬化即形成三維網狀共價鍵，受熱不再軟化。',
        '結構補強必選**高強高剛性的 Epoxy**；屋頂大面積防水必選**高彈性的 PU**；外牆門窗抗日曬填縫必選**耐 UV 的中性 Silicone**。',
      ],
    },
  ],

  'metals': [
    {
      concept: '鋼筋與鋼結構電化學腐蝕機制',
      kind: 'diagram',
      title: '混凝土內鋼筋電化學腐蝕迴路（陽極鐵溶解・陰極耗氧還原）與體積膨脹圖解',
      caption: '當混凝土因碳化 (pH < 11) 或氯離子侵入破壞鈍化膜時，鋼筋表面形成陽極與陰極微電池，鐵鏽膨脹 2.5~6 倍撐裂保護層。',
      svg: (() => {
        let s = '';
        // 混凝土保護層與裂縫
        s += rect(30, 34, 500, 174, { tone: 'ink', fill: 'muted', soft: true, rx: 6, w: 1.6 });
        s += text(280, 52, '混凝土保護層（正常 pH ≈ 12.5~13.5 形成緻密 γ-Fe₂O₃ 鈍化膜）', { anchor: 'middle', size: 11.5, tone: 'muted' });

        // 外部入侵因子
        s += pill(145, 78, 'CO₂ 碳化 (pH < 11) 或 Cl⁻ 氯離子入侵', 'red', 11);
        s += pill(415, 78, 'O₂ 氧氣 + H₂O 水分滲入', 'blue', 11);

        // 鋼筋本體
        s += rect(60, 128, 440, 34, { tone: 'ink', fill: 'paper', w: 2.2 });
        // 陽極鏽蝕坑與紅棕色鐵鏽膨脹層
        s += ellipse(160, 128, 44, 16, { tone: 'red', fill: 'red', soft: true, w: 2 });
        s += text(160, 128, 'Fe(OH)₃ 鐵鏽膨脹 2.5~6 倍', { anchor: 'middle', baseline: 'middle', size: 10.5, tone: 'red', weight: 'bold', halo: false });
        // 保護層順筋脹裂縫
        s += polyline([[126, 118], [98, 92], [72, 60]], { tone: 'red', w: 2 });
        s += polyline([[194, 118], [218, 90], [238, 62]], { tone: 'red', w: 2 });

        // 鋼筋內部電子流 e⁻
        s += arrow(185, 145, 380, 145, { tone: 'amber', w: 2.4, head: 8, label: '鋼筋內電子流 2e⁻', labelPos: 'mid', labelOffset: [0, 18] });
        // 孔隙水離子流 OH⁻
        s += arrow(380, 108, 210, 108, { tone: 'green', w: 2, dash: 'dash', head: 7, label: '孔隙液離子流 2OH⁻', labelPos: 'mid', labelOffset: [0, -8] });

        s += text(145, 188, '陽極 (氧化)：Fe → Fe²⁺ + 2e⁻', { anchor: 'middle', size: 11.5, tone: 'red', weight: 'bold' });
        s += text(410, 188, '陰極 (還原)：½O₂ + H₂O + 2e⁻ → 2OH⁻', { anchor: 'middle', size: 11.5, tone: 'blue', weight: 'bold' });

        return svg(560, 224, s);
      })(),
      takeaways: [
        '鋼筋腐蝕必備四大條件：**陽極（鈍化膜破裂處）**、**陰極**、**電解質通路（混凝土孔隙水）**，以及陰極反應不可或缺的 **氧氣 ($\\text{O}_2$) 與水 ($\\text{H}_2\\text{O}$)**。',
        '鐵氧化成氫氧化鐵與水合氧化鐵（鐵鏽）時，**體積會膨脹 $2.5 \\sim 6$ 倍**，產生巨大徑向張應力導致混凝土保護層順著鋼筋方向開裂剝落（順筋裂縫）。',
        '**犧牲陽極法**係將電位更活潑（更負）的金屬如 **鋅 (Zn)、鎂 (Mg)、鋁 (Al)** 連接於鋼構上，由其代替鐵作為陽極優先氧化溶解，使鋼鐵維持在陰極受保護。',
      ],
    },
    {
      concept: '鋼材化學成分與碳含量效應',
      kind: 'chart',
      title: '碳含量 (Carbon Content) 對碳鋼抗拉強度、硬度與伸長率（延性）之相反影響圖',
      caption: '在含碳量 0.1% ~ 1.0% 範圍內，隨含碳量增加，抗拉強度與硬度直線上升，但伸長率（延展性）、衝擊韌性與銲接性顯著下降。',
      svg: lineChart({
        w: 520,
        h: 260,
        x: { min: 0.1, max: 0.9, ticks: [0.1, 0.25, 0.45, 0.65, 0.85], label: '含碳量 C (%)', fmt: (v) => `${v}%` },
        y: { min: 0, max: 100, ticks: [0, 25, 50, 75, 100], label: '強度 (×10 MPa) / 伸長率 (%)' },
        series: [
          {
            name: '極限抗拉強度 (×10 MPa)',
            tone: 'red',
            points: [[0.1, 38], [0.25, 48], [0.45, 65], [0.65, 82], [0.85, 95]],
            markers: true,
          },
          {
            name: '斷裂伸長率 / 延展性 (%)',
            tone: 'blue',
            points: [[0.1, 36], [0.25, 28], [0.45, 18], [0.65, 11], [0.85, 6]],
            dash: 'dash',
            markers: true,
          },
        ],
        overlay: (f) =>
          rect(f.X(0.1), f.box.top, f.X(0.25) - f.X(0.1), f.box.height, { tone: 'green', fill: 'green', soft: true, w: 0.8 }) +
          text((f.X(0.1) + f.X(0.25)) / 2, f.box.top + 18, '建築結構低碳鋼區', { anchor: 'middle', size: 10.5, tone: 'green', weight: 'bold' }),
      }),
      table: {
        headers: ['鐵碳合金分類', '含碳量 C (%)', '力學與加工特性', '典型工程製品'],
        rows: [
          ['熟鐵 / 純鐵 (Wrought Iron)', '< 0.02%', '質極軟、富延展性、易鍛造防鏽但強度低', '古典鍛造欄杆、電磁鐵芯'],
          ['低碳鋼 / 軟鋼 (Mild Steel)', '0.02% ~ 0.25%', '延展性、韌性與銲接性最佳，具明顯降伏平台', '建築型鋼 (SN400/SN490)、竹節鋼筋 (SD280W/SD420W)'],
          ['中碳鋼 (Medium Carbon)', '0.25% ~ 0.60%', '強度與硬度較高，可熱處理淬火強化，銲接性較差', '機械軸承、高強度螺栓、鐵軌'],
          ['高碳鋼 / 硬鋼 與 鑄鐵', '0.6%~2.1% (鑄鐵 >2.1%)', '高硬度耐磨但質脆易斷、不可鍛造與一般銲接', '切削刀具、彈簧鋼絲；鑄鐵用於水溝蓋、鑄鐵管'],
        ],
      },
      takeaways: [
        '建築結構用鋼與鋼筋一律採用**低碳鋼（含碳量 $< 0.25\\%$）**，以確保地震來襲時具備充足的塑性變形消能能力（延展性）與良好的工地銲接性。',
        '鋼材中的有害雜質口訣：**「磷 (P) 冷脆、硫 (S) 熱脆」**——磷會降低常溫與低溫衝擊韌性（冷脆性）；硫會在高溫軋延與銲接時引發晶界開裂（熱脆性）。',
      ],
    },
    {
      concept: '結構用鋼材規格與 CNS 標準',
      kind: 'table',
      title: 'CNS 560 鋼筋與 CNS 13812 建築結構用鋼規格符號及耐震規範總表',
      caption: '解析 SD280W、SD420W 竹節鋼筋與 SN400YB、SN490B 建築結構用鋼之代號意義與強柱弱梁抗震要求。',
      table: {
        headers: ['CNS 鋼材代號', '符號字母意義', '降伏強度 f_y 標準', '耐震工程特殊規定'],
        rows: [
          ['SD 280W', 'S=鋼、D=竹節(Deformed)、W=可銲耐震', 'f_y ≥ 280 MPa (約 2800 kgf/cm²)', '常用於 #3 ~ #5 箍筋、樓板筋與次要構件'],
          ['SD 420W', '高強度可銲耐震竹節鋼筋 (加 W 字尾)', '420 ≤ f_y ≤ 540 MPa (上限管制)', '實測抗拉與實測降伏比 f_u / f_y ≥ 1.25；含碳當量 C_eq ≤ 0.55%'],
          ['SS 400 / SM 400', 'SS=一般結構用鋼；SM=銲接結構用鋼', '400 代表最低抗拉強度 f_u ≥ 400 MPa', '無降伏強度上限管制，僅用於次要非耐震構件'],
          ['SN 490B / SN 490C', 'SN=建築結構專用鋼；B=耐震級、C=耐震抗層狀撕裂級', '490 代表 f_u ≥ 490 MPa (f_y 介於 325~445 MPa)', '嚴控降伏比 (f_y/f_u ≤ 0.80)；C 級專用於梁柱剛接翼板厚度方向受拉處'],
        ],
      },
      takeaways: [
        '**極重要考點**：鋼筋代號（如 `SD420W`）的數字代表**最低降伏強度 $f_y$**；而結構型鋼代號（如 `SS400`、`SN490`）的數字代表**最低極限抗拉強度 $f_u$**！',
        '耐震鋼筋（字尾 **W**）為什麼要規定**降伏強度上限（$\\le 540\\text{ MPa}$）**與**抗拉/降伏比 $\\ge 1.25$**？因為若梁鋼筋實際強度太高，地震時梁端不會如期先降伏，反而會害柱子先剪力破壞（違反「強柱弱梁」原則）！',
      ],
    },
  ],

  'green-materials': [
    {
      concept: '健康綠建材甲醛與 TVOC 檢測步驟 (CNS 16053)',
      kind: 'diagram',
      title: 'CNS 16053 健康綠建材小型環境試驗艙 (Small Chamber) 逸散檢測示意圖',
      caption: '將板材或塗料試片置於恆溫 25°C、相對濕度 50%、換氣率 0.5 次/hr 之不鏽鋼環境艙內 24 小時，捕集測定甲醛與 TVOC 逸散速率。',
      svg: (() => {
        let s = '';
        // 潔淨空氣進入
        s += box(16, 86, 96, 56, ['潔淨空氣供給', '活性碳過濾', 'T = 25 ± 1°C', 'RH = 50 ± 5%'], { tone: 'green', size: 10.5 });
        s += arrow(112, 114, 156, 114, { tone: 'green', w: 2, head: 7 });

        // 不鏽鋼環境試驗艙
        s += rect(158, 36, 224, 156, { tone: 'blue', fill: 'blue', soft: true, rx: 8, w: 2 });
        s += text(270, 56, '不鏽鋼小型環境試驗艙', { anchor: 'middle', size: 12.5, weight: 'bold', tone: 'blue' });
        s += text(270, 74, '換氣率 N = 0.5 次/hr・負荷比 L = 0.4 m²/m³', { anchor: 'middle', size: 10.5, tone: 'muted' });

        // 試體與內部風扇循環
        s += rect(216, 98, 108, 62, { tone: 'amber', fill: 'amber', soft: true, w: 1.8 });
        s += text(270, 124, '裝修建材試片', { anchor: 'middle', size: 11.5, weight: 'bold' });
        s += text(270, 142, '鋁箔封邊僅露表面', { anchor: 'middle', size: 10.5, tone: 'muted' });
        s += arrow(236, 96, 226, 80, { tone: 'red', w: 1.4, head: 5 });
        s += arrow(270, 96, 270, 78, { tone: 'red', w: 1.4, head: 5 });
        s += arrow(304, 96, 314, 80, { tone: 'red', w: 1.4, head: 5 });
        s += text(270, 178, '恆溫養護 24 hr 後達動態平衡採樣', { anchor: 'middle', size: 11, tone: 'ink', weight: 'bold' });

        // 排氣與捕集管分析
        s += arrow(382, 114, 424, 114, { tone: 'red', w: 2, head: 7 });
        s += box(426, 52, 120, 56, ['DNPH 捕集管', '+ HPLC 分析', '測甲醛 HCHO'], { tone: 'red', size: 11 });
        s += box(426, 122, 120, 56, ['Tenax 吸附管', '+ GC/MS 分析', '測 TVOC (苯/甲苯)'], { tone: 'violet', size: 11 });

        return svg(560, 214, s);
      })(),
      takeaways: [
        '健康綠建材環境試驗艙標準條件：溫度 **$25 \\pm 1^\\circ\\text{C}$**、相對濕度 **$50 \\pm 5\\%$**、換氣率 **$0.5\\text{ 次/hr}$**，以模擬台灣真實室內通風狀態。',
        '**甲醛 ($\\text{HCHO}$)** 來自合板木芯板之尿素甲醛膠著劑，被世界衛生組織列為**第一級確定致癌物**；**TVOC** 則主要來自油性塗料、稀釋劑（甲苯、二甲苯）與黏著劑。',
      ],
    },
    {
      concept: '健康綠建材甲醛與 TVOC 檢測步驟',
      kind: 'chart',
      title: 'CNS 甲醛釋出量分級 (F1 / F2 / F3) 與健康綠建材逸散速率標準比較圖',
      caption: '比較 CNS 合板/木芯板甲醛釋出量等級上限，數值愈低代表甲醛逸散愈少（F1 最優）。',
      svg: barChart({
        w: 520,
        h: 260,
        categories: ['F1（E1）', 'F2（E2）', 'F3 法規門檻', '傳統尿素膠板'],
        series: [
          { name: '甲醛平均釋出量上限 (mg/L)', tone: 'green', values: [0.3, 0.5, 1.5, 3.2] },
        ],
        y: { min: 0, max: 3.6, ticks: [0, 0.5, 1.5, 2.5, 3.5], label: '甲醛釋出量 (mg/L)', fmt: (v) => v.toFixed(1) },
        values: true,
        valueFmt: (v) => `${v.toFixed(1)} mg/L`,
        catSize: 11,
      }),
      table: {
        headers: ['甲醛等級 / 綠建材分級', '平均值上限 (mg/L)', '最大值上限 (mg/L)', '健康綠建材逸散速率 (mg/m²·hr)'],
        rows: [
          ['CNS F1 級 (對應健康綠建材 E1)', '≤ 0.3 mg/L', '≤ 0.4 mg/L', 'HCHO ≤ 0.02；TVOC ≤ 0.05 (特優無味)'],
          ['CNS F2 級 (對應健康綠建材 E2)', '≤ 0.5 mg/L', '≤ 0.7 mg/L', 'HCHO ≤ 0.05；TVOC ≤ 0.10'],
          ['CNS F3 級 (對應健康綠建材 E3)', '≤ 1.5 mg/L', '≤ 2.1 mg/L', 'HCHO ≤ 0.08；TVOC ≤ 0.19 (綠建材基準線)'],
          ['F3 以上超標板材', '> 1.5 mg/L', '> 2.1 mg/L', '禁止於國內製造、進口或銷售使用'],
        ],
      },
      takeaways: [
        '請特別注意編號順序：**CNS 木材甲醛分級為 `F1` 最嚴格（$\\le 0.3\\text{ mg/L}$）、`F3` 為最低法定門檻（$\\le 1.5\\text{ mg/L}$）**，數字愈小愈環保安全！',
        '健康綠建材標章之逸散速率合格門檻（E3 級）為：**甲醛 $\\le 0.08\\text{ mg/(m}^2\\cdot\\text{hr)}$** 且 **TVOC $\\le 0.19\\text{ mg/(m}^2\\cdot\\text{hr)}$**。',
      ],
    },
    {
      concept: '綠色低碳混凝土：飛灰與水淬高爐石粉',
      kind: 'table',
      title: '卜作嵐礦物摻合料（飛灰、水淬高爐石粉、矽灰）來源與混凝土改質比較表',
      caption: '比較三大工業副產物摻合料之粒徑細度、卜作嵐二次反應特性及對新拌與硬固混凝土之工程效益。',
      table: {
        headers: ['礦物摻合料名稱', '工業副產物來源與晶態', '顆粒形態與細度', '對混凝土性質之關鍵影響'],
        rows: [
          ['F級飛灰 (Fly Ash)', '燃煤火力發電廠集塵灰 (非晶質 SiO₂ + Al₂O₃)', '微細光滑圓球狀玻璃珠 (細度略細於水泥)', '滾珠軸承效應提升工作度、降低水化熱；早期強度略降、晚期強度與抗滲提升'],
          ['水淬高爐石粉 (GGBFS)', '煉鋼高爐熔融爐渣急冷研磨 (含 CaO + SiO₂ + Al₂O₃)', '角狀微粒 (比表面積 4000~6000 cm²/g)', '具潛在水硬性 + 卜作嵐反應；大幅提升抗硫酸鹽與抗海水氯離子滲透能力'],
          ['矽灰 (Silica Fume)', '煉製矽鐵合金之高純度煙塵 (SiO₂ > 85%)', '超微細球體 (粒徑約水泥 1/100，比表面積 20萬 cm²/g)', '微填充效應強化界面過渡區 (ITZ)，配製 ≥ 70 MPa 超高強度混凝土必備，但需水量大須配強塑劑'],
          ['卜作嵐反應通式', '活性 SiO₂ + Ca(OH)₂ + H₂O → 二次 C-S-H 膠體', '消耗無強度的氫氧化鈣，轉化為緻密膠體', '堵塞毛細孔隙提升耐久性，但摻量過高會降低鹼度，需注意初期濕治養護'],
        ],
      },
      takeaways: [
        '**卜作嵐反應 (Pozzolanic Reaction)** 核心機制：摻合料中的非晶質活性二氧化矽 ($\\text{SiO}_2$) 與水泥水化釋出的 **氫氧化鈣 ($\\text{Ca(OH)}_2$)** 發生二次反應，生成更多緻密的 **C-S-H 膠體**填塞毛細孔。',
        '**飛灰**為圓球狀顆粒，具「滾珠軸承效應」可減少用水量並提升流動性；**矽灰**粒徑僅約水泥的 **1/100**，能填補水泥顆粒間隙，是超高強度混凝土 (UHPC/HPC) 的關鍵材料。',
      ],
    },
  ],
};
