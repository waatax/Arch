'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Layers,
  Volume2,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  XCircle,
  Lightbulb,
  HelpCircle,
  Award,
  BookOpen,
  Puzzle,
  Zap,
  Target,
  Printer
} from 'lucide-react';

export default function PartsOfSpeechPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'eight' | 'suffixes' | 'quiz'>('overview');
  const [activeSpeechIndex, setActiveSpeechIndex] = useState<number>(0);
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

  // 8 Parts of Speech Data
  const partsOfSpeech = [
    {
      id: 0,
      nameZh: '名詞',
      nameEn: 'Noun (n.)',
      badge: '人、事、時、地、物',
      color: 'from-blue-500 to-indigo-600',
      border: 'border-blue-300 dark:border-blue-800',
      bg: 'bg-blue-50/50 dark:bg-blue-950/20',
      role: '句子的核心磚塊。可以當句子的「主詞（S）」或「受詞（O）」！',
      analogy: '【演員角色】扮演故事裡的人物或道具',
      types: [
        { title: '可數名詞 (Countable)', desc: '單數加 a/an，複數加 s/es。例如：a book, two pens, three engineers.' },
        { title: '不可數名詞 (Uncountable)', desc: '不能數、無複數，不加 a/an。例如：water, wood, safety, information, concrete.' }
      ],
      examples: [
        { en: 'The architect designs modern houses.', zh: '建築師設計現代房屋。', highlight: 'architect / houses (名詞)' },
        { en: 'Safety is the most important rule on a construction site.', zh: '安全是工地上最重要的規則。', highlight: 'Safety / rule / site (名詞)' }
      ],
      testTip: '統測秘訣：前面有 a / an / the、所有格 (my/our)、或介系詞 (in/at/for) 後面，通常要選「名詞」！'
    },
    {
      id: 1,
      nameZh: '動詞',
      nameEn: 'Verb (v.)',
      badge: '動作、狀態、靈魂核心',
      color: 'from-rose-500 to-red-600',
      border: 'border-rose-300 dark:border-rose-800',
      bg: 'bg-rose-50/50 dark:bg-rose-950/20',
      role: '句子的引擎心臟！沒有動詞就不能構成完整句子。',
      analogy: '【引擎動力】推動整台句子列車前進',
      types: [
        { title: '一般動詞 / 行為動詞', desc: '表達具體動作：build（建造）, measure（測量）, calculate（計算）, draw（繪製）。' },
        { title: 'be 動詞與連綴動詞', desc: '表達狀態或特徵：is/am/are/was/were；look（看起來）, seem（似乎）, feel（感覺）。' },
        { title: '及物 [T] vs 不及物 [I]', desc: '及物動詞後面必須接「受詞名詞」；不及物動詞後面通常直接句號或接「介系詞」。' }
      ],
      examples: [
        { en: 'Workers build the bridge with steel and concrete.', zh: '工人們用鋼筋和混凝土建造橋樑。', highlight: 'build (及物動詞)' },
        { en: 'The structure looks extremely solid.', zh: '這棟結構體看起來非常堅固。', highlight: 'looks (連綴動詞)' }
      ],
      testTip: '統測秘訣：助動詞 (can, will, must, should) 後面一定接「原形動詞」；第三人稱單數現在式記得加 s！'
    },
    {
      id: 2,
      nameZh: '形容詞',
      nameEn: 'Adjective (adj. / a.)',
      badge: '名詞的化妝師與修飾者',
      color: 'from-amber-500 to-orange-600',
      border: 'border-amber-300 dark:border-amber-800',
      bg: 'bg-amber-50/50 dark:bg-amber-950/20',
      role: '專門用來修飾「名詞」或「代名詞」，說明其顏色、尺寸、特徵、狀態。',
      analogy: '【服裝化妝師】為名詞穿上漂亮的衣服與色彩',
      types: [
        { title: '位置 1：名詞正前方', desc: 'an accurate measurement（精準的測量）, durable materials（耐久材料）。' },
        { title: '位置 2：be動詞 / 連綴動詞之後', desc: 'The steel is strong.（鋼材很強韌。） / The design looks modern.（設計看起來很摩登。）' }
      ],
      examples: [
        { en: 'We need accurate data before starting the foundation work.', zh: '在開始地基工程之前，我們需要精準的數據。', highlight: 'accurate (修飾名詞 data)' },
        { en: 'This helmet is durable and protective.', zh: '這頂安全帽既耐用又具防護性。', highlight: 'durable / protective (在 is 後作補語)' }
      ],
      testTip: '統測秘訣：克漏字看到 be 動詞 (is, are) 或 look, sound, smell 後面有空格，通常選「形容詞」！'
    },
    {
      id: 3,
      nameZh: '副詞',
      nameEn: 'Adverb (adv.)',
      badge: '動詞、形容詞與全句的加速器',
      color: 'from-emerald-500 to-teal-600',
      border: 'border-emerald-300 dark:border-emerald-800',
      bg: 'bg-emerald-50/50 dark:bg-emerald-950/20',
      role: '修飾「動詞」、「形容詞」、「另一個副詞」或「整個句子」。絕不能直接修飾名詞！',
      analogy: '【增強外掛】加強威力、說明時間、地點或方式',
      types: [
        { title: '情態副詞 (通常是 adj + ly)', desc: 'carefully（小心地）, quickly（迅速地）, precisely（精準地）。' },
        { title: '程度副詞', desc: 'very（非常）, extremely（極度地）, quite（相當地）。' },
        { title: '頻率副詞', desc: 'always（總是）, usually（通常）, often（經常）, never（從不）。' }
      ],
      examples: [
        { en: 'The surveyor measured the land carefully.', zh: '測量員仔細地測量了這塊土地。', highlight: 'carefully (修飾動詞 measured)' },
        { en: 'The test results were extremely accurate.', zh: '測試結果極度精準。', highlight: 'extremely (修飾形容詞 accurate)' }
      ],
      testTip: '統測秘訣：當一個句子「主詞、動詞、受詞都齊全」時，空格刪掉也不影響文法，這空格 90% 填「副詞」！'
    },
    {
      id: 4,
      nameZh: '代名詞',
      nameEn: 'Pronoun (pron.)',
      badge: '懶人救星，代替重複名詞',
      color: 'from-purple-500 to-violet-600',
      border: 'border-purple-300 dark:border-purple-800',
      bg: 'bg-purple-50/50 dark:bg-purple-950/20',
      role: '避免一直重複念同一個名詞，讓語言更簡潔乾淨。',
      analogy: '【替身演員】正牌名詞退場時，代名詞上場扛住句子',
      types: [
        { title: '人稱代名詞格位', desc: '主格 (I, he, they) 放動詞前；受格 (me, him, them) 放動詞或介系詞後。' },
        { title: '所有格代名詞', desc: 'mine（我的東西）, yours（你的東西）, theirs（他們的東西）。' },
        { title: '不定代名詞', desc: 'someone, everyone, nothing, each, both, all。' }
      ],
      examples: [
        { en: 'Tom is an engineer. He checks the beam every day.', zh: '湯姆是工程師。他每天檢查橫樑。', highlight: 'He 代替前面出現過的 Tom' },
        { en: 'These blueprints are yours, and those are mine.', zh: '這些藍圖是你的，而那些是我的。', highlight: 'yours / mine (所有格代名詞)' }
      ],
      testTip: '統測秘訣：介系詞後面一定要接「受格」（例：with him, for us, between you and me）！'
    },
    {
      id: 5,
      nameZh: '介系詞',
      nameEn: 'Preposition (prep.)',
      badge: '空間、時間與邏輯的黏著橋樑',
      color: 'from-cyan-500 to-sky-600',
      border: 'border-cyan-300 dark:border-cyan-800',
      bg: 'bg-cyan-50/50 dark:bg-cyan-950/20',
      role: '表示名詞在時間、空間或關係上的位置。介系詞後面絕對不能單獨存在，後面一定要跟「名詞」或「V-ing」！',
      analogy: '【定位雷達】標示在上方、裡面、時間點或目的',
      types: [
        { title: '空間地點介系詞', desc: 'in（在...裡面）, on（在...表面上）, under（在...下方）, at（在某地點）。' },
        { title: '時間介系詞', desc: 'at 7:00（特定時間點）, on Monday（特定日期/星期）, in 2026 / in May（年月）。' },
        { title: '方向與目的', desc: 'to（往/給）, into（進入）, through（穿過）, for（為了/給予）。' }
      ],
      examples: [
        { en: 'The drawing tools are on the desk in the office.', zh: '製圖工具在辦公室的書桌上。', highlight: 'on the desk / in the office (介系詞片語)' },
        { en: 'Thank you for giving us detailed instructions.', zh: '感謝你提供我們詳細的指示。', highlight: 'for + V-ing (介系詞後接動名詞)' }
      ],
      testTip: '統測秘訣：介系詞後面如果要接動作，必須變成「動名詞 V-ing」形式（例：good at calculating, thank you for coming）！'
    },
    {
      id: 6,
      nameZh: '連接詞',
      nameEn: 'Conjunction (conj.)',
      badge: '句子與句子的強力膠水',
      color: 'from-pink-500 to-rose-500',
      border: 'border-pink-300 dark:border-pink-800',
      bg: 'bg-pink-50/50 dark:bg-pink-950/20',
      role: '將單字、片語、或兩個完整的子句緊緊連結在一起。',
      analogy: '【鋼骨接合器】把兩段獨立的樑柱銲接成穩固的框架',
      types: [
        { title: '對等連接詞 (FANBOYS)', desc: 'for, and, nor, but, or, yet, so。前後連接的詞性或結構必須對等！' },
        { title: '從屬連接詞', desc: 'because（因為）, although / even though（雖然）, if（如果）, when（當...時）。' },
        { title: '相關連接詞', desc: 'both...and...（兩者皆是）, either...or...（二選一）, neither...nor...（兩者皆非）。' }
      ],
      examples: [
        { en: 'The steel is strong, but the wood is flexible.', zh: '鋼材很強韌，但木材有彈性。', highlight: 'but (對等連接詞連接兩個句子)' },
        { en: 'Although it rained heavily, the workers continued building.', zh: '雖然下著大雨，工人們依然繼續施工。', highlight: 'Although (從屬連接詞引導讓步子句)' }
      ],
      testTip: '統測秘訣：中文常說「雖然...但是...」或「因為...所以...」，但在英文裡 Although 和 But 絕對不能同時出現！'
    },
    {
      id: 7,
      nameZh: '感嘆詞',
      nameEn: 'Interjection (interj.)',
      badge: '情緒的瞬間爆發語',
      color: 'from-amber-400 to-yellow-500',
      border: 'border-amber-300 dark:border-yellow-700',
      bg: 'bg-yellow-50/50 dark:bg-yellow-950/20',
      role: '表達驚奇、喜悅、痛苦、警示等突發情緒。在句子中通常獨立存在，後面常帶驚嘆號。',
      analogy: '【信號彈】瞬間發出情緒警報，不牽動文法結構',
      types: [
        { title: '驚奇喜悅', desc: 'Wow!（哇！太棒了）, Bravo!（太棒了！喝采）' },
        { title: '痛苦驚慌', desc: 'Ouch!（好痛！）, Oops!（糟糕！不小心犯錯）' },
        { title: '打招呼與引起注意', desc: 'Hey!（嘿！）, Look out!（小心！）' }
      ],
      examples: [
        { en: 'Wow! This skyscraper is taller than I imagined.', zh: '哇！這座摩天大樓比我想像的還要高。', highlight: 'Wow! (表達讚嘆)' },
        { en: 'Watch out! The crane is lifting heavy beams.', zh: '小心！起重機正在吊掛重型橫樑。', highlight: 'Watch out! (引起注意與警示)' }
      ],
      testTip: '統測秘訣：感嘆詞在統測閱讀或對話題中常出現在第 1~2 題日常對話，看懂情緒字就能秒答！'
    }
  ];

  // Suffix Secrets Table (Cheat sheet for TVE students)
  const suffixRules = [
    {
      part: '名詞字尾 (Noun Suffixes)',
      icon: '🏛️',
      color: 'text-blue-600 dark:text-blue-400',
      bg: 'bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-900',
      suffixes: [
        { suf: '-tion / -sion', ex: 'construction (建築), decision (決定), action (行動)' },
        { suf: '-ment', ex: 'measurement (測量), equipment (設備), development (發展)' },
        { suf: '-ness', ex: 'hardness (硬度), thickness (厚度), darkness (黑暗)' },
        { suf: '-er / -or', ex: 'worker (工人), surveyor (測量員), operator (操作員)' },
        { suf: '-ity', ex: 'safety (安全), quality (品質), durability (耐用性)' }
      ]
    },
    {
      part: '動詞字尾 (Verb Suffixes)',
      icon: '⚙️',
      color: 'text-rose-600 dark:text-rose-400',
      bg: 'bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-900',
      suffixes: [
        { suf: '-ize / -ise', ex: 'standardize (標準化), organize (組織), realize (理解)' },
        { suf: '-ate', ex: 'calculate (計算), estimate (估計), operate (操作)' },
        { suf: '-en', ex: 'strengthen (加強), widen (加寬), lengthen (加長)' },
        { suf: '-ify', ex: 'simplify (簡化), modify (修改), identify (識別)' }
      ]
    },
    {
      part: '形容詞字尾 (Adjective Suffixes)',
      icon: '🎨',
      color: 'text-amber-600 dark:text-amber-400',
      bg: 'bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-900',
      suffixes: [
        { suf: '-ful', ex: 'useful (有用的), careful (小心的), powerful (強大的)' },
        { suf: '-less', ex: 'flawless (完美無瑕的), careless (粗心的), useless (無用的)' },
        { suf: '-able / -ible', ex: 'reliable (可靠的), flexible (有彈性的), visible (可見的)' },
        { suf: '-ive', ex: 'effective (有效的), protective (保護性的), expensive (昂貴的)' },
        { suf: '-al', ex: 'structural (結構的), digital (數位的), natural (自然的)' },
        { suf: '-ous', ex: 'dangerous (危險的), continuous (連續的), famous (著名的)' }
      ]
    },
    {
      part: '副詞字尾 (Adverb Suffixes)',
      icon: '🚀',
      color: 'text-emerald-600 dark:text-emerald-400',
      bg: 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900',
      suffixes: [
        { suf: '-ly (形容詞 + ly)', ex: 'carefully (小心地), accurately (精準地), safely (安全地)' },
        { suf: '-ward / -wards', ex: 'forward (向前), backward (向後), upward (向上)' }
      ]
    }
  ];

  // Quiz Data
  const quizQuestions = [
    {
      id: 1,
      sentence: 'The technician needs an _______ tool to measure the angle.',
      audio: 'The technician needs an accurate tool to measure the angle.',
      options: [
        { text: 'accuracy', pos: '名詞 (n.)' },
        { text: 'accurate', pos: '形容詞 (adj.)' },
        { text: 'accurately', pos: '副詞 (adv.)' },
        { text: 'accurateness', pos: '名詞 (n.)' }
      ],
      correctIndex: 1,
      reason: '空格在冠詞 an 與名詞 tool 之間，必須填入「形容詞 (accurate)」來修飾名詞 tool（精確的工具）！'
    },
    {
      id: 2,
      sentence: 'All workers must wear safety helmets for their _______.',
      audio: 'All workers must wear safety helmets for their protection.',
      options: [
        { text: 'protect', pos: '動詞 (v.)' },
        { text: 'protective', pos: '形容詞 (adj.)' },
        { text: 'protection', pos: '名詞 (n.)' },
        { text: 'protectively', pos: '副詞 (adv.)' }
      ],
      correctIndex: 2,
      reason: '空格在所有格 their（他們的）後面，所有格後面一定要接「名詞 (protection)」，字尾 -tion 為典型名詞字尾！'
    },
    {
      id: 3,
      sentence: 'Please inspect the blueprint _______ before pouring the concrete.',
      audio: 'Please inspect the blueprint carefully before pouring the concrete.',
      options: [
        { text: 'careful', pos: '形容詞 (adj.)' },
        { text: 'carefully', pos: '副詞 (adv.)' },
        { text: 'carefulness', pos: '名詞 (n.)' },
        { text: 'care', pos: '動詞/名詞' }
      ],
      correctIndex: 1,
      reason: '前面句子「inspect the blueprint（檢查藍圖）」動詞與受詞結構已經完整，此處需要「副詞 (carefully)」來修飾動詞 inspect！'
    },
    {
      id: 4,
      sentence: 'The new foundation _______ strong enough to support ten floors.',
      audio: 'The new foundation is strong enough to support ten floors.',
      options: [
        { text: 'is', pos: 'be 動詞 (v.)' },
        { text: 'very', pos: '副詞 (adv.)' },
        { text: 'of', pos: '介系詞 (prep.)' },
        { text: 'and', pos: '連接詞 (conj.)' }
      ],
      correctIndex: 0,
      reason: '主詞 The new foundation 後面缺乏最重要的心臟——「動詞」，所以必須填入 be 動詞 is！'
    },
    {
      id: 5,
      sentence: 'The project manager is satisfied _______ your structural calculations.',
      audio: 'The project manager is satisfied with your structural calculations.',
      options: [
        { text: 'with', pos: '介系詞 (prep.)' },
        { text: 'so', pos: '連接詞 (conj.)' },
        { text: 'because', pos: '從屬連接詞 (conj.)' },
        { text: 'always', pos: '副詞 (adv.)' }
      ],
      correctIndex: 0,
      reason: '片語 be satisfied with...（對...感到滿意），with 是「介系詞」，後面接名詞片語 your structural calculations！'
    },
    {
      id: 6,
      sentence: '_______ the weather was cold and rainy, the construction went on smoothly.',
      audio: 'Although the weather was cold and rainy, the construction went on smoothly.',
      options: [
        { text: 'Because', pos: '連接詞（因果）' },
        { text: 'Although', pos: '連接詞（讓步轉折）' },
        { text: 'During', pos: '介系詞' },
        { text: 'In spite of', pos: '介系詞片語' }
      ],
      correctIndex: 1,
      reason: '後半句「went on smoothly（進展順利）」與前半句「天氣寒冷下雨」形成轉折對比，且引導完整子句（有主詞 the weather 與動詞 was），故選從屬連接詞 Although！'
    }
  ];

  const handleSelectAnswer = (index: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    setShowExplanation(true);
    if (index === quizQuestions[quizIndex].correctIndex) {
      setQuizScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (quizIndex < quizQuestions.length - 1) {
      setQuizIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setQuizIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setQuizScore(0);
    setQuizFinished(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            <Link
              href="/prerequisites"
              className="inline-flex items-center gap-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
            >
              <ArrowLeft className="size-4" /> 先備跳板總覽
            </Link>
            <span>/</span>
            <Link
              href="/subjects/english"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium"
            >
              技高統測英文
            </Link>
            <span>/</span>
            <span className="text-slate-700 dark:text-slate-200 font-bold">基本八大詞性觀念</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="print:hidden rounded-full bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 px-3 py-1 text-xs font-mono font-bold text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
              title="以 A4 紙本格式列印或另存為 PDF"
            >
              <Printer className="size-3.5 text-slate-600 dark:text-slate-300" />
              <span>列印講義 (A4)</span>
            </button>
            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
              <Sparkles className="size-3.5" /> 統測文法克漏字秒殺必備
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 text-white p-6 sm:p-10 shadow-xl border border-indigo-500/20">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-indigo-500/30 text-indigo-200 border border-indigo-400/30">
              <Layers className="size-3.5" /> Step-0 Prerequisite Module 2
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              英文文法的積木遊戲：<span className="bg-gradient-to-r from-amber-300 via-rose-300 to-indigo-300 bg-clip-text text-transparent">基本八大詞性觀念</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              很多同學背了 2000 個單字，但統測克漏字依舊頻繁失分——原因不是看不懂單字，而是<strong>「搞不清楚空格該放什麼詞性」</strong>！
              掌握 8 大詞性就像學會拼裝積木，一眼就能看穿句子的骨架，直接秒殺填空題！
            </p>
            
            {/* Quick stats / highlights */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-amber-400 font-bold text-lg">8</div>
                <div className="text-slate-300">八大核心詞性</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-rose-400 font-bold text-lg">4 步</div>
                <div className="text-slate-300">句子積木位置法則</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-emerald-400 font-bold text-lg">15+</div>
                <div className="text-slate-300">高頻字根字尾判斷</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-indigo-400 font-bold text-lg">100%</div>
                <div className="text-slate-300">零痛真人發音學習</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 space-x-2 sm:space-x-4 overflow-x-auto pb-1">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex items-center gap-2 py-3 px-4 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-all ${
              activeTab === 'overview'
                ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400'
                : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
            }`}
          >
            <Puzzle className="size-4" /> 1. 句子積木列車 (視覺架構)
          </button>
          <button
            onClick={() => setActiveTab('eight')}
            className={`flex items-center gap-2 py-3 px-4 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-all ${
              activeTab === 'eight'
                ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400'
                : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
            }`}
          >
            <BookOpen className="size-4" /> 2. 八大詞性個別拆解
          </button>
          <button
            onClick={() => setActiveTab('suffixes')}
            className={`flex items-center gap-2 py-3 px-4 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-all ${
              activeTab === 'suffixes'
                ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400'
                : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
            }`}
          >
            <Zap className="size-4" /> 3. 統測必備字尾秒殺表
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`flex items-center gap-2 py-3 px-4 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-all ${
              activeTab === 'quiz'
                ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400'
                : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
            }`}
          >
            <Target className="size-4" /> 4. 詞性神探實戰測驗
          </button>
        </div>

        {/* TAB 1: Visual Sentence Architecture */}
        {activeTab === 'overview' && (
          <div className="space-y-6 animate-fade-in-up">
            <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-base sm:text-lg">
                <Puzzle className="size-5" />
                <span>核心觀念：英文句子就像一台「積木列車」</span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                英文不管多複雜的長難句，本質上都是由<strong>八種零件</strong>依固定規則拼裝起來的。只要記住各零件的擺放位置，你在考試時閉著眼睛都能猜中詞性！
              </p>

              {/* Visual Interactive Diagram */}
              <div className="p-4 sm:p-6 rounded-2xl bg-slate-900 text-white space-y-6">
                <div className="text-center text-xs sm:text-sm font-mono text-slate-400 uppercase tracking-wider">
                  ── 句子標準 5 大車廂配置圖 ──
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                  {/* Car 1: Subject */}
                  <div className="p-4 rounded-xl bg-blue-900/40 border border-blue-500/40 space-y-2">
                    <div className="text-xs font-mono font-bold text-blue-300 flex items-center justify-between">
                      <span>車頭：主詞 (S)</span>
                      <span className="px-1.5 py-0.5 rounded bg-blue-500/20 text-[10px]">只能放</span>
                    </div>
                    <div className="text-base font-bold text-white">名詞 / 代名詞</div>
                    <p className="text-xs text-slate-300">句子動作的主角</p>
                    <div className="text-[11px] font-mono text-blue-200 bg-blue-950/60 p-2 rounded">
                      例：The engineer / He
                    </div>
                  </div>

                  {/* Car 2: Verb */}
                  <div className="p-4 rounded-xl bg-rose-900/40 border border-rose-500/40 space-y-2">
                    <div className="text-xs font-mono font-bold text-rose-300 flex items-center justify-between">
                      <span>引擎：動詞 (V)</span>
                      <span className="px-1.5 py-0.5 rounded bg-rose-500/20 text-[10px]">靈魂核心</span>
                    </div>
                    <div className="text-base font-bold text-white">一般動詞 / be動詞</div>
                    <p className="text-xs text-slate-300">表達動作或狀態</p>
                    <div className="text-[11px] font-mono text-rose-200 bg-rose-950/60 p-2 rounded">
                      例：builds / is designing
                    </div>
                  </div>

                  {/* Car 3: Object */}
                  <div className="p-4 rounded-xl bg-indigo-900/40 border border-indigo-500/40 space-y-2">
                    <div className="text-xs font-mono font-bold text-indigo-300 flex items-center justify-between">
                      <span>貨廂：受詞 (O)</span>
                      <span className="px-1.5 py-0.5 rounded bg-indigo-500/20 text-[10px]">只能放</span>
                    </div>
                    <div className="text-base font-bold text-white">名詞 / 代名詞</div>
                    <p className="text-xs text-slate-300">接受動作的對象</p>
                    <div className="text-[11px] font-mono text-indigo-200 bg-indigo-950/60 p-2 rounded">
                      例：modern bridges / them
                    </div>
                  </div>

                  {/* Car 4: Modifiers */}
                  <div className="p-4 rounded-xl bg-emerald-900/40 border border-emerald-500/40 space-y-2">
                    <div className="text-xs font-mono font-bold text-emerald-300 flex items-center justify-between">
                      <span>外掛：修飾語</span>
                      <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-[10px]">自由增添</span>
                    </div>
                    <div className="text-base font-bold text-white">副詞 / 介系詞片語</div>
                    <p className="text-xs text-slate-300">說明時間、地點、方式</p>
                    <div className="text-[11px] font-mono text-emerald-200 bg-emerald-950/60 p-2 rounded">
                      例：carefully / in Taiwan
                    </div>
                  </div>
                </div>

                {/* Synthesis Example */}
                <div className="p-4 rounded-xl bg-slate-800 border border-slate-700 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                      <Sparkles className="size-3.5" /> 完整列車組裝實例
                    </span>
                    <button
                      onClick={() => playTTS('The skilled engineer builds modern bridges carefully in Taiwan.')}
                      className="p-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs flex items-center gap-1 transition-colors"
                      title="聆聽發音"
                    >
                      <Volume2 className="size-3.5" /> 聽例句
                    </button>
                  </div>
                  <div className="text-sm sm:text-base font-mono font-bold text-white">
                    <span className="text-amber-300">[The skilled]</span>{' '}
                    <span className="text-blue-400">[engineer]</span>{' '}
                    <span className="text-rose-400">[builds]</span>{' '}
                    <span className="text-amber-300">[modern]</span>{' '}
                    <span className="text-indigo-400">[bridges]</span>{' '}
                    <span className="text-emerald-400">[carefully]</span>{' '}
                    <span className="text-cyan-400">[in Taiwan]</span>.
                  </div>
                  <div className="text-xs text-slate-300">
                    這名技術純熟的工程師在台灣細心地建造現代橋樑。
                  </div>
                </div>
              </div>
            </div>

            {/* 4 Golden Position Rules */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-sm">
                  <span className="size-6 rounded-full bg-indigo-100 dark:bg-indigo-950 flex items-center justify-center text-xs font-bold">1</span>
                  <span>黃金法則一：形容詞永遠貼著名詞</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  形容詞有兩大專用座：<strong>放在名詞正前方</strong>（例：<code>safe workplace</code>），或<strong>放在 be動詞 / 連綴動詞後面</strong>作為主詞補語（例：<code>The design is safe.</code>）。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold text-sm">
                  <span className="size-6 rounded-full bg-rose-100 dark:bg-rose-950 flex items-center justify-center text-xs font-bold">2</span>
                  <span>黃金法則二：助動詞後必定是「原形動詞」</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  只要看到 <code>can, could, will, would, must, should, may</code> 等助動詞，後面<strong>不管主詞是誰，一律填動詞原形</strong>（例如：<code>must finish</code>，絕不能是 <code>must finishes</code>）。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-bold text-sm">
                  <span className="size-6 rounded-full bg-cyan-100 dark:bg-cyan-950 flex items-center justify-center text-xs font-bold">3</span>
                  <span>黃金法則三：介系詞後必有名詞或 V-ing</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  介系詞（<code>in, on, at, with, without, for, by</code>）絕不能孤單結尾！後面必須跟著<strong>名詞</strong>、<strong>受格代名詞</strong>，或是<strong>動名詞 (V-ing)</strong>。
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                  <span className="size-6 rounded-full bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center text-xs font-bold">4</span>
                  <span>黃金法則四：副詞是自由插隊的外掛</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  副詞不影響文法結構。一個完整句子拿掉副詞依然完整！當你看到整句主動受齊備，中間夾了一個空格，<strong>99% 就是副詞 (adv.)</strong>！
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Eight Parts of Speech Interactive Grid */}
        {activeTab === 'eight' && (
          <div className="space-y-6 animate-fade-in-up">
            {/* Quick selector buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {partsOfSpeech.map((part, idx) => (
                <button
                  key={part.id}
                  onClick={() => setActiveSpeechIndex(idx)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    activeSpeechIndex === idx
                      ? `${part.border} bg-white dark:bg-slate-800 shadow-md ring-2 ring-indigo-500`
                      : 'border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 hover:bg-white dark:hover:bg-slate-800'
                  }`}
                >
                  <div className="text-xs font-bold text-slate-500 dark:text-slate-400">{part.nameEn}</div>
                  <div className="text-sm font-extrabold text-slate-800 dark:text-slate-100">{part.nameZh}</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">{part.badge}</div>
                </button>
              ))}
            </div>

            {/* Detailed Card for Selected Part */}
            {(() => {
              const current = partsOfSpeech[activeSpeechIndex];
              return (
                <div className={`p-6 sm:p-8 rounded-3xl border ${current.border} ${current.bg} space-y-6 transition-all`}>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700">
                        <span>{current.nameEn}</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
                        {current.nameZh}
                      </h2>
                    </div>

                    <div className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 max-w-sm">
                      <span className="font-bold text-indigo-600 dark:text-indigo-400">💡 生活比喻：</span>
                      {current.analogy}
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
                    <div className="text-xs font-bold text-slate-500 dark:text-slate-400">在句子中的主要職責</div>
                    <div className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-100">
                      {current.role}
                    </div>
                  </div>

                  {/* Subtypes breakdown */}
                  <div className="space-y-3">
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      ── 分類與細節掌握 ──
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {current.types.map((type, tIdx) => (
                        <div
                          key={tIdx}
                          className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5"
                        >
                          <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                            {type.title}
                          </div>
                          <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                            {type.desc}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Real-world Sentences with Audio */}
                  <div className="space-y-3">
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      ── 技高工科實境例句 (點擊發音) ──
                    </h3>
                    <div className="space-y-2">
                      {current.examples.map((ex, eIdx) => (
                        <div
                          key={eIdx}
                          className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 group hover:border-indigo-400 transition-all"
                        >
                          <div className="space-y-1">
                            <div className="text-sm sm:text-base font-mono font-bold text-slate-900 dark:text-white">
                              {ex.en}
                            </div>
                            <div className="text-xs text-slate-600 dark:text-slate-400">
                              {ex.zh}
                            </div>
                            <div className="text-[11px] font-medium text-indigo-600 dark:text-indigo-400 pt-0.5">
                              重點掌握：{ex.highlight}
                            </div>
                          </div>

                          <button
                            onClick={() => playTTS(ex.en)}
                            className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-600 hover:text-white transition-all shrink-0 cursor-pointer shadow-sm"
                            title="播放美式發音"
                          >
                            <Volume2 className="size-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Exam Tip */}
                  <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 flex items-start gap-3">
                    <Lightbulb className="size-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <div className="text-xs font-bold text-amber-800 dark:text-amber-300">
                        {current.testTip}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* TAB 3: Suffix Secrets Table */}
        {activeTab === 'suffixes' && (
          <div className="space-y-6 animate-fade-in-up">
            <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-base sm:text-lg">
                <Zap className="size-5" />
                <span>不認識單字也能答對！字尾 (Suffix) 秒殺判斷法</span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                英文中 70% 的單字可以透過<strong>「字尾」</strong>直接辨識出詞性。當你在統測克漏字選項中看到長相很像的四個字時（例如：<code>protect, protective, protection, protectively</code>），只要看字尾就能立刻挑出名詞、動詞、形容詞或副詞！
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {suffixRules.map((sec, sIdx) => (
                <div
                  key={sIdx}
                  className={`p-5 rounded-2xl border ${sec.bg} space-y-4`}
                >
                  <div className="flex items-center gap-2 font-extrabold text-base">
                    <span>{sec.icon}</span>
                    <span className={sec.color}>{sec.part}</span>
                  </div>

                  <div className="space-y-2.5">
                    {sec.suffixes.map((suf, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 space-y-1"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-mono font-bold text-sm text-slate-900 dark:text-white bg-indigo-50 dark:bg-indigo-950 px-2 py-0.5 rounded border border-indigo-200 dark:border-indigo-800">
                            {suf.suf}
                          </span>
                          <button
                            onClick={() => playTTS(suf.ex)}
                            className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 text-xs flex items-center gap-1 transition-colors"
                          >
                            <Volume2 className="size-3.5" /> 示範
                          </button>
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                          {suf.ex}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Suffix Special Trap Alert */}
            <div className="p-5 rounded-2xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900 space-y-2">
              <div className="flex items-center gap-2 font-bold text-rose-800 dark:text-rose-300 text-sm">
                <Lightbulb className="size-4" />
                <span>⚠️ 統測大陷阱：看到 -ly 不一定是副詞！</span>
              </div>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                一般而言 <code>形容詞 + ly = 副詞</code>（例如：<code>careful + ly = carefully</code>）。<br />
                但是！如果前面是<strong>「名詞 + ly」</strong>，它會變成<strong>「形容詞」</strong>！<br />
                常考陷阱：<code>friend (名詞) + ly = friendly (友善的，形容詞！)</code>、<code>cost (名詞) + ly = costly (昂貴的，形容詞！)</code>、<code>love (名詞) + ly = lovely (可愛的，形容詞！)</code>。
              </p>
            </div>
          </div>
        )}

        {/* TAB 4: Interactive Quiz */}
        {activeTab === 'quiz' && (
          <div className="space-y-6 animate-fade-in-up">
            {!quizFinished ? (
              <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md space-y-6">
                {/* Quiz Header */}
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
                  <div className="flex items-center gap-2">
                    <Target className="size-5 text-indigo-600 dark:text-indigo-400" />
                    <span className="font-bold text-sm text-slate-700 dark:text-slate-300">
                      第 {quizIndex + 1} 題 / 共 {quizQuestions.length} 題
                    </span>
                  </div>
                  <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-bold bg-indigo-50 dark:bg-indigo-950 px-2.5 py-1 rounded-full border border-indigo-200 dark:border-indigo-800">
                    目前得分：{quizScore} 分
                  </div>
                </div>

                {/* Question */}
                <div className="space-y-3">
                  <div className="text-xs text-slate-400 font-mono">請根據文法位置與字尾判斷，選出最適當的單字填入空格：</div>
                  <div className="text-lg sm:text-xl font-bold font-mono text-slate-900 dark:text-white leading-relaxed">
                    {quizQuestions[quizIndex].sentence}
                  </div>
                  <button
                    onClick={() => playTTS(quizQuestions[quizIndex].audio)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 hover:text-indigo-600 text-xs font-medium text-slate-600 dark:text-slate-300 transition-colors"
                  >
                    <Volume2 className="size-4" /> 聆聽題目整句發音
                  </button>
                </div>

                {/* Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {quizQuestions[quizIndex].options.map((opt, idx) => {
                    const isSelected = selectedAnswer === idx;
                    const isCorrect = idx === quizQuestions[quizIndex].correctIndex;
                    let btnStyle = 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 hover:border-indigo-400';

                    if (selectedAnswer !== null) {
                      if (isCorrect) {
                        btnStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 font-bold';
                      } else if (isSelected) {
                        btnStyle = 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200';
                      }
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectAnswer(idx)}
                        disabled={selectedAnswer !== null}
                        className={`p-4 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${btnStyle}`}
                      >
                        <div>
                          <div className="font-mono font-bold text-sm sm:text-base">
                            ({String.fromCharCode(65 + idx)}) {opt.text}
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                            詞性：{opt.pos}
                          </div>
                        </div>

                        {selectedAnswer !== null && (
                          <div>
                            {isCorrect && <CheckCircle2 className="size-5 text-emerald-500" />}
                            {isSelected && !isCorrect && <XCircle className="size-5 text-rose-500" />}
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation Card */}
                {showExplanation && (
                  <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 space-y-2 animate-fade-in-up">
                    <div className="flex items-center gap-1.5 font-bold text-xs text-indigo-700 dark:text-indigo-300">
                      <HelpCircle className="size-4" /> 解題剖析：
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                      {quizQuestions[quizIndex].reason}
                    </p>
                    <div className="pt-2 flex justify-end">
                      <button
                        onClick={handleNextQuestion}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-md cursor-pointer"
                      >
                        {quizIndex < quizQuestions.length - 1 ? '下一題' : '查看測驗成果'} <ArrowRight className="size-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Quiz Finished View */
              <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md text-center space-y-6">
                <div className="inline-flex p-4 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                  <Award className="size-12" />
                </div>
                <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  詞性測驗完成！你的總分：{quizScore} / {quizQuestions.length}
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                  {quizScore >= 5
                    ? '太優秀了！你已經具備統測英文名師等級的「詞性秒殺力」，克漏字填空再也難不倒你！'
                    : '很棒的練習！詞性反射神經需要持續鍛鍊，隨時回顧上面的「字尾秒殺表」與「積木車廂架構」，保證大幅提升答題速度！'}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    onClick={restartQuiz}
                    className="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold transition-colors cursor-pointer"
                  >
                    重新測驗一次
                  </button>
                  <Link
                    href="/prerequisites/english/phonetics-dictionary"
                    className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-md cursor-pointer"
                  >
                    前往第 3 模組：音標與字典查閱 <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Bottom Module Progress & Next Link Banner */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 border border-indigo-200/80 dark:border-indigo-900/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400">
              先備跳板進度：2 / 3 已就緒
            </div>
            <div className="text-base font-bold text-slate-900 dark:text-white">
              已掌握單字與詞性？下一步解鎖「英文字典音標與詞條查閱能力」！
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/prerequisites/english/vocab-1200"
              className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 transition-colors"
            >
              ← 重溫 1200 單字
            </Link>
            <Link
              href="/prerequisites/english/phonetics-dictionary"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-md cursor-pointer"
            >
              進入第 3 單元：音標與字典 <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
