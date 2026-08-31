import type { TopicContent } from '../types';

const quiz = (question: string, steps: string[], answer: string, difficulty = '統測核心') => ({
  question,
  difficulty,
  steps,
  answer,
});

const checks = (topic: string, invariant: string, unit: string) => [
  quiz(`${topic}解題時，第一個必須確認的模型條件是什麼？`, [`辨識題目屬於**${topic}**，先畫出<span className="text-indigo-600 font-bold">自由體圖 (FBD)</span> 或整理已知量。`, `確認 <span className="text-rose-600 font-bold">${invariant}</span> 成立後再代入公式。`], invariant, '觀念'),
  quiz(`${topic}計算完成後，最直接的量綱檢核為何？`, [`逐項檢查輸入單位是否一致。`, `結果應以 **${unit}** 表達；不符時不可只改單位符號，須回推計算過程。`], unit, '觀念'),
  quiz(`${topic}結果出現負號時，正確處理方式為何？`, ['回到原先設定的<span className="text-indigo-600 font-bold">正方向</span>或轉向。', '負號僅表示<span className="text-rose-600 font-bold">實際方向與假設相反</span>，不代表答案必然錯誤。'], '保留大小並依符號修正實際方向', '易錯題'),
  quiz(`${topic}最可靠的最後驗算策略為何？`, ['使用<span className="text-indigo-600 font-bold">未參與主要求解的獨立關係</span>重新計算。', '同時檢查極端情況、方向與<span className="text-rose-600 font-bold">有效數字</span>合理性。'], '以獨立關係複核並檢查方向、量綱與合理性', '進階'),
];

