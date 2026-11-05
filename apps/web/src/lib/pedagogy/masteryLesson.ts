import type { TopicContent } from '@/data/types';
import type { TopicRealLifeGuide } from '@/lib/pedagogy/realLifeHelpers';
import type { ExamTeachingCase } from '@/data/examTeaching/types';

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
  teaching?: ExamTeachingCase;
}

export function buildExamWalkthrough(
  question: ExamWalkthroughInput,
  topic?: Partial<TopicContent> | { title?: string; desc?: string; concepts?: Array<{ heading: string; body: string }> }
) {
  if (question.teaching) {
    const g = question.teaching;
    const letters = ['A','B','C','D'] as const;
    return {
      reviewed: true,
      solutionSteps: g.steps,
      restate: g.steps[0],
      clues: `本題型：${g.kind}。先回到本章「歷屆題接回知識」的必要知識段落。`,
      rule: g.knowledge.map(([title,body]) => `${title}：${body}`).join('\n'),
      correct: `${g.steps.join('\n')}\n官方答案 ${question.answer}；本站依題示條件編寫推導。`,
      distractors: letters.filter(l=>!question.answer.includes(l)).map(l=>`${l}「${question.options?.[l]??''}」：${g.reasons[letters.indexOf(l)]}`),
      transfer: g.transfer.prompt,
    };
  }
  const answerChoices: string[] = question.answer.match(/[A-D]/g) ?? [];
  const correctText = answerChoices
    .map((choice) => `${choice}「${question.options?.[choice as 'A' | 'B' | 'C' | 'D'] ?? '以官方題本圖文為準'}」`)
    .join('、');

  const combinedText = `${question.excerpt} ${Object.values(question.options ?? {}).join(' ')}`;
  const concepts = topic?.concepts ?? [];
  // Pick the concept whose heading/body shares the most 2-character tokens with the question
  let bestConcept = concepts[0];
  let bestScore = -1;
  for (const c of concepts) {
    let score = 0;
    const target = `${c.heading} ${c.body}`;
    for (let i = 0; i < Math.min(question.excerpt.length - 1, 60); i++) {
      const token = question.excerpt.slice(i, i + 2).trim();
      if (token.length === 2 && !/[，。、？（）\s]/.test(token) && target.includes(token)) {
        score += 1;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestConcept = c;
    }
  }

  const bestFormula = (bestConcept as { formula?: string } | undefined)?.formula;
  const rule = bestConcept
    ? `${bestConcept.heading}：${compact(bestConcept.body.replace(/<[^>]*>/g, ''), 200)}${bestFormula ? `\n核心公式／關係式：${bestFormula}` : ''}`
    : topic?.desc
    ? compact(topic.desc, 170)
    : '依據 108 課綱與統測命題標準，解題首重核心公式量綱、題幹邊界條件與空間/物理因果關係。';

  const isNegative = /不|非|錯誤|不可|何者有誤|並非|NOT/i.test(question.excerpt);
  const isCalc = /求|計算|多少|幾|大小|比值|面積|高程|距離|力矩|應力|強度|座標|=|\d+\s*(cm|mm|m|kN|N|MPa|kgf|°|%)/i.test(combinedText);
  const extractedNums = [...new Set(question.excerpt.match(/\d+(?:\.\d+)?\s*(?:cm²|mm²|m²|cm|mm|m|kN|N|MPa|GPa|kgf|°|%|g|kg|小時|分鐘|秒)?/g) ?? [])]
    .map((s) => s.trim())
    .filter((s) => s.length > 0)
    .slice(0, 5);

  const scopeWords = isNegative
    ? '題幹含否定語（反向提問），最後務必核對你選出的是「不符合」或「錯誤」的項目。'
    : '題幹為正向提問，需找出所有條件完整吻合之最佳解答。';

  const title = topic?.title ?? '本科核心主題';
  const conceptHeading = bestConcept?.heading ?? title;

  const autoSteps: string[] = [
    `讀題提示 1｜先確認「${compact(question.excerpt, 76)}」要回答什麼，再檢查本章「${conceptHeading}」是否適用。${scopeWords}`,
    isCalc
      ? `步驟 2｜提取已知條件與單位：圈出題幹給定數據${extractedNums.length ? `（${extractedNums.join('、')}）` : ''}與支承/觀測條件，確認單位一致（例如 m 與 cm、kN 與 N、MPa 與 N/mm²）。`
      : `步驟 2｜鎖定規範與定義關鍵字：圈出題幹中的核心專有名詞、試驗標準或語境邏輯詞，對照課綱「${conceptHeading}」之標準定義。`,
    `讀題提示 3｜相關觀念：${compact(rule.replace(/\n/g, '；'), 130)}。本題的具體代入與推導仍待補充。`,
    `讀題提示 4｜官方答案 ${correctText} 可供核對，但答案代號本身不能取代解題依據。`,
    isCalc
      ? '讀題提示 5｜完成自己的列式後，再代回原條件檢查單位、正負號與數量級。此處尚無本題的逐步計算。'
      : '讀題提示 5｜逐項指出原文或定義依據；此處尚無本題每個選項的個別排除解析。',
  ];

  return {
    reviewed: false,
    solutionSteps: autoSteps,
    restate: `這題其實在問：你能不能從題幹線索辨認「${title}（${conceptHeading}）」的適用規則。${scopeWords}`,
    clues: `先圈出關鍵物理量、幾何符號、材料名詞、單位（如 N, kN, MPa, cm, m）與「一定、可能、最大、最小、僅」等範圍限定詞。`,
    rule,
    correct: `官方標準答案是 ${question.answer}，即 ${correctText}。本站尚未完成本題的逐題推導與個別選項解析；上方為相關觀念及讀題引導。`,
    distractors: (['A', 'B', 'C', 'D'] as const)
      .filter((choice) => !answerChoices.includes(choice) && question.options?.[choice])
      .map((choice) => {
        const optText = compact(question.options?.[choice] ?? '', 80);
        return `${choice}「${optText}」：不是官方答案；本選項的個別排除理由尚待逐題查核，不以共用提示代替。`;
      }),
    transfer: '請先完成本章已精講題型的遷移練習；本題專屬的變式解法仍待補充。改變條件後，需要重新確認規則適用範圍。',
  };
}
