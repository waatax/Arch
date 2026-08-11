import type { TopicContent } from '@/data/types';

export interface IterationLearningPack {
  iteration: number;
  title: string;
  purpose: string;
  knowledgePoints: string[];
  guidedQuestions: string[];
  qualityUpgrades: string[];
  addedUnits: number;
  requiredUnits: number;
}

interface SubjectLearningProfile {
  observe: string;
  model: string;
  verify: string;
  transfer: string;
  evidence: string;
}

const profiles: Record<string, SubjectLearningProfile> = {
  mechanics: {
    observe: '先畫自由體圖，標出作用點、方向、尺寸、支承與正負號',
    model: '把文字條件轉成力、力矩、平衡方程及材料力學關係',
    verify: '用另一取矩點、量綱、極限情況與受力方向交叉驗算',
    transfer: '改變載重位置、支承型式或截面後，重新判斷控制條件',
    evidence: '統測專一的圖解計算、觀念比較及複合受力題',
  },
  materials: {
    observe: '先辨識材料種類、試體狀態、試驗條件、齡期與環境因素',
    model: '以組成—製程—微觀構造—性質—用途建立因果鏈',
    verify: '用單位、試驗標準、材料適用限制與破壞型態檢核結論',
    transfer: '比較材料、調整配比或環境條件，預測性能與耐久性變化',
    evidence: '統測專一的材料性質、試驗程序、標準及工程選材題',
  },
  surveying: {
    observe: '先畫測站、後視、前視、目標點與觀測方向，統一角度及高程符號',
    model: '把觀測量轉成距離、高差、方向角、坐標與閉合差',
    verify: '以閉合條件、往返測、獨立觀測、相對精度和有效數字驗證',
    transfer: '改變儀器位置、測線長度或觀測順序，評估誤差傳播',
    evidence: '統測專二的儀器操作、測算程序、誤差與工程應用題',
  },
  drafting: {
    observe: '先讀圖名、圖號、比例、北向、軸線、圖例、版次與投影方向',
    model: '在平面、立面、剖面、透視與詳圖間建立同一物件的空間對應',
    verify: '以視圖一致性、尺寸閉合、索引、線型與 CNS 製圖慣例查核',
    transfer: '改變觀察方向、剖切位置、比例或圖面層級後重新表達',
    evidence: '統測專二的視圖判讀、圖學作圖、圖例及建築圖說題',
  },
  'math-c': {
    observe: '先整理定義域、已知量、未知量、圖形條件與答案形式',
    model: '在代數式、函數圖形、幾何關係與數值表之間轉譯',
    verify: '代回原式，檢查定義域、正負、範圍、特殊值與估算量級',
    transfer: '改變參數或限制條件，辨認不變量與解法是否仍成立',
    evidence: '統測數學 C 的觀念、計算、圖表判讀及跨單元題',
  },
  physics: {
    observe: '辨認系統邊界、初末狀態、方向、守恆量與可忽略因素',
    model: '以示意圖、物理量、比例關係、定律與方程描述現象',
    verify: '利用單位、方向、極端情況、守恆及數量級檢核',
    transfer: '改變條件並預測趨勢，再判斷原模型的適用範圍',
    evidence: '技高自然領域的現象解釋、圖表與定量推理題',
  },
  chemistry: {
    observe: '辨認物質、粒子、反應條件、狀態、單位與安全資訊',
    model: '連結巨觀現象、微觀粒子、符號方程式與定量關係',
    verify: '用質量守恆、電荷守恆、單位與合理濃度範圍檢核',
    transfer: '改變濃度、溫度或材料，預測平衡、速率及性質趨勢',
    evidence: '技高自然領域的概念比較、實驗判讀與計量題',
  },
  chinese: {
    observe: '先確認文體、語境、段落功能、關鍵詞與題幹限制',
    model: '建立字詞—句意—段旨—篇章主旨—作者立場的證據鏈',
    verify: '每個判斷回扣原文，排除過度推論、偷換概念及範圍錯置',
    transfer: '把閱讀策略移用到不同文體、圖表、應用文與寫作情境',
    evidence: '統測國文的字詞、篇章閱讀、語文應用與寫作題',
  },
  english: {
    observe: '先辨識句型、時態、指涉、連接詞、語域與上下文線索',
    model: '把字彙、文法、句意、段落關係與篇章目的串成理解模型',
    verify: '代回選項並檢查搭配詞、語意連貫、時態一致與語境合理性',
    transfer: '把同一語言形式改寫到閱讀、克漏字、對話及職場情境',
    evidence: '統測英文的字彙、對話、克漏字及閱讀理解題',
  },
  history: {
    observe: '先定位時間、空間、人物、制度、史料來源與觀點',
    model: '用背景—事件—變化—影響建立多因多果的歷史解釋',
    verify: '核對年代順序、史料證據、因果方向與時代錯置',
    transfer: '比較不同時空下相似制度或事件的連續與變遷',
    evidence: '歷史科的時序、史料判讀、因果及跨區域比較題',
  },
  geography: {
    observe: '先讀圖名、圖例、比例尺、方向、尺度、位置與資料年份',
    model: '連結自然環境、人口、產業、空間分布與區域互動',
    verify: '用地圖、統計圖、尺度效應與反例檢查空間推論',
    transfer: '改變區域尺度或環境條件，重新解釋分布與人地關係',
    evidence: '地理科的地圖、圖表、區域特徵及人地互動題',
  },
  civics: {
    observe: '辨認權利義務、行為主體、制度、程序與公共議題立場',
    model: '以規範、誘因、權力制衡及成本效益分析社會現象',
    verify: '檢查法規層級、程序、權責、條件例外及概念邊界',
    transfer: '把原則套用到新的生活案例，區分事實判斷與價值選擇',
    evidence: '公民科的制度、法律、經濟與公共議題情境題',
  },
  extensions: {
    observe: '先定義使用者、場域、需求、限制、資源與驗收成果',
    model: '把需求轉成設計準則、工作分解、圖面、模型與決策紀錄',
    verify: '以法規、安全、可施工性、成本、永續與使用者回饋查核',
    transfer: '在新基地或新需求下調整方案，說明取捨而非只換造型',
    evidence: '專題、設計、施工、CAD／BIM 與作品集的整合任務',
  },
};

