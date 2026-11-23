# -*- coding: utf-8 -*-
"""
V3.0 Deep-Pedagogy Vocational High School (高工建築科 13 科 / 統測土木與建築群) Video Production Pipeline
========================================================================================================
Outputs ALL 126 vocational high-school episodes across ALL 13 subjects exclusively to:
    output/videos-高工/

V3.0 Core Pedagogical Upgrades (Synced 1:1 with Upgraded Web Teaching Pages):
  1. ALL 13 Subjects Updated (including Math C MC01-MC16 + all 12 other subjects = 126/126 episodes!)
  2. NEW Dedicated Part 1 "為何要學 × 生活與建築工程哪裡用到 (Connection to Real Life)" Scene:
       - 120+6 unique realLifeImportance, whereUsed, everydayAnalogy, handsOnObservation & cold-open hook
  3. 100% Complete Knowledge Point Articulation (ZERO truncation — all 990 concepts taught!)
       - Math C custom SVGs (svg_library.py) + Engineering Blueprint SVGs (vocational_svgs.py) + Multi-webp discovery
       - Progressive Step-by-Step Derivation Boards (math_steps) + Structured Comparison Tables
  4. NEW Dedicated Part 3 "應用變化與條件變形全剖析 (Application Variations)" Scene:
       - 3 concrete condition-shift / variation scenarios per episode + killerTrick one-liner
  5. Complete Fatal Traps + Dedicated Elite Mental Models + Multi-Problem & REAL 111-115 TCTE Past Exam Questions
  6. Unified Warm Taiwan Voice (Microsoft Yating zh-TW) + Soft Chapter Chimes + Broadcast -16 LUFS
  7. GPU NVENC 1080p H.264 (with automatic CPU fallback) + Burned ASS + Embedded mov_text + Sidecar .srt/.ass

Usage:
  python scripts/video/build_vocational_v3.py --force mechanics materials
  python scripts/video/build_vocational_v3.py --force surveying drafting
  python scripts/video/build_vocational_v3.py --force math-c extra
  python scripts/video/build_vocational_v3.py --force chinese english
  python scripts/video/build_vocational_v3.py --force physics chemistry history
  python scripts/video/build_vocational_v3.py --force geography civics extensions
  python scripts/video/build_vocational_v3.py --verify
"""

import asyncio
import json
import os
import pathlib
import re
import shutil
import subprocess
import sys
import time
import wave

ROOT = pathlib.Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT / "scripts" / "video"))

from build_lesson_video import (
    get_audio_duration,
    image_to_data_uri,
    render_scene_html,
    write_ass_subtitles,
    write_srt_subtitles,
)
from build_all_math_c import clean_step_pair, clean_visual_math, complete_sentences
from build_vocational_v2 import (
    PersistentCDPRenderer,
    SUBJECT_PREFIX_MAP,
    UNIVERSITY_OUT_DIR,
    VOCATIONAL_OUT_DIR,
    clean_display,
    clean_heading,
    engineering_to_spoken_zh,
    find_topic_visuals,
    get_chime_pcm,
    load_tcte_past_questions,
    safe_filename_title,
    strip_html_tags,
    synthesize_scene_wav,
)
from svg_library import CONCEPT_SVG_MAP as MATH_C_SVG_MAP
from vocational_svgs import TOPIC_SVG_MAPPING, VOCATIONAL_SVGS
from tcte_extra_chapters import EXTRA_TCTE_EPISODES

WORK_ROOT_V3 = ROOT / "tmp" / "video_build_v3"
DATA_V3_PATH = ROOT / "tmp" / "video_build" / "all_curriculum_data_v3.json"

CONCEPT_OPENERS = [
    "首先深入第一個核心知識點：{h}。",
    "緊接著看第二個必考重點：{h}。",
    "第三個課綱知識點非常關鍵：{h}。",
    "繼續往前推進，第四個核心觀念是：{h}。",
    "再來看第五個重要考點：{h}。",
    "接著完整掌握第六個知識點：{h}。",
    "第七個觀念在跨章情境題也很常出現：{h}。",
    "最後一個重點知識點千萬別漏掉：{h}。",
]


def split_variation_title(text: str, idx: int) -> tuple[str, str]:
    s = clean_visual_math(strip_html_tags(text))
    for sep in ("：", ":"):
        if sep in s:
            head, rest = s.split(sep, 1)
            if 2 <= len(head.strip()) <= 26:
                return head.strip(), complete_sentences(rest.strip(), 88)
    return f"應用變化 {idx:02d}", complete_sentences(s, 88)


