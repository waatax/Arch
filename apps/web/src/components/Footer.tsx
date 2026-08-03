export default function Footer() {
  return (
    <footer className="w-full bg-(--color-paper-100) border-t border-(--color-concrete-300) py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-(--color-ink-650)">
        <div>
          <p className="font-serif font-semibold text-(--color-ink-900)">Arch — 台灣高工建築科學習、建築素養與志向養成平台</p>
          <p className="text-xs mt-1">Single Source of Truth · 開放公共學習資料庫</p>
        </div>
        <div className="flex gap-6 text-xs font-mono">
          <a href="https://github.com/waatax/Arch" target="_blank" rel="noopener noreferrer" className="hover:underline">
            waatax/Arch
          </a>
          <span>108課綱對齊</span>
          <span>統測四考科</span>
        </div>
      </div>
    </footer>
  );
}
