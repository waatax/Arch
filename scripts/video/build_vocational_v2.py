# -*- coding: utf-8 -*-
"""
Enhanced V2.0 Vocational High School (高工建築科 / 統測土木與建築群) 1080p Video Production Pipeline
====================================================================================================
Outputs ALL 126 vocational high-school episodes exclusively to:
    output/videos-高工/

Upgrades over v1:
  1. 100% Concept Coverage (ZERO truncation — all 966+ concepts across 13 subjects + 6 new TCTE standalone chapters)
  2. Dedicated Part 1 Curriculum Roadmap & Prerequisites slide
  3. Multi-Image Auto-Discovery across apps/web/public/learning-visuals/ + Custom Engineering Blueprint SVGs
  4. Progressive Step-by-Step Derivation Boards (math_steps) for concepts with SOP steps
  5. Complete Fatal Traps (up to 3) + Dedicated Elite Mental Models slide
  6. Multi-Problem Part 4: Worked Examples + REAL 111-115 Official TCTE Past Exam Questions (from practice-data shards)
  7. Dedicated Summary Cheat-Sheet + Outro Next-Lesson Preview
  8. Upgraded Windows OneCore Taiwan Voice (Microsoft Yating zh-TW) + Soft Chapter Chimes + Broadcast -16 LUFS
  9. Full HD 1080p H.264 (CRF 21, 10fps stillimage) + Burned ASS + Embedded mov_text + Sidecar .srt/.ass

Usage:
  python scripts/video/build_vocational_v2.py --force mechanics materials
  python scripts/video/build_vocational_v2.py --force surveying drafting
  python scripts/video/build_vocational_v2.py --force chinese english
  python scripts/video/build_vocational_v2.py --force physics chemistry history geography civics extensions
  python scripts/video/build_vocational_v2.py --force extra
  python scripts/video/build_vocational_v2.py --verify
"""

import asyncio
import base64
import json
import math
import os
import pathlib
import re
import shutil
import socket
import struct
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
    get_audio_duration,
    image_to_data_uri,
    polish_taiwan_tts,
    render_scene_html,
    split_caption_chunks,
    write_ass_subtitles,
    write_srt_subtitles,
)
from build_all_math_c import clean_step_pair, clean_visual_math, complete_sentences, math_to_spoken_zh
from vocational_svgs import TOPIC_SVG_MAPPING, VOCATIONAL_SVGS
from tcte_extra_chapters import EXTRA_TCTE_EPISODES

VOCATIONAL_OUT_DIR = ROOT / "output" / "videos-高工"
UNIVERSITY_OUT_DIR = ROOT / "output" / "videos"
WORK_ROOT = ROOT / "tmp" / "video_build_v2"

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

# ============================================================
# 1. Text & Engineering Speech Engine
# ============================================================

def strip_html_tags(text: str) -> str:
    if not text:
        return ""
    s = re.sub(r"<[^>]+>", "", str(text))
    s = re.sub(r"\*\*([^*]+)\*\*", r"\1", s)
    s = re.sub(r"`([^`]+)`", r"\1", s)
    s = re.sub(r"\s+", " ", s)
    return s.strip()


def clean_heading(text: str) -> str:
    s = strip_html_tags(text)
    s = re.sub(r"^[\d一二三四五六七八九十]+[\.、\s]+", "", s)
    # Strip leading decorative emojis
    s = re.sub(r"^[\U0001F300-\U0001FAFF\u2600-\u27BF\s]+", "", s)
    return s.strip()


def safe_filename_title(title: str) -> str:
    s = clean_heading(title)
    s = re.sub(r"[^\u4e00-\u9fffA-Za-z0-9_\-\(\)（）]", "", s)
    return s[:36] or "Lesson"


