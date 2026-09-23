import { SemesterReviewData } from './types';

export const surveyingS2Review: SemesterReviewData = {
  id: "surveying-s2",
  subjectSlug: "surveying",
  subjectTitle: "測量實習",
  semesterCode: "s2",
  semesterTitle: "第二學期（高二下）",
  gradeLevel: 11,
  subtitle: "導線測量、坐標正反算、閉合差平差與土地面積計算",
  category: "專業科目（二）",
  curriculumScope: "108 課綱土木建築群測量實習第 5~7 章：導線測量、坐標計算與閉合差調整、土地多邊形面積計算與近代測繪技術",
  topicSlugs: [
    "traverse-surveying",
    "coordinate-computation",
    "area-and-error"
  ],
  examAnalysis: {
    examWeight: "佔專業科目（二）約 20% ~ 25%（每年度約 8~10 題/40 題，為計算核心）",
    coreExamThemes: [
      "方位角 (Azimuth, Az) 推算：前線方位角 = 後線方位角 + 偏角（左偏減、右偏加）；或利用內角推算，若超過 360° 減 360°",
      "坐標正算與反算：正算 ΔN = D · cos(Az), ΔE = D · sin(Az)；反算距離 D = √(ΔN² + ΔE²), 方位角 Az = tan⁻¹(|ΔE|/|ΔN|)",
      "閉合導線角度閉合差：n 邊形內角和理論值 = (n - 2) × 180°；外角和理論值 = (n + 2) × 180°",
      "導線閉合差與精度：緯距閉合差 W_N = ∑ΔN, 經距閉合差 W_E = ∑ΔE, 全長閉合差 K = √(W_N² + W_E²), 導線精度 Ratio = 1 / (∑D / K)",
      "羅盤儀平差法 (Compass Rule / Bowditch Rule)：各邊緯距改正數與『該邊長度成正比』：C_Ni = - W_N · (Di / ∑D)",
      "多邊形坐標法求面積：鞋帶公式 (Gauss's Area Formula) 2A = ∑(Ni · E(i+1) - N(i+1) · Ei)；雙倍緯距法 (DMD) 求面積"
    ],
    recentTrends: "本學期重點在於『羅盤儀法平差計算』與『坐標正反算』。統測幾乎年年必出 1 題方位角推算、1 題導線閉合差精度計算、1 題坐標法求面積。",
    targetScoreAdvice: "坐標計算步驟極度公式化。謹記『N 坐標對應 cos、E 坐標對應 sin』，計算閉合差時加上負號進行反向分配，掌握計算器操作技巧即可穩拿滿分。"
  },
  chapters: [
    {
      chapterNo: 1,
      title: "導線測量種類、幾何條件與方位角連續推算",
      topicSlug: "traverse-surveying",
      examFrequency: 5,
      coreConcepts: [
        {
          heading: "導線三大形式：閉合、附合與支導線",
          explanation: "導線是由一系列相連的控制測線組成的多邊形折線網：",
          keyPoints: [
            "閉合導線 (Closed Traverse)：由已知控制點出發，環繞一圈後最終又『閉合回同一已知點』。具備角度與坐標雙重檢核條件，最適合中小型基地控制測量。",
            "附合導線 (Connecting Traverse)：由一已知控制點出發，沿途測定多個點，最終『附合到另一已知控制點』。檢核條件最完整嚴密，為高等控制測量首選。",
            "支導線 (Open / Spur Traverse)：由已知點出發，未閉合亦未附合於任何已知點。無任何檢核條件，若有過失無法察覺，工程實務原則上嚴格禁止單獨使用！"
          ]
        },
        {
          heading: "方位角 (Azimuth) 與方向角 (Bearing) 轉換與推算",
          explanation: "方位角 Az 是以正北方向為 0°，順時針旋轉至目標測線的水平角 (0° ~ 360°)；方向角是由正北或正南向東或向西偏轉的銳角 (0° ~ 90°，如 N30°E, S45°W)。",
          keyPoints: [
            "正反方位角關係：反方位角 = 正方位角 ± 180°（正方位角 < 180° 時取加；> 180° 時取減）。",
            "連續推算前進方位角公式：前測線方位角 = 前一測線反方位角 + 順時針轉折角 β；或 Az_(前) = Az_(後) + 180° ± 轉折角（若計算結果 > 360° 減去 360°，若 < 0° 加上 360°）。"
          ]
        }
      ],
      formulaCard: {
        formula: "\\sum \\beta_{\\text{內}} = (n - 2) \\times 180^\\circ, \\quad \\sum \\beta_{\\text{外}} = (n + 2) \\times 180^\\circ, \\quad \\text{Az}_{\\text{反}} = \\text{Az}_{\\text{正}} \\pm 180^\\circ",
        meaning: "n 邊形內外角和理論值；正反方位角互換公式",
        unit: "角度為度分秒 (D°M'S\")",
        cautions: "閉合導線計算角度閉合差時，先確認觀測的是『內角』還是『外角』！五邊形內角和為 (5-2)×180° = 540°；外角和為 (5+2)×180° = 1260°！",
        latex: "f_\\beta = \\sum \\beta_{\\text{實測}} - (n - 2) \\times 180^\\circ; \\quad \\Delta \\text{Az} = \\text{Az} + 180^\\circ \\pm \\theta"
      },
      diagram: {
        title: "導線前進方位角與偏角轉折推算幾何圖",
        type: "geometry",
        caption: "以正北為 0° 順時針計量；前線方位角 = 後線反方位角 + 順時針轉折角 (右偏加，左偏減)，若大於 360° 減去 360°。",
        asciiArt: `              ▲ 北 (N, 0°)                ▲ 北 (N, 0°)
              │                           │
              │ 測線 AB                   │ 測線 BC
              │ 方位角 Az_AB              │ 方位角 Az_BC
              │   /                       │   /
              │  /                        │  /
              │ / 轉折角 β (右偏加)       │ /
       ───────*───────────────────────────*────────► 東 (E)
             點 A                        點 B
        推算口訣：Az_BC = Az_AB + 180° ± 轉折偏角 (大於 360° 減 360°)`,
        labels: [
          { label: "方位角 Az", desc: "由正北順時針量至目標測線 (0° ~ 360°)" },
          { label: "正反方位角", desc: "反方位角 = 正方位角 ± 180° (相差半圓 180°)" },
          { label: "轉折角推算", desc: "右偏為加 (+θ)，左偏為減 (-θ)；超界則做 ±360° 歸一化" }
        ]
      },
      tables: [
        {
          title: "四大象限方位角 (Azimuth) 與方向角 (Bearing) 互換速查表",
          headers: ["象限別", "方位角區間 (Az)", "方向角形式 (Bearing)", "由方位角求方向角", "由方向角求方位角"],
          rows: [
            ["第一象限 (NE)", "0° < Az < 90°", "N θ E", "θ = Az", "Az = θ"],
            ["第二象限 (SE)", "90° < Az < 180°", "S θ E", "θ = 180° - Az", "Az = 180° - θ"],
            ["第三象限 (SW)", "180° < Az < 270°", "S θ W", "θ = Az - 180°", "Az = 180° + θ"],
            ["第四象限 (NW)", "270° < Az < 360°", "N θ W", "θ = 360° - Az", "Az = 360° - θ"]
          ]
        }
      ],
      mustMasterChecklist: [
        "熟背 n 邊形內角和為 (n - 2) × 180°，外角和為 (n + 2) × 180°",
        "熟記正反方位角相差 180°",
        "能以順時針或逆時針偏角，連續推算導線各邊方位角",
        "掌握四個象限中方位角與方向角的轉換公式"
      ]
    },
    {
      chapterNo: 2,
      title: "坐標正算反算、導線閉合差與羅盤儀法平差",
      topicSlug: "coordinate-computation",
      examFrequency: 5,
      coreConcepts: [
        {
          heading: "坐標正算 (Forward Computation) 與坐標反算 (Inverse)",
          explanation: "平面測量之平面直角坐標系以正北為 N 軸 (Y 軸)，正東為 E 軸 (X 軸)：",
          keyPoints: [
            "坐標正算（已知 A 點坐標、邊長 D 與方位角 Az，求 B 點坐標）：\n緯距 (縱距增量) ΔN = D · cos(Az)\n經距 (橫距增量) ΔE = D · sin(Az)\n則 N_B = N_A + ΔN，E_B = E_A + ΔE。",
            "坐標反算（已知 A、B 兩點坐標，反求邊長 D 與方位角 Az）：\n邊長 D = √[ (N_B - N_A)² + (E_B - E_A)² ]\n方位角 Az：先求銳角 θ = tan⁻¹( |ΔE| / |ΔN| )，再依 ΔN 與 ΔE 正負號判定象限求出 Az。"
          ]
        },
        {
          heading: "導線閉合差與羅盤儀法平差 (Compass Rule)",
          explanation: "閉合導線繞行一周，理論上 ∑ΔN = 0 且 ∑ΔE = 0。若實測總和不為零，其殘差即為閉合差：",
          keyPoints: [
            "緯距閉合差 W_N = ∑ΔN；經距閉合差 W_E = ∑ΔE。",
            "全長閉合差 K = √(W_N² + W_E²)。",
            "導線相對閉合精度 (Precision Ratio) = 1 / (∑D / K) = K / ∑D（例如 1/5000）。",
            "羅盤儀平差法（鮑迪奇法 Bowditch Rule）：假設角度與邊長測量精度相當，各邊之改正數與『該測線長度成正比』：\n第 i 邊緯距改正數 C_Ni = - W_N · (Di / ∑D)\n第 i 邊經距改正數 C_Ei = - W_E · (Di / ∑D)\n改正後增量 = 原實測增量 + 改正數。"
          ]
        }
      ],
      formulaCard: {
        formula: "\\Delta N = D \\cos\\text{Az}, \\; \\Delta E = D \\sin\\text{Az}; \\quad C_{Ni} = - W_N \\frac{D_i}{\\sum D}, \\; C_{Ei} = - W_E \\frac{D_i}{\\sum D}",
        meaning: "ΔN, ΔE 為坐標增量；W_N, W_E 為閉合差；C_Ni, C_Ei 為羅盤儀平差改正數",
        unit: "坐標與距離為公尺 (m)",
        cautions: "平差改正數的符號必須『與閉合差相反 (-W)』！若閉合差 W_N 為 +0.10 m，則改正數必定為負項 (-)，才能把總和拉回零！",
        latex: "K = \\sqrt{W_N^2 + W_E^2}; \\quad \\text{精度} = \\frac{1}{\\sum D / K}"
      },
      diagram: {
        title: "坐標增量與導線閉合差向量分解圖",
        type: "geometry",
        caption: "緯距 ΔN = D·cos(Az)，經距 ΔE = D·sin(Az)；閉合差 W_N = ∑ΔN, W_E = ∑ΔE, 全長閉合差 K = √(W_N² + W_E²)。",
        asciiArt: `           ▲ 北 (N) 軸
           │           終點 B(N_B, E_B)
           │            *
           │           /│
           │       D  / │
           │         /  │ 緯距增量 ΔN = D·cos(Az)
           │        /   │
           │  Az   /    │
           │ ┌─── /     │
           │ │   /      │
           ├─┴──*───────┴────────► 東 (E) 軸
          原點 A   經距增量 ΔE = D·sin(Az)
          
   [導線閉合差]  全長閉合差 K = √(W_N² + W_E²)
                 精度 Ratio = 1 / (∑D / K) (要求如 1/5000)`,
        labels: [
          { label: "緯距 ΔN", desc: "縱軸增量 ΔN = D · cos(方位角 Az)，北正南負" },
          { label: "經距 ΔE", desc: "橫軸增量 ΔE = D · sin(方位角 Az)，東正西負" },
          { label: "羅盤儀平差", desc: "各邊改正數 C_i = - W · (D_i / ∑D)，與該邊長成正比" }
        ]
      },
      tables: [
        {
          title: "導線平差兩大經典方法比較表",
          headers: ["平差方法", "基本假設條件", "緯距與經距改正數分配權重", "適用測量情境"],
          rows: [
            ["羅盤儀法 (Compass / Bowditch Rule)", "邊長測量與角度測量精度約略相當", "按『各邊邊長 Di / ∑D』成正比分配", "一般工程測量最常用標準方法（統測必考！）"],
            ["凌鏡法 (Transit Rule)", "角度觀測精度遠高於距離觀測精度", "按『各邊緯距/經距絕對值 |ΔNi|/∑|ΔN|』分配", "精密經緯儀配合粗略測距時使用"]
          ]
        }
      ],
      mustMasterChecklist: [
        "牢記坐標增量公式：ΔN = D·cos(Az)，ΔE = D·sin(Az)（N 伴 cos，E 伴 sin）",
        "熟背導線全長閉合差公式 K = √(W_N² + W_E²)",
        "熟背導線精度分母為 ∑D / K，並寫成 1/N 形式",
        "掌握羅盤儀法分配公式：改正數 = - (閉合差) × (該邊長 / 總邊長)"
      ]
    },
    {
      chapterNo: 3,
      title: "多邊形土地面積計算：坐標法與雙倍緯距法 (DMD)",
      topicSlug: "area-and-error",
      examFrequency: 5,
      coreConcepts: [
        {
          heading: "多邊形頂點坐標法求面積（鞋帶公式 Gauss's Formula）",
          explanation: "已知任意多邊形 n 個頂點之直角坐標 (N₁, E₁), (N₂, E₂), ..., (Nn, En)，以順時針或逆時針順序排列，其面積 A 計算式為：",
          keyPoints: [
            "行列式交叉相乘公式：2A = | (N₁E₂ + N₂E₃ + ... + NnE₁) - (E₁N₂ + E₂N₃ + ... + EnN₁) |。",
            "面積 A 恆取正值（外加絕對值除以 2）。此公式適用於任何任意凸多邊形或凹多邊形！"
          ]
        },
        {
          heading: "雙倍緯距法 (Double Meridian Distance, DMD)",
          explanation: "由導線經平差後的各邊緯距 ΔN 與經距 ΔE 計算多邊形面積：",
          keyPoints: [
            "第一邊之 DMD₁ = 第一邊之經距 ΔE₁。",
            "任一邊之 DMD_i = 前一邊之 DMD_(i-1) + 前一邊之經距 ΔE_(i-1) + 該邊之經距 ΔE_i。",
            "最後一邊之 DMD_n 數值大小必恰等於最後一邊經距之負值 (-ΔE_n)，此為絕佳算術檢核！",
            "各邊雙倍面積 2Ai = DMD_i × 該邊緯距 ΔN_i；總面積 A = (1/2) · | ∑ (DMD_i · ΔNi) |。"
          ]
        }
      ],
      formulaCard: {
        formula: "2A = \\left| \\sum_{i=1}^{n} (N_i E_{i+1} - N_{i+1} E_i) \\right|, \\quad \\text{DMD}_i = \\text{DMD}_{i-1} + \\Delta E_{i-1} + \\Delta E_i",
        meaning: "頂點坐標法求面積鞋帶公式；DMD 遞推求多邊形面積公式",
        unit: "面積為平方公尺 (m²)",
        cautions: "鞋帶公式計算時，最後一個點計算完畢後必須『繞回第一個點 (N(n+1) = N₁, E(n+1) = E₁)』！漏掉頭尾相接則面積全錯！",
        latex: "A = \\frac{1}{2} \\left| \\sum_{i=1}^{n} N_i (E_{i+1} - E_{i-1}) \\right| = \\frac{1}{2} \\left| \\sum \\text{DMD}_i \\cdot \\Delta N_i \\right|"
      },
      tables: [
        {
          title: "三種常見土地面積計算方法適用與優劣表",
          headers: ["計算方法名稱", "輸入資料類型", "計算步驟繁簡", "工程優勢與特徵"],
          rows: [
            ["海龍公式 (三斜法)", "三角形三邊邊長 a, b, c", "S = (a+b+c)/2; A = √[S(S-a)(S-b)(S-c)]", "無須坐標，捲尺量出各邊長即可求三角塊面積"],
            ["頂點坐標法 (鞋帶公式)", "各多邊形頂點坐標 (N, E)", "交叉斜向相乘後相減除以 2", "現代 CAD/GIS 與計算器最主流計算方式"],
            ["雙倍緯距法 (DMD 法)", "導線各邊平差後之 ΔN, ΔE", "遞推 DMD 後乘以 ΔN 累加除以 2", "可與導線平差計算表直接無縫連貫整合"]
          ]
        }
      ],
      mustMasterChecklist: [
        "掌握坐標法交叉相乘公式：交叉相乘相減後除以 2",
        "熟背海龍公式：S = (a+b+c)/2，面積 A = √[S(S-a)(S-b)(S-c)]",
        "熟記雙倍緯距推算：前DMD + 前ΔE + 本ΔE",
        "知道最後一條線的 DMD 絕對值必等於該線經距 ΔE"
      ]
    }
  ],
  highFrequencyTraps: [
    {
      title: "【陷阱一】方位角正算坐標時 sin 與 cos 顛倒",
      trap: "在數學直角坐標中，X 軸常配 cos，Y 軸配 sin。考生誤將東坐標 ΔE 代為 cos，北坐標 ΔN 代為 sin。",
      solution: "測量坐標系與數學笛卡兒坐標不同！測量中正北為 N 軸（縱軸），正東為 E 軸（橫軸），方位角 Az 是從正北 N 軸起算！因此：北向增量 ΔN = D · cos(Az)；東向增量 ΔE = D · sin(Az)！切記『N 配 cos，E 配 sin』！",
      relatedExamConcept: "坐標正算公式 (115-專二-08, 113-專二-09)"
    },
    {
      title: "【陷阱二】平差改正數正負號未取相反數",
      trap: "計算出緯距閉合差 W_N = +0.12 m（實測值偏大），計算各邊改正數時誤取為正值加進去，導致誤差擴大為 +0.24 m。",
      solution: "閉合差是『多了』或『少了』的差額。若實測總和多了 (+0.12 m)，平差時每條測線就必須『減去』對應份額！因此改正數公式前面一定帶有負號：C = - W · (D / ∑D)！",
      relatedExamConcept: "羅盤儀平差法計算 (114-專二-11, 112-專二-10)"
    },
    {
      title: "【陷阱三】坐標反算方位角時忽略象限判斷",
      trap: "計算 tanθ = |ΔE| / |ΔN| 算出 θ = 30°。題目中 ΔN = -100 m，ΔE = -57.7 m。考生直接寫方位角為 30°。",
      solution: "ΔN < 0 (向南) 且 ΔE < 0 (向西)，這代表測線位於『第三象限 (SW)』！方位角 Az 必須以 180° + θ 計算：Az = 180° + 30° = 210°！絕不能只算銳角 θ！",
      relatedExamConcept: "坐標反算方位角與象限 (115-專二-09, 111-專二-12)"
    }
  ],
  curatedPastQuestions: [
    {
      id: "115-專二-10",
      year: 115,
      questionNo: 10,
      examPaper: "專業科目（二）測量實習",
      stem: "一閉合導線總周長 ∑D = 400 m，經計算得緯距閉合差 W_N = +0.06 m，經距閉合差 W_E = -0.08 m。試求該導線之全長閉合差 K 及導線相對閉合精度分別為多少？",
      options: {
        A: "K = 0.10 m，精度 1/4000",
        B: "K = 0.14 m，精度 1/2857",
        C: "K = 0.10 m，精度 1/2000",
        D: "K = 0.02 m，精度 1/20000"
      },
      answer: "A",
      sopSteps: [
        {
          stepNo: 1,
          title: "計算全長閉合差 K",
          detail: "根據畢氏定理，全長閉合差 K = √(W_N² + W_E²) = √[(+0.06)² + (-0.08)²] = √(0.0036 + 0.0064) = √0.0100 = 0.10 m。"
        },
        {
          stepNo: 2,
          title: "計算導線相對閉合精度 Ratio",
          detail: "相對閉合精度定義為全長閉合差與導線總長度之比，並化簡為分子為 1 之分數：精度 = K / ∑D = 0.10 m / 400 m = 1 / (400 / 0.10) = 1 / 4000。"
        },
        {
          stepNo: 3,
          title: "核對選項",
          detail: "K = 0.10 m 且精度為 1/4000，精確對應選項 (A)。"
        }
      ],
      examinerTrapNotes: "出題老師極愛用 6-8-10 (0.06, 0.08, 0.10) 經典數字。若考生誤將 0.06 + 0.08 = 0.14 直接相加，就會掉入陷阱誤選 (B)。",
      quickShortcut: "【秒殺模型：3-4-5 特殊勾股數】看到 0.06 與 0.08，立馬心算閉合差 K = 0.10 m！400 除以 0.10 等於 4000，故精度 1/4000，5 秒秒殺 (A)！"
    },
    {
      id: "114-專二-12",
      year: 114,
      questionNo: 12,
      examPaper: "專業科目（二）測量實習",
      stem: "已知 A 點之平面直角坐標為 (N_A = 100.00 m, E_A = 200.00 m)。自 A 點觀測至 B 點之水平距離 D_AB = 50.00 m，測線 AB 之方位角 Az_AB = 120°。試求 B 點之坐標 (N_B, E_B) 為多少？（已知 cos120° = -0.5, sin120° = 0.866）",
      options: {
        A: "N_B = 75.00 m, E_B = 243.30 m",
        B: "N_B = 125.00 m, E_B = 243.30 m",
        C: "N_B = 75.00 m, E_B = 156.70 m",
        D: "N_B = 143.30 m, E_B = 175.00 m"
      },
      answer: "A",
      sopSteps: [
        {
          stepNo: 1,
          title: "計算緯距增量 ΔN_AB",
          detail: "ΔN = D · cos(Az) = 50.00 m · cos120° = 50.00 · (-0.5) = -25.00 m。"
        },
        {
          stepNo: 2,
          title: "計算經距增量 ΔE_AB",
          detail: "ΔE = D · sin(Az) = 50.00 m · sin120° = 50.00 · 0.866 = +43.30 m。"
        },
        {
          stepNo: 3,
          title: "累加求 B 點坐標",
          detail: "N_B = N_A + ΔN = 100.00 + (-25.00) = 75.00 m。\nE_B = E_A + ΔE = 200.00 + 43.30 = 243.30 m。"
        },
        {
          stepNo: 4,
          title: "結論選答",
          detail: "B 點坐標為 (75.00 m, 243.30 m)，故選 (A)。"
        }
      ],
      examinerTrapNotes: "常見錯誤是把 cos 與 sin 帶反算成 (D)，或是把負號搞丟算成 100 + 25 = 125 m 誤選 (B)。",
      quickShortcut: "【秒殺模型：方位角象限檢驗】120° 位於第二象限 (東南方)，N 坐標必減少、E 坐標必增加！原坐標 (100, 200)，N 必須小於 100，E 必須大於 200。四個選項中僅有 (A) 的 N = 75 (<100) 且 E = 243.3 (>200)，完全無需計算直接排除秒選 (A)！"
    }
  ],
  preExamChecklist: [
    "我知道閉合導線內角和為 (n - 2) × 180°",
    "我知道正反方位角差 180°",
    "我熟記坐標正算：ΔN = D·cos(Az)，ΔE = D·sin(Az)",
    "我熟背全長閉合差公式 K = √(W_N² + W_E²)",
    "我知道導線精度格式為 1 / (∑D / K)",
    "我知道羅盤儀法平差改正數正負號必與閉合差相反 (-W)",
    "我能以頂點坐標交叉相乘鞋帶公式正確求得土地多邊形面積",
    "我能根據坐標差正負號正確判定所在象限求出方位角"
  ]
};
