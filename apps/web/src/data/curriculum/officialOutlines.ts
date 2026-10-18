/**
 * 官方考試大綱與課綱對照的單一事實來源（13 科）。
 *
 * - 統測科目（基礎工程力學、材料與試驗、測量實習、製圖實習、國文、英文、數學 C）的條目逐字取自
 *   技專校院入學測驗中心「115 學年度四技二專統一入學測驗考試大綱」（114.08.12 公告）。
 * - 物理、化學、歷史、地理、公民與社會不在土木與建築群統測範圍，條目逐字取自
 *   《十二年國民基本教育課程綱要 技術型高級中等學校》自然科學領域（107.11，土木與建築群適用物理 B、化學 B）
 *   與社會領域（107.10）的「學習內容」；代碼沿用官方編碼。
 * - 數學 C 各單元的建議授課年級取自國教署技職教育電子報〈技術型高中 108 數學領域新課綱 C 版本與 99 高職數學課綱 C 版本的差異〉。
 * - 英文題型與配分取自「115 學年度英文科作答規定及評閱相關說明」與「115 學年度英文科非選擇題閱卷評分說明」。
 *
 * 教學頁、專家審議紀錄與 validate-expert-review.mjs 都以這裡的代碼互相對照；年度改版時只改這一個檔案。
 */

