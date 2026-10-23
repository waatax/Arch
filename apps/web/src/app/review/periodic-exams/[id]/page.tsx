import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { allPeriodicExamPlans, getPeriodicExamById } from '@/data/periodicExams';
import PeriodicExamDetailView from '@/components/review/PeriodicExamDetailView';

export function generateStaticParams() {
  return allPeriodicExamPlans.map((plan) => ({
    id: plan.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const plan = getPeriodicExamById(id);
  if (!plan) return { title: 'Exam Handout Not Found' };

  return {
    title: `${plan.subjectName} ${plan.periodName} 考前衝刺預備講義與真題對照手冊 (A4 PDF) ｜ Arch V10.00`,
    description: `${plan.targetSchool}。範圍：${plan.examScope}。收錄核心觀念圖解、考前 10 分鐘速記公式卡、名校段考真題逐步 SOP 詳解。`,
  };
}

export default async function PeriodicExamDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const plan = getPeriodicExamById(id);
  if (!plan) notFound();

  return (
    <div className="mx-auto max-w-5xl px-3.5 py-6 sm:px-6 sm:py-10 space-y-8 min-h-screen">
      <PeriodicExamDetailView plan={plan} />
    </div>
  );
}
