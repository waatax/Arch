'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { SUBJECT_LABELS, EXAM_SUBJECTS } from '@/data/studyStudio/types';
import { buildPlan, dayKey, type PlanUnit } from '@/lib/studyStudio/engine';
import { clearStudio, updateStudio, useStudio } from '@/lib/studyStudio/store';

export interface LessonMeta extends PlanUnit { hook: string; slug: string; questions: number }
const tabs = [{ id: 'today', label: '今日任務', mark: '01' }, { id: 'library', label: '圖解短課', mark: '02' }, { id: 'plan', label: '我的考程', mark: '03' }, { id: 'review', label: '錯題複習', mark: '04' }];
export default function StudioHub({ lessons, topics }: { lessons: LessonMeta[]; topics: PlanUnit[] }) {
  const state = useStudio();
  const router = useRouter();
  const params = useSearchParams();
  const active = tabs.some((t) => t.id === params.get('view')) ? params.get('view')! : 'today';
  const [chosenSubject, setSubject] = useState<string | null>(null);
  const requestedSubject = params.get('subject') ?? 'all';
  const subject = chosenSubject ?? (SUBJECT_LABELS[requestedSubject] ? requestedSubject : 'all');
  const [search, setSearch] = useState('');
  const [confirmClear, setConfirmClear] = useState(false);
  const today = dayKey();
  const allUnits: PlanUnit[] = [...lessons, ...topics];
  const isPassed = (lesson: LessonMeta) => Array.from({ length: lesson.questions }, (_, i) => state.answers[`${lesson.slug}:${i}`]?.correct).every(Boolean);
  const done = lessons.filter(isPassed).length;
  const earned = lessons.reduce((sum, l) => sum + Array.from({ length: l.questions }, (_, i) => state.answers[`${l.slug}:${i}`]?.earned ? 10 : 0).reduce((a: number, b) => a + b, 0), 0);
  const due = lessons.filter((l) => Array.from({ length: l.questions }, (_, i) => state.answers[`${l.slug}:${i}`]).some((r) => r && (!r.correct || r.due <= today)));
  const selected = allUnits.filter((u) => state.selected.includes(u.id));
  const plan = buildPlan(selected, state.examDate, state.minutes, state.planStart || today);
  const pending = lessons.filter((l) => !isPassed(l));
  const task = due[0] ?? pending.find((l) => state.selected.includes(l.id)) ?? pending[0];
  const filtered = lessons.filter((l) => (subject === 'all' || l.subject === subject) && `${l.title}${l.hook}${SUBJECT_LABELS[l.subject]}`.toLowerCase().includes(search.toLowerCase()));
  const diagnostics = Object.entries(SUBJECT_LABELS).map(([id, label]) => {
    const pool = lessons.filter((l) => l.subject === id);
    const records = pool.flatMap((l) => Array.from({ length: l.questions }, (_, i) => state.answers[`${l.slug}:${i}`])).filter(Boolean);
    return { id, label, total: pool.reduce((n, l) => n + l.questions, 0), answered: records.length, correct: records.filter((r) => r.correct).length };
  }).filter((d) => d.answered > 0);
  const toggle = (id: string) => updateStudio((s) => ({ ...s, selected: s.selected.includes(id) ? s.selected.filter((v) => v !== id) : [...s.selected, id] }));
  const isReviewed = (unit: PlanUnit) => unit.id.startsWith('topic:') ? state.reviewed.includes(unit.id) : lessons.some((l) => l.id === unit.id && isPassed(l));
  const exportPlan = () => {
    const body = [`Arch 我的考前計畫`, `考試日期：${state.examDate || '尚未設定'}`, `教材：${state.version || '自行對照版本'}`, `老師範圍：${state.scopeNote}`, `每日 ${state.minutes} 分鐘；每單元暫估 10 分鐘，依實際難度調整。`, ...plan.rows.map((r) => `${r.day} ${isReviewed(r) ? '✓' : '□'} ${SUBJECT_LABELS[r.subject]}｜${r.title}${r.overflow ? '【超出考前容量】' : ''}`)].join('\n');
    const url = URL.createObjectURL(new Blob([body], { type: 'text/plain;charset=utf-8' }));
    const a = document.createElement('a'); a.href = url; a.download = 'Arch-考前計畫.txt'; a.click(); URL.revokeObjectURL(url);
  };
  return <section className="ss-workspace" id="workspace">
    <nav className="ss-tabs" aria-label="考前建築所功能">{tabs.map((tab) => <button key={tab.id} aria-current={active === tab.id ? 'page' : undefined} onClick={() => router.replace(`/study-studio?view=${tab.id}#workspace`, { scroll: false })}><span>{tab.mark}</span>{tab.label}</button>)}</nav>
    <div className="ss-workspace-content">
      {state.storageError && <p className="ss-alert" role="alert">此瀏覽器無法保存進度。請匯出考程留存；關閉頁面後資料可能遺失。</p>}
      {active === 'today' && <div className="ss-today-grid">
        <div><span className="ss-eyebrow">SMALL STEPS, REAL PROGRESS</span><h2>今天，先蓋好一塊。</h2><p className="ss-muted">不必一次讀完整本。先理解一個觀念，再用兩題確認，錯了就回頭找線索。</p>
          {task ? <Link className="ss-mission" href={task.href}><span className="ss-pill">{due.length ? '優先複習' : '下一個小任務'} · 約 10 分鐘</span><h3>{task.title}</h3><p>{task.hook}</p><span className="ss-link">開始這一小步 ↗</span></Link> : <div className="ss-mission"><h3>30 塊知識磚都完成初次檢核了！</h3><p>接著做一份歷屆題，檢查能否把觀念運用在陌生題目。</p><Link href="/practice" className="ss-link">前往歷屆試題 →</Link></div>}
          <div className="ss-mini-path"><span>① 看圖理解</span><span>② 自己試答</span><span>③ 隔天回想</span></div>
        </div>
        <aside className="ss-progress-card"><span className="ss-eyebrow">你的知識基地</span><div className="ss-big-number">{done}<small>/ 30 塊</small></div><div className="ss-bricks" aria-label={`已完成 ${done} 個短課檢核`}>{lessons.map((l) => <Link key={l.id} href={l.href} title={l.title} aria-label={`${l.title}：${isPassed(l) ? '已初步過關' : '待練習'}`} className={isPassed(l) ? 'is-built' : ''}>{isPassed(l) ? '✓' : ''}</Link>)}</div><p>{earned} 點探索值 · {due.length} 個單元待複習</p><p className="ss-muted">只和昨天的自己比較。探索值依首次答對累積，不代表實際考試級距。</p><Link href="/study-studio?view=review" className="ss-link">看看需要回想的觀念 →</Link></aside>
      </div>}
      {active === 'library' && <>
        <div className="ss-section-head"><div><span className="ss-eyebrow">THE LEARNING SHELF</span><h2>30 個跨題型觀念短課</h2></div><span className="ss-pill">13 科 · 圖解 × 例題 × 檢核</span></div>
        <div className="ss-filters"><label>學科<select value={subject} onChange={(e) => setSubject(e.target.value)}><option value="all">全部學科</option>{Object.entries(SUBJECT_LABELS).map(([id, label]) => <option key={id} value={id}>{label}</option>)}</select></label><label className="ss-search">找觀念<input type="search" placeholder="試試：水準、單位、閱讀…" value={search} onChange={(e) => setSearch(e.target.value)} /></label></div>
        <p className="ss-muted" role="status">找到 {filtered.length} 個短課；原有 120 主題仍可從下方完整課程入口閱讀。</p>
        <div className="ss-lesson-grid">{filtered.map((lesson) => <Link href={lesson.href} className="ss-lesson-card" key={lesson.id}><div className="ss-card-top"><span>{SUBJECT_LABELS[lesson.subject]}</span><span>{isPassed(lesson) ? '✓ 初步過關' : EXAM_SUBJECTS.includes(lesson.subject) ? '統測銜接' : '段考延伸'}</span></div><h3>{lesson.title}</h3><p>{lesson.hook}</p><span className="ss-link">讀圖 → 練兩題 ↗</span></Link>)}</div>
        {!filtered.length && <p className="ss-empty">沒有符合的短課。換個關鍵字，或切換到全部學科。</p>}
        <div className="ss-subject-directory"><h3>繼續讀完整章節</h3><p className="ss-muted">原有 13 科 120 主題的知識講解、圖解與真題解析。</p><div>{Object.entries(SUBJECT_LABELS).map(([slug, title]) => <Link key={slug} href={`/subjects/${slug}`}>{title} ↗</Link>)}</div></div>
      </>}
      {active === 'plan' && <>
        <div className="ss-section-head"><div><span className="ss-eyebrow">YOUR EXAM, YOUR PLAN</span><h2>把老師的範圍，變成每天能做的事。</h2></div></div>
        <p className="ss-muted">適用段考、期中、期末與統測。各版本章序不同：先依老師公告勾選實際知識範圍，不用猜第幾章相同。</p>
        <div className="ss-plan-fields"><label>考試日期<input type="date" min={today} value={state.examDate} onChange={(e) => updateStudio((s) => ({ ...s, examDate: e.target.value, planStart: today }))} /></label><label>每天能讀多久<select value={state.minutes} onChange={(e) => updateStudio((s) => ({ ...s, minutes: Number(e.target.value) }))}>{[10, 20, 40, 60].map((n) => <option key={n} value={n}>{n} 分鐘</option>)}</select></label><label className="ss-wide">教材版本／冊次<input maxLength={120} placeholder="例如：出版社、課本名稱、第幾冊（自行填寫）" value={state.version} onChange={(e) => updateStudio((s) => ({ ...s, version: e.target.value }))} /></label><label className="ss-wide">老師公告與範圍備註<textarea maxLength={1000} placeholder="例如：期中考，水準測量＋角度測量；不含第 3 節" value={state.scopeNote} onChange={(e) => updateStudio((s) => ({ ...s, scopeNote: e.target.value }))} /></label></div>
        <div className="ss-scope-actions"><button className="ss-button" onClick={() => updateStudio((s) => ({ ...s, selected: lessons.filter((l) => EXAM_SUBJECTS.includes(l.subject)).map((l) => l.id) }))}>選取 24 個統測銜接短課</button><button className="ss-outline-button" onClick={() => updateStudio((s) => ({ ...s, selected: [] }))}>清空範圍</button><span aria-live="polite">已選 {selected.length} 個單元</span></div>
        <div className="ss-scope-list">{Object.entries(SUBJECT_LABELS).map(([id, label]) => <details key={id}><summary>{label}<span>{selected.filter((u) => u.subject === id).length} 已選</span></summary><div>{allUnits.filter((u) => u.subject === id).map((u) => <label key={u.id}><input type="checkbox" checked={state.selected.includes(u.id)} onChange={() => toggle(u.id)} /><span>{u.title}<small>{u.id.startsWith('topic:') ? '完整章節 · 時間請依難度調整' : '新增短課 · 約 10 分鐘'}</small></span></label>)}</div></details>)}</div>
        <div className="ss-plan-result" aria-live="polite"><h3>我的考前安排</h3>{!selected.length ? <p>先展開學科，勾選這次會考的單元。</p> : !state.examDate || plan.days <= 0 ? <p>請設定未來的考試日期。考試當天保留給休息、確認文具與交通。</p> : <>
          <p>從 {state.planStart || today} 開始 · 考前 {plan.days} 天 · 每天暫排 {plan.capacity} 個單元 · 已複習 {selected.filter(isReviewed).length}/{selected.length}</p><p className="ss-muted">日期會保留，不會每天往後移。每單元以 10 分鐘粗估；完整章節可能需要多個時段。變更考試日期可重新設定開始日。</p>
          {plan.overflow > 0 && <p className="ss-alert" role="status">目前有 {plan.overflow} 個單元超出考前容量。請減少範圍或增加每日時間，勿以熬夜補足。</p>}
          <ol className="ss-schedule">{plan.rows.map((row) => <li key={row.id} className={row.overflow ? 'ss-overflow' : ''}><time dateTime={row.day}>{row.day.slice(5).replace('-', '/')}</time><div><Link href={row.href}>{row.title} ↗</Link><small>{SUBJECT_LABELS[row.subject]}{row.overflow ? ' · 超出考前容量' : ''}</small></div>{row.id.startsWith('topic:') ? <button className="ss-outline-button" aria-pressed={isReviewed(row)} onClick={() => updateStudio((s) => ({ ...s, reviewed: s.reviewed.includes(row.id) ? s.reviewed.filter((id) => id !== row.id) : [...s.reviewed, row.id] }))}>{isReviewed(row) ? '✓ 已複習' : '標記複習'}</button> : <span>{isReviewed(row) ? '✓ 已檢核' : '待檢核'}</span>}</li>)}</ol>
        </>}<button className="ss-outline-button" disabled={!selected.length || !state.examDate || plan.days <= 0} onClick={exportPlan}>匯出文字考程 ↓</button></div>
      </>}
      {active === 'review' && <>
        <span className="ss-eyebrow">RECALL, NOT RESTART</span><h2>把錯題，變成下一次的線索。</h2><p className="ss-muted">未答對與已到期的短課都在這裡。重練答對後安排隔天回想；跨日再答對可延長至 3、7、14 天，同日重答不延長間隔。</p>
        {diagnostics.length > 0 && <section className="ss-diagnostics" aria-label="學科作答觀察"><h3>從自己的紀錄，找下一步</h3><p className="ss-muted">綠色是最近一次答對，橘色是待修正，留白是還沒答。每科題數有限，請再用完整章節與歷屆題確認理解。</p>{diagnostics.map((d) => <div key={d.id} className="ss-diagnostic-row"><strong>{d.label}</strong><div><div className="ss-diagnostic-bar" role="img" aria-label={`${d.label}：${d.total} 題中已答 ${d.answered} 題，最近答對 ${d.correct} 題，待修正 ${d.answered - d.correct} 題`}><span style={{ width: `${d.correct / d.total * 100}%` }} /><span style={{ width: `${(d.answered - d.correct) / d.total * 100}%` }} /></div><small>已答 {d.answered}/{d.total} · 最近答對 {d.correct} · 待修正 {d.answered - d.correct}</small></div></div>)}</section>}
        {due.length ? <div className="ss-lesson-grid">{due.map((l) => <Link className="ss-lesson-card" href={`${l.href}#check`} key={l.id}><span className="ss-pill">{SUBJECT_LABELS[l.subject]}</span><h3>{l.title}</h3><p>{Array.from({ length: l.questions }, (_, i) => state.answers[`${l.slug}:${i}`]).filter((r) => r && !r.correct).length} 題待修正 · 可回看解題步驟</p><span className="ss-link">遮住答案重新挑戰 →</span></Link>)}</div> : <div className="ss-empty"><strong>目前沒有待複習短課。</strong><p>還沒作答就從一個短課開始；完成後系統才會依你的紀錄安排複習。</p><Link href="/study-studio?view=library" className="ss-link">選一個好奇的觀念 →</Link></div>}
        <div className="ss-review-routine"><h3>錯題修復的三個動作</h3><ol><li>指出卡住的是觀念、單位，還是讀題。</li><li>蓋住解答，用自己的話重做一次。</li><li>隔天再解，然後到歷屆題確認能否遷移。</li></ol><Link href="/practice" className="ss-link">進入原有歷屆題與錯題筆記 →</Link></div>
        <details className="ss-privacy"><summary>這台裝置的進度與隱私</summary><p>教材版本、考程與答題紀錄儲存在這個瀏覽器，不會跨裝置同步。清除只影響「考前建築所」，不會刪除原有闖關與歷屆題進度。</p>{confirmClear ? <div className="ss-scope-actions"><button className="ss-button" onClick={() => { clearStudio(); setConfirmClear(false); }}>確認清除建築所紀錄</button><button className="ss-outline-button" onClick={() => setConfirmClear(false)}>取消</button></div> : <button className="ss-outline-button" onClick={() => setConfirmClear(true)}>清除此功能的本機紀錄</button>}</details>
      </>}
    </div>
  </section>;
}
