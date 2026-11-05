import { mechanicsCases } from './mechanics';
import { materialsCases } from './materials';
import { surveyingCases } from './surveying';
import { draftingCases } from './drafting';
import { mathematicsCases } from './mathematics';
import { languageCases } from './languages';
import { additionalCases } from './additional';
export type { ExamTeachingCase } from './types';
export const examTeachingCases = [...mechanicsCases, ...materialsCases, ...surveyingCases, ...draftingCases, ...mathematicsCases, ...languageCases, ...additionalCases];