export const mechanicsGapTopics: TopicContent[] = [
  {
    slug: 'parallel-force-systems',
    title: '2A. 平面平行力系',
    desc: '把分布載重換成等值集中力，利用合力與力矩定位作用線，並反推支承反力。',
    status: 'done',
    gradeLevel: 10,
    examHitRate: 4,
    step0Prerequisites: [
      '等值集中力計算：W = 載重圖面積',
      '形心位置：矩形在中點 (L/2)，三角形在距大端 1/3 處 (距尖端 2/3 處)'
    ],
    fatalTraps: [
      {
        wrongThinking: '將三角形分布載重的等值集中力位置放在三角形中點 (L/2)。',
        correctThinking: '三角形載重形心位於距大端 (最大載重處) L/3，即距尖端 2L/3 處。',
        trapDescription: '三角形載重形心位置記反，導致支承反力全錯。'
      }
    ],
    eliteMentalModels: [
      {
        technique: '對稱分解法 (Symmetric Superposition)',
        explanation: '對稱載重下兩端反力必各分一半；非對稱載重可拆解為對稱均布 + 反對稱三角形，心算即可直接寫出反力。'
      }
    ],
    illustrations: ['context.webp', 'mechanism.webp', 'parallel-forces-diagram.webp', 'formula-visual.webp'],
    covered_question_ids: [],
    concepts: [
      {
        heading: '等值合力與作用點',
        body: '同向平行力的合力為<span className="text-indigo-600 font-bold">各力代數和</span>；作用線位置由「<span className="text-rose-600 font-bold">對任一點的總力矩相等</span>」決定。分布載重的合力等於**載重圖面積**，作用於**載重圖形心**。',
        formula: '<span className="text-rose-600 font-bold">R = ΣF</span>；<span className="text-indigo-600 font-bold">x_R = Σ(F_i x_i) / ΣF</span>；R = ∫w(x)dx',
        table: {
          headers: ['載重類型', '等值合力大小 (R)', '作用線位置 (x_R)', '必背記憶口訣與工程特點'],
          rows: [
            ['均布載重 (Uniform, w)', 'R = w · L', '跨度正中點 x = L/2', '對稱分布，各反力均分 (wL/2)'],
            ['三角形載重 (0 → w₀)', 'R = (1/2) · w₀ · L', '距大端 L/3 (距尖端 2L/3)', '面積除以二，形心偏重端三分之一'],
            ['集中載重 (Point, P)', 'R = P', '位於載重作用點 x = a', '剪力圖發生突變 (跳階 P)'],
            ['梯形載重 (w₁ → w₂)', 'R = ((w₁+w₂)/2) · L', '拆解為矩形 + 三角形加權求形心', '疊加原理快速計算反力']
          ]
        }
      },
      {
        heading: '均布與三角形載重',
        body: '均布載重 w 作用長度 L，等值力為 <span className="text-indigo-600 font-bold">wL</span>，作用於**中點**。由零線性增加到 w₀ 的三角形載重，等值力為 <span className="text-rose-600 font-bold">w₀L/2</span>，作用於**大端起算 L/3** (距尖端 2L/3)。'
      },
      {
        heading: '平衡與驗算',
        body: '先畫<span className="text-indigo-600 font-bold">自由體圖 (FBD)</span>，再列 <span className="text-rose-600 font-bold">ΣF_y=0</span> 與 <span className="text-rose-600 font-bold">ΣM=0</span>。最後用另一取矩點複核；反力為負表示**實際方向與假設相反**。'
      }
    ],
    worked_examples: [
      quiz('簡支梁跨距 6 m，全跨受 4 kN/m 均布載重，兩端反力各為多少？', ['等值集中力 <span className="text-rose-600 font-bold">W = 4 × 6 = 24 kN</span>，作用於跨中。', '系統左右對稱，所以 <span className="text-indigo-600 font-bold">R_A = R_B</span>。', 'R_A + R_B = 24 kN。'], 'R_A = R_B = 12 kN')
    ],
    practices: [
      quiz('長 3 m 的三角形載重由左端 0 線性增至右端 12 kN/m。等值力與作用位置為何？', ['載重圖面積 <span className="text-rose-600 font-bold">R = 12 × 3 / 2 = 18 kN</span>。', '三角形形心距大端 <span className="text-indigo-600 font-bold">L/3</span>。'], '18 kN，距右端 1 m（距左端 2 m）'),
      quiz('兩向下平行力 10 kN、20 kN 分別位於 x=1 m、x=4 m，合力位置為何？', ['<span className="text-rose-600 font-bold">R = 10 + 20 = 30 kN</span>。', '位置公式：<span className="text-indigo-600 font-bold">x_R = (10×1 + 20×4) / 30 = 3 m</span>。'], 'x = 3 m', '進階'),
      ...checks('平面平行力系', '合力與原力系的總力及總力矩等值', '力用 kN、位置用 m、力矩用 kN·m')
    ]
  },
  {
    slug: 'nonconcurrent-force-systems',
    title: '2B. 共面非共點非平行力系',
    desc: '同時處理水平力、垂直力與力偶，以三個獨立平衡方程求解剛體未知反力。',
    status: 'done',
    gradeLevel: 10,
    examHitRate: 5,
    step0Prerequisites: [
      '平面剛體平衡三方程：ΣFx=0, ΣFy=0, ΣMo=0',
      '支承約束反力特徵（滾支承 1 反力、鉸支承 2 反力、固定端 3 反力含力矩）'
    ],
    fatalTraps: [
      {
        wrongThinking: '固定端支承只列水平與垂直反力，漏掉反力矩 Mo。',
        correctThinking: '固定端 (Fixed Support) 限制了所有移動與轉動，必須包含垂直反力 Ay、水平反力 Ax 及固定端力矩 Ma。',
        trapDescription: '固定端支承漏算力矩反力，導致未知數不足無法求解。'
      }
    ],
    eliteMentalModels: [
      {
        technique: '最佳取矩點消去法 (Pivot Point Elimination)',
        explanation: '取矩點永遠選在「最多未知力交會之支承點」，直接令 2 個未知數的力臂為零，一條方程式即可解出第 3 個未知數。'
      }
    ],
    illustrations: ['context.webp', 'mechanism.webp', 'equilibrium-equations.webp', 'step-by-step.webp'],
    covered_question_ids: [],
    concepts: [
      {
        heading: '三個獨立平衡條件',
        body: '平面剛體平衡必須同時滿足<span className="text-indigo-600 font-bold">水平力</span>、<span className="text-indigo-600 font-bold">垂直力</span>及任一點<span className="text-rose-600 font-bold">總力矩為零</span>。取矩點宜穿過**最多未知力作用線**以簡化計算。',
        formula: '<span className="text-rose-600 font-bold">ΣF_x=0</span>；<span className="text-rose-600 font-bold">ΣF_y=0</span>；<span className="text-rose-600 font-bold">ΣM_O=0</span>',
        table: {
          headers: ['支承約束型式', '反力數與未知量', '平衡方程式組', '統測解題 SOP 與取矩技巧'],
          rows: [
            ['滾支承 (Roller)', '1 個垂直反力 (R_y)', 'ΣF_y = 0', '允許水平移動與自由轉動'],
            ['鉸支承 (Hinged / Pin)', '2 個反力 (R_x, R_y)', 'ΣF_x = 0, ΣF_y = 0', '取矩點首選鉸支承點，消去 2 個未知數'],
            ['固定端 (Fixed)', '3 個反力 (R_x, R_y, M_A)', 'ΣF_x = 0, ΣF_y = 0, ΣM_A = 0', '含反力矩 M_A，懸臂梁直接由自由端回推'],
            ['三力平衡剛體', '3 個共面力交於一點或平行', '拉密定理 / 力三角形閉合', '三非平行力平衡時其作用線必共點']
          ]
        }
      },
      {
        heading: '力的移轉與力偶',
        body: '把力平移到另一點時，必須附加 <span className="text-rose-600 font-bold">M = Fd</span> 的力偶。力偶矩與取矩點無關，**只具有轉向**。',
        formula: '<span className="text-indigo-600 font-bold">M = F d_⊥</span>'
      },
      {
        heading: '支承反力辨識',
        body: '滾支承一個法向反力、鉸支承兩個分力、固定端有兩個分力與一個**反力矩**；未知數超過獨立方程即屬<span className="text-rose-600 font-bold">靜不定</span>。'
      }
    ],
    worked_examples: [
      quiz('鉸支承 A 與滾支承 B 相距 4 m，跨中受向下 8 kN，求反力。', ['<span className="text-indigo-600 font-bold">ΣM_A=0</span>：4B_y - 8×2 = 0，得 <span className="text-rose-600 font-bold">B_y = 4 kN</span>。', '<span className="text-indigo-600 font-bold">ΣF_y=0</span>：A_y + B_y - 8 = 0。', '無水平外力，<span className="text-rose-600 font-bold">A_x = 0</span>。'], 'A_x=0，A_y=4 kN，B_y=4 kN')
    ],
    practices: [
      quiz('一剛體受向右 6 kN、向上 8 kN，兩力交於同點。合力大小與方向為何？', ['合力大小 <span className="text-rose-600 font-bold">R = √(6² + 8²) = 10 kN</span>。', '方向角 <span className="text-indigo-600 font-bold">θ = tan⁻¹(8/6) = 53.13°</span>。'], '10 kN，向右上 53.13°'),
      ...checks('非共點非平行力系', 'ΣF_x、ΣF_y、ΣM 三式同時成立', '力用 kN、力矩用 kN·m')
    ]
  },
  {
    slug: 'shear-properties',
    title: '7A. 剪力與剪應力',
    desc: '區分直接剪力、平均剪應力與梁中橫向剪應力，避免把 V、τ 與剪力圖混為一談。',
    status: 'done',
    gradeLevel: 10,
    examHitRate: 4,
    step0Prerequisites: [
      '單剪與雙剪有效剪切面積區分',
      '矩形梁截面最大剪應力 τmax = 1.5 · (V/A)'
    ],
    fatalTraps: [
      {
        wrongThinking: '雙剪螺栓計算剪應力時，誤用單個截面積 A 代入 τ = V/A。',
        correctThinking: '雙剪有兩個剪切面承載剪力，有效面積為 2A，故平均剪應力 τ = V / (2A)。',
        trapDescription: '漏乘雙剪截面係數 2，算出的剪應力為真實值的兩倍。'
      }
    ],
    eliteMentalModels: [
      {
        technique: '剪力形狀係數倍率法 (Shape Factor Multiplier)',
        explanation: '記住三大常用截面最大剪應力公式：矩形 τmax = 1.5 V/A；實心圓 τmax = (4/3) V/A；薄壁圓管 τmax = 2 V/A，統測直接套倍率。'
      }
    ],
    illustrations: ['context.webp', 'concept-diagram.webp', 'shear-stress-distribution.webp', 'formula-visual.webp'],
    covered_question_ids: [],
    concepts: [
      {
        heading: '直接剪應力',
        body: '鉚釘、螺栓或沖孔面常先以<span className="text-indigo-600 font-bold">平均剪應力</span>計算。**雙剪**有兩個剪切面，有效面積是單剪的兩倍。',
        formula: '<span className="text-rose-600 font-bold">τ_avg = V / A_s</span>；A_s = n(πd²/4)',
        table: {
          headers: ['截面形狀 / 受剪型態', '平均剪應力公式', '最大剪應力 τ_max', '統測秒殺倍率與注意事項'],
          rows: [
            ['單剪連接 (Single Shear)', 'τ = V / A', 'τ_max = V / A', '剪切面積 A = πd²/4 (單面受剪)'],
            ['雙剪連接 (Double Shear)', 'τ = V / (2A)', 'τ_max = V / (2A)', '有效受剪面積加倍 (2A)，應力減半'],
            ['矩形梁截面 (b × h)', 'τ_avg = V / (bh)', 'τ_max = 1.5 · (V/A)', '最大剪應力發生於中性軸 (NA)，為平均值 1.5 倍'],
            ['實心圓形截面 (直徑 d)', 'τ_avg = V / (πr²)', 'τ_max = (4/3) · (V/A)', '最大剪應力為平均值 4/3 倍 (約 1.33 倍)'],
            ['薄壁圓管 (厚度 t)', 'τ_avg = V / A', 'τ_max = 2.0 · (V/A)', '最大剪應力為平均值 2.0 倍']
          ]
        }
      },
      {
        heading: '梁的橫向剪應力',
        body: '梁截面剪應力由自由表面零值增至<span className="text-rose-600 font-bold">中性軸附近最大</span>；矩形截面最大值為平均值 <span className="text-indigo-600 font-bold">1.5 倍</span>。',
        formula: 'τ = VQ/(It)；矩形：<span className="text-rose-600 font-bold">τ_max = 3V/(2A)</span>'
      },
      {
        heading: '剪力圖符號與跳躍',
        body: '集中力使剪力圖<span className="text-rose-600 font-bold">瞬間跳躍</span>；分布載重是剪力圖斜率，剪力則是彎矩圖斜率。',
        formula: '<span className="text-indigo-600 font-bold">dV/dx = -w</span>；<span className="text-indigo-600 font-bold">dM/dx = V</span>'
      }
    ],
    worked_examples: [
      quiz('直徑 10 mm 鉚釘承受 12 kN 單剪，平均剪應力為何？', ['剪切面積 <span className="text-rose-600 font-bold">A = π(10²)/4 = 78.54 mm²</span>。', '剪應力 <span className="text-indigo-600 font-bold">τ = 12000 / 78.54 = 152.8 N/mm²</span>。'], '約 153 MPa')
    ],
    practices: [
      quiz('同一支直徑 10 mm 鉚釘改為雙剪並承受 12 kN，平均剪應力為何？', ['雙剪有效面積為 <span className="text-rose-600 font-bold">2A</span>。', '剪應力 <span className="text-indigo-600 font-bold">τ = 12000 / (2 × 78.54)</span>。'], '約 76.4 MPa'),
      ...checks('剪力與剪應力', '先分辨剪力 V、剪切面數與有效面積', '剪力用 N 或 kN、剪應力用 MPa')
    ]
  }
];

