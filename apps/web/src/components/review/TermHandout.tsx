import { getUnitLessonRoutes } from '@/lib/pedagogy/handoutRoutes';
import ExamConceptTable from '@/components/pedagogy/ExamConceptTable';
import ExamKnowledgeDiagram from '@/components/pedagogy/ExamKnowledgeDiagram';
import Link from 'next/link';
import type { LearnCourse, Exercise } from '@/data/learnPath/types';
import { getTopicTeachingCases } from '@/lib/pedagogy/canonicalExams';

function solution(item: Exercise) {
  switch (item.type) {
    case 'mcq': return item.choices[item.answer];
    case 'tf': return item.answer ? '正確' : '錯誤';
    case 'num': return [item.answer, item.unit].filter(value => value !== undefined).join(' ');
    case 'match': return item.pairs.map(pair => pair.join(' → ')).join('、');
    case 'order': return item.tiles.join(' → ');
  }
}

function HandoutExercise({item, index}: {item: Exercise; index: number}) {
  const choices = item.type === 'mcq' ? item.choices : [];
  const offset = choices.length ? (index + 1) % choices.length : 0;
  const displayedChoices = choices.slice(offset).concat(choices.slice(0, offset));
  return <div className="space-y-3 border-t pt-4">
    <p className="font-semibold">{item.prompt}</p>
    {displayedChoices.length > 0 && <ul className="list-disc space-y-1 pl-5">{displayedChoices.map((choice,i) => <li key={i}>{choice}</li>)}</ul>}
    {item.type === 'match' && <div className="grid grid-cols-2 gap-3"><ul>{item.pairs.map(([left]) => <li key={left}>{left}</li>)}</ul><ul>{item.pairs.slice().reverse().map(([,right],i) => <li key={i}>{right}</li>)}</ul></div>}
    {item.type === 'order' && <ul className="list-disc pl-5">{item.tiles.slice().reverse().map((tile,i) => <li key={i}>{tile}</li>)}</ul>}
    {item.type === 'tf' && <p>請先判斷正誤，再說明一個理由。</p>}
    {item.type === 'num' && <p>先列關係式，再代入數值並標明單位。</p>}
    <details className="rounded-lg bg-slate-100 p-3 text-slate-900 dark:bg-slate-800 dark:text-slate-100">
      <summary className="cursor-pointer font-semibold">核對答案與理由</summary>
      <p className="mt-3">{solution(item)}</p><p className="mt-2 leading-7">{item.explain}</p>
    </details>
  </div>;
}

