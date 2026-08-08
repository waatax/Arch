export interface TopicRealLifeGuide {
  realLifeImportance: string;
  juniorHighBridge: string;
  everydayAnalogy: string;
  handsOnObservation: string;
  oneSentenceRecap: string;
}

export function getTopicRealLifeGuide(subjectSlug: string, topicSlug: string, _topicTitle?: string): TopicRealLifeGuide {
  // === 1. Mechanics (基礎工程力學) ===
  if (subjectSlug === 'mechanics') {
    if (topicSlug.includes('vector') || topicSlug.includes('force')) {
      return {
        realLifeImportance: '台北 101 的巨型斜撐鋼柱與淡江大橋的斜拉鋼索，都靠向量正交分解將狂風與地震的推力，精準分散到垂直的立柱與水平的地錨。如果算錯一個分力，鋼索就可能因過載拉斷！',
        juniorHighBridge: '國中數學的「直角三角形與畢氏定理 a² + b² = c²」以及理化的「力的合成與平行四邊形定律」。在建築工程中，斜拉索的張力就是三角形斜邊，水平與垂直分力就是兩個直角邊！',
        everydayAnalogy: '就像你和朋友合力抬一張很重的大桌子，如果兩個人手拉得很開（角度大），你們得花好幾倍的力氣；如果兩個人手垂直往上提，就會省力很多！',
        handsOnObservation: '走在路上看看電線桿斜向拉到地面的鋼絞線，或者大樓施工時塔式起重機（塔吊）後方的傾斜平衡鋼索，那都是力的正交分解現場。',
        oneSentenceRecap: '任一方向的斜向拉力，都可以透過 sin 與 cos 拆成水平推力與垂直抗重力，兩者平方和開根號就是總合力。'
      };
    }
    if (topicSlug.includes('beam') || topicSlug.includes('moment') || topicSlug.includes('stress')) {
      return {
        realLifeImportance: '客廳上方的大樑、陽台突出的懸臂板、捷運高架橋墩，隨時都在承受彎矩 (Bending Moment) 與剪力 (Shear Force)。算對彎矩最大值，才能決定這根樑要埋幾根粗鋼筋，確保幾十年都不會斷裂塌陷！',
        juniorHighBridge: '國中理化的「力矩 = 作用力 × 力臂 (L = F × d)」。轉動門把時離軸心越遠越輕鬆，而建築樑的中心點承受最大彎矩，也是同一個道理！',
        everydayAnalogy: '拿一把 30 公分的塑膠直尺，「平放」時用手指輕輕一按就彎了；但如果你把尺「立起來」再壓，用盡力氣都壓不彎！因為截面高度 (h) 越大，抵抗彎曲的能力 (I = bh³/12) 就會暴增為 8 倍！',
        handsOnObservation: '拿一張 A4 紙分別平放和立著嘗試懸空支撐一支筆，感受立面高度對結構剛度的強大抗彎效果。',
        oneSentenceRecap: '彎矩讓樑上方受壓、下方受拉；只要加大樑的截面高度，抗彎剛度就會呈三次方倍數暴增！'
      };
    }
    return {
      realLifeImportance: '所有矗立在地球上的建築，第一法則就是「合力為零、合力矩為零」的靜力平衡。大至摩天大樓、小至一塊招牌，都必須抵抗重力、風力與地震推力。',
      juniorHighBridge: '國中理化的「兩力平衡（大小相等、方向相反、作用在同一直線上）」與槓桿原理。',
      everydayAnalogy: '就像玩翹翹板，兩邊重量乘以距離相等才能維持水平；建築物的地基支撐反力，就是確保整棟大樓永遠平衡不傾斜的守護者。',
      handsOnObservation: '觀察身邊的三腳架或校園走廊的挑高柱子，看看它們如何穩固地把上方重量傳遞到地面。',
      oneSentenceRecap: '靜力平衡就是 ∑Fx = 0、∑Fy = 0、∑M = 0，三條方程式解開結構的所有未知支承反力。'
    };
  }

  // === 2. Materials (材料與試驗) ===
  if (subjectSlug === 'materials') {
    if (topicSlug.includes('concrete') || topicSlug.includes('slump') || topicSlug.includes('cement')) {
      return {
        realLifeImportance: '預拌混凝土車開到建築工地時，品管工程師第一件事就是做「坍度試驗」。如果水加太多，雖然好倒但強度會大幅暴跌；如果水太少，混凝土會卡在輸送管裡灌不進柱子鋼筋縫隙，造成致命蜂窩孔洞！',
        juniorHighBridge: '國中理化的「質量除以體積等於密度 D = M/V」與水溶液濃度的觀念。混凝土的水灰比 (W/C) 就是水與水泥質量的比例。',
        everydayAnalogy: '就像調製鬆餅或蛋糕麵糊：水加太多麵糊太稀，烤出來軟爛容易破裂（強度低）；水加太少麵糊太乾，倒不進模具裡（施工性差）。品管要找的就是黃金比例！',
        handsOnObservation: '路過正在灌漿的建築工地時，注意看門口地上放著銀色金屬圓錐筒（坍度錐）與尺，工程師正在測量塌落高度。',
        oneSentenceRecap: '水灰比決定混凝土 28 天抗壓強度，坍度試驗決定現場能否順利泵送與灌漿搗實。'
      };
    }
    if (topicSlug.includes('steel') || topicSlug.includes('property') || topicSlug.includes('stress')) {
      return {
        realLifeImportance: '台灣處於地震帶，建築鋼筋不能只是硬，更必須具備「韌性（延展性）」。地震來時鋼筋能先像口香糖一樣拉長吸收能量（降伏），爭取寶貴的逃生時間，而不是瞬間脆性斷裂！',
        juniorHighBridge: '國中理化的「虎克定律：彈簧伸長量與受力成正比」與金屬材料的物理特性。',
        everydayAnalogy: '把一根迴紋針輕輕扳動它會彈回原狀（彈性階段）；用力扳過頭它就變形回不去了（降伏點）；反覆用力凹折處變硬（應變硬化），最後斷裂。',
        handsOnObservation: '拿一根金屬迴紋針慢慢拉開，體會彈性恢復與塑性變形的臨界手感。',
        oneSentenceRecap: '鋼材在比例限度內遵守虎克定律，超過降伏點後產生延性塑性變形吸收地震能量。'
      };
    }
    return {
      realLifeImportance: '建築材料是房屋的血肉。從木材的含水率、紅磚的吸水率到磁磚的耐磨防滑，選錯材料可能導致壁癌、磁磚剝落砸傷路人或鋼筋生鏽。',
      juniorHighBridge: '國中自然課的「密度、孔隙、水的三態變化與熱脹冷縮」。',
      everydayAnalogy: '就像挑選運動球鞋的鞋底橡膠，雨天防滑、吸震耐磨；建築外牆與地磚也必須依據日曬雨淋環境挑選適合的材料規格。',
      handsOnObservation: '摸摸家中浴室磁磚與客廳地磚的表面粗糙度，體會不同材料的防滑與吸水性設計。',
      oneSentenceRecap: 'CNS 國家標準規範材料的真密度、孔隙率與抗壓強度，確保建材在幾十年風吹雨淋下依然安全耐用。'
    };
  }

  // === 3. Surveying (測量實習) ===
  if (subjectSlug === 'surveying') {
    if (topicSlug.includes('level') || topicSlug.includes('elevation')) {
      return {
        realLifeImportance: '捷運隧道從台北與新北兩端同時開挖、高鐵軌道百公里平整鋪設、建築一樓地坪防淹水放樣，高程誤差必須控制在幾毫米之內！水準儀就是確保「水往低處流、軌道不顛簸」的眼睛。',
        juniorHighBridge: '國中數學的「數線上的加減法與高低差」以及理化的「連通管原理與水平面」。',
        everydayAnalogy: '就像量身高：量尺站在地板基準點上，你用視線水平切過去讀出刻度（後視 BS 算出視線高 HI），再看前方同學頭頂刻度（前視 FS 算出對方高程）。',
        handsOnObservation: '在馬路邊或人行道石階上，找找看刻有「內政部國土測繪中心」或「水準點 BM」的銅質圓形標誌釘。',
        oneSentenceRecap: '視線高法公式 HI = BM + BS（基準加後視），未知點高程 Elev = HI - FS（視線減前視）。'
      };
    }
    if (topicSlug.includes('angle') || topicSlug.includes('distance') || topicSlug.includes('coordinate')) {
      return {
        realLifeImportance: '買地蓋房子的第一步就是地籍鑑界！全測站儀發射紅外線光束與角度度盤，精準定出土地四個角的經緯度坐標，少量一公分可能就會引發百萬土地糾紛。',
        juniorHighBridge: '國中數學的「直角坐標系 (X, Y)」、「平面幾何三角角度（30°-60°-90°, 45°-45°-90°）」與極坐標距離。',
        everydayAnalogy: '就像雷達掃描或玩探險遊戲：知道自己在 (0, 0)，朝東北方 45 度走 100 公尺，就能精確標出寶藏在東邊幾公尺、北邊幾公尺的位置！',
        handsOnObservation: '路過道路施工時，觀察戴黃色安全帽的測量人員站在三腳架後方，另一人手持附有紅色菱鏡的標桿。',
        oneSentenceRecap: '坐標正算公式 ΔX = S · sin(方位角)，ΔY = S · cos(方位角)，把距離與角度換算為地籍平面坐標。'
      };
    }
    return {
      realLifeImportance: '差之毫釐，謬以千里。正倒鏡觀測能自動抵消儀器軸線偏差，閉合導線計算則能檢驗量測誤差是否在國家法規容許範圍內。',
      juniorHighBridge: '國中數學的「多邊形內角和 (n - 2) × 180°」與平均值誤差分析。',
      everydayAnalogy: '就像繞操場走一圈回到原點，理論上起點和終點坐標要完全重合；如果有 2 公分的微小差距，就平均分攤給每一個轉折點（閉合差分配）。',
      handsOnObservation: '拿量角器和直尺畫一個閉合三角形，量量看三個內角加起來是不是剛好 180 度。',
      oneSentenceRecap: '測量儀器透過正倒鏡消差與閉合平差，將不可避免的人為與環境誤差收斂到毫米級精準度。'
    };
  }

  // === 4. Drafting (製圖實習) ===
  if (subjectSlug === 'drafting') {
    if (topicSlug.includes('projection') || topicSlug.includes('view')) {
      return {
        realLifeImportance: '建築圖面是工程師與現場泥作、木工、鋼筋工師傅溝通的唯一世界通用語言。採用第三角投影法，能讓各工種看懂牆壁開口在上方還是下方，絕不會把窗戶開反或把樓梯裝反！',
        juniorHighBridge: '國中數學的「空間立體幾何（正方體、圓柱、錐體展開圖）」與生活科技課的「三視圖讀圖」。',
        everydayAnalogy: '想像一個透明的玻璃箱套在模型屋外面：你從上面往下看畫在頂部玻璃（俯視圖），從正面看畫在正前玻璃（正視圖），從右側看畫在右側玻璃（右側視圖）；把箱子展開攤在桌上，俯視圖就在正視圖的正上方！',
        handsOnObservation: '拿手機或任何盒子放在桌上，分別從正上方、正前方與右側面平視觀察，看看到的形狀組合。',
        oneSentenceRecap: '第三角投影法遵守「正俯長對正、正側高平齊、俯側寬相等」三大投影對齊幾何定律。'
      };
    }
    return {
      realLifeImportance: '建築剖面圖上的線條粗細與剖面填充圖例（如 RC 粗實線斜線加黑點、紅磚細斜線），讓工人一眼分辨哪一面是承重牆（不可打除）哪一面是隔間磚牆。',
      juniorHighBridge: '國中美術與生活科技的「工程製圖線條層級（粗實線、細實線、虛線、中心線）」與比例尺應用。',
      everydayAnalogy: '粗實線就像文章的大標題（被切開的主結構），細實線是內文說明（外觀輪廓），虛線則是藏在後面的透視線索（看不見的隱藏面）。',
      handsOnObservation: '翻開家中房屋的買賣平面圖或逃生動線圖，找找看實心黑牆（RC 柱）與空心線條（隔間牆）的差異。',
      oneSentenceRecap: '製圖實習掌握標準線型層級與材料圖例代碼，將三維建築構造精準表達於二維施工圖面。'
    };
  }

  // === 5. Math-C (數學 C) ===
  if (subjectSlug === 'math-c') {
    return {
      realLifeImportance: '斜屋頂的排水坡度、無障礙斜坡 1:12 法規計算、高樓防風桁架的角度受力，都需要精準的三角函數與向量代數支援。',
      juniorHighBridge: '國中數學的「直角三角形邊長比（3:4:5, 1:1:√2, 1:√3:2）」與「二元一次聯立方程式」。',
      everydayAnalogy: '坡度就像溜滑梯，斜率 tan(θ) 就是垂直高度除以水平長度；角度越大越陡峭，雨水流得越快，但施工越危險。',
      handsOnObservation: '量量看學校無障礙坡道的垂直高度與水平長度，算算看坡度是不是符合 1/12（每前進 12 公分上升 1 公分）。',
      oneSentenceRecap: '數學 C 的三角函數與向量是建築空間幾何、日照採光計算與力學分析的核心數學基石。'
    };
  }

  // === 6. Chinese / English (共同科目) ===
  if (subjectSlug === 'chinese') {
    return {
      realLifeImportance: '優秀的建築師不僅要會算結構，更要具備向業主提案、撰寫競圖文案、解讀建築空間意象與傳統園林文化脈絡的能力。',
      juniorHighBridge: '國中文言文閱讀理解、修辭法（排比、譬喻、映襯）與段落寫作結構。',
      everydayAnalogy: '文字描摹空間就像用文字畫施工圖：好的空間散文能讓讀者即使閉上眼睛，也能感受到微風穿過迴廊、陽光灑落天井的光影變化。',
      handsOnObservation: '走進林本源園邸（板橋林家花園）或傳統三合院，觀察「漏窗」、「月門」與「借景」的空間意境。',
      oneSentenceRecap: '國語文訓練空間論述與意象表達能力，從古典園林到現代建築散文皆為空間美學之展現。'
    };
  }

  if (subjectSlug === 'english') {
    return {
      realLifeImportance: '全球頂尖建築軟體（AutoCAD, Revit BIM, Rhino）、國際建築競圖規範與材料 ASTM 規格說明書全為英文撰寫，掌握專業英文能直接無縫接軌國際舞台。',
      juniorHighBridge: '國中英語必備 1200 字彙、基本時態（現在、過去、被動語態）與主從複合句型。',
      everydayAnalogy: '就像玩進口遊戲看懂介面選單一樣，學會 Column（柱）、Beam（樑）、Elevation（立面圖）等關鍵字，看國外建築圖就像看中文一樣自然。',
      handsOnObservation: '開啟建築軟體介面或進口建材包裝，找找看 Section（剖面）、Foundation（基礎）、Elevation（立面）等英文單字。',
      oneSentenceRecap: '建築英文銜接國際 BIM 規範與工程圖說詞彙，提升專業閱讀與跨國營建溝通競爭力。'
    };
  }

  // === 7. Sciences & Social (自然與社會) ===
  if (subjectSlug === 'physics') {
    return {
      realLifeImportance: '綠建築自然通風的「浮力通風（煙囪效應）」、雙層低輻射 Low-E 玻璃的隔熱熱傳導計算、音樂廳的殘響時間聲學吸音，全是物理學在建築的具體實踐！',
      juniorHighBridge: '國中理化的「熱傳播三方式（傳導、對流、輻射）」、「聲音反射與頻率」及「光學反射折射」。',
      everydayAnalogy: '就像熱氣球會往上飛（熱空氣密度小上升），建築天窗打開時，熱空氣自動從上方排出，把地面的涼風抽進室內，不用開冷氣就能降溫！',
      handsOnObservation: '在挑高的客廳或大樓中庭抬頭看，感受上方熱空氣流動與頂部排氣窗的設計。',
      oneSentenceRecap: '物理學解答建築的熱、光、聲、電環境控制，創造冬暖夏涼且節能永續的人性化空間。'
    };
  }

  if (subjectSlug === 'chemistry') {
    return {
      realLifeImportance: '水泥水化反應產生的放熱效應如果沒做好養護降溫，大體積混凝土會直接裂開；沿海建築鋼筋受到氯離子侵蝕產生電化學鏽蝕膨脹，導致海砂屋混凝土剝落！',
      juniorHighBridge: '國中理化的「酸鹼中和 pH 值」、「氧化還原與金屬生鏽」及「化學反應放熱與吸熱」。',
      everydayAnalogy: '就像生石灰加水會沸騰冒煙一樣，水泥粉碰上水也是激烈的化學結晶反應，生成堅硬如岩石的水化矽酸鈣膠體 (C-S-H)。',
      handsOnObservation: '觀察老舊公寓外牆冷氣滴水處或鐵窗邊緣，看看鐵鏽膨脹如何撐裂水泥砂漿層。',
      oneSentenceRecap: '化學反應解析水泥水化結晶強度成長、鋼筋防蝕電化學與綠建材低甲醛健康標準。'
    };
  }

  // Default fallback for humanities, civics, extensions
  return {
    realLifeImportance: '建築不只是一座冰冷的混凝土盒子，它深刻影響著居住者的生活尊嚴、都市防災安全與文化記憶傳承。',
    juniorHighBridge: '國中公民的生活法規、地理的土地利用分區與歷史的聚落聚居演變。',
    everydayAnalogy: '建築法規與都市計畫就像交通規則：沒有紅綠燈大家都會撞在一起；有了建蔽率與容積率，每棟大樓才能享有陽光、新鮮空氣與安全的消防通道。',
    handsOnObservation: '走在街道上抬頭觀察大樓之間的棟距、騎樓退縮空間與一樓無障礙坡道設計。',
    oneSentenceRecap: '建築結合工程科學、人文法規與空間藝術，為人類打造安全、永續且具文化深度的庇護所。'
  };
}
