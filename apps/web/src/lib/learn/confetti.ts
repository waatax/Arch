'use client';

/**
 * Arch Duolingo 風格輕量原生慶祝紙花雨（Zero-dependency Canvas Confetti）
 * 專為闖關過關、完美通關、等級提升設計，具備無障礙減動保護與自動資源釋放。
 */

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  rotation: number;
  vRot: number;
  opacity: number;
  shape: 'rect' | 'circle';
}

const COLORS = [
  '#10B981', // emerald
  '#3B82F6', // blue
  '#F59E0B', // amber
  '#EC4899', // pink
  '#8B5CF6', // purple
  '#06B6D4', // cyan
  '#FBBF24', // gold
];

export function fireConfetti(options?: { count?: number; spread?: number }) {
  if (typeof window === 'undefined') return;

  // 尊重使用者的減動設定
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const count = options?.count ?? 90;
  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.inset = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '99999';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    canvas.remove();
    return;
  }

  const dpr = window.devicePixelRatio || 1;
  const width = window.innerWidth;
  const height = window.innerHeight;
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  ctx.scale(dpr, dpr);

  const particles: Particle[] = [];
  const startX = width / 2;
  const startY = height * 0.45;

  for (let i = 0; i < count; i++) {
    const angle = (Math.random() * Math.PI) + (Math.random() < 0.5 ? -0.2 : 0.2);
    const speed = Math.random() * 12 + 6;
    particles.push({
      x: startX + (Math.random() * 60 - 30),
      y: startY + (Math.random() * 40 - 20),
      vx: Math.cos(angle) * speed * (Math.random() < 0.5 ? 1 : -1),
      vy: -Math.abs(Math.sin(angle) * speed) - 4,
      size: Math.random() * 8 + 5,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 15,
      opacity: 1,
      shape: Math.random() < 0.3 ? 'circle' : 'rect',
    });
  }

  let animId: number;
  const startTime = performance.now();

  function render(now: number) {
    const elapsed = now - startTime;
    if (!ctx) return;
    ctx.clearRect(0, 0, width, height);

    let activeCount = 0;
    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35; // 重力加速度
      p.vx *= 0.985; // 空氣阻力
      p.rotation += p.vRot;

      if (elapsed > 1600) {
        p.opacity = Math.max(0, p.opacity - 0.025);
      }

      if (p.opacity > 0 && p.y < height + 50) {
        activeCount++;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;

        if (p.shape === 'rect') {
          ctx.fillRect(-p.size / 2, -p.size / 3, p.size, p.size * 0.6);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }
    }

    if (activeCount > 0 && elapsed < 3000) {
      animId = requestAnimationFrame(render);
    } else {
      cancelAnimationFrame(animId);
      canvas.remove();
    }
  }

  animId = requestAnimationFrame(render);
}
