/**
 * 官方考試大綱與課綱對照的單一事實來源（英文、數學 C）。
 *
 * - 大綱條目逐字取自技專校院入學測驗中心「115 學年度四技二專統一入學測驗考試大綱」（114.08.12 公告）。
 * - 數學 C 各單元的建議授課年級取自國教署技職教育電子報〈技術型高中 108 數學領域新課綱 C 版本與 99 高職數學課綱 C 版本的差異〉。
 * - 英文題型與配分取自「115 學年度英文科作答規定及評閱相關說明」與「115 學年度英文科非選擇題閱卷評分說明」。
 *
 * 教學頁、專家審議紀錄與 validate-expert-review.mjs 都以這裡的代碼互相對照；年度改版時只改這一個檔案。
 */

export interface OutlineItem {
  code: string;
  label: string;
}

export interface OutlineUnit {
  code: string;
  no: string;
  title: string;
  /** 108 課綱建議授課年級（僅在官方文件有明示時填寫） */
  gradeLevel?: 10 | 11 | 12;
  items: OutlineItem[];
}

export interface OfficialSource {
  label: string;
  url: string;
  issuedAt?: string;
}

export interface OfficialOutline {
  subjectSlug: 'math-c' | 'english';
  examName: string;
  academicYear: number;
  checkedAt: string;
  sources: OfficialSource[];
  units: OutlineUnit[];
  notes: string[];
}