export default function TermHandout({course, label}: {course: LearnCourse; label: string}) {
  return <section id="handout" className="mx-auto max-w-4xl space-y-5 px-5 py-10">
    <h2 className="text-2xl font-bold">{label}・{course.title}段考複習講義</h2>
    <p>{course.placement}。下列依單元順序安排複習，實際考試範圍請對照老師公告。</p>
    <ol className="list-decimal space-y-2 pl-5 leading-7">
      <li>考前七天先讀觀念，遮住答案完成各單元第一題，圈出需要補讀的知識。</li>
      <li>考前三天做第二題，逐項解釋選擇理由；計算題須保留公式、單位與代入過程。</li>
      <li>考前一天重做錯題，寫下錯因及修正方法，再以不同條件確認是否學會。</li>
    </ol>
    <nav aria-label="講義單元目錄" className="flex flex-wrap gap-3">{course.units.map(unit => <a key={unit.id} className="underline" href={'#handout-'+unit.id}>{unit.title}</a>)}</nav>
    {course.units.map((unit, index) => {
      const route = unit.topic && `/subjects/${unit.topic.subject}/${unit.topic.topic}`;
      const lessonRoutes = getUnitLessonRoutes(unit);
      const cases = [...new Map(lessonRoutes.flatMap(lessonRoute => getTopicTeachingCases(lessonRoute).map(entry => ({ ...entry, lessonRoute }))).map(entry => [entry.question.id, entry])).values()];
      const explained = unit.items.filter(item => item.explain);
      const first = explained.find(item => item.type === 'num') || explained[0];
      const second = explained.find(item => item.id !== first?.id && item.type !== first?.type) || explained.find(item => item.id !== first?.id);
      const exercises = [first, second].filter((item): item is Exercise => Boolean(item));
      const phase = index === course.units.length - 1 ? '期末複習' : index < course.units.length / 3 ? '第一次段考' : '期中複習';
      return <article id={'handout-'+unit.id} key={unit.id} className="scroll-mt-24 space-y-4 rounded-xl border p-5">
        <p className="text-sm">{phase}建議單元</p>
        <h3 className="text-xl font-bold">{unit.title}</h3>
        {index === course.units.length - 1 && <p>期末自測時，先重做前面各單元的一道錯題，再完成本單元練習。</p>}
        <p>{unit.outline}</p><ul className="list-disc space-y-2 pl-5 leading-7">{unit.guide.map((line,i) => <li key={i}>{line}</li>)}</ul>
        {exercises.map((item,i) => <HandoutExercise key={item.id} item={item} index={index+i} />)}
        {route && <Link className="block underline" href={route}>重讀對應教學頁</Link>}{lessonRoutes.filter(lessonRoute => lessonRoute !== route).map(lessonRoute => <Link key={lessonRoute} className="block underline" href={lessonRoute}>延伸本單元的必要知識</Link>)}
        {cases.length > 0 && <details className="rounded-lg border p-4"><summary className="cursor-pointer font-semibold">統測題型與換條件練習（{cases.length} 組）</summary>
          {cases.map(({guide,question,lessonRoute}) => <div key={question.id} className="mt-5 space-y-3 border-t pt-4">
            <Link className="block font-semibold underline" href={lessonRoute+'#bridge-'+question.id}>{question.year} 年第 {question.questionNo} 題・{guide.kind}</Link>
            {guide.reviewNote && <aside className="rounded-lg border border-amber-500/50 bg-amber-500/10 p-3 leading-7"><strong>原題與計分說明　</strong>{guide.reviewNote}</aside>}
            {guide.knowledge.map(([title, explanation]) => <p key={title} className="leading-7"><strong>{title}　</strong>{explanation}</p>)}
            <details className="rounded-lg border p-3"><summary className="cursor-pointer font-semibold">歷屆原題推導與選項辨析</summary>
              <p className="my-3 whitespace-pre-wrap leading-7">{question.excerpt}</p>
              <p className="text-sm leading-7">閱讀文章、共用條件與原始圖面請由上方題號連結開啟完整教學，或<a className="underline" href={question.sourceUrl} target="_blank" rel="noreferrer">核對官方題本 ↗</a>。</p>
              <ol className="my-3 list-decimal space-y-2 pl-5">{guide.steps.map((step,i) => <li key={i}>{step}</li>)}</ol>
              <p className="font-semibold">官方答案：{question.answer === 'CD' ? 'C 或 D 皆可（單選）' : question.answer}</p>
              <ul className="my-3 space-y-2">{guide.reasons.map((reason,i) => <li key={i}><strong>{'ABCD'[i]}．</strong>{reason}</li>)}</ul>
              {guide.references?.length ? <nav aria-label="本題原理及更正來源" className="flex flex-wrap gap-3 text-sm">{guide.references.map(ref => <a key={ref.url} className="underline" href={ref.url} target="_blank" rel="noreferrer">{ref.title} ↗</a>)}</nav> : null}
            </details>
            <ExamKnowledgeDiagram id={question.id} /><ExamConceptTable id={question.id} /><p className="font-semibold">換條件自己做</p><p>{guide.transfer.prompt}</p>
            <details><summary className="cursor-pointer">展開遷移練習解法</summary><p className="my-3">{guide.transfer.answer}</p><ol className="list-decimal space-y-2 pl-5">{guide.transfer.steps.map((step,i) => <li key={i}>{step}</li>)}</ol></details>
          </div>)}
        </details>}
      </article>;
    })}
    <p className="leading-7">完成後自評：我能說明觀念、獨立解題、解釋錯因，並處理換條件題。仍需看解法的單元，安排隔天、七天後各重做一次。</p>
  </section>;
}
