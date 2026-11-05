export interface StudioQuestion {
  stem: string;
  options: [string, string, string, string];
  answer: 0 | 1 | 2 | 3;
  explanation: string;
}
export interface StudioLesson {
  slug: string;
  subject: string;
  title: string;
  outline: string;
  hook: string;
  concepts: [string, string][];
  example: { question: string; steps: string[]; answer: string };
  comparison: [string, string, string][];
  questions: StudioQuestion[];
}
export const SUBJECT_LABELS: Record<string, string> = {
  mechanics: '基礎工程力學', materials: '材料與試驗', surveying: '測量實習', drafting: '製圖實習',
  'math-c': '數學 C', chinese: '國文', english: '英文', physics: '物理', chemistry: '化學',
  history: '歷史', geography: '地理', civics: '公民與社會', extensions: '建築實務',
};
export const EXAM_SUBJECTS = ['mechanics', 'materials', 'surveying', 'drafting', 'math-c', 'chinese', 'english'];
export const SOURCES = [
  { title: '116 統測考試大綱總表', url: 'https://www.tcte.edu.tw/doc/116Range_4y/' },
  { title: '專一：基礎工程力學、材料與試驗', url: 'https://www.tcte.edu.tw/doc/116Range_4y/116-4y-06-1-range.pdf' },
  { title: '專二：測量實習、製圖實習', url: 'https://www.tcte.edu.tw/doc/116Range_4y/116-4y-06-2-range.pdf' },
  { title: '國教院：土木與建築群課程綱要入口', url: 'https://stv.naer.edu.tw/teaching/course_outline.jsp?lvtype=B' },
];
