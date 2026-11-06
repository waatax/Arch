export interface ExamTeachingCase {
  questionId: string;
  routes: string[];
  kind: string;
  knowledge: [string, string][];
  steps: string[];
  reasons: [string, string, string, string];
  transfer: { prompt: string; answer: string; steps: string[] };
  numericChecks?: [string, number][];
  display?: { excerpt?: string; options?: Record<string, string> };
  reviewNote?: string;
  references?: { title: string; url: string }[];
}
/** Authored teaching content. Official answer keys are loaded separately. */
export const lessonCase = (
  questionId: string, routes: string[], kind: string,
  knowledge: ExamTeachingCase['knowledge'], steps: string[], reasons: ExamTeachingCase['reasons'],
  transfer: ExamTeachingCase['transfer'], numericChecks?: ExamTeachingCase['numericChecks'],
  display?: ExamTeachingCase['display'],
): ExamTeachingCase => ({ questionId, routes: routes.map((r) => `/subjects/${r}`), kind, knowledge, steps, reasons, transfer, numericChecks, display });
