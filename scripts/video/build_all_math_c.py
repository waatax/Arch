# -*- coding: utf-8 -*-
"""
Batch Builder for ALL 15 High School Vocational Math C (高工數學 C) Video Lessons (MC01 - MC15)
v2 Deep-Reviewed Edition:
- Zero-truncation natural Taiwan Mandarin speech (complete sentences, zero raw slashes/LaTeX/symbols)
- Exact SVG-to-concept matching + Arch existing textbook visuals (learning-visuals/math-c/*.webp)
- High 108-curriculum knowledge-point weight (~62-65%) + progressive step-by-step derivations + full worked examples
- Built-in speech fluency audit gate (`--audit`)

Usage:
  python scripts/video/build_all_math_c.py --audit        # Audit all 15 narrations for zero speech defects
  python scripts/video/build_all_math_c.py 2 8 --force    # Rebuild lessons 2-8 with fresh TTS & slides
"""

import asyncio
import importlib
import json
import pathlib
import re
import sys
import time

ROOT = pathlib.Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT / "scripts" / "video"))

from build_lesson_video import build_from_data
from svg_library import CONCEPT_SVG_MAP, SVGS


# ============================================================
# 1. Visual Math Cleaner & Natural Taiwan Mandarin Speech Engine
# ============================================================

def clean_visual_math(text: str) -> str:
    """Clean raw LaTeX-like ASCII notation for crisp on-screen display."""
    if not text:
        return ""
    s = text.strip()
    s = re.sub(r"lim_\{([^}]+)\}", r"lim (\1)", s)
    s = re.sub(r"a_\{([^}]+)\}", r"a(\1)", s)
    s = re.sub(r"([A-Za-z])_([0-9nijk])", lambda m: m.group(1) + m.group(2).translate(str.maketrans("0123456789", "₀₁₂₃₄₅₆₇₈₉")), s)
    s = s.replace("a//(1 − r)", "a / (1 − r)")
    return s