const defaultProfile = profiles.extensions;

export function getSevenIterationPacks(
  subjectSlug: string,
  topic: TopicContent,
  mappedExamExcerpts: string[],
): IterationLearningPack[] {
  const profile = profiles[subjectSlug] ?? defaultProfile;
  const conceptNames = topic.concepts.map((concept) => concept.heading);
  const first = conceptNames[0] ?? topic.title;
  const second = conceptNames[1] ?? first;
  const third = conceptNames[2] ?? second;
  const examClue = mappedExamExcerpts[0]?.slice(0, 90) || `目前以「${topic.title}」的課內例題作為遷移起點`;
  const baselineUnits = topic.concepts.length
    + (topic.worked_examples?.length ?? 0)
    + (topic.practices?.length ?? (topic.practice ? 1 : 0));
  const requiredUnits = Math.max(1, Math.ceil(baselineUnits * 0.1));
  const quality = (focus: string) => [
    `目標更清楚：本輪聚焦「${focus}」，完成後能口述判斷依據。`,
    '資訊更易讀：先給判斷框架，再給細節、例子與自我檢核。',
    '認知負荷更低：一次只改變一項條件，避免同時處理過多變因。',
    '回饋更具體：答案必須指出證據、步驟或排除理由。',
    `課綱與題目更緊密：以${profile.evidence}作為成果證據。`,
  ];
  const pack = (
    iteration: number,
    title: string,
    purpose: string,
    knowledgePoints: string[],
    guidedQuestions: string[],
  ): IterationLearningPack => ({
    iteration,
    title,
    purpose,
    knowledgePoints,
    guidedQuestions,
    qualityUpgrades: quality(title),
    addedUnits: knowledgePoints.length + guidedQuestions.length,
    requiredUnits,
  });

  return [
    pack(1, '先備知識與精準語言', `先補齊理解「${topic.title}」所需的入口知識，避免背公式卻讀錯題意。`, [
      `先備動作：${profile.observe}。`,
      `核心名詞一「${first}」：用自己的話說明它描述的對象、條件及可觀察結果。`,
      `核心名詞二「${second}」：說明它與「${first}」相同及不同之處。`,
      `閱讀題目時，把已知、未知、限制與要求分成四欄；任何未標單位或範圍的量都先補註。`,
    ], [
      `若不能使用公式或課本原句，你會如何向同學解釋「${first}」？`,
      `題目少給哪一項條件時，「${topic.title}」將無法得到唯一答案？`,
    ]),
    pack(2, '概念關係與因果網', `把零散知識組織成「條件—機制—結果—限制」網絡。`, [
      `模型化原則：${profile.model}。`,
      `從「${first}」到「${second}」要指出中間機制，不能只說兩者相關。`,
      `把「${third}」放入概念圖，至少連到一個原因、一個結果與一個限制條件。`,
      `每個公式、規則或判讀法都寫出適用條件；條件不成立時，先換模型而不是硬代數字。`,
    ], [
      `請畫出「${first} → ${second} → ${third}」的關係箭頭，並在箭頭上寫動詞。`,
      `哪一項條件改變後，上述箭頭可能反向或失效？為什麼？`,
    ]),
    pack(3, '原理推導與逐步推理', `從定義及基本原理重建解法，使新題型仍能自行推導。`, [
      `推理起點必須是定義、守恆、平衡、標準程序或文本證據，而不是直接寫答案。`,
      `每一步都標示「使用了哪個已知條件」及「為什麼可以執行這一步」。`,
      `計算題同步保留符號式與單位；判讀題同步保留原文、圖面或資料證據。`,
      `推導完成後執行：${profile.verify}。`,
    ], [
      `請把本章一個三步解法改寫成五步，補出原本被省略的推理。`,
      `如果答案數值或選項看似合理，但違反哪個基本原理就必須否決？`,
    ]),
    pack(4, '多重表徵與實作觀察', `在文字、圖像、表格、符號、步驟與實物現象間往返轉譯。`, [
      `把「${topic.title}」分別用一句話、一張草圖、一個關係式及一個生活例子表達。`,
      `圖表先讀標題、座標、圖例、比例與單位；工程圖再加讀投影、軸線、高程及版次。`,
      `操作或實驗先寫安全、儀器檢查、歸零、讀值、紀錄與收整，不把程序背成沒有目的的清單。`,
      `觀察值與推論分開記錄：看到的是資料；用原理解釋資料才是結論。`,
    ], [
      `哪一種表徵最容易暴露「${first}」的誤解？請說明判斷依據。`,
      `若圖、文字與計算結果互相衝突，你會依什麼順序查錯？`,
    ]),
    pack(5, '錯誤診斷與反例校正', `學會判斷錯在讀題、模型、程序、計算、單位或結論。`, [
      `先分類錯誤：條件漏讀、概念混淆、模型不適用、符號方向、單位換算、計算或過度推論。`,
      `建立最小反例：只改一項條件，證明錯誤規則並非永遠成立。`,
      `訂正不能只抄正解；要寫「錯誤念頭 → 衝突證據 → 正確規則 → 新例子」。`,
      `把「${first}」與「${second}」放入比較表，至少比較定義、適用條件、判斷訊號及常見陷阱。`,
    ], [
      `設計一個看似合理但其實錯誤的答案，並指出最早可以抓到它的檢核點。`,
      `你最可能在哪一類錯誤失分？下一題要加入哪個可觀察的防錯動作？`,
    ]),
    pack(6, '歷屆題型與條件變式', `把章內知識接到官方題目語言，練習辨認同一考點的不同包裝。`, [
      `官方題目線索：「${examClue}」。先圈出決定模型的名詞、數值、圖示或否定詞。`,
      `解題前先說出考點及排除理由；解題後再對照選項，避免被選項帶著算。`,
      `變式一只改數值，檢查程序熟練；變式二改條件，檢查模型選擇；變式三改問法，檢查遷移。`,
      `遷移策略：${profile.transfer}。`,
    ], [
      `把一題改成「何者錯誤」後，哪些選項敘述必須重新檢查範圍詞？`,
      `若拿掉圖或表，題目還能否作答？不能的話，缺少的是哪一類資訊？`,
    ]),
    pack(7, '綜合遷移與長期精熟', `用跨概念任務、間隔複習與自我解釋，確認知識能保留並帶到新情境。`, [
      `綜合任務必須同時使用「${first}」、「${second}」與「${third}」，並留下決策理由。`,
      `安排 1 日、7 日、21 日回想：第一次重建流程，第二次做條件變式，第三次做跨章整合。`,
      `完成後用三句話反思：我如何辨認題型、哪一步最不穩、下次先檢查什麼。`,
      `精熟證據不是看懂，而是能在無提示下解釋、操作、驗算、訂正並遷移。`,
    ], [
      `請提出一個真實情境，說明如何蒐集資料並運用「${topic.title}」作出決策。`,
      `隔一週不看筆記，你至少必須重建出哪三個核心步驟才算真正學會？`,
    ]),
  ];
}

