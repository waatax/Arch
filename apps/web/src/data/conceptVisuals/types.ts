/** 概念層級的教學圖像：圖解（示意圖）、圖表（數據）、補充表格 */
export type ConceptVisualKind = 'diagram' | 'chart' | 'table';

export interface ConceptVisualTable {
  headers: string[];
  rows: string[][];
}

export interface ConceptVisual {
  /**
   * 掛載到哪一個核心觀念：與 concept.heading 去除標記後的文字「開頭相符」即可。
   * 由 validate-concept-visuals 保證每筆只會對到同一主題中的唯一一個觀念。
   */
  concept: string;
  kind: ConceptVisualKind;
  title: string;
  /** 一句話說明圖在畫什麼（也作為無障礙替代文字的一部分） */
  caption?: string;
  /** 由 kit.ts 產生的 SVG 字串 */
  svg?: string;
  /** kind = table 的主體；kind = chart 時作為「顯示數據」的資料表 */
  table?: ConceptVisualTable;
  /** 讀圖重點：2–4 句，告訴學生該從圖中看出什麼 */
  takeaways?: string[];
}

/** topicSlug → 該主題的所有概念圖像 */
export type TopicVisualMap = Record<string, ConceptVisual[]>;
