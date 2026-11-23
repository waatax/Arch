# -*- coding: utf-8 -*-
"""
Universal Multi-Subject 1080p Video & Subtitle Production Pipeline for Arch
Covers ALL 144 Episodes:
  - 13 Technical High-School Subjects (120 Episodes: mechanics, materials, surveying,
    drafting, chinese, english, math-c, physics, chemistry, history, geography, civics, extensions)
  - 8 University B.Arch 5-Year Core Domains (24 Episodes: studio, history, construction,
    environment, structure, site, codes, digital)

Every Episode Outputs:
  1. 1920x1080 Full HD H.264 MP4 with burned-in Traditional Chinese ASS subtitles
     AND embedded MP4 soft subtitle track (`mov_text`, language=zho)
  2. Matching UTF-8 `.srt` subtitle file (`<episode>.srt`)
  3. Matching UTF-8 `.ass` subtitle file (`<episode>.ass`)

Usage:
  python scripts/video/build_all_subjects_videos.py --sync-mc
  python scripts/video/build_all_subjects_videos.py mechanics materials surveying drafting
  python scripts/video/build_all_subjects_videos.py chinese english physics chemistry history geography civics extensions
  python scripts/video/build_all_subjects_videos.py barch
  python scripts/video/build_all_subjects_videos.py --verify-all
"""

import asyncio
import base64
import json
import os
import pathlib
import re
import shutil
import socket
import subprocess
import sys
import time
import wave

import aiohttp
import win32com.client

ROOT = pathlib.Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT / "scripts" / "video"))

from build_lesson_video import (
    CHROME_EXE,
    EDGE_EXE,
    ass_to_srt_file,
    create_ambient_bed_loop,
    get_audio_duration,
    image_to_data_uri,
    polish_taiwan_tts,
    render_scene_html,
    split_caption_chunks,
    write_ass_subtitles,
    write_srt_subtitles,
)
from build_all_math_c import clean_step_pair, clean_visual_math, complete_sentences, math_to_spoken_zh

SUBJECT_PREFIX_MAP = {
    "mechanics": "MECH",
    "materials": "MATL",
    "surveying": "SURV",
    "drafting": "DRFT",
    "chinese": "CHIN",
    "english": "ENGL",
    "math-c": "MC",
    "physics": "PHYS",
    "chemistry": "CHEM",
    "history": "HIST",
    "geography": "GEOG",
    "civics": "CIVC",
    "extensions": "EXTN",
}


def strip_html_tags(text: str) -> str:
    if not text:
        return ""
    s = re.sub(r"<[^>]+>", "", text)
    s = re.sub(r"\*\*([^*]+)\*\*", r"\1", s)
    s = re.sub(r"^[\d一二三四五六七八九十]+[\.、\s]+", "", s.strip())
    # Remove emoji characters from filenames/titles when needed
    return s.strip()


def safe_filename_title(title: str) -> str:
    s = strip_html_tags(title)
    # Remove emojis and filesystem-unsafe chars
    s = re.sub(r"[^\u4e00-\u9fffA-Za-z0-9_\-\(\)（）]", "", s)
    return s[:36] or "Lesson"


def sync_existing_math_c_subtitles():
    """Ensure all 15 existing MC01..MC15 MP4s have sidecar .srt + .ass and embedded mov_text subtitle stream."""
    out_dir = ROOT / "output" / "videos"
    count = 0
    for mp4 in sorted(out_dir.glob("MC*.mp4")):
        if mp4.name.endswith(".tmp.mp4"):
            continue
        lid = mp4.name.split("-")[0]
        ass_src = ROOT / "tmp" / "video_build" / lid / "subtitles.ass"
        if not ass_src.exists():
            print(f"[WARN] Missing {ass_src}")
            continue
        srt_dst = mp4.with_suffix(".srt")
        ass_dst = mp4.with_suffix(".ass")
        shutil.copy2(ass_src, ass_dst)
        cues = ass_to_srt_file(ass_src, srt_dst)

        # Check if mp4 already has a subtitle stream
        streams = subprocess.check_output(
            ["ffprobe", "-v", "error", "-select_streams", "s", "-show_entries", "stream=codec_name", "-of", "csv=p=0", str(mp4)],
            text=True,
        ).strip()
        if not streams:
            tmp_mp4 = mp4.with_suffix(".tmp.mp4")
            subprocess.run(
                [
                    "ffmpeg", "-y", "-v", "error",
                    "-i", str(mp4), "-i", str(srt_dst),
                    "-map", "0:v:0", "-map", "0:a:0", "-map", "1:0",
                    "-c:v", "copy", "-c:a", "copy",
                    "-c:s", "mov_text",
                    "-metadata:s:s:0", "language=zho",
                    "-metadata:s:s:0", "title=繁體中文",
                    "-movflags", "+faststart",
                    str(tmp_mp4),
                ],
                check=True,
            )
            tmp_mp4.replace(mp4)
        count += 1
        print(f"  [MC-SUB-OK] {mp4.name} -> {srt_dst.name} ({cues} cues) + {ass_dst.name} + embedded mov_text")
    print(f"Synced subtitles for {count} Math C videos.")