export interface OutlineItem {
  code: string;
  label: string;
  /** 課綱標示「*」的進階教材（教師視學生程度選授） */
  advanced?: boolean;
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

/** exam＝統測考試大綱；curriculum＝108 課綱學習內容；group＝群科課綱科目層級對照 */
export type OutlineKind = 'exam' | 'curriculum' | 'group';

export interface OfficialOutline {
  subjectSlug: string;
  kind: OutlineKind;
  /** 頁面徽章用的短名稱，例如「115 統測大綱」 */
  shortLabel: string;
  examName: string;
  academicYear: number;
  checkedAt: string;
  sources: OfficialSource[];
  units: OutlineUnit[];
  notes: string[];
}

export const MATH_C_OUTLINE_115: OfficialOutline = {
  subjectSlug: 'math-c',
  kind: 'exam',
  shortLabel: '115 統測大綱',
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
  kind: 'exam',
  shortLabel: '115 統測大綱',
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


export function findOutlineItem(outline: OfficialOutline, code: string): { unit: OutlineUnit; item: OutlineItem } | null {
  for (const unit of outline.units) {
    const item = unit.items.find((candidate) => candidate.code === code);
    if (item) return { unit, item };
  }
  return null;
}

/* ────────────────────────────────────────────────────────────────────────────
 * 115 統測：06 土木與建築群 專業科目（一）（二）與共同科目國文
 * ──────────────────────────────────────────────────────────────────────────── */

/** 依序自動編號：unit('ME1', …, ['質點與剛體', …]) → ME1.1、ME1.2 … */
function unit(code: string, no: string, title: string, labels: string[], gradeLevel?: 10 | 11 | 12): OutlineUnit {
  return { code, no, title, gradeLevel, items: labels.map((label, index) => ({ code: `${code}.${index + 1}`, label })) };
}

/** 108 課綱官方編碼條目；以「*」結尾的代碼代表進階教材 */
function official(code: string, label: string): OutlineItem {
  return code.endsWith('*') ? { code: code.slice(0, -1), label, advanced: true } : { code, label };
}

const TCTE_115_SOURCE_PRO1: OfficialSource = {
  label: '技專校院入學測驗中心｜115 學年度統測考試大綱：06 土木與建築群 專業科目(一)－基礎工程力學、材料與試驗',
  url: 'https://www.tcte.edu.tw/doc/115Range_4y/115-4y-06-1-range.pdf',
  issuedAt: '114.08.12',
};

const TCTE_115_SOURCE_PRO2: OfficialSource = {
  label: '技專校院入學測驗中心｜115 學年度統測考試大綱：06 土木與建築群 專業科目(二)－測量實習、製圖實習',
  url: 'https://www.tcte.edu.tw/doc/115Range_4y/115-4y-06-2-range.pdf',
  issuedAt: '114.08.12',
};

const TCTE_115_NOTES = [
  '大綱備註：表列考試大綱為考試命題範圍之例示，惟實際試題並不完全以此為限，仍可命擬相關之綜合性試題。',
  '大綱備註：試題測驗目標參考課程綱要之學習表現內涵。',
];

export const MECHANICS_OUTLINE_115: OfficialOutline = {
  subjectSlug: 'mechanics',
  kind: 'exam',
  shortLabel: '115 統測大綱',
  examName: '四技二專統一入學測驗 專業科目(一)－基礎工程力學',
  academicYear: 115,
  checkedAt: '2026-10-17',
  sources: [TCTE_115_SOURCE_PRO1],
  units: [
    unit('ME1', '一', '力學基本觀念', ['質點與剛體', '力與力系', '向量與純量', '牛頓三大運動定律', '力的國際單位', '力之外效應與可傳性']),
    unit('ME2', '二', '平面共點力系', ['力之分解', '共線力系之合成', '共點力系之合成與分解', '自由體圖', '二力與三力之平衡', '共點力系平衡之分析']),
    unit('ME3', '三', '平面平行力系', ['力矩與力矩原理', '力偶及其特性', '力之平移', '平行力系之合成與分解', '平行力系平衡之分析']),
    unit('ME4', '四', '共面非共點非平行力系', ['力系之合成與分解', '力系平衡之分析']),
    unit('ME5', '五', '空間力系', ['空間單力 X.Y.Z 軸分力', '共點力系之合成與分解', '共點力系之平衡分析', '平行力系之合成與分解', '平行力系之平衡分析', '非共點非平行力系的認識']),
    unit('ME6', '六', '桁架', ['桁架的認識', '節點法與截面法']),
    unit('ME7', '七', '摩擦力', ['摩擦之定義', '摩擦角及靜止角', '平面與斜面滑動摩擦']),
    unit('ME8', '八', '重心、形心及慣性矩', ['重心與形心', '組合面之形心', '慣性矩', '平行軸定理', '組合形之慣性矩', '極慣性矩與斷面模數']),
    unit('ME9', '九', '應力與應變', ['應力與應變的認識', '虎克定律', '楊氏係數', '應力應變圖', '蒲松比', '多向應力之應變相互影響', '體積應變與體積模數']),
    unit('ME10', '十', '剪力', ['剪應力、剪應變與剛性模數', '剛性模數與彈性係數之關係', '三種彈性係數之關係']),
    unit('ME11', '十一', '梁之剪力與彎曲力矩', ['梁之剪力與彎曲力矩的認識', '剪力與彎曲力矩', '剪力圖與彎曲力矩圖', '荷重、剪力與彎曲力矩之關係', '危險斷面']),
    unit('ME12', '十二', '梁內應力', ['中立面、中立軸與彈性曲線', '梁內彎曲應力', '梁內剪應力']),
    unit('ME13', '十三', '平面應力', ['平面應力的認識', '剪應力與正交應力', '主平面、主應力', '合成應力', '莫爾圓圖解法']),
  ],
  notes: TCTE_115_NOTES,
};

export const MATERIALS_OUTLINE_115: OfficialOutline = {
  subjectSlug: 'materials',
  kind: 'exam',
  shortLabel: '115 統測大綱',
  examName: '四技二專統一入學測驗 專業科目(一)－材料與試驗',
  academicYear: 115,
  checkedAt: '2026-10-17',
  sources: [TCTE_115_SOURCE_PRO1],
  units: [
    unit('MT1', '一', '材料與試驗', [
      '材料的分類', '材料的規格', '材料性質與對應之試驗項目', '材料試驗儀器、試體、試驗製作以及試驗方法', '測定值與精度試驗',
      '試驗結果之表示方法或圖表化呈現', '試驗結果之分析處理及在品管中的運用', '材料之強度、耐久性、耐候性、吸水性、熱傳試驗之特質試驗',
    ]),
    unit('MT2', '二', '水泥', ['水泥的定義', '水泥的分類', '波特蘭水泥之種類、水泥硬化、水泥性質及試驗(含水泥砂漿抗壓測定)', '水泥之包裝及貯存']),
    unit('MT3', '三', '混凝土', [
      '混凝土的定義', '混凝土的粒料', '拌合用水',
      '混凝土性質及試驗(含細骨材篩分析試驗、混凝土氯離子試驗、混凝土抗壓強度試驗、坍度試驗、粒料含水率試驗等)', '混凝土摻料',
    ]),
    unit('MT4', '四', '石材、陶瓷製品及玻璃', [
      '石材的定義、分類、性質、土木與建築之應用、石材規格及材積計算及石材之維護',
      '陶瓷製品的定義、黏土的分類與性質、普通磚性質及試驗(含紅磚之吸水率、抗壓強度試驗等)、瓦片類、瓷磚及土木與建築之應用',
      '玻璃的定義、分類、性質、玻璃製品及土木與建築之應用',
    ]),
    unit('MT5', '五', '木材', [
      '木材的定義', '木材的分類及組織', '木材性質及試驗(含木材含水量試驗、木材比重試驗、縱橫向壓力及拉力試驗等)', '木材品質之辨識',
      '土木與建築在木構造、木模板、裝潢材及其他之應用',
    ]),
    unit('MT6', '六', '高分子材料', [
      '瀝青的定義、瀝青性質及試驗、規格及用途及在土木與建築之應用', '塑膠之認識、種類及土木與建築之應用', '塗料之認識、種類及土木與建築之應用',
    ]),
    unit('MT7', '七', '金屬材料', ['金屬材料的定義', '土木與建築之應用', '金屬防蝕法', '金屬材料性質及試驗(含鋼筋抗拉試驗)']),
    unit('MT8', '八', '未來發展趨勢', ['土木與建築材料朝向環保、節能、永續與健康等高性能綠建材之演進及發展', '土木與建築材料之創新']),
  ],
  notes: TCTE_115_NOTES,
};

export const SURVEYING_OUTLINE_115: OfficialOutline = {
  subjectSlug: 'surveying',
  kind: 'exam',
  shortLabel: '115 統測大綱',
  examName: '四技二專統一入學測驗 專業科目(二)－測量實習',
  academicYear: 115,
  checkedAt: '2026-10-17',
  sources: [TCTE_115_SOURCE_PRO2],
  units: [
    unit('SV1', '一', '測量', [
      '測量工作內容與性質', '測量作業之任務編組、工作安全與注意事項', '測量學之定義、分類、測量之外業與內業', '測量之基本單位、測量基準及座標系統',
      '測量誤差與精度', '測量作業之基本程序', '測量基本觀測量與相關測量儀器', '基本測量數學之應用，含三角幾何、三角函數、直角坐標、極坐標等',
      '基本計算工具使用，含計算器、試算表等',
    ]),
    unit('SV2', '二', '距離測量', ['距離測量之認識', '距離測量分類及量距工具', '捲尺距離測量', '電子測距', '應用距離測量測算角度']),
    unit('SV3', '三', '水準儀測量', [
      '高程測量之認識，含定義、相關名詞與分類等', '水準儀種類、配件與構造', '水準儀之操作與讀數', '水準儀測量基本原理及誤差',
      '逐差水準測量原理及應用，含閉合、附合、路線之水準測量等', '水準儀之檢點與校正', '對向水準測量', '方格水準測量', '旋轉雷射儀、雷射墨線儀原理及應用',
    ]),
    unit('SV4', '四', '角度測量', [
      '角度測量之認識', '直線定向，含磁北、真北、製圖北等方位與方向之關係與互相轉換等', '角度測量儀器之發展、構造及原理', '經緯儀之整置與讀數',
      '水平角測量原理及方法', '垂直角測量原理及計算', '經緯儀的檢點與校正', '角度觀測之誤差',
    ]),
    unit('SV5', '五', '間接距離與高程測量', ['視距測量與視角測量原理', '視距法測量', '雙高法測量', '三角高程測量']),
    unit('SV6', '六', '綜合應用測量', [
      '座標系統於測量上之應用，含自訂座標系統、測量座標系統、直角座標系統與極座標系統等', '測量之數值法計算',
      '控制點於工程上之應用，含控制點佈設、平面圖測量、點位測設等',
      '近代測繪技術發展與應用，含全站儀之應用、旋轉雷射儀與雷射墨線儀之操作、稜鏡加常數之測定等',
    ]),
  ],
  notes: TCTE_115_NOTES,
};

export const DRAFTING_OUTLINE_115: OfficialOutline = {
  subjectSlug: 'drafting',
  kind: 'exam',
  shortLabel: '115 統測大綱',
  examName: '四技二專統一入學測驗 專業科目(二)－製圖實習',
  academicYear: 115,
  checkedAt: '2026-10-17',
  sources: [TCTE_115_SOURCE_PRO2],
  units: [
    unit('DR1', '一', '製圖基本觀念', ['工程圖學之意義', '工程圖之種類', '圖紙規格及折摺法', '工程圖之比例大小', '圖框、標題欄之規格']),
    unit('DR2', '二', '製圖儀器之使用', [
      '製圖板及製圖桌椅', '鉛筆及其使用方法', '平行尺及其使用方法', '三角板及其使用方法', '圓規、分規使用方法', '曲線板、曲線規使用方法',
      '比例尺及其使用方法', '模板(家具板)及其使用方法', '儀器使用時應注意事項',
    ]),
    unit('DR3', '三', '線法與字法之應用', [
      '基本線法', '線之種類', '製圖線條之畫法', '建築圖上線條之應用', '字法的一般通則', '中文字法', '英文字母及數字', '字法書寫應注意之規格', '筆觸及軌線之應用',
    ]),
    unit('DR4', '四', '幾何畫法應用', [
      '幾何圖形之基本要素', '直線、平行線及垂直線之畫法', '畫圓及求圓心', '切線與切點之畫法', '線段、角度、圓弧等分法', '多邊形畫法', '圖形的遷移',
      '與圓弧等長之線段', '土木與建築常用曲線幾何之畫法',
    ]),
    unit('DR5', '五', '投影畫法應用', ['圖面投影之意涵', '圖面投影之分類及常用名詞', '象限之規定', '點投影', '直線投影', '平面投影', '第一象限正視圖', '第三象限正視圖']),
    unit('DR6', '六', '正投影視圖繪製', [
      '正投影原理', '正投影練習', '側投影', '線條優先順序', '正投影視圖相關位置與選擇', '正投影製圖步驟', '立體圖', '立體正投影', '斜投影', '徒手畫',
      '視圖在工程圖中，所傳達的角色',
    ]),
    unit('DR7', '七', '建築剖視圖繪製', ['剖視圖之意義及種類', '建築剖視圖之畫法', '建築剖面圖中各種慣用表示法', '剖面圖在工程圖中之角色']),
    unit('DR8', '八', '建築圖尺度標註', ['建築圖尺度標註之意涵', '尺度標註內容及原則', '其他尺度標註', '主要工業國家之尺度標註差異', '尺度標註及註解之重要性']),
    unit('DR9', '九', '輔助視圖之使用', [
      '輔助視圖之意涵', '輔助視圖之種類', '單斜面之法線視圖與旋轉視圖', '單斜面法線與旋轉視圖之實物求法', '複斜面之法線視圖與旋轉視圖',
      '複斜面之法線視圖與旋轉視圖之實物求法',
    ]),
    unit('DR10', '十', '透視圖投影', ['透視投影之意涵', '透視投影之名詞及種類', '透視原理', '透視圖法', '光源之性質', '透視陰影求法']),
    unit('DR11', '十一', '土木與建築製圖繪製', ['土木與建築圖各種相關符號之意義', '三視圖應用於平面圖', '三視圖應用於立面圖', '三視圖應用於剖面繪製應用']),
  ],
  notes: TCTE_115_NOTES,
};

export const CHINESE_OUTLINE_115: OfficialOutline = {
  subjectSlug: 'chinese',
  kind: 'exam',
  shortLabel: '115 統測大綱',
  examName: '四技二專統一入學測驗 共同科目－國文',
  academicYear: 115,
  checkedAt: '2026-10-17',
  sources: [{
    label: '技專校院入學測驗中心｜115 學年度統測考試大綱：共同科目－國文',
    url: 'https://www.tcte.edu.tw/doc/115Range_4y/115-4y-00-c-range.pdf',
    issuedAt: '114.08.12',
  }],
  units: [
    {
      code: 'CH1', no: '一', title: '文字篇章',
      items: [
        { code: 'CH1.1.1', label: '字詞：字形和字音' },
        { code: 'CH1.1.2', label: '字詞：字詞的意義和使用' },
        { code: 'CH1.1.3', label: '字詞：詞的組成方式' },
        { code: 'CH1.2.1', label: '句段：句的意義' },
        { code: 'CH1.2.2', label: '句段：常用的句型' },
        { code: 'CH1.3.1', label: '篇章：篇章的意義' },
        { code: 'CH1.3.2', label: '篇章：篇章的組織' },
        { code: 'CH1.3.3', label: '篇章：篇章的表現' },
      ],
    },
    {
      code: 'CH2', no: '二', title: '文本表述',
      items: [
        { code: 'CH2.1.1', label: '記敘文本：記敘的元素' },
        { code: 'CH2.1.2', label: '記敘文本：敘述方式' },
        { code: 'CH2.1.3', label: '記敘文本：摹寫手法' },
        { code: 'CH2.2.1', label: '抒情文本：情志的抒發與省思' },
        { code: 'CH2.2.2', label: '抒情文本：物我相應的表現手法' },
        { code: 'CH2.3.1', label: '說明文本：理路的安排' },
        { code: 'CH2.3.2', label: '說明文本：客觀資料的輔助' },
        { code: 'CH2.4.1', label: '議論文本：核心主張與論點' },
        { code: 'CH2.4.2', label: '議論文本：論點和論據的結構' },
        { code: 'CH2.5.1', label: '應用文本：應用文本的格式' },
        { code: 'CH2.5.2', label: '應用文本：應用文本的表達要領' },
      ],
    },
    {
      code: 'CH3', no: '三', title: '文化內涵',
      items: [
        { code: 'CH3.1.1', label: '物質文化：食、衣、住、行等物質文化認知' },
        { code: 'CH3.2.1', label: '社群文化：制度、風俗等社群文化認知' },
        { code: 'CH3.3.1', label: '精神文化：文類(各時代文本)、文學史、思想流派認知' },
        { code: 'CH3.3.2', label: '精神文化：人文、藝術等精神文化認知' },
      ],
    },
  ],
  notes: TCTE_115_NOTES,
};

/* ────────────────────────────────────────────────────────────────────────────
 * 108 課綱（技術型高級中等學校）部定一般科目：非土木與建築群統測考科
 * ──────────────────────────────────────────────────────────────────────────── */

const NATURE_108_SOURCE: OfficialSource = {
  label: '國家教育研究院｜十二年國民基本教育課程綱要 技術型高級中等學校 自然科學領域（107 年 11 月）',
  url: 'https://stv.naer.edu.tw/data/course_outline/pta_18539_2327449_60503.pdf',
  issuedAt: '107.11',
};

const SOCIAL_108_SOURCE: OfficialSource = {
  label: '國家教育研究院｜十二年國民基本教育課程綱要 技術型高級中等學校 社會領域（107 年 10 月）',
  url: 'https://stv.naer.edu.tw/data/course_outline/pta_18542_6134325_62006.pdf',
  issuedAt: '107.10',
};

export const PHYSICS_B_CURRICULUM_108: OfficialOutline = {
  subjectSlug: 'physics',
  kind: 'curriculum',
  shortLabel: '108 課綱 物理B',
  examName: '108 課綱 技術型高中 自然科學領域－物理 B 版（土木與建築群適用，十年級 4(+2) 學分）',
  academicYear: 108,
  checkedAt: '2026-10-17',
  sources: [NATURE_108_SOURCE],
  units: [
    { code: 'PBa', no: 'B-a', title: '能量的形式與轉換', items: [official('PBa-V.2-1', '功與功率'), official('PBa-V.2-2', '力學能（*彈力位能的計算）（*力學能守恆的計算）'), official('PBa-V.2-3', '能量間的轉換')] },
    { code: 'PBb', no: 'B-b', title: '溫度與熱量', items: [official('PBb-V.2-1', '溫度的概念與熱平衡'), official('PBb-V.2-2', '比熱與熱容量'), official('PBb-V.2-3', '物質的三態變化與潛熱'), official('PBb-V.2-4', '熱膨脹（*膨脹係數）'), official('PBb-V.2-5*', '熱力學定律')] },
    { code: 'PEa', no: 'E-a', title: '自然界的尺度與單位', items: [official('PEa-V.2-1', '介紹國際單位系統')] },
    {
      code: 'PEb', no: 'E-b', title: '力與運動',
      items: [
        official('PEb-V.2-1', '與運動有關的物理量'), official('PEb-V.2-2', '加速度與等加速度運動'), official('PEb-V.2-3', '自由落體'), official('PEb-V.2-4', '平面上的向量'),
        official('PEb-V.2-5*', '拋體運動'), official('PEb-V.2-6', '等速率圓周運動'), official('PEb-V.2-7', '力的意義及其量度'), official('PEb-V.2-8', '牛頓運動定律'),
        official('PEb-V.2-9', '摩擦力'), official('PEb-V.2-10', '動量與衝量'), official('PEb-V.2-11', '動量守恆'), official('PEb-V.2-12*', '碰撞'),
        official('PEb-V.2-13', '靜止液體的壓力及浮力'), official('PEb-V.2-14', '帕斯卡原理及其應用'), official('PEb-V.2-15', '大氣壓力'),
      ],
    },
    {
      code: 'PKa', no: 'K-a', title: '波動、光及聲音',
      items: [
        official('PKa-V.2-1', '振動與波'), official('PKa-V.2-2', '繩波的反射和透射'), official('PKa-V.2-3', '波動的特性'), official('PKa-V.2-4*', '共振與駐波'),
        official('PKa-V.2-5', '聲波（*與都卜勒效應）'), official('PKa-V.2-6', '光的反射'), official('PKa-V.2-7', '光的折射'), official('PKa-V.2-8', '光的干涉'), official('PKa-V.2-9*', '光的繞射'),
      ],
    },
    { code: 'PKb', no: 'K-b', title: '萬有引力', items: [official('PKb-V.2-1', '萬有引力')] },
    {
      code: 'PKc', no: 'K-c', title: '電磁現象',
      items: [
        official('PKc-V.2-1', '靜電現象'), official('PKc-V.2-2', '電場與電力線'), official('PKc-V.2-3*', '帶電體之受力與運動'), official('PKc-V.2-4', '電位能、電位與電位差'),
        official('PKc-V.2-5', '平行板之電場與電位差'), official('PKc-V.2-6*', '電容'), official('PKc-V.2-7', '電流、電阻與歐姆定律'), official('PKc-V.2-8*', '克希荷夫定律'),
        official('PKc-V.2-9', '電流的熱效應及電功率'), official('PKc-V.2-10', '家庭用電與安全'), official('PKc-V.2-11', '電流的磁效應'), official('PKc-V.2-12', '載流導線的磁場'),
        official('PKc-V.2-13', '載流導線在磁場中所受的力及其應用'), official('PKc-V.2-14*', '帶電質點在磁場中的運動及其應用'), official('PKc-V.2-15', '法拉第電磁感應定律與冷次定律'),
        official('PKc-V.2-16', '渦電流現象及變壓器原理'), official('PKc-V.2-17*', '發電機與交流電'), official('PKc-V.2-18', '電磁波'),
      ],
    },
    {
      code: 'PKd', no: 'K-d', title: '量子現象',
      items: [official('PKd-V.2-1', '量子論'), official('PKd-V.2-2', '光電效應'), official('PKd-V.2-3', '原子結構與光譜（*氫原子能階）'), official('PKd-V.2-4*', '物質波'), official('PKd-V.2-5', '波與粒子的二象性（*物質波的實驗說明）')],
    },
    { code: 'PKe', no: 'K-e', title: '基本交互作用', items: [official('PKe-V.2-1', '物質間的基本交互作用')] },
    { code: 'PMa', no: 'M-a', title: '科學、技術及社會的互動關係', items: [official('PMa-V.2-1', '物理學與其他基礎科學的關係')] },
    { code: 'PMb', no: 'M-b', title: '科學發展的歷史', items: [official('PMb-V.2-1', '物理學發展簡史')] },
    { code: 'PMc', no: 'M-c', title: '科學在生活中的應用', items: [official('PMc-V.2-1', '物理在生活中的應用')] },
    { code: 'PNc', no: 'N-c', title: '能源的開發與利用', items: [official('PNc-V.2-1', '核能')] },
  ],
  notes: [
    '課綱「時間分配」：物理 B 版為機械群、動力機械群、電機與電子群、化工群、土木與建築群之專業基礎課程，十年級 4(+2) 學分。',
    '標有 * 的學習內容為進階教材（總節數合計 2 學分），由教師視學生程度選授。',
    '物理不在土木與建築群統測考科內；本站以「物理 B 學習內容＋建築工程情境應用」編排，情境延伸處會標示「延伸」。',
  ],
};

export const CHEMISTRY_B_CURRICULUM_108: OfficialOutline = {
  subjectSlug: 'chemistry',
  kind: 'curriculum',
  shortLabel: '108 課綱 化學B',
  examName: '108 課綱 技術型高中 自然科學領域－化學 B 版（土木與建築群適用，2–4 學分）',
  academicYear: 108,
  checkedAt: '2026-10-17',
  sources: [NATURE_108_SOURCE],
  units: [
    {
      code: 'CAa', no: 'A-a', title: '物質組成與元素的週期性',
      items: [official('CAa-V.2-1', '原子與分子（*定比與倍比定律）'), official('CAa-V.2-2', '原子量與分子量'), official('CAa-V.2-3', '原子結構'), official('CAa-V.2-4', '原子中電子的排列'), official('CAa-V.2-5', '元素性質的規律'), official('CAa-V.2-6', '元素週期表')],
    },
    { code: 'CAb', no: 'A-b', title: '物質的形態、性質及分類', items: [official('CAb-V.2-1', '物質的三相圖'), official('CAb-V.2-2', '物質的分類')] },
    { code: 'CBa', no: 'B-a', title: '能量的形式與轉換', items: [official('CBa-V.2-1', '化學反應中的能量變化（*赫斯定律）')] },
    { code: 'CCa', no: 'C-a', title: '物質的分離與鑑定', items: [official('CCa-V.2-1', '物質的分離與鑑定')] },
    { code: 'CCb', no: 'C-b', title: '物質的構造與功能', items: [official('CCb-V.2-1', '化學式'), official('CCb-V.2-2*', '物質化學式的鑑定'), official('CCb-V.2-3', '物質的結構'), official('CCb-V.2-4', '實驗：分子模型介紹')] },
    { code: 'CEc', no: 'E-c', title: '氣體', items: [official('CEc-V.2-1', '氣體的性質'), official('CEc-V.2-2', '氣體的定律（*絕對溫度、開口及閉口氣體壓力計的測量）'), official('CEc-V.2-3*', '理想氣體'), official('CEc-V.2-4*', '分壓')] },
    {
      code: 'CFa', no: 'F-a', title: '組成地球的物質',
      items: [official('CFa-V.2-1', '自然界中的物質循環'), official('CFa-V.2-2', '水的性質及影響'), official('CFa-V.2-3', '水質的淨化、純化與軟化'), official('CFa-V.2-4', '海洋資源'), official('CFa-V.2-5', '空氣中所含的物質（*惰性氣體氪、氙、氡）'), official('CFa-V.2-6', '土壤的形成、成分及應用')],
    },
    { code: 'CJa', no: 'J-a', title: '物質反應規律', items: [official('CJa-V.2-1', '化學反應式'), official('CJa-V.2-2', '化學計量（*限量試劑的概念）')] },
    { code: 'CJb', no: 'J-b', title: '水溶液中的變化', items: [official('CJb-V.2-1', '水溶液')] },
    { code: 'CJc', no: 'J-c', title: '氧化與還原反應', items: [official('CJc-V.2-1', '氧化與還原反應')] },
    { code: 'CJd', no: 'J-d', title: '酸鹼反應', items: [official('CJd-V.2-1', '酸鹼反應')] },
    {
      code: 'CJe', no: 'J-e', title: '化學反應速率與平衡',
      items: [
        official('CJe-V.2-1', '反應速率的定義'), official('CJe-V.2-2*', '反應速率定律式、反應速率常數、零級、一級、二級反應'), official('CJe-V.2-3*', '碰撞學說'), official('CJe-V.2-4', '影響反應速率的因素'),
        official('CJe-V.2-5', '可逆反應及動態平衡'), official('CJe-V.2-6*', '平衡常數表示式、平衡常數(Kc、Kp)的定義'), official('CJe-V.2-7', '影響平衡的因素'), official('CJe-V.2-8*', '勒沙特列原理'), official('CJe-V.2-9*', '溶解平衡'),
      ],
    },
    {
      code: 'CJf', no: 'J-f', title: '有機化合物的製備及反應（進階）',
      items: [
        official('CJf-V.2-1*', '烷、烯、炔、環烷與其結構及特性'), official('CJf-V.2-2*', '異構物'), official('CJf-V.2-3*', '有機化合物的簡易命名'), official('CJf-V.2-4*', '芳香族化合物'),
        official('CJf-V.2-5*', '常見有機化合物官能基的基本性質反應與應用'), official('CJf-V.2-6*', '常見有機化合物的反應製備'), official('CJf-V.2-7*', '實驗：一般有機化合物的特性'),
      ],
    },
    { code: 'CMa', no: 'M-a', title: '科學、技術及社會的互動關係（進階）', items: [official('CMa-V.2-1*', '科學、技術及社會的互動關係')] },
    { code: 'CMb', no: 'M-b', title: '科學發展的歷史（進階）', items: [official('CMb-V.2-1*', '化學發展簡史')] },
    {
      code: 'CMc', no: 'M-c', title: '科學在生活中的應用',
      items: [
        official('CMc-V.2-1', '食品與化學（*茶、咖啡、維生素、礦物質）'), official('CMc-V.2-2', '衣料與化學'), official('CMc-V.2-3', '肥皂與清潔劑'), official('CMc-V.2-4', '材料與化學：塑膠'),
        official('CMc-V.2-5', '實驗：鼻涕蟲（高分子聚合物－硼砂、蒸餾水與膠水共聚的高分子反應）'), official('CMc-V.2-6', '陶瓷磚瓦和玻璃'),
        official('CMc-V.2-7', '奈米材料、先進材料（*金屬或陶瓷複合材料、光阻劑、電子封裝材料、色料）'), official('CMc-V.2-8', '藥物與化學'),
      ],
    },
    { code: 'CMd', no: 'M-d', title: '天然災害與防治（進階）', items: [official('CMd-V.2-1*', '天然災害與防治')] },
    { code: 'CMe', no: 'M-e', title: '環境汙染與防治', items: [official('CMe-V.2-1', '水汙染與防治'), official('CMe-V.2-2', '大氣汙染與防治'), official('CMe-V.2-3', '土壤汙染與防治')] },
    { code: 'CNa', no: 'N-a', title: '永續發展與資源的利用（進階）', items: [official('CNa-V.2-1*', '綠色化學（化工）與環境及永續發展（含資源的保育、利用與再利用）')] },
    { code: 'CNb', no: 'N-b', title: '氣候變遷之影響與調適（進階）', items: [official('CNb-V.2-1*', '氣候變遷之影響與調適')] },
    {
      code: 'CNc', no: 'N-c', title: '能源的開發與利用',
      items: [
        official('CNc-V.2-1', '化石燃料：煤、石油、天然氣、頁岩油'), official('CNc-V.2-2', '石油分餾及其主要產物'), official('CNc-V.2-3', '烴的燃燒與汽油辛烷值'), official('CNc-V.2-4', '化學電池原理'),
        official('CNc-V.2-5', '常見的電池（*乾電池、鹼性電池）'), official('CNc-V.2-6', '實驗：化學電池'), official('CNc-V.2-7', '替代能源'), official('CNc-V.2-8', '簡介臺灣的再生能源及附近海域能源的蘊藏與開發'),
      ],
    },
  ],
  notes: [
    '課綱「時間分配」：化學 B 版適用機械群、動力機械群、電機與電子群、化工群、土木與建築群、農業群、食品群、水產群、海事群，2–4 學分。',
    '標有 * 的學習內容（含主題 J-f 有機化合物、M-a、M-b、M-d、N-a、N-b）為進階教材，由教師視學生程度選授。',
    '化學不在土木與建築群統測考科內；本站以「化學 B 學習內容＋營建材料情境應用」編排，情境延伸處會標示「延伸」。',
  ],
};

export const HISTORY_CURRICULUM_108: OfficialOutline = {
  subjectSlug: 'history',
  kind: 'curriculum',
  shortLabel: '108 課綱 歷史',
  examName: '108 課綱 技術型高中 社會領域－歷史',
  academicYear: 108,
  checkedAt: '2026-10-17',
  sources: [SOCIAL_108_SOURCE],
  units: [
    { code: '歷A', no: 'A', title: '如何認識過去？（必選）', items: [official('歷A-Ⅴ-1', '誰的歷史？誰留下的史料？誰寫的歷史？')] },
    {
      code: '歷B', no: 'B', title: '飲食文化的世界',
      items: [
        official('歷Ba-Ⅴ-1', '飲食、作物、環境的互動與影響：人類飲食發展的概況'), official('歷Ba-Ⅴ-2', '飲食、作物、環境的互動與影響：環境、文化與食物'),
        official('歷Ba-Ⅴ-3', '飲食、作物、環境的互動與影響：飲食的交流與作物的傳播'), official('歷Bb-Ⅴ-1', '臺灣的飲食發展與當代全球的飲食趨勢：臺灣飲食的發展與變化'),
        official('歷Bb-Ⅴ-2', '臺灣的飲食發展與當代全球的飲食趨勢：當代的飲食趨勢'),
      ],
    },
    {
      code: '歷C', no: 'C', title: '服飾的歷史',
      items: [official('歷Ca-Ⅴ-1', '服飾的由來與功用：服飾的發展'), official('歷Ca-Ⅴ-2', '服飾的由來與功用：服飾的實質與象徵意義'), official('歷Cb-Ⅴ-1', '臺灣服飾的發展與流行時尚：臺灣多元的服飾發展'), official('歷Cb-Ⅴ-2', '臺灣服飾的發展與流行時尚：流行與復古')],
    },
    {
      code: '歷D', no: 'D', title: '建築的歷史',
      items: [official('歷Da-Ⅴ-1', '建築、環境與文化意涵：影響建築發展的自然環境與技術'), official('歷Da-Ⅴ-2', '建築、環境與文化意涵：建築的功能與反映的時代文化意涵'), official('歷Db-Ⅴ-1', '臺灣建築的發展：臺灣建築的多元面貌')],
    },
    {
      code: '歷E', no: 'E', title: '交通的歷史',
      items: [official('歷Ea-Ⅴ-1', '交通路線與運輸工具的變遷：交通發展與運輸工具的起源'), official('歷Ea-Ⅴ-2', '交通路線與運輸工具的變遷：交通改良與革新'), official('歷Eb-Ⅴ-1', '臺灣的交通發展：臺灣交通的變革與影響')],
    },
    {
      code: '歷F', no: 'F', title: '科技的歷史',
      items: [official('歷Fa-Ⅴ-1', '傳統工藝與現代科技：工藝與科技的起源'), official('歷Fa-Ⅴ-2', '傳統工藝與現代科技：科技的改變與創新'), official('歷Fb-Ⅴ-1', '臺灣科技產業與全球化的發展：臺灣現代科技產業的發展'), official('歷Fb-Ⅴ-2', '臺灣科技產業與全球化的發展：臺灣科技與社會生活')],
    },
  ],
  notes: [
    '課綱說明：主題 A「如何認識過去？」為必選；主題 B–F 由教師審酌群科屬性、學生需求與跨科協同彈性選擇項目。',
    '本站為土木與建築群編排：以必選主題 A 與主題 D「建築的歷史」為主軸，輔以 E「交通的歷史」、F「科技的歷史」；B 飲食、C 服飾不列為本群主修項目。',
  ],
};

export const GEOGRAPHY_CURRICULUM_108: OfficialOutline = {
  subjectSlug: 'geography',
  kind: 'curriculum',
  shortLabel: '108 課綱 地理',
  examName: '108 課綱 技術型高中 社會領域－地理',
  academicYear: 108,
  checkedAt: '2026-10-17',
  sources: [SOCIAL_108_SOURCE],
  units: [
    {
      code: '地A', no: 'A', title: '地理技能',
      items: [
        official('地Aa-Ⅴ-1', '地圖：地圖的本質、要素及其用途'), official('地Aa-Ⅴ-2', '地圖：古地圖與現代地圖'), official('地Aa-Ⅴ-3', '地圖：日常生活常用的地圖'),
        official('地Aa-Ⅴ-4', '地圖：問題探究－繪製日常生活中的主題地圖，並討論該主題空間分布特性與成因'),
        official('地Ab-Ⅴ-1', '地理資訊：地理資訊的查詢與建置'), official('地Ab-Ⅴ-2', '地理資訊：地理資訊的分析與解讀'), official('地Ab-Ⅴ-3', '地理資訊：問題探究－練習地理資訊系統的生活運用'),
        official('地Ac-Ⅴ-1', '田野實察：田野在那裡？'), official('地Ac-Ⅴ-2', '田野實察：實察什麼？'), official('地Ac-Ⅴ-3', '田野實察：從何察起？'),
        official('地Ac-Ⅴ-4', '田野實察：問題探究－以校園或社區為田野，進行實察並觀察問題進而提出可能改善建議'),
      ],
    },
    {
      code: '地B', no: 'B', title: '地理系統',
      items: [
        official('地Ba-Ⅴ-1', '環境系統：大氣圈、岩石圈（表層）、水圈及生物圈的有機關聯'), official('地Ba-Ⅴ-2', '環境系統：環境負載力與環境問題'),
        official('地Ba-Ⅴ-3', '環境系統：問題探究－利用古今地圖或地理資訊平台，探索學校所在地的環境系統與日常生活的互動關聯'),
        official('地Bb-Ⅴ-1', '生態景觀：自然與人文生態景觀'), official('地Bb-Ⅴ-2', '生態景觀：生態景觀的經營與管理（案例）'), official('地Bb-Ⅴ-3', '生態景觀：問題探究－規劃並完成一個符合「生態體驗」的活動'),
        official('地Bc-Ⅴ-1', '產業活動：產業系統與類別'), official('地Bc-Ⅴ-2', '產業活動：產業的跨國產銷結構'), official('地Bc-Ⅴ-3', '產業活動：全球布局與在地經營'),
        official('地Bc-Ⅴ-4', '產業活動：問題探究－訪問學校附近某項產業的經營者，認識該產業的發展機會與挑戰'),
        official('地Bd-Ⅴ-1', '文化資產：有形與無形的文化資產'), official('地Bd-Ⅴ-2', '文化資產：文化資產的保存與活化'), official('地Bd-Ⅴ-3', '文化資產：問題探究－踏查學校所在地的文化資產，討論活化利用的行動方案'),
        official('地Be-Ⅴ-1', '生活世界：食、衣、住、行等日常生活體系的變遷'), official('地Be-Ⅴ-2', '生活世界：藝術、文學、戲劇、歌謠與遊戲等的地理想像'),
        official('地Be-Ⅴ-3', '生活世界：問題探究－配合在地與各群科特色，共同設計一個具有地理想像的相關活動'),
      ],
    },
    {
      code: '地C', no: 'C', title: '地理視野',
      items: [
        official('地Ca-Ⅴ-1', '國際探索：世界文化遺產'), official('地Ca-Ⅴ-2', '國際探索：世界強權的競合與區域發展'), official('地Ca-Ⅴ-3', '國際探索：世界都市的興起'),
        official('地Ca-Ⅴ-4', '國際探索：問題探究－探討大航海時代以來，跨國的人口移動與物產流動現象'),
        official('地Cb-Ⅴ-1', '全球化與在地化：交通革新與全球化'), official('地Cb-Ⅴ-2', '全球化與在地化：全球在地化與在地全球化'),
        official('地Cb-Ⅴ-3', '全球化與在地化：問題探究－運用媒體呈現生活中的全球在地化與在地全球化現象，並說明其蘊含的意義'),
      ],
    },
  ],
  notes: ['課綱說明：教師可參酌總綱議題，審酌群科屬性、學生學習需求與生涯發展，彈性選擇各項目。'],
};

export const CIVICS_CURRICULUM_108: OfficialOutline = {
  subjectSlug: 'civics',
  kind: 'curriculum',
  shortLabel: '108 課綱 公民',
  examName: '108 課綱 技術型高中 社會領域－公民與社會',
  academicYear: 108,
  checkedAt: '2026-10-17',
  sources: [SOCIAL_108_SOURCE],
  units: [
    {
      code: '公A', no: 'A', title: '公民身分認同及社群',
      items: [official('公Aa-Ⅴ-1', '公民身分：公民身分如何演變？我國的公民權利如何發展與落實？'), official('公Ab-Ⅴ-1', '國家與認同：國家主權和人民的日常生活有什麼關係？國家和多元身分認同的關係為何？')],
    },
    {
      code: '公B', no: 'B', title: '社會生活的組織及制度',
      items: [
        official('公Ba-Ⅴ-1', '親密關係與性別結構：建立親密關係與維持個體自主的界線為何？'), official('公Ba-Ⅴ-2', '親密關係與性別結構：親密關係的互動如何受性別刻板印象與性別分工等結構因素影響？'),
        official('公Bb-Ⅴ-1', '憲法保障與行政救濟：憲法作為人民權利的保障書，與公權力的規範有何關聯？'), official('公Bb-Ⅴ-2', '憲法保障與行政救濟：如何透過行政法落實憲法對人民基本權利的保障？'),
        official('公Bb-Ⅴ-3', '憲法保障與行政救濟：行政公權力違法侵害人民權益時，人民如何尋求行政救濟？'),
        official('公Bc-Ⅴ-1', '民事權利的保障與限制：生產者或雇主為何不能享有完全的締約自由？如何判斷限制契約自由的合理性？'),
        official('公Bc-Ⅴ-2', '民事權利的保障與限制：為何需要保障智慧財產權？如何衡平智慧財產權與社會公益？'), official('公Bc-Ⅴ-3', '民事權利的保障與限制：現行民法繼承制度如何保障人民的財產權？'),
        official('公Bd-Ⅴ-1', '犯罪與刑罰：犯罪的一般成立要件為何？國家為何要以刑罰的方式處罰人民？'),
        official('公Bd-Ⅴ-2', '犯罪與刑罰：為什麼程序正義是重要的？國家於犯罪的追訴及處罰過程中，如何確保程序正義的實現？'),
        official('公Bd-Ⅴ-3', '犯罪與刑罰：為什麼現代資訊生活需要規範？刑法中有哪些相關規定？'), official('公Bd-Ⅴ-4', '犯罪與刑罰：為何少年的刑事司法程序與成年人不同？'),
        official('公Be-Ⅴ-1', '資源有限與分配：個人、廠商和政府在資源有限的前提下，如何進行資源的分配？'), official('公Bf-Ⅴ-1', '誘因：政府政策如何影響誘因，進而改變人民行為？'),
        official('公Bg-Ⅴ-1', '交易與專業分工：專業分工的影響'), official('公Bg-Ⅴ-2', '交易與專業分工：決定一國進出口某項商品的主要因素'),
      ],
    },
    {
      code: '公C', no: 'C', title: '社會的運作、治理及參與實踐',
      items: [
        official('公Ca-Ⅴ-1', '公共意見：媒體與社群網路的所有權或產製過程，如何影響公共意見的形成？'),
        official('公Ca-Ⅴ-2', '公共意見：公共意見形成過程中，可能存在哪些媒體近用與媒體再現的不平等？'),
        official('公Cb-Ⅴ-1', '政治參與：我國公民如何透過選舉參與中央及地方政治？'), official('公Cb-Ⅴ-2', '政治參與：除了選舉之外，我國還有哪些重要的政治參與形式及管道？'),
        official('公Cc-Ⅴ-1', '勞動參與：個人進入職業生活的準備為何？國家如何透過法律與政策保障平等的勞動市場參與？'),
        official('公Cc-Ⅴ-2', '勞動參與：發展自主的勞動關係何以是重要的？如何發展自主的勞動關係和落實產業民主？'),
        official('公Cd-Ⅴ-1', '薪資與勞動市場：勞動市場的薪資如何決定？'), official('公Cd-Ⅴ-2', '薪資與勞動市場：工廠外移及國際移工增加如何影響本地勞動市場的薪資與就業情況？'),
        official('公Cd-Ⅴ-3', '薪資與勞動市場：生產自動化及服務業數位化如何影響本地勞動市場薪資與就業情況？'), official('公Cd-Ⅴ-4', '薪資與勞動市場：政府訂定基本工資對勞動市場可能造成什麼影響？'),
      ],
    },
    {
      code: '公D', no: 'D', title: '民主社會的理想及現實',
      items: [
        official('公Da-Ⅴ-1', '社會安全：國家為促進社會安全，為何需要社會救助、社會福利和社會保險等多種制度的規劃？'),
        official('公Db-Ⅴ-1', '多元文化：我國目前有什麼具體政策，促進不同文化之間的平等？'),
        official('公Dc-Ⅴ-1', '全球關連：面對全球化，為何需珍視我國的本土文化？我國本土文化產業如何調適與創新？'),
        official('公Dc-Ⅴ-2', '全球關連：我國在全球競爭與合作關係中的地位與處境為何？臺海兩岸關係如何影響我國的國際地位與處境？'),
        official('公Dd-Ⅴ-1', '科技發展：科技發展對社會價值與制度造成哪些影響？又衍生出哪些倫理或法律問題？'),
        official('公De-Ⅴ-1', '人權保障：當代人權保障面臨哪些重大的爭議？'), official('公Df-Ⅴ-1', '公平正義：為什麼社會的不同群體，對於「公平正義」的理解與追求會有衝突？'),
        official('公Dg-Ⅴ-1', '貿易自由化：貿易的管制與開放對哪些人有利？對哪些人不利？'), official('公Dg-Ⅴ-2', '貿易自由化：世界貿易組織與重要國際經貿組織在國際間所扮演的角色為何？'),
      ],
    },
  ],
  notes: ['課綱說明：教學應涵蓋四大主題，但可審酌學生需求、群科屬性與綜合活動領域開課情形，彈性選擇項目與條目並調整節數。'],
};

export const EXTENSIONS_GROUP_OUTLINE_108: OfficialOutline = {
  subjectSlug: 'extensions',
  kind: 'group',
  shortLabel: '群科課綱 延伸',
  examName: '108 課綱 土木與建築群群科課程綱要－專業與實習科目對照（科目層級）',
  academicYear: 108,
  checkedAt: '2026-10-17',
  sources: [{
    label: '國家教育研究院｜十二年國民基本教育課程綱要 技術型高級中等學校群科課程綱要－土木與建築群（107 年 12 月）',
    url: 'https://stv.naer.edu.tw/data/course_outline/710840385.odt',
    issuedAt: '107.12',
  }],
  units: [
    unit('GR1', '一', '部定專業科目（延伸主題對應）', ['土木建築工程與技術概論', '構造與施工法']),
    unit('GR2', '二', '實習科目（延伸主題對應）', ['設計與技術實習', '電腦輔助製圖實習', '建築製圖實習', '施工圖實習']),
    unit('GR3', '三', '校訂與生涯延伸', ['作品集與設計論述（校訂延伸）', '升學與證照生涯規劃（校訂延伸）']),
  ],
  notes: [
    '延伸主題對照到群科課綱的「科目層級」，細項以各校課程計畫為準；這些主題不屬於統測專業科目考試大綱。',
    '同屬群科課綱的基礎工程力學、材料與試驗、測量實習、製圖實習，分別在各自的科目頁對照 115 統測考試大綱。',
  ],
};

export const OFFICIAL_OUTLINES: Record<string, OfficialOutline> = {
  mechanics: MECHANICS_OUTLINE_115,
  materials: MATERIALS_OUTLINE_115,
  surveying: SURVEYING_OUTLINE_115,
  drafting: DRAFTING_OUTLINE_115,
  chinese: CHINESE_OUTLINE_115,
  english: ENGLISH_OUTLINE_115,
  'math-c': MATH_C_OUTLINE_115,
  physics: PHYSICS_B_CURRICULUM_108,
  chemistry: CHEMISTRY_B_CURRICULUM_108,
  history: HISTORY_CURRICULUM_108,
  geography: GEOGRAPHY_CURRICULUM_108,
  civics: CIVICS_CURRICULUM_108,
  extensions: EXTENSIONS_GROUP_OUTLINE_108,
};

/** 依科目與代碼查條目 */
export function findOutlineItemBySubject(subjectSlug: string, code: string): { outline: OfficialOutline; unit: OutlineUnit; item: OutlineItem } | null {
  const outline = OFFICIAL_OUTLINES[subjectSlug];
  if (!outline) return null;
  const hit = findOutlineItem(outline, code);
  return hit ? { outline, ...hit } : null;
}
