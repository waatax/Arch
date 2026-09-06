/**
 * iOS Taptic Engine 擬真觸覺回饋模組 (Web Haptics Engine)
 * 遵循 Apple Human Interface Guidelines 震動回饋節奏與毫秒級物理脈衝
 * 針對 iOS Safari 及現代行動端 WebView / PWA 最佳化
 */

export type HapticStyle = 'selection' | 'light' | 'medium' | 'heavy' | 'success' | 'warning' | 'error';

class HapticsEngine {
  private enabled: boolean = true;

  constructor() {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('arch_haptics_enabled');
        if (saved !== null) {
          this.enabled = saved === 'true';
        }
      } catch {
        this.enabled = true;
      }
    }
  }

  public setEnabled(enabled: boolean) {
    this.enabled = enabled;
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem('arch_haptics_enabled', String(enabled));
      }
    } catch {
      // ignore
    }
  }

  public isEnabled(): boolean {
    return this.enabled;
  }

  /**
   * 觸發 Apple Taptic Engine 風格的觸覺回饋
   */
  public trigger(style: HapticStyle = 'light'): void {
    if (!this.enabled || typeof window === 'undefined') return;

    if (!('vibrate' in navigator)) return;

    try {
      switch (style) {
        // iOS Picker View / Tab 切換刻度感 (8ms)
        case 'selection':
          navigator.vibrate(8);
          break;

        // 一般按鈕輕觸 (12ms)
        case 'light':
          navigator.vibrate(12);
          break;

        // 開關切換、模態視窗開啟 (20ms)
        case 'medium':
          navigator.vibrate(20);
          break;

        // 關鍵確認動作、送出 (35ms)
        case 'heavy':
          navigator.vibrate(35);
          break;

        // 成功音效伴隨雙拍雀躍反饋 (12ms - 停 40ms - 18ms)
        case 'success':
          navigator.vibrate([12, 40, 18]);
          break;

        // 警示或重設警告 (25ms - 停 50ms - 25ms)
        case 'warning':
          navigator.vibrate([25, 50, 25]);
          break;

        // 錯誤反饋 (30ms - 停 40ms - 30ms - 停 40ms - 40ms)
        case 'error':
          navigator.vibrate([30, 40, 30, 40, 40]);
          break;
      }
    } catch {
      // 靜默捕捉不支援或安全性限制
    }
  }
}

export const haptics = new HapticsEngine();
export const triggerHaptic = (style?: HapticStyle) => haptics.trigger(style);
