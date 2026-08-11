'use client';

import { useEffect, useState, type ComponentType } from 'react';

type IdleWindow = Window & {
  requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
  cancelIdleCallback?: (handle: number) => void;
};

export default function DeferredPomodoro() {
  const [Timer, setTimer] = useState<ComponentType | null>(null);

  useEffect(() => {
    if (document.documentElement.classList.contains('arch-lite')) return;

    let cancelled = false;
    const idleWindow = window as IdleWindow;
    const loadTimer = () => {
      void import('@/components/quiz/PomodoroTimer').then((module) => {
        if (!cancelled) setTimer(() => module.PomodoroTimer);
      }).catch(() => {
        // Optional widget: a failed chunk must never crash or reject globally on
        // older WebViews or an interrupted network connection.
      });
    };
    const idleHandle = idleWindow.requestIdleCallback?.(loadTimer, { timeout: 2500 });
    const timeoutHandle = idleHandle === undefined ? window.setTimeout(loadTimer, 1800) : undefined;

    return () => {
      cancelled = true;
      if (idleHandle !== undefined) idleWindow.cancelIdleCallback?.(idleHandle);
      if (timeoutHandle !== undefined) window.clearTimeout(timeoutHandle);
    };
  }, []);

  return Timer ? <Timer /> : null;
}
