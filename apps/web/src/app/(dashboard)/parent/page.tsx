'use client';

import React from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Activity, BookOpen, AlertCircle } from 'lucide-react';

const accuracyData = [
  { name: 'Mon', accuracy: 65, avg: 60 },
  { name: 'Tue', accuracy: 70, avg: 62 },
  { name: 'Wed', accuracy: 68, avg: 65 },
  { name: 'Thu', accuracy: 75, avg: 68 },
  { name: 'Fri', accuracy: 82, avg: 70 },
  { name: 'Sat', accuracy: 85, avg: 72 },
  { name: 'Sun', accuracy: 88, avg: 75 },
];

export default function ParentDashboard() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10">
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
            Parental Overview
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            Monitor learning progress and mock exam performance.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <GlassCard className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-full">
                <Activity className="text-blue-500" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Weekly Active Time</p>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">12h 45m</h3>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald-100 dark:bg-emerald-900/50 rounded-full">
                <BookOpen className="text-emerald-500" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Topics Completed</p>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">8 / 99</h3>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6 border-red-500/20 bg-red-50/50 dark:bg-red-950/20">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-red-100 dark:bg-red-900/50 rounded-full">
                <AlertCircle className="text-red-500" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Struggling Areas</p>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">基礎工程力學</h3>
                <span className="text-xs text-red-500">Requires review</span>
              </div>
            </div>
          </GlassCard>
        </div>

        <GlassCard className="p-6 md:p-8">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Accuracy Trend (Past 7 Days)</h2>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={accuracyData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorAccuracy" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.2} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} dx={-10} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="accuracy" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorAccuracy)" />
                <Line type="monotone" dataKey="avg" stroke="#94a3b8" strokeDasharray="5 5" strokeWidth={2} dot={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
