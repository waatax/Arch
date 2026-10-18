import type { TopicVisualMap } from './types';
import {
  arrow, barChart, box, circle, dim, donut, dot, flow,
  ground, line, lineChart, oblique, pill, polar, polygon,
  polyline, rect, svg, text, timeline, wall, type Pt,
} from './kit';

export const extensionsVisuals: TopicVisualMap = {
  'parametric-design-and-ai-assisted-competition': [
    {
      concept: '參數化設計核心概念與 Grasshopper',
      kind: 'diagram',
      title: 'Grasshopper 視覺化節點運算（Input → Algorithm → Geometry）資料流圖解',
      caption: '由左側數值滑桿 (Number Slider) 與太陽軌跡向量輸入，經中央矩陣距離演算節點，即時驅動右側建築立面遮陽百葉開合角度。',
      svg: (() => {
        let s = '';
        // 左側：Input 參數輸入節點
        s += box(16, 26, 132, 42, ['Number Slider', '遮陽分割數 N = 12'], { tone: 'amber', size: 11.5 });
        s += box(16, 82, 132, 42, ['Sun Vector (Pt)', '太陽高度角 α = 52°'], { tone: 'amber', size: 11.5 });
        s += box(16, 138, 132, 42, ['Curve / Surface', '立面基準曲面 Srf'], { tone: 'amber', size: 11.5 });

        // 中央：Grasshopper 演算法電池節點
        s += box(186, 44, 146, 48, ['Divide Domain² + IsoTrim', '曲面 UV 網格細分'], { tone: 'blue', size: 11.5 });
        s += box(186, 114, 146, 48, ['Vector Angle + Remap', '日照夾角映射旋轉角 θ'], { tone: 'violet', size: 11.5 });

        // 節點連線 Wires
        s += arrow(148, 47, 184, 62, { tone: 'muted', w: 1.5, head: 6 });
        s += arrow(148, 159, 184, 74, { tone: 'muted', w: 1.5, head: 6 });
        s += arrow(148, 103, 184, 135, { tone: 'muted', w: 1.5, head: 6 });
        s += arrow(259, 92, 259, 112, { tone: 'muted', w: 1.5, head: 6 });

        // 右側：生成式立面幾何輸出
        const rx = 370, ry = 32, rw = 168, rh = 148;
        s += rect(rx, ry, rw, rh, { tone: 'green', fill: 'paper', w: 1.8, rx: 6 });
        s += text(rx + rw / 2, ry + 18, '動態參數化立面預覽', { anchor: 'middle', size: 12, weight: 'bold', tone: 'green' });
        for (let i = 0; i < 5; i++) {
          const cy = ry + 42 + i * 22;
          const deg = 12 + i * 14;
          const p1 = polar(rx + 84, cy, 52, deg - 180);
          const p2 = polar(rx + 84, cy, 52, deg);
          s += line(p1[0], p1[1], p2[0], p2[1], { tone: 'green', w: 3 });
          s += dot(rx + 84, cy, 2.8, 'ink');
        }
        s += arrow(332, 138, 368, 115, { tone: 'green', w: 2, head: 8 });
        s += text(280, 208, '參數化公式：Geometry = f(Parameters, Constraints) — 調整滑桿即毫秒級重算百葉幾何', { anchor: 'middle', size: 12, weight: 'bold', tone: 'ink' });
        return svg(560, 224, s);
      })(),
      takeaways: [
        '傳統建模是「直接畫出結果 (Explicit Modeling)」，而參數化設計是「**編寫幾何生成的邏輯關係 (Algorithmic Modeling)**」。',
        'Grasshopper 資料樹 (Data Tree) 結構中，`Flatten` 會將多維階層壓平為單一清單，`Graft` 則為每個元素建立獨立分支以進行一對多配對。',
      ],
    },
    {
      concept: '性能驅動設計與遺傳演算法',
      kind: 'chart',
      title: 'Galapagos 遺傳演算法世代演進（Generation 1–50）空調能耗與日照目標收斂曲線（示意案例）',
      caption: '隨演化世代推進，演算法透過基因交配與突變自動淘汰高耗能方案，使冷房負荷逐代下降並逼近帕累托最優解（示意案例數據）。',
      svg: lineChart({
        w: 520,
        h: 255,
        x: { min: 0, max: 50, ticks: [0, 10, 20, 30, 40, 50], label: '演化世代 Generation' },
        y: { min: 40, max: 110, ticks: [40, 60, 80, 100], label: '相對指標 (%)' },
        series: [
          {
            name: '建築全年冷房能耗 (%)',
            tone: 'red',
            markers: true,
            points: [
              [0, 100], [10, 82], [20, 70], [30, 65], [40, 63], [50, 62],
            ],
          },
          {
            name: '自然採光達標面積比 (%)',
            tone: 'green',
            markers: true,
            points: [
              [0, 48], [10, 68], [20, 81], [30, 88], [40, 91], [50, 92],
            ],
          },
        ],
      }),
      table: {
        headers: ['演化世代 (Generation)', '最佳方案冷房能耗比', '自然採光達標率 (sDA)', '形態演化特徵'],
        rows: [
          ['Gen 0 (初始隨機母體)', '100% (基準)', '48%', '隨機產生 50 組量體座向與開窗率'],
          ['Gen 10 (初步篩選)', '82%', '68%', '淘汰西曬大開窗方案，量體開始向南微轉'],
          ['Gen 30 (基因交配收斂)', '65%', '88%', '南向深遮陽與中庭拔風井比例趨於穩定'],
          ['Gen 50 (帕累托最優解)', '62% (節能 38%)', '92%', '達成低能耗與高自然採光雙目標最佳平衡點'],
        ],
      },
      takeaways: [
        '性能驅動設計 (Performance-Driven Design) 結合 Ladybug / Honeybee 環境模擬插件，將日照輻射、風場與能耗轉化為可量化的適應度函數 (Fitness Function)。',
        '當同時最佳化兩個相互衝突的目標（如「最大化採光」與「最小化冷房空調負荷」）時，可利用 Octopus 求取 **帕累托前緣 (Pareto Front)** 最佳折衷解集。',
      ],
    },
    {
      concept: 'AI 輔助建築競圖工作流',
      kind: 'table',
      title: 'AI 輔助建築競圖工具鏈與 ControlNet 精準幾何控制矩陣表',
      caption: '彙整概念發想、量體控制、材質渲染至圖面排版四階段之生成式 AI 工具與空間結構鎖定技術。',
      table: {
        headers: ['競圖設計階段', '核心 AI / 數位工具', 'ControlNet / 關鍵技術參數', '建築設計實質產出與優勢'],
        rows: [
          ['1. 概念與基地破題', 'LLM + Midjourney / SDXL', 'Prompt 結構：建築師風格＋構造材質＋環境光影', '10 分鐘內快速發散 20+ 種構造美學與空間氛圍意向圖'],
          ['2. 量體線稿鎖定渲染', 'Rhino/SketchUp + ControlNet', 'Canny (邊緣線稿) + Depth (深度圖) + MLSD (建築直線)', '100% 鎖定手工模型或白模透視角度，避免 AI 亂改建築結構'],
          ['3. 局部材質替換細化', 'Inpainting (局部重繪) + LoRA', 'Denoising Strength (重繪幅度) 控制在 0.35–0.55', '固定建築主體，僅將外牆替換為清水模、木格柵或耐候鋼'],
          ['4. 超高解析度出圖', 'Ultimate SD Upscale + PS', 'Tile ControlNet 分塊放大至 4K–8K 解析度', '滿足 A1 競圖展板 300 DPI 印刷品質，補充配景人物與植栽'],
        ],
      },
      takeaways: [
        '純文字生圖 (Text-to-Image) 缺乏空間尺度與結構邏輯，建築競圖必須搭配 **ControlNet (Canny 線稿 + Depth 景深)**，才能讓 AI 嚴格遵循 Rhino/BIM 模型的透視幾何。',
        'AI 渲染圖僅負責「視覺氛圍表達」，競圖評審最看重的仍是背後的 **基地脈絡回應、平面動線機能與剖面空間邏輯**。',
      ],
    },
  ],

  'portfolio-and-design-discourse': [
    {
      concept: '建築作品集核心架構與頁面節奏',
      kind: 'diagram',
      title: '建築作品集黃金敘事曲線與單一專案「破題 → 發展 → 高潮 → 細部」跨頁節奏圖',
      caption: '作品集應避免平鋪直敘，開頭以最強主力設計 (Hero Project) 抓住評審目光，單一專案內部遵循「1 跨頁概念破題 → 1 跨頁環境演算 → 2 跨頁平立剖高潮」之視覺節奏。',
      svg: (() => {
        let s = '';
        s += flow(
          16,
          36,
          [
            ['P1 扉頁與目錄', '個人設計宣言\n視覺索引縮圖'],
            ['P2–5 主力專案 I', 'Hero Project\n完整平立剖與大樣'],
            ['P6–8 核心專案 II', '數位參數或構造\n展現技術廣度'],
            ['P9–10 實構築/手繪', '模型・競圖・速寫\n展現手作熱情'],
          ],
          { w: 116, h: 58, gap: 20, tones: ['blue', 'red', 'amber', 'green'], size: 11.5 },
        );
        // 下方：單一專案內部版面構成
        s += rect(20, 120, 520, 76, { tone: 'muted', fill: 'paper', w: 1.4, rx: 6 });
        s += text(280, 138, '單一建築設計專案「四幕劇」跨頁構成法則 (Spread Rhythm)', { anchor: 'middle', weight: 'bold', size: 12.5, tone: 'ink' });
        s += pill(85, 168, '1. 基地問題與概念', 'blue', 11.5);
        s += arrow(150, 168, 172, 168, { tone: 'muted', w: 1.5, head: 6 });
        s += pill(232, 168, '2. 量體演變 Diagram', 'violet', 11.5);
        s += arrow(300, 168, 322, 168, { tone: 'muted', w: 1.5, head: 6 });
        s += pill(382, 168, '3. 主透視＋平剖大圖', 'red', 11.5);
        s += arrow(450, 168, 468, 168, { tone: 'muted', w: 1.5, head: 6 });
        s += pill(504, 168, '4. 構造模型', 'green', 11.5);
        return svg(560, 214, s);
      })(),
      takeaways: [
        '大學二階面試委員平均翻閱一本作品集僅 **2 至 3 分鐘**，必須將個人最成熟、最具代表性的作品放在 **第一個專案 (Hero Project)**。',
        '版面切忌塞滿零碎小圖：每個跨頁 (Spread) 應有一張佔版面 **50%–65%** 的視覺主圖（Hero Image，如剖面透視圖），搭配 3–4 張推演小圖與精煉圖說。',
      ],
    },
    {
      concept: '圖面編排視覺階層與色彩計劃',
      kind: 'chart',
      title: '建築作品集跨頁版面面積建議配比（主圖・輔圖・文字・留白）',
      caption: '專業建築排版強調「呼吸感（留白 ≥ 20%）」與清晰的視覺主從關係，避免文字過多或色彩超過 3 種（比例為排版建議，非固定規範）。',
      svg: (() => {
        let s = '';
        s += donut(
          185,
          128,
          76,
          [
            { label: '主視覺大圖', value: 50, tone: 'blue' },
            { label: '留白空間', value: 22, tone: 'green' },
            { label: '分析小圖群', value: 18, tone: 'amber' },
            { label: '標題與內文', value: 10, tone: 'violet' },
          ],
          { inner: 42 },
        );
        s += box(350, 40, 190, 172, [
          '排版色彩與字級黃金律',
          '• 底色 + 主色 ≤ 2 種低彩度色',
          '• 強調色 (Accent) 僅佔 5%',
          '• 大標題：18–24 pt Bold',
          '• 副標題：11–13 pt Medium',
          '• 內文圖說：8.5–10 pt',
          '• 留白率：維持 20%–30%',
        ], { tone: 'blue', size: 11.5 });
        return svg(560, 248, s);
      })(),
      table: {
        headers: ['版面構成元素', '建議版面面積佔比', '字級或解析度規範', '排版設計核心功能'],
        rows: [
          ['主視覺圖 (Hero Image)', '45% – 55%', '300 DPI (CMYK 印刷)', '第一秒抓住視線（推薦使用剖面透視圖或基地配置渲染）'],
          ['留白空間 (Negative Space)', '20% – 30%', '嚴守出血與天頭地腳邊距', '引導視線流動、提升版面高級感與閱讀舒適度'],
          ['輔助分析圖 (Diagrams)', '15% – 20%', '向量線條輸出 (PDF/EPS)', '交代量體生成步驟、日照風場分析與動線機能分區'],
          ['標題與設計論述文字', '8% – 12%', '內文 8.5–10pt、行距 1.4x', '點出設計命題與空間亮點，切忌長篇大論超過 150 字'],
        ],
      },
      takeaways: [
        '色彩計畫「**60-30-10 法則**」：60% 紙張留白與淺灰底、30% 深灰黑建築線條與無彩度底圖、**10% 單一強調色**（如朱紅或青藍，專門標示動線與核心空間）。',
        'CAD 平面圖放進作品集前，務必先在 Illustrator 調整線寬並轉為黑白灰階階層，切勿直接截圖 AutoCAD 黑底彩色線條！',
      ],
    },
    {
      concept: '設計論述 (Design Discourse)',
      kind: 'table',
      title: '建築設計論述「痛點 → 策略 → 空間操作 → 體驗驗證」四段式寫作架構表',
      caption: '指導學生將抽象靈感轉化為具建築專業說服力的精煉設計說明與圖文對位。',
      table: {
        headers: ['論述段落階段', '核心回答問題', '建議搭配視覺圖表', '正誤寫作對比（避免空泛形容詞）'],
        rows: [
          ['1. 基地與議題 (Issue)', '基地面臨什麼環境或社會矛盾？', '基地紋理圖、日照風向與噪音源分析圖', '✗「基地很熱鬧」→ ✓「基地夾於高架橋與老街間，面臨 75dB 交通噪音與綠地斷裂」'],
          ['2. 空間概念 (Concept)', '提出什麼核心空間原型回應問題？', '3–5 步量體生成演變圖 (Massing Diagram)', '✗「打造像家一樣溫馨的空間」→ ✓「以退縮綠帶作為聲學緩衝，植入交錯挑空之垂直聚落」'],
          ['3. 建築操作 (Tectonics)', '如何透過平面、剖面與構造落實概念？', '剖面透視圖 (Section Perspective)、牆身大樣', '具體指出：利用雙層通風立面、中庭煙囪效應或交錯露台創造視覺穿透'],
          ['4. 場所精神 (Experience)', '使用者在空間中獲得何種光影與互動？', '人眼高度室內透視圖、實體模型光影照片', '描繪時間性變化：午後陽光穿透百葉在清水模牆面投下移動光影，凝聚社區停留'],
        ],
      },
      takeaways: [
        '優秀的設計論述必須「**圖文互證**」：文字提到的每一個動作（如「切開量體引入南風」、「抬高底層釋放街角」），旁邊都必須有對應箭頭的 Diagram 支撐。',
        '少用空洞的文學形容詞（如優美、和諧、現代感），多用精確的 **空間動詞**（退縮、穿插、懸挑、錯層、框景、脫開）。',
      ],
    },
  ],

  'spatial-design': [
    {
      concept: '一、人體工學與空間尺度',
      kind: 'diagram',
      title: '建築人體工學基本尺度（走廊交錯、桌面高度、樓梯與無障礙迴轉空間）圖解',
      caption: '一切建築空間尺寸皆源於人體尺度 (Anthropometrics)：單人通行 75cm、雙人交錯 120–150cm、書桌高 75cm、輪椅 360° 迴轉直徑 150cm。',
      svg: (() => {
        let s = '';
        // 左：雙人走廊通行寬度
        s += wall(30, 40, 175, 'left');
        s += wall(155, 40, 175, 'right');
        s += ground(20, 165, 175);
        // 兩個簡化人形
        s += circle(65, 78, 10, { tone: 'blue', fill: 'blue', soft: true, w: 1.6 });
        s += rect(51, 92, 28, 45, { tone: 'blue', fill: 'blue', soft: true, rx: 5 });
        s += line(58, 137, 58, 175, { tone: 'blue', w: 2 });
        s += line(72, 137, 72, 175, { tone: 'blue', w: 2 });

        s += circle(120, 78, 10, { tone: 'green', fill: 'green', soft: true, w: 1.6 });
        s += rect(106, 92, 28, 45, { tone: 'green', fill: 'green', soft: true, rx: 5 });
        s += line(113, 137, 113, 175, { tone: 'green', w: 2 });
        s += line(127, 137, 127, 175, { tone: 'green', w: 2 });
        s += dim(30, 192, 155, 192, '雙人走廊 120–150cm', { offset: 8, tone: 'blue' });
        s += text(92, 26, '雙人正面交錯通行', { anchor: 'middle', weight: 'bold', size: 12.5 });

        // 中：坐姿桌椅高度
        s += ground(195, 355, 175);
        // 桌子 (高 75cm)
        s += polyline([[255, 175], [255, 115], [335, 115], [335, 175]], { tone: 'amber', w: 2.6 });
        // 椅子 (高 45cm)
        s += polyline([[215, 175], [215, 105], [215, 140], [245, 140], [245, 175]], { tone: 'ink', w: 2.2 });
        s += dim(335, 115, 335, 175, '75cm', { offset: -26, tone: 'amber' });
        s += dim(215, 140, 215, 175, '45cm', { offset: 24, tone: 'ink' });
        s += text(275, 26, '標準桌高 75 / 座高 45cm', { anchor: 'middle', weight: 'bold', size: 12.5 });

        // 右：無障礙輪椅迴轉直徑 150cm
        const cx = 460, cy = 115, r = 56;
        s += rect(cx - r, cy - r, r * 2, r * 2, { tone: 'muted', dash: 'dot', w: 1.2 });
        s += circle(cx, cy, r, { tone: 'red', fill: 'red', soft: true, dash: 'dash', w: 1.8 });
        s += dim(cx - r, cy + r + 14, cx + r, cy + r + 14, '⌀ ≥ 150 cm', { offset: 6, tone: 'red' });
        s += text(cx, cy, '輪椅 360° 迴轉', { anchor: 'middle', baseline: 'middle', size: 11.5, weight: 'bold', tone: 'red' });
        s += text(cx, 26, '無障礙淨迴轉空間', { anchor: 'middle', weight: 'bold', size: 12.5 });
        return svg(560, 224, s);
      })(),
      takeaways: [
        '人體工學黃金數據：單人通道寬 **75–90 cm**、雙人並肩或交錯走廊寬 **120–150 cm**、餐桌／書桌高 **72–75 cm**、座椅面高 **42–45 cm**（桌椅高差約 **28–30 cm**）。',
        '無障礙設計關鍵尺寸：輪椅單向通行淨寬 **≥ 90 cm**（門扇開啟淨寬 **≥ 80 cm**），輪椅 360° 迴轉空間直徑 **≥ 150 cm**，坡道最大斜率 **≤ 1/12**。',
      ],
    },
    {
      concept: '三、基地環境觀察與微氣候分析',
      kind: 'chart',
      title: '北回歸線（台灣 23.5°N–25°N）四季正午太陽高度角與建築遮陽方位負荷比較圖',
      caption: '台灣夏季正午太陽幾近直射（仰角約 88°），冬季正午南偏仰角約 42°；東西向低角度日照熱負荷最高，需設垂直遮陽。',
      svg: barChart({
        w: 520,
        h: 255,
        categories: ['夏至正午仰角', '春秋分正午仰角', '冬至正午仰角', '南向水平遮陽效率', '西向垂直遮陽效率'],
        series: [
          { name: '角度 (°) 或遮陽效率 (%)', tone: 'amber', values: [88, 65, 42, 85, 80] },
        ],
        y: { min: 0, max: 100, ticks: [0, 20, 40, 60, 80, 100], label: '角度 (°) / 效率 (%)' },
        values: true,
        catSize: 10.5,
      }),
      table: {
        headers: ['建築立面方位', '日照與微氣候特徵', '最佳外遮陽形式', '台灣基地微氣候配置原則'],
        rows: [
          ['南向 (South)', '夏至太陽仰角極高、冬季溫暖斜射入室', '水平遮陽板 (Horizontal Louver)', '居室與客廳大面開窗優先朝南（冬暖夏涼）'],
          ['西向 / 東向 (W / E)', '午後西曬太陽仰角低、直射熱輻射最強', '垂直遮陽板或格柵 (Vertical Fin)', '西側宜配置樓梯間、浴廁、儲藏室等次要服務空間作為熱緩衝'],
          ['北向 (North)', '全年無直射強光，天空漫射光均勻穩定', '免深遮陽（注意冬季東北季風防風）', '極適合配置繪圖室、美術館展覽室、圖書閱覽室'],
          ['盛行風場 (Wind)', '夏季吹西南／南風；冬季吹東北季風', '導風翼牆與高低窗浮力通風', '北側種植防風林阻擋寒風，南側開敞迎接夏季涼風'],
        ],
      },
      takeaways: [
        '正午太陽高度角公式：$\\alpha = 90^\\circ - |\\text{緯度 } \\phi - \\text{太陽赤緯 } \\delta|$（夏至 $\\delta = +23.5^\\circ$、春秋分 $0^\\circ$、冬至 $-23.5^\\circ$）。',
        '遮陽口訣：**「南北向高仰角用水平遮陽；東西向低仰角用垂直遮陽（或綜合格子遮陽）」**。',
      ],
    },
    {
      concept: '五、建築空間組構與型態學 (Spatial Organization & Form)',
      kind: 'table',
      title: '建築空間機能分區（公／私／服）與五大空間組構型態比較表',
      caption: '整理住宅與公共建築之動線不交叉原則，以及 Francis D.K. Ching《建築：造型、空間與秩序》五大空間組織模式。',
      table: {
        headers: ['空間組構型態', '幾何排列與動線特徵', '空間階層與私密性', '經典建築案例與適用類型'],
        rows: [
          ['集中式 (Centralized)', '由一個巨大主導性中央空間統攝周圍次空間', '向心性極強、具神聖或紀念焦點', '萬神殿 (Pantheon)、中央圓頂集會堂、體育館'],
          ['線性式 (Linear)', '沿單一走廊、軸線或曲線序列串聯重複單元', '方向性與韻律感強，易適應地形延展', '學校教室走廊、長屋住宅、河岸景觀藝廊'],
          ['放射式 (Radial)', '結合集中核心與向外延伸的多條線性懸臂', '核心為公共樞紐，末端分流獨立運作', '大型機場航廈指廊、現代醫院病房分棟、星形監獄'],
          ['簇群式 vs 網格式 (Clustered / Grid)', '簇群依機能親疏自由有機聚合；網格依柱網模矩規則劃分', '簇群富聚落親切感；網格具高度結構經濟性與彈性', '簇群：傳統聚落、幼兒園；網格：密斯開放平面辦公大樓'],
        ],
      },
      takeaways: [
        '機能分區三大區塊：**公共區 (Public：客廳、門廳)**、**私密區 (Private：臥室、書房)** 與 **服務區 (Service：廚房、衛浴、機房、梯間)**。',
        '動線設計黃金律：**訪客動線、家務服務動線與家人私密動線應分流且避免相互穿越干擾**；公共建築避難動線必須遵循「雙向逃生」與無死角原則。',
      ],
    },
  ],

  'construction-methods': [
    {
      concept: '一、RC、SC 與 SRC 三大主體結構',
      kind: 'diagram',
      title: 'RC（鋼筋混凝土）、SC（鋼骨）與 SRC（鋼骨鋼筋混凝土）柱斷面構造圖解',
      caption: '比較三種主體結構柱之斷面組成：RC 柱由主筋與箍筋包覆混凝土、SC 柱為 H 型鋼或箱型鋼柱（外覆防火被覆）、SRC 則將型鋼包入鋼筋混凝土內。',
      svg: (() => {
        let s = '';
        // 1. RC 柱
        const x1 = 45, y0 = 48, sz = 110;
        s += rect(x1, y0, sz, sz, { tone: 'ink', fill: 'muted', soft: true, w: 2.2 });
        s += rect(x1 + 14, y0 + 14, sz - 28, sz - 28, { tone: 'blue', w: 1.8, rx: 4 });
        for (const dx of [18, 55, 92]) {
          for (const dy of [18, 55, 92]) {
            if (dx === 55 && dy === 55) continue;
            s += dot(x1 + dx, y0 + dy, 4.5, 'red');
          }
        }
        s += text(x1 + sz / 2, 28, '1. RC 鋼筋混凝土柱', { anchor: 'middle', weight: 'bold', size: 13 });
        s += text(x1 + sz / 2, y0 + sz + 22, '紅點：竹節主筋　藍框：箍筋', { anchor: 'middle', size: 11.5, tone: 'muted' });
        s += text(x1 + sz / 2, y0 + sz + 40, '適用：15 層以下住宅大樓', { anchor: 'middle', size: 11.5, tone: 'blue', weight: 'bold' });

        // 2. SC 鋼構造柱 (H型鋼)
        const x2 = 225;
        s += rect(x2, y0, sz, sz, { tone: 'muted', dash: 'dash', w: 1.4 });
        // H 型鋼
        s += polygon([
          [x2 + 22, y0 + 20], [x2 + 88, y0 + 20], [x2 + 88, y0 + 34], [x2 + 62, y0 + 34],
          [x2 + 62, y0 + 76], [x2 + 88, y0 + 76], [x2 + 88, y0 + 90], [x2 + 22, y0 + 90],
          [x2 + 22, y0 + 76], [x2 + 48, y0 + 76], [x2 + 48, y0 + 34], [x2 + 22, y0 + 34],
        ], { tone: 'amber', fill: 'amber', soft: true, w: 2.2 });
        s += text(x2 + sz / 2, 28, '2. SC 鋼骨結構柱', { anchor: 'middle', weight: 'bold', size: 13 });
        s += text(x2 + sz / 2, y0 + sz + 22, 'H型鋼/箱型柱＋外噴防火被覆', { anchor: 'middle', size: 11.5, tone: 'muted' });
        s += text(x2 + sz / 2, y0 + sz + 40, '適用：超高層摩天樓、大跨度廠房', { anchor: 'middle', size: 11.5, tone: 'amber', weight: 'bold' });

        // 3. SRC 鋼骨鋼筋混凝土柱
        const x3 = 405;
        s += rect(x3, y0, sz, sz, { tone: 'ink', fill: 'muted', soft: true, w: 2.2 });
        s += rect(x3 + 12, y0 + 12, sz - 24, sz - 24, { tone: 'blue', w: 1.6, rx: 4 });
        // 內部十字H型鋼
        s += rect(x3 + 48, y0 + 24, 14, 62, { tone: 'green', fill: 'green', soft: true, w: 1.8 });
        s += rect(x3 + 24, y0 + 48, 62, 14, { tone: 'green', fill: 'green', soft: true, w: 1.8 });
        for (const dx of [18, 92]) {
          for (const dy of [18, 92]) {
            s += dot(x3 + dx, y0 + dy, 4.5, 'red');
          }
        }
        s += text(x3 + sz / 2, 28, '3. SRC 複合結構柱', { anchor: 'middle', weight: 'bold', size: 13 });
        s += text(x3 + sz / 2, y0 + sz + 22, '中心型鋼韌性＋外圍RC防火剛度', { anchor: 'middle', size: 11.5, tone: 'muted' });
        s += text(x3 + sz / 2, y0 + sz + 40, '適用：15–30 層高層建築或底層柱', { anchor: 'middle', size: 11.5, tone: 'green', weight: 'bold' });
        return svg(560, 214, s);
      })(),
      takeaways: [
        '**RC (鋼筋混凝土)** 利用混凝土抗壓、鋼筋抗拉之互補特性，剛度大、防火隔音佳且造價最低，但自重最大、工期較長。',
        '**SC (鋼骨結構)** 強度高、自重輕、韌性極佳且工廠預製吊裝快，但必須施作 **防火被覆（因鋼材在 500°C–600°C 時強度驟降一半以上）** 且側向晃動感較明顯。',
        '**SRC (鋼骨鋼筋混凝土)** 結合 SC 的高韌性與 RC 的高剛度及防火保護，常用於中高層大樓或大樓下部抗震樓層。',
      ],
    },
    {
      concept: '二、地下室開挖與基礎工法',
      kind: 'chart',
      title: '地下室擋土工法（鋼板樁、排樁、連續壁）適用開挖深度與壁體剛度比較圖',
      caption: '隨地下室開挖深度增加與鄰房保護要求提高，擋土支撐必須由臨時鋼板樁升級為高水密性的 RC 地下連續壁。',
      svg: barChart({
        w: 520,
        h: 255,
        categories: ['鋼板樁 (Sheet Pile)', 'H型鋼橫板條工法', '預壘排樁 / 全套管樁', 'RC 地下連續壁'],
        series: [
          { name: '建議最大開挖深度 (m)', tone: 'blue', values: [8, 10, 16, 35] },
          { name: '止水與壁體剛度評分 (0-100)', tone: 'green', values: [55, 25, 70, 98] },
        ],
        y: { min: 0, max: 110, ticks: [0, 20, 40, 60, 80, 100], label: '深度 (m) / 剛度評分' },
        values: true,
        catSize: 10.5,
      }),
      table: {
        headers: ['擋土與開挖工法', '適用地質與深度', '止水性與壁體剛度', '工程特性與都市深開挖應用'],
        rows: [
          ['H 型鋼橫板條 (Soldier Pile)', '無地下水之堅硬土層 (≤ 10m)', '無止水性（透水）、剛度低', '造價最省、施工快，但有地下水時嚴禁單獨使用'],
          ['鋼板樁 (Steel Sheet Pile)', '軟弱黏土或砂質土 (≤ 8m)', '具鎖口止水、剛度中等', '可拔除重複使用，但打設震動噪音大、鄰房易沉陷'],
          ['地下連續壁 (Diaphragm Wall)', '軟弱土層、高地下水位深開挖 (15–40m+)', '止水性與剛度最高（壁厚 60–120cm）', '台灣都會區 3 層以上地下室標準工法，可兼作永久地下室外牆'],
          ['順打工法 vs 逆打工法', '順打：由下往上蓋；逆打：以一樓版為支撐上下同時蓋', '逆打工法以結構樓板取代臨時型鋼支撐', '逆打工法 (Top-Down) 大幅縮短工期並減少鄰房側移，但逆打柱接頭施工難度高'],
        ],
      },
      takeaways: [
        '**地下連續壁 (Diaphragm Wall)** 施工順序：導溝構築 → MHL 抓斗挖掘溝槽（注入 **皂土穩定液 Bentonite** 防止槽壁坍塌）→ 吊放鋼筋籠 → **特密管 (Tremie Pipe)** 由下往上澆置水中混凝土置換穩定液。',
        '基礎分類：淺基礎含 **獨立基腳、聯合基腳、連續基腳、筏式基礎 (Mat Foundation)**；當淺層承載力不足時則採深基礎（**樁基礎、沉箱基礎**）。',
      ],
    },
    {
      concept: '三、建築外牆、屋頂防水與隔熱',
      kind: 'table',
      title: '建築平屋頂防水隔熱層、帷幕牆水密氣密與預鑄工法構造細部表',
      caption: '彙整建築物理環境控制最重要之屋頂「五層防水隔熱構造」、玻璃帷幕牆等壓排水原理與樓板隔音規範。',
      table: {
        headers: ['構造部位', '由下而上（或由外而內）標準構造層次', '關鍵構造細部規範', '防止工程瑕疵核心機制'],
        rows: [
          ['平屋頂正統防水隔熱', 'RC 屋頂版 → 1:100 洩水坡度粉刷 → 防水層 (PU/改質瀝青) → PS 隔熱磚 → 壓層混凝土/面磚', '女兒牆轉角須作 45° 八字角 (Cant Strip)，防水層上翻 ≥ 30cm 並壓入泛水滴水線', '倒置式屋頂 (Inverted Roof) 將隔熱層置於防水層上方，保護防水膜免受紫外線與溫差老化'],
          ['外牆滴水線 (Drip)', '窗台下緣、陽台下緣、女兒牆壓頂內側設凹槽 (寬深約 1–1.5cm)', '截斷表面張力水膜，迫使雨水直接滴落不往內爬', '防止雨水順著混凝土底面「尿流」倒灌入窗框及造成外牆黑斑水痕'],
          ['玻璃帷幕牆系統', '單元式 (Unitized：工廠組裝整片吊掛) vs 構件式 (Stick：現場逐支組裝立料橫料)', '採用「等壓原理 (Rainscreen / Pressure Equalization)」設計等壓腔與排水孔', '消除內外風壓差，使雨水失去被吸入室內的動力並由底部洩水孔排出'],
          ['衝擊音浮式樓板', 'RC 結構樓板 → 橡膠/玻璃棉隔音緩衝墊 → 壓層砂漿 → 木地板或磁磚', '隔音墊四周須沿牆角上翻，完全切斷樓板與牆體的「聲橋 (Sound Bridge)」', '符合建築技術規則分戶樓板衝擊音降低量 ΔLw ≥ 17 dB (或 Ln,w ≤ 58 dB) 法規'],
        ],
      },
      takeaways: [
        '外牆窗台與陽台下緣的 **「滴水線（斷水凹槽）」** 是建築構造大樣圖 (1/20) 必畫細節：利用凹槽切斷水的毛細附著力，防止雨水回流滲入窗框。',
        '屋頂防水層收頭處（女兒牆根部）嚴禁做成 90° 死角，必須先以水泥砂漿抹成 **45° 鈍角（八字角）**，再將防水毯上翻至女兒牆高 **30 cm** 以上並加金屬泛水收頭。',
      ],
    },
  ],

  'cad-bim': [
    {
      concept: '一、AutoCAD 2D 建築繪製標準與 CNS',
      kind: 'diagram',
      title: 'AutoCAD 模型空間 (1:1) → 配置視埠 (Viewport 1/100xp) → CTB 筆寬表出圖流程圖',
      caption: '展示專業 CAD 製圖將「真實尺度繪圖 (Model Space)」與「圖紙排版出圖 (Paper Space Layout)」分離管理的標準工作流。',
      svg: (() => {
        let s = '';
        // Step 1: Model Space
        s += box(16, 38, 152, 118, [
          '1. 模型空間 Model',
          '• 永遠以 1 : 1 實寸繪圖',
          '• 牆長 500cm 就輸入 500',
          '• 依圖層 ByLayer 分色',
          '  (紅1/黃2/綠3/青4)',
        ], { tone: 'blue', size: 11.5 });
        s += arrow(170, 97, 198, 97, { tone: 'muted', w: 2, head: 8 });

        // Step 2: Layout Viewport
        s += box(200, 38, 160, 118, [
          '2. 配置空間 Layout',
          '• 插入 1:1 標準 A1/A3 圖框',
          '• 建立視埠 (MVIEW)',
          '• 設定視埠比例：',
          '  平面 1/100xp、大樣 1/20xp',
        ], { tone: 'violet', size: 11.5 });
        s += arrow(362, 97, 390, 97, { tone: 'muted', w: 2, head: 8 });

        // Step 3: CTB Plot Style
        s += box(392, 38, 152, 118, [
          '3. 出圖筆寬表 .CTB',
          '• 全色轉黑 (Monochrome)',
          '• 1號紅 → 0.15mm 細線',
          '• 2號黃 → 0.25mm 中線',
          '• 3/4號 → 0.50mm 粗線',
        ], { tone: 'green', size: 11.5 });

        s += text(280, 196, '可註解性 (Annotative) 或 DIMSCALE 控制：確保 1/100 與 1/20 視埠印在紙上的字高皆為 3mm', { anchor: 'middle', size: 12, weight: 'bold', tone: 'ink' });
        return svg(560, 218, s);
      })(),
      takeaways: [
        '在配置 (Layout) 同一張 A1 圖紙上，可以同時開兩個視埠：一個設 **`1/100xp`** 顯示平面圖、另一個設 **`1/20xp`** 顯示樓梯大樣，無須在模型空間複製放大圖元。',
        '若在模型空間標註尺寸，1/100 的標註全體比例 **`DIMSCALE`** 設為 100、1/20 設為 20（或啟用 **Annotative 可註解比例**），印出來字高才會一致為 2.5–3 mm。',
      ],
    },
    {
      concept: '二、BIM (Building Information Modeling',
      kind: 'chart',
      title: 'BIM 3D–7D 多維度應用與傳統 2D CAD 作業工時對比（示意）',
      caption: '比較傳統 2D CAD 與導入 BIM 後在平立剖修改同步、管線衝突檢討、5D 數量精算與 6D 能耗分析上的效率提升幅度（數值為示意，實際效益依專案規模與團隊熟練度而異）。',
      svg: barChart({
        w: 520,
        h: 255,
        categories: ['設計變更平立剖同步', '機電管線衝突清圖', '5D 數量自動計算', '施工現場重工率降低'],
        series: [
          { name: '傳統 2D CAD 效率評分', tone: 'muted', values: [25, 30, 35, 30] },
          { name: 'BIM 參數化協同效率評分', tone: 'blue', values: [95, 92, 90, 88] },
        ],
        y: { min: 0, max: 110, ticks: [0, 25, 50, 75, 100], label: '作業準確度與效率指數' },
        values: true,
        catSize: 10.5,
      }),
      table: {
        headers: ['BIM 維度等級', '增加之核心資訊維度', '代表軟體工具', '工程生命週期核心應用'],
        rows: [
          ['3D BIM', '三維參數化幾何 ＋ 構件屬性 (材質/防火)', 'Revit, ArchiCAD, Tekla', '平立剖視圖自動生成、3D 視覺化與空間干涉硬碰撞檢查'],
          ['4D BIM', '3D 模型 ＋ 時間進度 (Time / Schedule)', 'Navisworks, Synchro', '連結甘特圖模擬每日施工順序、塔吊動線與工序衝突'],
          ['5D BIM', '4D 模型 ＋ 成本預算 (Cost / QTO)', 'BIM 5D 算量系統', '隨設計變更即時自動產出混凝土、模板、鋼筋精確工程數量表'],
          ['6D / 7D BIM', '6D 綠建築能耗分析 ＋ 7D 設施維運 (FM)', 'Insight, Green Building Studio, COBie', '評估 EUI 能耗與日照，竣工後交付 COBie 資產清冊供智慧物業管理'],
        ],
      },
      takeaways: [
        'BIM 維度必考口訣：**3D（空間幾何與碰撞）→ 4D（+時間進度 Time）→ 5D（+成本預算 Cost）→ 6D（+永續能耗 Sustainability）→ 7D（+設施維運管理 Facility Management）**。',
        '**ISO 19650** 為國際 BIM 資訊管理標準，定義了以 **CDE（Common Data Environment 共通資料環境）** 為核心的「WIP 作業中 → Shared 共享 → Published 發佈 → Archive 歸檔」四狀態協同流程。',
      ],
    },
    {
      concept: '六、CDE 共通資料環境與 IFC',
      kind: 'table',
      title: 'OpenBIM 國際開放標準（IFC、BCF、COBie）與協同作業規範對照表',
      caption: '整理跨軟體交換模型、議題追蹤與竣工營運交付之三大國際標準格式及其工程定位。',
      table: {
        headers: ['OpenBIM 標準名稱', '英文全名与對應國際標準', '檔案副檔名', '解決之核心跨平台痛點'],
        rows: [
          ['IFC (工業基礎分類)', 'Industry Foundation Classes (ISO 16739)', '.ifc / .ifczip', '跨軟體無損傳遞 3D 幾何與構件語意屬性（如 Revit 轉入 ArchiCAD 或 Tekla）'],
          ['BCF (BIM 協同格式)', 'BIM Collaboration Format', '.bcf / .bcfzip', '不需傳送幾百 MB 的模型，僅傳送「衝突視角座標、截圖與修改批註」給設計者'],
          ['COBie (營運資訊交換)', 'Construction Operations Building Information Exchange', '.xlsx / .xml', '將施工階段的設備廠牌、型號、保固期與耗材清冊結構化匯出至物業管理系統'],
          ['CDE (共通資料環境)', 'Common Data Environment (ISO 19650)', '雲端協同平台', '確保業主、建築師、營造廠永遠存取唯一最新核准版模型 (Single Source of Truth)'],
        ],
      },
      takeaways: [
        '**IFC** 負責傳遞「模型本體與屬性」，而 **BCF** 負責傳遞「碰撞檢討的鏡頭視角與待辦議題（Issue Tracking）」，兩者搭配構成 OpenBIM 協同雙核心。',
        '**COBie** 是將 BIM 模型從「營造施工端」移交給「業主維運端 (7D FM)」的標準資料結構（常表現為標準化試算表）。',
      ],
    },
  ],

  'portfolio-models': [
    {
      concept: '三、圖表視覺表達 (Architectural',
      kind: 'diagram',
      title: '建築概念生成分析圖 (Massing Evolution Diagram) 四步推演邏輯圖解',
      caption: '將複雜的設計成果拆解為「1. 原始法定最大量體 → 2. 退縮與街道對齊 → 3. 挖除中庭引風採光 → 4. 綠化露台與垂直動線植入」四個單一動作。',
      svg: (() => {
        let s = '';
        const stepBox = (ox: number, title: string, sub: string, drawFn: (P: (x: number, y: number, z: number) => Pt) => string) => {
          const P = oblique(ox + 58, 125, 13, 0.55, 215);
          let g = rect(ox, 28, 118, 145, { tone: 'muted', fill: 'paper', w: 1.2, rx: 6 });
          g += drawFn(P);
          g += text(ox + 59, 46, title, { anchor: 'middle', weight: 'bold', size: 11.5, tone: 'ink' });
          g += text(ox + 59, 160, sub, { anchor: 'middle', size: 10.5, tone: 'muted' });
          return g;
        };
        const cube = (P: (x: number, y: number, z: number) => Pt, x0: number, y0: number, z0: number, dx: number, dy: number, dz: number, tone: 'blue' | 'green' | 'amber' | 'red') => {
          const top: Pt[] = [P(x0, y0, z0 + dz), P(x0 + dx, y0, z0 + dz), P(x0 + dx, y0 + dy, z0 + dz), P(x0, y0 + dy, z0 + dz)];
          const front: Pt[] = [P(x0 + dx, y0, z0), P(x0 + dx, y0 + dy, z0), P(x0 + dx, y0 + dy, z0 + dz), P(x0 + dx, y0, z0 + dz)];
          const left: Pt[] = [P(x0, y0, z0), P(x0 + dx, y0, z0), P(x0 + dx, y0, z0 + dz), P(x0, y0, z0 + dz)];
          return polygon(left, { tone, fill: tone, soft: true, w: 1.4 }) +
            polygon(front, { tone, fill: tone, soft: true, w: 1.4 }) +
            polygon(top, { tone, fill: tone, soft: true, w: 1.6 });
        };

        s += stepBox(14, 'Step 1 基地量體', '法定建蔽容積最大化', (P) => cube(P, 0, 0, 0, 3, 4, 3.2, 'blue'));
        s += arrow(134, 100, 148, 100, { tone: 'muted', w: 1.6, head: 6 });
        s += stepBox(150, 'Step 2 轉角退縮', '讓出街角廣場與視線', (P) =>
          cube(P, 0, 0.8, 0, 3, 3.2, 3.2, 'amber') + arrow(...P(3, 0, 0), ...P(3, 1.2, 0), { tone: 'red', w: 1.8, head: 6 }),
        );
        s += arrow(270, 100, 284, 100, { tone: 'muted', w: 1.6, head: 6 });
        s += stepBox(286, 'Step 3 中庭挖除', '創造浮力通風與天井', (P) =>
          cube(P, 0, 0.8, 0, 3, 1.2, 3.2, 'blue') + cube(P, 0, 2.6, 0, 3, 1.4, 3.2, 'blue') +
          arrow(...P(1.5, 2.0, 0.5), ...P(1.5, 2.0, 4.2), { tone: 'red', w: 1.8, head: 6 }),
        );
        s += arrow(406, 100, 420, 100, { tone: 'muted', w: 1.6, head: 6 });
        s += stepBox(422, 'Step 4 階梯綠化', '南向削切引入冬陽', (P) =>
          cube(P, 0, 0.8, 0, 3, 1.2, 2.0, 'green') + cube(P, 0, 2.4, 0, 3, 1.6, 3.5, 'green'),
        );

        s += text(280, 202, 'BIG 風格生成圖解鐵律：每張小圖只交代「一個空間操作動詞」，固定等角視角並以紅箭頭標示外力', { anchor: 'middle', size: 11.5, weight: 'bold', tone: 'ink' });
        return svg(560, 218, s);
      })(),
      takeaways: [
        '繪製建築分析圖 (Architectural Diagram) 的核心原則是 **「減法與抽象化」**：固定同一個等角投影鏡頭 (Axonometric)，每一步驟只凸顯單一空間改變（推、拉、切、轉、挖）。',
        '**爆炸等角圖 (Exploded Axonometric)** 是作品集表現構造與機能分層的王牌圖種：由下而上將基地、結構柱網、樓板動線、外殼立面與屋頂桁架垂直拉開，並以虛線對齊柱位。',
      ],
    },
    {
      concept: '二、建築實體模型 (Physical Model',
      kind: 'chart',
      title: '建築實體模型比例尺（1/500 至 1/20）對應板材厚度與細節表現層級圖',
      caption: '不同比例尺的實體模型有不同的表達任務：1/500 看都市天際線與量體關係，1/100 看空間隔間，1/20 則看構造節點與真實材質。',
      svg: barChart({
        w: 520,
        h: 255,
        categories: ['1/500 基地模型', '1/200 配置量體', '1/100 空間正模', '1/50 室內與構造', '1/20 局部剖面模'],
        series: [
          { name: '15cm 外牆折算模型板厚 (mm)', tone: 'blue', values: [0.3, 0.75, 1.5, 3.0, 7.5] },
          { name: '構件細節表現指數 (0-10)', tone: 'amber', values: [2, 4, 6, 8, 10] },
        ],
        y: { min: 0, max: 11, ticks: [0, 2, 4, 6, 8, 10], label: '模型板厚 (mm) / 細節指數' },
        values: true,
        catSize: 10.5,
      }),
      table: {
        headers: ['模型比例尺', '15cm 牆對應板厚', '常用模型材料選擇', '模型表現核心目的'],
        rows: [
          ['1/500 – 1/200 (敷地模)', '0.3 – 0.75 mm', '高密度保麗龍、軟木墊、灰紙板、巴爾沙木塊', '觀察基地等高線地形、鄰房天際線與外部開放空間關係'],
          ['1/100 (標準設計正模)', '1.5 mm (常用 1.5–2mm)', '牛奶板、美國卡紙、飛機木 (Balsa)、透明膠片', '呈現完整平立面開口、樓梯動線與屋頂造型（最常用評圖比例）'],
          ['1/50 (空間體驗模)', '3.0 mm', '椴木板（雷切）、壓克力、3mm 風扣板 (Foamboard)', '可將手機鏡頭伸入室內拍攝人眼尺度光影與家具配置'],
          ['1/20 – 1/10 (構造大樣模)', '7.5 – 15 mm', '松木條、黃銅管、水泥砂漿灌模、金屬網', '驗證屋頂桁架接頭、帷幕牆吊件與懸挑結構真實傳力美學'],
        ],
      },
      takeaways: [
        '模型板材厚度必須严格換算比例：例如在 **1/100** 模型中，實際 **15 cm** 的 RC 外牆應選用 **1.5 mm（或 2 mm）牛奶板**；若誤用 5 mm 風扣板，牆厚將變成誇張的 50 cm！',
        '作品集切忌整本模型選用五顏六色的玩具感材料：統一採用 **單一色系（全白牛奶板，或灰卡紙配溫潤椴木）**，最能純粹突顯空間光影與比例美感。',
      ],
    },
    {
      concept: '四、建築透視圖攝影與照片後製合成',
      kind: 'table',
      title: '建築實體模型攝影打光、鏡頭焦段與評圖防禦策略實戰表',
      caption: '彙整將實體模型拍出「真實建築空間感」的攝影技巧，以及總評圖 (Final Jury) 簡報與防禦邏輯。',
      table: {
        headers: ['實戰項目', '專業操作規範與參數', '常見學生錯誤（扣分陷阱）', '提升作品集質感關鍵技巧'],
        rows: [
          ['模型光源設定', '使用「單一強烈平行點光源（太陽）」斜向 30°–45° 照射，輔以反光板補微弱漫射光', '在日光燈下多光源頂光直接拍攝，導致模型毫無陰影立體感', '調整燈光高度模擬清晨或黃昏長影，拍出格柵與挑空戲劇性光影'],
          ['鏡頭視角與高度', '至少拍 3 張「人眼高度 (Eye-level)」微距平視照，避免只有上帝視角俯拍', '全部都是從上往下拍的鳥瞰照，看不出人走在裡面的空間感', '手機反拿讓鏡頭貼近模型基地面，開啟兩點透視垂直校正（垂直線不歪斜）'],
          ['透視圖後製配景', '人物比例以視平線 HL 對齊頭部（平視時所有站立大人的眼睛皆落在視平線上）', '配景小人忽大忽小、彩度過高搶走建築焦點', '配景人物轉為黑白半透明剪影或低彩度，加入逆光樹影增加空氣感'],
          ['評圖口頭簡報 (Jury)', '前 90 秒破題講清「基地核心矛盾＋一句話空間概念」，再用平剖面驗證', '花 5 分鐘流水帳背誦一樓有客廳、二樓有臥室', '面對評審質疑時，回到「基地環境數據與結構邏輯」客觀防禦，勿情緒化辯解'],
        ],
      },
      takeaways: [
        '透視圖放配景人物的鐵律：**只要站在同一水平地面上，無論人物距離鏡頭遠近，所有站立成人的「眼睛（頭部）」都必須落在同一條視平線 (HL) 上**！',
        '建築攝影與透視渲染務必遵守 **「兩點透視垂直線校正」**——讓建築物的垂直柱牆保持與圖框邊緣平行鉛直，畫面才會莊重穩定。',
      ],
    },
  ],

  'certification': [
    {
      concept: '四、建築師國家考試 (國考) 與技師考試職涯規劃',
      kind: 'diagram',
      title: '台灣建築專業人才「高職 → 科大／大學 → 國家高考建築師／技師」職涯證照晉升路徑圖',
      caption: '梳理建築科學生從高職階段取得丙／乙級技術士證照、通過四技二專統測，到大學畢業考取專技高考建築師與工程技師的完整里程碑。',
      svg: (() => {
        let s = '';
        s += timeline(
          35,
          515,
          118,
          [1, 5],
          [
            { at: 1, label: ['高職階段 (16–18歲)', '建築製圖應用丙級', '測量丙級・電腦繪圖'], tone: 'blue', up: true },
            { at: 2, label: ['高三升學與乙級', '統測土建群 (06)', '建築製圖／工程管理乙級'], tone: 'green', up: false },
            { at: 3, label: ['科大／大學建築系', '建築設計 Studio 訓練', 'BIM 國際認證・實習'], tone: 'violet', up: true },
            { at: 4, label: ['畢業與專技高考', '工地主任・品管工程師', '土木／結構技師高考'], tone: 'amber', up: false },
            { at: 5, label: ['法定最高執業資格', '專技高考建築師 (6科)', '開業建築師事務所'], tone: 'red', up: true },
          ],
          { ticks: [1, 2, 3, 4, 5], tickFmt: (v) => `Stage ${v}` },
        );
        return svg(560, 224, s);
      })(),
      takeaways: [
        '高職建築科學生必考核心證照為 **「建築製圖應用（電繪項／手繪項）丙級與乙級」** 以及 **「測量丙級」**；取得乙級技術士證可享四技二專技優甄審加分 **15%**。',
        '根據我國《建築法》，唯有通過考選部 **專門職業及技術人員高等考試「建築師」** 並登記開業，才具備法定建築物設計簽證與監造權。',
      ],
    },
    {
      concept: '二、四技二專統測 (專一與專二) 備考策略',
      kind: 'diagram',
      title: '統測 06 土木與建築群：五個考科與專業科目組成',
      caption: '依 115 學年度統測考試大綱：共同科目為國文、英文、數學(C)；專業科目(一)為基礎工程力學與材料與試驗，專業科目(二)為測量實習與製圖實習。',
      svg: (() => {
        let s = '';
        s += box(20, 18, 150, 50, ['共同科目', '國文（含寫作測驗）'], { tone: 'violet', size: 12 });
        s += box(20, 80, 150, 50, ['共同科目', '英文（含非選擇題）'], { tone: 'violet', size: 12 });
        s += box(20, 142, 150, 50, ['共同科目', '數學(C)'], { tone: 'violet', size: 12 });
        s += box(205, 30, 150, 64, ['專業科目(一)', '基礎工程力學', '材料與試驗'], { tone: 'blue', size: 12 });
        s += box(205, 118, 150, 64, ['專業科目(二)', '測量實習', '製圖實習'], { tone: 'green', size: 12 });
        s += arrow(358, 62, 398, 62, { tone: 'blue', w: 1.6 });
        s += arrow(358, 150, 398, 150, { tone: 'green', w: 1.6 });
        s += box(400, 30, 140, 64, ['本站科目頁', '工程力學、材料與試驗'], { tone: 'blue', size: 11.5 });
        s += box(400, 118, 140, 64, ['本站科目頁', '測量實習、製圖實習'], { tone: 'green', size: 11.5 });
        s += text(280, 222, '各考科以 100 分計；專業科目的採計倍數依各校系當年度招生簡章規定', { tone: 'muted', size: 11.5, anchor: 'middle' });
        return svg(560, 236, s);
      })(),
      table: {
        headers: ['考科', '115 學年度考試大綱涵蓋科目', '本站對應頁面'],
        rows: [
          ['國文', '文字篇章、文本表述、文化內涵（另有寫作測驗）', '國文'],
          ['英文', '語言知識、溝通功能、文化與習俗、思考能力（另有非選擇題）', '英文'],
          ['數學(C)', '坐標與函數至微分、積分共 15 個單元', '數學 C'],
          ['專業科目(一)', '基礎工程力學（13 單元）＋材料與試驗（8 單元）', '工程力學、材料與試驗'],
          ['專業科目(二)', '測量實習（6 單元）＋製圖實習（11 單元）', '測量實習、製圖實習'],
        ],
      },
      takeaways: [
        '專業科目(一) ＝ 基礎工程力學 ＋ 材料與試驗；專業科目(二) ＝ 測量實習 ＋ 製圖實習。分科準備時要對齊這個組合，而不是依自己習慣的分法。',
        '五個考科各以 100 分計；各校系對專業科目是否加權（例如 ×2）依當年度招生簡章規定，填志願前務必查證。',
      ],
    },
    {
      concept: '四、建築師國家考試 (國考)',
      kind: 'table',
      title: '中華民國專技高考「建築師」六大應試科目、考試形式與及格制度總表',
      caption: '彙整建築系畢業生考取國家建築師執照的六大考科（含 8 小時敷地與建築設計快題）及滾動式四年保留制。',
      table: {
        headers: ['建築師高考科目', '考試時間與題型配置', '核心測驗專業能力', '及格標準與科目保留規定'],
        rows: [
          ['1. 建築計畫與設計', '連續 8 小時繪圖快題（100% 申論繪圖）', '在單日內完成大型公共建築之基地配置、平立剖面、透視與設計論述', '採「科別及格制」：單科滿 60 分即及格，及格科目成績可保留 4 年'],
          ['2. 敷地計畫與都市設計', '連續 4 小時繪圖與申論（100% 申論繪圖）', '坡地整地等高線調整、開放空間配置、人車動線、微氣候與都市設計準則', '高職測量「等高線判讀」與製圖「配置圖表現法」為本科直接基礎'],
          ['3. 建築結構系統', '2 小時（50% 選擇 ＋ 50% 計算申論）', '靜定/超靜定結構分析、RC/SC 構材設計與台灣耐震設計規範 (強柱弱梁)', '高職「工程力學」之彎矩圖、莫耳圓與挫屈公式為本科核心根基'],
          ['4. 建築構造與施工 / 5. 環境控制 / 6. 營建法規', '各 2 小時（測驗題為主或混合題）', '構造：深開挖與帷幕大樣；環控：熱傳音光空調；法規：建蔽容積與防火避難', '高職「工程材料、施工法、建築法規」佔這三科超過 60% 的基礎考點'],
        ],
      },
      takeaways: [
        '我國建築師高考採 **「科別及格制（單科 60 分及格，成績保留 4 年）」**：考生只要在連續 4 年內將全部 6 科逐一考過 60 分，即可取得建築師證書！',
        '高職三年扎實學好的 **工程力學、工程測量、製圖實習與材料施工**，正是未來大學建築系與考取建築師／土木技師最穩固的專業底氣。',
      ],
    },
  ],
};
