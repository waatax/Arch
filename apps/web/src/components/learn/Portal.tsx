'use client';

import { createPortal } from 'react-dom';

/**
 * 全螢幕關卡與彈窗掛到 body：版面中有 transform 的祖先會讓 position: fixed
 * 以祖先為準、並被 z-50 的導覽列蓋住，所以一律跳出原本的 DOM 樹。
 * 只在使用者操作後才渲染，因此不需處理伺服器端。
 */
export default function Portal({ children }: { children: React.ReactNode }) {
  if (typeof document === 'undefined') return null;
  return createPortal(children, document.body);
}
