'use client';

import React, { useEffect, useState } from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Flame, Target, BookOpen, Trophy, Download } from 'lucide-react';
import { useStudentStore } from '@/lib/store/studentStore';

export default function StudentDashboard() {
  const { streak, eloRank, questionsCompleted, dailyGoal, resetDailyIfNewDay } = useStudentStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    resetDailyIfNewDay();
    setMounted(true);
  }, [resetDailyIfNewDay]);

  if (!mounted) return null; // Avoid hydration mismatch

  const progressPercent = Math.min(100, Math.round((questionsCompleted / dailyGoal) * 100));

  const handleExportPDF = async () => {
    try {
      const html2canvas = (await import('html2canvas')).default;
      const { jsPDF } = await import('jspdf');
      
      // Target the bento box container for export
      const element = document.getElementById('bento-dashboard');
      if (!element) return;
      
      const canvas = await html2canvas(element, { scale: 2 });
      const imgData = canvas.toDataURL('image/png');
      
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'px',
        format: [canvas.width, canvas.height]
      });
      
      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
      pdf.save('我的學習歷程-Arch.pdf');
    } catch (e) {
      console.error('Failed to export PDF', e);
      alert('匯出失敗，請稍後再試。');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-6 md:p-12 relative overflow-hidden">
      {/* Background ambient glowing blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl mix-blend-multiply opacity-50 dark:opacity-20 animate-blob pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl mix-blend-multiply opacity-50 dark:opacity-20 animate-blob animation-delay-2000 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
              Welcome back, Student
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              Let's crush today's vocational goals!
            </p>
          </div>
          
          <button 
            onClick={handleExportPDF}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors shadow-lg shadow-blue-500/20"
          >
            <Download size={18} />
            匯出學習歷程 (PDF)
          </button>
        </header>

        {/* Bento Box Layout */}
        <div id="bento-dashboard" className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 rounded-xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50">
          
          {/* Streak Widget */}
          <GlassCard hoverEffect className="col-span-1 md:col-span-2 p-6 flex flex-col justify-between bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-500/20">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-bold text-slate-800 dark:text-white">Daily Streak</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">{streak > 0 ? "You're on fire!" : "Start a new streak today!"}</p>
              </div>
              <div className="p-3 bg-orange-100 dark:bg-orange-900/50 rounded-full">
                <Flame className={`w-8 h-8 ${streak > 0 ? 'text-orange-500 animate-pulse' : 'text-slate-400'}`} />
              </div>
            </div>
            <div className="mt-8">
              <div className="text-5xl font-black text-slate-900 dark:text-white">{streak} <span className="text-2xl text-slate-500 font-medium">days</span></div>
            </div>
          </GlassCard>

          {/* Daily Goal */}
          <GlassCard hoverEffect className="col-span-1 md:col-span-2 p-6">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-xl font-bold text-slate-800 dark:text-white">Daily Goal</h2>
              <Target className="w-6 h-6 text-blue-500" />
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-slate-700 dark:text-slate-300">Questions Completed</span>
                  <span className="text-blue-500 font-bold">{questionsCompleted} / {dailyGoal}</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5">
                  <div className="bg-blue-500 h-2.5 rounded-full transition-all duration-1000" style={{ width: `${progressPercent}%` }}></div>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Next Recommended Topic */}
          <GlassCard hoverEffect className="col-span-1 md:col-span-2 lg:col-span-3 p-6 flex items-center gap-6 cursor-pointer">
            <div className="w-24 h-24 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 flex flex-shrink-0 items-center justify-center">
              <BookOpen className="w-10 h-10 text-emerald-500" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-500 mb-1 block">Up Next</span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">基礎工程力學: 單位與向量</h3>
              <p className="text-slate-600 dark:text-slate-400">Continue from where you left off. Review your error book first.</p>
            </div>
          </GlassCard>

          {/* ELO / Rank */}
          <GlassCard hoverEffect className="col-span-1 p-6 flex flex-col items-center justify-center text-center">
            <Trophy className="w-12 h-12 text-yellow-500 mb-4" />
            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">Rank ELO</h3>
            <div className="text-3xl font-black text-slate-900 dark:text-white">{eloRank}</div>
            <span className="text-xs font-medium text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30 px-2 py-1 rounded-full mt-2">
              {eloRank > 1400 ? 'Top 15%' : eloRank > 1200 ? 'Top 50%' : 'Keep Going!'}
            </span>
          </GlassCard>

        </div>
      </div>
    </div>
  );
}
