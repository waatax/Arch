export type GlobalArchitectureCase = {
  slug: string;
  title: string;
  regionGroup: '台灣' | '日本' | '中國' | '世界';
  region: string;
  category: string;
  question: string;
  architect: string;
  year: string;
  description: string;
  observation: string;
  readingGuide: string[];
  lenses: Array<{ id: string; name: string; question: string; content: string; skillLink: { label: string; href: string } }>;
  takeaway: string;
  photoCredit: { label: string; href: string; license: string };
};

export const globalArchitectureCases: GlobalArchitectureCase[] = [
  {
    slug: 'danjiang-bridge', title: '淡江大橋', regionGroup: '台灣', region: '新北市淡水區—八里區', category: '橋梁結構與地景', architect: 'Zaha Hadid Architects + 中興工程顧問', year: '2026 年通車',
    question: '920 公尺的橋，為什麼只用一座不對稱主塔拉住？',
    description: '淡江大橋橫跨淡水河口，主橋長 920 公尺、主跨 450 公尺。單塔不對稱斜張配置在避免切割淡水夕照地景的同時，以主塔、斜索與鋼梁形成清楚的受力系統。',
    observation: '從實景辨識單塔、扇形斜索與不對稱跨徑，再從圖解追蹤橋面荷重如何經斜索傳至主塔與沉箱基礎。',
    readingGuide: ['看跨徑：主跨讓出深水航道，側跨協助平衡主跨力量。', '看索面：斜索把橋面分成多個短支撐區段，減少梁的彎矩。', '看塔基：主塔承受巨大壓力與不對稱力矩，基礎是穩定關鍵。'],
    lenses: [{ id: 'cable', name: '1. 斜張力路徑', question: '斜索如何把橋面拉起來？', content: '車輛與橋面自重先由鋼梁分配到斜索，斜索承拉，主塔以壓力向下傳到基礎；斜索的水平分力則需在橋面系統中平衡。', skillLink: { label: '工程力學 · 力的分解', href: '/subjects/mechanics' } }, { id: 'survey', name: '2. 合龍與測量', question: '兩端梁段如何在河上精準接合？', content: '懸臂施工期間必須連續監測標高、中心線、溫度變形與索力，用預拱度及施工次序修正誤差，才能完成最後合龍。', skillLink: { label: '測量實習 · 高程與位置', href: '/subjects/surveying' } }],
    takeaway: '讀橋梁時，先畫出跨徑、支承與力量傳遞路徑，再問「為何麼塔在這裡」、「不對稱的力由誰平衡」，就能從造型看到工程邏輯。',
    photoCredit: { label: '4300streetcar／Wikimedia Commons', href: 'https://commons.wikimedia.org/wiki/File:Danjiang_Bridge_east_side_March_2026.jpg', license: 'CC BY 4.0' },
  },
  {
    slug: 'church-of-light', title: '光之教會', regionGroup: '日本', region: '日本大阪府茨木市', category: '清水模與光', architect: '安藤忠雄 Tadao Ando', year: '1989 年完工',
    question: '一道十字開口，如何讓光成為空間的主角？', description: '光之教會以簡潔的清水混凝土盒體、斜插入室內的牆面與祭壇後方的十字開口，把材料的重與光的輕組成強烈對比。',
    observation: '先看實景中近乎封閉的混凝土量體，再用圖解追蹤入口轉折、斜牆與十字光如何建立優先順序。', readingGuide: ['看縫隙：光從十字開口而非大面窗戶進入，形成明確焦點。', '看路徑：斜牆迫使人轉彎後才進入禮拜空間。', '看表面：清水模的螺栓孔與分割縫把施工精度直接暴露。'],
    lenses: [{ id: 'light', name: '1. 光的構圖', question: '為什麼不把室內全部照亮？', content: '暗部讓眼睛適應後，十字形高亮的亮度對比更強，光因而具有方向、時間與象徵性。', skillLink: { label: '物理 · 光與視覺', href: '/subjects/physics' } }, { id: 'concrete', name: '2. 清水模細部', question: '看似簡單的牆為何麼很難做？', content: '清水模拆模後不再覆蓋飾面，模板排版、螺栓位置、混凝土配比、浇置與養護都成為最終視覺品質。', skillLink: { label: '材料與試驗 · 混凝土', href: '/subjects/materials' } }], takeaway: '讀極簡建築時，不要只說「很簡單」；要辨識它刻意減少了什麼，以及剩下的光、路徑與材料如何被放大。', photoCredit: { label: '荻野目さん／Wikimedia Commons', href: 'https://commons.wikimedia.org/wiki/File:Ibaraki_Kasugaoka_Church_20080914.jpg', license: 'CC BY 2.0' },
  },
  {
    slug: 'sendai-mediatheque', title: '仙台媒體中心', regionGroup: '日本', region: '日本宮城縣仙台市', category: '結構與資訊流', architect: '伊東豐雄 + 佐々木睦朗', year: '2001 年開館', question: '樓板不靠普通柱子，13 根管狀結構如何同時送光、送人與承重？', description: '建築以「薄板、管子、皮膚」組成。中空鋼管網既是結構，也容納階梯、電梯、管線、採光與通風，讓樓層保持開放而可變。', observation: '從透明立面看見樓板和管狀核心，圖解則將三個系統拆開，辨識結構、動線與設備如何重疊。', readingGuide: ['看薄板：七層水平板像疊放的城市地面。', '看管子：格構密度與形狀依受力和內部功能改變。', '看皮膚：透明外皮讓公共活動與城市互相可見。'], lenses: [{ id: 'tube', name: '1. 管狀結構', question: '斜交格構為什麼比實心柱更有空間性？', content: '鋼管組成的網狀筒體可同時抵抗垂直載重與水平力，中空部分則成為人、光、風與管線的通道。', skillLink: { label: '工程力學 · 空間力系', href: '/subjects/mechanics' } }, { id: 'flex', name: '2. 開放樓層', question: '少了固定牆體，公共建築得到什麼？', content: '樓層可以用家具、輕隔間與展示系統回應不斷變動的媒體和社群活動，延長建築的使用彈性。', skillLink: { label: '製圖實習 · 平面系統', href: '/subjects/drafting' } }], takeaway: '看當代公共建築時，可將結構、動線、設備與採光疊在同一張剖面圖上，觀察它們是各自獨立，還是被整合成同一個構件。', photoCredit: { label: 'scarletgreen／Wikimedia Commons', href: 'https://commons.wikimedia.org/wiki/File:Sendai_Mediatheque_2009.jpg', license: 'CC BY 2.0' },
  },
  {
    slug: 'tokyo-international-forum', title: '東京國際論壇', regionGroup: '日本', region: '日本東京都千代田區', category: '大跨距與公共動線', architect: 'Rafael Viñoly', year: '1997 年開館', question: '巨大玻璃中庭為何麼像一艘懸浮的船？', description: '長條形玻璃棟以巨型鋼構桁架、拉杆與壓杆構成可閱讀的大跨距骨架，並以中央大廳串連分散的會議與表演空間。', observation: '實景先追蹤屋頂弧線與吊掛步道，圖解再把鋼骨架、人行動線與地面廣場分層。', readingGuide: ['看上弦：弧形鋼構把荷重傳向兩端支點。', '看吊橋：高空步道不只是交通，也讓人近距離閱讀結構。', '看廣場：室內大廳與戶外廣場形成連續公共空間。'], lenses: [{ id: 'span', name: '1. 大跨距鋼構', question: '鋼構為什麼要展示得這麼清楚？', content: '構件的形狀與疏密對應拉力、壓力與穩定需求，結構不是被天花遮住的工程，而是建築空間的主要表情。', skillLink: { label: '工程力學 · 桁架', href: '/subjects/mechanics' } }, { id: 'circulation', name: '2. 立體動線', question: '如何讓人在巨大空間裡不迷路？', content: '透明中庭作為共同方位參照，電扶梯、步道與大廳開口都可相互看見，以視線建立導向。', skillLink: { label: '製圖實習 · 剖面與動線', href: '/subjects/drafting' } }], takeaway: '讀大型公共建築時，同時畫出「力怎麼走」與「人怎麼走」，就能判斷結構和動線是否真正被整合。', photoCredit: { label: 'Basile Morin／Wikimedia Commons', href: 'https://commons.wikimedia.org/wiki/File:Interior_of_the_Tokyo_International_Forum_Glass_Building,_Japan.jpg', license: 'CC BY-SA 4.0' },
  },
  {
    slug: 'forbidden-city', title: '北京故宮（紫禁城）', regionGroup: '中國', region: '中國北京市', category: '木構模矩與禮制', architect: '明清官式營造體系', year: '1420 年建成', question: '數百座建築如何用一條軸線、層層院落與模矩化木構建立秩序？', description: '紫禁城以北京中軸線組織門、庭院與殿宇，並藉基台高度、面闊、屋頂等級、色彩與斗拱組成可辨識的禮制層級。', observation: '從鳥瞰實景找中軸、橫軸與重複院落，圖解再將「城—門—庭—殿」的空間序列與木構模矩對齊。', readingGuide: ['看中軸：最重要的殿宇依序排在中央。', '看門庭：每次穿門都在壓縮與釋放空間，建立儀式感。', '看模矩：柱網、開間與斗拱等級讓巨型建築群仍可標準化營造。'], lenses: [{ id: 'axis', name: '1. 軸線與禮制', question: '為什麼權力需要被排成空間順序？', content: '建築位置、門的數量、庭院尺度與基台高度共同調節接近核心空間的難度，使抽象禮制變成身體經驗。', skillLink: { label: '歷史 · 中國建築', href: '/subjects/history' } }, { id: 'timber', name: '2. 木構柱網', question: '牆面為什麼可以改變，屋頂卻仍站得住？', content: '主要重量由樑、梁、斗拱與柱網向下傳遞，多數牆體不是主要承重構件，因此門窗與隔斷具有相對彈性。', skillLink: { label: '材料與試驗 · 木材', href: '/subjects/materials' } }], takeaway: '讀傳統建築群時，先看整體軸線與院落，再縮小到柱網與斗拱；大尺度的秩序與小尺度的模矩其實是同一套系統。', photoCredit: { label: 'kallgan／Wikimedia Commons', href: 'https://commons.wikimedia.org/wiki/File:Sunset_of_the_Forbidden_City_2006.JPG', license: 'CC BY-SA 3.0' },
  },
  {
    slug: 'cctv-headquarters', title: '中央廣播電視總台總部', regionGroup: '中國', region: '中國北京市', category: '超高層與空間現構', architect: 'OMA / Rem Koolhaas + Ole Scheeren', year: '2012 年完工', question: '兩座傾斜高樓在高空接成閉合環，巨大轉角力量如何被導回地面？', description: 'CCTV 總部不是單一塔樓，而是兩座傾斜高樓、底部與高空懸臂連接而成的三維閉合環。外露對角網格的疏密直接回應不均勻應力。', observation: '實景中先找到傾斜塔體與高空懸臂，圖解再用力流線追蹤對角網格如何繞過轉角與底座。', readingGuide: ['看閉環：建築的空間與結構連成一條連續路徑。', '看格網：對角線較密處通常對應更集中的力量。', '看轉角：懸臂與塔身交界處是幾何、施工與受力最複雜的區域。'], lenses: [{ id: 'loop', name: '1. 閉合力流', question: '建築為什麼能「折轉」而不倒？', content: '外圍網格筒體、核心筒與樓板共同形成空間系統，將傾斜、懸臂所產生的軸力、剪力和彎矩水平分配到整個閉環。', skillLink: { label: '工程力學 · 空間結構', href: '/subjects/mechanics' } }, { id: 'construction', name: '2. 高空合龍', question: '懸臂連接段如何施工？', content: '兩側塔身先獨立向上與向外延伸，必須在溫度和變形可控時進行高空接合；閉合後內力會重新分配。', skillLink: { label: '測量實習 · 施工定位', href: '/subjects/surveying' } }], takeaway: '面對非典型建築，不要先問「像什麼」，而要先畫出連續的支承與受力路徑，再找出力量改變方向的關鍵節點。', photoCredit: { label: 'Kilian Evang／Wikimedia Commons', href: 'https://commons.wikimedia.org/wiki/File:CCTV_Headquarters_(Beijing,_China)_-_Flickr.jpg', license: 'CC BY 2.0' },
  },
  {
    slug: 'shanghai-tower', title: '上海中心大廈', regionGroup: '中國', region: '中國上海市浦東新區', category: '風工程與雙層外皮', architect: 'Gensler', year: '2017 年試營運', question: '632 公尺塔樓為什麼一邊收縮、一邊旋轉？', description: '上海中心以逐層收分與旋轉的圓角三角形外形降低風載，並在內外兩層幕牆之間形成分區的空中中庭與緩衝層。', observation: '從實景讀出塔身的旋轉和收分，圖解再將風流、內塔、外幕牆與九個垂直分區疊合。', readingGuide: ['看輪廓：圓角、收分與旋轉干擾渦流形成。', '看雙皮：外幕牆擋風雨，內層封閉使用空間。', '看分區：超高層被切成多個垂直社區，降低交通與設備負擔。'], lenses: [{ id: 'wind', name: '1. 氣動外形', question: '旋轉立面如何減少風力？', content: '高樓下風側週期性脫落的渦流會造成橫風向振動；圓角、收分和旋轉讓風壓分布隨高度改變，降低同步放大。', skillLink: { label: '物理 · 流體與振動', href: '/subjects/physics' } }, { id: 'skin', name: '2. 雙層外皮', question: '兩層玻璃中間的空間有什麼用？', content: '中間空間成為熱、風與雨的環境緩衝，並容納分區大廳與空中花園；但也帶來排煙、清潔與細部防水挑戰。', skillLink: { label: '製圖實習 · 外牆剖面', href: '/subjects/drafting' } }], takeaway: '讀超高層時，將外形當成性能工具：它如何切風、如何分區、外皮之間如何處理熱與空氣，都比單純追求高度更重要。', photoCredit: { label: 'Ermell／Wikimedia Commons', href: 'https://commons.wikimedia.org/wiki/File:Shanghai_Shanghai_Tower_5166304.jpg', license: 'CC0' },
  },
  {
    slug: 'fallingwater', title: '落水山莊', regionGroup: '世界', region: '美國賓夕法尼亞州', category: '懸臂與有機建築', architect: 'Frank Lloyd Wright', year: '1937 年完工', question: '建築為什麼不是「看向」瀑布，而是直接懸在瀑布上？', description: '落水山莊把鋼筋混凝土露台像岩盤般層層懸挑，並用當地砂岩砌築的垂直量體錨定組成，形成水平與垂直的張力。', observation: '實景中先分辨水平露台與垂直石牆，圖解再畫出懸臂固定端、拉壓應力與建築跨過溪流的位置關係。', readingGuide: ['看水平：淺色露台延伸岩層般的層次。', '看垂直：當地石材砌牆像岩盤般錨住懸臂。', '聽水聲：建築位於瀑布上方，自然被納入日常感官。'], lenses: [{ id: 'cantilever', name: '1. 鋼筋混凝土懸臂', question: '沒有外端柱子，露台怎麼不掉下來？', content: '懸臂版在固定端上緣出現主要拉力，鋼筋承拉、混凝土承壓，荷重和彎矩最終回到核心與基礎。', skillLink: { label: '工程力學 · 彎矩', href: '/subjects/mechanics' } }, { id: 'site', name: '2. 基地整合', question: '建築如何和自然融合而不只是模仿自然？', content: '岩石穿入室內、樓梯直達溪水、低樓板強調水平視線，建築以材料、動線和聲音建立與基地的關係。', skillLink: { label: '歷史 · 現代建築', href: '/subjects/history' } }], takeaway: '讀「與自然融合」的建築，要找具體證據：結構錨在哪裡、地形如何進室內、人怎麼接近水與岩石，而不只是看外觀像不像自然。', photoCredit: { label: 'Carol M. Highsmith／Wikimedia Commons', href: 'https://commons.wikimedia.org/wiki/File:Fallingwater_2007.jpg', license: 'Public domain' },
  },
  {
    slug: 'sydney-opera-house', title: '雪梨歌劇院', regionGroup: '世界', region: '澳洲雪梨', category: '薄殼與幾何模矩', architect: 'Jørn Utzon + Ove Arup', year: '1973 年啟用', question: '看似各不相同的屋頂殼片，為什麼全部可以從同一顆球切出來？', description: '雪梨歌劇院將自由曲面轉化為同一球面幾何的預鑄肋片與面板，同時解決造型、結構分析、模板重複使用與工廠預製問題。', observation: '實景中讀取殼片的重疊與方向，圖解再將每片屋頂放回共同球面，看幾何標準化如何支持複雜形式。', readingGuide: ['看球面：不同大小殼片共用一個曲率家族。', '看肋片：預鑄混凝土肋像扇骨從支點展開。', '看基座：厚重平台統合多個表演空間，並承接殼體水平推力。'], lenses: [{ id: 'sphere', name: '1. 球面解法', question: '幾何統一為什麼能讓自由形式被建造？', content: '統一曲率讓殼片可以使用相同的幾何規則、模具和陶瓷磚系統，把單一的造形發明轉成可重複的營造流程。', skillLink: { label: '數學 C · 空間幾何', href: '/subjects/math-c' } }, { id: 'shell', name: '2. 肋片結構', question: '這些「殼」為什麼不是單純薄片？', content: '實際屋頂由預鑄混凝土肋與面板組成，荷重沿肋片向下傳至基座，每個連接節點都需處理力量與施工容差。', skillLink: { label: '工程力學 · 曲面結構', href: '/subjects/mechanics' } }], takeaway: '當造型很複雜時，反而更要找背後的簡單規則。好的幾何模矩能同時服務計算、製造、定位與視覺一致性。', photoCredit: { label: 'Diliff／Wikimedia Commons', href: 'https://commons.wikimedia.org/wiki/File:Sydney_Opera_House_-_Dec_2008.jpg', license: 'CC BY-SA 3.0' },
  },
  {
    slug: 'centre-pompidou', title: '龐畢度中心', regionGroup: '世界', region: '法國巴黎', category: '高技建築與彈性', architect: 'Renzo Piano + Richard Rogers + Gianfranco Franchini', year: '1977 年開館', question: '為什麼把結構、管線、電扶梯全部翻到建築外面？', description: '龐畢度中心將鋼結構、垂直動線和以顏色編碼的設備系統外露，把內部釋放為大跨距、少固定隔間的可變展覽平台。', observation: '實景先辨識紅、藍、綠、黃系統與外掛電扶梯，圖解再將外部服務帶、主跨與無柱展覽平面對齊。', readingGuide: ['看顏色：管線不再是視覺雜訊，而是可讀的功能編碼。', '看邊緣：結構與設備移向外圍，中央留給可變活動。', '看廣場：建築佔用一側基地，將另一側讓給城市公共生活。'], lenses: [{ id: 'insideout', name: '1. 內外翻轉', question: '管線外露真的會讓建築更容易維修嗎？', content: '外露使系統可識別、可接近並釋放室內空間，但同時增加防候、防火、交換節點與日常清潔的複雜度。', skillLink: { label: '製圖實習 · 設備整合', href: '/subjects/drafting' } }, { id: 'gerberette', name: '2. 巨型懸臂構件', question: '外掛結構如何換取室內無柱空間？', content: '樓層大跨梁把荷重傳到邊緣的鋼鑄懸臂構件與外柱，再透過拉杆平衡力矩，使中央展覽平面保持開放。', skillLink: { label: '工程力學 · 桁架與懸臂', href: '/subjects/mechanics' } }], takeaway: '讀高技建築時，不要把「外露」當作風格名詞就停下；要追問外移了哪些系統、內部因而獲得什麼彈性，又付出哪些維護代價。', photoCredit: { label: 'Wikimedia Commons', href: 'https://commons.wikimedia.org/wiki/Category:Centre_Georges_Pompidou', license: 'Creative Commons' },
  },
];
