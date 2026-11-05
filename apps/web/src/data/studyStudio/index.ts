import { professionalLessons } from './professional';
import { commonLessons } from './common';
export * from './types';
export const studioLessons = [...professionalLessons, ...commonLessons];
// The baseline is the existing subject-topic catalog, not the much larger question bank.
export const CONTENT_BASELINE = { date: '2026-11-05', subjects: 13, topicUnits: 120 };
