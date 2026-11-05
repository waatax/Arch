import fs from 'node:fs';
import path from 'node:path';
import { allSubjects } from '@/data/subjects';
import { OFFICIAL_OUTLINES } from '@/data/curriculum/officialOutlines';
import type { TopicConcept } from '@/data/types';
import { EXAM_CHAPTER_MAP, EXAM_YEARS, FINAL_REVIEW_SUBJECTS, type ChapterContent, type FinalReviewSubject } from '.';

export interface ReviewQuestion {
  id: string;
  year: number;
  questionNo: number;
  answer: string;
  excerpt: string;
  options: Record<string, string>;
  figureImage?: string | null;
  passage?: string | null;
  sourceUrl?: string;
  subject?: string;
  lessonRoute?: string;
}

const EXAMS = ['professional-1', 'professional-2', 'math-c', 'english', 'chinese'];
const shardDir = path.join(process.cwd(), 'public', 'practice-data', 'shards');

let cache: Map<string, Map<number, ReviewQuestion[]>> | null = null;

function chapterOf(q: ReviewQuestion, subject: FinalReviewSubject): number | null {
  const mapped = EXAM_CHAPTER_MAP[q.id];
  if (mapped) return mapped.subject === subject.slug ? mapped.chapter : null;
  const topic = q.lessonRoute?.split('/').pop();
  if (!q.lessonRoute?.startsWith(`/subjects/${subject.slug}/`) || !topic) return null;
  if (subject.chapterTopics) {
    const i = subject.chapterTopics.indexOf(topic);
    return i >= 0 ? i + 1 : null;
  }
  return subject.chapters.find((c) => c.topics?.includes(topic))?.no ?? null;
}

function load() {
  if (cache) return cache;
  const all: ReviewQuestion[] = [];
  for (const year of EXAM_YEARS) {
    for (const exam of EXAMS) {
      const file = path.join(shardDir, `${year}-${exam}.json`);
      all.push(...(JSON.parse(fs.readFileSync(file, 'utf8')).questions as ReviewQuestion[]));
    }
  }
  cache = new Map();
  for (const subject of FINAL_REVIEW_SUBJECTS) {
    const byChapter = new Map<number, ReviewQuestion[]>();
    for (const q of all) {
      const no = chapterOf(q, subject);
      if (no == null) continue;
      (byChapter.get(no) ?? byChapter.set(no, []).get(no)!).push(q);
    }
    cache.set(subject.slug, byChapter);
  }
  return cache;
}

export const chapterQuestions = (slug: string, no: number) => load().get(slug)?.get(no) ?? [];

export function yearCounts(slug: string, no: number) {
  const qs = chapterQuestions(slug, no);
  return EXAM_YEARS.map((year) => qs.filter((q) => q.year === year).length);
}

export const subjectQuestionTotal = (slug: string) =>
  [...(load().get(slug)?.values() ?? [])].reduce((sum, list) => sum + list.length, 0);

/** 大綱條目：語文科沒有逐章對應，回傳空陣列 */
export function outlineItems(subject: FinalReviewSubject, chapter: ChapterContent) {
  if (!subject.outlinePrefix) return [];
  const unit = OFFICIAL_OUTLINES[subject.slug]?.units.find((u) => u.code === `${subject.outlinePrefix}${chapter.no}`);
  return unit?.items ?? [];
}

export function chapterConcepts(subject: FinalReviewSubject, chapter: ChapterContent) {
  const data = allSubjects.find((s) => s.slug === subject.slug);
  const out: { topicSlug: string; topicTitle: string; concept: TopicConcept }[] = [];
  const codes = new Set(outlineItems(subject, chapter).map((i) => i.code));
  for (const topic of data?.topics ?? []) {
    for (const concept of topic.concepts) {
      const inChapter = codes.size
        ? concept.outlineRefs?.some((c) => codes.has(c))
        : chapter.topics?.includes(topic.slug);
      if (inChapter) out.push({ topicSlug: topic.slug, topicTitle: topic.title, concept });
    }
  }
  return out;
}

/** 大綱條目覆蓋：該條目對應幾個觀念 */
export function itemCoverage(subject: FinalReviewSubject, chapter: ChapterContent) {
  const concepts = chapterConcepts(subject, chapter);
  return outlineItems(subject, chapter).map((item) => ({
    ...item,
    concepts: concepts.filter((c) => c.concept.outlineRefs?.includes(item.code)).length,
  }));
}

/** 與本章最相關的教學頁，依對應觀念數排序 */
export function chapterTopics(subject: FinalReviewSubject, chapter: ChapterContent) {
  const counts = new Map<string, { slug: string; title: string; n: number }>();
  for (const { topicSlug, topicTitle } of chapterConcepts(subject, chapter)) {
    const row = counts.get(topicSlug) ?? { slug: topicSlug, title: topicTitle, n: 0 };
    row.n++;
    counts.set(topicSlug, row);
  }
  return [...counts.values()].sort((a, b) => b.n - a.n);
}

export function chapterWorkedExamples(subject: FinalReviewSubject, chapter: ChapterContent) {
  const data = allSubjects.find((s) => s.slug === subject.slug);
  const top = chapterTopics(subject, chapter)[0];
  const topic = data?.topics.find((t) => t.slug === top?.slug);
  return { topicTitle: topic?.title, examples: (topic?.worked_examples ?? []).slice(0, 2), practices: (topic?.practices ?? []).slice(0, 3) };
}