def math_to_spoken_zh(text: str) -> str:
    """Convert mathematical symbols, fractions, powers, and trig into natural Taiwanese Mandarin speech."""
    if not text:
        return ""
    s = text.strip()
    s = re.sub(r"【[^】]+】", "", s)
    s = s.replace("\n", "，").replace("…", "。").replace("...", "。")

    # 1) Special multi-token LaTeX / calculus / sequence patterns
    s = re.sub(r"lim_\{n→∞\}", "當 n 趨近無窮大時的極限", s)
    s = re.sub(r"lim_\{x→([^}]+)\}", r"當 x 趨近 \1 時的極限", s)
    s = re.sub(r"lim_\{([^}]+)\}", r"極限 \1 ", s)
    s = re.sub(r"⟨([^⟩]+)⟩", r" \1 ", s)
    s = re.sub(r"\|([^|]{1,18})\|", r" 絕對值 \1 ", s)
    s = re.sub(r"∫_\{?([^}\s]+)\}?\^\{?([^}\s]+)\}?", r"從 \1 積分到 \2 ", s)
    s = re.sub(r"C\(\s*([^,]+?)\s*,\s*([^)]+?)\s*\)", r"C \1 取 \2 ", s)
    s = re.sub(r"P\(\s*([^,]+?)\s*,\s*([^)]+?)\s*\)", r"P \1 取 \2 ", s)

    # 2) Powers with ^ (e.g. a^(p/q), x^2, 10^k, e^x, a^{n-1})
    s = re.sub(r"([A-Za-z0-9\)]+)\^\(([^)]+)\)", r"\1 的 \2 次方", s)
    s = re.sub(r"([A-Za-z0-9\)]+)\^\{([^}]+)\}", r"\1 的 \2 次方", s)
    s = re.sub(r"([A-Za-z0-9\)]+)\^2\b", r"\1 平方", s)
    s = re.sub(r"([A-Za-z0-9\)]+)\^3\b", r"\1 三次方", s)
    s = re.sub(r"([A-Za-z0-9\)]+)\^([A-Za-z0-9\-]+)", r"\1 的 \2 次方", s)

    # 3) Subscripts with _ (e.g. a_n, S_n, log_2, x_1)
    s = re.sub(r"log_\{?10\}?", "以十為底的 log ", s)
    s = re.sub(r"log_\{?2\}?", "以二為底的 log ", s)
    s = re.sub(r"log_\{?([^}\s\(]+)\}?", r"以 \1 為底的 log ", s)
    s = re.sub(r"([A-Za-z])_\{([^}]+)\}", r"\1 \2 ", s)
    s = re.sub(r"([A-Za-z])_([A-Za-z0-9]+)", r"\1 \2 ", s)

    # 4) Common fractions before generic slash handling
    s = s.replace("a//(1 − r)", "一減 r 分之 a")
    s = s.replace("a/(1 − r)", "一減 r 分之 a")
    s = s.replace("a/(1-r)", "一減 r 分之 a")
    s = s.replace("1/2", "二分之一").replace("1/3", "三分之一").replace("1/4", "四分之一")
    s = s.replace("3/4", "四分之三").replace("2/3", "三分之二").replace("1/n", "n 分之一")
    # Parenthesized fraction (A)/(B) -> A 除以 B
    s = re.sub(r"\(([^()]+)\)\s*/\s*\(([^()]+)\)", r"\1 除以 \2", s)
    s = re.sub(r"\(([^()]+)\)\s*/\s*([A-Za-z0-9]+)", r"\2 分之 \1", s)
    s = re.sub(r"([A-Za-z0-9]+)\s*/\s*\(([^()]+)\)", r"\2 分之 \1", s)
    # Simple token fraction X/Y -> Y 分之 X
    s = re.sub(r"([A-Za-z0-9]+)\s*/\s*([A-Za-z0-9]+)", r"\2 分之 \1", s)
    # Any remaining slash
    s = s.replace("/", " 除以 ")

    # 5) Trig functions separated cleanly from following variable (sinA -> sine A, cosθ -> cosine theta)
    for fn, spoken in [
        ("sin", "sine"), ("cos", "cosine"), ("tan", "tangent"),
        ("cot", "cotangent"), ("sec", "secant"), ("csc", "cosecant"),
    ]:
        s = re.sub(rf"\b{fn}²", f"{spoken} 平方 ", s)
        s = re.sub(rf"\b{fn}\s*\(", f"{spoken} ", s)
        s = re.sub(rf"\b{fn}([A-Za-zθφαβ0-9])", rf"{spoken} \1", s)
        s = re.sub(rf"\b{fn}\b", f"{spoken} ", s)

    # 6) Standard math symbols & Greek letters
    replacements = [
        ("√(x²)", "根號 x 平方"),
        ("∛(x³)", "三次根號 x 三次方"),
        ("b² − 4ac", "b 平方減四 ac"),
        ("b²-4ac", "b 平方減四 ac"),
        ("a² + b²", "a 平方加 b 平方"),
        ("a² − b²", "a 平方減 b 平方"),
        ("log₁₀", "以十為底的 log "),
        ("log₂", "以二為底的 log "),
        ("logₐ", "以 a 為底的 log "),
        ("ln", "自然對數 ln "),
        ("lim", "極限 "),
        ("f''(x)", "f double prime of x"),
        ("f'(x)", "f prime of x"),
        ("f(x)", "f of x"),
        ("g(x)", "g of x"),
        ("A(x)", "A of x"),
        ("P(x)", "P of x"),
        ("Q(x)", "Q of x"),
        ("F(b) − F(a)", "大 F of b 減大 F of a"),
        ("Δx", "delta x"),
        ("Δy", "delta y"),
        ("Δ", "delta "),
        ("⇔", "，等價於 "),
        ("⇒", "，推得 "),
        ("→", " 趨近於 "),
        ("≤", " 小於等於 "),
        ("≥", " 大於等於 "),
        ("≠", " 不等於 "),
        ("≈", " 約等於 "),
        ("<", " 小於 "),
        (">", " 大於 "),
        ("=", " 等於 "),
        ("+", " 加 "),
        ("•", ""),
        ("±", " 正負 "),
        ("×", " 乘以 "),
        ("·", " 乘以 "),
        ("÷", " 除以 "),
        ("∞", " 無窮大 "),
        ("∫", " 積分 "),
        ("∑", " 連加 sigma "),
        ("Σ", " 連加 sigma "),
        ("π", " 拍 "),
        ("θ", " theta "),
        ("φ", " phi "),
        ("ω", " omega "),
        ("α", " alpha "),
        ("β", " beta "),
        ("√", " 根號 "),
        ("∛", " 三次根號 "),
        ("°", " 度"),
        ("²", " 平方"),
        ("³", " 三次方"),
        ("⁴", " 四次方"),
        ("⁻¹", " 的反函數"),
        ("ⁿ", " 的 n 次方"),
        ("ˣ", " 的 x 次方"),
        ("₀", " 零"), ("₁", " 一"), ("₂", " 二"), ("₃", " 三"), ("₄", " 四"), ("ₙ", " n"),
        ("m²", "平方公尺"), ("cm", "公分"), ("mm", "公釐"),
        ("｜", "，"), ("|", " "),
        ("−", " 減 "), ("–", " 到 "), ("—", "，"),
        ("{", ""), ("}", ""), ("_", " "), ("^", " 的次方 "), ("\\", ""),
        ("⟨", ""), ("⟩", ""), ("「", ""), ("」", ""),
        ("①", "第一，"), ("②", "第二，"), ("③", "第三，"), ("④", "第四，"), ("⑤", "第五，"),
    ]
    for k, v in replacements:
        s = s.replace(k, v)

    # Clean whitespace and punctuation artifacts
    s = re.sub(r"\(\s*\)", "", s)
    s = re.sub(r"\s+", " ", s)
    s = re.sub(r"\s*([，。！？；：、])\s*", r"\1", s)
    s = re.sub(r"[，、]{2,}", "，", s)
    s = re.sub(r"[。]{2,}", "。", s)
    return s.strip()


