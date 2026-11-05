import type { PracticeItem } from '@/data/types';

// Strip inline HTML / bold markers before truncating: cutting inside a tag ("<span class='…") leaves an unclosed
// attribute that swallows the following list items when the HTML is parsed, and breaks hydration.
function compact(text: string, max = 88) {
  const value = text.replace(/<[^>]*>/g, '').replace(/\*\*/g, '').replace(/\s+/g, ' ').trim();
  if (value.length <= max) return value;
  let cut = value.slice(0, max);
  // Never leave an unpaired $ that would open KaTeX math mid-sentence.
  if ((cut.match(/\$/g) ?? []).length % 2) cut = cut.slice(0, cut.lastIndexOf('$'));
  return `${cut.trimEnd()}…`;
}

function isCalculation(question: string) {
  return /求|計算|多少|長度|面積|比例|座標|高程|力矩|應力|機率|莫耳|含水率|頻率|波長|方程式/i.test(question);
}

function isMultipleChoice(question: string) {
  return /\([A-D]\)|[A-D][.、．]/.test(question);
}

function explainWhy(step: string) {
  if (/單位.{0,12}(換算|統一)|(換算|統一).{0,12}單位/i.test(step)) return '先確認換算倍率；面積與體積須分別使用長度倍率的平方與立方。';
  if (/∑\s*F|Σ\s*F|力平衡|垂直平衡|水平平衡/i.test(step)) return '檢查所選方向的合力是否為零，並確認自由體圖沒有漏掉反力或把力的方向畫反。';
  if (/∑\s*M|Σ\s*M|力矩平衡|對.{0,8}取矩|對.{0,8}取力矩/i.test(step)) return '檢查每個力對所選取矩點的垂直力臂；通過該點的力不產生力矩。';
  if (/圖|方向|角|剖|投影|座標|受力/i.test(step)) return '用圖固定方向與基準，檢查角度從哪一條軸量起，以及每個分量的正負號。';
  if (/公式|=|×|÷|sin|cos|tan|\^|平方|比例/i.test(step)) return '這一步把文字條件翻成可檢查的關係式；每個符號都必須能在題目或圖中找到來源。';
  if (/圖|方向|角|剖|投影|座標|受力/i.test(step)) return '這一步用圖把空間與方向固定下來，避免只靠腦中想像而看反或漏掉條件。';
  if (/因為|所以|因此|故|可知|判斷/i.test(step)) return '這一步建立原因到結果的證據鏈；若前一個條件不成立，結論也要跟著重判。';
  return '做這一步不是為了抄流程，而是把上一個已知條件轉成下一個可驗證的中間結果。';
}

/**
 * 為自我練習題生成具針對性的三階破題提示；若原始 hints 含通用樣板句則自動升級為題目專屬提示。
 */
export function buildPracticeHints(item: PracticeItem, topicTitle?: string): string[] {
  const existing = (item.hints ?? []).map((h) => h.trim()).filter(Boolean);
  const hasGeneric = existing.some((h) =>
    /分析題目核心條件與|先判斷空格所需之詞性或句型語法功能|將已知數值代入公式並注意單位換算/.test(h),
  );
  if (existing.length >= 2 && !hasGeneric) {
    return existing;
  }

  const rawSteps = (item.steps ?? []).map((s) => s.split('｜為什麼：')[0].trim()).filter(Boolean);
  const firstStep = compact(rawSteps[0] ?? '', 84);
  const secondStep = compact(rawSteps[1] ?? rawSteps[0] ?? '', 84);
  const qSnippet = compact(item.question, 64);

  return [
    `第 1 步（審題與條件定位）：先從「${qSnippet}」圈出已知數據、關鍵專有名詞與提問方向（注意單位與正負號）。`,
    firstStep
      ? `第 2 步（核心公式／定律切入）：本題破題關鍵為「${firstStep}」。`
      : `第 2 步（核心公式／定律切入）：對照《${topicTitle ?? '本章'}》核心公式或規範定義列出關係式。`,
    rawSteps.length > 1
      ? `第 3 步（推導與驗算收斂）：接著依「${secondStep}」完成計算或選項排除，並檢核答案量綱。`
      : `第 3 步（推導與驗算收斂）：將條件代入關係式求得結果，並反推檢查是否完全符合題幹限制。`,
  ];
}

