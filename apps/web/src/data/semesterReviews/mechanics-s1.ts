import { SemesterReviewData } from './types';

export const mechanicsS1Review: SemesterReviewData = {
  id: "mechanics-s1",
  subjectSlug: "mechanics",
  subjectTitle: "基礎工程力學",
  semesterCode: "s1",
  semesterTitle: "第一學期（高一上）",
  gradeLevel: 10,
  subtitle: "力系平衡、摩擦力學與工程結構安全哲學",
  category: "專業科目（一）",
  curriculumScope: "108 課綱土木建築群力學第 1~4 章：緒論與向量、平面力系（共點/平行/非共點非平行）、摩擦力與空間力系基礎",
  topicSlugs: [
    "structural-failures",
    "units-vectors",
    "force-equilibrium",
    "parallel-force-systems",
    "nonconcurrent-force-systems",
    "friction",
    "spatial-force-systems"
  ],
  examAnalysis: {
    examWeight: "佔專業科目（一）約 40% ~ 45%（每年度約 16~18 題/40 題）",
    coreExamThemes: [
      "平面共點力平衡：拉密定理 (Lami's Theorem) 與正交分解法",
      "平面非共點力系：三力平衡必共點或平行性質、支承反力求解",
      "分布載重等值化：均布載重與三角形載重等值集中力大小與形心作用點",
      "摩擦力臨界滑動：摩擦角 φ = tan⁻¹(μ) 與斜面物體下滑條件判別",
      "空間力系投影：力在空間直角坐標系投影與力矩右手定則"
    ],
    recentTrends: "近年命題強調『生活工程情境化』與『圖像幾何分析』，減少純代數繁瑣運算，著重力線作用、未知反力幾何判讀與臨界滑動/傾倒之雙重破壞檢核。",
    targetScoreAdvice: "力學 S1 屬於得分基石，各題型計算步驟固定。只要掌握 FBD (自由體圖) 規範畫法與對未知力交點取力矩 (∑M=0)，目標應設定為 100% 全拿。"
  },
  chapters: [
    {
      chapterNo: 1,
      title: "力的基本概念、單位量綱與向量合成",
      topicSlug: "units-vectors",
      examFrequency: 4,
      coreConcepts: [
        {
          heading: "力的三要素與向量運算",
          explanation: "力是向量，具備『大小』、『方向』與『作用點』三要素。移動力於同一直線上時，其外效應不變（滑動向量原理，Principle of Transmissibility）。",
          keyPoints: [
            "SI 國際標準制：力之標準單位為牛頓 (N) 或千牛頓 (kN)；1 N = 1 kg·m/s²。",
            "應力單位：1 MPa = 1 N/mm² = 10⁶ N/m² = 10³ kPa（統測單位換算必考考點）。",
            "重力加速度 g 預設為 9.8 m/s²（統測偶採 10 m/s²，需詳閱題幹備註）。"
          ]
        },
        {
          heading: "向量內積與投影分力",
          explanation: "兩向量內積 A·B = |A||B|cosθ，可用以求夾角 θ 或求 A 沿 B 方向之正投影純量分量。",
          keyPoints: [
            "若 A·B = 0 且 |A|≠0, |B|≠0，則 A 與 B 互相垂直。",
            "空間中單位向量 λ = (cosα, cosβ, cosγ)，滿足 cos²α + cos²β + cos²γ = 1。"
          ]
        }
      ],
      formulaCard: {
        formula: "F_x = F · cosθ, \\quad F_y = F · sinθ, \\quad R = \\sqrt{R_x^2 + R_y^2}",
        meaning: "Fx、Fy 為力 F 在 x 與 y 軸之正交分量；R 為平面力系之總合力大小",
        unit: "kN 或 N",
        cautions: "θ 角度必須辨識為相對於水平軸 (x 軸) 或鉛直軸 (y 軸)，切勿機械化盲目套用 cos 與 sin。",
        latex: "R_x = \\sum F_x, \\quad R_y = \\sum F_y, \\quad R = \\sqrt{R_x^2 + R_y^2}, \\quad \\theta = \\tan^{-1}\\left(\\frac{R_y}{R_x}\\right)"
      },
      tables: [
        {
          title: "土木與力學常用物理量單位與因次對照表",
          headers: ["物理量名稱", "SI 常用單位", "基本量因次 (MLT)", "工程換算標準關係"],
          rows: [
            ["力 (Force, F)", "N, kN", "[M L T⁻²]", "1 kN = 1,000 N ≈ 101.97 kgf"],
            ["力矩 (Moment, M)", "N·m, kN·m", "[M L² T⁻²]", "力 × 垂直距離；1 kN·m = 10⁶ N·mm"],
            ["正應力 / 壓強 (Stress, σ)", "MPa (N/mm²)", "[M L⁻¹ T⁻²]", "1 MPa = 10⁶ Pa = 1 N/mm² = 10.197 kgf/cm²"],
            ["彈性模數 (Young's Modulus, E)", "GPa", "[M L⁻¹ T⁻²]", "鋼材 E_s ≈ 200 GPa = 2.04×10⁶ kgf/cm²"]
          ]
        }
      ],
      mustMasterChecklist: [
        "能夠在 15 秒內正確將任意傾斜角度之集中力分解為水平分力與垂直分力",
        "熟記 1 MPa = 1 N/mm²，並能無縫切換米 (m) 與公釐 (mm) 之運算",
        "理解純量 (Scalar) 與向量 (Vector) 之根本區別（力、位移、力矩為向量；質量、能量、面積為純量）"
      ]
    },
    {
      chapterNo: 2,
      title: "平面共點力平衡與拉密定理",
      topicSlug: "force-equilibrium",
      examFrequency: 5,
      coreConcepts: [
        {
          heading: "平面共點力系平衡條件",
          explanation: "若平面上所有力的作用線均交於同一點，則力矩平衡自然滿足，獨立平衡方程式僅有 2 條：∑Fx = 0, ∑Fy = 0。最多僅可求解 2 個獨立未知量。",
          keyPoints: [
            "圖解平衡法：若三力平衡，則各力向量首尾相連必構成封閉力三角形。",
            "若未知力超過 2 個，在靜力學範疇稱為靜不定 (Indeterminate)，無法單靠靜力平衡解出。"
          ]
        },
        {
          heading: "拉密定理 (Lami's Theorem)",
          explanation: "當三力共點且達成平衡時，每一力之大小與其餘兩力夾角之正弦值成正比：P / sinα = Q / sinβ = R / sinγ。",
          keyPoints: [
            "限定條件：必須恰好為『三力』、『共點』且『處於平衡狀態』。",
            "極速秒殺：若兩力互相垂直 (夾角 90°)，則 sin90° = 1，可瞬間口算求出未知繩張力或支承反力。"
          ]
        }
      ],
      formulaCard: {
        formula: "\\frac{F_A}{\\sin\\alpha} = \\frac{F_B}{\\sin\\beta} = \\frac{F_C}{\\sin\\gamma}",
        meaning: "FA, FB, FC 為三平衡力大小；α, β, γ 分別為各力所對向其餘兩力之夾角",
        unit: "kN 或 N",
        cautions: "拉密定理僅適用於『三力共點平衡』；若有四力以上或為非共點力系，切勿誤套拉密定理！",
        latex: "\\sum F_x = 0, \\quad \\sum F_y = 0 \\implies \\frac{P}{\\sin\\alpha} = \\frac{Q}{\\sin\\beta} = \\frac{R}{\\sin\\gamma}"
      },
      tables: [
        {
          title: "三力平衡解題法效益對照表",
          headers: ["分析方法", "適用情境", "求解優勢", "操作陷阱與注意事項"],
          rows: [
            ["正交分解法 (∑Fx=0, ∑Fy=0)", "任意力系、含四力以上", "通用性最高、不易出錯", "需計算角度三角函數，步驟較多"],
            ["拉密定理 (Lami's Theorem)", "恰好三共點力平衡", "列單一連比式，心算秒殺", "角度必須取兩力之外角夾角，算錯角度全盤皆輸"],
            ["向量力多邊形法 (封閉三角形)", "角度具備 30°-60°-90° 或 3-4-5 特殊比", "幾何邊長比直接對應力的比例", "需作圖精確辨識力的箭頭流向（首尾相接）"]
          ]
        }
      ],
      mustMasterChecklist: [
        "能畫出懸掛重物結點之完整自由體圖 (FBD)，正確標示拉力 (Tension) 遠離結點",
        "能靈活運用拉密定理在 1 分鐘內解出繩索張力或滾子反力",
        "牢記三共點力平衡之力多邊形箭頭必須順時針或逆時針首尾相接形成封閉迴圈"
      ]
    },
    {
      chapterNo: 3,
      title: "平面平行力系與分布載重等值化",
      topicSlug: "parallel-force-systems",
      examFrequency: 5,
      coreConcepts: [
        {
          heading: "等值合力與作用位置（瓦里農定理）",
          explanation: "平面平行力系的合力等於各平行力之代數和 R = ∑F；合力對任意點的作用力矩，等於各分力對該點之力矩代數和（Varignon's Theorem）：R · x̄ = ∑(Fi · xi)。",
          keyPoints: [
            "力偶 (Couple)：由大小相等、方向相反且不共線的兩平行力組成。其合力為零 (R = 0)，合力矩 M = F · d 為一定值（與參考點選擇無關之自由向量）。",
            "獨立平衡方程式有 2 條：∑Fy = 0（取平行方向）與 ∑M = 0。"
          ]
        },
        {
          heading: "連續分布載重之等值集中力",
          explanation: "將梁上的均布載重或三角形載重換算為單一等值集中力 R 以求支承反力：等值集中力大小等於『載重圖面積』，作用線通過『載重圖之幾何形心』。",
          keyPoints: [
            "均布載重 (w, 長度 L)：面積 R = w · L，作用於正中央 x̄ = L/2 處。",
            "三角形載重 (0 增至 w₀, 長度 L)：面積 R = (1/2) · w₀ · L，作用於距尖端 2L/3（即距鈍端最大載重處 L/3）處。"
          ]
        }
      ],
      formulaCard: {
        formula: "R = \\int w(x)dx = \\text{面積}, \\quad \\bar{x} = \\frac{\\int x \\cdot w(x)dx}{R} = \\text{形心}",
        meaning: "R 為連續載重之等值集中力大小；x̄ 為等值集中力對參考端點之距離",
        unit: "R 為 kN；x̄ 為 m",
        cautions: "求支承反力時方可將分布載重換為等值集中力；求梁內部剪力與彎矩時，切不可全梁直接替換，否則彎矩圖全錯！",
        latex: "R_{\\text{rect}} = w L, \\quad x_{\\text{rect}} = \\frac{L}{2}; \\qquad R_{\\text{tri}} = \\frac{1}{2} w_0 L, \\quad x_{\\text{tri}} = \\frac{2}{3} L \\text{ (距尖端)}"
      },
      tables: [
        {
          title: "常見分布載重等值化參數速查表",
          headers: ["載重圖型態", "等值合力大小 (R)", "作用點距左端位置", "統測典型考法"],
          rows: [
            ["全跨均布載重 w", "R = w · L", "x = L / 2", "簡支梁兩端對稱各分 wL/2 反力"],
            ["左端為 0、右端為 w₀ 三角形", "R = (1/2) · w₀ · L", "x = (2/3) · L", "求左端支承反力：∑M_右 = 0 ⇒ R_L = (1/6)w₀L"],
            ["梯形載重 (w₁ 增至 w₂)", "R = ((w₁ + w₂)/2) · L", "拆解為矩形 w₁ 與三角形 (w₂-w₁)", "分別求出矩形與三角形合力，再以力矩疊加法求支承反力"]
          ]
        }
      ],
      mustMasterChecklist: [
        "掌握三角形載重形心位置：距大端 L/3，距尖端 2L/3",
        "理解力偶矩是自由向量，在平面內可任意平移，其對梁上任何一點之力矩皆相同",
        "能正確建立簡支梁或外伸梁受分布載重時之靜力平衡方程，一次求得兩端支承反力"
      ]
    },
    {
      chapterNo: 4,
      title: "平面非共點非平行力系與支承反力",
      topicSlug: "nonconcurrent-force-systems",
      examFrequency: 5,
      coreConcepts: [
        {
          heading: "一般平面力系之三大平衡條件",
          explanation: "一般平面力系包含水平力、垂直力與力矩，其靜力平衡方程式具備 3 個獨立條件：∑Fx = 0, ∑Fy = 0, ∑Mo = 0。最多能求解 3 個獨立未知反力。",
          keyPoints: [
            "取力矩點秘訣：優先選在『未知力交會最多之點』建立 ∑M = 0，可直接消去該點所有未知力，一步求出另一個支承反力。",
            "三力平衡定理：若剛體受三力作用而平衡，則此三力之作用線必『交於同一點』或『互相平行』。"
          ]
        },
        {
          heading: "結構支承類型與反力數目",
          explanation: "工程結構與剛架支承依自由度拘束不同提供對應反力：滾子支承 (1 個反力)、鉸支承 (2 個反力)、固定端 (3 個反力：水平、垂直與抗彎力矩)。",
          keyPoints: [
            "滾子支承 (Roller Support)：僅能提供垂直於接觸面之單向拘束反力 (1 個未知數)。",
            "鉸支承 / 樞接 (Pin/Hinged Support)：阻止水平與垂直移動，提供 Rx 與 Ry (2 個未知數)。",
            "固定端 (Fixed Support)：阻止平移與轉動，提供 Rx, Ry 與固定端彎矩 M (3 個未知數)。"
          ]
        }
      ],
      formulaCard: {
        formula: "\\sum F_x = 0, \\quad \\sum F_y = 0, \\quad \\sum M_O = 0",
        meaning: "剛體平面靜力平衡之充分且必要條件",
        unit: "Fx, Fy 為 kN；Mo 為 kN·m",
        cautions: "力矩之正負符號必須在全題設定一致（通常約定逆時針為正，順時針為負）。",
        latex: "\\sum F_x = 0, \\quad \\sum F_y = 0, \\quad \\sum M_A = 0 \\implies R_B = \\frac{\\sum M_A(\\text{外力})}{L}"
      },
      tables: [
        {
          title: "結構工程常見支承形式與反力性質對照表",
          headers: ["支承形式名稱", "拘束自由度", "產生反力成分", "未知反力數目", "統測典型圖例與特徵"],
          rows: [
            ["活動鉸支承 (滾子 Roller)", "僅垂直於滾動方向", "垂直接觸面之反力 R", "1 個", "底座帶圓滾輪或單一短桿符號"],
            ["固定鉸支承 (鉸接 Pin)", "水平移動 + 垂直移動", "水平反力 H + 垂直反力 V", "2 個", "三角形底座固定於地面，能轉動不可移動"],
            ["固定支承 (剛接 Fixed)", "水平移動 + 垂直移動 + 旋轉", "水平力 H + 垂直力 V + 彎矩 M", "3 個", "柱底完全埋入基腳或梁柱剛接節點"],
            ["內部鉸 (Internal Hinge)", "允許兩側構件相對轉動", "該鉸點內部彎矩必為零 (M=0)", "額外提供 1 個靜力平衡條件", "拱橋或三鉸剛架中間圓圈鉸接點"]
          ]
        }
      ],
      mustMasterChecklist: [
        "見到鉸支承與滾子支承組合（簡支梁），能直覺反應總未知反力數為 3（靜定結構）",
        "善用三力平衡共點原理：若兩已知方向之力線交於點 P，則第三力之作用線必也通過點 P",
        "建立自由體圖時，不可遺漏外加載重、自重以及支承施加於結構之反力"
      ]
    },
    {
      chapterNo: 5,
      title: "摩擦力學與斜面自鎖臨界平衡",
      topicSlug: "friction",
      examFrequency: 5,
      coreConcepts: [
        {
          heading: "乾摩擦定理（庫侖摩擦定律）",
          explanation: "物體接觸面間在發生相對運動趨勢時產生的切向阻力稱為摩擦力。靜摩擦力 fs 隨外推力增加而遞增，直到達到最大靜摩擦力 (臨界滑動狀態) fs,max = μs · N。",
          keyPoints: [
            "靜摩擦係數 μs 恆大於動摩擦係數 μk（μs > μk）。動摩擦力 fk = μk · N 為一定值。",
            "若外力 P ≤ fs,max，物體維持靜止，此時實際摩擦力 fs = P（切勿直接代入 μs · N！）。"
          ]
        },
        {
          heading: "摩擦角 (Angle of Friction) 與靜止角 (Angle of Repose)",
          explanation: "全反力 R（正向力 N 與摩擦力 fs 之向量合力）與接觸面法線之最大夾角稱為摩擦角 φs，滿足 tanφs = μs。當斜面傾角 θ = φs 時，放置於斜面之物體處於即將下滑之臨界平衡；若 θ < φs，物體必自行卡緊保持靜止（自鎖現象，Self-Locking）。",
          keyPoints: [
            "斜面滑動判別法：若斜面傾角 θ ≤ φs (即 tanθ ≤ μs)，物體不論重量大小均可穩定停留於斜面不下滑。",
            "雙重臨界破壞檢核：斜面上之高長形塊體常面臨『先滑動』還是『先傾倒 (Tipping)』之競爭。需同時計算滑動所需推力與傾倒所需推力，較小者為實際破壞模式。"
          ]
        }
      ],
      formulaCard: {
        formula: "f_{s,\\max} = \\mu_s \\cdot N, \\quad \\tan\\phi_s = \\mu_s, \\quad f_k = \\mu_k \\cdot N",
        meaning: "fs,max 為最大靜摩擦力；N 為正向接觸正壓力；φs 為靜摩擦角；μs 為靜摩擦係數",
        unit: "力為 kN 或 N；摩擦係數 μs 無因次 (純量)",
        cautions: "正向力 N 不一定等於物體重量 W！若外力有傾斜拉力或推力，必須由 ∑Fy = 0 重新求解正確的正向力 N。",
        latex: "f_s \\le \\mu_s N; \\quad \\phi_s = \\tan^{-1}(\\mu_s); \\quad \\text{滑動條件: } P \\ge f_{s,\\max}"
      },
      tables: [
        {
          title: "摩擦力三階段受力狀態對比表",
          headers: ["運動狀態", "外力 P 與最大靜摩擦力關係", "接觸面實際摩擦力 f", "加速度 a", "統測解題金鑰"],
          rows: [
            ["靜止狀態 (Static)", "P < fs,max (P < μs·N)", "f = P (由平衡式求得)", "a = 0", "絕不可套用 μs·N！直接用 ∑Fx=0 求摩擦力"],
            ["臨界滑動 (Impending Slip)", "P = fs,max (恰好即將滑動)", "f = fs,max = μs · N", "a = 0 (臨界)", "此時力三角形最緊湊，可代入 tanφs = μs 解題"],
            ["動態滑動 (Kinetic)", "P > fs,max (已開始運動)", "f = fk = μk · N", "a = (P - fk) / m", "阻力突降為動摩擦力，產生等加速度滑動"]
          ]
        }
      ],
      mustMasterChecklist: [
        "能正確認知：摩擦力大小與兩物體接觸之『表面積大小無關』，僅取決於正向力 N 與接觸面材質特性 μ",
        "遇到斜面題型，必先將重力 W 分解為沿斜面分力 W·sinθ 與垂直斜面分力 W·cosθ",
        "理解自鎖條件：螺旋千斤頂或擋土牆背傾角滿足 tanθ ≤ μ 即可保證安全不回滑"
      ]
    },
    {
      chapterNo: 6,
      title: "結構災難警示、破壞模式與安全係數設計",
      topicSlug: "structural-failures",
      examFrequency: 4,
      coreConcepts: [
        {
          heading: "工程結構四大破壞模式",
          explanation: "結構工程的安全評估必須全盤兼顧四種失效型態：(1) 拉伸降伏延性破壞；(2) 細長受壓挫屈破壞 (Euler Buckling)；(3) 剪力脆性斷裂；(4) 動力疲勞與氣動共振。",
          keyPoints: [
            "受壓挫屈：細長柱在遠未達材料抗壓極限時即側向彎折折斷。臨界挫屈力 Pcr = (π²EI) / (KL)²，破壞由剛度 EI 與細長比控制，而非材料抗壓強度！",
            "剪力脆性破壞：無明顯塑性延性預警，裂縫呈 45° 斜裂，如 921 地震軟弱底層騎樓短柱剪斷倒塌。"
          ]
        },
        {
          heading: "容許應力設計法與安全係數 (Factor of Safety, FS)",
          explanation: "為了克服施工誤差、材質變異、載重超載與力學計算模型簡化之不確定性，結構設計規定：容許應力 σ_allow = 極限破壞應力 σ_fail / 安全係數 FS（通常 FS ≥ 1.5 ~ 2.0）。",
          keyPoints: [
            "安全係數 FS = 極限載重 P_ult / 容許設計載重 P_allow > 1.0。",
            "若安全係數過低則危及生命財產；若盲目提高安全係數則大幅浪費材料與工程成本。"
          ]
        }
      ],
      formulaCard: {
        formula: "\\text{FS} = \\frac{\\sigma_{\\text{ultimate}}}{\\sigma_{\\text{allowable}}} = \\frac{P_{\\text{fail}}}{P_{\\text{allow}}} \\ge 1.5, \\quad P_{cr} = \\frac{\\pi^2 E I}{(K L)^2}",
        meaning: "FS 為結構安全係數；σ_allow 為設計容許應力；Pcr 為尤拉挫屈臨界載重",
        unit: "FS 為純量無因次；Pcr 為 kN 或 N",
        cautions: "安全係數絕不可小於 1.0。若 FS < 1.0，代表工作應力已超過極限強度，結構必然破壞倒塌！",
        latex: "\\text{FS} = \\frac{\\sigma_{\\text{fail}}}{\\sigma_{\\text{allow}}} \\ge 1.5"
      },
      tables: [
        {
          title: "歷史著名結構災難與力學破壞機制檢討",
          headers: ["重大災難案例", "破壞力學機制", "根本工程疏失", "現代防禦設計準則"],
          rows: [
            ["美國塔科馬海峽吊橋 (1940)", "風致氣動卡門渦街共振 (Flutter)", "斷面採不透風實腹鋼梁，抗扭剛度不足", "採用開孔透風桁架樑，加設調諧質量阻尼器 (TMD)"],
            ["加拿大魁北克大橋 (1907)", "大型懸臂壓桿受壓挫屈 (Buckling)", "嚴重低估自重並忽視細長比挫屈效應", "嚴格管制壓桿長細比 λ = KL/r ≤ 200，複核 Pcr"],
            ["台灣 921 集集大地震 (1999)", "軟弱底層 (Soft Story) 剪力脆性破壞", "沿街一樓大量打通開門面，柱無箍筋耐震圍束", "耐震法規要求柱核心箍筋耐震密排 (135° 彎鉤)，落實強柱弱梁"]
          ]
        }
      ],
      mustMasterChecklist: [
        "深刻理解安全係數 FS = 極限強度 / 容許應力，並能根據題目已知極限載重反求安全施工載重",
        "辨識細長壓桿之破壞模式為尤拉挫屈，能指出增加斷面抗彎剛度 (EI) 或減少有效長度 (KL) 可大幅提升挫屈載重",
        "理解工程倫理核心理念：結構工程師的首要職責是保護公眾生命安全，防範脆性突發倒塌"
      ]
    }
  ],
  highFrequencyTraps: [
    {
      title: "【陷阱一】三角形載重之等值集中力作用點記反",
      trap: "許多考生直覺將三角形分布載重等值集中力放在跨度中點 (L/2)，或將 1/3 與 2/3 的參考端點搞混。",
      solution: "牢記口訣：『重端三分之一，尖端三分之二』！等值合力 R = (1/2)w₀L，其作用點必靠近載重較大的一端（距大端 L/3，距尖端 2L/3）。",
      relatedExamConcept: "平面平行力系等值化、簡支梁反力計算 (115-專一-04, 113-專一-06)"
    },
    {
      title: "【陷阱二】靜止狀態下直接套用摩擦力最大值公式 (μs·N)",
      trap: "題目給定 μs = 0.5，物重 100 N，水平施力 P = 20 N。考生直覺計算 f = 0.5 × 100 = 50 N，誤認摩擦力為 50 N。",
      solution: "此時最大靜摩擦力 fs,max = 50 N。因為推力 P = 20 N < 50 N，物體根本沒有滑動！根據水平靜力平衡 ∑Fx = 0，此時實際靜摩擦力 f = P = 20 N！只有在『即將滑動』或『臨界狀態』時，摩擦力才等於 μs·N。",
      relatedExamConcept: "庫侖摩擦定律、靜止平衡判別 (114-專一-08, 112-專一-07)"
    },
    {
      title: "【陷阱三】正向力 N 盲目等於物體重量 W",
      trap: "若外力具備斜向拉力 (例如向上傾斜 30° 拉動)，考生未列鉛直平衡，直接將 N 寫為 W，導致摩擦力算大而全題皆錯。",
      solution: "正向力 N 永遠必須透過鉛直平衡 ∑Fy = 0 重新計算！例如向上拉力 T，則 N = W - T·sin30°；若是斜向推力，則 N = W + P·sinθ。",
      relatedExamConcept: "受傾斜力作用物體之摩擦平衡 (113-專一-08)"
    },
    {
      title: "【陷阱四】誤將力偶矩對梁上各點之力矩視為不同",
      trap: "在計算梁反力時，考生常將外加集中力偶矩 M 乘以距離 x，以為力偶矩也需要乘以力臂。",
      solution: "力偶矩本身量綱即為『力 × 距離』(kN·m)，它是一個自由向量！在剛體平面上對任意點取力矩時，力偶矩大小維持 M 不變，『絕對不可再乘上距離』！",
      relatedExamConcept: "非共點力系平衡、剛架支承反力 (114-專一-05)"
    }
  ],
  curatedPastQuestions: [
    {
      id: "115-專一-03",
      year: 115,
      questionNo: 3,
      examPaper: "專業科目（一）基礎工程力學",
      stem: "一平面共點力系中，三個共點力 F₁ = 10 kN、F₂ = 10 kN、F₃ 達成靜力平衡。若 F₁ 與 F₂ 互成 120° 之夾角，則第三力 F₃ 之大小應為多少 kN？",
      options: {
        A: "10 kN",
        B: "10√2 kN",
        C: "10√3 kN",
        D: "20 kN"
      },
      answer: "A",
      sopSteps: [
        {
          stepNo: 1,
          title: "題幹辨識與受力條件確認",
          detail: "已知三力達成靜力平衡，此為典型平面三共點力平衡題型。可選用『正交分解法』、『合力向量平分法』或『拉密定理』求解。"
        },
        {
          stepNo: 2,
          title: "求解 F₁ 與 F₂ 之合力向量 R₁₂",
          detail: "由於 F₁ = F₂ = 10 kN 且夾角 θ = 120°，根據平行四邊形定律，其合力大小為：R₁₂ = √(F₁² + F₂² + 2·F₁·F₂·cos120°) = √(100 + 100 + 2·10·10·(-0.5)) = √(100) = 10 kN。且合力方向恰好位於此兩力之夾角平分線上（與兩力各夾 60°）。"
        },
        {
          stepNo: 3,
          title: "應用平衡條件反推 F₃",
          detail: "三力欲達成靜力平衡 (F₁ + F₂ + F₃ = 0)，第三力 F₃ 必須與 F₁、F₂ 之合力 R₁₂ 大小相等、方向相反。因此 |F₃| = R₁₂ = 10 kN。"
        },
        {
          stepNo: 4,
          title: "拉密定理驗算與核對",
          detail: "若由拉密定理檢核：三力大小相等各為 10 kN 時，彼此兩兩夾角恰均為 360° / 3 = 120°。sin120° 全數相同，完全滿足 10/sin120° = 10/sin120° = 10/sin120°，證明答案精確無誤。"
        },
        {
          stepNo: 5,
          title: "選定官方正確選項",
          detail: "比對題目選項，(A) 為 10 kN，故選 (A)。"
        }
      ],
      examinerTrapNotes: "命題教授常利用 120° 特殊角測試考生幾何直覺。若考生誤記為向量直接相加得 20 kN 則誤選 (D)；若誤套用 90° 畢氏定理則會算出 10√2 而誤選 (B)。",
      quickShortcut: "【秒殺模型：正三角形力多邊形】兩等大小之共點力夾 120° 時，其合力必恰等於單一分力大小 (10 kN)！故平衡所需之第三力亦必為 10 kN，3 秒即可口算鎖定 (A)！"
    },
    {
      id: "114-專一-06",
      year: 114,
      questionNo: 6,
      examPaper: "專業科目（一）基礎工程力學",
      stem: "一簡支梁長度 L = 6 m，左端 A 為鉸支承，右端 B 為滾子支承。梁上承受一全跨三角形分布載重，左端 A 處載重強度為 0，右端 B 處載重強度達到最大值 w₀ = 12 kN/m。試求左端 A 支承之垂直反力 R_A 為多少 kN？",
      options: {
        A: "6 kN",
        B: "12 kN",
        C: "18 kN",
        D: "24 kN"
      },
      answer: "B",
      sopSteps: [
        {
          stepNo: 1,
          title: "繪製梁整體自由體圖 (FBD)",
          detail: "支承反力：A 端為鉸支承，具備垂直反力 R_A 與水平反力 H_A（梁無水平外力故 H_A = 0）；B 端為滾子支承，具備垂直反力 R_B。"
        },
        {
          stepNo: 2,
          title: "三角形分布載重等值化集中力 (R_total)",
          detail: "載重總合力等於三角形面積：R_total = (1/2) · 底 · 高 = (1/2) · 6 m · 12 kN/m = 36 kN。"
        },
        {
          stepNo: 3,
          title: "確認等值集中力之形心作用位置",
          detail: "三角形載重尖端在 A (左)，大端在 B (右)。形心距尖端 2/3 跨長，距大端 1/3 跨長。故集中力作用點距 A 端距離 x̄_A = (2/3) · 6 m = 4 m；距 B 端距離 x̄_B = (1/3) · 6 m = 2 m。"
        },
        {
          stepNo: 4,
          title: "對 B 點取力矩平衡求解 R_A",
          detail: "建立力矩平衡方程式 ∑M_B = 0（以逆時針為正）：R_A · (6 m) - R_total · (2 m) = 0 ⇒ R_A · 6 - 36 · 2 = 0 ⇒ 6 R_A = 72 ⇒ R_A = 12 kN。"
        },
        {
          stepNo: 5,
          title: "驗算與選答",
          detail: "由 ∑Fy = 0 可求得 R_B = 36 - 12 = 24 kN。R_B / R_A = 24 / 12 = 2 倍，恰符合大端分擔 2/3 載重、尖端分擔 1/3 載重之槓桿原理。故選 (B)。"
        }
      ],
      examinerTrapNotes: "最常見失誤是把三角形形心誤算在中間 3 m 處，算得 R_A = 18 kN 而誤選 (C)；或是把距 B 端距離與距 A 端距離代反算得 R_A = 24 kN 誤選 (D)。",
      quickShortcut: "【秒殺模型：三角形反力分配律】尖端支承反力固定為總載重之 1/3，大端支承反力固定為總載重之 2/3！總載重 = 36 kN，故尖端 A 反力 R_A = 36 / 3 = 12 kN，一步得出 (B)！"
    },
    {
      id: "113-專一-09",
      year: 113,
      questionNo: 9,
      examPaper: "專業科目（一）基礎工程力學",
      stem: "一重量 W = 100 N 之物體置於傾斜角 θ = 30° 之粗糙斜面上，物體與斜面間之靜摩擦係數 μs = 0.6。若無任何外力施加於物體上，則物體在斜面上所受之實際摩擦力大小為多少 N？",
      options: {
        A: "30 N",
        B: "50 N",
        C: "51.96 N",
        D: "60 N"
      },
      answer: "B",
      sopSteps: [
        {
          stepNo: 1,
          title: "分析斜面受力正交分解",
          detail: "將重量 W = 100 N 沿斜面方向及垂直斜面方向分解：沿斜面向下之下滑力分量 W_parallel = W · sin30° = 100 · 0.5 = 50 N；垂直斜面之正向力分量 N = W · cos30° = 100 · (√3/2) ≈ 86.6 N。"
        },
        {
          stepNo: 2,
          title: "計算最大靜摩擦力 fs,max",
          detail: "接觸面所能提供之最大抗滑極限值 fs,max = μs · N = 0.6 · 86.6 N = 51.96 N。"
        },
        {
          stepNo: 3,
          title: "比較下滑力與最大靜摩擦力以判別運動狀態",
          detail: "下滑趨勢力 W_parallel = 50 N，而最大靜摩擦力 fs,max = 51.96 N。因為 50 N < 51.96 N (W_parallel < fs,max)，代表最大靜摩擦力足以抵擋下滑力，物體處於完全靜止狀態！"
        },
        {
          stepNo: 4,
          title: "由沿斜面方向靜力平衡求實際摩擦力",
          detail: "物體靜止時，沿斜面方向滿足 ∑F_parallel = 0 ⇒ 沿斜面向上之靜摩擦力 fs = W_parallel = 50 N。"
        },
        {
          stepNo: 5,
          title: "選定正確答案",
          detail: "物體實際所受摩擦力為 50 N，故選 (B)。"
        }
      ],
      examinerTrapNotes: "這是統測最著名的『送命陷阱題』！無數考生背誦 f = μN，算得 0.6 × 86.6 = 51.96 N 而跳入陷阱誤選 (C)；甚至誤算為 0.6 × 100 = 60 N 誤選 (D)。必須深刻體會：未滑動時摩擦力由平衡決定，而非由極限公式決定！",
      quickShortcut: "【秒殺模型：斜面自鎖臨界判定】摩擦角 tanφs = μs = 0.6，對應 φs ≈ 31°。斜面傾角 θ = 30° < 31°，故物體必定自鎖靜止！靜止時摩擦力必等於重力下滑分力 W·sin30° = 100 × 0.5 = 50 N，直接秒殺 (B)！"
    }
  ],
  preExamChecklist: [
    "我能正確將任一力分解為 F·cosθ 與 F·sinθ，並確認角度與軸向之幾何關係",
    "我知道 1 MPa = 1 N/mm²，並熟練單位換算",
    "我能以拉密定理 (Lami's Theorem) 在 30 秒內解出三共點力平衡未知繩張力",
    "我牢記三角形分布載重等值集中力 R = (1/2)w₀L，作用點距大端 L/3、距尖端 2L/3",
    "遇到求支承反力問題，我能優先對未知力交會最多的支承點取力矩 (∑M=0)",
    "我知道摩擦力在未滑動前由平衡式決定 (f = P)，只有在臨界滑動時才等於 μs·N",
    "我知道斜面自鎖條件為 tanθ ≤ μs（或傾角 θ ≤ 摩擦角 φs）",
    "我知道細長柱破壞是由挫屈 (Euler Buckling) 控制，與材料抗壓強度無關",
    "我清楚安全係數定義：FS = 極限破壞載重 / 容許設計載重 ≥ 1.5"
  ]
};
