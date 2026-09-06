'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BookMarked, HelpCircle, X, ExternalLink } from 'lucide-react';

interface Step0TooltipProps {
  prerequisites?: string[];
  subjectSlug?: string;
}

function getPrerequisiteLink(req: string): string | null {
  const text = req.toLowerCase();
  if (text.includes('1200') || (text.includes('國中') && text.includes('單字'))) {
    return '/prerequisites/english/vocab-1200';
  }
  if (text.includes('詞性') || text.includes('八大詞性') || text.includes('名詞、動詞')) {
    return '/prerequisites/english/parts-of-speech';
  }
  if (text.includes('音標') || text.includes('字典') || text.includes('詞條')) {
    return '/prerequisites/english/phonetics-dictionary';
  }
  if (text.includes('時態') || text.includes('動詞三態') || text.includes('被動') || text.includes('第三人稱單數')) {
    return '/prerequisites/english/basic-tenses-passive';
  }
  if (text.includes('子句') || text.includes('連接詞') || text.includes('關係代名詞') || text.includes('複合句')) {
    return '/prerequisites/english/complex-sentences';
  }
  return null;
}

export default function Step0Tooltip({ prerequisites, subjectSlug }: Step0TooltipProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!prerequisites || prerequisites.length === 0) return null;

  const isEnglish = subjectSlug === 'english';

  return (
    <div className="rounded-2xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/40 dark:bg-amber-950/20 p-4 transition-all">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BookMarked className="size-4 text-amber-700 dark:text-amber-400 shrink-0" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300">
            Step-0 零痛先備跳板 (Prerequisites)
          </span>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1 text-[11px] font-bold text-amber-800 dark:text-amber-300 hover:text-amber-950 dark:hover:text-amber-100 transition-colors cursor-pointer"
          aria-expanded={isOpen}
          aria-label={isOpen ? '收合先備知識' : '展開先備知識'}
        >
          <HelpCircle className="size-3.5" />
          <span>{isOpen ? '收合' : '30秒先備檢核'}</span>
        </button>
      </div>

      <div className="mt-2 flex flex-wrap gap-1.5">
        {prerequisites.map((req, idx) => {
          const link = getPrerequisiteLink(req);
          if (link) {
            return (
              <Link
                key={idx}
                href={link}
                className="inline-flex items-center gap-1.5 rounded-lg bg-amber-100/80 hover:bg-amber-200/90 dark:bg-amber-900/40 dark:hover:bg-amber-800/60 px-2.5 py-1 text-xs font-semibold text-amber-900 dark:text-amber-200 border border-amber-300/80 dark:border-amber-700/80 transition-all shadow-xs group cursor-pointer"
                title={`前往先備微課：${req}`}
              >
                <span>✓ {req}</span>
                <ExternalLink className="size-3 text-amber-700 dark:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            );
          }
          return (
            <span
              key={idx}
              className="inline-flex items-center rounded-lg bg-amber-100/70 dark:bg-amber-900/40 px-2.5 py-1 text-xs font-medium text-amber-900 dark:text-amber-200 border border-amber-200/80 dark:border-amber-800/60"
            >
              ✓ {req}
            </span>
          );
        })}
      </div>

      {isOpen && (
        <div className="mt-3 rounded-xl border border-amber-300 dark:border-amber-800 bg-white dark:bg-slate-900 p-3.5 text-xs text-slate-700 dark:text-slate-300 space-y-2 shadow-sm animate-fade-in-up">
          <div className="flex items-center justify-between font-bold text-amber-900 dark:text-amber-200">
            <span>{isEnglish ? '💡 英語文銜接先備提醒' : '💡 國中與基礎銜接提醒'}</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              aria-label="關閉"
            >
              <X className="size-3.5" />
            </button>
          </div>
          <p className="leading-relaxed">
            {isEnglish ? (
              <>
                如果在閱讀本章時感到吃力，90% 的原因在於<strong>國中 1200 基礎單字</strong>、<strong>八大詞性語法定位</strong>、<strong>基本時態與被動語態</strong>，或<strong>主從複合句型</strong>尚未建立直覺反射。點擊上方跳板徽章進行 5 分鐘零痛微課，即可無痛吸收本章核心！
              </>
            ) : (
              '如果在閱讀本章時感到計算吃力，90% 的原因是上述先備公式（如直角三角形三角比或單位因次換算）尚未完全反射。建議先複習上述基礎概念，即可無痛吸收本章核心！'
            )}
          </p>
        </div>
      )}
    </div>
  );
}