export const MATH_C_OUTLINE_115: OfficialOutline = {
  subjectSlug: 'math-c',
  examName: '四技二專統一入學測驗 共同科目－數學(C)',
  academicYear: 115,
  checkedAt: '2026-09-13',
  sources: [
    {
      label: '技專校院入學測驗中心｜115 學年度統測考試大綱：共同科目－數學(C)',
      url: 'https://www.tcte.edu.tw/doc/115Range_4y/115-4y-00-mc-range.pdf',
      issuedAt: '114.08.12',
    },
    {
      label: '國教署技職教育電子報｜技術型高中 108 數學領域新課綱 C 版本與 99 課綱差異',
      url: 'https://vtedu.k12ea.gov.tw/uploads/160765241381039fy8Mo2.pdf',
    },
  ],
  units: [
    {
      code: 'MC1', no: '一', title: '坐標系與函數圖形', gradeLevel: 10,
      items: [
        { code: 'MC1.1', label: '實數' },
        { code: 'MC1.2', label: '絕對值' },
        { code: 'MC1.3', label: '平面坐標系' },
        { code: 'MC1.4', label: '函數及其圖形' },
      ],
    },
    {
      code: 'MC2', no: '二', title: '三角函數', gradeLevel: 10,
      items: [
        { code: 'MC2.1', label: '有向角及其度量' },
        { code: 'MC2.2', label: '銳角的三角函數' },
        { code: 'MC2.3', label: '三角函數的基本性質' },
        { code: 'MC2.4', label: '任意角的三角函數' },
        { code: 'MC2.5', label: '三角函數的圖形與週期' },
        { code: 'MC2.6', label: '正弦與餘弦定理' },
      ],
    },
    {
      code: 'MC3', no: '三', title: '平面向量', gradeLevel: 10,
      items: [
        { code: 'MC3.1', label: '向量及其基本運算' },
        { code: 'MC3.2', label: '向量的內積' },
        { code: 'MC3.3', label: '內積的應用' },
      ],
    },
    {
      code: 'MC4', no: '四', title: '式的運算', gradeLevel: 10,
      items: [
        { code: 'MC4.1', label: '多項式的四則運算' },
        { code: 'MC4.2', label: '餘式與因式定理' },
        { code: 'MC4.3', label: '多項式方程式' },
        { code: 'MC4.4', label: '分式與根式的運算' },
      ],
    },
    {
      code: 'MC5', no: '五', title: '直線與圓', gradeLevel: 10,
      items: [
        { code: 'MC5.1', label: '直線方程式' },
        { code: 'MC5.2', label: '圓方程式' },
        { code: 'MC5.3', label: '圓與直線的關係' },
      ],
    },
    {
      code: 'MC6', no: '六', title: '數列與級數', gradeLevel: 10,
      items: [
        { code: 'MC6.1', label: '等差數列與等差級數' },
        { code: 'MC6.2', label: '等比數列與等比級數' },
      ],
    },
    {
      code: 'MC7', no: '七', title: '排列組合', gradeLevel: 10,
      items: [
        { code: 'MC7.1', label: '排列' },
        { code: 'MC7.2', label: '組合' },
      ],
    },
    {
      code: 'MC8', no: '八', title: '三角函數的應用', gradeLevel: 11,
      items: [
        { code: 'MC8.1', label: '和差角公式' },
        { code: 'MC8.2', label: '複數平面' },
        { code: 'MC8.3', label: '極式的應用' },
        { code: 'MC8.4', label: '三角測量' },
      ],
    },
    {
      code: 'MC9', no: '九', title: '指數與對數', gradeLevel: 11,
      items: [
        { code: 'MC9.1', label: '指數函數及其圖形' },
        { code: 'MC9.2', label: '對數函數及其圖形' },
        { code: 'MC9.3', label: '常用對數及其應用' },
      ],
    },
    {
      code: 'MC10', no: '十', title: '空間向量', gradeLevel: 11,
      items: [
        { code: 'MC10.1', label: '空間概念' },
        { code: 'MC10.2', label: '空間坐標系' },
        { code: 'MC10.3', label: '空間向量' },
        { code: 'MC10.4', label: '空間中的平面' },
      ],
    },
    {
      code: 'MC11', no: '十一', title: '一次聯立方程式與矩陣', gradeLevel: 11,
      items: [
        { code: 'MC11.1', label: '一次方程組與矩陣列運算' },
        { code: 'MC11.2', label: '矩陣的運算' },
      ],
    },
    {
      code: 'MC12', no: '十二', title: '二元一次不等式與線性規劃', gradeLevel: 11,
      items: [{ code: 'MC12.1', label: '二元一次不等式與線性規劃' }],
    },
    {
      code: 'MC13', no: '十三', title: '二次曲線', gradeLevel: 11,
      items: [
        { code: 'MC13.1', label: '拋物線' },
        { code: 'MC13.2', label: '橢圓' },
        { code: 'MC13.3', label: '雙曲線' },
      ],
    },
    {
      code: 'MC14', no: '十四', title: '微分', gradeLevel: 11,
      items: [
        { code: 'MC14.1', label: '函數的極限' },
        { code: 'MC14.2', label: '多項式函數的導數與導函數' },
        { code: 'MC14.3', label: '微分公式' },
        { code: 'MC14.4', label: '微分的應用' },
      ],
    },
    {
      code: 'MC15', no: '十五', title: '積分', gradeLevel: 11,
      items: [
        { code: 'MC15.1', label: '數列的極限' },
        { code: 'MC15.2', label: '積分的概念' },
        { code: 'MC15.3', label: '多項式函數的積分' },
        { code: 'MC15.4', label: '積分的應用' },
      ],
    },
  ],
  notes: [
    '大綱備註：表列考試大綱為命題範圍之例示，實際試題不完全以此為限，仍可命擬相關之綜合性試題。',
    '108 課綱數學 C 已刪除「機率與統計」，並刪除棣美弗定理、複數方根、環狀排列、重複組合、二項式定理；教學頁若提及，一律標示為課綱外延伸。',
    '10 年級：一至七單元；11 年級：八至十五單元（依國教署 C 版學習內容對照表）。',
  ],
};

