'use client';
import { useState } from 'react';
import Link from 'next/link';
import type { StudioLesson } from '@/data/studyStudio';
import { dayKey, recordAnswer } from '@/lib/studyStudio/engine';
import { updateStudio, useStudio } from '@/lib/studyStudio/store';

export default function StudioQuiz({ lesson }: { lesson: StudioLesson }) {
  const state = useStudio();
  const [choices, setChoices] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState<Record<number, boolean>>({});
  const passed = lesson.questions.every((_, i) => state.answers[`${lesson.slug}:${i}`]?.correct);
  function submit(i: number) {
    if (choices[i] === undefined || submitted[i]) return;
    const id = `${lesson.slug}:${i}`;
    updateStudio((s) => ({ ...s, answers: { ...s.answers, [id]: recordAnswer(s.answers[id], choices[i] === lesson.questions[i].answer, dayKey()) } }));
    setSubmitted((s) => ({ ...s, [i]: true }));
  }
  return <section className="ss-quiz" id="check" aria-labelledby="check-title">
    <div className="ss-section-head"><div><span className="ss-eyebrow">CHECK & GROW</span><h2 id="check-title">蓋起一塊知識磚</h2></div><span className="ss-pill">2 題原創檢核</span></div>
    <p className="ss-muted">先遮住上方解說試答。首次答對每題獲得 10 點探索值；重答不重複加點。這是單元檢核，不是統測成績預測。</p>
    {lesson.questions.map((q, i) => <fieldset key={q.stem} className="ss-question">
      <legend><span className="ss-question-no">0{i + 1}</span>{q.stem}</legend>
      <div className="ss-options">{q.options.map((option, n) => <label className={`ss-option ${choices[i] === n ? 'ss-chosen' : ''}`} key={option}>
        <input type="radio" name={`${lesson.slug}-${i}`} checked={choices[i] === n} disabled={submitted[i]} onChange={() => setChoices((s) => ({ ...s, [i]: n }))} />
        <span className="ss-letter">{String.fromCharCode(65 + n)}</span><span>{option}</span>
      </label>)}</div>
      {!submitted[i] ? <button className="ss-button" disabled={choices[i] === undefined} onClick={() => submit(i)}>確認答案</button> : <div className={`ss-feedback ${choices[i] === q.answer ? 'ss-correct' : 'ss-retry'}`} role="status">
        <strong>{choices[i] === q.answer ? '✓ 答對了，把理由也說一次。' : '↻ 再想一步，錯題已放進複習清單。'}</strong>
        <p>答案 {String.fromCharCode(65 + q.answer)}：{q.options[q.answer]}</p><p>{q.explanation}</p>
        <button className="ss-text-button" onClick={() => { setSubmitted((s) => ({ ...s, [i]: false })); setChoices((s) => { const next = { ...s }; delete next[i]; return next; }); }}>遮住答案再練一次 →</button>
      </div>}
    </fieldset>)}
    <div className="ss-completion" aria-live="polite"><span aria-hidden="true">{passed ? '▦' : '▧'}</span><div><strong>{passed ? '這塊知識磚已完成初次檢核' : '把想不通的地方留下來，下次一起解開'}</strong><p>{passed ? '隔天再回想一次。複習間隔依跨日答對紀錄安排為 1、3、7、14 天。' : '答錯不扣點；正確理解後再試。先讀懂比一次全對更重要。'}</p><Link href="/study-studio?view=review">查看我的複習清單 →</Link></div></div>
    {state.storageError && <p role="alert">此瀏覽器目前無法儲存，進度僅在本次頁面停留期間保留。</p>}
  </section>;
}