export const surveyingGapTopics: TopicContent[] = [
  {
    slug: 'surveying-fundamentals',
    title: '0. 測量總論與誤差基礎',
    desc: '建立測量基準、單位、精度、有效數字、誤差與工作倫理的完整起點。',
    status: 'done',
    gradeLevel: 10,
    examHitRate: 4,
    step0Prerequisites: [
      '測量誤差分類：系統誤差（規律可改正）vs 偶然誤差（隨機遵循常態分佈）',
      '相對精度表示法：1/M (以分子為 1 之分數表達)'
    ],
    fatalTraps: [
      {
        wrongThinking: '將「人為粗差（錯誤）」歸類為偶然誤差並進行平差計算。',
        correctThinking: '粗差 (Blunder) 必須透過檢核觀測直接剔除重測，絕不可混入平差計算中。',
        trapDescription: '統測名詞觀念題中最常見的混淆陷阱。'
      }
    ],
    eliteMentalModels: [
      {
        technique: '誤差傳播根號 N 定律 (Root-N Law of Propagation)',
        explanation: '獨立等精度觀測總和之偶然誤差與 √N 成正比，平均值之偶然誤差與 1/√N 成反比。統測必考測次與精度關係。'
      }
    ],
    illustrations: ['context.webp', 'concept-diagram.webp', 'error-distribution.webp', 'step-by-step.webp'],
    covered_question_ids: [],
    concepts: [
      {
        heading: '測量工作與基準',
        body: '測量以距離、角度與高差觀測建立點位。小區域可採<span className="text-indigo-600 font-bold">平面測量假設</span>；範圍擴大時必須考慮地球曲率、坐標系與高程基準。',
        table: {
          headers: ['誤差 / 指標類別', '主要成因與物理特徵', '消減與改正對策', '統測必背公式與記憶口訣'],
          rows: [
            ['人為粗差 (Blunder / Mistake)', '讀數粗心、記錄顛倒、立尺不垂直', '加強檢核、重測並直接剔除', '嚴禁混入平差計算；核對正倒鏡'],
            ['系統誤差 (Systematic Error)', '尺長不符、溫差膨脹、視準軸偏差', '計算公式改正或特定觀測法消除', '具規律性與累積性；盤左盤右消差'],
            ['偶然誤差 (Accidental Error)', '大氣擾動、調焦估讀隨機微小震盪', '多次重複觀測取算術平均值 (最或是值)', '遵循常態分佈；總誤差 ∝ √N，均值誤差 ∝ 1/√N'],
            ['精度指標 (Precision vs Accuracy)', '精密度：觀測值離散度；準確度：接近真值', '以標準差 σ、中誤差 m、相對精度 1/M 表示', '相對閉合精度 = 閉合差 K / 總長 L = 1/M']
          ]
        }
      },
      {
        heading: '誤差、錯誤與精度',
        body: '**錯誤**應查明剔除；**系統誤差**依規律改正；**偶然誤差**以重複觀測及統計降低。<span className="text-rose-600 font-bold">精密度</span>描述彼此接近，<span className="text-rose-600 font-bold">準確度</span>描述接近真值。'
      },
      {
        heading: '有效數字與單位',
        body: '中間計算保留至少一位<span className="text-indigo-600 font-bold">保護位</span>，最後依觀測精度修約；角度的度分秒與十進位度不可直接混算。',
        formula: '1°=60′=3600″；<span className="text-rose-600 font-bold">相對精度 = |誤差|/測線長</span>'
      }
    ],
    worked_examples: [
      quiz('距離量得 100.02、99.98、100.00 m，最或是值為何？', ['等精度觀測以<span className="text-indigo-600 font-bold">算術平均</span>作最或是值。', '<span className="text-rose-600 font-bold">(100.02 + 99.98 + 100.00) / 3 = 100.00 m</span>。'], '100.00 m')
    ],
    practices: [
      quiz('閉合差 0.020 m、測線總長 200 m，相對閉合精度為何？', ['相對誤差 = <span className="text-rose-600 font-bold">0.020 / 200 = 1 / 10000</span>。'], '1/10,000'),
      ...checks('測量總論', '基準、單位、精度與觀測條件已交代', '依觀測量使用 m、度分秒或無因次比值')
    ]
  },
  {
    slug: 'indirect-distance-elevation',
    title: '4A. 間接距離與高程測量',
    desc: '整合視距、三角高程與不可達距離，從觀測量判斷該用水平距離、高差或斜距公式。',
    status: 'done',
    gradeLevel: 10,
    examHitRate: 4,
    step0Prerequisites: [
      '視距測量水平距公式：H = K · s · cos²(α)',
      '視距測量高差公式：V = (1/2) · K · s · sin(2α)'
    ],
    fatalTraps: [
      {
        wrongThinking: '計算視距水平距離時，將公式平方項漏掉，寫成 H = K·s·cos(α)。',
        correctThinking: '標尺直立時水平距為 H = K·s·cos²(α)，因視線傾斜有兩個 cos 因子（標尺投影與水平投影）。',
        trapDescription: '視距公式中 cos 平方漏乘是統測計算高頻失分點。'
      }
    ],
    eliteMentalModels: [
      {
        technique: '水平視線極端值簡化 (Zero Zenith Angle Check)',
        explanation: '當垂直角 α = 0°（水平視線）時，cos(0°)=1，公式自動退化為 H = K·s (通常 K=100，H = 100 × 尺間隔)，可快速心算驗算。'
      }
    ],
    illustrations: ['context.webp', 'mechanism.webp', 'indirect-measurement.webp', 'formula-visual.webp'],
    covered_question_ids: [],
    concepts: [
      {
        heading: '視距測量',
        body: '標尺垂直且視線有垂直角 α 時，水平距離包含<span className="text-indigo-600 font-bold">乘常數項</span>與<span className="text-indigo-600 font-bold">加常數項</span>；題目若只給上下絲讀數，視距間隔 s 為**兩者之差**。',
        formula: '<span className="text-rose-600 font-bold">H = K s cos²α + C cosα</span>',
        table: {
          headers: ['間接測量方法', '觀測幾何條件與變數', '核心計算公式', '統測考點與常數設定'],
          rows: [
            ['視距測量 (水平視線 α=0°)', '儀器乘常數 K=100，加常數 C=0，尺間隔 s', 'H = K · s = 100 · (上絲 - 下絲)', '秒殺口訣：水平視線距離等於 100 倍尺間隔'],
            ['視距測量 (傾斜視線 α≠0°)', '垂直角 α，標尺垂直地面', 'H = K·s·cos²α + C·cosα\\nV = (1/2)·K·s·sin(2α)', '注意 cos 平方項；高差 V 代入三角高程求高程'],
            ['三角高程測量', '已知 A 高程 H_A、儀器高 i、水平距 D、目標高 v', 'H_B = H_A + i + D·tanα - v', '記憶口訣：起點高 + 儀器高 + 距離乘tan仰角 - 稜鏡高'],
            ['不可達距離 (三角形法)', '基線長 b，兩端夾角 A, B', 'a = b · sin(A) / sin(180°-A-B)', '正弦定理解三角形，先畫圖定角防錯配']
          ]
        }
      },
      {
        heading: '三角高程',
        body: '由已知點儀器高、垂直角與水平距離推求未知點高程；必須把**目標高**納入，並統一<span className="text-rose-600 font-bold">仰角正、俯角負</span>。',
        formula: '<span className="text-indigo-600 font-bold">H_B = H_A + i + D tanα - v</span>'
      },
      {
        heading: '不可達距離策略',
        body: '先建立可量基線，再觀測角度形成三角形，以<span className="text-rose-600 font-bold">正弦定理</span>求不可直接丈量的邊；先畫幾何圖可避免角與對邊錯配。',
        formula: '<span className="text-indigo-600 font-bold">a/sin A = b/sin B = c/sin C</span>'
      }
    ],
    worked_examples: [
      quiz('K=100、C=0，視距間隔 s=1.50 m、α=30°，水平距離為何？', ['<span className="text-indigo-600 font-bold">cos²30° = 0.75</span>。', '<span className="text-rose-600 font-bold">H = 100 × 1.50 × 0.75 = 112.5 m</span>。'], '112.5 m')
    ],
    practices: [
      quiz('A 點高程 20.000 m，儀器高 1.500 m；至 B 的水平距離 40 m、仰角 5°，目標高 1.800 m。B 高程約為何？', ['高差項 = <span className="text-indigo-600 font-bold">40 tan 5° ≈ 3.500 m</span>。', '<span className="text-rose-600 font-bold">H_B = 20 + 1.5 + 3.5 - 1.8</span>。'], '約 23.200 m', '進階'),
      ...checks('間接距離與高程', '斜距、水平距離、垂直角與儀器高定義一致', '距離與高程用 m、角度用度分秒或度')
    ]
  }
];

