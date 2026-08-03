import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-(--color-paper-100) border-b border-(--color-concrete-300) sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-2xl font-bold text-(--color-ink-900)">Arch</span>
          <span className="text-xs bg-(--color-teal-700) text-(--color-paper-50) px-2 py-0.5 rounded font-mono">v3.0</span>
        </Link>

        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="/curriculum" className="text-(--color-ink-650) hover:text-(--color-teal-700) transition-colors">
            課程總覽
          </Link>
          <Link href="/cases" className="text-(--color-ink-650) hover:text-(--color-teal-700) transition-colors">
            案例實驗室
          </Link>
          <Link href="/subjects/mechanics" className="text-(--color-ink-650) hover:text-(--color-teal-700) transition-colors">
            工程力學
          </Link>
          <Link href="/subjects/drafting" className="text-(--color-ink-650) hover:text-(--color-teal-700) transition-colors">
            製圖實習
          </Link>
          <a
            href="https://github.com/waatax/Arch"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block px-3 py-1.5 border border-(--color-ink-900) rounded hover:bg-(--color-ink-900) hover:text-(--color-paper-50) transition-colors text-xs font-mono"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
