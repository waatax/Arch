/** 統測總複習：依官方考試大綱「章」編排的內容模型。 */
export type DrillKind = '觀念' | '計算' | '情境' | '連鎖' | '判讀';

export interface Drill {
  kind: DrillKind;
  /** 1 基礎（中標）／2 進階（高標）／3 鑑別（頂標） */
  level: 1 | 2 | 3;
  /** 連鎖題共用的情境，只寫在該組第一題；同組後續題以 chained 標示 */
  context?: string;
  chained?: boolean;
  stem: string;
  options: [string, string, string, string];
  answer: 0 | 1 | 2 | 3;
  why: string;
  /** 計算題的可重算式：驗證腳本會核對它與正解選項的第一個數值一致 */
  calc?: string;
}

export interface ChapterContent {
  /** 官方大綱章次（一、二…對應 1、2…）；語文科為題型單元序 */
  no: number;
  title: string;
  /** 本章一句話命題焦點 */
  focus: string;
  essentials: string[];
  formulas?: { latex: string; note: string }[];
  traps: string[];
  drills: Drill[];
  /** 語文科以教學主題為章；未指定時由 outlineRefs 反查 */
  topics?: string[];
}

export const d = (
  kind: DrillKind,
  level: Drill['level'],
  stem: string,
  options: Drill['options'],
  answer: Drill['answer'],
  why: string,
  calc?: string,
  extra?: Pick<Drill, 'context' | 'chained'>,
): Drill => ({ kind, level, stem, options, answer, why, calc, ...extra });
