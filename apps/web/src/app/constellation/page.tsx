import React from 'react';
import type { Metadata } from 'next';
import ArchitectSkillConstellation from '@/components/gamification/ArchitectSkillConstellation';

export const metadata: Metadata = {
  title: '建築大師技能星空圖 (Architectural Constellation) · Arch',
  description: '13 科 111 主題專業技能星空圖，點亮力學、材料、測量、製圖與數學 C 跨領域星系網絡。',
};

export default function ConstellationPage() {
  return (
    <div className="min-h-screen bg-[#fafaf9] dark:bg-slate-950 py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ArchitectSkillConstellation />
      </div>
    </div>
  );
}
