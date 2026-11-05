import Link from 'next/link';
import type { LearnCourse, Exercise } from '@/data/learnPath/types';
import { getTopicTeachingCases } from '@/lib/pedagogy/canonicalExams';

function solution(item: Exercise) {
  switch (item.type) {
    case 'mcq': return item.choices[item.answer];
    case 'tf': return item.answer ? '正確' : '錯誤';
    case 'num': return [item.answer, item.unit].filter(x => x !== undefined).join(' ');
    case 'match': return item.pairs.map(pair => pair.join(' → ')).join('、');
    case 'order': return item.tiles.join(' → ');
  }
}

export default function TermHandout({course, label}: {course: LearnCourse; label: string}) {
  return <section id="handout" className="mx-auto max-w-4xl space-y-5 px-5 py-10">
    <h2 className="text-2xl font-bold">{label}・{course.title}段考複習講義</h2>
    <p>{course.placement}。下列依單元順序安排複習，實際考試範圍請對照老師公告。</p>
    {course.units.map((unit, index) => {
      const route = unit.topic && `/subjects/${unit.topic.subject}/${unit.topic.topic}`;
      const cases = route ? getTopicTeachingCases(route) : [];
      const sample = unit.items.find(item => item.explain && ['num','mcq','tf'].includes(item.type));
      const phase = index === course.units.length - 1 ? '期末複習' : index < course.units.length / 3 ? '第一次段考' : '期中複習';
      return <article key={unit.id} className="space-y-3 rounded-xl border p-5">
        <p className="text-sm">{phase}建議單元</p><h3 className="text-xl font-bold">{unit.title}</h3>{index === course.units.length - 1 && <p>期末自測時，先重做前面各單元的一道錯題，再完成本單元練習。</p>}
        <p>{unit.outline}</p><ul className="list-disc space-y-1 pl-5">{unit.guide.map((line,i)=><li key={i}>{line}</li>)}</ul>
        {sample && <><p><strong>先自己做　</strong>{sample.prompt}</p>{sample.type==='mcq' && <ul className="list-disc pl-5">{sample.choices.slice((index + 1) % sample.choices.length).concat(sample.choices.slice(0, (index + 1) % sample.choices.length)).map((choice,i)=><li key={i}>{choice}</li>)}</ul>}
        <details><summary>核對答案與理由</summary><p>{solution(sample)}。{sample.explain}</p></details></>}
        {route && <Link className="block underline" href={route}>重讀對應教學頁</Link>}
        {cases.length > 0 && <p className="font-semibold">同章統測題型與逐步解法</p>}{cases.slice(0,3).map(({guide,question})=><Link key={question.id} className="block underline" href={route+'#bridge-'+question.id}>{question.year} 年第 {question.questionNo} 題・{guide.kind}</Link>)}
      </article>;
    })}
  </section>;
}
