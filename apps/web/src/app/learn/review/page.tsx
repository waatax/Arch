import type { Metadata } from 'next';
import ReviewHub from '@/components/learn/ReviewHub';

export const metadata: Metadata = {
  title: '錯題複習・闖關學習',
  description: '闖關時答錯的題目集中複習，答對即移出錯題本。',
};

export default function LearnReviewPage() {
  return <ReviewHub />;
}
