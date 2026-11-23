import { Suspense } from 'react';
import type { Metadata } from 'next';
import { getSubjectVideoGroups, getYouTubeCatalogStats } from '@/data/youtubeVideos';
import VideosCatalogClient from '@/components/videos/VideosCatalogClient';

export const metadata: Metadata = {
  title: '高工統測 13 科教學影片專區 (126 集)',
  description:
    '依科目完整收錄 108 課綱技術型高中建築科 13 科共 126 支 YouTube 教學影片連結，涵蓋工程力學、材料與試驗、測量實習、製圖實習、數學 C 與共同科目，並與站內講義一鍵連動。',
};

export default function VideosPage() {
  const groups = getSubjectVideoGroups();
  const stats = getYouTubeCatalogStats();

  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-7xl px-4 py-12 text-sm font-mono text-slate-500">
          載入高工統測 13 科教學影片目錄中...
        </div>
      }
    >
      <VideosCatalogClient groups={groups} stats={stats} />
    </Suspense>
  );
}
