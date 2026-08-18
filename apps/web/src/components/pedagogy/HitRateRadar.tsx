'use client';

interface HitRateRadarProps {
  hitRate?: 1 | 2 | 3 | 4 | 5;
  coveredCount?: number;
  gradeLevel?: 10 | 11 | 12;
}

export default function HitRateRadar({ hitRate = 3, coveredCount = 0, gradeLevel }: HitRateRadarProps) {
  const stars = '★'.repeat(hitRate) + '☆'.repeat(5 - hitRate);
  
  const getFrequencyLabel = (rate: number) => {
    switch (rate) {
      case 5:
        return { label: '統測頂級必考', desc: '近十年命題率 > 85%，每年必出 1~3 題，必須徹底精熟。', badgeColor: 'bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-200 border-rose-300 dark:border-rose-800' };
      case 4:
        return { label: '高頻命題核心', desc: '近十年命題率 60%~85%，土木建築群專業科目關鍵得分點。', badgeColor: 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-200 border-amber-300 dark:border-amber-800' };
      case 3:
        return { label: '常態基礎考點', desc: '歷屆標準題型，概念穩固即可快速拿分。', badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-200 border-blue-300 dark:border-blue-800' };
      case 2:
        return { label: '素養觀念延伸', desc: '跨單元整合與實務應用題，建立物理/工程直覺。', badgeColor: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-200 border-emerald-300 dark:border-emerald-800' };
      default:
        return { label: '先備銜接基底', desc: '銜接國中基礎與高階章節之基石概念。', badgeColor: 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700' };
    }
  };

  const info = getFrequencyLabel(hitRate);

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/70 p-4 sm:p-5 shadow-2xs backdrop-blur-xs transition-all">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                大數據考點雷達
              </span>
              <span className={`inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] font-bold ${info.badgeColor}`}>
                {info.label}
              </span>
              {gradeLevel && (
                <span className="rounded-md bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-[11px] font-mono font-bold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  高{gradeLevel === 10 ? '一' : gradeLevel === 11 ? '二' : '三'}
                </span>
              )}
            </div>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
              {info.desc}
            </p>
          </div>
        </div>

        <div className="flex sm:flex-col items-baseline sm:items-end justify-between sm:justify-center border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300">命題頻率：</span>
            <span className="hit-rate-star font-mono text-base font-bold tracking-widest" aria-label={`考點命中率 ${hitRate} 星`}>
              {stars}
            </span>
          </div>
          {coveredCount > 0 && (
            <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-0.5">
              已登錄 <strong className="text-indigo-600 dark:text-indigo-400">{coveredCount}</strong> 道真題
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
