import type { TopicVisualMap } from './types';
import {
  angle, arcPath, arrow, axes, barChart, box, circle, dim, dot, flow, frame, ground,
  hatchRect, line, lineChart, path, pill, polar, polygon, polyline, r2, rect,
  rightAngle, svg, text, type Pt,
} from './kit';

export const draftingVisuals: TopicVisualMap = {
  'bim-concepts': [
    {
      concept: 'BIM 核心架構與參數化元件',
      kind: 'diagram',
      title: 'BIM 參數化元件階層架構與單一資料庫連動圖',
      caption: '由類別 (Category) 向下延伸至族群 (Family)、類型 (Type) 與實例 (Instance)，修改單一屬性即自動同步更新平、立、剖面與數量表。',
      svg: (() => {
        let s = '';
        s += box(20, 26, 118, 46, ['類別 Category', '門 (Doors)'], { tone: 'blue' });
        s += arrow(140, 49, 166, 49, { tone: 'muted', w: 1.6, head: 7 });
        s += box(168, 26, 118, 46, ['族群 Family', '單開防火門.rfa'], { tone: 'violet' });
        s += arrow(288, 49, 314, 49, { tone: 'muted', w: 1.6, head: 7 });
        s += box(316, 26, 118, 46, ['類型 Type', 'D1: 90×210cm'], { tone: 'amber' });
        s += arrow(436, 49, 460, 49, { tone: 'muted', w: 1.6, head: 7 });
        s += box(462, 26, 82, 46, ['實例', '3F 走廊門'], { tone: 'green' });
        // 中央參數核心
        s += box(190, 96, 180, 44, ['BIM 中央參數資料庫', 'W=90, H=210, 防火=1hr'], { tone: 'red', solid: false });
        s += arrow(375, 72, 310, 95, { tone: 'red', w: 1.6, head: 7 });
        // 下方四個同步視圖
        const targets = [
          { x: 24, t: ['2D 平面視圖', '自動更新門寬'] },
          { x: 158, t: ['立面／剖面圖', '自動更新門高'] },
          { x: 292, t: ['3D 幾何模型', '即時干涉檢查'] },
          { x: 426, t: ['門窗數量表', '自動統計樘數'] },
        ];
        for (const tg of targets) {
          s += arrow(280, 140, tg.x + 56, 168, { tone: 'blue', w: 1.5, head: 7 });
          s += box(tg.x, 170, 112, 44, tg.t, { tone: 'blue', size: 12 });
        }
        return svg(560, 228, s);
      })(),
      takeaways: [
        'BIM 元件依「類別 Category → 族群 Family → 類型 Type → 實例 Instance」四層架構管理几何與非幾何屬性。',
        '修改「類型參數」(Type Parameter) 會使專案中所有同型號門窗同步變更；修改「實例參數」如台度高則僅影響單一物件。',
        '「一處修改、處處更新」(Single Source of Truth) 徹底解決傳統 2D CAD 平立剖圖說不一致的工程痛點。',
      ],
    },
    {
      concept: 'LOD 模型發展等級與 IFC',
      kind: 'table',
      title: '各 LOD 等級對應工程階段與資訊內容',
      caption: '隨工程由概念設計推進至竣工維運，BIM 模型的幾何精確度與非幾何屬性資訊量呈階梯式成長。',
      table: {
        "headers": [
          "LOD 等級",
          "對應工程階段",
          "核心資訊內容"
        ],
        "rows": [
          [
            "LOD 100",
            "概念規劃設計",
            "量體面積、高度、體積與概略座向"
          ],
          [
            "LOD 200",
            "基本設計階段",
            "近似尺寸、形狀、位置與系統分類"
          ],
          [
            "LOD 300 / 350",
            "細部設計與管線協調",
            "精確尺寸材質、跨專業介面與支吊架定位"
          ],
          [
            "LOD 400 / 500",
            "施工製造與竣工維運",
            "加工放樣細部、廠牌序號、保固與驗收紀錄"
          ]
        ]
      },
      takeaways: [
        '建照申請與細部設計通常要求 **LOD 300**；施工現場 CSD/SEM 管線綜合協調需達 **LOD 350**。',
        '**LOD 400** 具備鋼構加工與預鑄生產精度；**LOD 500** 為現場竣工查驗模型，作為智慧建築 FM 設施管理基底。',
        '跨軟體交換統一採用 **IFC (ISO 16739)** 開放格式，避免商業軟體原生檔鎖定。',
      ],
    },
    {
      concept: '管線綜合 (CSD/SEM)',
      kind: 'table',
      title: 'BIM 碰撞衝突類型與 CSD/SEM 管線排布優先序對照表',
      caption: '彙整機電管線與結構體衝突檢測的三大分類，以及天花板內管線高程禮讓與穿梁補強規範。',
      table: {
        headers: ['檢討項目 / 衝突類別', '定義與常見工程案例', '排布優先權 / 法規限制', 'BIM 協調解決對策'],
        rows: [
          ['硬碰撞 (Hard Clash)', '實體幾何重疊：風管直接穿過 RC 大梁或鋼柱', '結構安全第一（嚴禁任意鑿穿主筋）', '預留穿梁套管 (SEM) 或調降風管高程繞行'],
          ['軟碰撞 (Soft / Clearance)', '維修淨空不足：空調箱周圍未留 60cm 檢修空間', '依設備保養規範與防火間距檢討', '建立透明虛體保護框 (Clearance Box) 自動偵測'],
          ['4D 工序衝突 (Workflow)', '施工動線或時序打架：鷹架未拆即排定吊裝帷幕', '依專案要徑法 (CPM) 施工網圖檢核', '連結 3D 模型與進度表進行 4D 施工模擬'],
          ['管線禮讓原則 (CSD)', '重力排水管、大型風管、壓力水管、電纜橋架交會', '小管讓大管、有壓讓無壓、易彎讓難彎', '先定位洩水坡度汙水管與主風管，電管最後彈性繞行'],
        ],
      },
      takeaways: [
        'CSD (機電綜合管線圖) 與 SEM (結構機電預留穿孔圖) 必須在結構體澆置混凝土前完成套繪與套管預埋。',
        'RC 梁穿孔原則：孔洞應設於梁跨度中央 1/3 處且位於梁深中軸附近（剪力與彎矩較小區），孔徑不宜超過梁深 1/3。',
      ],
    },
  ],

  'building-codes-far': [
    {
      concept: '建蔽率與容積率的法規定義',
      kind: 'diagram',
      title: '建蔽率 (BCR) 與容積率 (FAR) 基地量體退縮剖面圖',
      caption: '相同基地面積 500 m² 與容積率 240% 下，建蔽率 60%（左：4 層）與建蔽率 40%（右：6 層）的開放空間與天際線差異。',
      svg: (() => {
        let s = '';
        // 左側：BCR 60%, 4層
        s += ground(20, 250, 195);
        s += rect(35, 195, 200, 8, { tone: 'amber', fill: 'amber', soft: true });
        for (let i = 0; i < 4; i++) {
          s += rect(55, 195 - (i + 1) * 28, 120, 28, { tone: 'blue', fill: 'blue', soft: true, w: 1.5 });
        }
        s += dim(35, 208, 235, 208, '基地 A = 500 m²', { offset: 14, tone: 'muted' });
        s += dim(55, 83, 175, 83, 'A_b = 300 m² (BCR 60%)', { offset: -14, tone: 'blue' });
        s += text(135, 32, '方案甲：BCR 60% × 4F', { anchor: 'middle', weight: 'bold', size: 13, tone: 'blue' });
        s += text(135, 50, '總樓地板 ΣA_f = 1200 m² (FAR 240%)', { anchor: 'middle', size: 11.5, tone: 'muted' });

        // 右側：BCR 40%, 6層
        s += ground(295, 535, 195);
        s += rect(310, 195, 200, 8, { tone: 'amber', fill: 'amber', soft: true });
        for (let i = 0; i < 6; i++) {
          s += rect(340, 195 - (i + 1) * 22, 80, 22, { tone: 'green', fill: 'green', soft: true, w: 1.5 });
        }
        s += dim(310, 208, 510, 208, '基地 A = 500 m²', { offset: 14, tone: 'muted' });
        s += dim(420, 185, 510, 185, '空地 60%', { offset: -10, tone: 'amber' });
        s += text(415, 24, '方案乙：BCR 40% × 6F', { anchor: 'middle', weight: 'bold', size: 13, tone: 'green' });
        s += text(415, 42, '總樓地板 ΣA_f = 1200 m² (FAR 240%)', { anchor: 'middle', size: 11.5, tone: 'muted' });
        return svg(560, 234, s);
      })(),
      takeaways: [
        '建蔽率 $\\text{BCR} = A_b / A_{site}$ 控制平面最大水平投影面積，確保基地法定空地之採光、通風與透水率。',
        '容積率 $\\text{FAR} = \\sum A_f / A_{site}$ 控制立體總樓地板面積上限，決定都市人口密度與公共設施負荷。',
        '在相同容積率下，壓低建蔽率可拔高建築樓層並釋出更多地面開放空間（都市設計獎勵核心精神）。',
      ],
    },
    {
      concept: '免計容積與容積獎勵機制',
      kind: 'chart',
      title: '建築技術規則第 162 條免計容積項目上限百分比比較圖',
      caption: '陽台、梯廳、機電設備與安全梯等免計容積項目之法定扣除上限比較（以當層面積或基準容積計算）。',
      svg: barChart({
        w: 520,
        h: 255,
        categories: ['直通樓梯安全梯', '每層共同梯廳', '每層陽台上限', '機電休間設施', '都更危老獎勵上限'],
        series: [
          { name: '法定免計或獎勵上限 (%)', tone: 'blue', values: [100, 10, 10, 15, 50] },
        ],
        y: { min: 0, max: 110, ticks: [0, 20, 40, 60, 80, 100], label: '上限比例 (%)' },
        values: true,
      }),
      table: {
        headers: ['免計容積／獎勵項目', '法源依據', '計算基準', '法定上限百分比'],
        rows: [
          ['安全梯與特別安全梯間', '建築技術規則 §162', '實設梯間水平投影面積', '100% 全額免計容積'],
          ['每層陽台面積', '建築技術規則 §162', '當層樓地板面積', '不得超過當層 10%（未達 8m² 得計 8m²）'],
          ['每層共同使用梯廳', '建築技術規則 §162', '當層樓地板面積', '住宅區不得超過當層 10%'],
          ['機電設備空間＋管理委員會', '建築技術規則 §162', '總容積樓地板面積', '合計不得超過基準容積 15%'],
        ],
      },
      takeaways: [
        '每層陽台與梯廳各有 **10%** 免計上限；若住宅陽台與梯廳合併檢討，原則上合計不超過當層面積 **15%**。',
        '機電設備空間、安全梯之排煙室與管理委員會使用空間，合計免計上限為總容積樓地板面積之 **15%**。',
        '法定防空避難設備及依規定設置之法定停車空間，得全數免計入容積總樓地板面積。',
      ],
    },
    {
      concept: '道路寬度、建築高度與路角截角',
      kind: 'table',
      title: '面前道路寬度、陰影檢討與路角截角法規速查表',
      caption: '對照建築技術規則針對面前道路限高比、冬至日照陰影與交叉路口截角長度之核心強制規定。',
      table: {
        headers: ['管制項目', '建築技術規則條文', '法規計算公式或標準', '設計與檢定實務要點'],
        rows: [
          ['面前道路限高比', '建築設計施工編 §14', 'H ≤ 3.6 × (D_r + S)', '建築物高度不得超過面前道路寬度 1.5 倍加 6m，或退縮後依 3.6 倍檢討'],
          ['住宅區冬至日照權', '建築設計施工編 §40 / §23', '冬至日有效日照 ≥ 1 小時', '新建高層建築對北向鄰地住宅需檢討上午 9 時至下午 3 時日照陰影'],
          ['交叉路口截角規定', '各縣市建築管理自治條例', '依路寬 6m–20m 截角 4m–6m', '路角截角處構成等腰三角形，截角地納入道路範圍不得築造圍牆或建物'],
          ['永久性空地加成', '建築設計施工編 §15', '鄰接公園河道可併入道路寬度', '基地臨接永久性空地時，視同面前道路放寬，有利於提高建築物限高'],
        ],
      },
      takeaways: [
        '傳統面前道路限高公式 $H \\le 1.5 D_r + 6\\text{ m}$ 與容積管制區陰影仰角 $H / D \\le 3.6$ 為統測法規計算必考雙公式。',
        '面臨兩條以上不同寬度道路之角地，在較寬道路境界線一定深度內，得以較寬道路作為基準檢討建築高度。',
      ],
    },
  ],

  'drafting-fundamentals': [
    {
      concept: '工程圖的溝通功能',
      kind: 'diagram',
      title: '建築工程全生命週期圖說演進與溝通鏈圖解',
      caption: '工程圖作為建築師、結構技師、營造廠與業主之間的共同工程語言，依設計至竣工四階段逐步深化。',
      svg: (() => {
        let s = '';
        s += flow(
          18,
          44,
          [
            ['方案設計 SD', '草圖・配置・1/200'],
            ['請照圖說 DD', '法規・面積・1/100'],
            ['施工製造圖 CD', '大樣・配筋・1/20'],
            ['竣工圖 As-Built', '實測・變更・維運'],
          ],
          { w: 112, h: 54, gap: 22, tones: ['blue', 'violet', 'amber', 'green'] },
        );
        s += box(50, 134, 140, 44, ['建築師 / 設計端', '空間機能・美學法規'], { tone: 'blue', size: 12 });
        s += box(210, 134, 140, 44, ['結構 / 機電技師', '安全配筋・管線套繪'], { tone: 'amber', size: 12 });
        s += box(370, 134, 140, 44, ['工地主任 / 監造', '按圖施工・查核驗收'], { tone: 'green', size: 12 });
        s += arrow(190, 156, 210, 156, { both: true, tone: 'muted', w: 1.5, head: 6 });
        s += arrow(350, 156, 370, 156, { both: true, tone: 'muted', w: 1.5, head: 6 });
        s += text(280, 206, '統一遵循 CNS 11567 建築製圖標準（線型、字法、比例、符號一致）', { anchor: 'middle', size: 12.5, weight: 'bold', tone: 'ink' });
        return svg(560, 224, s);
      })(),
      takeaways: [
        '工程圖兼具「技術溝通」與「法律契約」雙重效力，圖面與施工說明書若有矛盾，須依契約規定之優先順序解釋。',
        '請照圖重點在法規檢討（建蔽容積、防火避難）；施工圖 (Shop Drawing) 重點在現場可施工性與介面收頭。',
      ],
    },
    {
      concept: 'A 系列圖紙與折疊',
      kind: 'chart',
      title: 'ISO 216 / CNS A0–A4 圖紙尺寸與面積對折減半關係圖',
      caption: 'A 系列圖紙長寬比恆為 √2 : 1 (約 1.414 : 1)，A0 面積恰為 1.0 m²，每進一號面積精確減半。',
      svg: barChart({
        w: 520,
        h: 255,
        categories: ['A0 (841×1189)', 'A1 (594×841)', 'A2 (420×594)', 'A3 (297×420)', 'A4 (210×297)'],
        series: [
          { name: '長邊尺寸 (mm)', tone: 'blue', values: [1189, 841, 594, 420, 297] },
          { name: '短邊尺寸 (mm)', tone: 'green', values: [841, 594, 420, 297, 210] },
        ],
        y: { min: 0, max: 1300, ticks: [0, 300, 600, 900, 1200], label: '邊長 (mm)' },
        values: true,
        catSize: 11,
      }),
      table: {
        headers: ['圖紙號數', '標準尺寸 W × L (mm)', '圖紙面積 (m²)', '建築工程典型用途'],
        rows: [
          ['A0', '841 × 1189', '1.000 m²', '大型都市計畫全區配置圖、競圖展板'],
          ['A1', '594 × 841', '0.500 m²', '建築工地正式施工藍圖、建照申請標準圖幅'],
          ['A2', '420 × 594', '0.250 m²', '中小型工程圖集、建築製圖技能檢定常用圖幅'],
          ['A3 / A4', '297 × 420 / 210 × 297', '0.125 / 0.0625 m²', 'A3 半尺寸審圖本、A4 工程報告書與規範裝訂標準'],
        ],
      },
      takeaways: [
        'A 系列圖紙黃金比例 $L / W = \\sqrt{2} \\approx 1.414$，將長邊對折後長寬比仍維持 $\\sqrt{2}:1$（短邊變為下一號的長邊，小數點無條件捨去）。',
        'A1、A2、A3 工程藍圖裝訂歸檔時，一律以風琴折疊法折成 **A4 (210 × 297 mm)** 大小，並使右下角圖頭朝外以便查閱。',
      ],
    },
    {
      concept: '圖面階段與版本',
      kind: 'table',
      title: '建築工程各階段圖說代碼與版次管理規範表',
      caption: '區分建築、結構、機電各專業圖號前綴，以及設計變更雲形線 (Revision Cloud) 與版本簽認機制。',
      table: {
        headers: ['圖說專業分類', '標準圖號前綴', '核心圖面內容', '版次管理與審核規範'],
        rows: [
          ['建築圖 (Architectural)', 'A (A1, A2...)', '面積計算表、配置、平立剖面、門窗與樓梯大樣', '送審版標記 Rev.A/B，正式施工版標記 Rev.0/1/2'],
          ['結構圖 (Structural)', 'S (S1, S2...)', '結構一般說明、基礎配筋、各層梁柱版配筋圖', '須由結構技師簽證，變更時须同步核對建築開孔'],
          ['機電水電圖 (MEP)', 'E / P / M / F', '電力照明(E)、給排水(P)、空調(M)、消防設備(F)', '依建築底圖套繪，變更處以雲形線及三角版次號標示'],
          ['竣工圖 (As-Built)', 'AB / 竣工字樣', '反映施工期間所有現場設計變更 (EI/DCR) 之最終尺寸', '作為使照查驗、產權登記與日後物業修繕之唯一依據'],
        ],
      },
      takeaways: [
        '圖面發生設計變更時，必須在修改部位繪製「雲形線 (Revision Cloud)」並標上三角形版次編號，於標題欄加註修改日期與事由。',
        '新版本圖說發出後，舊版施工藍圖應立即加蓋「作廢 (Superseded / Void)」章，嚴防工地誤用舊圖施工。',
      ],
    },
  ],

  'civil-architectural-drawings': [
    {
      concept: '圖說之間如何互證',
      kind: 'diagram',
      title: '建築平、立、剖、大樣圖「軸線・高程・編號」三角互證關係圖',
      caption: '透過結構柱網軸線 (X1-Xn, Y1-Yn)、高程基準 (GL/FL) 與大樣索引符號，將分散圖紙串聯為立體空間。',
      svg: (() => {
        let s = '';
        s += box(200, 18, 160, 44, ['共同基準網格', '柱心軸線 X/Y ＋ 高程 FL'], { tone: 'red' });
        s += box(30, 100, 145, 48, ['建築平面圖 (Plan)', '水平位置・門窗編號 D/W'], { tone: 'blue' });
        s += box(208, 100, 145, 48, ['建築立面圖 (Elev.)', '外觀材質・斜屋頂與總高'], { tone: 'green' });
        s += box(385, 100, 145, 48, ['建築剖面圖 (Sect.)', '樓高淨高・降板與梁深'], { tone: 'amber' });
        s += arrow(250, 62, 110, 98, { tone: 'red', w: 1.6, head: 7 });
        s += arrow(280, 62, 280, 98, { tone: 'red', w: 1.6, head: 7 });
        s += arrow(310, 62, 450, 98, { tone: 'red', w: 1.6, head: 7 });
        s += box(130, 174, 300, 40, ['結構配筋圖 (S) ＆ 門窗大樣圖 (1/20)', '核對梁底高程、穿梁套管與防水泛水收頭'], { tone: 'violet', size: 12 });
        s += arrow(102, 148, 210, 172, { both: true, tone: 'muted', w: 1.5, head: 6 });
        s += arrow(280, 148, 280, 172, { both: true, tone: 'muted', w: 1.5, head: 6 });
        s += arrow(455, 148, 350, 172, { both: true, tone: 'muted', w: 1.5, head: 6 });
        return svg(560, 228, s);
      })(),
      takeaways: [
        '平面圖看「水平關係與開孔位置」、立面圖看「外部造型與開口高程」、剖面圖看「垂直樓高、降板與大梁深度」。',
        '任何一張圖上的編號（如軸線 B-3、門號 D2、剖面線 A-A）都必須在其他對應圖說上找到完全吻合的尺寸與位置。',
      ],
    },
    {
      concept: '建築圖與結構圖',
      kind: 'chart',
      title: 'RC 住宅標準層（樓高 340 cm）垂直空間高程分配圖',
      caption: '比較建築完成面、RC 結構大梁、機電管線層與室內裝修天花板淨高在垂直方向上的尺寸扣除關係。',
      svg: barChart({
        w: 520,
        h: 255,
        horizontal: true,
        categories: ['樓層總高度 FL-FL', '室內天花板淨高', 'RC 大梁含樓板深', '梁下機電與吊頂層', '地坪粉刷完成面厚'],
        series: [
          { name: '垂直高度佔比 (cm)', tone: 'blue', values: [340, 260, 60, 15, 5] },
        ],
        y: { min: 0, max: 380, ticks: [0, 100, 200, 300, 350], label: '高度尺寸 (cm)' },
        values: true,
      }),
      table: {
        headers: ['垂直分層項目', '建築圖標示符號', '結構圖對應尺寸', '典型工程數值 (cm)'],
        rows: [
          ['樓層高度 (Story Height)', 'FL 至上層 FL', 'SL (結構面) 至上層 SL', '340 cm (住宅) / 400 cm (辦公)'],
          ['地坪裝修層 (Finish Thickness)', 'FL - SL 高差', '結構版面預留降板', '一般室內 5 cm；浴室降板 10–15 cm'],
          ['結構大梁深度 (Beam Depth)', '剖面圖虛線或剖面塊', 'G / B 梁尺寸 (如 40×60)', '梁深 60 cm（含 15 cm 樓板厚）'],
          ['室內淨高 (Clear Height)', 'CH (Ceiling Height)', '梁底高程扣除風管與天花', '340 − 5 − 60 − 15 = 260 cm'],
        ],
      },
      takeaways: [
        '建築圖標示 **FL (裝修完成面)**，結構圖標示 **SL (結構體混凝土面)**，兩者相差約 5 cm 地坪粉光貼磚厚度。',
        '浴室、陽台與玄關為防水及洩水坡度需求，結構版必須「降板 (Depressed Slab)」5–15 cm，審圖時務必核對結構版降板範圍。',
      ],
    },
    {
      concept: '施工圖查核順序',
      kind: 'table',
      title: '施工圖說跨專業套繪查核五大步驟與常見衝突表',
      caption: '工地現場開工前進行建築 (A)、結構 (S) 與機電 (MEP) 圖說清圖 (Drawing Review) 的標準檢核清單。',
      table: {
        headers: ['查核順序', '核對圖說組合', '關鍵查核重點', '現場最常見錯漏案例'],
        rows: [
          ['Step 1 基準核對', '配置圖 vs 結構放樣圖', '建築退縮線、地界線、GL 基準高程與柱心座標', '柱心偏心方向看反，導致外皮退縮不足侵越建築線'],
          ['Step 2 結構套建築', '建築平剖面 vs 結構梁柱配筋', '柱位大小、剪力牆厚度、樓梯踏步數與梁下碰頭淨高', '樓梯平台下方大梁過深，導致垂直淨高不足 190 cm 碰頭'],
          ['Step 3 降板與開口', '門窗表 vs 結構版配筋圖', '浴室陽台降板深度、電梯機坑深度、結構牆留設門窗洞', '結構圖漏標浴室降板或外牆冷氣排水穿牆套管漏留'],
          ['Step 4 機電穿梁', 'CSD 管線圖 vs SEM 結構套管', '汙水幹管洩水坡度、防煙垂壁與穿梁套管位置補強筋', '排煙風管與大梁硬碰撞，被迫調降天花板高度'],
        ],
      },
      takeaways: [
        '樓梯上下行最常發生「碰頭 (Headroom Clash)」：梯段踏步上方至上層大梁底部的垂直淨高法規要求不得小於 **190 cm**。',
        '柱子隨樓層升高縮減斷面時，靠外牆側通常保持齊平（偏心縮內側），避免外牆立面產生突兀折曲。',
      ],
    },
  ],

  'lines-and-lettering': [
    {
      concept: 'CNS 建築與工程圖線條分類',
      kind: 'diagram',
      title: 'CNS 11567 建築製圖粗、中、細線寬與線型幾何圖例',
      caption: '展示粗實線、中實線、細實線、虛線、中心線與割面線之視覺粗細比例 (4:2:1) 與建築平面應用。',
      svg: (() => {
        let s = '';
        const rows: { y: number; name: string; w: number; dash?: 'dash' | 'center' | 'hidden'; tone: 'ink' | 'blue' | 'red' | 'amber' | 'muted'; use: string }[] = [
          { y: 38, name: '粗實線 (0.5–0.7mm)', w: 3.6, tone: 'ink', use: '剖切牆柱輪廓、圖框線' },
          { y: 74, name: '中實線 (0.3–0.35mm)', w: 2.0, tone: 'blue', use: '未剖切可見輪廓、門窗圖例' },
          { y: 110, name: '細實線 (0.13–0.18mm)', w: 1.0, tone: 'muted', use: '尺寸線、引出線、剖面線' },
          { y: 146, name: '虛線 (中線 3:1)', w: 1.8, dash: 'hidden', tone: 'amber', use: '隱藏線、上方雨遮或投影線' },
          { y: 182, name: '一點鏈線 (細線)', w: 1.2, dash: 'center', tone: 'red', use: '柱心基準線、對稱中心線' },
        ];
        for (const r of rows) {
          s += text(18, r.y + 4, r.name, { size: 12.5, weight: 'bold', tone: r.tone });
          s += line(185, r.y, 355, r.y, { tone: r.tone, w: r.w, dash: r.dash });
          s += text(370, r.y + 4, r.use, { size: 12, tone: 'ink' });
        }
        s += text(280, 215, '線條重疊繪製優先序：粗實線 ＞ 虛線 ＞ 中心線 ＞ 尺寸延伸線', { anchor: 'middle', size: 12, weight: 'bold', tone: 'blue' });
        return svg(560, 228, s);
      })(),
      takeaways: [
        'CNS 線寬分為粗、中、細三級，建議公比為 $1:\\sqrt{2}$（如 0.18、0.25、0.35、0.5、0.7 mm），出圖粗中細視覺比約 **4 : 2 : 1**。',
        '中心線（一點鏈線）必須超越輪廓線外 **2–3 mm**，且兩中心線相交處必須以「長畫（實線段）」正交相交，不得交於空隙或點上。',
      ],
    },
    {
      concept: '工程字體與中文字規範',
      kind: 'chart',
      title: 'CNS 3 工程字體（長形、方形、寬形）字寬與字高比例比較圖',
      caption: '設定基準字高 h = 100% 時，比較三種中文字體之字寬比；最後兩項為最小字高，以 mm × 10 顯示（3.5 mm、2.5 mm）。',
      svg: barChart({
        w: 520,
        h: 255,
        categories: ['長形字寬', '方形字寬', '寬形字寬', '中文最小字高', '拉丁最小字高'],
        series: [
          { name: '相對於字高 h 之百分比 (%) 或 10倍mm值', tone: 'blue', values: [75, 100, 133, 35, 25] },
        ],
        y: { min: 0, max: 150, ticks: [0, 25, 50, 75, 100, 125, 150], label: '字寬比 (%) / 10×mm' },
        values: true,
        catSize: 11,
      }),
      table: {
        headers: ['工程字體類別', '高寬比例 (高 : 寬)', '折算字寬比 (W/H)', '工程製圖主要應用場合'],
        rows: [
          ['長形字 (Tall)', '4 : 3', '75% (0.75h)', '建築與土木工程圖最常用（省水平空間、清晰易讀）'],
          ['方形字 (Square)', '1 : 1', '100% (1.00h)', '圖名主標題、重要說明事項'],
          ['寬形字 (Wide)', '3 : 4', '133% (1.33h)', '標題欄 (Title Block) 扁平表格欄位內'],
          ['拉丁字母與數字', '直式 90° / 斜式 75°', '筆畫粗細 d = (1/10–1/14)h', '尺寸標註數字（最小字高 ≥ 2.5 mm，中文字 ≥ 3.5 mm）'],
        ],
      },
      takeaways: [
        '工程圖中文字一律採 **等線體（仿宋或單線黑體）** 正楷書寫，常見有長形 (**高:寬 = 4:3**)、方形 (**1:1**)、寬形 (**3:4**)。',
        '英文與阿拉伯數字分直式與斜式，斜式與水平基準線成 **75°** 傾角；最小字高規定：中文字 **3.5 mm**、拉丁字母與數字 **2.5 mm**。',
      ],
    },
    {
      concept: '線條相交與畫法特別原則',
      kind: 'table',
      title: 'CNS 虛線、中心線與尺寸延伸線相交接頭正確畫法表',
      caption: '彙整手繪與 CAD 製圖最容易扣分的線條交接細節規範，作為技能檢定與統測判讀依據。',
      table: {
        headers: ['線條交接情境', '正確 CNS 畫法規範', '常見錯誤畫法（扣分項）', '幾何辨識原理'],
        rows: [
          ['虛線為實線之延長線', '實線末端與虛線起點之間應「留空隙」', '實線與虛線直接相連無間隙', '若無空隙會誤判實線轉角點位置'],
          ['兩虛線互相正交或成角', '轉角處必須以「短畫與短畫」實接構成 L/T 角', '轉角處留空隙導致輪廓斷開', '確保隱藏物體的頂點座標明確'],
          ['圓之中心線交點', '兩條一點鏈線必須以「長畫段」正交於圓心', '交於點上或交於空白間隙處', '精確定義圓心位置供圓規針尖對位'],
          ['尺寸延伸線與輪廓線', '自輪廓線外留 1 mm 空隙起畫，超出尺寸線 2–3 mm', '延伸線直接黏死在建築牆線上', '避免延伸線與建築物實體輪廓混淆'],
        ],
      },
      takeaways: [
        '口訣：「**虛接實留空，虛交虛實接；中心交長畫，延伸留一毫**」為統測製圖線法必考四大鐵律。',
        '當多種線條在同一位置重疊時，繪出優先順序為：**粗實線 ＞ 虛線 ＞ 中心線 ＞ 折斷線 ＞ 尺寸延伸線**。',
      ],
    },
    {
      concept: '筆觸與軌線：運筆方向、轉筆與線條品質',
      kind: 'diagram',
      title: '運筆方向與轉筆：水平線由左向右、垂直線由下往上',
      caption: '筆桿沿運筆方向傾斜約 60°，一面畫一面緩慢轉動筆桿，筆芯均勻磨耗，整條線的粗細與濃淡才會一致。',
      svg: (() => {
        let s = '';
        s += rect(40, 120, 220, 10, { tone: 'muted', fill: 'muted', soft: true, w: 1.2 });
        s += text(150, 150, '平行尺', { anchor: 'middle', size: 11.5, tone: 'muted' });
        s += line(50, 116, 240, 116, { w: 2.6 });
        s += arrow(60, 96, 230, 96, { tone: 'blue', w: 2, label: '由左向右', labelPos: 'mid', labelOffset: [0, -10] });
        const tip: Pt = [240, 114];
        const back = polar(tip[0], tip[1], 70, 120);
        s += line(tip[0], tip[1], back[0], back[1], { tone: 'amber', w: 6 });
        s += text(back[0] - 4, back[1] - 6, '筆桿約 60°', { tone: 'amber', size: 12, weight: 'bold', anchor: 'end' });
        s += rect(330, 40, 10, 150, { tone: 'muted', fill: 'muted', soft: true, w: 1.2 });
        s += text(335, 206, '三角板', { anchor: 'middle', size: 11.5, tone: 'muted' });
        s += line(346, 180, 346, 50, { w: 2.6 });
        s += arrow(368, 176, 368, 58, { tone: 'blue', w: 2 });
        s += text(380, 118, '由下往上', { tone: 'blue', size: 12, weight: 'bold' });
        s += path(arcPath(470, 110, 26, 200, 520), { tone: 'green', w: 2 });
        s += text(470, 114, '轉筆', { tone: 'green', weight: 'bold', anchor: 'middle', size: 12 });
        s += text(470, 160, '筆芯均勻磨耗', { tone: 'green', size: 11.5, anchor: 'middle' });
        return svg(560, 220, s);
      })(),
      takeaways: [
        '軌線（底稿線）用 2H、H 輕畫，完稿時再以 F、HB 依線型加深。',
        '完稿線條一次畫成，不要來回塗描或先細後粗，以免出現雙線。',
      ],
    },
  ],

  'scale': [
    {
      concept: '比例的定義與 CNS 分類標準',
      kind: 'diagram',
      title: '實尺 (1:1)、縮尺 (1:n) 與倍尺 (n:1) 圖上尺寸與實物尺寸關係圖',
      caption: '無論圖形縮放比例為何，圖面上所標註的「尺寸數字」永遠代表建築物的真實尺寸。',
      svg: (() => {
        let s = '';
        // 縮尺 1:2
        s += rect(35, 70, 70, 50, { tone: 'blue', fill: 'blue', soft: true, w: 1.8 });
        s += dim(35, 130, 105, 130, '100', { offset: 12, tone: 'blue' });
        s += text(70, 42, '縮尺 1 : 2', { anchor: 'middle', weight: 'bold', size: 13.5, tone: 'blue' });
        s += text(70, 165, '圖長 50mm，標註仍寫 100', { anchor: 'middle', size: 11.5, tone: 'muted' });

        // 實尺 1:1
        s += rect(175, 50, 120, 80, { tone: 'green', fill: 'green', soft: true, w: 2 });
        s += dim(175, 140, 295, 140, '100', { offset: 12, tone: 'green' });
        s += text(235, 32, '實尺 (足尺) 1 : 1', { anchor: 'middle', weight: 'bold', size: 13.5, tone: 'green' });
        s += text(235, 175, '圖長 = 實長 = 100mm', { anchor: 'middle', size: 11.5, tone: 'muted' });

        // 倍尺 2:1
        s += rect(350, 35, 175, 105, { tone: 'amber', fill: 'amber', soft: true, w: 2 });
        s += dim(350, 150, 525, 150, '100', { offset: 12, tone: 'amber' });
        s += text(438, 22, '倍尺 (放大尺) 2 : 1', { anchor: 'middle', weight: 'bold', size: 13.5, tone: 'amber' });
        s += text(438, 185, '圖長 200mm，標註仍寫 100', { anchor: 'middle', size: 11.5, tone: 'muted' });

        s += text(280, 214, '比例公式：Scale = 圖上長度 L_d ÷ 實物長度 L_r（標註數字恆為 L_r）', { anchor: 'middle', size: 12.5, weight: 'bold', tone: 'ink' });
        return svg(560, 228, s);
      })(),
      takeaways: [
        '比例定義為 **圖上尺寸 ： 實物尺寸**。建築物體積龐大，99% 採 **縮尺 (1:n)**，如 1/100 代表圖上 1 cm 等於實際 100 cm (1 m)。',
        '重要鐵律：**尺寸標註數值與比例尺無關**！同一個 300 cm 的房間，在 1/50 與 1/100 圖面上標註的數字都必須寫 `300`。',
      ],
    },
    {
      concept: '比例轉換與圖形面積比例換算',
      kind: 'chart',
      title: '不同比例尺下實物 10 m 對應圖長與面積縮放平方倍比較圖',
      caption: '當長度比例變為 k 倍時，圖上面積會以 k²（平方倍）急遽縮放；例如 1/50 圖面積是 1/100 的 4 倍。',
      svg: barChart({
        w: 520,
        h: 255,
        categories: ['1 : 200', '1 : 100', '1 : 50', '1 : 25', '1 : 20'],
        series: [
          { name: '實長10m之圖長 (cm)', tone: 'blue', values: [5, 10, 20, 40, 50] },
          { name: '相對1/200之面積倍率 (倍)', tone: 'amber', values: [1, 4, 16, 64, 100] },
        ],
        y: { min: 0, max: 110, ticks: [0, 20, 40, 60, 80, 100], label: '圖長(cm) / 面積倍率' },
        values: true,
      }),
      table: {
        headers: ['圖面比例尺', '實長 10 m 對應圖長', '相對 1:100 線性倍率 k', '相對 1:100 圖上面積倍率 k²'],
        rows: [
          ['1 : 200', '5 cm (50 mm)', '0.5 倍', '0.25 倍 (1/4)'],
          ['1 : 100', '10 cm (100 mm)', '1.0 倍（基準）', '1.00 倍（基準）'],
          ['1 : 50', '20 cm (200 mm)', '2.0 倍', '4.00 倍'],
          ['1 : 20', '50 cm (500 mm)', '5.0 倍', '25.0 倍'],
        ],
      },
      takeaways: [
        '面積換算平方公式：$\\frac{A_1}{A_2} = \\left(\\frac{\\text{Scale}_1}{\\text{Scale}_2}\\right)^2$。把 1/100 的圖放大影印成 1/50，圖紙面積需變為 **4 倍**（例如 A3 變 A1）。',
        '已知在 1/200 圖上量得基地面積為 $25\\text{ cm}^2$，則實際基地面積 $A = 25 \\times 200^2 = 1,000,000\\text{ cm}^2 = 100\\text{ m}^2$。',
      ],
    },
    {
      concept: '三稜比例尺 (Triangular Scale',
      kind: 'table',
      title: '三稜比例尺六種刻度面與建築圖說常用比例尺選用總表',
      caption: '整理公制三稜比例尺 6 個刻度面的倍數借用技巧，以及各類建築圖說的 CNS 標準出圖比例。',
      table: {
        headers: ['比例尺刻度面', '直接量讀與 10 倍衍生比例', '刻度上「1m」代表實際長', 'CNS 建築圖說標準適用範圍'],
        rows: [
          ['1 / 100', '1/1、1/10、1/100、1/1000', '1 m (100 cm) / 10 m', '建照標準平立剖面圖 (1/100)、都市計畫圖 (1/1000)'],
          ['1 / 200', '1/20、1/200、1/2000', '20 cm (於1/20) / 2 m', '基地配置圖 (1/200)、樓梯與門窗構造大樣圖 (1/20)'],
          ['1 / 300', '1/30、1/300', '30 cm (於1/30) / 3 m', '牆身剖面大樣圖 (1/30)、大型配置圖 (1/300)'],
          ['1 / 500 (& 1/400, 1/600)', '1/5、1/50、1/500', '50 cm (於1/50) / 5 m', '室內裝修與施工平面圖 (1/50)、收頭細部詳圖 (1/5)'],
        ],
      },
      takeaways: [
        '三稜比例尺嚴禁當作直尺畫線（會磨損刻度邊緣並沾染墨跡），僅能用於對齊分度與點取距離。',
        '同一張視圖中若水平與垂直採用不同比例（如道路縱斷面圖：水平 1/1000、垂直 1/100），必須分別明確標註。',
      ],
    },
  ],

  'orthographic-projection': [
    {
      concept: '三視圖對齊原理與「長對正',
      kind: 'diagram',
      title: '第三角法三視圖展開與「長對正、高平齊、寬相等」45° 轉折線圖解',
      caption: '台灣 CNS 建築與機械製圖標準採用第三角法：俯視圖在正上方、前視圖在左下、右側視圖在右下，透過 45° 基準線傳遞前後深度 (W)。',
      svg: (() => {
        let s = '';
        // 俯視圖 Top View (左上)
        s += rect(70, 26, 130, 65, { tone: 'blue', fill: 'blue', soft: true, w: 2 });
        s += rect(70, 26, 55, 65, { tone: 'blue', w: 1.6 });
        s += text(135, 60, '俯視圖 Top (L×W)', { anchor: 'middle', size: 12, weight: 'bold', tone: 'blue' });

        // 前視圖 Front View (左下)
        s += polygon([[70, 135], [200, 135], [200, 205], [70, 205], [70, 135]], { tone: 'green', fill: 'green', soft: true, w: 1.5 });
        s += polygon([[70, 135], [125, 135], [125, 170], [200, 170], [200, 205], [70, 205]], { tone: 'green', w: 2.2 });
        s += text(135, 192, '前視圖 Front (L×H)', { anchor: 'middle', size: 12, weight: 'bold', tone: 'green' });

        // 右側視圖 Right View (右下)
        s += rect(265, 135, 65, 70, { tone: 'amber', fill: 'amber', soft: true, w: 2 });
        s += line(265, 170, 330, 170, { tone: 'amber', w: 1.8 });
        s += text(297, 222, '右側視圖 (W×H)', { anchor: 'middle', size: 12, weight: 'bold', tone: 'amber' });

        // 45度轉折線 (右上)
        s += line(240, 20, 340, 120, { tone: 'red', w: 1.8 });
        s += text(312, 46, '45° 深度轉折線', { tone: 'red', size: 12, weight: 'bold' });

        // 投影對齊線
        s += line(70, 91, 70, 135, { tone: 'muted', dash: 'dot', w: 1.2 });
        s += line(125, 91, 125, 135, { tone: 'muted', dash: 'dot', w: 1.2 });
        s += line(200, 91, 200, 135, { tone: 'muted', dash: 'dot', w: 1.2 });
        s += line(200, 135, 265, 135, { tone: 'muted', dash: 'dot', w: 1.2 });
        s += line(200, 170, 265, 170, { tone: 'muted', dash: 'dot', w: 1.2 });
        s += line(200, 205, 265, 205, { tone: 'muted', dash: 'dot', w: 1.2 });
        // 寬相等轉折
        s += line(200, 26, 265, 26, { tone: 'red', dash: 'dash', w: 1.2 });
        s += line(265, 26, 265, 135, { tone: 'red', dash: 'dash', w: 1.2 });
        s += line(200, 91, 330, 91, { tone: 'red', dash: 'dash', w: 1.2 });
        s += line(330, 91, 330, 135, { tone: 'red', dash: 'dash', w: 1.2 });

        // 右側口訣框
        s += box(370, 68, 172, 122, ['三視圖對齊三鐵律', '1. 前↔俯：長對正 (L)', '2. 前↔右：高平齊 (H)', '3. 俯↔右：寬相等 (W)'], { tone: 'blue', size: 12.5 });
        return svg(560, 234, s);
      })(),
      takeaways: [
        '前視圖與俯視圖上下對齊，共享水平方向的 **長度 (L)**，稱為「**長對正**」。',
        '前視圖與右側視圖左右對齊，共享垂直方向的 **高度 (H)**，稱為「**高平齊**」。',
        '俯視圖的上下高度與右側視圖的左右寬度皆代表物體的前後 **深度 (W)**，藉由 45° 轉折線對映，稱為「**寬相等**」。',
      ],
    },
    {
      concept: '正投影基本幾何原理',
      kind: 'chart',
      title: '單面投影、三視圖與六視圖對物體空間自由度約束能力比較圖',
      caption: '單一正投影視圖僅能確定 2 個維度（缺少深度資訊），至少需要 2–3 個正交視圖互證才能唯一決定三維形體。',
      svg: barChart({
        w: 520,
        h: 255,
        categories: ['單一視圖 (前視)', '雙視圖 (前+俯)', '標準三視圖', '三視圖+輔助視圖'],
        series: [
          { name: '可讀取座標維度數', tone: 'blue', values: [2, 3, 3, 3] },
          { name: '複雜斜面與內部唯一性 (%)', tone: 'green', values: [35, 75, 95, 100] },
        ],
        y: { min: 0, max: 110, ticks: [0, 25, 50, 75, 100], label: '幾何資訊完整度 (%)' },
        values: true,
      }),
      table: {
        headers: ['空間直線或平面姿態', '對水平面 H 關係', '對直立面 V 關係', '正投影三視圖呈現特徵'],
        rows: [
          ['正垂線 (Normal Line)', '平行 (// H)', '垂直 (⊥ V)', '於前視圖積聚為「一點」，於俯、側視圖現「實長 (TL)」'],
          ['鉛垂線 (Vertical Line)', '垂直 (⊥ H)', '平行 (// V)', '於俯視圖積聚為「一點」，於前、側視圖現「實長 (TL)」'],
          ['正垂面 (Normal Plane)', '垂直 (⊥ H)', '平行 (// V)', '於前視圖呈現「真形實大 (TS)」，於俯、側視圖縮為一直線'],
          ['單斜面 (Inclined Plane)', '傾斜 (∠ H)', '垂直 (⊥ V)', '於前視圖積聚為斜直線，俯、側視圖皆為「縮小變形面」'],
        ],
      },
      takeaways: [
        '正投影之投射線彼此平行且垂直於投影面；當平面平行於投影面時呈現 **真形實大 (True Shape)**，垂直於投影面時 **積聚為一直線 (Edge View)**。',
        '選擇「前視圖 (主視圖)」的三大原則：最能表現物體特徵形狀、自然穩定安放位置、虛線最少且長邊朝向正前方。',
      ],
    },
    {
      concept: '第一角法與第三角法嚴格比較',
      kind: 'table',
      title: '第一角法 (First Angle) 與第三角法 (Third Angle) 國際規範對照表',
      caption: '比較兩種正投影法在投影箱空間象限、視點與投影面相對位置、展開配置及 CNS 標準符號之差異。',
      table: {
        headers: ['比較項目', '第三角法 (Third Angle Projection)', '第一角法 (First Angle Projection)', '統測與檢定判別重點'],
        rows: [
          ['空間順序關係', '觀察者 → 透明投影面 → 物體', '觀察者 → 物體 → 不透明投影面', '第三角法把投影面當作透明玻璃箱直接描繪'],
          ['視圖配置位置', '俯視在「上」、右側視在「右」', '俯視在「下」、右側視在「左」', '第三角法符合直覺方位；第一角法上下左右相反'],
          ['CNS 標準符號', '左側小圓端（截頭圓錐前視）＋右側同心圓', '左側截頭圓錐前視（大端在左）＋右側同心圓', '記法：第三角法「小圓對圓（同心圓在右、錐頂朝同心圓外）」'],
          ['主要採用地區', '台灣 (CNS)、美國 (ANSI)、日本 (JIS)', '歐洲各國 (ISO E)、DIN、中國大陸 (GB)', '建築立面圖、平面圖之上下對照遵循第三角法邏輯'],
        ],
      },
      takeaways: [
        '記憶口訣：**第三角法「人 → 面 → 物」**（透明箱，看哪裡放哪裡）；**第一角法「人 → 物 → 面」**（投影到物體背後牆面，位置相反）。',
        '投影法專屬符號畫在標題欄內：以截頭圓錐體表示，第三角法是「圓在左、梯形在右（小底朝左對著圓）」或「梯形在左（小底朝左）、圓在右」。',
      ],
    },
    {
      concept: '點、直線、平面的投影與象限規定',
      kind: 'diagram',
      title: '四個象限與點的投影（側視示意）',
      caption: '直立投影面 V 與水平投影面 H 相交於基線 GL；空間點 A 位於第一象限，aᵛ 到 GL 的距離為 A 的高度，aʰ 到 GL 的距離為 A 的深度。',
      svg: (() => {
        let s = '';
        const O: Pt = [240, 120];
        s += line(60, O[1], 420, O[1], { w: 2.4 });
        s += line(O[0], 20, O[0], 220, { w: 2.4 });
        s += text(424, O[1] + 4, 'H', { weight: 'bold' });
        s += text(O[0] + 6, 30, 'V', { weight: 'bold' });
        s += text(330, 66, '第一象限 Ⅰ', { anchor: 'middle', tone: 'blue', weight: 'bold' });
        s += text(150, 66, '第二象限 Ⅱ', { anchor: 'middle', tone: 'muted', weight: 'bold' });
        s += text(150, 186, '第三象限 Ⅲ', { anchor: 'middle', tone: 'green', weight: 'bold' });
        s += text(330, 186, '第四象限 Ⅳ', { anchor: 'middle', tone: 'muted', weight: 'bold' });
        const A: Pt = [330, 88];
        s += dot(A[0], A[1], 5, 'red') + text(A[0] + 8, A[1] - 6, 'A', { tone: 'red', weight: 'bold' });
        s += line(A[0], A[1], O[0], A[1], { tone: 'red', w: 1.2, dash: 'dash' }) + dot(O[0], A[1], 4, 'red') + text(O[0] - 6, A[1] + 4, 'aᵛ', { tone: 'red', weight: 'bold', anchor: 'end' });
        s += line(A[0], A[1], A[0], O[1], { tone: 'red', w: 1.2, dash: 'dash' }) + dot(A[0], O[1], 4, 'red') + text(A[0] + 6, O[1] + 16, 'aʰ', { tone: 'red', weight: 'bold' });
        s += text(500, 60, '觀察者', { anchor: 'middle', size: 12, weight: 'bold' });
        s += arrow(500, 72, 440, 100, { tone: 'muted', w: 1.4 });
        s += box(440, 140, 112, 70, ['第一角法', '物在觀察者', '與投影面之間'], { tone: 'blue', size: 11 });
        return svg(560, 226, s);
      })(),
      takeaways: [
        '工程製圖只用第一象限（第一角法）與第三象限（第三角法）；臺灣 CNS 以第三角法為主。',
        '直線或平面平行於投影面時呈實長、實形；垂直時積聚成點或直線；傾斜時縮短或變形。',
      ],
    },
    {
      concept: '側投影、線條優先順序與視圖選擇',
      kind: 'diagram',
      title: '線條重疊時的優先順序：實線 ＞ 虛線 ＞ 中心線 ＞ 細實線',
      caption: '不同線條在視圖中重疊時只畫優先者：可見輪廓線優先於隱藏線，隱藏線優先於中心線，中心線優先於尺寸線與延伸線。',
      svg: (() => {
        let s = '';
        const rows: [string, string, 'solid' | 'dash' | 'center' | 'thin'][] = [
          ['1', '可見輪廓線（粗實線）', 'solid'], ['2', '隱藏線（中虛線）', 'dash'], ['3', '中心線（細鏈線）', 'center'], ['4', '尺寸線、延伸線（細實線）', 'thin'],
        ];
        rows.forEach(([n, label, kind], i) => {
          const y = 44 + i * 42;
          s += box(24, y - 16, 34, 30, n, { tone: i === 0 ? 'red' : 'blue', size: 13 });
          const style = kind === 'solid' ? { w: 3.2 } : kind === 'dash' ? { w: 2, dash: 'hidden' as const } : kind === 'center' ? { w: 1.2, dash: 'center' as const } : { w: 1 };
          s += line(74, y, 214, y, style);
          s += text(226, y + 4, label, { size: 12.5, weight: i === 0 ? 'bold' : 'normal' });
        });
        s += arrow(420, 40, 420, 190, { tone: 'muted', w: 1.4 });
        s += text(432, 116, '優先度遞減', { tone: 'muted', size: 12 });
        s += text(280, 214, '例：虛線與實線重疊畫實線；虛線與中心線重疊畫虛線', { anchor: 'middle', size: 12, tone: 'muted' });
        return svg(560, 226, s);
      })(),
      takeaways: [
        '選前視圖時以最能表現形狀特徵、虛線最少的一面為準。',
        '第三角法的右側視圖放在前視圖右方；第一角法的左側視圖放在前視圖右方，判讀前先看投影符號。',
      ],
    },
    {
      concept: '立體圖：等角圖、斜投影與徒手畫',
      kind: 'diagram',
      title: '等角圖與斜投影：同一個立方體的兩種立體畫法',
      caption: '等角圖三軸互成 120°（寬、深軸與水平成 30°），三面同等表現；斜投影正面為實形，退縮軸常取 45°，騎士式 1:1、櫥櫃式 1:2。',
      svg: (() => {
        let s = '';
        const iso = (x: number, y: number, z: number): Pt => [140 + (x - y) * Math.cos(Math.PI / 6) * 70, 170 - z * 70 + (x + y) * Math.sin(Math.PI / 6) * 70];
        const v = [[0, 0, 0], [1, 0, 0], [1, 1, 0], [0, 1, 0], [0, 0, 1], [1, 0, 1], [1, 1, 1], [0, 1, 1]].map(([x, y, z]) => iso(x, y - 1, z));
        s += polygon([v[4], v[5], v[6], v[7]], { tone: 'blue', fill: 'blue', soft: true, w: 2 });
        s += polygon([v[0], v[1], v[5], v[4]], { tone: 'blue', fill: 'blue', soft: true, w: 2 });
        s += polygon([v[1], v[2], v[6], v[5]], { tone: 'blue', fill: 'blue', soft: true, w: 2 });
        s += text(140, 24, '等角圖（三軸 120°）', { anchor: 'middle', weight: 'bold', tone: 'blue' });
        const ob = (x: number, y: number, z: number, k: number): Pt => [380 + x * 80 + y * k * 80 * Math.cos(Math.PI / 4), 180 - z * 80 - y * k * 80 * Math.sin(Math.PI / 4)];
        const k = 0.5;
        const f = [[0, 0, 0], [1, 0, 0], [1, 0, 1], [0, 0, 1]].map(([x, y, z]) => ob(x, y, z, k));
        const b = [[0, 1, 0], [1, 1, 0], [1, 1, 1], [0, 1, 1]].map(([x, y, z]) => ob(x, y, z, k));
        s += polygon([f[3], f[2], b[2], b[3]], { tone: 'green', fill: 'green', soft: true, w: 2 });
        s += polygon([f[1], b[1], b[2], f[2]], { tone: 'green', fill: 'green', soft: true, w: 2 });
        s += polygon(f, { tone: 'green', fill: 'green', soft: true, w: 2.4 });
        s += text(430, 24, '櫥櫃斜投影（45°、1:2）', { anchor: 'middle', weight: 'bold', tone: 'green' });
        s += text(420, 200, '正面＝實形', { anchor: 'middle', size: 12, tone: 'green' });
        return svg(560, 216, s);
      })(),
      takeaways: [
        '等角圖中與三軸不平行的斜線不能直接量實長，要先定出兩端點再連線。',
        '正面有圓或曲線時用斜投影最方便，因為正面保持實形。',
      ],
    },
  ],

  'sectional-views': [
    {
      concept: '剖面圖目的與割面線',
      kind: 'diagram',
      title: '割面線 (Cutting Plane Line) 符號、視線箭頭與剖面線 45° 規範圖解',
      caption: '左為平面圖上標示之割面線 A-A（兩端與轉角加粗，箭頭指示投影視線方向）；右為剖開後移除前半部所得之 A-A 剖面圖。',
      svg: (() => {
        let s = '';
        // 左：平面圖與割面線
        s += rect(55, 55, 150, 110, { tone: 'ink', w: 2 });
        s += rect(80, 80, 100, 60, { tone: 'ink', w: 1.6 });
        // 割面線 A-A
        s += line(30, 110, 230, 110, { tone: 'red', dash: 'center', w: 1.5 });
        s += line(30, 110, 52, 110, { tone: 'red', w: 3.5 });
        s += line(208, 110, 230, 110, { tone: 'red', w: 3.5 });
        s += arrow(36, 142, 36, 112, { tone: 'red', w: 2.2, head: 8 });
        s += arrow(224, 142, 224, 112, { tone: 'red', w: 2.2, head: 8 });
        s += text(36, 158, 'A', { anchor: 'middle', weight: 'bold', size: 14, tone: 'red' });
        s += text(224, 158, 'A', { anchor: 'middle', weight: 'bold', size: 14, tone: 'red' });
        s += text(130, 34, '平面圖（割面線與視線方向）', { anchor: 'middle', weight: 'bold', size: 13 });

        // 右：A-A 剖面圖
        const rx = 315, ry = 55;
        s += rect(rx, ry, 190, 110, { tone: 'ink', w: 2.2 });
        // 左牆剖切與右牆剖切 + 底部樓板剖切
        s += hatchRect(rx, ry, 28, 110, { spacing: 7, deg: 45, tone: 'blue' });
        s += hatchRect(rx + 162, ry, 28, 110, { spacing: 7, deg: 45, tone: 'blue' });
        s += hatchRect(rx + 28, ry + 84, 134, 26, { spacing: 7, deg: 45, tone: 'blue' });
        s += rect(rx, ry, 28, 110, { tone: 'ink', w: 2.2 });
        s += rect(rx + 162, ry, 28, 110, { tone: 'ink', w: 2.2 });
        s += rect(rx + 28, ry + 84, 134, 26, { tone: 'ink', w: 2.2 });
        s += text(rx + 95, ry + 45, '內部中空空間（未剖及）', { anchor: 'middle', size: 12, tone: 'muted' });
        s += text(rx + 95, 34, 'A-A 全剖面視圖（45° 細實線）', { anchor: 'middle', weight: 'bold', size: 13, tone: 'blue' });
        s += text(280, 206, '被割面線切過之實體斷面畫粗實線輪廓＋45° 等距細實剖面線；已清楚表達處省略虛線', { anchor: 'middle', size: 12, weight: 'bold', tone: 'ink' });
        return svg(560, 224, s);
      })(),
      takeaways: [
        'CNS 割面線採用一點鏈線（或虛線），在 **起迄兩端及轉角處必須畫粗實線**，並以箭頭明確指出觀察者的視線投射方向。',
        '剖面線 (Hatching) 一律使用 **細實線**，與主軸或外框成 **45°** 等距平行排列；相鄰兩不同構件相接時，剖面線應反向 (45° 與 135°) 或改變間距。',
      ],
    },
    {
      concept: '五大剖面視圖類型與適用時機',
      kind: 'chart',
      title: '五大剖面視圖類型之剖切範圍比例與對稱物件適用度比較圖',
      caption: '全剖面切開 100% 寬度、半剖面切開 50%（以中心線分界內外），旋轉與移轉剖面則專門表達肋條或型鋼斷面。',
      svg: barChart({
        w: 520,
        h: 255,
        categories: ['全剖面', '半剖面', '階梯剖面', '旋轉/移轉剖面', '局部剖面'],
        series: [
          { name: '剖切面佔視圖比例 (%)', tone: 'blue', values: [100, 50, 100, 20, 25] },
          { name: '保留外部輪廓比例 (%)', tone: 'green', values: [0, 50, 0, 80, 75] },
        ],
        y: { min: 0, max: 115, ticks: [0, 25, 50, 75, 100], label: '視圖面積佔比 (%)' },
        values: true,
      }),
      table: {
        headers: ['剖面視圖類型', '割面形態與分界線', '剖切範圍 (%)', '典型工程與建築應用場景'],
        rows: [
          ['全剖面 (Full Section)', '單一平面完全切穿物體', '100% 剖面', '建築縱橫向全剖面圖、非對稱機件內部構造'],
          ['半剖面 (Half Section)', '相互垂直兩割面，以「中心線」為分界', '50% 剖面 + 50% 外觀', '左右對稱物件（一半看內部構造、一半看外部造型）'],
          ['階梯剖面 (Offset Section)', '割面轉折呈 90° 階梯狀（剖面圖內不畫轉折線）', '100% 轉折剖面', '建築平面不在同一直線上的門窗、樓梯與管道間一併剖出'],
          ['局部剖面 (Broken-out)', '以不規則徒手「波浪細實線」為分界', '約 15%–30% 局部', '實心梁柱局部剝開展示內部鋼筋或預埋螺栓'],
        ],
      },
      takeaways: [
        '**半剖面圖** 內外兩側的分界線必須是 **中心線（一點鏈線）**，絕不可畫成粗實線！且未剖切之外部半邊通常省略隱藏虛線。',
        '**階梯剖面圖** 雖然割面線在平面圖上有 90° 轉折，但在投影出的剖面視圖中 **絕對不可畫出轉折分界線**。',
      ],
    },
    {
      concept: '剖切時「不剖 (Not Sectioned',
      kind: 'table',
      title: 'CNS 製圖標準「縱向剖切時不予剖切」之構件與建材剖面圖例表',
      caption: '列出縱向切過時按外觀繪製（不畫剖面線）的實心長條構件，以及 CNS 11567 常用建築材料斷面符號。',
      table: {
        headers: ['分類項目', '縱向剖切處理原則', '橫向（垂直軸線）剖切處理', 'CNS 標準圖例與考點說明'],
        rows: [
          ['實心軸、螺栓、螺帽、鉚釘、鍵、銷', '縱向切過一律「不剖」（按全視圖畫外觀）', '橫向切斷時仍應畫 45° 剖面線', '若縱向畫剖面線反而誤導為中空管件'],
          ['肋條 (Rib)、輪輻、耳片 (Lug)', '平行於肋面縱向切過時「不剖」', '垂直於肋厚方向切過時畫剖面線', '避免薄板肋條與厚實本體混淆，高頻統測考題'],
          ['鋼筋混凝土 (RC) 斷面', '45° 雙細斜線＋圓點／三角形碎石符號', '大比例詳圖畫出主筋圓點與箍筋', '1/100 平面圖常用塗黑或 45° 雙斜線代表 RC 柱牆'],
          ['磚牆 vs 木材斷面', '紅磚：45° 單斜線；木材：年輪弧線＋放射裂紋', '橫木紋畫同心年輪，縱木紋畫波浪紋', '石材為虛實相間斜線，地盤土壤為底部三向平行短斜線'],
        ],
      },
      takeaways: [
        '縱向不剖口訣：「**軸、栓、釘、鍵、銷、肋、輻**」，當割面通過其長軸中心線時，保持完整外觀不畫剖面線。',
        '極薄之材料（如鋼板、墊片、防水膜）剖面寬度太窄無法畫 45° 斜線時，CNS 規定得直接 **全部塗黑**，相鄰兩片間留細白縫區隔。',
      ],
    },
  ],

  'architectural-plan': [
    {
      concept: '建築平面圖定義與水平切面高',
      kind: 'diagram',
      title: '建築平面圖水平切面高（FL + 1.2m–1.5m）與門窗剖切符號圖解',
      caption: '左：假想水平割面自地板上方 1.2–1.5m 處切開並向下俯視；右：平面圖上 RC 柱牆（粗線）、窗（四線）與單開門（90° 圓弧）標準畫法。',
      svg: (() => {
        let s = '';
        // 左：垂直剖面顯示切面高
        s += ground(20, 235, 185);
        s += rect(45, 55, 16, 130, { tone: 'ink', fill: 'muted', soft: true, w: 1.8 });
        s += rect(195, 55, 16, 130, { tone: 'ink', fill: 'muted', soft: true, w: 1.8 });
        // 窗戶在左牆 (台度 90, 高 120)
        s += rect(45, 85, 16, 55, { tone: 'blue', fill: 'paper', w: 1.8 });
        // 門在右牆
        s += rect(195, 100, 16, 85, { tone: 'green', fill: 'paper', w: 1.8 });
        // 水平割面線 1.2-1.5m
        s += line(18, 122, 240, 122, { tone: 'red', dash: 'center', w: 2.2 });
        s += arrow(28, 95, 28, 120, { tone: 'red', w: 2, head: 7 });
        s += arrow(228, 95, 228, 120, { tone: 'red', w: 2, head: 7 });
        s += dim(45, 122, 45, 185, '1.2–1.5m', { offset: -55, tone: 'red' });
        s += text(130, 34, '水平假想切面高度 (FL+1.2~1.5m)', { anchor: 'middle', weight: 'bold', size: 12.5, tone: 'red' });

        // 右：對應平面圖符號
        const px = 290, py = 75;
        // 左RC柱 + 牆 + 窗 + 右柱 + 門
        s += rect(px, py, 24, 24, { tone: 'ink', fill: 'ink', w: 1.8 });
        s += rect(px + 24, py + 5, 32, 14, { tone: 'ink', fill: 'muted', soft: true, w: 2 });
        // 窗符號 (四條線)
        s += rect(px + 56, py + 5, 64, 14, { tone: 'blue', fill: 'paper', w: 1.4 });
        s += line(px + 56, py + 10, px + 120, py + 10, { tone: 'blue', w: 1.2 });
        s += line(px + 56, py + 14, px + 120, py + 14, { tone: 'blue', w: 1.2 });
        s += pill(px + 88, py - 12, 'W1', 'blue', 11);
        // 中間牆與柱
        s += rect(px + 120, py, 24, 24, { tone: 'ink', fill: 'ink', w: 1.8 });
        // 單開門 (門扇 + 90度弧)
        s += line(px + 144, py + 12, px + 144, py + 72, { tone: 'green', w: 2.6 });
        s += path(`M${px + 144},${py + 72} A60,60 0 0 0 ${px + 204},${py + 12}`, { tone: 'green', dash: 'dash', w: 1.4 });
        s += rect(px + 204, py + 5, 32, 14, { tone: 'ink', fill: 'muted', soft: true, w: 2 });
        s += pill(px + 175, py - 12, 'D1', 'green', 11);

        s += text(px + 118, 34, '建築平面圖標準圖例 (1/100)', { anchor: 'middle', weight: 'bold', size: 12.5 });
        s += text(px + 118, 178, '■ 實心塗黑：RC 結構柱　═ 四線：推拉窗　◝ 扇弧：單開門', { anchor: 'middle', size: 11.5, tone: 'muted' });
        return svg(560, 224, s);
      })(),
      takeaways: [
        '建築平面圖本質上是「**水平剖面圖**」，切面高度定於樓板面上方 **1.2 m 至 1.5 m** 之間，以便同時切過所有門、窗、牆、柱與樓梯。',
        '切面以下的構造（如窗台、門檻、地坪台階）用 **中實線** 繪出；切面以上的構造（如二樓挑空邊線、高窗、上方雨遮）用 **虛線** 繪出。',
      ],
    },
    {
      concept: '牆體厚度與構造劃分',
      kind: 'chart',
      title: '台灣建築常用牆體構造（RC 牆、紅磚牆、輕隔間）標準厚度比較圖',
      caption: '對比結構外牆、分戶牆與室內輕隔間之粗胚厚度與含雙面水泥砂漿粉刷後的完成面總厚度。',
      svg: barChart({
        w: 520,
        h: 255,
        categories: ['半磚牆 (0.5B)', '一磚牆 (1.0B)', 'RC 內牆/分戶牆', 'RC 外牆/剪力牆', '輕鋼架石膏板牆'],
        series: [
          { name: '結構粗胚厚 (cm)', tone: 'blue', values: [10, 21, 12, 15, 9] },
          { name: '雙面粉刷完成厚 (cm)', tone: 'amber', values: [12, 24, 15, 18, 10] },
        ],
        y: { min: 0, max: 28, ticks: [0, 5, 10, 15, 20, 25], label: '牆體厚度 (cm)' },
        values: true,
        catSize: 11,
      }),
      table: {
        headers: ['牆體構造類型', '標準粗胚尺寸', '完成面製圖慣用厚', '建築法規與施工應用'],
        rows: [
          ['半磚牆 (0.5B 紅磚)', '磚寬 10 cm (CNS 紅磚 21×10×6)', '12 cm', '傳統室內隔間牆（加上雙面 1–1.5cm 粉刷約 12cm）'],
          ['一磚牆 (1.0B 紅磚)', '磚長 21 cm (兩半磚加灰縫 1cm)', '24 cm', '傳統承重牆、外牆或高隔音要求分戶牆'],
          ['RC 鋼筋混凝土內牆', '12 cm (單層配筋)', '12–15 cm', '管道間牆、樓梯間防火牆、一般室內 RC 隔間'],
          ['RC 外牆與結構剪力牆', '15 cm / 18 cm / 20 cm (雙層配筋)', '15 / 18 / 20 cm', '建築外牆防水抗風壓（多用 15cm）、耐震剪力牆（≥18cm）'],
        ],
      },
      takeaways: [
        'CNS 標準普通紅磚尺寸為 **長 21 × 寬 10 × 高 6 cm**（舊制 20×9.5×5.3 cm）；製圖實習畫半磚牆慣取 **12 cm**、一磚牆取 **24 cm**。',
        '1/100 建築平面圖中，RC 外牆常畫 **15 cm**、RC 內牆畫 **12 cm**；結構柱斷面常塗黑或打 45° 雙斜線，與牆體清楚區分。',
      ],
    },
    {
      concept: '建築設備、樓梯與高程標示規範',
      kind: 'table',
      title: '建築平面圖門窗編號、樓梯折斷線與高程符號 CNS 規範表',
      caption: '彙整建築平面圖上必備的門窗符號、樓梯上下行箭頭、坡道斜率及衛浴設備標準圖例。',
      table: {
        headers: ['平面圖例項目', 'CNS 標準代號與畫法', '尺寸與幾何特徵', '檢定與審圖必考重點'],
        rows: [
          ['門窗編號系統', '門：D (Door)、窗：W (Window)、落地門窗：DW', '圓圈或六角形內標註編號，上方標寬×高、下方標台度', '單開門畫 90° 圓弧；雙向彈簧門畫雙邊弧；推拉門窗畫平行錯位線'],
          ['樓梯平面畫法', '標示 UP (上) / DN (下) 箭頭與 45° 折斷線', '一樓平面於約第 6–8 級處畫 45° 折斷線，僅畫出向上梯段', '中間層平面同時具有「往上 (UP)」與「往下 (DN)」兩組箭頭交會於折斷線'],
          ['樓梯級高 R 與級深 T', '住宅級高 R ≤ 20cm、級深 T ≥ 21cm', '舒適公式：2R + T = 60–65 cm；平台寬 ≥ 梯寬', '樓梯踏步總數 = 級高數 R = 踏面數 T + 1（最後一階為上層樓板）'],
          ['平面高程與坡道', 'FL ±0、浴室 −5；坡道畫箭頭指向上坡或下坡', '無障礙坡道斜率 ≤ 1/12（高低差 ≤ 75cm 設平台）', '汽車坡道斜率 ≤ 1/6（曲面段 ≤ 1/8），平面圖必標起點與終點高程'],
        ],
      },
      takeaways: [
        '樓梯重要公式：**級高數 $n_R$ 比踏面數 $n_T$ 多 1**（$n_R = n_T + 1$）。若層高 320 cm、分 16 級 ($R=20\\text{ cm}$)，則平面圖上只需畫 **15 個踏面格**。',
        '平面圖上的方位指北針應統一指向圖面上方（北向朝上）；若因基地狹長旋轉配置，必須明確畫出指北針角度。',
      ],
    },
  ],

  'architectural-elevation': [
    {
      concept: '標高系統與高程符號',
      kind: 'diagram',
      title: '建築立面圖 GL / FL / RFL / PH 高程基準線與高度標示系統圖',
      caption: '展示基地地面線 (GL ±0)、一樓地坪 (1FL +60)、二樓地坪 (2FL +400)、屋頂面 (RFL +740)、女兒牆頂 (PAR) 與屋突 (PH) 的高程三角符號。',
      svg: (() => {
        let s = '';
        // 建築物立面輪廓
        const bx = 90, bw = 200, gy = 195;
        s += ground(30, 340, gy, { depth: 9 });
        // 基座 +60 (18px)
        s += rect(bx, gy - 18, bw, 18, { tone: 'muted', fill: 'muted', soft: true, w: 1.8 });
        // 1F + 2F (各 54px -> 340cm)
        s += rect(bx, gy - 126, bw, 108, { tone: 'ink', fill: 'paper', w: 2.2 });
        s += line(bx, gy - 72, bx + bw, gy - 72, { tone: 'muted', dash: 'dash', w: 1.2 });
        // 女兒牆 PAR (+120cm -> 20px)
        s += rect(bx, gy - 146, bw, 20, { tone: 'ink', fill: 'blue', soft: true, w: 1.8 });
        // 屋突 PH (+300cm -> 40px)
        s += rect(bx + 110, gy - 186, 75, 40, { tone: 'ink', fill: 'amber', soft: true, w: 2 });
        // 窗與門
        s += rect(bx + 25, gy - 60, 45, 32, { tone: 'blue', w: 1.5 });
        s += rect(bx + 120, gy - 66, 48, 48, { tone: 'green', w: 1.5 });
        s += rect(bx + 25, gy - 114, 45, 32, { tone: 'blue', w: 1.5 });
        s += rect(bx + 120, gy - 114, 48, 32, { tone: 'blue', w: 1.5 });

        // 右側高程引線與倒三角符號
        const levels = [
          { y: gy, label: 'GL ±0 (基地地盤線)', tone: 'ink' as const },
          { y: gy - 18, label: '1FL +60', tone: 'blue' as const },
          { y: gy - 72, label: '2FL +400 (層高340)', tone: 'blue' as const },
          { y: gy - 126, label: 'RFL +740 (屋頂樓板)', tone: 'green' as const },
          { y: gy - 146, label: 'PAR +860 (女兒牆頂)', tone: 'amber' as const },
          { y: gy - 186, label: 'PHR +1040 (屋突頂)', tone: 'red' as const },
        ];
        for (const lv of levels) {
          s += line(bx + bw + 6, lv.y, 385, lv.y, { tone: lv.tone, dash: 'center', w: 1.1 });
          s += polygon([[370, lv.y], [364, lv.y - 8], [376, lv.y - 8]], { tone: lv.tone, fill: lv.tone, soft: true, w: 1.3 });
          s += text(392, lv.y + 4, lv.label, { size: 11.5, weight: 'bold', tone: lv.tone });
        }
        return svg(560, 224, s);
      })(),
      takeaways: [
        '立面高程一律以 **基地地面線 GL (Ground Level = ±0)** 為起算基準；一樓室內地坪 **1FL** 通常抬高 30–60 cm 防潮防淹水。',
        '根據《建築技術規則》，**建築物高度 ($H$)** 自基地地面 GL 量至 **屋頂面 (RFL)**；女兒牆高 ≤ 1.5 m 及合於規定面積之屋頂突出物 (PH ≤ 6m 或 9m) 不計入建築物高度。',
      ],
    },
    {
      concept: '建築立面圖功能與命名原則',
      kind: 'chart',
      title: '建築立面圖四級線條深度層次（地面線、主體輪廓、次要構件、材質紋理）筆寬圖',
      caption: '立面圖透過「近粗遠細」的線寬漸層表現前後景深，地面線最粗 (0.7mm)，外牆磁磚分割線最細 (0.13mm)。',
      svg: barChart({
        w: 520,
        h: 255,
        categories: ['基地地面線 GL', '前景突出物輪廓', '主體外牆輪廓線', '門窗框與欄杆線', '外牆磁磚材質紋理'],
        series: [
          { name: '建議出圖線寬 (mm × 100)', tone: 'blue', values: [70, 50, 35, 25, 13] },
        ],
        y: { min: 0, max: 80, ticks: [0, 20, 40, 60, 80], label: '線寬 (0.01 mm)' },
        values: true,
        catSize: 11,
      }),
      table: {
        headers: ['立面圖視覺層次', '建議 CNS 線寬 (mm)', 'AutoCAD 對應色號慣例', '代表建築立面元素'],
        rows: [
          ['第一層：基地地面線 (GL)', '0.70 – 0.80 mm (特粗線)', '白色(7) 或 青色(4) 加粗', '建築物切入大地之底部基準線（鎮住整張圖面視覺重心）'],
          ['第二層：前景突出量體', '0.50 mm (粗實線)', '黃色(2) 或 綠色(3)', '向觀察者凸出的陽台、雨遮、騎樓柱與主屋簷外框'],
          ['第三層：主體外牆與門窗框', '0.25 – 0.35 mm (中實線)', '綠色(3) 或 紅色(1)', '後退之主牆面邊界、門窗外框、欄杆扶手與冷氣格柵'],
          ['第四層：表面材質與開啟線', '0.13 – 0.18 mm (細實線)', '灰色(8/9) 或 紅色(1)', '二丁掛磁磚縫、洗石子分割縫、玻璃反光斜線、門窗開啟虛線'],
        ],
      },
      takeaways: [
        '立面圖命名有兩種方式：**方位命名法**（東向、南向、西向、北向立面圖，最常於建照使用）與 **主次位置命名法**（正立面、背立面、左側、右側立面圖）。',
        '立面圖上門窗扇的 **開啟方向虛線**：鉸鏈（固定轉軸）所在邊為 **兩斜虛線相交之頂點（尖端指向鉸鏈側）**，千萬不可畫反！',
      ],
    },
    {
      concept: '外牆材質圖例與表現法',
      kind: 'table',
      title: '建築立面圖外牆裝修材質圖例、開啟線與斜屋頂標示規範表',
      caption: '整理立面圖上常見之外牆面材文字引註、門窗開啟虛線方向、玻璃光影斜線及屋頂洩水斜率標法。',
      table: {
        headers: ['立面表現項目', 'CNS 圖例畫法', '文字引出標註範例', '製圖實習與檢定注意事項'],
        rows: [
          ['外牆面磚（二丁掛/丁掛）', '局部繪出水平與垂直細實線格網（不必滿鋪全牆）', '貼 6×22.7cm 二丁掛磁磚', '滿鋪細密網格會使出圖糊成黑塊，以角落或帶狀局部示意為佳'],
          ['洗石子 / 斬石子 / 塗料', '細密小圓點群（石子）或留白加引線說明', '外牆抿石子 / 晴雨漆塗料', '立面圖必須配合引出線（細實線＋水平橫線）寫明材質與色系'],
          ['推開窗與推拉窗立面', '推開窗畫 V 形虛線（尖端在鉸鏈）；推拉窗畫水平箭頭', '鋁門窗詳門窗圖 W1', '下懸窗（推射窗）鉸鏈在上，故立面虛線尖端朝上'],
          ['斜屋頂與排水坡度', '立面標示直角三角形斜率符號（如 1 : 3 或 3/10）', '鋪日式文化瓦，坡度 3:10', '屋頂面雨水排水方向與天溝、落水管位置應與屋頂平面圖一致'],
        ],
      },
      takeaways: [
        '立面圖門窗開啟虛線口訣：**「虛線交點（尖角）永遠指在鉸鏈（合頁）那一邊」**——左開窗尖角在左、上懸推射窗尖角在上。',
        '繪製建築立面圖時，水平寬度直接由「平面圖」向下垂直投影對齊，垂直高度則由「剖面圖」水平拉線對齊，可節省一半以上量測時間。',
      ],
    },
  ],

  'dimensioning-and-symbols': [
    {
      concept: '建築平面尺寸標註「三階層原則',
      kind: 'diagram',
      title: '建築平面圖外部尺寸「三階層原則」（細部・軸線・總尺寸）圖解',
      caption: '由牆外往外依序排列：第一層標門窗開口與牆厚（細部）、第二層標柱心跨距（軸線）、第三層標建築物總長（總尺寸），總和必須嚴格相等。',
      svg: (() => {
        let s = '';
        const yWall = 165, x1 = 70, x2 = 270, x3 = 470;
        // 柱心線與編號圓圈
        for (const [i, x] of [[1, x1], [2, x2], [3, x3]] as const) {
          s += line(x, 24, x, yWall + 30, { tone: 'red', dash: 'center', w: 1.2 });
          s += circle(x, 22, 12, { tone: 'red', fill: 'paper', w: 1.6 });
          s += text(x, 22, `X${i}`, { anchor: 'middle', baseline: 'middle', size: 11.5, weight: 'bold', tone: 'red' });
        }
        // 建築外牆與窗戶與RC柱
        s += rect(x1 - 12, yWall - 12, 24, 24, { tone: 'ink', fill: 'ink' });
        s += rect(x2 - 12, yWall - 12, 24, 24, { tone: 'ink', fill: 'ink' });
        s += rect(x3 - 12, yWall - 12, 24, 24, { tone: 'ink', fill: 'ink' });
        s += rect(x1 + 12, yWall - 7, 176, 14, { tone: 'ink', fill: 'muted', soft: true, w: 1.8 });
        s += rect(x2 + 12, yWall - 7, 176, 14, { tone: 'ink', fill: 'muted', soft: true, w: 1.8 });
        // 窗戶開口
        s += rect(x1 + 50, yWall - 7, 100, 14, { tone: 'blue', fill: 'paper', w: 1.5 });
        s += rect(x2 + 50, yWall - 7, 100, 14, { tone: 'blue', fill: 'paper', w: 1.5 });

        // 第一層（最內層）：細部開口尺寸 (y = 128)
        s += dim(x1, yWall, x1 + 50, yWall, '100', { offset: -36, tone: 'green' });
        s += dim(x1 + 50, yWall, x1 + 150, yWall, '200 (窗)', { offset: -36, tone: 'blue' });
        s += dim(x1 + 150, yWall, x2, yWall, '100', { offset: -36, tone: 'green' });
        s += dim(x2, yWall, x2 + 50, yWall, '100', { offset: -36, tone: 'green' });
        s += dim(x2 + 50, yWall, x2 + 150, yWall, '200 (窗)', { offset: -36, tone: 'blue' });
        s += dim(x2 + 150, yWall, x3, yWall, '100', { offset: -36, tone: 'green' });

        // 第二層（中層）：柱心軸線尺寸 (y = 92)
        s += dim(x1, yWall, x2, yWall, '400 (柱跨)', { offset: -72, tone: 'amber' });
        s += dim(x2, yWall, x3, yWall, '400 (柱跨)', { offset: -72, tone: 'amber' });

        // 第三層（最外層）：建築總尺寸 (y = 56)
        s += dim(x1, yWall, x3, yWall, '800 (總柱心長)', { offset: -108, tone: 'red' });

        s += text(280, 214, '由內而外：第一層（細部門窗牆）→ 第二層（柱心跨距）→ 第三層（總長），嚴禁尺寸線相交', { anchor: 'middle', size: 12, weight: 'bold', tone: 'ink' });
        return svg(560, 228, s);
      })(),
      takeaways: [
        '遵循「**小尺寸在內、大尺寸在外**」鐵律，避免較長尺寸的延伸線切穿較短的尺寸線。',
        '三層尺寸必須滿足算術閉合：$\\sum \\text{第一層細部尺寸} = \\sum \\text{第二層軸線跨距} = \\text{第三層總尺寸}$。',
      ],
    },
    {
      concept: 'CNS 11567 尺寸標註四大要素',
      kind: 'chart',
      title: 'CNS 尺寸標註幾何規範（延伸線空隙、突出量、尺寸線間距）標準數值圖',
      caption: '定量化呈現手繪與 CAD 標註樣式 (DIMSTYLE) 中延伸線、尺寸線與字高的標準毫米數值。',
      svg: barChart({
        w: 520,
        h: 255,
        categories: ['延伸線離圖空隙', '延伸線超出尺寸線', '最小數字字高', '首層尺寸離輪廓線', '平行尺寸線間距'],
        series: [
          { name: 'CNS 標準數值 (mm)', tone: 'blue', values: [1.0, 2.5, 2.5, 10.0, 8.0] },
        ],
        y: { min: 0, max: 12, ticks: [0, 2, 4, 6, 8, 10, 12], label: '圖紙實際長度 (mm)' },
        values: true,
        catSize: 11,
      }),
      table: {
        headers: ['尺寸標註四大要素', 'CNS 線型與畫法規範', '標準幾何參數 (mm)', 'AutoCAD DIMSTYLE 對應變數'],
        rows: [
          ['1. 尺寸界線（延伸線）', '細實線，由輪廓端點引出', '離輪廓空隙 1 mm；超出尺寸線 2–3 mm', 'DIMEXO = 1.0, DIMEXE = 2.5'],
          ['2. 尺寸線 (Dimension Line)', '細實線，平行於欲標註之線段', '首層距輪廓 8–10 mm；層間距 6–8 mm', 'DIMDLI = 8.0（基線標註間距）'],
          ['3. 終端符號（箭頭／斜線）', '建築圖愛用 45° 短斜線或圓點；機械用箭頭', '箭頭長約 3 mm（長寬比 3:1）', 'DIMBLK = Architectural tick (_ARCHTICK)'],
          ['4. 尺寸數字 (Dimension Text)', '寫於尺寸線上方中央、距線約 1 mm', '水平字朝上、垂直字朝左（字高 ≥ 2.5mm）', 'DIMTXT = 2.5–3.0, DIMTAD = 1 (置於線上方)'],
        ],
      },
      takeaways: [
        '尺寸數字書寫方向：水平尺寸線數字寫在 **上方朝上**；垂直尺寸線數字寫在 **左側且字頭朝左**（由圖面右側觀看時為正立）。',
        '建築製圖終端符號除標準實心箭頭外，極常採用 **45° 粗短斜線 (Architectural Tick)** 或小實心圓點，同一張圖必須統一。',
      ],
    },
    {
      concept: '常見製圖符號與前綴代號總表',
      kind: 'table',
      title: 'CNS 工程與建築製圖必背尺寸前綴符號與意義總表',
      caption: '統測專二與製圖實習最高頻考出的 8 大尺寸前綴代號（直徑、半徑、球面、正方形、板厚、斜度、錐度、弧長）。',
      table: {
        headers: ['類別', '符號與標註範例', '幾何意義與中文名稱', '標註位置與省略規則'],
        rows: [
          ['圓與球面', '⌀50、R25、S⌀40、SR20', '⌀：直徑、R：半徑、S：球面 (Sphere)', '半圓或小於半圓標 R（必過圓心）；大於半圓標 ⌀；視圖已顯圓形時 ⌀ 仍常保留'],
          ['正方與板厚', '□40、t=5 (或 t5)', '□：正方形邊長、t：薄板厚度 (Thickness)', '標註 □40 即可在單一視圖表達 40×40 正方柱；標 t5 可免畫側視圖'],
          ['弧長與倒角', '︵120 (上弧號)、C2', '︵：弧長 (Arc Length)、C：45° 倒角', 'C2 專指「45° × 2 mm」之倒角；非 45° 倒角須分別標註角度與長度'],
          ['斜度與錐度', '⦣ 1:10、⊳ 1:5', '⦣：單邊斜度 (Slope)、⊳：雙邊對稱錐度 (Taper)', '符號尖端方向必須與物件「變小（傾斜／收縮）」之方向完全一致'],
        ],
      },
      takeaways: [
        '半徑符號 **$R$** 絕對不可省略，且尺寸線只有指向圓弧的一端有箭頭；直徑 **⌀** 則兩端皆有箭頭。',
        '倒角符號 **$C$**（Chamfer）僅限用於 **45°** 倒角（如 `C3` = $3 \times 45^\circ$）；若為 $30^\circ$ 倒角則必須明確標出長度與 $30^\circ$ 角度。',
      ],
    },
    {
      concept: '主要工業國家尺度標註差異與註解的重要性',
      kind: 'diagram',
      title: '尺寸數字方向：對齊式（CNS）與單向式（美國常用）',
      caption: '對齊式的數字沿尺寸線方向書寫，垂直尺寸由右方閱讀；單向式的數字一律水平書寫，在尺寸線中斷處填寫。',
      svg: (() => {
        let s = '';
        s += text(140, 24, '對齊式（CNS）', { anchor: 'middle', weight: 'bold', tone: 'blue' });
        s += rect(70, 60, 140, 90, { w: 2.4 });
        s += dim(70, 150, 210, 150, '3600', { offset: 22 });
        s += dim(210, 150, 210, 60, '2400', { offset: 22 });
        s += text(420, 24, '單向式（ANSI 常用）', { anchor: 'middle', weight: 'bold', tone: 'green' });
        s += rect(350, 60, 140, 90, { w: 2.4 });
        s += arrow(350, 172, 490, 172, { tone: 'muted', w: 1, head: 7, both: true });
        s += line(350, 154, 350, 178, { tone: 'muted', w: 0.9 }) + line(490, 154, 490, 178, { tone: 'muted', w: 0.9 });
        s += rect(400, 164, 40, 16, { tone: 'paper', fill: 'paper', w: 0 }) + text(420, 176, '12′-0″', { anchor: 'middle', size: 12 });
        s += arrow(512, 150, 512, 60, { tone: 'muted', w: 1, head: 7, both: true });
        s += line(494, 150, 518, 150, { tone: 'muted', w: 0.9 }) + line(494, 60, 518, 60, { tone: 'muted', w: 0.9 });
        s += rect(492, 97, 40, 16, { tone: 'paper', fill: 'paper', w: 0 }) + text(512, 109, '8′-0″', { anchor: 'middle', size: 12 });
        s += text(280, 210, '臺灣圖面未註單位時預設為 mm；閱讀美國圖說先確認是否為英制', { anchor: 'middle', size: 12, tone: 'muted' });
        return svg(560, 224, s);
      })(),
      takeaways: [
        'CNS 採對齊式且以 mm 為單位不註記；美國建築圖常用呎吋並採單向式。',
        '尺寸無法表達的材料、表面處理、施工方法要用文字註解補足。',
      ],
    },
  ],

  'cad-basics': [
    {
      concept: 'AutoCAD 座標系統與三種點輸入',
      kind: 'diagram',
      title: 'AutoCAD 絕對座標、相對直角座標 (@Δx,Δy) 與相對極座標 (@L<θ) 圖解',
      caption: '由起點 P1(20,10) 繪至終點 P2(60,40)，比較三種指令列座標輸入語法與逆時針角度慣例。',
      svg: (() => {
        const f = frame([0, 80], [0, 55], { left: 55, top: 24, width: 280, height: 170 });
        let s = axes(f, { xTicks: [0, 20, 40, 60, 80], yTicks: [0, 10, 20, 30, 40, 50], xLabel: 'X', yLabel: 'Y', grid: true });
        const p1 = f.P(20, 10);
        const p2 = f.P(60, 40);
        const px = f.P(60, 10);
        s += line(p1[0], p1[1], px[0], px[1], { tone: 'amber', dash: 'dash', w: 1.5 });
        s += line(px[0], px[1], p2[0], p2[1], { tone: 'amber', dash: 'dash', w: 1.5 });
        s += arrow(p1[0], p1[1], p2[0], p2[1], { tone: 'blue', w: 2.6, head: 9 });
        s += angle(p1[0], p1[1], 42, 0, 36.87, 'θ=37°', { tone: 'red', labelR: 58 });
        s += dot(p1[0], p1[1], 4.2, 'ink') + text(p1[0] - 6, p1[1] - 8, 'P1(20, 10)', { anchor: 'end', weight: 'bold', size: 12 });
        s += dot(p2[0], p2[1], 4.2, 'red') + text(p2[0] + 6, p2[1] - 8, 'P2(60, 40)', { weight: 'bold', size: 12, tone: 'red' });
        s += text((p1[0] + px[0]) / 2, px[1] + 16, 'Δx = +40', { anchor: 'middle', size: 11.5, tone: 'amber', weight: 'bold' });
        s += text(px[0] + 8, (px[1] + p2[1]) / 2, 'Δy = +30', { size: 11.5, tone: 'amber', weight: 'bold' });
        s += text((p1[0] + p2[0]) / 2 - 12, (p1[1] + p2[1]) / 2 - 10, 'L = 50', { anchor: 'end', size: 12, tone: 'blue', weight: 'bold' });

        // 右側語法對照卡
        s += box(358, 28, 184, 50, ['1. 絕對直角座標', '輸入：60,40（以原點0,0起算）'], { tone: 'ink', size: 11.5 });
        s += box(358, 88, 184, 50, ['2. 相對直角座標 (@)', '輸入：@40,30（自前一點位移）'], { tone: 'amber', size: 11.5 });
        s += box(358, 148, 184, 50, ['3. 相對極座標 (@L<θ)', '輸入：@50<37（長50、角度37°）'], { tone: 'blue', size: 11.5 });
        return svg(560, 226, s);
      })(),
      takeaways: [
        'AutoCAD 中前綴符號 **`@`** 代表「相對於最後一個輸入點 (Last Point)」；角度符號 **`<`** 以正東向 (+X) 為 0°，**逆時針為正、順時針為負**。',
        '3-4-5 直角三角形範例：由 P1(20,10) 到 P2(60,40)，相對直角座標為 **`@40,30`**，相對極座標為 **`@50<37`**。',
      ],
    },
    {
      concept: 'CNS 11567 建築出圖線寬規範與技能檢定',
      kind: 'chart',
      title: '建築製圖應用丙級／乙級檢定 180 分鐘標準配速與出圖線寬分配圖',
      caption: '呈現技能檢定各階段建議耗時（分鐘）與 AutoCAD CTB 顏色對應出圖筆寬 (mm×100) 設定。',
      svg: barChart({
        w: 520,
        h: 255,
        categories: ['環境設定與圖框', '柱心網格與牆柱', '門窗樓梯與細部', '尺寸文字與符號', '視埠比例與出圖檢查'],
        series: [
          { name: '建議配速時間 (分鐘)', tone: 'blue', values: [15, 50, 55, 40, 20] },
        ],
        y: { min: 0, max: 65, ticks: [0, 15, 30, 45, 60], label: '分配時間 (min)' },
        values: true,
        catSize: 11,
      }),
      table: {
        headers: ['AutoCAD 顏色索引 (ACI)', 'CTB 標準出圖筆寬', '建議圖層名稱 (AIA/CNS)', '建築圖面對應元素'],
        rows: [
          ['1 號色：紅色 (Red)', '0.13 – 0.18 mm (細線)', 'A-DIMS / A-HATC', '尺寸標註線、引出線、剖面填充線 (HATCH)、材質紋理'],
          ['2 號色：黃色 (Yellow)', '0.25 – 0.30 mm (中線)', 'A-DOOR / A-GLAZ / A-FURN', '門窗圖塊、樓梯踏步、陽台欄杆、固定家具設備'],
          ['3 號色 / 4 號色 (綠/青)', '0.35 – 0.50 mm (粗線)', 'A-WALL / S-COLS / TEXT', '剖切之 RC 牆體、結構柱外框、工程文字與標題'],
          ['8 號色 / 1 號虛線', '0.15 mm (細點鏈線)', 'S-GRID (Centerline)', '結構柱心基準線（Linetype 設為 CENTER）'],
        ],
      },
      takeaways: [
        '圖層管理核心原則為 **ByLayer（隨層）**：所有圖元的顏色、線型、線寬一律由所屬圖層控制，切勿個別強改屬性，以便一鍵批次開關與凍結。',
        '模型空間 (Model) 一律以 **1 : 1 真實尺寸** 繪圖；出圖時切換至配置圖紙空間 (Layout)，開視埠 (Viewport) 設定 `1/100xp` 或 `1/50xp` 鎖定比例出圖。',
      ],
    },
    {
      concept: 'AutoCAD 最常用 20 大快捷指令',
      kind: 'table',
      title: 'AutoCAD 繪圖、修改、鎖點與功能鍵 (F1–F8) 核心指令速查表',
      caption: '統測與建築製圖電繪檢定必考之指令縮寫（Alias）與狀態列功能鍵對照表。',
      table: {
        headers: ['指令分類', '快捷鍵 / 功能鍵', '英文全名', '建築製圖實戰核心用途'],
        rows: [
          ['繪圖指令 (Draw)', 'L / PL / REC / C / A / H', 'Line / Pline / Rectang / Circle / Arc / Hatch', 'PL 聚合線為單一連續物件（可求面積周長）；H 為剖面線填充'],
          ['修改指令 (Modify)', 'O / TR / EX / CO / MI / F', 'Offset / Trim / Extend / Copy / Mirror / Fillet', 'O 偏移複製牆心線成雙線牆；F (R=0) 可瞬間將兩相交牆線修剪成直角'],
          ['進階修改與陣列', 'M / RO / SC / S / AR / X', 'Move / Rotate / Scale / Stretch / Array / Explode', 'S 拉伸（必須用由右至左「框選 Crossing」才能拉動端點）；X 炸開圖塊'],
          ['狀態列功能鍵', 'F3 / F7 / F8 / F10', 'Osnap(F3) / Grid(F7) / Ortho(F8) / Polar(F10)', 'F3 物件鎖點（端點、中點、垂足）；F8 正交模式（鎖定水平與垂直畫線）'],
        ],
      },
      takeaways: [
        'AutoCAD 選取物件的黃金差別：**由左往右拉實線框 (Window)** 必須「完全包住」才選中；**由右往左拉虛線框 (Crossing)** 只要「碰到邊緣」即選中（`STRETCH` 指令必用框選）。',
        '**`FILLET` (倒圓角 `F`)** 當半徑設為 `R = 0` 時，是建築平面圖轉角收頭最快的神器，可同時完成修剪 (`TRIM`) 與延伸 (`EXTEND`)。',
      ],
    },
  ],

  'drafting-instruments': [
    {
      concept: '製圖板、平行尺與張紙固定規範',
      kind: 'diagram',
      title: '製圖桌平行尺、30°/60° 與 45° 三角板組合繪製 15° 倍數斜線圖解',
      caption: '平行尺提供精確水平基準線，搭配一組三角板（45°×45° 與 30°×60°）即可畫出垂直線與所有 15° 倍數傾角（15°、30°、45°、60°、75°、105°）。',
      svg: (() => {
        let s = '';
        // 製圖板與圖紙
        s += rect(20, 18, 520, 195, { tone: 'muted', fill: 'paper', w: 1.8, rx: 4 });
        // 平行尺水平刃口
        s += rect(20, 172, 520, 22, { tone: 'ink', fill: 'blue', soft: true, w: 2 });
        s += text(280, 183, '平行尺 / 丁字尺水平工作邊（由左向右畫水平線）', { anchor: 'middle', baseline: 'middle', size: 12, weight: 'bold', tone: 'blue' });

        // 左：單塊三角板畫垂直線（由下往上）
        s += polygon([[75, 172], [165, 172], [75, 52]], { tone: 'green', fill: 'green', soft: true, w: 2 });
        s += arrow(64, 165, 64, 58, { tone: 'red', w: 2.2, head: 8 });
        s += text(60, 42, '垂直線：由下往上畫', { size: 11.5, weight: 'bold', tone: 'red' });
        s += rightAngle(75, 172, 0, 90, 11, 'green');
        s += text(105, 155, '60°', { size: 11, tone: 'green', weight: 'bold' });

        // 右：兩塊三角板組合 75° 與 15°
        s += polygon([[260, 172], [380, 172], [380, 52]], { tone: 'amber', fill: 'amber', soft: true, w: 1.8 });
        s += text(345, 155, '45°', { size: 11.5, tone: 'amber', weight: 'bold' });
        // 在 45° 斜邊疊上 30-60 三角板 -> 45+30 = 75° 或 45-30 = 15°
        const pA: Pt = [290, 142];
        const pB: Pt = [360, 72];
        const pC: Pt = [265, 92];
        s += polygon([pA, pB, pC], { tone: 'violet', fill: 'violet', soft: true, w: 1.8 });
        s += text(305, 108, '30°', { size: 11.5, tone: 'violet', weight: 'bold' });
        s += box(400, 50, 126, 105, ['三角板組合角度', '• 45° − 30° = 15°', '• 30°, 45°, 60°', '• 45° + 30° = 75°', '• 45° + 60° = 105°'], { tone: 'blue', size: 11.5 });
        return svg(560, 226, s);
      })(),
      takeaways: [
        '畫線方向標準（右撇子）：水平線 **由左向右** 畫；垂直線貼緊三角板左側邊 **由下往上** 畫，同時將鉛筆朝移動方向傾斜約 **60°** 並均勻旋轉筆桿。',
        '一副三角板（$45^\\circ$ 與 $30^\\circ/60^\\circ$）單獨或疊合平行尺，可精確繪出所有 **$15^\\circ$ 的整數倍角度**（$15^\\circ, 30^\\circ, 45^\\circ, 60^\\circ, 75^\\circ, 90^\\circ, 105^\\circ\dots$）。',
      ],
    },
    {
      concept: '工程鉛筆硬度階級與選用原則',
      kind: 'table',
      title: '工程鉛筆硬度分級與製圖用途對照',
      caption: '由硬到軟整理鉛筆等級、筆芯特徵與製圖用途。',
      table: {
        "headers": [
          "鉛筆等級分類",
          "代表型號（由硬至軟）",
          "筆芯成分特徵",
          "工程與建築製圖標準用途"
        ],
        "rows": [
          [
            "硬質鉛筆 (Hard)",
            "9H, 8H, 7H, 6H, 5H, 4H",
            "黏土含量高、筆跡極淡但易刮傷紙面",
            "精密金屬刻線、石版圖或極高精度幾何作圖"
          ],
          [
            "製圖底稿筆 (Medium-Hard)",
            "3H, 2H",
            "硬度適中、線條細緻不易暈染",
            "繪製輕淡底稿線、基準格線、尺寸延伸線與剖面線"
          ],
          [
            "製圖完稿筆 (Medium)",
            "H, F, HB",
            "軟硬均衡（F 介於 H 與 HB 之間）",
            "完稿加深中實線、粗實線與書寫工程字體（HB/F 最常用）"
          ],
          [
            "軟質黑鉛筆 (Soft)",
            "B, 2B, 3B, 4B, 5B, 6B",
            "石墨含量高、色澤濃黑易塗抹",
            "建築剖面重線加深 (B)、建築表現法徒手草圖與陰影素描"
          ]
        ]
      },
      takeaways: [
        '鉛筆等級完整排序（由硬到軟）：**9H → … → 2H → H → F → HB → B → 2B → … → 6B**（最常考 **F 夾在 H 與 HB 之間**，切勿排錯！）。',
        '打底稿時應選用 **2H 或 3H** 輕畫（不可用力刻入圖紙纖維，否則擦除後仍留凹痕）；完稿加深與寫工程字則選用 **F、HB 或 B**。',
      ],
    },
    {
      concept: '圓規、分規與三稜比例尺使用原則',
      kind: 'table',
      title: '圓規、分規、針筆與固定圖紙之標準操作與維護規範表',
      caption: '彙整手繪製圖儀器在考場與製圖室的標準操作手法與保養重點。',
      table: {
        headers: ['製圖儀器名稱', '核心構造與筆芯設定', '正確操作步驟規範', '使用禁忌與維護保養'],
        rows: [
          ['圓規 (Compass)', '針腳（有肩針端）＋鉛筆腳（削成斜劈形）', '鉛筆芯應比完稿直線筆「軟一級」（如直線用 HB，圓規用 B），針尖略長於筆芯 0.5mm', '畫大圓時應使針腳與筆腳雙膝關節彎曲垂直於紙面'],
          ['分規 (Dividers)', '雙腳皆為尖銳鋼針（無筆芯）', '專門用於「量取轉移距離」與「等分線段／圓弧」（左右交替旋轉前進）', '嚴禁用分規在比例尺上用力刺孔，以免破壞刻度精準度'],
          ['針筆 (Technical Pen)', '不鏽鋼管針頭（0.13, 0.18, 0.25, 0.35, 0.5, 0.7mm）', '上墨時筆身須保持與紙面垂直 (85°–90°)，貼緊尺邊斜面（有凹槽側朝下）', '凹槽側朝下可防止毛細現象滲墨；久不用須洗清墨管防乾涸堵塞'],
          ['張貼固定圖紙', '製圖膠帶（低黏性紙膠帶）', '將圖紙底邊對齊平行尺上緣，按「左上→右下→右上→左下」對角順序貼妥四角', '嚴禁使用高黏性透明膠帶（撕除時會撕破道林紙或描圖紙表層）'],
        ],
      },
      takeaways: [
        '圓規畫圓因為無法像直尺反覆來回用力描繪，故 **圓規裝填的筆芯硬度應比畫直線的鉛筆軟一級**，才能使圓弧與相切直線黑度一致。',
        '使用針筆或代針筆畫墨線時，三角板或直尺必須將 **帶有退墨槽（斜削邊）的一面朝下接觸紙面**，否則墨水會沿尺邊毛細滲入紙面造成暈開。',
      ],
    },
    {
      concept: '曲線板、曲線規與家具模板的使用',
      kind: 'diagram',
      title: '曲線板描線要領：每段吻合三點以上，只描中段並重疊銜接',
      caption: '先把各點徒手輕輕連成順暢曲線，再分段找曲線板上吻合的部分；每段只描中間，下一段與上一段重疊，接頭才不會出現折角。',
      svg: (() => {
        let s = '';
        const pts: Pt[] = [[40, 170], [100, 110], [170, 86], [240, 100], [300, 140], [370, 150], [440, 118], [510, 70]];
        s += polyline(pts, { tone: 'muted', w: 1, dash: 'dot' });
        pts.forEach(([x, y], i) => { s += dot(x, y, 4) + text(x, y + 18, `${i + 1}`, { anchor: 'middle', size: 11, tone: 'muted' }); });
        s += path('M40,170 C70,130 100,110 135,96 S205,84 240,100', { tone: 'blue', w: 3 });
        s += path('M170,86 C205,88 230,96 260,112 S320,150 370,150', { tone: 'green', w: 3 });
        s += path('M300,140 C335,152 360,152 405,138 S470,100 510,70', { tone: 'red', w: 3 });
        s += text(100, 64, '第 1 段：點 1–4', { tone: 'blue', size: 12, weight: 'bold', anchor: 'middle' });
        s += text(270, 186, '第 2 段：點 3–6（與第 1 段重疊）', { tone: 'green', size: 12, weight: 'bold', anchor: 'middle' });
        s += text(450, 48, '第 3 段：點 5–8', { tone: 'red', size: 12, weight: 'bold', anchor: 'middle' });
        s += text(280, 210, '重疊區只沿用已畫好的線，不重複加粗', { anchor: 'middle', size: 12, tone: 'muted' });
        return svg(560, 224, s);
      })(),
      takeaways: [
        '曲線板適合不規則曲線；長而平順的曲線改用可彎曲的曲線規。',
        '家具、衛浴模板要先確認比例（1/50、1/100），筆桿保持垂直貼邊。',
      ],
    },
  ],

  'geometric-constructions': [
    {
      concept: '正多邊形（正五、六、八邊形）畫法',
      kind: 'diagram',
      title: '圓內接正六邊形（R 等分法）與黃金分割矩形 (1 : 1.618) 幾何作圖法',
      caption: '左：以圓半徑 R 為開口，在圓周上連續截取 6 等分即得正六邊形；右：由正方形底邊中點 M 為圓心畫弧至對角頂點，展開即得黃金矩形。',
      svg: (() => {
        let s = '';
        // 左：圓內接正六邊形
        const cx = 125, cy = 115, r = 68;
        s += circle(cx, cy, r, { tone: 'muted', dash: 'dash', w: 1.4 });
        const hexPts: Pt[] = Array.from({ length: 6 }, (_, i) => polar(cx, cy, r, i * 60));
        s += polygon(hexPts, { tone: 'blue', fill: 'blue', soft: true, w: 2.2 });
        for (const p of hexPts) s += dot(p[0], p[1], 3.5, 'blue');
        s += dot(cx, cy, 3.5, 'ink');
        s += line(cx, cy, hexPts[0][0], hexPts[0][1], { tone: 'red', w: 1.6 });
        s += line(cx, cy, hexPts[1][0], hexPts[1][1], { tone: 'red', w: 1.6 });
        s += text(cx + 28, cy - 8, 'R', { tone: 'red', weight: 'bold', size: 12 });
        s += text(cx + 38, cy - 42, '邊長 a = R', { tone: 'blue', weight: 'bold', size: 12 });
        s += text(cx, 26, '圓內接正六邊形 (a = R)', { anchor: 'middle', weight: 'bold', size: 13 });

        // 右：黃金分割矩形
        const gx = 290, gy = 55, a = 110;
        const phi = 1.618;
        // 正方形 a x a
        s += rect(gx, gy, a, a, { tone: 'green', fill: 'green', soft: true, w: 2 });
        // 延伸部分 0.618a x a
        s += rect(gx + a, gy, a * 0.618, a, { tone: 'amber', fill: 'amber', soft: true, w: 2 });
        // 底邊中點 M
        const mx = gx + a / 2, my = gy + a;
        s += dot(mx, my, 4, 'red') + text(mx, my + 16, '中點 M', { anchor: 'middle', size: 11.5, tone: 'red', weight: 'bold' });
        // 斜線由 M 到正方形右上角 (gx+a, gy)
        s += line(mx, my, gx + a, gy, { tone: 'red', dash: 'dash', w: 1.6 });
        // 圓弧由 (gx+a, gy) 轉至底邊延長線 (gx + 1.618a, gy+a)
        const rArc = Math.hypot(a / 2, a);
        s += path(`M${gx + a},${gy} A${r2(rArc)},${r2(rArc)} 0 0 1 ${r2(gx + a * phi)},${my}`, { tone: 'red', w: 1.8 });
        s += dim(gx, gy, gx + a, gy, '1', { offset: -14, tone: 'green' });
        s += dim(gx + a, gy, gx + a * phi, gy, '0.618', { offset: -14, tone: 'amber' });
        s += text(gx + (a * phi) / 2, 16, '黃金矩形 1 : φ (φ = (1+√5)/2 ≈ 1.618)', { anchor: 'middle', weight: 'bold', size: 13 });
        return svg(560, 224, s);
      })(),
      takeaways: [
        '**圓內接正六邊形** 的邊長恰等於外接圓半徑 ($a = R$)，由 6 個正三角形組成，用圓規保持半徑 $R$ 或 $30^\\circ/60^\\circ$ 三角板即可畫出。',
        '**黃金分割比** $\\phi = \\frac{1+\\sqrt{5}}{2} \\approx 1.618$（倒數為 $0.618$），由帕德嫩神殿至柯比意「模矩論 (Modulor)」皆廣泛應用此比例。',
      ],
    },
    {
      concept: '正多邊形（正五、六、八邊形）畫法與黃金分割 (Regular Polygons & Golden Ratio)',
      kind: 'chart',
      title: '正多邊形（正三至正十二邊形）每一內角與外角中心角度數變化圖',
      caption: '隨邊數 n 增加，正 n 邊形外角（中心角）360°/n 遞減，而每一內角 (n−2)×180°/n 漸近於 180°。',
      svg: lineChart({
        w: 520,
        h: 255,
        x: { min: 3, max: 12, ticks: [3, 4, 5, 6, 8, 10, 12], label: '正多邊形邊數 n' },
        y: { min: 0, max: 180, ticks: [0, 45, 90, 120, 150, 180], label: '角度 (度)' },
        series: [
          {
            name: '單一內角 ((n−2)×180°/n)',
            tone: 'blue',
            markers: true,
            points: [
              [3, 60], [4, 90], [5, 108], [6, 120], [8, 135], [10, 144], [12, 150],
            ],
          },
          {
            name: '中心角 / 外角 (360°/n)',
            tone: 'red',
            dash: 'dash',
            markers: true,
            points: [
              [3, 120], [4, 90], [5, 72], [6, 60], [8, 45], [10, 36], [12, 30],
            ],
          },
        ],
      }),
      table: {
        headers: ['正多邊形 (邊數 n)', '內角總和 (n−2)×180°', '每一內角度數', '中心角 / 外角 (360°/n)'],
        rows: [
          ['正五邊形 (n = 5)', '540°', '108°', '72°'],
          ['正六邊形 (n = 6)', '720°', '120°', '60°（邊長 = 外接圓半徑 R）'],
          ['正八邊形 (n = 8)', '1080°', '135°', '45°（可用 45° 三角板直接切角）'],
          ['正十二邊形 (n = 12)', '1800°', '150°', '30°（可用 30°/60° 三角板作圖）'],
        ],
      },
      takeaways: [
        '正 $n$ 邊形必背公式：**單一外角（中心角）$= 360^\\circ / n$**，**單一內角 $= 180^\\circ - (360^\\circ / n) = \\frac{(n-2)\\times 180^\\circ}{n}$**。',
        '作線段 $AB$ 之垂直平分線（中垂線）時，以 $A, B$ 兩端點為圓心，圓規張開半徑必須 **大於線段長之一半 ($R > \\frac{1}{2}\\overline{AB}$)** 才能相交於兩點。',
      ],
    },
    {
      concept: '切線、切點與建築幾何曲線',
      kind: 'table',
      title: '圓弧切線、圓弧相切與橢圓／拋物線幾何作圖法則總表',
      caption: '整理圓與直線相切、兩圓內外切之連心線距離公式，以及建築拱門常用之四心近似橢圓畫法。',
      table: {
        headers: ['幾何作圖問題', '圓心位置軌跡法則', '切點 (Point of Tangency) 位置', '建築造型與製圖應用'],
        rows: [
          ['圓弧與直線相切', '圓心必在距離該直線為 R 之平行線上', '由圓心向該直線作「垂線」，垂足即為切點', '道路轉角街廓退縮圓弧、扶手轉折圓弧'],
          ['兩圓弧「外切」', '連心線長 = 兩半徑相加 (O₁O₂ = R₁ + R₂)', '切點必位於兩圓心之「連心線段上」', 'S 形反曲景觀步道、古典線腳 (Molding) 曲線'],
          ['兩圓弧「內切」', '連心線長 = 兩半徑相減 (O₁O₂ = |R₁ − R₂|)', '切點必位於兩圓心「連心線之延長線上」', '哥德式尖拱、卵形下水道斷面與複合拱圈'],
          ['橢圓作圖法', '同心圓法（準確點描）vs 四心圓近似法（圓規畫弧）', '長短軸頂點曲率對稱，四心圓由兩大弧與兩小弧相切構成', '巴洛克橢圓廣場、拱橋及等角投影圓（等角橢圓）'],
        ],
      },
      takeaways: [
        '畫相切圓弧時，必須先找出 **「圓心」** 與 **「切點」** 才能下筆畫弧，確保圓弧與直線在切點處平滑過渡無折角。',
        '必考口訣：**兩圓外切連心線長 $= R_1 + R_2$；兩圓內切連心線長 $= |R_1 - R_2|$**，切點永遠落在兩圓心的連心線上。',
      ],
    },
    {
      concept: '圖形的遷移與化圓弧為等長線段',
      kind: 'diagram',
      title: '化圓弧為直線：用分規把弧分段後逐段移量',
      caption: '60° 圓弧（r = 30 mm）分成 4 小段，每段弦長近似弧長，移到直線上得 4 × 7.8 ≈ 31.3 mm，與計算值 s = rθ ≈ 31.4 mm 很接近。',
      svg: (() => {
        let s = '';
        const C: Pt = [120, 200];
        const r = 140;
        s += path(arcPath(C[0], C[1], r, 30, 90), { tone: 'blue', w: 2.6 });
        s += line(C[0], C[1], ...polar(C[0], C[1], r, 30), { tone: 'muted', w: 1, dash: 'dash' });
        s += line(C[0], C[1], ...polar(C[0], C[1], r, 90), { tone: 'muted', w: 1, dash: 'dash' });
        s += dot(C[0], C[1], 3.6) + text(C[0] - 6, C[1] + 14, 'O', { anchor: 'end', weight: 'bold' });
        const marks = [30, 45, 60, 75, 90].map((d) => polar(C[0], C[1], r, d));
        marks.forEach((p) => { s += dot(p[0], p[1], 4, 'red'); });
        for (let i = 0; i < 4; i++) s += line(marks[i][0], marks[i][1], marks[i + 1][0], marks[i + 1][1], { tone: 'red', w: 1.2, dash: 'dash' });
        s += text(160, 76, '弦長 ≈ 弧長', { tone: 'red', size: 12, weight: 'bold' });
        const seg = 2 * r * Math.sin((7.5 * Math.PI) / 180);
        const x0 = 330;
        s += line(x0, 150, x0 + 4 * seg + 30, 150, { w: 1.2, tone: 'muted' });
        for (let i = 0; i <= 4; i++) { s += line(x0 + i * seg, 142, x0 + i * seg, 158, { tone: 'red', w: 1.6 }); }
        s += line(x0, 150, x0 + 4 * seg, 150, { tone: 'blue', w: 3 });
        s += dim(x0, 180, x0 + 4 * seg, 180, '≈ 弧長 s', { offset: 0 });
        s += text(x0 + 2 * seg, 120, '分規逐段移量 4 次', { anchor: 'middle', size: 12, weight: 'bold' });
        s += text(x0 + 2 * seg, 62, 's = r·θ = 30 × π/3 ≈ 31.4 mm', { anchor: 'middle', size: 12.5, weight: 'bold', tone: 'violet' });
        return svg(560, 216, s);
      })(),
      takeaways: [
        '分段越多，弦長總和越接近弧長；60° 以內的弧通常再細分數段。',
        '圖形遷移可用三角形法、方格法或坐標法，原則都是「量取相對位置再重建」。',
      ],
    },
  ],

  'auxiliary-views': [
    {
      concept: '輔助基準線與距離轉移法則 (Fold Lines & Distance Transfer)',
      kind: 'diagram',
      title: '單斜面（斜屋頂）第一輔助視圖求取真形實大 (True Shape) 投影圖解',
      caption: '斜屋頂在俯視圖與右側視圖皆因傾斜而縮短變形；於前視圖平行於斜面邊緣視圖設摺疊基準線 F1，垂直引出並轉移寬度 W 即得斜面真形。',
      svg: (() => {
        let s = '';
        // 前視圖（左下）：顯示斜屋頂邊緣視圖 Edge View
        const fx = 55, fy = 125;
        s += polygon([[fx, fy + 65], [fx + 120, fy + 65], [fx + 120, fy + 25], [fx + 50, fy - 25], [fx, fy - 25]], { tone: 'ink', fill: 'muted', soft: true, w: 2 });
        // 斜面邊緣加粗紅線 (Edge View)
        s += line(fx + 50, fy - 25, fx + 120, fy + 25, { tone: 'red', w: 3.2 });
        s += text(fx + 60, fy + 84, '前視圖（斜面呈一直線 EV）', { anchor: 'middle', size: 12, weight: 'bold' });

        // 俯視圖（左上）：顯示寬度 W 但斜面縮短
        s += rect(fx, 24, 120, 48, { tone: 'blue', fill: 'blue', soft: true, w: 1.8 });
        s += line(fx + 50, 24, fx + 50, 72, { tone: 'blue', w: 1.6 });
        s += dim(fx + 120, 24, fx + 120, 72, 'W', { offset: -20, tone: 'blue' });
        s += text(fx + 60, 16, '俯視圖（斜面投影縮短）', { anchor: 'middle', size: 11.5, tone: 'blue', weight: 'bold' });

        // 垂直投射虛線 (斜面兩端點 A, B)
        const pA: Pt = [fx + 50, fy - 25];
        const pB: Pt = [fx + 120, fy + 25];
        const dx = pB[0] - pA[0], dy = pB[1] - pA[1];
        const len = Math.hypot(dx, dy);
        // 單位法向量（指向右上）
        const nx = dy / len, ny = -dx / len;
        // 基準摺線 RP1 (平行於斜面)
        const f1A: Pt = [pA[0] + nx * 32, pA[1] + ny * 32];
        const f1B: Pt = [pB[0] + nx * 32, pB[1] + ny * 32];
        s += line(f1A[0] - 12, f1A[1] - 8, f1B[0] + 12, f1B[1] + 8, { tone: 'amber', dash: 'center', w: 1.8 });
        s += text(f1B[0] + 16, f1B[1] + 16, '基準線 H/A', { tone: 'amber', size: 11.5, weight: 'bold' });

        // 輔助視圖矩形（真形 True Shape）：沿法向推 52 與 52+48(W)
        const a1: Pt = [pA[0] + nx * 52, pA[1] + ny * 52];
        const b1: Pt = [pB[0] + nx * 52, pB[1] + ny * 52];
        const b2: Pt = [pB[0] + nx * 100, pB[1] + ny * 100];
        const a2: Pt = [pA[0] + nx * 100, pA[1] + ny * 100];
        s += line(pA[0], pA[1], a2[0], a2[1], { tone: 'muted', dash: 'dot', w: 1.2 });
        s += line(pB[0], pB[1], b2[0], b2[1], { tone: 'muted', dash: 'dot', w: 1.2 });
        s += polygon([a1, b1, b2, a2], { tone: 'green', fill: 'green', soft: true, w: 2.4 });
        s += text((a1[0] + b2[0]) / 2, (a1[1] + b2[1]) / 2, '真形實大 TS', { anchor: 'middle', baseline: 'middle', size: 12, weight: 'bold', tone: 'green' });

        // 右側重點說明框
        s += box(350, 42, 192, 138, [
          '求單斜面真形三步驟',
          '1. 找斜面積聚為直線之視圖(EV)',
          '2. 平行該斜線畫輔助基準線',
          '3. 垂直引出投射線並由相鄰',
          '   視圖轉移寬度 W 即得真形',
        ], { tone: 'green', size: 12 });
        return svg(560, 228, s);
      })(),
      takeaways: [
        '當建築構件具有斜屋頂或斜切面時，該斜面在正投影三視圖中會發生變形縮短，必須繪製 **輔助視圖 (Auxiliary View)** 才能量得真實面積與實長。',
        '輔助投影面必須設定為 **「平行於欲求真形之斜面，且垂直於該斜面呈現為一直線 (Edge View) 的主投影面」**。',
      ],
    },
    {
      concept: '線段實長與斜面邊緣視圖求法',
      kind: 'chart',
      title: '斜線段傾角 θ (0°–75°) 對正投影視圖投影長度 cos θ 與面積縮率影響圖',
      caption: '當斜面與投影面夾角 θ 越大時，正投影圖上的視長 L′ = L·cos θ 縮短越嚴重（θ = 60° 時僅剩實長的一半）。',
      svg: lineChart({
        w: 520,
        h: 255,
        x: { min: 0, max: 75, ticks: [0, 15, 30, 45, 60, 75], label: '斜面與投影面夾角 θ (度)' },
        y: { min: 0, max: 105, ticks: [0, 25, 50, 75, 100], label: '正投影長度比 cos θ (%)' },
        series: [
          {
            name: '正投影長度比 L′/L = cos θ (%)',
            tone: 'blue',
            markers: true,
            points: [
              [0, 100], [15, 96.6], [30, 86.6], [45, 70.7], [60, 50.0], [75, 25.9],
            ],
          },
          {
            name: '輔助視圖真形實長比 (%)',
            tone: 'green',
            dash: 'dash',
            points: [
              [0, 100], [75, 100],
            ],
          },
        ],
      }),
      table: {
        headers: ['斜面傾角 θ', '正投影長度比 cos θ', '實長 10m 斜屋頂在俯視圖長', '工程估算誤差風險'],
        rows: [
          ['θ = 0° (水平屋頂)', '100.0%', '10.00 m（即為實長）', '無誤差，可直接於平面圖量算面積'],
          ['θ = 30° (緩坡屋頂)', '86.6% (√3/2)', '8.66 m', '若直接以平面圖算屋瓦面積會少算 13.4%'],
          ['θ = 45° (陡坡屋頂)', '70.7% (√2/2)', '7.07 m', '平面投影面積僅為實際斜屋頂面積之 70.7%'],
          ['θ = 60° (尖頂斜牆)', '50.0% (1/2)', '5.00 m', '必須作輔助視圖或乘以 sec 60° = 2 倍還原實長'],
        ],
      },
      takeaways: [
        '正投影長度公式：$L_{proj} = L_{true} \\cdot \\cos\\theta$；因此斜屋頂真實面積 $A_{true} = A_{plan} / \\cos\\theta = A_{plan} \\cdot \\sec\\theta$。',
        '一般歪斜線在三視圖皆不平行於投影面（三視圖均縮短），可用 **旋轉法 (Revolution)** 或 **直角三角形法**（以水平投影長與高差 $\\Delta z$ 為兩股，斜邊即為實長 $TL$）求得。',
      ],
    },
    {
      concept: '輔助基準線與距離轉移法則',
      kind: 'table',
      title: '第一輔助視圖與複斜面第二輔助視圖分類及距離轉移規範表',
      caption: '對照三種第一輔助視圖與複斜面（歪面）二次輔助視圖的作圖流程與幾何特徵。',
      table: {
        headers: ['輔助視圖分類', '垂直之基準正投影面', '距離轉移來源（用分規量取）', '求解目標與工程應用'],
        rows: [
          ['前輔助視圖 (Front Aux.)', '垂直於直立投影面 (V 面 / 前視圖)', '由俯視圖（或側視圖）量取「前後深度 W」轉移', '求垂直於前視圖之單斜面（如山形斜屋頂）真形'],
          ['俯輔助視圖 (Top Aux.)', '垂直於水平投影面 (H 面 / 俯視圖)', '由前視圖（或側視圖）量取「垂直高度 H」轉移', '求垂直於地面但與正立面斜交之斜向牆面真形'],
          ['側輔助視圖 (Side Aux.)', '垂直於側投影面 (P 面 / 側視圖)', '由前視圖量取「左右寬度 L」轉移', '求在側視圖積聚為直線之斜面（如斜向擋土牆）真形'],
          ['第二（複）輔助視圖', '垂直於第一輔助投影面', '先求斜面上的實長線 (TL) 並積聚為點 → 得邊緣視圖 (EV) → 再作第二次輔助得真形', '求對 H、V、P 三面皆傾斜之「複斜面 (Oblique Plane)」真形及兩面夾角'],
        ],
      },
      takeaways: [
        '求 **複斜面（對三主投影面皆傾斜之歪面）** 的真形，必須經過 **兩次輔助投影**：第一次先把複斜面投影成一直線（邊緣視圖 Edge View），第二次再平行該直線投射出真形實大 (TS)。',
        '繪製局部輔助視圖時，為避免圖形重疊混亂，通常只畫出斜面的真形部分，其餘變形部分以波浪折斷線省略。',
      ],
    },
    {
      concept: '複斜面的法線視圖與旋轉視圖',
      kind: 'diagram',
      title: '複斜面求實形：先求邊視圖，再求實形（二次輔助視圖）',
      caption: '複斜面在主視圖中看不到邊視圖；先沿面上的實長線作第一輔助視圖使其積聚成直線，再垂直邊視圖作第二輔助視圖得實形。',
      svg: (() => {
        let s = '';
        s += flow(14, 40, [['主視圖', '找實長線'], ['第一輔助視圖', '面積聚成直線'], ['第二輔助視圖', '得到實形'], ['檢核', '邊長、角度']], { w: 118, h: 58, gap: 20, tones: ['blue', 'green', 'red', 'violet'], size: 12 });
        s += line(150, 140, 230, 180, { w: 2.4, tone: 'green' });
        s += text(190, 128, '邊視圖（一直線）', { anchor: 'middle', size: 12, tone: 'green', weight: 'bold' });
        s += polygon([[300, 130], [380, 120], [400, 180], [320, 190]], { tone: 'red', fill: 'red', soft: true, w: 2 });
        s += text(350, 210, '實形（實大）', { anchor: 'middle', size: 12, tone: 'red', weight: 'bold' });
        s += arrow(238, 160, 290, 160, { tone: 'muted', w: 1.4, label: '垂直投影', labelPos: 'mid', labelOffset: [0, -8] });
        return svg(560, 224, s);
      })(),
      takeaways: [
        '單斜面只要一次輔助投影；複斜面需要兩次（或旋轉兩次）才能得到實形。',
        '第一輔助視圖必須沿「實長線」方向投影，複斜面才會積聚成直線。',
      ],
    },
  ],

  'perspective-projection': [
    {
      concept: '透視圖種類與應用場景 (Types of Perspective Drawings)',
      kind: 'diagram',
      title: '一點透視（平行透視）與兩點透視（成角透視）視平線 HL 及消失點 VP 幾何構圖',
      caption: '左：一點透視具有單一中央消失點 VP（適合室內空間與長廊）；右：兩點透視具左右兩消失點 VPL、VPR（適合建築外觀轉角量體）。',
      svg: (() => {
        let s = '';
        // 左：一點透視（室內空間）
        const lx = 20, ly = 30, lw = 235, lh = 160;
        s += rect(lx, ly, lw, lh, { tone: 'ink', w: 1.8 });
        const vpx = lx + lw / 2, vpy = ly + lh * 0.48;
        // 視平線 HL
        s += line(lx, vpy, lx + lw, vpy, { tone: 'red', dash: 'center', w: 1.3 });
        // 後牆面
        const bw = 86, bh = 58;
        const bx = vpx - bw / 2, by = vpy - bh * 0.48;
        s += rect(bx, by, bw, bh, { tone: 'blue', fill: 'blue', soft: true, w: 2 });
        // 四角收斂線
        s += line(lx, ly, bx, by, { tone: 'blue', w: 1.6 });
        s += line(lx + lw, ly, bx + bw, by, { tone: 'blue', w: 1.6 });
        s += line(lx, ly + lh, bx, by + bh, { tone: 'blue', w: 1.6 });
        s += line(lx + lw, ly + lh, bx + bw, by + bh, { tone: 'blue', w: 1.6 });
        // 虛線連至 VP
        s += line(bx, by, vpx, vpy, { tone: 'red', dash: 'dot', w: 1 });
        s += line(bx + bw, by + bh, vpx, vpy, { tone: 'red', dash: 'dot', w: 1 });
        s += dot(vpx, vpy, 4.5, 'red') + text(vpx, vpy - 10, 'VP', { anchor: 'middle', weight: 'bold', size: 12, tone: 'red' });
        s += text(lx + 8, vpy - 6, 'HL', { size: 11, tone: 'red', weight: 'bold' });
        s += text(lx + lw / 2, 20, '一點透視（平行透視：室內空間）', { anchor: 'middle', weight: 'bold', size: 12.5 });

        // 右：兩點透視（建築轉角外觀）
        const rx = 285, rw = 255, hly = ly + lh * 0.56;
        s += line(rx, hly, rx + rw, hly, { tone: 'red', dash: 'center', w: 1.4 });
        const vpl: Pt = [rx + 14, hly];
        const vpr: Pt = [rx + rw - 14, hly];
        const cx = rx + 122, topY = 52, botY = 178;
        const lEdgeX = rx + 58, rEdgeX = rx + 202;
        // 計算左右牆上下角點
        const lerpY = (x0: number, y0: number, x1: number, y1: number, x: number) => y0 + ((y1 - y0) * (x - x0)) / (x1 - x0);
        const lTopY = lerpY(cx, topY, vpl[0], vpl[1], lEdgeX);
        const lBotY = lerpY(cx, botY, vpl[0], vpl[1], lEdgeX);
        const rTopY = lerpY(cx, topY, vpr[0], vpr[1], rEdgeX);
        const rBotY = lerpY(cx, botY, vpr[0], vpr[1], rEdgeX);
        // 消失輔助線
        s += line(cx, topY, vpl[0], vpl[1], { tone: 'muted', dash: 'dot', w: 1.1 });
        s += line(cx, botY, vpl[0], vpl[1], { tone: 'muted', dash: 'dot', w: 1.1 });
        s += line(cx, topY, vpr[0], vpr[1], { tone: 'muted', dash: 'dot', w: 1.1 });
        s += line(cx, botY, vpr[0], vpr[1], { tone: 'muted', dash: 'dot', w: 1.1 });
        // 建築左右牆面
        s += polygon([[cx, topY], [lEdgeX, lTopY], [lEdgeX, lBotY], [cx, botY]], { tone: 'green', fill: 'green', soft: true, w: 2 });
        s += polygon([[cx, topY], [rEdgeX, rTopY], [rEdgeX, rBotY], [cx, botY]], { tone: 'amber', fill: 'amber', soft: true, w: 2 });
        s += line(cx, topY, cx, botY, { tone: 'ink', w: 2.8 });
        s += dot(vpl[0], vpl[1], 4.5, 'red') + text(vpl[0] + 4, vpl[1] - 10, 'VPL', { weight: 'bold', size: 11.5, tone: 'red' });
        s += dot(vpr[0], vpr[1], 4.5, 'red') + text(vpr[0] - 4, vpr[1] - 10, 'VPR', { anchor: 'end', weight: 'bold', size: 11.5, tone: 'red' });
        s += text(rx + rw / 2, 20, '兩點透視（成角透視：建築外觀）', { anchor: 'middle', weight: 'bold', size: 12.5 });

        s += text(280, 214, '水平平行線群必收斂於視平線 (HL) 上的消失點 (VP)；唯一貼在畫面 PP 上的垂直稜線呈現「真高」', { anchor: 'middle', size: 11.5, weight: 'bold', tone: 'ink' });
        return svg(560, 228, s);
      })(),
      takeaways: [
        '透視投影即為「中心投影（錐形投影）」：所有水平方向相互平行的建築線，延伸至無限遠時必交於 **視平線 (Horizon Line, HL)** 上的 **消失點 (Vanishing Point, VP)**。',
        '凡是恰位於 **畫面 (Picture Plane, PP)** 上的建築物稜線，在透視圖上呈現 **真實高度（真長線 True Height Line）**；畫面後方的物體越遠越小，畫面前的物體則放大。',
      ],
    },
    {
      concept: '透視圖種類與應用場景',
      kind: 'chart',
      title: '透視圖視角 Cone of Vision (15°–90°) 與畫面邊緣桶狀失真率關係圖',
      caption: '繪製建築透視圖時，最佳正常視角（視錐角）為 30°–60°；若超過 60° 廣角，畫面四周會產生劇烈的拉長變形失真。',
      svg: lineChart({
        w: 520,
        h: 255,
        x: { min: 15, max: 90, ticks: [15, 30, 45, 60, 75, 90], label: '視錐張角 Cone of Vision (度)' },
        y: { min: 0, max: 100, ticks: [0, 20, 40, 60, 80, 100], label: '視覺自然度 / 變形失真率 (%)' },
        series: [
          {
            name: '透視自然舒適度 (%)',
            tone: 'green',
            markers: true,
            points: [
              [15, 65], [30, 95], [45, 98], [60, 88], [75, 45], [90, 15],
            ],
          },
          {
            name: '邊緣幾何拉伸失真率 (%)',
            tone: 'red',
            dash: 'dash',
            markers: true,
            points: [
              [15, 5], [30, 8], [45, 14], [60, 25], [75, 58], [90, 92],
            ],
          },
        ],
      }),
      table: {
        headers: ['透視圖分類', '主軸與畫面 (PP) 關係', '消失點 (VP) 數量', '最佳建築表現應用場景'],
        rows: [
          ['一點透視（平行透視）', '一組主牆面平行 PP、一組垂直 PP', '1 個（主點 CV）', '室內空間設計、長廊、街道軸線與對稱廣場'],
          ['兩點透視（成角透視）', '垂直稜線平行 PP，兩主牆面與 PP 斜交 (如 30°/60°)', '2 個（左 VPL、右 VPR）', '建築外觀透視圖最常用（立體感自然、垂直線保持鉛直）'],
          ['三點透視（傾斜透視）', '三組主軸線與畫面 PP 皆不平行（畫面傾斜）', '3 個（左右＋天點或地點）', '摩天大樓仰視圖（壯觀高聳感）或大規模鳥瞰俯視圖'],
          ['正常視錐角設定', '駐點 SP 對物體張開之視角控制在 30°–60°', '最佳視距 ≈ 1.5–2 倍物寬', '視角過小 (<20°) 像軸測圖呆板；過大 (>60°) 邊角嚴重變形'],
        ],
      },
      takeaways: [
        '人眼清晰辨識的 **正常視錐角 (Cone of Vision)** 為 **$30^\\circ \\sim 60^\\circ$**（理想值 **$45^\\circ$**），因此駐點 (SP) 到建築物的距離應取建築物最大寬度的 **1.5 至 2 倍**。',
        '視高（視平線 HL 高度）決定觀看視角：**人眼透視（平視）** HL 取 $1.5\\sim 1.7\\text{ m}$；**鳥瞰圖（俯視）** HL 高於屋頂；**蟲視圖（仰視）** HL 接近地面。',
      ],
    },
    {
      concept: '視線法作圖與透視陰影原理',
      kind: 'table',
      title: '透視圖專業術語代號、求取法則與建築陰影作圖對照表',
      caption: '彙整統測製圖必考之透視投影五大基準線／點代號（PP、GL、HL、SP、VP）及平行陽光陰影作圖原理。',
      table: {
        headers: ['透視要素名稱', '標準英文縮寫', '幾何定義與求取法則', '考題必考特性與判斷'],
        rows: [
          ['畫面與基線', 'PP (Picture Plane) / GL (Ground Line)', 'PP 為透明投影面；PP 與地面 GP 之交線即為基線 GL', '唯有緊貼在 PP 上的垂直線才可以直接量取真實高度 (True Height)'],
          ['駐點與心點', 'SP (Station Point) / CV (Center of Vision)', 'SP 為觀察者眼睛位置；由 SP 向畫面作垂線之垂足為心點 CV', '心點 CV 必落在視平線 HL 上；一點透視中 CV 即為唯一消失點'],
          ['視平線與消失點', 'HL (Horizon Line) / VP (Vanishing Point)', '過眼睛 SP 之水平面與 PP 交線為 HL；過 SP 作物體邊線之平行線交 PP 於 VP', '兩點透視中，由 SP 引向兩消失點的夾角恆為 90°（因建築轉角為直角）'],
          ['建築陰影求法', '陽光光線 (Light Ray) / 陰影 (Shade & Shadow)', '工程正投影陰影常假設陽光方向與三主軸成 45°（平面與立面皆為 45° 斜線）', '背光面本身變暗稱為「陰 (Shade)」，投射在地面或鄰牆上的黑影稱為「影 (Shadow)」'],
        ],
      },
      takeaways: [
        '兩點透視求消失點口訣：**「由駐點 SP 平行於建築平面圖之兩牆面畫線，交畫面 PP 後垂直拉到視平線 HL 上，即得 VPL 與 VPR」**。',
        '建築立面圖繪製標準陰影時，依慣例假設平行陽光自 **左上方以 45° 俯角與 45° 水平角** 投射向右下角，因此凸出雨遮的陰影寬度恰等於其懸挑深度！',
      ],
    },
    {
      concept: '光源的性質：平行光（日光）與點光源（燈光）的陰影',
      kind: 'diagram',
      title: '平行光與點光源的影子比較',
      caption: '左：平行光（太陽）光線彼此平行，影子形狀與物體成固定比例；右：點光源光線由一點放射，影子隨距離光源越遠而放大。',
      svg: (() => {
        let s = '';
        s += line(20, 180, 260, 180, { tone: 'muted', w: 1.6 });
        s += rect(70, 120, 40, 60, { tone: 'ink', fill: 'muted', soft: true, w: 1.6 });
        for (let i = 0; i < 4; i++) s += arrow(20 + i * 22, 40, 20 + i * 22 + 70, 110, { tone: 'amber', w: 1.2, head: 6 });
        s += polygon([[110, 180], [110, 120], [170, 180]], { tone: 'muted', fill: 'ink', soft: true, w: 1 });
        s += line(110, 120, 170, 180, { tone: 'amber', w: 1.2, dash: 'dash' });
        s += text(140, 24, '平行光（45° 光線）', { anchor: 'middle', weight: 'bold', tone: 'amber' });
        s += text(150, 204, '影長 = 物高（45°）', { anchor: 'middle', size: 12, tone: 'muted' });
        s += line(300, 180, 540, 180, { tone: 'muted', w: 1.6 });
        const L: Pt = [330, 50];
        s += dot(L[0], L[1], 7, 'amber') + text(L[0] + 12, L[1] + 4, '點光源', { tone: 'amber', weight: 'bold' });
        s += rect(380, 130, 36, 50, { tone: 'ink', fill: 'muted', soft: true, w: 1.6 });
        const tip: Pt = [416 + (416 - L[0]) * (50 / (130 - L[1])), 180];
        s += line(L[0], L[1], tip[0], tip[1], { tone: 'amber', w: 1.2, dash: 'dash' });
        s += polygon([[416, 180], [416, 130], tip], { tone: 'muted', fill: 'ink', soft: true, w: 1 });
        s += text(430, 204, '距光源越遠，影子越長', { anchor: 'middle', size: 12, tone: 'muted' });
        return svg(560, 216, s);
      })(),
      takeaways: [
        '建築立面常採光線由左上 45° 射入的慣例，使陰影寬度等於凸出深度，方便量測。',
        '物體背光的面稱「陰」，投到其他面上的暗區稱「影」，作圖時應分開表現。',
      ],
    },
  ],
};
