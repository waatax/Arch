/**
 * 知識框架 (Knowledge Framework)
 *
 * 全站唯一的「科目 → 單元 → 章節」順序來源。
 * - 科目分群決定導覽與課程地圖的排列。
 * - 單元把同一科的章節依學習順序分組；章節編號（第 N 章）一律由這裡的順序推導，
 *   不再依賴資料檔標題裡的手寫編號（例如 2A、7A、0.、重複的 8.）。
 * - scripts/validate-knowledge-framework.mjs 會保證每個主題剛好出現一次。
 */

export interface FrameworkUnit {
  id: string;
  title: string;
  /** 一句話說明這個單元要解決的問題 */
  summary: string;
  topics: string[];
}

export interface SubjectFramework {
  subject: string;
  /** 顯示用短名稱（導覽列、麵包屑） */
  shortTitle: string;
  units: FrameworkUnit[];
}

export interface SubjectGroup {
  id: 'professional' | 'common' | 'general' | 'extension';
  title: string;
  description: string;
  subjects: string[];
}

export const subjectGroups: SubjectGroup[] = [
  {
    id: 'professional',
    title: '專業科目',
    description: '統測土木建築群專業（一）力學與材料、專業（二）測量與製圖。',
    subjects: ['mechanics', 'materials', 'surveying', 'drafting'],
  },
  {
    id: 'common',
    title: '共同科目',
    description: '統測共同考科：國文、英文、數學（C）。',
    subjects: ['chinese', 'english', 'math-c'],
  },
  {
    id: 'general',
    title: '一般科目',
    description: '高一、高二的自然與社會領域，連結建築的物理、化學與人文背景。',
    subjects: ['physics', 'chemistry', 'history', 'geography', 'civics'],
  },
  {
    id: 'extension',
    title: '實務延伸',
    description: '設計、構造、BIM 與作品集，銜接專題實作與升學備審。',
    subjects: ['extensions'],
  },
];

