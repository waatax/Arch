import type { LearnUnit } from '@/data/learnPath/types';

// Supplemental chapters follow the named unit's actual scope.
const supplementary: Record<string, string[]> = {
  'g11s1-materials-1-u2': ['/subjects/materials/cement-types'],
  'g11s1-materials-1-u3': ['/subjects/materials/cement-storage', '/subjects/materials/cement-strength'],
  'g10s1-survey-1-u1': ['/subjects/surveying/area-and-error'],
  'g10s2-survey-2-u1': ['/subjects/surveying/instrument-setup'],
  'g10s2-drafting-2-u4': ['/subjects/drafting/perspective-projection'],
  'g10s1-intro-u4': ['/subjects/drafting/bim-concepts'],
  'g10s2-construction-u1': ['/subjects/mechanics/structural-failures'],
  'g11s1-mechanics-1-u3': ['/subjects/mechanics/nonconcurrent-force-systems'],
  'g11s2-materials-2-u5': ['/subjects/materials/green-building-materials'],
  'g12s1-english-5-u4': ['/subjects/english/reading-advanced'],
};

export function getUnitLessonRoutes(unit: LearnUnit): string[] {
  const main = unit.topic ? [`/subjects/${unit.topic.subject}/${unit.topic.topic}`] : [];
  return [...new Set([...main, ...(supplementary[unit.id] ?? [])])];
}
