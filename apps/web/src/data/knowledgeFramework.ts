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
      { id: 'force-basics', title: '力與向量基礎', summary: '單位換算、向量分解與共點力平衡，是所有力學題的起點。', topics: ['units-vectors', 'force-equilibrium'] },
      { id: 'force-systems', title: '平面與空間力系', summary: '把分布載重、斜向力與力偶化成等值力，列平衡方程求反力。', topics: ['parallel-force-systems', 'nonconcurrent-force-systems', 'spatial-force-systems'] },
      { id: 'section-friction', title: '斷面性質與摩擦', summary: '形心、慣性矩決定構件剛度；摩擦決定滑動與傾倒。', topics: ['centroid', 'friction'] },
      { id: 'structures', title: '結構分析：桁架與梁', summary: '桁架桿力與梁的剪力圖、彎矩圖。', topics: ['truss', 'beam'] },
      { id: 'strength', title: '材料力學：應力與應變', summary: '構件內部怎麼受力、會變形多少、何時破壞。', topics: ['stress-strain', 'shear-properties', 'plane-stress'] },
      { id: 'safety', title: '結構安全與破壞案例', summary: '從真實災害回看挫屈、剪力破壞與耐震設計哲學。', topics: ['structural-failures'] },
    ],
  },
  {
    subject: 'materials',
    shortTitle: '材料與試驗',
    units: [
      { id: 'basics', title: '材料基本性質', summary: '密度、吸水率、強度與試驗的共通觀念。', topics: ['basic-properties'] },
      { id: 'cement', title: '水泥', summary: '成分與水化、五種類型、凝結時間、強度試驗與儲存。', topics: ['cement-composition', 'cement-types', 'cement-vicat', 'cement-strength', 'cement-storage'] },
      { id: 'concrete', title: '混凝土', summary: '組成、配比設計、坍度與強度品管。', topics: ['concrete'] },
      { id: 'other-materials', title: '其他建築材料', summary: '石材陶瓷玻璃、木材、金屬與高分子瀝青防水材料。', topics: ['stone-ceramics-glass', 'wood', 'metals', 'polymers-asphalt'] },
      { id: 'green', title: '綠建材與永續', summary: '綠建材標章、低碳水泥與循環經濟。', topics: ['green-materials', 'green-building-materials'] },
    ],
  },
  {
    subject: 'surveying',
    shortTitle: '測量實習',
    units: [
      { id: 'basics', title: '測量基礎與儀器', summary: '測量的目的、誤差概念與儀器整置。', topics: ['surveying-fundamentals', 'instrument-setup'] },
      { id: 'measure', title: '距離、角度與高程', summary: '量距、測角、水準測量與間接高程。', topics: ['distance-and-angle', 'elevation-and-leveling', 'indirect-distance-elevation'] },
      { id: 'traverse', title: '導線與座標計算', summary: '導線外業、方位角推算、縱橫距與閉合差改正。', topics: ['traverse-surveying', 'coordinate-computation'] },
      { id: 'area-error', title: '面積與誤差處理', summary: '座標法、梯形法求面積與誤差傳播。', topics: ['area-and-error'] },
    ],
  },
  {
    subject: 'drafting',
    shortTitle: '製圖實習',
    units: [
      { id: 'basics', title: '製圖基礎', summary: '圖紙、儀器、線條字法與比例尺。', topics: ['drafting-fundamentals', 'drafting-instruments', 'lines-and-lettering', 'scale'] },
      { id: 'projection', title: '幾何畫法與投影', summary: '幾何作圖、正投影、輔助視圖與剖面。', topics: ['geometric-constructions', 'orthographic-projection', 'auxiliary-views', 'sectional-views'] },
      { id: 'architectural', title: '建築圖說判讀', summary: '平面、立面、尺寸標註、圖例與法規面積計算。', topics: ['architectural-plan', 'architectural-elevation', 'dimensioning-and-symbols', 'civil-architectural-drawings', 'building-codes-far'] },
      { id: 'perspective', title: '透視與陰影', summary: '一點、兩點透視與陰影求法。', topics: ['perspective-projection'] },
      { id: 'digital', title: '電腦繪圖與 BIM', summary: 'CAD 指令觀念與 BIM 資訊模型。', topics: ['cad-basics', 'bim-concepts'] },
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
      { id: 'design-build', title: '空間設計與構造', summary: '空間觀察與營造工法細部。', topics: ['spatial-design', 'construction-methods'] },
      { id: 'digital', title: '數位設計', summary: 'CAD／BIM 應用與參數化設計。', topics: ['cad-bim', 'parametric-design-and-ai-assisted-competition'] },
      { id: 'portfolio', title: '作品集與升學', summary: '作品集、模型表達、設計論述與證照升學。', topics: ['portfolio-models', 'portfolio-and-design-discourse', 'certification'] },
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