export const knowledgeFramework: SubjectFramework[] = [
  {
    subject: 'mechanics',
    shortTitle: '工程力學',
    units: [
      { id: 'force-basics', title: '力與共點力系基礎', summary: '單位換算、向量分解與共點力平衡（拉密定理），是所有力學題的起點。', topics: ['units-vectors', 'force-equilibrium'] },
      { id: 'force-systems', title: '平面與空間力系', summary: '把平行力、分布載重、力偶與三維空間力化成等值力系，列平衡方程求反力。', topics: ['parallel-force-systems', 'nonconcurrent-force-systems', 'spatial-force-systems'] },
      { id: 'truss-friction', title: '桁架與摩擦力', summary: '零力桿判別、節點法／截面法求桿力，以及平面與斜面滑動／傾倒臨界分析。', topics: ['truss', 'friction'] },
      { id: 'section-stress', title: '斷面性質、應力應變與剪力', summary: '形心與平行軸定理慣性矩、虎克定律軸向與熱變形、單雙剪與三種彈性模數關係。', topics: ['centroid', 'stress-strain', 'shear-properties'] },
      { id: 'beam-mohr', title: '靜定梁、梁內應力與莫爾圓', summary: '剪力圖與彎矩圖繪製、危險斷面彎曲應力、主應力與莫爾圓圖解。', topics: ['beam', 'plane-stress'] },
      { id: 'safety', title: '結構安全與破壞案例', summary: '從真實災害整合尤拉長柱挫屈、強柱弱梁耐震哲學與安全係數設計。', topics: ['structural-failures'] },
    ],
  },
  {
    subject: 'materials',
    shortTitle: '材料與試驗',
    units: [
      { id: 'basics', title: '材料與試驗總論', summary: '分類規格、密度孔隙吸水率、試驗精度統計與品管運用。', topics: ['basic-properties'] },
      { id: 'cement', title: '卜特蘭水泥與標準試驗', summary: '四大熟料水化、CNS 61 五種類型、維卡儀凝結、砂漿抗壓與防潮假凝。', topics: ['cement-composition', 'cement-types', 'cement-vicat', 'cement-strength', 'cement-storage'] },
      { id: 'concrete', title: '混凝土與配比品管', summary: '粒料篩分析與含水率、拌合水、摻料、坍度、氯離子與水灰比強度配比。', topics: ['concrete'] },
      { id: 'other-materials', title: '無機、有機與金屬建材', summary: '石材陶瓷紅磚玻璃、木材含水率與順橫紋強度、高分子瀝青塗料、鋼筋抗拉與防蝕。', topics: ['stone-ceramics-glass', 'wood', 'polymers-asphalt', 'metals'] },
      { id: 'green', title: '綠建材與永續材料創新', summary: '四大綠建材標章、低碳水泥、再生粒料與營建循環經濟。', topics: ['green-materials', 'green-building-materials'] },
    ],
  },
  {
    subject: 'surveying',
    shortTitle: '測量實習',
    units: [
      { id: 'basics-dist-level', title: '高一上：測量總論、距離與水準測量', summary: '測量基準與誤差傳播、捲尺與電子測距修正、水準儀視線高法與閉合平差。', topics: ['surveying-fundamentals', 'distance-and-angle', 'elevation-and-leveling'] },
      { id: 'angle-indirect', title: '高一下：經緯儀測角與間接測距高程', summary: '經緯儀定心整平與正倒鏡消差、視距法、雙高法與三角高程測量。', topics: ['instrument-setup', 'indirect-distance-elevation'] },
      { id: 'traverse-coord-area', title: '綜合應用測量：導線、座標與面積誤差', summary: '導線折角閉合差、縱橫距羅盤儀法平差、全站儀放樣與座標法面積計算。', topics: ['traverse-surveying', 'coordinate-computation', 'area-and-error'] },
    ],
  },
  {
    subject: 'drafting',
    shortTitle: '製圖實習',
    units: [
      { id: 'basics', title: '高一上：製圖基礎、儀器、線字法與幾何作圖', summary: 'A0–A4 圖紙折摺、平行尺三角板、CNS 線條階層與字法、比例尺換算與幾何畫法。', topics: ['drafting-fundamentals', 'drafting-instruments', 'lines-and-lettering', 'scale', 'geometric-constructions'] },
      { id: 'projection', title: '高一下：正投影、輔助視圖與建築剖視尺度', summary: '第一／第三象限正投影三視圖、單複斜面輔助真形、CNS 建築剖面圖例與三道尺寸標註。', topics: ['orthographic-projection', 'auxiliary-views', 'sectional-views', 'dimensioning-and-symbols'] },
      { id: 'architectural', title: '建築平立剖整合與透視陰影', summary: '建築平面圖、立面圖、土木建築施工圖整合判讀，以及一點／兩點透視與陰影求法。', topics: ['architectural-plan', 'architectural-elevation', 'civil-architectural-drawings', 'perspective-projection'] },
      { id: 'codes-digital', title: '高二進階：建照法規面積、CAD 與 BIM', summary: '建蔽率容積率圖面檢討、AutoCAD 指令圖層出圖與 3D BIM 參數化模型協作。', topics: ['building-codes-far', 'cad-basics', 'bim-concepts'] },
    ],
  },
  {
    subject: 'chinese',
    shortTitle: '國文',
    units: [
      { id: 'literature', title: '文學選讀', summary: '古典與現代文學的閱讀方法與應用文。', topics: ['classical-literature', 'modern-literature'] },
      { id: 'language', title: '語文知識', summary: '字音字形、詞義、修辭與文法。', topics: ['linguistics'] },
      { id: 'read-write', title: '閱讀與寫作', summary: '題組閱讀判讀與引導寫作。', topics: ['reading-comprehension', 'writing-expression'] },
      { id: 'culture', title: '文化常識', summary: '經典、思想與園林建築文化。', topics: ['cultural-knowledge'] },
    ],
  },
  {
    subject: 'english',
    shortTitle: '英文',
    units: [
      { id: 'g10', title: '高一：基礎能力', summary: '字彙片語、基本句型、日常對話與閱讀策略。', topics: ['vocabulary-phrases', 'grammar-patterns', 'conversation-daily-use', 'reading-comprehension'] },
      { id: 'g11', title: '高二：進階應用', summary: '專業字彙、子句、圖表文本與克漏字。', topics: ['vocabulary-professional', 'grammar-clauses', 'reading-infographics', 'cloze-passage-structure'] },
      { id: 'g12', title: '高三：統測衝刺', summary: '高頻句型、職場溝通、多文本閱讀與非選翻譯寫作。', topics: ['grammar-mastery', 'workplace-communication', 'reading-advanced', 'translation-writing'] },
    ],
  },
  {
    subject: 'math-c',
    shortTitle: '數學 C',
    units: [
      { id: 'functions-trig', title: '函數與三角', summary: '坐標系、函數圖形與三角函數。', topics: ['functions-graphs', 'trigonometry'] },
      { id: 'vectors-algebra', title: '向量與式的運算', summary: '平面向量、多項式與分式運算。', topics: ['vectors', 'algebra'] },
      { id: 'lines-circles', title: '直線與圓', summary: '斜率、直線方程式、圓與直線關係。', topics: ['lines-circles'] },
      { id: 'sequences-counting', title: '數列與排列組合', summary: '等差等比、級數與計數原理。', topics: ['sequences-series', 'permutations-combinations'] },
      { id: 'trig-exp-log', title: '三角應用與指對數', summary: '正餘弦定理、測量應用、指數與對數。', topics: ['trig-applications', 'exponents-logarithms'] },
      { id: 'space-matrix', title: '空間向量與矩陣', summary: '空間坐標、內外積、聯立方程與矩陣。', topics: ['space-vectors', 'matrices'] },
      { id: 'lp-conics', title: '線性規劃與二次曲線', summary: '不等式區域、最佳化與圓錐曲線。', topics: ['linear-programming', 'geometry'] },
      { id: 'calculus', title: '微積分', summary: '極限、導數與積分的意義與計算。', topics: ['calculus', 'integration'] },
    ],
  },
  {
    subject: 'physics',
    shortTitle: '物理',
    units: [
      { id: 'mechanics', title: '力學與能量', summary: '運動、靜力平衡、功與能量守恆。', topics: ['mechanics-motion', 'work-energy'] },
      { id: 'thermal', title: '熱學', summary: '溫度、熱傳與建築熱環境。', topics: ['thermodynamics'] },
      { id: 'waves-optics', title: '波動、聲學與光學', summary: '波的性質、建築聲學與照明。', topics: ['waves-acoustics', 'optics'] },
      { id: 'electricity', title: '電學', summary: '電路、電功率與建築配電。', topics: ['electricity'] },
    ],
  },
  {
    subject: 'chemistry',
    shortTitle: '化學',
    units: [
      { id: 'matter-reactions', title: '物質與化學反應', summary: '物質分類、反應式與水泥水化。', topics: ['matter-composition', 'chemical-reactions'] },
      { id: 'acid-redox', title: '酸鹼與氧化還原', summary: '混凝土中性化、鋼筋腐蝕與防蝕。', topics: ['acids-bases-salts', 'redox'] },
      { id: 'organic-env', title: '有機與環境化學', summary: '高分子建材、塗料與碳足跡。', topics: ['organic-chemistry', 'environmental-chemistry'] },
    ],
  },
  {
    subject: 'history',
    shortTitle: '歷史',
    units: [
      { id: 'taiwan-china', title: '台灣與中國', summary: '台灣建築環境演變、中國古代建築形制。', topics: ['taiwan-history', 'chinese-history'] },
      { id: 'world-theory', title: '世界與建築思潮', summary: '西洋建築史與現代主義思潮。', topics: ['world-history', 'architectural-history'] },
      { id: 'heritage-society', title: '文化資產與社會變遷', summary: '古蹟保存修復與都市形貌變遷。', topics: ['cultural-heritage', 'social-change'] },
    ],
  },
  {
    subject: 'geography',
    shortTitle: '地理',
    units: [
      { id: 'physical', title: '自然環境', summary: '地形、氣候與建築選址。', topics: ['environment-terrain', 'climate-environment'] },
      { id: 'human', title: '人口、都市與區域', summary: '人口結構、都市空間與產業區位。', topics: ['population-urban', 'regional-development'] },
      { id: 'issues-gis', title: '環境議題與 GIS', summary: '災害防救與地理資訊系統。', topics: ['environmental-issues', 'gis'] },
    ],
  },
  {
    subject: 'civics',
    shortTitle: '公民',
    units: [
      { id: 'citizen-law', title: '公民身分與法律', summary: '公民社群、建築法規與生活空間。', topics: ['citizenship-community', 'law-life'] },
      { id: 'economy-society', title: '經濟與多元社會', summary: '永續經濟與包容性空間設計。', topics: ['economy-sustainability', 'society-culture'] },
      { id: 'work-environment', title: '職業倫理與環境政策', summary: '勞工權益、職業倫理與氣候政策。', topics: ['labor-ethics', 'environment-policy'] },
    ],
  },
  {
    subject: 'extensions',
    shortTitle: '實務延伸',
    units: [
      { id: 'design-build', title: '部定專業與營建實習基礎', summary: '工程概論、構造施工法與營建技術實習現場實作，以及空間尺度與無障礙設計。', topics: ['construction-methods', 'spatial-design'] },
      { id: 'digital', title: '基本與專業製圖技能領域', summary: '電腦輔助製圖、建築製圖／施工圖實習 BIM 協作，與參數化 Grasshopper／AI 競圖。', topics: ['cad-bim', 'parametric-design-and-ai-assisted-competition'] },
      { id: 'portfolio', title: '高三專題、作品集與證照升學', summary: '實體模型工藝、作品集設計論述，以及丙乙級技術士證照與大學建築系銜接。', topics: ['portfolio-models', 'portfolio-and-design-discourse', 'certification'] },
    ],
  },
];

