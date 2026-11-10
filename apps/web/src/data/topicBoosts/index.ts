import type { SubjectData } from '../types';
import type { SubjectBoostMap } from './types';
import { mechanicsBoosts } from './mechanics';
import { materialsBoosts } from './materials';
import { surveyingBoosts } from './surveying';
import { draftingBoosts } from './drafting';
import { mathCBoosts } from './math-c';
import { physicsBoosts, chemistryBoosts } from './science';
import { chineseBoosts, englishBoosts } from './language';
import { historyBoosts, geographyBoosts, civicsBoosts } from './social';
import { extensionsBoosts } from './extensions';

export type { BoostConcept, BoostQuizItem, SubjectBoostMap, TopicBoost } from './types';

/** subjectSlug → topicSlug → 加值包 */
export const topicBoostRegistry: Record<string, SubjectBoostMap> = {
  mechanics: mechanicsBoosts,
  materials: materialsBoosts,
  surveying: surveyingBoosts,
  drafting: draftingBoosts,
  'math-c': mathCBoosts,
  physics: physicsBoosts,
  chemistry: chemistryBoosts,
  chinese: chineseBoosts,
  english: englishBoosts,
  history: historyBoosts,
  geography: geographyBoosts,
  civics: civicsBoosts,
  extensions: extensionsBoosts,
};

/** 把加值包併入主題資料（就地修改，重複呼叫不會重複加入）。 */
export function applyTopicBoosts(subjects: SubjectData[]): SubjectData[] {
  for (const subject of subjects) {
    const map = topicBoostRegistry[subject.slug];
    if (!map) continue;
    for (const topic of subject.topics) {
      const boost = map[topic.slug];
      if (!boost || topic.boostQuiz) continue;
      for (const concept of boost.concepts) {
        topic.concepts.push({
          heading: concept.heading,
          outlineRefs: concept.outlineRefs,
          body: concept.body,
          ...(concept.steps ? { steps: concept.steps } : {}),
          ...(concept.formula ? { formula: concept.formula } : {}),
          table: concept.table,
          keyCards: concept.cards.map(([label, value]) => ({ label, value })),
          boost: true,
        });
      }
      topic.boostQuiz = boost.quiz;
    }
  }
  return subjects;
}
