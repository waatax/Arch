import type { ConceptVisual, TopicVisualMap } from './types';
import { mechanicsVisuals } from './mechanics';

export type { ConceptVisual, ConceptVisualKind, ConceptVisualTable, TopicVisualMap } from './types';

/** subjectSlug → topicSlug → visuals */
export const conceptVisualRegistry: Record<string, TopicVisualMap> = {
  mechanics: mechanicsVisuals,
};

/** 去除 HTML／Markdown 標記後的觀念標題，用於比對 ConceptVisual.concept */
export function normalizeHeading(heading: string): string {
  return heading
    .replace(/<[^>]+>/g, '')
    .replace(/\*\*/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function getConceptVisuals(subjectSlug: string, topicSlug: string): ConceptVisual[] {
  return conceptVisualRegistry[subjectSlug]?.[topicSlug] ?? [];
}

/** 依觀念順序分組；找不到對應觀念的圖像不會被顯示（驗證腳本會在 build 前攔截） */
export function groupVisualsByConcept(headings: string[], visuals: ConceptVisual[]): ConceptVisual[][] {
  const normalized = headings.map(normalizeHeading);
  const groups: ConceptVisual[][] = headings.map(() => []);
  for (const visual of visuals) {
    const key = normalizeHeading(visual.concept);
    const index = normalized.findIndex((heading) => heading.startsWith(key));
    if (index >= 0) groups[index].push(visual);
  }
  return groups;
}