const frameworkBySubject = new Map(knowledgeFramework.map((item) => [item.subject, item]));

export function getSubjectFramework(subjectSlug: string): SubjectFramework | undefined {
  return frameworkBySubject.get(subjectSlug);
}

export function getSubjectGroup(subjectSlug: string): SubjectGroup | undefined {
  return subjectGroups.find((group) => group.subjects.includes(subjectSlug));
}

/** 依知識框架取得主題所在單元與章節序號（1 起算） */
export function getTopicPlacement(subjectSlug: string, topicSlug: string) {
  const framework = frameworkBySubject.get(subjectSlug);
  if (!framework) return null;
  let chapter = 0;
  for (let unitIndex = 0; unitIndex < framework.units.length; unitIndex++) {
    const unit = framework.units[unitIndex];
    for (const slug of unit.topics) {
      chapter++;
      if (slug === topicSlug) return { unit, unitIndex, unitCount: framework.units.length, chapter };
    }
  }
  return null;
}

/** 框架定義的主題順序 */
export function getOrderedTopicSlugs(subjectSlug: string): string[] {
  return frameworkBySubject.get(subjectSlug)?.units.flatMap((unit) => unit.topics) ?? [];
}

// ───────────────────────── 標題與摘要清理 ─────────────────────────

const EMOJI = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B50}\u{2B55}\u{FE0F}\u{200D}]/gu;

/** 去除 HTML／Markdown 強調標記與 emoji */
export function stripMarkup(value: string): string {
  return value
    .replace(/<[^>]+>/g, '')
    .replace(/\*\*/g, '')
    .replace(EMOJI, '')
    .replace(/[ \t]{2,}/g, ' ')
    .trim();
}

/**
 * 章節顯示標題：去除手寫編號（1.、2A.、2.1、0.）、emoji、標記，
 * 以及物理科標題後面整段英文括號副標。
 */
export function cleanTopicTitle(raw: string): string {
  return stripMarkup(raw)
    .replace(/^(?:\d+[A-Z]?\.|\d+\.\d+)\s+/, '')
    .replace(/\s*\((?:[A-Za-z][A-Za-z0-9 ,&'’\-/]*)\)\s*$/, '')
    .trim();
}

export function cleanSubjectTitle(raw: string): string {
  return stripMarkup(raw);
}

/** 摘要：去標記並移除與內容無關的行銷樣板句 */
export function cleanTopicDesc(raw: string): string {
  return stripMarkup(raw)
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line && !/^V\d+(?:\.\d+)?\s*考前秒殺秘訣/.test(line) && !/考前秒殺秘訣：此核心概念統測出題率極高/.test(line))
    .join('\n');
}