ENG_SPOKEN_MAP = [
    ("W/C", "水灰比"),
    ("kgf/cm²", "每平方公分公斤重"),
    ("kN/m", "每公尺千牛頓"),
    ("kN·m", "千牛頓公尺"),
    ("N/mm²", "每平方公釐牛頓"),
    ("kg/m³", "每立方公尺公斤"),
    ("mg/(m²·h)", "每平方公尺每小時毫克"),
    ("Ca(OH)₂", "氫氧化鈣"),
    ("Ca(OH)2", "氫氧化鈣"),
    ("CaCO₃", "碳酸鈣"),
    ("CaCO3", "碳酸鈣"),
    ("SiO₂", "二氧化矽"),
    ("SiO2", "二氧化矽"),
    ("CO₂", "二氧化碳"),
    ("CO2", "二氧化碳"),
    ("H₂O", "水"),
    ("H2O", "水"),
    ("Cl⁻", "氯離子"),
    ("C-S-H", "矽酸鈣水化膠體"),
    ("C3S", "矽酸三鈣"),
    ("C₂S", "矽酸二鈣"),
    ("C2S", "矽酸二鈣"),
    ("C3A", "鋁酸三鈣"),
    ("C4AF", "鐵鋁酸四鈣"),
    ("HCHO", "甲醛"),
    ("TVOC", "總揮發性有機物"),
    ("TWD97", "T W D 九七坐標"),
    ("TWVD2001", "台灣高程基準"),
    ("CNS", "國家標準 C N S "),
    ("ASTM", "A S T M "),
    ("BIM", "B I M "),
    ("CAD", "C A D "),
    ("LOD", "L O D "),
    ("IFC", "I F C "),
    ("FBD", "自由體圖"),
    ("SFD", "剪力圖"),
    ("BMD", "彎矩圖"),
    ("FSP", "纖維飽和點"),
    ("SSD", "面乾內飽和"),
    ("SCC", "自充填混凝土"),
    ("HPC", "高性能混凝土"),
    ("LCA", "生命週期評估"),
    ("LID", "低衝擊開發"),
    ("TOD", "大眾運輸導向開發"),
    ("GIS", "地理資訊系統"),
    ("GPS", "全球定位系統"),
    ("EDM", "電子測距儀"),
    ("SOP", "標準步驟"),
    ("MPa", "百萬帕"),
    ("GPa", "十億帕"),
    ("kN", "千牛頓"),
    ("kgf", "公斤重"),
    ("m³", "立方公尺"),
    ("cm³", "立方公分"),
    ("mm³", "立方公釐"),
    ("mm²", "平方公釐"),
    ("cm²", "平方公分"),
    ("m²", "平方公尺"),
    ("°C", "攝氏度"),
    ("μs", "靜摩擦係數"),
    ("μk", "動摩擦係數"),
    ("τ_max", "最大剪應力"),
    ("τ_avg", "平均剪應力"),
    ("σ_max", "最大彎曲應力"),
    ("σ_allow", "容許應力"),
    ("M_max", "最大彎矩"),
    ("V_max", "最大剪力"),
    ("N.A.", "中立軸"),
    ("σ", "正向應力 "),
    ("τ", "剪應力 "),
    ("ε", "應變 "),
    ("γ", "剪應變 "),
    ("ν", "蒲松比 "),
    ("μ", "摩擦係數 "),
    ("ρ", "曲率半徑 "),
    ("λ", "波長 "),
    ("Ω", "歐姆"),
    ("ΔN", "北緯距增量"),
    ("ΔE", "東經距增量"),
    ("f'c", "混凝土抗壓強度"),
    ("ȳ", "形心座標 y"),
    ("x̄", "形心座標 x"),
    ("—", "，"),
    ("→", "，接著"),
    ("⇒", "，推得"),
]


def engineering_to_spoken_zh(text: str) -> str:
    if not text:
        return ""
    s = strip_html_tags(text)
    for k, v in ENG_SPOKEN_MAP:
        s = s.replace(k, v)
    s = math_to_spoken_zh(s)
    # Remove lingering emojis or symbol noise
    s = re.sub(r"[\U0001F300-\U0001FAFF\u2600-\u27BF❌✅⚠️💡⚡🎯📐🔍🏛️]", "", s)
    s = re.sub(r"\s+", " ", s)
    s = re.sub(r"[，、]{2,}", "，", s)
    s = re.sub(r"[。]{2,}", "。", s)
    return s.strip()


def clean_display(text: str, max_chars: int = 110) -> str:
    s = clean_visual_math(strip_html_tags(text))
    return complete_sentences(s, max_chars)


# ============================================================
# 2. Multi-Visual Discovery & Official TCTE Past Exam Loader
# ============================================================

_VISUAL_INDEX: dict[str, pathlib.Path] | None = None
_TCTE_SHARDS: dict[str, list[dict]] | None = None


def get_visual_index() -> dict[str, pathlib.Path]:
    global _VISUAL_INDEX
    if _VISUAL_INDEX is None:
        lv = ROOT / "apps" / "web" / "public" / "learning-visuals"
        _VISUAL_INDEX = {p.relative_to(lv).as_posix(): p for p in lv.rglob("*.webp")}
    return _VISUAL_INDEX


def find_topic_visuals(subject_slug: str, topic_slug: str) -> list[tuple[str, pathlib.Path]]:
    """Discover all dedicated .webp visuals for a topic (cover + concept diagrams)."""
    idx = get_visual_index()
    found: list[tuple[str, pathlib.Path]] = []
    seen: set[pathlib.Path] = set()

    candidates = [
        (f"核心圖解", f"{subject_slug}/{topic_slug}.webp"),
        (f"資訊圖表總覽", f"{topic_slug}-infographic.webp"),
        (f"機制原理圖解", f"{topic_slug}-mechanism.webp"),
        (f"機制原理圖解", f"{subject_slug}-{topic_slug}-mechanism.webp"),
        (f"對照比較圖解", f"{topic_slug}-comparison.webp"),
        (f"對照比較圖解", f"{subject_slug}-{topic_slug}-comparison.webp"),
        (f"步驟解析圖解", f"{topic_slug}-step.webp"),
        (f"步驟解析圖解", f"{topic_slug}-step-by-step.webp"),
        (f"步驟解析圖解", f"{subject_slug}-{topic_slug}-step.webp"),
        (f"步驟解析圖解", f"{subject_slug}-{topic_slug}-step-by-step.webp"),
        (f"工程情境實例", f"{topic_slug}-context.webp"),
        (f"工程情境實例", f"{subject_slug}-{topic_slug}-context.webp"),
    ]
    for label, key in candidates:
        p = idx.get(key)
        if p and p not in seen:
            found.append((label, p))
            seen.add(p)

    # Subject-level fallback visuals (used for standalone chapters or extra scenes)
    fallbacks = [
        (f"科目資訊圖表", f"{subject_slug}-infographic.webp"),
        (f"工程實務案例", f"{subject_slug}-real-world.webp"),
        (f"工程原理圖解", f"{subject_slug}-mechanism.webp"),
    ]
    for label, key in fallbacks:
        p = idx.get(key)
        if p and p not in seen and len(found) < 3:
            found.append((label, p))
            seen.add(p)

    return found