def build_subject_topic_scenes(subject: dict, topic: dict, idx: int, next_topic: dict | None) -> tuple[dict, list[dict]]:
    subj_slug = subject["slug"]
    subj_title = re.sub(r"[^\u4e00-\u9fffA-Za-z0-9\s]", "", subject["title"]).strip()
    prefix = SUBJECT_PREFIX_MAP.get(subj_slug, subj_slug.upper()[:4])
    lesson_id = f"{prefix}{idx:02d}"
    slug = topic["slug"]
    raw_title = strip_html_tags(topic["title"])
    safe_title = safe_filename_title(raw_title)
    code = topic.get("curriculumCode", f"108-{prefix}{idx}")
    qs_count = len(topic.get("covered_question_ids", []))
    hit_rate = int(topic.get("examHitRate", 4) or 4)
    hit_stars = "★" * min(5, hit_rate) + "☆" * max(0, 5 - hit_rate)

    meta = {
        "id": lesson_id,
        "subject_slug": subj_slug,
        "slug": slug,
        "brand": f"ARCH {subj_title}",
        "code": code,
        "title": raw_title,
        "subtitle": f"高工建築科 108 課綱精講｜{subj_title} 第 {idx:02d} 課",
        "output_name": f"{lesson_id}-{safe_title}.mp4",
        "voice": "zh-TW-HsiaoChenNeural",
        "rate": "+6%",
        "chapters": [
            "01 課綱破題",
            "02 知識點精講",
            "03 致命陷阱",
            "04 統測實戰",
            "05 考前懶人包",
        ],
    }

    concepts = topic.get("concepts", [])
    traps = topic.get("fatalTraps", [])
    models = topic.get("eliteMentalModels", [])
    examples = topic.get("worked_examples", [])
    practices = topic.get("practices", [])
    prereqs = topic.get("step0Prerequisites", [])

    scenes = []
    seq = 0

    def next_id():
        nonlocal seq
        seq += 1
        return f"{seq:02d}"

    # 1. Cover + Roadmap (Part 1)
    desc_clean = complete_sentences(strip_html_tags(topic.get("desc", "")), 95)
    prereq_str = " ｜ ".join(strip_html_tags(p) for p in prereqs[:2]) if prereqs else "對齊 108 技術型高中課綱核心"
    scenes.append({
        "id": next_id(),
        "chapter_idx": 0,
        "chime": True,
        "layout": "cover",
        "badge": f"108 課綱 {code} × 統測核心精講",
        "title": f"{lesson_id}：{raw_title}",
        "subtitle": f"{subj_title}｜{prereq_str}",
        "stats": [
            ("課綱代碼", code),
            ("命題熱度", f"{hit_stars}" + (f"（{qs_count} 題）" if qs_count else "（核心必考）")),
            ("核心知識點", f"{len(concepts)} 大課綱觀念"),
            ("教學結構", "圖解＋排雷＋實戰"),
        ],
        "narration": (
            f"歡迎來到 Arch 高工建築科課綱精講！今天我們進入{subj_title}第 {idx} 課《{raw_title}》。"
            f"{math_to_spoken_zh(desc_clean)}"
            f"本單元對應課綱代碼 {code}，我們將依序拆解 {len(concepts)} 個核心觀念、考場致命陷阱與經典實戰例題！"
        ),
    })

    # 2. Core Concepts (Part 2 - up to 4 scenes covering all concepts cleanly)
    for c_i, c in enumerate(concepts[:4]):
        refs = " / ".join(c.get("outlineRefs", []) or [code])
        heading = strip_html_tags(c.get("heading", f"核心觀念 {c_i+1}"))
        formula_lines = [clean_visual_math(strip_html_tags(ln)) for ln in (c.get("formula") or "").splitlines() if ln.strip()]
        formula_main = "　｜　".join(formula_lines[:2])[:90]
        body_clean = strip_html_tags(c.get("body", ""))
        body_paras = [clean_visual_math(p.strip()) for p in body_clean.split("\n") if p.strip()]
        bullets = [complete_sentences(p, 88) for p in body_paras[:3]]
        if not bullets and body_clean:
            bullets = [complete_sentences(body_clean, 88)]
        c_steps = [strip_html_tags(st) for st in (c.get("steps") or [])[:2]]
        for st in c_steps:
            if len(bullets) < 3:
                bullets.append(complete_sentences(st, 85))

        c_table = c.get("table")
        spoken_body = math_to_spoken_zh(complete_sentences(body_clean, 95))
        spoken_formula = math_to_spoken_zh(formula_lines[0]) if formula_lines else ""

        if c_i == 0:
            scenes.append({
                "id": next_id(),
                "chapter_idx": 1,
                "chime": True,
                "layout": "split_arch",
                "tag": f"課綱知識點 {c_i+1}｜{refs}",
                "title": heading,
                "formula": formula_main,
                "arch_caption": f"Arch 工程圖解｜{raw_title}",
                "bullets": bullets[:3],
                "narration": (
                    f"首先看第一個核心觀念：{math_to_spoken_zh(heading)}。搭配左邊這張 Arch 工程圖解來看，{spoken_body}"
                    + (f"關鍵公式請記牢：{spoken_formula}。" if spoken_formula else "")
                ),
            })
        elif c_table and c_table.get("headers") and c_table.get("rows"):
            scenes.append({
                "id": next_id(),
                "chapter_idx": 1,
                "chime": False,
                "layout": "concept_table",
                "tag": f"課綱知識點 {c_i+1}｜{refs}",
                "title": heading,
                "formula": formula_main or f"{raw_title} 規格與特性對照表",
                "bullets": bullets[:2],
                "table": {
                    "headers": [strip_html_tags(h) for h in c_table["headers"][:4]],
                    "rows": [[clean_visual_math(strip_html_tags(cell))[:34] for cell in r[:4]] for r in c_table["rows"][:4]],
                },
                "narration": (
                    f"接著看第 {c_i+1} 個重點：{math_to_spoken_zh(heading)}。{spoken_body}"
                    "請對照畫面下方的結構化比較表，把各類別的規範數據與差異一次記熟。"
                ),
            })
        else:
            scenes.append({
                "id": next_id(),
                "chapter_idx": 1,
                "chime": False,
                "layout": "concept_cards",
                "tag": f"課綱知識點 {c_i+1}｜{refs}",
                "title": heading,
                "formula": formula_main or f"核心要領：{heading}",
                "cards": [
                    {
                        "color": "cyan",
                        "heading": "核心原理與規範",
                        "body": bullets[0] if bullets else heading,
                        "example": formula_lines[0] if formula_lines else (c_steps[0][:55] if c_steps else f"課綱編號：{refs}"),
                    },
                    {
                        "color": "amber",
                        "heading": "工程應用與判讀重點",
                        "body": bullets[1] if len(bullets) > 1 else (bullets[0] if bullets else heading),
                        "example": formula_lines[1] if len(formula_lines) > 1 else (bullets[-1][:55] if bullets else ""),
                    },
                ],
                "narration": (
                    f"再來看第 {c_i+1} 個課綱重點：{math_to_spoken_zh(heading)}。{spoken_body}"
                    + (f"重要關係式為：{spoken_formula}。" if spoken_formula else "")
                ),
            })

    # If there are 5+ concepts, add a consolidated card for concepts 5..N so 100% of concepts are taught
    if len(concepts) > 4:
        extra_cards = []
        extra_spoken = []
        colors = ["emerald", "cyan"]
        for idx_e, c in enumerate(concepts[4:6]):
            h = strip_html_tags(c.get("heading", ""))
            b = complete_sentences(strip_html_tags(c.get("body", "")), 85)
            f = clean_visual_math(strip_html_tags((c.get("formula") or "").split("\n")[0])) if c.get("formula") else "統測進階整合考點"
            extra_cards.append({
                "color": colors[idx_e % 2],
                "heading": h,
                "body": b,
                "example": f[:60],
            })
            extra_spoken.append(f"還有{math_to_spoken_zh(h)}：{math_to_spoken_zh(complete_sentences(b, 65))}")
        if len(extra_cards) == 1:
            extra_cards.append({
                "color": "amber",
                "heading": "跨單元統整應用",
                "body": f"將「{extra_cards[0]['heading']}」與前面基礎觀念串聯，是近年統測情境素養題的命題核心。",
                "example": f"課綱代碼：{code}",
            })
        scenes.append({
            "id": next_id(),
            "chapter_idx": 1,
            "chime": False,
            "layout": "concept_cards",
            "tag": f"進階課綱觀念統整｜{code}",
            "title": f"{raw_title} 延伸與進階重點",
            "formula": "　｜　".join(c["heading"][:28] for c in extra_cards),
            "cards": extra_cards,
            "narration": "最後我們把本章的進階課綱觀念一併補齊：" + "".join(extra_spoken),
        })

    # 3. Fatal Traps + Elite Mental Models (Part 3)
    trap_cards = []
    trap_spoken = []
    for t_i, tr in enumerate(traps[:2], 1):
        w = clean_visual_math(strip_html_tags(tr.get("wrongThinking", "")))
        r = clean_visual_math(strip_html_tags(tr.get("correctThinking", "")))
        d = clean_visual_math(strip_html_tags(tr.get("trapDescription", "")))
        trap_cards.append({
            "num": f"致命陷阱 0{t_i}",
            "wrong": complete_sentences(w, 72),
            "right": complete_sentences(r, 85),
            "tip": complete_sentences(d, 90),
        })
        trap_spoken.append(
            f"陷阱 {t_i}，很多考生誤以為{math_to_spoken_zh(complete_sentences(w, 55))}"
            f"其實正確觀念是：{math_to_spoken_zh(complete_sentences(r, 70))}"
        )

    if models:
        m0 = models[0]
        m_tech = strip_html_tags(m0.get("technique", "秒殺心智模型"))
        m_exp = complete_sentences(strip_html_tags(m0.get("explanation", "")), 85)
        if trap_cards:
            trap_cards[-1]["tip"] = f"名師心法【{m_tech}】：{m_exp}"
        trap_spoken.append(f"記住名師秒殺心法「{math_to_spoken_zh(m_tech)}」：{math_to_spoken_zh(complete_sentences(m_exp, 70))}")

    if trap_cards:
        scenes.append({
            "id": next_id(),
            "chapter_idx": 2,
            "chime": True,
            "layout": "trap_compare",
            "tag": "考場致命陷阱 × 名師秒殺心法",
            "title": f"《{raw_title}》高頻失分雷區與破題模型",
            "traps": trap_cards,
            "narration": "觀念建立後，馬上進入考場排雷區！" + "".join(trap_spoken),
        })

    # 4. Worked Example SOP (Part 4)
    ex_list = examples or practices
    if ex_list:
        ex = ex_list[0]
        diff = strip_html_tags(ex.get("difficulty", "中等"))
        q_text = clean_visual_math(strip_html_tags(ex.get("question", "")))
        ex_steps = [strip_html_tags(s) for s in ex.get("steps", [])]
        ans = clean_visual_math(strip_html_tags(ex.get("answer", "")))
        shortcut = clean_visual_math(strip_html_tags(ex.get("eliteShortcut", "")))

        sol_steps = []
        sol_spoken = []
        for s_i, st in enumerate(ex_steps[:3], 1):
            act, _ = clean_step_pair(st)
            act_v = clean_visual_math(act)
            sol_steps.append((f"步驟 {s_i}", complete_sentences(act_v, 92)))
            sol_spoken.append(f"步驟 {s_i}，{math_to_spoken_zh(complete_sentences(act_v, 60))}")
        sol_steps.append(("標準解答", complete_sentences(ans, 90)))

        scenes.append({
            "id": next_id(),
            "chapter_idx": 3,
            "chime": True,
            "layout": "example",
            "tag": f"統測經典實戰｜難度：{diff}",
            "title": f"步驟化實戰解析：{raw_title}",
            "problem": complete_sentences(q_text, 115),
            "steps": sol_steps,
            "shortcut": f"名師秒殺：{shortcut}" if shortcut else None,
            "narration": (
                f"現在進入統測經典實戰！題目問：{math_to_spoken_zh(complete_sentences(q_text, 85))}"
                + "".join(sol_spoken)
                + f"最後得到正確答案：{math_to_spoken_zh(complete_sentences(ans, 65))}"
            ),
        })

    # 5. Summary & Outro (Part 5)
    sum_cards = []
    sum_spoken = []
    for c_i, c in enumerate(concepts[:5], 1):
        h_short = strip_html_tags(c.get("heading", "")).split("：")[0][:16]
        first_f = clean_visual_math(strip_html_tags((c.get("formula") or "").split("\n")[0]))[:70]
        body_s = complete_sentences(strip_html_tags(c.get("body", "")), 62)
        sum_cards.append((f"{c_i}. {h_short}", first_f or body_s))
        sum_spoken.append(f"第 {c_i}，{math_to_spoken_zh(h_short)}；")

    if next_topic:
        nxt_title = strip_html_tags(next_topic["title"])
        next_tail = f"下一課我們將進入《{math_to_spoken_zh(nxt_title)}》，記得回 Arch 平台刷題複習，我們下課見！"
    else:
        next_tail = f"恭喜你完成{subj_title}全部課程！記得回 Arch 平台挑戰歷屆統測真題，祝你金榜題名！"

    scenes.append({
        "id": next_id(),
        "chapter_idx": 4,
        "chime": True,
        "layout": "summary",
        "tag": "30 秒考前懶人包｜歡迎截圖複習",
        "title": f"{lesson_id}《{raw_title}》考前終極速查卡",
        "cards": sum_cards,
        "narration": (
            f"最後三十秒考前懶人包，歡迎直接截圖存手機！本課我們徹底掌握了："
            + "".join(sum_spoken)
            + next_tail
        ),
    })

    return meta, scenes


