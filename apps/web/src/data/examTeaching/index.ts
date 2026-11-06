import english112Reviewed from './english112Reviewed.json';
import english111Reviewed from './english111Reviewed.json';
import english115Reviewed from './english115Reviewed.json';
import english114Reviewed from './english114Reviewed.json';
import english113Reviewed from './english113Reviewed.json';
import survey111Reviewed from './survey111Reviewed.json';
import survey112Reviewed from './survey112Reviewed.json';
import survey113Reviewed from './survey113Reviewed.json';
import survey114Reviewed from './survey114Reviewed.json';
import survey115Reviewed from './survey115Reviewed.json';
import { surveyReviewNoteCases } from './surveyReviewNotes';
import chinese111Reviewed from './chinese111Reviewed.json';
import chinese112Reviewed from './chinese112Reviewed.json';
import chinese113Reviewed from './chinese113Reviewed.json';
import chinese114Reviewed from './chinese114Reviewed.json';
import chinese115Reviewed from './chinese115Reviewed.json';
import materials111Reviewed from './materials111Reviewed.json';
import materials112Reviewed from './materials112Reviewed.json';
import materials113Reviewed from './materials113Reviewed.json';
import materials114Reviewed from './materials114Reviewed.json';
import materials115Reviewed from './materials115Reviewed.json';
import extensions113Reviewed from './extensions113Reviewed.json';
import mechanics111Reviewed from './mechanics111Reviewed.json';
import mechanics112Reviewed from './mechanics112Reviewed.json';
import mechanics113Reviewed from './mechanics113Reviewed.json';
import mechanics114Reviewed from './mechanics114Reviewed.json';
import mechanics115Reviewed from './mechanics115Reviewed.json';
import drafting111Reviewed from './drafting111Reviewed.json';
import drafting112Reviewed from './drafting112Reviewed.json';
import drafting113Reviewed from './drafting113Reviewed.json';
import drafting114Reviewed from './drafting114Reviewed.json';
import drafting115Reviewed from './drafting115Reviewed.json';
import mathematics115Reviewed from './mathematics115Reviewed.json';
import mathematics114Reviewed from './mathematics114Reviewed.json';
import mathematics113Reviewed from './mathematics113Reviewed.json';
import mathematics112Reviewed from './mathematics112Reviewed.json';
import mathematicsReviewed from './mathematicsReviewed.json';
import { equilibriumReviewCases } from './equilibriumReview';
import dialogueReviewed from './dialogueReviewed.json';
import { mirrorReadingCases } from './mirrorReading';
import vocabularyReviewed from './vocabularyReviewed.json';
import type { ExamTeachingCase } from './types';
import { mechanicsCases } from './mechanics';
import { materialsCases } from './materials';
import { surveyingCases } from './surveying';
import { draftingCases } from './drafting';
import { mathematicsCases } from './mathematics';
import { languageCases } from './languages';
import { additionalCases } from './additional';
import { deepeningCases } from './deepening';
import { sourceReadingCases } from './sourceReading';
import { sharedCalculationCases } from './sharedCalculations';
export type { ExamTeachingCase } from './types';
const reviewedCases = [
  vocabularyReviewed, dialogueReviewed,
  mathematicsReviewed, mathematics112Reviewed, mathematics113Reviewed, mathematics114Reviewed, mathematics115Reviewed,
  english111Reviewed, english112Reviewed, english113Reviewed, english114Reviewed, english115Reviewed,
  survey111Reviewed, survey112Reviewed, survey113Reviewed, survey114Reviewed, survey115Reviewed,
  chinese111Reviewed, chinese112Reviewed, chinese113Reviewed, chinese114Reviewed, chinese115Reviewed,
  materials111Reviewed, materials112Reviewed, materials113Reviewed, materials114Reviewed, materials115Reviewed,
  extensions113Reviewed,
  mechanics111Reviewed, mechanics112Reviewed, mechanics113Reviewed, mechanics114Reviewed, mechanics115Reviewed,
  drafting111Reviewed, drafting112Reviewed, drafting113Reviewed, drafting114Reviewed, drafting115Reviewed,
].flat() as ExamTeachingCase[];
export const examTeachingCases: ExamTeachingCase[] = [
  ...equilibriumReviewCases, ...mirrorReadingCases,
  ...mechanicsCases, ...materialsCases, ...surveyingCases, ...draftingCases, ...mathematicsCases,
  ...languageCases, ...additionalCases, ...deepeningCases, ...sourceReadingCases, ...sharedCalculationCases,
  ...reviewedCases, ...surveyReviewNoteCases,
];
