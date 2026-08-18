'use client';
import { useStudentStore } from '@/lib/store/studentStore';
import { X, Flame, Download, CheckCircle2 } from 'lucide-react';
import MathText from '@/components/MathText';

interface MistakeNotebookModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MistakeNotebookModal({ isOpen, onClose }: MistakeNotebookModalProps) {
  const { mistakeCards } = useStudentStore();
  
  if (!isOpen) return null;

  const getReasonLabel = (r: string) => {
    const map: Record<string, string> = { K: '知識盲點', F: '公式錯', U: '單位錯', G: '圖看錯', A: '算錯', R: '讀錯題', T: '時間失誤', X: '爭議' };
    return map[r] || r;
  };

  const dueCards = mistakeCards.filter(c => new Date(c.nextReviewAt) <= new Date());

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-md animate-fade-in sm:p-6 print:absolute print:inset-0 print:bg-white print:p-0">
      <div className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-[2rem] bg-slate-50 shadow-2xl dark:bg-slate-950 print:max-h-none print:rounded-none print:shadow-none">
        
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 print:hidden">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-rose-100 text-rose-600 dark:bg-rose-900/40 dark:text-rose-400">
              <Flame className="size-5" />
            </div>
            <div>
              <h2 className="font-serif text-xl font-bold text-slate-900 dark:text-white">錯題 X 光筆記本</h2>
              <p className="text-xs text-slate-500">1/7/21 天 Leitner 間隔複習系統</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={handlePrint} className="flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-bold text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">
              <Download className="size-4" /> 導出 PDF
            </button>
            <button onClick={onClose} className="rounded-xl p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300">
              <X className="size-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 print:p-4">
          <div className="hidden print:block mb-8 border-b-2 border-slate-900 pb-4">
            <h1 className="text-3xl font-bold">錯題 X 光筆記本 (A4 列印版)</h1>
            <p className="text-sm mt-2 text-slate-600">考前衝刺專用 · 收錄最常跌倒的盲點</p>
          </div>

          {mistakeCards.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <CheckCircle2 className="size-16 text-emerald-400 opacity-50" />
              <p className="mt-4 font-bold text-slate-900 dark:text-white">目前沒有錯題！</p>
              <p className="text-sm text-slate-500">繼續保持，穩穩拿下每一分。</p>
            </div>
          ) : (
            <div className="space-y-6">
              {dueCards.length > 0 && (
                <div className="rounded-xl bg-rose-50 border border-rose-200 p-4 dark:bg-rose-950/20 dark:border-rose-900/50 print:hidden">
                  <h3 className="font-bold text-rose-800 dark:text-rose-300 mb-2">🚨 今日待複習 ({dueCards.length})</h3>
                  <p className="text-sm text-rose-600 dark:text-rose-400">這些是你之前錯過，且剛好遺忘曲線到期的題目。請在「歷屆模擬」中重新挑戰它們。</p>
                </div>
              )}

              <div className="grid gap-4 sm:grid-cols-2 print:grid-cols-1 print:gap-6">
                {mistakeCards.map((card) => (
                  <div key={card.id} className="flex flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-xs dark:border-slate-800 dark:bg-slate-900 print:break-inside-avoid print:border-slate-300">
                    <div className="flex justify-between items-start mb-3 border-b border-slate-100 pb-2 dark:border-slate-800">
                      <span className="rounded bg-rose-100 px-2 py-0.5 text-[10px] font-bold text-rose-700 dark:bg-rose-900/40 dark:text-rose-300">
                        錯因: {getReasonLabel(card.reason)}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        Stage {card.reviewStage}/3
                      </span>
                    </div>
                    
                    <div className="flex-1 space-y-3 text-sm">
                      <div className="text-rose-900 dark:text-rose-200 bg-rose-50/50 dark:bg-rose-950/20 p-2 rounded print:bg-transparent">
                        <span className="font-bold text-xs text-rose-500 block mb-1">❌ 當時盲點</span>
                        <MathText content={card.prompt} />
                      </div>
                      <div className="text-emerald-900 dark:text-emerald-200 bg-emerald-50/50 dark:bg-emerald-950/20 p-2 rounded print:bg-transparent">
                        <span className="font-bold text-xs text-emerald-500 block mb-1">✅ 修正認知</span>
                        <MathText content={card.correction} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
