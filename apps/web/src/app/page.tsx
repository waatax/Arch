import Link from 'next/link';
import { ArrowRight, Building2, CheckCircle2, Compass, DraftingCompass, HardHat, Play, ShieldCheck, Target } from 'lucide-react';
import ExpertCouncilBanner from '@/components/pedagogy/ExpertCouncilBanner';
import AdaptiveDailyLoop from '@/components/pedagogy/AdaptiveDailyLoop';

const paths = [
  { icon: Compass, eyebrow: '從零開始', title: '沿著課程地圖學', copy: '99 個章節依先備知識排列，從生活直覺一路走到統測題型。', href: '/curriculum', cta: '打開課程地圖', tone: 'blue' },
  { icon: Target, eyebrow: '考前衝刺', title: '用歷屆題找弱點', copy: '111–115 年五科共 925 題，練習、解析與錯題複習在同一條流程。', href: '/practice', cta: '開始今日練習', tone: 'coral' },
  { icon: DraftingCompass, eyebrow: '動態圖解', title: '互動圖解實驗室', copy: '簡支梁受力、莫爾圓主應力、第三角投影展開與水灰比強度模擬。', href: '/visualizers', cta: '進入圖解實驗室', tone: 'blue' },
  { icon: HardHat, eyebrow: '現場實務', title: '營造現場檢驗手冊', copy: '連結施工規範綱要、CNS 坍度氯離子試驗、高張力螺栓與梁穿孔防錯。', href: '/field-guide', cta: '查閱現場手冊', tone: 'teal' },
  { icon: ShieldCheck, eyebrow: '高頻速查', title: '全科考點速查指南', copy: '專一專二高頻公式卡、物理量綱、記憶口訣與一鍵複製 LaTeX 算式。', href: '/cheatsheets', cta: '開啟考點速查卡', tone: 'coral' },
  { icon: Building2, eyebrow: '建立建築感', title: '從真實案例理解', copy: '把結構、材料、構造與空間，放回你看得見的台灣建築。', href: '/cases', cta: '進入案例實驗室', tone: 'teal' },
];

const subjects = [
  { no: '01', title: '工程力學', meta: '7 章 · 專業（一）', href: '/subjects/mechanics' },
  { no: '02', title: '材料與試驗', meta: '12 章 · 專業（一）', href: '/subjects/materials' },
  { no: '03', title: '測量實習', meta: '6 章 · 專業（二）', href: '/subjects/surveying' },
  { no: '04', title: '製圖實習', meta: '8 章 · 專業（二）', href: '/subjects/drafting' },
];

export default function Home() {
  return (
    <div className="v7-home pb-20 sm:pb-28">
      <section className="v7-hero relative overflow-hidden border-b border-slate-200 dark:border-slate-800">
        <div className="v7-measure" aria-hidden="true" />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-12 sm:px-6 sm:pb-24 sm:pt-20 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:px-8">
          <div className="relative z-10">
            <div className="mb-6 flex flex-wrap items-center gap-2 text-[11px] font-bold tracking-[.16em]">
              <span className="rounded-full bg-blue-700 px-3 py-1.5 text-white">ARCH V8.01</span>
              <span className="text-slate-500 dark:text-slate-400">台灣高工建築科學習基地</span>
            </div>
            <ExpertCouncilBanner compact className="mb-6" />
            <h1 className="max-w-3xl font-serif text-[clamp(2.8rem,7vw,5.9rem)] font-bold leading-[.98] tracking-[-.055em] text-slate-950 dark:text-white">
              把建築學懂，<br /><span className="v7-outline-text">也把分數蓋起來。</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
              不只背公式。從真實建築、圖解與步驟化例題開始，銜接 13 科 99 章課程、動態圖解實驗室、現場實務手冊與 925 道歷屆題，讓每次學習都有明確下一步。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/curriculum" className="v7-primary group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-blue-700 px-7 font-bold text-white shadow-lg shadow-blue-900/15 transition hover:bg-blue-800">
                <Play className="size-4 fill-current" /> 從第一章開始
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/visualizers" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/70 px-7 font-bold text-slate-900 transition hover:border-blue-600 dark:border-slate-700 dark:bg-slate-900/70 dark:text-white">
                🔬 進入圖解實驗室
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-500 dark:text-slate-400">
              {['免登入', '無廣告', '進度留在裝置內'].map((item) => <span key={item} className="inline-flex items-center gap-1.5"><CheckCircle2 className="size-4 text-teal-600" />{item}</span>)}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:max-w-none" aria-label="Arch 學習流程示意">
            <div className="v7-blueprint-card relative aspect-[4/4.35] overflow-hidden rounded-[2rem] border border-blue-200 bg-blue-950 p-6 text-white shadow-2xl shadow-blue-950/20 sm:p-9">
              <div className="absolute inset-0 v7-blueprint-grid opacity-50" />
              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between border-b border-white/20 pb-5">
                  <div><p className="font-mono text-[10px] tracking-[.2em] text-blue-200">TODAY / STUDY PLAN</p><h2 className="mt-2 font-serif text-2xl font-bold">今天，先完成一小步</h2></div>
                  <DraftingCompass className="size-8 text-cyan-300" />
                </div>
                <div className="my-auto space-y-3">
                  {[['01', '看懂簡支梁受力', '概念 · 8 min'], ['02', '跟著例題畫 FBD', '示範 · 12 min'], ['03', '用 5 題確認理解', '練習 · 10 min']].map(([n,t,m], i) => (
                    <div key={n} className={`flex items-center gap-4 rounded-2xl border p-4 ${i === 0 ? 'border-cyan-300/60 bg-cyan-300/10' : 'border-white/15 bg-white/5'}`}>
                      <span className="font-mono text-xs text-cyan-300">{n}</span><div className="min-w-0 flex-1"><p className="font-bold">{t}</p><p className="mt-1 text-xs text-blue-200">{m}</p></div>{i === 0 && <span className="size-2 rounded-full bg-cyan-300 shadow-[0_0_14px_#67e8f9]" />}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 border-t border-white/20 pt-5 text-center">
                  <div><strong className="block text-xl">99</strong><span className="text-[10px] text-blue-200">完整章節</span></div>
                  <div className="border-x border-white/15"><strong className="block text-xl">925</strong><span className="text-[10px] text-blue-200">歷屆試題</span></div>
                  <div><strong className="block text-xl">8</strong><span className="text-[10px] text-blue-200">建築案例</span></div>
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
          <p className="v7-kicker">CHOOSE YOUR ROUTE</p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">你現在需要哪一條路？</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">不用先理解整個平台。選一個最接近你此刻目標的入口。</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {paths.map(({ icon: Icon, ...path }, index) => (
            <Link key={path.title} href={path.href} className={`v7-route v7-route-${path.tone} group flex min-h-72 flex-col rounded-[1.75rem] border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 dark:border-slate-800 dark:bg-slate-900 sm:p-8`}>
              <div className="flex items-start justify-between"><span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold tracking-widest text-slate-600 dark:bg-slate-800 dark:text-slate-300">{path.eyebrow}</span><span className="font-mono text-xs text-slate-400">0{index + 1}</span></div>
              <Icon className="mt-8 size-10 text-blue-700 dark:text-blue-300" strokeWidth={1.5} />
              <h3 className="mt-5 font-serif text-2xl font-bold text-slate-950 dark:text-white">{path.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-400">{path.copy}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">{path.cta}<ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></span>
            </Link>
          ))}
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
