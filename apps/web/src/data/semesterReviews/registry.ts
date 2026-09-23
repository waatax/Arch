import { SemesterReviewData, SubjectSemesterMeta } from './types';
import { mechanicsS1Review } from './mechanics-s1';
import { mechanicsS2Review } from './mechanics-s2';
import { materialsS1Review } from './materials-s1';
import { materialsS2Review } from './materials-s2';
import { surveyingS1Review } from './surveying-s1';
import { surveyingS2Review } from './surveying-s2';
import { draftingS1Review } from './drafting-s1';
import { draftingS2Review } from './drafting-s2';
import { mathCS1Review, mathCS2Review } from './math-c-semesters';
import { chineseS1Review } from './common-and-general';
import {
  englishS1Review,
  englishS2Review,
  englishS3Review,
  englishS4Review,
} from './english-semesters';

export const allSemesterReviews: SemesterReviewData[] = [
  mechanicsS1Review,
  mechanicsS2Review,
  materialsS1Review,
  materialsS2Review,
  surveyingS1Review,
  surveyingS2Review,
  draftingS1Review,
  draftingS2Review,
  mathCS1Review,
  mathCS2Review,
  chineseS1Review,
  englishS1Review,
  englishS2Review,
  englishS3Review,
  englishS4Review,
];