def build_v3_vocational_scenes(
    subj_slug: str,
    subj_title: str,
    topic: dict,
    idx: int,
    lesson_id: str,
    next_topic_title: str | None,
    enrichment: dict | None = None,
) -> tuple[dict, list[dict], dict]:
    subj_clean = clean_heading(subj_title)
    slug = topic["slug"]
    raw_title = clean_heading(topic["title"])
    safe_title = safe_filename_title(raw_title)
    code = topic.get("curriculumCode", f"108-{lesson_id}")
    qs_count = len(topic.get("covered_question_ids", []))
    hit_rate = int(topic.get("examHitRate", 4) or 4)
    hit_stars = "★" * min(5, hit_rate) + "☆" * max(0, 5 - hit_rate)

    concepts = topic.get("concepts", [])
    traps = topic.get("fatalTraps", [])
    models = topic.get("eliteMentalModels", [])
    examples = topic.get("worked_examples", [])
    practices = topic.get("practices", [])
    prereqs = topic.get("step0Prerequisites", [])

    # Real-life connection + application variations + deep knowledge
    enr = enrichment or {}
    rl = enr.get("realLife") or topic.get("realLife") or {}
    hk = enr.get("interestHook") or {}
    dk = enr.get("deepKnowledge") or {}
    exam_trend = dk.get("examTrend") or {}
    landmark = dk.get("landmarkCase") or {}

    why_learn = strip_html_tags(rl.get("realLifeImportance") or hk.get("importance") or topic.get("desc", ""))
    where_used = strip_html_tags(rl.get("whereUsed") or hk.get("application") or landmark.get("structuralFeature") or "建築工程設計與統測實戰應用")
    analogy = strip_html_tags(rl.get("everydayAnalogy") or hk.get("hook") or "")
    observe = strip_html_tags(rl.get("handsOnObservation") or "")
    hook_line = strip_html_tags(hk.get("hook") or analogy)
    jh_bridge = strip_html_tags(rl.get("juniorHighBridge") or "")
    one_recap = strip_html_tags(rl.get("oneSentenceRecap") or "")
    variations = [strip_html_tags(v) for v in (rl.get("applicationVariations") or exam_trend.get("keyQuestionTypes") or []) if strip_html_tags(v)]
    killer_trick = strip_html_tags(rl.get("killerTrick") or exam_trend.get("killerTrick") or "")

    visuals = find_topic_visuals(subj_slug, slug)
    visual_uris = [(lbl, image_to_data_uri(p)) for lbl, p in visuals if p.exists()]
    primary_uri = visual_uris[0][1] if visual_uris else ""

    eng_svg_key = TOPIC_SVG_MAPPING.get((subj_slug, slug))
    eng_svg = VOCATIONAL_SVGS.get(eng_svg_key) if eng_svg_key else None

    meta = {
        "id": lesson_id,
        "subject_slug": subj_slug,
        "slug": slug,
        "brand": f"ARCH 高工・{subj_clean}",
        "code": code,
        "title": raw_title,
        "subtitle": f"108 課綱 × 生活連結與應用變化深度精講｜{subj_clean} 第 {idx:02d} 課",
        "output_name": f"{lesson_id}-{safe_title}.mp4",
        "chapters": [
            "01 為何要學",
            "02 全知識精講",
            "03 應用變化",
            "04 排雷與實戰",
            "05 考前懶人包",
        ],
    }

    scenes: list[dict] = []
    seq = 0

    def next_id() -> str:
        nonlocal seq
        seq += 1
        return f"{seq:02d}"

    # ------------------------------------------------------------
    # PART 1: Cover + Real-Life Connection ("為何要學 × 哪裡用到") + Roadmap
    # ------------------------------------------------------------
    desc_clean = clean_display(topic.get("desc", ""), 115)
    scenes.append({
        "id": next_id(),
        "chapter_idx": 0,
        "chime": True,
        "layout": "cover",
        "arch_image_uri": primary_uri,
        "badge": f"108 課綱 {code} × 統測深度精講 v3.0",
        "title": f"{lesson_id}：{raw_title}",
        "subtitle": f"{subj_clean}｜為何要學 × 全知識點 × 應用變化 × 真題實戰",
        "stats": [
            ("官方課綱代碼", code),
            ("統測命題熱度", f"{hit_stars}" + (f"（{qs_count} 題）" if qs_count else "（核心必考）")),
            ("完整知識點", f"{len(concepts)} 大觀念 100% 覆蓋"),
            ("生活與變形", "為何要學＋3大應用變化"),
        ],
        "narration": (
            f"哈囉同學大家好，歡迎來到 Arch 高工建築科深度精講！今天我們進入{subj_clean}第 {idx} 課《{raw_title}》。"
            f"{engineering_to_spoken_zh(desc_clean)}"
            f"這堂課我們不只帶你把全部 {len(concepts)} 個課綱知識點講透，更會先回答『離開考卷到底為什麼要學、真實生活跟建築工地哪裡用到』，接著拆解條件改變時的應用變化與統測真題！"
        ),
    })

    # Scene 02: NEW! Connection to Real Life ("為何要學 × 離開考卷哪裡用到")
    scenes.append({
        "id": next_id(),
        "chapter_idx": 0,
        "chime": False,
        "layout": "concept_cards",
        "tag": "為何要學 × 真實世界連結｜Connection to Real Life",
        "title": f"離開考卷，為什麼一定要學《{raw_title}》？",
        "formula": f"生活直覺類比：{complete_sentences(clean_visual_math(analogy), 82)}" if analogy else f"真實連結：{where_used[:80]}",
        "cards": [
            {
                "color": "cyan",
                "heading": "🎯 為什麼一定要學？（真實影響）",
                "body": complete_sentences(clean_visual_math(why_learn), 118),
                "example": f"💡 腦內小劇場：{complete_sentences(clean_visual_math(hook_line), 76)}" if hook_line else f"核心價值：{code}",
            },
            {
                "color": "emerald",
                "heading": "🏙️ 生活與建築工程哪裡用到？",
                "body": complete_sentences(clean_visual_math(where_used), 118),
                "example": f"👀 現在就能觀察：{complete_sentences(clean_visual_math(observe), 76)}" if observe else (f"🏛️ 台灣案例：{landmark.get('name', '')}" if landmark.get("name") else f"實務場域：{subj_clean}工程現場"),
            },
        ],
        "narration": (
            f"在碰公式和名詞之前，先花半分鐘搞懂為什麼要學《{raw_title}》！"
            f"{engineering_to_spoken_zh(complete_sentences(why_learn, 130))}"
            f"離開考卷後，這章在這些地方天天用到：{engineering_to_spoken_zh(complete_sentences(where_used, 105))}"
            + (f"用生活來比喻最直覺：{engineering_to_spoken_zh(complete_sentences(analogy, 95))}" if analogy else "")
            + (f"下課後你也可以親自觀察：{engineering_to_spoken_zh(complete_sentences(observe, 80))}" if observe else "")
        ),
    })

    # Scene 03: 108 Curriculum Roadmap + Junior-High Bridge
    roadmap_items = []
    for c_i, c in enumerate(concepts[:5], 1):
        refs = "、".join(c.get("outlineRefs", []) or [code])[:18]
        h = clean_heading(c.get("heading", f"觀念 {c_i}"))[:28]
        first_f = clean_visual_math(strip_html_tags((c.get("formula") or "").splitlines()[0]))[:46] if c.get("formula") else clean_display(c.get("body", ""), 46)
        roadmap_items.append((f"{c_i:02d}", h, f"[{refs}] {first_f}"))
    if len(concepts) > 5:
        extra_names = "、".join(clean_heading(c.get("heading", ""))[:12] for c in concepts[5:9])
        roadmap_items[4] = (
            "05+",
            f"進階與延伸觀念（共 {len(concepts) - 4} 項全涵蓋）",
            f"完整補齊：{extra_names}" + (" 等核心要點" if len(concepts) > 9 else ""),
        )

    bridge_sub = complete_sentences(clean_visual_math(jh_bridge), 78) if jh_bridge else (
        " ｜ ".join(strip_html_tags(p)[:38] for p in prereqs[:2]) if prereqs else f"對應 {subj_clean} 108 課綱必修條目"
    )
    scenes.append({
        "id": next_id(),
        "chapter_idx": 0,
        "chime": False,
        "layout": "roadmap",
        "tag": "本課導覽 × 國中先備銜接",
        "title": f"108 課綱學習地圖（{code}）",
        "subtitle": f"其實你不是從零開始：{bridge_sub}",
        "items": roadmap_items,
        "narration": (
            f"其實你完全不是從零開始！{engineering_to_spoken_zh(bridge_sub)}"
            f"接下來我們依序打通這 {len(concepts)} 大課綱知識點，再進入條件變形應用與統測實戰。準備好了就出發！"
        ),
    })

    # ------------------------------------------------------------
    # PART 2: 100% Complete Knowledge Point Articulation (ZERO Truncation!)
    # ------------------------------------------------------------
    solo_limit = len(concepts) if len(concepts) <= 8 else 5
    eng_svg_used = False
    vis_cursor = 1
    derivations_added = 0
    max_derivations = 2 if len(concepts) <= 8 else 1

    for c_i, c in enumerate(concepts[:solo_limit]):
        refs = " / ".join(c.get("outlineRefs", []) or [code])
        heading = clean_heading(c.get("heading", f"核心觀念 {c_i+1}"))
        formula_lines = [clean_visual_math(strip_html_tags(ln)) for ln in (c.get("formula") or "").splitlines() if ln.strip()]
        formula_main = "　｜　".join(formula_lines[:2])[:94]
        body_raw = strip_html_tags(c.get("body", ""))
        body_paras = [clean_visual_math(p.strip()) for p in re.split(r"\n+", body_raw) if p.strip()]
        bullets = [complete_sentences(p, 96) for p in body_paras[:3]]
        if not bullets and body_raw:
            bullets = [complete_sentences(clean_visual_math(body_raw), 96)]
        c_steps = [strip_html_tags(st) for st in (c.get("steps") or []) if strip_html_tags(st)]
        for st in c_steps[:2]:
            if len(bullets) < 3:
                act, _ = clean_step_pair(st)
                bullets.append(complete_sentences(clean_visual_math(act), 92))

        c_table = c.get("table")
        has_table = bool(c_table and c_table.get("headers") and c_table.get("rows"))
        opener = CONCEPT_OPENERS[c_i % len(CONCEPT_OPENERS)].format(h=engineering_to_spoken_zh(heading))
        spoken_body = engineering_to_spoken_zh(complete_sentences(body_raw, 175))
        spoken_formula = engineering_to_spoken_zh(formula_lines[0]) if formula_lines else ""

        math_svg = MATH_C_SVG_MAP.get((slug, c_i)) if subj_slug == "math-c" else None
        use_svg = math_svg or (eng_svg if (eng_svg and not eng_svg_used and c_i in (0, 1)) else None)

        if use_svg:
            if use_svg is eng_svg:
                eng_svg_used = True
            scenes.append({
                "id": next_id(),
                "chapter_idx": 1,
                "chime": (c_i == 0),
                "layout": "split_svg",
                "tag": f"課綱知識點 {c_i+1}/{len(concepts)}｜{refs}",
                "title": heading,
                "svg": use_svg,
                "formula": formula_main or f"核心重點：{heading}",
                "bullets": bullets[:3],
                "narration": (
                    f"{opener}先看左邊這張高解析向量圖解！{spoken_body}"
                    + (f"這裡的核心公式一定要記牢：{spoken_formula}。" if spoken_formula else "")
                ),
            })
        elif has_table and c_i > 0:
            rows_clean = [
                [clean_visual_math(strip_html_tags(cell))[:36] for cell in r[:4]]
                for r in c_table["rows"][:5]
            ]
            row_note = ""
            if rows_clean and len(rows_clean[0]) >= 2:
                r0 = f"{rows_clean[0][0]}對應{rows_clean[0][1]}"
                r1 = f"，{rows_clean[1][0]}對應{rows_clean[1][1]}" if len(rows_clean) > 1 else ""
                row_note = f"對照下方比較表，{engineering_to_spoken_zh(r0 + r1)}，把各情況差異一次釐清。"
            scenes.append({
                "id": next_id(),
                "chapter_idx": 1,
                "chime": False,
                "layout": "concept_table",
                "tag": f"課綱知識點 {c_i+1}/{len(concepts)}｜{refs}",
                "title": heading,
                "formula": formula_main or f"{raw_title}・規格與特性比較表",
                "bullets": bullets[:2],
                "table": {
                    "headers": [strip_html_tags(h)[:20] for h in c_table["headers"][:4]],
                    "rows": rows_clean,
                },
                "narration": (
                    f"{opener}{spoken_body}"
                    + (f"核心公式為：{spoken_formula}。" if spoken_formula else "")
                    + row_note
                ),
            })
        elif visual_uris and (c_i == 0 or (vis_cursor < len(visual_uris) and c_i % 2 == 1)):
            v_idx = 0 if c_i == 0 else vis_cursor
            if c_i > 0:
                vis_cursor += 1
            v_lbl, v_uri = visual_uris[v_idx]
            scenes.append({
                "id": next_id(),
                "chapter_idx": 1,
                "chime": (c_i == 0),
                "layout": "split_arch",
                "tag": f"課綱知識點 {c_i+1}/{len(concepts)}｜{refs}",
                "title": heading,
                "formula": formula_main,
                "arch_image_uri": v_uri,
                "arch_caption": f"Arch {v_lbl}｜{raw_title}",
                "bullets": bullets[:3],
                "narration": (
                    f"{opener}搭配左邊這張 Arch {v_lbl}來看最直覺！{spoken_body}"
                    + (f"關鍵關係式請記牢：{spoken_formula}。" if spoken_formula else "")
                ),
            })
        else:
            sec_body = bullets[1] if len(bullets) > 1 else (
                complete_sentences(clean_visual_math(body_raw[len(bullets[0]):]), 95) if len(body_raw) > len(bullets[0]) + 15 else bullets[0]
            )
            scenes.append({
                "id": next_id(),
                "chapter_idx": 1,
                "chime": (c_i == 0),
                "layout": "concept_cards",
                "tag": f"課綱知識點 {c_i+1}/{len(concepts)}｜{refs}",
                "title": heading,
                "formula": formula_main or f"核心要領：{heading}",
                "cards": [
                    {
                        "color": "cyan",
                        "heading": "核心原理與課綱規範",
                        "body": bullets[0],
                        "example": formula_lines[0][:68] if formula_lines else f"對齊課綱條目：{refs}",
                    },
                    {
                        "color": "amber",
                        "heading": "工程應用與判讀重點",
                        "body": sec_body or bullets[0],
                        "example": (formula_lines[1][:68] if len(formula_lines) > 1 else (c_steps[0][:68] if c_steps else f"實戰定位：{raw_title} 高頻考點")),
                    },
                ],
                "narration": (
                    f"{opener}{spoken_body}"
                    + (f"重要公式或規範為：{spoken_formula}。" if spoken_formula else "")
                ),
            })

        if len(c_steps) >= 2 and derivations_added < max_derivations:
            derivations_added += 1
            msteps = []
            step_spoken = []
            default_notes = [
                "先釐清已知幾何條件、座標與基準假設。",
                "依官方課綱公式或標準規範逐步代入計算。",
                "最後檢核單位量綱、正負方向與合理範圍。",
            ]
            for s_i, st in enumerate(c_steps[:3], 1):
                act, why = clean_step_pair(st)
                act_v = complete_sentences(clean_visual_math(act), 68)
                why_v = complete_sentences(clean_visual_math(why), 62) if why else default_notes[(s_i - 1) % 3]
                msteps.append((
                    f"步驟 {s_i}",
                    f'<span style="font-size:24px;line-height:1.35;">{act_v}</span>',
                    why_v,
                ))
                step_spoken.append(f"步驟 {s_i}，{engineering_to_spoken_zh(act_v)}")
            scenes.append({
                "id": next_id(),
                "chapter_idx": 1,
                "chime": False,
                "layout": "math_steps",
                "tag": f"標準作業推導流程｜{refs}",
                "title": f"實作步驟拆解：{heading[:26]}",
                "formula": formula_main or f"{heading} 標準三步驟",
                "active_step": len(msteps) - 1,
                "math_steps": msteps,
                "verify": complete_sentences(clean_visual_math(clean_step_pair(c_steps[3])[0]), 82) if len(c_steps) > 3 else "完成推導後，務必再次檢核單位、正負號與規範限值！",
                "narration": (
                    f"把「{engineering_to_spoken_zh(heading)}」拆成清楚的實作步驟："
                    + "".join(step_spoken)
                    + "照著這套流程操作，觀念與計算就能穩穩串起來！"
                ),
            })

    # Remaining concepts[solo_limit:] -> Pair 2-per-slide for 100% coverage!
    rem = concepts[solo_limit:]
    for pair_start in range(0, len(rem), 2):
        pair = rem[pair_start : pair_start + 2]
        cards = []
        spoken_parts = []
        colors = ["emerald", "cyan"]
        for p_i, c in enumerate(pair):
            c_num = solo_limit + pair_start + p_i + 1
            refs = " / ".join(c.get("outlineRefs", []) or [code])
            h = clean_heading(c.get("heading", f"觀念 {c_num}"))
            b_raw = strip_html_tags(c.get("body", ""))
            b_disp = complete_sentences(clean_visual_math(b_raw), 105)
            f_line = clean_visual_math(strip_html_tags((c.get("formula") or "").splitlines()[0]))[:68] if c.get("formula") else f"課綱條目：{refs}"
            cards.append({
                "color": colors[p_i % 2],
                "heading": f"({c_num}) {h[:26]}",
                "body": b_disp,
                "example": f_line,
            })
            spoken_parts.append(
                f"第 {c_num} 個觀念「{engineering_to_spoken_zh(h)}」：{engineering_to_spoken_zh(complete_sentences(b_raw, 115))}"
            )
        if len(cards) == 1:
            cards.append({
                "color": "amber",
                "heading": "跨觀念統整與統測應用",
                "body": f"將本課全部 {len(concepts)} 個課綱知識點串聯成系統圖譜，是近年 108 課綱素養綜合題的滿分關鍵。",
                "example": f"完整覆蓋官方課綱：{code}",
            })
        start_num = solo_limit + pair_start + 1
        end_num = solo_limit + pair_start + len(pair)
        scenes.append({
            "id": next_id(),
            "chapter_idx": 1,
            "chime": False,
            "layout": "concept_cards",
            "tag": f"課綱知識點 {start_num}–{end_num}/{len(concepts)}｜完整不遺漏",
            "title": f"{raw_title}・進階觀念精講 ({start_num}–{end_num})",
            "formula": "　｜　".join(clean_heading(c.get("heading", ""))[:24] for c in pair),
            "cards": cards,
            "narration": "接著繼續完整補齊剩下的課綱重點：" + "".join(spoken_parts),
        })

    # ------------------------------------------------------------
    # PART 3: NEW! Application Variations & Condition Shifts ("應用變化全剖析")
    # ------------------------------------------------------------
    var_rows = []
    var_spoken = []
    for v_i, v_txt in enumerate(variations[:3], 1):
        vh, vb = split_variation_title(v_txt, v_i)
        var_rows.append((f"變{v_i}", vh, vb))
        var_spoken.append(f"第 {v_i} 種應用變化，{engineering_to_spoken_zh(vh)}：{engineering_to_spoken_zh(vb)}")
    if killer_trick:
        kt_clean = complete_sentences(clean_visual_math(killer_trick), 96)
        var_rows.append(("⚡", "萬變不離其宗破題口訣", kt_clean))
        var_spoken.append(f"最後牢記這句萬變不離其宗的破題口訣：{engineering_to_spoken_zh(kt_clean)}")

    if var_rows:
        scenes.append({
            "id": next_id(),
            "chapter_idx": 2,
            "chime": True,
            "layout": "roadmap",
            "tag": "🔄 應用變化與條件變形｜Application Variations",
            "title": f"條件一變怎麼解？《{raw_title}》應用變化全剖析",
            "subtitle": f"對應統測與現場實務常見變形（{exam_trend.get('frequency', '核心高頻')}）",
            "items": var_rows,
            "narration": (
                f"核心知識點全打通了，但真實工地和統測考場最愛把條件換一下考你！我們來拆解《{raw_title}》最常出現的應用變化："
                + "".join(var_spoken)
            ),
        })

    # ------------------------------------------------------------
    # PART 4: Fatal Traps + Elite Mental Models + Examples + REAL 111-115 TCTE Exam
    # ------------------------------------------------------------
    if traps:
        trap_cards = []
        trap_spoken = []
        for t_i, tr in enumerate(traps[:3], 1):
            w = clean_visual_math(strip_html_tags(tr.get("wrongThinking", "")))
            r = clean_visual_math(strip_html_tags(tr.get("correctThinking", "")))
            d = clean_visual_math(strip_html_tags(tr.get("trapDescription", "")))
            trap_cards.append({
                "num": f"致命陷阱 0{t_i}",
                "wrong": complete_sentences(w, 72),
                "right": complete_sentences(r, 86),
                "tip": complete_sentences(d, 90),
            })
            trap_spoken.append(
                f"致命陷阱第 {t_i} 招：很多考生誤以為{engineering_to_spoken_zh(complete_sentences(w, 70))}"
                f"但正確觀念是：{engineering_to_spoken_zh(complete_sentences(r, 85))}"
            )
        scenes.append({
            "id": next_id(),
            "chapter_idx": 3,
            "chime": True,
            "layout": "trap_compare",
            "tag": "考場致命陷阱排雷｜紅綠 X 光對照",
            "title": f"《{raw_title}》最高頻失分雷區",
            "traps": trap_cards[:2],
            "narration": "看完應用變化，馬上進入考場排雷區！" + "".join(trap_spoken[:2]),
        })
        if len(trap_cards) > 2:
            scenes.append({
                "id": next_id(),
                "chapter_idx": 3,
                "chime": False,
                "layout": "trap_compare",
                "tag": "進階陷阱排雷｜防呆加碼",
                "title": f"《{raw_title}》進階易錯雷區檢核",
                "traps": trap_cards[2:],
                "narration": "再補上一個進階考場雷區：" + "".join(trap_spoken[2:]),
            })

    if models:
        m_cards = []
        m_spoken = []
        colors = ["amber", "emerald"]
        for m_i, m in enumerate(models[:2]):
            tech = strip_html_tags(m.get("technique", "秒殺心智模型"))
            expl = clean_visual_math(strip_html_tags(m.get("explanation", "")))
            m_cards.append({
                "color": colors[m_i % 2],
                "heading": f"名師心法 {m_i+1}：{tech[:28]}",
                "body": complete_sentences(expl, 118),
                "example": f"考場觸發時機：看到《{raw_title}》核心與變形題立即套用！",
            })
            m_spoken.append(
                f"名師秒殺心法第 {m_i+1} 招，叫做「{engineering_to_spoken_zh(tech)}」：{engineering_to_spoken_zh(complete_sentences(expl, 110))}"
            )
        if len(m_cards) == 1:
            m_cards.append({
                "color": "emerald",
                "heading": "三層考場防呆檢核 SOP",
                "body": "① 先圈出題幹已知條件、限制與單位量綱；② 畫簡圖或對照表確認正負方向與規範界線；③ 算出答案後做數量級與極端值反查。",
                "example": "口訣：審題定方向 → 列式抓核心 → 驗算零粗心！",
            })
        scenes.append({
            "id": next_id(),
            "chapter_idx": 3,
            "chime": (not traps),
            "layout": "concept_cards",
            "tag": "名師秒殺心智模型｜Elite Mental Models",
            "title": f"帶進考場的《{raw_title}》破題思維框架",
            "formula": "　｜　".join(strip_html_tags(m.get("technique", ""))[:30] for m in models[:2]),
            "cards": m_cards,
            "narration": "排完雷，幫你濃縮帶進考場的名師秒殺心法！" + "".join(m_spoken) + "接下來直接進統測實戰演練！",
        })

    # Worked Examples (up to 2) + REAL 111-115 Official TCTE Past Exam Question!
    tcte_included = 0
    ex_count = 0

    for e_i, ex in enumerate(examples[:2], 1):
        ex_count += 1
        diff = strip_html_tags(ex.get("difficulty", "統測核心"))
        q_text = clean_visual_math(strip_html_tags(ex.get("question", "")))
        ex_steps = [strip_html_tags(s) for s in ex.get("steps", []) if strip_html_tags(s)]
        ans = clean_visual_math(strip_html_tags(ex.get("answer", "")))
        shortcut = clean_visual_math(strip_html_tags(ex.get("eliteShortcut", "")))

        sol_steps = []
        sol_spoken = []
        for s_i, st in enumerate(ex_steps[:3], 1):
            act, _ = clean_step_pair(st)
            act_v = clean_visual_math(act)
            sol_steps.append((f"步驟 {s_i}", complete_sentences(act_v, 94)))
            sol_spoken.append(f"步驟 {s_i}，{engineering_to_spoken_zh(complete_sentences(act_v, 80))}")
        sol_steps.append(("標準解答", complete_sentences(ans, 92)))

        scenes.append({
            "id": next_id(),
            "chapter_idx": 3,
            "chime": False,
            "layout": "example",
            "tag": f"經典例題實戰 {e_i}｜難度：{diff}",
            "title": f"步驟化實戰解析 {e_i}：{raw_title}",
            "problem": complete_sentences(q_text, 130),
            "steps": sol_steps,
            "shortcut": f"名師秒殺：{complete_sentences(shortcut, 88)}" if shortcut else None,
            "narration": (
                f"現在進入經典例題實戰第 {e_i} 題！題目問：{engineering_to_spoken_zh(complete_sentences(q_text, 115))}"
                + "".join(sol_spoken)
                + f"最後得到正確答案：{engineering_to_spoken_zh(complete_sentences(ans, 80))}"
                + (f"想更快破題的話：{engineering_to_spoken_zh(complete_sentences(shortcut, 75))}" if shortcut else "")
            ),
        })

    route = f"/subjects/{subj_slug}/{slug}"
    real_qs = load_tcte_past_questions().get(route, [])
    if real_qs:
        rq = real_qs[0]
        tcte_included = 1
        ex_count += 1
        src_lbl = rq.get("sourceLabel") or f"{rq.get('year')} 年統測真題"
        q_no = rq.get("questionNo")
        q_stem = clean_visual_math(strip_html_tags(rq.get("excerpt", "")))
        opts = rq.get("options", {})
        opt_str = "　".join(f"({k}) {strip_html_tags(str(opts[k]))[:26]}" for k in ("A", "B", "C", "D") if k in opts)
        t_obj = rq.get("teaching") or {}
        t_steps = [strip_html_tags(s) for s in t_obj.get("steps", [])[:2]]
        ans_letter = rq.get("answer", "")
        ans_text = strip_html_tags(str(opts.get(ans_letter, "")))

        sol_steps = [("四選項對照", opt_str[:135])]
        spoken_steps = []
        for s_i, st in enumerate(t_steps, 1):
            sol_steps.append((f"破題步驟 {s_i}", complete_sentences(clean_visual_math(st), 96)))
            spoken_steps.append(f"關鍵解析第 {s_i} 步：{engineering_to_spoken_zh(complete_sentences(st, 85))}")
        sol_steps.append(("官方正解", f"({ans_letter}) {ans_text[:82]}"))

        scenes.append({
            "id": next_id(),
            "chapter_idx": 3,
            "chime": False,
            "layout": "example",
            "tag": f"🏆 官方歷屆統測真題實戰｜{src_lbl} 第 {q_no} 題",
            "title": f"統測真題驗收：{raw_title}",
            "problem": complete_sentences(q_stem, 138),
            "steps": sol_steps,
            "shortcut": f"考場實戰驗證：完全對應本課 {code} 核心觀念與應用變化，審題鎖定關鍵字 30 秒秒殺！",
            "narration": (
                f"接著直接實戰一道真正的官方統測歷屆真題！出自{src_lbl}第 {q_no} 題。"
                f"題目問：{engineering_to_spoken_zh(complete_sentences(q_stem, 120))}"
                + "".join(spoken_steps)
                + f"因此這道統測真題的官方標準答案就是選項 {ans_letter}，{engineering_to_spoken_zh(ans_text[:60])}！"
            ),
        })
    elif practices:
        pr = next((p for p in practices if "統測" in str(p.get("question", ""))), practices[0])
        ex_count += 1
        diff = strip_html_tags(pr.get("difficulty", "進階演練"))
        q_text = clean_visual_math(strip_html_tags(pr.get("question", "")))
        p_steps = [strip_html_tags(s) for s in pr.get("steps", []) if strip_html_tags(s)]
        ans = clean_visual_math(strip_html_tags(pr.get("answer", "")))
        shortcut = clean_visual_math(strip_html_tags(pr.get("eliteShortcut", "")))

        sol_steps = []
        sol_spoken = []
        for s_i, st in enumerate(p_steps[:3], 1):
            act, _ = clean_step_pair(st)
            act_v = clean_visual_math(act)
            sol_steps.append((f"步驟 {s_i}", complete_sentences(act_v, 94)))
            sol_spoken.append(f"步驟 {s_i}，{engineering_to_spoken_zh(complete_sentences(act_v, 80))}")
        sol_steps.append(("標準解答", complete_sentences(ans, 92)))

        scenes.append({
            "id": next_id(),
            "chapter_idx": 3,
            "chime": False,
            "layout": "example",
            "tag": f"進階應用變式演練｜難度：{diff}",
            "title": f"條件變形檢核：{raw_title}",
            "problem": complete_sentences(q_text, 130),
            "steps": sol_steps,
            "shortcut": f"速解要領：{complete_sentences(shortcut, 88)}" if shortcut else None,
            "narration": (
                f"再加碼一道應用變式實戰題，驗收你的遷移解題手感！題目是：{engineering_to_spoken_zh(complete_sentences(q_text, 115))}"
                + "".join(sol_spoken)
                + f"算出來的正確解答就是：{engineering_to_spoken_zh(complete_sentences(ans, 80))}"
            ),
        })

    # ------------------------------------------------------------
    # PART 5: 30-Second Summary Cheat-Sheet + Outro
    # ------------------------------------------------------------
    sum_cards = []
    if one_recap:
        sum_cards.append(("★ 一句話精髓", complete_sentences(clean_visual_math(one_recap), 78)))
    sum_spoken = []
    for c_i, c in enumerate(concepts[:5], 1):
        h_short = clean_heading(c.get("heading", "")).split("：")[0][:16]
        first_f = clean_visual_math(strip_html_tags((c.get("formula") or "").splitlines()[0]))[:72] if c.get("formula") else ""
        body_s = complete_sentences(clean_visual_math(strip_html_tags(c.get("body", ""))), 68)
        sum_cards.append((f"{c_i}. {h_short}", first_f or body_s))
        sum_spoken.append(f"第 {c_i}，{engineering_to_spoken_zh(h_short)}；")

    scenes.append({
        "id": next_id(),
        "chapter_idx": 4,
        "chime": True,
        "layout": "summary",
        "tag": "30 秒考前懶人包｜歡迎截圖存手機複習",
        "title": f"{lesson_id}《{raw_title}》終極速查卡",
        "cards": sum_cards[:6],
        "narration": (
            f"最後送上三十秒考前懶人包，歡迎直接截圖存手機！今天我們從為何要學、真實應用出發，完整攻略了全部 {len(concepts)} 大課綱知識點與條件變形："
            + "".join(sum_spoken)
            + (f"記住這句終極精髓：{engineering_to_spoken_zh(one_recap)}" if one_recap else "把這張速查表記熟，考場與現場都穩穩過關！")
        ),
    })

    if next_topic_title:
        nxt_clean = clean_heading(next_topic_title)
        next_title_str = f"下一課預告：{subj_clean}《{nxt_clean}》"
        next_desc_str = f"立刻前往 Arch 教學頁 `/subjects/{subj_slug}/{slug}` 閱讀生活連結專區並刷歷屆統測真題！"
        outro_spoken = (
            f"恭喜你完賽{subj_clean}第 {idx} 課《{raw_title}》！記得回到 Arch 教學頁面複習生活連結與應用變化專區，並把隨堂真題刷過一遍。"
            f"下一課我們將前進《{engineering_to_spoken_zh(nxt_clean)}》，我們下課見，掰掰！"
        )
    else:
        next_title_str = f"🎉 {subj_clean} 全系列高工統測課程完賽！"
        next_desc_str = f"恭喜徹底打通 {subj_clean} 全部 108 課綱、生活應用與統測變形！立即前往 Arch `/learn` 挑戰全真統測模擬卷！"
        outro_spoken = (
            f"恭喜你完成{subj_clean}全系列 v3.0 深度精講！現在就回到 Arch 平台挑戰全真歷屆統測模擬考，祝你高分金榜題名，掰掰！"
        )

    scenes.append({
        "id": next_id(),
        "chapter_idx": 4,
        "chime": False,
        "layout": "outro",
        "tag": f"Arch 高工建築科・{subj_clean} v3.0 深度完整版",
        "title": f"{lesson_id} 完賽！馬上回 Arch 教學頁驗收",
        "subtitle": f"對應頁面：/subjects/{subj_slug}/{slug}（課綱代碼：{code}）",
        "next_title": next_title_str,
        "next_desc": next_desc_str,
        "narration": outro_spoken,
    })

    stats = {
        "concepts_total": len(concepts),
        "concepts_covered": len(concepts),
        "variations_count": len(variations[:3]),
        "has_real_life_scene": True,
        "scenes_count": len(scenes),
        "tcte_real_qs": tcte_included,
        "visuals_used": len(visual_uris),
        "has_custom_svg": bool(eng_svg or (subj_slug == "math-c")),
    }
    return meta, scenes, stats