export const draftingGapTopics: TopicContent[] = [
  {
    slug: 'building-codes-far',
    title: '容積率、建蔽率與建築法規實務',
    desc: '深入掌握建蔽率、容積率、免計容積與路寬退縮法規，準確計算基地最大開發量體與空間配置。',
    status: 'done',
    gradeLevel: 11,
    examHitRate: 5,
    step0Prerequisites: [
      '建蔽率定義：(建築面積 / 基地面積) × 100% (控制地面保留空地與日照通風)',
      '容積率定義：(總樓地板面積 / 基地面積) × 100% (控制都市總承載人口與空間密度)',
      '免計容積項目：法定防空避難、屋頂突出物、梯廳、機電設備等特定比例之容積豁免'
    ],
    fatalTraps: [
      {
        wrongThinking: '計算可興建總樓地板面積時，直接將法定容積率乘以建築面積。',
        correctThinking: '容積率與建蔽率的分母皆為「基地總面積」，總樓地板面積上限 = 基地面積 × 法定容積率；建築面積上限 = 基地面積 × 法定建蔽率。',
        trapDescription: '分母混淆將導致可建樓地板面積嚴重失真，是建築法規計算最高頻失分點。'
      },
      {
        wrongThinking: '將陽台、梯廳、地下室所有面積全數計入容積率計算。',
        correctThinking: '依據建築技術規則第 162 條，每層陽台面積未達該層樓地板面積 10% 等法定項目得不計入容積樓地板面積。',
        trapDescription: '未扣除法定免計容積項目，導致估算土地開發量體與實際法規允許值產生偏差。'
      }
    ],
    eliteMentalModels: [
      {
        technique: '立體量體極限推算法 (Floor Count & Density Matrix)',
        explanation: '最大合法興建樓層數估算 = 法定容積率 / 實際規劃建蔽率。例如 FAR 300%、建蔽率用滿 60%，則均勻興建樓層為 300 / 60 = 5 層樓；若建蔽率只用 30%，則可蓋 300 / 30 = 10 層樓，留出更多地面綠地。'
      }
    ],
    illustrations: ['context.webp', 'concept-diagram.webp', 'building-codes-far.webp', 'step-by-step.webp'],
    covered_question_ids: [],
    concepts: [
      {
        heading: '建蔽率與容積率的法規定義與空間管制原理',
        body: '建蔽率 (Building Coverage Ratio, BCR) 是指建築物在基地上的水平投影面積（建築面積）佔基地面積之百分比，目的在於保留空地，確保日照、通風、防火與都市防災間隔；容積率 (Floor Area Ratio, FAR) 是指建築物各層總樓地板面積佔基地面積之百分比，用以管制都市土地開發強度與公共設施承載力。',
        formula: '建蔽率 BCR = (建築面積 / 基地面積) × 100%\n容積率 FAR = (總樓地板面積 / 基地面積) × 100%',
        table: {
          headers: ['法規管制項目', '計算定義公式', '主要目的與都市機能', '統測核心計算與防錯要點'],
          rows: [
            ['建蔽率 (BCR)', '(建築面積 / 基地面積) × 100%', '保留地面空地，確保通風、採光、日照與都市防災', '最大建築面積 = 基地面積 × 法定建蔽率（分母為基地面積）'],
            ['容積率 (FAR)', '(總容積樓地板面積 / 基地面積) × 100%', '控制都市人口密度、交通量與公共設施總承載力', '最大總樓地板面積 = 基地面積 × 法定容積率'],
            ['極限樓層數估算', '最大層數 = 法定容積率 / 實際規劃建蔽率', '垂直量體向上發展，騰出地面綠化空間', '例：FAR 240% / 建蔽 50% = 4.8 層（蓋滿建蔽率時最多 4 整層）'],
            ['免計容積項目', '建築技術規則第 162 條', '鼓勵停車、避難與公共設施', '陽台 ≤ 該層 10%、地下避難/機電、法定梯廳免計容積']
          ]
        }
      },
      {
        heading: '免計容積與容積獎勵機制 (建築技術規則第 162 條)',
        body: '依據《建築技術規則》建築設計施工編第 162 條，為鼓勵生活品質與防災機能，特定空間如地下層作為防空避難或停車空間、法定屋頂突出物、機電設備空間、梯廳及未超過該層 10% 之陽台，符合法定標準者得不計入容積樓地板面積。此外，配合綠建築標章、都市更新、開放空間或危老重建，得依法申請容積獎勵。'
      },
      {
        heading: '道路寬度、建築高度與路角截角限制',
        body: '建築物高度受路寬比與日照陰影限制。一般規定建築物高度不得超過鄰接道路寬度之 1.5 倍加 6 公尺；在轉角街廓需依道路夾角進行基地截角退縮（一般退縮 3~5 公尺），確保路口行車視距安全。'
      }
    ],
    worked_examples: [
      {
        question: '【經典法規例題】某住宅區基地面積為 600 m²，都市計畫法定建蔽率為 50%，法定容積率為 240%。若業主欲將一樓建築面積建至法定最大值，且各樓層標準層面積皆相同，試問：(1) 一樓最大合法建築面積為多少 m²？(2) 本案最大合法總容積樓地板面積為多少 m²？(3) 若各層均建至一樓最大建築面積，最多可興建幾層樓？',
        steps: [
          '步驟 1：計算最大建築面積。一樓最大建築面積 = 基地面積 × 法定建蔽率 = 600 m² × 50% = 300 m²。 ｜為什麼：建蔽率控制基地水平投影極限。',
          '步驟 2：計算最大總容積樓地板面積。總樓地板面積上限 = 基地面積 × 法定容積率 = 600 m² × 240% = 1440 m²。 ｜為什麼：容積率以基地面積為基準控制總開發量體。',
          '步驟 3：計算最多可興建樓層數。可建樓層數 = 總樓地板面積 / 每層建築面積 = 1440 m² / 300 m² = 4.8 ⇒ 在每層建滿 300 m² 條件下，最多可興建 4 層完整樓層 (4 × 300 = 1200 m²)，剩餘 240 m² 可配置為第 5 層縮小層或退縮露台。 ｜為什麼：容積總量除以單層面積決定垂直層數分配。'
        ],
        answer: '(1) 一樓最大建築面積為 300 m²；(2) 最大總容積樓地板面積為 1440 m²；(3) 若每層均建滿 300 m²，最多可建 4 層完整樓層（加頂層 240 m² 退縮層共 5 層）。',
        difficulty: '中等',
        hints: ['建蔽率與容積率皆乘以基地面積 600 m²', '注意樓層數與單層面積之分配關係'],
        commonMistake: '常有考生誤將容積率 240% 乘以建築面積 300 m²，導致總樓地板面積少算一半以上。',
        eliteShortcut: '速算層數：直接以 法定容積率 / 法定建蔽率 = 240% / 50% = 4.8 層，秒殺立體配置！'
      }
    ],
    practices: [
      {
        question: '某商業區基地面積 800 m²，法定建蔽率 70%、容積率 420%。若規劃每層樓地板面積均為 400 m²（未用滿建蔽率），試問該大樓最多可興建幾層完整樓層？',
        steps: [
          '計算總容積上限：800 × 420% = 3360 m²。',
          '計算樓層數：3360 / 400 = 8.4 層，故可完整興建 8 層樓（第 9 層為 160 m²）。',
          '檢核單層面積 400 m² < 最大建築面積 800 × 70% = 560 m²，符合法規。'
        ],
        answer: '最多可興建 8 層完整樓層（加頂層 160 m² 退縮層）。',
        difficulty: '中等'
      },
      {
        question: '依建築技術規則，建築基地面臨 8 公尺道路，若基地為路角地（交叉路口夾角小於 120 度），主要安全退縮要求為何？',
        steps: [
          '路角地為確保行車視距，必須實施路角截角（截角長度視路寬與夾角而定，通常 3~5 公尺）。',
          '截角範圍內不得興建妨礙視線之實體圍牆或構造物。'
        ],
        answer: '需依規定進行路角截角退縮，且截角範圍內不得設置妨礙視線之建築障礙物。',
        difficulty: '易'
      },
      ...checks('容積率與建蔽率法規', '基地面積、建蔽率與容積率定義清楚', '面積用 m²、比率用百分比 %')
    ]
  },
  {
    slug: 'drafting-fundamentals',
    title: '0. 製圖基本觀念與圖紙管理',
    desc: '補齊圖紙規格、標題欄、折疊、圖面種類、版本管理與標準化判讀。',
    status: 'done',
    gradeLevel: 10,
    examHitRate: 4,
    step0Prerequisites: [
      'CNS 11567 建築製圖國家標準基本線條與符號分類',
      'A 系列圖紙幾何特性：長寬比為 √2 : 1，面積依序折半'
    ],
    fatalTraps: [
      {
        wrongThinking: '認為 A1 圖紙面積為 A0 的一半，故長與寬各為 A0 的一半。',
        correctThinking: 'A 系列圖紙面積折半時，長寬是依 1/√2 ≈ 0.707 倍縮小，並非長寬各減半（長寬各減半則面積變 1/4）。',
        trapDescription: '混淆面積倍率與邊長縮放比例，是製圖尺規題常見失分點。'
      },
      {
        wrongThinking: '圖紙折疊歸檔時，將標題欄折入內側保護避免弄髒。',
        correctThinking: 'A 系列圖紙折疊至 A4 大小時，標題欄必須完整顯露於「折疊後的正面右下方」，便於無須展開即可檢索圖名與版次。',
        trapDescription: '違背工程圖紙管理與檢索標準規範。'
      }
    ],
    eliteMentalModels: [
      {
        technique: 'A 系列圖紙長寬模矩換算法',
        explanation: '記住 A4 為 297×210 mm、A3 為 420×297 mm、A2 為 594×420 mm、A1 為 841×594 mm、A0 為 1189×841 mm (面積剛好 1 m²)。短邊變長邊、長邊折半變短邊，迅速推算所有圖紙尺度。'
      }
    ],
    illustrations: ['context.webp', 'concept-diagram.webp', 'drafting-standards.webp', 'step-by-step.webp'],
    covered_question_ids: [],
    concepts: [
      {
        heading: '工程圖的溝通功能與圖說階層',
        body: '工程圖以標準化線條、符號、尺度與註記傳遞設計及施工資訊；清晰、一致、可追溯比藝術化表現更重要。',
        table: {
          headers: ['A 系列圖紙規格', '外框尺寸 (mm × mm)', '幾何模矩特性', 'CNS 折疊與管理標準'],
          rows: [
            ['A0', '1189 × 841', '面積剛好 1.0 m²，長寬比 √2 : 1', '折疊至 A4 大小，標題欄永遠露出在正面右下'],
            ['A1', '841 × 594', 'A0 對折，面積 0.5 m²', '長邊折半變短邊，短邊直接變長邊'],
            ['A2', '594 × 420', 'A1 對折，面積 0.25 m²', '標題欄固定繪於圖面右下角，便於檢索'],
            ['A3', '420 × 297', 'A2 對折，面積 0.125 m²', '施工圖常用規格，現場翻閱裝訂便捷'],
            ['A4', '297 × 210', '標準文件檔案夾單元，面積 0.0625 m²', '所有大圖折疊歸檔之最終收納基準尺寸']
          ]
        }
      },
      {
        heading: 'A 系列圖紙幾何特徵與標準折疊規範',
        body: 'A 系列長寬比為 √2 : 1，對半裁切仍保持同一比例。折疊歸檔後應讓標題欄位於正面右下並可直接識別。',
        formula: 'A0 面積 = 1 m²；長寬比 = √2 : 1'
      },
      {
        heading: '圖面階段、版本管理與修訂雲線',
        body: '概念圖說明構想，設計圖確立方案，施工圖提供尺寸與做法，竣工圖反映完成現況；修訂需在圖面修改處加繪修訂雲線 (Revision Cloud)，並在標題欄詳列日期、版次 (Rev.) 與修訂內容，確保工程責任可追溯。'
      }
    ],
    worked_examples: [
      {
        question: '【經典示範題】工程圖紙管理：一張 A1 施工圖紙（尺寸 841 mm × 594 mm）依 CNS 規範折疊為 A4 規格（297 mm × 210 mm）歸檔保存時，標題欄（Title Block）應該呈現於折疊後成品的哪一個位置？其工程目的為何？',
        steps: [
          '步驟 1：識別標準圖紙折疊規範。依據 CNS 規範，大張工程圖紙折疊歸檔統一以 A4 (297×210 mm) 為標準收納單元。 ｜為什麼：配合標準文件檔案夾規格。',
          '步驟 2：定位標題欄。原圖紙繪製時，標題欄規定繪製於全圖「右下角」。 ｜為什麼：符合中文與國際讀圖檢索習慣。',
          '步驟 3：決定折疊後朝向。折疊程序最後一步必須使右下角的標題欄直接展現在「正面右下方」。 ｜為什麼：工程師在圖紙夾內翻閱時，免展開整張圖紙即可立刻讀取圖名、圖號、版次與繪圖日期。'
        ],
        answer: '標題欄應呈現於折疊後正面右下方；工程目的為利於翻閱檢索，免展開即可查閱圖名、圖號、設計者及最新版次。',
        difficulty: '基礎',
        hints: ['標題欄原在圖紙右下角', '折疊的目標是方便檔案夾檢索'],
        commonMistake: '誤答為折在背面或需要完全展開才能看到。',
        eliteShortcut: '記憶口訣：無論多大張圖（A0~A3），折完一律 A4 大小，標題欄永遠露在正面右下！'
      }
    ],
    practices: [
      {
        question: '在建築工程圖說中，若需要清楚表達梁柱內部鋼筋之型號、彎鉤形狀、綁紮間距及保護層厚度，應繪製並查閱哪一類圖說？',
        steps: [
          '建築平面圖主要表達空間隔間與門窗位置。',
          '鋼筋配置屬於結構施工細部，必須繪製「結構配筋詳圖 (Structural Reinforcement Detail)」或「斷面施工詳圖」。'
        ],
        answer: '結構配筋詳圖（或梁柱剖面施工詳圖）',
        difficulty: '易'
      },
      ...checks('製圖基本觀念', '圖名、圖號、比例與版次可追溯', '圖紙尺寸用 mm、比例為無因次')
    ]
  },
  {
    slug: 'civil-architectural-drawings',
    title: '12. 土木與建築製圖整合判讀',
    desc: '把基地、平面、立面、剖面、結構與施工詳圖串成同一套圖說的交叉查核流程。',
    status: 'done',
    gradeLevel: 10,
    examHitRate: 4,
    step0Prerequisites: [
      '建築圖說索引符號系統（剖面符號、詳圖索引、門窗編號）',
      '圖面高程與建築完成面 (FL / 1FL / GL) 標註原則'
    ],
    fatalTraps: [
      {
        wrongThinking: '現場施工發現圖面尺寸標註模糊或矛盾時，直接用比例尺在圖紙上量測長度施作。',
        correctThinking: '工程圖上「標註尺寸優先於比例量測 (Figures Prevail Over Scale)」，若標註矛盾必須立即提送圖說疑義 (RFI)，嚴禁自行量圖施工。',
        trapDescription: '圖紙印製可能產生縮放變形，量圖施工是工安與品質重大違規。'
      },
      {
        wrongThinking: '建築圖與結構圖梁柱尺寸不符時，一律以建築圖為準。',
        correctThinking: '結構安全以結構圖 (S圖) 為準，空間裝修與門窗以建築圖 (A圖) 為準；二者尺寸衝突應在放樣前辦理圖說會審 (Coordination Meeting) 澄清。',
        trapDescription: '忽視結構承重構件規範，導致構件斷面或配筋不足。'
      }
    ],
    eliteMentalModels: [
      {
        technique: '四圖交會閉合查核法 (Plan-Elevation-Section-Detail Cross-Check)',
        explanation: '讀圖時建立「平面定水平 (X-Y) → 立面定高度 (Z) → 剖面定構造層次 → 詳圖定接頭工法」之四重驗證迴圈，確保同一構件在四張圖中尺寸完全閉合一致。'
      }
    ],
    illustrations: ['context.webp', 'cross-reference-workflow.webp', 'architectural-structural.webp', 'step-by-step.webp'],
    covered_question_ids: [],
    concepts: [
      {
        heading: '圖說之間如何互證與閉合檢核',
        body: '平面圖確認水平位置，立面圖確認外觀與高度，剖面圖確認垂直構造，詳圖放大接合做法；同一構件的編號、尺寸與高程必須一致。\n\n**🔄 跨科連結：** 這些圖說上的尺寸與高程，必須依賴《測量實習》的放樣技術才能在工地現場準確落實，測量與製圖是工程的一體兩面。',
        table: {
          headers: ['工程圖說種類', '圖面代號與核心內容', '空間維度與查核重點', '跨圖衝突處理準則 (SOP)'],
          rows: [
            ['建築圖 (Architectural)', 'A 圖 (A1 平面, A2 立面, A3 剖面, A4 詳圖)', '水平 X-Y 隔間、門窗編號、垂直 Z 淨高、裝修材', '空間機能與法規依 A 圖；文字標註優先於量圖'],
            ['結構圖 (Structural)', 'S 圖 (S1 基礎, S2 梁柱配筋, S3 版牆)', '柱梁斷面尺寸、鋼筋型號/間距/搭接長度/保護層', '結構安全與承重依 S 圖；與 A 圖衝突提送 RFI'],
            ['機電設備圖 (MEP)', 'M (空調風管), E (強弱電), P (給排水), F (消防)', '管線走向、坡度、預留穿梁套管 (SEM/CSD 套繪)', '重力排水管優先，冷熱給水與電纜橋架避讓繞行'],
            ['圖說疑義處理 (RFI)', 'Request for Information', '工程界面衝突、尺寸矛盾、索引遺漏時填單核覆', '嚴禁自行量圖施工，取得建築師核可書面方可作業']
          ]
        }
      },
      {
        heading: '建築圖 (A) 與結構圖 (S) 的判讀分工與衝突協調',
        body: '建築圖 (Architectural Drawings, A) 著重空間機能、室內淨高、門窗編號、防水裝修與法規檢討；結構圖 (Structural Drawings, S) 著重柱梁版牆、配筋直徑、搭接長度與基礎承載力。判讀時先用軸線 (Grid Line) 與樓層高程定位，再逐一比對構件編號與斷面尺寸。'
      },
      {
        heading: '施工圖查核順序與圖說疑義處理程序 (RFI SOP)',
        body: '標準查圖順序：先讀圖名、比例、指北針與最新版次，再查軸線網及高程基準，接著追索剖面索引符號與詳圖索引編號，最後檢查尺寸鏈閉合。若發現跨圖衝突，應填寫「圖說疑義澄清單 (Request for Information, RFI)」呈送建築師及監造單位核覆，不可逕行施工。'
      }
    ],
    worked_examples: [
      {
        question: '【圖說判讀示範題】在二樓建築平面圖中標註一樘門編號為「D03」，但在門窗圖表中查無 D03 之尺寸與材質規格，工地工程師正確的標準處理作業程序 (SOP) 為何？',
        steps: [
          '步驟 1：辨識問題屬性。此情況屬於圖說索引與圖表不一致之「圖說矛盾（跨圖衝突）」。 ｜為什麼：平面標註與附表缺乏連動。',
          '步驟 2：排除錯誤做法。⚠️ 統測常見陷阱：嚴禁使用比例尺在平面圖上自行量測門寬施工！ ｜為什麼：圖紙伸縮與非標準尺寸可能導致防火門無法安裝。',
          '步驟 3：查核版本。先確認該平面圖與門窗表是否皆為「最新核定施工版次 (Latest Revision)」並檢查是否有修訂雲線。 ｜為什麼：避免因拿錯舊版圖說造成誤判。',
          '步驟 4：正式提送 RFI。填寫圖說疑義單 (RFI) 提交設計建築師事務所補充或更正門窗圖表，並取得書面回覆後方得訂製安裝。 ｜為什麼：確保工程責任界面釐清與材料驗收合規。'
        ],
        answer: '先確認所持圖面是否為最新核定版次；若確認衝突，應開立圖說疑義單 (RFI) 提請設計建築師釐清，嚴禁自行以比例尺量圖施作。',
        difficulty: '中等',
        hints: ['圖說不符時切勿自行猜測', '工程圖有標準的 RFI 疑義處理程序'],
        commonMistake: '誤以為可以用比例尺直接在平面圖上量出寬度就自行下訂製作。',
        eliteShortcut: '工程守則：文字優先於標註，標註優先於量圖；發現衝突，立即 RFI！'
      }
    ],
    practices: [
      {
        question: '要確認樓梯間之垂直淨高 (Clear Height) 是否符合建築技術規則（不得小於 2.1 公尺），至少應交叉檢查哪些工程圖說？',
        steps: [
          '平面圖確認樓梯踏步位置、級數與平台深度。',
          '建築剖面圖與樓梯剖面詳圖確認梯段垂直級高、斜板厚度及上方樓版樑底至踏面之垂直淨空高度。'
        ],
        answer: '樓梯平面圖、建築剖面圖及樓梯構造詳圖',
        difficulty: '中等'
      },
      {
        question: '基地放樣時，若基地地形圖標高 +0.00 與建築剖面圖標註之一樓完成面標高 (1FL) 不一致，第一步處置為何？',
        steps: [
          '先核對兩張圖紙之「圖號、版次、修訂日期與高程基準系統 (如 TWVD 2001 還是相對假定高程)」。',
          '若仍有疑義，應在放樣前提出 RFI 請建築師與測量技師澄清確認。'
        ],
        answer: '先進行圖面版次與高程基準系統核對，確認最新版次後再依序澄清處理。',
        difficulty: '進階'
      },
      ...checks('土木與建築製圖整合判讀', '平面、立面、剖面與詳圖的索引及版次一致', '圖面長度依標註用 mm 或 cm、高程用 m')
    ]
  }
];
