'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Compass, BookOpen, PenTool, Search } from 'lucide-react';
import { triggerHaptic } from '@/lib/haptics';

interface NavItem {
  href?: string;
  label: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  isAction?: boolean;
}

const navItems: NavItem[] = [
  { href: '/', label: '首頁', icon: Home },
  { href: '/pathway', label: '建築之路', icon: Compass },
  { href: '/curriculum', label: '課程', icon: BookOpen },
  { href: '/practice', label: '模擬', icon: PenTool },
  { label: '搜尋', icon: Search, isAction: true },
];

export default function IOSMobileTabBar() {
  const pathname = usePathname();

  const handleSearchClick = () => {
    triggerHaptic('medium');
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('arch:open-search'));
    }
  };

  return (
    <div className="fixed bottom-3 inset-x-0 z-40 px-3 md:hidden pointer-events-none transition-all duration-300">
      <nav
        aria-label="行動端快速導覽"
        className="pointer-events-auto mx-auto max-w-sm rounded-full bg-white/85 dark:bg-slate-900/85 backdrop-blur-2xl border border-slate-200/80 dark:border-white/15 shadow-2xl shadow-black/10 px-2 py-1.5 flex items-center justify-around"
      >
        {navItems.map((item) => {
          const Icon = item.icon;

          if (item.isAction) {
            return (
              <button
                key="search-btn"
                type="button"
                onClick={handleSearchClick}
                className="flex flex-col items-center justify-center py-1 px-3 rounded-full text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 active:scale-90 transition-transform cursor-pointer"
                aria-label="開啟全域搜尋 (Omnibar)"
              >
                <div className="p-1 rounded-full bg-slate-100 dark:bg-slate-800">
                  <Icon className="size-4 text-blue-600 dark:text-blue-400" strokeWidth={2.2} />
                </div>
                <span className="text-[10px] font-medium tracking-tight mt-0.5">{item.label}</span>
              </button>
            );
          }

          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href!}
              onClick={() => triggerHaptic('selection')}
              className={`flex flex-col items-center justify-center py-1 px-3 rounded-full active:scale-90 transition-all duration-200 ${
                isActive
                  ? 'text-blue-700 dark:text-blue-400 font-bold'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <div
                className={`p-1 rounded-full transition-colors ${
                  isActive
                    ? 'bg-blue-600/10 dark:bg-blue-400/15 text-blue-700 dark:text-blue-400'
                    : 'text-slate-500 dark:text-slate-400'
                }`}
              >
                <Icon className="size-4" strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className="text-[10px] font-medium tracking-tight mt-0.5">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