def complete_sentences(text: str, target_chars: int = 110) -> str:
    """Return ONLY complete Chinese sentences (NEVER cut mid-sentence with ellipsis)."""
    clean = text.strip().replace("\n\n", " ").replace("\n", " ")
    # Split into full sentences keeping end punctuation
    sents = re.findall(r"[^。！？]+[。！？]?", clean)
    if not sents:
        return clean
    out = ""
    for sent in sents:
        sent = sent.strip()
        if not sent:
            continue
        if not out:
            out = sent
        elif len(out) + len(sent) <= target_chars:
            out += sent
        else:
            break
    if out and out[-1] not in "。！？":
        out += "。"
    return out


def clean_step_pair(step_str: str) -> tuple[str, str]:
    s = re.sub(r"^步驟\s*\d+\s*[：:]\s*", "", step_str.strip())
    if "｜為什麼：" in s:
        a, b = s.split("｜為什麼：", 1)
        return a.strip(), b.strip()
    if "｜" in s:
        a, b = s.split("｜", 1)
        return a.strip(), b.strip()
    return s.strip(), ""


def load_math_c_topics() -> list[dict]:
    txt = (ROOT / "apps" / "web" / "src" / "data" / "subjects" / "math-c.ts").read_text(encoding="utf-8")
    marker = "export const mathCData: SubjectData = "
    obj_txt = txt[txt.index(marker) + len(marker) :].strip()
    if obj_txt.endswith(";"):
        obj_txt = obj_txt[:-1]
    return json.loads(obj_txt)["topics"]


# ============================================================
# 2. Natural Conversational Transitions (AI 懶人報 Style)
# ============================================================

CONCEPT_INTROS = [
    "首先我們從第一個核心觀念切入：{h}。",
    "抓穩節奏喔，第二個必考課綱重點是：{h}。",
    "再來這段在統測出題率超高，我們看第三個觀念：{h}。",
    "繼續往前推進，第四個關鍵觀念是：{h}。",
    "來，我們看第五個壓軸重點：{h}。",
    "最後一個課綱觀念也非常關鍵，千萬別漏掉：{h}。",
]

STEP_INTROS = [
    "光看公式還不夠，我們把「{h}」的算式步驟一步一步拆開來做一次。",
    "這招到底怎麼操作？跟著黑板這幾個步驟走一遍，馬上就有手感！",
    "來，我們把「{h}」標準化簡流程拆成清楚的步驟，考試照做絕不失手。",
    "實際算一次最清楚！看「{h}」怎麼一步步推導出來。",
]


