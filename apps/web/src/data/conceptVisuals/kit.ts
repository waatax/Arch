/**
 * 概念圖解 SVG 工具箱 (Concept Visual Kit)
 *
 * 所有教學圖解都在 build 時由這些函式組成 SVG 字串，再交給 <ConceptFigure> 內嵌。
 * 顏色一律使用 `cv-*` 類別，由 globals.css 對應到主題色票，因此淺色／深色／護眼／OLED
 * 與列印模式都會自動換色；請勿在圖中寫死 #hex 或 rgb() 色碼（validate-concept-visuals 會擋）。
 *
 * 座標慣例：SVG 原生座標（x 向右、y 向下）。角度參數一律採數學慣例（度、逆時針為正、0° 指向 +x）。
 */

export type Tone = 'ink' | 'muted' | 'grid' | 'blue' | 'red' | 'green' | 'amber' | 'violet' | 'paper';
export type Pt = [number, number];

export interface StrokeOpts {
  tone?: Tone;
  w?: number;
  dash?: 'dash' | 'dot' | 'center' | 'hidden';
  fill?: Tone | 'none';
  /** 使用淡色填滿（色票 16% 透明度） */
  soft?: boolean;
  opacity?: number;
  cap?: 'round' | 'butt' | 'square';
}

export interface TextOpts {
  tone?: Tone;
  size?: number;
  anchor?: 'start' | 'middle' | 'end';
  weight?: 'normal' | 'bold';
  italic?: boolean;
  /** 文字外框（紙色描邊），讓標籤壓在線條上仍清楚；預設開啟 */
  halo?: boolean;
  mono?: boolean;
  /** 旋轉角度（度，SVG 方向：正值順時針） */
  rotate?: number;
  baseline?: 'auto' | 'middle' | 'hanging';
}

const DEG = Math.PI / 180;

export const r2 = (n: number) => Math.round(n * 100) / 100;
export const fmt = (n: number, digits = 2) => {
  const v = Number(n.toFixed(digits));
  return Object.is(v, -0) ? '0' : String(v);
};

export function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/** 數學角度 → SVG 平面上的點 */
export function polar(cx: number, cy: number, r: number, deg: number): Pt {
  return [r2(cx + r * Math.cos(deg * DEG)), r2(cy - r * Math.sin(deg * DEG))];
}

function strokeAttrs(o: StrokeOpts = {}, defaultFill: Tone | 'none' = 'none'): string {
  const tone = o.tone ?? 'ink';
  const fill = o.fill ?? defaultFill;
  const cls = [`cv-s-${tone}`];
  if (fill !== 'none') cls.push(o.soft ? `cv-t-${fill}` : `cv-f-${fill}`);
  else cls.push('cv-nofill');
  if (o.dash) cls.push(`cv-${o.dash}`);
  let a = ` class="${cls.join(' ')}" stroke-width="${o.w ?? 1.6}"`;
  if (o.cap) a += ` stroke-linecap="${o.cap}"`;
  if (o.opacity !== undefined) a += ` opacity="${o.opacity}"`;
  return a;
}

function fillAttrs(tone: Tone, soft = false, opacity?: number): string {
  return ` class="${soft ? `cv-t-${tone}` : `cv-f-${tone}`} cv-nostroke"${opacity !== undefined ? ` opacity="${opacity}"` : ''}`;
}

// ───────────────────────── 基本圖元 ─────────────────────────

export function line(x1: number, y1: number, x2: number, y2: number, o: StrokeOpts = {}): string {
  return `<line x1="${r2(x1)}" y1="${r2(y1)}" x2="${r2(x2)}" y2="${r2(y2)}"${strokeAttrs({ cap: 'round', ...o })}/>`;
}

export function polyline(pts: Pt[], o: StrokeOpts = {}): string {
  return `<polyline points="${pts.map(([x, y]) => `${r2(x)},${r2(y)}`).join(' ')}"${strokeAttrs(o)} stroke-linejoin="round"/>`;
}

export function polygon(pts: Pt[], o: StrokeOpts = {}): string {
  return `<polygon points="${pts.map(([x, y]) => `${r2(x)},${r2(y)}`).join(' ')}"${strokeAttrs(o)} stroke-linejoin="round"/>`;
}

export function rect(x: number, y: number, w: number, h: number, o: StrokeOpts & { rx?: number } = {}): string {
  return `<rect x="${r2(x)}" y="${r2(y)}" width="${r2(w)}" height="${r2(h)}"${o.rx ? ` rx="${o.rx}"` : ''}${strokeAttrs(o)}/>`;
}

export function circle(cx: number, cy: number, r: number, o: StrokeOpts = {}): string {
  return `<circle cx="${r2(cx)}" cy="${r2(cy)}" r="${r2(r)}"${strokeAttrs(o)}/>`;
}

export function ellipse(cx: number, cy: number, rx: number, ry: number, o: StrokeOpts = {}): string {
  return `<ellipse cx="${r2(cx)}" cy="${r2(cy)}" rx="${r2(rx)}" ry="${r2(ry)}"${strokeAttrs(o)}/>`;
}

export function path(d: string, o: StrokeOpts = {}): string {
  return `<path d="${d}"${strokeAttrs(o)} stroke-linejoin="round"/>`;
}

export function dot(x: number, y: number, r = 3.2, tone: Tone = 'ink'): string {
  return `<circle cx="${r2(x)}" cy="${r2(y)}" r="${r}"${fillAttrs(tone)}/>`;
}

/** 空心節點（鉸接點） */
export function node(x: number, y: number, r = 4, tone: Tone = 'ink'): string {
  return `<circle cx="${r2(x)}" cy="${r2(y)}" r="${r}" class="cv-s-${tone} cv-f-paper" stroke-width="1.6"/>`;
}

/** 純色填滿區塊（無邊框） */
export function area(pts: Pt[], tone: Tone = 'blue', soft = true, opacity?: number): string {
  return `<polygon points="${pts.map(([x, y]) => `${r2(x)},${r2(y)}`).join(' ')}"${fillAttrs(tone, soft, opacity)}/>`;
}

export function group(children: string[], transform?: string): string {
  return `<g${transform ? ` transform="${transform}"` : ''}>${children.join('')}</g>`;
}

// ───────────────────────── 文字 ─────────────────────────

