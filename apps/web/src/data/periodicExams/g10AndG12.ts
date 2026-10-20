import { PeriodicExamPlan } from './types';

export const g10AndG12ExamPlans: PeriodicExamPlan[] = [
  // =========================================================================
  // 【工程力學】高一上學期 第一次段考 (G10-S1-M1)
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
        keyFormulaOrRule: 'ΣFx = 0, ΣFy = 0；拉密定理：P/sinα = Q/sinβ = R/sinγ。',
        cramTips: [
          '夾角是兩向量「背對背背離」所張開的角度！千萬別量成內角。',
          '三力平衡三角形必定「首尾相接封閉」。',
        ],
        trapWarning: '拉密定理「僅能用於三力共點平衡」，若超過三力或力不共點，絕對不可直接套用拉密定理！',
        junyiMasterySkill: '三力共點平衡與拉密定理速算技巧',
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
    ],
  },

  // =========================================================================
  // 【製圖實習】高一上學期 第二次段考 (G10-S1-M2)
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
        curriculumCode: '115-專二-製圖-01',
        importance: 5,
        textbookChapter: '全華/科友 製圖實習 第三章 正投影與三視圖',
        summary: '第三角投影法：觀測者 ➜ 投影面 ➜ 物體（物體在投影面後方）。三視圖關係：前視圖與俯視圖長度對正（長對正）；前視圖與右側視圖高度平齊（高平齊）；俯視圖與右側視圖寬度相等（寬相等，以 45° 線投射）。同一直線上各類線條重疊時之優先繪出順序：1. 粗實線（外形輪廓線）最優先；2. 中虛線（隱藏線）次之；3. 細鏈線（割面線例外優於虛線，普通中心線第三）；4. 尺寸線與剖面線最後。',
        keyFormulaOrRule: '第三角法原則：長對正、高平齊、寬相等；重疊順序：實線 ＞ 虛線 ＞ 中心線。',
        cramTips: [
          '台灣 CNS 建築製圖全面採用「第三角法」！',
          '看到物體輪廓，不管後面有什麼中心線，永遠畫「粗實線」！',
        ],
        trapWarning: '第一角法（歐洲常用）是物體在中間；第三角法是投影面在中間，考試千萬看清題目規定法別！',
        junyiMasterySkill: '第三角法正投影展開與線條重疊規範',
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
    ],
  },

  // =========================================================================
  // 【高三衝刺】高三上學期 模擬考全真對照 (G12-S1-Mock)
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
        keyFormulaOrRule: '兩桿不共線無外力 ➜ 兩桿皆零；三桿兩共線無外力 ➜ 第三桿必零。',
        cramTips: [
          '先找完全沒有載重的節點！',
          '判斷完一根零力桿後「直接劃掉」，重新將其視為不存在，繼續尋找下一個滿足條件的節點！',
        ],
        trapWarning: '若節點上有外力作用，零力桿鐵律不成立！必須考慮外力分量平衡。',
        junyiMasterySkill: '桁架零力桿快速視圖判定法',
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
];
