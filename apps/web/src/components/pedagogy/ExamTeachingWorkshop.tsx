'use client';
import ExamConceptTable from './ExamConceptTable';

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
    <header><span className="et-eyebrow">PAST PAPER → KNOWLEDGE → TRANSFER</span><h2 id="exam-teaching-title">把歷屆題，接回真正能用的知識</h2><p>本章加入 {entries.length} 組實題推導與原創遷移練習。先讀必要知識，再自行作答；需要時展開示範，最後換個條件重做。</p><Link href="/exam-evidence">查看五年題型與內容查核範圍 ↗</Link></header>
    <div className="et-type-list" aria-label="本章題型">{entries.map(({ guide }) => <a href={`#bridge-${guide.questionId}`} key={guide.questionId}>{guide.kind}</a>)}</div>
    {entries.map(({guide:g,question:q}) => <article key={g.questionId} id={`bridge-${g.questionId}`} className="et-case">
      <div className="et-meta"><span>{q.year} 年 · {q.id.includes('english') ? '英文' : q.id.includes('chinese') ? '國文' : q.id.includes('math') ? '數學 C' : q.id.split('-')[1] === '1' ? '專一' : '專二'}第 {q.questionNo} 題</span><span>本站逐題教學解析</span></div>
      <h3>{g.kind}</h3><div className="et-knowledge" aria-label="解題所需知識">{g.knowledge.map(([title,body]) => <section key={title}><h4>{title}</h4><p>{body}</p></section>)}</div>
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
      <details className="et-worked"><summary>展開逐步示範：從已知條件到答案</summary><ol>{g.steps.map((step,i) => <li key={step}><span>{i+1}</span><p>{step}</p></li>)}</ol><p className="et-answer">官方答案：{q.answer}。以下推導與選項說明由本站編寫。</p><div className="et-options-why">{(['A','B','C','D'] as const).map((letter,i) => <p key={letter}><strong>{letter} · {q.answer.includes(letter) ? '符合題意' : '排除理由'}</strong>{g.reasons[i]}</p>)}</div></details>
      <section className="et-transfer" aria-labelledby={`transfer-${g.questionId}`}><span className="et-eyebrow">換條件，檢查自己會不會</span><h4 id={`transfer-${g.questionId}`}>原創遷移練習</h4><p>{g.transfer.prompt}</p><label htmlFor={`response-${g.questionId}`}>先寫答案與至少一個理由</label><textarea id={`response-${g.questionId}`} maxLength={1200} value={responses[g.questionId]??''} placeholder="例如：先列出關係式，再代入數字；或指出原文證據。" onChange={(e)=>setResponses(s=>({...s,[g.questionId]:e.target.value}))}/><button type="button" disabled={!responses[g.questionId]?.trim()} onClick={()=>setShown(s=>({...s,[g.questionId]:!s[g.questionId]}))}>{shown[g.questionId]?'遮住解析，再做一次':'比對答案與解題步驟'}</button>
      {shown[g.questionId] && <div className="et-transfer-feedback" role="status"><strong>參考答案：{g.transfer.answer}</strong><ol>{g.transfer.steps.map(step=><li key={step}>{step}</li>)}</ol><p>請比對自己的理由。開放式回答由你自評，系統不以文字相同與否判分。</p><div className="et-reflection" aria-label="本題自我檢核">{['能獨立說明','仍需看步驟','先補知識點'].map(item=><button type="button" key={item} aria-pressed={reflection[g.questionId]===item} onClick={()=>setReflection(s=>({...s,[g.questionId]:item}))}>{item}</button>)}</div>{reflection[g.questionId] && <p>已記下本次自評：{reflection[g.questionId]}。離開頁面前，請將仍卡住的原因寫進筆記。</p>}</div>}
      </section><a className="et-practice-link" href="#exam-questions-section">回到章末真題作答與逐題回饋 ↓</a>
    </article>)}
  </section>;
}