export const ENGLISH_OUTLINE_115: OfficialOutline = {
  subjectSlug: 'english',
  examName: '四技二專統一入學測驗 共同科目－英文',
  academicYear: 115,
  checkedAt: '2026-09-13',
  sources: [
    {
      label: '技專校院入學測驗中心｜115 學年度統測考試大綱：共同科目－英文',
      url: 'https://www.tcte.edu.tw/doc/115Range_4y/115-4y-00-e-range.pdf',
      issuedAt: '114.08.12',
    },
    {
      label: '技專校院入學測驗中心｜115 學年度英文科作答規定及評閱相關說明',
      url: 'https://www.tcte.edu.tw/index.php?mod=TVETest/desel/yt/115/dn/desel_115/fn/115Desel_ENGLISH.pdf',
    },
    {
      label: '技專校院入學測驗中心｜115 學年度英文科非選擇題閱卷評分說明',
      url: 'https://www.tcte.edu.tw/index.php?mod=TVETest/desel/yt/115/dn/desel_115/fn/115Review_ENG.pdf',
    },
  ],
  units: [
    {
      code: 'EN1', no: '一', title: '語言知識',
      items: [
        { code: 'EN1.2.1', label: '語音：技術型高級中等學校階段課程所學之句子的正確發音及適切語調' },
        { code: 'EN1.3.1', label: '字詞：常見的英文標示' },
        { code: 'EN1.3.2', label: '字詞：生活用語' },
        { code: 'EN1.3.3', label: '字詞：技術型高級中等學校階段課程所學之字詞' },
        { code: 'EN1.3.4', label: '字詞：職場常用詞語' },
        { code: 'EN1.4.1', label: '句構：技術型高級中等學校階段所學的句型結構' },
        { code: 'EN1.5.1', label: '篇章：歌曲、短文、故事' },
        { code: 'EN1.5.2', label: '篇章：常見的圖表' },
        { code: 'EN1.5.3', label: '篇章：公共場所簡易廣播（如捷運、車站、機場廣播）' },
        { code: 'EN1.5.4', label: '篇章：卡片、便條、書信、電子郵件' },
        { code: 'EN1.5.5', label: '篇章：教學廣播節目的內容' },
        { code: 'EN1.5.6', label: '篇章：學習雜誌、漫畫' },
        { code: 'EN1.5.7', label: '篇章：職場常用之圖表與使用手冊' },
        { code: 'EN1.5.8', label: '篇章：工具書與網路資源' },
        { code: 'EN1.5.9', label: '篇章：短篇故事的內容與情節' },
        { code: 'EN1.5.10', label: '篇章：故事的背景、人物、事件和結局' },
      ],
    },
    {
      code: 'EN2', no: '二', title: '溝通功能',
      items: [
        { code: 'EN2.1', label: '主題式或情境式的簡短介紹及自己、家人、朋友與職場的描述' },
        { code: 'EN2.2', label: '生活與職場中的主題式或情境式的簡短描述或問題簡答' },
        { code: 'EN2.3', label: '技術型高級中等學校階段所學字詞及句型的生活溝通' },
        { code: 'EN2.4', label: '技術型高級中等學校階段所學字詞及句型的職場溝通' },
        { code: 'EN2.5', label: '圖片描述' },
        { code: 'EN2.6', label: '引導式討論' },
        { code: 'EN2.7', label: '短文、書信的內容' },
        { code: 'EN2.8', label: '簡短談話或故事的轉述' },
        { code: 'EN2.9', label: '日常簡易對話、短篇故事、簡易廣播的要點' },
        { code: 'EN2.10', label: '職場簡易對話的要點' },
        { code: 'EN2.11', label: '簡易短文或故事的主旨或大意' },
        { code: 'EN2.12', label: '語言與非語言的溝通策略（如請求重述、手勢、表情等）' },
        { code: 'EN2.13', label: '符合情境或場景的自我表達與人際溝通' },
      ],
    },
    {
      code: 'EN3', no: '三', title: '文化與習俗',
      items: [
        { code: 'EN3.1', label: '多元文化觀點、不同文化及習俗的尊重' },
        { code: 'EN3.2', label: '國際社會的基本生活禮儀' },
        { code: 'EN3.3', label: '國際情勢、國際視野' },
        { code: 'EN3.4', label: '國際議題（如全球暖化、人工智慧、氣候變遷等）' },
        { code: 'EN3.5', label: '地球村觀點、生命及全球永續發展的關注' },
        { code: 'EN3.6', label: '文化知識與語言能力、生活與職場中的問題解決之道' },
        { code: 'EN3.7', label: '多元文化、文化差異' },
        { code: 'EN3.8', label: '文化涵養與國際觀' },
        { code: 'EN3.9', label: '文化素養及社會上的多元文化觀點' },
      ],
    },
    {
      code: 'EN4', no: '四', title: '思考能力',
      items: [
        { code: 'EN4.1', label: '多項訊息的比較、歸類、排序' },
        { code: 'EN4.2', label: '不同訊息關係的釐清' },
        { code: 'EN4.3', label: '藉文字線索，對客觀事實及主觀意見的分辨' },
        { code: 'EN4.4', label: '多項訊息共通點或相異處的分析及歸納' },
        { code: 'EN4.5', label: '原則的類推、問題解決之道' },
        { code: 'EN4.6', label: '依訊息的整合，對情勢發展的預測' },
        { code: 'EN4.7', label: '資訊的評估，及任務的規劃與完成' },
      ],
    },
  ],
  notes: [
    '大綱「字母」一項官方標示為「無」，故不列入條目。',
    '大綱備註：表列考試大綱為命題範圍之例示，實際試題不完全以此為限，仍可命擬相關之綜合性試題。',
  ],
};

