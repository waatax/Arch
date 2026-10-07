import Link from 'next/link';
import coverage from '../../../../../data/registry/exam-coverage.json';
import common from '../../../../../data/registry/common-exam-questions.json';

export const metadata = {
  title: '過去七年大考全科目題庫與 108 課綱對齊教學｜Arch V9.00',
  description: '109 至 115 學年度國文、英文、數學(C)及土木與建築群專業科目，收錄過去七年大考官方試題、標準答案與對應 108 課綱 120 主題教學對照。',
};

const paperNames: Record<number, string> = {
  1: '專業科目（一）基礎工程力學、材料與試驗',
  2: '專業科目（二）測量實習、製圖實習',
};

const subjectNames: Record<string, string> = {
  mechanics: '工程力學',
  materials: '材料與試驗',
  surveying: '測量實習',
  drafting: '製圖實習',
  chinese: '國文',
  english: '英文',
  'math-c': '數學(C)',
};

const official109Sources = {
  chinese: {
    name: '國文',
    sourceUrl: 'https://web1.tcte.edu.tw/EXAM/109_4y/downloader.php?obj=MTA5LTR5LTAwLWMucGRm',
    answerUrl: 'https://web1.tcte.edu.tw/EXAM/109_4y/downloader.php?obj=MTA5LTR5LTAwLWMtc3RhbmRhcmQucGRm',
    topics: [
      { name: '閱讀理解與素養題型', route: '/subjects/chinese/classical-reading' },
      { name: '文意歸納與語文表達', route: '/subjects/chinese/reading-comprehension' },
      { name: '現代文學與新詩鑑賞', route: '/subjects/chinese/modern-literature' },
    ],
  },
  english: {
    name: '英文',
    sourceUrl: 'https://web1.tcte.edu.tw/EXAM/109_4y/downloader.php?obj=MTA5LTR5LTAwLWUucGRm',
    answerUrl: 'https://web1.tcte.edu.tw/EXAM/109_4y/downloader.php?obj=MTA5LTR5LTAwLWUtc3RhbmRhcmQucGRm',
    topics: [
      { name: '建築專業字彙與語境', route: '/subjects/english/vocabulary' },
      { name: '句型結構與閱讀推論', route: '/subjects/english/reading-skills' },
      { name: '克漏字與篇章銜接', route: '/subjects/english/cloze-advanced' },
    ],
  },
  'math-c': {
    name: '數學(C)',
    sourceUrl: 'https://web1.tcte.edu.tw/EXAM/109_4y/downloader.php?obj=MTA5LTR5LTAwLW1jLnBkZg==',
    answerUrl: 'https://web1.tcte.edu.tw/EXAM/109_4y/downloader.php?obj=MTA5LTR5LTAwLW1jLXN0YW5kYXJkLnBkZg==',
    topics: [
      { name: '三角函數與測量應用', route: '/subjects/math-c/trigonometry' },
      { name: '平面與空間向量運算', route: '/subjects/math-c/vectors' },
      { name: '直線與圓的解析幾何', route: '/subjects/math-c/lines-and-circles' },
    ],
  },
  1: {
    name: '專業科目（一）基礎工程力學、材料與試驗',
    sourceUrl: 'https://web1.tcte.edu.tw/EXAM/109_4y/downloader.php?obj=MTA5LTR5LTA2LTEucGRm',
    answerUrl: 'https://web1.tcte.edu.tw/EXAM/109_4y/downloader.php?obj=MTA5LTR5LTA2LTEtc3RhbmRhcmQucGRm',
    topics: [
      { name: '力的平衡與支承反力', route: '/subjects/mechanics/force-equilibrium' },
      { name: '桁架節點與截面法', route: '/subjects/mechanics/truss' },
      { name: '正應力與正應變計算', route: '/subjects/mechanics/stress-strain' },
      { name: '混凝土配合與試驗', route: '/subjects/materials/concrete' },
      { name: '鋼材力學性質檢驗', route: '/subjects/materials/metals' },
    ],
  },
  2: {
    name: '專業科目（二）測量實習、製圖實習',
    sourceUrl: 'https://web1.tcte.edu.tw/EXAM/109_4y/downloader.php?obj=MTA5LTR5LTA2LTIucGRm',
    answerUrl: 'https://web1.tcte.edu.tw/EXAM/109_4y/downloader.php?obj=MTA5LTR5LTA2LTItc3RhbmRhcmQucGRm',
    topics: [
      { name: '水準測量與高程閉合', route: '/subjects/surveying/elevation-and-leveling' },
      { name: '導線測量坐標計算', route: '/subjects/surveying/coordinate-computation' },
      { name: '第三角正投影展開', route: '/subjects/drafting/orthographic-projection' },
      { name: '建築平立剖面圖識讀', route: '/subjects/drafting/architectural-plan' },
      { name: '尺度標註與工程符號', route: '/subjects/drafting/dimensioning-and-symbols' },
    ],
  },
};

