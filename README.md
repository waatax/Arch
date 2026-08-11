# Arch

Arch 是面向台灣高工建築科學生的開放學習平台，將四技二專統測準備、建築專業實作、台灣建築案例與本機優先的個人學習教練整合在同一條學習路徑。

目前版本是 **V6.20**。產品、教學、統測覆蓋與技術的唯一總規格見 [`V6-Core.md`](./V6-Core.md)，可重跑的驗收計畫見 [`docs/v6-implementation-plan.md`](./docs/v6-implementation-plan.md)，86 頁五題深度解析紀錄見 [`docs/v6-deep-teaching-iteration.md`](./docs/v6-deep-teaching-iteration.md)；[`Arch-v5.md`](./Arch-v5.md) 與 [`Arch-v4.md`](./Arch-v4.md) 僅保留為歷史規格。

## 目前已有

- Next.js 靜態網站骨架，可部署至 GitHub Pages。
- 統測共同科目、專業科目（一／二）與建築科延伸課程入口。
- 臺中國家歌劇院、路思義教堂、921 地震教育園區案例頁。
- Architectural Editorial 視覺 token、深色模式與響應式版面。
- 來源與學校 overlay registry 的初始資料。

## 開發

需求：Node.js 20 以上、pnpm。

```bash
pnpm install
pnpm validate:content
pnpm dev
pnpm lint
pnpm build
```

本機開發站預設位於 `http://localhost:3000`。正式建置採靜態匯出；核心學習流程不得依賴伺服器或 LLM。

## 專案結構

```text
apps/web/              公開網站與裝置端介面
packages/domain/       掌握度、排程、推薦與資料契約
packages/ui/           設計 token 與共用元件
content/               經審核的教材、題目與案例（規劃中）
data/registry/         官方來源、事實與學校 overlay 登錄
data/schema/           SQLite 與內容資料格式
docs/                  課程對照、研究依據與執行計畫
```

## 內容原則

- 以當年度官方課綱、統測簡章與招生資訊為準，顯示來源、查核日與適用學年度。
- 課程覆蓋與官方考綱對照見 `docs/course-coverage.md`；資料提交前必須通過 `pnpm validate:content`。
- 每章的 OpenAI 教學圖解與生成提示規格記錄於 `docs/image-generation-prompts.md`。
- 手機支援寬度、觸控與發布前抽測路徑記錄於 `docs/responsive-qa.md`。
- 題庫只收錄可合法使用或自行編寫的內容；外部教材以深連結與索引為主。
- 學生作答、錯題、作品與反思預設只留在裝置端，可匯出也可永久刪除。
- 不使用排行榜、扣點、焦慮式連勝或保證錄取文案。

## 授權與貢獻

正式開放投稿前，仍須補齊內容授權、CLA、審稿與下架流程；詳見實作計畫的 P0 治理工作。
