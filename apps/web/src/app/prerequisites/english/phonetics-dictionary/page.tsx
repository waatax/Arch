'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Volume2,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Award,
  BookMarked,
  Music,
  FileCode,
  Target,
  Printer
} from 'lucide-react';

export default function PhoneticsDictionaryPage() {
  const [activeTab, setActiveTab] = useState<'phonetics' | 'stress' | 'dictionary' | 'quiz'>('phonetics');
  const [phoneticFilter, setPhoneticFilter] = useState<'all' | 'vowels' | 'consonants'>('all');
  const [quizIndex, setQuizIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  const playTTS = (text: string, rate: number = 0.85) => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = rate;
      window.speechSynthesis.speak(utterance);
    }
  };

  // KK Phonetic Chart Data
  const phoneticItems = [
    // Vowels
    { sym: 'i', type: 'vowel', name: '長母音', word: 'see', kk: '[si]', zh: '看見', tip: '微笑拉長音，如國語「一」稍拉長' },
    { sym: 'ɪ', type: 'vowel', name: '短母音', word: 'sit', kk: '[sɪt]', zh: '坐下', tip: '短促放鬆，介於「一」與「ㄝ」之間' },
    { sym: 'e', type: 'vowel', name: '雙/單母音', word: 'say', kk: '[se]', zh: '說', tip: '嘴角拉開「欸」' },
    { sym: 'ɛ', type: 'vowel', name: '短母音', word: 'bed', kk: '[bɛd]', zh: '床', tip: '嘴巴開約兩指寬「ㄝ」' },
    { sym: 'æ', type: 'vowel', name: '大嘴母音', word: 'cat', kk: '[kæt]', zh: '貓', tip: '下巴下壓三指寬蝴蝶音' },
    { sym: 'ɑ', type: 'vowel', name: '短母音', word: 'hot', kk: '[hɑt]', zh: '熱的', tip: '看牙醫張大嘴說「阿」' },
    { sym: 'ɔ', type: 'vowel', name: '長母音', word: 'saw', kk: '[sɔ]', zh: '看見(過)/鋸子', tip: '嘴唇縮圓發「奧」' },
    { sym: 'o', type: 'vowel', name: '雙母音', word: 'go', kk: '[go]', zh: '去', tip: '嘴唇由大圓縮小圓「歐」' },
    { sym: 'ʊ', type: 'vowel', name: '短母音', word: 'book', kk: '[bʊk]', zh: '書本', tip: '短促收緊「屋」' },
    { sym: 'u', type: 'vowel', name: '長母音', word: 'boot', kk: '[but]', zh: '靴子', tip: '嘟嘴吹口哨延長「屋～」' },
    { sym: 'ʌ', type: 'vowel', name: '短母音', word: 'cup', kk: '[kʌp]', zh: '杯子', tip: '腹部用力短音「啊」' },
    { sym: 'ə', type: 'vowel', name: '弱讀母音', word: 'about', kk: '[əˈbaʊt]', zh: '關於', tip: '英文中最常見懶人音，放鬆念「ㄜ」' },
    { sym: 'ɝ', type: 'vowel', name: '捲舌母音', word: 'bird', kk: '[bɝd]', zh: '鳥', tip: '重音捲舌「ㄦ」' },
    { sym: 'ɚ', type: 'vowel', name: '弱讀捲舌', word: 'worker', kk: '[ˈwɝkɚ]', zh: '工人', tip: '輕音結尾微捲舌' },
    { sym: 'aɪ', type: 'vowel', name: '雙母音', word: 'time', kk: '[taɪm]', zh: '時間', tip: '「阿」滑向「依」' },
    { sym: 'aʊ', type: 'vowel', name: '雙母音', word: 'now', kk: '[naʊ]', zh: '現在', tip: '「阿」滑向「屋」' },
    { sym: 'ɔɪ', type: 'vowel', name: '雙母音', word: 'boy', kk: '[bɔɪ]', zh: '男孩', tip: '「奧」滑向「依」' },

    // Consonants (Voiceless vs Voiced pairs)
    { sym: 'p', type: 'consonant', name: '無聲爆破', word: 'pen', kk: '[pɛn]', zh: '原子筆', tip: '雙唇閉合噴氣，聲帶不震動' },
    { sym: 'b', type: 'consonant', name: '有聲爆破', word: 'bag', kk: '[bæg]', zh: '袋子', tip: '雙唇閉合濁音，聲帶震動' },
    { sym: 't', type: 'consonant', name: '無聲齒齦', word: 'tool', kk: '[tul]', zh: '工具', tip: '舌尖頂上齒齦彈開噴氣' },
    { sym: 'd', type: 'consonant', name: '有聲齒齦', word: 'draw', kk: '[drɔ]', zh: '繪製', tip: '舌尖頂上齒齦濁音震動' },
    { sym: 'k', type: 'consonant', name: '無聲軟顎', word: 'key', kk: '[ki]', zh: '鑰匙', tip: '舌後頂軟顎清脆噴氣' },
    { sym: 'g', type: 'consonant', name: '有聲軟顎', word: 'gate', kk: '[get]', zh: '大門', tip: '舌後頂軟顎濁音' },
    { sym: 'f', type: 'consonant', name: '無聲唇齒', word: 'fast', kk: '[fæst]', zh: '快速的', tip: '上門牙輕咬下唇輕吹氣' },
    { sym: 'v', type: 'consonant', name: '有聲唇齒', word: 'view', kk: '[vju]', zh: '視野', tip: '上門牙輕咬下唇強烈震動' },
    { sym: 'θ', type: 'consonant', name: '無聲咬舌', word: 'think', kk: '[θɪŋk]', zh: '思考', tip: '★重要：舌尖放上下門牙間輕吐氣' },
    { sym: 'ð', type: 'consonant', name: '有聲咬舌', word: 'this', kk: '[ðɪs]', zh: '這個', tip: '★重要：舌尖放上下門牙間震動發聲' },
    { sym: 's', type: 'consonant', name: '無聲齒齦', word: 'site', kk: '[saɪt]', zh: '工地/地點', tip: '氣流從牙縫摩擦如同蛇嘶聲' },
    { sym: 'z', type: 'consonant', name: '有聲齒齦', word: 'zero', kk: '[ˈzɪro]', zh: '零', tip: '如同蜜蜂嗡嗡聲強烈震動' },
    { sym: 'ʃ', type: 'consonant', name: '無聲噓音', word: 'ship', kk: '[ʃɪp]', zh: '船', tip: '比「噓」手勢嘴唇微噘' },
    { sym: 'ʒ', type: 'consonant', name: '有聲摩擦', word: 'measure', kk: '[ˈmɛʒɚ]', zh: '測量', tip: '濁音版「日」微捲舌' },
    { sym: 'tʃ', type: 'consonant', name: '無聲破擦', word: 'check', kk: '[tʃɛk]', zh: '檢查', tip: '如國語「七」的短促爆發音' },
    { sym: 'dʒ', type: 'consonant', name: '有聲破擦', word: 'job', kk: '[dʒɑb]', zh: '工作', tip: '如國語「居」的濁音震動' },
    { sym: 'm', type: 'consonant', name: '雙唇鼻音', word: 'map', kk: '[mæp]', zh: '地圖', tip: '雙唇緊閉由鼻子出氣' },
    { sym: 'n', type: 'consonant', name: '齒齦鼻音', word: 'net', kk: '[nɛt]', zh: '網路/網子', tip: '舌尖抵齒齦鼻腔共鳴' },
    { sym: 'ŋ', type: 'consonant', name: '軟顎鼻音', word: 'ring', kk: '[rɪŋ]', zh: '環/響起', tip: '舌根抵軟顎「嗯」' },
    { sym: 'l', type: 'consonant', name: '舌邊側音', word: 'line', kk: '[laɪn]', zh: '線條', tip: '字首「樂」，字尾舌尖抵上顎「歐」' },
    { sym: 'r', type: 'consonant', name: '捲舌音', word: 'rule', kk: '[rul]', zh: '規則', tip: '舌尖捲起懸空，不碰口腔任何部位' }
  ];

  // Syllables & Stress Pair Rules
  const stressRules = [
    {
      word: 'present',
      nounKK: '[ˈprɛznt]',
      nounZh: '禮物；現在 (名詞)',
      verbKK: '[prɪˈzɛnt]',
      verbZh: '呈現；贈送 (動詞)',
      rule: '雙音節名詞重音在第一音節；動詞重音後移至第二音節。'
    },
    {
      word: 'record',
      nounKK: '[ˈrɛkɚd]',
      nounZh: '紀錄；唱片 (名詞)',
      verbKK: '[rɪˈkɔrd]',
      verbZh: '錄音；記載 (動詞)',
      rule: '名詞重音在前 [ˈrɛ-]；動詞重音在後 [-ˈkɔrd]。'
    },
    {
      word: 'project',
      nounKK: '[ˈprɑdʒɛkt]',
      nounZh: '專案；工程計畫 (名詞)',
      verbKK: '[prəˈdʒɛkt]',
      verbZh: '投射；預測 (動詞)',
      rule: '工科關鍵字！名詞重音在前，動詞重音在後。'
    },
    {
      word: 'contract',
      nounKK: '[ˈkɑntrækt]',
      nounZh: '契約；合同 (名詞)',
      verbKK: '[kənˈtrækt]',
      verbZh: '收縮；訂約 (動詞)',
      rule: '工程合約念第一音節；熱脹冷縮之收縮念第二音節。'
    }
  ];

  // Dictionary Entry Secrets
  const dictCodes = [
    { code: '[C]', title: 'Countable Noun (可數名詞)', desc: '可以數的一顆顆東西，有單數與複數 (如 a beam, two beams)。' },
    { code: '[U]', title: 'Uncountable Noun (不可數名詞)', desc: '無法數、無複數、不加 a/an (如 concrete, steel, safety, information)。' },
    { code: '[T]', title: 'Transitive Verb (及物動詞)', desc: '動作必須直接接「受詞名詞」才完整 (如 build a bridge)。' },
    { code: '[I]', title: 'Intransitive Verb (不及物動詞)', desc: '動詞自己獨立完整，不需要受詞，或必須接介系詞 (如 The train arrives)。' },
    { code: '[pl.]', title: 'Plural (複數型)', desc: '通常恆為複數形式 (如 scissors 剪刀, goggles 護目鏡, premises 廠區)。' },
    { code: 'colloc.', title: 'Collocation (慣用搭配詞)', desc: '外國人最自然的字詞組合，統測克漏字命題熱區 (如 pay attention to, make an effort)。' }
  ];

  // Quiz Questions
  const quizQuestions = [
    {
      id: 1,
      question: '請問 KK 音標 [θ] 與 [ð] 在發音時最大的共同特徵是什麼？',
      audio: 'think and this',
      options: [
        '舌尖要放在上下門牙之間輕咬咬舌',
        '雙唇必須緊緊閉合噴氣',
        '舌根要緊貼軟顎發出鼻音',
        '嘴巴要張成三個指頭寬的蝴蝶音'
      ],
      correctIndex: 0,
      reason: '[θ] (如 think) 與 [ð] (如 this) 是英文咬舌音，發音時舌尖必須置於上下齒之間，是台灣學生最容易誤念成 [s] 或 [z] 的常考發音！'
    },
    {
      id: 2,
      question: '單字 "project" 若要作為工科統測常見的「工程專案、計畫」(名詞) 時，其重音應該放在哪裡？',
      audio: 'project',
      options: [
        '第一音節 [ˈprɑdʒɛkt]',
        '第二音節 [prəˈdʒɛkt]',
        '第三音節',
        '沒有重音限制'
      ],
      correctIndex: 0,
      reason: '英文雙音節字有一條強大通則：「名詞重音常在前，動詞重音常在後」。因此名詞專案念 [ˈprɑdʒɛkt]；動詞投射/放映念 [prəˈdʒɛkt]！'
    },
    {
      id: 3,
      question: '在英文字典中，若某名詞詞條標註為 [U]，代表以下哪一種文法特性？',
      audio: 'uncountable noun',
      options: [
        '它是不可數名詞，前方不能加 a/an，也不能加 -s/es 複數',
        '它是極度罕見的不規則名詞',
        '它是單位名詞，後面一定要接 of',
        '它是通用名詞，可以隨意加 s'
      ],
      correctIndex: 0,
      reason: '[U] 代表 Uncountable (不可數名詞)。例如 concrete (混凝土)、information (資訊) 前面絕對不能寫 an information，也不能寫 informations！'
    },
    {
      id: 4,
      question: '字典裡動詞標註 [T] 代表 Transitive (及物動詞)，這意味著它在句子中有什麼必要條件？',
      audio: 'transitive verb',
      options: [
        '後面必須緊接著受詞 (Object)，否則意思不完整',
        '後面永遠不能接地點或時間',
        '只能用於過去式，不能用於現在式',
        '必須搭配助動詞 will 才能使用'
      ],
      correctIndex: 0,
      reason: '及物動詞 [T] 如 build (建造)、measure (測量)，後面必須直接接受詞 (例如 build a house)，如果只寫 I build. 句子就不成立！'
    },
    {
      id: 5,
      question: '下列哪一組單字的音標字首子音是「無聲子音」(聲帶不震動)？',
      audio: 'pen, tool, check',
      options: [
        '[p] (pen), [t] (tool), [tʃ] (check)',
        '[b] (bag), [d] (dog), [g] (gate)',
        '[v] (view), [z] (zoo), [m] (map)',
        '[r] (rule), [l] (line), [w] (we)'
      ],
      correctIndex: 0,
      reason: '[p], [t], [k], [f], [θ], [s], [ʃ], [tʃ] 為無聲清子音，發音時手摸喉嚨喉頭不會震動；其餘 B、C、D 選項皆為有聲濁子音！'
    },
    {
      id: 6,
      question: '在查閱英文字典時，如果遇到「片語搭配 (Collocation)」如 "be responsible for"，最佳的學習策略是什麼？',
      audio: 'be responsible for',
      options: [
        '整組片語連同介系詞 for 一起記憶，並閱讀字典例句',
        '只單獨背 responsible 的中文，不管介系詞',
        '把 responsible 當作動詞背誦',
        '只抄寫三遍音標即可'
      ],
      correctIndex: 0,
      reason: '統測克漏字最愛考搭配詞介系詞（例如 responsible 一定搭 for、interested 一定搭 in）。整組片語記憶並透過字典例句內化，考試才能直覺秒殺！'
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

  const filteredPhonetics = phoneticItems.filter((item) => {
    if (phoneticFilter === 'vowels') return item.type === 'vowel';
    if (phoneticFilter === 'consonants') return item.type === 'consonant';
    return true;
  });

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
            <span className="text-slate-700 dark:text-slate-200 font-bold">音標與字典詞條查閱</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="print:hidden rounded-full bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 px-3 py-1 text-xs font-mono font-bold text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
              title="以 A4 紙本格式列印或另存為 PDF"
            >
              <Printer className="size-3.5 text-slate-600 dark:text-slate-300" />
              <span>列印手冊 (A4)</span>
            </button>
            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
              <Sparkles className="size-3.5" /> 技高自學核心能力
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-900 via-slate-900 to-indigo-950 text-white p-6 sm:p-10 shadow-xl border border-teal-500/20">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-teal-500/30 text-teal-200 border border-teal-400/30">
              <BookMarked className="size-3.5" /> Step-0 Prerequisite Module 3
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              學會釣魚的終身外掛：<span className="bg-gradient-to-r from-teal-300 via-emerald-300 to-amber-300 bg-clip-text text-transparent">基本英文字典音標與詞條查閱能力</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              很多高工同學背單字只靠死背 26 個英文字母的順序，過程痛苦且隔天就忘。
              只要掌握<strong> KK 音標發音規則</strong>與<strong>英文字典密碼（[C], [U], [T], [I]）</strong>，就能做到「看音標能直接發音、聽發音能自然拼出單字」，自學效率直接翻倍！
            </p>

            {/* Feature highlights */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-teal-400 font-bold text-lg">38+</div>
                <div className="text-slate-300">KK 音標完整收錄</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-emerald-400 font-bold text-lg">🔊</div>
                <div className="text-slate-300">全音標即時真人發音</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-amber-400 font-bold text-lg">6 組</div>
                <div className="text-slate-300">字典詞條標記解密</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-indigo-400 font-bold text-lg">100%</div>
                <div className="text-slate-300">統測自學核心外掛</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 space-x-2 sm:space-x-4 overflow-x-auto pb-1">
          <button
            onClick={() => setActiveTab('phonetics')}
            className={`flex items-center gap-2 py-3 px-4 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-all ${
              activeTab === 'phonetics'
                ? 'border-teal-600 text-teal-600 dark:text-teal-400 dark:border-teal-400'
                : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
            }`}
          >
            <Volume2 className="size-4" /> 1. KK 音標互動聲音版
          </button>
          <button
            onClick={() => setActiveTab('stress')}
            className={`flex items-center gap-2 py-3 px-4 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-all ${
              activeTab === 'stress'
                ? 'border-teal-600 text-teal-600 dark:text-teal-400 dark:border-teal-400'
                : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
            }`}
          >
            <Music className="size-4" /> 2. 音節與名動重音轉移
          </button>
          <button
            onClick={() => setActiveTab('dictionary')}
            className={`flex items-center gap-2 py-3 px-4 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-all ${
              activeTab === 'dictionary'
                ? 'border-teal-600 text-teal-600 dark:text-teal-400 dark:border-teal-400'
                : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
            }`}
          >
            <FileCode className="size-4" /> 3. 字典符號解碼 SOP
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`flex items-center gap-2 py-3 px-4 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-all ${
              activeTab === 'quiz'
                ? 'border-teal-600 text-teal-600 dark:text-teal-400 dark:border-teal-400'
                : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
            }`}
          >
            <Target className="size-4" /> 4. 音標與字典神探測驗
          </button>
        </div>

        {/* TAB 1: Phonetics Soundboard */}
        {activeTab === 'phonetics' && (
          <div className="space-y-6 animate-fade-in-up">
            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-600 dark:text-slate-300">音標類型篩選：</span>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setPhoneticFilter('all')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      phoneticFilter === 'all'
                        ? 'bg-teal-600 text-white shadow-sm'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                    }`}
                  >
                    全部音標 ({phoneticItems.length})
                  </button>
                  <button
                    onClick={() => setPhoneticFilter('vowels')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      phoneticFilter === 'vowels'
                        ? 'bg-amber-600 text-white shadow-sm'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                    }`}
                  >
                    母音 (Vowels)
                  </button>
                  <button
                    onClick={() => setPhoneticFilter('consonants')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      phoneticFilter === 'consonants'
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                    }`}
                  >
                    子音 (Consonants)
                  </button>
                </div>
              </div>

              <div className="text-xs text-slate-500 dark:text-slate-400">
                點擊音標卡片右上角 🔊 立即聆聽單字發音
              </div>
            </div>

            {/* Phonetic Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {filteredPhonetics.map((p, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-teal-400 dark:hover:border-teal-600 transition-all shadow-sm flex flex-col justify-between space-y-3 group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="text-2xl font-mono font-black text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 px-3 py-1 rounded-xl border border-teal-200 dark:border-teal-900">
                        [{p.sym}]
                      </span>
                      <div>
                        <div className="text-[11px] font-mono text-slate-400 uppercase">
                          {p.name}
                        </div>
                        <div className="text-sm font-bold text-slate-800 dark:text-slate-100 font-mono">
                          {p.word} <span className="text-xs text-slate-500 font-normal">{p.kk}</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => playTTS(p.word)}
                      className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-teal-600 group-hover:text-white transition-all cursor-pointer shadow-sm"
                      title={`聆聽 ${p.word} 發音`}
                    >
                      <Volume2 className="size-4" />
                    </button>
                  </div>

                  <div className="space-y-1 pt-1 border-t border-slate-100 dark:border-slate-800">
                    <div className="text-xs font-medium text-slate-700 dark:text-slate-300">
                      意思：{p.zh}
                    </div>
                    <div className="text-[11px] text-teal-700 dark:text-teal-300 bg-teal-50/60 dark:bg-teal-950/40 p-1.5 rounded-lg">
                      💡 發音訣竅：{p.tip}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: Syllable and Stress */}
        {activeTab === 'stress' && (
          <div className="space-y-6 animate-fade-in-up">
            <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 font-bold text-base sm:text-lg">
                <Music className="size-5" />
                <span>重音符號秘密：讀對重音，英文瞬間像母語人士！</span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                KK 音標中的撇號 <code>[ ˈ ]</code> 叫做<strong>主重音（Primary Stress）</strong>。看到主重音符號，代表<strong>緊接在後面的那個音節要念得更響亮、音調更高、長度拉長</strong>！
                次重音 <code>[ ˌ ]</code> 則是次要高音。
              </p>
            </div>

            {/* Noun vs Verb Stress Pairs */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  ── 統測高頻考點：名詞與動詞「重音轉移」經典對照 ──
                </h3>
                <span className="text-xs font-medium text-teal-600 dark:text-teal-400">口訣：名在前、動在後！</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {stressRules.map((pair, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4"
                  >
                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                      <span className="text-lg font-mono font-extrabold text-indigo-600 dark:text-indigo-400">
                        {pair.word}
                      </span>
                      <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        雙音節名動同形
                      </span>
                    </div>

                    <div className="space-y-2">
                      {/* Noun form */}
                      <div className="p-3 rounded-xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/60 dark:border-blue-900/60 flex items-center justify-between">
                        <div>
                          <div className="text-xs font-mono font-bold text-blue-800 dark:text-blue-300">
                            名詞形：{pair.nounKK}
                          </div>
                          <div className="text-xs text-slate-600 dark:text-slate-300">{pair.nounZh}</div>
                        </div>
                        <button
                          onClick={() => playTTS(pair.word)}
                          className="p-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs flex items-center gap-1 transition-colors cursor-pointer"
                        >
                          <Volume2 className="size-3.5" /> 聽發音
                        </button>
                      </div>

                      {/* Verb form */}
                      <div className="p-3 rounded-xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-200/60 dark:border-rose-900/60 flex items-center justify-between">
                        <div>
                          <div className="text-xs font-mono font-bold text-rose-800 dark:text-rose-300">
                            動詞形：{pair.verbKK}
                          </div>
                          <div className="text-xs text-slate-600 dark:text-slate-300">{pair.verbZh}</div>
                        </div>
                        <button
                          onClick={() => playTTS(`to ${pair.word}`)}
                          className="p-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-xs flex items-center gap-1 transition-colors cursor-pointer"
                        >
                          <Volume2 className="size-3.5" /> 聽發音
                        </button>
                      </div>
                    </div>

                    <div className="text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 p-2.5 rounded-xl">
                      💡 記憶點：{pair.rule}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Dictionary Entry Anatomy */}
        {activeTab === 'dictionary' && (
          <div className="space-y-6 animate-fade-in-up">
            {/* Interactive Anatomy of a Dictionary Entry */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-teal-600 dark:text-teal-400 font-bold text-base sm:text-lg">
                <FileCode className="size-5" />
                <span>一分鐘看懂權威英文字典詞條（詞條構造拆解圖）</span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                查字典不要只瞄一眼中文！真正決定你統測能否拿高分的關鍵在<strong>「詞性代碼」</strong>與<strong>「搭配介系詞」</strong>！
              </p>

              {/* Anatomy Diagram */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-900 text-white font-mono space-y-4 border border-slate-800">
                <div className="flex flex-wrap items-baseline gap-3 border-b border-slate-800 pb-3">
                  <span className="text-2xl font-black text-amber-300">con·struc·tion</span>
                  <span className="text-sm text-teal-300">[kənˈstrʌkʃən]</span>
                  <button
                    onClick={() => playTTS('construction')}
                    className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center gap-1"
                  >
                    <Volume2 className="size-3" /> 聽音
                  </button>
                </div>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="p-3 rounded-xl bg-slate-800/70 border border-slate-700/60 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-blue-500/30 text-blue-300 font-bold text-xs border border-blue-400/30">
                        1. [U] 不可數名詞
                      </span>
                      <span className="text-slate-300 font-sans">建造；建築過程</span>
                    </div>
                    <p className="text-slate-400 font-sans text-xs">
                      The new bridge is currently <strong className="text-amber-300">under construction</strong>. (這座新橋目前正在施工中。)
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-800/70 border border-slate-700/60 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-indigo-500/30 text-indigo-300 font-bold text-xs border border-indigo-400/30">
                        2. [C] 可數名詞
                      </span>
                      <span className="text-slate-300 font-sans">建築物；構造物</span>
                    </div>
                    <p className="text-slate-400 font-sans text-xs">
                      The Eiffel Tower is an impressive steel <strong className="text-amber-300">construction</strong>. (艾菲爾鐵塔是一座令人印象深刻的鋼結構建築。)
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-800/70 border border-slate-700/60 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-emerald-500/30 text-emerald-300 font-bold text-xs border border-emerald-400/30">
                        ★ Collocation 慣用片語
                      </span>
                      <span className="text-emerald-300 font-sans">construction site</span>
                    </div>
                    <p className="text-slate-400 font-sans text-xs">
                      工地 (統測克漏字極高頻命中片語！)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dictionary Codes Grid */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                ── 必備字典代碼速查手冊 ──
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {dictCodes.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5 shadow-sm"
                  >
                    <div className="flex items-center gap-2 font-mono font-extrabold text-sm text-teal-600 dark:text-teal-400">
                      <span className="px-2 py-0.5 rounded bg-teal-50 dark:bg-teal-950 border border-teal-200 dark:border-teal-800">
                        {item.code}
                      </span>
                      <span className="text-xs font-sans text-slate-800 dark:text-slate-200">{item.title}</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 4-Step Query SOP */}
            <div className="p-6 rounded-3xl bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-950/30 dark:to-emerald-950/30 border border-teal-200/80 dark:border-teal-900/60 space-y-3">
              <div className="font-bold text-sm text-teal-900 dark:text-teal-200 flex items-center gap-2">
                <Sparkles className="size-4" /> 高工學霸 4 步查字典 SOP：
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-teal-100 dark:border-teal-900 space-y-1">
                  <div className="font-bold text-teal-600 dark:text-teal-400">Step 1. 看音標</div>
                  <div className="text-slate-600 dark:text-slate-300">先大聲念出三次，把發音牢牢印在腦海</div>
                </div>
                <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-teal-100 dark:border-teal-900 space-y-1">
                  <div className="font-bold text-teal-600 dark:text-teal-400">Step 2. 判詞性</div>
                  <div className="text-slate-600 dark:text-slate-300">確認是 [C]、[U] 還是 [T]、[I]，預測句子位置</div>
                </div>
                <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-teal-100 dark:border-teal-900 space-y-1">
                  <div className="font-bold text-teal-600 dark:text-teal-400">Step 3. 圈介系詞</div>
                  <div className="text-slate-600 dark:text-slate-300">注意它常跟哪一個介系詞一起出現</div>
                </div>
                <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-teal-100 dark:border-teal-900 space-y-1">
                  <div className="font-bold text-teal-600 dark:text-teal-400">Step 4. 讀例句</div>
                  <div className="text-slate-600 dark:text-slate-300">絕對不只背中文，一定要念完整例句內化語感</div>
                </div>
              </div>
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
                    <Target className="size-5 text-teal-600 dark:text-teal-400" />
                    <span className="font-bold text-sm text-slate-700 dark:text-slate-300">
                      第 {quizIndex + 1} 題 / 共 {quizQuestions.length} 題
                    </span>
                  </div>
                  <div className="text-xs font-mono text-teal-600 dark:text-teal-400 font-bold bg-teal-50 dark:bg-teal-950 px-2.5 py-1 rounded-full border border-teal-200 dark:border-teal-800">
                    目前得分：{quizScore} 分
                  </div>
                </div>

                {/* Question */}
                <div className="space-y-3">
                  <div className="text-xs text-slate-400 font-mono">請根據 KK 音標發音與字典詞條常識，選出正確解答：</div>
                  <div className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-relaxed">
                    {quizQuestions[quizIndex].question}
                  </div>
                  <button
                    onClick={() => playTTS(quizQuestions[quizIndex].audio)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-teal-50 hover:text-teal-600 text-xs font-medium text-slate-600 dark:text-slate-300 transition-colors"
                  >
                    <Volume2 className="size-4" /> 聆聽本題範例字發音
                  </button>
                </div>

                {/* Options */}
                <div className="space-y-2.5">
                  {quizQuestions[quizIndex].options.map((opt, idx) => {
                    const isSelected = selectedAnswer === idx;
                    const isCorrect = idx === quizQuestions[quizIndex].correctIndex;
                    let btnStyle = 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 hover:border-teal-400';

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
                        className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all cursor-pointer ${btnStyle}`}
                      >
                        <div className="text-sm sm:text-base">
                          <span className="font-mono font-bold mr-2">({String.fromCharCode(65 + idx)})</span>
                          {opt}
                        </div>

                        {selectedAnswer !== null && (
                          <div className="shrink-0 ml-3">
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
                  <div className="p-4 rounded-2xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 space-y-2 animate-fade-in-up">
                    <div className="flex items-center gap-1.5 font-bold text-xs text-teal-700 dark:text-teal-300">
                      <HelpCircle className="size-4" /> 名師詳細解析：
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                      {quizQuestions[quizIndex].reason}
                    </p>
                    <div className="pt-2 flex justify-end">
                      <button
                        onClick={handleNextQuestion}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold transition-all shadow-md cursor-pointer"
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
                <div className="inline-flex p-4 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-600 dark:text-teal-400">
                  <Award className="size-12" />
                </div>
                <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  音標與字典測驗完成！你的總分：{quizScore} / {quizQuestions.length}
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                  {quizScore >= 5
                    ? '太厲害了！你已經徹底解鎖英文自學的核心密碼，未來遇到任何生字都能看懂音標讀出聲、查閱字典掌握詞條！'
                    : '練習是進步的階梯！KK 音標和字典符號是長期的好夥伴，隨時回來點擊聲音版練習發音，語感將日漸神速！'}
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <button
                    onClick={restartQuiz}
                    className="px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold transition-colors cursor-pointer"
                  >
                    重新測驗一次
                  </button>
                  <Link
                    href="/subjects/english"
                    className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold transition-all shadow-md cursor-pointer"
                  >
                    三大先備全數通關！返回統測英文學科 <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Bottom All Done Completion Banner */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-50 via-teal-50 to-indigo-50 dark:from-emerald-950/30 dark:via-teal-950/30 dark:to-indigo-950/30 border border-emerald-200/80 dark:border-emerald-900/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5 justify-center sm:justify-start">
              <CheckCircle2 className="size-4" /> 恭喜！Step-0 零痛先備三大跳板已全數解鎖
            </div>
            <div className="text-base font-bold text-slate-900 dark:text-white">
              基礎 1200 單字 + 基本八大詞性 + 音標字典查閱已具備，現在即可無痛攻克統測英文！
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/prerequisites/english/parts-of-speech"
              className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 transition-colors"
            >
              ← 重溫八大詞性
            </Link>
            <Link
              href="/subjects/english"
              className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold transition-all shadow-md cursor-pointer"
            >
              開始統測單元衝刺 <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
