'use client';

import { soundEngine } from '@/lib/audio/soundEffects';
import { useLearnStore } from '@/lib/store/learnStore';

/** 闖關音效：依闖關設定的開關播放，不影響全站其他頁面的靜音狀態 */
const on = () => useLearnStore.getState().soundOn;

export const sfx = {
  tap: () => on() && soundEngine.playClickBeep(),
  correct: () => on() && soundEngine.playCorrectChime(),
  wrong: () => on() && soundEngine.playSoftWrong(),
  fanfare: () => on() && soundEngine.playLessonFanfare(),
  chest: () => on() && soundEngine.playStampThud(),
};