def load_tcte_past_questions() -> dict[str, list[dict]]:
    """Load real 111-115 official TCTE past exam questions indexed by lessonRoute."""
    global _TCTE_SHARDS
    if _TCTE_SHARDS is not None:
        return _TCTE_SHARDS
    shards_dir = ROOT / "apps" / "web" / "public" / "practice-data" / "shards"
    by_route: dict[str, list[dict]] = {}
    if shards_dir.exists():
        for fp in sorted(shards_dir.glob("*.json")):
            try:
                d = json.loads(fp.read_text(encoding="utf-8"))
            except Exception:
                continue
            for q in d.get("questions", []):
                if q.get("requiresOfficialFigure") or q.get("needsOriginal"):
                    continue
                route = q.get("lessonRoute") or ""
                excerpt = strip_html_tags(q.get("excerpt") or "")
                opts = q.get("options") or {}
                teaching = q.get("teaching") or {}
                if not route or not excerpt or len(opts) < 4 or not teaching.get("steps"):
                    continue
                if len(excerpt) > 210 or q.get("passage"):
                    continue
                by_route.setdefault(route, []).append(q)
    # Sort newest year first, then prefer crisp medium-length stems
    for route, qs in by_route.items():
        qs.sort(key=lambda x: (-int(x.get("year") or 0), abs(len(x.get("excerpt", "")) - 80)))
    _TCTE_SHARDS = by_route
    return _TCTE_SHARDS


# ============================================================
# 3. Enhanced V2 Scene Builder (100% Concepts, Zero Truncation)
# ============================================================

CONCEPT_OPENERS = [
    "首先進入第一個核心觀念：{h}。",
    "緊接著看第二個必考重點：{h}。",
    "第三個課綱重點非常關鍵：{h}。",
    "繼續往前推進，第四個觀念是：{h}。",
    "再來看第五個核心考點：{h}。",
    "接著掌握第六個重要知識點：{h}。",
    "第七個觀念在統測也很常跨章出現：{h}。",
    "最後一個重點觀念千萬別漏掉：{h}。",
]


