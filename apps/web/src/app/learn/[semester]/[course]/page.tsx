import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CoursePath from '@/components/learn/CoursePath';
import { COURSE_CATALOG, SEMESTER_LIST, getCourse, learnStaticParams } from '@/data/learnPath';

type Params = { semester: string; course: string };

export const dynamicParams = false;

export function generateStaticParams() {
  return learnStaticParams();
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { semester, course } = await params;
  const c = getCourse(`${semester}-${course}`);
  const sem = SEMESTER_LIST.find((s) => s.id === semester);
  if (!c || !sem) return {};
  return {
    title: `${sem.label}・${c.title}｜闖關學習`,
    description: `${c.blurb}（${c.units.length} 個單元、${c.units.reduce((n, u) => n + u.items.length, 0)} 題）`,
  };
}

export default async function LearnCoursePage({ params }: { params: Promise<Params> }) {
  const { semester, course } = await params;
  const c = getCourse(`${semester}-${course}`);
  const sem = SEMESTER_LIST.find((s) => s.id === semester);
  if (!c || !sem) notFound();
  const siblings = COURSE_CATALOG.filter((x) => x.semester === semester).map((x) => ({
    id: x.id,
    href: `/learn/${x.semester}/${x.key}/`,
    title: x.title,
    emoji: x.emoji,
  }));
  return <CoursePath course={c} semesterLabel={sem.label} siblings={siblings} />;
}
