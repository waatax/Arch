import type { PracticeItem } from '@/data/types';

function compact(text: string, max = 88) {
  const value = text.replace(/\s+/g, ' ').trim();
  return value.length > max ? `${value.slice(0, max)}…` : value;
}

function isCalculation(question: string) {
  return /求|計算|多少|長度|面積|比例|座標|高程|力矩|應力|機率|莫耳|含水率|頻率|波長|方程式/i.test(question);
}

function isMultipleChoice(question: string) {
  return /\([A-D]\)|[A-D][.、．]/.test(question);
}

/**
 * 將既有作者詳解包進一致的五段解題 SOP。原始推導不會被改寫或省略；
 * 補入的是讀題定位、規則選擇、陷阱排除與答案檢核，讓短詳解也可被學生逐步重現。
 */
export function buildDetailedSolution(item: PracticeItem) {
  const original = item.steps.map((step) => step.trim()).filter(Boolean);
  const steps = [
    `讀題定位：先圈出題目真正要求的量或判斷——「${compact(item.question)}」；把已知條件、單位與限制分開標記。`,
    ...original,
  ];

  if (isCalculation(item.question)) {
    steps.push('計算檢核：重新代入原條件，確認公式使用範圍、正負號、角度方向與單位換算一致；估算量級，排除小數點或倍率錯誤。');
  } else {
    steps.push('觀念檢核：把結論逐字對回定義、規範或因果關係；若其中一個必要條件不成立，就不能選該結論。');
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