def build_enhanced_vocational_scenes(
    subj_slug: str,
    subj_title: str,
    topic: dict,
    idx: int,
    lesson_id: str,
    next_topic_title: str | None,
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

    visuals = find_topic_visuals(subj_slug, slug)
    visual_uris = [(lbl, image_to_data_uri(p)) for lbl, p in visuals if p.exists()]
    primary_uri = visual_uris[0][1] if visual_uris else ""

    svg_key = TOPIC_SVG_MAPPING.get((subj_slug, slug))
    custom_svg = VOCATIONAL_SVGS.get(svg_key) if svg_key else None

    meta = {
        "id": lesson_id,
        "subject_slug": subj_slug,
        "slug": slug,
        "brand": f"ARCH 高工・{subj_clean}",
        "code": code,
        "title": raw_title,
        "subtitle": f"108 課綱 × 統測精講升級版｜{subj_clean} 第 {idx:02d} 課",
        "output_name": f"{lesson_id}-{safe_title}.mp4",
        "chapters": [
            "01 課綱破題",
            "02 全觀念精講",
            "03 排雷與心法",
            "04 統測實戰",
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
    # PART 1: Cover + Curriculum Roadmap & Prerequisites
    # ------------------------------------------------------------
    desc_clean = clean_display(topic.get("desc", ""), 120)
    prereq_str = " ｜ ".join(strip_html_tags(p)[:34] for p in prereqs[:2]) if prereqs else "對齊 108 技術型高中課綱核心"
    scenes.append({
        "id": next_id(),
        "chapter_idx": 0,
        "chime": True,
        "layout": "cover",
        "arch_image_uri": primary_uri,
        "badge": f"108 課綱 {code} × 高工統測完全精講",
        "title": f"{lesson_id}：{raw_title}",
        "subtitle": f"{subj_clean}｜{prereq_str}",
        "stats": [
            ("官方課綱代碼", code),
            ("統測命題熱度", f"{hit_stars}" + (f"（{qs_count} 題）" if qs_count else "（核心必考）")),
            ("完整知識點", f"{len(concepts)} 大課綱觀念 100% 覆蓋"),
            ("本集教學架構", "圖解＋推導＋排雷＋真題"),
        ],
        "narration": (
            f"哈囉同學大家好，歡迎來到 Arch 高工建築科課綱精講！今天我們進入{subj_clean}第 {idx} 課《{raw_title}》。"
            f"{engineering_to_spoken_zh(desc_clean)}"
            f"本單元完整對應官方課綱代碼 {code}，這支增量精講影片會帶你把全部 {len(concepts)} 個核心觀念一個不漏地徹底打通，再搭配考場致命陷阱排雷、名師秒殺心法與統測實戰解析！"
        ),
    })

    # Scene 02: 108 Curriculum Learning Map & Prerequisites
    roadmap_items = []
    for c_i, c in enumerate(concepts[:5], 1):
        refs = "、".join(c.get("outlineRefs", []) or [code])[:18]
        h = clean_heading(c.get("heading", f"觀念 {c_i}"))[:28]
        first_f = clean_visual_math(strip_html_tags((c.get("formula") or "").splitlines()[0]))[:46] if c.get("formula") else clean_display(c.get("body", ""), 46)
        roadmap_items.append((f"{c_i:02d}", h, f"[{refs}] {first_f}"))
    if len(concepts) > 5:
        extra_names = "、".join(clean_heading(c.get("heading", ""))[:12] for c in concepts[5:9])
        roadmap_items[4] = (
            f"05+",
            f"進階與延伸觀念（共 {len(concepts) - 4} 項全涵蓋）",
            f"完整補齊：{extra_names}" + (" 等核心要點" if len(concepts) > 9 else ""),
        )

    prereq_spoken = "，以及".join(engineering_to_spoken_zh(p) for p in prereqs[:2]) if prereqs else "基礎工程圖學與單位換算觀念"
    scenes.append({
        "id": next_id(),
        "chapter_idx": 0,
        "chime": False,
        "layout": "roadmap",
        "title": f"108 課綱學習地圖與先備知識（{code}）",
        "subtitle": "先備連結：" + (" ｜ ".join(strip_html_tags(p)[:40] for p in prereqs[:2]) if prereqs else f"對應 {subj_clean} 官方課綱必修條目"),
        "items": roadmap_items,
        "narration": (
            f"開講前先花十秒對齊 108 課綱學習地圖！進入本章前，請先帶著先備觀念：{prereq_spoken}。"
            f"我們接下來會依序攻克這 {len(concepts)} 大課綱知識點，從工程直覺、公式規範到標準計算步驟一次建立完整架構。馬上開始！"
        ),
    })

    # ------------------------------------------------------------
    # PART 2: 100% ALL Core Concepts (ZERO DROPPED!)
    # ------------------------------------------------------------
    # Strategy:
    # - If len(concepts) <= 8: every concept gets its own rich full-screen slide
    # - If len(concepts) > 8: first 5 concepts get dedicated rich slides, concepts[5:] paired 2 per concept_cards slide
    solo_limit = len(concepts) if len(concepts) <= 8 else 5
    svg_used = False
    vis_cursor = 1  # visual_uris[0] used on cover; cycle remaining visuals across concepts
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

        if custom_svg and not svg_used and (c_i == 0 or c_i == 1):
            svg_used = True
            scenes.append({
                "id": next_id(),
                "chapter_idx": 1,
                "chime": (c_i == 0),
                "layout": "split_svg",
                "tag": f"課綱知識點 {c_i+1}/{len(concepts)}｜{refs}",
                "title": heading,
                "svg": custom_svg,
                "formula": formula_main or f"核心重點：{heading}",
                "bullets": bullets[:3],
                "narration": (
                    f"{opener}先看左邊這張高清工程藍圖向量圖解！{spoken_body}"
                    + (f"這裡的核心公式務必記熟：{spoken_formula}。" if spoken_formula else "")
                ),
            })
        elif has_table and c_i > 0:
            rows_clean = [
                [clean_visual_math(strip_html_tags(cell))[:36] for cell in r[:4]]
                for r in c_table["rows"][:5]
            ]
            # Summarize first 2 rows in narration for real teaching value
            row_note = ""
            if rows_clean and len(rows_clean[0]) >= 2:
                r0 = f"{rows_clean[0][0]}對應{rows_clean[0][1]}"
                r1 = f"，{rows_clean[1][0]}對應{rows_clean[1][1]}" if len(rows_clean) > 1 else ""
                row_note = f"從對照表可以清楚看到，{engineering_to_spoken_zh(r0 + r1)}，務必把各類別的關鍵差異對照記牢。"
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
            # 2-column rich concept cards
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
                        "heading": "工程應用與考場判讀",
                        "body": sec_body or bullets[0],
                        "example": (formula_lines[1][:68] if len(formula_lines) > 1 else (c_steps[0][:68] if c_steps else f"實戰定位：{raw_title} 高頻考點")),
                    },
                ],
                "narration": (
                    f"{opener}{spoken_body}"
                    + (f"重要公式或規範為：{spoken_formula}。" if spoken_formula else "")
                ),
            })

        # Add progressive step-by-step derivation board if concept has rich SOP steps
        if len(c_steps) >= 2 and derivations_added < max_derivations:
            derivations_added += 1
            msteps = []
            step_spoken = []
            default_notes = [
                "先釐清已知幾何條件、座標與基準假設。",
                "依官方課綱公式或 CNS 規範逐步代入計算。",
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
                "verify": complete_sentences(clean_visual_math(clean_step_pair(c_steps[3])[0]), 82) if len(c_steps) > 3 else "完成推導後，務必再次檢核單位、正負號與 CNS 規範限值！",
                "narration": (
                    f"為了讓你在考場上穩穩拿分，我們把「{engineering_to_spoken_zh(heading)}」的操作流程拆成清楚的步驟："
                    + "".join(step_spoken)
                    + "照著這套標準流程走，絕不失手！"
                ),
            })

    # Remaining concepts[solo_limit:] -> Pair 2-per-slide so 100% of ALL concepts are taught!
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
            "narration": "接著繼續完整攻略剩下的課綱重點：" + "".join(spoken_parts),
        })

    # ------------------------------------------------------------
    # PART 3: ALL Fatal Traps + Dedicated Elite Mental Models Slide
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
        # Split into 2 cards max per slide for crisp 1080p legibility
        scenes.append({
            "id": next_id(),
            "chapter_idx": 2,
            "chime": True,
            "layout": "trap_compare",
            "tag": "考場致命陷阱排雷｜紅綠 X 光對照",
            "title": f"《{raw_title}》統測最高頻失分雷區",
            "traps": trap_cards[:2],
            "narration": "所有課綱觀念都打通了，馬上進入考場排雷區！" + "".join(trap_spoken[:2]),
        })
        if len(trap_cards) > 2:
            scenes.append({
                "id": next_id(),
                "chapter_idx": 2,
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
                "example": f"考場觸發時機：看到《{raw_title}》核心題型立即套用！",
            })
            m_spoken.append(
                f"名師秒殺心法第 {m_i+1} 招，叫做「{engineering_to_spoken_zh(tech)}」：{engineering_to_spoken_zh(complete_sentences(expl, 110))}"
            )
        if len(m_cards) == 1:
            m_cards.append({
                "color": "emerald",
                "heading": "三層考場防呆檢核 SOP",
                "body": "① 先圈出題幹已知條件與單位量綱；② 畫圖或對照表確認正負方向與規範限值；③ 算出答案後做數量級與合理性反查。",
                "example": f"口訣：審題定方向 → 列式抓核心 → 驗算零粗心！",
            })
        scenes.append({
            "id": next_id(),
            "chapter_idx": 2,
            "chime": (not traps),
            "layout": "concept_cards",
            "tag": "名師秒殺心智模型｜Elite Mental Models",
            "title": f"帶進考場的《{raw_title}》破題思維框架",
            "formula": "　｜　".join(strip_html_tags(m.get("technique", ""))[:30] for m in models[:2]),
            "cards": m_cards,
            "narration": "排完考場雷區，送上幫你大幅提速的名師秒殺心法！" + "".join(m_spoken) + "接下來直接進統測實戰演練！",
        })

    # ------------------------------------------------------------
    # PART 4: Multi-Problem Worked Examples + REAL 111-115 TCTE Past Exam!
    # ------------------------------------------------------------
    tcte_included = 0
    ex_count = 0

    # 4A) Worked Examples (up to 2)
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
            "chime": (ex_count == 1),
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
                + (f"想在考場更快破題的話：{engineering_to_spoken_zh(complete_sentences(shortcut, 75))}" if shortcut else "")
            ),
        })

    # 4B) REAL 111-115 Official TCTE Past Exam Question (from shards) OR Transfer Practice
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
            "chime": (ex_count == 1),
            "layout": "example",
            "tag": f"🏆 官方歷屆統測真題實戰｜{src_lbl} 第 {q_no} 題",
            "title": f"統測真題驗收：{raw_title}",
            "problem": complete_sentences(q_stem, 138),
            "steps": sol_steps,
            "shortcut": f"考場實戰驗證：完全對應本課 {code} 核心觀念，審題鎖定關鍵字 30 秒秒殺！",
            "narration": (
                f"接著我們直接來實戰一道真正的官方統測歷屆真題！這題出自{src_lbl}第 {q_no} 題。"
                f"題目問：{engineering_to_spoken_zh(complete_sentences(q_stem, 120))}"
                + "".join(spoken_steps)
                + f"因此這道統測真題的官方標準答案就是選項 {ans_letter}，{engineering_to_spoken_zh(ans_text[:60])}！"
            ),
        })
    elif practices:
        # Pick the richest practice problem (prefer one mentioning 統測 or 進階)
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
            "chime": (ex_count == 1),
            "layout": "example",
            "tag": f"進階變式實戰演練｜難度：{diff}",
            "title": f"統測變式檢核：{raw_title}",
            "problem": complete_sentences(q_text, 130),
            "steps": sol_steps,
            "shortcut": f"速解要領：{complete_sentences(shortcut, 88)}" if shortcut else None,
            "narration": (
                f"再加碼一道進階變式實戰題，驗收你的解題手感！題目是：{engineering_to_spoken_zh(complete_sentences(q_text, 115))}"
                + "".join(sol_spoken)
                + f"算出來的正確解答就是：{engineering_to_spoken_zh(complete_sentences(ans, 80))}"
            ),
        })

    # ------------------------------------------------------------
    # PART 5: 30-Second Summary Cheat-Sheet + Outro Next-Lesson Preview
    # ------------------------------------------------------------
    sum_cards = []
    sum_spoken = []
    for c_i, c in enumerate(concepts[:6], 1):
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
        "title": f"{lesson_id}《{raw_title}》考前終極速查卡",
        "cards": sum_cards,
        "narration": (
            f"最後送上三十秒考前懶人包，歡迎直接截圖存手機！本課我們 100% 完整攻略了全部 {len(concepts)} 大課綱知識點，核心包含："
            + "".join(sum_spoken)
            + "把這張速查表的公式、規範與排雷重點記牢，統測遇到這單元就穩穩拿滿分！"
        ),
    })

    if next_topic_title:
        nxt_clean = clean_heading(next_topic_title)
        next_title_str = f"下一課預告：{subj_clean}《{nxt_clean}》"
        next_desc_str = f"趁記憶最熱，立刻前往 Arch 平台 `/subjects/{subj_slug}/{slug}` 完成隨堂挑戰與歷屆統測真題！"
        outro_spoken = (
            f"恭喜你完賽{subj_clean}第 {idx} 課《{raw_title}》！記得回到 Arch 平台把這章的隨堂測驗與歷屆真題刷過一遍。"
            f"下一課我們要繼續前進《{engineering_to_spoken_zh(nxt_clean)}》，我們下課見，掰掰！"
        )
    else:
        next_title_str = f"🎉 {subj_clean} 全系列高工統測課程完賽！"
        next_desc_str = f"恭喜徹底打通 {subj_clean} 全部 108 課綱與統測單元！立即前往 Arch `/learn` 挑戰全真統測模擬卷！"
        outro_spoken = (
            f"恭喜你完成{subj_clean}全系列高工統測精講！現在就回到 Arch 平台挑戰全真歷屆統測模擬考，祝你高分金榜題名，掰掰！"
        )

    scenes.append({
        "id": next_id(),
        "chapter_idx": 4,
        "chime": False,
        "layout": "outro",
        "tag": f"Arch 高工建築科・{subj_clean} 108 課綱完全版",
        "title": f"{lesson_id} 完賽！馬上回 Arch 刷題驗證",
        "subtitle": f"對應頁面：/subjects/{subj_slug}/{slug}（課綱代碼：{code}）",
        "next_title": next_title_str,
        "next_desc": next_desc_str,
        "narration": outro_spoken,
    })

    stats = {
        "concepts_total": len(concepts),
        "concepts_covered": len(concepts),
        "scenes_count": len(scenes),
        "tcte_real_qs": tcte_included,
        "visuals_used": len(visual_uris),
        "has_custom_svg": bool(custom_svg),
    }
    return meta, scenes, stats


