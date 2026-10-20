export type ExamPeriod = 'midterm-1' | 'midterm-2' | 'final';
export type GradeLevel = 10 | 11 | 12;
export type SemesterCode = 's1' | 's2';

export interface SvgDiagramData {
  title: string;
  caption: string;
  svg: string; // 內嵌純淨向量圖 (SVG)
}

export interface ExamWorkedExampleStep {
  stepNo: number;
  title: string;
  content: string;
}

export interface ExamWorkedExample {
  id: string;
  title: string;
  targetConcept: string;
  difficulty: '基礎入門' | '段考常考' | '高手衝刺';
  questionStem: string;
  figureDescription?: string;
  beginnerThinking: string; // 零基礎破題思維：從哪裡看起、為什麼用這個公式
  stepByStepSolution: ExamWorkedExampleStep[]; // 逐步詳細 SOP 計算過程
  examinerTrapWarning: string; // 老師扣分陷阱
  quickMnemonic: string; // 秒殺口訣
  finalAnswer: string;
}

export interface ExamKnowledgePoint {
  id: string;
  title: string;
  curriculumCode: string; // 108 課綱或統測大綱條目代碼
  importance: 1 | 2 | 3 | 4 | 5; // 五星重要度
  textbookChapter: string; // 教科書對照章節（如「全華/科友/南一 第 2 章」）
  summary: string; // 預備講義核心觀念
  intuitiveAnalogy?: string; // 零基礎生活化直覺比喻
  svgDiagram?: SvgDiagramData; // 高清教學向量圖解
  keyFormulaOrRule?: string; // 公式或核心法則
  cramTips: string[]; // 考前速記口訣 / 30 秒秒殺點
  trapWarning: string; // 段考致命扣分陷阱
  junyiMasterySkill: string; // 均一教育平台精熟指標技能名稱
}

export interface ExamPaperCrossReference {
  id: string;
  sourceExam: string; // 例如「台中高工 112 學年度高二上材料與試驗第一次段考 第 14 題」
  questionStem: string;
  figureDescription?: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  answer: 'A' | 'B' | 'C' | 'D';
  detailedExplanation: string;
  relatedKnowledgePointId: string;
  examTrickAnalysis: string; // 命題教師常設陷阱解析
}

export interface CramFormulaCard {
  title: string;
  formula: string;
  unit?: string;
  notes: string;
  memoryMnemonic?: string; // 記憶口訣
}

export interface PeriodicExamPlan {
  id: string; // 例如 "taichung-g11-materials-s1-m1"
  grade: GradeLevel;
  semester: SemesterCode;
  semesterTitle: string; // "高二上學期"
  period: ExamPeriod;
  periodName: string; // "第一次段考（期中考一）"
  weekRange: string; // "第 6~7 週"
  subjectSlug: string;
  subjectName: string;
  category: '專業科目（一）' | '專業科目（二）' | '共同科目' | '專業實習';
  targetSchool: string; // "國立台中高工建築科指標對照"
  examScope: string; // 考試範圍
  schoolContextNotes: string; // 台中高工建築科課堂實務與段考比重說明
  scoreWeight: string; // 段考佔學期總成績比重，例如 "佔學期成績 20%"
  handoutSummary: string; // 本次段考預備講義核心導言
  beginnerMindset?: string; // 零基礎學生考前心理與破題心法
  downloadablePdfFilename?: string; // 專屬 PDF 下載檔名
  knowledgePoints: ExamKnowledgePoint[];
  cramFormulaCards: CramFormulaCard[];
  workedExamples?: ExamWorkedExample[]; // 零基礎必備示範題逐步解題
  crossReferencedQuestions: ExamPaperCrossReference[];
  preExamChecklist: string[]; // 均一風格階梯檢核清單
}

export interface PeriodicExamFilter {
  grade?: GradeLevel;
  semester?: SemesterCode;
  period?: ExamPeriod;
  subjectSlug?: string;
}
