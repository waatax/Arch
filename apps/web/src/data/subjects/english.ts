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
          "trapDescription": "統測英文常考一字多義，若只背最常見的中文意思，遇到不同情境或詞性轉換時容易選錯。土木領域常見名詞如 column [TTS:column] (圓柱/專欄) 需視情境判斷。"
        }
      ],
      "eliteMentalModels": [
        {
          "technique": "構詞拆解法",
          "explanation": "遇到長單字時，先找字首(影響方向/否定)、字根(核心意義)、字尾(決定詞性)，例如 con- [TTS:con-] (共同) + struct [TTS:struct] (建立) = construct [TTS:construct] (建築)。"
        }
      ],
      "worked_examples": [
        {
          "question": "The structural engineer must carefully _______ the load-bearing capacity of the new material before using it in the skyscraper. [TTS:The structural engineer must carefully _______ the load-bearing capacity of the new material before using it in the skyscraper.]\n(A) calculate [TTS:calculate] (B) confuse [TTS:confuse] (C) decorate [TTS:decorate] (D) destroy [TTS:destroy]",
          "difficulty": "3",
          "steps": [
            "分析句子主詞：The structural engineer [TTS:The structural engineer] (結構工程師)。",
            "分析受詞：the load-bearing capacity [TTS:the load-bearing capacity] (承載能力)。",
            "根據語意，工程師必須「計算/評估」承載能力，而不是困惑(confuse [TTS:confuse])、裝飾(decorate [TTS:decorate])或破壞(destroy [TTS:destroy])。"
          ],
          "answer": "A"
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
          "body": "<p>英文中，同一個動詞加上不同的<span className=\"text-blue-600 font-bold\">介系詞</span>會產生完全不同的意義。這是統測必考題型，必須熟記常見動詞 (如 look [TTS:look], take [TTS:take], put [TTS:put], get [TTS:get]) 的片語搭配。</p>\n\n[DIALOGUE_START:動詞片語會話：工地任務執行]\nForeman: We need to carry out the safety inspection before pouring concrete. | 我們在澆置混凝土之前，必須先執行安全檢查。\nWorker: Understood. I will look into the rebar spacing right away. | 收到。我會立刻仔細檢查鋼筋的間距。\nForeman: Great. Make sure everyone puts on their safety gear. | 很好。請確保每個人都穿戴好安全裝備。\nWorker: All workers have already put on their helmets and boots. | 所有工人都已經戴好安全帽並穿上安全鞋了。\n[DIALOGUE_END]",
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
          "answer": "B"
        },
        {
          "question": "Concrete is a very strong and durable ________ commonly used in modern buildings and bridges. [TTS:Concrete is a very strong and durable ________ commonly used in modern buildings and bridges.]\n(A) emotion [TTS:emotion] (B) material [TTS:material] (C) fashion [TTS:fashion] (D) weather [TTS:weather]",
          "difficulty": "1",
          "steps": [
            "分析關鍵字：Concrete [TTS:Concrete] (混凝土) 是一種堅固且耐用的 ___，廣泛用於現代建築和橋樑。",
            "判斷邏輯：混凝土是一種「材料」。",
            "選項分析：(A) 情緒 (B) 材料 (C) 時尚 (D) 天氣。故選(B)。"
          ],
          "answer": "B"
        },
        {
          "question": "It is important to wear a safety ________ on the construction site to protect your head from falling objects. [TTS:It is important to wear a safety ________ on the construction site to protect your head from falling objects.]\n(A) helmet [TTS:helmet] (B) glove [TTS:glove] (C) boot [TTS:boot] (D) vest [TTS:vest]",
          "difficulty": "1",
          "steps": [
            "分析句意：在工地戴安全 ___ 以保護頭部(head [TTS:head])免受掉落物傷害是很重要的。",
            "判斷邏輯：保護頭部的安全裝備是「頭盔/安全帽」。",
            "選項分析：(A) 頭盔 (B) 手套 (C) 靴子 (D) 背心。故選(A)。"
          ],
          "answer": "A"
        },
        {
          "question": "Because of the heavy rain, the project manager decided to ________ the outdoor painting work until next week. [TTS:Because of the heavy rain, the project manager decided to ________ the outdoor painting work until next week.]\n(A) put off [TTS:put off] (B) look for [TTS:look for] (C) give up [TTS:give up] (D) turn on [TTS:turn on]",
          "difficulty": "3",
          "steps": [
            "分析句意：因為大雨，專案經理決定將戶外油漆工作 ___ 到下週。",
            "判斷邏輯：遇到大雨，原定計畫會被「延期」。",
            "選項分析：(A) 延期 (B) 尋找 (C) 放棄 (D) 打開。故選(A)。"
          ],
          "answer": "A"
        },
        {
          "question": "Before building the house, the architect drew a detailed ________ to show where each room would be. [TTS:Before building the house, the architect drew a detailed ________ to show where each room would be.]\n(A) receipt [TTS:receipt] (B) menu [TTS:menu] (C) plan [TTS:plan] (D) ticket [TTS:ticket]",
          "difficulty": "1",
          "steps": [
            "分析句意：在建屋前，建築師畫了一份詳細的 ___ 來展示每個房間的位置。",
            "判斷邏輯：建築師會畫「平面圖 / 計畫圖」。",
            "選項分析：(A) 收據 (B) 菜單 (C) 計畫/圖紙 (D) 票。故選(C)。"
          ],
          "answer": "C"
        },
        {
          "question": "The steel beams are ________ enough to support the weight of the entire roof without bending. [TTS:The steel beams are ________ enough to support the weight of the entire roof without bending.]\n(A) weak [TTS:weak] (B) strong [TTS:strong] (C) soft [TTS:soft] (D) tiny [TTS:tiny]",
          "difficulty": "2",
          "steps": [
            "分析句意：鋼樑夠 ___，能支撐整個屋頂的重量而不會彎曲。",
            "判斷邏輯：能支撐重物不彎曲，表示必須很「堅固」。",
            "選項分析：(A) 虛弱的 (B) 堅固的 (C) 柔軟的 (D) 微小的。故選(B)。"
          ],
          "answer": "B"
        },
        {
          "question": "I was really ________ when I saw the beautiful interior design of the new library. [TTS:I was really ________ when I saw the beautiful interior design of the new library.]\n(A) amaze [TTS:amaze] (B) amazing [TTS:amazing] (C) amazed [TTS:amazed] (D) to amaze [TTS:to amaze]",
          "difficulty": "3",
          "steps": [
            "分析句型：主詞是 I [TTS:I] (人)，搭配 be 動詞 was [TTS:was]。表示人「感到...的」。",
            "判斷詞性與用法：形容人感到驚訝或驚豔，應使用 -ed 結尾的情緒形容詞。",
            "選項分析：(A) 動詞 (B) 令人驚奇的 (C) 感到驚奇的 (D) 不定詞。故選(C)。"
          ],
          "answer": "C"
        },
        {
          "question": "Due to the lack of funds, the government had to ________ the highway construction project. [TTS:Due to the lack of funds, the government had to ________ the highway construction project.]\n(A) complete [TTS:complete] (B) expand [TTS:expand] (C) cancel [TTS:cancel] (D) measure [TTS:measure]",
          "difficulty": "2",
          "steps": [
            "分析句意：因為缺乏資金(lack of funds [TTS:lack of funds])，政府必須 ___ 高速公路建設專案。",
            "判斷邏輯：沒有錢就無法繼續，通常會「取消」或「暫停」。",
            "選項分析：(A) 完成 (B) 擴展 (C) 取消 (D) 測量。故選(C)。"
          ],
          "answer": "C"
        }
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
          "wrongThinking": "看到 for 或 since 就無腦選現在完成式，或者看到過去時間就一律用過去式，忽略語境。",
          "correctThinking": "時態由「時間標記」和「動作特性」共同決定。since 配過去時間點通常接現在完成式，但若敘述已結束的歷史事件則用過去式。",
          "trapDescription": "統測常將完成式的時間副詞與干擾選項放在一起，測驗考生是否真正理解動作「從過去持續到現在」或「對現在造成影響」。"
        }
      ],
      "eliteMentalModels": [
        {
          "technique": "結構拆解法 (Structural Parsing)",
          "explanation": "遇到長難句時，先找句子的靈魂：動詞 (V)，再往前找主詞 (S)，接著判斷後面是受詞 (O)、補語 (C) 還是修飾語 (M)。剔除介系詞片語等修飾語後，句型就會無所遁形。"
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
          "answer": "(A) will be[TTS:will be]\n(B) is[TTS:is]\n(C) has been[TTS:has been]\n(D) was[TTS:was]\n\n答案：(A)"
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
          "body": "英文句子由主詞 (S)、動詞 (V)、受詞 (O)、補語 (C) 等元素組成。動詞的性質決定了句子的基本架構，土木建築常描述結構體，多用這五大句型。\n\n[DIALOGUE_START:五大句型會話：清楚傳達工程指令]\nArchitect: The client considers the new lobby spacious and modern. | 業主認為新的大廳既寬敞又具現代感。\nAssistant: That is an S + V + O + OC sentence pattern, right? | 那是「主詞 + 動詞 + 受詞 + 受詞補語」的句型，對吧？\nArchitect: Yes. Mastering basic sentence patterns helps you write clear reports. | 是的。掌握基本句型能幫助你寫出條理清晰的報告。\nAssistant: I will keep my project descriptions concise and accurate. | 我會讓專案說明保持簡潔且精準。\n[DIALOGUE_END]",
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
          "body": "時態表達動作發生的時間和狀態。分為現在、過去、未來，以及簡單、進行、完成、完成進行。統測最愛考現在完成式，表示從過去持續到現在的動作或經驗。\n\n[DIALOGUE_START:時態會話：工程里程碑進度確認]\nInspector: Have you finished pouring the concrete for the third-floor slab? | 三樓樓板的混凝土澆置已經完成了嗎？\nSupervisor: Yes, we have just completed it, and the curing process is ongoing. | 是的，我們剛剛完成，目前正在進行養護作業。\nInspector: Good. We will inspect the compressive strength next Monday. | 很好。我們下週一會檢驗抗壓強度。\nSupervisor: We will have all laboratory test reports ready by then. | 屆時我們會準備好所有實驗室的檢驗報告。\n[DIALOGUE_END]",
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
                "過去的單一事件 (V-ed)",
                "We finished the foundation yesterday.[TTS:We finished the foundation yesterday.] (我們昨天完成了地基。)"
              ],
              [
                "現在完成式",
                "過去發生持續到現在，或對現在有影響 (have/has + p.p.)",
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
          "answer": "(A) will be[TTS:will be]\n(B) has been[TTS:has been]\n(C) was[TTS:was]\n(D) is[TTS:is]\n\n答案：(A)"
        },
        {
          "question": "We have _______ working on this architectural design for three weeks.[TTS:We have _______ working on this architectural design for three weeks.]",
          "difficulty": "mid",
          "steps": [
            "句中有 for three weeks，通常搭配完成式。",
            "空格後為 V-ing (working)，與前面的 have 組合，應為現在完成進行式 (have been + V-ing[TTS:have been + V-ing])。"
          ],
          "answer": "(A) be[TTS:be]\n(B) being[TTS:being]\n(C) been[TTS:been]\n(D) was[TTS:was]\n\n答案：(C)"
        },
        {
          "question": "The engineer decided _______ steel instead of wood for the frame.[TTS:The engineer decided _______ steel instead of wood for the frame.]",
          "difficulty": "mid",
          "steps": [
            "動詞 decide 後面固定接不定詞 (to V[TTS:to V]) 作為受詞。",
            "因此選擇 to use[TTS:to use]。"
          ],
          "answer": "(A) use[TTS:use]\n(B) to use[TTS:to use]\n(C) using[TTS:using]\n(D) used[TTS:used]\n\n答案：(B)"
        },
        {
          "question": "Steel is much _______ than wood, making it suitable for skyscrapers.[TTS:Steel is much _______ than wood, making it suitable for skyscrapers.]",
          "difficulty": "easy",
          "steps": [
            "句中有 than，表示需要使用比較級。",
            "strong 的比較級為 stronger[TTS:stronger]。",
            "much 可以用來修飾比較級。"
          ],
          "answer": "(A) strong[TTS:strong]\n(B) stronger[TTS:stronger]\n(C) strongest[TTS:strongest]\n(D) more strong[TTS:more strong]\n\n答案：(B)"
        },
        {
          "question": "It is essential _______ all safety guidelines at the construction site.[TTS:It is essential _______ all safety guidelines at the construction site.]",
          "difficulty": "mid",
          "steps": [
            "此為虛主詞句型：It is + 形容詞 + to V [TTS:It is + 形容詞 + to V]。",
            "真正的主詞為後面的不定詞片語。"
          ],
          "answer": "(A) follow[TTS:follow]\n(B) following[TTS:following]\n(C) to follow[TTS:to follow]\n(D) followed[TTS:followed]\n\n答案：(C)"
        },
        {
          "question": "Before they started digging, the workers _______ the underground pipes.[TTS:Before they started digging, the workers _______ the underground pipes.]",
          "difficulty": "hard",
          "steps": [
            "句子有兩個過去發生的動作。started (開始) 發生在過去。",
            "檢查管線 (check) 發生在開始挖掘之前，即「過去的過去」，應使用過去完成式 (had + p.p. [TTS:had + p.p.])。"
          ],
          "answer": "(A) check[TTS:check]\n(B) are checking[TTS:are checking]\n(C) have checked[TTS:have checked]\n(D) had checked[TTS:had checked]\n\n答案：(D)"
        },
        {
          "question": "I found _______ necessary to wear a hard hat in this area.[TTS:I found _______ necessary to wear a hard hat in this area.]",
          "difficulty": "mid",
          "steps": [
            "此為虛受詞句型：S + find/make/think + it + O.C. + to V [TTS:S + find/make/think + it + O.C. + to V]。",
            "空格處需填入虛受詞 it[TTS:it]。"
          ],
          "answer": "(A) that[TTS:that]\n(B) this[TTS:this]\n(C) it[TTS:it]\n(D) them[TTS:them]\n\n答案：(C)"
        },
        {
          "question": "The client wants the interior design _______ as soon as possible.[TTS:The client wants the interior design _______ as soon as possible.]",
          "difficulty": "hard",
          "steps": [
            "want + O + to V [TTS:want + O + to V]，但當受詞與動詞間為被動關係時，可接不定詞的被動態 to be p.p. [TTS:to be p.p.]。",
            "the interior design (室內設計) 與 finish (完成) 為被動關係，選項中只有 to be finished[TTS:to be finished] 符合。"
          ],
          "answer": "(A) finish[TTS:finish]\n(B) to finish[TTS:to finish]\n(C) to be finished[TTS:to be finished]\n(D) finishing[TTS:finishing]\n\n答案：(C)"
        }
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
          "wrongThinking": "在對話題中看到認識的單字就急著選，不看上下文",
          "correctThinking": "必須讀完 A 與 B 雙方的對話，理解說話者的意圖與情境。有時候認識的單字是干擾選項",
          "trapDescription": "統測對話題常使用「字面相似但語意不同」的選項來混淆考生，例如選項有 building[TTS:building]，就以為一定跟土木建築有關，但可能是指建立關係(building relationships[TTS:building relationships])。"
        }
      ],
      "eliteMentalModels": [
        {
          "technique": "W-H 問句定位法",
          "explanation": "聽到或看到 Who[TTS:Who], When[TTS:When], Where[TTS:Where], What[TTS:What], Why[TTS:Why], How[TTS:How] 時，立刻預期回答的內容。例如 What time[TTS:What time] 必定回答時間，Where[TTS:Where] 必定回答地點或工地位置。"
        },
        {
          "technique": "語氣轉折判斷",
          "explanation": "注意對話中的 But[TTS:But], However[TTS:However], Actually[TTS:Actually] 等轉折詞，通常重點及正確答案的線索會出現在轉折詞之後。"
        }
      ],
      "worked_examples": [
        {
          "question": "A: Excuse me, do you know where the engineering department is?[TTS:Excuse me, do you know where the engineering department is?]\nB: _________\n(A) It is built of concrete.[TTS:It is built of concrete.]\n(B) Yes, it is on the third floor of that brick building.[TTS:Yes, it is on the third floor of that brick building.]\n(C) I am studying civil engineering.[TTS:I am studying civil engineering.]\n(D) The department is very large.[TTS:The department is very large.]",
          "difficulty": "1",
          "steps": [
            "步驟一：分析A的句子「do you know where...[TTS:do you know where...]」是在詢問地點。",
            "步驟二：檢視選項，尋找表達地點的回答。",
            "步驟三：(A) 描述材質，(C) 描述自己的科系，(D) 描述大小。只有 (B) 回答了具體位置「on the third floor of that brick building[TTS:on the third floor of that brick building] (在那棟磚造建築的三樓)」。"
          ],
          "answer": "B"
        },
        {
          "question": "A: How would you like your steak?[TTS:How would you like your steak?]\nB: _________\n(A) I like it very much.[TTS:I like it very much.]\n(B) Medium-rare, please.[TTS:Medium-rare, please.]\n(C) It costs 500 dollars.[TTS:It costs 500 dollars.]\n(D) I usually go there by bus.[TTS:I usually go there by bus.]",
          "difficulty": "1",
          "steps": [
            "此為餐飲情境的經典問句。",
            "「How would you like your steak?[TTS:How would you like your steak?]」是在詢問牛排的熟度。",
            "(A) 我非常喜歡它 (答非所問)\n(B) 請給我三分熟 (符合語境)\n(C) 它要價 500 元 (詢問價格才這樣回答)\n(D) 我通常搭公車去那裡 (詢問交通方式才這樣回答)"
          ],
          "answer": "B"
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
          "body": "統測對話題通常篇幅不長，關鍵在於迅速抓出對話的「情境(Context)[TTS:Context]」與說話者的「意圖(Intention)[TTS:Intention]」。\n\n**解題步驟:**\n1. **判斷角色關係:** 是朋友、師生、店員與顧客，還是工頭與工人？這會影響用語的正式程度。\n2. **尋找關鍵字:** 注意表達時間、地點、情緒或特定主題的單字。\n3. **利用刪去法:** 排除語氣不對、時態不符或與情境無關的選項。\n4. **前後呼應:** 空格處的答案必須能承接上一句，並自然地引導出下一句。\n\n[DIALOGUE_START:統測對話解題會話：捕捉關鍵轉折詞]\nTutor: In dialogue questions, always pay attention to tone shifts and polite refusals. | 在對話題型中，一定要特別注意語氣轉折與委婉拒絕。\nStudent: Like when a speaker says \"I'd love to, but I have a prior commitment\"? | 就像說話者說「我很想去，但我已經有約了」這樣嗎？\nTutor: Exactly! That indicates a polite \"no\", which usually rules out affirmative choices. | 沒錯！那代表委婉的拒絕，通常可以直接排除肯定的選項。\nStudent: Catching these conversational cues makes answering much easier! | 掌握這些對話線索讓作答變得容易多了！\n[DIALOGUE_END]"
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
          "answer": "A"
        },
        {
          "question": "A: Excuse me, _________[TTS:Excuse me, _________]\nB: Go straight for two blocks and turn left. You will see it on your right.[TTS:Go straight for two blocks and turn left. You will see it on your right.]\n(A) what time does the train leave?[TTS:what time does the train leave?]\n(B) how much is this jacket?[TTS:how much is this jacket?]\n(C) can you tell me how to get to the hardware store?[TTS:can you tell me how to get to the hardware store?]\n(D) do you know who designed this bridge?[TTS:do you know who designed this bridge?]",
          "difficulty": "2",
          "steps": [
            "分析B的回答：「直走兩個街區然後左轉。你就會看到它在你的右手邊。」這是在報路。",
            "因此A必定是問路。",
            "選項(C)「你能告訴我怎麼去五金行嗎？」符合問路的語境。"
          ],
          "answer": "C"
        },
        {
          "question": "A: I heard you passed the surveying licensing exam. _________[TTS:I heard you passed the surveying licensing exam. _________]\nB: Thanks! I studied really hard for it.[TTS:Thanks! I studied really hard for it.]\n(A) What a pity![TTS:What a pity!]\n(B) Congratulations![TTS:Congratulations!]\n(C) I am sorry to hear that.[TTS:I am sorry to hear that.]\n(D) Better luck next time.[TTS:Better luck next time.]",
          "difficulty": "1",
          "steps": [
            "A說聽聞B通過了測量執照考試。這是一件好事。",
            "B回答「謝謝！我很努力準備」。",
            "A應該是表達祝賀。(B) Congratulations![TTS:Congratulations!] (恭喜！) 是正確答案。"
          ],
          "answer": "B"
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
          "answer": "B"
        },
        {
          "question": "A: _________\nB: Yes, I am looking for a specific type of floor tile for my bathroom.[TTS:Yes, I am looking for a specific type of floor tile for my bathroom.]\n(A) What are you looking at?[TTS:What are you looking at?]\n(B) Can I help you find something?[TTS:Can I help you find something?]\n(C) How much do you want to pay?[TTS:How much do you want to pay?]\n(D) Do you like my new bathroom?[TTS:Do you like my new bathroom?]",
          "difficulty": "2",
          "steps": [
            "B回答：「是的，我在尋找一種特定類型的浴室地磚。」這通常發生在商店裡，B是顧客。",
            "因此A應該是店員，且A的問題是個Yes/No[TTS:Yes/No]問句(因為B回答Yes[TTS:Yes])。",
            "(B) 「需要我幫您找什麼嗎？」是店員招呼顧客的常見用語，符合情境。"
          ],
          "answer": "B"
        },
        {
          "question": "A: I'm terribly sorry for dropping your architectural model.[TTS:I'm terribly sorry for dropping your architectural model.]\nB: _________ Just be more careful next time.[TTS:_________ Just be more careful next time.]\n(A) You are welcome.[TTS:You are welcome.]\n(B) That's a good idea.[TTS:That's a good idea.]\n(C) Don't worry about it.[TTS:Don't worry about it.]\n(D) I appreciate it.[TTS:I appreciate it.]",
          "difficulty": "2",
          "steps": [
            "A表達道歉：「非常抱歉摔壞了你的建築模型。」",
            "B回答：「下次小心點就好。」",
            "空格處應為接受道歉的用語。(C) Don't worry about it.[TTS:Don't worry about it.] (別擔心/沒關係) 是最合適的回答。"
          ],
          "answer": "C"
        },
        {
          "question": "A: Did you remember to bring the safety boots to the site today?[TTS:Did you remember to bring the safety boots to the site today?]\nB: Oh no! _________[TTS:Oh no! _________]\n(A) I left them in my locker.[TTS:I left them in my locker.]\n(B) I will buy you a drink.[TTS:I will buy you a drink.]\n(C) They are very expensive.[TTS:They are very expensive.]\n(D) The site is dangerous.[TTS:The site is dangerous.]",
          "difficulty": "2",
          "steps": [
            "A問：「你今天有記得帶安全靴來工地嗎？」",
            "B驚呼「Oh no![TTS:Oh no!] (喔不！)」，表示B忘記帶了。",
            "空格處必須解釋為什麼B說Oh no[TTS:Oh no]。(A)「我把它們留在置物櫃裡了」合理地解釋了忘記帶的情況。"
          ],
          "answer": "A"
        },
        {
          "question": "A: What time does the structural mechanics lecture start?[TTS:What time does the structural mechanics lecture start?]\nB: _________\n(A) It starts at 9:00 AM.[TTS:It starts at 9:00 AM.]\n(B) It is in room 101.[TTS:It is in room 101.]\n(C) Professor Smith teaches it.[TTS:Professor Smith teaches it.]\n(D) I forgot to bring my textbook.[TTS:I forgot to bring my textbook.]",
          "difficulty": "1",
          "steps": [
            "A問：「結構力學的講座什麼時候開始？」此為詢問時間(What time[TTS:What time])。",
            "B應該回答時間。",
            "(A) 回答了具體時間「9:00 AM」，因此為正確答案。"
          ],
          "answer": "A"
        }
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
          "wrongThinking": "從文章的第一個字讀到最後一個字，遇到不會的單字就卡住，導致時間不夠。",
          "correctThinking": "應該先看題目問什麼，再帶回文章中用掃讀(Scanning)找關鍵字；遇到生字時利用上下文線索猜測詞義，不要執著於看懂每個字。",
          "trapDescription": "統測英文考試時間有限，逐字翻譯不僅耗時，更容易在生字上產生挫折感，進而影響後續題目的作答心情與時間分配。"
        }
      ],
      "eliteMentalModels": [
        {
          "technique": "題文相符定位法 (Question-to-Text Mapping[TTS:Question-to-Text Mapping])",
          "explanation": "通常閱讀測驗的題目順序與文章段落順序是一致的。第一題的答案大多在第一段或第二段前半部，最後一題(除了主旨題外)通常在文章後段。利用這個原則能快速鎖定尋找答案的範圍。"
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
          "answer": "(A) An introduction to concrete as a construction material.[TTS:A) An introduction to concrete as a construction material.]"
        },
        {
          "question": "Dialogue Example 1:\nA: I can't figure out the meaning of 'sustainable' in this passage.\nB: Look at the context clues. The passage mentions 'using renewable energy' and 'reducing waste'.\nA: Ah, I see!\n\nQuestion: What does B suggest A do?[TTS:Dialogue Example 1:\nA: I can't figure out the meaning of 'sustainable' in this passage.\nB: Look at the context clues. The passage mentions 'using renewable energy' and 'reducing waste'.\nA: Ah, I see!\n\nQuestion: What does B suggest A do?]",
          "difficulty": "2",
          "steps": [
            "1. Read the dialogue.[TTS:Read the dialogue.]",
            "2. Identify B's advice.[TTS:Identify B's advice.]"
          ],
          "answer": "Look at the context clues.[TTS:Look at the context clues.]"
        },
        {
          "question": "Dialogue Example 2:\nA: Skimming is too hard. I keep stopping at words I don't know.\nB: You shouldn't do that. Just read the first and last sentences of each paragraph to get the main idea.\n\nQuestion: According to B, how should one skim a passage?[TTS:Dialogue Example 2:\nA: Skimming is too hard. I keep stopping at words I don't know.\nB: You shouldn't do that. Just read the first and last sentences of each paragraph to get the main idea.\n\nQuestion: According to B, how should one skim a passage?]",
          "difficulty": "2",
          "steps": [
            "1. Read the dialogue.[TTS:Read the dialogue.]",
            "2. Identify B's explanation of skimming.[TTS:Identify B's explanation of skimming.]"
          ],
          "answer": "By reading the first and last sentences of each paragraph.[TTS:By reading the first and last sentences of each paragraph.]"
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
          "body": "統測閱讀測驗可歸納為四大題型：\n1. **主旨題**：抓首尾段、各段主題句。\n2. **細節題**：抓題幹關鍵字回文章找同義替換。\n3. **詞義題**：回到該單字出現的段落，利用上下文線索(Context Clues[TTS:Context Clues])推敲。\n4. **推論/是非題 (True/False)**：最耗時的題型，建議將四個選項的關鍵字分別帶回文章比對。\n\n[DIALOGUE_START:閱讀題型攻略會話：時間管理與作答節奏]\nStudent: I often run out of time on the reading section of the Unified Exam. | 我在統測英文的閱讀測驗部分經常寫不完。\nAdvisor: Read the questions first before reading the article to focus your attention. | 在讀文章前先看題目，這樣能集中你的注意力。\nStudent: That way, I know exactly what keywords and details to look for! | 這樣一來我就確切知道該找哪些關鍵字與細節了！\nAdvisor: Exactly. Aim for no more than eight minutes per reading passage. | 沒錯。目標是每篇閱讀測驗不超過八分鐘。\n[DIALOGUE_END]"
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
          "answer": "Methods of green building to reduce environmental impact.[TTS:Methods of green building to reduce environmental impact.]"
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
          "answer": "Change or modify.[TTS:Change or modify.]"
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
          "answer": "To be easily seen by machine operators.[TTS:To be easily seen by machine operators.]"
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
          "answer": "The Eiffel Tower was not loved by all French artists when it was first built.[TTS:The Eiffel Tower was not loved by all French artists when it was first built.]"
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
          "answer": "The construction project may be delayed due to the late arrival of materials.[TTS:The construction project may be delayed due to the late arrival of materials.]"
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
          "answer": "Adobe bricks are dried in the sun, while traditional bricks are baked in a kiln.[TTS:Adobe bricks are dried in the sun, while traditional bricks are baked in a kiln.]"
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
          "answer": "Required by rules or law.[TTS:Required by rules or law.]"
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
          "answer": "To prevent the building from sinking or tilting.[TTS:To prevent the building from sinking or tilting.]"
        }
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
          "wrongThinking": "背專業字彙時只背中文意思，例如把 \"Beam\"[TTS:Beam] 跟 \"Column\"[TTS:Column] 都當作「柱子」。",
          "correctThinking": "結合建築結構與圖解來記憶字彙，Beam[TTS:Beam] 是橫向的樑，Column[TTS:Column] 是直向的柱，兩者受力與功能完全不同。",
          "trapDescription": "土木建築單字高度依賴空間與實體概念，僅靠字面中譯容易在閱讀題或情境題中誤判圖面關係。"
        }
      ],
      "eliteMentalModels": [
        {
          "technique": "語境歸類記憶法 (Contextual Grouping[TTS:Contextual Grouping])",
          "explanation": "將字彙以施工階段或類別進行歸類，例如將「測量」儀器歸為一類，將「結構體」元件歸為一類，避免字母序背誦導致記憶混亂。"
        }
      ],
      "covered_question_ids": [],
      "worked_examples": [
        {
          "question": "In a construction site, workers must wear a ________ to protect their heads from falling objects.[TTS:In a construction site, workers must wear a ________ to protect their heads from falling objects.]\n(A) Hard Hat[TTS:Hard Hat] (B) Beam[TTS:Beam] (C) Blueprint[TTS:Blueprint] (D) Level[TTS:Level]",
          "difficulty": "1",
          "steps": [
            "分析題意：在建築工地，工人必須戴某物來保護頭部免受掉落物傷害。",
            "尋找關鍵字：protect their heads[TTS:protect their heads] (保護頭部)、falling objects[TTS:falling objects] (掉落物)。",
            "判斷選項詞彙：頭部防護具為安全帽，對應的專業字彙是 Hard Hat[TTS:Hard Hat]。"
          ],
          "answer": "A"
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
          "answer": "B"
        },
        {
          "question": "A ________ is a drawing that shows the layout of a building as viewed from above.[TTS:A ________ is a drawing that shows the layout of a building as viewed from above.]\n(A) Elevation[TTS:Elevation] (B) Section[TTS:Section] (C) Floor Plan[TTS:Floor Plan] (D) Detail[TTS:Detail]",
          "difficulty": "1",
          "steps": [
            "分析題意：哪一種圖是從上方鳥瞰顯示建築物配置的圖面？",
            "選項評估：(A) Elevation[TTS:Elevation](立面圖), (B) Section[TTS:Section](剖面圖), (C) Floor Plan[TTS:Floor Plan](平面圖), (D) Detail[TTS:Detail](詳圖)。",
            "結論：Floor Plan[TTS:Floor Plan] 就是平面圖，顯示從上往下的空間配置。"
          ],
          "answer": "C"
        },
        {
          "question": "Before pouring concrete into the foundation, workers must finish the ________ placement.[TTS:Before pouring concrete into the foundation, workers must finish the ________ placement.]\n(A) Curing[TTS:Curing] (B) Scaffolding[TTS:Scaffolding] (C) Rebar[TTS:Rebar] (D) Asphalt[TTS:Asphalt]",
          "difficulty": "2",
          "steps": [
            "分析題意：在將混凝土澆置入基礎前，工人必須完成什麼的放置(綁紮)？",
            "選項評估：RC[TTS:RC]工程的順序為：模板->鋼筋->澆置。(A) Curing[TTS:Curing](養護), (B) Scaffolding[TTS:Scaffolding](鷹架), (C) Rebar[TTS:Rebar](鋼筋), (D) Asphalt[TTS:Asphalt](瀝青)。",
            "結論：必須先完成鋼筋綁紮 (Rebar placement[TTS:Rebar placement])。"
          ],
          "answer": "C"
        },
        {
          "question": "To ensure accuracy, the surveyor uses a ________ to measure both horizontal and vertical angles on the site.[TTS:To ensure accuracy, the surveyor uses a ________ to measure both horizontal and vertical angles on the site.]\n(A) Prism[TTS:Prism] (B) Benchmark[TTS:Benchmark] (C) Total Station[TTS:Total Station] (D) Hard Hat[TTS:Hard Hat]",
          "difficulty": "2",
          "steps": [
            "分析題意：為了確保精度，測量員使用某儀器來測量工地現場的水平與垂直角。",
            "選項評估：(A) Prism[TTS:Prism](稜鏡), (B) Benchmark[TTS:Benchmark](水準點), (C) Total Station[TTS:Total Station](全測站儀), (D) Hard Hat[TTS:Hard Hat](安全帽)。",
            "結論：Total Station[TTS:Total Station] (全測站儀) 或經緯儀可用來測量角度。"
          ],
          "answer": "C"
        },
        {
          "question": "Which of the following is NOT a type of Personal Protective Equipment (PPE)?[TTS:Which of the following is NOT a type of Personal Protective Equipment (PPE)?]\n(A) Steel-toe Boots[TTS:Steel-toe Boots] (B) Goggles[TTS:Goggles] (C) Safety Harness[TTS:Safety Harness] (D) Excavation[TTS:Excavation]",
          "difficulty": "1",
          "steps": [
            "分析題意：下列何者「不是」個人防護裝備 (PPE[TTS:PPE])？",
            "選項評估：(A) Steel-toe Boots[TTS:Steel-toe Boots](安全鞋), (B) Goggles[TTS:Goggles](護目鏡), (C) Safety Harness[TTS:Safety Harness](安全吊帶), (D) Excavation[TTS:Excavation](開挖)。",
            "結論：Excavation[TTS:Excavation] 是施工方法(開挖)，非裝備。"
          ],
          "answer": "D"
        },
        {
          "question": "The weight of the building itself, including walls and floors, is referred to as the ________.[TTS:The weight of the building itself, including walls and floors, is referred to as the ________.]\n(A) Live Load[TTS:Live Load] (B) Dead Load[TTS:Dead Load] (C) Wind Load[TTS:Wind Load] (D) Seismic Load[TTS:Seismic Load]",
          "difficulty": "2",
          "steps": [
            "分析題意：建築物本身的重量，包含牆壁與樓板，被稱為什麼？",
            "選項評估：(A) Live Load[TTS:Live Load](活載重), (B) Dead Load[TTS:Dead Load](靜載重), (C) Wind Load[TTS:Wind Load](風載重), (D) Seismic Load[TTS:Seismic Load](地震力)。",
            "結論：建築物的自重屬於 Dead Load[TTS:Dead Load]。"
          ],
          "answer": "B"
        },
        {
          "question": "________ is a mixture of cement, sand, and water, often used to bind bricks or concrete blocks together.[TTS:________ is a mixture of cement, sand, and water, often used to bind bricks or concrete blocks together.]\n(A) Mortar[TTS:Mortar] (B) Aggregate[TTS:Aggregate] (C) Waterproofing[TTS:Waterproofing] (D) Blueprint[TTS:Blueprint]",
          "difficulty": "2",
          "steps": [
            "分析題意：某物是水泥、砂與水的混合物，常被用來將磚塊或混凝土塊結合在一起。",
            "選項評估：(A) Mortar[TTS:Mortar](砂漿), (B) Aggregate[TTS:Aggregate](骨材), (C) Waterproofing[TTS:Waterproofing](防水層), (D) Blueprint[TTS:Blueprint](藍圖)。",
            "結論：用來黏結磚塊的砂漿英文是 Mortar[TTS:Mortar]。"
          ],
          "answer": "A"
        },
        {
          "question": "After pouring concrete, ________ is required to maintain adequate moisture and temperature for it to gain strength.[TTS:After pouring concrete, ________ is required to maintain adequate moisture and temperature for it to gain strength.]\n(A) Excavation[TTS:Excavation] (B) Curing[TTS:Curing] (C) Formwork[TTS:Formwork] (D) Casting[TTS:Casting]",
          "difficulty": "3",
          "steps": [
            "分析題意：澆置混凝土後，需要進行某動作來維持適當的濕度與溫度，以獲得強度。",
            "選項評估：(A) Excavation[TTS:Excavation](開挖), (B) Curing[TTS:Curing](養護), (C) Formwork[TTS:Formwork](模板), (D) Casting[TTS:Casting](澆置)。",
            "結論：維持濕度與溫度幫助強度發展的步驟為 Curing[TTS:Curing] (養護)。"
          ],
          "answer": "B"
        }
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
          "wrongThinking": "看到逗號後面的空格就直接選 that。",
          "correctThinking": "非限定關係子句(前面有逗號)中，不可以使用 that 作為關係代名詞，必須使用 which 或 who/whom。",
          "trapDescription": "統測常考非限定關係子句的關代選擇，許多考生習慣用 that 替代所有關代，忽略了非限定用法的限制。"
        },
        {
          "wrongThinking": "despite 後面可以接子句。",
          "correctThinking": "despite 是介系詞，後面只能接名詞或 V-ing；如果要接子句(S+V)，必須使用 although 或 though。",
          "trapDescription": "讓步語氣的連接詞與介系詞混淆是常見失分點，務必看清楚空格後是完整句子還是名詞片語。"
        }
      ],
      "eliteMentalModels": [
        {
          "technique": "子句降級法",
          "explanation": "遇到長難句時，先找出主要子句的主詞與動詞，將關係子句或副詞子句用括號刮起來，視為修飾語，這樣就能看清句子的骨架，不會被複雜的從屬結構干擾。"
        },
        {
          "technique": "使役感官動詞口訣",
          "explanation": "「使役動詞要原形，被動則用 p.p.；感官動詞看過程(V)或狀態(V-ing)，被動一樣 p.p.。」遇到考題時先判斷是主動還是被動，再決定動詞型態。"
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
          "answer": "The new suspension bridge, which connects the two industrial zones, will be completed next year. [TTS:The new suspension bridge, which connects the two industrial zones, will be completed next year.]"
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
          "body": "<p>形容詞子句用來修飾前面的名詞（先行詞），由<span className=\"font-semibold text-blue-600\">關係代名詞 (who, whom, which, that, whose) [TTS:who, whom, which, that, whose]</span>引導。需特別注意限定與非限定（有逗號）的差別，以及介系詞移至關代前面的進階句型。在工程敘述中，常用形容詞子句來精確定義材料或工法。</p>\n\n[DIALOGUE_START:關係子句會話：精準修飾建築標的]\nArchitect: The tower that was constructed with recycled steel won a green building gold medal. | 那棟使用回收鋼材建造的塔樓榮獲了綠建築金獎。\nIntern: Here, \"that was constructed with recycled steel\" is an adjective clause modifying \"tower\". | 這裡 that was constructed with recycled steel 是形容詞子句，用來修飾 tower。\nArchitect: Correct. When referring to engineers, we use \"who\": \"The engineer who inspected the site is John.\" | 沒錯。指涉工程師時我們用 who：「勘查工地的工程師是約翰。」\nIntern: Relative clauses help combine multiple observations into one sophisticated sentence. | 關係子句能幫我們把多個觀察整合成一個嚴謹的高階句子。\n[DIALOGUE_END]",
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
                "使役 (make/have)",
                "O + 原形動詞 (V)",
                "O + 過去分詞 (p.p.)",
                "The manager had the blueprints redrawn. [TTS:The manager had the blueprints redrawn.]"
              ],
              [
                "使役 (let)",
                "O + 原形動詞 (V)",
                "O + be p.p.",
                "Let the cement be mixed properly. [TTS:Let the cement be mixed properly.]"
              ],
              [
                "感官 (see/hear)",
                "O + V (事實) / V-ing (進行)",
                "O + 過去分詞 (p.p.)",
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
                "現在分詞 (V-ing)",
                "主動、進行",
                "N + V-ing",
                "The workers repairing the roof are wearing safety harnesses. [TTS:The workers repairing the roof are wearing safety harnesses.]"
              ],
              [
                "過去分詞 (p.p.)",
                "被動、完成",
                "N + p.p.",
                "The materials used in this project are eco-friendly. [TTS:The materials used in this project are eco-friendly.]"
              ],
              [
                "情緒分詞 (V-ing)",
                "令人...的 (通常修飾物)",
                "N + be V-ing",
                "The architectural design is amazing. [TTS:The architectural design is amazing.]"
              ],
              [
                "情緒分詞 (V-ed)",
                "感到...的 (通常修飾人)",
                "S(人) + be V-ed",
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
          "answer": "which [TTS:which]"
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
          "answer": "how [TTS:how]"
        },
        {
          "question": "_____ the bad weather, the construction crew managed to finish pouring the concrete on schedule. [TTS:_____ the bad weather, the construction crew managed to finish pouring the concrete on schedule.]",
          "difficulty": "2",
          "steps": [
            "分析空格後的結構：the bad weather [TTS:the bad weather] 是一個名詞片語，沒有動詞。",
            "前後語意：「壞天氣」與「如期完成」形成對比/讓步關係（雖然...但是）。",
            "需要填入表示讓步的「介系詞」。although/though [TTS:although/though] 是連接詞（需接子句），而 despite/in spite of [TTS:despite/in spite of] 是介系詞。"
          ],
          "answer": "Despite / In spite of [TTS:Despite / In spite of]"
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
          "answer": "checked [TTS:checked]"
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
          "answer": "operating [TTS:operating]"
        },
        {
          "question": "It _____ the city government millions of dollars to repair the old bridge last year. [TTS:It _____ the city government millions of dollars to repair the old bridge last year.]",
          "difficulty": "2",
          "steps": [
            "主詞是虛主詞 It [TTS:It]，表示花費（金錢 millions of dollars [TTS:millions of dollars]）。",
            "花費金錢且主詞為 It [TTS:It] 時，動詞使用 cost [TTS:cost]。",
            "句尾有 last year [TTS:last year]，表示過去式，cost [TTS:cost] 的過去式仍是 cost [TTS:cost]。"
          ],
          "answer": "cost [TTS:cost]"
        },
        {
          "question": "The engineers are quite _____ in the new sustainable building materials. [TTS:The engineers are quite _____ in the new sustainable building materials.]",
          "difficulty": "1",
          "steps": [
            "主詞 The engineers [TTS:The engineers] 是人。",
            "表示「對...感到有興趣」，使用的是情緒動詞的過去分詞當形容詞。",
            "搭配介系詞 in [TTS:in]，使用 interested [TTS:interested]。"
          ],
          "answer": "interested [TTS:interested]"
        },
        {
          "question": "Please let me know _____ the materials have arrived or not. [TTS:Please let me know _____ the materials have arrived or not.]",
          "difficulty": "2",
          "steps": [
            "空格後是一個完整的子句 the materials have arrived [TTS:the materials have arrived]。",
            "句尾有 or not [TTS:or not]，表示「是否」。",
            "引導「是否」的名詞子句，通常使用 whether [TTS:whether] (whether... or not [TTS:whether... or not] 是固定搭配)。"
          ],
          "answer": "whether [TTS:whether]"
        }
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
          "wrongThinking": "直接從頭到尾閱讀文本或圖表，忽略標題與關鍵資訊",
          "correctThinking": "先讀題目，帶著問題尋找答案，並優先檢視標題、軸標與特殊標示",
          "trapDescription": "統測多為「非連續性文本」，資訊散落各處。逐字閱讀不僅耗時，還容易在細節中迷失，導致找不到答案。"
        }
      ],
      "eliteMentalModels": [
        {
          "technique": "圖表三步法",
          "explanation": "看圖表時，遵循 1. 看標題 (Topic[TTS:Topic]) 2. 看座標/圖例 (Labels/Legends[TTS:Labels/Legends]) 3. 看極值與趨勢 (Extremes/Trends[TTS:Extremes/Trends])。"
        },
        {
          "technique": "關鍵字定位法 (Scanning[TTS:Scanning])",
          "explanation": "對於電子郵件、公告或廣告，先找出題幹的關鍵字（如時間、地點、人名），再到文本中快速掃描對應字詞。"
        }
      ],
      "covered_question_ids": [],
      "worked_examples": [
        {
          "question": "Please look at the construction schedule chart below. What task is planned for the third week?[TTS:Please look at the construction schedule chart below. What task is planned for the third week?]\n[Week 1: Site Preparation, Week 2: Foundation, Week 3: Framing, Week 4: Roofing][TTS:Week 1: Site Preparation, Week 2: Foundation, Week 3: Framing, Week 4: Roofing]\n(A) Site Preparation[TTS:Site Preparation]\n(B) Foundation[TTS:Foundation]\n(C) Framing[TTS:Framing]\n(D) Roofing[TTS:Roofing]",
          "difficulty": "Easy",
          "steps": [
            "1. 觀察圖表標題（建築施工進度表）。",
            "2. 定位題幹關鍵字：「the third week[TTS:the third week]」（第三週）。",
            "3. 在圖表中找到 Week 3[TTS:Week 3] 對應的項目。",
            "4. Week 3[TTS:Week 3] 對應的是 Framing[TTS:Framing]（構架工程）。"
          ],
          "answer": "C"
        },
        {
          "question": "A: Look at this chart. Sales went up in March.[TTS:Look at this chart. Sales went up in March.]\nB: Yes, but they dropped again in April.[TTS:Yes, but they dropped again in April.]\nWhat does the chart show for April?[TTS:What does the chart show for April?]\n(A) Sales increased.[TTS:Sales increased.]\n(B) Sales decreased.[TTS:Sales decreased.]\n(C) Sales stayed the same.[TTS:Sales stayed the same.]\n(D) No data available.[TTS:No data available.]",
          "difficulty": "Medium",
          "steps": [
            "1. A說三月銷售上升。",
            "2. B說四月又下降(dropped again[TTS:dropped again])。",
            "3. 選項(B) decreased[TTS:decreased] 意思相符。"
          ],
          "answer": "B"
        },
        {
          "question": "A: Did you read the memo? We need to submit the report by Friday.[TTS:Did you read the memo? We need to submit the report by Friday.]\nB: I thought it was due next Monday![TTS:I thought it was due next Monday!]\nWhen is the report actually due?[TTS:When is the report actually due?]\n(A) Friday[TTS:Friday]\n(B) Saturday[TTS:Saturday]\n(C) Sunday[TTS:Sunday]\n(D) Monday[TTS:Monday]",
          "difficulty": "Easy",
          "steps": [
            "1. A提醒報告要在禮拜五(Friday[TTS:Friday])前繳交。",
            "2. B以為是下週一，但實際期限應以備忘錄(memo[TTS:memo])為準。",
            "3. 故答案為禮拜五。"
          ],
          "answer": "A"
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
          "answer": "C"
        },
        {
          "question": "In an email, the subject is \"Meeting Rescheduled to 3 PM, Friday\". What does \"Rescheduled\" mean?[TTS:In an email, the subject is \"Meeting Rescheduled to 3 PM, Friday\". What does \"Rescheduled\" mean?]\n(A) Cancelled[TTS:Cancelled]\n(B) Changed to a new time[TTS:Changed to a new time]\n(C) Finished[TTS:Finished]\n(D) Started[TTS:Started]",
          "difficulty": "Medium",
          "steps": [
            "1. 觀察主旨：Meeting Rescheduled to 3 PM, Friday[TTS:Meeting Rescheduled to 3 PM, Friday]。",
            "2. 從字根分析：Re-[TTS:Re-] (重新) + schedule[TTS:schedule] (安排進度) + -ed[TTS:-ed] (過去分詞) = 重新安排時間。",
            "3. 選項 (B) Changed to a new time[TTS:Changed to a new time] 符合字義。"
          ],
          "answer": "B"
        },
        {
          "question": "A coupon says \"20% OFF on all safety boots. Valid until Oct. 31.\" If you buy a pair of boots on Nov. 1, can you get the discount?[TTS:A coupon says \"20% OFF on all safety boots. Valid until Oct. 31.\" If you buy a pair of boots on Nov. 1, can you get the discount?]\n(A) Yes, because it is for all boots.[TTS:Yes, because it is for all boots.]\n(B) Yes, because 20% is a big discount.[TTS:Yes, because 20% is a big discount.]\n(C) No, because the coupon has expired.[TTS:No, because the coupon has expired.]\n(D) No, because boots are not included.[TTS:No, because boots are not included.]",
          "difficulty": "Easy",
          "steps": [
            "1. 找出優惠條件：20% OFF[TTS:20% OFF] (打八折)、Valid until Oct. 31[TTS:Valid until Oct. 31] (有效期限至10月31日)。",
            "2. 題目問：Nov. 1[TTS:Nov. 1] (11月1日) 購買是否能打折？",
            "3. 11月1日已超過有效期限，所以不能打折 (expired[TTS:expired] = 過期的)。"
          ],
          "answer": "C"
        },
        {
          "question": "Look at the memo. \"To all site engineers: Please submit your weekly progress report by Thursday noon.\" When is the deadline for the report?[TTS:Look at the memo. \"To all site engineers: Please submit your weekly progress report by Thursday noon.\" When is the deadline for the report?]\n(A) Monday morning[TTS:Monday morning]\n(B) Thursday morning[TTS:Thursday morning]\n(C) Thursday 12:00 PM[TTS:Thursday 12:00 PM]\n(D) Friday noon[TTS:Friday noon]",
          "difficulty": "Medium",
          "steps": [
            "1. 尋找題目關鍵字 deadline[TTS:deadline] (期限)。",
            "2. 對照 memo[TTS:memo] 內容：\"by Thursday noon\"[TTS:by Thursday noon] (週四中午前)。",
            "3. noon[TTS:noon] (中午) = 12:00 PM[TTS:12:00 PM]。"
          ],
          "answer": "C"
        },
        {
          "question": "The pie chart shows the materials used in a building: Concrete 50%, Steel 30%, Glass 15%, Wood 5%. Which material is used the most?[TTS:The pie chart shows the materials used in a building: Concrete 50%, Steel 30%, Glass 15%, Wood 5%. Which material is used the most?]\n(A) Steel[TTS:Steel]\n(B) Glass[TTS:Glass]\n(C) Concrete[TTS:Concrete]\n(D) Wood[TTS:Wood]",
          "difficulty": "Easy",
          "steps": [
            "1. 題目問 \"used the most\"[TTS:used the most] (使用最多的)。",
            "2. 在圓餅圖中尋找比例最高（最大極值）的項目。",
            "3. Concrete[TTS:Concrete] (混凝土) 佔 50%，是最高的。"
          ],
          "answer": "C"
        },
        {
          "question": "You receive an email from a supplier attached with a price list. The email says \"We offer a 10% discount for orders over 100 bags of cement.\" You need 120 bags. The price list says $10 per bag. How much will you pay?[TTS:You receive an email from a supplier attached with a price list. The email says \"We offer a 10% discount for orders over 100 bags of cement.\" You need 120 bags. The price list says $10 per bag. How much will you pay?]\n(A) $1000[TTS:$1000]\n(B) $1200[TTS:$1200]\n(C) $1080[TTS:$1080]\n(D) $120[TTS:$120]",
          "difficulty": "Hard",
          "steps": [
            "1. 這題需要交叉比對 Email[TTS:Email] 與價目表。",
            "2. 從價目表得知：一包水泥 $10。需要 120 包，原價 = 120 x 10 = 1200。",
            "3. 從 Email[TTS:Email] 得知：訂單超過 100 包有 10% discount[TTS:10% discount] (九折)。",
            "4. 120 包 > 100 包，符合打折條件。計算折扣後價格：$1200 x 0.9 = $1080。"
          ],
          "answer": "C"
        },
        {
          "question": "A line graph illustrates the number of construction accidents over five years. It goes down steadily from 2018 to 2022. Which sentence best describes this?[TTS:A line graph illustrates the number of construction accidents over five years. It goes down steadily from 2018 to 2022. Which sentence best describes this?]\n(A) The number of accidents increased significantly.[TTS:The number of accidents increased significantly.]\n(B) There was a steady decrease in accidents.[TTS:There was a steady decrease in accidents.]\n(C) The number remained stable.[TTS:The number remained stable.]\n(D) The graph shows no clear trend.[TTS:The graph shows no clear trend.]",
          "difficulty": "Medium",
          "steps": [
            "1. 理解圖表趨勢描述：\"goes down steadily\"[TTS:goes down steadily] (穩定下降)。",
            "2. 尋找對應的英文句型。",
            "3. (A) increased[TTS:increased] (增加) 錯。 (B) steady decrease[TTS:steady decrease] (穩定減少) 對。 (C) stable[TTS:stable] (穩定不變) 錯。"
          ],
          "answer": "B"
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
          "answer": "B"
        }
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
          "wrongThinking": "看到空格前面是介系詞就一律選 V-ing，不考慮是否為不定詞的 to。",
          "correctThinking": "要注意某些片語的 to 是介系詞（如 look forward to [TTS:look forward to]），後面接 V-ing；但有時 to 是不定詞符號，後面接原形動詞。",
          "trapDescription": "在克漏字中，介系詞 to [TTS:to] 和不定詞 to [TTS:to] 的混淆是極常見的陷阱。"
        }
      ],
      "eliteMentalModels": [
        {
          "technique": "克漏字三步解題法",
          "explanation": "第一步：掃描全段抓主旨；第二步：分析空格前後句法結構；第三步：代入選項檢查語意與時態是否連貫。"
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
            "分析語意：前一句提到工程師必須先研究土壤（First [TTS:First]）。",
            "後一句提到根據發現設計基礎，這表示時間先後順序或下一步動作。",
            "(A) However [TTS:However] 表示轉折，(B) Therefore [TTS:Therefore] 表示因果，(C) Furthermore [TTS:Furthermore] 表示補充，(D) Afterwards [TTS:Afterwards] 表示「之後」。符合時間順序的是 Afterwards [TTS:Afterwards]。"
          ],
          "answer": "D"
        },
        {
          "question": "A: Do you know why the construction is delayed? [TTS:Do you know why the construction is delayed?]\nB: Yes, we found some structural issues in the original plan. ________, we have to redesign the support beams. [TTS:Yes, we found some structural issues in the original plan. ________, we have to redesign the support beams.]\n(A) However [TTS:However]\n(B) Furthermore [TTS:Furthermore]\n(C) Therefore [TTS:Therefore]\n(D) Otherwise [TTS:Otherwise]",
          "difficulty": "2",
          "steps": [
            "分析語意：B說在原計畫中發現了結構問題（we found some structural issues in the original plan [TTS:we found some structural issues in the original plan]）。",
            "後一句說必須重新設計支撐樑（we have to redesign the support beams [TTS:we have to redesign the support beams]）。",
            "前後兩句是因果關係，因為發現問題，「因此」必須重新設計。選擇 (C) Therefore [TTS:Therefore]。"
          ],
          "answer": "C"
        },
        {
          "question": "A: The new CAD software is very hard to learn. [TTS:The new CAD software is very hard to learn.]\nB: I agree. ________, it offers many advanced features that are useful for our project. [TTS:I agree. ________, it offers many advanced features that are useful for our project.]\n(A) Therefore [TTS:Therefore]\n(B) However [TTS:However]\n(C) Instead [TTS:Instead]\n(D) Thus [TTS:Thus]",
          "difficulty": "2",
          "steps": [
            "分析語意：A說新CAD軟體很難學（very hard to learn [TTS:very hard to learn]）。",
            "B說它提供了很多對專案有用的進階功能（offers many advanced features that are useful for our project [TTS:offers many advanced features that are useful for our project]）。",
            "前後語氣有轉折，前面是缺點，後面是優點。「然而」用 (B) However [TTS:However]。"
          ],
          "answer": "B"
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
          "answer": "A"
        },
        {
          "question": "The engineer decided ________ the blueprints to reduce the overall cost of the project.\n(A) modify\n(B) modifying\n(C) to modify\n(D) modified [TTS:The engineer decided ________ the blueprints to reduce the overall cost of the project.\n(A) modify\n(B) modifying\n(C) to modify\n(D) modified]",
          "difficulty": "1",
          "steps": [
            "decide [TTS:decide] 後面必須接不定詞 to V [TTS:to V]，表示「決定去做某事」。",
            "因此選擇 to modify [TTS:to modify]。"
          ],
          "answer": "C"
        },
        {
          "question": "The new stadium features a retractable roof. ________ allows games to be played in any weather condition.\n(A) This\n(B) They\n(C) What\n(D) Which [TTS:The new stadium features a retractable roof. ________ allows games to be played in any weather condition.\n(A) This\n(B) They\n(C) What\n(D) Which]",
          "difficulty": "2",
          "steps": [
            "前句提到新體育場有一個可伸縮的屋頂（a retractable roof [TTS:a retractable roof]，單數事物）。",
            "空格處作為下一句的主詞，指代前面的整件事或這個屋頂，應使用單數代名詞 This [TTS:This]。Which [TTS:Which] 通常用於形容詞子句（需有逗號或在同一句中），This [TTS:This] 適合開啟獨立的新句。"
          ],
          "answer": "A"
        },
        {
          "question": "We are looking forward to ________ the new CAD software next week.\n(A) use\n(B) using\n(C) used\n(D) be using [TTS:We are looking forward to ________ the new CAD software next week.\n(A) use\n(B) using\n(C) used\n(D) be using]",
          "difficulty": "2",
          "steps": [
            "片語 look forward to [TTS:look forward to] 中的 to [TTS:to] 是介系詞，後面必須接動名詞 (V-ing [TTS:V-ing]) 或名詞。",
            "因此選擇 using [TTS:using]。"
          ],
          "answer": "B"
        },
        {
          "question": "Concrete is a popular building material. It is cheap and easy to make. ________, it has excellent compressive strength.\n(A) Furthermore\n(B) For example\n(C) In contrast\n(D) On the contrary [TTS:Concrete is a popular building material. It is cheap and easy to make. ________, it has excellent compressive strength.\n(A) Furthermore\n(B) For example\n(C) In contrast\n(D) On the contrary]",
          "difficulty": "2",
          "steps": [
            "前文提到混凝土便宜且易於製作（優點）。",
            "後句提到它有極佳的抗壓強度（另一個優點）。",
            "兩句是補充說明的遞進關係，故選 Furthermore [TTS:Furthermore]（此外）。"
          ],
          "answer": "A"
        },
        {
          "question": "Many old buildings are being torn down. ________, some historic landmarks will be preserved for future generations.\n(A) Consequently\n(B) Likewise\n(C) Nevertheless\n(D) Hence [TTS:Many old buildings are being torn down. ________, some historic landmarks will be preserved for future generations.\n(A) Consequently\n(B) Likewise\n(C) Nevertheless\n(D) Hence]",
          "difficulty": "3",
          "steps": [
            "前句說「許多舊建築正被拆除」。",
            "後句說「一些歷史地標將被保存下來」。",
            "語意出現轉折（拆除 vs 保存），所以選 Nevertheless [TTS:Nevertheless]（然而/不過）。"
          ],
          "answer": "C"
        },
        {
          "question": "The architect was criticized for not ________ the structural limits of the steel beams.\n(A) consider\n(B) considered\n(C) considering\n(D) to consider [TTS:The architect was criticized for not ________ the structural limits of the steel beams.\n(A) consider\n(B) considered\n(C) considering\n(D) to consider]",
          "difficulty": "2",
          "steps": [
            "介系詞 for [TTS:for] 後面遇到動詞時，必須使用動名詞 V-ing [TTS:V-ing] 形式。",
            "因此選擇 considering [TTS:considering]。"
          ],
          "answer": "C"
        },
        {
          "question": "The crew finished ________ the foundation just before the heavy rain started.\n(A) to pour\n(B) pour\n(C) poured\n(D) pouring [TTS:The crew finished ________ the foundation just before the heavy rain started.\n(A) to pour\n(B) pour\n(C) poured\n(D) pouring]",
          "difficulty": "1",
          "steps": [
            "動詞 finish [TTS:finish] 後面習慣接動名詞 V-ing [TTS:V-ing]，表示「完成某動作」。",
            "因此選擇 pouring [TTS:pouring]。"
          ],
          "answer": "D"
        }
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
          "wrongThinking": "看到過去時間就一律用過去式，忽略了與過去事實相反的假設語氣需使用過去完成式。",
          "correctThinking": "在假設語氣中，若表示與「過去事實相反」，條件句需退一步時態使用「過去完成式 (had + p.p.)」，主要子句用「would/could/should/might + have + p.p.[TTS:would/could/should/might + have + p.p.]」。",
          "trapDescription": "統測常考時間副詞 (如 yesterday[TTS:yesterday], then[TTS:then]) 配合假設句，未注意時態退縮會選錯。"
        }
      ],
      "eliteMentalModels": [
        {
          "technique": "結構簡化還原法",
          "explanation": "遇到分詞構句或倒裝句時，先找主詞與動詞，並還原成正常語序，可快速判斷動詞應為主動 (-ing[TTS:-ing]) 或被動 (-ed[TTS:-ed])，或確認助動詞位置。"
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
          "answer": "could have finished[TTS:could have finished]"
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
          "body": "<span className=\"text-blue-600 font-bold\">假設語氣</span>的核心在於「時態退一步」。與現在相反用過去式，與過去相反用過去完成式。\n\n[DIALOGUE_START:假設語氣會話：土質地質風險評估]\nGeotechnical Lead: If we had performed the core drilling earlier, we would have detected the underground sinkhole. | 如果我們當初早一點進行鑽探取樣，我們就能察覺到地下的岩溶空洞。\nStructural Engineer: If the bedrock were stronger, we could reduce the pile foundation depth. | 如果岩盤層更堅固一些，我們就可以縮減基樁的深度。\nGeotechnical Lead: Had we known the water table was so high, we would have installed dewatering pumps. | 要是我們早知道地下水位這麼高，我們早就安裝抽水沉水泵了。\nStructural Engineer: Let us reinforce the slurry walls immediately to prevent subsidence. | 我們立刻為連續壁進行補強，以防地層下陷。\n[DIALOGUE_END]",
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
          "answer": "Had they received[TTS:Had they received]"
        },
        {
          "question": "_____ completely destroyed by the earthquake, the bridge had to be rebuilt from scratch.[TTS:_____ completely destroyed by the earthquake, the bridge had to be rebuilt from scratch.]",
          "difficulty": "2",
          "steps": [
            "前後主詞皆為 the bridge[TTS:the bridge]，前半句為分詞構句。",
            "橋樑是「被摧毀」，故動詞需用被動 (Being + p.p.[TTS:Being + p.p.] 或直接用 p.p.[TTS:p.p.])。",
            "選擇過去分詞 Destroyed[TTS:Destroyed]。"
          ],
          "answer": "Destroyed[TTS:Destroyed]"
        },
        {
          "question": "Seldom _____ such an innovative architectural design in this traditional neighborhood.[TTS:Seldom _____ such an innovative architectural design in this traditional neighborhood.]",
          "difficulty": "2",
          "steps": [
            "Seldom[TTS:Seldom] (很少) 為否定副詞，置於句首需倒裝。",
            "倒裝語序等同疑問句：助動詞 + 主詞 + 原形動詞。",
            "故選 do we see[TTS:do we see] 或 have we seen[TTS:have we seen]。"
          ],
          "answer": "have we seen[TTS:have we seen]"
        },
        {
          "question": "It is essential that every worker _____ a hard hat on the construction site at all times.[TTS:It is essential that every worker _____ a hard hat on the construction site at all times.]",
          "difficulty": "2",
          "steps": [
            "句型為 It is essential that + S + (should) + VR[TTS:It is essential that + S + (should) + VR]。",
            "essential[TTS:essential] 表示「重要的、必要的」，後方 that[TTS:that] 子句動詞需用原形。",
            "every worker[TTS:every worker] 後直接接原形動詞 wear[TTS:wear]。"
          ],
          "answer": "wear[TTS:wear]"
        },
        {
          "question": "The concrete did not set properly. The contractor _____ added too much water to the mix.[TTS:The concrete did not set properly. The contractor _____ added too much water to the mix.]",
          "difficulty": "3",
          "steps": [
            "第一句說明混凝土未正常凝固，為過去事實。",
            "第二句為對過去事實的肯定推測：「承包商必定是加了太多水」。",
            "對過去的肯定推測需用 must have + p.p.[TTS:must have + p.p.]。"
          ],
          "answer": "must have[TTS:must have]"
        },
        {
          "question": "It was the newly imported crane _____ collapsed due to the strong winds yesterday.[TTS:It was the newly imported crane _____ collapsed due to the strong winds yesterday.]",
          "difficulty": "2",
          "steps": [
            "判斷句型：It was ... that ...[TTS:It was ... that ...] (強調句型)。",
            "原句為 The newly imported crane collapsed...[TTS:The newly imported crane collapsed...]。",
            "強調主詞 the newly imported crane[TTS:the newly imported crane]，後方需接 that[TTS:that] 或 which[TTS:which]。"
          ],
          "answer": "that[TTS:that]"
        },
        {
          "question": "The foreman insisted that the scaffolding _____ before the inspection began.[TTS:The foreman insisted that the scaffolding _____ before the inspection began.]",
          "difficulty": "3",
          "steps": [
            "主要子句動詞為 insisted[TTS:insisted] (堅持)，後方 that[TTS:that] 子句需用 (should) + VR[TTS:(should) + VR]。",
            "主詞 the scaffolding[TTS:the scaffolding] (鷹架) 與動詞 secure[TTS:secure] (固定) 之間為被動關係。",
            "故需使用被動語態 (should) be secured[TTS:(should) be secured]。"
          ],
          "answer": "be secured[TTS:be secured]"
        },
        {
          "question": "With the final blueprint _____ by the client, the team began the procurement process.[TTS:With the final blueprint _____ by the client, the team began the procurement process.]",
          "difficulty": "3",
          "steps": [
            "考點為 With[TTS:With] 伴隨狀態：With + O + OC[TTS:With + O + OC]。",
            "受詞 the final blueprint[TTS:the final blueprint] 與動詞 approve[TTS:approve] 之間為被動關係 (被核准)。",
            "受詞補語需用過去分詞 approved[TTS:approved]。"
          ],
          "answer": "approved[TTS:approved]"
        }
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
          "wrongThinking": "寫商務信件時，直接用命令語氣，例如：Send me the catalog now.[TTS:Send me the catalog now.]",
          "correctThinking": "在職場與工程商務信件中，應使用委婉且禮貌的句型（Tactful language[TTS:Tactful language]），如：Could you please send me the catalog?[TTS:Could you please send me the catalog?] 或 I would appreciate it if you could send the catalog.[TTS:I would appreciate it if you could send the catalog.]",
          "trapDescription": "商務溝通非常注重語氣（Tone[TTS:Tone]），過於直接的英文會顯得不專業且粗魯，容易破壞合作關係。"
        },
        {
          "wrongThinking": "以為 Punch list[TTS:Punch list] 就是打卡清單。",
          "correctThinking": "在工程界，Punch list[TTS:Punch list]（美式）或 Snag list[TTS:Snag list]（英式）指的是「工程驗收缺失清單」，是完工交接前必須修繕的項目列表。",
          "trapDescription": "工程專有名詞的日常字義常與專業字義不同，若照字面翻譯會產生嚴重誤解。"
        }
      ],
      "eliteMentalModels": [
        {
          "technique": "四段式 Email 結構法",
          "explanation": "撰寫商務 Email 時，遵循「問候與開場（Greeting & Opening[TTS:Greeting & Opening]） -> 目的與主旨（Purpose[TTS:Purpose]） -> 細節說明與要求（Details & Requests[TTS:Details & Requests]） -> 結尾與期望（Closing & Call to action[TTS:Closing & Call to action]）」的框架，能確保語意清晰且具專業度。"
        },
        {
          "technique": "5C 溝通原則 (5Cs of Communication[TTS:5Cs of Communication])",
          "explanation": "在工地現場或撰寫 RFI（釋疑單）時，資訊必須 Clear[TTS:Clear]（清晰）、Concise[TTS:Concise]（簡明）、Concrete[TTS:Concrete]（具體）、Correct[TTS:Correct]（正確）、Complete[TTS:Complete]（完整），以避免施工錯誤。"
        }
      ],
      "worked_examples": [
        {
          "question": "Your company needs to purchase 500 bags of Portland cement. Write the core sentence to inquire about the lead time[TTS:lead time] and price[TTS:price] in a formal email[TTS:formal email].[TTS:Your company needs to purchase 500 bags of Portland cement. Write the core sentence to inquire about the lead time[TTS:lead time] and price[TTS:price] in a formal email[TTS:formal email].] \n(A) Tell me the price[TTS:price] and when I can get 500 bags of cement.[TTS:Tell me the price[TTS:price] and when I can get 500 bags of cement.]\n(B) I would like to inquire about the price[TTS:price][TTS:inquire about the price[TTS:price]] and lead time[TTS:lead time] for 500 bags of Portland cement.[TTS:I would like to inquire about the price[TTS:price][TTS:inquire about the price[TTS:price]] and lead time[TTS:lead time] for 500 bags of Portland cement.]\n(C) Give me a quote for 500 cement now.[TTS:Give me a quote for 500 cement now.]\n(D) Do you have 500 bags of cement and how much?[TTS:Do you have 500 bags of cement and how much?]",
          "difficulty": "3",
          "steps": [
            "分析題目：需要撰寫一封正式信件（formal email[TTS:formal email]），詢價（inquire about the price[TTS:price][TTS:inquire about the price[TTS:price]]）並詢問交期（lead time[TTS:lead time]）。",
            "檢視選項 (A)、(C)、(D) 語氣過於口語或命令式，不符合商務信件的禮貌原則。",
            "選項 (B) 使用了 \"I would like to inquire about...\"[TTS:I would like to inquire about...] (我想詢問關於...)，語氣正式且包含了題目要求的 price[TTS:price]（價格）與 lead time[TTS:lead time]（交期）以及材料名稱。"
          ],
          "answer": "B"
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
                "walk-through",
                "n.",
                "實地查勘；巡視",
                "Let's do a quick walk-through of the site."
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
          "answer": "B"
        },
        {
          "question": "Before the final ______, the contractor must fix all the defects listed on the punch list[TTS:punch list].[TTS:Before the final ______, the contractor must fix all the defects listed on the punch list[TTS:punch list].]\n(A) handover[TTS:handover]\n(B) foundation[TTS:foundation]\n(C) scaffold[TTS:scaffold]\n(D) cement[TTS:cement]",
          "difficulty": "2",
          "steps": [
            "分析題意：在最終的 ______ 之前，承包商必須修復 punch list[TTS:punch list] 上的所有缺失。",
            "punch list[TTS:punch list] (缺失清單) 是在工程完工「移交」前要處理的。",
            "(A) handover (點交/移交) 符合句意。"
          ],
          "answer": "A"
        },
        {
          "question": "If the blueprints are unclear, the site engineer should submit an ______ to the architect for clarification[TTS:clarification].[TTS:If the blueprints are unclear, the site engineer should submit an ______ to the architect for clarification[TTS:clarification].]\n(A) HVAC[TTS:HVAC]\n(B) RFI[TTS:RFI]\n(C) PPE[TTS:PPE]\n(D) OSB[TTS:OSB]",
          "difficulty": "3",
          "steps": [
            "分析題意：如果藍圖不清楚，現場工程師應提交一份 ______ 給建築師以求釐清 (clarification[TTS:clarification])。",
            "(A) HVAC (空調系統), (B) RFI (釋疑單), (C) PPE (個人防護裝備), (D) OSB (定向纖維板)。",
            "為了解決圖說不清的問題，應提交 RFI (Request for Information[TTS:Request for Information])。"
          ],
          "answer": "B"
        },
        {
          "question": "Please find ______ the revised layout plan for the ground floor.[TTS:Please find ______ the revised layout plan for the ground floor.]\n(A) attach[TTS:attach]\n(B) attached[TTS:attached]\n(C) attaching[TTS:attaching]\n(D) to attach[TTS:to attach]",
          "difficulty": "2",
          "steps": [
            "這題考查商務信件常見句型 \"Please find attached + 名詞\"[TTS:Please find attached] (請見附件的...)。",
            "attached 作為過去分詞，表示「被附上的」。",
            "因此正確答案為 (B) attached。"
          ],
          "answer": "B"
        },
        {
          "question": "The client wants to alter the design. We need to issue a ______ to adjust the project budget and timeline.\n(A) Change Order[TTS:Change Order]\n(B) hard hat\n(C) facade\n(D) footprint",
          "difficulty": "3",
          "steps": [
            "題意：客戶想要更改設計。我們需要發出一份 ______ 來調整專案預算和時程。",
            "當設計變更牽涉到成本或時程改變時，必須發出變更設計單。",
            "(A) Change Order[TTS:Change Order] (變更設計單) 符合題意。"
          ],
          "answer": "A"
        },
        {
          "question": "Which of the following items is usually mandatory for jobsite safety?[TTS:Which of the following items is usually mandatory for jobsite safety?]\n(A) A smart watch[TTS:A smart watch]\n(B) A high-vis vest[TTS:high-vis vest][TTS:A high-vis vest[TTS:high-vis vest]]\n(C) A business suit[TTS:A business suit]\n(D) A tie[TTS:A tie]",
          "difficulty": "1",
          "steps": [
            "題意：下列哪一項通常是工地安全強制要求的？",
            "(A) 智慧手錶 (B) 反光背心 (C) 西裝 (D) 領帶",
            "在工地現場，high-vis vest[TTS:high-vis vest] (反光背心) 是必備的安全裝備。"
          ],
          "answer": "B"
        },
        {
          "question": "During a meeting, acknowledging a client's suggestion by saying \"That's a valid point\" is an example of ______.\n(A) ignoring the client\n(B) professional courtesy[TTS:professional courtesy]\n(C) safety hazard\n(D) changing the order",
          "difficulty": "3",
          "steps": [
            "題意：在會議中，以「這是個很好的觀點」來認可客戶的建議，是 ______ 的一個例子。",
            "(A) 忽略客戶, (B) 專業禮貌, (C) 安全隱患, (D) 變更訂單",
            "這是一種展現溝通技巧與專業禮貌 (professional courtesy[TTS:professional courtesy]) 的表現。"
          ],
          "answer": "B"
        },
        {
          "question": "We need to check the exact ______ of the new generator to ensure it fits in the mechanical room.\n(A) lead time[TTS:lead time]\n(B) dimensions[TTS:dimensions]\n(C) quotations\n(D) etiquettes",
          "difficulty": "3",
          "steps": [
            "題意：我們需要檢查新發電機的確切 ______，以確保它放得進機房。",
            "(A) 交期, (B) 尺寸/大小, (C) 報價單, (D) 禮儀",
            "要確定設備是否放得下，需要確認其 dimensions[TTS:dimensions] (尺寸)。"
          ],
          "answer": "B"
        }
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
          "wrongThinking": "看到多篇文本的複合題型就慌張，想從頭到尾把每篇都讀完再來解題。",
          "correctThinking": "先讀題目確認所需資訊，再回頭掃描文本中對應的關鍵字與段落，交叉比對資訊即可。",
          "trapDescription": "多文本閱讀的重點在於「資訊檢索與整合」，而非逐字精讀。盲目全讀會嚴重消耗作答時間。"
        }
      ],
      "eliteMentalModels": [
        {
          "technique": "SQ3R與略讀(Skimming[TTS:Skimming])結合法",
          "explanation": "先掃描文章標題、每段首末句(Survey[TTS:Survey])，將題目轉換為尋找目標(Question[TTS:Question])，快速略讀抓取大意(Read[TTS:Read])，並在選項中比對(Recite[TTS:Recite]與Review[TTS:Review])，有效應對長篇閱讀。"
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
          "answer": "(C) To argue that the construction industry must adopt sustainable building practices.[TTS:(C) To argue that the construction industry must adopt sustainable building practices.]"
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
                "Skimming (略讀)",
                "主旨題 (Main Idea[TTS:Main Idea])",
                "快速掃過文章，只抓大意，忽略細節。"
              ],
              [
                "Scanning (掃讀)",
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
          "answer": "C"
        },
        {
          "question": "Read the text excerpt: \"Although the new smart building management system costs a fortune initially, its long-term energy-saving capabilities are undeniably impressive.\"[TTS:Read the text excerpt: \"Although the new smart building management system costs a fortune initially, its long-term energy-saving capabilities are undeniably impressive.\"] What is the author's attitude toward the new system?[TTS:What is the author's attitude toward the new system?]\n(A) Highly critical[TTS:(A) Highly critical]\n(B) Generally positive[TTS:(B) Generally positive]\n(C) Completely indifferent[TTS:(C) Completely indifferent]\n(D) Deeply pessimistic[TTS:(D) Deeply pessimistic]",
          "difficulty": "2",
          "steps": [
            "尋找作者態度關鍵字：前半句說「雖然初期花費很高」，後半句用「undeniably impressive[TTS:undeniably impressive](令人印象深刻)」形容其能力。",
            "由「impressive[TTS:impressive]」可知，作者對此系統持正面、肯定的態度。",
            "(A) 極度批判；(C) 完全漠不關心；(D) 深度悲觀，皆不符合。"
          ],
          "answer": "B"
        },
        {
          "question": "Based on the context, what does the word \"sustainable\" most likely mean in the sentence: \"To protect our environment for future generations, architects must focus on sustainable development.\"[TTS:Based on the context, what does the word \"sustainable\" most likely mean in the sentence: \"To protect our environment for future generations, architects must focus on sustainable development.\"]?\n(A) Able to be maintained at a certain rate or level[TTS:(A) Able to be maintained at a certain rate or level]\n(B) Highly profitable and commercially successful[TTS:(B) Highly profitable and commercially successful]\n(C) Extremely fragile and easily damaged[TTS:(C) Extremely fragile and easily damaged]\n(D) Traditional and old-fashioned[TTS:(D) Traditional and old-fashioned]",
          "difficulty": "2",
          "steps": [
            "由上下文推敲字義：句意為「為了保護環境給後代，建築師必須專注於 _____ 的發展」。",
            "保護環境與永續經營相關。選項(A)能夠維持在一定水平(永續的)符合語境。",
            "(B) 高利潤的；(C) 極脆弱的；(D) 傳統的，皆不符合句意。"
          ],
          "answer": "A"
        },
        {
          "question": "In a multi-text question, Text A is an email complaining about poor ventilation in an office, and Text B is a memo from the facility manager announcing an HVAC (heating, ventilation, and air conditioning) system upgrade.[TTS:In a multi-text question, Text A is an email complaining about poor ventilation in an office, and Text B is a memo from the facility manager announcing an HVAC (heating, ventilation, and air conditioning) system upgrade.] Which of the following is the most logical conclusion?[TTS:Which of the following is the most logical conclusion?]\n(A) The facility manager wrote Text A.[TTS:(A) The facility manager wrote Text A.]\n(B) Text B is a response to the problem mentioned in Text A.[TTS:(B) Text B is a response to the problem mentioned in Text A.]\n(C) The office workers in Text A do not want the HVAC upgrade.[TTS:(C) The office workers in Text A do not want the HVAC upgrade.]\n(D) Text A and Text B are discussing two completely unrelated buildings.[TTS:(D) Text A and Text B are discussing two completely unrelated buildings.]",
          "difficulty": "3",
          "steps": [
            "文本A是抱怨辦公室通風不良的電子郵件。文本B是發布空調系統升級的公告。",
            "整合兩文本資訊，最合理的推論是：經理為了解決文本A中提到的通風問題，因此發布了升級公告。",
            "因此(B)是對Text A[TTS:Text A]中問題的回應，為最合乎邏輯的結論。"
          ],
          "answer": "B"
        },
        {
          "question": "When skimming a reading passage to find the main idea, which parts of the paragraphs should you pay the MOST attention to?[TTS:When skimming a reading passage to find the main idea, which parts of the paragraphs should you pay the MOST attention to?]\n(A) The specific dates and numbers in the middle[TTS:(A) The specific dates and numbers in the middle]\n(B) The first and last sentences of each paragraph[TTS:(B) The first and last sentences of each paragraph]\n(C) The adjectives and adverbs used throughout[TTS:(C) The adjectives and adverbs used throughout]\n(D) The names of people and places mentioned[TTS:(D) The names of people and places mentioned]",
          "difficulty": "1",
          "steps": [
            "考查略讀(Skimming[TTS:Skimming])技巧。",
            "略讀旨在尋找文章主旨。英文段落的主旨句(Topic Sentence[TTS:Topic Sentence])最常出現在段落的第一句或最後一句。",
            "細節如日期、數字、人名地名等，在略讀階段可以先略過。"
          ],
          "answer": "B"
        },
        {
          "question": "Read the sentence: \"The integration of Artificial Intelligence in structural health monitoring is not a passing fad; it is a paradigm shift that will redefine civil engineering.\"[TTS:Read the sentence: \"The integration of Artificial Intelligence in structural health monitoring is not a passing fad; it is a paradigm shift that will redefine civil engineering.\"] What does the author imply about AI in civil engineering?[TTS:What does the author imply about AI in civil engineering?]\n(A) It is a temporary trend that will soon disappear.[TTS:(A) It is a temporary trend that will soon disappear.]\n(B) It is a fundamental and permanent change to the industry.[TTS:(B) It is a fundamental and permanent change to the industry.]\n(C) It is too complicated for engineers to understand.[TTS:(C) It is too complicated for engineers to understand.]\n(D) It is an outdated technology being replaced by new methods.[TTS:(D) It is an outdated technology being replaced by new methods.]",
          "difficulty": "3",
          "steps": [
            "推論題：句中提到 AI[TTS:AI] 不是短暫的狂熱(not a passing fad[TTS:not a passing fad])，而是將重新定義土木工程的典範轉移。",
            "這意味著 AI[TTS:AI] 是一項根本且永久性的改變。",
            "選項(A)短暫趨勢與文意相反；(B)符合文意。"
          ],
          "answer": "B"
        },
        {
          "question": "Which of the following topics is most closely related to the UN Sustainable Development Goals (SDGs)?[TTS:Which of the following topics is most closely related to the UN Sustainable Development Goals (SDGs)?]\n(A) The history of classical Greek architecture[TTS:(A) The history of classical Greek architecture]\n(B) Strategies for reducing carbon footprints in urban planning[TTS:(B) Strategies for reducing carbon footprints in urban planning]\n(C) The biography of a famous 19th-century bridge engineer[TTS:(C) The biography of a famous 19th-century bridge engineer]\n(D) A comparison of different paint colors for residential interiors[TTS:(D) A comparison of different paint colors for residential interiors]",
          "difficulty": "1",
          "steps": [
            "考查 SDGs[TTS:SDGs] 永續議題的背景知識。",
            "SDGs[TTS:SDGs] 關注環保、永續、氣候變遷等議題。",
            "選項(B)都市計畫中減少碳足跡的策略與環保直接相關。"
          ],
          "answer": "B"
        },
        {
          "question": "If a passage extensively uses words like \"devastating,\" \"alarming,\" and \"catastrophic\" to describe the impact of global warming on coastal infrastructure, the author's tone is best described as:[TTS:If a passage extensively uses words like \"devastating,\" \"alarming,\" and \"catastrophic\" to describe the impact of global warming on coastal infrastructure, the author's tone is best described as:]\n(A) Humorous[TTS:(A) Humorous]\n(B) Objective[TTS:(B) Objective]\n(C) Urgent and concerned[TTS:(C) Urgent and concerned]\n(D) Indifferent[TTS:(D) Indifferent]",
          "difficulty": "2",
          "steps": [
            "推斷作者語氣：文章使用了 devastating[TTS:devastating](毀滅性的)、alarming[TTS:alarming](令人擔憂的)、catastrophic[TTS:catastrophic](災難性的)等強烈負面字眼。",
            "這顯示作者對全球暖化的影響感到擔憂且情況緊急。",
            "(A) 幽默的、(B) 客觀的、(D) 漠不關心的皆不符合。"
          ],
          "answer": "C"
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
          "answer": "D"
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
          "answer": "B"
        }
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
          "wrongThinking": "看到中文句子就按字面順序逐字翻譯成英文。",
          "correctThinking": "先找出中文的「主詞」與「動詞」，再把表示時間、地點的副詞片語放到句尾或句首。",
          "trapDescription": "中英文字句的語序差異大，逐字翻譯常導致中式英文（Chinglish[TTS:Chinglish]）並在統測中失分。"
        }
      ],
      "eliteMentalModels": [
        {
          "technique": "Chunking[TTS:Chunking] 意群拆解法",
          "explanation": "在句子重組或翻譯時，將單字組合成有意義的片語或子句（如：動詞+受詞、介系詞片語），而非處理單一字詞，能有效提升組句正確率與速度。"
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
          "answer": "The architect wore a yellow hard hat at the construction site yesterday.[TTS:The architect wore a yellow hard hat at the construction site yesterday.]"
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
          "body": "中英文語序最大差異在於副詞與修飾語的位置。中文常將時間與地點放在動詞前，而英文通常將它們放在句尾（地方先於時間）。\n掌握「主詞 + 動詞 + 受詞 + 地方 + 時間」的黃金公式。\n\n[DIALOGUE_START:中譯英語序轉換會話：調整中文主題句型]\nTeacher: How do you translate: \"這座橋樑的建造花費了三年時間\"? | 你要如何翻譯「這座橋樑的建造花費了三年時間」？\nStudent: In English, we say: \"It took three years to construct this bridge.\" | 在英文中，我們會說：It took three years to construct this bridge。\nTeacher: Or using the gerund: \"Constructing this bridge took three years.\" | 或者使用動名詞當主詞：Constructing this bridge took three years。\nStudent: Putting the verb and subject in proper order makes the English natural and accurate. | 將主詞與動詞依英文語序排列能讓英文表達自然且精確。\n[DIALOGUE_END]"
        },
        {
          "heading": "2. 字首提示填空策略",
          "body": "統測非選常有字首提示填空，解題時須判斷：\n1. 該空格的詞性（動詞、名詞、形容詞等）\n2. 前後文意與搭配詞（collocation[TTS:collocation]）\n3. 注意名詞單複數及動詞時態變化。\n\n[DIALOGUE_START:字首提示填空會話：鎖定詞性與時態字尾]\nTutor: The prompt is: \"The workers must i______ the foundation.\" The hint letter is \"i\". | 題目是：The workers must i______ the foundation. 提示字母是 i。\nStudent: After modal auxiliary \"must\", we need a base verb. The answer is \"inspect\"! | 在情態助動詞 must 後面需要原形動詞。答案是 inspect (檢查)！\nTutor: What if it was past tense: \"The engineer i______ the site yesterday\"? | 如果是過去式呢：The engineer i______ the site yesterday？\nStudent: Then we add \"-ed\": \"inspected\". Always check verb inflection! | 那就必須加上 -ed 變成 inspected。一定要隨時檢查動詞時態變化！\n[DIALOGUE_END]"
        },
        {
          "heading": "3. 句子重組 Chunking[TTS:Chunking] 意群法",
          "body": "拿到打散的單字時，先尋找固定搭配（如 look forward to[TTS:look forward to]、in front of[TTS:in front of]）或 S+V[TTS:S+V] 結構，將其綁定成一個意群，再根據文法規則將意群排序，避免逐字盲目拼湊。\n\n[DIALOGUE_START:句子重組意群法會話：按語塊快速拼裝]\nPeer A: Given these scrambled chunks: [the ancient pagoda] [withstood] [the massive earthquake] [without collapsing], how do you sequence them? | 給定這些打散的意群語塊，你要如何排列順序？\nPeer B: Subject first: \"The ancient pagoda\", Verb: \"withstood\", Object: \"the massive earthquake\", Prepositional phrase: \"without collapsing\". | 主詞先行：The ancient pagoda，動詞：withstood，受詞：the massive earthquake，介系詞片語：without collapsing。\nPeer A: Chunking makes sentence unscrambling fast and error-free. | 意群切塊法讓句子重組變得迅速而且零失誤。\nPeer B: Always check that no words were accidentally skipped or misspelled. | 排完後記得檢查沒有任何單字被漏掉或拼錯。\n[DIALOGUE_END]"
        },
        {
          "heading": "4. 段落寫作架構 (Topic-Support-Conclusion[TTS:Topic-Support-Conclusion])",
          "body": "高分段落應具備清晰的三段結構：\n1. 主題句 (Topic Sentence[TTS:Topic Sentence])：點出核心主旨。\n2. 支持句 (Supporting Sentences[TTS:Supporting Sentences])：提供細節、例子（如建築材料、施工步驟）來佐證主題。\n3. 結論句 (Concluding Sentence[TTS:Concluding Sentence])：重申主旨或提出總結。\n\n[DIALOGUE_START:段落寫作架構會話：主題句、支持句與結論句]\nWriting Coach: How should you structure your short essay on why vocational skills matter? | 你該如何構思「技職技能為什麼重要」的短文寫作架構？\nStudent: Topic sentence: Hands-on skills prepare youth for high-demand careers. Supporting details: real jobsite practice and certifications. | 主題句：實作技能幫助青年做好進入熱門職場的準備。支持細節：真實工地實習與專業證照。\nWriting Coach: And conclude with a memorable restatement: \"In conclusion, technical mastery builds a resilient future.\" | 最後用有力的總結句作結：「總之，精熟專業技術能為我們築造更具韌性的未來。」\nStudent: A clear three-part structure earns maximum points from the graders. | 清晰的三段式結構能從評分老師手中拿到最高分。\n[DIALOGUE_END]"
        },
        {
          "heading": "5. 標點符號精準用法",
          "body": "英文標點常見錯誤：\n1. 逗號不能連接兩個獨立子句，需用連接詞 (and[TTS:and], but[TTS:but]) 或改用分號 (;)。\n2. 句尾應使用句號 (.) 而非逗號。\n3. 專有名詞（如 Taiwan[TTS:Taiwan], Taipei 101[TTS:Taipei 101]）字首必須大寫。\n\n[DIALOGUE_START:標點符號精準度會話：大小寫與標點避錯]\nProofreader: Never connect two independent sentences with only a comma; use a semicolon or period. | 切勿只用逗號連接兩個獨立子句；請使用分號或句號。\nWriter: Like this: \"The design was complex; however, the builders succeeded.\"? | 像這樣嗎：The design was complex; however, the builders succeeded.？\nProofreader: Exact syntax! Also remember to capitalize proper nouns like \"Taipei 101\" and days of the week. | 句法完全正確！同時也要記得專有名詞如 Taipei 101 與星期名稱必須大寫。\nWriter: Flawless punctuation reflects professional discipline and academic rigor. | 完美的標點符號體現了專業紀律與嚴謹的學術態度。\n[DIALOGUE_END]"
        },
        {
          "heading": "6. 動詞時態一致性檢核",
          "body": "寫作與翻譯時，務必在下筆後檢查時態是否一致。若描述過去完成的工程，整段應以過去式為主；若陳述一般建築常理或設計理念，則使用現在式。\n\n[DIALOGUE_START:動詞時態一致性會話：全文時態校驗]\nTeacher: Look at this draft: \"When we visited the site, the crane lifts the steel.\" What is wrong? | 看一下這篇草稿：When we visited the site, the crane lifts the steel. 哪裡錯了？\nStudent: \"Visited\" is past tense, so \"lifts\" must be past tense too: \"the crane lifted the steel\"! | visited 是過去式，所以 lifts 也必須改成過去式：the crane lifted the steel！\nTeacher: Always scan your completed writing to ensure all verbs stay in the same temporal frame. | 寫完文章後務必從頭到尾掃描一遍，確保所有動詞都維持在相同的時態座標中。\nStudent: Tense consistency check is my final proofreading step. | 時態一致性檢查是我最後校對的必備步驟。\n[DIALOGUE_END]"
        },
        {
          "heading": "7. 非選擇題 16 分搶分秘技",
          "body": "統測非選共16分，通常包含兩題翻譯或重組（各3-4分）與其他題型。\n搶分關鍵：\n- 拼字務必正確，錯一字可能扣0.5至1分。\n- 字跡工整，避免閱卷老師誤判（如 a[TTS:a] 與 u[TTS:u], r[TTS:r] 與 v[TTS:v]）。\n- 寫完後務必檢查主動詞單複數一致 (S-V agreement[TTS:S-V agreement])。\n\n[DIALOGUE_START:非選 16 分搶分會話：黃金答題檢核清單]\nTutor: In the non-multiple-choice section, every point counts toward your dream college. | 在非選擇題的十六分中，每一分都關係到你能否錄取心目中的理想志願。\nStudent: I will follow the checklist: correct spelling, proper verb endings, capitalization, and punctuation. | 我一定會嚴格執行檢核清單：單字拼寫正確、動詞時態字尾無誤、大小寫及標點符號確實。\nTutor: Write neatly and double-check before handing in your answer sheet. | 字體書寫工整，並在交卷前進行最後複查。\nStudent: I am fully prepared to score full marks on the translation and writing section! | 我已經做好充分準備，要在非選翻譯與寫作部分拿下滿分！\n[DIALOGUE_END]"
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
          "answer": "not, but[TTS:not, but]"
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
          "answer": "Workers are required to wear safety helmets.[TTS:Workers are required to wear safety helmets.]"
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
          "answer": "To protect the environment, many architects now use green building materials.[TTS:To protect the environment, many architects now use green building materials.]"
        },
        {
          "question": "翻譯填空：在地震發生時，請待在桌下直到搖晃停止。\nD____ the earthquake, please stay under the desk u____ the shaking stops.[TTS:D____ the earthquake, please stay under the desk u____ the shaking stops.]",
          "difficulty": "2",
          "steps": [
            "「在...期間」的介系詞且字首為 D[TTS:D]：During[TTS:During]。",
            "「直到...」的連接詞且字首為 u[TTS:u]：until[TTS:until]。",
            "注意 During[TTS:During] 位於句首需大寫。"
          ],
          "answer": "During, until[TTS:During, until]"
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
          "answer": "Taipei 101 is the most famous building in Taiwan.[TTS:Taipei 101 is the most famous building in Taiwan.]"
        },
        {
          "question": "翻譯填空：這個建案預計將於明年完成。\nThe construction p____ is expected to be completed next y____.[TTS:The construction p____ is expected to be completed next y____.]",
          "difficulty": "2",
          "steps": [
            "「建案/專案」且字首為 p[TTS:p]：project[TTS:project]。",
            "「明年」的「年」且字首為 y[TTS:y]：year[TTS:year]。",
            "確認名詞單複數，project[TTS:project] 為單數。"
          ],
          "answer": "project, year[TTS:project, year]"
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
          "answer": "Concrete is a commonly used construction material.[TTS:Concrete is a commonly used construction material.]"
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
          "answer": "The engineer arrives at the construction site at 8 a.m. every morning.[TTS:The engineer arrives at the construction site at 8 a.m. every morning.]"
        },
        {
          "question": "對話翻譯：\nA: 我們什麼時候開始澆置混凝土？\nB: 一旦模板完成我們就開始。\n(A) A: When do we start pouring the concrete?[TTS:When do we start pouring the concrete?]\n    B: We will start as soon as the formwork is finished.[TTS:We will start as soon as the formwork is finished.]\n(B) A: Why do we pour the concrete?[TTS:Why do we pour the concrete?]\n    B: We finish the formwork early.[TTS:We finish the formwork early.]\n(C) A: Where is the concrete?[TTS:Where is the concrete?]\n    B: The formwork is over there.[TTS:The formwork is over there.]\n(D) A: How do we pour the concrete?[TTS:How do we pour the concrete?]\n    B: The formwork is strong.[TTS:The formwork is strong.]",
          "difficulty": "2",
          "steps": [
            "分析A句意：「我們什麼時候開始澆置混凝土？」詢問時間，對應 When do we start pouring the concrete?[TTS:When do we start pouring the concrete?]",
            "分析B句意：「一旦模板完成我們就開始。」對應 We will start as soon as the formwork is finished.[TTS:We will start as soon as the formwork is finished.]",
            "選項(A)的對話最精準傳達了雙方的意思。"
          ],
          "answer": "A"
        },
        {
          "question": "情境對話中譯英：\nEngineer: You need to modify this blueprint.[TTS:You need to modify this blueprint.]\nContractor: No problem, I will update it this afternoon.[TTS:No problem, I will update it this afternoon.]\n(工程師：你需要修改這份藍圖。)\n(承包商：沒問題，我今天下午就會更新它。)",
          "difficulty": "2",
          "steps": [
            "分析工程師句意：「你需要修改這份藍圖。」主詞 You[TTS:You]，動詞 need to modify[TTS:need to modify]，受詞 this blueprint[TTS:this blueprint]。",
            "分析承包商句意：「沒問題，我今天下午就會更新它。」No problem[TTS:No problem]，主詞 I[TTS:I]，動詞 will update[TTS:will update]，受詞 it[TTS:it]，時間 this afternoon[TTS:this afternoon]。",
            "組合為完整的對話。"
          ],
          "answer": "Engineer: You need to modify this blueprint.[TTS:You need to modify this blueprint.]\nContractor: No problem, I will update it this afternoon.[TTS:No problem, I will update it this afternoon.]"
        }
      ]
    }
  ]
};
