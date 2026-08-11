import { coreInterestDetails } from './interestHookCore';
import { engineeringInterestDetails } from './interestHookEngineering';
import { humanitiesInterestDetails } from './interestHookHumanities';
import type { TopicRealLifeGuide } from './realLifeHelpers';

export type HookSubjectSlug =
  | 'mechanics'
  | 'materials'
  | 'surveying'
  | 'drafting'
  | 'math-c'
  | 'chinese'
  | 'english'
  | 'physics'
  | 'chemistry'
  | 'history'
  | 'geography'
  | 'civics'
  | 'extensions';

export interface TopicInterestDetail {
  importance: string;
  application: string;
  hook: string;
}

interface TopicHookProfile {
  badge: string;
  coldOpen: (topicTitle: string) => string;
}

export interface TopicInterestHook extends TopicInterestDetail {
  badge: string;
  headline: string;
  lead: string;
  bridge: string;
  topicSummary: string;
  imageAlt: string;
  imageCaption: string;
}

export const TOPIC_HOOK_PROFILES = {
  mechanics: {
    badge: '力從哪裡來',
    coldOpen: (topicTitle: string) =>
      `看到「${topicTitle}」，先別急著把公式排成拒馬；它真正想回答的是：東西為什麼會動、停住，或表面很安靜，內部其實忙得很。`,
  },
  materials: {
    badge: '材料有脾氣',
    coldOpen: (topicTitle: string) =>
      `「${topicTitle}」不是材料名稱大會；水、熱、力量與時間一來，每種材料都會用自己的方式回應，有的撐住，有的變形，有的直接留下線索。`,
  },
  surveying: {
    badge: '世界要量準',
    coldOpen: (topicTitle: string) =>
      `「${topicTitle}」是在把真實世界翻譯成能施工、能定位的數字；作業紙上差一點也許只少一格，到了現場，兩條線可能就尷尬地擦肩而過。`,
  },
  drafting: {
    badge: '把空間說清楚',
    coldOpen: (topicTitle: string) =>
      `學「${topicTitle}」就像替空間做精準翻譯：腦中明明是一棟立體建築，到了紙上卻得讓每個人都讀出同一個意思。`,
  },
  'math-c': {
    badge: '公式會帶路',
    coldOpen: (topicTitle: string) =>
      `面對「${topicTitle}」，別把公式當成需要破解的密碼；它比較像把一長段推理壓成一行的壓縮檔，解開之後，每個符號都有工作。`,
  },
  chinese: {
    badge: '文字會轉彎',
    coldOpen: (topicTitle: string) =>
      `「${topicTitle}」看似只在讀文字，其實是在追蹤作者把意思藏在哪裡：有時直說，有時暗示，偶爾還會很有禮貌地拐一個大彎。`,
  },
  english: {
    badge: '讀懂世界說明書',
    coldOpen: (topicTitle: string) =>
      `讀「${topicTitle}」不需要先把每個單字都抓來點名；句型、上下文與關鍵詞會一起提供線索，陌生字不一定有資格攔住整段意思。`,
  },
  physics: {
    badge: '現象有原因',
    coldOpen: (topicTitle: string) =>
      `「${topicTitle}」不是宇宙臨時出的腦筋急轉彎；它是在替光、熱、電、聲音或運動找到一套前後一致的解釋。`,
  },
  chemistry: {
    badge: '變化有規則',
    coldOpen: (topicTitle: string) =>
      `「${topicTitle}」不只發生在實驗室的瓶瓶罐罐裡；硬化、鏽蝕、燃燒、清潔與電池反應，都是物質正在低調改組。`,
  },
  history: {
    badge: '現在有前傳',
    coldOpen: (topicTitle: string) =>
      `學「${topicTitle}」不是請年份排隊點名，而是追問：人們當時遇到什麼限制、做了什麼選擇，又怎麼一路影響到今天。`,
  },
  geography: {
    badge: '地方有邏輯',
    coldOpen: (topicTitle: string) =>
      `進入「${topicTitle}」前，先記得每個地方都不是隨機生成的；地形、氣候、人口與產業長期互相配合，有時也互相添麻煩。`,
  },
  civics: {
    badge: '生活有規則',
    coldOpen: (topicTitle: string) =>
      `「${topicTitle}」談的制度與權利，平常可能像條款裡的小字；一旦遇到公共決策、交易或爭議，它們就會突然站到舞台正中央。`,
  },
  extensions: {
    badge: '跨出去才完整',
    coldOpen: (topicTitle: string) =>
      `「${topicTitle}」不是課本最後偷偷附贈的彩蛋，而是把前面學過的知識帶出單一章節，看看它們能不能一起解決真問題。`,
  },
} satisfies Record<HookSubjectSlug, TopicHookProfile>;

export const TOPIC_INTEREST_DETAILS: Record<string, TopicInterestDetail> = {
  ...engineeringInterestDetails,
  ...coreInterestDetails,
  ...humanitiesInterestDetails,
};

function cleanTopicDescription(topicDescription: string) {
  return topicDescription.split('\n\n🔥 V6.0')[0].trim();
}

export function getTopicInterestHook({
  subjectSlug,
  topicSlug,
  topicTitle,
  topicDescription,
  visualConceptHeading,
  realLifeGuide,
}: {
  subjectSlug: string;
  topicSlug: string;
  topicTitle: string;
  topicDescription: string;
  visualConceptHeading: string;
  realLifeGuide: TopicRealLifeGuide;
}): TopicInterestHook {
  const profile = TOPIC_HOOK_PROFILES[subjectSlug as HookSubjectSlug];
  const routeKey = `${subjectSlug}/${topicSlug}`;
  const detail = TOPIC_INTEREST_DETAILS[routeKey];

  if (!profile || !detail) {
    throw new Error(`Missing topic interest hook for ${routeKey}`);
  }

  return {
    ...detail,
    badge: profile.badge,
    headline: `先別急著背｜${topicTitle} 到底有什麼用？`,
    lead: profile.coldOpen(topicTitle),
    bridge: realLifeGuide.juniorHighBridge,
    topicSummary: cleanTopicDescription(topicDescription),
    imageAlt: `${topicTitle}知識點的重要性、真實應用與「${visualConceptHeading}」核心概念插圖`,
    imageCaption: `先從圖中找出「${visualConceptHeading}」的線索；看懂情境後，再往下拆公式、做五題逐步解析。`,
  };
}
