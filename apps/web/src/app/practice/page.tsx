import ExamSimulator, { type PracticeCatalog } from '@/components/ExamSimulator';
import Link from 'next/link';
import catalogData from '../../../public/practice-data/index.json';
import CurriculumExamPathwayGuide from '@/components/pedagogy/CurriculumExamPathwayGuide';

export const metadata = {
  title: '全科目歷屆大考全真模擬與七年題庫｜Arch V9.00',
  description: '完整對齊 108 課綱學測與統測雙軌，收錄過去七年大考真題，提供全真限時模擬、待核對標記與五段式名師思維詳解。',
};

const pastExamYears = [
  { year: 115, title: '最新前瞻全真模考', highlight: '素養導向·新題型' },
  { year: 114, title: '108 課綱第三屆真題', highlight: '工程情境·題組實戰' },
  { year: 113, title: '108 課綱第二屆真題', highlight: '跨域整合·圖表判讀' },
  { year: 112, title: '108 課綱首屆深化', highlight: '實務應用·規範推論' },
  { year: 111, title: '108 課綱首屆新制真題', highlight: '新課綱基準卷' },
  { year: 110, title: '108 課綱前導試題', highlight: '新制銜接題庫' },
  { year: 109, title: '課綱銜接大考試題', highlight: '基礎學科底蘊' },
];

export default function PracticePage() {
  return (
    <main className="mx-auto max-w-6xl space-y-10 px-4 py-10 sm:px-6 sm:py-14">
      {/* ── Header ── */}
      <header className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 font-bold">
            108 Curriculum Past Exam Simulator
          </p>
          <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-bold text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300">
            過去七年（109–115）歷屆大考全景
          </span>
        </div>
        <h1 className="font-serif text-3xl font-bold text-slate-900 dark:text-white sm:text-5xl">
          全科目歷屆大考全真模擬
        </h1>
        <p className="max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-400">
          全面對齊 108 課綱核心素養。題幹與選項已逐題 OCR 與幾何圖面校對；英文與國文題組整合文章與對應試題，力學與製圖顯示單題高清圖面。交卷後提供五段式名師思維詳解，每題皆可一鍵直達 108 課綱教學頁面深入精熟。
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#exam-simulator-section"
            className="inline-flex text-sm font-bold text-blue-600 hover:underline dark:text-blue-400"
          >
            開始模擬測驗 ↓
          </a>
          <span className="text-slate-300 dark:text-slate-700">·</span>
          <a
            href="#curriculum-guide-section"
            className="inline-flex text-sm font-bold text-slate-600 hover:underline dark:text-slate-400"
          >
            108 課綱升學雙軌導讀 ↓
          </a>
          <span className="text-slate-300 dark:text-slate-700">·</span>
          <a
            href="#question-bank"
            className="inline-flex text-sm font-bold text-slate-600 hover:underline dark:text-slate-400"
          >
            七年大考題庫與官方 PDF ↗
          </a>
        </div>
      </header>

      {/* ── 108 課綱雙軌升學導覽 (GSAT x TCTE) ── */}
      <section id="curriculum-guide-section">
        <CurriculumExamPathwayGuide />
      </section>

      {/* ── 全真模擬測驗器 (ExamSimulator) ── */}
      <section id="exam-simulator-section">
        <ExamSimulator catalog={catalogData as PracticeCatalog} />
      </section>

      {/* ── 過去七年大考題庫年鑑網格 ── */}
      <section
        id="question-bank"
        className="space-y-6 border-t border-slate-200 pt-12 dark:border-slate-800"
        aria-labelledby="question-bank-title"
      >
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">
            Official 7-Year Archive
          </p>
          <h2 id="question-bank-title" className="mt-1 font-serif text-3xl font-bold text-slate-900 dark:text-white">
            過去七年大考官方題庫年鑑
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-400">
            點選學年度可查看國文、英文、數學(C)與建築群專業科目（一）、（二）的官方題本、標準答案與對應 108 課綱 120 主題的教學對照。
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pastExamYears.map((item) => (
            <article
              key={item.year}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs dark:border-slate-800 dark:bg-slate-900 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500">{item.year + 1911} 年</span>
                  <span className="rounded-md bg-blue-50 px-2 py-0.5 text-[10px] font-mono font-bold text-blue-700 dark:bg-blue-950/80 dark:text-blue-300">
                    {item.highlight}
                  </span>
                </div>
                <h3 className="mt-2 font-serif text-2xl font-bold text-slate-900 dark:text-white">
                  {item.year} 學年度
                </h3>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">{item.title}</p>
              </div>

              <div className="mt-6 flex flex-col gap-2.5 text-xs font-bold border-t border-slate-100 dark:border-slate-800 pt-4">
                <Link
                  href={`/exams#year-${item.year}`}
                  className="text-blue-600 hover:underline dark:text-blue-400 flex items-center justify-between"
                >
                  <span>題庫與 108 課綱對照</span>
                  <span>→</span>
                </Link>
                <a
                  href={`https://web1.tcte.edu.tw/EXAM/${item.year}_4y/`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-600 hover:underline dark:text-slate-400 flex items-center justify-between"
                >
                  <span>官方試題中心</span>
                  <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
