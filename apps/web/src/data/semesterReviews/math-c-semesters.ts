import { SemesterReviewData } from './types';

export const mathCS1Review: SemesterReviewData = {
  id: "math-c-s1",
  subjectSlug: "math-c",
  subjectTitle: "數學 C",
  semesterCode: "s1",
  semesterTitle: "第一學期（高一上）",
  gradeLevel: 10,
  subtitle: "坐標幾何、式的運算、直線與圓、三角函數基本定理",
  category: "共同科目",
  curriculumScope: "108 課綱技術型高中數學 C 第一冊：坐標系與函數、式的運算與多項式、直線方程式與圓、三角函數定義與正餘弦定理",
  topicSlugs: ["functions-graphs", "algebra", "lines-circles", "trigonometry"],
  examAnalysis: {
    examWeight: "佔數學 C 統測約 24% ~ 28%（每年度約 6~7 題/25 題）",
    coreExamThemes: [
      "直線斜率與距離：點斜式 y - y₁ = m(x - x₁)、點到直線距離公式 d = |ax₀ + by₀ + c| / √(a² + b²)",
      "兩直線垂直與平行：平行則斜率相等 m₁ = m₂；垂直則斜率相乘等於負一 m₁ · m₂ = -1",
      "圓方程式：標準式 (x - h)² + (y - k)² = r²；圓與直線相切條件為圓心到直線距離 d 等於半徑 r",
      "三角函數基本定義與正負號：sinθ, cosθ, tanθ 在各象限正負號 (一全正、二正弦、三正切、四餘弦)",
      "正弦定理與餘弦定理：正弦 a/sinA = b/sinB = c/sinC = 2R；餘弦 a² = b² + c² - 2bc·cosA"
    ],
    recentTrends: "近年數學 C 第一冊題目強調幾何與代數結合，圓與切線、點到直線距離公式以及利用餘弦定理求三角形邊長與面積年年必出。",
    targetScoreAdvice: "點到直線距離公式與餘弦定理是滿分金鑰。公式務必背到反射程度，代入計算保持正負號清晰即可全拿。"
  },
  chapters: [
    {
      chapterNo: 1,
      title: "直線方程式、平行垂直斜率與點到直線距離",
      topicSlug: "lines-circles",
      examFrequency: 5,
      coreConcepts: [
        {
          heading: "直線斜率與方程式形式",
          explanation: "直線傾斜程度以斜率 m = (y₂ - y₁) / (x₂ - x₁) 描述：",
          keyPoints: [
            "點斜式：過點 (x₀, y₀) 且斜率為 m 之直線：y - y₀ = m(x - x₀)。",
            "斜截式：y = mx + b (b 為 y 截距)。",
            "兩直線關係：若 L₁: a₁x + b₁y + c₁ = 0, L₂: a₂x + b₂y + c₂ = 0：\n平行條件：a₁/a₂ = b₁/b₂ ≠ c₁/c₂ (斜率 m₁ = m₂)\n垂直條件：a₁a₂ + b₁b₂ = 0 (斜率 m₁ · m₂ = -1)"
          ]
        },
        {
          heading: "點到直線距離公式與兩平行線距離",
          explanation: "點 P(x₀, y₀) 到直線 L: ax + by + c = 0 之垂直最短距離：",
          keyPoints: [
            "點到直線距離：d(P, L) = |a·x₀ + b·y₀ + c| / √(a² + b²)。",
            "兩平行線距離：L₁: ax + by + c₁ = 0, L₂: ax + by + c₂ = 0，距離 d = |c₁ - c₂| / √(a² + b²)。"
          ]
        }
      ],
      formulaCard: {
        formula: "d = \\frac{|a x_0 + b y_0 + c|}{\\sqrt{a^2 + b^2}}, \\quad L_1 \\perp L_2 \\iff m_1 \\cdot m_2 = -1",
        meaning: "點到直線距離公式與垂直直線斜率關係",
        unit: "純量實數",
        cautions: "套用點到直線距離公式前，直線必須先整理成『一般式 ax + by + c = 0』！且兩平行線求距離時，x 與 y 的係數 (a, b) 必須先化為相同！",
        latex: "d(P, L) = \\frac{|a x_0 + b y_0 + c|}{\\sqrt{a^2 + b^2}}; \\quad d(L_1, L_2) = \\frac{|c_1 - c_2|}{\\sqrt{a^2 + b^2}}"
      },
      tables: [
        {
          title: "直線幾何關係與代數判別速查表",
          headers: ["兩直線關係", "斜率關係 (m₁, m₂)", "一般式係數比 (a, b, c)", "交點個數"],
          rows: [
            ["相交於一點", "m₁ ≠ m₂", "a₁/a₂ ≠ b₁/b₂", "恰有 1 個交點"],
            ["互相垂直 (Perpendicular)", "m₁ · m₂ = -1", "a₁a₂ + b₁b₂ = 0", "交於 1 點且夾角 90°"],
            ["互相平行 (Parallel)", "m₁ = m₂", "a₁/a₂ = b₁/b₂ ≠ c₁/c₂", "無交點 (0 個交點)"],
            ["重合為同一直線", "m₁ = m₂ 且截距同", "a₁/a₂ = b₁/b₂ = c₁/c₂", "無限多個交點"]
          ]
        }
      ],
      mustMasterChecklist: [
        "熟背點到直線距離公式 d = |ax₀+by₀+c| / √(a²+b²)",
        "熟記兩垂直線斜率乘積等於 -1 (m₁·m₂ = -1)",
        "知道求兩平行線距離前，必須將兩線 x, y 的係數調整一致"
      ]
    },
    {
      chapterNo: 2,
      title: "圓方程式、圓與直線位置關係及切線求法",
      topicSlug: "lines-circles",
      examFrequency: 5,
      coreConcepts: [
        {
          heading: "圓的標準式與一般式",
          explanation: "圓心為 (h, k)，半徑為 r 的圓：",
          keyPoints: [
            "標準式：(x - h)² + (y - k)² = r²。",
            "一般式：x² + y² + dx + ey + f = 0，圓心坐標 (-d/2, -e/2)，半徑 r = (1/2) · √(d² + e² - 4f)。判別式 d² + e² - 4f > 0 為真圓。"
          ]
        },
        {
          heading: "圓與直線之三大相對位置判別",
          explanation: "由圓心到直線之距離 d 與圓半徑 r 進行比較（幾何法最快！）：",
          keyPoints: [
            "相交於兩點（割線）：d < r。",
            "相切於一點（切線）：d = r（利用 d = r 可反求切線方程式或切線斜率 m）。",
            "相離不相交：d > r。"
          ]
        }
      ],
      formulaCard: {
        formula: "(x - h)^2 + (y - k)^2 = r^2, \\quad \\text{相切條件: } d(\\text{圓心}, L) = r",
        meaning: "圓標準式與圓線相切幾何條件",
        unit: "純量",
        cautions: "求切線時，若點在圓上，過該點僅有 1 條切線；若點在圓外，過該點必有 2 條切線（若只算出 1 個斜率 m，另一條必為鉛直切線 x = x₀）！",
        latex: "x x_0 + y y_0 + d\\frac{x+x_0}{2} + e\\frac{y+y_0}{2} + f = 0 \\text{ (圓上切線)}"
      },
      tables: [
        {
          title: "圓與直線幾何位置判別表",
          headers: ["圓心至直線距離 d 與半徑 r", "判別式 Δ (代數聯立)", "相交狀態", "幾何特徵"],
          rows: [
            ["d < r", "Δ > 0", "相割 (交於兩點)", "直線穿過圓內部，弦長 = 2√(r² - d²)"],
            ["d = r", "Δ = 0", "相切 (交於一點)", "直線為切線，圓心到切點半徑垂直切線"],
            ["d > r", "Δ < 0", "相離 (無交點)", "圓與直線完全分離，最短距離為 d - r"]
          ]
        }
      ],
      mustMasterChecklist: [
        "能由標準式直接讀出圓心 (h, k) 與半徑 r",
        "熟練使用 d = r 判定直線與圓相切",
        "知道弦長計算公式為 2 · √(r² - d²)"
      ]
    },
    {
      chapterNo: 3,
      title: "三角函數定義、特別角與正餘弦定理",
      topicSlug: "trigonometry",
      examFrequency: 5,
      coreConcepts: [
        {
          heading: "廣義角三角函數與平方關係",
          explanation: "在直角坐標系中，點 P(x, y) 距原點 r = √(x²+y²)：sinθ = y/r, cosθ = x/r, tanθ = y/x。",
          keyPoints: [
            "商數與平方關係：sin²θ + cos²θ = 1，tanθ = sinθ / cosθ，1 + tan²θ = sec²θ。",
            "象限正負號口訣：『一全正、二正弦、三正切、四餘弦』。"
          ]
        },
        {
          heading: "正弦定理 (Law of Sines) 與餘弦定理 (Law of Cosines)",
          explanation: "任意三角形 ABC 中，邊長 a, b, c 分別對應角 A, B, C，外接圓半徑為 R：",
          keyPoints: [
            "正弦定理：a / sinA = b / sinB = c / sinC = 2R。適用於已知『兩角一邊』或『兩邊與其中一對角』。",
            "餘弦定理：a² = b² + c² - 2bc · cosA；或 cosA = (b² + c² - a²) / (2bc)。適用於已知『三邊長求角』或『兩邊夾一角求第三邊』。",
            "三角形面積公式：Area = (1/2)ab · sinC = (abc) / (4R) = r · s（s 為半周長，r 為內切圓半徑）。"
          ]
        }
      ],
      formulaCard: {
        formula: "\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R, \\quad a^2 = b^2 + c^2 - 2 b c \\cos A",
        meaning: "正弦定理與餘弦定理",
        unit: "長度與角度",
        cautions: "餘弦定理求角度時，cosA < 0 代表 A 為鈍角 (> 90°)；cosA > 0 為銳角；cosA = 0 為直角 90°！",
        latex: "\\cos A = \\frac{b^2 + c^2 - a^2}{2 b c}; \\quad \\Delta = \\frac{1}{2} a b \\sin C"
      },
      tables: [
        {
          title: "正弦定理 vs 餘弦定理使用時機決策表",
          headers: ["題目已知條件型態", "優先採用定理", "求解未知目標", "運算核心公式"],
          rows: [
            ["已知兩邊及其夾角 (SAS)", "餘弦定理", "求解第三邊長 a", "a = √(b² + c² - 2bc·cosA)"],
            ["已知三角形三邊長 (SSS)", "餘弦定理", "求解任一內角角度", "cosA = (b² + c² - a²) / (2bc)"],
            ["已知兩角及任一邊 (ASA / AAS)", "正弦定理", "求解其餘邊長與外接圓半徑", "a / sinA = b / sinB = 2R"],
            ["已知兩邊與其中一對角 (SSA)", "正弦定理", "求解另一對角 (需注意鈍角二解)", "sinB = (b · sinA) / a"]
          ]
        }
      ],
      mustMasterChecklist: [
        "熟背 sin²θ + cos²θ = 1",
        "熟背正弦定理 a/sinA = b/sinB = c/sinC = 2R",
        "熟背餘弦定理 a² = b² + c² - 2bc·cosA",
        "熟背三角形面積 Area = (1/2)ab·sinC"
      ]
    }
  ],
  highFrequencyTraps: [
    {
      title: "【陷阱一】點到直線距離公式忘記帶入絕對值",
      trap: "計算點到直線距離時，分子算得負值直接寫出負距離。",
      solution: "距離恆為非負實數 (d ≥ 0)！分子必定帶有絕對值符號 |ax₀ + by₀ + c|！",
      relatedExamConcept: "點到直線距離 (115-數C-04)"
    },
    {
      title: "【陷阱二】餘弦定理計算鈍角時負號搞丟",
      trap: "求鈍角三角形中 cosA = -0.5，考生誤寫 A = 60°。",
      solution: "cosθ 在第二象限為負值！cos 60° = +0.5，cos 120° = -0.5！因此 cosA = -0.5 對應 A = 180° - 60° = 120°！",
      relatedExamConcept: "餘弦定理求角度 (114-數C-07)"
    }
  ],
  curatedPastQuestions: [
    {
      id: "115-數C-05",
      year: 115,
      questionNo: 5,
      examPaper: "共同科目 數學 C",
      stem: "在坐標平面上，已知直線 L: 3x - 4y + k = 0 與圓 C: (x - 1)² + (y + 2)² = 25 相切，且 k > 0。試求常數 k 之值為多少？",
      options: {
        A: "14",
        B: "16",
        C: "24",
        D: "39"
      },
      answer: "A",
      sopSteps: [
        {
          stepNo: 1,
          title: "讀出圓心與半徑",
          detail: "由圓方程式 (x - 1)² + (y + 2)² = 25 可知：圓心坐標 (h, k_c) = (1, -2)，半徑 r = √25 = 5。"
        },
        {
          stepNo: 2,
          title: "應用切線幾何條件 d = r",
          detail: "圓與直線相切，則圓心到直線 L 之垂直距離 d 必恰等於半徑 r = 5。"
        },
        {
          stepNo: 3,
          title: "代入點到直線距離公式",
          detail: "d = |3·(1) - 4·(-2) + k| / √(3² + (-4)²) = |3 + 8 + k| / √25 = |11 + k| / 5 = 5。"
        },
        {
          stepNo: 4,
          title: "解絕對值方程式",
          detail: "|11 + k| = 25 ⇒ 11 + k = 25 或 11 + k = -25 ⇒ k = 14 或 k = -36。"
        },
        {
          stepNo: 5,
          title: "依題目條件篩選並選答",
          detail: "題幹限定 k > 0，故 k = 14。選 (A)。"
        }
      ],
      examinerTrapNotes: "3-4-5 是最常見係數，分母必為 5。若考生誤將半徑代為 25，就會算出巨大數字卡住。",
      quickShortcut: "【秒殺模型：相切 d = r】|3(1) - 4(-2) + k| / 5 = 5 ⇒ |11 + k| = 25。因 k > 0，11 + k = 25 ⇒ k = 14，10 秒心算秒選 (A)！"
    }
  ],
  preExamChecklist: [
    "我熟記點到直線距離公式 d = |ax₀+by₀+c| / √(a²+b²)",
    "我知道兩垂直線斜率乘積等於 -1 (m₁·m₂ = -1)",
    "我熟練利用 d = r 求解圓與切線之未知常數",
    "我熟背正弦定理 a/sinA = b/sinB = 2R 與餘弦定理 a² = b² + c² - 2bc·cosA",
    "我知道餘弦值為負數時代表對應角為鈍角 (> 90°)"
  ]
};

