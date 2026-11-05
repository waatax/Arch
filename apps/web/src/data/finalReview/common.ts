import { ChapterContent, d } from './types';

const n = (title: string) => title;

export const mathCChapters: ChapterContent[] = [
  { no: 1, title: n('坐標系與函數圖形'), focus: '距離、分點、函數定義域與圖形平移。', essentials: ['兩點距離 $\\sqrt{\\Delta x^2+\\Delta y^2}$；分點依比例內分。', '$y=f(x-h)+k$ 表示右移 h、上移 k。', '二次函數頂點 $x=-b/(2a)$。'], traps: ['分母不可為零、根號內不可為負。'], drills: [
    d('計算', 1, 'A(1, 2)、B(4, 6) 距離為？', ['3', '4', '5', '7'], 2, '$\\sqrt{9+16}=5$。', 'Math.sqrt(9+16)'),
    d('計算', 2, '$y=x^2-4x+7$ 的最小值為？', ['2', '3', '4', '7'], 1, '$y=(x-2)^2+3$，最小值 3。', '4-8+7') ] },
  { no: 2, title: '三角函數', focus: '定義、特別角與恆等式。', essentials: ['$\\sin^2\\theta+\\cos^2\\theta=1$。', '弧度 $\\pi=180°$。', '正弦、餘弦週期 $2\\pi$。'], traps: ['象限決定正負號。'], drills: [
    d('計算', 1, '$\\sin30°+\\cos60°$ 為？', ['0.5', '1', '1.5', '2'], 1, '$0.5+0.5=1$。', '0.5+0.5'),
    d('計算', 2, '$\\theta$ 在第二象限且 $\\sin\\theta=0.6$，$\\cos\\theta$ 為？', ['−0.8', '−0.6', '0.6', '0.8'], 0, '第二象限餘弦為負，$-\\sqrt{1-0.36}=-0.8$。', '-Math.sqrt(1-0.36)') ] },
  { no: 3, title: '平面向量', focus: '向量運算與內積。', essentials: ['$\\vec a\\cdot\\vec b=|\\vec a||\\vec b|\\cos\\theta=a_1b_1+a_2b_2$。', '內積為 0 表示垂直。'], traps: ['內積結果是純量，不是向量。'], drills: [
    d('計算', 1, '$(3,4)\\cdot(2,1)$ 為？', ['6', '8', '10', '12'], 2, '$6+4=10$。', '6+4'),
    d('計算', 1, '向量 $(3,4)$ 的長度為？', ['3', '4', '5', '7'], 2, '$\\sqrt{9+16}=5$。', '5') ] },
  { no: 4, title: '式的運算', focus: '多項式、分式與根式。', essentials: ['餘式定理：$f(x)$ 除以 $x-a$ 的餘式為 $f(a)$。', '因式定理：$f(a)=0$ 則 $x-a$ 為因式。'], traps: ['分式約分要先確認分母不為零。'], drills: [
    d('計算', 1, '$f(x)=x^2+3x-1$ 除以 $x-2$ 的餘式為？', ['5', '7', '9', '11'], 2, '$f(2)=4+6-1=9$。', '4+6-1'),
    d('計算', 2, '$x^2-5x+k$ 有因式 $x-2$，則 k 為？', ['2', '4', '6', '8'], 2, '$4-10+k=0$，$k=6$。', '6') ] },
  { no: 5, title: '直線與圓', focus: '斜率、點到直線距離、圓方程式。', essentials: ['$d=\\dfrac{|ax_0+by_0+c|}{\\sqrt{a^2+b^2}}$。', '兩直線垂直時斜率積為 −1（皆存在時）。'], traps: ['圓方程式要配方後才能看圓心與半徑。'], drills: [
    d('計算', 2, '點 (0,0) 到 $3x+4y-10=0$ 距離為？', ['1', '2', '2.5', '5'], 1, '$10/5=2$。', '10/5'),
    d('計算', 1, '$x^2+y^2=25$ 的半徑為？', ['5', '10', '12.5', '25'], 0, '半徑 $\\sqrt{25}=5$。', '5') ] },
  { no: 6, title: '數列與級數', focus: '等差、等比與求和。', essentials: ['等差和 $S_n=\\dfrac{n(a_1+a_n)}2$。', '等比和 $S_n=\\dfrac{a_1(1-r^n)}{1-r}$。'], traps: ['項數要算對：從 a 到 b 公差 d，共 $(b-a)/d+1$ 項。'], drills: [
    d('計算', 1, '1 + 2 + … + 100 為？', ['4950', '5000', '5050', '5100'], 2, '$100\\times101/2=5050$。', '100*101/2'),
    d('計算', 2, '首項 2、公比 3 的等比數列，前 4 項和為？', ['54', '80', '82', '162'], 1, '$2(3^4-1)/2=80$。', '2*(81-1)/2') ] },
  { no: 7, title: '排列組合', focus: '加法與乘法原理、排列與組合判斷。', essentials: ['順序有差用 P，順序無差用 C。', '$C^n_k=\\dfrac{n!}{k!(n-k)!}$。'], traps: ['先判斷有無順序，再決定公式。'], drills: [
    d('計算', 1, '5 人選 2 位代表（不分職務）有幾種？', ['10', '20', '25', '60'], 0, '$C^5_2=10$。', '10'),
    d('計算', 1, '5 人選正副班長各 1 人有幾種？', ['10', '20', '25', '60'], 1, '$P^5_2=20$。', '20') ] },
  { no: 8, title: '三角函數的應用', focus: '正餘弦定理與三角形面積，常結合測量情境。', essentials: ['$c^2=a^2+b^2-2ab\\cos C$。', '面積 $=\\tfrac12ab\\sin C$。'], traps: ['確認角度是不是夾角。'], drills: [
    d('計算', 2, '兩邊 8、5，夾角 60°，第三邊為？', ['6', '7', '8', '9'], 1, '$64+25-40=49$，開根號得 7。', 'Math.sqrt(49)'),
    d('計算', 1, '兩邊 6、10，夾角 30°，面積為？', ['15', '20', '30', '60'], 0, '$\\tfrac12\\cdot6\\cdot10\\cdot0.5=15$。', '0.5*6*10*0.5') ] },
  { no: 9, title: '指數與對數', focus: '運算律與生活情境（pH、半衰期）。', essentials: ['$\\log(ab)=\\log a+\\log b$。', '$\\log_ab=\\dfrac{\\log b}{\\log a}$。'], traps: ['真數要大於 0，底數要大於 0 且不為 1。'], drills: [
    d('計算', 1, '$\\log_2 32$ 為？', ['4', '5', '6', '16'], 1, '$2^5=32$。', 'Math.log2(32)'),
    d('情境', 2, '放射性物質半衰期 5 年，20 年後剩原來的幾分之幾？', ['1/4', '1/8', '1/16', '1/32'], 2, '經 4 個半衰期，$(1/2)^4=1/16$。') ] },
  { no: 10, title: '空間向量', focus: '空間坐標、內積與平面。', essentials: ['$|\\vec a|=\\sqrt{a_1^2+a_2^2+a_3^2}$。', '平面法向量與平面內向量內積為 0。'], traps: ['三階外積的正負號要依序計算。'], drills: [
    d('計算', 1, '向量 (2, 3, 6) 的長度為？', ['5', '6', '7', '11'], 2, '$\\sqrt{4+9+36}=7$。', 'Math.sqrt(49)'),
    d('計算', 2, '$(1,2,3)\\cdot(4,0,-1)$ 為？', ['1', '3', '5', '7'], 0, '$4+0-3=1$。', '4-3') ] },
  { no: 11, title: '一次聯立方程式與矩陣', focus: '矩陣運算與行列式。', essentials: ['$2\\times2$ 行列式 $ad-bc$。', '矩陣相乘要前行數等於後列數，且不具交換律。'], traps: ['$AB\\ne BA$ 是常考敘述。'], drills: [
    d('計算', 1, '行列式 $\\begin{vmatrix}2&3\\\\1&4\\end{vmatrix}$ 為？', ['2', '5', '8', '11'], 1, '$8-3=5$。', '8-3'),
    d('計算', 2, '$x+y=5$、$x-y=1$，x 為？', ['1', '2', '3', '4'], 2, '兩式相加 $2x=6$。', '3') ] },
  { no: 12, title: '二元一次不等式與線性規劃', focus: '可行解區域的頂點代入。', essentials: ['線性目標函數的極值出現在可行區域頂點。'], traps: ['不等號方向與區域選取要先代原點檢查。'], drills: [
    d('計算', 2, '頂點為 (0,0)、(4,0)、(0,3)，$z=2x+3y$ 的最大值為？', ['6', '8', '9', '12'], 2, '三值 0、8、9，最大 9。', '9'),
    d('觀念', 1, '線性規劃的最佳解通常在？', ['區域內部', '可行區域頂點', '原點', 'x 軸'], 1, '線性目標函數的極值會發生在頂點（或含頂點的邊）。') ] },
  { no: 13, title: '二次曲線', focus: '拋物線、橢圓、雙曲線的標準式。', essentials: ['拋物線 $y^2=4cx$，焦點 $(c,0)$。', '橢圓 $a^2=b^2+c^2$。', '雙曲線 $c^2=a^2+b^2$。'], traps: ['橢圓與雙曲線的 a、b、c 關係不同。'], drills: [
    d('計算', 1, '$y^2=8x$ 的焦點為？', ['(1, 0)', '(2, 0)', '(4, 0)', '(8, 0)'], 1, '$4c=8$，$c=2$。', '2'),
    d('計算', 2, '橢圓 $\\dfrac{x^2}{25}+\\dfrac{y^2}{9}=1$ 的 c 值為？', ['3', '4', '5', '8'], 1, '$c^2=25-9=16$。', 'Math.sqrt(16)') ] },
  { no: 14, title: '微分', focus: '導數、切線與極值應用。', essentials: ['$(x^n)\'=nx^{n-1}$。', '$f\'(a)$ 為切線斜率；$f\'=0$ 找極值候選。'], traps: ['極值候選要再判斷增減。'], drills: [
    d('計算', 1, '$f(x)=x^3$，$f\'(2)$ 為？', ['4', '8', '12', '24'], 2, '$3\\cdot4=12$。', '12'),
    d('情境', 3, '矩形周長 20，面積最大值為？', ['16', '20', '25', '100'], 2, '$A=x(10-x)$，$x=5$ 時最大 25。', '5*5') ] },
  { no: 15, title: '積分', focus: '不定積分、定積分與面積。', essentials: ['$\\int x^ndx=\\dfrac{x^{n+1}}{n+1}+C$。', '定積分可表示曲線與軸間的有號面積。'], traps: ['x 軸下方面積的定積分為負值。'], drills: [
    d('計算', 1, '$\\int_0^2 3x^2dx$ 為？', ['4', '6', '8', '12'], 2, '$[x^3]_0^2=8$。', '8'),
    d('計算', 2, '$y=x$ 與 x 軸在 0 到 4 所圍面積為？', ['4', '8', '12', '16'], 1, '$\\tfrac12\\cdot4\\cdot4=8$。', '8') ] },
];