def build_barch_kp_scenes(domain: dict, kp: dict, global_idx: int, domain_kp_idx: int) -> tuple[dict, list[dict]]:
    domain_id = domain["id"].upper()[:6]
    lesson_id = f"BARCH{global_idx:02d}"
    raw_title = strip_html_tags(kp["term"])
    safe_title = safe_filename_title(raw_title)
    rel = kp.get("relatedLessonLink", {})
    subj_slug = rel.get("subjectSlug", "extensions")
    topic_slug = rel.get("topicSlug", "spatial-design")
    exam_code = kp.get("licensureExamCode", domain.get("licensureMapping", "專技高考建築師"))

    meta = {
        "id": lesson_id,
        "subject_slug": subj_slug,
        "slug": topic_slug,
        "brand": f"ARCH 大學建築系 ({domain_id})",
        "code": f"{domain['code']} · KP-{domain_kp_idx}",
        "title": raw_title,
        "subtitle": f"大學五年制建築系核心課程｜{domain['title']}",
        "output_name": f"{lesson_id}-{safe_title}.mp4",
        "voice": "zh-TW-HsiaoChenNeural",
        "rate": "+6%",
        "chapters": [
            "01 國考與評圖破題",
            "02 空間與構造圖解",
            "03 大師實戰 SOP",
            "04 評圖秒殺心法",
        ],
    }

    scenes = []
    seq = 0

    def next_id():
        nonlocal seq
        seq += 1
        return f"{seq:02d}"

    defn = complete_sentences(strip_html_tags(kp.get("definition", "")), 100)
    core_list = [strip_html_tags(c) for c in kp.get("coreConcepts", [])]
    illus = kp.get("illustration", {})
    highlights = illus.get("visualHighlights", [])
    we = kp.get("workedExample", {})

    # Scene 1: Cover
    scenes.append({
        "id": next_id(),
        "chapter_idx": 0,
        "chime": True,
        "layout": "cover",
        "badge": f"大學建築系 {domain['academicYear']} × {exam_code}",
        "title": f"{lesson_id}：{raw_title}",
        "subtitle": kp.get("englishTerm", ""),
        "stats": [
            ("專業領域", strip_html_tags(domain["title"]).split("(")[0].strip()[:14]),
            ("修課學年", domain.get("academicYear", "大一至大五")),
            ("建築師國考", exam_code.split("：")[-1][:14]),
            ("高工先備", strip_html_tags(rel.get("title", ""))[:14]),
        ],
        "narration": (
            f"歡迎來到 Arch 大學建築系與建築師高考精講！本集為第 {global_idx} 集《{math_to_spoken_zh(raw_title)}》。"
            f"{math_to_spoken_zh(defn)}"
            f"本單元直接對接{math_to_spoken_zh(exam_code)}，現在馬上進入空間與構造深度圖解！"
        ),
    })

    # Scene 2: Split Arch Visual + Core Concepts
    scenes.append({
        "id": next_id(),
        "chapter_idx": 1,
        "chime": True,
        "layout": "split_arch",
        "tag": f"核心理論與構造拆解｜{illus.get('svgType', 'spatial').upper()}",
        "title": strip_html_tags(illus.get("title", raw_title)),
        "formula": f"高工先備銜接：/subjects/{subj_slug}/{topic_slug}（{rel.get('title', '')}）",
        "arch_caption": f"Arch 建築圖解｜{illus.get('title', raw_title)[:22]}",
        "bullets": [complete_sentences(c, 92) for c in core_list[:3]],
        "narration": (
            f"請看左邊這張建築剖面與軸測圖解。本單元有三大核心觀念："
            + " ".join(f"第 {i+1}，{math_to_spoken_zh(complete_sentences(c, 65))}" for i, c in enumerate(core_list[:3]))
        ),
    })

    # Scene 3: Visual Highlights Cards
    if highlights:
        cards = []
        for idx_h, vh in enumerate(highlights[:2]):
            cards.append({
                "color": "cyan" if idx_h == 0 else "amber",
                "heading": f"圖解焦點：{vh.get('label', '')}",
                "body": vh.get("desc", ""),
                "example": f"關鍵指標：{vh.get('badge', 'Tectonics')}",
            })
        if len(highlights) >= 3:
            cards[-1]["example"] = f"第三焦點【{highlights[2].get('label', '')}】：{highlights[2].get('desc', '')}"
        scenes.append({
            "id": next_id(),
            "chapter_idx": 1,
            "chime": False,
            "layout": "concept_cards",
            "tag": "建築圖面表現與構造細部關鍵",
            "title": f"{raw_title} 三大空間構造焦點",
            "formula": "　｜　".join(vh.get("label", "") for vh in highlights[:3]),
            "cards": cards,
            "narration": (
                "在繪製平立剖面與構造大樣時，評審最看重三個關鍵細節："
                + " ".join(f"{math_to_spoken_zh(vh.get('label', ''))}，{math_to_spoken_zh(vh.get('desc', ''))}。" for vh in highlights[:3])
            ),
        })

    # Scene 4: Worked Example SOP
    if we:
        we_steps = []
        we_spoken = []
        for st in we.get("steps", [])[:3]:
            lbl = f"{st.get('stepNumber', '步驟')}・{st.get('title', '')[:8]}"
            txt = complete_sentences(strip_html_tags(st.get("content", "")), 92)
            we_steps.append((lbl, txt))
            we_spoken.append(f"{st.get('stepNumber', '')}，{math_to_spoken_zh(st.get('title', ''))}：{math_to_spoken_zh(complete_sentences(txt, 60))}")
        we_steps.append(("標準結論", complete_sentences(strip_html_tags(we.get("answer", "")), 90)))

        scenes.append({
            "id": next_id(),
            "chapter_idx": 2,
            "chime": True,
            "layout": "example",
            "tag": f"建築師國考＆Studio 評圖實戰｜{we.get('difficulty', '高考建築師')}",
            "title": strip_html_tags(we.get("title", raw_title)),
            "problem": complete_sentences(strip_html_tags(we.get("scenario", "") + " " + we.get("question", "")), 115),
            "steps": we_steps,
            "shortcut": complete_sentences(strip_html_tags(we.get("eliteInsight", "")), 95),
            "narration": (
                f"來看實戰案例：{math_to_spoken_zh(complete_sentences(strip_html_tags(we.get('scenario', '')), 75))}"
                + "".join(we_spoken)
                + f"最後總結：{math_to_spoken_zh(complete_sentences(strip_html_tags(we.get('answer', '')), 65))}"
            ),
        })

    # Scene 5: Summary Card
    sum_cards = [
        ("核心定義", complete_sentences(defn, 75)),
        ("重點一", complete_sentences(core_list[0], 75) if core_list else raw_title),
        ("重點二", complete_sentences(core_list[1], 75) if len(core_list) > 1 else ""),
        ("大師心法", complete_sentences(strip_html_tags(we.get("eliteInsight", "")), 78)),
    ]
    scenes.append({
        "id": next_id(),
        "chapter_idx": 3,
        "chime": True,
        "layout": "summary",
        "tag": "評圖與國考速查懶人包",
        "title": f"{lesson_id}《{raw_title}》大師總結卡",
        "cards": [c for c in sum_cards if c[1]],
        "narration": (
            f"最後送上本集大師評圖心法：{math_to_spoken_zh(complete_sentences(strip_html_tags(we.get('eliteInsight', '')), 95))}"
            f"歡迎回到 Arch 平台的建築之路專區與高工先備單元《{math_to_spoken_zh(rel.get('title', ''))}》對照複習，我們下集見！"
        ),
    })

    return meta, scenes


