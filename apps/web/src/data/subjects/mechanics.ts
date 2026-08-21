import { SubjectData } from '../types';

export const mechanicsData: SubjectData = {
  slug: 'mechanics',
  "title": "基礎工程力學",
  "category": "專業科目（一）",
  "color": "teal-700",
  "topics": [
    {
      slug: 'structural-failures',
      title: '真實結構災難與生命財產安全',
      desc: '以工程實例剖析結構破壞機制，從塔科馬海峽吊橋風致共振、921 地震軟弱底層剪力破壞到安全係數設計哲學，建立結構安全之根本直覺。',
      status: 'done',
      gradeLevel: 10,
      examHitRate: 4,
      step0Prerequisites: [
        '極限狀態設計法與容許應力法之基本概念',
        '破壞模式分類：拉伸降伏、受壓挫屈、剪力脆性斷裂與共振疲勞'
      ],
      fatalTraps: [
        {
          wrongThinking: '認為結構只要材料強度夠高，斷面越大就絕對安全，忽略細長比導致的挫屈破壞。',
          correctThinking: '細長受壓構件（如細長鋼柱、桁架壓桿）破壞往往由尤拉挫屈 (Euler Buckling) 控制，挫屈應力與抗彎剛度 EI 及長度平方成反比，與材料抗拉強度關係極小。',
          trapDescription: '忽略幾何不穩定性與挫屈效應，是結構力學中最致命的盲點。'
        },
        {
          wrongThinking: '將安全係數 (Factor of Safety, FS) 視為偷工減料或超載的隨意緩衝餘量。',
          correctThinking: '安全係數 FS = 極限強度 / 容許應力 (通常 FS ≥ 1.5~2.0)，旨在涵蓋載重不確定性、材料強度變異性、施工品質誤差與計算模型假設之不可預期風險。',
          trapDescription: '誤解安全係數定義，無法正確認知工程極限載重與容許載重之界限。'
        }
      ],
      eliteMentalModels: [
        {
          technique: '破壞路徑逆向追蹤法 (Failure Mode Inversion)',
          explanation: '分析結構時，先假設三種可能破壞模式（彎曲降伏、剪力開裂、側向挫屈），分別計算各模式對應之極限載重，其中最小載重即為控制結構生死的臨界破壞機制。'
        }
      ],
      illustrations: [
        'context.webp',
        'concept-diagram.webp',
        'structural-failures.webp',
        'step-by-step.webp'
      ],
      covered_question_ids: [],
      concepts: [
        {
          heading: '結構破壞模式與破壞機制分析',
          body: '工程結構的破壞依受力型態可分為四類：(1) 拉伸延性破壞（材料產生明顯塑性變形與頸縮警告）；(2) 受壓挫屈破壞（細長構件失穩瞬間折斷，屬於突發性破壞）；(3) 剪力脆性破壞（如混凝土柱產生 45 度斜向剪力裂縫，無預警崩塌）；(4) 動態疲勞與共振破壞（如美國塔科馬吊橋因卡門渦街頻率與橋身扭轉自振頻率相符而產生氣動共振坍塌）。',
          formula: '挫屈臨界載重: P_cr = (π² E I) / (K L)²\n安全係數: FS = 極限破壞載重 / 容許設計載重 ≥ 1.5'
        },
        {
          heading: '台灣 921 地震之結構教訓：軟弱層與短柱效應',
          body: '1999 年 921 大地震中，許多沿街騎樓或住商混合大樓倒塌，主因是「一樓挑高、無隔震牆」形成軟弱底層 (Soft Story)，地震橫向剪力集中於一樓柱頂柱底造成塑性鉸破壞；另一典型破壞為樓梯間窗台矮牆束縛柱子，使柱有效長度減半形成「短柱 (Short Column)」，剪力劇增導致柱身 45 度 X 型脆性剪拉破壞。'
        },
        {
          heading: '安全係數 (FS) 與強柱弱梁耐震設計哲學',
          body: '現代耐震法規強調「強柱弱梁、強剪弱彎」之設計哲學：確保梁端先發生彎曲塑性變形消散地震能量，保護承重柱不發生脆性剪力破壞，維持整體結構豎向支撐系統不崩塌，爭取人員黃金逃生時間。'
        }
      ],
      worked_examples: [
        {
          question: '【經典結構安全例題】某鋼結構立柱截面為實心方柱（邊長 b = 100 mm），長度 L = 4 m，兩端皆為鉸支承 (K = 1.0)。已知鋼材彈性模數 E = 200 GPa = 200 × 10³ MPa。試依尤拉公式計算：(1) 該柱之斷面慣性矩 I；(2) 臨界挫屈載重 P_cr；(3) 若設計要求安全係數 FS = 2.0，該柱之容許承載力 P_allow 為多少 kN？',
          steps: [
            '步驟 1：計算方形截面慣性矩。I = b⁴ / 12 = 100⁴ / 12 = 10⁸ / 12 ≈ 8.333 × 10⁶ mm⁴。 ｜為什麼：慣性矩量化截面抵抗彎曲變形之幾何能力。',
            '步驟 2：代入尤拉臨界挫屈公式。P_cr = π² E I / (KL)² = π² × (200 × 10³ N/mm²) × (8.333 × 10⁶ mm⁴) / (1.0 × 4000 mm)² ≈ 1028080 N ≈ 1028.1 kN。 ｜為什麼：細長比由長度與回轉半徑決定，挫屈由 Euler 公式控制。',
            '步驟 3：應用安全係數求解容許載重。P_allow = P_cr / FS = 1028.1 kN / 2.0 ≈ 514.05 kN。 ｜為什麼：容許載重必須除以安全係數以確保極端工況下之結構安全。'
          ],
          answer: '(1) 截面慣性矩 I ≈ 8.33 × 10⁶ mm⁴；(2) 臨界挫屈載重 P_cr ≈ 1028 kN；(3) 容許承載力 P_allow ≈ 514 kN。',
          difficulty: '中等',
          hints: ['注意長度單位換算 4 m = 4000 mm', 'GPa 換算為 MPa = N/mm²'],
          commonMistake: '常有考生忘記將公尺換算為毫米，導致分母差了 10⁶ 倍。',
          eliteShortcut: '速算檢查：π² ≈ 10，分子約 200×10³ × 8.33×10⁶ × 10 = 1.666×10¹³，除以 1.6×10⁷ ≈ 1.04×10⁶ N = 1040 kN，心算即可驗證量級！'
        }
      ],
      practices: [
        {
          question: '在地震工程中，若某鋼筋混凝土柱的淨高由 3.6 m 因加設窗台矮牆而被縮短為 1.2 m（有效長度變為原本的 1/3），在相同側移量 Δ 下，該柱所承受的地震剪力會變為原來的幾倍？',
          steps: [
            '柱側向剛度 k = 12EI / L³，與柱長度三次方成反比。',
            '長度變為 1/3，剛度變為 1 / (1/3)³ = 27 倍。',
            '相同側移 Δ 下，剪力 V = kΔ，剪力劇增為原本的 27 倍，極易引發短柱脆性剪力破壞。'
          ],
          answer: '27 倍（剪力與柱長三次方成反比，導致短柱效應剪力急遽集中）',
          difficulty: '進階'
        },
        {
          question: '工程中若要求某吊索鋼纜之極限破壞拉力為 120 kN，設計規定安全係數 FS 不得小於 3.0，試問該鋼纜最大容許懸吊重量（容許拉力）為多少 kN？',
          steps: [
            '容許拉力 P_allow = P_ult / FS = 120 kN / 3.0 = 40 kN。'
          ],
          answer: '40 kN',
          difficulty: '基礎'
        },
        {
          question: '為何現代建築耐震設計規範嚴格要求「強柱弱梁 (Strong Column Weak Beam)」？',
          steps: [
            '若梁先降伏，梁端塑性鉸可大量消散地震能量，且局部梁受損不致造成大樓整體坍塌。',
            '若柱先破壞，整棟大樓瞬間喪失垂直承載力，會引發致命的垂直粉碎性崩塌。'
          ],
          answer: '確保地震能量由梁端塑性鉸吸收，防止承重柱破壞導致大樓整體粉碎性坍塌。',
          difficulty: '觀念'
        },
        {
          question: '美國塔科馬海峽吊橋 (Tacoma Narrows Bridge) 於 1940 年在微風中倒塌，其力學主因為何？',
          steps: [
            '風流經實心板梁主梁斷面時產生週期性交替脫離的「卡門渦街 (von Kármán Vortex Street)」。',
            '脫離頻率與吊橋扭轉自振頻率吻合引發氣動共振扭轉，最終超越結構抗扭極限斷裂。'
          ],
          answer: '卡門渦街引發氣動自激共振扭轉破壞',
          difficulty: '進階'
        },
        {
          question: '計算受壓構件之尤拉挫屈載重時，下列哪項因素「不會」影響臨界挫屈載重 P_cr 的大小？',
          steps: [
            '尤拉公式 P_cr = π²EI / (KL)²，包含彈性模數 E、慣性矩 I、長度 L 及支承條件 K。',
            '材料的抗拉極限強度與降伏強度只要在彈性範圍內，不影響挫屈載重大小。'
          ],
          answer: '材料的抗拉極限強度 (只要處於彈性範圍內，挫屈由剛度 EI 控制)',
          difficulty: '易錯題'
        }
      ]
    },
    {
      slug: 'parallel-force-systems',
      "title": "2A. 平面平行力系",
      "desc": "把分布載重換成等值集中力，利用合力與力矩定位作用線，並反推支承反力。",
      "status": "done",
      "gradeLevel": 10,
      "examHitRate": 4,
      "step0Prerequisites": [
        "等值集中力計算：W = 載重圖面積",
        "形心位置：矩形在中點，三角形在距大端 1/3 處"
      ],
      "fatalTraps": [
        {
          "wrongThinking": "將三角形分布載重的等值集中力位置放在三角形中點 (L/2)。",
          "correctThinking": "三角形載重形心位於距大端 (最大載重處) L/3，即距尖端 2L/3 處。",
          "trapDescription": "三角形載重形心位置記反，導致支承反力全錯。"
        }
      ],
      "eliteMentalModels": [
        {
          "technique": "對稱分解法 (Symmetric Superposition)",
          "explanation": "對稱載重下兩端反力必各分一半；非對稱載重可拆解為對稱均布 + 反對稱三角形，心算即可直接寫出反力。"
        }
      ],
      "illustrations": [
        "context.webp",
        "mechanism.webp",
        "parallel-forces-diagram.webp",
        "formula-visual.webp"
      ],
      "covered_question_ids": [],
      "concepts": [
        {
          "heading": "等值合力與作用點",
          "body": "同向平行力的合力為<span className=\"text-indigo-600 font-bold\">各力代數和</span>；作用線位置由「<span className=\"text-rose-600 font-bold\">對任一點的總力矩相等</span>」決定。分布載重的合力等於**載重圖面積**，作用於**載重圖形心**。",
          "formula": "<span className=\"text-rose-600 font-bold\">R = ΣF</span>；<span className=\"text-indigo-600 font-bold\">x_R = Σ(F_i x_i) / ΣF</span>；R = ∫w(x)dx"
        },
        {
          "heading": "均布與三角形載重",
          "body": "均布載重 w 作用長度 L，等值力為 <span className=\"text-indigo-600 font-bold\">wL</span>，作用於**中點**。由零線性增加到 w₀ 的三角形載重，等值力為 <span className=\"text-rose-600 font-bold\">w₀L/2</span>，作用於**大端起算 L/3** (距尖端 2L/3)。"
        },
        {
          "heading": "平衡與驗算",
          "body": "先畫<span className=\"text-indigo-600 font-bold\">自由體圖 (FBD)</span>，再列 <span className=\"text-rose-600 font-bold\">ΣF_y=0</span> 與 <span className=\"text-rose-600 font-bold\">ΣM=0</span>。最後用另一取矩點複核；反力為負表示**實際方向與假設相反**。"
        }
      ],
      "worked_examples": [
        {
          "question": "簡支梁跨距 6 m，全跨受 4 kN/m 均布載重，兩端反力各為多少？",
          "difficulty": "統測核心",
          "steps": [
            "等值集中力 <span className=\"text-rose-600 font-bold\">W = 4 × 6 = 24 kN</span>，作用於跨中。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "系統左右對稱，所以 <span className=\"text-indigo-600 font-bold\">R_A = R_B</span>。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "R_A + R_B = 24 kN。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "R_A = R_B = 12 kN",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        }
      ],
      "practices": [
        {
          "question": "長 3 m 的三角形載重由左端 0 線性增至右端 12 kN/m。等值力與作用位置為何？",
          "difficulty": "統測核心",
          "steps": [
            "載重圖面積 <span className=\"text-rose-600 font-bold\">R = 12 × 3 / 2 = 18 kN</span>。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "三角形形心距大端 <span className=\"text-indigo-600 font-bold\">L/3</span>。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "18 kN，距右端 1 m（距左端 2 m）",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        },
        {
          "question": "兩向下平行力 10 kN、20 kN 分別位於 x=1 m、x=4 m，合力位置為何？",
          "difficulty": "進階",
          "steps": [
            "<span className=\"text-rose-600 font-bold\">R = 10 + 20 = 30 kN</span>。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "位置公式：<span className=\"text-indigo-600 font-bold\">x_R = (10×1 + 20×4) / 30 = 3 m</span>。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "x = 3 m",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        },
        {
          "question": "平面平行力系解題時，第一個必須確認的模型條件是什麼？",
          "difficulty": "觀念",
          "steps": [
            "辨識題目屬於**平面平行力系**，先畫出<span className='text-indigo-600 font-bold'>自由體圖 (FBD)</span> 或整理已知量。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "確認 <span className='text-rose-600 font-bold'>合力與原力系的總力及總力矩等值</span> 成立後再代入公式。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "合力與原力系的總力及總力矩等值",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        },
        {
          "question": "平面平行力系計算完成後，最直接的量綱檢核為何？",
          "difficulty": "觀念",
          "steps": [
            "逐項檢查輸入單位是否一致。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "結果應以 **力用 kN、位置用 m、力矩用 kN·m** 表達；不符時不可只改單位符號，須回推計算過程。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "力用 kN、位置用 m、力矩用 kN·m",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        },
        {
          "question": "平面平行力系結果出現負號時，正確處理方式為何？",
          "difficulty": "易錯題",
          "steps": [
            "回到原先設定的<span className=\"text-indigo-600 font-bold\">正方向</span>或轉向。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "負號僅表示<span className=\"text-rose-600 font-bold\">實際方向與假設相反</span>，不代表答案必然錯誤。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "保留大小並依符號修正實際方向",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        },
        {
          "question": "平面平行力系最可靠的最後驗算策略為何？",
          "difficulty": "進階",
          "steps": [
            "使用<span className=\"text-indigo-600 font-bold\">未參與主要求解的獨立關係</span>重新計算。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "同時檢查極端情況、方向與<span className=\"text-rose-600 font-bold\">有效數字</span>合理性。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "以獨立關係複核並檢查方向、量綱與合理性",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        }
      ]
    },
    {
      slug: 'nonconcurrent-force-systems',
      "title": "2B. 共面非共點非平行力系",
      "desc": "同時處理水平力、垂直力與力偶，以三個獨立平衡方程求解剛體未知反力。",
      "status": "done",
      "gradeLevel": 10,
      "examHitRate": 5,
      "step0Prerequisites": [
        "平面剛體平衡三方程：ΣFx=0, ΣFy=0, ΣMo=0",
        "支承約束反力特徵（滾支承 1、鉸支承 2、固定端 3）"
      ],
      "fatalTraps": [
        {
          "wrongThinking": "固定端支承只列水平與垂直反力，漏掉反力矩 Mo。",
          "correctThinking": "固定端 (Fixed Support) 限制了所有移動與轉動，必須包含垂直反力 Ay、水平反力 Ax 及固定端力矩 Ma。",
          "trapDescription": "固定端支承漏算力矩反力，導致未知數不足無法求解。"
        }
      ],
      "eliteMentalModels": [
        {
          "technique": "最佳取矩點消去法 (Pivot Point Elimination)",
          "explanation": "取矩點永遠選在「最多未知力交會之支承點」，直接令 2 個未知數的力臂為零，一條方程式即可解出第 3 個未知數。"
        }
      ],
      "illustrations": [
        "context.webp",
        "mechanism.webp",
        "equilibrium-equations.webp",
        "step-by-step.webp"
      ],
      "covered_question_ids": [],
      "concepts": [
        {
          "heading": "三個獨立平衡條件",
          "body": "平面剛體平衡必須同時滿足<span className=\"text-indigo-600 font-bold\">水平力</span>、<span className=\"text-indigo-600 font-bold\">垂直力</span>及任一點<span className=\"text-rose-600 font-bold\">總力矩為零</span>。取矩點宜穿過**最多未知力作用線**以簡化計算。",
          "formula": "<span className=\"text-rose-600 font-bold\">ΣF_x=0</span>；<span className=\"text-rose-600 font-bold\">ΣF_y=0</span>；<span className=\"text-rose-600 font-bold\">ΣM_O=0</span>"
        },
        {
          "heading": "力的移轉與力偶",
          "body": "把力平移到另一點時，必須附加 <span className=\"text-rose-600 font-bold\">M = Fd</span> 的力偶。力偶矩與取矩點無關，**只具有轉向**。",
          "formula": "<span className=\"text-indigo-600 font-bold\">M = F d_⊥</span>"
        },
        {
          "heading": "支承反力辨識",
          "body": "滾支承一個法向反力、鉸支承兩個分力、固定端有兩個分力與一個**反力矩**；未知數超過獨立方程即屬<span className=\"text-rose-600 font-bold\">靜不定</span>。"
        }
      ],
      "worked_examples": [
        {
          "question": "鉸支承 A 與滾支承 B 相距 4 m，跨中受向下 8 kN，求反力。",
          "difficulty": "統測核心",
          "steps": [
            "<span className=\"text-indigo-600 font-bold\">ΣM_A=0</span>：4B_y - 8×2 = 0，得 <span className=\"text-rose-600 font-bold\">B_y = 4 kN</span>。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "<span className=\"text-indigo-600 font-bold\">ΣF_y=0</span>：A_y + B_y - 8 = 0。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "無水平外力，<span className=\"text-rose-600 font-bold\">A_x = 0</span>。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "A_x=0，A_y=4 kN，B_y=4 kN",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        }
      ],
      "practices": [
        {
          "question": "一剛體受向右 6 kN、向上 8 kN，兩力交於同點。合力大小與方向為何？",
          "difficulty": "統測核心",
          "steps": [
            "合力大小 <span className=\"text-rose-600 font-bold\">R = √(6² + 8²) = 10 kN</span>。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "方向角 <span className=\"text-indigo-600 font-bold\">θ = tan⁻¹(8/6) = 53.13°</span>。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "10 kN，向右上 53.13°",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        },
        {
          "question": "非共點非平行力系解題時，第一個必須確認的模型條件是什麼？",
          "difficulty": "觀念",
          "steps": [
            "辨識題目屬於**非共點非平行力系**，先畫出<span className='text-indigo-600 font-bold'>自由體圖 (FBD)</span> 或整理已知量。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "確認 <span className='text-rose-600 font-bold'>ΣF_x、ΣF_y、ΣM 三式同時成立</span> 成立後再代入公式。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "ΣF_x、ΣF_y、ΣM 三式同時成立",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        },
        {
          "question": "非共點非平行力系計算完成後，最直接的量綱檢核為何？",
          "difficulty": "觀念",
          "steps": [
            "逐項檢查輸入單位是否一致。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "結果應以 **力用 kN、力矩用 kN·m** 表達；不符時不可只改單位符號，須回推計算過程。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "力用 kN、力矩用 kN·m",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        },
        {
          "question": "非共點非平行力系結果出現負號時，正確處理方式為何？",
          "difficulty": "易錯題",
          "steps": [
            "回到原先設定的<span className=\"text-indigo-600 font-bold\">正方向</span>或轉向。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "負號僅表示<span className=\"text-rose-600 font-bold\">實際方向與假設相反</span>，不代表答案必然錯誤。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "保留大小並依符號修正實際方向",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        },
        {
          "question": "非共點非平行力系最可靠的最後驗算策略為何？",
          "difficulty": "進階",
          "steps": [
            "使用<span className=\"text-indigo-600 font-bold\">未參與主要求解的獨立關係</span>重新計算。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "同時檢查極端情況、方向與<span className=\"text-rose-600 font-bold\">有效數字</span>合理性。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "以獨立關係複核並檢查方向、量綱與合理性",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        }
      ]
    },
    {
      slug: 'shear-properties',
      "title": "7A. 剪力與剪應力",
      "desc": "區分直接剪力、平均剪應力與梁中橫向剪應力，避免把 V、τ 與剪力圖混為一談。",
      "status": "done",
      "gradeLevel": 10,
      "examHitRate": 4,
      "step0Prerequisites": [
        "單剪與雙剪有效剪切面積區分",
        "矩形梁截面最大剪應力 τmax = 1.5 · (V/A)"
      ],
      "fatalTraps": [
        {
          "wrongThinking": "雙剪螺栓計算剪應力時，誤用單個截面積 A 代入 τ = V/A。",
          "correctThinking": "雙剪有兩個剪切面承載剪力，有效面積為 2A，故平均剪應力 τ = V / (2A)。",
          "trapDescription": "漏乘雙剪截面係數 2，算出的剪應力為真實值的兩倍。"
        }
      ],
      "eliteMentalModels": [
        {
          "technique": "剪力形狀係數倍率法 (Shape Factor Multiplier)",
          "explanation": "記住三大常用截面最大剪應力公式：矩形 τmax = 1.5 V/A；實心圓 τmax = (4/3) V/A；薄壁圓管 τmax = 2 V/A，統測直接套倍率。"
        }
      ],
      "illustrations": [
        "context.webp",
        "concept-diagram.webp",
        "shear-stress-distribution.webp",
        "formula-visual.webp"
      ],
      "covered_question_ids": [],
      "concepts": [
        {
          "heading": "直接剪應力",
          "body": "鉚釘、螺栓或沖孔面常先以<span className=\"text-indigo-600 font-bold\">平均剪應力</span>計算。**雙剪**有兩個剪切面，有效面積是單剪的兩倍。",
          "formula": "<span className=\"text-rose-600 font-bold\">τ_avg = V / A_s</span>；A_s = n(πd²/4)"
        },
        {
          "heading": "梁的橫向剪應力",
          "body": "梁截面剪應力由自由表面零值增至<span className=\"text-rose-600 font-bold\">中性軸附近最大</span>；矩形截面最大值為平均值 <span className=\"text-indigo-600 font-bold\">1.5 倍</span>。",
          "formula": "τ = VQ/(It)；矩形：<span className=\"text-rose-600 font-bold\">τ_max = 3V/(2A)</span>"
        },
        {
          "heading": "剪力圖符號與跳躍",
          "body": "集中力使剪力圖<span className=\"text-rose-600 font-bold\">瞬間跳躍</span>；分布載重是剪力圖斜率，剪力則是彎矩圖斜率。",
          "formula": "<span className=\"text-indigo-600 font-bold\">dV/dx = -w</span>；<span className=\"text-indigo-600 font-bold\">dM/dx = V</span>"
        }
      ],
      "worked_examples": [
        {
          "question": "直徑 10 mm 鉚釘承受 12 kN 單剪，平均剪應力為何？",
          "difficulty": "統測核心",
          "steps": [
            "剪切面積 <span className=\"text-rose-600 font-bold\">A = π(10²)/4 = 78.54 mm²</span>。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "剪應力 <span className=\"text-indigo-600 font-bold\">τ = 12000 / 78.54 = 152.8 N/mm²</span>。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "約 153 MPa",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        }
      ],
      "practices": [
        {
          "question": "同一支直徑 10 mm 鉚釘改為雙剪並承受 12 kN，平均剪應力為何？",
          "difficulty": "統測核心",
          "steps": [
            "雙剪有效面積為 <span className=\"text-rose-600 font-bold\">2A</span>。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "剪應力 <span className=\"text-indigo-600 font-bold\">τ = 12000 / (2 × 78.54)</span>。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "約 76.4 MPa",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        },
        {
          "question": "剪力與剪應力解題時，第一個必須確認的模型條件是什麼？",
          "difficulty": "觀念",
          "steps": [
            "辨識題目屬於**剪力與剪應力**，先畫出<span className='text-indigo-600 font-bold'>自由體圖 (FBD)</span> 或整理已知量。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "確認 <span className='text-rose-600 font-bold'>先分辨剪力 V、剪切面數與有效面積</span> 成立後再代入公式。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "先分辨剪力 V、剪切面數與有效面積",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        },
        {
          "question": "剪力與剪應力計算完成後，最直接的量綱檢核為何？",
          "difficulty": "觀念",
          "steps": [
            "逐項檢查輸入單位是否一致。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "結果應以 **剪力用 N 或 kN、剪應力用 MPa** 表達；不符時不可只改單位符號，須回推計算過程。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "剪力用 N 或 kN、剪應力用 MPa",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        },
        {
          "question": "剪力與剪應力結果出現負號時，正確處理方式為何？",
          "difficulty": "易錯題",
          "steps": [
            "回到原先設定的<span className=\"text-indigo-600 font-bold\">正方向</span>或轉向。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "負號僅表示<span className=\"text-rose-600 font-bold\">實際方向與假設相反</span>，不代表答案必然錯誤。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "保留大小並依符號修正實際方向",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        },
        {
          "question": "剪力與剪應力最可靠的最後驗算策略為何？",
          "difficulty": "進階",
          "steps": [
            "使用<span className=\"text-indigo-600 font-bold\">未參與主要求解的獨立關係</span>重新計算。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "同時檢查極端情況、方向與<span className=\"text-rose-600 font-bold\">有效數字</span>合理性。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "以獨立關係複核並檢查方向、量綱與合理性",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        }
      ]
    },
    {
      slug: 'units-vectors',
      "title": "1. 單位與向量",
      "desc": "力學 SI 單位制、因次同性原理、純量與向量性質、向量拉密與三角分解、平面與空間分力合成法。",
      "status": "done",
      "gradeLevel": 10,
      "examHitRate": 4,
      "step0Prerequisites": [
        "本章核心基礎：mechanics之關鍵定義與物理幾何直覺",
        "解題前置檢核：確認題型情境、已知條件量與求解目標"
      ],
      "fatalTraps": [
        {
          "wrongThinking": "直覺套用公式而忽略先決條件（如桁架節點無外力才能判定零桿、或構件必須受阻才會產生熱應力）。",
          "correctThinking": "回歸核心公理與基本定義，逐項檢核題幹條件與反例。",
          "trapDescription": "考生常因忽略正負號約定（如拉力為正/壓力為負、逆時針為正力矩）或未確認自由體圖支承反力完整性而失分。"
        }
      ],
      "eliteMentalModels": [
        {
          "technique": "第一性原理拆解法 (First Principles Breakdown)",
          "explanation": "不依賴死記死背，由最底層的定義與公理邏輯推導出解題路徑，降維打擊各類統測變形題。"
        }
      ],
      "covered_question_ids": [
        "111-1-16",
        "112-1-9",
        "112-1-11",
        "112-1-16",
        "115-1-17",
        "110-1-1",
        "110-1-9",
        "110-1-17",
        "110-1-25",
        "110-1-33"
      ],
      "worked_examples": [
        {
          "question": "【步驟化例題】鋼索力量分解：某建築斜拉索張力 T = 200 kN，與水平夾角為 30°。試求此張力之水平分力與垂直分力。",
          "difficulty": "基礎",
          "steps": [
            "步驟 1：建立笛卡兒座標系。將張力作用點設為原點，水平為 X 軸，垂直為 Y 軸。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "步驟 2：利用三角函數分解向量。Fx = T · cos(30°), Fy = T · sin(30°)。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "步驟 3：代入數值求得解答。Fx = 200 × 0.866 = 173.2 kN；Fy = 200 × 0.5 = 100 kN。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "水平分力為 173.2 kN，垂直分力為 100 kN",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        }
      ],
      "illustrations": [
        "units-vectors-context.webp",
        "units-vectors-mechanism.webp",
        "units-vectors-comparison.webp",
        "units-vectors-step.webp",
        "mechanics-real-world.webp",
        "concept-diagram.webp",
        "formula-visual.webp"
      ],
      "concepts": [
        {
          "heading": "SI 單位制與工程單位換算 (SI Units & Engineering System)",
          "body": "在**國際單位制 (SI)** 中，力學的基礎物理量包含長度 (<span className=\"text-rose-600 font-bold\">m</span>)、質量 (<span className=\"text-rose-600 font-bold\">kg</span>) 與時間 (<span className=\"text-rose-600 font-bold\">s</span>)。其餘如力、應力與力矩均為**導出單位**。在土木與建築結構工程中，常用的衍生單位包含 <span className=\"text-indigo-600 font-bold\">kN (千牛頓)</span>、<span className=\"text-indigo-600 font-bold\">MPa (百萬帕斯卡, N/mm²)</span> 與 <span className=\"text-indigo-600 font-bold\">GPa (吉帕斯卡)</span>，解題前必須先熟練單位制轉換。",
          "steps": [
            "質量 m (kg) 與重量 W (N) 之轉換：W = m · g (標準重力加速度 g ≒ 9.81 m/s²，工程計算常用 9.8 或 10 m/s²)。",
            "應力與壓力單位換算：1 Pa = 1 N/m²；1 MPa = 10⁶ N/m² = 1 N/mm²（此為結構工程計算截面應力最核心之單位）。",
            "力矩與彎矩單位換算：1 kN·m = 10³ N·m = 10⁶ N·mm。"
          ],
          "table": {
            "headers": [
              "物理量",
              "國際標準單位 (SI)",
              "工程常用單位",
              "單位換算關係"
            ],
            "rows": [
              [
                "長度 (Length, L)",
                "m (公尺)",
                "mm, cm",
                "1 m = 1000 mm"
              ],
              [
                "質量 (Mass, m)",
                "kg (公斤)",
                "t (公噸)",
                "1 t = 1000 kg"
              ],
              [
                "力 (Force, F)",
                "N (牛頓)",
                "kN (千牛頓)",
                "1 kN = 1000 N = 10³ N"
              ],
              [
                "應力 (Stress, σ)",
                "Pa (帕斯卡)",
                "MPa (N/mm²)",
                "1 MPa = 1 N/mm² = 10⁶ Pa"
              ],
              [
                "力矩 (Moment, M)",
                "N·m (牛頓米)",
                "kN·m, N·mm",
                "1 kN·m = 10⁶ N·mm"
              ]
            ]
          }
        },
        {
          "heading": "純量與向量的物理意義 (Scalars vs. Vectors)",
          "body": "**純量**僅具備<span className=\"text-rose-600 font-bold\">大小</span>（如質量、溫度、面積、應變能）；**向量**則同時兼具<span className=\"text-rose-600 font-bold\">大小與方向</span>（如位移、速度、力、力矩、加速度）。在結構力學中，力的完整定義包含三要素：<span className=\"text-indigo-600 font-bold\">大小 (Magnitude)</span>、<span className=\"text-indigo-600 font-bold\">方向 (Direction)</span> 與<span className=\"text-indigo-600 font-bold\">作用點 (Point of Application)</span>。\n\n### 🔗 跨學科連結\n在《材料與試驗》中，材料的密度與孔隙率屬於「純量」，不具方向性；而材料受力變形時產生的「應力 (Stress)」與「應變 (Strain)」在進階力學中是以張量或向量形式處理，需考量作用面與方向。\n\n### 🚨 統測陷阱\n考生常誤將「重量 (W)」當作純量，實際上重量是重力加速度作用於質量產生的力，屬於「向量」，具有向下的方向性！",
          "table": {
            "headers": [
              "物理量類別",
              "定義特徵",
              "代表物理量",
              "運算規則"
            ],
            "rows": [
              [
                "純量 (Scalar)",
                "僅有數值大小與單位",
                "質量 m, 體積 V, 面積 A, 能量 U",
                "遵循代數加減法規則"
              ],
              [
                "向量 (Vector)",
                "同時具備大小、方向與作用點",
                "力 F, 位移 d, 力矩 M, 加速度 a",
                "遵循平行四邊形定律與平行分解"
              ]
            ]
          }
        },
        {
          "heading": "平面向量的正交分解與合成 (Orthogonal Vector Resolution)",
          "body": "在二維平面中，任意力向量 F 可透過三角函數分解為正交的 X 軸與 Y 軸分力；反之，若已知多個正交分力，可透過畢氏定理與反三角函數合成合力的大小與角度。例如新北淡江大橋的斜拉索張力，即可分解為垂直抗重力分力與水平抗風/抗震分力。",
          "formula": "Fx = F · cos(θ)\nFy = F · sin(θ)\nF = √(Fx² + Fy²)\nθ = tan⁻¹(Fy / Fx)",
          "steps": [
            "建立正交笛卡兒座標系 (X-Y)。",
            "計算各作用力之水平與垂直分力純量和：∑Fx = ∑(Fi · cos θi), ∑Fy = ∑(Fi · sin θi)。",
            "利用畢氏定理求合力大小：F_R = √((∑Fx)² + (∑Fy)²)。",
            "計算合力與正 X 軸之夾角：θ = tan⁻¹(|∑Fy| / |∑Fx|)，並依正負號判定所處象限。"
          ]
        },
        {
          "heading": "三維空間向量與單位向量 (3D Vectors & Unit Vector)",
          "body": "對於複雜建築結構（如臺中國家歌劇院曲牆或大跨距空間鋼骨網架），作用力常屬於三維**空間力系**。空間向量可透過空間位移與單位向量 λ 表示，並藉由<span className=\"text-indigo-600 font-bold\">方向餘弦 (Direction Cosines)</span> 確定其空間方向。",
          "formula": "F_vec = F · λ_vec = F · (dx i + dy j + dz k) / L\nL = √(dx² + dy² + dz²)\ncos(α) = dx / L,  cos(β) = dy / L,  cos(γ) = dz / L"
        },
        {
          "heading": "工程實例：九二一地震教育園區車籠埔斷層館之斜拉鋼索力學分析",
          "body": "位於臺中霧峰的九二一地震教育園區，車籠埔斷層館採用斜拉式張力結構系統，將薄膜屋頂重量透過傾斜鋼索傳遞至背後鋼骨柱與地錨。假設一主要鋼索與水平面夾角 θ = 60°，承受拉力 T = 500 kN。經向量分解可知：垂直分力 Ty = 500 × sin(60°) ≒ 433 kN 用以支撐屋頂自重與風載重；水平分力 Tx = 500 × cos(60°) = 250 kN 則由背後抗拉地錨與斜柱平衡。此即向量分解於結構抗震防護之經典應用。"
        }
      ],
      "practices": [
        {
          "difficulty": "基礎",
          "question": "在平面笛卡兒座標系中，有一共點力系受到兩力作用：F1 = 60 N (方向沿正 +x 軸，θ1 = 0°)，F2 = 80 N (方向沿正 +y 軸，θ2 = 90°)。試求此兩力之合力大小 F_R 及合力與 +x 軸之夾角 θ。",
          "steps": [
            "求 x 方向合力分量：∑Fx = F1 · cos(0°) + F2 · cos(90°) = 60 × 1 + 80 × 0 = 60 N。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "求 y 方向合力分量：∑Fy = F1 · sin(0°) + F2 · sin(90°) = 60 × 0 + 80 × 1 = 80 N。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "利用畢氏定理計算合力大小：F_R = √((∑Fx)² + (∑Fy)²) = √(60² + 80²) = √(3600 + 6400) = √10000 = 100 N。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "計算方向角 θ：θ = tan⁻¹(∑Fy / ∑Fx) = tan⁻¹(80 / 60) = tan⁻¹(4/3) ≒ 53.13°。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "F_R = 100 N，方向角 θ = 53.13°",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        },
        {
          "difficulty": "高頻統測題",
          "question": "一平面共點力系中，有三力 F1 = 100 N (沿 +x 軸, 0°)、F2 = 100 N (120°) 與 F3 = 100 N (240°)。試求此三力之合力大小 F_R。",
          "steps": [
            "計算水平分力和 ∑Fx：∑Fx = 100·cos(0°) + 100·cos(120°) + 100·cos(240°) = 100 + 100(-0.5) + 100(-0.5) = 100 - 50 - 50 = 0 N。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "計算垂直分力和 ∑Fy：∑Fy = 100·sin(0°) + 100·sin(120°) + 100·sin(240°) = 0 + 100(√3/2) + 100(-√3/2) = 0 N。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "合成合力大小：F_R = √(0² + 0²) = 0 N。（此為三力夾角各 120° 且大小相等之對稱<span className=\"text-rose-600 font-bold\">靜力平衡</span>）。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "F_R = 0 N (<span className=\"text-rose-600 font-bold\">靜力平衡</span>)",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        },
        {
          "difficulty": "進階",
          "question": "（九二一地震教育園區實務簡化題）一結構抗震鋼索固定於地面錨定點 A(0, 0, 0)m，並連接至屋頂鋼桁架節點 B(3, 4, 12)m。若鋼索承受沿 AB 方向的張力 T = 130 kN。試求解：(1) 鋼索長度 L；(2) 鋼索作用於 B 點處之三維正交分力向量 (Tx, Ty, Tz)。",
          "steps": [
            "求點 A 至點 B 的空間位移向量：r_AB = (3 - 0)i + (4 - 0)j + (12 - 0)k = (3i + 4j + 12k) m。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "計算鋼索長度 L：L = √(3² + 4² + 12²) = √(9 + 16 + 144) = √169 = 13 m。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "求沿 AB 方向的單位向量 λ_AB：λ_AB = r_AB / L = (3/13)i + (4/13)j + (12/13)k。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "由作用於 B 點拉回 A 點的方向 (方向為 -λ_AB)，求作用於 B 點的各分力大小：\n- Tx = 130 × (-3 / 13) = -30 kN (向 -x 方向)\n- Ty = 130 × (-4 / 13) = -40 kN (向 -y 方向)\n- Tz = 130 × (-12 / 13) = -120 kN (向下下拉) ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "驗證合力大小：F = √((-30)² + (-40)² + (-120)²) = √(900 + 1600 + 14400) = √16900 = 130 kN。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "L = 13 m，分力向量為 Tx = -30 kN, Ty = -40 kN, Tz = -120 kN",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        },
        {
          "difficulty": "高頻統測題",
          "question": "一力 F = 200 N 作用於與 +x 軸夾角 60° 方向。試求解：(1) 該力在 x 軸與 y 軸的正交分力 Fx, Fy；(2) 若將此力分解為與 +x 軸夾角 30° 之 u 軸與沿 y 軸之斜交分力 Fu, Fv，試利用餘弦/正弦定理求解 Fu。",
          "steps": [
            "正交分力計算：Fx = 200 × cos(60°) = 100 N；Fy = 200 × sin(60°) = 173.2 N。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "非正交分解：繪製向量三角形，力 F (200N) 為合力，斜向分力 Fu 與 +x 夾 30°，Fv 沿 +y 軸 (垂直)。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "在向量三角形中，F 與 u 軸夾 30°，與 v 軸夾 30°。由正弦定理：Fu / sin(60°) = F / sin(90°)。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "Fu = 200 × (√3/2) / 1 = 100√3 N ≒ 173.2 N。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "正交分力 (100 N, 173.2 N)；斜交分力 Fu = 173.2 N",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        }
      ]
    },
    {
      slug: 'force-equilibrium',
      "title": "2. 力系與共點力平衡",
      "desc": "**自由體圖 (FBD)** 畫法、**二力構件**與三力平衡、拉密定理 (Lami's Theorem)、平面一般力系平衡條件。",
      "status": "done",
      "gradeLevel": 10,
      "examHitRate": 4,
      "step0Prerequisites": [
        "本章核心基礎：force-equilibrium之關鍵定義與物理幾何直覺",
        "解題前置檢核：確認題型情境、已知條件量與求解目標"
      ],
      "fatalTraps": [
        {
          "wrongThinking": "直覺套用公式而忽略先決條件（如桁架節點無外力才能判定零桿、或構件必須受阻才會產生熱應力）。",
          "correctThinking": "回歸核心公理與基本定義，逐項檢核題幹條件與反例。",
          "trapDescription": "考生常因忽略正負號約定（如拉力為正/壓力為負、逆時針為正力矩）或未確認自由體圖支承反力完整性而失分。"
        }
      ],
      "eliteMentalModels": [
        {
          "technique": "第一性原理拆解法 (First Principles Breakdown)",
          "explanation": "不依賴死記死背，由最底層的定義與公理邏輯推導出解題路徑，降維打擊各類統測變形題。"
        }
      ],
      "covered_question_ids": [
        "111-1-15",
        "112-1-3",
        "113-1-1",
        "113-1-4",
        "113-1-5",
        "114-1-4",
        "114-1-6",
        "114-1-13",
        "114-1-20",
        "115-1-1",
        "115-1-2",
        "110-1-2",
        "110-1-10",
        "110-1-18",
        "110-1-26",
        "110-1-34"
      ],
      "worked_examples": [
        {
          "question": "【步驟化例題】招牌吊掛平衡：一重 300 N 之懸臂招牌，由兩根傾斜角分別為 30° 與 60° 的鋼索支撐於牆面，求兩鋼索張力。",
          "difficulty": "基礎",
          "steps": [
            "步驟 1：畫出招牌懸掛點之**自由體圖 (FBD)**，標示向下重力 300N，以及兩未知張力 Ta, Tb。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "步驟 2：建立 x-y 平衡方程式。∑Fx = 0: -Ta·cos(30°) + Tb·cos(60°) = 0。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "步驟 3：建立 y 平衡方程式。∑Fy = 0: Ta·sin(30°) + Tb·sin(60°) - 300 = 0。解聯立方程式求得 Ta 與 Tb。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "Ta = 150 N, Tb = 259.8 N",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        }
      ],
      "illustrations": [
        "force-equilibrium-context.webp",
        "force-equilibrium-mechanism.webp",
        "force-equilibrium-comparison.webp",
        "force-equilibrium-step.webp",
        "mechanics-real-world.webp",
        "concept-diagram.webp",
        "formula-visual.webp"
      ],
      "concepts": [
        {
          "heading": "自由體圖 (Free Body Diagram, FBD) 畫法標準流程",
          "body": "自由體圖是求解任何工程力學問題的核心基礎。必須將研究對象（如單一節點、樑、柱、桁架或整座建築）從環境中隔離，正確標註所有已知外力（自重、風載重、活載重）與移除約束後產生的未知支承反力。",
          "steps": [
            "確立隔離體範圍（明確劃定選取對象之邊界）。",
            "畫出隔離體之外形輪廓，並標示已知主動載重（大小、作用點與方向）。",
            "移除約束支承（如鉸支承、滾支承、固定端），替換為正確方向之約束反力 (Reactions)。",
            "建立笛卡兒座標系，指定正力方向與正力矩旋轉方向（習慣指定 counter-clockwise 逆時針為正）。"
          ]
        },
        {
          "heading": "共點力系與拉密定理 (Lami's Theorem)",
          "body": "當三個共面非平行力作用於同一點且處於<span className=\"text-rose-600 font-bold\">靜力平衡</span>時，各力之大小與其對角之正弦值成正比。此即拉密定理，常用於快速求解三力懸掛與張力索系統。",
          "formula": "F1 / sin(α) = F2 / sin(β) = F3 / sin(γ)\n(其中 α, β, γ 分別為 F1, F2, F3 所對應之夾角)",
          "table": {
            "headers": [
              "方法名稱",
              "適用條件",
              "方程式數量",
              "優點與特徵"
            ],
            "rows": [
              [
                "正交分力法 (∑Fx=0, ∑Fy=0)",
                "任意 2D 共點力系",
                "2 個代數方程",
                "通用性高，適合多力合成"
              ],
              [
                "拉密定理 (Lami's Theorem)",
                "僅限 2D 三力共點平衡",
                "1 個比例式",
                "無需分解分力，幾何三角求解極快"
              ],
              [
                "封閉力三角形法",
                "2D 三力共點平衡",
                "向量幾何圖形",
                "直觀展示力的向量閉合圖樣"
              ]
            ]
          }
        },
        {
          "heading": "**二力構件**與**三力構件** (Two-Force & Three-Force Members)",
          "body": "若一構件僅在兩點受力且無外力矩，稱為**二力構件** (Two-Force Member)，其兩端作用力必等大、反向且共線（如桁架桿件）；若構件受三個不平行力作用而平衡，則此三力之作用線必會聚於同一交點（共點三力定理）。\n\n### 🚨 統測陷阱\n若桿件中間有受自身重量影響（非輕桿），則不能視為「二力構件」，因為此時受力點變為三個（兩端點及重心），需以一般剛體平衡處理！",
          "table": {
            "headers": [
              "構件類型",
              "受力點數量",
              "力的幾何特徵",
              "代表工程應用"
            ],
            "rows": [
              [
                "**二力構件**",
                "僅兩點受力",
                "兩力必等大、反向、共線 (僅受軸力)",
                "桁架桿件、斜撐、斜拉索"
              ],
              [
                "**三力構件**",
                "三點受力/三力作用",
                "三力作用線必會聚於同一點",
                "拱橋拱圈節點、吊車吊臂、斜樑支撐"
              ]
            ]
          }
        },
        {
          "heading": "平面一般力系平衡方程式",
          "body": "對非共點的平面一般力系（兼具移動與旋轉趨勢），物體達到<span className=\"text-rose-600 font-bold\">靜力平衡</span>之<span className=\"text-indigo-600 font-bold\">充要條件</span>為水平合力、垂直合力以及對平面內任意點之合力矩均為零。",
          "formula": "<span className=\"text-rose-600 font-bold\">∑ Fx = 0</span>  （水平方向合力等於零）\n<span className=\"text-rose-600 font-bold\">∑ Fy = 0</span>  （垂直方向合力等於零）\n<span className=\"text-rose-600 font-bold\">∑ M_O = 0</span> （對任意點 O 之合力矩等於零）"
        },
        {
          "heading": "工程實例：臺中國家歌劇院 (Taichung Metropolitan Opera House) 曲牆結構節點平衡",
          "body": "普立茲克獎得主伊東豊雄設計的臺中國家歌劇院採用連續無樑柱的曲牆結構 (Catenoid 雙曲面牆)。在曲牆交會節點上，結構自重、曲面拱作用力與樓板側向力形成複雜的三維共點與非共點力系。結構工程師藉由建立精確的 FBD 自由體圖與三力交會點平衡分析，確定曲牆鋼筋網與高強混凝土在灌漿及營運期間不發生局部剪切滑移破壞。"
        }
      ],
      "practices": [
        {
          "difficulty": "基礎",
          "question": "一重物 W = 200 N 懸掛於 C 點，由 AC 與 BC 兩鋼索繫於天花板。鋼索 AC 與水平面成 45° 角，鋼索 BC 與水平面成 45° 角。試利用拉密定理求解鋼索 AC 之張力 T_AC 與鋼索 BC 之張力 T_BC。",
          "steps": [
            "對懸掛點 C 繪製**自由體圖 (FBD)**，受到三個力：向下重力 W = 200 N、斜向上左之 T_AC、斜向上右之 T_BC。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "計算三力之間的夾角：\n- T_AC 與 T_BC 的夾角 γ = 180° - 45° - 45° = 90°。\n- W 與 T_AC 的夾角 β = 90° + 45° = 135°。\n- W 與 T_BC 的夾角 α = 90° + 45° = 135°。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "套用拉密定理公式：T_AC / sin(135°) = T_BC / sin(135°) = W / sin(90°)。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "代入 W = 200 N 與三角函數值 (sin 90° = 1, sin 135° = √2 / 2)：\nT_AC = 200 × sin(135°) = 200 × (√2 / 2) = 100√2 N ≒ 141.42 N。\n同理 T_BC = 100√2 N ≒ 141.42 N。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "T_AC = T_BC = 100√2 N (約 141.42 N)",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        },
        {
          "difficulty": "高頻統測題",
          "question": "一物體重 W = 100 N，由兩繩索 A 與 B 懸掛於天花板。繩索 A 與水平面成 30° 角，繩索 B 與水平面成 60° 角。求繩索 A 的張力 TA 與繩索 B 的張力 TB。",
          "steps": [
            "繪製節點 C 之 FBD，列出 x 與 y 方向平衡： ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "∑Fx = -TA·cos(30°) + TB·cos(60°) = 0 ⇒ TB·(1/2) = TA·(√3/2) ⇒ TB = √3 TA。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "∑Fy = TA·sin(30°) + TB·sin(60°) - 100 = 0 ⇒ 0.5 TA + (√3 TA)·(√3/2) = 100 ⇒ 0.5 TA + 1.5 TA = 100 ⇒ 2 TA = 100 ⇒ TA = 50 N。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "代回得 TB = 50√3 N ≒ 86.6 N。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "TA = 50 N, TB = 50√3 N (約 86.6 N)",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        },
        {
          "difficulty": "進階",
          "question": "（臺中歌劇院曲牆施工簡化算例）一長度 L = 6 m 的剛性斜鋼樑 AB，底端 A 點為鉸支承 (Pin)，頂端 B 點靠於光滑垂直牆面上（光滑面僅產生垂直於牆面之水平反力 N_B）。鋼樑自重 W = 600 N 集中作用於樑中點，且鋼樑與水平地面夾角 θ = 60°。試求：(1) B 點處之牆面反力 N_B；(2) A 點處鉸支承之水平反力 R_Ax 與垂直反力 R_Ay。",
          "steps": [
            "對斜鋼樑 AB 繪製**自由體圖 (FBD)**：\n- A 點：水平反力 R_Ax (假設向右)，垂直反力 R_Ay (假設向上)。\n- 中點 (距 A 點 3m 處)：向下自重 W = 600 N。\n- B 點 (距 A 點 6m 處)：向左之光滑牆面水平反力 N_B。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "由垂直方向力平衡 <span className=\"text-rose-600 font-bold\">∑ Fy = 0</span>：\nR_Ay - W = 0 ⇒ R_Ay = 600 N (向上)。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "對 A 點取力矩平衡 ∑ M_A = 0 (逆時針為正 +)：\n- 自重 W 產生順時針力矩，力臂為 (L/2) · cos(60°) = 3 × 0.5 = 1.5 m。\n- 牆面反力 N_B 產生逆時針力矩，力臂為 L · sin(60°) = 6 × (√3 / 2) = 3√3 m ≒ 5.196 m。\n- ∑ M_A = N_B × (3√3) - 600 × 1.5 = 0 ⇒ 3√3 N_B = 900 ⇒ N_B = 300 / √3 = 100√3 N ≒ 173.2 N。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "由水平方向力平衡 <span className=\"text-rose-600 font-bold\">∑ Fx = 0</span>：\nR_Ax - N_B = 0 ⇒ R_Ax = N_B = 100√3 N ≒ 173.2 N (向右)。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "N_B = 173.2 N (向左), R_Ax = 173.2 N (向右), R_Ay = 600 N (向上)",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        },
        {
          "difficulty": "高頻統測題",
          "question": "一長 4 m 之均勻剛木桿重 120 N，底端鉸接於地面 A 點，頂端 B 點繫一水平繩索於垂直牆面。若木桿與地面夾角為 45°，試求繩索張力 T 與 A 點支承反力 R_A 大小。",
          "steps": [
            "對木桿取 A 點力矩平衡 ∑M_A = 0：\nT · (4 sin 45°) - 120 · (2 cos 45°) = 0 ⇒ 4 T sin 45° = 240 cos 45° ⇒ 4 T = 240 ⇒ T = 60 N。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "由 ∑Fx = 0 得 R_Ax = T = 60 N (向右)；由 ∑Fy = 0 得 R_Ay = 120 N (向上)。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "A 點總反力 R_A = √(60² + 120²) = √(3600 + 14400) = √18000 = 60√5 N ≒ 134.16 N。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "T = 60 N, R_A = 60√5 N (約 134.2 N)",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        }
      ]
    },
    {
      slug: 'centroid',
      "title": "3. 重心與形心",
      "desc": "一次矩 (First Moment of Area)、組合圖形形心計算、二次矩 (Moment of Inertia)、平行軸定理與帕普斯 (Pappus) 定理。",
      "status": "done",
      "gradeLevel": 10,
      "examHitRate": 4,
      "step0Prerequisites": [
        "本章核心基礎：centroid之關鍵定義與物理幾何直覺",
        "解題前置檢核：確認題型情境、已知條件量與求解目標"
      ],
      "fatalTraps": [
        {
          "wrongThinking": "直覺套用公式而忽略先決條件（如桁架節點無外力才能判定零桿、或構件必須受阻才會產生熱應力）。",
          "correctThinking": "回歸核心公理與基本定義，逐項檢核題幹條件與反例。",
          "trapDescription": "考生常因忽略正負號約定（如拉力為正/壓力為負、逆時針為正力矩）或未確認自由體圖支承反力完整性而失分。"
        }
      ],
      "eliteMentalModels": [
        {
          "technique": "第一性原理拆解法 (First Principles Breakdown)",
          "explanation": "不依賴死記死背，由最底層的定義與公理邏輯推導出解題路徑，降維打擊各類統測變形題。"
        }
      ],
      "covered_question_ids": [
        "111-1-14",
        "111-1-17",
        "112-1-1",
        "113-1-7",
        "113-1-8",
        "114-1-17",
        "115-1-13",
        "115-1-16",
        "110-1-3",
        "110-1-11",
        "110-1-19",
        "110-1-27",
        "110-1-35"
      ],
      "worked_examples": [
        {
          "question": "【步驟化例題】T型梁形心計算：一 T 型截面梁，頂部翼板 100mm×20mm，腹板 20mm×80mm，求其距底邊之形心 Y 位置。",
          "difficulty": "中等",
          "steps": [
            "步驟 1：將 T 型截面分解為上部矩形 (A1) 與下部矩形 (A2)。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "步驟 2：計算個別面積與形心。A1 = 2000 mm², y1 = 90 mm (距底邊)；A2 = 1600 mm², y2 = 40 mm (距底邊)。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "步驟 3：利用<span className=\"text-rose-600 font-bold\">面積一次矩</span>公式 Y = (A1·y1 + A2·y2) / (A1 + A2) 求解。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "Y = 67.78 mm",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        }
      ],
      "illustrations": [
        "centroid-context.webp",
        "centroid-mechanism.webp",
        "centroid-comparison.webp",
        "centroid-step.webp",
        "mechanics-real-world.webp",
        "concept-diagram.webp",
        "formula-visual.webp"
      ],
      "concepts": [
        {
          "heading": "**形心 (Centroid)** 與<span className=\"text-rose-600 font-bold\">面積一次矩</span>理論",
          "body": "形心代表截面幾何形狀的中心位置。透過對參考軸計算<span className=\"text-rose-600 font-bold\">面積一次矩</span> Qx = ∫ y dA 及 Qy = ∫ x dA，再除以總面積 A，即可求得形心座標 (X, Y)。在結構工程中，形心位置即為梁柱彎矩<span className=\"text-indigo-600 font-bold\">中性軸 (Neutral Axis)</span> 所在。\n\n### 🔗 跨學科連結\n《材料與試驗》中提到的「鋼筋混凝土梁」，其配筋設計必須依據梁截面的「形心」與「中性軸」來決定鋼筋的精確位置，以抵抗最大的拉應力。\n\n### 🚨 統測陷阱\n計算組合圖形形心時，遇到「挖空」的面積（如圓孔），其面積與面積一次矩必須帶「負號」代入公式，這是最多人計算錯誤的地方！\n\n| 概念 | 公式 | 物理意義 |\n|---|---|---|\n| 面積一次矩 | Q = A × y | 決定形心位置，與座標軸選取有關 |\n| 面積二次矩 | I = A × y² | 決定抗彎剛度 (慣性矩)，恆為正值 |",
          "formula": "X = Qy / A = (∑ Ai · xi) / ∑ Ai\nY = Qx / A = (∑ Ai · yi) / ∑ Ai",
          "steps": [
            "將複雜組合圖形分割為數個已知簡單幾何基元（如矩形、三角形、半圓）。",
            "建立基準參考座標系 (基底 y = 0 與左緣 x = 0)。",
            "分別計算各分割基元之面積 Ai 與其自身形心座標 (xi, yi)。",
            "求總面積 A = ∑ Ai 及<span className=\"text-rose-600 font-bold\">面積一次矩</span> ∑(Ai · xi) 與 ∑(Ai · yi)，相除求得總形心。"
          ]
        },
        {
          "heading": "常見基本幾何圖形之形心與<span className=\"text-rose-600 font-bold\">慣性矩</span>對照表",
          "body": "計算結構斷面<span className=\"text-rose-600 font-bold\">慣性矩</span>與形心時，熟記基本幾何幾何圖形之面積與形心軸<span className=\"text-rose-600 font-bold\">慣性矩</span> Ix_c 為必備基礎。",
          "table": {
            "headers": [
              "圖形名稱",
              "面積 (A)",
              "形心位置 (對底邊/中心)",
              "形心軸<span className=\"text-rose-600 font-bold\">慣性矩</span> (Ix_c)"
            ],
            "rows": [
              [
                "矩形 (寬 b, 高 h)",
                "b · h",
                "y = h / 2",
                "(b · h³) / 12"
              ],
              [
                "直角三角形 (底 b, 高 h)",
                "(b · h) / 2",
                "y = h / 3, x = b / 3",
                "(b · h³) / 36"
              ],
              [
                "圓形 (半徑 r)",
                "π · r²",
                "y = r, x = r",
                "(π · r⁴) / 4"
              ],
              [
                "半圓形 (半徑 r)",
                "(π · r²) / 2",
                "y = 4r / (3π)",
                "0.1098 · r⁴ (對形心水平軸)"
              ]
            ]
          }
        },
        {
          "heading": "**平行軸定理 (Parallel Axis Theorem)**",
          "body": "當計算截面對於任意平行參考軸（如總形心軸 X_bar）之二次矩 (<span className=\"text-rose-600 font-bold\">慣性矩 Moment of Inertia</span>) 時，可先計算各分割件對自身形心軸之<span className=\"text-rose-600 font-bold\">慣性矩</span> Ix_c，再加上平行轉移項 A · d²（d 為分圖形形心至總形心軸的垂直距離）。平行軸定理是計算組合截面（如工字梁、T型梁）剛度的核心工具。",
          "formula": "I_x = ∑ (I_xci + A_i · d_yi²)\nI_y = ∑ (I_yci + A_i · d_xi²)",
          "steps": [
            "【拆解截面】：將複雜的組合截面拆解為簡單的幾何基元（矩形、三角形等）。",
            "【求各形心與面積】：計算各個基元的面積 Ai 及其自身形心位置，並計算整體截面的總形心坐標。",
            "【求位移量 d】：計算每個基元自身形心到整體截面總形心軸的垂直距離 di。",
            "【帶入定理】：將各基元自身形心軸的慣性矩 Ix_c 加上 Ai · di²，最後加總即為總慣性矩。"
          ]
        },
        {
          "heading": "**帕普斯定理** (Pappus Theorems for Area & Volume)",
          "body": "帕普斯第一定理：一平面曲線繞同平面非交會軸旋轉所得之旋轉曲面面積等於曲線長乘以其形心旋轉移動之距離 (S = L · 2π y_bar)。第二定理：一平面面積繞軸旋轉所得之旋轉體體積等於面積乘以其形心移動距離 (V = A · 2π y_bar)。此定理廣泛應用於土木水壩、穹頂與儲油槽體積之快速算量。"
        },
        {
          "heading": "工程實例：臺北101大樓 (Taipei 101) 巨型箱型鋼柱截面形心與<span className=\"text-rose-600 font-bold\">慣性矩</span>",
          "body": "臺北101大樓外圍的 8 支巨型鋼柱 (Mega Columns)，採用內灌 10,000 psi 高強混凝土的鋼鈑箱型柱 (Box Section)。透過計算鋼鈑與混凝土組合截面的總形心與二次矩 (Ix, Iy)，結構技師大幅提升巨柱的抗彎剛度 (EI)，配合 660 公噸風阻尼器球體 (TMD) 的懸掛形心精準定位，有效抵抗強颱與大地震引起的側向擺動。"
        }
      ],
      "practices": [
        {
          "difficulty": "基礎",
          "question": "一對稱工字型鋼 (I-Beam) 截面，頂部翼板與底部翼板尺寸均為 200 mm (寬) × 20 mm (厚)，中間腹板尺寸為 20 mm (厚) × 160 mm (高)。求此工字型截面距底邊之 Y 形心位置及總截面積 A。",
          "steps": [
            "將圖形分割為三個矩形基元：\n- 1. 頂翼板 (上)：A1 = 200 × 20 = 4000 mm²，形心 y1 = 20 + 160 + (20/2) = 190 mm。\n- 2. 腹板 (中)：A2 = 20 × 160 = 3200 mm²，形心 y2 = 20 + (160/2) = 100 mm。\n- 3. 底翼板 (下)：A3 = 200 × 20 = 4000 mm²，形心 y3 = 20 / 2 = 10 mm。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "計算總截面積 A：A = A1 + A2 + A3 = 4000 + 3200 + 4000 = 11,200 mm²。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "計算<span className=\"text-rose-600 font-bold\">面積一次矩</span> ∑(Ai · yi)：\n∑(Ai · yi) = (4000 × 190) + (3200 × 100) + (4000 × 10) = 760,000 + 320,000 + 40,000 = 1,120,000 mm³。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "求解 Y 形心：Y = ∑(Ai · yi) / A = 1,120,000 / 11,200 = 100 mm。（亦可直接由幾何上下對稱性判定 Y = 200 / 2 = 100 mm）。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "Y = 100 mm (距底邊)，總截面積 A = 11,200 mm²",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        },
        {
          "difficulty": "高頻統測題",
          "question": "一個 T 型斷面，頂部翼板寬 100 mm、厚 20 mm，腹板寬 20 mm、高 80 mm。求此 T 型斷面距底部基底之 Y 形心位置。",
          "steps": [
            "頂部翼板 A1 = 100 × 20 = 2000 mm²，形心 y1 = 80 + (20/2) = 90 mm。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "腹板 A2 = 20 × 80 = 1600 mm²，形心 y2 = 80 / 2 = 40 mm。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "總面積 A_total = 2000 + 1600 = 3600 mm²。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "<span className=\"text-rose-600 font-bold\">面積一次矩</span> ∑(Ay) = (2000 × 90) + (1600 × 40) = 180,000 + 64,000 = 244,000 mm³。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "Y 形心 = 244,000 / 3600 ≒ 67.78 mm。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "Y = 67.78 mm (距底邊)",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        },
        {
          "difficulty": "進階",
          "question": "（臺北101巨柱算例簡化）承第一題之對稱工字型截面 (翼板 200×20 mm，腹板 20×160 mm)，試利用平行軸定理求此截面對其中性軸 (過總形心 Y = 100 mm 之水平軸 X_bar) 的總<span className=\"text-rose-600 font-bold\">慣性矩</span> Ix。",
          "steps": [
            "總形心位置 Y_bar = 100 mm。對各基元分別求解對形心軸之<span className=\"text-rose-600 font-bold\">慣性矩</span>： ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "【腹板 (中)】：自身 Ix2 = (b · h³) / 12 = (20 × 160³) / 12 = 6,826,666.67 mm⁴。距離 d2 = 0。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "【頂翼板 (上)】：自身 Ix1 = (200 × 20³) / 12 = 133,333.33 mm⁴。距總形心距離 d1 = |190 - 100| = 90 mm。\n- 依平行軸定理：Ix1_total = Ix1 + A1 · d1² = 133,333.33 + 4000 × (90)² = 32,533,333.33 mm⁴。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "【底翼板 (下)】：與頂翼板對稱，Ix3_total = 32,533,333.33 mm⁴。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "【總<span className=\"text-rose-600 font-bold\">慣性矩</span> Ix】：Ix = 32,533,333.33 + 6,826,666.67 + 32,533,333.33 = 71,893,333.33 mm⁴ ≒ 7.189 × 10⁷ mm⁴。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "Ix = 7.189 × 10⁷ mm⁴ (即 71.89 × 10⁶ mm⁴)",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        },
        {
          "difficulty": "高頻統測題",
          "question": "一底寬 b = 6 cm、高 h = 9 cm 之直角三角形，求其形心距底邊之高度 y_c 以及對底邊 b 之<span className=\"text-rose-600 font-bold\">慣性矩</span> I_base。",
          "steps": [
            "直角三角形形心高度：y_c = h / 3 = 9 / 3 = 3 cm。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "對底邊之<span className=\"text-rose-600 font-bold\">慣性矩</span>公式：I_base = (b · h³) / 12 = (6 × 9³) / 12 = (6 × 729) / 12 = 364.5 cm⁴。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "（對形心軸之<span className=\"text-rose-600 font-bold\">慣性矩</span> Ix_c = b h³ / 36 = 121.5 cm⁴，驗證平行軸定理：I_base = 121.5 + (27)×(3)² = 121.5 + 243 = 364.5 cm⁴）。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "y_c = 3 cm, I_base = 364.5 cm⁴",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        }
      ]
    },
    {
      slug: 'friction',
      "title": "4. 摩擦力",
      "desc": "靜摩擦與動摩擦機制、最大**靜摩擦力** (fs_max = μs N)、摩擦角與自鎖條件、塊體滑動與<span className=\"text-indigo-600 font-bold\">翻覆傾倒</span>臨界競爭判斷。",
      "status": "done",
      "gradeLevel": 10,
      "examHitRate": 4,
      "step0Prerequisites": [
        "最大**靜摩擦力**：Fmax = μs · N",
        "正向力 N 必須由自由體圖 ΣFy=0 求出，不一定等於重量 W"
      ],
      "fatalTraps": [
        {
          "wrongThinking": "不論物體是否運動，一律帶入摩擦力 F = μ · N 計算。",
          "correctThinking": "物體靜止未達臨界時，摩擦力由<span className='text-rose-600 font-bold'>靜力平衡</span>決定 (F = 外力)；只有在「即將滑動」臨界狀態下才達到最大**靜摩擦力** Fmax = μs · N。",
          "trapDescription": "混淆**靜摩擦力**與最大**靜摩擦力**，題目問物體受力時直接代入公式算錯。"
        }
      ],
      "eliteMentalModels": [
        {
          "technique": "滑動與傾倒雙重檢驗 (Slide vs. Tip Dual Check)",
          "explanation": "剛體置於粗糙面受推力時，先檢驗滑動臨界推力 F_slide = μW，再檢驗繞角點傾倒推力 F_tip = W(b/2h)，兩者取較小值即為破壞機制。"
        }
      ],
      "covered_question_ids": [
        "111-1-7",
        "111-1-18",
        "111-1-19",
        "112-1-8",
        "113-1-14",
        "114-1-2",
        "114-1-15",
        "115-1-14"
      ],
      "worked_examples": [
        {
          "question": "【步驟化例題】擋土牆抗滑分析：擋土牆自重 500 kN，牆底與土壤靜摩擦係數 0.5。若承受側向土壓力 P = 200 kN，判斷是否會滑動？",
          "difficulty": "基礎",
          "steps": [
            "步驟 1：畫出牆體 FBD。垂直力僅有自重 W = 500 kN，故地表正向力 N = 500 kN。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "步驟 2：計算最大**靜摩擦力**。fs_max = μs · N = 0.5 × 500 = 250 kN。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "步驟 3：比較側向推力與抗滑力。P = 200 kN < fs_max = 250 kN，故擋土牆不會滑動。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "不會滑動 (抗滑安全係數 = 1.25)",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        }
      ],
      "illustrations": [
        "friction-context.webp",
        "friction-mechanism.webp",
        "friction-comparison.webp",
        "friction-step.webp",
        "mechanics-real-world.webp",
        "concept-diagram.webp",
        "formula-visual.webp"
      ],
      "concepts": [
        {
          "heading": "庫侖乾摩擦定律 (Coulomb's Law of Dry Friction)",
          "body": "當兩接觸表面具有相對運動趨勢時，接觸面切線方向會產生阻礙滑動的**靜摩擦力** fs。**靜摩擦力**隨外推力增加而增大，直到達到即將滑動的臨界狀態最大**靜摩擦力** fs_max = μs · N。一旦開始滑動，摩擦力降為**動摩擦力** fk = μk · N（通常動摩擦係數 μk < 靜摩擦係數 μs）。",
          "formula": "最大**靜摩擦力**：fs_max = μs · N\n**動摩擦力**：fk = μk · N\n(N 為法向正向力，μs 與 μk 分別為靜/動摩擦係數)"
        },
        {
          "heading": "**摩擦角 (Friction Angle)** 與自鎖原理 (Self-Locking)",
          "body": "在臨界滑動狀態下，正向力 N 與最大**靜摩擦力** fs_max 之合力 R 與法線之間的夾角稱為摩擦角 φs。當斜面傾角 θ ≤ φs 時，物體不論重量多大均能穩定靜止於斜面上，此現象稱為<span className=\"text-indigo-600 font-bold\">自鎖 (Self-Locking)</span>，廣泛應用於土木擋土牆設計與結構楔形銷接。",
          "formula": "tan(φs) = fs_max / N = μs\n自鎖臨界條件：傾角 θ ≤ φs = tan⁻¹(μs)"
        },
        {
          "heading": "<span className=\"text-rose-600 font-bold\">滑動 (Sliding)</span> 與<span className=\"text-indigo-600 font-bold\">傾倒 (Tipping)</span> 臨界競爭判斷機制",
          "body": "高寬比較大或承受高位外力的結構體（如高樓結構、擋土牆牆體、施工高架支撐塔），施加水平外力 P 時，可能先發生整體「水平滑動」或先發生「<span className=\"text-indigo-600 font-bold\">翻覆傾倒</span>」。工程設計必須同時進行兩者臨界力算式比較。",
          "steps": [
            "【滑動模式】：假設發生臨界滑動，令 P_slide = fs_max = μs · N (其中由 ∑Fy=0 求正向力 N)。",
            "【傾倒模式】：假設繞底緣轉軸角點 (如右下角 A 點) 發生臨界翻覆，此時正向力 N 集中於 A 點。對 A 點取力矩平衡 ∑ M_A = 0 算出 P_tip。",
            "【競爭比較】：比較 P_slide 與 P_tip，較小者即為實際發生的破壞模式與臨界破壞推力 P_crit！"
          ],
          "table": {
            "headers": [
              "破壞模式",
              "臨界狀態特徵",
              "臨界推力公式",
              "影響主要幾何/物理因子"
            ],
            "rows": [
              [
                "水平<span className=\"text-rose-600 font-bold\">滑動 (Sliding)</span>",
                "接觸面全區即將發生相對滑移",
                "P_slide = μs · W",
                "摩擦係數 μs、總重 W"
              ],
              [
                "<span className=\"text-indigo-600 font-bold\">翻覆傾倒</span> (Tipping)",
                "正向力 N 移至邊緣角點，另一側脫離",
                "P_tip = W · (B / 2H)",
                "寬高比 B/H、總重 W"
              ]
            ]
          }
        },
        {
          "heading": "皮帶與纜繩摩擦 (Belt & Cable Friction)",
          "body": "在施工吊裝工程、懸索橋纜繩固定或施工鷹架索具中，柔性纜繩繞過圓柱面時，兩端張力滿足歐拉-愛特溫公式 (Euler-Eytelwein Formula)。",
          "formula": "T2 = T1 · e^(μ · β)\n(其中 β 為纜繩接觸弧角，單位必須為弧度 rad)"
        },
        {
          "heading": "工程實例：衛武營國家藝術文化中心 (Kaohsiung Weiwuying) 摩擦擺滑動支承",
          "body": "高雄衛武營具有波浪狀龐大金屬屋頂結構。在施工安裝與熱脹冷縮轉接處，設計了摩擦擺滑動支承 (Friction Pendulum Bearings)。利用精確調控的超低摩擦係數 μ (約 0.03~0.05)，在強烈地震發生時透過擺動滑動消散地震能量，大幅降低傳遞至主體結構的側向地震力。"
        }
      ],
      "practices": [
        {
          "difficulty": "基礎",
          "question": "一質量 m = 50 kg 的混凝土塊放置於混凝土斜面上，已知混凝土間的靜摩擦係數 μs = 0.6。試問當斜面傾角 θ 至少達到多少度時，混凝土塊才會開始沿斜面下滑？ (取 g = 9.8 m/s²)",
          "steps": [
            "對斜面上之混凝土塊繪製 FBD：\n- 沿斜面向下分力：W_parallel = m · g · sin(θ)。\n- 垂直斜面正向力：N = m · g · cos(θ)。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "最大**靜摩擦力**：fs_max = μs · N = μs · m · g · cos(θ)。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "臨界下滑平衡條件：W_parallel = fs_max ⇒ m · g · sin(θ) = μs · m · g · cos(θ)。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "兩邊同除以 m · g · cos(θ)：tan(θ) = μs = 0.6。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "計算角度 θ：θ = tan⁻¹(0.6) ≒ 30.96°。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "θ ≒ 30.96°",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        },
        {
          "difficulty": "高頻統測題",
          "question": "一重 W = 500 N 的木塊放在水平地面上，木塊與地面靜摩擦係數 μs = 0.4。若欲推動木塊，試求：(1) 水平推力 P 最小需為多少？ (2) 若改以與水平面向上夾 30° 角拉動木塊，最小拉力 P_pull 為多少？",
          "steps": [
            "水平推動：N = W = 500 N，P_min = fs_max = μs N = 0.4 × 500 = 200 N。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "斜向 30° 拉動：列出平衡方程式：\n- ∑Fy = N + P_pull sin(30°) - 500 = 0 ⇒ N = 500 - 0.5 P_pull。\n- ∑Fx = P_pull cos(30°) - fs_max = 0 ⇒ P_pull cos(30°) = μs (500 - 0.5 P_pull)。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "代入數值：0.866 P_pull = 0.4 × (500 - 0.5 P_pull) = 200 - 0.2 P_pull。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "1.066 P_pull = 200 ⇒ P_pull = 200 / 1.066 ≒ 187.6 N。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "水平推力 P = 200 N；斜向拉力 P_pull ≒ 187.6 N",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        },
        {
          "difficulty": "進階",
          "question": "（衛武營施工高架支撐塔安全檢驗簡化題）一高 H = 4 m、寬 B = 2 m、總重 W = 100 kN 的直立式矩形施工支撐塔，放置於水平地面上。支撐塔底座與地面間的靜摩擦係數 μs = 0.35。現於塔頂 H = 4 m 處施加一水平推力 P。試分析：(1) 該支撐塔會先發生「滑動」還是「傾倒」？(2) 臨界推力 P_crit 為何？",
          "steps": [
            "【分析一：臨界滑動推力 P_slide】：\n- 由垂直平衡 <span className=\"text-rose-600 font-bold\">∑ Fy = 0</span> 可得地面正向力 N = W = 100 kN。\n- 最大**靜摩擦力** fs_max = μs · N = 0.35 × 100 = 35 kN。\n- 發生滑動所需最小推力 P_slide = 35 kN。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "【分析二：臨界傾倒推力 P_tip】：\n- 若發生傾倒，支撐塔將繞右下角底點 A 翻轉，正向力 N 移至 A 點。\n- 對 A 點取力矩平衡 ∑ M_A = 0 (逆時針為正 +)：\n  P · H - W · (B / 2) = 0\n  P × 4 - 100 × (2 / 2) = 0 ⇒ 4 P = 100 ⇒ P_tip = 25 kN。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "【比較與結論】：\n- 比較兩推力：P_tip (25 kN) < P_slide (35 kN)。\n- 當水平推力 P 增加至 25 kN 時，支撐塔即已發生<span className=\"text-indigo-600 font-bold\">翻覆傾倒</span>破壞，此時推力尚未達到發生整體滑動所需的 35 kN。\n- 故該結構體會先發生「傾倒」，臨界推力 P_crit = 25 kN。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "先發生「傾倒」，臨界推力 P_crit = 25 kN",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        },
        {
          "difficulty": "高頻統測題",
          "question": "一纜繩繞過一光滑與摩擦混合圓柱半圈 (接觸弧角 β = π rad)，摩擦係數 μ = 0.2。若一端張力 T1 = 100 N，試求纜繩即將滑動時另一端的最大張力 T2。",
          "steps": [
            "歐拉纜繩摩擦公式：T2 = T1 · e^(μ · β)。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "代入 β = π ≒ 3.1416，μ = 0.2： ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "μ · β = 0.2 × 3.1416 = 0.6283。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "e^(0.6283) ≒ 1.8745。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "T2 = 100 × 1.8745 ≒ 187.5 N。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "T2 ≒ 187.5 N",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        }
      ]
    },
    {
      slug: 'truss',
      "title": "5. 平面桁架分析",
      "desc": "桁架靜定性判別 (m + r vs. 2j)、零桿判別法則 (Zero-Force Members)、**節點法 (Method of Joints)** 與**剖面法 (Method of Sections)** 求解桿件軸力。",
      "status": "done",
      "gradeLevel": 10,
      "examHitRate": 4,
      "step0Prerequisites": [
        "本章核心基礎：truss之關鍵定義與物理幾何直覺",
        "解題前置檢核：確認題型情境、已知條件量與求解目標"
      ],
      "fatalTraps": [
        {
          "wrongThinking": "直覺套用公式而忽略先決條件（如桁架節點無外力才能判定零桿、或構件必須受阻才會產生熱應力）。",
          "correctThinking": "回歸核心公理與基本定義，逐項檢核題幹條件與反例。",
          "trapDescription": "考生常因忽略正負號約定（如拉力為正/壓力為負、逆時針為正力矩）或未確認自由體圖支承反力完整性而失分。"
        }
      ],
      "eliteMentalModels": [
        {
          "technique": "第一性原理拆解法 (First Principles Breakdown)",
          "explanation": "不依賴死記死背，由最底層的定義與公理邏輯推導出解題路徑，降維打擊各類統測變形題。"
        }
      ],
      "covered_question_ids": [
        "111-1-8",
        "111-1-9",
        "111-1-10",
        "113-1-18",
        "113-1-19",
        "114-1-1",
        "115-1-7",
        "115-1-12",
        "115-1-15"
      ],
      "worked_examples": [
        {
          "question": "【步驟化例題】桁架零桿判別：圖示一屋架桁架，節點 C 兩桿共線且與第三桿垂直相交，且 C 點無外力，判斷垂直桿之軸力。",
          "difficulty": "基礎",
          "steps": [
            "步驟 1：檢視節點 C。共線兩桿為 AC 與 CE，第三桿為 CD。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "步驟 2：應用零桿定理。「三桿接頭，兩桿共線且無外載，則第三桿為零桿」。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "步驟 3：判定 CD 桿為零桿，軸力為 0。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "CD 桿為零桿 (F_CD = 0)",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        }
      ],
      "illustrations": [
        "truss-context.webp",
        "truss-mechanism.webp",
        "truss-comparison.webp",
        "truss-step.webp",
        "mechanics-real-world.webp",
        "concept-diagram.webp",
        "formula-visual.webp"
      ],
      "concepts": [
        {
          "heading": "桁架基本假設與平面靜定判別式",
          "body": "理想桁架建立在三個主要假設上：(1) 所有桿件兩端皆為無摩擦鉸接；(2) 外載重與支承反力僅作用於節點上；(3) 忽略桿件自重。因此所有桁架桿件均為**二力構件**，僅承受軸向拉力 (T, Tension) 或壓力 (C, Compression)。",
          "formula": "平面桁架靜定判別方程式：\n<span className=\"text-rose-600 font-bold\">m + r = 2j</span>  ⇒ <span className=\"text-rose-600 font-bold\">靜定桁架 (Statically Determinate)</span>\n<span className=\"text-indigo-600 font-bold\">m + r > 2j</span>  ⇒ <span className=\"text-indigo-600 font-bold\">超靜定桁架 (Indeterminate, 不定度 i = m + r - 2j)</span>\n<span className=\"text-indigo-600 font-bold\">m + r < 2j</span>  ⇒ <span className=\"text-indigo-600 font-bold\">不穩定桁架 (Unstable)</span>\n(其中 m: 桿件總數, r: 支承反力總數, j: 節點總數)"
        },
        {
          "heading": "**零桿 (Zero-Force Members)** 的兩大快速判別定理",
          "body": "在進行詳細力學計算前，快速找出不受力的零桿可大幅簡化計算流程：(1) 二桿接頭無外力且不共線，兩桿皆為零桿；(2) 三桿接頭無外力且兩桿共線，不共線之第三桿必為零桿。",
          "table": {
            "headers": [
              "節點幾何特徵",
              "外力/反力狀況",
              "判別結論",
              "代表示意"
            ],
            "rows": [
              [
                "兩桿接頭 (L-Joint)",
                "節點上無任何外力或支承反力",
                "兩桿均為零桿 (F1 = 0, F2 = 0)",
                "兩不共線桿件相交之自由端"
              ],
              [
                "三桿接頭 (T-Joint)",
                "兩桿共線，第三桿斜交，且節點無外力",
                "不共線之第三桿必為零桿",
                "主弦桿與垂直腹板交會處"
              ]
            ]
          }
        },
        {
          "heading": "**節點法 (Method of Joints)** 計算步驟",
          "body": "節點法適用於求解桁架所有桿件之軸力。利用每個節點在 2D 平面上的 ∑Fx = 0 與 ∑Fy = 0 連續建立獨立代數方程組。",
          "steps": [
            "求全桁架之整體支承反力 (由整體 FBD 之 ∑Fx=0, ∑Fy=0, ∑M=0 求解)。",
            "尋找未知的桿件數量 ≤ 2 的節點作為起點（通常為端點支承節點）。",
            "假設未知桿件均受拉力 (背離節點方向)；若解出正值代表拉力 (T)，負值代表壓力 (C)。",
            "求解該節點之 ∑Fx = 0 與 ∑Fy = 0，獲得該節點桿力後依序推進至下一個節點。"
          ]
        },
        {
          "heading": "**剖面法 (Method of Sections)** 計算步驟",
          "body": "當僅需求解桁架內部某 1~3 根指定桿件之軸力時，剖面法是最快速有效的方法。利用假想剖面切開桁架，並對切開的一側取力矩平衡方程。",
          "steps": [
            "通過待求桿件切割一假想剖面 (通常切割不超過 3 根未知桿件)。",
            "選取切開後結構較簡單的一側（左側或右側）繪製**自由體圖 (FBD)**。",
            "找尋另外兩根未知桿件作用線的交點 O，對該點取力矩平衡 <span className=\"text-rose-600 font-bold\">∑ M_O = 0</span>，即可一步直接解出待求桿件之軸力！"
          ]
        },
        {
          "heading": "工程實例：高雄流行音樂中心與高鐵高架橋下大跨距鋼桁架",
          "body": "高雄流行音樂中心與台灣高鐵高架橋常採用大跨距鋼骨 Pratt 或 Howe 桁架結構。結構工程師利用剖面法精確求出大跨距下，頂弦桿件承受極大壓力 (C)、底弦桿件承受拉力 (T)，進而針對頂弦桿件加強抗挫屈 (Buckling) 設計，確保結構在高載重下的整體穩定性。"
        }
      ],
      "practices": [
        {
          "difficulty": "基礎",
          "question": "在一 Howe 鋼桁架中，節點 K 有三根鋼桿交會：其中 AK 桿與 KB 桿呈水平共線，KC 桿垂直向上連接至頂弦節點 C。若節點 K 處沒有任何外部集中載重或支承反力，試問 KC 桿之軸力為何？",
          "steps": [
            "觀察節點 K 處之幾何與受力特徵：AK 與 KB 兩桿在水平方向共線，KC 桿在垂直方向不共線。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "對節點 K 建立正交座標系，指定 x 軸沿 AK-KB 水平方向，y 軸沿 KC 垂直方向。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "列出 y 方向力平衡方程式：<span className=\"text-rose-600 font-bold\">∑ Fy = 0</span>。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "由於垂直方向僅有 KC 桿之軸力 F_KC，且節點 K 無任何外力：F_KC = 0。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "符合「三桿接頭兩桿共線且無外力時，第三桿為零桿」之判別定理。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "KC 桿為零桿 (軸力 F_KC = 0)",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        },
        {
          "difficulty": "高頻統測題",
          "question": "一平面桁架共有 9 根桿件 (m = 9)，由一鉸支承 (r=2) 與一滾支承 (r=1) 支承，並具有 6 個節點 (j = 6)。試判別此桁架之靜定性與穩定性。",
          "steps": [
            "算式比較：m + r 與 2j。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "左式：m + r = 9 + (2 + 1) = 12。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "右式：2 j = 2 × 6 = 12。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "因為 m + r = 2 j = 12，且支承反力未平行或共點，故該桁架為「<span className=\"text-rose-600 font-bold\">靜定桁架 (Statically Determinate)</span>」。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "靜定桁架 (<span className=\"text-rose-600 font-bold\">m + r = 2j</span> = 12)",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        },
        {
          "difficulty": "進階",
          "question": "（高鐵高架橋桁架算例）一跨距 L = 12 m、高 H = 3 m 的平面靜定 Pratt 桁架，底弦分成 4 格 (每格長 3m)。左鉸支承 A (0, 0)，右滾支承 E (12, 0)。頂弦節點為 B(3, 3), C(6, 3), D(9, 3)。若在底弦中央節點 H(6, 0) 施加一垂直向下集中載重 P = 120 kN。試使用「剖面法」求解：(1) 頂弦 BC 桿之軸力 F_BC (標明拉 T 或壓 C)；(2) 左側支承反力 R_A。",
          "steps": [
            "【步驟一：求解整體支承反力】：\n- 由於結構幾何與載重對稱，左右兩端垂直反力相等：R_Ay = R_Ey = P / 2 = 120 / 2 = 60 kN (向上)。\n- 水平反力 R_Ax = 0。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "【步驟二：切割剖面 1-1】：\n- 通過頂弦 BC 桿、斜桿 BH 及底弦 AH 桿切割一垂直假想剖面 1-1。\n- 取剖面左半部 (包含 A 點與 B 點) 為隔離體自由體圖。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "【步驟三：利用剖面法求解 BC 桿軸力 F_BC】：\n- 剖面切開三根桿件：F_BC (向右, 頂部), F_BH (斜向右下), F_AH (向右, 底部)。\n- 選擇斜桿 BH 與底弦 AH 的相交點 H (6, 0) 作為力矩中心，列出對 H 點的力矩平衡 ∑ M_H = 0 (逆時針為正 +)：\n  R_Ay × 6 - F_BC × 3 = 0\n  60 × 6 - 3 F_BC = 0 ⇒ 3 F_BC = 360 ⇒ F_BC = 120 kN。\n- 由於假設拉力 (背離切面向右) 算出正值，代表受拉方向產生順時針力矩平衡抵抗 R_Ay。因此該桿件實際上受到擠壓，為壓力 (C)。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "R_A = 60 kN (向上)，BC 桿軸力 F_BC = 120 kN (壓力 C)",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        },
        {
          "difficulty": "高頻統測題",
          "question": "一由三根相等長度 (每根長 L = 2m) 構成之等邊三角形桁架 ABC，底邊 AC 水平放置於 A (鉸) 與 C (滾) 支承上。頂點 B 受一水平向右推力 P = 10 kN。試求解斜桿 AB 與斜桿 BC 之軸力 (拉 T 或壓 C)。",
          "steps": [
            "對整體求支承反力：C 點僅有垂直反力 R_Cy，A 點有 R_Ax (向左) 與 R_Ay。\n- ∑M_A = R_Cy × 2 - P × (2 sin 60°) = 0 ⇒ 2 R_Cy = 10 × 1.732 = 17.32 ⇒ R_Cy = 8.66 kN (向上)。\n- R_Ay = 8.66 kN (向下)；R_Ax = 10 kN (向左)。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "對 C 點節點分析 (包含 BC 桿與 AC 桿)：\n- ∑Fy = F_BC sin(60°) + R_Cy = 0 ⇒ F_BC × 0.866 + 8.66 = 0 ⇒ F_BC = -10 kN (壓力 C)。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "同理解 A 點節點得 F_AB 軸力。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "BC 桿軸力 F_BC = 10 kN (壓力 C)",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        }
      ]
    },
    {
      slug: 'beam',
      "title": "6. 靜定樑之受力",
      "desc": "支承反力類型、載重集度 w(x)、剪力 V(x) 與彎矩 M(x) 微積分關係、剪力圖與彎矩圖繪製及最大彎矩 M_max 位置判斷。",
      "status": "done",
      "gradeLevel": 10,
      "examHitRate": 4,
      "step0Prerequisites": [
        "本章核心基礎：beam之關鍵定義與物理幾何直覺",
        "解題前置檢核：確認題型情境、已知條件量與求解目標"
      ],
      "fatalTraps": [
        {
          "wrongThinking": "直覺套用公式而忽略先決條件（如桁架節點無外力才能判定零桿、或構件必須受阻才會產生熱應力）。",
          "correctThinking": "回歸核心公理與基本定義，逐項檢核題幹條件與反例。",
          "trapDescription": "考生常因忽略正負號約定（如拉力為正/壓力為負、逆時針為正力矩）或未確認自由體圖支承反力完整性而失分。"
        }
      ],
      "eliteMentalModels": [
        {
          "technique": "第一性原理拆解法 (First Principles Breakdown)",
          "explanation": "不依賴死記死背，由最底層的定義與公理邏輯推導出解題路徑，降維打擊各類統測變形題。"
        }
      ],
      "covered_question_ids": [
        "111-1-1",
        "111-1-2",
        "111-1-3",
        "112-1-2",
        "112-1-7",
        "112-1-12",
        "112-1-13",
        "112-1-15",
        "112-1-20",
        "113-1-2",
        "113-1-3",
        "113-1-9",
        "113-1-11",
        "114-1-3",
        "114-1-5",
        "114-1-8",
        "114-1-10",
        "114-1-16",
        "115-1-3",
        "115-1-4",
        "115-1-5",
        "115-1-10",
        "115-1-18",
        "115-1-20"
      ],
      "worked_examples": [
        {
          "question": "【步驟化例題】簡支梁最大彎矩：跨距 L = 10m 的簡支梁，承受中央集中載重 P = 40 kN，求最大彎矩。",
          "difficulty": "基礎",
          "steps": [
            "步驟 1：求支承反力。因對稱，兩端反力 R = P/2 = 20 kN。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "步驟 2：繪製剪力圖。左半段剪力為 20 kN，跨中突降 40 kN，右半段為 -20 kN。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "步驟 3：計算最大彎矩。發生於剪力為 0 處 (跨中)。M_max = (P·L)/4 = (40 × 10) / 4 = 100 kN·m。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "最大彎矩為 100 kN·m",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        }
      ],
      "illustrations": [
        "beam-context.webp",
        "beam-mechanism.webp",
        "beam-comparison.webp",
        "beam-step.webp",
        "mechanics-real-world.webp",
        "concept-diagram.webp",
        "formula-visual.webp"
      ],
      "concepts": [
        {
          "heading": "靜定樑種類與支承約束條件",
          "body": "樑是主要承受橫向載重與彎矩的桿件。當未知反力個數 r = 3 時，稱為靜定樑 (Statically Determinate Beam)，可直接利用 2D 平面三個<span className=\"text-rose-600 font-bold\">靜力平衡</span>方程式求解。",
          "table": {
            "headers": [
              "樑結構類型",
              "支承配置特徵",
              "未知反力數",
              "彎矩幾何分佈"
            ],
            "rows": [
              [
                "簡支樑 (Simply Supported Beam)",
                "一端鉸支承 (Pin) + 一端滾支承 (Roller)",
                "r = 3 (2+1)",
                "兩端支承彎矩為 0，中央彎矩最大"
              ],
              [
                "懸臂樑 (Cantilever Beam)",
                "一端固定端 (Fixed) + 一端自由端 (Free)",
                "r = 3 (3+0)",
                "固定端負彎矩與剪力最大，自由端為 0"
              ],
              [
                "外伸樑 (Overhanging Beam)",
                "簡支樑一端或兩端向外延伸自由端",
                "r = 3 (2+1)",
                "支承處產生負彎矩，跨中產生正彎矩"
              ]
            ]
          }
        },
        {
          "heading": "載重、剪力與彎矩之微積分與面積關係",
          "body": "分佈載重 w(x)、剪力 V(x) 與彎矩 M(x) 之間存在微積分關係：剪力圖的斜率等於載重集度的負值；彎矩圖的斜率等於剪力值。剪力圖之面積代表兩截面間之彎矩變化量。這些關係讓我們能在不列算式的情況下，透過「面積法」快速精準地畫出剪力與彎矩圖。",
          "formula": "dV / dx = -w(x)   ⇒ ΔV = - ∫ w(x) dx  (剪力差 = 載重圖面積)\ndM / dx = V(x)    ⇒ ΔM = ∫ V(x) dx   (彎矩差 = 剪力圖面積)\n最大/最小彎矩必發生於剪力 V(x) = 0 或剪力符號突變之處！",
          "steps": [
            "【觀察載重特徵】：均佈載重會讓剪力圖呈一階斜直線，彎矩圖呈二次拋物線。",
            "【面積累加法】：從樑的左端開始，下一個截面的剪力值等於前一個截面的剪力加上該區段的「載重圖面積」。",
            "【尋找極值】：找出剪力圖中穿過零軸的位置 (即 V=0 處)，此處即為彎矩圖的頂點 (最大或最小彎矩)。",
            "【彎矩面積累加】：下一個截面的彎矩值等於前一個彎矩加上該區段的「剪力圖面積」。"
          ]
        },
        {
          "heading": "剪力圖 (V-Diagram) 與彎矩圖 (M-Diagram) 繪製標準四步驟",
          "body": "繪製 V 圖與 M 圖需按順序分析支承反力、剪力突變點與剪力零點。彎矩圖之形狀可由剪力圖之符號與正負斜率決定。",
          "steps": [
            "【解反力】：畫出樑整體 FBD，由平衡方程式求算出兩端支承反力。",
            "【繪 V 圖】：從左端開始，向上集中力使 V 圖向上跳躍，向下集中力使 V 圖向下跳躍，均佈載重使 V 圖呈斜直線下降。",
            "【找剪力零點】：找出 V(x) = 0 之關鍵位置 x_crit。",
            "【繪 M 圖】：計算 V 圖各區塊面積，累加算得各控制點之彎矩值。剪力為正時 M 圖斜率向上，剪力為負時 M 圖斜率向下。"
          ]
        },
        {
          "heading": "常見載重與樑型之最大剪力及彎矩公式",
          "body": "結構工程師常用常見載重模式之閉合解答公式進行初步斷面尺寸估算與快速撿核。",
          "table": {
            "headers": [
              "載重與樑類型",
              "最大剪力 (V_max)",
              "最大彎矩 (M_max)",
              "最大彎矩發生位置"
            ],
            "rows": [
              [
                "簡支樑 + 中央集中載重 P",
                "P / 2",
                "(P · L) / 4",
                "樑中央跨中點 (x = L / 2)"
              ],
              [
                "簡支樑 + 全跨均佈載重 w",
                "(w · L) / 2",
                "(w · L²) / 8",
                "樑中央跨中點 (x = L / 2)"
              ],
              [
                "懸臂樑 + 自由端集中載重 P",
                "P",
                "P · L (負彎矩)",
                "固定端處 (x = 0)"
              ]
            ]
          }
        },
        {
          "heading": "工程實例：新北淡江大橋與高鐵高架樑柱結構彎矩控制",
          "body": "全球最大跨距單塔斜拉橋—淡江大橋，主樑在車輛載重與自重作用下，樑體內部會產生龐大的剪力與彎矩。結構工程師透過調整斜拉索預應力，使樑體的彎矩圖 (M-diagram) 保持均勻化，避免局部剪力破壞與巨大正/負彎矩引發混凝土開裂。"
        }
      ],
      "practices": [
        {
          "difficulty": "基礎",
          "question": "一長度 L = 6 m 的簡支樑受均佈載重 w = 20 kN/m 作用於全跨。試求解：(1) 兩端支承反力 R_A 與 R_B；(2) 樑中央處之剪力 V(x=3m)；(3) 樑之最大彎矩 M_max。",
          "steps": [
            "【求解支承反力】：\n- 全跨總向下載重 W_total = w × L = 20 × 6 = 120 kN。\n- 由對稱性，兩端垂直反力 R_A = R_B = 120 / 2 = 60 kN (向上)。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "【計算 x = 3m 處之剪力】：\n- 剪力方程式：V(x) = R_A - w · x = 60 - 20 × x。\n- 代入 x = 3m：V(3m) = 60 - 20 × 3 = 0 kN。（剪力為 0 代表彎矩極值點）。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "【求解最大彎矩 M_max】：\n- 利用剪力圖面積法：左半跨 (x = 0 到 3m) 剪力圖為直角三角形，底 b = 3m，高 h = 60 kN。\n- 三角形面積 ΔM = (1/2) × 3 × 60 = 90 kN·m。\n- 由於簡支樑端點 M(0) = 0，故 M_max = M(3m) = 0 + 90 = 90 kN·m。\n- （亦可用公式 M_max = (w · L²) / 8 = (20 × 6²) / 8 = 720 / 8 = 90 kN·m 驗證）。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "R_A = R_B = 60 kN，V(x=3m) = 0 kN，M_max = 90 kN·m",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        },
        {
          "difficulty": "高頻統測題",
          "question": "一長 L = 4 m 之懸臂樑，左端 (x=0) 固定，右端自由。全跨受均佈向下載重 w = 15 kN/m，自由端受一集中向下載重 P = 20 kN。求固定端處之最大剪力 V_max 與最大負彎矩 M_max。",
          "steps": [
            "固定端剪力 V_max = (w · L) + P = (15 × 4) + 20 = 60 + 20 = 80 kN。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "固定端彎矩 M_max = - [ (w · L²) / 2 + P · L ] = - [ (15 × 4²) / 2 + 20 × 4 ] = - [ 120 + 80 ] = - 200 kN·m。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "V_max = 80 kN, M_max = -200 kN·m (負彎矩)",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        },
        {
          "difficulty": "進階",
          "question": "（高鐵高架樑實務簡化算例）外伸樑全長 L = 8 m。A 點 (x=0) 為鉸支承，B 點 (x=6m) 為滾支承，BC 段 (x=6m 至 8m) 為 2m 長之外伸懸臂段。在 C 點外伸端 (x=8m) 施加一集中向下載重 P = 40 kN，且 AB 段 (x=0 至 6m) 受一均佈載重 w = 10 kN/m。試求解：(1) 支承反力 R_A 與 R_B；(2) AB 跨內之最大正彎矩 M_pos 及其發生位置 x_crit；(3) B 點處之負彎矩 M_B。",
          "steps": [
            "【步驟一：求解支承反力 R_A 與 R_B】：\n- 對 A 點取力矩平衡 ∑ M_A = 0 (逆時針為正 +)：\n  (w · 6) × (6 / 2) + P × 8 - R_B × 6 = 0\n  (10 × 6) × 3 + 40 × 8 - 6 R_B = 0 ⇒ 180 + 320 - 6 R_B = 0 ⇒ 6 R_B = 500 ⇒ R_B = 83.33 kN (向上)。\n- 由垂直平衡 <span className=\"text-rose-600 font-bold\">∑ Fy = 0</span>：\n  R_A + R_B - (10 × 6) - 40 = 0 ⇒ R_A + 83.33 - 100 = 0 ⇒ R_A = 16.67 kN (向上)。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "【步驟二：求解 AB 跨內剪力零點與最大正彎矩 M_pos】：\n- AB 跨內剪力方程式：V(x) = R_A - w · x = 16.67 - 10 x。\n- 令 V(x) = 0 ⇒ 16.67 - 10 x = 0 ⇒ x_crit = 1.667 m。\n- 最大正彎矩 M_pos 即為 x = 0 至 1.667m 之剪力圖三角形面積：\n  M_pos = (1/2) × 1.667 × 16.67 ≒ 13.89 kN·m。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "【步驟三：求解 B 點負彎矩 M_B】：\n- 從自由端 C (x=8m) 向左分析懸臂段 BC (長 2m)：\n  M_B = - P × 2 = - 40 × 2 = - 80 kN·m。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "R_A = 16.67 kN, R_B = 83.33 kN，M_pos = 13.89 kN·m (在 x = 1.667m 處)，M_B = -80 kN·m",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        },
        {
          "difficulty": "高頻統測題",
          "question": "一長 6 m 之簡支樑受中央集中載重 P = 120 kN。求樑中央處之彎矩 M_max。若載重改為全跨均佈載重 w，使中央彎矩維持 180 kN·m，則 w 需為多少 kN/m？",
          "steps": [
            "集中載重 M_max = (P · L) / 4 = (120 × 6) / 4 = 180 kN·m。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "改為均佈載重：M_max = (w · L²) / 8 = 180 ⇒ (w × 6²) / 8 = 180 ⇒ 36 w / 8 = 180 ⇒ 4.5 w = 180 ⇒ w = 40 kN/m。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "中央彎矩 = 180 kN·m；均佈載重 w = 40 kN/m",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        }
      ]
    },
    {
      slug: 'stress-strain',
      "title": "7. 應力與應變",
      "desc": "正應力 (σ) 與剪應力 (τ)、正應變 (ε) 與剪應變 (γ)、虎克定律 (Hooke's Law)、彈性模數 (E/G/ν) 及軸向桿件變形量 (δ = PL/AE)。",
      "status": "done",
      "gradeLevel": 10,
      "examHitRate": 5,
      "step0Prerequisites": [
        "正應力與正應變：σ = P/A, ε = δ/L",
        "虎克定律：σ = E·ε 故變形量 δ = PL/(AE)",
        "剪應力與剪應變：τ = V/As, γ = τ/G"
      ],
      "fatalTraps": [
        {
          "wrongThinking": "算變形量 δ = PL/(AE) 時，L 用公尺 m，A 用 mm²，E 用 GPa，數值直接相乘除未換算。",
          "correctThinking": "全數統一為 N 與 mm：P(N), L(mm), A(mm²), E(MPa = N/mm²)，算出的變形量 δ 單位即為標準 mm。",
          "trapDescription": "長度與彈性模數單位未統一，導致變形量結果小數點差 10³ 或 10⁶ 倍。"
        }
      ],
      "eliteMentalModels": [
        {
          "technique": "剛度法比值秒殺 (Stiffness Proportionality)",
          "explanation": "階梯軸或並聯桿受力，內力與剛度 (AE/L) 成正比分配，變形量與柔度 (L/AE) 成正比，直接用比值心算免解聯立方程。"
        }
      ],
      "covered_question_ids": [
        "111-1-4",
        "111-1-5",
        "111-1-6",
        "111-1-11",
        "111-1-12",
        "111-1-13",
        "111-1-20",
        "112-1-4",
        "112-1-5",
        "112-1-6",
        "112-1-10",
        "112-1-14",
        "112-1-17",
        "112-1-18",
        "112-1-19",
        "113-1-6",
        "113-1-10",
        "113-1-12",
        "113-1-13",
        "113-1-15",
        "113-1-16",
        "113-1-17",
        "113-1-20",
        "114-1-7",
        "114-1-9",
        "114-1-11",
        "114-1-12",
        "114-1-14",
        "114-1-18",
        "114-1-19",
        "115-1-6",
        "115-1-8",
        "115-1-9",
        "115-1-11",
        "115-1-19",
        "110-1-4",
        "110-1-12",
        "110-1-20",
        "110-1-28",
        "110-1-36"
      ],
      "worked_examples": [
        {
          "question": "【步驟化例題】鋼筋抗拉應力：一根直徑 16mm (即 #5 鋼筋) 承受 50 kN 之軸向拉力，求其正應力。",
          "difficulty": "中等",
          "steps": [
            "步驟 1：計算鋼筋截面積。A = (π · D²) / 4 = (3.1416 × 16²) / 4 ≒ 201 mm²。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "步驟 2：將拉力單位轉換。P = 50 kN = 50,000 N。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "步驟 3：計算正應力。σ = P / A = 50,000 / 201 ≒ 248.7 MPa。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "正應力 ≒ 248.7 MPa",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        }
      ],
      "illustrations": [
        "stress-strain-context.webp",
        "stress-strain-mechanism.webp",
        "stress-strain-comparison.webp",
        "stress-strain-step.webp",
        "mechanics-real-world.webp",
        "concept-diagram.webp",
        "formula-visual.webp"
      ],
      "concepts": [
        {
          "heading": "應力 (Stress) 與應變 (Strain) 的物理定義",
          "body": "當物體受到外力作用時，內部截面單位面積上所承受之內力稱為應力；物體尺寸相對於原始幾何之微小變形比率稱為應變。正應力與正應變垂直於截面；剪應力與剪應變切於截面。",
          "formula": "正應力：σ = P / A   (單位：N/mm² 或 MPa)\n剪應力：τ = V / A   (單位：N/mm² 或 MPa)\n正應變：ε = ΔL / L₀  (無因次量/無單位)\n剪應變：γ = Δθ      (角度弧度變形 rad)",
          "table": {
            "headers": [
              "物理量",
              "符號",
              "定義公式",
              "SI/工程常用單位"
            ],
            "rows": [
              [
                "正應力 (Normal Stress)",
                "σ (Sigma)",
                "σ = P / A",
                "MPa (N/mm²)"
              ],
              [
                "剪應力 (Shear Stress)",
                "τ (Tau)",
                "τ = V / A",
                "MPa (N/mm²)"
              ],
              [
                "正應變 (Normal Strain)",
                "ε (Epsilon)",
                "ε = δ / L",
                "無單位 (mm/mm)"
              ],
              [
                "剪應變 (Shear Strain)",
                "γ (Gamma)",
                "γ = Δπ/2",
                "rad (弧度)"
              ]
            ]
          }
        },
        {
          "heading": "虎克定律與材料彈性常數關係 (E, G, ν)",
          "body": "在材料之彈性限度 (Elastic Limit) 內，應力與應變成正比。楊氏彈性模數 (Young's Modulus, E) 代表抗拉壓剛度；剪切模數 (Shear Modulus, G) 代表抗剪剛度；泊松比 (Poisson's Ratio, ν) 為橫向應變與軸向應變之比值。",
          "formula": "σ = E · ε\nτ = G · γ\n彈性常數三者關係：G = E / [ 2 · (1 + ν) ]\n(結構鋼常用值：E ≒ 200 GPa = 2×10⁵ MPa, ν ≒ 0.3, G ≒ 77 GPa)"
        },
        {
          "heading": "軸向受力桿件之伸縮變形量公式 (Axial Deformation)",
          "body": "結合正應力公式 σ = P / A、正應變公式 ε = δ / L 與虎克定律 σ = E · ε，可推導出材料力學中最經典的軸向伸縮變形量公式 δ = (P · L) / (A · E)。對於變截面或分段受力桿件，利用疊加原理求總變形量。",
          "formula": "單一桿件伸長量：δ = (P · L) / (A · E)\n分段組合桿件總變形量：δ_total = ∑ [ (P_i · L_i) / (A_i · E_i) ]",
          "steps": [
            "利用剖面法求算各區段之內軸力 P_i (拉力為正 +，壓力為負 -)。",
            "統一單位系統 (力用 N，長度/面積用 mm，彈性模數 E 用 N/mm² 或 MPa)。",
            "分別計算各區段之變形量 δ_i = (P_i · L_i) / (A_i · E_i)。",
            "將各段變形量代數相加得總伸長 (+) 或縮短 (-) 量。"
          ]
        },
        {
          "heading": "許用應力與安全係數 (Allowable Stress & Safety Factor)",
          "body": "為了確保建築與橋樑結構之絕對安全，結構元件在設計載重下的最大工作應力 σ_max 必須嚴格低於材料的屈服強度 f_y 或極限強度 f_u。屈服強度與許用應力之比即為安全係數 (Safety Factor, SF)。",
          "formula": "安全係數 SF = f_y / σ_allow  (或 f_u / σ_allow)\n設計要求：σ_max = P / A ≤ σ_allow = f_y / SF",
          "table": {
            "headers": [
              "工程材料名稱",
              "屈服強度 f_y (MPa)",
              "彈性模數 E (GPa)",
              "常用設計許用應力 σ_allow"
            ],
            "rows": [
              [
                "結構用鋼 (A36 / SN400)",
                "250 MPa",
                "200 GPa",
                "150 MPa (SF ≒ 1.67)"
              ],
              [
                "高強鋼筋 (SD420)",
                "420 MPa",
                "200 GPa",
                "250 MPa (SF ≒ 1.68)"
              ],
              [
                "結構混凝土 (C280 / 28MPa)",
                "f'c = 28 MPa",
                "25 GPa",
                "12.6 MPa (抗壓設計)"
              ]
            ]
          }
        },
        {
          "heading": "熱應力與自由膨脹受阻變形",
          "body": "材料溫度變化 ΔT 時會產生自由熱變形 δ_T = α · ΔT · L。若兩端固定受到約束，將在內部誘發熱應力 σ_T = E · α · ΔT。",
          "formula": "δ_T = α · ΔT · L\nσ_T = E · α · ΔT\n(其中 α 為熱膨脹係數 1/°C)"
        },
        {
          "heading": "莫耳圓與平面應力轉換 (Mohr's Circle for Plane Stress)",
          "body": "當物體處於雙軸或平面應力狀態 (σx, σy, τxy) 時，旋轉角度 θ 後的切面正應力與剪應力可由莫耳圓幾何圖形求解。莫耳圓的圓心位於正向應力軸上，圓半徑即為最大剪應力。",
          "formula": "圓心座標：C = ( (σx + σy) / 2 , 0 )\n圓半徑：R = √[ ((σx - σy) / 2)² + τxy² ]\n最大/最小主應力：σ₁,₂ = (σx + σy) / 2 ± R\n最大平面剪應力：τ_max = R\n主平面夾角：tan(2θp) = (2 · τxy) / (σx - σy)",
          "table": {
            "headers": [
              "幾何/應力參數",
              "莫耳圓定義公式",
              "物理意義與工程應用"
            ],
            "rows": [
              [
                "莫耳圓圓心 C",
                "(σx + σy) / 2",
                "代表平均正向應力 (Average Normal Stress)"
              ],
              [
                "莫耳圓半徑 R",
                "√[ ((σx - σy) / 2)² + τxy² ]",
                "等於平面最大剪應力 τ_max"
              ],
              [
                "主應力 σ₁, σ₂",
                "C ± R",
                "剪應力為零之切面上的最大與最小正向應力"
              ],
              [
                "主平面角度 θp",
                "0.5 · tan⁻¹[ 2τxy / (σx - σy) ]",
                "確定鋼筋混凝土裂縫或脆性材料破壞面方向"
              ]
            ]
          }
        },
        {
          "heading": "梁之彎曲應力與橫向剪應力 (Bending & Transverse Shear Stress in Beams)",
          "body": "樑受彎矩 M 作用時產生彎曲正應力 σ = (M · y) / I；受剪力 V 作用時產生橫向剪應力 τ = (V · Q) / (I · b)。矩形斷面與圓形斷面的最大剪應力發生於<span className=\"text-indigo-600 font-bold\">中性軸 (Neutral Axis)</span>。",
          "formula": "彎曲正應力：σ = (M · y) / I = M / S   (其中 S = I / y_max 為截面模數 Section Modulus)\n梁橫向剪應力：τ = (V · Q) / (I · b)\n矩形斷面最大剪應力：τ_max = 1.5 · (V / A)   (發生於中性軸 y = 0 處)\n圓形斷面最大剪應力：τ_max = (4 / 3) · (V / A)   (發生於圓心軸處)"
        },
        {
          "heading": "體積應變與三軸應力體積模數 (Volumetric Strain & Bulk Modulus)",
          "body": "物體受三維三軸正應力 (σx, σy, σz) 作用時，單位體積的幾何改變量稱為體積應變 ε_v。在均勻靜水壓力 p 作用下，體積變化與壓力成正比，比例常數為體積模數 K。",
          "formula": "體積應變：ε_v = ΔV / V₀ = εx + εy + εz = [ (σx + σy + σz) / E ] · (1 - 2ν)\n均勻水壓下：ε_v = - 3 · p · (1 - 2ν) / E = - p / K\n體積模數：K = E / [ 3 · (1 - 2ν) ]"
        },
        {
          "heading": "工程實例：臺北101巨柱 SN490 應力變形與高程預補償 (Pre-camber) 設計",
          "body": "臺北101大樓的巨型鋼柱採用高強度耐震鋼鈑 (如 SN490B)，屈服強度達 325 MPa 以上。在樓層自重與活載重累積作用下，巨柱內部產生高達 150 MPa 的軸向壓應力。經由 δ = (P·L)/(A·E) 算得整座大樓柱體累積縮短量可達數公分。結構團隊在施工建造時，預先在鋼柱吊裝高程加上預補償值 (Pre-camber)，使結構在竣工加載完畢後，樓板高度精準回落至設計標準水平面。"
        }
      ],
      "practices": [
        {
          "difficulty": "基礎",
          "question": "一根長 L = 3 m、直徑 d = 20 mm 的圓形鋼棒，兩端承受軸向拉力 P = 62.8 kN。已知鋼材彈性模數 E = 200 GPa (200,000 MPa)。試求：(1) 鋼棒內部產生之軸向正應力 σ；(2) 鋼棒之總伸長量 δ。",
          "steps": [
            "【計算鋼棒截面積 A】：\n- A = π · (d / 2)² = π · (10)² = 100 π mm² ≒ 314.16 mm²。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "【計算正應力 σ】：\n- 將拉力換算為 N：P = 62.8 kN = 62,800 N。\n- σ = P / A = 62,800 / 314.16 ≒ 200 N/mm² = 200 MPa。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "【計算總伸長量 δ】：\n- 將長度換算為 mm：L = 3 m = 3,000 mm。\n- 代入變形量公式：δ = (P · L) / (A · E) = (62,800 × 3,000) / (314.16 × 200,000) = 188,400,000 / 62,832,000 = 3.0 mm。\n- （亦可用 δ = ε · L = (σ / E) · L = (200 / 200,000) × 3000 = 0.001 × 3000 = 3.0 mm 驗證）。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "σ = 200 MPa，伸長量 δ = 3.0 mm",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        },
        {
          "difficulty": "高頻統測題",
          "question": "一長 L = 2 m、截面積 A = 500 mm² 之鋼條，受 100 kN 軸向拉力。若 E = 200 GPa，試求伸長量 δ 與應變 ε。",
          "steps": [
            "P = 100,000 N, L = 2,000 mm, A = 500 mm², E = 200,000 N/mm²。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "δ = (P · L) / (A · E) = (100,000 × 2,000) / (500 × 200,000) = 2.0 mm。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "應變 ε = δ / L = 2.0 / 2,000 = 0.001 (或 1 × 10⁻³)。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "δ = 2.0 mm, ε = 0.001",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        },
        {
          "difficulty": "進階",
          "question": "（臺北101巨柱高程預補償算例簡化）一鋼製階梯形變截面柱由上段 AB 與下段 BC 焊接組成，總長度 L = 4 m。上段 AB 長 L1 = 2 m，截面積 A1 = 1000 mm²；下段 BC 長 L2 = 2 m，截面積 A2 = 2000 mm²。柱頂 A 點受向下集中壓力 P1 = 100 kN，在 AB 與 BC 之交點 B 處另有一向下集中壓力 P2 = 100 kN。已知鋼材 E = 200 GPa (200,000 MPa)，屈服強度 f_y = 400 MPa。試求：(1) 上段與下段柱之軸向正應力 σ1 與 σ2；(2) 柱頂 A 點相對於底端 C 點的總下沉縮短量 δ_total；(3) 依屈服強度求該柱之安全係數 SF。",
          "steps": [
            "【步驟一：軸力分析 (由上至下剖面法)】：\n- 上段 AB 內軸力：P_AB = P1 = 100 kN (壓力 -)。\n- 下段 BC 內軸力：P_BC = P1 + P2 = 100 + 100 = 200 kN (壓力 -)。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "【步驟二：軸向正應力計算】：\n- 上段應力 σ1 = P_AB / A1 = 100,000 N / 1000 mm² = 100 MPa (壓)。\n- 下段應力 σ2 = P_BC / A2 = 200,000 N / 2000 mm² = 100 MPa (壓)。\n- 上下兩段應力均為 100 MPa。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "【步驟三：計算各段縮短量與總變形量 δ_total】：\n- 長度 L1 = 2000 mm, L2 = 2000 mm。\n- 上段縮短量 δ1 = (P_AB · L1) / (A1 · E) = (100,000 × 2000) / (1000 × 200,000) = 1.0 mm。\n- 下段縮短量 δ2 = (P_BC · L2) / (A2 · E) = (200,000 × 2000) / (2000 × 200,000) = 1.0 mm。\n- 柱頂 A 點總縮短沉降量 δ_total = δ1 + δ2 = 1.0 + 1.0 = 2.0 mm (向下沉降)。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "【步驟四：計算安全係數 SF】：\n- 柱內最大工作應力 σ_max = 100 MPa。\n- 安全係數 SF = f_y / σ_max = 400 / 100 = 4.0。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "(1) σ1 = σ2 = 100 MPa (壓)；(2) 總縮短量 δ_total = 2.0 mm；(3) 安全係數 SF = 4.0",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        },
        {
          "difficulty": "高頻統測題",
          "question": "一長 L = 1 m 之鋼桿，熱膨脹係數 α = 1.2 × 10⁻⁵ /°C，E = 200 GPa。若兩端完全固定且溫度升高 ΔT = 50°C，求鋼桿內誘發之熱應力 σ_T 大小與屬性 (拉或壓)。",
          "steps": [
            "熱應力公式：σ_T = E · α · ΔT。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "代入數值：σ_T = (200,000 MPa) × (1.2 × 10⁻⁵) × 50 = 200,000 × 0.0006 = 120 MPa。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "因為溫度上升受兩端固定限制膨脹，故產生壓應力 (Compression)。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "σ_T = 120 MPa (壓應力)",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        }
      ]
    },
    {
      slug: 'spatial-force-systems',
      "title": "8. **空間力系**與空間平衡",
      "desc": "掌握三維空間力之笛卡兒向量表示法、方向餘弦、空間共點與平行力系之合成分解，以及空間三維六個<span className=\"text-rose-600 font-bold\">靜力平衡</span>方程之應用。\n\n🔥 V6.0 考前秒殺秘訣：此核心概念統測出題率極高，建議善用圖解與鷹架提示反覆練習！",
      "status": "done",
      "gradeLevel": 10,
      "examHitRate": 4,
      "step0Prerequisites": [
        "本章核心基礎：spatial-force-systems之關鍵定義與物理幾何直覺",
        "解題前置檢核：確認題型情境、已知條件量與求解目標"
      ],
      "fatalTraps": [
        {
          "wrongThinking": "直覺套用公式而忽略先決條件（如桁架節點無外力才能判定零桿、或構件必須受阻才會產生熱應力）。",
          "correctThinking": "回歸核心公理與基本定義，逐項檢核題幹條件與反例。",
          "trapDescription": "考生常因忽略正負號約定（如拉力為正/壓力為負、逆時針為正力矩）或未確認自由體圖支承反力完整性而失分。"
        }
      ],
      "eliteMentalModels": [
        {
          "technique": "第一性原理拆解法 (First Principles Breakdown)",
          "explanation": "不依賴死記死背，由最底層的定義與公理邏輯推導出解題路徑，降維打擊各類統測變形題。"
        }
      ],
      "covered_question_ids": [
        "110-1-5",
        "111-1-5",
        "112-1-5",
        "113-1-5",
        "114-1-5",
        "115-1-5"
      ],
      "worked_examples": [
        {
          "question": "【步驟化例題】空間分力與方向餘弦：一空間張力 F = 700 N，由原點 O(0,0,0) 指向點 A(2, 3, 6) m。試求：(1) 力向量的直角坐標分力 Fx, Fy, Fz；(2) 該力與 X 軸之夾角 α 的方向餘弦 cos α。",
          "difficulty": "基礎",
          "steps": [
            "步驟 1：計算點 O 到 A 之位置向量大小 d。\n- d = √(2² + 3² + 6²) = √(4 + 9 + 36) = √49 = 7 m。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "步驟 2：求各軸分力 Fx, Fy, Fz。\n- Fx = F × (x / d) = 700 × (2 / 7) = 200 N。\n- Fy = F × (y / d) = 700 × (3 / 7) = 300 N。\n- Fz = F × (z / d) = 700 × (6 / 7) = 600 N。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "步驟 3：求方向餘弦 cos α。\n- cos α = Fx / F = 200 / 700 = 2/7 ≒ 0.2857（或由 x / d = 2/7 直接得出）。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "(1) Fx = 200 N, Fy = 300 N, Fz = 600 N；(2) cos α = 2/7 ≒ 0.2857",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        }
      ],
      "illustrations": [
        "units-vectors-context.webp",
        "units-vectors-mechanism.webp",
        "units-vectors-comparison.webp",
        "units-vectors-step.webp",
        "mechanics-real-world.webp",
        "spatial-force-systems-infographic.webp",
        "concept-diagram.webp",
        "formula-visual.webp"
      ],
      "concepts": [
        {
          "heading": "空間力向量與方向餘弦 (Spatial Vector & Direction Cosines)",
          "body": "在三維笛卡兒坐標系中，一空間單力向量可表示為 $\u000bec{F} = F_x \u000bec{i} + F_y \u000bec{j} + F_z \u000bec{k}$。其中 $\u000bec{i}, \u000bec{j}, \u000bec{k}$ 為 X, Y, Z 軸之單位向量。方向餘弦 $cosalpha, cos\beta, cosgamma$ 為力向量與 X, Y, Z 三坐標軸夾角之餘弦值。",
          "steps": [
            "向量大小：$F = |\u000bec{F}| = sqrt{F_x^2 + F_y^2 + F_z^2}$。",
            "方向餘弦關係：$cosalpha = F_x / F, cos\beta = F_y / F, cosgamma = F_z / F$。",
            "恆等式：$cos^2alpha + cos^2\beta + cos^2gamma = 1$。"
          ]
        },
        {
          "heading": "空間共點與平行力系之合成與平衡 (Spatial Concurrent & Parallel Systems)",
          "body": "當多個空間力作用於同一點時稱為空間共點力系；當所有作用力相互平行（如各構件自重均沿 -Z 方向）時稱為空間平行力系。兩者之獨立平衡方程式數量不同。",
          "table": {
            "headers": [
              "力系類型",
              "定義特徵",
              "獨立<span className=\"text-rose-600 font-bold\">靜力平衡</span>方程式數量",
              "平衡方程式組"
            ],
            "rows": [
              [
                "空間共點力系",
                "所有作用力交於同一空間點",
                "3 個方程",
                "$sum F_x = 0, sum F_y = 0, sum F_z = 0$"
              ],
              [
                "空間平行力系",
                "所有作用力均平行於某特定軸 (如 Z 軸)",
                "3 個方程",
                "$sum F_z = 0, sum M_x = 0, sum M_y = 0$"
              ],
              [
                "空間非共點非平行力系",
                "作用力在空間隨意分佈",
                "6 個方程",
                "$sum F_x = 0, sum F_y = 0, sum F_z = 0, sum M_x = 0, sum M_y = 0, sum M_z = 0$"
              ]
            ]
          }
        },
        {
          "heading": "空間剛體六個平衡方程與三維支承 (Spatial Rigid Body Equilibrium & Supports)",
          "body": "三維剛體不受拘束時具備 6 個自由度（3 個平移 + 3 個旋轉）。剛體完全<span className=\"text-rose-600 font-bold\">靜力平衡</span>之<span className=\"text-indigo-600 font-bold\">充要條件</span>為合力向量 $\u000bec{R}=0$ 且對任意點之合力矩向量 $\u000bec{M}=0$。",
          "steps": [
            "球窩關節 (Ball-and-Socket Joint)：提供 3 個方向之約束力反力 (Rx, Ry, Rz)，但不限制轉動 (Moment = 0)。",
            "無摩擦滾子/球底支承：僅提供垂直於接觸面之 1 個法向約束力反力。",
            "固定支承 (Fixed Support)：提供 3 個約束力 (Rx, Ry, Rz) 與 3 個約束力矩 (Mx, My, Mz)，共 6 個未知反力。"
          ]
        }
      ],
      "practices": [
        {
          "difficulty": "基礎",
          "question": "一空間力與 X, Y 軸之夾角餘弦分別為 cos α = 0.6, cos β = 0.8。求該力與 Z 軸夾角之方向餘弦 cos γ 之可能數值。",
          "steps": [
            "代入方向餘弦恆等式：cos² α + cos² β + cos² γ = 1。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "(0.6)² + (0.8)² + cos² γ = 1 => 0.36 + 0.64 + cos² γ = 1 => 1.0 + cos² γ = 1。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "故 cos² γ = 0 => cos γ = 0（代表該力完全落在 X-Y 平面上，與 Z 軸垂直 90°）。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "cos γ = 0",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        },
        {
          "difficulty": "高頻統測題",
          "question": "對於一個不受約束之「空間剛體」，欲保持完全<span className=\"text-rose-600 font-bold\">靜力平衡</span>，最多可建立多少個獨立的<span className=\"text-rose-600 font-bold\">靜力平衡</span>方程式？ (A) 3 個 (B) 4 個 (C) 6 個 (D) 8 個。",
          "steps": [
            "空間剛體具備 3 個平移與 3 個旋轉自由度，必須滿足 ∑Fx=0, ∑Fy=0, ∑Fz=0 及 ∑Mx=0, ∑My=0, ∑Mz=0 共 6 個獨立平衡方程。故選 (C)。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "(C) 6 個",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        },
        {
          "difficulty": "進階",
          "question": "一空間平行力系所有作用力均平行於 Z 軸。下列何者「非」此力系之獨立<span className=\"text-rose-600 font-bold\">靜力平衡</span>方程式？ (A) ∑Fz = 0 (B) ∑Mx = 0 (C) ∑My = 0 (D) ∑Mz = 0。",
          "steps": [
            "因為所有力均平行於 Z 軸，力對 Z 軸產生的力矩恆為 0 (M_z ≡ 0)，因此 ∑Mz = 0 為自然滿足之恆等式，而非獨立靜力方程。獨立方程為 ∑Fz=0, ∑Mx=0, ∑My=0。故選 (D)。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "(D) ∑Mz = 0",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        },
        {
          "difficulty": "高頻統測題",
          "question": "在空間結構中，「球窩關節 (Ball-and-Socket Joint)」支承能提供多少個獨立的反力分量？ (A) 1 個 (B) 2 個 (C) 3 個 (D) 6 個。",
          "steps": [
            "球窩關節阻止物體在 X, Y, Z 三個方向之平移，但允許球體隨意轉動（無力矩反力），故提供 3 個力反力分量 (Rx, Ry, Rz)。故選 (C)。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "(C) 3 個",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        }
      ]
    },
    {
      slug: 'plane-stress',
      "title": "9. 平面應力與莫耳圓圖解",
      "desc": "深入解析平面應力狀態、斜面正交應力與剪應力轉換公式、主平面與主應力求法，以及莫耳圓 (Mohr's Circle) 圖解幾何法。\n\n🔥 V6.0 考前秒殺秘訣：此核心概念統測出題率極高，建議善用圖解與鷹架提示反覆練習！",
      "status": "done",
      "gradeLevel": 10,
      "examHitRate": 4,
      "step0Prerequisites": [
        "本章核心基礎：plane-stress之關鍵定義與物理幾何直覺",
        "解題前置檢核：確認題型情境、已知條件量與求解目標"
      ],
      "fatalTraps": [
        {
          "wrongThinking": "直覺套用公式而忽略先決條件（如桁架節點無外力才能判定零桿、或構件必須受阻才會產生熱應力）。",
          "correctThinking": "回歸核心公理與基本定義，逐項檢核題幹條件與反例。",
          "trapDescription": "考生常因忽略正負號約定（如拉力為正/壓力為負、逆時針為正力矩）或未確認自由體圖支承反力完整性而失分。"
        }
      ],
      "eliteMentalModels": [
        {
          "technique": "第一性原理拆解法 (First Principles Breakdown)",
          "explanation": "不依賴死記死背，由最底層的定義與公理邏輯推導出解題路徑，降維打擊各類統測變形題。"
        }
      ],
      "covered_question_ids": [
        "110-1-15",
        "111-1-15",
        "112-1-15",
        "113-1-15",
        "114-1-15",
        "115-1-15"
      ],
      "worked_examples": [
        {
          "question": "【步驟化例題】主應力與莫耳圓半徑計算：一二維微元元素承受正交應力 σx = 80 MPa (拉), σy = 20 MPa (拉)，剪應力 τxy = 40 MPa。試求：(1) 莫耳圓之圓心位置 C 與圓半徑 R；(2) 最大與最小主應力 σ1, σ2；(3) 平面最大剪應力 τmax。",
          "difficulty": "基礎",
          "steps": [
            "步驟 1：求莫耳圓圓心 C。\n- σ_avg = (σx + σy) / 2 = (80 + 20) / 2 = 50 MPa。圓心座標 C(50, 0)。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "步驟 2：求莫耳圓半徑 R（兼最大剪應力 τmax）。\n- R = √[((σx - σy) / 2)² + τxy²] = √[((80 - 20) / 2)² + 40²] = √[30² + 40²] = √[900 + 1600] = √2500 = 50 MPa。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "步驟 3：計算主應力 σ1, σ2。\n- σ1 = σ_avg + R = 50 + 50 = 100 MPa (拉)。\n- σ2 = σ_avg - R = 50 - 50 = 0 MPa。\n- 平面最大剪應力 τmax = R = 50 MPa。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "(1) 圓心 C(50, 0), 半徑 R = 50 MPa；(2) σ1 = 100 MPa, σ2 = 0 MPa；(3) τmax = 50 MPa",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        }
      ],
      "illustrations": [
        "units-vectors-context.webp",
        "units-vectors-mechanism.webp",
        "units-vectors-comparison.webp",
        "units-vectors-step.webp",
        "mechanics-real-world.webp",
        "plane-stress-infographic.webp",
        "concept-diagram.webp",
        "formula-visual.webp"
      ],
      "concepts": [
        {
          "heading": "平面應力與斜面應力轉換公式 (Plane Stress & Stress Transformation)",
          "body": "平面應力 (Plane Stress) 指三維物體中與某一平面垂直之應力分量全為零（即 σz = 0, τxz = 0, τyz = 0）。當沿與 X 軸夾角為 θ 之斜面剖開時，斜面上的正交應力 σθ 與剪應力 τθ 隨角度改變。",
          "steps": [
            "正交應力轉換：$sigma_\theta = \frac{sigma_x + sigma_y}{2} + \frac{sigma_x - sigma_y}{2}cos 2\theta + \tau_{xy}sin 2\theta$。",
            "剪應力轉換：$\tau_\theta = -\frac{sigma_x - sigma_y}{2}sin 2\theta + \tau_{xy}cos 2\theta$。",
            "正交應力不變量：在任何互相垂直之斜面上，正交應力之和恆為常數（$sigma_\theta + sigma_{\theta+90^circ} = sigma_x + sigma_y$）。"
          ]
        },
        {
          "heading": "主平面、主應力與最大剪應力 (Principal Planes & Stresses)",
          "body": "主平面 (Principal Planes) 指剪應力為零 (τ = 0) 之特定斜面。作用於主平面上之正交應力稱為主應力 ($sigma_1, sigma_2$)，代表該點正交應力之極大值與極小值。",
          "table": {
            "headers": [
              "應力物理量",
              "計算公式",
              "角度關係 (對應實體元素)",
              "剪應力數值"
            ],
            "rows": [
              [
                "平均正應力 $sigma_{avg}$",
                "$sigma_{avg} = (sigma_x + sigma_y) / 2$",
                "莫耳圓圓心 X 座標",
                "無特別要求"
              ],
              [
                "主應力極值 $sigma_{1,2}$",
                "$sigma_{avg} pm sqrt{((sigma_x - sigma_y)/2)^2 + \tau_{xy}^2}$",
                "主平面夾角 $\tan 2\theta_p = \frac{2\tau_{xy}}{sigma_x - sigma_y}$",
                "剪應力精確等於 0"
              ],
              [
                "最大剪應力 $\tau_{max}$",
                "$\tau_{max} = R = \frac{sigma_1 - sigma_2}{2}$",
                "最大剪應力平面與主平面相差 $45^circ$",
                "對應正交應力等於 $sigma_{avg}$"
              ]
            ]
          }
        },
        {
          "heading": "莫耳圓 (Mohr's Circle) 圖解幾何法",
          "body": "莫耳圓是將二維應力轉換公式幾何化之極佳工具。以正交應力 σ 為橫軸（向右為拉 +）、剪應力 τ 為縱軸（向下為正或順時針 +）。莫耳圓上任意點之座標代表某一傾斜角度剖面之應力狀態。",
          "steps": [
            "作圖步驟 1：標定點 X(σx, -τxy) 與點 Y(σy, τxy)。",
            "作圖步驟 2：連線 XY 交 σ 軸於圓心 C(σ_avg, 0)，以 CX 長度為半徑 R 畫圓。",
            "角度對應：莫耳圓上圓心角轉過 $2\theta$，對應實體元素斜面實際旋轉角度 $\theta$（方向一致）。"
          ]
        }
      ],
      "practices": [
        {
          "difficulty": "基礎",
          "question": "在平面應力狀態下，主平面 (Principal Plane) 上的剪應力 (Shear Stress) 數值為何？ (A) 等於最大正應力 (B) 等於零 (C) 等於平均正應力 (D) 無法確定。",
          "steps": [
            "主平面定義即為「剪應力等於零」之平面。在此平面上正交應力達到極值（主應力）。故選 (B)。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "(B) 等於零",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        },
        {
          "difficulty": "高頻統測題",
          "question": "已知某構件受二維應力作用，莫耳圓之圓心位於 (40 MPa, 0)，圓半徑 R = 30 MPa。則該點之最大主應力 σ1 與最小主應力 σ2 分別為何？ (A) 70 MPa, 10 MPa (B) 40 MPa, 30 MPa (C) 80 MPa, 20 MPa (D) 60 MPa, 10 MPa。",
          "steps": [
            "σ1 = σ_avg + R = 40 + 30 = 70 MPa。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。",
            "σ2 = σ_avg - R = 40 - 30 = 10 MPa。故選 (A)。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "(A) 70 MPa, 10 MPa",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        },
        {
          "difficulty": "進階",
          "question": "在平面應力狀態下，作用於最大剪應力平面 (Maximum Shear Stress Plane) 上之正交應力數值為何？ (A) 0 (B) 等於最大主應力 σ1 (C) 等於平均正應力 σ_avg (D) 等於 2σ1。",
          "steps": [
            "在莫耳圓中，最大剪應力點位於圓周最高點與最低點，其 X 軸座標精確等於圓心 X 座標，即平均正應力 σ_avg = (σx + σy) / 2。故選 (C)。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "(C) 等於平均正應力 σ_avg",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        },
        {
          "difficulty": "高頻統測題",
          "question": "在莫耳圓圖解法中，若莫耳圓上兩點連線相對於圓心轉過了 90° 的圓心角，則對應於實體微元元素上，兩斜面之間的法線夾角為多少度？ (A) 90° (B) 45° (C) 30° (D) 180°。",
          "steps": [
            "莫耳圓上之轉角為 2θ，故圓心角 2θ = 90° 時，實體微元元素斜面之實際轉角 θ = 90° / 2 = 45°。故選 (B)。 ｜為什麼：依據工程力學核心規範與力學幾何定理演算。"
          ],
          "answer": "(B) 45°",
          "hints": [
            "分析題目核心條件與工程力學規範/定理",
            "列出對應計算式或幾何平衡條件求解"
          ],
          "commonMistake": "容易在正負號方向、單位換算 (如 MPa = N/mm²) 或圖例符號代入時產生計算失誤。",
          "eliteShortcut": "工程實務破題法：善用對稱性與基準線選定，直接鎖定關鍵數據快速秒殺！"
        }
      ]
    }
  ]
};
