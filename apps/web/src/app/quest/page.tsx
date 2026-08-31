import React from 'react';
import type { Metadata } from 'next';
import CampaignQuestMap from '@/components/gamification/CampaignQuestMap';

export const metadata: Metadata = {
  title: '高二開學冒險戰役 (Master Builder Quest) · Arch',
  description: '2026 高二建築科與土木科開學 60 天冒險戰役地圖，結合 8 大戰役關卡、工程現場探案與藍圖解鎖。',
};

export default function QuestPage() {
  return (
    <div className="min-h-screen bg-[#fafaf9] dark:bg-slate-950 py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CampaignQuestMap />
      </div>
    </div>
  );
}