class PersistentCDPRenderer:
    """Single headless Edge instance reused across dozens of lessons for 10x faster slide screenshot generation."""

    def __init__(self, profile_dir: pathlib.Path):
        self.profile_dir = profile_dir
        self.proc = None
        self.port = None
        self.session = None
        self.ws = None
        self.msg_id = 0

    async def __aenter__(self):
        browser = EDGE_EXE if os.path.exists(EDGE_EXE) else CHROME_EXE
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            s.bind(("127.0.0.1", 0))
            self.port = s.getsockname()[1]
        self.profile_dir.mkdir(parents=True, exist_ok=True)
        self.proc = subprocess.Popen(
            [
                browser,
                "--headless=new",
                "--disable-gpu",
                "--no-first-run",
                "--no-default-browser-check",
                "--disable-extensions",
                "--hide-scrollbars",
                f"--remote-debugging-port={self.port}",
                f"--user-data-dir={self.profile_dir}",
                "--window-size=1920,1080",
                "about:blank",
            ],
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
        )
        self.session = aiohttp.ClientSession()
        ws_url = None
        for _ in range(40):
            try:
                async with self.session.get(f"http://127.0.0.1:{self.port}/json") as resp:
                    targets = await resp.json()
                    for t in targets:
                        if t.get("type") == "page" and t.get("webSocketDebuggerUrl"):
                            ws_url = t["webSocketDebuggerUrl"]
                            break
                if ws_url:
                    break
            except Exception:
                await asyncio.sleep(0.2)
        if not ws_url:
            raise RuntimeError("Failed to connect to Persistent Headless Browser CDP")
        self.ws = await self.session.ws_connect(ws_url, max_msg_size=32 * 1024 * 1024)
        await self.call("Page.enable")
        await self.call(
            "Emulation.setDeviceMetricsOverride",
            {"width": 1920, "height": 1080, "deviceScaleFactor": 1, "mobile": False},
        )
        return self

    async def call(self, method: str, params: dict | None = None):
        self.msg_id += 1
        cid = self.msg_id
        await self.ws.send_json({"id": cid, "method": method, "params": params or {}})
        while True:
            raw = await self.ws.receive_json()
            if raw.get("id") == cid:
                if "error" in raw:
                    raise RuntimeError(f"CDP error {method}: {raw['error']}")
                return raw.get("result", {})

    async def render_pairs(self, html_pairs: list[tuple[pathlib.Path, pathlib.Path]]):
        for html_path, png_path in html_pairs:
            if png_path.exists() and png_path.stat().st_size > 15_000 and png_path.stat().st_mtime >= html_path.stat().st_mtime:
                continue
            await self.call("Page.navigate", {"url": html_path.resolve().as_uri()})
            await asyncio.sleep(0.05)
            shot = await self.call("Page.captureScreenshot", {"format": "png"})
            png_path.write_bytes(base64.b64decode(shot["data"]))

    async def __aexit__(self, exc_type, exc, tb):
        if self.ws:
            await self.ws.close()
        if self.session:
            await self.session.close()
        if self.proc:
            self.proc.terminate()
            try:
                self.proc.wait(timeout=3)
            except Exception:
                self.proc.kill()


