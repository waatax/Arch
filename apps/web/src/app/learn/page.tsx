import type { Metadata } from 'next';
import LearnHome from '@/components/learn/LearnHome';
import { SEMESTER_LIST, getCourseSummaries } from '@/data/learnPath';

export const metadata: Metadata = {
  title: '闖關學習：建築科三年六學期全科地圖',
  description:
    '依 108 課綱土木與建築群課程手冊排好的 Duolingo 式闖關學習：高一上到高三下，部定一般、專業、實習與技能領域全科，每關 5 題、答錯再練、連續學習與每日任務。',
};

export default function LearnPage() {
  return <LearnHome courses={getCourseSummaries()} semesters={SEMESTER_LIST} />;
}
