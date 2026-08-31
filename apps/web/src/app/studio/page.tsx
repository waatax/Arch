import React from 'react';
import type { Metadata } from 'next';
import BlueprintStudioCanvas from '@/components/studio/BlueprintStudioCanvas';

export const metadata: Metadata = {
  title: '建築大師工坊 (Architect\'s Blueprint Studio) · Arch',
  description: '打造個人專屬台灣經典名築藍圖畫布，親手組裝路思義教堂、台中歌劇院、台北101、淡江大橋與921地震園區。',
};

export default function StudioPage() {
  return (
    <div className="min-h-screen bg-[#fafaf9] dark:bg-slate-950 py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BlueprintStudioCanvas />
      </div>
    </div>
  );
}