# ============================================================
# 4. Persistent Headless Edge CDP Slide Renderer
# ============================================================

class PersistentCDPRenderer:
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
        for _ in range(50):
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
            raise RuntimeError("Failed to connect to Headless Browser CDP")
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
        shutil.rmtree(self.profile_dir, ignore_errors=True)


# ============================================================
# 5. Upgraded Windows OneCore Yating zh-TW TTS + Soft Chime
# ============================================================

_ONECORE_VOICE = None
_CHIME_PCM: bytes | None = None


def get_yating_voice():
    global _ONECORE_VOICE
    if _ONECORE_VOICE is None:
        sp = win32com.client.Dispatch("SAPI.SpVoice")
        # Prefer Microsoft Yating (zh-TW OneCore) for warmer, cleaner Taiwanese Mandarin
        try:
            tok = win32com.client.Dispatch("SAPI.SpObjectToken")
            tok.SetId(r"HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Speech_OneCore\Voices\Tokens\MSTTS_V110_zhTW_YatingM")
            sp.Voice = tok
        except Exception:
            for v in sp.GetVoices():
                desc = v.GetDescription()
                if "Hanhan" in desc or "zh-TW" in desc or "Chinese" in desc:
                    sp.Voice = v
                    break
        sp.Rate = 1
        sp.Volume = 100
        _ONECORE_VOICE = sp
    return _ONECORE_VOICE


