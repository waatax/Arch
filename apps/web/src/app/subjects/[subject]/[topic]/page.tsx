import { notFound } from 'next/navigation';
import TopicPageLayout from '@/components/TopicPageLayout';
import { allSubjects } from '@/data/subjects';

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

  return <TopicPageLayout subject={subject} topic={topic} />;
}
