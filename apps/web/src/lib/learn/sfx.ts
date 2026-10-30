'use client';

import { soundEngine } from '@/lib/audio/soundEffects';
import { useLearnStore } from '@/lib/store/learnStore';
import { triggerHaptic, type HapticStyle } from '@/lib/haptics';

/** 闖關音效：依闖關設定的開關播放，不影響全站其他頁面的靜音狀態 */
const on = () => useLearnStore.getState().soundOn;

export const sfx = {
  tap: () => on() && soundEngine.playClickBeep(),
  correct: (combo = 1) => on() && soundEngine.playCorrectChime(combo),
  wrong: () => on() && soundEngine.playSoftWrong(),
  fanfare: () => on() && soundEngine.playLessonFanfare(),
  chest: () => on() && soundEngine.playStampThud(),
};

/** 震動回饋：依闖關設定的「震動」開關（遊戲倫理：可關閉感官刺激） */
export const haptic = (style?: HapticStyle) => {
  if (useLearnStore.getState().hapticsOn) triggerHaptic(style);
};
