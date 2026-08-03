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
    <div className="w-full bg-(--color-paper-50) border border-(--color-concrete-300) rounded-xl p-6 my-8">
      <h3 className="text-xl font-bold font-serif text-(--color-ink-900) mb-2">
        六鏡頭建築閱讀法
      </h3>
      <p className="text-sm text-(--color-ink-650) mb-6">
        切換不同觀察鏡頭，從多元視角拆解建築設計與工程細節：
      </p>

      {/* Lens Buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        {lenses.map((lens) => (
          <button
            key={lens.id}
            onClick={() => setActiveId(lens.id)}
            className={`px-4 py-2 text-sm rounded-lg border transition-all ${
              activeId === lens.id
                ? 'bg-(--color-teal-700) text-(--color-paper-50) border-(--color-teal-700) font-medium shadow-sm'
                : 'bg-(--color-paper-100) text-(--color-ink-900) border-(--color-concrete-300) hover:border-(--color-teal-700)'
            }`}
          >
            {lens.name}
          </button>
        ))}
      </div>

      {/* Active Content */}
      {activeLens && (
        <div className="bg-(--color-paper-100) border border-(--color-concrete-300) rounded-lg p-6">
          <h4 className="text-base font-bold text-(--color-brick-700) mb-2">
            核心思考：{activeLens.question}
          </h4>
          <p className="text-sm text-(--color-ink-900) leading-relaxed mb-4 whitespace-pre-line">
            {activeLens.content}
          </p>
          <div className="pt-3 border-t border-(--color-concrete-300)/60 flex justify-between items-center text-xs font-mono">
            <span className="text-(--color-ink-650)">對應技能節點</span>
            <a
              href={activeLens.skillLink.href}
              className="text-(--color-teal-700) font-bold hover:underline"
            >
              {activeLens.skillLink.label} →
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
