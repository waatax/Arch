import type { TopicVisualMap } from './types';
import {
  arrow, barChart, box, dot, flow, line, path, pill, polygon, rect, svg, text,
} from './kit';

export const englishVisuals: TopicVisualMap = {
  'vocabulary-phrases': [
    {
      concept: '1. 構詞法（字首字根字尾）',
      kind: 'diagram',
      title: '構詞法 Prefix + Root + Suffix 結構拆解圖',
      caption: '以工程高頻字 reconstruction 與 sustainability 為例，展示「字首定方向、字根定核心字義、字尾定詞性」之三段拆解法。',
      svg: (() => {
        let s = '';
        s += text(280, 22, '英文構詞法三要素：Prefix（方向）＋ Root（核心義）＋ Suffix（詞性）', { anchor: 'middle', size: 13, weight: 'bold' });
        s += box(24, 46, 150, 62, ['Prefix 字首', '決定「正反／方向／數量」', 're- (再次) / un- (否定)'], { tone: 'blue', size: 11.5 });
        s += box(205, 46, 150, 62, ['Root 字根', '決定「核心意義」', 'struct (建造) / spect (看)'], { tone: 'green', size: 11.5 });
        s += box(386, 46, 150, 62, ['Suffix 字尾', '決定「詞性 (N/V/Adj/Adv)」', '-tion (名詞) / -ive (形容詞)'], { tone: 'amber', size: 11.5 });
        s += arrow(177, 77, 202, 77, { tone: 'muted', w: 1.8, head: 7 });
        s += arrow(358, 77, 383, 77, { tone: 'muted', w: 1.8, head: 7 });
        s += box(40, 134, 480, 68, [
          '建築實戰拆解：re- (再次) ＋ con- (共同) ＋ struct (建造) ＋ -ion (名詞) ＝ reconstruction（重建）',
          '衍生字族：construct (v.建造) → constructive (adj.有建設性的) → infrastructure (n.基礎建設)',
        ], { tone: 'violet', size: 11.5 });
        return svg(560, 220, s);
      })(),
      takeaways: [
        '字首（Prefix）只改變語意方向或正負（如 `in-/im-/un-/dis-` 表否定，`sub-` 表在下方，`inter-` 表相互），極少改變詞性。',
        '字尾（Suffix）是克漏字「詞性判斷題」的秒殺關鍵：`-tion/-ment/-ness` 為名詞，`-able/-ive/-ous/-ful` 為形容詞，`-ize/-ify/-en` 為動詞。',
      ],
    },
    {
      concept: '2. 生活與校園核心字彙',
      kind: 'table',
      title: '字彙題四大詞性：代表字與上下文訊號',
      caption: '整理字彙題常見的四類詞性選項、代表字與判斷詞性的上下文訊號。',
      table: {
        "headers": [
          "詞性類別",
          "統測高頻核心代表字",
          "上下文解題搭配訊號"
        ],
        "rows": [
          [
            "動詞 (Verb)",
            "maintain, construct, estimate,Inspect, require",
            "看主詞單複數、受詞搭配與後接 to V / V-ing"
          ],
          [
            "名詞 (Noun)",
            "foundation, equipment, regulation, permission",
            "看冠詞 (a/the)、所有格、形容詞修飾與可數不可數"
          ],
          [
            "形容詞 (Adjective)",
            "durable, available, essential, sustainable",
            "置於 be 動詞／連綴動詞後，或名詞之前作修飾"
          ],
          [
            "副詞與動詞片語",
            "efficiently, temporarily, carry out, put off",
            "副詞修飾動詞／形容詞或置句首修飾全句"
          ]
        ]
      },
      takeaways: [
        "選項四個單字若詞性相同考「語意搭配」；若為同一字根的不同詞性變化，通常考「句型結構與詞性定位」。"
      ],
    },
    {
      concept: '14. 統測高頻動詞片語 60 選（依介副詞語意歸類）',
      kind: 'table',
      title: '統測必考高頻動詞片語與介系詞語意矩陣表',
      caption: '依 핵심動詞（take, put, turn, look, bring, call）與介副詞空間意象整理最常考的片語對照。',
      table: {
        headers: ['核心片語組', '高頻片語與精準中文語意', '同義替換單字（閱讀改寫必考）', '工地與生活實戰例句'],
        rows: [
          ['put 家族', 'put off (延後) / put out (撲滅) / put up with (忍受)', 'postpone / extinguish / tolerate', 'Heavy rain forced us to put off the concrete pouring.'],
          ['take 家族', 'take over (接管) / take place (發生) / take into account (考慮)', 'assume control / occur / consider', 'Safety must be taken into account in every design.'],
          ['turn / look 家族', 'turn down (拒絕；調低) / look into (調查) / look up to (尊敬)', 'reject / investigate / respect', 'The committee will look into the cause of the crack.'],
          ['carry / call 家族', 'carry out (執行) / call off (取消) / result in (導致)', 'execute, implement / cancel / lead to', 'The contractor carried out the renovation on schedule.'],
        ],
      },
      takeaways: [
        '統測最愛考「片語 ↔ 單一動詞」同義代換：`put off = postpone = delay`、`call off = cancel`、`carry out = conduct = implement`、`put out = extinguish`。',
        '注意因果方向相反的雙胞胎片語：`result in (= lead to，後面加結果)` vs. `result from (= stem from，後面加原因)`。',
      ],
    },
  ],

  'grammar-patterns': [
    {
      concept: '12 時態完整剖析（重點：現在完成式）',
      kind: 'diagram',
      title: '12 時態時間軸座標圖',
      caption: '在 Past、Now、Future 時間軸上標示簡單式、進行式、完成式之時間跨度，凸顯「過去完成式 had p.p.」與「現在完成式 have p.p.」之座標關係。',
      svg: (() => {
        let s = '';
        s += text(280, 20, '英文核心時態時間軸座標（Past Perfect vs. Present Perfect vs. Simple Past）', { anchor: 'middle', size: 13, weight: 'bold' });
        s += arrow(30, 125, 530, 125, { tone: 'ink', w: 2, head: 9 });
        const pts = [
          { x: 100, label: '更早過去', sub: 'had + p.p.', tone: 'violet' as const },
          { x: 215, label: '過去某點 (Past)', sub: 'V-ed (過去簡單)', tone: 'red' as const },
          { x: 365, label: '現在 (Now)', sub: 'V / am V-ing', tone: 'blue' as const },
          { x: 485, label: '未來 (Future)', sub: 'will V / will have p.p.', tone: 'green' as const },
        ];
        for (const p of pts) {
          s += line(p.x, 118, p.x, 132, { tone: p.tone, w: 2 });
          s += dot(p.x, 125, 4.5, p.tone);
          s += text(p.x, 148, p.label, { anchor: 'middle', size: 11.5, weight: 'bold', tone: p.tone });
          s += text(p.x, 165, p.sub, { anchor: 'middle', size: 10.5, tone: 'muted', mono: true });
        }
        // 過去完成式區間
        s += rect(100, 62, 115, 28, { tone: 'violet', fill: 'violet', soft: true, rx: 5, w: 1.4 });
        s += text(157, 76, 'had + p.p.（過去的過去）', { anchor: 'middle', baseline: 'middle', size: 11, weight: 'bold', tone: 'ink', halo: false });
        s += arrow(100, 96, 212, 96, { tone: 'violet', w: 1.8, head: 7 });
        // 現在完成式區間
        s += rect(215, 46, 150, 32, { tone: 'amber', fill: 'amber', soft: true, rx: 5, w: 1.5 });
        s += text(290, 62, 'have/has + p.p.（從過去持續到現在）', { anchor: 'middle', baseline: 'middle', size: 11, weight: 'bold', tone: 'ink', halo: false });
        s += arrow(215, 86, 362, 86, { tone: 'amber', w: 2, head: 7 });
        s += text(280, 204, '必考公式：Since + 過去時間點 (V-ed) / For + 一段時間 ⇒ 主句必用現在完成式 (have/has + p.p.)', { anchor: 'middle', size: 11.5, weight: 'bold', tone: 'blue' });
        return svg(560, 224, s);
      })(),
      takeaways: [
        '現在完成式 (`have/has + p.p.`) 連接「過去與現在」，常搭配 `since + 過去時間點/過去式子句`、`for + 一段時間`、`so far`、`recently`、`lately`。',
        '若句中有明確過去時間副詞（如 `yesterday`, `three years ago`, `in 1999`, `last night`），絕對不可用現在完成式，只能用過去簡單式 (`V-ed`)。',
        '當兩件過去動作有先後順序時，「先發生的用過去完成式 (`had + p.p.`)，後發生的用過去簡單式 (`V-ed`)」。',
      ],
    },
    {
      concept: '12 時態完整剖析',
      kind: 'table',
      title: '五大文法模組：黃金公式與常見陷阱',
      caption: '整理時態語態、不定詞與動名詞、比較句型、助動詞與主謂一致的核心公式與陷阱。',
      table: {
        "headers": [
          "文法核心模組",
          "必背黃金公式",
          "統測最常設陷阱"
        ],
        "rows": [
          [
            "時態與被動語態",
            "be + p.p.；have been + p.p.；by the time + 時態",
            "主詞為「工程／大樓／橋梁」時漏看被動語態"
          ],
          [
            "不定詞 vs. 動名詞",
            "enjoy/finish/avoid/mind + V-ing；look forward to + V-ing",
            "誤把介系詞 to 當成不定詞 to（如 devote...to V-ing）"
          ],
          [
            "比較級與最高級",
            "The + 比較級..., the + 比較級...（越…就越…）",
            "比較對象不一致（必用 that of / those of 代換）"
          ],
          [
            "助動詞與主謂一致",
            "must have p.p.（過去必定）；A as well as B 看 A",
            "either A or B / not only A but also B 動詞需就近配合 B"
          ]
        ]
      },
      takeaways: [
        '凡看到 `by + 未來時間`（如 `by next month`）選未來完成式 `will have + p.p.`；看到 `by + 過去時間` 選過去完成式 `had + p.p.`。',
        '`to` 為介系詞（後接 `V-ing`）的必背片語：`look forward to`、`be used to (習慣於)`、`devote/dedicate oneself to`、`object to`、`when it comes to`。',
      ],
    },
    {
      concept: '英文五大基本句型',
      kind: 'table',
      title: '五大基本句型、連綴／感官／使役動詞與被動語態總表',
      caption: '整合英文五大句型結構與特殊動詞之主動、被動補語變化規則，快速突破克漏字動詞形態題。',
      table: {
        headers: ['句型／動詞類別', '主動結構公式', '被動或補語規則', '建築與日常實戰例句'],
        rows: [
          ['連綴動詞 (Linking V.)', 'look / sound / feel / become / remain + Adj.', '無被動語態！後接形容詞，接名詞須加 like', 'The concrete structure remains stable after the quake.'],
          ['使役動詞 (Causative V.)', 'make / have / let + O + V（原形）', 'get + O + to V；若受詞為被動則全用 p.p.', 'The engineer had the workers check the steel beams.'],
          ['感官動詞 (Perception V.)', 'see / hear / watch / notice + O + V / V-ing', '受詞被動用 p.p.；改為被動句時原形 V 須還原為 to V', 'We saw the old bridge torn down (p.p.) yesterday.'],
          ['授與動詞與被動語態', 'give / send / offer + 人 + 物 ＝ 物 + to/for + 人', 'be + p.p. (+ by...)；進行被動 be being + p.p.', 'The new library is being constructed right now.'],
        ],
      },
      takeaways: [
        '使役動詞 `have + 受詞 + OC`：若受詞是「人（主動做）」用原形 `V`；若受詞是「事物（被修理、被建造）」必用過去分詞 `p.p.`（如 `have my roof repaired`）。',
        '`happen`, `occur`, `take place`（發生）、`belong to`（屬於）、`consist of`（由…組成）、`remain`（保持）永遠沒有被動語態，也沒有進行式！',
      ],
    },
  ],

  'conversation-daily-use': [
    {
      concept: '6. 統測對話題解題法',
      kind: 'diagram',
      title: '對話語境線索與功能回應決策圖',
      caption: '統測會話題解題三步驟：先判讀「場所與身分關係」，再辨識「語用功能（請求、建議、婉拒）」，最後排除中式英文與答非所問陷阱。',
      svg: (() => {
        let s = '';
        s += text(280, 22, '統測英文對話題（Dialogue）三階破題決策流程', { anchor: 'middle', size: 13.5, weight: 'bold' });
        s += flow(20, 48, [
          ['Step 1 抓場景關鍵字', '餐廳 menu / 診所 symptom', '飯店 check-in / 工地 helmet'],
          ['Step 2 判讀語氣功能', 'Would you mind...? (請求)', 'Why don\'t you...? (建議)'],
          ['Step 3 避開誘答陷阱', 'mind 回答 No 表「不介意」', '排除重複同音字選項'],
        ], { w: 158, h: 68, gap: 22, tones: ['blue', 'green', 'amber'], size: 11 });
        s += box(30, 140, 240, 62, ['高頻肯定贊同回應', 'You bet! / Tell me about it! (可不是嗎)', 'By all means. / Be my guest. (請便)'], { tone: 'green', size: 11 });
        s += box(290, 140, 240, 62, ['高頻委婉拒絕回應', 'I\'d love to, but I have my hands full.', 'I\'m afraid I\'ll have to take a rain check.'], { tone: 'red', size: 11 });
        return svg(560, 220, s);
      })(),
      takeaways: [
        '`Would/Do you mind + V-ing / if I...?` 問「你介意嗎？」，若**同意／不介意**對方做，回答必須用否定：**`Not at all.` / `No, go ahead.` / `Of course not.`**。',
        '`take a rain check` 指「改天再約（婉拒邀約）」，與下雨天或支票完全無關，是對話題常見的慣用語。',
      ],
    },
    {
      concept: '2. 校園生活情境對話',
      kind: 'table',
      title: '生活與職場對話情境：場景關鍵詞與必背應答句',
      caption: '依情境整理會話題常見的場景關鍵詞與應答句。',
      table: {
        "headers": [
          "對話情境",
          "場景秒殺關鍵詞",
          "必背經典應答句"
        ],
        "rows": [
          [
            "餐飲與購物",
            "for here or to go, receipt, refund, try it on",
            "It's on me. / My treat.（我請客）／ Let's go Dutch.（各付各的）"
          ],
          [
            "校園與職場",
            "deadline, assignment, shift, interview, promotion",
            "I'm snowed under with work.（工作忙翻了）"
          ],
          [
            "醫療與健康",
            "prescription, symptom, sore throat, appointment",
            "What seems to be the problem?（哪裡不舒服？）"
          ],
          [
            "電話與交通飯店",
            "hold the line, put through, single room, transfer",
            "Speaking.（我就是）／ Hang on a second.（請稍候）"
          ]
        ]
      },
      takeaways: [
        '電話英文必考：`Hold the line / Hang on`（請別掛斷）、`put someone through`（替某人轉接）、`Speaking.`（我就是本人）。',
        '餐廳與結帳慣用語：`It\'s on me = It\'s my treat`（我買單）、`go Dutch = split the bill`（AA 制平分帳單）、`keep the change`（不用找錢了）。',
      ],
    },
    {
      concept: '12. 會話題四大誘答陷阱辨識矩陣與應答邏輯',
      kind: 'table',
      title: '統測對話題高頻口語慣用語與字面誤解陷阱對照表',
      caption: '彙整不可照字面直譯的日常會話片語，一眼識破統測對話題的中文直譯陷阱選項。',
      table: {
        headers: ['英文口語慣用句', '字面直譯陷阱（錯誤！）', '真正道地語意（正確！）', '適用對話語境'],
        rows: [
          ['Tell me about it! / You can say that again!', '告訴我吧！／你可以再說一次！', '可不是嗎！我完全同意！（強烈附和）', '當對方抱怨天氣熱、塞車或功課太多時表深有同感'],
          ['What brings you here?', '什麼東西把你帶來這裡？', '是什麼風把你吹來的？（你怎麼會來？）', '在診所、辦公室或商店巧遇熟人時的問候'],
          ['Break a leg! / Fingers crossed!', '摔斷一條腿！／手指交叉！', '祝你演出／面試大成功！／祈禱好運！', '上台簡報、考試或比賽前的加油打氣'],
          ['I feel under the weather.', '我覺得在天氣下面。', '我覺得身體不太舒服、有點微恙。', '請病假或解釋精神不佳時的常用表達'],
        ],
      },
      takeaways: [
        '`You can say that again!` 與 `Tell me about it!` 都表示「完全贊同對方的話」，絕非請對方重講一遍。',
        '`What do you do?` 問的是「你的職業是什麼？」，回答應為 `I am an architect / a student`，而非正在做的動作。',
      ],
    },
    {
      concept: '13. 公共場所廣播與教學廣播',
      kind: 'diagram',
      title: '公共廣播的固定結構：注意語 → 對象 → 事件 → 時間地點 → 指示',
      caption: '聽廣播時用 Who、What、Where、When 四問抓要點，轉述時注意人稱與時態後移（will → would、is → was）。',
      svg: (() => {
        let s = '';
        s += flow(10, 30, [['Attention', 'please.'], ['Who', 'Passengers for…'], ['What', 'is delayed'], ['Where／When', 'Gate 5, 10:20'], ['Instruction', 'Please proceed…']], { w: 100, h: 56, gap: 10, tones: ['muted', 'blue', 'red', 'green', 'violet'], size: 11.5 });
        s += box(60, 120, 440, 56, ['轉述：The announcer said that Flight CI 102 was delayed', 'and that passengers should go to Gate 5.'], { tone: 'amber', size: 11.5 });
        return svg(560, 190, s);
      })(),
      takeaways: [
        'platform、gate、transfer、delayed、cancelled 常是廣播題的答題關鍵字。',
        '轉述時把直接引述改成間接說法，主要動詞是過去式時，從句時態要後移。',
      ],
    },
  ],

  'reading-comprehension': [
    {
      concept: '1. 略讀 Skimming 與掃讀 Scanning',
      kind: 'diagram',
      title: 'Skimming & Scanning 雙軌閱讀定位圖',
      caption: '區分「略讀 Skimming（抓主旨架構：讀標題、首段、各段首尾句）」與「掃讀 Scanning（抓細節答案：鎖定專有名詞、數字、年代）」之雙軌策略。',
      svg: (() => {
        let s = '';
        s += text(280, 22, '統測閱讀理解雙軌戰術：Skimming（抓森林）vs. Scanning（找樹木）', { anchor: 'middle', size: 13, weight: 'bold' });
        s += box(24, 46, 240, 148, [
          '略讀 Skimming（30 秒抓主旨）',
          '• 讀文章標題與副標題 (Title)',
          '• 精讀第一段與最後一段結論',
          '• 抓各段第一句 (Topic Sentence)',
          '⇒ 破解：Main Idea / Title / Purpose 題',
        ], { tone: 'blue', size: 11.5 });
        s += box(296, 46, 240, 148, [
          '掃讀 Scanning（定位找細節）',
          '• 不逐字讀，眼球快速掃描關鍵字',
          '• 鎖定大寫人名地名、年份、百分比',
          '• 比對題幹關鍵字的同義改寫 (Paraphrase)',
          '⇒ 破解：Detail / NOT true / 數據題',
        ], { tone: 'green', size: 11.5 });
        s += arrow(266, 120, 294, 120, { tone: 'amber', w: 2, both: true, head: 7 });
        return svg(560, 212, s);
      })(),
      takeaways: [
        '主旨題（`What is the main idea / best title?`）切忌選「只出現在某一段的局部細節（Too narrow）」或「超出文章範圍的誇大推論（Too broad）」。',
        '細節題正確選項幾乎不會照抄原文整句，而是將原文詞彙進行「同義詞替換（Paraphrase）」，如原文寫 `annually`、選項寫 `every year`。',
      ],
    },
    {
      concept: '7. 統測閱讀四大題型攻略',
      kind: 'table',
      title: '閱讀測驗四大題型：題幹問法與破題策略',
      caption: '整理細節、主旨、推論與猜字指代四類題型的題幹問法與定位策略。',
      table: {
        "headers": [
          "閱讀題型",
          "常見英文題幹問法",
          "破題定位策略"
        ],
        "rows": [
          [
            "細節與是非題",
            "According to the passage, which of the following is true / NOT true?",
            "圈出題幹人名、時間、地點回原文掃讀比對"
          ],
          [
            "主旨與標題題",
            "What is the passage mainly about? / What is the best title?",
            "串聯首段最後一句與各段第一句（主題句）"
          ],
          [
            "推論與態度題",
            "What can be inferred from the passage? / What is the author's tone?",
            "找原文線索往合理下一步推論，不可無中生有"
          ],
          [
            "猜字與指代題",
            "The word \"...\" is closest in meaning to... / What does \"they\" refer to?",
            "代入前後句邏輯（定義、舉例、反義對比）或往前找複數名詞"
          ]
        ]
      },
      takeaways: [
        '上下文猜字法四大訊號：(1) 定義訊號（`be defined as`, `refer to`, `—`, `that is`）；(2) 舉例訊號（`such as`, `for instance`）；(3) 反義轉折（`unlike`, `however`, `whereas`）。',
        '代名詞指代題（`it / this / they / ones`）：往畫線字**前面最近的一句**尋找單複數一致、且代入後句意合理的主詞或受詞。',
      ],
    },
    {
      concept: '9. 同義改寫 (Paraphrase) 對照表：選項為何看起來都不一樣',
      kind: 'table',
      title: '閱讀理解原文與正確選項「同義改寫 (Paraphrase)」對照表',
      caption: '整理統測閱讀測驗最常出現的「原文詞組 ↔ 正確選項同義轉換」，訓練一眼認出換句話說的能力。',
      table: {
        headers: ['語意類別', '文章原文常見表達', '正確選項同義改寫 (Paraphrase)', '考點說明'],
        rows: [
          ['時間與頻率', 'annually / once every two years / a decade', 'yearly / biennially / ten years', '數字與時間單位換算（century = 100 years, dozen = 12）'],
          ['因果與影響', 'give rise to / contribute to / trigger', 'cause / lead to / result in / bring about', '原文用動詞片語，選項改用不同因果動詞'],
          ['優缺點與正負', 'drawback / downside / obstacle / hazard', 'disadvantage / limitation / barrier / danger', '評估新工法或政策的利弊（pros and cons）'],
          ['數量與趨勢', 'soar / plummet / account for a majority of', 'increase sharply / drop dramatically / make up over 50%', '圖表與科普文常將百分比改寫為 majority / minority'],
        ],
      },
      takeaways: [
        '閱讀測驗「原字照抄」的選項往往是拼湊局部字詞的誘答陷阱；真正正確答案通常使用同義詞改寫（Paraphrase）。',
        '遇到 `NOT true` 或 `EXCEPT` 題型，務必先在題幹畫大叉記號，將四個選項逐一標示 T/F，切勿看到第一個 T 就誤選。',
      ],
    },
    {
      concept: '13. 故事、漫畫與雜誌閱讀',
      kind: 'diagram',
      title: '故事地圖：背景、人物、問題、事件、結局與寓意',
      caption: '把故事整理成情節曲線：開頭交代背景與人物，衝突出現後情節上升到高潮，最後解決問題並帶出寓意。',
      svg: (() => {
        let s = '';
        s += path('M30,190 L150,150 L280,60 L410,140 L530,180', { tone: 'blue', w: 2.6 });
        s += dot(30, 190, 5, 'blue') + dot(150, 150, 5, 'blue') + dot(280, 60, 6, 'red') + dot(410, 140, 5, 'blue') + dot(530, 180, 5, 'green');
        s += text(30, 212, 'Setting／Characters', { size: 11.5, weight: 'bold' });
        s += text(150, 140, 'Problem（衝突）', { size: 11.5, weight: 'bold', anchor: 'middle' });
        s += text(280, 46, 'Climax（高潮）', { size: 11.5, weight: 'bold', anchor: 'middle', tone: 'red' });
        s += text(410, 130, 'Solution', { size: 11.5, weight: 'bold', anchor: 'middle' });
        s += text(530, 202, 'Ending／Theme', { size: 11.5, weight: 'bold', anchor: 'end', tone: 'green' });
        s += text(215, 120, 'Events', { size: 11.5, tone: 'muted', anchor: 'middle' });
        return svg(560, 224, s);
      })(),
      takeaways: [
        '問人物感受時，從表情、動作與語氣找線索，不要只看單一形容詞。',
        '問寓意（lesson）時，選能概括整個故事的答案，而不是只發生在某段的細節。',
      ],
    },
  ],

  'vocabulary-professional': [
    {
      concept: '2. 結構元件詞彙 (Structural Elements[TTS:Structural Elements])',
      kind: 'diagram',
      title: '建築工程英文圖說與結構部位標註圖',
      caption: '在建築剖面構架上直接標註 Roof Truss、Beam、Column、Slab、Curtain Wall 與 Foundation 等統測與 PVQC 核心工程英文詞彙。',
      svg: (() => {
        let s = '';
        s += text(280, 20, '建築結構元件英文圖說標註 (Structural Elements & Building Envelope)', { anchor: 'middle', size: 13, weight: 'bold' });
        // 屋頂桁架
        s += polygon([[140, 74], [280, 34], [420, 74]], { tone: 'amber', fill: 'amber', soft: true, w: 1.8 });
        s += line(280, 34, 280, 74, { tone: 'amber', w: 1.4 });
        s += line(210, 54, 280, 74, { tone: 'amber', w: 1.4 });
        s += line(350, 54, 280, 74, { tone: 'amber', w: 1.4 });
        // 梁與樓板
        s += rect(140, 74, 280, 14, { tone: 'blue', fill: 'blue', soft: true, w: 1.6 });
        s += rect(140, 134, 280, 12, { tone: 'green', fill: 'green', soft: true, w: 1.6 });
        // 柱
        s += rect(146, 88, 18, 102, { tone: 'ink', fill: 'muted', soft: true, w: 1.6 });
        s += rect(396, 88, 18, 102, { tone: 'ink', fill: 'muted', soft: true, w: 1.6 });
        // 基礎
        s += rect(116, 190, 328, 22, { tone: 'violet', fill: 'violet', soft: true, w: 1.8 });
        // 標註引線
        s += arrow(104, 52, 186, 52, { tone: 'amber', w: 1.5, head: 6 });
        s += text(100, 55, 'Roof Truss (屋頂桁架)', { anchor: 'end', size: 11, weight: 'bold', tone: 'amber' });
        s += arrow(104, 81, 138, 81, { tone: 'blue', w: 1.5, head: 6 });
        s += text(100, 85, 'Girder / Beam (大梁/梁)', { anchor: 'end', size: 11, weight: 'bold', tone: 'blue' });
        s += arrow(104, 140, 138, 140, { tone: 'green', w: 1.5, head: 6 });
        s += text(100, 144, 'Floor Slab (樓板)', { anchor: 'end', size: 11, weight: 'bold', tone: 'green' });
        s += arrow(456, 115, 416, 115, { tone: 'ink', w: 1.5, head: 6 });
        s += text(460, 119, 'Column (柱)', { anchor: 'start', size: 11, weight: 'bold', tone: 'ink' });
        s += arrow(456, 165, 416, 165, { tone: 'red', w: 1.5, head: 6 });
        s += text(460, 169, 'Curtain Wall (帷幕牆)', { anchor: 'start', size: 11, weight: 'bold', tone: 'red' });
        s += arrow(456, 201, 446, 201, { tone: 'violet', w: 1.5, head: 6 });
        s += text(460, 205, 'Foundation (基礎)', { anchor: 'start', size: 11, weight: 'bold', tone: 'violet' });
        return svg(560, 226, s);
      })(),
      takeaways: [
        '主結構四大元件必背：`Foundation`（基礎）、`Column`（柱）、`Beam / Girder`（梁／大梁）、`Slab`（樓板）。',
        '鋼筋混凝土英文為 **`Reinforced Concrete (RC)`**，其中 `reinforce` 意為「強化、加勁」，鋼筋則稱為 `rebar (reinforcing bar)`。',
      ],
    },
    {
      concept: '7. PVQC 建築類精選速記策略',
      kind: 'table',
      title: '工程英文四大主題字彙',
      caption: '依建材結構、設計圖學、工地安全、綠建築四個主題整理核心字彙。',
      table: {
        "headers": [
          "ESP 專業詞彙領域",
          "核心必考英文單字",
          "中文對照與考點說明"
        ],
        "rows": [
          [
            "建材與結構元件",
            "concrete, cement, timber, steel, column, beam, foundation",
            "注意 cement（水泥粉）與 concrete（混凝土）的區別"
          ],
          [
            "設計圖學與視圖",
            "floor plan, elevation, section, perspective, scale, blueprint",
            "plan 平面圖、elevation 立面圖、section 剖面圖"
          ],
          [
            "工地安全與 PPE",
            "helmet / hard hat, safety harness, goggles, scaffold, hazard",
            "PPE = Personal Protective Equipment（個人防護裝備）"
          ],
          [
            "綠建築與永續工程",
            "solar panel, insulation, ventilation, carbon footprint, renewable",
            "統測素養閱讀最愛考隔熱 (insulation) 與自然通風 (ventilation)"
          ]
        ]
      },
      takeaways: [
        '建築三視圖英文務必精準對應：**`Floor Plan`（平面圖）、`Elevation`（立面圖）、`Section / Cross-section`（剖面圖）、`Perspective`（透視圖）**。',
        '`Cement` 是「水泥（膠結粉體材料）」，加了水與砂石骨材拌合後才叫 `Concrete`（混凝土）。',
      ],
    },
    {
      concept: '13. 工程英文縮寫總表：從圖說到工地的 40 個必懂代碼',
      kind: 'table',
      title: '建築圖說、測量、施工與工地安全核心英文術語對照表',
      caption: '彙整建築製圖、工地現場與國際工程圖說最常出現的專業術語與縮寫代碼。',
      table: {
        headers: ['工程領域', '專業英文術語', '中文精準譯名', '工程圖說縮寫與記憶法'],
        rows: [
          ['建築製圖與尺度', 'Floor Plan / Elevation / Section / Dimension', '平面圖／立面圖／剖面圖／尺寸標註', 'GL (地面線 Ground Line)、FL (樓板面線 Floor Level)'],
          ['結構與材料', 'Reinforced Concrete / Load-bearing Wall / Timber', '鋼筋混凝土／承重牆／木材構造', 'RC (鋼筋混凝土)、SRC (鋼骨鋼筋混凝土)、rebar (鋼筋)'],
          ['測量與基地', 'Surveying / Tripod / Level / Boundary / Altitude', '測量／三腳架／水準儀／地界線／高程海拔', 'BM (水準點 Benchmark)、ROW (道路用地 Right of Way)'],
          ['工地安全與施工', 'Scaffolding / Hard Hat / Safety Harness / Excavation', '鷹架（施工架）／安全帽／全身式安全帶／開挖', 'PPE (個人防護具)、RFI (工程釋疑單 Request for Information)'],
        ],
      },
      takeaways: [
        '工地安全必背：`scaffolding`（鷹架／施工架）、`hard hat / helmet`（安全帽）、`safety harness`（高空防墜安全帶）、`evacuation route`（緊急疏散路線）。',
        '圖面縮寫：`BIM (Building Information Modeling)` 建築資訊模型、`MEP (Mechanical, Electrical, and Plumbing)` 機電水電工程。',
      ],
    },
  ],

  'grammar-clauses': [
    {
      concept: '關係代名詞與形容詞子句',
      kind: 'diagram',
      title: '主句與三大從屬子句結構樹狀圖',
      caption: '比較名詞子句（當主詞/受詞/補語）、形容詞子句（置先行詞後修飾名詞）與副詞子句（表時間/原因/條件/讓步）之句法位置。',
      svg: (() => {
        let s = '';
        s += text(280, 20, '英文複合句三大從屬子句（Subordinate Clauses）功能與位置樹狀圖', { anchor: 'middle', size: 13, weight: 'bold' });
        s += box(190, 36, 180, 38, ['主要子句 Main Clause (S + V)'], { tone: 'ink', size: 12 });
        s += arrow(230, 74, 95, 104, { tone: 'blue', w: 1.8, head: 7 });
        s += arrow(280, 74, 280, 104, { tone: 'green', w: 1.8, head: 7 });
        s += arrow(330, 74, 465, 104, { tone: 'amber', w: 1.8, head: 7 });
        s += box(16, 106, 162, 96, [
          '1. 名詞子句 (Noun Clause)',
          '當 S / O / C（不可省略句幹）',
          '• that + S + V',
          '• whether / if + S + V',
          '• wh- + S + V（間接問句）',
        ], { tone: 'blue', size: 10.5 });
        s += box(196, 106, 168, 96, [
          '2. 形容詞子句 (Adj. Clause)',
          '緊接「先行詞 N」後面修飾',
          '• 人：who / whom / whose',
          '• 物：which / that',
          '• 地點時間：where = in which',
        ], { tone: 'green', size: 10.5 });
        s += box(382, 106, 162, 96, [
          '3. 副詞子句 (Adv. Clause)',
          '修飾整句（時間/條件/讓步）',
          '• when / before / until',
          '• if / unless（現代未！）',
          '• although / whereas',
        ], { tone: 'amber', size: 10.5 });
        return svg(560, 216, s);
      })(),
      takeaways: [
        '判斷關係代名詞 `which` vs. 關係副詞 `where`：看後面子句**缺不缺主詞或受詞**。若缺主詞／受詞選 `which`；若後面子句結構完整且表「在該地點」選 `where (= in/at/on which)`。',
        '時間與條件副詞子句（`when, as soon as, before, until, if, unless`）必守**「現在式代替未來式」**鐵則：主句用 `will V`，副詞子句只能用現在簡單式！',
      ],
    },
    {
      concept: '名詞子句與間接問句',
      kind: 'table',
      title: '複合句四大考點：判準口訣與正誤對照',
      caption: '整理關係子句、連接詞與介系詞、分詞修飾、間接問句的判斷口訣與正誤例句。',
      table: {
        "headers": [
          "複合句考點",
          "秒殺判準口訣",
          "經典正誤對照範例"
        ],
        "rows": [
          [
            "關係代名詞與非限定",
            "逗號後不可用 that；介系詞後不可用 who/that",
            "..., which (O) / ..., that (X)；in which (O) / in that (表因為)"
          ],
          [
            "連接詞 vs. 介系詞",
            "後接 S + V 選連接詞；後接 N / V-ing 選介系詞",
            "although + S + V ↔ despite / in spite of + N"
          ],
          [
            "分詞片語修飾",
            "名詞主動發出用 V-ing；名詞被動承受用 p.p.",
            "the house built (被建) in 1920；workers wearing (戴) helmets"
          ],
          [
            "間接問句與 what",
            "間接問句必用「wh- + S + V」不倒裝；what 前無先行詞",
            "I don't know where he lives.；what (= the thing which)"
          ]
        ]
      },
      takeaways: [
        '**「連接詞 vs. 介系詞」**是統測每年必考題：先看空格後面有沒有動詞！有 `S + V` 選 `because / although / while`；只有 `N / V-ing` 選 `because of / due to / despite / during`。',
        '`what` 等於 `the thing(s) that`，本身已經包含先行詞，所以 **`what` 前面絕對不能有名詞先行詞**！',
      ],
    },
    {
      concept: '介系詞 vs 連接詞辨析',
      kind: 'table',
      title: '從屬連接詞 vs. 介系詞片語 四大語意家族完全對照表',
      caption: '將統測最常混淆的「讓步、因果、時間、條件」連接詞與介系詞並排對照，解題時先檢查空格後方結構。',
      table: {
        headers: ['邏輯關係', '從屬連接詞（後接 S + V 完整子句）', '介系詞／介系詞片語（後接 N / V-ing）', '統測高頻例句示範'],
        rows: [
          ['讓步（雖然／儘管）', 'although / though / even though / while', 'despite / in spite of / regardless of', 'Despite the heavy rain (N), the survey continued.'],
          ['因果（因為／由於）', 'because / since / as / now that / in that', 'because of / due to / owing to / thanks to', 'The delay was due to a shortage (N) of steel.'],
          ['時間（在…期間／當）', 'while / when / as', 'during / throughout', 'No smoking is allowed during the construction (N).'],
          ['條件與除外', 'if / unless (除非) / provided that / in case', 'in case of / without / but for / except for', 'In case of fire (N), use the emergency stairs.'],
        ],
      },
      takeaways: [
        '千萬別在 `despite` 後面多加 `of`（`despite = in spite of`）；也別在 `although` 的同一句中又寫 `but`！',
        '`unless` 等於 `if...not（除非）`，其引導的條件副詞子句同樣遵守「現在式代替未來式」。',
      ],
    },
  ],

  'reading-infographics': [
    {
      concept: '9. 圖表趨勢描述句型庫：折線圖・長條圖・圓餅圖',
      kind: 'diagram',
      title: '數據趨勢圖表英文關鍵字定位圖',
      caption: '在折線趨勢圖上標註 soar/surge（暴增）、rise steadily（穩定上升）、fluctuate（波動）、peak at（達顛峰）、plummet（暴跌）與 level off（趨緩持平）。',
      svg: (() => {
        let s = '';
        s += text(280, 20, '圖表閱讀趨勢動詞視覺化座標 (Chart Trend Vocabulary)', { anchor: 'middle', size: 13, weight: 'bold' });
        s += arrow(45, 190, 525, 190, { tone: 'muted', w: 1.5, head: 7 });
        s += arrow(45, 190, 45, 34, { tone: 'muted', w: 1.5, head: 7 });
        const pts: [number, number][] = [[65, 165], [145, 125], [225, 52], [305, 145], [385, 115], [445, 130], [505, 130]];
        s += `<polyline points="${pts.map(([x, y]) => `${x},${y}`).join(' ')}" class="cv-s-blue cv-nofill" stroke-width="2.6" stroke-linejoin="round"/>`;
        for (const [x, y] of pts) s += dot(x, y, 4, 'blue');
        s += pill(115, 122, 'rise steadily', 'green', 10.5);
        s += pill(225, 34, 'reach a peak (顛峰)', 'amber', 10.5);
        s += pill(280, 96, 'plummet / plunge (暴跌)', 'red', 10.5);
        s += pill(365, 96, 'fluctuate (波動)', 'violet', 10.5);
        s += pill(475, 110, 'level off / remain stable', 'blue', 10.5);
        s += text(280, 212, '比例佔比必考詞：account for = make up = represent + X%（占百分之…）', { anchor: 'middle', size: 11.5, weight: 'bold', tone: 'ink' });
        return svg(560, 224, s);
      })(),
      takeaways: [
        '圖表閱讀三步法：(1) 先讀標題與橫縱軸單位（注意 `in thousands / millions` 或 `%`）；(2) 抓最高點 (`peak / highest`) 與最低點 (`lowest`)；(3) 對照題幹條件做加減倍數運算。',
        '表示「占…比例」的四大動詞片語：**`account for`、`make up`、`comprise`、`represent`**。',
      ],
    },
    {
      concept: '數據描述常見句型',
      kind: 'chart',
      title: '綠建築改善前後各項能源消耗占比對照圖（實用圖表判讀範例）',
      caption: '示範統測圖表題常見之雙系列長條圖：比較建築導入遮陽與隔熱前後之空調、照明、設備耗電量變化。',
      svg: barChart({
        w: 520,
        h: 250,
        categories: ['空調 HVAC', '照明 Lighting', '機電插座 Plug', '電梯與水泵'],
        series: [
          { name: '改善前耗能 (kWh/m²)', tone: 'red', values: [95, 45, 35, 25] },
          { name: '綠建築改善後 (kWh/m²)', tone: 'green', values: [55, 22, 30, 20] },
        ],
        y: { min: 0, max: 110, ticks: [0, 25, 50, 75, 100], label: '年耗電量 (kWh/m²)' },
        values: true,
      }),
      table: {
        headers: ['耗能項目', '改善前 (kWh/m²)', '改善後 (kWh/m²)', '英文趨勢描述句型 (Exam Paraphrase)'],
        rows: [
          ['空調 (HVAC)', '95', '55', 'Energy used for HVAC dropped by 42%, the largest reduction.'],
          ['照明 (Lighting)', '45', '22', 'Lighting consumption was cut by more than half (over 50%).'],
          ['機電插座 (Plug)', '35', '30', 'Plug load showed a slight decrease from 35 to 30 kWh/m².'],
          ['電梯與水泵 (Lifts)', '25', '20', 'Lifts accounted for the smallest share in both periods.'],
        ],
      },
      takeaways: [
        '注意「降幅最多（`largest reduction`）」與「降幅超過一半（`cut by more than half`）」的英文表述差異。',
        '`decrease by 40%` 指「減少了 40%（差額）」；`decrease to 40%` 指「減少到剩下 40%（終值）」，介系詞 `by` 與 `to` 決定計算結果！',
      ],
    },
    {
      concept: '廣告/海報/折價券速讀法',
      kind: 'table',
      title: '實用文本（公告、折價券、時刻表、安全標示）高頻條件詞對照表',
      caption: '整理統測生活與工程實用文本中最常決定答案真偽的「限制條件、費用折扣與安全警語」關鍵字。',
      table: {
        headers: ['文本類型', '高頻條件關鍵字', '精準中文語意', '統測計算與判讀陷阱'],
        rows: [
          ['折價券與促銷廣告', '20% off / buy one get one free / valid until / minimum purchase', '打八折／買一送一／有效期限至…／最低消費金額', '「20% off」是扣掉 20%（打八折，乘以 0.8），絕非打二折！'],
          ['門票與收費表', 'admission / complimentary / free of charge / senior citizens', '入場費／免費贈送的／免費／高齡長者', 'complimentary breakfast = 免費附贈早餐（勿與稱讚搞混）'],
          ['公告與備忘錄 (Memo)', 'effective immediately / mandatory / prior to / until further notice', '即刻生效／強制性的／在…之前／直到另行通知', 'mandatory (強制必參加) ↔ optional / voluntary (自由參加)'],
          ['安全標示與手冊', 'authorized personnel only / flammable / fragile / out of order', '僅限授權人員進入／易燃物／易碎品／故障待修', 'out of order 指機器電梯「故障」，非順序亂掉'],
        ],
      },
      takeaways: [
        '折扣計算鐵則：**`X% off = 減去 X%`**（如 `$100` 商品 `30% off` 實付 `$70`）；且須檢查是否有限定 `weekdays only`（僅限平日）或 `cannot be combined with other offers`（不可與其他優惠併用）。',
        '`complimentary`（i：免費贈送的，= `free of charge`）vs. `complementary`（e：互補的），為統測字彙與閱讀雙料常客。',
      ],
    },
  ],

  'cloze-passage-structure': [
    {
      concept: '7. 統測四大天王轉折詞全覽矩陣 (因果、轉折、遞進、舉例) 與標點法則',
      kind: 'diagram',
      title: '克漏字上下文轉折邏輯鏈圖',
      caption: '將統測克漏字轉折副詞與連接詞依「因果、轉折對比、遞進補充、舉例換言之」四大邏輯關係加上標點符號規則視覺化。',
      svg: (() => {
        let s = '';
        s += text(280, 20, '克漏字四大語意邏輯鏈與標點符號秒殺法則', { anchor: 'middle', size: 13, weight: 'bold' });
        s += box(20, 42, 250, 68, [
          '1. 轉折與對比（前後正負相反）',
          '• 副詞 + , ：However, / Nevertheless, / Instead,',
          '• 連詞接子句：although / whereas / while',
        ], { tone: 'red', size: 11 });
        s += box(290, 42, 250, 68, [
          '2. 因果推理（前因後果）',
          '• 副詞 + , ：Therefore, / Consequently, / Thus,',
          '• 片語：As a result, / Hence,',
        ], { tone: 'blue', size: 11 });
        s += box(20, 126, 250, 68, [
          '3. 遞進與補充（同向加碼）',
          '• 副詞 + , ：Moreover, / Furthermore, / Besides,',
          '• 片語：In addition, (= Additionally,)',
        ], { tone: 'green', size: 11 });
        s += box(290, 126, 250, 68, [
          '4. 舉例與換句話說（抽象→具體）',
          '• 舉例：For example, / For instance, / such as',
          '• 重申：In other words, / That is (to say),',
        ], { tone: 'amber', size: 11 });
        s += text(280, 212, '標點公式：句點/分號 + 「However, / Therefore,」（轉折副詞後必有逗號！）', { anchor: 'middle', size: 11.5, weight: 'bold', tone: 'violet' });
        return svg(560, 224, s);
      })(),
      takeaways: [
        '`However`, `Therefore`, `Moreover`, `Nevertheless` 屬於**轉折副詞**，不能直接連接兩個子句，前面必須是句號 `.` 或分號 `;`，後面通常緊接逗號 `,`。',
        '`Instead`（反而，單獨用＋逗號）vs. `Instead of + N/V-ing`（沒有做 A，反而…）：先看空格後面有沒有受詞！',
      ],
    },
    {
      concept: '8. 綜合測驗四大空格類型判別法：先分類再作答',
      kind: 'table',
      title: '克漏字四類空格：選項特徵與解題 SOP',
      caption: '先依選項外觀判斷空格類型，再套用對應的解題步驟。',
      table: {
        "headers": [
          "克漏字空格類型",
          "選項外觀特徵",
          "標準解題SOP"
        ],
        "rows": [
          [
            "字彙與介系詞搭配",
            "四個不同字根單字，或四個介系詞 (in/on/at/with)",
            "看空格前後名詞與動詞之固定搭配 (Collocation)"
          ],
          [
            "轉折詞與連接詞",
            "However / Therefore / Moreover / Otherwise",
            "先比對前句與後句語意是「因果、反轉、並列、否則」"
          ],
          [
            "動詞時態與分詞",
            "同一動詞之 V-ed / V-ing / to V / has p.p. 變化",
            "先算子句數量與連接詞數：有真動詞選分詞，無真動詞選時態"
          ],
          [
            "代名詞與關係詞",
            "it / one / that / those 或 which / where / what",
            "確認代替的前方名詞是單數或複數、定指或泛指"
          ]
        ]
      },
      takeaways: [
        '遇到四個選項是同一個動詞的不同形態（如 `build / built / building / builds`），**第一步永遠是檢查該句是否已經有主要動詞**！若已有主要動詞且無連接詞，必選分詞 (`V-ing` 主動 / `p.p.` 被動) 或不定詞 `to V`。',
        '`Otherwise`（否則）常用於「前句給出建議或條件，後句說明若不這麼做的負面後果」。',
      ],
    },
    {
      concept: '3. 段落銜接與代名詞指代',
      kind: 'table',
      title: '克漏字必考代名詞指代（one / it / that / those / another / the other）總表',
      caption: '釐清統測克漏字與閱讀理解最常混淆的限定與不定代名詞，依「泛指 vs. 特指、單數 vs. 複數、範圍數量」精準選答。',
      table: {
        headers: ['代名詞組', '核心語法規則', '單複數對應', '統測必背結構範例'],
        rows: [
          ['it vs. one', 'it 指「前面提過的同一個」；one 指「同類中的任一個」', 'it → they/them；one → ones', 'I lost my pen, so I bought a new one.'],
          ['that vs. those（比較句）', '比較句中代替前面提過的名詞，後常接 of...', '單數/不可數用 that；複數用 those', 'The climate of Taipei is wetter than that of Taichung.'],
          ['one... the other（兩者）', '限定總數為「兩個」時，另一個必加 the', 'Two options: one is..., and the other is...', 'He has two sons; one is an architect, and the other is a doctor.'],
          ['some... others（不特定多數）', '無特定總數時用 others；有特定全體剩餘者用 the others', 'Some people..., while others...', 'Some materials are cheap, while others are durable.'],
        ],
      },
      takeaways: [
        '比較級句型中，`The population/cost/design of A is... than ______ of B`：若代替單數或不可數名詞填 **`that`**，若代替複數名詞（如 `buildings`, `prices`）填 **`those`**。',
        '看到句首寫 `Between the two...` 或 `two + 複數名詞`，後面配對一定是 **`one... the other...`**。',
      ],
    },
  ],

  'grammar-mastery': [
    {
      concept: '1. 假設語氣與現在/過去事實相反',
      kind: 'diagram',
      title: '假設語氣時間軸與真實性對照圖',
      caption: '遵循「時態往過去退一格」原則：與現在事實相反用過去式 (were/V-ed)，與過去事實相反用過去完成式 (had p.p.)。',
      svg: (() => {
        let s = '';
        s += text(280, 20, '假設語氣（Subjunctive Mood）三大黃金公式：時態往過去退一格！', { anchor: 'middle', size: 13, weight: 'bold' });
        s += box(20, 42, 164, 118, [
          '1. 與過去事實相反',
          '（當初如果…就好了）',
          'If + S + had + p.p.,',
          'S + would/could/might',
          '    + have + p.p.',
        ], { tone: 'violet', size: 11 });
        s += box(198, 42, 164, 118, [
          '2. 與現在事實相反',
          '（現在如果…就好了）',
          'If + S + were / V-ed,',
          'S + would/could/might',
          '    + V（原形）',
        ], { tone: 'blue', size: 11 });
        s += box(376, 42, 164, 118, [
          '3. 與未來極不可能相反',
          '（萬一未來發生…）',
          'If + S + should V',
          '       / were to V,',
          'S + would/will + V',
        ], { tone: 'green', size: 11 });
        s += box(20, 172, 520, 40, [
          '省略 If 倒裝三本柱：Had + S + p.p. / Were + S ... / Should + S + V（助動詞移至句首，去掉 If）',
        ], { tone: 'amber', size: 11.5 });
        return svg(560, 224, s);
      })(),
      takeaways: [
        '解假設語氣題只需對照**「條件句與主句的動詞長相」**：看到前半句是 `If + had p.p.`，後半句無條件選 `would/could/might + have p.p.`（反之亦然）。',
        '若句首沒有 `If` 卻看到 **`Had / Were / Should + 主詞`** 開頭，即為省略 `If` 的假設倒裝句！',
      ],
    },
    {
      concept: '7. 統測 13 大文法模組速查總表',
      kind: 'table',
      title: '高階句型：判讀公式與解題關鍵',
      caption: '整理分詞構句、假設語氣、否定倒裝與意志虛擬的判讀公式。',
      table: {
        "headers": [
          "高階文法句型",
          "核心判讀公式",
          "句子重組與克漏字解題關鍵"
        ],
        "rows": [
          [
            "分詞構句",
            "______, S + V：抓逗號後的主詞 S 判斷主動(V-ing)或被動(p.p.)",
            "Seen from the sky, the island looks...（島是被看，用 Seen）"
          ],
          [
            "假設語氣",
            "without / but for + N = If it were not for / had not been for",
            "注意混合假設（If 過去條件 + 主句 now 用 would V）"
          ],
          [
            "否定倒裝句",
            "Never / Seldom / Hardly / Not only 置句首 + 助動詞/be + S + V",
            "Not only does he..., but he also...（前倒後不倒）"
          ],
          [
            "強調與意志虛擬",
            "insist / suggest / demand / require that S + (should) + 原形 V",
            "建議要求命令動詞後的 that 子句必用原形動詞（或 be + p.p.）"
          ]
        ]
      },
      takeaways: [
        '分詞構句破題口訣：**「先找逗號後面的主詞 S，問 S 是自己做（選 `V-ing`）還是被做（選 `p.p.`）」**。例如 `Located in Taipei, the museum...`（博物館被座落於台北，用 `Located`）。',
        '表「堅持、建議、要求、命令（`insist, suggest, recommend, demand, require, order`）」後的 `that` 子句，不論主詞單複數或過去式，動詞一律用**`(should) + 原形 V`**！',
      ],
    },
    {
      concept: '3. 倒裝句',
      kind: 'table',
      title: '統測高階四大特殊句型（倒裝、分裂強調、對過去推測、倍數比較）速查表',
      caption: '彙整選擇題與非選句子重組最常命題的四大高階句型公式與對比範例。',
      table: {
        headers: ['高階句型名稱', '標準句構公式', '高頻觸發關鍵詞', '統測實戰例句'],
        rows: [
          ['否定副詞置句首倒裝', '否定詞 + be / 助動詞 (do/does/did/have/can) + S + V', 'Never, Seldom, Little, Hardly...when, No sooner...than, Only + 副詞', 'Seldom does the architect compromise on safety.'],
          ['分裂強調句 (Cleft)', 'It is / was + 【被強調部分】 + that / who + 剩餘句子', '去掉 It is...that 後仍可還原為完整句（藉此與虛主詞區分）', 'It was in 2024 that the green building was completed.'],
          ['助動詞 + have p.p.', 'must have p.p. (過去必定) vs. should have p.p. (過去本該做卻沒做)', 'must / may / cannot / should / needn\'t + have + p.p.', 'You should have checked the blueprint before ordering.'],
          ['倍數比較句型', 'A is + 倍數 (twice / three times) + as Adj. as B ＝ the N of B', 'twice, three times, half + as...as / 比較級 than / the size of', 'This beam is twice as strong as (= twice the strength of) that one.'],
        ],
      },
      takeaways: [
        '`must have + p.p.` 表對過去事實的強烈推測（過去一定曾經…）；`should have + p.p.` 表對過去的後悔或責備（過去本應該做…卻沒做）。',
        '`Hardly / Scarcely had + S + p.p. when + S + V-ed` ＝ `No sooner had + S + p.p. than + S + V-ed`（一…就…），注意 `Hardly` 配 `when`、`No sooner` 配 `than`！',
      ],
    },
  ],

  'workplace-communication': [
    {
      concept: '9. 職場 Email 寫作：格式、語氣分級與常見句型庫',
      kind: 'diagram',
      title: '工程 RFI 與商務 Email 標準架構圖',
      caption: '拆解職場商務信件與工程釋疑單（RFI）之五段式架構：主旨列、稱謂、開頭目的、說明與附件、行動呼籲與結尾敬語。',
      svg: (() => {
        let s = '';
        s += text(280, 20, '工程商務 Email 與 RFI（工程釋疑單）五段式標準結構', { anchor: 'middle', size: 13, weight: 'bold' });
        const rows = [
          { y: 34, tone: 'blue' as const, t: '1. Subject Line 主旨列：精準標明專案案號與目的 (e.g., [RFI #12] Rebar Spacing Clarification)' },
          { y: 70, tone: 'green' as const, t: '2. Opening 開頭目的：I am writing to inquire about / confirm / inform you that...' },
          { y: 106, tone: 'amber' as const, t: '3. Body & Attachment 細節與附件：Please find attached the revised floor plan for your review.' },
          { y: 142, tone: 'violet' as const, t: '4. Call to Action 行動與期限：We would appreciate it if you could reply by Friday.' },
          { y: 178, tone: 'ink' as const, t: '5. Sign-off 結尾敬語：Sincerely, (知姓名) / Faithfully, (不知姓名) / Best regards,' },
        ];
        for (const r of rows) {
          s += box(28, r.y, 504, 30, [r.t], { tone: r.tone, size: 11 });
        }
        return svg(560, 220, s);
      })(),
      takeaways: [
        '商務信件「隨信附上…」的標準英文為 **`Please find attached + N`** 或 **`Attached is + N`**。',
        '`We would appreciate it if you could + V...`（若您能…我們將萬分感激）中，**`appreciate` 後面必須先加虛受詞 `it` 才能接 `if` 子句**，且不可拿「人（you）」當受詞！',
      ],
    },
    {
      concept: '2. 設計簡報與客戶會議英文',
      kind: 'table',
      title: '職場四大溝通場景：核心單字與慣用句型',
      caption: '依詢價書信、工地驗收、設計會議、契約變更四種場景整理單字與句型。',
      table: {
        "headers": [
          "職場溝通場景",
          "必背核心商務與工程單字",
          "關鍵慣用句型"
        ],
        "rows": [
          [
            "商務書信與詢價",
            "quotation (報價單), invoice (請款發票), specification (規格), sample",
            "Could you provide a price quotation for 500 tons of cement?"
          ],
          [
            "工地安全與驗收",
            "inspection (查驗), defect (缺失), rectify (整改), compliance (合規)",
            "All defects on the punch list must be rectified before handover."
          ],
          [
            "設計簡報與會議",
            "agenda (議程), minutes (會議紀錄), proposal (提案), feedback",
            "Let's move on to the next item on the agenda."
          ],
          [
            "契約與變更管理",
            "contract, warranty (保固), penalty (違約金), extension (展延)",
            "The warranty period is two years from the date of completion."
          ]
        ]
      },
      takeaways: [
        '會議英文必分清：**`agenda`** 是會前的「會議議程」，**`minutes`**（恆用複數）是會後的「會議紀錄」。',
        '採購流程單字順序：`inquiry`（詢價）→ `quotation / quote`（報價單）→ `purchase order (PO)`（採購訂單）→ `invoice`（請款單／發票）→ `receipt`（收據）。',
      ],
    },
    {
      concept: '9. 職場 Email 寫作：格式、語氣分級與常見句型庫',
      kind: 'table',
      title: '商務書信與工程職場「口語 vs. 正式商務英文」轉換對照表',
      caption: '將日常口語轉換為統測職場閱讀與商務 Email 常見之正式用字，快速看懂公文與合約通知。',
      table: {
        headers: ['溝通功能', '日常口語表達 (Informal)', '正式商務與工程英文 (Formal)', '中文精準語意'],
        rows: [
          ['詢問與通知', 'ask about / tell you', 'inquire about / inform or notify you that...', '詢問關於…／正式通知您…'],
          ['需要與協助', 'need / help', 'require / assist (assistance)', '需要／協助（如 require immediate attention）'],
          ['延遲與補償', 'say sorry for being late / pay back', 'apologize for the delay / compensate or reimburse', '為延誤致歉／賠償或核銷報支費用'],
          ['遵守與確認', 'follow the rules / make sure', 'comply with (in compliance with) / ensure or verify', '遵守法規規範／確保或查驗確認'],
        ],
      },
      takeaways: [
        '「遵守（法規、安全標準）」的正式商務片語必背：**`comply with = abide by = conform to = follow`**（名詞為 `in compliance with`）。',
        '`reimburse` 專指「核銷、實報實銷（出差或代墊工程款）」，`compensate` 則指「賠償、補償損失」。',
      ],
    },
  ],

  'reading-advanced': [
    {
      concept: '作者語氣與立場推論',
      kind: 'diagram',
      title: '多文本交叉比對與作者態度推論圖',
      caption: '針對統測進階雙篇對讀與素養題組，建立「事實 Fact vs. 觀點 Opinion」區辨及作者語氣光譜（正向、中立客觀、負向批判）。',
      svg: (() => {
        let s = '';
        s += text(280, 20, '進階閱讀雙核心：多文本交叉比對 ＆ 作者語氣光譜 (Author\'s Tone)', { anchor: 'middle', size: 13, weight: 'bold' });
        s += box(24, 42, 160, 74, ['Text A（如：政策公告）', '陳述法規數據與補助辦法', '⇒ 找客觀條件 (Fact)'], { tone: 'blue', size: 11 });
        s += box(376, 42, 160, 74, ['Text B（如：讀者投書）', '評論政策成效與執行困境', '⇒ 找立場態度 (Opinion)'], { tone: 'amber', size: 11 });
        s += box(208, 48, 144, 62, ['交叉比對交集區', '共通主題 ＋ 觀點異同', '（綜合推論題出題處）'], { tone: 'violet', size: 11 });
        s += arrow(186, 79, 206, 79, { tone: 'muted', w: 1.6, head: 6 });
        s += arrow(374, 79, 354, 79, { tone: 'muted', w: 1.6, head: 6 });
        // 語氣光譜
        s += line(50, 162, 510, 162, { tone: 'ink', w: 2 });
        s += pill(115, 162, '正向：optimistic / supportive', 'green', 10.5);
        s += pill(280, 162, '中立：objective / informative', 'blue', 10.5);
        s += pill(445, 162, '負向：skeptical / critical', 'red', 10.5);
        s += text(280, 204, '區辨原則：Fact（可被數據證實）vs. Opinion（含 should, best, unfortunately 等主觀詞）', { anchor: 'middle', size: 11.5, weight: 'bold', tone: 'ink' });
        return svg(560, 220, s);
      })(),
      takeaways: [
        '科普說明文與百科介紹的作者態度通常為 **`objective`（客觀的）、`informative`（提供資訊的）、`neutral`（中立的）**。',
        '若文章大量使用 `unfortunately`, `doubtful`, `fail to`, `so-called`，作者態度則為 **`critical`（批判的）、`skeptical`（懷疑的）或 `concerned`（擔憂的）**。',
      ],
    },
    {
      concept: '11. 統測長篇閱讀高頻主題背景知識庫',
      kind: 'table',
      title: '素養閱讀常見主題：字彙庫與文章論證結構',
      caption: '整理長篇閱讀常見主題的必備字彙與文章結構（主題分類供備考參考）。',
      table: {
        "headers": [
          "跨領域素養主題",
          "必備核心主題字彙庫",
          "常見文章論證結構"
        ],
        "rows": [
          [
            "SDGs 與永續環境",
            "sustainability, carbon emission, renewable energy, eco-friendly, biodiversity",
            "提出環境危機 → 分析成因 → 介紹綠建築或循環經濟解方"
          ],
          [
            "科技 AI 與公衛醫療",
            "artificial intelligence, symptom, immune system, diagnose,chronic",
            "新科技或醫學發現 → 實驗數據對比 → 潛在風險與倫理省思"
          ],
          [
            "文化建築與歷史遺產",
            "heritage, preserve, architecture, monument, indigenous, aesthetic",
            "起源背景 → 空間或工藝特色 → 當代文化保存挑戰"
          ],
          [
            "心理教育與社會經濟",
            "cognitive, productivity, consumer, inflation, budget, phenomenon",
            "生活現象引入 → 心理學家實驗結果 → 給讀者的具體建議"
          ]
        ]
      },
      takeaways: [
        '科普與社科文章最常採用「**現象／問題（Problem）→ 實驗／原因分析（Cause/Study）→ 解決方案／結論（Solution）**」三段式結構，結論往往在研究人員 `found / concluded that...` 之後！',
        'SDGs 永續議題必背字族：`sustain` (v.維持) → `sustainable` (adj.永續的) → `sustainability` (n.永續性)；`emit` (v.排放) → `emission` (n.排放物)。',
      ],
    },
    {
      concept: '作者語氣與立場推論',
      kind: 'table',
      title: '統測閱讀「作者態度形容詞」與「論證結構標記詞」總整理表',
      caption: '對照作者語氣題常見的四類態度形容詞及文章中讓步反駁的標記句型，精準鎖定作者真正立場。',
      table: {
        headers: ['語氣／結構類別', '高頻英文選項單字', '中文語意', '原文判斷線索'],
        rows: [
          ['正向支持與樂觀', 'positive / optimistic / supportive / enthusiastic / approving', '正面的／樂觀的／支持的／熱情的／贊同的', '多用 promising, beneficial, breakthrough,有效改善等詞'],
          ['客觀中立與分析', 'objective / neutral / informative / analytical / impartial', '客觀的／中立的／資訊性的／分析的／不偏不倚的', '並列正反雙方觀點 (Some argue..., while others believe...)'],
          ['負向批判與懷疑', 'critical / skeptical / pessimistic / concerned / disapproving', '批判的／懷疑的／悲觀的／擔憂的／不贊同的', '多用 questionable, overlook, severe threat, far from enough'],
          ['常見絕對錯誤選項', 'indifferent / apathetic / hostile / mocking / biased', '漠不關心的／冷漠的／敵視的／嘲弄的／偏頗的', '作者既然寫文章探討該議題，態度極少是 indifferent（冷漠）！'],
        ],
      },
      takeaways: [
        '作者態度題秒刪法則：**`indifferent`（漠不關心的）**在閱讀題中通常是錯誤選項，因為作者關心該議題才會撰文探討。',
        '若文章先寫 `Some people claim that A is harmless.` 接著寫 **`However, recent studies reveal that...`**，作者真正的立場一定在 **`However` 之後**！',
      ],
    },
  ],

  'translation-writing': [
    {
      concept: '1. 中譯英語序轉換法',
      kind: 'diagram',
      title: '統測非選翻譯 Chunking 語序轉換圖',
      caption: '示範如何將中文「長修飾語＋地點＋時間＋動作」語序，透過意群切分（Chunking）轉換為英文「主詞＋動詞＋受詞＋地點＋時間」結構。',
      svg: (() => {
        let s = '';
        s += text(280, 20, '中譯英與句子重組「意群切分法 (Chunking)」語序轉換模型', { anchor: 'middle', size: 13, weight: 'bold' });
        s += box(24, 42, 512, 46, [
          '中文原句：【那位戴安全帽的工程師】(S) + 【昨天】(時) + 【在工地】(地) + 【仔細檢查了鋼梁】(V+O)',
        ], { tone: 'amber', size: 11.5 });
        s += arrow(280, 90, 280, 114, { tone: 'red', w: 2, head: 7, label: '後置修飾語移到名詞後；地方在前、時間在後', labelPos: 'mid', labelOffset: [12, 4], labelSize: 11 });
        s += flow(20, 120, [
          ['1. 主詞 + 後置修飾', 'The engineer', 'wearing a helmet'],
          ['2. 核心動詞 + 受詞', 'carefully inspected', 'the steel beams'],
          ['3. 地點副詞 (Place)', 'at the construction', 'site'],
          ['4. 時間副詞 (Time)', 'yesterday.', '（小地方→大地方→時間）'],
        ], { w: 120, h: 64, gap: 13, tones: ['blue', 'green', 'violet', 'red'], size: 10.5 });
        s += text(280, 208, '英文鐵律：先寫「誰做了什麼 (S + V + O)」，超過兩個字的形容詞片語一律放名詞後面！', { anchor: 'middle', size: 11.5, weight: 'bold', tone: 'ink' });
        return svg(560, 222, s);
      })(),
      takeaways: [
        '中譯英第一要務：不管中文句子多長，先抓出**「主詞 S ＋ 動詞 V ＋ 受詞 O」**骨架，再把地點與時間依「**先地點、後時間（小單位到大單位）**」排在句尾。',
        '中文說「在桌上的那本書」，英文把介系詞片語與分詞片語放在名詞後面：**`the book on the desk`**。',
      ],
    },
    {
      concept: '13. 統測非選歷屆命題結構分析與備考路徑',
      kind: 'chart',
      title: '統測英文 115 學年度題型結構：選擇題四大題各有幾題',
      caption: '依技專校院入學測驗中心 115 學年度英文科作答規定：選擇題至少 80 分（共 42 題），非選擇題至多 20 分（填充、句子重組、中譯英）。',
      svg: barChart({
        w: 520,
        h: 260,
        categories: ['字彙', '對話', '綜合測驗', '閱讀測驗'],
        series: [{ name: '題數', tone: 'blue', values: [10, 10, 8, 14] }],
        y: { max: 16, ticks: [0, 4, 8, 12, 16], label: '題數（113–115 學年度）' },
        values: true,
        valueFmt: (v) => `${v} 題`,
      }),
      table: {
        headers: ['部分', '題號／題型', '說明'],
        rows: [
          ['選擇題：字彙', '第 1–10 題', '第 1–8 題句中填空；第 9–10 題判斷畫底線字詞的同義表達'],
          ['選擇題：對話', '第 11–20 題', '依對話前後文選出最適當的回應或提問'],
          ['選擇題：綜合測驗', '第 21–28 題（111、112 年為 21–30 題）', '短文克漏字，每篇 4–5 格'],
          ['選擇題：閱讀測驗', '第 29–42 題（111、112 年為 31–42 題）', '圖表、公告、書信、對話＋表格與說明文題組'],
          ['非選擇題：填充', '兩個空格', '依中文題意與提示字首填入英文單字；每格 2 級分，兩格 4 級分'],
          ['非選擇題：句子重組', '一組', '依字詞組合正確程度與拼字、標點等給 0–4 級分'],
          ['非選擇題：中譯英', '一句', '依是否充分表達題意及文法、標點、用字給 0–4 級分'],
        ],
      },
      takeaways: [
        '非選擇題三題型都先給「級分」，閱卷流程結束後才換算為分數；同時寫兩組句子重組答案為 0 級分。',
        '統測英文沒有作文或看圖寫作題；練習寫作是為了把句型與文法用得精準，作答時以「正確、通順、達意」為目標。',
      ],
    },
    {
      concept: '8. 統測非選擇題 20 大黃金句型大全與句子重組拆解法',
      kind: 'table',
      title: '統測非選「句子重組與中譯英」六大必考黃金句型模板表',
      caption: '濃縮歷屆統測非選擇題重複出現率最高的六大句構，看到題目碎片即可瞬間組合。',
      table: {
        headers: ['黃金句型名稱', '英文句構組裝公式', '對應中文翻譯訊號', '統測句子重組實戰範例'],
        rows: [
          ['花費時間金錢句型', 'It takes + 人 + 時間 + to V ＝ 人 + spend + 時間/金錢 + V-ing / on N', '做某事花了某人多少時間／某人花時間做…', 'It took the team three months to complete the bridge.'],
          ['如此…以至於…', 'so + Adj./Adv. + that + S + V ＝ such + (a/an) + Adj. + N + that...', '如此…以至於…（或轉換為 too...to V 太…而不能）', 'The wind was so strong that the crane stopped working.'],
          ['愈…就愈…', 'The + 比較級 (+ S + V), the + 比較級 (+ S + V)', '越…就越…', 'The more carefully we plan, the fewer mistakes we make.'],
          ['虛主詞與強調句', 'It is + Adj. (essential/important) + for sb. + to V', '對某人而言做某事是重要的／必要的', 'It is essential for workers to wear helmets on site.'],
        ],
      },
      takeaways: [
        '中式英文（Chinglish）三大禁區：(1) 英文同一句中**有 `because` 就絕對不能有 `so`**，**有 `although` 就絕對不能有 `but`**；(2) `spend` 的主詞必須是「人」且後接 `V-ing`，`take` 的主詞則是 `It` 或事物且後接 `to V`。',
        '若中譯英遇到不會拼的難字，立即用同義簡單字替代（如不會寫 `essential` 就寫 `important`，不會寫 `construct` 就寫 `build`），拼字正確最重要！',
      ],
    },
  ],
};
