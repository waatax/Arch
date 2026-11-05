'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function BeamSandbox() {
  const [position, setPosition] = useState(2);
  const right = 12 * position / 6;
  const left = 12 - right;
  return <div className="ss-sandbox">
    <div className="ss-sandbox-label"><span>STRUCTURE LAB / 01</span><span>可互動</span></div>
    <h2>把力學，放在手上。</h2><p>移動招牌，看看左右支點怎麼分擔重量。</p>
    <svg viewBox="0 0 400 210" role="img" aria-label={`6 公尺簡支梁，12 kN 荷重距左端 ${position} 公尺；左反力 ${left.toFixed(1)}、右反力 ${right.toFixed(1)} kN。`}>
      <defs><pattern id="ss-grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0H0V20" fill="none" stroke="currentColor" strokeOpacity=".08" /></pattern></defs>
      <rect width="400" height="210" fill="url(#ss-grid)" />
      <path d="M50 116H350" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
      <path d="M50 124l-13 24h26z M350 124l-13 24h26z" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="344" cy="154" r="4" fill="currentColor" /><circle cx="356" cy="154" r="4" fill="currentColor" />
      <path d="M30 162h40m260 0h40 M50 182h300m-300-5v10m300-10v10" stroke="currentColor" opacity=".5" />
      <text x="200" y="202" textAnchor="middle" fill="currentColor" fontSize="13">6 m</text>
      <g transform={`translate(${50 + position * 50},0)`}><rect x="-32" y="19" width="64" height="34" rx="7" fill="#f8b56c" /><text x="0" y="41" textAnchor="middle" fill="#173c3d" fontSize="14" fontWeight="700">12 kN</text><path d="M0 58v42m-7-9 7 10 7-10" fill="none" stroke="#f8b56c" strokeWidth="3" /></g>
      <text x="50" y="105" textAnchor="middle" fill="currentColor" fontSize="12">A</text><text x="350" y="105" textAnchor="middle" fill="currentColor" fontSize="12">B</text>
    </svg>
    <label htmlFor="load-position" className="ss-range-label">荷重距 A <output>{position.toFixed(1)} m</output></label>
    <input id="load-position" type="range" min="0" max="6" step="0.5" value={position} onChange={(e) => setPosition(Number(e.target.value))} />
    <div className="ss-reactions" aria-live="polite"><span>A ↑ <b>{left.toFixed(1)}</b> kN</span><span>B ↑ <b>{right.toFixed(1)}</b> kN</span></div>
    <div className="ss-reaction-bar" role="img" aria-label={`反力分配：A ${(left / 12 * 100).toFixed(0)}%，B ${(right / 12 * 100).toFixed(0)}%`}><span style={{ width: `${left / 12 * 100}%` }} /><span style={{ width: `${right / 12 * 100}%` }} /></div>
    <p className="ss-sandbox-note">簡化模型：忽略梁自重，兩反力合計始終為 12 kN。</p><Link href="/study-studio/beam-check">看懂原理，再解兩題 →</Link>
  </div>;
}