export const englishChapters: ChapterContent[] = [
  { no: 1, title: '字彙與片語', topics: ['vocabulary-phrases', 'vocabulary-professional'], focus: '高頻字彙加片語，答題靠句意線索。', essentials: ['先判斷詞性，再從上下文找線索。', '片語要連搭配介系詞一起背。', '生字可由字首、字根、字尾推測。'], traps: ['不要只看空格前後兩個字，要讀完整句。'], drills: [
    d('觀念', 1, 'Please ____ the form before you leave the office.', ['fill out', 'look after', 'put off', 'run into'], 0, 'fill out 是填寫表格；look after 照顧、put off 延後、run into 巧遇。'),
    d('觀念', 2, 'The new bridge is strong enough to ____ typhoons.', ['withstand', 'withdraw', 'wander', 'whisper'], 0, 'withstand 為承受、抵擋，符合結構情境。') ] },
  { no: 2, title: '文法與句構', topics: ['grammar-patterns', 'grammar-clauses', 'grammar-mastery'], focus: '被動式、時態、關係子句是歷屆常客。', essentials: ['被動式：be + p.p.。', '關係代名詞依先行詞與格位選擇。', '時態看時間副詞。'], traps: ['不及物動詞不能用被動，例如 happen。'], drills: [
    d('觀念', 1, 'The building ____ in 2010.', ['builds', 'was built', 'has building', 'is building'], 1, '有過去時間 2010，且建築物是被建造，用過去被動。'),
    d('觀念', 2, 'The architect ____ designed this library won an award.', ['who', 'which', 'whom', 'whose'], 0, '先行詞為人，在子句中作主詞，用 who。') ] },
  { no: 3, title: '對話與職場溝通', topics: ['conversation-daily-use', 'workplace-communication'], focus: '情境語用，要看最後一句前後的回應邏輯。', essentials: ['先判斷場景與說話者關係。', '留意禮貌請求與婉拒句型。'], traps: ['字面相關不代表語意正確。'], drills: [
    d('情境', 1, 'A: Would you mind closing the window? B: ____', ['Yes, I close.', 'Not at all.', 'I am a window.', 'It was closing.'], 1, 'Would you mind 問「介意嗎」，同意時回答 Not at all。'),
    d('情境', 1, 'A: May I speak to Mr. Lin? B: ____', ['Speaking.', 'I am fine.', 'See you.', 'Long time.'], 0, '電話中本人接聽可答 Speaking。') ] },
  { no: 4, title: '綜合測驗', topics: ['cloze-passage-structure'], focus: '篇章連接與語意一致。', essentials: ['轉折：However；因果：Therefore；舉例：such as。', '空格前後兩句的關係決定連接詞。'], traps: ['不要只憑片語語感，要確認段落邏輯。'], drills: [
    d('觀念', 1, 'The plan was expensive. ____, the city approved it.', ['However', 'Therefore', 'For example', 'In addition'], 0, '前後語意相反，用 However。'),
    d('觀念', 1, 'Green materials, ____ recycled steel, reduce carbon emissions.', ['such as', 'because', 'although', 'unless'], 0, 'such as 用於舉例。') ] },
  { no: 5, title: '閱讀測驗', topics: ['reading-comprehension', 'reading-infographics', 'reading-advanced'], focus: '主旨、細節、推論與圖表閱讀。', essentials: ['先看題目再讀文章，圈出關鍵字。', '主旨題看首尾段；細節題回文定位。', '圖表題要注意單位與日期。'], traps: ['選項與文章相似不等於正確，要看是否被改寫或擴大。'], drills: [
    d('判讀', 2, 'An article compares three mobile data plans. Which question is a detail question?', ['What is the main idea?', 'What is the author\'s tone?', 'How much does Plan B cost per month?', 'What is the best title?'], 2, '詢問特定數字屬細節題，其餘是主旨或態度題。') ] },
  { no: 6, title: '非選擇題', topics: ['translation-writing'], focus: '填充、重組與中譯英，依當年作答規定配分。', essentials: ['重組先找主詞與動詞。', '中譯英注意時態、單複數與冠詞。', '書寫要清楚，拼字錯誤會影響得分。'], traps: ['句首大寫與句尾標點不要漏。'], drills: [
    d('觀念', 1, '重組正確的是？', ['The bridge was completed last year.', 'Was the bridge completed year last.', 'The bridge last year completed was.', 'Completed year the was bridge last.'], 0, '主詞 + 被動動詞 + 時間副詞。') ] },
];

