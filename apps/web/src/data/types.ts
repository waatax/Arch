export interface PracticeQuestion {
  question: string;
  difficulty: string;
  steps: string[];
  answer: string;
}

export interface PracticeItem {
  question: string;
  difficulty: string; 
  steps: string[];
  answer: string;
  hints?: string[];
  commonMistake?: string;
  eliteShortcut?: string;
}

export interface ChartData {
  type: 'line' | 'bar' | 'pie';
  title?: string;
  xAxisLabel?: string;
  yAxisLabel?: string;
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    color?: string;
  }[];
}

export interface TableData {
  headers?: string[];
  rows: string[][];
  alignments?: ('left' | 'center' | 'right')[];
  title?: string;
}

export interface VisualFigureData {
  chart?: ChartData;
  table?: TableData;
  svg?: string;
  html?: string;
  markdown?: string;
}

export interface FatalTrapItem {
  wrongThinking: string;
  correctThinking: string;
  trapDescription: string;
}

export interface EliteMentalModelItem {
  technique: string;
  explanation: string;
}

export interface TopicContent {
  slug: string;
  title: string;
  desc: string;
  concepts: {
    heading: string;
    /** 對應官方考試大綱細項代碼，例如 MC14.2 */
    outlineRefs?: string[];
    body: string;
    steps?: string[];
    formula?: string;
    table?: { headers: string[]; rows: string[][] }; 
    diagram?: { title: string; caption?: string; svg?: string };
    /** 速記卡（頂標加值觀念的資訊圖卡） */
    keyCards?: { label: string; value: string }[];
    /** 2026-11 頂標加值包新增的觀念 */
    boost?: boolean;
  }[];
  /** 手寫的頂標挑戰題（四選一） */
  boostQuiz?: { q: string; options: string[]; answer: number; why: string }[];
  practice?: PracticeItem;
  practices?: PracticeItem[];
  covered_question_ids?: string[];
  worked_examples?: PracticeItem[];
  illustrations?: string[];
  status: 'done' | 'draft' | 'stub';
  gradeLevel?: 10 | 11 | 12;
  semester?: 1 | 2;
  curriculumCode?: string;
  estimatedMinutes?: number;
  examHitRate?: 1 | 2 | 3 | 4 | 5;
  step0Prerequisites?: string[];
  fatalTraps?: FatalTrapItem[];
  eliteMentalModels?: EliteMentalModelItem[];
  schoolOverlay?: {
    tcivsWeek?: number;
    laboratory?: string;
    certificationLink?: string;
  };
}

export interface SubjectData {
  slug: string;
  title: string;
  category: string;
  color: string;
  topics: TopicContent[];
}

export type TopicConcept = TopicContent['concepts'][number];

