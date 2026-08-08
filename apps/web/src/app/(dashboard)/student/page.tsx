import React from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { PomodoroTimer } from '@/components/quiz/PomodoroTimer';
import { Flame, Target, BookOpen, Trophy } from 'lucide-react';

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-6 md:p-12 relative overflow-hidden">
      {/* Background ambient glowing blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl mix-blend-multiply opacity-50 dark:opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl mix-blend-multiply opacity-50 dark:opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <header className="mb-10">
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
            Welcome back, Student
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            Let's crush today's vocational goals!
          </p>
        </header>

        {/* Bento Box Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {/* Streak Widget */}
          <GlassCard hoverEffect className="col-span-1 md:col-span-2 p-6 flex flex-col justify-between bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-500/20">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-bold text-slate-800 dark:text-white">Daily Streak</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">You're on fire!</p>
              </div>
              <div className="p-3 bg-orange-100 dark:bg-orange-900/50 rounded-full">
                <Flame className="w-8 h-8 text-orange-500" />
              </div>
            </div>
            <div className="mt-8">
              <div className="text-5xl font-black text-slate-900 dark:text-white">14 <span className="text-2xl text-slate-500 font-medium">days</span></div>
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
                  <span className="text-blue-500 font-bold">25 / 50</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5">
                  <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '50%' }}></div>
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
            <div className="text-3xl font-black text-slate-900 dark:text-white">1420</div>
            <span className="text-xs font-medium text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30 px-2 py-1 rounded-full mt-2">Top 15%</span>
          </GlassCard>

        </div>
      </div>
      
      {/* Global Pomodoro Widget */}
      <PomodoroTimer />
    </div>
  );
}
