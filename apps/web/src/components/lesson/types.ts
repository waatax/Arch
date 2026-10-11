/** 已對應到本章的官方統測題（由 server page 從題庫登錄表篩出） */
export interface MappedExamQuestion {
  id: string;
  subject?: string;
  topic?: string;
  lessonRoute?: string | null;
  sourceLabel?: string;
  sourceUrl?: string;
  year?: number;
  questionNo?: number;
  excerpt: string;
  figureImage?: string | null;
  answer: string;
  options?: Partial<Record<'A' | 'B' | 'C' | 'D', string>>;
}

/** 由 server page 依知識框架計算好的章節位置 */
export interface LessonPlacement {
  chapter: number;
  totalChapters: number;
  unitTitle: string;
  unitSummary: string;
  unitIndex: number;
  unitCount: number;
  /** 同單元的章節（含本章），供章節切換 */
  unitTopics: { slug: string; title: string; chapter: number }[];
}
