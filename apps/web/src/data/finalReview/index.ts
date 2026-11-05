import type { ChapterContent, Drill } from './types';
import { mechanicsChapters } from './mechanics';
import { materialsChapters } from './materials';
import { surveyingChapters } from './surveying';
import { draftingChapters } from './drafting';
import { chineseChapters, englishChapters, mathCChapters } from './common';

export type { ChapterContent, Drill } from './types';
export { EXAM_CHAPTER_MAP, EXAM_YEARS } from './examMap';

export interface FinalReviewSubject {
  slug: string;
  title: string;
  paper: '專業科目（一）' | '專業科目（二）' | '共同科目';
  /** 官方大綱單元代碼前綴；語文科無對應的章，改用 chapter.topics */
  outlinePrefix?: string;
  /** 共同科目依教學主題順序對應章次 */
  chapterTopics?: string[];
  lede: string;
  chapters: ChapterContent[];
}

/** 以題幹為種子打亂選項，避免人工出題時正解集中在特定位置。 */
function shuffled(drill: Drill): Drill {
  let seed = 0;
  for (const ch of drill.stem) seed = (seed * 31 + ch.codePointAt(0)!) >>> 0;
  const order = [0, 1, 2, 3];
  for (let i = 3; i > 0; i--) {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    const j = seed % (i + 1);
    [order[i], order[j]] = [order[j], order[i]];
  }
  return {
    ...drill,
    options: order.map((k) => drill.options[k]) as Drill['options'],
    answer: order.indexOf(drill.answer) as Drill['answer'],
  };
}

const withShuffled = (chapters: ChapterContent[]) =>
  chapters.map((c) => ({ ...c, drills: c.drills.map(shuffled) }));

export const FINAL_REVIEW_SUBJECTS: FinalReviewSubject[] = [
  { slug: 'mechanics', title: '基礎工程力學', paper: '專業科目（一）', outlinePrefix: 'ME', lede: '從自由體圖到莫爾圓，一條力的路徑貫穿 13 章。', chapters: withShuffled(mechanicsChapters) },
  { slug: 'materials', title: '材料與試驗', paper: '專業科目（一）', outlinePrefix: 'MT', lede: '以試驗為主軸，把材料性質、規範與計算串起來。', chapters: withShuffled(materialsChapters) },
  { slug: 'surveying', title: '測量實習', paper: '專業科目（二）', outlinePrefix: 'SV', lede: '外業操作加數值計算，近年更重視坐標與新興測繪。', chapters: withShuffled(surveyingChapters) },
  { slug: 'drafting', title: '製圖實習', paper: '專業科目（二）', outlinePrefix: 'DR', lede: '從投影原理到建築圖判讀，用圖面思考。', chapters: withShuffled(draftingChapters) },
  {
    slug: 'math-c', title: '數學 C', paper: '共同科目', outlinePrefix: 'MC', lede: '15 單元的概念與情境應用，閱讀能力同樣影響得分。',
    chapterTopics: ['functions-graphs', 'trigonometry', 'vectors', 'algebra', 'lines-circles', 'sequences-series', 'permutations-combinations', 'trig-applications', 'exponents-logarithms', 'space-vectors', 'matrices', 'linear-programming', 'geometry', 'calculus', 'integration'],
    chapters: withShuffled(mathCChapters),
  },
  { slug: 'english', title: '英文', paper: '共同科目', lede: '依統測題型編排：字彙、文法、對話、綜合、閱讀與非選。', chapters: withShuffled(englishChapters) },
  { slug: 'chinese', title: '國文', paper: '共同科目', lede: '語文知識、文本閱讀到寫作，以閱讀素養為核心。', chapters: withShuffled(chineseChapters) },
];

export const getFinalReviewSubject = (slug: string) => FINAL_REVIEW_SUBJECTS.find((s) => s.slug === slug);

/** 重要度只由 111–115 實際題數決定，不使用估計值。 */
export function importance(count: number, chapterCount: number, total: number): 'A' | 'B' | 'C' {
  const even = total / chapterCount;
  if (count >= even * 1.25) return 'A';
  if (count >= even * 0.6) return 'B';
  return 'C';
}

export const handoutPdfPath = (slug: string) => `/handouts/final-review-${slug}.pdf`;
