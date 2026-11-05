import Link from 'next/link';
import { notFound } from 'next/navigation';
import { studioLessons, SUBJECT_LABELS, SOURCES, EXAM_SUBJECTS } from '@/data/studyStudio';
import StudioQuiz from '@/components/studyStudio/StudioQuiz';
import '../studio.css';

export const dynamicParams = false;
export function generateStaticParams() { return studioLessons.map((l) => ({ slug: l.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const l = studioLessons.find((x) => x.slug === slug);
  return { title: l ? `${l.title}｜考前建築所` : '找不到短課', description: l?.hook };
}
export default async function StudioLessonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lesson = studioLessons.find((l) => l.slug === slug);
  if (!lesson) notFound();
  const related = studioLessons.filter((l) => l.subject === lesson.subject && l.slug !== slug);
  const next = related[0] ?? studioLessons[(studioLessons.indexOf(lesson) + 1) % studioLessons.length];
  const source = lesson.subject === 'mechanics' || lesson.subject === 'materials' ? SOURCES[1] : lesson.subject === 'drafting' || lesson.subject === 'surveying' ? SOURCES[2] : EXAM_SUBJECTS.includes(lesson.subject) ? SOURCES[0] : SOURCES[3];
  return <article className="study-studio ss-lesson-page"><div className="ss-lesson-container">
    <nav className="ss-breadcrumb" aria-label="麵包屑"><Link href="/study-studio">考前建築所</Link><span>/</span><Link href={`/subjects/${lesson.subject}`}>{SUBJECT_LABELS[lesson.subject]}</Link></nav>
    <header className="ss-lesson-header"><div className="ss-eyebrow">LEARNING BRICK / {String(studioLessons.indexOf(lesson) + 1).padStart(2, '0')}</div><div className="ss-lesson-tags"><span className="ss-pill">{SUBJECT_LABELS[lesson.subject]}</span><span>約 10 分鐘</span><span>{EXAM_SUBJECTS.includes(lesson.subject) ? '統測銜接' : '段考延伸'}</span></div><h1>{lesson.title}</h1><p>{lesson.hook}</p><div className="ss-lesson-outline">學習範圍：{lesson.outline}</div></header>
    <nav className="ss-lesson-nav" aria-label="本課段落"><a href="#understand">理解觀念</a><a href="#example">例題圖解</a><a href="#compare">比較速查</a><a href="#check">自己試答</a></nav>
    <section id="understand" className="ss-reading-section"><span className="ss-eyebrow">01 / UNDERSTAND</span><h2>先把三個關鍵弄清楚</h2><div className="ss-concepts">{lesson.concepts.map(([title, text], i) => <div key={title}><span className="ss-concept-number">0{i + 1}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></section>
    <section id="example" className="ss-reading-section"><span className="ss-eyebrow">02 / WORK IT OUT</span><h2>看一遍，試著自己重走一次</h2><div className="ss-example"><p className="ss-example-question">{lesson.example.question}</p><figure className="ss-reasoning-figure"><figcaption>例題推理圖 · 從線索走到檢核</figcaption><ol>{lesson.example.steps.map((step, i) => <li key={step}><span>{i + 1}</span><p>{step}</p></li>)}</ol></figure><div className="ss-example-answer"><span>得到的結論</span><strong>{lesson.example.answer}</strong></div></div></section>
    <section id="compare" className="ss-reading-section"><span className="ss-eyebrow">03 / COMPARE</span><h2>容易混淆的，放一起看</h2><div className="ss-table-wrap" tabIndex={0} role="region" aria-label="觀念比較表"><table><caption className="sr-only">{lesson.title}的三項觀念速查</caption><thead><tr><th scope="col">辨識關鍵</th><th scope="col">概念／做法</th><th scope="col">記得檢查</th></tr></thead><tbody>{lesson.comparison.map(([key, value, note]) => <tr key={key}><th scope="row">{key}</th><td>{value}</td><td>{note}</td></tr>)}</tbody></table></div></section>
    <StudioQuiz lesson={lesson} />
    <aside className="ss-lesson-sources"><h2>連回課本與課綱</h2><p>本短課為原創補充教學，章序可依不同出版社與老師進度調整。數字例題採題示簡化條件，實作時請依課堂安全要求。</p><a href={source.url} target="_blank" rel="noreferrer">{source.title} ↗</a><p>查核：2026-11-05 · 課綱是範圍依據，本站例題與解說並非官方編寫。</p><Link className="ss-link" href={`/subjects/${lesson.subject}`}>閱讀本科完整主題與歷屆題解析 →</Link></aside>
    <div className="ss-next-lesson"><div><span className="ss-eyebrow">KEEP BUILDING</span><h2>{next.title}</h2><p>還有精神，再學一點；今天到這裡也很好。</p></div><Link className="ss-button" href={`/study-studio/${next.slug}`}>下一塊知識磚 ↗</Link></div>
    <Link className="ss-back-link" href="/study-studio?view=library">← 回到全部短課</Link>
  </div></article>;
}