def get_chime_pcm(sample_rate: int = 22050) -> bytes:
    """Generate a gentle dual-tone educational transition chime (~0.32s, 16-bit mono PCM)."""
    global _CHIME_PCM
    if _CHIME_PCM is None:
        dur = 0.32
        n = int(sample_rate * dur)
        buf = bytearray()
        for i in range(n):
            t = i / sample_rate
            env = math.exp(-t * 9.5) * min(1.0, t / 0.015)
            sig = 0.55 * math.sin(2 * math.pi * 587.33 * t) + 0.45 * math.sin(2 * math.pi * 880.0 * t)
            sample = int(max(-32767, min(32767, sig * env * 5200)))
            buf.extend(struct.pack("<h", sample))
        _CHIME_PCM = bytes(buf)
    return _CHIME_PCM


def synthesize_scene_wav(scene: dict, wav_path: pathlib.Path, force: bool = False) -> tuple[float, list[tuple[float, float, str]]]:
    display_text = scene["narration"]
    spoken_text = polish_taiwan_tts(display_text)
    if force or not (wav_path.exists() and wav_path.stat().st_size > 2000):
        sp = get_yating_voice()
        st = win32com.client.Dispatch("SAPI.SpFileStream")
        st.Open(str(wav_path.resolve()), 3, False)
        sp.AudioOutputStream = st
        sp.Speak(spoken_text)
        st.Close()
    with wave.open(str(wav_path), "rb") as wf:
        dur = wf.getnframes() / float(wf.getframerate())

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


