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
      desc: '深入掌握構詞法、建築與工程專業字彙 (Architectural Terminology)、高頻動詞片語與空間位置介系詞。',
      status: 'done',
      concepts: [
        {
          heading: '字首、字根與字尾構詞分析 (Etymology & Morphology in Technical English)',
          body: '掌握拉丁與希臘字根能大幅提升專業與學術單字之記憶效率，並能在閱讀測驗中快速推測生字字義。',
          steps: [
            '分析字首 (Prefix)：改變單字方向或語意 (如 re- 重複/再次, sub- 下/基礎, anti-/counter- 反對/抵抗)。',
            '分析字根 (Root)：構成單字的核心概念 (如 struct/tect 建造, ped/pod 腳/基座, meter 測量)。',
            '分析字尾 (Suffix)：決定單字詞性 (如 -able/ible 可…的, -tion 名詞, -ize 動詞)。'
          ],
          table: {
            headers: ['類型', '字首/字根/字尾', '核心涵義', '建築與工程英文範例', '中文說明'],
            rows: [
              ['字首', 're-', '再次 / 重新', 'renovate, reinforce, reconstruct', '翻新、補強、重建'],
              ['字首', 'sub-', '在…之下 / 次要', 'substructure, subterranean, sub-base', '地下結構/基礎、地下的、路基次底層'],
              ['字首', 'peri-', '外圍 / 環繞', 'perimeter, peripheral', '外圍周長、外圍周邊的'],
              ['字首', 'cant- / counter-', '斜角 / 抵抗', 'cantilever, counterweight, counter-act', '懸臂樑、抗傾覆配重、抵消力'],
              ['字根', '-struct- / -tect-', '建造 / 覆蓋', 'structure, architect, architecture', '結構、建築師、建築學/建築風格'],
              ['字尾', '-able / -ible', '具備…能力的', 'durable, sustainable, flexible', '經久耐用的、永續的、具韌性/彈性的']
            ]
          }
        },
        {
          heading: '建築與設計核心專業字彙表 (Core Architectural Terminology Table)',
          body: '統測與專業英文 (ESP) 常考之建築圖面、構造材料與空間設計關鍵名詞。',
          table: {
            headers: ['英文單字/詞組', '詞性', '中文翻譯', '專業情境應用與例句'],
            rows: [
              ['Façade', 'n.', '建築正面 / 外牆', 'The main façade features large double-glazed windows.'],
              ['Blueprint / Floor Plan', 'n.', '藍圖 / 平面圖', 'Architects examine the blueprint before concrete pouring.'],
              ['Load-bearing', 'adj.', '承重的', 'Removing a load-bearing wall requires structural recalculation.'],
              ['Fenestration', 'n.', '開窗設計 / 門窗佈局', 'Proper fenestration maximizes natural light and ventilation.'],
              ['Sustainability', 'n.', '永續性 / 環保發展', 'Using recycled steel enhances the sustainability of the project.'],
              ['Elevation', 'n.', '立面圖 / 海拔高度', 'The front elevation illustrates the vertical height of the roof.']
            ]
          }
        },
        {
          heading: '施工與工程高頻動詞片語 (Phrasal Verbs in Engineering & Construction)',
          body: '動詞加上介系詞或副詞形成的片語，在語意與文法上需特別留意代名詞受詞位置與固定介系詞搭配。',
          steps: [
            '可拆分片語 (Separable Phrasal Verbs)：若受詞為代名詞，必須放在動詞與介系詞之間 (如 tear it down, set it up)。',
            '固定介系詞搭配：工程規範中常見 comply with (遵守), consist of (由…組成), adapt to (適應)。'
          ],
          table: {
            headers: ['動詞片語', '中文涵義', '常用工程與施工情境範例'],
            rows: [
              ['Tear down / Demolish', '拆除 (舊構造物)', 'Workers tore down the decaying concrete partition wall.'],
              ['Set up / Erect', '架設 / 組裝', 'Scaffolding was set up around the perimeter of the tower.'],
              ['Comply with', '符合 / 遵守規範', 'The building design must comply with seismic safety codes.'],
              ['Break down', '細分 / 故障', 'The budget is broken down into material and labor costs.'],
              ['Call for', '呼籲 / 需要', 'The unexpected soil settlement calls for immediate inspection.']
            ]
          }
        },
        {
          heading: '精準用字與近義詞辨析 (Nuances in Technical Synonyms)',
          body: '在工程技術報告中，相近字彙常有明確的專業差異 (如 construct vs. fabricate)。',
          table: {
            headers: ['字組', '差異辨析與專業區分', '正確用法與範例'],
            rows: [
              ['Construct vs. Fabricate', 'Construct 指工地現場建造總體結構；Fabricate 指工廠預製零組件。', 'Steel beams are fabricated in factories and assembled on site.'],
              ['Durable vs. Sturdy', 'Durable 強調材質經久耐用抗風化；Sturdy 強調結構實體堅固穩重。', 'Durable granite counter; sturdy load-bearing masonry wall.'],
              ['Demolish vs. Dismantle', 'Demolish 為毀壞性拆除；Dismantle 為按零組件完整拆卸。', 'Dismantle steel scaffolding for future reuse.']
            ]
          }
        },
        {
          heading: '空間方位與幾何關係介系詞 (Spatial Prepositions in Architecture)',
          body: '精準描述建築體、空間單元與結構構件之相對幾何關係。',
          steps: [
            'adjacent to (緊鄰/相鄰): The secondary exit is adjacent to the main elevator shaft.',
            'parallel to (平行於): The main corridor runs parallel to the exterior curtain wall.',
            'perpendicular to (垂直於): Structural cross-beams must be perpendicular to the main joists.',
            'beneath / underneath (在…正下方): High-voltage cables are embedded beneath the sub-floor.'
          ]
        }
      ],
      practices: [
        {
          difficulty: '基礎',
          question: 'The engineering firm decided to _______ the old factory building to make way for a modern eco-friendly housing complex.\n(A) put off (B) tear down (C) look after (D) turn into',
          steps: [
            '1. 分析句意：工程公司決定「拆除」舊工廠建築，以改建為現代化環保住宅區。',
            '2. 選項分析：(A) put off (延期) (B) tear down (拆除) (C) look after (照顧) (D) turn into (變成)。',
            '3. 故正確答案為 (B) tear down。'
          ],
          answer: '(B) tear down'
        },
        {
          difficulty: '中等',
          question: 'Before launching construction, the contractor must ensure that the building design _______ local safety codes and environmental regulations.\n(A) complies with (B) consists of (C) structuralizes in (D) departs from',
          steps: [
            '1. 分析句意：在開始施工之前，承包商必須確保建築設計「符合」當地安全法規與環保規範。',
            '2. 詞組辨析：comply with 為固定介系詞搭配，意為「遵守/符合（規章、標準）」。',
            '3. (B) consist of 表示「由…組成」，(D) depart from 表示「偏離/離開」。故選 (A)。'
          ],
          answer: '(A) complies with'
        },
        {
          difficulty: '進階',
          question: 'Match the prefix/root with its meaning: "Substructure" refers to the part of a building located _______ the ground surface, whereas "Superstructure" is located above.\n(A) across (B) below (C) around (D) opposite',
          steps: [
            '1. 分析字根：字首 sub- 意為 "under" 或 "below"（在…之下）。',
            '2. 句意理解：Substructure（地下結構/基礎）位於地面之下 (below the ground surface)，相對地 Superstructure（地上結構）位於地面之上。',
            '3. 確定選項：(B) below 為正確答案。'
          ],
          answer: '(B) below'
        },
        {
          difficulty: '進階',
          question: 'Identify the term: The exterior face or front wall of a building, often given unique aesthetic and architectural emphasis, is technically known as the _______.\n(A) foundation (B) façade (C) joist (D) scaffold',
          steps: [
            '1. 分析專業定義：建築物的正面外牆（尤其具備美學與立面特色的主牆面）術語為 façade。',
            '2. 選項解析：(A) foundation 基礎 (B) façade 建築正面/外牆 (C) joist 樓板樑 (D) scaffold 腳手架。',
            '3. 正確答案為 (B)。'
          ],
          answer: '(B) façade'
        }
      ],
      practice: {
        difficulty: '基礎',
        question: 'The engineering firm decided to _______ the old factory building to make way for a modern eco-friendly housing complex.\n(A) put off (B) tear down (C) look after (D) turn into',
        steps: [
          '1. 分析句意：工程公司決定「拆除」舊工廠建築，以改建為現代化環保住宅區。',
          '2. 選項分析：(A) put off (延期) (B) tear down (拆除) (C) look after (照顧) (D) turn into (變成)。',
          '3. 故正確答案為 (B) tear down。'
        ],
        answer: '(B) tear down'
      }
    },
    {
      slug: 'grammar-patterns',
      title: '2. 文法句型',
      desc: '五大基本句型、時態與被動語態、關係子句、分詞構句與假設語氣。',
      status: 'done',
      concepts: [
        {
          heading: '英文五大基本句型與施工語境應用 (Five Basic Sentence Structures)',
          body: '解析長難句時，先找出主詞 (S) 與主要動詞 (V) 是關鍵。所有複雜的技術句型皆衍生自五大基本結構。',
          table: {
            headers: ['句型符號', '結構說明', '建築與工程文意範例', '主謂賓結構剖析'],
            rows: [
              ['S + V', '主詞 + 不及物動詞', 'Concrete cures slowly in high humidity.', 'Concrete (S) + cures (V)'],
              ['S + V + SC', '主詞 + 連繫動詞 + 主詞補語', 'The load-bearing column remains sturdy.', 'Column (S) + remains (V) + sturdy (SC)'],
              ['S + V + O', '主詞 + 及物動詞 + 受詞', 'The architect designed a passive solar roof.', 'Architect (S) + designed (V) + roof (O)'],
              ['S + V + IO + DO', '主詞 + 及物動詞 + 間接受詞 + 直接受詞', 'The client gave the team final approval.', 'Client (S) + gave (V) + team (IO) + approval (DO)'],
              ['S + V + O + OC', '主詞 + 及物動詞 + 受詞 + 受詞補語', 'Engineers deemed the bridge structure safe.', 'Engineers (S) + deemed (V) + structure (O) + safe (OC)']
            ]
          }
        },
        {
          heading: '工程與科學英文常見時態與被動語態 (Tenses & Passive Voice in Technical Writing)',
          body: '科技與工程報告強調客觀性與去個人化 (Impersonal tone)，廣泛採用被動語態 (S + be + p.p.) 與完成時態。',
          steps: [
            '主動轉被動：將主動句受詞變為被動句主詞，動詞轉為 be + p.p.。(例: "Workers poured concrete." -> "Concrete was poured.")',
            '現在完成式 (Present Perfect)：`have/has + p.p.` 強調過去完成之工程行為對當前仍具重要影響。(例: "The safety inspection has been completed.")',
            '客觀陳述優勢：被動語態能將焦點放在受測物件 (Subject of study) 而非施工人員。'
          ]
        },
        {
          heading: '關係代名詞與關係子句 (Relative Clauses & Relative Pronouns)',
          body: '關係子句用於精準修飾先行詞名詞，並分為限定 (Restricted) 與非限定 (Non-restricted) 用法。',
          table: {
            headers: ['關係代名詞', '先行詞類別', '在子句中功能', '例句與說明'],
            rows: [
              ['who / whom', '人', '主詞 / 受詞', 'The structural engineer who designed Taipei 101 won an award.'],
              ['which', '事物 / 整個前句', '主詞 / 受詞', 'Reinforced concrete, which resists tension, was selected.'],
              ['that', '人 / 事物 (限限定用法)', '主詞 / 受詞', 'The materials that were delivered yesterday meet code.'],
              ['whose', '人 / 事物的所有格', '所有格修飾', 'Buildings whose foundations are weak need seismic retrofitting.']
            ]
          }
        },
        {
          heading: '分詞構句簡化法則與懸垂分詞避錯 (Participle Construction)',
          body: '當主句與從屬子句主詞相同時，可省略連接詞與主詞，將動詞轉為現在分詞 (V-ing, 主動) 或過去分詞 (p.p., 被動)。',
          steps: [
            '主動分詞：Because the architect recognized the risk, he altered the floor plan. -> Recognizing the risk, the architect altered the floor plan.',
            '被動分詞：After it was reinforced with steel plates, the girder withstood the earthquake. -> Reinforced with steel plates, the girder withstood the earthquake.',
            '避免懸垂分詞 (Dangling Participle): 分詞的主詞必須與主句主詞保持一致，不可出現主詞不符之邏輯矛盾。'
          ]
        },
        {
          heading: '假設語氣與工程風險預測句型 (Subjunctive Mood & Inversion)',
          body: '用於評估未發生情境、施工風險與結構設計假設。',
          formula: '與過去事實相反：If + S + had + p.p., S + would/could + have + p.p.\n倒裝句型：Had + S + p.p., S + would/could + have + p.p.'
        }
      ],
      practices: [
        {
          difficulty: '基礎',
          question: 'The new museum, _______ was designed by a world-renowned architect, will open to the public next month.\n(A) who (B) which (C) where (D) what',
          steps: [
            '1. 判斷先行詞：The new museum（建築物/事物）。',
            '2. 判斷子句結構與標點：逗號引導非限定關係子句，需使用 which 作為指代物的關係代名詞（that 不能用於非限定子句）。',
            '3. 正確答案為 (B) which。'
          ],
          answer: '(B) which'
        },
        {
          difficulty: '中等',
          question: '_______ with high-tensile steel fiber, the concrete slab exhibits remarkable resistance against heavy seismic shocks.\n(A) Reinforce (B) Reinforcing (C) Reinforced (D) To reinforce',
          steps: [
            '1. 分析句子結構：主句主詞為 "the concrete slab"（混凝土版）。',
            '2. 判斷動詞主被動：混凝土版與 reinforce（強化）之間為被動關係（被鋼纖維強化）。',
            '3. 分詞構句規則：簡化從屬子句（Because it was reinforced...），保留過去分詞 (p.p.) "Reinforced"。'
          ],
          answer: '(C) Reinforced'
        },
        {
          difficulty: '進階',
          question: 'Had the structural engineers _______ the soil conditions more thoroughly prior to excavation, the foundation settlement issue could have been avoided.\n(A) inspect (B) inspected (C) inspecting (D) inspects',
          steps: [
            '1. 句型辨識：本句為條件句 if 省略之倒裝語句，原句為 "If the structural engineers had inspected..."。',
            '2. 過去語氣公式：If + 主詞 + had + p.p., 主詞 + could have + p.p.，倒裝時省略 If，將 Had 移至主詞前。',
            '3. 答案為 (B) inspected。'
          ],
          answer: '(B) inspected'
        },
        {
          difficulty: '進階',
          question: 'The project manager considered the initial structural proposal _______, requiring the engineering team to submit a revised version.\n(A) inadequate (B) inadequately (C) inadequacy (D) inadequateness',
          steps: [
            '1. 句型分析：本句符合五大句型之 S + V + O + OC（主詞 + 及物動詞 + 受詞 + 受詞補語）。',
            '2. 文法規則：considered (V) + the initial structural proposal (O) + 形容詞受詞補語 (OC)。',
            '3. 詞性選擇：inadequate 為形容詞「不充足的/不符合要求的」，充當受詞補語。'
          ],
          answer: '(A) inadequate'
        }
      ],
      practice: {
        difficulty: '基礎',
        question: 'The new museum, _______ was designed by a world-renowned architect, will open to the public next month.\n(A) who (B) which (C) where (D) what',
        steps: [
          '1. 判斷先行詞：The new museum（建築物/事物）。',
          '2. 判斷子句結構與標點：逗號引導非限定關係子句，需使用 which 作為指代物的關係代名詞（that 不能用於非限定子句）。',
          '3. 正確答案為 (B) which。'
        ],
        answer: '(B) which'
      }
    },
    {
      slug: 'reading-comprehension',
      title: '3. 閱讀測驗',
      desc: '略讀與掃讀技巧、綠建築與建築結構技術短文閱讀、上下文推論與文章主旨分析。',
      status: 'done',
      concepts: [
        {
          heading: '高效雙速閱讀法 (Skimming vs. Scanning Methodology)',
          body: '面對長篇閱讀或技術文章時，靈活切換 Skimming (略讀宏觀架構) 與 Scanning (掃讀關鍵字) 能節省 50% 以上的時間。',
          steps: [
            '略讀 (Skimming)：快速瀏覽文章標題、第一段、各段主題句 (Topic Sentence) 與結論段，掌握 Central Thesis (核心論點)。',
            '題目分析 (Question Analysis)：劃出題目關鍵字 (專有名詞、年代數據、因果邏輯關係)。',
            '掃讀 (Scanning)：以關鍵字為錨點，垂直掃描文章相應段落，精確比對選項細節。'
          ]
        },
        {
          heading: '綠建築技術短文拆解：被動式太陽能設計 (Technical Passage 1: Passive Solar Design)',
          body: 'Read the following technical passage on sustainable architecture:\n"Passive solar building design uses structural elements—such as window placement, thermal mass, and shading—to collect, store, and distribute solar energy in the form of heat in the winter and reject solar heat in the summer. Unlike active solar systems, passive solar design operates without mechanical devices such as pumps or solar panels. The primary key to effective passive solar architecture is taking full advantage of the local climate through optimal orientation, south-facing glazing, and heavy high-mass materials like concrete or stone that store thermal energy."',
          table: {
            headers: ['英文術語', '中文對譯', '構造與原理說明'],
            rows: [
              ['Passive Solar Design', '被動式太陽能設計', '不依賴機械設備，利用建築體本體吸熱隔熱'],
              ['Thermal Mass', '熱質量 / 蓄熱體', '利用混凝土、石材的高熱容量吸收與緩釋熱能'],
              ['South-facing Glazing', '朝南開窗 / 採光面', '北半球接收最大冬日日照之關鍵方位'],
              ['Shading Devices', '遮陽設施', '夏日阻擋高角度日光以降低空調負荷']
            ]
          }
        },
        {
          heading: '結構工程技術短文拆解：建築抗震與阻尼系統 (Technical Passage 2: Seismic Resistant Structures)',
          body: 'Read the following passage on structural safety:\n"Modern skyscrapers built in earthquake-prone regions rely heavily on advanced seismic mitigation technologies. Rather than resisting seismic forces purely through rigid strength, contemporary structural engineering emphasizes energy dissipation and flexibility. Tuned Mass Dampers (TMD), such as the massive steel pendulum suspended near the top of Taipei 101, counteract sway caused by strong typhoons and earthquakes. When lateral forces push the building in one direction, the inertial force of the pendulum moves in the opposite direction, thereby dampening structural oscillations and enhancing occupant comfort and safety."',
          table: {
            headers: ['核心專有名詞', '中文對譯', '結構力學作用原理'],
            rows: [
              ['Seismic Mitigation', '地震減災 / 抗震技術', '減緩地震力對建築主體的破壞'],
              ['Energy Dissipation', '能量消散', '將地震動能轉化為熱能或液壓能消散'],
              ['Tuned Mass Damper (TMD)', '調諧質量阻尼器', '慣性懸掛大擺錘，反向晃動抵消建築搖晃'],
              ['Lateral Forces', '橫向力 / 側向風力與地震力', '作用於建築立面之水平向剪力']
            ]
          }
        },
        {
          heading: '上下文細節推論與題目選項重組 (Inference & Paraphrasing Skills)',
          body: '閱讀測驗的正確答案很少直接複製原文，通常會採用 Paraphrasing (同義替換與句型重組)。',
          steps: [
            '留意轉折詞與邏輯對比 (however, despite, in contrast) 揭示的真實隱含語意。',
            '比對選項與原文：尋找名詞替換 (如 mechanical devices -> electrical equipment) 或主被動翻轉。'
          ]
        },
        {
          heading: '文章段落架構與邏輯脈絡解析 (Paragraph Structure Analysis)',
          body: '學術與技術文章多採用「總-分-總」演繹結構 (Deductive Approach)。',
          steps: [
            'Topic Sentence (主題句): 通常位於段落前兩句，宣示該段核心概念。',
            'Supporting Details (支持細節): 列舉數據、實驗成果、施工步驟。',
            'Concluding / Transition Sentence (小結/轉折句): 總結本段並預告下一段主題。'
          ]
        }
      ],
      practices: [
        {
          difficulty: '基礎',
          question: 'According to the passage on passive solar design, what is the main difference between passive and active solar systems?\n(A) Passive systems rely on mechanical pumps.\n(B) Active systems operate without solar panels.\n(C) Passive design utilizes structural elements without mechanical devices.\n(D) Active design relies solely on thermal mass like stone and concrete.',
          steps: [
            '1. 定位關鍵字：passive vs active solar systems。',
            '2. 掃描短文細節："Unlike active solar systems, passive solar design operates without mechanical devices such as pumps..."。',
            '3. 選項比對：(C) 正確說明被動式設計不依賴機械設備，利用建築構造運作。'
          ],
          answer: '(C) Passive design utilizes structural elements without mechanical devices.'
        },
        {
          difficulty: '中等',
          question: 'What role does a Tuned Mass Damper (TMD) play in a tall skyscraper like Taipei 101?\n(A) It increases the total weight of the foundation.\n(B) It dampens oscillations by moving in the opposite direction of lateral forces.\n(C) It powers the electricity of the entire building during earthquakes.\n(D) It makes the exterior walls completely rigid and immovable.',
          steps: [
            '1. 定位關鍵字：Tuned Mass Damper (TMD), Taipei 101。',
            '2. 閱讀抗震短文："When lateral forces push the building in one direction, the inertial force of the pendulum moves in the opposite direction, thereby dampening structural oscillations..."。',
            '3. 匹配選項：(B) 符合擺錘反向移動抵消搖晃之原理。'
          ],
          answer: '(B) It dampens oscillations by moving in the opposite direction of lateral forces.'
        },
        {
          difficulty: '進階',
          question: 'In the passive solar passage, the term "Glazing" most likely refers to which building component?\n(A) Concrete load-bearing walls\n(B) Glass windows or transparent panels\n(C) Roof insulation tiles\n(D) Steel reinforcement bars',
          steps: [
            '1. 上下文推論：短文中提到 "south-facing glazing... to collect solar energy"。',
            '2. 專有名詞推導：與日照採光相關的南向構造為「玻璃窗/採光面」（Glazing）。',
            '3. 正確答案為 (B)。'
          ],
          answer: '(B) Glass windows or transparent panels'
        },
        {
          difficulty: '進階',
          question: 'Inferring from the technical reading on seismic structures, why is "flexibility" often preferred over "pure rigid strength" in contemporary skyscraper design?\n(A) Rigid structures are cheaper to build but look unattractive.\n(B) Flexible designs allow the building to absorb and dissipate seismic energy without catastrophic collapse.\n(C) Flexible materials eliminate the need for foundations.\n(D) Pure rigid strength makes buildings sway too rapidly in low winds.',
          steps: [
            '1. 推理分析：文章指出 "contemporary structural engineering emphasizes energy dissipation and flexibility"。',
            '2. 結構力學推論：若完全剛硬(rigid)，面臨巨大強震易發生脆性破壞；適度韌性與彈性(flexibility)結合消能可避免結構脆斷毀滅。',
            '3. 答案為 (B)。'
          ],
          answer: '(B) Flexible designs allow the building to absorb and dissipate seismic energy without catastrophic collapse.'
        }
      ],
      practice: {
        difficulty: '基礎',
        question: 'According to the passage on passive solar design, what is the main difference between passive and active solar systems?\n(A) Passive systems rely on mechanical pumps.\n(B) Active systems operate without solar panels.\n(C) Passive design utilizes structural elements without mechanical devices.\n(D) Active design relies solely on thermal mass like stone and concrete.',
        steps: [
          '1. 定位關鍵字：passive vs active solar systems。',
          '2. 掃描短文細節："Unlike active solar systems, passive solar design operates without mechanical devices such as pumps..."。',
          '3. 選項比對：(C) 正確說明被動式設計不依賴機械設備，利用建築構造運作。'
        ],
        answer: '(C) Passive design utilizes structural elements without mechanical devices.'
      }
    },
    {
      slug: 'conversation-daily-use',
      title: '4. 對話與日常應用',
      desc: '建築工地溝通、事務所設計會議、社交與生活英語、職場對話習慣用語。',
      status: 'done',
      concepts: [
        {
          heading: '施工現場指令、安全通報與進度對話 (Jobsite Communication)',
          body: '建築工程現場溝通講求精準、簡短與安全規範指示。',
          table: {
            headers: ['常用情境', '實用對話句型', '中文意義與回應方式'],
            rows: [
              ['施工進度確認', 'Is the concrete foundation ready for inspection?', 'Yes, it has fully cured and passed moisture testing.'],
              ['安全防護警告', 'Make sure everyone wears hard hats and safety harnesses in the crane zone.', 'Understood, safety protocol enforced.'],
              ['施工瑕疵反饋', 'We found a hairline crack along the primary beam.', 'Let\'s stop pouring and call the structural engineer immediately.']
            ]
          }
        },
        {
          heading: '事務所設計簡報、修改意見與預算協商 (Client & Architect Meetings)',
          body: '建築師與業主或顧問開會時，常用的專業委婉表達 (Tactful Language) 與需求確認。',
          steps: [
            '提出建議 (Making Suggestions): "We propose replacing the steel cladding with timber panels to enhance sustainability."',
            '處理預算異議 (Addressing Cost Concerns): "While the upfront cost is higher, it significantly lowers long-term operational expenses."',
            '確認改圖需求 (Clarifying Revisions): "Could you specify if you\'d prefer an open-plan layout for the ground floor?"'
          ]
        },
        {
          heading: '高頻職場英語慣用語與片語 (Idioms in Professional & Daily Contexts)',
          body: '在日常與職場對話中，慣用語 (Idioms) 能讓表達更加地道流暢。',
          table: {
            headers: ['慣用語 (Idiom)', '字面與真實語意', '職場對話應用範例'],
            rows: [
              ['Back to the drawing board', '回到草案階段重來', 'The zoning board rejected our proposal, so it\'s back to the drawing board.'],
              ['On the same page', '達成共識 / 想法一致', 'Let\'s review the floor plans to make sure we are all on the same page.'],
              ['Cut corners', '偷工減料 / 圖省事', 'Never cut corners on structural steel; safety is paramount.'],
              ['Iron out the details', '敲定細節', 'We have agreed on the main contract; now we just need to iron out the details.']
            ]
          }
        },
        {
          heading: '英語自然口語連音與弱化規則 (Connected Speech Mechanics)',
          body: '理解連音 (Linking) 與弱讀 (Reduction) 對於聽懂外籍顧問或工程師簡報至關重要。',
          formula: '連音: Consonant + Vowel -> Check it out (/tʃɛ-kɪ-daʊt/)\n端音省略: Last night (/læs naɪt/), Hard hat (/hɑː hæt/)\n弱讀形式: going to -> gonna, want to -> wanna'
        },
        {
          heading: '材料詢價與供應商商業會話 (Procurement & Vendor Inquiries)',
          body: '採購建材、詢問交貨期 (lead time) 及單價時的正規對話結構。',
          steps: [
            '詢價引言: "I am writing/calling to request a price quotation for 500 square meters of double-glazed glass panels."',
            '詢問交貨期: "Could you inform us about the lead time for site delivery?"',
            '結尾確認: "We would appreciate it if you could send the catalog by end of day."'
          ]
        }
      ],
      practices: [
        {
          difficulty: '基礎',
          question: 'Architect: "The structural review revealed that the column thickness is inadequate."\nClient: "So what should we do now?"\nArchitect: "________"\n(A) Great! Let me buy you lunch.\n(B) It\'s back to the drawing board to revise the structural calculations.\n(C) Never mind, let\'s build it without columns.\n(D) The building is completely finished.',
          steps: [
            '1. 理解語意：建築師表示柱厚度不足，業主詢問對策。',
            '2. 慣用語應用："back to the drawing board" 表示回到設計/計算階段重新推導。',
            '3. 選項 (B) 最符合邏輯對話。'
          ],
          answer: '(B) It\'s back to the drawing board to revise the structural calculations.'
        },
        {
          difficulty: '中等',
          question: 'Contractor: "Can we substitute this high-grade steel with a cheaper alternative to save money?"\nProject Manager: "Absolutely not! We must never _______ when it comes to structural safety."\n(A) cut corners (B) hit the road (C) burn the midnight oil (D) call it a day',
          steps: [
            '1. 語境分析：承包商詢問能否換便宜鋼材省錢，專案經理嚴正拒絕。',
            '2. 片語選擇："cut corners" 意指偷工減料或圖省事規避安全要求。',
            '3. 正確答案為 (A)。'
          ],
          answer: '(A) cut corners'
        },
        {
          difficulty: '進階',
          question: 'Site Supervisor: "We noticed a discrepancy between the architectural blueprint and the plumbing plan."\nLead Engineer: "Let\'s call an emergency coordination meeting so everyone is _______ before we pour the slab."\n(A) out of the loop (B) under the weather (C) on the same page (D) over the moon',
          steps: [
            '1. 對話分析：工地主任發現圖面矛盾，總工程師提議開會協調。',
            '2. 慣用語辨析："on the same page" 表示團隊想法一致、資訊同步。',
            '3. 答案為 (C)。'
          ],
          answer: '(C) on the same page'
        },
        {
          difficulty: '進階',
          question: 'Client: "What is the lead time for shipping the custom curtain wall panels from Europe?"\nSupplier: "________"\n(A) They are painted blue and green.\n(B) It usually takes approximately four weeks after sample approval.\n(C) The total building height is 50 meters.\n(D) Yes, I like curtain walls very much.',
          steps: [
            '1. 分析詢問對象：Client 詢問 "lead time"（生產與交貨所需時間）。',
            '2. 匹配回答：Supplier 應提供具體時間軸（"four weeks after sample approval"）。',
            '3. 正確答案為 (B)。'
          ],
          answer: '(B) It usually takes approximately four weeks after sample approval.'
        }
      ],
      practice: {
        difficulty: '基礎',
        question: 'Architect: "The structural review revealed that the column thickness is inadequate."\nClient: "So what should we do now?"\nArchitect: "________"\n(A) Great! Let me buy you lunch.\n(B) It\'s back to the drawing board to revise the structural calculations.\n(C) Never mind, let\'s build it without columns.\n(D) The building is completely finished.',
        steps: [
          '1. 理解語意：建築師表示柱厚度不足，業主詢問對策。',
          '2. 慣用語應用："back to the drawing board" 表示回到設計/計算階段重新推導。',
          '3. 選項 (B) 最符合邏輯對話。'
        ],
        answer: '(B) It\'s back to the drawing board to revise the structural calculations.'
      }
    },
    {
      slug: 'cloze-passage-structure',
      title: '5. 克漏字與篇章結構',
      desc: '篇章銜接、轉折語與邏輯連接詞、克漏字實戰解題策略與篇章結構重建。',
      status: 'done',
      concepts: [
        {
          heading: '克漏字三大突破步驟 (Comprehensive Cloze Test Methodology)',
          body: '克漏字整合語意、詞性與句法邏輯，不可單純逐字翻譯。',
          steps: [
            '步驟一 (Context & Tense)：快速掃視前後文，確定整篇語氣 (說明文/敘事文) 與主要時態 (過去/現在/未來)。',
            '步驟二 (Grammar & Part of Speech): 分析空格在句中的文法功能 (動詞時態/被動、介系詞搭配、關係代名詞、名詞/形容詞/副詞)。',
            '步驟三 (Logical Cohesion): 根據前後兩句的邏輯關係 (遞進、對比、因果、舉例、轉折)，選擇最適當的銜接詞。'
          ]
        },
        {
          heading: '高頻邏輯轉折語總整理 (Comprehensive Transitions Guide)',
          body: '轉折語是段落語意順暢的靈魂，也是篇章結構題的核心考點。',
          table: {
            headers: ['邏輯關係', '轉折副詞 (Adverbs)', '介系詞片語 (Prepositions)', '從屬連接詞 (Conjunctions)'],
            rows: [
              ['對比 / 轉折', 'however, nevertheless, nonetheless', 'despite, in spite of, regardless of', 'although, even though, whereas'],
              ['因果關係', 'therefore, consequently, as a result', 'due to, owing to, because of', 'because, since, as'],
              ['遞進 / 補充', 'furthermore, moreover, in addition', 'besides, in addition to', 'not only... but also...'],
              ['條件 / 假設', 'otherwise (否則)', 'in case of', 'provided that, as long as']
            ]
          }
        },
        {
          heading: '段落銜接與句間指代線索 (Cohesion & Coherence Signals)',
          body: '篇章結構題考驗段落發展脈絡，需善用代名詞、冠詞與重複關鍵字。',
          steps: [
            '指代名詞線索 (Pronoun Clues): 前文出現 "architects", 後文應接 "they" 或 "these designers"。',
            '冠詞線索 (Article Clues): 首次提及用 "a/an + N", 再次提及或特指用 "the + N"。',
            '時間與順序線索 (Chronological Markers): First, Subsequently, Concurrently, Finally.'
          ]
        },
        {
          heading: '篇章實戰演練：現代重木構造 (Sample Cloze Analysis: Timber Architecture)',
          body: 'Read the excerpt and analyze the logical blanks:\n"Cross-Laminated Timber (CLT) is revolutionary in modern engineering. ___(1)___ traditional concrete, CLT panels are lightweight yet remarkably strong. ___(2)___, manufacturing CLT sequesters carbon, making it an environmentally friendly alternative. ___(3)___ some building officials initially raised fire safety concerns, extensive testing proved that thick timber chars naturally, protecting the inner core."',
          table: {
            headers: ['空格號', '正確答案語意', '語法與邏輯解析'],
            rows: [
              ['(1)', 'Unlike / Compared to', '表示與傳統混凝土對比'],
              ['(2)', 'Furthermore / In addition', '遞進增加木材固碳優點'],
              ['(3)', 'Although / Even though', '引導讓步子句（雖然初期有疑慮，但實驗證實安全）']
            ]
          }
        },
        {
          heading: '克漏字常考固定動名詞與不定詞搭配 (Collocations & Fixed Idiomatic Patterns)',
          body: '掌握動詞接 `to V` 或 `V-ing` 的固定用法。',
          steps: [
            '接 V-ing (動名詞): avoid, suggest, consider, risk, look forward to (+ V-ing), object to (+ V-ing).',
            '接 to V (不定詞): intend, plan, decide, fail, manage, attempt.',
            '名詞 + 介系詞: solution to, response to, approach to, impact on, key to.'
          ]
        }
      ],
      practices: [
        {
          difficulty: '基礎',
          question: 'The contractor worked extra hours every night; ________, the renovation project was completed two weeks ahead of schedule.\n(A) however (B) as a result (C) otherwise (D) nevertheless',
          steps: [
            '1. 兩句邏輯分析：前句為「承包商每晚加班」，後句為「裝修計畫提早兩週完成」。',
            '2. 關係判定：前後句為明確的「因果關係」。',
            '3. 選項解析：(A) however (然而) (B) as a result (結果/因此) (C) otherwise (否則) (D) nevertheless (儘管如此)。故選 (B)。'
          ],
          answer: '(B) as a result'
        },
        {
          difficulty: '中等',
          question: '_______ the extreme heat and humidity during the summer months, the construction team managed to finish the foundation on time.\n(A) Although (B) Despite (C) Because (D) Even though',
          steps: [
            '1. 結構與詞性分析：空格後接名詞片語 "the extreme heat and humidity..."（非完整子句）。',
            '2. 語意判定：酷熱潮濕 vs 按時完成，屬於讓步對比邏輯。',
            '3. 選項比對：Although 與 Even though 後接子句 (S+V)；Despite 為介系詞，後接名詞片語。故選 (B)。'
          ],
          answer: '(B) Despite'
        },
        {
          difficulty: '進階',
          question: 'Fill in the blank with the correct structural conjunction:\n"Modern smart buildings can automatically adjust internal temperature. _______, they can monitor energy consumption in real time to minimize power waste."\n(A) On the contrary (B) In addition (C) For instance (D) In contrast',
          steps: [
            '1. 前後句分析：前句說明智慧建築「可自動調節室內溫度」，後句說明「可即時監控能源消耗」。',
            '2. 邏輯判定：後句為額外補充之正面優點（遞進補充關係）。',
            '3. 選項辨析：(B) In addition（此外/再者）符合遞進語意。'
          ],
          answer: '(B) In addition'
        },
        {
          difficulty: '進階',
          question: 'Select the correct verb form for the blank:\n"Architects must avoid _______ energy efficiency when aiming to lower initial material costs."\n(A) to compromise (B) compromising (C) compromised (D) compromise',
          steps: [
            '1. 文法搭配：動詞 avoid（避免）後接動名詞 (V-ing) 作受詞。',
            '2. 句意：建築師在試圖降低初期材料成本時，必須避免「妥協/犧牲」能源效率。',
            '3. 答案為 (B) compromising。'
          ],
          answer: '(B) compromising'
        }
      ],
      practice: {
        difficulty: '基礎',
        question: 'The contractor worked extra hours every night; ________, the renovation project was completed two weeks ahead of schedule.\n(A) however (B) as a result (C) otherwise (D) nevertheless',
        steps: [
          '1. 兩句邏輯分析：前句為「承包商每晚加班」，後句為「裝修計畫提早兩週完成」。',
          '2. 關係判定：前後句為明確的「因果關係」。',
          '3. 選項解析：(A) however (然而) (B) as a result (結果/因此) (C) otherwise (否則) (D) nevertheless (儘管如此)。故選 (B)。'
        ],
        answer: '(B) as a result'
      }
    },
    {
      slug: 'translation-writing',
      title: '6. 翻譯與寫作基礎',
      desc: '中譯英技巧、句型結構重組、建築與技術段落寫作結構、標點符號與寫作修辭。',
      status: 'done',
      concepts: [
        {
          heading: '中譯英語序轉換與動詞核心化 (Chinese-to-English Translation Principles)',
          body: '中文重意合 (無明顯主被動與時態標記)，英文重形合 (必須有明確主詞 S 與動詞 V)。',
          table: {
            headers: ['常見中式英文迷思 (Chinglish)', '標準專業英文 (Standard English)', '翻譯轉化關鍵技巧'],
            rows: [
              ['There are many people think...', 'Many people think... / There are many people who think...', '避免雙動詞連用，善用關係子句'],
              ['My home is very near to school.', 'My home is very close to the school.', '介系詞與形容詞精準搭配'],
              ['This building cost very high.', 'The construction cost of this building is very high.', '主詞與名詞語意匹配']
            ]
          }
        },
        {
          heading: '專業段落寫作架構 (Paragraph Architecture: Topic, Support, Conclusion)',
          body: '一個邏輯嚴密、結構清晰的學術或英文短文段落必須具備三個要素。',
          steps: [
            '1. Topic Sentence (主題句): 開門見山指出該段核心論點。例: "Sustainable building materials offer long-term environmental benefits."',
            '2. Supporting Sentences (支持句): 提供 2-3 個具體證據、數據或案例佐證。例: "First, bamboo grows rapidly... Second, recycled steel reduces raw mining..."',
            '3. Concluding Sentence (結論句): 重申主題或總結對未來的展望。例: "In conclusion, adopting green materials is essential for future urban development."'
          ]
        },
        {
          heading: '提升寫作句型多樣性 (Varying Sentence Structures)',
          body: '避免連續使用簡單句 (S+V+O)，交替使用單句、複句、分詞構句與倒裝句。',
          table: {
            headers: ['句型級距', '寫作範例句型', '句法品質評析'],
            rows: [
              ['基礎單句', 'The tower is high. It withstands wind.', '語意過於平淡'],
              ['複合句', 'The tower is tall, so engineers built strong foundations.', '連接詞協調'],
              ['關係子句複合句', 'The tower, which reaches a height of 500 meters, relies on deep foundations.', '結構嚴謹專業'],
              ['分詞構句高級句', 'Reaching a height of 500 meters, the tower relies on deep foundations to resist lateral wind loads.', '簡潔精煉高分句型']
            ]
          }
        },
        {
          heading: '分號、冒號與破折號之精準用法 (Punctuation Mechanics in Academic Writing)',
          body: '正確使用標點符號能大幅提升技術報告與寫作之專業質感。',
          steps: [
            '分號 (Semicolon `;`): 用於連接兩個獨立但語意緊密的完整句子，常搭配轉折副詞。例: "Concrete is strong in compression; however, it is weak in tension."',
            '冒號 (Colon `:`): 用於引出清單、解釋或總結。例: "The design requires three main elements: sunlight, ventilation, and insulation."',
            '破折號 (Dash `—`): 用於強調突兀的轉折或補充說明。'
          ]
        },
        {
          heading: '建築與空間主題經典句子翻譯拆解 (Architectural Translation Walkthrough)',
          body: '示範將複雜中文句拆解並翻譯為符合英文語法之標準句子。\n中文：「為了減少碳排放，越來越多建築師開始在都市設計中使用木材與太陽能板。」',
          steps: [
            '步驟一 (找主謂受): 主詞 (Architects) + 動詞 (are beginning to use / are adopting) + 受詞 (timber and solar panels)。',
            '步驟二 (目的片語): "To reduce carbon emissions" 或 "In order to lower carbon footprint"。',
            '步驟三 (地方與修飾語): "in urban design"。',
            '整合句子: "To reduce carbon emissions, an increasing number of architects are incorporating timber and solar panels into urban design."'
          ]
        }
      ],
      practices: [
        {
          difficulty: '基礎',
          question: '請將以下句子翻譯成英文：「這座歷史建築在去年完成了全面翻修。」\n(Hint: 使用被動語態與 last year)',
          steps: [
            '1. 確定主詞：「這座歷史建築」 -> This historic building。',
            '2. 確定動詞與時態與語態：「在去年完成了翻修」 -> 被動語態 + 過去式 (was completely renovated last year)。',
            '3. 組合翻譯：This historic building was completely renovated last year.'
          ],
          answer: 'This historic building was completely renovated last year.'
        },
        {
          difficulty: '中等',
          question: 'Identify the sentence with CORRECT punctuation and grammar:\n(A) Concrete is strong in compression, however it is weak in tension.\n(B) Concrete is strong in compression; however, it is weak in tension.\n(C) Concrete is strong in compression however it is weak in tension.\n(D) Concrete is strong in compression; However it is weak in tension.',
          steps: [
            '1. 分析文法：however 為轉折副詞 (conjunctive adverb)，不能直接連接兩個獨立子句（會造成 comma splice 錯誤）。',
            '2. 正確標點：兩個獨立子句中間需使用分號 `;`，且 however 後加逗號 `,`。',
            '3. 選項 (B) 標點與大小寫完全正確。'
          ],
          answer: '(B) Concrete is strong in compression; however, it is weak in tension.'
        },
        {
          difficulty: '進階',
          question: '請將以下中文句子翻譯成流暢的英文：「良好通風與自然採光是創造健康室內環境的關鍵要素。」',
          steps: [
            '1. 找出主詞複合結構：「良好通風與自然採光」 -> Good ventilation and natural lighting。',
            '2. 找出主要動詞與補語：「是關鍵要素」 -> are key elements / essential factors。',
            '3. 目的/對象片語：「創造健康室內環境」 -> for creating a healthy indoor environment。',
            '4. 完整翻譯：Good ventilation and natural lighting are key elements for creating a healthy indoor environment.'
          ],
          answer: 'Good ventilation and natural lighting are key elements for creating a healthy indoor environment.'
        },
        {
          difficulty: '進階',
          question: 'Which of the following best combines the two simple sentences into a sophisticated participle phrase?\nSentence 1: The architect recognized the environmental impact of traditional concrete.\nSentence 2: The architect decided to switch to recycled building materials.\n(A) Recognizing the environmental impact of traditional concrete, the architect decided to switch to recycled building materials.\n(B) Recognized the environmental impact, the architect decided to switch.\n(C) The architect recognized the environmental impact, so he deciding to switch.\n(D) Because recognizing the impact, the architect decided to switch.',
          steps: [
            '1. 分析兩句：主詞相同（The architect）。',
            '2. 分詞簡化：將句 1 的主動動詞 recognized 改為現在分詞 Recognizing (V-ing)。',
            '3. 比對選項：(A) 文法無瑕且句型流暢專業。'
          ],
          answer: '(A) Recognizing the environmental impact of traditional concrete, the architect decided to switch to recycled building materials.'
        }
      ],
      practice: {
        difficulty: '基礎',
        question: '請將以下句子翻譯成英文：「這座歷史建築在去年完成了全面翻修。」\n(Hint: 使用被動語態與 last year)',
        steps: [
          '1. 確定主詞：「這座歷史建築」 -> This historic building。',
          '2. 確定動詞與時態與語態：「在去年完成了翻修」 -> 被動語態 + 過去式 (was completely renovated last year)。',
          '3. 組合翻譯：This historic building was completely renovated last year.'
        ],
        answer: 'This historic building was completely renovated last year.'
      }
    }
  ]
};
