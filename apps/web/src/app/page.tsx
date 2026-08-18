import Link from 'next/link';
import { ArrowRight, Building2, CheckCircle2, Compass, DraftingCompass, HardHat, Play, ShieldCheck, Target } from 'lucide-react';
import ExpertCouncilBanner from '@/components/pedagogy/ExpertCouncilBanner';
import AdaptiveDailyLoop from '@/components/pedagogy/AdaptiveDailyLoop';

const paths = [
  { icon: Compass, eyebrow: '👶 給不知從何開始的你', title: '跟著課程地圖穩穩學', copy: '把 99 個章節依先備知識排好，從生活常識出發，一步步陪你走到統測考題，沒有壓力。', href: '/curriculum', cta: '展開我的學習地圖', tone: 'blue', primary: true },
  { icon: Target, eyebrow: '🎯 給想找出手感的你', title: '用歷屆試題找弱點', copy: '111–115 年共 925 題。寫錯沒關係，系統會溫柔地幫你拆解步驟，並收錄到專屬錯題本。', href: '/practice', cta: '開始一次無壓力的練習', tone: 'coral', primary: true },
  { icon: DraftingCompass, eyebrow: '動態圖解', title: '互動圖解實驗室', copy: '簡支梁受力、莫爾圓主應力、第三角投影展開與水灰比強度模擬。', href: '/visualizers', cta: '進入圖解實驗室', tone: 'slate' },
  { icon: HardHat, eyebrow: '現場實務', title: '營造現場檢驗手冊', copy: '連結施工規範綱要、CNS 坍度氯離子試驗、高張力螺栓與梁穿孔防錯。', href: '/field-guide', cta: '查閱現場手冊', tone: 'slate' },
  { icon: ShieldCheck, eyebrow: '高頻速查', title: '全科考點速查指南', copy: '專一專二高頻公式卡、物理量綱、記憶口訣與一鍵複製 LaTeX 算式。', href: '/cheatsheets', cta: '開啟考點速查卡', tone: 'slate' },
  { icon: Building2, eyebrow: '建立建築感', title: '從真實案例理解', copy: '把結構、材料、構造與空間，放回你看得見的台灣建築。', href: '/cases', cta: '進入案例實驗室', tone: 'slate' },
];

const subjects = [
  { no: '01', title: '工程力學', meta: '7 章 · 專業（一）', href: '/subjects/mechanics' },
  { no: '02', title: '材料與試驗', meta: '12 章 · 專業（一）', href: '/subjects/materials' },
  { no: '03', title: '測量實習', meta: '6 章 · 專業（二）', href: '/subjects/surveying' },
  { no: '04', title: '製圖實習', meta: '8 章 · 專業（二）', href: '/subjects/drafting' },
];

