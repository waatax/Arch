# -*- coding: utf-8 -*-
"""
6 Dedicated Standalone TCTE High-School Curriculum Chapters (補齊統測大綱獨立專章)
Ensures 60/60 official 115/116 TCTE units across all 7 exam subjects each have a dedicated episode:
  1. MECH14: 10. 梁內應力：中立軸、彎曲應力與橫向剪應力 (TCTE115-ME12)
  2. MATL14: 9. 混凝土粒料篩分析、氯離子試驗與摻料品管 (TCTE115-MT3 進階專章)
  3. SURV09: 7. 角度測量專章：直線定向、垂直角與經緯儀誤差校正 (TCTE115-SV4)
  4. DRFT17: 13. 投影畫法應用：點、線、面投影與第一／第三象限正視圖 (TCTE115-DR5)
  5. ENGL13: 13. 文化習俗、國際議題與永續建築素養英文 (TCTE115-EN3)
  6. MC16  : 16. 數學 C 統測高頻跨單元綜合實戰總複習 (TCTE115-MC1~MC15)
"""

EXTRA_TCTE_EPISODES: list[dict] = [
    {
        "lesson_id": "MECH14",
        "subject_slug": "mechanics",
        "subject_title": "基礎工程力學",
        "episode_num": 14,
        "topic": {
            "slug": "beam-internal-stress",
            "title": "10. 梁內應力：中立軸、彎曲應力與橫向剪應力",
            "desc": "完整攻克 115/116 統測基礎工程力學第十二單元 ME12：從純彎曲彈性曲線與中立軸推導出彎曲應力公式 σ = My/I，再結合水平剪力平衡推導橫向剪應力 τ = VQ/(It) 與矩形、圓形斷面最大剪應力倍率。",
            "gradeLevel": 11,
            "curriculumCode": "TCTE115-ME12",
            "examHitRate": 5,
            "covered_question_ids": ["115-pro1-14", "114-pro1-15", "113-pro1-12", "112-pro1-16", "111-pro1-13"],
            "step0Prerequisites": [
                "慣性矩 I 與斷面模數 S = I/c（矩形 I = bh³/12, S = bh²/6）",
                "剪力圖 V 與彎矩圖 M 最大值位置判讀（V = 0 處即彎矩極值）",
            ],
            "realLife": {
                "realLifeImportance": "大樓客廳主梁一旦彎曲應力超標會在跨中底部裂開，短深梁若橫向剪應力超標則在支承端直接斜向剪斷；ME12 梁內應力直接決定梁寬 b、梁高 h 與鋼筋配置！",
                "whereUsed": "RC 結構主梁與鋼骨 H 型梁斷面尺寸設計、疊合木梁防層間滑移釘距計算與專技結構技師基礎考科。",
                "juniorHighBridge": "國中槓桿力矩與矩形面積，延伸為斷面模數 S = bh²/6 與中立軸平衡。",
                "everydayAnalogy": "把一把塑膠尺平放輕壓就彎、立起來怎麼壓都壓不彎，就是因為高度 h 平方主導了彎曲抗力！",
                "handsOnObservation": "看看頭頂上的混凝土大梁，為什麼每一根梁都是「瘦高立放（h > b）」而不是「扁平橫放」？答案就在 S = bh²/6。",
                "applicationVariations": [
                    "立放改平放變化：同一矩形梁由立放改平放，面積不變故最大剪應力不變，但抗彎強度瞬間折半、剛度驟降為 1/4！",
                    "斷面形狀切換：矩形最大剪應力 τ_max = 1.5 V/A、實心圓形 = (4/3) V/A、薄壁圓管 = 2.0 V/A，直接套形狀倍率。",
                    "長梁 vs 短深梁控制條件：長跨距梁由上下緣最大彎曲應力控制；短跨高剪力深梁則由中立軸橫向剪應力控制。",
                ],
                "killerTrick": "同一斷面「上下緣看彎曲應力 σ = M/S、中立軸看剪應力 τ = 1.5 V/A」，兩者空間互補且單位全鎖定 N、mm、MPa！",
                "oneSentenceRecap": "彎曲應力呈三角形極值在上下緣、剪應力呈拋物線極值在中立軸，立放高 h 是梁抗彎的絕對王牌。",
            },
            "concepts": [
                {
                    "heading": "中立面、中立軸 (N.A.) 與彈性曲線",
                    "outlineRefs": ["ME12.1"],
                    "formula": "1/ρ = M / (EI) ｜ 彈性斷面中立軸必通過斷面形心",
                    "body": "梁受正彎矩向下凹陷時，頂部纖維受壓縮短、底部纖維受拉伸長，中間必存在一層長度不變的「中立面」，其與橫斷面之交線稱為「中立軸 (Neutral Axis)」。在線彈性與均質材料假設下，軸力總和為零推得中立軸必然通過斷面形心，且梁軸彎曲後之曲率 1/ρ 與彎矩 M 成正比、與抗彎剛度 EI 成反比。",
                    "steps": [
                        "先求橫斷面形心位置 ȳ（對 T 型或組合斷面必須用負面積或分塊法精算），此即中立軸位置。",
                        "計算對中立軸的面積慣性矩 I_NA，並找出頂端與底端至中立軸的最遠距離 c_top、c_bot。",
                        "由曲率公式 1/ρ = M/(EI) 判斷剛度：梁高 h 增為 2 倍時，慣性矩 I 增為 8 倍，撓度劇降為 1/8！",
                    ],
                },
                {
                    "heading": "梁內彎曲應力 (Flexural Stress) 與斷面模數 S",
                    "outlineRefs": ["ME12.2"],
                    "formula": "σ = M·y / I ｜ σ_max = M·c / I = M / S ｜ 矩形 S = bh²/6",
                    "body": "彎曲正向應力沿斷面高度呈線性三角形分布：在中立軸 (y = 0) 處彎曲應力為零，在距離中立軸最遠的上下極緣纖維 (y = c) 達到最大壓應力與最大拉應力。對矩形斷面而言，斷面模數 S = bh²/6，因此梁高 h 平方主導抗彎能力，工程上矩形梁必「立放」而非平放。",
                    "table": {
                        "headers": ["常見斷面形狀", "慣性矩 I_NA", "斷面模數 S = I/c", "最大彎曲應力 σ_max"],
                        "rows": [
                            ["矩形斷面 (寬 b, 高 h)", "bh³ / 12", "bh² / 6", "6M / (bh²)"],
                            ["實心圓形 (直徑 d)", "πd⁴ / 64", "πd³ / 32", "32M / (πd³)"],
                            ["空心矩形 (BH − bh)", "(BH³ − bh³) / 12", "(BH³ − bh³) / (6H)", "M / S"],
                            ["非對稱 T 型斷面", "平行軸定理 Σ(I+Ad²)", "S_top = I/c_t, S_bot = I/c_b", "分別檢核拉、壓極緣"],
                        ],
                    },
                },
                {
                    "heading": "梁內橫向剪應力 (Transverse Shear Stress) 與靜矩 Q",
                    "outlineRefs": ["ME12.3"],
                    "formula": "τ = V·Q / (I·t) ｜ 矩形 τ_max = 1.5(V/A) ｜ 圓形 τ_max = (4/3)(V/A)",
                    "body": "梁承受剪力 V 時，斷面上不僅有垂直剪應力，依據互等剪應力定理也伴隨水平縱向剪應力，避免疊合木梁發生層間滑移。任意高度 y 處的剪應力由 τ = VQ/(It) 決定，其中 Q = A'·y' 為該水平線以外面積對中立軸的一次矩，t 為該處斷面寬度。剪應力在上下自由邊緣為零，於中立軸處達拋物線最大值。",
                    "table": {
                        "headers": ["斷面形狀", "最大剪應力位置", "τ_max / τ_avg 倍率", "統測秒殺公式"],
                        "rows": [
                            ["矩形斷面 (b × h)", "中立軸 (h/2)", "1.5 倍 (3/2)", "τ_max = 3V / (2bh)"],
                            ["實心圓形 (直徑 d)", "中立軸 (圓心)", "4/3 倍 (≈1.33)", "τ_max = 4V / (3A)"],
                            ["薄壁圓管 (平均半徑 r)", "中立軸兩側壁", "2.0 倍", "τ_max = 2V / A"],
                            ["工字型鋼梁 (I-Beam)", "腹板中立軸處", "腹板承擔約 90% 剪力", "近似 τ ≈ V / A_web"],
                        ],
                    },
                },
                {
                    "heading": "彎曲應力與剪應力之空間互補與安全檢核",
                    "outlineRefs": ["ME12.2", "ME12.3"],
                    "formula": "σ_max ≤ σ_allow 且 τ_max ≤ τ_allow ｜ 長梁控彎曲、短深梁控剪力",
                    "body": "同一斷面中，彎曲應力最大處在上下緣（此處剪應力為零），而剪應力最大處在中立軸（此處彎曲應力為零），兩者呈現空間互補。工程設計中，一般長跨距梁由最大彎曲應力控制斷面尺寸；但短跨深梁或高剪力支承端，則必須特別檢核腹板最大橫向剪應力是否超標。",
                    "steps": [
                        "先繪製 SFD 與 BMD，找出全梁最大彎矩 |M_max| 與最大剪力 |V_max|。",
                        "將所有單位統一換算為 N 與 mm（1 kN·m = 10⁶ N·mm，1 MPa = 1 N/mm²）。",
                        "分別計算 σ_max = M_max/S 與 τ_max = 1.5·V_max/A，取兩者中較嚴格的條件決定允許載重 P_allow。",
                    ],
                },
            ],
            "fatalTraps": [
                {
                    "wrongThinking": "矩形梁承受彎矩時，誤以為平放 (寬大於高) 與立放 (高大於寬) 的最大彎曲應力相同。",
                    "correctThinking": "由 S = bh²/6 可知抗彎能力與「高度平方 h²」成正比！例如 10×20 cm 梁立放比平放的抗彎能力整整大 2 倍，剛度大 4 倍。",
                    "trapDescription": "統測高頻陷阱：把寬度 b 與高度 h 代反，直接導致慣性矩與斷面模數大錯特錯。",
                },
                {
                    "wrongThinking": "計算矩形梁最大橫向剪應力時，直接用平均剪應力 τ = V/A 作答，忘記乘以 1.5。",
                    "correctThinking": "矩形梁剪應力呈二次拋物線分布，中立軸最大剪應力為平均剪應力的 1.5 倍（τ_max = 3V / 2A），實心圓則為 4/3 倍。",
                    "trapDescription": "把直接剪力平均公式誤套到梁內橫向剪應力，必掉進命題老師預設的干擾選項！",
                },
            ],
            "eliteMentalModels": [
                {
                    "technique": "「雙圖極值錯位法」— 上下看彎矩、中間看剪力",
                    "explanation": "永遠在腦中疊合兩張斷面圖：彎曲應力是「蝴蝶結三角形」（中立軸 0、上下緣最大）；剪應力是「弓形拋物線」（上下緣 0、中立軸最大）。看到立放比平放直接比 h/b。",
                },
                {
                    "technique": "「N-mm-MPa 一致量綱鎖」",
                    "explanation": "統測梁內應力題最怕單位爆雷：先把 M (kN·m) 乘以 10⁶ 變 N·mm，V (kN) 乘以 10³ 變 N，長度全用 mm，算出來的應力自動就是 MPa！",
                },
            ],
            "worked_examples": [
                {
                    "difficulty": "統測高頻計算",
                    "question": "一矩形斷面簡支木梁，寬 b = 100 mm、高 h = 200 mm，跨距 L = 4 m，於跨度中央受集中載重 P = 12 kN。求梁內最大彎曲應力 σ_max 與最大橫向剪應力 τ_max？",
                    "steps": [
                        "先求最大彎矩與最大剪力：M_max = PL/4 = 12×4/4 = 12 kN·m = 12×10⁶ N·mm；V_max = P/2 = 6 kN = 6000 N。",
                        "計算矩形斷面模數與面積：S = bh²/6 = 100×200²/6 = 666,667 mm³；斷面積 A = 100×200 = 20,000 mm²。",
                        "代入最大彎曲應力：σ_max = M_max / S = 12×10⁶ / (4×10⁶/6) = 18 MPa。",
                        "代入矩形最大剪應力：τ_max = 1.5 × (V_max / A) = 1.5 × (6000 / 20000) = 0.45 MPa。",
                    ],
                    "answer": "最大彎曲應力 σ_max = 18 MPa；最大橫向剪應力 τ_max = 0.45 MPa",
                    "eliteShortcut": "矩形斷面直接套 σ_max = 6M/(bh²) = 6×12×10⁶/(100×40000) = 18 MPa，10 秒搞定！",
                },
                {
                    "difficulty": "統測進階設計",
                    "question": "承上題，若同一根 100 mm × 200 mm 木梁改為「平放」（寬 200 mm、高 100 mm），在相同容許彎曲應力下，其最大可承受彎矩變為原來的幾倍？最大剪應力又如何變化？",
                    "steps": [
                        "比較斷面模數：原立放 S_1 = 100×200²/6；平放 S_2 = 200×100²/6，兩者比值 S_2 / S_1 = 100 / 200 = 1/2。",
                        "在相同容許應力下 M = σ_allow · S，故平放可承受彎矩降為原來的一半（0.5 倍）。",
                        "檢核最大剪應力：因斷面積 A = b×h 保持 20,000 mm² 不變，矩形 τ_max = 1.5 V/A 不受平放或立放影響。",
                    ],
                    "answer": "最大容許彎矩減半（0.5 倍）；最大橫向剪應力不變（同為 1.5 V/A）",
                    "eliteShortcut": "口訣：改平放，面積不變故剪應力不變，但高度減半使抗彎強度折半、抗撓剛度降為 1/4！",
                },
            ],
            "practices": [
                {
                    "difficulty": "114 統測變式",
                    "question": "一實心圓形鋼軸直徑 d = 100 mm，承受最大剪力 V = 31.4 kN，試求此圓軸中立軸處之最大橫向剪應力 τ_max（取 π = 3.14）？",
                    "steps": [
                        "圓軸截面積 A = πd²/4 = 3.14 × 100² / 4 = 7850 mm²。",
                        "平均剪應力 τ_avg = V / A = 31400 / 7850 = 4.0 MPa。",
                        "實心圓形斷面最大剪應力倍率為 4/3：τ_max = (4/3) × 4.0 = 5.33 MPa。",
                    ],
                    "answer": "τ_max = 5.33 MPa（16/3 MPa）",
                    "eliteShortcut": "圓形斷面最大剪應力牢記 4/3 倍，算完平均剪應力 4 MPa 直接乘 4/3 即得 5.33 MPa！",
                },
            ],
        },
    },
    {
        "lesson_id": "MATL14",
        "subject_slug": "materials",
        "subject_title": "材料與試驗",
        "episode_num": 14,
        "topic": {
            "slug": "concrete-aggregates-chloride-qc",
            "title": "9. 混凝土粒料篩分析、氯離子試驗與摻料品管",
            "desc": "針對 115/116 統測材料與試驗第三單元 MT3 必考試驗深度加碼：徹底掌握細骨材篩分析與細度模數 (FM) 計算、粒料含水率四狀態與配比用水修正、CNS 氯離子含量檢測防海砂屋，以及化學與礦物摻料工程應用。",
            "gradeLevel": 11,
            "curriculumCode": "TCTE115-MT3",
            "examHitRate": 5,
            "covered_question_ids": ["115-pro1-28", "114-pro1-31", "113-pro1-29", "112-pro1-33", "111-pro1-30"],
            "step0Prerequisites": [
                "粒料佔混凝土總體積約 70%～75%，級配良窳直接決定工作度與乾縮量",
                "CNS 3090 預拌混凝土品質標準與水灰比定律",
            ],
            "realLife": {
                "realLifeImportance": "台灣早期海砂屋天花板整片混凝土剝落露出鏽蝕鋼筋，禍首就是未做氯離子檢測；砂石過細或表面水未扣除，更會讓水灰比飆升、強度暴跌！",
                "whereUsed": "預拌廠粒料篩分析 FM 品管、工地每車新拌混凝土氯離子快篩抽驗、SSD 用水修正與低碳飛灰爐石混凝土配比。",
                "juniorHighBridge": "國中百分比加權計算與電化學氯離子加速生鏽概念。",
                "everydayAnalogy": "炒飯前洗米殘留的水沒瀝乾，鍋裡還照原本份量倒水就會煮成稀飯；工地濕砂表面帶水沒扣除拌合水，混凝土強度就跟著稀掉！",
                "handsOnObservation": "觀察老舊海邊建築陽台底部混凝土剝落露出紅褐色鏽蝕鋼筋，這就是氯離子超標引發海砂屋病變的真實警訊。",
                "applicationVariations": [
                    "FM 計算底盤陷阱：只加總標準倍數篩（No.4–No.100）累積停留百分比除以 100，底盤 Pan 100% 絕不可計入！",
                    "含水狀態雙向修正：現場粒料濕潤（含水率 > 吸水率）須扣拌合水；烘乾或風乾（含水率 < 吸水率）則須補加拌合水。",
                    "化學 vs 礦物摻料選配：坍度不夠選強塑劑、高溫遠運選緩凝劑、巨積低熱低碳選飛灰與水淬高爐石粉。",
                ],
                "killerTrick": "算 FM 先劃掉底盤、算用水以 SSD 為零點（多水減、缺水加）、氯離子死守 0.15 kg/m³ 防海砂屋！",
                "oneSentenceRecap": "把關粒料級配 FM、落實 SSD 用水修正、嚴守氯離子 ≤ 0.15 kg/m³ 並善用摻料，就能造出百年耐久混凝土。",
            },
            "concepts": [
                {
                    "heading": "細骨材篩分析與細度模數 (Fineness Modulus, FM)",
                    "outlineRefs": ["MT3.2", "MT3.4"],
                    "formula": "FM = (7 支標準篩累積停留百分比總和) / 100 ｜ 標準砂 FM = 2.3 ~ 3.1",
                    "body": "細骨材（砂）篩分析採用 CNS 486 規定之 7 支標準篩（No.4, No.8, No.16, No.30, No.50, No.100 及 3/8 吋等倍數開孔篩）。將各篩的「累積停留百分比」相加除以 100 即得細度模數 FM。FM 數值愈大代表砂愈粗；過粗 (>3.1) 易析離泌水，過細 (<2.3) 比表面積大導致需水量暴增、乾縮龜裂。",
                    "steps": [
                        "先將每一號篩的個別停留重除以總樣重，換算為個別停留百分比。",
                        "由最大篩號（上層）往最小篩號（下層）累加，求得各標準篩之「累積停留百分比」。",
                        "只加總標準倍數篩（嚴禁計入底盤 Pan！）之累積停留百分比，最後除以 100 即為 FM。",
                    ],
                },
                {
                    "heading": "粒料含水四狀態與工地拌合用水修正",
                    "outlineRefs": ["MT3.2", "MT3.4"],
                    "formula": "面乾內飽和 (SSD) 為配比基準 ｜ 有效含水率 = 總含水率 − 吸水率",
                    "body": "混凝土配比設計一律以「面乾內飽和 (SSD)」狀態為基準，此時粒料內部孔隙吸飽水但表面乾燥，既不搶拌合水也不多釋放水。若工地砂石處於濕潤狀態（含水率 > 吸水率），須「扣除」多餘表面水並增加砂石秤重；若處於風乾或烘乾狀態，則須「補加」拌合水以維持設計水灰比。",
                    "table": {
                        "headers": ["含水狀態", "內部孔隙", "表面水分", "工地拌合水修正動作"],
                        "rows": [
                            ["烘乾 (OD)", "全乾 (0%)", "乾燥", "須補加大量拌合水"],
                            ["風乾 (AD)", "部分含水", "乾燥", "須補加不足之吸水差額"],
                            ["面乾內飽和 (SSD)", "飽和 (基準)", "乾燥", "無須修正（配比標準狀態）"],
                            ["濕潤 (Wet)", "飽和", "附著游離水", "須扣除表面自由水並增加骨材重"],
                        ],
                    },
                },
                {
                    "heading": "混凝土氯離子含量試驗與海砂屋防制 (CNS 13465)",
                    "outlineRefs": ["MT3.3", "MT3.4"],
                    "formula": "一般鋼筋混凝土 ≤ 0.15 kg/m³ ｜ 預力混凝土更嚴格控管",
                    "body": "氯離子 (Cl⁻) 會破壞鋼筋表面因水泥高鹼性形成的鈍化保護膜，引發劇烈電化學鏽蝕膨脹（體積膨脹 2~6 倍），造成混凝土保護層爆裂剝落，即俗稱「海砂屋」。依現行 CNS 3090 規範，新拌混凝土中最大水溶性氯離子含量限值為每立方公尺 0.15 公斤以下，出廠與工地現場皆須以氯離子檢測儀嚴格抽驗。",
                    "steps": [
                        "工地混凝土預拌車進場卸料時，依規定取樣新拌混凝土進行水溶性氯離子測試。",
                        "核對測試值是否小於等於 CNS 3090 規定之 0.15 kg/m³ 上限。",
                        "若檢驗超標，該車混凝土必須當場退料嚴禁澆置，並回溯追查海砂來源或拌合水含鹽量。",
                    ],
                },
                {
                    "heading": "化學摻料與礦物摻料（卜作嵐材料）效能比較",
                    "outlineRefs": ["MT3.5"],
                    "formula": "卜作嵐反應：Ca(OH)₂ + SiO₂ + H₂O → 二次 C-S-H 膠體",
                    "body": "混凝土摻料分為「化學摻料」（如減水劑、強塑劑、緩凝劑、速凝劑、輸氣劑，用量少於水泥重 5%）與「礦物摻料」（飛灰、水淬高爐石粉、矽灰）。礦物摻料可消耗水泥水化副產物氫氧化鈣，生成緻密二次 C-S-H 膠體，顯著降低水化熱、提升晚期強度與抗硫酸鹽侵蝕力，同時達成低碳減排。",
                    "table": {
                        "headers": ["摻料分類與名稱", "主要工程功能", "典型應用情境"],
                        "rows": [
                            ["強塑劑 / 高性能減水劑", "不加水大幅提升坍度或減水 15~30%", "高流動性、自充填 SCC、密配筋構件"],
                            ["緩凝劑 (Retarder)", "延緩初凝時間、降低早期水化熱", "酷暑高溫澆置、長距離預拌運輸"],
                            ["輸氣劑 (AEA)", "導入微小均勻獨立氣泡 (4~6%)", "寒冷凍融區耐久性、改善工作度"],
                            ["飛灰 / 爐石粉 (礦物摻料)", "卜作嵐反應、降溫防裂、增晚期強度", "巨積混凝土、海港工程、低碳綠建築"],
                        ],
                    },
                },
            ],
            "fatalTraps": [
                {
                    "wrongThinking": "計算細度模數 FM 時，將最底下底盤 (Pan) 的累積停留百分比 100% 也一併加進去除以 100。",
                    "correctThinking": "底盤 (Pan) 絕對不可計入！FM 只加總標準倍數篩（細骨材為 No.4、No.8、No.16、No.30、No.50、No.100 共 6~7 支標準篩）之累積停留百分比。",
                    "trapDescription": "把底盤 100% 誤加進去會讓算出來的 FM 剛好比正確答案多 1.00，是統測最高頻計算陷阱！",
                },
                {
                    "wrongThinking": "看到砂石潮濕含水，誤以為在配比修正時要「再多加水」幫助潤滑。",
                    "correctThinking": "濕潤骨材表面已經附帶額外自由水！拌合時必須「減少」秤入的拌合水量，否則實際水灰比升高，抗壓強度直接失格。",
                    "trapDescription": "工地用水修正方向正負號搞反，直接影響混凝土水灰比與強度。",
                },
            ],
            "eliteMentalModels": [
                {
                    "technique": "「底盤不計、SSD 為零點」雙錨定法",
                    "explanation": "算 FM 永遠先劃掉底盤 (Pan)；算含水修正永遠以 SSD 吸水率為零點基準，超過就減水、不足就加水。",
                },
            ],
            "worked_examples": [
                {
                    "difficulty": "統測必考計算",
                    "question": "某細骨材篩分析試驗測得各標準篩之累積停留百分比分別為：No.4 為 2%、No.8 為 15%、No.16 為 35%、No.30 為 60%、No.50 為 82%、No.100 為 96%，底盤為 100%。試計算該細骨材之細度模數 FM，並判定是否符合規範？",
                    "steps": [
                        "剔除底盤 (Pan = 100%)，只選取 No.4 至 No.100 六支標準篩。",
                        "加總累積停留百分比：2 + 15 + 35 + 60 + 82 + 96 = 290%。",
                        "除以 100 得細度模數：FM = 290 / 100 = 2.90。",
                        "對照規範 2.3 ≤ FM ≤ 3.1，2.90 落於標準範圍內，屬於偏粗之合格混凝土用砂。",
                    ],
                    "answer": "FM = 2.90，符合混凝土用細骨材規範 (2.3～3.1)",
                    "eliteShortcut": "口訣：劃掉底盤，6 篩累加直接小數點左移兩位！",
                },
            ],
            "practices": [
                {
                    "difficulty": "113 統測實戰",
                    "question": "配比設計每立方公尺需 SSD 細骨材 750 kg、拌合水 180 kg。實測現場細骨材總含水率為 5.0%、吸水率為 1.0%，試求現場實際應秤取之拌合水量為多少 kg？",
                    "steps": [
                        "求細骨材表面游離含水率：5.0% − 1.0% = +4.0%（表面多出水分）。",
                        "計算細骨材多帶入的水重：750 × 4.0% = 30 kg。",
                        "修正後實際拌合水量：180 − 30 = 150 kg。",
                    ],
                    "answer": "實際應秤取拌合水 150 kg（同時濕砂需增量秤取）",
                    "eliteShortcut": "有效表面水 = 含水率減吸水率，正值就從設計水量中扣掉！",
                },
            ],
        },
    },
    {
        "lesson_id": "SURV09",
        "subject_slug": "surveying",
        "subject_title": "測量實習",
        "episode_num": 9,
        "topic": {
            "slug": "angle-surveying-calibration",
            "title": "7. 角度測量專章：直線定向、垂直角與經緯儀誤差校正",
            "desc": "完整覆蓋 115/116 統測測量實習第四單元 SV4 全部 8 項考點：真北、磁北與製圖北（方格北）轉換、全圓方位角與象限方向角互換、垂直角與天頂距正倒鏡指標差計算、以及經緯儀三軸幾何關係與誤差消差檢核。",
            "gradeLevel": 11,
            "curriculumCode": "TCTE115-SV4",
            "examHitRate": 5,
            "covered_question_ids": ["115-pro2-11", "114-pro2-09", "113-pro2-14", "112-pro2-10", "111-pro2-12"],
            "step0Prerequisites": [
                "角度六十進位換算：1° = 60'，1' = 60\"，1 弳 (rad) ≈ 206,265\"",
                "經緯儀與全測站儀對中整平三步驟 SOP",
            ],
            "realLife": {
                "realLifeImportance": "大樓放樣只要角度偏了 1 分鐘，百公尺外柱心就偏掉近 3 公分！懂真北磁北轉換、天頂距指標差與正倒鏡消差邊界，外業測角才真正精準可靠。",
                "whereUsed": "建築地界角度放樣、測量丙乙級技術士水平／垂直角測回實作、經緯儀四軸檢校與高樓垂直度監測。",
                "juniorHighBridge": "國中圓周 360 度方位、直角象限與平均值消去對稱誤差原理。",
                "everydayAnalogy": "拿一隻指針零點歪了 1 度的體重計，正反對稱量兩次取平均可以消掉指針歪斜（指標差），但如果地面本身是斜坡（豎軸沒平），怎麼量都還是歪的！",
                "handsOnObservation": "打開手機指南針觀察「磁北」與地圖正上方「真北」的微小夾角，那就是台灣當地的西偏磁偏角。",
                "applicationVariations": [
                    "真北磁北偏角換算：磁偏角遵循「東正西負」，真方位角 = 磁方位角 + 磁偏角；象限方向角必先轉 0°–360° 全圓方位角再計算。",
                    "天頂距正倒鏡檢核：無誤差時 Z_L + Z_R = 360°；偏離量除以 2 即垂直度盤指標差 x，取正倒鏡平均立即消除！",
                    "正倒鏡消差邊界：可消除視準軸 c、橫軸 i、度盤偏心與指標差；但「豎軸不鉛垂」與「對中誤差」正倒鏡完全無效！",
                ],
                "killerTrick": "口訣「正倒鏡消內不消外」：儀器內部軸線誤差全靠盤左盤右平均消掉，外部未整平與對中偏移必靠測前精平把關！",
                "oneSentenceRecap": "統一方位角與偏角方向，以正倒鏡平均消去內在軸線與指標差，並嚴守測前精平杜絕豎軸誤差。",
            },
            "concepts": [
                {
                    "heading": "直線定向：真北、磁北、方格北與偏角換算",
                    "outlineRefs": ["SV4.1", "SV4.2"],
                    "formula": "真方位角 = 磁方位角 + 磁偏角(東正西負) ｜ 正反方位角相差 180°",
                    "body": "測量直線定向以基準子午線作為 0° 起點，依序分為真北（地理北極）、磁北（羅盤指針）與製圖北／方格北（二度分帶投影縱線）。磁北偏離真北之夾角稱為「磁偏角」，東偏記為正、西偏記為負。全圓方位角由北方順時針起算 0° 至 360°，任意測線之反方位角與正方位角恆相差 180°。",
                    "table": {
                        "headers": ["象限位置", "全圓方位角 φ 範圍", "方向角 (Bearing) 換算", "坐標增量 (ΔN, ΔE) 符號"],
                        "rows": [
                            ["第一象限 (NE)", "0° ~ 90°", "N φ E", "ΔN (+), ΔE (+)"],
                            ["第二象限 (SE)", "90° ~ 180°", "S (180° − φ) E", "ΔN (−), ΔE (+)"],
                            ["第三象限 (SW)", "180° ~ 270°", "S (φ − 180°) W", "ΔN (−), ΔE (−)"],
                            ["第四象限 (NW)", "270° ~ 360°", "N (360° − φ) W", "ΔN (+), ΔE (−)"],
                        ],
                    },
                },
                {
                    "heading": "水平角觀測法：單測回、方向組法與複測法",
                    "outlineRefs": ["SV4.3", "SV4.4", "SV4.5"],
                    "formula": "一測回水平角 = [ (R_L − L_L) + (R_R − L_R) ] / 2",
                    "body": "測設兩目標之水平夾角時，須以「正鏡（盤左 FL）」順時針照準左、右目標讀數，再倒轉望遠鏡改以「倒鏡（盤右 FR）」逆時針觀測右、左目標。取正倒鏡兩半測回之平均值，稱為「一測回」。方向多於三個目標時採方向觀測法（歸零法），須檢核歸零差；高精度單角則採複測法累積倍角以壓低讀數誤差。",
                    "steps": [
                        "正鏡 (FL)：照準起始目標 A 設零度或記讀數，順時針轉照目標 B，算上半測回夾角 β_L = B_L − A_L。",
                        "倒鏡 (FR)：縱轉望遠鏡並水平旋轉 180°，先照 B 再逆時針照 A，算下半測回夾角 β_R = B_R − A_R。",
                        "檢核 |β_L − β_R| 是否在容許限差內，合格後取平均 β = (β_L + β_R)/2。",
                    ],
                },
                {
                    "heading": "垂直角、天頂距與指標差 (Index Error) 正倒鏡公式",
                    "outlineRefs": ["SV4.6"],
                    "formula": "Z_L + Z_R = 360° + 2x ｜ 指標差 x = (Z_L + Z_R − 360°)/2 ｜ 俯仰角 α = 90° − Z",
                    "body": "現代電子經緯儀與全測站儀多採「天頂距 Z」讀數（天頂正上方為 0°，水平為 90°）。理想無誤差時，同一目標的正鏡天頂距 Z_L 與倒鏡天頂距 Z_R 之和必剛好等於 360°。若垂直度盤零點偏移產生指標差 x，則正倒鏡之和會偏離 360°，只需用公式 Z_真 = (Z_L − Z_R + 360°)/2 即可徹底消除指標差！",
                    "steps": [
                        "記錄正鏡天頂距 Z_L 與倒鏡天頂距 Z_R。",
                        "求垂直度盤指標差：x = (Z_L + Z_R − 360°) / 2。",
                        "求正確天頂距 Z = Z_L − x，再換算垂直角（仰角為正、俯角為負）：α = 90° − Z。",
                    ],
                },
                {
                    "heading": "經緯儀幾何四軸校正條件與誤差消差總表",
                    "outlineRefs": ["SV4.7", "SV4.8"],
                    "formula": "照準部水準管軸 ⊥ 豎軸 ｜ 視準軸 ⊥ 橫軸 ｜ 橫軸 ⊥ 豎軸",
                    "body": "經緯儀校正依嚴格順序進行：(1) 水準管軸垂直豎軸（半半改正法）；(2) 十字絲縱絲垂直橫軸；(3) 視準軸垂直橫軸（消除視準軸誤差 c）；(4) 橫軸垂直豎軸（消除橫軸誤差 i）。統測最愛考「哪些誤差可用正倒鏡平均消除、哪些無法消除」：儀器內在偏心與視準/橫軸誤差可消除，但豎軸不鉛垂與對中偏心誤差絕對無法靠正倒鏡消除！",
                    "table": {
                        "headers": ["誤差來源", "正倒鏡平均能否消除", "正確防範與校正對策"],
                        "rows": [
                            ["視準軸誤差 (c) 與橫軸誤差 (i)", "✅ 可完全消除", "盤左盤右平均 + 定期檢校"],
                            ["水平度盤偏心差 / 垂直指標差", "✅ 可完全消除", "正倒鏡或對徑讀數取平均"],
                            ["豎軸不鉛垂（儀器未整平）", "❌ 絕對無法消除", "測前嚴格精平、觀測過程盯緊氣泡"],
                            ["測站對中誤差 / 標桿未直立", "❌ 絕對無法消除", "光學對心精準對點、照準目標底部"],
                        ],
                    },
                },
            ],
            "fatalTraps": [
                {
                    "wrongThinking": "以為只要做了正倒鏡（盤左盤右）觀測取平均，經緯儀沒有精平（豎軸傾斜）的誤差也能自動消掉。",
                    "correctThinking": "正倒鏡只能消除「視準軸誤差 c、橫軸誤差 i、度盤偏心差與指標差」；「豎軸不鉛垂」在倒鏡後傾斜方向仍固定，完全無法靠正倒鏡消除！",
                    "trapDescription": "統測測量實習近五年考了超過 4 次的必考送分／失分分水嶺！",
                },
                {
                    "wrongThinking": "把方向角 S 30° W 直接當成方位角 30° 代入坐標計算。",
                    "correctThinking": "S 30° W 位在第三象限（由正南向西偏 30°），全圓方位角 φ = 180° + 30° = 210°，必須先轉全圓方位角再算 sin/cos。",
                    "trapDescription": "象限符號與起算軸搞混，會讓 ΔN、ΔE 兩個增量正負號全部反轉。",
                },
            ],
            "eliteMentalModels": [
                {
                    "technique": "「正倒鏡消內不消外」檢核口訣",
                    "explanation": "儀器內部的軸線誤差（視準 c、橫軸 i、指標差、度盤偏心）通通靠正倒鏡平均消掉；外部架設失誤（豎軸沒平、對中歪掉、標桿歪斜）正倒鏡全無效！",
                },
            ],
            "worked_examples": [
                {
                    "difficulty": "統測經典計算",
                    "question": "以電子經緯儀觀測一屋頂避雷針頂端，測得正鏡天頂距 Z_L = 78°20'40\"，倒鏡天頂距 Z_R = 281°39'40\"。試求：(1) 垂直度盤指標差 x；(2) 正確天頂距 Z 與仰角 α？",
                    "steps": [
                        "先加總正倒鏡天頂距：Z_L + Z_R = 78°20'40\" + 281°39'40\" = 360°00'20\"。",
                        "代入指標差公式：x = (360°00'20\" − 360°) / 2 = +10\"。",
                        "求正確天頂距：Z = Z_L − x = 78°20'40\" − 10\" = 78°20'30\"。",
                        "換算垂直仰角：α = 90° − Z = 89°59'60\" − 78°20'30\" = +11°39'30\"（仰角）。",
                    ],
                    "answer": "指標差 x = +10\"；正確天頂距 Z = 78°20'30\"；仰角 α = +11°39'30\"",
                    "eliteShortcut": "心算檢核：Z_L + Z_R 比 360° 多 20\"，一半就是 10\"，直接從 Z_L 減 10\"！",
                },
            ],
            "practices": [
                {
                    "difficulty": "114 統測變式",
                    "question": "已知測線 AB 之磁方位角為 125°30'，當地磁偏角為西偏 3°40'，則測線 AB 之真方位角與測線 BA 之反真方位角分別為何？",
                    "steps": [
                        "磁偏角「東正西負」，西偏 3°40' 即 δ = −3°40'。",
                        "AB 真方位角 = 125°30' − 3°40' = 121°50'。",
                        "BA 反真方位角 = 121°50' + 180° = 301°50'。",
                    ],
                    "answer": "AB 真方位角 = 121°50'；BA 反真方位角 = 301°50'",
                    "eliteShortcut": "畫圖最穩：磁北在真北左邊（西偏），從真北順時針量到測線會比磁方位角少一個磁偏角！",
                },
            ],
        },
    },
    {
        "lesson_id": "DRFT17",
        "subject_slug": "drafting",
        "subject_title": "製圖實習",
        "episode_num": 17,
        "topic": {
            "slug": "projection-principles",
            "title": "13. 投影畫法應用：點、線、面投影與第一／第三象限正視圖",
            "desc": "完整攻克 115/116 統測製圖實習第五單元 DR5 全部 8 項考點：投影分類與象限規定、點在四象限的直立/水平投影位置、直線七種空間姿態（正垂線、單斜線、複斜線）實長判別、平面投影特性，以及第一角法與第三角法正視圖嚴格對照。",
            "gradeLevel": 11,
            "curriculumCode": "TCTE115-DR5",
            "examHitRate": 5,
            "covered_question_ids": ["115-pro2-28", "114-pro2-30", "113-pro2-29", "112-pro2-31", "111-pro2-27"],
            "step0Prerequisites": [
                "正投影基本概念：投射線互相平行且垂直於投影面",
                "直立投影面 (VP)、水平投影面 (HP) 與基線 (GL) 展開規則",
            ],
            "realLife": {
                "realLifeImportance": "歐洲機械建築圖用第一角法、台灣與美日 CNS 用第三角法！若看不懂點線面象限展開與實長判別，收到跨國廠商鋼構圖時可能把整個構件上下左右全部裝反！",
                "whereUsed": "CNS 建築工程圖角法判讀、斜屋頂與空間鋼桿實長判別、統測專二 DR5 象限投影必考題與建築三視圖互推。",
                "juniorHighBridge": "國中空間坐標象限與投影影子直覺，系統化為 VP、HP、GL 展開法則。",
                "everydayAnalogy": "第三角法像把房子放進透明玻璃展示盒：從上面看畫在盒蓋（俯視在上），從右邊看畫在右玻璃（右視在右），展開後最符合人類直覺！",
                "handsOnObservation": "拿一支鉛筆在檯燈正下方平行桌面（影子跟筆一樣長＝實長），再斜著拿（影子變短），最後垂直桌面（影子縮成一點＝積聚）。",
                "applicationVariations": [
                    "一、三象限展開位置切換：第一象限「a' 在 GL 上、a 在下」；第三象限「a 在 GL 上、a' 在下」；二、四象限重疊不採用！",
                    "七種直線實長快判：平行哪個投影面就在該面顯實長（TL）；單斜線只在傾斜那個視圖為實長；複斜線三面皆縮短須靠輔助視圖。",
                    "平面邊視圖與實形：面垂直投影面時積聚成斜線（邊視圖 EV），面平行投影面時顯真實形狀（TS）。",
                ],
                "killerTrick": "口訣「平行誰就在誰那裡現真身（實長／實形）」＋「第三角法眼面物：上俯、前中、右在右」！",
                "oneSentenceRecap": "牢記象限展開規則與「平行顯實長、垂直成積聚」，第一／第三角法點線面投影百戰百勝。",
            },
            "concepts": [
                {
                    "heading": "投影分類與空間四象限規定 (VP / HP / GL)",
                    "outlineRefs": ["DR5.1", "DR5.2", "DR5.3"],
                    "formula": "VP 固定不動，HP 順時針旋轉 90° 與 VP 共面展開",
                    "body": "工程圖學投影分為「中心投影（透視圖）」與「平行投影（正投影、斜投影）」。由直立投影面 VP 與水平投影面 HP 垂直相交於基線 GL，將空間劃分為一、二、三、四象限。展開成 2D 圖紙時，規定 HP 前半部向下、後半部向上順時針轉 90° 貼合 VP，因此第二與第四象限投影會重疊，工程製圖只採用第一象限（歐規）與第三象限（台灣 CNS 標準）。",
                    "table": {
                        "headers": ["點所在象限", "對 VP / HP 相對位置", "展開後 a' (VP) 與 a (HP) 位置", "工程圖學採用狀態"],
                        "rows": [
                            ["第一象限", "VP 之前、HP 之上", "a' 在 GL 上方；a 在 GL 下方", "✅ 第一角法 (歐陸/ISO)"],
                            ["第二象限", "VP 之後、HP 之上", "a' 與 a 皆在 GL 上方（重疊）", "❌ 不採用"],
                            ["第三象限", "VP 之後、HP 之下", "a 在 GL 上方；a' 在 GL 下方", "✅ 第三角法 (台灣 CNS/美日)"],
                            ["第四象限", "VP 之前、HP 之下", "a' 與 a 皆在 GL 下方（重疊）", "❌ 不採用"],
                        ],
                    },
                },
                {
                    "heading": "點之投影與三面坐標距離判讀",
                    "outlineRefs": ["DR5.4"],
                    "formula": "前視圖 a' 與俯視圖 a 必在同一鉛垂投影線上（長對正）",
                    "body": "空間任一點 A 在直立面 VP 之投影記為 a'（表現高度與左右位置），在水平面 HP 之投影記為 a（表現前後深度與左右位置），在側立面 PP 之投影記為 a\"。牢記核心法則：點到水平面 HP 的距離（高度），等於直立投影 a' 到基線 GL 的距離；點到直立面 VP 的距離（深度），等於水平投影 a 到基線 GL 的距離。",
                    "steps": [
                        "先在基線 GL 上確定左右座標 X，畫出一條細投影聯線貫穿 VP 與 HP。",
                        "在第三象限中，往上量取「點至 VP 之深度」定出俯視點 a。",
                        "由基線往下量取「點至 HP 之高度」定出前視點 a'，兩者嚴格垂直對齊。",
                    ],
                },
                {
                    "heading": "直線投影七種空間位置與實長 (True Length) 判別",
                    "outlineRefs": ["DR5.5"],
                    "formula": "線平行投影面 → 顯實長 (TL) ｜ 線垂直投影面 → 積聚成一點",
                    "body": "空間直線依與 VP、HP、PP 之平行或傾斜關係分為三大類：平行兩投影面的「正垂線」（一視圖為點、兩視圖顯實長）、僅平行一投影面的「單斜線」（該面顯實長、另兩面縮短）、以及與三面皆不平行的「複斜線」（三視圖皆縮短且傾斜，須用輔助視圖或旋轉法求實長）。",
                    "table": {
                        "headers": ["直線空間類型", "與三投影面關係", "三視圖表現特徵", "是否直接量得實長"],
                        "rows": [
                            ["正垂線（水平/正垂/側垂）", "垂直一面、平行兩面", "一面成點、兩面平行基線", "✅ 兩視圖皆為實長"],
                            ["單斜線（水平/正平/側平）", "僅平行其中一個投影面", "平行面呈斜線、另兩面平行軸", "✅ 僅平行該面為實長"],
                            ["複斜線 (Oblique Line)", "與 VP、HP、PP 皆傾斜", "三個視圖皆為傾斜線段", "❌ 均縮短，需輔助視圖"],
                        ],
                    },
                },
                {
                    "heading": "平面投影特性與第一／第三象限正視圖完整對照",
                    "outlineRefs": ["DR5.6", "DR5.7", "DR5.8"],
                    "formula": "面平行投影面 → 顯實形 (TS) ｜ 面垂直投影面 → 積聚成一斜線（邊視圖 EV）",
                    "body": "平面投影與直線完全對應：正垂面在兩面顯實形或邊視圖；單斜面在垂直之投影面積聚成一條斜線（邊視圖 Edge View），在另兩面呈縮小的相似形；複斜面三視圖皆為縮小形。台灣 CNS 11567 建築製圖規定採用「第三角法」（眼→投影面→物體）：俯視圖置於前視圖上方、右側視圖置於前視圖右方，且角法符號為圓錐台截頭左大右小配合同心圓在右。",
                    "steps": [
                        "辨識圖框標題欄角法符號：同心圓在右（截錐左大右小）＝第三角法；同心圓在左＝第一角法。",
                        "確認三視圖配置：第三角法「俯上、前中、右在右」，最符合直覺視線位置。",
                        "利用 45° 斜折線檢核俯視圖深度與右側視圖寬度是否「寬相等」，防漏虛線。",
                    ],
                },
            ],
            "fatalTraps": [
                {
                    "wrongThinking": "在第三象限點投影中，誤以為前視投影 a' 應該畫在基線 GL 上方、俯視投影 a 畫在下方。",
                    "correctThinking": "第三象限展開後「俯視 a 在 GL 上方、前視 a' 在 GL 下方」；a' 在上、a 在下是第一象限！",
                    "trapDescription": "第一與第三象限展開位置記反，點、線、面投影選擇題會全軍覆沒。",
                },
                {
                    "wrongThinking": "看到直線在三視圖中有一條是水平線，就誤以為任何視圖量出來的長度都是實長。",
                    "correctThinking": "單斜線只在「傾斜顯示的那一個視圖」才是實長 (TL)！平行於基線的那兩個視圖反而是縮短投影。",
                    "trapDescription": "統測經典反直覺考點：正平線在前視圖是斜線（實長），在俯視圖才是水平線（縮短）！",
                },
            ],
            "eliteMentalModels": [
                {
                    "technique": "「第三角法三字訣：眼面物、上俯右右」",
                    "explanation": "把投影面想像成一塊透明玻璃罩在物體外面：從上面看畫在上面（俯視在上），從右邊看畫在右邊（右視在右），展開後完全不會搞錯！",
                },
            ],
            "worked_examples": [
                {
                    "difficulty": "統測高頻觀念",
                    "question": "依據 CNS 工程製圖標準，有一空間直線 AB 平行於直立投影面 (VP)，但與水平投影面 (HP) 夾 30° 角、與側立投影面 (PP) 夾 60° 角。請問 AB 屬於何種直線？在三個主要投影視圖中，哪一個視圖呈現其實長 (TL)？",
                    "steps": [
                        "判斷線型：直線僅平行於 VP 一個投影面，對 HP 與 PP 皆傾斜，故稱為「單斜線」中之「正平線」。",
                        "判斷實長視圖：直線平行哪一個投影面，就在該投影面呈現實長！因 AB 平行 VP，故「前視圖」呈現實長。",
                        "判斷另兩視圖表現：俯視圖與右側視圖皆呈縮短之水平或垂直線段。",
                    ],
                    "answer": "屬於單斜線（正平線），在「前視圖 (VP)」呈現實長",
                    "eliteShortcut": "口訣：平行誰就在誰那裡現真身（實長）！平行 VP → 前視圖實長！",
                },
            ],
            "practices": [
                {
                    "difficulty": "113 統測實戰",
                    "question": "空間中一點 P 位於直立投影面 (VP) 後方 25 mm、水平投影面 (HP) 下方 40 mm。請問點 P 位於第幾象限？展開後其投影 p 與 p' 位於基線 GL 上下何處？",
                    "steps": [
                        "判定象限：VP 後方且 HP 下方，屬於「第三象限」。",
                        "第三象限展開時，HP 後半部向上翻轉至 GL 上方，故水平投影 p 位於 GL 上方 25 mm。",
                        "VP 下半部保留在 GL 下方，故直立投影 p' 位於 GL 下方 40 mm。",
                    ],
                    "answer": "第三象限；p 在 GL 上方 25 mm，p' 在 GL 下方 40 mm",
                    "eliteShortcut": "高度跟 VP 走（決定 p' 距 GL），深度跟 HP 走（決定 p 距 GL）！",
                },
            ],
        },
    },
    {
        "lesson_id": "ENGL13",
        "subject_slug": "english",
        "subject_title": "英語文",
        "episode_num": 13,
        "topic": {
            "slug": "culture-global-sustainability",
            "title": "13. 文化習俗、國際議題與永續建築素養英文",
            "desc": "完整覆蓋 115/116 統測英文第三大綱 EN3（文化與習俗 EN3.1–EN3.9）全部 9 項指標：多元文化與國際禮儀、全球暖化與氣候變遷、人工智慧 AI 科技素養、聯合國永續發展目標 (SDGs) 與綠建築國際情境閱讀。",
            "gradeLevel": 12,
            "curriculumCode": "TCTE115-EN3",
            "examHitRate": 5,
            "covered_question_ids": ["115-english-35", "114-english-38", "113-english-33", "112-english-36", "111-english-39"],
            "step0Prerequisites": [
                "統測閱讀測驗佔 28 分，近年高度聚焦國際永續、AI 科技與跨文化主題",
                "掌握轉折詞 (however, despite, while) 與因果詞 (due to, lead to) 定位文章主旨",
            ],
            "realLife": {
                "realLifeImportance": "全球建築與科技業最紅的三大關鍵字就是「永續減碳（SDGs/Net-Zero）、人工智慧（AI）與跨文化協作」，近三年統測英文閱讀題組幾乎全圍繞這些國際議題命題！",
                "whereUsed": "統測英文 EN3 文化與永續長文閱讀、國際綠建築 LEED 文件研讀、跨國競圖團隊禮儀溝通與統測非選中譯英。",
                "juniorHighBridge": "國中生活英語與基本轉折詞，擴展為國際時事、環境永續與跨文化職場素養詞庫。",
                "everydayAnalogy": "國際永續英文文章幾乎都有標準劇本（問題→成因→解方），就像看氣象防災新聞：先講暖化災情、再講排碳原因、最後提綠建築解方！",
                "handsOnObservation": "搜尋一篇國際綠建築（如北投圖書館或新加坡花園城市）的英文介紹，圈出 sustainable、carbon neutral、renewable、diversity 等高頻詞。",
                "applicationVariations": [
                    "同義改寫對應變化：原文寫 lower energy bills over time，選項必改寫成 reduce long-term energy expenses，絕不死找原字照抄！",
                    "讓步轉折句重心切換：看到 Although / Though / Despite 引導的前半句多為次要讓步，真正作者立場與答案藏在逗號後方主句。",
                    "文化習俗與極端詞排雷：尊重多元文化是核心價值，選項含 always / never / only 等絕對武斷字眼幾乎都是陷阱。",
                ],
                "killerTrick": "鎖定「Problem → Cause → Solution」三段結構＋抓緊 Although 後方主句，同義替換秒配正解！",
                "oneSentenceRecap": "累積多元文化、AI 與氣候永續核心字彙，以 P-C-S 結構與同義改寫法穩拿統測高階素養閱讀分。",
            },
            "concepts": [
                {
                    "heading": "多元文化尊重與國際禮儀高頻字彙 (EN3.1 / EN3.2 / EN3.7)",
                    "outlineRefs": ["EN3.1", "EN3.2", "EN3.7"],
                    "formula": "cultural diversity (多元文化) ｜ etiquette (禮儀) ｜ stereotype (刻板印象)",
                    "body": "統測英文閱讀與對話題常以國際交流、跨國職場或旅遊情境命題，測驗對不同文化習俗的尊重與溝通禮儀。核心關鍵字包含 diversity（多元性）、custom / tradition（習俗傳統）、etiquette / manners（禮儀）、respect（尊重）、stereotype（刻板印象）與 mutual understanding（相互理解），作答時須避開文化偏見或以偏概全的誘答選項。",
                    "table": {
                        "headers": ["核心單字／片語", "中文意義", "統測高頻搭配用法"],
                        "rows": [
                            ["cultural diversity", "多元文化", "embrace / promote cultural diversity"],
                            ["etiquette / manners", "禮儀／規矩", "table manners / business etiquette"],
                            ["stereotype / prejudice", "刻板印象／偏見", "break down stereotypes"],
                            ["adapt to / adjust to", "適應（新文化）", "adapt to local customs"],
                        ],
                    },
                },
                {
                    "heading": "國際情勢、AI 科技與氣候變遷核心詞庫 (EN3.3 / EN3.4)",
                    "outlineRefs": ["EN3.3", "EN3.4"],
                    "formula": "climate change ｜ carbon footprint ｜ artificial intelligence (AI) ｜ renewable energy",
                    "body": "近三年（113–115 年）統測英文閱讀題組幾乎年年出現「全球暖化、淨零減碳、再生能源與人工智慧 AI 應用」等國際時事文章。考生必須熟悉 emission（排放）、carbon neutral（碳中和）、renewable（可再生的）、automation（自動化）、innovation（創新）與 global perspective（國際視野）等高頻詞彙。",
                    "table": {
                        "headers": ["國際議題領域", "必背高頻字彙", "建築與工程跨領域連結"],
                        "rows": [
                            ["氣候變遷與減碳", "global warming, emission, carbon neutral", "Low-carbon concrete / Net-zero building"],
                            ["再生能源與節能", "renewable, solar panel, energy-efficient", "Green building LEED / EEWH"],
                            ["AI 與智慧科技", "artificial intelligence, algorithm, automation", "Smart city / BIM & AI design"],
                            ["循環經濟與環保", "recycle, sustainable, eco-friendly, waste", "Circular construction materials"],
                        ],
                    },
                },
                {
                    "heading": "地球村永續發展與跨文化問題解決 (EN3.5 / EN3.6)",
                    "outlineRefs": ["EN3.5", "EN3.6"],
                    "formula": "sustainable development (永續發展) ｜ practical solution (務實解方)",
                    "body": "面對環境危機與跨國職場挑戰，統測文章常採取「問題提出 (Problem) → 成因剖析 (Cause) → 永續解方 (Solution)」三段式寫作結構。看到 solve / address / tackle a problem、take action、make a difference 等表達時，往往就是主旨題 (Main Idea) 或作者態度題 (Author's Tone) 的直接答案所在。",
                    "steps": [
                        "首段找核心議題：圈出重複出現的主題名詞（如 climate change, AI, green architecture）。",
                        "中段抓轉折與對比：留意 However、On the other hand、Despite 後方真正要強調的觀點。",
                        "末段定作者態度：若提出具體建議與希望，作者態度多為 positive / supportive / hopeful。",
                    ],
                },
                {
                    "heading": "文化涵養、國際觀與統測素養閱讀破題策略 (EN3.8 / EN3.9)",
                    "outlineRefs": ["EN3.8", "EN3.9"],
                    "formula": "同義改寫 (Paraphrasing) = 正解核心 ｜ 過度推論 / 極端字眼 (always, never, only) = 陷阱",
                    "body": "統測文化素養長篇閱讀的正確選項，幾乎不會照抄原文句子，而是透過「同義字替換」重組文意（例如原文 reduce energy use，選項改寫為 save electricity）。同時，題目常故意混用「客觀事實 (Fact)」與「主觀意見 (Opinion)」，審題時須區分數據報告與個人推論。",
                },
            ],
            "fatalTraps": [
                {
                    "wrongThinking": "看到選項出現原文一模一樣的單字就直接選，忽略句意已被偷偷調換主詞或否定詞。",
                    "correctThinking": "統測閱讀最常見「張冠李戴」誘答！正解通常是原文概念的「同義改寫 (Paraphrase)」，選前必須核對主詞、因果方向與時間點。",
                    "trapDescription": "只靠關鍵字掃描不核對整句邏輯，最容易在國際議題閱讀測驗失分。",
                },
                {
                    "wrongThinking": "把選項中出現 all、never、only、must 等絕對字眼當成重點強調而誤選。",
                    "correctThinking": "跨文化與永續議題文章語氣多保持客觀彈性（often, may, help to），含有絕對極端字眼的選項超過 85% 都是錯誤干擾項。",
                    "trapDescription": "忽略語氣限定詞（qualifiers），容易落入過度推論陷阱。",
                },
            ],
            "eliteMentalModels": [
                {
                    "technique": "「P-C-S 結構掃描 ＋ 同義改寫對位」秒殺法",
                    "explanation": "國際永續與文化素養文章 90% 符合 Problem → Cause → Solution 架構。先讀題目關鍵字，回文章定位段落，再用同義替換鎖定正解，一篇 4 題 3 分鐘穩拿滿分！",
                },
            ],
            "worked_examples": [
                {
                    "difficulty": "統測素養閱讀實戰",
                    "question": "Passage excerpt: 'To fight global warming, many architects are now designing green buildings that use solar panels and recycled materials. Although the initial construction cost may be slightly higher, these eco-friendly structures significantly lower energy bills over time.' Question: According to the passage, what is a major benefit of green buildings? (A) They cost less to build at the very beginning. (B) They help reduce long-term energy expenses. (C) They never require any maintenance. (D) They are only built in tropical countries.",
                    "steps": [
                        "定位關鍵字：題目問 major benefit of green buildings（綠建築的主要好處）。",
                        "比對原文轉折句：Although 後表讓步（初期成本略高，故刪 A），主要子句指出 significantly lower energy bills over time（長期大幅降低能源帳單）。",
                        "同義改寫配對：lower energy bills over time ＝ reduce long-term energy expenses，鎖定 (B)；(C) 含極端字 never、(D) 含極端字 only 且無中生有，皆刪去。",
                    ],
                    "answer": "(B) They help reduce long-term energy expenses.",
                    "eliteShortcut": "Although 子句後面才是作者真正重點！看到 lower energy bills 直接秒配 reduce energy expenses！",
                },
            ],
            "practices": [
                {
                    "difficulty": "統測非選中譯英實戰",
                    "question": "中譯英實戰：尊重多元文化並採取行動減少碳足跡，對地球的永續發展非常重要。",
                    "steps": [
                        "先找主詞（動名詞片語）：Respecting cultural diversity and taking action to reduce our carbon footprint。",
                        "配對動詞與句型：is very important / plays a crucial role in...",
                        "完成受詞片語：for the sustainable development of the Earth。",
                    ],
                    "answer": "Respecting cultural diversity and taking action to reduce our carbon footprint is very important for the sustainable development of the Earth.",
                    "eliteShortcut": "統測翻譯必備高分架構：V-ing ... is important for ...（動名詞當主詞，文法精準零失誤）！",
                },
            ],
        },
    },
    {
        "lesson_id": "MC16",
        "subject_slug": "math-c",
        "subject_title": "數學 C",
        "episode_num": 16,
        "topic": {
            "slug": "tcte-capstone-review",
            "title": "16. 統測數學 C 高頻跨單元綜合實戰總複習",
            "desc": "串聯 115/116 統測數學 C 全 15 單元（MC1–MC15）最高頻命題核心：整合三角函數與向量內積、直線圓與二次曲線幾何、矩陣與線性規劃極值，以及微積分切線與定積分面積，帶練歷屆統測真題考場配速策略。",
            "gradeLevel": 12,
            "curriculumCode": "TCTE115-MC1",
            "examHitRate": 5,
            "covered_question_ids": ["115-math-c-1", "114-math-c-1", "113-math-c-1", "112-math-c-1", "111-math-c-1"],
            "step0Prerequisites": [
                "已完成 MC01–MC15 全部 15 單元 108 課綱核心觀念",
                "統測數學 C 共 25 題單選（每題 4 分，滿分 100 分，作答時間 80 分鐘）",
            ],
            "realLife": {
                "realLifeImportance": "統測實戰從來不會在題目旁寫『這題考第幾章』！真實工程計算也是三角、向量、解析幾何與微積分同時登場，學會跨單元辨識題型與 80 分鐘考場配速，才能把平時實力完整變現成高分！",
                "whereUsed": "四技二專統測數學 C 80 分鐘全真應試、大學工程數學／結構矩陣銜接與建築空間最佳化綜合計算。",
                "juniorHighBridge": "整合高一 MC1–MC7 與高二 MC8–MC15 全部公式，建立跨章節解題決策樹。",
                "everydayAnalogy": "單章練習像分開練投籃、運球和傳球；MC16 總複習就是上場打全場比賽，學會看對手陣型（題幹線索）一秒決定出哪一招！",
                "handsOnObservation": "拿一份近五年統測數學 C 考古題，計時 5 分鐘先不計算、只把 25 題各自標出「歸屬哪個單元與第一條起手公式」，訓練考場瞬間辨識力。",
                "applicationVariations": [
                    "跨章綜合題拆解：三角函數結合向量內積求夾角、圓切線結合微分切線斜率、線性規劃結合應用成本，先拆出每個條件對應的工具！",
                    "選擇題三刀流提速：代數恆等式與數列代特值 x=0/1 秒刪三選項；幾何題先畫草圖看象限正負；面積題用 |a|(β−α)³/6 速驗。",
                    "80 分鐘黃金配速：前 30 分鐘穩拿 15 題基礎題（60 分保底）→ 中間 35 分鐘主攻 10 題進階跨章題 → 最後 15 分鐘專查正負號與真數定義域。",
                ],
                "killerTrick": "考場看到卡關超過 2 分鐘的題目立刻標記跳過，先拿滿所有會寫的分數再回頭用特值代入與選項反推攻克壓軸題！",
                "oneSentenceRecap": "串聯全 15 單元工具箱，善用草圖定正負、特值刪錯項與三段配速策略，穩健衝向數學 C 頂標滿分。",
            },
            "concepts": [
                {
                    "heading": "高一核心主軸（MC1–MC7）：函數、三角、向量與直線圓",
                    "outlineRefs": ["MC1.4", "MC2.6", "MC3.2", "MC5.3"],
                    "formula": "正弦 a/sinA = 2R ｜ 內積 a·b = |a||b|cosθ ｜ 點線距 d = |ax₀+by₀+c|/√(a²+b²)",
                    "body": "高一七個單元佔統測數學 C 超過 50% 分數，且最常跨章節命題：例如「三角函數正餘弦定理」結合「向量內積夾角」、「多項式餘式定理」結合「二次函數極值」、以及「圓與直線相切」必考圓心到直線距離 d = r。務必熟練代數式與幾何圖形的雙向轉譯。",
                    "table": {
                        "headers": ["高頻模組", "必考核心公式", "統測秒殺切入點"],
                        "rows": [
                            ["三角與測量 (MC2/MC8)", "正弦、餘弦、和差角公式", "兩邊一夾角用餘弦、對邊對角用正弦"],
                            ["平面與空間向量 (MC3/MC10)", "內積、正射影、外積面積", "垂直即內積為 0；共面/面積看外積"],
                            ["多項式與數列 (MC4/MC6)", "餘式定理 f(a)、等差等比和", "求餘式直接代除式零點最省時"],
                            ["直線與圓 (MC5)", "點到直線距離 d 與半徑 r 比較", "切線必抓「圓心到切線距離 = 半徑」"],
                        ],
                    },
                },
                {
                    "heading": "高二決勝主軸（MC8–MC13）：指對數、空間、矩陣、線性規劃與二次曲線",
                    "outlineRefs": ["MC9.3", "MC10.4", "MC11.2", "MC12.1", "MC13.2"],
                    "formula": "log(ab)=loga+logb ｜ 二階反矩陣行列式 ad−bc≠0 ｜ 橢圓 a²=b²+c² ｜ 雙曲線 c²=a²+b²",
                    "body": "高二單元是拉開 80 分與滿分的關鍵！指對數著重真數大於零與換底公式；空間平面緊扣法向量 n = (a, b, c)；矩陣必考乘法不可交換與二階反矩陣；線性規劃鎖定「極值必在可行解多邊形頂點」；二次曲線則要一眼分辨拋物線、橢圓 (a 最大) 與雙曲線 (c 最大) 的標準式參數關係。",
                    "steps": [
                        "線性規劃速解：先畫出不等式可行區域，算出所有交點（頂點）坐標，直接代入目標函數比大小。",
                        "空間平面與直線：看到平面 ax+by+cz=d，立刻抽出法向量 (a,b,c)，兩平面夾角即兩法向量夾角。",
                        "二次曲線防呆：先配方成標準式，確認中心 (h,k) 與焦點軸向，再套 a, b, c 關係。",
                    ],
                },
                {
                    "heading": "微積分壓軸主軸（MC14–MC15）：切線斜率、極值與定積分面積",
                    "outlineRefs": ["MC14.4", "MC15.4"],
                    "formula": "切線斜率 m = f'(x₀) ｜ 極值點 f'(x) = 0 ｜ 面積 A = ∫[上函數 − 下函數] dx",
                    "body": "統測微積分聚焦多項式函數，屬超高投報率的必拿分單元！微分考兩大應用：求切線方程式（點斜式配導數斜率）與求區間極大極小值（檢核臨界點 f'(x)=0 及端點）；積分考微積分基本定理 F(b) − F(a) 與兩曲線所圍封閉區域面積，切記位在 x 軸下方的定積分值為負，算面積須加絕對值或上減下。",
                    "steps": [
                        "求極值三步：微分令 f'(x) = 0 解臨界點 → 確認是否在給定區間內 → 連同區間端點代回原函數比大小。",
                        "求面積三步：聯立解兩曲線交點當積分上下限 → 判斷哪條曲線在上方 → 積分 [上 − 下] 得正面積。",
                    ],
                },
                {
                    "heading": "統測 80 分鐘考場配速與三層驗算防呆策略",
                    "outlineRefs": ["MC1.1", "MC7.2"],
                    "formula": "前 15 題基礎穩拿 (30 min) → 中後 10 題突破 (35 min) → 最後驗算檢查 (15 min)",
                    "body": "統測數學 C 全卷 25 題皆為四選一單選題，平均每題約 3 分鐘。策略上第一輪先快速掃描 100% 把握的題目建立信心；遇到代數繁雜題可善用「特值代入法」與「選項反推驗算」大幅省時；最後 15 分鐘專查正負號、對數真數範圍與題幹是否問「錯誤選項」。",
                },
            ],
            "fatalTraps": [
                {
                    "wrongThinking": "計算函數與 x 軸所圍面積時，沒檢查圖形是否穿過 x 軸，直接整段從 a 積分到 b 當作面積。",
                    "correctThinking": "定積分具有正負號（x 軸上方為正、下方為負）！若區間內有零點，必須分段取絕對值相加才是總面積。",
                    "trapDescription": "微積分面積題最經典的「正負抵銷」陷阱，未畫簡圖直接積分必錯！",
                },
                {
                    "wrongThinking": "橢圓與雙曲線的 a、b、c 畢氏關係記混，把雙曲線寫成 a² = b² + c²。",
                    "correctThinking": "記住幾何直覺：橢圓焦點在內部，所以長半軸 a 最大（a² = b² + c²）；雙曲線焦點在外部，所以焦距 c 最大（c² = a² + b²）！",
                    "trapDescription": "a 與 c 大小關係搞反，焦點坐標與離心率立刻算錯。",
                },
            ],
            "eliteMentalModels": [
                {
                    "technique": "「畫簡圖 ＋ 特值代入 ＋ 選項量綱反查」考場三刀流",
                    "explanation": "幾何/微積分題先花 5 秒畫草圖定正負；多項式/數列/三角恆等式題代入 x=0、1 或 θ=30° 秒刪 3 個錯選項，穩奪 90 分以上！",
                },
            ],
            "worked_examples": [
                {
                    "difficulty": "跨單元綜合實戰",
                    "question": "已知拋物線 y = x² − 4x + 3 與直線 y = x − 1 相交於 A、B 兩點，試求：(1) 交點 A、B 坐標；(2) 此兩曲線所圍成封閉區域之面積？",
                    "steps": [
                        "聯立求交點：x² − 4x + 3 = x − 1 ⇒ x² − 5x + 4 = 0 ⇒ (x − 1)(x − 4) = 0，得 x = 1 與 x = 4，交點 A(1, 0)、B(4, 3)。",
                        "判斷上下位置：在 1 < x < 4 區間取 x = 2，直線 y = 1 大於拋物線 y = −1，故直線在上。",
                        "列定積分計算面積：A = ∫₁⁴ [(x − 1) − (x² − 4x + 3)] dx = ∫₁⁴ (−x² + 5x − 4) dx = [−x³/3 + 5x²/2 − 4x]₁⁴ = 9/2。",
                    ],
                    "answer": "交點 A(1, 0)、B(4, 3)；封閉區域面積 = 9/2 (4.5)",
                    "eliteShortcut": "拋物線與直線所圍面積速算公式：A = |a|·(β − α)³ / 6 = 1 × (4 − 1)³ / 6 = 27 / 6 = 9/2，5 秒驗算無誤！",
                },
            ],
            "practices": [
                {
                    "difficulty": "統測跨單元向量＋三角",
                    "question": "在平面上已知向量 a = (3, 4)、向量 b = (5, 12)，試求兩向量夾角 θ 之餘弦值 cosθ，以及向量 a 在向量 b 上之正射影長？",
                    "steps": [
                        "計算內積與長度：a·b = 3×5 + 4×12 = 15 + 48 = 63；|a| = 5，|b| = 13。",
                        "求夾角餘弦：cosθ = (a·b) / (|a||b|) = 63 / (5 × 13) = 63/65。",
                        "求正射影長：|a·b| / |b| = 63 / 13。",
                    ],
                    "answer": "cosθ = 63/65；正射影長 = 63/13",
                    "eliteShortcut": "熟背畢氏三元數 (3,4,5) 與 (5,12,13)，長度免算直接套內積公式！",
                },
            ],
        },
    },
]
