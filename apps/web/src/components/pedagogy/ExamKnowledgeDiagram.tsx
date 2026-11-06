/** Vector teaching schematics: derived relationships, not substitutes for official figures. */
import { useId } from 'react';

export default function ExamKnowledgeDiagram({ id }: { id: string }) {
  const instanceId = useId();
  const frictionTitleId = `${instanceId}-friction-title`;
  const forceMarkerId = `${instanceId}-force`;
  const mohrTitleId = `${instanceId}-mohr-title`;
  if(id==='115-2-39') return <figure className="et-diagram my-5 space-y-3 rounded-xl border p-4">
    <svg viewBox="0 0 510 390" role="img" aria-label="最少殘骸的柱高圖：後列2、1、3，中列1、1、0，前列1、2、1。總數12，前視最大高2、2、3，右視由前向後最大高2、1、3。" className="mx-auto w-full max-w-xl">
      <g fill="currentColor" fontSize="16"><text x="60" y="30">可達下界的一組堆疊｜數字為柱高</text><text x="22" y="68">後</text><text x="22" y="285">前</text></g>
      {[[2,1,3],[1,1,0],[1,2,1]].map((row,y)=>row.map((h,x)=><g key={`${x}-${y}`}>
        <rect x={60+x*68} y={70+y*68} width="68" height="68" fill="currentColor" fillOpacity={h===0?0:0.05+h*0.05} stroke="currentColor" strokeWidth="1.5"/>
        <text x={94+x*68} y={111+y*68} textAnchor="middle" fill="currentColor" fontSize="24">{h===0?'空':h}</text>
      </g>))}
      <g fill="currentColor" fontSize="17" textAnchor="middle"><text x="94" y="310">2</text><text x="162" y="310">2</text><text x="230" y="310">3</text></g>
      <g fill="currentColor" fontSize="16"><text x="60" y="345">前視：每一欄取最高值</text><text x="295" y="100">每一列最高值</text><text x="295" y="134">後：3</text><text x="295" y="202">中：1</text><text x="295" y="270">前：2</text><text x="295" y="319">右視由前向後：</text><text x="295" y="345">2 → 1 → 3</text><text x="60" y="378">合計 12 格；掉落 27 − 12 ＝ 15 格</text></g>
    </svg>
    <figcaption className="text-sm leading-7">依官方三視圖推得的一組最少柱高配置，屬解題圖解，非新增考題條件。逐欄、逐列取最大值可回查兩張立面；只有一張投影吻合還不夠。</figcaption>
  </figure>;
  if(id==='111-2-28') return <figure className="et-diagram my-5 space-y-3 rounded-xl border p-4">
    <svg viewBox="0 0 480 265" role="img" aria-label="投影關係示意：垂直H面的線在H縮成點，在V顯實長；平行V的單斜線在V顯實長，在H為水平短線。" className="mx-auto w-full max-w-xl">
      <g fill="none" stroke="currentColor" strokeWidth="2"><path d="M35 120H215M265 120H450"/><path d="M130 65V225M310 70V195M405 70V155" strokeDasharray="4 5"/><path d="M130 150V225M310 70H405M310 195L405 155" strokeWidth="3"/></g>
      <circle cx="130" cy="65" r="5" fill="currentColor"/>
      <g fill="currentColor" fontSize="15"><text x="40" y="25">垂直 H → H 投成點</text><text x="270" y="25">平行 V → V 顯實長</text><text x="40" y="110">GL</text><text x="270" y="110">GL</text><text x="140" y="69">aʰ＝bʰ</text><text x="140" y="190">V：實長</text><text x="310" y="58">H：縮短</text><text x="330" y="223">V：斜向實長</text></g>
    </svg>
    <figcaption className="text-sm leading-7">以第三角法配置說明兩條判讀規則，非原題比例圖。先看哪一面縮成點，再判垂直；先看哪一面顯實長，再判平行。</figcaption>
  </figure>;
  if (['111-2-10','112-2-18','114-2-12','115-2-12'].includes(id)) return <figure className="et-diagram my-5 space-y-3 rounded-xl border p-4">
    <svg viewBox="0 0 480 290" role="img" aria-label="三角高程路徑：A地面加儀器高i，加視線垂直分量，再減目標高r得到B地面" className="mx-auto w-full max-w-xl">
      <g fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M45 235H170L300 145H430"/>
        <path d="M110 235V165M365 145V75M110 165L365 75"/>
        <path d="M110 165H365" strokeDasharray="6 5"/>
        <path d="M110 165L90 220M110 165L130 220M105 170H115"/>
        <path d="M152 165A42 42 0 0 0 149 151M110 255H365M110 249V261M365 249V261"/>
        <path d="M365 165V75" strokeDasharray="3 4"/>
        <rect x="359" y="69" width="12" height="12"/>
      </g>
      <g fill="currentColor" fontSize="16">
        <text x="70" y="250">A</text><text x="380" y="145">B</text>
        <text x="65" y="195">i</text><text x="380" y="110">r</text>
        <text x="155" y="155">α</text><text x="203" y="277">水平距 D</text>
        <text x="190" y="90">視線垂直分量</text><text x="205" y="114">＝D tanα</text>
        <text x="55" y="30">ΔH＝i＋D tanα−r</text>
      </g>
    </svg>
    <figcaption className="text-sm leading-7">路徑圖，非原題比例圖。由A地面上升到儀器，沿視線上升，再由目標頂端下降到B地面。若已知斜距S，垂直分量改用S sinα；若給天頂距Z，則用S cosZ。</figcaption>
  </figure>;
  if (id === '112-2-19' || id === '112-2-20') return <figure className="et-diagram my-5 space-y-3 rounded-xl border p-4">
    <svg viewBox="0 0 460 330" role="img" aria-label="L形五方格土方教學圖，每格一百平方公尺，四格淨挖、一格淨填，合計淨挖三十七點五立方公尺" className="mx-auto w-full max-w-xl">
      <g fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M65 30H145V110H225V270H65ZM65 110H145V270M65 190H225M145 110H225"/>
        <path d="M70 195L140 265M70 220L115 265M95 195L140 240" strokeDasharray="3 4" opacity=".35"/>
      </g>
      <g fill="currentColor" fontSize="14" textAnchor="middle">
        <text x="105" y="65">101.1125</text><text x="105" y="88">＋11.25</text>
        <text x="105" y="145">101.1100</text><text x="105" y="168">＋11.00</text>
        <text x="105" y="225">101.0500</text><text x="105" y="248">＋5.00</text>
        <text x="185" y="145">101.1175</text><text x="185" y="168">＋11.75</text>
        <text x="185" y="225">100.9850</text><text x="185" y="248">−1.50</text>
      </g>
      <g fill="currentColor" fontSize="16">
        <text x="255" y="80">每格100m²</text><text x="255" y="115">上：平均高程m</text><text x="255" y="150">下：有號土方m³</text>
        <text x="255" y="200">＋為挖、−為填</text><text x="255" y="235">合計＋37.5m³</text>
        <text x="65" y="308">平衡高＝101＋37.5÷500＝101.075m</text>
      </g>
    </svg>
    <figcaption className="text-sm leading-7">依原題角點計算的方格平均教學圖；數字標在格內，代表該格四角平均，不是新增的節點觀測值。淨土方保留正負號後再加總。</figcaption>
  </figure>;
  if(id==='114-1-2') return <figure className="et-diagram"><svg viewBox="0 0 480 290" role="img" aria-labelledby={frictionTitleId}><title id={frictionTitleId}>箱體摩擦與傾倒教學示意：右下角取矩，向下推力增加正向力</title><defs><marker id={forceMarkerId} markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0 0L7 3.5L0 7Z" fill="currentColor"/></marker></defs><path d="M70 228H430" stroke="currentColor" strokeWidth="2"/><rect x="150" y="65" width="150" height="160" rx="3" fill="none" stroke="currentColor" strokeWidth="2"/><g stroke="currentColor" strokeWidth="2.5" markerEnd={`url(#${forceMarkerId})`}><path d="M300 65L358 109"/><path d="M225 143V205"/><path d="M225 267V230"/><path d="M150 228H100"/></g><g fill="currentColor" fontSize="16"><text x="322" y="65">P（右下）</text><text x="235" y="182">W = 420 N</text><text x="233" y="266">N = W + 3P/5</text><text x="72" y="215">μN</text><text x="307" y="219">取矩點</text><text x="95" y="150">H</text><text x="190" y="44">寬 60 cm</text></g><path d="M122 65V225M116 65H128M116 225H128" stroke="currentColor"/><circle cx="300" cy="225" r="5" fill="currentColor"/></svg><figcaption>教學示意，非比例圖。水平分量 4P/5 產生傾倒力矩；垂直分量通過右下角，對該點力矩為零。</figcaption></figure>;
  if(id==='113-1-12') return <figure className="et-diagram"><svg viewBox="0 0 480 270" role="img" aria-labelledby={mohrTitleId}><title id={mohrTitleId}>莫爾圓教學圖：圓心負 11.5、半徑 8.5，兩端負 20 與負 3 MPa</title><g fill="none" stroke="currentColor"><path d="M45 135H440M365 35V225"/><circle cx="250" cy="135" r="85" strokeWidth="2.5"/><path d="M250 135L310 75" strokeDasharray="5 4"/></g><g fill="currentColor" fontSize="16"><circle cx="165" cy="135" r="4"/><circle cx="335" cy="135" r="4"/><circle cx="250" cy="135" r="4"/><text x="145" y="160">−20</text><text x="315" y="160">−3</text><text x="210" y="185">C = −11.5</text><text x="267" y="92">R = 8.5</text><text x="370" y="155">0</text><text x="410" y="120">σ</text><text x="374" y="45">τ</text></g></svg><figcaption>平均值定位圓心，半差決定半徑。由 C ± R 還原主應力，是最直接的驗算。</figcaption></figure>;
  return null;
}
