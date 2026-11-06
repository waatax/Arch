import professional from '../../../../../data/registry/exam-coverage.json';
import common from '../../../../../data/registry/common-exam-questions.json';
import pageMap from '../../../../../data/registry/exam-page-map.json';
import { examTeachingCases, type ExamTeachingCase } from '@/data/examTeaching';
import { examRouteCorrections } from '@/data/examTeaching/corrections';
import { examSourceVisuals, examSharedQuestionVisuals } from '@/data/examTeaching/sourceVisuals';
import { examReadingContext } from '@/data/examTeaching/readingContext';
import type { VisualFigureData } from '@/data/types';

export interface CanonicalExamQuestion {
  id: string; year: number; questionNo: number; answer: string; excerpt: string;
  options: Partial<Record<'A'|'B'|'C'|'D',string>>;
  subject?: string; topic?: string; lessonRoute?: string | null;
  sourceLabel?: string; sourceUrl?: string; figureImage?: string | null;
  requiresOfficialFigure?: boolean; passage?: string | null; groupId?: string | null; groupTitle?: string | null;
  teaching?: ExamTeachingCase;
  previousRoute?: string | null;
  needsOriginal?: boolean;
  visualData?: VisualFigureData;
  figureCaption?: string;
}
interface RawQuestion extends CanonicalExamQuestion { quarantined?: boolean; evidenceLevel?: string }
export const rawExamQuestions = [...professional.questions, ...common.questions] as RawQuestion[];
const guides = new Map(examTeachingCases.map((c) => [c.questionId,c]));
const figures = pageMap as Record<string,{figureImage?:string;originalPage?:number}>;
export const canonicalExamQuestions: CanonicalExamQuestion[] = rawExamQuestions
  .filter((q) => q.year >= 111 && q.year <= 115 && !q.quarantined && q.evidenceLevel !== 'E0')
  .map((raw) => {
    const teaching = guides.get(raw.id);
    const correction = examRouteCorrections[raw.id];
    const lessonRoute = correction ? `/subjects/${correction}` : raw.lessonRoute;
    const sourceVisual = examSharedQuestionVisuals[raw.id] ?? (raw.groupId ? examSourceVisuals[raw.groupId] : undefined);
    const figureImage = sourceVisual?.image || raw.figureImage || figures[raw.id]?.figureImage;
    const question = { ...raw, ...figures[raw.id], figureImage, lessonRoute, teaching, previousRoute: correction ? raw.lessonRoute : undefined };
    return {
      ...question,
      // Older chart/table reconstructions were illustrative and contradicted the source.
      // Only visually checked transcriptions may enter the live exam renderer.
      visualData: sourceVisual?.table ? {table:sourceVisual.table} : undefined,
      figureCaption: sourceVisual?.caption,
      subject: lessonRoute?.split('/')[2] || raw.subject,
      topic: lessonRoute?.split('/')[3] || raw.topic,
      excerpt: teaching?.display?.excerpt || raw.excerpt,
      options: teaching?.display?.options || raw.options,
      passage: examReadingContext[raw.id] ?? (raw.groupId ? examReadingContext[raw.groupId] : undefined) ?? raw.passage,
      // Shared figure references and incomplete OCR require the original source; do not invent geometry.
      needsOriginal: Boolean((raw.requiresOfficialFigure && !figureImage) || (!figureImage && /此桁架|此組合斷面|承上題|①所示/.test(raw.excerpt))),
    };
  });
export const getTopicExamQuestions = (route: string) => canonicalExamQuestions
  .filter((q) => q.lessonRoute === route || Boolean(q.teaching?.routes.includes(route)))
  .sort((a,b) => Number(Boolean(b.teaching))-Number(Boolean(a.teaching)) || b.year-a.year || a.questionNo-b.questionNo);
export function getTopicTeachingCases(route: string) {
  return examTeachingCases.filter((c) => c.routes.includes(route)).map((guide) => ({ guide, question: canonicalExamQuestions.find((q) => q.id === guide.questionId)! }));
}
