'use client';

import { useState } from 'react';

interface Lens {
  id: string;
  name: string;
  question: string;
  content: string;
  skillLink: { label: string; href: string };
}

interface LensSwitcherProps {
  lenses: Lens[];
}

export default function LensSwitcher({ lenses }: LensSwitcherProps) {
  const [activeId, setActiveId] = useState(lenses[0]?.id || '');

  const activeLens = lenses.find((l) => l.id === activeId) || lenses[0];

  return (
    <div className="w-full bg-(--color-paper-50) border border-(--color-concrete-300) rounded-xl p-4 sm:p-6 my-6 sm:my-8">
      <h3 className="text-xl font-bold font-serif text-(--color-ink-900) mb-2">
        多鏡頭建築閱讀法
      </h3>
      <p className="text-sm text-(--color-ink-650) mb-6">
        切換不同觀察鏡頭，從多元視角拆解建築設計與工程細節：
      </p>

      {/* Lens Buttons */}
      <div className="mobile-scroll -mx-1 flex snap-x gap-2 overflow-x-auto px-1 pb-3 mb-3" role="tablist" aria-label="建築閱讀鏡頭">
        {lenses.map((lens) => (
          <button
            key={lens.id}
            onClick={() => setActiveId(lens.id)}
            className={`min-h-11 shrink-0 snap-start px-4 py-2 text-sm rounded-lg border transition-all ${
              activeId === lens.id
                ? 'bg-(--color-teal-700) text-(--color-paper-50) border-(--color-teal-700) font-medium shadow-sm'
                : 'bg-(--color-paper-100) text-(--color-ink-900) border-(--color-concrete-300) hover:border-(--color-teal-700)'
            }`}
            role="tab"
            aria-selected={activeId === lens.id}
          >
            {lens.name}
          </button>
        ))}
      </div>

      {/* Active Content */}
      {activeLens && (
        <div className="bg-(--color-paper-100) border border-(--color-concrete-300) rounded-lg p-4 sm:p-6" role="tabpanel">
          <h4 className="text-base font-bold text-(--color-brick-700) mb-2">
            核心思考：{activeLens.question}
          </h4>
          <p className="text-sm text-(--color-ink-900) leading-relaxed mb-4 whitespace-pre-line">
            {activeLens.content}
          </p>
          <div className="pt-3 border-t border-(--color-concrete-300)/60 flex flex-col min-[400px]:flex-row min-[400px]:justify-between min-[400px]:items-center gap-2 text-xs font-mono">
            <span className="text-(--color-ink-650)">對應技能節點</span>
            <a
              href={activeLens.skillLink.href}
              className="flex min-h-11 items-center text-(--color-teal-700) font-bold hover:underline"
            >
              {activeLens.skillLink.label} →
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