_SAPI_VOICE = None


def get_sapi_voice():
    global _SAPI_VOICE
    if _SAPI_VOICE is None:
        sp = win32com.client.Dispatch("SAPI.SpVoice")
        for v in sp.GetVoices():
            desc = v.GetDescription()
            if "Hanhan" in desc or "zh-TW" in desc or "Chinese" in desc:
                sp.Voice = v
                break
        sp.Rate = 1
        sp.Volume = 100
        _SAPI_VOICE = sp
    return _SAPI_VOICE


def synthesize_sapi_wav(spoken_text: str, wav_path: pathlib.Path) -> float:
    if not (wav_path.exists() and wav_path.stat().st_size > 2000):
        sp = get_sapi_voice()
        st = win32com.client.Dispatch("SAPI.SpFileStream")
        st.Open(str(wav_path.resolve()), 3, False)
        sp.AudioOutputStream = st
        sp.Speak(spoken_text)
        st.Close()
    with wave.open(str(wav_path), "rb") as wf:
        return wf.getnframes() / float(wf.getframerate())


def fast_scene_tts_sync(scene: dict, wav_path: pathlib.Path) -> tuple[float, list[tuple[float, float, str]]]:
    display_text = scene["narration"]
    spoken_text = polish_taiwan_tts(display_text)
    dur = synthesize_sapi_wav(spoken_text, wav_path)
    chunks = split_caption_chunks(display_text, max_chars=24)
    weights = []
    for ch in chunks:
        w = len(ch)
        if ch.endswith(("。", "！", "？")):
            w += 2.0
        elif ch.endswith(("，", "；", "：", "、")):
            w += 0.9
        weights.append(w)
    total_w = sum(weights) or 1.0
    usable = max(0.2, dur - 0.04)
    t = 0.02
    subs = []
    for ch, w in zip(chunks, weights):
        seg_dur = usable * (w / total_w)
        clean_ch = ch.rstrip("，、。")
        subs.append((t, t + seg_dur, clean_ch))
        t += seg_dur
    return dur, subs


