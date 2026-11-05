'use client';

import { useEffect, useMemo, useState } from 'react';
import { Check, X } from 'lucide-react';
import MathText from '@/components/MathText';
import type { Drill } from '@/data/finalReview';
import type { ReviewQuestion } from '@/data/finalReview/questions.server';

const STORE_KEY = 'arch:final-review:v1';
const LABELS = ['A', 'B', 'C', 'D'];
const LEVEL_LABEL: Record<Drill['level'], string> = { 1: '基礎', 2: '進階', 3: '鑑別' };

type Progress = Record<string, boolean>;

function readProgress(): Progress {
  try {
    return JSON.parse(window.localStorage.getItem(STORE_KEY) ?? '{}');
  } catch {
    return {};
  }
}

function writeProgress(key: string, correct: boolean) {
  try {
    const current = readProgress();
    // 答對過就保留，避免複習時一次失手清掉紀錄
    current[key] = current[key] || correct;
    window.localStorage.setItem(STORE_KEY, JSON.stringify(current));
    window.dispatchEvent(new Event('final-review-progress'));
  } catch {
    /* 無法儲存時仍可正常作答 */
  }
}

export function DrillSet({ drills, storageKey }: { drills: Drill[]; storageKey: string }) {
  const [picked, setPicked] = useState<Record<number, number>>({});
  const answered = Object.keys(picked).length;
  const correct = Object.entries(picked).filter(([i, v]) => drills[Number(i)].answer === v).length;

  return (
    <div className="fr-drills">
      {drills.map((drill, i) => {
        const choice = picked[i];
        const done = choice !== undefined;
        return (
          <article key={i} className="fr-drill">
            {drill.context ? (
              <p className="fr-drill-context">
                <span>連鎖題情境</span>
                <MathText content={drill.context} />
              </p>
            ) : null}
            <header className="fr-drill-head">
              <span className="fr-drill-no">{String(i + 1).padStart(2, '0')}</span>
              <span className="fr-drill-tag">{drill.kind}</span>
              <span className={`fr-drill-level fr-level-${drill.level}`}>{LEVEL_LABEL[drill.level]}</span>
            </header>
            <p className="fr-drill-stem"><MathText content={drill.stem} /></p>
            <div className="fr-options" role="group" aria-label={`第 ${i + 1} 題選項`}>
              {drill.options.map((option, k) => {
                const state = !done ? '' : k === drill.answer ? 'is-correct' : k === choice ? 'is-wrong' : 'is-muted';
                return (
                  <button
                    key={k}
                    type="button"
                    disabled={done}
                    className={`fr-option ${state}`}
                    onClick={() => {
                      setPicked((p) => ({ ...p, [i]: k }));
                      writeProgress(`${storageKey}#${i}`, k === drill.answer);
                    }}
                  >
                    <span className="fr-option-key">
                      {done && k === drill.answer ? <Check className="size-3.5" /> : done && k === choice ? <X className="size-3.5" /> : LABELS[k]}
                    </span>
                    <MathText content={option} />
                  </button>
                );
              })}
            </div>
            {done ? (
              <div className="fr-why" aria-live="polite">
                <strong>{choice === drill.answer ? '答對了' : `正解 ${LABELS[drill.answer]}`}</strong>
                <MathText content={drill.why} />
              </div>
            ) : null}
          </article>
        );
      })}
      <p className="fr-drill-score" aria-live="polite">
        {answered === 0 ? `共 ${drills.length} 題，作答後立即顯示解析。` : `已答 ${answered}／${drills.length} 題，答對 ${correct} 題。`}
      </p>
    </div>
  );
}

export function ExamQuestions({ questions, years, basePath }: { questions: ReviewQuestion[]; years: number[]; basePath: string }) {
  const [year, setYear] = useState<number | 'all'>('all');
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});
  const list = useMemo(() => (year === 'all' ? questions : questions.filter((q) => q.year === year)), [questions, year]);

  if (questions.length === 0) return <p className="fr-empty">這個單元在 111–115 年沒有被歸入的題目，請以本章演練題檢核。</p>;

  return (
    <div>
      <div className="fr-tabs" role="group" aria-label="篩選年度">
        <button type="button" className={year === 'all' ? 'is-active' : ''} aria-pressed={year === 'all'} onClick={() => setYear('all')}>全部 {questions.length}</button>
        {years.map((y) => {
          const count = questions.filter((q) => q.year === y).length;
          return (
            <button key={y} type="button" disabled={!count} className={year === y ? 'is-active' : ''} aria-pressed={year === y} onClick={() => setYear(y)}>
              {y}<small>{count}</small>
            </button>
          );
        })}
      </div>
      <ol className="fr-exam-list">
        {[...list].sort((a, b) => b.year - a.year || a.questionNo - b.questionNo).map((q) => (
          <li key={q.id} className="fr-exam">
            <p className="fr-exam-meta">{q.year} 年第 {q.questionNo} 題</p>
            {q.passage ? (
              <details className="fr-exam-passage">
                <summary>閱讀題組原文</summary>
                <MathText content={q.passage} />
              </details>
            ) : null}
            <p className="fr-exam-stem">{q.excerpt}</p>
            {q.figureImage ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={`${basePath}${q.figureImage}`} alt={`${q.year} 年第 ${q.questionNo} 題附圖`} loading="lazy" className="fr-exam-figure" />
            ) : null}
            <ul className="fr-exam-options">
              {Object.entries(q.options).map(([k, v]) => (
                <li key={k} className={revealed[q.id] && q.answer.includes(k) ? 'is-correct' : ''}>({k}) {v}</li>
              ))}
            </ul>
            <div className="fr-exam-foot">
              <button type="button" onClick={() => setRevealed((r) => ({ ...r, [q.id]: !r[q.id] }))}>
                {revealed[q.id] ? `官方答案：${q.answer}` : '顯示官方答案'}
              </button>
              {q.sourceUrl ? <a href={q.sourceUrl} target="_blank" rel="noopener noreferrer">官方試題 PDF</a> : null}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** 顯示某前綴下已答對的演練題數；資料只存在本機。 */
export function ProgressLabel({ prefix, total }: { prefix: string; total: number }) {
  const [count, setCount] = useState<number | null>(null);
  useEffect(() => {
    const update = () => {
      const data = readProgress();
      setCount(Object.entries(data).filter(([k, v]) => v && k.startsWith(prefix)).length);
    };
    update();
    window.addEventListener('final-review-progress', update);
    return () => window.removeEventListener('final-review-progress', update);
  }, [prefix]);
  if (count === null) return <span className="fr-progress">—</span>;
  return <span className="fr-progress">{count}／{total}</span>;
}

export function PrintButton({ label = '列印本章或另存 PDF' }: { label?: string }) {
  return (
    <button type="button" className="fr-btn fr-btn-quiet" onClick={() => window.print()}>
      {label}
    </button>
  );
}
