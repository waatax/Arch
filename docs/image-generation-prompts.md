# Nanobanana 教學圖解生成紀錄 (V5.1 更新)

生成日期：2026-08-06  
生成方式：Nanobanana Image Generator  
用途：13 科、86 個章節的核心觀念與公式關係圖解 (每主題 3-5 張)

## 分鏡策略 (Storyboard)
每個教學主題必須配置 3-5 張插畫，依序涵蓋：
1. **情境導入圖 (Context)**：實務現場的運用（如工地綁鋼筋）。
2. **原理拆解圖 (Mechanism)**：力學向量、內部結構或化學反應。
3. **實務/考試對照圖 (Comparison/Exam)**：圖面與實物的對應，或常見錯誤姿勢/觀念對比。
4. **步驟解析圖 (Step-by-step)**：（視需要）例題的關鍵步驟視覺化。

## 共用提示規格

```text
Use case: scientific-educational
Asset type: source atlas for separate chapter illustrations on an architecture education website
Style: refined architectural editorial technical diagram; warm ivory paper; dark ink linework; muted teal, brick red and blueprint blue; subtle drafting texture.
Composition: strict equal grid panels with generous safe padding and clear gutters; each panel self-contained and readable after cropping.
Constraints: no words, letters, numerals, formulas, logos, watermark or photorealism. Use accurate visual arrows, geometry, spatial relationships and process sequences.
```

精確公式不直接生成在點陣圖中，而由網站 HTML 文字層顯示；圖片負責建立方向、比例、空間與因果的直覺模型。

## 科目提示主題

- 材料與試驗：孔隙率、水泥水化、混凝土配比、石材陶瓷玻璃、木材含水、高分子防水、鋼材拉伸、綠建材生命週期。
- 工程力學：向量分解、自由體圖、形心慣性矩、斜面摩擦、桁架、剪力彎矩、應力應變。
- 測量實習：距離角度、水準測量、儀器整置、閉合導線、座標改正、面積與誤差。
- 製圖實習：線寬、比例、正投影、剖面、平面、立面、尺度標註、CAD 圖層視埠。
- 國語文：古典空間、應用文、修辭、論述判讀、寫作流程、園林文化。
- 英語文：語意網、句構、閱讀層次、對話、克漏脈絡、翻譯寫作。
- 數學 C：三角測高、向量、代數、函數幾何、機率、微積分。
- 物理：力學、功與能、熱傳、聲學、光學、電路。
- 化學：物質分類、水化反應、酸鹼中性化、腐蝕防蝕、高分子、碳循環。
- 歷史：台灣建築演變、中國木構、世界建築、類型演變、文資保存、社會空間變遷。
- 地理：地形選址、氣候回應、都市結構、產業區位、災害韌性、GIS 圖層。
- 公民與社會：社群參與、法權平衡、循環經濟、共融空間、勞安倫理、環境政策。
- 建築延伸：空間設計、構造組裝、CAD/BIM、模型作品集、技能檢定路徑。

## 輸出契約

最終圖片位於 `apps/web/public/learning-visuals/<subject>/<topic>/<image_name>.webp`。原始圖版保留於 Nanobanana 生成紀錄；專案只追蹤經裁切與壓縮的章節成品。