async def build_episode_v3(
    meta: dict,
    scenes: list[dict],
    stats: dict,
    renderer: PersistentCDPRenderer,
    force: bool = False,
) -> dict:
    t0 = time.time()
    work_dir = WORK_ROOT_V3 / meta["id"]
    slides_dir = work_dir / "slides"
    audio_dir = work_dir / "audio"
    for d in (slides_dir, audio_dir, VOCATIONAL_OUT_DIR):
        d.mkdir(parents=True, exist_ok=True)

    out_mp4 = VOCATIONAL_OUT_DIR / meta["output_name"]
    out_srt = out_mp4.with_suffix(".srt")
    out_ass = out_mp4.with_suffix(".ass")
    marker = work_dir / "v3_done.json"

    if not force and marker.exists() and out_mp4.exists() and out_mp4.stat().st_size > 200_000 and out_srt.exists() and out_ass.exists():
        info = json.loads(marker.read_text(encoding="utf-8"))
        print(f"  [SKIP-V3] {out_mp4.name} ({info['duration_sec']/60:.1f}m, {info['scenes_count']} scenes)")
        return info

    # Remove any differently named legacy files for this episode ID
    for old_f in VOCATIONAL_OUT_DIR.glob(f"{meta['id']}-*"):
        if old_f.name not in (out_mp4.name, out_srt.name, out_ass.name):
            try:
                old_f.unlink()
            except Exception:
                pass

    html_pairs = []
    for s in scenes:
        hp = slides_dir / f"scene_{s['id']}.html"
        pp = slides_dir / f"scene_{s['id']}.png"
        new_html = render_scene_html(meta, s)
        if not hp.exists() or hp.read_text(encoding="utf-8") != new_html:
            hp.write_text(new_html, encoding="utf-8")
        html_pairs.append((hp, pp))

    await renderer.render_pairs(html_pairs)

    tts_results = [
        synthesize_scene_wav(s, audio_dir / f"scene_{s['id']}.wav", force=force)
        for s in scenes
    ]

    chime_pcm = get_chime_pcm(22050)
    chime_dur = len(chime_pcm) / (2.0 * 22050)
    pad_pcm = b"\x00\x00" * int(22050 * 0.26)
    pad_dur = 0.26

    all_subs = []
    scene_timings = []
    cursor = 0.0
    master_wav = work_dir / "master_voice.wav"

    with wave.open(str(master_wav), "wb") as out_wf:
        out_wf.setnchannels(1)
        out_wf.setsampwidth(2)
        out_wf.setframerate(22050)

        for s, (dur, local_subs) in zip(scenes, tts_results):
            lead = 0.0
            if s.get("chime"):
                out_wf.writeframes(chime_pcm)
                lead = chime_dur
            wav_p = audio_dir / f"scene_{s['id']}.wav"
            with wave.open(str(wav_p), "rb") as in_wf:
                raw_pcm = in_wf.readframes(in_wf.getnframes())
            out_wf.writeframes(raw_pcm)
            out_wf.writeframes(pad_pcm)

            seg_dur = lead + dur + pad_dur
            for st, en, txt in local_subs:
                all_subs.append((cursor + lead + st, cursor + lead + en, txt))
            scene_timings.append((slides_dir / f"scene_{s['id']}.png", seg_dur))
            cursor += seg_dur

    ass_path = work_dir / "subtitles.ass"
    srt_path = work_dir / "subtitles.srt"
    write_ass_subtitles(all_subs, ass_path)
    write_srt_subtitles(all_subs, srt_path)
    shutil.copy2(srt_path, out_srt)
    shutil.copy2(ass_path, out_ass)

    video_list_txt = work_dir / "video_concat.txt"
    vlines = []
    for png_p, dur in scene_timings:
        vlines.append(f"file '{png_p.resolve().as_posix()}'\n")
        vlines.append(f"duration {dur:.4f}\n")
    vlines.append(f"file '{scene_timings[-1][0].resolve().as_posix()}'\n")
    video_list_txt.write_text("".join(vlines), encoding="utf-8")

    ass_escaped = ass_path.resolve().as_posix().replace(":", r"\:")
    tmp_mp4 = work_dir / "render_tmp.mp4"

    common_inputs = [
        "ffmpeg", "-y", "-v", "error",
        "-f", "concat", "-safe", "0", "-i", str(video_list_txt),
        "-i", str(master_wav),
        "-i", str(srt_path),
        "-vf", f"fps=6,ass='{ass_escaped}'",
        "-af", "aresample=48000,highpass=f=75,loudnorm=I=-16:TP=-1.5:LRA=10",
        "-map", "0:v:0", "-map", "1:a:0", "-map", "2:0",
    ]
    common_tail = [
        "-c:a", "aac", "-b:a", "192k", "-ar", "48000", "-ac", "2",
        "-c:s", "mov_text", "-metadata:s:s:0", "language=zho", "-metadata:s:s:0", "title=繁體中文",
        "-shortest", "-movflags", "+faststart",
        str(tmp_mp4),
    ]
    nvenc_cmd = common_inputs + ["-c:v", "h264_nvenc", "-preset", "p4", "-rc", "vbr", "-cq", "23", "-b:v", "0", "-pix_fmt", "yuv420p"] + common_tail
    cpu_cmd = common_inputs + ["-c:v", "libx264", "-preset", "ultrafast", "-tune", "stillimage", "-crf", "22", "-threads", "3", "-pix_fmt", "yuv420p"] + common_tail
    res = subprocess.run(nvenc_cmd, capture_output=True)
    if res.returncode != 0 or not tmp_mp4.exists() or tmp_mp4.stat().st_size < 100_000:
        subprocess.run(cpu_cmd, check=True)
    shutil.move(str(tmp_mp4), str(out_mp4))

    final_dur = round(cursor, 1)
    size_mb = round(out_mp4.stat().st_size / (1024 * 1024), 2)
    info = {
        "id": meta["id"],
        "subject_slug": meta["subject_slug"],
        "code": meta["code"],
        "title": meta["title"],
        "mp4": out_mp4.name,
        "srt": out_srt.name,
        "ass": out_ass.name,
        "duration_sec": final_dur,
        "size_mb": size_mb,
        "subtitle_cues": len(all_subs),
        "version": "v3.0",
        **stats,
    }
    marker.write_text(json.dumps(info, ensure_ascii=False, indent=2), encoding="utf-8")
    print(
        f"  [V3-DONE] {out_mp4.name} | {int(final_dur//60)}m{final_dur%60:04.1f}s | "
        f"{stats['scenes_count']} scenes | {stats['concepts_covered']}/{stats['concepts_total']} concepts | "
        f"var={stats['variations_count']} TCTE_Q={stats['tcte_real_qs']} | {len(all_subs)} subs | {size_mb:.2f} MB | {time.time()-t0:.1f}s",
        flush=True,
    )
    return info


