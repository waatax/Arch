'use client';

import { useState } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { href: '/', label: '今日入口' },
  { href: '/curriculum', label: '課程總覽' },
  { href: '/cases', label: '案例實驗室' },
  { href: '/subjects/materials', label: '統測練習' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-(--color-paper-100)/95 backdrop-blur-md border-b border-(--color-concrete-300) sticky top-0 z-50 transition-all duration-300 hover:shadow-sm">
      <div className="max-w-7xl mx-auto px-3 min-[360px]:px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2">
        {/* Logo */}
        <Link href="/" className="flex min-w-0 items-center gap-2 group" aria-label="Arch 首頁">
          <span className="font-serif text-2xl font-bold text-(--color-ink-900) tracking-tight group-hover:text-(--color-teal-700) transition-colors duration-200">
            Arch
          </span>
          <span className="hidden min-[350px]:inline text-[10px] bg-(--color-teal-700) text-(--color-paper-50) px-2 py-0.5 rounded-full font-mono tracking-wider">
            V4.0
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-3.5 py-2 text-sm font-medium text-(--color-ink-650) hover:text-(--color-teal-700) transition-colors duration-200 rounded-lg hover:bg-(--color-teal-700)/5 group"
            >
              {link.label}
              <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-(--color-teal-700) rounded-full transition-all duration-300 group-hover:w-4" />
            </Link>
          ))}

          {/* Divider */}
          <div className="w-px h-6 bg-(--color-concrete-300) mx-2" />

          {/* Theme & Font Controls */}
          <ThemeToggle />
        </div>

        {/* Mobile Right Side */}
        <div className="flex shrink-0 md:hidden items-center gap-1 min-[360px]:gap-2">
          <ThemeToggle />
          
          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="relative w-11 h-11 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-(--color-concrete-300)/40 transition-colors"
            aria-label={open ? '關閉導覽選單' : '開啟導覽選單'}
            aria-expanded={open}
          >
            <span
              className={`block w-5 h-[2px] bg-(--color-ink-900) rounded-full transition-all duration-300 ${
                open ? 'rotate-45 translate-y-[5px]' : ''
              }`}
            />
            <span
              className={`block w-5 h-[2px] bg-(--color-ink-900) rounded-full transition-all duration-300 ${
                open ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-[2px] bg-(--color-ink-900) rounded-full transition-all duration-300 ${
                open ? '-rotate-45 -translate-y-[5px]' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="safe-bottom px-3 min-[360px]:px-4 pb-4 space-y-1 border-t border-(--color-concrete-300)/60">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex min-h-11 items-center px-4 py-2.5 text-sm font-medium text-(--color-ink-650) hover:text-(--color-teal-700) hover:bg-(--color-teal-700)/5 rounded-lg transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