const official110Sources = {
  chinese: {
    name: '國文',
    sourceUrl: 'https://web1.tcte.edu.tw/EXAM/110_4y/downloader.php?obj=MTEwLTR5LTAwLWMucGRm',
    answerUrl: 'https://web1.tcte.edu.tw/EXAM/110_4y/downloader.php?obj=MTEwLTR5LTAwLWMtc3RhbmRhcmQucGRm',
  },
  english: {
    name: '英文',
    sourceUrl: 'https://web1.tcte.edu.tw/EXAM/110_4y/downloader.php?obj=MTEwLTR5LTAwLWUucGRm',
    answerUrl: 'https://web1.tcte.edu.tw/EXAM/110_4y/downloader.php?obj=MTEwLTR5LTAwLWUtc3RhbmRhcmQucGRm',
  },
  'math-c': {
    name: '數學(C)',
    sourceUrl: 'https://web1.tcte.edu.tw/EXAM/110_4y/downloader.php?obj=MTEwLTR5LTAwLW1jLnBkZg==',
    answerUrl: 'https://web1.tcte.edu.tw/EXAM/110_4y/downloader.php?obj=MTEwLTR5LTAwLW1jLXN0YW5kYXJkLnBkZg==',
  },
  1: {
    name: '專業科目（一）基礎工程力學、材料與試驗',
    sourceUrl: 'https://web1.tcte.edu.tw/EXAM/110_4y/downloader.php?obj=MTEwLTR5LTA2LTEucGRm',
    answerUrl: 'https://web1.tcte.edu.tw/EXAM/110_4y/downloader.php?obj=MTEwLTR5LTA2LTEtc3RhbmRhcmQucGRm',
  },
  2: {
    name: '專業科目（二）測量實習、製圖實習',
    sourceUrl: 'https://web1.tcte.edu.tw/EXAM/110_4y/downloader.php?obj=MTEwLTR5LTA2LTIucGRm',
    answerUrl: 'https://web1.tcte.edu.tw/EXAM/110_4y/downloader.php?obj=MTEwLTR5LTA2LTItc3RhbmRhcmQucGRm',
  },
};

