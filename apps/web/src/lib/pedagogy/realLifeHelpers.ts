import { engineeringRealLifeGuides } from './realLifeEngineering';
import { coreRealLifeGuides } from './realLifeCore';
import { generalRealLifeGuides } from './realLifeGeneral';

export interface TopicRealLifeGuide {
  realLifeImportance: string;
  whereUsed?: string;
  juniorHighBridge: string;
  everydayAnalogy: string;
  handsOnObservation: string;
  applicationVariations?: string[];
  oneSentenceRecap: string;
}

export const ALL_TOPIC_REAL_LIFE_GUIDES: Record<string, TopicRealLifeGuide> = {
  ...engineeringRealLifeGuides,
  ...coreRealLifeGuides,
  ...generalRealLifeGuides,
};

export function getTopicRealLifeGuide(subjectSlug: string, topicSlug: string): TopicRealLifeGuide {
  const exact = ALL_TOPIC_REAL_LIFE_GUIDES[`${subjectSlug}/${topicSlug}`];
  if (exact) {
    return exact;
  }

  return {
    realLifeImportance: '建築工程與專業素養緊密扣合生活安全、空間效率與永續發展，理解核心原理才能在真實場域做出正確判斷。',
    whereUsed: '建築設計規劃、施工現場品質檢核與四技二專統測綜合情境題。',
    juniorHighBridge: '從國中基礎數理、語文與生活觀察出發，逐步銜接高工建築科專業規範。',
    everydayAnalogy: '就像蓋房子先打穩地基再逐層往上蓋，先看懂生活現象與因果關係，公式與規範自然水到渠成。',
    handsOnObservation: '觀察身邊建築的梁柱、門窗開口、排水坡度與材料質感，把課本名詞與真實環境對應起來。',
    applicationVariations: [
      '條件變化檢核：當題目改變尺寸、材料或方位條件時，先回查核心控制公式與規範邊界。',
      '跨單元整合：將本章觀念與相鄰章節的圖解、單位與標準檢驗流程串聯驗證。',
    ],
    oneSentenceRecap: '結合真實生活連結、核心原理與條件變形分析，讓每個知識點都能在考場與工地靈活應用。',
  };
}
