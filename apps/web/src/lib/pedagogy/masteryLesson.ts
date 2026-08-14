import type { TopicContent } from '@/data/types';
import type { TopicRealLifeGuide } from '@/lib/pedagogy/realLifeHelpers';

export interface MasteryLesson {
  plainStart: string;
  curriculumAnchor: string;
  conceptBridge: string[];
  applications: Array<{ place: string; title: string; explanation: string; action: string }>;
  masteryEvidence: string[];
}

interface SubjectProfile {
  curriculum: string;
  lens: string;
  school: string;
  field: string;
  decision: string;
}

const profiles: Record<string, SubjectProfile> = {
  mechanics: { curriculum: '基礎工程力學：力系、平衡、摩擦、形心、梁、應力與應變', lens: '先找受力物體、方向與作用位置，再用平衡關係說明結果', school: '桌椅、門把、書本與翹翹板的受力', field: '樑柱、斜撐、吊索與支承的安全判斷', decision: '畫自由體圖 → 選方向 → 列平衡式 → 用單位與方向驗算' },
  materials: { curriculum: '材料與試驗：材料組成、性質、試驗程序、耐久性與工程選用', lens: '追問材料由什麼組成、怎麼製成、如何試驗，以及環境改變後會怎樣', school: '紙、木材、金屬、砂石與水的比較', field: '混凝土、鋼材、木材及裝修材料的選用與品管', decision: '辨認材料 → 讀試驗條件 → 比較性質 → 對照用途與限制' },
  surveying: { curriculum: '測量實習：距離、高程、角度、坐標、誤差、儀器操作與放樣', lens: '先畫測站與目標，再分清讀值、計算值和用來檢查的閉合條件', school: '量教室長度、操場高低差與方位', field: '基地鑑界、道路高程、建築放樣與施工檢測', decision: '建圖 → 記錄觀測量 → 選測算式 → 閉合與精度檢核' },
  drafting: { curriculum: '製圖實習：製圖規範、幾何作圖、正投影、建築圖與電腦繪圖', lens: '把同一個物體在平面、立面、剖面與透視中的線索一一對回', school: '觀察鉛筆盒從上面、正面與側面看到的形狀', field: '施工圖溝通、尺寸查核、材料圖例與圖面版本管理', decision: '讀圖名比例 → 找投影或剖切方向 → 對齊視圖 → 查線型尺寸' },
  'math-c': { curriculum: '數學 C：代數、三角、向量、解析幾何、數列、機率與微積分基礎', lens: '把文字、圖形、表格與算式視為同一個關係的不同說法', school: '比例尺、影子、坡度、平均與規律', field: '坡道、屋頂、坐標、工程估算與受力計算', decision: '定義變數 → 畫圖或列表 → 建立關係 → 代回範圍驗算' },
  physics: { curriculum: '自然科學物理：力與運動、熱、光、聲、電及能量', lens: '先決定研究的物體與前後狀態，再找方向、能量或守恆關係', school: '球的運動、聲音回音、陽光與冷熱變化', field: '結構振動、建築隔熱、採光與室內聲學', decision: '定系統 → 找物理量 → 選定律 → 用單位與極端情況檢核' },
  chemistry: { curriculum: '自然科學化學：物質組成、反應、溶液、酸鹼與氧化還原', lens: '同時連結看得到的現象、看不到的粒子與化學符號', school: '溶解、鐵鏽、清潔劑酸鹼與加熱變化', field: '水泥水化、鋼筋腐蝕、塗料與室內材料安全', decision: '辨物質 → 寫條件與粒子變化 → 查守恆 → 判斷工程影響' },
  chinese: { curriculum: '國語文：字詞、語法、文學閱讀、篇章理解、應用文與表達', lens: '所有判斷都回到原句與上下文，不用印象猜作者意思', school: '廣告、故事、說明書與校園公告', field: '設計說明、工程報告、簡報提案與空間敘事', decision: '讀題幹 → 定位證據 → 串句段篇 → 排除超出原文的推論' },
  english: { curriculum: '英文：字彙、句型、對話、克漏字、閱讀與書面表達', lens: '先抓句子骨架與連接詞，再用前後文確認單字和語氣', school: '生活標示、簡短對話、操作介面與故事', field: '國際圖說、BIM 軟體、材料規格與工程溝通', decision: '找主詞動詞 → 看連接關係 → 代回語境 → 檢查搭配與時態' },
  history: { curriculum: '歷史：時序、史料、制度、文化交流與因果變遷', lens: '分清當時發生的事、後人的解釋，以及史料能證明到哪裡', school: '家庭老照片、地方老街與校史', field: '聚落演變、建築保存、城市發展與文化資產', decision: '定時空 → 辨史料 → 排順序與因果 → 防止時代錯置' },
  geography: { curriculum: '地理：地圖、自然環境、人口產業、區域與人地互動', lens: '先讀圖名、圖例、比例尺與年份，再解釋分布而不是只描述顏色', school: '上學路線、天氣、社區土地使用與人口', field: '基地分析、都市規劃、防災與環境評估', decision: '讀圖資 → 找分布 → 提出人地原因 → 換尺度與反例檢查' },
  civics: { curriculum: '公民與社會：權利義務、法律程序、經濟選擇與公共參與', lens: '先分清誰有權、誰負責、適用什麼程序，以及是否有例外', school: '班規、消費、公共設施與校園自治', field: '建築法規、職業安全、無障礙與公共空間決策', decision: '找主體 → 定規範與程序 → 比較權利成本 → 查條件與例外' },
  extensions: { curriculum: '建築專題與實務：需求分析、設計、施工、數位工具與作品表達', lens: '從使用者和場地問題出發，用圖面或模型證明方案真的可用', school: '整理教室、製作模型與改善校園角落', field: '設計提案、CAD／BIM、施工計畫與作品集', decision: '定需求 → 列限制 → 產生方案 → 以安全、可施工與使用回饋驗證' },
};

