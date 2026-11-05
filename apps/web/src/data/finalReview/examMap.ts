/**
 * 111–115 專業科目 400 題 → 116 考試大綱章次。
 * 這是依題幹逐題人工歸類的結果，跨章題歸入主要考點；與出版社的歸類可能略有差異。
 * 每列依題號順序，以逗號分隔章次。
 */
const raw: Record<string, { mechanics: string; materials: string; surveying: string; drafting: string }> = {
  '111': {
    mechanics: '11,12,11,13,13,13,7,6,6,6,9,9,10,8,2,8,8,7,7,9',
    materials: '7,3,6,6,5,4,1,5,6,6,3,2,2,5,3,1,8,4,7,2',
    surveying: '3,1,2,3,4,6,6,3,3,5,3,4,6,2,2,6,5,3,2,3',
    drafting: '1,3,11,4,11,8,11,5,11,11,1,1,6,9,10,7,7,11,11,6',
  },
  '112': {
    mechanics: '8,11,5,13,10,12,12,7,2,9,5,11,11,13,11,1,9,6,11,4',
    materials: '1,6,6,6,4,8,6,2,3,3,4,7,1,3,3,7,2,5,5,2',
    surveying: '1,3,1,2,1,4,2,2,4,5,6,3,6,6,6,4,5,5,3,3',
    drafting: '6,10,4,3,11,11,6,11,10,4,4,1,9,7,1,7,11,11,11,11',
  },
  '113': {
    mechanics: '2,3,4,5,5,12,8,8,11,13,11,13,13,7,9,9,9,6,6,9',
    materials: '1,2,1,3,3,3,3,5,5,5,6,6,3,7,7,8,8,4,3,6',
    surveying: '3,3,6,4,2,1,2,4,6,2,4,4,4,3,6,6,5,5,5,3',
    drafting: '11,11,3,8,10,6,1,10,6,11,11,11,11,6,11,11,11,11,11,11',
  },
  '114': {
    mechanics: '6,7,4,5,3,2,12,11,12,11,9,9,5,13,7,10,8,13,9,4',
    materials: '1,2,6,3,8,5,5,3,4,3,2,7,5,2,3,4,6,3,6,7',
    surveying: '3,1,1,3,1,1,3,3,5,3,5,6,3,6,2,6,6,6,6,6',
    drafting: '6,1,1,5,11,8,11,2,6,11,6,6,7,6,11,11,11,11,11,6',
  },
  '115': {
    mechanics: '2,2,3,4,11,12,6,9,13,11,9,6,8,7,7,8,5,10,13,3',
    materials: '2,1,2,3,3,7,5,8,4,5,3,7,1,8,3,6,3,2,3,4',
    surveying: '1,1,1,1,4,1,2,2,6,6,4,5,5,6,3,5,3,5,3,6',
    drafting: '3,3,1,7,11,4,4,5,11,9,7,7,11,10,11,11,11,6,6,1',
  },
};

export const EXAM_YEARS = [111, 112, 113, 114, 115] as const;

/** 題目 id（例 115-2-21）→ { subject, chapter } */
export const EXAM_CHAPTER_MAP: Record<string, { subject: string; chapter: number }> = {};
for (const [year, row] of Object.entries(raw)) {
  const put = (paper: number, subject: string, list: string, start: number) =>
    list.split(',').forEach((c, i) => {
      EXAM_CHAPTER_MAP[`${year}-${paper}-${start + i}`] = { subject, chapter: Number(c) };
    });
  put(1, 'mechanics', row.mechanics, 1);
  put(1, 'materials', row.materials, 21);
  put(2, 'surveying', row.surveying, 1);
  put(2, 'drafting', row.drafting, 21);
}
