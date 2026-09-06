'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  Volume2, 
  ArrowLeft, 
  Sparkles, 
  CheckCircle2, 
  Lightbulb, 
  Search, 
  Award,
  Printer
} from 'lucide-react';

export default function Vocab1200Page() {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [quizIndex, setQuizIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
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

  // 12 Thematic Categories of Junior High 1200 Words
  const categories = [
    {
      id: 0,
      name: '人物、家庭與身分',
      enName: 'People & Family',
      icon: '👨‍👩‍👧',
      words: [
        { en: 'family', kk: '[ˈfæməlɪ]', zh: '家庭；家人', ex: 'My family lives in Taichung.' },
        { en: 'father', kk: '[ˈfɑðɚ]', zh: '父親；爸爸', ex: 'His father is a civil engineer.' },
        { en: 'mother', kk: '[ˈmʌðɚ]', zh: '母親；媽媽', ex: 'Her mother works at a hospital.' },
        { en: 'brother', kk: '[ˈbrʌðɚ]', zh: '哥哥；弟弟', ex: 'My brother enjoys drawing blueprints.' },
        { en: 'sister', kk: '[ˈsɪstɚ]', zh: '姊姊；妹妹', ex: 'She has an older sister.' },
        { en: 'friend', kk: '[frɛnd]', zh: '朋友', ex: 'A good friend is always supportive.' },
        { en: 'teacher', kk: '[ˈtitʃɚ]', zh: '老師；教師', ex: 'The teacher explained the formula.' },
        { en: 'student', kk: '[ˈstudnt]', zh: '學生', ex: 'Every student should practice daily.' },
        { en: 'worker', kk: '[ˈwɝkɚ]', zh: '工人；勞動者', ex: 'Safety is vital for every worker.' },
        { en: 'person', kk: '[ˈpɝsn]', zh: '人；個人', ex: 'He is a very reliable person.' },
      ]
    },
    {
      id: 1,
      name: '日常生活與作息動作',
      enName: 'Daily Life & Routines',
      icon: '⏰',
      words: [
        { en: 'wake', kk: '[wek]', zh: '醒來；喚醒 (wake up)', ex: 'I wake up at six thirty every morning.' },
        { en: 'wash', kk: '[wɑʃ]', zh: '洗滌；清洗', ex: 'Always wash your hands before meals.' },
        { en: 'cook', kk: '[kʊk]', zh: '烹飪；廚師', ex: 'My parents cook dinner together.' },
        { en: 'clean', kk: '[klin]', zh: '打掃；乾淨的', ex: 'Keep the drafting table clean.' },
        { en: 'sleep', kk: '[slip]', zh: '睡覺；睡眠', ex: 'Adequate sleep improves memory.' },
        { en: 'rest', kk: '[rɛst]', zh: '休息；其餘部分', ex: 'Take a short rest after intensive study.' },
        { en: 'wear', kk: '[wɛr]', zh: '穿戴；佩戴', ex: 'Workers must wear safety helmets.' },
        { en: 'open', kk: '[ˈopən]', zh: '打開；營業的', ex: 'Please open the window for ventilation.' },
        { en: 'close', kk: '[kloz]', zh: '關閉；接近的', ex: 'Remember to close the door.' },
        { en: 'wait', kk: '[wet]', zh: '等待 (wait for)', ex: 'Wait for the concrete to dry completely.' },
      ]
    },
    {
      id: 2,
      name: '食物、餐飲與料理',
      enName: 'Food & Dining',
      icon: '🍱',
      words: [
        { en: 'rice', kk: '[raɪs]', zh: '米飯；稻米', ex: 'Rice is a staple food in Taiwan.' },
        { en: 'noodle', kk: '[ˈnudl]', zh: '麵條', ex: 'Beef noodles are famous worldwide.' },
        { en: 'bread', kk: '[brɛd]', zh: '麵包', ex: 'He bought fresh bread for breakfast.' },
        { en: 'water', kk: '[ˈwɔtɚ]', zh: '水', ex: 'Drink plenty of water on hot days.' },
        { en: 'tea', kk: '[ti]', zh: '茶', ex: 'Taiwanese oolong tea smells wonderful.' },
        { en: 'milk', kk: '[mɪlk]', zh: '牛奶', ex: 'Milk is rich in calcium.' },
        { en: 'fruit', kk: '[frut]', zh: '水果', ex: 'Eat fresh fruit every day.' },
        { en: 'vegetable', kk: '[ˈvɛdʒtəbl]', zh: '蔬菜', ex: 'Vegetables are good for health.' },
        { en: 'delicious', kk: '[dɪˈlɪʃəs]', zh: '美味的；可口的', ex: 'This homemade lunch is delicious.' },
        { en: 'hungry', kk: '[ˈhʌŋgrɪ]', zh: '飢餓的', ex: 'After three hours of surveying, we were hungry.' },
      ]
    },
    {
      id: 3,
      name: '房屋、建築空間與設施',
      enName: 'House & Architecture Space',
      icon: '🏠',
      words: [
        { en: 'house', kk: '[haʊs]', zh: '房屋；房子', ex: 'They bought a traditional brick house.' },
        { en: 'room', kk: '[rum]', zh: '房間；空間', ex: 'The living room has good natural lighting.' },
        { en: 'door', kk: '[dɔr]', zh: '門', ex: 'Exit through the emergency door.' },
        { en: 'window', kk: '[ˈwɪndo]', zh: '窗戶', ex: 'Double-glazed windows save energy.' },
        { en: 'wall', kk: '[wɔl]', zh: '牆壁；圍牆', ex: 'The concrete wall prevents noise.' },
        { en: 'floor', kk: '[flɔr]', zh: '地板；樓層', ex: 'The studio is on the fifth floor.' },
        { en: 'roof', kk: '[ruf]', zh: '屋頂', ex: 'Solar panels were installed on the roof.' },
        { en: 'bridge', kk: '[brɪdʒ]', zh: '橋樑', ex: 'The suspension bridge spans the river.' },
        { en: 'building', kk: '[ˈbɪldɪŋ]', zh: '建築物；大樓', ex: 'Taipei 101 is an iconic building.' },
        { en: 'space', kk: '[spes]', zh: '空間；太空', ex: 'Architects optimize public space.' },
      ]
    },
    {
      id: 4,
      name: '交通、移動與方向',
      enName: 'Transportation & Directions',
      icon: '🚆',
      words: [
        { en: 'bus', kk: '[bʌs]', zh: '公車；巴士', ex: 'Take the bus to the city center.' },
        { en: 'train', kk: '[tren]', zh: '火車；列車', ex: 'The high-speed train arrives on time.' },
        { en: 'car', kk: '[kɑr]', zh: '汽車；轎車', ex: 'Electric cars produce zero emissions.' },
        { en: 'station', kk: '[ˈsteʃən]', zh: '車站；站', ex: 'Meet me at the MRT station entrance.' },
        { en: 'road', kk: '[rod]', zh: '道路；馬路', ex: 'The mountain road is being repaired.' },
        { en: 'street', kk: '[strit]', zh: '街道', ex: 'Pedestrians walk along the quiet street.' },
        { en: 'turn', kk: '[tɝn]', zh: '轉彎；轉變', ex: 'Turn right at the traffic lights.' },
        { en: 'left', kk: '[lɛft]', zh: '左邊；向左', ex: 'The site office is on your left.' },
        { en: 'right', kk: '[raɪt]', zh: '右邊；正確的', ex: 'Make a right turn at the intersection.' },
        { en: 'straight', kk: '[stret]', zh: '筆直地；直的', ex: 'Go straight for two blocks.' },
      ]
    },
    {
      id: 5,
      name: '校園、學業與測量文具',
      enName: 'School, Study & Tools',
      icon: '📐',
      words: [
        { en: 'book', kk: '[bʊk]', zh: '書本；預約', ex: 'Read the structural engineering book.' },
        { en: 'pen', kk: '[pɛn]', zh: '鋼筆；原子筆', ex: 'Use a black pen to sign the drawings.' },
        { en: 'pencil', kk: '[ˈpɛnsl]', zh: '鉛筆', ex: 'Architects sketch with a 2B pencil.' },
        { en: 'ruler', kk: '[ˈrulɚ]', zh: '尺；直尺', ex: 'Measure the line length with a scale ruler.' },
        { en: 'paper', kk: '[ˈpepɚ]', zh: '紙張；考卷', ex: 'Print the floor plan on A3 paper.' },
        { en: 'desk', kk: '[dɛsk]', zh: '書桌；製圖桌', ex: 'Organize your drafting desk.' },
        { en: 'homework', kk: '[ˈhomˌwɝk]', zh: '作業；功課', ex: 'Submit your homework before Friday.' },
        { en: 'test', kk: '[tɛst]', zh: '測驗；試驗', ex: 'Conduct a slump test on fresh concrete.' },
        { en: 'class', kk: '[klæs]', zh: '班級；課堂', ex: 'Pay full attention during class.' },
        { en: 'learn', kk: '[lɝn]', zh: '學習；得知', ex: 'We learn civil surveying step by step.' },
      ]
    },
    {
      id: 6,
      name: '數字、時間與行事曆',
      enName: 'Numbers & Time',
      icon: '📅',
      words: [
        { en: 'today', kk: '[təˈde]', zh: '今天', ex: 'We start excavation today.' },
        { en: 'tomorrow', kk: '[təˈmɔro]', zh: '明天', ex: 'The materials will arrive tomorrow.' },
        { en: 'yesterday', kk: '[ˈjɛstɚde]', zh: '昨天', ex: 'We completed the site inspection yesterday.' },
        { en: 'morning', kk: '[ˈmɔrnɪŋ]', zh: '早晨；上午', ex: 'The safety meeting begins in the morning.' },
        { en: 'night', kk: '[naɪt]', zh: '夜晚；晚上', ex: 'The bridge looks stunning at night.' },
        { en: 'week', kk: '[wik]', zh: '星期；週', ex: 'The project schedule spans fifty weeks.' },
        { en: 'month', kk: '[mʌnθ]', zh: '月份', ex: 'Concrete curing takes about one month.' },
        { en: 'year', kk: '[jɪr]', zh: '年份；年', ex: 'The landmark was built in the year 2000.' },
        { en: 'first', kk: '[fɝst]', zh: '第一；首先', ex: 'Safety comes first on the job site.' },
        { en: 'second', kk: '[ˈsɛkənd]', zh: '第二；秒鐘', ex: 'Check the rebar spacing a second time.' },
      ]
    },
    {
      id: 7,
      name: '自然、氣候與環境',
      enName: 'Nature & Environment',
      icon: '🌿',
      words: [
        { en: 'sun', kk: '[sʌn]', zh: '太陽', ex: 'Deep eaves block direct summer sun.' },
        { en: 'rain', kk: '[ren]', zh: '雨水；下雨', ex: 'Waterproof coatings prevent rain leakage.' },
        { en: 'wind', kk: '[wɪnd]', zh: '風', ex: 'Tuned mass dampers resist strong typhoon wind.' },
        { en: 'sky', kk: '[skaɪ]', zh: '天空', ex: 'The skyscraper stretches into the blue sky.' },
        { en: 'tree', kk: '[tri]', zh: '樹木', ex: 'Native trees provide pleasant shade.' },
        { en: 'earth', kk: '[ɝθ]', zh: '地球；泥土', ex: 'Geotechnical engineers test earth stability.' },
        { en: 'river', kk: '[ˈrɪvɚ]', zh: '河流', ex: 'A dike was built along the river bank.' },
        { en: 'hot', kk: '[hɑt]', zh: '炎熱的；燙的', ex: 'Avoid pouring concrete in extremely hot weather.' },
        { en: 'cold', kk: '[kold]', zh: '寒冷的；感冒', ex: 'Thermal insulation keeps rooms warm in cold winters.' },
        { en: 'weather', kk: '[ˈwɛðɚ]', zh: '天氣；氣候', ex: 'Check the weather forecast before outdoor surveys.' },
      ]
    },
    {
      id: 8,
      name: '情緒、性格與身心狀態',
      enName: 'Emotions & Feelings',
      icon: '😊',
      words: [
        { en: 'happy', kk: '[ˈhæpɪ]', zh: '快樂的；高興的', ex: 'The client was happy with our floor plan.' },
        { en: 'sad', kk: '[sæd]', zh: '難過的；悲傷的', ex: 'It is sad to see historic buildings demolished.' },
        { en: 'tired', kk: '[taɪrd]', zh: '疲勞的；累的', ex: 'Workers feel tired after lifting heavy steel.' },
        { en: 'angry', kk: '[ˈæŋgrɪ]', zh: '生氣的', ex: 'Stay calm even when an inspector is angry.' },
        { en: 'afraid', kk: '[əˈfred]', zh: '害怕的 (be afraid of)', ex: 'Do not be afraid of making mistakes while learning.' },
        { en: 'careful', kk: '[ˈkɛrfəl]', zh: '細心的；小心的', ex: 'Be careful when operating heavy machinery.' },
        { en: 'busy', kk: '[ˈbɪzɪ]', zh: '忙碌的', ex: 'Civil drafters are busy before project deadlines.' },
        { en: 'safe', kk: '[sef]', zh: '安全的', ex: 'Always ensure the scaffolding is safe.' },
        { en: 'sure', kk: '[ʃʊr]', zh: '確定的；確信的', ex: 'Make sure the measurements are exact.' },
        { en: 'ready', kk: '[ˈrɛdɪ]', zh: '準備好的 (ready for)', ex: 'The concrete mix is ready for pouring.' },
      ]
    },
    {
      id: 9,
      name: '核心超高頻動詞 (必備)',
      enName: 'Essential Action Verbs',
      icon: '⚡',
      words: [
        { en: 'go', kk: '[go]', zh: '去；走 (go to)', ex: 'Engineers go to the construction site daily.' },
        { en: 'come', kk: '[kʌm]', zh: '來；抵達', ex: 'The materials will come by truck.' },
        { en: 'see', kk: '[si]', zh: '看見；了解', ex: 'I see a small structural crack on the beam.' },
        { en: 'hear', kk: '[hɪr]', zh: '聽到；聽見', ex: 'We heard the alarm bell ring.' },
        { en: 'make', kk: '[mek]', zh: '製造；使成為', ex: 'Computers make drafting much faster.' },
        { en: 'take', kk: '[tek]', zh: '拿取；花費時間', ex: 'It will take two days to finish the survey.' },
        { en: 'get', kk: '[gɛt]', zh: '獲得；變得', ex: 'You can get the construction permit next week.' },
        { en: 'give', kk: '[gɪv]', zh: '給予；提供', ex: 'Please give me the revised elevation drawing.' },
        { en: 'know', kk: '[no]', zh: '知道；認識', ex: 'Do you know how to calculate beam reactions?' },
        { en: 'think', kk: '[θɪŋk]', zh: '思考；認為', ex: 'I think steel is stronger than timber.' },
      ]
    },
    {
      id: 10,
      name: '常用修飾形容詞與副詞',
      enName: 'Core Modifiers',
      icon: '✨',
      words: [
        { en: 'big', kk: '[bɪg]', zh: '大的；巨大的', ex: 'They erected a big crane yesterday.' },
        { en: 'small', kk: '[smɔl]', zh: '小的；細微的', ex: 'Even a small defect can cause structural failure.' },
        { en: 'fast', kk: '[fæst]', zh: '快速的；迅速地', ex: 'Fast trains connect major urban centers.' },
        { en: 'slow', kk: '[slo]', zh: '緩慢的', ex: 'Soil settlement is a slow natural process.' },
        { en: 'good', kk: '[gʊd]', zh: '良好的；優秀的', ex: 'Good ventilation improves indoor air quality.' },
        { en: 'bad', kk: '[bæd]', zh: '糟糕的；有害的', ex: 'Bad weather delayed the concrete delivery.' },
        { en: 'hard', kk: '[hɑrd]', zh: '堅硬的；困難的；努力地', ex: 'Granite is a very hard stone.' },
        { en: 'easy', kk: '[ˈizɪ]', zh: '容易的；簡單的', ex: 'Learning 1200 words is easy with audio flashcards.' },
        { en: 'new', kk: '[nju]', zh: '新的；嶄新的', ex: 'The government funded a new library project.' },
        { en: 'old', kk: '[old]', zh: '古老的；老舊的', ex: 'Preserve the old historic arch bridge.' },
      ]
    },
    {
      id: 11,
      name: '高頻功能詞與代名詞',
      enName: 'Pronouns & Function Words',
      icon: '🧩',
      words: [
        { en: 'this', kk: '[ðɪs]', zh: '這個 (近指單數)', ex: 'This blueprint shows the foundation layout.' },
        { en: 'that', kk: '[ðæt]', zh: '那個 (遠指單數)', ex: 'That column supports the roof load.' },
        { en: 'these', kk: '[ðiz]', zh: '這些 (近指複數)', ex: 'These steel rebars are for the shear wall.' },
        { en: 'those', kk: '[ðoz]', zh: '那些 (遠指複數)', ex: 'Those workers completed safety training.' },
        { en: 'some', kk: '[sʌm]', zh: '一些；某些', ex: 'Some materials need special storage.' },
        { en: 'many', kk: '[ˈmɛnɪ]', zh: '許多的 (可數名詞)', ex: 'Many students pass the surveying certification.' },
        { en: 'much', kk: '[mʌtʃ]', zh: '許多的 (不可數名詞)', ex: 'Too much water weakens concrete strength.' },
        { en: 'all', kk: '[ɔl]', zh: '全部的；所有的', ex: 'All inspectors wear protective glasses.' },
        { en: 'every', kk: '[ˈɛvrɪ]', zh: '每一個 (接單數名詞)', ex: 'Every dimension must be checked twice.' },
        { en: 'both', kk: '[boθ]', zh: '兩者都', ex: 'Both architects approved the sustainable design.' },
      ]
    },
  ];

  // Quick 6-Question Interactive Quiz
  const quizList = [
    {
      q: '英文單字 "bridge" 的中文意思是？',
      options: ['屋頂', '橋樑', '道路', '隧道'],
      ans: '橋樑',
      hint: 'The suspension bridge connects two cities across the river.',
      word: 'bridge'
    },
    {
      q: '安全規範中常說 "Workers must ____ safety helmets." 空格應填？',
      options: ['cook', 'wash', 'wear', 'wake'],
      ans: 'wear',
      hint: 'wear 代表穿戴（衣物、安全帽、護具）。',
      word: 'wear'
    },
    {
      q: '"The drafting ____ is on the fifth floor." 指建築空間樓層的字是？',
      options: ['sun', 'floor', 'rain', 'tree'],
      ans: 'floor',
      hint: 'floor 同時代表地板與樓層（如 fifth floor = 五樓）。',
      word: 'floor'
    },
    {
      q: '走在路上問路時，直走的英文是 "Go ____"？',
      options: ['straight', 'left', 'hungry', 'tired'],
      ans: 'straight',
      hint: 'Go straight for two blocks. 直走兩個街區。',
      word: 'straight'
    },
    {
      q: '"Concrete curing takes about one ____." 表示月份的單字是？',
      options: ['week', 'month', 'year', 'today'],
      ans: 'month',
      hint: 'month 代表月份，一年有 12 個 months。',
      word: 'month'
    },
    {
      q: '"Granite is a very ____ stone." 形容花崗岩質地「堅硬」的形容詞是？',
      options: ['soft', 'easy', 'hard', 'slow'],
      ans: 'hard',
      hint: 'hard 可表示「堅硬的」或「困難的、努力地」。',
      word: 'hard'
    },
  ];

  const handleSelectOption = (opt: string) => {
    setSelectedOption(opt);
  };

  const handleNextQuiz = () => {
    if (selectedOption === quizList[quizIndex].ans) {
      setQuizScore((prev) => prev + 1);
    }
    setSelectedOption(null);
    if (quizIndex < quizList.length - 1) {
      setQuizIndex((prev) => prev + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setQuizIndex(0);
    setSelectedOption(null);
    setQuizScore(0);
    setQuizFinished(false);
  };

  // Filter words by search
  const currentCategory = categories[selectedCategory];
  const displayedWords = currentCategory.words.filter(
    (w) => w.en.toLowerCase().includes(searchQuery.toLowerCase()) || w.zh.includes(searchQuery)
  );

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <Link
            href="/subjects/english/vocabulary-phrases"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-blue-600 dark:text-blue-400 hover:underline"
          >
            <ArrowLeft className="size-4" />
            <span>返回 1. 基礎字彙與片語單元</span>
          </Link>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="print:hidden rounded-full bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 px-3 py-1 text-xs font-mono font-bold text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
              title="以 A4 紙本格式列印或另存為 PDF"
            >
              <Printer className="size-3.5 text-slate-600 dark:text-slate-300" />
              <span>列印複習單 (A4)</span>
            </button>
            <Link
              href="/prerequisites"
              className="text-xs font-mono text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 underline"
            >
              先備跳板總覽 →
            </Link>
          </div>
        </div>

        {/* Hero Header */}
        <div className="rounded-3xl border border-blue-200 dark:border-blue-900/60 bg-linear-to-br from-blue-50 via-white to-indigo-50/50 dark:from-slate-900 dark:via-blue-950/20 dark:to-slate-900 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-blue-600 text-white px-3 py-1 text-xs font-bold font-mono shadow-xs">
              Step-0 先備跳板 ①
            </span>
            <span className="rounded-full bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-200 px-3 py-1 text-xs font-bold border border-blue-200 dark:border-blue-800">
              國教署 1200 核心基底
            </span>
            <span className="rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200 px-3 py-1 text-xs font-bold border border-emerald-200 dark:border-emerald-800 font-mono">
              100% 點擊發音 🔊
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 dark:text-white leading-tight">
            國中基礎 1200 單字 · 零痛通關寶典
          </h1>

          <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
            「很多同學害怕統測英文，不是因為高職英文太難，而是國中基礎的 1200 單字反射不夠快！」
            統測考題（對話、克漏字與閱讀測驗）70% 以上的句子骨架與功能詞均源自國中 1200 字。只要搞定這份情境分類字庫，就能看懂 7 成考題，無痛跨越門檻！
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-mono text-slate-500 dark:text-slate-400 border-t border-blue-100 dark:border-blue-900/40">
            <span className="flex items-center gap-1">
              <Sparkles className="size-4 text-amber-500" /> 12 大生活情境分類
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="size-4 text-emerald-500" /> 自然發音拆音節速記
            </span>
            <span className="flex items-center gap-1">
              <Award className="size-4 text-indigo-500" /> 內建隨堂即時自測機
            </span>
          </div>
        </div>

        {/* Cognitive Method: Syllable Chunking Rule */}
        <div className="rounded-2xl border border-amber-200 dark:border-amber-900/60 bg-amber-50/40 dark:bg-amber-950/20 p-5 space-y-3">
          <div className="flex items-center gap-2 text-amber-900 dark:text-amber-200 font-bold">
            <Lightbulb className="size-5 text-amber-600" />
            <h3 className="font-serif text-base">專家記憶心法：自然發音拆音節法 (Syllable Chunking)</h3>
          </div>
          <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
            死記硬背字母（如 d-e-l-i-c-i-o-u-s 十個字母）很容易忘記！請用「母音切刀」將單字切成發音小積木：
          </p>
          <div className="grid sm:grid-cols-3 gap-2.5 font-mono text-xs">
            <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-amber-200 dark:border-amber-800 space-y-1">
              <span className="font-bold text-amber-700 dark:text-amber-300">單音節 (一拍完成)</span>
              <div>bridge [brɪdʒ] 橋樑</div>
              <div>wall [wɔl] 牆壁</div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-amber-200 dark:border-amber-800 space-y-1">
              <span className="font-bold text-blue-700 dark:text-blue-300">雙音節 (前強後弱 / 兩拍)</span>
              <div>win-dow [ˈwɪn-do] 窗戶</div>
              <div>sta-tion [ˈste-ʃən] 車站</div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-amber-200 dark:border-amber-800 space-y-1">
              <span className="font-bold text-purple-700 dark:text-purple-300">多音節 (節奏拆解)</span>
              <div>de-li-cious [dɪ-ˈlɪ-ʃəs] 美味的</div>
              <div>en-gi-neer [ˌɛn-dʒə-ˈnɪr] 工程師</div>
            </div>
          </div>
        </div>

        {/* Interactive Category Selector & Search */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h2 className="font-serif text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <BookOpen className="size-5 text-blue-600" />
              <span>12 大高頻生活情境單字庫</span>
            </h2>

            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-2.5 size-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="搜尋中英文單字..."
                className="pl-9 pr-3 py-1.5 text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-500 w-full sm:w-56"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2 text-xs font-mono">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setSearchQuery('');
                }}
                className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white border-blue-700 shadow-sm ring-2 ring-blue-300 dark:ring-blue-800'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <div className="text-base mb-0.5">{cat.icon}</div>
                <div className="font-bold truncate">{cat.name}</div>
                <div className="text-[10px] opacity-75 truncate">{cat.enName}</div>
              </button>
            ))}
          </div>

          {/* Word Flashcards Grid */}
          <div className="grid sm:grid-cols-2 gap-3">
            {displayedWords.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-2xs hover:border-blue-300 dark:hover:border-blue-700 transition-all space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-bold font-mono text-blue-700 dark:text-blue-400">
                      {item.en}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {item.kk}
                    </span>
                  </div>

                  <button
                    onClick={() => playTTS(item.en)}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 hover:bg-blue-100 border border-blue-200 dark:border-blue-800 text-xs font-bold transition-all cursor-pointer active:scale-95 shadow-2xs"
                    title="播放單字發音"
                  >
                    <Volume2 className="size-3.5" />
                    <span>發音</span>
                  </button>
                </div>

                <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                  {item.zh}
                </div>

                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-start justify-between gap-2 text-xs">
                  <p className="font-serif italic text-slate-600 dark:text-slate-400 leading-relaxed">
                    &ldquo;{item.ex}&rdquo;
                  </p>
                  <button
                    onClick={() => playTTS(item.ex)}
                    className="shrink-0 text-slate-400 hover:text-blue-600 transition-colors p-1"
                    title="朗讀例句"
                  >
                    <Volume2 className="size-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {displayedWords.length === 0 && (
            <div className="text-center py-8 text-xs text-slate-400 font-mono">
              沒有找到符合 &ldquo;{searchQuery}&rdquo; 的單字，請嘗試其他關鍵字。
            </div>
          )}
        </div>

        {/* Interactive Self-Assessment Quiz */}
        <div className="rounded-3xl border border-indigo-200 dark:border-indigo-900 bg-linear-to-br from-indigo-50/50 to-purple-50/30 dark:from-slate-900 dark:to-indigo-950/20 p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-indigo-100 dark:border-indigo-900/60 pb-3">
            <div className="flex items-center gap-2">
              <Award className="size-6 text-indigo-600" />
              <div>
                <h3 className="font-serif text-lg font-bold text-slate-900 dark:text-white">
                  1200 單字通關挑戰小測驗
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  花 1 分鐘快速自我檢測，驗收國中先備單字掌握度
                </p>
              </div>
            </div>

            <span className="font-mono text-xs font-bold text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950">
              第 {quizIndex + 1} / {quizList.length} 題
            </span>
          </div>

          {!quizFinished ? (
            <div className="space-y-4">
              <div className="text-base font-serif font-bold text-slate-900 dark:text-white">
                {quizList[quizIndex].q}
              </div>

              <div className="grid sm:grid-cols-2 gap-2 text-xs font-mono">
                {quizList[quizIndex].options.map((opt) => {
                  const isSelected = selectedOption === opt;
                  return (
                    <button
                      key={opt}
                      onClick={() => handleSelectOption(opt)}
                      className={`p-3 rounded-xl border text-left font-bold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-indigo-600 text-white border-indigo-700 shadow-sm'
                          : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => playTTS(quizList[quizIndex].word)}
                  className="text-xs text-indigo-600 dark:text-indigo-400 font-bold flex items-center gap-1 hover:underline cursor-pointer"
                >
                  <Volume2 className="size-3.5" /> 聆聽題目關鍵字發音
                </button>

                <button
                  disabled={!selectedOption}
                  onClick={handleNextQuiz}
                  className="px-5 py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-xs cursor-pointer"
                >
                  {quizIndex < quizList.length - 1 ? '下一題 →' : '查看成績 🎯'}
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="inline-flex size-16 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-600 text-2xl font-bold">
                {quizScore >= 4 ? '🎉' : '💪'}
              </div>
              <div>
                <h4 className="text-xl font-bold font-serif text-slate-900 dark:text-white">
                  測驗結束！你的得分：{quizScore} / {quizList.length}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  {quizScore === 6
                    ? '太棒了！你的國中 1200 先備單字基礎非常扎實，可以直接攻略統測核心單字！'
                    : '很不錯的嘗試！建議再回顧上方 12 大情境分類字卡，熟悉例句後即可無痛升級！'}
                </p>
              </div>

              <button
                onClick={restartQuiz}
                className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition-all cursor-pointer shadow-xs"
              >
                再測驗一次 🔄
              </button>
            </div>
          )}
        </div>

        {/* Bottom Jump Links */}
        <div className="grid sm:grid-cols-2 gap-4 pt-4">
          <Link
            href="/prerequisites/english/parts-of-speech"
            className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-400 transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-[10px] font-mono font-bold text-blue-600 uppercase">Step-0 先備跳板 ②</span>
              <h4 className="text-base font-bold font-serif text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                基本八大詞性全圖解指南 →
              </h4>
              <p className="text-xs text-slate-500">掌握名詞、動詞、形容詞在句子積木中的黃金位置</p>
            </div>
          </Link>

          <Link
            href="/prerequisites/english/phonetics-dictionary"
            className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-blue-400 transition-all flex items-center justify-between group"
          >
            <div>
              <span className="text-[10px] font-mono font-bold text-purple-600 uppercase">Step-0 先備跳板 ③</span>
              <h4 className="text-base font-bold font-serif text-slate-900 dark:text-white group-hover:text-purple-600 transition-colors">
                英文字典音標與詞條查閱能力完全手冊 →
              </h4>
              <p className="text-xs text-slate-500">KK 音標母音子音互動發音、重音與字典查閱 4 步 SOP</p>
            </div>
          </Link>
        </div>

      </div>
    </main>
  );
}
