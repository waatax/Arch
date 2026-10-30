/**
 * 英語文Ⅰ～Ⅵ（部定一般科目，12 學分）
 * 單元標註 108 英語文學習內容：A 語言知識（Ac 字詞、Ad 句構）、B 溝通功能、C 文化與習俗、D 思考能力。
 * 題幹中的 {{English}} 可點擊朗讀；排序題（S）用來練習統測非選擇題的句子重組。寫法說明見 ../dsl.ts。
 */
export const ENGLISH: Record<string, string> = {
  'g10s1-english-1': String.raw`
## 校園與生活字彙 @ 英語文 Ac 字詞：校園、職業與日常生活字彙 => english/vocabulary-phrases
- borrow 是「借入」、lend 是「借出」。
- 建築相關職業：architect 建築師、engineer 工程師、carpenter 木工、surveyor 測量員。
- 背單字要放進句子裡，記搭配詞（例如 on time、do homework）。
- 【字根記憶】struct（建造）：construction（營造）、structure（結構）、instruct（指導）；字首 con- 表共同聚攏。
Q 「圖書館」的英文是？ | library | laboratory | lavatory | literature // laboratory 是實驗室。
Q {{I usually ___ to school by bus.}} | go | goes | going | gone // 主詞 I 搭配原形動詞。
M 把英文和中文配對 :: classroom => 教室 ; principal => 校長 ; homework => 作業 ; schedule => 時間表 // principal 也有「主要的」意思。
Q 「準時」的英文片語是？ | on time | at time | by time | with time // in time 則是「及時」。
T {{Borrow means to give something to someone for a short time.}} | X // borrow 是向別人借入；lend 才是借給別人。
Q {{Can you ___ me your pen?}} | lend | borrow | take | bring // 把筆借給我，用 lend。
M 把職業和中文配對 :: carpenter => 木工 ; plumber => 水管工 ; electrician => 電工 ; surveyor => 測量員 // 都是營建工地常見的職業。
S 排出句子：我每天早上七點起床。 :: I >> get >> up >> at >> seven >> every >> morning // get up 起床；at 接時刻。
Q The new sports center is currently under {{construction}} and will open next month. 句中「construction」的意思是？ | 施工建造 | 拆除清運 | 招標公告 | 竣工剪綵 // construct 為「建造」，字尾 -tion 為名詞，under construction 是常見片語「施工中」。

## 五大句型與詞性 @ 英語文 Ad 句構：基本句型、詞性 => english/grammar-patterns
- 五大句型：S + V、S + V + C、S + V + O、S + V + O + O、S + V + O + C。
- 連綴動詞（look、seem、feel、smell）後面接形容詞當主詞補語。
- 詞性：-ly 多為副詞、-ful 多為形容詞、-ing 可當名詞（building 建築物）。
- 【五大句型速記】S+V（完全不及物）、S+V+SC（連綴）、S+V+O（單及物）、S+V+IO+DO（雙賓）、S+V+O+OC（複合及物）。
Q {{The building looks modern.}} 屬於哪一種句型？ | S + V + C | S + V + O | S + V | S + V + O + O // looks 是連綴動詞，modern 是主詞補語。
Q {{My father gave me a toolbox.}} 屬於哪一種句型？ | S + V + O + O | S + V + O + C | S + V + C | S + V // me 是間接受詞，a toolbox 是直接受詞。
Q {{They painted the wall white.}} 中，white 是？ | 受詞補語 | 主詞補語 | 間接受詞 | 副詞 // 補充說明受詞 the wall 的狀態。
M 把單字和詞性配對 :: quickly => 副詞 ; beautiful => 形容詞 ; build => 動詞 ; building => 名詞 // 字尾常透露詞性。
T {{She sings.}} 是一個完整的句子。 | O // S + V 句型，不需要受詞。
T 連綴動詞 look、seem、feel 後面要接副詞。 | X // 接形容詞當主詞補語，例如 look happy。
Q {{The soup smells ___.}} | good | well | goodly | greatly // smell 是連綴動詞，接形容詞。
S 排出句子：老師要我們保持教室乾淨。 :: The teacher >> asked us >> to keep >> the classroom >> clean // keep + 受詞 + 形容詞（S + V + O + C）。
Q 「The architect made the blueprint {{clear}} to everyone.」在此句型中，「clear」在文法上充當什麼成分？ | 受詞補詞（OC） | 主詞補詞（SC） | 間接受詞（IO） | 地方副詞（Adv） // make + O + OC，clear 形容受詞 the blueprint 的狀態，屬於受詞補詞。

## 基本時態 @ 英語文 Ad 句構：現在式、進行式、過去式、未來式、現在完成式 => english/grammar-patterns
- 習慣與事實用現在簡單式；第三人稱單數動詞加 -s／-es。
- 正在發生用 be + V-ing；過去發生用過去式；未來用 will + V。
- 從過去持續到現在用 have／has + 過去分詞，常搭配 since、for。
- 【現在完成式】have/has + p.p. 表過去發生持續至今或已有經驗，常搭配 since（自從某時間點）與 for（長達某時段）。
Q {{She ___ to the site every Monday.}} | goes | go | going | is go // every Monday 表習慣，第三人稱單數。
Q {{Look! The workers ___ the roof now.}} | are fixing | fix | fixed | have fixed // now 表正在進行。
Q {{We ___ the model last night.}} | finished | finish | have finished | are finishing // last night 用過去式。
Q {{I ___ in Taichung since 2020.}} | have lived | live | lived | am living // since 表持續到現在，用現在完成式。
M 把時間訊號和時態配對 :: every day => 現在簡單式 ; now => 現在進行式 ; yesterday => 過去簡單式 ; since 2020 => 現在完成式 // 看到時間詞，就先想時態。
T 現在完成式的結構是 have／has + 過去分詞。 | O // 例如 I have finished.
T {{He go to school by bike.}} 是正確的句子。 | X // 第三人稱單數現在式要用 goes。
Q {{Tomorrow we ___ visit the construction site.}} | will | did | have | were // tomorrow 用未來式。
Q The construction team {{has worked}} on this bridge for six months. 句中現在完成式表達的意義是？ | 過去開始且持續至今的動作 | 過去某一瞬間已經結束的動作 | 未來即將發生的工程計畫 | 純粹假設而未曾發生的動作 // for six months 表持續一段時間，與現在完成式連用表示從半年前施工至今仍在進行。

## 問候與日常對話 @ 英語文 B 溝通功能：問候、介紹、感謝、道歉、請求 => english/conversation-daily-use
- 回應感謝：You're welcome.／My pleasure.
- 初次見面：Nice to meet you. → Nice to meet you, too.
- 禮貌請求用 Could you…? 或 May I…?
- 【情境對話】「Could you give me a hand?」意為請幫忙；回覆「Sure, no problem!」或「I'd be glad to!」。
Q A: {{How are you doing?}} B: ___ | Pretty good, thanks. | I'm 16 years old. | It's on the table. | You're welcome. // 問候近況的回答。
Q A: {{Thank you for your help.}} B: ___ | You're welcome. | Me too. | I'm fine. | Good idea. // 回應感謝。
Q A: {{Nice to meet you.}} B: ___ | Nice to meet you, too. | Yes, I do. | That's right. | Fine, thank you. // 初次見面的標準回應。
Q A: {{Excuse me, where is the restroom?}} B: ___ | It's at the end of the hall. | It's ten o'clock. | I'm sorry to hear that. | Yes, please. // 回答地點。
M 把情境和用語配對 :: 道歉 => I'm sorry. ; 感謝 => Thank you. ; 請求 => Could you help me? ; 告別 => See you later. // 依情境選用語。
T {{What do you do?}} 通常是在詢問對方的職業。 | O // 例如 I'm a student.
T 回答 {{How do you do?}} 最常見的說法是 "I'm doing my homework." | X // 這是正式的初次見面用語，通常回 "How do you do?"。
S 排出初次見面的對話順序 :: Hi, I'm Amy. >> Hi, Amy. I'm Ben. Nice to meet you. >> Nice to meet you, too. >> Are you new here? >> Yes, I just transferred. // 打招呼、自我介紹、回應、延伸話題。
Q A: "Could you {{give me a hand}} with this heavy steel bar?" B: "Certainly!" 句中劃線片語的意思是？ | 幫我一個忙 | 跟我握握手 | 把手伸出來 | 把手套脫掉 // give someone a hand 為生活與工地極常用的口語片語，意指「協助、幫忙」。
`,

  'g10s2-english-2': String.raw`
## 比較級與最高級 @ 英語文 Ad 句構：形容詞與副詞比較 => english/grammar-patterns
- 短字加 -er／-est；長字用 more／most；不規則：good → better → best。
- as + 原級 + as 表示「和……一樣」；the + 比較級, the + 比較級 表示「越……越……」。
- 不可重複比較：most cheapest 是錯的。
- 【倍數與比較】倍數詞 + as + adj/adv + as...；或是倍數詞 + 比較級 + than...（如 twice as large as...）。
Q {{Taipei 101 is ___ than this building.}} | taller | tall | tallest | more tall // 兩者比較用比較級。
Q {{This is the ___ bridge in Taiwan.}} | longest | longer | long | most long // 範圍內最……用最高級。
Q {{Steel is ___ than wood.}} | stronger | strongest | more strong | strong // 單音節形容詞加 -er。
Q {{This plan is ___ expensive than that one.}} | more | most | much more of | very // 多音節形容詞用 more。
Q {{He runs as ___ as his brother.}} | fast | faster | fastest | more fast // as…as 中間放原級。
M 把原級和比較級配對 :: good => better ; bad => worse ; many => more ; little => less // 不規則變化要背。
T {{The more you practice, the better you get.}} 表示「越……越……」。 | O // the + 比較級, the + 比較級。
T {{This is the most cheapest one.}} 是正確的最高級用法。 | X // 不能重複比較，應為 the cheapest。
Q This reinforced concrete beam is {{twice as strong as}} the wooden beam. 此句表達的意思是？ | 強度是木梁的兩倍 | 與木梁強度完全相同 | 強度只有木梁的一半 | 長度恰為木梁的兩倍 // 倍數 + as + 原級 + as 表示「是對方的幾倍」。twice stronger than 在正式寫作中容易被判為錯誤，統測選倍數句型時優先選 as … as。

## 不定詞與動名詞 @ 英語文 Ad 句構：to V 與 V-ing => english/grammar-patterns
- enjoy、finish、avoid 後接 V-ing；want、decide、hope 後接 to V。
- 介系詞後面接動名詞；使役動詞 let、make 後接原形動詞。
- remember to V（記得要去做）vs remember V-ing（記得做過）。
- 【動名詞口訣】enjoy, practice, avoid, suggest, finish 後接 V-ing；decide, hope, plan, refuse 後接 to V。
Q {{I enjoy ___ models.}} | building | to build | build | built // enjoy 後接動名詞。
Q {{She decided ___ architecture.}} | to study | studying | study | studied // decide 後接不定詞。
Q {{He is good at ___.}} | drawing | to draw | draw | drew // 介系詞 at 後接動名詞。
Q {{Remember ___ your helmet before entering the site.}} | to wear | wearing | wear | wore // 記得「要去」戴，用 to V。
M 把結構和後接形式配對 :: 介系詞後 => 接動名詞 ; want、decide 後 => 接不定詞 ; 使役動詞 let 後 => 接原形動詞 // 判斷時先看前面的字。
T {{stop to smoke}} 與 {{stop smoking}} 意思相同。 | X // stop to smoke 是停下來去抽菸；stop smoking 是戒菸。
Q {{It is important ___ safety rules.}} | to follow | following | follow | followed // It is + adj. + to V 的虛主詞句型。
S 排出句子：學英文對我的未來很重要。 :: Learning >> English >> is >> important >> for >> my >> future // 動名詞片語當主詞，動詞用單數。
Q The site workers avoided {{working}} under the extreme summer heat without water. 空格處應填入動名詞是由於？ | avoid 後習慣接動名詞 V-ing | avoid 後必須接不定詞 to V | working 在此作為句子主詞 | 極端氣候下只能使用現在分詞 // 動詞 avoid（避免）後方習慣以動名詞（V-ing）作為受詞，不可接 to V。

## 被動語態 @ 英語文 Ad 句構：be + 過去分詞 => english/grammar-patterns
- 被動語態：be + 過去分詞，時態由 be 動詞表現。
- 動作者不重要或不明時常用被動，必要時以 by 帶出。
- 助動詞被動：must／can／will + be + p.p.。
- 【被動公式】be + p.p.（過去分詞）；建築物、橋梁、圖說往往作為受動者，常以被動語態客觀陳述（如 was designed by...）。
Q {{The bridge ___ in 2017.}} | was built | built | is building | has build // 橋是「被建造」，過去時間用 was。
Q {{The report must ___ by Friday.}} | be finished | finish | finished | be finish // 助動詞後接 be + p.p.。
Q {{English ___ in many countries.}} | is spoken | speaks | is speaking | spoke // 英語是被說的。
Q 主動句 {{Workers repair the road.}} 改為被動句是？ | The road is repaired by workers. | The road repaired workers. | Workers are repaired by the road. | The road was repairing. // 受詞變主詞，動詞改成 be + p.p.。
T 被動語態的基本結構是 be + 過去分詞。 | O // be 動詞依時態與主詞變化。
T {{The house was build by my grandfather.}} 是正確的句子。 | X // build 的過去分詞是 built。
M 把時態和被動結構配對 :: 現在式 => is／are + p.p. ; 過去式 => was／were + p.p. ; 完成式 => have／has been + p.p. ; 未來式 => will be + p.p. // 工程說明常用被動語態。
S 排出被動句：這棟建築是由一位知名建築師設計的。 :: This building >> was designed >> by >> a famous >> architect // 動作者用 by 帶出。
Q The Taipei 101 skyscraper {{was designed}} by C.Y. Lee & Partners. 句中採用被動語態的主要原因是？ | 臺北 101 大樓是接受設計的客體 | 設計師李祖原建築師無法作為主詞 | 強調該棟大樓正在自己繪製設計圖 | 過去進行式在文法上的強制要求 // 大樓是被建築師團隊設計的，動作者放在介係詞 by 之後，主詞為受動客體。

## 情境對話 @ 英語文 B 溝通功能：購物、問路、電話、提出請求 => english/conversation-daily-use
- 問價錢：How much is…?；問路：Could you tell me how to get to…?
- 電話用語：May I speak to…? → Hold on, please.
- Would you mind…? 若同意幫忙要回答 Not at all.／No problem.
- 【專業諮詢】「What do you recommend?」詢問建議；「I suggest using...」表達專業建言。
Q A: {{How much is this hard hat?}} B: ___ | It's 500 dollars. | It's very heavy. | It's red. | It's mine. // 問價錢。
Q A: {{Could you tell me how to get to the station?}} B: ___ | Go straight and turn left at the second corner. | Yes, I could tell you that later. | It takes about ten dollars by taxi. | I usually take the train to school. // 問路要給路線。
Q A: {{May I speak to Mr. Lin?}} B: ___ | Hold on, please. | Speaking of him. | I don't speak. | You may not speak. // 請對方稍等。
Q A: {{Can I try it on?}} B: ___ | Sure, the fitting room is over there. | No, it's on sale. | Try it off. | It's my pleasure to buy. // try on 試穿。
M 把方向用語和中文配對 :: turn left => 左轉 ; go straight => 直走 ; across from => 在……對面 ; next to => 在……旁邊 // 問路必備。
T {{Would you mind opening the window?}} 若願意幫忙，可以回答 "Not at all." | O // mind 是「介意」，不介意就是願意。
T 電話中說 {{Who are you?}} 是最禮貌的詢問方式。 | X // 禮貌說法是 "May I ask who's calling?"。
S 排出問路對話 :: Excuse me, is there a bank near here? >> Yes, there's one on Main Street. >> How can I get there? >> Walk two blocks and it's on your right. >> Thank you very much. // 詢問、回答、追問、說明、道謝。
Q Client: "Which flooring material is more durable?" Architect: "{{I recommend}} granite tiles." 句中劃線動詞表示？ | 提出專業推薦與建議 | 拒絕客戶的合約詢問 | 詢問對方目前的預算 | 抱怨材料價格過度高昂 // recommend 表示「推薦、建議」，是專業諮詢與設計溝通的常用動詞。
`,

  'g11s1-english-3': String.raw`
## 關係子句 @ 英語文 Ad 句構：who、which、that、whose、where => english/grammar-clauses
- who 指人、which 指物、that 人物皆可（非限定用法不可用 that）。
- whose 表所有格；where 表地點（= in which）。
- 關係子句緊跟在被修飾的名詞後面。
- 【關代指涉】人用 who/whom，物用 which，人或物可用 that；先行詞在子句中作所有格時用 whose。
Q {{The architect ___ designed this museum is famous.}} | who | which | whose | where // 先行詞是人，且在子句中當主詞。
Q {{This is the house ___ my grandfather built.}} | that | who | whose | where // 先行詞是物，在子句中當受詞。
Q {{I know a girl ___ father is a civil engineer.}} | whose | who | which | that // 她的父親，用所有格 whose。
Q {{This is the school ___ I studied for three years.}} | where | which | who | whose // 表地點，= in which。
T {{The tool which I bought yesterday is broken.}} 中的 which 可以換成 that。 | O // 限定用法中 which 可用 that 代替。
T 關係代名詞 that 可以用在逗點後的非限定子句。 | X // 非限定用法只能用 who 或 which。
M 把關係詞和用法配對 :: who => 指人當主詞 ; which => 指事物 ; whose => 表所有格 ; where => 表地點 // 先看先行詞，再看在子句中的角色。
S 排出句子：那位戴安全帽的男人是我的老師。 :: The man >> who is wearing >> a helmet >> is >> my teacher // 關係子句修飾 the man。
Q The engineer {{who}} inspected the structural column yesterday approved the concrete pouring. 句中關代 who 指涉的先行詞是？ | The engineer（工程師） | the structural column（結構柱） | yesterday（昨天時間） | the concrete pouring（澆置） // who 用於指涉人（工程師），並在關係子句中擔任主詞。

## 分詞 @ 英語文 Ad 句構：現在分詞、過去分詞、分詞構句 => english/grammar-clauses
- V-ing 表主動、進行，常形容「令人……的」；p.p. 表被動、完成，常形容「感到……的」。
- 分詞可直接修飾名詞：a broken window。
- 分詞構句：Having read the instructions, he…（讀完說明後）。
- 【分詞作形容詞】現在分詞 V-ing 表主動或進行中（falling leaves）；過去分詞 V-ed 表被動或已完成（fallen leaves, reinforced concrete）。
Q {{The movie was ___.}}（令人無聊的） | boring | bored | bore | to bore // 事物令人覺得無聊，用 V-ing。
Q {{I was ___ with the result.}} | satisfied | satisfying | satisfy | to satisfy // 人感到滿意，用 p.p.。
Q {{The ___ window should be replaced.}}（破掉的窗戶） | broken | breaking | broke | break // 窗戶是被打破的。
Q {{___ the instructions, he started the machine.}}（讀完說明後） | Having read | Read | To reading | Being read // 完成式分詞構句表先發生。
M 把分詞形容詞和中文配對 :: exciting => 令人興奮的 ; excited => 感到興奮的 ; tiring => 令人疲累的 ; tired => 感到疲累的 // -ing 修飾事物，-ed 修飾人的感受。
T 現在分詞常表主動、進行；過去分詞常表被動、完成。 | O // 判斷分詞的核心原則。
T {{I am very interesting in architecture.}} 是正確的句子。 | X // 人「感到有興趣」用 interested。
S 排出句子：坐在角落的女孩是我的同學。 :: The girl >> sitting >> in the corner >> is >> my classmate // sitting 修飾 the girl。
Q In civil engineering, {{reinforced concrete}} is widely used for high-rise buildings. 劃線詞中「reinforced」的意思是？ | 被鋼筋加強的（鋼筋混凝土） | 正在自行膨脹的 | 表面未經養護的 | 剛被拆除清理的 // reinforce（加強），過去分詞 reinforced 作形容詞，修飾 concrete，即「鋼筋加強的混凝土」。

## 連接詞與轉折語 @ 英語文 Ad 句構、D 思考能力：因果、讓步、轉折、補充 => english/cloze-passage-structure
- 讓步：although、though；因果：because、so、therefore、as a result。
- 轉折：however、on the other hand；補充：in addition、moreover。
- because 和 so 不能同時連接兩個子句；although 和 but 也一樣。
- 【轉折對比】however, nevertheless 表轉折（句首加逗號）；furthermore, in addition 表遞進；therefore, as a result 表因果。
Q {{___ it was raining, the workers continued.}} | Although | Because | So | Therefore // 雖然下雨，仍繼續施工。
Q {{The concrete was not cured well; ___, it cracked.}} | therefore | however | although | but also // 前因後果。
Q {{He studied hard, ___ he passed the exam.}} | so | but | although | because of // 用功所以考過。
Q {{I like drawing. ___, my sister likes music.}} | On the other hand | Because | As a result | For example // 對比兩人喜好。
M 把轉折詞和功能配對 :: however => 表轉折 ; therefore => 表結果 ; for example => 舉例 ; in addition => 補充 // 克漏字常考。
T {{Because it rained, so we stayed home.}} 是正確的句子。 | X // because 與 so 不可同時使用，擇一即可。
T {{Not only … but also …}} 表示「不但……而且……」。 | O // 例如 not only strong but also light。
S 排出句子：雖然天氣很熱，他們還是完成了屋頂。 :: Although >> it was hot, >> they >> finished >> the roof // 讓步子句在前。
Q The rain was extremely heavy; {{however}}, the workers continued the underground excavation safely. 句中「however」的功能是？ | 表達轉折對比語意 | 表達因果推導結論 | 表達時間先後順序 | 表達條件假設前提 // however 表示語意轉折：「雨雖然下得很大；然而，工人們仍安全持續地下開挖」。

## 營建專業字彙 @ 英語文 Ac 字詞：建築、材料與工地字彙（ESP） => english/vocabulary-professional
- 材料：concrete 混凝土、steel 鋼、brick 磚、timber 木材。
- 結構：beam 梁、column 柱、slab 樓板、foundation 基礎。
- 工地：crane 起重機、scaffold 施工架、hard hat 安全帽、blueprint 藍圖。
- 【工程核心英單】scaffolding（鷹架）、foundation（基礎）、beam（梁）、column（柱）、slab（樓板）、surveyor（測量員）。
M 把材料和中文配對 :: concrete => 混凝土 ; steel => 鋼材 ; brick => 磚 ; timber => 木材 // 統測專業字彙常見。
M 把工地設備和中文配對 :: crane => 起重機 ; scaffold => 施工架 ; ladder => 梯子 ; level => 水準儀 // scaffold 也寫作 scaffolding。
Q 「藍圖、設計圖」的英文是？ | blueprint | brochure | budget | billboard // 早期設計圖以藍曬法複製。
Q {{Always wear your hard hat on the construction site.}} 中 hard hat 是？ | 安全帽 | 硬質帽子造型 | 頭燈 | 工作服 // 工地必備的個人防護具。
Q 「地基、基礎」的英文是？ | foundation | fountain | function | furniture // fountain 是噴泉。
Q 「樓層平面圖」的英文是？ | floor plan | flat ground | floor board | plan floor // elevation 是立面圖、section 是剖面圖。
T {{Beam}} 在建築上是「梁」的意思。 | O // column 是柱。
T {{Column}} 在建築結構上是「屋頂」的意思。 | X // column 是柱，屋頂是 roof。
S 排出句子：鋼筋必須在澆置混凝土前檢查。 :: The rebar >> must be >> checked >> before >> pouring concrete // 被動語態加時間副詞子句。
Q Workers must wear safety harnesses when working on high {{scaffolding}}. 句中「scaffolding」是指工地的何種設施？ | 臨時施工鷹架 | 鋼筋加工車間 | 水泥預拌儲倉 | 工地會議辦公室 // scaffolding 指高空作業搭建的臨時腳手架、鷹架，作業人員必須繫安全帶以防墜落。
`,

  'g11s2-english-4': String.raw`
## 條件句與假設語氣 @ 英語文 Ad 句構：真實條件、與現在及過去事實相反 => english/grammar-mastery
- 真實條件：If + 現在式, will + V。
- 與現在事實相反：If + 過去式（be 用 were）, would + V。
- 與過去事實相反：If + had p.p., would have p.p.；I wish + 過去式表示現在的願望。
- 【與現在事實相反】If + S + 過去式動詞 (were), S + would/could/might + 原形動詞；表純屬想像或相反。
Q {{If it rains tomorrow, we ___ the site visit.}} | will cancel | would cancel | cancelled | had cancelled // 可能發生的真實條件。
Q {{If I ___ you, I would study harder.}} | were | am | will be | had // 與現在事實相反，be 動詞一律用 were。
Q {{If he had left earlier, he ___ the bus.}} | would have caught | would catch | will catch | caught // 與過去事實相反。
Q {{I wish I ___ draw like a professional.}} | could | can | will | am able // I wish + 過去式，表現在做不到的願望。
M 把條件句類型和結構配對 :: 真實條件 => If + 現在式，will + V ; 與現在事實相反 => If + 過去式，would + V ; 與過去事實相反 => If + had p.p.，would have p.p. // 先判斷是否與事實相反。
T {{If I were a bird, I could fly.}} 是與現在事實相反的假設。 | O // 我現在不是鳥。
T 與過去事實相反的假設句，if 子句要用現在完成式。 | X // 用過去完成式 had + p.p.。
S 排出句子：如果我有更多時間，我會學 BIM。 :: If >> I had >> more time, >> I would >> learn BIM // 與現在事實相反。
Q If the foundation {{were}} stronger, the building would withstand a much larger earthquake. 句中 were 表達的是？ | 與目前實際現狀相反的假設語氣 | 過去某個時間點已經完成的動作 | 明天極可能即將發生的真實事件 | 純粹客觀科學事實之直接陳述 // 條件句中動詞用 were，主要子句用 would withstand，屬於與現在事實相反之假設語氣。

## 名詞子句 @ 英語文 Ad 句構：that、whether、wh- 子句與間接問句 => english/grammar-clauses
- that 子句陳述事實；whether 子句表「是否」；wh- 子句表疑問內容。
- 間接問句用直述句語序：where the station is。
- what 可當主詞引導名詞子句：What he said is true.
- 【名詞子句當受詞】that + 完整句子；whether/if + 句子（是否）；疑問詞 (what, where, how) + S + V（間接問句）。
Q {{I don't know ___ he will come.}} | whether | what | which | that's // 是否會來。
Q {{___ he said is true.}} | What | That what | Which | It // what 引導的名詞子句當主詞。
Q {{Can you tell me where ___?}} | the station is | is the station | does the station | the station does // 間接問句用直述語序。
Q {{The problem is ___ we don't have enough steel.}} | that | what | which | whose // that 子句當主詞補語。
T 間接問句要使用直述句的語序。 | O // 主詞在前、動詞在後。
T {{Do you know what time is it?}} 是正確的間接問句。 | X // 應為 what time it is。
M 把名詞子句和功能配對 :: that 子句 => 陳述一件事實 ; whether 子句 => 表示是否 ; wh- 子句 => 表示疑問內容 // 名詞子句可當主詞、受詞或補語。
S 排出句子：我想知道這座橋是何時建造的。 :: I wonder >> when >> this bridge >> was built // 間接問句加被動語態。
Q The site manager knows {{that the safety inspection will begin tomorrow}}. 劃線部分在整句中充當什麼文法角色？ | 動詞 knows 的受詞 | 修飾 manager 的形容詞 | 修飾 tomorrow 的副詞 | 整體句子的文法主詞 // 由 that 引導的名詞子句具備完整句子結構，在句中擔任主要動詞 knows 的受詞。

## 倒裝與強調 @ 英語文 Ad 句構：否定副詞倒裝、分裂句、so／neither => english/grammar-mastery
- 否定副詞（never、seldom、not only、not until）放句首要倒裝。
- 分裂句 It is … that／who … 強調某個成分。
- 附和用 So + 助動詞 + 主詞（也是）、Neither + 助動詞 + 主詞（也不）。
- 【否定副詞倒裝】否定副詞放句首（Never, Seldom, Rarely, Not only），助動詞提至主詞前：Seldom do we see...。
Q {{Not only ___ late, but he also forgot his drawing.}} | was he | he was | he is | is he // Not only 置首，主詞與 be 動詞倒裝。
Q {{Only after the test ___ the results.}} | did we know | we knew | we did know | knew we // Only + 副詞片語置首要倒裝。
Q {{It was the architect ___ solved the problem.}} | who | which | what | whose // 分裂句強調人用 who 或 that。
Q {{Never ___ such a tall building.}} | have I seen | I have seen | I saw | seen I have // Never 置首倒裝。
T 否定副詞（如 never、seldom）放句首時，句子要倒裝。 | O // 助動詞移到主詞前。
T {{Here comes the bus.}} 是錯誤的句子，因為主詞一定要放在動詞前。 | X // 地方副詞置首、主詞為名詞時可倒裝，句子正確。
M 把句型和意思配對 :: It is … that … => 分裂句強調 ; Not until … => 直到……才 ; So + 助動詞 + 主詞 => 也是如此 ; Neither + 助動詞 + 主詞 => 也不 // 統測高階文法常考。
S 排出句子：直到下課，他才完成作業。 :: Not until >> the class ended >> did he >> finish >> his homework // Not until 置首，主要子句倒裝。
Q {{Never has}} the engineering team faced such a complex soil condition before. 句首採用倒裝結構的主要修辭目的是？ | 加強語氣並強調前所未有的罕見程度 | 降低整句在文法上的正式度與難度 | 故意隱瞞施工團隊真正的技術失誤 | 符合日常口語中隨興對話的習慣 // 將否定副詞 Never 移至句首，助動詞 has 提至主詞前，能產生極為強烈的強調修辭效果。

## 實用文本與圖表 @ 英語文 B 溝通功能、D 思考能力：告示、公告、時刻表與圖表判讀 => english/reading-infographics
- 告示常省略主詞與動詞：No entry、Staff only、Wet paint。
- 時刻表：departure 出發、arrival 抵達、delayed 延誤。
- 讀圖表：先看標題與單位，再比較數據、得出結論。
- 【圖表閱讀】bar chart（長條圖）、pie chart（圓餅圖）、line graph（折線圖）；注意坐標軸單位（units）與趨勢動詞（increase, drop, remain stable）。
Q 告示 {{No entry without a helmet.}} 的意思是？ | 未戴安全帽禁止進入 | 只有安全帽可以進入 | 這裡沒有安全帽 | 安全帽免費 // without 是「沒有」。
Q 公告 {{The library will be closed for maintenance on Monday.}} 表示？ | 圖書館星期一因維修關閉 | 圖書館星期一延長開放 | 圖書館正在招募員工 | 星期一有書展 // maintenance 是維修保養。
Q 時刻表上 {{Departure 14:30}} 的意思是？ | 下午 2 點 30 分出發 | 下午 2 點 30 分抵達 | 延誤 30 分鐘 | 第 14 號月台 // arrival 才是抵達。
Q 圖表標題 {{Monthly Rainfall in Taichung}} 呈現的是？ | 台中每月降雨量 | 台中每月氣溫 | 台中人口 | 台中交通流量 // rainfall 降雨量。
T 標示 {{Wet Paint}} 是提醒油漆未乾，不要觸摸。 | O // 常見於施工現場。
T {{Emergency Exit}} 是工地材料進出口的意思。 | X // 是緊急出口。
M 把標示和中文配對 :: Caution => 小心 ; Out of order => 故障 ; Staff only => 員工專用 ; Fire extinguisher => 滅火器 // 生活中處處可見。
S 排出讀圖表的步驟 :: Read the title >> Check the units >> Compare the data >> Draw a conclusion // 先看標題與單位，最後才下結論。
Q According to the safety report, the number of workplace accidents {{decreased steadily}} over the past five years. 劃線詞組的意思是？ | 持續穩定下降 | 突然暴增數倍 | 保持完全不變 | 劇烈上下擺動 // decrease（減少）+ steadily（穩定地），表示五年來工傷事故數量持續穩定下降。
`,

  'g12s1-english-5': String.raw`
## 統測字彙題 @ 英語文 Ac 字詞：情境字彙、形近字、片語 => english/vocabulary-phrases
- 先讀懂整句意思，再判斷空格需要的詞性與語意。
- 形近字：economic 經濟的／economical 節省的；sensitive 敏感的／sensible 明智的。
- affect 多為動詞，effect 多為名詞。
- 【高頻核心字】crucial（至關重要的）、innovative（創新的）、sustainable（永續的）、precise（精準的）、durable（耐用的）。
Q {{The new building is designed to be energy-___.}} | efficient | effective | efficiency | effect // energy-efficient 節能的。
Q {{Please ___ the form and return it by Friday.}} | fill out | fill up | fill with | fill on // fill out 填寫表格。
Q {{The meeting has been ___ until next week.}} | postponed | promoted | protected | produced // postpone 延期。
Q {{She was ___ for her excellent design.}} | praised | punished | prepared | prevented // 因設計優秀而受稱讚。
Q {{The old bridge is no longer ___ for heavy trucks.}} | safe | safety | safely | save // be 動詞後接形容詞。
M 把形近字和意思配對 :: economic => 經濟的 ; economical => 節省的 ; sensitive => 敏感的 ; sensible => 明智的 // 統測常用來設計干擾選項。
T {{Affect}} 通常當動詞，{{effect}} 通常當名詞。 | O // 例如 The noise affects us. The effect is clear.
T {{Principal}} 和 {{principle}} 意思完全相同。 | X // principal 是校長或主要的；principle 是原則。
Q Accurate measurement is {{crucial}} for setting out the building foundations precisely. 劃線單字「crucial」最接近下列哪個同義詞？ | essential | optional | decorative | temporary // crucial 與 essential 皆意為「至關重要的、不可或缺的」。

## 統測對話題 @ 英語文 B 溝通功能：回應、邀請、安慰、同意與拒絕 => english/conversation-daily-use
- 先判斷對方的語氣與目的（求助、邀請、抱怨、道謝）。
- Do you mind…? 表同意要用否定回答：No, go ahead.
- I couldn't agree more. 表示非常同意。
- 【對話邏輯】留心說話者態度（同意、反對、禮貌詢問、指路、報價）；抓出關鍵動詞與疑問詞。
Q A: {{I failed the drafting test.}} B: ___ | Don't worry. You'll do better next time. | Congratulations! You did a great job. | That sounds great. Let's celebrate. | You're welcome. It was nothing. // 安慰對方。
Q A: {{Would you like some coffee?}} B: ___ | Yes, please. | Yes, I would like. | No, I wouldn't like it at all. | I like. // 接受提供的禮貌說法。
Q A: {{Do you mind if I sit here?}} B: ___ | No, go ahead. | Yes, please sit. | Yes, go ahead. | I mind nothing. // 不介意才是答應。
Q A: {{How long does it take to finish the project?}} B: ___ | About three months. | Three meters long. | Since last year. | Every week. // 問所需時間。
Q A: {{What's wrong with the printer?}} B: ___ | It's out of paper. | It's on the desk. | It's a laser one. | It's mine. // 問出了什麼問題。
T {{I couldn't agree more.}} 表示完全同意。 | O // 字面是「我無法更同意了」。
T {{Help yourself.}} 帶有拒絕幫忙的語氣，意思是「你自己想辦法」。 | X // 意思是「請自便、請自行取用」。
M 把回應目的和說法配對 :: 同意 => That's a good idea. ; 婉拒邀請 => I'm afraid I can't. ; 安慰 => I'm sorry to hear that. ; 道賀 => Congratulations! // 對話題的核心是語用。
Q A: "How long will the concrete curing process take?" B: "{{It usually takes around seven days.}}" B 的回答主要說明了什麼？ | 混凝土養護所需的標準工作天數 | 購買預拌混凝土所需的工程報價 | 攪拌機在工地現場的運轉轉速 | 施工模板拆除後的堆置地點 // 回應 How long（多長時間），以 It takes around seven days 明確說明養護所需時間。

## 綜合測驗與篇章結構 @ 英語文 D 思考能力：轉承語與段落邏輯 => english/cloze-passage-structure
- 克漏字要看空格前後句的邏輯關係：轉折、因果、補充、舉例、順序。
- 常見轉承語：nevertheless、as a result、in addition、then、instead。
- 段落通常由主題句、支持句、結論句組成。
- 【克漏字技巧】空格前後看搭配（動詞+介係詞 collocations）、句首看邏輯連接詞（thus, in contrast, for instance）。
Q {{The test was hard. ___, most students passed.}} | Nevertheless | Therefore | Besides | For instance // 前後語意相反。
Q {{First, mix the cement and sand. ___, add water slowly.}} | Then | However | Although | Unless // 表步驟順序。
Q {{He wanted to join the team. ___, he was too busy.}} | However | Moreover | As a result | In addition // 想加入卻太忙。
Q {{Green buildings save energy. ___, they reduce carbon emissions.}} | In addition | However | Otherwise | Instead // 補充另一個優點。
M 把轉承語和功能配對 :: In conclusion => 總結 ; For instance => 舉例 ; As a result => 結果 ; On the contrary => 相反地 // 抓到功能，就能選對答案。
T 克漏字作答要看空格前後句的邏輯關係，而不只看單一句子。 | O // 綜合測驗考的是篇章理解。
T 綜合測驗只考單字意思，與上下文無關。 | X // 多數題目必須依上下文判斷。
S 排出段落句子的順序 :: Concrete is a common material. >> It is made of cement, water and sand. >> When it hardens, it becomes strong. >> Thus, it is used in many buildings. // 主題句、成分、特性、應用結論。
Q Green buildings are designed to reduce environmental impact. {{For instance}}, they use solar panels to generate clean energy. 句中「For instance」的作用是？ | 舉例說明綠建築的具體環保措施 | 反駁前一句所提到的建築設計原則 | 總結整篇文章最核心的法律要求 | 表達作者個人主觀的強烈反對 // For instance 與 For example 同義，用以提出具體案例（如太陽能板）印證前述論點。

## 閱讀測驗策略 @ 英語文 D 思考能力：主旨、細節、推論、字義推測 => english/reading-comprehension
- 先看題目再讀文章，帶著問題找答案。
- 細節題答案常換句話說（paraphrase）；推論題要有文本依據。
- 遇到生字，用上下文線索推測字義。
- 【閱讀三步】略讀（Skim）抓主題大意、掃讀（Scan）找特定數字人名、細讀（Close read）推敲細節與作者推論。
Q 題目問 {{What is the main idea of the passage?}} 是在問？ | 文章主旨 | 某個細節 | 單字意思 | 作者年齡 // main idea 主旨。
Q 題目問 {{What can be inferred from the passage?}} 是在問？ | 可以推論出的內容 | 文章標題 | 第一句話 | 作者姓名 // infer 推論。
Q 遇到不會的單字，最好的策略是？ | 利用上下文線索推測字義 | 直接放棄整篇 | 只看選項亂猜 | 跳過題目 // 上下文常有定義、例子或對比線索。
T 細節題的答案通常能在原文找到對應敘述，只是可能換句話說。 | O // 這就是 paraphrase。
T 主旨題的答案，通常是文中出現次數最多的某個細節。 | X // 主旨要能涵蓋全文，不是單一細節。
M 把題型和中文配對 :: main idea => 主旨 ; detail => 細節 ; inference => 推論 ; vocabulary in context => 字義推測 // 統測閱讀四大題型。
S 排出閱讀測驗的作答步驟 :: 先瀏覽題目 >> 略讀全文抓大意 >> 回原文找關鍵句 >> 比對並刪除錯誤選項 // 有效率又準確。
Q 文章中 {{However}} 後面的句子通常是？ | 作者強調的轉折重點 | 不重要的補充 | 例子 | 引言 // 轉折後常是作者真正的觀點。
Q 統測英文閱讀測驗中，快速瀏覽文章首尾段及各段主題句以掌握全文主旨的策略稱為？ | 略讀（Skimming） | 掃讀（Scanning） | 逐字精讀（Intensive reading） | 朗讀背誦（Reciting） // Skimming 是以快速視線掠過文章骨架抓取 Main Idea，Scanning 則是針對特定關鍵字（如年代、人名）定位搜尋。
## 頂標特訓：文法與語意陷阱 @ 英語文 Ac 字詞、Ad 句構：假設語氣、分詞構句、倒裝與一致性（統測鑑別題） => english/grammar-mastery
- 假設語氣：與現在事實相反用「If + 過去式, would + 原形」；與過去事實相反用「If + had p.p., would have p.p.」。
- 分詞構句的主詞必須與主要子句相同：主動用 V-ing，被動用 p.p.。
- 否定副詞（Not until、Never、Seldom）放句首時，主要子句要倒裝。
- 【主謂一致與介係詞】主詞 + as well as / along with + 名詞，動詞單複數由「前方真正主詞」決定；neither... nor... 採就近原則。
Q {{If I ___ more time yesterday, I would have finished the report.}} | had had | have had | had | would have // 與過去事實相反，if 子句用 had + p.p.（had had）。
Q {{___ from the top floor, the city looks like a toy model.}} | Seen | Seeing | To see | Having seen // 城市是「被看」，用過去分詞 Seen。
Q {{This is ___ I have been looking for.}} | what | which | that | the one what // what = the thing which，前面不能再有先行詞。
Q {{Not until the lights went out ___ how late it was.}} | did we realize | we realized | we did realize | realized we // Not until 放句首，主要子句倒裝。
Q {{The new policy is expected to ___ a sharp drop in traffic.}} | bring about | bring up | bring in | bring out // bring about 是「造成、導致」。
Q {{Neither the teacher nor the students ___ aware of the change.}} | were | was | is | has been // neither A nor B 的動詞與靠近的 B（students）一致。
T {{It is high time that we left.}} 句中用過去式 left 是正確的。 | O // It is high time + 過去式，表示「早該做了」。
M 字首與意義 :: un- => 否定 ; re- => 再一次 ; pre- => 之前 ; mis- => 錯誤 // 看懂字首，可在閱讀中推測生字。
Q The chief engineer, as well as his assistants, {{was present}} at the site inspection yesterday. 動詞採用單數 was 是由於？ | 真正的主詞是單數的 The chief engineer | 句子的受詞 his assistants 是複數名詞 | yesterday 時間副詞強制要求使用單數 | as well as 屬於對等連接詞故視為複數 // as well as 為介係詞片語，其後的名詞為受詞，句子真正主詞為 The chief engineer（單數），故用 was。
`,

  'g12s2-english-6': String.raw`
## 翻譯與句子重組 @ 英語文 Ad 句構：中譯英、句子重組（統測非選擇題） => english/translation-writing
- 先找主詞與動詞，再決定時態，最後補上時間、地點等修飾語。
- 句子重組：先找主詞與動詞的組合，再排列修飾語。
- 注意單複數、時態與介系詞搭配。
- 【中翻英思維】先抓出「主詞 + 動詞 + 受詞」，再把修飾語（時間、地方、介係詞片語）置於句尾或句首。
S 句子重組：混凝土需要至少七天的養護。 :: Concrete >> needs >> at least >> seven days >> of curing // 主詞 + 動詞 + 受詞。
S 句子重組：這棟大樓是在 2020 年完成的。 :: The building >> was completed >> in >> 2020 // 被動語態，年份前用 in。
S 句子重組：你可以告訴我電梯在哪裡嗎？ :: Can you >> tell me >> where >> the elevator >> is // 間接問句用直述語序。
Q 「他忙著畫設計圖。」最正確的翻譯是？ | He is busy drawing the design. | He is busy to draw the design. | He busy draws the design. | He is busy with draw the design. // be busy + V-ing。
Q 「我們應該節約能源。」最正確的翻譯是？ | We should save energy. | We should saving energy. | We should to save energy. | We should saved energy. // 助動詞後接原形動詞。
T 中譯英時，先找出句子的主詞與動詞，再補上其他成分。 | O // 骨架先立好，句子才不會亂。
T 「我昨天去工地」可以翻成 {{I go to the site yesterday.}} | X // yesterday 要用過去式 went。
M 把中文和英文配對 :: 截止日期 => deadline ; 預算 => budget ; 進度 => progress ; 品質 => quality // 專案管理常用字。
Q 中譯英：「這座新橋讓交通更加便利。」最適當的翻譯是？ | The new bridge makes traffic more convenient. | The new bridge makes traffic very convenient. | Convenient is the traffic because of new bridge. | Traffic is make the new bridge convenient. // 遵循 S (The new bridge) + V (makes) + O (traffic) + OC (more convenient) 五大句型。

## 職場溝通 @ 英語文 B 溝通功能：電子郵件、會議與禮貌用語 => english/workplace-communication
- 正式 email：主旨清楚、Dear + 稱謂、說明目的、細節、結尾、署名。
- 常用語：Please find the attached file.／I look forward to hearing from you.
- 會議提出不同意見要先肯定對方：I see your point, but…
- 【商業英文信件】開頭 Dear Mr./Ms. [姓氏]，信末 Sincerely, / Best regards,；正文簡明扼要、語氣客氣專業。
Q email 開頭最適合的正式稱呼是？ | Dear Mr. Chen, | Hey Chen!! | Yo boss, | To whoever, // 正式書信用 Dear。
Q {{Please find the attached file.}} 的意思是？ | 請查看附件 | 請找到遺失的檔案 | 請刪除檔案 | 請列印檔案 // attached 附加的。
Q {{I look forward to hearing from you.}} 常用在 email 的？ | 結尾 | 標題 | 開頭稱呼 | 附件名稱 // 期待回覆。
Q 會議中想提出不同意見，較禮貌的說法是？ | I see your point, but I have a different idea. | You are completely wrong about this. | That's a stupid idea, honestly. | No way. I won't accept that. // 先肯定再表達。
M 把縮寫和意思配對 :: ASAP => 盡快 ; FYI => 供你參考 ; CC => 副本 ; Attachment => 附件 // ASAP = as soon as possible。
T 正式工作 email 應有清楚的主旨（subject）。 | O // 讓收件者一眼知道內容。
T 工作 email 的主旨越模糊越好，讓對方好奇點開。 | X // 模糊的主旨容易被忽略或誤解。
S 排出正式 email 的結構 :: Subject >> Greeting >> Purpose of writing >> Details >> Closing >> Signature // 由主旨到署名。
Q 撰寫專業英文商業電子郵件洽詢建材報價時，信末最正式且禮貌的結尾敬語是？ | Sincerely, | Bye-bye! | Cheers, mate! | See you later, // Sincerely 或 Best regards 是國際工程與商務書信中最典雅合宜的結尾敬詞。

## 營建工地英文 @ 英語文 Ac 字詞、B 溝通功能：工地安全、施工流程與圖說 => english/vocabulary-professional
- 安全用語：Keep out、Danger zone、PPE（個人防護裝備）、safety harness（安全帶）。
- 施工用語：excavation 開挖、formwork 模板、reinforcement 鋼筋、curing 養護、inspection 檢查。
- slump test 坍度試驗；construction drawings 施工圖。
- 【工地安全標語】「Hard Hat Area」（必須配戴工程安全帽）、「Danger: Deep Excavation」（危險：深開挖）、「Authorized Personnel Only」（非相關人員請勿進入）。
Q {{Keep out! Danger zone.}} 的意思是？ | 禁止進入，危險區域 | 請保持外面乾淨 | 危險已解除 | 歡迎參觀 // keep out 不要進入。
Q 「安全帶（全身背負式）」的英文是？ | safety harness | safety hat | seat glass | safe belt line // 高處作業防墜必備。
Q {{The concrete needs to cure for 28 days.}} 中 cure 的意思是？ | 養護硬化 | 治療疾病 | 清潔 | 切割 // 混凝土 curing 是養護。
M 把工程用語和中文配對 :: excavation => 開挖 ; formwork => 模板 ; reinforcement => 鋼筋 ; inspection => 檢查 // 工地日報常見。
T {{PPE}} 是 personal protective equipment 的縮寫。 | O // 包括安全帽、安全鞋、護目鏡等。
T {{Slump test}} 是測量鋼筋強度的試驗。 | X // slump test 是坍度試驗，測新拌混凝土的工作性。
S 排出建築工程的大致順序 :: Excavation >> Foundation >> Structure >> Finishing // 開挖、基礎、結構、裝修。
Q 「施工圖」的英文最接近？ | construction drawings | building pictures | work paintings | site photos // drawing 指工程圖。
Q 工地入口處懸掛標示牌寫著「{{Hard Hat Required Beyond This Point}}」，其安全指令是？ | 進入此區域之後必須全程配戴工程安全帽 | 嚴禁任何人員攜帶工具進入此區域 | 此處正在進行高壓變電所通電試驗 | 工地內部全天候免費提供安全帽租借 // Hard hat 指安全帽，Required 指強制要求，是全球營造工程最普遍的安全警戒標誌。

## 文法總複習 @ 英語文 Ad 句構：主詞動詞一致、時態、假設與綜合判斷 => english/grammar-mastery
- Neither A nor B、Either A or B：動詞與最靠近的主詞一致。
- each、every、everyone 當主詞用單數動詞；the number of 用單數、a number of 用複數。
- 過去某時間點之前完成：過去完成式 had + p.p.。
- 【時態與分詞綜合】統測克漏字常考使役動詞（have/make/let + O + 原形動詞）、感官動詞（see/hear + O + V / V-ing）與被動分詞。
Q {{Neither the students nor the teacher ___ ready.}} | was | were | are being | have // 與最靠近的 the teacher 一致。
Q {{Each of the workers ___ a helmet.}} | has | have | having | are having // each 當主詞用單數。
Q {{By the time we arrived, the meeting ___.}} | had started | has started | starts | will start // 抵達前已開始，用過去完成式。
Q {{He suggested that she ___ the plan again.}} | check | checks | checked | will check // suggest that + 主詞 + (should) 原形動詞。
T {{There is many tools in the box.}} 是正確的句子。 | X // tools 是複數，應用 There are。
T 「each + 單數名詞」當主詞時，動詞用單數。 | O // Each student has a locker.
M 把句子和文法重點配對 :: Everyone is here. => 不定代名詞用單數 ; Both A and B are … => 兩者並列用複數 ; The number of ... is => 「……的數目」用單數 ; A number of ... are => 「許多」用複數 // 主詞動詞一致是統測必考。
S 排出句子：我已經在這間公司工作三年了。 :: I >> have worked >> for this company >> for three years // 現在完成式搭配 for + 一段時間。
Q The construction manager had the damaged scaffolding {{repaired}} immediately. 句中採用 repaired 的原因是？ | 鷹架是被修復的，受詞與動作呈被動關係 | had 是使役動詞，其後一定要接現在分詞 | repaired 在此句充當主要動詞而非分詞 | 鷹架具有主動自行修復構件之功能 // have + O + p.p. 表示「使某事物被處理」，scaffolding（鷹架）被修理，故使用過去分詞 repaired。
`,
};