def verify_all_v3():
    data = json.loads(DATA_V3_PATH.read_text(encoding="utf-8"))
    expected_voc: list[tuple[str, str, str, str]] = []
    for subj in data["allSubjects"]:
        slug = subj["slug"]
        prefix = SUBJECT_PREFIX_MAP[slug]
        for idx, t in enumerate(subj["topics"], 1):
            expected_voc.append((f"{prefix}{idx:02d}", slug, t.get("curriculumCode", ""), clean_heading(t["title"])))
    for ex in EXTRA_TCTE_EPISODES:
        t = ex["topic"]
        expected_voc.append((ex["lesson_id"], ex["subject_slug"], t.get("curriculumCode", ""), clean_heading(t["title"])))

    voc_manifest = []
    voc_missing = []
    not_v3 = []
    total_voc_sec = 0.0
    total_voc_mb = 0.0

    for ep_id, slug, code, title in expected_voc:
        matches = sorted(VOCATIONAL_OUT_DIR.glob(f"{ep_id}-*.mp4"))
        if not matches:
            voc_missing.append(ep_id)
            continue
        mp4 = matches[0]
        srt = mp4.with_suffix(".srt")
        ass = mp4.with_suffix(".ass")
        if not srt.exists() or not ass.exists():
            voc_missing.append(f"{ep_id}(sub)")
            continue
        dur = round(get_audio_duration(mp4), 1)
        size_mb = round(mp4.stat().st_size / (1024 * 1024), 2)
        cues = srt.read_text(encoding="utf-8").count("-->")
        total_voc_sec += dur
        total_voc_mb += size_mb
        v3_marker = WORK_ROOT_V3 / ep_id / "v3_done.json"
        if not v3_marker.exists():
            not_v3.append(ep_id)
        meta_extra = json.loads(v3_marker.read_text(encoding="utf-8")) if v3_marker.exists() else {}
        voc_manifest.append({
            "id": ep_id,
            "subject_slug": slug,
            "curriculum_code": code,
            "title": title,
            "mp4": mp4.name,
            "srt": srt.name,
            "ass": ass.name,
            "duration_sec": dur,
            "size_mb": size_mb,
            "subtitle_cues": cues,
            "version": meta_extra.get("version", "legacy"),
            "concepts_covered": meta_extra.get("concepts_covered"),
            "variations_count": meta_extra.get("variations_count", 0),
            "has_real_life_scene": meta_extra.get("has_real_life_scene", False),
            "scenes_count": meta_extra.get("scenes_count"),
            "tcte_real_qs": meta_extra.get("tcte_real_qs", 0),
        })

    stray_in_uni = [p.name for p in UNIVERSITY_OUT_DIR.glob("*.mp4") if not p.name.startswith("BARCH")]
    stray_in_voc = [p.name for p in VOCATIONAL_OUT_DIR.glob("*.mp4") if p.name.startswith("BARCH")]
    uni_count = len(list(UNIVERSITY_OUT_DIR.glob("BARCH*.mp4")))

    (VOCATIONAL_OUT_DIR / "vocational-126-videos-manifest.json").write_text(
        json.dumps(voc_manifest, ensure_ascii=False, indent=2), encoding="utf-8"
    )

    print("\n======================================================================")
    print("🎬 v3.0 深度優化全 13 科高工統測 126 集 × 大學建築師 24 集 驗收報告")
    print("======================================================================")
    print(f"📁 高工目錄 ({VOCATIONAL_OUT_DIR}): {len(voc_manifest)}/{len(expected_voc)} 集 | v3.0 升級完成: {len(voc_manifest)-len(not_v3)}/{len(expected_voc)} | 總片長 {total_voc_sec/60:.1f} 分 ({total_voc_sec/3600:.2f} 小時) | 總容量 {total_voc_mb/1024:.2f} GB")
    print(f"📁 大學目錄 ({UNIVERSITY_OUT_DIR}): {uni_count}/24 集原址保留")
    if voc_missing or not_v3 or stray_in_uni or stray_in_voc or uni_count != 24:
        print(f"❌ 檢核異常 -> missing={voc_missing}, not_v3={not_v3}, stray_uni={stray_in_uni}, stray_voc={stray_in_voc}")
        sys.exit(1)
    print("✅ 100% 通過！全部 13 科 126 集皆已升級 v3.0（為何要學＋全知識點＋應用變化＋統測實戰）！")


