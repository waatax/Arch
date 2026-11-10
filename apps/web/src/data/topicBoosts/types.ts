/**
 * 頂標加值包（2026-11 新增）：每個主題額外補上的手寫觀念、速記卡與挑戰題。
 * 由 subjects.ts 併入 topic.concepts／topic.boostQuiz，所以教學頁、搜尋與驗證腳本看到的是同一份資料。
 */
export interface BoostConcept {
  heading: string;
  /** 官方大綱條目代碼；延伸內容標 [] */
  outlineRefs: string[];
  body: string;
  table: { headers: string[]; rows: string[][] };
  /** 速記卡：[標籤, 一句話重點] */
  cards: [string, string][];
  formula?: string;
  steps?: string[];
}

export interface BoostQuizItem {
  q: string;
  options: string[];
  /** 正確選項的索引（0 起算） */
  answer: number;
  why: string;
}

export interface TopicBoost {
  concepts: BoostConcept[];
  quiz: BoostQuizItem[];
}

/** topicSlug → 加值包 */
export type SubjectBoostMap = Record<string, TopicBoost>;

export const c = (
  heading: string,
  outlineRefs: string[],
  body: string,
  headers: string[],
  rows: string[][],
  cards: [string, string][],
  extra: { formula?: string; steps?: string[] } = {},
): BoostConcept => ({ heading, outlineRefs, body, table: { headers, rows }, cards, ...extra });

export const q = (question: string, options: string[], answer: number, why: string): BoostQuizItem => ({
  q: question,
  options,
  answer,
  why,
});