export const mathCS2Review: SemesterReviewData = {
  id: "math-c-s2",
  subjectSlug: "math-c",
  subjectTitle: "數學 C",
  semesterCode: "s2",
  semesterTitle: "第二學期（高一下）",
  gradeLevel: 10,
  subtitle: "平面向量與內積、數列與級數、指數與對數運算",
  category: "共同科目",
  curriculumScope: "108 課綱技術型高中數學 C 第二冊：平面向量運算與內積、等差等比數列與級數、指數律與對數律運算",
  topicSlugs: ["vectors", "sequences-series", "exponents-logarithms", "trig-applications"],
  examAnalysis: {
    examWeight: "佔數學 C 統測約 24% ~ 28%（每年度約 6~7 題/25 題）",
    coreExamThemes: [
      "平面向量內積與長度：u·v = |u||v|cosθ = u₁v₁ + u₂v₂；向量垂直則內積為 0 (u·v = 0)",
      "柯西不等式 (Cauchy-Schwarz)：(a² + b²)(x² + y²) ≥ (ax + by)²，等號成立時 a/x = b/y",
      "數列與級數：等差前 n 項和 Sn = n(a₁ + an)/2；等比數列 an = a₁ · r^(n-1)，無窮等比級數 S = a / (1 - r) (|r| < 1)",
      "對數律運算：log_a(xy) = log_a(x) + log_a(y)，log_a(x/y) = log_a(x) - log_a(y)，換底公式 log_a(b) = (log b) / (log a)"
    ],
    recentTrends: "向量內積夾角與柯西不等式極值為每年固定必考大題；等比數列應用與對數比大小亦高頻出現。",
    targetScoreAdvice: "向量垂直內積為 0、柯西不等式代入格式化、對數拆解公式化，把握這三大題型可確保 S2 得分率。"
  },
  chapters: [
    {
      chapterNo: 1,
      title: "平面向量運算、內積、夾角與柯西不等式",
      topicSlug: "vectors",
      examFrequency: 5,
      coreConcepts: [
        {
          heading: "向量坐標表示與長度",
          explanation: "已知 A(x₁, y₁), B(x₂, y₂)，向量 AB = (x₂ - x₁, y₂ - y₁)，其長度 |AB| = √[(x₂ - x₁)² + (y₂ - y₁)²]。",
          keyPoints: [
            "單位向量：與 v 同方向之單位向量 e = v / |v|。",
            "向量加減幾何意義：三角形法與平行四邊形法則。"
          ]
        },
        {
          heading: "向量內積 (Dot Product) 與柯西不等式",
          explanation: "兩向量 u = (u₁, u₂), v = (v₁, v₂) 之內積定義為：u · v = |u||v|cosθ = u₁v₁ + u₂v₂。",
          keyPoints: [
            "垂直判定：u ⊥ v ⇔ u · v = 0 (兩非零向量垂直則內積必為零！)。",
            "夾角餘弦：cosθ = (u · v) / (|u||v|)。",
            "柯西不等式：(u₁² + u₂²)(v₁² + v₂²) ≥ (u₁v₁ + u₂v₂)²。"
          ]
        }
      ],
      formulaCard: {
        formula: "\\vec{u} \\cdot \\vec{v} = |\\vec{u}| |\\vec{v}| \\cos\\theta = u_1 v_1 + u_2 v_2, \\quad \\vec{u} \\perp \\vec{v} \\iff \\vec{u} \\cdot \\vec{v} = 0",
        meaning: "向量內積坐標公式與垂直條件",
        unit: "純量",
        cautions: "內積的結果是一個『純量 (數字)』，不是向量！兩個向量相乘不可寫成外積符號，純量結果必為數字！",
        latex: "(a^2 + b^2)(x^2 + y^2) \\ge (a x + b y)^2"
      },
      tables: [
        {
          title: "向量內積正負號與夾角幾何性質對照表",
          headers: ["內積符號 (u · v)", "餘弦值 cosθ", "兩向量夾角 θ 特徵", "幾何狀態"],
          rows: [
            ["u · v > 0", "cosθ > 0", "0° ≤ θ < 90° (銳角)", "兩向量朝大致相同方向"],
            ["u · v = 0", "cosθ = 0", "θ = 90° (直角)", "兩向量互相垂直 (u ⊥ v)"],
            ["u · v < 0", "cosθ < 0", "90° < θ ≤ 180° (鈍角)", "兩向量朝大致相反方向"],
            ["u · v = |u||v|", "cosθ = 1", "θ = 0° (同向平行)", "夾角為零，同方向"],
            ["u · v = -|u||v|", "cosθ = -1", "θ = 180° (反向平行)", "方向完全相反"]
          ]
        }
      ],
      mustMasterChecklist: [
        "熟背向量垂直條件：u·v = u₁v₁ + u₂v₂ = 0",
        "熟練用 cosθ = (u·v)/(|u||v|) 計算夾角",
        "熟練套用柯西不等式求最大值或最小值"
      ]
    },
    {
      chapterNo: 2,
      title: "數列與級數：等差等比與無窮級數收斂",
      topicSlug: "sequences-series",
      examFrequency: 5,
      coreConcepts: [
        {
          heading: "等差數列與級數 (Arithmetic Progression)",
          explanation: "後項減前項為公差 d (an = an-1 + d)：第 n 項 an = a₁ + (n - 1)d。",
          keyPoints: [
            "前 n 項和：Sn = n(a₁ + an) / 2 = n[ 2a₁ + (n - 1)d ] / 2。",
            "等差中項：若 a, b, c 成等差，則 b = (a + c) / 2。"
          ]
        },
        {
          heading: "等比數列與無窮等比級數 (Geometric Progression)",
          explanation: "後項除以前項為公比 r (an = a₁ · r^(n-1))：",
          keyPoints: [
            "前 n 項和：Sn = a₁(1 - rⁿ) / (1 - r) (r ≠ 1)。",
            "無窮等比級數收斂條件：『|r| < 1 (即 -1 < r < 1)』。其收斂和 S = a₁ / (1 - r)！若 |r| ≥ 1 則發散！"
          ]
        }
      ],
      formulaCard: {
        formula: "S_n = \\frac{n(a_1 + a_n)}{2}, \\quad S = \\frac{a_1}{1 - r} \\; (|r| < 1)",
        meaning: "等差級數前 n 項和與無窮等比級數和公式",
        unit: "純量",
        cautions: "無窮等比級數必須確認公比 |r| < 1 才能代入 a/(1-r)！若公比 r = 2，級數發散不存在總和！",
        latex: "S_\\infty = \\lim_{n\\to\\infty} \\frac{a_1(1-r^n)}{1-r} = \\frac{a_1}{1-r} \\quad (-1 < r < 1)"
      },
      tables: [
        {
          title: "等差與等比數列級數公式全對照表",
          headers: ["類型", "第 n 項 (an)", "前 n 項和 (Sn)", "中間項公式", "無窮級數收斂和"],
          rows: [
            ["等差數列 (AP)", "an = a₁ + (n-1)d", "Sn = n(a₁ + an) / 2", "b = (a + c) / 2", "發散 (不收斂)"],
            ["等比數列 (GP)", "an = a₁ · r^(n-1)", "Sn = a₁(1 - rⁿ)/(1 - r)", "b² = a · c (b = ±√(ac))", "S = a₁/(1 - r) 當 |r|<1"]
          ]
        }
      ],
      mustMasterChecklist: [
        "熟背等差總和公式 Sn = n(a₁ + an)/2",
        "熟背無窮等比級數收斂和 S = a₁ / (1 - r)",
        "清楚無窮等比級數收斂條件為 -1 < r < 1"
      ]
    },
    {
      chapterNo: 3,
      title: "指數律、對數律運算與對數首數尾數",
      topicSlug: "exponents-logarithms",
      examFrequency: 5,
      coreConcepts: [
        {
          heading: "指數律核心規則",
          explanation: "設 a > 0, b > 0，x, y 為實數：",
          keyPoints: [
            "a^x · a^y = a^(x+y)；a^x / a^y = a^(x-y)；(a^x)^y = a^(xy)。",
            "特殊定義：a⁰ = 1 (a ≠ 0)；a^(-n) = 1 / a^n；a^(1/n) = ⁿ√a。"
          ]
        },
        {
          heading: "對數律與換底公式",
          explanation: "若 a^y = x (a > 0, a ≠ 1, x > 0)，則 y = log_a(x)：",
          keyPoints: [
            "乘除拆分：log_a(xy) = log_a(x) + log_a(y)；log_a(x/y) = log_a(x) - log_a(y)。",
            "次方提出：log_a(x^k) = k · log_a(x)；log_(a^m)(x^n) = (n/m) · log_a(x)。",
            "換底公式：log_a(b) = (log_c b) / (log_c a)；常用倒數關係 log_a(b) = 1 / log_b(a)。"
          ]
        }
      ],
      formulaCard: {
        formula: "\\log_a(x y) = \\log_a x + \\log_a y, \\quad \\log_a\\left(\\frac{x}{y}\\right) = \\log_a x - \\log_a y, \\quad \\log_a b = \\frac{\\log_c b}{\\log_c a}",
        meaning: "對數乘除展開與換底公式",
        unit: "純量",
        cautions: "對數的真數必須為正數 (x > 0)，底數必須大於零且不等於 1 (a > 0, a ≠ 1)！切記 log(x + y) ≠ log(x) + log(y)！",
        latex: "a^{\\log_a x} = x; \\quad \\log_a(b) \\cdot \\log_b(c) = \\log_a(c)"
      },
      tables: [
        {
          title: "對數常見經典錯誤與正確法則對照表",
          headers: ["常見考生錯誤直覺", "正確數學關係", "診斷破題說明"],
          rows: [
            ["log(x + y) = log x + log y ❌", "log(x · y) = log x + log y ✅", "只有真數相乘，對數才能拆成相加"],
            ["log(x / y) = log x / log y ❌", "log(x / y) = log x - log y ✅", "真數相除，對數拆為相減"],
            ["(log x)^k = k · log x ❌", "log(x^k) = k · log x ✅", "必須是真數本身的次方 k 才能提到最前面"]
          ]
        }
      ],
      mustMasterChecklist: [
        "熟背對數拆分：真數乘變對數加，真數除變對數減",
        "熟背換底公式 log_a(b) = (log b) / (log a)",
        "熟記次方提出：log_(a^m)(b^n) = (n/m) · log_a(b)"
      ]
    }
  ],
  highFrequencyTraps: [
    {
      title: "【陷阱一】向量垂直與平行條件混淆",
      trap: "題目問兩向量垂直，考生卻列出交叉比例相等 (u₁/v₁ = u₂/v₂)。",
      solution: "交叉成比例是『平行 (Parallel)』條件！『垂直 (Perpendicular)』的條件永遠是『內積等於零 (u₁v₁ + u₂v₂ = 0)』！",
      relatedExamConcept: "向量垂直條件 (115-數C-09)"
    },
    {
      title: "【陷阱二】無窮等比級數公比大於 1 照套公式",
      trap: "公比 r = 2，首項 a₁ = 3，考生代入 a/(1-r) 算出 3/(1-2) = -3。",
      solution: "無窮等比級數只有在 |r| < 1 時才收斂！公比 r = 2 時級數發散，根本沒有總和，答案為發散無解！",
      relatedExamConcept: "等比級數收斂範圍 (114-數C-11)"
    }
  ],
  curatedPastQuestions: [
    {
      id: "115-數C-08",
      year: 115,
      questionNo: 8,
      examPaper: "共同科目 數學 C",
      stem: "已知平面上兩向量 u = (2, -3) 與 v = (k, 4)。若向量 u 與向量 v 互相垂直，則實數 k 之值為多少？",
      options: {
        A: "-6",
        B: "-4",
        C: "6",
        D: "8"
      },
      answer: "C",
      sopSteps: [
        {
          stepNo: 1,
          title: "確立垂直充要條件",
          detail: "兩非零向量互相垂直 (u ⊥ v) 之充要條件為其內積等於零：u · v = 0。"
        },
        {
          stepNo: 2,
          title: "展開坐標內積公式",
          detail: "u · v = u₁·v₁ + u₂·v₂ = 2·(k) + (-3)·(4) = 2k - 12。"
        },
        {
          stepNo: 3,
          title: "求解一元一次方程式",
          detail: "2k - 12 = 0 ⇒ 2k = 12 ⇒ k = 6。"
        },
        {
          stepNo: 4,
          title: "結論選答",
          detail: "k = 6，故選 (C)。"
        }
      ],
      examinerTrapNotes: "基本得分題。唯一失誤是把 -3 × 4 算成 +12 得到 k = -6 誤選 (A)。",
      quickShortcut: "【秒殺模型：內積為零】2k + (-12) = 0 ⇒ 2k = 12 ⇒ k = 6，3 秒秒殺 (C)！"
    }
  ],
  preExamChecklist: [
    "我熟記兩向量垂直充要條件為內積 u·v = 0",
    "我能以 cosθ = (u·v)/(|u||v|) 求解兩向量夾角",
    "我熟背無窮等比級數收斂和為 a₁ / (1 - r)，收斂條件為 |r| < 1",
    "我熟練對數律：log(xy) = logx + logy，換底公式 log_a(b) = logb / loga"
  ]
};
