import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import PeriodicExamHub from '@/components/review/PeriodicExamHub';

export const metadata: Metadata = {
  title: '高工各科段考衝刺預備講義與名校考卷真題交叉比對庫 ｜ Arch V9.00',
  description: '依據 108 課綱與各大高工（特別是國立台中高工建築科指標進度）段考時程，編列高一至高三各科第一次段考、第二次段考與期末考知識點、預備講義、考前 10 分鐘公式卡與真題 SOP 詳解。',
};

export default function PeriodicExamsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-10 space-y-8 min-h-screen">
      {/* 導航麵包屑 */}
      <nav className="flex items-center gap-2 text-xs font-mono text-slate-500">
        <Link 
          href="/review" 
          className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>返回學期複習首頁</span>
        </Link>
        <span>/</span>
        <span className="text-slate-800 dark:text-slate-200 font-bold">
          高工段考衝刺預備講義
        </span>
      </nav>

      {/* 核心段考預備講義組件 */}
      <PeriodicExamHub />
    </div>
  );
}
