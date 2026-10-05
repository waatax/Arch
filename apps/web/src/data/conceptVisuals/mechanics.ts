import type { TopicVisualMap } from './types';
import {
  angle, area, arrow, arrowAt, arrowTo, axes, barChart, box, circle, dim, distLoad, dot, ellipse, fixed, fmt, frame,
  ground, hatchRect, line, lineChart, lines, moment, node, oblique, path, pill, pin, point, polar, polygon,
  polyline, rect, rightAngle, roller, signedFill, svg, text, wall, type Pt,
} from './kit';

// ───────────────────────── 共用小零件 ─────────────────────────

/** 梁身（淡色矩形） */
const beam = (x1: number, x2: number, y: number, h = 10) => rect(x1, y - h / 2, x2 - x1, h, { tone: 'ink', fill: 'muted', soft: true, w: 1.6 });

/** 天花板（倒置地面） */
const ceiling = (x1: number, x2: number, y: number) => {
  let s = line(x1, y, x2, y, { tone: 'muted', w: 1.6 });
  for (let x = x1 + 4; x <= x2; x += 8) s += line(x, y, x - 6, y - 7, { tone: 'muted', w: 1 });
  return s;
};

/** 莫耳圓（τ 軸向下為正：X 點畫在 (σx, τxy)） */
function mohr(sx: number, sy: number, txy: number, opts: { w?: number; h?: number; scale: number; ticks: number[] }) {
  const w = opts.w ?? 560;
  const h = opts.h ?? 330;
  const c = (sx + sy) / 2;
  const R = Math.hypot((sx - sy) / 2, txy);
  const s1 = c + R;
  const s2 = c - R;
  const k = opts.scale;
  const ox = w / 2 - c * k; // σ = 0 的螢幕 x
  const oy = h / 2 + 4;
  const X = (sig: number) => ox + sig * k;
  const Y = (tau: number) => oy + tau * k; // 向下為正
  let s = '';
  s += arrow(X(Math.min(s2, 0)) - 30, oy, X(Math.max(s1, 0)) + 40, oy, { tone: 'ink', w: 1.4, head: 8 });
  s += arrow(ox, oy - R * k - 34, ox, oy + R * k + 34, { tone: 'ink', w: 1.4, head: 8 });
  s += text(X(Math.max(s1, 0)) + 40, oy - 9, 'σ (MPa)', { anchor: 'end', size: 12, weight: 'bold', italic: true });
  s += text(ox + 8, oy + R * k + 32, 'τ（向下為正）', { size: 12, weight: 'bold' });
  for (const t of opts.ticks) {
    if (t === 0) continue;
    s += line(X(t), oy - 3, X(t), oy + 3, { tone: 'muted', w: 1 });
  }
  s += circle(X(c), oy, R * k, { tone: 'blue', w: 2.2, fill: 'blue', soft: true });
  const px = X(sx);
  const py = Y(txy);
  const qx = X(sy);
  const qy = Y(-txy);
  s += line(px, py, qx, qy, { tone: 'muted', w: 1.3, dash: 'dash' });
  s += line(px, py, px, oy, { tone: 'muted', w: 1, dash: 'dot' });
  s += line(qx, qy, qx, oy, { tone: 'muted', w: 1, dash: 'dot' });
  s += dot(X(c), oy, 4, 'ink');
  s += text(X(c), oy + 18, `C(${fmt(c)}, 0)`, { anchor: 'middle', size: 12, weight: 'bold' });
  s += dot(px, py, 4.5, 'red');
  s += text(px + 8, py + 16, `X(${fmt(sx)}, ${fmt(txy)})`, { tone: 'red', size: 12, weight: 'bold' });
  s += dot(qx, qy, 4.5, 'green');
  s += text(qx - 8, qy - 8, `Y(${fmt(sy)}, ${fmt(-txy)})`, { tone: 'green', size: 12, weight: 'bold', anchor: 'end' });
  s += dot(X(s1), oy, 4.5, 'amber');
  s += dot(X(s2), oy, 4.5, 'amber');
  s += text(X(s1) + 6, oy - 8, `σ_1 = ${fmt(s1)}`, { tone: 'amber', size: 12.5, weight: 'bold' });
  s += text(X(s2) - 6, oy - 8, `σ_2 = ${fmt(s2)}`, { tone: 'amber', size: 12.5, weight: 'bold', anchor: 'end' });
  s += line(X(c), oy, X(c), oy - R * k, { tone: 'violet', w: 1.3, dash: 'dash' });
  s += dot(X(c), oy - R * k, 3.5, 'violet');
  s += text(X(c) + 6, oy - R * k - 8, `τ_max = R = ${fmt(R)}`, { tone: 'violet', size: 12.5, weight: 'bold' });
  // 2θp：由 CX 轉到 σ1
  const degX = (Math.atan2(-(py - oy), px - X(c)) * 180) / Math.PI; // 數學角度
  s += angle(X(c), oy, 34, Math.min(degX, 0), Math.max(degX, 0), `2θ_p=${fmt(Math.abs(degX), 2)}°`, { tone: 'red', labelR: 62 });
  s += line(X(c), oy, px, py, { tone: 'red', w: 1.6 });
  return { svg: svg(w, h, s), c, R, s1, s2 };
}

const dashedCircle = (c: Pt) => circle(c[0], c[1], 58, { tone: 'muted', w: 1.2, dash: 'dash' });

// ───────────────────────── 各主題圖解 ─────────────────────────

