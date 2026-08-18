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
      desc: '深入掌握構詞法、建築與工程專業字彙 (Architectural Terminology)、高頻動詞片語與空間位置介系詞。\n\n🔥 V6.0 考前秒殺秘訣：此核心概念統測出題率極高，建議善用圖解與鷹架提示反覆練習！',
      status: 'done',
      gradeLevel: 10,
      examHitRate: 3,
      fatalTraps: [{"wrongThinking":"直覺選擇字面相近選項，未仔細檢驗題幹之特定限制條件。","correctThinking":"回歸核心公理與基本定義，逐項檢核題幹條件與反例。","trapDescription":"80% 考生在概念題中因粗心忽略前提假設而失分。"}],
      eliteMentalModels: [{"technique":"第一性原理拆解法 (First Principles Breakdown)","explanation":"不依賴死記死背，由最底層的定義與公理邏輯推導出解題路徑，降維打擊各類統測變形題。"}],
      covered_question_ids: ['111-english-1', '111-english-2', '111-english-3', '111-english-4', '111-english-5', '111-english-6', '111-english-7', '111-english-8', '112-english-1', '112-english-2', '112-english-3', '112-english-4', '112-english-5', '112-english-6', '112-english-7', '112-english-8', '113-english-1', '113-english-2', '113-english-3', '113-english-4', '113-english-5', '113-english-6', '113-english-7', '113-english-8', '114-english-1', '114-english-2', '114-english-3', '114-english-4', '114-english-5', '114-english-6', '114-english-7', '114-english-8', '115-english-1', '115-english-2', '115-english-3', '115-english-4', '115-english-5', '115-english-6', '115-english-7', '115-english-8', '110-english-1', '110-english-2', '110-english-3', '110-english-4', '110-english-5', '110-english-6', '110-english-7', '110-english-8'],
      worked_examples: [
        {
          question: '【步驟化例題】建築英文專有名詞辨析：Read the sentence: "The architect specified \"reinforced concrete\" for the structural frame to withstand seismic forces." What does the term "reinforced concrete" mean in Chinese?',
          difficulty: '基礎',
          steps: [ "步驟 1：分析單字結構。concrete 意為「混凝土」，reinforced 為 reinforce（加強/強化）之過去分詞。", "步驟 2：結合工程上下文。withstand seismic forces (抵禦地震力)，內部加入鋼筋（rebar）抗拉之混凝土。", "步驟 3：確定專業中文譯名。即為「鋼筋混凝土 (RC)」。" ], 
          answer: '「鋼筋混凝土 (Reinforced Concrete, RC)」'
        }
      ],
      "illustrations": [ 'context.webp', 'mechanism.webp', 'comparison.webp', 'step-by-step.webp', 'english-real-world.webp' , 'english-infographic.webp', 'concept-diagram.webp', 'formula-visual.webp' ],
      concepts: [
        {
          heading: '字首、字根與字尾構詞分析 (Etymology & Morphology in Technical English)',
          body: '掌握**拉丁**與**希臘**字根能大幅提升專業與學術單字之記憶效率，並能在閱讀測驗中快速推測生字字義。透過拆解詞彙，不再死記硬背，而是理解詞彙的<span className='text-rose-600 font-bold'>核心邏輯</span>。',
          steps: [
            '**分析字首 (Prefix)**：改變單字方向或語意 (如 <span className='text-indigo-600 font-bold'>re-</span> 重複/再次, <span className='text-indigo-600 font-bold'>sub-</span> 下/基礎, <span className='text-indigo-600 font-bold'>anti-/counter-</span> 反對/抵抗)。',
            '**分析字根 (Root)**：構成單字的核心概念 (如 <span className='text-indigo-600 font-bold'>struct/tect</span> 建造, <span className='text-indigo-600 font-bold'>ped/pod</span> 腳/基座, <span className='text-indigo-600 font-bold'>meter</span> 測量)。',
            '**分析字尾 (Suffix)**：決定單字詞性 (如 <span className='text-indigo-600 font-bold'>-able/ible</span> 可…的, <span className='text-indigo-600 font-bold'>-tion</span> 名詞, <span className='text-indigo-600 font-bold'>-ize</span> 動詞)。'
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
          body: '統測與專業英文 (ESP) 常考之建築圖面、構造材料與空間設計關鍵名詞。熟記這些**專業術語**能讓你在此類<span className='text-rose-600 font-bold'>情境考題</span>中秒殺得分。',
          table: {
            headers: ['英文單字/詞組', '詞性', '中文翻譯', '專業情境應用與例句'],
            rows: [
              ['Façade', 'n.', '建築正面 / 外牆', 'The main façade features large double-glazed windows.'],
              ['Blueprint / Floor Plan', 'n.', '藍圖 / 平面圖', 'Architects examine the blueprint before concrete pouring.'],
              ['Load-bearing', 'adj.', '承重的', 'Removing a load-bearing wall requires structural recalculation.'],
              ['Fenestration', 'n.', '開窗設計 / 門窗佈局', 'Proper fenestration maximizes natural light and ventilation.'],
              ['Sustainability', 'n.', '永續性 / 環保發展', 'Using recycled steel enhances the sustainability of the project.'],
              ['Elevation', 'n.', '立面圖 / 海拔高度', 'The front elevation illustrates the vertical height of the roof.'],
              ['Insulation', 'n.', '隔熱材 / 絕緣體', 'High-density fiberglass provides effective thermal insulation.'],
              ['Cantilever', 'n./v.', '懸臂樑 / 懸臂伸出', 'The modern house features a dramatic cantilevered balcony.']
            ]
          }
        },
        {
          heading: '施工與工程高頻動詞片語 (Phrasal Verbs in Engineering & Construction)',
          body: '動詞加上介系詞或副詞形成的片語，在語意與文法上需特別留意<span className='text-rose-600 font-bold'>代名詞受詞位置</span>與**固定介系詞搭配**。',
          steps: [
            '**可拆分片語 (Separable Phrasal Verbs)**：若受詞為代名詞，必須放在動詞與介系詞之間 (如 <span className='text-indigo-600 font-bold'>tear it down</span>, <span className='text-indigo-600 font-bold'>set it up</span>)。',
            '**固定介系詞搭配**：工程規範中常見 <span className='text-indigo-600 font-bold'>comply with</span> (遵守), <span className='text-indigo-600 font-bold'>consist of</span> (由…組成), <span className='text-indigo-600 font-bold'>adapt to</span> (適應)。'
          ],
          table: {
            headers: ['動詞片語', '中文涵義', '常用工程與施工情境範例'],
            rows: [
              ['Tear down / Demolish', '拆除 (舊構造物)', 'Workers tore down the decaying concrete partition wall.'],
              ['Set up / Erect', '架設 / 組裝', 'Scaffolding was set up around the perimeter of the tower.'],
              ['Comply with', '符合 / 遵守規範', 'The building design must comply with seismic safety codes.'],
              ['Break down', '細分 / 故障', 'The budget is broken down into material and labor costs.'],
              ['Call for', '呼籲 / 需要', 'The unexpected soil settlement calls for immediate inspection.'],
              ['Pave the way for', '為…鋪路 / 為…奠定基礎', 'Sustainable urban planning paves the way for greener cities.']
            ]
          }
        },
        {
          heading: '精準用字與近義詞辨析 (Nuances in Technical Synonyms)',
          body: '在工程技術報告中，相近字彙常有明確的<span className='text-rose-600 font-bold'>專業差異</span> (如 **construct** vs. **fabricate**)。精準用字展現專業素養！',
          table: {
            headers: ['字組', '差異辨析與專業區分', '正確用法與範例'],
            rows: [
              ['Construct vs. Fabricate', 'Construct 指工地現場建造總體結構；Fabricate 指工廠預製零組件。', 'Steel beams are fabricated in factories and assembled on site.'],
              ['Durable vs. Sturdy', 'Durable 強調材質經久耐用抗風化；Sturdy 強調結構實體堅固穩重。', 'Durable granite counter; sturdy load-bearing masonry wall.'],
              ['Demolish vs. Dismantle', 'Demolish 為毀壞性拆除；Dismantle 為按零組件完整拆卸。', 'Dismantle steel scaffolding for future reuse.'],
              ['Renovate vs. Restore', 'Renovate 著重翻新現代化設施；Restore 著重將古蹟修復回歷史原貌。', 'Restore the historic chapel façade; renovate the interior office.']
            ]
          }
        },
        {
          heading: '空間方位與幾何關係介系詞 (Spatial Prepositions in Architecture)',
          body: '精準描述建築體、空間單元與結構構件之相對<span className='text-rose-600 font-bold'>幾何關係</span>，在閱讀測驗中是重要的**空間解讀**依據。',
          steps: [
            '**adjacent to** (緊鄰/相鄰): The secondary exit is <span className='text-indigo-600 font-bold'>adjacent to</span> the main elevator shaft.',
            '**parallel to** (平行於): The main corridor runs <span className='text-indigo-600 font-bold'>parallel to</span> the exterior curtain wall.',
            '**perpendicular to** (垂直於): Structural cross-beams must be <span className='text-indigo-600 font-bold'>perpendicular to</span> the main joists.',
            '**beneath / underneath** (在…正下方): High-voltage cables are embedded <span className='text-indigo-600 font-bold'>beneath</span> the sub-floor.',
            '**opposite to / facing** (面對/正對): The entrance gate is directly <span className='text-indigo-600 font-bold'>facing</span> the central plaza.'
          ]
        },
        {
          heading: '綠建築與永續材料專有名詞彙編 (Green Building & Eco-Material Vocabulary)',
          body: '最新能源規範與 **LEED 認證**高頻評估名詞。<span className='text-rose-600 font-bold'>綠建築</span>是近年統測的超級熱門考點！',
          table: {
            headers: ['術語名詞', '中文名稱', '技術涵義與應用'],
            rows: [
              ['Carbon Footprint', '碳足跡', 'Total greenhouse gas emissions generated during building lifecycle'],
              ['Photovoltaic (PV)', '太陽能光電板', 'Devices converting solar energy directly into electricity'],
              ['Thermal Envelope', '建築外皮隔熱層', 'Insulated barrier preventing indoor heat loss or gain'],
              ['Graywater System', '中水/灰水回收系統', 'Reusing wastewater from sinks and showers for landscape irrigation']
            ]
          }
        },
        {
          heading: '統測高頻必考動詞片語與介系詞搭配總整理 (High-Frequency Phrasal Verbs & Collocations)',
          body: '統測英文單字片語題與克漏字中，動詞介系詞**固定搭配 (Collocations)** 為<span className='text-rose-600 font-bold'>得分核心</span>，需重點熟記介系詞與接續動詞型態。',
          table: {
            headers: ['動詞片語 / 搭配詞', '介系詞用法規範', '中文涵義解析', '典型統測考題句型範例'],
            rows: [
              ['look forward to', 'to + V-ing / N', '期待 / 盼望', 'We look forward to hearing from you soon concerning the contract.'],
              ['take advantage of', 'of + N', '利用 / 善用 (機會或資源)', 'Students should take advantage of the library resources.'],
              ['lead to / result in', 'to / in + N / V-ing', '導致 / 引致 (結果)', 'Careless driving often leads to serious traffic accidents.'],
              ['result from', 'from + 原因 N', '起因於 / 源自於', 'The structural crack resulted from the severe earthquake.'],
              ['be responsible for', 'for + N / V-ing', '對…負責', 'The project manager is responsible for staying within budget.'],
              ['depend on / rely on', 'on / upon + N', '依賴 / 取決於', 'The success of the solar project depends on sunny weather.'],
              ['carry out / execute', 'out + N', '執行 / 實施 (計畫、試驗)', 'Engineers carried out a series of stress tests on the steel beam.'],
              ['call off / cancel', 'off + N', '取消 (會議或活動)', 'The outdoor ceremony was called off due to heavy rain.']
            ]
          }
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
          difficulty: '基礎',
          question: 'The main _______ of the newly designed museum features transparent glass panels that allow natural sunlight to illuminate the lobby.\n(A) sub-base (B) façade (C) scaffold (D) joist',
          steps: [
            '1. 句意分析：新博物館的主「外牆/立面」採用透明玻璃板，使陽光能照亮大廳。',
            '2. 選項辨析：(A) sub-base 次底層 (B) façade 建築外牆/立面 (C) scaffold 腳手架 (D) joist 樓板樑。',
            '3. 故正確答案為 (B) façade。'
          ],
          answer: '(B) façade'
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
          difficulty: '中等',
          question: 'Structural cross-beams in steel framing must be placed _______ to the main supporting joists to guarantee load balance.\n(A) parallel (B) perpendicular (C) subterranean (D) adjacent',
          steps: [
            '1. 句意分析：鋼框架中的結構交叉樑必須與主要支撐樑「垂直」擺設，以確保載重平衡。',
            '2. 詞彙選擇：(A) parallel 平行的 (B) perpendicular 垂直的 (C) subterranean 地下的 (D) adjacent 相鄰的。',
            '3. 答案為 (B) perpendicular。'
          ],
          answer: '(B) perpendicular'
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
        },
        {
          difficulty: '進階',
          question: 'Unlike temporary housing structures, civic monuments are engineered with highly _______ stone materials to withstand centuries of weathering.\n(A) perishable (B) durable (C) fragile (D) vulnerable',
          steps: [
            '1. 分析對比與句意：不同於臨時房屋，市立紀念碑採用極其「經久耐用的」石材建造，以抵禦數世紀的風化。',
            '2. 詞彙辨析：(A) perishable 易腐爛的 (B) durable 經久耐用的 (C) fragile 易碎的 (D) vulnerable 脆弱的。',
            '3. 故選 (B) durable。'
          ],
          answer: '(B) durable'
        },
        {
          difficulty: '進階',
          question: 'To eliminate toxic indoor pollutants, green building standards demand the installation of high-efficiency thermal _______ within exterior walls.\n(A) insulation (B) elevation (C) fluctuation (D) orientation',
          steps: [
            '1. 句意分析：為了提升能效與舒適度，綠建築標準要求在外牆內安裝高效能熱「隔熱材」(thermal insulation)。',
            '2. 詞彙選擇：(A) insulation 隔熱/絕緣 (B) elevation 立面/海拔 (C) fluctuation 波動 (D) orientation 朝向。',
            '3. 答案為 (A) insulation。'
          ],
          answer: '(A) insulation'
        }
      ]
    },
    {
      slug: 'grammar-patterns',
      title: '2. 文法句型',
      desc: '五大基本句型、時態與被動語態、關係子句、分詞構句與假設語氣。\n\n🔥 V6.0 考前秒殺秘訣：此核心概念統測出題率極高，建議善用圖解與鷹架提示反覆練習！',
      status: 'done',
      gradeLevel: 10,
      examHitRate: 3,
      fatalTraps: [{"wrongThinking":"直覺選擇字面相近選項，未仔細檢驗題幹之特定限制條件。","correctThinking":"回歸核心公理與基本定義，逐項檢核題幹條件與反例。","trapDescription":"80% 考生在概念題中因粗心忽略前提假設而失分。"}],
      eliteMentalModels: [{"technique":"第一性原理拆解法 (First Principles Breakdown)","explanation":"不依賴死記死背，由最底層的定義與公理邏輯推導出解題路徑，降維打擊各類統測變形題。"}],
      covered_question_ids: ['111-english-9', '111-english-10', '112-english-9', '112-english-10', '113-english-9', '113-english-10', '114-english-9', '114-english-10', '115-english-9', '115-english-10', '110-english-9', '110-english-10'],
      worked_examples: [
        {
          question: '【步驟化例題】施工規範說明書被動語態句型：Convert the active sentence into a passive sentence used in technical specifications: "The contractor must compact the soil backfill in layers."',
          difficulty: '中等',
          steps: [ "步驟 1：找出主詞、動詞與受詞。Subject: The contractor, Verb: must compact, Object: the soil backfill.", "步驟 2：將受詞移至句首作為被動主詞。The soil backfill...", "步驟 3：動詞改為被動態 \"must be + p.p.\"。must be compacted in layers (by the contractor)." ], 
          answer: '"The soil backfill must be compacted in layers by the contractor."'
        }
      ],
      "illustrations": [ 'context.webp', 'mechanism.webp', 'comparison.webp', 'step-by-step.webp', 'english-real-world.webp' , 'grammar-patterns-infographic.webp' ],
      concepts: [
        {
          heading: '英文五大基本句型與施工語境應用 (Five Basic Sentence Structures)',
          body: '解析長難句時，先找出**主詞 (S)** 與**主要動詞 (V)** 是關鍵。所有複雜的技術句型皆衍生自<span className='text-rose-600 font-bold'>五大基本結構</span>。',
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
          body: '科技與工程報告強調**客觀性**與**去個人化 (Impersonal tone)**，廣泛採用<span className='text-rose-600 font-bold'>被動語態</span> (S + be + p.p.) 與<span className='text-rose-600 font-bold'>完成時態</span>。',
          steps: [
            '主動轉被動：將主動句受詞變為被動句主詞，動詞轉為 be + p.p.。(例: "Workers poured concrete." -> "Concrete was poured.")',
            '**現在完成式 (Present Perfect)**：`<span className='text-indigo-600 font-bold'>have/has + p.p.</span>` 強調過去完成之工程行為對當前仍具重要影響。(例: "The safety inspection has been completed.")',
            '**客觀陳述優勢**：被動語態能將焦點放在受測物件 (Subject of study) 而非施工人員。'
          ]
        },
        {
          heading: '關係代名詞與關係子句 (Relative Clauses & Relative Pronouns)',
          body: '關係子句用於精準修飾**先行詞**名詞，並分為<span className='text-rose-600 font-bold'>限定 (Restricted)</span> 與<span className='text-rose-600 font-bold'>非限定 (Non-restricted)</span> 用法。',
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
          heading: '統測高頻易混淆句型：used to vs. be used to Ving vs. be used to V',
          body: '統測英文常考 **used to** 之三大文法變體，必須依據主詞是否為人、動詞形式 (原形 V vs. 動名詞 V-ing) 與文意精準辨析，這是<span className='text-rose-600 font-bold'>最容易失分的陷阱區</span>！',
          table: {
            headers: ['句型結構', '主詞屬性', '接續動詞形式', '中文翻譯與文意物理意義', '例句說明'],
            rows: [
              ['used to + V', '通常為人或事物', '原形動詞 (V)', '過去習慣/過去曾經...（現在已不復存在）', 'He used to work on construction sites when he was young.'],
              ['be / get used to + V-ing / N', '人 (主動習慣)', '動名詞 (V-ing) / 名詞', '習慣於... / 適應了...', 'Engineers are used to working under severe weather conditions.'],
              ['be used to + V', '事物 (被動用途)', '原形動詞 (V)', '被用來做...（被動語態）', 'Crane machines are used to lift heavy steel beams.']
            ]
          }
        },
        {
          heading: '分詞構句簡化法則與懸垂分詞避錯 (Participle Construction)',
          body: '當主句與從屬子句主詞相同時，可省略連接詞與主詞，將動詞轉為<span className='text-rose-600 font-bold'>現在分詞 (V-ing, 主動)</span> 或<span className='text-rose-600 font-bold'>過去分詞 (p.p., 被動)</span>。',
          steps: [
            '主動分詞：Because the architect recognized the risk, he altered the floor plan. -> Recognizing the risk, the architect altered the floor plan.',
            '被動分詞：After it was reinforced with steel plates, the girder withstood the earthquake. -> Reinforced with steel plates, the girder withstood the earthquake.',
            '避免懸垂分詞 (Dangling Participle): 分詞的主詞必須與主句主詞保持一致，不可出現主詞不符之邏輯矛盾。'
          ]
        },
        {
          heading: '假設語氣與工程風險預測句型 (Subjunctive Mood & Inversion)',
          body: '用於評估未發生情境、施工風險與結構設計假設。注意**與過去事實相反**的公式搭配！',
          formula: '與過去事實相反：<span className='text-indigo-600 font-bold'>If + S + had + p.p., S + would/could + have + p.p.</span>\n倒裝句型：<span className='text-indigo-600 font-bold'>Had + S + p.p., S + would/could + have + p.p.</span>'
        },
        {
          heading: '使役動詞與感官動詞句型 (Causative Verbs in Engineering Guidelines)',
          body: '工程指示中常使用 **make, have, let, get** 引導受詞完成指定工項，需注意<span className='text-rose-600 font-bold'>後面接續的動詞形態</span>。',
          steps: [
            'Make / Have + 受詞 + 原形動詞 (V)：The site supervisor made the contractor rebuild the wall.',
            'Get + 受詞 + to V / p.p.：We got the technician to recalibrate the total station. / We got the beam inspected.',
            'Let + 受詞 + 原形動詞 (V)：Let the concrete cure for 28 days.'
          ]
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
          difficulty: '基礎',
          question: 'The safety inspector insisted that all construction workers _______ hard hats while present on the job site.\n(A) wear (B) wore (C) wearing (D) to wear',
          steps: [
            '1. 文法結構：insist (堅決要求) 引導之 N-clause 需使用假設語氣命令動詞 (S + (should) + 原形動詞)。',
            '2. 選項比對：應填入原形動詞 wear。',
            '3. 故正確答案為 (A) wear。'
          ],
          answer: '(A) wear'
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
          difficulty: '中等',
          question: 'The structural engineers spent three weeks _______ the maximum load capacity of the wooden truss system.\n(A) calculate (B) calculating (C) calculated (D) to calculate',
          steps: [
            '1. 句型搭配：spend + 時間/金錢 + (in) V-ing。',
            '2. 分析：spent three weeks後應搭配動名詞 (V-ing) calculating。',
            '3. 答案為 (B) calculating。'
          ],
          answer: '(B) calculating'
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
        },
        {
          difficulty: '進階',
          question: 'Not until the city council passed the zoning amendment _______ to begin phase two of the downtown urban revitalization project.\n(A) the developers were able (B) were the developers able (C) did the developers able (D) the developers had been able',
          steps: [
            '1. 否定倒裝語句：句首出現 "Not until + 子句" 時，主要子句必須採用倒裝語序 (助動詞/be動詞 + 主詞)。',
            '2. 分析主要子句：be able to 的過去式倒裝為 "were the developers able"。',
            '3. 正確答案為 (B)。'
          ],
          answer: '(B) were the developers able'
        },
        {
          difficulty: '進階',
          question: 'The architect was seen _______ the revised blueprints with the client when the power outage suddenly occurred.\n(A) discuss (B) discussing (C) discussed (D) to be discussed',
          steps: [
            '1. 感官/觀察動詞被動態：see sb doing sth 在被動語態中保留分詞作補語 (be seen V-ing)。',
            '2. 分析：表示當停電發生時，建築師正「正在進行」討論，故用現在分詞 (discussing)。',
            '3. 答案為 (B) discussing。'
          ],
          answer: '(B) discussing'
        }
      ]
    },
    {
      slug: 'reading-comprehension',
      title: '3. 閱讀測驗',
      desc: '略讀與掃讀技巧、綠建築與建築結構技術短文閱讀、上下文推論與文章主旨分析。\n\n🔥 V6.0 考前秒殺秘訣：此核心概念統測出題率極高，建議善用圖解與鷹架提示反覆練習！',
      status: 'done',
      gradeLevel: 10,
      examHitRate: 3,
      fatalTraps: [{"wrongThinking":"直覺選擇字面相近選項，未仔細檢驗題幹之特定限制條件。","correctThinking":"回歸核心公理與基本定義，逐項檢核題幹條件與反例。","trapDescription":"80% 考生在概念題中因粗心忽略前提假設而失分。"}],
      eliteMentalModels: [{"technique":"第一性原理拆解法 (First Principles Breakdown)","explanation":"不依賴死記死背，由最底層的定義與公理邏輯推導出解題路徑，降維打擊各類統測變形題。"}],
      covered_question_ids: ['111-english-29', '111-english-30', '111-english-31', '111-english-32', '111-english-33', '111-english-34', '111-english-35', '111-english-36', '111-english-37', '111-english-38', '111-english-39', '111-english-40', '111-english-41', '111-english-42', '112-english-29', '112-english-30', '112-english-31', '112-english-32', '112-english-33', '112-english-34', '112-english-35', '112-english-36', '112-english-37', '112-english-38', '112-english-39', '112-english-40', '112-english-41', '112-english-42', '113-english-29', '113-english-30', '113-english-31', '113-english-32', '113-english-33', '113-english-34', '113-english-35', '113-english-36', '113-english-37', '113-english-38', '113-english-39', '113-english-40', '113-english-41', '113-english-42', '114-english-29', '114-english-30', '114-english-31', '114-english-32', '114-english-33', '114-english-34', '114-english-35', '114-english-36', '114-english-37', '114-english-38', '114-english-39', '114-english-40', '114-english-41', '114-english-42', '115-english-29', '115-english-30', '115-english-31', '115-english-32', '115-english-33', '115-english-34', '115-english-35', '115-english-36', '115-english-37', '115-english-38', '115-english-39', '115-english-40', '115-english-41', '115-english-42', '110-english-29', '110-english-30', '110-english-31', '110-english-32', '110-english-33', '110-english-34', '110-english-35', '110-english-36', '110-english-37', '110-english-38', '110-english-39', '110-english-40', '110-english-41', '110-english-42'],
      worked_examples: [
        {
          question: '【步驟化例題】建築設計英文閱讀主旨擷取：Passage: "Biophilic design integrates natural elements—such as daylight, indoor plants, and natural ventilation—into built environments to improve human health and well-being." What is the main idea of biophilic design?',
          difficulty: '基礎',
          steps: [ "步驟 1：找出核心關鍵字。Biophilic design (親自然設計), natural elements (自然元素), built environments (建築環境).", "步驟 2：分析目的與作法。將採光、綠植、通風等自然元素融入建築，改善人體健康。", "步驟 3：歸納主旨。親自然設計旨在透過融入自然元素提升建築使用者的健康與福祉。" ], 
          answer: 'Connecting humans with nature inside built environments to enhance health and well-being.'
        }
      ],
      "illustrations": [ 'context.webp', 'mechanism.webp', 'comparison.webp', 'step-by-step.webp', 'english-real-world.webp' , 'reading-comprehension-infographic.webp' ],
      concepts: [
        {
          heading: '高效雙速閱讀法 (Skimming vs. Scanning Methodology)',
          body: '面對長篇閱讀或技術文章時，靈活切換 **Skimming (略讀宏觀架構)** 與 **Scanning (掃讀關鍵字)** 能<span className='text-rose-600 font-bold'>節省 50% 以上的時間</span>。',
          steps: [
            '**略讀 (Skimming)**：快速瀏覽文章標題、第一段、各段主題句 (Topic Sentence) 與結論段，掌握 <span className='text-indigo-600 font-bold'>Central Thesis (核心論點)</span>。',
            '**題目分析 (Question Analysis)**：劃出題目關鍵字 (專有名詞、年代數據、因果邏輯關係)。',
            '**掃讀 (Scanning)**：以關鍵字為錨點，垂直掃描文章相應段落，<span className='text-indigo-600 font-bold'>精確比對選項細節</span>。'
          ]
        },
        {
          heading: '統測英文閱讀四大常考題型破題密碼 (Reading Question Types & Strategies)',
          body: '統測閱讀測驗長篇題組固定包含**四類題型**，掌握對應題目提問語式與文章<span className='text-rose-600 font-bold'>定點定位技巧</span>可達到 100% 解題精準度。',
          table: {
            headers: ['題型類別', '典型英文提問語式 (Question Stems)', '定位與破題技巧說明'],
            rows: [
              ['主旨題 (Main Idea)', 'What is the passage mainly about? / Which is the best title for the passage?', '閱讀首段第一句與末段總結句，注意高頻出現的靈魂關鍵字。'],
              ['細節題 (Fact & Detail)', 'According to the passage, which of the following is TRUE / NOT mentioned?', '標出題目關鍵字 (人名、數字、地點)，在原文中以 Scanning 定位同義改寫句。'],
              ['推論題 (Inference)', 'What can be inferred from the second paragraph? / What would the author probably agree?', '結合上下文已知事實進行合理延伸推導，切忌無中生有或過度引申。'],
              ['字義推斷 (Contextual Vocabulary)', 'Which is closest in meaning to the word "..." in paragraph 3?', '檢視該單字前後句之對比詞 (however/but) 或同義重述詞 (in other words/that is)。']
            ]
          }
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
          body: '閱讀測驗的正確答案很少直接複製原文，通常會採用 **Paraphrasing (同義替換與句型重組)**。這是<span className='text-rose-600 font-bold'>最常見的考點</span>。',
          steps: [
            '留意**轉折詞與邏輯對比** (<span className='text-indigo-600 font-bold'>however, despite, in contrast</span>) 揭示的真實隱含語意。',
            '比對選項與原文：尋找**名詞替換** (如 <span className='text-indigo-600 font-bold'>mechanical devices -> electrical equipment</span>) 或**主被動翻轉**。'
          ]
        },
        {
          heading: '文章段落架構與邏輯脈絡解析 (Paragraph Structure Analysis)',
          body: '學術與技術文章多採用<span className='text-rose-600 font-bold'>「總-分-總」演繹結構 (Deductive Approach)</span>。掌握架構便能快速預測文章走向。',
          steps: [
            'Topic Sentence (主題句): 通常位於段落前兩句，宣示該段核心概念。',
            'Supporting Details (支持細節): 列舉數據、實驗成果、施工步驟。',
            'Concluding / Transition Sentence (小結/轉折句): 總結本段並預告下一段主題。'
          ]
        },
        {
          heading: '綠建築評估系統 LEED 閱讀考題常考知識彙整',
          body: '理解 **Leadership in Energy and Environmental Design (LEED)** 四大評估面向：水資源效率、能耗、材料選擇與室內環境品質，建立<span className='text-rose-600 font-bold'>綠建築背景知識</span>。',
          steps: [
            'Water Efficiency (WE): Rainwater harvesting and low-flow fixtures.',
            'Energy & Atmosphere (EA): Renewable energy adoption and zero-carbon envelope.',
            'Materials & Resources (MR): Life-cycle impact reduction and recycled content.'
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
          difficulty: '基礎',
          question: 'What is the primary function of "Thermal Mass" in passive solar building design?\n(A) To generate electricity during power outages\n(B) To store thermal energy and regulate indoor temperatures naturally\n(C) To increase the height of the foundation wall\n(D) To reflect sunlight away from south-facing windows',
          steps: [
            '1. 掃描短文關鍵字：thermal mass。',
            '2. 閱讀細節："...materials like concrete or stone that store thermal energy..."。',
            '3. 選項判定：(B) 正確指出蓄熱體能儲存熱能並自然調節室溫。'
          ],
          answer: '(B) To store thermal energy and regulate indoor temperatures naturally'
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
          difficulty: '中等',
          question: 'Why do modern structural engineers avoid relying purely on "rigid strength" in seismic regions?\n(A) Rigid materials are too expensive to transport to job sites.\n(B) Rigid structures lack energy dissipation and can undergo brittle failure during earthquakes.\n(C) Building codes completely prohibit the use of steel in tall structures.\n(D) Rigid structures cannot support glass curtain walls.',
          steps: [
            '1. 推理段落意涵：文中提及工程強調 "energy dissipation and flexibility" 比單純 rigid strength 更可靠。',
            '2. 分析：完全剛硬的結構在強震下缺乏消能韌性，容易發生脆性破壞毀損。',
            '3. 正確答案為 (B)。'
          ],
          answer: '(B) Rigid structures lack energy dissipation and can undergo brittle failure during earthquakes.'
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
        },
        {
          difficulty: '進階',
          question: 'Which of the following titles best summarizes the main idea of Technical Passage 2?\n(A) The Architectural History of Taipei 101\n(B) How Tuned Mass Dampers Generate Renewable Energy\n(C) Modern Seismic Mitigation and Energy Dissipation in Skyscrapers\n(D) The Environmental Impact of Wind Forces on High-Rise Buildings',
          steps: [
            '1. 掌握全篇主旨：文章重點討論高樓大廈如何利用韌性與 TMD 阻尼器達到抗震與風力消能。',
            '2. 評估選項：(C) 精準概括全篇主題「摩天大樓現代抗震與消能技術」。',
            '3. 故選 (C)。'
          ],
          answer: '(C) Modern Seismic Mitigation and Energy Dissipation in Skyscrapers'
        },
        {
          difficulty: '進階',
          question: 'Based on the passage, what happens when strong typhoon winds push a skyscraper to the right?\n(A) The Tuned Mass Damper swings to the right to add counterweight.\n(B) The Tuned Mass Damper\'s inertial force moves to the left to balance the sway.\n(C) The foundation of the building immediately disconnects.\n(D) The glass façade automatically detaches from the frame.',
          steps: [
            '1. 細節定位：當外力將建築推向某一方向（如右邊）時，懸掛擺錘的慣性力會向相反方向（左邊）晃動。',
            '2. 匹配選項：(B) 完全符合原理。'
          ],
          answer: '(B) The Tuned Mass Damper\'s inertial force moves to the left to balance the sway.'
        }
      ]
    },
    {
      slug: 'conversation-daily-use',
      title: '4. 對話與日常應用',
      desc: '建築工地溝通、事務所設計會議、社交與生活英語、職場對話習慣用語。\n\n🔥 V6.0 考前秒殺秘訣：此核心概念統測出題率極高，建議善用圖解與鷹架提示反覆練習！',
      status: 'done',
      gradeLevel: 10,
      examHitRate: 3,
      fatalTraps: [{"wrongThinking":"直覺選擇字面相近選項，未仔細檢驗題幹之特定限制條件。","correctThinking":"回歸核心公理與基本定義，逐項檢核題幹條件與反例。","trapDescription":"80% 考生在概念題中因粗心忽略前提假設而失分。"}],
      eliteMentalModels: [{"technique":"第一性原理拆解法 (First Principles Breakdown)","explanation":"不依賴死記死背，由最底層的定義與公理邏輯推導出解題路徑，降維打擊各類統測變形題。"}],
      covered_question_ids: ['111-english-11', '111-english-12', '111-english-13', '111-english-14', '111-english-15', '111-english-16', '111-english-17', '111-english-18', '111-english-19', '111-english-20', '112-english-11', '112-english-12', '112-english-13', '112-english-14', '112-english-15', '112-english-16', '112-english-17', '112-english-18', '112-english-19', '112-english-20', '113-english-11', '113-english-12', '113-english-13', '113-english-14', '113-english-15', '113-english-16', '113-english-17', '113-english-18', '113-english-19', '113-english-20', '114-english-11', '114-english-12', '114-english-13', '114-english-14', '114-english-15', '114-english-16', '114-english-17', '114-english-18', '114-english-19', '114-english-20', '115-english-11', '115-english-12', '115-english-13', '115-english-14', '115-english-15', '115-english-16', '115-english-17', '115-english-18', '115-english-19', '115-english-20', '110-english-11', '110-english-12', '110-english-13', '110-english-14', '110-english-15', '110-english-16', '110-english-17', '110-english-18', '110-english-19', '110-english-20'],
      worked_examples: [
        {
          question: '【步驟化例題】工地安全檢查情境對話：Complete the dialogue between a safety officer and a worker: \nOfficer: "You must wear a ________ before entering the construction zone."\nWorker: "Yes, sir. I have my hard hat right here."',
          difficulty: '基礎',
          steps: [ "步驟 1：解析上下文意。工人回答 \"I have my hard hat right here\"（我的安全帽就在這）。", "步驟 2：對應安全防護配備單字。hard hat / safety helmet 指的是施工安全帽。", "步驟 3：填入正確單字。hard hat 或 safety helmet。" ], 
          answer: 'hard hat (或 safety helmet)'
        }
      ],
      "illustrations": [ 'context.webp', 'mechanism.webp', 'comparison.webp', 'step-by-step.webp', 'english-real-world.webp' , 'conversation-daily-use-infographic.webp' ],
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
        },
        {
          heading: '工程驗收與缺失整改會話 (Snag List & Final Inspection Dialogue)',
          body: '竣工點交 (handover) 時與監造技師確認缺失清單 (snag list / punch list) 的用語。',
          steps: [
            'Point out deficiencies: "We noticed some uneven plastering on the third-floor corridor."',
            'Set rectification deadline: "All punch list items must be rectified within 10 business days."'
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
          difficulty: '基礎',
          question: 'Safety Inspector: "Sir, you cannot enter the construction area without a helmet."\nVisitor: "________"\n(A) I am sorry. Where can I borrow a hard hat?\n(B) Yes, the elevator is over there.\n(C) I already ate my dinner.\n(D) Blueprints are very colorful.',
          steps: [
            '1. 分析情境：安全檢查員提醒未戴安全帽不可進入施工區。',
            '2. 適當回應：(A) 道歉並詢問何處可借安全帽，符合工地安全對話常理。'
          ],
          answer: '(A) I am sorry. Where can I borrow a hard hat?'
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
          difficulty: '中等',
          question: 'Architect: "We\'ve settled the overall design concept for the lobby."\nClient: "Excellent. Now let\'s _______ before we sign the final contract."\n(A) iron out the details (B) break a leg (C) spill the beans (D) bite the bullet',
          steps: [
            '1. 語境理解：大廳整體概念已確定，業主提議在簽約前「敲定細節」。',
            '2. 慣用語選擇："iron out the details" 即為敲定/磨平細節。',
            '3. 故選 (A)。'
          ],
          answer: '(A) iron out the details'
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
        },
        {
          difficulty: '進階',
          question: 'Architect: "Would you consider incorporating a green roof to lower summer cooling loads?"\nOwner: "________"\n(A) That sounds like a sustainable idea, provided the waterproofing budget is manageable.\n(B) No, roofs are strictly meant for rain.\n(C) I don\'t like wearing green clothes.\n(D) The elevator is out of order today.',
          steps: [
            '1. 對話解析：建築師提議綠屋頂降溫，業主評估可行性。',
            '2. 匹配回答：(A) 表示概念具永續性，前提是防水預算可控，符合商務談判邏輯。'
          ],
          answer: '(A) That sounds like a sustainable idea, provided the waterproofing budget is manageable.'
        },
        {
          difficulty: '進階',
          question: 'Inspector: "There are minor cosmetic scratches on the entry door frame."\nContractor: "________"\n(A) I will add it to the punch list and have it repainted by tomorrow.\n(B) Doors should always be scratched.\n(C) We forgot to build the door.\n(D) The project is canceled.',
          steps: [
            '1. 對話情境：檢查員指出大門框微小刮痕（cosmetic scratches）。',
            '2. 承包商回應：(A) 表示列入缺失清單（punch list）並於明日重新噴漆修復。'
          ],
          answer: '(A) I will add it to the punch list and have it repainted by tomorrow.'
        }
      ]
    },
    {
      slug: 'cloze-passage-structure',
      title: '5. 克漏字與篇章結構',
      desc: '篇章銜接、轉折語與邏輯連接詞、克漏字實戰解題策略與篇章結構重建。\n\n🔥 V6.0 考前秒殺秘訣：此核心概念統測出題率極高，建議善用圖解與鷹架提示反覆練習！',
      status: 'done',
      gradeLevel: 10,
      examHitRate: 3,
      fatalTraps: [{"wrongThinking":"直覺選擇字面相近選項，未仔細檢驗題幹之特定限制條件。","correctThinking":"回歸核心公理與基本定義，逐項檢核題幹條件與反例。","trapDescription":"80% 考生在概念題中因粗心忽略前提假設而失分。"}],
      eliteMentalModels: [{"technique":"第一性原理拆解法 (First Principles Breakdown)","explanation":"不依賴死記死背，由最底層的定義與公理邏輯推導出解題路徑，降維打擊各類統測變形題。"}],
      covered_question_ids: ['111-english-21', '111-english-22', '111-english-23', '111-english-24', '111-english-25', '111-english-26', '111-english-27', '111-english-28', '112-english-21', '112-english-22', '112-english-23', '112-english-24', '112-english-25', '112-english-26', '112-english-27', '112-english-28', '113-english-21', '113-english-22', '113-english-23', '113-english-24', '113-english-25', '113-english-26', '113-english-27', '113-english-28', '114-english-21', '114-english-22', '114-english-23', '114-english-24', '114-english-25', '114-english-26', '114-english-27', '114-english-28', '115-english-21', '115-english-22', '115-english-23', '115-english-24', '115-english-25', '115-english-26', '115-english-27', '115-english-28', '110-english-21', '110-english-22', '110-english-23', '110-english-24', '110-english-25', '110-english-26', '110-english-27', '110-english-28'],
      worked_examples: [
        {
          question: '【步驟化例題】建築節能文章克漏字介詞選填：Choose the correct preposition: "Green buildings are designed to minimize their impact _____ the natural environment."',
          difficulty: '基礎',
          steps: [ "步驟 1：識別慣用搭配片語。have an impact / effect / influence + 介詞 + 對象。", "步驟 2：判定介詞用法。固定搭配介詞為 \"on\"（對……產生影響）。", "步驟 3：完成句子。impact on the natural environment。" ], 
          answer: 'on'
        }
      ],
      "illustrations": [ 'context.webp', 'mechanism.webp', 'comparison.webp', 'step-by-step.webp', 'english-real-world.webp' , 'cloze-passage-structure-infographic.webp' ],
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
        },
        {
          heading: '篇章指代與特指冠詞規避法 (Article & Pronoun Cohesion Rules)',
          body: '在篇章結構題中，根據冠詞 `a/an`（泛指首次出現）與 `the`（特指已知事物）鎖定前後句順序。',
          steps: [
            'Step 1: First sentence introduces a concept (e.g., "The team designed a new damper system.").',
            'Step 2: Subsequent sentence refers back with the definite article (e.g., "The damper system was tested...").'
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
          difficulty: '基礎',
          question: 'The client liked the general floor layout; _______, she requested minor modifications to the master bedroom window.\n(A) therefore (B) however (C) in addition (D) for example',
          steps: [
            '1. 句意分析：業主喜歡整體平面配置；「然而」，她要求對主臥室窗戶進行微調。',
            '2. 邏輯判定：轉折關係 (however)。',
            '3. 故選 (B)。'
          ],
          answer: '(B) however'
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
          difficulty: '中等',
          question: 'The new energy code limits maximum power consumption; _______, all newly built offices must install motion-sensor LED lighting.\n(A) accordingly (B) in contrast (C) on the other hand (D) surprisingly',
          steps: [
            '1. 分析：新能源法規限制最大耗電量；「因此/相應地」，所有新建辦公室必須安裝感應 LED 照明。',
            '2. 邏輯：因果相應 (accordingly)。',
            '3. 答案為 (A)。'
          ],
          answer: '(A) accordingly'
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
        },
        {
          difficulty: '進階',
          question: 'Read the sentence: "_______ solar panels generate clean energy during daylight hours, battery storage units are necessary to supply power at night."\n(A) While (B) Unless (C) Until (D) Lest',
          steps: [
            '1. 分析引導從屬連詞語意：雖然太陽能板在白日產生清潔能源，但夜間供電仍需電池儲能。',
            '2. 連詞選擇：While 引導讓步對比子句（相當於 Although/Whereas）。',
            '3. 選項 (A) 正確。'
          ],
          answer: '(A) While'
        },
        {
          difficulty: '進階',
          question: 'The structural analysis report was thoroughly reviewed by senior engineers; _______, the municipal authority granted the construction permit.\n(A) nevertheless (B) subsequently (C) otherwise (D) instead',
          steps: [
            '1. 句間邏輯：結構分析報告經資深工程師徹底審查；「隨後」，市政機關核發了施工許可。',
            '2. 時間順序副詞：subsequently 表示「隨後/接著」。',
            '3. 答案為 (B) subsequently。'
          ],
          answer: '(B) subsequently'
        }
      ]
    },
    {
      slug: 'translation-writing',
      title: '6. 翻譯與寫作基礎',
      desc: '中譯英技巧、句型結構重組、建築與技術段落寫作結構、標點符號與寫作修辭。\n\n🔥 V6.0 考前秒殺秘訣：此核心概念統測出題率極高，建議善用圖解與鷹架提示反覆練習！',
      status: 'done',
      gradeLevel: 10,
      examHitRate: 3,
      fatalTraps: [{"wrongThinking":"直覺選擇字面相近選項，未仔細檢驗題幹之特定限制條件。","correctThinking":"回歸核心公理與基本定義，逐項檢核題幹條件與反例。","trapDescription":"80% 考生在概念題中因粗心忽略前提假設而失分。"}],
      eliteMentalModels: [{"technique":"第一性原理拆解法 (First Principles Breakdown)","explanation":"不依賴死記死背，由最底層的定義與公理邏輯推導出解題路徑，降維打擊各類統測變形題。"}],
      covered_question_ids: [],
      worked_examples: [
        {
          question: '【步驟化例題】建築工程句子中譯英：請將下列句子翻譯成正確的英文工程說明：「這座博物館採用鋼骨結構以實現大跨距空間。」',
          difficulty: '中等',
          steps: [ "步驟 1：翻譯核心單字。博物館 (museum)、鋼骨結構 (steel structure)、大跨距空間 (large-span space / long-span space)。", "步驟 2：建構句型結構。The museum uses/adopts a steel structure to achieve a long-span space.", "步驟 3：檢查文法與專業度。This museum utilizes a steel structure to create long-span spaces." ], 
          answer: '"This museum utilizes a steel structure to achieve a long-span space."'
        }
      ],
      "illustrations": [ 'context.webp', 'mechanism.webp', 'comparison.webp', 'step-by-step.webp', 'english-real-world.webp' , 'translation-writing-infographic.webp' ],
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
            '步驟二 (放置目的片語): To reduce carbon emissions, an increasing number of architects are incorporating timber and solar panels into urban designs.',
            '步驟三 (檢查時態與修飾): 確保主謂一致性與修飾語平列。'
          ]
        },
        {
          heading: '學術英文摘要 (Abstract) 撰寫要領',
          body: '摘要需精煉涵蓋背景 (Background)、方法 (Method)、結果 (Results) 與結論 (Conclusion)。',
          steps: [
            'Background: "Urban heat island effect poses a challenge..."',
            'Method: "This study evaluates the cooling efficiency of green roofs..."',
            'Results: "Data indicates a 3°C reduction in surface temperature..."',
            'Conclusion: "Therefore, green roofs provide a viable mitigation strategy."'
          ]
        }
      ],
      practices: [
        {
          difficulty: '基礎',
          question: '請將以下中文翻譯為英文：「為了確保結構安全，承包商必須每日檢查施工腳手架。」\n(A) To ensure structural safety, the contractor must inspect the scaffolding daily.\n(B) For ensuring safety structure, contractor must look scaffolding every day.\n(C) The contractor inspect daily scaffolding to ensure safety.\n(D) Inspection of scaffolding is done by contractor for safety.',
          steps: [
            '1. 句型分析：目的片語「為了…」譯為 "To ensure structural safety,"。',
            '2. 主謂賓：主詞 "the contractor"，助動詞 "must"，動詞 "inspect"，受詞 "the scaffolding"，時間副詞 "daily"。',
            '3. 比對選項：(A) 語法最嚴謹標準。'
          ],
          answer: '(A) To ensure structural safety, the contractor must inspect the scaffolding daily.'
        },
        {
          difficulty: '基礎',
          question: '選出標點符號使用最正確的句子：\n(A) Concrete is strong in compression; however, it is weak in tension.\n(B) Concrete is strong in compression, however; it is weak in tension.\n(C) Concrete is strong in compression however it is weak in tension.\n(D) Concrete is strong in compression; however it is weak, in tension.',
          steps: [
            '1. 標點規則：連接兩完整獨立句時，使用分號 (;) 隔開，轉折副詞 (however) 後加逗號 (,)。',
            '2. 比對選項：(A) 的標點符號完全正確。'
          ],
          answer: '(A) Concrete is strong in compression; however, it is weak in tension.'
        },
        {
          difficulty: '中等',
          question: '請將以下中文翻譯為英文：「這座建築不僅節省能源，還能為居民提供舒適的居住環境。」\n(A) This building not only saves energy but also provides a comfortable living environment for residents.\n(B) Not only this building save energy, but also provide comfortable living.\n(C) This building both saves energy so provides comfortable living environment.\n(D) This building is saving energy not only but providing comfort environment.',
          steps: [
            '1. 句型：Not only A but also B (不僅A而且B)。',
            '2. 檢查動詞平列：saves energy (V1) ... provides (V2)。',
            '3. (A) 選項語義完全符合且語法正確。'
          ],
          answer: '(A) This building not only saves energy but also provides a comfortable living environment for residents.'
        },
        {
          difficulty: '中等',
          question: 'Which of the following sentences effectively uses a participle phrase to combine two ideas?\n(A) Built with recycled materials, the sustainable house received a LEED certification.\n(B) The sustainable house built recycled materials, it received a LEED certification.\n(C) Building recycled materials, the house receiving LEED certification.\n(D) To build recycled materials, the house receives LEED certification.',
          steps: [
            '1. 分詞構句被動用法：Because it was built with recycled materials... 簡化為 "Built with recycled materials,"。',
            '2. 檢查主句：the sustainable house received a LEED certification.',
            '3. (A) 選項文法精煉正確。'
          ],
          answer: '(A) Built with recycled materials, the sustainable house received a LEED certification.'
        },
        {
          difficulty: '進階',
          question: '將中文句子翻譯為英文：「若未經結構技師事先核准，切勿拆除任何承重牆。」\n(A) Never remove any load-bearing wall unless prior approval is granted by a structural engineer.\n(B) Do not tear down load wall without structural engineer think ok.\n(C) Structural wall never remove prior approval by engineer.\n(D) Unless structural engineer approve, removing load wall is never.',
          steps: [
            '1. 祈使句與條件從屬子句：Never remove any load-bearing wall... (切勿拆除任何承重牆)。',
            '2. 條件子句："unless prior approval is granted by a structural engineer" (除非獲得事先核准)。',
            '3. (A) 選項用語道地且符合工程規範。'
          ],
          answer: '(A) Never remove any load-bearing wall unless prior approval is granted by a structural engineer.'
        },
        {
          question: 'Identify the sentence with the most logical topic sentence structure for an academic paragraph on urban heat islands:\n(A) Urban heat islands, caused primarily by dark asphalt and dense concrete, pose severe microclimate challenges to modern cities.\n(B) Asphalt is dark and concrete is heavy in cities.\n(C) Cities are warm because of many things people do.\n(D) I think urban heat islands are bad for everyone.',
          difficulty: '進階',
          steps: [
            '1. 主題句 (Topic Sentence) 要求：必須明確宣示論點、包含核心關鍵字且具學術嚴謹性。',
            '2. 選項比對：(A) 包含了定義因果（asphalt & concrete）與學術論點（microclimate challenges），最適合做主題句。'
          ],
          answer: '(A) Urban heat islands, caused primarily by dark asphalt and dense concrete, pose severe microclimate challenges to modern cities.'
        },
        {
          difficulty: '進階',
          question: 'Translate to English: 「這項工程預計將於明年底前竣工，總預算估計為五百萬美元。」\n(A) The project is scheduled to be completed by the end of next year, with an estimated total budget of five million dollars.\n(B) The project estimate complete next year end, total budget five million dollar.\n(C) Completing next year end, the project has five million dollar budget.\n(D) The project will complete end of next year, estimating budget is five million.',
          steps: [
            '1. 分析：is scheduled to be completed (預計被完成/竣工) + by the end of next year (於明年底前)。',
            '2. 獨立分詞/介系詞片語：with an estimated total budget of five million dollars.',
            '3. (A) 為標準翻譯。'
          ],
          answer: '(A) The project is scheduled to be completed by the end of next year, with an estimated total budget of five million dollars.'
        },
        {
          difficulty: '進階',
          question: 'Which of the following demonstrates the correct use of a colon in technical paragraph writing?\n(A) The site safety audit evaluated three critical parameters: soil stability, scaffolding integrity, and worker PPE compliance.\n(B) The site safety audit: evaluated three critical parameters soil stability.\n(C) Evaluated three parameters: the safety audit was conducted.\n(D) The site: safety audit evaluated parameters soil stability.',
          steps: [
            '1. 冒號 (Colon) 用法：前面必須為完整的獨立句子 (complete independent clause)，用於引出具體清單。',
            '2. 檢視 (A)："The site safety audit evaluated three critical parameters" 為完整句子，冒號後列出三項參數。用法完全正確。'
          ],
          answer: '(A) The site safety audit evaluated three critical parameters: soil stability, scaffolding integrity, and worker PPE compliance.'
        }
      ]
    }
  ]
};
