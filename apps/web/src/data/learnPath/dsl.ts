/**
 * 闖關題庫精簡寫法（DSL）解析器
 *
 * 每門課程的題庫以一段純文字撰寫，一行一筆，方便教師直接審閱與修訂：
 *
 *   ## 單元標題 @ 108 課綱學習內容 => subject/topic
 *   - 指南重點（Guidebook，可多行）
 *   Q 題幹 | 正解 | 誘答 | 誘答 | 誘答 // 解析
 *   T 敘述 | O（或 X） // 解析
 *   M 題幹 :: 左 => 右 ; 左 => 右 ; 左 => 右 // 解析
 *   S 題幹 :: 第一步 >> 第二步 >> 第三步 // 解析
 *   N 題幹 | 數值 | 單位 | 容許誤差 // 解析（沒有單位時寫 -）
 *
 * 規則：
 *   - Q 的第一個選項永遠是正解，執行期才洗牌。
 *   - 題幹中的 {{English sentence}} 會顯示為可朗讀的英文。
 *   - 數學式沿用全站 MathText：$...$。
 *   - 「=> subject/topic」可省略；有寫就會在單元上顯示「深入教學頁」連結。
 */
import type { Exercise, LearnUnit } from './types';

export class LearnDslError extends Error {}

const SPEAK_RE = /\{\{([\s\S]+?)\}\}/;

function splitExplain(body: string): [string, string | undefined] {
  const idx = body.indexOf(' // ');
  if (idx === -1) return [body.trim(), undefined];
  return [body.slice(0, idx).trim(), body.slice(idx + 4).trim() || undefined];
}

function speakOf(prompt: string) {
  const m = prompt.match(SPEAK_RE);
  return m ? m[1].trim() : undefined;
}

export function parseCourseDsl(courseId: string, source: string): LearnUnit[] {
  const units: LearnUnit[] = [];
  let current: LearnUnit | null = null;
  const lines = source.split(/\r?\n/);

  const fail = (lineNo: number, msg: string): never => {
    throw new LearnDslError(`[${courseId}] 第 ${lineNo} 行：${msg}\n> ${lines[lineNo - 1]}`);
  };

  lines.forEach((raw, i) => {
    const lineNo = i + 1;
    const line = raw.trim();
    if (!line || line.startsWith('%')) return;

    if (line.startsWith('## ')) {
      let rest = line.slice(3);
      let topic: LearnUnit['topic'];
      const linkIdx = rest.indexOf(' => ');
      if (linkIdx !== -1) {
        const [subject, slug] = rest.slice(linkIdx + 4).trim().split('/');
        if (!subject || !slug) fail(lineNo, '教學頁連結需寫成 subject/topic');
        topic = { subject, topic: slug };
        rest = rest.slice(0, linkIdx);
      }
      const [title, outline] = rest.split(' @ ').map((s) => s?.trim());
      if (!title || !outline) fail(lineNo, '單元標題需寫成「## 標題 @ 課綱學習內容」');
      current = {
        id: `${courseId}-u${units.length + 1}`,
        index: units.length,
        title,
        outline,
        guide: [],
        topic,
        items: [],
      };
      units.push(current);
      return;
    }

    if (!current) return fail(lineNo, '題目必須寫在「## 單元」之下');
    const unit: LearnUnit = current;

    if (line.startsWith('- ')) {
      unit.guide.push(line.slice(2).trim());
      return;
    }

    const tag = line.slice(0, 2);
    const body = line.slice(2);
    if (/(^|\s)\|\s*\|/.test(body.split(' // ')[0])) fail(lineNo, '欄位是空的（相鄰兩個 |）；數值題沒有單位請寫 -');
    const id = `${unit.id}-${unit.items.length + 1}`;
    const [main, explain] = splitExplain(body);
    let item: Exercise;

    switch (tag) {
      case 'Q ': {
        const parts = main.split(' | ').map((s) => s.trim());
        if (parts.length < 3) fail(lineNo, '選擇題至少需要題幹＋2 個選項');
        const [prompt, ...choices] = parts;
        if (new Set(choices).size !== choices.length) fail(lineNo, '選項重複');
        item = { id, type: 'mcq', prompt, choices, answer: 0, explain, speak: speakOf(prompt) };
        break;
      }
      case 'T ': {
        const parts = main.split(' | ').map((s) => s.trim());
        if (parts.length !== 2 || !/^[OX]$/.test(parts[1])) fail(lineNo, '是非題需寫成「敘述 | O」或「敘述 | X」');
        item = { id, type: 'tf', prompt: parts[0], answer: parts[1] === 'O', explain };
        break;
      }
      case 'M ': {
        const [prompt, list] = main.split(' :: ');
        if (!list) fail(lineNo, '配對題需寫成「題幹 :: 左 => 右 ; …」');
        const pairs = list.split(' ; ').map((p) => {
          const [l, r] = p.split(' => ').map((s) => s?.trim());
          if (!l || !r) fail(lineNo, `配對「${p}」缺少 =>`);
          return [l, r] as [string, string];
        });
        if (pairs.length < 3) fail(lineNo, '配對題至少 3 組');
        if (new Set(pairs.map((p) => p[0])).size !== pairs.length || new Set(pairs.map((p) => p[1])).size !== pairs.length) {
          fail(lineNo, '配對題左右兩側都不可重複');
        }
        item = { id, type: 'match', prompt: prompt.trim(), pairs, explain };
        break;
      }
      case 'S ': {
        const [prompt, list] = main.split(' :: ');
        if (!list) fail(lineNo, '排序題需寫成「題幹 :: 一 >> 二 >> 三」');
        const tiles = list.split(' >> ').map((s) => s.trim());
        if (tiles.length < 3) fail(lineNo, '排序題至少 3 個步驟');
        if (new Set(tiles).size !== tiles.length) fail(lineNo, '排序題步驟不可重複');
        item = { id, type: 'order', prompt: prompt.trim(), tiles, explain };
        break;
      }
      case 'N ': {
        const parts = main.split(' | ').map((s) => s.trim());
        if (parts.length < 2) fail(lineNo, '數值題需寫成「題幹 | 數值 | 單位 | 誤差」');
        const answer = Number(parts[1]);
        if (!Number.isFinite(answer)) fail(lineNo, `答案「${parts[1]}」不是數字`);
        const tolerance = parts[3] ? Number(parts[3]) : 0;
        if (!Number.isFinite(tolerance) || tolerance < 0) fail(lineNo, '容許誤差需為非負數');
        const unitText = parts[2] && parts[2] !== '-' ? parts[2] : undefined;
        item = { id, type: 'num', prompt: parts[0], answer, unit: unitText, tolerance, explain };
        break;
      }
      default:
        return fail(lineNo, `無法辨識的行首「${tag.trim()}」`);
    }
    unit.items.push(item);
  });

  return units;
}