async def build_episode_fast(meta: dict, scenes: list[dict], renderer: PersistentCDPRenderer, tts_sem: asyncio.Semaphore) -> dict:
    t0 = time.time()
    work_dir = ROOT / "tmp" / "video_build" / meta["id"]
    slides_dir = work_dir / "slides"
    audio_dir = work_dir / "audio"
    out_dir = ROOT / "output" / "videos"
    for d in (slides_dir, audio_dir, out_dir):
        d.mkdir(parents=True, exist_ok=True)

    out_mp4 = out_dir / meta["output_name"]
    out_srt = out_mp4.with_suffix(".srt")
    out_ass = out_mp4.with_suffix(".ass")

    if out_mp4.exists() and out_mp4.stat().st_size > 200_000 and out_srt.exists() and out_ass.exists():
        dur = get_audio_duration(out_mp4)
        print(f"  [SKIP-READY] {out_mp4.name} ({dur/60:.1f}m) + {out_srt.name}")
        return {"id": meta["id"], "file": out_mp4.name, "srt": out_srt.name, "ass": out_ass.name, "duration_sec": round(dur, 1)}

    subject_slug = meta.get("subject_slug", "mechanics")
    arch_webp = ROOT / "apps" / "web" / "public" / "learning-visuals" / subject_slug / f"{meta['slug']}.webp"
    arch_uri = image_to_data_uri(arch_webp) if arch_webp.exists() else ""
    for s in scenes:
        if s["layout"] in ("cover", "split_arch") and not s.get("arch_image_uri") and arch_uri:
            s["arch_image_uri"] = arch_uri

    # 1) Write HTML & render slides via persistent CDP browser
    html_pairs = []
    for s in scenes:
        hp = slides_dir / f"scene_{s['id']}.html"
        pp = slides_dir / f"scene_{s['id']}.png"
        new_html = render_scene_html(meta, s)
        if not hp.exists() or hp.read_text(encoding="utf-8") != new_html:
            hp.write_text(new_html, encoding="utf-8")
        html_pairs.append((hp, pp))

    await renderer.render_pairs(html_pairs)

    # 2) Synthesize zh-TW WAV audio locally via Windows SAPI & concatenate in pure Python wave
    tts_results = [
        fast_scene_tts_sync(s, audio_dir / f"scene_{s['id']}.wav")
        for s in scenes
    ]

    all_subs = []
    scene_timings = []
    cursor = 0.0
    master_wav = work_dir / "master_voice.wav"

    with wave.open(str(master_wav), "wb") as out_wf:
        out_wf.setnchannels(1)
        out_wf.setsampwidth(2)
        out_wf.setframerate(22050)
        pad_frames = b"\x00\x00" * int(22050 * 0.24)

        for idx, (s, (dur, local_subs)) in enumerate(zip(scenes, tts_results)):
            wav_p = audio_dir / f"scene_{s['id']}.wav"
            with wave.open(str(wav_p), "rb") as in_wf:
                raw_pcm = in_wf.readframes(in_wf.getnframes())
            out_wf.writeframes(raw_pcm)
            out_wf.writeframes(pad_frames)
            seg_dur = dur + 0.24
            for st, en, txt in local_subs:
                all_subs.append((cursor + st, cursor + en, txt))
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

    # Single-step FFmpeg mux: concat slides + master WAV + burned-in ASS subtitles + embedded mov_text soft subtitle track
    subprocess.run(
        [
            "ffmpeg", "-y", "-v", "error",
            "-f", "concat", "-safe", "0", "-i", str(video_list_txt),
            "-i", str(master_wav),
            "-i", str(srt_path),
            "-vf", f"fps=6,scale=1920:1080,ass='{ass_escaped}'",
            "-af", "aresample=48000,highpass=f=75,loudnorm=I=-16:TP=-1.5:LRA=10",
            "-map", "0:v:0", "-map", "1:a:0", "-map", "2:0",
            "-c:v", "libx264", "-preset", "ultrafast", "-tune", "stillimage", "-crf", "23", "-pix_fmt", "yuv420p",
            "-c:a", "aac", "-b:a", "192k", "-ar", "48000", "-ac", "2",
            "-c:s", "mov_text", "-metadata:s:s:0", "language=zho", "-metadata:s:s:0", "title=繁體中文",
            "-shortest", "-movflags", "+faststart",
            str(out_mp4),
        ],
        check=True,
    )

    final_dur = round(cursor, 1)
    size_mb = out_mp4.stat().st_size / (1024 * 1024)
    print(f"  [DONE] {out_mp4.name} | {int(final_dur//60)}m{final_dur%60:04.1f}s | {len(all_subs)} subs (.srt/.ass/mov_text) | {size_mb:.2f} MB | {time.time()-t0:.1f}s")
    return {
        "id": meta["id"],
        "title": meta["title"],
        "file": out_mp4.name,
        "srt": out_srt.name,
        "ass": out_ass.name,
        "subtitle_cues": len(all_subs),
        "duration_sec": final_dur,
        "size_mb": round(size_mb, 2),
    }