export const allSubjectSemestersMeta: SubjectSemesterMeta[] = [
  {
    subjectSlug: 'mechanics',
    subjectTitle: '基礎工程力學',
    category: '專業科目（一）',
    semesters: [
      {
        code: 's1',
        title: '第一學期（高一上）',
        gradeLevel: 10,
        scope: '力系平衡、載重等值化、摩擦力學與結構破壞安全哲學',
        examWeight: '約佔專一 40% ~ 45%（約 16~18 題）',
        chapterCount: 6,
        questionCount: 3,
      },
      {
        code: 's2',
        title: '第二學期（高一下）',
        gradeLevel: 10,
        scope: '形心慣性矩、桁架應力、梁剪力彎矩圖、應力應變與莫耳圓',
        examWeight: '約佔專一 55% ~ 60%（約 22~24 題，得分關鍵）',
        chapterCount: 5,
        questionCount: 3,
      },
    ],
  },
  {
    subjectSlug: 'materials',
    subjectTitle: '材料與試驗',
    category: '專業科目（一）',
    semesters: [
      {
        code: 's1',
        title: '第一學期（高二上）',
        gradeLevel: 11,
        scope: '材料物理性質、卜特蘭水泥四大熟料、CNS 61 水泥分類與維卡儀強度試驗',
        examWeight: '約佔專一 25% ~ 30%（約 10~12 題）',
        chapterCount: 5,
        questionCount: 2,
      },
      {
        code: 's2',
        title: '第二學期（高二下）',
        gradeLevel: 11,
        scope: '混凝土配比與坍度抗壓試驗、木材FSP、金屬鋼筋、綠建材循環永續',
        examWeight: '約佔專一 25% ~ 30%（約 10~12 題）',
        chapterCount: 5,
        questionCount: 2,
      },
    ],
  },
  {
    subjectSlug: 'surveying',
    subjectTitle: '測量實習',
    category: '專業科目（二）',
    semesters: [
      {
        code: 's1',
        title: '第一學期（高二上）',
        gradeLevel: 11,
        scope: '測量誤差理論、儀器整平檢校、水準測高與前後等距消除法',
        examWeight: '約佔專二 25% ~ 30%（約 10~12 題）',
        chapterCount: 4,
        questionCount: 2,
      },
      {
        code: 's2',
        title: '第二學期（高二下）',
        gradeLevel: 11,
        scope: '導線測量外業、坐標正反算、閉合差平差與土地多邊形面積計算',
        examWeight: '約佔專二 20% ~ 25%（約 8~10 題）',
        chapterCount: 3,
        questionCount: 2,
      },
    ],
  },
  {
    subjectSlug: 'drafting',
    subjectTitle: '製圖實習',
    category: '專業科目（二）',
    semesters: [
      {
        code: 's1',
        title: '第一學期（高一上）',
        gradeLevel: 10,
        scope: 'CNS 圖紙規範、線條優先順序、比例尺幾何畫法與正投影第三角法原理',
        examWeight: '約佔專二 25% ~ 30%（約 10~12 題）',
        chapterCount: 4,
        questionCount: 2,
      },
      {
        code: 's2',
        title: '第二學期（高一下）',
        gradeLevel: 10,
        scope: '五大剖面視圖、CNS 建築製圖符號、建築平立剖施工圖識圖與 CAD/BIM',
        examWeight: '約佔專二 25% ~ 30%（約 10~12 題）',
        chapterCount: 4,
        questionCount: 2,
      },
    ],
  },
  {
    subjectSlug: 'math-c',
    subjectTitle: '數學 C',
    category: '共同科目',
    semesters: [
      {
        code: 's1',
        title: '第一學期（高一上）',
        gradeLevel: 10,
        scope: '直線與斜率、點到直線距離、圓方程式相切判定、三角函數正餘弦定理',
        examWeight: '約佔數C 25%（約 6~7 題）',
        chapterCount: 3,
        questionCount: 1,
      },
      {
        code: 's2',
        title: '第二學期（高一下）',
        gradeLevel: 10,
        scope: '平面向量運算與垂直內積、等差等比數列級數、指數律與對數運算',
        examWeight: '約佔數C 25%（約 6~7 題）',
        chapterCount: 3,
        questionCount: 1,
      },
    ],
  },
  {
    subjectSlug: 'chinese',
    subjectTitle: '國語文',
    category: '共同科目',
    semesters: [
      {
        code: 's1',
        title: '第一學期（高一上）',
        gradeLevel: 10,
        scope: '六書造字法則、字形字音字義、成語文化常識、長篇素養閱讀破題',
        examWeight: '約佔國文 50% 核心考點',
        chapterCount: 1,
        questionCount: 1,
      },
    ],
  },
  {
    subjectSlug: 'english',
    subjectTitle: '英語文',
    category: '共同科目',
    semesters: [
      {
        code: 's1',
        title: '第一學期（高一上）',
        gradeLevel: 10,
        scope: '核心基礎 1200 單字、詞性轉換字尾、五大時態變化、被動語態與情態助動詞',
        examWeight: '佔統測英語約 30% ~ 35%（字彙前 10 題與基礎文法）',
        chapterCount: 2,
        questionCount: 2,
      },
      {
        code: 's2',
        title: '第二學期（高一下）',
        gradeLevel: 10,
        scope: '進階 2000 單字、動名詞 (avoid/enjoy) vs 不定詞 (decide/plan)、間接問句不倒裝、情緒形容詞 -ed/-ing',
        examWeight: '佔統測英語約 25% ~ 30%（文法對話與克漏字核心）',
        chapterCount: 2,
        questionCount: 2,
      },
      {
        code: 's3',
        title: '第三學期（高二上）',
        gradeLevel: 11,
        scope: '高頻 3500 單字、關係代名詞 (that 兩大禁忌)、關係副詞、分詞構句、高頻轉折詞 (However/Therefore)',
        examWeight: '佔統測英語約 25% ~ 30%（克漏字與長篇閱測分水嶺）',
        chapterCount: 2,
        questionCount: 2,
      },
      {
        code: 's4',
        title: '第四學期（高二下）',
        gradeLevel: 11,
        scope: '統測高階 4500 單字、與現在/過去相反假設語氣兩大公式、if 省略倒裝、否定副詞置首倒裝、長篇素養閱讀破題五步 SOP',
        examWeight: '佔統測英語約 25% ~ 30%（高分 15 級分鑑別度考點）',
        chapterCount: 2,
        questionCount: 2,
      },
    ],
  },
];

export function getSemesterReview(subjectSlug: string, semesterCode: string): SemesterReviewData | undefined {
  return allSemesterReviews.find(
    (review) => review.subjectSlug === subjectSlug && review.semesterCode === semesterCode
  );
}

export function getSubjectSemesters(subjectSlug: string): SubjectSemesterMeta | undefined {
  return allSubjectSemestersMeta.find((meta) => meta.subjectSlug === subjectSlug);
}
