'use client';
import ExamConceptTable from './ExamConceptTable';

import { getHandoutLinks } from '@/lib/pedagogy/handoutLinks';
import { useState } from 'react';
import Link from 'next/link';
import MathText from '@/components/MathText';
import ExamKnowledgeDiagram from './ExamKnowledgeDiagram';
import TableRenderer from '@/components/TableRenderer';
import ExamSourceFigure from './ExamSourceFigure';
import type { ExamTeachingCase } from '@/data/examTeaching/types';
import type { CanonicalExamQuestion } from '@/lib/pedagogy/canonicalExams';
import './exam-teaching.css';

export interface TeachingEntry { guide: ExamTeachingCase; question: CanonicalExamQuestion }
export default function ExamTeachingWorkshop({ entries }: { entries: TeachingEntry[] }) {
  const [responses, setResponses] = useState<Record<string,string>>({});
  const [shown, setShown] = useState<Record<string,boolean>>({});
  const [reflection, setReflection] = useState<Record<string,string>>({});
  if (!entries.length) return null;
  return <section id="exam-teaching" className="exam-teaching" aria-labelledby="exam-teaching-title">
    <header><span className="et-eyebrow">真題 → 必要知識 → 換條件練習</span><h2 id="exam-teaching-title">把歷屆題，接回真正能用的知識</h2><p>本章有 {entries.length} 組實題推導與原創遷移練習。選一道目前卡住的題目，依序完成下面三步。</p><Link href="/exam-evidence">查看五年題型與內容查核範圍 ↗</Link></header>
    <ol className="et-study-path" aria-label="真題學習順序"><li><strong>01 先讀知識</strong>說出定義、適用條件與圖中符號。</li><li><strong>02 遮住解法作答</strong>保留公式、單位或原文證據，再比對推導。</li><li><strong>03 換條件再做</strong>寫下理由，用新題檢查能否獨立解答。</li></ol>
    <nav className="et-type-list" aria-label="本章題型">{entries.map(({ guide, question }) => <a href={`#bridge-${guide.questionId}`} key={guide.questionId}><small>{question.year}・{question.questionNo}</small>{guide.kind}</a>)}</nav>
    {entries.map(({guide:g,question:q}) => <article key={g.questionId} id={`bridge-${g.questionId}`} className="et-case">
      <div className="et-meta"><span>{q.year} 年 · {q.id.includes('english') ? '英文' : q.id.includes('chinese') ? '國文' : q.id.includes('math') ? '數學 C' : q.id.split('-')[1] === '1' ? '專一' : '專二'}第 {q.questionNo} 題</span><span>本站逐題教學解析</span></div>
      <h3>{g.kind}</h3>
      {g.reviewNote && <aside className="my-4 rounded-xl border border-amber-500/50 bg-amber-500/10 p-4 text-sm leading-7"><strong>原題與計分說明</strong><p>{g.reviewNote}</p></aside>}
      <div className="et-knowledge" aria-label="解題所需知識">{g.knowledge.map(([title,body]) => <section key={title}><h4>{title}</h4><div><MathText content={body} /></div></section>)}</div>
      {g.references?.length ? <nav aria-label="延伸原理查核來源" className="my-3 flex flex-wrap gap-3 text-sm">{g.references.map(ref => <a key={ref.url} href={ref.url} target="_blank" rel="noreferrer">{ref.title} ↗</a>)}</nav> : null}
      <ExamKnowledgeDiagram id={g.questionId} /><ExamConceptTable id={g.questionId} />
      <div className="et-source-question">
        <strong>用這道實題確認</strong>
        <div className="my-3"><MathText content={q.excerpt} /></div>
        {q.passage && <details><summary>讀取本題共同文章（作答前請先讀）</summary><div className="et-passage">{q.passage}</div></details>}
        {q.visualData?.table && <TableRenderer data={q.visualData.table} />}
        {q.figureImage && <ExamSourceFigure src={q.figureImage} alt={`${q.year} 年第 ${q.questionNo} 題原始題面與圖示`} caption={q.figureCaption} />}
        <ul className="et-source-options">{(['A','B','C','D'] as const).map(l=><li key={l}><strong>{l}.</strong> <MathText content={q.options[l] || '請核對官方題本選項'} /></li>)}</ul>
        <a href={q.sourceUrl} target="_blank" rel="noreferrer">核對當年度官方題本 ↗</a>
      </div>
      <details className="et-worked"><summary>展開逐步示範：從已知條件到答案</summary><ol>{g.steps.map((step,i) => <li key={step}><span aria-hidden="true">{i+1}</span><div><MathText content={step} /></div></li>)}</ol><p className="et-answer">官方答案：{q.answer === 'CD' ? 'C 或 D 皆可（維持單選）' : q.answer}。以下推導與選項說明由本站編寫。</p><div className="et-options-why">{(['A','B','C','D'] as const).map((letter,i) => <div key={letter}><strong>{letter} · {q.answer === '送分' ? '原選項說明' : q.answer.includes(letter) ? '符合題意' : '排除理由'}</strong><MathText content={g.reasons[i]} /></div>)}</div></details>
      <section className="et-transfer" aria-labelledby={`transfer-${g.questionId}`}><span className="et-eyebrow">換條件，檢查自己會不會</span><h4 id={`transfer-${g.questionId}`}>原創遷移練習</h4><div><MathText content={g.transfer.prompt} /></div><label htmlFor={`response-${g.questionId}`}>先寫答案與至少一個理由</label><textarea id={`response-${g.questionId}`} maxLength={1200} value={responses[g.questionId]??''} placeholder="例如：先列出關係式，再代入數字；或指出原文證據。" onChange={(e)=>setResponses(s=>({...s,[g.questionId]:e.target.value}))}/><button type="button" aria-expanded={!!shown[g.questionId]} aria-controls={shown[g.questionId] ? `feedback-${g.questionId}` : undefined} disabled={!responses[g.questionId]?.trim()} onClick={()=>setShown(s=>({...s,[g.questionId]:!s[g.questionId]}))}>{shown[g.questionId]?'遮住解析，再做一次':'比對答案與解題步驟'}</button>
      {shown[g.questionId] && <div id={`feedback-${g.questionId}`} className="et-transfer-feedback" role="region" aria-label="遷移練習參考解法"><strong>參考答案：</strong><MathText content={g.transfer.answer} /><ol>{g.transfer.steps.map(step=><li key={step}><MathText content={step} /></li>)}</ol><p>請比對自己的理由。開放式回答由你自評，系統不以文字相同與否判分。</p><div className="et-reflection" aria-label="本題自我檢核">{['能獨立說明','仍需看步驟','先補知識點'].map(item=><button type="button" key={item} aria-pressed={reflection[g.questionId]===item} onClick={()=>setReflection(s=>({...s,[g.questionId]:item}))}>{item}</button>)}</div>{reflection[g.questionId] && <p role="status">本次自評：{reflection[g.questionId]}。離開頁面前，請將仍卡住的原因寫進筆記。</p>}</div>}
      </section><nav aria-label="本題學期複習講義" className="my-4 flex flex-wrap gap-3">{getHandoutLinks(g.routes).map(link => <Link key={link.href} href={link.href}>{link.title}複習講義 ↗</Link>)}</nav><a className="et-practice-link" href="#exam-questions-section">回到章末真題作答與逐題回饋 ↓</a>
    </article>)}
  </section>;
}
