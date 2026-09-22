import { SubjectData } from '../types';

export const englishData: SubjectData = {
  "slug": "english",
  "title": "英語文",
  "category": "共同科目",
  "color": "blue-600",
  "topics": [
    {
      "slug": "vocabulary-phrases",
      "title": "1. 基礎字彙與片語",
      "desc": "掌握統測核心2000字，包含字首字根字尾分析、日常實用片語、情緒字彙與生活常見單字，為英文打下堅實基礎。",
      "status": "done",
      "gradeLevel": 10,
      "examHitRate": 5,
      "covered_question_ids": [
        "111-english-1",
        "111-english-2",
        "111-english-3",
        "111-english-4",
        "111-english-5",
        "111-english-6",
        "111-english-7",
        "111-english-8",
        "112-english-1",
        "112-english-2",
        "112-english-3",
        "112-english-4",
        "112-english-5",
        "112-english-6",
        "112-english-7",
        "112-english-8",
        "113-english-1",
        "113-english-2",
        "113-english-3",
        "113-english-4",
        "113-english-5",
        "113-english-6",
        "113-english-7",
        "113-english-8",
        "114-english-1",
        "114-english-2",
        "114-english-3",
        "114-english-4",
        "114-english-5",
        "114-english-6",
        "114-english-7",
        "114-english-8",
        "115-english-1",
        "115-english-2",
        "115-english-3",
        "115-english-4",
        "115-english-5",
        "115-english-6",
        "115-english-7",
        "115-english-8",
        "110-english-1",
        "110-english-2",
        "110-english-3",
        "110-english-4",
        "110-english-5",
        "110-english-6",
        "110-english-7",
        "110-english-8"
      ],
      "fatalTraps": [
        {
          "wrongThinking": "死背單字的所有中文字義，忽略詞性與使用情境。",
          "correctThinking": "透過上下文語境以及字首字根來理解，並搭配例句與詞性一起記憶。",
          "trapDescription": "統測英文常考一字多義，若只背最常見的中文意思，遇到不同情境或詞性轉換時容易選錯。土木領域常見名詞如 column (圓柱/專欄) 需視情境判斷。"
        },
        {
          "wrongThinking": "片語介系詞硬套中文邏輯直接直譯。",
          "correctThinking": "英文動詞片語的介系詞搭配具有固定語法習慣，如 depend on (依賴), look forward to (期待), participate in (參加)。",
          "trapDescription": "統測常考動詞與介系詞的固定搭配，直譯中文常選錯介系詞（如誤選 depend with 或 look forward for）。"
        }
      ],
      "eliteMentalModels": [
        {
          "technique": "構詞拆解法 (Prefix + Root + Suffix)",
          "explanation": "遇到長單字時，先找字首(影響方向/否定)、字根(核心意義)、字尾(決定詞性)，例如 con- (共同) + struct (建立) = construct (建築)。"
        },
        {
          "technique": "語境搭配詞網絡 (Collocation Web)",
          "explanation": "背單字時連同相鄰動詞與介系詞一起成串記憶，形成語塊 (Chunks)，大幅提昇答題速度與語感直覺。"
        }
      ],
      "worked_examples": [
        {
          "question": "The structural engineer must carefully _______ the load-bearing capacity of the new material before using it in the skyscraper. [TTS:The structural engineer must carefully _______ the load-bearing capacity of the new material before using it in the skyscraper.]\n(A) calculate [TTS:calculate] (B) confuse [TTS:confuse] (C) decorate [TTS:decorate] (D) destroy [TTS:destroy]",
          "difficulty": "3",
          "steps": [
            "分析句子語法架構：主詞為「The structural engineer」(結構工程師)，助動詞 must 與副詞 carefully 後接原形動詞，受詞為「the load-bearing capacity」(載重承載力)。",
            "掌握核心工程語境：在將新型建材應用於超高層建築 (skyscraper) 之前，工程師的首要職責是以力學理論嚴格「計算」與核定其極限承載力。",
            "選項語義逐項排除：(A) calculate (計算) 完全契合結構力學分析工作；(B) confuse (使困惑)、(C) decorate (裝飾)、(D) destroy (破壞) 皆與工程專業安全核算語意不合，故選 (A)。"
          ],
          "answer": "(A) calculate [TTS:calculate] — 計算並校核結構承載力",
          "hints": [
            "留意主詞為結構工程師 (structural engineer)，思考其核心專業動作",
            "受詞是 load-bearing capacity（承載力），唯有計算 (calculate) 能與其搭配"
          ],
          "commonMistake": "容易受字面中文干擾或誤選無關字彙，未緊扣結構工程安全核算的專業邏輯。",
          "eliteShortcut": "結構工程必備搭配：engineer + load-bearing capacity ⇒ 唯一合邏輯動作為 calculate！"
        }
      ],
      "illustrations": [
        "context.webp",
        "mechanism.webp",
        "comparison.webp"
      ],
      "concepts": [
        {
          "heading": "1. 構詞法（字首字根字尾）",
          "body": "<p>英文單字大多可由<span className=\"text-rose-600 font-bold\">字首 (prefix [TTS:prefix])</span>、<span className=\"text-blue-600 font-bold\">字根 (root [TTS:root])</span>及<span className=\"text-green-600 font-bold\">字尾 (suffix [TTS:suffix])</span>組成。掌握構詞法則能讓單字記憶事半功倍，並能推測未知單字的意思。</p>\n\n[DIALOGUE_START:構詞法實戰會話：拆解建築單字]\nTeacher: Look at the word \"reconstruct\". What does the prefix \"re-\" mean? | 看一下 reconstruct 這個單字。字首 re- 是什麼意思呢？\nStudent: It means \"again\", so \"reconstruct\" means to build something again! | 它的意思是「再次」，所以 reconstruct 就是「重建」的意思！\nTeacher: Exactly! And what about \"construction\"? The suffix \"-tion\" makes it a noun. | 完全正確！那 construction 呢？字尾 -tion 把它變成了名詞。\nStudent: I see! Understanding roots and prefixes helps me memorize technical terms faster. | 我懂了！掌握字根與字首能幫我更快記住專業術語。\n[DIALOGUE_END]",
          "table": {
            "headers": [
              "部位",
              "功能",
              "常見例子 (土木建築相關)"
            ],
            "rows": [
              [
                "字首",
                "改變方向或增添意義，如否定、前/後",
                "re- [TTS:re-] (再次): reconstruct [TTS:reconstruct] (重建)"
              ],
              [
                "字根",
                "單字的核心意義",
                "struct [TTS:struct] (建立): structure [TTS:structure] (結構)"
              ],
              [
                "字尾",
                "決定單字的詞性",
                "-tion [TTS:-tion] (名詞字尾): construction [TTS:construction] (建設)"
              ]
            ]
          }
        },
        {
          "heading": "2. 生活與校園核心字彙 Level 1-2",
          "body": "<p>統測英文的基礎在於國中及高中前兩年的核心字彙(約2000字)，這些字彙常出現在第一部分的字彙題與克漏字中。熟悉生活周遭的常見物品與動作描述是拿分關鍵。</p>\n\n[DIALOGUE_START:校園與工場生活會話：借用工具]\nKevin: Excuse me, do you have a spare measuring tape in your toolbox? | 不好意思，你的工具箱裡有多餘的捲尺可以借我嗎？\nAmy: Yes, here it is. Be sure to return it before the drafting class ends. | 有的，給你。記得在製圖課結束前還我喔。\nKevin: No problem. Thanks a lot for your help! | 沒問題。非常謝謝你的幫忙！\nAmy: You are welcome. Let us finish our floor plan assignment together. | 不客氣。我們一起把平面圖作業完成吧。\n[DIALOGUE_END]",
          "steps": [
            "每天定期複習基礎2000字。",
            "將字彙分類記憶，例如：校園設施、交通工具、建築元素 (door [TTS:door], window [TTS:window], roof [TTS:roof], bridge [TTS:bridge]) 等。",
            "大聲朗讀例句，幫助大腦建立語感。"
          ]
        },
        {
          "heading": "3. 基礎動詞片語與介系詞搭配",
          "body": "<p>英文中，同一個動詞加上不同的<span className=\"text-blue-600 font-bold\">介系詞</span>會產生完全不同的意義。這是統測必考題型，必須熟記常見動詞 (如 look [TTS:look], take [TTS:take], put [TTS:put], get [TTS:get]) 的片語搭配。</p>\n\n<div className=\"p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-xs font-mono space-y-1 my-3\">\n  <div className=\"font-bold text-blue-800 dark:text-blue-300\">🧭 核心介系詞空間方位圖解：</div>\n  <div>• [ON] 表面接觸 ──► on the floor / on the roof</div>\n  <div>• [IN] 空間內部 ──► in the building / in the room</div>\n  <div>• [AT] 特定點狀 ──► at the corner / at the station</div>\n  <div>• [THROUGH] 穿越立體 ──► through the tunnel / through the pipeline</div>\n  <div>• [UNDER] 垂直正下方 ──► under construction / under the bridge</div>\n</div>\n\n[DIALOGUE_START:動詞片語會話：工地任務執行]\nForeman: We need to carry out the safety inspection before pouring concrete. | 我們在澆置混凝土之前，必須先執行安全檢查。\nWorker: Understood. I will look into the rebar spacing right away. | 收到。我會立刻仔細檢查鋼筋的間距。\nForeman: Great. Make sure everyone puts on their safety gear. | 很好。請確保每個人都穿戴好安全裝備。\nWorker: All workers have already put on their helmets and boots. | 所有工人都已經戴好安全帽並穿上安全鞋了。\n[DIALOGUE_END]",
          "table": {
            "headers": [
              "動詞片語",
              "中文意義",
              "例句"
            ],
            "rows": [
              [
                "set up [TTS:set up]",
                "建立、設置",
                "They set up a new scaffolding today. [TTS:They set up a new scaffolding today.] (他們今天架設了新的鷹架。)"
              ],
              [
                "carry out [TTS:carry out]",
                "執行",
                "The team will carry out the site survey. [TTS:The team will carry out the site survey.] (團隊將執行現場調查。)"
              ],
              [
                "break down [TTS:break down]",
                "故障",
                "The excavator broke down yesterday. [TTS:The excavator broke down yesterday.] (挖土機昨天故障了。)"
              ]
            ]
          }
        },
        {
          "heading": "4. 構詞分析法推測生字",
          "body": "<p>在閱讀測驗中遇到完全沒看過的單字時，不要慌張。可以利用<span className=\"text-amber-600 font-bold\">上下文暗示</span>與<span className=\"text-amber-600 font-bold\">構詞法</span>來進行邏輯推測。</p>\n\n[DIALOGUE_START:生字推測會話：解讀新材料說明]\nAlex: This technical sheet says the panel is \"waterproof\" and \"fire-resistant\". | 這份技術規格書說這塊板材是 waterproof 而且 fire-resistant。\nBrian: Even if you have not seen the word, \"-proof\" means resistant to water! | 就算你沒看過這個字，-proof 就是指具備防水能力！\nAlex: So \"fire-resistant\" means it can withstand high temperatures without catching fire. | 所以 fire-resistant 就是指它能承受高溫且不易著火。\nBrian: Right! Context clues and word parts always give away the meaning. | 沒錯！上下文線索與單字部位總能透露出字義。\n[DIALOGUE_END]",
          "steps": [
            "步驟一：觀察該字是否有明顯的字首(如 un- [TTS:un-], in- [TTS:in-] 表示否定)。",
            "步驟二：觀察字尾判斷詞性(如 -able [TTS:-able] 為形容詞，-ly [TTS:-ly] 為副詞)。",
            "步驟三：將推測的意思代入句子，檢查語意是否通順。"
          ]
        },
        {
          "heading": "5. 數字/日期/金額英文表達",
          "body": "<p>在工程與生活應用中，數字、日期、長度、重量與金額的英文表達非常重要。統測常在對話或閱讀中考驗同學對這類資訊的捕捉能力。</p>\n\n[DIALOGUE_START:數字與金額會話：材料採購詢價]\nBuyer: How much does it cost for fifteen hundred bags of Portland cement? | 採購一千五百包波特蘭水泥要多少費用？\nSupplier: The total comes to twelve thousand and five hundred dollars, including delivery. | 總共是一萬兩千五百美元，包含運送費用。\nBuyer: Can you deliver the order to our construction site by October 15th? | 你們可以在十月十五日之前把貨送到我們的工地嗎？\nSupplier: Certainly. We will send the shipment on October 12th. | 當然可以。我們會在十月十二日出貨。\n[DIALOGUE_END]",
          "table": {
            "headers": [
              "類別",
              "英文表達範例",
              "說明"
            ],
            "rows": [
              [
                "分數",
                "one-third [TTS:one-third] (三分之一)",
                "分子用基數，分母用序數"
              ],
              [
                "尺寸",
                "ten meters long [TTS:ten meters long] (10公尺長)",
                "數字 + 單位 + 形容詞"
              ],
              [
                "金額",
                "two million dollars [TTS:two million dollars] (兩百萬元)",
                "million [TTS:million] 後面不加s"
              ]
            ]
          }
        },
        {
          "heading": "6. 情緒與性格描述字彙",
          "body": "<p>描述人物的情緒(emotions [TTS:emotions])與性格(personality [TTS:personality])的單字經常出現在對話測驗與閱讀測驗的人物分析中。需注意<span className=\"text-rose-600 font-bold\">-ed [TTS:-ed] (感到...的)</span>與<span className=\"text-blue-600 font-bold\">-ing [TTS:-ing] (令人...的)</span>的差別。</p>\n\n[DIALOGUE_START:情緒與性格會話：團隊合作評價]\nManager: How is the new structural intern performing on the project? | 新來的結構實習生在專案上的表現如何？\nArchitect: She is extremely hardworking and patient when checking blueprint details. | 她非常認真勤奮，在校對藍圖細節時也非常有耐心。\nManager: That is wonderful to hear. A reliable engineer is essential for safety. | 太高興聽到這點了。一位可靠的工程師對安全至關重要。\nArchitect: We are very confident in her calculations for the foundation. | 我們對她做的基礎計算非常有信心。\n[DIALOGUE_END]",
          "table": {
            "headers": [
              "-ed結尾 (修飾人)",
              "-ing結尾 (修飾事物)",
              "中文意義"
            ],
            "rows": [
              [
                "bored [TTS:bored]",
                "boring [TTS:boring]",
                "無聊的"
              ],
              [
                "interested [TTS:interested]",
                "interesting [TTS:interesting]",
                "有趣的"
              ],
              [
                "surprised [TTS:surprised]",
                "surprising [TTS:surprising]",
                "驚訝的"
              ]
            ]
          }
        },
        {
          "heading": "7. 統測高頻必考 2000 字速記",
          "body": "<p>教育部頒布的基礎2000字是統測英文的命題基石。針對土木與建築群，特別需要留意跨領域共用的核心字彙，如 design [TTS:design], plan [TTS:plan], measure [TTS:measure], material [TTS:material] 等。</p>\n\n[DIALOGUE_START:統測高頻單字會話：考前衝刺複習]\nDavid: Have you memorized the top 2000 vocabulary words for the exam? | 你把統測必考的前兩千個核心單字背熟了嗎？\nGrace: Yes, I review fifty words every morning using flashcards. | 背熟了，我每天早上都用單字卡複習五十個單字。\nDavid: Words like \"structure\", \"measure\", and \"estimate\" appear almost every year. | 像 structure、measure 和 estimate 這些單字幾乎每年都會出現。\nGrace: Let us quiz each other to make sure we master all their usages. | 我們來互相測驗，確保完全掌握它們的用法吧。\n[DIALOGUE_END]",
          "steps": [
            "每週進行至少一次的單字自我測驗。",
            "善用單字卡(Flashcards [TTS:Flashcards])反覆記憶。",
            "遇到易混淆的單字，用表格比較整理。"
          ]
        },
        {
          "heading": "8. 情境會話範例",
          "body": "<p>以下是兩個常見的情境會話範例，幫助同學熟悉工地與建築實務的英語交流：</p>\n\n[DIALOGUE_START:日常社交會話：工程參訪交流]\nHost: Good morning! Welcome to the Taichung National Theater site tour. | 早安！歡迎來到台中國家歌劇院的工地參訪。\nVisitor: Thank you for hosting us. The curved wall structure looks magnificent! | 謝謝你們的接待。這棟建築的曲牆結構看起來真壯觀！\nHost: Please follow me and keep your visitor badges visible at all times. | 請跟我來，並請全程將訪客證佩戴在明顯處。\nVisitor: We are excited to learn more about your 3D construction techniques. | 我們非常期待能深入了解你們的 3D 施工工法。\n[DIALOGUE_END]",
          "steps": [
            "A: Did you bring the blueprint for the new bridge? [TTS:Did you bring the blueprint for the new bridge?] (你有帶新橋的藍圖嗎？)\nB: Yes, I left it in the site office. [TTS:Yes, I left it in the site office.] (有，我把它留在工地辦公室了。)",
            "A: What material should we use for the roof? [TTS:What material should we use for the roof?] (屋頂我們該用什麼材料？)\nB: Steel is the best choice because it is very durable. [TTS:Steel is the best choice because it is very durable.] (鋼材是最好的選擇，因為它非常耐用。)"
          ]
        },
        {
          "heading": "9. 統測常考易混淆字對與不規則動詞三態陷阱表",
          "body": "<p>統測英文第一大題單字題與克漏字中，命題委員極常放置「外觀拼寫極為相似但語義或詞性完全不同」的易混淆字作為誘答陷阱。同時，不規則動詞三態（尤其是 lie/lay 與 hang）每年必考，考前務必熟練辨別。</p>\n\n[DIALOGUE_START:易混淆字會話：材料性質辨析]\nInspector: The hot weather will definitely affect the curing speed of concrete. | 炎熱的天氣肯定會影響混凝土的養護速度。\nEngineer: Yes, extreme heat produces a negative effect on its ultimate compressive strength. | 是的，極端高溫會對其最終抗壓強度產生負面影響。\nInspector: Good distinction! \"Affect\" is the verb, while \"effect\" is the noun. | 區分得很好！affect 是動詞，而 effect 是名詞。\nEngineer: Exactly! And we should also adapt our pouring schedule to cooler morning hours. | 沒錯！而且我們也應該調整澆灌時間表以適應較涼爽的清晨時段。\n[DIALOGUE_END]",
          "table": {
            "headers": [
              "單字對與三態變化",
              "詞性與中文意",
              "實戰用法與考點範例"
            ],
            "rows": [
              [
                "affect [TTS:affect] vs effect [TTS:effect]",
                "affect (v.) 影響；effect (n.) 效果/影響",
                "Smoking affects health. [TTS:Smoking affects health.] / It has a serious effect on health. [TTS:It has a serious effect on health.]"
              ],
              [
                "adapt [TTS:adapt] vs adopt [TTS:adopt]",
                "adapt (v.) 適應/改編；adopt (v.) 採納/領養",
                "adapt to the new site environment [TTS:adapt to the new site environment] / adopt a modern design method [TTS:adopt a modern design method]"
              ],
              [
                "sensible [TTS:sensible] vs sensitive [TTS:sensitive]",
                "sensible (adj.) 明智理智的；sensitive (adj.) 敏感靈敏的",
                "make a sensible choice [TTS:make a sensible choice] / sensitive measuring instrument [TTS:sensitive measuring instrument]"
              ],
              [
                "economic [TTS:economic] vs economical [TTS:economical]",
                "economic (adj.) 經濟學的/國家經濟；economical (adj.) 節儉省錢實惠的",
                "rapid economic development [TTS:rapid economic development] / an economical construction plan [TTS:an economical construction plan]"
              ],
              [
                "lie-lay-lain [TTS:lie, lay, lain] (躺/位於)",
                "不及物動詞 (三態：lie - lay - lain - lying)",
                "The blueprint lies on the table. [TTS:The blueprint lies on the table.] (藍圖躺在桌上。)"
              ],
              [
                "lay-laid-laid [TTS:lay, laid, laid] (放置/產卵)",
                "及物動詞 (三態：lay - laid - laid - laying)",
                "Workers laid the bricks carefully. [TTS:Workers laid the bricks carefully.] (工人細心地鋪設磚塊。)"
              ],
              [
                "hang-hung [TTS:hang, hung] vs hang-hanged [TTS:hang, hanged]",
                "hung (懸掛/吊起)；hanged (處絞刑)",
                "They hung a warning sign on the door. [TTS:They hung a warning sign on the door.] (他們在門上掛了一面警告標誌。)"
              ]
            ]
          }
        },
        {
          "heading": "10. 名詞系統：可數／不可數與複數變化八大規則",
          "body": "<p>統測字彙題與非選翻譯最常扣分的地方，不是不會單字，而是<strong>名詞單複數判斷錯誤</strong>。東大總複習講義每一回都會複習名詞規則，因為它同時牽動「動詞單複數」「冠詞選用」「數量詞搭配」三個考點。以下把八大變化規則與四類不可數名詞一次整理完畢。</p>\n\n[DIALOGUE_START:名詞單複數實戰會話：工地物料清點]\nForeman: How many boxes of tiles did we receive this morning? | 今天早上我們收到幾箱磁磚？\nWorker: Twelve boxes, but two of the shelves in the storage room are still empty. | 十二箱，不過倉庫裡還有兩個層架是空的。\nForeman: We also need more equipment, not more equipments. | 我們還需要更多設備，是 equipment 不是 equipments。\nWorker: Right, equipment is uncountable, so it never takes an -s. | 對，equipment 是不可數名詞，所以永遠不加 s。\n[DIALOGUE_END]",
          "table": {
            "headers": [
              "變化規則",
              "適用條件",
              "範例與統測陷阱"
            ],
            "rows": [
              [
                "① 直接加 -s",
                "絕大多數規則名詞",
                "book→books、site→sites、plan→plans、beam→beams"
              ],
              [
                "② 加 -es（多一個音節）",
                "字尾為 s / x / ch / sh / z",
                "class→classes、box→boxes、bench→benches、brush→brushes"
              ],
              [
                "③ 子音+y → -ies",
                "母音+y 則直接加 -s（易錯）",
                "city→cities、factory→factories、company→companies｜但 key→keys、survey→surveys"
              ],
              [
                "④ f / fe → -ves",
                "少數例外仍加 -s",
                "leaf→leaves、knife→knives、shelf→shelves、half→halves｜但 roof→roofs、belief→beliefs、chief→chiefs"
              ],
              [
                "⑤ 子音+o → -es",
                "外來語與縮寫加 -s",
                "hero→heroes、potato→potatoes、tomato→tomatoes｜但 photo→photos、piano→pianos、radio→radios"
              ],
              [
                "⑥ 不規則（母音變化）",
                "古英語遺留字",
                "man→men、woman→women、foot→feet、tooth→teeth、goose→geese、mouse→mice、child→children"
              ],
              [
                "⑦ 單複數同形",
                "形不變，動詞看語意",
                "sheep、deer、fish、means、series、species、aircraft、Chinese、Japanese"
              ],
              [
                "⑧ 恆為複數（成對／集合）",
                "接複數動詞；計量用 a pair of",
                "scissors、glasses、pants、gloves、goods、clothes、stairs、belongings"
              ]
            ]
          },
          "steps": [
            "不可數名詞四大類：物質類 (water, concrete, steel, wood, sand, cement)、抽象類 (information, advice, knowledge, progress, evidence)、集合類 (furniture, equipment, luggage, machinery, jewelry)、學科與活動類 (math, physics, news, homework, research)。",
            "不可數名詞要計量必須加「單位詞 + of」：a piece of advice / a piece of equipment、a sheet of paper、a bag of cement、a bar of steel、two cups of coffee。",
            "統測必考陷阱：information / advice / equipment / furniture / machinery / homework / news 永遠不加 -s，也不可用 many，須用 much、a great deal of、a large amount of。",
            "集合名詞 family、team、class、staff、audience、committee：視為「一個整體」用單數動詞，強調「個別成員」時用複數動詞——The staff is well trained.（整體）vs. The staff are arguing with each other.（成員）。",
            "複合名詞取複數時只變主體字：passer-by→passers-by、editor-in-chief→editors-in-chief；但 man / woman 當修飾語時前後同變：man worker→men workers。"
          ]
        },
        {
          "heading": "11. 冠詞 a / an / the 與零冠詞完全判準",
          "body": "<p>冠詞是統測克漏字（綜合測驗）每年必挖的空格，因為它同時檢驗<strong>發音判斷</strong>與<strong>語境指涉</strong>。判斷 a 或 an 的唯一依據是「後面第一個<strong>音</strong>」，不是第一個字母；判斷用不用 the，唯一依據是「聽者是否已能鎖定是哪一個」。</p>\n\n[DIALOGUE_START:冠詞判斷會話：初次提及與再次提及]\nArchitect: We visited a construction site in Taichung last week. | 我們上週參觀了台中的一個工地。\nIntern: Was the site the one for the new opera house? | 那個工地就是新歌劇院的那個嗎？\nArchitect: Yes. Notice I said \"a site\" first, and then you said \"the site\". | 沒錯。注意我第一次說 a site，你接著說 the site。\nIntern: I see. First mention takes \"a\", and the second mention takes \"the\". | 我懂了，第一次提及用 a，第二次提及就要用 the。\n[DIALOGUE_END]",
          "table": {
            "headers": [
              "冠詞用法",
              "判斷準則",
              "例句與易錯點"
            ],
            "rows": [
              [
                "a / an（不定冠詞）",
                "首次提到、泛指單數可數名詞；依「發音」選 a 或 an",
                "a university [ju-] 子音起首用 a｜an hour [au-] h 不發音用 an｜an MRT station [ɛm-] 用 an｜a one-way street [wʌn-] 用 a｜a useful tool [ju-] 用 a｜an honest worker [ɑ-] 用 an"
              ],
              [
                "the ① 再次提及",
                "上文已出現、雙方心知肚明的那一個",
                "I bought a helmet. The helmet is yellow."
              ],
              [
                "the ② 世上唯一／方位",
                "獨一無二的自然物與方位",
                "the sun、the moon、the earth、the sky、the east、the environment"
              ],
              [
                "the ③ 序數・最高級・限定語",
                "被 first / only / same / very / 最高級 / 修飾語鎖定",
                "the first floor、the tallest building in Taiwan、the only exit、the plan I mentioned"
              ],
              [
                "the ④ + 形容詞＝一群人",
                "接複數動詞",
                "the rich（富人）、the poor、the injured（傷者）、the elderly、the unemployed"
              ],
              [
                "the ⑤ + 專有名詞",
                "河海山脈群島、公共建築、報紙、船艦",
                "the Pacific Ocean、the Alps、the Philippines、the National Palace Museum、the Taipei Times"
              ],
              [
                "零冠詞（不加）",
                "複數泛指、不可數泛指、餐名、球類、交通方式、學科、月份星期",
                "Steel is strong.｜have lunch｜play basketball｜by bus / on foot｜study math｜in July"
              ],
              [
                "零冠詞 vs the 對比",
                "建築物談「功能」不加冠詞，談「實體場所」加 the",
                "go to school 上學 vs. go to the school 到那間學校去｜go to bed 就寢 vs. sit on the bed 坐在床上｜in hospital 住院 vs. in the hospital 在醫院裡"
              ]
            ]
          },
          "steps": [
            "遇到縮寫字母開頭要「唸出字母音」再判斷：an F-1 visa（ef-）、an X-ray（eks-）、a U.S. company（ju-）、an HTML file（eitʃ-）。",
            "「the + 比較級, the + 比較級」是統測固定句型：The higher the building is, the stronger the foundation must be.",
            "by + 交通工具用零冠詞（by bus / by train / by MRT），但改成 in / on + 限定詞就要加冠詞：in a taxi、on the bus。",
            "冠詞後若有形容詞，a / an 的選擇看「緊接的那個字」：a good engineer / an excellent engineer。",
            "統測克漏字解法：空格前無限定詞、後為單數可數名詞時，先判斷是「第一次出現」(a/an) 還是「上文出現過或被子句限定」(the)。"
          ]
        },
        {
          "heading": "12. 統測核心 2000 字主題速記表 A：人物・身體・情緒・個性",
          "body": "<p>東大總複習講義每一回精選 30 個統測常見單字並補上「搭配用法＋同反義字」。以下依<strong>語意主題群</strong>重新編排統測近十年高頻字，每一列都附上實際搭配 (collocation) 與同反義字，請以「成串記憶」取代單字孤立記憶。</p>",
          "table": {
            "headers": [
              "主題群",
              "核心字彙（詞性・中譯）",
              "搭配用法／同義・反義"
            ],
            "rows": [
              [
                "身分與職業",
                "engineer (n.) 工程師｜architect (n.) 建築師｜technician (n.) 技術員｜supervisor (n.) 主管｜apprentice (n.) 學徒｜client (n.) 業主",
                "work as an engineer｜report to one's supervisor｜同 designer / planner｜反 client ↔ contractor 承包商"
              ],
              [
                "人際與家庭",
                "relative (n.) 親戚｜neighbor (n.) 鄰居｜colleague (n.) 同事｜spouse (n.) 配偶｜acquaintance (n.) 熟人",
                "get along with one's colleagues｜同 coworker＝colleague｜反 stranger 陌生人"
              ],
              [
                "身體部位",
                "shoulder (n.) 肩膀｜wrist (n.) 手腕｜ankle (n.) 腳踝｜spine (n.) 脊椎｜palm (n.) 手掌",
                "sprain one's ankle 扭傷腳踝｜carry sth. on one's shoulder"
              ],
              [
                "健康與傷病",
                "injury (n.) 傷害｜fracture (n./v.) 骨折｜bruise (n.) 瘀青｜recover (v.) 康復｜symptom (n.) 症狀｜prescription (n.) 處方",
                "recover from an injury｜suffer a serious injury｜同 heal / cure｜反 worsen 惡化"
              ],
              [
                "正面情緒",
                "delighted (adj.) 高興的｜relieved (adj.) 鬆一口氣的｜confident (adj.) 有自信的｜grateful (adj.) 感激的｜satisfied (adj.) 滿意的",
                "be grateful to sb. for sth.｜be satisfied with｜反 disappointed 失望的"
              ],
              [
                "負面情緒",
                "anxious (adj.) 焦慮的｜frustrated (adj.) 挫折的｜embarrassed (adj.) 尷尬的｜annoyed (adj.) 惱怒的｜exhausted (adj.) 精疲力竭的",
                "be anxious about the deadline｜同 worried＝anxious｜反 calm 冷靜的"
              ],
              [
                "正面個性",
                "responsible (adj.) 負責的｜diligent (adj.) 勤奮的｜generous (adj.) 慷慨的｜humble (adj.) 謙虛的｜reliable (adj.) 可靠的",
                "be responsible for safety｜同 hardworking＝diligent｜反 careless / lazy / stingy / arrogant"
              ],
              [
                "負面個性",
                "stubborn (adj.) 固執的｜selfish (adj.) 自私的｜impatient (adj.) 沒耐心的｜careless (adj.) 粗心的",
                "反 flexible 有彈性的／generous 大方的／patient 有耐心的／cautious 謹慎的"
              ]
            ]
          },
          "steps": [
            "背誦順序建議：先記「詞性＋中譯」→ 再記「一組固定搭配」→ 最後補「一個同義字＋一個反義字」，統測字彙題三種問法一次涵蓋。",
            "情緒形容詞務必同時記 -ing／-ed 兩型：The result was disappointing.（令人失望的結果）vs. We were disappointed.（我們感到失望）。",
            "個性形容詞常出現在閱讀測驗「作者態度題」與會話題「人物評價」，請連同 personality trait 這個語塊一起記憶。"
          ]
        },
        {
          "heading": "13. 統測核心 2000 字主題速記表 B：時間・空間・交通・天氣・環境",
          "body": "<p>這一組是統測<strong>閱讀測驗與圖表題</strong>的骨幹字群。時程字（schedule / deadline / delay）幾乎每年出現在通知與行程表題組；環境字（sustainable / recycle / emission）則是素養題與 SDGs 題組的核心。</p>",
          "table": {
            "headers": [
              "主題群",
              "核心字彙（詞性・中譯）",
              "搭配用法／同義・反義"
            ],
            "rows": [
              [
                "頻率與時序",
                "occasionally (adv.) 偶爾｜frequently (adv.) 經常｜immediately (adv.) 立刻｜eventually (adv.) 最終｜previously (adv.) 先前",
                "頻率強弱序：always > usually > often > sometimes > occasionally > seldom > never｜同 finally＝eventually"
              ],
              [
                "期程與進度",
                "deadline (n.) 期限｜schedule (n./v.) 時程｜delay (n./v.) 延誤｜postpone (v.) 延期｜deliver (v.) 交付",
                "meet the deadline 趕上期限｜ahead of schedule 提前｜behind schedule 落後｜同 put off＝postpone｜反 speed up 加快"
              ],
              [
                "方位與空間",
                "opposite (prep./adj.) 對面的｜beside (prep.) 在旁邊｜beneath (prep.) 在下方｜adjacent (adj.) 鄰接的｜surrounding (adj.) 周圍的",
                "opposite the entrance｜adjacent to the parking lot｜同 next to＝beside｜反 above ↔ below"
              ],
              [
                "交通運輸",
                "commute (v./n.) 通勤｜transfer (v.) 轉乘｜intersection (n.) 十字路口｜pedestrian (n.) 行人｜destination (n.) 目的地",
                "commute to work by MRT｜transfer to the blue line｜同 crossroads＝intersection"
              ],
              [
                "天氣氣候",
                "humid (adj.) 潮濕的｜drought (n.) 乾旱｜typhoon (n.) 颱風｜forecast (n./v.) 預報｜temperature (n.) 溫度",
                "the weather forecast｜a severe drought｜反 humid ↔ dry／flood 洪水 ↔ drought"
              ],
              [
                "環境與永續",
                "pollution (n.) 污染｜recycle (v.) 回收｜conserve (v.) 保育｜sustainable (adj.) 永續的｜emission (n.) 排放",
                "reduce carbon emissions｜同 preserve＝conserve｜反 waste 浪費／pollute 污染"
              ],
              [
                "災害與防救",
                "earthquake (n.) 地震｜collapse (v./n.) 倒塌｜evacuate (v.) 疏散｜shelter (n.) 避難所｜hazard (n.) 危害",
                "evacuate the building immediately｜同 danger／risk＝hazard｜反 shelter 提供保護"
              ],
              [
                "度量與數據",
                "measure (v.) 測量｜length／width／height／depth (n.) 長寬高深｜weight (n.) 重量｜volume (n.) 體積｜approximately (adv.) 大約",
                "5 meters in length＝5 meters long｜同 about／around＝approximately｜反 exactly 恰好"
              ]
            ]
          },
          "steps": [
            "圖表題常見數據描述動詞先背熟：increase／rise／grow（上升）、decrease／drop／decline／fall（下降）、remain stable（持平）、peak（達到高峰）、level off（趨於平緩）。",
            "時間介系詞與這組字連用是克漏字高頻搭配：by the deadline（最遲在期限前）、within two weeks（兩週內）、from May to July。",
            "SDGs 題組核心語塊：renewable energy 再生能源、carbon footprint 碳足跡、waste reduction 減廢、green building 綠建築。"
          ]
        },
        {
          "heading": "14. 統測高頻動詞片語 60 選（依介副詞語意歸類）",
          "body": "<p>動詞片語不要一條一條硬記，要<strong>依介副詞的核心語意分群</strong>。掌握 up（向上／完成）、down（向下／減少）、in（進入／填入）、out（向外／耗盡）、on（持續／依靠）、off（分離／取消）六大方向感，遇到沒背過的片語也能推測語意。</p>\n\n[DIALOGUE_START:動詞片語實戰會話：工程進度會議]\nManager: We ran out of cement yesterday, so we had to call off the pour. | 我們昨天水泥用完了，所以只好取消澆置。\nEngineer: I have already come up with a backup plan and set up a new delivery. | 我已經想出備案，並安排了新的送貨。\nManager: Good. Please write down the revised schedule and hand it in by noon. | 很好。請把修訂後的時程寫下來，中午前交給我。\nEngineer: Will do. I will also go over the drawings before the inspection. | 沒問題。我也會在勘驗前把圖說再檢查一遍。\n[DIALOGUE_END]",
          "table": {
            "headers": [
              "介副詞核心語意",
              "高頻動詞片語與中譯",
              "統測例句"
            ],
            "rows": [
              [
                "up：向上／完成／增加",
                "set up 設立｜give up 放棄｜put up 搭建｜show up 出現｜come up with 想出｜build up 累積｜take up 佔用／開始從事｜make up 組成／編造",
                "They put up the scaffolding before the wall was painted."
              ],
              [
                "down：向下／減少／記錄",
                "break down 故障｜cut down on 減少｜write down 記下｜turn down 拒絕／調小｜slow down 減速｜tear down 拆除",
                "The crane broke down in the middle of the lift."
              ],
              [
                "in：進入／填入／繳交",
                "fill in 填寫｜hand in 繳交｜check in 報到｜take in 吸收／理解｜drop in 順道拜訪｜turn in 上繳",
                "Please fill in the safety checklist before entering the site."
              ],
              [
                "out：向外／耗盡／查明",
                "run out of 用完｜find out 查明｜carry out 執行｜point out 指出｜hand out 分發｜work out 解決／健身｜figure out 想通",
                "We ran out of steel bars, so the work was suspended."
              ],
              [
                "on：持續／穿戴／依靠",
                "put on 穿上｜depend on 依賴｜go on 繼續｜count on 信賴｜insist on 堅持｜get on 上車／相處",
                "Always put on your helmet before entering the site."
              ],
              [
                "off：分離／取消／出發",
                "take off 脫下／起飛｜call off 取消｜put off 延後｜set off 出發／引爆｜cut off 切斷｜lay off 解僱",
                "The inspection was called off because of the typhoon."
              ],
              [
                "over／through：越過／徹底",
                "take over 接管｜look over 檢視｜go over 複習／仔細看｜go through 經歷／仔細檢查｜get through 完成／接通",
                "Let us go over the drawings one more time before signing."
              ],
              [
                "away／back／for：離開／回復／尋求",
                "throw away 丟棄｜put away 收好｜pay back 償還｜call back 回電｜look for 尋找｜apply for 申請｜ask for 要求｜care for 照顧",
                "He applied for a technician license last year."
              ]
            ]
          },
          "steps": [
            "可分離片語（動詞＋副詞）受詞若是代名詞，必須放中間：turn it down（○）／turn down it（×）；put it on（○）／put on it（×）。",
            "不可分離片語（動詞＋介系詞）受詞一律放後面：depend on him（○）／depend him on（×）；look for it（○）。",
            "統測克漏字最愛考「同一動詞搭配不同介副詞語意完全改變」：take off（脫下／起飛）、take up（佔用）、take over（接管）、take in（理解）、take after（長得像）。",
            "背片語時務必連同一個完整例句記憶，非選翻譯題可直接套用。"
          ]
        },
        {
          "heading": "15. 不規則動詞三態四大分類總表與致命易混淆組",
          "body": "<p>不規則動詞三態是統測<strong>綜合測驗、非選翻譯、句子重組</strong>的共同基礎。硬背一百個毫無章法，改用「四大變化型態」分類記憶，記憶量可壓縮到原本的三分之一。特別注意最後兩列的 lie／lay、rise／raise、hang、find／found，是命題委員年年安排的誘答陷阱。</p>",
          "table": {
            "headers": [
              "變化分類",
              "型態特徵",
              "代表動詞（原形－過去式－過去分詞）"
            ],
            "rows": [
              [
                "A-A-A 三態同形",
                "拼字完全不變",
                "cost-cost-cost｜cut-cut-cut｜put-put-put｜let-let-let｜set-set-set｜hurt-hurt-hurt｜shut-shut-shut｜read-read-read（拼字同，讀音 [riːd]→[rɛd]）"
              ],
              [
                "A-B-A 首尾同形",
                "過去分詞回到原形",
                "come-came-come｜become-became-become｜run-ran-run"
              ],
              [
                "A-B-B 後兩同形（-ought／-aught）",
                "母音整組轉為 ou／au",
                "buy-bought-bought｜think-thought-thought｜bring-brought-brought｜fight-fought-fought｜teach-taught-taught｜catch-caught-caught"
              ],
              [
                "A-B-B 後兩同形（尾音轉 -t）",
                "d→t 或直接加 t",
                "build-built-built｜send-sent-sent｜spend-spent-spent｜lend-lent-lent｜keep-kept-kept｜feel-felt-felt｜sleep-slept-slept｜mean-meant-meant"
              ],
              [
                "A-B-C 三態全異（i-a-u）",
                "母音三段規律變化",
                "begin-began-begun｜drink-drank-drunk｜ring-rang-rung｜sing-sang-sung｜swim-swam-swum｜sink-sank-sunk"
              ],
              [
                "A-B-C 三態全異（-en 結尾）",
                "過去分詞加 -en／-n",
                "break-broke-broken｜choose-chose-chosen｜drive-drove-driven｜freeze-froze-frozen｜know-knew-known｜take-took-taken｜write-wrote-written｜give-gave-given"
              ],
              [
                "致命陷阱組①：lie／lay",
                "看「及物或不及物」判斷",
                "lie 躺（不及物）lay-lain｜lie 說謊（規則）lied-lied｜lay 放置／下蛋（及物）laid-laid｜The worker lay down.（躺下）vs. He laid the brick down.（把磚放下）"
              ],
              [
                "致命陷阱組②：rise／raise・hang・found",
                "同樣看及物性與語意",
                "rise 上升（不及物）rose-risen｜raise 舉起／提高（及物）raised-raised｜hang 懸掛 hung-hung｜hang 絞死 hanged-hanged｜find 找到 found-found｜found 創立 founded-founded"
              ]
            ]
          },
          "steps": [
            "先背 A-A-A（僅約 10 字）與 A-B-A（僅 3 字），這兩類數量最少、CP 值最高，一天即可完成。",
            "A-B-B 佔不規則動詞總數超過一半，再細分為 -ought／-aught 組與尾音 -t 組，各自成串朗讀三遍即可形成語感。",
            "被動語態與完成式都用「過去分詞」，因此第三態記錯等於連帶三個文法題全錯，務必以「三態一起唸」的方式記憶。",
            "自我檢核法：隨機抽 10 個動詞，同時寫出「過去式句」與「現在完成式句」各一句，能寫對才算真正掌握。"
          ]
        }
      ],
      "practices": [
        {
          "question": "The workers need to ________ the old brick wall before they can build the new parking lot. [TTS:The workers need to ________ the old brick wall before they can build the new parking lot.]\n(A) maintain [TTS:maintain] (B) remove [TTS:remove] (C) repair [TTS:repair] (D) construct [TTS:construct]",
          "difficulty": "2",
          "steps": [
            "分析句意：在他們可以建造新的停車場之前，工人們需要 ___ 舊的磚牆(old brick wall [TTS:old brick wall])。",
            "判斷邏輯：要蓋新設施前，通常必須「移除」或「拆除」舊設施。",
            "選項分析：(A) 維修 (B) 移除 (C) 修理 (D) 建造。故選(B)。"
          ],
          "answer": "(B) remove [TTS:remove]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "Concrete is a very strong and durable ________ commonly used in modern buildings and bridges. [TTS:Concrete is a very strong and durable ________ commonly used in modern buildings and bridges.]\n(A) emotion [TTS:emotion] (B) material [TTS:material] (C) fashion [TTS:fashion] (D) weather [TTS:weather]",
          "difficulty": "1",
          "steps": [
            "分析關鍵字：Concrete [TTS:Concrete] (混凝土) 是一種堅固且耐用的 ___，廣泛用於現代建築和橋樑。",
            "判斷邏輯：混凝土是一種「材料」。",
            "選項分析：(A) 情緒 (B) 材料 (C) 時尚 (D) 天氣。故選(B)。"
          ],
          "answer": "(B) material [TTS:material]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "It is important to wear a safety ________ on the construction site to protect your head from falling objects. [TTS:It is important to wear a safety ________ on the construction site to protect your head from falling objects.]\n(A) helmet [TTS:helmet] (B) glove [TTS:glove] (C) boot [TTS:boot] (D) vest [TTS:vest]",
          "difficulty": "1",
          "steps": [
            "分析句意：在工地戴安全 ___ 以保護頭部(head [TTS:head])免受掉落物傷害是很重要的。",
            "判斷邏輯：保護頭部的安全裝備是「頭盔/安全帽」。",
            "選項分析：(A) 頭盔 (B) 手套 (C) 靴子 (D) 背心。故選(A)。"
          ],
          "answer": "(A) helmet [TTS:helmet]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "Because of the heavy rain, the project manager decided to ________ the outdoor painting work until next week. [TTS:Because of the heavy rain, the project manager decided to ________ the outdoor painting work until next week.]\n(A) put off [TTS:put off] (B) look for [TTS:look for] (C) give up [TTS:give up] (D) turn on [TTS:turn on]",
          "difficulty": "3",
          "steps": [
            "分析句意：因為大雨，專案經理決定將戶外油漆工作 ___ 到下週。",
            "判斷邏輯：遇到大雨，原定計畫會被「延期」。",
            "選項分析：(A) 延期 (B) 尋找 (C) 放棄 (D) 打開。故選(A)。"
          ],
          "answer": "(A) put off [TTS:put off]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "Before building the house, the architect drew a detailed ________ to show where each room would be. [TTS:Before building the house, the architect drew a detailed ________ to show where each room would be.]\n(A) receipt [TTS:receipt] (B) menu [TTS:menu] (C) plan [TTS:plan] (D) ticket [TTS:ticket]",
          "difficulty": "1",
          "steps": [
            "分析句意：在建屋前，建築師畫了一份詳細的 ___ 來展示每個房間的位置。",
            "判斷邏輯：建築師會畫「平面圖 / 計畫圖」。",
            "選項分析：(A) 收據 (B) 菜單 (C) 計畫/圖紙 (D) 票。故選(C)。"
          ],
          "answer": "(C) plan [TTS:plan]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "The steel beams are ________ enough to support the weight of the entire roof without bending. [TTS:The steel beams are ________ enough to support the weight of the entire roof without bending.]\n(A) weak [TTS:weak] (B) strong [TTS:strong] (C) soft [TTS:soft] (D) tiny [TTS:tiny]",
          "difficulty": "2",
          "steps": [
            "分析句意：鋼樑夠 ___，能支撐整個屋頂的重量而不會彎曲。",
            "判斷邏輯：能支撐重物不彎曲，表示必須很「堅固」。",
            "選項分析：(A) 虛弱的 (B) 堅固的 (C) 柔軟的 (D) 微小的。故選(B)。"
          ],
          "answer": "(B) strong [TTS:strong]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "I was really ________ when I saw the beautiful interior design of the new library. [TTS:I was really ________ when I saw the beautiful interior design of the new library.]\n(A) amaze [TTS:amaze] (B) amazing [TTS:amazing] (C) amazed [TTS:amazed] (D) to amaze [TTS:to amaze]",
          "difficulty": "3",
          "steps": [
            "分析句型：主詞是 I [TTS:I] (人)，搭配 be 動詞 was [TTS:was]。表示人「感到...的」。",
            "判斷詞性與用法：形容人感到驚訝或驚豔，應使用 -ed 結尾的情緒形容詞。",
            "選項分析：(A) 動詞 (B) 令人驚奇的 (C) 感到驚奇的 (D) 不定詞。故選(C)。"
          ],
          "answer": "(C) amazed [TTS:amazed]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "Due to the lack of funds, the government had to ________ the highway construction project. [TTS:Due to the lack of funds, the government had to ________ the highway construction project.]\n(A) complete [TTS:complete] (B) expand [TTS:expand] (C) cancel [TTS:cancel] (D) measure [TTS:measure]",
          "difficulty": "2",
          "steps": [
            "分析句意：因為缺乏資金(lack of funds [TTS:lack of funds])，政府必須 ___ 高速公路建設專案。",
            "判斷邏輯：沒有錢就無法繼續，通常會「取消」或「暫停」。",
            "選項分析：(A) 完成 (B) 擴展 (C) 取消 (D) 測量。故選(C)。"
          ],
          "answer": "(C) cancel [TTS:cancel]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        }
      ],
      "step0Prerequisites": [
        "國中基礎 1200 單字",
        "基本八大詞性觀念 (名詞、動詞、形容詞、副詞等)",
        "基本英文字典音標與詞條查閱能力"
      ]
    },
    {
      "slug": "grammar-patterns",
      "title": "2. 基礎文法句型",
      "desc": "掌握英文五大基本句型、12時態（特重現在完成式）、基礎被動語態、助動詞、不定詞與動名詞之差異、比較級最高級及虛主詞 it 的應用。",
      "status": "done",
      "gradeLevel": 10,
      "examHitRate": 5,
      "covered_question_ids": [
        "111-english-9",
        "111-english-10",
        "112-english-9",
        "112-english-10",
        "113-english-9",
        "113-english-10",
        "114-english-9",
        "114-english-10",
        "115-english-9",
        "115-english-10",
        "110-english-9",
        "110-english-10"
      ],
      "fatalTraps": [
        {
          "wrongThinking": "主詞與動詞被長修飾語分隔時，直接以最靠近動詞的名詞決定動詞單複數。",
          "correctThinking": "必須剔除介系詞片語或關係子句等修飾成分，找到真正的主詞核心名詞來決定動詞單複數。",
          "trapDescription": "例如 \"The quality of these concrete blocks (is/are) high\"，主詞是單數 quality，動詞必須用 is，不可受 blocks 影響。"
        },
        {
          "wrongThinking": "主動被動語態混淆，物當主詞時忘記使用被動語態 (be + p.p.)。",
          "correctThinking": "當主詞是動作的承受者時，必須使用被動語態 be + 過去分詞 (p.p.)。",
          "trapDescription": "例如 \"The bridge built last year\" 是錯誤的，必須為 \"The bridge was built last year\"。"
        }
      ],
      "eliteMentalModels": [
        {
          "technique": "句子骨架剝洋蔥法",
          "explanation": "先圈出主要動詞，找出真正的主詞，將介系詞片語與形容詞子句暫時括號忽略，迅速確認核心主謂一致性。"
        },
        {
          "technique": "時態時間軸對照模型",
          "explanation": "以現在為基準點：過去特定時間用過去式；從過去持續到現在用現在完成式 (have/has + p.p.)；過去某時間點之前已完成用過去完成式 (had + p.p.)。"
        }
      ],
      "worked_examples": [
        {
          "question": "The new bridge, which was designed by a famous architect, _______ completed by the end of next year.[TTS:The new bridge, which was designed by a famous architect, _______ completed by the end of next year.]",
          "difficulty": "mid",
          "steps": [
            "分析句子結構：主詞是 The new bridge，後面的 which 子句是修飾語。空格處需要填寫主要動詞。",
            "尋找時間標記：by the end of next year (到明年年底為止)，這通常是搭配「未來完成式」的標記，但若選項沒有未來完成式，未來簡單式被動語態亦可。",
            "判斷語態：bridge (橋) 是被完成的，所以必須使用被動語態 (be + p.p.)。",
            "綜合判斷：未來式的被動語態是 will be + p.p.，因此答案為 will be。"
          ],
          "answer": "(A) will be[TTS:will be]\n(B) is[TTS:is]\n(C) has been[TTS:has been]\n(D) was[TTS:was]\n\n答案：(A)",
          "hints": [
            "仔細分析句子主詞、動詞與受詞結構",
            "根據上下文語境與關鍵字線索判斷最適選項"
          ],
          "commonMistake": "容易受外觀相似的單字或字面直譯干擾，未完整分析句子文法功能。",
          "eliteShortcut": "文法結構分析法：先確認空格所缺詞性與句法功能，快速排除不符選項，秒殺破題！"
        }
      ],
      "illustrations": [
        "context.webp",
        "mechanism.webp",
        "comparison.webp"
      ],
      "concepts": [
        {
          "heading": "英文五大基本句型",
          "body": "英文句子由主詞 (S)、動詞 (V)、受詞 (O)、補語 (C) 等元素組成。動詞的性質決定了句子的基本架構，土木建築常描述結構體，多用這五大句型。\n\n<div className=\"p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-xs font-mono space-y-1 my-3\">\n  <div className=\"font-bold text-blue-800 dark:text-blue-300\">📐 五大句型解構天平圖示：</div>\n  <div>• [S + V]        主詞 ──► 不及物動詞 (無受詞)</div>\n  <div>• [S + V + C]    主詞 ──► 連綴動詞 ──► 補語 (形容主詞狀態)</div>\n  <div>• [S + V + O]    主詞 ──► 及物動詞 ──► 受詞 (動作承受者)</div>\n  <div>• [S + V + IO + DO] 主詞 ──► 授與動詞 ──► 間接受詞(人) + 直接受詞(物)</div>\n  <div>• [S + V + O + OC]  主詞 ──► 動詞 ──► 受詞 ──► 受詞補語 (使役/感官)</div>\n</div>\n\n[DIALOGUE_START:五大句型會話：清楚傳達工程指令]\nArchitect: The client considers the new lobby spacious and modern. | 業主認為新的大廳既寬敞又具現代感。\nAssistant: That is an S + V + O + OC sentence pattern, right? | 那是「主詞 + 動詞 + 受詞 + 受詞補語」的句型，對吧？\nArchitect: Yes. Mastering basic sentence patterns helps you write clear reports. | 是的。掌握基本句型能幫助你寫出條理清晰的報告。\nAssistant: I will keep my project descriptions concise and accurate. | 我會讓專案說明保持簡潔且精準。\n[DIALOGUE_END]",
          "table": {
            "headers": [
              "句型",
              "結構",
              "例句 (土木建築情境)"
            ],
            "rows": [
              [
                "S + V",
                "主詞 + 不及物動詞",
                "The building collapsed.[TTS:The building collapsed.] (建築物倒塌了。)"
              ],
              [
                "S + V + C",
                "主詞 + 連綴動詞 + 主詞補語",
                "The design looks modern.[TTS:The design looks modern.] (這設計看起來很現代。)"
              ],
              [
                "S + V + O",
                "主詞 + 及物動詞 + 受詞",
                "The engineer inspected the bridge.[TTS:The engineer inspected the bridge.] (工程師檢查了橋梁。)"
              ],
              [
                "S + V + O1 + O2",
                "主詞 + 授與動詞 + 間接受詞 +直接受詞",
                "The client gave us the blueprint.[TTS:The client gave us the blueprint.] (客戶給了我們藍圖。)"
              ],
              [
                "S + V + O + C",
                "主詞 + 不完全及物動詞 + 受詞 + 受詞補語",
                "They consider the project successful.[TTS:They consider the project successful.] (他們認為這個專案很成功。)"
              ]
            ]
          }
        },
        {
          "heading": "12 時態完整剖析（重點：現在完成式）",
          "body": "時態表達動作發生的時間和狀態。分為現在、過去、未來，以及簡單、進行、完成、完成進行。統測最愛考現在完成式，表示從過去持續到現在的動作或經驗。\n\n<div className=\"p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 text-xs font-mono space-y-1 my-3\">\n  <div className=\"font-bold text-indigo-800 dark:text-indigo-300\">⏳ 動詞 12 時態時空座標軸圖解：</div>\n  <div>• [過去完成式 had + p.p.] ◄── 比過去更早發生 (By the time S+Ved, S+had p.p.)</div>\n  <div>• [過去簡單式 V-ed]       ◄── 明確過去時間點 (yesterday, in 2020, ago)</div>\n  <div>• [現在完成式 have/has p.p.] ◄── 過去持續至今 (since + 過去點, for + 一段時間)</div>\n  <div>• [現在簡單式 V / V-s]     ◄── 恆常真理、材料物理性質 (Steel expands when heated)</div>\n  <div>• [未來簡單式 will + V]     ──► 未來事件 (if/when 子句用現在式代替未來式)</div>\n</div>\n\n[DIALOGUE_START:時態會話：工程里程碑進度確認]\nInspector: Have you finished pouring the concrete for the third-floor slab? | 三樓樓板的混凝土澆置已經完成了嗎？\nSupervisor: Yes, we have just completed it, and the curing process is ongoing. | 是的，我們剛剛完成，目前正在進行養護作業。\nInspector: Good. We will inspect the compressive strength next Monday. | 很好。我們下週一會檢驗抗壓強度。\nSupervisor: We will have all laboratory test reports ready by then. | 屆時我們會準備好所有實驗室的檢驗報告。\n[DIALOGUE_END]",
          "table": {
            "headers": [
              "時態重點",
              "結構與用法",
              "例句"
            ],
            "rows": [
              [
                "現在簡單式",
                "常態、事實 (V/Vs)",
                "Concrete contains cement.[TTS:Concrete contains cement.] (混凝土含有水泥。)"
              ],
              [
                "過去簡單式",
                "過去的單一事件 (V-ed [TTS:past tense verb])",
                "We finished the foundation yesterday.[TTS:We finished the foundation yesterday.] (我們昨天完成了地基。)"
              ],
              [
                "現在完成式",
                "過去發生持續到現在，或對現在有影響 (have/has + p.p. [TTS:have or has plus past participle])",
                "They have built three bridges since 2015.[TTS:They have built three bridges since 2015.] (自2015年起他們已建了三座橋。)"
              ]
            ]
          }
        },
        {
          "heading": "基礎被動語態",
          "body": "當我們更關注「動作的承受者」，或者「不知道/不需要說出動作的執行者」時，就會使用被動語態。在工程報告中極為常見。\n\n[DIALOGUE_START:被動語態會話：歷史建築結構介紹]\nGuide: This iconic suspension bridge was designed by a Taiwanese engineer in 1995. | 這座具代表性的斜張橋是由一位台灣工程師於 1995 年設計的。\nStudent: Why is passive voice used here instead of active voice? | 為什麼這裡使用被動語態而不是主動語態呢？\nGuide: Because the bridge itself is the main focus of our discussion. | 因為這座橋樑本身才是我們討論的焦點。\nStudent: That makes sense! The bridge was reinforced with high-strength cables. | 很有道理！這座橋也是用高強度鋼索補強的。\n[DIALOGUE_END]",
          "steps": [
            "基本公式：be 動詞 + 過去分詞 (p.p.)",
            "時態變化由 be 動詞來表現（例如：is built[TTS:is built], was built[TTS:was built], has been built[TTS:has been built], will be built[TTS:will be built]）。",
            "助動詞的被動：助動詞 + be + p.p. (例如：can be repaired[TTS:can be repaired])。"
          ]
        },
        {
          "heading": "助動詞系統",
          "body": "助動詞用於表達語氣（如可能、必須、應該）。後方一律接原形動詞。\n\n[DIALOGUE_START:助動詞會話：工地安全規範落實]\nSafety Officer: All workers must wear protective helmets inside the construction zone. | 所有工人在施工區域內都必須佩戴防護安全帽。\nVisitor: May I take photographs of the steel framework? | 請問我可以拍攝鋼骨架構的照片嗎？\nSafety Officer: You can take photos, but you should stay behind the yellow warning line. | 您可以拍照，但應該保持站在黃色警戒線後方。\nVisitor: Understood. Safety should always come first. | 明白了。安全永遠應該排在第一位。\n[DIALOGUE_END]",
          "table": {
            "headers": [
              "助動詞",
              "意義",
              "例句"
            ],
            "rows": [
              [
                "must[TTS:must]",
                "必須 (強烈義務)",
                "Workers must wear helmets on site.[TTS:Workers must wear helmets on site.] (工人在工地必須戴安全帽。)"
              ],
              [
                "should[TTS:should]",
                "應該 (建議)",
                "You should check the measurements again.[TTS:You should check the measurements again.] (你應該再檢查一次測量結果。)"
              ],
              [
                "may / might[TTS:may / might]",
                "可能",
                "The delivery might be delayed due to rain.[TTS:The delivery might be delayed due to rain.] (交貨可能因雨延遲。)"
              ]
            ]
          }
        },
        {
          "heading": "不定詞 vs 動名詞",
          "body": "有些動詞後面只能接不定詞 (to V)，有些只能接動名詞 (V-ing)，有些兩者皆可但意義不同。\n\n[DIALOGUE_START:不定詞與動名詞會話：排定施工計畫]\nProject Lead: We decided to postpone the outdoor excavation today. | 我們決定推遲今天的戶外開挖作業。\nForeman: Good idea. It kept raining heavily all morning. | 好主意。整個早上都一直在下大雨。\nProject Lead: We look forward to resuming work as soon as the weather improves. | 我們期待天氣一好轉就立刻恢復施工。\nForeman: We will prepare to cast the foundation tomorrow morning. | 我們會準備好明天早上進行基礎澆灌。\n[DIALOGUE_END]",
          "table": {
            "headers": [
              "類別",
              "常見動詞",
              "例句"
            ],
            "rows": [
              [
                "接 to V[TTS:to V]",
                "want, plan, decide, hope[TTS:want, plan, decide, hope]",
                "We plan to renovate the old house.[TTS:We plan to renovate the old house.] (我們計畫翻修這棟老房子。)"
              ],
              [
                "接 V-ing[TTS:V-ing]",
                "enjoy, finish, practice, avoid[TTS:enjoy, finish, practice, avoid]",
                "The crew finished pouring the concrete.[TTS:The crew finished pouring the concrete.] (工人們完成了混凝土澆灌。)"
              ],
              [
                "皆可但意義不同",
                "stop, remember, forget[TTS:stop, remember, forget]",
                "Stop to rest[TTS:Stop to rest] (停下來去休息) vs Stop working[TTS:Stop working] (停止工作)"
              ]
            ]
          }
        },
        {
          "heading": "比較級與最高級",
          "body": "形容詞與副詞用於比較時的變化。常用於比較材料強度、建築高度等。\n\n[DIALOGUE_START:比較級與最高級會話：材料強度性能評估]\nEngineer A: High-performance concrete is stronger than standard concrete. | 高性能混凝土比一般標準混凝土強度更高。\nEngineer B: True, but structural steel remains the most flexible material for high-rises. | 確實，但對於高層建築來說，結構鋼材依然是韌性最好的材料。\nEngineer A: This composite design will make our tower much safer during earthquakes. | 這種複合設計會使我們的塔樓在地震時安全許多。\nEngineer B: It is indeed the best solution for this seismic zone. | 這確實是針對此地震帶的最佳解決方案。\n[DIALOGUE_END]",
          "steps": [
            "原級比較：as + 形容詞/副詞原級 + as (如：as tall as[TTS:as tall as])",
            "比較級：形容詞/副詞-er + than，或 more + 多音節字 + than (如：stronger than[TTS:stronger than], more durable than[TTS:more durable than])",
            "最高級：the + 形容詞/副詞-est，或 the most + 多音節字 (如：the tallest building[TTS:the tallest building], the most expensive material[TTS:the most expensive material])"
          ]
        },
        {
          "heading": "虛主詞與虛受詞句型",
          "body": "當真正的主詞或受詞（通常是不定詞片語或 that 子句）太長時，為了保持句子平衡，會用 it 代替，將真正的主詞/受詞移到句尾。\n\n[DIALOGUE_START:虛主詞虛受詞會話：合規檢驗重要性]\nAuditor: It is essential to verify all structural dimensions before signing the permit. | 在簽署許可證前，核對所有結構尺寸是至關重要的。\nDraftsperson: I find it necessary to double-check the elevation drawings. | 我也覺得有必要再次確認立面圖。\nAuditor: It takes time and patience to ensure zero errors in engineering. | 確保工程零失誤需要時間與耐心。\nDraftsperson: We will make it a priority to maintain the highest quality. | 我們會把維持最高品質視為第一優先。\n[DIALOGUE_END]",
          "steps": [
            "虛主詞：It is + 形容詞 + (for sb.) + to V ... (例：It is important to follow safety rules.[TTS:It is important to follow safety rules.])",
            "虛受詞：S + find/make/think + it + 形容詞 + to V ... (例：I found it difficult to read the blueprint.[TTS:I found it difficult to read the blueprint.])"
          ]
        },
        {
          "heading": "情境會話範例",
          "body": "以下是兩個與本單元文法句型相關的實境對話範例，幫助同學在日常情境中靈活運用時態與句型。\n\n[DIALOGUE_START:文法綜合會話：事務所晨會簡報]\nTeam Lead: Have all revisions been incorporated into the final floor plan? | 所有的修改都已經納入最終的平面圖了嗎？\nJunior Architect: Yes, they have been updated, and the client agreed to review them today. | 是的，都已經更新完畢，業主也同意今天會進行審查。\nTeam Lead: It is important that we present the green building credentials clearly. | 我們把綠建築認證指標清楚呈現非常重要。\nJunior Architect: I will do my best to explain every detail during the meeting. | 我會在會議中盡全力解釋每一個細節。\n[DIALOGUE_END]",
          "steps": [
            "對話一：\nA: Have you finished the structural design yet?[TTS:Have you finished the structural design yet?]\nB: Not yet. I am still working on the foundation plans.[TTS:Not yet. I am still working on the foundation plans.]",
            "對話二：\nA: The new library will be completed by next month.[TTS:The new library will be completed by next month.]\nB: That is amazing! I can't wait to see it.[TTS:That is amazing! I can't wait to see it.]"
          ]
        },
        {
          "heading": "9. 主謂一致性 (Subject-Verb Agreement) 八大核心法則",
          "body": "<p>英文句型中，「主詞與動詞的單複數一致」是統測克漏字與文法選擇題每年必考的經典考點。很多同學看到主詞後面有一長串修飾語就忘記真正的主詞是誰，掌握以下八大公式即可秒殺破題！</p>\n\n[DIALOGUE_START:主謂一致會話：工地人員管理]\nSupervisor: Either the project manager or the site inspectors are responsible for the report. | 不是專案經理就是現場檢驗員要為這份報告負責。\nClerk: Why did you use \"are\" instead of \"is\"? | 為什麼你用 are 而不是 is 呢？\nSupervisor: Because with \"either...or...\", the verb agrees with the closer subject, which is \"inspectors\"! | 因為在 either...or... 句型中，動詞要和較靠近的主詞一致，也就是複數的 inspectors！\nClerk: I get it now! And \"The number of workers is increasing\" uses \"is\" because the subject is \"The number\". | 我現在懂了！而 The number of workers is increasing 用 is 是因為主詞是 The number。\n[DIALOGUE_END]",
          "table": {
            "headers": [
              "句型結構與法則",
              "動詞單複數規則",
              "實戰例句與考點解析"
            ],
            "rows": [
              [
                "Either A or B / Neither A nor B [TTS:Either A or B, Neither A nor B]",
                "動詞依「鄰近的主詞 B」決定單複數",
                "Neither the foreman nor the workers are tired. [TTS:Neither the foreman nor the workers are tired.] (工頭與工人們都不累。)"
              ],
              [
                "Not only A but also B [TTS:Not only A but also B]",
                "動詞依「鄰近的主詞 B」決定單複數",
                "Not only the engineer but also the architect approves the plan. [TTS:Not only the engineer but also the architect approves the plan.] (不僅工程師，連建築師也批准了該計畫。)"
              ],
              [
                "A as well as B / A together with B [TTS:A as well as B, A together with B]",
                "動詞依「前面主要的主詞 A」決定單複數",
                "The chief engineer, as well as his assistants, is on site. [TTS:The chief engineer, as well as his assistants, is on site.] (總工程師連同其助理都在工地上。)"
              ],
              [
                "The number of + 複數名詞 [TTS:The number of]",
                "表示「...的數量」，動詞一律用「單數 (is/was/has)」",
                "The number of construction accidents has dropped significantly. [TTS:The number of construction accidents has dropped significantly.] (工安意外的數量顯著下降。)"
              ],
              [
                "A number of + 複數名詞 [TTS:A number of]",
                "表示「許多... (= many)」，動詞一律用「複數 (are/were/have)」",
                "A number of skilled workers are needed for the project. [TTS:A number of skilled workers are needed for the project.] (該專案需要許多技術純熟的工人。)"
              ],
              [
                "Each of / Every one of + 複數名詞 [TTS:Each of, Every one of]",
                "強調「每一個個體」，動詞一律用「單數動詞」",
                "Each of the structural beams has been inspected. [TTS:Each of the structural beams has been inspected.] (每一根結構橫樑都已經過檢驗。)"
              ],
              [
                "時間 / 金額 / 距離 / 重量 [TTS:time, money, distance, weight]",
                "視為「單一整體量」，動詞一律用「單數動詞」",
                "Two million dollars is a fair budget for this renovation. [TTS:Two million dollars is a fair budget for this renovation.] (兩百萬美元對這項翻新工程是合理的預算。)"
              ]
            ]
          }
        },
        {
          "heading": "10. 代名詞系統：人稱・所有格・反身・指示",
          "body": "<p>代名詞是統測綜合測驗（克漏字）的<strong>常駐考點</strong>，因為它同時測驗「格位判斷」與「上文指代」。只要能回答「這個空格在句中扮演主詞還是受詞？」「它指的是上文哪個名詞？」，代名詞題幾乎可以全數答對。</p>\n\n[DIALOGUE_START:代名詞判斷會話：所有格與反身代名詞]\nSupervisor: Is this helmet yours or his? | 這頂安全帽是你的還是他的？\nWorker: It is mine. He left his in the site office. | 是我的。他把他的留在工地辦公室了。\nSupervisor: Be careful with the saw, or you might hurt yourself. | 用鋸子要小心，不然你可能會傷到自己。\nWorker: Do not worry. The architect himself taught me how to use it. | 別擔心。是建築師本人教我怎麼使用的。\n[DIALOGUE_END]",
          "table": {
            "headers": [
              "類別",
              "形式",
              "用法準則與例句"
            ],
            "rows": [
              [
                "主格",
                "I, you, he, she, it, we, they",
                "當句子主詞：They are pouring the concrete now."
              ],
              [
                "受格",
                "me, you, him, her, it, us, them",
                "當動詞或介系詞的受詞：The foreman gave them the drawings.／Wait for me."
              ],
              [
                "所有格形容詞",
                "my, your, his, her, its, our, their",
                "後面「必須」接名詞：Bring your own helmet.（× Bring yours own helmet.）"
              ],
              [
                "所有格代名詞",
                "mine, yours, his, hers, ours, theirs",
                "獨立使用，等於「所有格＋名詞」：This helmet is mine.（＝my helmet）"
              ],
              [
                "反身代名詞",
                "myself, yourself, himself, herself, itself, ourselves, yourselves, themselves",
                "① 受詞＝主詞：He hurt himself.　② 加強語氣（可省略）：The architect himself signed the drawing."
              ],
              [
                "反身固定片語",
                "by oneself 獨自｜for oneself 為自己｜enjoy oneself 玩得愉快｜help oneself to 自行取用｜make oneself at home 別拘束",
                "Please help yourself to the drinks."
              ],
              [
                "指示代名詞",
                "this／these（近）、that／those（遠）",
                "比較句避免重複名詞：The climate of Taipei is milder than that of Hsinchu.（單數用 that，複數用 those）"
              ],
              [
                "it 的四大特殊用法",
                "① 虛主詞　② 虛受詞　③ 表天氣時間距離　④ 強調句",
                "It is important to wear a helmet.｜I find it hard to read the blueprint.｜It takes 20 minutes to get there.｜It was John who called."
              ]
            ]
          },
          "steps": [
            "its（它的，所有格）vs. it's（it is／it has 的縮寫）是統測非選最常見的扣分點，寫作時務必回頭檢查。",
            "反身代名詞不可當主詞：（誤）Myself checked the drawing.→（正）I checked the drawing myself.",
            "比較句中的替代詞：單數用 that、複數用 those、避免重複的同類物用 one／ones——The steel bars here are stronger than those in the warehouse.",
            "克漏字指代題解法：先在上文往回找「最近、且單複數與語意都吻合」的名詞，再代入驗證句意是否通順。"
          ]
        },
        {
          "heading": "11. 不定代名詞完全攻略（one／another／the other／others／both／either／all）",
          "body": "<p>不定代名詞是統測<strong>年年必考的高頻文法</strong>，關鍵只有兩個判準：<strong>①「總數是兩個還是三個以上？」②「剩下的有沒有被講完（定或不定）？」</strong>掌握這兩個問題，八個選項瞬間只剩一個能填。</p>",
          "table": {
            "headers": [
              "不定代名詞",
              "語意與適用條件",
              "例句與辨析"
            ],
            "rows": [
              [
                "one／ones",
                "同類中「不特定的一個／一些」，代替可數名詞",
                "I lost my helmet; I need to buy a new one.／These bolts are rusty; bring me the clean ones."
              ],
              [
                "another",
                "三者以上中「另外一個」（不定，後面還有）",
                "This design does not work; please show me another."
              ],
              [
                "the other",
                "兩者中「另外那一個」（定，只剩最後一個）",
                "I have two plans: one is cheap, the other is fast."
              ],
              [
                "others",
                "「其他一些」（不定複數，還有剩）",
                "Some workers took a break; others kept working."
              ],
              [
                "the others",
                "「其餘全部」（定複數，已講完）",
                "Three of the ten samples failed; the others all passed."
              ],
              [
                "both／either／neither",
                "限用於「兩者」：兩者都／任一／兩者皆不",
                "Both exits are open.｜Either door is fine.｜Neither of them is qualified.（either／neither 當主詞接單數動詞）"
              ],
              [
                "all／none／each／every",
                "用於「三者以上」：全部／都不／每一個",
                "All of the beams are steel.｜None of the tests was valid.｜Each worker has a badge.（each／every ＋ 單數名詞 ＋ 單數動詞）"
              ],
              [
                "some／any",
                "some 用於肯定句與「期待肯定答覆」的邀請問句；any 用於否定句與一般疑問句",
                "Would you like some tea?（邀請，用 some）｜We do not have any spare parts.｜Do you have any questions?"
              ]
            ]
          },
          "steps": [
            "黃金口訣：「兩個 → one … the other；三個以上 → one … another … the others」。畫一排圓圈實際點數，答案立刻浮現。",
            "either／neither／each／every／one of ＋ 複數名詞 → 動詞一律用單數：Each of the workers wears a helmet.（× wear）",
            "neither…nor／either…or／not only…but also 連接兩個主詞時，動詞依「最靠近的那個主詞」決定（就近原則）：Neither the engineer nor the workers are on site.",
            "the other 與 another 詞性彈性：兩者都可當形容詞（the other plan／another plan）或代名詞（the other／another）。",
            "no one 與 none 辨析：no one 只指人且不接 of；none 人物皆可且常接 of——No one came.／None of the samples passed."
          ]
        },
        {
          "heading": "12. 形容詞與副詞：位置、順序、-ing／-ed 與 -ly 陷阱",
          "body": "<p>形容詞與副詞的考點集中在三件事：<strong>①「該用形容詞還是副詞？」②「-ing 還是 -ed？」③「加了 -ly 意思會不會變？」</strong>其中 hard／hardly、late／lately、near／nearly 這三組是統測最愛的誘答陷阱。</p>\n\n[DIALOGUE_START:形容詞副詞辨析會話：連綴動詞與程度副詞]\nInspector: The surface of this concrete feels rough. | 這片混凝土的表面摸起來很粗糙。\nEngineer: Yes, and the finishing work was done carelessly. | 是的，而且收尾工作做得很草率。\nInspector: The report is confusing, so the client was confused. | 這份報告令人困惑，所以業主感到困惑。\nEngineer: I can hardly disagree. I will rewrite it tonight. | 我完全同意。我今晚就重寫。\n[DIALOGUE_END]",
          "table": {
            "headers": [
              "考點",
              "規則",
              "例句與陷阱"
            ],
            "rows": [
              [
                "形容詞的兩個位置",
                "① 名詞前（限定用法）　② be／連綴動詞後（敘述用法）",
                "a durable material（限定）／The material is durable.（敘述）"
              ],
              [
                "連綴動詞後必接形容詞",
                "be, become, seem, look, sound, taste, smell, feel, get, turn, remain, stay",
                "The concrete feels rough.（○）／feels roughly（×）｜The plan sounds reasonable.（○）"
              ],
              [
                "形容詞排列順序",
                "限定詞→評價→大小→形狀→新舊→顏色→國籍→材質→名詞",
                "a beautiful large round old brown Japanese wooden door"
              ],
              [
                "-ing vs -ed 形容詞",
                "-ing 修飾「事物／令人…的」；-ed 修飾「人／感到…的」",
                "The lecture was boring.（課很無聊）／The students were bored.（學生覺得無聊）｜同型：exciting／excited、surprising／surprised、tiring／tired"
              ],
              [
                "副詞的位置",
                "一般副詞置句尾；頻率副詞置「一般動詞前、be 動詞與助動詞後」",
                "He always checks the scaffolding.／He is always careful.／He has always been careful."
              ],
              [
                "形容詞副詞同形字",
                "fast, hard, late, early, high, near, deep, straight, well 本身即可當副詞",
                "She works hard.（努力工作）｜He arrived late.｜Drive straight ahead."
              ],
              [
                "加 -ly 後語意全變（必考）",
                "hardly 幾乎不｜lately 最近｜nearly 幾乎｜highly 高度地｜deeply 深深地｜shortly 不久",
                "I can hardly see the marks.（幾乎看不到）≠ I work hard.｜He has been busy lately.（最近）≠ He came late.（遲到）"
              ],
              [
                "程度副詞 very vs much",
                "very 修飾形容詞／副詞「原級」；much 修飾「比較級」與動詞",
                "very tall（○）／much taller（○）／very taller（×）｜I like it very much."
              ]
            ]
          },
          "steps": [
            "判斷「形容詞或副詞」只問一句話：這個空格是在描述「名詞」還是在描述「動詞／形容詞／整句」？描述名詞用形容詞，其餘用副詞。",
            "情緒動詞轉形容詞是統測固定考點：interest／excite／bore／surprise／tire／satisfy／disappoint／confuse／embarrass，一律用「事物 -ing、人 -ed」判斷。",
            "頻率副詞在被動語態中的位置：be ＋ 頻率副詞 ＋ p.p.——The site is regularly inspected.",
            "enough 的特殊位置：修飾形容詞／副詞時放「後面」（strong enough），修飾名詞時放「前面」（enough money）。"
          ]
        },
        {
          "heading": "13. 數量詞與名詞搭配總表（many／much／few／little 全解）",
          "body": "<p>數量詞題型的解法只需兩步：<strong>①判斷後面的名詞是可數還是不可數　②判斷語氣是肯定還是否定</strong>。few／little（幾乎沒有，否定語氣）與 a few／a little（有一些，肯定語氣）的差別，是統測克漏字每年的送分題兼陷阱題。</p>",
          "table": {
            "headers": [
              "數量詞",
              "搭配名詞",
              "語意與例句"
            ],
            "rows": [
              [
                "many／a few／few／several／a number of／a couple of",
                "可數名詞複數",
                "few＝幾乎沒有（否定語氣）：Few workers showed up.｜a few＝有一些（肯定語氣）：A few workers showed up."
              ],
              [
                "much／a little／little／a great deal of／an amount of",
                "不可數名詞",
                "little＝幾乎沒有：We have little time left.｜a little＝還有一點：We have a little time left."
              ],
              [
                "a lot of／lots of／plenty of／some／most／all",
                "可數與不可數皆可",
                "動詞單複數看「of 後面的名詞」：A lot of cement was used.／A lot of bricks were used."
              ],
              [
                "no／none of",
                "可數與不可數皆可",
                "There is no water in the tank.／None of the beams are cracked."
              ],
              [
                "too many／too much",
                "過多（帶負面語氣）",
                "too many defects（可數）／too much noise（不可數）"
              ],
              [
                "the number of vs. a number of",
                "決定動詞單複數的經典陷阱",
                "The number of accidents has dropped.（…的數量，接單數）／A number of accidents have occurred.（許多，接複數）"
              ],
              [
                "分數與百分比 ＋ of",
                "動詞由 of 後的名詞決定",
                "Two-thirds of the budget was spent.（不可數→單數）／Two-thirds of the workers were trained.（複數→複數）"
              ],
              [
                "each／every／either／neither ＋ 單數名詞",
                "一律接單數動詞",
                "Every drawing needs an official stamp.｜Each of the samples was tested."
              ]
            ]
          },
          "steps": [
            "記憶口訣：「有 a 就有貨，沒 a 就沒貨」——a few／a little 表「還有一些」，few／little 表「幾乎沒有」。",
            "quite a few 是「相當多」而非「相當少」：Quite a few students passed the exam. 這是統測經典誘答點。",
            "much 在肯定句中較少單獨使用，多改用 a lot of／a great deal of；much 常見於否定句與疑問句：We do not have much time.",
            "統測非選翻譯常考：「愈來愈多的…」＝More and more…／An increasing number of…（接複數動詞）。"
          ]
        },
        {
          "heading": "14. 介系詞總表：時間・地點・方向・工具・其他",
          "body": "<p>介系詞在統測綜合測驗中平均每份考卷出現三到五題。與其死背，不如掌握 at／on／in 的<strong>「點－線／面－立體空間」空間隱喻</strong>：這個隱喻同時適用於時間與地點兩個維度，一次記憶、兩處通用。</p>\n\n[DIALOGUE_START:介系詞實戰會話：時間與地點的 at／on／in]\nClient: When can we meet at the site? | 我們什麼時候可以在工地碰面？\nArchitect: On Monday at nine, in the meeting room on the second floor. | 星期一早上九點，在二樓的會議室。\nClient: Will the report be ready by then? | 報告到那時候會準備好嗎？\nArchitect: Yes, I will finish it in two days, well before the deadline. | 會的，我兩天內就會完成，遠早於期限。\n[DIALOGUE_END]",
          "table": {
            "headers": [
              "類別",
              "介系詞",
              "用法準則與例句"
            ],
            "rows": [
              [
                "時間（點）",
                "at",
                "鐘點、正午、夜晚、特定時刻：at 8:00、at noon、at night、at the moment"
              ],
              [
                "時間（線）",
                "on",
                "日期、星期、特定某一天的早午晚：on Monday、on May 5、on the morning of May 5"
              ],
              [
                "時間（面／空間）",
                "in",
                "月、季、年、世紀、一段時間「之後」：in July、in 2026、in the 21st century、in two hours（兩小時後）"
              ],
              [
                "時間長度與界限",
                "for／during／since／by／until",
                "for ＋ 一段時間（for three years）｜during ＋ 事件期間（during the typhoon）｜since ＋ 時間起點（配完成式）｜by＝最遲在…之前（動作一次完成）｜until＝直到…為止（狀態持續）"
              ],
              [
                "地點",
                "at／on／in",
                "at＝一個點（at the door、at the bus stop）｜on＝表面或線上（on the wall、on the second floor、on the street）｜in＝立體空間內（in the building、in Taipei）"
              ],
              [
                "方向與移動",
                "to／into／onto／toward／through／across／along／past",
                "walk into the site（進入內部）｜drive across the bridge（橫越表面）｜go through the tunnel（穿越內部）｜walk along the corridor（沿著）"
              ],
              [
                "工具與方式",
                "by／with／in",
                "by ＋ 交通工具（零冠詞）：by bus、by MRT｜with ＋ 具體工具：cut it with a saw｜in ＋ 語言／材料：write in English、in ink"
              ],
              [
                "其他高頻搭配",
                "about, for, of, from, against, despite, besides, except",
                "be responsible for｜be made of（看得出原料）vs. be made from（看不出原料）｜protect A from B｜despite＝in spite of（後接名詞，不接子句）｜besides＝除…之外還有 vs. except＝除…之外都不"
              ]
            ]
          },
          "steps": [
            "空間隱喻記憶法：at 是一個「點」、on 是一條「線／一個面」、in 是一個「立體空間」——這條規則同時解決時間題與地點題。",
            "next、last、this、every、tomorrow、yesterday 之前一律「不加介系詞」：I will see you next Monday.（× on next Monday）",
            "by vs. until 是統測經典對比：Finish it by Friday.（最遲週五完成）／Wait here until Friday.（持續等到週五）。",
            "despite／in spite of 後只能接「名詞或動名詞」；although／though 後才接「子句」——Despite the rain, …／Although it rained, …",
            "非選翻譯高頻介系詞片語：in addition to（除了…還）、according to（根據）、instead of（而非）、because of（因為）、due to（由於）。"
          ]
        },
        {
          "heading": "15. 祈使句・感嘆句・附加問句三大特殊句型",
          "body": "<p>這三種句型在統測<strong>會話題與非選句子重組</strong>中出現頻率極高。祈使句是工地安全指示與操作手冊的標準語體；感嘆句與附加問句則是會話題判斷語氣的關鍵線索。</p>\n\n[DIALOGUE_START:特殊句型會話：安全指示與確認語氣]\nForeman: Wear your helmet at all times, and never touch the live wire. | 隨時戴好安全帽，而且絕對不要碰觸帶電電線。\nWorker: Understood. What a dangerous job this is! | 了解。這工作真是危險啊！\nForeman: You have already signed the safety form, haven't you? | 你已經簽過安全切結書了，對吧？\nWorker: Yes, I have. Let us start the inspection, shall we? | 是的，我簽了。我們開始勘驗吧，好嗎？\n[DIALOGUE_END]",
          "table": {
            "headers": [
              "句型",
              "結構公式",
              "例句與考點"
            ],
            "rows": [
              [
                "祈使句（肯定）",
                "動詞原形 ＋ …（主詞 you 省略）",
                "Wear your helmet at all times.｜Please fill in the form first."
              ],
              [
                "祈使句（否定）",
                "Don't／Never ＋ 動詞原形",
                "Never touch the live wire.｜Don't enter without permission."
              ],
              [
                "祈使句 ＋ and／or",
                "祈使句, and（就會…）／or（否則…）",
                "Hurry up, or you will miss the bus.＝If you don't hurry up, you will miss the bus.｜Work hard, and you will succeed."
              ],
              [
                "Let 祈使句",
                "Let's／Let us ＋ 原形（附加問句用 shall we?）",
                "Let's review the drawing, shall we?｜Let me help you."
              ],
              [
                "感嘆句 What",
                "What ＋ a／an ＋ 形容詞 ＋ 單數可數名詞 ＋ (S ＋ V)!",
                "What a tall building it is!｜What an interesting design!（不可數或複數不加 a／an：What beautiful weather!）"
              ],
              [
                "感嘆句 How",
                "How ＋ 形容詞／副詞 ＋ (S ＋ V)!",
                "How tall the building is!｜How quickly he finished the task!"
              ],
              [
                "附加問句基本原則",
                "前肯後否、前否後肯；用「助動詞 ＋ 代名詞」",
                "You are an apprentice, aren't you?｜He didn't sign it, did he?｜She has finished, hasn't she?"
              ],
              [
                "附加問句五大特例",
                "祈使句→will you?｜Let's→shall we?｜I am→aren't I?｜含 never／seldom／hardly／few／little 視為否定→後接肯定｜There is…→isn't there?",
                "Close the door, will you?｜She hardly ever complains, does she?｜There is a problem, isn't there?"
              ]
            ]
          },
          "steps": [
            "祈使句是所有安全標示與操作手冊的語體：Keep out.（禁止進入）／Handle with care.（小心輕放）／Do not operate without training.",
            "感嘆句判斷法：後面接「名詞」用 What，接「形容詞／副詞」用 How。What a fast car it is!＝How fast the car is!",
            "附加問句的助動詞必須與主句一致：主句用 be 就用 be，用 do 就用 do，用完成式就用 have，用情態助動詞就用該情態助動詞。",
            "附加問句的答覆依「事實」而非中文語感：You didn't go, did you? — No, I didn't.（是的，我沒去）／Yes, I did.（不，我去了）。",
            "句子重組題常見組合：祈使句 ＋ or ＋ 主要子句，或 What／How 感嘆句；看到句尾驚嘆號就先鎖定感嘆句結構。"
          ]
        }
      ],
      "practices": [
        {
          "question": "The construction of the new stadium _______ completed next month.[TTS:The construction of the new stadium _______ completed next month.]",
          "difficulty": "easy",
          "steps": [
            "句尾時間為 next month，表示未來式。",
            "主詞 The construction (建設) 是被完成的，需用被動語態。",
            "未來式的被動語態為 will be + p.p. [TTS:will be + p.p.]。"
          ],
          "answer": "(A) will be[TTS:will be]\n(B) has been[TTS:has been]\n(C) was[TTS:was]\n(D) is[TTS:is]\n\n答案：(A)",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "We have _______ working on this architectural design for three weeks.[TTS:We have _______ working on this architectural design for three weeks.]",
          "difficulty": "mid",
          "steps": [
            "句中有 for three weeks，通常搭配完成式。",
            "空格後為 V-ing (working)，與前面的 have 組合，應為現在完成進行式 (have been + V-ing[TTS:have been + V-ing])。"
          ],
          "answer": "(A) be[TTS:be]\n(B) being[TTS:being]\n(C) been[TTS:been]\n(D) was[TTS:was]\n\n答案：(C)",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "The engineer decided _______ steel instead of wood for the frame.[TTS:The engineer decided _______ steel instead of wood for the frame.]",
          "difficulty": "mid",
          "steps": [
            "動詞 decide 後面固定接不定詞 (to V[TTS:to V]) 作為受詞。",
            "因此選擇 to use[TTS:to use]。"
          ],
          "answer": "(A) use[TTS:use]\n(B) to use[TTS:to use]\n(C) using[TTS:using]\n(D) used[TTS:used]\n\n答案：(B)",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "Steel is much _______ than wood, making it suitable for skyscrapers.[TTS:Steel is much _______ than wood, making it suitable for skyscrapers.]",
          "difficulty": "easy",
          "steps": [
            "句中有 than，表示需要使用比較級。",
            "strong 的比較級為 stronger[TTS:stronger]。",
            "much 可以用來修飾比較級。"
          ],
          "answer": "(A) strong[TTS:strong]\n(B) stronger[TTS:stronger]\n(C) strongest[TTS:strongest]\n(D) more strong[TTS:more strong]\n\n答案：(B)",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "It is essential _______ all safety guidelines at the construction site.[TTS:It is essential _______ all safety guidelines at the construction site.]",
          "difficulty": "mid",
          "steps": [
            "此為虛主詞句型：It is + 形容詞 + to V [TTS:It is + 形容詞 + to V]。",
            "真正的主詞為後面的不定詞片語。"
          ],
          "answer": "(A) follow[TTS:follow]\n(B) following[TTS:following]\n(C) to follow[TTS:to follow]\n(D) followed[TTS:followed]\n\n答案：(C)",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "Before they started digging, the workers _______ the underground pipes.[TTS:Before they started digging, the workers _______ the underground pipes.]",
          "difficulty": "hard",
          "steps": [
            "句子有兩個過去發生的動作。started (開始) 發生在過去。",
            "檢查管線 (check) 發生在開始挖掘之前，即「過去的過去」，應使用過去完成式 (had + p.p. [TTS:had + p.p.])。"
          ],
          "answer": "(A) check[TTS:check]\n(B) are checking[TTS:are checking]\n(C) have checked[TTS:have checked]\n(D) had checked[TTS:had checked]\n\n答案：(D)",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "I found _______ necessary to wear a hard hat in this area.[TTS:I found _______ necessary to wear a hard hat in this area.]",
          "difficulty": "mid",
          "steps": [
            "此為虛受詞句型：S + find/make/think + it + O.C. + to V [TTS:S + find/make/think + it + O.C. + to V]。",
            "空格處需填入虛受詞 it[TTS:it]。"
          ],
          "answer": "(A) that[TTS:that]\n(B) this[TTS:this]\n(C) it[TTS:it]\n(D) them[TTS:them]\n\n答案：(C)",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "The client wants the interior design _______ as soon as possible.[TTS:The client wants the interior design _______ as soon as possible.]",
          "difficulty": "hard",
          "steps": [
            "want + O + to V [TTS:want + O + to V]，但當受詞與動詞間為被動關係時，可接不定詞的被動態 to be p.p. [TTS:to be p.p.]。",
            "the interior design (室內設計) 與 finish (完成) 為被動關係，選項中只有 to be finished[TTS:to be finished] 符合。"
          ],
          "answer": "(A) finish[TTS:finish]\n(B) to finish[TTS:to finish]\n(C) to be finished[TTS:to be finished]\n(D) finishing[TTS:finishing]\n\n答案：(C)",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        }
      ],
      "step0Prerequisites": [
        "五大基本句型 (S+V, S+V+O, S+V+SC, S+V+IO+DO, S+V+O+OC)",
        "be 動詞與一般動詞之第三人稱單數變化 (He works / They work)",
        "規則與不規則動詞三態 (原形、過去式、過去分詞)"
      ]
    },
    {
      "slug": "conversation-daily-use",
      "title": "3. 日常對話與社交情境",
      "desc": "本章節涵蓋日常問候、校園生活、購物餐飲、電話預約等實用會話情境，並介紹英語口語中的連音與弱化現象，最後提供統測對話題的解題策略，幫助同學在考試中快速掌握語意。",
      "status": "done",
      "gradeLevel": 10,
      "examHitRate": 5,
      "covered_question_ids": [
        "111-english-11",
        "111-english-12",
        "111-english-13",
        "111-english-14",
        "111-english-15",
        "111-english-16",
        "111-english-17",
        "111-english-18",
        "111-english-19",
        "111-english-20",
        "112-english-11",
        "112-english-12",
        "112-english-13",
        "112-english-14",
        "112-english-15",
        "112-english-16",
        "112-english-17",
        "112-english-18",
        "112-english-19",
        "112-english-20",
        "113-english-11",
        "113-english-12",
        "113-english-13",
        "113-english-14",
        "113-english-15",
        "113-english-16",
        "113-english-17",
        "113-english-18",
        "113-english-19",
        "113-english-20",
        "114-english-11",
        "114-english-12",
        "114-english-13",
        "114-english-14",
        "114-english-15",
        "114-english-16",
        "114-english-17",
        "114-english-18",
        "114-english-19",
        "114-english-20",
        "115-english-11",
        "115-english-12",
        "115-english-13",
        "115-english-14",
        "115-english-15",
        "115-english-16",
        "115-english-17",
        "115-english-18",
        "115-english-19",
        "115-english-20",
        "110-english-11",
        "110-english-12",
        "110-english-13",
        "110-english-14",
        "110-english-15",
        "110-english-16",
        "110-english-17",
        "110-english-18",
        "110-english-19",
        "110-english-20"
      ],
      "fatalTraps": [
        {
          "wrongThinking": "將英文慣用語依中文字面直接硬翻。",
          "correctThinking": "慣用語具有文化約定成俗的特定含義，需整體理解其語境意圖。",
          "trapDescription": "例如聽到 \"Break a leg!\" 誤以為要折斷腿，實為祝演出順利；聽到 \"Under the weather\" 誤以為在天氣下，實為身體不適。"
        },
        {
          "wrongThinking": "否定疑問句中用中文思維回答 Yes/No。",
          "correctThinking": "英文中回答 Yes 永遠代表事實為「肯定」，No 永遠代表事實為「否定」，與問句是否含有 Not 無關。",
          "trapDescription": "例如問 \"Aren't you going to the site?\" 若要去必須回答 \"Yes, I am.\"，若不去回答 \"No, I am not.\"。"
        }
      ],
      "eliteMentalModels": [
        {
          "technique": "語境意圖識別模型 (Context & Intent Mapping)",
          "explanation": "先抓對話發生的場景（餐廳、機場、工地、辦公室），推斷講話者的社交意圖（請求、建議、抱怨、道謝）。"
        },
        {
          "technique": "社交回應排除法",
          "explanation": "排除語氣過於粗魯、答非所問或文法時態不相符的干擾選項，選取符合商務與社交禮儀的標準回應。"
        }
      ],
      "worked_examples": [
        {
          "question": "A: Excuse me, do you know where the engineering department is?[TTS:Excuse me, do you know where the engineering department is?]\nB: _________\n(A) It is built of concrete.[TTS:It is built of concrete.]\n(B) Yes, it is on the third floor of that brick building.[TTS:Yes, it is on the third floor of that brick building.]\n(C) I am studying civil engineering.[TTS:I am studying civil engineering.]\n(D) The department is very large.[TTS:The department is very large.]",
          "difficulty": "1",
          "steps": [
            "識別問路與地點查詢語境：句型「Do you know where... is?」為間接問句，焦點在於詢問目標建築或單位的具體「方位與地點」。",
            "分析各選項之語義功能：(A) 描述建築材質 (built of concrete)；(C) 說明個人主修 (studying civil engineering)；(D) 描述系館規模 (department is very large)，均非針對地點之答覆。",
            "鎖定正確方位指示：(B) 選項「Yes, it is on the third floor of that brick building.」(在對面那棟紅磚建築三樓) 給出明確樓層與建物特徵，完全切合問路情境。"
          ],
          "answer": "(B) Yes, it is on the third floor of that brick building. [TTS:Yes, it is on the third floor of that brick building.] — 是的，在磚造建築的三樓",
          "hints": [
            "注意問句 where 詢問的是具體位置",
            "找尋提及樓層 (floor) 或建築指示的選項"
          ],
          "commonMistake": "容易誤選 (C) 或 (D) 等含有相關單字 (engineering/department) 的答非所問選項。",
          "eliteShortcut": "問路題秒殺：問 where 直接鎖定介系詞片語 on the third floor / in the building！"
        },
        {
          "question": "A: How would you like your steak?[TTS:How would you like your steak?]\nB: _________\n(A) I like it very much.[TTS:I like it very much.]\n(B) Medium-rare, please.[TTS:Medium-rare, please.]\n(C) It costs 500 dollars.[TTS:It costs 500 dollars.]\n(D) I usually go there by bus.[TTS:I usually go there by bus.]",
          "difficulty": "1",
          "steps": [
            "辨識餐飲服務情境固定用語：「How would you like your steak?」為西方餐廳服務員詢問牛排「熟度 (doneness)」的標準慣用句。",
            "熟度常用表達對照：rare（一分熟）、medium-rare（三分熟）、medium（五分熟）、medium-well（七分熟）、well-done（全熟）。",
            "選項逐一比對排除：(A) 回答喜好程度 (like it very much)；(C) 回答價錢；(D) 回答交通方式，皆屬語境錯誤；唯有 (B)「Medium-rare, please.」為標準熟度應答。"
          ],
          "answer": "(B) Medium-rare, please. [TTS:Medium-rare, please.] — 請給我三分熟",
          "hints": [
            "「How would you like...」在牛排情境問的是熟度而非喜好程度",
            "尋找 rare / medium / well-done 等熟度詞彙"
          ],
          "commonMistake": "將「How would you like」誤譯為「你喜不喜歡」，導致誤選 (A) I like it very much。",
          "eliteShortcut": "熟度黃金句型：How would you like your steak? ⇒ 秒選 rare / medium / well-done！"
        }
      ],
      "illustrations": [
        "context.webp",
        "mechanism.webp",
        "comparison.webp"
      ],
      "concepts": [
        {
          "heading": "1. 問候/道別/道謝/道歉基本句型",
          "body": "日常對話中最基本的交際用語，包含打招呼、結束對話的道別、表達感謝以及道歉的常見說法。\n\n**問候 (Greetings)[TTS:Greetings]:**\n- How is everything going?[TTS:How is everything going?] (最近好嗎？)\n- What's up?[TTS:What's up?] (有什麼新鮮事？)\n\n**道別 (Farewells)[TTS:Farewells]:**\n- Catch you later.[TTS:Catch you later.] (晚點見。)\n- Take care.[TTS:Take care.] (保重。)\n\n**道謝 (Thanking)[TTS:Thanking]:**\n- I really appreciate it.[TTS:I really appreciate it.] (我非常感激。)\n- Thanks a million.[TTS:Thanks a million.] (萬分感謝。)\n\n**道歉 (Apologizing)[TTS:Apologizing]:**\n- I am terribly sorry for the mistake on the blueprint.[TTS:I am terribly sorry for the mistake on the blueprint.] (非常抱歉藍圖上有錯誤。)\n- My apologies.[TTS:My apologies.] (我道歉。)\n\n[DIALOGUE_START:問候與禮儀會話：國際交流破冰]\nJason: Good morning, Mr. Smith! How was your flight to Taipei? | 早安，史密斯先生！您飛往台北的旅程還順利嗎？\nMr. Smith: It was very smooth, thank you. I am glad to meet your engineering team. | 非常順利，謝謝你。很高興能見到你們的工程團隊。\nJason: It is our pleasure. Please let me know if you need anything during your stay. | 這是我們的榮幸。您在停留期間如果有任何需要請隨時告訴我。\nMr. Smith: I appreciate your warm hospitality. | 非常感謝你們熱情的款待。\n[DIALOGUE_END]"
        },
        {
          "heading": "2. 校園生活情境對話",
          "body": "在學校常發生的對話，如討論課業、考試、社團活動或借用文具器材等。對於土木建築群的學生，可能包含討論實習課或繪圖作業。\n\n**實用例句:**\n- Did you finish the drafting assignment for our architecture class?[TTS:Did you finish the drafting assignment for our architecture class?] (你完成我們建築課的製圖作業了嗎？)\n- I need to borrow your compass and ruler.[TTS:I need to borrow your compass and ruler.] (我需要借你的圓規和直尺。)\n- When is the deadline for the structural mechanics report?[TTS:When is the deadline for the structural mechanics report?] (結構力學報告的截止日期是何時？)\n\n[DIALOGUE_START:校園生活會話：專題討論分工]\nLisa: Who is going to prepare the 3D model for our architectural exhibition? | 誰要負責製作我們建築展覽的 3D 模型呢？\nEric: I can handle the SketchUp model if you take care of the structural calculations. | 如果你負責結構計算的部分，我可以來處理 SketchUp 模型。\nLisa: Sounds like a great plan. Let us meet in the computer lab after lunch. | 聽起來是很棒的分工計畫。我們午餐後在電腦教室碰面吧。\nEric: Great! I will bring all the reference drawings. | 太好了！我會把所有的參考圖說帶過去。\n[DIALOGUE_END]"
        },
        {
          "heading": "3. 購物/餐飲/交通情境",
          "body": "生活必備的交易與移動情境，包含詢問價格、點餐、以及問路或搭乘交通工具。\n\n**購物 (Shopping)[TTS:Shopping]:**\n- Do you have this safety helmet in a larger size?[TTS:Do you have this safety helmet in a larger size?] (這頂安全帽有大一點的尺寸嗎？)\n- It's out of stock right now.[TTS:It's out of stock right now.] (現在缺貨。)\n\n**餐飲 (Dining)[TTS:Dining]:**\n- I'd like to order a combo meal to go.[TTS:I'd like to order a combo meal to go.] (我要點一份套餐外帶。)\n- Keep the change.[TTS:Keep the change.] (不用找零了。)\n\n**交通 (Transportation)[TTS:Transportation]:**\n- Which bus goes to the construction site?[TTS:Which bus goes to the construction site?] (哪一班公車有到工地？)\n- Get off at the next intersection.[TTS:Get off at the next intersection.] (在下一個十字路口下車。)\n\n[DIALOGUE_START:購物交通會話：前往建材展覽館]\nTourist: Excuse me, which MRT line should I take to the Nangang Exhibition Center? | 不好意思，請問我該搭哪一條捷運線去南港展覽館？\nStation Staff: Take the Blue Line directly to the terminal station. It takes about twenty minutes. | 搭乘藍線（板南線）直接坐到終點站即可。大約需要二十分鐘。\nTourist: How much is a single journey ticket? | 單程票要多少錢呢？\nStation Staff: It is thirty-five NT dollars. You can purchase it at the ticket machine. | 三十五元新台幣。您可以在自動售票機購買。\n[DIALOGUE_END]"
        },
        {
          "heading": "4. 電話/預約/求助情境",
          "body": "包含打電話找人、留言、預約時間，以及在緊急或需要協助時的對話。\n\n**電話 (Telephone)[TTS:Telephone]:**\n- May I speak to the site manager, please?[TTS:May I speak to the site manager, please?] (請讓我和工地主任講話好嗎？)\n- He is not available at the moment. Can I take a message?[TTS:He is not available at the moment. Can I take a message?] (他現在沒空。需要我記下留言嗎？)\n\n**預約 (Making Appointments)[TTS:Making Appointments]:**\n- I'd like to make an appointment with the architect for next Tuesday.[TTS:I'd like to make an appointment with the architect for next Tuesday.] (我想預約下週二見建築師。)\n\n**求助 (Asking for Help)[TTS:Asking for Help]:**\n- Could you give me a hand with these heavy cement bags?[TTS:Could you give me a hand with these heavy cement bags?] (你能幫我搬這些重水泥袋嗎？)\n\n[DIALOGUE_START:電話預約會話：預約工地導覽]\nSecretary: Grand Horizon Construction, how may I direct your call? | 遠雄營造您好，請問有什麼我可以為您轉接的嗎？\nTeacher: Hello, I would like to book a site visit for twenty civil engineering students. | 您好，我想為二十位土木科學生預約一次工地現場參訪。\nSecretary: Certainly. We have availability on next Thursday morning at ten o'clock. | 好的。我們下週四上午十點有開放參訪名額。\nTeacher: That time works perfectly for our class schedule. Thank you! | 那個時間非常符合我們的課程安排。謝謝您！\n[DIALOGUE_END]"
        },
        {
          "heading": "5. 口語連音與弱化規則",
          "body": "在真實對話中，英語母語人士常將字詞連讀或弱化發音，了解這些規則有助於提升聽力理解。\n\n**連音 (Linking)[TTS:Linking]:**\n子音結尾遇到母音開頭，常會連在一起唸。例如：\n- look at[TTS:look at] -> loo kat[TTS:loo kat]\n- put it on[TTS:put it on] -> pu ti ton[TTS:pu ti ton]\n\n**弱化 (Reduction)[TTS:Reduction]:**\n功能詞(如介系詞、連接詞)在句子中常被弱化。例如：\n- going to[TTS:going to] -> gonna[TTS:gonna]\n- want to[TTS:want to] -> wanna[TTS:wanna]\n- let me[TTS:let me] -> lemme[TTS:lemme]\n\n[DIALOGUE_START:口語連音會話：美語自然語調練習]\nMark: What are you gonna do after finishing the drafting assignment? | 你完成製圖作業之後打算做什麼？\nJenny: I wanna check out the new BIM software tutorial in the library. | 我想去圖書館看一下最新的 BIM 軟體教學影片。\nMark: Could you tell me what you think of its parametric design features? | 你能告訴我你覺得它的參數化設計功能怎麼樣嗎？\nJenny: Sure! It makes 3D modeling so much faster and more accurate. | 當然！它讓 3D 建模變得更快而且更精確。\n[DIALOGUE_END]"
        },
        {
          "heading": "6. 統測對話題解題法",
          "body": "統測對話題通常篇幅不長，關鍵在於迅速抓出對話的「情境(Context)[TTS:Context]」與說話者的「意圖(Intention)[TTS:Intention]」。\n\n**解題步驟:**\n1. **判斷角色關係:** 是朋友、師生、店員與顧客，還是工頭與工人？這會影響用語的正式程度。\n2. **尋找關鍵字:** 注意表達時間、地點、情緒或特定主題的單字。\n3. **利用刪去法:** 排除語氣不對、時態不符或與情境無關的選項。\n4. **前後呼應:** 空格處的答案必須能承接上一句，並自然地引導出下一句。\n\n[DIALOGUE_START:統測對話解題會話：捕捉關鍵轉折詞]\nTutor: In dialogue questions, always pay attention to tone shifts and polite refusals. | 在對話題型中，一定要特別注意語氣轉折與委婉拒絕。\nStudent: Like when a speaker says \"I'd love to, but I have a prior commitment\"? | 就像說話者說「我很想去，但我已經有約了」這樣嗎？\nTutor: Exactly! That indicates a polite \"no\", which usually rules out affirmative choices. | 沒錯！那代表委婉的拒絕，通常可以直接排除肯定的選項。\nStudent: Catching these conversational cues makes answering much easier! | 掌握這些對話線索讓作答變得容易多了！\n[DIALOGUE_END]",
          "table": {
            "headers": [
              "常考情境類別",
              "典型提問與發話句型",
              "標準應對與社交回答",
              "統測高頻陷阱與解題秘訣"
            ],
            "rows": [
              [
                "問候與寒暄 (Greetings [TTS:Greetings])",
                "How is it going? [TTS:How is it going?] / What's up? [TTS:What's up?]",
                "Pretty good. [TTS:Pretty good.] / Not much. [TTS:Not much.]",
                "避免直譯字面；Not much 代表「沒什麼特別的，一切如常」"
              ],
              [
                "購物與退換 (Shopping [TTS:Shopping])",
                "May I try this on? [TTS:May I try this on?] / Any discount? [TTS:Any discount?]",
                "The fitting room is over there. [TTS:The fitting room is over there.] / It is 20% off. [TTS:It is 20% off.]",
                "20% off 是打八折（減價 20%），不是兩折！"
              ],
              [
                "餐廳點餐 (Dining [TTS:Dining])",
                "How would you like your steak? [TTS:How would you like your steak?]",
                "Medium-rare, please. [TTS:Medium-rare, please.] / To go, please. [TTS:To go, please.]",
                "回答熟度 (rare/medium/well-done [TTS:rare, medium, well-done]) 或內用外帶 (for here/to go [TTS:for here, to go])"
              ],
              [
                "電話與預約 (Telephone [TTS:Telephone])",
                "May I speak to Mr. Lin? [TTS:May I speak to Mr. Lin?]",
                "Hold on, please. [TTS:Hold on, please.] / May I take a message? [TTS:May I take a message?]",
                "本人接聽回答「This is he/she speaking. [TTS:This is he speaking.]」勿回答「I am Lin.」"
              ],
              [
                "問路與交通 (Directions [TTS:Directions])",
                "Could you tell me how to get to...? [TTS:Could you tell me how to get to the station?]",
                "Go straight for two blocks and turn left. [TTS:Go straight for two blocks and turn left.]",
                "注意介系詞搭配 (on the corner of [TTS:on the corner of], opposite to [TTS:opposite to], across from [TTS:across from])"
              ],
              [
                "請求與道歉 (Requests [TTS:Requests])",
                "Would you mind helping me with this? [TTS:Would you mind helping me with this?]",
                "Not at all. [TTS:Not at all.] / I would be glad to. [TTS:I would be glad to.]",
                "Mind 問句回答「Not at all [TTS:Not at all] / Of course not [TTS:Of course not]」表示「不介意＝同意幫忙」"
              ]
            ]
          }
        },
        {
          "heading": "7. 統測高頻進階情境會話（看病醫療、飯店住宿、機場海關與委婉拒絕）",
          "body": "<p>近年統測英文對話題逐漸跳脫傳統問候與天氣，大量融入「國外差旅、飯店入住、就診醫療與機場安檢海關」等成年人真實世界溝通情境。熟記各情境的關鍵觸發問句與應對回答，能助你穩拿對話題滿分！</p>\n\n[DIALOGUE_START:進階情境會話：飯店入住與商務差旅]\nReceptionist: Welcome to Grand Hyatt Taipei. How may I assist you today? | 歡迎蒞臨台北君悅酒店。今天有什麼能為您服務的嗎？\nGuest: I would like to check in, please. I have a reservation under Lin. | 我想辦理入住。我有用林先生的名字預約訂房。\nReceptionist: Certainly, Mr. Lin. Your deluxe room is ready on the 12th floor. Complimentary breakfast is served from 6:30 to 10:00 a.m. | 好的，林先生。您在 12 樓的豪華客房已經準備好了。免費早餐供應時間為上午 6:30 至 10:00。\nGuest: Wonderful! What time is check-out tomorrow? | 太棒了！請問明天幾點前需要退房？\nReceptionist: Check-out time is twelve noon. Enjoy your stay with us! | 退房時間是中午十二點整。祝您住宿愉快！\n[DIALOGUE_END]",
          "table": {
            "headers": [
              "生活與差旅情境",
              "典型核心問句與發話句",
              "標準回覆與慣用語句",
              "統測命中要點"
            ],
            "rows": [
              [
                "看病醫療 (Clinic & Pharmacy [TTS:Clinic & Pharmacy])",
                "What seems to be the problem? [TTS:What seems to be the problem?] / Do you have any allergies? [TTS:Do you have any allergies?]",
                "I have a terrible headache and fever. [TTS:I have a terrible headache and fever.] / Take this medicine after meals. [TTS:Take this medicine after meals.]",
                "症狀字彙：fever (發燒), sore throat (喉嚨痛), dizziness (頭暈), allergic to (對...過敏)"
              ],
              [
                "飯店住宿 (Hotel Check-in [TTS:Hotel Check-in])",
                "I have a reservation under the name... [TTS:I have a reservation under the name Lin.] / Is breakfast included? [TTS:Is breakfast included?]",
                "Here is your room keycard. [TTS:Here is your room keycard.] / Check-out is by 11:00 AM. [TTS:Check-out is by 11:00 AM.]",
                "reservation (預訂), deposit (押金), complimentary (免費贈送的), vacancy (空房)"
              ],
              [
                "機場與海關 (Airport & Customs [TTS:Airport & Customs])",
                "Window or aisle seat? [TTS:Window or aisle seat?] / What is the purpose of your visit? [TTS:What is the purpose of your visit?]",
                "I'm traveling for business. [TTS:I'm traveling for business.] / Nothing to declare. [TTS:Nothing to declare.]",
                "aisle (走道), boarding pass (登機證), declare (申報), pleasure vs business (觀光 vs 出差)"
              ],
              [
                "委婉拒絕 (Polite Refusals [TTS:Polite Refusals])",
                "Would you like to join us for dinner tonight? [TTS:Would you like to join us for dinner tonight?]",
                "I would love to, but I have a prior engagement. [TTS:I would love to, but I have a prior engagement.] / I wish I could, but I am tied up. [TTS:I wish I could, but I am tied up.]",
                "看到 but 後面接「prior commitment / tied up (忙得不可開交)」，代表客氣婉拒"
              ]
            ]
          }
        },
        {
          "heading": "8. 統測會話題必背功能句 120：同意・反對・建議・邀約・婉拒",
          "body": "<p>統測會話題（第二大題）共 10 題，考的不是艱深單字，而是<strong>「功能語言」(functional language)</strong>——同一個溝通功能有哪些固定說法。把功能句依「功能別」整理成表，等於把 10 題的答案來源全部背進腦裡。</p>\n\n[DIALOGUE_START:功能句實戰會話：提出建議與婉轉拒絕]\nAmy: Why don't we visit the construction site this Friday? | 我們何不這個星期五去參觀工地？\nBen: I'd love to, but I'm afraid I have a class then. | 我很想去，但恐怕我那時候有課。\nAmy: How about Saturday morning instead? | 那改成星期六早上如何？\nBen: That sounds great. Count me in. | 聽起來很棒，算我一份。\n[DIALOGUE_END]",
          "table": {
            "headers": [
              "溝通功能",
              "常用功能句（由客氣到直接）",
              "回應與延伸"
            ],
            "rows": [
              [
                "提出建議",
                "Why don't we…?｜How about ＋ V-ing?｜What about…?｜Let's…｜Shall we…?｜I suggest (that) we…",
                "接受：Sounds good.／That works for me.／Count me in.｜保留：Let me think about it."
              ],
              [
                "表示同意",
                "I couldn't agree more.（最強同意）｜You can say that again.｜Exactly.｜That's just what I was thinking.｜Absolutely.",
                "注意 I couldn't agree more. 是「完全同意」而非「不同意」，統測經典陷阱。"
              ],
              [
                "表示反對",
                "I'm afraid I disagree.｜I see your point, but…｜I'm not so sure about that.｜That's not quite right.",
                "先緩衝再反對是英語禮貌原則：I see your point, but…"
              ],
              [
                "邀約",
                "Would you like to…?｜Are you free on…?｜Do you want to join us?｜I was wondering if you'd like to…",
                "接受：I'd love to.／Sure, why not?｜婉拒：I'd love to, but…"
              ],
              [
                "婉拒",
                "I'd love to, but…｜I'm afraid I can't.｜Thanks for asking, but…｜Maybe some other time.",
                "英語婉拒必含「感謝＋理由」，直接說 No. 在會話題中通常是錯誤選項。"
              ],
              [
                "請求協助",
                "Could you (please)…?｜Would you mind ＋ V-ing?｜Do you think you could…?｜I'd appreciate it if you could…",
                "Would you mind…? 的答覆邏輯相反：Not at all.／Of course not.＝我不介意（願意幫忙）。"
              ],
              [
                "請求許可",
                "May I…?｜Could I…?｜Is it OK if I…?｜Do you mind if I…?",
                "許可：Go ahead.／Sure, feel free.｜拒絕：I'm afraid not.／Sorry, that's not allowed."
              ],
              [
                "道歉與回應",
                "I'm terribly sorry.｜I do apologize for…｜It's my fault.｜Please accept my apologies.",
                "回應：That's all right.／No worries.／Never mind.／Don't worry about it."
              ]
            ]
          },
          "steps": [
            "會話題解法三步：① 先看「問句的功能」是建議、邀約還是請求 ② 再看選項是否「功能對應」 ③ 最後檢查時態與人稱是否一致。",
            "Would you mind…? 與 Do you mind…? 的答覆是統測年年出現的反向陷阱：答應幫忙要說 Not at all.／Of course not.，拒絕才說 I'm afraid I do.",
            "英語婉拒的黃金公式：感謝 ＋ 遺憾 ＋ 理由 ＋ 替代方案（Thanks for asking. I'd love to, but I have a class. How about next week?）。",
            "統測會話題誘答選項的三大特徵：語意相反、時態錯置、答非所問（回答了沒被問到的事）。"
          ]
        },
        {
          "heading": "9. 生活服務情境：銀行・郵局・租屋・維修報修",
          "body": "<p>統測會話題與應用文閱讀常出現「生活辦事」場景。這些情境有固定的<strong>對話腳本 (script)</strong>：櫃檯問候 → 說明需求 → 提供證件／資訊 → 確認金額或時間 → 收尾致謝。熟悉腳本，選項一看就能對號入座。</p>\n\n[DIALOGUE_START:生活服務會話：租屋看房與設備報修]\nTenant: I'm calling about the apartment listed online. Is it still available? | 我打電話是想問網路上刊登的那間公寓，還租得到嗎？\nLandlord: Yes, it is. The rent is 12,000 NT dollars a month, utilities not included. | 還有。租金是每月一萬二千元，不含水電。\nTenant: Could I make an appointment to take a look this weekend? | 我可以預約這週末去看房嗎？\nLandlord: Sure. Also, please let me know right away if anything breaks down. | 當然可以。另外，如果有東西壞掉請立刻告訴我。\n[DIALOGUE_END]",
          "table": {
            "headers": [
              "情境",
              "關鍵句型與用語",
              "常考搭配字"
            ],
            "rows": [
              [
                "銀行",
                "I'd like to open an account.｜I want to deposit／withdraw 5,000 dollars.｜Could you break this bill?｜What's the exchange rate today?",
                "account 帳戶｜deposit 存款｜withdraw 提款｜balance 餘額｜interest rate 利率｜ATM 提款機"
              ],
              [
                "郵局",
                "I'd like to send this by registered mail.｜How much is the postage?｜How long will it take to arrive?｜I need to fill out a customs form.",
                "postage 郵資｜registered mail 掛號｜parcel 包裹｜zip code 郵遞區號｜delivery 投遞"
              ],
              [
                "租屋",
                "Is the apartment still available?｜How much is the rent per month?｜Are utilities included?｜Is there a deposit?",
                "rent 租金｜lease 租約｜deposit 押金｜utilities 水電瓦斯｜landlord 房東｜tenant 房客｜furnished 附家具的"
              ],
              [
                "報修與客訴",
                "The air conditioner isn't working.｜There's something wrong with the water heater.｜Could you send someone to fix it?｜It broke down this morning.",
                "out of order 故障｜leak 漏水｜repair／fix 修理｜replace 更換｜warranty 保固"
              ],
              [
                "超商與繳費",
                "I'd like to pay this bill.｜Can I pay by credit card?｜Do you need a receipt?｜Could I have a plastic bag?",
                "bill 帳單｜receipt 收據｜invoice 發票／請款單｜change 找零｜in cash 付現"
              ],
              [
                "醫療掛號",
                "I'd like to make an appointment with Dr. Chen.｜I have a fever and a sore throat.｜Do I need to bring my NHI card?",
                "appointment 預約｜symptom 症狀｜prescription 處方箋｜pharmacy 藥局｜insurance 保險"
              ],
              [
                "洗衣與修改",
                "I'd like to have this jacket dry-cleaned.｜Could you take in the waist?｜When will it be ready?",
                "dry-clean 乾洗｜alter 修改｜stain 污漬｜pick up 取件"
              ],
              [
                "失物招領",
                "I think I left my bag on the bus.｜Has anyone turned in a black wallet?｜Could you check the lost and found?",
                "lost and found 失物招領處｜turn in 上繳｜describe 描述｜claim 認領"
              ]
            ]
          },
          "steps": [
            "情境會話背誦法：每個場景只需牢記「三句話」——說明來意、詢問細節、確認收尾，其餘皆為變化。",
            "服務業英語的固定回應：How may I help you?／Is there anything else?／Have a nice day. 這三句幾乎必出現在會話題選項中。",
            "報修情境的三種說法必須都認得：It's not working.／It's out of order.／There's something wrong with it. 三者同義。",
            "金額與時間是應用文閱讀的必問細節，看到數字立刻圈起來，回答細節題時可直接定位。"
          ]
        },
        {
          "heading": "10. 求職與打工情境：面試、履歷與工讀溝通",
          "body": "<p>技術型高中學生升學與就業並行，統測會話題與閱讀測驗因此常出現<strong>求職面試與打工</strong>場景。這些對話的重點在「自我介紹的結構」與「詢問工作條件的用語」，也是未來實際職場的必備能力。</p>\n\n[DIALOGUE_START:求職面試會話：自我介紹與詢問條件]\nInterviewer: Could you tell me a little about yourself? | 可以簡單介紹一下你自己嗎？\nApplicant: Sure. I major in architecture and I'm skilled at AutoCAD drafting. | 當然。我主修建築，並且擅長 AutoCAD 製圖。\nInterviewer: Why are you interested in this position? | 你為什麼對這個職位有興趣？\nApplicant: I'd like to gain hands-on experience on a real construction site. | 我想在真實工地上獲得實務經驗。\n[DIALOGUE_END]",
          "table": {
            "headers": [
              "情境階段",
              "關鍵句型",
              "高頻用字"
            ],
            "rows": [
              [
                "應徵與投遞",
                "I'd like to apply for the position of…｜I saw your job opening online.｜I'm sending my résumé as an attachment.",
                "apply for 應徵｜position／opening 職缺｜résumé／CV 履歷｜attachment 附件｜cover letter 求職信"
              ],
              [
                "自我介紹",
                "I major in…｜I'm skilled at／good at…｜I have two years of experience in…｜I'm a quick learner.",
                "major in 主修｜be skilled at 擅長｜experience 經驗｜strength 優點｜qualification 資格"
              ],
              [
                "說明動機",
                "I'm interested in this position because…｜I'd like to gain hands-on experience.｜I want to develop my professional skills.",
                "motivation 動機｜hands-on 實作的｜career goal 職涯目標｜contribute to 貢獻於"
              ],
              [
                "詢問工作條件",
                "What are the working hours?｜Is the position full-time or part-time?｜What is the hourly wage?｜Do you provide training?",
                "full-time 全職｜part-time 兼職｜shift 輪班｜hourly wage 時薪｜overtime 加班｜benefits 福利"
              ],
              [
                "面試常見提問",
                "What are your strengths and weaknesses?｜Where do you see yourself in five years?｜Can you work under pressure?",
                "strength 優點｜weakness 缺點｜under pressure 在壓力下｜teamwork 團隊合作"
              ],
              [
                "結束與後續",
                "Thank you for your time.｜When can I expect to hear from you?｜I look forward to hearing from you.",
                "look forward to ＋ V-ing 期待｜follow up 後續追蹤｜offer 錄取通知"
              ],
              [
                "打工日常溝通",
                "Could I switch shifts with you?｜I need to take a day off next Monday.｜What should I do first?",
                "switch shifts 換班｜take a day off 請一天假｜clock in／out 打卡上下班｜break 休息時間"
              ],
              [
                "職場禮貌用語",
                "Would you mind showing me how to do this?｜Sorry to bother you, but…｜Thanks for your help.",
                "bother 打擾｜in charge of 負責｜report to 向…回報｜on duty 值班中"
              ]
            ]
          },
          "steps": [
            "自我介紹的黃金三段式：身分／主修 → 專長與經驗 → 應徵動機，三句話就能完整回答 Tell me about yourself.",
            "look forward to 的 to 是介系詞，後面必接名詞或動名詞：I look forward to hearing from you.（× to hear）——統測非選高頻扣分點。",
            "apply for ＋ 職位／apply to ＋ 公司或學校，兩者介系詞不同，克漏字常考。",
            "履歷與求職信屬於統測應用文閱讀常見文本，要熟悉其固定欄位：Personal Information／Education／Work Experience／Skills／References。"
          ]
        },
        {
          "heading": "11. 問路指路與方位指示：介系詞與祈使句的實戰整合",
          "body": "<p>問路指路題是統測會話題與圖表題的<strong>交叉考點</strong>：題目常搭配一張簡易街道圖，要求依對話內容找出目的地。解題關鍵是把「祈使句 ＋ 方位介系詞」的指令，逐步在地圖上轉換成路徑。</p>\n\n[DIALOGUE_START:問路指路會話：從車站走到工地辦公室]\nVisitor: Excuse me, how can I get to the site office? | 不好意思，請問工地辦公室怎麼走？\nGuard: Go straight for two blocks, then turn left at the intersection. | 直走兩個街區，然後在十字路口左轉。\nVisitor: Is it far from here? | 離這裡遠嗎？\nGuard: No, it's just across from the parking lot, next to the blue container. | 不遠，就在停車場對面，藍色貨櫃屋旁邊。\n[DIALOGUE_END]",
          "table": {
            "headers": [
              "功能",
              "常用句型與指令",
              "方位用語辨析"
            ],
            "rows": [
              [
                "開場問路",
                "Excuse me, how can I get to…?｜Could you tell me the way to…?｜Do you know where … is?｜Is there a … near here?",
                "問路務必以 Excuse me 開頭，直接問路在會話題中屬於失禮選項。"
              ],
              [
                "直行指令",
                "Go straight (ahead) for two blocks.｜Keep going until you see…｜Walk down this street.",
                "block 街區｜ahead 前方｜until 直到…為止"
              ],
              [
                "轉彎指令",
                "Turn left／right at the intersection.｜Take the second right.｜Make a U-turn.",
                "intersection 十字路口｜corner 轉角｜traffic light 紅綠燈｜crosswalk 斑馬線"
              ],
              [
                "相對位置",
                "It's on your left／right.｜It's across from the bank.｜It's next to／beside the post office.｜It's between A and B.",
                "across from＝opposite 對面｜next to＝beside 旁邊｜between 兩者之間｜among 三者之中"
              ],
              [
                "前後與周邊",
                "It's in front of the station.｜It's behind the library.｜It's around the corner.｜It's at the end of the street.",
                "in front of 在…前面（外部）vs. in the front of 在…內部前方"
              ],
              [
                "樓層與室內",
                "It's on the third floor.｜Take the elevator to the fifth floor.｜It's at the end of the hallway.",
                "floor 樓層｜elevator／lift 電梯｜stairs 樓梯｜hallway 走廊｜basement 地下室"
              ],
              [
                "距離與時間",
                "It's about a five-minute walk.｜It's two blocks away.｜You can't miss it.",
                "a five-minute walk（複合形容詞不加 s）｜away 距離｜You can't miss it.＝很好找"
              ],
              [
                "交通建議",
                "You'd better take the MRT.｜Transfer to the blue line at Main Station.｜Get off at the third stop.",
                "transfer 轉乘｜get on／off 上下車｜stop 站牌｜fare 車資"
              ]
            ]
          },
          "steps": [
            "解題時在圖上「邊讀邊畫」：讀到 go straight 就畫箭頭，讀到 turn left 就轉向，最後落點即為答案。",
            "a five-minute walk 這類複合形容詞中間的名詞一律用單數：a two-hour meeting、a ten-meter beam。",
            "in front of（在外部前方）與 in the front of（在內部前排）差一個 the 意思完全不同，是統測經典細節陷阱。",
            "指路一律使用祈使句（動詞原形開頭），這也是複習祈使句句型的最佳實戰場景。"
          ]
        },
        {
          "heading": "12. 會話題四大誘答陷阱辨識矩陣與應答邏輯",
          "body": "<p>統測會話題的錯誤選項不是隨機亂寫，而是依<strong>四種固定模式</strong>設計。認得這四種模式，即使不完全確定正解，也能靠刪去法把命中率拉到八成以上。</p>",
          "table": {
            "headers": [
              "陷阱類型",
              "設計手法",
              "辨識線索與實例"
            ],
            "rows": [
              [
                "① 答非所問（Wrong Function）",
                "選項文法正確、語意通順，但回答的不是題目問的功能",
                "問 How long…?（時程）卻答 It's about 500 dollars.（金額）｜先問自己「題目在問時間、地點、原因還是數量？」"
              ],
              [
                "② 時態與時間錯置",
                "選項時態與問句不符，或時間副詞矛盾",
                "問 What did you do yesterday? 卻答 I will visit the site.｜圈出問句的時態標記字 (yesterday／tomorrow／already)"
              ],
              [
                "③ 語意相反（Polarity Trap）",
                "利用否定問句、mind 類動詞或雙重否定製造反向",
                "Would you mind opening the window? — Not at all.（＝願意）｜I couldn't agree more.（＝完全同意）｜You don't like it, do you? — No, I don't.（＝我不喜歡）"
              ],
              [
                "④ 禮貌層級不符",
                "回答過於直接、失禮，或客套語用錯場合",
                "被邀約時直接答 No.（失禮）｜正解通常含 I'd love to, but…／I'm afraid…／Thanks for asking."
              ],
              [
                "⑤ 人稱與指涉錯亂",
                "代名詞指涉對象與情境不符",
                "對方問 Can you help me? 卻答 Sure, he can.｜檢查 I／you／he 是否對得上說話者"
              ],
              [
                "⑥ 硬套中文直譯",
                "把中文口語直接翻成英文而不合英語習慣",
                "「不用客氣」不是 No need polite.，而是 You're welcome.／Don't mention it.／My pleasure."
              ],
              [
                "⑦ 詞彙外觀相似干擾",
                "選項含拼字近似但語意無關的字",
                "Could you lend me…?（借出）vs. borrow（借入）｜bring（帶來）vs. take（帶走）"
              ],
              [
                "⑧ 過度資訊（Over-answering）",
                "選項提供大量無關細節，掩蓋未回答核心問題",
                "回答冗長卻沒回應問句核心 → 直接刪除"
              ]
            ]
          },
          "steps": [
            "第一步：先讀「問句」而非選項，在心中預測答案應具備的功能（時間？地點？同意？婉拒？）。",
            "第二步：快速掃描四個選項，先刪除時態錯置與人稱錯亂者（通常可刪掉一到兩個）。",
            "第三步：在剩餘選項中判斷「功能是否對應」，功能不符即刪。",
            "第四步：若仍有兩個選項難分，選「較禮貌、較完整」的那一個，英語會話題偏好委婉表達。",
            "考前實戰：把近五年統測會話題的正解全部抄成一份「功能句清單」，反覆朗讀十遍，語感自然成形。"
          ]
        }
      ],
      "practices": [
        {
          "question": "A: Hello, this is John from Apex Construction. May I speak to Mr. Lin?[TTS:Hello, this is John from Apex Construction. May I speak to Mr. Lin?]\nB: I am sorry, but he is in a meeting right now. _________[TTS:I am sorry, but he is in a meeting right now. _________]\n(A) Do you want to leave a message?[TTS:Do you want to leave a message?]\n(B) He is a good engineer.[TTS:He is a good engineer.]\n(C) You have the wrong number.[TTS:You have the wrong number.]\n(D) The building is very tall.[TTS:The building is very tall.]",
          "difficulty": "2",
          "steps": [
            "此為電話情境。A想找Mr. Lin[TTS:Mr. Lin]，B回答Mr. Lin[TTS:Mr. Lin]正在開會。",
            "接下來B最合理的反應是詢問A是否要留言或稍後再撥。",
            "(A) 你要留言嗎？(合理)\n(B) 他是個好工程師 (不符合對話邏輯)\n(C) 你打錯電話了 (既然說在開會，表示沒打錯)\n(D) 建築物很高 (無關)"
          ],
          "answer": "(A) Do you want to leave a message?[TTS:Do you want to leave a message?]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "A: Excuse me, _________[TTS:Excuse me, _________]\nB: Go straight for two blocks and turn left. You will see it on your right.[TTS:Go straight for two blocks and turn left. You will see it on your right.]\n(A) what time does the train leave?[TTS:what time does the train leave?]\n(B) how much is this jacket?[TTS:how much is this jacket?]\n(C) can you tell me how to get to the hardware store?[TTS:can you tell me how to get to the hardware store?]\n(D) do you know who designed this bridge?[TTS:do you know who designed this bridge?]",
          "difficulty": "2",
          "steps": [
            "分析B的回答：「直走兩個街區然後左轉。你就會看到它在你的右手邊。」這是在報路。",
            "因此A必定是問路。",
            "選項(C)「你能告訴我怎麼去五金行嗎？」符合問路的語境。"
          ],
          "answer": "(C) can you tell me how to get to the hardware store?[TTS:can you tell me how to get to the hardware store?]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "A: I heard you passed the surveying licensing exam. _________[TTS:I heard you passed the surveying licensing exam. _________]\nB: Thanks! I studied really hard for it.[TTS:Thanks! I studied really hard for it.]\n(A) What a pity![TTS:What a pity!]\n(B) Congratulations![TTS:Congratulations!]\n(C) I am sorry to hear that.[TTS:I am sorry to hear that.]\n(D) Better luck next time.[TTS:Better luck next time.]",
          "difficulty": "1",
          "steps": [
            "A說聽聞B通過了測量執照考試。這是一件好事。",
            "B回答「謝謝！我很努力準備」。",
            "A應該是表達祝賀。(B) Congratulations![TTS:Congratulations!] (恭喜！) 是正確答案。"
          ],
          "answer": "(B) Congratulations![TTS:Congratulations!]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "A: Would you mind opening the window? It's getting stuffy in here with all the paint fumes.[TTS:Would you mind opening the window? It's getting stuffy in here with all the paint fumes.]\nB: _________ I'll do it right away.[TTS:_________ I'll do it right away.]\n(A) Yes, I do mind.[TTS:Yes, I do mind.]\n(B) Not at all.[TTS:Not at all.]\n(C) You'd better not.[TTS:You'd better not.]\n(D) I am afraid I can't.[TTS:I am afraid I can't.]",
          "difficulty": "3",
          "steps": [
            "A詢問：「你介意打開窗戶嗎？這裡油漆味變得很悶。」(Would you mind...?[TTS:Would you mind...?])",
            "B回答「我馬上做 (I'll do it right away.[TTS:I'll do it right away.])」，表示B願意開窗。",
            "對Would you mind[TTS:Would you mind]的回答，如果不介意(願意幫忙)，要用否定詞如 Not at all[TTS:Not at all] (一點也不介意) 或 No, of course not[TTS:No, of course not]。",
            "選(B)。"
          ],
          "answer": "(B) Not at all.[TTS:Not at all.]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "A: _________\nB: Yes, I am looking for a specific type of floor tile for my bathroom.[TTS:Yes, I am looking for a specific type of floor tile for my bathroom.]\n(A) What are you looking at?[TTS:What are you looking at?]\n(B) Can I help you find something?[TTS:Can I help you find something?]\n(C) How much do you want to pay?[TTS:How much do you want to pay?]\n(D) Do you like my new bathroom?[TTS:Do you like my new bathroom?]",
          "difficulty": "2",
          "steps": [
            "B回答：「是的，我在尋找一種特定類型的浴室地磚。」這通常發生在商店裡，B是顧客。",
            "因此A應該是店員，且A的問題是個Yes/No[TTS:Yes/No]問句(因為B回答Yes[TTS:Yes])。",
            "(B) 「需要我幫您找什麼嗎？」是店員招呼顧客的常見用語，符合情境。"
          ],
          "answer": "(B) Can I help you find something?[TTS:Can I help you find something?]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "A: I'm terribly sorry for dropping your architectural model.[TTS:I'm terribly sorry for dropping your architectural model.]\nB: _________ Just be more careful next time.[TTS:_________ Just be more careful next time.]\n(A) You are welcome.[TTS:You are welcome.]\n(B) That's a good idea.[TTS:That's a good idea.]\n(C) Don't worry about it.[TTS:Don't worry about it.]\n(D) I appreciate it.[TTS:I appreciate it.]",
          "difficulty": "2",
          "steps": [
            "A表達道歉：「非常抱歉摔壞了你的建築模型。」",
            "B回答：「下次小心點就好。」",
            "空格處應為接受道歉的用語。(C) Don't worry about it.[TTS:Don't worry about it.] (別擔心/沒關係) 是最合適的回答。"
          ],
          "answer": "(C) Don't worry about it.[TTS:Don't worry about it.]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "A: Did you remember to bring the safety boots to the site today?[TTS:Did you remember to bring the safety boots to the site today?]\nB: Oh no! _________[TTS:Oh no! _________]\n(A) I left them in my locker.[TTS:I left them in my locker.]\n(B) I will buy you a drink.[TTS:I will buy you a drink.]\n(C) They are very expensive.[TTS:They are very expensive.]\n(D) The site is dangerous.[TTS:The site is dangerous.]",
          "difficulty": "2",
          "steps": [
            "A問：「你今天有記得帶安全靴來工地嗎？」",
            "B驚呼「Oh no![TTS:Oh no!] (喔不！)」，表示B忘記帶了。",
            "空格處必須解釋為什麼B說Oh no[TTS:Oh no]。(A)「我把它們留在置物櫃裡了」合理地解釋了忘記帶的情況。"
          ],
          "answer": "(A) I left them in my locker.[TTS:I left them in my locker.]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "A: What time does the structural mechanics lecture start?[TTS:What time does the structural mechanics lecture start?]\nB: _________\n(A) It starts at 9:00 AM.[TTS:It starts at 9:00 AM.]\n(B) It is in room 101.[TTS:It is in room 101.]\n(C) Professor Smith teaches it.[TTS:Professor Smith teaches it.]\n(D) I forgot to bring my textbook.[TTS:I forgot to bring my textbook.]",
          "difficulty": "1",
          "steps": [
            "A問：「結構力學的講座什麼時候開始？」此為詢問時間(What time[TTS:What time])。",
            "B應該回答時間。",
            "(A) 回答了具體時間「9:00 AM」，因此為正確答案。"
          ],
          "answer": "(A) It starts at 9:00 AM.[TTS:It starts at 9:00 AM.]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        }
      ],
      "step0Prerequisites": [
        "基礎日常問候與禮貌用語",
        "常見疑問詞 (Who, What, Where, When, Why, How)",
        "情態助動詞 (Can, May, Would, Could) 之基本禮貌用法"
      ]
    },
    {
      "slug": "reading-comprehension",
      "title": "4. 閱讀理解與策略",
      "desc": "掌握閱讀四大核心策略：略讀(Skimming)、掃讀(Scanning)、上下文猜字義(Context Clues[TTS:Context Clues])及段落結構分析。有效破解統測英文閱讀測驗中的主旨題、細節題與推論題。",
      "status": "done",
      "gradeLevel": 10,
      "examHitRate": 5,
      "covered_question_ids": [
        "111-english-29",
        "111-english-30",
        "111-english-31",
        "111-english-32",
        "111-english-33",
        "111-english-34",
        "111-english-35",
        "111-english-36",
        "111-english-37",
        "111-english-38",
        "111-english-39",
        "111-english-40",
        "111-english-41",
        "111-english-42",
        "112-english-29",
        "112-english-30",
        "112-english-31",
        "112-english-32",
        "112-english-33",
        "112-english-34",
        "112-english-35",
        "112-english-36",
        "112-english-37",
        "112-english-38",
        "112-english-39",
        "112-english-40",
        "112-english-41",
        "112-english-42",
        "113-english-29",
        "113-english-30",
        "113-english-31",
        "113-english-32",
        "113-english-33",
        "113-english-34",
        "113-english-35",
        "113-english-36",
        "113-english-37",
        "113-english-38",
        "113-english-39",
        "113-english-40",
        "113-english-41",
        "113-english-42",
        "114-english-29",
        "114-english-30",
        "114-english-31",
        "114-english-32",
        "114-english-33",
        "114-english-34",
        "114-english-35",
        "114-english-36",
        "114-english-37",
        "114-english-38",
        "114-english-39",
        "114-english-40",
        "114-english-41",
        "114-english-42",
        "115-english-29",
        "115-english-30",
        "115-english-31",
        "115-english-32",
        "115-english-33",
        "115-english-34",
        "115-english-35",
        "115-english-36",
        "115-english-37",
        "115-english-38",
        "115-english-39",
        "115-english-40",
        "115-english-41",
        "115-english-42",
        "110-english-29",
        "110-english-30",
        "110-english-31",
        "110-english-32",
        "110-english-33",
        "110-english-34",
        "110-english-35",
        "110-english-36",
        "110-english-37",
        "110-english-38",
        "110-english-39",
        "110-english-40",
        "110-english-41",
        "110-english-42"
      ],
      "fatalTraps": [
        {
          "wrongThinking": "看到選項有原文中出現過的單字就直接選，忽略否定詞或修飾詞已改變原意。",
          "correctThinking": "統測命題常以原文字詞設計「以偏概全」或「偷換概念」的干擾選項，必須比對完整句意與邏輯關係。",
          "trapDescription": "正確答案通常是原文關鍵訊息的「同義改寫 (Paraphrase)」，而非原詞死板照抄。"
        }
      ],
      "eliteMentalModels": [
        {
          "technique": "略讀與掃讀雙軌模型 (Skimming & Scanning)",
          "explanation": "先用 30 秒略讀首尾段抓取文章主旨 (Main Idea)，再依題目關鍵字快速掃讀定位段落細節 (Locating Details)。"
        },
        {
          "technique": "同義改寫對照法 (Paraphrasing Match)",
          "explanation": "將題目選項的核心動詞與形容詞，與文章定位句進行同義詞比對，鎖定語意完全對應之正確選項。"
        }
      ],
      "worked_examples": [
        {
          "question": "Read the following passage and answer the question.\n\nConcrete is one of the most common materials used in construction. It is made by mixing cement, water, sand, and gravel. Once mixed, it can be poured into different shapes before it hardens. Because it is very strong and durable, concrete is often used for building foundations, walls, and bridges. However, it can crack if the temperature changes quickly.\n\nWhat is the main idea of this passage?[TTS:Read the following passage and answer the question.\n\nConcrete is one of the most common materials used in construction. It is made by mixing cement, water, sand, and gravel. Once mixed, it can be poured into different shapes before it hardens. Because it is very strong and durable, concrete is often used for building foundations, walls, and bridges. However, it can crack if the temperature changes quickly.\n\nWhat is the main idea of this passage?]",
          "difficulty": "2",
          "steps": [
            "步驟一：觀察題目問的是「main idea[TTS:main idea](主旨)」，代表答案需要涵蓋整段文章的核心概念，通常可以在文章的第一句或最後一句找到線索。",
            "步驟二：閱讀第一句話「Concrete is one of the most common materials used in construction.[TTS:Concrete is one of the most common materials used in construction.]」(混凝土是建築中最常用的材料之一)。",
            "步驟三：檢視後續句子，發現全都在說明混凝土的成分(mixing cement, water...[TTS:mixing cement, water...])、特性(strong, durable[TTS:strong, durable])以及應用(foundations, walls, bridges[TTS:foundations, walls, bridges])。",
            "步驟四：綜合判斷，整段文章都在介紹混凝土作為建築材料的基本知識。因此答案應選擇最能概括這些資訊的選項。"
          ],
          "answer": "(A) An introduction to concrete as a construction material.[TTS:A) An introduction to concrete as a construction material.]",
          "hints": [
            "仔細分析句子主詞、動詞與受詞結構",
            "根據上下文語境與關鍵字線索判斷最適選項"
          ],
          "commonMistake": "容易受外觀相似的單字或字面直譯干擾，未完整分析句子文法功能。",
          "eliteShortcut": "文法結構分析法：先確認空格所缺詞性與句法功能，快速排除不符選項，秒殺破題！"
        },
        {
          "question": "Dialogue Example 1:\nA: I can't figure out the meaning of 'sustainable' in this passage.\nB: Look at the context clues. The passage mentions 'using renewable energy' and 'reducing waste'.\nA: Ah, I see!\n\nQuestion: What does B suggest A do?[TTS:Dialogue Example 1:\nA: I can't figure out the meaning of 'sustainable' in this passage.\nB: Look at the context clues. The passage mentions 'using renewable energy' and 'reducing waste'.\nA: Ah, I see!\n\nQuestion: What does B suggest A do?]",
          "difficulty": "2",
          "steps": [
            "步驟一：審題與對話焦點定位。題幹詢問「What does B suggest A do?」，因此核心答題線索在於 B 的發言內容。",
            "步驟二：分析 B 的建議與實例說明。B 回答「Look at the context clues. The passage mentions 'using renewable energy' and 'reducing waste'.」，說明遇到不懂的單字時，應由前後文事例推敲字義。",
            "步驟三：歸納上下文線索解題策略。B 明確建議尋找「context clues（上下文線索）」，藉由前後同義語境理解生字，鎖定正解。"
          ],
          "answer": "Look at the context clues.[TTS:Look at the context clues.]",
          "hints": [
            "仔細分析句子主詞、動詞與受詞結構",
            "根據上下文語境與關鍵字線索判斷最適選項"
          ],
          "commonMistake": "容易受外觀相似的單字或字面直譯干擾，未完整分析句子文法功能。",
          "eliteShortcut": "文法結構分析法：先確認空格所缺詞性與句法功能，快速排除不符選項，秒殺破題！"
        },
        {
          "question": "Dialogue Example 2:\nA: Skimming is too hard. I keep stopping at words I don't know.\nB: You shouldn't do that. Just read the first and last sentences of each paragraph to get the main idea.\n\nQuestion: According to B, how should one skim a passage?[TTS:Dialogue Example 2:\nA: Skimming is too hard. I keep stopping at words I don't know.\nB: You shouldn't do that. Just read the first and last sentences of each paragraph to get the main idea.\n\nQuestion: According to B, how should one skim a passage?]",
          "difficulty": "2",
          "steps": [
            "步驟一：審題與鎖定閱讀技巧說明。題目詢問「According to B, how should one skim a passage?」，需精確定位 B 對於略讀 (skimming) 操作步驟的指示。",
            "步驟二：提取關鍵句與操作原則。B 指出不應停下來查生字，而是「Just read the first and last sentences of each paragraph to get the main idea.」。",
            "步驟三：統整略讀策略與核心步驟。略讀的正確做法是閱讀「每個段落的第一句與最後一句」以快速掌握文章主旨，完整呼應選項。"
          ],
          "answer": "By reading the first and last sentences of each paragraph.[TTS:By reading the first and last sentences of each paragraph.]",
          "hints": [
            "仔細分析句子主詞、動詞與受詞結構",
            "根據上下文語境與關鍵字線索判斷最適選項"
          ],
          "commonMistake": "容易受外觀相似的單字或字面直譯干擾，未完整分析句子文法功能。",
          "eliteShortcut": "文法結構分析法：先確認空格所缺詞性與句法功能，快速排除不符選項，秒殺破題！"
        }
      ],
      "illustrations": [
        "context.webp",
        "mechanism.webp",
        "comparison.webp"
      ],
      "concepts": [
        {
          "heading": "1. 略讀 Skimming 與掃讀 Scanning",
          "body": "閱讀測驗首重速度與準確度。**略讀 (Skimming)** 是快速瀏覽文章標題、第一段、各段首句與結論句，以抓出文章的主旨大意。**掃讀 (Scanning)** 則是帶著特定的目標(例如：人名、年代、特定專有名詞)在文章中快速搜尋，找到目標後再仔細閱讀該句前後文以獲得精確資訊。\n\n在建築工程領域的英文手冊中，往往需要用掃讀來尋找特定的尺寸或材料規範，這項技巧非常實用。\n\n[DIALOGUE_START:閱讀策略會話：略讀與掃讀技巧應用]\nStudy Partner A: How do you locate specific data so quickly in a 400-word passage? | 你怎麼能在四百字的文章中這麼快找到特定數據？\nStudy Partner B: I use scanning to look for capital letters, numbers, and technical terms! | 我用掃讀法 (scanning) 專門搜尋大寫字母、數字與專業術語！\nStudy Partner A: And what about finding the general topic of each paragraph? | 那要如何找出每個段落的大意呢？\nStudy Partner B: Just skim the first and last sentences of each paragraph to grasp the main idea. | 只要略讀 (skim) 每段的第一句和最後一句，就能掌握主旨了。\n[DIALOGUE_END]"
        },
        {
          "heading": "2. 上下文猜字法 (Context Clues[TTS:Context Clues])",
          "body": "遇到不懂的生字時，千萬別停下來！可以透過以下線索猜測字義：\n1. **同義字/反義字線索**：尋找 or, that is, but, however[TTS:or, that is, but, however] 等轉折或解釋字詞。\n2. **舉例線索**：透過 such as, for example[TTS:such as, for example] 後面的例子來反推前面的生字。\n3. **因果線索**：利用 because, so, therefore[TTS:because, so, therefore] 等詞推論。\n4. **構詞學**：利用字首(prefix)、字根(root)、字尾(suffix)判斷，例如看到 re- 知道是「再、重複」，-tion 知道是「名詞」。\n\n[DIALOGUE_START:上下文猜字會話：推測專業生字詞義]\nStudent: I encountered the word \"resilient\" in an article about earthquake-resistant buildings. | 我在一篇關於耐震建築的文章中看到了 resilient 這個單字。\nTeacher: Look at the surrounding words: \"absorb shock\", \"withstand shaking\", and \"recover\". | 看一下周圍的字：absorb shock (吸收震波)、withstand shaking (承受搖晃) 與 recover (復原)。\nStudent: So \"resilient\" must mean flexible, tough, and able to bounce back! | 所以 resilient 一定是指有彈性、堅韌且具備復原力的意思！\nTeacher: Perfect deduction! You do not need a dictionary when context is clear. | 完全正確的推論！當上下文很清楚時，你根本不需要字典。\n[DIALOGUE_END]"
        },
        {
          "heading": "3. 主旨題 Main Idea[TTS:Main Idea] 破解",
          "body": "主旨題常問：What is the main idea of this passage?[TTS:What is the main idea of this passage?] / What is the best title for this article?[TTS:What is the best title for this article?] \n\n**解題策略**：\n- **首尾法**：文章的主旨通常藏在第一段(引言)的最後一句，或是最後一段(結論)。\n- **頻率法**：若某個概念或單字在文章中不斷重複出現(包含其同義詞)，很可能就是主旨。\n- **避開陷阱**：太細節的選項(只提到某一段的內容)、太廣泛的選項(超出文章討論範圍)都不是正確答案。\n\n[DIALOGUE_START:主旨題破解會話：快速辨認核心論點]\nTutor: What is the main topic of this passage about sustainable construction? | 這篇關於永續建築的文章核心主旨是什麼？\nStudent: The passage explores how recycled materials reduce carbon emissions in modern buildings. | 這篇文章在探討回收材料如何降低現代建築的碳排放量。\nTutor: Correct. Avoid options that are too narrow or mention only one supporting example. | 答對了。要避開範圍太狹隘或只提到單一支持事例的干擾選項。\nStudent: The main idea should summarize the whole text, not just one paragraph. | 主旨應該總結全文，而不是只涵蓋單一段落。\n[DIALOGUE_END]"
        },
        {
          "heading": "4. 細節題與推論題解析",
          "body": "細節題(Detail Questions[TTS:Detail Questions])通常問 Who, What, Where, When, Why, How[TTS:Who, What, Where, When, Why, How]。解題時直接利用題目中的關鍵字，回文章做**掃讀(Scanning)**找答案。注意，正確選項常會用**同義字(Paraphrase)**來替換文章中的字詞。\n\n推論題(Inference Questions[TTS:Inference Questions])常有 imply, suggest, infer[TTS:imply, suggest, infer] 等字眼。答案不會直接寫在文章裡，必須根據文章提供的線索進行合理的邏輯推斷，不能憑空想像或過度延伸。\n\n[DIALOGUE_START:細節推論會話：區分事實與推論]\nExaminer: Does the author explicitly state that timber buildings are cheaper to build? | 作者有明確說明木構造建築的造價比較便宜嗎？\nCandidate: No, the text only states that timber construction is faster, not cheaper. | 沒有，內文只有提到木構造施工速度較快，並沒說比較便宜。\nExaminer: Good catch. Never assume facts that are not directly supported by the text. | 抓得好。千萬不要臆測沒有被內文直接支持的事實。\nCandidate: Sticking strictly to textual evidence prevents unnecessary point loss. | 嚴格依循文本證據才能避免不必要的失分。\n[DIALOGUE_END]"
        },
        {
          "heading": "5. 生活記敘文與說明文閱讀",
          "body": "統測英文常出現與生活息息相關的文章體裁：\n- **記敘文 (Narrative)**：著重在人事時地物(5W1H)，通常按照時間順序發展。閱讀重點在於故事的起承轉合及主角的感受變化。\n- **說明文 (Expository)**：用來解釋事物或傳遞資訊，例如：產品說明書、旅遊指南、科普文章。常見結構為「總集-分述-總結」。閱讀時要注意轉折詞與條列式的重點。\n\n[DIALOGUE_START:文本體裁會話：記敘文與說明文結構]\nTeacher: Notice how this narrative article describes the engineer's first bridge project in chronological order. | 注意這篇記敘文是如何按照時間先後順序描述工程師的第一個橋樑專案。\nStudent: Yes, whereas the expository passage uses cause-and-effect to explain structural failure. | 是的，而另一篇說明文則使用因果關係來解釋結構破壞的原因。\nTeacher: Recognizing text structure helps you anticipate where answers are hidden. | 辨識文本結構能幫你預測答案會藏在哪裡。\nStudent: I will pay attention to organizational transitions when reading. | 我在閱讀時會特別注意文章的結構轉折詞。\n[DIALOGUE_END]"
        },
        {
          "heading": "6. 段落架構：主題句→支持句→結論句",
          "body": "英文文章的段落架構通常非常清晰，掌握這個架構能大幅提升閱讀速度：\n1. **主題句 (Topic Sentence[TTS:Topic Sentence])**：通常是段落的第一句或第二句，點出該段落的核心概念。\n2. **支持句 (Supporting Sentences[TTS:Supporting Sentences])**：提供細節、例子、數據或理由來支持主題句。佔段落的最大篇幅。\n3. **結論句 (Concluding Sentence[TTS:Concluding Sentence])**：段落的最後一句，總結該段重點或為下一段鋪路。\n\n[DIALOGUE_START:段落結構會話：主題句與支持句分析]\nPeer A: Where is the topic sentence in this paragraph about smart concrete? | 這段關於智慧混凝土的段落，主題句在哪裡？\nPeer B: It is right at the beginning: \"Self-healing concrete revolutionizes infrastructure maintenance.\" | 就在最開頭：「自癒型混凝土徹底改變了基礎設施的維護方式。」\nPeer A: And the rest of the sentences provide experimental data and real-world examples. | 而其餘的句子則提供了實驗數據與真實案例作為支持。\nPeer B: Understanding this hierarchy makes reading comprehension effortless. | 理解這種層次架構能讓閱讀理解變得輕鬆省力。\n[DIALOGUE_END]"
        },
        {
          "heading": "7. 統測閱讀四大題型攻略",
          "body": "統測閱讀測驗可歸納為四大題型：\n1. **主旨題**：抓首尾段、各段主題句。\n2. **細節題**：抓題幹關鍵字回文章找同義替換。\n3. **詞義題**：回到該單字出現的段落，利用上下文線索(Context Clues[TTS:Context Clues])推敲。\n4. **推論/是非題 (True/False)**：最耗時的題型，建議將四個選項的關鍵字分別帶回文章比對。\n\n[DIALOGUE_START:閱讀題型攻略會話：時間管理與作答節奏]\nStudent: I often run out of time on the reading section of the Unified Exam. | 我在統測英文的閱讀測驗部分經常寫不完。\nAdvisor: Read the questions first before reading the article to focus your attention. | 在讀文章前先看題目，這樣能集中你的注意力。\nStudent: That way, I know exactly what keywords and details to look for! | 這樣一來我就確切知道該找哪些關鍵字與細節了！\nAdvisor: Exactly. Aim for no more than eight minutes per reading passage. | 沒錯。目標是每篇閱讀測驗不超過八分鐘。\n[DIALOGUE_END]",
          "table": {
            "headers": [
              "統測閱讀四大題型",
              "核心提問句型範例",
              "黃金解題策略與步驟 (SOP)",
              "干擾選項特徵與避坑指南"
            ],
            "rows": [
              [
                "主旨題 (Main Idea [TTS:Main Idea])",
                "What is the main idea? [TTS:What is the main idea?] / What is the best title? [TTS:What is the best title?]",
                "抓首段尾句與末段總結句，統計全文高頻核心關鍵字",
                "避開「以偏概全（只講某一段細節）」或「過度延伸」"
              ],
              [
                "細節題 (Fact / Detail [TTS:Fact and Detail])",
                "According to the passage, which is true? [TTS:According to the passage, which is true?]",
                "用題幹專有名詞/數字/大寫字母回文「掃讀 (Scanning [TTS:Scanning])」定位",
                "注意「同義字替換 (Paraphrase [TTS:Paraphrase])」，避開扭曲程度或因果顛倒"
              ],
              [
                "猜字題 (Vocabulary in Context [TTS:Vocabulary in Context])",
                "The word is closest in meaning to... [TTS:closest in meaning to]",
                "依前後文轉折詞 (however [TTS:however])、解釋詞 (that is [TTS:that is]) 或舉例 (such as [TTS:such as]) 推敲",
                "切勿直接選取「最常見字義」，必須符合該段特定語境"
              ],
              [
                "推論題 (Inference / Suggestion [TTS:Inference and Suggestion])",
                "What can be inferred from the article? [TTS:What can be inferred from the article?]",
                "根據文本現有客觀事實進行合乎邏輯的一步推論",
                "嚴禁憑個人主觀常識過度腦補未提及之結論"
              ]
            ]
          }
        },
        {
          "heading": "8. 指代與參照題：it／this／they 到底指誰",
          "body": "<p>指代題（reference question）是統測閱讀測驗的<strong>穩定題型</strong>，題幹常寫成「The word <strong>it</strong> in line 5 refers to ______.」。這類題目不需要理解整篇文章，只要掌握「就近、單複數一致、語意可代入」三個檢核點即可秒殺。</p>",
          "table": {
            "headers": [
              "指代詞",
              "指涉範圍",
              "判斷準則與範例"
            ],
            "rows": [
              [
                "it／they／them",
                "前文出現的單一名詞（單數／複數）",
                "往前找「最近且單複數一致」的名詞，代入原句檢查語意是否通順"
              ],
              [
                "this／these",
                "前文剛提到的事物，或「整個上一句的概念」",
                "This shows that…／This is why… 常指「整句話的內容」而非單一名詞"
              ],
              [
                "that／those",
                "與前文對比的另一組事物，或避免重複的同類名詞",
                "The climate of Taipei is milder than that of Hsinchu.（that＝the climate）"
              ],
              [
                "such／so",
                "代替前文提到的性質或整個子句",
                "He said the design was flawed, and rightly so.（so＝the design was flawed）"
              ],
              [
                "one／ones",
                "同類但「不特定」的另一個",
                "This helmet is broken; I need a new one.（one＝a helmet，非同一頂）"
              ],
              [
                "the former／the latter",
                "前者／後者（只用於兩者）",
                "Steel and wood are both used; the former is stronger, the latter is cheaper."
              ],
              [
                "前指 vs 後指",
                "多數為前指（往前找），少數為後指（往後找）",
                "後指常見於 It is ＋ adj. ＋ to V 與 It ＋ V ＋ that 子句的虛主詞結構"
              ],
              [
                "零指代（省略）",
                "對等結構中被省略的重複成分",
                "He can read the drawing, but she can't (read the drawing).｜補回省略成分才能正確理解"
              ]
            ]
          },
          "steps": [
            "三步驟解法：① 回到題目指定的行數，圈出該指代詞 ② 往前找最近且單複數一致的名詞 ③ 把候選名詞代回原句，語意通順者即為答案。",
            "陷阱提醒：最靠近的名詞不一定是答案，必須通過「代入檢查」；若代入後語意矛盾，就往前再找一個。",
            "當 this／that 後面沒有名詞時，通常指「整個上一句的概念」，選項多為 the whole idea／the situation described above 這類抽象敘述。",
            "解指代題時務必回原文，切勿憑印象作答——這是統測閱讀測驗失分率最高的原因。"
          ]
        },
        {
          "heading": "9. 同義改寫 (Paraphrase) 對照表：選項為何看起來都不一樣",
          "body": "<p>統測閱讀測驗的正確選項<strong>幾乎從不照抄原文</strong>，而是把原文改寫成同義句。看不懂選項不是英文不好，而是沒認出「同一件事的另一種說法」。以下整理閱讀測驗最常見的六種改寫手法。</p>",
          "table": {
            "headers": [
              "改寫手法",
              "原文寫法 → 選項寫法",
              "應對策略"
            ],
            "rows": [
              [
                "① 同義字替換",
                "cut down on → reduce｜get rid of → remove｜take place → happen／occur",
                "背同義字時以「一組」為單位，閱讀選項時自動聯想"
              ],
              [
                "② 詞性轉換",
                "The company decided to expand. → the company's decision to expand｜It rained heavily. → heavy rain",
                "看到名詞化結構，先還原成「主詞＋動詞」再比對"
              ],
              [
                "③ 主被動互換",
                "Engineers designed the bridge. → The bridge was designed by engineers.",
                "確認「動作者」與「承受者」沒有被調換"
              ],
              [
                "④ 肯否定互換（雙重否定）",
                "Few people agreed. → Almost nobody agreed.｜not uncommon → fairly common",
                "遇到 not un-／hardly／few／seldom 先換算成正向敘述"
              ],
              [
                "⑤ 概括與具體互換",
                "apples, bananas, and oranges → various kinds of fruit｜increased from 20% to 45% → more than doubled",
                "看到選項出現上位詞，回原文檢查是否涵蓋所有細項"
              ],
              [
                "⑥ 因果與條件重述",
                "Because it rained, the work stopped. → The work stopped due to the rain.／Rain caused the work to stop.",
                "圈出原文因果標記（because／so／therefore／due to）再比對邏輯方向"
              ],
              [
                "⑦ 程度副詞調整（陷阱）",
                "some experts believe → all experts agree（過度推論，錯誤選項）",
                "看到 all／always／never／only／must 這類絕對詞要高度警戒"
              ],
              [
                "⑧ 範圍偷換（陷阱）",
                "in Taipei → throughout Taiwan｜last year → in recent years",
                "比對選項與原文的「時間、地點、對象」範圍是否完全一致"
              ]
            ]
          },
          "steps": [
            "解題順序：先讀題目與選項的關鍵字 → 回原文定位 → 判斷是「合法改寫」還是「範圍偷換」。",
            "正確選項的特徵：語氣偏保守（may, some, often, tend to），且完全涵蓋於原文範圍內。",
            "錯誤選項的特徵：出現原文沒有的絕對詞（all, never, only, the best），或把局部結論擴大成全體結論。",
            "平時練習時，讀完一段就用自己的話寫一句同義改寫，訓練「認出改寫」的直覺。"
          ]
        },
        {
          "heading": "10. 四大文體特徵辨識：記敘・說明・議論・應用",
          "body": "<p>統測閱讀測驗的文章雖然主題多變，但文體只有四種。<strong>先判斷文體，就能預測題目類型與答案位置</strong>——這是頂尖考生與一般考生最大的差距。</p>",
          "table": {
            "headers": [
              "文體",
              "結構特徵與訊號詞",
              "常見題型與答案位置"
            ],
            "rows": [
              [
                "記敘文 (Narrative)",
                "依時間順序敘事；訊號詞 first, then, later, finally, one day, after that",
                "多考「事件順序」與「人物動機」；答案分散於各段，需依時間軸整理"
              ],
              [
                "說明文 (Expository)",
                "定義 → 分類 → 舉例 → 說明；訊號詞 for example, such as, in other words, that is, consists of",
                "多考「主旨」與「細節」；主旨常在第一段末，細節在舉例句附近"
              ],
              [
                "議論文 (Argumentative)",
                "立場 → 論據 → 反駁 → 結論；訊號詞 however, on the other hand, critics argue, in conclusion",
                "多考「作者態度」與「推論」；立場句常在首段或末段，轉折詞後為關鍵"
              ],
              [
                "應用文 (Practical)",
                "公告、Email、廣告、說明書、時刻表；含標題、日期、聯絡方式、條件說明",
                "多考「細節查找」；先看標題與粗體字，再依關鍵字定位，不必逐字閱讀"
              ],
              [
                "圖表整合文 (Infographic)",
                "文字段落 ＋ 圖表／表格；文字說明趨勢，圖表提供數據",
                "多考「趨勢比較」與「數據換算」；務必同時比對文字與圖表，答案常在兩者交集"
              ],
              [
                "混合文本 (Multi-text)",
                "兩篇以上短文並列（如：公告 ＋ 讀者回信）",
                "多考「跨文本比對」；先各自抓主旨，再找兩文的關聯或衝突點"
              ],
              [
                "描寫文 (Descriptive)",
                "空間或感官順序；訊號詞 above, below, in the center, on the left",
                "多考「位置關係」；邊讀邊畫簡圖"
              ],
              [
                "程序文 (Procedural)",
                "步驟說明、操作手冊；訊號詞 Step 1, first, next, before, after, make sure",
                "多考「順序」與「注意事項」；祈使句與 must／should 處常是考點"
              ]
            ]
          },
          "steps": [
            "看到文章先花五秒判斷文體：有時間序＝記敘；有定義舉例＝說明；有正反論點＝議論；有標題日期＝應用。",
            "說明文與議論文的主旨句 85% 出現在「第一段最後一句」或「最後一段第一句」，優先掃描這兩處。",
            "應用文絕對不要從頭讀到尾，先看題目問什麼，再回文章定位關鍵字——這能節省一半作答時間。",
            "議論文中每一個 however／but／yet／on the contrary 之後，都極可能是命題點，讀到就畫線。"
          ]
        },
        {
          "heading": "11. 統測英文 100 分鐘作戰配速表與作答順序",
          "body": "<p>統測英文滿分 100 分、作答時間 100 分鐘，選擇題 40 題（80 分）＋非選擇題（20 分）。許多學生不是不會，而是<strong>時間分配錯誤導致閱讀測驗來不及</strong>。以下是依題型難度與分數效益設計的標準配速表。</p>",
          "table": {
            "headers": [
              "作答順序",
              "題型與題數",
              "建議時間",
              "配速要點"
            ],
            "rows": [
              [
                "① 第一輪",
                "字彙題（約 10 題）",
                "8 分鐘",
                "每題 45 秒內決定；不會就先猜並做記號，絕不停留"
              ],
              [
                "② 第二輪",
                "對話題（約 10 題）",
                "8 分鐘",
                "先讀問句預測功能，再刪去法；每題 45 秒"
              ],
              [
                "③ 第三輪",
                "綜合測驗／克漏字（約 10 題）",
                "12 分鐘",
                "先通讀全篇抓大意再填空；文法空格優先，語意空格最後"
              ],
              [
                "④ 第四輪",
                "非選擇題（翻譯／重組／造句）",
                "20 分鐘",
                "趁腦力充足時先寫，避免最後匆忙；寫完立刻檢查時態與單複數"
              ],
              [
                "⑤ 第五輪",
                "閱讀測驗（約 10 題，3～5 篇）",
                "40 分鐘",
                "先做圖表與應用文（快），再做長篇議論文（慢）"
              ],
              [
                "⑥ 保留",
                "全卷檢查與劃卡確認",
                "12 分鐘",
                "重點檢查：做記號的題目、非選拼字、答案卡是否對位"
              ],
              [
                "時間警戒線",
                "第 50 分鐘",
                "—",
                "此時應已完成字彙、對話、克漏字與非選；若落後須立即加速"
              ],
              [
                "棄題原則",
                "單題超過 90 秒",
                "—",
                "立即做記號跳過，先確保能拿的分數全部到手"
              ]
            ]
          },
          "steps": [
            "非選擇題提前寫的理由：非選 20 分且需要書寫時間，放到最後常因慌張而寫不完或字跡潦草失分。",
            "閱讀測驗的內部順序：先掃描各篇長度與題數，優先做「短文章、多題目」的高效益題組。",
            "答案卡務必分段劃記（每完成一個大題就劃一次），避免最後時間不足導致整段漏劃。",
            "考前至少完整計時模擬三次，把這張配速表內化成身體記憶，考場才不會亂了節奏。"
          ]
        },
        {
          "heading": "12. 篇章連貫與句子插入題：段落邏輯的縫合技巧",
          "body": "<p>「請將下列句子插入文中最適當的位置」是素養導向命題的新趨勢。這類題目考的是<strong>段落邏輯的縫合能力</strong>：判斷插入句與前後句之間的銜接訊號是否吻合。</p>",
          "table": {
            "headers": [
              "銜接線索",
              "判斷方法",
              "實例"
            ],
            "rows": [
              [
                "代名詞線索",
                "插入句若以 it／they／this 開頭，其指涉對象必須在「前一句」出現過",
                "插入句：\"They are also more durable.\" → 前一句必須提到複數名詞（如 steel beams）"
              ],
              [
                "轉折詞線索",
                "插入句含 However／On the other hand，代表前句與插入句語意「相反」",
                "前句正面 ＋ 插入句 However… ＋ 後句延續負面"
              ],
              [
                "因果詞線索",
                "含 Therefore／As a result，代表前句是「原因」，插入句是「結果」",
                "前句：材料短缺 → 插入句：Therefore, the project was delayed."
              ],
              [
                "遞進詞線索",
                "含 Moreover／In addition／Besides，代表與前句「同方向再加碼」",
                "前句與插入句必須都是正面或都是負面"
              ],
              [
                "舉例詞線索",
                "含 For example／For instance，代表前句是「概括陳述」",
                "前句：Green materials have many benefits. → 插入句舉具體例子"
              ],
              [
                "時間序線索",
                "含 Later／Afterward／In 2020，須與前後時間軸吻合",
                "檢查插入位置前後的時間點是否形成遞增順序"
              ],
              [
                "定冠詞線索",
                "插入句出現 the ＋ 名詞，該名詞須在前文已用 a／an introduced",
                "前句：They built a new bridge. → 插入句：The bridge opened last May."
              ],
              [
                "語意斷層檢測",
                "移除插入句後，前後兩句是否出現「跳躍」",
                "把候選位置逐一代入，唸出前中後三句，最順暢者即為答案"
              ]
            ]
          },
          "steps": [
            "第一步：先讀插入句，圈出它的「銜接訊號」（代名詞、轉折詞、定冠詞、時間詞）。",
            "第二步：依訊號反推「前一句應該長什麼樣」，再到文中找符合的位置。",
            "第三步：代入後完整朗讀「前句＋插入句＋後句」，檢查邏輯是否連貫、有無重複或矛盾。",
            "第四步：若兩個位置都通順，選「代名詞指涉最明確」的那一個——這是命題設計的標準答案原則。"
          ]
        }
      ],
      "practices": [
        {
          "question": "Read the paragraph:\nGreen building focuses on reducing the environmental impact of construction. One common method is using solar panels to generate electricity. Another approach is installing large windows to maximize natural light, thereby decreasing the need for artificial lighting during the day. Furthermore, using recycled materials can significantly lower the amount of waste.\n\nWhat is the main topic of this paragraph?[TTS:Read the paragraph:\nGreen building focuses on reducing the environmental impact of construction. One common method is using solar panels to generate electricity. Another approach is installing large windows to maximize natural light, thereby decreasing the need for artificial lighting during the day. Furthermore, using recycled materials can significantly lower the amount of waste.\n\nWhat is the main topic of this paragraph?]",
          "difficulty": "2",
          "steps": [
            "1. 判斷題目類型為主旨題 (main topic[TTS:main topic])。",
            "2. 閱讀第一句(主題句)：Green building focuses on reducing the environmental impact of construction.[TTS:Green building focuses on reducing the environmental impact of construction.] (綠建築著重於減少建築對環境的衝擊)。",
            "3. 觀察後續句子：舉例了 solar panels[TTS:solar panels] (太陽能板)、large windows[TTS:large windows] (大窗戶) 和 recycled materials[TTS:recycled materials] (回收材料)。",
            "4. 這些例子都是為了支持第一句的概念，也就是綠建築的方法與目的。"
          ],
          "answer": "Methods of green building to reduce environmental impact.[TTS:Methods of green building to reduce environmental impact.]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "Read the sentence:\nThe architect decided to[TTS:Read the sentence:\nThe architect decided to] *alter* the blueprint because the original design was too costly and difficult to build.\n\nWhat does the word[TTS:the blueprint because the original design was too costly and difficult to build.\n\nWhat does the word] *alter* most likely mean in this context?[TTS:most likely mean in this context?]",
          "difficulty": "1",
          "steps": [
            "1. 判斷這題是詞義推測題。",
            "2. 找出關鍵字與線索：because the original design was too costly and difficult to build[TTS:because the original design was too costly and difficult to build] (因為原設計太昂貴且難以建造)。",
            "3. 邏輯推論：如果原來的設計又貴又難蓋，建築師會怎麼處理藍圖(blueprint)？當然是「修改」或「改變」。",
            "4. 選出與「修改/改變」意思相近的選項 (如 change / modify)。"
          ],
          "answer": "Change or modify.[TTS:Change or modify.]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "Read the text:\nSafety on a construction site is extremely important. All workers must wear hard hats at all times to protect their heads from falling objects. In addition, steel-toed boots are required to prevent foot injuries from heavy materials. High-visibility vests should also be worn so that workers can be easily seen by machine operators.\n\nAccording to the text, why should workers wear high-visibility vests?[TTS:Read the text:\nSafety on a construction site is extremely important. All workers must wear hard hats at all times to protect their heads from falling objects. In addition, steel-toed boots are required to prevent foot injuries from heavy materials. High-visibility vests should also be worn so that workers can be easily seen by machine operators.\n\nAccording to the text, why should workers wear high-visibility vests?]",
          "difficulty": "2",
          "steps": [
            "1. 判斷為細節題，題目問為何要穿 high-visibility vests[TTS:high-visibility vests] (高能見度背心)。",
            "2. 利用關鍵字 scanning (掃讀) 文章尋找 high-visibility vests[TTS:high-visibility vests]。",
            "3. 找到最後一句：High-visibility vests should also be worn so that workers can be easily seen by machine operators.[TTS:High-visibility vests should also be worn so that workers can be easily seen by machine operators.]",
            "4. so that[TTS:so that] 後面即為原因：為了讓機器操作員能輕易看見他們。"
          ],
          "answer": "To be easily seen by machine operators.[TTS:To be easily seen by machine operators.]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "Read the text:\nThe Eiffel Tower, built in 1889, is one of the most recognizable structures in the world. Originally constructed as the entrance arch for the 1889 World's Fair, it was initially criticized by some of France's leading artists and intellectuals for its design. However, it has become a global cultural icon of France.\n\nWhich of the following statements is true based on the text?[TTS:Read the text:\nThe Eiffel Tower, built in 1889, is one of the most recognizable structures in the world. Originally constructed as the entrance arch for the 1889 World's Fair, it was initially criticized by some of France's leading artists and intellectuals for its design. However, it has become a global cultural icon of France.\n\nWhich of the following statements is true based on the text?]",
          "difficulty": "3",
          "steps": [
            "1. 判斷為是非題，需逐一核對選項。",
            "2. 文章提到：建於1889年，最初是世界博覽會的入口拱門。",
            "3. 文章提到：最初受到法國頂尖藝術家和知識分子的批評 (criticized)。",
            "4. 文章提到：現在成為法國的全球文化象徵。",
            "5. 尋找符合上述細節的選項。"
          ],
          "answer": "The Eiffel Tower was not loved by all French artists when it was first built.[TTS:The Eiffel Tower was not loved by all French artists when it was first built.]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "Read the short email:\nDear Mr. Smith,\nThe delivery of the steel beams will be delayed due to severe weather conditions. We expect the shipment to arrive on Thursday morning instead of Tuesday afternoon. We apologize for any inconvenience this may cause to your construction schedule.\nSincerely,\nLogistics Team\n\nWhat can be inferred from this email?[TTS:Read the short email:\nDear Mr. Smith,\nThe delivery of the steel beams will be delayed due to severe weather conditions. We expect the shipment to arrive on Thursday morning instead of Tuesday afternoon. We apologize for any inconvenience this may cause to your construction schedule.\nSincerely,\nLogistics Team\n\nWhat can be inferred from this email?]",
          "difficulty": "3",
          "steps": [
            "1. 判斷為推論題 (inferred)。",
            "2. 分析內容：鋼樑交貨因惡劣天氣延遲。原本預計週二下午，現在改成週四早上。",
            "3. 合理推論：Mr. Smith[TTS:Mr. Smith]的施工進度(construction schedule[TTS:construction schedule])很可能會因為材料延遲而受到影響(inconvenience)。",
            "4. 推論：The construction project might face a slight delay because of the late delivery.[TTS:The construction project might face a slight delay because of the late delivery.]"
          ],
          "answer": "The construction project may be delayed due to the late arrival of materials.[TTS:The construction project may be delayed due to the late arrival of materials.]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "Read the paragraph:\nUnlike traditional bricks, which are baked in a kiln, adobe bricks are made of earth and organic materials and are dried in the sun. This traditional building method is highly sustainable. However, adobe buildings are susceptible to water damage and must be protected from heavy rain.\n\nHow do adobe bricks differ from traditional bricks?[TTS:Read the paragraph:\nUnlike traditional bricks, which are baked in a kiln, adobe bricks are made of earth and organic materials and are dried in the sun. This traditional building method is highly sustainable. However, adobe buildings are susceptible to water damage and must be protected from heavy rain.\n\nHow do adobe bricks differ from traditional bricks?]",
          "difficulty": "2",
          "steps": [
            "1. 判斷為細節題，題目問 adobe bricks[TTS:adobe bricks] 與 traditional bricks[TTS:traditional bricks] 的差異。",
            "2. 掃讀關鍵字 \"Unlike\" 或 \"differ\"。",
            "3. 第一句明確指出：Unlike traditional bricks, which are baked in a kiln[TTS:Unlike traditional bricks, which are baked in a kiln] (在窯中烘烤), adobe bricks are made of earth... and are dried in the sun[TTS:adobe bricks are made of earth... and are dried in the sun] (在太陽下曬乾)。",
            "4. 找出對比的細節：乾燥方式不同。"
          ],
          "answer": "Adobe bricks are dried in the sun, while traditional bricks are baked in a kiln.[TTS:Adobe bricks are dried in the sun, while traditional bricks are baked in a kiln.]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "Read the sentence:\nThe new building regulation is[TTS:Read the sentence:\nThe new building regulation is] *mandatory* for all commercial structures; developers have no choice but to follow it.\n\nWhat is the meaning of the word[TTS:for all commercial structures; developers have no choice but to follow it.\n\nWhat is the meaning of the word] *mandatory*?",
          "difficulty": "1",
          "steps": [
            "1. 詞義推測題。",
            "2. 找出線索：分號後面的子句 \"developers have no choice but to follow it[TTS:developers have no choice but to follow it]\" (開發商別無選擇，只能遵守)。",
            "3. 推論：既然別無選擇必須遵守，代表這個法規是「強制的」、「必須的」。",
            "4. 選項中尋找 required 或 compulsory 等同義字。"
          ],
          "answer": "Required by rules or law.[TTS:Required by rules or law.]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "Read the passage:\nWhen constructing a tall building, the foundation is crucial. Engineers must dig deep into the earth until they reach bedrock, a solid layer of rock. This ensures the building will not sink or tilt over time. Without a solid foundation, even the best-designed skyscraper can become dangerous.\n\nWhat is the main purpose of reaching bedrock when building a foundation?[TTS:Read the passage:\nWhen constructing a tall building, the foundation is crucial. Engineers must dig deep into the earth until they reach bedrock, a solid layer of rock. This ensures the building will not sink or tilt over time. Without a solid foundation, even the best-designed skyscraper can become dangerous.\n\nWhat is the main purpose of reaching bedrock when building a foundation?]",
          "difficulty": "2",
          "steps": [
            "1. 判斷為細節/目的題，問 reaching bedrock[TTS:reaching bedrock] 的目的。",
            "2. 掃讀 bedrock，找到句子 \"Engineers must dig deep... until they reach bedrock...[TTS:Engineers must dig deep... until they reach bedrock...]\"",
            "3. 閱讀下一句找目的/結果：\"This ensures the building will not sink or tilt over time.[TTS:This ensures the building will not sink or tilt over time.]\" (這確保建築物隨著時間推移不會下沉或傾斜)。",
            "4. 選擇與此意義相符的答案。"
          ],
          "answer": "To prevent the building from sinking or tilting.[TTS:To prevent the building from sinking or tilting.]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        }
      ],
      "step0Prerequisites": [
        "段落基本結構 (主題句、支持句、結論句)",
        "基本轉折連接詞 (however, therefore, in addition, for example)",
        "統測高頻 2000 單字之認讀能力"
      ]
    },
    {
      "slug": "vocabulary-professional",
      "title": "5. 專業與工程字彙 (ESP)",
      "desc": "關於 PVQC 土木與建築類專業英文詞彙 (ESP)，涵蓋材料、結構、圖學、測量、施工與工安等常見統測與實務字彙。",
      "status": "done",
      "gradeLevel": 11,
      "examHitRate": 3,
      "fatalTraps": [
        {
          "wrongThinking": "混淆外觀相似或同字根但不同字尾的專業技術單字。",
          "correctThinking": "精準區分形近字與詞性變化，例如 economic (經濟上的) vs economical (節儉省錢的)；sensitive (敏感的) vs sensible (明智的)。",
          "trapDescription": "統測專業字彙題常以形近字作為強力干擾選項，需透過詞尾分析與語境邏輯判定。"
        }
      ],
      "eliteMentalModels": [
        {
          "technique": "專業場景心智圖 (Domain Context Mapping)",
          "explanation": "將字彙依「工地安全規範」、「測量與放樣」、「建材檢驗」、「商務合約」四大維度歸類記憶，強化專業語境聯想。"
        }
      ],
      "covered_question_ids": [],
      "worked_examples": [
        {
          "question": "In a construction site, workers must wear a ________ to protect their heads from falling objects.[TTS:In a construction site, workers must wear a ________ to protect their heads from falling objects.]\n(A) Hard Hat[TTS:Hard Hat] (B) Beam[TTS:Beam] (C) Blueprint[TTS:Blueprint] (D) Level[TTS:Level]",
          "difficulty": "1",
          "steps": [
            "聚焦工地勞安關鍵情境：句意強調在建築工地 (construction site)，工人必須穿戴某種個人防護裝備 (PPE)，目的為「protect their heads from falling objects」(保護頭部免受落物打擊)。",
            "分析動詞與受詞搭配：動詞為 wear (穿戴)，受詞帶有修飾語「protect their heads」，故空格必然為頭部安全防護裝備。",
            "辨析四個土木建築專業詞彙：(A) Hard Hat (安全帽/工程帽) 為頭部個人防護裝備；(B) Beam (梁) 為水平結構構件；(C) Blueprint (藍圖) 為施工圖說；(D) Level (水準儀/水準尺) 為測量儀器。唯一正解為 (A)。"
          ],
          "answer": "(A) Hard Hat [TTS:Hard Hat] — 安全帽（工地個人防護裝備）",
          "hints": [
            "注意空格後面受詞目的「protect their heads」（保護頭部）",
            "回想工地必備的個人防護裝備 (PPE) 英文名稱"
          ],
          "commonMistake": "未掌握土木建築常用五大工具與勞安詞彙，將結構名詞 (Beam) 或儀器名詞 (Level) 混為穿戴裝備。",
          "eliteShortcut": "工地勞安防護首字口訣：protect heads + wear ⇒ 唯一對應 Hard Hat！"
        }
      ],
      "illustrations": [
        "context.webp",
        "mechanism.webp",
        "comparison.webp"
      ],
      "concepts": [
        {
          "heading": "1. 建築與工程材料詞彙 (Construction Materials[TTS:Construction Materials])",
          "body": "了解基本建築與工程材料的英文詞彙，是閱讀英文施工圖與材料規範的基礎。\n\n[DIALOGUE_START:建材詞彙會話：混凝土規格討論]\nStructural Engineer: What compressive strength of reinforced concrete is specified for the shear walls? | 剪力牆所指定的鋼筋混凝土抗壓強度是多少？\nSite Supervisor: The drawings specify 35 MPa ready-mix concrete with low-heat Portland cement. | 圖說指定使用 35 MPa 的低熱波特蘭預拌混凝土。\nStructural Engineer: Make sure the slump test and cylinder samples are taken upon arrival. | 請確保混凝土車一抵達就進行坍度試驗並製作圓柱試體。\nSite Supervisor: We have our quality control team ready at the testing station. | 我們的品管團隊已經在檢驗區準備就緒了。\n[DIALOGUE_END]",
          "table": {
            "headers": [
              "英文詞彙",
              "中文翻譯",
              "使用情境 / 例句"
            ],
            "rows": [
              [
                "Concrete[TTS:Concrete]",
                "混凝土",
                "Reinforced concrete (RC) is widely used in building structures.[TTS:Reinforced concrete (RC) is widely used in building structures.]"
              ],
              [
                "Cement[TTS:Cement]",
                "水泥",
                "Portland cement is the most common type of cement.[TTS:Portland cement is the most common type of cement.]"
              ],
              [
                "Rebar[TTS:Rebar]",
                "鋼筋",
                "Rebars are placed to provide tensile strength.[TTS:Rebars are placed to provide tensile strength.]"
              ],
              [
                "Asphalt[TTS:Asphalt]",
                "瀝青",
                "The road is paved with asphalt.[TTS:The road is paved with asphalt.]"
              ],
              [
                "Aggregate[TTS:Aggregate]",
                "骨材 / 粒料",
                "Fine and coarse aggregates are mixed with cement.[TTS:Fine and coarse aggregates are mixed with cement.]"
              ],
              [
                "Mortar[TTS:Mortar]",
                "砂漿",
                "Mortar is used to bind bricks together.[TTS:Mortar is used to bind bricks together.]"
              ],
              [
                "Waterproofing[TTS:Waterproofing]",
                "防水層 / 防水工程",
                "Waterproofing is essential for roofs and basements.[TTS:Waterproofing is essential for roofs and basements.]"
              ]
            ]
          }
        },
        {
          "heading": "2. 結構元件詞彙 (Structural Elements[TTS:Structural Elements])",
          "body": "建築物的支撐骨架是由各種結構元件組成，清楚分辨它們的英文名稱對土木建築群學生至關重要。\n\n[DIALOGUE_START:結構元件會話：梁柱與基礎載重傳遞]\nLead Architect: How does the gravitational load transfer from the roof slab down to the foundation? | 重力載重是如何從屋頂樓板一路傳遞到基礎的？\nEngineer: The slab transfers load to the beams, then to the columns, and finally to the deep pile foundation. | 樓板將載重傳給梁，梁再傳給柱，最後傳遞到深基樁基礎。\nLead Architect: Is the retaining wall strong enough to resist the lateral soil pressure? | 擋土牆有足夠的強度來抵抗側向土壓力嗎？\nEngineer: Yes, it is designed with heavy steel reinforcement and drainage pipes. | 有的，它設計了密集的鋼筋補強與排水管路。\n[DIALOGUE_END]",
          "table": {
            "headers": [
              "英文詞彙",
              "中文翻譯",
              "使用情境 / 例句"
            ],
            "rows": [
              [
                "Beam[TTS:Beam]",
                "樑",
                "The main beam transfers the load to the columns.[TTS:The main beam transfers the load to the columns.]"
              ],
              [
                "Column[TTS:Column]",
                "柱",
                "Concrete columns support the weight of the building.[TTS:Concrete columns support the weight of the building.]"
              ],
              [
                "Slab[TTS:Slab]",
                "樓板",
                "The concrete slab forms the floor of the building.[TTS:The concrete slab forms the floor of the building.]"
              ],
              [
                "Foundation[TTS:Foundation]",
                "基礎",
                "A solid foundation prevents the building from settling.[TTS:A solid foundation prevents the building from settling.]"
              ],
              [
                "Truss[TTS:Truss]",
                "桁架",
                "Steel trusses are often used for roof structures.[TTS:Steel trusses are often used for roof structures.]"
              ],
              [
                "Retaining Wall[TTS:Retaining Wall]",
                "擋土牆",
                "The retaining wall prevents the soil from collapsing.[TTS:The retaining wall prevents the soil from collapsing.]"
              ],
              [
                "Dead Load[TTS:Dead Load]",
                "靜載重",
                "Dead load includes the weight of the structure itself.[TTS:Dead load includes the weight of the structure itself.]"
              ]
            ]
          }
        },
        {
          "heading": "3. 設計圖學詞彙 (Design and Graphics[TTS:Design and Graphics])",
          "body": "識圖是工程人員的基本能力，掌握圖學相關的專業英文有助於閱讀國際規範與軟體介面 (如 AutoCAD[TTS:AutoCAD])。\n\n[DIALOGUE_START:設計圖學會話：立面圖與剖面圖檢討]\nDraftsman: Please check the cross-section detail of the exterior curtain wall. | 請核對一下外牆帷幕牆的橫剖面細部圖。\nArchitect: The scale is 1:20, and all dimension lines match the structural grid. | 比例尺是 1:20，所有尺寸標註線都與結構柱心網格相符。\nDraftsman: Should we add the waterproofing membrane specification to the elevation view? | 我們需要在立面圖中加入防水毯的規格說明嗎？\nArchitect: Yes, please include the material thickness and installation notes. | 是的，請標註材料厚度與安裝注意事項。\n[DIALOGUE_END]",
          "table": {
            "headers": [
              "英文詞彙",
              "中文翻譯",
              "使用情境 / 例句"
            ],
            "rows": [
              [
                "Blueprint[TTS:Blueprint]",
                "藍圖 / 設計圖",
                "The architect reviewed the blueprint before construction.[TTS:The architect reviewed the blueprint before construction.]"
              ],
              [
                "Floor Plan[TTS:Floor Plan]",
                "平面圖",
                "The floor plan shows the layout of the rooms.[TTS:The floor plan shows the layout of the rooms.]"
              ],
              [
                "Elevation[TTS:Elevation]",
                "立面圖",
                "The south elevation reveals the facade of the building.[TTS:The south elevation reveals the facade of the building.]"
              ],
              [
                "Section[TTS:Section]",
                "剖面圖",
                "A cross-section provides details of the wall construction.[TTS:A cross-section provides details of the wall construction.]"
              ],
              [
                "Detail[TTS:Detail]",
                "詳圖",
                "Please refer to the detail drawing for the joint connection.[TTS:Please refer to the detail drawing for the joint connection.]"
              ],
              [
                "Scale[TTS:Scale]",
                "比例尺",
                "The drawing is made to a scale of 1:100.[TTS:The drawing is made to a scale of 1:100.]"
              ],
              [
                "Dimension[TTS:Dimension]",
                "尺寸",
                "Check the dimensions on the drawing carefully.[TTS:Check the dimensions on the drawing carefully.]"
              ]
            ]
          }
        },
        {
          "heading": "4. 測量儀器詞彙 (Surveying Equipment[TTS:Surveying Equipment])",
          "body": "測量是工程的起點。以下是常用的測量儀器與相關術語的英文表達。\n\n[DIALOGUE_START:測量儀器會話：全測站放樣作業]\nSurveyor A: Have you calibrated the total station over the primary benchmark? | 你已經在主基準點上完成全測站經緯儀的校正了嗎？\nSurveyor B: Yes, the optical plummet is centered, and the prism is positioned at point B. | 校正好了，光學垂球已對準中心，反射稜鏡也已立在 B 點上。\nSurveyor A: Let us record the horizontal angle and elevation difference now. | 我們現在來記錄水平角與高程差吧。\nSurveyor B: Coordinates are locked in with millimeter precision. | 座標數據已經鎖定，精確度達到公釐等級。\n[DIALOGUE_END]",
          "table": {
            "headers": [
              "英文詞彙",
              "中文翻譯",
              "使用情境 / 例句"
            ],
            "rows": [
              [
                "Total Station[TTS:Total Station]",
                "全測站儀",
                "A total station is used to measure angles and distances.[TTS:A total station is used to measure angles and distances.]"
              ],
              [
                "Level[TTS:Level]",
                "水準儀 / 水平儀",
                "The surveyor used a level to determine the elevation.[TTS:The surveyor used a level to determine the elevation.]"
              ],
              [
                "Theodolite[TTS:Theodolite]",
                "經緯儀",
                "A theodolite is an optical instrument for measuring angles.[TTS:A theodolite is an optical instrument for measuring angles.]"
              ],
              [
                "Prism[TTS:Prism]",
                "稜鏡",
                "The prism reflects the laser beam back to the total station.[TTS:The prism reflects the laser beam back to the total station.]"
              ],
              [
                "Tripod[TTS:Tripod]",
                "三腳架",
                "Mount the instrument securely on the tripod.[TTS:Mount the instrument securely on the tripod.]"
              ],
              [
                "Benchmark[TTS:Benchmark]",
                "水準點",
                "The survey started from a known benchmark.[TTS:The survey started from a known benchmark.]"
              ],
              [
                "GPS/GIS[TTS:GPS/GIS]",
                "全球定位系統/地理資訊系統",
                "GPS is used for precise land surveying.[TTS:GPS is used for precise land surveying.]"
              ]
            ]
          }
        },
        {
          "heading": "5. 施工工法詞彙 (Construction Methods[TTS:Construction Methods])",
          "body": "描述現場施工步驟時，會頻繁使用到特定的動詞與名詞。\n\n[DIALOGUE_START:施工工法會話：地下連續壁開挖工序]\nSite Engineer: We will begin the diaphragm wall excavation first thing tomorrow. | 我們明天一早就要開始進行地下連續壁的開挖作業。\nContractor: The bentonite slurry plant is operational, and the rebar cages are assembled. | 皂土泥漿拌和設備已可運作，鋼筋籠也已經組裝完成。\nSite Engineer: Ensure the tremie pipe is submerged properly during underwater concrete casting. | 特密管在進行水中混凝土澆置時務必保持適當的埋置深度。\nContractor: Our crane operators have extensive experience with deep excavation. | 我們的起重機操作手在深開挖工程方面擁有豐富經驗。\n[DIALOGUE_END]",
          "table": {
            "headers": [
              "英文詞彙",
              "中文翻譯",
              "使用情境 / 例句"
            ],
            "rows": [
              [
                "Excavation[TTS:Excavation]",
                "開挖",
                "The excavation for the basement begins tomorrow.[TTS:The excavation for the basement begins tomorrow.]"
              ],
              [
                "Formwork[TTS:Formwork]",
                "模板工程",
                "Wooden formwork is erected before pouring concrete.[TTS:Wooden formwork is erected before pouring concrete.]"
              ],
              [
                "Rebar Placement[TTS:Rebar Placement]",
                "鋼筋綁紮",
                "Rebar placement must follow the structural drawings.[TTS:Rebar placement must follow the structural drawings.]"
              ],
              [
                "Casting[TTS:Casting]",
                "澆置",
                "Casting concrete requires favorable weather conditions.[TTS:Casting concrete requires favorable weather conditions.]"
              ],
              [
                "Curing[TTS:Curing]",
                "養護",
                "Proper curing increases the strength of the concrete.[TTS:Proper curing increases the strength of the concrete.]"
              ],
              [
                "Scaffolding[TTS:Scaffolding]",
                "鷹架 / 施工架",
                "Workers stand on scaffolding to paint the exterior wall.[TTS:Workers stand on scaffolding to paint the exterior wall.]"
              ]
            ]
          }
        },
        {
          "heading": "6. 工地安全與PPE詞彙 (Site Safety & PPE[TTS:Site Safety & PPE])",
          "body": "安全第一 (Safety First[TTS:Safety First])。PPE (Personal Protective Equipment[TTS:Personal Protective Equipment]) 是工地必備的個人防護裝備。\n\n[DIALOGUE_START:工地安全與PPE會話：防護裝備查核]\nSafety Inspector: No worker is allowed on the scaffolding without a certified safety harness. | 任何工人在沒有合格安全帶的情況下，一律不允許登上鷹架。\nSubcontractor: All team members have double lanyards attached to the lifeline. | 我們所有的班組成員都已經將雙鉤安全繩扣在母索上了。\nSafety Inspector: Remember that steel-toe boots and high-visibility vests are mandatory everywhere. | 請記住，鋼頭安全鞋與高能見度反光背心在全區都是強制佩戴的。\nSubcontractor: We inspect all personal protective equipment daily during tool-box talks. | 我們每天在工具箱晨會時都會全面檢查個人防護裝備。\n[DIALOGUE_END]",
          "table": {
            "headers": [
              "英文詞彙",
              "中文翻譯",
              "使用情境 / 例句"
            ],
            "rows": [
              [
                "Hard Hat[TTS:Hard Hat]",
                "安全帽",
                "A hard hat is mandatory on the construction site.[TTS:A hard hat is mandatory on the construction site.]"
              ],
              [
                "Safety Harness[TTS:Safety Harness]",
                "安全吊帶",
                "Wear a safety harness when working at heights.[TTS:Wear a safety harness when working at heights.]"
              ],
              [
                "Goggles[TTS:Goggles]",
                "護目鏡",
                "Goggles protect your eyes from dust and debris.[TTS:Goggles protect your eyes from dust and debris.]"
              ],
              [
                "Reflective Vest[TTS:Reflective Vest]",
                "反光背心",
                "A reflective vest ensures visibility for the worker.[TTS:A reflective vest ensures visibility for the worker.]"
              ],
              [
                "Steel-toe Boots[TTS:Steel-toe Boots]",
                "鋼頭安全鞋",
                "Steel-toe boots prevent foot injuries from heavy objects.[TTS:Steel-toe boots prevent foot injuries from heavy objects.]"
              ],
              [
                "Hazard[TTS:Hazard]",
                "危險 / 隱患",
                "Identify any potential hazards before starting work.[TTS:Identify any potential hazards before starting work.]"
              ],
              [
                "Warning Sign[TTS:Warning Sign]",
                "警告標誌",
                "Pay attention to the warning signs near the excavation site.[TTS:Pay attention to the warning signs near the excavation site.]"
              ]
            ]
          }
        },
        {
          "heading": "7. PVQC 建築類精選速記策略",
          "body": "PVQC 專業英文詞彙能力認證是技高的重要檢定。備考時可採用<span className=\"text-rose-600 font-bold\">字根字首法</span>與<span className=\"text-blue-600 font-bold\">圖像聯想法</span>。\n\n[DIALOGUE_START:PVQC 術語會話：建築英文快速記憶]\nStudent A: How do you memorize terms like \"cantilever beam\" and \"equilibrium\"? | 你怎麼背像 cantilever beam (懸臂梁) 和 equilibrium (平衡) 這些名詞？\nStudent B: I associate \"cantilever\" with a balcony sticking out with no columns underneath! | 我把 cantilever 聯想成底下沒有任何柱子支撐、向外突出的陽台！\nStudent A: And \"equilibrium\" comes from \"equal\", meaning all forces balance out to zero. | 而 equilibrium 來自 equal，代表所有的受力互相平衡等於零。\nStudent B: Visual mnemonics make PVQC 840 technical terms so much fun to study. | 圖像聯想法讓準備 PVQC 840 個專業詞彙變得有趣多了。\n[DIALOGUE_END]",
          "table": {
            "headers": [
              "策略名稱",
              "應用說明",
              "範例"
            ],
            "rows": [
              [
                "字根字首法",
                "拆解字根字首推敲字義",
                "Ex-[TTS:Ex-] (向外) + cavate[TTS:cavate] (挖) = Excavation[TTS:Excavation] (開挖)"
              ],
              [
                "圖像聯想法",
                "結合實務圖面記憶",
                "看到 Elevation[TTS:Elevation] 聯想到建築物的正立面而非單純的高度"
              ],
              [
                "字群關聯法",
                "將相關動作綁定記憶",
                "Formwork[TTS:Formwork] (模板) -> Rebar[TTS:Rebar] (鋼筋) -> Casting[TTS:Casting] (澆置) -> Curing[TTS:Curing] (養護)"
              ]
            ]
          }
        },
        {
          "heading": "8. 職場情境對話 (Workplace Conversations[TTS:Workplace Conversations])",
          "body": "在真實工程環境中，專業字彙通常在溝通與指派任務時使用。以下是兩個常見的工地對話。\n\n[DIALOGUE_START:職場商務會話：工程圖說版次核發]\nProject Manager: Has revision C of the structural framing plan been approved by the building official? | 結構架構圖的 C 版修正圖已經獲得建管機關核准了嗎？\nLead Consultant: Yes, the official stamped drawings were issued this morning. | 是的，官方蓋章核可的圖說今天早上已經核發了。\nProject Manager: Please issue copies to all trade contractors and void previous versions. | 請分發圖說給所有分包商，並將先前的舊版作廢。\nLead Consultant: We will upload the latest files to the common data environment immediately. | 我們會立刻將最新檔案上傳至共通資料環境 (CDE)。\n[DIALOGUE_END]",
          "steps": [
            "A: Hey, did you check the blueprint for the new foundation?[TTS:Hey, did you check the blueprint for the new foundation?]\nB: Yes, we need to complete the rebar placement before tomorrow.[TTS:Yes, we need to complete the rebar placement before tomorrow.]\nA: Great. Don't forget your hard hat on site.[TTS:Great. Don't forget your hard hat on site.]\nB: Got it.[TTS:Got it.]",
            "A: The total station shows a small error in the elevation.[TTS:The total station shows a small error in the elevation.]\nB: Let me verify it with the level.[TTS:Let me verify it with the level.]\nA: We must be precise before pouring concrete.[TTS:We must be precise before pouring concrete.]\nB: I will double-check the dimensions on the floor plan.[TTS:I will double-check the dimensions on the floor plan.]"
          ]
        },
        {
          "heading": "9. 綠建築與 ESG 永續工程詞彙 (Green Building & Sustainability)",
          "body": "<p>近年統測英文跨領域閱讀題與技高雙語教學中，綠建築 (Green Building)、ESG 永續指標與淨零碳排 (Net Zero) 已經成為最熱門的新興命題熱區。熟悉這些專業英文，能大幅提昇長篇科技閱讀與素養題得分率！</p>\n\n[DIALOGUE_START:綠建築與ESG會話：評估淨零建築]\nArchitect: Our new office complex is aiming for LEED Platinum certification. | 我們的新辦公大樓綜合體正朝向 LEED 白金級綠建築認證目標邁進。\nConsultant: That requires a thirty percent reduction in operational carbon footprint. | 那需要降低百分之三十的營運碳足跡。\nArchitect: We integrated solar panels, rainwater harvesting, and high-efficiency HVAC systems. | 我們整合了太陽能光電板、雨水回收系統以及高效率空調通風系統。\nConsultant: Impressive! These sustainable features will significantly lower energy consumption. | 令人印象深刻！這些永續特性將顯著降低能源消耗。\n[DIALOGUE_END]",
          "table": {
            "headers": [
              "綠色工程詞彙",
              "中文專業譯名",
              "統測必備情境例句"
            ],
            "rows": [
              [
                "Green Building [TTS:Green Building]",
                "綠建築",
                "Green buildings use natural ventilation to reduce air conditioning needs. [TTS:Green buildings use natural ventilation to reduce air conditioning needs.]"
              ],
              [
                "Net Zero Emissions [TTS:Net Zero Emissions]",
                "淨零排放",
                "The government pledges to achieve net zero emissions by 2050. [TTS:The government pledges to achieve net zero emissions by 2050.]"
              ],
              [
                "Carbon Footprint [TTS:Carbon Footprint]",
                "碳足跡",
                "Using local timber reduces the embodied carbon footprint of the project. [TTS:Using local timber reduces the embodied carbon footprint of the project.]"
              ],
              [
                "LEED Certification [TTS:LEED Certification]",
                "LEED 綠建築認證 (領先能源與環境設計)",
                "This skyscraper received LEED Gold certification for energy efficiency. [TTS:This skyscraper received LEED Gold certification for energy efficiency.]"
              ],
              [
                "Renewable Energy [TTS:Renewable Energy]",
                "再生能源 (如太陽能/風力)",
                "The rooftop solar panels provide renewable energy for the entire building. [TTS:The rooftop solar panels provide renewable energy for the entire building.]"
              ],
              [
                "Circular Economy [TTS:Circular Economy]",
                "循環經濟 (建材回收與重用)",
                "Crushed concrete can be recycled into aggregates under a circular economy model. [TTS:Crushed concrete can be recycled into aggregates under a circular economy model.]"
              ]
            ]
          }
        },
        {
          "heading": "10. 機電與水電設備詞彙 (MEP: Mechanical, Electrical & Plumbing)",
          "body": "<p>建築不只有結構體。<strong>MEP（機械、電氣、給排水）</strong>是建築後續施工與維護的核心，也是 PVQC 建築類與統測專業英文的常見取材範圍。這組字彙在職場實習與丙級技術士術科說明中同樣高頻。</p>\n\n[DIALOGUE_START:機電設備會話：管線配置協調]\nMEP Engineer: The ductwork conflicts with the beam on the third floor. | 三樓的風管與樑產生了衝突。\nArchitect: Can we reroute the pipes below the ceiling slab? | 我們可以把管線改繞到天花板板下嗎？\nMEP Engineer: Yes, but we need to check the clearance for the sprinkler system. | 可以，但我們需要確認撒水系統的淨空高度。\nArchitect: Please update the BIM model and send me the revised layout. | 請更新 BIM 模型並把修訂後的配置圖寄給我。\n[DIALOGUE_END]",
          "table": {
            "headers": [
              "系統類別",
              "核心英文詞彙（詞性・中譯）",
              "實務搭配與例句"
            ],
            "rows": [
              [
                "給水排水 (Plumbing)",
                "pipe (n.) 管｜faucet (n.) 水龍頭｜valve (n.) 閥門｜drain (n./v.) 排水口／排水｜sewage (n.) 污水｜water tank (n.) 水塔",
                "The drain is clogged.（排水口堵塞）｜shut off the valve 關閉閥門"
              ],
              [
                "電氣 (Electrical)",
                "circuit (n.) 電路｜breaker (n.) 斷路器｜outlet (n.) 插座｜wiring (n.) 配線｜voltage (n.) 電壓｜grounding (n.) 接地",
                "The circuit breaker tripped.（斷路器跳脫）｜proper grounding 正確接地"
              ],
              [
                "空調 (HVAC)",
                "air conditioning (n.) 空調｜ventilation (n.) 通風｜duct (n.) 風管｜chiller (n.) 冰水主機｜thermostat (n.) 溫控器",
                "HVAC＝Heating, Ventilation and Air Conditioning｜improve ventilation 改善通風"
              ],
              [
                "消防 (Fire Protection)",
                "sprinkler (n.) 撒水頭｜fire alarm (n.) 火警警報｜extinguisher (n.) 滅火器｜smoke detector (n.) 偵煙器｜fire exit (n.) 逃生出口",
                "test the fire alarm system 測試火警系統｜keep the fire exit clear"
              ],
              [
                "照明 (Lighting)",
                "fixture (n.) 燈具｜LED lamp (n.) LED 燈｜switch (n.) 開關｜dimmer (n.) 調光器｜illumination (n.) 照度",
                "install light fixtures 安裝燈具｜sufficient illumination 足夠照度"
              ],
              [
                "垂直運輸",
                "elevator (n.) 電梯｜escalator (n.) 手扶梯｜shaft (n.) 昇降道｜machine room (n.) 機房",
                "the elevator shaft 電梯井｜out of service 停止服務中"
              ],
              [
                "維護與檢修",
                "maintenance (n.) 維護｜inspection (n.) 檢查｜leak (n./v.) 漏水／漏氣｜malfunction (n./v.) 故障｜replace (v.) 更換",
                "routine maintenance 例行維護｜detect a leak 偵測漏水"
              ],
              [
                "協調與界面",
                "clearance (n.) 淨空｜conflict (n./v.) 衝突｜reroute (v.) 改繞｜layout (n.) 配置圖｜coordination (n.) 界面協調",
                "check the clearance 確認淨空｜clash detection 碰撞檢查"
              ]
            ]
          },
          "steps": [
            "MEP 三個字母務必記牢：M＝Mechanical（機械／空調）、E＝Electrical（電氣）、P＝Plumbing（給排水）。",
            "動詞搭配是專業英文的關鍵：install（安裝）、connect（接續）、shut off（關閉）、replace（更換）、inspect（檢查）。",
            "PVQC 建築類測驗常以「圖片配對」形式測驗設備名稱，建議搭配實際照片記憶。",
            "職場實務常見縮寫：HVAC（空調）、FCU（風機盤管）、AHU（空調箱）、MCC（馬達控制中心）。"
          ]
        },
        {
          "heading": "11. 建築法規、許可與檢查詞彙 (Codes, Permits & Inspection)",
          "body": "<p>建築師與工程人員的日常有一半在處理<strong>法規與行政流程</strong>。這組字彙在國際專案、外商營造與留學申請中出現頻率極高，也是統測專業英文延伸閱讀的常見主題。</p>",
          "table": {
            "headers": [
              "流程階段",
              "核心英文詞彙（詞性・中譯）",
              "實務搭配與例句"
            ],
            "rows": [
              [
                "法規基礎",
                "building code (n.) 建築技術規則｜regulation (n.) 法規｜standard (n.) 標準｜compliance (n.) 符合法規｜violation (n.) 違規",
                "comply with the building code 符合建築法規｜a serious violation 重大違規"
              ],
              [
                "申請許可",
                "permit (n.) 許可證｜application (n.) 申請｜approval (n.) 核准｜submit (v.) 提送｜review (n./v.) 審查",
                "apply for a building permit 申請建照｜obtain approval 取得核准"
              ],
              [
                "都市計畫",
                "zoning (n.) 分區管制｜land use (n.) 土地使用｜floor area ratio (n.) 容積率｜building coverage ratio (n.) 建蔽率｜setback (n.) 退縮",
                "the zoning regulations 分區管制規定｜exceed the floor area ratio 超過容積率"
              ],
              [
                "圖說審查",
                "blueprint (n.) 藍圖｜specification (n.) 規範書｜drawing (n.) 圖說｜revision (n.) 修訂｜stamp (n./v.) 用印／核章",
                "the revised drawings 修訂圖說｜an approved specification 核准規範"
              ],
              [
                "施工查驗",
                "inspection (n.) 查驗｜inspector (n.) 檢查員｜checklist (n.) 檢查表｜defect (n.) 缺失｜punch list (n.) 缺失改善清單",
                "pass the inspection 通過查驗｜correct the defects 改正缺失"
              ],
              [
                "竣工與使用",
                "completion (n.) 竣工｜occupancy permit (n.) 使用執照｜handover (n.) 交屋｜warranty (n.) 保固｜as-built drawing (n.) 竣工圖",
                "obtain the occupancy permit 取得使照｜a one-year warranty 一年保固"
              ],
              [
                "安全與環評",
                "safety regulation (n.) 安全法規｜environmental impact assessment (n.) 環評｜fire safety (n.) 消防安全｜accessibility (n.) 無障礙",
                "conduct an environmental impact assessment 進行環評｜accessible design 無障礙設計"
              ],
              [
                "違規與罰則",
                "fine (n.) 罰鍰｜penalty (n.) 罰則｜suspend (v.) 停工｜demolish (v.) 拆除｜illegal structure (n.) 違建",
                "The project was suspended.（工程遭停工）｜impose a fine 課以罰鍰"
              ]
            ]
          },
          "steps": [
            "建照與使照是兩個不同階段：building permit（開工前的建造執照）→ occupancy permit（完工後的使用執照）。",
            "comply with 是法規類文章的高頻動詞片語，同義說法還有 conform to、meet the requirements of、be in accordance with。",
            "台灣建築法規英文對照：建蔽率 building coverage ratio (BCR)、容積率 floor area ratio (FAR)、綠建築標章 Green Building Label。",
            "閱讀國際規範文件時，注意情態助動詞的法律效力：shall（強制）＞ should（建議）＞ may（可選）。"
          ]
        },
        {
          "heading": "12. 專案管理與成本控制詞彙 (Project Management & Cost)",
          "body": "<p>營建專案的三大約束是<strong>範疇 (scope)、時程 (schedule)、成本 (cost)</strong>。這組管理字彙在工程商務 Email、會議紀錄與國際標案文件中無所不在，是統測職場英文與未來就業的共同核心。</p>\n\n[DIALOGUE_START:專案管理會話：進度落後與變更議價]\nPM: We are two weeks behind schedule and slightly over budget. | 我們進度落後兩週，並且略微超出預算。\nContractor: The delay was caused by a change order from the client. | 延誤是業主的變更指示造成的。\nPM: Then please submit a revised quotation with the extended timeline. | 那請提出含展延時程的修訂報價單。\nContractor: I will send the updated cost breakdown by Friday. | 我會在週五前寄出更新的成本明細。\n[DIALOGUE_END]",
          "table": {
            "headers": [
              "管理面向",
              "核心英文詞彙（詞性・中譯）",
              "實務搭配與例句"
            ],
            "rows": [
              [
                "專案基礎",
                "project (n.) 專案｜scope (n.) 範疇｜milestone (n.) 里程碑｜deliverable (n.) 交付項目｜stakeholder (n.) 利害關係人",
                "define the project scope 界定專案範疇｜reach a milestone 達成里程碑"
              ],
              [
                "時程管理",
                "schedule (n./v.) 時程｜deadline (n.) 期限｜delay (n./v.) 延誤｜critical path (n.) 要徑｜duration (n.) 工期",
                "behind schedule 進度落後｜ahead of schedule 超前｜extend the duration 展延工期"
              ],
              [
                "成本管理",
                "budget (n.) 預算｜cost (n.) 成本｜quotation／quote (n.) 報價單｜estimate (n./v.) 估算｜overrun (n.) 超支",
                "over budget 超出預算｜within budget 預算內｜a detailed cost breakdown 詳細成本明細"
              ],
              [
                "合約與採購",
                "contract (n.) 合約｜tender／bid (n.) 標案／投標｜subcontractor (n.) 分包商｜procurement (n.) 採購｜clause (n.) 條款",
                "award the contract 決標｜submit a bid 投標｜a penalty clause 罰則條款"
              ],
              [
                "變更管理",
                "change order (n.) 變更指示｜variation (n.) 工程變更｜claim (n.) 索賠｜approval (n.) 核准｜revision (n.) 修訂",
                "issue a change order 發出變更指示｜file a claim 提出索賠"
              ],
              [
                "品質管理",
                "quality control (QC) 品管｜quality assurance (QA) 品保｜specification (n.) 規範｜test report (n.) 試驗報告｜rework (n./v.) 重做",
                "fail the quality test 未通過品質試驗｜require rework 需要重做"
              ],
              [
                "風險與安全",
                "risk (n.) 風險｜hazard (n.) 危害｜mitigation (n.) 減緩措施｜contingency (n.) 應變準備金｜incident (n.) 事故",
                "assess the risk 評估風險｜a contingency plan 應變計畫"
              ],
              [
                "會議與溝通",
                "agenda (n.) 議程｜minutes (n.) 會議紀錄｜progress report (n.) 進度報告｜follow up (v.) 後續追蹤｜coordinate (v.) 協調",
                "circulate the minutes 分發會議紀錄｜follow up on the issue 追蹤該議題"
              ]
            ]
          },
          "steps": [
            "三大約束的英文口訣：on scope（符合範疇）、on schedule（如期）、on budget（不超支），三者兼顧才算成功專案。",
            "minutes 在專案語境中是「會議紀錄」（恆為複數），不是「分鐘」，這是專業英文的經典一字多義考點。",
            "報價相關字群：quotation（報價單）→ negotiation（議價）→ contract（簽約）→ invoice（請款）→ payment（付款）。",
            "撰寫工程 Email 時常用被動語態表達客觀：The schedule was revised.（時程已修訂），避免直接歸責。"
          ]
        },
        {
          "heading": "13. 工程英文縮寫總表：從圖說到工地的 40 個必懂代碼",
          "body": "<p>工程圖說與現場文件充滿縮寫。看不懂縮寫，等於看不懂圖。以下把建築土木領域最常出現的縮寫依<strong>結構、材料、圖說、管理、安全</strong>五類整理，並附上完整拼寫與中譯。</p>",
          "table": {
            "headers": [
              "類別",
              "縮寫與完整拼寫",
              "中譯與使用場合"
            ],
            "rows": [
              [
                "結構系統",
                "RC＝Reinforced Concrete｜SRC＝Steel Reinforced Concrete｜SC＝Steel Construction｜PC＝Precast Concrete｜PS＝Prestressed",
                "鋼筋混凝土／鋼骨鋼筋混凝土／鋼構造／預鑄混凝土／預力｜結構圖標題欄與結構計算書"
              ],
              [
                "材料規格",
                "PSI／MPa＝壓力強度單位｜fc'＝混凝土抗壓強度｜fy＝鋼筋降伏強度｜ASTM＝American Society for Testing and Materials",
                "材料強度標示｜規範書與試驗報告"
              ],
              [
                "圖說編號",
                "PLAN＝平面圖｜ELEV＝Elevation 立面圖｜SEC＝Section 剖面圖｜DTL＝Detail 大樣圖｜TYP＝Typical 典型",
                "圖名與索引符號｜施工圖圖框"
              ],
              [
                "尺寸標註",
                "DIM＝Dimension 尺寸｜EL＝Elevation 標高｜GL＝Ground Level 地盤線｜FL＝Floor Level 樓板面｜CL＝Center Line 中心線",
                "圖面標註｜放樣與測量"
              ],
              [
                "數位工具",
                "CAD＝Computer-Aided Design｜BIM＝Building Information Modeling｜GIS＝Geographic Information System｜LOD＝Level of Development",
                "電腦輔助設計／建築資訊模型｜設計協同與碰撞檢查"
              ],
              [
                "專案管理",
                "RFI＝Request for Information｜BOQ＝Bill of Quantities｜PO＝Purchase Order｜QC／QA＝Quality Control／Assurance｜EOT＝Extension of Time",
                "資訊需求單／工程數量表／採購單／品管品保／工期展延｜工地行政文件"
              ],
              [
                "安全衛生",
                "PPE＝Personal Protective Equipment｜MSDS＝Material Safety Data Sheet｜SOP＝Standard Operating Procedure｜EHS＝Environment, Health and Safety",
                "個人防護具／物質安全資料表／標準作業程序｜工安訓練與現場告示"
              ],
              [
                "永續認證",
                "LEED＝Leadership in Energy and Environmental Design｜EEWH＝台灣綠建築標章｜ESG＝Environmental, Social, Governance｜EUI＝Energy Use Intensity",
                "綠建築與永續評估｜國際標案與企業永續報告"
              ]
            ]
          },
          "steps": [
            "縮寫記憶法：先記「完整英文拼寫」，中譯自然浮現——RFI 拆成 Request for Information，就知道是「請求資訊」的表單。",
            "圖說縮寫閱讀順序：先看圖框標題欄（Title Block）確認圖別，再看索引符號找對應大樣圖。",
            "統測專業英文與 PVQC 測驗常直接以縮寫出題，務必能「看縮寫寫全稱」與「看全稱寫縮寫」雙向作答。",
            "面試與實習時能正確使用 RFI、BOQ、PPE 等縮寫，是專業度的直接展現。"
          ]
        }
      ],
      "practices": [
        {
          "question": "Which structural element is primarily designed to resist horizontal soil pressure?[TTS:Which structural element is primarily designed to resist horizontal soil pressure?]\n(A) Beam[TTS:Beam] (B) Retaining Wall[TTS:Retaining Wall] (C) Column[TTS:Column] (D) Slab[TTS:Slab]",
          "difficulty": "2",
          "steps": [
            "分析題意：哪一種結構元件主要是設計來抵抗水平向的土壤壓力？",
            "選項評估：(A) Beam[TTS:Beam](樑)受彎矩, (B) Retaining Wall[TTS:Retaining Wall](擋土牆)擋土, (C) Column[TTS:Column](柱)受軸壓, (D) Slab[TTS:Slab](樓板)受垂直載重。",
            "結論：Retaining Wall[TTS:Retaining Wall] 擋土牆的功能即為抵抗側向土壓力。"
          ],
          "answer": "(B) Retaining Wall[TTS:Retaining Wall]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "A ________ is a drawing that shows the layout of a building as viewed from above.[TTS:A ________ is a drawing that shows the layout of a building as viewed from above.]\n(A) Elevation[TTS:Elevation] (B) Section[TTS:Section] (C) Floor Plan[TTS:Floor Plan] (D) Detail[TTS:Detail]",
          "difficulty": "1",
          "steps": [
            "分析題意：哪一種圖是從上方鳥瞰顯示建築物配置的圖面？",
            "選項評估：(A) Elevation[TTS:Elevation](立面圖), (B) Section[TTS:Section](剖面圖), (C) Floor Plan[TTS:Floor Plan](平面圖), (D) Detail[TTS:Detail](詳圖)。",
            "結論：Floor Plan[TTS:Floor Plan] 就是平面圖，顯示從上往下的空間配置。"
          ],
          "answer": "(C) Floor Plan[TTS:Floor Plan]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "Before pouring concrete into the foundation, workers must finish the ________ placement.[TTS:Before pouring concrete into the foundation, workers must finish the ________ placement.]\n(A) Curing[TTS:Curing] (B) Scaffolding[TTS:Scaffolding] (C) Rebar[TTS:Rebar] (D) Asphalt[TTS:Asphalt]",
          "difficulty": "2",
          "steps": [
            "分析題意：在將混凝土澆置入基礎前，工人必須完成什麼的放置(綁紮)？",
            "選項評估：RC[TTS:RC]工程的順序為：模板->鋼筋->澆置。(A) Curing[TTS:Curing](養護), (B) Scaffolding[TTS:Scaffolding](鷹架), (C) Rebar[TTS:Rebar](鋼筋), (D) Asphalt[TTS:Asphalt](瀝青)。",
            "結論：必須先完成鋼筋綁紮 (Rebar placement[TTS:Rebar placement])。"
          ],
          "answer": "(C) Rebar[TTS:Rebar]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "To ensure accuracy, the surveyor uses a ________ to measure both horizontal and vertical angles on the site.[TTS:To ensure accuracy, the surveyor uses a ________ to measure both horizontal and vertical angles on the site.]\n(A) Prism[TTS:Prism] (B) Benchmark[TTS:Benchmark] (C) Total Station[TTS:Total Station] (D) Hard Hat[TTS:Hard Hat]",
          "difficulty": "2",
          "steps": [
            "分析題意：為了確保精度，測量員使用某儀器來測量工地現場的水平與垂直角。",
            "選項評估：(A) Prism[TTS:Prism](稜鏡), (B) Benchmark[TTS:Benchmark](水準點), (C) Total Station[TTS:Total Station](全測站儀), (D) Hard Hat[TTS:Hard Hat](安全帽)。",
            "結論：Total Station[TTS:Total Station] (全測站儀) 或經緯儀可用來測量角度。"
          ],
          "answer": "(C) Total Station[TTS:Total Station]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "Which of the following is NOT a type of Personal Protective Equipment (PPE)?[TTS:Which of the following is NOT a type of Personal Protective Equipment (PPE)?]\n(A) Steel-toe Boots[TTS:Steel-toe Boots] (B) Goggles[TTS:Goggles] (C) Safety Harness[TTS:Safety Harness] (D) Excavation[TTS:Excavation]",
          "difficulty": "1",
          "steps": [
            "分析題意：下列何者「不是」個人防護裝備 (PPE[TTS:PPE])？",
            "選項評估：(A) Steel-toe Boots[TTS:Steel-toe Boots](安全鞋), (B) Goggles[TTS:Goggles](護目鏡), (C) Safety Harness[TTS:Safety Harness](安全吊帶), (D) Excavation[TTS:Excavation](開挖)。",
            "結論：Excavation[TTS:Excavation] 是施工方法(開挖)，非裝備。"
          ],
          "answer": "(D) Excavation[TTS:Excavation]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "The weight of the building itself, including walls and floors, is referred to as the ________.[TTS:The weight of the building itself, including walls and floors, is referred to as the ________.]\n(A) Live Load[TTS:Live Load] (B) Dead Load[TTS:Dead Load] (C) Wind Load[TTS:Wind Load] (D) Seismic Load[TTS:Seismic Load]",
          "difficulty": "2",
          "steps": [
            "分析題意：建築物本身的重量，包含牆壁與樓板，被稱為什麼？",
            "選項評估：(A) Live Load[TTS:Live Load](活載重), (B) Dead Load[TTS:Dead Load](靜載重), (C) Wind Load[TTS:Wind Load](風載重), (D) Seismic Load[TTS:Seismic Load](地震力)。",
            "結論：建築物的自重屬於 Dead Load[TTS:Dead Load]。"
          ],
          "answer": "(B) Dead Load[TTS:Dead Load]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "________ is a mixture of cement, sand, and water, often used to bind bricks or concrete blocks together.[TTS:________ is a mixture of cement, sand, and water, often used to bind bricks or concrete blocks together.]\n(A) Mortar[TTS:Mortar] (B) Aggregate[TTS:Aggregate] (C) Waterproofing[TTS:Waterproofing] (D) Blueprint[TTS:Blueprint]",
          "difficulty": "2",
          "steps": [
            "分析題意：某物是水泥、砂與水的混合物，常被用來將磚塊或混凝土塊結合在一起。",
            "選項評估：(A) Mortar[TTS:Mortar](砂漿), (B) Aggregate[TTS:Aggregate](骨材), (C) Waterproofing[TTS:Waterproofing](防水層), (D) Blueprint[TTS:Blueprint](藍圖)。",
            "結論：用來黏結磚塊的砂漿英文是 Mortar[TTS:Mortar]。"
          ],
          "answer": "(A) Mortar[TTS:Mortar]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "After pouring concrete, ________ is required to maintain adequate moisture and temperature for it to gain strength.[TTS:After pouring concrete, ________ is required to maintain adequate moisture and temperature for it to gain strength.]\n(A) Excavation[TTS:Excavation] (B) Curing[TTS:Curing] (C) Formwork[TTS:Formwork] (D) Casting[TTS:Casting]",
          "difficulty": "3",
          "steps": [
            "分析題意：澆置混凝土後，需要進行某動作來維持適當的濕度與溫度，以獲得強度。",
            "選項評估：(A) Excavation[TTS:Excavation](開挖), (B) Curing[TTS:Curing](養護), (C) Formwork[TTS:Formwork](模板), (D) Casting[TTS:Casting](澆置)。",
            "結論：維持濕度與溫度幫助強度發展的步驟為 Curing[TTS:Curing] (養護)。"
          ],
          "answer": "(B) Curing[TTS:Curing]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        }
      ],
      "step0Prerequisites": [
        "高中核心 3500 字彙",
        "常見科技與工程字根 (struct, geo, meter, hydr, therm 等)",
        "工程與技術類基本名詞概念 (如 concrete, steel, dimension, survey)"
      ]
    },
    {
      "slug": "grammar-clauses",
      "title": "6. 複合句型與子句",
      "desc": "本章節涵蓋統測必考的關係子句(形容詞子句)、名詞子句、副詞子句，以及分詞構句與使役/感官動詞的進階用法，幫助你掌握複雜句型結構，精準解讀建築與工程規範文件。",
      "status": "done",
      "gradeLevel": 11,
      "examHitRate": 4,
      "fatalTraps": [
        {
          "wrongThinking": "在逗號後面的非限定關係子句或介系詞後面使用 that。",
          "correctThinking": "that 不能用於非限定關係子句（有逗號）中，也不能直接接在介系詞後面（介系詞後修飾人必須用 whom，修飾物必須用 which）。",
          "trapDescription": "例如 \"The bridge, that was built in 1990...\" 是錯誤的，必須改為 which；\"The engineer with that I spoke...\" 必須改為 whom。"
        },
        {
          "wrongThinking": "間接問句（名詞子句）誤用疑問句倒裝語序。",
          "correctThinking": "間接問句充當名詞子句時，語序必須回歸正常陳述語序：疑問詞 + 主詞 + 動詞。",
          "trapDescription": "例如 \"I don't know where is the blueprint\" 錯誤，必須為 \"where the blueprint is\"。"
        }
      ],
      "eliteMentalModels": [
        {
          "technique": "子句角色定位三問法",
          "explanation": "問自己在句中充當什麼成分？修飾名詞為形容詞子句（看缺主詞/受詞）、充當主受詞為名詞子句（看是否完整）、補充條件為副詞子句。"
        },
        {
          "technique": "關係詞三步鎖定法",
          "explanation": "看先行詞（人/物）→ 看子句缺什麼成分（主格/受格/所有格 whose）→ 檢驗有無逗號或介系詞。"
        }
      ],
      "covered_question_ids": [],
      "worked_examples": [
        {
          "question": "請使用關係代名詞合併以下兩個句子：\n1. The new suspension bridge will be completed next year. [TTS:The new suspension bridge will be completed next year.]\n2. The bridge connects the two industrial zones. [TTS:The bridge connects the two industrial zones.]",
          "difficulty": "3",
          "steps": [
            "步驟一：找出兩個句子的共同名詞 (The new suspension bridge = The bridge)。",
            "步驟二：第二句中的 The bridge 是主詞，指物，故使用關係代名詞 which 或 that 替代。",
            "步驟三：將關係子句 (which connects the two industrial zones. [TTS:which connects the two industrial zones.]) 緊接在先行詞 (The new suspension bridge) 之後。",
            "步驟四：整併成完整句子。注意這裡可以視為限定或非限定，若視為特定唯一的一座橋，可用逗號隔開作補充說明。"
          ],
          "answer": "The new suspension bridge, which connects the two industrial zones, will be completed next year. [TTS:The new suspension bridge, which connects the two industrial zones, will be completed next year.]",
          "hints": [
            "仔細分析句子主詞、動詞與受詞結構",
            "根據上下文語境與關鍵字線索判斷最適選項"
          ],
          "commonMistake": "容易受外觀相似的單字或字面直譯干擾，未完整分析句子文法功能。",
          "eliteShortcut": "文法結構分析法：先確認空格所缺詞性與句法功能，快速排除不符選項，秒殺破題！"
        }
      ],
      "illustrations": [
        "context.webp",
        "mechanism.webp",
        "comparison.webp"
      ],
      "concepts": [
        {
          "heading": "關係代名詞與形容詞子句",
          "body": "<p>形容詞子句用來修飾前面的名詞（先行詞），由<span className=\"font-semibold text-blue-600\">關係代名詞 (who, whom, which, that, whose) [TTS:who, whom, which, that, whose]</span>引導。需特別注意限定與非限定（有逗號）的差別，以及介系詞移至關代前面的進階句型。在工程敘述中，常用形容詞子句來精確定義材料或工法。</p>\n\n<div className=\"p-3 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 text-xs font-mono space-y-1 my-3\">\n  <div className=\"font-bold text-purple-800 dark:text-purple-300\">🌳 關係子句解剖樹狀圖解：</div>\n  <div>• [先行詞 N (人)] ──► [who / whom / whose] ──► (缺少主格/受格/所有格)</div>\n  <div>• [先行詞 N (物)] ──► [which / that / whose]  ──► (缺少主格/受格/所有格)</div>\n  <div>⚠️ 兩大禁忌：逗號後面不能用 that；介系詞後面不能用 that！</div>\n</div>\n\n[DIALOGUE_START:關係子句會話：精準修飾建築標的]\nArchitect: The tower that was constructed with recycled steel won a green building gold medal. | 那棟使用回收鋼材建造的塔樓榮獲了綠建築金獎。\nIntern: Here, \"that was constructed with recycled steel\" is an adjective clause modifying \"tower\". | 這裡 that was constructed with recycled steel 是形容詞子句，用來修飾 tower。\nArchitect: Correct. When referring to engineers, we use \"who\": \"The engineer who inspected the site is John.\" | 沒錯。指涉工程師時我們用 who：「勘查工地的工程師是約翰。」\nIntern: Relative clauses help combine multiple observations into one sophisticated sentence. | 關係子句能幫我們把多個觀察整合成一個嚴謹的高階句子。\n[DIALOGUE_END]",
          "steps": [
            "判斷先行詞是人、事、物或地方/時間。",
            "判斷關代在子句中扮演的角色（主詞、受詞或所有格）。",
            "若有逗號（非限定），不可使用 that [TTS:that]。",
            "若關代作為介系詞的受詞，介系詞可移至 which/whom [TTS:which/whom] 之前（如 in which [TTS:in which]）。"
          ],
          "table": {
            "headers": [
              "用法",
              "先行詞",
              "句型結構",
              "工程實例"
            ],
            "rows": [
              [
                "主格 (人)",
                "architect, engineer [TTS:architect, engineer]",
                "who + V [TTS:who + V]",
                "The engineer who designed this bridge is famous. [TTS:The engineer who designed this bridge is famous.]"
              ],
              [
                "受格 (人)",
                "client, worker [TTS:client, worker]",
                "whom + S + V [TTS:whom + S + V]",
                "The client whom we met yesterday approved the plan. [TTS:The client whom we met yesterday approved the plan.]"
              ],
              [
                "主/受格 (物)",
                "material, building [TTS:material, building]",
                "which + V / S+V [TTS:which + V / S+V]",
                "Concrete is a material which is widely used. [TTS:Concrete is a material which is widely used.]"
              ],
              [
                "所有格",
                "company, structure [TTS:company, structure]",
                "whose + N [TTS:whose + N]",
                "A building whose foundation is weak will collapse. [TTS:A building whose foundation is weak will collapse.]"
              ]
            ]
          }
        },
        {
          "heading": "名詞子句與間接問句",
          "body": "<p>名詞子句在句子中可當作主詞、受詞或補語。常見的引導詞有 <span className=\"text-purple-600\">that [TTS:that]</span>、<span className=\"text-purple-600\">whether/if [TTS:whether/if] (是否)</span> 以及 <span className=\"text-purple-600\">wh- 疑問詞</span>。最重要的規則是：間接問句必須恢復為「<span className=\"font-bold\">直述句語序 (S + V)</span>」。</p>\n\n[DIALOGUE_START:名詞子句會話：轉述檢驗結果與疑問]\nInspector: Do you know whether the soil bearing capacity meets the minimum requirement? | 你知道土壤承載力是否符合最低要求嗎？\nGeotechnical Engineer: The test report indicates that the bedrock layer is solid enough. | 檢驗報告指出岩盤層非常堅固穩固。\nInspector: Please inform the project director how much settlement is expected. | 請告知專案主管預期的沉陷量是多少。\nGeotechnical Engineer: I will explain what measures we have taken to prevent differential settlement. | 我會解釋我們採取了哪些措施來防止不均勻沉陷。\n[DIALOGUE_END]",
          "steps": [
            "確認子句在句中扮演的角色（如 know, wonder, ask [TTS:know, wonder, ask] 後面的受詞）。",
            "若是敘述事實，用 that [TTS:that] 引導。",
            "若是是非問句改寫，用 whether 或 if [TTS:whether / if] 引導。",
            "若是 wh- 問句改寫，保留疑問詞，並將後面的動詞改為主詞+動詞的語序。"
          ],
          "table": {
            "headers": [
              "種類",
              "引導詞",
              "句型語序",
              "工程實例"
            ],
            "rows": [
              [
                "敘述事實",
                "that [TTS:that]",
                "that + S + V [TTS:that + S + V]",
                "We know that steel is essential for construction. [TTS:We know that steel is essential for construction.]"
              ],
              [
                "是否",
                "whether / if [TTS:whether / if]",
                "whether + S + V [TTS:whether + S + V]",
                "The inspector asked if the concrete had set. [TTS:The inspector asked if the concrete had set.]"
              ],
              [
                "間接問句",
                "what / how / where [TTS:what / how / where]",
                "疑問詞 + S + V",
                "They want to figure out why the beam failed. [TTS:They want to figure out why the beam failed.]"
              ]
            ]
          }
        },
        {
          "heading": "副詞子句與從屬連接詞",
          "body": "<p>副詞子句用來表示時間、條件、讓步、原因或結果，由<span className=\"text-green-600\">從屬連接詞</span>引導。理解各種連接詞的語意是統測閱讀測驗與克漏字的拿分關鍵。</p>\n\n[DIALOGUE_START:副詞子句會話：時間與條件因果分析]\nSite Supervisor: Although the weather was harsh, the team finished the roofing on schedule. | 雖然天氣惡劣，團隊依然如期完成了屋頂工程。\nClient: If the rainfall continues tomorrow, will you stop the outdoor painting? | 如果明天下雨持續，你們會停止戶外塗裝作業嗎？\nSite Supervisor: Yes, because moisture damages paint adhesion, we will work indoors instead. | 是的，因為濕氣會破壞油漆附著力，所以我們會改在室內施作。\nClient: We appreciate that you never compromise on quality control. | 我們非常讚賞你們絕不在品質管制上妥協。\n[DIALOGUE_END]",
          "steps": [
            "分析前後句的邏輯關係（如因果、對比、先後順序）。",
            "選擇適當語意的連接詞。",
            "注意時態：在時間與條件副詞子句中，常用「現在式代替未來式」。"
          ],
          "table": {
            "headers": [
              "邏輯關係",
              "常見連接詞",
              "說明",
              "工程實例"
            ],
            "rows": [
              [
                "時間",
                "when, while, until [TTS:when, while, until]",
                "表示事件發生的時間點或期間",
                "Do not remove the formwork until the concrete hardens. [TTS:Do not remove the formwork until the concrete hardens.]"
              ],
              [
                "條件",
                "if, unless [TTS:if, unless] (除非)",
                "表示假設的情況",
                "Unless we reinforce the pillar, the roof might cave in. [TTS:Unless we reinforce the pillar, the roof might cave in.]"
              ],
              [
                "讓步",
                "although, even though [TTS:although, even though]",
                "表示退一步的對比",
                "Although it rained heavily, the construction continued. [TTS:Although it rained heavily, the construction continued.]"
              ],
              [
                "因果/結果",
                "because, since / so...that [TTS:because, since / so...that]",
                "表示原因或導致的結果",
                "The soil is so soft that we need deep piles. [TTS:The soil is so soft that we need deep piles.]"
              ]
            ]
          }
        },
        {
          "heading": "介系詞 vs 連接詞辨析",
          "body": "<p>統測極常考意義相近但詞性不同的字。記住一個鐵則：<span className=\"font-bold text-rose-600\">連接詞後面接完整子句(S+V)，介系詞後面接名詞或動名詞(V-ing)</span>。</p>\n\n[DIALOGUE_START:介系詞與連接詞辨析會話：因果與讓步表達]\nWriter: Should I write \"because the storm\" or \"because of the storm\"? | 我應該寫 because the storm 還是 because of the storm？\nEditor: \"Because of\" is a preposition, so it is followed by a noun: \"because of the storm\". | because of 是介系詞，所以後面接名詞：「because of the storm」。\nWriter: What about \"despite\" vs \"although\"? | 那 despite 和 although 呢？\nEditor: \"Despite the heavy rain\" uses a noun, while \"Although it rained heavily\" uses a subject and verb. | Despite the heavy rain 接名詞，而 Although it rained heavily 則接主詞與動詞。\n[DIALOGUE_END]",
          "steps": [
            "圈出空格後的結構。",
            "如果後面有主詞和動詞，空格填連接詞。",
            "如果後面只有名詞、名詞片語或 V-ing [TTS:V-ing]，空格填介系詞。"
          ],
          "table": {
            "headers": [
              "語意",
              "連接詞 (接子句 S+V)",
              "介系詞 (接 N/V-ing)",
              "實例對照"
            ],
            "rows": [
              [
                "因為",
                "because, since, as [TTS:because, since, as]",
                "because of, due to [TTS:because of, due to]",
                "We stopped working due to the typhoon. [TTS:We stopped working due to the typhoon.]"
              ],
              [
                "雖然",
                "although, though [TTS:although, though]",
                "despite, in spite of [TTS:despite, in spite of]",
                "Despite the high cost, we chose steel. [TTS:Despite the high cost, we chose steel.]"
              ]
            ]
          }
        },
        {
          "heading": "使役動詞與感官動詞",
          "body": "<p>在描述工程指示或工地觀察時常會用到。<span className=\"font-bold\">使役動詞 (make, have, let) [TTS:make, have, let]</span> 表示叫某人做某事；<span className=\"font-bold\">感官動詞 (see, hear, watch, notice) [TTS:see, hear, watch, notice]</span> 表示感官的接收。需根據受詞與受詞補語的主被動關係來決定動詞型態。</p>\n\n[DIALOGUE_START:使役與感官動詞會話：現場操作督導]\nManager: I had the subcontractor submit the crane operation permit this morning. | 我今天早上讓分包商提交了起重機操作許可證。\nSafety Officer: I saw the crane lift the steel truss safely into position. | 我有看到起重機安全地將鋼桁架吊裝定位。\nManager: Make sure you let no unauthorized personnel enter the lifting radius. | 請確保絕不讓任何未經授權的人員進入吊裝迴轉半徑內。\nSafety Officer: We always keep the exclusion zone strictly cordoned off. | 我們全程將管制區嚴密拉起封鎖線。\n[DIALOGUE_END]",
          "steps": [
            "確認主要動詞是使役動詞還是感官動詞。",
            "找出受詞。",
            "判斷受詞與後方動作的關係：主動做(用原形或V-ing)還是被動接受(用 p.p. [TTS:p.p.])。",
            "特別注意 let [TTS:let] 的被動用法是 let + O + be p.p. [TTS:let + O + be p.p.]"
          ],
          "table": {
            "headers": [
              "動詞類型",
              "主動用法",
              "被動用法",
              "工程實例"
            ],
            "rows": [
              [
                "使役 (make/have [TTS:make and have])",
                "O + 原形動詞 (V [TTS:base verb])",
                "O + 過去分詞 (p.p. [TTS:past participle])",
                "The manager had the blueprints redrawn. [TTS:The manager had the blueprints redrawn.]"
              ],
              [
                "使役 (let [TTS:let])",
                "O + 原形動詞 (V [TTS:base verb])",
                "O + be p.p. [TTS:be plus past participle]",
                "Let the cement be mixed properly. [TTS:Let the cement be mixed properly.]"
              ],
              [
                "感官 (see/hear [TTS:see and hear])",
                "O + V (事實) / V-ing (進行 [TTS:verb with ing])",
                "O + 過去分詞 (p.p. [TTS:past participle])",
                "I saw the crane lifting the heavy steel beams. [TTS:I saw the crane lifting the heavy steel beams.]"
              ]
            ]
          }
        },
        {
          "heading": "分詞片語修飾 (主動 vs 被動)",
          "body": "<p>分詞可以當作形容詞來修飾名詞。現在分詞 (<span className=\"text-blue-600\">V-ing [TTS:V-ing]</span>) 表示<span className=\"font-bold\">主動或進行</span>；過去分詞 (<span className=\"text-rose-600\">p.p. [TTS:p.p.]</span>) 表示<span className=\"font-bold\">被動或完成</span>。此句型常用於精簡句子結構。</p>\n\n[DIALOGUE_START:分詞片語修飾會話：精簡工程描述句]\nTeacher: How do you shorten \"The workers who are wearing yellow vests are scaffolders\"? | 你要如何精簡 The workers who are wearing yellow vests are scaffolders 這句話？\nStudent: We reduce it to: \"The workers wearing yellow vests are scaffolders.\" | 我們將它簡化為：The workers wearing yellow vests are scaffolders。\nTeacher: And what about passive voice: \"The blueprints prepared by the architect\"? | 那被動語態呢：The blueprints prepared by the architect？\nStudent: The past participle \"prepared\" modifies \"blueprints\" directly! | 過去分詞 prepared 直接修飾名詞 blueprints！\n[DIALOGUE_END]",
          "steps": [
            "找出被修飾的名詞。",
            "判斷該名詞與動作的關係。",
            "若名詞是動作的發出者（主動），選擇 V-ing [TTS:V-ing]。",
            "若名詞是動作的承受者（被動），選擇 p.p. [TTS:p.p.]。"
          ],
          "table": {
            "headers": [
              "分詞類型",
              "語意",
              "用法",
              "工程實例"
            ],
            "rows": [
              [
                "現在分詞 (V-ing [TTS:present participle, V-ing])",
                "主動、進行",
                "N + V-ing [TTS:N plus V-ing]",
                "The workers repairing the roof are wearing safety harnesses. [TTS:The workers repairing the roof are wearing safety harnesses.]"
              ],
              [
                "過去分詞 (p.p. [TTS:past participle])",
                "被動、完成",
                "N + p.p. [TTS:N plus past participle]",
                "The materials used in this project are eco-friendly. [TTS:The materials used in this project are eco-friendly.]"
              ],
              [
                "情緒分詞 (V-ing [TTS:participle with ing])",
                "令人...的 (通常修飾物)",
                "N + be V-ing [TTS:N plus be plus V-ing]",
                "The architectural design is amazing. [TTS:The architectural design is amazing.]"
              ],
              [
                "情緒分詞 (V-ed [TTS:participle with ed])",
                "感到...的 (通常修飾人)",
                "S(人) + be V-ed [TTS:subject plus be plus V-ed]",
                "The engineers were excited about the new software. [TTS:The engineers were excited about the new software.]"
              ]
            ]
          }
        },
        {
          "heading": "對話與情境應用：討論專案進度",
          "body": "<p>在工程與建築實務中，經常會運用到複雜句型來溝通專案狀況。</p>\n\n[DIALOGUE_START:專案進度對話：甘特圖里程碑追蹤]\nProject Director: According to the master schedule, when will the curtain wall installation begin? | 根據總進度表，帷幕牆安裝什麼時候會開始？\nContractor: As soon as the structural steel framework passes the bolt torque inspection. | 只要鋼骨結構架構通過螺栓扭力檢驗，就會立刻開始。\nProject Director: We need to make sure that the interior fit-out starts before the rainy season. | 我們必須確保室內裝修在雨季來臨前展開。\nContractor: We have added extra shifts to accelerate the progress. | 我們已經加派班次來加快施工進度。\n[DIALOGUE_END]",
          "steps": [
            "A: Have you checked the materials that were delivered this morning? [TTS:Have you checked the materials that were delivered this morning?] (你檢查過今天早上送來的材料了嗎？)",
            "B: Yes, but I noticed that some of the steel beams, which are essential for the frame, were damaged. [TTS:Yes, but I noticed that some of the steel beams, which are essential for the frame, were damaged.] (有，但我注意到一些對框架很重要的鋼樑受損了。)",
            "A: Let's have the supplier replace them immediately. [TTS:Let's have the supplier replace them immediately.] (我們讓供應商立刻更換它們。)"
          ]
        },
        {
          "heading": "對話與情境應用：工地安全指示",
          "body": "<p>確保工地安全的指示也常使用副詞子句與使役動詞。</p>\n\n[DIALOGUE_START:工地安全指示對話：高空作業預防措施]\nSafety Lead: Before you climb the scaffolding, inspect whether all toe-boards are secured. | 在你爬上鷹架之前，請先檢查所有的防墜腳趾板是否牢固固定。\nWorker: I have verified that every plank is tied down firmly with wire. | 我已經確認過每塊走道板都用鐵絲牢牢綁緊了。\nSafety Lead: Never unhook your safety harness while moving across the elevated platform. | 在挑高作業平台移動時，切勿解開你的安全帶掛鉤。\nWorker: I always use the 100 percent tie-off rule with dual lanyards. | 我一向遵循雙鉤 100% 繫掛的安全防護原則。\n[DIALOGUE_END]",
          "steps": [
            "A: Do not start the excavation until the site manager gives the signal. [TTS:Do not start the excavation until the site manager gives the signal.] (在工地主任發出信號前，不要開始挖掘。)",
            "B: I understand. I will also make sure that everyone wears their safety gear. [TTS:I understand. I will also make sure that everyone wears their safety gear.] (我明白。我也會確保每個人都穿戴好安全裝備。)",
            "A: Good. Safety is the priority even though we are behind schedule. [TTS:Good. Safety is the priority even though we are behind schedule.] (很好。即使我們進度落後，安全仍是首要任務。)"
          ]
        },
        {
          "heading": "9. 複合關係代名詞 (what) 與關係副詞 (where, when, why) 速查大表",
          "body": "複合關係代名詞 <span className=\"font-bold text-blue-600\">what [TTS:what]</span> 相當於 the thing(s) which [TTS:the thing(s) which]，本身已包含先行詞，因此其前方絕對不能再有名詞先行詞，其引導之名詞子句在全句中扮演主詞、受詞或補語。<br/>而關係副詞 <span className=\"font-bold text-emerald-600\">where, when, why [TTS:where, when, why]</span> 則由「介系詞 + 關係代名詞 which」衍生而來（如 in which = where, on which = when, for which = why），修飾時間、地點、原因之先行詞，後方接「主謂受完整子句（不缺主詞或受詞）」。在統測題中是區分頂標與均標的分水嶺。\n\n[DIALOGUE_START:複合關係詞與關係副詞解析會話：工法論證]\nJunior Engineer: Should I write: \"This is the factory what produces precast panels\"? | 我應該寫 This is the factory what produces precast panels 嗎？\nSenior Engineer: No, \"what\" contains its own antecedent. Say: \"This is the factory WHICH produces...\" or \"...WHERE precast panels are made.\" | 不行，what 本身就自帶先行詞了。應該說：This is the factory which produces... 或 where precast panels are made。\nJunior Engineer: Ah! \"Where\" introduces a complete clause, whereas \"which\" acts as the subject! | 啊！where 引導主謂完整的子句，而 which 在子句中擔任主詞！\nSenior Engineer: Spot on. Remember: What you learn today guarantees construction quality tomorrow. | 一點也沒錯。記住：你今天所學的知識，確保了明天的施工品質。\n[DIALOGUE_END]",
          "table": {
            "headers": [
              "關係詞類別",
              "等價替換公式",
              "後方子句完整度",
              "經典考題與工程實例"
            ],
            "rows": [
              [
                "what (複合關代) [TTS:what]",
                "the thing(s) which / that [TTS:the thing which]",
                "不完整（缺 S 或 O）",
                "What matters most on a jobsite is safety. [TTS:What matters most on a jobsite is safety.] (工地上最重要的就是安全。)"
              ],
              [
                "where (地點關係副詞) [TTS:where]",
                "in / at / on which [TTS:in which, at which, on which]",
                "完整（S + V + O）",
                "This is the laboratory where we test tensile strength. [TTS:This is the laboratory where we test tensile strength.] (這是我們測試抗拉強度的實驗室。)"
              ],
              [
                "when (時間關係副詞) [TTS:when]",
                "at / in / on which [TTS:at which, in which]",
                "完整（S + V + O）",
                "I remember the day when the foundation was poured. [TTS:I remember the day when the foundation was poured.] (我記得澆灌地基的那一天。)"
              ],
              [
                "why (原因關係副詞) [TTS:why]",
                "for which [TTS:for which]",
                "完整（S + V + O）",
                "That is the reason why the concrete cracked. [TTS:That is the reason why the concrete cracked.] (這就是混凝土開裂的原因。)"
              ],
              [
                "whose (所有格關代) [TTS:whose]",
                "of which the + N [TTS:of which the noun]",
                "名詞前置完整句（whose + N + V）",
                "We hired an architect whose blueprints won first prize. [TTS:We hired an architect whose blueprints won first prize.] (我們聘請了一位藍圖榮獲首獎的建築師。)"
              ]
            ]
          },
          "steps": [
            "步驟一：觀察空格前面是否有先行詞名詞。若已有先行詞（如 the factory），絕不可選 what [TTS:what]。",
            "步驟二：檢視空格後方子句是否完整。若缺少主詞或受詞，應選關係代名詞 which / who / that [TTS:which, who, that]。",
            "步驟三：若先行詞為地點且後方子句主謂完整，選 where [TTS:where] 或「介系詞 + which」[TTS:preposition plus which]。",
            "步驟四：若先行詞是 the reason 且後方子句完整，選 why [TTS:why]；若先行詞是 the way，不可與 how 並存（只寫 the way 或 how）[TTS:the way or how]。",
            "步驟五：進行回填驗算：若將空格換為 that which 或 in which 能讀通，即可確認作答正確。"
          ]
        },
        {
          "heading": "10. 限定用法 vs 非限定用法關係子句：一個逗號的意義",
          "body": "<p>關係子句最容易失分的地方，不是關代選錯，而是<strong>逗號的有無</strong>。有逗號（非限定用法）代表「補充說明，拿掉不影響句子成立」；沒逗號（限定用法）代表「界定範圍，拿掉句意就不完整」。統測近年在此設計了大量誘答選項。</p>\n\n[DIALOGUE_START:關係子句會話：逗號帶來的語意差異]\nTeacher: What is the difference between these two sentences? | 這兩個句子有什麼差別？\nStudent: The first one says \"my brother who is an architect\", so I have several brothers. | 第一句說「我那位當建築師的哥哥」，表示我有好幾個哥哥。\nTeacher: Right. And with a comma, it means you have only one brother. | 沒錯。加上逗號，就表示你只有一個哥哥。\nStudent: So the comma actually changes the meaning of the whole sentence. | 所以逗號其實改變了整句話的意思。\n[DIALOGUE_END]",
          "table": {
            "headers": [
              "比較項目",
              "限定用法（無逗號）",
              "非限定用法（有逗號）"
            ],
            "rows": [
              [
                "核心功能",
                "界定範圍，指出「是哪一個」",
                "補充說明，先行詞本身已明確"
              ],
              [
                "能否省略",
                "不可省略，省略後句意不完整",
                "可省略，省略後主要子句仍成立"
              ],
              [
                "例句對照",
                "My brother who is an architect lives in Taipei.（我那位當建築師的哥哥——暗示我有多個哥哥）",
                "My brother, who is an architect, lives in Taipei.（我哥哥，他是建築師——我只有一個哥哥）"
              ],
              [
                "可否用 that",
                "可用 that 代替 who／which",
                "絕對不可用 that（統測必考禁忌）"
              ],
              [
                "關代可否省略",
                "當受詞時可省略：the plan (which) I mentioned",
                "一律不可省略"
              ],
              [
                "先行詞為專有名詞",
                "通常不適用（專有名詞已唯一）",
                "專有名詞後幾乎一定用非限定：Taipei 101, which opened in 2004, …"
              ],
              [
                "先行詞為整個句子",
                "不適用",
                "which 可代替整個主要子句：He arrived late, which annoyed the client."
              ],
              [
                "語氣與書面感",
                "資訊密度高，常見於定義與規範文句",
                "常見於新聞、報導與說明文的補充資訊"
              ]
            ]
          },
          "steps": [
            "判斷步驟：先問「拿掉這個子句，讀者還知道講的是哪一個嗎？」知道 → 加逗號（非限定）；不知道 → 不加逗號（限定）。",
            "統測三大禁忌一次記：非限定用法不可用 that、不可省略關代、不可用 what 當關代。",
            "which 代替「整句話」時必定是非限定用法，且前面一定有逗號：He failed the test, which surprised everyone.",
            "專有名詞（人名、地名、建築名）當先行詞時，幾乎一律使用非限定用法並加逗號。",
            "寫作應用：非限定關係子句是在一句話內補充背景資訊的高效工具，可讓非選寫作句型更成熟。"
          ]
        },
        {
          "heading": "11. 介系詞＋關係代名詞、關代省略與 that 的限用與禁用",
          "body": "<p>這一節處理關係子句的三個進階操作：<strong>介系詞往前移、關代省略、that 的使用時機</strong>。三者都是統測綜合測驗與非選句子重組的高頻考點，也是判斷考生程度的分水嶺。</p>",
          "table": {
            "headers": [
              "進階操作",
              "規則說明",
              "例句與陷阱"
            ],
            "rows": [
              [
                "介系詞 ＋ 關代（正式）",
                "介系詞可移到關代前，此時關代只能用 whom／which，不可用 that 或 who",
                "The engineer with whom I worked is retiring.（○）／with that I worked（×）｜The site at which we met…"
              ],
              [
                "介系詞留在句尾（口語）",
                "介系詞留在原位時，關代可用 who／that，也可省略",
                "The engineer (who／that) I worked with is retiring.（○）"
              ],
              [
                "關代省略的唯一條件",
                "只有「受格關代」可省略；主格關代不可省略",
                "The plan (which) I mentioned（受格，可省略）／The man who called me（主格，不可省略）"
              ],
              [
                "that 的必用時機",
                "先行詞含最高級、序數、the only／the very／the same／all／no／everything／anything，或先行詞同時含人與物",
                "He is the only person that can solve it.｜The man and his dog that crossed the road…"
              ],
              [
                "that 的禁用時機",
                "① 非限定用法（有逗號）② 介系詞緊接其前",
                "Taipei 101, that opened in 2004（×）→ which（○）｜the tool with that（×）→ with which（○）"
              ],
              [
                "whose 的用法",
                "表所有格，人與物皆可用；後面直接接名詞不加冠詞",
                "the building whose roof collapsed｜the engineer whose design won the award"
              ],
              [
                "關係副詞 ↔ 介系詞＋關代",
                "where＝in／at which｜when＝on／in which｜why＝for which",
                "the room where we met＝the room in which we met｜the day when it happened＝the day on which it happened"
              ],
              [
                "what 不是關係代名詞",
                "what＝the thing(s) which，本身已含先行詞，前面不可再有名詞",
                "This is what I need.（○）／This is the thing what I need.（×）"
              ]
            ]
          },
          "steps": [
            "省略判斷法：把關代拿掉後，如果子句還有自己的主詞（如 I mentioned 的 I），代表它是受格，可以省略。",
            "介系詞前移是「正式書面語」的標誌，非選寫作使用可提升句子成熟度，但務必搭配 whom／which。",
            "先行詞被最高級或 the only 修飾時，關代優先用 that，這是統測近十年反覆出現的送分題。",
            "句子重組題看到 with／for／in ＋ whom／which，直接判定它們必須連在一起放，不可拆開。",
            "驗證技巧：把關係子句還原成兩個獨立句子，確認關代替代的是哪一個名詞、扮演什麼格位。"
          ]
        },
        {
          "heading": "12. 減化關係子句：分詞化與不定詞化的四種路徑",
          "body": "<p>減化關係子句（Reduced Relative Clause）是把冗長的關係子句<strong>壓縮成分詞片語或不定詞片語</strong>，讓句子更精煉。這是統測「句子改寫」與閱讀長句拆解的核心技術，也是分詞構句的前置基礎。</p>\n\n[DIALOGUE_START:減化關係子句會話：把長句變精煉]\nTeacher: How can we shorten \"the workers who are wearing helmets\"? | 我們怎麼把 the workers who are wearing helmets 縮短？\nStudent: We can say \"the workers wearing helmets\" by deleting who are. | 可以刪掉 who are，說成 the workers wearing helmets。\nTeacher: Good. And \"the report which was written by Amy\"? | 很好。那 the report which was written by Amy 呢？\nStudent: That becomes \"the report written by Amy\". | 會變成 the report written by Amy。\n[DIALOGUE_END]",
          "table": {
            "headers": [
              "減化路徑",
              "適用條件與公式",
              "例句（原句 → 減化）"
            ],
            "rows": [
              [
                "① 主動 → 現在分詞 (V-ing)",
                "主格關代 ＋ 主動語態，刪關代與 be，動詞改 V-ing",
                "The man who lives next door → The man living next door"
              ],
              [
                "② 被動 → 過去分詞 (p.p.)",
                "主格關代 ＋ 被動語態，刪關代與 be 即可",
                "The report which was written by Amy → The report written by Amy"
              ],
              [
                "③ 進行式 → 直接刪 be",
                "主格關代 ＋ be ＋ V-ing，刪關代與 be",
                "The workers who are wearing helmets → The workers wearing helmets"
              ],
              [
                "④ 表未來或用途 → 不定詞 (to V)",
                "先行詞含 the first／the last／the only／序數／最高級，或表「該做的事」",
                "He is the first man who arrived → He is the first man to arrive｜the work which must be done → the work to be done"
              ],
              [
                "⑤ 形容詞片語化",
                "關代 ＋ be ＋ 形容詞／介系詞片語，直接刪關代與 be",
                "The book which is on the desk → The book on the desk｜The girl who is beautiful → 需改為 The beautiful girl（單一形容詞須前置）"
              ],
              [
                "⑥ 同位語化",
                "關代 ＋ be ＋ 名詞片語，刪關代與 be 成為同位語",
                "Mr. Lin, who is our supervisor, … → Mr. Lin, our supervisor, …"
              ],
              [
                "減化的必要條件",
                "只有「主格關代」可減化；受格關代不可（但可直接省略）",
                "The plan which I made（受格）→ The plan I made（省略而非減化）"
              ],
              [
                "常見誤判陷阱",
                "V-ing 在名詞後可能是「減化關係子句」而非「動名詞」",
                "The student studying in the lab is my brother.（studying＝who is studying，非動名詞主詞）"
              ]
            ]
          },
          "steps": [
            "減化三步驟：① 確認是主格關代 ② 刪掉「關代 ＋ be」 ③ 若無 be 動詞，把主動的動詞改成 V-ing。",
            "閱讀長句時反向操作：看到名詞後接 V-ing 或 p.p.，先把它還原成「who／which ＋ be」，句子結構立刻清晰。",
            "分辨 -ing 的三種身分：動名詞（當名詞）、現在分詞（當形容詞／減化關係子句）、進行式（與 be 連用），判斷依據是它在句中的位置與功能。",
            "統測非選句子重組常出現減化結構，看到 written／wearing／located 這類分詞，先確認它修飾哪個名詞。",
            "自我練習：把一篇文章中的關係子句全部改寫成減化形式，再讀一次，體會文句密度的變化。"
          ]
        },
        {
          "heading": "13. 對等連接詞、相關連接詞與平行結構",
          "body": "<p>對等連接詞（and／but／or／so／for／yet／nor）與相關連接詞（both…and、not only…but also）的考點有兩個：<strong>①連接的兩端必須詞性對稱（平行結構）②連接主詞時的動詞單複數判斷</strong>。這是統測非選寫作最常被扣分的結構問題。</p>",
          "table": {
            "headers": [
              "連接詞",
              "語意與結構",
              "動詞單複數與例句"
            ],
            "rows": [
              [
                "both A and B",
                "兩者都",
                "一律接「複數動詞」：Both the engineer and the architect are on site."
              ],
              [
                "not only A but also B",
                "不僅 A 而且 B（重點在 B）",
                "就近原則：Not only the workers but also the foreman is responsible."
              ],
              [
                "either A or B",
                "A 或 B 其中之一",
                "就近原則：Either the beams or the column needs reinforcement."
              ],
              [
                "neither A nor B",
                "A 與 B 都不",
                "就近原則：Neither the drawings nor the report was submitted."
              ],
              [
                "A as well as B",
                "A 以及 B（重點在 A）",
                "動詞依「A」決定：The engineer, as well as the workers, is on site."
              ],
              [
                "A and B（一般對等）",
                "並列",
                "接複數動詞；但指「同一人事物」時接單數：Bread and butter is my breakfast."
              ],
              [
                "not A but B",
                "不是 A 而是 B",
                "動詞依 B 決定：Not the workers but the supervisor is to blame."
              ],
              [
                "平行結構要求",
                "連接詞兩端的「詞性與結構」必須一致",
                "He is diligent and reliable.（形容詞＋形容詞）｜She likes drawing and modeling.（動名詞＋動名詞）｜（×）She likes drawing and to model."
              ]
            ]
          },
          "steps": [
            "就近原則（Proximity Rule）適用於 either…or／neither…nor／not only…but also／not…but：動詞由「最靠近的主詞」決定。",
            "both…and 是唯一「一律接複數動詞」的相關連接詞，不適用就近原則。",
            "as well as／along with／together with／in addition to 屬於「附加語」而非對等連接詞，動詞仍由主要主詞決定。",
            "平行結構自我檢查法：把連接詞兩端各自畫線，確認它們是「同一種東西」（都是名詞、都是不定詞、都是子句）。",
            "非選寫作高分句型：Not only did he finish the report, but he also revised the drawings.（not only 置句首要倒裝）。"
          ]
        },
        {
          "heading": "14. 結果與程度句型：so／such…that、too…to、enough to",
          "body": "<p>這三組句型表達「程度導致的結果」，是統測<strong>非選句子改寫題的常客</strong>。它們之間可以互相轉換，命題委員最愛考「同義改寫時的細節變化」，尤其是 too…to 轉成 so…that 時必須補上否定。</p>\n\n[DIALOGUE_START:程度句型會話：描述工地狀況]\nForeman: The noise was so loud that we had to stop the meeting. | 噪音大到我們必須中斷會議。\nEngineer: It was such a noisy morning that nobody could concentrate. | 那是個吵到沒人能專心的早上。\nForeman: The scaffolding is too weak to support the load. | 這鷹架太脆弱，無法支撐荷重。\nEngineer: Right. It isn't strong enough to hold the equipment. | 沒錯，它的強度不足以承載設備。\n[DIALOGUE_END]",
          "table": {
            "headers": [
              "句型",
              "結構公式",
              "例句與轉換"
            ],
            "rows": [
              [
                "so ＋ 形容詞／副詞 ＋ that",
                "so 後面接「形容詞或副詞」",
                "The noise was so loud that we stopped the meeting."
              ],
              [
                "such ＋ (a／an) ＋ 形容詞 ＋ 名詞 ＋ that",
                "such 後面接「名詞片語」",
                "It was such a noisy morning that nobody could concentrate."
              ],
              [
                "so ＋ 形容詞 ＋ a／an ＋ 單數名詞 ＋ that",
                "so 與名詞連用的特殊語序（較正式）",
                "It was so noisy a morning that…＝It was such a noisy morning that…"
              ],
              [
                "so many／much／few／little ＋ 名詞 ＋ that",
                "數量詞搭配",
                "There were so many defects that the work had to be redone."
              ],
              [
                "too ＋ 形容詞／副詞 ＋ to V",
                "「太…以致於不能…」，本身已含否定，不可再加 not",
                "The scaffolding is too weak to support the load.（× too weak not to support）"
              ],
              [
                "形容詞／副詞 ＋ enough to V",
                "「足夠…以致於能…」，enough 放形容詞「後面」",
                "It is strong enough to hold the equipment.（× enough strong）"
              ],
              [
                "too…to ↔ so…that 轉換",
                "轉換時必須補上「否定 ＋ 能力助動詞」",
                "He is too young to drive.＝He is so young that he cannot drive."
              ],
              [
                "enough to ↔ so…that 轉換",
                "轉換時為肯定",
                "He is old enough to drive.＝He is so old that he can drive."
              ]
            ]
          },
          "steps": [
            "so 與 such 的分辨口訣：「so 配形容詞副詞，such 配名詞片語」；中間有名詞就用 such。",
            "too…to 已含否定語意（太…而不能），統測最常見的錯誤是再加一個 not 造成雙重否定。",
            "enough 修飾形容詞或副詞時放後面（strong enough），修飾名詞時放前面（enough money），位置錯誤即扣分。",
            "too…to 若要指明對象，加 for sb.：The problem is too difficult for me to solve.",
            "非選改寫題常見指令：「請用 so…that 改寫」——先判斷原句是 too…to（需補否定）還是 enough to（維持肯定）。"
          ]
        }
      ],
      "practices": [
        {
          "question": "The new stadium, _____ will seat 50,000 people, is expected to boost local economy. [TTS:The new stadium, _____ will seat 50,000 people, is expected to boost local economy.]",
          "difficulty": "2",
          "steps": [
            "分析句子結構：空格前有逗號，表示這是一個非限定關係子句。",
            "先行詞 The new stadium [TTS:The new stadium] 是事物。",
            "選項中 that [TTS:that] 不能用於非限定關係子句（即不能放在逗號後面）。",
            "因此必須使用 which [TTS:which] 作為主格。"
          ],
          "answer": "which [TTS:which]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "Can you tell me _____ to start the generator? [TTS:Can you tell me _____ to start the generator?]",
          "difficulty": "1",
          "steps": [
            "分析句子：Can you tell me [TTS:Can you tell me] 後面需要一個名詞子句當作直接受詞。",
            "這是一個間接問句，如果是問「如何」啟動發電機，應用 how [TTS:how]。",
            "疑問詞 + to V [TTS:to V] 是一種名詞片語的用法，相當於名詞子句的縮減。",
            "填入 how [TTS:how]。"
          ],
          "answer": "how [TTS:how]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "_____ the bad weather, the construction crew managed to finish pouring the concrete on schedule. [TTS:_____ the bad weather, the construction crew managed to finish pouring the concrete on schedule.]",
          "difficulty": "2",
          "steps": [
            "分析空格後的結構：the bad weather [TTS:the bad weather] 是一個名詞片語，沒有動詞。",
            "前後語意：「壞天氣」與「如期完成」形成對比/讓步關係（雖然...但是）。",
            "需要填入表示讓步的「介系詞」。although/though [TTS:although/though] 是連接詞（需接子句），而 despite/in spite of [TTS:despite/in spite of] 是介系詞。"
          ],
          "answer": "Despite / In spite of [TTS:Despite / In spite of]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "The site manager had all the safety helmets _____ before the inspection. [TTS:The site manager had all the safety helmets _____ before the inspection.]",
          "difficulty": "3",
          "steps": [
            "看到動詞 had [TTS:had]，判斷為使役動詞用法。",
            "受詞是 all the safety helmets [TTS:all the safety helmets] (所有安全帽)。",
            "安全帽不會主動去檢查，而是「被檢查 (checked [TTS:checked])」。",
            "使役動詞 + 介詞 + 被動動作，必須使用過去分詞 (p.p. [TTS:p.p.])。"
          ],
          "answer": "checked [TTS:checked]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "Any worker _____ operating the crane must possess a valid license. [TTS:Any worker _____ operating the crane must possess a valid license.]",
          "difficulty": "2",
          "steps": [
            "主要句子是 Any worker must possess a valid license. [TTS:Any worker must possess a valid license.]",
            "空格處是分詞片語，用來修飾 worker [TTS:worker]。",
            "worker [TTS:worker] 與 operate [TTS:operate] (操作) 是主動關係（工人操作起重機）。",
            "主動修飾名詞，使用現在分詞 (V-ing [TTS:V-ing])。"
          ],
          "answer": "operating [TTS:operating]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "It _____ the city government millions of dollars to repair the old bridge last year. [TTS:It _____ the city government millions of dollars to repair the old bridge last year.]",
          "difficulty": "2",
          "steps": [
            "主詞是虛主詞 It [TTS:It]，表示花費（金錢 millions of dollars [TTS:millions of dollars]）。",
            "花費金錢且主詞為 It [TTS:It] 時，動詞使用 cost [TTS:cost]。",
            "句尾有 last year [TTS:last year]，表示過去式，cost [TTS:cost] 的過去式仍是 cost [TTS:cost]。"
          ],
          "answer": "cost [TTS:cost]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "The engineers are quite _____ in the new sustainable building materials. [TTS:The engineers are quite _____ in the new sustainable building materials.]",
          "difficulty": "1",
          "steps": [
            "主詞 The engineers [TTS:The engineers] 是人。",
            "表示「對...感到有興趣」，使用的是情緒動詞的過去分詞當形容詞。",
            "搭配介系詞 in [TTS:in]，使用 interested [TTS:interested]。"
          ],
          "answer": "interested [TTS:interested]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "Please let me know _____ the materials have arrived or not. [TTS:Please let me know _____ the materials have arrived or not.]",
          "difficulty": "2",
          "steps": [
            "空格後是一個完整的子句 the materials have arrived [TTS:the materials have arrived]。",
            "句尾有 or not [TTS:or not]，表示「是否」。",
            "引導「是否」的名詞子句，通常使用 whether [TTS:whether] (whether... or not [TTS:whether... or not] 是固定搭配)。"
          ],
          "answer": "whether [TTS:whether]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        }
      ],
      "step0Prerequisites": [
        "關係代名詞 (who, which, that, whose, whom) 基本用法",
        "名詞子句與副詞子句引導詞 (that, whether, because, although, if)",
        "完整句子主詞與動詞基本辨識能力"
      ]
    },
    {
      "slug": "reading-infographics",
      "title": "7. 實用文本與圖表判讀",
      "desc": "about reading infographics, charts, tables, emails, notices, ads, manuals, safety signs[TTS:about reading infographics, charts, tables, emails, notices, ads, manuals, safety signs] - 素養導向統測新題型",
      "status": "done",
      "gradeLevel": 11,
      "examHitRate": 4,
      "fatalTraps": [
        {
          "wrongThinking": "忽略圖表軸線單位之倍率（如 in thousands 或 in millions）。",
          "correctThinking": "看圖表務必先看圖名 (Title)、坐標軸標籤 (Axis Labels) 與單位 (Units)，防止數值量級誤判。",
          "trapDescription": "統測常以單位陷阱命題，如題目問 5,000,000，圖表數值標 5 (單位: in millions)，忽略單位會誤以為找不到答案。"
        }
      ],
      "eliteMentalModels": [
        {
          "technique": "圖表四步定位法",
          "explanation": "讀標題抓主題 → 讀軸線看單位 → 找極值看峰谷 → 對照題目選項精確核對數值。"
        },
        {
          "technique": "圖文交叉比對模型",
          "explanation": "將題目選項敘述拆解為「主詞 + 數值 + 趨勢」，逐項回圖表標定位置檢核對錯。"
        }
      ],
      "covered_question_ids": [],
      "worked_examples": [
        {
          "question": "Please look at the construction schedule chart below. What task is planned for the third week?[TTS:Please look at the construction schedule chart below. What task is planned for the third week?]\n[Week 1: Site Preparation, Week 2: Foundation, Week 3: Framing, Week 4: Roofing][TTS:Week 1: Site Preparation, Week 2: Foundation, Week 3: Framing, Week 4: Roofing]\n(A) Site Preparation[TTS:Site Preparation]\n(B) Foundation[TTS:Foundation]\n(C) Framing[TTS:Framing]\n(D) Roofing[TTS:Roofing]",
          "difficulty": "Easy",
          "steps": [
            "識別工程甘特圖與時程表：分析四週工期安排 [Week 1: Site Preparation, Week 2: Foundation, Week 3: Framing, Week 4: Roofing]，分別對應整地、基礎、結構構架與屋頂防水施工。",
            "關鍵字檢索定位：題目明確詢問「the third week」(第三週) 之施工排程計畫。",
            "對齊橫軸時程項目：檢視進度表 Week 3 欄位，直接對應「Framing」(構架工程)，故正確答案為 (C)。"
          ],
          "answer": "(C) Framing [TTS:Framing] — 構架工程（第三週預定工項）",
          "hints": [
            "先在題目中定位目標時間點：the third week",
            "查閱時程括號內 Week 3 對應的工項英文"
          ],
          "commonMistake": "粗心看錯週次或將基礎工程 (Foundation) 誤當作第三週。",
          "eliteShortcut": "時程圖表速讀：直接在圖例中鎖定 Week 3 ⇒ Framing 秒殺！"
        },
        {
          "question": "A: Look at this chart. Sales went up in March.[TTS:Look at this chart. Sales went up in March.]\nB: Yes, but they dropped again in April.[TTS:Yes, but they dropped again in April.]\nWhat does the chart show for April?[TTS:What does the chart show for April?]\n(A) Sales increased.[TTS:Sales increased.]\n(B) Sales decreased.[TTS:Sales decreased.]\n(C) Sales stayed the same.[TTS:Sales stayed the same.]\n(D) No data available.[TTS:No data available.]",
          "difficulty": "Medium",
          "steps": [
            "拆解對話核心訊息：A 提及三月份銷售額上升 (went up)；B 補充四月份再度下滑 (dropped again)。",
            "鎖定題目設問目標：題目針對「April」(四月份) 詢問圖表呈現的趨勢。",
            "同義詞轉換判斷：口語動詞 drop (下跌/下降) 在正式統計圖表英文中對應 decreased (減少/下降)，故選 (B)。"
          ],
          "answer": "(B) Sales decreased. [TTS:Sales decreased.] — 銷售額下降（對應 dropped again）",
          "hints": [
            "留意 B 說的 dropped again",
            "尋找 drop 的同義詞 (decrease / decline)"
          ],
          "commonMistake": "只看 A 的前半句 went up 而誤選 (A) Sales increased。",
          "eliteShortcut": "趨勢動詞同義代換：dropped ⇒ decreased，直選 (B)！"
        },
        {
          "question": "A: Did you read the memo? We need to submit the report by Friday.[TTS:Did you read the memo? We need to submit the report by Friday.]\nB: I thought it was due next Monday![TTS:I thought it was due next Monday!]\nWhen is the report actually due?[TTS:When is the report actually due?]\n(A) Friday[TTS:Friday]\n(B) Saturday[TTS:Saturday]\n(C) Sunday[TTS:Sunday]\n(D) Monday[TTS:Monday]",
          "difficulty": "Easy",
          "steps": [
            "辨識辦公室備忘錄 (memo) 權威資訊：A 引用正式備忘錄說明截止日為「by Friday」(週五前)；B 原本誤以為是下週一。",
            "釐清設問重點：題目詢問「actually due」(實際到期日)，應以備忘錄規定為準而非個人誤解。",
            "確認最終截止期限：根據 A 轉述之官方規定，報告實際到期日為週五，故正確選項為 (A)。"
          ],
          "answer": "(A) Friday [TTS:Friday] — 週五（備忘錄公告之實際截止日）",
          "hints": [
            "注意 memo 是正式官方依據",
            "區分 B 的誤解 (next Monday) 與 A 的官方規定 (Friday)"
          ],
          "commonMistake": "被 B 的語句「I thought it was due next Monday」誤導而選了 Monday。",
          "eliteShortcut": "排除主觀認知干擾：以 memo 官方資訊 Friday 為準，秒選 (A)！"
        }
      ],
      "illustrations": [
        "context.webp",
        "mechanism.webp",
        "comparison.webp"
      ],
      "concepts": [
        {
          "heading": "圖表閱讀三步法 (Infographics & Charts[TTS:Infographics & Charts])",
          "body": "<p>在閱讀<span className=\"text-blue-600 font-bold\">圖表 (Charts[TTS:Charts])</span>或<span className=\"text-blue-600 font-bold\">資訊圖表 (Infographics[TTS:Infographics])</span>時，不要馬上陷入數字堆中，請遵循以下三步法快速掌握重點：</p>\n\n[DIALOGUE_START:圖表判讀會話：材料強度長條圖分析]\nEngineer A: Look at the bar chart comparing the tensile strength of three steel alloys. | 看一下這張比較三種鋼合金抗拉強度的長條圖。\nEngineer B: Alloy C shows the highest yield strength, exceeding 500 megapascals. | 合金 C 表現出最高的降伏強度，超過了 500 MPa。\nEngineer A: What does the horizontal axis represent? | 水平軸（橫軸）代表什麼？\nEngineer B: It represents the percentage of carbon content in each sample. | 它代表每個試體中碳含量的百分比。\n[DIALOGUE_END]",
          "steps": [
            "Step 1[TTS:Step 1]: 閱讀標題 (Title[TTS:Title]) - 標題通常點出圖表的主題。",
            "Step 2[TTS:Step 2]: 檢視軸標與圖例 (Axes & Legends[TTS:Axes & Legends]) - 了解X軸和Y軸代表的意義（如時間、數量）。",
            "Step 3[TTS:Step 3]: 尋找極值與趨勢 (Extremes & Trends[TTS:Extremes & Trends]) - 注意最高點、最低點或整體的上升/下降趨勢。"
          ]
        },
        {
          "heading": "Email / Notice / Memo[TTS:Email / Notice / Memo] 判讀技巧",
          "body": "<p>職場與校園常見的<span className=\"text-teal-600 font-bold\">應用文體</span>，重點在於快速抓取人事時地物。通常包含特定的格式，如寄件人、收件人、主旨與日期。</p>\n\n[DIALOGUE_START:商務便條會話：截稿時程與行動項目]\nCoordinator: Did you read the project memo regarding the design competition deadline? | 你看了關於設計競圖截止日期的專案備忘錄了嗎？\nArchitect: Yes, all digital renderings and cost estimates must be submitted by Friday 5 PM. | 看了，所有的 3D 渲染圖與成本估算必須在週五下午五點前送出。\nCoordinator: The memo highlights that late submissions will be automatically disqualified. | 備忘錄特別強調，逾期送件將會被自動取消資格。\nArchitect: Let us finalize our portfolio presentation today. | 那我們今天就把作品集簡報定稿吧。\n[DIALOGUE_END]",
          "steps": [
            "Subject[TTS:Subject] (主旨)：快速了解信件目的。",
            "From/To[TTS:From/To] (寄件人/收件人)：確認雙方身分與關係。",
            "Call to Action[TTS:Call to Action] (行動呼籲)：信件結尾通常會要求收件人執行某個動作。",
            "Deadline[TTS:Deadline] (期限)：注意信中提到的時間點。"
          ]
        },
        {
          "heading": "廣告/海報/折價券速讀法",
          "body": "<p>此類文本充滿吸引人的視覺元素，設計來快速傳遞促銷資訊。考試時，重點在於<span className=\"text-rose-600 font-bold\">條件限制與關鍵數據</span>。</p>\n\n[DIALOGUE_START:廣告折價券速讀會話：建材展優惠券核對]\nBuyer: This coupon offers a 20 percent discount on surveying laser levels. | 這張折價券提供雷射測量水平儀八折的優惠折扣。\nStore Clerk: Please note the fine print: the offer is valid only for purchases over 50,000 NT dollars. | 請注意底下的小字說明：此優惠僅適用於消費滿五萬元新台幣。\nBuyer: Does it apply to tripod accessories as well? | 這項優惠也有適用於腳架配件嗎？\nStore Clerk: Yes, all optical accessories qualify during the exhibition period. | 有的，展覽期間所有的光學配件皆符合優惠資格。\n[DIALOGUE_END]",
          "table": {
            "headers": [
              "資訊類型",
              "常見英文詞彙",
              "應試重點"
            ],
            "rows": [
              [
                "價格與折扣",
                "Discount, XX% off, Buy 1 get 1 free[TTS:Discount, XX% off, Buy 1 get 1 free]",
                "計算實際要付的價格"
              ],
              [
                "日期與時間",
                "Valid from... to..., Expires on...[TTS:Valid from... to..., Expires on...]",
                "確認優惠是否過期"
              ],
              [
                "條件與限制",
                "Terms and conditions apply, For members only[TTS:Terms and conditions apply, For members only]",
                "注意誰能使用、有何限制"
              ]
            ]
          }
        },
        {
          "heading": "操作手冊與安全標示 (Manuals & Safety Signs[TTS:Manuals & Safety Signs])",
          "body": "<p>土木與建築現場常有各種<span className=\"text-orange-600 font-bold\">安全標示 (Safety Signs[TTS:Safety Signs])</span>與操作手冊。這些文本通常使用祈使句（原形動詞開頭），且帶有強烈的警告意味。</p>\n\n[DIALOGUE_START:操作手冊會話：電動切石機安全指南]\nApprentice: What does the \"DANGER\" symbol on the masonry cutter manual mean? | 切石機說明書上的 DANGER 危險符號是什麼意思？\nMaster Builder: It indicates high-voltage electrical shock hazard if water enters the motor casing. | 它表示如果水進入馬達外殼，會有高壓觸電的危險。\nApprentice: I will make sure the ground fault circuit interrupter is plugged in. | 我會確保漏電斷路插頭已確實插上。\nMaster Builder: Always wear eye goggles and ear protection before pressing the start switch. | 在按下啟動開關前，務必隨時佩戴護目鏡與耳罩。\n[DIALOGUE_END]",
          "steps": [
            "Danger[TTS:Danger] (危險)：最高等級，會造成死亡或重傷。",
            "Warning[TTS:Warning] (警告)：中等等級，可能會造成死亡或重傷。",
            "Caution[TTS:Caution] (注意)：較低等級，可能會造成輕傷。",
            "Do[TTS:Do] (應該做)：例如 Wear a hard hat[TTS:Wear a hard hat] (戴安全帽)。",
            "Don't[TTS:Don't] (不該做)：例如 Do not enter[TTS:Do not enter] (禁止進入)。"
          ]
        },
        {
          "heading": "數據描述常見句型",
          "body": "<p>圖表題中常出現描述數據變化的句型，熟悉這些句型有助於快速將文字與圖表內容對應。</p>\n\n[DIALOGUE_START:數據描述句型會話：綠建築節能趨勢]\nResearcher: The line graph illustrates a dramatic decrease in solar panel manufacturing costs. | 這張折線圖展示了太陽能板製造成本的大幅下降。\nClient: By how much did the average payback period drop over the last decade? | 在過去十年間，平均投資回收期縮短了多少？\nResearcher: According to the data, the payback time decreased significantly from twelve to five years. | 根據數據顯示，回收期從十二年顯著縮短至五年。\nClient: That makes rooftop photovoltaic systems a very sound investment. | 這使得屋頂型太陽光電系統成為非常明智的投資。\n[DIALOGUE_END]",
          "table": {
            "headers": [
              "功能",
              "英文句型",
              "中文意義"
            ],
            "rows": [
              [
                "引出圖表",
                "The chart illustrates/shows...[TTS:The chart illustrates/shows...]",
                "圖表顯示..."
              ],
              [
                "描述增加",
                "There is a significant increase in...[TTS:There is a significant increase in...]",
                "...有顯著的增加"
              ],
              [
                "描述減少",
                "The number decreased sharply.[TTS:The number decreased sharply.]",
                "數量急遽減少。"
              ],
              [
                "引用數據",
                "According to the data/chart...[TTS:According to the data/chart...]",
                "根據數據/圖表..."
              ]
            ]
          }
        },
        {
          "heading": "多元文本交叉比對法",
          "body": "<p>統測新趨勢常將兩種以上的文本合併出題（例如：<span className=\"text-indigo-600 font-bold\">Email[TTS:Email] + 價目表</span>）。這種題型稱為「多重文本題」。</p>\n\n[DIALOGUE_START:多文本交叉比對會話：核對電郵與出貨清單]\nAuditor A: The supplier's email says 500 steel beams were shipped on Tuesday. | 供應商的電子郵件表示五百支鋼樑已於週二出貨。\nAuditor B: However, the warehouse delivery receipt only lists 450 units received. | 然而，倉庫的送貨簽收單上卻只列出收到四百五十支。\nAuditor A: Let us check the packing slip attached to invoice number 108. | 我們來核對一下隨附在發票號碼 108 上的裝箱清單。\nAuditor B: Good catch! The remaining 50 units are scheduled for delivery tomorrow. | 抓得好！剩下的五十支預定於明天送達。\n[DIALOGUE_END]",
          "steps": [
            "1. 先讀題目：確定需要什麼資訊。",
            "2. 鎖定文本 A：從第一篇文本（如 Email[TTS:Email]）找出初步線索（例如：我要買A產品）。",
            "3. 交叉比對文本 B：帶著線索到第二篇文本（如價目表）尋找最終答案（例如：A產品多少錢）。"
          ]
        },
        {
          "heading": "素養導向統測新趨勢解析",
          "body": "<p>108課綱強調「非連續性文本」的閱讀能力，也就是將圖表、表單、海報等視覺化資訊轉化為文字理解，或將文字描述對應到圖表上，這稱為<span className=\"text-green-600 font-bold\">圖文互轉能力</span>。</p>\n\n[DIALOGUE_START:非連續文本會話：圖文互轉素養題解]\nTeacher: In 108 Curriculum exams, question prompts often combine an email with a transit map. | 在 108 課綱的考題中，題幹經常將一封電子郵件與捷運地圖結合在一起。\nStudent: So I need to locate the conference venue on the map based on the email invitation! | 所以我必須根據邀請函的內容在捷運地圖上找到會議場地的位置！\nTeacher: Precisely. Synthesizing clues from different formats is key to non-continuous texts. | 完全正確。整合不同形式的線索是非連續文本的解題核心。\nStudent: I feel much more prepared for these realistic literacy questions now. | 我現在對這種貼近生活的情境素養題更有信心了。\n[DIALOGUE_END]",
          "steps": [
            "強化資訊轉換能力：平時多練習將圖表數據用文字寫出來。",
            "培養邏輯推理：題目有時不會直接給答案，需要根據文本提供的條件進行簡單推理。",
            "跨領域知識應用：熟悉土木建築群相關的情境，如工地安全、工程進度、建材報價等。"
          ]
        },
        {
          "heading": "8. 時刻表・價目表・訂單表單判讀：數字與條件的交叉比對",
          "body": "<p>統測應用文題組最愛出「表格 ＋ 附註條件」的組合題：表格給數字，附註（Note／Remarks）給限制條件，<strong>答案永遠落在兩者的交集</strong>。只看表格不看附註，是這類題目最主要的失分原因。</p>",
          "table": {
            "headers": [
              "表單類型",
              "必看欄位",
              "常考問法與解題關鍵"
            ],
            "rows": [
              [
                "時刻表 (Timetable)",
                "出發／抵達時間、班次代號、行駛日（Mon–Fri／Weekends only）、轉乘註記",
                "「若某人須於 X 點前抵達，應搭哪班？」→ 先鎖定抵達欄，再回頭檢查行駛日限制"
              ],
              [
                "價目表 (Price List)",
                "單價、單位、折扣條件、有效期限、加購項目",
                "「總共要付多少？」→ 單價 × 數量 ＋ 加購 − 折扣；務必確認折扣的門檻條件"
              ],
              [
                "訂購單 (Order Form)",
                "品項、數量、小計、運費、稅額、總計",
                "「運費如何計算？」→ 常見條件為「滿額免運」，須先算小計再判斷"
              ],
              [
                "課程／活動表",
                "日期、時段、地點、講師、報名截止日、費用",
                "「同時想參加 A 與 B 是否可行？」→ 檢查時段是否衝突"
              ],
              [
                "保固與退換卡",
                "保固期限、涵蓋範圍、排除條款、聯絡方式",
                "「這種損壞可否免費維修？」→ 答案幾乎都在「不涵蓋 (not covered)」那一列"
              ],
              [
                "工程進度表",
                "工項、起訖日、負責單位、完成百分比、備註",
                "「哪一項落後？」→ 比對計畫日期與實際完成度"
              ],
              [
                "附註與符號",
                "＊、†、Note、Remarks、Terms & Conditions、subject to change",
                "所有小字附註都是命題點；看到 ＊ 立刻往下找對應說明"
              ],
              [
                "單位與換算",
                "幣別 NT／US、kg／lb、m／ft、a.m.／p.m.、24 小時制",
                "跨單位題必考換算；注意 12:00 a.m.＝午夜、12:00 p.m.＝中午"
              ]
            ]
          },
          "steps": [
            "解題順序：① 先讀題目問什麼 ② 在表格中圈出對應欄位 ③ 檢查是否有附註限制 ④ 計算或比對後作答。",
            "遇到「最早／最晚／最便宜／最適合」這類最高級問法，必須把所有符合條件的選項全部列出再比較，不可看到第一個符合就作答。",
            "時間題務必留意 a.m./p.m. 與行駛日；金額題務必留意折扣門檻與運費條件——這兩處是統測固定陷阱。",
            "作答時把關鍵數字直接寫在題本旁邊，避免反覆回頭查表浪費時間。"
          ]
        },
        {
          "heading": "9. 圖表趨勢描述句型庫：折線圖・長條圖・圓餅圖",
          "body": "<p>素養導向命題大量使用圖表。要能<strong>看懂選項在描述哪一段趨勢</strong>，必須熟悉趨勢動詞、程度副詞與比較句型三組語言工具。這組句型同時可用於非選寫作的數據描述題。</p>",
          "table": {
            "headers": [
              "描述面向",
              "核心字詞與句型",
              "例句"
            ],
            "rows": [
              [
                "上升趨勢",
                "increase／rise／grow／climb／go up／soar（激增）／double（倍增）",
                "The number of green buildings rose from 120 to 350 between 2015 and 2025."
              ],
              [
                "下降趨勢",
                "decrease／drop／decline／fall／go down／plunge（暴跌）／halve（減半）",
                "Energy consumption declined by 15% after the retrofit."
              ],
              [
                "持平與波動",
                "remain stable／stay the same／level off／fluctuate（波動）／plateau（趨於平緩）",
                "The figure remained stable at around 40% for three years."
              ],
              [
                "極值描述",
                "peak at（達到高峰）／reach a high of／bottom out at／hit a record low",
                "Sales peaked at 5,000 units in July and then bottomed out in October."
              ],
              [
                "程度副詞",
                "sharply／dramatically（急遽）｜steadily／gradually（穩定）｜slightly／marginally（微幅）",
                "The cost increased sharply, while the quality improved only slightly."
              ],
              [
                "比例與佔比",
                "account for／make up／represent ＋ 百分比｜the largest／smallest share",
                "Concrete accounts for nearly half of the total material cost."
              ],
              [
                "比較句型",
                "A is twice as high as B｜A is three times the amount of B｜compared with／in contrast to",
                "The energy use in 2025 is only half that of 2015."
              ],
              [
                "變化幅度",
                "by ＋ 變化量（increase by 20%）vs. to ＋ 終點值（increase to 20%）",
                "It increased by 5% （增加了 5%）≠ It increased to 5% （增加到 5%）"
              ]
            ]
          },
          "steps": [
            "by 與 to 的差別是圖表題最常見的細節陷阱：by 指「變化的幅度」，to 指「變化後的數值」。",
            "看圖三步驟：① 先讀標題與座標軸單位 ② 找出最高點、最低點與轉折點 ③ 再看選項描述是否吻合。",
            "圓餅圖題常考「佔比排序」與「合計是否過半」，看到 more than half／the majority 要立即計算驗證。",
            "非選寫作若須描述數據，標準句型為：主詞 ＋ 趨勢動詞 ＋ 程度副詞 ＋ from A to B ＋ between X and Y。"
          ]
        },
        {
          "heading": "10. 標示、標籤與規格表：工地與產品英文的判讀",
          "body": "<p>安全標示與產品規格表是<strong>技術型高中學生最需要、也最實用</strong>的英文閱讀能力。統測應用文題組近年頻繁取材於此，同時它也是進入職場後的第一道語言門檻。</p>\n\n[DIALOGUE_START:標示判讀會話：工地安全告示]\nSupervisor: What does this sign mean? | 這個標示是什麼意思？\nTrainee: It says \"Danger: High Voltage. Authorized Personnel Only.\" | 上面寫著「危險：高壓電，僅限授權人員進入」。\nSupervisor: Correct. And what should you wear beyond this point? | 正確。過了這個點你應該穿戴什麼？\nTrainee: A hard hat, safety goggles, and steel-toed boots. | 安全帽、護目鏡和鋼頭鞋。\n[DIALOGUE_END]",
          "table": {
            "headers": [
              "類別",
              "常見標示／欄位英文",
              "中譯與判讀重點"
            ],
            "rows": [
              [
                "危險等級用語",
                "DANGER（最高級，會致死）｜WARNING（可能重傷）｜CAUTION（可能輕傷）｜NOTICE（一般告知）",
                "四級由重到輕，統測常考等級排序與顏色對應（紅／橘／黃／藍）"
              ],
              [
                "禁止類標示",
                "No Entry／Keep Out 禁止進入｜No Smoking 禁止吸菸｜Do Not Operate 禁止操作｜Authorized Personnel Only 限授權人員",
                "多為祈使句否定式或名詞片語"
              ],
              [
                "強制類標示",
                "Hard Hat Required 須戴安全帽｜Wear Safety Goggles 配戴護目鏡｜Watch Your Step 注意腳步｜Mind the Gap 小心間隙",
                "多為祈使句或 ＋ Required 結構"
              ],
              [
                "緊急與逃生",
                "Emergency Exit 緊急出口｜Fire Extinguisher 滅火器｜First Aid 急救｜Assembly Point 集合點｜Evacuation Route 逃生路線",
                "圖示多為綠底白字；統測常考「發生火災應前往何處」"
              ],
              [
                "產品規格欄位",
                "Model No. 型號｜Dimensions 尺寸｜Weight 重量｜Capacity 容量／承載｜Material 材質｜Rated Load 額定荷重",
                "規格題必考單位換算與最大值限制"
              ],
              [
                "操作與保養",
                "Instructions 使用說明｜Assembly 組裝｜Maintenance 保養｜Troubleshooting 故障排除｜Do not exceed… 不可超過…",
                "Troubleshooting 表格常以「症狀→可能原因→解決方式」三欄呈現"
              ],
              [
                "保固與警語",
                "Warranty Period 保固期｜Not covered by warranty 保固不涵蓋｜Keep out of reach of children 避免孩童取得",
                "「不涵蓋」條款是應用文題組的固定命題點"
              ],
              [
                "材料標籤",
                "Flammable 易燃｜Corrosive 腐蝕性｜Toxic 有毒｜Handle with Care 小心輕放｜This Side Up 此面向上",
                "與 MSDS（物質安全資料表）搭配出現"
              ]
            ]
          },
          "steps": [
            "危險等級四級務必背熟：DANGER ＞ WARNING ＞ CAUTION ＞ NOTICE，統測曾直接考等級比較。",
            "標示語體有三種：祈使句（Wear your helmet.）、名詞片語（Emergency Exit）、被動或分詞（Authorized Personnel Only）。",
            "規格表題型解法：先確認單位（mm／cm／m、kg／t），再比對題目給的條件是否超出額定值。",
            "Troubleshooting 表格題只需定位「症狀」欄，再橫向讀取解決方式，不必閱讀全表。"
          ]
        },
        {
          "heading": "11. 素養題組實戰：跨圖文推論五步驟",
          "body": "<p>素養導向題組的特徵是<strong>「一則情境 ＋ 兩到三種文本」</strong>：例如一張活動海報、一封報名 Email、一份費用表，要求考生整合三者做出判斷。這類題目不難，但需要一套穩定的作業流程。</p>",
          "table": {
            "headers": [
              "步驟",
              "操作內容",
              "常見命題點"
            ],
            "rows": [
              [
                "① 建立情境地圖",
                "先花 20 秒讀完所有文本的「標題與小標」，在腦中建立「誰、要做什麼、有什麼限制」",
                "情境主角的身分（學生／家長／承包商）決定適用條件"
              ],
              [
                "② 標記三類關鍵資訊",
                "圈出所有「數字（時間、金額、數量）」「條件（if、unless、only、must）」「例外（except、not include）」",
                "條件與例外幾乎必然出現在正解中"
              ],
              [
                "③ 逐題定位而非通讀",
                "看題目關鍵字 → 判斷該資訊在哪一份文本 → 只讀該處",
                "題目常刻意把資訊分散在兩份文本，需交叉比對"
              ],
              [
                "④ 交叉驗證",
                "把候選答案同時放回兩份文本檢查，兩邊都成立才選",
                "錯誤選項常「只符合其中一份文本」"
              ],
              [
                "⑤ 檢查推論邊界",
                "區分「文本明確寫出的」與「自己推想的」，只選前者支持的答案",
                "過度推論是素養題最大陷阱"
              ],
              [
                "常見題組結構 A",
                "海報（活動資訊）＋ Email（個人需求）→ 問「他應報名哪一場？」",
                "把個人條件逐一對照活動限制"
              ],
              [
                "常見題組結構 B",
                "產品說明 ＋ 使用者評論 → 問「評論者的抱怨與說明書哪一點矛盾？」",
                "找出兩份文本的衝突點"
              ],
              [
                "常見題組結構 C",
                "統計圖表 ＋ 新聞短文 → 問「圖表最能支持文中哪一項論點？」",
                "答案必須同時被文字與數據支持"
              ]
            ]
          },
          "steps": [
            "素養題不是考更難的單字，而是考「資訊整合與判斷」，因此時間分配上可略多於一般閱讀題。",
            "作答前務必確認「題目問的是誰的立場」——同一份資料對學生與對家長的適用條件常常不同。",
            "遇到「下列何者為真／何者不為真」時，逐一驗證四個選項，並在題本旁標記 O／X，避免看錯題型。",
            "推論題的安全原則：文中沒有明確依據的推測一律不選，即使它在現實中很合理。"
          ]
        }
      ],
      "practices": [
        {
          "question": "According to the safety sign \"DANGER: HIGH VOLTAGE. Authorized Personnel Only\", who is allowed to enter the area?[TTS:According to the safety sign \"DANGER: HIGH VOLTAGE. Authorized Personnel Only\", who is allowed to enter the area?]\n(A) Anyone with a hard hat[TTS:Anyone with a hard hat]\n(B) Only visitors[TTS:Only visitors]\n(C) Only authorized workers[TTS:Only authorized workers]\n(D) No one[TTS:No one]",
          "difficulty": "Easy",
          "steps": [
            "1. 分析標示內容：DANGER[TTS:DANGER] (危險)、HIGH VOLTAGE[TTS:HIGH VOLTAGE] (高壓電)、Authorized Personnel Only[TTS:Authorized Personnel Only] (僅限授權人員)。",
            "2. 關鍵字 \"Authorized Personnel Only\"[TTS:Authorized Personnel Only] 表示只有經過授權的人員可以進入。",
            "3. 選項 (C) Only authorized workers[TTS:Only authorized workers] 意思最接近。"
          ],
          "answer": "(C) Only authorized workers[TTS:Only authorized workers]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "In an email, the subject is \"Meeting Rescheduled to 3 PM, Friday\". What does \"Rescheduled\" mean?[TTS:In an email, the subject is \"Meeting Rescheduled to 3 PM, Friday\". What does \"Rescheduled\" mean?]\n(A) Cancelled[TTS:Cancelled]\n(B) Changed to a new time[TTS:Changed to a new time]\n(C) Finished[TTS:Finished]\n(D) Started[TTS:Started]",
          "difficulty": "Medium",
          "steps": [
            "1. 觀察主旨：Meeting Rescheduled to 3 PM, Friday[TTS:Meeting Rescheduled to 3 PM, Friday]。",
            "2. 從字根分析：Re-[TTS:Re-] (重新) + schedule[TTS:schedule] (安排進度) + -ed[TTS:-ed] (過去分詞) = 重新安排時間。",
            "3. 選項 (B) Changed to a new time[TTS:Changed to a new time] 符合字義。"
          ],
          "answer": "(B) Changed to a new time[TTS:Changed to a new time]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "A coupon says \"20% OFF on all safety boots. Valid until Oct. 31.\" If you buy a pair of boots on Nov. 1, can you get the discount?[TTS:A coupon says \"20% OFF on all safety boots. Valid until Oct. 31.\" If you buy a pair of boots on Nov. 1, can you get the discount?]\n(A) Yes, because it is for all boots.[TTS:Yes, because it is for all boots.]\n(B) Yes, because 20% is a big discount.[TTS:Yes, because 20% is a big discount.]\n(C) No, because the coupon has expired.[TTS:No, because the coupon has expired.]\n(D) No, because boots are not included.[TTS:No, because boots are not included.]",
          "difficulty": "Easy",
          "steps": [
            "1. 找出優惠條件：20% OFF[TTS:20% OFF] (打八折)、Valid until Oct. 31[TTS:Valid until Oct. 31] (有效期限至10月31日)。",
            "2. 題目問：Nov. 1[TTS:Nov. 1] (11月1日) 購買是否能打折？",
            "3. 11月1日已超過有效期限，所以不能打折 (expired[TTS:expired] = 過期的)。"
          ],
          "answer": "(C) No, because the coupon has expired.[TTS:No, because the coupon has expired.]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "Look at the memo. \"To all site engineers: Please submit your weekly progress report by Thursday noon.\" When is the deadline for the report?[TTS:Look at the memo. \"To all site engineers: Please submit your weekly progress report by Thursday noon.\" When is the deadline for the report?]\n(A) Monday morning[TTS:Monday morning]\n(B) Thursday morning[TTS:Thursday morning]\n(C) Thursday 12:00 PM[TTS:Thursday 12:00 PM]\n(D) Friday noon[TTS:Friday noon]",
          "difficulty": "Medium",
          "steps": [
            "1. 尋找題目關鍵字 deadline[TTS:deadline] (期限)。",
            "2. 對照 memo[TTS:memo] 內容：\"by Thursday noon\"[TTS:by Thursday noon] (週四中午前)。",
            "3. noon[TTS:noon] (中午) = 12:00 PM[TTS:12:00 PM]。"
          ],
          "answer": "(C) Thursday 12:00 PM[TTS:Thursday 12:00 PM]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "The pie chart shows the materials used in a building: Concrete 50%, Steel 30%, Glass 15%, Wood 5%. Which material is used the most?[TTS:The pie chart shows the materials used in a building: Concrete 50%, Steel 30%, Glass 15%, Wood 5%. Which material is used the most?]\n(A) Steel[TTS:Steel]\n(B) Glass[TTS:Glass]\n(C) Concrete[TTS:Concrete]\n(D) Wood[TTS:Wood]",
          "difficulty": "Easy",
          "steps": [
            "1. 題目問 \"used the most\"[TTS:used the most] (使用最多的)。",
            "2. 在圓餅圖中尋找比例最高（最大極值）的項目。",
            "3. Concrete[TTS:Concrete] (混凝土) 佔 50%，是最高的。"
          ],
          "answer": "(C) Concrete[TTS:Concrete]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "You receive an email from a supplier attached with a price list. The email says \"We offer a 10% discount for orders over 100 bags of cement.\" You need 120 bags. The price list says ＄10 per bag. How much will you pay?[TTS:You receive an email from a supplier attached with a price list. The email says \"We offer a 10% discount for orders over 100 bags of cement.\" You need 120 bags. The price list says ＄10 per bag. How much will you pay?]\n(A) ＄1000[TTS:＄1000]\n(B) ＄1200[TTS:＄1200]\n(C) ＄1080[TTS:＄1080]\n(D) ＄120[TTS:＄120]",
          "difficulty": "Hard",
          "steps": [
            "1. 這題需要交叉比對 Email[TTS:Email] 與價目表。",
            "2. 從價目表得知：一包水泥 ＄10。需要 120 包，原價 = 120 x 10 = 1200。",
            "3. 從 Email[TTS:Email] 得知：訂單超過 100 包有 10% discount[TTS:10% discount] (九折)。",
            "4. 120 包 > 100 包，符合打折條件。計算折扣後價格：＄1200 x 0.9 = ＄1080。"
          ],
          "answer": "(C) ＄1080[TTS:＄1080]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "A line graph illustrates the number of construction accidents over five years. It goes down steadily from 2018 to 2022. Which sentence best describes this?[TTS:A line graph illustrates the number of construction accidents over five years. It goes down steadily from 2018 to 2022. Which sentence best describes this?]\n(A) The number of accidents increased significantly.[TTS:The number of accidents increased significantly.]\n(B) There was a steady decrease in accidents.[TTS:There was a steady decrease in accidents.]\n(C) The number remained stable.[TTS:The number remained stable.]\n(D) The graph shows no clear trend.[TTS:The graph shows no clear trend.]",
          "difficulty": "Medium",
          "steps": [
            "1. 理解圖表趨勢描述：\"goes down steadily\"[TTS:goes down steadily] (穩定下降)。",
            "2. 尋找對應的英文句型。",
            "3. (A) increased[TTS:increased] (增加) 錯。 (B) steady decrease[TTS:steady decrease] (穩定減少) 對。 (C) stable[TTS:stable] (穩定不變) 錯。"
          ],
          "answer": "(B) There was a steady decrease in accidents.[TTS:There was a steady decrease in accidents.]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "According to a tool manual, \"CAUTION: Always wear safety goggles before operating this saw.\" What should you do before using the saw?[TTS:According to a tool manual, \"CAUTION: Always wear safety goggles before operating this saw.\" What should you do before using the saw?]\n(A) Check the power cord.[TTS:Check the power cord.]\n(B) Wear safety glasses.[TTS:Wear safety glasses.]\n(C) Read the manual again.[TTS:Read the manual again.]\n(D) Clean the saw.[TTS:Clean the saw.]",
          "difficulty": "Medium",
          "steps": [
            "1. 閱讀手冊警告事項：Always wear safety goggles before operating this saw.[TTS:Always wear safety goggles before operating this saw.]",
            "2. safety goggles[TTS:safety goggles] = 護目鏡 (safety glasses[TTS:safety glasses])。",
            "3. operating[TTS:operating] = using[TTS:using] (操作/使用)。",
            "4. 所以使用前應該戴上護目鏡。"
          ],
          "answer": "(B) Wear safety glasses.[TTS:Wear safety glasses.]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        }
      ],
      "step0Prerequisites": [
        "長條圖 (Bar Chart)、折線圖 (Line Graph)、圓餅圖 (Pie Chart) 與表格之基本認讀",
        "圖表常用英文標籤 (percentage, rate, trend, comparison, average)",
        "比較級與最高級英文表達方式"
      ]
    },
    {
      "slug": "cloze-passage-structure",
      "title": "8. 克漏字與篇章結構",
      "desc": "about cloze test strategies, transition words, pronoun references, collocations",
      "status": "done",
      "gradeLevel": 11,
      "examHitRate": 4,
      "fatalTraps": [
        {
          "wrongThinking": "只看空格前後的單一單字就匆忙作答，忽略整句時態或前後句的因果/轉折邏輯。",
          "correctThinking": "克漏字與篇章結構題需通讀前後至少兩句話，判斷語意是順接（補充、因果）還是逆接（轉折、對比）。",
          "trapDescription": "忽略前後句邏輯轉折詞，容易選出語意相反的連接詞或單字。"
        }
      ],
      "eliteMentalModels": [
        {
          "technique": "空格詞性預測法",
          "explanation": "先看空格在句中所缺的詞性（缺主詞動詞、修飾形容詞、轉折副詞），先剔除詞性不符選項，大幅提高答題準確率。"
        },
        {
          "technique": "篇章連貫三要素模型",
          "explanation": "關鍵字重複 (Lexical Links) + 邏輯連接詞 (Connectors) + 代名詞指涉 (Pronouns)，三者是解篇章結構填空最強線索。"
        }
      ],
      "covered_question_ids": [
        "111-english-21",
        "111-english-22",
        "111-english-23",
        "111-english-24",
        "111-english-25",
        "111-english-26",
        "111-english-27",
        "111-english-28",
        "112-english-21",
        "112-english-22",
        "112-english-23",
        "112-english-24",
        "112-english-25",
        "112-english-26",
        "112-english-27",
        "112-english-28",
        "113-english-21",
        "113-english-22",
        "113-english-23",
        "113-english-24",
        "113-english-25",
        "113-english-26",
        "113-english-27",
        "113-english-28",
        "114-english-21",
        "114-english-22",
        "114-english-23",
        "114-english-24",
        "114-english-25",
        "114-english-26",
        "114-english-27",
        "114-english-28",
        "115-english-21",
        "115-english-22",
        "115-english-23",
        "115-english-24",
        "115-english-25",
        "115-english-26",
        "115-english-27",
        "115-english-28",
        "110-english-21",
        "110-english-22",
        "110-english-23",
        "110-english-24",
        "110-english-25",
        "110-english-26",
        "110-english-27",
        "110-english-28"
      ],
      "worked_examples": [
        {
          "question": "Building a new bridge requires careful planning. First, engineers must study the soil. ________, they design the foundation based on their findings.\n(A) However\n(B) Therefore\n(C) Furthermore\n(D) Afterwards [TTS:Building a new bridge requires careful planning. First, engineers must study the soil. ________, they design the foundation based on their findings.\n(A) However\n(B) Therefore\n(C) Furthermore\n(D) Afterwards]",
          "difficulty": "2",
          "steps": [
            "識別時間順序標記：前句以「First」(首先) 提示施工規劃的最初步驟為地質土壤調查。",
            "分析前後兩句流程邏輯：後句「they design the foundation based on their findings」(根據調查結果設計基礎) 是接續第一步的後續程序。",
            "轉折與順序副詞辨析：(A) However 為語氣轉折；(B) Therefore 為因果；(C) Furthermore 為補充；(D) Afterwards (之後/接著) 符合步驟先後時間銜接，故選 (D)。"
          ],
          "answer": "(D) Afterwards [TTS:Afterwards] — 接著／之後（承接 First 的時間順序）",
          "hints": [
            "注意前一句有 First (首先)",
            "尋找表示「接著/之後」的時間副詞"
          ],
          "commonMistake": "誤選因果詞 Therefore，忽略 First + Afterwards 是經典的時間步驟銜接組合。",
          "eliteShortcut": "篇章時間鍊：看見 First，優先比對 Next / Then / Afterwards！"
        },
        {
          "question": "A: Do you know why the construction is delayed? [TTS:Do you know why the construction is delayed?]\nB: Yes, we found some structural issues in the original plan. ________, we have to redesign the support beams. [TTS:Yes, we found some structural issues in the original plan. ________, we have to redesign the support beams.]\n(A) However [TTS:However]\n(B) Furthermore [TTS:Furthermore]\n(C) Therefore [TTS:Therefore]\n(D) Otherwise [TTS:Otherwise]",
          "difficulty": "2",
          "steps": [
            "分析前後句因果邏輯：前半句「found some structural issues」(發現結構缺陷) 是原因；後半句「have to redesign the support beams」(必須重新設計支撐梁) 是結果。",
            "確認所需轉折連接副詞：前因為果，句子開頭需填入表示「因此/所以」的因果副詞。",
            "選項功能比對：(A) However (轉折)；(B) Furthermore (遞進)；(C) Therefore (因此/因果)；(D) Otherwise (否則)。故唯一正確答案為 (C)。"
          ],
          "answer": "(C) Therefore [TTS:Therefore] — 因此（引導結構問題引發之後續結果）",
          "hints": [
            "分析前句（發現問題）與後句（重新設計）的邏輯關聯",
            "因果關係需要用表示「所以」的連接副詞"
          ],
          "commonMistake": "混淆因果副詞 (Therefore) 與遞進副詞 (Furthermore)。",
          "eliteShortcut": "因果訊號判斷：Cause (問題) + Therefore + Effect (解決動作)！"
        },
        {
          "question": "A: The new CAD software is very hard to learn. [TTS:The new CAD software is very hard to learn.]\nB: I agree. ________, it offers many advanced features that are useful for our project. [TTS:I agree. ________, it offers many advanced features that are useful for our project.]\n(A) Therefore [TTS:Therefore]\n(B) However [TTS:However]\n(C) Instead [TTS:Instead]\n(D) Thus [TTS:Thus]",
          "difficulty": "2",
          "steps": [
            "分析對話語意極性：前半段「very hard to learn」(很難學) 為負向缺點；後半段「offers many advanced features」(提供許多進階實用功能) 為正向優點。",
            "確認語氣轉折需求：從缺點轉至優點，屬於典型對比轉折關係，需使用轉折副詞連接。",
            "選項辨析排除：(A) Therefore (因果)；(B) However (然而/轉折)；(C) Instead (取而代之)；(D) Thus (因此)。正解為 (B) However。"
          ],
          "answer": "(B) However [TTS:However] — 然而（由「難學」轉折至「功能強大」）",
          "hints": [
            "注意前句的 hard to learn 與後句的 useful features 正反對比",
            "負向評價轉正向評價需用轉折詞"
          ],
          "commonMistake": "受 B 的「I agree」誤導而選了表示順承的 Therefore 或 Thus。",
          "eliteShortcut": "極性反轉口訣：Negative (難學) + However + Positive (實用)！"
        }
      ],
      "illustrations": [
        "context.webp",
        "mechanism.webp",
        "comparison.webp"
      ],
      "concepts": [
        {
          "heading": "1. 克漏字三步解題法",
          "body": "解答克漏字時，千萬不要只看空格所在的那一行。正確的做法是先快速閱讀整段文章了解主旨（Main Idea [TTS:Main Idea]），然後觀察空格前後的單字或句型結構，最後將四個選項代入，測試哪個在文法與語意上最通順。\n\n[DIALOGUE_START:克漏字解題會話：空格前後文法詞性判斷]\nStudent: How do I decide between \"increasing\" and \"increased\" in blank 22? | 我要如何決定第 22 格要選 increasing 還是 increased？\nTutor: Look after the blank: it is followed by a noun \"demand\", so you need an adjective participle! | 看空格後面：後面接著名詞 demand，所以你需要一個形容詞性質的分詞！\nStudent: And since demand is actively growing, \"increasing demand\" is the right choice. | 而且因為需求正在持續成長，所以 increasing demand 才是正確選項。\nTutor: Excellent grammatical reasoning! Always inspect both words before and after. | 非常棒的文法邏輯！一定要同時觀察空格前後的字。\n[DIALOGUE_END]",
          "steps": [
            "一、略讀全段：掌握文章背景（如建築工地安全、材料測試）。",
            "二、分析結構：判斷空格缺的是動詞、名詞、轉折語還是連接詞。",
            "三、交叉比對：用刪去法排除明顯時態錯誤或語意不合的選項。"
          ]
        },
        {
          "heading": "2. 高頻轉折語 (however/therefore/moreover)",
          "body": "轉折語（Transition Words [TTS:Transition Words]）是篇章結構考題的常客，用來連接兩個句子或段落的邏輯關係。\n\n[DIALOGUE_START:轉折語會話：邏輯連接詞精準代入]\nEditor A: Sentence A states the project was expensive, but sentence B says it was completed. | A 句說專案造價昂貴，但 B 句說它依然完工了。\nEditor B: Then you need an adversative transition like \"Nevertheless\" or \"However\". | 那麼你需要像 Nevertheless 或 However 這樣的轉折連接詞。\nEditor A: What if sentence B explained the consequence instead? | 如果 B 句是在解釋其結果呢？\nEditor B: Then causal transitions like \"Therefore\" or \"Consequently\" would be appropriate. | 那麼像 Therefore 或 Consequently 這樣的因果轉折詞才合適。\n[DIALOGUE_END]",
          "table": {
            "headers": [
              "轉折語類型",
              "常見單字",
              "例句 (土木情境)"
            ],
            "rows": [
              [
                "對比/轉折",
                "however, nevertheless, on the other hand [TTS:however, nevertheless, on the other hand]",
                "The design is beautiful; however, it is too expensive to build. [TTS:The design is beautiful; however, it is too expensive to build.]"
              ],
              [
                "因果",
                "therefore, as a result, consequently [TTS:therefore, as a result, consequently]",
                "The soil is unstable. Therefore, deeper foundations are needed. [TTS:The soil is unstable. Therefore, deeper foundations are needed.]"
              ],
              [
                "遞進/補充",
                "moreover, furthermore, additionally [TTS:moreover, furthermore, additionally]",
                "Concrete is strong in compression. Moreover, it is highly durable. [TTS:Concrete is strong in compression. Moreover, it is highly durable.]"
              ]
            ]
          }
        },
        {
          "heading": "3. 段落銜接與代名詞指代",
          "body": "在篇章結構中，代名詞（如 it, they, this, these [TTS:it, they, this, these]）通常指代前一句出現過的名詞。追蹤代名詞所指代的對象，能幫助你在句子重組或克漏字中找到正確答案。\n\n[DIALOGUE_START:代名詞指代會話：段落銜接線索追蹤]\nTeacher: When a paragraph starts with \"These innovations\", what does \"These\" refer to? | 當一個段落以 These innovations 開頭時，These 是指什麼？\nStudent: It refers back to the 3D printing and robotic arms mentioned in the previous paragraph. | 它是指前一個段落所提到的 3D 列印與機器手臂。\nTeacher: Tracking demonstrative pronouns ensures you never lose the narrative thread. | 追蹤指示代名詞能確保你永遠不會抓丟文章的脈絡。\nStudent: Cohesion words are like bridges connecting separate paragraphs. | 篇章銜接詞就像連接不同段落的橋樑一樣。\n[DIALOGUE_END]",
          "steps": [
            "遇到代名詞時，往前尋找最近的單數或複數名詞。",
            "確認代名詞與該名詞的性別、數量是否一致。",
            "將名詞替換回代名詞的位置，確認語意是否合理。"
          ]
        },
        {
          "heading": "4. 篇章實戰演練",
          "body": "實戰中，克漏字通常包含：文法題（動詞時態、分詞構句）、字彙題（相似詞辨析）、片語題與語意邏輯題。保持閱讀的連貫性是拿分的關鍵。遇到不懂的單字先略過，透過上下文猜測字義。\n\n[DIALOGUE_START:篇章實戰會話：耐震結構文章解構]\nStudy Partner A: In this article on Taipei 101's tuned mass damper, how does the argument progress? | 在這篇關於台北 101 風阻尼球的文章中，論點是如何展開的？\nStudy Partner B: It begins with typhoon challenges, explains pendulum physics, and concludes with safety records. | 開頭先講颱風帶來的挑戰，接著解釋擺錘物理原理，最後總結安全紀錄。\nStudy Partner A: Once we see the structural outline, filling in the blanks takes half the time. | 一旦看清篇章結構架構，填答克漏字空格的時間能省下一半。\nStudy Partner B: Structure awareness turns hard questions into easy points. | 結構意識能把難題轉變成輕鬆拿分的送分題。\n[DIALOGUE_END]"
        },
        {
          "heading": "5. 固定搭配 V-ing vs to V",
          "body": "某些動詞後方必須接動名詞（V-ing [TTS:V-ing]），如 enjoy, avoid, finish [TTS:enjoy, avoid, finish]；有些則接不定詞（to V [TTS:to V]），如 decide, plan, hope [TTS:decide, plan, hope]。特別注意介系詞後面通常接 V-ing [TTS:V-ing]。\n\n[DIALOGUE_START:固定搭配會話：動名詞與不定詞慣用語]\nLearner: Is it \"look forward to see you\" or \"look forward to seeing you\"? | 是 look forward to see you 還是 look forward to seeing you？\nInstructor: \"To\" is a preposition here, so you must use the gerund: \"look forward to seeing you\"! | 這裡的 to 是介系詞，所以後面一定要接動名詞：look forward to seeing you！\nLearner: What about \"be used to\"? | 那 be used to 呢？\nInstructor: \"Be used to V-ing\" means accustomed to, while \"used to V\" refers to past habits. | be used to V-ing 代表習慣於，而 used to V 則指過去的習慣。\n[DIALOGUE_END]",
          "steps": [
            "背誦常考搭配詞：admit, delay, deny + V-ing [TTS:admit, delay, deny + V-ing]。",
            "注意 to [TTS:to] 作為介系詞的片語：look forward to, object to, be used to + V-ing [TTS:look forward to, object to, be used to + V-ing]。"
          ]
        },
        {
          "heading": "6. 冠詞與特指規則",
          "body": "a/an [TTS:a/an] 用於泛指某個單數可數名詞，the [TTS:the] 用於特指（雙方都知道的對象、前面提過的對象，或世上獨一無二的事物）。在工程圖說中，首次提到某個結構用 \"a column\" [TTS:\"a column\"]，再次提到就要用 \"the column\" [TTS:\"the column\"]。\n\n[DIALOGUE_START:冠詞特指會話：首次提及與特指辨析]\nProofreader: Why is it \"a bridge\" in sentence 1, but \"the bridge\" in sentence 3? | 為什麼第 1 句用 a bridge，到了第 3 句卻變成 the bridge？\nAuthor: Because \"a bridge\" introduces a new noun, while \"the bridge\" refers to the specific one already introduced. | 因為 a bridge 是首次引入新名詞，而 the bridge 則是特指前面已經介紹過的那座橋。\nProofreader: Clear distinction! Definite articles define specific reference in English. | 非常清晰的區別！定冠詞在英文中用來定義特定指涉對象。\nAuthor: Mastering articles makes technical writing natural and precise. | 掌握冠詞能讓技術寫作變得既自然又精確。\n[DIALOGUE_END]"
        },
        {
          "heading": "7. 統測四大天王轉折詞全覽矩陣 (因果、轉折、遞進、舉例) 與標點法則",
          "body": "<p>統測克漏字每回必出 2~3 題篇章銜接轉折詞。掌握「四大天王邏輯分類」與「標點符號判斷公式」，就能在看到空格時直接用刪去法秒殺無效選項！</p>\n\n[DIALOGUE_START:四大天王轉折詞會話：克漏字標點與邏輯解密]\nTeacher: Notice the semicolon and comma in \"The material is light; however, it is brittle.\" | 注意這句話裡的分號與逗號：The material is light; however, it is brittle。\nStudent: Why can't we just use a comma like \"The material is light, however it is brittle\"? | 為什麼不能只用逗號像 The material is light, however it is brittle 這樣寫呢？\nTeacher: Because \"however\" is a conjunctive adverb, not a conjunction! It cannot join two independent clauses with only a comma. | 因為 however 是連接副詞，不是連接詞！它絕對不能只靠一個逗號連接兩個獨立子句。\nStudent: So it must be either a period or a semicolon before \"however\"! That rule eliminates half the wrong options in cloze tests! | 所以 however 前面一定要是句點或分號！這項規則能在克漏字中直接排除一半的錯誤選項！\n[DIALOGUE_END]",
          "table": {
            "headers": [
              "邏輯分類",
              "四大天王高頻轉折詞",
              "標點符號與語法位置規則",
              "統測命中例句"
            ],
            "rows": [
              [
                "因果推論 (Cause & Effect [TTS:Cause & Effect])",
                "therefore, thus, consequently, as a result, hence [TTS:therefore, thus, consequently, as a result, hence]",
                "S + V. Therefore, S + V. 或 S + V; therefore, S + V.",
                "Soil bearing capacity is weak. Therefore, deep pile foundations are required. [TTS:Soil bearing capacity is weak. Therefore, deep pile foundations are required.]"
              ],
              [
                "轉折對比 (Contrast & Concession [TTS:Contrast & Concession])",
                "however, nevertheless, on the other hand, in contrast, nonetheless [TTS:however, nevertheless, on the other hand, in contrast, nonetheless]",
                "S + V. However, S + V. 或 S + V; however, S + V. (前後語意反向)",
                "The truss is extremely lightweight; however, it can resist strong wind loads. [TTS:The truss is extremely lightweight; however, it can resist strong wind loads.]"
              ],
              [
                "遞進補充 (Addition & Reinforcement [TTS:Addition & Reinforcement])",
                "moreover, furthermore, in addition, besides, additionally [TTS:moreover, furthermore, in addition, besides, additionally]",
                "S + V. Moreover, S + V. (同向論點再加碼)",
                "Steel structures are flexible. Furthermore, they are recyclable. [TTS:Steel structures are flexible. Furthermore, they are recyclable.]"
              ],
              [
                "舉例與總結 (Exemplification & Summary [TTS:Exemplification & Summary])",
                "for example, for instance, in short, to sum up, in conclusion [TTS:for example, for instance, in short, to sum up, in conclusion]",
                "舉例佐證或文章最後一段總結主題",
                "Many ancient arches remain standing; for instance, the Roman aqueducts are intact. [TTS:Many ancient arches remain standing; for instance, the Roman aqueducts are intact.]"
              ]
            ]
          }
        },
        {
          "heading": "8. 綜合測驗四大空格類型判別法：先分類再作答",
          "body": "<p>統測綜合測驗（克漏字）的每一個空格，都可歸入<strong>四種類型之一</strong>。先判斷類型，就知道該用什麼線索作答——這比從頭到尾逐句翻譯有效率得多。</p>",
          "table": {
            "headers": [
              "空格類型",
              "辨識方法（看選項）",
              "解題線索與順序"
            ],
            "rows": [
              [
                "① 文法型（Grammar）",
                "四個選項是同一個字的不同形態（go／went／going／gone）",
                "只看「空格前後的結構」：主詞單複數、時態標記、有無助動詞——不需要理解全文"
              ],
              [
                "② 詞性型（Word Form）",
                "四個選項是同字根不同詞性（success／successful／successfully／succeed）",
                "判斷空格在句中的功能：主詞受詞用名詞、修飾名詞用形容詞、修飾動詞用副詞"
              ],
              [
                "③ 語意型（Vocabulary）",
                "四個選項是四個不同的實詞（材料／方法／結果／原因）",
                "必須讀懂前後兩句的語意邏輯，找語境線索與同義複現"
              ],
              [
                "④ 連接型（Connector）",
                "四個選項是轉折詞或介系詞（however／therefore／moreover／for example）",
                "判斷前後句的邏輯關係：相反、因果、遞進、舉例"
              ],
              [
                "作答順序建議",
                "先做 ①②（不需理解全文）→ 再做 ④（只需前後兩句）→ 最後做 ③（需要語境）",
                "此順序可在不完全看懂文章的情況下先拿下六成分數"
              ],
              [
                "文法型細分",
                "時態、語態、單複數、比較級、介系詞、關代",
                "時態看時間副詞；語態看主詞是動作者還是承受者"
              ],
              [
                "詞性型細分",
                "名詞（前有 a／the／形容詞）｜形容詞（後有名詞或前有 be）｜副詞（修飾動詞／形容詞／整句）｜動詞（句中缺主要動詞）",
                "空格前是 the／a 或所有格 → 幾乎必為名詞"
              ],
              [
                "語意型細分",
                "同義複現、反義對比、上下位詞、例證關係",
                "在前後文找「與空格語意相同或相反」的字，答案常是它的同義字"
              ]
            ]
          },
          "steps": [
            "第一遍：快速通讀全文抓大意（不填空），了解文章在講什麼、語氣是正面還是負面。",
            "第二遍：依「文法型 → 詞性型 → 連接型 → 語意型」的順序回頭填空，先易後難。",
            "第三遍：把填好的文章完整讀一次，檢查是否通順、代名詞是否指涉正確、時態是否一致。",
            "遇到完全不會的空格，先看選項中「與上下文同一主題領域」的字，命中率明顯高於隨機猜測。"
          ]
        },
        {
          "heading": "9. 克漏字中的動詞判斷：時態、語態與主動被動三層檢核",
          "body": "<p>克漏字裡最常出現的就是動詞空格。用<strong>三層檢核法</strong>依序判斷，可以把四個選項快速縮到一個：先問「主動還是被動」，再問「什麼時態」，最後問「主詞單複數」。</p>\n\n[DIALOGUE_START:動詞判斷會話：主動與被動的選擇]\nTeacher: Should we write \"The bridge built in 1998\" or \"was built in 1998\"? | 我們該寫 The bridge built in 1998 還是 was built in 1998？\nStudent: The bridge doesn't build itself, so it must be passive: was built. | 橋不會自己建造，所以必須用被動：was built。\nTeacher: Exactly. Now, how about \"The engineer ______ the report yesterday\"? | 完全正確。那 The engineer ______ the report yesterday 呢？\nStudent: The engineer is the doer, so it's active: submitted. | 工程師是動作者，所以用主動：submitted。\n[DIALOGUE_END]",
          "table": {
            "headers": [
              "檢核層級",
              "判斷問題",
              "判斷依據與例句"
            ],
            "rows": [
              [
                "第一層：語態",
                "主詞是「做動作的人」還是「被動作的對象」？",
                "The bridge was built in 1998.（橋被建造→被動）／The engineer submitted the report.（工程師執行→主動）"
              ],
              [
                "第二層：時態（時間標記）",
                "句中有沒有時間副詞或時間子句？",
                "yesterday／last year／in 1998 → 過去式｜since／for ＋ 期間 → 現在完成式｜now／at the moment → 現在進行式｜by next year → 未來完成式"
              ],
              [
                "第三層：主詞單複數",
                "主詞是單數還是複數？（注意介系詞片語干擾）",
                "The list of materials is on the desk.（主詞是 list 不是 materials）"
              ],
              [
                "時態一致原則",
                "主要子句過去式 → 附屬子句通常也用過去",
                "He said that he was busy.（× is busy）｜例外：真理、習慣仍用現在式"
              ],
              [
                "時間副詞子句的特殊規則",
                "when／after／before／as soon as／until 引導的「時間或條件」子句，用現在式代替未來式",
                "I will call you when I arrive.（× when I will arrive）"
              ],
              [
                "完成式的判斷訊號",
                "already／yet／ever／never／just／so far／recently／since／for",
                "The team has already finished the survey."
              ],
              [
                "被動語態的常見形式",
                "be ＋ p.p.；情態助動詞 ＋ be ＋ p.p.；完成式被動 have been ＋ p.p.",
                "The site must be inspected.｜The report has been submitted."
              ],
              [
                "不用被動的動詞",
                "happen／occur／take place／appear／belong to／consist of 沒有被動式",
                "The accident happened last night.（× was happened）"
              ]
            ]
          },
          "steps": [
            "三層檢核順序不可顛倒：先語態、再時態、後單複數——顛倒順序會被介系詞片語誤導。",
            "找主詞的技巧：先刪掉所有介系詞片語（of…／in…／with…），剩下的名詞才是真正的主詞。",
            "「時間或條件副詞子句用現在式代替未來式」是統測每年必考的送分題，看到 when／if ＋ 未來語意就要警覺。",
            "沒有被動式的動詞清單務必背熟：happen, occur, take place, appear, disappear, arrive, belong to, consist of, seem, remain。"
          ]
        },
        {
          "heading": "10. 詞性轉換 (Word Form) 題：五大訊號判斷空格詞性",
          "body": "<p>詞性題是克漏字中<strong>最不需要理解文章</strong>的題型——只要看空格前後的結構訊號，兩秒即可決定答案。掌握以下五大訊號，這類題目可以做到零失分。</p>",
          "table": {
            "headers": [
              "訊號",
              "空格詞性",
              "判斷規則與例句"
            ],
            "rows": [
              [
                "訊號一：空格前有 a／an／the／所有格／形容詞",
                "名詞",
                "the successful ______ → completion（名詞）｜his ______ → decision"
              ],
              [
                "訊號二：空格後緊接名詞",
                "形容詞",
                "a ______ design → creative｜an ______ solution → effective"
              ],
              [
                "訊號三：空格前是 be 動詞或連綴動詞",
                "形容詞",
                "The design is ______ → innovative（× innovation／innovatively）"
              ],
              [
                "訊號四：空格修飾動詞、形容詞或整句",
                "副詞",
                "He finished it ______ → quickly｜______ , the plan failed. → Unfortunately"
              ],
              [
                "訊號五：句中缺少主要動詞",
                "動詞",
                "The company ______ the project last year. → completed"
              ],
              [
                "常見字尾（名詞）",
                "-tion, -ment, -ness, -ity, -ance, -ence, -ship, -ism, -er／-or／-ist（人）",
                "construction, development, safety, importance, engineer"
              ],
              [
                "常見字尾（形容詞）",
                "-ful, -less, -ous, -ive, -al, -able／-ible, -ic, -ant／-ent",
                "careful, useless, dangerous, effective, structural, reliable"
              ],
              [
                "常見字尾（副詞／動詞）",
                "副詞：-ly｜動詞：-ize／-ise, -ify, -en, -ate",
                "carefully｜modernize, simplify, strengthen, activate"
              ]
            ]
          },
          "steps": [
            "作答口訣：「前有冠詞填名詞、後接名詞填形容詞、be 後填形容詞、修飾動詞填副詞、缺動詞填動詞」。",
            "陷阱一：有些字加 -ly 之後是形容詞而非副詞（friendly, lovely, lively, costly, timely），不可誤判。",
            "陷阱二：-ing／-ed 形容詞（interesting／interested）要看修飾的是「事物」還是「人」。",
            "整理一份「同字根四詞性對照表」（如 success／successful／successfully／succeed），考前朗讀三遍即可形成反射。"
          ]
        },
        {
          "heading": "11. 動詞與介系詞固定搭配 (Collocation) 高頻表",
          "body": "<p>固定搭配是克漏字裡<strong>沒有道理可講、只能記憶</strong>的部分，但它的範圍其實有限。統測近十年反覆出現的搭配約 60 組，依「動詞 ＋ 介系詞」「形容詞 ＋ 介系詞」「名詞 ＋ 介系詞」三類整理，一週即可完成。</p>",
          "table": {
            "headers": [
              "搭配類別",
              "高頻組合與中譯",
              "例句"
            ],
            "rows": [
              [
                "動詞 ＋ on",
                "depend on 依賴｜insist on 堅持｜concentrate on 專注於｜work on 從事｜spend ＋ 金錢 on",
                "The schedule depends on the weather."
              ],
              [
                "動詞 ＋ to",
                "belong to 屬於｜refer to 提及｜contribute to 促成｜lead to 導致｜adapt to 適應｜look forward to ＋ V-ing",
                "Poor drainage led to the flooding."
              ],
              [
                "動詞 ＋ for",
                "apply for 申請｜account for 佔／解釋｜search for 尋找｜be responsible for 負責｜pay for 支付",
                "Concrete accounts for half of the cost."
              ],
              [
                "動詞 ＋ with",
                "deal with 處理｜comply with 遵守｜provide sb. with sth. 提供｜be satisfied with 滿意",
                "All contractors must comply with the safety code."
              ],
              [
                "動詞 ＋ from",
                "prevent／stop／keep sb. from V-ing 阻止｜differ from 不同於｜result from 起因於｜suffer from 受苦於",
                "The barrier prevents dust from spreading."
              ],
              [
                "形容詞 ＋ 介系詞",
                "be good at 擅長｜be famous for 以…聞名｜be afraid of 害怕｜be interested in 對…有興趣｜be similar to 類似於｜be aware of 意識到",
                "She is skilled at reading blueprints."
              ],
              [
                "名詞 ＋ 介系詞",
                "a solution to 解決之道｜the reason for 原因｜an increase in 增加｜the effect on 影響｜access to 使用權",
                "There has been a sharp increase in material costs."
              ],
              [
                "易混淆對比組",
                "result from（起因於）vs. result in（導致）｜be made of（看得出原料）vs. be made from（看不出原料）｜in time（及時）vs. on time（準時）",
                "The delay resulted from heavy rain.／The rain resulted in a delay."
              ]
            ]
          },
          "steps": [
            "記憶方法：搭配一律以「完整例句」為單位背誦，不要背裸露的片語，否則考場上會想不起用法。",
            "look forward to／be used to／object to／be devoted to 的 to 都是「介系詞」，後面必接名詞或動名詞——統測最愛考的陷阱。",
            "result from 與 result in 方向相反：from 指向原因，in 指向結果，可用箭頭圖記憶。",
            "每天固定背 10 組搭配並造一個句子，六天即可完成 60 組，是克漏字投報率最高的準備方式。"
          ]
        }
      ],
      "practices": [
        {
          "question": "When constructing a skyscraper, safety is the top priority. ________, workers must wear hard hats at all times.\n(A) Therefore\n(B) However\n(C) Instead\n(D) Otherwise [TTS:When constructing a skyscraper, safety is the top priority. ________, workers must wear hard hats at all times.\n(A) Therefore\n(B) However\n(C) Instead\n(D) Otherwise]",
          "difficulty": "1",
          "steps": [
            "前句提到「安全是最重要的事」。",
            "後句提到「工人必須一直戴著安全帽」。",
            "兩句呈現因果關係，因此選擇表示「因此」的 Therefore [TTS:Therefore]。"
          ],
          "answer": "(A) Therefore",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "The engineer decided ________ the blueprints to reduce the overall cost of the project.\n(A) modify\n(B) modifying\n(C) to modify\n(D) modified [TTS:The engineer decided ________ the blueprints to reduce the overall cost of the project.\n(A) modify\n(B) modifying\n(C) to modify\n(D) modified]",
          "difficulty": "1",
          "steps": [
            "decide [TTS:decide] 後面必須接不定詞 to V [TTS:to V]，表示「決定去做某事」。",
            "因此選擇 to modify [TTS:to modify]。"
          ],
          "answer": "(C) to modify",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "The new stadium features a retractable roof. ________ allows games to be played in any weather condition.\n(A) This\n(B) They\n(C) What\n(D) Which [TTS:The new stadium features a retractable roof. ________ allows games to be played in any weather condition.\n(A) This\n(B) They\n(C) What\n(D) Which]",
          "difficulty": "2",
          "steps": [
            "前句提到新體育場有一個可伸縮的屋頂（a retractable roof [TTS:a retractable roof]，單數事物）。",
            "空格處作為下一句的主詞，指代前面的整件事或這個屋頂，應使用單數代名詞 This [TTS:This]。Which [TTS:Which] 通常用於形容詞子句（需有逗號或在同一句中），This [TTS:This] 適合開啟獨立的新句。"
          ],
          "answer": "(A) This",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "We are looking forward to ________ the new CAD software next week.\n(A) use\n(B) using\n(C) used\n(D) be using [TTS:We are looking forward to ________ the new CAD software next week.\n(A) use\n(B) using\n(C) used\n(D) be using]",
          "difficulty": "2",
          "steps": [
            "片語 look forward to [TTS:look forward to] 中的 to [TTS:to] 是介系詞，後面必須接動名詞 (V-ing [TTS:V-ing]) 或名詞。",
            "因此選擇 using [TTS:using]。"
          ],
          "answer": "(B) using",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "Concrete is a popular building material. It is cheap and easy to make. ________, it has excellent compressive strength.\n(A) Furthermore\n(B) For example\n(C) In contrast\n(D) On the contrary [TTS:Concrete is a popular building material. It is cheap and easy to make. ________, it has excellent compressive strength.\n(A) Furthermore\n(B) For example\n(C) In contrast\n(D) On the contrary]",
          "difficulty": "2",
          "steps": [
            "前文提到混凝土便宜且易於製作（優點）。",
            "後句提到它有極佳的抗壓強度（另一個優點）。",
            "兩句是補充說明的遞進關係，故選 Furthermore [TTS:Furthermore]（此外）。"
          ],
          "answer": "(A) Furthermore",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "Many old buildings are being torn down. ________, some historic landmarks will be preserved for future generations.\n(A) Consequently\n(B) Likewise\n(C) Nevertheless\n(D) Hence [TTS:Many old buildings are being torn down. ________, some historic landmarks will be preserved for future generations.\n(A) Consequently\n(B) Likewise\n(C) Nevertheless\n(D) Hence]",
          "difficulty": "3",
          "steps": [
            "前句說「許多舊建築正被拆除」。",
            "後句說「一些歷史地標將被保存下來」。",
            "語意出現轉折（拆除 vs 保存），所以選 Nevertheless [TTS:Nevertheless]（然而/不過）。"
          ],
          "answer": "(C) Nevertheless",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "The architect was criticized for not ________ the structural limits of the steel beams.\n(A) consider\n(B) considered\n(C) considering\n(D) to consider [TTS:The architect was criticized for not ________ the structural limits of the steel beams.\n(A) consider\n(B) considered\n(C) considering\n(D) to consider]",
          "difficulty": "2",
          "steps": [
            "介系詞 for [TTS:for] 後面遇到動詞時，必須使用動名詞 V-ing [TTS:V-ing] 形式。",
            "因此選擇 considering [TTS:considering]。"
          ],
          "answer": "(C) considering",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "The crew finished ________ the foundation just before the heavy rain started.\n(A) to pour\n(B) pour\n(C) poured\n(D) pouring [TTS:The crew finished ________ the foundation just before the heavy rain started.\n(A) to pour\n(B) pour\n(C) poured\n(D) pouring]",
          "difficulty": "1",
          "steps": [
            "動詞 finish [TTS:finish] 後面習慣接動名詞 V-ing [TTS:V-ing]，表示「完成某動作」。",
            "因此選擇 pouring [TTS:pouring]。"
          ],
          "answer": "(D) pouring",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        }
      ],
      "step0Prerequisites": [
        "常見轉折連接詞 (However, Therefore, Furthermore, In contrast, Consequently)",
        "代名詞指涉對象判定能力 (it, they, this, such)",
        "上下句邏輯連貫性分析能力"
      ]
    },
    {
      "slug": "grammar-mastery",
      "title": "9. 高階文法與統測常考句型",
      "desc": "about subjunctive mood, participle clauses, inversion, emphasis patterns, volitional verbs[TTS:about subjunctive mood, participle clauses, inversion, emphasis patterns, volitional verbs] - 統測衝刺總複習",
      "status": "done",
      "gradeLevel": 12,
      "examHitRate": 5,
      "fatalTraps": [
        {
          "wrongThinking": "與過去事實相反的假設語氣，條件句誤寫成一般過去式。",
          "correctThinking": "與過去事實相反時，條件句必須用過去完成式 (If + S + had p.p.)，主要子句用 (S + would/could/might + have p.p.)。",
          "trapDescription": "統測常考與過去相反之假設語氣，混淆與現在相反 (were/did) 與與過去相反 (had p.p.) 是最主要扣分點。"
        },
        {
          "wrongThinking": "否定副詞放句首時忘記將助動詞倒裝到主詞前面。",
          "correctThinking": "否定副詞（Never, Seldom, Rarely, Hardly, Not only 等）置於句首時，句子必須部分倒裝：否定副詞 + 助動詞/be動詞 + 主詞 + 動詞。",
          "trapDescription": "例如 \"Never I have seen...\" 錯誤，必須倒裝為 \"Never have I seen...\"。"
        }
      ],
      "eliteMentalModels": [
        {
          "technique": "假設語氣時態降階模型",
          "explanation": "時態往前推一階：與現在相反用過去式 (did/were)；與過去相反用過去完成式 (had p.p.)；與未來相反用 were to / should。"
        },
        {
          "technique": "倒裝句疑問句型模型",
          "explanation": "否定副詞置句首，後面結構直接套用「一般疑問句語序」（助動詞 + 主詞 + 原形動詞），一秒寫出正確倒裝。"
        }
      ],
      "covered_question_ids": [],
      "worked_examples": [
        {
          "question": "The engineer _____ the construction earlier, but he didn't have enough funds.[TTS:The engineer _____ the construction earlier, but he didn't have enough funds.]",
          "difficulty": "3",
          "steps": [
            "分析語意：「工程師本來可以提早完成施工，但他沒有足夠的資金」。",
            "判斷時態：後句 didn't have enough funds[TTS:didn't have enough funds] 為過去事實。",
            "套用句型：與過去事實相反的推測或惋惜，需使用「could have + p.p.[TTS:could have + p.p.]」或「would have + p.p.[TTS:would have + p.p.]」。"
          ],
          "answer": "could have finished[TTS:could have finished]",
          "hints": [
            "仔細分析句子主詞、動詞與受詞結構",
            "根據上下文語境與關鍵字線索判斷最適選項"
          ],
          "commonMistake": "容易受外觀相似的單字或字面直譯干擾，未完整分析句子文法功能。",
          "eliteShortcut": "文法結構分析法：先確認空格所缺詞性與句法功能，快速排除不符選項，秒殺破題！"
        }
      ],
      "illustrations": [
        "context.webp",
        "mechanism.webp",
        "comparison.webp"
      ],
      "concepts": [
        {
          "heading": "1. 假設語氣與現在/過去事實相反",
          "body": "<span className=\"text-blue-600 font-bold\">假設語氣</span>的核心在於「時態退一步」。與現在相反用過去式，與過去相反用過去完成式。\n\n<div className=\"p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs font-mono space-y-1 my-3\">\n  <div className=\"font-bold text-amber-800 dark:text-amber-300\">⚖️ 假設語氣時態降格天平圖解：</div>\n  <div>• 與現在相反 (退一步)：If S + were/V-ed, S + would/could + 原形V</div>\n  <div>• 與過去相反 (退兩步)：If S + had p.p., S + would/could + have p.p.</div>\n  <div>• 倒裝句 (省略 If)：Had they known... / Were he here... / Should you need...</div>\n</div>\n\n[DIALOGUE_START:假設語氣會話：土質地質風險評估]\nGeotechnical Lead: If we had performed the core drilling earlier, we would have detected the underground sinkhole. | 如果我們當初早一點進行鑽探取樣，我們就能察覺到地下的岩溶空洞。\nStructural Engineer: If the bedrock were stronger, we could reduce the pile foundation depth. | 如果岩盤層更堅固一些，我們就可以縮減基樁的深度。\nGeotechnical Lead: Had we known the water table was so high, we would have installed dewatering pumps. | 要是我們早知道地下水位這麼高，我們早就安裝抽水沉水泵了。\nStructural Engineer: Let us reinforce the slurry walls immediately to prevent subsidence. | 我們立刻為連續壁進行補強，以防地層下陷。\n[DIALOGUE_END]",
          "steps": [
            "與現在事實相反：If S + were/V-ed, S + would/could/should/might + VR.[TTS:If S + were/V-ed, S + would/could/should/might + VR.]",
            "與過去事實相反：If S + had p.p., S + would/could/should/might + have p.p.[TTS:If S + had p.p., S + would/could/should/might + have p.p.]",
            "省略 if[TTS:if] 倒裝：將 were[TTS:were] 或 had[TTS:had] 移至主詞前"
          ],
          "table": {
            "headers": [
              "假設類型",
              "If子句動詞",
              "主要子句動詞"
            ],
            "rows": [
              [
                "與現在相反",
                "過去式 (be動詞一律用were[TTS:were])",
                "would/could/might + VR[TTS:would/could/might + VR]"
              ],
              [
                "與過去相反",
                "過去完成式 (had + p.p.[TTS:had + p.p.])",
                "would/could/might + have + p.p.[TTS:would/could/might + have + p.p.]"
              ]
            ]
          }
        },
        {
          "heading": "2. 分詞構句簡化法則",
          "body": "<span className=\"text-amber-600 font-bold\">分詞構句</span>的重點是找出「邏輯主詞」。省略連接詞與相同主詞後，依主被動關係改寫動詞。\n\n[DIALOGUE_START:分詞構句會話：簡化施工步驟描述]\nSenior Architect: Transform this sentence: \"After the contractor finished the framing, he inspected the welds.\" | 請改寫這句話：After the contractor finished the framing, he inspected the welds。\nJunior Associate: Using a participle clause: \"Having finished the framing, the contractor inspected the welds.\" | 使用分詞構句簡化為：Having finished the framing, the contractor inspected the welds。\nSenior Architect: What if the subject is passive: \"Because it was damaged by the earthquake, the pier was rebuilt\"? | 如果是被動語態呢：Because it was damaged by the earthquake, the pier was rebuilt？\nJunior Associate: It becomes: \"Damaged by the earthquake, the pier was rebuilt.\" | 變成：Damaged by the earthquake, the pier was rebuilt。\n[DIALOGUE_END]",
          "steps": [
            "步驟一：刪除連接詞 (when[TTS:when], because[TTS:because] 等)。",
            "步驟二：確認前後主詞是否相同，相同則刪除附屬子句的主詞。",
            "步驟三：將動詞改為 V-ing[TTS:V-ing] (主動) 或 V-ed[TTS:V-ed] (被動)。",
            "懸垂分詞：若前後主詞不同卻省略，會造成語意不清。",
            "With[TTS:With] 伴隨狀態：With + O + OC[TTS:With + O + OC] (V-ing[TTS:V-ing]主動/V-ed[TTS:V-ed]被動/形容詞/介系詞片語)"
          ],
          "table": {
            "headers": [
              "構句類型",
              "形式",
              "說明"
            ],
            "rows": [
              [
                "主動",
                "V-ing, S + V[TTS:V-ing, S + V]",
                "主詞與該動作為主動關係"
              ],
              [
                "被動",
                "(Being) V-ed, S + V[TTS:(Being) V-ed, S + V]",
                "主詞與該動作為被動關係"
              ]
            ]
          }
        },
        {
          "heading": "3. 倒裝句",
          "body": "為了強調或修辭，將句子結構重新排列。<span className=\"text-rose-600 font-bold\">否定副詞置於句首</span>是統測最高頻考點，需將後方子句改為疑問句語序。\n\n[DIALOGUE_START:倒裝句會話：強調工程卓越表現]\nAuditor: Not only did the construction team finish under budget, but they also achieved zero accidents. | 施工團隊不僅在預算內完工，更達成了零工安事故的卓越紀錄。\nProject Director: Rarely have I seen such exceptional project coordination and safety discipline. | 我很少見到如此出色的專案協調能力與安全紀律。\nAuditor: Under no circumstances should safety protocols be compromised for speed. | 在任何情況下，都絕不應該為了追求速度而犧牲安全規範。\nProject Director: We uphold the highest construction ethics at all times. | 我們始終秉持最高標準的工程倫理。\n[DIALOGUE_END]",
          "steps": [
            "否定副詞倒裝：Never/Seldom/Hardly/Little + 助動詞/be動詞 + S + V[TTS:Never/Seldom/Hardly/Little + 助动词/be动词 + S + V]",
            "地方副詞倒裝：地方副詞 + 動詞 + 主詞 (主詞須為名詞)",
            "So/Neither[TTS:So/Neither] 倒裝：So + 助動詞/be動詞 + S[TTS:So + 助動詞/be動詞 + S] (也一樣) / Neither + 助動詞/be動詞 + S[TTS:Neither + 助動詞/be動詞 + S] (也不)"
          ],
          "table": {
            "headers": [
              "倒裝類型",
              "原句結構",
              "倒裝結構"
            ],
            "rows": [
              [
                "否定副詞",
                "S + never + V[TTS:S + never + V]",
                "Never + 助動詞 + S + V[TTS:Never + 助動詞 + S + V]"
              ],
              [
                "地方副詞",
                "A dog sits under the tree.[TTS:A dog sits under the tree.]",
                "Under the tree sits a dog.[TTS:Under the tree sits a dog.]"
              ]
            ]
          }
        },
        {
          "heading": "4. 強調句型 (分裂句)",
          "body": "利用 <span className=\"text-indigo-600 font-bold\">It is/was ... that ...[TTS:It is/was ... that ...]</span> 來強調句中的主詞、受詞或副詞片語。\n\n[DIALOGUE_START:分裂強調句會話：突顯關鍵檢核人]\nInspector: It was the junior surveyor that discovered the coordinate discrepancy on the grid. | 正是那位初級測量員發現了測量網格上的座標偏差。\nChief Engineer: It was because of her diligence that we avoided a major foundation misalignment. | 正是因為她的細心與負責，我們才避免了嚴重的基礎偏位錯誤。\nInspector: Cleft sentences \"It is...that...\" focus attention on the vital element. | 分裂強調句 It is...that... 能將讀者的焦點精準聚焦在關鍵要素上。\nChief Engineer: She definitely deserves our team recognition award. | 她絕對值得獲得我們團隊的表揚獎項。\n[DIALOGUE_END]",
          "steps": [
            "公式：It is/was + 強調部分 + that + 剩餘部分。[TTS:It is/was + 強調部分 + that + 剩餘部分。]",
            "注意：不可強調「動詞」與「形容詞」。",
            "若強調「人」，that[TTS:that] 可用 who/whom[TTS:who/whom] 代替；強調事物可用 which[TTS:which] 代替。"
          ],
          "table": {
            "headers": [
              "強調目標",
              "原句",
              "強調句"
            ],
            "rows": [
              [
                "主詞",
                "The manager reviewed the plan.[TTS:The manager reviewed the plan.]",
                "It was the manager that/who reviewed the plan.[TTS:It was the manager that/who reviewed the plan.]"
              ],
              [
                "時間",
                "The manager reviewed the plan yesterday.[TTS:The manager reviewed the plan yesterday.]",
                "It was yesterday that the manager reviewed the plan.[TTS:It was yesterday that the manager reviewed the plan.]"
              ]
            ]
          }
        },
        {
          "heading": "5. 意志動詞與虛擬式",
          "body": "當主要子句的動詞表示<span className=\"text-teal-600 font-bold\">堅持、建議、要求、命令</span>時，其後的 that[TTS:that] 子句必須使用原形動詞 (省略 should[TTS:should])。\n\n[DIALOGUE_START:意志動詞虛擬式會話：官方督導要求]\nBuilding Official: The municipal department demands that the rebar spacing be verified by a licensed PE. | 主管機關要求鋼筋間距必須由執業專業技師親自檢核。\nSite Agent: Our structural engineer insisted that we conduct an ultrasonic weld inspection. | 我們的結構技師也堅持要求我們進行超音波銲道檢驗。\nBuilding Official: It is imperative that all test certificates be submitted prior to occupancy permit issuance. | 所有檢驗證明書在核發使用執照前都必須全數提交，這是強制要求的。\nSite Agent: We will comply with every regulatory requirement promptly. | 我們會迅速配合並遵守每一項法規要求。\n[DIALOGUE_END]",
          "steps": [
            "常見動詞：insist[TTS:insist](堅持), suggest[TTS:suggest](建議), demand[TTS:demand](要求), order[TTS:order](命令), require[TTS:require](要求)。",
            "句型：S1 + 意志動詞 + that + S2 + (should) + VR.[TTS:S1 + 意志動詞 + that + S2 + (should) + VR.]",
            "形容詞用法：It is essential/necessary/important + that + S + (should) + VR.[TTS:It is essential/necessary/important + that + S + (should) + VR.]"
          ],
          "table": {
            "headers": [
              "類別",
              "常見字彙",
              "後面子句動詞形式"
            ],
            "rows": [
              [
                "意志動詞",
                "suggest, demand, insist[TTS:suggest, demand, insist]",
                "(should) + VR[TTS:(should) + VR] (原形動詞)"
              ],
              [
                "重要性形容詞",
                "essential, vital, necessary[TTS:essential, vital, necessary]",
                "(should) + VR[TTS:(should) + VR] (原形動詞)"
              ]
            ]
          }
        },
        {
          "heading": "6. 助動詞 + have p.p. 對過去推測",
          "body": "表示對過去發生的事情進行<span className=\"text-emerald-600 font-bold\">猜測或表達遺憾</span>。\n\n[DIALOGUE_START:助動詞推測會話：過去施工狀態推斷]\nForeman A: The concrete surface is already dry and hard. They must have poured it yesterday. | 混凝土表面已經乾燥硬化了。他們昨天一定就已經完成澆置了。\nForeman B: They should have covered the slab with wet burlap to prevent shrinkage cracks. | 他們本來應該要用濕麻布覆蓋樓板的，以防止產生乾縮裂縫。\nForeman A: Could the cracks have been caused by excessive water in the mix? | 這些裂縫有可能是因為拌和水中加了太多水引起的嗎？\nForeman B: We need to review the batch plant delivery tickets to be sure. | 我們需要檢視預拌廠的送貨單據才能確定。\n[DIALOGUE_END]",
          "steps": [
            "must have p.p.[TTS:must have p.p.]：過去必定 (肯定推測)。",
            "can't have p.p.[TTS:can't have p.p.]：過去不可能 (否定推測)。",
            "should have p.p.[TTS:should have p.p.]：過去本應該做 (卻沒做)。",
            "shouldn't have p.p.[TTS:shouldn't have p.p.]：過去本不應該做 (卻做了)。",
            "could have p.p.[TTS:could have p.p.]：過去本來可以做 (卻沒做)。"
          ],
          "table": {
            "headers": [
              "句型",
              "意義",
              "例句意境"
            ],
            "rows": [
              [
                "must have p.p.[TTS:must have p.p.]",
                "過去必定...",
                "地上全濕了，昨晚必定下過雨。"
              ],
              [
                "should have p.p.[TTS:should have p.p.]",
                "過去本應該...",
                "你本應該仔細檢查藍圖的，但你沒有。"
              ]
            ]
          }
        },
        {
          "heading": "7. 統測 13 大文法模組速查總表",
          "body": "<span className=\"text-orange-600 font-bold\">總結統測常考文法要點</span>，考前務必熟記。\n\n[DIALOGUE_START:統測文法整合會話：快速辨識考點公式]\nStudent: How do I master all thirteen grammar modules before the Unified Exam? | 我要如何在統測前掌握全部十三大文法模組？\nTutor: Categorize questions into subjunctive mood, participle clauses, and inversion patterns. | 把題目歸類為假設語氣、分詞構句與倒裝句型三大核心類別。\nStudent: Once I identify the structural signal words, the answer becomes obvious. | 一旦我識別出結構提示詞，答案就變得顯而易見了。\nTutor: Practice with past exam questions to build rapid instinct. | 多用歷屆考古題練習，培養快速作答的直覺反應。\n[DIALOGUE_END]",
          "steps": [
            "時態語態：注意時間標記與主被動。",
            "關係代名詞：判斷先行詞與關代在子句中的角色。",
            "分詞與分詞構句：尋找邏輯主詞判斷 V-ing[TTS:V-ing] 或 V-ed[TTS:V-ed]。",
            "連接詞與轉折語：注意語意邏輯 (因果、讓步、對比)。",
            "不定詞與動名詞：記憶特定動詞後方接法 (enjoy V-ing[TTS:enjoy V-ing], want to V[TTS:want to V])。"
          ],
          "table": {
            "headers": [
              "模組",
              "核心口訣",
              "常見考點"
            ],
            "rows": [
              [
                "時態/被動",
                "找時間、判主被動",
                "現在完成式、被動語態"
              ],
              [
                "假設語氣",
                "時態退一步",
                "與過去事實相反 (had p.p.[TTS:had p.p.] / would have p.p.[TTS:would have p.p.])"
              ],
              [
                "倒裝句",
                "否定副詞擺句首",
                "Never / Hardly / Seldom[TTS:Never / Hardly / Seldom] 倒裝"
              ]
            ]
          }
        },
        {
          "heading": "8. 職場情境對話應用",
          "body": "在工程或商務情境中，常利用假設語氣與助動詞表達推測與惋惜。\n\n[DIALOGUE_START:高階職場商務會話：跨國合約爭議協商]\nContract Director: Had the supplier notified us of the supply chain delay, we would have adjusted our schedule. | 要是供應商早點通知我們供應鏈延遲，我們早就調整工期進度了。\nLegal Counsel: We insist that the liquidated damages clause be enforced strictly according to FIDIC terms. | 我們堅持必須嚴格依據 FIDIC 國際工程合約條款執行逾期罰款機制。\nContract Director: Let us schedule a formal mediation session with their executive board. | 我們來與他們的董事會安排一場正式的調解協商會議吧。\nLegal Counsel: I will prepare all correspondence and time impact analyses as supporting evidence. | 我會準備好所有的往來函件與工期影響分析作為佐證資料。\n[DIALOGUE_END]",
          "steps": [
            "A: The project was delayed again. I should have ordered the materials earlier.[TTS:A: The project was delayed again. I should have ordered the materials earlier.] (專案又延遲了。我本應該早點訂購材料的。)",
            "B: If you had told me, I would have helped you contact the supplier.[TTS:B: If you had told me, I would have helped you contact the supplier.] (如果你早點告訴我，我就會幫你聯繫供應商了。)",
            "A: Did you see the new architectural design?[TTS:A: Did you see the new architectural design?] (你有看到新的建築設計嗎？)",
            "B: Never have I seen such an innovative building in this city.[TTS:B: Never have I seen such an innovative building in this city.] (我從未在這座城市看過如此創新的建築。)"
          ]
        },
        {
          "heading": "9. 省略 If 的倒裝假設語氣三本柱與否定倒裝句",
          "body": "統測高階文法每年必考的封頂題型即為<span className=\"font-bold text-rose-600\">「假設語氣省略 If 之倒裝句」</span>與<span className=\"font-bold text-indigo-600\">「否定副詞置於句首之倒裝句」</span>。當 If 條件句省略 If 時，必須將助動詞或 be 動詞搬到主詞前方：(1) 與現在相反倒裝為 <span className=\"font-mono font-bold\">Were + S + to V / adj</span>；(2) 與過去相反倒裝為 <span className=\"font-mono font-bold\">Had + S + p.p.</span>；(3) 與未來相反（萬一）倒裝為 <span className=\"font-mono font-bold\">Should + S + 原形動詞</span>。此外，否定副詞（Not only, Never, Seldom, Hardly, Under no circumstances）置於句首時，語序如同一般疑問句（助動詞 + S + V）。\n\n[DIALOGUE_START:進階倒裝句與假設語氣會話：總工程師的驗收嚴審]\nChief Auditor: Had the foundation piles not been driven to bedrock, this structure would have settled unevenly! | 倘若基樁當初沒有打到岩盤，這棟結構體早就發生不均勻沉陷了！\nSite Superintendent: We followed the seismic blueprints to the millimeter, sir. | 長官，我們百分之百按耐震施工藍圖精確施作至公釐等級。\nChief Auditor: Under no circumstances should project deadlines compromise structural integrity. | 任何情況下，工程期限都絕不能犧牲結構安全與完整性。\nSite Superintendent: Absolutely. Not only do we conduct ultrasonic weld tests daily, but we also file third-party reports. | 絕對如此。我們不僅每日進行超音波焊道檢測，還由第三方機構出具正式簽證報告。\n[DIALOGUE_END]",
          "table": {
            "headers": [
              "倒裝句型類別",
              "正常語序 (含 If / 否定詞)",
              "省略倒裝語序 (金牌公式)",
              "統測高分示範例句"
            ],
            "rows": [
              [
                "與過去事實相反倒裝 [TTS:Past subjunctive inversion]",
                "If S + had + p.p., S + would have + p.p. [TTS:If subject had p.p., subject would have p.p.]",
                "Had + S + p.p., S + would have + p.p. [TTS:Had subject p.p., subject would have p.p.]",
                "Had the contractor used reinforced rebar, the wall would not have collapsed. [TTS:Had the contractor used reinforced rebar, the wall would not have collapsed.] (倘若承包商當初使用了加強鋼筋，牆面就不會坍塌了。)"
              ],
              [
                "與現在事實相反倒裝 [TTS:Present subjunctive inversion]",
                "If S + were..., S + would + V [TTS:If subject were, subject would base verb]",
                "Were + S + to V / N / Adj, S + would + V [TTS:Were subject to verb, subject would verb]",
                "Were I the chief engineer, I would re-evaluate the seismic safety margin. [TTS:Were I the chief engineer, I would re-evaluate the seismic safety margin.] (如果我是總工程師，我會重新評估耐震安全係數。)"
              ],
              [
                "與未來可能相反 (萬一) [TTS:Future subjunctive inversion]",
                "If S + should + V, S + will/would + V [TTS:If subject should verb, subject will verb]",
                "Should + S + V (原形), (祈使句 / S + will + V) [TTS:Should subject base verb]",
                "Should any fire hazard occur, press the emergency alarm immediately. [TTS:Should any fire hazard occur, press the emergency alarm immediately.] (萬一發生任何火災隱患，請立即按下緊急警報。)"
              ],
              [
                "否定副詞置於句首 [TTS:Negative adverb inversion]",
                "S + seldom / never / hardly + V [TTS:Subject seldom, never, hardly verbs]",
                "Never / Seldom / Hardly + 助動詞 + S + V [TTS:Never, Seldom, Hardly plus auxiliary plus subject plus verb]",
                "Seldom have we witnessed such impeccable architectural precision. [TTS:Seldom have we witnessed such impeccable architectural precision.] (我們極少見證過如此無懈可擊的建築精準度。)"
              ],
              [
                "Not only 句首倒裝 [TTS:Not only inversion]",
                "S + not only V1 + but also V2 [TTS:Subject not only verbs but also verbs]",
                "Not only + 助動詞 + S + V, but S + also + V [TTS:Not only plus auxiliary plus subject plus verb, but subject also verbs]",
                "Not only did they finish under budget, but they also won the safety trophy. [TTS:Not only did they finish under budget, but they also won the safety trophy.] (他們不僅在預算內完工，更贏得了工安獎盃。)"
              ],
              [
                "絕不 (強烈禁令倒裝) [TTS:Under no circumstances]",
                "S + must not under any circumstances V [TTS:Subject must not under any circumstances verb]",
                "Under no circumstances + should/must + S + V [TTS:Under no circumstances should subject verb]",
                "Under no circumstances should workers enter the shaft without respirators. [TTS:Under no circumstances should workers enter the shaft without respirators.] (在任何情況下，工人都絕不得在未配戴呼吸防護具時進入豎井。)"
              ]
            ]
          },
          "steps": [
            "步驟一：判定是否為假設倒裝：題目句首若出現 Had / Were / Should [TTS:Had, Were, Should]，且句尾為句號（非問句），100% 為省略 If 的假設語氣倒裝句。 ｜為什麼：倒裝問句句尾為問號，倒裝陳述句句尾為句號。",
            "步驟二：匹配後半主要子句時態：若主要子句為 would have p.p. [TTS:would have p.p.]，句首立刻填 Had + S + p.p. [TTS:Had + S + p.p.]；若主要子句為 would + V [TTS:would + base verb]，句首填 Were + S [TTS:Were + S]；若後半為祈使句或 will + V，句首填 Should + S + V [TTS:Should + S + base verb]。 ｜為什麼：時態前後呼應原則。",
            "步驟三：判定否定倒裝：句首若出現 Never, Seldom, Hardly, Barely, Not only, Under no circumstances [TTS:Never, Seldom, Hardly, Barely, Not only, Under no circumstances]，後方必須緊接助動詞 (do / does / did / have / has / had / can / should) 再接主詞。 ｜為什麼：否定詞前置強調引起主謂語序倒裝。",
            "步驟四：驗算助動詞還原法：將助動詞移回主詞後面，還原成正常直述句檢核文意與時態是否正確。 ｜為什麼：逆向驗算排除動詞形態錯誤。"
          ]
        },
        {
          "heading": "10. 被動語態進階：雙被動、片語動詞被動與感官使役被動",
          "body": "<p>基礎被動只需要 be ＋ p.p.，但統測常考的是<strong>四種進階被動</strong>：授與動詞的雙重被動、片語動詞的被動、感官與使役動詞的被動，以及 by 以外的介系詞搭配。這些是拉開分數的關鍵細節。</p>\n\n[DIALOGUE_START:被動語態會話：工程文件的客觀陳述]\nManager: Was the revised drawing sent to the client? | 修訂圖說寄給業主了嗎？\nEngineer: Yes, it was sent yesterday, and the client was given a full explanation. | 是的，昨天已寄出，並且已向業主完整說明。\nManager: Good. Was the delay taken care of in the report? | 很好。報告中有處理延誤的部分嗎？\nEngineer: It was. The site is said to be back on schedule now. | 有。據說工地現在已回到正常進度。\n[DIALOGUE_END]",
          "table": {
            "headers": [
              "進階類型",
              "結構規則",
              "例句與陷阱"
            ],
            "rows": [
              [
                "① 授與動詞雙被動",
                "give／send／offer／teach／show 有兩個受詞，可各自當被動主詞",
                "主動：They gave the client a report.｜被動 A：The client was given a report.｜被動 B：A report was given to the client.（人當主詞時介系詞可省，物當主詞時須加 to）"
              ],
              [
                "② 片語動詞被動",
                "片語整體不可拆開，介副詞必須保留",
                "They took care of the problem. → The problem was taken care of.（不可漏掉 of）｜look after → be looked after"
              ],
              [
                "③ 感官動詞被動",
                "主動時受詞補語用原形，改被動後必須還原成 to V",
                "主動：I saw him enter.｜被動：He was seen to enter.（原形 enter 變成 to enter）"
              ],
              [
                "④ 使役動詞 make 被動",
                "同樣要把原形補語還原成 to V",
                "主動：They made him sign.｜被動：He was made to sign."
              ],
              [
                "⑤ by 以外的介系詞",
                "情緒或狀態類被動慣用其他介系詞",
                "be interested in｜be satisfied with｜be worried about｜be covered with｜be known for（以…聞名）／be known as（被稱為）／be known to（為…所知）"
              ],
              [
                "⑥ 完成式與情態被動",
                "have been ＋ p.p.｜情態助動詞 ＋ be ＋ p.p.",
                "The report has been submitted.｜The site must be inspected before use."
              ],
              [
                "⑦ It is said that… 句型",
                "傳聞句型的兩種改寫",
                "It is said that he is an expert.＝He is said to be an expert.｜同型：believe, report, think, know"
              ],
              [
                "⑧ 不可用被動的動詞",
                "不及物動詞與部分狀態動詞無被動",
                "happen, occur, take place, appear, arrive, belong to, consist of, resemble, lack｜（×）The accident was happened."
              ]
            ]
          },
          "steps": [
            "被動語態改寫四步驟：① 找出主動句的受詞 ② 把它移到句首當主詞 ③ 動詞改成 be ＋ p.p.（時態不變）④ 原主詞加 by 放句尾（不重要則省略）。",
            "感官與使役動詞的被動是統測經典考點：主動用原形、被動加 to，唯獨 let 改被動通常改用 be allowed to。",
            "片語動詞被動時，介副詞絕對不可省略，這是最容易被忽略的失分點：was looked after／was taken care of／was put off。",
            "工程與學術寫作偏好被動語態以呈現客觀性，非選寫作若能正確使用被動，可有效提升文體成熟度。",
            "be made of／be made from／be made into 三者辨析：of 看得出原料、from 看不出原料、into 表製成品。"
          ]
        },
        {
          "heading": "11. 時態進階：過去完成、未來完成、完成進行式與時態一致",
          "body": "<p>基礎十二時態中，真正決勝負的是<strong>「完成式家族」</strong>。它們表達的不是單純的時間點，而是「兩個時間點之間的關係」。掌握時間軸畫法，這類題目就從記憶題變成推理題。</p>",
          "table": {
            "headers": [
              "時態",
              "結構與時間軸位置",
              "使用時機與例句"
            ],
            "rows": [
              [
                "現在完成式",
                "have／has ＋ p.p.；過去發生、延續或影響到現在",
                "訊號：already, yet, ever, never, just, so far, since, for｜The team has finished the survey."
              ],
              [
                "現在完成進行式",
                "have／has been ＋ V-ing；強調動作「一直持續」",
                "They have been working on the site since March.（強調持續與辛勞）"
              ],
              [
                "過去完成式",
                "had ＋ p.p.；「過去的過去」，比另一個過去動作更早",
                "When we arrived, the concrete had already set.（凝固在抵達之前）"
              ],
              [
                "過去完成進行式",
                "had been ＋ V-ing；在過去某時點之前持續進行",
                "He had been working for six hours before the inspection began."
              ],
              [
                "未來完成式",
                "will have ＋ p.p.；到未來某時點為止「已完成」",
                "By next June, the building will have been completed."
              ],
              [
                "未來完成進行式",
                "will have been ＋ V-ing；到未來某時點為止「持續了多久」",
                "By December, they will have been building it for two years."
              ],
              [
                "時態一致原則",
                "主要子句過去 → 附屬子句用過去或過去完成",
                "He said that he had finished the report.｜例外：不變的真理或現在習慣仍用現在式"
              ],
              [
                "過去完成的必要條件",
                "句中必須有「另一個過去動作」作為參照點",
                "只有一個過去動作時用簡單過去式即可，不需 had ＋ p.p."
              ]
            ]
          },
          "steps": [
            "畫時間軸是解完成式題目的最快方法：橫線上標出「過去、現在、未來」，再把句中兩個動作依先後放上去。",
            "過去完成式的判斷關鍵字：before, after, when, by the time, already, until then——但務必確認句中確實有兩個過去動作。",
            "by ＋ 未來時間 ＋ 未來完成式，是統測固定搭配：By 2030, the city will have reduced its carbon emissions by half.",
            "「持續性」語意用完成進行式，「完成度」語意用完成式：I have been reading the manual.（還在讀）／I have read the manual.（讀完了）。",
            "非選寫作檢查表：全篇時態是否一致？敘述過去事件時是否誤用現在式？這是最常見的整體性扣分。"
          ]
        },
        {
          "heading": "12. 比較句型進階：倍數、the 比較級句型與 no more than 家族",
          "body": "<p>比較級除了 -er／more 之外，還有一整套<strong>進階變化</strong>。這些句型在統測非選改寫與閱讀長句中頻繁出現，尤其倍數比較與「the 比較級, the 比較級」是年年可見的固定考點。</p>",
          "table": {
            "headers": [
              "句型",
              "結構公式",
              "例句與中譯"
            ],
            "rows": [
              [
                "倍數比較",
                "A is ＋ 倍數 ＋ as ＋ 原級 ＋ as B｜A is ＋ 倍數 ＋ 比較級 ＋ than B｜A is ＋ 倍數 ＋ the ＋ 名詞 ＋ of B",
                "This beam is three times as strong as that one.＝three times stronger than that one.＝three times the strength of that one."
              ],
              [
                "the 比較級, the 比較級",
                "The ＋ 比較級 ＋ S ＋ V, the ＋ 比較級 ＋ S ＋ V（愈…就愈…）",
                "The higher the building is, the stronger the foundation must be."
              ],
              [
                "比較級 ＋ and ＋ 比較級",
                "愈來愈…",
                "The weather is getting hotter and hotter.｜Construction costs are becoming more and more expensive."
              ],
              [
                "比較級 ＋ than any other ＋ 單數名詞",
                "最高級的比較級表達法",
                "Taipei 101 is taller than any other building in the city.＝the tallest building in the city."
              ],
              [
                "否定 ＋ 比較級 ＝ 最高級",
                "No other ＋ 單數名詞 ＋ V ＋ 比較級 ＋ than…",
                "No other material is more durable than steel.＝Steel is the most durable material."
              ],
              [
                "no more than 家族",
                "no more than＝only（只有）｜not more than＝at most（至多）｜no less than＝as much as（多達）｜not less than＝at least（至少）",
                "He has no more than 100 dollars.（只有 100 元）／not more than 100 dollars（最多 100 元）"
              ],
              [
                "修飾比較級的副詞",
                "much／far／a lot／even／still／by far ＋ 比較級（不可用 very）",
                "This design is far more efficient.（× very more efficient）"
              ],
              [
                "原級與比較的否定",
                "not as／so ＋ 原級 ＋ as（不如…）｜less ＋ 原級 ＋ than",
                "Wood is not as strong as steel.＝Wood is less strong than steel."
              ]
            ]
          },
          "steps": [
            "倍數句型的三種寫法可互換，非選改寫題常要求「用 as…as 改寫」或「用 the ＋ 名詞 ＋ of 改寫」。",
            "「the 比較級, the 比較級」句型中兩個 the 都不可省略，且兩個子句都必須完整（有主詞與動詞）。",
            "修飾比較級只能用 much／far／a lot／even／still／by far，絕不可用 very——這是統測固定送分兼陷阱題。",
            "no more than 與 not more than 只差一個字母，語意卻不同：no more than 帶有「才這麼少」的主觀語氣。",
            "最高級的三種等值寫法務必都能雙向轉換：最高級 ＝ 比較級 ＋ than any other ＝ No other ＋ 比較級 ＋ than。"
          ]
        },
        {
          "heading": "13. 助動詞完整系統：情態、義務、推測與習慣",
          "body": "<p>助動詞是英文中<strong>表達語氣與態度</strong>的工具。統測會話題與克漏字大量測驗「同一件事用不同助動詞說出來，語氣有何差別」。以下依「能力、義務、推測、習慣」四大功能整理完整系統。</p>\n\n[DIALOGUE_START:助動詞會話：義務強度的層級差異]\nSupervisor: You must wear a helmet inside the site. It is a legal requirement. | 在工地內你必須戴安全帽，這是法律規定。\nWorker: Should I also wear goggles? | 我也應該戴護目鏡嗎？\nSupervisor: You'd better, especially when cutting steel. | 最好要戴，尤其在切割鋼材的時候。\nWorker: Understood. I don't have to bring my own, right? | 了解。我不需要自備，對吧？\n[DIALOGUE_END]",
          "table": {
            "headers": [
              "功能",
              "助動詞與語氣強度",
              "用法與例句"
            ],
            "rows": [
              [
                "能力與可能",
                "can（能力／可能）＞ could（過去能力／委婉）｜be able to（強調實際做到）",
                "He can read blueprints.｜He was able to finish it on time.（實際完成）"
              ],
              [
                "義務（由強到弱）",
                "must（強制，主觀）＞ have to（客觀規定）＞ should／ought to（建議）＞ had better（強烈建議，含警告）",
                "You must wear a helmet.｜You have to submit it by Friday.｜You'd better check it again."
              ],
              [
                "否定義務的關鍵差異",
                "must not＝禁止｜don't have to＝不需要（無義務）",
                "You must not enter.（禁止進入）≠ You don't have to enter.（不必進入）"
              ],
              [
                "推測（現在）",
                "must be（一定是，肯定推測）｜may／might be（可能）｜can't be（不可能，否定推測）",
                "He must be the new supervisor.｜That can't be right."
              ],
              [
                "推測（過去）",
                "must have ＋ p.p.（一定曾）｜may／might have ＋ p.p.（可能曾）｜can't have ＋ p.p.（不可能曾）",
                "He must have left early.｜They can't have finished it already."
              ],
              [
                "後悔與責備（過去）",
                "should have ＋ p.p.（早該做卻沒做）｜shouldn't have ＋ p.p.（不該做卻做了）",
                "We should have double-checked the calculation."
              ],
              [
                "習慣與偏好",
                "used to ＋ V（過去習慣，現已不再）｜would ＋ V（過去反覆動作）｜be used to ＋ V-ing（習慣於）｜would rather ＋ V（寧願）",
                "He used to work in Taipei.｜I'm used to working overtime.｜I'd rather stay here."
              ],
              [
                "need 與 dare",
                "當一般動詞：need to V／dare to V｜當助動詞（多用於否定疑問）：need not V／dare not V",
                "You needn't worry.＝You don't need to worry."
              ]
            ]
          },
          "steps": [
            "must not（禁止）與 don't have to（不必）的差別是統測每年必考，兩者中文都可能翻成「不用」，但語意完全相反。",
            "助動詞 ＋ have ＋ p.p. 全部用來「對過去做推測或評價」，是高階文法的核心結構，務必成組記憶。",
            "used to ＋ 原形（過去習慣）與 be used to ＋ V-ing（習慣於）僅差一個 be 動詞，語意天差地別。",
            "would rather 後接原形；would rather ＋ S ＋ 過去式，表達與現在事實相反的願望：I would rather you didn't smoke here.",
            "會話題中助動詞常是判斷「語氣禮貌程度」的關鍵：Could you…? ＞ Would you…? ＞ Can you…? ＞ 祈使句。"
          ]
        },
        {
          "heading": "14. 動名詞與不定詞的語意差別及高頻慣用結構",
          "body": "<p>有一群動詞後面接 V-ing 或 to V <strong>語意完全不同</strong>——remember、forget、stop、try、regret、mean、go on。這是統測綜合測驗的固定命題點，也是許多學生反覆答錯的地方。判斷原則只有一句：<strong>V-ing 指向「已發生」，to V 指向「未發生」。</strong></p>",
          "table": {
            "headers": [
              "動詞",
              "＋ V-ing（已發生）",
              "＋ to V（未發生／將要）"
            ],
            "rows": [
              [
                "remember",
                "remember doing 記得「做過」了",
                "remember to do 記得「要去做」｜Remember to lock the gate.（還沒鎖）"
              ],
              [
                "forget",
                "forget doing 忘記「做過」了",
                "forget to do 忘記「要去做」｜I forgot to bring the drawings.（忘了帶）"
              ],
              [
                "stop",
                "stop doing 停止「正在做的事」",
                "stop to do 停下來「去做另一件事」｜He stopped to smoke.（停下來去抽菸）"
              ],
              [
                "try",
                "try doing 試著用某方法看看",
                "try to do 努力嘗試去做（可能做不到）｜Try to finish it today."
              ],
              [
                "regret",
                "regret doing 後悔「做過」",
                "regret to do 遺憾地「要去做」｜We regret to inform you that…"
              ],
              [
                "mean",
                "mean doing 意味著、代表",
                "mean to do 打算去做｜I didn't mean to hurt you."
              ],
              [
                "go on",
                "go on doing 繼續做「同一件事」",
                "go on to do 接著做「另一件事」"
              ],
              [
                "need／want／require",
                "need doing＝需要被…（主動形表被動）",
                "need to do 需要去做｜The roof needs repairing.＝needs to be repaired."
              ]
            ]
          },
          "steps": [
            "核心判準：V-ing 回頭看「已經發生的事」，to V 往前看「還沒發生的事」。畫一條時間箭頭即可秒判。",
            "只接動名詞的動詞（口訣 MEGAPFADS）：mind, enjoy, give up, avoid, practice, finish, admit, deny, suggest ＋ consider, keep, quit, risk, imagine。",
            "只接不定詞的動詞：want, hope, wish, decide, plan, agree, promise, refuse, expect, offer, manage, afford, pretend。",
            "動名詞高頻慣用結構：be worth ＋ V-ing｜can't help ＋ V-ing（忍不住）｜It's no use ＋ V-ing（做…沒用）｜have difficulty (in) ＋ V-ing｜spend time ＋ V-ing｜feel like ＋ V-ing。",
            "介系詞 to 後必接動名詞的清單務必背熟：look forward to、be used to、object to、be devoted to、lead to、contribute to、when it comes to。"
          ]
        }
      ],
      "practices": [
        {
          "question": "_____ the warning about the unstable soil, they would not have started excavating.[TTS:_____ the warning about the unstable soil, they would not have started excavating.]",
          "difficulty": "3",
          "steps": [
            "觀察主要子句動詞：would not have started[TTS:would not have started] (與過去事實相反)。",
            "推斷條件句需使用過去完成式 (If S + had + p.p.[TTS:If S + had + p.p.])。",
            "選項中若無 If[TTS:If]，則應選擇省略 If[TTS:If] 的倒裝句：Had + S + p.p.[TTS:Had + S + p.p.]。"
          ],
          "answer": "Had they received[TTS:Had they received]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "_____ completely destroyed by the earthquake, the bridge had to be rebuilt from scratch.[TTS:_____ completely destroyed by the earthquake, the bridge had to be rebuilt from scratch.]",
          "difficulty": "2",
          "steps": [
            "前後主詞皆為 the bridge[TTS:the bridge]，前半句為分詞構句。",
            "橋樑是「被摧毀」，故動詞需用被動 (Being + p.p.[TTS:Being + p.p.] 或直接用 p.p.[TTS:p.p.])。",
            "選擇過去分詞 Destroyed[TTS:Destroyed]。"
          ],
          "answer": "Destroyed[TTS:Destroyed]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "Seldom _____ such an innovative architectural design in this traditional neighborhood.[TTS:Seldom _____ such an innovative architectural design in this traditional neighborhood.]",
          "difficulty": "2",
          "steps": [
            "Seldom[TTS:Seldom] (很少) 為否定副詞，置於句首需倒裝。",
            "倒裝語序等同疑問句：助動詞 + 主詞 + 原形動詞。",
            "故選 do we see[TTS:do we see] 或 have we seen[TTS:have we seen]。"
          ],
          "answer": "have we seen[TTS:have we seen]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "It is essential that every worker _____ a hard hat on the construction site at all times.[TTS:It is essential that every worker _____ a hard hat on the construction site at all times.]",
          "difficulty": "2",
          "steps": [
            "句型為 It is essential that + S + (should) + VR[TTS:It is essential that + S + (should) + VR]。",
            "essential[TTS:essential] 表示「重要的、必要的」，後方 that[TTS:that] 子句動詞需用原形。",
            "every worker[TTS:every worker] 後直接接原形動詞 wear[TTS:wear]。"
          ],
          "answer": "wear[TTS:wear]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "The concrete did not set properly. The contractor _____ added too much water to the mix.[TTS:The concrete did not set properly. The contractor _____ added too much water to the mix.]",
          "difficulty": "3",
          "steps": [
            "第一句說明混凝土未正常凝固，為過去事實。",
            "第二句為對過去事實的肯定推測：「承包商必定是加了太多水」。",
            "對過去的肯定推測需用 must have + p.p.[TTS:must have + p.p.]。"
          ],
          "answer": "must have[TTS:must have]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "It was the newly imported crane _____ collapsed due to the strong winds yesterday.[TTS:It was the newly imported crane _____ collapsed due to the strong winds yesterday.]",
          "difficulty": "2",
          "steps": [
            "判斷句型：It was ... that ...[TTS:It was ... that ...] (強調句型)。",
            "原句為 The newly imported crane collapsed...[TTS:The newly imported crane collapsed...]。",
            "強調主詞 the newly imported crane[TTS:the newly imported crane]，後方需接 that[TTS:that] 或 which[TTS:which]。"
          ],
          "answer": "that[TTS:that]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "The foreman insisted that the scaffolding _____ before the inspection began.[TTS:The foreman insisted that the scaffolding _____ before the inspection began.]",
          "difficulty": "3",
          "steps": [
            "主要子句動詞為 insisted[TTS:insisted] (堅持)，後方 that[TTS:that] 子句需用 (should) + VR[TTS:(should) + VR]。",
            "主詞 the scaffolding[TTS:the scaffolding] (鷹架) 與動詞 secure[TTS:secure] (固定) 之間為被動關係。",
            "故需使用被動語態 (should) be secured[TTS:(should) be secured]。"
          ],
          "answer": "be secured[TTS:be secured]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "With the final blueprint _____ by the client, the team began the procurement process.[TTS:With the final blueprint _____ by the client, the team began the procurement process.]",
          "difficulty": "3",
          "steps": [
            "考點為 With[TTS:With] 伴隨狀態：With + O + OC[TTS:With + O + OC]。",
            "受詞 the final blueprint[TTS:the final blueprint] 與動詞 approve[TTS:approve] 之間為被動關係 (被核准)。",
            "受詞補語需用過去分詞 approved[TTS:approved]。"
          ],
          "answer": "approved[TTS:approved]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        }
      ],
      "step0Prerequisites": [
        "假設語氣基本時態與公式",
        "分詞構句主動 (V-ing) 與被動 (p.p.) 判斷",
        "助動詞與副詞在倒裝句中的位置"
      ]
    },
    {
      "slug": "workplace-communication",
      "title": "10. 職場溝通與工程商務",
      "desc": "本章節涵蓋工地現場溝通、設計簡報、材料詢價與商務 Email、RFI 釋疑單、工程驗收缺失單（snag list），以及跨文化工作倫理等商務與實務應用英文。",
      "status": "done",
      "gradeLevel": 12,
      "examHitRate": 3,
      "covered_question_ids": [],
      "fatalTraps": [
        {
          "wrongThinking": "在正式商務 Email 中使用過於口語化或非正式的縮寫與俚語。",
          "correctThinking": "商務溝通需保持專業、客觀與禮貌，避免使用 \"gonna\"、\"wanna\" 或過多驚嘆號。",
          "trapDescription": "統測職場英文題型強調職場專業溝通禮儀與合適的正式用語（如 request 代替 ask for，inform 代替 tell）。"
        }
      ],
      "eliteMentalModels": [
        {
          "technique": "商務 Email 四段式結構模型",
          "explanation": "目的句 (Purpose) → 細節背景 (Details) → 行動要求與期限 (Call to Action) → 專業禮貌結尾 (Closing)。"
        },
        {
          "technique": "專業溝通黃金 3C 原則",
          "explanation": "Clear (語意清晰明確)、Concise (簡明扼要不拖泥帶水)、Courteous (專業有禮)。"
        }
      ],
      "worked_examples": [
        {
          "question": "Your company needs to purchase 500 bags of Portland cement. Write the core sentence to inquire about the lead time[TTS:lead time] and price[TTS:price] in a formal email[TTS:formal email].[TTS:Your company needs to purchase 500 bags of Portland cement. Write the core sentence to inquire about the lead time[TTS:lead time] and price[TTS:price] in a formal email[TTS:formal email].] \n(A) Tell me the price[TTS:price] and when I can get 500 bags of cement.[TTS:Tell me the price[TTS:price] and when I can get 500 bags of cement.]\n(B) I would like to inquire about the price[TTS:price][TTS:inquire about the price[TTS:price]] and lead time[TTS:lead time] for 500 bags of Portland cement.[TTS:I would like to inquire about the price[TTS:price][TTS:inquire about the price[TTS:price]] and lead time[TTS:lead time] for 500 bags of Portland cement.]\n(C) Give me a quote for 500 cement now.[TTS:Give me a quote for 500 cement now.]\n(D) Do you have 500 bags of cement and how much?[TTS:Do you have 500 bags of cement and how much?]",
          "difficulty": "3",
          "steps": [
            "鎖定商務書信正式語體 (Formal Business Email)：商業採購情境中向供應商詢問產品報價與交貨期程時，應使用客氣委婉之助動詞片語「I would like to inquire about...」(我想向您詢問...)。",
            "核對關鍵採購要素：句意必須完整包含「500 bags of Portland cement」(500 包波特蘭水泥)、「price」(報價) 以及「lead time」(交貨前置期程)。",
            "選項商務禮儀與文法排除：(A)「Tell me...」與 (C)「Give me...」為祈使句命令語氣，極不禮貌；(D)「and how much?」為過度口語的破碎句；唯有 (B) 語氣得體、要素齊全且語法嚴謹，為最佳正式商務表達。"
          ],
          "answer": "(B) I would like to inquire about the price and lead time for 500 bags of Portland cement. [TTS:I would like to inquire about the price and lead time for 500 bags of Portland cement.] — 正式商務詢價與交期函件",
          "hints": [
            "正式商務電子郵件避免使用祈使命令句 (Tell me / Give me)",
            "注意是否完整包含水泥數量、價格 (price) 與交期 (lead time)"
          ],
          "commonMistake": "誤以為口語句型 (Give me a quote now) 也是合格的商務書信，忽略職場書寫重視的禮貌與專業規範。",
          "eliteShortcut": "商務詢價黃金句首：I would like to inquire about + [項目] + for [標的物]！"
        }
      ],
      "illustrations": [
        "context.webp",
        "mechanism.webp",
        "comparison.webp"
      ],
      "concepts": [
        {
          "heading": "1. 工地指令與安全通報對話",
          "body": "<p>在工地現場，<span className=\"text-blue-600 font-bold\">安全通報 (Safety Alerts[TTS:Safety Alerts])</span> 與 <span className=\"text-blue-600 font-bold\">進度報告 (Progress Reports[TTS:Progress Reports])</span> 是溝通的日常。必須使用簡明扼要的指令以確保安全與效率。</p>\n\n[DIALOGUE_START:工地無線電指令會話：豪雨現場緊急應變]\nSite Superintendent: Control tower, heavy rainfall is causing runoff into excavation pit B. | 管控中心，大雨正導致雨水沖刷流入 B 區開挖土坑。\nSafety Radio: Copy that. Evacuate all personnel from the pit and activate submersible pumps immediately. | 收到。立刻撤離坑內所有人員，並立即啟動沉水抽水泵。\nSite Superintendent: All workers are safe on the upper deck. Slope stability sensors remain normal. | 所有工人皆已安全撤至上層平台。邊坡穩定監測感測器目前顯示正常。\nSafety Radio: Stand by for further weather updates. Safety is our top priority. | 請待命隨時接收最新天氣動態。安全是我們的第一優先。\n[DIALOGUE_END]",
          "steps": [
            "Supervisor: \"Make sure everyone is wearing their hard hats and high-vis vest[TTS:high-vis vest]s.\"[TTS:Make sure everyone is wearing their hard hats and high-vis vest[TTS:high-vis vest]s.] (確保每個人都戴著安全帽並穿著反光背心。)",
            "Worker: \"Understood. The scaffolding on the east wing is secured.\"[TTS:Understood. The scaffolding on the east wing is secured.] (了解。東翼的鷹架已經固定好了。)",
            "Safety Officer: \"Caution! Heavy machinery operating. Keep clear of the loading zone.\"[TTS:Caution! Heavy machinery operating. Keep clear of the loading zone.] (注意！重型機具運作中。請遠離裝卸區。)"
          ],
          "table": {
            "headers": [
              "英文詞彙",
              "詞性",
              "中文意義",
              "例句"
            ],
            "rows": [
              [
                "hard hat[TTS:hard hat]",
                "n.",
                "安全帽",
                "Always wear your hard hat on site.[TTS:Always wear your hard hat on site.]"
              ],
              [
                "high-vis vest[TTS:high-vis vest]",
                "n.",
                "反光背心",
                "High-vis vests are mandatory.[TTS:High-vis vests are mandatory.]"
              ],
              [
                "scaffolding[TTS:scaffolding]",
                "n.",
                "鷹架",
                "The scaffolding needs to be inspected.[TTS:The scaffolding needs to be inspected.]"
              ],
              [
                "keep clear of[TTS:keep clear of]",
                "phr.",
                "遠離；避開",
                "Keep clear of the edge.[TTS:Keep clear of the edge.]"
              ]
            ]
          }
        },
        {
          "heading": "2. 設計簡報與客戶會議英文",
          "body": "<p>在向客戶進行 <span className=\"text-blue-600 font-bold\">設計簡報 (Design Presentations[TTS:Design Presentations])</span> 時，常需應對客戶的修改要求 (revision requests[TTS:revision requests])。使用 <span className=\"text-blue-600 font-bold\">委婉語 (Tactful language[TTS:Tactful language])</span> 能展現專業並維持良好關係。</p>\n\n[DIALOGUE_START:設計簡報會話：向市政評委會介紹綠建築方案]\nPrincipal Architect: Honorable committee members, our civic center design incorporates passive solar ventilation. | 各位評審委員好，我們的市民中心設計導入了被動式太陽能通風系統。\nReview Board Member: How does the green roof reduce urban heat island effects in summer? | 這座綠屋頂在夏季是如何減緩都市熱島效應的？\nPrincipal Architect: The native vegetation layer lowers surface temperature by up to eight degrees Celsius. | 原生植被層能有效降低表面溫度高達攝氏八度之多。\nReview Board Member: We are very impressed by the lifecycle energy savings calculations. | 我們對這份全生命週期的節能效益計算印象非常深刻。\n[DIALOGUE_END]",
          "steps": [
            "Architect: \"As you can see in this rendering, we propose a glass facade to maximize natural light.\"[TTS:As you can see in this rendering, we propose a glass facade to maximize natural light.] (如您在這張透視圖中所見，我們提議使用玻璃外牆以最大化自然光。)",
            "Client: \"It looks great, but could we perhaps enlarge the lobby area?\"[TTS:It looks great, but could we perhaps enlarge the lobby area?] (看起來很棒，但我們能不能把大廳區域擴大一點？)",
            "Architect: \"That's a valid point. We can certainly explore options to expand the footprint.\" (這是個很好的觀點。我們當然可以探討擴大佔地面積的選項。)"
          ],
          "table": {
            "headers": [
              "英文詞彙",
              "詞性",
              "中文意義",
              "例句"
            ],
            "rows": [
              [
                "rendering[TTS:rendering]",
                "n.",
                "透視圖；渲染圖",
                "The 3D rendering shows the final look.[TTS:The 3D rendering shows the final look.]"
              ],
              [
                "facade[TTS:facade]",
                "n.",
                "建築正面；外牆",
                "The building has a modern facade.[TTS:The building has a modern facade.]"
              ],
              [
                "revision[TTS:revision]",
                "n.",
                "修改",
                "The client requested several revisions.[TTS:The client requested several revisions.]"
              ],
              [
                "footprint[TTS:footprint]",
                "n.",
                "(建築物的)佔地面積",
                "We need to keep the footprint small.[TTS:We need to keep the footprint small.]"
              ]
            ]
          }
        },
        {
          "heading": "3. 材料詢價與供應商商務 Email",
          "body": "<p>在採購流程中，<span className=\"text-blue-600 font-bold\">詢價單 (Inquiries[TTS:Inquiries])</span> 是第一步。信件應清楚列出 <span className=\"text-blue-600 font-bold\">規格 (Specifications[TTS:Specifications])</span> 並詢問 <span className=\"text-blue-600 font-bold\">交期 (Lead time)</span>。</p>\n\n[DIALOGUE_START:商務電郵會話：兩千噸結構鋼材詢價談判]\nProcurement Manager: We are inquiring about bulk pricing for two thousand metric tons of structural H-beams. | 我們想詢問兩千公噸結構用 H 型鋼的大宗採購報價。\nSteel Mill Rep: We can offer a 12 percent discount with mill test certificates included. | 我們可以提供八八折優惠，並附上鋼廠出廠檢驗證明書。\nProcurement Manager: Can your logistics team guarantee staggered deliveries over six months? | 貴公司的物流團隊能保證在六個月內分批按時配送嗎？\nSteel Mill Rep: Yes, we will assign a dedicated logistics coordinator to your project. | 可以的，我們會為貴專案指派專屬的物流協調專員。\n[DIALOGUE_END]",
          "steps": [
            "Subject: Inquiry regarding steel rebar pricing and lead time[TTS:lead time]",
            "Dear Sales Team,\nI am writing to inquire about the pricing and availability of 10mm steel rebars.[TTS:Dear Sales Team,\nI am writing to inquire about the pricing and availability of 10mm steel rebars.]",
            "Could you please provide a quotation for 50 tons, including estimated lead time[TTS:lead time]s and delivery costs to our site in Taichung?",
            "I look forward to hearing from you soon.[TTS:I look forward to hearing from you soon.]"
          ],
          "table": {
            "headers": [
              "英文詞彙",
              "詞性",
              "中文意義",
              "例句"
            ],
            "rows": [
              [
                "inquire[TTS:inquire]",
                "v.",
                "詢問；調查",
                "I am calling to inquire about my order.[TTS:I am calling to inquire about my order.]"
              ],
              [
                "quotation[TTS:quotation]",
                "n.",
                "報價(單)",
                "Please send us a formal quotation.[TTS:Please send us a formal quotation.]"
              ],
              [
                "lead time[TTS:lead time]",
                "n.",
                "交期；前置時間",
                "The lead time[TTS:lead time] for this material is two weeks."
              ],
              [
                "specification[TTS:specification]",
                "n.",
                "規格",
                "Does the material meet the specifications?[TTS:Does the material meet the specifications?]"
              ]
            ]
          }
        },
        {
          "heading": "4. 工程驗收與缺失整改",
          "body": "<p>工程完工交接 (Handover[TTS:Handover]) 前，業主或監造會進行最終檢查 (Final inspection[TTS:Final inspection])，並列出需要修補的 <span className=\"text-blue-600 font-bold\">缺失清單 (Punch list[TTS:Punch list] / Snag list[TTS:Snag list])</span>。</p>\n\n[DIALOGUE_START:驗收與缺失整改會話：完工查驗缺失清單核對]\nClient Inspector: There are minor hairline cracks near the door frame in room 302. | 302 號房門框附近有細微的龜裂痕跡。\nGeneral Contractor: We have logged it onto the snag list and will patch and repaint within forty-eight hours. | 我們已經記錄在缺失改善清單 (snag list) 上，將在四十八小時內完成修補與重新粉刷。\nClient Inspector: All fire damper operational tests passed inspection with flying colors. | 所有的防火排煙閘門連動測試都以非常優異的成績全數通過檢驗。\nGeneral Contractor: We are preparing the final handover documentation for your sign-off. | 我們正在準備最終的竣工移交文件以供您簽署核可。\n[DIALOGUE_END]",
          "steps": [
            "Inspector: \"During the walk-through, we noticed some issues. The paint is peeling in the hallway.\"[TTS:During the walk-through, we noticed some issues. The paint is peeling in the hallway.] (在巡視時我們注意到一些問題。走廊的油漆在剝落。)",
            "Contractor: \"I'll add that to the punch list[TTS:punch list] right away.\" (我會立刻把它加入缺失清單。)",
            "Inspector: \"Also, the HVAC system needs to be tested again before the final handover.\"[TTS:Also, the HVAC system needs to be tested again before the final handover.] (此外，在最終點交前，空調系統需要再次測試。)"
          ],
          "table": {
            "headers": [
              "英文詞彙",
              "詞性",
              "中文意義",
              "例句"
            ],
            "rows": [
              [
                "punch list[TTS:punch list] (snag list)",
                "n.",
                "驗收缺失清單",
                "We must clear the punch list[TTS:punch list] before Friday.[TTS:We must clear the punch list[TTS:punch list] before Friday.]"
              ],
              [
                "handover[TTS:handover]",
                "n.",
                "點交；移交",
                "The project handover is scheduled for next week.[TTS:The project handover is scheduled for next week.]"
              ],
              [
                "inspection[TTS:inspection]",
                "n.",
                "檢查；視察",
                "The site passed the safety inspection.[TTS:The site passed the safety inspection.]"
              ],
              [
                "walk-through [TTS:walk-through]",
                "n.",
                "實地查勘；巡視",
                "Let's do a quick walk-through of the site. [TTS:Let's do a quick walk-through of the site.]"
              ]
            ]
          }
        },
        {
          "heading": "5. 商務書信常用句型",
          "body": "<p>掌握專業的 <span className=\"text-blue-600 font-bold\">商務書信句型</span>，能讓你的 Email 看起來更具說服力且得體。</p>\n\n[DIALOGUE_START:商務書信常用句型會話：款項與合約確認]\nFinance Officer: I am writing to confirm receipt of milestone payment invoice number 405. | 我寫信是為了確認已收到第 405 號里程碑付款發票。\nAccountant: Please find attached the bank wire confirmation slip for your accounting records. | 請參閱隨信附上的銀行電匯水單以供貴方會計入帳存查。\nFinance Officer: We look forward to continuing our successful partnership on phase two. | 我們期待在第二期工程中繼續保持順利的合作關係。\nAccountant: Thank you for your prompt payment and professional collaboration. | 感謝貴公司的即時付款與高度專業的協同合作。\n[DIALOGUE_END]",
          "steps": [
            "開場白：I am writing to...[TTS:I am writing to...] (我寫信是為了...) / With reference to your email...[TTS:With reference to your email...] (關於您的來信...)",
            "附件說明：Please find attached the revised drawings.[TTS:Please find attached the revised drawings.] (請見附件之修正圖說。)",
            "提出請求：I would appreciate it if you could...[TTS:I would appreciate it if you could...] (如果您能...我將感激不盡。)",
            "結尾敬語：Sincerely, / Best regards,[TTS:Sincerely, / Best regards,] (誠摯地 / 致上最誠摯的問候)"
          ],
          "table": {
            "headers": [
              "句型",
              "適用情境",
              "中文意義"
            ],
            "rows": [
              [
                "I am writing to + V...[TTS:I am writing to + V...]",
                "信件開頭",
                "我寫信是為了(做某事)"
              ],
              [
                "Please find attached...[TTS:Please find attached...]",
                "說明附件",
                "請見附件的..."
              ],
              [
                "I would appreciate it if...[TTS:I would appreciate it if...]",
                "委婉請求",
                "如果您能...我將非常感激"
              ],
              [
                "Should you have any questions...[TTS:Should you have any questions...]",
                "結尾",
                "如果您有任何問題..."
              ]
            ]
          }
        },
        {
          "heading": "6. 施工日誌與 RFI 表單英文",
          "body": "<p>工地管理中常需填寫 <span className=\"text-blue-600 font-bold\">施工日誌 (Daily Site Log[TTS:Daily Site Log])</span> 記錄進度，若圖說不清則需發出 <span className=\"text-blue-600 font-bold\">RFI (Request for Information[TTS:Request for Information], 釋疑單)</span> 向設計單位釐清，甚至可能導致 <span className=\"text-blue-600 font-bold\">變更設計 (Change Order[TTS:Change Order])</span>。</p>\n\n[DIALOGUE_START:施工日誌與 RFI 會話：標高衝突圖說澄清]\nField Engineer: We issued an RFI regarding the clash between the HVAC duct and structural beam. | 我們發布了一份資訊請求單 (RFI)，針對空調風管與結構梁的碰撞衝突進行澄清。\nConsultant: The MEP engineer will issue an updated elevation coordinate by noon. | 機電工程師會在今天中午前核發更新的高程座標圖。\nField Engineer: I have noted the inquiry in today's daily construction log. | 我已經在今天的施工日誌中將此項問題詳加記錄。\nConsultant: Prompt RFI resolution keeps site work running seamlessly. | 及時解決 RFI 請求能讓現場施工保持順暢不中斷。\n[DIALOGUE_END]",
          "steps": [
            "Daily Log Entry: \"Weather: Heavy rain. Concrete[TTS:Concrete] pouring delayed. Crew assigned to interior framing.\" (天氣：大雨。混凝土澆灌延遲。工班分配至室內隔間。)",
            "RFI Description: \"The structural drawings do not specify the rebar spacing for Column C4. Please clarify.\"[TTS:The structural drawings do not specify the rebar spacing for Column C4. Please clarify.] (結構圖未標明柱子 C4 的鋼筋間距。請釐清。)",
            "Architect's Response: \"Refer to revised detail drawing attached. A Change Order[TTS:Change Order] will be issued if material quantities increase.\" (參考附件更新的詳圖。若材料數量增加將發出變更設計單。)"
          ],
          "table": {
            "headers": [
              "英文詞彙",
              "詞性",
              "中文意義",
              "例句"
            ],
            "rows": [
              [
                "RFI (Request for Information[TTS:Request for Information])",
                "n.",
                "釋疑單",
                "Submit an RFI if the drawing is unclear.[TTS:Submit an RFI if the drawing is unclear.]"
              ],
              [
                "Change Order[TTS:Change Order]",
                "n.",
                "變更設計(單)",
                "The client approved the change order.[TTS:The client approved the change order.]"
              ],
              [
                "clarify[TTS:clarify]",
                "v.",
                "釐清；說明",
                "Could you clarify this point?[TTS:Could you clarify this point?]"
              ],
              [
                "specify[TTS:specify]",
                "v.",
                "具體指出；詳述",
                "The contract specifies the materials to be used.[TTS:The contract specifies the materials to be used.]"
              ]
            ]
          }
        },
        {
          "heading": "7. 跨文化工作倫理與國際禮儀",
          "body": "<p>在國際工程專案中，了解 <span className=\"text-blue-600 font-bold\">跨文化工作倫理 (Multicultural work ethics[TTS:Multicultural work ethics])</span> 與 <span className=\"text-blue-600 font-bold\">國際禮儀 (International etiquette[TTS:International etiquette])</span> 是建立信任的關鍵。應展現專業禮貌 (Professional courtesy[TTS:Professional courtesy]) 並尊重不同文化的溝通模式。</p>\n\n[DIALOGUE_START:跨文化國際禮儀會話：國際聯合承攬交流]\nProject Director: When collaborating with international partners, clear email etiquette and cultural respect are vital. | 與國際夥伴合作時，清晰的電子郵件禮儀與文化尊重非常關鍵。\nJunior Associate: I always use polite opening salutations and formal sign-offs in official letters. | 我在正式公文中一向使用禮貌的開頭稱謂與正式的結尾敬語。\nProject Director: Always confirm agreements in writing after international video conferences. | 跨國視訊會議結束後，務必以書面郵件再次確認雙方的決議與共識。\nJunior Associate: A written summary ensures mutual understanding across different time zones. | 書面會議摘要能確保不同時區的團隊建立一致的共識。\n[DIALOGUE_END]",
          "steps": [
            "Punctuality[TTS:Punctuality] (準時): 在多數國際商務場合，準時抵達會議是基本尊重。",
            "Direct[TTS:Direct] vs. Indirect[TTS:Indirect] Communication[TTS:Direct[TTS:Direct] vs. Indirect[TTS:Indirect] Communication]: 歐美文化多偏向直接溝通 (Direct[TTS:Direct])，而亞洲文化可能偏向間接委婉 (Indirect[TTS:Indirect])。了解差異有助減少衝突。",
            "Professional Courtesy (專業禮貌): 在信件中稱呼對方應使用適當頭銜 (Mr., Ms., Dr.)，直到對方示意可以直呼其名 (first-name basis[TTS:first-name basis])。"
          ],
          "table": {
            "headers": [
              "英文詞彙",
              "詞性",
              "中文意義",
              "例句"
            ],
            "rows": [
              [
                "ethics[TTS:ethics]",
                "n.",
                "倫理；道德規範",
                "Work ethics are highly valued here.[TTS:Work ethics are highly valued here.]"
              ],
              [
                "etiquette[TTS:etiquette]",
                "n.",
                "禮儀",
                "Business etiquette varies by country.[TTS:Business etiquette varies by country.]"
              ],
              [
                "punctuality",
                "n.",
                "準時",
                "Punctuality[TTS:Punctuality] is a sign of professionalism."
              ],
              [
                "courtesy[TTS:courtesy]",
                "n.",
                "禮貌",
                "It is a common courtesy to reply to emails promptly.[TTS:It is a common courtesy to reply to emails promptly.]"
              ]
            ]
          }
        },
        {
          "heading": "8. 電話英語與線上會議：聽不懂時怎麼辦",
          "body": "<p>電話與視訊會議是職場英語最困難的場景——沒有表情、沒有肢體語言，還常有雜訊。專業人士靠的不是「聽力超強」，而是一套<strong>確認與釐清的固定句型</strong>。這組句型同時是統測會話題的高頻取材。</p>\n\n[DIALOGUE_START:電話英語會話：轉接與留言]\nReceptionist: Good morning, Chang Construction. How may I help you? | 早安，這裡是長昌營造，有什麼能為您服務的嗎？\nCaller: Could I speak to Mr. Lin in the engineering department, please? | 可以請工程部的林先生聽電話嗎？\nReceptionist: I'm afraid he's in a meeting. Would you like to leave a message? | 恐怕他正在開會。您要留言嗎？\nCaller: Yes, please ask him to call me back at 0912-345-678. | 好的，請他回電到 0912-345-678。\n[DIALOGUE_END]",
          "table": {
            "headers": [
              "情境功能",
              "常用句型",
              "使用要點"
            ],
            "rows": [
              [
                "接聽與自報身分",
                "Good morning, ABC Company. How may I help you?｜This is Amy speaking.｜Amy speaking, how can I help?",
                "電話中自我介紹用 This is…，不用 I am…（統測經典考點）"
              ],
              [
                "要求轉接",
                "Could I speak to Mr. Lin, please?｜May I have extension 205?｜Could you put me through to the sales department?",
                "put sb. through to＝轉接給某人｜extension＝分機"
              ],
              [
                "請對方稍候",
                "Hold on a moment, please.｜Could you hold the line?｜I'll transfer you now.",
                "Hold on／Hold the line＝請稍候，不是「握住線」"
              ],
              [
                "對方不在",
                "I'm afraid he's not available right now.｜He's in a meeting at the moment.｜Would you like to leave a message?",
                "職場禮貌一律以 I'm afraid… 緩衝"
              ],
              [
                "留言與回電",
                "Could you ask him to call me back?｜Please tell him that…｜My number is…, that's ＋ 逐字複述",
                "電話號碼須逐位唸出並複述確認"
              ],
              [
                "聽不清楚時（關鍵）",
                "Sorry, could you repeat that?｜Could you speak a little more slowly, please?｜I'm sorry, I didn't catch that.｜The line is breaking up.",
                "絕不要假裝聽懂；主動要求重複是專業表現"
              ],
              [
                "確認與複述",
                "Let me make sure I've got that right…｜So you're saying that…｜Could you spell that for me?",
                "重述對方內容是避免誤解最有效的方法"
              ],
              [
                "線上會議",
                "Can you hear me?｜You're on mute.｜Could you share your screen?｜Let's go around the table.｜I'll follow up by email.",
                "on mute＝靜音中｜share screen＝分享畫面"
              ]
            ]
          },
          "steps": [
            "電話英語三大自保句：Could you repeat that?／Could you speak more slowly?／Could you spell that?——記熟這三句，任何場面都不會卡住。",
            "This is ＋ 姓名（電話中自我介紹）是英語固定用法，說 I am Amy 在電話情境中屬於錯誤選項。",
            "記錄留言時務必複述並確認五件事：來電者姓名、公司、事由、聯絡電話、回電時間。",
            "線上會議常見狀況句：You're on mute.（你被靜音了）與 The connection is unstable.（連線不穩）務必聽得懂。"
          ]
        },
        {
          "heading": "9. 職場 Email 寫作：格式、語氣分級與常見句型庫",
          "body": "<p>工程商務 Email 有極為固定的<strong>五段結構</strong>與三級語氣。掌握結構與語氣分級，即使英文不完美，寫出來的信也會顯得專業可靠。這也是統測應用文閱讀最常出現的文本形式。</p>",
          "table": {
            "headers": [
              "Email 結構段落",
              "功能與常用句型",
              "語氣分級（正式 → 中性 → 非正式）"
            ],
            "rows": [
              [
                "① 主旨 (Subject)",
                "簡短具體，含關鍵字與編號：Request for Revised Quotation – Project A12",
                "正式：Request for…｜中性：Question about…｜非正式：Quick question"
              ],
              [
                "② 稱謂 (Salutation)",
                "Dear Mr. Lin,／Dear Sir or Madam,／Hi Amy,",
                "正式：Dear Mr./Ms. ＋ 姓｜中性：Dear Amy｜非正式：Hi Amy"
              ],
              [
                "③ 開場 (Opening)",
                "I am writing to…｜I hope this email finds you well.｜Thank you for your email of May 5.",
                "正式：I am writing to inquire about…｜非正式：Just checking in about…"
              ],
              [
                "④ 主體 (Body)",
                "說明事由 → 提供細節 → 提出請求；一段一重點",
                "請求：I would appreciate it if you could…（正式）／Could you please…（中性）／Can you…（非正式）"
              ],
              [
                "⑤ 結尾與署名",
                "I look forward to your reply.｜Please let me know if you have any questions.｜Best regards, ＋ 姓名職稱",
                "正式：Yours sincerely／Yours faithfully｜中性：Best regards／Kind regards｜非正式：Best／Thanks"
              ],
              [
                "附件與副本",
                "Please find attached the revised drawings.｜I've cc'd Mr. Chen for reference.｜Please see the attachment.",
                "attachment 附件｜cc（副本）｜bcc（密件副本）｜forward 轉寄"
              ],
              [
                "催促與提醒",
                "I would like to follow up on my previous email.｜This is a gentle reminder that…｜We have not yet received…",
                "催促務必保持禮貌，避免直接指責"
              ],
              [
                "致歉與說明延誤",
                "I apologize for the delay in replying.｜We regret to inform you that the delivery has been postponed.｜Please accept our sincere apologies.",
                "壞消息一律用被動語態與 regret to inform 緩衝"
              ]
            ]
          },
          "steps": [
            "Email 黃金原則：一封信只講一件事，主旨要能讓收件人不用開信就知道內容。",
            "語氣分級的判斷依據是「對方是誰」：業主與外部客戶用正式、同部門同事用中性、熟識同事用非正式。",
            "Yours sincerely（知道對方姓名時）與 Yours faithfully（Dear Sir or Madam 開頭時）不可混用，這是正式書信的固定規則。",
            "Please find attached… 是英文商務信的固定說法，不要寫成 I attached the file to you。",
            "統測應用文閱讀常直接以 Email 出題，作答時先看主旨與署名，就能判斷寄件人身分與意圖。"
          ]
        },
        {
          "heading": "10. 工程契約與請款文件英文：條款、變更與付款",
          "body": "<p>合約英文有其獨特語體：<strong>大量使用 shall、被動語態與冗長的條件子句</strong>。看懂合約條款不只是英文能力，更是保護自己的專業能力。這組內容同時是專業英文延伸閱讀的高階素材。</p>",
          "table": {
            "headers": [
              "文件類型",
              "關鍵條款與欄位英文",
              "判讀要點"
            ],
            "rows": [
              [
                "合約主文",
                "Scope of Work 工作範圍｜Contract Sum 合約總價｜Commencement Date 開工日｜Completion Date 竣工日｜Term 期間",
                "先確認範圍與金額，再看時程與罰則"
              ],
              [
                "情態助動詞效力",
                "shall（強制義務）｜shall not（禁止）｜may（得，可選）｜should（宜，建議）｜is entitled to（有權）",
                "shall ＝ 法律上的「應」，效力最強；may ＝「得」，非強制"
              ],
              [
                "付款條款",
                "Payment Terms 付款條件｜Progress Payment 期中請款｜Retention 保留款｜Invoice 請款單｜net 30 days 30 天內付款",
                "retention（保留款）通常於保固期滿後返還"
              ],
              [
                "變更與展延",
                "Change Order 變更指示｜Variation Order 工程變更｜Extension of Time (EOT) 工期展延｜Claim 索賠",
                "變更須經書面核准，口頭指示無效"
              ],
              [
                "違約與罰則",
                "Breach of Contract 違約｜Liquidated Damages 違約金｜Penalty Clause 罰則條款｜Termination 終止",
                "liquidated damages 通常以「每延遲一日罰款若干」計算"
              ],
              [
                "不可抗力",
                "Force Majeure 不可抗力｜act of God 天災｜suspension 停工｜notify within X days 於 X 日內通知",
                "颱風地震屬不可抗力，但須於期限內書面通知才生效"
              ],
              [
                "保固與責任",
                "Defects Liability Period 保固期｜Warranty 保證｜Indemnity 賠償責任｜Insurance 保險",
                "保固期通常自竣工驗收合格日起算"
              ],
              [
                "爭議處理",
                "Dispute Resolution 爭議處理｜Negotiation 協商｜Mediation 調解｜Arbitration 仲裁｜Governing Law 準據法",
                "順序通常為協商 → 調解 → 仲裁 → 訴訟"
              ]
            ]
          },
          "steps": [
            "閱讀合約先抓三件事：做什麼（Scope）、多少錢（Sum）、何時完成（Dates），其餘條款圍繞這三者展開。",
            "shall／may／should 的效力差異是合約英文的核心，看錯一個字可能造成重大責任落差。",
            "所有工程變更務必取得書面 Change Order，英文實務上有一句名言：If it is not in writing, it did not happen.",
            "請款流程英文順序：submit an invoice → certification（監造簽證）→ payment（付款）→ retention release（保留款返還）。"
          ]
        },
        {
          "heading": "11. 工程簡報英文：結構模板與轉場訊號句",
          "body": "<p>設計簡報與技術報告是建築人的核心技能。英文簡報成功的關鍵不在字彙艱深，而在<strong>結構清楚與轉場明確</strong>——讓聽眾隨時知道「我們現在在哪裡、接下來要去哪裡」。</p>\n\n[DIALOGUE_START:簡報英文會話：開場與轉場]\nPresenter: Good afternoon. Today I'd like to walk you through our design concept. | 午安。今天我想帶各位了解我們的設計概念。\nClient: How long will the presentation take? | 簡報大概需要多久？\nPresenter: About fifteen minutes, and I'll take questions at the end. | 大約十五分鐘，最後會保留提問時間。\nClient: Great. Please go ahead. | 太好了，請開始吧。\n[DIALOGUE_END]",
          "table": {
            "headers": [
              "簡報段落",
              "功能與訊號句",
              "實務要點"
            ],
            "rows": [
              [
                "① 開場問候",
                "Good afternoon, everyone.｜Thank you for coming.｜My name is… and I'm the project architect.",
                "先自我介紹與職稱，建立可信度"
              ],
              [
                "② 說明主題與架構",
                "Today I'd like to walk you through…｜My presentation is divided into three parts.｜First… Second… Finally…",
                "先給地圖再走路，聽眾才不會迷路"
              ],
              [
                "③ 說明規則",
                "I'll take questions at the end.｜Please feel free to interrupt if anything is unclear.｜The presentation will take about 15 minutes.",
                "先講清楚提問時機可避免中斷"
              ],
              [
                "④ 段落轉場",
                "Let's move on to…｜Now, turning to…｜This brings me to my next point.｜Having looked at A, let's consider B.",
                "轉場句是簡報流暢度的關鍵"
              ],
              [
                "⑤ 指出圖表資料",
                "As you can see from this chart…｜The figures show that…｜Let me draw your attention to…",
                "指圖時務必說明「這張圖要證明什麼」"
              ],
              [
                "⑥ 強調重點",
                "The key point here is…｜I'd like to emphasize that…｜What's particularly important is…",
                "全場最多強調三個重點，多則失焦"
              ],
              [
                "⑦ 結論與建議",
                "To sum up…｜In conclusion…｜Based on our analysis, we recommend…｜The next step would be…",
                "結論必須回應開場提出的問題"
              ],
              [
                "⑧ 問答應對",
                "That's a good question.｜Let me get back to you on that.｜If I understood correctly, you're asking about…",
                "不確定時誠實說 Let me get back to you，勝過亂答"
              ]
            ]
          },
          "steps": [
            "簡報三段黃金法則：Tell them what you'll tell them（預告）→ Tell them（說明）→ Tell them what you told them（總結）。",
            "轉場句是聽眾唯一的導航工具，每換一個段落務必說一句 Let's move on to…／This brings me to…",
            "指圖說明的固定順序：先講圖表類型與座標 → 再指出趨勢 → 最後說明它的意義。",
            "問答時若沒聽懂，用 If I understood correctly, you're asking about… 複述確認，是專業且安全的做法。",
            "建築簡報常用語塊：design concept 設計概念｜site analysis 基地分析｜circulation 動線｜massing 量體｜façade 立面｜sustainability strategy 永續策略。"
          ]
        }
      ],
      "practices": [
        {
          "question": "In a formal email[TTS:formal email] to a supplier, which of the following is the most appropriate way to ask for a catalog?\n(A) Send me your catalog.\n(B) I would appreciate it if you could send me your catalog.\n(C) Give me the catalog as soon as possible.\n(D) I want your catalog now.",
          "difficulty": "2",
          "steps": [
            "分析語氣：正式商務 Email 中需要使用委婉的請求語氣。",
            "(A)、(C)、(D) 皆為命令句，語氣過於強硬。",
            "(B) \"I would appreciate it if you could...[TTS:I would appreciate it if you could...]\" 是標準的禮貌請求句型。"
          ],
          "answer": "(B) I would appreciate it if you could send me your catalog.",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "Before the final ______, the contractor must fix all the defects listed on the punch list[TTS:punch list].[TTS:Before the final ______, the contractor must fix all the defects listed on the punch list[TTS:punch list].]\n(A) handover[TTS:handover]\n(B) foundation[TTS:foundation]\n(C) scaffold[TTS:scaffold]\n(D) cement[TTS:cement]",
          "difficulty": "2",
          "steps": [
            "分析題意：在最終的 ______ 之前，承包商必須修復 punch list[TTS:punch list] 上的所有缺失。",
            "punch list[TTS:punch list] (缺失清單) 是在工程完工「移交」前要處理的。",
            "(A) handover (點交/移交) 符合句意。"
          ],
          "answer": "(A) handover[TTS:handover]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "If the blueprints are unclear, the site engineer should submit an ______ to the architect for clarification[TTS:clarification].[TTS:If the blueprints are unclear, the site engineer should submit an ______ to the architect for clarification[TTS:clarification].]\n(A) HVAC[TTS:HVAC]\n(B) RFI[TTS:RFI]\n(C) PPE[TTS:PPE]\n(D) OSB[TTS:OSB]",
          "difficulty": "3",
          "steps": [
            "分析題意：如果藍圖不清楚，現場工程師應提交一份 ______ 給建築師以求釐清 (clarification[TTS:clarification])。",
            "(A) HVAC (空調系統), (B) RFI (釋疑單), (C) PPE (個人防護裝備), (D) OSB (定向纖維板)。",
            "為了解決圖說不清的問題，應提交 RFI (Request for Information[TTS:Request for Information])。"
          ],
          "answer": "(B) RFI[TTS:RFI]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "Please find ______ the revised layout plan for the ground floor.[TTS:Please find ______ the revised layout plan for the ground floor.]\n(A) attach[TTS:attach]\n(B) attached[TTS:attached]\n(C) attaching[TTS:attaching]\n(D) to attach[TTS:to attach]",
          "difficulty": "2",
          "steps": [
            "這題考查商務信件常見句型 \"Please find attached + 名詞\"[TTS:Please find attached] (請見附件的...)。",
            "attached 作為過去分詞，表示「被附上的」。",
            "因此正確答案為 (B) attached。"
          ],
          "answer": "(B) attached[TTS:attached]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "The client wants to alter the design. We need to issue a ______ to adjust the project budget and timeline.\n(A) Change Order[TTS:Change Order]\n(B) hard hat\n(C) facade\n(D) footprint",
          "difficulty": "3",
          "steps": [
            "題意：客戶想要更改設計。我們需要發出一份 ______ 來調整專案預算和時程。",
            "當設計變更牽涉到成本或時程改變時，必須發出變更設計單。",
            "(A) Change Order[TTS:Change Order] (變更設計單) 符合題意。"
          ],
          "answer": "(A) Change Order[TTS:Change Order]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "Which of the following items is usually mandatory for jobsite safety?[TTS:Which of the following items is usually mandatory for jobsite safety?]\n(A) A smart watch[TTS:A smart watch]\n(B) A high-vis vest[TTS:high-vis vest][TTS:A high-vis vest[TTS:high-vis vest]]\n(C) A business suit[TTS:A business suit]\n(D) A tie[TTS:A tie]",
          "difficulty": "1",
          "steps": [
            "題意：下列哪一項通常是工地安全強制要求的？",
            "(A) 智慧手錶 (B) 反光背心 (C) 西裝 (D) 領帶",
            "在工地現場，high-vis vest[TTS:high-vis vest] (反光背心) 是必備的安全裝備。"
          ],
          "answer": "(B) A high-vis vest[TTS:high-vis vest][TTS:A high-vis vest[TTS:high-vis vest]]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "During a meeting, acknowledging a client's suggestion by saying \"That's a valid point\" is an example of ______.\n(A) ignoring the client\n(B) professional courtesy[TTS:professional courtesy]\n(C) safety hazard\n(D) changing the order",
          "difficulty": "3",
          "steps": [
            "題意：在會議中，以「這是個很好的觀點」來認可客戶的建議，是 ______ 的一個例子。",
            "(A) 忽略客戶, (B) 專業禮貌, (C) 安全隱患, (D) 變更訂單",
            "這是一種展現溝通技巧與專業禮貌 (professional courtesy[TTS:professional courtesy]) 的表現。"
          ],
          "answer": "(B) professional courtesy[TTS:professional courtesy]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "We need to check the exact ______ of the new generator to ensure it fits in the mechanical room.\n(A) lead time[TTS:lead time]\n(B) dimensions[TTS:dimensions]\n(C) quotations\n(D) etiquettes",
          "difficulty": "3",
          "steps": [
            "題意：我們需要檢查新發電機的確切 ______，以確保它放得進機房。",
            "(A) 交期, (B) 尺寸/大小, (C) 報價單, (D) 禮儀",
            "要確定設備是否放得下，需要確認其 dimensions[TTS:dimensions] (尺寸)。"
          ],
          "answer": "(B) dimensions[TTS:dimensions]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        }
      ],
      "step0Prerequisites": [
        "商務書信基本格式 (稱謂 Salutation、本文 Body、結尾敬語 Sign-off)",
        "正式與非正式語氣 (Formal vs Informal Register) 區分",
        "工程與商務常見溝通術語 (RFI, Quotation, Invoice, Specification)"
      ]
    },
    {
      "slug": "reading-advanced",
      "title": "11. 高階閱讀與多文本分析",
      "desc": "about advanced reading comprehension, multi-text synthesis, author's purpose/tone inference, SDGs topics, speed reading strategies",
      "status": "done",
      "gradeLevel": 12,
      "examHitRate": 4,
      "fatalTraps": [
        {
          "wrongThinking": "混淆客觀事實描述與作者主觀語氣態度（如諷刺 sarcastic、贊同 approving、擔憂 concerned）。",
          "correctThinking": "透過作者使用的形容詞、副詞與情態助動詞（如 unfortunately, surprisingly, should）來推論其真實態度立場。",
          "trapDescription": "統測高階閱讀常考「作者態度題」，需特別留意帶有感情色彩的關鍵形容詞。"
        }
      ],
      "eliteMentalModels": [
        {
          "technique": "多文本矩陣對照模型",
          "explanation": "遇到跨文本閱讀題時，快速建立心智矩陣：文本 A 的論點、文本 B 的論點、兩者的共同點與分歧點。"
        },
        {
          "technique": "批判性閱讀透視鏡 (Critical Reading Lens)",
          "explanation": "邊讀邊抓：誰在說話？論點為何？提供了什麼證據？是否有過度推論？"
        }
      ],
      "covered_question_ids": [],
      "worked_examples": [
        {
          "question": "Read the following passage and answer the question.[TTS:Read the following passage and answer the question.]\n\nSustainable architecture is no longer just a trend; it is an absolute necessity. While some developers still prioritize short-term cost savings over long-term environmental benefits, the devastating impacts of climate change leave us with no other choice. Incorporating green roofs, solar energy, and sustainable materials into building designs is the only responsible path forward for the construction industry.[TTS:Sustainable architecture is no longer just a trend; it is an absolute necessity. While some developers still prioritize short-term cost savings over long-term environmental benefits, the devastating impacts of climate change leave us with no other choice. Incorporating green roofs, solar energy, and sustainable materials into building designs is the only responsible path forward for the construction industry.]\n\nWhat is the author's main purpose in this passage?[TTS:What is the author's main purpose in this passage?]",
          "difficulty": "3",
          "steps": [
            "第一步：分析題目，找出關鍵字「main purpose[TTS:main purpose]」(主要目的)。",
            "第二步：尋找文章中的強烈語氣詞或主觀表達。作者使用了「absolute necessity[TTS:absolute necessity]」(絕對必要)、「no other choice[TTS:no other choice]」(別無選擇)。",
            "第三步：判斷作者立場。這些詞彙顯示作者強烈支持綠建築，並批評重視短期利益的開發商，屬於主觀且帶有批判與呼籲性質的語氣。",
            "第四步：對應選項。作者的目的是為了說服(persuade[TTS:persuade])建築業必須採用永續建築設計。"
          ],
          "answer": "(C) To argue that the construction industry must adopt sustainable building practices.[TTS:(C) To argue that the construction industry must adopt sustainable building practices.]",
          "hints": [
            "仔細分析句子主詞、動詞與受詞結構",
            "根據上下文語境與關鍵字線索判斷最適選項"
          ],
          "commonMistake": "容易受外觀相似的單字或字面直譯干擾，未完整分析句子文法功能。",
          "eliteShortcut": "文法結構分析法：先確認空格所缺詞性與句法功能，快速排除不符選項，秒殺破題！"
        }
      ],
      "illustrations": [
        "context.webp",
        "mechanism.webp",
        "comparison.webp"
      ],
      "concepts": [
        {
          "heading": "長篇閱讀速讀法 Speed Reading[TTS:Speed Reading]",
          "body": "統測英文的閱讀測驗篇幅較長，掌握<span className=\"text-rose-600 font-bold\">速讀(Skimming[TTS:Skimming])</span>與<span className=\"text-blue-600 font-bold\">掃讀(Scanning[TTS:Scanning])</span>技巧是拿高分的關鍵。不必逐字閱讀，重點在於計時策略與段落首末句快速掃描。\n\n[DIALOGUE_START:長篇閱讀速讀會話：技術文獻高效掃描]\nGraduate Student: How do you read a ten-page technical report on seismic retrofitting so rapidly? | 你是如何如此快速讀完一份長達十頁的耐震補強技術報告？\nSenior Researcher: I read the executive summary first, scan chart captions, and focus on concluding recommendations. | 我先讀執行摘要，掃描圖表圖說，並專注於結論中的具體建議。\nGraduate Student: That saves hours while capturing the core engineering methodology! | 這樣能在掌握核心工程方法的同時省下好幾個小時！\nSenior Researcher: Selective reading is the hallmark of an efficient engineer. | 有選擇性地閱讀是高效工程師的重要標誌。\n[DIALOGUE_END]",
          "steps": [
            "1. 先看文章標題與第一段，掌握文章主題。",
            "2. 快速掃描每一段的第一句(主題句)與最後一句(結論句)。",
            "3. 圈出轉折詞(However[TTS:However], Therefore[TTS:Therefore])，這些地方常是考點。",
            "4. 答題時間分配：一組閱讀測驗(含題目)建議控制在5-7分鐘內。"
          ],
          "table": {
            "headers": [
              "閱讀策略",
              "適用題型",
              "執行重點"
            ],
            "rows": [
              [
                "Skimming [TTS:Skimming] (略讀)",
                "主旨題 (Main Idea[TTS:Main Idea])",
                "快速掃過文章，只抓大意，忽略細節。"
              ],
              [
                "Scanning [TTS:Scanning] (掃讀)",
                "細節題 (Details[TTS:Details])",
                "帶著題目的關鍵字，在文章中快速尋找目標資訊。"
              ]
            ]
          }
        },
        {
          "heading": "多文本整合與交叉比對",
          "body": "多文本(Multi-texts[TTS:Multi-texts])是近年常考題型，通常包含Email[TTS:Email] + 公告 + 圖表同時出現的複合題型。測驗重點在於考生能否<span className=\"text-amber-600 font-bold\">整合不同來源的資訊</span>。\n\n[DIALOGUE_START:多文本整合會話：設計規範與環境評估比對]\nEnvironmental Planner: Document A outlines zoning restrictions, while Document B assesses wetland biodiversity. | 文件 A 概述了土地分區管制，而文件 B 則評估了濕地生物多樣性。\nCivil Engineer: We must synthesize both documents to determine the permissible building footprint. | 我們必須綜合兩份文件來決定合法的建築基地容許建蔽面積。\nEnvironmental Planner: The storm water retention basin must be relocated away from the protected mangrove zone. | 雨水滯洪池必須遷移遠離受保護的紅樹林生態區。\nCivil Engineer: We will update the master site layout to comply with both regulations. | 我們會更新總體配置圖以同時符合兩項法規標準。\n[DIALOGUE_END]",
          "steps": [
            "1. 快速瀏覽所有文本的標題或發信人/收信人，了解各文本的性質與關聯。",
            "2. 先讀題目，確認需要從哪些文本中尋找答案。",
            "3. 遇到需要交叉比對的題目，分別在兩處做記號。",
            "4. 注意圖表中的星號(*)或備註，通常隱藏著解題關鍵。"
          ]
        },
        {
          "heading": "作者語氣與立場推論",
          "body": "判斷作者的Tone[TTS:Tone](語氣)與立場(Attitude[TTS:Attitude])屬於進階題型。關鍵在於辨識文章中的<span className=\"text-indigo-600 font-bold\">形容詞、副詞與情態助動詞</span>，藉此推敲言外之意。\n\n[DIALOGUE_START:作者立場推論會話：評論文章語氣分析]\nProfessor: What tone does the author adopt regarding rapid urban development in heritage districts? | 作者對於歷史街區快速的都市開發採取什麼樣的語氣？\nStudent: The author uses words like \"shortsighted\" and \"irreversible loss\", showing a critical tone. | 作者使用了 shortsighted (短視) 與 irreversible loss (不可逆的損失)，表現出批判審慎的語氣。\nProfessor: Spotting adjective choices reveals whether the stance is objective, enthusiastic, or skeptical. | 觀察形容詞的選用能揭示立場是客觀、熱情支持還是持懷疑態度。\nStudent: Tone analysis unlocks deeper reading comprehension scores. | 掌握語氣分析是破解高階閱讀理解題目的關鍵。\n[DIALOGUE_END]",
          "steps": [
            "1. 客觀(Objective[TTS:Objective])：多使用事實陳述、數據支持，不帶個人情感。",
            "2. 批判(Critical[TTS:Critical])：使用負面形容詞，指出問題或缺點。",
            "3. 幽默/諷刺(Humorous/Sarcastic[TTS:Humorous/Sarcastic])：言詞誇張，或正話反說。",
            "4. 樂觀/熱情(Optimistic/Enthusiastic[TTS:Optimistic/Enthusiastic])：使用正面、鼓勵性的詞彙。"
          ],
          "table": {
            "headers": [
              "語氣類型",
              "常見單字",
              "文本特徵"
            ],
            "rows": [
              [
                "Objective[TTS:Objective]",
                "factual[TTS:factual], neutral[TTS:neutral]",
                "陳述事實，沒有主觀形容詞"
              ],
              [
                "Critical[TTS:Critical]",
                "critical[TTS:critical], negative[TTS:negative]",
                "指出缺陷，強烈質疑"
              ],
              [
                "Enthusiastic[TTS:Enthusiastic]",
                "optimistic[TTS:optimistic], positive[TTS:positive]",
                "充滿熱情，高度肯定"
              ]
            ]
          }
        },
        {
          "heading": "SDGs 永續議題閱讀",
          "body": "聯合國永續發展目標(SDGs[TTS:SDGs])是熱門考題，特別是與土木建築相關的<span className=\"text-emerald-600 font-bold\">氣候變遷(Climate Change[TTS:Climate Change])</span>、海洋生態、零廢棄與<span className=\"text-emerald-600 font-bold\">綠建築(Green Building[TTS:Green Building])</span>。\n\n[DIALOGUE_START:SDGs 永續議題會話：淨零碳建築策略]\nSustainability Officer: Our latest article explores how mass timber construction aligns with UN SDG 13 on Climate Action. | 我們最新的文章探討了大型木構造如何對齊聯合國永續發展目標 SDG 13 氣候行動。\nBuilding Developer: By sequestering carbon in timber beams, the embodied carbon drops by forty percent. | 透過將碳封存在木梁結構中，建築的蘊含碳足跡降低了百分之四十。\nSustainability Officer: Moreover, circular economy principles ensure all components can be disassembled and reused. | 此外，循環經濟原則確保所有構件在未來皆可拆解並重複利用。\nBuilding Developer: Sustainable engineering transforms real estate for the future. | 永續工程正在為未來徹底重塑房地產與營造產業。\n[DIALOGUE_END]",
          "steps": [
            "1. 掌握核心單字：sustainable[TTS:sustainable](永續的)、eco-friendly[TTS:eco-friendly](環保的)、emission[TTS:emission](排放)。",
            "2. 了解常見概念：碳足跡(carbon footprint[TTS:carbon footprint])、零廢棄(zero waste[TTS:zero waste])、綠色建材。",
            "3. 閱讀此類文章時，注意作者提出的問題與解決方案。"
          ]
        },
        {
          "heading": "科技與公共衛生議題",
          "body": "科技發展(如人工智慧、資訊安全)與公共衛生常結合建築科技如BIM/IoT[TTS:BIM/IoT]考出跨領域文章。測驗學生對<span className=\"text-blue-500 font-bold\">專有名詞</span>的上下文推敲能力。\n\n[DIALOGUE_START:科技與健康會話：BIM 與室內空氣品質監控]\nHVAC Specialist: This technical brief details how IoT sensors communicate with our BIM model. | 這份技術簡報詳細說明了物聯網感測器如何與我們的 BIM 模型即時通訊。\nFacility Manager: When indoor carbon dioxide levels exceed 800 ppm, fresh air dampers open automatically. | 當室內二氧化碳濃度超過 800 ppm 時，外氣風門會自動開啟換氣。\nHVAC Specialist: Smart ventilation promotes student health while optimizing chiller energy efficiency. | 智慧通風在守護學生健康的同時，也能最佳化冰水主機的能源效率。\nFacility Manager: Technology and wellness merge seamlessly in modern education buildings. | 科技與健康福祉在現代教育建築中實現了無縫融合。\n[DIALOGUE_END]",
          "steps": [
            "1. 不要被專有名詞嚇到，文章通常會在後方使用同位語解釋。",
            "2. 關注科技帶來的優勢(Advantages[TTS:Advantages])與挑戰(Challenges[TTS:Challenges])。",
            "3. 結合土木群背景，留意科技如何應用於結構安全與居住品質。"
          ]
        },
        {
          "heading": "事實 vs 觀點區辨",
          "body": "在長篇閱讀中，區分<span className=\"text-amber-500 font-bold\">Fact[TTS:Fact](事實)</span>與<span className=\"text-purple-500 font-bold\">Opinion[TTS:Opinion](觀點)</span>是基礎。形容詞與情態助動詞常是觀點的線索。\n\n[DIALOGUE_START:事實與觀點區辨會話：廠商宣傳與檢驗數據]\nMaterials Inspector: The brochure claims this insulation is \"the greatest thermal barrier on earth\". | 廠商型錄宣稱這種保溫材料是「地表最強隔熱防護層」。\nLab Director: That is marketing opinion. The verified fact is its thermal conductivity R-value of 4.5 per inch. | 那是行銷宣傳觀點。經實驗室驗證的事實是其熱阻 R 值為每英吋 4.5。\nMaterials Inspector: Engineers rely strictly on quantitative test certificates, never subjective claims. | 工程師嚴格依賴量化檢驗證明書，絕不盲從主觀宣傳。\nLab Director: Objective data protects public safety and professional integrity. | 客觀數據守護公共安全與工程師的專業誠信。\n[DIALOGUE_END]",
          "steps": [
            "1. 事實(Fact[TTS:Fact])：包含具體時間、地點、數據。(例如：The Taipei 101 is 508 meters tall.[TTS:The Taipei 101 is 508 meters tall.])",
            "2. 觀點(Opinion[TTS:Opinion])：包含形容詞(beautiful[TTS:beautiful], terrible[TTS:terrible])、情態助動詞(should[TTS:should], must[TTS:must])。",
            "3. 考題常問「Which of the following is an opinion, NOT a fact?[TTS:Which of the following is an opinion, NOT a fact?]」，需仔細辨識。"
          ]
        },
        {
          "heading": "統測進階閱讀實戰演練",
          "body": "結合上述技巧進行完整模擬題練習與解題步驟拆解。在作答時，請嚴格控制時間，<span className=\"text-rose-600 font-bold\">避免在單一題目卡關</span>。\n\n[DIALOGUE_START:統測進階解題實戰會話：複合題型全面破題]\nTutor: When answering multi-paragraph questions, verify each answer choice against specific lines. | 回答多段落題組時，務必將每個選項與特定行數的內文進行逐一核對。\nStudent: I underline line references in the text to prove why options A, B, and C are incorrect. | 我在內文中畫底線標註行號，以證明為什麼選項 A、B、C 是錯誤的。\nTutor: That evidence-based elimination method guarantees 100 percent accuracy. | 這種基於證據的排除法能保證百分之百的答題正確率。\nStudent: I am ready to conquer the hardest reading passages on the Unified Exam! | 我已經準備好征服統測英文中最具挑戰性的長篇閱讀題了！\n[DIALOGUE_END]",
          "steps": [
            "1. 拿到題目先花5秒看文章標題與排版，判斷文章類型。",
            "2. 讀題目，圈出題目關鍵字。",
            "3. 帶關鍵字回文章找答案(Scanning[TTS:Scanning])。",
            "4. 遇到主旨題或推論題，需綜合各段首尾句判斷。"
          ]
        },
        {
          "heading": "8. 議論文論證鏈解構：立場、論據與反駁的三層結構",
          "body": "<p>統測長篇閱讀的高難度題組多為議論文。這類文章的骨架是<strong>「立場 → 論據 → 反駁 → 再主張」</strong>的論證鏈。看懂論證鏈，作者態度題與推論題就能直接命中。</p>",
          "table": {
            "headers": [
              "論證環節",
              "訊號詞與位置",
              "常見命題與解法"
            ],
            "rows": [
              [
                "① 立場主張 (Thesis)",
                "多在首段末句或次段首句；訊號 I believe／It is argued that／The main problem is",
                "考「本文主旨為何」→ 直接引用立場句的改寫"
              ],
              [
                "② 支持論據 (Support)",
                "訊號 First／Second／For example／According to／Research shows",
                "考「作者用什麼支持論點」→ 找數據、專家或實例"
              ],
              [
                "③ 讓步 (Concession)",
                "訊號 Admittedly／It is true that／Of course／While it may be…",
                "陷阱：讓步段的內容常被誤認為作者立場，其實是「對方觀點」"
              ],
              [
                "④ 反駁 (Rebuttal)",
                "訊號 However／Nevertheless／Yet／On the contrary／But the fact is",
                "轉折詞之後才是作者真正立場，這是最高頻命題點"
              ],
              [
                "⑤ 再主張與呼籲 (Restatement)",
                "訊號 In conclusion／Therefore／We should／It is time to",
                "考「作者建議為何」→ 末段祈使句或 should 句"
              ],
              [
                "作者態度判斷",
                "形容詞與副詞的褒貶色彩：alarming／promising／questionable／remarkable",
                "態度題選項常為 critical（批判）／supportive（支持）／neutral（中立）／skeptical（懷疑）"
              ],
              [
                "語氣強度判斷",
                "must／certainly（強）｜may／might／seem to（弱）｜tend to／in general（保守）",
                "作者用詞保守 → 態度題不可選過度絕對的選項"
              ],
              [
                "論證漏洞辨識（素養題）",
                "以偏概全、因果倒置、訴諸權威、假兩難",
                "近年素養題會問「作者論證的弱點為何」"
              ]
            ]
          },
          "steps": [
            "讀議論文時，在每一個 However／But／Nevertheless 旁邊畫星號——作者的真正立場 80% 出現在轉折詞之後。",
            "讓步段落（Admittedly…／It is true that…）是命題委員最愛設計的陷阱：那是「對方的觀點」，不是作者的主張。",
            "作者態度題的安全原則：作者若用了保守詞（may, tend to, some），態度就不會是 strongly opposed 這類極端選項。",
            "讀完全文後用一句話總結：「作者認為 ______，因為 ______。」能填出來就代表真正讀懂了。"
          ]
        },
        {
          "heading": "9. 言外之意與推論題：從字面到弦外之音",
          "body": "<p>推論題（inference）問的是<strong>「文中沒有直說、但可以合理推出」</strong>的內容。它與「過度推論」只有一線之隔，界線就在於：推論必須有文本依據，而非現實常識。</p>",
          "table": {
            "headers": [
              "推論線索",
              "文本表現",
              "可推論 vs 過度推論"
            ],
            "rows": [
              [
                "語氣詞暗示",
                "unfortunately／surprisingly／ironically／sadly",
                "可推論：作者對此持負面評價｜過度推論：作者反對整個政策"
              ],
              [
                "對比暗示",
                "Unlike A, B…／While A…, B…",
                "可推論：A 與 B 在該面向相反｜過度推論：作者偏好 B"
              ],
              [
                "因果暗示",
                "led to／resulted in／due to／as a consequence",
                "可推論：兩者有因果關係｜過度推論：這是唯一原因"
              ],
              [
                "數據暗示",
                "only 12% agreed／nearly doubled／fell sharply",
                "可推論：多數人不同意｜過度推論：所有人都反對"
              ],
              [
                "假設語氣暗示",
                "If we had acted earlier…／Had they known…",
                "可推論：實際上並未及早行動｜過度推論：他們故意拖延"
              ],
              [
                "省略與留白",
                "作者提出問題但未給答案",
                "可推論：作者認為問題尚未解決｜過度推論：作者已有明確方案"
              ],
              [
                "身分與場景暗示",
                "The patient asked about the dosage.",
                "可推論：對話發生在醫療場合｜過度推論：說話者是醫生本人"
              ],
              [
                "情緒動詞暗示",
                "complained／praised／warned／admitted",
                "可推論：說話者的立場傾向｜過度推論：對方接受了該立場"
              ]
            ]
          },
          "steps": [
            "推論題三步驟：① 找出題目關鍵字對應的原文句 ② 問「這句話還隱含了什麼？」 ③ 檢查選項是否「只多推一小步」。",
            "安全原則：正確的推論選項通常只比原文多推「半步」；推得太遠、太絕對的一定是錯誤選項。",
            "選項中出現 all／never／only／must／the best／completely 等絕對詞時，正確率極低，除非原文明確支持。",
            "推論題與細節題的差別：細節題答案「抄得到」，推論題答案「抄不到但推得出」——判斷錯題型會找錯方向。"
          ]
        },
        {
          "heading": "10. 修辭與比喻語言辨識：字面之外的表達",
          "body": "<p>素養導向文本常使用<strong>比喻與修辭</strong>來增強說服力。這在字義推測題（What does ... mean in line X?）中是固定考點。認得修辭手法，就不會被字面意思誤導。</p>",
          "table": {
            "headers": [
              "修辭手法",
              "特徵與辨識線索",
              "實例與解讀"
            ],
            "rows": [
              [
                "明喻 (Simile)",
                "含 like／as…as，直接比較兩個不同事物",
                "The steel frame is like the skeleton of a building.（鋼構如同建築的骨架）"
              ],
              [
                "隱喻 (Metaphor)",
                "不用 like／as，直接把 A 說成 B",
                "The city is a living organism.（城市是有機體）→ 強調城市會成長變化"
              ],
              [
                "擬人 (Personification)",
                "把非人事物賦予人的動作或情感",
                "The old building has witnessed a century of change.（建築見證變遷）"
              ],
              [
                "誇飾 (Hyperbole)",
                "刻意誇大以強調",
                "It took forever to get the permit.（拿到許可花了一輩子）→ 實際是「非常久」"
              ],
              [
                "反諷 (Irony)",
                "字面與真意相反，常伴隨 of course／naturally",
                "What a wonderful day to pour concrete!（在暴雨天說）→ 實為抱怨"
              ],
              [
                "借代 (Metonymy)",
                "以相關事物代稱本體",
                "The White House announced…（白宮＝美國政府）｜Steel and glass dominate the skyline."
              ],
              [
                "對比與矛盾修飾",
                "並列相反概念以製造張力",
                "a deafening silence（震耳欲聾的寂靜）｜simple yet powerful"
              ],
              [
                "排比 (Parallelism)",
                "重複相同結構以加強節奏",
                "We plan, we build, we maintain."
              ]
            ]
          },
          "steps": [
            "字義推測題解法：① 判斷該字是否用於比喻 ② 若是，回到上下文找「被比喻的對象是什麼」 ③ 選擇符合語境的引申義。",
            "看到 like／as…as 立刻判定為明喻；沒有比較詞卻語意跳躍，則多為隱喻。",
            "反諷的辨識關鍵是「語境與字面矛盾」：暴雨天說 wonderful day，字面正面但語境負面。",
            "統測字義題的選項常含「字面義」與「引申義」各一，比喻語境下答案幾乎必定是引申義。"
          ]
        },
        {
          "heading": "11. 統測長篇閱讀高頻主題背景知識庫",
          "body": "<p>閱讀測驗的難度有一半來自<strong>背景知識不足</strong>。統測近十年的長篇閱讀主題其實高度集中，事先建立這些主題的核心語塊與基本概念，閱讀速度可提升三成以上。</p>",
          "table": {
            "headers": [
              "高頻主題",
              "核心概念與常見立場",
              "必備語塊"
            ],
            "rows": [
              [
                "永續與氣候變遷",
                "全球暖化成因、減碳策略、再生能源利弊；作者多持支持行動的立場",
                "carbon emissions 碳排｜renewable energy 再生能源｜global warming｜sustainable development｜carbon footprint"
              ],
              [
                "科技與 AI",
                "自動化對就業的影響、隱私疑慮、教育應用；文章常呈現正反並陳",
                "artificial intelligence｜automation 自動化｜algorithm 演算法｜privacy concerns｜replace human labor"
              ],
              [
                "健康與公共衛生",
                "運動與飲食、心理健康、傳染病防治、睡眠",
                "obesity 肥胖｜mental health｜immune system 免疫系統｜preventive care 預防醫學｜stress management"
              ],
              [
                "都市與居住",
                "都市化、居住正義、公共運輸、綠建築、老屋再生",
                "urbanization 都市化｜affordable housing 可負擔住宅｜public transportation｜urban renewal 都市更新｜green building"
              ],
              [
                "教育與學習",
                "終身學習、線上教育、技職教育價值、學用落差",
                "lifelong learning｜vocational education 技職教育｜hands-on experience｜skill gap 技能落差"
              ],
              [
                "文化與觀光",
                "文化資產保存、觀光衝擊、在地創生、飲食文化",
                "cultural heritage 文化資產｜preservation 保存｜local revitalization 地方創生｜overtourism 過度觀光"
              ],
              [
                "職場與經濟",
                "遠距工作、斜槓、勞動權益、消費行為",
                "remote work 遠距工作｜work-life balance｜gig economy 零工經濟｜consumer behavior"
              ],
              [
                "災害與韌性",
                "地震防災、氣候調適、防災教育、都市韌性",
                "earthquake-resistant 耐震的｜disaster preparedness 防災整備｜resilience 韌性｜evacuation drill 疏散演練"
              ]
            ]
          },
          "steps": [
            "每個主題建立一張「語塊卡」：核心名詞五個、動詞三個、常見立場兩句，考前輪流複習。",
            "背景知識的作用是「加速理解」而非「取代閱讀」——答案仍必須回文章找依據，不可憑常識作答。",
            "建築土木相關主題（都市、綠建築、災害韌性）對本科學生是優勢題材，務必把專業字彙與一般閱讀字彙打通。",
            "課餘可固定閱讀 Taipei Times 或 BBC Learning English 的短篇報導，每週兩篇即可累積主題語感。"
          ]
        }
      ],
      "practices": [
        {
          "question": "Which of the following sentences is an OPINION rather than a FACT?[TTS:Which of the following sentences is an OPINION rather than a FACT?]\n(A) Concrete is made by mixing cement, water, and aggregates.[TTS:(A) Concrete is made by mixing cement, water, and aggregates.]\n(B) The Burj Khalifa in Dubai is currently the tallest building in the world.[TTS:(B) The Burj Khalifa in Dubai is currently the tallest building in the world.]\n(C) Wood is the most aesthetically pleasing material for interior design.[TTS:(C) Wood is the most aesthetically pleasing material for interior design.]\n(D) Steel expands when heated and contracts when cooled.[TTS:(D) Steel expands when heated and contracts when cooled.]",
          "difficulty": "1",
          "steps": [
            "判斷何者為「觀點」(Opinion[TTS:Opinion])。",
            "(A) 描述混凝土的成分，是客觀事實。",
            "(B) 描述哈里發塔為世界最高建築，是可查證的事實。",
            "(C) 說木材是室內設計最美觀的材料，涉及個人主觀感受，為觀點。",
            "(D) 描述鋼材熱脹冷縮的物理現象，是事實。"
          ],
          "answer": "(C) Wood is the most aesthetically pleasing material for interior design.",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "Read the text excerpt: \"Although the new smart building management system costs a fortune initially, its long-term energy-saving capabilities are undeniably impressive.\"[TTS:Read the text excerpt: \"Although the new smart building management system costs a fortune initially, its long-term energy-saving capabilities are undeniably impressive.\"] What is the author's attitude toward the new system?[TTS:What is the author's attitude toward the new system?]\n(A) Highly critical[TTS:(A) Highly critical]\n(B) Generally positive[TTS:(B) Generally positive]\n(C) Completely indifferent[TTS:(C) Completely indifferent]\n(D) Deeply pessimistic[TTS:(D) Deeply pessimistic]",
          "difficulty": "2",
          "steps": [
            "尋找作者態度關鍵字：前半句說「雖然初期花費很高」，後半句用「undeniably impressive[TTS:undeniably impressive](令人印象深刻)」形容其能力。",
            "由「impressive[TTS:impressive]」可知，作者對此系統持正面、肯定的態度。",
            "(A) 極度批判；(C) 完全漠不關心；(D) 深度悲觀，皆不符合。"
          ],
          "answer": "(B) Generally positive",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "Based on the context, what does the word \"sustainable\" most likely mean in the sentence: \"To protect our environment for future generations, architects must focus on sustainable development.\"[TTS:Based on the context, what does the word \"sustainable\" most likely mean in the sentence: \"To protect our environment for future generations, architects must focus on sustainable development.\"]?\n(A) Able to be maintained at a certain rate or level[TTS:(A) Able to be maintained at a certain rate or level]\n(B) Highly profitable and commercially successful[TTS:(B) Highly profitable and commercially successful]\n(C) Extremely fragile and easily damaged[TTS:(C) Extremely fragile and easily damaged]\n(D) Traditional and old-fashioned[TTS:(D) Traditional and old-fashioned]",
          "difficulty": "2",
          "steps": [
            "由上下文推敲字義：句意為「為了保護環境給後代，建築師必須專注於 _____ 的發展」。",
            "保護環境與永續經營相關。選項(A)能夠維持在一定水平(永續的)符合語境。",
            "(B) 高利潤的；(C) 極脆弱的；(D) 傳統的，皆不符合句意。"
          ],
          "answer": "(A) Able to be maintained at a certain rate or level",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "In a multi-text question, Text A is an email complaining about poor ventilation in an office, and Text B is a memo from the facility manager announcing an HVAC (heating, ventilation, and air conditioning) system upgrade.[TTS:In a multi-text question, Text A is an email complaining about poor ventilation in an office, and Text B is a memo from the facility manager announcing an HVAC (heating, ventilation, and air conditioning) system upgrade.] Which of the following is the most logical conclusion?[TTS:Which of the following is the most logical conclusion?]\n(A) The facility manager wrote Text A.[TTS:(A) The facility manager wrote Text A.]\n(B) Text B is a response to the problem mentioned in Text A.[TTS:(B) Text B is a response to the problem mentioned in Text A.]\n(C) The office workers in Text A do not want the HVAC upgrade.[TTS:(C) The office workers in Text A do not want the HVAC upgrade.]\n(D) Text A and Text B are discussing two completely unrelated buildings.[TTS:(D) Text A and Text B are discussing two completely unrelated buildings.]",
          "difficulty": "3",
          "steps": [
            "文本A是抱怨辦公室通風不良的電子郵件。文本B是發布空調系統升級的公告。",
            "整合兩文本資訊，最合理的推論是：經理為了解決文本A中提到的通風問題，因此發布了升級公告。",
            "因此(B)是對Text A[TTS:Text A]中問題的回應，為最合乎邏輯的結論。"
          ],
          "answer": "(B) Text B is a response to the problem mentioned in Text A.",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "When skimming a reading passage to find the main idea, which parts of the paragraphs should you pay the MOST attention to?[TTS:When skimming a reading passage to find the main idea, which parts of the paragraphs should you pay the MOST attention to?]\n(A) The specific dates and numbers in the middle[TTS:(A) The specific dates and numbers in the middle]\n(B) The first and last sentences of each paragraph[TTS:(B) The first and last sentences of each paragraph]\n(C) The adjectives and adverbs used throughout[TTS:(C) The adjectives and adverbs used throughout]\n(D) The names of people and places mentioned[TTS:(D) The names of people and places mentioned]",
          "difficulty": "1",
          "steps": [
            "考查略讀(Skimming[TTS:Skimming])技巧。",
            "略讀旨在尋找文章主旨。英文段落的主旨句(Topic Sentence[TTS:Topic Sentence])最常出現在段落的第一句或最後一句。",
            "細節如日期、數字、人名地名等，在略讀階段可以先略過。"
          ],
          "answer": "(B) The first and last sentences of each paragraph",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "Read the sentence: \"The integration of Artificial Intelligence in structural health monitoring is not a passing fad; it is a paradigm shift that will redefine civil engineering.\"[TTS:Read the sentence: \"The integration of Artificial Intelligence in structural health monitoring is not a passing fad; it is a paradigm shift that will redefine civil engineering.\"] What does the author imply about AI in civil engineering?[TTS:What does the author imply about AI in civil engineering?]\n(A) It is a temporary trend that will soon disappear.[TTS:(A) It is a temporary trend that will soon disappear.]\n(B) It is a fundamental and permanent change to the industry.[TTS:(B) It is a fundamental and permanent change to the industry.]\n(C) It is too complicated for engineers to understand.[TTS:(C) It is too complicated for engineers to understand.]\n(D) It is an outdated technology being replaced by new methods.[TTS:(D) It is an outdated technology being replaced by new methods.]",
          "difficulty": "3",
          "steps": [
            "推論題：句中提到 AI[TTS:AI] 不是短暫的狂熱(not a passing fad[TTS:not a passing fad])，而是將重新定義土木工程的典範轉移。",
            "這意味著 AI[TTS:AI] 是一項根本且永久性的改變。",
            "選項(A)短暫趨勢與文意相反；(B)符合文意。"
          ],
          "answer": "(B) It is a fundamental and permanent change to the industry.",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "Which of the following topics is most closely related to the UN Sustainable Development Goals (SDGs)?[TTS:Which of the following topics is most closely related to the UN Sustainable Development Goals (SDGs)?]\n(A) The history of classical Greek architecture[TTS:(A) The history of classical Greek architecture]\n(B) Strategies for reducing carbon footprints in urban planning[TTS:(B) Strategies for reducing carbon footprints in urban planning]\n(C) The biography of a famous 19th-century bridge engineer[TTS:(C) The biography of a famous 19th-century bridge engineer]\n(D) A comparison of different paint colors for residential interiors[TTS:(D) A comparison of different paint colors for residential interiors]",
          "difficulty": "1",
          "steps": [
            "考查 SDGs[TTS:SDGs] 永續議題的背景知識。",
            "SDGs[TTS:SDGs] 關注環保、永續、氣候變遷等議題。",
            "選項(B)都市計畫中減少碳足跡的策略與環保直接相關。"
          ],
          "answer": "(B) Strategies for reducing carbon footprints in urban planning",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "If a passage extensively uses words like \"devastating,\" \"alarming,\" and \"catastrophic\" to describe the impact of global warming on coastal infrastructure, the author's tone is best described as:[TTS:If a passage extensively uses words like \"devastating,\" \"alarming,\" and \"catastrophic\" to describe the impact of global warming on coastal infrastructure, the author's tone is best described as:]\n(A) Humorous[TTS:(A) Humorous]\n(B) Objective[TTS:(B) Objective]\n(C) Urgent and concerned[TTS:(C) Urgent and concerned]\n(D) Indifferent[TTS:(D) Indifferent]",
          "difficulty": "2",
          "steps": [
            "推斷作者語氣：文章使用了 devastating[TTS:devastating](毀滅性的)、alarming[TTS:alarming](令人擔憂的)、catastrophic[TTS:catastrophic](災難性的)等強烈負面字眼。",
            "這顯示作者對全球暖化的影響感到擔憂且情況緊急。",
            "(A) 幽默的、(B) 客觀的、(D) 漠不關心的皆不符合。"
          ],
          "answer": "(C) Urgent and concerned",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "Read the following dialogue and answer the question.[TTS:Read the following dialogue and answer the question.]\n\nA: Have you finished reading the environmental impact report for the new dam project?[TTS:A: Have you finished reading the environmental impact report for the new dam project?]\nB: Not entirely, but I skimmed through the executive summary.[TTS:B: Not entirely, but I skimmed through the executive summary.] It seems the author is highly critical of the proposed location.[TTS:It seems the author is highly critical of the proposed location.]\nA: Really? What did they say?[TTS:A: Really? What did they say?]\nB: They used words like \"catastrophic\" and \"irreversible\" to describe the potential damage to the local river ecosystem.[TTS:B: They used words like \"catastrophic\" and \"irreversible\" to describe the potential damage to the local river ecosystem.]\n\nWhat can be inferred from the dialogue?[TTS:What can be inferred from the dialogue?]\n(A) Person B has read every single page of the report.[TTS:(A) Person B has read every single page of the report.]\n(B) The author of the report supports building the dam at the proposed location.[TTS:(B) The author of the report supports building the dam at the proposed location.]\n(C) Person A is the author of the environmental impact report.[TTS:(C) Person A is the author of the environmental impact report.]\n(D) The report expresses a strong negative opinion about the project's site.[TTS:(D) The report expresses a strong negative opinion about the project's site.]",
          "difficulty": "2",
          "steps": [
            "此為對話題型，需整合兩人的對話內容。",
            "B提到他略讀(skimmed[TTS:skimmed])了摘要，並指出作者對地點提出強烈批評(highly critical[TTS:highly critical])。",
            "B也提到作者使用了「災難性的」(catastrophic[TTS:catastrophic])和「不可逆的」(irreversible[TTS:irreversible])等字眼。",
            "因此，推論出報告對該專案的地點抱持強烈的負面意見。"
          ],
          "answer": "(D) The report expresses a strong negative opinion about the project's site.",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "Read the following dialogue between two architects and answer the question.[TTS:Read the following dialogue between two architects and answer the question.]\n\nA: I received the client's feedback on our initial blueprint. They want to cut down the budget by using standard glass instead of low-emissivity windows.[TTS:A: I received the client's feedback on our initial blueprint. They want to cut down the budget by using standard glass instead of low-emissivity windows.]\nB: We should persuade them otherwise. Standard glass will lead to terrible energy inefficiency, going against our sustainable design goals.[TTS:B: We should persuade them otherwise. Standard glass will lead to terrible energy inefficiency, going against our sustainable design goals.]\nA: I agree. I will draft a memo to explain the long-term cost benefits of low-emissivity windows.[TTS:A: I agree. I will draft a memo to explain the long-term cost benefits of low-emissivity windows.]\n\nWhat is the main point of Person B's response?[TTS:What is the main point of Person B's response?]\n(A) To agree with the client's budget cuts.[TTS:(A) To agree with the client's budget cuts.]\n(B) To emphasize the importance of using low-emissivity windows for sustainability.[TTS:(B) To emphasize the importance of using low-emissivity windows for sustainability.]\n(C) To complain about the difficulty of drafting a new blueprint.[TTS:(C) To complain about the difficulty of drafting a new blueprint.]\n(D) To suggest a different supplier for standard glass.[TTS:(D) To suggest a different supplier for standard glass.]",
          "difficulty": "2",
          "steps": [
            "分析對話：A表示客戶想用普通玻璃取代低輻射(low-emissivity[TTS:low-emissivity])玻璃以省錢。",
            "B回應說：我們應該說服他們，因為普通玻璃會導致能源浪費，違背永續設計目標。",
            "由此可知，B的主要論點是強調為了永續性，必須使用低輻射玻璃。",
            "選項(B)符合此意涵。"
          ],
          "answer": "(B) To emphasize the importance of using low-emissivity windows for sustainability.",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        }
      ],
      "step0Prerequisites": [
        "長篇多段落文章架構分析能力",
        "事實 (Fact) 與作者觀點/語氣 (Opinion/Tone) 區辨能力",
        "跨文本 (Multi-text) 觀點比對與資訊整合能力"
      ]
    },
    {
      "slug": "translation-writing",
      "title": "12. 統測非選實戰：翻譯與寫作",
      "desc": "針對統測非選擇題型（如翻譯填空、句子重組、中譯英）與段落寫作提供實戰策略，包含語序轉換、意群拆解、寫作架構及標點符號的精準應用。",
      "status": "done",
      "gradeLevel": 12,
      "examHitRate": 5,
      "fatalTraps": [
        {
          "wrongThinking": "中文逐字硬翻，忽略英文主謂核心結構。",
          "correctThinking": "先抓中文句子的主要動詞與主詞，確立五大句型骨架，再將時間、地點等修飾成分置於句尾或句首。",
          "trapDescription": "例如「有很多人在工地」誤寫成 \"Have many people in the site\"，正確為 \"There are many people at the construction site\"。"
        },
        {
          "wrongThinking": "逗號連接兩完整子句 (Comma Splice)，漏用連接詞。",
          "correctThinking": "英文中兩個完整子句不能僅用逗號連接，必須加上對等連接詞 (and, but, so) 或使用分號 (;)。",
          "trapDescription": "逗號連接錯誤 (Comma Splice) 是統測非選題與寫作中最常被扣分的文法錯誤。"
        }
      ],
      "eliteMentalModels": [
        {
          "technique": "中譯英主幹提取四步法",
          "explanation": "1. 圈動詞確定時態 → 2. 找主詞確定人稱單複數 → 3. 填入受詞/補語 → 4. 擺放時間/地點修飾語。"
        },
        {
          "technique": "段落寫作 IBC 結構模型",
          "explanation": "Introduction (主題句清楚表明立場) → Body (2-3 個支持論點與實例) → Conclusion (結論句重申要點與啟發)。"
        }
      ],
      "covered_question_ids": [],
      "worked_examples": [
        {
          "question": "中譯英：這位建築師昨天在工地戴著一頂黃色安全帽。",
          "difficulty": "2",
          "steps": [
            "步驟一：確認主詞為「這位建築師」(The architect[TTS:The architect])，動詞為「戴著」(wore[TTS:wore] / was wearing[TTS:was wearing])。",
            "步驟二：決定時態，句中有「昨天」(yesterday[TTS:yesterday])，動詞須用過去式。",
            "步驟三：找出受詞為「一頂黃色安全帽」(a yellow hard hat[TTS:a yellow hard hat])。",
            "步驟四：處理地方副詞「在工地」(at the construction site[TTS:at the construction site]) 與時間副詞「昨天」(yesterday[TTS:yesterday])，地方通常在時間之前。",
            "步驟五：組合全句。"
          ],
          "answer": "The architect wore a yellow hard hat at the construction site yesterday.[TTS:The architect wore a yellow hard hat at the construction site yesterday.]",
          "hints": [
            "仔細分析句子主詞、動詞與受詞結構",
            "根據上下文語境與關鍵字線索判斷最適選項"
          ],
          "commonMistake": "容易受外觀相似的單字或字面直譯干擾，未完整分析句子文法功能。",
          "eliteShortcut": "文法結構分析法：先確認空格所缺詞性與句法功能，快速排除不符選項，秒殺破題！"
        }
      ],
      "illustrations": [
        "context.webp",
        "mechanism.webp",
        "comparison.webp"
      ],
      "concepts": [
        {
          "heading": "1. 中譯英語序轉換法",
          "body": "中英文語序最大差異在於副詞與修飾語的位置。中文常將時間與地點放在動詞前，而英文通常將它們放在句尾（地方先於時間）。\n掌握「主詞 + 動詞 + 受詞 + 地方 + 時間」的黃金公式。\n\n[DIALOGUE_START:中譯英語序轉換會話：調整中文主題句型]\nTeacher: How do you translate: \"這座橋樑的建造花費了三年時間\"? | 你要如何翻譯「這座橋樑的建造花費了三年時間」？\nStudent: In English, we say: \"It took three years to construct this bridge.\" | 在英文中，我們會說：It took three years to construct this bridge。\nTeacher: Or using the gerund: \"Constructing this bridge took three years.\" | 或者使用動名詞當主詞：Constructing this bridge took three years。\nStudent: Putting the verb and subject in proper order makes the English natural and accurate. | 將主詞與動詞依英文語序排列能讓英文表達自然且精確。\n[DIALOGUE_END]",
          "steps": [
            "步驟一：劃出中文句子核心主詞與動詞。 ｜為什麼：確立英文主謂骨架 (S + V)。",
            "步驟二：判斷動作發生的時態（過去、現在、進行、完成）。 ｜為什麼：確保動詞時態符合語境。",
            "步驟三：將地點與時間修飾語移至句尾（或置於句首加逗號）。 ｜為什麼：遵循英文「主幹在前、修飾在後」之自然語序。"
          ]
        },
        {
          "heading": "2. 字首提示填空策略",
          "body": "統測非選常有字首提示填空，解題時須判斷：\n1. 該空格的詞性（動詞、名詞、形容詞等）\n2. 前後文意與搭配詞（collocation[TTS:collocation]）\n3. 注意名詞單複數及動詞時態變化。\n\n[DIALOGUE_START:字首提示填空會話：鎖定詞性與時態字尾]\nTutor: The prompt is: \"The workers must i______ the foundation.\" The hint letter is \"i\". | 題目是：The workers must i______ the foundation. 提示字母是 i。\nStudent: After modal auxiliary \"must\", we need a base verb. The answer is \"inspect\"! | 在情態助動詞 must 後面需要原形動詞。答案是 inspect (檢查)！\nTutor: What if it was past tense: \"The engineer i______ the site yesterday\"? | 如果是過去式呢：The engineer i______ the site yesterday？\nStudent: Then we add \"-ed\": \"inspected\". Always check verb inflection! | 那就必須加上 -ed 變成 inspected。一定要隨時檢查動詞時態變化！\n[DIALOGUE_END]",
          "steps": [
            "步驟一：觀察空格前後單字的詞性需求（如形容詞修飾名詞、副詞修飾動詞）。 ｜為什麼：預測目標單字的詞性與字尾。",
            "步驟二：依題目給予的字首字母，在該詞性範圍內聯想符合語意的單字。 ｜為什麼：大幅縮小單字候選範圍。",
            "步驟三：檢查拼字與單複數或時態變化（如名詞加 -s，動詞加 -ed）。 ｜為什麼：確保形式與語法完全精準不失分。"
          ]
        },
        {
          "heading": "3. 句子重組 Chunking[TTS:Chunking] 意群法",
          "body": "拿到打散的單字時，先尋找固定搭配（如 look forward to[TTS:look forward to]、in front of[TTS:in front of]）或 S+V[TTS:S+V] 結構，將其綁定成一個意群，再根據文法規則將意群排序，避免逐字盲目拼湊。\n\n[DIALOGUE_START:句子重組意群法會話：按語塊快速拼裝]\nPeer A: Given these scrambled chunks: [the ancient pagoda] [withstood] [the massive earthquake] [without collapsing], how do you sequence them? | 給定這些打散的意群語塊，你要如何排列順序？\nPeer B: Subject first: \"The ancient pagoda\", Verb: \"withstood\", Object: \"the massive earthquake\", Prepositional phrase: \"without collapsing\". | 主詞先行：The ancient pagoda，動詞：withstood，受詞：the massive earthquake，介系詞片語：without collapsing。\nPeer A: Chunking makes sentence unscrambling fast and error-free. | 意群切塊法讓句子重組變得迅速而且零失誤。\nPeer B: Always check that no words were accidentally skipped or misspelled. | 排完後記得檢查沒有任何單字被漏掉或拼錯。\n[DIALOGUE_END]",
          "steps": [
            "步驟一：將打散的片語依「主詞群」、「動詞片語群」、「受詞/補語群」、「修飾語群」進行語塊分組 (Chunking)。 ｜為什麼：降低句子重組的認知負荷。",
            "步驟二：排列主幹核心順序：主詞群 + 動詞片語群 + 受詞群。 ｜為什麼：建立標準英文句型結構。",
            "步驟三：將修飾語（時間、地點、介系詞片語）置於合適位置並檢查大小寫與句尾標點。 ｜為什麼：完成流暢且文法正確的完整句子。"
          ]
        },
        {
          "heading": "4. 段落寫作架構 (Topic-Support-Conclusion[TTS:Topic-Support-Conclusion])",
          "body": "高分段落應具備清晰的三段結構：\n1. 主題句 (Topic Sentence[TTS:Topic Sentence])：點出核心主旨。\n2. 支持句 (Supporting Sentences[TTS:Supporting Sentences])：提供細節、例子（如建築材料、施工步驟）來佐證主題。\n3. 結論句 (Concluding Sentence[TTS:Concluding Sentence])：重申主旨或提出總結。\n\n[DIALOGUE_START:段落寫作架構會話：主題句、支持句與結論句]\nWriting Coach: How should you structure your short essay on why vocational skills matter? | 你該如何構思「技職技能為什麼重要」的短文寫作架構？\nStudent: Topic sentence: Hands-on skills prepare youth for high-demand careers. Supporting details: real jobsite practice and certifications. | 主題句：實作技能幫助青年做好進入熱門職場的準備。支持細節：真實工地實習與專業證照。\nWriting Coach: And conclude with a memorable restatement: \"In conclusion, technical mastery builds a resilient future.\" | 最後用有力的總結句作結：「總之，精熟專業技術能為我們築造更具韌性的未來。」\nStudent: A clear three-part structure earns maximum points from the graders. | 清晰的三段式結構能從評分老師手中拿到最高分。\n[DIALOGUE_END]",
          "steps": [
            "步驟一：撰寫主題句 (Topic Sentence)，一句話清楚點出全段核心觀點。 ｜為什麼：為讀者建立明確的閱讀預期。",
            "步驟二：發展 2~3 個支持句 (Supporting Sentences)，搭配具體實例或理由。 ｜為什麼：使論述具體生動且具說服力。",
            "步驟三：撰寫結論句 (Concluding Sentence)，總結要點或提出前瞻想法。 ｜為什麼：使整段文字結構完整圓滿。"
          ]
        },
        {
          "heading": "5. 標點符號精準用法",
          "body": "英文標點常見錯誤：\n1. 逗號不能連接兩個獨立子句，需用連接詞 (and[TTS:and], but[TTS:but]) 或改用分號 (;)。\n2. 句尾應使用句號 (.) 而非逗號。\n3. 專有名詞（如 Taiwan[TTS:Taiwan], Taipei 101[TTS:Taipei 101]）字首必須大寫。\n\n[DIALOGUE_START:標點符號精準度會話：大小寫與標點避錯]\nProofreader: Never connect two independent sentences with only a comma; use a semicolon or period. | 切勿只用逗號連接兩個獨立子句；請使用分號或句號。\nWriter: Like this: \"The design was complex; however, the builders succeeded.\"? | 像這樣嗎：The design was complex; however, the builders succeeded.？\nProofreader: Exact syntax! Also remember to capitalize proper nouns like \"Taipei 101\" and days of the week. | 句法完全正確！同時也要記得專有名詞如 Taipei 101 與星期名稱必須大寫。\nWriter: Flawless punctuation reflects professional discipline and academic rigor. | 完美的標點符號體現了專業紀律與嚴謹的學術態度。\n[DIALOGUE_END]",
          "steps": [
            "步驟一：檢查每句話首字是否大寫，句尾是否有句號 (.)、問號 (?) 或驚嘆號 (!)。 ｜為什麼：遵守基本書寫規範。",
            "步驟二：檢驗逗號用法，確保沒有用逗號連接兩個獨立完整子句 (Comma Splice)。 ｜為什麼：消除最常見的標點扣分陷阱。",
            "步驟三：專有名詞（人名、地名、機構名）首字母務必大寫。 ｜為什麼：展現專業嚴謹的寫作水準。"
          ]
        },
        {
          "heading": "6. 動詞時態一致性檢核",
          "body": "寫作與翻譯時，務必在下筆後檢查時態是否一致。若描述過去完成的工程，整段應以過去式為主；若陳述一般建築常理或設計理念，則使用現在式。\n\n[DIALOGUE_START:動詞時態一致性會話：全文時態校驗]\nTeacher: Look at this draft: \"When we visited the site, the crane lifts the steel.\" What is wrong? | 看一下這篇草稿：When we visited the site, the crane lifts the steel. 哪裡錯了？\nStudent: \"Visited\" is past tense, so \"lifts\" must be past tense too: \"the crane lifted the steel\"! | visited 是過去式，所以 lifts 也必須改成過去式：the crane lifted the steel！\nTeacher: Always scan your completed writing to ensure all verbs stay in the same temporal frame. | 寫完文章後務必從頭到尾掃描一遍，確保所有動詞都維持在相同的時態座標中。\nStudent: Tense consistency check is my final proofreading step. | 時態一致性檢查是我最後校對的必備步驟。\n[DIALOGUE_END]",
          "steps": [
            "步驟一：通讀全文，確認整篇文章的主時態（敘事通常為過去式，論說通常為現在式）。 ｜為什麼：建立一致的時態基調。",
            "步驟二：逐句檢查每個動詞是否與主詞單複數一致。 ｜為什麼：消除主謂不一致之常見失誤。",
            "步驟三：檢查助動詞後面是否皆接原形動詞，完成式後面是否皆接過去分詞 (p.p.)。 ｜為什麼：保證動詞變化無懈可擊。"
          ]
        },
        {
          "heading": "7. 非選擇題 16 分搶分秘技",
          "body": "統測非選共16分，通常包含兩題翻譯或重組（各3-4分）與其他題型。\n搶分關鍵：\n- 拼字務必正確，錯一字可能扣0.5至1分。\n- 字跡工整，避免閱卷老師誤判（如 a[TTS:a] 與 u[TTS:u], r[TTS:r] 與 v[TTS:v]）。\n- 寫完後務必檢查主動詞單複數一致 (S-V agreement[TTS:S-V agreement])。\n\n[DIALOGUE_START:非選 16 分搶分會話：黃金答題檢核清單]\nTutor: In the non-multiple-choice section, every point counts toward your dream college. | 在非選擇題的十六分中，每一分都關係到你能否錄取心目中的理想志願。\nStudent: I will follow the checklist: correct spelling, proper verb endings, capitalization, and punctuation. | 我一定會嚴格執行檢核清單：單字拼寫正確、動詞時態字尾無誤、大小寫及標點符號確實。\nTutor: Write neatly and double-check before handing in your answer sheet. | 字體書寫工整，並在交卷前進行最後複查。\nStudent: I am fully prepared to score full marks on the translation and writing section! | 我已經做好充分準備，要在非選翻譯與寫作部分拿下滿分！\n[DIALOGUE_END]",
          "table": {
            "headers": [
              "非選題型 / 寫作要項",
              "典型考點與高頻句型",
              "常犯致命錯誤 (扣分地雷)",
              "滿分答題秘訣與檢查清單"
            ],
            "rows": [
              [
                "中譯英 (Translation [TTS:Translation])",
                "S + V + O + 地方 + 時間 / It takes... to V [TTS:It takes time to complete the project.]",
                "中文逐字硬翻、動詞時態漏寫過去式 -ed [TTS:-ed]",
                "先抓主詞與動詞骨架，修飾語放句尾"
              ],
              [
                "句子重組 (Unscrambling [TTS:Unscrambling])",
                "固定片語 (look forward to [TTS:look forward to]) / 分詞修飾片語",
                "漏掉單字、大小寫錯誤、漏加句號",
                "用語塊 (Chunking [TTS:Chunking]) 先組小組件再拼主幹"
              ],
              [
                "字首提示填空 (Spelling [TTS:Spelling])",
                "名詞單複數 (-s/-es [TTS:-s or -es])、動詞三態變化",
                "只寫單字原型忘記時態/單複數變化",
                "看前後詞性，助動詞後用原形，進行式加 -ing [TTS:-ing]"
              ],
              [
                "段落寫作 (Paragraph Writing [TTS:Paragraph Writing])",
                "主題句 + 2~3 個支持句 (First/Second [TTS:First, Second]) + 結論句",
                "逗號連接兩完整句子 (Comma Splice [TTS:Comma Splice])",
                "嚴格遵守 IBC 結構，使用連接詞與轉折副詞"
              ]
            ]
          },
          "steps": [
            "步驟一：先做非選擇題（翻譯與填空），趁大腦思維最清晰時搶下基礎分。 ｜為什麼：確保高投報率題目穩穩拿分。",
            "步驟二：翻譯題先寫草稿，反覆檢核「主詞動詞單複數」與「時態」。 ｜為什麼：減少粗心失分。",
            "步驟三：寫作留出至少 3 分鐘進行最後潤飾與錯字校對。 ｜為什麼：細節決定高分關鍵。"
          ]
        },
        {
          "heading": "8. 統測非選擇題 20 大黃金句型大全與句子重組拆解法",
          "body": "統測非選擇題（翻譯與句子重組）每年占分 16 分，是決定頂標與前標的決勝戰場！分析近十年統測命題，高頻出現的句型高度集中在「虛主詞 It」、「so... that...」、「not only... but also...」、「使役與被動」、「花費時間金錢 (take/spend)」、「倒裝與假設」等核心範式。<br/>掌握以下黃金句型矩陣與意群切塊 (Chunking) 拆解法，不僅翻譯能直覺下筆，重組題目也能在 45 秒內零失誤破題。\n\n[DIALOGUE_START:非選 20 大黃金句型實戰會話：衝刺滿分]\nWriting Specialist: In non-multiple-choice translation, what is the secret to scoring full marks? | 在非選擇題翻譯中，拿到滿分的秘訣是什麼？\nHigh Achiever: I spot the golden sentence pattern first—whether it is \"It is adj to V\" or \"so... that\"—and map the chunks onto the template. | 我會先辨識出黃金句型——是 It is adj to V 還是 so... that——然後將各意群語塊套入模板。\nWriting Specialist: And how do you ensure zero points are deducted for minor errors? | 那你如何確保細微錯誤不被扣分？\nHigh Achiever: I always run my Triple-Check routine: capitalization, verb tense agreement, and final period. Precision equals full points! | 我一定會執行三重檢核程序：首字大寫、動詞時態主謂一致與句尾句號。精準就等於滿分！\n[DIALOGUE_END]",
          "table": {
            "headers": [
              "黃金句型公式",
              "語意功能與文法焦點",
              "統測歷屆仿真示範",
              "重組拆解關鍵語塊 (Chunks)"
            ],
            "rows": [
              [
                "It is + adj. + for sb to V [TTS:It is adj for sb to V]",
                "虛主詞結構（做某事對某人而言是...的）",
                "It is crucial for civil engineers to wear protective gear. [TTS:It is crucial for civil engineers to wear protective gear.] (土木工程師配戴防護裝備是至關重要的。)",
                "[It is crucial] [for civil engineers] [to wear protective gear]"
              ],
              [
                "so + adj./adv. + that + S + V [TTS:so adj that clause]",
                "因果結果（如此...以致於...）",
                "The girder was so heavy that the crane could barely lift it. [TTS:The girder was so heavy that the crane could barely lift it.] (那根鋼樑太重了，以至於起重機幾乎吊不起來。)",
                "[The girder was] [so heavy that] [the crane could barely lift it]"
              ],
              [
                "too + adj./adv. + to V [TTS:too adj to V]",
                "否定結果（太...而不能...）",
                "The concrete mix was too dry to pour into the framework. [TTS:The concrete mix was too dry to pour into the framework.] (混凝土拌合物太乾了，無法澆灌進模板中。)",
                "[The concrete mix was] [too dry to pour] [into the framework]"
              ],
              [
                "It takes (sb) + time + to V [TTS:It takes time to V]",
                "花費時間做某事（物當主詞）",
                "It took the team three months to inspect the suspension bridge. [TTS:It took the team three months to inspect the suspension bridge.] (團隊花了三個月的時間檢驗這座懸索吊橋。)",
                "[It took the team] [three months] [to inspect the suspension bridge]"
              ],
              [
                "sb + spend + time/money + on N / (in) V-ing [TTS:spend time on or V-ing]",
                "人當主詞的花費結構",
                "The government spent millions of dollars renovating the harbor. [TTS:The government spent millions of dollars renovating the harbor.] (政府花費了數百萬美元整修港口。)",
                "[The government spent] [millions of dollars] [renovating the harbor]"
              ],
              [
                "be used to + V-ing / N [TTS:be used to V-ing]",
                "習慣於某事（不同於 used to V 過去習慣）",
                "Site surveyors are used to working under extreme weather. [TTS:Site surveyors are used to working under extreme weather.] (工地測量員習慣在極端天氣下工作。)",
                "[Site surveyors] [are used to working] [under extreme weather]"
              ],
              [
                "With + O + O.C. (V-ing / p.p.) [TTS:With noun participle]",
                "附帶狀況獨立分詞結構（伴隨著...）",
                "With the inspection successfully completed, the ceremony began. [TTS:With the inspection successfully completed, the ceremony began.] (隨著檢驗順利完成，典禮正式開始。)",
                "[With the inspection] [successfully completed,] [the ceremony began]"
              ]
            ]
          },
          "steps": [
            "步驟一：語塊劃分法 (Chunking)：拿到打散單字時，先圈出名詞片語（如 the suspension bridge）與固定片語（如 look forward to, in accordance with）。 ｜為什麼：降低干擾，化繁為簡。",
            "步驟二：尋找骨架主謂 (S + V)：找出主詞名詞與主要動詞，確立「誰做了什麼事情」的核心主幹。 ｜為什麼：主謂確立後，全句骨骼即成型 70%。",
            "步驟三：套用黃金句型模板：確認是否包含 It is... to V, so... that, Not only... but also 等固定句構。 ｜為什麼：黃金句型能自動鎖定連接詞與補語位置。",
            "步驟四：擺放修飾片語：將時間副詞（如 yesterday, next month）與地點介系詞片語置於句尾，或置於句首加逗號。 ｜為什麼：符合英文「主幹在前、修飾在後」語序。",
            "步驟五：終極三查 (Triple Check)：檢查「大小寫首字母」、「名詞單複數 -s」與「動詞時態與被動 p.p.」及句尾標點符號。 ｜為什麼：非選擇題拼寫與標點是扣分重災區。"
          ]
        },
        {
          "heading": "9. 中譯英五大萬用轉換模板：從中文思考跳到英文結構",
          "body": "<p>中譯英失分的根源，是把中文<strong>逐字翻譯</strong>而非依英文結構重組。以下五個模板涵蓋統測非選翻譯題近十年八成以上的句型，只要辨識出中文的句式類型，就能直接套用結構。</p>",
          "table": {
            "headers": [
              "中文句式",
              "英文結構模板",
              "範例（中 → 英）"
            ],
            "rows": [
              [
                "「有…」存在句",
                "There ＋ be ＋ 名詞 ＋ 地點／時間（動詞單複數看緊接的名詞）",
                "工地上有三名工人。→ There are three workers on the site."
              ],
              [
                "「越來越…」",
                "比較級 ＋ and ＋ 比較級｜more and more ＋ 多音節形容詞｜An increasing number of ＋ 複數名詞",
                "建築成本越來越高。→ Construction costs are getting higher and higher."
              ],
              [
                "「花時間／花錢」",
                "It takes ＋ 人 ＋ 時間 ＋ to V｜S ＋ spend ＋ 時間／金錢 ＋ (in) V-ing／on ＋ 名詞｜S ＋ cost ＋ 人 ＋ 金錢",
                "完成這張圖花了他三小時。→ It took him three hours to finish the drawing.＝He spent three hours finishing the drawing."
              ],
              [
                "「不但…而且…」",
                "not only ＋ A ＋ but also ＋ B（A、B 詞性須平行；not only 置句首要倒裝）",
                "他不但準時，而且很仔細。→ He is not only punctual but also careful."
              ],
              [
                "「因為…所以…」",
                "英文只用一個連接詞：Because／Since ＋ 子句, 主要子句｜主要子句 ＋ because ＋ 子句｜Because of ＋ 名詞",
                "因為下大雨，所以工程暫停。→ Because it rained heavily, the work was suspended.（× Because…, so…）"
              ],
              [
                "「雖然…但是…」",
                "同樣只用一個連接詞：Although／Though ＋ 子句, 主要子句",
                "雖然預算有限，我們仍完成了專案。→ Although the budget was limited, we completed the project.（× Although…, but…）"
              ],
              [
                "「太…以致於不能…」",
                "too ＋ adj. ＋ to V｜so ＋ adj. ＋ that ＋ S ＋ cannot",
                "這根樑太弱，無法承重。→ The beam is too weak to bear the load."
              ],
              [
                "「據說／人們認為」",
                "It is said／believed that ＋ 子句｜S ＋ is said／believed ＋ to V",
                "據說這棟建築有百年歷史。→ It is said that the building is a century old."
              ]
            ]
          },
          "steps": [
            "翻譯四步驟：① 圈出中文的主詞與動詞 ② 判斷句式類型並選定模板 ③ 依模板填入單字 ④ 檢查時態、單複數、冠詞。",
            "英文「一個句子只能有一個連接詞」：因為…所以…只翻 because，雖然…但是…只翻 although——這是最常見的扣分點。",
            "不會的單字用「同義簡單字」替代，切勿留白：不會 postpone 就寫 delay，不會 sufficient 就寫 enough，分數照樣拿得到。",
            "寫完務必回讀一次並檢查三件事：主詞動詞單複數是否一致、時態是否正確、可數名詞前是否漏冠詞。"
          ]
        },
        {
          "heading": "10. 中式英文 (Chinglish) 高頻錯誤矯正表",
          "body": "<p>非選寫作最容易被扣分的不是艱難句型，而是<strong>直接把中文語序與詞彙搬進英文</strong>。以下整理閱卷現場最常見的中式英文錯誤，每一條都附上正確寫法與原因說明。</p>",
          "table": {
            "headers": [
              "中文原意",
              "常見錯誤寫法 (×)",
              "正確寫法 (○) 與說明"
            ],
            "rows": [
              [
                "雖然…但是…",
                "Although it rained, but we continued.",
                "Although it rained, we continued.｜英文一句只用一個連接詞"
              ],
              [
                "因為…所以…",
                "Because he was late, so he missed it.",
                "Because he was late, he missed it.｜同上原則"
              ],
              [
                "我很喜歡",
                "I very like it.",
                "I like it very much.／I really like it.｜very 不可直接修飾動詞"
              ],
              [
                "人們認為",
                "People think that…（過度使用）",
                "It is believed that…／Many experts argue that…｜書面語偏好被動與具體主詞"
              ],
              [
                "有一個問題",
                "Have a problem here.（無主詞）",
                "There is a problem here.｜中文的「有」對應 There be 而非 have"
              ],
              [
                "等待某人",
                "Please wait me.",
                "Please wait for me.｜wait 是不及物動詞，須加 for"
              ],
              [
                "討論這件事",
                "Let's discuss about it.",
                "Let's discuss it.｜discuss 已是及物動詞，不加 about（同型：mention, marry, enter, approach）"
              ],
              [
                "我的意見是",
                "In my opinion, I think that…（語意重複）",
                "In my opinion, …／I think that…｜擇一使用即可"
              ]
            ]
          },
          "steps": [
            "五大高頻不及物／及物陷阱：wait for（不及物加 for）、listen to、look at｜discuss、mention、enter、marry、approach（及物不加介系詞）。",
            "中文的「有」對應兩種英文：表「存在」用 There be，表「擁有」用 have——這是初階最常見的結構錯誤。",
            "避免以 People think… 開頭，改用 It is widely believed that… 或具體主詞（Researchers found that…），可明顯提升文體成熟度。",
            "寫完後用「英文語序檢查法」：主詞 ＋ 動詞 ＋ 受詞 ＋ 副詞（方式 → 地點 → 時間），順序錯了就是中式英文。",
            "平時把自己寫錯的句子建立一份「錯誤矯正本」，考前只複習這一本，效率遠高於重讀文法書。"
          ]
        },
        {
          "heading": "11. 非選寫作自我檢查表：六個檢查點搶回失分",
          "body": "<p>非選擇題佔 20 分，其中至少 3～5 分是「明明會寫卻寫錯」的失分。用一份固定的<strong>六點檢查表</strong>在交卷前掃過一遍，是投報率最高的搶分動作。</p>",
          "table": {
            "headers": [
              "檢查點",
              "檢查問題",
              "常見錯誤實例"
            ],
            "rows": [
              [
                "① 主詞動詞一致",
                "主詞是單數還是複數？第三人稱單數現在式是否加 s？",
                "The list of materials are…（×）→ is（主詞是 list）｜He go to work.（×）→ goes"
              ],
              [
                "② 時態一致",
                "全句／全段時態是否統一？時間副詞與時態是否吻合？",
                "Yesterday I go to the site.（×）→ went｜He said he is busy.（×）→ was"
              ],
              [
                "③ 名詞單複數與冠詞",
                "可數名詞是否漏了 a／an／the 或複數 -s？不可數名詞是否誤加 s？",
                "I have book.（×）→ a book｜many informations（×）→ much information"
              ],
              [
                "④ 詞性正確",
                "該用名詞、形容詞還是副詞？字尾是否正確？",
                "He is success.（×）→ successful｜He works very careful.（×）→ carefully"
              ],
              [
                "⑤ 連接詞不重複",
                "是否同時用了 although 與 but、because 與 so？",
                "Although…, but…（×）｜Because…, so…（×）"
              ],
              [
                "⑥ 拼字與大小寫標點",
                "句首大寫？句尾句點？專有名詞大寫？易錯字拼對？",
                "taiwan（×）→ Taiwan｜recieve（×）→ receive｜their／there／they're 混用"
              ],
              [
                "⑦ 平行結構",
                "and／or 兩端的詞性是否一致？",
                "She likes drawing and to model.（×）→ drawing and modeling"
              ],
              [
                "⑧ 字數與完整度",
                "是否寫完整句？是否回應了題目要求的所有要素？",
                "只寫片語不成句｜漏答題目要求的第二個要素"
              ]
            ]
          },
          "steps": [
            "檢查順序建議由大到小：先看句子結構是否完整 → 再看時態與一致性 → 最後看拼字與標點。",
            "考場實務：非選寫完後至少保留 3 分鐘專門檢查，這 3 分鐘平均可搶回 2～4 分。",
            "第三人稱單數加 s 與可數名詞加 a／the，是閱卷最常見的兩大扣分點，務必列為首要檢查項目。",
            "寧可用「簡單但正確」的句子，也不要用「複雜但錯誤」的句子——非選評分重視正確性甚於華麗度。",
            "把自己過去三次模擬考的非選錯誤分類統計，找出個人最常犯的兩項，針對性強化。"
          ]
        },
        {
          "heading": "12. 看圖寫作與情境寫作：從圖片到成篇的四段模板",
          "body": "<p>統測非選的情境寫作（含看圖寫作）題型要求依提示寫出<strong>結構完整的短文或段落</strong>。使用固定的四段模板，可在有限時間內穩定產出合格作品，並確保涵蓋題目要求的所有要素。</p>",
          "table": {
            "headers": [
              "段落",
              "功能與句數",
              "萬用起始句型"
            ],
            "rows": [
              [
                "① 主題句 (Topic Sentence)",
                "點出全段主旨，1 句",
                "The picture shows…｜In my opinion, …｜There are three reasons why…"
              ],
              [
                "② 支持句一 (Support 1)",
                "第一個理由或事件，1～2 句",
                "First of all, …｜To begin with, …｜One reason is that…"
              ],
              [
                "③ 支持句二 (Support 2)",
                "第二個理由或事件，含具體例子，1～2 句",
                "Second, …｜In addition, …｜For example, …｜What is more, …"
              ],
              [
                "④ 結論句 (Conclusion)",
                "總結或提出建議，1 句",
                "In conclusion, …｜Therefore, …｜That is why…｜For these reasons, …"
              ],
              [
                "看圖寫作：描述順序",
                "先整體後細節：地點 → 人物 → 動作 → 推測原因或結果",
                "In the picture, we can see…｜The man on the left is…｜It seems that…"
              ],
              [
                "情境寫作：回應要素",
                "務必逐一回應題目列出的每個提示點",
                "題目給三個提示點就必須寫三句對應，漏一點即扣分"
              ],
              [
                "連接詞工具箱",
                "遞進：also, besides, moreover｜轉折：however, on the other hand｜因果：therefore, as a result｜舉例：for example, such as",
                "每段至少使用一個連接詞以展現邏輯"
              ],
              [
                "常見扣分點",
                "沒有主題句、段落無結論、漏答提示點、時態混亂",
                "寫作前先在題本上列出三個關鍵字再動筆"
              ]
            ]
          },
          "steps": [
            "動筆前先花 1 分鐘列大綱：主旨一句 ＋ 理由兩個 ＋ 結論一句，寫作時間反而更充裕。",
            "看圖寫作的描述順序固定為「整體 → 局部 → 動作 → 推測」，可避免東寫一句西寫一句的散亂感。",
            "情境寫作務必逐點回應題目的提示，用手指在題目上逐一畫勾，確保沒有遺漏。",
            "句子長短交錯（短句 ＋ 長句 ＋ 短句）能顯著提升可讀性；全篇長句反而容易出錯。",
            "結尾句避免草率結束，用 In conclusion／For these reasons 起頭，讓段落有明確收束感。"
          ]
        },
        {
          "heading": "13. 統測非選歷屆命題結構分析與備考路徑",
          "body": "<p>非選擇題共 20 分，題型高度穩定：<strong>字彙填空、句子重組、中譯英</strong>三大類。了解各題型的配分、評分重點與準備方法，可以把非選從「靠運氣」變成「穩定得分區」。</p>",
          "table": {
            "headers": [
              "題型",
              "題數與配分（近年常態）",
              "評分重點與準備方法"
            ],
            "rows": [
              [
                "① 字彙填空（首字母提示）",
                "約 4 題，每題 1～2 分",
                "評分：拼字完全正確才給分；詞性須與句子結構相符｜準備：熟背 2000 字並練習「看字首寫全字」"
              ],
              [
                "② 句子重組",
                "約 2 題，每題 2～3 分",
                "評分：語序與標點完全正確；大小寫須正確｜準備：以「意群」為單位重組，先定主詞動詞再排修飾語"
              ],
              [
                "③ 中譯英",
                "約 2～4 題，每題 3～4 分",
                "評分：語意完整、結構正確；部分分數可拿｜準備：熟練五大轉換模板與 20 大黃金句型"
              ],
              [
                "④ 情境寫作（部分年度）",
                "1 題，約 8～10 分",
                "評分：內容切題、結構完整、文法正確｜準備：四段模板 ＋ 每週一篇限時練習"
              ],
              [
                "時間分配",
                "建議 20 分鐘完成全部非選",
                "字彙 3 分鐘 ＋ 重組 4 分鐘 ＋ 翻譯 8 分鐘 ＋ 檢查 5 分鐘"
              ],
              [
                "得分策略",
                "不會也要寫，空白必定零分",
                "翻譯題即使部分不會，也要把會的部分寫對，可拿部分分數"
              ],
              [
                "常見零分原因",
                "空白未作答、整句語意完全錯誤、字跡難以辨識",
                "務必書寫清楚工整，模糊字跡可能被判錯"
              ],
              [
                "備考時程建議",
                "考前三個月啟動",
                "第 1 個月：字彙 ＋ 句型｜第 2 個月：逐題型練習｜第 3 個月：整卷限時模擬並訂正"
              ]
            ]
          },
          "steps": [
            "非選最重要的觀念：空白一定零分，寫錯至少有機會拿部分分數，因此任何題目都必須填滿。",
            "字彙填空的準備方法是「反向練習」：拿單字表遮住後半部，只看首字母與中文意思寫出全字。",
            "句子重組解法：先找出動詞 → 確定主詞 → 補受詞 → 最後插入修飾語與副詞，並檢查句首大寫與句尾標點。",
            "中譯英採「部分給分」，因此結構正確比用字華麗更重要；先確保主詞動詞正確，再求詞彙精準。",
            "考前一個月起，每週完整寫一次非選並自行對照解析訂正，把錯誤類型記入個人錯誤矯正本。"
          ]
        }
      ],
      "practices": [
        {
          "question": "翻譯填空：這座新建的橋樑不僅堅固而且美觀。\nThis newly built bridge is n____ only strong b____ also beautiful.[TTS:This newly built bridge is n____ only strong b____ also beautiful.]",
          "difficulty": "1",
          "steps": [
            "分析句意與句型：不僅...而且... 的英文句型為 not only ... but also ...[TTS:not only ... but also ...]。",
            "確認字首：n 開頭為 not[TTS:not]，b 開頭為 but[TTS:but]。",
            "檢查拼字。"
          ],
          "answer": "not, but[TTS:not, but]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "句子重組：are / safety / workers / required / helmets / wear / to / .[TTS:are / safety / workers / required / helmets / wear / to / .]\n(所有的工人都被要求戴安全帽。)",
          "difficulty": "2",
          "steps": [
            "找出主詞：workers[TTS:workers]",
            "找出動詞片語：are required to wear[TTS:are required to wear] (被要求穿戴)",
            "找出受詞：safety helmets[TTS:safety helmets]",
            "依序組合：workers are required to wear safety helmets.[TTS:workers are required to wear safety helmets.]"
          ],
          "answer": "Workers are required to wear safety helmets.[TTS:Workers are required to wear safety helmets.]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "中譯英：為了保護環境，許多建築師現在使用綠色建材。",
          "difficulty": "3",
          "steps": [
            "翻譯目的片語「為了保護環境」：To protect the environment[TTS:To protect the environment] (放在句首或句尾皆可)。",
            "主詞「許多建築師」：many architects[TTS:many architects]。",
            "動詞與時間「現在使用」：now use[TTS:now use]。",
            "受詞「綠色建材」：green building materials[TTS:green building materials]。",
            "組合並加上適當標點符號。"
          ],
          "answer": "To protect the environment, many architects now use green building materials.[TTS:To protect the environment, many architects now use green building materials.]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "翻譯填空：在地震發生時，請待在桌下直到搖晃停止。\nD____ the earthquake, please stay under the desk u____ the shaking stops.[TTS:D____ the earthquake, please stay under the desk u____ the shaking stops.]",
          "difficulty": "2",
          "steps": [
            "「在...期間」的介系詞且字首為 D[TTS:D]：During[TTS:During]。",
            "「直到...」的連接詞且字首為 u[TTS:u]：until[TTS:until]。",
            "注意 During[TTS:During] 位於句首需大寫。"
          ],
          "answer": "During, until[TTS:During, until]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "句子重組：the most / building / is / Taipei 101 / in / famous / Taiwan / .[TTS:the most / building / is / Taipei 101 / in / famous / Taiwan / .]\n(台北101是台灣最有名的建築。)",
          "difficulty": "1",
          "steps": [
            "主詞：Taipei 101[TTS:Taipei 101]",
            "動詞：is[TTS:is]",
            "補語(最高級形容詞+名詞)：the most famous building[TTS:the most famous building]",
            "地方副詞：in Taiwan[TTS:in Taiwan]",
            "組合：Taipei 101 is the most famous building in Taiwan.[TTS:Taipei 101 is the most famous building in Taiwan.]"
          ],
          "answer": "Taipei 101 is the most famous building in Taiwan.[TTS:Taipei 101 is the most famous building in Taiwan.]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "翻譯填空：這個建案預計將於明年完成。\nThe construction p____ is expected to be completed next y____.[TTS:The construction p____ is expected to be completed next y____.]",
          "difficulty": "2",
          "steps": [
            "「建案/專案」且字首為 p[TTS:p]：project[TTS:project]。",
            "「明年」的「年」且字首為 y[TTS:y]：year[TTS:year]。",
            "確認名詞單複數，project[TTS:project] 為單數。"
          ],
          "answer": "project, year[TTS:project, year]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "句子重組：concrete / is / material / commonly / used / construction / a / .[TTS:concrete / is / material / commonly / used / construction / a / .]\n(混凝土是一種常用的建築材料。)",
          "difficulty": "2",
          "steps": [
            "主詞：concrete[TTS:concrete]",
            "動詞：is[TTS:is]",
            "補語(冠詞+副詞+形容詞+名詞)：a commonly used construction material[TTS:a commonly used construction material]",
            "組合：Concrete is a commonly used construction material.[TTS:Concrete is a commonly used construction material.]"
          ],
          "answer": "Concrete is a commonly used construction material.[TTS:Concrete is a commonly used construction material.]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "中譯英：這名工程師每天早上八點抵達工地。",
          "difficulty": "2",
          "steps": [
            "主詞「這名工程師」：The engineer[TTS:The engineer]。",
            "動詞「抵達」：arrives at[TTS:arrives at] / reaches[TTS:reaches]。",
            "受詞/地點「工地」：the construction site[TTS:the construction site]。",
            "時間副詞「每天早上八點」：at 8 a.m. every morning[TTS:at 8 a.m. every morning] / at eight o'clock every morning[TTS:at eight o'clock every morning]。",
            "組合並注意主詞為第三人稱單數，動詞需加 s[TTS:s]。"
          ],
          "answer": "The engineer arrives at the construction site at 8 a.m. every morning.[TTS:The engineer arrives at the construction site at 8 a.m. every morning.]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "對話翻譯：\nA: 我們什麼時候開始澆置混凝土？\nB: 一旦模板完成我們就開始。\n(A) A: When do we start pouring the concrete?[TTS:When do we start pouring the concrete?]\n    B: We will start as soon as the formwork is finished.[TTS:We will start as soon as the formwork is finished.]\n(B) A: Why do we pour the concrete?[TTS:Why do we pour the concrete?]\n    B: We finish the formwork early.[TTS:We finish the formwork early.]\n(C) A: Where is the concrete?[TTS:Where is the concrete?]\n    B: The formwork is over there.[TTS:The formwork is over there.]\n(D) A: How do we pour the concrete?[TTS:How do we pour the concrete?]\n    B: The formwork is strong.[TTS:The formwork is strong.]",
          "difficulty": "2",
          "steps": [
            "分析A句意：「我們什麼時候開始澆置混凝土？」詢問時間，對應 When do we start pouring the concrete?[TTS:When do we start pouring the concrete?]",
            "分析B句意：「一旦模板完成我們就開始。」對應 We will start as soon as the formwork is finished.[TTS:We will start as soon as the formwork is finished.]",
            "選項(A)的對話最精準傳達了雙方的意思。"
          ],
          "answer": "(A) A: When do we start pouring the concrete?[TTS:When do we start pouring the concrete?] B: We will start as soon as the formwork is finished.[TTS:We will start as soon as the formwork is finished.]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        },
        {
          "question": "情境對話中譯英：\nEngineer: You need to modify this blueprint.[TTS:You need to modify this blueprint.]\nContractor: No problem, I will update it this afternoon.[TTS:No problem, I will update it this afternoon.]\n(工程師：你需要修改這份藍圖。)\n(承包商：沒問題，我今天下午就會更新它。)",
          "difficulty": "2",
          "steps": [
            "分析工程師句意：「你需要修改這份藍圖。」主詞 You[TTS:You]，動詞 need to modify[TTS:need to modify]，受詞 this blueprint[TTS:this blueprint]。",
            "分析承包商句意：「沒問題，我今天下午就會更新它。」No problem[TTS:No problem]，主詞 I[TTS:I]，動詞 will update[TTS:will update]，受詞 it[TTS:it]，時間 this afternoon[TTS:this afternoon]。",
            "組合為完整的對話。"
          ],
          "answer": "Engineer: You need to modify this blueprint.[TTS:You need to modify this blueprint.]\nContractor: No problem, I will update it this afternoon.[TTS:No problem, I will update it this afternoon.]",
          "hints": [
            "先判斷空格所需之詞性或句型語法功能",
            "尋找題目中的關鍵字與語境線索"
          ],
          "commonMistake": "容易受到形近字、干擾選項之字面意思誤導，或忽略時態與主謂一致性。",
          "eliteShortcut": "語境線索定位法：圈出關鍵動詞與受詞，直接鎖定固定搭配或核心語意！"
        }
      ],
      "step0Prerequisites": [
        "基本五大句型造句能力",
        "中英文化思維與語序差異 (中文注重主題，英文注重主謂結構)",
        "常見標點符號用法與大小寫規則"
      ]
    }
  ]
};
