export interface SemesterTableData {
  title: string;
  headers: string[];
  rows: string[][];
  note?: string;
}

export interface SemesterFormulaCard {
  formula: string;
  meaning: string;
  unit: string;
  cautions: string;
  latex?: string;
}

export interface SemesterDiagram {
  title: string;
  type: 'fbd' | 'stress' | 'chart' | 'flowchart' | 'decision-tree' | 'projection' | 'geometry' | 'matrix' | 'section' | 'cross-section' | 'component' | 'timeline' | 'mindmap';
  caption: string;
  svgContent?: string; // 輕量向量圖或標註
  asciiArt?: string; // 緊湊精確的幾何/受力/架構圖示
  labels?: { label: string; desc: string }[];
}

export interface SemesterChapterSummary {
  chapterNo: number;
  title: string;
  topicSlug: string;
  examFrequency: 1 | 2 | 3 | 4 | 5; // 統測頻率星級
  coreConcepts: {
    heading: string;
    explanation: string;
    keyPoints: string[];
  }[];
  diagram?: SemesterDiagram;
  formulaCard?: SemesterFormulaCard;
  tables?: SemesterTableData[];
  mustMasterChecklist: string[];
}

export interface SemesterTrapCheck {
  title: string;
  trap: string;
  solution: string;
  relatedExamConcept: string;
}

export interface SemesterWorkedExample {
  id: string; // 歷年統測真題代號 e.g. "115-專一-12"
  year: number;
  questionNo: number;
  examPaper: string;
  stem: string;
  figureUrl?: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  answer: 'A' | 'B' | 'C' | 'D';
  sopSteps: {
    stepNo: number;
    title: string;
    detail: string;
  }[];
  examinerTrapNotes: string;
  quickShortcut: string;
}

export interface SemesterExamAnalysis {
  examWeight: string; // e.g. "佔專業科目（一）約 45% ~ 50%（約 18~20 題/40 題）"
  coreExamThemes: string[];
  recentTrends: string;
  targetScoreAdvice: string;
}

export interface SemesterReviewData {
  id: string; // e.g. "mechanics-s1"
  subjectSlug: string;
  subjectTitle: string;
  semesterCode: string; // e.g. "s1", "s2", "s3", "s4"
  semesterTitle: string; // e.g. "第一學期（高一上）"
  gradeLevel: 10 | 11 | 12;
  subtitle: string;
  category: '專業科目（一）' | '專業科目（二）' | '共同科目' | '自然科學' | '社會領域' | '實習與實務';
  curriculumScope: string; // 108 課綱對應單元範圍
  topicSlugs: string[];
  examAnalysis: SemesterExamAnalysis;
  chapters: SemesterChapterSummary[];
  highFrequencyTraps: SemesterTrapCheck[];
  curatedPastQuestions: SemesterWorkedExample[];
  preExamChecklist: string[];
}

export interface SubjectSemesterMeta {
  subjectSlug: string;
  subjectTitle: string;
  category: string;
  semesters: {
    code: string;
    title: string;
    gradeLevel: 10 | 11 | 12;
    scope: string;
    examWeight: string;
    chapterCount: number;
    questionCount: number;
  }[];
}
