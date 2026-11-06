import ExamConceptTable from '@/components/pedagogy/ExamConceptTable';
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
      const cases = route ? getTopicTeachingCases(route) : [];
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
        {route && <Link className="block underline" href={route}>重讀對應教學頁</Link>}
        {cases.length > 0 && <details className="rounded-lg border p-4"><summary className="cursor-pointer font-semibold">統測題型與換條件練習（{cases.length} 組）</summary>
          {cases.map(({guide,question}) => <div key={question.id} className="mt-5 space-y-3 border-t pt-4">
            <Link className="block font-semibold underline" href={route+'#bridge-'+question.id}>{question.year} 年第 {question.questionNo} 題・{guide.kind}</Link>
            {guide.knowledge.map(([title, explanation]) => <p key={title} className="leading-7"><strong>{title}　</strong>{explanation}</p>)}
            <ExamConceptTable id={question.id} /><p className="font-semibold">換條件自己做</p><p>{guide.transfer.prompt}</p>
            <details><summary className="cursor-pointer">展開遷移練習解法</summary><p className="my-3">{guide.transfer.answer}</p><ol className="list-decimal space-y-2 pl-5">{guide.transfer.steps.map((step,i) => <li key={i}>{step}</li>)}</ol></details>
          </div>)}
        </details>}
      </article>;
    })}
    <p className="leading-7">完成後自評：我能說明觀念、獨立解題、解釋錯因，並處理換條件題。仍需看解法的單元，安排隔天、七天後各重做一次。</p>
  </section>;
}
