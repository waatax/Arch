'use client';

/**
 * 闖關學習專用語音朗讀引擎（Duolingo 風格語音合成）
 *
 * 特性：
 * 1. 自然轉譯：自動將 LaTeX 數學式、工程符號、單位轉為口語化發音（例：$f'_c$ 轉為「f prime c」）。
 * 2. 雙語智慧偵測：中文科目自動以臺灣國語（zh-TW）朗讀；英文科目或英文句子以美式英語（en-US）朗讀。
 * 3. 循序朗讀：支援「念題目與選項」連續朗讀，並回報當前朗讀步驟供 UI 高亮。
 * 4. 速度切換：支援正常（1.0x）與慢速龜速模式（0.8x），符合語言與難題學習需求。
 */

export interface SpeechOptions {
  lang?: string;
  rate?: number;
  pitch?: number;
  onStart?: () => void;
  onEnd?: () => void;
  onError?: (err: unknown) => void;
  onStep?: (index: number) => void;
}

/** 將包含 LaTeX、Markdown、符號的文字轉換為自然口語文字 */
export function cleanTextForSpeech(raw: string): string {
  if (!raw) return '';
  let s = raw;

  // 1. 去除 {{英文}} 包裹
  s = s.replace(/\{\{([\s\S]+?)\}\}/g, '$1');

  // 2. 常見工程名詞與符號發音轉譯
  s = s.replace(/\$f'_c\$/g, ' f prime c ');
  s = s.replace(/\$f_y\$/g, ' f y ');
  s = s.replace(/\$E_s\$/g, ' E s ');
  s = s.replace(/\$M_n\$/g, ' M n ');
  s = s.replace(/\$M_u\$/g, ' M u ');
  s = s.replace(/\$V_c\$/g, ' V c ');
  s = s.replace(/\$V_s\$/g, ' V s ');
  s = s.replace(/\$V_u\$/g, ' V u ');
  s = s.replace(/\$P_u\$/g, ' P u ');
  s = s.replace(/\$P_c\$/g, ' P c ');
  s = s.replace(/\$I_x\$/g, ' I x ');
  s = s.replace(/\$I_y\$/g, ' I y ');
  s = s.replace(/\$\\sum F_x = 0\$/g, ' x 方向合力等於零 ');
  s = s.replace(/\$\\sum F_y = 0\$/g, ' y 方向合力等於零 ');
  s = s.replace(/\$\\sum M = 0\$/g, ' 對任意點合力矩等於零 ');

  // 3. 比例尺
  s = s.replace(/1\s*:\s*(\d+)/g, '一比$1');

  // 4. LaTeX 特殊符號轉譯
  s = s.replace(/\\text\{([^}]+)\}/g, '$1');
  s = s.replace(/\\mathrm\{([^}]+)\}/g, '$1');
  s = s.replace(/\\mathbf\{([^}]+)\}/g, '$1');

  // 單位
  s = s.replace(/kgf\/cm\^?2/g, '公斤力每平方公分');
  s = s.replace(/N\/mm\^?2/g, '牛頓每平方毫米');
  s = s.replace(/kN\/m\^?2/g, '千牛頓每平方公尺');
  s = s.replace(/kN·m|kN-m/g, '千牛頓公尺');
  s = s.replace(/tf·m|tf-m/g, '公噸力公尺');
  s = s.replace(/tf\/m\^?2/g, '公噸力每平方公尺');
  s = s.replace(/m\/s\^?2/g, '公尺每秒平方');
  s = s.replace(/m\/s/g, '公尺每秒');
  s = s.replace(/cm\^?3/g, '立方公分');
  s = s.replace(/cm\^?2/g, '平方公分');
  s = s.replace(/m\^?3/g, '立方公尺');
  s = s.replace(/m\^?2/g, '平方公尺');

  // 運算符號
  s = s.replace(/\\times/g, ' 乘以 ');
  s = s.replace(/\\div/g, ' 除以 ');
  s = s.replace(/\\pm/g, ' 正負 ');
  s = s.replace(/\\approx/g, ' 約等於 ');
  s = s.replace(/\\neq/g, ' 不等於 ');
  s = s.replace(/\\le(q)?/g, ' 小於等於 ');
  s = s.replace(/\\ge(q)?/g, ' 大於等於 ');
  s = s.replace(/\\degree/g, '度');
  s = s.replace(/\^\{\\circ\}/g, '度');
  s = s.replace(/\^\\circ/g, '度');

  // 分數與根號
  s = s.replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '$2 分之 $1');
  s = s.replace(/\\sqrt\{([^}]+)\}/g, '根號 $1');
  s = s.replace(/\\sqrt\[(\d+)\]\{([^}]+)\}/g, '$1 次方根 $2');

  // 希臘字母
  s = s.replace(/\\theta/g, '西塔');
  s = s.replace(/\\pi/g, '圓周率');
  s = s.replace(/\\Delta/g, '德爾塔');
  s = s.replace(/\\alpha/g, '阿爾法');
  s = s.replace(/\\beta/g, '貝塔');
  s = s.replace(/\\gamma/g, '伽瑪');
  s = s.replace(/\\sigma/g, '西格瑪');
  s = s.replace(/\\tau/g, '套');
  s = s.replace(/\\lambda/g, '拉姆達');
  s = s.replace(/\\omega/g, '歐米加');

  // 次方
  s = s.replace(/\^2/g, '平方');
  s = s.replace(/\^3/g, '立方');
  s = s.replace(/\^\{([^}]+)\}/g, '的 $1 次方');

  // 下標
  s = s.replace(/_([a-zA-Z0-9])/g, ' $1');
  s = s.replace(/_\{([^}]+)\}/g, ' $1');

  // 去除剩餘 LaTeX 與 Markdown
  s = s.replace(/\$+/g, '');
  s = s.replace(/\\/g, '');
  s = s.replace(/\*\*(.*?)\*\*/g, '$1');
  s = s.replace(/\*(.*?)\*/g, '$1');
  s = s.replace(/`([^`]+)`/g, '$1');
  s = s.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');

  // 去除多餘空格與標點修正
  s = s.replace(/\s+/g, ' ').trim();
  return s;
}

/** 判斷文字是否以英文為主 */
export function isMainlyEnglish(text: string): boolean {
  const letters = text.replace(/[^A-Za-z]/g, '').length;
  const cjk = (text.match(/[\u4e00-\u9fa5]/g) || []).length;
  return letters > 8 && letters > cjk * 1.5;
}

let activeUtterance: SpeechSynthesisUtterance | null = null;
let sequenceRunning = false;

export function stopSpeech(): void {
  if (typeof window === 'undefined' || !window.speechSynthesis) return;
  sequenceRunning = false;
  activeUtterance = null;
  window.speechSynthesis.cancel();
}

export function isSpeaking(): boolean {
  if (typeof window === 'undefined' || !window.speechSynthesis) return false;
  return window.speechSynthesis.speaking;
}

/** 取得適合該語系的語音物件 */
function pickVoice(lang: string): SpeechSynthesisVoice | null {
  if (typeof window === 'undefined' || !window.speechSynthesis) return null;
  const voices = window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return null;

  if (lang.startsWith('en')) {
    return (
      voices.find((v) => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('David') || v.name.includes('Zira'))) ||
      voices.find((v) => v.lang.startsWith('en')) ||
      null
    );
  }

  // 臺灣國語優先
  return (
    voices.find((v) => v.lang === 'zh-TW' && (v.name.includes('Natural') || v.name.includes('Yating') || v.name.includes('Hanhan') || v.name.includes('Google') || v.name.includes('HsiaoChen') || v.name.includes('Mei-Jia'))) ||
    voices.find((v) => v.lang === 'zh-TW') ||
    voices.find((v) => v.lang.startsWith('zh')) ||
    null
  );
}

/** 單段文字朗讀 */
export function speakText(raw: string, options?: SpeechOptions): void {
  if (typeof window === 'undefined' || !window.speechSynthesis) return;
  stopSpeech();

  const clean = cleanTextForSpeech(raw);
  if (!clean) return;

  const targetLang = options?.lang || (isMainlyEnglish(clean) ? 'en-US' : 'zh-TW');
  const u = new SpeechSynthesisUtterance(clean);
  u.lang = targetLang;
  u.rate = options?.rate ?? (targetLang.startsWith('en') ? 0.9 : 1.0);
  u.pitch = options?.pitch ?? 1.0;

  const voice = pickVoice(targetLang);
  if (voice) u.voice = voice;

  u.onstart = () => {
    activeUtterance = u;
    options?.onStart?.();
  };

  u.onend = () => {
    activeUtterance = null;
    options?.onEnd?.();
  };

  u.onerror = (e) => {
    activeUtterance = null;
    options?.onError?.(e);
  };

  window.speechSynthesis.speak(u);
}

/** 循序朗讀多個片段（例：先念題目，再念各選項） */
export function speakSequence(
  segments: { text: string; prefix?: string; lang?: string }[],
  options?: SpeechOptions,
): void {
  if (typeof window === 'undefined' || !window.speechSynthesis) return;
  stopSpeech();

  if (segments.length === 0) return;
  sequenceRunning = true;

  let currentIdx = 0;

  const playNext = () => {
    if (!sequenceRunning || currentIdx >= segments.length) {
      sequenceRunning = false;
      options?.onEnd?.();
      return;
    }

    const seg = segments[currentIdx];
    const fullText = seg.prefix ? `${seg.prefix}，${seg.text}` : seg.text;
    const clean = cleanTextForSpeech(fullText);

    if (!clean) {
      currentIdx++;
      playNext();
      return;
    }

    options?.onStep?.(currentIdx);

    const targetLang = seg.lang || options?.lang || (isMainlyEnglish(clean) ? 'en-US' : 'zh-TW');
    const u = new SpeechSynthesisUtterance(clean);
    u.lang = targetLang;
    u.rate = options?.rate ?? (targetLang.startsWith('en') ? 0.9 : 1.0);
    u.pitch = options?.pitch ?? 1.0;

    const voice = pickVoice(targetLang);
    if (voice) u.voice = voice;

    u.onstart = () => {
      activeUtterance = u;
      if (currentIdx === 0) options?.onStart?.();
    };

    u.onend = () => {
      activeUtterance = null;
      currentIdx++;
      // 微小暫停 350ms 讓朗讀節奏更自然
      if (sequenceRunning) {
        setTimeout(playNext, 350);
      }
    };

    u.onerror = (e) => {
      activeUtterance = null;
      sequenceRunning = false;
      options?.onError?.(e);
    };

    window.speechSynthesis.speak(u);
  };

  playNext();
}
