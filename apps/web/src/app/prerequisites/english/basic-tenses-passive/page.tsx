'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Clock,
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

export default function BasicTensesPassivePage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'modules' | 'traps' | 'quiz'>('overview');
  const [activeModuleIndex, setActiveModuleIndex] = useState<number>(0);
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

  // 6 Core Tenses & Passive Modules
  const tenseModules = [
    {
      id: 0,
      nameZh: '現在簡單式',
      nameEn: 'Present Simple',
      badge: '常態・真理・日常習慣',
      formula: 'S + V / V-(s/es)',
      color: 'from-blue-500 to-indigo-600',
      border: 'border-blue-300 dark:border-blue-800',
      bg: 'bg-blue-50/50 dark:bg-blue-950/20',
      description: '描述客觀事實、科學真理、不變的定律以及日常反覆發生的習慣動作。',
      rules: [
        { title: '主詞為第三人稱單數 (he, she, it, the worker)', desc: '動詞字尾必須加 -s 或 -es (play -> plays, watch -> watches, study -> studies)。' },
        { title: '主詞為 I, you, we, they 或複數名詞', desc: '動詞直接使用原形動詞 (build, inspect, measure)。' },
        { title: '否定與疑問', desc: '藉由助動詞 do/does 協助，後方動詞回歸原形 (He does not know. / Do they work here?)。' }
      ],
      timeSignals: ['always', 'usually', 'often', 'sometimes', 'never', 'every day', 'once a week', 'on Mondays'],
      examples: [
        { en: 'Concrete hardens after water is added.', zh: '混凝土在加水後會硬化。（客觀科學事實）', highlight: 'hardens (三單動詞)' },
        { en: 'The architect visits the construction site every Tuesday.', zh: '建築師每週二都會巡視工地。（反覆習慣）', highlight: 'visits / every Tuesday' }
      ],
      proTip: '統測高頻題：看到真理定理（如太陽升起、水結冰、材料特性）一律用「現在簡單式」！'
    },
    {
      id: 1,
      nameZh: '現在進行式',
      nameEn: 'Present Continuous',
      badge: '當下此時此刻・正在發生',
      formula: 'S + am / is / are + V-ing',
      color: 'from-emerald-500 to-teal-600',
      border: 'border-emerald-300 dark:border-emerald-800',
      bg: 'bg-emerald-50/50 dark:bg-emerald-950/20',
      description: '描述此時此刻正在進行的動作，或是現階段正在持續中的短期狀態。',
      rules: [
        { title: '動詞 -ing 變化規則', desc: '一般動詞直接 +ing；字尾有不發音 e 則去 e + ing (make -> making)；短母音+單子音則重複字尾 (run -> running)。' },
        { title: 'be 動詞與主詞呼應', desc: 'I am / He is / She is / It is / We are / They are + V-ing。' },
        { title: '狀態動詞通常不用進行式', desc: '表示心理、知覺或擁有的動詞 (know, love, believe, have 有) 通常只用簡單式。' }
      ],
      timeSignals: ['now', 'right now', 'at the moment', 'Look!', 'Listen!', 'currently', 'these days'],
      examples: [
        { en: 'Look! The crane is lifting the heavy steel girder.', zh: '看！起重機正在吊起沉重的鋼樑。', highlight: 'is lifting (現在進行式)' },
        { en: 'The workers are wearing safety helmets right now.', zh: '工人們現在都正戴著安全帽。', highlight: 'are wearing / right now' }
      ],
      proTip: '統測秘訣：句首若出現「Look!」或「Listen!」等感嘆提示詞，空格 99% 選現在進行式！'
    },
    {
      id: 2,
      nameZh: '過去簡單式',
      nameEn: 'Past Simple',
      badge: '過去特定時間・已結束動作',
      formula: 'S + V-ed / 不規則過去式',
      color: 'from-amber-500 to-orange-600',
      border: 'border-amber-300 dark:border-amber-800',
      bg: 'bg-amber-50/50 dark:bg-amber-950/20',
      description: '描述在過去特定時間點發生的動作或存在的狀態，該動作在過去已經完全結束。',
      rules: [
        { title: '規則動詞變化', desc: '一般動詞加 -ed (walk -> walked)；字尾為 e 加 -d (use -> used)；子音+y 變 -ied (study -> studied)。' },
        { title: '不規則動詞變化', desc: '須熟練記憶：build -> built, buy -> bought, see -> saw, write -> wrote, put -> put。' },
        { title: '否定與疑問助動詞', desc: '過去式統一使用 did / didn\'t，後方動詞務必還原為「原形動詞」！' }
      ],
      timeSignals: ['yesterday', 'last night / week / month / year', 'two hours ago', 'in 2018', 'just now (剛才)', 'then'],
      examples: [
        { en: 'The survey team finished the topographic map yesterday.', zh: '測量團隊昨天完成了地形圖。', highlight: 'finished / yesterday' },
        { en: 'The structural engineer did not approve the change.', zh: '結構工程師當時並沒有核准該項變更。', highlight: 'did not approve' }
      ],
      proTip: '統測陷阱：看到明確的過去時間副詞（如 yesterday, in 1999），絕對不能用現在完成式 (have/has p.p.)，只能用「過去簡單式」！'
    },
    {
      id: 3,
      nameZh: '未來式',
      nameEn: 'Future Tense',
      badge: '將要發生・計畫與預測',
      formula: 'will + 原形動詞 / be going to + 原形動詞',
      color: 'from-purple-500 to-violet-600',
      border: 'border-purple-300 dark:border-purple-800',
      bg: 'bg-purple-50/50 dark:bg-purple-950/20',
      description: '描述未來即將發生的事件、個人的意圖承諾，或基於現有跡象的客觀預測。',
      rules: [
        { title: 'will + 原形動詞 (V)', desc: '常用於臨時決定、純粹預測或承諾：I will call the supplier now.（我現在來打給供應商。）' },
        { title: 'be going to + 原形動詞 (V)', desc: '常用於事先規劃好的計畫，或已有明顯客觀跡象即將發生：Look at the sky; it is going to rain.' },
        { title: '時間副詞子句現在代未來', desc: '在 when, before, after, if 引導的時間與條件子句中，用「現在式」代替「未來式」！' }
      ],
      timeSignals: ['tomorrow', 'next week / month / year', 'soon', 'in three days', 'the day after tomorrow', 'in the future'],
      examples: [
        { en: 'The new suspension bridge will open to traffic next year.', zh: '這座新的懸索吊橋將於明年通車。', highlight: 'will open / next year' },
        { en: 'The project manager is going to hold a safety meeting tomorrow.', zh: '專案經理明天打算召開工安會議。', highlight: 'is going to hold' }
      ],
      proTip: '統測必考：「If it rains tomorrow, we will stop working.」條件子句用 rains（現在式），主要子句才用 will stop！'
    },
    {
      id: 4,
      nameZh: '現在完成式',
      nameEn: 'Present Perfect',
      badge: '經驗・持續・已完成',
      formula: 'S + have / has + 過去分詞 (p.p.)',
      color: 'from-rose-500 to-red-600',
      border: 'border-rose-300 dark:border-rose-800',
      bg: 'bg-rose-50/50 dark:bg-rose-950/20',
      description: '連接過去與現在的時態！表示從過去某時開始一直持續到現在的動作、過去已完成並對現在有影響的事，或過去的人生經驗。',
      rules: [
        { title: '三大典型核心情境', desc: '1. 持續 (Duration): 動作延續至今；2. 經驗 (Experience): 去過/做過；3. 完成 (Completion): 剛好完工。' },
        { title: '主詞搭配 have vs has', desc: '三單主詞 (he/she/it) 用 has + p.p.；其餘 (I/you/we/they) 用 have + p.p.。' },
        { title: 'since 與 for 黃金公式', desc: 'since + 過去時間點 (since 2015, since last year)；for + 一段時間 (for 10 years, for 3 hours)。' }
      ],
      timeSignals: ['since 2010', 'for three years', 'already (已經)', 'yet (尚未)', 'ever (曾經)', 'never (從不)', 'recently (最近)'],
      examples: [
        { en: 'The contractor has worked on this highway for five years.', zh: '該承包商在這條公路上施工已經五年了。（持續至今）', highlight: 'has worked / for five years' },
        { en: 'I have already inspected the foundation piles.', zh: '我已經檢查過基礎打樁了。（已完成）', highlight: 'have already inspected' }
      ],
      proTip: '統測口訣：看到 since 或 for + 一段時間，高達 95% 正解就是「現在完成式 (have/has p.p.)」！'
    },
    {
      id: 5,
      nameZh: '基本被動語態',
      nameEn: 'Basic Passive Voice',
      badge: '動作承受者為主詞・客觀正式',
      formula: 'S (承受者) + be 動詞 + 過去分詞 (p.p.) (+ by 動作發出者)',
      color: 'from-cyan-500 to-blue-600',
      border: 'border-cyan-300 dark:border-cyan-800',
      bg: 'bg-cyan-50/50 dark:bg-cyan-950/20',
      description: '當動作的「承受者」比「執行者」更重要，或者執行者未知/顯而易見時使用。在工程報告、科學論文與法律規範中是壓倒性的主要句式！',
      rules: [
        { title: '主動轉被動三步法', desc: '1. 受詞移至句首當主詞；2. 動詞變為 be + p.p.（be 動詞依時態與主詞人稱變化）；3. 原主詞移至句尾加 by。' },
        { title: '時態與 be 動詞對照表', desc: '現在被動：is/am/are + p.p.；過去被動：was/were + p.p.；未來被動：will be + p.p.；完成被動：have/has been + p.p.。' },
        { title: '不及物動詞無被動語態', desc: 'happen（發生）, occur（發生）, appear（出現）, die（死亡）不能接受詞，絕不能改為被動！' }
      ],
      timeSignals: ['by + 執行者 (如 by the workers)', '受到... (受物當主詞)'],
      examples: [
        { en: 'The landmark tower was designed by a famous Taiwanese architect.', zh: '這棟地標大樓是由一位台灣著名建築師所設計的。（過去被動）', highlight: 'was designed by' },
        { en: 'Safety helmets must be worn at all times.', zh: '工地上隨時都必須配戴安全帽。（情態助動詞被動：must be worn）', highlight: 'must be worn' }
      ],
      proTip: '統測秒殺：主詞若是「物品、建築物、計畫、橋樑」，它本身不會主動做動作，90% 都要用「被動語態 (be + p.p.)」！'
    }
  ];

  // Common Traps Data
  const traps = [
    {
      title: '陷阱 1：現在簡單式第三人稱單數漏加 -s/-es',
      wrong: 'The site supervisor inspect the equipment every morning.',
      correct: 'The site supervisor inspects the equipment every morning.',
      reason: '主詞 The site supervisor 是第三人稱單數（相當於 he/she），現在簡單式動詞必須加 -s！'
    },
    {
      title: '陷阱 2：現在完成式誤用特定過去時間副詞',
      wrong: 'The engineer has completed the blueprint yesterday.',
      correct: 'The engineer completed the blueprint yesterday. (或 The engineer has completed the blueprint already.)',
      reason: 'yesterday, last night, two days ago 是「過去特定時間點」，必須搭配過去簡單式 (completed)，絕對不能用現在完成式 (has completed)！'
    },
    {
      title: '陷阱 3：被動語態 be 動詞單複數或時態搞錯',
      wrong: 'The damaged steel girders was replaced by the crew.',
      correct: 'The damaged steel girders were replaced by the crew.',
      reason: '主詞 steel girders 是複數名詞，過去式 be 動詞必須使用 were，不可用 was！'
    },
    {
      title: '陷阱 4：不及物動詞（發生/出現）誤用被動語態',
      wrong: 'A severe earthquake was occurred in 1999.',
      correct: 'A severe earthquake occurred in 1999.',
      reason: 'occur, happen, appear 是不及物動詞，本身就表示「發生」，沒有受詞，因此在英文中絕對沒有被動語態！'
    },
    {
      title: '陷阱 5：since 與 for 的時間介系詞混淆',
      wrong: 'We have lived here since three years. / We have lived here for 2018.',
      correct: 'We have lived here for three years. / We have lived here since 2018.',
      reason: 'for 後方接「一段時間長度」（three years, two months）；since 後方接「過去的時間起點」（2018, last week, yesterday）。'
    }
  ];

  // Quiz Questions
  const quizQuestions = [
    {
      question: 'Water _____ at 100 degrees Celsius under standard atmospheric pressure.',
      options: ['boil', 'boils', 'is boiling', 'has boiled'],
      answer: 1,
      explanation: '此處描述客觀的物理科學真理（水在標準氣壓下攝氏 100 度沸騰），必須使用「現在簡單式」。且 Water 為不可數名詞視為三單，動詞需加 -s，故選 boils。'
    },
    {
      question: 'Look at the construction team! They _____ the new foundation piles right now.',
      options: ['drove', 'are driving', 'have driven', 'drive'],
      answer: 1,
      explanation: '句首有感嘆提示詞 Look! 且句尾有 right now（現在正），代表此時此刻動作正在進行，必須使用現在進行式 (are driving)。'
    },
    {
      question: 'The famous suspension bridge _____ by a severe typhoon three years ago.',
      options: ['damaged', 'was damaged', 'is damaged', 'has damaged'],
      answer: 1,
      explanation: '看到 three years ago 為過去特定時間點，且橋樑是「被颱風損壞」（被動承受者），故須使用過去簡單被動語態 (was damaged)。'
    },
    {
      question: 'The senior engineer _____ on this high-speed rail project since 2021.',
      options: ['works', 'has worked', 'worked', 'is working'],
      answer: 1,
      explanation: '題目中有「since + 過去時間點 (since 2021)」，表示動作從 2021 年持續至今，標準標配時態為「現在完成式 (has worked)」。'
    },
    {
      question: 'A terrible landslide _____ on the mountain highway last night.',
      options: ['was happened', 'happened', 'has happened', 'happening'],
      answer: 1,
      explanation: 'happen 是不及物動詞，絕對不可使用被動語態 (was happened 為錯誤用法)；且有過去時間副詞 last night，故選過去簡單式 happened。'
    },
    {
      question: 'All safety regulations must _____ strictly by every worker on the site.',
      options: ['follow', 'followed', 'be followed', 'following'],
      answer: 2,
      explanation: '主詞 All safety regulations（所有工安規定）是被遵守的對象。情態助動詞 (must) 的被動語態公式為「must + be + p.p.」，故選 be followed。'
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
            <span className="text-slate-800 dark:text-slate-200 font-bold">基本時態與被動語態</span>
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
        <header className="rounded-3xl border border-blue-200 dark:border-blue-900/60 bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-transparent p-6 sm:p-10 relative overflow-hidden shadow-sm">
          <div className="space-y-3 relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-300 dark:border-blue-700 bg-blue-100/80 dark:bg-blue-900/40 px-3 py-1 text-xs font-mono font-bold text-blue-800 dark:text-blue-300">
              <Clock className="size-3.5 text-blue-600 dark:text-blue-400" />
              Step-0 零痛先備跳板・國中時態語態篇
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-slate-950 dark:text-white">
              國中基本時態與被動語態零痛銜接教室
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
              英語文動詞時態就像工程的「時空座標軸」！掌握現在簡單式、進行式、過去式、未來式、現在完成式與基本被動語態，打通技高英文閱讀與統測非選重組的核心心智模型。
            </p>
          </div>
        </header>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 gap-2 overflow-x-auto pb-1 print:hidden">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-bold transition-all shrink-0 cursor-pointer ${
              activeTab === 'overview'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
            }`}
          >
            🧭 時態全景時間軸
          </button>
          <button
            onClick={() => setActiveTab('modules')}
            className={`px-4 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-bold transition-all shrink-0 cursor-pointer ${
              activeTab === 'modules'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
            }`}
          >
            📚 6 大核心時態與被動模組
          </button>
          <button
            onClick={() => setActiveTab('traps')}
            className={`px-4 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-bold transition-all shrink-0 cursor-pointer ${
              activeTab === 'traps'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
            }`}
          >
            ⚠️ 考生易錯陷阱 TOP 5
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`px-4 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-bold transition-all shrink-0 cursor-pointer ${
              activeTab === 'quiz'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
            }`}
          >
            🎯 隨堂實戰測驗 (6 題)
          </button>
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Visual Timeline Card */}
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-2">
                <Sparkles className="size-5 text-blue-600" />
                <h2 className="font-serif text-xl font-bold">動詞時態的時間軸心智模型</h2>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                英文的動詞會根據「時間座標 (何時發生)」與「動作狀態 (事實、進行中、已完成)」自動改變形式。請對照下方三度時空軸線：
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                {/* Past */}
                <div className="rounded-2xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/50 dark:bg-amber-950/20 p-5 space-y-3">
                  <div className="inline-block px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 font-mono text-xs font-bold">
                    ◀ 過去 (PAST)
                  </div>
                  <h3 className="font-bold text-base text-amber-900 dark:text-amber-200">過去簡單式 (V-ed)</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    在過去特定時間點已經結束的事件。與現在毫無關聯。
                  </p>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-amber-200/60 dark:border-amber-900/40 text-xs font-mono space-y-1">
                    <div className="text-blue-600 dark:text-blue-400 font-bold">We built the house in 2018.</div>
                    <div className="text-slate-500">我們在 2018 年建造了這棟房子。</div>
                  </div>
                </div>

                {/* Present */}
                <div className="rounded-2xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/20 p-5 space-y-3">
                  <div className="inline-block px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-700 dark:text-blue-300 font-mono text-xs font-bold">
                    ● 現在 (PRESENT)
                  </div>
                  <h3 className="font-bold text-base text-blue-900 dark:text-blue-200">現在簡單 vs 進行式</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    平常的習慣或定律用簡單式 (V/Vs)；此時此刻正在發生的動作則用進行式 (be + V-ing)。
                  </p>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-blue-200/60 dark:border-blue-900/40 text-xs font-mono space-y-1">
                    <div className="text-blue-600 dark:text-blue-400 font-bold">The crane is lifting the beam now.</div>
                    <div className="text-slate-500">起重機現在正吊裝鋼樑。</div>
                  </div>
                </div>

                {/* Future */}
                <div className="rounded-2xl border border-purple-200 dark:border-purple-900/60 bg-purple-50/50 dark:bg-purple-950/20 p-5 space-y-3">
                  <div className="inline-block px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-700 dark:text-purple-300 font-mono text-xs font-bold">
                    未來 (FUTURE) ▶
                  </div>
                  <h3 className="font-bold text-base text-purple-900 dark:text-purple-200">will / be going to</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    尚未發生的計畫、預測或承諾。
                  </p>
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-purple-200/60 dark:border-purple-900/40 text-xs font-mono space-y-1">
                    <div className="text-blue-600 dark:text-blue-400 font-bold">We will finish the survey tomorrow.</div>
                    <div className="text-slate-500">我們明天將會完成這項測量。</div>
                  </div>
                </div>
              </div>

              {/* Present Perfect Bridge */}
              <div className="rounded-2xl border border-rose-200 dark:border-rose-900/60 bg-rose-50/50 dark:bg-rose-950/20 p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-rose-500/20 text-rose-700 dark:text-rose-300 font-mono text-xs font-bold">
                    ◀ 過去串連現在 (BRIDGE) ●
                  </span>
                  <span className="font-mono text-xs font-bold text-rose-600 dark:text-rose-400">have / has + p.p.</span>
                </div>
                <h3 className="font-bold text-base text-rose-900 dark:text-rose-200">現在完成式：從過去延伸到現在</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  國中升高中最關鍵的時態！它不是單純指過去，而是代表「過去發生的動作一直持續到現在」或「過去的經驗對現在有影響」。
                </p>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-rose-200/60 dark:border-rose-900/40 text-xs font-mono flex items-center justify-between">
                  <div>
                    <div className="text-blue-600 dark:text-blue-400 font-bold">I have worked here for five years.</div>
                    <div className="text-slate-500">我在這裡工作已經五年了。（過去開始，現在仍在工作）</div>
                  </div>
                  <button
                    onClick={() => playTTS('I have worked here for five years.')}
                    className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-blue-600 cursor-pointer"
                    title="朗讀例句"
                  >
                    <Volume2 className="size-4" />
                  </button>
                </div>
              </div>

              {/* Passive Voice Bridge */}
              <div className="rounded-2xl border border-cyan-200 dark:border-cyan-900/60 bg-cyan-50/50 dark:bg-cyan-950/20 p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 font-mono text-xs font-bold">
                    ⚙️ 語態切換 (VOICE)
                  </span>
                  <span className="font-mono text-xs font-bold text-cyan-600 dark:text-cyan-400">be + p.p.</span>
                </div>
                <h3 className="font-bold text-base text-cyan-900 dark:text-cyan-200">基本被動語態：承受者當主角</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  在建築與工科領域中，大樓、橋樑、圖面都是被建造、被繪製的物體。當主詞是物體時，動詞一律轉換為「be + p.p.」。
                </p>
                <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-cyan-200/60 dark:border-cyan-900/40 text-xs font-mono flex items-center justify-between">
                  <div>
                    <div className="text-blue-600 dark:text-blue-400 font-bold">The blueprints were approved by the client.</div>
                    <div className="text-slate-500">這些施工藍圖已經被業主核准了。</div>
                  </div>
                  <button
                    onClick={() => playTTS('The blueprints were approved by the client.')}
                    className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-blue-600 cursor-pointer"
                    title="朗讀例句"
                  >
                    <Volume2 className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: 6 Modules */}
        {activeTab === 'modules' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Sidebar list */}
            <div className="space-y-2 lg:col-span-1 print:hidden">
              <span className="text-xs font-mono text-slate-400 font-bold block mb-1">選擇時態 / 語態模組：</span>
              {tenseModules.map((m, idx) => (
                <button
                  key={m.id}
                  onClick={() => setActiveModuleIndex(idx)}
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                    activeModuleIndex === idx
                      ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="font-bold text-sm">{m.nameZh}</div>
                    <div className={`font-mono text-xs ${activeModuleIndex === idx ? 'text-blue-100' : 'text-slate-400'}`}>
                      {m.nameEn}
                    </div>
                  </div>
                  <span className={`text-xs font-mono px-2 py-0.5 rounded-md ${
                    activeModuleIndex === idx ? 'bg-blue-500/50 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                  }`}>
                    {idx + 1}
                  </span>
                </button>
              ))}
            </div>

            {/* Detail View */}
            <div className="lg:col-span-2 space-y-6">
              {(() => {
                const current = tenseModules[activeModuleIndex];
                return (
                  <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-6">
                    {/* Module Header */}
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
                      <div>
                        <div className="inline-block text-xs font-mono font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 px-2.5 py-1 rounded-full mb-1">
                          {current.badge}
                        </div>
                        <h2 className="font-serif text-2xl font-bold text-slate-950 dark:text-white">
                          {current.nameZh} ({current.nameEn})
                        </h2>
                      </div>
                      <div className="rounded-xl bg-slate-100 dark:bg-slate-800 px-4 py-2 font-mono text-sm font-bold text-slate-800 dark:text-slate-200">
                        {current.formula}
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {current.description}
                    </p>

                    {/* Rules */}
                    <div className="space-y-3">
                      <h3 className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider">
                        核心文法規則：
                      </h3>
                      <div className="grid gap-3">
                        {current.rules.map((rule, ri) => (
                          <div key={ri} className="rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 p-4 space-y-1">
                            <h4 className="font-bold text-xs sm:text-sm text-blue-700 dark:text-blue-300">
                              {rule.title}
                            </h4>
                            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-sans">
                              {rule.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Time Signals */}
                    <div className="space-y-2">
                      <h3 className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider">
                        統測秒殺時間關鍵詞 (Time Signals)：
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {current.timeSignals.map((ts, ti) => (
                          <span key={ti} className="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 border border-blue-200/50 dark:border-blue-900/30 font-mono text-xs">
                            {ts}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Examples */}
                    <div className="space-y-3">
                      <h3 className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider">
                        高工經典示範例句（支援即時發音）：
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
                              <span className="inline-block text-[11px] font-mono text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30 px-2 py-0.5 rounded">
                                焦點：{ex.highlight}
                              </span>
                            </div>
                            <button
                              onClick={() => playTTS(ex.en)}
                              className="shrink-0 p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-950/40 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
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
                        <strong className="font-bold block mb-0.5">💡 大師名師點撥：</strong>
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
                  統測考生時態與被動語態最常踩中之 5 大地雷
                </h2>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                每年統測均有超過 40% 考生在這些看似微小的文法規則中失分。考前務必逐條校對你的直覺反射！
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
                        致命錯誤示範：
                      </div>
                      <div className="line-through">{trap.wrong}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 text-emerald-700 dark:text-emerald-300">
                      <div className="font-bold mb-1 flex items-center gap-1">
                        <CheckCircle2 className="size-3.5 text-emerald-500" />
                        滿分正確寫法：
                      </div>
                      <div>{trap.correct}</div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
                    <strong className="text-slate-800 dark:text-slate-200">🔍 深入解析：</strong>
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
                    <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">
                      QUESTION {quizIndex + 1} OF {quizQuestions.length}
                    </span>
                    <h2 className="font-serif text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      時態與被動語態隨堂自我檢測
                    </h2>
                  </div>
                  <div className="font-mono text-xs px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    目前得分: {quizScore} / {quizQuestions.length}
                  </div>
                </div>

                {/* Question */}
                <div className="p-4 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/40 text-sm sm:text-base font-mono font-bold text-slate-900 dark:text-white flex items-center justify-between">
                  <span>{quizQuestions[quizIndex].question}</span>
                  <button
                    onClick={() => playTTS(quizQuestions[quizIndex].question)}
                    className="p-1.5 rounded-lg hover:bg-blue-100 text-slate-500 hover:text-blue-600 cursor-pointer"
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
                  <div className="rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 p-4 space-y-2">
                    <div className="flex items-center gap-2 text-blue-800 dark:text-blue-300 font-bold text-xs">
                      <Lightbulb className="size-4" />
                      名師詳解說明：
                    </div>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-sans">
                      {quizQuestions[quizIndex].explanation}
                    </p>
                    <button
                      onClick={handleNextQuiz}
                      className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold transition-colors cursor-pointer"
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
                    你的最終得分：<span className="font-bold text-blue-600 dark:text-blue-400 text-xl">{quizScore}</span> / {quizQuestions.length}
                  </p>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
                  {quizScore === quizQuestions.length
                    ? '太強了！你已經具備完全直覺的時態與被動語態反射，進入統測進階題庫將如虎添翼！'
                    : '不錯的嘗試！建議回頭檢視易錯陷阱 TOP 5 與 6 大模組，特別留意現在完成式與被動語態的使用情境。'}
                </p>
                <div className="flex flex-wrap gap-3 justify-center pt-2">
                  <button
                    onClick={handleRestartQuiz}
                    className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 font-mono text-xs font-bold text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
                  >
                    重新測驗 ↺
                  </button>
                  <Link
                    href="/prerequisites/english/complex-sentences"
                    className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                  >
                    前往下一個先備跳板：主從複合句型 →
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Footer Navigation */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-500 dark:text-slate-400 print:hidden">
          <Link
            href="/prerequisites/english/vocab-1200"
            className="flex items-center gap-1.5 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="size-3.5" />
            <span>上一步：國中基礎 1200 單字</span>
          </Link>
          <Link
            href="/prerequisites/english/complex-sentences"
            className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-bold hover:underline"
          >
            <span>下一步：國中主從複合句型與連接詞</span>
            <ArrowRight className="size-3.5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
