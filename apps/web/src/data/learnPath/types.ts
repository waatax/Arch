/**
 * 闖關學習（Duolingo 式）資料型別
 *
 * 一門「課程」= 某學期的某一科（例如 高一上・測量實習Ⅰ）。
 * 課程由數個「單元」組成，單元內是手寫題庫；關卡（lesson node）在執行期由題庫切片產生。
 */

export type SemesterId = 'g10s1' | 'g10s2' | 'g11s1' | 'g11s2' | 'g12s1' | 'g12s2';

export type CourseCategory =
  | '部定一般科目'
  | '部定專業科目'
  | '部定實習科目'
  | '技能領域'
  | '校訂科目';

export type CourseDomain =
  | '語文'
  | '數學'
  | '社會'
  | '自然科學'
  | '藝術'
  | '綜合活動暨科技'
  | '健康與體育'
  | '全民國防'
  | '專業'
  | '實習';

export interface SemesterInfo {
  id: SemesterId;
  grade: 10 | 11 | 12;
  term: 1 | 2;
  label: string; // 高一上
  longLabel: string; // 第一學年第一學期
  theme: string; // 本學期學習主軸
}

/** 連到既有深度教學頁 /subjects/[subject]/[topic] */
export interface TopicLink {
  subject: string;
  topic: string;
}

export interface CourseMeta {
  /** 全站唯一：`${semester}-${key}` */
  id: string;
  key: string;
  semester: SemesterId;
  title: string;
  shortTitle: string;
  category: CourseCategory;
  domain: CourseDomain;
  credits: number;
  /** 排課依據說明（官方表號或「示例排課」） */
  placement: string;
  /** 是否為官方建議授課年段（表2-2/2-3） */
  officialPlacement: boolean;
  /** 統測對應（若有） */
  exam?: string;
  /** Tailwind 色系名稱，用於課程主色 */
  color: CourseColor;
  emoji: string;
  blurb: string;
}

export type CourseColor =
  | 'emerald'
  | 'sky'
  | 'violet'
  | 'amber'
  | 'rose'
  | 'teal'
  | 'indigo'
  | 'orange'
  | 'lime'
  | 'cyan'
  | 'fuchsia'
  | 'slate';

export interface McqExercise {
  id: string;
  type: 'mcq';
  prompt: string;
  /** 作者撰寫時第一個為正解；執行期洗牌 */
  choices: string[];
  answer: number;
  explain?: string;
  /** 英文題可朗讀 */
  speak?: string;
}

export interface TrueFalseExercise {
  id: string;
  type: 'tf';
  prompt: string;
  answer: boolean;
  explain?: string;
}

export interface MatchExercise {
  id: string;
  type: 'match';
  prompt: string;
  pairs: [string, string][];
  explain?: string;
}

export interface OrderExercise {
  id: string;
  type: 'order';
  prompt: string;
  /** 正確順序 */
  tiles: string[];
  explain?: string;
}

export interface NumericExercise {
  id: string;
  type: 'num';
  prompt: string;
  answer: number;
  unit?: string;
  /** 允許的絕對誤差 */
  tolerance: number;
  explain?: string;
}

export type Exercise = McqExercise | TrueFalseExercise | MatchExercise | OrderExercise | NumericExercise;
export type ExerciseType = Exercise['type'];

export interface LearnUnit {
  id: string;
  index: number;
  title: string;
  /** 對應 108 課綱學習內容（主題／條目） */
  outline: string;
  /** 指南重點（Guidebook） */
  guide: string[];
  topic?: TopicLink;
  items: Exercise[];
}

export interface LearnCourse extends CourseMeta {
  units: LearnUnit[];
}

export type NodeKind = 'lesson' | 'practice' | 'chest' | 'challenge';

export interface PathNode {
  id: string;
  kind: NodeKind;
  unitIndex: number;
  /** 關卡在單元中的序號（從 0 起） */
  order: number;
  title: string;
  /** 本關使用的題目 id */
  itemIds: string[];
}

/** 學期總覽頁使用的輕量摘要（不含題目） */
export interface CourseSummary extends CourseMeta {
  unitCount: number;
  itemCount: number;
  nodeIds: string[];
  unitTitles: string[];
}
