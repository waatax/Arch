import React from 'react';
import { LeftCard, RightCard, StepRow, type SceneRenderer } from './scenePrimitives';

export const languageScenes: Record<string, SceneRenderer> = {
  // ───────────── CHINESE (6 TOPICS) ─────────────
  'chinese/classical-literature': (m) => (
    <g>
      <LeftCard title="中國歷代韻文與散文流變時間軸（先秦 → 漢賦 → 唐詩 → 宋詞 → 元曲）" subtitle="韻文格律由嚴趨寬（詩→詞→曲）；散文由六朝駢文革新為唐宋古文！">
        {[
          { x: 24, era: '先秦', work: '詩經(北)/楚辭(南)', sub: '寫實四言 vs 浪漫兮字', cls: 'fill-amber-500/18 stroke-amber-600' },
          { x: 118, era: '兩漢六朝', work: '漢賦 / 六朝駢文', sub: '鋪采摛文、駢四儷六', cls: 'fill-indigo-500/18 stroke-indigo-600' },
          { x: 212, era: '唐代', work: '近體詩 / 古文運動', sub: '韓柳文以載道、律絕嚴整', cls: 'fill-rose-500/18 stroke-rose-600' },
          { x: 306, era: '宋元明清', work: '宋詞 / 元曲 / 小說', sub: '長短句詞牌→可加襯字', cls: 'fill-emerald-500/18 stroke-emerald-600' },
        ].map((st, idx) => (
          <g key={idx} transform={`translate(${st.x}, 78)`}>
            <rect width="84" height="118" rx="10" className={st.cls} strokeWidth="1.6" />
            <text x="42" y="28" textAnchor="middle" className="fill-slate-900 dark:fill-white text-[11px] font-bold">{st.era}</text>
            <text x="42" y="62" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-200 text-[9.5px] font-bold">{st.work}</text>
            <text x="42" y="92" textAnchor="middle" className="fill-slate-600 dark:fill-slate-300 text-[8.5px]">{st.sub}</text>
            {idx < 3 && (
              <line x1="85" y1="59" x2="93" y2="59" stroke="currentColor" strokeWidth="2" className="text-slate-400" markerEnd={`url(#${m.arrowBlue})`} />
            )}
          </g>
        ))}
        <text x="204" y="246" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-300 text-[10.5px] font-mono font-bold">
          唐宋古文八大家：唐2人（韓愈、柳宗元）＋ 宋6人（歐陽脩、三蘇、曾鞏、王安石）
        </text>
      </LeftCard>
      <RightCard title="108 課綱古文 15 篇空間與文心" subtitle="統測文言閱讀高頻核心選文">
        <StepRow y={54} num="亭" label="貶謫亭臺記：岳陽樓記／醉翁亭記" detail="范仲淹「先憂後樂」 vs 歐陽脩「與民同樂」" tone="rose" />
        <StepRow y={112} num="賦" label="宋代散文賦：蘇軾《赤壁賦》" detail="主客問答借江水明月「變與不變」體悟曠達超然" tone="blue" />
        <StepRow y={170} num="室" label="書齋家族記憶：歸有光《項脊軒志》" detail="藉百年老屋修葺與枇杷樹亭亭如蓋寄託三代悲喜" tone="emerald" />
      </RightCard>
    </g>
  ),

  'chinese/modern-literature': () => (
    <g>
      <LeftCard title="臺灣現代文學演進光譜 ＆ 書信信封標準格式" subtitle="信封中路「啟封詞」隨收信人輩分變化，嚴禁寫『敬啟』！">
        {/* Envelope diagram */}
        <g transform="translate(36, 62)">
          <rect width="142" height="176" rx="6" className="fill-amber-50/80 dark:fill-slate-800 stroke-slate-500" strokeWidth="1.8" />
          <text x="122" y="34" textAnchor="middle" className="fill-slate-600 dark:fill-slate-300 text-[9.5px] font-mono">收信地址(右)</text>
          <rect x="52" y="32" width="38" height="114" rx="4" className="fill-rose-500/15 stroke-rose-600" />
          <text x="71" y="68" textAnchor="middle" className="fill-rose-800 dark:fill-rose-200 text-[10.5px] font-bold">王大明</text>
          <text x="71" y="96" textAnchor="middle" className="fill-rose-800 dark:fill-rose-200 text-[10.5px] font-bold">先生</text>
          <text x="71" y="128" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[10.5px] font-mono font-bold">台啟✓</text>
          <text x="24" y="148" textAnchor="middle" className="fill-slate-500 text-[9px] font-mono">寄信緘(左)</text>
        </g>
        {/* Taiwan Lit Spectrum */}
        <g transform="translate(198, 62)">
          <rect width="186" height="52" rx="8" className="fill-blue-500/12 stroke-blue-600" />
          <text x="93" y="22" textAnchor="middle" className="fill-blue-800 dark:fill-blue-200 text-[10.5px] font-bold">日治新文學：賴和、楊逵</text>
          <text x="93" y="40" textAnchor="middle" className="fill-slate-600 dark:fill-slate-300 text-[9px]">寫實批判殖民壓迫與庶民苦難</text>
          <rect y="62" width="186" height="52" rx="8" className="fill-indigo-500/12 stroke-indigo-600" />
          <text x="93" y="84" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-200 text-[10.5px] font-bold">現代派 vs 藍星 vs 創世紀</text>
          <text x="93" y="102" textAnchor="middle" className="fill-slate-600 dark:fill-slate-300 text-[9px]">紀弦橫的移植 / 余光中縱的繼承</text>
          <rect y="124" width="186" height="52" rx="8" className="fill-emerald-500/12 stroke-emerald-600" />
          <text x="93" y="146" textAnchor="middle" className="fill-emerald-800 dark:fill-emerald-200 text-[10.5px] font-bold">70年代鄉土文學→當代空間</text>
          <text x="93" y="164" textAnchor="middle" className="fill-slate-600 dark:fill-slate-300 text-[9px]">黃春明、洪醒夫→自然/都市書寫</text>
        </g>
      </LeftCard>
      <RightCard title="應用文書信稱謂與公文三段式" subtitle="父母安啟、師長道啟、平輩台啟！">
        <StepRow y={54} num="提" label="信內「提稱語」輩分對照" detail="父母→膝下 ； 師長→道鑒/函丈 ； 平輩→大鑒/足下" tone="amber" />
        <StepRow y={112} num="忌" label="信封中路「絕不可寫敬啟」" detail="啟=拆信，不能命令收信人恭敬拆信！（哀悼用禮啟）" tone="rose" />
        <StepRow y={170} num="函" label="工程公文三段式：主旨→說明→辦法" detail="語言力求零歧義、量化精確，上行函用「請鑒核」" tone="blue" />
      </RightCard>
    </g>
  ),

  'chinese/linguistics': () => (
    <g>
      <LeftCard title="六書造字架構（獨體為文 vs 合體為字）與建築成語探源" subtitle="象形、指事、會意、形聲（4造字法）＋ 轉注、假借（2用字法）">
        {[
          { x: 24, y: 60, tag: '象形 (獨體)', ex: '日、月、山、木、門', desc: '描繪具體物體輪廓線條', cls: 'fill-amber-500/15 stroke-amber-600' },
          { x: 214, y: 60, tag: '指事 (獨體)', ex: '上、下、本、末、刃', desc: '抽象符號或象形加指示點畫', cls: 'fill-blue-500/15 stroke-blue-600' },
          { x: 24, y: 148, tag: '會意 (合體)', ex: '休(人倚木)、信、武、森', desc: '合併兩文意義產生新意（無聲符）', cls: 'fill-emerald-500/15 stroke-emerald-600' },
          { x: 214, y: 148, tag: '形聲 (占漢字85%+)', ex: '建築、樑、磚、江、河', desc: '形符表類別 ＋ 聲符表讀音！', cls: 'fill-rose-500/15 stroke-rose-600' },
        ].map((b, i) => (
          <g key={i} transform={`translate(${b.x}, ${b.y})`}>
            <rect width="174" height="74" rx="10" className={b.cls} strokeWidth="1.6" />
            <text x="12" y="24" className="fill-slate-900 dark:fill-white text-[11px] font-bold">{b.tag}</text>
            <text x="12" y="46" className="fill-indigo-800 dark:fill-indigo-200 text-[10px] font-mono font-bold">{b.ex}</text>
            <text x="12" y="64" className="fill-slate-600 dark:fill-slate-300 text-[9px]">{b.desc}</text>
          </g>
        ))}
        <text x="204" y="254" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-300 text-[10.5px] font-mono font-bold">
          建築專用成語：「美輪美奐」專指房屋高大華麗，嚴禁形容風景或衣飾！
        </text>
      </LeftCard>
      <RightCard title="高頻修辭格與文言詞性活用的轉品" subtitle="譬喻、轉化、借代、映襯、移覺秒判">
        <StepRow y={54} num="轉" label="轉化（擬人／形象化） vs 移覺" detail="「老牆守候」為擬人；「陽光有甜香」視覺轉嗅覺為移覺" tone="indigo" />
        <StepRow y={112} num="代" label="借代（以相關特徵代本體）" detail="干戈代戰爭、紅顏代美女、布衣代平民、杜康代酒" tone="emerald" />
        <StepRow y={170} num="品" label="轉品（詞性轉換）＆ 賓語前置倒裝" detail="春風又「綠」江南岸(形轉動)；「唯利是圖」=圖利" tone="rose" />
      </RightCard>
    </g>
  ),

  'chinese/reading-comprehension': (m) => (
    <g>
      <LeftCard title="PISA 閱讀素養三層次 ＆ 非連續性圖表文本破題雷達" subtitle="提取檢索 (What) → 統整推論 (Why) → 反思評鑑 (Critique)">
        {[
          { x: 26, step: '1. 讀圖框軸線', sub: '確認單位(%或總量)', cls: 'fill-blue-500/18 stroke-blue-600' },
          { x: 154, step: '2. 圈極值交叉', sub: '最高/最低/轉折拐點', cls: 'fill-amber-500/18 stroke-amber-600' },
          { x: 282, step: '3. 剔除過度推論', sub: '防相關偷換成因果!', cls: 'fill-emerald-500/18 stroke-emerald-600' },
        ].map((st, idx) => (
          <g key={idx} transform={`translate(${st.x}, 78)`}>
            <rect width="108" height="96" rx="10" className={st.cls} strokeWidth="1.8" />
            <text x="54" y="40" textAnchor="middle" className="fill-slate-900 dark:fill-white text-[10.5px] font-bold">{st.step}</text>
            <text x="54" y="66" textAnchor="middle" className="fill-slate-600 dark:fill-slate-300 text-[9px] font-mono">{st.sub}</text>
            {idx < 2 && (
              <line x1="110" y1="48" x2="124" y2="48" stroke="currentColor" strokeWidth="2" className="text-indigo-500" markerEnd={`url(#${m.arrowBlue})`} />
            )}
          </g>
        ))}
        <rect x="26" y="192" width="364" height="58" rx="10" className="fill-rose-500/10 stroke-rose-500/50" />
        <text x="208" y="216" textAnchor="middle" className="fill-rose-800 dark:fill-rose-200 text-[10.5px] font-bold">
          注意文章「轉折詞（然而、殊不知、事實上）」之後才是作者真正主旨！
        </text>
        <text x="208" y="236" textAnchor="middle" className="fill-slate-600 dark:fill-slate-300 text-[9.5px] font-mono">
          甲乙雙文對讀題：先列「共通議題」，再抓兩文「立場互補或觀點交鋒處」
        </text>
      </LeftCard>
      <RightCard title="東西方建築美學文本對讀座標" subtitle="跨領域建築人文素養題常客">
        <StepRow y={54} num="東" label="梁思成／林徽因／漢寶德論木構" detail="以「間」為模矩、斗栱柔韌抗震、院落水平群體倫理" tone="amber" />
        <StepRow y={112} num="西" label="西方古典石構與現代符號空間" detail="幾何比例永恆紀念性 → 現代主義機能透明流動空間" tone="blue" />
        <StepRow y={170} num="忌" label="四大錯誤干擾選項特徵" detail="無中生有、以偏概全（偶爾變必然）、因果倒置、張冠李戴" tone="rose" />
      </RightCard>
    </g>
  ),

  'chinese/writing-expression': () => (
    <g>
      <LeftCard title="統測寫作測驗「起・承・轉・合」黃金四段空間佈局" subtitle="全文約 650~800 字：頭尾精悍點題、中段五感細節與思辨轉折拉開級分！">
        {[
          { y: 56, tag: '起 (首段 ~110字)', desc: '具體鏡頭或對比設問開門見山破題，絕不繞圈空談', w: 210, cls: 'fill-blue-500/20 stroke-blue-600' },
          { y: 104, tag: '承 (二段 ~220字)', desc: '正面立論＋獨家建築實習經驗（磨圖、放樣、老屋測繪）五感具象敘寫', w: 348, cls: 'fill-emerald-500/20 stroke-emerald-600' },
          { y: 152, tag: '轉 (三段 ~220字)', desc: '換位反詰／挫折轉念／古今中外哲理對照，展現批判思辨深度（決勝段!）', w: 348, cls: 'fill-amber-500/20 stroke-amber-600' },
          { y: 200, tag: '合 (末段 ~110字)', desc: '首尾意象呼應，將個人體悟昇華至生命態度與社會關懷', w: 230, cls: 'fill-indigo-500/20 stroke-indigo-600' },
        ].map((p, idx) => (
          <g key={idx} transform={`translate(24, ${p.y})`}>
            <rect width={p.w} height="38" rx="8" className={p.cls} strokeWidth="1.6" />
            <text x="12" y="16" className="fill-slate-900 dark:fill-white text-[10.5px] font-bold">{p.tag}</text>
            <text x="12" y="31" className="fill-slate-600 dark:fill-slate-300 text-[9px]">{p.desc}</text>
          </g>
        ))}
        <text x="204" y="262" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 text-[10.5px] font-mono font-bold">
          五感空間描寫法：把抽象「感動」換成「斜陽穿過鐵窗花在磨石子地切出光斑」！
        </text>
      </LeftCard>
      <RightCard title="準建築人高分引據彈藥庫" subtitle="名言三明治：引語 → 詮釋 → 扣題">
        <StepRow y={54} num="自" label="順應自然：老子「道法自然」" detail="搭配萊特落水山莊有機建築與綠建築永續共榮" tone="emerald" />
        <StepRow y={112} num="簡" label="取捨專注：密斯「少即是多」" detail="褪去浮誇裝飾，專注生命與結構最純粹的本質" tone="blue" />
        <StepRow y={170} num="仁" label="社會關懷：杜甫「廣廈千萬間」" detail="連結無障礙通用設計、居住正義與匠人責任心" tone="amber" />
      </RightCard>
    </g>
  ),

  'chinese/cultural-knowledge': () => (
    <g>
      <LeftCard title="傳統合院建築禮制軸線（坐北朝南・左尊右卑）與《考工記》" subtitle="面對正廳由內往外看：左手東側為大房龍邊（尊）、右手西側為二房虎邊！">
        {/* Traditional Sanheyuan courtyard plan */}
        <rect x="108" y="68" width="192" height="46" rx="4" className="fill-rose-500/22 stroke-rose-700 dark:stroke-rose-400" strokeWidth="2.2" />
        <text x="204" y="95" textAnchor="middle" className="fill-rose-900 dark:fill-rose-100 text-[11.5px] font-bold">正身（公廳祖先居中・坐北朝南）</text>
        <rect x="64" y="114" width="44" height="106" rx="4" className="fill-amber-500/20 stroke-amber-600" strokeWidth="1.8" />
        <text x="86" y="168" textAnchor="middle" className="fill-amber-900 dark:fill-amber-200 text-[10px] font-bold">右護龍(西/卑)</text>
        <rect x="300" y="114" width="44" height="106" rx="4" className="fill-emerald-500/22 stroke-emerald-600" strokeWidth="1.8" />
        <text x="322" y="168" textAnchor="middle" className="fill-emerald-900 dark:fill-emerald-200 text-[10px] font-bold">左護龍(東/尊)</text>
        <text x="204" y="172" textAnchor="middle" className="fill-slate-500 text-[11px] font-mono">埕（中庭院落）</text>
        <text x="204" y="254" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-300 text-[10.5px] font-mono font-bold">
          對聯張貼鐵律：「仄起平收」——上聯末字仄聲貼右手邊（東側龍邊）！
        </text>
      </LeftCard>
      <RightCard title="年齡代稱、干支時辰與節慶信物" subtitle="文化常識必拿基本分清單">
        <StepRow y={54} num="齡" label="15及笄/志學→20弱冠→30而立→60花甲" detail="二八佳人=16歲(非28!) ； 古稀=70 ； 耄耋=80~90" tone="amber" />
        <StepRow y={112} num="時" label="子時(23~01三更) → 卯(5~7) → 午(11~13)" detail="天干10×地支12 = 60年一甲子（天干÷10、地支÷12算餘數）" tone="blue" />
        <StepRow y={170} num="節" label="柳清明、蒲艾端午、桂中秋、菊茱萸重陽" detail="室內古宴席座次（鴻門宴）：東向最尊＞南向＞北向＞西向" tone="emerald" />
      </RightCard>
    </g>
  ),

  // ───────────── ENGLISH (12 TOPICS) ─────────────
  'english/vocabulary-phrases': () => (
    <g>
      <LeftCard title="建築字根構詞樹：Root `struct`（建造 build）家族放射圖" subtitle="Prefix（方向／正負） ＋ Root（核心字根） ＋ Suffix（決定詞性！）">
        <circle cx="204" cy="146" r="38" className="fill-indigo-600 stroke-indigo-300" strokeWidth="2" />
        <text x="204" y="143" textAnchor="middle" className="fill-white text-[12px] font-mono font-bold">struct</text>
        <text x="204" y="159" textAnchor="middle" className="fill-indigo-200 text-[9.5px]">= build</text>
        {[
          { x: 42, y: 66, w: 'con-struct', m: '共同蓋 → 建造(v.)' },
          { x: 256, y: 66, w: 'struc-ture', m: '名詞尾 → 結構(n.)' },
          { x: 42, y: 196, w: 'de-struct-ive', m: '向下拆 → 破壞性的(a.)' },
          { x: 256, y: 196, w: 'infra-structure', m: '底層建設 → 基礎設施' },
        ].map((nd, i) => (
          <g key={i}>
            <line x1="204" y1="146" x2={nd.x + 56} y2={nd.y + 20} stroke="currentColor" strokeDasharray="4 2" className="text-indigo-400" />
            <rect x={nd.x} y={nd.y} width="118" height="42" rx="8" className="fill-white dark:fill-slate-800 stroke-indigo-500" strokeWidth="1.5" />
            <text x={nd.x + 59} y={nd.y + 18} textAnchor="middle" className="fill-indigo-700 dark:fill-indigo-300 text-[10.5px] font-mono font-bold">{nd.w}</text>
            <text x={nd.x + 59} y={nd.y + 34} textAnchor="middle" className="fill-slate-600 dark:fill-slate-300 text-[9px]">{nd.m}</text>
          </g>
        ))}
        <text x="204" y="262" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[10px] font-mono font-bold">
          字尾秒判詞性：-tion/-ment/-ty (名詞) ； -ive/-ous/-able (形容詞) ； -ize/-ify (動詞)
        </text>
      </LeftCard>
      <RightCard title="統測必考高頻動詞片語對比" subtitle="介系詞換一個字，語意天差地遠！">
        <StepRow y={54} num="look" label="look into 調查 vs look up to 尊敬" detail="look forward to + V-ing（注意 to 是介系詞!）" tone="blue" />
        <StepRow y={112} num="put" label="put off 延期 vs put out 撲滅" detail="put up with = tolerate 忍受（高頻必考代換!）" tone="rose" />
        <StepRow y={170} num="take" label="take place 舉行 vs take over 接管" detail="result in 導致（後接結果） vs result from 起因於" tone="emerald" />
      </RightCard>
    </g>
  ),

  'english/grammar-patterns': (m) => (
    <g>
      <LeftCard title="英文時態時間軸 ＆ 假設語氣（與事實相反退一時態）" subtitle="since + 過去時間點 / for + 一段時間 ──► 主句必用完成式 have/has + p.p.！">
        <line x1="42" y1="126" x2="368" y2="126" stroke="currentColor" strokeWidth="2.2" className="text-slate-500" markerEnd={`url(#${m.arrowBlue})`} />
        <circle cx="110" cy="126" r="5" className="fill-amber-600" />
        <circle cx="220" cy="126" r="5.5" className="fill-emerald-600" />
        <circle cx="320" cy="126" r="5" className="fill-blue-600" />
        <path d="M 110 126 Q 165 76 220 126" fill="none" stroke="currentColor" strokeWidth="3" className="text-rose-600" markerEnd={`url(#${m.arrowRose})`} />
        <text x="110" y="148" textAnchor="middle" className="fill-amber-700 dark:fill-amber-300 text-[10px] font-mono font-bold">Past (過去點)</text>
        <text x="220" y="148" textAnchor="middle" className="fill-emerald-700 dark:fill-emerald-300 text-[10px] font-mono font-bold">Now (現在)</text>
        <text x="320" y="148" textAnchor="middle" className="fill-blue-700 dark:fill-blue-300 text-[10px] font-mono font-bold">Future</text>
        <text x="165" y="88" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 text-[10.5px] font-mono font-bold">現在完成式 have + p.p.</text>
        <rect x="34" y="176" width="340" height="74" rx="10" className="fill-indigo-500/12 stroke-indigo-600" strokeWidth="1.5" />
        <text x="204" y="200" textAnchor="middle" className="fill-indigo-900 dark:fill-indigo-200 text-[10.5px] font-mono font-bold">
          與現在相反：If S + were/V-ed, S + would + VR
        </text>
        <text x="204" y="224" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 text-[10.5px] font-mono font-bold">
          與過去相反：If S + had p.p., S + would have p.p.
        </text>
      </LeftCard>
      <RightCard title="五大基本句型與時間副詞子句陷阱" subtitle="when / if / before 表未來：用「現在式代未來式」！">
        <StepRow y={54} num="時" label="If it rains tomorrow, we will stay." detail="時間與條件副詞子句中，絕不可寫 will rain！" tone="rose" />
        <StepRow y={112} num="使" label="使役動詞 make / have / let + O + VR" detail="受詞主動用原形 VR；受詞被動（車被修）用 p.p.!" tone="blue" />
        <StepRow y={170} num="感" label="連綴動詞 look / sound / taste + Adj." detail="接形容詞不接副詞； look at 才配副詞!" tone="emerald" />
      </RightCard>
    </g>
  ),

  'english/conversation-daily-use': (m) => (
    <g>
      <LeftCard title="統測情境對話破題流程（抓場所身分 → 辨問句功能 → 避中式陷阱）" subtitle="最常考陷阱：Would you mind...? 回答『No, not at all.』才是『不介意＝樂意答應』！">
        <rect x="32" y="66" width="215" height="62" rx="12" className="fill-blue-500/15 stroke-blue-600" strokeWidth="1.8" />
        <text x="48" y="90" className="fill-blue-900 dark:fill-blue-100 text-[11px] font-mono font-bold">Q: Would you mind opening</text>
        <text x="48" y="110" className="fill-blue-900 dark:fill-blue-100 text-[11px] font-mono font-bold">   the window for ventilation?</text>
        <line x1="140" y1="128" x2="140" y2="158" stroke="currentColor" strokeWidth="2.2" className="text-emerald-600" markerEnd={`url(#${m.arrowEmerald})`} />
        <rect x="32" y="162" width="344" height="76" rx="12" className="fill-emerald-500/15 stroke-emerald-600" strokeWidth="1.8" />
        <text x="48" y="188" className="fill-emerald-900 dark:fill-emerald-100 text-[11px] font-mono font-bold">✓ A: Not at all. / Of course not. / Go ahead!</text>
        <text x="48" y="214" className="fill-rose-700 dark:fill-rose-300 text-[10px] font-mono font-bold">✗ 誤答 Yes =「對，我很介意（拒絕）」千萬小心！</text>
      </LeftCard>
      <RightCard title="高頻日常口語慣用應答句" subtitle="字面否定但語意 100% 肯定的道地用法">
        <StepRow y={54} num="讚" label="I couldn't agree with you more!" detail="不能再同意更多了 ＝ 完全贊同你的看法！" tone="emerald" />
        <StepRow y={112} num="電" label="電話用語：Hold on / Put you through" detail="自我介紹用 This is Leo speaking（不用 I am!）" tone="blue" />
        <StepRow y={170} num="醫" label="診間／餐廳／機場情境關鍵詞" detail="prescription 處方箋 ； boarding pass 登機證" tone="amber" />
      </RightCard>
    </g>
  ),

  'english/reading-comprehension': (m) => (
    <g>
      <LeftCard title="英文長篇閱讀雙軌攻略：Skimming（略讀大意）× Scanning（掃讀定位）" subtitle="先讀題幹圈關鍵字，再回各段首尾主題句（Topic Sentence）精準狙擊！">
        {[
          { y: 60, tag: 'Step 1 · 主旨題 (Main Idea)', desc: '讀首段最後一句 ＋ 各段第一句（勿選只講單一細節的過窄選項!）', cls: 'fill-indigo-500/15 stroke-indigo-600' },
          { y: 124, tag: 'Step 2 · 細節定位題 (5W1H)', desc: '鎖定大寫人名、年份數字、專有名詞回原文前後兩句做同義字替換', cls: 'fill-blue-500/15 stroke-blue-600' },
          { y: 188, tag: 'Step 3 · 詞義猜測與推論題 (Infer)', desc: '利用破折號 — 、or 、however / in contrast 上下文反義線索推敲生字', cls: 'fill-emerald-500/15 stroke-emerald-600' },
        ].map((s, idx) => (
          <g key={idx} transform={`translate(24, ${s.y})`}>
            <rect width="360" height="50" rx="10" className={s.cls} strokeWidth="1.6" />
            <text x="14" y="21" className="fill-slate-900 dark:fill-white text-[11px] font-bold">{s.tag}</text>
            <text x="14" y="39" className="fill-slate-600 dark:fill-slate-300 text-[9.5px]">{s.desc}</text>
            {idx < 2 && (
              <line x1="180" y1="50" x2="180" y2="62" stroke="currentColor" strokeWidth="1.8" className="text-indigo-500" markerEnd={`url(#${m.arrowBlue})`} />
            )}
          </g>
        ))}
      </LeftCard>
      <RightCard title="正確答案標誌：同義改寫 (Paraphrase)" subtitle="原文照抄往往是陷阱；換句話說才是正解！">
        <StepRow y={54} num="同" label="高頻同義替換組" detail="essential = vital/crucial ； eco-friendly = sustainable" tone="emerald" />
        <StepRow y={112} num="代" label="代名詞 it / they / which 指涉題" detail="往前找最近且單複數一致的核心名詞代入驗算" tone="blue" />
        <StepRow y={170} num="極" label="警戒極端武斷字眼" detail="only, never, completely, all 若原文未明說多為錯項" tone="rose" />
      </RightCard>
    </g>
  ),

  'english/vocabulary-professional': () => (
    <g>
      <LeftCard title="建築與營建全生命週期專業英語詞彙地圖 (AEC English)" subtitle="閱讀國際競圖簡章、CAD/BIM 英文介面與跨領域科普必備！">
        {[
          { x: 24, y: 58, phase: '1. Planning 規劃設計', words: 'blueprint 藍圖 · elevation 立面\nfloor plan 平面 · scale 比例尺', cls: 'fill-indigo-500/15 stroke-indigo-600' },
          { x: 214, y: 58, phase: '2. Structure 結構力學', words: 'foundation 基礎 · beam & column\nload-bearing 承重 · tension/compression', cls: 'fill-rose-500/15 stroke-rose-600' },
          { x: 24, y: 156, phase: '3. Materials 工程建材', words: 'reinforced concrete (RC) 鋼筋混凝土\ncement 水泥 · timber 木材 · insulation', cls: 'fill-amber-500/15 stroke-amber-600' },
          { x: 214, y: 156, phase: '4. Green 綠建築永續', words: 'ventilation 通風 · solar panel 光電\ncarbon footprint · renovation 翻修', cls: 'fill-emerald-500/15 stroke-emerald-600' },
        ].map((c, idx) => {
          const [l1, l2] = c.words.split('\n');
          return (
            <g key={idx} transform={`translate(${c.x}, ${c.y})`}>
              <rect width="174" height="84" rx="10" className={c.cls} strokeWidth="1.6" />
              <text x="12" y="24" className="fill-slate-900 dark:fill-white text-[10.5px] font-bold">{c.phase}</text>
              <text x="12" y="48" className="fill-indigo-800 dark:fill-indigo-200 text-[9.5px] font-mono">{l1}</text>
              <text x="12" y="66" className="fill-slate-600 dark:fill-slate-300 text-[9.5px] font-mono">{l2}</text>
            </g>
          );
        })}
      </LeftCard>
      <RightCard title="易混淆工程與職場單字辨析" subtitle="一字之差意思全變！">
        <StepRow y={54} num="site" label="site 基地工地 vs cite 引用 vs sight 視線" detail="construction site 建築工地 ； heritage site 古蹟" tone="amber" />
        <StepRow y={112} num="est" label="estimate 估價預算 vs evaluate 評估" detail="budget 預算 ； specification 施工規範說明書" tone="blue" />
        <StepRow y={170} num="safe" label="helmet 安全帽 · scaffold 鷹架施工架" detail="emergency exit 緊急逃生口 · fireproof 防火的" tone="emerald" />
      </RightCard>
    </g>
  ),

  'english/grammar-clauses': () => (
    <g>
      <LeftCard title="三大從屬子句（名詞／形容詞關係／副詞子句）樹狀判別" subtitle="看空格前面有沒有「先行詞名詞 N」，一秒決定填 what 還是 which/that！">
        <rect x="28" y="64" width="352" height="78" rx="10" className="fill-blue-500/14 stroke-blue-600" strokeWidth="1.8" />
        <text x="44" y="88" className="fill-blue-900 dark:fill-blue-200 text-[11px] font-bold">形容詞（關係）子句：前面「有先行詞名詞 N」</text>
        <text x="44" y="110" className="fill-slate-800 dark:fill-slate-200 text-[10.5px] font-mono font-bold">
          The museum [ which / where(=in which) we visited ] is iconic.
        </text>
        <text x="44" y="130" className="fill-rose-700 dark:fill-rose-300 text-[9.5px] font-mono">
          後句缺受詞選 which/that ； 後句完整缺地點副詞才選 where！
        </text>
        <rect x="28" y="158" width="352" height="82" rx="10" className="fill-emerald-500/14 stroke-emerald-600" strokeWidth="1.8" />
        <text x="44" y="182" className="fill-emerald-900 dark:fill-emerald-200 text-[11px] font-bold">名詞子句：複合關代 `what` = the thing(s) which（前無先行詞!）</text>
        <text x="44" y="204" textAnchor="start" className="fill-slate-800 dark:fill-slate-200 text-[10.5px] font-mono font-bold">
          [ What the architect designed ] amazed the whole city.
        </text>
        <text x="44" y="224" className="fill-indigo-700 dark:fill-indigo-300 text-[9.5px] font-mono">
          間接問句語序：Do you know [ where the station is ]? （絕不倒裝!）
        </text>
      </LeftCard>
      <RightCard title="逗號 `, which` 非限定用法禁令" subtitle="統測文法選擇題年年必考！">
        <StepRow y={54} num="禁" label="逗號後與介系詞後「嚴禁寫 that」" detail="`, which` ✓ (指前句或唯一先行詞) ； `in which` ✓" tone="rose" />
        <StepRow y={112} num="格" label="whose + 名詞（人與建築物皆可用!）" detail="a house whose roof is green（屋頂是綠色的房子）" tone="blue" />
        <StepRow y={170} num="讓" label="讓步副詞 although vs despite" detail="although + S+V 子句 ； despite / in spite of + N!" tone="amber" />
      </RightCard>
    </g>
  ),

  'english/reading-infographics': () => (
    <g>
      <LeftCard title="英文資訊圖表（折線趨勢／圓餅佔比／樓層平面導覽）判讀術" subtitle="看懂數據變化動詞，圖表題就是 100% 穩拿的送分題！">
        {/* Trend chart + Pie chart */}
        <g transform="translate(34, 66)">
          <line x1="16" y1="138" x2="186" y2="138" stroke="currentColor" className="text-slate-400" />
          <line x1="16" y1="138" x2="16" y2="16" stroke="currentColor" className="text-slate-400" />
          <polyline points="24,118 68,52 118,52 168,96" fill="none" stroke="currentColor" strokeWidth="3" className="text-indigo-600" />
          <circle cx="68" cy="52" r="4.5" className="fill-rose-600" />
          <text x="68" y="42" textAnchor="middle" className="fill-rose-700 dark:fill-rose-300 text-[9.5px] font-mono font-bold">peak at 最高峰</text>
          <text x="108" y="68" className="fill-emerald-700 dark:fill-emerald-300 text-[9px] font-mono">remain steady 持平</text>
          <text x="155" y="114" className="fill-amber-700 dark:fill-amber-300 text-[9px] font-mono">decline 下降</text>
        </g>
        <g transform="translate(252, 74)">
          <circle cx="64" cy="64" r="52" className="fill-blue-500/20 stroke-blue-600" strokeWidth="2" />
          <path d="M 64 64 L 64 12 A 52 52 0 0 1 114 82 Z" className="fill-emerald-500/45 stroke-emerald-700" strokeWidth="1.5" />
          <text x="86" y="56" className="fill-emerald-900 dark:fill-emerald-100 text-[10px] font-mono font-bold">35%</text>
          <text x="64" y="134" textAnchor="middle" className="fill-indigo-800 dark:fill-indigo-200 text-[10px] font-mono font-bold">account for 佔比</text>
        </g>
        <text x="204" y="254" textAnchor="middle" className="fill-slate-700 dark:fill-slate-300 text-[10px] font-mono font-bold">
          注意圖表小字註記：*asterisk 星號備註、discount 折扣條件與開放時段！
        </text>
      </LeftCard>
      <RightCard title="圖表高頻英文關鍵詞彙庫" subtitle="倍數、最高最低與空間方位介系詞">
        <StepRow y={54} num="升" label="surge / soar 暴增 vs plummet 暴跌" detail="gradually 逐漸地 ； dramatically / sharply 劇烈地" tone="rose" />
        <StepRow y={112} num="佔" label="account for / make up 佔……比例" detail="majority 大多數 (>50%) vs minority 少數" tone="blue" />
        <StepRow y={170} num="位" label="空間平面圖方位詞" detail="adjacent to / next to 緊鄰 ； across from 正對面" tone="emerald" />
      </RightCard>
    </g>
  ),

  'english/cloze-passage-structure': (m) => (
    <g>
      <LeftCard title="克漏字綜合測驗雙步破題樹：先判「語法詞性」→ 再對「語意轉折」" subtitle="前後兩句邏輯關係決定連接副詞（因果／轉折／舉例／遞進）！">
        {[
          { y: 60, tag: '因果關係 Cause → Effect', words: 'therefore, thus, consequently, as a result (因此)', cls: 'fill-blue-500/15 stroke-blue-600' },
          { y: 118, tag: '對比轉折 Contrast / Concession', words: 'however, nevertheless, on the contrary, instead (然而/相反地)', cls: 'fill-rose-500/15 stroke-rose-600' },
          { y: 176, tag: '補充遞進 Addition / Example', words: 'furthermore, moreover, in addition, for instance (此外/例如)', cls: 'fill-emerald-500/15 stroke-emerald-600' },
        ].map((b, idx) => (
          <g key={idx} transform={`translate(24, ${b.y})`}>
            <rect width="360" height="48" rx="9" className={b.cls} strokeWidth="1.6" />
            <text x="14" y="19" className="fill-slate-900 dark:fill-white text-[10.5px] font-bold">{b.tag}</text>
            <text x="14" y="37" className="fill-indigo-800 dark:fill-indigo-200 text-[9.5px] font-mono font-bold">{b.words}</text>
            {idx < 2 && (
              <line x1="180" y1="48" x2="180" y2="58" stroke="currentColor" className="text-slate-400" markerEnd={`url(#${m.arrowBlue})`} />
            )}
          </g>
        ))}
        <text x="204" y="256" textAnchor="middle" className="fill-amber-700 dark:fill-amber-300 text-[10px] font-mono font-bold">
          標點陷阱：逗號 `,` 不能直接連接兩個完整句子！分號 `;` 後才可接 however, !
        </text>
      </LeftCard>
      <RightCard title="克漏字常考固定搭配詞 (Collocations)" subtitle="看到前半句就能秒選後半介系詞！">
        <StepRow y={54} num="搭" label="play an important role in + V-ing" detail="have a great impact / influence on 對…有重大影響" tone="indigo" />
        <StepRow y={112} num="防" label="prevent / keep / stop O from V-ing" detail="保護/阻止某人免於…； devote oneself to + V-ing!" tone="rose" />
        <StepRow y={170} num="比" label="not... at all 根本不 ； not only A but B" detail="prefer A to B（喜歡 A 勝過 B，若接動名詞皆用 V-ing）" tone="emerald" />
      </RightCard>
    </g>
  ),

  'english/grammar-mastery': (m) => (
    <g>
      <LeftCard title="分詞構句簡化三步驟 ＆ 否定副詞置句首倒裝結構" subtitle="前後主詞相同省連接詞 → 主動改 V-ing 、 被動改 p.p.！">
        {/* Participle construction */}
        <rect x="26" y="60" width="356" height="84" rx="10" className="fill-emerald-500/14 stroke-emerald-600" strokeWidth="1.8" />
        <text x="40" y="84" className="fill-emerald-900 dark:fill-emerald-100 text-[10.5px] font-bold">分詞構句判斷：抓逗號後面的「真正主詞 S」來看主動或被動！</text>
        <text x="40" y="106" className="fill-blue-800 dark:fill-blue-200 text-[10px] font-mono font-bold">
          ✓ Seen from the tower, the city looks tiny. (城市「被看」→ p.p.!)
        </text>
        <text x="40" y="126" className="fill-indigo-800 dark:fill-indigo-200 text-[10px] font-mono font-bold">
          ✓ Designing the bridge, the engineer checked every load. (主動 V-ing!)
        </text>
        {/* Negative inversion */}
        <line x1="204" y1="146" x2="204" y2="162" stroke="currentColor" className="text-slate-400" markerEnd={`url(#${m.arrowBlue})`} />
        <rect x="26" y="164" width="356" height="82" rx="10" className="fill-rose-500/14 stroke-rose-600" strokeWidth="1.8" />
        <text x="40" y="188" className="fill-rose-900 dark:fill-rose-100 text-[10.5px] font-bold">否定副詞放句首倒裝（像造疑問句一樣把助動詞/be 搬到主詞前!）</text>
        <text x="40" y="212" className="fill-rose-700 dark:fill-rose-300 text-[10.5px] font-mono font-bold">
          Never / Seldom / Not only + [助動詞 / be] + S + V ...
        </text>
        <text x="40" y="232" className="fill-slate-600 dark:fill-slate-300 text-[9.5px] font-mono">
          例：Not only did she win the competition, but she also built it.
        </text>
      </LeftCard>
      <RightCard title="虛主詞 It 與強調句型辨析" subtitle="寫作拉高句型複雜度的神兵利器">
        <StepRow y={54} num="It" label="It is + Adj + (for/of sb) + to VR" detail="形容事情用 for sb；形容人品格(kind/wise)用 of sb!" tone="blue" />
        <StepRow y={112} num="強" label="分裂強調句 It is/was ... that ..." detail="把想強調的人時地塞進中間，其餘照抄放 that 後" tone="amber" />
        <StepRow y={170} num="情緒" label="情緒分詞：人感到 -ed vs 事物令人 -ing" detail="interested in (人感到有趣) vs interesting design" tone="emerald" />
      </RightCard>
    </g>
  ),

  'english/workplace-communication': () => (
    <g>
      <LeftCard title="國際職場與建築事務所商務 Email 六段標準結構" subtitle="清楚主旨 → 禮貌稱呼 → 開門見山說明目的 → 附件說明 → 行動呼籲 CTA → 結尾敬語">
        <rect x="34" y="54" width="340" height="202" rx="10" className="fill-white dark:fill-slate-800 stroke-indigo-500" strokeWidth="1.8" />
        <rect x="34" y="54" width="340" height="30" rx="8" className="fill-indigo-600" />
        <text x="48" y="73" className="fill-white text-[10px] font-mono font-bold">Subject: Revised Floor Plan – Taipei Library Project</text>
        <text x="48" y="104" className="fill-slate-800 dark:fill-slate-200 text-[10px] font-mono font-bold">1. Dear Mr. Lin, (不知姓名寫 Dear Sir or Madam,)</text>
        <text x="48" y="128" className="fill-blue-700 dark:fill-blue-300 text-[10px] font-mono">2. Purpose: I am writing to confirm our site meeting...</text>
        <text x="48" y="152" className="fill-emerald-700 dark:fill-emerald-300 text-[10px] font-mono">3. Attachment: Please find attached the updated CAD PDF.</text>
        <text x="48" y="176" className="fill-amber-700 dark:fill-amber-300 text-[10px] font-mono">4. CTA: Could you review it by Friday, May 15?</text>
        <text x="48" y="200" className="fill-rose-700 dark:fill-rose-300 text-[10px] font-mono font-bold">5. Closing: I look forward to hearing from you. (V-ing!)</text>
        <text x="48" y="224" className="fill-slate-600 dark:fill-slate-300 text-[10px] font-mono">6. Best regards, / Sincerely,  Amy Chen</text>
      </LeftCard>
      <RightCard title="履歷、會議與公告常見職場字彙" subtitle="統測商業與工程職場題組必背">
        <StepRow y={54} num="會" label="agenda 議程 · minutes 會議紀錄" detail="postpone 延期 (=put off) vs cancel 取消 ； deadline 截稿期" tone="indigo" />
        <StepRow y={112} num="職" label="applicant 應徵者 · resume 履歷表" detail="qualification 資格證照 ； internship 實習" tone="blue" />
        <StepRow y={170} num="約" label="make an appointment 預約會面" detail="confirm 確認 · attach 隨信附上 · inquiry 詢價詢問" tone="emerald" />
      </RightCard>
    </g>
  ),

  'english/reading-advanced': () => (
    <g>
      <LeftCard title="跨領域科普與建築評論長文結構（立論 Thesis → 正反證據 → 態度語氣）" subtitle="精準分辨作者態度詞（Tone & Attitude），不被反方引述觀點誤導！">
        {/* Argument structure */}
        <rect x="34" y="60" width="340" height="48" rx="9" className="fill-indigo-500/18 stroke-indigo-600" strokeWidth="1.6" />
        <text x="204" y="81" textAnchor="middle" className="fill-indigo-900 dark:fill-indigo-100 text-[11px] font-bold">1. Hook &amp; Thesis Statement（首段核心主張）</text>
        <text x="204" y="99" textAnchor="middle" className="fill-slate-600 dark:fill-slate-300 text-[9.5px]">點出傳統觀念盲點，亮出本文真正論點</text>
        <rect x="34" y="122" width="164" height="72" rx="9" className="fill-amber-500/15 stroke-amber-600" strokeWidth="1.5" />
        <text x="116" y="148" textAnchor="middle" className="fill-amber-900 dark:fill-amber-200 text-[10.5px] font-bold">2A. 數據與研究佐證</text>
        <text x="116" y="170" textAnchor="middle" className="fill-slate-600 dark:fill-slate-300 text-[9px]">Studies indicate that...</text>
        <rect x="210" y="122" width="164" height="72" rx="9" className="fill-rose-500/15 stroke-rose-600" strokeWidth="1.5" />
        <text x="292" y="148" textAnchor="middle" className="fill-rose-900 dark:fill-rose-200 text-[10.5px] font-bold">2B. 讓步與反駁對手</text>
        <text x="292" y="170" textAnchor="middle" className="fill-slate-600 dark:fill-slate-300 text-[9px]">Critics argue... Yet...</text>
        <rect x="34" y="208" width="340" height="44" rx="9" className="fill-emerald-500/18 stroke-emerald-600" strokeWidth="1.6" />
        <text x="204" y="234" textAnchor="middle" className="fill-emerald-900 dark:fill-emerald-100 text-[10.5px] font-bold">3. Conclusion &amp; Future Implication（總結與未來展望）</text>
      </LeftCard>
      <RightCard title="作者語氣態度五大高頻單字" subtitle="What is the author's attitude toward...?">
        <StepRow y={54} num="客" label="objective 客觀中立 ／ informative" detail="科普報導最常見！正反並陳不偏頗（neutral）" tone="blue" />
        <StepRow y={112} num="正" label="optimistic 樂觀支持 ／ supportive" detail="看好新綠能科技或永續建築發展前景（promising）" tone="emerald" />
        <StepRow y={170} num="疑" label="skeptical 懷疑保留 ／ critical 批判" detail="質疑成效或指出潛在環境風險（doubtful / cautious）" tone="rose" />
      </RightCard>
    </g>
  ),

  'english/translation-writing': (m) => (
    <g>
      <LeftCard title="中翻英與英文句子寫作五步防呆轉換鏈" subtitle="擺脫中式逐字硬翻：先抓英文唯一主幹 `S + V`，地點時間往句尾擺！">
        {[
          { x: 22, lb: '1. 抓主詞+動詞', sub: '一山不容二虎(禁雙動詞!)' },
          { x: 152, lb: '2. 鎖定時態語態', sub: '過去/完成/被動be+p.p.' },
          { x: 282, lb: '3. 後置修飾＋檢查', sub: '介片/關代放名詞後!' },
        ].map((st, idx) => (
          <g key={idx} transform={`translate(${st.x}, 72)`}>
            <rect width="108" height="86" rx="10" className="fill-indigo-500/15 stroke-indigo-600" strokeWidth="1.8" />
            <text x="54" y="36" textAnchor="middle" className="fill-slate-900 dark:fill-white text-[10px] font-bold">{st.lb}</text>
            <text x="54" y="60" textAnchor="middle" className="fill-slate-600 dark:fill-slate-300 text-[8.5px] font-mono">{st.sub}</text>
            {idx < 2 && (
              <line x1="110" y1="43" x2="126" y2="43" stroke="currentColor" strokeWidth="2" className="text-indigo-600" markerEnd={`url(#${m.arrowBlue})`} />
            )}
          </g>
        ))}
        <rect x="24" y="178" width="360" height="72" rx="10" className="fill-rose-500/12 stroke-rose-600" strokeWidth="1.5" />
        <text x="40" y="202" className="fill-rose-800 dark:fill-rose-200 text-[10px] font-mono font-bold">
          ✗ 中式病句：Because it rained heavily, so the construction stopped.
        </text>
        <text x="40" y="228" className="fill-emerald-800 dark:fill-emerald-200 text-[10px] font-mono font-bold">
          ✓ 正確英文：Because it rained heavily, the construction stopped.
        </text>
      </LeftCard>
      <RightCard title="英文三大連接詞鐵律與主詞一致" subtitle="因為所以／雖然但是，英文只能留一個！">
        <StepRow y={54} num="連" label="Because 不配 so ； Although 不配 but" detail="兩句之間必須恰好有 1 個連接詞（不可多也不可零）" tone="rose" />
        <StepRow y={112} num="動" label="動名詞當主詞視為「單數」！" detail="Building green houses saves (加 s!) energy." tone="emerald" />
        <StepRow y={170} num="有" label="表「某處有某物」用 There is/are" detail="嚴禁寫成 There have many buildings!" tone="blue" />
      </RightCard>
    </g>
  ),
};