export const chineseChapters: ChapterContent[] = [
  { no: 1, title: '語文知識與形音義', topics: ['linguistics'], focus: '字形、字音、詞義與語法修辭。', essentials: ['常見錯別字以音近、形近為主。', '成語要理解語境，不只背字面。'], traps: ['語境相同才算用字正確。'], drills: [
    d('觀念', 1, '下列何者用字正確？', ['再接再厲', '再接再勵', '迫不急待', '一股作氣'], 0, '應為「再接再厲」「迫不及待」「一鼓作氣」。') ] },
  { no: 2, title: '文言文閱讀', topics: ['classical-literature'], focus: '詞義、句意與作者觀點。', essentials: ['掌握常用虛字與古今異義。', '先通讀，再回到題目定位。'], traps: ['不要用現代語義直接套古文。'], drills: [
    d('觀念', 2, '「走」在文言文中常見意思為？', ['慢行', '跑', '離開家鄉', '行走'], 1, '「走」古義常為奔跑，是古今異義的例子。') ] },
  { no: 3, title: '白話文學', topics: ['modern-literature'], focus: '主旨、情感與表現手法。', essentials: ['從意象與轉折判斷情感。', '分辨象徵、對比與借代。'], traps: ['不要過度推論文本沒有的情節。'], drills: [
    d('觀念', 1, '以具體事物代表抽象概念的手法是？', ['象徵', '排比', '設問', '誇飾'], 0, '象徵是以具體形象暗示抽象意義。') ] },
  { no: 4, title: '閱讀素養與圖表', topics: ['reading-comprehension'], focus: '統測比重最高，長文與圖表整合判讀。', essentials: ['先看題幹，帶著問題閱讀。', '圖表要同時看標題、單位、圖例。', '區分事實與作者意見。'], traps: ['選項絕對性字眼（一定、全部）要特別檢查。'], drills: [
    d('判讀', 2, '圖表顯示某市綠地面積逐年上升。下列推論何者最適當？', ['該市人均綠地一定上升', '綠地總面積呈上升趨勢', '所有居民都滿意綠地', '空氣品質必定改善'], 1, '人均還要看人口；滿意度與空污都未提供資料，只能確定總面積趨勢。') ] },
  { no: 5, title: '文化常識', topics: ['cultural-knowledge'], focus: '文學流派、書信題辭與應用文。', essentials: ['整理重要作者、朝代與作品。', '應用文注意稱謂與用語。'], traps: ['書信提稱語與對象要相符。'], drills: [
    d('觀念', 1, '下列何者為書信中對平輩的提稱語？', ['道鑒', '賜鑒', '台鑒', '膝下'], 2, '「台鑒」常用於平輩；「膝下」用於父母。') ] },
  { no: 6, title: '寫作表達', topics: ['writing-expression'], focus: '審題、結構與舉例；非選配分依當年規定。', essentials: ['先審題再列大綱：立意、段落、例證。', '題幹條件逐項回應。', '結尾收束主題。'], traps: ['離題比文筆不佳更傷分數。'], drills: [
    d('觀念', 1, '情境寫作最重要的第一步是？', ['背名言', '審題並列出條件', '先寫結尾', '使用艱深詞彙'], 1, '先確認題目條件，內容才不會離題。') ] },
];
