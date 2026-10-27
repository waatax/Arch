'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { Gauge } from 'lucide-react';
import { clsx } from 'clsx';
import type { CourseSummary, SemesterInfo } from '@/data/learnPath/types';
import { EXAM_LATEST_YEAR, EXAM_POOLS, EXAM_SUBJECTS, latestStandard } from '@/data/learnPath/examBank';
import {
  TIERS,
  certifiedTier,
  confidenceLabel,
  estimatePercentile,
  percentileToScore,
  tierForPercentile,
  tierRank,
  type Bands,
} from '@/lib/learn/examAlign';
import type { CertRecord } from '@/lib/store/learnStore';

/** 每題（以 id 為鍵）的考科與能力組答對率 */
function useItemIndex() {
  return useMemo(() => {
    const map = new Map<string, { exam: string; bands: Bands }>();
    for (const pool of Object.values(EXAM_POOLS)) for (const it of pool.units.flat()) map.set(it.id, { exam: pool.exam, bands: it.bands });
    return map;
  }, []);
}

/**
 * 統測能力儀表板：合併所有檢定的首答紀錄，以官方能力組答對率估計每一考科的百分位，
 * 再用最新年度三標換算預估分數；下方是各學期統測相關課程的徽章圖鑑。
 */
export default function ExamDashboard({
  hydrated,
  examResp,
  certs,
  courses,
  semesters,
}: {
  hydrated: boolean;
  examResp: Record<string, 0 | 1>;
  certs: Record<string, CertRecord>;
  courses: CourseSummary[];
  semesters: SemesterInfo[];
}) {
  const index = useItemIndex();
  const rows = EXAM_SUBJECTS.map(({ exam, label }) => {
    const responses = hydrated
      ? Object.entries(examResp).flatMap(([id, v]) => {
          const meta = index.get(id);
          return meta && meta.exam === exam ? [{ bands: meta.bands, correct: v === 1 }] : [];
        })
      : [];
    const est = estimatePercentile(responses);
    const std = latestStandard(exam);
    return { exam, label, est, std, score: est ? percentileToScore(est.percentile, std) : null };
  });

  const examCourses = courses.filter((c) => EXAM_POOLS[c.key]);

  return (
    <section className="mt-10" aria-labelledby="exam-dashboard">
      <h2 id="exam-dashboard" className="mb-1 flex items-center gap-2 text-lg font-black text-slate-900 dark:text-white">
        <Gauge className="h-5 w-5 text-indigo-500" aria-hidden /> 統測能力儀表板
      </h2>
      <p className="mb-3 text-xs leading-relaxed text-slate-500">
        依你在「統測對標檢定」的首答，用測驗中心公布的每題能力組答對率估計全體考生百分位，再以 {EXAM_LATEST_YEAR} 年三標換算分數。題數越多越準。
      </p>
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {rows.map((r) => {
          // 題數少時只說「附近」、不顯示徽章；足夠時用有 70% 把握的等級
          const few = !!r.est && r.est.n < 25;
          const tier = r.est ? (few ? tierForPercentile(r.est.percentile) : certifiedTier(r.est)) : null;
          const t = TIERS.find((x) => x.id === tier);
          return (
            <div key={r.exam} className="rounded-2xl border-2 border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900">
              <p className="text-sm font-black text-slate-800 dark:text-slate-100">{r.label}</p>
              {r.est ? (
                <>
                  <p className="mt-1 text-2xl font-black tabular-nums text-indigo-600 dark:text-indigo-300">
                    約 {r.score} 分{' '}
                    <span className="text-base">
                      {few ? `（約在${t ? t.label : '低標以下'}附近）` : t ? `${t.emoji}${t.label}` : '低標以下'}
                    </span>
                  </p>
                  <p className="text-[11px] text-slate-500">
                    第 {r.est.percentile} 百分位（{r.est.lo}～{r.est.hi}）· {r.est.n} 題 · 可信度{confidenceLabel(r.est.n)}{few && '，題數少，僅供參考'}
                  </p>
                </>
              ) : (
                <p className="mt-1 text-sm text-slate-400">尚未作答檢定</p>
              )}
              <p className="mt-1 text-[11px] text-slate-400">
                {EXAM_LATEST_YEAR} 年：後標 {r.std.low}／均標 {r.std.mid}／前標 {r.std.top}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-4 overflow-x-auto rounded-2xl border-2 border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900">
        <p className="mb-2 text-xs font-black tracking-widest text-slate-400">檢定徽章圖鑑（每階段 🥉低標 → 🥈中標 → 🥇高標）</p>
        <table className="w-full min-w-[520px] text-left text-sm">
          <tbody>
            {semesters.map((sem) => {
              const list = examCourses.filter((c) => c.semester === sem.id);
              if (!list.length) return null;
              return (
                <tr key={sem.id} className="border-t border-slate-100 align-top dark:border-slate-800">
                  <th scope="row" className="w-16 py-2 pr-2 text-xs font-black text-slate-500">
                    {sem.label}
                  </th>
                  <td className="py-1.5">
                    <ul className="flex flex-wrap gap-1.5">
                      {list.map((c) => {
                        const tier = hydrated ? certs[c.id]?.tier ?? null : null;
                        const rank = tierRank(tier);
                        return (
                          <li key={c.id}>
                            <Link
                              href={`/learn/${c.semester}/${c.key}/`}
                              className={clsx(
                                'inline-flex items-center gap-1 rounded-xl border px-2 py-1 text-xs font-bold',
                                rank ? 'border-amber-300 bg-amber-50 text-amber-900 dark:border-amber-700 dark:bg-amber-950/40 dark:text-amber-100' : 'border-slate-200 text-slate-500 dark:border-slate-700',
                              )}
                              title={rank ? `已達${TIERS[rank - 1].label}` : '尚未取得徽章'}
                            >
                              {c.shortTitle}
                              <span aria-hidden>{rank ? TIERS[rank - 1].emoji : '·'}</span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
