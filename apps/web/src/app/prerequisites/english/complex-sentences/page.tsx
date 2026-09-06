'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Puzzle,
  Volume2,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Award,
  ShieldAlert,
  Printer
} from 'lucide-react';

export default function ComplexSentencesPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'pillars' | 'traps' | 'quiz'>('overview');
  const [activePillarIndex, setActivePillarIndex] = useState<number>(0);
  const [quizIndex, setQuizIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  const playTTS = (text: string, rate: number = 0.9) => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = rate;
      window.speechSynthesis.speak(utterance);
    }
  };

  // 4 Core Conjunction & Clause Pillars
  const pillars = [
    {
      id: 0,
      nameZh: '對等連接詞 (FANBOYS 基礎)',
      nameEn: 'Coordinating Conjunctions',
      badge: '天平兩端・地位同等',
      formula: 'Clause 1, [and / but / or / so] Clause 2',
      color: 'from-blue-500 to-indigo-600',
      border: 'border-blue-300 dark:border-blue-800',
      bg: 'bg-blue-50/50 dark:bg-blue-950/20',
      description: '連接詞性相同、文法地位平等的兩個單字、片語，或用逗號連接兩個各自獨立的完整子句。',
      rules: [
        { title: 'and (並列遞進、而且)', desc: '連接語義方向相同的內容：The steel is strong and durable.（鋼材堅固且耐久。）' },
        { title: 'but (對比轉折、但是)', desc: '連接語意相反或出乎意料的內容：The task was difficult, but the crew finished on time.（任務很艱鉅，但團隊按時完工。）' },
        { title: 'or (選擇、或者 / 否則)', desc: '提供選項：Do you want concrete or brick?；祈使句後代表「否則」：Wear your helmet, or you will get hurt.' },
        { title: 'so (因果推論、所以)', desc: '前因後果：The rain was heavy, so we stopped welding.（雨下得很大，所以我們停止焊接。）' }
      ],
      punctuationRule: '標點原則：連接兩個完整子句 (S+V) 時，對等連接詞前面務必加上「逗號 (,)」；連接兩個單字時不加逗號。',
      examples: [
        { en: 'The architect drew the sketch, and the engineer calculated the load.', zh: '建築師畫出了草圖，而工程師計算了載重。', highlight: ', and (連接兩子句)' },
        { en: 'Study hard, or you will fail the certification exam.', zh: '認真讀書，否則你專業證照考試會不及格。', highlight: 'or (祈使句後表示否則)' }
      ],
      proTip: '統測高頻句型：「祈使句 + and, S + will + V」代表「只要...就...」；「祈使句 + or, S + will + V」代表「...否則...」！'
    },
    {
      id: 1,
      nameZh: '副詞子句從屬連接詞',
      nameEn: 'Adverbial Clauses',
      badge: '主客分明・補充條件背景',
      formula: '[Because / When / If / Although] Sub-Clause, Main Clause',
      color: 'from-emerald-500 to-teal-600',
      border: 'border-emerald-300 dark:border-emerald-800',
      bg: 'bg-emerald-50/50 dark:bg-emerald-950/20',
      description: '由從屬連接詞引導，用來補充說明主要子句發生的「時間、原因、條件、讓步」背景。從屬子句不能單獨成為完整句子！',
      rules: [
        { title: '時間子句 (when, while, before, after, until, as soon as)', desc: '重要法則：時間副詞子句中一律「用現在式代替未來式」！例如：When the boss arrives tomorrow (不用 will arrive)。' },
        { title: '原因子句 (because, since, as)', desc: '致命禁忌：because (因為) 與 so (所以) 絕不能在同一個句子裡重複出現！只能二擇一。' },
        { title: '讓步子句 (although, though)', desc: '致命禁忌：although (雖然) 與 but (但是) 絕不能在同一個句子裡重複出現！只能二擇一。' },
        { title: '條件子句 (if, unless 除非)', desc: '重要法則：條件副詞子句中一律「用現在式代替未來式」！例如：If it rains tomorrow, we will stay indoors.' }
      ],
      punctuationRule: '標點原則：從屬副詞子句若放在「句首」，後方必須加逗號隔開；若放在「句尾」，前方通常不加逗號。',
      examples: [
        { en: 'Because the soil was unstable, the team reinforced the retaining wall.', zh: '因為土壤不穩定，團隊加固了擋土牆。（放在句首加逗號）', highlight: 'Because / , (不可加 so)' },
        { en: 'Although the crane is expensive, it saves enormous labor time.', zh: '雖然起重機很昂貴，但它節省了巨大的工時。（不可加 but）', highlight: 'Although / , (不可加 but)' }
      ],
      proTip: '統測秒殺法則：看到 Because 開頭，句中若有 so 一律是扣分錯字！看到 Although 開頭，句中若有 but 也一律是錯字！'
    },
    {
      id: 2,
      nameZh: '名詞子句 (that 引導)',
      nameEn: 'Noun Clauses with that',
      badge: '打包整個事實・當受詞主詞',
      formula: 'S + Verb + (that) + Complete Clause [S + V + O]',
      color: 'from-amber-500 to-orange-600',
      border: 'border-amber-300 dark:border-amber-800',
      bg: 'bg-amber-50/50 dark:bg-amber-950/20',
      description: '將一個「主謂受完整」的句子前面加上 that，把整個事件打包當作名詞，常放在及物動詞後面充當「受詞」！',
      rules: [
        { title: 'that 後接完整子句', desc: 'that 本身無實質中文意思，僅作連接功能，其後方的子句主詞、動詞、受詞必須完全齊全。' },
        { title: '常見接 that 子句之及物動詞', desc: 'think（認為）, know（知道）, believe（相信）, say（說）, hope（希望）, notice（注意到）, agree（同意）。' },
        { title: 'that 可自由省略之規則', desc: '當 that 引導的名詞子句充當動詞的受詞時，that 通常可以自由省略不寫！' }
      ],
      punctuationRule: '標點原則：名詞子句緊接在主要動詞之後，中間絕對不可以加逗號！',
      examples: [
        { en: 'The project manager thinks (that) we will finish the foundation on time.', zh: '專案經理認為我們能如期完成地基工程。', highlight: 'thinks (that) + 完整子句' },
        { en: 'All workers know that wearing a harness prevents fatal falls.', zh: '所有工人都知道配戴安全帶能預防致命墜落。', highlight: 'know that + 完整子句' }
      ],
      proTip: '統測秘訣：看到動詞後面直接接 that，後面必然是一個完整的五大句型結構；that 前面若不是動詞而是名詞，那就是形容詞關係子句！'
    },
    {
      id: 3,
      nameZh: '關係代名詞初階 (形容詞子句)',
      nameEn: 'Relative Pronouns (Basics)',
      badge: '名詞的專屬標籤・兩句合一',
      formula: 'Antecedent (先行詞) + [who / which / that] + Clause',
      color: 'from-purple-500 to-violet-600',
      border: 'border-purple-300 dark:border-purple-800',
      bg: 'bg-purple-50/50 dark:bg-purple-950/20',
      description: '用來修飾前方特定名詞（先行詞）的子句。關係代名詞兼具「代名詞」與「連接詞」雙重身分，是高中長句閱讀的基石！',
      rules: [
        { title: '先行詞指「人」', desc: '關係代名詞使用 who（主格）或 that。例如：The engineer who inspects the site is my mentor.' },
        { title: '先行詞指「事物、動物」', desc: '關係代名詞使用 which 或 that。例如：The tool which is on the workbench is an electric drill.' },
        { title: '兩句合一 3 步驟', desc: '1. 找出兩句相同名詞；2. 將第二句名詞換為 who/which/that；3. 將關係子句緊貼在先行詞後面。' }
      ],
      punctuationRule: '國中限定用法：關係代名詞前不加逗號，用來明確指定「是哪一個人或哪一個物品」。',
      examples: [
        { en: 'The surveyor who is holding the prism pole is highly experienced.', zh: '那位正拿著稜鏡桿的測量員經驗非常豐富。', highlight: 'surveyor who (先行詞指人)' },
        { en: 'We use steel that can resist seismic shock.', zh: '我們使用能夠抵禦地震震動的鋼材。', highlight: 'steel that (先行詞指物)' }
      ],
      proTip: '國中昇技高黃金鐵律：先行詞是人絕不可選 which！先行詞是物絕不可選 who！that 則是人事物皆通用的安全牌。'
    }
  ];

  // Common Traps Data
  const traps = [
    {
      title: '陷阱 1：因為...所以... (Because... so...) 雙重連接詞扣分地雷',
      wrong: 'Because the typhoon was approaching, so the site manager suspended all crane operations.',
      correct: 'Because the typhoon was approaching, the site manager suspended all crane operations. (或 The typhoon was approaching, so the site manager suspended all crane operations.)',
      reason: '中文常說「因為...所以...」，但在英文中 because 與 so 都是連接詞，一個句子連接兩個子句只能用「一個」連接詞！'
    },
    {
      title: '陷阱 2：雖然...但是... (Although... but...) 雙重連接詞扣分地雷',
      wrong: 'Although the reinforced concrete is very heavy, but it provides superior stability.',
      correct: 'Although the reinforced concrete is very heavy, it provides superior stability. (或 The reinforced concrete is very heavy, but it provides superior stability.)',
      reason: '與 because... so... 完全相同，although 與 but 絕對不能在同一句中並存！'
    },
    {
      title: '陷阱 3：時間與條件副詞子句誤用未來式 (will)',
      wrong: 'When the concrete mixer will arrive tomorrow, we will begin the casting.',
      correct: 'When the concrete mixer arrives tomorrow, we will begin the casting.',
      reason: '在 when, before, after, if 引導的時間與條件副詞子句中，必須「用現在簡單式 (arrives) 代替未來式」！只有主要子句才用 will begin。'
    },
    {
      title: '陷阱 4：because (連接詞) 與 because of (介系詞) 混淆',
      wrong: 'We halted the survey because of the rain was too heavy.',
      correct: 'We halted the survey because the rain was too heavy. (或 We halted the survey because of the heavy rain.)',
      reason: 'because 是「連接詞」，後面必須接完整子句 (S + V)；because of 是「介系詞片語」，後面只能接「名詞或名詞片語」！'
    },
    {
      title: '陷阱 5：先行詞為人，關代誤用 which',
      wrong: 'The welder which repaired the steel truss won the safety badge.',
      correct: 'The welder who (或 that) repaired the steel truss won the safety badge.',
      reason: 'welder（電焊工）是人，關係代名詞必須用 who 或 that，絕對不能使用指涉物品的 which！'
    }
  ];

  // Quiz Questions
  const quizQuestions = [
    {
      question: '_____ the weather was stormy and cold, the crew managed to finish the inspection on time.',
      options: ['Although', 'Because of', 'Despite of', 'So'],
      answer: 0,
      explanation: '後方為完整子句「the weather was stormy and cold (天氣暴風雨且寒冷)」與「如期完成檢驗」形成轉折對比，故需選表示「雖然」的從屬連接詞 Although。注意：主要子句沒有 but，用法完全正確。'
    },
    {
      question: 'If the supplier _____ the steel bars tomorrow, we will begin assembling the cage.',
      options: ['delivers', 'will deliver', 'delivered', 'is delivering'],
      answer: 0,
      explanation: '在 if 引導的條件副詞子句中，即使有明日時間提示詞 tomorrow，也必須「用現在簡單式代替未來式」，主詞 the supplier 為三單，故選 delivers。'
    },
    {
      question: 'The construction project was temporarily suspended _____ the sudden torrential rain.',
      options: ['because', 'because of', 'although', 'since'],
      answer: 1,
      explanation: '空格後方「the sudden torrential rain (突如其來的暴雨)」是一個名詞片語，並沒有動詞。表示原因且後接名詞片語，必須選擇介系詞 because of。'
    },
    {
      question: 'Put on your safety helmet and goggles, _____ you may get injured on the site.',
      options: ['and', 'or', 'so', 'but'],
      answer: 1,
      explanation: '這是「祈使句 + or + S + will/may + V」句型，or 在此代表「否則（不然的話）」。句意：戴上你的安全帽與護目鏡，否則你在工地上可能會受傷。'
    },
    {
      question: 'The structural engineer _____ inspected the bridge foundation certified its safety.',
      options: ['which', 'who', 'whom', 'whose'],
      answer: 1,
      explanation: '先行詞 The structural engineer（結構工程師）是人，且在關係子句中擔任動詞 inspected 的主詞（主格），因此應選關係代名詞 who。'
    },
    {
      question: 'All the apprentice architects believe _____ 3D BIM modeling will replace traditional 2D drawings.',
      options: ['what', 'which', 'that', 'where'],
      answer: 2,
      explanation: '動詞 believe 後方接一個主謂受完整的名詞子句當作直接受詞，引導詞應使用 that（在口語中常可省略）。what 需引導不完整子句，故不能選。'
    }
  ];

  const handleSelectOption = (idx: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(idx);
    setShowExplanation(true);
    if (idx === quizQuestions[quizIndex].answer) {
      setQuizScore((prev) => prev + 1);
    }
  };

  const handleNextQuiz = () => {
    if (quizIndex < quizQuestions.length - 1) {
      setQuizIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setQuizIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setQuizScore(0);
    setQuizFinished(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between gap-4 text-xs font-mono text-slate-500 dark:text-slate-400 print:hidden">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-blue-600 transition-colors">首頁</Link>
            <span>/</span>
            <Link href="/prerequisites" className="hover:text-blue-600 transition-colors">先備跳板中心</Link>
            <span>/</span>
            <span className="text-slate-800 dark:text-slate-200 font-bold">主從複合句型與連接詞</span>
          </div>
          <button
            type="button"
            onClick={() => window.print()}
            className="rounded-lg bg-white dark:bg-slate-900 px-3 py-1.5 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1.5 text-slate-700 dark:text-slate-300 cursor-pointer shadow-xs"
          >
            <Printer className="size-3.5" />
            <span>列印講義 (A4)</span>
          </button>
        </div>

        {/* Hero Header */}
        <header className="rounded-3xl border border-indigo-200 dark:border-indigo-900/60 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent p-6 sm:p-10 relative overflow-hidden shadow-sm">
          <div className="space-y-3 relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-300 dark:border-indigo-700 bg-indigo-100/80 dark:bg-indigo-900/40 px-3 py-1 text-xs font-mono font-bold text-indigo-800 dark:text-indigo-300">
              <Puzzle className="size-3.5 text-indigo-600 dark:text-indigo-400" />
              Step-0 零痛先備跳板・國中句型架構篇
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
              國中主從複合句型與連接詞零痛銜接教室
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
              破解長難句的關鍵就在「連接詞」！看懂對等連接詞 (and, but, or, so)、副詞從屬子句 (because, although, if, when)、名詞子句 that 與初階關係代名詞 (who, which)，掌握由短句到長句的積木拼裝法則。
            </p>
          </div>
        </header>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 gap-2 overflow-x-auto pb-1 print:hidden">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-bold transition-all shrink-0 cursor-pointer ${
              activeTab === 'overview'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
            }`}
          >
            🚂 句子積木列車圖解
          </button>
          <button
            onClick={() => setActiveTab('pillars')}
            className={`px-4 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-bold transition-all shrink-0 cursor-pointer ${
              activeTab === 'pillars'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
            }`}
          >
            🏛️ 4 大核心連接詞支柱
          </button>
          <button
            onClick={() => setActiveTab('traps')}
            className={`px-4 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-bold transition-all shrink-0 cursor-pointer ${
              activeTab === 'traps'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
            }`}
          >
            ⚠️ 句型扣分地雷 TOP 5
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`px-4 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-bold transition-all shrink-0 cursor-pointer ${
              activeTab === 'quiz'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
            }`}
          >
            🎯 隨堂實戰測驗 (6 題)
          </button>
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Visual Sentence Trains */}
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-2">
                <Sparkles className="size-5 text-indigo-600" />
                <h2 className="font-serif text-xl font-bold">三種句子列車的架構剖析</h2>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                英語文所有的複雜長句，都是從「單句」出發，透過不同種類的「連接詞」組裝而成。請觀察以下三種列車型態：
              </p>

              <div className="grid gap-4 pt-2">
                {/* 1. Simple Sentence */}
                <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/30 p-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-950/60 px-2.5 py-1 rounded-full">
                      型態 1：單句 (Simple Sentence)
                    </span>
                    <span className="font-mono text-xs text-slate-400">1 個主詞 + 1 個動詞</span>
                  </div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white">單一獨立子句・核心骨架</h3>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 font-mono text-xs flex items-center justify-between">
                    <div>
                      <span className="text-blue-600 dark:text-blue-400 font-bold">[The surveyor measured the slope.]</span>
                      <div className="text-slate-500 font-sans mt-0.5">測量員測量了坡度。</div>
                    </div>
                    <button
                      onClick={() => playTTS('The surveyor measured the slope.')}
                      className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-blue-600 cursor-pointer"
                      title="朗讀"
                    >
                      <Volume2 className="size-4" />
                    </button>
                  </div>
                </div>

                {/* 2. Compound Sentence */}
                <div className="rounded-2xl border border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/40 dark:bg-indigo-950/20 p-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-950/60 px-2.5 py-1 rounded-full">
                      型態 2：對等複合句 (Compound Sentence)
                    </span>
                    <span className="font-mono text-xs text-indigo-500">子句 1 + 對等連接詞 + 子句 2</span>
                  </div>
                  <h3 className="font-bold text-base text-indigo-950 dark:text-indigo-200">雙核天平・地位平等</h3>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-indigo-200/60 dark:border-indigo-900/40 font-mono text-xs flex items-center justify-between">
                    <div>
                      <span className="text-indigo-600 dark:text-indigo-400 font-bold">[The architect drew the sketch], <span className="text-rose-600 font-black">and</span> [the engineer calculated the stress].</span>
                      <div className="text-slate-500 font-sans mt-0.5">建築師畫了草圖，而工程師計算了應力。（兩句同等重要）</div>
                    </div>
                    <button
                      onClick={() => playTTS('The architect drew the sketch, and the engineer calculated the stress.')}
                      className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-indigo-600 cursor-pointer"
                      title="朗讀"
                    >
                      <Volume2 className="size-4" />
                    </button>
                  </div>
                </div>

                {/* 3. Complex Sentence */}
                <div className="rounded-2xl border border-purple-200 dark:border-purple-900/60 bg-purple-50/40 dark:bg-purple-950/20 p-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-950/60 px-2.5 py-1 rounded-full">
                      型態 3：主從複合句 (Complex Sentence)
                    </span>
                    <span className="font-mono text-xs text-purple-500">主要子句 + 從屬連接詞 + 從屬子句</span>
                  </div>
                  <h3 className="font-bold text-base text-purple-950 dark:text-purple-200">主卡車 + 外掛附隨車廂</h3>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-purple-200/60 dark:border-purple-900/40 font-mono text-xs flex items-center justify-between">
                    <div>
                      <span className="text-purple-600 dark:text-purple-400 font-bold"><span className="text-rose-600 font-black">Because</span> [the foundation was solid], <span className="text-blue-600">[the skyscraper survived the earthquake]</span>.</span>
                      <div className="text-slate-500 font-sans mt-0.5">因為地基非常穩固（從屬副詞子句），所以摩天大樓在地震中安然無恙（主要子句）。</div>
                    </div>
                    <button
                      onClick={() => playTTS('Because the foundation was solid, the skyscraper survived the earthquake.')}
                      className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-purple-600 cursor-pointer"
                      title="朗讀"
                    >
                      <Volume2 className="size-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: 4 Pillars */}
        {activeTab === 'pillars' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Sidebar list */}
            <div className="space-y-2 lg:col-span-1 print:hidden">
              <span className="text-xs font-mono text-slate-400 font-bold block mb-1">選擇連接詞 / 句型支柱：</span>
              {pillars.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setActivePillarIndex(idx)}
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                    activePillarIndex === idx
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="font-bold text-sm">{p.nameZh}</div>
                    <div className={`font-mono text-xs ${activePillarIndex === idx ? 'text-indigo-100' : 'text-slate-400'}`}>
                      {p.nameEn}
                    </div>
                  </div>
                  <span className={`text-xs font-mono px-2 py-0.5 rounded-md ${
                    activePillarIndex === idx ? 'bg-indigo-500/50 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                  }`}>
                    {idx + 1}
                  </span>
                </button>
              ))}
            </div>

            {/* Detail View */}
            <div className="lg:col-span-2 space-y-6">
              {(() => {
                const current = pillars[activePillarIndex];
                return (
                  <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-6">
                    {/* Header */}
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
                      <div>
                        <div className="inline-block text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 px-2.5 py-1 rounded-full mb-1">
                          {current.badge}
                        </div>
                        <h2 className="font-serif text-2xl font-bold text-slate-950 dark:text-white">
                          {current.nameZh}
                        </h2>
                      </div>
                      <div className="rounded-xl bg-slate-100 dark:bg-slate-800 px-4 py-2 font-mono text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                        {current.formula}
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {current.description}
                    </p>

                    {/* Rules */}
                    <div className="space-y-3">
                      <h3 className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider">
                        核心分類與用法：
                      </h3>
                      <div className="grid gap-3">
                        {current.rules.map((rule, ri) => (
                          <div key={ri} className="rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 p-4 space-y-1">
                            <h4 className="font-bold text-xs sm:text-sm text-indigo-700 dark:text-indigo-300">
                              {rule.title}
                            </h4>
                            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                              {rule.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Punctuation */}
                    <div className="rounded-2xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/40 dark:bg-blue-950/20 p-4">
                      <h4 className="font-mono text-xs font-bold text-blue-800 dark:text-blue-300 mb-1">
                        🖋️ 標點符號黃金法則：
                      </h4>
                      <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                        {current.punctuationRule}
                      </p>
                    </div>

                    {/* Examples */}
                    <div className="space-y-3">
                      <h3 className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider">
                        示範例句（點擊發音）：
                      </h3>
                      <div className="grid gap-3">
                        {current.examples.map((ex, ei) => (
                          <div key={ei} className="rounded-2xl border border-slate-200/80 dark:border-slate-800 p-4 bg-white dark:bg-slate-950 flex items-start justify-between gap-3 shadow-2xs">
                            <div className="space-y-1">
                              <p className="font-mono text-sm font-bold text-slate-900 dark:text-slate-100">
                                {ex.en}
                              </p>
                              <p className="text-xs text-slate-500 dark:text-slate-400">
                                {ex.zh}
                              </p>
                              <span className="inline-block text-[11px] font-mono text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/30 px-2 py-0.5 rounded">
                                結構亮點：{ex.highlight}
                              </span>
                            </div>
                            <button
                              onClick={() => playTTS(ex.en)}
                              className="shrink-0 p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-950/40 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
                              title="朗讀此句子"
                            >
                              <Volume2 className="size-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pro Tip */}
                    <div className="rounded-2xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/50 dark:bg-amber-950/20 p-4 flex items-start gap-3">
                      <Lightbulb className="size-5 text-amber-600 shrink-0 mt-0.5" />
                      <div className="text-xs leading-relaxed text-amber-950 dark:text-amber-200">
                        <strong className="font-bold block mb-0.5">💡 大師統測搶分提醒：</strong>
                        {current.proTip}
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}

        {/* Tab 3: Traps */}
        {activeTab === 'traps' && (
          <div className="space-y-4">
            <div className="rounded-3xl border border-rose-200 dark:border-rose-900/60 bg-rose-50/40 dark:bg-rose-950/20 p-6 sm:p-8 space-y-2">
              <div className="flex items-center gap-2">
                <ShieldAlert className="size-5 text-rose-600" />
                <h2 className="font-serif text-xl font-bold text-rose-950 dark:text-rose-200">
                  統測考生主從複合句型最常踩中之 5 大扣分地雷
                </h2>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                連接詞是中文與英文思維最大的差異點！中文習慣「因為...所以...」，而英文文法嚴禁雙重連接詞。請特別注意以下陷阱：
              </p>
            </div>

            <div className="grid gap-4">
              {traps.map((trap, idx) => (
                <div key={idx} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 space-y-3">
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="size-6 rounded-full bg-rose-100 dark:bg-rose-900/50 text-rose-600 dark:text-rose-300 font-mono text-xs flex items-center justify-center font-bold">
                      {idx + 1}
                    </span>
                    {trap.title}
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-3 text-xs font-mono">
                    <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/40 text-red-700 dark:text-red-300">
                      <div className="font-bold mb-1 flex items-center gap-1">
                        <XCircle className="size-3.5 text-red-500" />
                        中式英文扣分示範：
                      </div>
                      <div className="line-through">{trap.wrong}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 text-emerald-700 dark:text-emerald-300">
                      <div className="font-bold mb-1 flex items-center gap-1">
                        <CheckCircle2 className="size-3.5 text-emerald-500" />
                        道地滿分英文：
                      </div>
                      <div>{trap.correct}</div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
                    <strong className="text-slate-800 dark:text-slate-200">🔍 名師解剖：</strong>
                    {trap.reason}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Quiz */}
        {activeTab === 'quiz' && (
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-6">
            {!quizFinished ? (
              <div className="space-y-6">
                {/* Quiz Header */}
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                  <div className="space-y-1">
                    <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400">
                      QUESTION {quizIndex + 1} OF {quizQuestions.length}
                    </span>
                    <h2 className="font-serif text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      主從複合句型隨堂自我檢測
                    </h2>
                  </div>
                  <div className="font-mono text-xs px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    目前得分: {quizScore} / {quizQuestions.length}
                  </div>
                </div>

                {/* Question */}
                <div className="p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/40 text-sm sm:text-base font-mono font-bold text-slate-900 dark:text-white flex items-center justify-between">
                  <span>{quizQuestions[quizIndex].question}</span>
                  <button
                    onClick={() => playTTS(quizQuestions[quizIndex].question)}
                    className="p-1.5 rounded-lg hover:bg-indigo-100 text-slate-500 hover:text-indigo-600 cursor-pointer"
                    title="朗讀題幹"
                  >
                    <Volume2 className="size-4" />
                  </button>
                </div>

                {/* Options */}
                <div className="grid gap-3">
                  {quizQuestions[quizIndex].options.map((opt, idx) => {
                    const isSelected = selectedAnswer === idx;
                    const isCorrect = idx === quizQuestions[quizIndex].answer;
                    let btnClass = 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300';
                    
                    if (selectedAnswer !== null) {
                      if (isCorrect) {
                        btnClass = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 font-bold';
                      } else if (isSelected) {
                        btnClass = 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 font-bold';
                      } else {
                        btnClass = 'border-slate-200 dark:border-slate-800 opacity-50';
                      }
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectOption(idx)}
                        disabled={selectedAnswer !== null}
                        className={`w-full p-3.5 rounded-xl border font-mono text-xs sm:text-sm text-left transition-all flex items-center justify-between cursor-pointer ${btnClass}`}
                      >
                        <span className="flex items-center gap-3">
                          <span className="size-6 rounded-full border border-current flex items-center justify-center font-bold text-xs shrink-0">
                            {String.fromCharCode(65 + idx)}
                          </span>
                          {opt}
                        </span>
                        {selectedAnswer !== null && isCorrect && (
                          <CheckCircle2 className="size-5 text-emerald-600 shrink-0" />
                        )}
                        {selectedAnswer !== null && isSelected && !isCorrect && (
                          <XCircle className="size-5 text-rose-600 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation */}
                {showExplanation && (
                  <div className="rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/60 p-4 space-y-2">
                    <div className="flex items-center gap-2 text-indigo-800 dark:text-indigo-300 font-bold text-xs">
                      <Lightbulb className="size-4" />
                      名師詳解說明：
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                      {quizQuestions[quizIndex].explanation}
                    </p>
                    <button
                      onClick={handleNextQuiz}
                      className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-xs font-bold transition-colors cursor-pointer"
                    >
                      {quizIndex < quizQuestions.length - 1 ? '下一題 →' : '查看檢測成果 🏆'}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* Quiz Result Summary */
              <div className="text-center py-8 space-y-5">
                <div className="size-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                  <Award className="size-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold">測驗完成！</h3>
                  <p className="font-mono text-sm text-slate-500 dark:text-slate-400">
                    你的最終得分：<span className="font-bold text-indigo-600 dark:text-indigo-400 text-xl">{quizScore}</span> / {quizQuestions.length}
                  </p>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
                  {quizScore === quizQuestions.length
                    ? '太精彩了！你已經徹底降伏主從複合句型與連接詞，長難句拆解將不再是你的障礙！'
                    : '很棒的學習！建議再次複習雙重連接詞地雷與條件子句現在代未來原則，熟能生巧！'}
                </p>
                <div className="flex flex-wrap gap-3 justify-center pt-2">
                  <button
                    onClick={handleRestartQuiz}
                    className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 font-mono text-xs font-bold text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
                  >
                    重新測驗 ↺
                  </button>
                  <Link
                    href="/subjects/english/vocabulary-phrases"
                    className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-xs font-bold transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    進入高工統測英語文 Topic 1 學習 →
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Footer Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-500 dark:text-slate-400 print:hidden">
          <Link
            href="/prerequisites/english/basic-tenses-passive"
            className="flex items-center gap-1.5 hover:text-indigo-600 transition-colors"
          >
            <ArrowLeft className="size-3.5" />
            <span>上一步：國中基本時態與被動語態</span>
          </Link>
          <Link
            href="/prerequisites"
            className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 font-bold hover:underline"
          >
            <span>返回先備跳板總覽中心</span>
            <ArrowRight className="size-3.5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
