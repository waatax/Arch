'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Award, CheckCircle2, Gift, Info, RotateCcw, Snowflake, Target, Trophy } from 'lucide-react';
import { clsx } from 'clsx';
import type { CourseSummary, SemesterId, SemesterInfo } from '@/data/learnPath/types';
import {
  ACHIEVEMENTS,
  EMPTY_DAY,
  FREEZE_PRICE,
  MAX_FREEZES,
  WEEK_TIERS,
  addDaysKey,
  dailyQuests,
  displayStreak,
  localDateKey,
  questProgress,
  tierFor,
  unlockedAchievements,
  weekStartKey,
  weekXp,
} from '@/lib/learn/engine';
import { todayStats, useLearnHydration, useLearnStore } from '@/lib/store/learnStore';
import StatsBar from './StatsBar';
import { COURSE_COLORS } from './theme';

const GROUPS: { label: string; match: (c: CourseSummary) => boolean }[] = [
  { label: '部定專業與實習科目', match: (c) => ['部定專業科目', '部定實習科目', '技能領域'].includes(c.category) },
  { label: '部定一般科目', match: (c) => c.category === '部定一般科目' },
  { label: '校訂科目', match: (c) => c.category === '校訂科目' },
];

const GOALS = [10, 20, 30, 50];

export default function LearnHome({ courses, semesters }: { courses: CourseSummary[]; semesters: SemesterInfo[] }) {
  const hydrated = useLearnHydration();
  const s = useLearnStore();
  const [picked, setPicked] = useState<SemesterId | null>(null);

  const lastCourse = hydrated ? courses.find((c) => c.id === s.lastCourse) : undefined;
  const active: SemesterId = picked ?? lastCourse?.semester ?? 'g10s1';
  const semester = semesters.find((x) => x.id === active) as SemesterInfo;
  const done = hydrated ? s.completed : {};

  const progressOf = (c: CourseSummary) => c.nodeIds.filter((id) => done[id]).length / Math.max(c.nodeIds.length, 1);
  const semesterProgress = (id: SemesterId) => {
    const list = courses.filter((c) => c.semester === id);
    const total = list.reduce((n, c) => n + c.nodeIds.length, 0);
    const got = list.reduce((n, c) => n + c.nodeIds.filter((x) => done[x]).length, 0);
    return total ? got / total : 0;
  };

  const totals = useMemo(
    () => ({
      courses: courses.length,
      units: courses.reduce((n, c) => n + c.unitCount, 0),
      items: courses.reduce((n, c) => n + c.itemCount, 0),
    }),
    [courses],
  );

  const semestersCleared = semesters
    .filter((sem) => {
      const list = courses.filter((c) => c.semester === sem.id);
      return list.length > 0 && list.every((c) => c.nodeIds.every((id) => done[id]));
    })
    .map((x) => x.id);

  // 日期相關內容一律等 hydration 後才算，避免建置當天與瀏覽當天不同造成水合錯誤
  const today = hydrated ? localDateKey() : '2000-01-03';
  const stats = hydrated ? todayStats(s.day, today) : EMPTY_DAY;
  const quests = hydrated ? dailyQuests(today) : [];
  const thisWeek = weekStartKey(today);
  const lastWeek = addDaysKey(thisWeek, -7);
  const xpThis = hydrated ? weekXp(s.xpByDay, thisWeek) : 0;
  const xpLast = hydrated ? weekXp(s.xpByDay, lastWeek) : 0;
  const tier = tierFor(xpThis);
  const nextTier = WEEK_TIERS.find((t) => t.min > xpThis);
  const unlocked = hydrated
    ? unlockedAchievements({
        totalXp: s.totalXp,
        lessonsDone: s.lessonsDone,
        perfectCount: s.perfectCount,
        longestStreak: s.streak.longest,
        coursesCompleted: s.coursesCompleted,
        semestersCleared,
        reviewsDone: s.reviewsDone,
        subjectsTouched: s.subjectsTouched.length,
      })
    : [];
  const mistakeCount = hydrated ? Object.keys(s.mistakes).length : 0;
  const streakDays = hydrated ? displayStreak(s.streak, today) : 0;
  const goalPct = Math.min(100, (stats.xp / s.dailyGoal) * 100);

  const nextNodeHref = (c: CourseSummary) => `/learn/${c.semester}/${c.key}/`;

  return (
    <div className="min-h-screen bg-[#fafaf9] pb-28 dark:bg-slate-950">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-emerald-50/60 to-transparent dark:border-slate-800 dark:from-emerald-950/20">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-black tracking-[0.2em] text-emerald-700 dark:text-emerald-300">
                108 課綱・土木與建築群建築科
              </p>
              <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                闖關學習：三年六學期全科地圖
              </h1>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
                每天 5 分鐘，一關 5 題。從高一上的測量製圖，到高三的統測總複習，{totals.courses} 門課、{totals.units}{' '}
                個單元、{totals.items} 題全部依學期排好。答錯不扣分，會在關卡最後再練一次。
              </p>
            </div>
            <div className="rounded-2xl border-2 border-slate-200 bg-white px-3 py-2 dark:border-slate-800 dark:bg-slate-900">
              <StatsBar hydrated={hydrated} />
            </div>
          </div>

          {lastCourse && (
            <Link
              href={nextNodeHref(lastCourse)}
              className={clsx(
                'mt-6 flex items-center gap-4 rounded-2xl border-2 border-b-4 bg-white p-4 transition hover:-translate-y-0.5 dark:bg-slate-900',
                COURSE_COLORS[lastCourse.color].border,
              )}
            >
              <span className={clsx('flex h-12 w-12 items-center justify-center rounded-2xl text-2xl', COURSE_COLORS[lastCourse.color].soft)}>
                {lastCourse.emoji}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs font-black text-slate-400">繼續上次的進度</span>
                <span className="block truncate font-black text-slate-900 dark:text-white">
                  {semesters.find((x) => x.id === lastCourse.semester)?.label}・{lastCourse.title}
                </span>
              </span>
              <ArrowRight className="h-5 w-5 text-slate-400" aria-hidden />
            </Link>
          )}
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-4 pt-6 sm:px-6 lg:grid-cols-[1fr_340px]">
        <div className="min-w-0">
          {/* 學期切換 */}
          <div className="-mx-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0" role="tablist" aria-label="選擇學期">
            <div className="flex min-w-max gap-2">
              {semesters.map((sem) => {
                const p = Math.round(semesterProgress(sem.id) * 100);
                const on = sem.id === active;
                return (
                  <button
                    key={sem.id}
                    type="button"
                    role="tab"
                    aria-selected={on}
                    onClick={() => setPicked(sem.id)}
                    className={clsx(
                      'rounded-2xl border-2 border-b-4 px-4 py-2.5 text-left transition',
                      on
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-900 dark:border-emerald-500 dark:bg-emerald-950/50 dark:text-emerald-100'
                        : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300',
                    )}
                  >
                    <span className="block text-base font-black">{sem.label}</span>
                    <span className="block text-[11px] font-bold opacity-70">{hydrated && p > 0 ? `完成 ${p}%` : sem.longLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <p className="mt-4 rounded-2xl bg-white p-4 text-sm leading-relaxed text-slate-600 ring-1 ring-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:ring-slate-800">
            <span className="font-black text-slate-900 dark:text-white">{semester.label}主軸：</span>
            {semester.theme}
          </p>

          {GROUPS.map((g) => {
            const list = courses.filter((c) => c.semester === active && g.match(c));
            if (!list.length) return null;
            return (
              <section key={g.label} className="mt-8" aria-label={g.label}>
                <h2 className="mb-3 flex items-baseline gap-2 text-lg font-black text-slate-900 dark:text-white">
                  {g.label}
                  <span className="text-xs font-bold text-slate-400">{list.length} 門</span>
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {list.map((c) => (
                    <CourseCard key={c.id} course={c} progress={progressOf(c)} href={nextNodeHref(c)} />
                  ))}
                </div>
              </section>
            );
          })}

          <div className="mt-10 flex gap-3 rounded-2xl border-2 border-dashed border-slate-300 p-4 text-xs leading-relaxed text-slate-500 dark:border-slate-700 dark:text-slate-400">
            <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
            <p>
              排課依據：部定專業／實習科目與專業製圖技能領域，採國家教育研究院《土木與建築群課程手冊》（111 年 7 月更新）表 2-2、表
              2-3 的建議授課年段（標「官方建議學期」）。一般科目依同手冊表 2-1 學分規定示例排課，實際學期以各校課程計畫為準；高三校訂科目為常見規劃示例。
              學習紀錄只存在這台裝置的瀏覽器，不會上傳。
            </p>
          </div>
        </div>

        {/* 側欄 */}
        <aside className="space-y-4">
          {/* 每日目標 */}
          <Card title="今日目標" icon={<Target className="h-4 w-4 text-amber-500" aria-hidden />}>
            <div className="flex items-center gap-4">
              <Ring pct={hydrated ? goalPct : 0} />
              <div className="text-sm">
                <p className="font-black text-slate-900 dark:text-white">
                  {stats.xp} / {s.dailyGoal} XP
                </p>
                <p className="text-slate-500">{stats.xp >= s.dailyGoal ? '今天的目標完成了！' : '完成約 2 個關卡即可達成'}</p>
              </div>
            </div>
            <div className="mt-3 flex gap-1.5" role="radiogroup" aria-label="每日目標 XP">
              {GOALS.map((g) => (
                <button
                  key={g}
                  type="button"
                  role="radio"
                  aria-checked={s.dailyGoal === g}
                  onClick={() => s.setDailyGoal(g)}
                  className={clsx(
                    'flex-1 rounded-xl border-2 py-1.5 text-xs font-black',
                    s.dailyGoal === g
                      ? 'border-amber-400 bg-amber-50 text-amber-800 dark:bg-amber-950/50 dark:text-amber-200'
                      : 'border-slate-200 text-slate-500 dark:border-slate-700',
                  )}
                >
                  {g}
                </button>
              ))}
            </div>
          </Card>

          {/* 每日任務 */}
          <Card title="每日任務" icon={<Gift className="h-4 w-4 text-rose-500" aria-hidden />}>
            {!hydrated && <p className="text-xs text-slate-400">載入今日任務…</p>}
            <ul className="space-y-3">
              {quests.map((q) => {
                const prog = hydrated ? questProgress(q, stats) : 0;
                const complete = prog >= q.target;
                const claimed = hydrated && s.claimedQuests.includes(q.id);
                return (
                  <li key={q.id}>
                    <div className="flex items-center justify-between gap-2 text-sm">
                      <span className="font-bold text-slate-700 dark:text-slate-200">{q.title}</span>
                      {claimed ? (
                        <CheckCircle2 className="h-5 w-5 text-emerald-500" aria-label="已領取" />
                      ) : complete ? (
                        <button
                          type="button"
                          onClick={() => s.claimQuest(q.id, q.reward)}
                          className="rounded-lg bg-rose-500 px-2 py-1 text-xs font-black text-white hover:bg-rose-400"
                        >
                          領 🧱{q.reward}
                        </button>
                      ) : (
                        <span className="text-xs font-bold text-slate-400">🧱{q.reward}</span>
                      )}
                    </div>
                    <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                      <div className="h-full rounded-full bg-rose-400" style={{ width: `${(prog / q.target) * 100}%` }} />
                    </div>
                    <p className="mt-0.5 text-right text-[11px] tabular-nums text-slate-400">
                      {prog} / {q.target}
                    </p>
                  </li>
                );
              })}
            </ul>
          </Card>

          {/* 個人週賽 */}
          <Card title="本週個人聯賽" icon={<Trophy className="h-4 w-4 text-sky-500" aria-hidden />}>
            <div className="flex items-center gap-3">
              <span className="text-4xl" aria-hidden>
                {tier.emoji}
              </span>
              <div className="text-sm">
                <p className="font-black text-slate-900 dark:text-white">{tier.name}級・本週 {xpThis} XP</p>
                <p className="text-slate-500">
                  {nextTier ? `再 ${nextTier.min - xpThis} XP 升到「${nextTier.name}」` : '已達最高級，保持節奏就好'}
                </p>
              </div>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2 text-center text-xs">
              <div className="rounded-xl bg-slate-100 p-2 dark:bg-slate-800">
                <p className="text-slate-500">上週</p>
                <p className="text-lg font-black tabular-nums text-slate-800 dark:text-slate-100">{xpLast}</p>
              </div>
              <div className="rounded-xl bg-slate-100 p-2 dark:bg-slate-800">
                <p className="text-slate-500">本週</p>
                <p className="text-lg font-black tabular-nums text-slate-800 dark:text-slate-100">{xpThis}</p>
              </div>
            </div>
            {hydrated && <WeekBars xpByDay={s.xpByDay} weekStart={thisWeek} today={today} />}
            <p className="mt-2 text-[11px] leading-relaxed text-slate-400">只跟上週的自己比較，沒有排行榜。</p>
          </Card>

          {/* 連續學習與休息日卡 */}
          <Card title="連續學習" icon={<Snowflake className="h-4 w-4 text-sky-500" aria-hidden />}>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              目前 <b className="text-orange-500">{streakDays}</b> 天・最長 <b>{hydrated ? s.streak.longest : 0}</b> 天
            </p>
            <p className="mt-1 text-xs leading-relaxed text-slate-500">
              休息日卡 {hydrated ? s.streak.freezes : 0}/{MAX_FREEZES}：某天沒空學習時自動使用，連續天數不中斷。
            </p>
            <button
              type="button"
              disabled={!hydrated || s.bricks < FREEZE_PRICE || s.streak.freezes >= MAX_FREEZES}
              onClick={() => s.buyFreeze()}
              className="mt-3 w-full rounded-xl border-2 border-b-4 border-sky-300 bg-sky-50 py-2 text-xs font-black text-sky-800 disabled:cursor-not-allowed disabled:opacity-40 dark:border-sky-800 dark:bg-sky-950/50 dark:text-sky-200"
            >
              用 🧱{FREEZE_PRICE} 兌換休息日卡
            </button>
          </Card>

          {/* 錯題複習 */}
          <Link
            href="/learn/review/"
            className="flex items-center gap-3 rounded-2xl border-2 border-b-4 border-violet-300 bg-violet-50 p-4 transition hover:-translate-y-0.5 dark:border-violet-800 dark:bg-violet-950/40"
          >
            <RotateCcw className="h-6 w-6 text-violet-600 dark:text-violet-300" aria-hidden />
            <span className="flex-1">
              <span className="block font-black text-violet-900 dark:text-violet-100">錯題複習</span>
              <span className="block text-xs text-violet-700 dark:text-violet-300">
                {mistakeCount ? `錯題本有 ${mistakeCount} 題等你再練` : '目前沒有錯題，繼續保持！'}
              </span>
            </span>
            <ArrowRight className="h-4 w-4 text-violet-500" aria-hidden />
          </Link>

          {/* 成就 */}
          <Card title={`成就徽章 ${unlocked.length}/${ACHIEVEMENTS.length}`} icon={<Award className="h-4 w-4 text-amber-500" aria-hidden />}>
            <ul className="grid grid-cols-4 gap-2">
              {ACHIEVEMENTS.map((a) => {
                const got = unlocked.includes(a.id);
                return (
                  <li
                    key={a.id}
                    title={`${a.title}：${a.desc}`}
                    className={clsx(
                      'flex flex-col items-center rounded-xl p-2 text-center',
                      got ? 'bg-amber-50 dark:bg-amber-950/40' : 'bg-slate-100 opacity-50 grayscale dark:bg-slate-800',
                    )}
                  >
                    <span className="text-2xl" aria-hidden>
                      {a.emoji}
                    </span>
                    <span className="mt-1 text-[10px] font-bold leading-tight text-slate-600 dark:text-slate-300">{a.title}</span>
                    <span className="sr-only">
                      {a.desc}（{got ? '已解鎖' : '未解鎖'}）
                    </span>
                  </li>
                );
              })}
            </ul>
          </Card>

          <Card title="學習紀錄" icon={<Info className="h-4 w-4 text-slate-400" aria-hidden />}>
            <p className="text-xs text-slate-500">
              累積 {hydrated ? s.totalXp : 0} XP・完成 {hydrated ? s.lessonsDone : 0} 關・完美通關 {hydrated ? s.perfectCount : 0} 次
            </p>
            <button
              type="button"
              onClick={() => {
                if (window.confirm('確定要清除這台裝置上的所有闖關紀錄嗎？此動作無法復原。')) s.resetProgress();
              }}
              className="mt-2 text-xs font-bold text-rose-600 hover:underline"
            >
              清除闖關紀錄
            </button>
          </Card>
        </aside>
      </div>
    </div>
  );
}

function CourseCard({ course, progress, href }: { course: CourseSummary; progress: number; href: string }) {
  const t = COURSE_COLORS[course.color];
  const pct = Math.round(progress * 100);
  return (
    <Link
      href={href}
      className={clsx(
        'group flex flex-col rounded-2xl border-2 border-b-4 bg-white p-4 transition hover:-translate-y-0.5 dark:bg-slate-900',
        t.border,
      )}
    >
      <div className="flex items-start gap-3">
        <span className={clsx('flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-2xl', t.soft)} aria-hidden>
          {course.emoji}
        </span>
        <div className="min-w-0 flex-1">
          <p className="font-black leading-snug text-slate-900 dark:text-white">{course.title}</p>
          <p className="mt-0.5 flex flex-wrap gap-1 text-[11px] font-bold">
            <span className={clsx('rounded px-1.5 py-0.5', t.soft, t.text)}>{course.category}</span>
            <span className="rounded bg-slate-100 px-1.5 py-0.5 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
              {course.credits} 學分
            </span>
            {course.officialPlacement && (
              <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200">
                官方建議學期
              </span>
            )}
          </p>
        </div>
        {pct === 100 && <Trophy className="h-5 w-5 shrink-0 text-amber-500" aria-label="已完成" />}
      </div>
      <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400">{course.blurb}</p>
      <div className="mt-auto pt-3">
        <div className="flex justify-between text-[11px] font-bold text-slate-400">
          <span>
            {course.unitCount} 單元・{course.itemCount} 題
          </span>
          <span className="tabular-nums">{pct}%</span>
        </div>
        <div className="mt-1 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
          <div className={clsx('h-full rounded-full transition-[width]', t.bar)} style={{ width: `${pct}%` }} />
        </div>
      </div>
    </Link>
  );
}

function Card({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border-2 border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900" aria-label={title}>
      <h3 className="mb-3 flex items-center gap-1.5 text-sm font-black text-slate-800 dark:text-slate-100">
        {icon}
        {title}
      </h3>
      {children}
    </section>
  );
}

function Ring({ pct }: { pct: number }) {
  const r = 26;
  const c = 2 * Math.PI * r;
  return (
    <svg viewBox="0 0 64 64" className="h-16 w-16 -rotate-90" aria-hidden>
      <circle cx="32" cy="32" r={r} fill="none" strokeWidth="8" className="stroke-slate-200 dark:stroke-slate-800" />
      <circle
        cx="32"
        cy="32"
        r={r}
        fill="none"
        strokeWidth="8"
        strokeLinecap="round"
        className="stroke-amber-400 transition-[stroke-dashoffset] duration-700"
        strokeDasharray={c}
        strokeDashoffset={c * (1 - pct / 100)}
      />
    </svg>
  );
}

const WEEKDAY = ['一', '二', '三', '四', '五', '六', '日'];

function WeekBars({ xpByDay, weekStart, today }: { xpByDay: Record<string, number>; weekStart: string; today: string }) {
  const days = WEEKDAY.map((w, i) => {
    const key = addDaysKey(weekStart, i);
    return { w, key, xp: xpByDay[key] ?? 0 };
  });
  const max = Math.max(20, ...days.map((d) => d.xp));
  return (
    <div className="mt-3 flex h-20 items-end gap-1.5" aria-label="本週每日 XP">
      {days.map((d) => (
        <div key={d.key} className="flex flex-1 flex-col items-center gap-1">
          <div
            className={clsx('w-full rounded-t-md', d.key === today ? 'bg-sky-500' : 'bg-sky-200 dark:bg-sky-900')}
            style={{ height: `${Math.max(4, (d.xp / max) * 56)}px` }}
            title={`${d.key}：${d.xp} XP`}
          />
          <span className={clsx('text-[10px] font-bold', d.key === today ? 'text-sky-600' : 'text-slate-400')}>{d.w}</span>
        </div>
      ))}
    </div>
  );
}
