import { notFound } from 'next/navigation';
import TopicPageLayout, { type MappedExamQuestion } from '@/components/TopicPageLayout';
import { allSubjects } from '@/data/subjects';
import { getConceptVisuals } from '@/data/conceptVisuals';
import { getTopicExamQuestions, getTopicTeachingCases } from '@/lib/pedagogy/canonicalExams';

export function generateStaticParams() {
  return allSubjects.flatMap(s =>
    s.topics.map(t => ({ subject: s.slug, topic: t.slug }))
  );
}

export async function generateMetadata({ params }: { params: Promise<{ subject: string; topic: string }> }) {
  const p = await params;
  const subject = allSubjects.find(s => s.slug === p.subject);
  const topic = subject?.topics.find(t => t.slug === p.topic);
  
  if (!subject || !topic) return { title: 'Not Found' };
  return {
    title: `${topic.title} | ${subject.title} | Arch`,
    description: topic.desc,
  };
}

export default async function TopicPage({ params }: { params: Promise<{ subject: string; topic: string }> }) {
  const p = await params;
  const subject = allSubjects.find(s => s.slug === p.subject);
  const topic = subject?.topics.find(t => t.slug === p.topic);

  if (!subject || !topic) {
    notFound();
  }

  const route = `/subjects/${subject.slug}/${topic.slug}`;
  const questions: MappedExamQuestion[] = getTopicExamQuestions(route);

  return (
    <TopicPageLayout
      key={route}
      subject={subject}
      topic={topic}
      mappedExamQuestions={questions}
      teachingEntries={getTopicTeachingCases(route)}
      conceptVisuals={getConceptVisuals(subject.slug, topic.slug)}
    />
  );
}
