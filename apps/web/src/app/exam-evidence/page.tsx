import Link from 'next/link';
import { allSubjects } from '@/data/subjects';
import { examTeachingCases } from '@/data/examTeaching';
import { examSourceVisuals, examSharedQuestionVisuals } from '@/data/examTeaching/sourceVisuals';
import { canonicalExamQuestions, rawExamQuestions, getTopicTeachingCases } from '@/lib/pedagogy/canonicalExams';

export const metadata = { title: '五年真題 × 章節知識查核 | Arch', description: '111–115 統測題型、章節、必要知識與逐題解析覆蓋，公開列出待補範圍。' };
export default function ExamEvidencePage() {
  const chapters = allSubjects.flatMap(s=>s.topics.map(t=>({ route:`/subjects/${s.slug}/${t.slug}`, title:t.title, subject:s.title })));
  const reviewed = examTeachingCases.length;
  const corrected = canonicalExamQuestions.filter(q=>q.previousRoute).length;
  const sourcePages = new Set([...Object.values(examSourceVisuals),...Object.values(examSharedQuestionVisuals)].map(v=>v.image)).size;
  return <main className="mx-auto max-w-6xl px-4 py-12 sm:px-8">
    <Link href="/">← 回學習首頁</Link>
    <p className="mt-8 text-xs font-bold tracking-widest text-teal-700 dark:text-teal-300">EVIDENCE → KNOWLEDGE → PRACTICE</p>
    <h1 className="mt-3 text-3xl font-bold leading-snug">課文，真的足以解開歷屆題嗎？</h1>
    <p className="mt-5 max-w-3xl text-base leading-8">先從官方題幹回推必要知識，再補入章末的「知識 → 實題示範 → 選項辨析 → 換條件練習」。這裡逐章列出已補強的題型及尚未完成逐題推導的範圍，方便你選擇複習順序。</p>
    <div className="my-8 grid grid-cols-2 gap-3 sm:grid-cols-4">{[[canonicalExamQuestions.length,'111–115 年真題'],[reviewed,'道逐題精講'],[reviewed,'道原創遷移練習'],[corrected,'筆歸章修正']].map(([n,label])=><div key={label} className="rounded-2xl border border-teal-700/25 p-5"><strong className="block text-3xl text-teal-700 dark:text-teal-300">{n}</strong><span className="mt-2 block text-xs">{label}</span></div>)}</div>
    <section className="rounded-2xl border border-amber-400/50 bg-amber-50 p-5 leading-8 text-amber-950 dark:bg-amber-950/30 dark:text-amber-100"><h2 className="font-bold">本次逐題內容查核</h2><p>111–115 年共 {canonicalExamQuestions.length} 題，已編寫 {reviewed} 組必要知識、解題步驟、四選項辨析與原創遷移練習；待補 {canonicalExamQuestions.length-reviewed} 題。本輪補齊原先缺少精講的 748 題，並覆核既有解析的符號、推導及歸章。每題均連回相關教學章節與學期複習講義，可按自己的錯因選擇補讀。</p><p>另排除 {rawExamQuestions.length-canonicalExamQuestions.length} 筆已隔離的 110 年合成紀錄。圖形題請連同官方原頁閱讀，送分及答案更正另列說明。各出版社逐頁對照尚未完成審定；內容查核與程式檢查也尚未提供學生實際作答成效的證據。</p><nav aria-label="查核後的複習入口" className="mt-3 flex flex-wrap gap-4"><Link href="/review" className="font-bold underline">依年級、學期選段考講義 ↗</Link><Link href="/practice" className="font-bold underline">到題庫練習與查看回饋 ↗</Link></nav></section>
    <section className="my-8 rounded-2xl border border-teal-700/30 p-5 leading-8"><h2 className="text-xl font-bold">先確保圖表就是原題的圖表</h2><p className="mt-3">已依官方 PDF 校對 {sourcePages} 頁原始題組，修復 {Object.keys(examSourceVisuals).length} 組閱讀圖表與專業題的共用條件。時刻、資費、社團、旅館等表格均可連同原頁核對；讀圖時請先看圖例、單位與註腳，再看數值。</p><p>例如：113 年英文第 29 題的 606 車次週六確實行駛，錯在桃園到站時間應為 08:38；不是原選項的 08:30。只看答案 C，無法學到這個辨析過程。</p></section>
    <section className="my-10"><h2 className="text-xl font-bold">怎麼用這份題型表</h2><ol className="mt-4 list-decimal space-y-2 pl-6 leading-8"><li>進入章節，先讀題型的必要知識，遮住示範自行解題。</li><li>對照每一步推導與 A–D 的排除理由，找出卡在概念、計算還是讀圖。</li><li>完成改變數字或語境的原創練習，再對照解法自評；能獨立說明才算學會。</li></ol></section>
    <h2 className="text-xl font-bold">逐章題型與缺口</h2><p className="my-3 text-sm leading-7">「本章真題」依主要歸章計數；跨章題型可能在數章出現，精講數不可跨列相加。沒有連到歷屆題的章節仍可用於校內學習，但不宣稱已通過統測實題查核。</p>
    <div className="overflow-x-auto rounded-xl border border-slate-300 dark:border-slate-700"><table className="w-full min-w-[580px] text-left text-sm"><caption className="sr-only">120 章的歷屆題型及精講覆蓋</caption><thead className="bg-teal-800 text-white"><tr>{['科目／章節','本章真題','逐題精講／相關題型'].map(t=><th key={t} className="p-4 font-bold">{t}</th>)}</tr></thead><tbody>{chapters.map(ch=>{const n=canonicalExamQuestions.filter(q=>q.lessonRoute===ch.route).length; const cases=getTopicTeachingCases(ch.route);return <tr key={ch.route} className="border-t border-slate-200 align-top dark:border-slate-700"><th scope="row" className="p-4 font-normal"><span className="block text-xs opacity-70">{ch.subject}</span><Link href={`${ch.route}${cases.length?'#exam-teaching':'#exam-questions-section'}`} className="mt-2 inline-block font-bold underline underline-offset-4">{ch.title}</Link></th><td className="p-4 tabular-nums">{n} 題</td><td className="max-w-lg p-4 leading-7">{cases.length ? <><strong>{cases.length} 組</strong><ul className="mt-2 space-y-2">{cases.map(({guide:g,question:q})=><li key={q.id}><Link href={`${ch.route}#bridge-${q.id}`} className="underline underline-offset-4">{g.kind}</Link><span className="ml-2 text-xs opacity-70">{q.id}</span></li>)}</ul></>:<span className="opacity-70">{n?'逐題推導待補':'尚無可連結實題；不以零題視為完備'}</span>}</td></tr>})}</tbody></table></div>
    <section className="mt-10 space-y-3 text-sm leading-7"><h2 className="text-xl font-bold">來源與使用原則</h2><p>官方試題與公布答案依考試當年度使用；年度題目中的材料規格與法規，不直接當作現行工程規定。教學推導與遷移練習均由本站編寫。</p><div className="flex flex-wrap gap-4">{[111,112,113,114,115].map(y=><a key={y} href={`https://web1.tcte.edu.tw/EXAM/${y}_4y/`} target="_blank" rel="noreferrer" className="py-2 font-bold underline">{y} 年測驗中心題本／答案 ↗</a>)}</div></section>
  </main>;
}