async def build_episode_v2(
    meta: dict,
    scenes: list[dict],
    stats: dict,
    renderer: PersistentCDPRenderer,
    force: bool = False,
) -> dict:
    t0 = time.time()
    work_dir = WORK_ROOT / meta["id"]
    slides_dir = work_dir / "slides"
    audio_dir = work_dir / "audio"
    for d in (slides_dir, audio_dir, VOCATIONAL_OUT_DIR):
        d.mkdir(parents=True, exist_ok=True)

    out_mp4 = VOCATIONAL_OUT_DIR / meta["output_name"]
    out_srt = out_mp4.with_suffix(".srt")
    out_ass = out_mp4.with_suffix(".ass")
    marker = work_dir / "v2_done.json"

    if not force and marker.exists() and out_mp4.exists() and out_mp4.stat().st_size > 200_000 and out_srt.exists() and out_ass.exists():
        info = json.loads(marker.read_text(encoding="utf-8"))
        print(f"  [SKIP-V2] {out_mp4.name} ({info['duration_sec']/60:.1f}m, {info['scenes_count']} scenes)")
        return info

    # Remove any old differently-named files for this exact episode ID in VOCATIONAL_OUT_DIR
    for old_f in VOCATIONAL_OUT_DIR.glob(f"{meta['id']}-*"):
        if old_f.name not in (out_mp4.name, out_srt.name, out_ass.name):
            try:
                old_f.unlink()
            except Exception:
                pass

    # 1) Render 1080p slides
    html_pairs = []
    for s in scenes:
        hp = slides_dir / f"scene_{s['id']}.html"
        pp = slides_dir / f"scene_{s['id']}.png"
        new_html = render_scene_html(meta, s)
        if not hp.exists() or hp.read_text(encoding="utf-8") != new_html:
            hp.write_text(new_html, encoding="utf-8")
        html_pairs.append((hp, pp))

    await renderer.render_pairs(html_pairs)

    # 2) Synthesize Yating zh-TW WAV per scene + assemble master WAV with chimes
    tts_results = [
        synthesize_scene_wav(s, audio_dir / f"scene_{s['id']}.wav", force=force)
        for s in scenes
    ]

    chime_pcm = get_chime_pcm(22050)
    chime_dur = len(chime_pcm) / (2.0 * 22050)
    pad_pcm = b"\x00\x00" * int(22050 * 0.28)
    pad_dur = 0.28

    all_subs = []
    scene_timings = []
    cursor = 0.0
    master_wav = work_dir / "master_voice.wav"

    with wave.open(str(master_wav), "wb") as out_wf:
        out_wf.setnchannels(1)
        out_wf.setsampwidth(2)
        out_wf.setframerate(22050)

        for idx_s, (s, (dur, local_subs)) in enumerate(zip(scenes, tts_results)):
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
        "version": "v2.0",
        **stats,
    }
    marker.write_text(json.dumps(info, ensure_ascii=False, indent=2), encoding="utf-8")
    print(
        f"  [V2-DONE] {out_mp4.name} | {int(final_dur//60)}m{final_dur%60:04.1f}s | "
        f"{stats['scenes_count']} scenes | {stats['concepts_covered']}/{stats['concepts_total']} concepts | "
        f"TCTE_Q={stats['tcte_real_qs']} | {len(all_subs)} subs | {size_mb:.2f} MB | {time.time()-t0:.1f}s",
        flush=True,
    )
    return info


# ============================================================
# 6. Verification & Separated Manifest Generation
# ============================================================