/**
 * 支援簡易上下標：`F_x`、`σ_{max}`、`x^2`、`10^{-5}`。
 * 底線後接單一英數字或 {…} 群組才視為下標，其餘字元照原樣輸出。
 */
function richText(s: string, size: number): string {
  if (!/[_^]/.test(s)) return esc(s);
  const segs: { t: string; level: 0 | 1 | -1 }[] = [];
  let i = 0;
  let buf = '';
  const flush = () => {
    if (buf) segs.push({ t: buf, level: 0 });
    buf = '';
  };
  while (i < s.length) {
    const ch = s[i];
    if ((ch === '_' || ch === '^') && i + 1 < s.length) {
      let content = '';
      let j = i + 1;
      if (s[j] === '{') {
        const close = s.indexOf('}', j);
        if (close > j) {
          content = s.slice(j + 1, close);
          j = close + 1;
        }
      } else if (/[A-Za-z0-9α-ωΑ-Ω'′+\-]/.test(s[j])) {
        // 連續英數字整段下標（例如 R_Ax、σ_max）
        let k = j;
        while (k < s.length && /[A-Za-z0-9α-ω]/.test(s[k])) k++;
        if (k === j) k = j + 1;
        content = s.slice(j, k);
        j = k;
      }
      if (content) {
        flush();
        segs.push({ t: content, level: ch === '_' ? -1 : 1 });
        i = j;
        continue;
      }
    }
    buf += ch;
    i++;
  }
  flush();
  const small = r2(size * 0.72);
  const offset = (level: number) => (level === -1 ? size * 0.3 : level === 1 ? -size * 0.42 : 0);
  let cur = 0;
  return segs
    .map((seg) => {
      const target = offset(seg.level);
      const dy = r2(target - cur);
      cur = target;
      const attrs = `${dy ? ` dy="${dy}"` : ''}${seg.level ? ` font-size="${small}"` : ''}`;
      return attrs ? `<tspan${attrs}>${esc(seg.t)}</tspan>` : esc(seg.t);
    })
    .join('');
}

export function text(x: number, y: number, s: string, o: TextOpts = {}): string {
  const size = o.size ?? 13;
  const cls = [`cv-f-${o.tone ?? 'ink'}`, 'cv-text'];
  if (o.halo !== false) cls.push('cv-halo');
  if (o.mono) cls.push('cv-mono');
  let a = ` x="${r2(x)}" y="${r2(y)}" font-size="${size}" class="${cls.join(' ')}"`;
  if (o.anchor && o.anchor !== 'start') a += ` text-anchor="${o.anchor}"`;
  if (o.weight === 'bold') a += ` font-weight="700"`;
  if (o.italic) a += ` font-style="italic"`;
  if (o.baseline === 'middle') a += ` dominant-baseline="central"`;
  if (o.baseline === 'hanging') a += ` dominant-baseline="hanging"`;
  if (o.rotate) a += ` transform="rotate(${o.rotate} ${r2(x)} ${r2(y)})"`;
  return `<text${a}>${richText(s, size)}</text>`;
}

/** 多行文字（行距 1.35 em） */
export function lines(x: number, y: number, rows: string[], o: TextOpts & { lh?: number } = {}): string {
  const size = o.size ?? 13;
  const lh = o.lh ?? size * 1.35;
  return rows.map((row, i) => text(x, y + i * lh, row, o)).join('');
}

/** 圓角標籤框（流程圖、概念圖用） */
export function box(
  x: number,
  y: number,
  w: number,
  h: number,
  rows: string | string[],
  o: { tone?: Tone; size?: number; weight?: 'normal' | 'bold'; solid?: boolean; dash?: StrokeOpts['dash']; rx?: number; textTone?: Tone } = {},
): string {
  const tone = o.tone ?? 'blue';
  const size = o.size ?? 13;
  const list = Array.isArray(rows) ? rows : [rows];
  const lh = size * 1.32;
  const top = y + h / 2 - ((list.length - 1) * lh) / 2;
  return (
    rect(x, y, w, h, { tone, fill: tone, soft: !o.solid, rx: o.rx ?? 8, w: 1.5, dash: o.dash }) +
    list
      .map((row, i) =>
        text(x + w / 2, top + i * lh, row, {
          anchor: 'middle',
          baseline: 'middle',
          size,
          weight: i === 0 ? (o.weight ?? 'bold') : 'normal',
          tone: o.textTone ?? (o.solid ? 'paper' : 'ink'),
          halo: false,
        }),
      )
      .join('')
  );
}

/** 小型膠囊標籤 */
export function pill(cx: number, cy: number, s: string, tone: Tone = 'blue', size = 12): string {
  const w = textWidth(s, size) + 14;
  return rect(cx - w / 2, cy - size * 0.85, w, size * 1.7, { tone, fill: tone, soft: true, rx: size * 0.85, w: 1.2 }) +
    text(cx, cy, s, { anchor: 'middle', baseline: 'middle', size, tone: 'ink', halo: false, weight: 'bold' });
}

/** 估算文字寬度（CJK ≈ 1em、拉丁 ≈ 0.58em），供版面與驗證用 */
export function textWidth(s: string, size = 13): number {
  const plain = s.replace(/[_^]\{([^}]*)\}/g, '$1').replace(/[_^]/g, '');
  let w = 0;
  for (const ch of plain) {
    if (/[⺀-鿿豈-﫿＀-￯　-〿]/.test(ch)) w += 1;
    else if (/[ilI.,:;'|!]/.test(ch)) w += 0.3;
    else if (/[mwMW]/.test(ch)) w += 0.85;
    else w += 0.58;
  }
  return w * size;
}

// ───────────────────────── 箭頭與標註 ─────────────────────────

export interface ArrowOpts extends StrokeOpts {
  head?: number;
  /** 兩端皆有箭頭 */
  both?: boolean;
  label?: string;
  labelPos?: 'start' | 'mid' | 'end';
  labelOffset?: [number, number];
  labelSize?: number;
}

function head(tipX: number, tipY: number, ux: number, uy: number, size: number, tone: Tone): string {
  const w = size * 0.42;
  const bx = tipX - ux * size;
  const by = tipY - uy * size;
  const nx = -uy;
  const ny = ux;
  return `<polygon points="${r2(tipX)},${r2(tipY)} ${r2(bx + nx * w)},${r2(by + ny * w)} ${r2(bx - nx * w)},${r2(by - ny * w)}"${fillAttrs(tone)}/>`;
}

export function arrow(x1: number, y1: number, x2: number, y2: number, o: ArrowOpts = {}): string {
  const tone = o.tone ?? 'ink';
  const size = o.head ?? 9;
  const len = Math.hypot(x2 - x1, y2 - y1) || 1;
  const ux = (x2 - x1) / len;
  const uy = (y2 - y1) / len;
  const ex = x2 - ux * size * 0.8;
  const ey = y2 - uy * size * 0.8;
  const sx = o.both ? x1 + ux * size * 0.8 : x1;
  const sy = o.both ? y1 + uy * size * 0.8 : y1;
  let s = line(sx, sy, ex, ey, { ...o, tone, w: o.w ?? 2, cap: 'butt' }) + head(x2, y2, ux, uy, size, tone);
  if (o.both) s += head(x1, y1, -ux, -uy, size, tone);
  if (o.label) {
    const pos = o.labelPos ?? 'end';
    const [lx, ly] = pos === 'start' ? [x1, y1] : pos === 'mid' ? [(x1 + x2) / 2, (y1 + y2) / 2] : [x2, y2];
    const [dx, dy] = o.labelOffset ?? [8, -6];
    s += text(lx + dx, ly + dy, o.label, { tone, size: o.labelSize ?? 13, weight: 'bold', anchor: dx < 0 ? 'end' : dx === 0 ? 'middle' : 'start' });
  }
  return s;
}

/** 以角度（數學慣例）畫一支從 (x,y) 出發、長度 len 的箭頭 */
export function arrowAt(x: number, y: number, len: number, deg: number, o: ArrowOpts = {}): string {
  const [x2, y2] = polar(x, y, len, deg);
  return arrow(x, y, x2, y2, o);
}

/** 指向 (x,y) 的箭頭（力作用於該點） */
export function arrowTo(x: number, y: number, len: number, deg: number, o: ArrowOpts = {}): string {
  const [x1, y1] = polar(x, y, len, deg + 180);
  return arrow(x1, y1, x, y, o);
}

/** 圓弧路徑（數學角度，自 a0 逆時針到 a1） */
export function arcPath(cx: number, cy: number, r: number, a0: number, a1: number): string {
  const [x0, y0] = polar(cx, cy, r, a0);
  const [x1, y1] = polar(cx, cy, r, a1);
  const large = Math.abs(a1 - a0) > 180 ? 1 : 0;
  const sweep = a1 > a0 ? 0 : 1;
  return `M${x0},${y0} A${r2(r)},${r2(r)} 0 ${large} ${sweep} ${x1},${y1}`;
}

/** 角度標註弧 */
export function angle(cx: number, cy: number, r: number, a0: number, a1: number, label?: string, o: { tone?: Tone; size?: number; labelR?: number } = {}): string {
  const tone = o.tone ?? 'amber';
  let s = path(arcPath(cx, cy, r, a0, a1), { tone, w: 1.4 });
  if (label) {
    const [lx, ly] = polar(cx, cy, o.labelR ?? r + 12, (a0 + a1) / 2);
    s += text(lx, ly, label, { tone, size: o.size ?? 12, anchor: 'middle', baseline: 'middle', weight: 'bold' });
  }
  return s;
}

/** 直角記號 */
export function rightAngle(x: number, y: number, deg1: number, deg2: number, s = 9, tone: Tone = 'muted'): string {
  const a = polar(x, y, s, deg1);
  const b = polar(x, y, s, deg2);
  const c: Pt = [a[0] + b[0] - x, a[1] + b[1] - y];
  return polyline([a, c, b], { tone, w: 1.2 });
}

/** 力矩／旋轉箭頭（ccw = 逆時針） */
export function moment(cx: number, cy: number, r: number, dir: 'ccw' | 'cw', o: { tone?: Tone; label?: string; from?: number; span?: number; labelDeg?: number } = {}): string {
  const tone = o.tone ?? 'red';
  const from = o.from ?? -60;
  const span = o.span ?? 270;
  const a0 = from;
  const a1 = from + span;
  const d = arcPath(cx, cy, r, a0, a1);
  // 箭頭位置與方向
  const endDeg = dir === 'ccw' ? a1 : a0;
  const [ex, ey] = polar(cx, cy, r, endDeg);
  const tangentDeg = dir === 'ccw' ? endDeg + 90 : endDeg - 90;
  const ux = Math.cos(tangentDeg * DEG);
  const uy = -Math.sin(tangentDeg * DEG);
  let s = path(d, { tone, w: 1.8 }) + head(ex + ux * 4, ey + uy * 4, ux, uy, 9, tone);
  if (o.label) {
    const [lx, ly] = polar(cx, cy, r + 14, o.labelDeg ?? from + span / 2);
    s += text(lx, ly, o.label, { tone, size: 13, weight: 'bold', anchor: 'middle', baseline: 'middle' });
  }
  return s;
}

/** 尺寸線：兩端短邊界線 + 雙向箭頭 + 置中標註 */
export function dim(x1: number, y1: number, x2: number, y2: number, label: string, o: { offset?: number; tone?: Tone; size?: number; ext?: boolean; textOffset?: number } = {}): string {
  const tone = o.tone ?? 'muted';
  const off = o.offset ?? 0;
  const len = Math.hypot(x2 - x1, y2 - y1) || 1;
  const nx = -(y2 - y1) / len;
  const ny = (x2 - x1) / len;
  const ax = x1 + nx * off;
  const ay = y1 + ny * off;
  const bx = x2 + nx * off;
  const by = y2 + ny * off;
  let s = '';
  if (o.ext !== false && off !== 0) {
    s += line(x1 + nx * Math.sign(off) * 3, y1 + ny * Math.sign(off) * 3, ax + nx * Math.sign(off) * 5, ay + ny * Math.sign(off) * 5, { tone, w: 0.9 });
    s += line(x2 + nx * Math.sign(off) * 3, y2 + ny * Math.sign(off) * 3, bx + nx * Math.sign(off) * 5, by + ny * Math.sign(off) * 5, { tone, w: 0.9 });
  }
  s += arrow(ax, ay, bx, by, { tone, w: 1, head: 7, both: true });
  const mx = (ax + bx) / 2;
  const my = (ay + by) / 2;
  const deg = (Math.atan2(by - ay, bx - ax) * 180) / Math.PI;
  const upright = deg > 90 || deg < -90 ? deg + 180 : deg;
  const to = o.textOffset ?? -6;
  const tx = mx + Math.sin((upright * Math.PI) / 180) * -to;
  const ty = my + Math.cos((upright * Math.PI) / 180) * to;
  s += text(tx, ty, label, { tone: 'ink', size: o.size ?? 12, anchor: 'middle', rotate: Math.abs(upright) < 1 ? undefined : r2(upright) });
  return s;
}

// ───────────────────────── 剖面線與結構符號 ─────────────────────────

/** 以平行斜線填滿任意多邊形（掃描線求交點，免用 pattern/clipPath，避免 id 衝突） */
export function hatch(pts: Pt[], o: { spacing?: number; deg?: number; tone?: Tone; w?: number } = {}): string {
  const spacing = o.spacing ?? 7;
  const deg = o.deg ?? 45;
  const t = deg * DEG;
  // 旋轉座標使斜線變成水平線
  const rot = ([x, y]: Pt): Pt => [x * Math.cos(t) - y * Math.sin(t), x * Math.sin(t) + y * Math.cos(t)];
  const inv = ([x, y]: Pt): Pt => [x * Math.cos(-t) - y * Math.sin(-t), x * Math.sin(-t) + y * Math.cos(-t)];
  const rp = pts.map(rot);
  const ys = rp.map((p) => p[1]);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const segs: string[] = [];
  for (let y = Math.ceil(minY / spacing) * spacing; y <= maxY; y += spacing) {
    const xs: number[] = [];
    for (let i = 0; i < rp.length; i++) {
      const [ax, ay] = rp[i];
      const [bx, by] = rp[(i + 1) % rp.length];
      if ((ay <= y && by > y) || (by <= y && ay > y)) xs.push(ax + ((y - ay) / (by - ay)) * (bx - ax));
    }
    xs.sort((a, b) => a - b);
    for (let k = 0; k + 1 < xs.length; k += 2) {
      const a = inv([xs[k], y]);
      const b = inv([xs[k + 1], y]);
      segs.push(`M${r2(a[0])},${r2(a[1])}L${r2(b[0])},${r2(b[1])}`);
    }
  }
  if (!segs.length) return '';
  return `<path d="${segs.join('')}" class="cv-s-${o.tone ?? 'muted'} cv-nofill" stroke-width="${o.w ?? 0.9}"/>`;
}

export function hatchRect(x: number, y: number, w: number, h: number, o: { spacing?: number; deg?: number; tone?: Tone } = {}): string {
  return hatch([[x, y], [x + w, y], [x + w, y + h], [x, y + h]], o);
}

/** 地面（粗線 + 下方短斜線） */
export function ground(x1: number, x2: number, y: number, o: { tone?: Tone; depth?: number } = {}): string {
  const tone = o.tone ?? 'muted';
  const depth = o.depth ?? 8;
  let s = line(x1, y, x2, y, { tone, w: 1.6 });
  for (let x = x1 + 4; x <= x2; x += 8) s += line(x, y, x - depth * 0.8, y + depth, { tone, w: 1 });
  return s;
}

/** 牆面（垂直粗線 + 斜線），side 表示斜線所在側 */
export function wall(x: number, y1: number, y2: number, side: 'left' | 'right' = 'left', o: { tone?: Tone } = {}): string {
  const tone = o.tone ?? 'muted';
  const k = side === 'left' ? -1 : 1;
  let s = line(x, y1, x, y2, { tone, w: 1.6 });
  for (let y = y1 + 4; y <= y2; y += 8) s += line(x, y, x + k * 7, y - 6, { tone, w: 1 });
  return s;
}

/** 鉸支承（三角形 + 地面），(x,y) 為鉸接點 */
export function pin(x: number, y: number, s = 14, tone: Tone = 'ink'): string {
  return (
    polygon([[x, y], [x - s * 0.75, y + s], [x + s * 0.75, y + s]], { tone, fill: 'paper', w: 1.6 }) +
    node(x, y, 3.2, tone) +
    ground(x - s * 1.2, x + s * 1.2, y + s)
  );
}

/** 滾支承（三角形 + 兩滾輪 + 地面） */
export function roller(x: number, y: number, s = 14, tone: Tone = 'ink'): string {
  const r = s * 0.2;
  return (
    polygon([[x, y], [x - s * 0.75, y + s * 0.8], [x + s * 0.75, y + s * 0.8]], { tone, fill: 'paper', w: 1.6 }) +
    node(x, y, 3.2, tone) +
    circle(x - s * 0.4, y + s * 0.8 + r, r, { tone, fill: 'paper', w: 1.3 }) +
    circle(x + s * 0.4, y + s * 0.8 + r, r, { tone, fill: 'paper', w: 1.3 }) +
    ground(x - s * 1.2, x + s * 1.2, y + s * 0.8 + 2 * r)
  );
}

/** 固定端（牆面），side = 牆在梁的哪一側 */
export function fixed(x: number, y: number, side: 'left' | 'right' = 'left', h = 44): string {
  return wall(x, y - h / 2, y + h / 2, side);
}

/** 分布載重：自 (x1, y) 到 (x2, y) 的載重箭頭，h1/h2 為兩端箭頭長度（三角形／梯形載重） */
export function distLoad(x1: number, x2: number, y: number, h1: number, h2: number, o: { n?: number; tone?: Tone; label?: string; labelSide?: 'left' | 'right' | 'center' } = {}): string {
  const tone = o.tone ?? 'blue';
  const n = o.n ?? Math.max(4, Math.round((x2 - x1) / 28));
  let s = '';
  for (let i = 0; i <= n; i++) {
    const x = x1 + ((x2 - x1) * i) / n;
    const h = h1 + ((h2 - h1) * i) / n;
    if (h > 4) s += arrow(x, y - h, x, y, { tone, w: 1.3, head: 6 });
  }
  s += line(x1, y - h1, x2, y - h2, { tone, w: 1.6 });
  if (o.label) {
    const side = o.labelSide ?? 'center';
    const lx = side === 'left' ? x1 : side === 'right' ? x2 : (x1 + x2) / 2;
    const ly = (side === 'left' ? y - h1 : side === 'right' ? y - h2 : y - Math.max(h1, h2)) - 8;
    s += text(lx, ly, o.label, { tone, size: 13, weight: 'bold', anchor: side === 'left' ? 'start' : side === 'right' ? 'end' : 'middle' });
  }
  return s;
}

/** 彈簧（鋸齒） */
export function spring(x1: number, y1: number, x2: number, y2: number, o: { coils?: number; amp?: number; tone?: Tone } = {}): string {
  const coils = o.coils ?? 6;
  const amp = o.amp ?? 6;
  const len = Math.hypot(x2 - x1, y2 - y1);
  const ux = (x2 - x1) / len;
  const uy = (y2 - y1) / len;
  const pts: Pt[] = [[x1, y1], [x1 + ux * len * 0.12, y1 + uy * len * 0.12]];
  const segs = coils * 2;
  for (let i = 1; i < segs; i++) {
    const t = 0.12 + (0.76 * i) / segs;
    const sgn = i % 2 ? 1 : -1;
    pts.push([x1 + ux * len * t - uy * amp * sgn, y1 + uy * len * t + ux * amp * sgn]);
  }
  pts.push([x1 + ux * len * 0.88, y1 + uy * len * 0.88], [x2, y2]);
  return polyline(pts, { tone: o.tone ?? 'ink', w: 1.5 });
}

// ───────────────────────── 坐標平面與函數圖形 ─────────────────────────

export interface Frame {
  X: (x: number) => number;
  Y: (y: number) => number;
  P: (x: number, y: number) => Pt;
  box: { left: number; top: number; width: number; height: number };
  xr: [number, number];
  yr: [number, number];
}

export function frame(xr: [number, number], yr: [number, number], box: { left: number; top: number; width: number; height: number }): Frame {
  const X = (x: number) => r2(box.left + ((x - xr[0]) / (xr[1] - xr[0])) * box.width);
  const Y = (y: number) => r2(box.top + box.height - ((y - yr[0]) / (yr[1] - yr[0])) * box.height);
  return { X, Y, P: (x, y) => [X(x), Y(y)], box, xr, yr };
}

export interface AxesOpts {
  xLabel?: string;
  yLabel?: string;
  xTicks?: number[];
  yTicks?: number[];
  xTickLabel?: (v: number) => string;
  yTickLabel?: (v: number) => string;
  grid?: boolean;
  /** 軸線穿過原點（數學風格）或固定在框邊（統計圖風格） */
  origin?: boolean;
  tone?: Tone;
  originLabel?: boolean;
}

export function axes(f: Frame, o: AxesOpts = {}): string {
  const { X, Y, box, xr, yr } = f;
  const tone = o.tone ?? 'ink';
  const origin = o.origin ?? true;
  const ax = origin && yr[0] <= 0 && yr[1] >= 0 ? Y(0) : box.top + box.height;
  const ay = origin && xr[0] <= 0 && xr[1] >= 0 ? X(0) : box.left;
  let s = '';
  if (o.grid) {
    for (const v of o.xTicks ?? []) s += line(X(v), box.top, X(v), box.top + box.height, { tone: 'grid', w: 1 });
    for (const v of o.yTicks ?? []) s += line(box.left, Y(v), box.left + box.width, Y(v), { tone: 'grid', w: 1 });
  }
  s += arrow(box.left - (origin ? 6 : 0), ax, box.left + box.width + 12, ax, { tone, w: 1.4, head: 8 });
  s += arrow(ay, box.top + box.height + (origin ? 6 : 0), ay, box.top - 12, { tone, w: 1.4, head: 8 });
  for (const v of o.xTicks ?? []) {
    if (origin && v === 0 && o.originLabel !== true) continue;
    s += line(X(v), ax - 3, X(v), ax + 3, { tone, w: 1.2 });
    s += text(X(v), ax + 16, o.xTickLabel ? o.xTickLabel(v) : fmt(v), { tone: 'muted', size: 11, anchor: 'middle' });
  }
  for (const v of o.yTicks ?? []) {
    if (origin && v === 0 && o.originLabel !== true) continue;
    s += line(ay - 3, Y(v), ay + 3, Y(v), { tone, w: 1.2 });
    s += text(ay - 7, Y(v) + 4, o.yTickLabel ? o.yTickLabel(v) : fmt(v), { tone: 'muted', size: 11, anchor: 'end' });
  }
  if (origin && xr[0] <= 0 && yr[0] <= 0) s += text(ay - 6, ax + 15, 'O', { tone: 'muted', size: 12, anchor: 'end', italic: true });
  if (o.xLabel) s += text(box.left + box.width + 14, ax - 8, o.xLabel, { tone, size: 13, anchor: 'end', italic: o.xLabel.length <= 2, weight: 'bold' });
  if (o.yLabel) s += text(ay + 8, box.top - 4, o.yLabel, { tone, size: 13, italic: o.yLabel.length <= 2, weight: 'bold' });
  return s;
}

/** 函數曲線（自動在不連續或超出範圍處斷開） */
export function curve(f: Frame, fn: (x: number) => number, o: StrokeOpts & { from?: number; to?: number; samples?: number; clip?: boolean } = {}): string {
  const from = o.from ?? f.xr[0];
  const to = o.to ?? f.xr[1];
  const n = o.samples ?? 160;
  const [ymin, ymax] = f.yr;
  const pad = (ymax - ymin) * 0.04;
  const parts: string[] = [];
  let cur: string[] = [];
  for (let i = 0; i <= n; i++) {
    const x = from + ((to - from) * i) / n;
    const y = fn(x);
    if (!Number.isFinite(y) || (o.clip !== false && (y < ymin - pad || y > ymax + pad))) {
      if (cur.length > 1) parts.push(cur.join(' '));
      cur = [];
      continue;
    }
    cur.push(`${cur.length ? 'L' : 'M'}${f.X(x)},${f.Y(y)}`);
  }
  if (cur.length > 1) parts.push(cur.join(' '));
  return path(parts.join(' '), { tone: 'blue', w: 2.2, ...o });
}

/** 參數曲線 */
export function paramCurve(f: Frame, fx: (t: number) => number, fy: (t: number) => number, t0: number, t1: number, o: StrokeOpts & { samples?: number } = {}): string {
  const n = o.samples ?? 180;
  const pts: string[] = [];
  for (let i = 0; i <= n; i++) {
    const t = t0 + ((t1 - t0) * i) / n;
    pts.push(`${i ? 'L' : 'M'}${f.X(fx(t))},${f.Y(fy(t))}`);
  }
  return path(pts.join(' '), { tone: 'blue', w: 2.2, ...o });
}

/** 曲線下面積（x 從 a 到 b，介於 fn 與 base 之間） */
export function shadeUnder(f: Frame, fn: (x: number) => number, a: number, b: number, tone: Tone = 'blue', base: (x: number) => number = () => 0, n = 80): string {
  const top: Pt[] = [];
  const bottom: Pt[] = [];
  for (let i = 0; i <= n; i++) {
    const x = a + ((b - a) * i) / n;
    top.push(f.P(x, fn(x)));
    bottom.push(f.P(x, base(x)));
  }
  return area([...top, ...bottom.reverse()], tone, true);
}

/**
 * 正負分色填滿（剪力圖、彎矩圖、應力分布用）：pts 為資料座標的折線頂點（跳躍處給兩個同 x 的點），
 * 與 y = 0 之間的區域依正負分別以 pos / neg 色填滿，並描出外框。
 */
export function signedFill(f: Frame, pts: Pt[], o: { pos?: Tone; neg?: Tone; w?: number; outline?: boolean } = {}): string {
  const pos = o.pos ?? 'blue';
  const neg = o.neg ?? 'red';
  const polys: { tone: Tone; pts: Pt[] }[] = [];
  let cur: Pt[] = [];
  let curSign = 0;
  const close = () => {
    if (cur.length > 1 && curSign !== 0) {
      polys.push({ tone: curSign > 0 ? pos : neg, pts: [[cur[0][0], 0], ...cur, [cur[cur.length - 1][0], 0]] });
    }
    cur = [];
  };
  for (let i = 0; i < pts.length; i++) {
    const [x, y] = pts[i];
    const sign = Math.sign(y);
    if (i > 0) {
      const [px, py] = pts[i - 1];
      if (Math.sign(py) * sign < 0) {
        // 線段穿越零軸：在交點切開（同 x 的跳躍則切在該 x）
        const xc = x !== px ? px + ((0 - py) / (y - py)) * (x - px) : x;
        cur.push([xc, 0]);
        close();
        cur.push([xc, 0]);
      } else if (sign !== 0 && curSign !== 0 && sign !== curSign) {
        // 前一點恰在零軸上，之後換號
        const last = cur[cur.length - 1];
        close();
        cur.push(last);
      }
    }
    if (sign !== 0) curSign = sign;
    cur.push([x, y]);
  }
  close();
  let s = polys.map((p) => area(p.pts.map(([x, y]) => f.P(x, y)), p.tone, true)).join('');
  if (o.outline !== false) s += polyline(pts.map(([x, y]) => f.P(x, y)), { tone: 'ink', w: o.w ?? 1.8 });
  return s;
}

/** 斜投影 3D：y 向右、z 向上、x 朝左下（縮短 0.6 倍） */
export function oblique(ox: number, oy: number, scale: number, xShrink = 0.6, xDeg = 225): (x: number, y: number, z: number) => Pt {
  const cx = Math.cos(xDeg * DEG) * xShrink;
  const cy = -Math.sin(xDeg * DEG) * xShrink;
  return (x, y, z) => [r2(ox + scale * (y + x * cx)), r2(oy + scale * (-z + x * cy))];
}

/** 標記座標點 */
export function point(f: Frame, x: number, y: number, label?: string, o: { tone?: Tone; dx?: number; dy?: number; anchor?: TextOpts['anchor']; guides?: boolean; size?: number } = {}): string {
  const tone = o.tone ?? 'red';
  let s = '';
  if (o.guides) {
    s += line(f.X(x), f.Y(y), f.X(x), f.Y(Math.max(f.yr[0], Math.min(0, f.yr[1]))), { tone: 'muted', w: 1, dash: 'dash' });
    s += line(f.X(x), f.Y(y), f.X(Math.max(f.xr[0], Math.min(0, f.xr[1]))), f.Y(y), { tone: 'muted', w: 1, dash: 'dash' });
  }
  s += dot(f.X(x), f.Y(y), 3.6, tone);
  if (label) s += text(f.X(x) + (o.dx ?? 7), f.Y(y) + (o.dy ?? -7), label, { tone, size: o.size ?? 12, weight: 'bold', anchor: o.anchor });
  return s;
}

// ───────────────────────── 統計圖表 ─────────────────────────

export interface Series {
  name: string;
  tone: Tone;
  points: Pt[];
  dash?: StrokeOpts['dash'];
  markers?: boolean;
  w?: number;
  /** 以平滑曲線連接（Catmull-Rom） */
  smooth?: boolean;
}

export interface LineChartOpts {
  w?: number;
  h?: number;
  x: { min: number; max: number; ticks: number[]; label?: string; fmt?: (v: number) => string; log?: boolean };
  y: { min: number; max: number; ticks: number[]; label?: string; fmt?: (v: number) => string };
  series: Series[];
  /** 額外疊加內容（拿得到 frame 以便標註） */
  overlay?: (f: Frame) => string;
  legend?: 'top' | 'none';
  pad?: { l?: number; r?: number; t?: number; b?: number };
}

function smoothPath(pts: Pt[]): string {
  if (pts.length < 3) return pts.map(([x, y], i) => `${i ? 'L' : 'M'}${r2(x)},${r2(y)}`).join(' ');
  let d = `M${r2(pts[0][0])},${r2(pts[0][1])}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] ?? pts[i];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[i + 2] ?? p2;
    const c1: Pt = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2: Pt = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C${r2(c1[0])},${r2(c1[1])} ${r2(c2[0])},${r2(c2[1])} ${r2(p2[0])},${r2(p2[1])}`;
  }
  return d;
}

export function legend(x: number, y: number, items: { name: string; tone: Tone; dash?: StrokeOpts['dash']; kind?: 'line' | 'box' }[], size = 12): string {
  let cx = x;
  let s = '';
  for (const it of items) {
    if (it.kind === 'box') s += rect(cx, y - 6, 14, 10, { tone: it.tone, fill: it.tone, soft: true, w: 1.2, rx: 2 });
    else s += line(cx, y - 1, cx + 18, y - 1, { tone: it.tone, w: 2.4, dash: it.dash });
    s += text(cx + 22, y + 3, it.name, { tone: 'ink', size, halo: false });
    cx += 22 + textWidth(it.name, size) + 18;
  }
  return s;
}

export function lineChart(o: LineChartOpts): string {
  const w = o.w ?? 520;
  const h = o.h ?? 300;
  const pad = { l: 56, r: 22, t: o.legend === 'none' ? 26 : 40, b: 44, ...o.pad };
  const f = frame([o.x.min, o.x.max], [o.y.min, o.y.max], { left: pad.l, top: pad.t, width: w - pad.l - pad.r, height: h - pad.t - pad.b });
  let s = '';
  for (const v of o.y.ticks) s += line(f.box.left, f.Y(v), f.box.left + f.box.width, f.Y(v), { tone: 'grid', w: 1 });
  s += line(f.box.left, f.box.top + f.box.height, f.box.left + f.box.width, f.box.top + f.box.height, { tone: 'muted', w: 1.4 });
  s += line(f.box.left, f.box.top, f.box.left, f.box.top + f.box.height, { tone: 'muted', w: 1.4 });
  for (const v of o.x.ticks) {
    s += line(f.X(v), f.box.top + f.box.height, f.X(v), f.box.top + f.box.height + 4, { tone: 'muted', w: 1.2 });
    s += text(f.X(v), f.box.top + f.box.height + 17, o.x.fmt ? o.x.fmt(v) : fmt(v), { tone: 'muted', size: 11, anchor: 'middle' });
  }
  for (const v of o.y.ticks) s += text(f.box.left - 7, f.Y(v) + 4, o.y.fmt ? o.y.fmt(v) : fmt(v), { tone: 'muted', size: 11, anchor: 'end' });
  if (o.x.label) s += text(f.box.left + f.box.width, f.box.top + f.box.height + 36, o.x.label, { tone: 'ink', size: 12, anchor: 'end', weight: 'bold' });
  if (o.y.label) s += text(f.box.left - 6, f.box.top - 10, o.y.label, { tone: 'ink', size: 12, anchor: 'start', weight: 'bold' });
  for (const se of o.series) {
    const pts = se.points.map(([x, y]) => f.P(x, y));
    s += se.smooth
      ? path(smoothPath(pts), { tone: se.tone, w: se.w ?? 2.4, dash: se.dash })
      : polyline(pts, { tone: se.tone, w: se.w ?? 2.4, dash: se.dash });
    if (se.markers) for (const [x, y] of pts) s += `<circle cx="${x}" cy="${y}" r="3.4" class="cv-s-${se.tone} cv-f-paper" stroke-width="1.8"/>`;
  }
  if (o.overlay) s += o.overlay(f);
  if (o.legend !== 'none' && o.series.length > 1) s += legend(pad.l, 18, o.series.map((se) => ({ name: se.name, tone: se.tone, dash: se.dash })));
  return svg(w, h, s);
}

export interface BarChartOpts {
  w?: number;
  h?: number;
  categories: string[];
  series: { name: string; tone: Tone; values: number[] }[];
  y: { min?: number; max: number; ticks: number[]; label?: string; fmt?: (v: number) => string };
  /** 在柱頂顯示數值 */
  values?: boolean;
  valueFmt?: (v: number) => string;
  /** 水平條形圖 */
  horizontal?: boolean;
  overlay?: (f: Frame) => string;
  catSize?: number;
  pad?: { l?: number; r?: number; t?: number; b?: number };
}

export function barChart(o: BarChartOpts): string {
  const w = o.w ?? 520;
  const h = o.h ?? 300;
  const multi = o.series.length > 1;
  const yMin = o.y.min ?? 0;
  const vf = o.valueFmt ?? ((v: number) => fmt(v));
  let s = '';
  if (o.horizontal) {
    const pad = { l: 120, r: 46, t: multi ? 40 : 18, b: 40, ...o.pad };
    const f = frame([yMin, o.y.max], [0, o.categories.length], { left: pad.l, top: pad.t, width: w - pad.l - pad.r, height: h - pad.t - pad.b });
    for (const v of o.y.ticks) {
      s += line(f.X(v), f.box.top, f.X(v), f.box.top + f.box.height, { tone: 'grid', w: 1 });
      s += text(f.X(v), f.box.top + f.box.height + 16, o.y.fmt ? o.y.fmt(v) : fmt(v), { tone: 'muted', size: 11, anchor: 'middle' });
    }
    const band = f.box.height / o.categories.length;
    const bw = (band * 0.66) / o.series.length;
    o.categories.forEach((c, i) => {
      const y0 = f.box.top + band * i + band * 0.17;
      s += text(f.box.left - 8, f.box.top + band * (i + 0.5) + 4, c, { tone: 'ink', size: o.catSize ?? 12, anchor: 'end' });
      o.series.forEach((se, k) => {
        const v = se.values[i];
        const x0 = f.X(Math.max(yMin, 0));
        s += rect(Math.min(x0, f.X(v)), y0 + bw * k, Math.abs(f.X(v) - x0), bw - 2, { tone: se.tone, fill: se.tone, soft: true, w: 1.4, rx: 2 });
        if (o.values) s += text(Math.max(x0, f.X(v)) + 5, y0 + bw * k + bw / 2 + 3, vf(v), { tone: 'ink', size: 11, weight: 'bold' });
      });
    });
    s += line(f.X(Math.max(yMin, 0)), f.box.top, f.X(Math.max(yMin, 0)), f.box.top + f.box.height, { tone: 'muted', w: 1.4 });
    if (o.y.label) s += text(f.box.left + f.box.width, f.box.top + f.box.height + 34, o.y.label, { tone: 'ink', size: 12, anchor: 'end', weight: 'bold' });
    if (o.overlay) s += o.overlay(f);
  } else {
    const pad = { l: 52, r: 18, t: multi ? 44 : 30, b: 46, ...o.pad };
    const f = frame([0, o.categories.length], [yMin, o.y.max], { left: pad.l, top: pad.t, width: w - pad.l - pad.r, height: h - pad.t - pad.b });
    for (const v of o.y.ticks) {
      s += line(f.box.left, f.Y(v), f.box.left + f.box.width, f.Y(v), { tone: 'grid', w: 1 });
      s += text(f.box.left - 7, f.Y(v) + 4, o.y.fmt ? o.y.fmt(v) : fmt(v), { tone: 'muted', size: 11, anchor: 'end' });
    }
    const band = f.box.width / o.categories.length;
    const bw = (band * 0.64) / o.series.length;
    o.categories.forEach((c, i) => {
      const x0 = f.box.left + band * i + band * 0.18;
      s += text(f.box.left + band * (i + 0.5), f.box.top + f.box.height + 17, c, { tone: 'ink', size: o.catSize ?? 12, anchor: 'middle' });
      o.series.forEach((se, k) => {
        const v = se.values[i];
        const base = f.Y(Math.max(yMin, 0));
        s += rect(x0 + bw * k, Math.min(base, f.Y(v)), bw - 2, Math.abs(base - f.Y(v)), { tone: se.tone, fill: se.tone, soft: true, w: 1.4, rx: 2 });
        if (o.values) s += text(x0 + bw * k + (bw - 2) / 2, Math.min(base, f.Y(v)) - 5, vf(v), { tone: 'ink', size: 11, anchor: 'middle', weight: 'bold' });
      });
    });
    s += line(f.box.left, f.Y(Math.max(yMin, 0)), f.box.left + f.box.width, f.Y(Math.max(yMin, 0)), { tone: 'muted', w: 1.4 });
    if (o.y.label) s += text(f.box.left - 6, f.box.top - 12, o.y.label, { tone: 'ink', size: 12, weight: 'bold' });
    if (o.overlay) s += o.overlay(f);
  }
  if (multi) s += legend(o.horizontal ? 120 : 52, 18, o.series.map((se) => ({ name: se.name, tone: se.tone, kind: 'box' as const })));
  return svg(w, h, s);
}

/** 圓餅／環圈圖（比例） */
export function donut(cx: number, cy: number, r: number, slices: { label: string; value: number; tone: Tone }[], o: { inner?: number; labels?: boolean; fmt?: (v: number, pct: number) => string } = {}): string {
  const total = slices.reduce((a, b) => a + b.value, 0);
  const inner = o.inner ?? r * 0.55;
  let a = 90;
  let s = '';
  for (const sl of slices) {
    const span = (sl.value / total) * 360;
    const a1 = a - span;
    const [x0, y0] = polar(cx, cy, r, a);
    const [x1, y1] = polar(cx, cy, r, a1);
    const [ix1, iy1] = polar(cx, cy, inner, a1);
    const [ix0, iy0] = polar(cx, cy, inner, a);
    const large = span > 180 ? 1 : 0;
    s += `<path d="M${x0},${y0} A${r},${r} 0 ${large} 1 ${x1},${y1} L${ix1},${iy1} A${inner},${inner} 0 ${large} 0 ${ix0},${iy0} Z" class="cv-s-paper cv-t-${sl.tone}" stroke-width="2"/>`;
    s += path(`M${x0},${y0} A${r},${r} 0 ${large} 1 ${x1},${y1}`, { tone: sl.tone, w: 3 });
    if (o.labels !== false) {
      const mid = a - span / 2;
      const [lx, ly] = polar(cx, cy, r + 16, mid);
      const pct = (sl.value / total) * 100;
      const anchor = Math.cos(mid * DEG) > 0.2 ? 'start' : Math.cos(mid * DEG) < -0.2 ? 'end' : 'middle';
      s += text(lx, ly, o.fmt ? o.fmt(sl.value, pct) : `${sl.label} ${fmt(pct, 0)}%`, { tone: 'ink', size: 12, anchor, baseline: 'middle' });
    }
    a = a1;
  }
  return s;
}

// ───────────────────────── 版面組件 ─────────────────────────

/** 由左至右的流程鏈 */
export function flow(x: number, y: number, items: (string | string[])[], o: { w?: number; h?: number; gap?: number; tones?: Tone[]; size?: number } = {}): string {
  const bw = o.w ?? 100;
  const bh = o.h ?? 48;
  const gap = o.gap ?? 26;
  let s = '';
  items.forEach((it, i) => {
    const bx = x + i * (bw + gap);
    s += box(bx, y, bw, bh, it, { tone: o.tones?.[i % (o.tones?.length ?? 1)] ?? 'blue', size: o.size ?? 12.5 });
    if (i < items.length - 1) s += arrow(bx + bw + 3, y + bh / 2, bx + bw + gap - 3, y + bh / 2, { tone: 'muted', w: 1.6, head: 7 });
  });
  return s;
}

/** 時間軸：events 以 [年份或位置, 標籤] 給定，交錯上下排列 */
export function timeline(x1: number, x2: number, y: number, range: [number, number], events: { at: number; label: string | string[]; tone?: Tone; up?: boolean }[], o: { ticks?: number[]; tickFmt?: (v: number) => string; size?: number } = {}): string {
  const X = (v: number) => x1 + ((v - range[0]) / (range[1] - range[0])) * (x2 - x1);
  let s = arrow(x1 - 6, y, x2 + 14, y, { tone: 'muted', w: 2, head: 9 });
  for (const t of o.ticks ?? []) {
    s += line(X(t), y - 4, X(t), y + 4, { tone: 'muted', w: 1.2 });
    s += text(X(t), y + 18, o.tickFmt ? o.tickFmt(t) : String(t), { tone: 'muted', size: 11, anchor: 'middle', mono: true });
  }
  events.forEach((ev, i) => {
    const up = ev.up ?? i % 2 === 0;
    const tone = ev.tone ?? 'blue';
    const ex = X(ev.at);
    const rows = Array.isArray(ev.label) ? ev.label : [ev.label];
    const stem = up ? -26 : 30;
    s += line(ex, y, ex, y + stem, { tone, w: 1.3 });
    s += dot(ex, y, 4.5, tone);
    const ty = up ? y + stem - 6 - (rows.length - 1) * 15 : y + stem + 14;
    s += lines(ex, ty, rows, { tone: 'ink', size: o.size ?? 12, anchor: 'middle', lh: 15 });
  });
  return s;
}

// ───────────────────────── 外框 ─────────────────────────

export function svg(w: number, h: number, body: string | string[], label?: string): string {
  const content = Array.isArray(body) ? body.join('') : body;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" class="cv-svg" role="img"${label ? ` aria-label="${esc(label)}"` : ''}>${content}</svg>`;
}
