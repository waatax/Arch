# V6.17 大改版實作計畫

## 決策原則

1. 全科全備：共同三科、專業四科與素養延伸均保留並持續維護。
2. 以終為始：每筆已登錄統測題目必須連到完整知識點頁，頁面反向記錄題目 ID。
3. 116 自主選考：平台不替學生假設必採科目，也不顯示固定 700 分；依目標校系做優先排序。
4. 低壓精熟：以 25 分鐘微迴圈與 1／7／21 天錯題回收取代連勝及 ELO。

## 七次迭代

| 輪次 | 檢討焦點 | 可驗收產物 |
|---|---|---|
| R1 | 官方制度與課綱 | `/exam-116`、來源日期與文件雜湊 |
| R2 | 全科內容盤點 | 13 科、所有發布主題均納入品質分母 |
| R3 | 真題—知識點雙向映射 | 每題 `lessonRoute` 與 `covered_question_ids` 一致 |
| R4 | 七段教材路徑 | 七個導覽控制均跳到真實頁面段落 |
| R5 | 學習心理與錯題回收 | 移除 ELO／連勝；四欄錯題卡、八碼錯因、1／7／21 日 |
| R6 | 視覺與可及性 | 每頁章節主圖＋兩張 OpenAI 框架圖，替代文字與語意標題 |
| R7 | 自動化與發布 | 10 類檢查 × 7 輪＝70 Pass，CI build 後部署 GitHub Pages |

## 完成定義

- `pnpm validate:content`、`pnpm validate:v6`、`pnpm validate:android`、`pnpm lint`、`pnpm build`、`pnpm validate:built-links` 全數通過。
- GitHub Actions Pages 工作流程成功，公開網址可讀取新教材、116 指南與學生儀表板。
- 未通過的檢查必須以非零結束碼阻止發布，不得用預寫成功字串取代驗證。

## V6.22 Android／低資源驗收

- `validate:android`：API 36、renderer recovery、低 RAM、HTTPS、R8、簽章隔離與 wrapper 完整性全部通過。
- Gradle 8.13 重跑 JUnit、Release lint、debug／release APK 與 Play AAB；GitHub Actions 在乾淨 Linux runner 使用同一份校驗 wrapper。
- Android Go／低 RAM 情境必測 renderer 被回收、背景回前景、連續章節切換、離線／重連與檔案選擇取消；renderer 真正 crash 不得自動重載同一頁形成循環。
- 教學頁代表 production assets 需維持在 1.3 MB 以下、初始真題 DOM 限 5 題，完整教材與至少五題解析不得因精簡模式刪除。
- `/practice` 靜態 HTML 必須小於 160 KiB、不得序列化題目紀錄，25 個題庫分片必須完整匯出且不得加入 service-worker precache。