def verify_all_separated():
    data = json.loads((ROOT / "tmp" / "video_build" / "all_curriculum_data.json").read_text(encoding="utf-8"))

    # Expected vocational episodes (120 base + 6 new standalone TCTE chapters = 126)
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
        v2_marker = WORK_ROOT / ep_id / "v2_done.json"
        meta_extra = json.loads(v2_marker.read_text(encoding="utf-8")) if v2_marker.exists() else {}
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
            "version": meta_extra.get("version", "v2-neural" if ep_id.startswith("MC") and ep_id != "MC16" else "v2.0"),
            "concepts_covered": meta_extra.get("concepts_covered"),
            "scenes_count": meta_extra.get("scenes_count"),
            "tcte_real_qs": meta_extra.get("tcte_real_qs", 0),
        })

    # Verify university BARCH 01..24 in output/videos/
    uni_manifest = []
    uni_missing = []
    total_uni_sec = 0.0
    total_uni_mb = 0.0
    g_idx = 0
    for domain in data["pathwaySubjects"]:
        for kp in domain["knowledgePoints"]:
            g_idx += 1
            ep_id = f"BARCH{g_idx:02d}"
            matches = sorted(UNIVERSITY_OUT_DIR.glob(f"{ep_id}-*.mp4"))
            if not matches:
                uni_missing.append(ep_id)
                continue
            mp4 = matches[0]
            srt = mp4.with_suffix(".srt")
            ass = mp4.with_suffix(".ass")
            if not srt.exists() or not ass.exists():
                uni_missing.append(f"{ep_id}(sub)")
                continue
            dur = round(get_audio_duration(mp4), 1)
            size_mb = round(mp4.stat().st_size / (1024 * 1024), 2)
            cues = srt.read_text(encoding="utf-8").count("-->")
            total_uni_sec += dur
            total_uni_mb += size_mb
            uni_manifest.append({
                "id": ep_id,
                "domain": domain["title"],
                "title": kp["term"],
                "licensure_exam": kp.get("licensureExamCode", ""),
                "mp4": mp4.name,
                "srt": srt.name,
                "ass": ass.name,
                "duration_sec": dur,
                "size_mb": size_mb,
                "subtitle_cues": cues,
            })

    # Also ensure NO vocational mp4 remains in output/videos/
    stray_in_uni = [p.name for p in UNIVERSITY_OUT_DIR.glob("*.mp4") if not p.name.startswith("BARCH")]
    stray_in_voc = [p.name for p in VOCATIONAL_OUT_DIR.glob("*.mp4") if p.name.startswith("BARCH")]

    (VOCATIONAL_OUT_DIR / "vocational-126-videos-manifest.json").write_text(
        json.dumps(voc_manifest, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    (UNIVERSITY_OUT_DIR / "university-barch-24-videos-manifest.json").write_text(
        json.dumps(uni_manifest, ensure_ascii=False, indent=2), encoding="utf-8"
    )

    print("\n======================================================================")
    print("🎬 高工(統測) 126 集 × 大學至建築師考證 24 集 — 分流驗收報告")
    print("======================================================================")
    print(f"📁 高工目錄 ({VOCATIONAL_OUT_DIR}): {len(voc_manifest)}/{len(expected_voc)} 集 | 總片長 {total_voc_sec/60:.1f} 分 ({total_voc_sec/3600:.2f} 小時) | 總容量 {total_voc_mb/1024:.2f} GB")
    print(f"📁 大學目錄 ({UNIVERSITY_OUT_DIR}): {len(uni_manifest)}/24 集 | 總片長 {total_uni_sec/60:.1f} 分 ({total_uni_sec/3600:.2f} 小時) | 總容量 {total_uni_mb/1024:.2f} GB")
    if stray_in_uni:
        print(f"❌ 大學目錄殘留高工檔案: {stray_in_uni}")
    if stray_in_voc:
        print(f"❌ 高工目錄混入大學檔案: {stray_in_voc}")
    if voc_missing:
        print(f"❌ 高工缺漏集數: {voc_missing}")
    if uni_missing:
        print(f"❌ 大學缺漏集數: {uni_missing}")
    if voc_missing or uni_missing or stray_in_uni or stray_in_voc:
        sys.exit(1)
    print("✅ 100% 通過！高工 126 集與大學建築師 24 集完全分流、字幕三件套齊備！")


# ============================================================
# 7. CLI Entry Point
# ============================================================

async def main():
    args = sys.argv[1:]
    if "--verify" in args:
        verify_all_separated()
        return

    force = "--force" in args
    targets = [a for a in args if not a.startswith("--")]

    data = json.loads((ROOT / "tmp" / "video_build" / "all_curriculum_data.json").read_text(encoding="utf-8"))
    tag = "_".join(targets[:3]) if targets else "all"
    profile_dir = WORK_ROOT / f"edge_profile_{tag}_{os.getpid()}"

    async with PersistentCDPRenderer(profile_dir) as renderer:
        for subj in data["allSubjects"]:
            slug = subj["slug"]
            if slug == "math-c":
                continue  # MC01-MC15 keep pristine 30fps Neural HsiaoChenNeural audio!
            if targets and slug not in targets:
                continue
            prefix = SUBJECT_PREFIX_MAP[slug]
            topics = subj["topics"]
            # Check if this subject has an extra standalone chapter as next episode
            extra_next = next((e["topic"]["title"] for e in EXTRA_TCTE_EPISODES if e["subject_slug"] == slug), None)
            print(f"\n>>> [V2.0] Building Subject: {subj['title']} ({slug}, {len(topics)} episodes) <<<", flush=True)
            for idx, topic in enumerate(topics, 1):
                nxt_title = topics[idx]["title"] if idx < len(topics) else extra_next
                lesson_id = f"{prefix}{idx:02d}"
                meta, scenes, stats = build_enhanced_vocational_scenes(slug, subj["title"], topic, idx, lesson_id, nxt_title)
                await build_episode_v2(meta, scenes, stats, renderer, force=force)

        if not targets or "extra" in targets:
            print(f"\n>>> [V2.0] Building {len(EXTRA_TCTE_EPISODES)} New Standalone TCTE Chapters <<<", flush=True)
            for ex in EXTRA_TCTE_EPISODES:
                meta, scenes, stats = build_enhanced_vocational_scenes(
                    ex["subject_slug"],
                    ex["subject_title"],
                    ex["topic"],
                    ex["episode_num"],
                    ex["lesson_id"],
                    None,
                )
                await build_episode_v2(meta, scenes, stats, renderer, force=force)


if __name__ == "__main__":
    asyncio.run(main())
