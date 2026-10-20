import { PeriodicExamPlan, PeriodicExamFilter } from './types';
import { taichungArchG11ExamPlans } from './taichungArchG11';
import { g10AndG12ExamPlans } from './g10AndG12';

export * from './types';
export { taichungArchG11ExamPlans } from './taichungArchG11';
export { g10AndG12ExamPlans } from './g10AndG12';

export const allPeriodicExamPlans: PeriodicExamPlan[] = [
  ...taichungArchG11ExamPlans,
  ...g10AndG12ExamPlans,
];

export function getPeriodicExamPlans(filter?: PeriodicExamFilter): PeriodicExamPlan[] {
  if (!filter) return allPeriodicExamPlans;

  return allPeriodicExamPlans.filter((plan) => {
    if (filter.grade && plan.grade !== filter.grade) return false;
    if (filter.semester && plan.semester !== filter.semester) return false;
    if (filter.period && plan.period !== filter.period) return false;
    if (filter.subjectSlug && plan.subjectSlug !== filter.subjectSlug) return false;
    return true;
  });
}

export function getPeriodicExamById(id: string): PeriodicExamPlan | undefined {
  return allPeriodicExamPlans.find((plan) => plan.id === id);
}

export const periodicExamSchools = [
  {
    id: 'taichung-arch',
    name: '國立台中高工建築科',
    badge: '建築科首選指標',
    description: '依據台中高工建築科教學進度配當、實習操作期程與歷屆段考試題交叉比對編列。',
  },
  {
    id: 'national-arch',
    name: '技術型高中土木建築群',
    badge: '108課綱標準',
    description: '依據教育部 108 課綱與四技二專統一入學測驗命題大綱標準編列。',
  },
];