def build_topic_scenes(idx: int, topic: dict, next_topic: dict | None) -> tuple[dict, list[dict]]:
    slug = topic["slug"]
    raw_title = re.sub(r"^\d+\.\s*", "", topic["title"]).strip()
    lesson_id = f"MC{idx:02d}"
    code = topic.get("curriculumCode", f"TCTE115-MC{idx}")
    qs_count = len(topic.get("covered_question_ids", []))
    hit_stars = "★" * int(topic.get("examHitRate", 3)) + "☆" * (5 - int(topic.get("examHitRate", 3)))

    meta = {
        "id": lesson_id,
        "slug": slug,
        "code": code,
        "title": raw_title,
        "subtitle": f"高工數學 C 十分鐘精講｜第 {idx:02d} 課",
        "output_name": f"{lesson_id}-{raw_title}.mp4",
        "voice": "zh-TW-HsiaoChenNeural",
        "rate": "+5%",
        "chapters": [
            "01 課綱破題",
            "02 知識點精講",
            "03 致命陷阱",
            "04 統測實戰",
            "05 考前懶人包",
        ],
    }

    scenes = []
    seq = 0

    def next_id():
        nonlocal seq
        seq += 1
        return f"{seq:02d}"

    concepts = topic.get("concepts", [])
    traps = topic.get("fatalTraps", [])
    models = topic.get("eliteMentalModels", [])
    examples = topic.get("worked_examples", [])
    practices = topic.get("practices", [])
    prereqs = topic.get("step0Prerequisites", [])

    # ---------------- PART 1: 開場破題 × Arch 教材原圖 ----------------
    desc_clean = complete_sentences(topic.get("desc", ""), 110)
    scenes.append({
        "id": next_id(),
        "chapter_idx": 0,
        "chime": True,
        "layout": "cover",
        "badge": f"108 課綱 {code} × 111–115 統測精講",
        "title": f"第 {idx:02d} 課：{raw_title}",
        "subtitle": "深度強化 108 課綱知識點推導 × Arch 工程圖解 × 統測題型實戰",
        "stats": [
            ("課綱代碼", code),
            ("統測熱度", f"{hit_stars}（{qs_count} 題）"),
            ("核心知識點", f"{len(concepts)} 大課綱單元"),
            ("教學架構", "課綱精講＋題型實戰"),
        ],
        "narration": (
            f"哈囉大家好，歡迎來到 Arch 高工數學懶人包！我是你的數學領航員。"
            f"今天進入第 {idx} 課《{raw_title}》。{math_to_spoken_zh(desc_clean)}"
            f"接下來約十分鐘，我們先用圖示和一步步算式，把課綱裡全部 {len(concepts)} 個核心知識點徹底講透，後面再帶你實戰統測經典題型！"
        ),
    })

    # Scene 02: Prerequisites + Curriculum Roadmap
    roadmap_items = []
    for c_i, c in enumerate(concepts[:6], 1):
        refs = "、".join(c.get("outlineRefs", []))
        first_formula = clean_visual_math((c.get("formula") or "").splitlines()[0])[:48]
        roadmap_items.append((f"{c_i:02d}", f"{c['heading'][:28]}", f"[{refs}] {first_formula}"))
    prereq_spoken = "，還有".join(math_to_spoken_zh(p) for p in prereqs[:2])
    scenes.append({
        "id": next_id(),
        "chapter_idx": 0,
        "chime": False,
        "layout": "roadmap",
        "title": f"108 課綱學習地圖與先備知識（{code}）",
        "subtitle": "先備連結：" + " ｜ ".join(p for p in prereqs[:2]) if prereqs else "對齊 108 技術型高中數學 C 課綱核心",
        "items": roadmap_items[:5],
        "narration": (
            f"開講前先花十秒對齊 108 課綱地圖。學這一課只要帶著兩個先備觀念：{prereq_spoken}，就能輕鬆上手！"
            f"我們會依序破解這 {len(concepts)} 個課綱知識點，每個觀念都會結合圖示直覺與算式推導。準備好了嗎？馬上開始！"
        ),
    })

    # ---------------- PART 2: 108 課綱核心知識點深度教學 (~62-65% 比重!) ----------------
    arch_shown = False
    for c_i, c in enumerate(concepts):
        refs = " / ".join(c.get("outlineRefs", [code]))
        heading = c["heading"]
        formula_lines = [clean_visual_math(ln.strip()) for ln in (c.get("formula") or "").splitlines() if ln.strip()]
        formula_main = "　｜　".join(formula_lines[:2])[:92]
        body_paras = [clean_visual_math(p.strip()) for p in (c.get("body") or "").split("\n\n") if p.strip()]
        bullets = [complete_sentences(p, 92) for p in body_paras[:3]]
        c_table = c.get("table")
        c_steps = c.get("steps", [])

        use_svg = CONCEPT_SVG_MAP.get((slug, c_i))
        intro_line = CONCEPT_INTROS[c_i % len(CONCEPT_INTROS)].format(h=math_to_spoken_zh(heading))
        spoken_body = " ".join(math_to_spoken_zh(complete_sentences(p, 72)) for p in body_paras[:2])
        spoken_formula = math_to_spoken_zh(formula_lines[0]) if formula_lines else ""

        if use_svg:
            scenes.append({
                "id": next_id(),
                "chapter_idx": 1,
                "chime": (c_i == 0),
                "layout": "split_svg",
                "tag": f"課綱知識點 {c_i+1}｜{refs}",
                "title": heading,
                "svg": use_svg,
                "formula": formula_main,
                "bullets": bullets,
                "narration": (
                    f"{intro_line}先看左邊這張幾何圖解！{spoken_body}"
                    + (f"這裡的核心公式一定要記牢：{spoken_formula}。" if spoken_formula else "")
                ),
            })
        elif not arch_shown and (c_i == 0 or c_i == 1):
            arch_shown = True
            scenes.append({
                "id": next_id(),
                "chapter_idx": 1,
                "chime": (c_i == 0),
                "layout": "split_arch",
                "tag": f"課綱知識點 {c_i+1}｜{refs} × Arch 教材原圖",
                "title": heading,
                "formula": formula_main,
                "arch_caption": f"Arch 教材原圖｜{raw_title} 工程應用直覺",
                "bullets": bullets,
                "narration": (
                    f"{intro_line}搭配左邊這張 Arch 建築教材原圖來看最直覺！{spoken_body}"
                ),
            })
        elif c_table and c_table.get("headers") and c_table.get("rows"):
            scenes.append({
                "id": next_id(),
                "chapter_idx": 1,
                "chime": (c_i == 0),
                "layout": "concept_table",
                "tag": f"課綱知識點 {c_i+1}｜{refs}",
                "title": heading,
                "formula": formula_main,
                "bullets": bullets[:2],
                "table": {
                    "headers": c_table["headers"][:4],
                    "rows": [[clean_visual_math(cell) for cell in r[:4]] for r in c_table["rows"][:4]],
                },
                "narration": (
                    f"{intro_line}{spoken_body}"
                    "你可以對照螢幕下方這張比較表，把觀念差異與使用時機一次釐清！"
                ),
            })
        else:
            scenes.append({
                "id": next_id(),
                "chapter_idx": 1,
                "chime": (c_i == 0),
                "layout": "concept_cards",
                "tag": f"課綱知識點 {c_i+1}｜{refs}",
                "title": heading,
                "formula": formula_main,
                "cards": [
                    {
                        "color": "cyan",
                        "heading": "核心觀念與直覺",
                        "body": bullets[0] if bullets else heading,
                        "example": formula_lines[0] if formula_lines else "",
                    },
                    {
                        "color": "amber",
                        "heading": "延伸推導與考點",
                        "body": bullets[1] if len(bullets) > 1 else (bullets[0] if bullets else ""),
                        "example": formula_lines[1] if len(formula_lines) > 1 else (bullets[-1] if bullets else ""),
                    },
                ],
                "narration": f"{intro_line}{spoken_body}",
            })

        # Step-by-step derivation board for concepts (up to 3 key derivations for 5-6 concept topics, ALL concepts for 3-4 concept topics!)
        max_derivations = len(concepts) if len(concepts) <= 4 else 3
        if c_steps and c_i < max_derivations:
            msteps = []
            step_narration_parts = []
            for s_i, st in enumerate(c_steps[:3], 1):
                act, why = clean_step_pair(st)
                act_v = clean_visual_math(act)
                why_v = clean_visual_math(why)
                msteps.append((
                    f"步驟 {s_i}",
                    f'<span style="font-size:25px;line-height:1.35;">{act_v}</span>',
                    why_v or "依課綱標準程序逐步化簡與檢核。",
                ))
                step_narration_parts.append(f"第 {s_i} 步，{math_to_spoken_zh(complete_sentences(act, 65))}")

            step_intro = STEP_INTROS[c_i % len(STEP_INTROS)].format(h=math_to_spoken_zh(heading.split("：")[0]))
            scenes.append({
                "id": next_id(),
                "chapter_idx": 1,
                "chime": False,
                "layout": "math_steps",
                "tag": f"一步一步算式推導｜{refs}",
                "title": f"操作與化簡流程：{heading.split('：')[0]}",
                "formula": formula_main,
                "active_step": len(msteps) - 1,
                "math_steps": msteps,
                "verify": clean_visual_math(clean_step_pair(c_steps[3])[0]) if len(c_steps) > 3 else "完成化簡後，務必代回原式或用數值檢查正負號！",
                "narration": step_intro + "".join(step_narration_parts) + "照著這三步操作，觀念跟計算就穩穩串起來了！",
            })

    # ---------------- PART 3: 考場致命陷阱 × 名師秒殺心法 ----------------
    if traps:
        trap_cards = []
        trap_spoken = []
        for t_i, tr in enumerate(traps[:2], 1):
            w = clean_visual_math(tr.get("wrongThinking", ""))
            r = clean_visual_math(tr.get("correctThinking", ""))
            d = clean_visual_math(tr.get("trapDescription", ""))
            trap_cards.append({
                "num": f"致命陷阱 0{t_i}",
                "wrong": complete_sentences(w, 72),
                "right": complete_sentences(r, 85),
                "tip": complete_sentences(d, 90),
            })
            trap_spoken.append(
                f"第 {t_i} 個雷區：超多同學誤以為{math_to_spoken_zh(complete_sentences(w, 55))}"
                f"但正確觀念是：{math_to_spoken_zh(complete_sentences(r, 70))}"
            )
        scenes.append({
            "id": next_id(),
            "chapter_idx": 2,
            "chime": True,
            "layout": "trap_compare",
            "tag": "考場致命陷阱排雷",
            "title": f"《{raw_title}》統測最高頻的失分雷區",
            "traps": trap_cards,
            "narration": "核心知識點打通了，馬上進入考場排雷區！" + "".join(trap_spoken),
        })

    if models:
        m_cards = []
        m_spoken = []
        colors = ["amber", "emerald"]
        for m_i, m in enumerate(models[:2]):
            expl = clean_visual_math(m.get("explanation", ""))
            m_cards.append({
                "color": colors[m_i % 2],
                "heading": f"心法 {m_i+1}：{m['technique']}",
                "body": complete_sentences(expl, 110),
                "example": f"實戰定位：看到相關題型立刻套用「{m['technique']}」破題！",
            })
            m_spoken.append(
                f"心法 {m_i+1} 叫做{math_to_spoken_zh(m['technique'])}：{math_to_spoken_zh(complete_sentences(expl, 80))}"
            )
        scenes.append({
            "id": next_id(),
            "chapter_idx": 2,
            "chime": False,
            "layout": "concept_cards",
            "tag": "名師秒殺心法",
            "title": f"帶進考場的《{raw_title}》萬用思維模型",
            "formula": "　｜　".join(f"心法 {i+1}：{m['technique']}" for i, m in enumerate(models[:2])),
            "cards": m_cards,
            "narration": "排完雷，幫你整理兩套帶進考場的萬用秒殺心法！" + "".join(m_spoken) + "現在就直接進統測經典題型實戰！",
        })

    # ---------------- PART 4: 統測經典題型實戰解析 (完整保留並涵蓋所有步驟!) ----------------
    # Always include both worked_examples; if lesson has <= 3 concepts (MC12, MC13), also add 1 practice problem for complete coverage!
    problem_set = list(examples[:2])
    if len(concepts) <= 3 and practices:
        problem_set.append(practices[min(2, len(practices) - 1)])

    for e_i, ex in enumerate(problem_set, 1):
        diff = ex.get("difficulty", "中等")
        q_text = clean_visual_math(ex.get("question", ""))
        hints = [clean_visual_math(h) for h in ex.get("hints", [])]
        common_err = clean_visual_math(ex.get("commonMistake", ""))
        shortcut = clean_visual_math(ex.get("eliteShortcut", ""))
        ex_steps = ex.get("steps", [])
        ans = clean_visual_math(ex.get("answer", ""))

        # Scene A: Full Problem + Hints + Mistake Warning
        setup_steps = []
        if hints:
            setup_steps.append(("破題線索", "；".join(hints[:2])))
        if common_err:
            setup_steps.append(("避坑提醒", complete_sentences(common_err, 95)))
        scenes.append({
            "id": next_id(),
            "chapter_idx": 3,
            "chime": (e_i == 1),
            "layout": "example",
            "tag": f"實戰解題 {e_i}｜{diff}・審題與破題",
            "title": f"統測經典題型 {e_i}：先抓條件再列式",
            "problem": q_text,
            "steps": setup_steps,
            "shortcut": None,
            "narration": (
                f"來看實戰第 {e_i} 題，難度屬於{diff}。題目這樣問：{math_to_spoken_zh(complete_sentences(q_text, 105))}"
                + (f"破題關鍵是：{math_to_spoken_zh(hints[0])}。" if hints else "")
                + (f"千萬別踩這個坑：{math_to_spoken_zh(complete_sentences(common_err, 65))}" if common_err else "")
            ),
        })

        # Scene B: ALL Solution Steps + Answer + Elite Shortcut
        sol_steps = []
        sol_spoken = []
        for s_i, st in enumerate(ex_steps[:4], 1):
            act, _ = clean_step_pair(st)
            act_v = clean_visual_math(act)
            sol_steps.append((f"步驟 {s_i}", complete_sentences(act_v, 95)))
            sol_spoken.append(f"步驟 {s_i}，{math_to_spoken_zh(complete_sentences(act_v, 65))}")
        sol_steps.append(("最終答案", ans))
        scenes.append({
            "id": next_id(),
            "chapter_idx": 3,
            "chime": False,
            "layout": "example",
            "tag": f"實戰解題 {e_i}｜完整逐步解析 × 秒殺法",
            "title": f"統測經典題型 {e_i}：算式化解與驗算",
            "problem": complete_sentences(q_text, 95),
            "steps": sol_steps[:4] if len(sol_steps) > 4 else sol_steps,
            "shortcut": f"名師秒殺：{shortcut}" if shortcut else None,
            "narration": (
                "我們照步驟把算式解開："
                + "".join(sol_spoken[:3])
                + f"最後算出答案就是：{math_to_spoken_zh(complete_sentences(ans, 70))}"
                + (f"想更快的話用秒殺技：{math_to_spoken_zh(complete_sentences(shortcut, 65))}" if shortcut else "")
            ),
        })

    # ---------------- PART 5: 30 秒考前懶人包總結 & 下課預告 ----------------
    sum_cards = []
    sum_spoken = []
    for c_i, c in enumerate(concepts[:5], 1):
        first_f = clean_visual_math((c.get("formula") or "").splitlines()[0])[:72]
        sum_cards.append((f"{c_i}. {c['heading'].split('：')[0][:14]}", first_f or complete_sentences(c.get("body", ""), 65)))
        sum_spoken.append(f"第 {c_i} 點，{math_to_spoken_zh(c['heading'].split('：')[0])}；")
    scenes.append({
        "id": next_id(),
        "chapter_idx": 4,
        "chime": True,
        "layout": "summary",
        "tag": "30 秒考前懶人包｜歡迎截圖複習",
        "title": f"第 {idx:02d} 課《{raw_title}》終極速查表",
        "cards": sum_cards,
        "narration": (
            f"最後送上第 {idx} 課三十秒考前懶人包，歡迎直接截圖存手機！今天完整打通了："
            + "".join(sum_spoken)
            + "把這幾條核心公式跟圖示記熟，統測遇到這單元就穩穩拿分！"
        ),
    })

    if next_topic:
        nxt_title = re.sub(r"^\d+\.\s*", "", next_topic["title"]).strip()
        nxt_qs = len(next_topic.get("covered_question_ids", []))
        next_title_str = f"下一課預告：第 {idx+1:02d} 課《{nxt_title}》"
        next_desc_str = f"111–115 統測命題 {nxt_qs} 題核心單元！繼續用 10 分鐘從課綱圖解一路衝到統測實戰。"
        outro_spoken = (
            f"恭喜你完賽第 {idx} 課《{raw_title}》！趁記憶最熱的時候，趕快打開 Arch 平台把這章的練習跟歷屆真題刷過一遍。"
            f"下一課我們要繼續攻略第 {idx+1} 課《{nxt_title}》！我是 Arch 數學領航員，我們下一課見，掰掰！"
        )
    else:
        next_title_str = "🎉 高工數學 C 全 15 課完整完賽！"
        next_desc_str = "恭喜打通 108 課綱 TCTE115-MC1 ～ MC15 全部單元！現在就到 Arch `/learn` 挑戰統測整卷模擬吧！"
        outro_spoken = (
            f"恭喜你！高工數學 C 全部十五課，從第一章到最後一章《{raw_title}》已經徹底完賽囉！"
            "記得回到 Arch 平台挑戰統測全真模擬考，把這十五課的功力變成考場高分！我是 Arch 數學領航員，祝你金榜題名，掰掰！"
        )

    scenes.append({
        "id": next_id(),
        "chapter_idx": 4,
        "chime": False,
        "layout": "outro",
        "tag": "Arch 高工數學 C · 15 課完整系列",
        "title": f"第 {idx:02d} 課完賽！馬上回 Arch 刷題驗證",
        "subtitle": f"前往 Arch 平台 `/subjects/math-c/{slug}` 練習 111–115 統測歷屆真題",
        "next_title": next_title_str,
        "next_desc": next_desc_str,
        "narration": outro_spoken,
    })

    return meta, scenes


