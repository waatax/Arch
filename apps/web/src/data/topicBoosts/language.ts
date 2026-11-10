import { c, q, type SubjectBoostMap } from './types';

export const chineseBoosts: SubjectBoostMap = {
  'classical-literature': {
    concepts: [
      c(
        '讀文言文先防「古今異義」：字還在，意思換了',
        ['CH1.1.2'],
        '文言文最容易誤讀的不是生難字，而是**今天仍在使用、意思卻已改變**的常用詞。這類詞大致有四種變化：**詞義擴大**（「江」「河」原專指長江、黃河）；**詞義縮小**（「妻子」古指妻與子女，今只指配偶）；**詞義轉移**（「走」古義是跑，「湯」是熱水，「涕」是眼淚，「去」是離開）；**感情色彩改變**（「卑鄙」古指地位低微、見識淺陋，並無貶意）。另外，文言以單音詞為主，看到像現代雙音詞的組合要拆開理解：「可以」是「可以憑藉」，「所以」多半是「用來……的」或「……的原因」。判斷時把現代義代回原句，語意不通就要換成古義。',
        ['詞語', '古義', '例句'],
        [
          ['走', '跑', '「兔走觸株，折頸而死」'],
          ['去', '離開、距離', '「去國懷鄉」'],
          ['妻子', '妻子與兒女', '「率妻子邑人來此絕境」'],
          ['卑鄙', '身分低微、見識淺陋', '「先帝不以臣卑鄙」'],
        ],
        [
          ['四種變化', '擴大、縮小、轉移、色彩改變'],
          ['單音詞', '看似雙音詞要拆開讀'],
          ['所以', '用來……／……的原因'],
          ['驗證', '代回原句看通不通'],
        ],
      ),
      c(
        '唐宋古文八大家與古文運動',
        ['CH3.3.1'],
        '**古文運動**由中唐的**韓愈、柳宗元**倡導，反對六朝以來講究對偶、辭藻與聲律而內容空洞的駢文，主張恢復先秦兩漢質樸自由的散體文，並強調文章要承載思想，即「文以載道」。北宋**歐陽脩**再度提倡並主持文壇，古文才真正成為主流；他提拔的**曾鞏、王安石**與**蘇洵、蘇軾、蘇轍**父子，連同韓、柳，合稱**唐宋古文八大家**，唐二宋六。各家風格不同：韓愈雄渾氣盛，柳宗元峻潔、以山水遊記與寓言見長，歐陽脩平易婉轉，蘇軾汪洋恣肆、如行雲流水，王安石簡勁峭拔。記憶時先記「韓柳歐蘇」，再補三蘇中的另兩位與曾、王。',
        ['作家', '時代', '風格與代表作'],
        [
          ['韓愈', '唐', '雄渾氣盛；〈師說〉'],
          ['柳宗元', '唐', '峻潔幽深；〈始得西山宴遊記〉'],
          ['歐陽脩', '北宋', '平易婉轉；〈醉翁亭記〉'],
          ['蘇軾', '北宋', '汪洋恣肆；〈赤壁賦〉'],
        ],
        [
          ['倡導者', '韓愈、柳宗元'],
          ['主張', '反駢文、文以載道'],
          ['八大家', '唐二、宋六'],
          ['三蘇', '蘇洵、蘇軾、蘇轍'],
        ],
      ),
    ],
    quiz: [
      q('「率妻子邑人來此絕境」中的「妻子」，意思為何？', ['配偶', '家中長輩', '女兒', '妻子與兒女'], 3, '古義為妻與子，屬詞義縮小的例子。'),
      q('下列何者不屬於唐宋古文八大家？', ['李白', '蘇轍', '曾鞏', '柳宗元'], 0, '李白是盛唐詩人，不在八大家之列。'),
      q('唐代古文運動主要反對的文體是什麼？', ['先秦散文', '傳奇小說', '樂府詩', '駢文'], 3, '反對重形式輕內容的駢文，提倡散體古文。'),
    ],
  },
  'modern-literature': {
    concepts: [
      c(
        '臺灣現代文學的發展脈絡',
        ['CH3.3.1'],
        '把作家放回時代，作品的關懷就容易理解。**日治時期**新文學興起，以白話文反映殖民處境，**賴和**被稱為「臺灣新文學之父」，楊逵、呂赫若等以日文或中文創作。**一九五〇年代**以反共文學與懷鄉文學為主流。**一九六〇年代**現代主義興盛，受西方思潮影響，重視內心探索與形式實驗，白先勇等人創辦《現代文學》，詩壇有余光中、洛夫、瘂弦等。**一九七〇年代**鄉土文學回到土地與小人物，黃春明、王禎和為代表，並引發鄉土文學論戰。**一九八〇年代以後**走向多元：女性書寫、原住民文學、自然書寫、飲食與旅行文學並陳。',
        ['時期', '主流', '代表作家'],
        [
          ['日治時期', '新文學、寫實與抗議', '賴和、楊逵'],
          ['1950 年代', '反共、懷鄉', '林海音、琦君（懷舊散文）'],
          ['1960 年代', '現代主義', '白先勇、余光中、洛夫'],
          ['1970 年代', '鄉土文學', '黃春明、王禎和'],
        ],
        [
          ['賴和', '臺灣新文學之父'],
          ['現代主義', '內心、形式實驗'],
          ['鄉土文學', '土地與小人物'],
          ['1980 後', '多元書寫並陳'],
        ],
      ),
    ],
    quiz: [
      q('被稱為「臺灣新文學之父」的作家是誰？', ['賴和', '楊逵', '鍾理和', '吳濁流'], 0, '賴和以白話文創作，奠定臺灣新文學基礎。'),
      q('以小人物與土地為題材、代表作家有黃春明的文學潮流，主要興盛於何時？', ['1950 年代', '1960 年代', '1970 年代', '1990 年代'], 2, '1970 年代鄉土文學興起。'),
    ],
  },
  linguistics: {
    concepts: [
      c(
        '六書：四種造字法與兩種用字法',
        ['CH1.1.1', 'CH1.1.3'],
        '六書是古人歸納漢字構造的六種條例，其中**象形、指事、會意、形聲是造字法**，**轉注、假借是用字法**。**象形**依物體外形描畫，是獨體字，如日、月、山、水。**指事**用抽象符號表示意思，或在象形字上加記號，如上、下、本、末、刃。**會意**合併兩個以上的字表示新意，如「休」（人倚木）、「明」、「信」。**形聲**由表示意義的形符與表示讀音的聲符組成，如江、河、楓，數量最多，佔漢字八成以上。判斷順序：先看能否拆成兩部分——不能拆的是象形或指事；能拆時，其中一部分表音就是形聲，都只表意就是會意。',
        ['六書', '特徵', '例字'],
        [
          ['象形', '畫出實物形狀，獨體', '日、月、山、木'],
          ['指事', '抽象符號或加記號，獨體', '上、下、本、刃'],
          ['會意', '合併意符，合體', '休、明、信、林'],
          ['形聲', '形符 + 聲符，合體', '江、河、楓、問'],
        ],
        [
          ['造字法', '象形、指事、會意、形聲'],
          ['用字法', '轉注、假借'],
          ['最多', '形聲字'],
          ['判斷', '先拆字，再看有無聲符'],
        ],
      ),
    ],
    quiz: [
      q('「本」字是在「木」的下方加一橫標示樹根所在，屬於六書中的哪一種？', ['象形', '形聲', '會意', '指事'], 3, '在象形字上加指示符號，屬指事。'),
      q('下列各組字，何者全部屬於形聲字？', ['江、楓', '休、明', '日、月', '上、下'], 0, '「江」從水工聲、「楓」從木風聲。'),
    ],
  },
  'reading-comprehension': {
    concepts: [
      c(
        '議論文本的骨架：論點、論據與論證方法',
        ['CH2.4.1', 'CH2.4.2'],
        '讀議論文要找三樣東西。**論點**是作者的主張，通常出現在首段、末段或各段的首句，回答「作者認為什麼」。**論據**是支持主張的材料，分為**事實論據**（事例、數據、史實）與**道理論據**（名言、公理、定律）。**論證**是把論據連到論點的方法：**舉例論證**用具體事例；**引用論證**借重權威言論；**對比論證**把正反兩面並列以凸顯差異；**類比（比喻）論證**用相似的事物說明抽象道理；**因果論證**分析原因與結果。作答時先圈出論點，再判斷每一段是在「提出」「支持」還是「反駁」。立論是正面建立自己的主張，駁論則是指出對方論點、論據或推論過程的錯誤。',
        ['論證方法', '作法', '辨識線索'],
        [
          ['舉例', '列舉具體事例或數據', '「例如」「以……為例」'],
          ['引用', '引述名言、典籍、研究', '引號、「某某曾說」'],
          ['對比', '正反並列', '「反觀」「相較之下」'],
          ['類比', '以相似事物說理', '「如同」「好比」'],
        ],
        [
          ['論點', '作者的主張'],
          ['論據', '事實與道理兩類'],
          ['論證', '把論據連到論點'],
          ['讀法', '先找論點，再分辨各段功能'],
        ],
      ),
    ],
    quiz: [
      q('「正如地基不穩的高樓難以久立，缺乏基本功的設計也難以成熟」，這句話使用哪一種論證方法？', ['舉例論證', '引用論證', '因果論證', '類比論證'], 3, '以建築地基比擬基本功，是類比。'),
      q('議論文中用來支持主張的事例、數據與名言，稱為什麼？', ['論據', '論點', '論證', '結論'], 0, '論據是證明論點的材料。'),
    ],
  },
  'writing-expression': {
    concepts: [
      c(
        '知性題與情意題：兩種寫作任務的寫法差異',
        ['CH2.2.1', 'CH2.4.1'],
        '寫作題大致分兩類，下筆前要先判斷。**知性題**要求分析、評論或提出看法，重點是「說理清楚」：先用一兩句表明立場，再分點提出理由，每個理由配一個具體例子，最後回應可能的反對意見或提出作法；語氣客觀，避免只喊口號。**情意題**要求敘述經驗、抒發感受，重點是「具體動人」：選**一個**有細節的事件，用感官描寫讓讀者看見場景，寫出事件前後自己想法的轉變，結尾收在體悟而不是說教。兩類共同的要求是**緊扣題目關鍵詞**、段落分明、首尾呼應。常見失誤是把知性題寫成故事、把情意題寫成論說，或材料很多卻都只是條列，沒有任何一個寫深。',
        ['項目', '知性題', '情意題'],
        [
          ['任務', '分析、評論、提出主張', '敘事、抒情、反思'],
          ['核心', '論點明確、理由充分', '細節具體、情感真實'],
          ['材料', '事例、數據、比較', '個人經驗、感官描寫'],
          ['結尾', '總結主張或提出作法', '體悟與轉變'],
        ],
        [
          ['先判斷', '題目要你說理還是抒情'],
          ['知性', '立場、理由、例證'],
          ['情意', '一件事寫深'],
          ['共同', '扣題、分段、呼應'],
        ],
      ),
    ],
    quiz: [
      q('題目要求「就校園是否應全面禁用手機提出你的看法」，最適合的寫作方向為何？', ['敘述一次手機遺失的經過', '抒發對童年的懷念', '描寫手機外觀與功能', '表明立場並分點說明理由與例證'], 3, '這是知性題，重點在主張與論證。'),
      q('情意題要寫得動人，下列哪一種作法最有效？', ['選一件事並寫出具體細節與心境轉變', '盡量列舉十件以上相關的事', '大量引用名言', '通篇使用排比句'], 0, '材料求精不求多，細節與轉變才有感染力。'),
    ],
  },
  'cultural-knowledge': {
    concepts: [
      c(
        '先秦諸子四家：儒、道、墨、法的主張比較',
        ['CH3.3.1'],
        '春秋戰國時代社會劇變，各家對「如何恢復秩序」提出不同答案。**儒家**（孔子、孟子、荀子）主張以**仁與禮**教化人心，重視倫理與德治；孟子主性善，荀子主性惡而強調後天學習。**道家**（老子、莊子）主張**順應自然、無為而治**，認為過多的人為造作正是混亂的根源，莊子更追求精神的逍遙自由。**墨家**（墨子）主張**兼愛、非攻**，提倡節用、尚賢，反對儒家的厚葬與繁禮，立場貼近平民。**法家**（韓非集大成）主張以**法、術、勢**治國，重視賞罰分明與君主權威，認為人性自利，不能依賴道德。秦以法家統一天下，漢武帝之後儒家成為主流。',
        ['學派', '代表人物', '核心主張'],
        [
          ['儒家', '孔子、孟子、荀子', '仁、禮、德治'],
          ['道家', '老子、莊子', '自然、無為、逍遙'],
          ['墨家', '墨子', '兼愛、非攻、節用'],
          ['法家', '韓非、商鞅', '法、術、勢與賞罰'],
        ],
        [
          ['儒', '以德化民'],
          ['道', '順其自然'],
          ['墨', '兼愛非攻'],
          ['法', '信賞必罰'],
        ],
      ),
    ],
    quiz: [
      q('主張「兼愛」「非攻」，並反對厚葬久喪的是哪一個學派？', ['儒家', '道家', '法家', '墨家'], 3, '墨家主張無差等的愛與反對侵略戰爭。'),
      q('集法家思想大成，主張法、術、勢並用的人物是誰？', ['韓非', '荀子', '莊子', '孟子'], 0, '韓非綜合商鞅的法、申不害的術與慎到的勢。'),
    ],
  },
};