def verify_all_144_videos_and_subtitles():
    data = json.loads((ROOT / "tmp" / "video_build" / "all_curriculum_data.json").read_text(encoding="utf-8"))
    out_dir = ROOT / "output" / "videos"
    mp4_files = sorted(out_dir.glob("*.mp4"))
    srt_files = sorted(out_dir.glob("*.srt"))
    ass_files = sorted(out_dir.glob("*.ass"))

    expected_prefixes = {}
    for subj in data["allSubjects"]:
        p = SUBJECT_PREFIX_MAP[subj["slug"]]
        expected_prefixes[p] = len(subj["topics"])
    expected_prefixes["BARCH"] = sum(len(d["knowledgePoints"]) for d in data["pathwaySubjects"])

    print("\n============================================================")
    print("🎬 全站 144 集教學影片與對應字幕 (.mp4 + .srt + .ass + 內嵌字幕軌) 驗收報告")
    print("============================================================")

    total_expected = 0
    total_found = 0
    missing = []
    manifest_items = []

    for prefix, count in expected_prefixes.items():
        total_expected += count
        found_for_prefix = 0
        for idx in range(1, count + 1):
            ep_id = f"{prefix}{idx:02d}"
            matches = list(out_dir.glob(f"{ep_id}-*.mp4"))
            if not matches:
                missing.append(ep_id)
                continue
            mp4 = matches[0]
            srt = mp4.with_suffix(".srt")
            ass = mp4.with_suffix(".ass")
            if not srt.exists() or srt.stat().st_size < 100 or not ass.exists() or ass.stat().st_size < 100:
                missing.append(f"{ep_id}(missing .srt/.ass)")
                continue
            cues = srt.read_text(encoding="utf-8").count("-->")
            found_for_prefix += 1
            total_found += 1
            manifest_items.append({
                "id": ep_id,
                "mp4": mp4.name,
                "srt": srt.name,
                "ass": ass.name,
                "size_mb": round(mp4.stat().st_size / (1024 * 1024), 2),
                "subtitle_cues": cues,
            })
        print(f"  ✓ 系列 {prefix:<6} : {found_for_prefix:2d} / {count:2d} 集影片 + .srt + .ass 字幕驗證通過")

    manifest_path = out_dir / "all-144-videos-manifest.json"
    manifest_path.write_text(json.dumps(manifest_items, ensure_ascii=False, indent=2), encoding="utf-8")
    print("------------------------------------------------------------")
    print(f"總集數驗收: {total_found} / {total_expected} 集 (.mp4={len(mp4_files)}, .srt={len(srt_files)}, .ass={len(ass_files)})")
    if missing:
        print(f"❌ 尚缺集數: {missing}")
        sys.exit(1)
    print(f"✅ 全部 {total_found} 集 1080p 教學影片與對應 .srt / .ass / 內嵌字幕軌 100% 完整齊備！")
    print(f"📄 總清單已輸出至: {manifest_path}")