def load_handcrafted_tw_scripts() -> dict[str, dict[str, str]]:
    """Load all hand-crafted natural Taiwan Mandarin scripts from scripts/video/scripts_tw/batch_*.json."""
    merged: dict[str, dict[str, str]] = {}
    tw_dir = ROOT / "scripts" / "video" / "scripts_tw"
    if tw_dir.exists():
        for fp in sorted(tw_dir.glob("batch_*.json")):
            data = json.loads(fp.read_text(encoding="utf-8"))
            merged.update(data)
    return merged


def get_lesson_data(idx: int, topics: list[dict]) -> tuple[dict, list[dict]]:
    topic = topics[idx - 1]
    next_topic = topics[idx] if idx < len(topics) else None
    if idx == 1:
        mod = importlib.import_module("lessons.mc01_functions_graphs")
        meta = dict(mod.LESSON_META)
        meta["rate"] = "+5%"
        scenes = [dict(s) for s in mod.SCENES]
        if not any(s["id"] == "02b" for s in scenes):
            arch_beat = {
                "id": "02b",
                "chapter_idx": 1,
                "chime": False,
                "layout": "split_arch",
                "tag": "108 課綱先備銜接 × Arch 教材原圖",
                "title": "為什麼坐標與函數是工程數學的起點？",
                "formula": "國中先備（數線・畢氏定理・乘法公式） → 高工數學 C（距離・函數極值・不等式）",
                "arch_caption": "Arch 教材原圖｜平衡關係與函數根的幾何直覺",
                "bullets": [
                    "函數圖形把「代數方程式的解」變成「曲線與 x 軸的交點」，一眼看出正負與極值。",
                    "先備檢核：① 一元一次移項變號；② (a ± b)² 與平方差 a² − b²；③ 坐標象限與畢氏定理。",
                    "本章對應統測 TCTE115-MC1（MC1.1 ～ MC1.4），近 5 年穩出 8～9 題！",
                ],
                "narration": (
                    "先看左邊這張 Arch 教材原圖！函數圖形最厲害的地方，是把抽象的方程式，變成肉眼看得見的高低起伏跟交點。"
                    "學這章前只要帶著三個國中工具，移項變號、平方差乘法公式、還有畢氏定理，就能把 108 課綱四個子單元一次打通！"
                ),
            }
            scenes.insert(2, arch_beat)
        return meta, scenes

    meta, scenes = build_topic_scenes(idx, topic, next_topic)
    tw_scripts = load_handcrafted_tw_scripts().get(meta["id"], {})
    if tw_scripts:
        for s in scenes:
            if s["id"] in tw_scripts:
                s["narration"] = tw_scripts[s["id"]]
    return meta, scenes