export default function Home() {
  return (
    <div className="v7-home pb-20 sm:pb-28 bg-[#fafaf9] dark:bg-slate-950">
      <section className="v7-hero relative overflow-hidden border-b border-slate-200/60 dark:border-slate-800/60 bg-gradient-to-b from-blue-50/30 to-transparent dark:from-blue-950/20">
        <div className="v7-measure" aria-hidden="true" />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-20 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:px-8">
          <div className="relative z-10">
            <div className="mb-6 flex flex-wrap items-center gap-2 text-[11px] font-bold tracking-[.16em]">
              <span className="rounded-full bg-blue-600/90 px-3 py-1.5 text-white">ARCH V8.01</span>
              <span className="text-slate-500 dark:text-slate-400">台灣高工建築科學習基地</span>
            </div>
            <ExpertCouncilBanner compact className="mb-6" />
            <h1 className="max-w-3xl font-serif text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[1.1] tracking-[-.03em] text-slate-800 dark:text-slate-100">
              把建築學懂，<br /><span className="text-blue-700 dark:text-blue-400">也把信心慢慢蓋起來。</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
              覺得力學很難？公式背不起來？沒關係，我們一步步來。從生活中的真實建築、動態圖解與步驟化的引導開始，讓每一次的學習都不再充滿挫折感。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/curriculum" className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-blue-600 px-7 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 hover:shadow-blue-600/30">
                <Play className="size-4 fill-current" /> 從最簡單的第一章開始
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              {['免登入無壓力', '沒有擾人廣告', '錯題與進度自動保存'].map((item) => <span key={item} className="inline-flex items-center gap-1.5"><CheckCircle2 className="size-4 text-emerald-500" />{item}</span>)}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:max-w-none" aria-label="Arch 學習流程示意">
            <div className="relative aspect-[4/4.35] overflow-hidden rounded-[2.5rem] border border-blue-100/50 bg-white p-6 shadow-2xl shadow-blue-900/5 dark:border-blue-900/30 dark:bg-slate-900 sm:p-9">
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between border-b border-slate-100 dark:border-slate-800 pb-5">
                  <div><p className="font-mono text-[10px] tracking-[.2em] text-slate-400">TODAY'S GENTLE PLAN</p><h2 className="mt-2 font-serif text-2xl font-bold text-slate-800 dark:text-slate-200">今天，只完成一小步就好</h2></div>
                  <DraftingCompass className="size-8 text-blue-500/80" />
                </div>
                <div className="my-auto space-y-3">
                  {[['01', '看看生活中的梁受力', '輕鬆看 · 3 min'], ['02', '跟著老師慢慢畫圖', '無壓力示範 · 5 min'], ['03', '試著回答 2 個小問題', '隨意練習 · 5 min']].map(([n,t,m], i) => (
                    <div key={n} className={`flex items-center gap-4 rounded-2xl border p-4 transition-colors ${i === 0 ? 'border-blue-200/60 bg-blue-50/50 dark:border-blue-900/40 dark:bg-blue-900/20' : 'border-slate-100 bg-slate-50/50 dark:border-slate-800/50 dark:bg-slate-800/20'}`}>
                      <span className={`font-mono text-xs font-bold ${i === 0 ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400'}`}>{n}</span><div className="min-w-0 flex-1"><p className={`font-bold text-sm ${i === 0 ? 'text-blue-900 dark:text-blue-100' : 'text-slate-600 dark:text-slate-300'}`}>{t}</p><p className="mt-1 text-xs text-slate-500">{m}</p></div>{i === 0 && <span className="size-2 rounded-full bg-blue-500 shadow-[0_0_12px_#3b82f6]" />}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 border-t border-slate-100 dark:border-slate-800 pt-5 text-center">
                  <div><strong className="block text-xl font-bold text-slate-700 dark:text-slate-300">99</strong><span className="text-[10px] text-slate-500">拆解小節</span></div>
                  <div className="border-x border-slate-100 dark:border-slate-800"><strong className="block text-xl font-bold text-slate-700 dark:text-slate-300">925</strong><span className="text-[10px] text-slate-500">歷屆試題</span></div>
                  <div><strong className="block text-xl font-bold text-slate-700 dark:text-slate-300">∞</strong><span className="text-[10px] text-slate-500">無盡包容</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <AdaptiveDailyLoop />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-16 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-bold tracking-widest text-slate-400 uppercase">START HERE</p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-100 sm:text-4xl">如果你不知道從哪裡開始...</h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400 leading-relaxed">別擔心，我們幫你整理了最適合新手的兩條溫和路徑，隨時可以停下來休息。</p>
        </div>
        
        {/* Primary Paths (Cognitive Load Reduction) */}
        <div className="grid gap-6 sm:grid-cols-2 mb-12">
          {paths.filter(p => p.primary).map(({ icon: Icon, ...path }, index) => (
            <Link key={path.title} href={path.href} className="group relative flex flex-col rounded-[2rem] border border-blue-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/5 dark:border-slate-800 dark:bg-slate-900 sm:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-2xl ${path.tone === 'blue' ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' : 'bg-rose-50 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400'}`}>
                  <Icon className="size-8" strokeWidth={1.5} />
                </div>
                <span className="font-bold text-sm text-slate-500 dark:text-slate-400">{path.eyebrow}</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">{path.title}</h3>
              <p className="flex-1 text-base leading-relaxed text-slate-600 dark:text-slate-400 mb-8">{path.copy}</p>
              <div className="inline-flex items-center gap-2 text-sm font-bold text-slate-800 dark:text-slate-200">
                {path.cta} 
                <span className={`flex size-8 items-center justify-center rounded-full transition-colors ${path.tone === 'blue' ? 'bg-blue-50 group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-900/40' : 'bg-rose-50 group-hover:bg-rose-600 group-hover:text-white dark:bg-rose-900/40'}`}>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Secondary Paths (Progressive Disclosure) */}
        <div className="mt-16 pt-16 border-t border-slate-200/60 dark:border-slate-800/60">
          <div className="mb-8">
            <h3 className="text-lg font-bold text-slate-700 dark:text-slate-300">進階探索區</h3>
            <p className="text-sm text-slate-500 mt-1">當你覺得準備好時，再來看看這些進階工具。</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {paths.filter(p => !p.primary).map(({ icon: Icon, ...path }) => (
              <Link key={path.title} href={path.href} className="group flex flex-col rounded-2xl border border-slate-200/80 bg-slate-50/50 p-5 transition duration-300 hover:bg-white hover:shadow-md dark:border-slate-800 dark:bg-slate-900/50 dark:hover:bg-slate-900">
                <Icon className="mb-4 size-6 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300" strokeWidth={1.5} />
                <h4 className="font-bold text-sm text-slate-700 dark:text-slate-300 mb-2">{path.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed mb-4 flex-1">{path.copy}</p>
                <span className="text-[11px] font-bold text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 flex items-center gap-1">探索 <ArrowRight className="size-3" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-100/70 dark:border-slate-800 dark:bg-slate-900/40">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[.8fr_1.2fr] lg:px-8">
          <div><p className="v7-kicker">CORE SUBJECTS</p><h2 className="mt-3 font-serif text-3xl font-bold text-slate-950 dark:text-white sm:text-4xl">四門專業核心，<br />連成一張建築圖。</h2><p className="mt-5 max-w-md text-sm leading-7 text-slate-600 dark:text-slate-400">力學回答「為什麼站得住」，材料回答「用什麼蓋」，測量與製圖則把想法準確放到現場。</p><Link href="/curriculum" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue-700 dark:text-blue-300">瀏覽全部共同與專業科目 <ArrowRight className="size-4" /></Link></div>
          <div className="divide-y divide-slate-300 border-y border-slate-300 dark:divide-slate-700 dark:border-slate-700">
            {subjects.map((subject) => <Link href={subject.href} key={subject.no} className="group grid grid-cols-[2.5rem_1fr_auto] items-center gap-3 py-5 sm:grid-cols-[4rem_1fr_auto] sm:py-6"><span className="font-mono text-xs text-slate-400">{subject.no}</span><div><h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-blue-700 dark:text-white dark:group-hover:text-blue-300 sm:text-2xl">{subject.title}</h3><p className="mt-1 text-xs text-slate-500">{subject.meta}</p></div><ArrowRight className="size-5 transition-transform group-hover:translate-x-1" /></Link>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
          <div>
            <p className="v7-kicker">終極目標 · ULTIMATE GOAL</p>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">現在學的，<br />會通往哪裡？</h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-slate-600 dark:text-slate-300">從高工建築科一路看見建築師、結構工程技師與土木工程技師。一次讀懂資格、考科、領證、執業與三者真正的工作差異。</p>
            <Link href="/goals" className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full bg-slate-950 px-6 text-sm font-bold text-white transition hover:bg-blue-800 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-100">打開完整證照地圖 <ArrowRight className="size-4" /></Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { icon: DraftingCompass, title: '建築師', copy: '空間、法規、構造與環境的整合者', tone: 'text-blue-700 dark:text-blue-300' },
              { icon: ShieldCheck, title: '結構技師', copy: '結構安全、耐震與力流的守門人', tone: 'text-teal-700 dark:text-teal-300' },
              { icon: HardHat, title: '土木技師', copy: '工程、地盤、施工與城市基礎的實踐者', tone: 'text-amber-700 dark:text-amber-300' },
            ].map(({ icon: Icon, title, copy, tone }) => <Link key={title} href="/goals" className="group rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-blue-300 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-blue-600"><Icon className={`size-7 ${tone}`} /><h3 className="mt-5 font-serif text-xl font-bold text-slate-950 dark:text-white">{title}</h3><p className="mt-2 text-xs leading-6 text-slate-600 dark:text-slate-400">{copy}</p><ArrowRight className="mt-5 size-4 text-slate-400 transition-transform group-hover:translate-x-1" /></Link>)}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 px-4 py-16 dark:border-slate-800 sm:px-6 sm:py-24 lg:px-8">
        <div className="v7-cta relative overflow-hidden rounded-[2rem] px-6 py-12 text-white sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between">
          <div className="absolute -right-12 -top-12 size-52 rounded-full border-[32px] border-white/10" />
          <div className="relative max-w-2xl"><p className="text-xs font-bold tracking-[.2em] text-white/75">NEXT ACTION</p><h2 className="mt-3 font-serif text-3xl font-bold sm:text-5xl">別等準備好，先做五題。</h2><p className="mt-4 max-w-xl text-sm leading-7 text-white/85">系統會依你的作答調整難度；錯題只存於裝置，不需帳號，也不追蹤你。</p></div>
          <Link href="/practice" className="relative mt-8 inline-flex min-h-14 items-center gap-3 rounded-full bg-white px-7 font-bold text-slate-950 transition hover:scale-[1.02] lg:mt-0">開始診斷 <ArrowRight className="size-4" /></Link>
        </div>
      </section>
    </div>
  );
}
