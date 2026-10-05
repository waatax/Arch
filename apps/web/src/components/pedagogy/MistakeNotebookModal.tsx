'use client';

import { useState } from 'react';
import { useStudentStore, type MistakeReason } from '@/lib/store/studentStore';
import { X, Flame, Download, CheckCircle2, Trash2, ArrowUpRight, Check, RotateCcw } from 'lucide-react';
import MathText from '@/components/MathText';
import Link from 'next/link';

interface MistakeNotebookModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MistakeNotebookModal({ isOpen, onClose }: MistakeNotebookModalProps) {
  const { mistakeCards, reviewMistakeCard, removeMistakeCard } = useStudentStore();
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'due' | MistakeReason>('all');

  if (!isOpen) return null;

  const getReasonLabel = (r: string) => {
    const map: Record<string, string> = {
      K: '知識盲點',
      F: '公式用錯',
      U: '單位換算',
      G: '圖面看錯',
      A: '計算失誤',
      R: '審題盲點',
      T: '時間失誤',
      X: '爭議題型',
    };
    return map[r] || r;
  };

  const now = new Date();
  const dueCards = mistakeCards.filter((c) => new Date(c.nextReviewAt) <= now);

  const filteredCards = mistakeCards.filter((card) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'due') return new Date(card.nextReviewAt) <= now;
    return card.reason === selectedFilter;
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-md animate-fade-in sm:p-6 print:absolute print:inset-0 print:bg-white print:p-0">
      <div className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-[2rem] bg-slate-50 shadow-2xl dark:bg-slate-950 print:max-h-none print:rounded-none print:shadow-none border border-slate-200 dark:border-slate-800">
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 print:hidden">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-rose-100 text-rose-600 dark:bg-rose-900/40 dark:text-rose-400">
              <Flame className="size-5" />
            </div>
            <div>
              <h2 className="font-serif text-xl font-bold text-slate-900 dark:text-white">錯題 X 光筆記本</h2>
              <p className="text-xs text-slate-500">1 / 7 / 21 天 Leitner 間隔防遺忘系統 · 共收錄 {mistakeCards.length} 題</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-bold text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 cursor-pointer"
            >
              <Download className="size-4" /> 導出列印
            </button>
            <button
              onClick={onClose}
              className="rounded-xl p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300 cursor-pointer"
            >
              <X className="size-5" />
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex shrink-0 items-center gap-1.5 overflow-x-auto border-b border-slate-200 bg-white/70 px-5 py-2.5 dark:border-slate-800 dark:bg-slate-900/70 print:hidden text-xs font-mono">
          <button
            type="button"
            onClick={() => setSelectedFilter('all')}
            className={`rounded-lg px-2.5 py-1 font-bold transition-colors cursor-pointer ${
              selectedFilter === 'all'
                ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
            }`}
          >
            全部 ({mistakeCards.length})
          </button>
          <button
            type="button"
            onClick={() => setSelectedFilter('due')}
            className={`flex items-center gap-1 rounded-lg px-2.5 py-1 font-bold transition-colors cursor-pointer ${
              selectedFilter === 'due'
                ? 'bg-rose-600 text-white'
                : 'text-rose-600 hover:bg-rose-50 dark:text-rose-400 dark:hover:bg-rose-950/40'
            }`}
          >
            <span>今日到期</span>
            <span className="rounded-full bg-rose-100 dark:bg-rose-900/60 px-1.5 py-0.2 text-[10px] text-rose-700 dark:text-rose-300 font-bold">
              {dueCards.length}
            </span>
          </button>
          {(['K', 'F', 'U', 'G', 'A', 'R'] as const).map((reason) => {
            const count = mistakeCards.filter((c) => c.reason === reason).length;
            if (count === 0 && selectedFilter !== reason) return null;
            return (
              <button
                key={reason}
                type="button"
                onClick={() => setSelectedFilter(reason)}
                className={`rounded-lg px-2.5 py-1 font-medium transition-colors cursor-pointer ${
                  selectedFilter === reason
                    ? 'bg-blue-600 text-white font-bold'
                    : 'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
                }`}
              >
                {getReasonLabel(reason)} ({count})
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 print:p-4">
          <div className="hidden print:block mb-8 border-b-2 border-slate-900 pb-4">
            <h1 className="text-3xl font-bold">錯題 X 光筆記本 (A4 列印版)</h1>
            <p className="text-sm mt-2 text-slate-600">考前衝刺專用 · 收錄最常跌倒的盲點</p>
          </div>

          {filteredCards.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <CheckCircle2 className="size-16 text-emerald-400 opacity-50" />
              <p className="mt-4 font-bold text-slate-900 dark:text-white">此分類目前沒有錯題！</p>
              <p className="text-sm text-slate-500">繼續保持，穩穩拿下每一分。</p>
            </div>
          ) : (
            <div className="space-y-6">
              {selectedFilter === 'due' && dueCards.length > 0 && (
                <div className="rounded-xl bg-rose-50 border border-rose-200 p-4 dark:bg-rose-950/20 dark:border-rose-900/50 print:hidden">
                  <h3 className="font-bold text-rose-800 dark:text-rose-300 mb-1">🚨 今日到期複習 ({dueCards.length})</h3>
                  <p className="text-xs text-rose-600 dark:text-rose-400">
                    這些題目剛好到達遺忘曲線週期。核對記憶後，點擊下方「已記住」推進到下一個間隔，或「需重測」重新循環。
                  </p>
                </div>
              )}

              <div className="grid gap-4 sm:grid-cols-2 print:grid-cols-1 print:gap-6">
                {filteredCards.map((card) => {
                  const isDue = new Date(card.nextReviewAt) <= now;
                  return (
                    <div
                      key={card.id}
                      className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-xs dark:border-slate-800 dark:bg-slate-900 print:break-inside-avoid print:border-slate-300 space-y-3"
                    >
                      <div className="flex justify-between items-center border-b border-slate-100 pb-2 dark:border-slate-800 text-xs">
                        <div className="flex items-center gap-1.5">
                          <span className="rounded-md bg-rose-100 dark:bg-rose-900/50 px-2 py-0.5 text-[11px] font-bold text-rose-700 dark:text-rose-300">
                            {getReasonLabel(card.reason)}
                          </span>
                          {card.subject && (
                            <span className="text-[10px] font-mono text-slate-400">
                              {card.subject} {card.topic ? `· ${card.topic}` : ''}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${isDue ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300' : 'text-slate-400'}`}>
                            Stage {card.reviewStage}/3 {isDue ? '(待複習)' : ''}
                          </span>
                          <button
                            type="button"
                            onClick={() => removeMistakeCard(card.id)}
                            className="text-slate-300 hover:text-rose-500 transition-colors p-1"
                            title="從錯題本刪除"
                          >
                            <Trash2 className="size-3.5" />
                          </button>
                        </div>
                      </div>

                      <div className="flex-1 space-y-2.5 text-xs sm:text-sm">
                        <div className="text-rose-900 dark:text-rose-200 bg-rose-50/60 dark:bg-rose-950/30 p-3 rounded-xl border border-rose-100 dark:border-rose-900/30">
                          <span className="font-bold text-[11px] font-mono text-rose-600 block mb-1">❌ 當時盲點／誤選</span>
                          <MathText content={card.prompt} />
                          {card.userChoice && (
                            <span className="block mt-1 font-mono text-[11px] text-rose-500 font-bold">
                              當時作答：{card.userChoice}
                            </span>
                          )}
                        </div>

                        <div className="text-emerald-950 dark:text-emerald-200 bg-emerald-50/60 dark:bg-emerald-950/30 p-3 rounded-xl border border-emerald-100 dark:border-emerald-900/30">
                          <span className="font-bold text-[11px] font-mono text-emerald-600 block mb-1">✅ 修正認知與正解</span>
                          <MathText content={card.correction} />
                          {card.correctAnswer && (
                            <span className="block mt-1 font-mono text-[11px] text-emerald-600 font-bold">
                              官方正解：{card.correctAnswer}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Action Bar */}
                      <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-2.5 text-xs print:hidden">
                        {card.lessonRoute ? (
                          <Link
                            href={card.lessonRoute}
                            onClick={onClose}
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 dark:text-blue-400 hover:underline"
                          >
                            <span>回到章節精講</span>
                            <ArrowUpRight className="size-3" />
                          </Link>
                        ) : (
                          <span />
                        )}

                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => reviewMistakeCard(card.id, false)}
                            className="flex items-center gap-1 px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700 text-[11px] font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                            title="還不熟，重設為 Stage 0"
                          >
                            <RotateCcw className="size-3 text-amber-500" />
                            重置
                          </button>
                          <button
                            type="button"
                            onClick={() => reviewMistakeCard(card.id, true)}
                            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold transition-colors cursor-pointer shadow-2xs"
                            title="記住了！推進下一階段"
                          >
                            <Check className="size-3" />
                            已記住
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
