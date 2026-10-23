import { PeriodicExamPlan } from './types';

export const g10AndG12ExamPlans: PeriodicExamPlan[] = [
  {
    "id": "g10-mechanics-s1-m1",
    "grade": 10,
    "semester": "s1",
    "semesterTitle": "高一上學期",
    "period": "midterm-1",
    "periodName": "第一次段考（期中考一）",
    "weekRange": "第 6~7 週",
    "subjectSlug": "mechanics",
    "subjectName": "基礎工程力學",
    "category": "專業科目（一）",
    "targetSchool": "全國高工土木建築群指標對照",
    "examScope": "第一章 緒論與力之度量、第二章 平面力系之合成與分解（匯交力系平衡條件 ΣFx=0, ΣFy=0）",
    "schoolContextNotes": "高一工程力學第一場大考。著重自由體圖 (FBD) 繪製、拉密定理 (Lami's Theorem)、直角三角形力分解與共點力系平衡，計算題佔比 50%。",
    "scoreWeight": "佔學期學業成績 20%",
    "handoutSummary": "力學之始在於力的向量性；拉密定理「P/sinα = Q/sinβ = R/sinγ」是三共點力平衡之速算神器；切記受力分析第一步必先畫出純淨的自由體圖 (FBD)。",
    "beginnerMindset": "力學第一堂考別慌！所有力學題目解題只有三步：一、圈出隔離體畫 FBD；二、把所有斜的力用 sin、cos 拆成水平跟鉛直；三、列出水平向右等於向左、鉛直向上等於向下！",
    "downloadablePdfFilename": "Arch-G10-Mechanics-S1-M1.pdf",
    "knowledgePoints": [
      {
        "id": "mec-g10-s1-m1-01",
        "title": "共點力系平衡條件與拉密定理 (Lami's Theorem)",
        "curriculumCode": "115-專一-力學-01",
        "importance": 5,
        "textbookChapter": "全華/科友 基礎工程力學 第二章 平面力系平衡",
        "intuitiveAnalogy": "想像三隻拔河隊伍在圓形廣場拉著繩圈中央的鐵環，鐵環紋絲不動，說明三個人的拉力在向量上完全抵消，圍成一個首尾相連的封閉三角形！",
        "summary": "平面共點力系（匯交力系）平衡充要條件：合力向量 R = 0，即代數和 ΣFx = 0 且 ΣFy = 0。若剛體受三力作用而維持靜止平衡，則此三力之作用線必共點或互相平行。拉密定理（適用三力共點平衡）：各力之大小與其餘兩力所夾角之正弦值成正比，即 P / sin(α) = Q / sin(β) = R / sin(γ)。",
        "keyFormulaOrRule": "ΣFx = 0, ΣFy = 0；拉密定理：P/sinα = Q/sinβ = R/sinγ。",
        "cramTips": [
          "夾角是兩向量「背對背背離」所張開的角度！千萬別量成內角。",
          "三力平衡三角形必定「首尾相接封閉」。",
          "30°-60°-90° 與 45°-45°-90° 特殊三角形邊長比是力分解的秒殺鑰匙！"
        ],
        "trapWarning": "拉密定理「僅能用於三力共點平衡」，若超過三力或力不共點，絕對不可直接套用拉密定理！",
        "junyiMasterySkill": "三力共點平衡與拉密定理速算技巧"
      },
      {
        "id": "mec-g10-s1-m1-02",
        "title": "力的可傳性原理與分力分解幾何合成法",
        "curriculumCode": "115-專一-力學-02",
        "importance": 4,
        "textbookChapter": "全華/科友 基礎工程力學 第一章 力之度量與向量",
        "intuitiveAnalogy": "火車在軌道上跑，車頭在前面拉，跟調車機在後面推，只要推拉都在同一條直線軌道上，整列火車加速前進的外在效果完全一樣！",
        "summary": "力的可傳性原理 (Principle of Transmissibility)：作用於剛體上之力的作用點，可沿其作用線任意前後滑動，而剛體之整體外效應（平衡或運動狀態）保持不變。直角座標分力分解：F_x = F·cosθ, F_y = F·sinθ；多力合成之合力 R = √((ΣFx)² + (ΣFy)²)，方向角 tanθ = ΣFy / ΣFx。",
        "keyFormulaOrRule": "R = √((ΣFx)² + (ΣFy)²), tanθ = ΣFy / ΣFx；力的可傳性僅適用於外效應剛體平衡，不可用於構件內部變形應力分析！",
        "cramTips": [
          "力的三要素：大小、方向、作用點（在剛體上可沿作用線滑移）。",
          "3-4-5 三角形對應角為 37°-53°-90°；5-12-13 對應角約為 22.6°-67.4°-90°。",
          "求方向角時必須依 ΣFx 與 ΣFy 的正負符號判別所在象限！"
        ],
        "trapWarning": "力的可傳性絕對不可用於物體內部應力分析！橡皮筋兩端向外拉受拉伸長，兩端向內推受壓縮短，內力完全不同！",
        "junyiMasterySkill": "力的可傳性與正交分力分解幾何合成法"
      }
    ],
    "cramFormulaCards": [
      {
        "title": "拉密定理速算卡",
        "formula": "P / sin(α) = Q / sin(β) = R / sin(γ)",
        "notes": "α 為 Q 與 R 之夾角，β 為 P 與 R 夾角，γ 為 P 與 Q 夾角。",
        "memoryMnemonic": "三力平衡正弦比，對面夾角正弦除。"
      },
      {
        "title": "直角座標合力大小與方向卡",
        "formula": "R = √((ΣFx)² + (ΣFy)²),  tanθ = ΣFy / ΣFx",
        "notes": "正交分解先分 X、Y 軸分別代數加總，最後畢氏定理合成。",
        "memoryMnemonic": "斜力拆直角，水平鉛直各加總，平方相加開根號。"
      }
    ],
    "workedExamples": [
      {
        "id": "ex-mec-g10-s1-m1-01",
        "title": "懸掛滑輪與繩索張力直角平衡計算",
        "targetConcept": "拉密定理與直角三角形力分解",
        "difficulty": "段考常考",
        "questionStem": "一光滑固定滑輪懸掛質量 W = 120 kgf 之重物，以兩條輕繩 AB 與 AC 繫於天花板。已知繩 AB 與水平夾角為 30°，繩 AC 與水平夾角為 60°，求繩 AB 與繩 AC 之拉力 TAB 及 TAC。",
        "beginnerThinking": "觀察兩條繩索之水平夾角：30° + 60° = 90°，因此兩繩互相垂直！這意味著兩繩拉力與重力 W 恰好構成一個直角三角形，可用三角函數迅速求得。",
        "stepByStepSolution": [
          {
            "stepNo": 1,
            "title": "繪製節點 A 之自由體圖 (FBD)",
            "content": "隔離受力節點 A，其受到向下之重力 W = 120 kgf，朝左上方與水平夾 30° 之張力 TAB，以及朝右上方與水平夾 60° 之張力 TAC。"
          },
          {
            "stepNo": 2,
            "title": "列出直角三角形或共點力平衡方程式",
            "content": "水平平衡：ΣFx = TAC·cos(60°) - TAB·cos(30°) = 0 ➜ TAC·(1/2) = TAB·(√3/2) ➜ TAC = √3 TAB。垂直平衡：ΣFy = TAB·sin(30°) + TAC·sin(60°) - 120 = 0 ➜ TAB·(1/2) + (√3 TAB)·(√3/2) = 120 ➜ 2 TAB = 120。"
          },
          {
            "stepNo": 3,
            "title": "求解繩索張力",
            "content": "解得 TAB = 60 kgf，進而代入得 TAC = 60√3 ≈ 103.92 kgf。"
          }
        ],
        "examinerTrapWarning": "切勿將繩索與鉛直線的夾角誤認為與水平線的夾角，導致正弦與餘弦函數搞混！",
        "quickMnemonic": "互垂雙繩吊重物，直角對角正餘弦，30度角對一半。",
        "finalAnswer": "TAB = 60 kgf，TAC = 60√3 kgf (約 103.92 kgf)"
      },
      {
        "id": "ex-mec-g10-s1-m1-02",
        "title": "光滑斜面圓球受水平輕繩牽引之支承反力速解",
        "targetConcept": "拉密定理與光滑斜面支承反力分解",
        "difficulty": "段考常考",
        "questionStem": "一均質光滑圓球重 W = 60 kgf，靜置於傾角 30° 之光滑斜面上，並以一條水平輕繩 AB 繫於鉛直壁上保持靜止。試求水平繩之張力 T 及斜面對圓球之法向正向反力 N。",
        "beginnerThinking": "看到「光滑」二字，斜面給球的反力 N 必定垂直於斜面（法線方向，與鉛直線夾 30°）！球受三力匯交於球心：重力 W（鉛直向下）、繩張力 T（水平向左）、反力 N（朝右上方）。這是標準的三共點力直角三角形！",
        "stepByStepSolution": [
          {
            "stepNo": 1,
            "title": "繪製球心 O 之自由體圖 (FBD)",
            "content": "隔離圓球，受重力 W = 60 kgf（向下）、水平繩張力 T（向左）、斜面正向反力 N（朝右上方，與鉛垂線夾角 30°）。"
          },
          {
            "stepNo": 2,
            "title": "由垂直方向平衡求解正向反力 N",
            "content": "垂直方向力平衡：ΣFy = N·cos(30°) - W = 0 ➜ N·(√3/2) = 60 ➜ N = 120 / √3 = 40√3 kgf ≈ 69.28 kgf。"
          },
          {
            "stepNo": 3,
            "title": "由水平方向平衡求解繩張力 T",
            "content": "水平方向力平衡：ΣFx = N·sin(30°) - T = 0 ➜ T = (40√3)·(1/2) = 20√3 kgf ≈ 34.64 kgf。"
          }
        ],
        "examinerTrapWarning": "光滑斜面反力必定垂直於斜面，千萬不要自作聰明畫成平行斜面或水平！",
        "quickMnemonic": "光滑斜面法向頂，水平拉繩垂直重，正弦水平餘弦直。",
        "finalAnswer": "T = 20√3 kgf (約 34.64 kgf)，N = 40√3 kgf (約 69.28 kgf)"
      }
    ],
    "crossReferencedQuestions": [
      {
        "id": "q-mec-g10-s1-m1-taichung",
        "sourceExam": "台中高工 112 學年度高一上工程力學第一次段考 第 10 題",
        "questionStem": "一重物 W = 100 kgf 以兩輕繩吊掛於天花板，兩繩與水平天花板之夾角分別為 30° 與 60°，試求兩繩之張力分別為何？",
        "options": {
          "A": "50 kgf, 50√3 kgf",
          "B": "50√3 kgf, 50 kgf",
          "C": "100 kgf, 50 kgf",
          "D": "50 kgf, 50 kgf"
        },
        "answer": "A",
        "detailedExplanation": "兩繩夾角 = 180° - 30° - 60° = 90°（直角三角形）。利用拉密定理或力平衡分解：繩一水平分力 T1 cos30° = T2 cos60° ➜ T1 (√3/2) = T2 (1/2) ➜ T2 = √3 T1。垂直分力 T1 sin30° + T2 sin60° = 100 ➜ T1 (1/2) + (√3 T1)(√3/2) = 100 ➜ 2 T1 = 100 ➜ T1 = 50 kgf，T2 = 50√3 kgf。故選 A。",
        "relatedKnowledgePointId": "mec-g10-s1-m1-01",
        "examTrickAnalysis": "30-60-90 特殊角標準力平衡，考查三角函數分解與拉密定理應用。"
      },
      {
        "id": "q-mec-g10-s1-m1-02",
        "sourceExam": "台中高工 111 學年度高一上工程力學第一次段考 第 14 題",
        "questionStem": "一物體受三共點力 F1、F2、F3 作用維持靜止平衡。已知 F1 = 30 N 向東，F2 = 40 N 向北，則維持平衡之第三力 F3 之大小與方向為何？",
        "options": {
          "A": "50 N，南偏西 37°",
          "B": "50 N，南偏西 53°",
          "C": "70 N，西南方",
          "D": "50 N，北偏東 37°"
        },
        "answer": "A",
        "detailedExplanation": "F1 與 F2 相互垂直，其合力 R12 = √(30² + 40²) = 50 N，方向為東偏北 tanθ = 40/30 ➜ 與正北夾 37°（即北偏東 37°）。為維持三力平衡，第三力 F3 必須與 R12 大小相等、方向完全相反，故 F3 = 50 N，方向為南偏西 37°。選 A。",
        "relatedKnowledgePointId": "mec-g10-s1-m1-02",
        "examTrickAnalysis": "三力平衡封閉三角形，第三力必為前兩力合力之反向向量，勿漏看方向轉換。"
      }
    ],
    "preExamChecklist": [
      "我能正確繪製去除支承後的物體自由體圖 (FBD)。",
      "我熟記拉密定理公式並知道僅適用於三共點力平衡。",
      "我能靈活運用 30°-60°-90° 特殊邊長比進行速算。"
    ]
  },
  {
    "id": "g10-mechanics-s1-m2",
    "grade": 10,
    "semester": "s1",
    "semesterTitle": "高一上學期",
    "period": "midterm-2",
    "periodName": "第二次段考（期中考二）",
    "weekRange": "第 11~12 週",
    "subjectSlug": "mechanics",
    "subjectName": "基礎工程力學",
    "category": "專業科目（一）",
    "targetSchool": "全國高工土木建築群指標對照",
    "examScope": "第三章 力矩與力偶、瓦里農定理 (Varignon's Theorem)、同平面非共點力系平衡 (ΣFx=0, ΣFy=0, ΣMo=0)",
    "schoolContextNotes": "段考核心轉向旋轉力矩與剛體平衡。瓦里農定理是求傾斜力之垂直力臂的必備工具，轉矩正負號定義與同平面一般力系三平衡式是本考期 70% 分數所在。",
    "scoreWeight": "佔學期學業成績 20%",
    "handoutSummary": "力矩 Mo = F·d（力乘垂直力臂）；瓦里農定理指出「合力之矩等於各分力之矩的代數和」；力偶矩是自由向量，可在平面內自由滑移而轉動效應不變！",
    "beginnerMindset": "求力矩最怕算斜斜的垂直距離 d！瓦里農定理就是救星：把斜斜的力先拆成水平跟鉛直，然後各自乘上水平與垂直坐標距離相加減，一秒破解！",
    "downloadablePdfFilename": "Arch-G10-Mechanics-S1-M2.pdf",
    "knowledgePoints": [
      {
        "id": "mec-g10-s1-m2-01",
        "title": "力矩定義、瓦里農定理 (Varignon's Theorem) 與剛體旋轉",
        "curriculumCode": "115-專一-力學-03",
        "importance": 5,
        "textbookChapter": "全華/科友 基礎工程力學 第三章 力矩與力偶",
        "intuitiveAnalogy": "拿把扳手旋轉螺栓：如果斜著用力拉扳手，要直接量螺栓中心到施力直線的垂直距離很麻煩；但只要把施力拆成「垂直扳手的旋轉力」和「順著扳手的軸向力」，只有旋轉力會產生力矩，軸向力直接通過螺栓產生零力矩，一口氣變超簡單！",
        "summary": "力矩大小 Mo = F·d，其中 d 為旋轉中心 O 點至力之作用線的垂直距離（力臂）。瓦里農定理（力矩原理）：平面力系中各分力對任一點 O 之力矩代數和，等於其合力對同一點 O 之力矩，即 Mo = Σ(Fi·di) = R·d_R。在直角座標系中，Mo = x·Fy - y·Fx（逆時針為正）。",
        "keyFormulaOrRule": "Mo = F·d；瓦里農定理：Mo = Σ(x·Fy - y·Fx)；剛體平面平衡三條件：ΣFx = 0, ΣFy = 0, ΣMo = 0。",
        "cramTips": [
          "力之作用線通過取矩點者，其力矩必等於零（d = 0）！",
          "常用正負號慣例：逆時針旋轉力矩為正 (+)，順時針旋轉力矩為負 (-)。",
          "求斜向力之力矩，一律使用瓦里農定理拆成水平與垂直分力分別取矩！"
        ],
        "trapWarning": "計算力矩千萬不可拿斜力直接乘上構件全長！力臂必須是「垂直距離」，非垂直長度乘力即得零分！",
        "junyiMasterySkill": "瓦里農定理分力取矩與剛體平衡三條件"
      },
      {
        "id": "mec-g10-s1-m2-02",
        "title": "力偶矩之自由向量特性與力的平行移動等效系",
        "curriculumCode": "115-專一-力學-04",
        "importance": 4,
        "textbookChapter": "全華/科友 基礎工程力學 第三章 力偶與等效力系",
        "intuitiveAnalogy": "雙手握方向盤開車轉向：左手上推 5 公斤、右手下拉 5 公斤，兩力大小相等方向相反，方向盤不會往上飛也不會往下掉（合力為零），但會順暢地原地旋轉！這就是純粹的力偶！",
        "summary": "力偶 (Couple)：由大小相等、方向相反且作用線平行的兩力組成。力偶合力為零 (R = 0)，因此力偶絕不產生任何直線移動，僅產生純旋轉效應。力偶矩 M = F·d 對平面內任一點皆相等，為「自由向量 (Free Vector)」。力的平行移動原理：將作用於 A 點之大小為 F 的力平行移至 O 點，必須同時在 O 點附加一個大小為 Mo = F·d 之力偶矩，二者方為等效力系。",
        "keyFormulaOrRule": "力偶矩 M = F·d (自由向量，與取矩點位置無關)；力平移等效系：力 F + 附加力偶 Mo = F·d。",
        "cramTips": [
          "力偶在剛體平面上可以任意平移與旋轉，其對剛體的作用外效應完全不變！",
          "同平面內的多個力偶矩，可以直接代數相加合成單一力偶矩。",
          "任何單力 F 都可以等效簡化為任一點之同向力 F 加上附加力偶矩！"
        ],
        "trapWarning": "力偶不能用單一個力來平衡！力偶只能用力偶來平衡；若題目問「力偶之合力大小為何」，答案必為「零」！",
        "junyiMasterySkill": "力偶矩自由向量合成與等效力系簡化"
      }
    ],
    "cramFormulaCards": [
      {
        "title": "瓦里農定理直角座標取矩卡",
        "formula": "Mo = x · Fy - y · Fx",
        "notes": "x 為力作用點之水平距離，y 為鉛直距離，逆時針旋轉定為正。",
        "memoryMnemonic": "分力取矩代替斜力，水平乘直距、鉛直乘平距。"
      },
      {
        "title": "力偶矩與力的平移卡",
        "formula": "M = F · d  (自由向量),   F_at_O = F + Mo",
        "notes": "力偶合力恆為零；力平移必須隨身附贈一個 F·d 力偶。",
        "memoryMnemonic": "力偶純轉不位移，力要搬家帶力偶。"
      }
    ],
    "workedExamples": [
      {
        "id": "ex-mec-g10-s1-m2-01",
        "title": "懸臂構架斜向施力之瓦里農分力力矩計算",
        "targetConcept": "瓦里農定理分力取矩代數和",
        "difficulty": "段考常考",
        "questionStem": "一 L 型水平懸臂梁固定於 O 點，水平段 OA 長 3 m，垂直向下段 AB 長 2 m。在 B 端施加一大小 F = 100 kgf、與水平夾角 37° 朝右上方之拉力 (sin37°=0.6, cos37°=0.8)。求此力對 O 點所產生的力矩 Mo。",
        "beginnerThinking": "直接求 O 點到斜力線的垂直距離極為繁瑣。用瓦里農定理：先將 B 點之斜力 F 分解成水平分力 Fx 與垂直分力 Fy，然後分別乘以它們相對於 O 點之垂直力臂相加！",
        "stepByStepSolution": [
          {
            "stepNo": 1,
            "title": "分解斜向力 F 為正交水平與垂直分力",
            "content": "水平分力 Fx = 100·cos(37°) = 100·0.8 = 80 kgf (朝右)。垂直分力 Fy = 100·sin(37°) = 100·0.6 = 60 kgf (朝上)。"
          },
          {
            "stepNo": 2,
            "title": "確定各分力對 O 點之力臂與旋轉轉向",
            "content": "點 B 坐標相對於 O 為 x = +3 m，y = -2 m。水平分力 Fx (朝右) 對 O 點之垂直臂長為 2 m，使 O 產生「逆時針旋轉 (+)」力矩：M1 = +Fx·y = +80·2 = +160 kgf·m。垂直分力 Fy (朝上) 對 O 點之水平臂長為 3 m，使 O 產生「逆時針旋轉 (+)」力矩：M2 = +Fy·x = +60·3 = +180 kgf·m。"
          },
          {
            "stepNo": 3,
            "title": "代數相加求合力矩 Mo",
            "content": "Mo = M1 + M2 = +160 + (+180) = +340 kgf·m (逆時針方向)。"
          }
        ],
        "examinerTrapWarning": "注意兩分力對支承 O 點之旋轉方向！水平力 Fx 在 O 點下方朝右，繞 O 轉為逆時針；鉛直力 Fy 在 O 點右方朝上，繞 O 亦為逆時針，兩者同號相加！",
        "quickMnemonic": "斜力拆直角，水平乘高、鉛直乘寬，轉向同號就相加。",
        "finalAnswer": "Mo = 340 kgf·m (逆時針旋轉)"
      },
      {
        "id": "ex-mec-g10-s1-m2-02",
        "title": "複合剛架等效力與力偶之主矩簡化計算",
        "targetConcept": "力的平行移動原理與力偶合成",
        "difficulty": "高手衝刺",
        "questionStem": "一平板受三力作用：在 A(0, 2m) 處受 F1 = 50 N 向右；在 B(4m, 0) 處受 F2 = 30 N 向上；另有一順時針力偶 M = 80 N·m 作用於板上。求此力系對原點 O(0,0) 的等效主矢 R 與等效主矩 Mo。",
        "beginnerThinking": "等效主矢 R 就是所有外力的向量和（力偶不貢獻主矢！）；等效主矩 Mo 就是所有外力對 O 點之力矩代數和，再加上板上既有的自由力偶矩！",
        "stepByStepSolution": [
          {
            "stepNo": 1,
            "title": "計算等效主矢 R 之水平與鉛直分量",
            "content": "Rx = ΣFx = F1 = +50 N；Ry = ΣFy = F2 = +30 N。合力大小 R = √(50² + 30²) = √(2500 + 900) = √3400 ≈ 58.31 N。"
          },
          {
            "stepNo": 2,
            "title": "計算各力對原點 O 點之力矩代數和",
            "content": "F1 (在 y=2m 處向右) 繞 O 為順時針 (-)：M_F1 = -50·2 = -100 N·m。F2 (在 x=4m 處向上) 繞 O 為逆時針 (+)：M_F2 = +30·4 = +120 N·m。"
          },
          {
            "stepNo": 3,
            "title": "計入板上力偶矩並求總主矩 Mo",
            "content": "既有力偶 M = 80 N·m (順時針定為負 -80)。總主矩 Mo = M_F1 + M_F2 + M_couple = -100 + 120 - 80 = -60 N·m (即 60 N·m 順時針)。"
          }
        ],
        "examinerTrapWarning": "切記力偶矩是「自由向量」，不要因為它畫在某個位置就再去乘距離！力偶矩直接數值代數相加減！",
        "quickMnemonic": "主矢只加力，主矩力臂加力偶，力偶直接加減不用乘。",
        "finalAnswer": "主矢 R ≈ 58.31 N (與水平夾 31°)，主矩 Mo = 60 N·m (順時針)"
      }
    ],
    "crossReferencedQuestions": [
      {
        "id": "q-mec-g10-s1-m2-taichung",
        "sourceExam": "台中高工 112 學年度高一上工程力學第二次段考 第 18 題",
        "questionStem": "一剛體平板上有一大小為 20 N·m 之逆時針力偶，若想在板上距此力偶 3 m 處施加單一力使其平衡，試問需要多大的力？",
        "options": {
          "A": "無法以單一力平衡",
          "B": "6.67 N 向下",
          "C": "60 N 向上",
          "D": "20 N 向左"
        },
        "answer": "A",
        "detailedExplanation": "力偶之合力為零 (ΣF = 0)，其唯一效應為轉動。若施加單一力，必使剛體產生直線加速度而破壞合力平衡 (ΣF ≠ 0)。因此「力偶只能由另一個大小相等、轉向相反之力偶來平衡，絕無法由單一力平衡」。故選 A。",
        "relatedKnowledgePointId": "mec-g10-s1-m2-02",
        "examTrickAnalysis": "力偶基本觀念陷阱題。力偶純轉動，合力為零，單力必引入合力，故單力無法平衡力偶。"
      },
      {
        "id": "q-mec-g10-s1-m2-02",
        "sourceExam": "台中高工 111 學年度高一上工程力學第二次段考 第 12 題",
        "questionStem": "如圖所示，一長度 4 m 之均質簡支梁 AB，A 端為鉸支承，B 端為滾支承。梁上受一順時針方向之力偶矩 M = 120 N·m 作用於梁中央，試求 A 端支承之垂直反力 RA 為何？",
        "options": {
          "A": "30 N (向上)",
          "B": "30 N (向下)",
          "C": "60 N (向上)",
          "D": "0 N"
        },
        "answer": "B",
        "detailedExplanation": "取 B 點為取矩中心：ΣMB = 0 ➜ RA·4 + 120 = 0 ➜ RA = -120 / 4 = -30 N (負號表示方向與假設相反，即向下 30 N)。同時 ΣFy = 0 ➜ RB = +30 N (向上)。RA 與 RB 形成逆時針力偶 30·4 = 120 N·m，恰與外加順時針力偶抵消平衡。故選 B。",
        "relatedKnowledgePointId": "mec-g10-s1-m2-01",
        "examTrickAnalysis": "受力偶作用之簡支梁兩端支承反力大小相等、方向相反，構成反向力偶以達成轉動平衡。"
      }
    ],
    "preExamChecklist": [
      "我能熟練將斜力正交分解並利用瓦里農定理快速求矩。",
      "我理解力偶合力為零且為自由向量之核心物理意義。",
      "我能正確列出同平面非共點力系之三平衡方程式求支承反力。"
    ]
  },
  {
    "id": "g10-mechanics-s1-final",
    "grade": 10,
    "semester": "s1",
    "semesterTitle": "高一上學期",
    "period": "final",
    "periodName": "期末考（學期結業考）",
    "weekRange": "第 18~20 週",
    "subjectSlug": "mechanics",
    "subjectName": "基礎工程力學",
    "category": "專業科目（一）",
    "targetSchool": "全國高工土木建築群指標對照",
    "examScope": "第四章 重心與形心（組合面積一次矩 ΣAi·xi）、第五章 摩擦力（庫侖摩擦定律、摩擦角與傾覆臨界）",
    "schoolContextNotes": "上學期結業壓軸。形心與摩擦是高二材料力學與結構分析的絕對先備門檻。形心計算佔 40%、庫侖摩擦定律與斜面/箱體傾覆臨界佔 60%。",
    "scoreWeight": "佔學期學業成績 30%",
    "handoutSummary": "形心是幾何面積的平衡點：X = (ΣAi·xi) / ΣAi；摩擦力大小隨外力增長，最大靜摩擦力 fs,max = μs·N；箱體推力是滑動還是先翻倒，看推力高度與臨界高度之比！",
    "beginnerMindset": "求組合形心就像算全班平均分數：把複雜形狀切成幾個簡單矩形或三角形，各自算出面積跟各自的中心點，乘完加起來除以總面積就搞定了！",
    "downloadablePdfFilename": "Arch-G10-Mechanics-S1-Final.pdf",
    "knowledgePoints": [
      {
        "id": "mec-g10-s1-final-01",
        "title": "平面複合形心坐標計算與一次面積矩",
        "curriculumCode": "115-專一-力學-05",
        "importance": 5,
        "textbookChapter": "全華/科友 基礎工程力學 第四章 重心與形心",
        "intuitiveAnalogy": "想像用指尖頂住一塊形狀奇怪的厚紙板：指尖必須頂在恰好讓紙板不傾倒的那一個平衡點，這就是「形心」！把紙板切成幾個規則幾何形狀，指尖頂的位置就是各小塊面積的加權平均值！",
        "summary": "平面圖形之形心坐標公式：X_bar = (Σ Ai · xi) / (Σ Ai)，Y_bar = (Σ Ai · yi) / (Σ Ai)。若有挖空或孔洞，該部分面積 Ai 應視為「負值 (-)」代入計算。對稱軸定理：若平面圖形具備一條對稱軸，則其形心必落在此對稱軸上；若具備兩條正交對稱軸，兩軸交點即為形心！",
        "keyFormulaOrRule": "X_bar = (ΣAi·xi) / ΣAi, Y_bar = (ΣAi·yi) / ΣAi；挖孔面積以負值計入；形心必在對稱軸上。",
        "cramTips": [
          "直角三角形形心距離直角邊恆為「底寬的三分之一 (b/3)」與「高度的三分之一 (h/3)」！",
          "半圓形 (半徑 R) 形心距離底直徑直線為 4R / (3π) ≈ 0.424 R！",
          "對稱圖形直接由對稱軸定出一半坐標，大幅減少計算量！"
        ],
        "trapWarning": "計算直角三角形形心時，切記「三分之一是從直角邊算起」，若是從尖端角算起則是「三分之二 (2/3)」！搞反常失分大半！",
        "junyiMasterySkill": "複合圖形面積一次矩與形心坐標速算"
      },
      {
        "id": "mec-g10-s1-final-02",
        "title": "庫侖摩擦定律、摩擦角與滑動傾覆臨界判定",
        "curriculumCode": "115-專一-力學-06",
        "importance": 5,
        "textbookChapter": "全華/科友 基礎工程力學 第五章 摩擦",
        "intuitiveAnalogy": "推一個高大的衣櫃：如果你在衣櫃底部輕輕推，衣櫃會在地板上乖乖平移滑動；但如果你跑到衣櫃頂部用力猛推，衣櫃底部還沒滑動，整座衣櫃就先像倒木一樣翻倒了！這就是推力高度超過了「傾覆臨界高度」！",
        "summary": "庫侖摩擦定律 (Coulomb's Law)：靜摩擦力 0 ≦ fs ≦ fs,max = μs·N。動摩擦力 fk = μk·N (μk < μs)。摩擦角 φ：tan φ = μs = fs,max / N。斜面自鎖條件：斜面傾角 θ ≦ φ 時，物體必定靜止不自發下滑。箱體臨界推力分析：寬 b、高 h 之箱體受水平推力 P，臨界推力高度 hcrit = b / (2·μs)。若作用高度 h < hcrit 則「先滑動」；若 h > hcrit 則「先傾覆翻倒」！",
        "keyFormulaOrRule": "fs,max = μs·N；tan φ = μs；滑動 vs 傾覆臨界高度：hcrit = b / (2·μs)。",
        "cramTips": [
          "靜摩擦力 fs 不是恆定常數！它隨外力大小自動變化，直到達到最大值 μs·N！",
          "物體即將滑動瞬間稱為「臨界運動狀態 (Impending Motion)」。",
          "動摩擦係數 μk 恆小於靜摩擦係數 μs，所以推動之後會感覺變輕鬆！"
        ],
        "trapWarning": "物體靜止時，摩擦力大小「等於施加的水平外力」，千萬不要直接套用 μs·N！只有在「即將滑動」時摩擦力才等於 μs·N！",
        "junyiMasterySkill": "庫侖摩擦定律與物體滑動傾覆臨界判定"
      }
    ],
    "cramFormulaCards": [
      {
        "title": "複合圖形形心坐標公式卡",
        "formula": "X_bar = (Σ Ai · xi) / Σ Ai,  Y_bar = (Σ Ai · yi) / Σ Ai",
        "notes": "實體面積為正 (+)，挖空挖孔面積為負 (-)。",
        "memoryMnemonic": "形心加權求平均，挖孔視負減面積。"
      },
      {
        "title": "摩擦角與傾覆臨界高度卡",
        "formula": "tan φ = μs,   hcrit = b / (2 · μs)",
        "notes": "推力作用點高於 hcrit 則先翻倒，低於 hcrit 則先平移滑動。",
        "memoryMnemonic": "斜面自鎖看角切，高推先翻低推滑。"
      }
    ],
    "workedExamples": [
      {
        "id": "ex-mec-g10-s1-final-01",
        "title": "組合 T 型截面之形心軸 Y_bar 位置計算",
        "targetConcept": "組合面積一次矩求形心坐標",
        "difficulty": "段考常考",
        "questionStem": "一鋼結構 T 型斷面，上翼緣板寬 200 mm、厚 20 mm；下腹板高 180 mm、厚 20 mm（腹板頂端與翼緣板底面焊接）。以翼緣板頂面為基準線，求此 T 型斷面形心至頂面的距離 Y_bar。",
        "beginnerThinking": "T 型斷面左右對稱，故水平形心必在對稱中心線上。垂直形心只需將 T 型拆成「上翼板」與「下腹板」兩個矩形，分別求出各自的面積與各自形心到頂面的距離，套入加權平均公式即可！",
        "stepByStepSolution": [
          {
            "stepNo": 1,
            "title": "計算翼板與腹板之面積及各自形心坐標",
            "content": "區塊 1 (翼板)：A1 = 200 × 20 = 4000 mm²。其形心至頂面距離 y1 = 20 / 2 = 10 mm。區塊 2 (腹板)：A2 = 20 × 180 = 3600 mm²。其形心至頂面距離 y2 = 20 + (180 / 2) = 20 + 90 = 110 mm。"
          },
          {
            "stepNo": 2,
            "title": "計算總面積與一次面積矩代數和",
            "content": "總面積 ΣA = A1 + A2 = 4000 + 3600 = 7600 mm²。一次面積矩 Σ(Ai·yi) = (4000 × 10) + (3600 × 110) = 40,000 + 396,000 = 436,000 mm³。"
          },
          {
            "stepNo": 3,
            "title": "求整體形心至頂面之距離 Y_bar",
            "content": "Y_bar = 436,000 / 7600 ≈ 57.37 mm。"
          }
        ],
        "examinerTrapWarning": "計算腹板形心 y2 時，切勿只算 180/2=90 mm！必須累加上方翼板厚度 20 mm，故基準距離為 20 + 90 = 110 mm！",
        "quickMnemonic": "形心基準要一致，累加厚度莫忘記，加權總和除面積。",
        "finalAnswer": "Y_bar ≈ 57.37 mm (距頂面)"
      },
      {
        "id": "ex-mec-g10-s1-final-02",
        "title": "方形箱體水平推力之滑動或傾覆臨界判定",
        "targetConcept": "摩擦力與物體滑動傾覆臨界分析",
        "difficulty": "高手衝刺",
        "questionStem": "一均質方形木箱重量 W = 100 kgf，底寬 b = 60 cm，高 h = 100 cm，置於粗糙水平地面上。已知木箱與地面之靜摩擦係數 μs = 0.4。若在木箱左側距地面高 H 處施加水平推力 P，求：(1) 若推力點高 H = 80 cm，木箱會先滑動還是先傾覆？(2) 使木箱產生運動所需的最小推力 P 為何？",
        "beginnerThinking": "分別計算「發生滑動所需推力 P_slip」與「發生傾覆所需推力 P_tip」，兩者之中較小者即為「先發生之運動狀態」！或者直接用臨界高度公式 Hcrit = b / (2·μs) 一秒判定！",
        "stepByStepSolution": [
          {
            "stepNo": 1,
            "title": "使用臨界高度公式快速判定運動形式",
            "content": "臨界高度 Hcrit = b / (2·μs) = 60 / (2 × 0.4) = 60 / 0.8 = 75 cm。題目給定施力高度 H = 80 cm > Hcrit (75 cm)，因此「木箱必先發生傾覆 (翻倒)」，而不會先滑動！"
          },
          {
            "stepNo": 2,
            "title": "計算發生傾覆所需的臨界推力 P_tip",
            "content": "即將傾覆時，地面反力 N 集中於右下角樞紐點 O。對 O 點取矩平衡：ΣMo = 0 ➜ P_tip × H - W × (b / 2) = 0 ➜ P_tip × 80 = 100 × 30 ➜ P_tip = 3000 / 80 = 37.5 kgf。"
          },
          {
            "stepNo": 3,
            "title": "比對滑動所需推力 P_slip 驗證",
            "content": "發生滑動所需推力 P_slip = fs,max = μs·W = 0.4 × 100 = 40 kgf。因為 P_tip (37.5 kgf) < P_slip (40 kgf)，故當推力增加至 37.5 kgf 時，木箱立即傾覆！"
          }
        ],
        "examinerTrapWarning": "很多學生看到摩擦係數就直接算 P = μs·W = 40 kgf，完全忽略了高處推木箱會先翻倒！必須同時檢核力矩傾覆！",
        "quickMnemonic": "臨界高寬除二繆，推高先翻推低滑，雙算取小定乾坤。",
        "finalAnswer": "(1) 先傾覆 (翻倒)；(2) 最小所需推力 P = 37.5 kgf"
      }
    ],
    "crossReferencedQuestions": [
      {
        "id": "q-mec-g10-s1-final-taichung",
        "sourceExam": "台中高工 112 學年度高一上工程力學期末考 第 22 題",
        "questionStem": "一質量 50 kg 之物體靜置於傾角 30° 之粗糙斜面上，物體與斜面間之靜摩擦係數 μs = 0.6。若無任何外力作用，則此物體於斜面上所受之摩擦力大小為何？(g = 9.8 m/s²)",
        "options": {
          "A": "245 N",
          "B": "254.6 N",
          "C": "0 N",
          "D": "490 N"
        },
        "answer": "A",
        "detailedExplanation": "首先檢核自鎖摩擦角：tan φ = μs = 0.6 ➜ φ ≈ 31°。因為斜面傾角 θ = 30° < φ (31°)，物體處於「靜止平衡狀態」，尚未達到最大靜摩擦力！此時靜摩擦力等於重力沿斜面下滑分力：fs = W · sin(30°) = (50 × 9.8) × 0.5 = 245 N。故選 A。",
        "relatedKnowledgePointId": "mec-g10-s1-final-02",
        "examTrickAnalysis": "段考最致命陷阱！學生常直接套公式算 fs,max = μs·N = 0.6·50·9.8·cos30° = 254.6 N (選項 B) 而被扣分！物體未滑動時，摩擦力等於沿斜面下滑力！"
      },
      {
        "id": "q-mec-g10-s1-final-02",
        "sourceExam": "台中高工 111 學年度高一上工程力學期末考 第 16 題",
        "questionStem": "一矩形截面寬 b = 12 cm、高 h = 18 cm，其正中央挖去一個直徑 d = 6 cm 之圓孔。試問此截面之形心位置為何？",
        "options": {
          "A": "恰在矩形之幾何中心 (距底面 9 cm 處)",
          "B": "偏在圓孔上方 1 cm 處",
          "C": "距底面 6 cm 處",
          "D": "距底面 12 cm 處"
        },
        "answer": "A",
        "detailedExplanation": "原矩形具有水平與垂直兩條正交對稱軸，圓孔亦為對稱圖形且孔心恰位於矩形幾何中心。依對稱軸定理，整體圖形仍對稱於這兩條軸，故形心位置不變，恰在原幾何中心 (距底面 18/2 = 9 cm 處)。選 A。",
        "relatedKnowledgePointId": "mec-g10-s1-final-01",
        "examTrickAnalysis": "對稱挖孔題型，只要挖孔中心與母體幾何中心重合，不必繁複計算面積矩，直接由對稱性秒殺！"
      }
    ],
    "preExamChecklist": [
      "我能熟練計算組合圖形形心並能正確扣除挖孔面積。",
      "我能在摩擦力計算中明確區分「實際靜摩擦力」與「最大靜摩擦力」。",
      "我熟記物體傾覆與滑動臨界高度判別公式 Hcrit = b / (2·μs)。"
    ]
  },
  {
    "id": "g10-mechanics-s2-m1",
    "grade": 10,
    "semester": "s2",
    "semesterTitle": "高一下學期",
    "period": "midterm-1",
    "periodName": "第一次段考（期中考一）",
    "weekRange": "第 6~7 週",
    "subjectSlug": "mechanics",
    "subjectName": "基礎工程力學",
    "category": "專業科目（一）",
    "targetSchool": "全國高工土木建築群指標對照",
    "examScope": "第六章 桁架分析（靜定桁架判別 m = 2j - 3、節點法、截面法與零力桿快速判別）",
    "schoolContextNotes": "高一下工程力學關鍵戰役。建築屋架與鋼構橋樑核心。考題以「三種零力桿速殺特徵」、截面法剖切求跨中指定桿件桿力為主，計算速度直接決定得分。",
    "scoreWeight": "佔學期學業成績 20%",
    "handoutSummary": "桁架節點全是鉸接，桿件只受純拉或純壓；三種零力桿特徵是考場省時神器；想求跨中單根桿力，立刻用截面法一刀切斷三桿，取交點取矩一式秒殺！",
    "beginnerMindset": "看到桁架別怕！先用眼睛掃一遍所有節點找「零力桿」，直接劃掉不用算；如果題目只要算其中一兩根桿子，千萬別傻傻從頭節點法慢慢推，直接截面法一刀切過去！",
    "downloadablePdfFilename": "Arch-G10-Mechanics-S2-M1.pdf",
    "knowledgePoints": [
      {
        "id": "mec-g10-s2-m1-01",
        "title": "平面桁架分析：節點法與零力桿判別鐵律",
        "curriculumCode": "115-專一-力學-07",
        "importance": 5,
        "textbookChapter": "全華/科友 基礎工程力學 第六章 桁架",
        "intuitiveAnalogy": "零力桿就像合唱團裡只對嘴不出聲的歌手：雖然它現在沒使勁，但為了維持整個陣型穩定或預防突如其來的側風，它依然不可或缺！找零力桿就像在合唱團裡找誰沒張嘴，看幾何角度一眼看破！",
        "summary": "桁架基本假設：桿件皆為直桿、節點皆為理想無摩擦光滑鉸接、載重僅作用於節點上，故所有桿件僅承受純軸向拉力 (Tension +) 或壓力 (Compression -)。零力桿三大判別鐵律：① 兩桿共節點且不共線，節點上無外力，則兩桿皆為零力桿；② 三桿共節點，其中兩桿共線，第三桿非共線且節點無外力，則第三桿必為零力桿；③ 兩桿共線且節點受外力，外力若與兩桿共線，則無垂直分量桿件為零力桿。",
        "keyFormulaOrRule": "靜定桁架充要條件：m = 2j - 3 (m 桿數, j 節點數)；零力桿三大幾何判別法。",
        "cramTips": [
          "看節點先數桿數：兩桿無外力兩桿皆零；三桿兩共線第三桿必零！",
          "若節點有外力作用，外力沿某桿共線，則不共線的第三桿依然是零力桿！",
          "拉力桿 (T) 箭頭背離節點；壓力桿 (C) 箭頭指向節點。"
        ],
        "trapWarning": "零力桿是指在「當前特定載重狀態下」內力為零，絕不可隨意拆除！若拆除桁架幾何結構將變為不穩定可動機構！",
        "junyiMasterySkill": "平面桁架節點法與零力桿快速清查技術"
      },
      {
        "id": "mec-g10-s2-m1-02",
        "title": "桁架截面法 (Method of Sections) 與單式求解",
        "curriculumCode": "115-專一-力學-08",
        "importance": 5,
        "textbookChapter": "全華/科友 基礎工程力學 第六章 截面法",
        "intuitiveAnalogy": "切西瓜：如果只想吃西瓜中心最甜的那一口，何必把西瓜皮一層層慢慢削？直接一刀剖開切到核心！截面法就是這把西瓜刀，一刀剖切過你想求的那根桿件，只留半邊西瓜來算！",
        "summary": "截面法操作 SOP：① 虛擬作一剖切截面 1-1，將整體桁架完全分割為左、右兩獨立部分；② 剖切線切斷之未知桿件數「原則上不得超過 3 根」；③ 選取受力較單純之一側為隔離體 (FBD)；④ 取另外兩根未知桿件之作用線交點 O 為取矩中心，列出 ΣMo = 0，即可由單一獨立方程式直接求出第三根未知桿之軸力！",
        "keyFormulaOrRule": "剖切未知桿 ≦ 3 根；利用兩未知桿交點取矩 ΣMo = 0 一式求解；斜腹桿利用 ΣFy = 0 投影求解。",
        "cramTips": [
          "求跨中上弦桿或下弦桿：取對應垂直節點取矩 ΣMo = 0 秒殺！",
          "求斜腹桿軸力：利用垂直力平衡 ΣFy = 0，由斜桿之垂直分量平衡外剪力！",
          "假設桿件受拉 (箭頭向外拉離截面)，算得正值為拉力 (T)，負值為壓力 (C)。"
        ],
        "trapWarning": "剖切線不可把一個節點完全包圍（那叫節點法），且不可切斷超過 3 根未知桿件，否則三個平衡式無法解出四個未知數！",
        "junyiMasterySkill": "截面法虛擬切剖與單式速解指定桿件"
      }
    ],
    "cramFormulaCards": [
      {
        "title": "桁架靜定度判別公式卡",
        "formula": "m = 2 · j - 3",
        "notes": "m 為總桿件數，j 為總節點數。小於為不穩定，大於為靜不定。",
        "memoryMnemonic": "桿數等於兩倍節點減三，少桿可動多桿超靜定。"
      },
      {
        "title": "截面法解題黃金心法卡",
        "formula": "ΣMo = 0  (取另兩桿交點 O)",
        "notes": "一刀切三桿，兩桿交點取力矩，單一方程式直接求第三桿。",
        "memoryMnemonic": "切剖不過三，兩桿交點取力矩，一式解一桿。"
      }
    ],
    "workedExamples": [
      {
        "id": "ex-mec-g10-s2-m1-01",
        "title": "普拉特桁架 (Pratt Truss) 零力桿快速清查與桿力計算",
        "targetConcept": "三桿兩共線零力桿特徵判別",
        "difficulty": "段考常考",
        "questionStem": "一 6 格對稱普拉特鋼桁架，下弦節點 A 為鉸支承，G 為滾支承，各格跨度 2 m，桁架高 2 m。僅在中央下弦節點 D 處受一向下集中載重 P = 60 kN。試快速判別整體桁架中共有哪幾根零力桿？並求支承反力 RA 及 RG。",
        "beginnerThinking": "對稱桁架受對稱載重，兩端支承反力各分一半！接著檢視無外力作用之節點，利用「三桿共節點且兩桿共線、第三桿無外力」特徵秒殺所有垂直零力桿！",
        "stepByStepSolution": [
          {
            "stepNo": 1,
            "title": "計算支承反力",
            "content": "整體結構對稱且中央受載重 P = 60 kN。由對稱性或 ΣMA = 0 立即解得：RA = RG = 60 / 2 = 30 kN (向上)。水平反力 H_A = 0。"
          },
          {
            "stepNo": 2,
            "title": "清查無外力節點之零力桿",
            "content": "檢視下弦節點 B：三桿共節點，AB 與 BC 共線，垂直桿 BB' 非共線且節點 B 無外力，故桿 BB' 必為零力桿！同理檢視對稱側節點 F：垂直桿 FF' 亦為零力桿！"
          },
          {
            "stepNo": 3,
            "title": "檢視上弦端節點",
            "content": "在端節點 A' 處若斜腹桿與上弦桿交會且無外力，可進一步判定其受力狀態。本題確定垂直桿 BB' 與 FF' 內力為 0。"
          }
        ],
        "examinerTrapWarning": "節點 D 受到向下外力 P，因此垂直桿 DD' 承受外力傳遞，絕對不是零力桿！切勿死背「所有垂直桿都是零力桿」！",
        "quickMnemonic": "無外力節點三桿碰頭兩共線，落單第三桿必是零力桿。",
        "finalAnswer": "RA = 30 kN (向上)，RG = 30 kN (向上)；垂直桿 BB' 與 FF' 為零力桿。"
      },
      {
        "id": "ex-mec-g10-s2-m1-02",
        "title": "華倫桁架 (Warren Truss) 截面一切切斷三桿求解斜腹桿軸力",
        "targetConcept": "截面法垂直投影平衡求斜腹桿",
        "difficulty": "高手衝刺",
        "questionStem": "一正三角形單元組成的華倫桁架（桿長均為 2 m，內角均為 60°，高 h = √3 m），跨度 6 m，左端 A 鉸支承，右端 D 滾支承。在左第一跨上弦節點 B 處受一向下集中力 P = 120 kN。試以截面法求第一斜腹桿之軸力。",
        "beginnerThinking": "求斜腹桿內力，最好的方法是用截面法切過該斜桿、上弦桿與下弦桿！因為上弦與下弦均為水平，整個截面上只有這根斜腹桿具有「垂直分量」，直接列垂直平衡 ΣFy = 0 一秒出解！",
        "stepByStepSolution": [
          {
            "stepNo": 1,
            "title": "求支承反力 RA",
            "content": "取 D 點為矩心：ΣMD = 0 ➜ RA × 6 - 120 × 5 = 0 ➜ RA = 600 / 6 = 100 kN (向上)。"
          },
          {
            "stepNo": 2,
            "title": "作截面 1-1 並取左半段為隔離體 (FBD)",
            "content": "虛擬截面切斷第一格上弦桿、斜腹桿 AB' 與下弦桿。左側隔離體僅受向上支承反力 RA = 100 kN 與被切斷的三桿內力。"
          },
          {
            "stepNo": 3,
            "title": "列垂直平衡方程式 ΣFy = 0 求斜桿軸力 F_diag",
            "content": "水平上弦與下弦桿之垂直分量皆為 0。假設斜腹桿受拉（朝右上方與水平夾 60°）：ΣFy = RA + F_diag · sin(60°) = 0 ➜ 100 + F_diag · (√3 / 2) = 0 ➜ F_diag = -200 / √3 ≈ -115.47 kN (負號表示為壓力 C)。"
          }
        ],
        "examinerTrapWarning": "注意正負號！算出來為負值代表原假設拉力相反，該桿件實際承受「壓力 (Compression)」，寫答案時要標明數值與 (C)！",
        "quickMnemonic": "截面切斷求斜桿，水平弦桿無垂直，斜桿獨扛外剪力。",
        "finalAnswer": "斜腹桿軸力 = 200/√3 kN ≈ 115.47 kN (壓力 C)"
      }
    ],
    "crossReferencedQuestions": [
      {
        "id": "q-mec-g10-s2-m1-taichung",
        "sourceExam": "台中高工 112 學年度高一下工程力學第一次段考 第 15 題",
        "questionStem": "一平面靜定桁架共有 11 個節點，試問該桁架依靜定條件 m = 2j - 3 應具備多少根桿件？",
        "options": {
          "A": "19 根",
          "B": "22 根",
          "C": "25 根",
          "D": "18 根"
        },
        "answer": "A",
        "detailedExplanation": "依靜定平面桁架之桿數與節點數公式：m = 2 · j - 3。已知 j = 11，故 m = 2 × 11 - 3 = 22 - 3 = 19 根。選 A。",
        "relatedKnowledgePointId": "mec-g10-s2-m1-01",
        "examTrickAnalysis": "必考送分基本公式，牢記「兩倍節點減三」，注意是減 3 不是減 2。"
      },
      {
        "id": "q-mec-g10-s2-m1-02",
        "sourceExam": "台中高工 111 學年度高一下工程力學第一次段考 第 18 題",
        "questionStem": "在桁架分析中，若想求出桁架正中央某一根腹桿之內力，下列何種方法最快速且計算步驟最少？",
        "options": {
          "A": "截面法 (Method of Sections)",
          "B": "節點法 (Method of Joints)",
          "C": "圖解法 (Cremona Plan)",
          "D": "拉密定理"
        },
        "answer": "A",
        "detailedExplanation": "節點法必須從支承端逐一解各節點推進至跨中，累積步驟多且容易連鎖算錯；截面法可直接作虛擬切面剖過指定桿件，利用單一方程式即可獨立解出該桿內力，速度最快。選 A。",
        "relatedKnowledgePointId": "mec-g10-s2-m1-02",
        "examTrickAnalysis": "考查解題策略選擇：全求用節點，單求用截面。"
      }
    ],
    "preExamChecklist": [
      "我能熟練背出並運用零力桿三大判別鐵律。",
      "我能熟練運用截面法切剖不超過三桿並取矩求解指定桿件。",
      "我清楚桁架桿件拉力 (T) 為正、壓力 (C) 為負之工程定義。"
    ]
  },
  {
    "id": "g10-mechanics-s2-m2",
    "grade": 10,
    "semester": "s2",
    "semesterTitle": "高一下學期",
    "period": "midterm-2",
    "periodName": "第二次段考（期中考二）",
    "weekRange": "第 11~12 週",
    "subjectSlug": "mechanics",
    "subjectName": "基礎工程力學",
    "category": "專業科目（一）",
    "targetSchool": "全國高工土木建築群指標對照",
    "examScope": "第七章 梁之內力與應力（剪力圖 V 與彎矩圖 M、載重-剪力-彎矩微積分關係、危險斷面 Mmax）",
    "schoolContextNotes": "工程力學全書難度最高、統測每年必出 2~3 題之超級核心。梁之剪力圖 (V-Diagram) 與彎矩圖 (M-Diagram) 繪製、剪力為零處彎矩極大值計算，佔段考成績 75%。",
    "scoreWeight": "佔學期學業成績 25%",
    "handoutSummary": "微積分黃金鐵律：剪力是載重之積分 (dV/dx = -w)，彎矩是剪力之積分 (dM/dx = V)；剪力為零點，彎矩必達極大值；剪力圖之面積等於該段梁之彎矩變化量！",
    "beginnerMindset": "畫 V-M 圖就像玩跳格子游戲：拿支筆從梁左邊往右邊走，看到向上反力就往上跳、看到集中載重就往下掉；斜率看載重，均布載重剪力走斜坡、彎矩走拋物線溜滑梯！",
    "downloadablePdfFilename": "Arch-G10-Mechanics-S2-M2.pdf",
    "knowledgePoints": [
      {
        "id": "mec-g10-s2-m2-01",
        "title": "簡支梁與懸臂梁之剪力圖 (V) 與彎矩圖 (M) 繪製法則",
        "curriculumCode": "115-專一-力學-09",
        "importance": 5,
        "textbookChapter": "全華/科友 基礎工程力學 第七章 梁之內力",
        "intuitiveAnalogy": "想像梁像一塊軟木板：剪力就是兩隻手像剪刀一樣把木板上下錯開切斷的力；彎矩就是雙手像折巧克力棒一樣把木板凹成微笑（正彎矩下凸）或哭臉（負彎矩上凸）的轉動！",
        "summary": "梁之符號慣例：正剪力 (+) 使隔離體呈左上右下之錯動；正彎矩 (+) 使梁產生下凹變形（下緣受拉、上緣受壓，俗稱微笑彎矩）。繪圖四大法則：① 集中載重處：剪力圖發生突變，突變量等於載重大小；彎矩圖呈折線連續；② 均布載重 (w) 處：剪力圖為一階負斜率直線，彎矩圖為二階拋物線；③ 自由端無外力偶時彎矩為零；簡支梁兩端鉸支承彎矩為零；④ 外加力偶矩處：剪力圖無變化，彎矩圖發生階梯突變！",
        "keyFormulaOrRule": "剪力圖面積法：ΔM_AB = M_B - M_A = ∫ V dx (剪力圖在 AB 間之代數面積)；剪力零點 V=0 處彎矩達極值。",
        "cramTips": [
          "從梁最左端開始畫，結束在最右端必須剛好歸零（閉合）！",
          "集中力向上箭頭 ➜ 剪力圖向上跳躍；集中力向下 ➜ 向下跳躍。",
          "剪力圖為正面積 ➜ 彎矩圖一路爬升；剪力圖為負面積 ➜ 彎矩圖溜滑梯下降！"
        ],
        "trapWarning": "均布載重梁的最大彎矩不是發生在中點，而是發生在「剪力為零的斷面」！非對稱載重時千萬不可直接取跨度中央求最大彎矩！",
        "junyiMasterySkill": "梁之剪力彎矩圖繪製與面積法速算"
      },
      {
        "id": "mec-g10-s2-m2-02",
        "title": "載重-剪力-彎矩微積分關係與危險斷面 Mmax 求解",
        "curriculumCode": "115-專一-力學-10",
        "importance": 5,
        "textbookChapter": "全華/科友 基礎工程力學 第七章 梁之微積分關係",
        "intuitiveAnalogy": "位置、速度與加速度的關係：就像速度是位置的微分，剪力 V 就是彎矩 M 的微分斜率！當速度為零時，車子掉頭開到最遠處；當剪力 V = 0 時，彎矩達到最高頂峰！",
        "summary": "載重、剪力與彎矩之微分幾何關係：① dV / dx = -w(x)（剪力圖之斜率等於載重集度之負值）；② dM / dx = V(x)（彎矩圖之斜率等於該點之剪力值）。危險斷面 (Critical Section)：結構設計時梁破壞最危險之處，即彎矩絕對值最大處 |Mmax|。求解危險斷面兩大 SOP：第一步令 V(x) = 0 求出零剪力點坐標 x0；第二步將 x0 代入彎矩方程式 M(x0)，或計算 0 至 x0 間之剪力圖面積直接求得 Mmax！",
        "keyFormulaOrRule": "dV/dx = -w,  dM/dx = V；簡支梁均布載重最大彎矩：Mmax = w · L² / 8；簡支梁中央集中力：Mmax = P · L / 4。",
        "cramTips": [
          "簡支梁均布滿載：Mmax = qL² / 8；剪力最大在兩端支承 Vmax = qL / 2！",
          "懸臂梁均布滿載：最大負彎矩在固定端 Mmax = -wL² / 2！",
          "懸臂梁自由端集中力 P：最大負彎矩在固定端 Mmax = -P·L！"
        ],
        "trapWarning": "外伸梁在支承處常出現「負彎矩」，跨中出現「正彎矩」，求最大彎矩時必須比較正負彎矩的「絕對值」，取絕對值最大者為危險斷面！",
        "junyiMasterySkill": "梁載重微分關係與危險斷面最大彎矩解析"
      }
    ],
    "cramFormulaCards": [
      {
        "title": "簡支梁經典最大彎矩公式卡",
        "formula": "均布載：Mmax = w · L² / 8,   集中力：Mmax = P · L / 4",
        "notes": "均布載重發生於正中央 L/2 處；八分之達不溜埃爾平方為統測常客。",
        "memoryMnemonic": "均布八分之 wL 平方，集中四分之 PL。"
      },
      {
        "title": "載重-剪力-彎矩微積分關係卡",
        "formula": "dM / dx = V,   ΔM = ∫ V dx  (剪力圖面積)",
        "notes": "剪力零點彎矩極大，剪力圖面積即為彎矩增減量。",
        "memoryMnemonic": "剪力微出彎矩坡，剪力為零頂峰見，面積累積求彎矩。"
      }
    ],
    "workedExamples": [
      {
        "id": "ex-mec-g10-s2-m2-01",
        "title": "簡支梁受均布載重與中央集中載重之最大彎矩計算",
        "targetConcept": "面積法與危險斷面 Mmax 求解",
        "difficulty": "段考常考",
        "questionStem": "一長度 L = 6 m 之均質簡支梁 AB，全梁承受均布載重 w = 2 kN/m，且在正中央跨度 C 點 (距 A 點 3 m) 受一向下集中載重 P = 6 kN。試求：(1) A、B 兩端支承反力；(2) 梁之最大彎矩 Mmax。",
        "beginnerThinking": "結構完全左右對稱，兩端反力各分擔一半總外力！因為對稱，剪力必在跨度中點 C 處穿過零點，所以最大彎矩必定出現在正中央 x = 3 m 處！利用左半邊剪力圖梯形面積直接算出 Mmax！",
        "stepByStepSolution": [
          {
            "stepNo": 1,
            "title": "由對稱性計算兩端支承反力",
            "content": "總向下載重 = (w × L) + P = (2 × 6) + 6 = 12 + 6 = 18 kN。由對稱性，RA = RB = 18 / 2 = 9 kN (向上)。"
          },
          {
            "stepNo": 2,
            "title": "繪製左半段剪力圖並計算 x = 3 m 處剪力",
            "content": "自 A 端出發，剪力自 +9 kN 開始隨均布載重以每米 2 kN 之斜率向下傾斜。至 C 點左側 (x = 3 m⁻)：V = 9 - (2 × 3) = +3 kN。在 C 點受向下集中力 6 kN 突變下跳：V = +3 - 6 = -3 kN。剪力圖在 x = 3 m 處恰好由正變負穿越零點！"
          },
          {
            "stepNo": 3,
            "title": "利用剪力圖面積直接計算跨中最大彎矩 Mmax",
            "content": "0 至 3 m 區間剪力圖為一梯形，上底為 9 kN，下底為 3 kN，高為 3 m。Mmax = 梯形面積 = [(9 + 3) × 3] / 2 = (12 × 3) / 2 = 18 kN·m。"
          }
        ],
        "examinerTrapWarning": "若使用疊加法：均布載重 M1 = wL²/8 = 2×36/8 = 9 kN·m；集中載重 M2 = PL/4 = 6×6/4 = 9 kN·m；兩者相加 Mmax = 9 + 9 = 18 kN·m！兩法結果完全吻合！",
        "quickMnemonic": "左半剪力梯形面，上底加下底乘高除二，彎矩直接秒算。",
        "finalAnswer": "RA = RB = 9 kN；最大彎矩 Mmax = 18 kN·m (在梁正中央)"
      },
      {
        "id": "ex-mec-g10-s2-m2-02",
        "title": "外伸梁懸臂端集中力與跨中均布力之危險斷面求解",
        "targetConcept": "外伸梁正負彎矩雙重檢核與零剪力點定位",
        "difficulty": "高手衝刺",
        "questionStem": "外伸梁 ABCD，全長 8 m。A 端為鉸支承，距 A 端 6 m 之 C 點為滾支承，右端 CD 長 2 m 為外伸懸臂段。跨度 AC 承受均布載重 w = 4 kN/m，懸臂端 D 點受向下集中載重 P = 10 kN。求梁之最大正彎矩與最大負彎矩，並標定絕對值最大之危險斷面。",
        "beginnerThinking": "懸臂段右端有外力，C 支承處一定會產生上凸的「負彎矩」；跨中則會產生下凹的「正彎矩」。必須先算支承反力，找出跨中剪力為零的點求出正彎矩，再算懸臂端負彎矩，兩者比大小！",
        "stepByStepSolution": [
          {
            "stepNo": 1,
            "title": "計算支承反力 RA 與 RC",
            "content": "對 C 點取矩：ΣMC = 0 ➜ RA × 6 - (4 × 6) × 3 + 10 × 2 = 0 ➜ 6 RA - 72 + 20 = 0 ➜ 6 RA = 52 ➜ RA = 26/3 ≈ 8.67 kN (向上)。由 ΣFy = 0 ➜ RC = (4 × 6) + 10 - 8.67 = 34 - 8.67 = 25.33 kN (向上)。"
          },
          {
            "stepNo": 2,
            "title": "求跨中剪力為零之點 x0 及最大正彎矩 +Mmax",
            "content": "自 A 端起算：V(x) = RA - w·x = 8.67 - 4x = 0 ➜ x0 = 8.67 / 4 ≈ 2.167 m。此處最大正彎矩 +Mmax = RA·x0 - w·x0²/2 = (8.67)² / (2 × 4) = 75.17 / 8 ≈ +9.39 kN·m。"
          },
          {
            "stepNo": 3,
            "title": "計算支承 C 處之懸臂負彎矩 -M_C",
            "content": "從懸臂端 D 往左看：M_C = -P × L_CD = -10 × 2 = -20 kN·m。"
          }
        ],
        "examinerTrapWarning": "比較最大彎矩絕對值：|+9.39| < |-20|！因此全梁真正的「危險斷面」出現在支承 C 處，其最大彎矩為 -20 kN·m！若只算跨中正彎矩就大錯特錯！",
        "quickMnemonic": "外伸梁必有負彎矩，支承頭上拉力大，正負彎矩取絕對值大者。",
        "finalAnswer": "最大正彎矩 = +9.39 kN·m；最大負彎矩 = -20 kN·m；危險斷面在 C 支承處 (|Mmax| = 20 kN·m)"
      }
    ],
    "crossReferencedQuestions": [
      {
        "id": "q-mec-g10-s2-m2-taichung",
        "sourceExam": "台中高工 112 學年度高一下工程力學第二次段考 第 11 題",
        "questionStem": "一簡支梁跨度 L = 4 m，全梁承受均布載重 w = 3 kN/m，試問此梁之最大彎矩發生在何處？其數值為何？",
        "options": {
          "A": "跨度中點 (距端點 2 m)，6 kN·m",
          "B": "距端點 1 m 處，4.5 kN·m",
          "C": "跨度中點 (距端點 2 m)，12 kN·m",
          "D": "兩端支承處，0 kN·m"
        },
        "answer": "A",
        "detailedExplanation": "簡支梁受均布載重，最大彎矩發生於剪力為零之跨度正中央 (距端點 L/2 = 2 m 處)。最大彎矩公式：Mmax = w · L² / 8 = 3 × 4² / 8 = 3 × 16 / 8 = 6 kN·m。故選 A。",
        "relatedKnowledgePointId": "mec-g10-s2-m2-02",
        "examTrickAnalysis": "統測經典高頻公式題，直接套用 wL²/8，注意勿誤算為 wL²/2 (那是懸臂梁)。"
      },
      {
        "id": "q-mec-g10-s2-m2-02",
        "sourceExam": "台中高工 111 學年度高一下工程力學第二次段考 第 14 題",
        "questionStem": "若梁在某一區間之剪力圖 V(x) 恆為正的一階斜直線（斜率為負），則此區間內之彎矩圖 M(x) 的形狀應為何？",
        "options": {
          "A": "開口向下的二次拋物線，且曲線持續上升",
          "B": "水平直線",
          "C": "向下傾斜的一階斜直線",
          "D": "三次曲線"
        },
        "answer": "A",
        "detailedExplanation": "依微積分關係：dM/dx = V(x)。若 V(x) > 0，則 dM/dx > 0，表示彎矩曲線斜率為正（持續上升）；又剪力圖斜率 dV/dx = -w < 0 為負，表示彎矩圖之二階導數 d²M/dx² = -w < 0，圖形凹向下方（開口向下凸）。故選 A。",
        "relatedKnowledgePointId": "mec-g10-s2-m2-02",
        "examTrickAnalysis": "考查微分幾何意義：剪力正負決定彎矩增減，剪力斜率決定彎矩凸凹。"
      }
    ],
    "preExamChecklist": [
      "我能熟練繪製簡支梁與懸臂梁之 V 圖與 M 圖並確保頭尾閉合歸零。",
      "我能藉由剪力圖面積法快速求得各關鍵斷面之彎矩數值。",
      "我牢記簡支梁均布滿載最大彎矩公式 Mmax = wL²/8。"
    ]
  },
  {
    "id": "g10-mechanics-s2-final",
    "grade": 10,
    "semester": "s2",
    "semesterTitle": "高一下學期",
    "period": "final",
    "periodName": "期末考（學期結業考）",
    "weekRange": "第 18~20 週",
    "subjectSlug": "mechanics",
    "subjectName": "基礎工程力學",
    "category": "專業科目（一）",
    "targetSchool": "全國高工土木建築群指標對照",
    "examScope": "第八章 截面之幾何性質（截面二次慣性矩 I、平行軸定理 I = Ic + Ad²、極慣性矩 J、迴轉半徑 r 與截面模數 Z）",
    "schoolContextNotes": "高一工程力學總結與高二材料力學最關鍵先備知識。I 型鋼、槽鋼、矩形斷面慣性矩與平行軸定理計算佔 70%，迴轉半徑與極慣性矩佔 30%。",
    "scoreWeight": "佔學期學業成績 30%",
    "handoutSummary": "矩形形心慣性矩：Ic = bh³/12；平行軸定理：I = Ic + A·d²；迴轉半徑 r = √(I/A) 是長柱防挫曲神器；截面模數 Z = I/y 是梁抗彎承載力的直接指標！",
    "beginnerMindset": "算慣性矩像算「斷面轉動的慣性」：離軸越遠的面積抗彎效果越好！平行軸定理公式只有五個字：「形心矩加 A 乘 d 平方」，先把各小塊形心矩加起來，再加上各小塊面積乘上距離平方就解開了！",
    "downloadablePdfFilename": "Arch-G10-Mechanics-S2-Final.pdf",
    "knowledgePoints": [
      {
        "id": "mec-g10-s2-final-01",
        "title": "平面截面二次慣性矩與平行軸定理 (Parallel Axis Theorem)",
        "curriculumCode": "115-專一-力學-11",
        "importance": 5,
        "textbookChapter": "全華/科友 基礎工程力學 第八章 截面二次矩",
        "intuitiveAnalogy": "拿一把塑膠直尺：平著擺很容易折彎（因為厚度小，慣性矩極小）；立著擺要折彎它極為困難（因為高度大，高度 h 的三次方讓慣性矩爆增！）。這就是梁一定要立著放的原因！",
        "summary": "截面二次軸慣性矩定義：Ix = ∫ y² dA，Iy = ∫ x² dA。常見幾何形狀對其形心軸之慣性矩：① 矩形 (底 b, 高 h)：Ixc = b·h³ / 12，Iyc = h·b³ / 12；② 圓形 (直徑 d)：Ixc = π·d⁴ / 64；③ 直角三角形 (底 b, 高 h)：Ixc = b·h³ / 36。平行軸定理：若已知圖形對其自身形心軸之慣性矩為 Ic，則對平行且距離為 d 之任一軸的慣性矩為 I = Ic + A · d²。",
        "keyFormulaOrRule": "矩形 Ixc = bh³/12；底邊軸 I_base = bh³/3；平行軸定理：I = Ic + A·d² (必須從形心軸起算！)。",
        "cramTips": [
          "立放矩形抗彎能力是平放的 (h/b)² 倍！",
          "平行軸定理移軸必增加：形心軸之慣性矩是所有平行軸中「數值最小」的！",
          "組合斷面求慣性矩：先求出整體形心位置，再各別使用平行軸定理移至整體形心軸累加。"
        ],
        "trapWarning": "平行軸定理中的 Ic「必須」是通過自身形心軸的慣性矩！千萬不可拿非形心軸的慣性矩任意亂加 A·d²！",
        "junyiMasterySkill": "平行軸定理與組合斷面二次慣性矩計算"
      },
      {
        "id": "mec-g10-s2-final-02",
        "title": "極慣性矩 J、迴轉半徑 r 與截面模數 Z",
        "curriculumCode": "115-專一-力學-12",
        "importance": 4,
        "textbookChapter": "全華/科友 基礎工程力學 第八章 幾何性質應用",
        "intuitiveAnalogy": "花樣滑冰選手旋轉：手收緊時轉得飛快，手向外張開時轉速變慢，因為面積離軸心越遠，轉動慣量就越大！迴轉半徑就是把整個人身上的質量集中在一個點上的等效力臂長度！",
        "summary": "三大衍生幾何指標：① 極慣性矩 J = ∫ r² dA = Ix + Iy（垂直軸定理，圓軸扭轉核心剛度，實心圓 J = π·d⁴ / 32）；② 迴轉半徑 (Radius of Gyration)：r = √(I / A)，物理意義為若將截面全部面積 A 集中於一狹條，距離軸線 r 處具有相同的慣性矩，用於歐拉長柱抗挫曲計算；③ 截面模數 (Section Modulus)：Z = I / y_max（矩形 Z = b·h² / 6），梁受彎曲時最大正應力 σ_max = M / Z。",
        "keyFormulaOrRule": "J = Ix + Iy；r = √(I / A)；Z = I / y_max (矩形 Zx = bh²/6)；梁彎曲正應力 σ = M / Z。",
        "cramTips": [
          "垂直軸定理 J = Ix + Iy 僅適用於「平面圖形」！",
          "長柱挫曲臨界載重 Pcr ＝ π²EI / L²，柱子必定沿著「慣性矩最小 (I_min)」或「迴轉半徑最小 (r_min)」的弱軸方向失穩挫屈！",
          "矩形截面 Zx = bh²/6；圓形截面 Z = π·d³ / 32。"
        ],
        "trapWarning": "長柱挫屈計算細長比 λ = L / r 時，必須採用最小迴轉半徑 r_min，切勿代入強軸的 r_max！",
        "junyiMasterySkill": "極慣性矩與截面模數計算及其抗彎抗扭意義"
      }
    ],
    "cramFormulaCards": [
      {
        "title": "平行軸定理公式卡",
        "formula": "I = Ic + A · d²",
        "notes": "Ic 為自身形心軸慣性矩，d 為兩平行軸之垂直間距。",
        "memoryMnemonic": "自身形心矩最小，移軸加上 Ad 平方。"
      },
      {
        "title": "矩形截面四大幾何指標卡",
        "formula": "A = bh,  Ixc = bh³/12,  Z = bh²/6,  rx = h / √12",
        "notes": "b 為平行軸之底寬，h 為垂直於軸之高度。",
        "memoryMnemonic": "十二分之 bh 三次方，六分之 bh 平方模數強。"
      }
    ],
    "workedExamples": [
      {
        "id": "ex-mec-g10-s2-final-01",
        "title": "對稱工字型截面對形心 X 軸之慣性矩 Ix 計算",
        "targetConcept": "組合斷面平行軸定理移軸累加",
        "difficulty": "段考常考",
        "questionStem": "一對稱工字型鋼截面，上、下翼緣板尺寸均為 120 mm × 20 mm，中央腹板尺寸為 20 mm × 160 mm（截面總高度 H = 200 mm，總寬度 B = 120 mm）。試求此工字型截面對水平形心 X 軸之二次慣性矩 Ix。",
        "beginnerThinking": "方法一（扣除法，最快秒殺）：把工字鋼看成一個大的外接矩形 (120 × 200)，減去左右兩側被挖空的兩個對稱矩形 (寬度各為 (120-20)/2 = 50 mm，高度 160 mm)！因為它們共用同一條水平形心軸，完全不需要平行軸定理，直接相減一秒搞定！",
        "stepByStepSolution": [
          {
            "stepNo": 1,
            "title": "使用大矩形扣除兩側挖空矩形法 (共形心軸)",
            "content": "外接實心大矩形尺寸：B = 120 mm, H = 200 mm。I_outer = B·H³ / 12 = 120 × 200³ / 12 = 120 × 8,000,000 / 12 = 80,000,000 mm⁴ (8 × 10⁷ mm⁴)。"
          },
          {
            "stepNo": 2,
            "title": "計算兩側被挖空之矩形慣性矩",
            "content": "兩側挖空矩形總寬度 b_void = 120 - 20 = 100 mm，高度 h_void = 160 mm。因其形心軸恰與整體形心 X 軸重合，I_void = b_void · h_void³ / 12 = 100 × 160³ / 12 = 100 × 4,096,000 / 12 ≈ 34,133,333 mm⁴。"
          },
          {
            "stepNo": 3,
            "title": "相減求淨工字型慣性矩 Ix",
            "content": "Ix = I_outer - I_void = 80,000,000 - 34,133,333 = 45,866,667 mm⁴ ≈ 4.59 × 10⁷ mm⁴。"
          }
        ],
        "examinerTrapWarning": "若使用分塊累加法：腹板形心矩 + 2 × (翼板形心矩 + A·d²)，算得結果完全相同！但大矩形扣除法可避免算 d 算錯！",
        "quickMnemonic": "對稱工字形心同，外包大框扣虛空，三次方減三次方最神速。",
        "finalAnswer": "Ix ≈ 4.59 × 10⁷ mm⁴ (45.87 × 10⁶ mm⁴)"
      },
      {
        "id": "ex-mec-g10-s2-final-02",
        "title": "矩形木梁抗彎截面模數 Zx 與迴轉半徑速算",
        "targetConcept": "截面模數 Z 與迴轉半徑 r 計算",
        "difficulty": "段考常考",
        "questionStem": "一矩形木梁斷面寬 b = 100 mm，高 h = 200 mm。試求：(1) 此木梁對水平形心軸之截面模數 Zx；(2) 對水平形心軸之迴轉半徑 rx；(3) 若該梁能承受之最大安全彎矩 M = 12 kN·m，試求梁之最大彎曲拉應力 σ_max。",
        "beginnerThinking": "矩形截面模數公式 Zx = b·h² / 6；迴轉半徑 rx = h / √12；最大彎曲應力直接套用公式 σ_max = M / Zx！",
        "stepByStepSolution": [
          {
            "stepNo": 1,
            "title": "計算截面模數 Zx",
            "content": "Zx = b · h² / 6 = 100 × 200² / 6 = 100 × 40,000 / 6 = 4,000,000 / 6 ≈ 666,667 mm³。"
          },
          {
            "stepNo": 2,
            "title": "計算水平迴轉半徑 rx",
            "content": "面積 A = b·h = 100 × 200 = 20,000 mm²。Ix = b·h³ / 12 = 100 × 200³ / 12 = 66,666,667 mm⁴。rx = √(Ix / A) = √(66,666,667 / 20,000) = √3333.33 ≈ 57.74 mm (等同 h / √12 = 200 / 3.464 ≈ 57.74 mm)。"
          },
          {
            "stepNo": 3,
            "title": "計算最大彎曲應力 σ_max",
            "content": "彎矩 M = 12 kN·m = 12 × 10⁶ N·mm。σ_max = M / Zx = (12 × 10⁶) / 666,667 = 18 N/mm² (MPa)。"
          }
        ],
        "examinerTrapWarning": "單位換算地雷！彎矩 kN·m 換算成 N·mm 必須乘以 10⁶（1 kN = 10³ N，1 m = 10³ mm），千萬不要漏掉三個零！",
        "quickMnemonic": "截面模數除以六，單位百萬變牛毫，應力等於矩除模。",
        "finalAnswer": "Zx ≈ 666.67 × 10³ mm³；rx ≈ 57.74 mm；σ_max = 18 MPa"
      }
    ],
    "crossReferencedQuestions": [
      {
        "id": "q-mec-g10-s2-final-taichung",
        "sourceExam": "台中高工 112 學年度高一下工程力學期末考 第 19 題",
        "questionStem": "一矩形截面其寬度為 b、高度為 h，試問此矩形對其底邊軸之二次慣性矩 I_base 為何？",
        "options": {
          "A": "b·h³ / 3",
          "B": "b·h³ / 12",
          "C": "b·h³ / 4",
          "D": "b·h³ / 36"
        },
        "answer": "A",
        "detailedExplanation": "依平行軸定理：I_base = Ic + A · d²。形心慣性矩 Ic = bh³ / 12，面積 A = bh，形心到底邊距離 d = h / 2。I_base = bh³/12 + bh·(h/2)² = bh³/12 + bh³/4 = bh³/12 + 3bh³/12 = 4bh³/12 = bh³ / 3。故選 A。",
        "relatedKnowledgePointId": "mec-g10-s2-final-01",
        "examTrickAnalysis": "形心軸是 12 分之，底邊軸是 3 分之，頂點軸是更遠，牢記底邊為三分之一。"
      },
      {
        "id": "q-mec-g10-s2-final-02",
        "sourceExam": "台中高工 111 學年度高一下工程力學期末考 第 20 題",
        "questionStem": "平面圓形截面（直徑為 d）其形心二次軸慣性矩為 Ix = π·d⁴ / 64，試問其極慣性矩 J 為何？",
        "options": {
          "A": "π·d⁴ / 32",
          "B": "π·d⁴ / 64",
          "C": "π·d⁴ / 16",
          "D": "π·d⁴ / 128"
        },
        "answer": "A",
        "detailedExplanation": "依垂直軸定理：極慣性矩 J = Ix + Iy。圓形具有對稱性，Ix = Iy = π·d⁴ / 64。因此 J = π·d⁴ / 64 + π·d⁴ / 64 = 2π·d⁴ / 64 = π·d⁴ / 32。故選 A。",
        "relatedKnowledgePointId": "mec-g10-s2-final-02",
        "examTrickAnalysis": "垂直軸定理直接相加，圓形極慣性矩分母為 32，抗扭剛度核心。"
      }
    ],
    "preExamChecklist": [
      "我熟記矩形形心慣性矩 (bh³/12)、底邊慣性矩 (bh³/3) 與截面模數 (bh²/6)。",
      "我能熟練運用平行軸定理計算組合斷面之慣性矩。",
      "我能運用垂直軸定理求得極慣性矩 J = Ix + Iy。"
    ]
  },
  {
    "id": "g10-drafting-s1-m1",
    "grade": 10,
    "semester": "s1",
    "semesterTitle": "高一上學期",
    "period": "midterm-1",
    "periodName": "第一次段考（期中考一）",
    "weekRange": "第 6~7 週",
    "subjectSlug": "drafting",
    "subjectName": "建築製圖實習",
    "category": "專業實習",
    "targetSchool": "全國高工土木建築群指標對照",
    "examScope": "第一章 製圖用具與規格、CNS 3 圖紙尺度系列、線型種類與線寬等級、比例尺換算與尺度標註 CNS 11567",
    "schoolContextNotes": "建築科新生進入圖學世界之第一戰。考查 CNS 規範熟悉度、圖紙長寬比 √2 折疊標準、實體尺寸與圖面尺度縮放換算，純圖學法規與記憶型考題佔 80%。",
    "scoreWeight": "佔學期學業成績 20%",
    "handoutSummary": "CNS A 系列圖紙面積比為 1:2，長寬比恆為 1:√2；建築尺度以毫米 (mm) 為基準不標單位；尺度數字恆置於尺度線上方或中斷處，從圖下方或右側閱讀！",
    "beginnerMindset": "製圖規範看似瑣碎，其實全都是為了讓工地的師傅看得懂！記住兩大原則：一、所有圖紙都是大張折一半變小張；二、建築圖上的數字永遠標真實建築尺寸，絕對不標你尺量出來的縮小數字！",
    "downloadablePdfFilename": "Arch-G10-Drafting-S1-M1.pdf",
    "knowledgePoints": [
      {
        "id": "dra-g10-s1-m1-01",
        "title": "CNS 製圖標準規格、圖紙尺度系列與線型功能",
        "curriculumCode": "115-專二-製圖-01",
        "importance": 5,
        "textbookChapter": "全華/科友 建築製圖實習 第一章 緒論與 CNS 規範",
        "intuitiveAnalogy": "圖紙就像俄羅斯娃娃：A0 對折切開變成兩張 A1，A1 對折變成兩張 A2，以此類推一路對折到 A4！最神奇的是，每一張長跟寬的比例永遠是 1 : √2 (約 1:1.414)，怎麼折都不會走樣！",
        "summary": "CNS 3 規定圖紙系列：A0 基準面積為 1 m²，其尺寸為 841 mm × 1189 mm；A1 為 594 × 841；A2 為 420 × 594；A3 為 297 × 420；A4 為 210 × 297。線型與線寬比例：粗線 : 中線 : 細線 = 4 : 2 : 1。粗實線用於外形可見輪廓線；中虛線用於不可見隱藏線；細鏈線（長劃加一短劃點）用於中心線、對稱軸；特粗鏈線用於剖切割面線；細實線用於尺度線、尺度界線、引出線與剖面線。",
        "keyFormulaOrRule": "A0 面積 1 m²；長寬比 a:b = 1:√2；線寬階層：粗:中:細 = 4:2:1 (如 0.5mm, 0.25mm, 0.13mm)。",
        "cramTips": [
          "A0 = 841 × 1189，A4 = 210 × 297，號數每增加 1，面積減半！",
          "標題欄 (Title Block) 規定設置於圖紙的「右下角」！",
          "A 系列圖紙最終裝訂折疊一律折成「A4 規格 (210×297 mm)」，且標題欄必須露在封面正面！"
        ],
        "trapWarning": "A4 圖紙若橫向放，標題欄依然在右下角；但若直立放置，標題欄可在底部！另外圖面線寬不得隨意混合，同一張圖中相同性質線型線寬必須一致！",
        "junyiMasterySkill": "CNS 製圖標準尺度與線型規範識別"
      },
      {
        "id": "dra-g10-s1-m1-02",
        "title": "建築製圖尺度標註 CNS 規則、引出線與比例尺換算",
        "curriculumCode": "115-專二-製圖-02",
        "importance": 5,
        "textbookChapter": "全華/科友 建築製圖實習 第二章 尺度標註與比例",
        "intuitiveAnalogy": "三稜比例尺就像多面萬能鑰匙：六個稜邊刻著六種不同比例（1:100, 1:200, 1:300, 1:400, 1:500, 1:600）。拿 1:100 面量圖紙，上面刻度的 1 米就是現場真實的 1 米，不用自己在腦袋裡乘來除去！",
        "summary": "建築尺度標註 CNS 11567 規範：① 尺度三要素：尺度線 (Dimension Line)、尺度界線 (Extension Line)、起迄符號（建築圖常用 45° 粗短斜線或實心圓點，機械圖常用箭頭）；② 建築尺度單位以毫米 (mm) 為準，圖面上不標註單位符號；高程或總長度得用公尺 (m)，但須註記單位；③ 尺度數字恆置於尺度線上方或中央斷開處，水平尺度字頭朝上，垂直尺度字頭朝左；④ 比例尺換算：實體長度 ＝ 圖上測得長度 × 比例分母；縮尺如 1:50 表示圖上 1 mm 代表現場 50 mm。",
        "keyFormulaOrRule": "實體尺寸 ＝ 圖上長度 × 比例分母；建築尺度字頭方向：水平朝上、垂直朝左 (從下方與右方讀取)。",
        "cramTips": [
          "尺度界線應自輪廓線留出約 1~1.5 mm 空隙，並延伸超過尺度線約 2~3 mm！",
          "大尺度（總尺寸）在外，小尺度（細部尺寸）在內，尺度線嚴禁互相交叉！",
          "引出線 (Leader) 必須為細實線，與水平線夾 30°、45° 或 60°，末端引至文字水平延伸線。"
        ],
        "trapWarning": "題目問「比例尺 1:50 之圖上量得 6 cm，實體尺寸為何？」答案是 6 cm × 50 = 300 cm = 3 m！千萬別把 cm 算成 mm 或算反變成 6/50！",
        "junyiMasterySkill": "建築尺度標註規範與比例尺縮放換算"
      }
    ],
    "cramFormulaCards": [
      {
        "title": "比例尺換算核心公式卡",
        "formula": "實體長度 ＝ 圖上量得長度 × 比例分母 (N)",
        "notes": "如 1:N 比例，圖上 1cm 代表現場 N cm；圖上面積換算需乘 N² 平方！",
        "memoryMnemonic": "長度乘一倍分母，面積乘分母平方。"
      },
      {
        "title": "CNS A 系列圖紙規格速查卡",
        "formula": "A0 (841×1189) ➜ A1 ➜ A2 ➜ A3 (297×420) ➜ A4 (210×297)",
        "notes": "長寬比 1:√2，長邊對半切變短邊，面積連鎖減半。",
        "memoryMnemonic": "八四一乘一一八九為 A0，二一零乘二九七為 A4。"
      }
    ],
    "workedExamples": [
      {
        "id": "ex-dra-g10-s1-m1-01",
        "title": "A0 至 A4 圖紙黃金比例折疊與圖面尺度標註辨識",
        "targetConcept": "CNS A 系列圖紙規格與裝訂折疊標準",
        "difficulty": "基礎入門",
        "questionStem": "一張標準 A1 圖紙 (594 mm × 841 mm) 若要對折裁切，可裁切出幾張標準 A4 圖紙 (210 mm × 297 mm)？工程圖紙完成後若要裝訂成冊，依 CNS 規定應折疊成何種規格尺寸？標題欄應如何呈現？",
        "beginnerThinking": "A1 對半切是 2 張 A2，A2 對半切是 4 張 A3，A3 對半切是 8 張 A4！折疊標準永遠折成最方便攜帶的 A4 大小，而且封面一定要能看到標題欄！",
        "stepByStepSolution": [
          {
            "stepNo": 1,
            "title": "推算圖紙面積與張數倍數關係",
            "content": "A1 面積為 A0 之 1/2。A4 面積為 A0 之 1/16。故一張 A1 圖紙面積相當於 16 / 2 = 8 張 A4 圖紙。"
          },
          {
            "stepNo": 2,
            "title": "檢核幾何長寬裁切",
            "content": "A1 寬 594 mm = 2 × 297 mm；長 841 mm ≈ 4 × 210 mm (210 × 4 = 840 mm)。故可精確對切成 2 × 4 = 8 張 A4 圖紙。"
          },
          {
            "stepNo": 3,
            "title": "確認折疊與標題欄規範",
            "content": "依 CNS 規定，大於 A4 之各級工程圖紙若需裝訂保存，一律須摺疊成 A4 (210 mm × 297 mm) 規格，且折疊後圖紙之「標題欄」必須完整顯露於折疊包之正面右下方，以便於翻閱檢索。"
          }
        ],
        "examinerTrapWarning": "切勿回答折疊成 A3 或 A2！公家機關與工程檔案室法定存檔標準規格唯一指定 A4！",
        "quickMnemonic": "號數多一面積半，A1 切出八張 A4，裝訂折疊統一 A4 露標題。",
        "finalAnswer": "可裁切成 8 張 A4；一律折疊成 A4 (210×297 mm) 規格且標題欄顯露於正面右下角。"
      },
      {
        "id": "ex-dra-g10-s1-m1-02",
        "title": "比例尺 1/30 與 1/150 實體長度於圖紙上毫米換算",
        "targetConcept": "比例尺縮放換算與圖面繪製長度計算",
        "difficulty": "段考常考",
        "questionStem": "某建築物之一道外牆實際長度為 9.0 m。(1) 若以比例尺 1:30 繪製於大樣詳圖中，圖面上應繪製多長 (mm)？(2) 若以比例尺 1:150 繪製於配置圖中，圖面上應繪製多長 (mm)？(3) 若在 1:50 圖紙上測得一房間矩形面積為 40 cm²，求該房間之實際地板面積為多少平方公尺 (m²)？",
        "beginnerThinking": "長度換算：先把 9.0 m 換成 9000 mm，除以比例分母就是圖上毫米長度！面積換算：面積要乘以比例分母的「平方」！",
        "stepByStepSolution": [
          {
            "stepNo": 1,
            "title": "換算 1:30 大樣圖之圖面長度",
            "content": "實體長度 = 9.0 m = 9000 mm。圖上長度 = 9000 / 30 = 300 mm (即 30 cm)。"
          },
          {
            "stepNo": 2,
            "title": "換算 1:150 配置圖之圖面長度",
            "content": "圖上長度 = 9000 / 150 = 60 mm (即 6 cm)。"
          },
          {
            "stepNo": 3,
            "title": "計算 1:50 房間實體面積 (面積二次方關係)",
            "content": "比例分母 N = 50。實體面積 = 圖上面積 × N² = 40 cm² × 50² = 40 × 2500 = 100,000 cm²。換算為平方公尺：1 m² = 10,000 cm²，故實體面積 = 100,000 / 10,000 = 10.0 m²。"
          }
        ],
        "examinerTrapWarning": "面積比例換算常有人只乘 50 而忘記平方！1 cm² 在 1:50 圖上代表 50 cm × 50 cm = 2500 cm² = 0.25 m²！",
        "quickMnemonic": "圖長等於實除母，面積換算母平方，單位換平除一萬。",
        "finalAnswer": "(1) 300 mm；(2) 60 mm；(3) 實體面積 = 10.0 m²"
      }
    ],
    "crossReferencedQuestions": [
      {
        "id": "q-dra-g10-s1-m1-taichung",
        "sourceExam": "台中高工 112 學年度高一上建築製圖實習第一次段考 第 12 題",
        "questionStem": "依 CNS 建築製圖規範，尺度標註之線型與起迄符號規定，下列敘述何者正確？",
        "options": {
          "A": "尺度線與尺度界線皆應使用細實線繪製",
          "B": "建築工程圖中尺度起迄符號嚴格禁用 45° 粗短斜線",
          "C": "建築圖中尺度數字必須標明單位，如 2400 mm",
          "D": "尺度數字字頭方向一律朝下，由上方閱讀"
        },
        "answer": "A",
        "detailedExplanation": "依 CNS 11567：尺度線與尺度界線均為細實線；建築圖起迄符號最常用 45° 粗短斜線 (長度約 2~3 mm)；建築尺度以 mm 為單位，依習慣不標記 mm 符號；字頭方向水平尺度朝上、垂直尺度朝左。故 A 正確。",
        "relatedKnowledgePointId": "dra-g10-s1-m1-02",
        "examTrickAnalysis": "考查建築圖學尺度標註規範四大核心要點，A 是唯一正確標準。"
      },
      {
        "id": "q-dra-g10-s1-m1-02",
        "sourceExam": "台中高工 111 學年度高一上建築製圖實習第一次段考 第 8 題",
        "questionStem": "標準 A2 圖紙之尺寸大小為何？其面積約為多少平方公尺？",
        "options": {
          "A": "420 mm × 594 mm，約 0.25 m²",
          "B": "297 mm × 420 mm，約 0.125 m²",
          "C": "594 mm × 841 mm，約 0.5 m²",
          "D": "210 mm × 297 mm，約 0.0625 m²"
        },
        "answer": "A",
        "detailedExplanation": "A0 = 841 × 1189 (1 m²)，A1 = 594 × 841 (0.5 m²)，A2 = 420 × 594 (0.25 m²)，A3 = 297 × 420 (0.125 m²)，A4 = 210 × 297 (0.0625 m²)。故選 A。",
        "relatedKnowledgePointId": "dra-g10-s1-m1-01",
        "examTrickAnalysis": "A 系列五大圖紙長寬與面積記憶，A2 寬 420 長 594，面積恰為 1/4 m²。"
      }
    ],
    "preExamChecklist": [
      "我能熟背 A0 至 A4 的圖紙尺寸與 1:√2 黃金長寬比率。",
      "我能熟練換算比例尺在圖紙上的長度 (mm) 與面積 (m²)。",
      "我熟記建築尺度標註規則：細實線、不標 mm、水平朝上垂直朝左。"
    ]
  },
  {
    "id": "g10-drafting-s1-m2",
    "grade": 10,
    "semester": "s1",
    "semesterTitle": "高一上學期",
    "period": "midterm-2",
    "periodName": "第二次段考（期中考二）",
    "weekRange": "第 11~12 週",
    "subjectSlug": "drafting",
    "subjectName": "建築製圖實習",
    "category": "專業實習",
    "targetSchool": "全國高工土木建築群指標對照",
    "examScope": "第二章 正投影原理、第一角法 vs 第三角法幾何展開比較、三視圖識圖與徒手畫、線型重疊優先順序",
    "schoolContextNotes": "技術型高中土木建築群最核心空間表徵考試。第三角法（CNS 規範標準）三視圖識圖、投影箱展開、隱藏虛線交接標準畫法，佔段考成績 75%。",
    "scoreWeight": "佔學期學業成績 25%",
    "handoutSummary": "第三角法口訣「人-投影面-物體」，俯視圖在上方、右側視圖在右方；第一角法「人物面」，視圖反向擺放；線型重疊時：實線壓虛線、虛線壓中心線！",
    "beginnerMindset": "第三角法超直覺：就像你站在一個透明玻璃箱外面看裡面的積木！你從上面看，圖就畫在上玻璃；你從右邊看，圖就畫在右玻璃；把玻璃箱攤平，上視圖就在前視圖上方，右側視圖就在右邊！",
    "downloadablePdfFilename": "Arch-G10-Drafting-S1-M2.pdf",
    "knowledgePoints": [
      {
        "id": "dra-g10-s1-m2-01",
        "title": "第一角法 vs 第三角正投影法空間展開比較",
        "curriculumCode": "115-專二-製圖-03",
        "importance": 5,
        "textbookChapter": "全華/科友 建築製圖實習 第三章 正投影法",
        "intuitiveAnalogy": "第三角法就像「透明玻璃箱」（眼睛看到什麼，就直接描在眼前的透明玻璃上）；第一角法就像「皮影戲」（光照在物體上，影子投射到物體背後的白色布幕上）！所以第一角法從左邊看，影子跑到右邊去了！",
        "summary": "空間四個象限劃分中：第三角法（Third-Angle Projection，CNS 與美加台日採用）：視線順序為「觀察者 ➜ 投影面 ➜ 物體」，展開後俯視圖 (Top View) 位於前視圖 (Front View) 之「正上方」，右側視圖 (Right View) 位於前視圖之「正右方」；第一角法（First-Angle Projection，ISO 與歐洲採用）：視線順序為「觀察者 ➜ 物體 ➜ 投影面」，展開後俯視圖反倒跑到前視圖之「正下方」，右側視圖跑到前視圖之「正左方」。正投影四大鐵律：「長對正、高平齊、寬相等、45度輔助折轉線」。",
        "keyFormulaOrRule": "第三角投影：上在上、下在下、右在右 (CNS 標準)；三視圖對正鐵律：長對正、高平齊、寬相等。",
        "cramTips": [
          "第三角法識別標誌：小圓台錐體符號，左邊為小圓在內，右邊為雙圓底座！",
          "前視圖 (正立面) 呈現「長度與高度」；俯視圖 (平面圖) 呈現「長度與寬度」；右側視圖 (右立面) 呈現「寬度與高度」！",
          "由前俯求側視圖，必用 45° 輔助投影線傳遞「寬度」！"
        ],
        "trapWarning": "第一角法與第三角法符號常考！看圓錐台剖面：第三角法的頂視圖圓圈在右邊、圓錐底在左邊；切勿記反！",
        "junyiMasterySkill": "第三角法正投影三視圖展開與識圖空間轉換"
      },
      {
        "id": "dra-g10-s1-m2-02",
        "title": "線型優先重疊順序與隱藏虛線起迄交接規範",
        "curriculumCode": "115-專二-製圖-04",
        "importance": 4,
        "textbookChapter": "全華/科友 建築製圖實習 第三章 投影線型規範",
        "intuitiveAnalogy": "高速公路立體交叉：最上面的高架橋（看得見的輪廓線）最霸道，直接擋住下方的所有車道；底下的隧道（看不見的隱藏虛線）次之；最底下的施工中心線（細鏈線）優先度最低，被壓在最下面！",
        "summary": "CNS 製圖線型重疊優先順序：① 外形輪廓線（粗實線）優先權最高；② 隱藏線（中虛線）次之；③ 割面線（特粗鏈線兩端粗折線）；④ 中心線（細長鏈線）；⑤ 尺度線與尺度界線（細實線）。隱藏虛線交接三大規範：① 兩虛線相交成 L 角或 T 角時，轉角頂點必須「實線交相接」，不得留空隙；② 虛線自外形實線垂直或斜向延伸而出時，起點必須「留約 1~1.5 mm 之空隙」，避免誤認虛線為實線之一部分；③ 兩平行虛線間隔過近時，線段與空隙應互相錯開，避免視覺黏連。",
        "keyFormulaOrRule": "優先順序：粗實 (輪廓) ＞ 中虛 (隱藏) ＞ 特粗鏈 (割面) ＞ 細鏈 (中心) ＞ 細實 (尺度)。",
        "cramTips": [
          "角相接、延伸留空：L 角角尖一定要碰在一起！",
          "中心線交點必須為「長劃相交」而非點相交！中心線超出圖形輪廓約 3~5 mm。",
          "隱藏虛線短劃長約 3~4 mm，間隔空隙約 1 mm，整張圖必須保持勻稱！"
        ],
        "trapWarning": "若實線與虛線重疊，必須繪製實線；但不可因為畫了實線就認為虛線不存在，在三視圖對應檢查時必須注意其背後的隱藏構造！",
        "junyiMasterySkill": "製圖線型優先等級與隱藏虛線標準交接作圖"
      }
    ],
    "cramFormulaCards": [
      {
        "title": "三視圖三大對齊鐵律卡",
        "formula": "前俯【長對正】、前側【高平齊】、俯側【寬相等】",
        "notes": "寬度利用 45° 輔助線或分規精確傳遞，三者缺一不可。",
        "memoryMnemonic": "長對正、高平齊、寬相等，四十五度轉寬度。"
      },
      {
        "title": "線型重疊優先級速記卡",
        "formula": "粗實 (外輪廓) ＞ 中虛 (隱藏線) ＞ 細鏈 (中心線) ＞ 細實 (尺度線)",
        "notes": "不同線型重合時，級別高者覆蓋級別低者。",
        "memoryMnemonic": "實線壓虛線，虛線壓中心，中心壓尺度。"
      }
    ],
    "workedExamples": [
      {
        "id": "ex-dra-g10-s1-m2-01",
        "title": "立體斜切塊第三角投影俯視圖與右側視圖判別",
        "targetConcept": "正投影斜面成像與隱藏線判讀",
        "difficulty": "段考常考",
        "questionStem": "一長方體積木長 60 mm、寬 40 mm、高 50 mm，在前視圖右上角被斜切去一個底寬 30 mm、高 20 mm 的直角三角柱，且正中央有一貫穿前後之直徑 20 mm 圓形孔洞。試述其第三角法之俯視圖 (Top View) 與右側視圖 (Right View) 的線條構成特徵。",
        "beginnerThinking": "前視圖能看到斜切面是一條斜直線。俯視圖由上往下看：斜切面會變成一個矩形實面，貫穿圓孔會變成一對平行中虛線（隱藏線）！右側視圖由右往左看：斜切面也呈現矩形，圓孔同樣呈現隱藏虛線！",
        "stepByStepSolution": [
          {
            "stepNo": 1,
            "title": "分析俯視圖 (Top View) 之線條組成",
            "content": "俯視圖外框為長 60 mm × 寬 40 mm 之矩形。右端 30 mm 處有一條實線，代表斜切面頂端的交線，將俯視圖分為 30 mm 平面與 30 mm 傾斜面之俯影。貫穿中央直徑 20 mm 之圓孔，由上往下看不可見，故在中心線兩側各距 10 mm 處畫出一對貫穿全寬 40 mm 之水平中虛線 (隱藏線)。"
          },
          {
            "stepNo": 2,
            "title": "分析右側視圖 (Right View) 之線條組成",
            "content": "右側視圖外框為寬 40 mm × 高 50 mm。頂部距頂面 20 mm 處有一條水平粗實線，代表斜切面下邊緣。在正中央對稱軸處有一貫穿之直徑 20 mm 圓孔，呈現一對垂直方向之隱藏虛線。"
          },
          {
            "stepNo": 3,
            "title": "核對長對正、高平齊與寬相等",
            "content": "前視圖與俯視圖長度皆為 60 mm (長對正)；前視圖與右側視圖高度皆為 50 mm (高平齊)；俯視圖與右側視圖寬度皆為 40 mm (寬相等，經 45° 輔助線精確折轉)。"
          }
        ],
        "examinerTrapWarning": "斜面在俯視圖與側視圖中皆不會呈現真實大小，而是「縮形 (Fore-shortened)」！貫穿孔洞在俯視與側視中必須畫出「中心線 (細鏈線)」加兩條「隱藏線 (中虛線)」！",
        "quickMnemonic": "斜面轉正見長方，圓洞貫穿變雙虛，中心長劃穿出框。",
        "finalAnswer": "俯視圖為外框 60×40 內含一條分割實線與一對水平隱藏線；右側視圖為 40×50 內含一水平分割線與垂直隱藏線。"
      },
      {
        "id": "ex-dra-g10-s1-m2-02",
        "title": "三視圖中隱藏實體交線與虛線交接處標準畫法",
        "targetConcept": "隱藏線起迄交接與線型優先規則",
        "difficulty": "高手衝刺",
        "questionStem": "在機械構件三視圖中：(1) 若一條隱藏虛線與一條外形粗實線在轉角處呈 90° 直角相交，交點應如何處理？(2) 若一條隱藏虛線是從外形粗實線直線延伸向外伸出，起點應如何處理？(3) 若一條中心線與外形粗實線完全重疊，依 CNS 規定應畫出何種線型？",
        "beginnerThinking": "牢記口訣：「角相交相接、實延伸留空、實線壓中心」！直角轉角虛線要緊緊貼住實線成實角；直直延伸的虛線必須留 1mm 縫隙避免被誤認是一整根實線！",
        "stepByStepSolution": [
          {
            "stepNo": 1,
            "title": "處理 90° 轉角虛實相交 (L 角)",
            "content": "依 CNS 規定，虛線與實線（或兩虛線）在轉角相交成 L 角或 T 角時，虛線的端點線段必須與實線「直接接觸相交」，不得留空隙，以確保形狀輪廓之封閉性。"
          },
          {
            "stepNo": 2,
            "title": "處理實線直線延伸虛線",
            "content": "若隱藏虛線為實線之同方向延伸線，虛線之起點「必須留出約 1~1.5 mm 之空隙」，絕不可與實線相連，以防止讀圖者誤判該處仍為可見之實體外形輪廓。"
          },
          {
            "stepNo": 3,
            "title": "判定中心線與粗實線重疊優先順序",
            "content": "依線型重疊優先等級：外形粗實線 (第一優先) > 中心細鏈線 (第四優先)。故兩者重疊時，一律繪製「外形粗實線」，中心線被覆蓋隱藏。"
          }
        ],
        "examinerTrapWarning": "很多同學以為虛線一定要跟所有碰到的線留空隙，結果把 L 角畫出缺口而慘遭扣分！轉角必須實接，延伸才留空！",
        "quickMnemonic": "轉角實相接、延伸留空隙、實線壓中心。",
        "finalAnswer": "(1) 端點接觸實接；(2) 起點保留 1~1.5 mm 空隙；(3) 繪製外形粗實線。"
      }
    ],
    "crossReferencedQuestions": [
      {
        "id": "q-dra-g10-s1-m2-taichung",
        "sourceExam": "台中高工 112 學年度高一上建築製圖實習第二次段考 第 16 題",
        "questionStem": "依 CNS 規定之第三角正投影法，下列各視圖相對於前視圖 (正立面) 之位置配置，何者正確？",
        "options": {
          "A": "俯視圖位於前視圖正上方，右側視圖位於前視圖正右方",
          "B": "俯視圖位於前視圖正下方，右側視圖位於前視圖正左方",
          "C": "俯視圖位於前視圖正上方，右側視圖位於前視圖正左方",
          "D": "俯視圖位於前視圖正下方，右側視圖位於前視圖正右方"
        },
        "answer": "A",
        "detailedExplanation": "第三角法視線順序為人-面-物，各視圖位置與觀察方向完全一致：從上看畫在上方 (俯視圖在正上方)；從右看畫在右方 (右側視圖在正右方)。選項 B 為第一角法配置。故選 A。",
        "relatedKnowledgePointId": "dra-g10-s1-m2-01",
        "examTrickAnalysis": "第三角與第一角視圖位置對比，技術型高中圖學最基本也最容易混淆的觀念。"
      },
      {
        "id": "q-dra-g10-s1-m2-02",
        "sourceExam": "台中高工 111 學年度高一上建築製圖實習第二次段考 第 19 題",
        "questionStem": "若同一圖面中，中心線、隱藏線、外形輪廓線恰好重疊於同一直線上，依 CNS 規定應優先繪製何種線型？",
        "options": {
          "A": "外形輪廓線 (粗實線)",
          "B": "隱藏線 (中虛線)",
          "C": "中心線 (細鏈線)",
          "D": "割面線 (特粗鏈線)"
        },
        "answer": "A",
        "detailedExplanation": "依 CNS 線型重疊優先等級鐵律：外形輪廓線 (粗實線) > 隱藏線 (中虛線) > 割面線 > 中心線 > 細實線。故外形輪廓線優先權最高，優先繪製。選 A。",
        "relatedKnowledgePointId": "dra-g10-s1-m2-02",
        "examTrickAnalysis": "牢記「粗實壓中虛、中虛壓細鏈」，看見粗實線直接選第一優先。"
      }
    ],
    "preExamChecklist": [
      "我能清楚分辨第三角法（人-面-物）與第一角法（人-物-面）之投影箱展開。",
      "我熟記三視圖三對齊原則：長對正、高平齊、寬相等。",
      "我清楚虛線在轉角處接合、延伸處留空的標準畫法規範。"
    ]
  },
  {
    "id": "g10-drafting-s1-final",
    "grade": 10,
    "semester": "s1",
    "semesterTitle": "高一上學期",
    "period": "final",
    "periodName": "期末考（學期結業考）",
    "weekRange": "第 18~20 週",
    "subjectSlug": "drafting",
    "subjectName": "建築製圖實習",
    "category": "專業實習",
    "targetSchool": "全國高工土木建築群指標對照",
    "examScope": "第四章 剖視圖（全剖、半剖、局部剖、旋轉剖、移轉剖面）、割面線與剖面線規範、單斜面輔助視圖",
    "schoolContextNotes": "高一建築製圖實習上學期結業大考。考試著重剖視圖內部隱藏構造之表達、剖面線 45° 繪製鐵律、肋板/軸心/螺栓等特定構件「縱向剖切不加剖面線」之例外規範，佔分 70%。",
    "scoreWeight": "佔學期學業成績 30%",
    "handoutSummary": "對稱物體用半剖（外觀與內部各半）；割面線為特粗鏈線兩端折角箭頭指向視線方向；剖面線以細實線夾 45° 等距繪製；肋板、輪輻縱向剖切絕不打剖面線！",
    "beginnerMindset": "剖視圖就是把房子或零件用大刀切開給你看內部！只要是被刀刃切過實體肉厚的地方，就要畫上 45° 傾斜的斜線（剖面線）；如果是空心的洞或空氣，就留白！記住：對稱零件半剖最省事，一半看外皮、一半看骨架！",
    "downloadablePdfFilename": "Arch-G10-Drafting-S1-Final.pdf",
    "knowledgePoints": [
      {
        "id": "dra-g10-s1-final-01",
        "title": "剖視圖分類：全剖、半剖、局部剖、旋轉剖與割面線標註",
        "curriculumCode": "115-專二-製圖-05",
        "importance": 5,
        "textbookChapter": "全華/科友 建築製圖實習 第四章 剖視圖",
        "intuitiveAnalogy": "切蘋果看果核：整顆對半切開叫「全剖」；切開四分之一、留四分之三叫「半剖」（一半看紅紅的果皮，一半看裡面的蘋果核）；用手掰開一小塊看蛀蟲叫「局部剖」！",
        "summary": "剖視圖五大分類：① 全剖視圖 (Full Section)：割面完全切過物體全長，內部構造一目了然；② 半剖視圖 (Half Section)：適用於對稱幾何形體，以中心線為界，一半呈現外觀外形、另一半呈現內部剖面，中心線兩側嚴禁繪製隱藏線；③ 局部剖視圖 (Broken-out Section)：僅需表達物體某一局部內部構造，以徒手繪製之「不規則波浪線（細實線）」為邊界；④ 旋轉剖視圖 (Revolved Section)：將橫斷面在原位置原地旋轉 90° 繪出；⑤ 移轉剖面 (Removed Section)：將斷面移至視圖外繪製。剖面線 (Hatching)：以細實線與主輪廓線夾 45° 繪製，間距約 1.5~3 mm 均勻排列。",
        "keyFormulaOrRule": "剖面線以細實線夾 45° 等距繪製；半剖視圖以細鏈中心線為分界，兩側不畫隱藏線；割面線為特粗鏈線帶箭頭。",
        "cramTips": [
          "割面線之箭頭方向：表示觀察者眼睛「看過去的視線方向」！",
          "同一零件在各剖視圖中，其剖面線方向與間距必須完全相同！",
          "相鄰兩相接不同零件：剖面線應改變方向（互為 45° 與 135°）或錯開間距以資識別！"
        ],
        "trapWarning": "四大不加剖面線之鋼骨機械構件：肋板 (Rib)、輪輻 (Spoke)、軸心 (Shaft)、螺栓與銷 (Bolt & Pin)，若「沿長度方向縱向剖切」，依法「絕不加剖面線」！",
        "junyiMasterySkill": "各類剖視圖繪製規範與剖面線禁忌構件判定"
      },
      {
        "id": "dra-g10-s1-final-02",
        "title": "輔助視圖 (Auxiliary Views) 投影求斜面真實形狀",
        "curriculumCode": "115-專二-製圖-06",
        "importance": 4,
        "textbookChapter": "全華/科友 建築製圖實習 第五章 輔助視圖",
        "intuitiveAnalogy": "拿一面鏡子照斜屋頂：如果鏡子平平放（三視圖正投影），屋頂在鏡子裡被壓得扁扁窄窄的（縮小變形）；但如果把鏡子傾斜到跟屋頂完全平行，鏡子裡照出來的就是屋頂百分之百真實大小的本尊！這面平行的鏡子就是「輔助基準面」！",
        "summary": "輔助視圖原理：當物體具備傾斜於正投影面之單斜面時，該斜面在前視、俯視或側視圖中皆呈縮形 (Fore-shortened)。為獲得斜面之「真實大小與形狀 (True Shape)」，必須設立一個「平行於該斜面」之輔助投影基準面 (Reference Plane, RP)，並沿著「垂直於該斜面」的方向進行投影。主輔助視圖分類：前視輔助視圖（自前視圖斜向引出）、俯視輔助視圖（自俯視圖引出）、側視輔助視圖（自側視圖引出）。作圖原則：斜面實長在邊緣視圖 (Edge View) 中直接量得，寬度則自相鄰正規視圖經基準線 RP 等量引取。",
        "keyFormulaOrRule": "投射線必垂直於斜面邊緣線 (90°)；寬度尺寸取自第三視圖中之基準線 RP 距離；展開即得真實形狀 (True Shape)。",
        "cramTips": [
          "求斜面實形第一步：先找到該斜面呈現為單一斜直線的「邊緣視圖 (Edge View)」！",
          "投射線方向必定垂直於該斜線（90° 垂直射出）！",
          "基準線 RP 平行於斜線放置，垂直投影取深度寬度。"
        ],
        "trapWarning": "投射線方向如果沒有與斜線嚴格垂直 90°，畫出來的輔助視圖依然是變形的假尺寸！量取寬度時基準線兩側距離必須對照清晰！",
        "junyiMasterySkill": "單斜面輔助視圖投影求真實形狀與尺寸"
      }
    ],
    "cramFormulaCards": [
      {
        "title": "剖視圖四大禁剖構件卡",
        "formula": "肋板 (Rib)、軸心 (Shaft)、螺栓 (Bolt)、輪輻 (Spoke)",
        "notes": "縱向剖切一律不加剖面線，視為未被剖切之實體外觀呈現。",
        "memoryMnemonic": "肋軸螺輪縱向剖，保持實體不打斜。"
      },
      {
        "title": "輔助視圖作圖三步卡",
        "formula": "① 找邊緣直線 ➜ ② 引 90° 垂直投射線 ➜ ③ 取 RP 深度定實形",
        "notes": "基準面 RP 平行於斜面，投影線垂直於斜面。",
        "memoryMnemonic": "平行放基準，垂直引射線，深度照搬得實形。"
      }
    ],
    "workedExamples": [
      {
        "id": "ex-dra-g10-s1-final-01",
        "title": "對稱機械構件半剖視圖與剖面線 45° 規則繪製",
        "targetConcept": "半剖視圖與中心線兩側虛線省略規範",
        "difficulty": "段考常考",
        "questionStem": "一圓柱形法蘭盤對稱構件（外徑 120 mm，內通孔徑 40 mm，高 60 mm），若在前視圖採用「半剖視圖」表達。試說明：(1) 分界線應採用何種線型？(2) 剖面的一半應置於何側？(3) 未剖切的外觀半邊是否需要繪製內部的隱藏虛線？(4) 剖面線之標準繪製要求為何？",
        "beginnerThinking": "半剖視圖是專門給「左右或上下對稱」物體用的神器！一半看外形、一半看剖面，中間用細鏈中心線隔開；因為剖開那半邊已經把內部看光光了，沒剖的那半邊就絕對「不要畫虛線」，否則圖面會很髒！",
        "stepByStepSolution": [
          {
            "stepNo": 1,
            "title": "確定分界線與剖面位置",
            "content": "半剖視圖的分界線「必須」採用細鏈線（中心線），絕不可使用粗實線！垂直中心線對稱時，習慣上將「右半邊」繪製為內部剖面，「左半邊」保留為外部外觀輪廓。"
          },
          {
            "stepNo": 2,
            "title": "隱藏線省略規則判定",
            "content": "在未剖切之左半邊，因內部孔洞構造已在右半剖面中完整清晰表達，依 CNS 規定「左側外觀半邊一律省略所有隱藏虛線」，保持圖面簡潔明瞭。"
          },
          {
            "stepNo": 3,
            "title": "剖面線 (Hatching) 繪製",
            "content": "右半邊實體被剖切處，以細實線與水平輪廓線夾 45° 傾斜角均勻繪製，線距約 2~2.5 mm。中央直徑 40 mm 之空心圓孔處為空氣空間，嚴禁繪製剖面線（留白）。"
          }
        ],
        "examinerTrapWarning": "分界線千萬不可畫成粗實線！畫粗實線代表物體真的被切開成兩半獨立塊！必須是細長鏈中心線！且外觀半邊畫隱藏線必被扣分！",
        "quickMnemonic": "半剖中心線為界，右剖左觀省虛線，空洞留白實肉斜。",
        "finalAnswer": "(1) 細鏈中心線；(2) 習慣置於右側；(3) 嚴格省略隱藏線；(4) 細實線夾 45° 等距均勻排列。"
      },
      {
        "id": "ex-dra-g10-s1-final-02",
        "title": "單斜面構件基準面上輔助視圖實長與實形作圖",
        "targetConcept": "輔助視圖投影求斜面真實形狀 SOP",
        "difficulty": "高手衝刺",
        "questionStem": "一形狀如楔形的鋼楔塊，在前視圖中其頂部傾斜面呈現一條傾角 30°、長度 80 mm 之傾斜直線（邊緣視圖 Edge View），在俯視圖中此斜面寬度為 50 mm。試求：(1) 此斜面在前視、俯視圖中的面積表現；(2) 如何作圖求得該斜面的「真實形狀 (True Shape)」？(3) 此斜面的真實面積為多少 mm²？",
        "beginnerThinking": "前視圖看到的是一條線（面積為 0）；俯視圖看到的是被壓縮的水平投影面（縮形面）；只有跟斜面平行的輔助視圖才能看到真實矩形！真實面積直接等於實長 80 mm 乘以實寬 50 mm！",
        "stepByStepSolution": [
          {
            "stepNo": 1,
            "title": "分析正規視圖中斜面之縮形現象",
            "content": "前視圖中斜面垂直於前投影面，故投影積聚為單一傾斜直線（實長 80 mm）；俯視圖中斜面投影長度為 80·cos(30°) ≈ 69.28 mm，寬度為 50 mm，所見為縮小之投影面積 69.28 × 50 ≈ 3464 mm²。"
          },
          {
            "stepNo": 2,
            "title": "輔助視圖作圖 3 步驟",
            "content": "步驟 ①：平行於前視圖斜線放置一條基準線 RP1-1；步驟 ②：自前視圖斜線兩端點，沿著「垂直於斜線 (90°)」之方向拉出兩條平行的投射引線；步驟 ③：自俯視圖量取物體寬度 50 mm，於輔助投影線中由基準線 RP 向上截取 50 mm，連線封閉形成矩形。"
          },
          {
            "stepNo": 3,
            "title": "計算斜面真實形狀面積",
            "content": "輔助視圖所得為斜面之「真實形狀」，其長度為真實長度 L = 80 mm，寬度為真實寬度 W = 50 mm。真實面積 A_true = 80 × 50 = 4000 mm²。"
          }
        ],
        "examinerTrapWarning": "切勿拿俯視圖縮小的投影長度 69.28 mm 當作真實尺寸！輔助視圖的長度直接由前視邊緣線投射得出 (80 mm)！",
        "quickMnemonic": "斜線九十度引射線，寬度俯視平移搬，乘積即為真實面。",
        "finalAnswer": "(1) 前視呈直線、俯視呈縮形矩形；(2) 經平行 RP 垂直投射引出實長與寬度；(3) 真實面積 = 4000 mm²"
      }
    ],
    "crossReferencedQuestions": [
      {
        "id": "q-dra-g10-s1-final-taichung",
        "sourceExam": "台中高工 112 學年度高一上建築製圖實習期末考 第 21 題",
        "questionStem": "下列各機械與建築鋼構構件，若沿其「縱向中心線（長度方向）」進行剖切，依 CNS 規定何者「絕對不加畫剖面線」？",
        "options": {
          "A": "支撐肋板 (Rib) 與軸心 (Shaft)",
          "B": "空心水管與箱型梁腹板",
          "C": "階梯踏步實體斷面",
          "D": "混凝土連續基礎斷面"
        },
        "answer": "A",
        "detailedExplanation": "依 CNS 製圖規範，肋板 (Rib)、輪輻 (Spoke)、實心軸 (Shaft)、螺栓與銷、齒輪輪齒等零件，若沿其長度方向縱向剖切，為避免被誤認是厚重巨大之實心塊體，一律「不加剖面線」，仍以外形輪廓呈現。故選 A。",
        "relatedKnowledgePointId": "dra-g10-s1-final-01",
        "examTrickAnalysis": "剖視圖四大天王禁剖構件（肋、軸、螺、輻），年年必考的法規題。"
      },
      {
        "id": "q-dra-g10-s1-final-02",
        "sourceExam": "台中高工 111 學年度高一上建築製圖實習期末考 第 17 題",
        "questionStem": "關於單斜面輔助視圖之繪製原理，下列敘述何者錯誤？",
        "options": {
          "A": "輔助投影線應平行於斜面的邊緣視圖直線",
          "B": "輔助投影基準面 (RP) 必須平行於斜面放置",
          "C": "投射線必須與斜面邊緣線保持 90° 垂直",
          "D": "輔助視圖所呈現之斜面為真實大小與形狀 (True Shape)"
        },
        "answer": "A",
        "detailedExplanation": "輔助投影線（投射線）必須「垂直於」斜面的邊緣視圖直線，而非平行！只有基準線 RP 才是平行於斜面。選項 A 敘述錯誤，故選 A。",
        "relatedKnowledgePointId": "dra-g10-s1-final-02",
        "examTrickAnalysis": "文字陷阱題：注意區分「基準面 RP 平行斜面」與「投射線垂直斜面」。"
      }
    ],
    "preExamChecklist": [
      "我能熟練區分全剖、半剖、局部剖、旋轉剖的應用時機與線型分界。",
      "我熟記肋板、軸心、螺栓縱剖絕不打剖面線之 CNS 鐵律。",
      "我能運用輔助基準面 RP 作圖求得單斜面真實大小 (True Shape)。"
    ]
  },
  {
    "id": "g10-arch-intro-s2-m1",
    "grade": 10,
    "semester": "s2",
    "semesterTitle": "高一下學期",
    "period": "midterm-1",
    "periodName": "第一次段考（期中考一）",
    "weekRange": "第 6~7 週",
    "subjectSlug": "construction",
    "subjectName": "建築工程概論",
    "category": "專業科目（二）",
    "targetSchool": "全國高工土木建築群指標對照",
    "examScope": "第一章 建築概論與綠建築 EEWH 九大指標評估體系、第二章 建築結構系統（RC、SC、SRC 結構性能與抗震比較）",
    "schoolContextNotes": "建築科高一接觸營建實務之核心大考。EEWH 綠建築四大範疇九大指標（日常節能為首要門檻）、RC/SC/SRC 三大結構系統耐震延性與施工比較，佔段考 80%。",
    "scoreWeight": "佔學期學業成績 20%",
    "handoutSummary": "台灣 EEWH 綠建築包含四大範疇（生態、節能、減廢、健康）；日常節能是通過綠建築之絕對必要門檻；RC 自重大剛度高便宜耐火、SC 自重輕延性韌性高但怕火怕風晃、SRC 剛韌並濟超高層首選！",
    "beginnerMindset": "綠建築四大範疇用四個字記：「生、能、廢、康」（生態、節能、減廢、健康）；結構三大主流用材質想：RC 是水泥裹鋼筋（笨重耐火）、SC 是純鋼鐵骨架（柔軟耐震但怕火）、SRC 就是鋼骨外面再穿水泥鎧甲（無懈可擊但最貴）！",
    "downloadablePdfFilename": "Arch-G10-ArchIntro-S2-M1.pdf",
    "knowledgePoints": [
      {
        "id": "con-g10-s2-m1-01",
        "title": "台灣綠建築評估系統 EEWH 九大指標與四大範疇",
        "curriculumCode": "115-專二-構造-01",
        "importance": 5,
        "textbookChapter": "全華/科友 建築工程概論 第一章 綠建築技術",
        "intuitiveAnalogy": "綠建築標章就像給建築物發健康檢查報告：分為四大家族「生、能、廢、康」。如果建築物想拿標章，其中「日常節能」與「水資源」就像及格底線，只要日常節能不及格，其他指標拿滿分也直接被當掉（一票否決制）！",
        "summary": "台灣綠建築評估系統 (EEWH) 四大範疇與九大指標：① 生態 (Ecology)：生物多樣性指標、綠化量指標、基地保水指標；② 節能 (Energy Saving)：日常節能指標（核心為外殼節能 ENVLOAD、空調節能與照明節能，佔節能審查 100% 門檻）；③ 減廢 (Waste Reduction)：二氧化碳減量指標、廢棄物減量指標；④ 健康 (Health)：室內環境指標、水資源指標、污水垃圾改善指標。綠建築五大評定分級：合格級、銅級、銀級、黃金級、鑽石級 (Diamond 最高等級)。",
        "keyFormulaOrRule": "四大範疇：生 (3)、能 (1)、廢 (2)、康 (3) 共 9 指標；日常節能與水資源為「必備及格門檻」；鑽石級為最頂級標章。",
        "cramTips": [
          "九大指標口訣：「生綠基、外空照、碳廢、室水污」！",
          "「日常節能指標」是九大指標中節能效果最大、最核心之關鍵指針！",
          "基地保水指標的核心工程手段：透水鋪面、雨水滲透陰井與景觀草溝。"
        ],
        "trapWarning": "生物多樣性指標只適用於「大基地 (≧ 2 公頃) 或特定生態開發案」，一般小型獨棟住宅免評；日常節能指標為強制門檻，未達標則無法取得綠建築標章！",
        "junyiMasterySkill": "台灣綠建築 EEWH 四大範疇九大指標體系"
      },
      {
        "id": "con-g10-s2-m1-02",
        "title": "建築結構系統分類：RC、SC、SRC 耐震性能比較",
        "curriculumCode": "115-專二-構造-02",
        "importance": 5,
        "textbookChapter": "全華/科友 建築工程概論 第二章 建築構造體系",
        "intuitiveAnalogy": "三大結構像武俠高手的防身功夫：RC (鋼筋混凝土) 像金鐘罩，硬邦邦但遇到超級大震容易裂開震碎（脆性）；SC (鋼骨) 像太極拳，柔軟靈活隨風搖擺不倒（延性好），但怕高溫火燒；SRC (鋼骨鋼筋混凝土) 就是金鐘罩加太極拳合體，骨子裡是鋼梁鋼柱，外表裹厚厚水泥，耐震又耐火！",
        "summary": "三大主流耐震建築結構系統綜合性能對照：① RC (鋼筋混凝土構造)：自重最重、結構剛度高（強風地震下人體晃動感受小）、防火耐蝕性優、造價最低；但韌性延展性較差、施工工期長、濕式作業受天候影響大，適用於 15 樓以下低中樓層建築；② SC (鋼骨構造，純鋼骨)：自重極輕（約 RC 之 1/3）、材料韌性延展性極佳（能吸收大量強震能量）、構件工廠預製現場吊裝工期極短；但高溫下鋼材強度快速劣化，必須施作「防火被覆」，且側向剛度較小，強風地震時搖晃位移大，需加裝阻尼器 (TMD)，適用於 30 樓以上超高層大樓；③ SRC (鋼骨鋼筋混凝土)：內藏厚鋼骨、外包鋼筋澆置混凝土，完美融合 RC 之高剛性耐火與 SC 之高延性韌性，柱截面較純 RC 縮小 1/3，但施工工法複雜、節點鋼筋穿孔繁瑣、造價最高，為強震區 15~30 樓頂級豪宅與地標首選。",
        "keyFormulaOrRule": "延性韌性排序：SC ＞ SRC ＞ RC；結構剛度與自重：RC ＞ SRC ＞ SC；防火耐蝕：RC ＞ SRC ＞ SC。",
        "cramTips": [
          "RC 致命缺點：自重過大、韌性低，強震下容易產生剪力脆性破壞！",
          "SC 致命缺點：怕火（600°C 降伏強度折半）、強風易晃動，外觀必須包覆防火漆或石膏板防火被覆！",
          "SRC 梁柱接頭施工關鍵：鋼骨梁翼緣需焊接剪力釘 (Shear Stud)，柱樑交會處鋼筋穿越需預留穿孔！"
        ],
        "trapWarning": "不要以為純鋼骨 SC 永遠最好！低樓層透天若蓋 SC 常常太輕且晃動感劇烈，隔音又差；高層建築必須綜合考量自重、工期、耐火與造價！",
        "junyiMasterySkill": "RC、SC 與 SRC 建築結構耐震性能與施工特性比對"
      }
    ],
    "cramFormulaCards": [
      {
        "title": "EEWH 綠建築四大範疇速記卡",
        "formula": "生 (生態) ＋ 能 (節能) ＋ 廢 (減廢) ＋ 康 (健康)",
        "notes": "生3 (生物、綠化、保水)；能1 (日常節能)；廢2 (二氧化碳、廢棄物)；康3 (室內、水資源、污水垃圾)。",
        "memoryMnemonic": "生能廢康九指標，日常節能及格票。"
      },
      {
        "title": "三大結構系統特性速查卡",
        "formula": "RC (重、剛、耐火、便宜) ｜ SC (輕、韌、怕火、晃) ｜ SRC (剛韌、兼備、頂級)",
        "notes": "延性韌性 SC 最優；施工工期 SC 最快；耐火 RC 最強。",
        "memoryMnemonic": "水泥笨重鋼骨晃，鋼筋外包鋼骨強。"
      }
    ],
    "workedExamples": [
      {
        "id": "ex-con-g10-s2-m1-01",
        "title": "日常節能指標三大關鍵：外殼 ENVLOAD 與設備效率計算",
        "targetConcept": "日常節能指標與建築外殼節能設計",
        "difficulty": "段考常考",
        "questionStem": "在台灣 EEWH 綠建築評估中：(1)「日常節能指標」所涵蓋之三大主要評估子項為何？(2) 何謂「建築外殼節能指標 (ENVLOAD)」？(3) 為降低夏季建築外殼熱負荷，建築設計上最有效且經濟之物理手法有哪些？",
        "beginnerThinking": "日常節能就是看這棟房子平常用電兇不兇！電主要花在「吹冷氣」跟「開電燈」：所以算外面的太陽熱進來多少（外殼）、冷氣機好不好（空調系統）、電燈省不省電（照明系統）！防熱最好就是做遮陽板跟遮陽百葉！",
        "stepByStepSolution": [
          {
            "stepNo": 1,
            "title": "列出日常節能指標三大評估範疇",
            "content": "日常節能指標包含：① 建築外殼節能 (ENVLOAD)；② 空調系統節能 (EAC)；③ 照明系統節能 (EL)。此三大系統涵蓋建築日常營運中 80% 以上之電力消耗。"
          },
          {
            "stepNo": 2,
            "title": "定義建築外殼節能指標 (ENVLOAD)",
            "content": "ENVLOAD 指標為評估建築物因外牆、屋頂、開口部門窗傳導與日射輻射所導入建築內部之「全年累積空調冷房熱負荷總量」。其值越低，代表建築隔熱遮陽性能越佳，空調節能潛力越高。"
          },
          {
            "stepNo": 3,
            "title": "歸納外殼防熱四大物理手法",
            "content": "① 設置深開窗與水平/垂直遮陽板（有效阻擋夏季高角度直射豔陽）；② 採用低輻射 Low-E 複層雙層中空玻璃；③ 屋頂施作隔熱磚、綠化草坡或雙層通風斜屋頂；④ 減少大面積東西向玻璃帷幕開窗，增設建築外牆通風遮陽百葉。"
          }
        ],
        "examinerTrapWarning": "切勿回答「裝太陽能板發電」當作降低 ENVLOAD 的手法！太陽能發電屬於再生能源，而 ENVLOAD 專門評估「外殼本身的隔熱與遮陽被動物理性能」！",
        "quickMnemonic": "外殼空調與照明，遮陽隔熱低負荷，西曬少開大面窗。",
        "finalAnswer": "(1) 外殼節能 ENVLOAD、空調節能 EAC、照明節能 EL；(2) 全年空調冷房熱負荷指標；(3) 深開窗遮陽、Low-E 玻璃、屋頂隔熱綠化。"
      },
      {
        "id": "ex-con-g10-s2-m1-02",
        "title": "RC vs SC vs SRC 結構自重、防火被覆與超高層選用",
        "targetConcept": "結構系統選型工程決策分析",
        "difficulty": "高手衝刺",
        "questionStem": "某建設公司預計在台北市精華區興建一棟地上 38 層、地下 5 層之超高層住商複合摩天大樓。結構技師團隊在規劃初期針對 RC、SC 與 SRC 三種結構系統進行評估：(1) 為何該棟大樓「絕對不適合」採用純 RC 結構？(2) 若採用 SC 結構，在防火與抗風抗震方面必須額外克服哪些工程課題？(3) 最終選擇 SRC 結構之核心優勢為何？",
        "beginnerThinking": "蓋到 38 樓！太高了！如果用 RC，底下的柱子為了撐住整棟樓的重量，必須做得像一間房間那麼大，室內空間全被柱子佔滿，而且強震來時容易脆斷！SC 輕盈耐震，但強風一吹會搖晃很厲害，且鋼鐵怕火必須噴防火漆；SRC 則完美兼顧！",
        "stepByStepSolution": [
          {
            "stepNo": 1,
            "title": "分析純 RC 結構不適用於 38 層超高層之原因",
            "content": "RC 自重極大，樓層高達 38 層時，底層柱必須承受數萬噸巨大軸向荷重。若採用 RC，底層柱斷面尺寸將高達 2.5m × 2.5m 以上，嚴重侵蝕室內使用面積與停車空間；且高壓應力下 RC 柱延展韌性低，強震時極易發生外表混凝土崩落碎裂之剪力脆性破壞。"
          },
          {
            "stepNo": 2,
            "title": "分析純 SC 結構之工程克服要點",
            "content": "① 防火防護：鋼材在 550°C~600°C 時降伏強度驟降至常溫的 50%，必須全棟鋼構件表面噴塗厚層「防火被覆 (Fireproofing)」或石膏板包覆，確保達 2~3 小時法定防火時效；② 抗風抗晃：SC 側向剛度小、自重輕，強風吹拂下頂樓側移加速度大，人體易眩暈，必須於頂層增設「調諧質量阻尼器 (TMD)」以抑止風致晃動。"
          },
          {
            "stepNo": 3,
            "title": "歸納選用 SRC 結構系統之核心優勢",
            "content": "SRC 完美發揮複合材料優勢：內層鋼骨分擔強大剪力與地震反覆塑性變形（高韌性）；外層包覆之厚鋼筋混凝土則提供高側向剛度以抑制風搖晃，同時自然具備混凝土優異之防火抗火與耐腐蝕性能，底層柱斷面可縮減約 30%~40%，兼顧結構安全、耐火安全與空間效益。"
          }
        ],
        "examinerTrapWarning": "很多人誤以為 SRC 只是普通 RC 裡面隨便丟幾根工字鋼。SRC 梁柱接頭之鋼筋穿越孔、梁腹板螺栓摩擦接合與剪力釘焊接極其精密，施工複雜度與成本遠高於純 RC！",
        "quickMnemonic": "超高不用純水泥，鋼骨怕火又怕晃，SRC剛柔並濟最首選。",
        "finalAnswer": "(1) 自重過大底柱斷面過巨且易脆斷；(2) 須施作防火被覆與加裝調諧質量阻尼器 (TMD) 抑晃；(3) 兼具剛度耐火與韌性延展，柱斷面小抗風抗震最佳。"
      }
    ],
    "crossReferencedQuestions": [
      {
        "id": "q-con-g10-s2-m1-taichung",
        "sourceExam": "台中高工 112 學年度高一下建築工程概論第一次段考 第 14 題",
        "questionStem": "在台灣內政部建築研究所綠建築評估系統 (EEWH) 中，申請綠建築標章時，下列何項指標屬於「一票否決之必要門檻指標」？",
        "options": {
          "A": "日常節能指標 與 水資源指標",
          "B": "生物多樣性指標 與 廢棄物減量指標",
          "C": "綠化量指標 與 室內環境指標",
          "D": "基地保水指標 與 污水垃圾改善指標"
        },
        "answer": "A",
        "detailedExplanation": "依台灣綠建築 EEWH 評估手冊規定，「日常節能指標」與「水資源指標」為取得綠建築標章之法定基本門檻指標。若此二項任一項未達標，即使其餘指標得分再高，亦無法獲頒任何等級之綠建築標章。故選 A。",
        "relatedKnowledgePointId": "con-g10-s2-m1-01",
        "examTrickAnalysis": "綠建築標章通過底線：日常節能與水資源雙門檻，必考送分題。"
      },
      {
        "id": "q-con-g10-s2-m1-02",
        "sourceExam": "台中高工 111 學年度高一下建築工程概論第一次段考 第 16 題",
        "questionStem": "下列關於鋼骨構造 (SC) 與鋼筋混凝土構造 (RC) 特性之比較，何者敘述正確？",
        "options": {
          "A": "SC 構造之自重約僅為 RC 構造之 1/3，故強震時地表面受地震力較小",
          "B": "SC 構造之耐火性能天然優於 RC 構造，不需施作防火被覆",
          "C": "RC 構造之延性韌性遠優於 SC 構造，超高層大樓多採用純 RC",
          "D": "RC 構造之施工工期遠比 SC 鋼骨吊裝工期更為短暫快速"
        },
        "answer": "A",
        "detailedExplanation": "地震力大小與建築物有效自重成正比 (V = C·W)。SC 自重僅約為 RC 的三分之一，故承受地震力顯著較小且鋼材具高延展韌性。鋼材在高溫下強度會劣化，必須施作防火被覆 (B 錯)；SC 延性優於 RC (C 錯)；SC 工廠預製現場螺栓吊裝，工期遠快於 RC 現場灌漿養護 (D 錯)。故選 A。",
        "relatedKnowledgePointId": "con-g10-s2-m1-02",
        "examTrickAnalysis": "地震力 V=C·W，自重輕則地震力小，此為高層鋼骨最大優點。"
      }
    ],
    "preExamChecklist": [
      "我能背出 EEWH 四大範疇九大指標口訣並清楚及格門檻。",
      "我熟記 RC、SC、SRC 三大結構系統在自重、韌性、耐火與工期上之優缺點。",
      "我能清楚說明建築外殼 ENVLOAD 與遮陽防熱手法之物理原理。"
    ]
  },
  {
    "id": "g12-arch-s1-mock1",
    "grade": 12,
    "semester": "s1",
    "semesterTitle": "高三上學期",
    "period": "midterm-1",
    "periodName": "第一次統測全真模擬考（跨單元總複習一）",
    "weekRange": "第 8~9 週",
    "subjectSlug": "mechanics",
    "subjectName": "專業科目（一）工程力學總衝刺",
    "category": "專業科目（一）",
    "targetSchool": "全國高工土木建築群指標對照",
    "examScope": "專一工程力學第一至第六章全範圍：共點力平衡、力矩力偶、重心摩擦、桁架與滑輪組力學",
    "schoolContextNotes": "高三上學期第一次全真統測模擬考。題型整合跨章節觀念，如「桁架支承反力結合截面法內力求解」、「複式滑輪組機械利益與繩索張力向量平衡」，計算量大且陷阱密布。",
    "scoreWeight": "佔學期學業成績 25%",
    "handoutSummary": "統測力學大題必考跨單元整合：支承反力算錯全盤皆輸；複式滑輪組機械利益 MA 等於吊著動滑輪之繩索段數 n，拉繩力 F = W/n；截面法兩未知桿交點取矩一式秒殺指定桿件！",
    "beginnerMindset": "面對高三大考綜合題，秘訣在於「拆成兩個小題目」：前半段永遠是「求整體剛體支承反力」，後半段才是「求特定桿件或繩索張力」！只要前半段穩穩算對，後面就跟高一單元考一模一樣！",
    "downloadablePdfFilename": "Arch-G12-Unified-Mock-1.pdf",
    "knowledgePoints": [
      {
        "id": "g12-mock-01",
        "title": "統測專一力學全範圍衝刺：桁架、剛架、摩擦角與重心組合題",
        "curriculumCode": "115-專一-統測衝刺-01",
        "importance": 5,
        "textbookChapter": "統測歷屆試題與全真模擬 第 1~6 章精選",
        "intuitiveAnalogy": "就像三鐵全能接力賽：第一棒先算形心把重心定下來，第二棒利用摩擦角判斷會不會滑走，第三棒用截面法算出鋼架裡面哪根骨頭受力最大！一步扣一步，任何一棒都不能掉棒！",
        "summary": "跨單元整合解題四大黃金 SOP：① 第一步繪製整體系統之自由體圖 (FBD)，去除所有鉸支承與滾支承，標註反力代號 (RAx, RAy, RB)；② 第二步利用剛體平衡三方程式 ΣFx=0, ΣFy=0, ΣMo=0 求解外支承反力；③ 第三步針對題目所求進行局部隔離：求特定桿件用截面法虛擬切斷不超過 3 桿，取兩桿交點取矩求第三桿；④ 第四步檢驗正負號：拉力為正 (T)，壓力為負 (C)，數值寫明單位。",
        "keyFormulaOrRule": "外反力 ➜ 內切剖 ➜ 交點取矩；靜摩擦檢核 fs ≦ μs·N；形心坐標 X_bar = ΣAi·xi / ΣAi。",
        "cramTips": [
          "求整體支承反力時，絕對不要先算內部桿件！",
          "選取矩點優先選「未知力最多且交會於一點的支承點」！",
          "斜向支承反力必垂直於支承面！"
        ],
        "trapWarning": "桁架節點若有斜向外力，切記分解為正交水平與垂直分力後再代入平衡式，不可拿斜向力直接當作垂直力代入！",
        "junyiMasterySkill": "統測力學跨單元綜合力平衡與內力解析"
      },
      {
        "id": "g12-mock-01-02",
        "title": "複式滑輪組機械利益與繩索張力向量平衡速解",
        "curriculumCode": "115-專一-統測衝刺-02",
        "importance": 5,
        "textbookChapter": "統測歷屆試題 滑輪組與機械利益專題",
        "intuitiveAnalogy": "滑輪組拔河：如果天花板上掛了兩組滑輪，有 4 根繩子一起向上拉著底下的重物，重物 100 公斤就被 4 根繩子平分，每根繩子只分擔 25 公斤！你只要拉最外面的那根繩子，就等於只出 25 公斤力氣就能舉起 100 公斤的巨石！",
        "summary": "滑輪系統力學原理：① 定滑輪 (Fixed Pulley)：軸心固定不動，機械利益 MA = 1，不省力亦不費力，唯一功能為改變施力方向（向下施力向上舉物）；② 動滑輪 (Movable Pulley)：軸心隨重物上下移動，由 2 段繩索承擔載重，MA = 2，可省力一半 (F = W/2)，但施力端移動距離為重物上升高度的 2 倍 (S = 2h)；③ 複式滑輪組 (Block and Tackle)：由若干定滑輪與動滑輪組合而成，機械利益 MA ＝ 直接承擔重物與動滑輪組之「向上繩索段數 n」；施力公式 F = W / n；拉動繩長 S = n · h；整條連續輕繩上之張力 T 處處相等！",
        "keyFormulaOrRule": "機械利益 MA = W / F = n；施力 F = W / n；拉繩位移 S = n · h；輕繩張力 T = F。",
        "cramTips": [
          "數繩子段數 n 秘訣：拿刀在動滑輪上方切一橫刀，數數被切斷的向上繩子有幾根，n 就是幾！",
          "若施力端繩索向下引導（繞過定滑輪向下拉），該段施力繩「不承擔向上吊重」，不計入 n！",
          "若施力端繩索直接自「動滑輪」向上拉，該施力繩段「計入向上吊重 n」！"
        ],
        "trapWarning": "注意施力繩的拉動方向！若人站在地面向下拉，繩段數 n 往往是偶數；若向上拉，n 往往包含施力段！千萬不要數錯 n！",
        "junyiMasterySkill": "複式滑輪組繩索張力平衡與機械利益分析"
      }
    ],
    "cramFormulaCards": [
      {
        "title": "滑輪組機械利益速算卡",
        "formula": "F = W / n,   S = n · h,   MA = n",
        "notes": "n 為直接支撐動滑輪之垂直繩索段數。功守恆：F·S = W·h (不計摩擦)。",
        "memoryMnemonic": "動輪向上繩幾段，省力倍數就是它，拉繩距離乘倍數。"
      },
      {
        "title": "跨單元解題心法卡",
        "formula": "整體外反力 (ΣFx, ΣFy, ΣMo) ➜ 截面內力剖切 (ΣM_cross = 0)",
        "notes": "先外後內，先求反力再切桿件，取交點一式秒殺。",
        "memoryMnemonic": "外反力先定乾坤，截面法一刀見真章。"
      }
    ],
    "workedExamples": [
      {
        "id": "ex-g12-mock-01-01",
        "title": "跨單元桁架支承反力結合截面法求解指定斜桿內力",
        "targetConcept": "跨單元剛體平衡與截面法綜合解題",
        "difficulty": "高手衝刺",
        "questionStem": "一對稱桁架跨度 8 m，高 3 m。左端 A 為鉸支承，右端 E 為滾支承。上弦中央節點 C 承受一向下集中載重 P = 80 kN，左第一跨節點 B 承受一水平向右載重 Q = 30 kN。試求：(1) A 端之水平反力 HA 及垂直反力 RA；(2) 右端 E 點垂直反力 RE；(3) 利用截面法求中央右側斜腹桿 CD 之軸力。",
        "beginnerThinking": "第一步：把整個桁架當作一個剛體，用三平衡式求出支承反力；第二步：一刀切過想求的斜腹桿 CD，取受力最少的一邊（右邊）當隔離體，列平衡式解出桿力！",
        "stepByStepSolution": [
          {
            "stepNo": 1,
            "title": "求解整體桁架之支承外反力",
            "content": "水平平衡：ΣFx = Q - HA = 0 ➜ 30 - HA = 0 ➜ HA = 30 kN (向左)。取 A 點為矩心：ΣMA = 0 ➜ RE × 8 - P × 4 - Q × 3 = 0 ➜ 8 RE - (80 × 4) - (30 × 3) = 0 ➜ 8 RE - 320 - 90 = 0 ➜ 8 RE = 410 ➜ RE = 51.25 kN (向上)。垂直平衡：ΣFy = RA + RE - 80 = 0 ➜ RA = 80 - 51.25 = 28.75 kN (向上)。"
          },
          {
            "stepNo": 2,
            "title": "以虛擬截面剖切並取右半部為隔離體",
            "content": "作截面 1-1 切過上弦桿、斜腹桿 CD 與下弦桿。取右側隔離體：僅受向上的滾支承反力 RE = 51.25 kN 及被切斷之三桿內力。"
          },
          {
            "stepNo": 3,
            "title": "列垂直平衡方程式求斜桿軸力 F_CD",
            "content": "水平上弦與下弦桿在垂直方向無分力。斜腹桿 CD 斜角為 tanθ = 3 / 2 = 1.5 ➜ sinθ = 3 / √13 ≈ 0.832。假設 F_CD 受拉（朝左上方）：ΣFy = RE + F_CD · sinθ = 0 ➜ 51.25 + F_CD · (3 / √13) = 0 ➜ F_CD = -51.25 × √13 / 3 ≈ -61.59 kN (壓力 C)。"
          }
        ],
        "examinerTrapWarning": "取矩時水平力 Q = 30 kN 具有力臂 3 m，許多同學漏算 Q 對 A 點之力矩導致兩端垂直反力全錯！",
        "quickMnemonic": "外力水平要乘高，取矩點定求反力，截面取右無干擾。",
        "finalAnswer": "HA = 30 kN (向左), RA = 28.75 kN (向上), RE = 51.25 kN (向上)；斜腹桿 CD = 61.59 kN (壓力 C)"
      },
      {
        "id": "ex-g12-mock-01-02",
        "title": "複式滑輪組牽引重物之繩索張力與機械利益計算",
        "targetConcept": "複式滑輪組機械利益與向量平衡",
        "difficulty": "段考常考",
        "questionStem": "一複式滑輪組由 2 個定滑輪與 2 個動滑輪組成，重物 W = 600 kgf 懸掛於動滑輪組下方。輕繩之一端固定於動滑輪架上，連續穿繞兩組滑輪後，施力端自最上方定滑輪「朝下拉引」施力 F。(1) 承擔重物之垂直繩段數 n 為何？(2) 若不計滑輪重與摩擦力，使重物等速上升所需之施力 F 為何？(3) 若欲將重物提升 3 m，施力端繩索需向下拉引多少公尺？",
        "beginnerThinking": "繩子固定在動滑輪架上，穿過 2 個動滑輪與 2 個定滑輪，最後向下牽引。畫一刀橫切動滑輪上方，數向上支撐的繩子段數！施力向下拉不向上支撐，故 n = 4 或 5！繩端在動滑輪時 n = 2×2 + 1 = 5！",
        "stepByStepSolution": [
          {
            "stepNo": 1,
            "title": "判定承擔重物之有效繩段數 n",
            "content": "繩索始端繫於動滑輪架，向下繞出第 1 段繩；每次繞過動滑輪增加 2 段支撐。2 個動滑輪共計提供 2 × 2 + 1 = 5 段向上垂直繩索承擔載重 (n = 5)。最後施力繩繞過最上方定滑輪朝下拉，該段施力端不提供向上吊力。"
          },
          {
            "stepNo": 2,
            "title": "計算平衡施力 F 與機械利益 MA",
            "content": "動滑輪隔離體垂直平衡：ΣFy = n · T - W = 0 ➜ 5 T = 600 ➜ T = 120 kgf。施力端在同一連續繩索上，故所需施力 F = T = 120 kgf。機械利益 MA = W / F = 600 / 120 = 5。"
          },
          {
            "stepNo": 3,
            "title": "計算施力端拉繩距離 S",
            "content": "由功守恆原理（能量守恆）：F · S = W · h ➜ 120 × S = 600 × 3 ➜ S = (600 × 3) / 120 = 5 × 3 = 15 m。"
          }
        ],
        "examinerTrapWarning": "注意繩子起始點！若繩子起始點固定在天花板定滑輪架上，n 會是 4；本題起始點繫於動滑輪架上，n 則為 5！差一段繩子答案差 20%！",
        "quickMnemonic": "起於動輪奇數段，起於定輪偶數段；五段繩索分五份，施力只需五分之一。",
        "finalAnswer": "(1) 有效繩段數 n = 5；(2) 施力 F = 120 kgf；(3) 需拉下繩索 S = 15 m"
      }
    ],
    "crossReferencedQuestions": [
      {
        "id": "q-g12-mock1-01",
        "sourceExam": "112 年統測工程力學全真模擬題 第 23 題",
        "questionStem": "一質量 W = 400 kgf 之機械設備，欲利用滑輪組由人力以最大拉力 F = 80 kgf 吊起。若不計滑輪重與摩擦，則動滑輪上方至少需具備幾段垂直繩索承擔載重？",
        "options": {
          "A": "5 段",
          "B": "4 段",
          "C": "3 段",
          "D": "6 段"
        },
        "answer": "A",
        "detailedExplanation": "依滑輪組平衡公式：F = W / n ➜ n = W / F = 400 / 80 = 5 段。故至少需要 5 段垂直繩索承擔重物。選 A。",
        "relatedKnowledgePointId": "g12-mock-01-02",
        "examTrickAnalysis": "滑輪組機械利益 MA = W/F = n，整除求最少繩段數。"
      },
      {
        "id": "q-g12-mock1-02",
        "sourceExam": "111 年統測工程力學全真模擬題 第 19 題",
        "questionStem": "靜定平面桁架之某節點受三桿交會，其中兩桿共線，第三桿與此兩桿夾 60° 角。若該節點上無任何外力作用，則此第三桿之內力為何？",
        "options": {
          "A": "零 (零力桿)",
          "B": "拉力",
          "C": "壓力",
          "D": "無法判定"
        },
        "answer": "A",
        "detailedExplanation": "依零力桿判別鐵律：三桿共節點，兩桿共線，第三桿非共線且節點無外力，則第三桿內力必為零（零力桿）。選 A。",
        "relatedKnowledgePointId": "g12-mock-01",
        "examTrickAnalysis": "統測每年必出零力桿秒殺題，看見三桿兩共線無外力直接選零。"
      }
    ],
    "preExamChecklist": [
      "我能熟練進行剛體支承反力與截面法內力之二階段解題流程。",
      "我能精確數出滑輪組之有效吊重繩段數 n 並計算施力 F 與拉繩距離 S。",
      "我牢記統測答題技巧：先解最簡單零力桿與對稱題，再攻跨單元綜合題。"
    ]
  },
  {
    "id": "g12-arch-s1-mock2",
    "grade": 12,
    "semester": "s1",
    "semesterTitle": "高三上學期",
    "period": "midterm-2",
    "periodName": "第二次統測全真模擬考（材料力學核心衝刺）",
    "weekRange": "第 14~15 週",
    "subjectSlug": "mechanics",
    "subjectName": "專業科目（一）材料力學全真衝刺",
    "category": "專業科目（一）",
    "targetSchool": "全國高工土木建築群指標對照",
    "examScope": "材料力學全範圍：軸向拉壓應力與應變、胡克定律 ΔL = PL/AE、熱應力兩端固定拘束、平面應力莫爾圓 (Mohr's Circle) 主應力與最大剪應力",
    "schoolContextNotes": "統測專業科目（一）決定頂大錄取（如台科大、北科大建築系）最關鍵考卷。莫爾圓主應力幾何速解、兩端拘束階梯桿熱應力，兩大題型合計佔 65% 分數。",
    "scoreWeight": "佔學期學業成績 25%",
    "handoutSummary": "胡克定律伸縮量 ΔL = PL / AE；兩端卡死受熱膨脹熱應力 σ = E·α·ΔT（與長度無關！）；莫爾圓心 C = ((σx + σy)/2, 0)，半徑 R = √[((σx - σy)/2)² + τxy²]，最大主應力 σ1 = C + R，最大剪應力 τmax = R！",
    "beginnerMindset": "莫爾圓是全世界最偉大的幾何圓圈！題目給你的正應力跟剪應力不要背長長的三角公式，直接在座標紙上標出兩點畫個圓：圓的最右邊就是最大正應力 σ1，圓的最上面半徑就是最大剪應力 τmax，一眼看穿！",
    "downloadablePdfFilename": "Arch-G12-Unified-Mock-2.pdf",
    "knowledgePoints": [
      {
        "id": "g12-mock-02-01",
        "title": "平面應力狀態與莫爾圓 (Mohr's Circle) 幾何主應力速解",
        "curriculumCode": "115-專一-材力-01",
        "importance": 5,
        "textbookChapter": "材料力學 應力轉換與莫爾圓專題",
        "intuitiveAnalogy": "旋轉萬花筒：同一個受力方塊，你歪著頭看它角度不同，看到的拉扯力跟剪切力就完全不同！莫爾把所有角度看過去的正應力與剪應力集合成一個圓圈！圓的最右邊是「拉扯最大的極限」，圓的最頂點是「剪斷最危險的極限」！",
        "summary": "平面應力狀態 (σx, σy, τxy) 轉換幾何法——莫爾圓 (Mohr's Circle)：① 圓心坐標 C = (σ_avg, 0) = ((σx + σy) / 2, 0)；② 莫爾圓半徑 R = √[((σx - σy) / 2)² + τxy²]；③ 主應力 (Principal Stresses)：在主平面上剪應力為零 (τ = 0)，最大主應力 σ1 = C + R，最小主應力 σ2 = C - R；④ 最大剪應力 (Maximum Shear Stress)：τ_max = R = (σ1 - σ2) / 2；⑤ 應力不變量定理：任一正交面之正應力代數和為常數，即 σx + σy = σ1 + σ2。",
        "keyFormulaOrRule": "圓心 C = (σx + σy)/2；半徑 R = √[((σx - σy)/2)² + τxy²]；σ1,2 = C ± R；τmax = R。",
        "cramTips": [
          "主平面上剪應力恆等於零 (τ = 0)！",
          "最大剪應力平面與主應力平面互夾 45°（在莫爾圓上對應圓心角夾 90°）！",
          "純剪狀態 (σx = σy = 0)：莫爾圓心在原點 (0,0)，主應力 σ1 = +τ, σ2 = -τ！"
        ],
        "trapWarning": "莫爾圓上旋轉的角度是實體旋轉角度的「兩倍 (2θ)」！莫爾圓轉 90°，實體方塊只轉了 45°！切勿將圓心角當作實體旋轉角！",
        "junyiMasterySkill": "莫爾圓幾何作圖與主應力最大剪應力速解"
      },
      {
        "id": "g12-mock-02-02",
        "title": "軸向拉壓變形胡克定律與熱應力拘束分析",
        "curriculumCode": "115-專一-材力-02",
        "importance": 5,
        "textbookChapter": "材料力學 軸向載重與溫度應力專題",
        "intuitiveAnalogy": "鐵軌在夏天被太陽曬熱：如果鐵軌兩邊留有伸縮縫，鐵軌自由變長，內部完全沒有應力（輕鬆舒服）；但如果鐵軌兩頭被焊死卡死在水泥牆裡，它想變長卻被硬生生頂回來，內部就會憋出巨大的「熱壓應力」，嚴重時鐵軌甚至會直接向外爆裂挫曲！",
        "summary": "軸向伸縮變形胡克定律 (Hooke's Law)：ΔL = P · L / (A · E)。軸向剛度為 k = A·E / L，柔度為 f = L / A·E。溫度變形：物體因溫升 ΔT 產生之自由熱膨脹量為 ΔL_T = α · L · ΔT (α 為線膨脹係數)。兩端剛性不可動拘束熱應力：兩端被卡死固定時，總變形量必須為零 (ΔL_net = 0) ➜ 自由膨脹量等於反力壓縮量：α·L·ΔT = R·L / (A·E) ➜ 拘束反力 R = E · A · α · ΔT，熱應力 σ = R / A = E · α · ΔT！",
        "keyFormulaOrRule": "胡克伸縮：ΔL = PL / AE；溫升自由膨脹：ΔL_T = α·L·ΔT；兩端卡死熱應力：σ = E·α·ΔT (與長度 L 無關！)。",
        "cramTips": [
          "「自由膨脹不產生熱應力」！只有當熱膨脹受到外部拘束阻礙時，才會爆發熱應力！",
          "溫升 (ΔT > 0) 且兩端卡死 ➜ 產生「壓應力 (Compression)」！",
          "降溫 (ΔT < 0) 且兩端卡死 ➜ 產生「拉應力 (Tension)」！"
        ],
        "trapWarning": "高頻經典陷阱題：「長度 L 增加為 2 倍，兩端固定之熱應力變為幾倍？」答案是「1 倍（不變）」！因為公式 σ = E·α·ΔT 中完全沒有長度 L！L 在分子分母互相抵消了！",
        "junyiMasterySkill": "胡克定律軸向伸縮與兩端拘束熱應力計算"
      }
    ],
    "cramFormulaCards": [
      {
        "title": "莫爾圓四大要素卡",
        "formula": "C = (σx+σy)/2,  R = √[((σx-σy)/2)² + τxy²],  σ1 = C+R,  τmax = R",
        "notes": "圓心在平均正應力，半徑為最大剪應力，主平面剪應力為零。",
        "memoryMnemonic": "圓心平均半徑剪，左減右加定主應，二倍圓角轉方塊。"
      },
      {
        "title": "兩端卡死熱應力速記卡",
        "formula": "σ = E · α · ΔT,   R = E · A · α · ΔT",
        "notes": "應力大小與構件原長度 L 無關！溫升產生壓應力，降溫產生拉應力。",
        "memoryMnemonic": "熱脹冷縮受卡死，應力等於 E 阿法 ΔT，長度消去不用看。"
      }
    ],
    "workedExamples": [
      {
        "id": "ex-g12-mock-02-01",
        "title": "雙向受力正應力剪應力狀態求主應力與最大剪應力",
        "targetConcept": "莫爾圓主應力 σ1, σ2 與 τmax 計算 SOP",
        "difficulty": "段考常考",
        "questionStem": "平面應力單元受力如下：水平正應力 σx = 80 MPa (拉力)，垂直正應力 σy = -20 MPa (壓力)，剪應力 τxy = 40 MPa。試以莫爾圓求：(1) 莫爾圓之圓心坐標 C 與半徑 R；(2) 最大主應力 σ1 與最小主應力 σ2；(3) 平面內最大剪應力 τmax。",
        "beginnerThinking": "第一步算圓心平均正應力 (σx + σy)/2；第二步算半徑 R；第三步最大正應力就是圓心加半徑，最大剪應力就是半徑！三步全部搞定！",
        "stepByStepSolution": [
          {
            "stepNo": 1,
            "title": "計算莫爾圓之圓心坐標 C",
            "content": "注意正應力符號：拉力為正 (+80)，壓力為負 (-20)。圓心 C = (σ_avg, 0) = ((80 + (-20)) / 2, 0) = (60 / 2, 0) = (30 MPa, 0)。"
          },
          {
            "stepNo": 2,
            "title": "計算莫爾圓半徑 R",
            "content": "(σx - σy) / 2 = (80 - (-20)) / 2 = 100 / 2 = 50 MPa。半徑 R = √[((σx - σy) / 2)² + τxy²] = √(50² + 40²) = √(2500 + 1600) = √4100 ≈ 64.03 MPa。"
          },
          {
            "stepNo": 3,
            "title": "求主應力與最大剪應力",
            "content": "最大主應力 σ1 = C + R = 30 + 64.03 = 94.03 MPa (拉應力)。最小主應力 σ2 = C - R = 30 - 64.03 = -34.03 MPa (壓應力)。最大剪應力 τmax = R ≈ 64.03 MPa。"
          }
        ],
        "examinerTrapWarning": "負號是失分黑洞！σy 是壓應力，代入負號 -(-20) 變成 +20，差之半數為 (80+20)/2 = 50！千萬別算成 (80-20)/2 = 30！",
        "quickMnemonic": "拉正壓負要分明，圓心三十半徑六四，相加得九四最大拉。",
        "finalAnswer": "圓心 C = (30, 0) MPa, 半徑 R ≈ 64.03 MPa；σ1 ≈ 94.03 MPa, σ2 ≈ -34.03 MPa；τmax ≈ 64.03 MPa"
      },
      {
        "id": "ex-g12-mock-02-02",
        "title": "階梯圓桿在軸向載重與溫升兩端拘束下之熱應力計算",
        "targetConcept": "兩端固定拘束熱應力與反力求解",
        "difficulty": "高手衝刺",
        "questionStem": "一長度 L = 2 m、截面積 A = 500 mm² 之均質鋼桿，彈性模數 E = 200 GPa，線膨脹係數 α = 1.2 × 10⁻⁵ 1/°C。鋼桿兩端緊抵兩面剛性不可動之固定牆壁。(1) 若環境溫度升高 ΔT = 40°C，求鋼桿所受之拘束熱應力大小及正負性質；(2) 兩端牆壁承受之軸向反力 R 為何？(3) 若原長度 L 增加為 4 m，其熱應力大小為何？",
        "beginnerThinking": "兩端被卡死固定，鋼桿想熱脹卻動彈不得，內部必定產生「壓應力」！直接帶公式 σ = E·α·ΔT！第三小題是統測經典坑題，長度增加兩倍，熱應力「完全不變」！",
        "stepByStepSolution": [
          {
            "stepNo": 1,
            "title": "由兩端拘束公式計算熱應力 σ",
            "content": "單位一致化：E = 200 GPa = 200 × 10³ MPa (N/mm²)。熱應力 σ = E · α · ΔT = (200 × 10³) × (1.2 × 10⁻⁵) × 40 = 200 × 1.2 × 0.4 = 96 MPa。因溫度升高受到拘束受壓，故此應力為「壓應力 (Compression)」(-96 MPa)。"
          },
          {
            "stepNo": 2,
            "title": "計算兩端壁面支承反力 R",
            "content": "反力 R = σ × A = 96 N/mm² × 500 mm² = 48,000 N = 48 kN (壓力)。"
          },
          {
            "stepNo": 3,
            "title": "判定長度變為 4 m 時之熱應力變化",
            "content": "依公式 σ = E·α·ΔT，熱應力僅由材料物性 (E, α) 及溫差 (ΔT) 決定，與原構件長度 L 無關！因此長度增為 4 m 時，熱應力依然維持 96 MPa (不變)！"
          }
        ],
        "examinerTrapWarning": "切勿因為長度變 2 倍就跟著把應力乘 2 或除 2！自由伸長量與長度成正比，但抵抗伸長的柔度也與長度成正比，兩者除算互相抵消！",
        "quickMnemonic": "溫升受卡是壓力，應力無關桿長短，兩百乘十二乘四得九六。",
        "finalAnswer": "(1) 96 MPa (壓應力)；(2) 支承反力 R = 48 kN；(3) 熱應力依然為 96 MPa (不變)"
      }
    ],
    "crossReferencedQuestions": [
      {
        "id": "q-g12-mock2-01",
        "sourceExam": "112 年統測材料力學全真模擬題 第 21 題",
        "questionStem": "一受平面應力作用之微小單元，若在某特定方向平面上之剪應力為零 (τ = 0)，則該平面稱之為：",
        "options": {
          "A": "主應力平面 (Principal Plane)",
          "B": "最大剪應力平面",
          "C": "滑動破壞平面",
          "D": "中性軸平面"
        },
        "answer": "A",
        "detailedExplanation": "依材料力學定義，在主平面 (Principal Plane) 上，剪應力恆等於零 (τ = 0)，此平面上所承受之正應力即稱為主應力 (Principal Stress)。故選 A。",
        "relatedKnowledgePointId": "g12-mock-02-01",
        "examTrickAnalysis": "莫爾圓基本定義核心題，剪應力為零的平面必定為主平面。"
      },
      {
        "id": "q-g12-mock2-02",
        "sourceExam": "111 年統測材料力學全真模擬題 第 15 題",
        "questionStem": "一鋼棒置於兩剛性牆壁之間保持緊密接觸。若溫度上升 ΔT，已知鋼棒彈性模數為 E，線膨脹係數為 α，原長度為 L，截面積為 A。若牆壁完全不可動，則鋼棒內部所產生之熱應力大小為何？",
        "options": {
          "A": "E · α · ΔT",
          "B": "E · α · ΔT · L",
          "C": "E · α · ΔT / L",
          "D": "E · α · ΔT · A"
        },
        "answer": "A",
        "detailedExplanation": "自由伸長量 ΔL = α·L·ΔT，兩端拘束反力變形 ΔL = R·L / AE。令二者相等：α·L·ΔT = R·L / AE ➜ R/A = σ = E·α·ΔT。熱應力公式完全與長度 L 及截面積 A 無關。故選 A。",
        "relatedKnowledgePointId": "g12-mock-02-02",
        "examTrickAnalysis": "長度無關經典公式題，高頻出現在符號推導與文字選擇題。"
      }
    ],
    "preExamChecklist": [
      "我能熟練繪製莫爾圓並藉由圓心 C 與半徑 R 算出主應力 σ1, σ2 與最大剪應力 τmax。",
      "我牢記兩端剛性拘束熱應力公式 σ = E·α·ΔT 且與長度無關。",
      "我能清楚分辨純剪狀態下莫爾圓位於原點的幾何對稱特徵。"
    ]
  },
  {
    "id": "g12-arch-s2-mock1",
    "grade": 12,
    "semester": "s2",
    "semesterTitle": "高三下學期",
    "period": "midterm-1",
    "periodName": "統測考前黃金衝刺模擬考（專二測量與製圖全真綜合大題）",
    "weekRange": "第 6~7 週",
    "subjectSlug": "surveying",
    "subjectName": "專業科目（二）測量與製圖考前壓軸",
    "category": "專業科目（二）",
    "targetSchool": "全國高工土木建築群指標對照",
    "examScope": "專二測量學全範圍（水準導線平差、經緯儀角度閉合差）與建築製圖實務（平面圖、剖面圖識圖、建築技術規則樓梯 2R+T=60~64cm）",
    "schoolContextNotes": "統測專二考前倒數 60 天定錨大考。涵蓋測量學三大計算題（水準閉合差分配、羅盤儀導線緯距經距校正）與建築技術規則設計施工編樓梯法規，佔專二總分 50% 命脈。",
    "scoreWeight": "佔學期學業成績 30%",
    "handoutSummary": "閉合導線內角和公式 (n - 2) × 180°；角度閉合差反符號平均分配；樓梯人體工學黃金鐵律：2R + T = 60~64 cm（兩級高加一級深）；樓梯淨高 ≧ 210 cm！",
    "beginnerMindset": "專二測量計算其實都是「按計算機分蛋糕」：算總共有幾隻角，把多出來的角度反符號除以 n 平分給每個角；製圖法規題記住「2R + T = 60」，看到樓梯層高除以 18 算步數，統測穩拿滿分！",
    "downloadablePdfFilename": "Arch-G12-Unified-Mock-Final.pdf",
    "knowledgePoints": [
      {
        "id": "g12-mock-sur-01",
        "title": "專二測量全真衝刺：水準閉合差分配、經緯儀導線平差",
        "curriculumCode": "115-專二-測量-01",
        "importance": 5,
        "textbookChapter": "工程測量 導線平差與高程控制專題",
        "intuitiveAnalogy": "走迷宮回到原點：從家門口出發繞了一圈回到門口，你繞了一圈量出來的角度加起來應該剛好等於理論內角和！如果多了 30 秒，說明你的儀器在路上平均多算了，所以要在每個拐角把多算的 30 秒平分扣回來！",
        "summary": "測量平差三大核心法則：① 多邊形內角和理論值：Σ內角 = (n - 2) × 180° (n 為邊數)；外角和理論值：Σ外角 = (n + 2) × 180°；② 角度閉合差 (Angular Misclosure)：Wθ = 實測內角和 - (n - 2) × 180°；若在容許誤差限度內，平差校正數 C = -Wθ / n（反符號平均分配給各內角）；③ 水準測量高程閉合差：閉合水準依「測站數」或「距離比」反符號分配平差；④ 羅盤儀法則 (Bowditch Rule)：緯距閉合差依邊長佔總周長之比例分配校正。",
        "keyFormulaOrRule": "內角和 = (n - 2) × 180°；角度校正數 C = -Wθ / n；羅盤儀緯距校正：c_Lat = -W_Lat × (Li / ΣL)。",
        "cramTips": [
          "三角形內角和 180°，四邊形 360°，五邊形 540°，六邊形 720°！",
          "角度閉合差必須「反號」分配（多退少補）！",
          "方位角推算：前測線方位角 ± 180° + 夾角（前進方向右角），大於 360° 扣除 360°！"
        ],
        "trapWarning": "角度閉合差分配時，若有餘數無法整除，應優先分配給「邊長最短之測角」或「觀測條件最差之測站」，切勿隨意四捨五入破壞理論總和！",
        "junyiMasterySkill": "閉合導線角度平差與羅盤儀坐標計算"
      },
      {
        "id": "g12-mock-sur-02",
        "title": "專二製圖全真衝刺：建築技術規則樓梯規範 (2R + T = 60~64 cm)",
        "curriculumCode": "115-專二-製圖-07",
        "importance": 5,
        "textbookChapter": "建築製圖與技術規則 建築技術規則設計施工編專題",
        "intuitiveAnalogy": "爬樓梯步幅人體工學：人邁一步平地正常跨距約 60~64 公分；抬腿往上爬一步 (級高 R) 比在平地上走 (級深 T) 費力兩倍，所以「抬兩次腳加邁一次腳」剛好要等於平常走一步的 60~64 公分 (2R + T = 60~64 cm)！",
        "summary": "建築技術規則設計施工編第 33 條樓梯規範：① 人體工學步幅公式：2R + T = 60 ~ 64 cm（R 為級高 Riser，T 為級深 Tread）；② 集合住宅與一般建築樓梯標準：R ≦ 20 cm，T ≧ 24 cm，樓梯淨寬 ≧ 90 cm；③ 學校與公眾場所樓梯：R ≦ 16 cm，T ≧ 26 cm，樓梯淨寬 ≧ 140 cm；④ 垂直淨高：踏板表面至天花板最低淨高不得小於 210 cm（免致碰頭）；⑤ 中間平台：樓梯連續爬升高度每超過 3 公尺時，必須設置深度不小於樓梯寬度之中間休息平台！",
        "keyFormulaOrRule": "步幅公式：2R + T = 60~64 cm (常用 62 cm)；住宅標準：R ≦ 20 cm, T ≧ 24 cm；淨高 ≧ 210 cm；每爬升 3m 設平台。",
        "cramTips": [
          "踏步階數 N = 層高 H / 級高 R（算得有小數時「必須無條件進位」取整數，再以層高除以整數階數反求實際 R）！",
          "踏板數量 (Tread 數) ＝ 垂直級高數 (Riser 數) 減 1 (即踏板數 = N - 1)！",
          "扶手高度：自踏板面至扶手頂端垂直量測，不得小於 75 cm，室外或中庭應 ≧ 85~110 cm！"
        ],
        "trapWarning": "最常見考題陷阱：踏板數 (Tread 數) 永遠比級高數 (Riser 數)「少 1」！因為最後一步直接踏上樓地板了，不需要額外踏板！千萬別算成等數！",
        "junyiMasterySkill": "建築技術規則樓梯尺寸計算與剖面識圖規範"
      }
    ],
    "cramFormulaCards": [
      {
        "title": "導線多邊形內角和與平差卡",
        "formula": "Σ內角 = (n - 2) × 180°,   C = -Wθ / n",
        "notes": "n 為頂點數。閉合差在限差內反號平分給各角。",
        "memoryMnemonic": "頂點減二乘一百八，多退少補平差均。"
      },
      {
        "title": "建築樓梯尺寸黃金公式卡",
        "formula": "2R + T = 60 ~ 64 cm,  踏板數 ＝ 級高數 - 1",
        "notes": "住宅 R ≦ 20 cm, T ≧ 24 cm；淨高 ≧ 210 cm；每升 3m 設平台。",
        "memoryMnemonic": "兩級高加一級深剛好六十，踏板比級高少一步。"
      }
    ],
    "workedExamples": [
      {
        "id": "ex-g12-mock-sur-01",
        "title": "五邊形閉合導線角度閉合差檢驗與各內角平差計算",
        "targetConcept": "多邊形導線角度閉合差計算與平均分配",
        "difficulty": "段考常考",
        "questionStem": "測量員觀測一五邊形閉合導線 ABCDE 之各內角，實測成果如下：∠A = 89°15'20\"，∠B = 105°40'10\"，∠C = 118°22'40\"，∠D = 95°31'30\"，∠E = 131°11'20\"。已知該工程之角度容許閉合差為 ±1'。(1) 檢驗該次測量是否合格？(2) 若合格，求各內角之平差改正數 C 及平差後之正確內角 ∠A'。",
        "beginnerThinking": "五邊形內角和理論值是 (5 - 2) × 180° = 540°！把實測 5 個角加起來看看差了幾秒；只要在容許範圍內，就把差的秒數反號除以 5，平攤到每個角上！",
        "stepByStepSolution": [
          {
            "stepNo": 1,
            "title": "計算理論內角和與實測內角和",
            "content": "理論內角和 = (n - 2) × 180° = (5 - 2) × 180° = 540°00'00\"。實測內角和 Σθ = 89°15'20\" + 105°40'10\" + 118°22'40\" + 95°31'30\" + 131°11'20\" = 539°121'00\" = 540°01'00\" (540 度 01 分 00 秒)。"
          },
          {
            "stepNo": 2,
            "title": "計算角度閉合差 Wθ 並檢驗合格性",
            "content": "角度閉合差 Wθ = 實測和 - 理論和 = 540°01'00\" - 540°00'00\" = +1'00\" = +60\" (正 60 秒)。容許誤差限度為 ±1' (±60\")，|Wθ| = 60\" ≦ 60\"，剛好合格！"
          },
          {
            "stepNo": 3,
            "title": "計算各角改正數 C 並求平差後 ∠A'",
            "content": "改正數 C = -Wθ / n = -60\" / 5 = -12\" (每個內角均需減去 12 秒)。平差後 ∠A' = 89°15'20\" + (-12\") = 89°15'08\"。"
          }
        ],
        "examinerTrapWarning": "切記改正數的正負號！閉合差為 +60\" (算多了)，改正數就必須是 -12\" (減去扣除)！若算成加 12\" 內角和會暴增到 540°02'00\"！",
        "quickMnemonic": "實測比理論多要扣、少要補，五邊形除五每角扣十二秒。",
        "finalAnswer": "(1) 合格 (|Wθ| ≦ 60\")；(2) 改正數 C = -12\"，平差後 ∠A' = 89°15'08\""
      },
      {
        "id": "ex-g12-mock-sur-02",
        "title": "建築技術規則樓梯 2R + T = 60~64 cm 踏步數與梯間淨高計算",
        "targetConcept": "建築技術規則樓梯人體工學尺寸與踏步計算",
        "difficulty": "高手衝刺",
        "questionStem": "某集合住宅大樓室內挑高，一樓至二樓樓層淨高為 3.60 m (360 cm)。建築師依建築技術規則設計室內雙折樓梯，規定級高 R 不得大於 18 cm，人體工學步幅公式採用 2R + T = 62 cm。(1) 求由一樓至二樓所需之最少級高數 (踏步階數 N)；(2) 每一階之實際精確級高 R (cm)；(3) 每一階之踏面級深 T (cm)；(4) 整座樓梯扣除平台後之踏面總塊數。",
        "beginnerThinking": "層高 360 cm 除以規定上限 18 cm，算出剛好 20 階！階數必須是整數！算好每階高 R，帶入 2R + T = 62 算出深 T！踏板數永遠等於階數減 1！",
        "stepByStepSolution": [
          {
            "stepNo": 1,
            "title": "計算最少級高數 (踏步階數 N)",
            "content": "樓層高度 H = 360 cm。依限制 R ≦ 18 cm：最少階數 N = 360 / 18 = 20 階（若算得非整數需無條件進位取較大整數）。故取 N = 20 階。"
          },
          {
            "stepNo": 2,
            "title": "計算實際級高 R",
            "content": "實際級高 R = 360 cm / 20 = 18.0 cm。符合法規 R ≦ 20 cm 之規定。"
          },
          {
            "stepNo": 3,
            "title": "依人體工學步幅公式計算級深 T",
            "content": "依 2R + T = 62 cm ➜ 2 × 18.0 + T = 62 ➜ 36 + T = 62 ➜ T = 62 - 36 = 26.0 cm。符合法規 T ≧ 24 cm 之標準。"
          },
          {
            "stepNo": 4,
            "title": "計算全樓梯踏面總塊數",
            "content": "雙折樓梯中間設有一休息平台。全部級高數為 20 階，踏面總數 (不含平台與樓板) ＝ 級高數 - 1 - (若計入平台轉折) ＝ 20 - 2 = 18 塊踏板（每段各 9 塊踏板，中間為休息平台）。"
          }
        ],
        "examinerTrapWarning": "踏面級深 T 算出來若小於 24 cm 則不符法規！必須適度降低 R 或增加階數！且踏板塊數絕非 20 塊！",
        "quickMnemonic": "層高除十八得階數，二高加一深六十二，踏板永遠少一步。",
        "finalAnswer": "(1) 最少級高數 N = 20 階；(2) 實際級高 R = 18.0 cm；(3) 級深 T = 26.0 cm；(4) 雙折梯踏面共 18 塊踏板。"
      }
    ],
    "crossReferencedQuestions": [
      {
        "id": "q-g12-mock-sur-01",
        "sourceExam": "112 年統測專業科目（二）全真模擬題 第 22 題",
        "questionStem": "依我國建築技術規則設計施工編第 33 條規定，集合住宅之室內樓梯，其級高 (R) 與級深 (T) 之法定尺寸限制何者正確？",
        "options": {
          "A": "級高 (R) ≦ 20 cm，級深 (T) ≧ 24 cm",
          "B": "級高 (R) ≦ 16 cm，級深 (T) ≧ 26 cm",
          "C": "級高 (R) ≦ 22 cm，級深 (T) ≧ 20 cm",
          "D": "級高 (R) ≦ 18 cm，級深 (T) ≧ 28 cm"
        },
        "answer": "A",
        "detailedExplanation": "依建築技術規則設計施工編第 33 條表列規定，住宅用樓梯之級高 (R) 不得大於 20 cm，級深 (T) 不得小於 24 cm。選項 B 為小學校或公眾集會場所標準。故選 A。",
        "relatedKnowledgePointId": "g12-mock-sur-02",
        "examTrickAnalysis": "建築技術規則第 33 條樓梯表，統測專二製圖與構造每年必考之法規數字。"
      },
      {
        "id": "q-g12-mock-sur-02",
        "sourceExam": "111 年統測專業科目（二）全真模擬題 第 18 題",
        "questionStem": "一六邊形閉合導線，測得內角總和為 720°01'30\"，試問該次角度閉合差為多少？",
        "options": {
          "A": "+1'30\" (+90\")",
          "B": "-1'30\" (-90\")",
          "C": "+30\"",
          "D": "0\""
        },
        "answer": "A",
        "detailedExplanation": "六邊形理論內角和 = (6 - 2) × 180° = 4 × 180° = 720°00'00\"。角度閉合差 Wθ = 實測和 - 理論和 = 720°01'30\" - 720°00'00\" = +1'30\" (正 90 秒)。選 A。",
        "relatedKnowledgePointId": "g12-mock-sur-01",
        "examTrickAnalysis": "閉合差 = 實測 - 理論，注意正負號定義，實測偏大則閉合差為正值。"
      }
    ],
    "preExamChecklist": [
      "我熟記閉合導線內角和公式 (n - 2) × 180° 與角度平差分配原則。",
      "我能熟練運用 2R + T = 60~64 cm 與樓梯階數計算實際尺寸與踏板數。",
      "我清楚統測專二作圖題與法規選擇題之答題配速與檢查技巧。"
    ]
  }
];
