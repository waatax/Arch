import { PeriodicExamPlan } from './types';

export const g10AndG12ExamPlans: PeriodicExamPlan[] = [
  // =========================================================================
  // 【高一力學】高一上學期 第一次段考 (G10-S1-M1)
  // =========================================================================
  {
    id: 'g10-mechanics-s1-m1',
    grade: 10,
    semester: 's1',
    semesterTitle: '高一上學期',
    period: 'midterm-1',
    periodName: '第一次段考（期中考一）',
    weekRange: '第 6~7 週',
    subjectSlug: 'mechanics',
    subjectName: '基礎工程力學',
    category: '專業科目（一）',
    targetSchool: '全國高工土木建築群指標對照',
    examScope: '第一章 緒論與力之度量、第二章 平面力系之合成與分解（匯交力系平衡條件 ΣFx=0, ΣFy=0）',
    schoolContextNotes: '高一工程力學第一場大考。著重自由體圖 (FBD) 繪製、拉密定理 (Lami\'s Theorem)、直角三角形力分解與共點力系平衡，計算題佔比 50%。',
    scoreWeight: '佔學期學業成績 20%',
    handoutSummary: '力學之始在於力的向量性；拉密定理「P/sinα = Q/sinβ = R/sinγ」是三共點力平衡之速算神器；切記受力分析第一步必先畫出純淨的自由體圖 (FBD)。',
    knowledgePoints: [
      {
        id: 'mec-g10-s1-m1-01',
        title: '共點力系平衡條件與拉密定理 (Lami\'s Theorem)',
        curriculumCode: '115-專一-力學-01',
        importance: 5,
        textbookChapter: '全華/科友 基礎工程力學 第二章 平面力系平衡',
        summary: '平面共點力系（匯交力系）平衡充要條件：合力向量 R = 0，即代數和 ΣFx = 0 且 ΣFy = 0。若剛體受三力作用而維持靜止平衡，則此三力之作用線必共點或互相平行。拉密定理（適用三力共點平衡）：各力之大小與其餘兩力所夾角之正弦值成正比，即 P / sin(α) = Q / sin(β) = R / sin(γ)。',
        intuitiveAnalogy: '想像三隻拔河隊伍在圓形廣場拉著繩圈中央的鐵環，鐵環紋絲不動，說明三個人的拉力在向量上完全抵消，圍成一個首尾相連的封閉三角形！',
        keyFormulaOrRule: 'ΣFx = 0, ΣFy = 0；拉密定理：P/sinα = Q/sinβ = R/sinγ。',
        cramTips: [
          '夾角是兩向量「背對背背離」所張開的角度！千萬別量成內角。',
          '三力平衡三角形必定「首尾相接封閉」。',
          '30°-60°-90° 與 45°-45°-90° 特殊三角形邊長比是力分解的秒殺鑰匙！',
        ],
        trapWarning: '拉密定理「僅能用於三力共點平衡」，若超過三力或力不共點，絕對不可直接套用拉密定理！',
        junyiMasterySkill: '三力共點平衡與拉密定理速算技巧',
      },
    ],
    workedExamples: [
      {
        id: 'ex-mec-g10-s1-m1-01',
        title: '懸掛滑輪與繩索張力直角平衡計算',
        targetConcept: '拉密定理與直角三角形力分解',
        difficulty: '段考常考',
        questionStem: '一光滑固定滑輪懸掛質量 W = 120 kgf 之重物，以兩條輕繩 AB 與 AC 繫於天花板。已知繩 AB 與水平夾角為 30°，繩 AC 與水平夾角為 60°，求繩 AB 與繩 AC 之拉力 TAB 及 TAC。',
        beginnerThinking: '觀察兩條繩索之水平夾角：30° + 60° = 90°，因此兩繩互相垂直！這意味著兩繩拉力與重力 W 恰好構成一個直角三角形，可用三角函數迅速求得。',
        stepByStepSolution: [
          {
            stepNo: 1,
            title: '繪製節點 A 之自由體圖 (FBD)',
            content: '隔離受力節點 A，其受到向下之重力 W = 120 kgf，朝左上方與水平夾 30° 之張力 TAB，以及朝右上方與水平夾 60° 之張力 TAC。',
          },
          {
            stepNo: 2,
            title: '列出直角三角形或共點力平衡方程式',
            content: '水平平衡：ΣFx = TAC·cos(60°) - TAB·cos(30°) = 0 ➜ TAC·(1/2) = TAB·(√3/2) ➜ TAC = √3 TAB。垂直平衡：ΣFy = TAB·sin(30°) + TAC·sin(60°) - 120 = 0 ➜ TAB·(1/2) + (√3 TAB)·(√3/2) = 120 ➜ 2 TAB = 120。',
          },
          {
            stepNo: 3,
            title: '求解繩索張力',
            content: '解得 TAB = 60 kgf，進而代入得 TAC = 60√3 ≈ 103.92 kgf。',
          },
        ],
        examinerTrapWarning: '切勿將繩索與鉛直線的夾角誤認為與水平線的夾角，導致正弦與餘弦函數搞混！',
        quickMnemonic: '互垂雙繩吊重物，直角對角正餘弦，30度角對一半。',
        finalAnswer: 'TAB = 60 kgf，TAC = 60√3 kgf (約 103.92 kgf)',
      },
    ],
    cramFormulaCards: [
      {
        title: '拉密定理卡',
        formula: 'P / sin(α) = Q / sin(β) = R / sin(γ)',
        notes: 'α 為 Q 與 R 之夾角，β 為 P 與 R 夾角，γ 為 P 與 Q 夾角。',
        memoryMnemonic: '三力平衡正弦比，對面夾角正弦除。',
      },
    ],
    crossReferencedQuestions: [
      {
        id: 'q-mec-g10-s1-m1-taichung',
        sourceExam: '台中高工 112 學年度高一上工程力學第一次段考 第 10 題',
        questionStem: '一重物 W = 100 kgf 以兩輕繩吊掛於天花板，兩繩與水平天花板之夾角分別為 30° 與 60°，試求兩繩之張力分別為何？',
        options: {
          A: '50 kgf, 50√3 kgf',
          B: '50√3 kgf, 50 kgf',
          C: '100 kgf, 50 kgf',
          D: '50 kgf, 50 kgf',
        },
        answer: 'A',
        detailedExplanation: '兩繩夾角 = 180° - 30° - 60° = 90°（直角三角形）。利用拉密定理或力平衡分解：繩一水平分力 T1 cos30° = T2 cos60° ➜ T1 (√3/2) = T2 (1/2) ➜ T2 = √3 T1。垂直分力 T1 sin30° + T2 sin60° = 100 ➜ T1 (1/2) + (√3 T1)(√3/2) = 100 ➜ 2 T1 = 100 ➜ T1 = 50 kgf，T2 = 50√3 kgf。故選 A。',
        relatedKnowledgePointId: 'mec-g10-s1-m1-01',
        examTrickAnalysis: '30-60-90 特殊角標準力平衡，考查三角函數分解與拉密定理應用。',
      },
    ],
    preExamChecklist: [
      '我能正確繪製去除支承後的物體自由體圖 (FBD)。',
      '我熟記拉密定理公式並知道僅適用於三共點力平衡。',
      '我能靈活運用 30°-60°-90° 特殊邊長比進行速算。',
    ],
  },

  // =========================================================================
  // 【高一力學】高一上學期 第二次段考 (G10-S1-M2)
  // =========================================================================
  {
    id: 'g10-mechanics-s1-m2',
    grade: 10,
    semester: 's1',
    semesterTitle: '高一上學期',
    period: 'midterm-2',
    periodName: '第二次段考（期中考二）',
    weekRange: '第 12~13 週',
    subjectSlug: 'mechanics',
    subjectName: '基礎工程力學',
    category: '專業科目（一）',
    targetSchool: '全國高工土木建築群指標對照',
    examScope: '第三章 力矩與力偶、第四章 平面非共點力系平衡（三獨立平衡方程式 ΣFx=0, ΣFy=0, ΣMo=0、伐里農定理）',
    schoolContextNotes: '高一力學進入轉動與力偶分析核心。段考著重取力矩點之選擇（消除最多未知數）、伐里農力矩定理拆解斜向力、力偶之自由向量特性與剛架支承反力計算。',
    scoreWeight: '佔學期學業成績 20%',
    handoutSummary: '力矩 Mo = F × d（垂直距離）；伐里農定理「合力之矩等於分力之矩的代數和」；取矩點選在「未知反力交點」可一口氣秒殺單一未知數！',
    knowledgePoints: [
      {
        id: 'mec-g10-s1-m2-01',
        title: '力矩定義、力偶性質與伐里農力矩定理 (Varignon\'s Theorem)',
        curriculumCode: '115-專一-力學-02',
        importance: 5,
        textbookChapter: '全華/科友 基礎工程力學 第三章 力矩與力偶',
        summary: '力矩 Mo = F × d，其中 d 為轉動中心至力作用線之「垂直距離 (臂長)」。右手定則：逆時鐘為正，順時鐘為負。伐里農定理：平面力系中各力對於任一點之矩的代數和，等於此力系之合力對該點之矩。力偶 (Couple)：大小相等、方向相反、作用線平行且不共線之二力；力偶矩 M = F × d 是一自由向量 (Free Vector)，其對平面內任何一點之矩均相等，與轉動中心位置無關。',
        intuitiveAnalogy: '就像開門，在門把手處用力推最輕鬆（d 大），在門鉸鏈處推費盡力氣門也動不了（d=0）；轉動方向盤時雙手一推一拉就是最純粹的力偶！',
        keyFormulaOrRule: 'Mo = F · d；伐里農定理：Mo(R) = Σ[Mo(F)]；平面非共點力系平衡三式：ΣFx = 0, ΣFy = 0, ΣMo = 0。',
        cramTips: [
          '斜向力不要直接算傾斜垂直臂，先用伐里農定理分解成水平與垂直分力，分別乘上對應的正交坐標距！',
          '力偶在平面內可任意平移，甚至改變大小與臂長（乘積保持不變），力學效應完全相同！',
        ],
        trapWarning: '力偶不能用單一外力來平衡，必須由另一個大小相等方向相反的力偶來抵消！',
        junyiMasterySkill: '伐里農分力取矩法與剛架支承反力解算',
      },
    ],
    workedExamples: [
      {
        id: 'ex-mec-g10-s1-m2-01',
        title: '簡支梁受斜向載重與力偶之支承反力解算',
        targetConcept: '伐里農定理與平面非共點力系平衡三式',
        difficulty: '段考常考',
        questionStem: '一跨度 L = 6 m 之簡支梁 AB，A 端為鉸支承 (Pin)，B 端為滾支承 (Roller)。距 A 端 2 m 處受一斜向下 50 kN 外力（與水平呈 37° 角，cos37°=0.8, sin37°=0.6），並在梁中央 3 m 處受一順時針 20 kN·m 之集中力偶。試求 A、B 兩端之支承反力。',
        beginnerThinking: 'A 端是鉸支承有 Ax, Ay 兩個反力；B 端是滾支承只有垂直反力 By。先對 A 點取矩（ΣMA = 0），Ax 與 Ay 的力臂都是 0，可以直接求出 By！',
        stepByStepSolution: [
          {
            stepNo: 1,
            title: '將斜向力正交分解',
            content: 'Fx = 50 × cos(37°) = 40 kN (向右)；Fy = 50 × sin(37°) = 30 kN (向下)。',
          },
          {
            stepNo: 2,
            title: '對 A 點取力矩求 B 點垂直反力 By (設定逆時針為正)',
            content: 'ΣMA = By × 6 - Fy × 2 - 20 (順時針力偶) = 0 ➜ 6 By - (30 × 2) - 20 = 0 ➜ 6 By - 80 = 0 ➜ By = 80 / 6 = 13.33 kN (向上)。',
          },
          {
            stepNo: 3,
            title: '利用垂直與水平平衡求解 A 端反力',
            content: '垂直平衡：ΣFy = Ay + By - Fy = 0 ➜ Ay + 13.33 - 30 = 0 ➜ Ay = 16.67 kN (向上)。水平平衡：ΣFx = Ax + Fx = 0 ➜ Ax + 40 = 0 ➜ Ax = -40 kN (方向向左)。',
          },
        ],
        examinerTrapWarning: '集中力偶矩 20 kN·m 已經是力矩，直接代入取矩方程式即可，千萬不能再乘上距離 3 m！',
        quickMnemonic: '鉸滾二反力，取矩消鉸求滾點，力偶不乘距直接加減。',
        finalAnswer: 'Ax = 40 kN (向左)，Ay = 16.67 kN (向上)，By = 13.33 kN (向上)',
      },
    ],
    cramFormulaCards: [
      {
        title: '伐里農定理與力偶卡',
        formula: 'Mo = Fx · y ± Fy · x | 力偶 M = F · d (自由向量)',
        unit: 'N·m 或 kN·m',
        notes: '分力分解取矩，逆正順負，力偶全場等效。',
        memoryMnemonic: '分力取矩伐里農，力偶轉移任意動。',
      },
    ],
    crossReferencedQuestions: [
      {
        id: 'q-mec-g10-s1-m2-taichung',
        sourceExam: '台中高工 112 學年度高一上工程力學第二次段考 第 8 題',
        questionStem: '一平面上有一對力偶，大小各為 100 N，平行作用線相距 0.5 m。若欲以此力偶平衡，可採用下列何種方式？',
        options: {
          A: '在作用線中點施加一 50 N 之集中力',
          B: '在平面任意處施加一轉矩為 50 N·m 且轉向相反之力偶',
          C: '在作用線上施加一 100 N 反向力',
          D: '施加兩共點力使合力為零',
        },
        answer: 'B',
        detailedExplanation: '力偶為純轉動效應，合力為零但合力矩不為零。原力偶矩 M = 100 N × 0.5 m = 50 N·m。依剛體平衡原理，力偶必須且僅能由另一個大小相等 (50 N·m)、方向相反之力偶完全平衡，且力偶為自由向量，可在平面任意位置施加。選 B。',
        relatedKnowledgePointId: 'mec-g10-s1-m2-01',
        examTrickAnalysis: '考查力偶只能由力偶平衡的基本觀念，常有考生誤選施加單一反向力。',
      },
    ],
    preExamChecklist: [
      '我能在計算斜向力矩時熟練運用伐里農定理分解為 Fx·y 與 Fy·x。',
      '我牢記集中力偶在計算力矩方程式時「絕不可重複乘上距離」。',
      '我能熟練選取支承鉸點取矩以秒殺另一端滾支承反力。',
    ],
  },

  // =========================================================================
  // 【高一力學】高一上學期 期末考 (G10-S1-Final)
  // =========================================================================
  {
    id: 'g10-mechanics-s1-final',
    grade: 10,
    semester: 's1',
    semesterTitle: '高一上學期',
    period: 'final',
    periodName: '期末考',
    weekRange: '第 20~21 週',
    subjectSlug: 'mechanics',
    subjectName: '基礎工程力學',
    category: '專業科目（一）',
    targetSchool: '全國高工土木建築群指標對照',
    examScope: '第五章 重心、形心與線形力系、第六章 摩擦力（最大靜摩擦力 fs=μs·N、摩擦角 φs、斜面自鎖與傾覆條件）',
    schoolContextNotes: '高一上學期壓軸總結。組合幾何斷面形心公式 (x̄ = ΣAx/ΣA, ȳ = ΣAy/ΣA)、挖孔負面積技巧，以及物體在粗糙面滑動 vs 傾覆臨界判定是必考大題。',
    scoreWeight: '佔學期學業成績 30%',
    handoutSummary: '形心是幾何面積的加權平均；挖空孔洞直接當作「負面積」；摩擦極限 fs = μs·N；斜面滑動條件 tanθ ≥ tanφs = μs。',
    knowledgePoints: [
      {
        id: 'mec-g10-s1-final-01',
        title: '組合斷面形心公式與最大靜摩擦力極限平衡',
        curriculumCode: '115-專一-力學-03',
        importance: 5,
        textbookChapter: '全華/科友 基礎工程力學 第五章 重心與形心、第六章 摩擦',
        summary: '組合截面形心坐標公式：x̄ = Σ(Ai · xi) / ΣAi，ȳ = Σ(Ai · yi) / ΣAi。若有挖空或槽孔，則該孔洞之面積以「負面積 (-A)」代入。摩擦力特性：靜摩擦力 f ≤ fs = μs · N（最大靜摩擦力）。摩擦角 φs 滿足 tan(φs) = μs。在斜面上之物體，當斜面傾角 θ 等於摩擦角 φs 時為即將下滑之極限狀態；若 θ < φs，物體自鎖不下滑。物體在水平面受推力時，臨界滑動條件 P = fs = μs N；臨界傾覆條件為合力正向反力 N 移至支承面最邊緣點 (ΣMcorner = 0)。',
        intuitiveAnalogy: '形心就像用指尖頂住一塊薄木板讓它完美水平平衡的那一點；而摩擦自鎖就像把手機放在斜木板上，板子慢慢抬高，達到某個角度前手機完全不滑落！',
        keyFormulaOrRule: '形心：ȳ = Σ(Ai·yi)/ΣAi；最大靜摩擦力：fs = μs · N；斜面自鎖臨界：tanθ = μs。',
        cramTips: [
          'T 型斷面、L 型角鋼形心必考，先切成矩形塊建立 (A, y) 算表！',
          '空心圓管或開孔矩形，挖掉的部分用「減法」處理，分母也是總面積減去挖孔面積！',
          '題目問「物體開始滑動還是翻倒」，先分別算出臨界滑動推力 Pslide 與臨界傾覆推力 Ptip，取「較小者」為實際發生之破壞模式！',
        ],
        trapWarning: '正向力 N 不一定等於物體重力 W！若推力有傾斜向上或向下的分量，N 必須由垂直平衡 ΣFy = 0 嚴密解出！',
        junyiMasterySkill: '組合截面形心速算法與滑動傾覆雙臨界判定',
      },
    ],
    workedExamples: [
      {
        id: 'ex-mec-g10-s1-final-01',
        title: '不對稱 T 型梁幾何截面形心計算',
        targetConcept: '組合圖形面積加權形心公式',
        difficulty: '段考常考',
        questionStem: '一鋼筋混凝土 T 型截面，上翼緣板寬度 b = 60 cm、厚度 t = 10 cm；腹板寬度 bw = 20 cm、總梁深 H = 50 cm（即腹板高度為 40 cm）。試求該截面自底緣算起之形心高度 ȳ。',
        beginnerThinking: 'T 型截面由兩個矩形組成：上方翼緣板與下方腹板。先設定底面為基準軸 (y=0)，分別求出兩塊矩形的面積及其各自形心高度，再代入形心加權公式。',
        stepByStepSolution: [
          {
            stepNo: 1,
            title: '計算各分塊面積',
            content: '分塊 1 (下方腹板)：寬 20 cm、高 40 cm ➜ A1 = 20 × 40 = 800 cm²。分塊 2 (上方翼緣)：寬 60 cm、高 10 cm ➜ A2 = 60 × 10 = 600 cm²。總截面面積 ΣA = 800 + 600 = 1400 cm²。',
          },
          {
            stepNo: 2,
            title: '確定各分塊形心至梁底之距離 y',
            content: '腹板形心 y1 = 40 / 2 = 20 cm。翼緣形心 y2 = 40 + (10 / 2) = 45 cm。',
          },
          {
            stepNo: 3,
            title: '代入形心加權平均公式',
            content: 'ȳ = (A1·y1 + A2·y2) / ΣA = (800 × 20 + 600 × 45) / 1400 = (16000 + 27000) / 1400 = 43000 / 1400 ≈ 30.71 cm。',
          },
        ],
        examinerTrapWarning: '上方翼緣板的形心高度千萬別直接寫 10/2 = 5 cm，必須加上底層腹板的 40 cm 高度！',
        quickMnemonic: '分塊求面積，各自量形心，乘積加總後除以總面積。',
        finalAnswer: 'ȳ = 430 / 14 ≈ 30.71 cm (自梁底起算)',
      },
    ],
    cramFormulaCards: [
      {
        title: '形心與摩擦極限卡',
        formula: 'ȳ = Σ(Ai·yi) / ΣAi | fs = μs · N | tan(φs) = μs',
        unit: '長度單位 cm 或 m',
        notes: '挖孔以負面積扣除；傾覆滑動取兩者推力小者。',
        memoryMnemonic: '形心加權除總面，挖孔負號莫忘填；摩擦正向乘係數，自鎖角切等摩擦。',
      },
    ],
    crossReferencedQuestions: [
      {
        id: 'q-mec-g10-s1-final-taichung',
        sourceExam: '台中高工 112 學年度高一上工程力學期末考 第 12 題',
        questionStem: '一重物重 200 N 置於水平粗糙地面，物體與地面間之靜摩擦係數 μs = 0.4。若施加一水平推力 P = 60 N，則地面作用於物體之實際摩擦力大小為何？',
        options: {
          A: '80 N',
          B: '60 N',
          C: '200 N',
          D: '0 N',
        },
        answer: 'B',
        detailedExplanation: '首先計算最大靜摩擦力 fs = μs · N = 0.4 × 200 = 80 N。因為外加推力 P = 60 N < 最大靜摩擦力 80 N，故物體維持靜止狀態。由水平力平衡 ΣFx = 0，靜摩擦力 f 剛好等於推力 P = 60 N。故選 B。',
        relatedKnowledgePointId: 'mec-g10-s1-final-01',
        examTrickAnalysis: '超高頻陷阱題！許多學生看到公式就直接乘出 80 N，忽略了未滑動時摩擦力等於外推力。',
      },
    ],
    preExamChecklist: [
      '我能熟練計算 T 型、槽型等組合圖形之形心高度。',
      '我懂得若開孔挖洞，面積與力矩均採用負號計算。',
      '我牢記靜摩擦力在未達最大極限前「大小永遠等於外加推力」。',
    ],
  },

  // =========================================================================
  // 【高一力學】高一下學期 第一次段考 (G10-S2-M1)
  // =========================================================================
  {
    id: 'g10-mechanics-s2-m1',
    grade: 10,
    semester: 's2',
    semesterTitle: '高一下學期',
    period: 'midterm-1',
    periodName: '第一次段考（期中考一）',
    weekRange: '第 6~7 週',
    subjectSlug: 'mechanics',
    subjectName: '基礎工程力學',
    category: '專業科目（一）',
    targetSchool: '全國高工土木建築群指標對照',
    examScope: '第七章 平面桁架分析（靜定桁架判定 m = 2j - 3、節點法、截面法剖面求內力、零力桿速判法則）',
    schoolContextNotes: '高一下學期力學第一大考。桁架是土木建築結構基本型式。考查節點法求全部桿件內力、截面法一刀切求特定桿件張拉/抗壓力，以及 10 秒內圈出零力桿的能力。',
    scoreWeight: '佔學期學業成績 20%',
    handoutSummary: '桁架無彎矩只有軸力（拉為正 T、壓為負 C）；零力桿秒殺兩鐵律；求特定桿件用「截面法 (剖面法)」一刀切，取矩消掉兩桿求第三桿！',
    knowledgePoints: [
      {
        id: 'mec-g10-s2-m1-01',
        title: '桁架靜定判定、節點法與截面法 (Method of Sections)',
        curriculumCode: '115-專一-力學-04',
        importance: 5,
        textbookChapter: '全華/科友 基礎工程力學 第七章 桁架分析',
        summary: '平面桁架靜定判定條件：m + r = 2j（其中 m 為桿件數，r 為外支承反力數，j 為節點數；簡支桁架 r=3 時，m = 2j - 3 為靜定）。理想桁架假設：桿件均為二力構件、摩擦鉸接、載重僅作用於節點上。桿件內力拉力 (Tension) 標記為正 (+)，箭頭背離節點；壓力 (Compression) 標記為負 (-)，箭頭指向節點。節點法：逐一隔離每個節點（每個節點有 ΣFx=0, ΣFy=0 兩式），適用求所有桿件內力。截面法：以一切面通過欲求桿件（截斷桿數不超過 3 根），隔離一側剛體，利用 ΣFx=0, ΣFy=0, ΣM=0 三式直接求出目標桿件內力。',
        intuitiveAnalogy: '桁架就像巴黎艾菲爾鐵塔或鋼構斜屋頂，由一根根鋼棒拼成的三角形骨架；三角形最穩固不會變形。截面法就像水果忍者一刀切開，只看切開的一半就能算出剖口各鋼棒的拉力與壓力！',
        keyFormulaOrRule: '靜定判別：m = 2j - 3；節點法：每個節點 ΣFx=0, ΣFy=0；截面法：ΣM = 0 優先求目標桿。',
        cramTips: [
          '求整座桁架所有桿件 ➜ 用「節點法」從最少未知數的支承節點開始推進。',
          '求跨中某 1~2 根特定桿件 ➜ 果斷用「截面法」，切開後對另外兩桿的作用線交點取矩，直接秒殺目標桿！',
          '桿件假定受拉（背離節點），若算出來為負值，即代表實際受壓！',
        ],
        trapWarning: '截面法一刀切開時，截斷的桿件數通常「不可超過 3 根」，否則無法僅憑 3 個獨立平衡方程式求解！',
        junyiMasterySkill: '截面法取矩解算與零力桿快速識別',
      },
    ],
    workedExamples: [
      {
        id: 'ex-mec-g10-s2-m1-01',
        title: '利用截面法求華倫桁架 (Warren Truss) 跨中桿件內力',
        targetConcept: '截面法剖面平衡與交點取矩',
        difficulty: '段考常考',
        questionStem: '一簡支華倫桁架跨度 12 m，下弦由 4 個 3 m 節點節間組成，架高 3 m。左端支承 A 向上反力為 40 kN，試求跨中上弦桿 CD 之內力。',
        beginnerThinking: '求上弦桿 CD，如果用節點法要從 A 點算到 B 再到 C，太耗時。直接垂直做一截面切過上弦桿 CD、斜腹桿以及下弦桿，隔離左半部，對下弦與斜桿交點取矩，即可直接求出 CD！',
        stepByStepSolution: [
          {
            stepNo: 1,
            title: '作截面 1-1 並隔離左側自由體',
            content: '切過桿件 CD、斜桿與下弦桿，隔離左側部分，切口處將三桿內力設為張力（拉出方向）。',
          },
          {
            stepNo: 2,
            title: '尋找其他兩斷桿作用線之交點 E',
            content: '斜腹桿與下弦桿交於下弦節點 E（距左端 A 為 4.5 m 處）。',
          },
          {
            stepNo: 3,
            title: '對 E 點取力矩 ΣME = 0',
            content: 'ΣME = (Ay × 4.5) + (FCD × 3) = 0 ➜ (40 × 4.5) + 3 FCD = 0 ➜ 180 + 3 FCD = 0 ➜ FCD = -60 kN。',
          },
        ],
        examinerTrapWarning: '負號代表受壓 (Compression)，寫答案時應明確標註 60 kN (壓) 或 -60 kN。',
        quickMnemonic: '一刀切過三桿件，兩桿交點取力矩，未知內力一式出。',
        finalAnswer: 'FCD = 60 kN (受壓, C)',
      },
    ],
    cramFormulaCards: [
      {
        title: '桁架分析速殺卡',
        formula: 'm = 2j - 3 (靜定標準) | 截面法: ΣM_交點 = 0 ➜ 直接求解',
        unit: 'kN 或 kgf',
        notes: '截面切過桿數 ≤ 3；背離節點為拉 (+)，指向節點為壓 (-)。',
        memoryMnemonic: '靜定兩倍節點減三，截面取矩切口穿；拉正壓負箭頭指，零力桿件先劃單。',
      },
    ],
    crossReferencedQuestions: [
      {
        id: 'q-mec-g10-s2-m1-taichung',
        sourceExam: '台中高工 112 學年度高一下工程力學第一次段考 第 15 題',
        questionStem: '一平面桁架具有 15 根桿件 (m=15) 與 9 個節點 (j=9)，且由兩個外反力支承（一鉸支承與一滾支承，r=3），此桁架之靜定狀態為何？',
        options: {
          A: '靜定桁架',
          B: '靜不定 1 度',
          C: '靜不定 2 度',
          D: '不穩定結構',
        },
        answer: 'A',
        detailedExplanation: '依據平面桁架靜定條件：m + r = 2j。左式 = 15 + 3 = 18；右式 = 2 × 9 = 18。兩式相等 (m + r = 2j)，且幾何排列無幾何可變性，故為靜定桁架。選 A。',
        relatedKnowledgePointId: 'mec-g10-s2-m1-01',
        examTrickAnalysis: '考查 m + r = 2j 的幾何靜定判定公式，送分題。',
      },
    ],
    preExamChecklist: [
      '我能熟練代入 m = 2j - 3 檢驗桁架是否為靜定。',
      '我能在複雜桁架中熟練運用截面法一刀切取矩解出未知桿件。',
      '我能正確標註拉力 (T) 與壓力 (C) 之符號與實體受力意涵。',
    ],
  },

  // =========================================================================
  // 【高一力學】高一下學期 第二次段考 (G10-S2-M2)
  // =========================================================================
  {
    id: 'g10-mechanics-s2-m2',
    grade: 10,
    semester: 's2',
    semesterTitle: '高一下學期',
    period: 'midterm-2',
    periodName: '第二次段考（期中考二）',
    weekRange: '第 13~14 週',
    subjectSlug: 'mechanics',
    subjectName: '基礎工程力學',
    category: '專業科目（一）',
    targetSchool: '全國高工土木建築群指標對照',
    examScope: '第八章 梁之剪力與彎矩（載重、剪力與彎矩之微分幾何關係 dV/dx=-w, dM/dx=V、剪力圖 (SFD) 與彎矩圖 (BMD) 繪製、最大彎矩 Mmax 發生於 V=0 處）',
    schoolContextNotes: '高一力學難度最高、統測每年必出 2~3 題之絕對核心。掌握「剪力圖面積即為彎矩變化量 (ΔM = ∫V dx)」與「剪力為零處彎矩出現極值」兩大定理。',
    scoreWeight: '佔學期學業成績 20%',
    handoutSummary: '載重向下一階變剪力斜線，剪力圖面積累積成彎矩！剪力為零 (V=0) 點即是最大彎矩 (Mmax) 誕生之處！',
    knowledgePoints: [
      {
        id: 'mec-g10-s2-m2-01',
        title: '梁之剪力彎矩微分關係與 SFD/BMD 幾何繪製法則',
        curriculumCode: '115-專一-力學-06',
        importance: 5,
        textbookChapter: '全華/科友 基礎工程力學 第八章 梁之剪力與彎矩',
        summary: '梁內力符號規定：正剪力 V 使微單元順時鐘剪切（左上右下）；正彎矩 M 使梁下凹向上彎曲（微笑曲線，下側受拉上側受壓）。三者微分關係：dV/dx = -w(x)（載重集度為剪力曲線斜率之負值）；dM/dx = V(x)（剪力大小為彎矩曲線之斜率）。面積積分定理：剪力圖兩斷面間之代數面積，等於該兩斷面間彎矩之變化量 (M2 - M1 = ∫ V dx)。極值鐵律：當剪力 V = 0 或剪力通過零點變號處，彎矩 M 出現極大值或極小值。集中載重處剪力產生突變（垂直跳躍）；集中力偶處彎矩產生突變。',
        intuitiveAnalogy: '想像一塊跳水板，人站在最前端下壓，板子往下彎曲像個大微笑，這就是正彎矩；剪力圖就像記錄每一步受力推移的坡度，剪力圖的「底下面積」就是彎矩累積長大的高度！',
        keyFormulaOrRule: 'dM/dx = V；ΔM = ∫ V dx；V=0 ➜ M 出現極值 (Mmax)；均佈載重 w 下簡支梁 Mmax = w·L² / 8。',
        cramTips: [
          '均佈載重 w 下簡支梁中央最大彎矩秒殺公式：Mmax = w·L² / 8！',
          '集中載重 P 置於中央簡支梁最大彎矩公式：Mmax = P·L / 4！',
          '畫 BMD 時，只要把 SFD 各段的幾何面積（矩形、三角形、梯形）算出來累加即可，完全不必列繁複的 x 函數！',
        ],
        trapWarning: '集中力偶在剪力圖 (SFD) 上「完全沒有任何反應」，只在彎矩圖 (BMD) 上產生垂直垂直跳躍！順時鐘力偶跳向上還是向下？依統測 CNS 規定，順時針力偶使彎矩向下垂直跳躍！',
        junyiMasterySkill: '剪力圖面積積分法繪製彎矩圖與極值速求',
      },
    ],
    workedExamples: [
      {
        id: 'ex-mec-g10-s2-m2-01',
        title: '簡支梁受均佈載重之最大彎矩計算 (面積法 vs 公式法)',
        targetConcept: '剪力彎矩圖幾何面積法與極值位置',
        difficulty: '段考常考',
        questionStem: '一跨度 L = 6 m 之簡支梁，全跨承受均佈載重 w = 4 kN/m。試繪出剪力圖與彎矩圖，並求全梁之最大彎矩 Mmax。',
        beginnerThinking: '對稱梁兩端反力各分一半：RA = RB = wL / 2 = 4 × 6 / 2 = 12 kN。剪力圖從 +12 斜線下降至 -12，中間通過 V=0 點。以面積法求中央彎矩，即為左半邊三角形面積！',
        stepByStepSolution: [
          {
            stepNo: 1,
            title: '計算支承反力',
            content: '對稱載重 ➜ RA = RB = 4 kN/m × 6 m / 2 = 12 kN (向上)。',
          },
          {
            stepNo: 2,
            title: '確定剪力零點位置',
            content: '剪力由 x=0 處之 +12 kN 以斜率 -4 下降，V(x) = 12 - 4x = 0 ➜ x = 3 m 處剪力恰好為零。',
          },
          {
            stepNo: 3,
            title: '利用剪力圖面積求解最大彎矩 Mmax',
            content: '左側 0~3 m 剪力圖為直角三角形，底 = 3 m，高 = 12 kN。面積 = (3 × 12) / 2 = 18 kN·m。驗算公式：wL²/8 = 4 × 6² / 8 = 144 / 8 = 18 kN·m。完全吻合！',
          },
        ],
        examinerTrapWarning: '若是外伸梁或集中載重非對稱，剪力零點不一定在幾何中點，必須由幾何相似三角形精確找出零剪力點！',
        quickMnemonic: '八分之達令方 (wL²/8)，剪力零點彎矩狂，三角形面積直接算。',
        finalAnswer: '最大彎矩 Mmax = 18 kN·m (發生於跨中 x = 3 m 處)',
      },
    ],
    cramFormulaCards: [
      {
        title: '剪力彎矩秒殺卡',
        formula: '簡支梁均佈: Mmax = wL² / 8 | 簡支梁集中: Mmax = PL / 4 | dM/dx = V',
        unit: 'kN·m 或 N·mm',
        notes: 'V=0 處 M 出現最大值；BMD 面積累加法神速解題。',
        memoryMnemonic: '均佈八分達令方，集中四分培林棒；剪力歸零求極值，面積累積彎矩張。',
      },
    ],
    crossReferencedQuestions: [
      {
        id: 'q-mec-g10-s2-m2-taichung',
        sourceExam: '台中高工 112 學年度高一下工程力學第二次段考 第 18 題',
        questionStem: '一簡支梁長度 L 承受均勻分佈載重 w，下列關於該梁之敘述，何者正確？',
        options: {
          A: '最大剪力發生於梁跨度中央',
          B: '最大彎矩發生於兩端支承處',
          C: '中央跨度處之剪力值為零，此處彎矩值達到最大',
          D: '彎矩圖為一斜直線',
        },
        answer: 'C',
        detailedExplanation: '均佈載重簡支梁中，兩端支承剪力最大 (V = ±wL/2)，跨中剪力為零 (V=0)。依據 dM/dx = V，剪力為零處彎矩斜率為零，彎矩達到全梁最大值 (Mmax = wL²/8)，且彎矩圖為二次拋物線。故選 C。',
        relatedKnowledgePointId: 'mec-g10-s2-m2-01',
        examTrickAnalysis: '力學觀念題，考查 V-M 圖的幾何特性與微分意義。',
      },
    ],
    preExamChecklist: [
      '我熟背均佈載重 Mmax = wL²/8 與中央集中載重 Mmax = PL/4 公式。',
      '我能熟練以剪力圖面積求出各段彎矩變化量。',
      '我知道集中力偶不影響 SFD，只在 BMD 造成數值突變。',
    ],
  },

  // =========================================================================
  // 【高一力學】高一下學期 期末考 (G10-S2-Final)
  // =========================================================================
  {
    id: 'g10-mechanics-s2-final',
    grade: 10,
    semester: 's2',
    semesterTitle: '高一下學期',
    period: 'final',
    periodName: '期末考',
    weekRange: '第 20~21 週',
    subjectSlug: 'mechanics',
    subjectName: '基礎工程力學',
    category: '專業科目（一）',
    targetSchool: '全國高工土木建築群指標對照',
    examScope: '第九章 截面之幾何特性（慣性矩／面積二次矩 Ix, Iy、極慣性矩 J、平行軸定理 Ix = Ixo + A·d²、迴轉半徑 k = √(I/A)）',
    schoolContextNotes: '高一力學年度收官之戰，直接對接高二梁應力 (σ = M·y / I)。矩形與圓形慣性矩公式熟練度、組合斷面移軸計算是決定段考 90 分以上的分水嶺。',
    scoreWeight: '佔學期學業成績 30%',
    handoutSummary: '矩形形心慣性矩 Ixo = b·h³ / 12，底邊慣性矩 I_base = b·h³ / 3；平行軸定理「永遠只能從形心軸向外移，移軸必定加 A·d²，越移越大」！',
    knowledgePoints: [
      {
        id: 'mec-g10-s2-final-01',
        title: '截面慣性矩公式、極慣性矩與平行軸定理 (Parallel Axis Theorem)',
        curriculumCode: '115-專一-力學-07',
        importance: 5,
        textbookChapter: '全華/科友 基礎工程力學 第九章 截面之幾何特性',
        summary: '面積二次矩（慣性矩）定義：Ix = ∫ y² dA，Iy = ∫ x² dA。常見斷面形心軸慣性矩：矩形 Ixo = b·h³ / 12（對底邊為 b·h³ / 3）；圓形 Io = π·d⁴ / 64。極慣性矩 J = Ix + Iy（對極點慣性矩等於對兩正交軸慣性矩之和；圓形 J = π·d⁴ / 32）。迴轉半徑 k = √(I / A)，代表將整個斷面面積濃縮至距軸 k 處所產生的等效慣性矩。平行軸定理：Ix = Ixo + A · d²，其中 Ixo 必須是通過「幾何形心 (Centroid)」之慣性矩，d 為兩平行軸之垂直間距。',
        intuitiveAnalogy: '拿同一把木直尺，立著放（h 大，bh³/12 極大）踩上去紋絲不動；躺平放（h 很薄）踩上去一下就凹陷！立起來抗彎剛度大幾十倍，靠的就是高度 h 的三次方！',
        keyFormulaOrRule: '矩形：Ixo = bh³/12；平行軸定理：Ix = Ixo + A·d²；極慣性矩：J = Ix + Iy；迴轉半徑：k = √(I/A)。',
        cramTips: [
          '「十二分之 bh 三方」是形心軸，「三分之 bh 三方」是對底邊軸，底邊是對形心的 4 倍大！',
          '平行軸定理「中繼站必須是形心軸」！如果要從非形心軸 A 移到非形心軸 B，必須先移回形心軸（扣除 Ad1²），再從形心軸移到 B（加上 Ad2²）！',
        ],
        trapWarning: '平行軸定理公式中是「加 A·d²」，慣性矩永遠越移越大！且基準軸一定要是形心軸，若拿底邊慣性矩直接再加 Ad² 就會大錯特錯！',
        junyiMasterySkill: '平行軸定理移軸計算與組合鋼梁慣性矩',
      },
    ],
    workedExamples: [
      {
        id: 'ex-mec-g10-s2-final-01',
        title: '工字型 (I-beam) 鋼梁斷面主慣性矩計算',
        targetConcept: '對稱組合截面慣性矩與外包減法',
        difficulty: '段考常考',
        questionStem: '一對稱工字型鋼截面，上下翼緣寬度 B = 20 cm、厚度 tf = 2 cm；腹板厚度 tw = 1 cm，全梁深 H = 30 cm。試求此斷面對於水平形心軸之慣性矩 Ix。',
        beginnerThinking: '工字型截面如果拆成三個矩形（上翼緣、腹板、下翼緣），上下翼緣都要用平行軸定理移軸，較為繁瑣。神速解法：用「大外包矩形」減去「左右兩塊挖空的空白矩形」，因為它們共用同一條水平形心軸，完全不需要移軸！',
        stepByStepSolution: [
          {
            stepNo: 1,
            title: '外包大矩形法建立模型',
            content: '大外包矩形：寬 B = 20 cm、總高 H = 30 cm。左右挖空兩塊矩形合計：寬度 = 20 - tw = 20 - 1 = 19 cm，高度 = 30 - 2(tf) = 30 - 4 = 26 cm。',
          },
          {
            stepNo: 2,
            title: '直接相減計算 Ix (同心軸無需平行軸定理)',
            content: 'Ix = (B·H³ / 12) - (b空·h空³ / 12) = (20 × 30³ / 12) - (19 × 26³ / 12)。',
          },
          {
            stepNo: 3,
            title: '完成數值運算',
            content: '大矩形 = 20 × 27000 / 12 = 45000 cm⁴。挖空部分 = 19 × 17576 / 12 = 333944 / 12 ≈ 27828.67 cm⁴。相減得 Ix = 45000 - 27828.67 = 17171.33 cm⁴。',
          },
        ],
        examinerTrapWarning: '減法速算法「僅限於對稱圖形且共用同一條形心軸」時成立！若是非對稱 T 型梁，各分塊形心軸不重合，則必須老實拆塊使用平行軸定理。',
        quickMnemonic: '工字對稱大減小，不用移軸算得快；非對稱梁乖乖拆，形心移軸加 Ad 方。',
        finalAnswer: 'Ix ≈ 17171.33 cm⁴',
      },
    ],
    cramFormulaCards: [
      {
        title: '慣性矩與平行軸卡',
        formula: '矩形形心: Ixo = bh³/12 | 底邊: I_base = bh³/3 | 平行軸: Ix = Ixo + A·d²',
        unit: 'cm⁴ 或 mm⁴',
        notes: '圓形 Io = πd⁴/64；極慣性矩 J = Ix + Iy；高度 h 永遠為立體方向。',
        memoryMnemonic: '十二分之 bh 方立，立面抗彎力量大；移軸必經形心點，加計 Ad 方不會差。',
      },
    ],
    crossReferencedQuestions: [
      {
        id: 'q-mec-g10-s2-final-taichung',
        sourceExam: '台中高工 112 學年度高一下工程力學期末考 第 20 題',
        questionStem: '一矩形斷面寬度 b = 10 cm、高度 h = 30 cm，若欲求其對於底邊之截面慣性矩，下列何者正確？',
        options: {
          A: '22,500 cm⁴',
          B: '90,000 cm⁴',
          C: '67,500 cm⁴',
          D: '11,250 cm⁴',
        },
        answer: 'B',
        detailedExplanation: '矩形對底邊之慣性矩公式為 I_base = b·h³ / 3。代入數值：I_base = (10 × 30³) / 3 = 10 × 27000 / 3 = 90,000 cm⁴。亦可用平行軸定理驗算：Ixo = bh³/12 = 22,500 cm⁴，d = 15 cm，A = 300 cm² ➜ Ix = 22500 + 300 × 15² = 22500 + 67500 = 90,000 cm⁴。故選 B。',
        relatedKnowledgePointId: 'mec-g10-s2-final-01',
        examTrickAnalysis: '考查底邊慣性矩與形心慣性矩之關係（底邊是形心的 4 倍）。',
      },
    ],
    preExamChecklist: [
      '我熟記矩形形心軸 (bh³/12) 與底邊 (bh³/3) 慣性矩公式。',
      '我熟記圓形形心慣性矩 (πd⁴/64) 與極慣性矩 (πd⁴/32)。',
      '我能靈活使用大矩形減小矩形之速算法計算對稱工字梁之慣性矩。',
    ],
  },

  // =========================================================================
  // 【高一製圖】高一上學期 第一次段考 (G10-S1-M1)
  // =========================================================================
  {
    id: 'g10-drafting-s1-m1',
    grade: 10,
    semester: 's1',
    semesterTitle: '高一上學期',
    period: 'midterm-1',
    periodName: '第一次段考（期中考一）',
    weekRange: '第 6~7 週',
    subjectSlug: 'drafting',
    subjectName: '製圖實習',
    category: '專業科目（二）',
    targetSchool: '全國高工土木建築群指標對照',
    examScope: '第一章 緒論與製圖用具、第二章 CNS 3 建築圖紙尺度規格與標準工程線型、字體比例',
    schoolContextNotes: '建築科入門第一場圖學筆試。考核 A0 至 A4 圖紙黃金比例 (1:√2)、比例尺讀法（1:100、1:300 等）、鉛筆硬度 (9H~9B)、CNS 各級線型粗細分配比。',
    scoreWeight: '佔學期學業成績 20%',
    handoutSummary: 'CNS 圖紙面積每折半長短互換，長邊對短邊比值永遠為 √2；線條粗細分配依 1 : 2 : 4 級距（細 0.18/0.25、中 0.35/0.5、粗 0.7/1.0 mm）。',
    knowledgePoints: [
      {
        id: 'dra-g10-s1-m1-01',
        title: 'CNS 3 圖紙尺度規格、鉛筆硬度與線型粗細規範',
        curriculumCode: '115-專二-製圖-01',
        importance: 5,
        textbookChapter: '全華/科友 製圖實習 第一章 製圖儀器、第二章 圖紙與線型',
        summary: 'CNS 3 建築製圖規範：圖紙標準 A 系列以 A0 面積為 1 平方公尺為基準，長寬比為 √2 : 1（841 mm × 1189 mm）。各級圖紙依序對摺裁切：A1(594×841)、A2(420×594)、A3(297×420)、A4(210×297)。鉛筆筆芯硬度：6B~4B 軟黑（素描）、3B~B 軟（徒手草圖）、HB/F 中等（一般書寫與尺寸標註）、H~2H 偏硬（工程製圖引線底圖）、3H~9H 極硬（精密刻線）。標準線型三級粗細比：粗線 (0.7~1.0mm) 作為輪廓外形線、地盤線；中線 (0.35~0.5mm) 作為虛線隱藏線；細線 (0.18~0.25mm) 作為尺寸線、剖面線、中心線。',
        intuitiveAnalogy: 'A 系列圖紙就像俄羅斯套娃，拿一張 A3 沿長邊對折切一刀，立刻生出兩張完全一模一樣比例的 A4，長寬比例永遠鎖死在 1.414 (√2) 不會變形！',
        keyFormulaOrRule: 'A0 面積 = 1 m² (841 × 1189 mm)；比例 1:√2；A(n) 對折即得 A(n+1)。',
        cramTips: [
          'A4 圖紙尺度「210 × 297 mm」是製圖科一輩子必背的密碼！',
          '鉛筆 H 越多越 Hard (硬且淺)，B 越多越 Black (軟且黑)！',
          '割面線是特例：兩端轉折處用「粗線」，中間段用「細長鏈線」。',
        ],
        trapWarning: 'A4 圖紙直放與橫放時標題欄位置不同：通常放置於圖面之右下角或下方！',
        junyiMasterySkill: 'CNS 圖學標準規格與比例尺換算',
      },
    ],
    workedExamples: [
      {
        id: 'ex-dra-g10-s1-m1-01',
        title: '建築平面圖縮尺與圖紙圖幅選用判定',
        targetConcept: '比例尺換算與 A 系列圖紙排版容量',
        difficulty: '段考常考',
        questionStem: '一棟別墅建築平面長 24 m、寬 16 m。若欲在圖紙上加上周圍各 50 mm 的邊界與標題欄空間，選用 1:100 比例尺繪製，試問最少需要幾號 (A 規格) 之圖紙方能容納？',
        beginnerThinking: '先算出 1:100 縮小後建築在圖紙上的實際毫米尺寸，再算上周邊邊界留白，最後比對 A 系列圖紙規格。',
        stepByStepSolution: [
          {
            stepNo: 1,
            title: '計算實體縮尺後在圖紙上的尺寸',
            content: '長度 = 24 m = 24000 mm ➜ 24000 / 100 = 240 mm。寬度 = 16 m = 16000 mm ➜ 16000 / 100 = 160 mm。',
          },
          {
            stepNo: 2,
            title: '計入四周預留邊界與標題欄',
            content: '長向需求 = 240 + (50 × 2) = 340 mm。寬向需求 = 160 + (50 × 2) = 260 mm。總需求圖幅為 340 mm × 260 mm。',
          },
          {
            stepNo: 3,
            title: '比對 A 系列圖紙尺度',
            content: 'A4: 210 × 297 mm (長邊 297 < 340，容納不下)。A3: 297 × 420 mm (420 > 340 且 297 > 260，完全可以容納)。故至少需採用 A3 圖紙。',
          },
        ],
        examinerTrapWarning: '切勿忘記長寬都要乘上 1:100，單位換算時 1 m = 1000 mm 絕不能算少一個零！',
        quickMnemonic: '公尺轉毫米除以比例尺，邊界留白加兩倍，圖幅比對挑大張。',
        finalAnswer: '至少需要 A3 圖紙 (297 mm × 420 mm)',
      },
    ],
    cramFormulaCards: [
      {
        title: '圖紙尺度與比例尺卡',
        formula: 'A0: 841×1189 | A1: 594×841 | A2: 420×594 | A3: 297×420 | A4: 210×297',
        unit: 'mm',
        notes: '面積比為 1:√2 幾何折半；圖上長度 = 實際長度 ÷ 比例尺分母。',
        memoryMnemonic: '二一零乘二九七是 A4，長邊折半進一階。',
      },
    ],
    crossReferencedQuestions: [
      {
        id: 'q-dra-g10-s1-m1-taichung',
        sourceExam: '台中高工 112 學年度高一上製圖實習第一次段考 第 5 題',
        questionStem: '依據 CNS 規範，標準 A2 圖紙之尺度規格為何？',
        options: {
          A: '297 mm × 420 mm',
          B: '420 mm × 594 mm',
          C: '594 mm × 841 mm',
          D: '841 mm × 1189 mm',
        },
        answer: 'B',
        detailedExplanation: '標準 A 系列規格中：A0 為 841×1189 mm，A1 為 594×841 mm，A2 為 420×594 mm，A3 為 297×420 mm，A4 為 210×297 mm。故 A2 規格為 420 mm × 594 mm。選 B。',
        relatedKnowledgePointId: 'dra-g10-s1-m1-01',
        examTrickAnalysis: '基礎法規題，段考必考送分題，倒背如流即可。',
      },
    ],
    preExamChecklist: [
      '我熟背 A0 到 A4 的五組尺寸數字 (210×297, 297×420, 420×594, 594×841, 841×1189)。',
      '我熟記線條粗細等級分配比 (粗線輪廓、中線虛線、細線尺寸剖面)。',
      '我清楚了解比例尺計算：圖上距離 = 實體距離 / 比例尺分母。',
    ],
  },

  // =========================================================================
  // 【高一製圖】高一上學期 第二次段考 (G10-S1-M2)
  // =========================================================================
  {
    id: 'g10-drafting-s1-m2',
    grade: 10,
    semester: 's1',
    semesterTitle: '高一上學期',
    period: 'midterm-2',
    periodName: '第二次段考（期中考二）',
    weekRange: '第 13~14 週',
    subjectSlug: 'drafting',
    subjectName: '製圖實習',
    category: '專業科目（二）',
    targetSchool: '全國高工土木建築群指標對照',
    examScope: '第三章 正投影原理、第三角法三視圖展開與線條重疊優先順序',
    schoolContextNotes: '高一建築製圖核心基本功。段考包含三視圖識圖（前視圖、俯視圖、右側視圖）、45° 反射線投射，以及粗實線、虛線、中心線重疊優先順序，識圖選擇與作圖題並重。',
    scoreWeight: '佔學期學業成績 20%',
    handoutSummary: '第三角法口訣「長對正、高平齊、寬相等」；線條重疊優先權「實線 > 虛線 > 中心線」是製圖學絕對規範。',
    knowledgePoints: [
      {
        id: 'dra-g10-s1-m2-01',
        title: '第三角投影法幾何關係與三線重疊優先順序',
        curriculumCode: '115-專二-製圖-02',
        importance: 5,
        textbookChapter: '全華/科友 製圖實習 第三章 正投影與三視圖',
        summary: '第三角投影法：觀測者 ➜ 投影面 ➜ 物體（物體在投影面後方）。三視圖關係：前視圖與俯視圖長度對正（長對正）；前視圖與右側視圖高度平齊（高平齊）；俯視圖與右側視圖寬度相等（寬相等，以 45° 線投射）。同一直線上各類線條重疊時之優先繪出順序：1. 粗實線（外形輪廓線）最優先；2. 中虛線（隱藏線）次之；3. 細鏈線（割面線例外優於虛線，普通中心線第三）；4. 尺寸線與剖面線最後。',
        intuitiveAnalogy: '第三角法就像隔著玻璃櫥窗看商品：眼睛在外面，玻璃在中間，模型在裡面。站在正面看到前視圖，從上方天花板往下看看到俯視圖，從右邊看就是右側視圖，完全符合人體直覺！',
        keyFormulaOrRule: '第三角法原則：長對正、高平齊、寬相等；重疊順序：實線 ＞ 虛線 ＞ 中心線。',
        cramTips: [
          '台灣 CNS 建築製圖全面採用「第三角法」！',
          '看到物體輪廓，不管後面有什麼中心線，永遠畫「粗實線」！',
          '俯視圖與右側視圖的「寬度」必須透過 45° 輔助線精準投射對應！',
        ],
        trapWarning: '第一角法（歐洲常用）是物體在中間；第三角法是投影面在中間，考試千萬看清題目規定法別！',
        junyiMasterySkill: '第三角法正投影展開與線條重疊規範',
      },
    ],
    workedExamples: [
      {
        id: 'ex-dra-g10-s1-m2-01',
        title: '正投影三視圖展開與 45° 投射線作圖',
        targetConcept: '長對正、高平齊、寬相等作圖規範',
        difficulty: '段考常考',
        questionStem: '一階梯形物體已知其前視圖與俯視圖，若欲利用 45° 輔助投射線求繪右側視圖，簡述其投影對應作圖步驟。',
        beginnerThinking: '前視圖決定了物體的高與長，俯視圖決定了物體的長與寬。右側視圖需要「高」與「寬」，高直接從前視圖水平引過來，寬從俯視圖引至 45° 轉折線再垂直往下投射！',
        stepByStepSolution: [
          {
            stepNo: 1,
            title: '水平引出前視圖之各特徵高度 (高平齊)',
            content: '自前視圖頂部、階梯踏步折點及底部，用細實線水平向右延伸至右側視圖預定區域。',
          },
          {
            stepNo: 2,
            title: '由俯視圖水平向右引線至 45° 基準線',
            content: '在俯視圖與前視圖右側劃一條 45° 斜線（起點對齊前視圖右上角延長相交點），將俯視圖的前後邊界水平投射到該 45° 線上。',
          },
          {
            stepNo: 3,
            title: '轉向垂直向下投射 (寬相等)',
            content: '自 45° 斜線上之交點垂直向下投射引線，與步驟 1 的水平高度線相交，其相交範圍即為右側視圖之各階梯外輪廓，以粗實線描繪確定外形。',
          },
        ],
        examinerTrapWarning: '若物體背後有看不見的內凹槽，在右側視圖上必須以中虛線（隱藏線）表示，不可漏繪！',
        quickMnemonic: '前視平移得高度，俯視轉四五得寬度，正投影圖無縫出。',
        finalAnswer: '利用高平齊與 45° 寬相等投射，完成右側視圖輪廓繪製。',
      },
    ],
    cramFormulaCards: [
      {
        title: '製圖三原則與線型優先卡',
        formula: '長對正、高平齊、寬相等 | 重疊優先: 輪廓粗實線 > 隱藏中虛線 > 軸心細鏈線',
        notes: '割面線兩端粗實中間細鏈，優先於中心線。',
        memoryMnemonic: '三原則不離身，實線壓虛線，虛線壓中心。',
      },
    ],
    crossReferencedQuestions: [
      {
        id: 'q-dra-g10-s1-m2-taichung',
        sourceExam: '台中高工 112 學年度高一上製圖實習第二次段考 第 15 題',
        questionStem: '在正投影工程製圖中，當不同線型之線條在同一圖面上重疊重合時，下列何者之繪製優先順序最高？',
        options: {
          A: '中心線（細鏈線）',
          B: '外形輪廓線（粗實線）',
          C: '隱藏線（中虛線）',
          D: '尺寸界線（細實線）',
        },
        answer: 'B',
        detailedExplanation: '依據 CNS 3 號工程製圖規範，不同線條重疊時之優先順序為：外形輪廓線（粗實線）最優先，隱藏線（中虛線）次之，割面線再次之，中心線（細鏈線）第四，尺寸線與投影線最後。故外形輪廓線優先順序最高。選 B。',
        relatedKnowledgePointId: 'dra-g10-s1-m2-01',
        examTrickAnalysis: '基礎法規題，段考 100% 必考送分題，考查學生對 CNS 圖學法規的熟悉度。',
      },
    ],
    preExamChecklist: [
      '我熟背第三角法三原則：長對正、高平齊、寬相等。',
      '我牢記線條重疊優先順序：實線 > 虛線 > 中心線。',
      '我能熟練利用 45° 斜線由俯視圖投射寬度至右側視圖。',
    ],
  },

  // =========================================================================
  // 【高一製圖】高一上學期 期末考 (G10-S1-Final)
  // =========================================================================
  {
    id: 'g10-drafting-s1-final',
    grade: 10,
    semester: 's1',
    semesterTitle: '高一上學期',
    period: 'final',
    periodName: '期末考',
    weekRange: '第 20~21 週',
    subjectSlug: 'drafting',
    subjectName: '製圖實習',
    category: '專業科目（二）',
    targetSchool: '全國高工土木建築群指標對照',
    examScope: '第四章 剖面圖與剖切原理（全剖面、半剖面、局部剖面、旋轉與移轉剖面、CNS 割面線符號與剖面線規範）',
    schoolContextNotes: '高一上圖學實習驗收大考。剖面線間距 (1~3mm)、45° 傾斜線、半剖面「一側內部一側外觀且中心線不畫虛線」、薄板剖面填黑等標準是識圖大題命題焦點。',
    scoreWeight: '佔學期學業成績 30%',
    handoutSummary: '割面線箭頭指著「看過去的方向」；剖面線以細實線夾 45° 繪製；半剖面以「中心線」分界，半外觀側省略所有隱藏虛線！',
    knowledgePoints: [
      {
        id: 'dra-g10-s1-final-01',
        title: '剖面圖分類（全剖/半剖/局部剖）與 CNS 剖面線繪製規範',
        curriculumCode: '115-專二-製圖-03',
        importance: 5,
        textbookChapter: '全華/科友 製圖實習 第四章 剖視圖',
        summary: '剖切原理：假想以一割面切開物體，將觀測者與割面間之部分移去，顯示內部複雜構造。1. 全剖面圖：假想割面完全切過物體全長或全寬，適用於內外形狀皆不對稱者；2. 半剖面圖：適用於「左右或前後完全對稱」之物體，割面切去四分之一，以「細鏈中心線」為分界，一半表現內部剖面，一半表現外部輪廓（外觀半側通常省略所有隱藏線）；3. 局部剖面圖：僅需表現物體某一局部內部時，以「徒手波浪線」或細折線破斷表示；4. 旋轉剖面圖：將肋條、輪輻或型鋼截面在原圖處旋轉 90° 畫出。剖面線規範：以細實線繪製，與主輪廓線夾 45° 角，間距均勻（約 1.5~3 mm）。薄件（如鋼板、墊圈）厚度小於 2 mm 時，可直接塗黑表示。',
        intuitiveAnalogy: '半剖面圖就像超人擁有半隻透視眼，看對稱雕像時，左眼看見華麗的石雕外表，右眼直接透視內部的鋼骨結構，一張圖兼具外貌與骨骼！',
        keyFormulaOrRule: '半剖面：對稱件專用、中心線分界、外觀側不畫虛線；剖面線：細實線 45°。',
        cramTips: [
          '半剖面的界線是「中心線 (細鏈線)」，千萬不可以畫成粗實線！',
          '剖面線穿過實體材質才畫，空心孔洞絕對「留白」不畫剖面線！',
          '螺栓、螺帽、實心軸、鉚釘等標準實心零件，縱向剖切時「一律不剖切、不畫剖面線」！',
        ],
        trapWarning: '題目問半剖面圖之外觀側是否需要繪製隱藏線？標準答案是「除極特殊必須標註尺寸外，一律省略不畫」！',
        junyiMasterySkill: '各類剖面圖判讀與 CNS 剖面線規範檢定',
      },
    ],
    workedExamples: [
      {
        id: 'ex-dra-g10-s1-final-01',
        title: '對稱空心階梯圓柱體之半剖面圖判讀',
        targetConcept: '半剖面圖中心線分界與剖面線標示',
        difficulty: '段考常考',
        questionStem: '一完全前後左右對稱之空心鋼套管，欲繪製其正面半剖面圖，試說明中心線左右兩側各應如何表現。',
        beginnerThinking: '對稱物體用半剖面最合適。依 CNS 慣例，垂直半剖面通常將「右側」或「下側」畫成剖面，左側表現外形。',
        stepByStepSolution: [
          {
            stepNo: 1,
            title: '繪製正中央對稱軸線',
            content: '在中央繪製一條細鏈線作為中心對稱線，此線貫穿頂底兩端，兩端突出輪廓線約 3~5 mm。',
          },
          {
            stepNo: 2,
            title: '繪製右半側內部剖視構造',
            content: '將右半邊內部孔洞、內階梯實體切面以粗實線描繪輪廓，並在實體受切金屬材質處填入 45° 傾斜、間距約 2 mm 之細實線剖面線。孔洞中心處留白。',
          },
          {
            stepNo: 3,
            title: '繪製左半側外部形狀構造',
            content: '左半邊僅繪製圓柱管外部可見輪廓粗實線，原本內部的空心隱藏孔洞「完全不畫虛線」，保持外觀清爽。',
          },
        ],
        examinerTrapWarning: '左半側外觀部分若畫出中虛線隱藏線，段考通常會被扣分！中央分界線若畫成粗實線則全題扣分！',
        quickMnemonic: '半剖對稱中線分，一邊外貌一邊真；實體四五細斜線，外貌虛線全不見。',
        finalAnswer: '中線以細鏈線劃分，左側僅畫外形輪廓粗實線（省略虛線），右側畫剖面實體並塗 45° 細剖面線。',
      },
    ],
    cramFormulaCards: [
      {
        title: '剖視圖鐵律速查卡',
        formula: '全剖: 內外全切 | 半剖: 對稱件專用 (外半側不畫虛線) | 剖面線: 細實線45°',
        unit: '線條間距 1.5~3 mm',
        notes: '實心軸、螺栓、肋條縱剖不劃剖面線；中央以細鏈中心線分界。',
        memoryMnemonic: '半剖對稱中心線，四十五度細切面；實心軸件縱不剖，徒手波浪局剖現。',
      },
    ],
    crossReferencedQuestions: [
      {
        id: 'q-dra-g10-s1-final-taichung',
        sourceExam: '台中高工 112 學年度高一上製圖實習期末考 第 16 題',
        questionStem: '下列關於正投影「半剖面圖」之繪製規則，何者「錯誤」？',
        options: {
          A: '適用於具有對稱性之機件或建築構件',
          B: '通常以中心線作為剖面部分與外觀部分之分界線',
          C: '外觀半側通常應繪出所有的隱藏虛線，以利標註內部尺度',
          D: '實體被割面切過之部分，應繪製 45° 細實線之剖面線',
        },
        answer: 'C',
        detailedExplanation: '半剖面圖的主要目的即在於以一半表現內部、一半表現外部。為保持圖面清晰，在外觀半側通常「省略所有隱藏虛線」，內部構造尺度直接在剖面半側標註。故 C 選項敘述錯誤，選 C。',
        relatedKnowledgePointId: 'dra-g10-s1-final-01',
        examTrickAnalysis: '考查半剖面圖最核心的繪圖法規約束，常考隱藏線是否該畫。',
      },
    ],
    preExamChecklist: [
      '我熟記半剖面圖外觀半側一律省略隱藏虛線之 CNS 規範。',
      '我牢記剖面線為 45° 細實線，且空心貫通部分必須留白。',
      '我知道實心螺栓、鉚釘、實心軸在縱向剖面中「一律不打剖面線」。',
    ],
  },

  // =========================================================================
  // 【高一建築概論】高一下學期 第一次段考 (G10-S2-M1)
  // =========================================================================
  {
    id: 'g10-arch-intro-s2-m1',
    grade: 10,
    semester: 's2',
    semesterTitle: '高一下學期',
    period: 'midterm-1',
    periodName: '第一次段考（期中考一）',
    weekRange: '第 6~7 週',
    subjectSlug: 'construction',
    subjectName: '建築概論與施工入門',
    category: '專業科目（二）',
    targetSchool: '全國高工土木建築群指標對照',
    examScope: '建築生命週期、台灣綠建築 EEWH 九大評估指標、建築結構系統分類（RC、SC、SRC）',
    schoolContextNotes: '高一認識現代建築核心素養。綠建築九大指標（生態、節能、減廢、健康）及其英文字母代號、台灣高層建築常用結構（RC vs SC vs SRC）是段考與統測熱門考點。',
    scoreWeight: '佔學期學業成績 20%',
    handoutSummary: 'EEWH 四大範疇九大指標口訣「生能廢健、綠日水保」；RC 剛性大防火佳但自重大，SC 韌性好抗震佳但需防火被覆，SRC 截長補短為高樓首選。',
    knowledgePoints: [
      {
        id: 'con-g10-s2-m1-01',
        title: '台灣綠建築 EEWH 系統四大範疇、九大指標與結構材料體系',
        curriculumCode: '115-專二-施工-01',
        importance: 5,
        textbookChapter: '全華/科友 建築概論 第二章 永續環境與綠建築',
        summary: '台灣綠建築標章 (EEWH)：Ecology (生態)、Energy saving (節能)、Waste reduction (減廢)、Health (健康)。九大指標：1. 生態範疇：生物多樣性指標、綠化量指標、基地保水指標；2. 節能範疇（最重要核心）：日常節能指標（建築外殼 ENVLOAD、空調能耗、照明能耗）；3. 減廢範疇：二氧化碳減量指標、廢棄物減量指標；4. 健康範疇：室內環境指標、水資源指標、污水垃圾改善指標。三大主要結構體系對比：RC（鋼筋混凝土）：剛度大、防火佳、隔音優、自重大、施工週期長；SC（鋼構造）：韌性高、抗震優、自重輕、施工快，但易鏽蝕且高溫軟化必做「防火被覆」；SRC（鋼骨鋼筋混凝土）：結合兩者優點，梁柱斷面縮小、剛度韌性兼具，為超高層建築主力。',
        intuitiveAnalogy: '綠建築 EEWH 就像建築的健康檢查報告：生態是指戶外給鳥類昆蟲留花園，節能是不開冷氣也通風陰涼，減廢是不製造多餘水泥垃圾，健康是室內沒有甲醛毒氣！',
        keyFormulaOrRule: 'EEWH = 生態 (生物多樣性、綠化、保水) + 節能 (日常節能★) + 減廢 (CO2、廢棄物) + 健康 (室內、水資源、污水垃圾)。',
        cramTips: [
          '「日常節能指標」是綠建築通過評定的「絕對門檻（必要指標）」！',
          '鋼結構 (SC) 致命死穴是「火災」，超過 600°C 降伏強度驟降一半，必須噴塗防火漆或石膏板防火被覆！',
        ],
        trapWarning: '綠建築評定等級分五級：合格級、銅級、銀級、黃金級、鑽石級（最高）。千萬別誤記成「白金級」！',
        junyiMasterySkill: '台灣 EEWH 綠建築指標系統與現代結構分類',
      },
    ],
    workedExamples: [
      {
        id: 'ex-con-g10-s2-m1-01',
        title: '綠建築 EEWH 範疇分類與必要評估指標判定',
        targetConcept: 'EEWH 九大指標歸類與評定門檻',
        difficulty: '基礎入門',
        questionStem: '某校新建圖書館欲取得台灣綠建築標章，建築師提送設計圖審查。試問在 EEWH 九大評估指標中，有哪兩項指標屬於必須合格通過的「必要門檻指標」？',
        beginnerThinking: '台灣 EEWH 評估規定中，建築必須符合基本居住品質與節能要求，設有兩個最基本的指標門檻，未通過直接否決。',
        stepByStepSolution: [
          {
            stepNo: 1,
            title: '回顧 EEWH 評定通則',
            content: '內政部建築研究所綠建築評估手冊規定，不論申請何種等級，皆必須通過門檻基準。',
          },
          {
            stepNo: 2,
            title: '提取兩大絕對必要指標',
            content: '兩大必備指標為：「日常節能指標」與「水資源指標」。',
          },
          {
            stepNo: 3,
            title: '歸納指標重要性',
            content: '日常節能指標佔總節能貢獻度最高（涵蓋外殼、空調、照明）；水資源指標保證省水器具與雨水回收達標。',
          },
        ],
        examinerTrapWarning: '常有考生誤將「室內環境指標」或「生物多樣性指標」列為必要門檻，依規定僅日常節能與水資源為絕對通過門檻！',
        quickMnemonic: '綠建築兩大門檻：日常節能省大電，水資源指標省好水。',
        finalAnswer: '日常節能指標 與 水資源指標',
      },
    ],
    cramFormulaCards: [
      {
        title: '綠建築 EEWH 與結構速記卡',
        formula: 'EEWH 四範疇九指標 | 門檻: 日常節能 + 水資源 | 評等: 合格/銅/銀/黃金/鑽石',
        notes: 'SC 抗震好但必做防火被覆；RC 剛性大但自重最重。',
        memoryMnemonic: '生能廢健四範疇，節能省水是門檻；鑽金銀銅合格級，鋼構防火混凝土耐震。',
      },
    ],
    crossReferencedQuestions: [
      {
        id: 'q-con-g10-s2-m1-taichung',
        sourceExam: '台中高工 112 學年度高一下建築概論第一次段考 第 11 題',
        questionStem: '下列哪一項指標屬於台灣綠建築評估系統 (EEWH) 中之「生態範疇 (Ecology)」？',
        options: {
          A: '日常節能指標',
          B: '生物多樣性指標',
          C: '室內環境指標',
          D: '二氧化碳減量指標',
        },
        answer: 'B',
        detailedExplanation: '台灣 EEWH 生態範疇包含三項指標：生物多樣性指標、綠化量指標、基地保水指標。A 屬於節能範疇，C 屬於健康範疇，D 屬於減廢範疇。故選 B。',
        relatedKnowledgePointId: 'con-g10-s2-m1-01',
        examTrickAnalysis: '經典分類題，要求考生能清晰將九大指標歸入四大範疇中。',
      },
    ],
    preExamChecklist: [
      '我熟記 EEWH 四大範疇：生態、節能、減廢、健康。',
      '我能清楚指出九大指標各自所屬的範疇。',
      '我清楚知道綠建築五大等級（鑽石、黃金、銀、銅、合格）無「白金級」。',
    ],
  },

  // =========================================================================
  // 【高三衝刺】統測專一第一次模考衝刺 (G12-S1-Mock1)
  // =========================================================================
  {
    id: 'g12-arch-s1-mock1',
    grade: 12,
    semester: 's1',
    semesterTitle: '高三上學期',
    period: 'midterm-1',
    periodName: '第一次段考／統測第一階段全模考',
    weekRange: '第 8~9 週',
    subjectSlug: 'mechanics',
    subjectName: '土木建築群專一總衝刺',
    category: '專業科目（一）',
    targetSchool: '全國高工土木建築群指標對照',
    examScope: '高一工程力學全範圍（力系、重心、慣性矩、桁架、梁剪力彎矩）+ 高二材料與試驗上學期（水泥與骨材）',
    schoolContextNotes: '高三全國聯合模擬考（台南高工、台中高工、大安高工聯合命題）。40 題單選題（力學 20 題 + 材料 20 題），限時 80 分鐘，考核跨章節快速解題速度與準確度。',
    scoreWeight: '佔學期學業成績 30%',
    handoutSummary: '高三模擬考是統測實戰預演；力學快速鎖定「桁架零力桿」與「梁反力」，材料快速掃描「水泥熟料特性」與「骨材含水修正」。',
    knowledgePoints: [
      {
        id: 'g12-mock-01',
        title: '桁架零力桿 (Zero-Force Members) 兩大速判鐵律',
        curriculumCode: '115-專一-力學-05',
        importance: 5,
        textbookChapter: '全華/科友 基礎工程力學 第五章 桁架分析',
        summary: '零力桿兩大鐵律：1. 兩桿共節點且不共線，節點上無任何外力或支承反力作用，則此兩桿「皆為零力桿」；2. 三桿共節點，其中兩桿共線，第三桿為斜交桿，節點無外力，則「不共線的第三桿必為零力桿」，共線兩桿內力大小相等性質相同。',
        intuitiveAnalogy: '像路口的三叉路，一條大直路穿過，旁邊接一條死巷。如果死巷口沒有任何人在推拉，那這條死巷裡的鋼棒受力只能是零，否則大路上的垂直力無從平衡！',
        keyFormulaOrRule: '兩桿不共線無外力 ➜ 兩桿皆零；三桿兩共線無外力 ➜ 第三桿必零。',
        cramTips: [
          '先找完全沒有載重的節點！',
          '判斷完一根零力桿後「直接劃掉」，重新將其視為不存在，繼續尋找下一個滿足條件的節點！',
        ],
        trapWarning: '若節點上有外力作用，零力桿鐵律不成立！必須考慮外力分量平衡。',
        junyiMasterySkill: '桁架零力桿快速視圖判定法',
      },
    ],
    workedExamples: [
      {
        id: 'ex-g12-mock-01-01',
        title: '複雜屋架多重零力桿遞迴快速識別',
        targetConcept: '零力桿兩大鐵律遞迴劃除法',
        difficulty: '段考常考',
        questionStem: '一跨度 16 m 之對稱芬克屋架 (Fink Truss)，頂點節點只承受垂直向下風載重，左右兩側各有多處自由節點。試述如何於 10 秒內快速圈出結構中所有零力桿。',
        beginnerThinking: '不要從有外力支承的下弦開始算，先找屋頂兩側沒有掛載重的外凸節點，利用兩桿不共線無外力先砍掉兩桿，再看相連節點是否變成三桿兩共線！',
        stepByStepSolution: [
          {
            stepNo: 1,
            title: '第一輪掃描兩桿不共線無外力節點',
            content: '找出未受任何外載重且無支承反力之邊緣角節點，若該處僅匯交兩根桿件且不共線，立刻判定兩桿皆為零力桿，以紅筆劃叉刪除。',
          },
          {
            stepNo: 2,
            title: '第二輪掃描三桿兩共線節點',
            content: '將已確認之零力桿視為「空氣不存在」，檢查相鄰節點。若該節點原本匯交四桿，刪去一桿後變為三桿，且其中兩桿共線，則非共線之斜腹桿立即判定為零力桿！',
          },
          {
            stepNo: 3,
            title: '重複遞迴直至無符合條件節點',
            content: '依序向下推進，即可在不列任何平衡方程式的情況下圈出全部零力桿。',
          },
        ],
        examinerTrapWarning: '若節點處有風壓力垂直作用於屋面，該節點的兩共線鐵律便失效，切勿盲目套用！',
        quickMnemonic: '無力雙桿全歸零，三桿共線獨立零，劃除之後再推進。',
        finalAnswer: '依序以兩大鐵律遞迴劃除所有零力桿。',
      },
    ],
    cramFormulaCards: [
      {
        title: '零力桿秒殺卡',
        formula: '兩桿不共線無外力 ➜ 兩桿零 | 三桿兩共線無外力 ➜ 獨立斜桿必零',
        notes: '劃掉已確認零桿，遞迴尋找次一節點。',
        memoryMnemonic: '兩桿無力皆為零，三桿共線斜桿零。',
      },
    ],
    crossReferencedQuestions: [
      {
        id: 'q-g12-mock1-01',
        sourceExam: '112 學年度全國各高工第一次跨校統測模擬考 專一 第 14 題',
        questionStem: '一平面簡支桁架結構如圖示，若節點 B 由三桿 AB, BC, BD 構成，其中 AB 與 BC 在同一直線上，BD 與此線垂直，且節點 B 處無任何外力載重作用，則桿件 BD 之受力情況為何？',
        options: {
          A: '受拉力作用',
          B: '受壓力作用',
          C: '內力為零（零力桿）',
          D: '受力大小由外支承跨度決定',
        },
        answer: 'C',
        detailedExplanation: '依據桁架零力桿判別第二鐵律：三桿匯交於一節點，其中 AB 與 BC 兩桿呈一直線共線，第三桿 BD 不共線，且節點 B 上無任何外載重或支承反力作用。由垂直於直線方向之平衡條件 ΣFy = 0，桿件 BD 必須為零力桿（內力為零）。故選 C。',
        relatedKnowledgePointId: 'g12-mock-01',
        examTrickAnalysis: '統測與模擬考每年必出一題零力桿判讀，秒殺題 10 秒內必須拿分。',
      },
    ],
    preExamChecklist: [
      '我能在 10 秒內以兩大鐵律在複雜桁架中圈出所有零力桿。',
      '我清楚知道高三模考中力學與材料的題目配分比重（各佔 50%）。',
    ],
  },

  // =========================================================================
  // 【高三衝刺】統測專一第二次模考衝刺 (G12-S1-Mock2)
  // =========================================================================
  {
    id: 'g12-arch-s1-mock2',
    grade: 12,
    semester: 's1',
    semesterTitle: '高三上學期',
    period: 'midterm-2',
    periodName: '第二次段考／統測第二階段全模考',
    weekRange: '第 14~15 週',
    subjectSlug: 'mechanics',
    subjectName: '土木建築群專一總衝刺',
    category: '專業科目（一）',
    targetSchool: '全國高工土木建築群指標對照',
    examScope: '梁之彎曲正應力 σ = My/I、橫向剪應力 τ = VQ/Ib、莫爾圓 (Mohr\'s Circle) 主應力速算 + 混凝土 ACI 配比與強度品質驗收',
    schoolContextNotes: '高三專一實力躍升關鍵場次。材料力學正應力與莫爾圓圓心坐標 C = (σx+σy)/2、半徑 R = √[((σx-σy)/2)² + τxy²] 是全國模擬考高鑑別度大題。',
    scoreWeight: '佔學期學業成績 30%',
    handoutSummary: '梁彎曲應力 σ = M·y / I（中性軸 y=0 應力為零，最外緣應力最大）；莫爾圓圓心在 (σavg, 0)，最大主應力 σ1 = σavg + R，最大剪應力 τmax = R！',
    knowledgePoints: [
      {
        id: 'g12-mock-02-01',
        title: '梁彎曲應力公式與莫爾圓 (Mohr\'s Circle) 主應力幾何速解',
        curriculumCode: '115-專一-力學-08',
        importance: 5,
        textbookChapter: '全華/科友 基礎工程力學 第十章 梁之應力、第十一章 平面應力轉換',
        summary: '梁彎曲正應力公式：σ = (M · y) / I = M / Z（其中 Z = I / c 為斷面模數；y 為離中性軸之距離）。中性軸 (Neutral Axis) 通過形心，在該處正應力 σ = 0；最外緣 y = c 處正應力達到極值 σmax。莫爾圓幾何計算法：已知平面應力狀態 (σx, σy, τxy)，圓心坐標 C = (σavg, 0) = ((σx + σy) / 2, 0)；莫爾圓半徑 R = √[ ((σx - σy) / 2)² + τxy² ]。兩大主應力：σ1 = σavg + R（最大正應力），σ2 = σavg - R（最小正應力）。最大平面剪應力：τmax = R。主平面夾角：tan(2θp) = 2τxy / (σx - σy)。在主平面上，剪應力恰好為零！',
        intuitiveAnalogy: '莫爾圓就像把一個方向旋轉的受力魔術方塊，轉化為圓平面上的一個圓周！不管微單元旋轉到任何傾斜角度，其正應力與剪應力坐標永遠落在這顆圓圈上，圓圈最右邊頂點就是它能承受的最大拉力，最上方最高點就是最大剪力！',
        keyFormulaOrRule: 'σ = My/I；莫爾圓圓心 C = (σx+σy)/2；半徑 R = √[((σx-σy)/2)² + τxy²]；σ1,2 = σavg ± R；τmax = R。',
        cramTips: [
          '主平面 (Principal Planes) 上「剪應力必為零 (τ = 0)」！',
          '莫爾圓半徑 R 剛好等於「最大平面剪應力 τmax」！',
          '最大正應力與最小正應力之和永遠等於定值：σ1 + σ2 = σx + σy！',
        ],
        trapWarning: '剪應力正負號慣例：以微單元順時鐘轉動為正，逆時針轉動為負，繪製莫爾圓坐標點時千萬別搞反！',
        junyiMasterySkill: '莫爾圓圓心半徑速算與主應力狀態轉換',
      },
    ],
    workedExamples: [
      {
        id: 'ex-g12-mock-02-01',
        title: '平面應力狀態之主應力與最大剪應力莫爾圓速算',
        targetConcept: '莫爾圓圓心半徑公式與極值應力',
        difficulty: '高手衝刺',
        questionStem: '某受力構件上一點之平面應力狀態為：水平正應力 σx = 80 MPa (拉)，垂直正應力 σy = 20 MPa (拉)，剪應力 τxy = 40 MPa。試求該點之最大主應力 σ1 與最大平面剪應力 τmax。',
        beginnerThinking: '直接帶入莫爾圓兩大公式：先算平均正應力得圓心，再用勾股定理算半徑 R。最大主應力就是圓心加半徑，最大剪應力就是半徑！',
        stepByStepSolution: [
          {
            stepNo: 1,
            title: '計算平均正應力（莫爾圓圓心坐標）',
            content: 'σavg = (σx + σy) / 2 = (80 + 20) / 2 = 50 MPa。故圓心 C = (50, 0)。',
          },
          {
            stepNo: 2,
            title: '計算莫爾圓半徑 R',
            content: '((σx - σy) / 2) = (80 - 20) / 2 = 30 MPa。R = √[ (30)² + (40)² ] = √(900 + 1600) = √2500 = 50 MPa（標準 3-4-5 特殊直角三角形！）。',
          },
          {
            stepNo: 3,
            title: '求解主應力與最大剪應力',
            content: '最大主應力 σ1 = σavg + R = 50 + 50 = 100 MPa。最小主應力 σ2 = σavg - R = 50 - 50 = 0 MPa。最大剪應力 τmax = R = 50 MPa。',
          },
        ],
        examinerTrapWarning: '若題目的 σy 是壓力 (-20 MPa)，則代入時必須帶負號：(80 - (-20)) / 2 = 50，計算半徑時符號極易出錯！',
        quickMnemonic: '平均是圓心，勾股求半徑；圓心加半徑得主應，半徑本身即剪應。',
        finalAnswer: '最大主應力 σ1 = 100 MPa，最大剪應力 τmax = 50 MPa',
      },
    ],
    cramFormulaCards: [
      {
        title: '莫爾圓與梁應力卡',
        formula: 'σ = My / I | σavg = (σx+σy)/2 | R = √[((σx-σy)/2)² + τxy²] | τmax = R',
        unit: 'MPa 或 kgf/cm²',
        notes: 'σ1,2 = σavg ± R；主平面上剪應力為零。',
        memoryMnemonic: '梁曲應力 My 除以 I，莫爾圓心平均開；勾股半徑算剪力，加減半徑主應來。',
      },
    ],
    crossReferencedQuestions: [
      {
        id: 'q-g12-mock2-01',
        sourceExam: '112 學年度全國各高工第二次跨校統測模擬考 專一 第 19 題',
        questionStem: '某平面應力元素受 σx = 60 MPa, σy = -20 MPa, τxy = 30 MPa 之應力作用，試求該元素之最大平面剪應力 τmax 為何？',
        options: {
          A: '30 MPa',
          B: '40 MPa',
          C: '50 MPa',
          D: '70 MPa',
        },
        answer: 'C',
        detailedExplanation: '莫爾圓半徑 R 即為最大平面剪應力 τmax。公式：R = √[ ((σx - σy)/2)² + τxy² ]。((σx - σy)/2) = (60 - (-20))/2 = 80/2 = 40 MPa。R = √[ 40² + 30² ] = √[ 1600 + 900 ] = √2500 = 50 MPa。故最大剪應力 τmax = 50 MPa。選 C。',
        relatedKnowledgePointId: 'g12-mock-02-01',
        examTrickAnalysis: '注意負號！σy 為壓力 (-20)，減去負值變相加 (60 - (-20) = 80)，考生常因漏掉負號誤算為 (60-20)/2=20 導致失分。',
      },
    ],
    preExamChecklist: [
      '我能在 30 秒內寫出莫爾圓圓心與半徑公式。',
      '我清楚知道主平面上剪應力恆等於零。',
      '我能熟記 3-4-5 與 5-12-13 等常見勾股數並秒解半徑。',
    ],
  },

  // =========================================================================
  // 【高三衝刺】統測專二全真模考衝刺 (G12-S2-Mock1)
  // =========================================================================
  {
    id: 'g12-arch-s2-mock1',
    grade: 12,
    semester: 's2',
    semesterTitle: '高三下學期',
    period: 'midterm-1',
    periodName: '統測倒數 60 天專二全真模考',
    weekRange: '第 8~9 週',
    subjectSlug: 'surveying',
    subjectName: '土木建築群專二總衝刺',
    category: '專業科目（二）',
    targetSchool: '全國高工土木建築群指標對照',
    examScope: '測量學全範圍（閉合導線平差、緯距經距計算、鞋帶公式面積）+ 建築製圖實習（樓梯級高踏面法規 2R+T=60~64、建築施工圖剖面）',
    schoolContextNotes: '專二 80 分鐘跨科實戰。涵蓋測量學導線平差計算法則 (Compass Rule) 與建築技術規則建築設計施工編第 33 條樓梯尺度構造法規之綜合交叉試題。',
    scoreWeight: '佔學期學業成績 30%',
    handoutSummary: '導線平差閉合比數 1/K 越大越精密；羅盤儀法則依「邊長比例」分攤緯距經距誤差；樓梯法規級高 R ≤ 16~20 cm、級深 T ≥ 24~26 cm，級高踏面公式 2R + T = 60~64 cm。',
    knowledgePoints: [
      {
        id: 'g12-mock-sur-01',
        title: '閉合導線平差計算 (Compass Rule) 與建築技術規則樓梯尺度法規',
        curriculumCode: '115-專二-測量製圖-01',
        importance: 5,
        textbookChapter: '全華/科友 測量學 第六章 導線測量、建築製圖 建築構造法規',
        summary: '閉合導線計算步序：1. 內角和檢核 (n-2)×180°，角誤差平均分配；2. 推算各邊方位角；3. 計算各邊緯距 ΔL = D·cos(φ) 與經距 ΔD = D·sin(φ)；4. 緯距閉合差 W_L = ΣΔL，經距閉合差 W_D = ΣΔD；5. 導線全長閉合差 W = √(W_L² + W_D²)；閉合比數 = 1 / (ΣD / W)。6. 羅盤儀平差 (Compass Rule / Bowditch 法則)：各邊緯距改正數 c_L = -W_L × (Di / ΣD)，經距改正數 c_D = -W_D × (Di / ΣD)（改正數與邊長成正比）。建築技術規則第 33 條樓梯規定：住宅專用樓梯級高 R ≤ 20 cm、級深 T ≥ 24 cm；公共建築 R ≤ 16 cm、T ≥ 26 cm；人體工學黃金公式：58 cm ≤ 2R + T ≤ 64 cm (常規以 60~63 cm 為最佳)；樓梯淨高不得小於 2.1 m。',
        intuitiveAnalogy: '閉合導線就像在森林繞一圈走回起點，最後發現距離起點差了 5 公分，羅盤儀法則就是看哪一步走得最長，就讓那一步分攤最大的修正誤差！而樓梯公式 2R+T 就像人走路的步伐長度，一步抬腳兩次加跨出一步正好等於自然步伐！',
        keyFormulaOrRule: '緯距 ΔL = D·cosφ；經距 ΔD = D·sinφ；羅盤儀修正量 ∝ 邊長 D；樓梯法規 2R + T = 60~64 cm。',
        cramTips: [
          '緯距是用 cos（南北向），經距是用 sin（東西向），「緯可經心」口訣神記！',
          '羅盤儀法則適用於「角度測量精度等於或略高於距離精度」之一般導線！',
          '樓梯級高 R 只要超過 20 cm 絕對違法！計算階數階梯 N = 總樓層高度 H / R（四捨五入取整數）。',
        ],
        trapWarning: '樓梯踏面數 (Treads) 永遠等於踢面數 (Risers) 減 1！即「階數 N 階，踏面只有 N - 1 塊」！考樓梯總長度時千萬不要直接乘 N！',
        junyiMasterySkill: '閉合導線羅盤儀平差法與樓梯剖面法規計算',
      },
    ],
    workedExamples: [
      {
        id: 'ex-g12-mock-sur-01',
        title: '標準住宅樓層樓梯踏面與級高法規配置計算',
        targetConcept: '建築技術規則第 33 條樓梯級高踏面配置與總梯長',
        difficulty: '段考常考',
        questionStem: '某透天住宅樓層淨高加上樓地板厚度為總高度 H = 360 cm。建築師規劃設計雙折樓梯，若選定級高 R 接近 18 cm，試計算：(1) 所需梯級數 (級高數 N)；(2) 依人體工學 2R+T=62 cm 計算踏面級深 T；(3) 單跑梯段之總踏面水平長度。',
        beginnerThinking: '先用總高度除以建議級高求整數階數，再由公式反推踏面深 T，最後謹記「踏面數等於階數減 1」算總水平長度！',
        stepByStepSolution: [
          {
            stepNo: 1,
            title: '計算階級數 N',
            content: 'N = 360 cm / 18 cm = 20 階（雙折梯每跑各 10 階）。每階實際級高 R = 360 / 20 = 18 cm（符合住宅法規 R ≤ 20 cm）。',
          },
          {
            stepNo: 2,
            title: '依公式計算踏面級深 T',
            content: '2R + T = 62 cm ➜ 2(18) + T = 62 ➜ 36 + T = 62 ➜ T = 26 cm（符合住宅法規 T ≥ 24 cm）。',
          },
          {
            stepNo: 3,
            title: '計算單跑樓梯水平踏面總長度',
            content: '每跑有 10 級踢面，則水平踏面數 = 10 - 1 = 9 塊。總水平踏面長度 = 9 × 26 cm = 234 cm。',
          },
        ],
        examinerTrapWarning: '切勿將單跑長度算成 10 × 26 = 260 cm！最後一級踏面直接融入平台 (Landing)，故踏面數必為 N - 1！',
        quickMnemonic: '高度除級得階數，踏面永遠少一階，二踢加踏等於六二。',
        finalAnswer: '全梯共 20 階，踏面級深 T = 26 cm，單跑踏面總長度 = 234 cm',
      },
    ],
    cramFormulaCards: [
      {
        title: '導線平差與樓梯法規卡',
        formula: '羅盤儀平差: 改正數 = -閉合差 × (邊長 / 全長) | 樓梯: 2R + T = 60~64 cm | 踏面數 = 階數 - 1',
        unit: 'cm 或 m',
        notes: '緯距用 cos，經距用 sin；住宅 R≤20 cm, T≥24 cm。',
        memoryMnemonic: '緯可經心邊長攤，樓梯二踢一踏連；總長少乘一塊面，法規六二最安然。',
      },
    ],
    crossReferencedQuestions: [
      {
        id: 'q-g12-mock-sur-01',
        sourceExam: '112 學年度全國各高工第三次跨校統測模擬考 專二 第 23 題',
        questionStem: '依據台灣現行「建築技術規則」規定，有關一般住宅樓梯尺度之限制，下列何者合乎法規要求？',
        options: {
          A: '級高 22 cm，級深 22 cm',
          B: '級高 18 cm，級深 26 cm',
          C: '級高 21 cm，級深 24 cm',
          D: '級高 17 cm，級深 22 cm',
        },
        answer: 'B',
        detailedExplanation: '依據建築技術規則建築設計施工編第 33 條，一般住宅建築樓梯規定：級高 R 必須小於或等於 20 cm (R ≤ 20 cm)，級深 T 必須大於或等於 24 cm (T ≥ 24 cm)。A 選項 R=22 超標且 T=22 不足；C 選項 R=21 超標；D 選項 T=22 不足。僅 B 選項 (R=18 ≤ 20, T=26 ≥ 24) 完全符合法規。選 B。',
        relatedKnowledgePointId: 'g12-mock-sur-01',
        examTrickAnalysis: '建築製圖與施工法規經典必考題，數字 R ≤ 20、T ≥ 24 必須牢記。',
      },
    ],
    preExamChecklist: [
      '我熟記導線緯距用 cos、經距用 sin 且羅盤儀修正量按邊長比例分配。',
      '我熟記住宅樓梯法規標準 R ≤ 20 cm, T ≥ 24 cm 以及 2R+T=60~64 cm。',
      '我清楚知道單跑樓梯之踏面個數等於踢面階數減 1 (N - 1)。',
    ],
  },
];