const compact = (value: string, max = 180) => {
  const text = value.replace(/\s+/g, ' ').trim();
  return text.length > max ? `${text.slice(0, max)}…` : text;
};

export function getMasteryLesson(subjectSlug: string, topic: TopicContent, guide: TopicRealLifeGuide): MasteryLesson {
  const profile = profiles[subjectSlug] ?? profiles.extensions;
  const concepts = topic.concepts.slice(0, 3);
  const first = concepts[0]?.heading ?? topic.title;
  const second = concepts[1]?.heading ?? first;
  const third = concepts[2]?.heading ?? second;

  return {
    plainStart: `先把「${topic.title}」想成一個可以觀察、比較和解決的真實問題。${guide.everydayAnalogy} 暫時不用背名詞；先說出「改變了什麼」和「結果跟著怎麼變」，你就已經抓到核心。`,
    curriculumAnchor: `${profile.curriculum}。本章對應的正式學習任務是：${compact(topic.desc, 150)}；最後要能依「${profile.decision}」獨立完成判斷。`,
    conceptBridge: [
      `看見：${guide.handsOnObservation}`,
      `說清楚：用自己的話解釋「${first}」，並指出它描述的對象、條件和結果。`,
      `連起來：比較「${first}」與「${second}」，再說明「${third}」在什麼條件下會改變結論。`,
      `正式化：回到課本術語、圖表或公式，以「${profile.lens}」整理證據。`,
    ],
    applications: [
      { place: '身邊', title: '在家或學校先看見', explanation: profile.school, action: `找一個與「${topic.title}」有關的物件或現象，畫下來並標出至少兩個可觀察條件。` },
      { place: '現場', title: '放進建築工程', explanation: profile.field, action: `扮演現場人員：如果忽略「${first}」，安全、品質、成本或溝通會出現什麼後果？` },
      { place: '決策', title: '改變條件再判斷', explanation: guide.realLifeImportance, action: `只改變一個條件，依「${profile.decision}」重新判斷，並說明新舊答案為何不同。` },
    ],
    masteryEvidence: [
      `不看課文，能用一個身邊例子解釋「${topic.title}」。`,
      `能畫圖、列表或寫關係式，連結「${first}、${second}、${third}」。`,
      `能完成一題示範題，說出每一步「為什麼」，而不只抄計算。`,
      `能判斷一個錯誤答案錯在條件、觀念、程序、單位或過度推論。`,
      `遇到歷屆題的新包裝，仍能依「${profile.decision}」作答並驗證。`,
    ],
  };
}

export interface ExamWalkthroughInput {
  excerpt: string;
  answer: string;
  options?: Partial<Record<'A' | 'B' | 'C' | 'D', string>>;
}

export function buildExamWalkthrough(question: ExamWalkthroughInput, topic: TopicContent) {
  const answerChoices: string[] = question.answer.match(/[A-D]/g) ?? [];
  const correctText = answerChoices.map((choice) => `${choice}「${question.options?.[choice as 'A' | 'B' | 'C' | 'D'] ?? '以官方題本圖文為準'}」`).join('、');
  const anchor = topic.concepts[0];
  const rule = anchor ? `${anchor.heading}：${compact(anchor.body, 170)}` : compact(topic.desc, 170);
  const scopeWords = /不|非|錯誤|不可/.test(question.excerpt) ? '題幹含否定語，最後必須再確認你選的是「不符合」的項目。' : '題幹是正向提問，要找完整符合條件的項目。';

  return {
    restate: `這題其實在問：你能不能從題幹線索辨認「${topic.title}」的適用規則。${scopeWords}`,
    clues: `先圈出名詞、數值、單位、圖示和「一定、可能、最大、最小、僅」等範圍詞；再把它們對回本章第一個核心原理。`,
    rule,
    correct: `官方答案是 ${question.answer}，也就是 ${correctText}。它必須同時符合題幹條件與上述核心原理；不是因為字看起來熟悉，而是條件、方向或因果關係能逐項對上。`,
    distractors: (['A', 'B', 'C', 'D'] as const)
      .filter((choice) => !answerChoices.includes(choice) && question.options?.[choice])
      .map((choice) => `${choice}「${compact(question.options?.[choice] ?? '', 80)}」：不是官方答案。回查它是否偷換名詞、顛倒方向／因果、漏掉適用條件、誤用單位，或只說對一部分。`),
    transfer: `把題目的數值、物件或情境換掉，但保留同一核心關係，再說一次判斷步驟；能做到，才代表不是背答案。`,
  };
}