function expandShortSteps(rawSteps: string[], question: string, answer: string): string[] {
  if (rawSteps.length >= 3) return rawSteps;
  const expanded: string[] = [];
  for (const s of rawSteps) {
    // Only split on '；' or '。' when there are no HTML tags or LaTeX $ inside that step
    if (!/<[^>]*>|\$/.test(s) && !s.includes('｜為什麼：') && (s.includes('；') || s.split('。').filter(Boolean).length >= 2)) {
      const clauses = s
        .split(/[；。]/)
        .map((c) => c.trim())
        .filter((c) => c.length >= 6);
      if (clauses.length >= 2) {
        expanded.push(...clauses.map((c) => `${c}。`));
        continue;
      }
    }
    expanded.push(s);
  }
  if (expanded.length < 3) {
    expanded.unshift(
      `提取題幹條件：由「${compact(question, 60)}」確認已知條件、適用規範或公式變數｜為什麼：先固定基準與單位，避免直接代錯公式。`,
    );
  }
  if (expanded.length < 3) {
    expanded.push(
      `核對結論與單位：對照推導結果，確認完全符合「${compact(answer, 60)}」｜為什麼：檢查正負號、小數點位數與題幹正反向問法一致。`,
    );
  }
  return expanded;
}

/**
 * 將既有作者詳解包進一致的五段解題 SOP。原始推導不會被改寫或省略；
 * 補入的是讀題定位、規則選擇、陷阱排除與答案檢核，讓短詳解也可被學生逐步重現。
 */
export function buildDetailedSolution(item: PracticeItem) {
  const rawOriginal = item.steps.map((step) => step.trim()).filter(Boolean);
  const original = expandShortSteps(rawOriginal, item.question, item.answer);
  const steps = [
    `先用白話重述：這題要我們根據「${compact(item.question)}」找出一個數值、關係或判斷。先不計算，說清楚最後要回答什麼。`,
    '畫出思考地圖：把已知、未知、限制、單位分成四欄；可以畫圖的題目一定先畫，並在圖上標記方向、位置或前後關係。',
    ...original.map((step, index) => {
      const parts = step.split('｜為什麼：');
      const baseStep = parts[0].trim();
      const why = parts[1] ? parts[1].trim() : explainWhy(baseStep);
      return `正式推理 ${index + 1}：${baseStep}｜${parts[1] ? '為什麼' : '共用檢核提示'}：${why}`;
    }),
  ];

  if (item.commonMistake && !/直接代數字卻未檢查/.test(item.commonMistake)) {
    steps.push(`易錯陷阱防範：${compact(item.commonMistake, 140)}。`);
  }

  if (item.eliteShortcut && !/先用直覺與圖示估算/.test(item.eliteShortcut)) {
    steps.push(`考場秒殺捷徑：${compact(item.eliteShortcut, 140)}。`);
  }

  if (isCalculation(item.question)) {
    steps.push('放回現實檢核：重新代入原條件，確認公式使用範圍、正負號、角度方向與單位一致；再問「這個大小在真實世界合理嗎？」排除小數點或倍率錯誤。');
  } else {
    steps.push('放回原文檢核：把結論逐字對回定義、規範或因果關係；若其中一個必要條件不成立，就不能選該結論。');
  }

  if (isMultipleChoice(item.question)) {
    steps.push(`選項排除：以「${compact(item.answer, 72)}」所需條件為準，逐項排除偷換名詞、方向相反、單位錯誤或只說對一半的干擾選項。`);
  } else {
    steps.push('解法回看：從結論反推一次到題目條件，確認每一個中間量都有依據，沒有跳步使用未給定資料。');
  }

  steps.push(`答案收束：因此本題答案為「${compact(item.answer, 100)}」。作答時保留關鍵公式／判斷依據與必要單位，不只抄最後結果。`);

  const unique = [...new Set(steps)];
  while (unique.length < 5) {
    unique.splice(unique.length - 1, 0, '重點複核：用題幹中的另一個條件交叉檢查目前結論，確認所有資訊都已被使用且彼此不矛盾。');
  }
  return unique;
}
