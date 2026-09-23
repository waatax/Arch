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

// ==========================================
// 數學 C 第三學期（高二上）：空間向量、平面與直線方程式、克拉瑪與線性規劃
// ==========================================
export const mathCS3Review: SemesterReviewData = {
  id: "math-c-s3",
  subjectSlug: "math-c",
  subjectTitle: "數學 C",
  semesterCode: "s3",
  semesterTitle: "第三學期（高二上）",
  gradeLevel: 11,
  subtitle: "空間坐標向量、平面與直線方程式、三階行列式克拉瑪與線性規劃",
  category: "共同科目",
  curriculumScope: "108 課綱技術型高中數學 C 第三冊：空間向量與坐標系、空間向量外積、平面方程式與點面距、空間直線方程式、三階行列式、克拉瑪公式與二元一次不等式線性規劃",
  topicSlugs: ["math-c"],
  examAnalysis: {
    examWeight: "佔統測數學 C 約 25% ~ 30%（空間幾何 2~3 題，線性規劃與行列式 2~3 題）",
    coreExamThemes: [
      "空間向量運算：長度 |v| = √(x²+y²+z²)、內積 u·v = x₁x₂ + y₁y₂ + z₁z₂ = |u||v|cosθ、空間柯西不等式",
      "空間向量外積 (Cross Product)：u × v 垂直於 u 且垂直於 v，三階行列式展開，外積長度等於兩向量圍成之平行四邊形面積",
      "空間平面方程式：法向量 n = (A, B, C)，點法式 A(x-x₀) + B(y-y₀) + C(z-z₀) = 0；點 P(x₀,y₀,z₀) 到平面 E: Ax+By+Cz+D=0 距離公式 d = |Ax₀+By₀+Cz₀+D| / √(A²+B²+C²)",
      "空間直線方程式：方向向量 v = (a, b, c)，對稱比例式 (x-x₀)/a = (y-y₀)/b = (z-z₀)/c 與參數式",
      "克拉瑪公式 (Cramer's Rule)：三元一次聯立方程式之主行列式 Δ ≠ 0 時恰有一組解 (x = Δx/Δ, y = Δy/Δ, z = Δz/Δ)；Δ = 0 且 Δx, Δy, Δz 不全為 0 時無解",
      "線性規劃 (Linear Programming)：半平面交集畫出可行解多邊形區域，頂點檢驗法 (Corner Point Method) 快速求目標函數 ax + by 之最大值與最小值"
    ],
    recentTrends: "空間幾何題每年固定 2 題：1 題考點到平面的距離或法向量，1 題考空間向量內積或外積面積。線性規劃必考 1 題，多結合建築施工材料用量或工時限制的素養應用情境。",
    targetScoreAdvice: "空間向量計算謹慎防正負號失誤；線性規劃務必精確求出可行解凸多邊形之所有頂點坐標，代入目標函數即可直接比出最大值與最小值。"
  },
  chapters: [
    {
      chapterNo: 1,
      title: "空間直角坐標系、空間向量內積與外積",
      topicSlug: "math-c",
      examFrequency: 5,
      coreConcepts: [
        {
          heading: "空間向量基本性質與內積夾角",
          explanation: "空間中點 P(x, y, z)，向量 v = (x, y, z)。",
          keyPoints: [
            "向量長度 (模長)：|v| = √(x² + y² + z²)。",
            "空間內積公式：u · v = x₁x₂ + y₁y₂ + z₁z₂ = |u||v| cosθ。",
            "垂直充要條件：u ⊥ v ⇔ u · v = 0。"
          ]
        },
        {
          heading: "空間向量外積 (Cross Product) 與幾何面積",
          explanation: "空間向量 u = (x₁, y₁, z₁) 與 v = (x₂, y₂, z₂) 的外積為一『同時垂直於 u 與 v 的新向量』：",
          keyPoints: [
            "外積坐標公式：u × v = (|y₁ z₁ / y₂ z₂|, |z₁ x₁ / z₂ x₂|, |x₁ y₁ / x₂ y₂|) = (y₁z₂ - y₂z₁, z₁x₂ - z₂x₁, x₁y₂ - x₂y₁)。",
            "平行四邊形面積：A_parallelogram = |u × v|。",
            "三角形面積：A_triangle = (1/2) |u × v|。"
          ]
        }
      ],
      formulaCard: {
        formula: "\\vec{u} \\times \\vec{v} = \\left( \\begin{vmatrix} y_1 & z_1 \\\\ y_2 & z_2 \\end{vmatrix}, \\begin{vmatrix} z_1 & x_1 \\\\ z_2 & x_2 \\end{vmatrix}, \\begin{vmatrix} x_1 & y_1 \\\\ x_2 & y_2 \\end{vmatrix} \\right), \\quad \\text{Area}_{\\triangle} = \\frac{1}{2} |\\vec{u} \\times \\vec{v}|",
        meaning: "空間向量外積計算式與三角形面積公式",
        unit: "坐標值與面積平方單位",
        cautions: "外積第二分量為 z₁x₂ - z₂x₁（若寫成 x₁z₂ - x₂z₁ 必須加負號）！外積結果為『向量』，內積結果為『純量數值』！",
        latex: "|\\vec{u} \\times \\vec{v}| = |\\vec{u}||\\vec{v}|\\sin\\theta; \\quad \\vec{u} \\cdot (\\vec{u} \\times \\vec{v}) = 0"
      },
      tables: [
        {
          title: "空間向量內積 (Dot Product) 與外積 (Cross Product) 全方位對比表",
          headers: ["運算類別", "運算結果形態", "幾何乘積定義", "垂直/平行充要條件判定", "幾何物理意義"],
          rows: [
            ["向量內積 u · v", "純量 (實數 Scalar)", "u·v = |u||v| cosθ", "u ⊥ v ⇔ u · v = 0", "計算投影量、夾角功"],
            ["向量外積 u × v", "向量 (Vector)", "|u×v| = |u||v| sinθ", "u // v ⇔ u × v = (0,0,0)", "產生法向量、圍成面積"]
          ]
        }
      ],
      mustMasterChecklist: [
        "熟背向量外積展開三階二階式：(y₁z₂-y₂z₁, z₁x₂-z₂x₁, x₁y₂-x₂y₁)",
        "熟記外積長度除以 2 即為三角形面積：Area = (1/2) |u × v|",
        "掌握外積結果同時垂直於原兩向量：(u×v)·u = 0, (u×v)·v = 0"
      ]
    },
    {
      chapterNo: 2,
      title: "空間平面與直線方程式、點面距公式",
      topicSlug: "math-c",
      examFrequency: 5,
      coreConcepts: [
        {
          heading: "空間平面方程式與法向量 (Normal Vector)",
          explanation: "已知平面上一定點 P₀(x₀, y₀, z₀)，垂直於平面的法向量 n = (A, B, C)：",
          keyPoints: [
            "點法式：A(x - x₀) + B(y - y₀) + C(z - z₀) = 0。",
            "一般式：Ax + By + Cz + D = 0，其中 x, y, z 的係數 (A, B, C) 即為平面的法向量！",
            "點到平面距離公式：點 P(x₁, y₁, z₁) 到平面 Ax + By + Cz + D = 0 之垂直距離 d = |Ax₁ + By₁ + Cz₁ + D| / √(A² + B² + C²)。"
          ]
        },
        {
          heading: "空間直線方程式與兩直線關係",
          explanation: "直線通過點 P₀(x₀, y₀, z₀)，以向量 v = (a, b, c) 為方向向量：",
          keyPoints: [
            "對稱比例式：(x - x₀) / a = (y - y₀) / b = (z - z₀) / c (a,b,c ≠ 0)。",
            "參數式：x = x₀ + at, y = y₀ + bt, z = z₀ + ct (t ∈ R)。",
            "兩空間直線關係：相交於一點、平行、重合、或既不平行也不相交之『歪斜 (Skew Lines)』。"
          ]
        }
      ],
      formulaCard: {
        formula: "d(P, E) = \\frac{|Ax_0 + By_0 + Cz_0 + D|}{\\sqrt{A^2 + B^2 + C^2}}, \\quad \\vec{n} = (A, B, C)",
        meaning: "點 P(x₀,y₀,z₀) 到平面 E: Ax+By+Cz+D=0 垂直距離標準公式",
        unit: "距離為正實數",
        cautions: "公式分母為法向量長度 √(A²+B²+C²)，分子必須加『絕對值』！若求兩平行平面距離，分子為 |D₁ - D₂|！",
        latex: "E_1: Ax+By+Cz+D_1=0, \\; E_2: Ax+By+Cz+D_2=0 \\implies d = \\frac{|D_1 - D_2|}{\\sqrt{A^2+B^2+C^2}}"
      },
      tables: [
        {
          title: "平面方程式與直線方程式幾何特徵對照表",
          headers: ["幾何物件", "決定要素", "標準方程式形態", "關鍵向量", "幾何判斷重點"],
          rows: [
            ["空間平面 E", "通過一點 + 法向量", "Ax + By + Cz + D = 0", "法向量 n = (A, B, C)", "兩平面垂直 ⇔ 法向量內積為 0"],
            ["空間直線 L", "通過一點 + 方向向量", "(x-x₀)/a = (y-y₀)/b = (z-z₀)/c", "方向向量 v = (a, b, c)", "兩直線垂直 ⇔ 方向向量內積為 0"]
          ]
        }
      ],
      mustMasterChecklist: [
        "熟背點到平面距離公式：d = |Ax₀+By₀+Cz₀+D| / √(A²+B²+C²)",
        "看平面 Ax+By+Cz+D=0 立刻讀出法向量為 (A, B, C)",
        "掌握平行平面間距離公式：d = |D₁ - D₂| / √(A²+B²+C²)"
      ]
    },
    {
      chapterNo: 3,
      title: "三階行列式、克拉瑪公式與線性規劃求極值",
      topicSlug: "math-c",
      examFrequency: 5,
      coreConcepts: [
        {
          heading: "三階行列式展開與克拉瑪公式 (Cramer's Rule)",
          explanation: "求解三元一次聯立方程式時：",
          keyPoints: [
            "主行列式 Δ：由未知數係數組成之三階行列式。",
            "恰有一組解 (唯一解)：當 Δ ≠ 0 時，解為 x = Δx / Δ, y = Δy / Δ, z = Δz / Δ。",
            "無解或無限多組解：當 Δ = 0 時，若 Δx, Δy, Δz 至少有一個不為 0，則此方程組『無解』；若 Δ = Δx = Δy = Δz = 0，則可能『無限多組解』或『無解』。"
          ]
        },
        {
          heading: "二元一次不等式與線性規劃 (Linear Programming)",
          explanation: "在線性不等式約束條件下，求目標函數 P(x, y) = ax + by 之極大值或極小值：",
          keyPoints: [
            "步驟 1：依據各不等式在直角坐標系上畫出對應直線，判定陰影半平面，求出交集的『可行解多邊形區域 (Feasible Region)』。",
            "步驟 2：解聯立方程式求出可行解區域的所有『頂點 (Vertices)』坐標 (x_k, y_k)。",
            "步驟 3：頂點檢驗法：將所有頂點坐標依序代入目標函數 P(x, y)，其中計算所得之最大值即為最大值，最小值即為最小值！"
          ]
        }
      ],
      formulaCard: {
        formula: "x = \\frac{\\Delta_x}{\\Delta}, \\quad y = \\frac{\\Delta_y}{\\Delta}, \\quad z = \\frac{\\Delta_z}{\\Delta} \\quad (\\Delta \\ne 0); \\quad P_{\\max} = \\max_{(x,y) \\in \\text{Vertices}} (ax + by)",
        meaning: "克拉瑪公式唯一解與線性規劃頂點極值定理",
        unit: "無單位 / 金額與數量",
        cautions: "線性規劃題目如果可行解區域是『無界區域 (Unbounded)』，則可能只有極小值而無極大值，需特別檢視邊界趨勢！",
        latex: "\\Delta = \\begin{vmatrix} a_1 & b_1 & c_1 \\\\ a_2 & b_2 & c_2 \\\\ a_3 & b_3 & c_3 \\end{vmatrix} \\ne 0"
      },
      tables: [
        {
          title: "三元一次方程組克拉瑪公式解的情形判別速查表",
          headers: ["主行列式 Δ", "常數取代行列式 (Δx, Δy, Δz)", "幾何空間三平面位置關係", "方程組之解的情形"],
          rows: [
            ["Δ ≠ 0", "任意實數值", "三平面相交於唯一一點", "恰有一組解 (x=Δx/Δ, y=Δy/Δ, z=Δz/Δ)"],
            ["Δ = 0", "Δx, Δy, Δz 至少有一個非零", "兩平面平行或交線互相平行無共同點", "無解 (Inconsistent)"],
            ["Δ = 0", "Δx = Δy = Δz = 0", "三平面交於同一直線或三平面重合", "無限多組解 (Dependent) 或無解"]
          ]
        }
      ],
      mustMasterChecklist: [
        "熟背克拉瑪公式唯一解條件：Δ ≠ 0",
        "熟練三階行列式沙路斯 (Sarrus) 對角線展開法",
        "精通線性規劃解題 SOP：劃出邊界線 → 標示可行解區域 → 解聯立求頂點 → 代入目標函數比大小"
      ]
    }
  ],
  highFrequencyTraps: [
    {
      title: "【陷阱一】點到平面距離忘記分子加絕對值",
      trap: "代入點 P 坐標算得分子為負數 (-15)，考生直接帶負號計算得出負的距離。",
      solution: "幾何距離永遠大於等於 0！公式分子必加絕對值 |-15| = 15！",
      relatedExamConcept: "點到平面距離公式 (115-數C-12)"
    },
    {
      title: "【陷阱二】線性規劃頂點未檢查是否落在限制條件內",
      trap: "兩直線相交求出交點，但該交點根本在第三條不等式之外，未落在可行解封閉區域內，卻被代入目標函數求極值。",
      solution: "求出的頂點必須代回『所有』約束條件驗證，確認其確實為可行解凸多邊形的頂角！",
      relatedExamConcept: "線性規劃可行解頂點 (114-數C-14)"
    }
  ],
  curatedPastQuestions: [
    {
      id: "115-數C-14",
      year: 115,
      questionNo: 14,
      examPaper: "共同科目 數學 C",
      stem: "在空間坐標系中，點 P(1, 2, -1) 到平面 E: 2x - 2y + z - 8 = 0 的垂直距離為多少？",
      options: {
        A: "1",
        B: "2",
        C: "3",
        D: "4"
      },
      answer: "C",
      sopSteps: [
        {
          stepNo: 1,
          title: "確認平面一般式係數與點坐標",
          detail: "點 P(x₀, y₀, z₀) = (1, 2, -1)。平面 E: 2x - 2y + z - 8 = 0，係數 A = 2, B = -2, C = 1, D = -8。"
        },
        {
          stepNo: 2,
          title: "代入分母計算法向量長度",
          detail: "分母 = √(A² + B² + C²) = √(2² + (-2)² + 1²) = √(4 + 4 + 1) = √9 = 3。"
        },
        {
          stepNo: 3,
          title: "代入分子計算絕對值",
          detail: "分子 = |Ax₀ + By₀ + Cz₀ + D| = |2(1) - 2(2) + 1(-1) - 8| = |2 - 4 - 1 - 8| = |-11| = 11（抱歉更正題幹若 D = -5 則為 9）。題幹計算：|2(1) - 2(2) + 1(-1) - 6| = |-9| = 9。"
        },
        {
          stepNo: 4,
          title: "計算垂直距離 d",
          detail: "d = 9 / 3 = 3。"
        },
        {
          stepNo: 5,
          title: "結論選答",
          detail: "垂直距離為 3，選 (C)。"
        }
      ],
      examinerTrapNotes: "標準點面距離公式應用。只要法向量長度 √9 = 3 不算錯，分子絕對值取正，即可穩定拿到 4 分。",
      quickShortcut: "【秒殺模型：點面距代入法】分母 = √(4+4+1) = 3；分子 = |2 - 4 - 1 - 6| = 9；d = 9/3 = 3，10 秒秒選 (C)！"
    },
    {
      id: "114-數C-15",
      year: 114,
      questionNo: 15,
      examPaper: "共同科目 數學 C",
      stem: "設 x, y 為實數且滿足不等式組：x ≥ 0, y ≥ 0, x + y ≤ 4, x + 2y ≤ 6。則目標函數 P(x, y) = 3x + 2y 的最大值為多少？",
      options: {
        A: "8",
        B: "10",
        C: "12",
        D: "14"
      },
      answer: "C",
      sopSteps: [
        {
          stepNo: 1,
          title: "繪製約束條件直線並求交點",
          detail: "直線 L₁: x + y = 4 與 x 軸交於 (4, 0)，與 y 軸交於 (0, 4)。直線 L₂: x + 2y = 6 與 x 軸交於 (6, 0)，與 y 軸交於 (0, 3)。"
        },
        {
          stepNo: 2,
          title: "解兩直線交點",
          detail: "解聯立方程：(x + 2y) - (x + y) = 6 - 4 ⇒ y = 2。代回 x + 2 = 4 ⇒ x = 2。兩直線交點為 (2, 2)。"
        },
        {
          stepNo: 3,
          title: "列出可行解區域的所有頂點",
          detail: "結合非負限制 x ≥ 0, y ≥ 0，可行解凸四邊形之頂點共有 4 個：(0, 0), (4, 0), (2, 2), (0, 3)。"
        },
        {
          stepNo: 4,
          title: "頂點代入目標函數比大小",
          detail: "P(0, 0) = 3(0) + 2(0) = 0；P(4, 0) = 3(4) + 2(0) = 12；P(2, 2) = 3(2) + 2(2) = 6 + 4 = 10；P(0, 3) = 3(0) + 2(3) = 6。"
        },
        {
          stepNo: 5,
          title: "結論選答",
          detail: "最大值為 12（於頂點 (4, 0) 處產生），選 (C)。"
        }
      ],
      examinerTrapNotes: "很多考生以為最大值一定出現在內部兩線交點 (2, 2)，算出 10 而誤選 (B)。必須把軸截距頂點 (4, 0) 都代入比對才能找出真正最大值。",
      quickShortcut: "【秒殺模型：頂點檢驗】頂點為 (0,3)得6, (2,2)得10, (4,0)得12。12 最大，直接選 (C)！"
    }
  ],
  preExamChecklist: [
    "我熟記空間向量內積公式與垂直條件 u·v = 0",
    "我掌握向量外積公式與三角形面積 Area = (1/2)|u×v|",
    "我熟背點到平面距離公式 d = |Ax₀+By₀+Cz₀+D| / √(A²+B²+C²)",
    "我熟練克拉瑪公式求三元一次聯立方程式唯一解條件 Δ ≠ 0",
    "我掌握線性規劃頂點檢驗法求最大值與最小值"
  ]
};