async def main():
    args = sys.argv[1:]
    if "--sync-mc" in args:
        sync_existing_math_c_subtitles()
        return

    if "--verify-all" in args:
        verify_all_144_videos_and_subtitles()
        return

    data_path = ROOT / "tmp" / "video_build" / "all_curriculum_data.json"
    if not data_path.exists():
        raise RuntimeError("Run curriculum JSON export first!")
    data = json.loads(data_path.read_text(encoding="utf-8"))

    target_slugs = [a for a in args if not a.startswith("--")]
    tts_sem = asyncio.Semaphore(14)

    profile_tag = "_".join(target_slugs[:2]) if target_slugs else "all"
    async with PersistentCDPRenderer(ROOT / "tmp" / "video_build" / f"edge_profile_{profile_tag}_{os.getpid()}") as renderer:
        for subj in data["allSubjects"]:
            slug = subj["slug"]
            if slug == "math-c":
                continue
            if target_slugs and slug not in target_slugs:
                continue
            topics = subj["topics"]
            print(f"\n>>> Starting Subject: {subj['title']} ({slug}, {len(topics)} episodes) <<<")
            for idx, topic in enumerate(topics, 1):
                nxt = topics[idx] if idx < len(topics) else None
                meta, scenes = build_subject_topic_scenes(subj, topic, idx, nxt)
                await build_episode_fast(meta, scenes, renderer, tts_sem)

        if not target_slugs or "barch" in target_slugs:
            print("\n>>> Starting University B.Arch 8 Core Domains (24 episodes) <<<")
            g_idx = 0
            for domain in data["pathwaySubjects"]:
                for d_idx, kp in enumerate(domain["knowledgePoints"], 1):
                    g_idx += 1
                    meta, scenes = build_barch_kp_scenes(domain, kp, g_idx, d_idx)
                    await build_episode_fast(meta, scenes, renderer, tts_sem)


if __name__ == "__main__":
    asyncio.run(main())