export function ExamsContent({ embedded = false }: { embedded?: boolean }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  const learningHref = (route: string) => `${basePath}${route.replace(/\/$/, '')}/`;
  const topicCount = new Set(coverage.questions.map((question) => question.lessonRoute)).size;
  const Wrapper = embedded ? 'section' : 'main';

  const years = [115, 114, 113, 112, 111, 110, 109];

  return (
    <Wrapper
      id={embedded ? 'question-bank' : undefined}
      className={
        embedded
          ? 'space-y-12 border-t border-slate-200 pt-12 dark:border-slate-800'
          : 'mx-auto max-w-6xl space-y-12 px-4 py-10 sm:px-6 sm:py-14'
      }
    >
      <header className="grid gap-8 lg:grid-cols-[1fr_23rem] lg:items-end">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 font-bold">
              Arch V9.00 · 108 Curriculum
            </p>
            <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[10px] font-bold text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300">
              過去 7 年（109–115）歷屆全備
            </span>
          </div>
          <h1 className="mt-2 font-serif text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-5xl">
            過去七年大考<br />全科目題庫與課綱對照
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-400">
            完整收錄 109 至 115 學年度國文、英文、數學(C)、專業科目（一）基礎工程力學與工程材料，以及專業科目（二）測量實習與製圖實習。提供官方題本、標準答案與對應 108 課綱 120 主題的教學導航。
          </p>
          {!embedded && (
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/practice"
                className="inline-flex min-h-12 items-center rounded-xl bg-blue-600 px-6 font-bold text-white shadow-sm hover:bg-blue-700 transition-colors"
              >
                進入全科目全真模考考場 →
              </Link>
              <Link
                href="/curriculum"
                className="inline-flex min-h-12 items-center rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-5 font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 transition-colors"
              >
                查看 13 科 120 主題課綱地圖
              </Link>
            </div>
          )}
        </div>
        <aside className="grid grid-cols-3 gap-2 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-5 text-center shadow-xs">
          <div>
            <strong className="block font-serif text-3xl font-bold text-slate-900 dark:text-white">7</strong>
            <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">歷屆學年度</span>
          </div>
          <div>
            <strong className="block font-serif text-3xl font-bold text-slate-900 dark:text-white">5</strong>
            <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">完整大考科目</span>
          </div>
          <div>
            <strong className="block font-serif text-3xl font-bold text-blue-600 dark:text-blue-400">1,110+</strong>
            <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">官方題本與答案</span>
          </div>
        </aside>
      </header>

      <section className="grid gap-4 sm:grid-cols-3" aria-label="題庫特色說明">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 p-5 shadow-xs">
          <strong className="text-slate-900 dark:text-white text-base font-serif">全科目·七年度收錄</strong>
          <p className="mt-2 text-xs leading-6 text-slate-600 dark:text-slate-400">
            涵蓋 109–115 七學年度。每學年含國文 38 題、英文 42 題、數學(C) 25 題，以及專一 40 題、專二 40 題。
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 p-5 shadow-xs">
          <strong className="text-slate-900 dark:text-white text-base font-serif">108 課綱命題演進</strong>
          <p className="mt-2 text-xs leading-6 text-slate-600 dark:text-slate-400">
            清晰洞察從 109 舊制銜接到 111 課綱首屆、再到 115 最新前瞻試題的素養情境題型與題組變化。
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800 p-5 shadow-xs">
          <strong className="text-slate-900 dark:text-white text-base font-serif">雙向導學直達</strong>
          <p className="mt-2 text-xs leading-6 text-slate-600 dark:text-slate-400">
            歷屆試題逐題對應 {topicCount} 個 Arch 課綱學習單元，作答或檢討後點擊即可直達教學專頁強化弱點。
          </p>
        </div>
      </section>

      <section className="space-y-8" aria-labelledby="archive-title">
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">
            Official All-Subject Archive
          </p>
          <h2 id="archive-title" className="font-serif text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
            109–115 學年度全科目題庫與解答
          </h2>
        </div>

        {years.map((year) => {
          const is109 = year === 109;
          const is110 = year === 110;

          return (
            <article
              id={`year-${year}`}
              key={year}
              className="scroll-mt-24 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/90 shadow-xs"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 px-5 py-4 sm:px-7">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-blue-600 font-mono text-sm font-bold text-white">
                    {year}
                  </span>
                  <div>
                    <p className="text-xs font-mono text-slate-500">{year + 1911} 年</p>
                    <h3 className="font-serif text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
                      {year} 學年度 · 全科目大考試題
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={`https://web1.tcte.edu.tw/EXAM/${year}_4y/`}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl bg-blue-600 dark:bg-blue-500 px-4 py-2 text-xs font-bold text-white hover:bg-blue-700 transition-colors"
                  >
                    官方年度入口 ↗
                  </a>
                </div>
              </div>

              <div className="space-y-8 p-5 sm:p-7">
                {/* 共同科目 */}
                <section>
                  <div className="mb-4">
                    <p className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">
                      Common Subjects
                    </p>
                    <h4 className="font-serif text-lg font-bold text-slate-900 dark:text-white">
                      共同科目（國文、英文、數學 C）
                    </h4>
                  </div>
                  <div className="grid gap-4 lg:grid-cols-3">
                    {(['chinese', 'english', 'math-c'] as const).map((exam) => {
                      if (is109) {
                        const info = official109Sources[exam];
                        return (
                          <section
                            key={exam}
                            className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-4"
                          >
                            <h5 className="font-bold text-slate-900 dark:text-white">{info.name}</h5>
                            <div className="mt-2 flex gap-3 text-xs font-bold">
                              <a
                                href={info.sourceUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="text-blue-600 dark:text-blue-400 hover:underline"
                              >
                                官方題本 PDF ↗
                              </a>
                              <a
                                href={info.answerUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="text-blue-600 dark:text-blue-400 hover:underline"
                              >
                                標準答案 ↗
                              </a>
                            </div>
                            <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-800">
                              <p className="text-[11px] font-bold text-slate-500">108 課綱對應章節：</p>
                              <ul className="mt-1 space-y-1 text-xs">
                                {info.topics.map((t) => (
                                  <li key={t.name}>
                                    <a
                                      href={learningHref(t.route)}
                                      className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:underline"
                                    >
                                      • {t.name} →
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </section>
                        );
                      }

                      const questions = common.questions.filter(
                        (question) => question.year === year && question.exam === exam
                      );
                      const source =
                        common.sources.find((item) => item.year === year && item.exam === exam) ??
                        (is110 ? official110Sources[exam] : undefined);

                      return (
                        <section
                          key={exam}
                          className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-4"
                        >
                          <h5 className="font-bold text-slate-900 dark:text-white">{source?.name ?? exam}</h5>
                          <div className="mt-2 flex gap-3 text-xs font-bold">
                            <a
                              href={source?.sourceUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="text-blue-600 dark:text-blue-400 hover:underline"
                            >
                              官方題本 ↗
                            </a>
                            <a
                              href={source?.answerUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="text-blue-600 dark:text-blue-400 hover:underline"
                            >
                              標準答案 ↗
                            </a>
                          </div>
                          {questions.length > 0 && (
                            <details className="mt-3 rounded-lg border border-slate-200 dark:border-slate-800">
                              <summary className="cursor-pointer list-none px-3 py-2 text-xs font-bold text-slate-900 dark:text-white">
                                展開 {questions.length} 題標準答案
                              </summary>
                              <ol className="grid max-h-72 grid-cols-2 gap-px overflow-y-auto border-t border-slate-200 dark:border-slate-800 bg-(--color-concrete-300)">
                                {questions.map((question) => (
                                  <li
                                    key={question.id}
                                    className="flex justify-between bg-white dark:bg-slate-800 px-3 py-2 text-xs"
                                  >
                                    <span>第 {question.questionNo} 題</span>
                                    <strong>{question.answer}</strong>
                                  </li>
                                ))}
                              </ol>
                            </details>
                          )}
                        </section>
                      );
                    })}
                  </div>
                </section>

                {/* 專業科目 */}
                <section>
                  <div className="mb-4">
                    <p className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-bold">
                      Professional Subjects
                    </p>
                    <h4 className="font-serif text-lg font-bold text-slate-900 dark:text-white">
                      專業科目（專一：力學與材料 · 專二：測量與製圖）
                    </h4>
                  </div>
                  <div className="grid gap-6 lg:grid-cols-2">
                    {[1, 2].map((paper) => {
                      if (is109) {
                        const info = official109Sources[paper as 1 | 2];
                        return (
                          <section
                            key={paper}
                            className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-4"
                          >
                            <p className="text-xs font-mono text-blue-600 dark:text-blue-400">Paper {paper}</p>
                            <h5 className="font-bold leading-6 text-slate-900 dark:text-white">{info.name}</h5>
                            <div className="mt-2 flex gap-3 text-xs font-bold">
                              <a
                                href={info.sourceUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="text-blue-600 dark:text-blue-400 hover:underline"
                              >
                                官方題本 PDF ↗
                              </a>
                              <a
                                href={info.answerUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="text-blue-600 dark:text-blue-400 hover:underline"
                              >
                                標準答案 ↗
                              </a>
                            </div>
                            <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-800">
                              <p className="text-[11px] font-bold text-slate-500">108 課綱對應教學單元：</p>
                              <ul className="mt-1 space-y-1 text-xs">
                                {info.topics.map((t) => (
                                  <li key={t.name}>
                                    <a
                                      href={learningHref(t.route)}
                                      className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:underline"
                                    >
                                      • {t.name} →
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </section>
                        );
                      }

                      const questions = coverage.questions.filter(
                        (question) => question.year === year && question.paper === paper
                      );
                      const source =
                        coverage.sources.find((item) => item.year === year && item.paper === paper) ??
                        (is110 ? official110Sources[paper as 1 | 2] : undefined);

                      return (
                        <section
                          key={paper}
                          className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-4"
                        >
                          <p className="text-xs font-mono text-blue-600 dark:text-blue-400">Paper {paper}</p>
                          <h5 className="font-bold leading-6 text-slate-900 dark:text-white">
                            {paperNames[paper]}
                          </h5>
                          <div className="mt-2 flex gap-3 text-xs font-bold">
                            <a
                              href={source?.sourceUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="text-blue-600 dark:text-blue-400 hover:underline"
                            >
                              官方題本 ↗
                            </a>
                            <a
                              href={source?.answerUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="text-blue-600 dark:text-blue-400 hover:underline"
                            >
                              標準答案 ↗
                            </a>
                          </div>
                          {questions.length > 0 && (
                            <details className="mt-3 rounded-lg border border-slate-200 dark:border-slate-800">
                              <summary className="cursor-pointer list-none px-3 py-2 text-xs font-bold text-slate-900 dark:text-white">
                                展開 {questions.length} 題教學對照
                              </summary>
                              <ol className="max-h-96 divide-y divide-(--color-concrete-300) overflow-y-auto border-t border-slate-200 dark:border-slate-800">
                                {questions.map((question) => (
                                  <li
                                    key={question.id}
                                    className="grid grid-cols-[3.5rem_2rem_1fr_auto] items-center gap-2 px-3 py-2 text-xs"
                                  >
                                    <span>第 {question.questionNo} 題</span>
                                    <strong>{question.answer}</strong>
                                    <span className="truncate text-slate-600 dark:text-slate-400">
                                      {subjectNames[question.subject]} · {question.topic}
                                    </span>
                                    <a
                                      href={learningHref(question.lessonRoute)}
                                      className="font-bold text-blue-600 dark:text-blue-400 hover:underline"
                                    >
                                      去複習 →
                                    </a>
                                  </li>
                                ))}
                              </ol>
                            </details>
                          )}
                        </section>
                      );
                    })}
                  </div>
                </section>
              </div>
            </article>
          );
        })}
      </section>
    </Wrapper>
  );
}

export default function ExamsPage() {
  return <ExamsContent />;
}