export const englishBoosts: SubjectBoostMap = {
  'vocabulary-phrases': {
    concepts: [
      c(
        '動詞搭配詞：make、do、take、have 不能憑中文直譯',
        ['EN1.3.3', 'EN1.3.2'],
        '**搭配詞**（collocation）是英文裡習慣一起出現的字詞組合，選錯動詞雖然看得懂，卻不自然，也是統測字彙題與翻譯題的常見考點。大原則：**make** 強調「製造、產生出原本沒有的東西」，如 make a decision、make a mistake、make progress、make an appointment；**do** 強調「執行一項活動或工作」，如 do homework、do the dishes、do research、do one’s best；**take** 常接「需要花時間或採取的行動」，如 take a break、take a shower、take notes、take a picture、take medicine；**have** 接「經驗或擁有」，如 have a meeting、have a good time、have breakfast、have a cold。背單字時連同前面的動詞一起背，效果遠勝單背名詞。',
        ['動詞', '語感', '常考搭配'],
        [
          ['make', '產生新事物', 'a decision、a mistake、progress、a plan'],
          ['do', '執行工作或活動', 'homework、research、business、one’s best'],
          ['take', '採取、花費', 'a break、notes、medicine、a picture'],
          ['have', '經驗、擁有', 'a meeting、a good time、a cold'],
        ],
        [
          ['make a mistake', '不可用 do'],
          ['do homework', '不可用 make'],
          ['take medicine', '吃藥不用 eat'],
          ['背法', '動詞連名詞一起背'],
        ],
      ),
    ],
    quiz: [
      q('Before you ______ a decision, think about the cost carefully.', ['do', 'have', 'take', 'make'], 3, '固定搭配 make a decision。'),
      q('The doctor told him to ______ the medicine three times a day.', ['take', 'drink', 'eat', 'make'], 0, '吃藥用 take medicine。'),
    ],
  },
  'grammar-patterns': {
    concepts: [
      c(
        '連綴動詞接形容詞、授與動詞的兩種寫法',
        ['EN1.4.1'],
        '兩類動詞的後接結構最常在選擇題設陷阱。**連綴動詞**（be、become、seem、look、sound、smell、taste、feel、get、turn）後面接的是**形容詞**，用來說明主詞的狀態，不是副詞：The plan sounds good.（不可用 well）、The soup tastes terrible. 若要接名詞，感官動詞要加 like：It looks like a bridge. **授與動詞**有兩個受詞，可以寫成兩種語序：「動詞 + 人 + 物」或「動詞 + 物 + 介系詞 + 人」。介系詞依動詞而定：give、send、show、lend、tell、teach 用 **to**；buy、make、cook、get 用 **for**；ask 用 **of**。當「物」是代名詞 it 或 them 時，只能用第二種寫法：Give it to me.',
        ['類型', '結構', '例句'],
        [
          ['連綴動詞', '主詞 + 動詞 + 形容詞', 'The wall feels rough.'],
          ['感官 + like', '動詞 + like + 名詞', 'It sounds like a good idea.'],
          ['授與動詞（to）', 'give + 物 + to + 人', 'He showed the drawing to me.'],
          ['授與動詞（for）', 'buy + 物 + for + 人', 'She bought a helmet for her brother.'],
        ],
        [
          ['連綴動詞後', '形容詞，不用副詞'],
          ['to 類', 'give、send、show、lend、tell'],
          ['for 類', 'buy、make、cook、get'],
          ['代名詞受詞', '只能說 give it to me'],
        ],
      ),
    ],
    quiz: [
      q('The new design looks ______ than the old one.', ['more beautifully', 'most beautifully', 'beautifully', 'more beautiful'], 3, 'look 為連綴動詞，後接形容詞比較級。'),
      q('My uncle bought a set of drafting tools ______ me.', ['for', 'to', 'of', 'with'], 0, 'buy + 物 + for + 人。'),
    ],
  },
  'conversation-daily-use': {
    concepts: [
      c(
        '請求的禮貌層級與 Would you mind 的回答陷阱',
        ['EN2.3', 'EN2.12'],
        '提出請求時，句型越間接越禮貌：Can you…? 較隨意，Could you…? 與 Would you…? 較客氣，**Would you mind + V-ing…?** 與 I was wondering if you could… 最正式。對話題最常考的是 mind 的回答：**mind 的意思是「介意」**，所以表示「願意幫忙」要回答否定意義的 **Not at all.／Of course not.／No problem.**；若回答 Yes, I do. 反而是「我介意」，等於拒絕。請求別人允許自己做某事，用 Would you mind if I + 過去式？或 Do you mind if I + 現在式？婉拒時先道歉再說理由比較得體：I’m sorry, but… 或 I’d love to, but… 作答時要先判斷說話者是答應還是拒絕，再看後面一句是否與之呼應。',
        ['句型', '禮貌程度', '答應的回答'],
        [
          ['Can you help me?', '一般', 'Sure.／No problem.'],
          ['Could you help me?', '較客氣', 'Of course.／Certainly.'],
          ['Would you mind helping me?', '很客氣', 'Not at all.／Of course not.'],
          ['Do you mind if I sit here?', '請求許可', 'No, go ahead.'],
        ],
        [
          ['mind', '介意'],
          ['Not at all', '不介意 = 答應'],
          ['Yes, I do', '介意 = 拒絕'],
          ['婉拒', 'I’d love to, but…'],
        ],
      ),
    ],
    quiz: [
      q('A: Would you mind opening the window?  B: ______ It’s getting hot in here.', ['Yes, I would.', 'No, I can’t.', 'I’m afraid so.', 'Not at all.'], 3, '後句表示贊成開窗，應回答「不介意」。'),
      q('A: Do you mind if I use your scale ruler?  B: ______ I need it right now.', ['I’m sorry, but', 'Go ahead.', 'Of course not.', 'Not at all.'], 0, '後句說明自己正要用，屬婉拒。'),
    ],
  },
  'reading-comprehension': {
    concepts: [
      c(
        '反向題與標題題：兩種容易失分的題型',
        ['EN4.1', 'EN2.11'],
        '**反向題**的題幹含有大寫的 NOT、EXCEPT 或 LEAST，要找的是「文中沒提到」或「錯誤」的選項。作法是**刪去法**：把四個選項逐一回到文章定位，找到依據的就劃掉，剩下那一個才是答案；千萬不要一看到與文章相符的選項就選。這類題耗時較長，可留到同一篇的最後再做。**標題題**（best title）問的是全文的概括，正確答案要**涵蓋全文而不只是一段**，也不能大到超出文章範圍。判斷時看首段與各段首句反覆出現的關鍵詞；選項若只對應其中一段的細節是「太窄」，若用了 all、history of、everything about 這類字眼而文章只談一部分則是「太寬」。',
        ['題型', '題幹線索', '作法'],
        [
          ['反向題', 'NOT／EXCEPT／LEAST', '刪去三個有依據的選項'],
          ['標題題', 'best title／mainly about', '找涵蓋全文的關鍵詞'],
          ['細節題', 'According to the passage', '回原文定位、比對同義改寫'],
          ['推論題', 'infer／imply／suggest', '依據文字合理推一步，不過度延伸'],
        ],
        [
          ['NOT 題', '選「找不到依據」的'],
          ['標題太窄', '只講一段'],
          ['標題太寬', '超出文章範圍'],
          ['時間分配', '反向題放最後做'],
        ],
      ),
    ],
    quiz: [
      q('題幹為 “Which of the following is NOT mentioned in the passage?” 時，最穩當的作答方式為何？', ['選第一個與文章相符的選項', '選最長的選項', '只讀文章第一段', '逐一定位並刪去文中有提到的選項'], 3, '反向題要用刪去法。'),
      q('一篇文章分段介紹綠建築的節能、節水與室內健康三項優點，最適合的標題是哪一個？', ['Benefits of Green Buildings', 'The History of Architecture', 'How to Save Water at Home', 'Solar Panels on Roofs'], 0, '需涵蓋三段內容且不超出範圍。'),
    ],
  },
  'vocabulary-professional': {
    concepts: [
      c(
        '尺寸、形狀與位置的英文表達',
        ['EN1.3.4', 'EN1.5.7'],
        '讀英文規格表與圖說，最基本的是尺寸描述。名詞與形容詞成對：**length／long**（長）、**width／wide**（寬）、**height／high**（高）、**depth／deep**（深）、**thickness／thick**（厚）、**diameter**（直徑）。兩種句型可互換：The beam is 6 meters **long**. 等於 The beam is 6 meters **in length**. 尺寸相乘用 **by**：a 3 m by 4 m room 讀作 three meters by four meters。數字加單位放在名詞前當形容詞時，單位用**單數**並加連字號：a 20-centimeter-thick wall、a three-story building。常見形狀：square、rectangle（rectangular）、circle（circular）、triangle（triangular）、cylinder。位置：at the top／bottom、in the middle、on the left side、parallel to、perpendicular to。',
        ['名詞', '形容詞', '例句'],
        [
          ['length', 'long', 'The pipe is 2 meters long.'],
          ['width', 'wide', 'The door is 90 centimeters wide.'],
          ['height', 'high', 'The ceiling is 3 meters high.'],
          ['thickness', 'thick', 'a 15-centimeter-thick slab'],
        ],
        [
          ['兩種說法', '6 m long = 6 m in length'],
          ['相乘', '3 m by 4 m'],
          ['複合形容詞', '單位用單數加連字號'],
          ['垂直與平行', 'perpendicular to／parallel to'],
        ],
      ),
    ],
    quiz: [
      q('The classroom is eight meters ______ and six meters wide.', ['length', 'lengthen', 'longer', 'long'], 3, '數字 + 單位 + 形容詞 long。'),
      q('They are building a ______ apartment near the station.', ['ten-stories', 'ten-story', 'ten stories', 'tenth-stories'], 1, '複合形容詞中的單位用單數並加連字號。'),
    ],
  },
  'grammar-clauses': {
    concepts: [
      c(
        'that、which 與 what：看「前面有沒有先行詞」',
        ['EN1.4.1'],
        '三者的選擇只要問兩個問題。第一，**空格前有沒有先行詞（名詞）**？有名詞，用關係代名詞 that 或 which；沒有名詞，用 **what**，因為 what 本身等於 the thing(s) that，已經包含先行詞。例如：This is the tool **that** I need.／This is **what** I need. 第二，that 與 which 的差別：**逗號後面**與**介系詞後面**只能用 which，不能用 that（the site, which is near the river…／the room in which we work）；而先行詞有最高級、序數、all、the only、anything 等字時，習慣用 that。此外，that 還可以引導名詞子句且不缺成分（I think that he is right），what 引導的子句則一定缺主詞或受詞。',
        ['情況', '用字', '例句'],
        [
          ['有先行詞、一般情形', 'that／which', 'the bridge that was built in 2010'],
          ['無先行詞', 'what', 'What he said is true.'],
          ['逗號或介系詞之後', 'which', 'the house, which was built of wood'],
          ['最高級、the only、all', 'that', 'the best plan that we have'],
        ],
        [
          ['what', '= the thing that'],
          ['前有名詞', '不可用 what'],
          ['逗號後', '不可用 that'],
          ['檢查', '子句有沒有缺成分'],
        ],
      ),
    ],
    quiz: [
      q('______ surprised the engineers was the strength of the old wooden beam.', ['What', 'Which', 'That', 'It'], 0, '前面沒有先行詞，且子句缺主詞，用 what。'),
      q('The museum, ______ was designed by a famous architect, attracts many visitors.', ['that', 'where', 'what', 'which'], 3, '非限定用法（逗號後）只能用 which。'),
    ],
  },
  'reading-infographics': {
    concepts: [
      c(
        '數字變化的介系詞：by、to、from 與 at',
        ['EN1.5.2', 'EN1.5.7'],
        '圖表題常考的不是單字，而是數字後面那個小小的介系詞。**by 表示變化的幅度**：Sales increased **by** 20% 是「增加了 20%」。**to 表示變化後的結果**：Sales increased **to** 20% 是「增加到 20%」。**from A to B** 表示起點與終點。**at 表示停在某個數值**：Prices remained stable **at** 50 dollars. 名詞用法則是 an increase **of** 20%（幅度）與 an increase **in** sales（項目）。倍數的說法：twice **as** many **as**、three times larger **than**。分數讀法是分子基數、分母序數，分子大於一時分母加 s：one third、two thirds、three quarters。half 是二分之一，a quarter 是四分之一。',
        ['介系詞', '意義', '例句'],
        [
          ['by', '變化幅度', 'Costs fell by 10%.'],
          ['to', '變化後的數值', 'Costs fell to 10 million.'],
          ['from…to…', '起點到終點', 'It rose from 30 to 45.'],
          ['at', '維持在某值', 'It stayed at 45.'],
        ],
        [
          ['增加了', 'increase by'],
          ['增加到', 'increase to'],
          ['名詞後', 'an increase of 20% in sales'],
          ['三分之二', 'two thirds'],
        ],
      ),
    ],
    quiz: [
      q('The number of visitors rose from 200 to 250. In other words, it increased ______ 50.', ['by', 'to', 'at', 'in'], 0, 'by 表示增加的幅度。'),
      q('About ______ of the students chose the green building project. (2/3)', ['two third', 'two thirds', 'second three', 'two three'], 1, '分子大於一，分母序數加 s。'),
    ],
  },
  'cloze-passage-structure': {
    concepts: [
      c(
        '用空格前後判斷詞性：先定詞性，再選字義',
        ['EN1.4.1', 'EN4.2'],
        '克漏字與綜合測驗的四個選項若是同一字根的不同詞性，完全不必翻譯，只要看空格在句中的位置。**冠詞、所有格或形容詞之後**需要**名詞**（a great ______）。**名詞之前、be 動詞或連綴動詞之後**需要**形容詞**（a ______ building／It is ______.）。**修飾動詞、形容詞或整句**需要**副詞**（______ designed／He works ______.）。**主詞之後、助動詞之後**需要**動詞**。常見字尾可以快速辨認詞性：名詞多為 -tion、-ment、-ness、-ity；形容詞多為 -ful、-ous、-ive、-able、-al；副詞多為 -ly；動詞多為 -ize、-ify、-en。先用位置鎖定詞性，通常能刪掉兩到三個選項，再用字義決定。',
        ['空格位置', '需要的詞性', '例'],
        [
          ['a／the／my／形容詞 + ___', '名詞', 'an important decision'],
          ['___ + 名詞；be + ___', '形容詞', 'a creative design'],
          ['修飾動詞或形容詞', '副詞', 'carefully measured'],
          ['主詞或助動詞之後', '動詞', 'They will modernize the station.'],
        ],
        [
          ['-tion、-ment', '名詞'],
          ['-ive、-ous', '形容詞'],
          ['-ly', '多為副詞'],
          ['順序', '先詞性、後字義'],
        ],
      ),
    ],
    quiz: [
      q('The architect explained the plan ______ so that everyone could understand it.', ['clear', 'clarify', 'clearness', 'clearly'], 3, '修飾動詞 explained，用副詞。'),
      q('Safety is our first ______ on every construction site.', ['consideration', 'considerable', 'consider', 'considerably'], 0, '形容詞 first 之後需要名詞。'),
    ],
  },
  'grammar-mastery': {
    concepts: [
      c(
        '時間與條件副詞子句：用現在式代替未來式',
        ['EN1.4.1'],
        '中文說「等他明天到了，我們就開始」，英文的兩個子句時態並不相同。在表**時間**（when、before、after、as soon as、until、by the time）與表**條件**（if、unless、as long as、in case）的**副詞子句**中，即使談的是未來的事，也要用**現在簡單式**代替未來式；主要子句才用 will。例如：We will start as soon as he **arrives** tomorrow.／If it **rains** tomorrow, the pouring will be postponed. 注意這條規則只適用於**副詞子句**。若 when 或 if 引導的是**名詞子句**（作動詞的受詞，if 意為「是否」），仍然要用未來式：I don’t know when he **will arrive**.／I wonder if it **will rain** tomorrow.',
        ['子句類型', '時態', '例句'],
        [
          ['時間副詞子句', '現在式代未來', 'I’ll call you when I get there.'],
          ['條件副詞子句', '現在式代未來', 'If it rains, we will stay inside.'],
          ['名詞子句（when）', '照常用未來式', 'Tell me when you will come.'],
          ['名詞子句（if = 是否）', '照常用未來式', 'I’m not sure if he will agree.'],
        ],
        [
          ['規則', '時間與條件子句不用 will'],
          ['主要子句', '仍用 will'],
          ['例外', '名詞子句照常'],
          ['辨別 if', '「如果」或「是否」'],
        ],
      ),
      c(
        'used to、be used to 與 get used to',
        ['EN1.4.1'],
        '三個長得很像的片語，意思與後接形式都不同。**used to + 原形動詞**表示「過去經常、但現在不再」的習慣或狀態：He **used to work** on a construction site.（現在已經不是）否定為 didn’t use to。**be used to + 名詞或 V-ing** 表示「習慣於」某事的狀態，這裡的 to 是介系詞：She **is used to working** at night. **get used to + 名詞或 V-ing** 強調「逐漸變得習慣」的過程：You will **get used to wearing** a helmet. 另有被動用法 **be used to + 原形動詞**，意思是「被用來」：This tool **is used to measure** angles. 判斷關鍵是看 used 前面有沒有 be 動詞，以及句意是「過去習慣」「習慣於」還是「被用來」。',
        ['片語', '後接', '意思'],
        [
          ['used to', '原形動詞', '過去常常（現在不了）'],
          ['be used to', '名詞／V-ing', '習慣於'],
          ['get used to', '名詞／V-ing', '漸漸習慣'],
          ['be used to（被動）', '原形動詞', '被用來'],
        ],
        [
          ['無 be 動詞', '過去的習慣'],
          ['有 be + V-ing', '習慣於'],
          ['有 be + 原形', '被用來'],
          ['get', '強調變化過程'],
        ],
      ),
    ],
    quiz: [
      q('The workers will take a break after they ______ the second floor.', ['will finish', 'are going to finish', 'finished', 'finish'], 3, '時間副詞子句以現在式代替未來式。'),
      q('My father ______ a carpenter, but now he runs a design studio.', ['used to be', 'is used to being', 'gets used to be', 'was used to'], 0, '過去如此、現在不再，用 used to + 原形。'),
      q('I don’t know if the inspector ______ tomorrow.', ['comes', 'coming', 'came', 'will come'], 3, 'if 在此意為「是否」，為名詞子句，照常用未來式。'),
    ],
  },
  'workplace-communication': {
    concepts: [
      c(
        '時程與期限用語：by、until、postpone 與 reschedule',
        ['EN2.4', 'EN2.10'],
        '工程溝通中時間說錯，後果最直接。**by** 表示「最晚在某時之前完成」，搭配一次性的動作：Please submit the drawings **by** Friday.（週五前交）**until** 表示「持續到某時為止」，搭配持續性的動作：The road will be closed **until** Friday.（封到週五）兩者不可互換。調整時程的動詞：**postpone** 與 **put off** 是延後，**delay** 是耽擱（多指非自願），**move up／bring forward** 是提前，**reschedule** 是改期，**cancel** 與 **call off** 是取消。期限相關名詞：**deadline** 截止期限、**due date** 到期日、**schedule** 進度表；ahead of schedule 是進度超前，behind schedule 是落後，on schedule 是如期。',
        ['用語', '意思', '例句'],
        [
          ['by + 時間', '最晚在……之前', 'Finish it by 5 p.m.'],
          ['until + 時間', '持續到……為止', 'Wait here until noon.'],
          ['postpone／put off', '延後', 'The meeting was postponed.'],
          ['behind schedule', '進度落後', 'We are two days behind schedule.'],
        ],
        [
          ['by', '期限，一次性動作'],
          ['until', '持續，延續性動作'],
          ['call off', '取消'],
          ['進度超前', 'ahead of schedule'],
        ],
      ),
    ],
    quiz: [
      q('The contractor must complete the foundation work ______ the end of this month.', ['by', 'until', 'at', 'since'], 0, '表示完成期限用 by。'),
      q('Because of the typhoon, the site inspection has been ______ until next Monday.', ['called off', 'moved up', 'completed', 'postponed'], 3, '後面有 until next Monday，表示延後。'),
    ],
  },
  'reading-advanced': {
    concepts: [
      c(
        '字義題的三步解法：代回、詞性、語氣',
        ['EN4.2', 'EN4.3'],
        '題幹出現 closest in meaning to 或 most likely means 時，考的不是你背過這個字沒有，而是能否從上下文推論。三個步驟：**第一，把選項代回原句**，讀起來語意通順且與前後文邏輯一致的才可能是答案。**第二，詞性要一致**，畫線字是動詞，答案就不會是名詞。**第三，判斷語氣的正負**，從上下文的線索決定畫線字是正面、負面還是中性：but、however 之後語氣反轉，and、also 之後語氣相同，for example 之後是前文的例子。常見陷阱是「這個字最常見的意思」：多義字在文中往往取較少見的意思，例如 address 當動詞是「處理」、plant 可以是「工廠」、story 可以是「樓層」。',
        ['線索類型', '訊號詞', '推論方向'],
        [
          ['對比', 'but、however、unlike', '與前文意思相反'],
          ['並列', 'and、also、similarly', '與前文意思相近'],
          ['舉例', 'for example、such as', '例子說明畫線字'],
          ['定義或重述', 'that is、in other words、破折號', '後文直接解釋'],
        ],
        [
          ['第一步', '代回原句'],
          ['第二步', '詞性一致'],
          ['第三步', '語氣正負'],
          ['陷阱', '多義字的常見義'],
        ],
      ),
    ],
    quiz: [
      q('“The company built a new plant to produce steel beams.” 句中的 plant 意思最接近哪一個？', ['factory', 'tree', 'flower', 'plan'], 0, '能「生產鋼梁」的是工廠。'),
      q('“Unlike his careless brother, Tom is very meticulous about every detail.” 可推知 meticulous 的意思是？', ['lazy', 'forgetful', 'angry', 'careful'], 3, 'unlike 表示對比，與 careless 相反。'),
    ],
  },
  'translation-writing': {
    concepts: [
      c(
        '中譯英的四個中式英文陷阱',
        ['EN1.4.1', 'EN2.7'],
        '翻譯失分多半不是單字不會，而是把中文句構原樣搬過去。**陷阱一：連接詞成對使用。** 中文說「雖然……但是」「因為……所以」，英文一個句子只用一個連接詞：Although it was raining, we kept working.（不可再加 but）**陷阱二：「有」一律用 have。** 表示「某處存在某物」要用 There is／are：There are three windows in the room. **陷阱三：主詞不合邏輯。** 「這棟建築的價格很貴」不能說 The price is expensive，要說 The building is expensive 或 The price is high。**陷阱四：漏掉主詞或 be 動詞。** 中文可以省略主詞，英文不行；形容詞當述語時前面要有 be 動詞：He is busy.',
        ['中文說法', '錯誤', '正確'],
        [
          ['雖然很累，但是他繼續畫圖', 'Although…, but he…', 'Although he was tired, he kept drawing.'],
          ['教室裡有四十張桌子', 'Here has forty desks.', 'There are forty desks in the classroom.'],
          ['價格很貴', 'The price is expensive.', 'The price is high.'],
          ['因為下雨，所以工程延後', 'Because…, so…', 'Because it rained, the work was delayed.'],
        ],
        [
          ['連接詞', '一句只用一個'],
          ['存在', 'There is／are'],
          ['price', '配 high／low'],
          ['每句', '都要有主詞與動詞'],
        ],
      ),
    ],
    quiz: [
      q('下列哪一句的英文寫法正確？', ['Although it was late, he kept working.', 'Although it was late, but he kept working.', 'Because it was late, so he went home.', 'It was late, he went home.'], 0, 'although 與 but 不可並用；兩個句子之間需要連接詞。'),
      q('「這張桌子的價格很高」最適當的英文是哪一句？', ['The price of this table is expensive.', 'This table’s price is very expensive.', 'This table is high price.', 'The price of this table is high.'], 3, 'price 搭配 high／low，expensive 用於物品本身。'),
    ],
  },
};