def audit_all_lessons(topics: list[dict]) -> bool:
    bad_patterns = {
        "ellipsis": re.compile(r"…|\.\.\."),
        "latex": re.compile(r"[_^{}\\]"),
        "slash": re.compile(r"[0-9a-zA-Z\)\]]/[0-9a-zA-Z\(\[]"),
        "angle": re.compile(r"[<>⟨⟩]"),
        "symbol": re.compile(r"[√∛∫∑ΣπθφωαβΔ≤≥≠≈±×·÷∞⇔⇒→−]"),
        "trig_merged": re.compile(r"\b(sin(?!e\b)|cos(?!ine\b|ecant\b)|tan(?!gent\b)|cot(?!angent\b)|sec(?!ant\b)|csc)[A-Za-z0-9]"),
    }
    all_ok = True
    for idx in range(1, 16):
        meta, scenes = get_lesson_data(idx, topics)
        full = " ".join(s["narration"] for s in scenes)
        chars = len(full)
        issues = []
        for name, pat in bad_patterns.items():
            hits = pat.findall(full)
            if hits:
                issues.append(f"{name}:{len(hits)}({hits[:3]})")
        status = "CLEAN" if not issues else "ISSUES -> " + "; ".join(issues)
        if issues:
            all_ok = False
        print(f"MC{idx:02d} ({len(scenes):2d} scenes, {chars:4d} chars): {status}")
    return all_ok


async def main():
    args = sys.argv[1:]
    topics = load_math_c_topics()
    if "--audit" in args:
        ok = audit_all_lessons(topics)
        sys.exit(0 if ok else 1)

    force = "--force" in args
    nums = [int(a) for a in args if a.isdigit()]
    start_idx = nums[0] if len(nums) >= 1 else 1
    end_idx = nums[1] if len(nums) >= 2 else (nums[0] if len(nums) == 1 else 15)

    out_dir = ROOT / "output" / "videos"
    out_dir.mkdir(parents=True, exist_ok=True)
    report = []
    t_all = time.time()

    for idx in range(start_idx, end_idx + 1):
        meta, scenes = get_lesson_data(idx, topics)
        target_mp4 = out_dir / meta["output_name"]
        if not force and target_mp4.exists() and target_mp4.stat().st_size > 2_000_000:
            print(f"[SKIP] {meta['output_name']} already exists")
            continue

        res = await build_from_data(meta, scenes, force_tts=force)
        report.append({"id": meta["id"], "title": meta["title"], **res})

    print(f"\n================ BATCH DONE ({len(report)} videos built in {(time.time()-t_all)/60:.1f} min) ================")


if __name__ == "__main__":
    asyncio.run(main())
