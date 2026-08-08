'use client';

import { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { href: '/', label: '學習首頁' },
  { href: '/curriculum', label: '完整課程' },
  { href: '/practice', label: '模擬練習' },
  { href: '/cases', label: '建築案例' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <nav className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/95 backdrop-blur-md" aria-label="主要導覽">
    <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-2 px-4 sm:px-6 lg:px-8">
      <Link href="/" className="flex items-center gap-2" aria-label="Arch 學習首頁"><span className="font-serif text-2xl font-bold text-slate-900 dark:text-white">Arch</span><span className="rounded-full bg-blue-600 dark:bg-blue-500 px-2 py-0.5 text-[10px] font-mono tracking-wider text-white">建築學習</span></Link>
      <div className="hidden items-center gap-1 md:flex">{navLinks.map((link) => <Link key={link.href} href={link.href} className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 transition hover:bg-blue-600 dark:bg-blue-500/5 hover:text-blue-600 dark:text-blue-400">{link.label}</Link>)}<div className="mx-2 h-6 w-px bg-(--color-concrete-300)" /><ThemeToggle /></div>
      <div className="flex items-center gap-1 md:hidden"><ThemeToggle /><button onClick={() => setOpen(!open)} className="flex size-11 items-center justify-center rounded-lg text-xl text-slate-900 dark:text-white" aria-label={open ? '關閉選單' : '開啟選單'} aria-expanded={open}>{open ? '×' : '☰'}</button></div>
    </div>
    <div className={`overflow-hidden border-t border-slate-200 dark:border-slate-800/60 transition-all md:hidden ${open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}><div className="space-y-1 px-4 py-3">{navLinks.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="flex min-h-11 items-center rounded-lg px-4 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-blue-600 dark:bg-blue-500/5 hover:text-blue-600 dark:text-blue-400">{link.label}</Link>)}</div></div>
  </nav>;
}