export interface ExamSection {
  name: string;
  range: string;
  note: string;
}

export interface NonChoiceItemFormat {
  type: '填充' | '句子重組' | '中譯英';
  task: string;
  scoring: string;
}

/** 115 學年度英文科題型、配分與作答時間（官方作答規定與評分說明；題號範圍由 111–115 官方題本逐年核對）。 */
export const ENGLISH_EXAM_FORMAT_115 = {
  minutes: 100,
  multipleChoice: {
    minPoints: 80,
    questionCount: 42,
    sections: [
      { name: '字彙', range: '第 1–10 題', note: '第 1–8 題為句中填空；第 9–10 題判斷畫底線字詞的同義表達。' },
      { name: '對話', range: '第 11–20 題', note: '依對話前後文選出最適當的回應或提問。' },
      { name: '綜合測驗', range: '第 21–28 題（111、112 年為第 21–30 題）', note: '短文克漏字，每篇 4–5 格。' },
      { name: '閱讀測驗', range: '第 29–42 題（111、112 年為第 31–42 題）', note: '圖表、公告、書信、對話＋表格與說明文題組。' },
    ] satisfies ExamSection[],
  },
  nonMultipleChoice: {
    maxPoints: 20,
    items: [
      { type: '填充', task: '依中文題意與提示字首，在英譯句子的兩個空格填入對應英文單字。', scoring: '每格正確 2 級分，兩格皆正確 4 級分。' },
      { type: '句子重組', task: '依正確語法把分割的字詞重組成正確、通順、達意的英文句子。', scoring: '依字詞組合正確程度與拼字、字詞增減、標點錯誤給 0–4 級分；同時書寫兩組答案為 0 級分。' },
      { type: '中譯英', task: '把中文句子譯成正確、通順、達意的英文。', scoring: '依是否充分表達題意及文法、標點、用字給 0–4 級分；空白、離題或只抄題目為 0 級分。' },
    ] satisfies NonChoiceItemFormat[],
    note: '閱卷委員先給級分，閱卷流程結束後再換算為對應分數；統測英文沒有作文或看圖寫作題。',
  },
} as const;

export const OFFICIAL_OUTLINES: Record<'math-c' | 'english', OfficialOutline> = {
  'math-c': MATH_C_OUTLINE_115,
  english: ENGLISH_OUTLINE_115,
};

export function findOutlineItem(outline: OfficialOutline, code: string): { unit: OutlineUnit; item: OutlineItem } | null {
  for (const unit of outline.units) {
    const item = unit.items.find((candidate) => candidate.code === code);
    if (item) return { unit, item };
  }
  return null;
}