async def main():
    args = sys.argv[1:]
    if "--verify" in args:
        verify_all_v3()
        return

    force = "--force" in args
    targets = [a for a in args if not a.startswith("--")]

    data = json.loads(DATA_V3_PATH.read_text(encoding="utf-8"))
    enriched = data.get("enriched", {})
    tag = "_".join(targets[:3]) if targets else "all"
    profile_dir = WORK_ROOT_V3 / f"edge_profile_{tag}_{os.getpid()}"

    async with PersistentCDPRenderer(profile_dir) as renderer:
        for subj in data["allSubjects"]:
            slug = subj["slug"]
            if targets and slug not in targets:
                continue
            prefix = SUBJECT_PREFIX_MAP[slug]
            topics = subj["topics"]
            extra_next = next((e["topic"]["title"] for e in EXTRA_TCTE_EPISODES if e["subject_slug"] == slug), None)
            print(f"\n>>> [V3.0] Building Subject: {subj['title']} ({slug}, {len(topics)} episodes) <<<", flush=True)
            for idx, topic in enumerate(topics, 1):
                nxt_title = topics[idx]["title"] if idx < len(topics) else extra_next
                lesson_id = f"{prefix}{idx:02d}"
                enr = enriched.get(f"{slug}/{topic['slug']}", {})
                meta, scenes, stats = build_v3_vocational_scenes(slug, subj["title"], topic, idx, lesson_id, nxt_title, enr)
                await build_episode_v3(meta, scenes, stats, renderer, force=force)

        if not targets or "extra" in targets:
            print(f"\n>>> [V3.0] Building {len(EXTRA_TCTE_EPISODES)} Standalone TCTE Chapters <<<", flush=True)
            for ex in EXTRA_TCTE_EPISODES:
                meta, scenes, stats = build_v3_vocational_scenes(
                    ex["subject_slug"],
                    ex["subject_title"],
                    ex["topic"],
                    ex["episode_num"],
                    ex["lesson_id"],
                    None,
                    enrichment={"realLife": ex["topic"].get("realLife", {})},
                )
                await build_episode_v3(meta, scenes, stats, renderer, force=force)


if __name__ == "__main__":
    asyncio.run(main())
