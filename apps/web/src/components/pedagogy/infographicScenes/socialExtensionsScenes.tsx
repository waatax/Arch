import React from 'react';
import { LeftCard, RightCard, StepRow, type SceneRenderer } from './scenePrimitives';

export const socialExtensionsScenes: Record<string, SceneRenderer> = {
  // ───────────── HISTORY (6 TOPICS) ─────────────
  'history/taiwan-history': (m) => (
    <g>
      <LeftCard title="臺灣歷史建築空間演進譜系（原民風土 → 荷西清代街屋 → 日治近代 → 戰後現代）" subtitle="每一座歷史城區都是政權治理、移民拓墾與風土氣候交織的空間化石！">
        {[
          { x: 22, era: '原民與荷西', bldg: '石板屋 / 紅毛城', sub: '就地取材＋海權稜堡', cls: 'fill-amber-500/18 stroke-amber-600' },
          { x: 118, era: '清領漢人社會', bldg: '閩粵合院 / 長條街屋', sub: '亭仔腳騎樓＋廟宇匠派', cls: 'fill-rose-500/18 stroke-rose-600' },
          { x: 214, era: '日治現代化', bldg: '辰野式官廳 / 牌樓厝', sub: '市區改正＋上下水道RC', cls: 'fill-indigo-500/18 stroke-indigo-600' },
          { x: 310, era: '戰後至當代', bldg: '現代主義 / 地域綠建築', sub: '東海路思義→九二一再生', cls: 'fill-emerald-500/18 stroke-emerald-600' },
        ].map((st, idx) => (
          <g key={idx} transform={`translate(${st.x}, 74)`}>
            <rect width="84" height="126" rx="10" className={st.cls} strokeWidth="1.6" />
            <text x="42" y="26" textAnchor="middle" className="fill-slate-900 dark:fill-white text-[10px] font-bold">{st.era}</text>
            <text x="42" y="64" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-200 text-[9px] font-bold">{st.bldg}</text>
            <text x="42" y="98" textAnchor="middle" className="fill-slate-600 dark:fill-slate-300 text-[8.5px]">{st.sub}</text>
            {idx < 3 && (
              <line x1="85" y1="63" x2="94" y2="63" stroke="currentColor" strokeWidth="2" className="text-slate-400" markerEnd={`url(#${m.arrowBlue})`} />
            )}
          </g>
        ))}
        <text x="204" y="248" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-300 text-[10.5px] font-mono font-bold">
          日治「市區改正」導入格狀道路、圓環公園、自來水與鋼筋混凝土近代營造技術！
        </text>
      </LeftCard>
      <RightCard title="臺灣史三大建築考點辨析" subtitle="族群工藝與殖民現代性">
        <StepRow y={54} num="原" label="南島語族多元住屋智慧" detail="排灣魯凱板岩屋、達悟地下屋防颱、泰雅竹木家屋" tone="amber" />
        <StepRow y={112} num="清" label="郊商港市與對場作競藝" detail="一府二鹿三艋舺；廟宇左右兩派匠師「對場作」拼巧藝" tone="rose" />
        <StepRow y={170} num="日" label="辰野金吾紅磚白飾帶風格" detail="總統府、臺大醫院舊館展現歷史主義威權象徵" tone="indigo" />
      </RightCard>
    </g>
  ),

  'history/chinese-history': () => (
    <g>
      <LeftCard title="中國傳統木構兩大體系：北方「抬梁式」 vs 南方「穿斗式」剖面對照" subtitle="榫卯斗栱柔韌消能抗震、「牆倒屋不塌」（承重框架與圍護牆分離！）">
        {/* Tailiang (Left) */}
        <g transform="translate(28, 66)">
          <rect width="166" height="156" rx="10" className="fill-rose-500/12 stroke-rose-600" strokeWidth="1.6" />
          <line x1="28" y1="132" x2="28" y2="68" stroke="currentColor" strokeWidth="4" className="text-amber-800 dark:text-amber-400" />
          <line x1="138" y1="132" x2="138" y2="68" stroke="currentColor" strokeWidth="4" className="text-amber-800 dark:text-amber-400" />
          <line x1="20" y1="68" x2="146" y2="68" stroke="currentColor" strokeWidth="4.5" className="text-rose-600" />
          <line x1="48" y1="48" x2="118" y2="48" stroke="currentColor" strokeWidth="3.5" className="text-rose-600" />
          <polyline points="12,72 83,24 154,72" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-slate-700 dark:text-slate-200" />
          <text x="83" y="148" textAnchor="middle" className="fill-rose-800 dark:fill-rose-200 text-[10.5px] font-bold">抬梁式（柱上架大梁，室內開闊）</text>
        </g>
        {/* Chuandou (Right) */}
        <g transform="translate(212, 66)">
          <rect width="166" height="156" rx="10" className="fill-emerald-500/12 stroke-emerald-600" strokeWidth="1.6" />
          {[28, 56, 83, 110, 138].map((px, k) => {
            const topY = 72 - (2 - Math.abs(k - 2)) * 22;
            return <line key={k} x1={px} y1="132" x2={px} y2={topY} stroke="currentColor" strokeWidth="2.8" className="text-emerald-700 dark:text-emerald-400" />;
          })}
          <line x1="28" y1="88" x2="138" y2="88" stroke="currentColor" strokeWidth="2" className="text-amber-600" />
          <line x1="56" y1="62" x2="110" y2="62" stroke="currentColor" strokeWidth="2" className="text-amber-600" />
          <polyline points="12,76 83,24 154,76" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-slate-700 dark:text-slate-200" />
          <text x="83" y="148" textAnchor="middle" className="fill-emerald-800 dark:fill-emerald-200 text-[10.5px] font-bold">穿斗式（密柱直承檁，省大木）</text>
        </g>
        <text x="204" y="254" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-300 text-[10.5px] font-mono font-bold">
          兩部官式營造法典：北宋李誡《營造法式》（以材分制模矩） ＆ 清工部《工程做法則例》
        </text>
      </LeftCard>
      <RightCard title="都城規劃演變：唐長安坊市 → 宋汴京街市" subtitle="政治禮制秩序與商業市民生活的轉折">
        <StepRow y={54} num="唐" label="唐長安城：嚴格「坊市分離」宵禁" detail="棋盤里坊圍牆封閉，商業限於東西兩市定時交易" tone="amber" />
        <StepRow y={112} num="宋" label="北宋汴京：打破坊牆「街市合一」" detail="沿街開店並出現夜市瓦舍（《清明上河圖》實景）" tone="emerald" />
        <StepRow y={170} num="屋" label="屋頂等級：重檐廡殿 ＞ 歇山 ＞ 懸山 ＞ 硬山" detail="廡殿頂（五脊四坡）限皇宮太和殿等最高規制使用" tone="rose" />
      </RightCard>
    </g>
  ),

  'history/world-history': () => (
    <g>
      <LeftCard title="西方結構跨越史：希臘柱式 → 羅馬圓拱穹頂 → 哥德尖拱飛扶壁 → 工業鋼鐵玻璃" subtitle="每一次建築空間解放，背後都是一場材料與結構力學革命！">
        {[
          { x: 24, title: '古希臘梁柱', sub: '多立克/愛奧尼克\n帕德嫩黃金比例', cls: 'fill-amber-500/16 stroke-amber-600' },
          { x: 120, title: '古羅馬圓拱', sub: '火山灰混凝土穹頂\n萬神殿 43m 跨度', cls: 'fill-blue-500/16 stroke-blue-600' },
          { x: 216, title: '中世紀哥德', sub: '尖拱+肋拱+飛扶壁\n解放牆體鑲彩繪窗', cls: 'fill-purple-500/16 stroke-purple-600' },
          { x: 312, title: '工業革命後', sub: '1851倫敦水晶宮\n鑄鐵玻璃預鑄模矩', cls: 'fill-emerald-500/16 stroke-emerald-600' },
        ].map((w, idx) => {
          const [s1, s2] = w.sub.split('\n');
          return (
            <g key={idx} transform={`translate(${w.x}, 72)`}>
              <rect width="84" height="132" rx="10" className={w.cls} strokeWidth="1.6" />
              <text x="42" y="28" textAnchor="middle" className="fill-slate-900 dark:fill-white text-[10px] font-bold">{w.title}</text>
              <text x="42" y="68" textAnchor="middle" className="fill-slate-700 dark:fill-slate-200 text-[8.5px]">{s1}</text>
              <text x="42" y="92" textAnchor="middle" className="fill-indigo-700 dark:fill-indigo-300 text-[8.5px] font-bold">{s2}</text>
            </g>
          );
        })}
        <text x="204" y="248" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-300 text-[10.5px] font-mono font-bold">
          文藝復興（布魯內列斯基佛羅倫斯百花大教堂雙層穹頂 + 透視法誕生）→ 巴洛克動態光影
        </text>
      </LeftCard>
      <RightCard title="現代建築運動與柯比意「新建築五點」" subtitle="鋼筋混凝土框架徹底解放承重牆！">
        <StepRow y={54} num="五" label="薩伏瓦別墅（Villa Savoye）五原則" detail="底層挑空、屋頂花園、自由平面、水平長窗、自由立面" tone="indigo" />
        <StepRow y={112} num="包" label="1919 德國包浩斯（Bauhaus）格羅佩斯" detail="結合藝術與工業大量生產，奠定現代設計教育基礎" tone="blue" />
        <StepRow y={170} num="後" label="後現代與解構主義反思" detail="反對千篇一律玻璃盒子，重拾歷史語彙、地域與非線性曲面" tone="rose" />
      </RightCard>
    </g>
  ),

  'history/architectural-history': () => (
    <g>
      <LeftCard title="二十世紀現代建築四大師哲學與代表名作矩陣" subtitle="設計史與作品集論述必備經典座標！">
        {[
          { x: 24, y: 58, name: '柯比意 Le Corbusier', work: '薩伏瓦別墅 / 廊香教堂', quote: '住宅是居住的機器・模矩 Modulor', cls: 'fill-blue-500/15 stroke-blue-600' },
          { x: 214, y: 58, name: '密斯 Mies van der Rohe', work: '巴塞隆納德國館 / 范斯沃斯宅', quote: 'Less is more 少即是多（鋼與玻璃）', cls: 'fill-indigo-500/15 stroke-indigo-600' },
          { x: 24, y: 154, name: '萊特 Frank Lloyd Wright', work: '落水山莊 (Fallingwater)', quote: '有機建築 Organic（懸挑於瀑布自然共生）', cls: 'fill-emerald-500/15 stroke-emerald-600' },
          { x: 214, y: 154, name: '格羅佩斯 Walter Gropius', work: '包浩斯德紹校舍 (Dessau)', quote: '玻璃帷幕轉角透明性・設計教育革命', cls: 'fill-amber-500/15 stroke-amber-600' },
        ].map((m4, idx) => (
          <g key={idx} transform={`translate(${m4.x}, ${m4.y})`}>
            <rect width="174" height="82" rx="10" className={m4.cls} strokeWidth="1.6" />
            <text x="12" y="22" className="fill-slate-900 dark:fill-white text-[10.5px] font-bold">{m4.name}</text>
            <text x="12" y="44" className="fill-indigo-800 dark:fill-indigo-200 text-[9.5px] font-mono font-bold">{m4.work}</text>
            <text x="12" y="66" className="fill-slate-600 dark:fill-slate-300 text-[8.8px]">{m4.quote}</text>
          </g>
        ))}
      </LeftCard>
      <RightCard title="當代普立茲克獎大師與臺灣戰後名築" subtitle="從國際式樣走向光影與風土詩學">
        <StepRow y={54} num="光" label="路易康 Louis Kahn ＆ 安藤忠雄" detail="磚也想成為拱；清水混凝土結合幾何自然光（光之教堂）" tone="indigo" />
        <StepRow y={112} num="臺" label="貝聿銘 × 陳其寬：東海路思義教堂" detail="四片雙曲拋物面薄殼無柱空間，融合現代結構與東方意境" tone="emerald" />
        <StepRow y={170} num="在" label="黃聲遠（田中央）與宜蘭地域建築" detail="謙遜融入地景水田與社區日常生活的當代風土實踐" tone="amber" />
      </RightCard>
    </g>
  ),

  'history/cultural-heritage': (m) => (
    <g>
      <LeftCard title="文化資產保存修復四階段流程 ＆《威尼斯憲章》國際原則" subtitle="修舊如舊（保存真實歷史層次），嚴禁假古董式推倒重建！">
        {[
          { x: 24, t: '1. 調查研究', d: '3D光達點雲測繪\n史料匠藝考證', cls: 'fill-blue-500/18 stroke-blue-600' },
          { x: 120, t: '2. 修復設計', d: '結構安全補強\n新舊可辨識設計', cls: 'fill-indigo-500/18 stroke-indigo-600' },
          { x: 216, t: '3. 傳統匠師施工', d: '大木/剪黏/彩繪\n殘蹟保存最小干預', cls: 'fill-amber-500/18 stroke-amber-600' },
          { x: 312, t: '4. 活化再利用', d: '松菸/華山/駁二\n古蹟融入當代生活', cls: 'fill-emerald-500/18 stroke-emerald-600' },
        ].map((st, idx) => {
          const [d1, d2] = st.d.split('\n');
          return (
            <g key={idx} transform={`translate(${st.x}, 78)`}>
              <rect width="84" height="114" rx="10" className={st.cls} strokeWidth="1.6" />
              <text x="42" y="28" textAnchor="middle" className="fill-slate-900 dark:fill-white text-[9.5px] font-bold">{st.t}</text>
              <text x="42" y="64" textAnchor="middle" className="fill-slate-600 dark:fill-slate-300 text-[8.5px]">{d1}</text>
              <text x="42" y="84" textAnchor="middle" className="fill-indigo-700 dark:fill-indigo-300 text-[8.5px] font-bold">{d2}</text>
              {idx < 3 && (
                <line x1="85" y1="57" x2="94" y2="57" stroke="currentColor" strokeWidth="2" className="text-slate-400" markerEnd={`url(#${m.arrowBlue})`} />
              )}
            </g>
          );
        })}
        <text x="204" y="246" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 text-[10.5px] font-mono font-bold">
          四大修復鐵律：真實性 · 最小干預 · 可逆性（未來可無損卸除） · 可辨識性！
        </text>
      </LeftCard>
      <RightCard title="我國《文化資產保存法》分類" subtitle="有形文化資產 vs 無形文化資產（保存技術）">
        <StepRow y={54} num="定" label="古蹟（國定／直轄市定／縣市定）" detail="指定制！具高度歷史藝術科學價值，嚴格管制增改建" tone="rose" />
        <StepRow y={112} num="登" label="歷史建築、紀念建築與聚落建築群" detail="登錄制！彈性鼓勵適應性再利用（Adaptive Reuse）" tone="blue" />
        <StepRow y={170} num="匠" label="文化資產保存技術及保存者（人間國寶）" detail="大木作、土水作、剪黏、鑿花等傳統營造無形技藝傳承" tone="emerald" />
      </RightCard>
    </g>
  ),

  'history/social-change': () => (
    <g>
      <LeftCard title="臺灣社會人口轉型（金字塔 → 倒金字塔超高齡）與居住型態變遷" subtitle="三代大家庭合院 → 戰後眷村／步登公寓(4~5F) → 電梯大樓 → 社宅青銀共居">
        {/* Pyramid vs Urn shape */}
        <g transform="translate(42, 72)">
          <polygon points="65,18 12,138 118,138" className="fill-blue-500/22 stroke-blue-600" strokeWidth="2" />
          <text x="65" y="160" textAnchor="middle" className="fill-blue-800 dark:fill-blue-200 text-[10.5px] font-bold">早期：高出生金字塔</text>
        </g>
        <g transform="translate(222, 72)">
          <polygon points="28,18 102,18 116,78 82,138 48,138 14,78" className="fill-rose-500/22 stroke-rose-600" strokeWidth="2" />
          <text x="65" y="160" textAnchor="middle" className="fill-rose-800 dark:fill-rose-200 text-[10.5px] font-bold">當代：少子超高齡彈頭型</text>
        </g>
        <text x="204" y="258" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-300 text-[10.5px] font-mono font-bold">
          老舊無電梯 4~5 樓公寓形成「高齡長者受困宅」，急需整建維護增設電梯與都更！
        </text>
      </LeftCard>
      <RightCard title="當代居住正義與社會住宅空間回應" subtitle="只租不售、混居共融、無障礙全齡化">
        <StepRow y={54} num="社" label="社會住宅（Social Housing）政策" detail="提供青年與弱勢只租不售平價好宅，底層結合托嬰日照中心" tone="emerald" />
        <StepRow y={112} num="共" label="青銀共居（Intergenerational Living）" detail="共享廚房客廳促進跨世代互助，化解獨居長者孤寂" tone="blue" />
        <StepRow y={170} num="危" label="都市更新 vs 危老重建條例" detail="強化九二一前老屋耐震能力並給予容積獎勵誘因" tone="amber" />
      </RightCard>
    </g>
  ),

  // ───────────── GEOGRAPHY (6 TOPICS) ─────────────
  'geography/environment-terrain': (m) => (
    <g>
      <LeftCard title="山坡地「順向坡（Dip Slope）」切斷坡腳滑移機制 vs 逆向坡" subtitle="地層傾斜方向與山坡坡向一致且工程開挖切斷岩層自由端 → 暴雨潤滑整層崩塌！">
        {/* Dip slope danger */}
        <polygon points="48,218 338,218 118,74 48,74" className="fill-amber-500/18 stroke-amber-700" strokeWidth="2" />
        <line x1="62" y1="96" x2="275" y2="218" stroke="currentColor" strokeWidth="2" strokeDasharray="6 3" className="text-rose-600" />
        <line x1="88" y1="84" x2="298" y2="204" stroke="currentColor" strokeWidth="2.5" className="text-rose-600" />
        {/* Excavated toe cut */}
        <rect x="258" y="172" width="84" height="46" className="fill-white dark:fill-slate-900 stroke-rose-600" strokeDasharray="4 2" strokeWidth="2" />
        <line x1="155" y1="108" x2="235" y2="154" stroke="currentColor" strokeWidth="3.2" className="text-rose-600" markerEnd={`url(#${m.arrowRose})`} />
        <text x="298" y="198" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 text-[10px] font-mono font-bold">⚠ 挖斷坡腳!</text>
        <text x="215" y="112" className="fill-rose-700 dark:fill-rose-300 text-[11px] font-bold">順向坡滑動面 (頁岩黏土層)</text>
        <text x="204" y="256" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-300 text-[10.5px] font-mono font-bold">
          等高線判讀：V 字尖端指向「高處（上游）」為河谷集水線（易土石流!）；指向低處為山脊分水嶺
        </text>
      </LeftCard>
      <RightCard title="坡度計算 S = Δh/D × 100% 與邊坡防護" subtitle="《建築技術規則》平均坡度 &gt; 30% 原則不得開發建築！">
        <StepRow y={54} num="30%" label="山坡地禁建紅線：平均坡度 > 30%" detail="水平前進 100m 爬升超過 30m 屬陡坡保育範圍" tone="rose" />
        <StepRow y={112} num="錨" label="順向坡工程防護三寶" detail="擋土牆 ＋ 預力岩錨（鎖入穩定岩盤） ＋ 坡面洩水孔排水!" tone="emerald" />
        <StepRow y={170} num="溶" label="石灰岩喀斯特（Karst）地下溶洞" detail="碳酸鈣溶蝕易致地表塌陷坑(Sinkhole)，鑽探必徹底" tone="amber" />
      </RightCard>
    </g>
  ),

  'geography/climate-environment': (m) => (
    <g>
      <LeftCard title="都市熱島效應（UHI）剖面 ＆ 建築風壓／煙囪熱壓自然通風" subtitle="柏油水泥高蓄熱＋不透水＋空調排熱 → 市中心氣溫較郊區高出 3~5°C！">
        {/* UHI dome curve over CBD vs Park/Suburb */}
        <rect x="148" y="116" width="32" height="98" className="fill-slate-500" />
        <rect x="188" y="88" width="38" height="126" className="fill-slate-600" />
        <rect x="234" y="128" width="28" height="86" className="fill-slate-500" />
        <circle cx="78" cy="192" r="20" className="fill-emerald-500/50" />
        <circle cx="332" cy="192" r="20" className="fill-emerald-500/50" />
        <line x1="42" y1="214" x2="372" y2="214" stroke="currentColor" strokeWidth="2" className="text-slate-500" />
        <path d="M 48 168 Q 110 162 155 92 Q 205 46 255 96 Q 310 164 365 168" fill="none" stroke="currentColor" strokeWidth="3" className="text-rose-600" />
        <text x="206" y="56" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 text-[11px] font-mono font-bold">市中心熱島尖峰 36°C</text>
        <text x="78" y="156" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[10px] font-mono font-bold">郊區綠地 31°C</text>
        <line x1="98" y1="198" x2="142" y2="198" stroke="currentColor" strokeWidth="2" className="text-blue-600" markerEnd={`url(#${m.arrowBlue})`} />
        <text x="204" y="252" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-300 text-[10.5px] font-mono font-bold">
          台灣季風：夏季吹西南／東南風（迎風開窗導風）；冬季吹強勁東北季風（防風防雨）
        </text>
      </LeftCard>
      <RightCard title="微氣候設計與大樓風切控制" subtitle="把自然風與綠意請進城市裡">
        <StepRow y={54} num="退" label="高樓設裙樓基座（Podium）防下吹風" detail="攔截高空強風向下俯衝，保護地面行人舒適安全" tone="blue" />
        <StepRow y={112} num="煙" label="天井／太子樓熱壓浮力通風（Stack）" detail="低處進涼風、高處排熱氣，無風日也能自然換氣" tone="amber" />
        <StepRow y={170} num="涼" label="緩解都市熱島四大建築策略" detail="屋頂垂直綠化、高反照率冷屋頂、透水鋪面、留設都市風廊" tone="emerald" />
      </RightCard>
    </g>
  ),

  'geography/population-urban': () => (
    <g>
      <LeftCard title="都市競租曲線（Bid-Rent）與同心圓／扇形／多核心空間結構" subtitle="商業付租曲線最陡搶佔市中心 CBD ； 現代大都會走向捷運副都心「多核心」！">
        {/* Concentric rings + Bid-rent lines */}
        <g transform="translate(115, 142)">
          <circle cx="0" cy="0" r="76" className="fill-emerald-500/12 stroke-emerald-600" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="50" className="fill-blue-500/15 stroke-blue-600" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="24" className="fill-rose-500/30 stroke-rose-600" strokeWidth="2" />
          <text x="0" y="4" textAnchor="middle" className="fill-rose-900 dark:fill-rose-100 text-[9.5px] font-mono font-bold">CBD</text>
          <text x="0" y="-32" textAnchor="middle" className="fill-blue-800 dark:fill-blue-200 text-[8.5px] font-bold">過渡/住商</text>
          <text x="0" y="-58" textAnchor="middle" className="fill-emerald-800 dark:fill-emerald-200 text-[8.5px] font-bold">通勤住宅圈</text>
        </g>
        {/* Bid-rent slope */}
        <g transform="translate(220, 68)">
          <line x1="16" y1="142" x2="162" y2="142" stroke="currentColor" className="text-slate-400" />
          <line x1="16" y1="142" x2="16" y2="14" stroke="currentColor" className="text-slate-400" />
          <line x1="16" y1="20" x2="68" y2="142" stroke="currentColor" strokeWidth="2.6" className="text-rose-600" />
          <line x1="16" y1="66" x2="118" y2="142" stroke="currentColor" strokeWidth="2.2" className="text-blue-600" />
          <line x1="16" y1="104" x2="158" y2="138" stroke="currentColor" strokeWidth="2" className="text-emerald-600" />
          <text x="46" y="48" className="fill-rose-700 text-[9.5px] font-bold">商業地租</text>
          <text x="86" y="96" className="fill-blue-700 text-[9.5px] font-bold">住宅</text>
          <text x="128" y="124" className="fill-emerald-700 text-[9.5px] font-bold">農業</text>
        </g>
        <text x="204" y="254" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-300 text-[10px] font-mono font-bold">
          中地理論（Christaller）：商品圈 ≥ 商閾（維持生存最低消費門檻）商店才能存活！
        </text>
      </LeftCard>
      <RightCard title="都市更新、仕紳化與無障礙通用空間" subtitle="兼顧城市活化與原住戶居住正義">
        <StepRow y={54} num="紳" label="仕紳化（Gentrification）雙面刃" detail="老區翻新環境改善，但房租飆漲易迫使弱勢原住戶遷離" tone="rose" />
        <StepRow y={112} num="老" label="高齡化 7% → 高齡 14% → 超高齡 20%" detail="無障礙坡道坡度 ≤ 1:12 、 輪椅迴轉圓直徑 ≥ 150cm" tone="blue" />
        <StepRow y={170} num="分" label="都市計畫土地使用分區管制" detail="住宅區、商業區、工業區各有法定建蔽率與容積率上限" tone="emerald" />
      </RightCard>
    </g>
  ),

  'geography/regional-development': () => (
    <g>
      <LeftCard title="大眾運輸導向開發（TOD）500m 步行圈 ＆ 國土四大功能分區" subtitle="以捷運／高鐵車站為核心提高容積混合使用，減少私人汽機車碳排！">
        {/* TOD concentric station core */}
        <circle cx="122" cy="142" r="78" className="fill-emerald-500/12 stroke-emerald-600" strokeDasharray="4 3" strokeWidth="1.8" />
        <circle cx="122" cy="142" r="46" className="fill-blue-500/18 stroke-blue-600" strokeWidth="1.8" />
        <circle cx="122" cy="142" r="20" className="fill-rose-600" />
        <text x="122" y="146" textAnchor="middle" className="fill-white text-[9.5px] font-mono font-bold">車站</text>
        <text x="122" y="110" textAnchor="middle" className="fill-blue-800 dark:fill-blue-200 text-[9px] font-bold">高容積商辦社宅</text>
        <text x="122" y="78" textAnchor="middle" className="fill-emerald-800 dark:fill-emerald-200 text-[9px] font-bold">500m 自行車人本圈</text>
        {/* 4 National Spatial Plan zones */}
        <g transform="translate(218, 66)">
          {[
            { y: 0, t: '1. 國土保育地區（高山水源生態）', c: 'fill-emerald-500/20 stroke-emerald-600' },
            { y: 40, t: '2. 海洋資源地區（海岸海域永續）', c: 'fill-cyan-500/20 stroke-cyan-600' },
            { y: 80, t: '3. 農業發展地區（糧食安全農地）', c: 'fill-amber-500/20 stroke-amber-600' },
            { y: 120, t: '4. 城鄉發展地區（集約成長建設）', c: 'fill-indigo-500/20 stroke-indigo-600' },
          ].map((z, i) => (
            <g key={i} transform={`translate(0, ${z.y})`}>
              <rect width="168" height="32" rx="6" className={z.c} strokeWidth="1.4" />
              <text x="8" y="20" className="fill-slate-800 dark:fill-slate-100 text-[9.2px] font-bold">{z.t}</text>
            </g>
          ))}
        </g>
        <text x="204" y="256" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-300 text-[10px] font-mono font-bold">
          韋伯工業區位：水泥廠（石灰石燒失 CO₂ 減重）＝原料區位 ； 預拌混凝土廠＝市場區位！
        </text>
      </LeftCard>
      <RightCard title="成長極擴散 vs 回流 ＆ 科技廊帶" subtitle="區域均衡與高科技廠房基礎設施">
        <StepRow y={54} num="極" label="擴散效應（帶動周邊） vs 回流效應" detail="核心都會吸乾偏鄉青壯人口與資金即為「回流(磁吸)效應」" tone="rose" />
        <StepRow y={112} num="晶" label="半導體晶圓廠防微振格柵梁（Waffle）" detail="EUV 曝光機怕微米振動、怕壓降斷電與缺水風險" tone="indigo" />
        <StepRow y={170} num="計" label="《國土計畫法》功能分區指導原則" detail="以計畫引導使用，杜絕零星農地違章工廠蔓延" tone="emerald" />
      </RightCard>
    </g>
  ),

  'geography/environmental-issues': () => (
    <g>
      <LeftCard title="海綿城市低衝擊開發（LID）削峰延時水文歷線 ＆ 土壤液化" subtitle="開發後不透水化使洪峰變尖變早；導入透水鋪面與滯洪池可「削弱洪峰並延後到達」！">
        {/* Hydrograph curves before/after LID */}
        <line x1="54" y1="216" x2="365" y2="216" stroke="currentColor" className="text-slate-500" strokeWidth="1.5" />
        <line x1="54" y1="216" x2="54" y2="56" stroke="currentColor" className="text-slate-500" strokeWidth="1.5" />
        {/* Impervious urban flood peak */}
        <path d="M 58 212 Q 105 205 138 68 Q 172 200 285 212" fill="none" stroke="currentColor" strokeWidth="3" className="text-rose-600" />
        {/* Sponge city LID hydrograph */}
        <path d="M 58 212 Q 135 206 205 132 Q 275 198 355 212" fill="none" stroke="currentColor" strokeWidth="3" strokeDasharray="6 3" className="text-emerald-600" />
        <text x="148" y="64" className="fill-rose-700 dark:fill-rose-300 text-[10px] font-mono font-bold">傳統水泥都市（高洪峰致淹水!）</text>
        <text x="218" y="124" className="fill-emerald-700 dark:fill-emerald-300 text-[10px] font-mono font-bold">海綿城市 LID（削峰＋延後!）</text>
        <text x="355" y="232" textAnchor="end" className="fill-slate-500 text-[9.5px] font-mono">時間 t</text>
        <text x="60" y="54" className="fill-slate-500 text-[9.5px] font-mono">逕流量 Q</text>
        <text x="204" y="256" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-300 text-[10px] font-mono font-bold">
          合理化公式：洪峰流量 Q = (1/360) · C · I · A （透水鋪面降低逕流係數 C！）
        </text>
      </LeftCard>
      <RightCard title="土壤液化三要件 ＆ 地層下陷辨析" subtitle="台灣沿海平原與盆地必考防災題">
        <StepRow y={54} num="液" label="土壤液化三條件：疏鬆砂＋高水位＋強震" detail="孔隙水壓飆升使有效應力歸零；基樁打入岩盤＋連續壁防禦" tone="rose" />
        <StepRow y={112} num="陷" label="地層下陷：長期超抽地下水（不可逆!）" detail="黏土層脫水壓密永遠無法回彈，引發海水倒灌與鹽化" tone="amber" />
        <StepRow y={170} num="評" label="環評（EIA）與出流管制法定滯洪池" detail="大型建築基地須自設雨水貯集滯洪池達成逕流零增量" tone="emerald" />
      </RightCard>
    </g>
  ),

  'geography/gis': () => (
    <g>
      <LeftCard title="GIS 多圖層疊圖選址分析（Overlay）＆ 向量 vs 網格資料結構" subtitle="套疊「坡度 &lt; 30% ∩ 避開斷層環域 Buffer ∩ 鄰近幹道」篩出安全建築基地！">
        {/* Stacked isometric GIS layers */}
        {[
          { y: 66, label: '圖層 1：活動斷層 50m 禁建環域 (Buffer)', cls: 'fill-rose-500/20 stroke-rose-600' },
          { y: 118, label: '圖層 2：DEM 數值地形坡度網格 (Raster)', cls: 'fill-amber-500/20 stroke-amber-600' },
          { y: 170, label: '疊圖結果：最佳安全建築選址區 (Overlay✓)', cls: 'fill-emerald-500/25 stroke-emerald-600' },
        ].map((ly, idx) => (
          <g key={idx} transform={`translate(54, ${ly.y})`}>
            <polygon points="0,24 95,0 295,12 200,36" className={ly.cls} strokeWidth="2" />
            <text x="148" y="48" textAnchor="middle" className="fill-slate-800 dark:fill-slate-200 text-[10px] font-bold">{ly.label}</text>
          </g>
        ))}
        <text x="204" y="256" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-300 text-[10px] font-mono font-bold">
          DEM/DTM（裸露地表高程，算土方） vs DSM（含建物樹冠表面高，算日照陰影與視域!）
        </text>
      </LeftCard>
      <RightCard title="GIS 四大空間分析工具秒選指南" subtitle="看題目關鍵動詞一秒對號入座！">
        <StepRow y={54} num="數" label="向量（點線面地籍路網） vs 網格（像素）" detail="連續變化高程、坡度、氣溫、衛星影像一律用網格 Raster!" tone="blue" />
        <StepRow y={112} num="域" label="環域 Buffer（距離某物 X 公尺範圍）" detail="捷運站 500m 步行圈、河川行水區禁建帶、噪音影響帶" tone="amber" />
        <StepRow y={170} num="視" label="視域分析 Viewshed ＆ 路網最佳路徑" detail="瞭望台／基地台可見範圍用視域；消防車救災用路網分析" tone="emerald" />
      </RightCard>
    </g>
  ),

  // ───────────── CIVICS (6 TOPICS) ─────────────
  'civics/citizenship-community': () => (
    <g>
      <LeftCard title="謝里・安斯汀「公民參與階梯」與社區營造參與式設計" subtitle="從形式告知（假參與）邁向實質夥伴關係與公民自主決策！">
        {[
          { y: 62, w: 336, lv: '高階：公民權力（夥伴協力 / 參與式預算 / 社區共管）', cls: 'fill-emerald-500/25 stroke-emerald-600' },
          { y: 120, w: 268, lv: '中階：象徵性參與（公聽會告知 / 象徵性徵詢意見）', cls: 'fill-amber-500/22 stroke-amber-600' },
          { y: 178, w: 200, lv: '低階：非參與（由上而下操弄政令宣導）', cls: 'fill-slate-400/25 stroke-slate-500' },
        ].map((r, i) => (
          <g key={i} transform={`translate(36, ${r.y})`}>
            <rect width={r.w} height="44" rx="8" className={r.cls} strokeWidth="1.8" />
            <text x="14" y="26" className="fill-slate-900 dark:fill-white text-[10.2px] font-bold">{r.lv}</text>
          </g>
        ))}
        <text x="204" y="254" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-300 text-[10px] font-mono font-bold">
          三代人權演進：自由權（消極防國家侵害）→ 參政社會權 → 環境與文化發展集體人權！
        </text>
      </LeftCard>
      <RightCard title="審議式民主與公共空間公民素養" subtitle="不只要投票，更要理性對話公共利益">
        <StepRow y={54} num="議" label="審議式民主（公民會議／設計工作坊）" detail="公園改造或社宅規劃前提供充分資訊，跨群體理性對話" tone="emerald" />
        <StepRow y={112} num="鄰" label="突破鄰避效應（NIMBY 嫌惡設施抗爭）" detail="透過資訊公開、環境監測與公益回饋共享化解對立" tone="amber" />
        <StepRow y={170} num="共" label="悲劇防範：共有財與公共空間維護" detail="騎樓淨空不違規佔用，兼顧私人財產權之社會義務" tone="blue" />
      </RightCard>
    </g>
  ),

  'civics/law-life': () => (
    <g>
      <LeftCard title="凱爾森法規範位階金字塔 ＆ 行政法「比例原則」三階層審查" subtitle="下位法牴觸上位法無效：憲法 ＞ 法律（建築法） ＞ 命令（建築技術規則）！">
        {/* Kelsen Pyramid */}
        <polygon points="204,52 72,226 336,226" className="fill-indigo-500/12 stroke-indigo-600" strokeWidth="2.2" />
        <line x1="128" y1="152" x2="280" y2="152" stroke="currentColor" strokeWidth="1.8" className="text-indigo-500" />
        <line x1="166" y1="102" x2="242" y2="102" stroke="currentColor" strokeWidth="1.8" className="text-indigo-500" />
        <text x="204" y="88" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 text-[11px] font-bold">憲法</text>
        <text x="204" y="132" textAnchor="middle" className="fill-indigo-900 dark:fill-indigo-200 text-[10.5px] font-bold">法律（法/律/條例/通則，立法院三讀）</text>
        <text x="204" y="186" textAnchor="middle" className="fill-emerald-800 dark:fill-emerald-200 text-[10.5px] font-bold">法規命令（規程/規則/細則/辦法/標準）</text>
        <text x="204" y="212" textAnchor="middle" className="fill-slate-600 dark:fill-slate-300 text-[9.5px] font-mono">例：《建築法》授權訂定《建築技術規則》</text>
        <text x="204" y="254" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-300 text-[10px] font-mono font-bold">
          建築執照屬於「行政處分」：不服處分救濟程序為「訴願 → 行政訴訟」！
        </text>
      </LeftCard>
      <RightCard title="比例原則、民法契約與刑法罪刑法定" subtitle="工程爭議與日常法治核心觀念">
        <StepRow y={54} num="比" label="比例原則：適當性 → 必要性 → 衡量性" detail="不可用大砲打小鳥！必要性＝選擇侵害最小之手段" tone="rose" />
        <StepRow y={112} num="民" label="工程承攬契約與鄰損侵權賠償" detail="基於契約自由與誠實信用原則；施工損鄰負民事損害賠償" tone="blue" />
        <StepRow y={170} num="刑" label="罪刑法定與無罪推定原則" detail="偷工減料違背建築術成規致生公共危險，另負刑責！" tone="amber" />
      </RightCard>
    </g>
  ),

  'civics/economy-sustainability': () => (
    <g>
      <LeftCard title="負外部性（營建碳排與污染）市場失靈與「外部成本內部化」" subtitle="私人未付碳排代價導致生產過量；課徵碳費／皮古稅使私人成本上移至社會真實成本！">
        <line x1="56" y1="224" x2="358" y2="224" stroke="currentColor" className="text-slate-500" strokeWidth="1.5" />
        <line x1="56" y1="224" x2="56" y2="54" stroke="currentColor" className="text-slate-500" strokeWidth="1.5" />
        {/* Demand D, Private Supply PMC, Social Supply SMC */}
        <line x1="78" y1="74" x2="318" y2="206" stroke="currentColor" strokeWidth="2.5" className="text-blue-600" />
        <line x1="88" y1="206" x2="322" y2="92" stroke="currentColor" strokeWidth="2.5" className="text-amber-600" />
        <line x1="72" y1="168" x2="296" y2="58" stroke="currentColor" strokeWidth="2.8" className="text-rose-600" />
        <circle cx="204" cy="144" r="4.5" className="fill-amber-600" />
        <circle cx="174" cy="127" r="5" className="fill-emerald-600" />
        <text x="302" y="64" className="fill-rose-700 dark:fill-rose-300 text-[10px] font-mono font-bold">社會成本 SMC (含碳費)</text>
        <text x="326" y="96" className="fill-amber-700 dark:fill-amber-300 text-[10px] font-mono font-bold">私人 PMC</text>
        <text x="322" y="208" className="fill-blue-700 dark:fill-blue-300 text-[10px] font-mono font-bold">需求 D</text>
        <text x="166" y="114" textAnchor="end" className="fill-emerald-700 dark:fill-emerald-300 text-[10px] font-mono font-bold">社會最適點 E*</text>
        <text x="204" y="254" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-300 text-[10px] font-mono font-bold">
          機會成本（Opportunity Cost）＝放棄的諸多選擇中「價值最高者」！
        </text>
      </LeftCard>
      <RightCard title="GDP 福祉盲點、公共財與永續經濟" subtitle="綠色 GDP 扣除自然資源耗竭與污染折損">
        <StepRow y={54} num="財" label="純公共財：不可排他性 ＋ 共享性(非敵對)" detail="如國防、燈塔、防洪堤防，易生搭便車問題須由政府提供" tone="blue" />
        <StepRow y={112} num="ESG" label="企業永續 ESG 與循環經濟" detail="環境(E)、社會責任(S)、公司治理(G)納入營建投資評估" tone="emerald" />
        <StepRow y={170} num="央" label="通貨膨脹與央行利率政策影響房市" detail="升息提高建商融資與房貸成本，有助抑制資產過熱" tone="amber" />
      </RightCard>
    </g>
  ),

  'civics/society-culture': () => (
    <g>
      <LeftCard title="布赫迪厄四大資本 ＆「空間正義・文化多元包容」城市設計" subtitle="警惕敵意建築（如防遊民尖刺座椅），打造性別平權、族群尊重與全齡友善空間！">
        {[
          { x: 24, y: 60, t: '經濟與社會資本差距', d: '影響居住區位選擇，須靠社會住宅與大眾運輸弭平空間隔離', cls: 'fill-blue-500/15 stroke-blue-600' },
          { x: 214, y: 60, t: '文化多元主義（沙拉碗）', d: '取代強迫同化大熔爐！尊重原民傳統領域、新住民與客家聚落空間', cls: 'fill-emerald-500/15 stroke-emerald-600' },
          { x: 24, y: 156, t: '性別主流化與友善空間', d: '提高女廁廁格比例、設性別友善廁所、改善暗巷照明消除治安死角', cls: 'fill-rose-500/15 stroke-rose-600' },
          { x: 214, y: 156, t: '社會流動與實質平等', d: '對結構弱勢給予合理差別待遇（積極平權措施），達成真正立足點平等', cls: 'fill-amber-500/15 stroke-amber-600' },
        ].map((c, idx) => (
          <g key={idx} transform={`translate(${c.x}, ${c.y})`}>
            <rect width="174" height="82" rx="10" className={c.cls} strokeWidth="1.6" />
            <text x="12" y="24" className="fill-slate-900 dark:fill-white text-[10.5px] font-bold">{c.t}</text>
            <text x="12" y="48" className="fill-slate-600 dark:fill-slate-300 text-[8.8px]">{c.d.slice(0, 15)}</text>
            <text x="12" y="64" className="fill-slate-600 dark:fill-slate-300 text-[8.8px]">{c.d.slice(15)}</text>
          </g>
        ))}
      </LeftCard>
      <RightCard title="形式平等 vs 實質平等（統測必考!）" subtitle="齊頭式假平等 vs 因人制宜真公平">
        <StepRow y={54} num="實" label="女廁與男廁面積相同卻大排長龍？" detail="齊頭面積是形式平等；依生理需求增加女廁間數才是實質平等!" tone="rose" />
        <StepRow y={112} num="媒" label="媒體識讀與打破刻板印象" detail="查證資訊來源、辨識演算法同溫層與商業置入偏見" tone="blue" />
        <StepRow y={170} num="全" label="全球在地化（Glocalization）" detail="跨國建築語彙結合在地氣候材料（如台北101融合竹節吉祥意象）" tone="emerald" />
      </RightCard>
    </g>
  ),

  'civics/labor-ethics': () => (
    <g>
      <LeftCard title="營建職安風險控制倒金字塔（Hierarchy of Controls）" subtitle="優先從源頭消除墜落風險（護欄安全網），個人安全帽背負式安全帶是最後一道防線！">
        {[
          { y: 58, w: 344, x: 32, t: '1. 消除與替代（最有效! 地面預鑄組裝減少高空作業）', cls: 'fill-emerald-500/28 stroke-emerald-600' },
          { y: 108, w: 284, x: 62, t: '2. 工程控制（開口部設堅固護欄、護蓋、防墜安全網）', cls: 'fill-blue-500/24 stroke-blue-600' },
          { y: 158, w: 224, x: 92, t: '3. 行政管理（教育訓練、高溫熱危害休息、上鎖掛牌）', cls: 'fill-amber-500/24 stroke-amber-600' },
          { y: 208, w: 164, x: 122, t: '4. 個人防護具 PPE（安全帽、安全帶）', cls: 'fill-rose-500/24 stroke-rose-600' },
        ].map((lv, idx) => (
          <g key={idx} transform={`translate(${lv.x}, ${lv.y})`}>
            <rect width={lv.w} height="38" rx="7" className={lv.cls} strokeWidth="1.6" />
            <text x={lv.w / 2} y="23" textAnchor="middle" className="fill-slate-900 dark:fill-white text-[9.5px] font-bold">{lv.t}</text>
          </g>
        ))}
      </LeftCard>
      <RightCard title="勞動三權、勞基法底線與工程倫理" subtitle="工程倫理第一天條：公眾生命安全至上！">
        <StepRow y={54} num="權" label="勞動三權：團結權 → 協商權 → 爭議權" detail="組織工會、簽訂團體協約、合法罷工爭取勞動尊嚴" tone="blue" />
        <StepRow y={112} num="基" label="《勞基法》工時工資與職災補償" detail="實習生與打工族同受基本工資、勞保職災保險與加班費保障" tone="emerald" />
        <StepRow y={170} num="倫" label="建築師與技師簽證專業倫理" detail="嚴禁借牌掛名簽證、收受建材回扣或隱匿結構瑕疵！" tone="rose" />
      </RightCard>
    </g>
  ),

  'civics/environment-policy': (m) => (
    <g>
      <LeftCard title="臺灣 2050 淨零排放路徑 ＆ 綠建築九大指標（EEWH）× 建築能效 BERS" subtitle="淨零排放（Net Zero）＝ 人為溫室氣體減量極小化 ＋ 自然／科技碳匯負碳移除抵銷 = 0！">
        {/* 4 EEWH categories */}
        {[
          { x: 24, y: 64, tag: 'E 生態 Ecology (3項)', sub: '生物多樣性 · 綠化量 · 基地保水(必!)', cls: 'fill-emerald-500/18 stroke-emerald-600' },
          { x: 214, y: 64, tag: 'E 節能 Energy (1項核心)', sub: '日常節能指標（外殼+空調照明,必!）', cls: 'fill-amber-500/18 stroke-amber-600' },
          { x: 24, y: 148, tag: 'W 減廢 Waste (2項)', sub: 'CO₂減量 · 廢棄物減量（低碳循環）', cls: 'fill-blue-500/18 stroke-blue-600' },
          { x: 214, y: 148, tag: 'H 健康 Health (3項)', sub: '室內環境 · 水資源(必!) · 污水垃圾(必!)', cls: 'fill-teal-500/18 stroke-teal-600' },
        ].map((g, idx) => (
          <g key={idx} transform={`translate(${g.x}, ${g.y})`}>
            <rect width="174" height="68" rx="10" className={g.cls} strokeWidth="1.6" />
            <text x="12" y="25" className="fill-slate-900 dark:fill-white text-[10.5px] font-bold">{g.tag}</text>
            <text x="12" y="48" className="fill-slate-600 dark:fill-slate-300 text-[9px]">{g.sub}</text>
          </g>
        ))}
        <line x1="48" y1="244" x2="360" y2="244" stroke="currentColor" strokeWidth="2" className="text-indigo-500" markerEnd={`url(#${m.arrowBlue})`} />
        <text x="204" y="262" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-300 text-[10px] font-mono font-bold">
          《氣候變遷因應法》入法 2050 淨零目標、碳費專款專用與公正轉型！
        </text>
      </LeftCard>
      <RightCard title="國際氣候公約與建築能效 1+ 級" subtitle="從京都議定書、巴黎協定到 CBAM 碳邊境">
        <StepRow y={54} num="1+" label="建築能效標示 BERS（1~7 級與 1+ 級）" detail="1+ 級為近零碳建築(NZEB)，再搭綠電達成淨零建築!" tone="emerald" />
        <StepRow y={112} num="巴" label="《巴黎協定》控溫目標 ＜ 2°C (力求1.5°C)" detail="各國每五年提交國家自定貢獻（NDC）自主減碳承諾" tone="blue" />
        <StepRow y={170} num="公" label="公正轉型（Just Transition）精神" detail="減碳轉型過程不遺落受衝擊傳統勞工、原民與弱勢社區" tone="amber" />
      </RightCard>
    </g>
  ),

  // ───────────── EXTENSIONS (7 TOPICS) ─────────────
  'extensions/construction-methods': (m) => (
    <g>
      <LeftCard title="都會深開挖「逆打工法（Top-Down）」＆《營建技術實習》砌磚粉刷工藝" subtitle="先打連續壁與基樁柱，完成 1F 樓板作為超強水平支撐後，地上往上蓋、地下同步往下挖！">
        {/* Diaphragm walls + 1FL slab + Up/Down arrows */}
        <line x1="36" y1="138" x2="372" y2="138" stroke="currentColor" strokeWidth="3.5" className="text-emerald-700" />
        <rect x="78" y="138" width="14" height="106" className="fill-slate-600" />
        <rect x="316" y="138" width="14" height="106" className="fill-slate-600" />
        {/* 1FL slab */}
        <rect x="92" y="134" width="224" height="10" className="fill-indigo-600" />
        {/* Superstructure going UP */}
        <rect x="118" y="84" width="172" height="50" className="fill-blue-500/18 stroke-blue-600" strokeWidth="1.8" />
        <line x1="204" y1="120" x2="204" y2="66" stroke="currentColor" strokeWidth="2.8" className="text-blue-600" markerEnd={`url(#${m.arrowBlue})`} />
        {/* Substructure going DOWN */}
        <rect x="92" y="144" width="224" height="68" className="fill-amber-500/18 stroke-amber-600" strokeDasharray="4 2" />
        <line x1="204" y1="154" x2="204" y2="206" stroke="currentColor" strokeWidth="2.8" className="text-rose-600" markerEnd={`url(#${m.arrowRose})`} />
        <text x="214" y="76" className="fill-blue-700 dark:fill-blue-300 text-[10px] font-mono font-bold">地上層同步往上築</text>
        <text x="214" y="198" className="fill-rose-700 dark:fill-rose-300 text-[10px] font-mono font-bold">地下層同步往下挖</text>
        <text x="58" y="192" textAnchor="middle" className="fill-slate-700 dark:fill-slate-300 text-[9.5px] font-bold">連續壁擋土止水</text>
        <text x="204" y="262" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-300 text-[10px] font-mono font-bold">
          營建實習紅磚疊砌：必錯縫交丁（禁通縫!）、灰縫 10mm、每日砌高 ≤ 1.2~1.5m
        </text>
      </LeftCard>
      <RightCard title="構造體系（RC / SS / SRC）與配筋要點" subtitle="高工實習工廠與現場監造必備常識">
        <StepRow y={54} num="箍" label="耐震柱端加密區 135° 彎鉤箍筋" detail="圍束核心混凝土防壓碎並防主筋挫屈（非 90° 易繃開!）" tone="rose" />
        <StepRow y={112} num="模" label="拆模順序：側模先拆、梁版底模晚拆！" detail="柱牆側模不承重可早拆養護；大跨度梁底須待強度達標" tone="amber" />
        <StepRow y={170} num="放" label="工地放樣：龍門板（水準樁）與墨斗彈線" detail="將圖面柱心基準線 1:1 精準標定於基地地面" tone="emerald" />
      </RightCard>
    </g>
  ),

  'extensions/spatial-design': (m) => (
    <g>
      <LeftCard title="建築設計機能泡泡圖（Bubble Diagram）＆ 人體工學黃金尺度" subtitle="先理順「公私動線分區與基地日照風向」，再落實牆柱結構模矩！">
        {/* Bubble diagram */}
        <circle cx="96" cy="148" r="34" className="fill-amber-500/25 stroke-amber-600" strokeWidth="2" />
        <circle cx="196" cy="116" r="44" className="fill-blue-500/22 stroke-blue-600" strokeWidth="2" />
        <circle cx="196" cy="202" r="30" className="fill-emerald-500/22 stroke-emerald-600" strokeWidth="2" />
        <circle cx="312" cy="148" r="38" className="fill-purple-500/22 stroke-purple-600" strokeWidth="2" />
        <line x1="130" y1="138" x2="154" y2="128" stroke="currentColor" strokeWidth="3" className="text-indigo-600" markerEnd={`url(#${m.arrowBlue})`} />
        <line x1="196" y1="160" x2="196" y2="172" stroke="currentColor" strokeWidth="2.5" className="text-emerald-600" />
        <line x1="240" y1="128" x2="274" y2="138" stroke="currentColor" strokeDasharray="4 3" className="text-slate-500" />
        <text x="96" y="152" textAnchor="middle" className="fill-amber-900 dark:fill-amber-100 text-[10.5px] font-bold">玄關入口</text>
        <text x="196" y="120" textAnchor="middle" className="fill-blue-900 dark:fill-blue-100 text-[11px] font-bold">客餐廳(公共核)</text>
        <text x="196" y="206" textAnchor="middle" className="fill-emerald-900 dark:fill-emerald-100 text-[10px] font-bold">廚房後勤</text>
        <text x="312" y="152" textAnchor="middle" className="fill-purple-900 dark:fill-purple-100 text-[10.5px] font-bold">臥室(私密區)</text>
        <text x="204" y="260" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-300 text-[10px] font-mono font-bold">
          樓梯舒適步幅公式：2R（兩倍級高）+ T（級深） ≈ 60 ~ 64 cm！
        </text>
      </LeftCard>
      <RightCard title="人體尺度與空間感受心理學" subtitle="設計課評圖必問尺寸常識">
        <StepRow y={54} num="尺" label="住宅常用家具與通道硬尺寸" detail="書桌高 75cm · 座椅高 42~45cm · 單人走道 ≥ 90cm" tone="blue" />
        <StepRow y={112} num="梯" label="法規樓梯安全極限" detail="住宅級高 R ≤ 20cm(公眾≤18cm)、級深 T ≥ 24~26cm" tone="emerald" />
        <StepRow y={170} num="序" label="欲揚先抑（壓縮玄關 → 挑高大廳）" detail="運用天花高低與光影明暗對比創造戲劇性空間序列" tone="indigo" />
      </RightCard>
    </g>
  ),

  'extensions/cad-bim': (m) => (
    <g>
      <LeftCard title="高二《建築製圖／施工圖實習》CAD 轉 BIM 全流程協作鏈" subtitle="從 2D 線條圖塊躍升為「帶材質、構造層與工程數量的 3D 智慧建築元件」！">
        {[
          { x: 24, t: '2D CAD 施工圖底蘊', d: '軸線網格 · 門窗表\n樓梯浴廁防水大樣', cls: 'fill-blue-500/16 stroke-blue-600' },
          { x: 154, t: '3D BIM 參數化建模', d: '牆版梁柱族群 Family\n平立剖明細表自動同步', cls: 'fill-indigo-500/18 stroke-indigo-600' },
          { x: 284, t: '4D~7D 雲端協作 CDE', d: '工序模擬 · 碰撞清零\n綠能日照模擬與維運', cls: 'fill-emerald-500/18 stroke-emerald-600' },
        ].map((st, idx) => {
          const [d1, d2] = st.d.split('\n');
          return (
            <g key={idx} transform={`translate(${st.x}, 76)`}>
              <rect width="108" height="118" rx="10" className={st.cls} strokeWidth="1.8" />
              <text x="54" y="30" textAnchor="middle" className="fill-slate-900 dark:fill-white text-[10px] font-bold">{st.t}</text>
              <text x="54" y="66" textAnchor="middle" className="fill-slate-600 dark:fill-slate-300 text-[8.8px]">{d1}</text>
              <text x="54" y="88" textAnchor="middle" className="fill-indigo-700 dark:fill-indigo-300 text-[8.8px] font-bold">{d2}</text>
              {idx < 2 && (
                <line x1="110" y1="59" x2="126" y2="59" stroke="currentColor" strokeWidth="2.2" className="text-indigo-500" markerEnd={`url(#${m.arrowBlue})`} />
              )}
            </g>
          );
        })}
        <text x="204" y="246" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-300 text-[10px] font-mono font-bold">
          單一真實資料環境（CDE）：結構改一根梁深，建築淨高檢討與機電穿梁同步亮燈預警！
        </text>
      </LeftCard>
      <RightCard title="數位雙生與點雲掃描實務" subtitle="現代建築事務所核心數位戰力">
        <StepRow y={54} num="族" label="BIM 參數化族群（Parametric Family）" detail="輸入寬高厚度參數即可一鍵衍生整套規格門窗組件" tone="indigo" />
        <StepRow y={112} num="雲" label="3D 雷射掃描（LiDAR 點雲逆向建模）" detail="毫米級掃描古蹟或既有老屋現況轉為 HBIM 模型" tone="emerald" />
        <StepRow y={170} num="渲" label="即時光跡追蹤渲染與 VR 沉浸體驗" detail="透過 Enscape / Twinmotion 讓業主戴眼鏡走進未來空間" tone="amber" />
      </RightCard>
    </g>
  ),

  'extensions/parametric-design-and-ai-assisted-competition': (m) => (
    <g>
      <LeftCard title="Grasshopper 視覺化參數節點流 ＆ AI 輔助競圖設計閉迴路" subtitle="輸入參數滑桿 (Sliders) → 幾何生成運算器 → 環境日照結構分析 → 最佳化迭代！">
        {/* Node graph */}
        <rect x="28" y="84" width="92" height="44" rx="8" className="fill-amber-500/22 stroke-amber-600" strokeWidth="1.8" />
        <text x="74" y="110" textAnchor="middle" className="fill-amber-900 dark:fill-amber-100 text-[10px] font-mono font-bold">Number Slider</text>
        <rect x="28" y="152" width="92" height="44" rx="8" className="fill-blue-500/22 stroke-blue-600" strokeWidth="1.8" />
        <text x="74" y="178" textAnchor="middle" className="fill-blue-900 dark:fill-blue-100 text-[10px] font-mono font-bold">Sun Vector</text>
        <rect x="162" y="112" width="104" height="58" rx="10" className="fill-indigo-600" />
        <text x="214" y="138" textAnchor="middle" className="fill-white text-[10.5px] font-mono font-bold">Attractor</text>
        <text x="214" y="156" textAnchor="middle" className="fill-indigo-200 text-[9px] font-mono">動態遮陽百葉演算</text>
        <rect x="302" y="102" width="84" height="78" rx="10" className="fill-emerald-500/22 stroke-emerald-600" strokeWidth="2" />
        <text x="344" y="136" textAnchor="middle" className="fill-emerald-900 dark:fill-emerald-100 text-[10px] font-bold">最佳化立面</text>
        <text x="344" y="156" textAnchor="middle" className="fill-emerald-700 text-[9px] font-mono">減熱 -42%</text>
        <path d="M 120 106 C 142 106, 142 132, 162 132" fill="none" stroke="currentColor" strokeWidth="2" className="text-amber-600" />
        <path d="M 120 174 C 142 174, 142 152, 162 152" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-600" />
        <line x1="266" y1="141" x2="300" y2="141" stroke="currentColor" strokeWidth="2.2" className="text-emerald-600" markerEnd={`url(#${m.arrowEmerald})`} />
        <text x="204" y="252" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-300 text-[10px] font-mono font-bold">
          AI 輔助鐵律：AI 發散早期材質光影靈感，但「結構合理性、法規動線與原創性」必由人掌控！
        </text>
      </LeftCard>
      <RightCard title="參數化製造（數位構築）與競圖倫理" subtitle="從螢幕曲面無縫走向雷切與 CNC 實體">
        <StepRow y={54} num="展" label="曲面展開攤平（Unroll / Waffle 格柵）" detail="將自由雙曲面切片編號，輸出 2D 雷射切割檔精準卡榫組裝" tone="indigo" />
        <StepRow y={112} num="析" label="性能導向設計（Ladybug 環境模擬）" detail="用真實氣象檔跑全年輻射熱與風場，讓造型有科學根據" tone="emerald" />
        <StepRow y={170} num="誠" label="學生競圖與專題學術誠信" detail="老實揭露 AI 協作範圍，絕不拿純 AI 假圖冒充平剖面設計" tone="rose" />
      </RightCard>
    </g>
  ),

  'extensions/portfolio-models': () => (
    <g>
      <LeftCard title="建築實體模型 45° 斜角無縫接合（Miter Joint）與材料選配" subtitle="倒 45° 斜邊或留「板厚退縮口（Rabbet）」消除醜陋板材夾心黑邊！">
        {/* Bad butt joint vs Pro 45-deg miter / rabbet joint */}
        <g transform="translate(42, 76)">
          <rect x="0" y="0" width="22" height="106" className="fill-slate-300 stroke-slate-600" strokeWidth="1.8" />
          <rect x="22" y="0" width="96" height="22" className="fill-rose-500/25 stroke-rose-600" strokeWidth="1.8" />
          <line x1="22" y1="0" x2="22" y2="22" stroke="currentColor" strokeWidth="3" className="text-rose-600" />
          <text x="58" y="76" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 text-[10px] font-bold">✗ 平接露出厚夾心邊</text>
        </g>
        <g transform="translate(222, 76)">
          <polygon points="0,0 22,22 22,106 0,106" className="fill-emerald-500/25 stroke-emerald-600" strokeWidth="2" />
          <polygon points="0,0 118,0 118,22 22,22" className="fill-teal-500/25 stroke-teal-600" strokeWidth="2" />
          <text x="64" y="76" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[10.5px] font-bold">✓ 45° 斜切角乾淨俐落!</text>
        </g>
        <text x="204" y="232" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-300 text-[10.5px] font-mono font-bold">
          模型刀永遠保持 30° 銳利新刀片，「輕劃 3~4 刀切斷」勝過一刀硬壓撕裂紙邊！
        </text>
      </LeftCard>
      <RightCard title="草模 vs 正模材料與攝影打光術" subtitle="用手機微距鏡頭把模型拍出大師建築感">
        <StepRow y={54} num="材" label="風扣板（草模推敲） vs 椴木／雪弗板／灰卡" detail="全素白模或單一木色最能純粹凸顯光影體塊與空間比例!" tone="amber" />
        <StepRow y={112} num="膠" label="保麗龍膠／白膠／相片膠不溢膠秘訣" detail="牙籤沾微量膠點在內側，避免UHU牽絲弄髒外立面" tone="blue" />
        <StepRow y={170} num="光" label="單一斜向主光源模擬真實太陽角度" detail="鏡頭降至「模型小人眼睛高度(約1.6cm@1:100)」拍室內透視!" tone="emerald" />
      </RightCard>
    </g>
  ),

  'extensions/portfolio-and-design-discourse': () => (
    <g>
      <LeftCard title="建築升學作品集跨頁網格系統（Grid Layout）與黃金留白節奏" subtitle="一跨頁一核心焦點：主視覺大圖占 60% ＋ 演變分析圖 Diagram ＋ 精煉短文（留白 ≥ 25%）！">
        {/* Double-page spread wireframe */}
        <rect x="34" y="64" width="168" height="164" rx="4" className="fill-white dark:fill-slate-800 stroke-slate-400" strokeWidth="1.8" />
        <rect x="202" y="64" width="168" height="164" rx="4" className="fill-white dark:fill-slate-800 stroke-slate-400" strokeWidth="1.8" />
        {/* Left page: Title + 3 step diagrams + concise text */}
        <rect x="48" y="78" width="96" height="14" rx="3" className="fill-indigo-600" />
        <rect x="48" y="100" width="136" height="28" rx="3" className="fill-slate-200 dark:fill-slate-700" />
        {[0, 1, 2].map((d) => (
          <rect key={d} x={48 + d * 47} y="142" width="40" height="40" rx="5" className="fill-amber-500/25 stroke-amber-600" />
        ))}
        <text x="116" y="206" textAnchor="middle" className="fill-amber-700 dark:fill-amber-300 text-[9px] font-mono font-bold">量體生成 3 步 Diagram</text>
        {/* Right page: Hero Sectional Perspective */}
        <rect x="216" y="78" width="140" height="104" rx="6" className="fill-emerald-500/22 stroke-emerald-600" strokeWidth="1.6" />
        <text x="286" y="134" textAnchor="middle" className="fill-emerald-900 dark:fill-emerald-100 text-[10.5px] font-bold">主視覺剖面透視圖</text>
        <rect x="216" y="192" width="140" height="22" rx="4" className="fill-blue-500/15 stroke-blue-500" />
        <text x="286" y="207" textAnchor="middle" className="fill-blue-800 dark:fill-blue-200 text-[9px] font-mono">1F 平面圖 ＋ 指北針比例尺</text>
        <text x="204" y="256" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-300 text-[10px] font-mono font-bold">
          全書鎖定 1~2 種強調色與統一字族，審查教授翻閱 30 秒內立刻抓到設計亮點！
        </text>
      </LeftCard>
      <RightCard title="設計論述三段式 ＆ 甄選面試實戰" subtitle="科技校院建築系二階備審面試心法">
        <StepRow y={54} num="Why" label="基地議題痛點（你看見什麼問題？）" detail="如老街日照幽暗、社區缺乏高齡交誼角落等真實觀察" tone="rose" />
        <StepRow y={112} num="How" label="空間操作策略（用3張小圖演給教授看）" detail="切開天井引光、退縮騎樓連通綠帶、錯層視線對話" tone="blue" />
        <StepRow y={170} num="省" label="誠實反思與專題分工說明" detail="大方說出「若重做一次我會如何補強結構細節」最加分!" tone="emerald" />
      </RightCard>
    </g>
  ),

  'extensions/certification': (m) => (
    <g>
      <LeftCard title="建築科學生「技術士證照 → 技優甄審加分 → 國家專技高考建築師」職涯階梯" subtitle="高一高二拿丙級奠基、高二下至高三衝刺乙級（技優甄審最高加分 15%！）">
        {[
          { x: 24, y: 162, h: 64, tag: '高一~高二 · 丙級技術士', sub: '建築製圖應用(CAD/手繪)\n測量丙級 · 泥水砌磚丙級', cls: 'fill-blue-500/20 stroke-blue-600' },
          { x: 156, y: 112, h: 114, tag: '高二~高三 · 乙級技術士', sub: '工程測量乙級 / 製圖乙級\n★ 統測甄選技優加分 15%!', cls: 'fill-amber-500/24 stroke-amber-600' },
          { x: 288, y: 62, h: 164, tag: '大學畢業 · 國家專技高考', sub: '開業建築師 (6科滾動及格)\n土木/結構技師 · 公職高考', cls: 'fill-emerald-500/24 stroke-emerald-600' },
        ].map((lv, idx) => {
          const [s1, s2] = lv.sub.split('\n');
          return (
            <g key={idx} transform={`translate(${lv.x}, ${lv.y})`}>
              <rect width="104" height={lv.h} rx="10" className={lv.cls} strokeWidth="2" />
              <text x="52" y="24" textAnchor="middle" className="fill-slate-900 dark:fill-white text-[9.5px] font-bold">{lv.tag}</text>
              <text x="52" y="50" textAnchor="middle" className="fill-slate-700 dark:fill-slate-200 text-[8.5px]">{s1}</text>
              <text x="52" y="70" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 text-[8.5px] font-bold">{s2}</text>
              {idx < 2 && (
                <line x1="106" y1="32" x2="128" y2="12" stroke="currentColor" strokeWidth="2.2" className="text-indigo-500" markerEnd={`url(#${m.arrowBlue})`} />
              )}
            </g>
          );
        })}
        <text x="204" y="256" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-300 text-[10px] font-mono font-bold">
          高工建築科畢業亦具備報考普考／地方特考四等「建築工程、土木工程」公職資格！
        </text>
      </LeftCard>
      <RightCard title="丙／乙級術科檢定零失誤要訣" subtitle="時間分配與零分紅線檢核">
        <StepRow y={54} num="製" label="建築製圖應用檢定：先鎖柱網與樓高" detail="圖框圖頭零漏填、剖面線方向正確、出圖線寬輕重分明" tone="blue" />
        <StepRow y={112} num="測" label="測量術科檢定：定心整平快狠準" detail="時限內完成設站觀測，記錄簿嚴禁塗改（依規槓改簽名!）" tone="amber" />
        <StepRow y={170} num="師" label="建築師高考六大科目滾動保留制" detail="敷地、建築計畫與設計、構造、環控、結構、營建法規" tone="emerald" />
      </RightCard>
    </g>
  ),
};