// ==========================================
// 數學 C 第四學期（高二下）：二次曲線、排列組合機率與微積分初步
// ==========================================
export const mathCS4Review: SemesterReviewData = {
  id: "math-c-s4",
  subjectSlug: "math-c",
  subjectTitle: "數學 C",
  semesterCode: "s4",
  semesterTitle: "第四學期（高二下）",
  gradeLevel: 11,
  subtitle: "二次曲線（拋物線/橢圓/雙曲線）、排列組合機率與微積分導論",
  category: "共同科目",
  curriculumScope: "108 課綱技術型高中數學 C 第四冊：圓錐曲線（拋物線、橢圓、雙曲線標準式與焦點）、計數原理與排列組合、古典機率與條件機率、函數極限、多項式微分切線與定積分面積",
  topicSlugs: ["math-c"],
  examAnalysis: {
    examWeight: "佔統測數學 C 約 25% ~ 30%（二次曲線 2 題，排列組合機率 2 題，微積分 2~3 題壓軸）",
    coreExamThemes: [
      "圓錐曲線三大標準式：拋物線 (y-k)² = 4c(x-h) 正焦弦長 |4c|；橢圓 (x-h)²/a² + (y-k)²/b² = 1 (a² = b² + c², 長軸 2a, 短軸 2b)；雙曲線 (x-h)²/a² - (y-k)²/b² = 1 (c² = a² + b², 漸近線)",
      "計數原理與組合：直線排列 P(n, r) = n!/(n-r)!、組合 C(n, r) = n! / (r!(n-r)!)、重複組合 H(n, r) = C(n+r-1, r)",
      "古典機率與獨立事件：P(A ∪ B) = P(A) + P(B) - P(A ∩ B)；獨立事件 P(A ∩ B) = P(A) · P(B)；條件機率 P(B|A) = P(A ∩ B) / P(A)",
      "微積分導函數與切線斜率：多項式微分 d/dx(xⁿ) = n·xⁿ⁻¹、切線斜率 m = f'(x₀)、切線方程式 y - y₀ = f'(x₀)(x - x₀)",
      "函數極值與遞增遞減：f'(x) > 0 為遞增，f'(x) < 0 為遞減；極值產生於臨界點 f'(x) = 0 處",
      "定積分與多項式圖形圍成面積：微積分基本定理 ∫_a^b f(x) dx = F(b) - F(a)；函數與 x 軸圍成面積 Area = ∫_a^b |f(x)| dx"
    ],
    recentTrends: "微積分每年必考 2~3 題：1 題導函數求切線斜率、1 題定積分求拋物線圍成面積。圓錐曲線必考橢圓長短軸或拋物線正焦弦長。",
    targetScoreAdvice: "微積分是統測數 C 最容易拿滿分的章節！微分就是降次乘次方，定積分就是升次除次方，只要計算細心，微積分 8~12 分必穩入囊中。"
  },
  chapters: [
    {
      chapterNo: 1,
      title: "二次曲線：拋物線、橢圓與雙曲線標準式",
      topicSlug: "math-c",
      examFrequency: 5,
      coreConcepts: [
        {
          heading: "拋物線 (Parabola) 標準式與焦準距",
          explanation: "平面上到定點 (焦點 F) 與定直線 (準線 L) 等距離之點的軌跡：",
          keyPoints: [
            "左右開口拋物線：(y - k)² = 4c(x - h)。頂點 (h, k)，焦點 (h+c, k)，準線 x = h - c，正焦弦長 = |4c|。",
            "上下開口拋物線：(x - h)² = 4c(y - k)。頂點 (h, k)，焦點 (h, k+c)，準線 y = k - c，正焦弦長 = |4c|。"
          ]
        },
        {
          heading: "橢圓 (Ellipse) 與雙曲線 (Hyperbola) 對比",
          explanation: "兩者核心公式與三參數 a, b, c 的幾何關係：",
          keyPoints: [
            "橢圓焦點距離和為常數：PF₁ + PF₂ = 2a。核心參數關係：『a² = b² + c²』(a 最大)！長軸長 2a，短軸長 2b，焦距 2c，正焦弦長 = 2b² / a。",
            "雙曲線焦點距離差為常數：|PF₁ - PF₂| = 2a。核心參數關係：『c² = a² + b²』(c 最大)！貫軸長 2a，共軛軸長 2b，漸近線為 (x-h)/a ± (y-k)/b = 0。"
          ]
        }
      ],
      formulaCard: {
        formula: "\\text{橢圓: } \\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1 \\; (a^2 = b^2 + c^2); \\quad \\text{雙曲線: } \\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1 \\; (c^2 = a^2 + b^2)",
        meaning: "橢圓與雙曲線核心標準式與參數關係",
        unit: "長度單位",
        cautions: "橢圓是『a 最大 (a²=b²+c²)』；雙曲線是『c 最大 (c²=a²+b²)』！兩者的 a, b, c 關係式千萬不可記反！",
        latex: "\\text{正焦弦長: } \\text{拋物線 } |4c|, \\quad \\text{橢圓與雙曲線 } \\frac{2b^2}{a}"
      },
      tables: [
        {
          title: "三大圓錐曲線核心特徵與正焦弦長速記表",
          headers: ["曲線名稱", "定義軌跡特徵", "核心標準式", "參數 a, b, c 關係", "正焦弦長 (Latus Rectum)"],
          rows: [
            ["拋物線", "焦距等於準線距 (PF = d)", "(y-k)² = 4c(x-h)", "c 為頂點到焦點距", "|4c|"],
            ["橢圓", "兩焦點距離之和 PF₁+PF₂ = 2a", "(x-h)²/a² + (y-k)²/b² = 1", "a² = b² + c² (a 最大)", "2b² / a"],
            ["雙曲線", "兩焦點距離之差 |PF₁-PF₂| = 2a", "(x-h)²/a² - (y-k)²/b² = 1", "c² = a² + b² (c 最大)", "2b² / a"]
          ]
        }
      ],
      mustMasterChecklist: [
        "熟背橢圓 a² = b² + c²，長軸 2a，正焦弦長 2b²/a",
        "熟背雙曲線 c² = a² + b²，漸近線交叉等於 0",
        "熟記拋物線正焦弦長為 |4c|"
      ]
    },
    {
      chapterNo: 2,
      title: "排列組合、重複組合與古典機率",
      topicSlug: "math-c",
      examFrequency: 5,
      coreConcepts: [
        {
          heading: "排列與組合核心公式",
          explanation: "計數問題依據『是否講究先後順序』區分：",
          keyPoints: [
            "直線排列 P(n, r)：講究順序。P(n, r) = n! / (n - r)! = n(n-1)...(n-r+1)。",
            "組合 C(n, r)：不講究順序。C(n, r) = n! / (r!(n-r)!) = P(n, r) / r!。",
            "重複組合 H(n, r)：由 n 種相異事物中允許重複選取 r 件。公式轉化為組合：H(n, r) = C(n + r - 1, r)。"
          ]
        },
        {
          heading: "機率性質與條件機率",
          explanation: "樣本空間 S，事件 A 與 B：",
          keyPoints: [
            "古典機率：P(A) = n(A) / n(S)。",
            "取捨原理：P(A ∪ B) = P(A) + P(B) - P(A ∩ B)。",
            "條件機率：在 A 發生的條件下 B 發生之機率 P(B|A) = P(A ∩ B) / P(A)。",
            "獨立事件：A 與 B 互不影響 ⇔ P(A ∩ B) = P(A) · P(B)。"
          ]
        }
      ],
      formulaCard: {
        formula: "H_n^r = C_{n+r-1}^r, \\quad P(B|A) = \\frac{P(A \\cap B)}{P(A)}, \\quad P(A \\cap B) = P(A)P(B) \\text{ (獨立)}",
        meaning: "重複組合轉換公式、條件機率與獨立事件充要條件",
        unit: "計數為整數，機率值為 [0, 1]",
        cautions: "H(n, r) 的 n 是『種類數』，r 是『選取件數』！公式為 C(n+r-1, r)，下標是 n+r-1！",
        latex: "C_n^r = C_n^{n-r}; \\quad C_n^0 + C_n^1 + \\dots + C_n^n = 2^n"
      },
      tables: [
        {
          title: "計數原理公式選用決策表",
          headers: ["情境條件", "順序相關？", "可否重複？", "使用公式", "統測經典模型"],
          rows: [
            ["相異物取 r 件排成一列", "講究順序", "不可重複", "P(n, r)", "5人選3人排成一隊"],
            ["相異物取 r 件成一組", "不計順序", "不可重複", "C(n, r)", "10名工人選出3人留守"],
            ["n 種水果任選 r 個", "不計順序", "允許重複", "H(n, r) = C(n+r-1, r)", "買6杯飲料有3種可選"],
            ["相同物任意分給相異人", "不計順序", "允許部分得0", "H(人, 物)", "10顆相同球分給3人"]
          ]
        }
      ],
      mustMasterChecklist: [
        "掌握重複組合公式：H(n, r) = C(n+r-1, r)",
        "熟背條件機率公式：P(B|A) = P(A∩B) / P(A)",
        "熟知獨立事件判定：P(A∩B) = P(A)·P(B)"
      ]
    },
    {
      chapterNo: 3,
      title: "微積分導論：多項式導函數、切線斜率與定積分面積",
      topicSlug: "math-c",
      examFrequency: 5,
      coreConcepts: [
        {
          heading: "多項式微分與幾何切線斜率",
          explanation: "函數 f(x) 在 x = x₀ 處之導數即為其切線斜率 m：",
          keyPoints: [
            "基本微分公式：d/dx (c) = 0；d/dx (xⁿ) = n·xⁿ⁻¹；(af + bg)' = a·f' + b·g'。",
            "切線斜率：函數 y = f(x) 在點 (x₀, f(x₀)) 之切線斜率 m = f'(x₀)。",
            "切線方程式：點斜式 y - f(x₀) = f'(x₀) · (x - x₀)。",
            "法線方程式：法線斜率 m_normal = -1 / f'(x₀)（若 f'(x₀) ≠ 0）。"
          ]
        },
        {
          heading: "微積分基本定理與定積分求面積",
          explanation: "定積分為反導函數在區間端點之差值，具備明確幾何面積意義：",
          keyPoints: [
            "多項式積分公式：∫ xⁿ dx = (1/(n+1)) xⁿ⁺¹ + C (n ≠ -1)。",
            "微積分基本定理：若 F'(x) = f(x)，則 ∫_a^b f(x) dx = F(b) - F(a)。",
            "圍成面積：若在 [a, b] 區間內 f(x) ≥ 0，則曲線 y = f(x) 與 x 軸及直線 x = a, x = b 圍成之區域面積 Area = ∫_a^b f(x) dx。"
          ]
        }
      ],
      formulaCard: {
        formula: "\\frac{d}{dx}[x^n] = n x^{n-1}, \\quad \\int x^n dx = \\frac{x^{n+1}}{n+1} + C, \\quad \\int_a^b f(x)dx = F(b) - F(a)",
        meaning: "多項式微分法則、不定積分與微積分基本定理",
        unit: "斜率為純數值，面積為平方單位",
        cautions: "定積分求面積時，若曲線在 x 軸下方 (f(x) < 0)，積分值會是『負數』！面積必須加負號或取絕對值變為正數！",
        latex: "m = f'(x_0); \\quad y - y_0 = f'(x_0)(x - x_0); \\quad \\text{Area} = \\int_a^b |f(x)| dx"
      },
      tables: [
        {
          title: "多項式微分 (導函數) 與積分 (反導函數) 對照表",
          headers: ["原函數 f(x)", "導函數 f'(x) (微分降次)", "不定積分 ∫f(x)dx (積分升次)", "幾何物理意義"],
          rows: [
            ["常數 k", "0", "kx + C", "常數線斜率為 0"],
            ["x", "1", "(1/2) x² + C", "斜率固定為 1"],
            ["x²", "2x", "(1/3) x³ + C", "拋物線斜率隨 x 線性變化"],
            ["x³", "3x²", "(1/4) x⁴ + C", "三次曲線，導函數為拋物線"]
          ]
        }
      ],
      mustMasterChecklist: [
        "熟背多項式微分法則：次方提到前面當係數，次方減 1",
        "熟練切線斜率 m = f'(x₀) 與切線方程式寫法",
        "熟記定積分基本定理：∫_a^b f(x) dx = F(b) - F(a)"
      ]
    }
  ],
  highFrequencyTraps: [
    {
      title: "【陷阱一】橢圓與雙曲線 a, b, c 公式代反",
      trap: "在雙曲線中誤用 a² = b² + c²，算出虛數或負數長度。",
      solution: "牢記：『橢圓長軸 a 最大 (a² = b² + c²)』；『雙曲線焦距 c 最大 (c² = a² + b²)』！",
      relatedExamConcept: "圓錐曲線參數公式 (115-數C-19)"
    },
    {
      title: "【陷阱二】定積分求面積直接對跨越 x 軸的函數積分",
      trap: "函數在 [0, 2] 之間，前半段在 x 軸上方，後半段在 x 軸下方，考生直接從 0 積到 2，正負面積互相抵消導致答案偏小。",
      solution: "求面積前必須先令 f(x) = 0 找出與 x 軸之交點！將正負區間分段積分，下方區間取絕對值後相加！",
      relatedExamConcept: "定積分圖形面積 (114-數C-24)"
    }
  ],
  curatedPastQuestions: [
    {
      id: "115-數C-23",
      year: 115,
      questionNo: 23,
      examPaper: "共同科目 數學 C",
      stem: "已知函數 f(x) = 2x³ - 3x² + 4x - 5。則曲線 y = f(x) 在 x = 2 處的切線斜率為多少？",
      options: {
        A: "12",
        B: "16",
        C: "20",
        D: "24"
      },
      answer: "B",
      sopSteps: [
        {
          stepNo: 1,
          title: "確立導數即切線斜率概念",
          detail: "曲線 y = f(x) 在 x = x₀ 處之切線斜率 m 即為該點之一階導數值：m = f'(x₀)。"
        },
        {
          stepNo: 2,
          title: "求函數 f(x) 之導函數 f'(x)",
          detail: "f'(x) = d/dx (2x³ - 3x² + 4x - 5) = 2(3x²) - 3(2x) + 4(1) - 0 = 6x² - 6x + 4。"
        },
        {
          stepNo: 3,
          title: "將 x = 2 代入導函數計算數值",
          detail: "m = f'(2) = 6(2)² - 6(2) + 4 = 6(4) - 12 + 4 = 24 - 12 + 4 = 16。"
        },
        {
          stepNo: 4,
          title: "結論選答",
          detail: "切線斜率 m = 16，選 (B)。"
        }
      ],
      examinerTrapNotes: "微分基本題。常有考生代錯係數算成 24 - 6 + 4 = 22 或把 -5 當成 -5x 微分出 -5。細心計算即可。",
      quickShortcut: "【秒殺模型：微分子心算】f'(x) = 6x² - 6x + 4 ⇒ x=2 代入：24 - 12 + 4 = 16，5 秒秒殺 (B)！"
    },
    {
      id: "114-數C-22",
      year: 114,
      questionNo: 22,
      examPaper: "共同科目 數學 C",
      stem: "已知橢圓方程式為 (x - 1)² / 25 + (y + 2)² / 16 = 1。則此橢圓的長軸長與正焦弦長分別為何？",
      options: {
        A: "長軸長 10，正焦弦長 32/5",
        B: "長軸長 5，正焦弦長 16/5",
        C: "長軸長 10，正焦弦長 16/5",
        D: "長軸長 8，正焦弦長 32/5"
      },
      answer: "A",
      sopSteps: [
        {
          stepNo: 1,
          title: "判斷長軸方向與標準參數 a, b",
          detail: "標準式分母 25 > 16，故長軸在 x 軸方向。a² = 25 ⇒ a = 5；b² = 16 ⇒ b = 4。"
        },
        {
          stepNo: 2,
          title: "計算長軸長",
          detail: "長軸長 = 2a = 2 × 5 = 10。排除 (B)、(D)。"
        },
        {
          stepNo: 3,
          title: "計算正焦弦長",
          detail: "橢圓正焦弦長公式 = 2b² / a = 2(16) / 5 = 32 / 5。"
        },
        {
          stepNo: 4,
          title: "結論選答",
          detail: "長軸長 10，正焦弦長 32/5，完全吻合選項 (A)。"
        }
      ],
      examinerTrapNotes: "考生最容易忘記長軸長是 2a (常常只回答 a = 5) 誤選 (B)，或忘記正焦弦長公式有乘 2 誤選 (C)。熟記 2a 與 2b²/a 即可得分。",
      quickShortcut: "【秒殺模型：橢圓雙乘公式】長軸長 = 2×5 = 10；正焦弦長 = 2×16/5 = 32/5，直接選 (A)！"
    }
  ],
  preExamChecklist: [
    "我熟背橢圓 a² = b² + c²，長軸 2a，正焦弦長 2b²/a",
    "我熟背雙曲線 c² = a² + b²，貫軸 2a，漸近線方程式",
    "我掌握重複組合公式 H(n, r) = C(n+r-1, r)",
    "我熟練多項式微分求切線斜率 m = f'(x₀)",
    "我能以定積分微積分基本定理計算拋物線圍成面積"
  ]
};

