import { SubjectData } from '../types';

export const englishData: SubjectData = {
  slug: 'english',
  title: '英語文',
  category: '共同科目',
  color: 'blue-600',
  topics: [
    {
      slug: 'vocabulary-phrases',
      title: '1. 字彙與片語',
      desc: '字首字根記憶法、常考動詞片語與慣用語。',
      status: 'done',
      concepts: [
        {
          heading: '字首、字根、字尾 (Prefixes, Roots, Suffixes)',
          body: '掌握字首、字根與字尾能大幅提升單字記憶效率，並能在考試中推測生字的意義。',
          table: {
            headers: ['類型', '字首/字尾', '意義', '範例'],
            rows: [
              ['字首', 're-', '再一次', 'rewrite (重寫)'],
              ['字尾', '-less', '沒有...', 'homeless (無家可歸的)']
            ]
          }
        },
        {
          heading: '常考動詞片語 (Phrasal Verbs)',
          body: '動詞加上介系詞或副詞會形成不同語意的片語，為考試必考重點。',
          steps: [
            '分辨及物與不及物片語動詞。',
            '注意代名詞受詞必須放在中間，如 "turn it on" 而非 "turn on it"。'
          ]
        }
      ],
      practice: {
        difficulty: '基礎',
        question: 'It is raining heavily outside. You should _______ your raincoat before you go out.\n(A) take off (B) put on (C) look for (D) turn off',
        steps: [
          '分析句子語意：外面雨下很大，出門前應該「穿上」雨衣。',
          '比較選項意義：(A) take off (脫下) (B) put on (穿上) (C) look for (尋找) (D) turn off (關掉)。'
        ],
        answer: '(B) put on'
      }
    },
    {
      slug: 'grammar-patterns',
      title: '2. 文法句型',
      desc: '五大基本句型、時態、關係子句與分詞構句。',
      status: 'done',
      concepts: [
        {
          heading: '英文五大句型',
          body: '英文句子由五種基本句型構成，掌握句型有助於理解長句與寫作。',
          table: {
            headers: ['句型', '結構', '範例'],
            rows: [
              ['S+V', '主詞 + 不及物動詞', 'Birds fly.'],
              ['S+V+O', '主詞 + 及物動詞 + 受詞', 'I love apples.']
            ]
          }
        },
        {
          heading: '關係代名詞與關係子句',
          body: '用來修飾前面的名詞（先行詞），引導出一個形容詞子句。',
          steps: [
            '確認先行詞是人還是物。',
            '確認關係代名詞在子句中扮演主詞、受詞或所有格，選擇對應的 who, which, that, whose。'
          ]
        }
      ],
      practice: {
        difficulty: '進階',
        question: 'The book _______ I bought yesterday is very interesting.\n(A) who (B) where (C) which (D) what',
        steps: [
          '先行詞為 The book (事物)。',
          '關係代名詞在子句中作 bought 的受詞，可使用 which 或 that，甚至可以省略。'
        ],
        answer: '(C) which'
      }
    },
    {
      slug: 'reading-comprehension',
      title: '3. 閱讀測驗',
      desc: '略讀與掃讀技巧、主旨判斷與上下文推論。',
      status: 'done',
      concepts: [
        {
          heading: '略讀 (Skimming) 與掃讀 (Scanning)',
          body: '兩種快速獲取文章資訊的閱讀策略，能大幅節省答題時間。',
          steps: [
            '略讀：快速閱讀文章的標題、首段、每段首句與結論，掌握文章主旨大意。',
            '掃讀：根據題目關鍵字，快速在文章中尋找特定資訊（如人名、年代、數據）。'
          ]
        },
        {
          heading: '猜測字義與上下文推論',
          body: '遇到不懂的生字時不須驚慌，可從前後文的線索推測其涵義。',
          steps: [
            '尋找轉折詞 (如 however, but) 判斷語氣變化。',
            '尋找同義字、反義字或解釋性的標點符號 (如冒號、破折號)。'
          ]
        }
      ],
      practice: {
        difficulty: '中等',
        question: 'When asked about the main idea of a passage, what should you primarily look for?',
        steps: [
          '閱讀第一段的引言與最後一段的結論句。',
          '觀察各段落的主題句 (Topic sentence)，歸納文章核心主旨。'
        ],
        answer: 'The topic sentences and the concluding paragraph.'
      }
    },
    {
      slug: 'conversation-daily-use',
      title: '4. 對話與日常應用',
      desc: '社交情境用語、實用會話與生活英語。',
      status: 'done',
      concepts: [
        {
          heading: '實用社交情境用語',
          body: '測驗對話情境中適當的應答，包含問候、邀請、拒絕、道歉等。',
          table: {
            headers: ['情境', '常用句型', '適當回應'],
            rows: [
              ['邀請', 'Would you like to join us?', 'I\'d love to, but I have plans.'],
              ['道歉', 'I am so sorry for being late.', 'That\'s alright. / No worries.']
            ]
          }
        },
        {
          heading: '聽力與口語中的連音與削弱音',
          body: '在真實對話中，母語人士常會將單字連讀或弱化發音，影響聽力理解。',
          formula: '子音結尾 + 母音開頭 => 連音 (如: check it out -> /tʃɛ kɪ daʊt/)'
        }
      ],
      practice: {
        difficulty: '基礎',
        question: 'A: Could you give me a hand with this heavy box?\nB: _________',
        steps: [
          '分析 A 的語意：請求幫忙搬重箱子 (Could you give me a hand?)。',
          '尋找同意幫忙或委婉拒絕的適切回應。'
        ],
        answer: 'Sure, no problem. / I\'d be glad to help.'
      }
    },
    {
      slug: 'cloze-passage-structure',
      title: '5. 克漏字與篇章結構',
      desc: '轉折語的應用、段落連貫性與邏輯填空。',
      status: 'done',
      concepts: [
        {
          heading: '克漏字解題技巧：文法與語意並重',
          body: '克漏字不僅考單字，更考驗上下文邏輯與文法結構的掌握。',
          steps: [
            '先通讀全文，掌握文章時態與主旨。',
            '分析空格前後的詞性與文法結構，刪去不合語法的選項。',
            '依據上下文邏輯 (如因果、對比) 選擇語意最通順的答案。'
          ]
        },
        {
          heading: '轉折語 (Transitions) 的應用',
          body: '轉折語是連接句子與段落的橋樑，是克漏字必考重點。',
          table: {
            headers: ['邏輯關係', '常見轉折語'],
            rows: [
              ['因果', 'therefore, as a result, consequently'],
              ['對比/讓步', 'however, nevertheless, on the other hand']
            ]
          }
        }
      ],
      practice: {
        difficulty: '中等',
        question: 'It was raining heavily; ________, we decided to cancel the picnic.\n(A) however (B) therefore (C) otherwise (D) moreover',
        steps: [
          '前半句：雨下很大。後半句：我們決定取消野餐。',
          '兩句為因果關係 (因為雨大，所以取消)，應填入表示「因此/所以」的轉折語。'
        ],
        answer: '(B) therefore'
      }
    },
    {
      slug: 'translation-writing',
      title: '6. 翻譯與寫作基礎',
      desc: '中譯英技巧、段落寫作結構與常用句型。',
      status: 'done',
      concepts: [
        {
          heading: '中譯英基本原則',
          body: '避免中式英文 (Chinglish)，必須符合英文的語法習慣，注意主詞與動詞的一致性。',
          steps: [
            '找出中文句子的真正主詞與動詞。',
            '確認時態 (過去、現在、未來) 與語態 (主動、被動)。',
            '加入修飾語 (形容詞、副詞) 並調整語序 (如地方與時間副詞通常放句尾)。'
          ]
        },
        {
          heading: '段落寫作的三要素',
          body: '一個結構完整的英文段落必須具備三個主要部分。',
          table: {
            headers: ['部分', '說明'],
            rows: [
              ['主題句 (Topic Sentence)', '點出該段落的核心主旨。'],
              ['支持句 (Supporting Sentences)', '提供細節、例子或理由來支持主題句。'],
              ['結論句 (Concluding Sentence)', '總結段落重點或重申主題。']
            ]
          }
        }
      ],
      practice: {
        difficulty: '進階',
        question: '請將以下句子翻譯成英文：學習外語對我們的未來很重要。',
        steps: [
          '主詞：「學習外語」(動名詞片語 Learning a foreign language)。',
          '動詞：「是」(is)。',
          '主詞補語：「對我們的未來很重要」(important for our future)。'
        ],
        answer: 'Learning a foreign language is important for our future.'
      }
    }
  ]
};
