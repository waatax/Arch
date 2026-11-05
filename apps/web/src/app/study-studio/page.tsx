import { Suspense } from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import StudioHub from '@/components/studyStudio/StudioHub';
import BeamSandbox from '@/components/studyStudio/BeamSandbox';
import { studioLessons, SOURCES } from '@/data/studyStudio';
import { topicSearchIndex } from '@/data/topicSearchIndex';
import './studio.css';

export const metadata: Metadata = {
  title: '考前建築所｜段考計畫、圖解短課與錯題複習',
  description: '給高工建築科的考前學習工作桌。30 個原創觀念短課、60 題檢核、教材範圍自選、段考與統測準備計畫，讓每天都有一小步。',
};
export default function StudyStudioPage() {
  const lessons = studioLessons.map((l) => ({ id: l.slug, slug: l.slug, subject: l.subject, title: l.title, hook: l.hook, questions: l.questions.length, href: `/study-studio/${l.slug}` }));
  const topics = topicSearchIndex.map((t) => ({ id: `topic:${t.subjectSlug}/${t.topicSlug}`, title: t.topicTitle, subject: t.subjectSlug, href: `/subjects/${t.subjectSlug}/${t.topicSlug}` }));
  return <div className="study-studio">
    <header className="ss-hero ss-container"><div className="ss-hero-copy"><div className="ss-eyebrow"><span className="ss-status-dot" /> ARCH / LEARNING STUDIO</div><p className="ss-kicker">給正在準備下一場考試的你</p><h1>學懂一點，<br />信心就多<span>一點。</span></h1><p className="ss-hero-description">把建築知識拆成看得懂、做得到的小任務。段考、期中、期末到統測，每一天都知道從哪裡開始。</p><div className="ss-hero-actions"><Link className="ss-button" href="/study-studio?view=plan#workspace">排好我的考前計畫 ↗</Link><Link className="ss-outline-button" href="#workspace">先完成一個小任務 ↓</Link></div><div className="ss-hero-facts"><span>免登入</span><span>答錯不扣點</span><span>進度留在裝置</span></div></div><BeamSandbox /></header>
    <div className="ss-stats-strip"><div className="ss-container"><p><b>30</b><span>新增觀念短課</span></p><p><b>60</b><span>原創檢核題</span></p><p><b>13</b><span>學科可自選範圍</span></p><p><b>120</b><span>原有完整主題</span></p></div></div>
    <div className="ss-container"><Suspense fallback={<section className="ss-workspace ss-loading" id="workspace">正在準備你的學習工作桌…</section>}><StudioHub lessons={lessons} topics={topics} /></Suspense>
      <section className="ss-exam-bridge"><div><span className="ss-eyebrow">BUILD TOWARD YOUR GOAL</span><h2>以頂標為目標，讓準備有證據。</h2><p className="ss-muted">短課幫你補觀念，完整歷屆卷幫你確認能否獨立作答；兩種練習搭配進行。</p></div><ol><li><strong>01 補好地基</strong><p>從診斷錯題回到觀念、單位與讀題，練到能自己說明理由。</p></li><li><strong>02 換題也會</strong><p>進入原有歷屆題庫，檢查能否把剛學會的概念用在新情境。</p></li><li><strong>03 完整計時</strong><p>依當年度官方規則練完整卷，檢討時間分配與尚未穩定的科目。</p></li></ol><div className="ss-scope-actions"><Link href="/practice" className="ss-button">用歷屆卷檢查學習成果 ↗</Link><Link href="/exam-116" className="ss-outline-button">查統測考科與判分依據 ↗</Link></div><p className="ss-muted">探索值與短課過關數不換算級距；頂標以當年度官方成績資料為準。</p></section>
      <section className="ss-resources"><div><span className="ss-eyebrow">READ WITH CONTEXT</span><h2>跟著課綱，也跟著你的課堂。</h2><p>以 108 課綱的共同知識組織內容，專業短課參照 116 統測考綱。自然、社會與實務另標為段考延伸，避免混淆考科。</p><p>出版社的章名、章序與冊次可能不同。這裡提供「知識範圍自選＋版本備註」；尚未完成各版本逐冊、逐頁對照，不能取代老師公告。</p><Link href="/review/periodic-exams" className="ss-link">搭配原有段考複習手冊 →</Link></div><div className="ss-source-card"><h3>官方依據與查核</h3><p>查核日：2026-11-05 · 適用：116 學年度考綱</p><ul>{SOURCES.map((s) => <li key={s.url}><a href={s.url} target="_blank" rel="noreferrer">{s.title} ↗</a></li>)}</ul><p>練習題為本站原創，不是官方試題。檢核結果用於找弱點，實際級距以當年度官方公告為準。</p></div></section>
    </div>
  </div>;
}
