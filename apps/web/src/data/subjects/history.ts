import { SubjectData } from '../types';

export const historyData: SubjectData = {
  slug: 'history',
  title: '歷史',
  category: '社會領域',
  color: 'amber-700',
  topics: [
    {
      slug: 'taiwan-history',
      title: '1. 台灣史：建築環境演變與本土樣式',
      desc: '深入探索台灣歷史發展脈絡、南島語族聚落、荷西明鄭堡壘、清領漢人傳統合院與寺廟、日治近代西洋歷史式樣與市區改正，以及戰後地域現代主義轉型。\n\n🔥 V6.0 考前秒殺秘訣：此核心概念統測出題率極高，建議善用圖解與鷹架提示反覆練習！',
      status: 'done',
      gradeLevel: 10,
      covered_question_ids: [],
      worked_examples: [
        {
          question: '【步驟化例題】台灣客家圍龍屋防禦構造分析：台灣傳統客家「圍龍屋」與「圍屋」建築，其外牆常開有極小之孔洞，此孔洞在傳統防禦上稱為何者？其主要功能為何？',
          difficulty: '基礎',
          steps: [ '"步驟 1：回顧客家移民歷史背景。清代台灣族群械鬥頻繁，客家聚落極注重防衛堡壘化。", "步驟 2：識別建築防衛構件。外牆開口極小，外寬內窄，稱為「銃眼（槍孔）」。", "步驟 3：總結功能。防範盜匪入侵，同時可由內部向外觀察與架槍射擊。"' ], 
          answer: '稱為「銃眼 (槍孔)」，主要功能為防禦敵襲與內向外射擊。'
        }
      ],
      "illustrations": ['context.webp', 'mechanism.webp', 'comparison.webp', 'step-by-step.webp', 'history-real-world.webp', 'history-infographic.webp'],
      concepts: [
        {
          heading: '一、荷西與明鄭時期的築城技術與空間佈局 (1624–1683)',
          body: '17世紀**大航海時代**，西洋海權強國荷蘭與西班牙相繼於台灣建立防衛據點，引進了<span className="text-rose-600 font-bold">歐洲重商主義</span>與<span className="text-indigo-600 font-bold">稜堡（<span className="text-indigo-600 font-bold">Bastion Trace</span>）</span>軍事築城技術。荷蘭人在大員興建**熱蘭遮城**（Fort Zeelandia，今安平古堡），於台江內海東岸建立**普羅民遮城**（Fort Provintia，今赤崁樓）；西班牙人則於雞籠建造**聖多明哥城**（Fort San Domingo，淡水紅毛城前身）。明鄭時期引入漢人屯墾制度，設立承天府與天興、萬年二縣，引進傳統<span className="text-teal-600 font-bold">儒家文教空間</span>，興建全臺首學「<span className="text-rose-600 font-bold">**台南孔廟**</span>」，建立<span className="text-rose-600 font-bold">左學右廟</span>格局，奠定漢人傳統聚落與街屋雛形。',
          steps: [
            '**荷西時期構造特徵**：採用熱帶紅磚、石灰、糯米汁、糖水與牡蠣殼灰（<span className="text-indigo-600 font-bold">三合土/糯米三合土</span>）作為膠結材料，築造外突**稜堡**以利交叉火網防禦。',
            '**明鄭時期空間轉型**：推動軍屯制度，劃分文教與行政核心，將閩南傳統<span className="text-teal-600 font-bold">儒家空間禮制</span>（如左學右廟、中軸對稱）植入府城空間骨架。'
          ],
          table: {
            headers: ['歷史時期', '統治政權', '核心空間與建築類型', '構造與防禦技術', '代表建築案例'],
            rows: [
              ['荷蘭時期 (1624-1662)', '荷蘭東印度公司 (VOC)', '軍事堡壘、商館、熱帶街町', '磚石構造、稜堡（Bastion）、三合土膠結', '熱蘭遮城 (安平古堡)、普羅民遮城 (赤崁樓)'],
              ['西班牙時期 (1626-1642)', '西班牙帝國', '防禦城堡、天主教堂', '石造堡壘、歐式防禦城牆', '聖多明哥城 (淡水紅毛城前身)、聖薩爾瓦多城'],
              ['明鄭時期 (1661-1683)', '明鄭東寧王國', '儒學府學、官署、傳統漢人聚落', '木構架、硬山頂、抬梁與穿斗混合結構', '台南孔廟 (全臺首學)、開元寺 (北園別館)']
            ]
          }
        },
        {
          heading: '二、清領時期閩粵移民與漢人傳統建築形制 (1683–1895)',
          body: '清領時期閩粵移民大量渡海來台，將祖籍地的民居與寺廟建築技術帶入台灣。台灣漢人傳統民居依規模與財力分為「<span className="text-rose-600 font-bold">**單伸腿**</span>」、「<span className="text-rose-600 font-bold">**三合院**（正身帶左右護龍）</span>」、「<span className="text-rose-600 font-bold">**四合院**</span>」及「<span className="text-rose-600 font-bold">**多落多護龍大宅**</span>」（如板橋林家花園、霧峰林家宮保第）。寺廟建築則具備高度工藝與宗教禮制，包含三川殿、正殿、後殿與過水廊，並盛行「<span className="text-rose-600 font-bold"><span className="text-rose-600 font-bold">對場作</span></span>」（兩組匠師分別負責左右兩側施工，相互比試技藝）。工法上區分為<span className="text-indigo-600 font-bold">閩南樣式</span>（燕尾脊、馬背/鞍軒、紅磚紅瓦）與<span className="text-teal-600 font-bold">客家樣式</span>（注重防禦、素雅白牆石砌）。',
          steps: [
            '**木構棟架系統**：分為「<span className="text-rose-600 font-bold">抬梁式</span>」（梁上立短柱，空間開闊適合大殿）與「<span className="text-indigo-600 font-bold">穿斗式</span>」（柱直接穿檁，用料省且抗震佳，適合民居屋架）。',
            '**裝飾工藝**：剪黏（以彩色陶片剪裁黏貼於屋脊）、木雕（員光、斗拱、吊筒）、彩繪（門神、棟架梁枋彩繪）與石雕。'
          ],
          table: {
            headers: ['建築構件 / 空間層次', '構造與工藝機能', '空間代表特徵與文化意涵'],
            rows: [
              ['燕尾脊 (Swallowtail Roof)', '屋脊兩端昂揚起翹如燕尾分叉', '傳統官紳、科舉中舉者或重要寺廟專用，象徵尊貴地位'],
              ['馬背 (Saddleback Wall)', '山牆頂端封火山牆曲線形制', '依金、木、水、火、土五行造型演變，常見於一般民居'],
              ['抬梁式棟架 (Post-and-Beam)', '柱頂置大梁，大梁上立瓜柱支承短梁', '室內柱少、空間寬敞大氣，多用於寺廟正殿與大宅正廳'],
              ['穿斗式棟架 (Column-and-Tie)', '落地柱密集，以穿枋橫向貫穿貫柱', '結構整體性強、抗震性佳、省材，廣泛應用於民居護龍'],
              ['對場作 (Battle of Craftsmen)', '左右兩側由不同匠師獨立設計施工', '展現匠師技藝競爭，形成左右風格微殊的奇趣工藝現象']
            ]
          }
        },
        {
          heading: '三、日治前期市區改正與近代西洋歷史式樣 (1895–1920)',
          body: '1895年日本統治台灣後，導入西洋近代都市計畫與衛生工程觀念，陸續頒布「<span className="text-rose-600 font-bold"><span className="text-rose-600 font-bold">台北市區改正計畫</span></span>」，拆除清代舊城牆並闢建寬廣的林蔭大道（三線路），建立棋盤式道路網與圓環。建築上引入**西洋歷史主義**（<span className="text-indigo-600 font-bold">Historicism</span>），特別是由日本建築師辰野金吾倡導的「<span className="text-rose-600 font-bold"><span className="text-indigo-600 font-bold">辰野風格</span></span>」（<span className="text-indigo-600 font-bold">Tatsuno Style</span>），以<span className="text-rose-600 font-bold">紅磚面外牆搭配白色水平石飾帶</span>、曼薩頂（<span className="text-indigo-600 font-bold">Mansard roof</span>）、塔樓與拱券為特徵。代表作品包括**台灣總督府**（今總統府）、原台南地方法院與台北驛。',
          steps: [
            '**市區改正規範**：強制商業街屋留設<span className="text-teal-600 font-bold">騎樓（亭仔腳）</span>，統一街路立面與下水道建設，提升公共衛生與公共運輸。',
            '**辰野風格特徵**：<span className="text-rose-600 font-bold">紅磚主體 + 白色水平石帶</span>（Red brick with white stone bands） + 典雅塔樓 + 拱券門廊。'
          ],
          table: {
            headers: ['日治發展階段', '主導建築風格', '結構材料與裝飾特徵', '代表建築與建築師'],
            rows: [
              ['初期 (1895-1907)', '木造擬洋風、木造洋風', '木造防震、熱帶陽台（Veranda Style）、疊蓆空間', '原台灣總督官邸（初期）、基隆港務合同廳舍'],
              ['中期 (1908-1929)', '西洋歷史式樣、辰野風格', '紅磚造、鋼筋混凝土、白石飾帶、古典柱式、塔樓', '台灣總督府 (野村一郎/長野宇平治/森山松之助)、原台南地方法院 (森山松之助)'],
              ['後期 (1930-1945)', '折衷主義、現代主義、帝國冠帽樣式', '鋼筋混凝土、國防色面磚（刮痕面磚）、簡化幾何裝飾、日式大屋頂', '台南林百貨 (梅澤捨次郎)、原高雄市役所 (井手薰設計帝國冠帽式樣)']
            ]
          }
        },
        {
          heading: '四、日治中後期折衷主義、帝國冠帽與街屋立面演變 (1920–1945)',
          body: '1920年代後，**現代主義**思潮席捲全球，古典歷史式樣漸被簡化。台灣建築呈現「<span className="text-rose-600 font-bold"><span className="text-indigo-600 font-bold">折衷主義（<span className="text-indigo-600 font-bold">Eclecticism</span>）</span></span>」與「<span className="text-rose-600 font-bold">**裝飾風藝術（<span className="text-indigo-600 font-bold">Art Deco</span>）**</span>」，強調幾何線條、洗石子工藝與簡化哥德飾帶（如台北郵局、台南林百貨）。1930年代二戰爆發前夕，日本推行「<span className="text-rose-600 font-bold"><span className="text-rose-600 font-bold">帝國冠帽樣式</span></span>」（<span className="text-indigo-600 font-bold">Imperial Crown Style</span>），即西洋現代鋼筋混凝土主體結構上方冠以**傳統東亞木造或琉璃大屋頂**（如原高雄市役所）。同時，民間商業街屋（**牌樓厝**）蓬勃發展，呈現泥塑巴洛克山牆與洗石子幾何紋樣裝飾。',
          steps: [
            '**牌樓厝（街屋）演變**：從清代木構亭仔腳街屋，演變為日治洗石子<span className="text-rose-600 font-bold">巴洛克山牆街屋</span>，再簡化為<span className="text-indigo-600 font-bold">裝飾風幾何面磚</span>街屋。',
            '**國防面磚與防空偽裝**：1930年代末期建築外牆廣泛採用<span className="text-teal-600 font-bold">防空刮痕面磚</span>（如國防綠、棕黃色面磚），避免反射陽光遭受空襲。'
          ],
          table: {
            headers: ['風格類型', '歷史背景與哲學', '建築語彙與材料', '典型代表作品'],
            rows: [
              ['折衷主義 (Eclecticism)', '擺脫古典三段式繁複裝飾，簡化線條', '洗石子、面磚、幾何圖騰、簡化柱式', '台北郵局 (栗山俊一)、台南林百貨 (梅澤捨次郎)'],
              ['帝國冠帽樣式 (Imperial Crown)', '日本帝國軍國主義強化東亞文化正統', '鋼筋混凝土主體 + 日式/東亞傳統大屋頂', '原高雄市役所 (井手薰)、原高雄驛 (清水組)'],
              ['民間街屋牌樓厝 (Shop Houses)', '市區改正計畫拓寬道路後之立面改造', '泥塑巴洛克山牆、姓氏商號徽章、洗石子工藝', '大溪老街、三峽老街、湖口老街、迪化街']
            ]
          }
        },
        {
          heading: '五、戰後中國宮殿樣式與現代主義轉型 (1945–1980)',
          body: '戰後初期，政府倡導「<span className="text-rose-600 font-bold"><span className="text-rose-600 font-bold">中國宮殿式樣</span></span>」（如圓山大飯店、中正紀念堂），以鋼筋混凝土模擬古典木構大屋頂與斗拱彩繪，展現政治正統意象。1960年代起，王大閎、陳其寬、貝聿銘等建築師將西方**現代主義**結構概念與中國傳統空間精神融合，創作了**國父紀念館**、**東海大學路思義教堂**等經典作品，開創了<span className="text-indigo-600 font-bold">中國**現代主義**</span>的新頁。',
          steps: [
            '**宮殿樣式**：以RC結構模擬木構大屋頂、琉璃瓦與斗拱，強調<span className="text-rose-600 font-bold">政治正統與紀念性</span>。',
            '**中國現代主義**：王大閎（國父紀念館，簡化大屋頂與懸臂柱）、貝聿銘/陳其寬（路思義教堂，<span className="text-indigo-600 font-bold">雙曲面薄殼結構</span>）。'
          ],
          table: {
            headers: ['戰後建築流派', '設計核心精神', '結構技術與材料', '代表建築師與作品'],
            rows: [
              ['北方宮殿式樣', '政治正統宣示、傳統圖騰重構', '鋼筋混凝土模仿木構大屋頂、琉璃瓦、斗拱彩繪', '楊卓成 (圓山大飯店、中正紀念堂)'],
              ['中國現代主義', '西方現代主義構造 + 東方空間意意轉化', 'RC懸臂梁、拋物線薄殼、簡化幾何線條', '王大閎 (國父紀念館)、貝聿銘/陳其寬 (路思義教堂)'],
              ['前衛現代主義', '自由曲面、雕塑感造型與機能結合', '清水混凝土、塑形薄殼、有機曲線', '修澤蘭 (衛理女中、聖心女中)、陳仁和 (高雄高雄中學體育館)']
            ]
          }
        },
        {
          heading: '六、地域性現代主義、宜蘭厝運動與當代建築 (1980–迄今)',
          body: '1980年代後，<span className="text-indigo-600 font-bold">**地域性****現代主義**（<span className="text-indigo-600 font-bold">Regional Modernism</span>）</span>興起，如「<span className="text-rose-600 font-bold">**宜蘭厝運動**</span>」探索亞熱帶氣候適應、本土磚石構造與綠建築設計，黃聲遠與田中央工作群更深化了建築與自然景觀的共生關係。當代台灣建築注重<span className="text-teal-600 font-bold">永續綠建築</span>、氣候韌性與在地歷史紋理重組。',
          steps: [
            '**地域現代主義**：宜蘭厝、田中央工作群，強調在地脈絡、<span className="text-rose-600 font-bold">防雨遮陽</span>與環境融和。',
            '**當代綠建築與再生**：結合太陽能、雨水回收、木構造與<span className="text-indigo-600 font-bold">舊建築再利用</span>。'
          ],
          table: {
            headers: ['當代發展方向', '空間思潮與實踐', '關鍵建築特徵', '代表案例'],
            rows: [
              ['宜蘭厝運動', '探索台灣亞熱帶風土民居新樣式', '大斜屋頂防雨、深出簷遮陽、高床通風、本土洗石子/紅磚', '宜蘭厝一期與二期作品、黃聲遠作品'],
              ['田中央工作群', '建築與自然地貌、都市公共生活無縫融合', '鋼構造、鋼筋混凝土、開放性半戶外廊道、景觀共生', '羅東文化工場、津梅棧道、宜蘭縣政府'],
              ['永續當代綠建築', '國際現代主義 + 台灣EEWH九大指標', '雙層呼吸外牆、太陽能光電、雨水滯洪生態池', '台北市立圖書館北投分館 (九典聯合)、臺大社會科學院 (伊東豊雄)']
            ]
          }
        }
      ],
      practices: [
        {
          difficulty: '基礎',
          question: '在台灣清領時期傳統閩南民居建築中，「抬梁式」與「穿斗式」木構造棟架在結構傳力與空間使用上有何主要差異？',
          steps: [
            '**步驟一**：分析抬梁式（Post-and-Beam System）結構。柱上立梁，梁上疊置短柱與次梁，柱距較大，室內無落地柱，提供開闊之廳堂空間，適合用於寺廟大殿與正廳。',
            '**步驟二**：分析穿斗式（Column-and-Tie System）結構。落地柱較密集，用穿枋穿過木柱形成檁木支承架構，用料較小且整體框架性極佳，具有良好抗震性，適合一般民居與護龍。',
            '**步驟三**：綜合比較兩者適應性與空間效益。'
          ],
          answer: '抬梁式棟架柱少、空間開闊大氣，適用於大殿與正廳；穿斗式棟架落地柱密、結構整體抗震性佳且節省木材，廣泛應用於護龍與一般民居。'
        },
        {
          difficulty: '中等',
          question: '日治時期推行的「市區改正」計畫，對台灣傳統街屋（牌樓厝）的空間形態與立面樣式產生了哪些深遠影響？',
          steps: [
            '**步驟一**：指出空間規制影響。市區改正強制實施棋盤式街道拓寬與騎樓（亭仔腳）退縮留設，確定了街屋面寬狹窄、縱深極長的長條形格局。',
            '**步驟二**：分析立面材料與風格轉型。立面由清代木構山牆轉變為日治中期洗石子、泥塑巴洛克山牆（如大溪、湖口老街），再演變為1930年代裝飾風藝術（Art Deco）幾何面磚。',
            '**步驟三**：說明公共衛生與設施改善。導入下水道系統與防火牆規範，完成了台灣現代都市街廓的建立。'
          ],
          answer: '市區改正強制留設騎樓與拓寬道路，形成了長條形街屋格局，並推動立面由傳統木構造轉向洗石子、巴洛克泥塑及裝飾風幾何面磚，奠定了台灣現代商業街廓的構造與空間基礎。'
        },
        {
          difficulty: '進階',
          question: '請比較戰後王大閎設計之「國父紀念館」與貝聿銘/陳其寬設計之「東海大學路思義教堂」，兩者在「現代主義結構技術與傳統中國符號/精神結合」上的策略異同。',
          steps: [
            '**步驟一**：分析國父紀念館（王大閎）。採用鋼筋混凝土框架結構，以簡化的古典大屋頂飛簷意象轉化傳統宮殿，翹角處以現代懸臂樑與結構節點處理，空間保持極簡與嚴謹中軸對稱。',
            '**步驟二**：分析路思義教堂（貝聿銘/陳其寬）。採用現代RC雙曲面薄殼（Hyperbolic Paraboloid Shell）結構，完全摒棄傳統屋頂與斗拱符號，卻透過四片薄殼分離交會產生的天窗光束與祈手姿態，深刻體現東方天人合一與宗教神聖意象。',
            '**步驟三**：比較歸納兩者哲學。國父紀念館為「古典構件與符號之現代極簡抽象化」；路思義教堂則為「構造力學形體與傳統精神意境之隱喻昇華」。'
          ],
          answer: '國父紀念館採取將傳統宮殿大屋頂與飛簷進行現代鋼筋混凝土構造之極簡幾何抽象化；路思義教堂則完全脫離傳統構件符號，利用現代雙曲面薄殼力學結構，形塑具東方神韻與光影意境的神聖空間。'
        },
        {
          difficulty: '深度綜合',
          question: '試分析荷蘭東印度公司於大員興建之「熱蘭遮城」與西班牙於淡水建造之「聖多明哥城」，在構造材料、防禦幾何學與熱帶氣候適應上之技術特徵。',
          steps: [
            '**步驟一**：材料檢視。兩者皆採用歐洲引進之熱帶紅磚、石灰、糯米汁與糖水混和之三合土，抵抗台灣高溫多濕與鹽霧侵蝕。',
            '**步驟二**：防禦幾何。熱蘭遮城採用標準歐洲稜堡（Bastion Trace）幾何設計，設有外突四角稜堡以消除火槍射擊死角。',
            '**步驟三**：熱帶適應。堡壘內部配置厚重磚石外牆與通風拱券，提供物資儲藏與防禦掩體機能。'
          ],
          answer: '熱蘭遮城採用歐式外突四角稜堡幾何學以消除射擊死角，材料運用紅磚與糯米三合土膠結，展現在大航海時代歐洲重商主義堡壘工法對台灣熱帶氣候與軍事防禦之適應。'
        },
        {
          difficulty: '實務案例',
          question: '在宜蘭厝運動中，建築師如何利用「斜屋頂」、「大出簷」與「高床構造」回應台灣東北部多雨與濕熱之氣候條件？',
          steps: [
            '**步驟一**：分析雨水排除。大傾角斜屋頂能迅速導引宜蘭地區豐沛之冬季地形雨與夏季颱風暴雨。',
            '**步驟二**：分析遮陽與壁面防護。大深度的出簷能避免陽光直射牆面，並防止豪雨濺濕牆體與開口。',
            '**步驟三**：分析高床防潮通風。將建築底層架高（高床）使空氣於底層流動，隔絕地表濕氣並促進對流順暢。'
          ],
          answer: '斜屋頂能迅速排水，大出簷提供遮陽並保護外牆不受雨水沖刷，高床構造則能隔絕地表濕氣並增強建築底部空氣對流通風。'
        },
        {
          difficulty: '歷史風格識別',
          question: '日治中期（1908–1920）由森山松之助等建築師主導之「辰野風格（Tatsuno Style）」公共建築，具備哪些關鍵立面視覺語彙？',
          steps: [
            '**步驟一**：觀察外牆材料與配色。主體採用紅磚外牆，搭配水平連續之白色石材飾帶（Red brick with white stone bands）。',
            '**步驟二**：觀察頂層與屋頂。常用曼薩頂（Mansard Roof）或中央高聳塔樓以形塑公共權威感。',
            '**步驟三**：觀察門口與窗框。入口處常設置古典柱式門廊與圓拱/幾何拱券。'
          ],
          answer: '辰野風格關鍵語彙為：紅磚主體外牆搭配白色水平石飾帶、曼薩頂或中央中央高塔、以及古典柱式拱券門廊。'
        }
      ],
      practice: {
        difficulty: '基礎',
        question: '在台灣清領時期傳統閩南民居建築中，「抬梁式」與「穿斗式」木構造棟架在結構傳力與空間使用上有何主要差異？',
        steps: [
          '**步驟一**：分析抬梁式（Post-and-Beam System）結構。柱上立梁，梁上疊置短柱與次梁，柱距較大，室內無落地柱，提供開闊之廳堂空間，適合用於寺廟大殿與正廳。',
            '**步驟二**：分析穿斗式（Column-and-Tie System）結構。落地柱較密集，用穿枋穿過木柱形成檁木支承架構，用料較小且整體框架性極佳，具有良好抗震性，適合一般民居與護龍。',
            '**步驟三**：綜合比較兩者適應性與空間效益。'
        ],
        answer: '抬梁式棟架柱少、空間開闊大氣，適用於大殿與正廳；穿斗式棟架落地柱密、結構整體抗震性佳且節省木材，廣泛應用於護龍與一般民居。'
      }
    },
    {
      slug: 'chinese-history',
      title: '2. 中國史：古代建築形制、工藝與《營造法式》',
      desc: '詳細剖析中國古代建築發展脈絡，從先秦夯土高台、唐代大木作氣魄、北宋《營造法式》材分制模組化，到明清紫禁城宮殿禮制與江南文人園林造景哲學。\n\n🔥 V6.0 考前秒殺秘訣：此核心概念統測出題率極高，建議善用圖解與鷹架提示反覆練習！',
      status: 'done',
      gradeLevel: 10,
      covered_question_ids: [],
      worked_examples: [
        {
          question: '【步驟化例題】宋代《營造法式》材份制：宋代官方建築規範《營造法式》中，將木構架之「材」分為八等。請問「材份制」在中國古代建築標準化上有何重大意義？',
          difficulty: '中等',
          steps: [ '"步驟 1：理解「材」的定義。「材」為斗拱拱截面之高與厚，以此作為整座建築構件比例之模數 (Module)。", "步驟 2：分析材份制的作用。根據建築等級選擇材等，所有梁柱斗拱之尺寸均為「材」的倍數（分）。", "步驟 3：總結歷史意義。實現了中國古代木結構建築之模數化、標準化與預製化設計。"' ], 
          answer: '建立以「材」為模數的標準化制度，使建築構件具備預製化、比例嚴謹與等級規範。'
        }
      ],
      "illustrations": ['context.webp', 'mechanism.webp', 'comparison.webp', 'step-by-step.webp', 'history-real-world.webp', 'history-infographic.webp'],
      concepts: [
        {
          heading: '一、先秦至漢唐建築發展與高台木構演變',
          body: '中國傳統建築以木構造為核心骨幹。先秦與秦漢時期，盛行「<span className="text-rose-600 font-bold">**夯土高台建築**</span>」，將建築基座築成巨大的夯土台塊，台上興建木構樓閣。隋唐時期，木構技術達到巔峰，以山西五台山**佛光寺大殿**（857年）與南禪寺大殿為代表。唐代建築特徵為：斗拱<span className="text-rose-600 font-bold">雄大碩巨</span>、出檐深遠、柱子具傾斜之「<span className="text-rose-600 font-bold">**側腳**</span>」與「<span className="text-rose-600 font-bold">**生起**</span>」、屋頂坡度平緩舒展，呈現大氣磅礡之雄渾風格。',
          steps: [
            '**先秦漢代**：夯土台基、高台樓閣、半穴居與干欄式建築演變。',
            '**隋唐大木作**：斗拱高大（斗拱高度可達柱高1/2~1/3）、出檐達3-4公尺、屋頂坡度平緩（<span className="text-indigo-600 font-bold">舉折平緩</span>）。'
          ],
          table: {
            headers: ['朝代', '結構特徵', '斗拱比例與造型', '代表性建築遺構'],
            rows: [
              ['秦漢時期', '夯土高台、重樓復道、陶瓦鋪設', '直斗斗拱、造型簡樸碩大', '阿房宮遺址、漢代畫像磚高台樓閣'],
              ['隋唐時期 (618-907)', '大木作成熟、柱網嚴謹、側腳生起', '斗拱碩大雄厚、出檐深遠、單材斷面比約 3:2', '山西五台山佛光寺大殿、南禪寺大殿'],
              ['宋遼金時期 (960-1279)', '《營造法式》模組化、典雅精細', '斗拱比例相對縮小、結構與裝飾兼具', '山西應縣木塔、正定隆興寺摩尼殿']
            ]
          }
        },
        {
          heading: '二、北宋《營造法式》與材分制模組化設計',
          body: '北宋崇寧二年（1103年），李誡編纂出版《營造法式》，為中國古代官方頒布規範建築設計、工料預算與施工標準之集大成專著。其核心創舉為確立「<span className="text-rose-600 font-bold"><span className="text-rose-600 font-bold">材分制度</span></span>」（模組化/Modularity）。將大木作木材斷面標準分為一等材至八等材，以「<span className="text-rose-600 font-bold">材</span>」之高度分為15「<span className="text-rose-600 font-bold">分</span>」，寬度為10「<span className="text-rose-600 font-bold">分</span>」（高寬比 **3:2**），所有建築構件之比例大小皆以「<span className="text-rose-600 font-bold">材分</span>」為基準進行級數放大或縮小。',
          steps: [
            '**一等材**：最高等級，用於九間以上宮殿或大殿。',
            '**材分控制**：材高15分、材厚10分；以「<span className="text-indigo-600 font-bold">分</span>」作為無單位之比例模數，實現預製化與工料控管。'
          ],
          table: {
            headers: ['材等 (Grade of Material)', '材高 (吋)', '材厚 (吋)', '適用建築規模與等級'],
            rows: [
              ['一等材 (最高級)', '9.0 吋 (15分)', '6.0 吋 (10分)', '面闊九間至十一間之殿堂大殿'],
              ['三等材', '7.5 吋 (15分)', '5.0 吋 (10分)', '面闊五間至七間之殿堂、廳堂'],
              ['六等材', '6.0 吋 (15分)', '4.0 吋 (10分)', '面闊三間至五間之小殿、亭台'],
              ['八等材 (最低級)', '4.5 吋 (15分)', '3.0 吋 (10分)', '小型亭榭或建築內部局部構件']
            ]
          }
        },
        {
          heading: '三、明清紫禁城宮殿禮制與官式建築等級劃定',
          body: '明清時期，建築技術趨向高度規範化與符號化。清工部頒布《工程做法則例》，將宋代的材分制轉化為「<span className="text-rose-600 font-bold">**斗口制**</span>」（以斗口寬度為模數）。宮殿建築嚴格遵循封建禮制，空間採嚴謹中軸對稱。屋頂形式劃分為明確的等級體系：<span className="text-rose-600 font-bold">庑殿頂 > 歇山頂 > 懸山頂 > 硬山頂</span>。太和殿採用最高等級之「<span className="text-rose-600 font-bold">**重檐庑殿頂**</span>」，搭配黃琉璃瓦、十隻脊獸與九五之尊間數。',
          steps: [
            '**屋頂等級**：重檐庑殿頂 > 重檐歇山頂 > 單檐庑殿頂 > 單檐歇山頂 > 懸山頂 > 硬山頂。',
            '**色彩等級**：<span className="text-indigo-600 font-bold">黃琉璃瓦</span>（皇帝專用） > 青綠琉璃瓦（王府/宗教） > 灰瓦（庶民）。'
          ],
          table: {
            headers: ['屋頂形式 (Roof Style)', '幾何外觀與脊數', '禮制等級', '代表建築'],
            rows: [
              ['庑殿頂 (Hip Roof)', '五脊四坡，四面落水', '最高等級（皇宮大殿）', '紫禁城太和殿 (重檐庑殿頂)'],
              ['歇山頂 (Half-hipped)', '九脊殿，上半部懸山、下半部庑殿', '次高等級（次要大殿/官署）', '紫禁城保和殿、天安門'],
              ['懸山頂 (Gable Roof with overhang)', '五脊二坡，屋頂挑出山牆之外', '中等級（一般官署/富商大宅）', '江南民居、文人住宅正廳'],
              ['硬山頂 (Gable Roof inside wall)', '五脊二坡，山牆封頂擋住屋檐', '一般民居等級（防護防火）', '北方傳統四合院民居']
            ]
          }
        },
        {
          heading: '四、江南文人園林造景哲學與疊石理水工法',
          body: '相對於北方皇園之宏偉對稱，江南文人私家園林（如蘇州拙政園、留園、網師園）強調「<span className="text-rose-600 font-bold"><span className="text-rose-600 font-bold">師法自然</span></span>」、「<span className="text-rose-600 font-bold">雖由人作，宛自天開</span>」之意境。園林設計融合詩情畫意，打破嚴謹中軸對稱，運用巧於因借、精在體宜之手法。造景工藝核心包含：**疊石**（運用太湖石、黃石堆疊假山）、**理水**（曲折池岸、聚分有致）、<span className="text-indigo-600 font-bold">漏窗框景</span>與**借景**（將園外景物引入園內）。',
          steps: [
            '**借景 (Borrowing Scenery)**：將園外遠山（如遠香堂借景北寺塔）或天空景物引入視線。',
            '**對景與框景**：利用門洞（月洞門）、漏窗、廊道形成畫框，隨步移景異。',
            '**疊石理水**：太湖石講究「<span className="text-teal-600 font-bold">瘦、漏、透、皺</span>」四大審美標準。'
          ],
          table: {
            headers: ['造景手法 (Landscaping Method)', '工法機制與構件', '空間藝術效果與哲學視角'],
            rows: [
              ['借景 (Borrowing Scenery)', '引園外塔影、山峰或鄰園景物入視線', '擴大園林視覺深度，打破園牆空間封閉感'],
              ['框景 (Framing Scenery)', '利用門洞、窗框、柱廊幾何邊框界定視野', '將自然景致轉化為如立體畫卷之視覺焦點'],
              ['障景 (Blocking Scenery)', '入口處置假山、影壁或照壁遮蔽直線視野', '創造「曲徑通幽」、避免一眼望穿之空間張力'],
              ['漏窗透景 (Leaking Window)', '外牆嵌花格鏤空磚雕或石雕窗格', '使光影穿透、隔而不絕，增添層次豐富度']
            ]
          }
        },
        {
          heading: '五、傳統民居多樣性與地域風土適應比較',
          body: '中國廣袤土地因氣候、地形與文化差異，孕育出極具地域特色的民居形態。北方**四合院**強調日照與防風防沙；客家**土樓**（福建土樓）強調禦敵聚族而居；徽派建築以<span className="text-rose-600 font-bold">馬頭牆</span>防火與白牆黑瓦為標誌；黃土高原**窯洞**則利用土層熱阻實現冬暖夏涼。',
          steps: [
            '**北方四合院**：坐北朝南、中軸對稱、坎宅巽門、注重私密性與冬日日照。',
            '**徽派馬頭牆**：階梯狀<span className="text-indigo-600 font-bold">封火山牆</span>，密集的村落中有效防止火災蔓延。'
          ],
          table: {
            headers: ['民居類型', '地理區域', '主要構造材料', '風土適應與機能特徵'],
            rows: [
              ['北京四合院', '華北平原', '磚木構造、灰瓦面牆', '坐北朝南防禦冬季寒風、中庭採光、防沙塵'],
              ['客家土樓 (圓樓/方樓)', '閩西贛南粵東山區', '生土夯築厚牆、杉木梁架', '單一出口防禦性極強、聚族共同生活、通風良好'],
              ['徽派民居', '安徽皖南、江西', '磚木石三雕、馬頭牆、天井', '馬頭牆防火防風、天井採光排水（四水歸堂）'],
              ['黃土高原窯洞', '西北陝甘寧地區', '黃土原生土層開掘', '利用土壤超高熱阻（熱惰性），實現冬暖夏涼']
            ]
          }
        },
        {
          heading: '六、中國傳統建築色彩學與圖騰隱喻',
          body: '官式建築色彩受到五行學說與等級制度嚴格約束。黃色屬土位於中央代表帝王；紅色象徵尊貴與吉祥；青綠色代表陰涼與木育。彩繪工藝分為**和璽彩繪**（最高等級，金龍金鳳）、**旋子彩繪**（官署大殿，幾何旋花）與<span className="text-rose-600 font-bold">蘇式彩繪</span>（江南園林，山水花鳥圖案）。',
          steps: [
            '**和璽彩繪**：枋心與箍頭全用金箔繪製金龍金鳳，專用於皇家主要大殿。',
            '**旋子彩繪**：以帶漩渦狀之<span className="text-indigo-600 font-bold">幾何花紋</span>為特徵，適用於一般官署與副殿。'
          ],
          table: {
            headers: ['彩繪類型', '圖騰紋樣特徵', '用金量與工法', '適用建築等級'],
            rows: [
              ['和璽彩繪 (最高級)', '龍鳳圖案為主，枋心繪雙龍戲珠', '大量使用貼金工藝，金碧輝煌', '皇宮主要大殿 (如太和殿、乾清宮)'],
              ['旋子彩繪', '圓形漩渦狀「旋花」為核心幾何紋樣', '按用金量分為金琢墨、雄黃玉等', '皇家次要宮殿、高級官署、重要寺廟'],
              ['蘇式彩繪 (包袱彩繪)', '畫框內繪寫意山水、花鳥、人物故事', '用色豐富自然，少用大面積金箔', '江南園林、皇宮後苑亭台樓閣']
            ]
          }
        }
      ],
      practices: [
        {
          difficulty: '基礎',
          question: '在北宋李誡編纂之《營造法式》中，「材分制度」是如何定義材之高寬斷面比例？其在建築工料預算與預制化施工上有何重要價值？',
          steps: [
            '**步驟一**：說明材之高寬比例。以「材」為標準模量，材高為 15 分，材厚（寬）為 10 分，高寬比固定為 3:2。',
            '**步驟二**：說明八等材分類。依建築規模分為一等材至八等材，決定屋架、斗拱與梁柱尺寸。',
            '**步驟三**：分析工料預算與預製價值。材分制度確立無單位之比例模數，使木構件可以在工場進行標準化預製生產，並使官方能精準預算木材消耗與人力工時。'
          ],
          answer: '材之斷面高寬比固定為 15分 : 10分 (3:2)。其價值在於建立了中國古代建築之標準模組化與預製化體系，精準掌控材料預算與施工品質。'
        },
        {
          difficulty: '中等',
          question: '請比較清代官式建築屋頂形式中「庑殿頂」與「歇山頂」在幾何結構與禮制等級上之差異，並舉例其代表作品。',
          steps: [
            '**步驟一**：幾何結構分析。庑殿頂為五脊四坡，四面斜坡落水；歇山頂為九脊殿，上半部為懸山（雙坡山牆），下半部為四坡庑殿檐。',
            '**步驟二**：禮制等級比較。庑殿頂為皇權專用最高等級；歇山頂等級次之，常用於次要大殿、官署或重要門樓。',
            '**步驟三**：代表作品舉例。紫禁城太和殿為重檐庑殿頂；保和殿與天安門則為重檐歇山頂。'
          ],
          answer: '庑殿頂為五脊四坡，等級最高（如太和殿）；歇山頂為九脊殿（上半懸山下半庑殿），等級次之（如保和殿）。'
        },
        {
          difficulty: '進階',
          question: '蘇州文人園林在空間造景中常運用「借景」、「框景」與「障景」三種手法。請詳細說明這三種工法之空間機制與視覺藝術效果。',
          steps: [
            '**步驟一**：借景。將園外之遠山、塔影或天空景致引入園內視線（如拙政園借景北寺塔），無限擴展有限空間之視覺深度。',
            '**步驟二**：框景。利用月洞門、方形窗框或廊柱邊框，將自然庭園景色裁切框取為立體畫卷。',
            '**步驟三**：障景。於園林入口處設置假山、照壁或曲廊，擋住直線視野，創造「曲徑通幽」、漸入佳境之空間懸念。'
          ],
          answer: '借景擴充視覺深度；框景將風景畫框化；障景遮擋直視視野創造曲徑通幽之空間層次。'
        },
        {
          difficulty: '深度綜合',
          question: '試比較唐代大木作（如山西五台山佛光寺大殿）與清代官式大木作（如紫禁城宮殿）在斗拱機能與屋頂坡度上之演變特徵。',
          steps: [
            '**步驟一**：斗拱機能演變。唐代斗拱碩大（佔柱高1/3），具備極高之結構傳力與挑檐機能；清代斗拱比例顯著縮小，結構傳力作用減弱，裝飾符號性質增強。',
            '**步驟二**：屋頂坡度演變。唐代屋頂坡度平緩（舉折平緩）、出檐深遠雄厚；清代屋頂坡度陡峭（舉架陡峭）、出檐相對較短。',
            '**步驟三**：模組制度演變。唐宋採用「材分制」，清代演變為「斗口制」。'
          ],
          answer: '唐代斗拱碩大且承載真實結構荷重、屋頂坡度平緩出檐深遠；清代斗拱縮小趨向裝飾化、屋頂舉架陡峭。'
        },
        {
          difficulty: '實務案例',
          question: '安徽皖南徽派民居之「馬頭牆（封火山牆）」在建築構造上有何實務機能？其「四水歸堂」的天井設計又具備哪些風土環境適應優勢？',
          steps: [
            '**步驟一**：馬頭牆機能。徽派村落房屋密度極高，高出屋面之階梯狀馬頭牆能在鄰棟火災時有效阻隔火勢蔓延（封火牆），同時兼具防風機能。',
            '**步驟二**：四水歸堂機能。四面屋頂斜坡向中央天井傾斜，雨水匯集流入天井下水槽，象徵「財不外流」；實務上提供室內採光、自然對流通風與雨水收集利用。'
          ],
          answer: '馬頭牆具高出屋面封火防蔓延機能；四水歸堂天井則提供密集的徽派民居優良之採光、對流通風與雨水匯集機能。'
        },
        {
          difficulty: '歷史工藝',
          question: '太湖石在中國傳統園林假山疊石工藝中，講究哪四大審美標準？請分別解釋其意涵。',
          steps: [
            '**步驟一**：瘦 (Slenderness)。石體造型挺拔苗條、線條清秀。',
            '**步驟二**：漏 (Leakage/Porosity)。石體內部溝槽通透，雨水穿流順暢。',
            '**步驟三**：透 (Transparency)。石體透光通孔，具穿透感與空靈度。',
            '**步驟四**：皺 (Wrinkling)。石體表面紋理褶皺豐富，富於歲月風化之質感變化。'
          ],
          answer: '四大標準為「瘦、漏、透、皺」，分別代表苗條姿態、溝槽通水、透光通孔與表面褶皺質感。'
        }
      ],
      practice: {
        difficulty: '基礎',
        question: '在北宋李誡編纂之《營造法式》中，「材分制度」是如何定義材之高寬斷面比例？其在建築工料預算與預制化施工上有何重要價值？',
        steps: [
          '**步驟一**：說明材之高寬比例。以「材」為標準模量，材高為 15 分，材厚（寬）為 10 分，高寬比固定為 3:2。',
            '**步驟二**：說明八等材分類。依建築規模分為一等材至八等材，決定屋架、斗拱與梁柱尺寸。',
            '**步驟三**：分析工料預算與預製價值。材分制度確立無單位之比例模數，使木構件可以在工場進行標準化預製生產，並使官方能精準預算木材消耗與人力工時。'
        ],
        answer: '材之斷面高寬比固定為 15分 : 10分 (3:2)。其價值在於建立了中國古代建築之標準模組化與預製化體系，精準掌控材料預算與施工品質。'
      }
    },
    {
      slug: 'world-history',
      title: '3. 西洋史：從古典、哥德、文藝復興到現代主義與當代建築',
      desc: '縱覽西洋建築史發展脈絡，從古希臘羅馬柱式與拱券突破、中世紀哥德飛扶壁與光影神聖空間、文藝復興人文主義理性、巴洛克動態戲劇張力、十九世紀工業革命新材料，到現代主義四位大師與當代數位參數化建築。\n\n🔥 V6.0 考前秒殺秘訣：此核心概念統測出題率極高，建議善用圖解與鷹架提示反覆練習！',
      status: 'done',
      gradeLevel: 10,
      covered_question_ids: [],
      worked_examples: [
        {
          question: '【步驟化例題】哥德式教堂結構力學解析：西洋中世紀「哥德式教堂（如巴黎聖母院）」能開闢巨大彩色玻璃花窗並建造高聳穹頂，主要依賴哪兩項結構力學創新？',
          difficulty: '基礎',
          steps: [ '"步驟 1：對比羅馬式建築。羅馬式採用半圓拱與厚重牆體，開窗極小。", "步驟 2：識別哥德式結構突破。1. 尖拱 (Pointed Arch) 減少側向推力；2. 飛扶壁 (Flying Buttress) 將穹頂側推力引導至室外獨立墩柱。", "步驟 3：得出結論。尖拱與飛扶壁。"' ], 
          answer: '「尖拱 (Pointed Arch)」與「飛扶壁 (Flying Buttress)」。'
        }
      ],
      "illustrations": ['context.webp', 'mechanism.webp', 'comparison.webp', 'step-by-step.webp', 'history-real-world.webp', 'history-infographic.webp'],
      concepts: [
        {
          heading: '一、古希臘與古羅馬建築：古典柱式禮制與拱券結構突破',
          body: '古希臘建築確立了西洋古典建築之基石，創立三大柱式（<span className="text-indigo-600 font-bold">Order</span>）：**多立克**（Doric，雄渾樸素）、**愛奧尼**（Ionic，優雅捲渦）與**柯林斯**（Corinthian，華麗毛茛葉）。希臘建築以<span className="text-rose-600 font-bold">梁柱結構（<span className="text-indigo-600 font-bold">Post-and-Lintel</span>）</span>為主，強調完美的幾何黃金比例與人體尺度（如帕德嫩神殿）。古羅馬則發明了「<span className="text-rose-600 font-bold"><span className="text-indigo-600 font-bold">拱券結構（Arch & Vault）</span></span>」與天然混凝土（<span className="text-indigo-600 font-bold">PoZZolana</span>），創造出萬神殿（Pantheon，43.3米無筋混凝土穹頂）與羅馬競技場（<span className="text-indigo-600 font-bold">Colosseum</span>），實現了大跨度內部空間之革命。',
          steps: [
            '**希臘梁柱系統**：黃金分割比 (1:1.618)、柱身微凸（Entasis）修正視覺錯覺。',
            '**羅馬拱券體系**：筒形拱（Barrel Vault）、交叉拱（Groin Vault）與<span className="text-teal-600 font-bold">穹頂（Dome）</span>。'
          ],
          table: {
            headers: ['古典風格', '結構系統', '核心柱式 / 構件', '空間哲學與代表作品'],
            rows: [
              ['古希臘建築', '梁柱構造 (Post-and-Lintel)', '多立克、愛奧尼、柯林斯柱式', '追求外觀幾何比例和諧與雕塑感 (雅典帕德嫩神殿)'],
              ['古羅馬建築', '拱券 + 混凝土構造', '疊柱式 (Tiered Orders)、拱頂、穹頂', '追求宏偉實用的內部大跨度公共空間 (萬神殿、羅馬競技場)']
            ]
          }
        },
        {
          heading: '二、中世紀拜占庭與哥德式建築：拱頂技術與光影神聖空間',
          body: '拜占庭建築發明了「<span className="text-rose-600 font-bold"><span className="text-rose-600 font-bold">帆拱（<span className="text-indigo-600 font-bold">Pendentive</span>）</span></span>」技術，成功將圓形穹頂架設於方形平面之上（代表作：聖索菲亞大教堂）。12世紀起源於法國的**哥德式建築**（<span className="text-indigo-600 font-bold">Gothic Architecture</span>），則實現了結構力學與宗教精神之巔峰結合。哥德建築三大核心構件為：**尖拱（<span className="text-indigo-600 font-bold">Pointed Arch</span>）**、**肋骨拱頂（<span className="text-indigo-600 font-bold">Ribbed Vault</span>）**與外挑之**飛扶壁（<span className="text-indigo-600 font-bold">Flying Buttress</span>）**。這使外牆得以解脫承重機能，開設高聳彩繪鑲嵌玻璃窗（<span className="text-indigo-600 font-bold">Rose Window</span>），營造聖光降臨之神聖氛圍。',
          steps: [
            '**帆拱技術**：轉接方形基座與圓形穹頂之三角曲面轉角構造。',
            '**哥德力學三要素**：<span className="text-indigo-600 font-bold">尖拱</span>降低側推力 + <span className="text-indigo-600 font-bold">肋骨拱頂</span>集體傳力 + <span className="text-indigo-600 font-bold">飛扶壁</span>將側向推力引至室外扶壁柱。'
          ],
          table: {
            headers: ['建築式樣', '核心結構突破', '牆體與採光特徵', '代表建築'],
            rows: [
              ['拜占庭式 (Byzantine)', '帆拱 (Pendentive) 支承大穹頂', '厚重牆體、內部鑲嵌金箔馬賽克壁畫', '伊斯坦堡聖索菲亞大教堂 (Hagia Sophia)'],
              ['羅馬式 (Romanesque)', '重型筒形拱與厚重牆體', '牆體厚重、開窗狹小、氣氛沉靜', '法國圖盧茲聖塞寧教堂'],
              ['哥德式 (Gothic)', '尖拱 + 肋骨拱 + 飛扶壁', '薄牆大窗、高聳彩繪玫瑰花窗、垂直飛昇感', '巴黎聖母院、沙特爾大教堂、科隆大教堂']
            ]
          }
        },
        {
          heading: '三、文藝復興與巴洛克/洛可可：人文主義理性與動態戲劇張力',
          body: '15世紀義大利文藝復興（<span className="text-indigo-600 font-bold">Renaissance</span>）復興古典希臘羅馬理性，Brunelleschi 建造佛羅倫斯大教堂聖母百花大教堂穹頂，Alberti 與 Palladio 確立<span className="text-rose-600 font-bold">數學幾何比例與透視學規範</span>（如帕拉底歐 Villa Rotonda）。17世紀巴洛克（<span className="text-indigo-600 font-bold">Baroque</span>）則打破文藝復興之靜態平衡，強調橢圓形平面、波浪狀曲面外牆、強烈明暗對比（<span className="text-indigo-600 font-bold">Chiaroscuro</span>）與<span className="text-indigo-600 font-bold">戲劇性空間張力</span>（如 Bernini 設計之聖彼得大教堂前廣場）。',
          steps: [
            '**文藝復興**：靜態幾何（圓形、正方形）、古典柱式復興、人本理性。',
            '**巴洛克**：動態幾何（橢圓、雙曲面）、富麗堂皇裝飾、<span className="text-teal-600 font-bold">光影戲劇張力</span>。'
          ],
          table: {
            headers: ['歷史時期', '空間幾何特徵', '光影與裝飾風格', '代表建築師與作品'],
            rows: [
              ['文藝復興 (15-16世紀)', '靜態幾何對稱、正圓與正方形、柱式規範', '理性、勻稱、和諧清澈', 'Brunelleschi (聖母百花穹頂)、Palladio (圓頂別墅)'],
              ['巴洛克 (17世紀)', '動態曲面、橢圓形平面、波浪狀立面', '強烈明暗對比、戲劇性雕塑與天花壁畫', 'Bernini (聖彼得廣場)、Borromini (四噴泉聖卡羅)'],
              ['洛可可 (18世紀)', '室內細膩不對稱曲線、貝殼與花飾', '輕快、華麗、粉彩調性', '法國凡爾賽宮鏡廳室內裝飾']
            ]
          }
        },
        {
          heading: '四、工業革命與新材料突破：水晶宮、艾菲爾鐵塔與鋼鐵構造',
          body: '19世紀工業革命引爆材料與建造技術革命。鑄鐵（<span className="text-indigo-600 font-bold">Cast Iron</span>）、鍛鐵（<span className="text-indigo-600 font-bold">Wrought Iron</span>）、平板玻璃與鋼筋混凝土（<span className="text-indigo-600 font-bold">RC</span>）相繼問世。1851年倫敦萬國博覽會「<span className="text-rose-600 font-bold">水晶宮</span>」（Crystal Palace，Joseph Paxton 設計）採用預製鐵骨與玻璃構造，開啟工業預製化建築新頁。1889年巴黎世博會艾菲爾鐵塔（<span className="text-indigo-600 font-bold">Eiffel Tower</span>）與機械館展示了鋼鐵之極限張力與大跨度空間力學。',
          steps: [
            '**水晶宮創舉**：預製模組化鑄鐵柱梁 + 模組化玻璃面板，耗時僅數月即組裝完成。',
            '芝加哥學派 (Chicago School)：Sullivan 倡導「形隨機能」，發展鋼結構高樓建築與升降梯技術。'
          ],
          table: {
            headers: ['新構造技術/建築', '核心材料', '結構與建造突破', '歷史與建築意義'],
            rows: [
              ['水晶宮 (1851)', '預製鑄鐵 + 模組化玻璃', '完全預制裝配式施工，僅數月完成大跨度展館', '工業化預製建築之始祖'],
              ['艾菲爾鐵塔 (1889)', '鍛鐵格構梁 (Wrought Iron Truss)', '高度突破 300 公尺，極致展現金屬格構結構力學', '近代結構工程與鋼鐵建築地標'],
              ['芝加哥學派高樓', '鋼骨框架 (Steel Frame) + 鋼筋混凝土', '配合升降機技術，實現高層商業辦公大樓發展', '提出「形隨機能」，奠定摩天大樓發展']
            ]
          }
        },
        {
          heading: '五、現代主義建築四位大師與Bauhaus包浩斯學派',
          body: '20世紀初，**現代主義**建築（<span className="text-indigo-600 font-bold">Modernism</span>）全面爆發，包浩斯（Bauhaus，Walter Gropius 創立）確立「<span className="text-rose-600 font-bold">藝術與技術統一</span>」、「<span className="text-rose-600 font-bold">機能至上</span>」之教學體系。**現代主義**四位大師各領風騷：Le Corbusier 提出「<span className="text-rose-600 font-bold">新建築五點</span>」（五點包含底層架高、屋頂花園、自由平面、橫向長窗、自由立面）與「<span className="text-rose-600 font-bold">居住機器論</span>」；Mies van der Rohe 倡導「<span className="text-rose-600 font-bold">Less is More（少即是多）</span>」與鋼骨玻璃帷幕大樓；Frank Lloyd Wright 主張「<span className="text-rose-600 font-bold">有機建築（<span className="text-indigo-600 font-bold">Organic Architecture</span>）</span>」與落水山莊；Alvar Aalto 則融合芬蘭木材工藝與人文溫情。',
          steps: [
            '**Le Corbusier 新建築五點**：① 底層架高 (Pilotis) ② 屋頂花園 (Roof Garden) ③ 自由平面 (Free Plan) ④ 自由立面 (Free Facade) ⑤ 橫向長窗 (Ribbon Window)。',
            '**Mies 鋼骨玻璃**：通用空間 (Universal Space) 與精緻鋼結構構件細部。'
          ],
          table: {
            headers: ['大師 / 學派', '設計核心哲學', '經典結構與構件語彙', '代表作品'],
            rows: [
              ['Le Corbusier', '居住是居住的機器、新建築五點', 'RC Dom-Ino 骨架、清水混凝土、底層架高', '薩伏伊別墅 (Villa Savoye)、廊香教堂'],
              ['Mies van der Rohe', 'Less is More (少即是多)、通用空間', '鋼骨結構、工字鋼外露細部、玻璃帷幕牆', '范斯沃斯住宅 (Farnsworth House)、西格拉姆大樓'],
              ['Frank Lloyd Wright', '有機建築 (Organic Architecture)', '懸臂混凝土台階、自然石材、草原學派水平線', '落水山莊 (Fallingwater)、古根漢美術館'],
              ['Walter Gropius (包浩斯)', '機能主義、工藝與工業技術結合', '鋼筋混凝土、玻璃轉角帷幕、無裝飾幾何體', '德紹包浩斯校舍 (Bauhaus Dessau)']
            ]
          }
        },
        {
          heading: '六、後現代主義、解構主義與當代數位參數化建築',
          body: '1970年代，後**現代主義**（Postmodernism，Robert Venturi 提出「<span className="text-rose-600 font-bold">Less is a Bore</span>」）反對**現代主義**之枯燥單調，復興古典符號與隱喻（如 Michael Graves、Philip Johnson）。1980年代末，解構主義（<span className="text-indigo-600 font-bold">Deconstructivism</span>）受到 Derrida 解構哲學影響，打破幾何正交秩序，展現傾斜、扭曲、碎片化與重力反叛（如 Frank Gehry、Zaha Hadid）。21世紀當代建築則全面導入 3D 參數化設計（<span className="text-indigo-600 font-bold">Parametricism</span>）、BIM 與永續生態低碳技術（如 Norman Foster、Bjarke Ingels BIG）。',
          steps: [
            '**後現代主義**：復興歷史符號、隱喻、雙重解讀、歷史折衷。',
            '**解構主義**：非線性幾何、碎片化、曲線流體、CATIA/Parametric 數位建模。'
          ],
          table: {
            headers: ['當代思潮', '哲學與造型主張', '建模與建造技術', '代表建築師與作品'],
            rows: [
              ['後現代主義 (Postmodernism)', '「少即是枯躁」、復興古典歷史符號與雙重解讀', '傳統混凝土與外牆飾板裝飾化', 'Robert Venturi (母宅)、Philip Johnson (AT&T大樓)'],
              ['解構主義 (Deconstructivism)', '打破正交幾何、碎片化、扭曲流體曲面', 'CATIA/Rhino 3D 參數化數位設計與金屬鈦板', 'Frank Gehry (畢爾包古根漢)、Zaha Hadid (羅馬MAXXI)'],
              ['高科技/永續當代', '結構外露美學、自然對流通風、極致節能生態', 'BIM 資訊模型、雙層呼吸帷幕牆、光電板整合', 'Norman Foster (倫敦瑞士再保大樓)、BIG (CopenHill)']
            ]
          }
        }
      ],
      practices: [
        {
          difficulty: '基礎',
          question: '勒·柯布意（Le Corbusier）於1926年提出之「新建築五點（Five Points of Architecture）」，包含哪些具體之建築空間與構造原則？請列舉並說明其內容。',
          steps: [
            '**步驟一**：底層架高 (Pilotis)。採用鋼筋混凝土柱將建築底層架空，將地面空間還給都市與行人通行。',
            '**步驟二**：屋頂花園 (Roof Garden)。在平屋頂上設置景觀花園與空中活動空間，補償建築佔用之地表綠地。',
            '**步驟三**：自由平面 (Free Plan)。因採用 RC 柱梁框架承重，牆體不再承重，可依機能自由劃分隔間。',
            '**步驟四**：自由立面 (Free Facade)。外牆脫離承重機能，可依採光與視覺需求自由開窗設計。',
            '**步驟五**：橫向長窗 (Ribbon Window)。開設水平連續之長條窗，使採光均勻深入室內深處。'
          ],
          answer: '新建築五點為：底層架高、屋頂花園、自由平面、自由立面與橫向長窗。'
        },
        {
          difficulty: '中等',
          question: '中世紀哥德式建築（Gothic Architecture）如何透過「尖拱」、「肋骨拱頂」與「飛扶壁」三大結構元件之配合，實現高聳空間與大面積彩繪玫瑰花窗？',
          steps: [
            '**步驟一**：分析尖拱 (Pointed Arch)。相較於半圓拱，尖拱能產生更向上之垂直力分量，顯著降低外推之水平側推力。',
            '**步驟二**：分析肋骨拱頂 (Ribbed Vault)。將天花板重力集中於拱頂交叉之骨架肋條上，使拱頂夾角處可以做得極薄極輕。',
            '**步驟三**：分析飛扶壁 (Flying Buttress)。將高聳中殿牆頂所承受之殘餘側向推力，透過戶外拱形飛扶壁引導傳遞至室外獨立之扶壁柱上。',
            '**步驟四**：綜合效果。牆體不再需要作為厚重承重牆，因而能大量開鑿高聳之彩繪花窗。'
          ],
          answer: '尖拱減少側推力，肋骨拱集中重力傳遞，飛扶壁將側向推力引至室外扶壁柱，使外牆解放承重機能，開鑿大面積彩繪玻璃窗。'
        },
        {
          difficulty: '進階',
          question: '試比較義大利文藝復興建築與巴洛克建築在「幾何空間控制」、「光影氛圍」與「裝飾態度」上之核心哲學差異。',
          steps: [
            '**步驟一**：幾何控制。文藝復興採用靜態、理性之正圓、正方形與完美幾何比例（如 Palladio 圓頂別墅）；巴洛克採用動態、不穩定之橢圓形、雙曲面與波浪狀幾何（如 Borromini 四噴泉教堂）。',
            '**步驟二**：光影氛圍。文藝復興追求均勻、明亮、清晰理性之光線；巴洛克追求強烈明暗對比（Chiaroscuro）與頂光、隱藏光束引發之戲劇張力。',
            '**步驟三**：裝飾態度。文藝復興裝飾嚴格遵守古典柱式規範與勻稱；巴洛克裝飾極盡富麗堂皇，將建築、繪畫與雕塑三者無縫融合。'
          ],
          answer: '文藝復興強調靜態正圓/正方形、理性勻稱與均勻採光；巴洛克強調動態橢圓/曲面、戲劇明暗對比與富麗堂皇之三維整合。'
        },
        {
          difficulty: '深度綜合',
          question: '請比較密斯·凡德羅（Mies van der Rohe）之「少即是多（Less is More）」與羅伯特·文丘里（Robert Venturi）之「少即是枯躁（Less is a Bore）」，兩者對建築語彙與歷史符號之對立態度。',
          steps: [
            '**步驟一**：Mies 機能主義態度。主張去除一切非必要之裝飾，追求結構與材料之純粹外露，創立通用空間與鋼骨玻璃極簡美學。',
            '**步驟二**：Venturi 後現代主義態度。批判現代主義之單調枯燥與冷漠，主張復興古典歷史符號、隱喻、雙重解讀與建築之複雜性與矛盾性。',
            '**步驟三**：總結對立本質。Mies 追求「抽象純粹與幾何秩序」；Venturi 追求「多元包容與符號象徵」。'
          ],
          answer: 'Mies 主張去除裝飾、外露結構材料與極簡純粹；Venturi 主張復興歷史符號、複雜矛盾與雙重解讀之後現代多元性。'
        },
        {
          difficulty: '實務技術',
          question: '古羅馬萬神殿（Pantheon）之無筋混凝土大穹頂（直徑 43.3 公尺）能歷經兩千年而不倒塌，採用了哪些結構減重與力學應答工法？',
          steps: [
            '**步驟一**：骨材漸輕化。自穹頂基座向上至頂部，混凝土骨材由重質之玄武岩、碎磚演變為極輕之浮石（Pumice）。',
            '**步驟二**：牆體與頂部厚度漸薄。基座牆厚達 6.2 公尺，向上漸薄至頂部僅約 1.5 公尺。',
            '**步驟三**：天花陷窩 (Coffers)。於穹頂內壁設置 5 層凹陷之幾何陷窩（格天井），大幅減輕軀體自重。',
            '**步驟四**：頂部圓洞 (Oculus)。頂部開設直徑 9 公尺之中央頂光圓洞，消除了頂部應力集中區並提供採光。'
          ],
          answer: '採用由下至上骨材漸輕（使用浮石）、壁厚漸薄、室內幾何陷窩（格天井）減重、以及頂部開放 9 公尺頂光圓洞（Oculus）降低頂部自重。'
        },
        {
          difficulty: '當代數位',
          question: '解構主義建築師扎哈·哈蒂（Zaha Hadid）與法蘭克·蓋瑞（Frank Gehry）如何利用 3D 數位參數化軟體（如 Rhino/Grasshopper, CATIA）突破傳統正交建築之施工極限？',
          steps: [
            '**步驟一**：突破幾何限制。透過參數化演算法（Algorithmic Modeling）精準生成複雜之雙曲面、流體與非正交幾何體。',
            '**步驟二**：數位製造整合 (CAM)。將 3D 模型數據直接傳輸至 CNC 數控機床與工業機器人，進行金屬鈦板或雙曲面混凝土面板之精準預製裁切。',
            '**步驟三**：衝突檢測與構造施工。利用數位模型解決自由曲面結構節點之複雜受力與管線衝突。'
          ],
          answer: '利用參數化演算生成複雜雙曲面模型，並將 3D 數據直接對接 CNC 數位製造與自動化加工，達成自由曲面面板與複雜結構節點之精準施工。'
        }
      ],
      practice: {
        difficulty: '基礎',
        question: '勒·柯布意（Le Corbusier）於1926年提出之「新建築五點（Five Points of Architecture）」，包含哪些具體之建築空間與構造原則？請列舉並說明其內容。',
        steps: [
          '**步驟一**：底層架高 (Pilotis)。採用鋼筋混凝土柱將建築底層架空，將地面空間還給都市與行人通行。',
            '**步驟二**：屋頂花園 (Roof Garden)。在平屋頂上設置景觀花園與空中活動空間，補償建築佔用之地表綠地。',
            '**步驟三**：自由平面 (Free Plan)。因採用 RC 柱梁框架承重，牆體不再承重，可依機能自由劃分隔間。',
            '**步驟四**：自由立面 (Free Facade)。外牆脫離承重機能，可依採光與視覺需求自由開窗設計。',
            '**步驟五**：橫向長窗 (Ribbon Window)。開設水平連續之長條窗，使採光均勻深入室內深處。'
        ],
        answer: '新建築五點為：底層架高、屋頂花園、自由平面、自由立面與橫向長窗。'
      }
    },
    {
      slug: 'architectural-history',
      title: '4. 建築思潮與歷史理論演變',
      desc: '深入剖析歷史主義與復古思潮、機能主義「形隨機能」、有機建築與自然融和、結構主義與解構主義哲學，以及當代批判地域主義與現象學場所精神。\n\n🔥 V6.0 考前秒殺秘訣：此核心概念統測出題率極高，建議善用圖解與鷹架提示反覆練習！',
      status: 'done',
      gradeLevel: 10,
      covered_question_ids: [],
      worked_examples: [
        {
          question: '【步驟化例題】現代主義建築大師科比意「新建築五點」：現代建築大師科比意 (Le Corbusier) 於 1926 年提出著名的「新建築五點 (Five Points of Architecture)」，包含柱子底層獨立（底層架空）、屋頂花園、自由平面、自由立面，以及哪一種窗戶形式？',
          difficulty: '基礎',
          steps: [ '"步驟 1：回顧新建築五點英文與中文名稱：1. Pilotis (底層架空柱), 2. Roof Garden (屋頂花園), 3. Free Plan (自由平面), 4. Free Facade (自由立面)。", "步驟 2：識別第五點。Ribbon Window / Horizontal Window（橫向帶狀長窗）。", "步驟 3：分析帶狀長窗力學前提。得益於 RC 框架結構，牆體不再承重，故可開全橫向長窗採光。"' ], 
          answer: '「橫向帶狀長窗 (Horizontal Ribbon Window)」。'
        }
      ],
      "illustrations": ['context.webp', 'mechanism.webp', 'comparison.webp', 'step-by-step.webp', 'history-real-world.webp', 'history-infographic.webp'],
      concepts: [
        {
          heading: '一、歷史主義與十九世紀復古思潮 (Historicism & Revivals)',
          body: '19世紀伴隨著工業革命與民族國家崛起，建築學界掀起了「<span className="text-rose-600 font-bold">歷史主義（<span className="text-indigo-600 font-bold">Historicism</span>）</span>」與「<span className="text-rose-600 font-bold">折衷主義（<span className="text-indigo-600 font-bold">Eclecticism</span>）</span>」風潮。建築師重新發掘歷史風格，產生新古典主義（Neoclassicism，強調羅馬希臘莊嚴）、哥德復興（Gothic Revival，強調中世紀宗教虔誠與手藝）與浪漫主義。當時建築學界陷入「<span className="text-rose-600 font-bold">樣式論爭（<span className="text-indigo-600 font-bold">Battle of the Styles</span>）</span>」，即爭論何種歷史樣式最適合現代社會。',
          steps: [
            '**新古典主義**：以巴黎萬神殿、柏林舊博物館為代表，追求秩序、對稱與柱式。',
            '**哥德復興**：以倫敦國會大廈（Pugin & Barry 設計）為代表，反對工業化機械生產之冷酷，提倡手工藝與中世紀道德。'
          ],
          table: {
            headers: ['復古流派', '核心主張與歷史借鑑', '審美與道德價值', '代表作品'],
            rows: [
              ['新古典主義 (Neoclassic)', '復興古希臘羅馬幾何秩序與柱式', '追求理性、莊嚴、幾何幾和與公民美德', '柏林舊博物館 (Schinkel)、巴黎萬神殿'],
              ['哥德復興 (Gothic Revival)', '復興中世紀哥德尖拱、飛扶壁與裝飾', '提倡基督教道德、手工藝靈魂與垂直精神', '倫敦國會大廈 (Pugin & Barry)'],
              ['折衷主義 (Eclecticism)', '任意組合不同歷史時期之建築構件語彙', '依建築機能或業主偏好靈活混搭風格', '巴黎歌劇院 (Charles Garnier)']
            ]
          }
        },
        {
          heading: '二、機能主義與「形隨機能」哲學 (Form Follows Function)',
          body: '20世紀初，Louis Sullivan 提出著名口號「<span className="text-rose-600 font-bold">形隨機能（<span className="text-indigo-600 font-bold">Form Follows Function</span>）</span>」，宣告建築外形應由其內部實用機能與結構傳力決定。隨後 Adolf Loos 發表《裝飾與罪惡》（<span className="text-indigo-600 font-bold">Ornament and Crime</span>），極力批判冗餘裝飾。以 Bauhaus 與 CIAM（國際現代建築協會）為核心之機能主義者，將建築歸納為可量化之機能空間，推動全球樣式（<span className="text-indigo-600 font-bold">International Style</span>）發展。',
          steps: [
            '**Sullivan 主張**：有機體之形式衍生自其內部機能需求。',
            '**Adolf Loos 主張**：剔除一切無實務機能之表面幾何或花紋裝飾。'
          ],
          table: {
            headers: ['理論大師', '經典名言 / 核心論文', '建築機能主張', '對當代建築之影響'],
            rows: [
              ['Louis Sullivan', 'Form Follows Function (形隨機能)', '建築造型與立面應直接反映內部空間與結構機能', '奠定芝加哥學派與高樓摩天大樓發展基石'],
              ['Adolf Loos', 'Ornament and Crime (裝飾即罪惡)', '裝飾是文化落後的表現，浪費勞動力與材料', '推動純粹幾何體與白牆無裝飾現代主義'],
              ['Le Corbusier', 'A house is a machine for living in', '建築為高效率之生活單元，應貫徹標準化與工業化', '啟發社會住宅、模組化建築與都市計畫集約化']
            ]
          }
        },
        {
          heading: '三、有機建築論與環境共生哲學 (Organic Architecture)',
          body: '法蘭克·洛伊·萊特（<span className="text-indigo-600 font-bold">Frank Lloyd Wright</span>）提出「<span className="text-rose-600 font-bold">有機建築（<span className="text-indigo-600 font-bold">Organic Architecture</span>）</span>」理論。他主張建築不應強加於自然之上，而應如植物般從土地中自然生長出來。建築材料應展現其本真本質（<span className="text-indigo-600 font-bold">Nature of Materials</span>），室內外空間應融為一體，強調水平延伸之「<span className="text-rose-600 font-bold">草原學派（<span className="text-indigo-600 font-bold">Prairie School</span>）</span>」與懸臂樑空間組合。',
          steps: [
            '**地貌整合**：建築高度低矮延伸，與地平線融和。',
            '**材料本真**：使木材顯現木紋、石材顯現砌痕、混凝土顯現質感，不作飾面掩蓋。'
          ],
          table: {
            headers: ['有機建築要素', '設計工法與空間表現', '代表案例與空間體驗'],
            rows: [
              ['土地與景觀融和', '順應山坡與溪流地形配置量體，避免大開挖', '落水山莊 (Fallingwater)：懸臂台階跨越熊溪瀑布'],
              ['流動空間 (Flowing Space)', '打破傳統房間盒子封閉感，客餐廳連續貫通', '羅比宅 (Robie House)：巨型出簷與水平流動空間'],
              ['材料真實性 (Nature of Materials)', '外露當地野石、紅磚與天然木材，不加覆蓋飾面', '西塔里埃森 (Taliesin West)：當地沙漠岩石與木架']
            ]
          }
        },
        {
          heading: '四、批判地域主義與風土脈絡再造 (Critical Regionalism)',
          body: 'Kenneth Frampton 於1983年提出「<span className="text-rose-600 font-bold">批判地域主義（<span className="text-indigo-600 font-bold">Critical Regionalism</span>）</span>」，反對全球樣式（<span className="text-indigo-600 font-bold">International Style</span>）之冷漠同質化與文脈斷裂，同時反對盲目模仿傳統歷史符號。批判地域主義主張利用現代結構與施工技術，結合當地的光線、氣候、地形、風土材料與感知經驗，創造具備場所感之現代建築（如 Jørn Utzon、Alvar Aalto、Tadao Ando 安藤忠雄）。',
          steps: [
            '**構造與風土**：採用當地材料與現代RC/鋼構結合。',
            '**氣候與光影**：回應當地太陽仰角、主導風向與地表質感。'
          ],
          table: {
            headers: ['理論比較', '全球樣式 (International Style)', '傳統鄉土 (Vernacular)', '批判地域主義 (Critical Regionalism)'],
            rows: [
              ['技術與材料', '鋼骨玻璃帷幕、標準化預製', '傳統木石手工、低技術', '現代 RC/鋼構 + 地域石材木料'],
              ['文脈與氣候態度', '忽略當地氣候文脈、依賴空調', '完全受限當地風土材料與氣候', '以現代構造批判性地回應當地氣候光影與地貌'],
              ['代表作品', '紐約西格拉姆大樓', '傳統閩南三合院民居', '安藤忠雄光之教堂、Utzon 悉尼歌劇院']
            ]
          }
        },
        {
          heading: '五、現象學建築：場所精神與軀體感知 (Phenomenology)',
          body: 'Christian Norberg-Schulz 引入哲學現象學，發表《場所精神》（Genius Loci: Towards a Phenomenology of Architecture），主張建築不僅是幾何與機能，更是「<span className="text-rose-600 font-bold">場所（<span className="text-indigo-600 font-bold">Place</span>）</span>」之締造。Juhani Pallasmaa 發表《皮膚的眼睛》（<span className="text-indigo-600 font-bold">The Eyes of the Skin</span>），批判當代建築過度傾於「<span className="text-rose-600 font-bold">視覺中心主義</span>」，倡導結合觸覺、聲學、氣味與溫度之多感官身體體驗建築（如 Peter Zumthor 瓦爾斯溫泉浴室）。',
          steps: [
            '**場所三要素**：空間 (Space)、環境構造 (Character) 與存在定居 (Dwelling)。',
            '**多感官體驗**：水聲、石材觸感、光線反射與空間溫度變化。'
          ],
          table: {
            headers: ['現象學大師', '核心著作 / 理論', '空間主張', '代表案例與感官體驗'],
            rows: [
              ['Norberg-Schulz', 'Genius Loci (場所精神)', '建築旨在將抽象空間轉化為具備認同感之「場所」', '傳統聚落與歷史城鎮紋理保存'],
              ['Juhani Pallasmaa', 'The Eyes of the Skin (皮膚的眼睛)', '批判視覺至上，倡導身體、觸覺與聲學多感官沉浸', '瓦爾斯溫泉浴室 (Peter Zumthor)：片岩觸感與水聲'],
              ['Steven Holl', 'Anchoring (錨定)', '建築應錨定於特定基地之地質、歷史與光線現象', '麻省理工學院奇斯格宿舍 (Simmons Hall)']
            ]
          }
        },
        {
          heading: '六、當代永續生態建築與數位參數主義 (Parametricism)',
          body: '21世紀建築思潮呈現雙軌演進：一軌為「<span className="text-rose-600 font-bold">永續生態建築（<span className="text-indigo-600 font-bold">Sustainable Architecture</span>）</span>」，強調碳足跡、零碳建築、綠建築評估與氣候韌性；另一軌為 Patrick Schumacher 宣稱之「<span className="text-rose-600 font-bold">參數主義（<span className="text-indigo-600 font-bold">Parametricism</span>）</span>」，將所有建築要素（構造、光照、動線）設為可變參數，透過演算法生成連續流動之幾何造型。',
          steps: [
            '**永續生態軌跡**：Life Cycle Assessment (LCA) 生命週期評估、BREEAM / LEED / EEWH 認證。',
            '**參數主義軌跡**：幾何組構透過軟體參數化調整，達成結構與機能最優化。'
          ],
          table: {
            headers: ['當代思潮', '驅動核心', '技術與設計方法', '代表作品'],
            rows: [
              ['永續生態建築', '氣候變遷因應、淨零碳排、資源循環', 'BIM 能源模擬、雙層外牆自然通風、太陽能光電', '倫敦市政廳 (Foster + Partners)'],
              ['數位參數主義', '電腦演算、流體幾何、非線性組構', 'Rhino + Grasshopper 參數化建模、CNC 數位製造', '北京麗澤 SOHO (Zaha Hadid Architects)']
            ]
          }
        }
      ],
      practices: [
        {
          difficulty: '基礎',
          question: '路易斯·沙利文（Louis Sullivan）提出的著名建築口號「形隨機能（Form Follows Function）」其核心意涵為何？其對20世紀現代主義建築產生了哪些深遠影響？',
          steps: [
            '**步驟一**：解釋「形隨機能」意涵。主張建築之外部造型、立面分割與空間組構，必須完全由其內部之實際機能需求與結構傳力機制決定，而非盲目套用傳統古典歷史裝飾。',
            '**步驟二**：分析對現代主義之影響。成為20世紀初芝加哥學派與包浩斯機能主義之核心綱領，促使建築師摒棄繁複歷史裝飾，轉向極簡、實用與結構外露之現代設計。'
          ],
          answer: '「形隨機能」主張建築外形由內部機能與結構傳力決定，引導20世紀建築擺脫歷史裝飾，轉向機能至上與極簡構造之現代主義。'
        },
        {
          difficulty: '中等',
          question: '阿道夫·路斯（Adolf Loos）於1908年發表論文《裝飾與罪惡》（Ornament and Crime），其反對建築裝飾的核心論點為何？',
          steps: [
            '**步驟一**：分析文化演化視角。Loos 認為隨著文化與文明進步，人體與物件表面擺脫紋身與冗餘裝飾是必然趨勢，裝飾是文化低落之表現。',
            '**步驟二**：分析經濟與勞動視角。在工業化時代，製作無機能之手藝裝飾是對勞動力、時間與材料之巨大浪費。',
            '**步驟三**：對建築形體之影響。倡導純粹幾何體、光滑白牆與注重內部空間品質（Raumplan 立體空間計畫）。'
          ],
          answer: 'Loos 認為裝飾是文化落後的表現，浪費工人工時與材料；主張剔除表面裝飾，追求幾何純粹性與立體空間計畫。'
        },
        {
          difficulty: '進階',
          question: '請詳細比較「全球樣式（International Style）」與肯尼斯·弗蘭姆普敦（Kenneth Frampton）提出的「批判地域主義（Critical Regionalism）」在面對風土氣候與歷史文脈時之態度差異。',
          steps: [
            '**步驟一**：全球樣式態度。強調普遍適用性、鋼骨玻璃帷幕與正交幾何，忽視建築所在基地之特定氣候、地形與歷史脈絡，高度依賴人工空調與機械照明。',
            '**步驟二**：批判地域主義態度。反對全球樣式之冷漠同質化，主張運用現代結構技術，深度回應當地的太陽角度、盛行風向、風土石材木料與歷史紋理。',
            '**步驟三**：總結兩者差異。全球樣式為「去文脈化與普世標準化」；批判地域主義為「風土文脈與現代構造之批判性融合」。'
          ],
          answer: '全球樣式忽視當地文脈與氣候，採用標準化鋼骨玻璃；批判地域主義則利用現代構造技術批判性地回應當地氣候、光影、材料與歷史紋理。'
        },
        {
          difficulty: '深度綜合',
          question: '彼得·卒姆托（Peter Zumthor）設計之「瓦爾斯溫泉浴室（Therme Vals）」如何展現尤哈尼·帕拉斯瑪（Juhani Pallasmaa）倡導之「多感官現象學建築」體驗？',
          steps: [
            '**步驟一**：材料與觸感。大量運用當地切片片麻岩（Vals Gneiss）堆疊牆體，提供溫潤粗糙之石材觸覺體驗。',
            '**步驟二**：聲學與水聲。天花頂光與暗沉石室放大水滴聲與水流聲，形塑沉靜神聖之聲學場域。',
            '**步驟三**：光影與水溫。結合縫隙頂光反射水面光斑，搭配不同溫度的泉水池，帶來極致之全身心感知沉浸。'
          ],
          answer: '透過瓦爾斯片麻岩之粗糙觸感、天花縫隙頂光之光影反射、以及迴盪水聲與水溫變化，展現超越視覺之多感官現象學體驗。'
        },
        {
          difficulty: '實務理論',
          question: '法蘭克·洛伊·萊特（Frank Lloyd Wright）設計之「落水山莊（Fallingwater）」如何具體貫徹其「有機建築（Organic Architecture）」理論？',
          steps: [
            '**步驟一**：地形與景觀契合。將建築量體直接錨定於天然瀑布岩石之上，使懸臂混凝土陽台延伸於熊溪之上。',
            '**步驟二**：材料本真。室內壁爐直接採用基地天然露頭岩石，牆面使用當地野石砌築，展現材料天然質感。',
            '**步驟三**：水平延伸。採用巨型懸臂混凝土梁，形塑與自然山林地平線平行之水平延伸視覺。'
          ],
          answer: '落水山莊透過將懸臂台階跨越瀑布、利用天然露頭岩石作為壁爐、以及外露當地野石砌牆，實現建築與自然山水融為一體之有機建築哲學。'
        },
        {
          difficulty: '當代趨勢',
          question: '請說明當代「建築生命週期評估（Life Cycle Assessment, LCA）」理論如何評估一棟建築自興建至拆除階段之整體碳足跡與環境衝擊？',
          steps: [
            '**步驟一**：資材生產階段（蘊含碳 A1-A3）。評估建材（如水泥、鋼筋）採掘、運輸與製造過程之二氧化碳排放。',
            '**步驟二**：施工興建階段（A4-A5）。評估工地機具運轉、運輸與施工廢棄物處理之碳排放。',
            '**步驟三**：營運使用階段（B1-B7）。評估建築數十年使用期間之照明、空調、水資源與維護更換之營運碳。',
            '**步驟四**：拆除回收階段（C1-D）。評估拆除處置與材料循環再利用（如廢鋼回收）之減碳效益。'
          ],
          answer: 'LCA 評估包含資材生產（蘊含碳）、施工興建、數十年營運使用（營運碳）以及最終拆除回收四個階段之整體環境衝擊與二氧化碳排放量。'
        }
      ],
      practice: {
        difficulty: '基礎',
        question: '路易斯·沙利文（Louis Sullivan）提出的著名建築口號「形隨機能（Form Follows Function）」其核心意涵為何？其對20世紀現代主義建築產生了哪些深遠影響？',
        steps: [
          '**步驟一**：解釋「形隨機能」意涵。主張建築之外部造型、立面分割與空間組構，必須完全由其內部之實際機能需求與結構傳力機制決定，而非盲目套用傳統古典歷史裝飾。',
            '**步驟二**：分析對現代主義之影響。成為20世紀初芝加哥學派與包浩斯機能主義之核心綱領，促使建築師摒棄繁複歷史裝飾，轉向極簡、實用與結構外露之現代設計。'
        ],
        answer: '「形隨機能」主張建築外形由內部機能與結構傳力決定，引導20世紀建築擺脫歷史裝飾，轉向機能至上與極簡構造之現代主義。'
      }
    },
    {
      slug: 'cultural-heritage',
      title: '5. 文化資產保存與古蹟修復工程',
      desc: '深入研析文化資產保存法規體系、《威尼斯憲章》國際保存原則、古蹟調查研究與非破壞檢測、傳統木構與磚石修復工法、舊建築再利用以及古蹟防災加固工程。\n\n🔥 V6.0 考前秒殺秘訣：此核心概念統測出題率極高，建議善用圖解與鷹架提示反覆練習！',
      status: 'done',
      gradeLevel: 10,
      covered_question_ids: [],
      worked_examples: [
        {
          question: '【步驟化例題】文化資產保存法修復原則：依據《文化資產保存法》與國際《威尼斯憲章》，在進行古蹟修復工程時，對於新補強構件與歷史原物的處理，應遵循何種重要原則？',
          difficulty: '中等',
          steps: [ '"步驟 1：瞭解文化資產保存核心哲學。強調「真實性 (Authenticity)」與「可逆性 (Reversibility)」。", "步驟 2：規範新舊構件識別。新添加之補強構件應與古蹟原物「可識別（不可偽造古貌）」，且未來可安全拆卸（可逆性）。", "步驟 3：總結原則。遵循「最小干預、可識別性與可逆性原則」。"' ], 
          answer: '遵循「真實性、可識別性（新舊可辨）與可逆性（未來可拆卸且不傷原物）」原則。'
        }
      ],
      "illustrations": ['context.webp', 'mechanism.webp', 'comparison.webp', 'step-by-step.webp', 'history-real-world.webp', 'history-infographic.webp'],
      concepts: [
        {
          heading: '一、文化資產保存法規體系與法定等級劃定',
          body: '台灣依據《**文化資產**保存法》（文資法），將有形**文化資產**劃分為：古蹟（國定、直轄市定、縣市定）、**歷史建築**、紀念建築、聚落建築群、考古遺址、史蹟與文化景觀。主管機關經法定的指定或登錄審議程序後，給予法定身分與**容積移轉**（容積獎勵）補償，保護其不被非法拆除。',
          steps: [
            '**法定類別**：古蹟 > 歷史建築 > 紀念建築 > 聚落建築群。',
            '**獎勵補償機制**：依《古蹟土地容積移轉辦法》，古蹟保存區土地所有權人得申請容積移轉至其他可建築基地。'
          ],
          table: {
            headers: ['文資類別', '審查與劃定層級', '法定保護與管制強度', '代表案例'],
            rows: [
              ['國定古蹟', '中央文化部審議指定', '最高管制強度，任何修復計畫需報文化部核定', '台南孔廟、淡水紅毛城、台北府城北門'],
              ['直轄市/縣市定古蹟', '直轄市或縣市政府指定', '高管制強度，由地方文化局主管並定期巡檢', '台北郵局、原台南地方法院'],
              ['歷史建築', '直轄市或縣市政府登錄', '中管制強度，鼓勵活化再利用，享有容積移轉', '華山1914文創園區、松山文創園區'],
              ['聚落建築群', '地方政府登錄', '區域性整體景觀管制，維護聚落歷史紋理', '澎湖望安花宅聚落、寶藏巖歷史聚落']
            ]
          }
        },
        {
          heading: '二、國際文資保存憲章：《威尼斯憲章》與《奈良真實性文件》',
          body: '國際古蹟遺址理事會（<span className="text-indigo-600 font-bold">ICOMOS</span>）於1964年頒布《威尼斯憲章》（<span className="text-indigo-600 font-bold">Venice Charter</span>），確立現代古蹟保存核心原則：真實性（<span className="text-indigo-600 font-bold">Authenticity</span>）、完整性（<span className="text-indigo-600 font-bold">Integrity</span>）、可辨識性（<span className="text-indigo-600 font-bold">Recognizability</span>）與可逆性（<span className="text-indigo-600 font-bold">Reversibility</span>）。新加構件必須可與歷史構件識別，且修復工法應可被拆除恢復原狀。1994年《奈良真實性文件》（<span className="text-indigo-600 font-bold">Nara Document</span>）則強調文化多樣性，承認東方木造建築定期的拆卸重組修復亦符合真實性。',
          steps: [
            '真實性 (Authenticity)：保護原始構造材料、工藝與歷史痕跡，禁止憑空偽造。',
            '可辨識性 (Recognizability)：新補強構件（如鋼骨加固）需與古蹟原構件有清晰界線，不得偽造古貌。',
            '可逆性 (Reversibility)：採用未來可隨時拆除且不損傷古蹟本體之現代加固技術。'
          ],
          table: {
            headers: ['保存原則 (Principle)', '原則定義與核心精神', '修復工程實務規範'],
            rows: [
              ['真實性 (Authenticity)', '保存古蹟歷經時代疊加之真實材料與施工痕跡', '優先修補舊構件，嚴禁無依據之憑空重建或仿古裝飾'],
              ['可辨識性 (Recognizability)', '新添加之結構或修補構件必須能被辨識', '新舊交接處標註修復年份，或採用現代材料清晰區隔'],
              ['可逆性 (Reversibility)', '新工法與加固材料未來可被安全移除', '使用螺栓連接鋼結構加固而非不可逆之焊接或粘死'],
              ['最小干預 (Minimum Intervention)', '以維護結構安全所需之最小程度干預古蹟', '僅對結構損壞危及安全處進行加固，保留歲月質感']
            ]
          }
        },
        {
          heading: '三、古蹟調查研究、現況測繪與非破壞檢測',
          body: '古蹟修復前必須進行嚴謹之「<span className="text-rose-600 font-bold">調查研究</span>」與「<span className="text-rose-600 font-bold">修復設計</span>」。調查包含文獻考證、傳統匠師口述歷史、3D雷射掃描現況測繪以及非破壞檢測（Non-Destructive Testing, NDT）。非破壞檢測利用超音波、抵抗波打擊穿透儀（<span className="text-indigo-600 font-bold">Resistograph</span>）檢測木構件內部腐朽，或利用紅外線熱影像儀檢測外牆剝落與壁癌水氣。',
          steps: [
            '**第一階段**：歷史文獻搜集、老照片對比與古蹟沿革調查。',
            '**第二階段**：三維雷射掃描測繪、正射影像圖與損壞現況圖繪製。',
            '**第三階段**：非破壞檢測（超音波檢測木材剩餘強度、應力波檢測蟻蝕空洞）。',
            '**第四階段**：解體調查（解體工程中紀錄落款與暗標記）。'
          ],
          table: {
            headers: ['檢測/測繪技術', '檢測物理原理', '應用標的', '優點與獲取數據'],
            rows: [
              ['三維雷射掃描 (3D Laser Scanning)', '雷射光束點雲 (Point Cloud) 反射紀錄', '全區古蹟幾何形體、屋頂脊線、傾斜度', '高精度毫米級三維點雲模型、自動生成現況圖'],
              ['抵抗波檢測儀 (Resistograph)', '微細鑽針旋轉推進阻力紀錄', '大木作梁柱、大木棟架內部', '檢測木材內部是否有白蟻蛀蝕或深層空洞腐朽'],
              ['紅外線熱熱影像 (Thermography)', '檢測物體表面紅外線熱輻射差異', '古蹟磚石牆面、剪黏外牆、牆體內部', '精準定位外牆內部空鼓、水氣滲漏與壁癌發育區']
            ]
          }
        },
        {
          heading: '四、傳統木構與磚石古蹟修復工法與材料工藝',
          body: '傳統木構古蹟修復強調「<span className="text-rose-600 font-bold">抽樑換柱</span>」與「<span className="text-rose-600 font-bold">榫卯修補</span>」。當柱腳腐朽時，採用「<span className="text-rose-600 font-bold">筓補</span>」或「<span className="text-rose-600 font-bold">墩接（柱腳接柱）</span>」工法；大梁裂縫則採用「<span className="text-rose-600 font-bold">嵌入木條</span>」與「<span className="text-rose-600 font-bold">碳纖維布（<span className="text-indigo-600 font-bold">CFRP</span>）</span>」包覆加固。磚石古蹟修復則需採用傳統灰漿（生石灰、白華、糯米汁、烏糖水）進行填縫與砌築，嚴禁盲目使用高強度卜特蘭水泥，避免水泥硬化強壓破壞古磚。',
          steps: [
            '**木柱墩接工法**：將柱腳腐朽段鋸除，以相同木種透榫榫卯拼接，並加設防潮石柱珠（柱礎）。',
            '**磚石灰漿修復**：採用低強度、高透氣性之傳統糯米石灰漿，保持牆體呼吸排水能力。'
          ],
          table: {
            headers: ['損壞類型', '古蹟傳統材料/構件', '推薦修復工法', '禁用工法與風險'],
            rows: [
              ['木柱底部濕腐', '傳統大木作落地柱', '柱腳墩接工法 (榫卯拼接 + 石柱礎隔潮)', '嚴禁直接注入水泥砂漿包裹（會加速木材腐爛）'],
              ['梁枋木材縱向裂縫', '大木作承重梁', '環氧樹脂 (Epoxy) 灌縫 + 嵌木條 + 環套加固', '嚴禁直接截斷替換（破壞歷史古意與墨書落款）'],
              ['古磚牆灰漿脫落', '清代紅磚牆/三合土牆', '剔縫後重新勾縫 (採用糯米石灰灰漿)', '嚴禁使用純水泥砂漿（水泥硬度過高會壓碎古磚）']
            ]
          }
        },
        {
          heading: '五、歷史建築活化再利用與新舊建築共生設計',
          body: '**歷史建築**活化再利用（<span className="text-indigo-600 font-bold">Adaptive Reuse</span>）旨在賦予舊建築現代機能（如文創園區、展覽館、圖書館），延續其生命力。設計上常採用「<span className="text-rose-600 font-bold">插入式結構（<span className="text-indigo-600 font-bold">Box in a Box</span>）</span>」或「<span className="text-rose-600 font-bold">殘跡保存與玻璃帷幕增建</span>」，使新舊結構獨立傳力，達到歷史紋理與現代機能之的和諧共生。',
          steps: [
            '**結構分離**：新建鋼結構或電梯井獨立於古蹟牆體之外，不對舊牆施加額外荷重。',
            '**新舊對比**：新建部分採用簡化現代鋼骨與玻璃，與古蹟紅磚木構形成清晰歷史對照。'
          ],
          table: {
            headers: ['活化再利用模式', '設計工法特徵', '新舊界面處理策略', '代表案例'],
            rows: [
              ['插入式結構 (Box-in-a-Box)', '於舊倉庫內部插入獨立之現代鋼骨框架', '新舊結構完全脫開，不傳遞載重至舊牆', '華山文創園區紅磚六合院'],
              ['殘跡保存 + 現代增建', '保留歷史牆體殘跡，上方覆蓋鋼骨玻璃罩', '採用透明玻璃與懸臂鋼梁提供保護性遮罩', '原台南地方法院修復、德國柏林新博物館'],
              ['外殼保留內部改建', '保留歷史外牆立面，內部打通重新規劃機能', '設置微型樁與鋼架托換支撐舊立面', '台北松山文創園區、新竹市美術館']
            ]
          }
        },
        {
          heading: '六、古蹟防災、防災計畫與結構耐震加固工程',
          body: '台灣地處地震與颱風頻繁帶，古蹟結構補強與防災至關重要。耐震加固應隱蔽進行，如採用「<span className="text-rose-600 font-bold">微型樁基礎加固</span>」、「<span className="text-rose-600 font-bold">隱蔽式鋼纜拉結（<span className="text-indigo-600 font-bold">Tie-rod</span>）</span>」與「<span className="text-rose-600 font-bold">壁體黏貼碳纖維網</span>」。防災方面需制定「<span className="text-rose-600 font-bold">古蹟整體防災計畫</span>」，設置隱蔽式細水霧滅火系統與獨立火災警報器，避免水害或火災毀損古蹟。',
          steps: [
            '**耐震補強**：於木構棟架節點安裝可撤除之隱蔽式金屬拉桿（Tie-rod）與剪力牆。',
            '**消防系統**：採用細水霧（Water Mist）自動滅火系統，滅火效能高且水量僅為傳統灑水器之10%，保護木構彩繪。'
          ],
          table: {
            headers: ['防災/加固項目', '工程防護技術', '隱蔽性與古蹟保護效益'],
            rows: [
              ['木棟架耐震拉結', '安裝不鏽鋼拉桿 (Tie-rod) 與隱蔽式鋼節點加固', '提高整體結構抗震扭轉剛度，滿足《威尼斯憲章》可逆性'],
              ['地基差異沉陷加固', '打設微型樁 (Micro-piles) 與高壓注漿加固', '不干擾地面古蹟本體，有效提升地基承載力'],
              ['古蹟火災防護', '裝設極早期煙霧警報 (VESDA) 與細水霧滅火系統', '細水霧迅速滅火且水損極低，防止彩繪與木材水破壞']
            ]
          }
        }
      ],
      practices: [
        {
          difficulty: '基礎',
          question: '依據國際古蹟保存《威尼斯憲章》（Venice Charter），古蹟修復工程應遵循之「真實性（Authenticity）」與「可逆性（Reversibility）」原則意涵為何？',
          steps: [
            '**步驟一**：說明真實性意涵。修復必須保存古蹟歷經不同歷史時期積澱之真實構構材料、工藝與歷史痕跡，嚴禁無依據之憑空偽造或仿古新建。',
            '**步驟二**：說明可逆性意涵。所有新加入之結構加固工法（如鋼構拉桿、微型樁），未來若有更先進技術時，必須能夠被安全拆除並恢復古蹟原狀。'
          ],
          answer: '真實性旨在保存原始材料與工藝痕跡，嚴禁憑空偽造；可逆性要求新加固工法未來能夠被安全拆除且不損傷古蹟本體。'
        },
        {
          difficulty: '中等',
          question: '當傳統木構古蹟之落地木柱底部發生嚴重濕腐與白蟻蛀蝕時，專業修復團隊應採取何種「木柱墩接工法」？為何不可直接灌入水泥砂漿包裹？',
          steps: [
            '**步驟一**：說明墩接工法步驟。先以臨時支撐架托換梁枋載重，將木柱腐朽段切除；選用相同木種進行透榫榫卯拼接修補，並於柱底設置防潮石柱礎（柱珠）。',
            '**步驟二**：解釋禁用水泥原因。水泥封閉性極高且含鹼性水氣，直接包裹會使木材殘餘濕氣無法散逸，進一步加速木材內部二次腐爛與真菌滋生。'
          ],
          answer: '應採取透榫榫卯墩接工法並加設防潮石柱礎；不可使用水泥砂漿包裹，因為水泥會封閉濕氣，加速木材內部腐爛。'
        },
        {
          difficulty: '進階',
          question: '在舊建築活化再利用（Adaptive Reuse）中，何謂「插入式結構（Box in a Box）」設計策略？請分析其在結構傳力與新舊界面處理上之優點。',
          steps: [
            '**步驟一**：定義 Box in a Box。於歷史建築內部空間中，獨立興建一套自主承重之現代鋼結構或木結構空間單元。',
            '**步驟二**：結構傳力優點。新建結構自成獨立傳力體系，將載重直接傳至地基，完全不施加額外載重於舊有歷史牆體之上。',
            '**步驟三**：新舊界面處理。新舊結構間保留緩衝縫隙，滿足可逆性與最小干預原則，展現新舊空間之歷史對比。'
          ],
          answer: 'Box in a Box 係於舊建築內興建獨立承重結構單元。其優點為新舊結構傳力分離、不破壞歷史牆體，且符合可逆性與新舊對比原則。'
        },
        {
          difficulty: '深度綜合',
          question: '請詳細說明三維雷射掃描（3D Laser Scanning）與抵抗波檢測儀（Resistograph）在古蹟調查研究階段之應用場合與技術優勢。',
          steps: [
            '**步驟一**：三維雷射掃描應用。用於全區古蹟現況高精度測繪，發射數百萬點雷射點雲生成毫米級 3D 模型，獲取屋頂歪斜、牆體傾斜與結構變形數據。',
            '**步驟二**：抵抗波檢測儀應用。用於大木作梁柱內部健康檢測，以細微針頭穿透木材，透過旋轉阻力曲線圖精準判定木材內部是否有空洞或白蟻蛀蝕。',
            '**步驟三**：綜合優勢。兩者皆屬非破壞或微破壞檢測，能在不破壞古蹟本體前提下獲取精準科學數據。'
          ],
          answer: '雷射掃描用於毫米級點雲現況測繪與形變分析；抵抗波檢測儀用於非破壞檢測大木梁柱內部之腐朽空洞與白蟻蛀蝕。'
        },
        {
          difficulty: '實務法規',
          question: '依據台灣《文化資產保存法》，古蹟私有土地所有權人因土地使用受限，得依據何種機制獲得補償？其運作機制為何？',
          steps: [
            '**步驟一**：指出補償機制。得依據《古蹟土地容積移轉辦法》申請「古蹟容積移轉」。',
            '**步驟二**：運作機制說明。將古蹟保存區內因受法律限制而無法建築之基準容積（送出基地容積），經專業估價換算後，移轉至同都市計畫區內之其他可建築基地（接受基地）建築使用。',
            '**步驟三**：效益分析。兼顧文化資產永久保存與人民財產權補償。'
          ],
          answer: '得申請「古蹟容積移轉」，將受限無法建築之基準容積移轉至其他可建築基地使用，以保障所有權人財產權益。'
        },
        {
          difficulty: '防災技術',
          question: '為何古蹟室內消防系統優先採用「細水霧（Water Mist）」自動滅火系統，而非傳統自動噴水滅火系統？',
          steps: [
            '**步驟一**：水損防護 (Water Damage)。細水霧噴出極微小水滴（粒徑 < 400 μm），用水量僅為傳統噴水系統之 10% 至 20%，能避免大量積水毀損古蹟木構與彩繪壁畫。',
            '**步驟二**：滅火效率 (Extinction Efficiency)。細水霧受熱迅速汽化吸收巨量熱能，並排除氧氣形成窒息效應，滅火速度極快。',
            '**步驟三**：管線隱蔽性。細水霧管徑小，易於古蹟內部進行隱蔽敷設，減少對古蹟視覺景觀之破壞。'
          ],
          answer: '細水霧用水量極少可大幅降低對古蹟彩繪與木材之水損，且蒸發窒息滅火效率高、管徑小易於隱蔽敷設。'
        }
      ],
      practice: {
        difficulty: '基礎',
        question: '依據國際古蹟保存《威尼斯憲章》（Venice Charter），古蹟修復工程應遵循之「真實性（Authenticity）」與「可逆性（Reversibility）」原則意涵為何？',
        steps: [
          '**步驟一**：說明真實性意涵。修復必須保存古蹟歷經不同歷史時期積澱之真實構構材料、工藝與歷史痕跡，嚴禁無依據之憑空偽造或仿古新建。',
            '**步驟二**：說明可逆性意涵。所有新加入之結構加固工法（如鋼構拉桿、微型樁），未來若有更先進技術時，必須能夠被安全拆除並恢復古蹟原狀。'
        ],
        answer: '真實性旨在保存原始材料與工藝痕跡，嚴禁憑空偽造；可逆性要求新加固工法未來能夠被安全拆除且不損傷古蹟本體。'
      }
    },
    {
      slug: 'social-change',
      title: '6. 社會變遷與都市形貌變革',
      desc: '探討工業革命與都市化潮、19世紀巴黎奧斯曼大改造、霍華德花園城市運動、台灣日治市區改正至戰後都市更新、權利變換、社區權益以及高齡化與智慧韌性都市。\n\n🔥 V6.0 考前秒殺秘訣：此核心概念統測出題率極高，建議善用圖解與鷹架提示反覆練習！',
      status: 'done',
      gradeLevel: 10,
      covered_question_ids: [],
      worked_examples: [
        {
          question: '【步驟化例題】工業革命與水晶宮建築：1851 年倫敦世界博覽會展覽館「水晶宮 (Crystal Palace)」在建築史上被視為現代建築的開端，其採用的突破性建造工法為何？',
          difficulty: '基礎',
          steps: [ '"步驟 1：分析水晶宮設計者與材料。由約瑟夫·帕克斯頓 (Joseph Paxton) 設計，大量採用鑄鐵 (Cast Iron) 與玻璃。", "步驟 2：解析施工工法。採用工廠預製構件（Pre-fabrication），現場快速組裝（Dry Assembly）。", "步驟 3：總結建築史意義。開啟了預製構件與鐵骨玻璃預製建築之新時代。"' ], 
          answer: '採用「預製鐵骨構件與玻璃」於現場快速裝配，開啟建築預製化與工業化生產之先河。'
        }
      ],
      "illustrations": ['context.webp', 'mechanism.webp', 'comparison.webp', 'step-by-step.webp', 'history-real-world.webp', 'history-infographic.webp'],
      concepts: [
        {
          heading: '一、工業革命、都市化潮與十九世紀奧斯曼巴黎大改造',
          body: '19世紀工業革命引發大規模鄉村人口湧入城市，造成人口過剩、貧民窟蔓延與霍亂傳染病肆虐。1850年代，法國拿破崙三世委任奧斯曼男爵（<span className="text-indigo-600 font-bold">Baron Haussmann</span>）推行巴黎大改造（<span className="text-indigo-600 font-bold">Haussmannization</span>）。劃破舊中世紀擁擠巷弄，闢建放射狀寬廣林蔭大道（<span className="text-indigo-600 font-bold">Boulevards</span>）、建立統一立面之幾何街廓住宅、劃設城市公園綠地，並導入現代下水道與瓦斯供氣網，奠定現代都市改造之範式。',
          steps: [
            '**空間改造**：拆除中世紀破舊街區，打造寬 30-40m 放射狀林蔭大道。',
            '**立面統一**：強制規定沿街建築高度、層高與石材立面線條。',
            '**基礎設施**：闢建龐大地下下水道網路與供水系統，解決公共衛生危機。'
          ],
          table: {
            headers: ['都市改造面向', '中世紀傳統巴黎', '奧斯曼巴黎大改造', '都市與社會效益'],
            rows: [
              ['街道空間', '狹窄曲折、泥濘擁擠、易被設街壘', '寬廣直捷林蔭大道、放射狀圓環廣場', '改善都市交通、提升軍事管控、增進空氣對流'],
              ['公共衛生', '無下水道、污水隨意排放、傳染病蔓延', '建置龐大地下下水道網、引入清潔自來水', '大幅降低霍亂等傳染病死亡率'],
              ['建築立面', '樣式混雜、木石混造、高度不一', '統一採用巴黎石材、古典三段式、曼薩頂', '形塑統一尊貴之現代帝國首都都市景觀']
            ]
          }
        },
        {
          heading: '二、烏托邦都市思想與 Ebenezer Howard 花園城市運動',
          body: '面對工業城市之惡劣環境，英國埃貝尼澤·霍華德（<span className="text-indigo-600 font-bold">Ebenezer Howard</span>）於1898年發表《明日：條條道路通往真正改革》（后改名《明日的花園城市》），提出「<span className="text-rose-600 font-bold">花園城市（<span className="text-indigo-600 font-bold">Garden City</span>）</span>」理論。他設計著名的「<span className="text-rose-600 font-bold">三磁鐵（<span className="text-indigo-600 font-bold">Three Magnets</span>）</span>」圖解，結合城鄉優點（城市之就業機會 + 鄉村之自然環境）。花園城市採圓形圈層規劃，中央為公園，外圍為住宅與產業區，最外圍由永久農藝綠帶（<span className="text-indigo-600 font-bold">Greenbelt</span>）環繞，土地歸社區公有，限制人口規模（約 32,000 人）。',
          steps: [
            '**三磁鐵理論**：城市磁鐵（優缺點）、鄉村磁鐵（優缺點）、城鄉-花園城市磁鐵（結合兩者優點）。',
            '**空間佈局**：中心公園 -> 住宅與學校 -> 鐵路與工業區 -> 農業綠帶。',
            '**代表實踐**：英國萊奇沃思（Letchworth）與韋林（Welwyn）花園城市。'
          ],
          table: {
            headers: ['規劃要素', '霍華德花園城市 (Garden City)', '對現代都市計畫之啟示'],
            rows: [
              ['土地產權', '土地歸社區全體共有，防止土地投機炒作', '啟發公共土地儲備與公有社會住宅概念'],
              ['綠帶管制', '外圍劃定永久農業綠帶 (Greenbelt)，禁止擴張', '成為現代都市成長邊界 (UGB) 與綠帶法規先驅'],
              ['自給自足', '包含住宅、工作、商業與農業，非單純臥房城市', '啟發當代新市鎮開發與 15 分鐘生活圈理念']
            ]
          }
        },
        {
          heading: '三、臺灣近代都市發展：日治市區改正至戰後都市計畫法',
          body: '台灣現代都市計畫起源於日治初期之「<span className="text-rose-600 font-bold">市區改正</span>」。1900年頒布《台北市區改正計畫》，拆除台北府城牆闢建三線路，引進正交棋盤式道路與公園圓環。1936年頒布《台灣都市計畫令》，導入土地使用分區管制（<span className="text-indigo-600 font-bold">Zone</span>）與風致地區概念。戰後1964年修正頒布《都市計畫法》，確立市鎮計畫、鄉街計畫與特定區計畫三大類別，規範建蔽率與容積率。',
          steps: [
            '**日治市區改正**：衛生公共工程、拆城牆闢林蔭大道、強制作業亭仔腳騎樓。',
            '**戰後都市計畫**：實施土地分區管制（住宅區、商業區、工業區）、劃定公共設施保留地。'
          ],
          table: {
            headers: ['發展階段', '法規與計畫名稱', '核心規劃工具與手段', '對都市空間形貌之影響'],
            rows: [
              ['日治初期 (1895-1920)', '台北/台中/台南市區改正計畫', '棋盤式道路拓寬、拆除舊城牆、騎樓退縮', '奠定現代城區道路網絡與市容衛生'],
              ['日治後期 (1936-1945)', '《台灣都市計畫令》', '土地使用分區、綠帶、公園與風致地區劃定', '導入現代總體都市計畫與地區環境管制'],
              ['戰後發展 (1964-迄今)', '《都市計畫法》與細部計畫', '建蔽率、容積率管制、公共設施保留地、都更', '控制都市建築密度，實施現代都市治理']
            ]
          }
        },
        {
          heading: '四、都市更新、權利變換與社區權益保障',
          body: '隨著老舊城區建物老化，政府推動《都市更新條例》，採取重建、整建與維護三種方式。核心機制為「<span className="text-rose-600 font-bold">權利變換（<span className="text-indigo-600 font-bold">Rights Exchange</span>）</span>」，如同立體土地重劃。原屋主提供土地與舊建物折價，更新實施者（開發商）負擔重建費用，更新後依據鑑價比例分配新建物與土地持份。都更過程中必須嚴格保障少數異議戶之居住權與個案爭議處置。',
          steps: [
            '**更新三大方式**：重建（拆除重建）、整建（結構加固/拉皮）、維護（環境整理）。',
            '**權利變換程序**：劃定都更單元 -> 事業概要 -> 事業計畫與權利變換計畫 -> 權利價值鑑價與分配 -> 施工與交屋。'
          ],
          table: {
            headers: ['都更實施方式', '適用對象與建物狀況', '產權與資金變動', '公共效益'],
            rows: [
              ['重建 (Reconstruction)', '結構受損、耐震能力不足之老舊建物', '透過權利變換機制重構產權，享有容積獎勵', '大幅提升建物耐震與防災安全，提供公共開放空間'],
              ['整建 (Rehabilitation)', '結構尚安全但立面老舊、無電梯之建物', '外牆拉皮、加裝無障礙電梯、耐震補強', '施工期短、經費低，快速改善老舊社區高齡可及性'],
              ['維護 (Maintenance)', '歷史街區、整體風貌完好之社區', '環境景觀整理、公共設施修繕、綠化', '保存歷史風貌與社區情感紋理']
            ]
          }
        },
        {
          heading: '五、高齡化、少子化與永續包容都市空間重構',
          body: '面對高齡化與少子化雙重人口衝擊，都市空間需進行深層重構。推行「<span className="text-rose-600 font-bold">通用設計都市（<span className="text-indigo-600 font-bold">Universal City</span>）</span>」與「<span className="text-rose-600 font-bold">15分鐘城市（15-Minute City）</span>」，確保居民在步行或單車 15 分鐘距離內即可滿足購物、醫療、教育與休閒需求。同時，結合社會住宅推動「<span className="text-rose-600 font-bold">青銀共居（<span className="text-indigo-600 font-bold">Intergenerational Housing</span>）</span>」社區，促進跨世代交流與互助。',
          steps: [
            '**15分鐘城市**：去中心化、多核心服務節點、人行與單車友善微移動網絡。',
            '**高齡友善設施**：無障礙人行道系統、社區日照中心、長者口袋公園與體健設施。'
          ],
          table: {
            headers: ['人口/社會變遷', '都市空間痛點', '空間重構策略', '代表性實務方案'],
            rows: [
              ['超高齡社會來臨', '高齡者出行不便、舊公寓無電梯成「高空籠居」', '人行道無障礙改善、老舊公寓加裝電梯補助', '通用設計鄰里社區、青銀共居社會住宅'],
              ['少子化與校園閒置', '國小班級減少、校舍空間閒置浪費', '閒置校舍轉型為社區日照中心與幼兒托育園區', '校園空間多功能社區共享重構'],
              ['極端氣候衝擊', '都市熱島效應加劇、短延時強降雨洪患', '海綿城市、滯洪公園、綠屋頂與透水鋪面', '台北市廣慈博愛園區、高雄本和里滯洪池公園']
            ]
          }
        },
        {
          heading: '六、智慧城市與氣候韌性都市空間演變 (Smart & Resilient Cities)',
          body: '當代都市形貌正邁向「<span className="text-rose-600 font-bold">智慧與氣候韌性都市（Smart & Resilient City）</span>」。結合 IoT物聯網感測器、BIM/GIS 數位雙生（<span className="text-indigo-600 font-bold">Digital Twin</span>）與大數據分析，即時監控都市水文、交通、空氣品質與能耗。面對極端氣候，都市設計採取「<span className="text-rose-600 font-bold">海綿城市（<span className="text-indigo-600 font-bold">Sponge City</span>）</span>」策略，以自然解方（Nature-based Solutions, NbS）提升都市防洪韌性。',
          steps: [
            '數位雙生 (Digital Twin)：建立都市級 3D GIS 模型，模擬洪水淹水、熱島風道與交通疏散。',
            '**海綿城市**：透水鋪面 + 雨水花園 + 地下滯洪池，實現「留水於城」。'
          ],
          table: {
            headers: ['韌性都市面向', '技術與設計手段', '都市運作機制', '效益指標'],
            rows: [
              ['氣候防災韌性', '透水鋪面、雨水花園、生態滯洪池 (NbS)', '暴雨時吸水蓄水，平時降溫淨化雨水', '降低都市洪峰流量 30-50%，減緩積水'],
              ['都市熱島減緩', '留設都市風廊 (Wind Corridor)、綠屋頂、高反射率鋪面', '引導海風與山風吹入市區，帶走蓄熱', '降低都市中心區域平均氣溫 1.5-2.0°C'],
              ['智慧數位治理', '都市數位雙生 (Digital Twin) + IoT 微氣候感測器', '即時數據分析，自動調控智慧照明與水防淹警報', '提升都市能源使用效率與應變決策速度']
            ]
          }
        }
      ],
      practices: [
        {
          difficulty: '基礎',
          question: '19世紀埃貝尼澤·霍華德（Ebenezer Howard）提出之「花園城市（Garden City）」理論，其「三磁鐵（Three Magnets）」圖解欲解決何種都市問題？其空間配置有何主要特徵？',
          steps: [
            '**步驟一**：分析欲解決之問題。欲解決工業革命後城市環境惡化、擁擠污染，以及鄉村人口流失、經濟衰退之雙重危機。',
            '**步驟二**：解釋三磁鐵意涵。將「城市磁鐵」（就業與社交優點）與「鄉村磁鐵」（自然環境優點）結合為「城鄉-花園城市磁鐵」。',
            '**步驟三**：說明空間配置特徵。採用圓形圈層規劃，中央為公共公園，外圍為住宅與產業區，最外圍由永久農業綠帶（Greenbelt）環繞，土地歸社區公有。'
          ],
          answer: '花園城市結合城市就業與鄉村自然之優點，採圈層規劃，外圍由永久綠帶環繞，土地公有，防止都市無序蔓延。'
        },
        {
          difficulty: '中等',
          question: '1850年代奧斯曼男爵（Baron Haussmann）主持之「巴黎大改造」，採取了哪些關鍵的都市設計與基礎設施改造手段？',
          steps: [
            '**步驟一**：街道網絡改造。拆除舊中世紀擁擠街區，闢建寬廣放射狀林蔭大道（Boulevards）與圓環廣場，改善交通並利於軍事控管。',
            '**步驟二**：立面規制。強制規定沿街建築採用統一高度、古典石材立面與曼薩頂，塑造尊貴都市形貌。',
            '**步驟三**：基礎設施建設。興建龐大之地下下水道網路與供水系統，解決公共衛生與傳染病危機。'
          ],
          answer: '闢建寬廣放射狀林蔭大道、強制統一沿街建築石材立面與高度、並興建地下下水道系統改善公共衛生。'
        },
        {
          difficulty: '進階',
          question: '在依據《都市更新條例》進行老舊社區重建時，「權利變換（Rights Exchange）」機制的運作邏輯為何？其如何平衡原土地所有權人與實施者（開發商）之權利與成本？',
          steps: [
            '**步驟一**：定義權利變換。權利變換為一種立體土地重劃機制。',
            '**步驟二**：成本與價值計算。由專業估價師評估更新前原地主土地建物價值，以及更新後總房地價值。實施者投入之重建工程費、權利變換費、融資利息等稱為「共同負擔」。',
            '**步驟三**：分配邏輯。更新後房地價值先扣除實施者之「共同負擔」折價抵付後，其餘剩餘價值依原地主更新前之權利價值比例進行配售分配。'
          ],
          answer: '權利變換係評估更新前後房地價值，將實施者投入之重建成本設為「共同負擔」由房地抵付，其餘價值按原地主產權比例分配新房地。'
        },
        {
          difficulty: '深度綜合',
          question: '試分析「15分鐘城市（15-Minute City）」在都市空間重構上的核心理念，並說明其如何應對高齡化社會與氣候變遷雙重挑戰？',
          steps: [
            '**步驟一**：核心理念。主張將都市重新組織為多中心鄰里，使居民在步行或單車 15 分鐘內即可滿足工作、生活、購物、醫療與休閒五大機能。',
            '**步驟二**：應對高齡化。減少長者長途交通奔波，提供完善之鄰里步行無障礙環境與在地日照照護。',
            '**步驟三**：應對氣候變遷。大幅降低私人汽機車使用，減少都市交通碳排放，促進微移動與綠色運輸。'
          ],
          answer: '15分鐘城市透過多核心鄰里配置，讓生活機能於步行單車範圍內達成；能減少長者外出障礙，並顯著降低交通碳排放。'
        },
        {
          difficulty: '實務案例',
          question: '當代「海綿城市（Sponge City）」設計如何運用雨水花園、透水鋪面與生態滯洪池等「自然解方（NbS）」，提升都市面對極端暴雨之韌性？',
          steps: [
            '**步驟一**：透水鋪面。替代傳統不透水瀝青，使雨水能直接滲入地下補給地下水，降低地表逕流量。',
            '**步驟二**：雨水花園。利用窪地植被與下滲過濾土層，滯留並淨化初期雨水。',
            '**步驟三**：生態滯洪池。於暴雨時作為暫時蓄水池吸納洪峰流量，平時作為社區生態公園與微氣候降溫場域。'
          ],
          answer: '透水鋪面促進雨水下滲，雨水花園滯留淨化地表逕流，生態滯洪池於暴雨時削減洪峰流量，達成「滲、滯、蓄、淨、用、排」海綿體效益。'
        },
        {
          difficulty: '法規演變',
          question: '台灣從日治時期「市區改正」演變至戰後《都市計畫法》之「土地使用分區管制（Zoning）」，對都市空間密度與品質產生了哪些影響？',
          steps: [
            '**步驟一**：日治市區改正影響。著重於道路拓寬、騎樓留設與公共衛生基礎設施，屬於線狀與點狀之空間改造。',
            '**步驟二**：戰後分區管制影響。劃分住宅區、商業區、工業區等，並導入「建蔽率」與「容積率」雙重指標。',
            '**步驟三**：綜合效益。有效控制建築開發總密度、確保空地率與日照採光，防止不同機能用地相互干擾。'
          ],
          answer: '市區改正奠定道路下水道基礎；戰後實施土地分區與建蔽率/容積率管制，有效控制開發密度，確保都市採光、通風與公共安全。'
        }
      ],
      practice: {
        difficulty: '基礎',
        question: '19世紀埃貝尼澤·霍華德（Ebenezer Howard）提出之「花園城市（Garden City）」理論，其「三磁鐵（Three Magnets）」圖解欲解決何種都市問題？其空間配置有何主要特徵？',
        steps: [
          '**步驟一**：分析欲解決之問題。欲解決工業革命後城市環境惡化、擁擠污染，以及鄉村人口流失、經濟衰退之雙重危機。',
            '**步驟二**：解釋三磁鐵意涵。將「城市磁鐵」（就業與社交優點）與「鄉村磁鐵」（自然環境優點）結合為「城鄉-花園城市磁鐵」。',
            '**步驟三**：說明空間配置特徵。採用圓形圈層規劃，中央為公共公園，外圍為住宅與產業區，最外圍由永久農業綠帶（Greenbelt）環繞，土地歸社區公有。'
        ],
        answer: '花園城市結合城市就業與鄉村自然之優點，採圈層規劃，外圍由永久綠帶環繞，土地公有，防止都市無序蔓延。'
      }
    }
  ]
};
