/* eslint-disable @next/next/no-img-element */
export default function ExamSourceFigure({src,alt,caption,collapsed=false}:{src:string;alt:string;caption?:string;collapsed?:boolean}) {
  const url=`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${src}`;
  const figure=<figure className="exam-source-figure my-4 min-w-0 rounded-xl border border-slate-300 bg-white p-3 text-slate-800 dark:border-slate-700"><a href={url} target="_blank" rel="noreferrer" className="block" aria-label={`放大${alt}`}><img src={url} alt={alt} loading="lazy" decoding="async" className="mx-auto h-auto max-h-[32rem] max-w-full object-contain" /></a><figcaption className="mt-3 text-xs leading-6">{caption || '官方原始題面；請連同圖示、單位與所有條件閱讀。'} <a href={url} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center font-bold text-teal-800 underline">放大原圖 ↗</a></figcaption></figure>;
  return collapsed ? <details className="rounded-xl border border-slate-300 p-3 dark:border-slate-700"><summary className="min-h-11 cursor-pointer text-sm font-bold leading-7">共同題組原圖（同前題，展開核對）</summary>{figure}</details> : figure;
}