export const mechanicsVisuals: TopicVisualMap = {
  'structural-failures': [
    {
      concept: '結構破壞模式與破壞機制分析',
      kind: 'diagram',
      title: '尤拉挫屈：支承條件決定有效長度 KL',
      caption: '同一根柱 (相同 E、I、L)，只改變兩端支承；虛線為原直線位置，藍線為挫屈變形形狀。',
      svg: (() => {
        const cols = [
          { x: 75, K: '1.0', name: '兩端鉸接', top: 'pin', bot: 'pin', shape: (t: number) => Math.sin(Math.PI * t) },
          { x: 210, K: '0.5', name: '兩端固定', top: 'fix', bot: 'fix', shape: (t: number) => (1 - Math.cos(2 * Math.PI * t)) / 2 },
          { x: 345, K: '0.7', name: '一端固定一端鉸接', top: 'pin', bot: 'fix', shape: (t: number) => Math.sin(Math.PI * Math.pow(t, 1.45)) },
          { x: 480, K: '2.0', name: '一端固定一端自由', top: 'free', bot: 'fix', shape: (t: number) => 1 - Math.cos((Math.PI * t) / 2) },
        ];
        const yTop = 58;
        const yBot = 208;
        let s = '';
        for (const c of cols) {
          s += line(c.x, yTop, c.x, yBot, { tone: 'muted', w: 1, dash: 'dash' });
          const pts: Pt[] = [];
          for (let i = 0; i <= 40; i++) {
            const t = i / 40; // 由下往上
            pts.push([c.x + 26 * c.shape(t), yBot - (yBot - yTop) * t]);
          }
          s += polyline(pts, { tone: 'blue', w: 3 });
          if (c.bot === 'fix') s += hatchRect(c.x - 26, yBot, 52, 10, { spacing: 6 }) + line(c.x - 26, yBot, c.x + 26, yBot, { w: 2 });
          else s += pin(c.x, yBot, 12);
          const topX = c.x + 26 * c.shape(1);
          if (c.top === 'fix') s += hatchRect(c.x - 26, yTop - 10, 52, 10, { spacing: 6 }) + line(c.x - 26, yTop, c.x + 26, yTop, { w: 2 });
          else if (c.top === 'pin') {
            s += polygon([[c.x, yTop], [c.x - 9, yTop - 12], [c.x + 9, yTop - 12]], { fill: 'paper', w: 1.5 });
            s += line(c.x - 16, yTop - 12, c.x + 16, yTop - 12, { tone: 'muted', w: 1.6 });
          }
          s += arrow(topX, yTop - (c.top === 'free' ? 34 : 46), topX, yTop - (c.top === 'free' ? 2 : 14), { tone: 'red', w: 2.2, head: 9 });
          s += text(topX + 7, yTop - (c.top === 'free' ? 22 : 34), 'P', { tone: 'red', weight: 'bold', italic: true });
          s += text(c.x, 238, `K = ${c.K}`, { anchor: 'middle', weight: 'bold', size: 14, tone: 'blue' });
          s += text(c.x, 256, c.name, { anchor: 'middle', size: 12, tone: 'muted' });
        }
        s += text(8, 22, 'P_cr = π²EI / (KL)²', { size: 14, weight: 'bold', tone: 'ink' });
        return svg(560, 266, s);
      })(),
      takeaways: [
        '$P_{cr}$ 與 $(KL)^2$ 成反比：兩端鉸接 (K = 1.0) 改成兩端固定 (K = 0.5)，有效長度減半，臨界載重變為 **4 倍**。',
        '懸臂柱 K = 2.0，有效長度是柱長的兩倍，$P_{cr}$ 只剩兩端鉸接的 **1/4**，最容易挫屈。',
        '挫屈由剛度 $EI$ 與細長比 $\\lambda = KL/r$ 控制，與材料抗拉強度無關。',
      ],
    },
    {
      concept: '台灣 921 地震之結構教訓',
      kind: 'diagram',
      title: '軟弱底層與短柱效應',
      caption: '左：一樓挑高無牆，側向變形集中在一樓柱；右：窗台矮牆把柱的可變形高度從 H 縮成 H/3。',
      svg: (() => {
        let s = '';
        // 左：軟弱底層
        const gx = 40, gy = 230, bw = 160, fh = 52;
        s += ground(gx - 10, gx + bw + 40, gy);
        const drift = 26;
        // 一樓柱（傾斜）
        s += line(gx, gy, gx + drift, gy - fh, { w: 3 });
        s += line(gx + bw, gy, gx + bw + drift, gy - fh, { w: 3 });
        // 上部樓層（含填充牆，整體平移）
        for (let i = 1; i <= 3; i++) {
          const y = gy - fh * i;
          s += line(gx + drift, y, gx + bw + drift, y, { w: 3 });
          if (i < 3) {
            s += rect(gx + drift, y - fh, bw, fh, { tone: 'muted', w: 1.2 });
            s += hatchRect(gx + drift + 3, y - fh + 3, bw - 6, fh - 6, { spacing: 9, tone: 'muted' });
          }
          s += line(gx + drift, y, gx + drift, y - (i < 3 ? fh : 0), { w: 3 });
          s += line(gx + bw + drift, y, gx + bw + drift, y - (i < 3 ? fh : 0), { w: 3 });
        }
        s += line(gx, gy, gx, gy - fh, { tone: 'muted', w: 1, dash: 'dash' });
        s += dot(gx, gy, 4.5, 'red') + dot(gx + drift, gy - fh, 4.5, 'red') + dot(gx + bw, gy, 4.5, 'red') + dot(gx + bw + drift, gy - fh, 4.5, 'red');
        s += arrow(gx - 30, gy - fh * 2, gx + drift - 4, gy - fh * 2, { tone: 'amber', w: 2.4, label: '地震力', labelPos: 'start', labelOffset: [-4, -8] });
        s += text(gx + bw / 2 + drift, gy - fh / 2 + 4, '一樓開放（騎樓）', { anchor: 'middle', size: 12, tone: 'red', weight: 'bold' });
        s += text(gx + bw / 2 + 10, 26, '軟弱底層 Soft Story', { anchor: 'middle', weight: 'bold', size: 14 });
        s += text(gx + bw / 2 + 10, 44, '柱頂柱底形成塑性鉸 ●', { anchor: 'middle', size: 12, tone: 'muted' });
        // 右：短柱
        const cx = 400, top = 70, bot = 230;
        s += ground(cx - 90, cx + 110, bot);
        s += line(cx - 80, top, cx + 100, top, { w: 3 });
        s += rect(cx, top, 22, bot - top, { fill: 'muted', soft: true, w: 2 });
        const wallTop = top + (bot - top) / 3;
        s += rect(cx - 70, wallTop, 70, bot - wallTop, { tone: 'muted', w: 1.2 });
        s += hatchRect(cx - 67, wallTop + 3, 64, bot - wallTop - 6, { spacing: 9 });
        s += rect(cx + 22, wallTop, 70, bot - wallTop, { tone: 'muted', w: 1.2 });
        s += hatchRect(cx + 25, wallTop + 3, 64, bot - wallTop - 6, { spacing: 9 });
        s += text(cx - 35, wallTop + 30, '窗台矮牆', { anchor: 'middle', size: 12, tone: 'muted' });
        // X 型裂縫
        s += line(cx + 3, top + 10, cx + 19, wallTop - 8, { tone: 'red', w: 1.8 });
        s += line(cx + 19, top + 10, cx + 3, wallTop - 8, { tone: 'red', w: 1.8 });
        s += dim(cx + 22, top, cx + 22, bot, '', { offset: -100, tone: 'muted' });
        s += text(cx + 132, (top + bot) / 2, 'H', { size: 14, weight: 'bold', italic: true });
        s += dim(cx + 22, top, cx + 22, wallTop, '', { offset: -40 });
        s += text(cx + 72, (top + wallTop) / 2 + 4, "H' = H/3", { size: 12.5, weight: 'bold', tone: 'red' });
        s += text(cx + 10, 26, '短柱效應 Short Column', { anchor: 'middle', weight: 'bold', size: 14 });
        s += text(cx + 10, 44, "k ∝ 1/H³ ⇒ k' = 27k，剪力 V = kΔ 也放大 27 倍", { anchor: 'middle', size: 12, tone: 'muted' });
        return svg(560, 250, s);
      })(),
      takeaways: [
        '軟弱底層：上部樓層有牆、剛度大，地震側移幾乎全部集中在一樓柱，柱頂與柱底先形成塑性鉸。',
        '短柱：側向剛度 $k = 12EI/H^3$，可變形高度縮成 1/3，剛度與分到的剪力都暴增 $3^3 = 27$ 倍，產生 X 形剪力裂縫。',
      ],
    },
    {
      concept: '安全係數 (FS) 與強柱弱梁',
      kind: 'diagram',
      title: '強柱弱梁 vs. 強梁弱柱的崩塌機制',
      caption: '紅點為塑性鉸位置；虛線為原始構架。',
      svg: (() => {
        let s = '';
        const frameAt = (ox: number, mode: 'beam' | 'col') => {
          let g = '';
          const w = 150, fh = 60, n = 3, base = 230;
          g += ground(ox - 14, ox + w + 30, base);
          for (let i = 0; i <= n; i++) {
            const y = base - fh * i;
            if (i > 0) g += line(ox, y, ox + w, y, { tone: 'muted', w: 1, dash: 'dash' });
          }
          g += line(ox, base, ox, base - fh * n, { tone: 'muted', w: 1, dash: 'dash' });
          g += line(ox + w, base, ox + w, base - fh * n, { tone: 'muted', w: 1, dash: 'dash' });
          const sway = (i: number) => (mode === 'beam' ? 9 * i : i >= 1 ? 30 : 0);
          for (let i = 1; i <= n; i++) {
            const y = base - fh * i;
            g += line(ox + sway(i), y, ox + w + sway(i), y, { w: 3 });
            g += line(ox + sway(i - 1), base - fh * (i - 1), ox + sway(i), y, { w: 3 });
            g += line(ox + w + sway(i - 1), base - fh * (i - 1), ox + w + sway(i), y, { w: 3 });
          }
          if (mode === 'beam') {
            for (let i = 1; i <= n; i++) {
              const y = base - fh * i;
              g += dot(ox + sway(i) + 10, y, 4.8, 'red') + dot(ox + w + sway(i) - 10, y, 4.8, 'red');
            }
            g += dot(ox, base - 2, 4.8, 'red') + dot(ox + w, base - 2, 4.8, 'red');
          } else {
            g += dot(ox, base - 4, 4.8, 'red') + dot(ox + w, base - 4, 4.8, 'red');
            g += dot(ox + 30, base - fh + 6, 4.8, 'red') + dot(ox + w + 30, base - fh + 6, 4.8, 'red');
          }
          return g;
        };
        s += frameAt(40, 'beam');
        s += frameAt(330, 'col');
        s += text(118, 26, '✓ 強柱弱梁', { anchor: 'middle', weight: 'bold', size: 14, tone: 'green' });
        s += text(118, 44, '梁端先降伏，整體擺動消能', { anchor: 'middle', size: 12, tone: 'muted' });
        s += text(410, 26, '✗ 強梁弱柱', { anchor: 'middle', weight: 'bold', size: 14, tone: 'red' });
        s += text(410, 44, '一樓柱頂柱底成鉸 → 層崩塌', { anchor: 'middle', size: 12, tone: 'muted' });
        return svg(560, 250, s);
      })(),
      takeaways: [
        '強柱弱梁：塑性鉸分散在各樓層梁端，整棟一起擺動吸收能量，柱子仍能撐住垂直載重。',
        '強梁弱柱：塑性鉸集中在同一層柱的上下端，形成「層機構」，該層瞬間壓垮 (pancake collapse)。',
      ],
    },
  ],

  'parallel-force-systems': [
    {
      concept: '等值合力與作用點',
      kind: 'diagram',
      title: '平行力合力的大小與作用線位置',
      caption: '兩向下平行力 10 kN（x = 1 m）與 20 kN（x = 4 m）；紅色虛線箭頭為等值合力。',
      svg: (() => {
        const X = (m: number) => 60 + m * 80;
        const y = 150;
        let s = beam(X(0), X(5), y, 8);
        s += arrow(X(1), y - 70, X(1), y - 5, { tone: 'blue', w: 2.4, label: '10 kN', labelOffset: [8, -40] });
        s += arrow(X(4), y - 110, X(4), y - 5, { tone: 'blue', w: 2.8, label: '20 kN', labelOffset: [8, -70] });
        s += arrow(X(3), y + 92, X(3), y + 6, { tone: 'red', w: 2.8, dash: 'dash' });
        s += text(X(3) + 8, y + 82, 'R = 30 kN（等值合力）', { tone: 'red', weight: 'bold' });
        s += dot(X(0), y, 4, 'ink') + text(X(0) - 6, y - 10, 'O', { anchor: 'end', weight: 'bold', italic: true });
        s += dim(X(0), y, X(1), y, '1 m', { offset: -24 });
        s += dim(X(0), y, X(4), y, '4 m', { offset: -132 });
        s += dim(X(0), y, X(3), y, 'x_R = 3 m', { offset: 30, tone: 'red' });
        s += text(300, 236, 'ΣM_O：10×1 + 20×4 = 90 = 30 × x_R ⇒ x_R = 3 m', { anchor: 'middle', size: 13, weight: 'bold' });
        return svg(560, 250, s);
      })(),
      takeaways: [
        '合力大小 = 各力代數和：$R = 10 + 20 = 30$ kN。',
        '作用線位置由「力矩等值」決定：$x_R = \\Sigma F_i x_i / \\Sigma F_i = 90/30 = 3$ m，偏向較大的力。',
      ],
    },
    {
      concept: '均布與三角形載重',
      kind: 'diagram',
      title: '分布載重 → 等值集中力（面積與形心）',
      caption: '等值力大小 = 載重圖面積；作用線通過載重圖形心。',
      svg: (() => {
        let s = '';
        // 均布
        const L = 200;
        const ax = 40, y = 130;
        s += text(ax + L / 2, 22, '均布載重', { anchor: 'middle', weight: 'bold', size: 14 });
        s += distLoad(ax, ax + L, y - 6, 40, 40, { n: 8, label: 'w', labelSide: 'left' });
        s += beam(ax, ax + L, y, 8);
        s += area([[ax, y - 46], [ax + L, y - 46], [ax + L, y - 6], [ax, y - 6]], 'blue', true);
        s += arrow(ax + L / 2, y + 80, ax + L / 2, y + 6, { tone: 'red', w: 2.8, dash: 'dash' });
        s += text(ax + L / 2 + 8, y + 70, 'R = wL', { tone: 'red', weight: 'bold' });
        s += dim(ax, y, ax + L / 2, y, 'L/2', { offset: 26 });
        s += dim(ax, y, ax + L, y, 'L', { offset: 100 });
        // 三角形
        const bx = 320;
        s += text(bx + L / 2, 22, '三角形載重', { anchor: 'middle', weight: 'bold', size: 14 });
        s += area([[bx, y - 6], [bx + L, y - 70], [bx + L, y - 6]], 'blue', true);
        s += distLoad(bx, bx + L, y - 6, 0, 64, { n: 8, label: 'w₀', labelSide: 'right' });
        s += beam(bx, bx + L, y, 8);
        const xc = bx + (2 * L) / 3;
        s += arrow(xc, y + 80, xc, y + 6, { tone: 'red', w: 2.8, dash: 'dash' });
        s += text(xc - 8, y + 70, 'R = w₀L/2', { tone: 'red', weight: 'bold', anchor: 'end' });
        s += dim(bx, y, xc, y, '2L/3（距尖端）', { offset: 26 });
        s += dim(xc, y, bx + L, y, 'L/3', { offset: 26 });
        s += dim(bx, y, bx + L, y, 'L', { offset: 100 });
        return svg(560, 250, s);
      })(),
      takeaways: [
        '均布載重：$R = wL$，作用在跨中 $L/2$。',
        '三角形載重：$R = \\tfrac{1}{2}w_0L$，作用在距**大端** $L/3$（距尖端 $2L/3$），不是 $L/2$。',
        '梯形載重可拆成「矩形 + 三角形」，分別求合力後再用力矩合成。',
      ],
    },
    {
      concept: '平衡與驗算',
      kind: 'diagram',
      title: '例題自由體圖：三角形載重簡支梁',
      caption: 'L = 6 m，載重自 A 端 0 線性增至 B 端 18 kN/m；先換成等值力再列平衡方程。',
      svg: (() => {
        const X = (m: number) => 70 + m * 70;
        const y = 150;
        let s = '';
        s += area([[X(0), y - 8], [X(6), y - 78], [X(6), y - 8]], 'blue', true);
        s += distLoad(X(0), X(6), y - 8, 0, 70, { n: 10, label: '18 kN/m', labelSide: 'right' });
        s += beam(X(0), X(6), y, 8);
        s += pin(X(0), y + 4, 13) + roller(X(6), y + 4, 13);
        s += arrow(X(4), y - 120, X(4), y - 84, { tone: 'red', w: 2.6, dash: 'dash' });
        s += text(X(4) + 8, y - 108, 'W = ½×6×18 = 54 kN', { tone: 'red', weight: 'bold', size: 12.5 });
        s += arrow(X(0), y + 82, X(0), y + 30, { tone: 'green', w: 2.6, label: 'R_A = 18 kN', labelOffset: [8, 0] });
        s += arrow(X(6), y + 82, X(6), y + 30, { tone: 'green', w: 2.6, label: 'R_B = 36 kN', labelOffset: [-8, 0] });
        s += text(X(0) - 12, y - 4, 'A', { anchor: 'end', weight: 'bold' });
        s += text(X(6) + 12, y - 4, 'B', { weight: 'bold' });
        s += dim(X(0), y, X(4), y, '4 m（= 2L/3）', { offset: -110 });
        s += text(280, 268, 'ΣM_A = 0：6R_B − 54×4 = 0 ⇒ R_B = 36；ΣF_y = 0 ⇒ R_A = 18', { anchor: 'middle', size: 12.5, weight: 'bold' });
        return svg(560, 280, s);
      })(),
      takeaways: [
        '對 A 取矩可一次消去 A 點的兩個未知反力，直接解出 $R_B$。',
        '驗算：改對 B 取矩，$6R_A - 54 \\times 2 = 0 \\Rightarrow R_A = 18$ kN，兩條獨立方程結果一致才算完成。',
      ],
    },
  ],

  'nonconcurrent-force-systems': [
    {
      concept: '支承反力辨識',
      kind: 'diagram',
      title: '三種支承與其反力數目',
      caption: '支承限制哪個方向的位移或轉動，就在那個方向產生反力（或反力矩）。',
      svg: (() => {
        let s = '';
        const y = 120;
        // 滾支承
        s += beam(30, 150, y, 8) + roller(90, y + 4, 14);
        s += arrow(90, y + 88, 90, y + 38, { tone: 'green', w: 2.4, label: 'R_y', labelOffset: [8, 4] });
        s += text(90, 28, '滾支承 Roller', { anchor: 'middle', weight: 'bold', size: 13.5 });
        s += text(90, 46, '1 個反力', { anchor: 'middle', size: 12, tone: 'blue', weight: 'bold' });
        // 鉸支承
        s += beam(215, 335, y, 8) + pin(275, y + 4, 14);
        s += arrow(275, y + 92, 275, y + 40, { tone: 'green', w: 2.4, label: 'R_y', labelOffset: [8, 4] });
        s += arrow(222, y + 32, 262, y + 32, { tone: 'green', w: 2.4, label: 'R_x', labelPos: 'start', labelOffset: [-4, 4] });
        s += text(275, 28, '鉸支承 Pin', { anchor: 'middle', weight: 'bold', size: 13.5 });
        s += text(275, 46, '2 個反力', { anchor: 'middle', size: 12, tone: 'blue', weight: 'bold' });
        // 固定端
        s += fixed(420, y, 'left', 70) + beam(420, 530, y, 8);
        s += arrow(445, y + 70, 445, y + 10, { tone: 'green', w: 2.4, label: 'R_y', labelOffset: [8, 0] });
        s += arrow(500, y + 26, 432, y + 26, { tone: 'green', w: 2.4, label: 'R_x', labelPos: 'start', labelOffset: [6, 4] });
        s += moment(440, y, 30, 'ccw', { tone: 'red', from: 20, span: 150, label: 'M_A', labelDeg: 95 });
        s += text(470, 28, '固定端 Fixed', { anchor: 'middle', weight: 'bold', size: 13.5 });
        s += text(470, 46, '3 個反力（含反力矩）', { anchor: 'middle', size: 12, tone: 'blue', weight: 'bold' });
        return svg(560, 232, s);
      })(),
      takeaways: [
        '平面剛體只有 3 條獨立平衡方程：反力總數 = 3 為靜定；> 3 為靜不定；< 3 為不穩定。',
        '固定端最常漏掉的是**反力矩** $M_A$：它同時限制了轉動。',
      ],
    },
    {
      concept: '力的移轉與力偶',
      kind: 'diagram',
      title: '力的平移定理：平移必須附加力偶 M = Fd',
      caption: '左右兩個系統對剛體的效果完全相同（等值力系）。',
      svg: (() => {
        let s = '';
        // 左
        s += rect(40, 110, 180, 16, { fill: 'muted', soft: true });
        s += dot(70, 118, 4, 'ink') + text(70, 145, 'O', { anchor: 'middle', weight: 'bold', italic: true });
        s += arrow(190, 40, 190, 108, { tone: 'red', w: 2.6, label: 'F', labelOffset: [8, -40] });
        s += dot(190, 118, 3.5, 'red') + text(190, 145, 'A', { anchor: 'middle', weight: 'bold', italic: true });
        s += dim(70, 118, 190, 118, 'd', { offset: 44 });
        s += text(130, 22, '原力系：F 作用於 A', { anchor: 'middle', weight: 'bold' });
        // 等號
        s += text(280, 124, '⇔', { anchor: 'middle', size: 30, tone: 'muted', halo: false });
        // 右
        s += rect(340, 110, 180, 16, { fill: 'muted', soft: true });
        s += dot(370, 118, 4, 'ink') + text(370, 145, 'O', { anchor: 'middle', weight: 'bold', italic: true });
        s += arrow(370, 40, 370, 108, { tone: 'red', w: 2.6, label: 'F', labelOffset: [8, -40] });
        s += moment(370, 118, 34, 'cw', { tone: 'blue', from: -40, span: 260, label: 'M = F·d', labelDeg: 200 });
        s += text(445, 22, '等值力系：F 移到 O + 力偶 M', { anchor: 'middle', weight: 'bold' });
        s += text(280, 205, '力偶矩對任何點都相同（自由向量），只看大小與轉向', { anchor: 'middle', size: 12.5, tone: 'muted' });
        return svg(560, 220, s);
      })(),
      takeaways: [
        '把力 $F$ 平移距離 $d$，必須補上力偶 $M = Fd$，轉向與原力對新點產生的轉向相同。',
        '力偶只有轉動效果、沒有合力：ΣF 不受影響，但 ΣM 一定要算進去。',
      ],
    },
    {
      concept: '三個獨立平衡條件',
      kind: 'diagram',
      title: '例題自由體圖：斜向力 + 外加力偶',
      caption: 'L = 6 m；P = 10 kN（37°，向右下）作用於 x = 2 m；順時針力偶 M₀ = 12 kN·m 作用於 x = 3 m。',
      svg: (() => {
        const X = (m: number) => 70 + m * 70;
        const y = 140;
        let s = beam(X(0), X(6), y, 9);
        s += pin(X(0), y + 5, 13) + roller(X(6), y + 5, 13);
        s += arrowTo(X(2), y - 5, 82, -37, { tone: 'red', w: 2.6 });
        s += text(X(2) - 70, y - 62, 'P = 10 kN', { tone: 'red', weight: 'bold' });
        s += angle(X(2), y - 5, 30, 143, 180, '37°', { labelR: 44 });
        s += line(X(2) - 50, y - 5, X(2), y - 5, { tone: 'muted', w: 1, dash: 'dot' });
        s += moment(X(3), y, 26, 'cw', { tone: 'blue', from: -30, span: 240, label: 'M₀ = 12', labelDeg: 95 });
        s += arrow(X(0) + 40, y + 52, X(0) - 26, y + 52, { tone: 'green', w: 2.4, label: 'A_x = 8 kN ←', labelPos: 'end', labelOffset: [-4, 18] });
        s += arrow(X(0), y + 100, X(0), y + 32, { tone: 'green', w: 2.4, label: 'A_y = 2 kN', labelOffset: [8, 28] });
        s += arrow(X(6), y + 100, X(6), y + 32, { tone: 'green', w: 2.4, label: 'B_y = 4 kN', labelOffset: [-8, 28] });
        s += dim(X(0), y, X(2), y, '2 m', { offset: -96 });
        s += dim(X(0), y, X(3), y, '3 m', { offset: -118 });
        s += text(X(0) - 14, y - 8, 'A', { anchor: 'end', weight: 'bold' });
        s += text(X(6) + 12, y - 8, 'B', { weight: 'bold' });
        s += lines(80, 276, ['① 分解：P_x = 8 kN →，P_y = 6 kN ↓', '② ΣM_A = 6B_y − 6×2 − 12 = 0 ⇒ B_y = 4 kN；③ ΣF_y ⇒ A_y = 2 kN；ΣF_x ⇒ A_x = 8 kN ←'], { size: 12, lh: 18 });
        return svg(560, 310, s);
      })(),
      takeaways: [
        '斜向力先正交分解；力偶 $M_0$ 在 ΣM 中直接加入（順時針取負），在 ΣF 中不出現。',
        '取矩點選在 A（兩個未知反力交會處），一條方程就解出 $B_y$。',
      ],
    },
  ],

  'shear-properties': [
    {
      concept: '直接剪應力',
      kind: 'diagram',
      title: '單剪與雙剪：數一數剪切面',
      caption: '紅色虛線為螺栓被剪斷的面；雙剪時剪力由兩個斷面分擔。',
      svg: (() => {
        let s = '';
        // 單剪
        s += text(130, 24, '單剪 Single Shear', { anchor: 'middle', weight: 'bold', size: 14 });
        s += rect(30, 80, 160, 22, { fill: 'blue', soft: true, tone: 'blue' });
        s += rect(70, 102, 160, 22, { fill: 'green', soft: true, tone: 'green' });
        s += rect(118, 66, 24, 72, { fill: 'muted', soft: false, tone: 'ink', w: 1.4 });
        s += line(104, 102, 156, 102, { tone: 'red', w: 2.4, dash: 'dash' });
        s += arrow(30, 91, 4, 91, { tone: 'ink', w: 2.4 });
        s += arrow(230, 113, 262, 113, { tone: 'ink', w: 2.4 });
        s += text(8, 76, 'V', { weight: 'bold', italic: true });
        s += text(250, 134, 'V', { weight: 'bold', italic: true });
        s += text(130, 166, 'τ = V / A', { anchor: 'middle', size: 15, weight: 'bold', tone: 'red' });
        s += text(130, 186, '1 個剪切面', { anchor: 'middle', size: 12, tone: 'muted' });
        // 雙剪
        const o = 300;
        s += text(o + 130, 24, '雙剪 Double Shear', { anchor: 'middle', weight: 'bold', size: 14 });
        s += rect(o + 30, 58, 150, 20, { fill: 'blue', soft: true, tone: 'blue' });
        s += rect(o + 70, 78, 160, 24, { fill: 'green', soft: true, tone: 'green' });
        s += rect(o + 30, 102, 150, 20, { fill: 'blue', soft: true, tone: 'blue' });
        s += rect(o + 118, 46, 24, 88, { fill: 'muted', tone: 'ink', w: 1.4 });
        s += line(o + 104, 78, o + 156, 78, { tone: 'red', w: 2.4, dash: 'dash' });
        s += line(o + 104, 102, o + 156, 102, { tone: 'red', w: 2.4, dash: 'dash' });
        s += arrow(o + 30, 90, o + 2, 90, { tone: 'ink', w: 2.4 });
        s += arrow(o + 230, 90, o + 258, 90, { tone: 'ink', w: 2.4 });
        s += text(o + 8, 82, 'V', { weight: 'bold', italic: true, anchor: 'start' });
        s += text(o + 250, 82, 'V', { weight: 'bold', italic: true });
        s += text(o + 130, 166, 'τ = V / (2A)', { anchor: 'middle', size: 15, weight: 'bold', tone: 'red' });
        s += text(o + 130, 186, '2 個剪切面 → 應力減半', { anchor: 'middle', size: 12, tone: 'muted' });
        return svg(560, 200, s);
      })(),
      takeaways: [
        '$A$ 是**一個**螺栓斷面積 $\\pi d^2/4$；n 根螺栓、雙剪時有效面積為 $2nA$。',
        '例：d = 10 mm、V = 12 kN，單剪 τ ≈ 152.8 MPa；改雙剪 τ ≈ 76.4 MPa。',
      ],
    },
    {
      concept: '梁的橫向剪應力',
      kind: 'chart',
      title: '不同斷面的最大剪應力倍率 τ_max / τ_avg',
      caption: '平均剪應力 τ_avg = V/A；最大值都出現在中性軸。',
      svg: barChart({
        w: 520,
        h: 250,
        categories: ['矩形', '實心圓', '薄壁圓管'],
        series: [{ name: 'τ_max / τ_avg', tone: 'red', values: [1.5, 4 / 3, 2] }],
        y: { max: 2.4, ticks: [0, 0.5, 1, 1.5, 2], label: 'τ_max ÷ (V/A)', fmt: (v) => fmt(v, 1) },
        values: true,
        valueFmt: (v) => (Math.abs(v - 4 / 3) < 1e-6 ? '4/3 ≈ 1.33' : fmt(v, 1)),
        overlay: (f) => line(f.box.left, f.Y(1), f.box.left + f.box.width, f.Y(1), { tone: 'muted', w: 1.2, dash: 'dash' }) + text(f.box.left + f.box.width, f.Y(1) - 6, '平均值 = 1', { tone: 'muted', size: 11, anchor: 'end' }),
      }),
      table: { headers: ['斷面', 'τ_max / τ_avg', '最大位置'], rows: [['矩形', '3/2 = 1.5', '中性軸'], ['實心圓', '4/3 ≈ 1.33', '中性軸（圓心）'], ['薄壁圓管', '2.0', '中性軸']] },
      takeaways: [
        '由 $\\tau = VQ/(It)$：中性軸處一次矩 $Q$ 最大，上下緣 $Q = 0$，所以剪應力在頂底為零、中央最大。',
        '矩形斷面最常考：$\\tau_{max} = 1.5\\,V/A$。',
      ],
    },
    {
      concept: '剪力圖符號與跳躍',
      kind: 'diagram',
      title: '剪力圖的兩種變化：集中力「跳」、分布載重「斜」',
      caption: '簡支梁 L = 6 m：x = 2 m 處 24 kN 集中力，4–6 m 有 12 kN/m 均布載重；R_A = 20 kN、R_B = 28 kN。',
      svg: (() => {
        const X = (m: number) => 60 + m * 72;
        let s = '';
        const y = 70;
        s += beam(X(0), X(6), y, 8) + pin(X(0), y + 4, 11) + roller(X(6), y + 4, 11);
        s += arrow(X(2), y - 52, X(2), y - 5, { tone: 'red', w: 2.4, label: '24 kN', labelOffset: [8, -30] });
        s += distLoad(X(4), X(6), y - 5, 30, 30, { n: 5, label: '12 kN/m', labelSide: 'center' });
        const f = frame([0, 6], [-32, 26], { left: 60, top: 128, width: 432, height: 130 });
        s += line(f.X(0), f.Y(0), f.X(6) + 14, f.Y(0), { tone: 'ink', w: 1.2 });
        s += signedFill(f, [[0, 0], [0, 20], [2, 20], [2, -4], [4, -4], [6, -28], [6, 0]]);
        s += text(f.X(1), f.Y(20) - 6, '+20', { anchor: 'middle', weight: 'bold', tone: 'blue' });
        s += text(f.X(3), f.Y(-4) + 16, '−4', { anchor: 'middle', weight: 'bold', tone: 'red' });
        s += text(f.X(6) - 6, f.Y(-28) + 4, '−28', { anchor: 'end', weight: 'bold', tone: 'red' });
        s += text(f.X(2) + 8, f.Y(8), '跳 −24', { tone: 'red', size: 12, weight: 'bold' });
        s += text(f.X(5) - 10, f.Y(-10), '斜率 = −w', { tone: 'red', size: 12, weight: 'bold', anchor: 'end' });
        s += text(f.X(0) - 8, f.Y(0) + 4, 'V', { anchor: 'end', weight: 'bold', italic: true });
        return svg(560, 270, s);
      })(),
      takeaways: [
        '集中力使剪力圖**瞬間跳躍**，跳躍量 = 該力大小（向下力往下跳）。',
        '均布載重段剪力圖為斜直線，斜率 $dV/dx = -w$；剪力圖面積則等於彎矩變化量。',
      ],
    },
  ],

  'units-vectors': [
    {
      concept: '純量與向量的物理意義',
      kind: 'diagram',
      title: '向量相加的平行四邊形法則（斜交分解）',
      caption: 'F = 200 N（與 +x 夾 60°）分解到 u 軸（30°）與 v 軸（+y）；平行四邊形的兩邊就是兩個分力。',
      svg: (() => {
        const O: Pt = [90, 250];
        const k = 0.9;
        const F = polar(O[0], O[1], 200 * k, 60);
        const Fu = polar(O[0], O[1], 115.47 * k, 30);
        const Fv: Pt = [O[0], O[1] - 115.47 * k];
        let s = '';
        s += arrow(O[0] - 20, O[1], O[0] + 280, O[1], { tone: 'muted', w: 1.2, head: 7 }) + text(O[0] + 284, O[1] + 4, 'x', { italic: true, tone: 'muted' });
        s += line(O[0], O[1] + 10, O[0], O[1] - 220, { tone: 'muted', w: 1.2, dash: 'dash' }) + text(O[0] - 8, O[1] - 214, 'v (y)', { anchor: 'end', tone: 'muted', italic: true });
        s += line(...polar(O[0], O[1], -20, 30), ...polar(O[0], O[1], 270, 30), { tone: 'muted', w: 1.2, dash: 'dash' });
        s += text(...polar(O[0], O[1], 275, 30), 'u', { tone: 'muted', italic: true, size: 14 });
        s += line(Fu[0], Fu[1], F[0], F[1], { tone: 'muted', w: 1.2, dash: 'dot' });
        s += line(Fv[0], Fv[1], F[0], F[1], { tone: 'muted', w: 1.2, dash: 'dot' });
        s += arrow(O[0], O[1], Fu[0], Fu[1], { tone: 'blue', w: 2.6 });
        s += arrow(O[0], O[1], Fv[0], Fv[1], { tone: 'green', w: 2.6 });
        s += arrow(O[0], O[1], F[0], F[1], { tone: 'red', w: 3 });
        s += text(F[0] + 8, F[1] - 4, 'F = 200 N', { tone: 'red', weight: 'bold' });
        s += text(Fu[0] + 8, Fu[1] + 16, 'F_u ≈ 115.5 N', { tone: 'blue', weight: 'bold' });
        s += text(Fv[0] - 8, Fv[1] + 4, 'F_v ≈ 115.5 N', { tone: 'green', weight: 'bold', anchor: 'end' });
        s += angle(O[0], O[1], 40, 0, 30, '30°', { labelR: 54 });
        s += angle(O[0], O[1], 70, 30, 60, '30°', { tone: 'red', labelR: 84 });
        s += angle(F[0], F[1], 22, 210, 270, '120°', { tone: 'violet', labelR: 38 });
        s += lines(330, 70, ['正弦定理（力三角形）：', 'F_u / sin30° = F / sin120°', '⇒ F_u = 200 × 0.5 / 0.866', '≈ 115.5 N', '', '對照正交分解：', 'F_x = 200 cos60° = 100 N', 'F_y = 200 sin60° ≈ 173.2 N'], { size: 12.5, lh: 20 });
        return svg(560, 280, s);
      })(),
      takeaways: [
        '斜交分解時，分力**不是** $F\\cos\\theta$；要用平行四邊形（力三角形）配合正弦定理。',
        '力三角形中，$F$ 所對的角是兩分力方向的夾角之補角 $180° - 60° = 120°$。',
        '只有兩軸互相垂直時，分力才化簡為 $F\\cos\\theta$ 與 $F\\sin\\theta$。',
      ],
    },
    {
      concept: '平面向量的正交分解與合成',
      kind: 'diagram',
      title: '正交分解：鄰邊用 cos、對邊用 sin',
      caption: '斜拉索張力 T = 200 kN，與水平夾角 30°。',
      svg: (() => {
        const O: Pt = [100, 220];
        const T = polar(O[0], O[1], 260, 30);
        let s = '';
        s += arrow(O[0] - 30, O[1], O[0] + 280, O[1], { tone: 'muted', w: 1.2, head: 7 }) + text(O[0] + 284, O[1] + 4, 'x', { italic: true, tone: 'muted' });
        s += arrow(O[0], O[1] + 20, O[0], O[1] - 160, { tone: 'muted', w: 1.2, head: 7 }) + text(O[0] - 8, O[1] - 158, 'y', { italic: true, tone: 'muted', anchor: 'end' });
        s += arrow(O[0], O[1], T[0], O[1], { tone: 'blue', w: 2.6 });
        s += arrow(T[0], O[1], T[0], T[1], { tone: 'green', w: 2.6 });
        s += rightAngle(T[0], O[1], 180, 90, 10);
        s += arrow(O[0], O[1], T[0], T[1], { tone: 'red', w: 3 });
        s += angle(O[0], O[1], 50, 0, 30, 'θ = 30°', { labelR: 76 });
        s += text(T[0] - 6, T[1] - 8, 'T = 200 kN', { tone: 'red', weight: 'bold', anchor: 'end' });
        s += text((O[0] + T[0]) / 2, O[1] + 22, 'T_x = T cos30° = 173.2 kN', { tone: 'blue', weight: 'bold', anchor: 'middle' });
        s += text(T[0] + 8, (O[1] + T[1]) / 2, 'T_y = T sin30°', { tone: 'green', weight: 'bold' });
        s += text(T[0] + 8, (O[1] + T[1]) / 2 + 18, '= 100 kN', { tone: 'green', weight: 'bold' });
        s += text(20, 30, '合成：T = √(T_x² + T_y²)，θ = tan⁻¹(T_y / T_x)', { size: 12.5, weight: 'bold' });
        return svg(560, 250, s);
      })(),
      takeaways: [
        '先看角度是和哪一軸夾：與 $x$ 軸夾 θ 時 $F_x = F\\cos\\theta$；若題目給的是與**鉛垂線**的夾角，水平分力要改用 $\\sin$。',
        '合成時用畢氏定理求大小，再用各分量的正負號判斷象限。',
      ],
    },
    {
      concept: '三維空間向量與單位向量',
      kind: 'diagram',
      title: '空間向量的分量與方向角 α、β、γ',
      caption: '鋼索由 A(0,0,0) 拉向 B(3,4,12) m，長度 L = 13 m；方向餘弦 = 各分量 ÷ L。',
      svg: (() => {
        const P = oblique(250, 238, 16, 0.75);
        const B = P(3, 4, 12);
        let s = '';
        s += arrow(...P(0, 0, 0), ...P(7, 0, 0), { tone: 'muted', w: 1.3, head: 7 }) + text(...P(7.6, 0, 0), 'x', { italic: true, tone: 'muted' });
        s += arrow(...P(0, 0, 0), ...P(0, 10, 0), { tone: 'muted', w: 1.3, head: 7 }) + text(...P(0, 10.6, 0.3), 'y', { italic: true, tone: 'muted' });
        s += arrow(...P(0, 0, 0), ...P(0, 0, 14), { tone: 'muted', w: 1.3, head: 7 }) + text(...P(0, -0.8, 13.8), 'z', { italic: true, tone: 'muted' });
        // 方盒虛線
        const d = { tone: 'muted' as const, w: 1, dash: 'dash' as const };
        s += line(...P(3, 0, 0), ...P(3, 4, 0), d) + line(...P(0, 4, 0), ...P(3, 4, 0), d);
        s += line(...P(3, 4, 0), ...P(3, 4, 12), d);
        s += line(...P(0, 0, 12), ...P(3, 4, 12), d);
        s += arrow(...P(0, 0, 0), ...B, { tone: 'red', w: 3 });
        s += dot(...B, 4, 'red') + text(B[0] + 8, B[1] - 4, 'B(3, 4, 12)', { tone: 'red', weight: 'bold' });
        s += text(P(0, 0, 0)[0] - 10, P(0, 0, 0)[1] + 18, 'A(0,0,0)', { anchor: 'end', size: 12, weight: 'bold' });
        s += text(...P(3.4, 0, 0), '3', { tone: 'blue', weight: 'bold', size: 12 });
        s += text(P(0, 2, 0)[0], P(0, 2, 0)[1] + 16, '4', { tone: 'blue', weight: 'bold', size: 12 });
        s += text(P(3, 4, 6)[0] + 8, P(3, 4, 6)[1], '12', { tone: 'blue', weight: 'bold', size: 12 });
        s += lines(370, 60, ['L = √(3² + 4² + 12²) = 13 m', 'cos α = 3/13', 'cos β = 4/13', 'cos γ = 12/13', 'cos²α + cos²β + cos²γ = 1', '', 'T = 130 kN 時：', 'T_x : T_y : T_z = 30 : 40 : 120'], { size: 12.5, lh: 20 });
        return svg(560, 270, s);
      })(),
      takeaways: [
        '位置向量 = 終點座標 − 起點座標；單位向量 $\\lambda = (d_x, d_y, d_z)/L$。',
        '力向量 = 力的大小 × 單位向量，各分量與座標差成正比，三個方向餘弦平方和恆為 1。',
      ],
    },
  ],

  'force-equilibrium': [
    {
      concept: '自由體圖 (Free Body Diagram, FBD) 畫法標準流程',
      kind: 'diagram',
      title: '從實景到自由體圖：吊燈懸掛節點 C',
      caption: '把節點 C 從環境中「切出來」，所有接觸處換成力：兩條繩的拉力與重力。',
      svg: (() => {
        let s = '';
        // 實景
        s += ceiling(30, 150, 40);
        s += wall(250, 90, 190, 'right');
        const C: Pt = [150, 130];
        const A: Pt = [C[0] - 90 / Math.tan((60 * Math.PI) / 180), 40];
        s += line(A[0], A[1], C[0], C[1], { w: 2 }) + line(C[0], C[1], 250, C[1], { w: 2 });
        s += line(C[0], C[1], C[0], C[1] + 30, { w: 1.6 });
        s += path(`M${C[0] - 16},${C[1] + 30} L${C[0] + 16},${C[1] + 30} L${C[0] + 8},${C[1] + 50} L${C[0] - 8},${C[1] + 50} Z`, { fill: 'amber', soft: true, tone: 'amber' });
        s += node(C[0], C[1]) + text(C[0] + 8, C[1] - 8, 'C', { weight: 'bold' });
        s += text(A[0] - 4, A[1] + 16, 'A', { weight: 'bold', anchor: 'end' }) + text(244, C[1] - 8, 'B', { weight: 'bold', anchor: 'end' });
        s += angle(A[0], A[1], 26, -60, 0, '60°', { labelR: 40 });
        s += text(C[0] + 24, C[1] + 46, 'W = 600 N', { size: 12, tone: 'amber', weight: 'bold' });
        s += text(140, 236, '① 實際情況', { anchor: 'middle', weight: 'bold' });
        s += arrow(280, 140, 330, 140, { tone: 'muted', w: 2, label: '切出', labelPos: 'mid', labelOffset: [0, -10] });
        // FBD
        const D: Pt = [440, 140];
        s += dashedCircle(D);
        s += arrowAt(D[0], D[1], 90, 120, { tone: 'blue', w: 2.6 });
        s += text(...polar(D[0], D[1], 102, 120), 'T_AC', { tone: 'blue', weight: 'bold', anchor: 'end' });
        s += arrowAt(D[0], D[1], 80, 0, { tone: 'green', w: 2.6, label: 'T_BC', labelOffset: [-10, -12] });
        s += arrowAt(D[0], D[1], 76, -90, { tone: 'amber', w: 2.6, label: 'W = 600 N', labelOffset: [8, -4] });
        s += dot(D[0], D[1], 4);
        s += angle(D[0], D[1], 26, 90, 120, '30°', { tone: 'muted', labelR: 40 });
        s += line(D[0], D[1], D[0], D[1] - 60, { tone: 'muted', w: 1, dash: 'dot' });
        s += text(440, 236, '② 節點 C 的自由體圖', { anchor: 'middle', weight: 'bold' });
        return svg(560, 250, s);
      })(),
      takeaways: [
        '自由體圖只畫「作用在隔離體上的外力」：繩索拉力一律**背離**節點（繩只能拉不能推）。',
        '重力畫在重心、方向鉛直向下；未知力先假設方向，解出負號再反向即可。',
      ],
    },
    {
      concept: '共點力系與拉密定理',
      kind: 'diagram',
      title: '拉密定理：每個力 ∝ 另外兩力夾角的正弦',
      caption: '同一個節點 C：三力夾角分別為 90°、150°、120°（合計 360°）；右側為頭尾相接的封閉力三角形。',
      svg: (() => {
        let s = '';
        const D: Pt = [150, 135];
        s += arrowAt(D[0], D[1], 100, 120, { tone: 'blue', w: 2.6 }) + text(...polar(D[0], D[1], 112, 120), 'T_AC', { tone: 'blue', weight: 'bold', anchor: 'end' });
        s += arrowAt(D[0], D[1], 100, 0, { tone: 'green', w: 2.6, label: 'T_BC', labelOffset: [-14, -12] });
        s += arrowAt(D[0], D[1], 90, -90, { tone: 'amber', w: 2.6, label: 'W', labelOffset: [8, -6] });
        s += dot(D[0], D[1], 4);
        s += angle(D[0], D[1], 30, 0, 120, '120°', { tone: 'violet', labelR: 46 });
        s += angle(D[0], D[1], 30, -90, 0, '90°', { tone: 'red', labelR: 46 });
        s += angle(D[0], D[1], 52, 120, 270, '150°', { tone: 'muted', labelR: 66 });
        // 力三角形（比例尺 0.16 px/N）
        const k = 0.16;
        const p0: Pt = [380, 50];
        const p1: Pt = [p0[0], p0[1] + 600 * k];
        const p2: Pt = [p1[0] + 346.4 * k, p1[1]];
        s += arrow(p0[0], p0[1], p1[0], p1[1], { tone: 'amber', w: 2.6 }) + text(p0[0] - 8, (p0[1] + p1[1]) / 2, 'W = 600', { tone: 'amber', weight: 'bold', anchor: 'end' });
        s += arrow(p1[0], p1[1], p2[0], p2[1], { tone: 'green', w: 2.6 }) + text((p1[0] + p2[0]) / 2, p1[1] + 18, 'T_BC ≈ 346', { tone: 'green', weight: 'bold', anchor: 'middle' });
        s += arrow(p2[0], p2[1], p0[0], p0[1], { tone: 'blue', w: 2.6 }) + text((p2[0] + p0[0]) / 2 + 10, (p2[1] + p0[1]) / 2 - 4, 'T_AC ≈ 693', { tone: 'blue', weight: 'bold' });
        s += rightAngle(p1[0], p1[1], 90, 0, 9);
        s += text(420, 206, '力三角形必須封閉 ⇔ 合力為零', { anchor: 'middle', size: 12, tone: 'muted' });
        s += text(280, 238, 'T_AC / sin90° = T_BC / sin150° = W / sin120°', { anchor: 'middle', weight: 'bold', size: 13.5 });
        return svg(560, 252, s);
      })(),
      takeaways: [
        '每個力配的是「**另外兩力**之間的夾角」：W 配 $T_{AC}$ 與 $T_{BC}$ 的夾角 120°。',
        '代入得 $T_{AC} = 600 \\times \\sin 90° / \\sin 120° \\approx 692.8$ N，$T_{BC} = 600 \\times \\sin 150° / \\sin 120° \\approx 346.4$ N。',
        '只限**三力共點**平衡才可使用；四力以上或不共點請回到 ΣF = 0。',
      ],
    },
    {
      concept: '二力構件',
      kind: 'diagram',
      title: '二力構件與三力構件的幾何特徵',
      caption: '右圖：斜樑 AB 靠在光滑牆上（P3 題），W 與 N_B 的作用線交於 O，A 點反力 R_A 也必通過 O。',
      svg: (() => {
        let s = '';
        // 二力構件
        s += text(110, 24, '二力構件', { anchor: 'middle', weight: 'bold', size: 14 });
        s += line(40, 170, 180, 70, { w: 5 });
        s += node(40, 170) + node(180, 70);
        s += arrowAt(180, 70, 54, 35.5, { tone: 'red', w: 2.4, label: 'F', labelOffset: [6, 0] });
        s += arrowAt(40, 170, 54, 215.5, { tone: 'red', w: 2.4, label: 'F', labelOffset: [-14, 14] });
        s += text(110, 214, '兩力等大、反向、共線', { anchor: 'middle', size: 12, tone: 'muted' });
        s += text(110, 232, '（只受軸力：拉或壓）', { anchor: 'middle', size: 12, tone: 'muted' });
        // 三力構件
        const A: Pt = [300, 210];
        const L = 180;
        const B = polar(A[0], A[1], L, 60);
        s += text(410, 24, '三力構件（共點）', { anchor: 'middle', weight: 'bold', size: 14 });
        s += ground(270, 470, 210) + wall(B[0] + 2, 30, 210, 'right');
        s += line(A[0], A[1], B[0], B[1], { w: 5 });
        s += node(A[0], A[1]) + text(A[0] - 8, A[1] - 6, 'A', { anchor: 'end', weight: 'bold' }) + text(B[0] - 12, B[1] - 4, 'B', { anchor: 'end', weight: 'bold' });
        const M = polar(A[0], A[1], L / 2, 60);
        const O: Pt = [M[0], B[1]];
        s += arrow(M[0], M[1], M[0], M[1] + 52, { tone: 'amber', w: 2.4, label: 'W', labelOffset: [6, 0] });
        s += arrow(B[0], B[1], B[0] - 60, B[1], { tone: 'green', w: 2.4, label: 'N_B', labelOffset: [-4, -10] });
        s += line(M[0], M[1], O[0], O[1], { tone: 'muted', w: 1, dash: 'dash' }) + line(B[0], B[1], O[0], O[1], { tone: 'muted', w: 1, dash: 'dash' });
        s += line(A[0], A[1], O[0], O[1], { tone: 'blue', w: 1.2, dash: 'dash' });
        s += arrow(A[0], A[1], A[0] + (O[0] - A[0]) * 0.45, A[1] + (O[1] - A[1]) * 0.45, { tone: 'blue', w: 2.6, label: 'R_A', labelOffset: [8, 10] });
        s += dot(O[0], O[1], 4.5, 'red') + text(O[0] - 6, O[1] - 8, 'O', { tone: 'red', weight: 'bold', anchor: 'end' });
        s += angle(A[0], A[1], 28, 0, 60, '60°', { labelR: 42 });
        return svg(560, 245, s);
      })(),
      takeaways: [
        '桁架桿件、兩端鉸接且中間不受力的斜撐都是二力構件：力一定沿兩鉸點連線。',
        '三個不平行力平衡時，作用線必交於一點：先找出兩力交點，第三力的方向就確定了。',
        '桿件若要計入自重（中間有力），就**不是**二力構件。',
      ],
    },
  ],

  centroid: [
    {
      concept: '形心 (Centroid) 與',
      kind: 'diagram',
      title: 'T 形斷面形心：分割 → 一次矩 → 相除',
      caption: '翼板 100×20 mm、腹板 20×80 mm；座標原點取在底邊。',
      svg: (() => {
        const k = 1.8;
        const ox = 70, oy = 230;
        const R = (x: number, y: number, w: number, h: number, tone: 'blue' | 'green') => rect(ox + x * k, oy - (y + h) * k, w * k, h * k, { tone, fill: tone, soft: true, w: 1.8 });
        let s = '';
        s += R(0, 80, 100, 20, 'blue') + R(40, 0, 20, 80, 'green');
        s += line(ox - 20, oy, ox + 100 * k + 20, oy, { tone: 'muted', w: 1.2 });
        s += text(ox - 24, oy + 4, 'y = 0', { tone: 'muted', anchor: 'end', size: 12 });
        s += dot(ox + 50 * k, oy - 90 * k, 3.6, 'blue') + text(ox + 50 * k + 8, oy - 90 * k + 4, 'A₁ = 2000，y₁ = 90', { tone: 'blue', size: 12, weight: 'bold' });
        s += dot(ox + 50 * k, oy - 40 * k, 3.6, 'green') + text(ox + 60 * k + 8, oy - 40 * k + 4, 'A₂ = 1600，y₂ = 40', { tone: 'green', size: 12, weight: 'bold' });
        const yc = 67.78;
        s += line(ox - 14, oy - yc * k, ox + 100 * k + 14, oy - yc * k, { tone: 'red', w: 1.8, dash: 'center' });
        s += dot(ox + 50 * k, oy - yc * k, 5, 'red');
        s += text(ox + 100 * k + 18, oy - yc * k + 4, 'ȳ = 67.78 mm', { tone: 'red', weight: 'bold' });
        s += dim(ox, oy - 100 * k, ox + 100 * k, oy - 100 * k, '100', { offset: 18 });
        s += dim(ox + 60 * k, oy, ox + 60 * k, oy - 80 * k, '80', { offset: -34 });
        s += lines(ox + 100 * k + 18, 70, ['ȳ = (A₁y₁ + A₂y₂) / (A₁ + A₂)', '= (2000×90 + 1600×40) / 3600', '= 244000 / 3600', '≈ 67.78 mm'], { size: 12.5, lh: 20 });
        return svg(560, 250, s);
      })(),
      takeaways: [
        '每個分割塊的 $y_i$ 都要從**同一個**基準（這裡是底邊）量起。',
        '形心偏向面積大的翼板一側（67.78 mm > 50 mm 的高度中點）。挖孔時面積與一次矩取負號。',
      ],
    },
    {
      concept: '常見基本幾何圖形之形心',
      kind: 'diagram',
      title: '必背基本圖形的形心位置',
      caption: '紅點為形心 C；尺寸皆自底邊（或直徑邊）量起。',
      svg: (() => {
        let s = '';
        const base = 190;
        // 矩形
        s += rect(30, base - 120, 110, 120, { fill: 'blue', soft: true, tone: 'blue' });
        s += dot(85, base - 60, 4.5, 'red');
        s += dim(140, base, 140, base - 60, 'h/2', { offset: -22 });
        s += text(85, 226, '矩形', { anchor: 'middle', weight: 'bold' });
        // 直角三角形
        s += polygon([[200, base], [320, base], [200, base - 120]], { fill: 'green', soft: true, tone: 'green' });
        s += dot(240, base - 40, 4.5, 'red');
        s += line(200, base - 40, 240, base - 40, { tone: 'red', w: 1, dash: 'dot' });
        s += dim(320, base, 320, base - 40, 'h/3', { offset: -24 });
        s += dim(200, base, 240, base, 'b/3', { offset: 20 });
        s += text(260, 226, '直角三角形', { anchor: 'middle', weight: 'bold' });
        // 半圓
        const cx = 450, r = 70;
        s += path(`M${cx - r},${base} A${r},${r} 0 0 1 ${cx + r},${base} Z`, { fill: 'amber', soft: true, tone: 'amber' });
        const yb = (4 * r) / (3 * Math.PI);
        s += dot(cx, base - yb, 4.5, 'red');
        s += dim(cx + r, base, cx + r, base - yb, '4r/3π', { offset: -30 });
        s += dim(cx - r, base, cx, base, 'r', { offset: 20 });
        s += text(cx, 226, '半圓', { anchor: 'middle', weight: 'bold' });
        s += text(cx, 50, '4r/3π ≈ 0.424r', { anchor: 'middle', size: 12, tone: 'muted' });
        return svg(560, 240, s);
      })(),
      takeaways: [
        '三角形形心距底邊 $h/3$（距頂點 $2h/3$），這也是三角形分布載重合力位置的由來。',
        '半圓形心離直徑邊 $4r/3\\pi \\approx 0.424r$，不是 $r/2$。',
      ],
    },
    {
      concept: '平行軸定理',
      kind: 'diagram',
      title: '平行軸定理：I = I_c + A·d²（對稱工字形斷面）',
      caption: '翼板 200×20、腹板 20×160 mm；總形心軸在 ȳ = 100 mm，翼板形心距總形心 d = 90 mm。',
      svg: (() => {
        const k = 0.95;
        const ox = 60, oy = 225;
        const R = (x: number, y: number, w: number, h: number, tone: 'blue' | 'green') => rect(ox + x * k, oy - (y + h) * k, w * k, h * k, { tone, fill: tone, soft: true, w: 1.6 });
        let s = R(0, 180, 200, 20, 'blue') + R(90, 20, 20, 160, 'green') + R(0, 0, 200, 20, 'blue');
        const Yc = oy - 100 * k;
        s += line(ox - 16, Yc, ox + 200 * k + 16, Yc, { tone: 'red', w: 1.8, dash: 'center' });
        s += text(ox + 200 * k + 20, Yc + 4, 'x̄（總形心軸）', { tone: 'red', weight: 'bold', size: 12 });
        s += line(ox - 10, oy - 190 * k, ox + 200 * k + 10, oy - 190 * k, { tone: 'blue', w: 1.2, dash: 'dash' });
        s += text(ox + 200 * k + 20, oy - 190 * k + 4, 'x_c（翼板自身形心軸）', { tone: 'blue', size: 12 });
        s += dim(ox + 30 * k, Yc, ox + 30 * k, oy - 190 * k, 'd = 90', { offset: 0, tone: 'violet' });
        s += lines(330, 150, ['翼板：I_c = 200×20³/12 ≈ 1.33×10⁵', 'A·d² = 4000 × 90² = 3.24×10⁷', '腹板：I = 20×160³/12 ≈ 6.83×10⁶ (d = 0)', 'I_x̄ = 2×(1.33×10⁵ + 3.24×10⁷) + 6.83×10⁶', '≈ 7.19×10⁷ mm⁴'], { size: 12, lh: 19 });
        return svg(560, 250, s);
      })(),
      takeaways: [
        '轉移項 $A d^2$ 往往遠大於自身慣性矩：翼板的 $I_c$ 只有約 0.13 × 10⁶，$Ad^2$ 卻有 32.4 × 10⁶ mm⁴。',
        '這就是工字鋼把材料集中在上下翼板的原因：同樣面積下抗彎剛度最大。',
        '$d$ 一定是「分圖形自身形心軸」到「總形心軸」的距離，不是到底邊的距離。',
      ],
    },
    {
      concept: '帕普斯定理',
      kind: 'diagram',
      title: '帕普斯第二定理：旋轉體體積 = 面積 × 形心繞行距離',
      caption: '矩形面積 A 繞鉛直軸旋轉一圈，形心走過 2πr̄ 的圓周，掃出一個圓筒殼。',
      svg: (() => {
        let s = '';
        const ax = 140;
        s += line(ax, 30, ax, 230, { tone: 'muted', w: 1.4, dash: 'center' });
        s += text(ax, 22, '旋轉軸', { anchor: 'middle', size: 12, tone: 'muted' });
        s += rect(ax + 60, 90, 50, 90, { fill: 'blue', soft: true, tone: 'blue', w: 2 });
        s += dot(ax + 85, 135, 4.5, 'red') + text(ax + 93, 131, 'C', { tone: 'red', weight: 'bold' });
        s += dim(ax, 135, ax + 85, 135, 'r̄', { offset: 0, textOffset: -8 });
        s += ellipse(ax, 135, 85, 22, { tone: 'red', w: 1.4, dash: 'dash' });
        s += arrow(ax - 60, 151, ax - 30, 156, { tone: 'red', w: 1.6, head: 7 });
        s += text(ax - 92, 182, '形心路徑 2πr̄', { tone: 'red', size: 12, weight: 'bold' });
        // 右側旋轉體
        const cx = 420;
        s += line(cx, 40, cx, 230, { tone: 'muted', w: 1.2, dash: 'center' });
        s += ellipse(cx, 90, 110, 24, { tone: 'blue', w: 1.6 });
        s += ellipse(cx, 90, 60, 13, { tone: 'blue', w: 1.2 });
        s += line(cx - 110, 90, cx - 110, 180, { tone: 'blue', w: 1.6 }) + line(cx + 110, 90, cx + 110, 180, { tone: 'blue', w: 1.6 });
        s += path(`M${cx - 110},180 A110,24 0 0 0 ${cx + 110},180`, { tone: 'blue', w: 1.6 });
        s += text(cx, 222, 'V = A · 2πr̄', { anchor: 'middle', weight: 'bold', size: 15, tone: 'red' });
        return svg(560, 240, s);
      })(),
      takeaways: [
        '第一定理（曲線 → 曲面積）：$S = L \\cdot 2\\pi\\bar{y}$；第二定理（面積 → 體積）：$V = A \\cdot 2\\pi\\bar{y}$。',
        '用途：圓頂、水塔、儲槽等旋轉體的快速算量；前提是軸不可穿過該面積。',
      ],
    },
  ],

  friction: [
    {
      concept: '庫侖乾摩擦定律',
      kind: 'chart',
      title: '摩擦力 f 隨外推力 P 的變化',
      caption: '物體重 N = 100 N，μs = 0.5、μk = 0.4（示意）。',
      svg: lineChart({
        w: 520,
        h: 290,
        x: { min: 0, max: 80, ticks: [0, 20, 40, 50, 60, 80], label: '外推力 P (N)' },
        y: { min: 0, max: 60, ticks: [0, 20, 40, 50, 60], label: '摩擦力 f (N)' },
        legend: 'none',
        series: [
          { name: '靜摩擦', tone: 'blue', points: [[0, 0], [50, 50]] },
          { name: '動摩擦', tone: 'red', points: [[50, 40], [80, 40]] },
        ],
        overlay: (f) =>
          line(f.X(50), f.Y(50), f.X(50), f.Y(40), { tone: 'muted', w: 1.4, dash: 'dash' }) +
          point(f, 50, 50, 'f_s,max = μ_sN = 50', { tone: 'blue', dx: -8, dy: -10, anchor: 'end' }) +
          text(f.X(22), f.Y(28), '靜止：f = P', { tone: 'blue', weight: 'bold', size: 12.5, rotate: -33 }) +
          text(f.X(66), f.Y(40) - 10, '滑動：f_k = μ_kN = 40', { tone: 'red', weight: 'bold', size: 12.5, anchor: 'middle' }) +
          text(f.X(51), f.Y(10), '即將滑動', { tone: 'muted', size: 11.5 }),
      }),
      table: { headers: ['外推力 P (N)', '狀態', '摩擦力 f (N)'], rows: [['20', '靜止', '20（= P）'], ['50', '臨界（即將滑動）', '50（= μsN）'], ['60', '滑動', '40（= μkN）']] },
      takeaways: [
        '靜止時摩擦力由平衡決定（f = P），**不是** μN；只有臨界狀態才等於 $\\mu_s N$。',
        '一旦滑動，摩擦力降為 $\\mu_k N$（通常 $\\mu_k < \\mu_s$），所以推動之後比較省力。',
      ],
    },
    {
      concept: '摩擦角 (Friction Angle)',
      kind: 'diagram',
      title: '摩擦角 φ：斜面臨界傾角 θ = φ',
      caption: '臨界狀態下，N 與 f 的合力 R 恰好鉛直向上、與 W 平衡，因此 R 與法線的夾角 φ 等於斜面傾角 θ。',
      svg: (() => {
        let s = '';
        const th = 30;
        const A: Pt = [60, 220];
        const Bp = polar(A[0], A[1], 380, th);
        s += polygon([A, [Bp[0], A[1]], Bp], { tone: 'muted', fill: 'muted', soft: true, w: 1.6 });
        s += angle(A[0], A[1], 52, 0, th, 'θ', { labelR: 66 });
        // 方塊
        const c = polar(A[0], A[1], 220, th);
        const u = th; // 沿斜面向上
        const nn = th + 90; // 法線
        const p1 = c, p2 = polar(c[0], c[1], 70, u);
        const p3 = polar(p2[0], p2[1], 46, nn), p4 = polar(c[0], c[1], 46, nn);
        s += polygon([p1, p2, p3, p4], { fill: 'amber', soft: true, tone: 'amber', w: 1.8 });
        const G = polar(polar(c[0], c[1], 35, u)[0], polar(c[0], c[1], 35, u)[1], 23, nn);
        const S = polar(c[0], c[1], 35, u);
        s += dot(G[0], G[1], 3.5);
        s += arrow(G[0], G[1], G[0], G[1] + 86, { tone: 'ink', w: 2.6, label: 'W', labelOffset: [8, -4] });
        s += arrowAt(S[0], S[1], 80, nn, { tone: 'green', w: 2.4 });
        const Ntip = polar(S[0], S[1], 80, nn);
        s += text(Ntip[0] - 6, Ntip[1] - 6, 'N', { tone: 'green', weight: 'bold', anchor: 'end' });
        s += arrowAt(S[0], S[1], 46, u, { tone: 'red', w: 2.4 });
        const ftip = polar(S[0], S[1], 46, u);
        s += text(ftip[0] + 4, ftip[1] + 16, 'f = μ_sN', { tone: 'red', weight: 'bold' });
        s += arrow(S[0], S[1], S[0], S[1] - 92.4, { tone: 'blue', w: 2.8, dash: 'dash' });
        s += text(S[0] + 6, S[1] - 96, 'R（合力）', { tone: 'blue', weight: 'bold' });
        s += angle(S[0], S[1], 44, 90, nn, 'φ', { tone: 'violet', labelR: 56 });
        s += lines(330, 60, ['tan φ_s = f_max / N = μ_s', '臨界：θ = φ_s', 'θ ≤ φ_s ⇒ 自鎖（不滑動）'], { size: 13, lh: 22, weight: 'bold' });
        return svg(560, 240, s);
      })(),
      takeaways: [
        '摩擦角定義：$\\tan\\phi_s = \\mu_s$；把 N 與 f 合成一個力 R，摩擦問題就變成三力平衡。',
        '斜面傾角 θ ≤ φs 時，不論物體多重都不會下滑（自鎖），與重量無關。',
        '例：μs = 0.6 ⇒ φs = tan⁻¹0.6 ≈ 30.96°。',
      ],
    },
    {
      concept: '滑動 (Sliding)',
      kind: 'diagram',
      title: '滑動 vs. 傾倒：兩個臨界推力取小者',
      caption: '施工支撐塔 B = 2 m、H = 4 m、W = 100 kN、μs = 0.35，水平推力 P 作用於塔頂。',
      svg: (() => {
        let s = '';
        const k = 36;
        const x0 = 70, y0 = 220;
        s += ground(30, 260, y0);
        s += rect(x0, y0 - 4 * k, 2 * k, 4 * k, { fill: 'blue', soft: true, tone: 'blue', w: 2 });
        s += arrow(x0 - 60, y0 - 4 * k, x0 - 2, y0 - 4 * k, { tone: 'red', w: 2.6, label: 'P', labelPos: 'start', labelOffset: [-4, -8] });
        s += dot(x0 + k, y0 - 2 * k, 3.5) + arrow(x0 + k, y0 - 2 * k, x0 + k, y0 - 2 * k + 60, { tone: 'ink', w: 2.4, label: 'W', labelOffset: [6, -6] });
        s += dot(x0 + 2 * k, y0, 5, 'amber') + text(x0 + 2 * k + 8, y0 - 6, 'A（傾倒支點）', { tone: 'amber', weight: 'bold', size: 12 });
        s += dim(x0, y0, x0 + 2 * k, y0, 'B = 2 m', { offset: 26 });
        s += dim(x0 + 2 * k, y0, x0 + 2 * k, y0 - 4 * k, 'H = 4 m', { offset: -40 });
        // 兩種模式
        s += box(300, 40, 240, 70, ['滑動模式', 'P_slide = μ_sW = 0.35×100 = 35 kN'], { tone: 'blue', size: 12.5 });
        s += box(300, 126, 240, 70, ['傾倒模式（對 A 取矩）', 'P·H = W·B/2 ⇒ P_tip = 25 kN'], { tone: 'amber', size: 12.5 });
        s += text(420, 226, '25 < 35 ⇒ 先傾倒，P_crit = 25 kN', { anchor: 'middle', weight: 'bold', tone: 'red', size: 13.5 });
        return svg(560, 250, s);
      })(),
      takeaways: [
        '傾倒臨界時，正向力 N 全部集中到轉軸角點 A，另一側脫離地面。',
        '細高的物體（H/B 大）容易先傾倒；矮胖或摩擦小的物體容易先滑動。',
      ],
    },
    {
      concept: '皮帶與纜繩摩擦',
      kind: 'chart',
      title: '纜繩摩擦：T₂/T₁ = e^{μβ} 隨接觸角指數成長',
      caption: '接觸角 β 必須用弧度；半圈 β = π，一圈 β = 2π。',
      svg: lineChart({
        w: 520,
        h: 290,
        x: { min: 0, max: 2 * Math.PI, ticks: [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2, 2 * Math.PI], label: '接觸角 β (rad)', fmt: (v) => ['0', 'π/2', 'π', '3π/2', '2π'][Math.round(v / (Math.PI / 2))] },
        y: { min: 1, max: 7, ticks: [1, 2, 3, 4, 5, 6, 7], label: 'T₂ / T₁' },
        series: [
          { name: 'μ = 0.2', tone: 'blue', points: Array.from({ length: 41 }, (_, i) => { const b = (2 * Math.PI * i) / 40; return [b, Math.exp(0.2 * b)] as Pt; }) },
          { name: 'μ = 0.3', tone: 'red', points: Array.from({ length: 41 }, (_, i) => { const b = (2 * Math.PI * i) / 40; return [b, Math.exp(0.3 * b)] as Pt; }) },
        ],
        overlay: (f) => point(f, Math.PI, Math.exp(0.2 * Math.PI), 'β = π：1.87 倍', { tone: 'blue', dx: 8, dy: 16, guides: true }),
      }),
      table: { headers: ['接觸角 β', 'μ = 0.2', 'μ = 0.3'], rows: [['π/2', '1.37', '1.60'], ['π（半圈）', '1.87', '2.57'], ['2π（一圈）', '3.51', '6.59']] },
      takeaways: [
        '多繞一圈，能撐住的張力比就再乘一次 $e^{2\\pi\\mu}$，所以船纜繞樁幾圈就能拉住大船。',
        '例：μ = 0.2、β = π、T₁ = 100 N ⇒ $T_2 = 100e^{0.628} \\approx 187.5$ N。',
      ],
    },
  ],

  truss: [
    {
      concept: '桁架基本假設與平面靜定判別式',
      kind: 'diagram',
      title: '靜定判別：數桿件 m、反力 r、節點 j',
      caption: '此桁架 m = 9、r = 3（鉸 2 + 滾 1）、j = 6：m + r = 12 = 2j ⇒ 靜定。',
      svg: (() => {
        const P = (x: number, y: number): Pt => [70 + x * 130, 200 - y * 120];
        const J = { A: P(0, 0), B: P(1, 0), C: P(2, 0), D: P(3, 0), E: P(1, 1), F: P(2, 1) };
        const members: [keyof typeof J, keyof typeof J][] = [['A', 'B'], ['B', 'C'], ['C', 'D'], ['E', 'F'], ['B', 'E'], ['C', 'F'], ['A', 'E'], ['F', 'D'], ['E', 'C']];
        let s = '';
        members.forEach(([a, b], i) => {
          s += line(...J[a], ...J[b], { w: 3, tone: 'blue' });
          const mx = (J[a][0] + J[b][0]) / 2, my = (J[a][1] + J[b][1]) / 2;
          s += pill(mx, my, String(i + 1), 'blue', 11);
        });
        for (const [name, p] of Object.entries(J)) {
          s += node(p[0], p[1], 5, 'ink');
          s += text(p[0] + (p[1] < 150 ? 0 : -8), p[1] + (p[1] < 150 ? -12 : 18), name, { weight: 'bold', anchor: p[1] < 150 ? 'middle' : 'end' });
        }
        s += pin(J.A[0], J.A[1] + 5, 14) + roller(J.D[0], J.D[1] + 5, 14);
        s += text(280, 28, 'm = 9（藍色編號）  r = 3  j = 6', { anchor: 'middle', weight: 'bold', size: 14 });
        return svg(560, 240, s);
      })(),
      takeaways: [
        '$m + r = 2j$ 靜定；$m + r > 2j$ 超靜定（多餘數 = 差值）；$m + r < 2j$ 不穩定。',
        '判別式只是必要條件：若桿件排列成可變形的四邊形，或反力全部平行／共點，仍會不穩定。',
      ],
    },
    {
      concept: '零桿',
      kind: 'diagram',
      title: '零桿判別兩大規則（節點皆無外力、無反力）',
      caption: '紅色虛線桿件為零桿。',
      svg: (() => {
        let s = '';
        // 規則一
        s += text(130, 26, '規則一：兩桿不共線', { anchor: 'middle', weight: 'bold', size: 13.5 });
        const J1: Pt = [80, 170];
        s += line(J1[0], J1[1], J1[0] + 160, J1[1], { tone: 'red', w: 3.4, dash: 'dash' });
        s += line(J1[0], J1[1], J1[0] + 70, J1[1] - 110, { tone: 'red', w: 3.4, dash: 'dash' });
        s += node(J1[0], J1[1], 6);
        s += text(130, 206, 'F₁ = F₂ = 0', { anchor: 'middle', tone: 'red', weight: 'bold' });
        // 規則二
        s += text(410, 26, '規則二：兩桿共線 + 第三桿', { anchor: 'middle', weight: 'bold', size: 13.5 });
        const J2: Pt = [410, 170];
        s += line(J2[0] - 120, J2[1], J2[0] + 120, J2[1], { tone: 'blue', w: 3.4 });
        s += line(J2[0], J2[1], J2[0] - 50, J2[1] - 110, { tone: 'red', w: 3.4, dash: 'dash' });
        s += node(J2[0], J2[1], 6);
        s += text(J2[0] - 100, J2[1] - 10, 'F₁', { tone: 'blue', weight: 'bold' }) + text(J2[0] + 100, J2[1] - 10, 'F₂', { tone: 'blue', weight: 'bold' });
        s += text(410, 206, '第三桿 F₃ = 0，且 F₁ = F₂', { anchor: 'middle', tone: 'red', weight: 'bold' });
        s += text(280, 234, '口訣：取垂直於共線桿的方向列 ΣF = 0，只剩第三桿 ⇒ 必為零', { anchor: 'middle', size: 12, tone: 'muted' });
        return svg(560, 248, s);
      })(),
      takeaways: [
        '兩條規則的前提都是「該節點**沒有外力也沒有支承反力**」；只要有外力就不能套用。',
        '零桿不是多餘的桿件：它在其他載重組合下會受力，也能縮短壓桿的挫屈長度。',
      ],
    },
    {
      concept: '節點法',
      kind: 'diagram',
      title: '節點法：從只有兩個未知數的支承節點 A 開始',
      caption: 'Pratt 桁架（12 m × 3 m，每格 3 m）中央底節點受 120 kN，R_A = 60 kN；桿力一律先假設為拉力（背離節點）。',
      svg: (() => {
        const A: Pt = [150, 190];
        let s = '';
        s += line(A[0], A[1], A[0] + 150, A[1] - 150, { tone: 'muted', w: 6, opacity: 0.35 });
        s += line(A[0], A[1], A[0] + 210, A[1], { tone: 'muted', w: 6, opacity: 0.35 });
        s += node(A[0], A[1], 6);
        s += text(A[0] - 12, A[1] - 6, 'A', { weight: 'bold', anchor: 'end', size: 14 });
        s += arrowAt(A[0], A[1], 100, 45, { tone: 'blue', w: 2.6 });
        s += text(A[0] + 78, A[1] - 84, 'F_AB（假設拉）', { tone: 'blue', weight: 'bold' });
        s += arrowAt(A[0], A[1], 110, 0, { tone: 'green', w: 2.6 });
        s += text(A[0] + 116, A[1] + 4, 'F_AG（假設拉）', { tone: 'green', weight: 'bold' });
        s += arrow(A[0], A[1] + 70, A[0], A[1] + 8, { tone: 'red', w: 2.6, label: 'R_A = 60 kN', labelOffset: [-10, 30] });
        s += angle(A[0], A[1], 34, 0, 45, '45°', { labelR: 48 });
        s += lines(330, 60, ['ΣF_y = 0：60 + F_AB sin45° = 0', '⇒ F_AB = −84.9 kN（壓力 C）', 'ΣF_x = 0：F_AG + F_AB cos45° = 0', '⇒ F_AG = +60 kN（拉力 T）'], { size: 12.5, lh: 22, weight: 'bold' });
        return svg(560, 270, s);
      })(),
      takeaways: [
        '一律假設拉力（箭頭背離節點），解出正值 = 拉力 T，負值 = 壓力 C，不必猜方向。',
        '每個節點只有 2 條方程，所以要挑未知桿力 ≤ 2 的節點開始，再一路推進。',
      ],
    },
    {
      concept: '剖面法',
      kind: 'diagram',
      title: '剖面法：切三根桿，對另外兩根的交點取矩',
      caption: '切斷 BC、BH、GH；BH 與 GH 交於 H，對 H 取矩即可一步解出頂弦 BC。',
      svg: (() => {
        const P = (x: number, y: number): Pt => [50 + x * 38, 180 - y * 38];
        const N = { A: P(0, 0), G: P(3, 0), H: P(6, 0), I: P(9, 0), E: P(12, 0), B: P(3, 3), C: P(6, 3), D: P(9, 3) };
        const members: [keyof typeof N, keyof typeof N][] = [['A', 'G'], ['G', 'H'], ['H', 'I'], ['I', 'E'], ['B', 'C'], ['C', 'D'], ['A', 'B'], ['D', 'E'], ['B', 'G'], ['C', 'H'], ['D', 'I'], ['B', 'H'], ['D', 'H']];
        let s = '';
        for (const [a, b] of members) s += line(...N[a], ...N[b], { w: 2.6, tone: 'ink' });
        for (const [name, p] of Object.entries(N)) {
          s += node(p[0], p[1], 4.2);
          s += text(p[0], p[1] + (p[1] > 150 ? 20 : -10), name, { anchor: 'middle', weight: 'bold', size: 12 });
        }
        s += pin(N.A[0], N.A[1] + 4, 11) + roller(N.E[0], N.E[1] + 4, 11);
        s += arrow(N.H[0], N.H[1] + 8, N.H[0], N.H[1] + 46, { tone: 'red', w: 2.4, label: '120 kN', labelOffset: [8, -4] });
        // 剖面線
        s += path(`M${P(4.8, 3.8)[0]},${P(4.8, 3.8)[1]} L${P(4.2, -0.8)[0]},${P(4.2, -0.8)[1]}`, { tone: 'red', w: 2, dash: 'dash' });
        s += text(P(4.8, 3.8)[0] + 6, P(4.8, 3.8)[1], '剖面 1-1', { tone: 'red', weight: 'bold', size: 12 });
        s += dot(N.H[0], N.H[1], 6, 'amber');
        s += moment(N.H[0], N.H[1], 22, 'ccw', { tone: 'amber', from: 100, span: 150 });
        s += arrow(N.A[0], N.A[1] + 60, N.A[0], N.A[1] + 26, { tone: 'green', w: 2.4, label: 'R_A = 60', labelOffset: [8, -6] });
        s += lines(530, 60, ['ΣM_H = 0', '−60×6 − F_BC×3 = 0', 'F_BC = −120 kN', '⇒ 120 kN 壓力 (C)'], { size: 12.5, lh: 20, weight: 'bold', anchor: 'end' });
        return svg(560, 270, s);
      })(),
      takeaways: [
        'F_BC 假設為拉力（向右、背離切口），它對 H 的力矩為順時針 $-3F_{BC}$；$R_A$ 對 H 也是順時針 $-6R_A$。',
        '兩者相加為零 ⇒ $F_{BC} = -120$ kN，負號表示實際為**壓力**：簡支桁架受向下載重時頂弦受壓、底弦受拉。',
      ],
    },
  ],

  beam: [
    {
      concept: '靜定樑種類與支承約束條件',
      kind: 'diagram',
      title: '三種靜定梁與其變形曲線',
      caption: '虛線為受向下載重後的撓曲形狀，可看出正彎矩（下凸）與負彎矩（上凸）區。',
      svg: (() => {
        let s = '';
        const row = (y: number, title: string, draw: string) => text(20, y - 30, title, { weight: 'bold', size: 13.5 }) + draw;
        // 簡支
        let y = 70;
        s += row(y, '簡支梁：鉸 + 滾', beam(150, 450, y, 8) + pin(150, y + 4, 11) + roller(450, y + 4, 11) +
          path(`M150,${y} Q300,${y + 50} 450,${y}`, { tone: 'blue', w: 2, dash: 'dash' }) + text(300, y + 40, '全跨正彎矩', { anchor: 'middle', tone: 'blue', size: 12 }));
        // 懸臂
        y = 175;
        s += row(y, '懸臂梁：固定端', fixed(150, y, 'left', 46) + beam(150, 450, y, 8) +
          path(`M150,${y} Q330,${y} 450,${y + 44}`, { tone: 'red', w: 2, dash: 'dash' }) + text(330, y + 32, '全跨負彎矩（固定端最大）', { anchor: 'middle', tone: 'red', size: 12 }));
        // 外伸
        y = 285;
        s += row(y, '外伸梁：伸出支承外', beam(120, 500, y, 8) + pin(150, y + 4, 11) + roller(390, y + 4, 11) +
          path(`M120,${y + 6} Q255,${y + 52} 390,${y} Q450,${y - 26} 500,${y - 30}`, { tone: 'violet', w: 2, dash: 'dash' }) +
          text(255, y + 42, '跨內正彎矩', { anchor: 'middle', tone: 'blue', size: 12 }) + text(445, y - 32, '支承處負彎矩', { anchor: 'middle', tone: 'red', size: 12 }));
        return svg(560, 320, s);
      })(),
      takeaways: [
        '三種梁的未知反力都是 3 個，用 ΣFx、ΣFy、ΣM 即可解出，故稱靜定梁。',
        '梁下緣受拉、變形下凸為正彎矩；上緣受拉、上凸為負彎矩。外伸梁兩者都有，中間存在反曲點。',
      ],
    },
    {
      concept: '載重、剪力與彎矩之微積分與面積關係',
      kind: 'diagram',
      title: '載重圖 → 剪力圖 → 彎矩圖（均布載重簡支梁）',
      caption: 'L = 6 m、w = 20 kN/m：R_A = R_B = 60 kN，跨中 V = 0、M_max = wL²/8 = 90 kN·m。',
      svg: (() => {
        const L0 = 70, W = 400;
        const X = (m: number) => L0 + (m / 6) * W;
        let s = '';
        s += distLoad(X(0), X(6), 52, 26, 26, { n: 10, label: 'w = 20 kN/m', labelSide: 'center' });
        s += beam(X(0), X(6), 56, 8) + pin(X(0), 60, 10) + roller(X(6), 60, 10);
        const fv = frame([0, 6], [-70, 70], { left: L0, top: 100, width: W, height: 92 });
        s += line(fv.X(0), fv.Y(0), fv.X(6) + 10, fv.Y(0), { tone: 'ink', w: 1.2 });
        s += signedFill(fv, [[0, 0], [0, 60], [6, -60], [6, 0]]);
        s += text(fv.X(0) - 8, fv.Y(60) + 4, '+60', { anchor: 'end', tone: 'blue', weight: 'bold' });
        s += text(fv.X(6) + 8, fv.Y(-60) + 4, '−60', { tone: 'red', weight: 'bold' });
        s += text(fv.X(3) + 6, fv.Y(0) - 8, 'V = 0', { tone: 'ink', size: 12, weight: 'bold' });
        s += text(L0 - 44, fv.Y(0) + 4, 'V', { weight: 'bold', italic: true, size: 14 });
        const fm = frame([0, 6], [0, 100], { left: L0, top: 214, width: W, height: 86 });
        s += line(fm.X(0), fm.Y(0), fm.X(6) + 10, fm.Y(0), { tone: 'ink', w: 1.2 });
        const mpts: Pt[] = Array.from({ length: 41 }, (_, i) => { const x = (6 * i) / 40; return [x, 60 * x - 10 * x * x]; });
        s += signedFill({ ...fm, Y: (y: number) => fm.Y(0) + (fm.Y(0) - fm.Y(y)), P: (x: number, y: number) => [fm.X(x), fm.Y(0) + (fm.Y(0) - fm.Y(y))] } as typeof fm, mpts);
        s += text(fm.X(3), fm.Y(0) + 86 + 16, 'M_max = 90 kN·m', { anchor: 'middle', tone: 'blue', weight: 'bold' });
        s += line(fv.X(3), fv.Y(0), fm.X(3), fm.Y(0) + 86, { tone: 'muted', w: 1, dash: 'dot' });
        s += text(L0 - 44, fm.Y(0) + 4, 'M', { weight: 'bold', italic: true, size: 14 });
        s += lines(486, 130, ['dV/dx = −w', '斜直線'], { size: 12, lh: 17, tone: 'muted' });
        s += lines(486, 250, ['dM/dx = V', '拋物線', '（正彎矩畫在下方）'], { size: 12, lh: 17, tone: 'muted' });
        return svg(560, 330, s);
      })(),
      takeaways: [
        '剪力圖斜率 = −載重集度；均布載重 ⇒ 剪力圖為斜直線、彎矩圖為二次拋物線。',
        '剪力為零（V = 0）的截面就是彎矩極值：左半跨剪力三角形面積 ½ × 3 × 60 = 90 kN·m = $M_{max}$。',
      ],
    },
    {
      concept: '剪力圖 (V-Diagram) 與彎矩圖 (M-Diagram) 繪製標準四步驟',
      kind: 'diagram',
      title: '外伸梁 SFD／BMD：找出正負彎矩極值與反曲點',
      caption: 'A 鉸支 (x = 0)、B 滾支 (x = 6 m)、C 自由端 (x = 8 m)；AB 段 10 kN/m，C 點 30 kN。R_A = 20、R_B = 70 kN。',
      svg: (() => {
        const L0 = 60, W = 432;
        const X = (m: number) => L0 + (m / 8) * W;
        let s = '';
        s += distLoad(X(0), X(6), 50, 22, 22, { n: 9, label: '10 kN/m', labelSide: 'center' });
        s += beam(X(0), X(8), 54, 8) + pin(X(0), 58, 10) + roller(X(6), 58, 10);
        s += arrow(X(8), 10, X(8), 48, { tone: 'red', w: 2.4, label: '30 kN', labelOffset: [-8, -26] });
        s += text(X(0), 98, 'A', { anchor: 'middle', weight: 'bold' }) + text(X(6), 98, 'B', { anchor: 'middle', weight: 'bold' }) + text(X(8), 74, 'C', { anchor: 'middle', weight: 'bold' });
        const fv = frame([0, 8], [-45, 35], { left: L0, top: 112, width: W, height: 92 });
        s += line(fv.X(0), fv.Y(0), fv.X(8) + 10, fv.Y(0), { tone: 'ink', w: 1.2 });
        s += signedFill(fv, [[0, 0], [0, 20], [6, -40], [6, 30], [8, 30], [8, 0]]);
        s += text(fv.X(0) - 6, fv.Y(20) + 4, '+20', { anchor: 'end', tone: 'blue', weight: 'bold', size: 12 });
        s += text(fv.X(6) - 6, fv.Y(-40) + 4, '−40', { anchor: 'end', tone: 'red', weight: 'bold', size: 12 });
        s += text(fv.X(7), fv.Y(30) - 6, '+30', { anchor: 'middle', tone: 'blue', weight: 'bold', size: 12 });
        s += text(fv.X(2), fv.Y(0) + 15, 'x = 2', { anchor: 'middle', size: 11.5 });
        s += text(L0 - 30, fv.Y(0) + 4, 'V', { weight: 'bold', italic: true, size: 14 });
        const Mx = (x: number) => (x <= 6 ? 20 * x - 5 * x * x : -30 * (8 - x));
        const mp: Pt[] = Array.from({ length: 81 }, (_, i) => { const x = (8 * i) / 80; return [x, Mx(x)]; });
        // 正彎矩畫在軸線下方（工程慣例：畫在受拉側），故以 −M 作圖
        const fm2 = frame([0, 8], [-30, 70], { left: L0, top: 226, width: W, height: 100 });
        s += line(fm2.X(0), fm2.Y(0), fm2.X(8) + 10, fm2.Y(0), { tone: 'ink', w: 1.2 });
        s += signedFill(fm2, mp.map(([x, y]) => [x, -y] as Pt), { pos: 'red', neg: 'blue' });
        s += text(fm2.X(2), fm2.Y(-20) + 16, 'M = +20（x = 2）', { anchor: 'middle', tone: 'blue', weight: 'bold', size: 12 });
        s += text(fm2.X(6) + 6, fm2.Y(60) - 4, 'M_B = −60', { tone: 'red', weight: 'bold', size: 12 });
        s += dot(fm2.X(4), fm2.Y(0), 4.5, 'violet') + text(fm2.X(4), fm2.Y(0) - 8, '反曲點 x = 4', { anchor: 'middle', tone: 'violet', size: 12, weight: 'bold' });
        s += text(L0 - 30, fm2.Y(0) + 4, 'M', { weight: 'bold', italic: true, size: 14 });
        return svg(560, 340, s);
      })(),
      takeaways: [
        '剪力過零點 x = 2 m 處是跨內最大正彎矩：$M = \\tfrac12 \\times 2 \\times 20 = 20$ kN·m。',
        'B 點剪力由 −40 跳到 +30（跳躍量 = $R_B$ = 70），彎矩在 B 為 $-30 \\times 2 = -60$ kN·m。',
        '彎矩由正轉負的位置 $20x - 5x^2 = 0 \\Rightarrow x = 4$ m 為反曲點，配筋時上下層鋼筋在此附近切換。',
      ],
    },
  ],

  'stress-strain': [
    {
      concept: '應力 (Stress) 與應變 (Strain) 的物理定義',
      kind: 'diagram',
      title: '正應力垂直於截面，剪應力平行於截面',
      caption: '左：軸向拉桿；右：受剪方塊（γ 為直角的改變量，單位 rad）。',
      svg: (() => {
        let s = '';
        // 拉桿
        s += rect(60, 90, 170, 40, { fill: 'blue', soft: true, tone: 'blue', w: 1.8 });
        s += rect(225, 90, 4, 40, { fill: 'red', tone: 'red', w: 1 });
        s += arrow(60, 110, 14, 110, { tone: 'ink', w: 2.6, label: 'P', labelPos: 'end', labelOffset: [-4, -10] });
        s += arrow(229, 110, 275, 110, { tone: 'ink', w: 2.6, label: 'P', labelOffset: [-4, -10] });
        for (let y = 96; y <= 124; y += 7) s += arrow(229, y, 248, y, { tone: 'red', w: 1.2, head: 5 });
        s += text(150, 60, '正應力 σ = P / A', { anchor: 'middle', weight: 'bold', size: 14, tone: 'red' });
        s += text(150, 160, '截面積 A ⟂ 受力方向', { anchor: 'middle', size: 12, tone: 'muted' });
        s += dim(60, 130, 230, 130, 'L → L + δ，ε = δ / L', { offset: 44, size: 12 });
        // 剪力方塊
        const x = 360, y = 160, a = 90, g = 22;
        s += rect(x, y - a, a, a, { tone: 'muted', w: 1.2, dash: 'dash' });
        s += polygon([[x, y], [x + a, y], [x + a + g, y - a], [x + g, y - a]], { fill: 'green', soft: true, tone: 'green', w: 1.8 });
        s += hatchRect(x - 10, y, a + 30, 8, { spacing: 6 });
        s += line(x - 10, y, x + a + 20, y, { w: 1.6 });
        s += arrow(x + g, y - a - 14, x + a + g, y - a - 14, { tone: 'red', w: 2.6, label: 'V', labelOffset: [6, 4] });
        s += angle(x, y, 60, 90 - 13.7, 90, 'γ', { tone: 'violet', labelR: 72 });
        s += text(x + a / 2 + 10, 50, '剪應力 τ = V / A', { anchor: 'middle', weight: 'bold', size: 14, tone: 'red' });
        s += text(x + a / 2 + 10, 196, '剪應變 γ ≈ 側移 / 高度 (rad)', { anchor: 'middle', size: 12, tone: 'muted' });
        return svg(560, 210, s);
      })(),
      takeaways: [
        '單位：1 MPa = 1 N/mm²；應變 ε 無單位（mm/mm），剪應變 γ 以弧度表示。',
        '剪應力的面積是「平行於力」的那個面，例如螺栓的圓形斷面、方塊的上表面。',
      ],
    },
    {
      concept: '虎克定律與材料彈性常數關係',
      kind: 'diagram',
      title: '低碳鋼應力–應變曲線（示意）',
      caption: '橫軸已誇大彈性段，實際彈性應變只有約 0.1%；斜率即彈性模數 E。',
      svg: (() => {
        const f = frame([0, 10], [0, 10], { left: 70, top: 30, width: 420, height: 210 });
        let s = axes(f, { xLabel: 'ε', yLabel: 'σ', origin: true });
        s += path(`M${f.X(0)},${f.Y(0)} L${f.X(1)},${f.Y(6)} Q${f.X(1.12)},${f.Y(6.6)} ${f.X(1.18)},${f.Y(6.5)} L${f.X(1.3)},${f.Y(6.1)} L${f.X(3)},${f.Y(6.15)} C${f.X(4)},${f.Y(7.3)} ${f.X(5.5)},${f.Y(8.9)} ${f.X(7.4)},${f.Y(9.1)} C${f.X(8.2)},${f.Y(9.05)} ${f.X(8.9)},${f.Y(8)} ${f.X(9.4)},${f.Y(7)}`, { tone: 'blue', w: 2.8 });
        s += point(f, 1, 6, 'A 比例限度', { tone: 'green', dx: -8, dy: -2, anchor: 'end' });
        s += point(f, 1.18, 6.5, 'B 上降伏點', { tone: 'amber', dx: 0, dy: -12, anchor: 'middle' });
        s += text(f.X(2.15), f.Y(6.15) + 18, '降伏平台', { anchor: 'middle', size: 12, tone: 'muted' });
        s += point(f, 7.4, 9.1, 'C 極限強度 f_u', { tone: 'red', dx: 0, dy: -12, anchor: 'middle' });
        s += dot(f.X(9.4), f.Y(7), 4.5, 'ink') + text(f.X(9.4) + 6, f.Y(7) + 16, 'D 斷裂', { size: 12, weight: 'bold' });
        s += text(f.X(5.2), f.Y(7.2) + 2, '應變硬化', { anchor: 'middle', size: 12, tone: 'muted', rotate: -30 });
        s += text(f.X(8.4), f.Y(9.3) - 4, '頸縮', { anchor: 'middle', size: 12, tone: 'muted' });
        s += angle(f.X(0), f.Y(0), 40, 0, 72, 'E = σ/ε', { tone: 'violet', labelR: 64 });
        s += line(f.X(0), f.Y(6.15), f.X(1.3), f.Y(6.15), { tone: 'muted', w: 1, dash: 'dash' });
        s += text(f.X(0) - 6, f.Y(6.15) + 4, 'f_y', { anchor: 'end', tone: 'amber', weight: 'bold', size: 12 });
        s += line(f.X(0), f.Y(9.1), f.X(7.4), f.Y(9.1), { tone: 'muted', w: 1, dash: 'dash' });
        s += text(f.X(0) - 6, f.Y(9.1) + 4, 'f_u', { anchor: 'end', tone: 'red', weight: 'bold', size: 12 });
        return svg(560, 270, s);
      })(),
      takeaways: [
        'OA 為直線，虎克定律 $\\sigma = E\\varepsilon$ 只在此段成立；結構鋼 $E \\approx 200$ GPa。',
        '設計以降伏強度 $f_y$ 為基準（除以安全係數）；極限強度 $f_u$ 之後開始頸縮直至斷裂。',
        '鋼材斷裂前有明顯的降伏與頸縮變形 → 延性材料會「預警」；混凝土、鑄鐵等脆性材料沒有。',
      ],
    },
    {
      concept: '軸向受力桿件之伸縮變形量公式',
      kind: 'diagram',
      title: '分段軸力圖：δ_total = Σ PᵢLᵢ / (AᵢEᵢ)',
      caption: '銅段 L₁ = 1 m、A₁ = 400 mm²、E₁ = 100 GPa；鋁段 L₂ = 1.5 m、A₂ = 200 mm²、E₂ = 70 GPa。',
      svg: (() => {
        const X = (m: number) => 60 + m * 170;
        let s = '';
        const y = 80;
        s += rect(X(0), y - 22, X(1) - X(0), 44, { fill: 'amber', soft: true, tone: 'amber', w: 1.8 });
        s += rect(X(1), y - 13, X(2.5) - X(1), 26, { fill: 'blue', soft: true, tone: 'blue', w: 1.8 });
        s += text((X(0) + X(1)) / 2, y + 5, '銅', { anchor: 'middle', weight: 'bold' }) + text((X(1) + X(2.5)) / 2, y + 5, '鋁', { anchor: 'middle', weight: 'bold' });
        s += arrow(X(0), y, X(0) - 48, y, { tone: 'red', w: 2.6, label: '40 kN', labelOffset: [0, -12] });
        s += arrow(X(1), y - 34, X(1) + 46, y - 34, { tone: 'red', w: 2.4, label: '10 kN', labelPos: 'start', labelOffset: [-4, -6] });
        s += line(X(1), y - 34, X(1), y - 22, { tone: 'red', w: 1.2, dash: 'dot' });
        s += arrow(X(2.5), y, X(2.5) + 46, y, { tone: 'red', w: 2.6, label: '30 kN', labelOffset: [-20, -12] });
        const f = frame([0, 2.5], [0, 50], { left: X(0), top: 140, width: X(2.5) - X(0), height: 80 });
        s += line(f.X(0), f.Y(0), f.X(2.5) + 10, f.Y(0), { tone: 'ink', w: 1.2 });
        s += signedFill(f, [[0, 0], [0, 40], [1, 40], [1, 30], [2.5, 30], [2.5, 0]]);
        s += text(f.X(0.5), f.Y(40) - 6, 'N₁ = +40 kN（拉）', { anchor: 'middle', tone: 'blue', weight: 'bold', size: 12.5 });
        s += text(f.X(1.75), f.Y(30) - 6, 'N₂ = +30 kN（拉）', { anchor: 'middle', tone: 'blue', weight: 'bold', size: 12.5 });
        s += text(f.X(0) - 8, f.Y(0) + 4, 'N', { anchor: 'end', weight: 'bold', italic: true });
        s += text(f.X(0.5), 246, 'δ₁ = 40000×1000 / (400×100000) = 1.00 mm', { anchor: 'middle', size: 11.5 });
        s += text(f.X(1.75), 266, 'δ₂ = 30000×1500 / (200×70000) ≈ 3.21 mm', { anchor: 'middle', size: 11.5 });
        s += text(280, 292, 'δ_total = 1.00 + 3.21 ≈ 4.21 mm（伸長）', { anchor: 'middle', weight: 'bold', tone: 'red' });
        return svg(560, 304, s);
      })(),
      takeaways: [
        '每一段的軸力 = 切口一側所有外力的代數和；拉力取正、壓力取負。',
        '各段材料、截面不同，必須分段算 δ 再相加，不可把總長直接代入一次公式。',
      ],
    },
    {
      concept: '許用應力與安全係數',
      kind: 'chart',
      title: '常用結構材料：強度 vs. 設計許用應力',
      caption: '許用應力 = 強度 ÷ 安全係數；混凝土以抗壓強度 f′c 計。',
      svg: barChart({
        w: 520,
        h: 270,
        categories: ['結構用鋼 SN400', '鋼筋 SD420', '混凝土 C280'],
        series: [
          { name: '強度 (f_y 或 f′c)', tone: 'blue', values: [250, 420, 28] },
          { name: '許用應力 σ_allow', tone: 'red', values: [150, 250, 12.6] },
        ],
        y: { max: 460, ticks: [0, 100, 200, 300, 400], label: 'MPa' },
        values: true,
      }),
      table: { headers: ['材料', '強度 (MPa)', '許用應力 (MPa)', '安全係數'], rows: [['結構用鋼 SN400', 'f_y = 250', '150', '≈ 1.67'], ['鋼筋 SD420', 'f_y = 420', '250', '≈ 1.68'], ['混凝土 C280', "f'c = 28", '12.6', '≈ 2.2（0.45f′c）']] },
      takeaways: [
        '設計檢核：$\\sigma_{max} = P/A \\le \\sigma_{allow} = f_y / FS$。',
        '混凝土強度遠低於鋼材，且抗拉幾乎為零，所以受拉區要靠鋼筋。',
      ],
    },
    {
      concept: '熱應力與自由膨脹受阻變形',
      kind: 'diagram',
      title: '熱應力：自由膨脹量被牆壁「推回去」',
      caption: '兩端固定的鋼桿升溫 ΔT：變形相容條件 δ_T − δ_P = 0。',
      svg: (() => {
        let s = '';
        const row = (y: number, label: string) => text(18, y + 5, label, { size: 12.5, weight: 'bold' });
        // 1 自由
        let y = 50;
        s += row(y, '① 自由膨脹');
        s += wall(130, y - 22, y + 22, 'left');
        s += rect(130, y - 10, 280, 20, { fill: 'amber', soft: true, tone: 'amber' });
        s += rect(410, y - 10, 40, 20, { fill: 'red', soft: true, tone: 'red', dash: 'dash' });
        s += dim(410, y + 10, 450, y + 10, 'δ_T = αΔTL', { offset: 18, size: 11.5 });
        // 2 牆推回
        y = 130;
        s += row(y, '② 牆壁推回');
        s += wall(130, y - 22, y + 22, 'left');
        s += rect(130, y - 10, 320, 20, { fill: 'amber', soft: true, tone: 'amber' });
        s += arrow(500, y, 452, y, { tone: 'red', w: 2.6, label: 'P', labelPos: 'start', labelOffset: [4, -8] });
        s += dim(410, y + 10, 450, y + 10, 'δ_P = PL/AE', { offset: 18, size: 11.5 });
        // 3 結果
        y = 210;
        s += row(y, '③ 實際狀態');
        s += wall(130, y - 22, y + 22, 'left') + wall(410, y - 22, y + 22, 'right');
        s += rect(130, y - 10, 280, 20, { fill: 'blue', soft: true, tone: 'blue' });
        s += arrow(160, y, 132, y, { tone: 'red', w: 2, head: 7 }) + arrow(380, y, 408, y, { tone: 'red', w: 2, head: 7 });
        s += text(270, y + 5, '受壓：σ_T = EαΔT', { anchor: 'middle', weight: 'bold', tone: 'red', size: 13 });
        s += text(280, 254, 'αΔTL = σL/E ⇒ σ_T = EαΔT（與長度 L 無關）', { anchor: 'middle', weight: 'bold', size: 13 });
        return svg(560, 266, s);
      })(),
      takeaways: [
        '升溫受阻 ⇒ 壓應力；降溫受阻 ⇒ 拉應力。',
        '例：鋼 E = 200 GPa、α = 1.2×10⁻⁵/°C、ΔT = 40°C ⇒ $\\sigma_T = 96$ MPa（壓），與桿長無關。',
        '工程對策：伸縮縫、滑動支承，讓熱變形有空間釋放。',
      ],
    },
    {
      concept: '莫耳圓與平面應力轉換',
      kind: 'diagram',
      title: '莫耳圓：σx = 80、σy = 20、τxy = 40 MPa',
      caption: '圓心 C = 平均正應力 50 MPa，半徑 R = √(30² + 40²) = 50 MPa；τ 軸向下為正。',
      svg: mohr(80, 20, 40, { scale: 2.2, ticks: [0, 50, 100] }).svg,
      takeaways: [
        '主應力 $\\sigma_{1,2} = C \\pm R = 100, 0$ MPa；最大平面剪應力 $\\tau_{max} = R = 50$ MPa。',
        '莫耳圓上轉 2θ 對應元素實際轉 θ；主平面上剪應力為零（圓與 σ 軸交點）。',
      ],
    },
    {
      concept: '梁之彎曲應力與橫向剪應力',
      kind: 'diagram',
      title: '梁斷面上的彎曲正應力（線性）與剪應力（拋物線）',
      caption: '正彎矩作用下：中性軸以上受壓、以下受拉；剪應力在中性軸最大、上下緣為零。',
      svg: (() => {
        let s = '';
        const top = 50, h = 160, mid = top + h / 2;
        // 斷面
        s += rect(60, top, 70, h, { fill: 'muted', soft: true, tone: 'ink', w: 1.8 });
        s += line(40, mid, 150, mid, { tone: 'violet', w: 1.4, dash: 'center' });
        s += text(95, top + h + 22, 'b × h 斷面', { anchor: 'middle', size: 12 });
        s += text(36, mid + 4, 'N.A.', { anchor: 'end', tone: 'violet', size: 12, weight: 'bold' });
        // 彎曲應力
        const bx = 250;
        s += line(bx, top - 6, bx, top + h + 6, { tone: 'ink', w: 1.4 });
        s += area([[bx, mid], [bx - 70, top], [bx, top]], 'red', true) + area([[bx, mid], [bx + 70, top + h], [bx, top + h]], 'blue', true);
        s += line(bx - 70, top, bx + 70, top + h, { tone: 'ink', w: 2 });
        for (let i = 1; i < 8; i++) {
          const yy = top + (h * i) / 8;
          const len = ((yy - mid) / (h / 2)) * 70;
          if (Math.abs(len) > 6) s += arrow(bx + len, yy, bx, yy, { tone: len < 0 ? 'red' : 'blue', w: 1.2, head: 5 });
        }
        s += text(bx - 74, top - 8, '壓 σ_max', { tone: 'red', weight: 'bold', size: 12, anchor: 'middle' });
        s += text(bx + 74, top + h + 18, '拉 σ_max', { tone: 'blue', weight: 'bold', size: 12, anchor: 'middle' });
        s += text(bx, 22, 'σ = M·y / I', { anchor: 'middle', weight: 'bold', size: 14 });
        // 剪應力
        const cx = 430;
        s += line(cx, top - 6, cx, top + h + 6, { tone: 'ink', w: 1.4 });
        const pts: Pt[] = [];
        for (let i = 0; i <= 30; i++) {
          const t = i / 30;
          const yy = top + h * t;
          const eta = (yy - mid) / (h / 2);
          pts.push([cx + 80 * (1 - eta * eta), yy]);
        }
        s += area([[cx, top], ...pts, [cx, top + h]], 'green', true);
        s += polyline(pts, { tone: 'green', w: 2.2 });
        s += text(cx + 86, mid + 4, 'τ_max = 1.5 V/A', { tone: 'green', weight: 'bold', size: 12 });
        s += text(cx, 22, 'τ = VQ / (Ib)', { anchor: 'middle', weight: 'bold', size: 14 });
        return svg(560, 240, s);
      })(),
      takeaways: [
        '彎曲應力與距中性軸距離 y 成正比，上下緣最大：$\\sigma_{max} = M/S$，$S = I/y_{max} = bh^2/6$（矩形）。',
        '剪應力分布與彎曲應力剛好相反：中性軸最大、上下緣為零。',
      ],
    },
  ],

  'spatial-force-systems': [
    {
      concept: '空間力向量與方向餘弦',
      kind: 'diagram',
      title: '空間力的直角分量：F = 700 N 由 O 指向 A(2, 3, 6)',
      caption: '|OA| = √(2² + 3² + 6²) = 7 m；各分量 = F × (座標差 / 距離)。',
      svg: (() => {
        const P = oblique(220, 230, 26, 0.75);
        const A = P(2, 3, 6);
        let s = '';
        s += arrow(...P(0, 0, 0), ...P(4.2, 0, 0), { tone: 'muted', w: 1.3, head: 7 }) + text(...P(4.7, 0, 0), 'x', { italic: true, tone: 'muted' });
        s += arrow(...P(0, 0, 0), ...P(0, 5.5, 0), { tone: 'muted', w: 1.3, head: 7 }) + text(...P(0, 5.9, 0.2), 'y', { italic: true, tone: 'muted' });
        s += arrow(...P(0, 0, 0), ...P(0, 0, 7.4), { tone: 'muted', w: 1.3, head: 7 }) + text(...P(0, -0.4, 7.4), 'z', { italic: true, tone: 'muted' });
        const d = { tone: 'muted' as const, w: 1, dash: 'dash' as const };
        s += line(...P(2, 0, 0), ...P(2, 3, 0), d) + line(...P(0, 3, 0), ...P(2, 3, 0), d) + line(...P(2, 3, 0), ...P(2, 3, 6), d);
        s += line(...P(0, 0, 6), ...P(2, 3, 6), d);
        s += arrow(...P(0, 0, 0), ...P(2, 0, 0), { tone: 'blue', w: 2.6 });
        s += arrow(...P(2, 0, 0), ...P(2, 3, 0), { tone: 'green', w: 2.6 });
        s += arrow(...P(2, 3, 0), ...P(2, 3, 6), { tone: 'amber', w: 2.6 });
        s += arrow(...P(0, 0, 0), ...A, { tone: 'red', w: 3 });
        s += text(A[0] + 8, A[1], 'A(2, 3, 6)', { tone: 'red', weight: 'bold' });
        s += text(P(1, 0, 0)[0] - 10, P(1, 0, 0)[1] + 18, 'F_x = 200 N', { tone: 'blue', weight: 'bold', size: 12, anchor: 'end' });
        s += text(P(2, 1.5, 0)[0], P(2, 1.5, 0)[1] + 20, 'F_y = 300 N', { tone: 'green', weight: 'bold', size: 12, anchor: 'middle' });
        s += text(P(2, 3, 3)[0] + 8, P(2, 3, 3)[1], 'F_z = 600 N', { tone: 'amber', weight: 'bold', size: 12 });
        s += text(P(0, 0, 0)[0] - 8, P(0, 0, 0)[1] - 6, 'O', { anchor: 'end', weight: 'bold', italic: true });
        s += lines(380, 70, ['F = 700 N，d = 7 m', 'F_x = 700 × 2/7 = 200 N', 'F_y = 700 × 3/7 = 300 N', 'F_z = 700 × 6/7 = 600 N', 'cos α = 2/7 ≈ 0.286'], { size: 12.5, lh: 21 });
        return svg(560, 270, s);
      })(),
      takeaways: [
        '方向餘弦就是單位向量的三個分量：$\\cos\\alpha = F_x/F = d_x/d$。',
        '三個方向餘弦不獨立：$\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1$，已知兩個可求第三個（注意正負兩解）。',
      ],
    },
    {
      concept: '空間共點與平行力系之合成與平衡',
      kind: 'diagram',
      title: '三索懸吊（空間共點力系）',
      caption: '頂點 P(0, 0, 4)，三錨點在半徑 3 m 的圓上互隔 120°；每根索長 5 m。',
      svg: (() => {
        const Pj = oblique(270, 220, 30, 0.6, 210);
        const top = Pj(0, 0, 4);
        const anchors: [number, number][] = [[3, 0], [-1.5, 2.598], [-1.5, -2.598]];
        let s = '';
        s += ellipse(...Pj(0, 0, 0), 3 * 30 * 1.0, 3 * 30 * 0.3, { tone: 'muted', w: 1, dash: 'dash' });
        s += line(...Pj(0, 0, 0), ...top, { tone: 'muted', w: 1, dash: 'dash' });
        anchors.forEach(([x, y], i) => {
          const a = Pj(x, y, 0);
          s += line(...a, ...top, { tone: 'blue', w: 2.4 });
          s += dot(a[0], a[1], 4.5, 'ink');
          s += text(a[0] + (i === 0 ? -12 : 10), a[1] + 18, ['A', 'B', 'C'][i], { weight: 'bold', anchor: i === 0 ? 'end' : 'start' });
        });
        s += node(top[0], top[1], 5) + text(top[0] + 10, top[1] - 8, 'P(0, 0, 4)', { weight: 'bold' });
        s += arrow(top[0], top[1] + 6, top[0], top[1] + 60, { tone: 'red', w: 2.6, label: 'W = 1200 N', labelOffset: [8, -4] });
        s += dim(...Pj(0, 0, 0), ...Pj(0, 0, 4), '4 m', { offset: -80, tone: 'muted' });
        s += lines(380, 60, ['每索 L = √(3² + 4²) = 5 m', '鉛直分量 = T × 4/5 = 0.8T', 'ΣF_z = 0：3(0.8T) = 1200', '⇒ T = 500 N'], { size: 12.5, lh: 21, weight: 'bold' });
        return svg(560, 260, s);
      })(),
      takeaways: [
        '對稱配置時水平分量自動互相抵消，只需列 ΣF_z = 0。',
        '空間共點力系有 3 條獨立平衡方程 (ΣFx, ΣFy, ΣFz)，最多解 3 個未知數。',
      ],
    },
    {
      concept: '空間剛體六個平衡方程與三維支承',
      kind: 'diagram',
      title: '三維支承的反力數',
      caption: '支承限制幾個自由度，就提供幾個反力（力或力矩）。',
      svg: (() => {
        let s = '';
        const P1 = oblique(95, 150, 30, 0.6);
        // 球窩
        s += circle(95, 150, 14, { fill: 'muted', soft: true, w: 1.8 }) + path('M75,150 A20,20 0 0 0 115,150', { w: 2.4 });
        s += arrow(...P1(0, 0, 0), ...P1(0, 0, 2.6), { tone: 'green', w: 2.2, label: 'R_z', labelOffset: [6, 4] });
        s += arrow(...P1(0, 0, 0), ...P1(0, 2.4, 0), { tone: 'green', w: 2.2, label: 'R_y', labelOffset: [-6, 18] });
        s += arrow(...P1(0, 0, 0), ...P1(2.6, 0, 0), { tone: 'green', w: 2.2, label: 'R_x', labelOffset: [-18, 14] });
        s += text(95, 30, '球窩關節', { anchor: 'middle', weight: 'bold', size: 13.5 }) + text(95, 236, '3 個力', { anchor: 'middle', tone: 'blue', weight: 'bold' });
        // 光滑面
        s += circle(280, 150, 16, { fill: 'muted', soft: true, w: 1.8 }) + ground(230, 330, 166);
        s += arrow(280, 166, 280, 92, { tone: 'green', w: 2.2, label: 'N', labelOffset: [6, 6] });
        s += text(280, 30, '光滑面／球底', { anchor: 'middle', weight: 'bold', size: 13.5 }) + text(280, 236, '1 個力（法向）', { anchor: 'middle', tone: 'blue', weight: 'bold' });
        // 固定
        const P3 = oblique(460, 150, 26, 0.6);
        s += rect(440, 160, 40, 14, { fill: 'muted', soft: true }) + hatchRect(430, 174, 60, 8, { spacing: 6 });
        s += arrow(...P3(0, 0, 0), ...P3(0, 0, 2.8), { tone: 'green', w: 2 }) + arrow(...P3(0, 0, 0), ...P3(0, 2.6, 0), { tone: 'green', w: 2 }) + arrow(...P3(0, 0, 0), ...P3(2.8, 0, 0), { tone: 'green', w: 2 });
        s += moment(460, 150, 40, 'ccw', { tone: 'red', from: 40, span: 100 });
        s += moment(460, 150, 52, 'ccw', { tone: 'red', from: 160, span: 70 });
        s += moment(460, 150, 46, 'ccw', { tone: 'red', from: -60, span: 70 });
        s += text(460, 30, '固定支承', { anchor: 'middle', weight: 'bold', size: 13.5 }) + text(460, 236, '3 力 + 3 力矩 = 6', { anchor: 'middle', tone: 'blue', weight: 'bold' });
        return svg(560, 250, s);
      })(),
      takeaways: [
        '空間剛體有 6 個自由度（3 平移 + 3 轉動），故有 6 條平衡方程。',
        '空間平行力系（全部平行 z 軸）只剩 ΣFz、ΣMx、ΣMy 三條，ΣMz ≡ 0 自動滿足。',
      ],
    },
  ],

  'plane-stress': [
    {
      concept: '平面應力與斜面應力轉換公式',
      kind: 'diagram',
      title: '應力元素旋轉 θ：同一點、不同切面看到不同應力',
      caption: '左：原座標 x-y 的應力；右：逆時針轉 θ 後 x′ 面上的 σθ 與 τθ。',
      svg: (() => {
        let s = '';
        // 原元素
        const c: Pt = [140, 140], a = 70;
        s += rect(c[0] - a / 2, c[1] - a / 2, a, a, { fill: 'blue', soft: true, tone: 'blue', w: 1.8 });
        s += arrow(c[0] + a / 2 + 2, c[1], c[0] + a / 2 + 46, c[1], { tone: 'red', w: 2.4, label: 'σ_x', labelOffset: [4, 4] });
        s += arrow(c[0] - a / 2 - 2, c[1], c[0] - a / 2 - 46, c[1], { tone: 'red', w: 2.4 });
        s += arrow(c[0], c[1] - a / 2 - 2, c[0], c[1] - a / 2 - 44, { tone: 'green', w: 2.4, label: 'σ_y', labelOffset: [6, 6] });
        s += arrow(c[0], c[1] + a / 2 + 2, c[0], c[1] + a / 2 + 44, { tone: 'green', w: 2.4 });
        s += arrow(c[0] + a / 2 + 8, c[1] + 26, c[0] + a / 2 + 8, c[1] - 26, { tone: 'violet', w: 2 });
        s += arrow(c[0] - a / 2 - 8, c[1] - 26, c[0] - a / 2 - 8, c[1] + 26, { tone: 'violet', w: 2 });
        s += arrow(c[0] - 26, c[1] - a / 2 - 8, c[0] + 26, c[1] - a / 2 - 8, { tone: 'violet', w: 2 });
        s += arrow(c[0] + 26, c[1] + a / 2 + 8, c[0] - 26, c[1] + a / 2 + 8, { tone: 'violet', w: 2 });
        s += text(c[0] + a / 2 + 14, c[1] - 30, 'τ_xy', { tone: 'violet', weight: 'bold' });
        s += text(140, 24, '原元素', { anchor: 'middle', weight: 'bold' });
        // 旋轉元素
        const c2: Pt = [400, 140], th = 30;
        const corner = (dx: number, dy: number): Pt => {
          const t = (th * Math.PI) / 180;
          return [c2[0] + dx * Math.cos(t) + dy * Math.sin(t), c2[1] - dx * Math.sin(t) + dy * Math.cos(t)];
        };
        s += polygon([corner(-a / 2, -a / 2), corner(a / 2, -a / 2), corner(a / 2, a / 2), corner(-a / 2, a / 2)], { fill: 'amber', soft: true, tone: 'amber', w: 1.8 });
        const face = polar(c2[0], c2[1], a / 2 + 2, th);
        s += arrowAt(face[0], face[1], 46, th, { tone: 'red', w: 2.4 });
        const ft = polar(c2[0], c2[1], a / 2 + 52, th);
        s += text(ft[0] + 4, ft[1], 'σ_θ', { tone: 'red', weight: 'bold' });
        const sh = polar(c2[0], c2[1], a / 2 + 8, th);
        s += arrowAt(...polar(sh[0], sh[1], 24, th - 90), 48, th + 90, { tone: 'violet', w: 2 });
        s += text(sh[0] - 30, sh[1] - 30, 'τ_θ', { tone: 'violet', weight: 'bold' });
        s += line(c2[0], c2[1], c2[0] + 90, c2[1], { tone: 'muted', w: 1, dash: 'dash' });
        s += line(c2[0], c2[1], ...polar(c2[0], c2[1], 90, th), { tone: 'muted', w: 1, dash: 'dash' });
        s += angle(c2[0], c2[1], 54, 0, th, 'θ', { labelR: 66 });
        s += text(...polar(c2[0], c2[1], 100, th), "x′", { tone: 'muted', italic: true });
        s += text(400, 24, '旋轉 θ 後', { anchor: 'middle', weight: 'bold' });
        return svg(560, 260, s);
      })(),
      takeaways: [
        '$\\sigma_\\theta = \\frac{\\sigma_x + \\sigma_y}{2} + \\frac{\\sigma_x - \\sigma_y}{2}\\cos 2\\theta + \\tau_{xy}\\sin 2\\theta$：公式裡全是 **2θ**。',
        '互相垂直的兩個面：$\\sigma_\\theta + \\sigma_{\\theta+90°} = \\sigma_x + \\sigma_y$（不變量）。',
      ],
    },
    {
      concept: '主平面、主應力與最大剪應力',
      kind: 'chart',
      title: 'σθ 與 τθ 隨切面角 θ 的變化（σx = 60、σy = −20、τxy = 30 MPa）',
      caption: 'τθ = 0 的角度就是主平面，σθ 在該處達到極值；兩者相差 45°。',
      svg: (() => {
        const sx = 60, sy = -20, t = 30;
        const sig = (d: number) => (sx + sy) / 2 + ((sx - sy) / 2) * Math.cos((2 * d * Math.PI) / 180) + t * Math.sin((2 * d * Math.PI) / 180);
        const tau = (d: number) => -((sx - sy) / 2) * Math.sin((2 * d * Math.PI) / 180) + t * Math.cos((2 * d * Math.PI) / 180);
        const pts = (fn: (d: number) => number) => Array.from({ length: 91 }, (_, i) => [i * 2, fn(i * 2)] as Pt);
        const thp = (Math.atan2(2 * t, sx - sy) * 180) / Math.PI / 2;
        return lineChart({
          w: 540,
          h: 300,
          x: { min: 0, max: 180, ticks: [0, 45, 90, 135, 180], label: 'θ (度)' },
          y: { min: -60, max: 80, ticks: [-60, -30, 0, 30, 60], label: '應力 (MPa)' },
          series: [
            { name: 'σθ 正應力', tone: 'blue', points: pts(sig) },
            { name: 'τθ 剪應力', tone: 'red', points: pts(tau), dash: 'dash' },
          ],
          overlay: (f) =>
            line(f.box.left, f.Y(0), f.box.left + f.box.width, f.Y(0), { tone: 'muted', w: 1.2 }) +
            point(f, thp, sig(thp), `σ₁ = 70（θp ≈ ${fmt(thp, 1)}°）`, { tone: 'blue', dx: 8, dy: -6 }) +
            point(f, thp + 90, sig(thp + 90), 'σ₂ = −30', { tone: 'blue', dx: 8, dy: 16 }) +
            point(f, thp, 0, '', { tone: 'red' }) +
            line(f.X(thp), f.Y(sig(thp)), f.X(thp), f.Y(0), { tone: 'muted', w: 1, dash: 'dot' }),
        });
      })(),
      table: { headers: ['θ', 'σθ (MPa)', 'τθ (MPa)'], rows: [['0°', '60.0', '30.0'], ['18.4°（主平面）', '70.0', '0'], ['63.4°', '20.0', '−50.0（最大剪應力）'], ['108.4°（主平面）', '−30.0', '0']] },
      takeaways: [
        '剪應力為零的角度 ⇔ 正應力取極值：$\\tan 2\\theta_p = 2\\tau_{xy}/(\\sigma_x - \\sigma_y) = 0.75$，$\\theta_p \\approx 18.4°$。',
        '最大剪應力面與主平面差 45°，該面上的正應力 = 平均應力 20 MPa。',
      ],
    },
    {
      concept: '莫耳圓 (Mohr',
      kind: 'diagram',
      title: '莫耳圓作圖：σx = 60、σy = −20、τxy = 30 MPa',
      caption: '採 τ 向下為正：X 點畫在 (σx, τxy)、Y 點畫在 (σy, −τxy)，圓上轉向與元素實際轉向一致。',
      svg: mohr(60, -20, 30, { scale: 2.3, ticks: [-30, 0, 20, 70] }).svg,
      takeaways: [
        '圓心 $C = (\\sigma_x + \\sigma_y)/2 = 20$ MPa，半徑 $R = \\sqrt{40^2 + 30^2} = 50$ MPa（3-4-5 三角形）。',
        '$\\sigma_1 = 70$、$\\sigma_2 = -30$ MPa；由 X 點轉 $2\\theta_p = 36.87°$ 到 σ₁，元素實際轉 $\\theta_p = 18.43°$。',
        '若 σ₁、σ₂ 同號，絕對最大剪應力要把面外主應力 σ₃ = 0 一起考慮：$\\tau_{abs} = \\sigma_{max}/2$。',
      ],
    },
  ],
};
