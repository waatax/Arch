# -*- coding: utf-8 -*-
"""
Universal 1080p Math C Lesson Video Builder for Arch
- Voice: Microsoft Edge Neural zh-TW-HsiaoChenNeural (AI 懶人報自然台灣語音風格)
- Visuals: 1920x1080 HTML5 + CSS + Vector SVG rendered via Headless Edge CDP
- Subtitles: Synced Traditional Chinese ASS subtitles in dedicated bottom safe zone
- Output: Broadcast-normalized (-16 LUFS) 1080p H.264 MP4

Usage:
  python scripts/video/build_lesson_video.py mc01_functions_graphs
"""

import asyncio
import base64
import html
import importlib
import json
import math
import os
import pathlib
import re
import shutil
import struct
import subprocess
import sys
import time
import wave

import aiohttp
import edge_tts

ROOT = pathlib.Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT / "scripts" / "video"))

EDGE_EXE = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
CHROME_EXE = r"C:\Program Files\Google\Chrome\Application\chrome.exe"


# ============================================================
# 1. HTML5 / CSS 1080p Slide Renderer
# ============================================================

BASE_CSS = """
* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  width: 1920px;
  height: 1080px;
  overflow: hidden;
  background: #0F172A;
  color: #F8FAFC;
  font-family: 'Noto Sans TC', 'Microsoft JhengHei', 'Segoe UI', sans-serif;
  position: relative;
}
.bg-grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(148,163,184,0.055) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148,163,184,0.055) 1px, transparent 1px);
  background-size: 48px 48px;
}
.bg-glow {
  position: absolute; inset: 0;
  background:
    radial-gradient(circle at 86% 12%, rgba(56,189,248,0.16), transparent 42%),
    radial-gradient(circle at 12% 88%, rgba(245,158,11,0.10), transparent 40%);
}
.header {
  position: absolute; top: 0; left: 0; right: 0; height: 78px;
  padding: 0 56px;
  display: flex; align-items: center; justify-content: space-between;
  border-bottom: 1px solid rgba(148,163,184,0.16);
  background: rgba(15,23,42,0.85);
}
.brand {
  display: flex; align-items: center; gap: 16px;
}
.brand-pill {
  background: linear-gradient(135deg, #0284C7, #2563EB);
  color: #FFF; font-weight: 800; font-size: 20px;
  padding: 6px 16px; border-radius: 999px; letter-spacing: 0.5px;
}
.lesson-name {
  font-size: 22px; font-weight: 700; color: #CBD5E1;
}
.chapters {
  display: flex; align-items: center; gap: 10px;
}
.chap-pill {
  font-size: 17px; font-weight: 600; color: #64748B;
  padding: 6px 14px; border-radius: 999px;
  border: 1px solid rgba(100,116,139,0.28);
}
.chap-pill.active {
  color: #0F172A; background: #F59E0B; border-color: #F59E0B; font-weight: 800;
}
.chap-pill.done {
  color: #94A3B8; border-color: rgba(56,189,248,0.35); background: rgba(56,189,248,0.08);
}
.stage {
  position: absolute;
  top: 98px; left: 64px; right: 64px; bottom: 146px;
  display: flex; flex-direction: column; justify-content: center;
}
.tag {
  display: inline-block; align-self: flex-start;
  background: rgba(56,189,248,0.15); color: #38BDF8;
  border: 1px solid rgba(56,189,248,0.4);
  font-size: 21px; font-weight: 700;
  padding: 6px 18px; border-radius: 10px; margin-bottom: 14px;
}
.slide-title {
  font-size: 46px; font-weight: 900; color: #F8FAFC;
  line-height: 1.22; margin-bottom: 20px; letter-spacing: -0.5px;
}
.formula-bar {
  background: linear-gradient(90deg, rgba(245,158,11,0.16), rgba(56,189,248,0.10));
  border-left: 6px solid #F59E0B;
  border-radius: 12px;
  padding: 18px 28px;
  font-size: 30px; font-weight: 800; color: #FDE68A;
  margin-bottom: 24px;
  letter-spacing: 0.3px;
}
.bullets {
  list-style: none; display: flex; flex-direction: column; gap: 15px;
}
.bullets li {
  font-size: 26px; line-height: 1.48; color: #E2E8F0;
  padding-left: 34px; position: relative; font-weight: 500;
}
.bullets li::before {
  content: "▸"; position: absolute; left: 0; top: 0;
  color: #38BDF8; font-weight: 900; font-size: 28px;
}

/* Cover layout */
.cover-wrap {
  display: flex; flex-direction: column; align-items: flex-start; justify-content: center;
  height: 100%; padding: 0 36px;
}
.cover-badge {
  background: rgba(245,158,11,0.18); border: 1.5px solid #F59E0B; color: #FBBF24;
  font-size: 24px; font-weight: 800; padding: 10px 24px; border-radius: 999px; margin-bottom: 28px;
}
.cover-title {
  font-size: 74px; font-weight: 900; line-height: 1.15; margin-bottom: 22px;
  background: linear-gradient(90deg, #FFFFFF, #BAE6FD);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
}
.cover-sub {
  font-size: 32px; color: #94A3B8; font-weight: 600; margin-bottom: 48px; line-height: 1.45;
}
.stat-grid {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; width: 100%;
}
.stat-card {
  background: rgba(30,41,59,0.75); border: 1px solid rgba(148,163,184,0.22);
  border-radius: 16px; padding: 24px 26px;
}
.stat-label { font-size: 19px; color: #94A3B8; font-weight: 600; margin-bottom: 8px; }
.stat-val { font-size: 28px; color: #38BDF8; font-weight: 800; }

/* Roadmap */
.roadmap-list { display: flex; flex-direction: column; gap: 18px; margin-top: 8px; }
.roadmap-row {
  display: flex; align-items: center; gap: 24px;
  background: rgba(30,41,59,0.72); border: 1px solid rgba(148,163,184,0.2);
  border-radius: 16px; padding: 20px 28px;
}
.roadmap-num {
  width: 58px; height: 58px; border-radius: 14px;
  background: linear-gradient(135deg, #0284C7, #38BDF8);
  display: flex; align-items: center; justify-content: center;
  font-size: 26px; font-weight: 900; color: #0F172A; flex-shrink: 0;
}
.roadmap-head { font-size: 28px; font-weight: 800; color: #F8FAFC; margin-bottom: 4px; }
.roadmap-desc { font-size: 22px; color: #94A3B8; }

/* Table */
.data-table {
  width: 100%; border-collapse: separate; border-spacing: 0;
  margin-top: 18px; border-radius: 14px; overflow: hidden;
  border: 1px solid rgba(148,163,184,0.25);
}
.data-table th {
  background: #1E293B; color: #38BDF8; font-size: 22px; font-weight: 800;
  padding: 15px 20px; text-align: left; border-bottom: 2px solid #334155;
}
.data-table td {
  background: rgba(15,23,42,0.85); color: #E2E8F0; font-size: 22px;
  padding: 14px 20px; border-bottom: 1px solid rgba(148,163,184,0.14);
}
.data-table tr:last-child td { border-bottom: none; }

/* 2-col cards */
.card-grid-2 {
  display: grid; grid-template-columns: 1fr 1fr; gap: 28px; margin-top: 6px;
}
.info-card {
  background: rgba(30,41,59,0.78); border-radius: 18px; padding: 30px 32px;
  border: 1.5px solid rgba(148,163,184,0.25);
  display: flex; flex-direction: column; gap: 16px;
}
.info-card.cyan { border-top: 6px solid #38BDF8; }
.info-card.amber { border-top: 6px solid #F59E0B; }
.info-card.emerald { border-top: 6px solid #10B981; }
.info-card.rose { border-top: 6px solid #F43F5E; }
.info-card h3 { font-size: 29px; font-weight: 800; color: #F8FAFC; }
.info-card p { font-size: 24px; line-height: 1.55; color: #CBD5E1; white-space: pre-line; }
.info-example {
  background: rgba(15,23,42,0.85); border-radius: 12px; padding: 16px 20px;
  font-size: 22px; font-weight: 700; color: #FDE68A; line-height: 1.5;
  border: 1px solid rgba(245,158,11,0.3);
}

/* Split SVG */
.split-row {
  display: grid; grid-template-columns: 1.05fr 1fr; gap: 36px; align-items: center;
}
.svg-box { width: 100%; }

/* Trap cards */
.trap-list { display: flex; flex-direction: column; gap: 24px; }
.trap-card {
  background: rgba(30,41,59,0.78); border: 1px solid rgba(148,163,184,0.22);
  border-radius: 18px; padding: 24px 30px;
}
.trap-badge { font-size: 22px; font-weight: 800; color: #FBBF24; margin-bottom: 14px; }
.trap-cols { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 14px; }
.trap-wrong {
  background: rgba(244,63,94,0.14); border: 1.5px solid rgba(244,63,94,0.45);
  border-radius: 12px; padding: 16px 20px; font-size: 23px; line-height: 1.45; color: #FECDD3;
}
.trap-right {
  background: rgba(16,185,129,0.14); border: 1.5px solid rgba(16,185,129,0.45);
  border-radius: 12px; padding: 16px 20px; font-size: 23px; line-height: 1.45; color: #A7F3D0;
}
.trap-tip {
  font-size: 21px; color: #38BDF8; font-weight: 700;
}

/* Worked example */
.problem-box {
  background: rgba(30,41,59,0.85); border: 1.5px solid rgba(56,189,248,0.4);
  border-radius: 16px; padding: 22px 28px;
  font-size: 26px; line-height: 1.5; color: #F8FAFC; font-weight: 600;
  margin-bottom: 22px;
}
.step-list { display: flex; flex-direction: column; gap: 14px; }
.step-row {
  display: flex; align-items: flex-start; gap: 18px;
  background: rgba(15,23,42,0.82); border: 1px solid rgba(148,163,184,0.2);
  border-radius: 14px; padding: 16px 22px;
}
.step-label {
  background: #0284C7; color: #FFF; font-size: 20px; font-weight: 800;
  padding: 5px 14px; border-radius: 8px; flex-shrink: 0; min-width: 150px; text-align: center;
}
.step-text { font-size: 24px; line-height: 1.45; color: #E2E8F0; font-weight: 500; }
.shortcut-box {
  margin-top: 18px;
  background: linear-gradient(90deg, rgba(245,158,11,0.20), rgba(16,185,129,0.14));
  border: 1.5px solid #F59E0B; border-radius: 14px; padding: 16px 24px;
  font-size: 24px; font-weight: 800; color: #FDE68A;
}

/* Summary */
.summary-grid { display: flex; flex-direction: column; gap: 16px; }
.summary-row {
  display: flex; align-items: center; gap: 22px;
  background: rgba(30,41,59,0.82); border-left: 6px solid #10B981;
  border-radius: 14px; padding: 18px 26px;
}
.summary-k { font-size: 25px; font-weight: 900; color: #34D399; min-width: 220px; }
.summary-v { font-size: 24px; color: #F8FAFC; font-weight: 600; line-height: 1.4; }

/* Outro */
.outro-wrap {
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  text-align: center; height: 100%; gap: 24px;
}
.next-card {
  background: rgba(30,41,59,0.85); border: 2px solid #38BDF8;
  border-radius: 20px; padding: 30px 44px; max-width: 1120px; width: 100%;
  margin-top: 10px;
}
.next-title { font-size: 34px; font-weight: 900; color: #38BDF8; margin-bottom: 12px; }
.next-desc { font-size: 26px; color: #E2E8F0; line-height: 1.5; }

/* Progressive Math Derivation Board (math_steps) */
.math-board {
  display: flex; flex-direction: column; gap: 18px; margin-top: 6px;
}
.mstep {
  display: grid; grid-template-columns: 160px 1.25fr 1fr; align-items: center; gap: 24px;
  background: rgba(15,23,42,0.84); border: 1.5px solid rgba(148,163,184,0.22);
  border-radius: 16px; padding: 18px 26px;
}
.mstep.active {
  background: linear-gradient(90deg, rgba(245,158,11,0.16), rgba(56,189,248,0.10));
  border: 2.5px solid #F59E0B;
  box-shadow: 0 0 24px rgba(245,158,11,0.18);
}
.mstep.done {
  border-color: rgba(16,185,129,0.45);
  background: rgba(16,185,129,0.07);
}
.mstep-badge {
  font-size: 21px; font-weight: 800; text-align: center;
  padding: 8px 14px; border-radius: 10px;
  background: #1E293B; color: #94A3B8;
}
.mstep.active .mstep-badge { background: #F59E0B; color: #0F172A; }
.mstep.done .mstep-badge { background: rgba(16,185,129,0.22); color: #34D399; }
.mstep-eq {
  font-size: 34px; font-weight: 800; color: #F8FAFC;
  display: flex; align-items: center; flex-wrap: wrap; gap: 10px; line-height: 1.3;
}
.mstep-note {
  font-size: 23px; color: #CBD5E1; line-height: 1.45;
  border-left: 3px solid rgba(148,163,184,0.3); padding-left: 20px;
}
.mstep.active .mstep-note { color: #FDE68A; border-left-color: #F59E0B; font-weight: 700; }

/* Stacked Math Fractions & Highlight Spans */
.frac {
  display: inline-flex; flex-direction: column; align-items: center;
  vertical-align: middle; margin: 0 4px; line-height: 1.15;
}
.frac .num {
  padding: 0 10px 4px 10px; border-bottom: 3px solid currentColor;
  text-align: center;
}
.frac .den {
  padding: 4px 10px 0 10px; text-align: center;
}
.hl-amber { color: #FBBF24; }
.hl-cyan { color: #38BDF8; }
.hl-green { color: #34D399; }
.hl-rose { color: #FB7185; }
.verify-bar {
  margin-top: 14px;
  background: rgba(16,185,129,0.14); border: 1.5px solid #10B981;
  border-radius: 14px; padding: 14px 24px;
  font-size: 23px; font-weight: 700; color: #A7F3D0;
}

/* Arch Existing Illustration Gallery Frame */
.cover-split {
  display: grid; grid-template-columns: 1.35fr 0.72fr; gap: 44px; align-items: center;
  height: 100%; padding: 0 18px;
}
.arch-frame {
  background: #FAF8F2;
  border-radius: 22px;
  padding: 14px;
  border: 3px solid rgba(56,189,248,0.65);
  box-shadow: 0 18px 48px rgba(0,0,0,0.55);
  display: flex; flex-direction: column; align-items: center; gap: 10px;
}
.arch-frame img {
  width: 100%; max-height: 460px; object-fit: contain; border-radius: 14px;
}
.arch-caption {
  font-size: 19px; font-weight: 800; color: #1E293B; letter-spacing: 0.5px;
}
.split-arch {
  display: grid; grid-template-columns: 0.82fr 1.18fr; gap: 36px; align-items: center;
}
"""


def esc(s: str) -> str:
    return html.escape(s or "")


def render_header(meta: dict, chapter_idx: int) -> str:
    pills = []
    for i, name in enumerate(meta["chapters"]):
        cls = "chap-pill active" if i == chapter_idx else ("chap-pill done" if i < chapter_idx else "chap-pill")
        pills.append(f'<span class="{cls}">{esc(name)}</span>')
    brand_label = meta.get("brand", "ARCH 高工數學 C")
    return f"""
    <div class="header">
      <div class="brand">
        <span class="brand-pill">{esc(brand_label)}</span>
        <span class="lesson-name">{esc(meta["id"])}｜{esc(meta["title"])}</span>
      </div>
      <div class="chapters">{''.join(pills)}</div>
    </div>
    """


def image_to_data_uri(img_path: pathlib.Path) -> str:
    if not img_path or not img_path.exists():
        return ""
    ext = img_path.suffix.lower().lstrip(".")
    mime = "image/webp" if ext == "webp" else ("image/png" if ext == "png" else "image/jpeg")
    b64 = base64.b64encode(img_path.read_bytes()).decode("ascii")
    return f"data:{mime};base64,{b64}"


def render_scene_html(meta: dict, scene: dict) -> str:
    layout = scene["layout"]
    body = ""

    if layout == "cover":
        stats_html = "".join(
            f'<div class="stat-card"><div class="stat-label">{esc(k)}</div><div class="stat-val">{esc(v)}</div></div>'
            for k, v in scene["stats"]
        )
        arch_uri = scene.get("arch_image_uri") or ""
        if arch_uri:
            body = f"""
            <div class="cover-split">
              <div class="cover-wrap" style="padding:0;">
                <div class="cover-badge">{esc(scene["badge"])}</div>
                <div class="cover-title" style="font-size:64px;">{esc(scene["title"])}</div>
                <div class="cover-sub" style="font-size:28px;margin-bottom:32px;">{esc(scene["subtitle"])}</div>
                <div class="stat-grid" style="grid-template-columns:repeat(2,1fr);gap:18px;">{stats_html}</div>
              </div>
              <div class="arch-frame">
                <img src="{arch_uri}" alt="Arch Visual" />
                <div class="arch-caption">Arch 建築工程圖解｜{esc(meta["title"])}</div>
              </div>
            </div>
            """
        else:
            body = f"""
            <div class="cover-wrap">
              <div class="cover-badge">{esc(scene["badge"])}</div>
              <div class="cover-title">{esc(scene["title"])}</div>
              <div class="cover-sub">{esc(scene["subtitle"])}</div>
              <div class="stat-grid">{stats_html}</div>
            </div>
            """

    elif layout == "split_arch":
        bullets_html = "".join(f"<li>{esc(b)}</li>" for b in scene["bullets"])
        arch_uri = scene.get("arch_image_uri") or ""
        formula_html = f'<div class="formula-bar">{esc(scene["formula"])}</div>' if scene.get("formula") else ""
        body = f"""
        <div class="tag">{esc(scene["tag"])}</div>
        <div class="slide-title">{esc(scene["title"])}</div>
        {formula_html}
        <div class="split-arch">
          <div class="arch-frame">
            <img src="{arch_uri}" alt="Arch Visual" style="max-height:420px;" />
            <div class="arch-caption">{esc(scene.get("arch_caption", "Arch 教學圖示範例"))}</div>
          </div>
          <ul class="bullets">{bullets_html}</ul>
        </div>
        """

    elif layout == "roadmap":
        rows = "".join(
            f"""<div class="roadmap-row">
              <div class="roadmap-num">{esc(num)}</div>
              <div><div class="roadmap-head">{esc(head)}</div><div class="roadmap-desc">{esc(desc)}</div></div>
            </div>"""
            for num, head, desc in scene["items"]
        )
        body = f"""
        <div class="tag">本課導覽</div>
        <div class="slide-title">{esc(scene["title"])}</div>
        <div style="font-size:24px;color:#94A3B8;margin-bottom:18px;">{esc(scene["subtitle"])}</div>
        <div class="roadmap-list">{rows}</div>
        """

    elif layout == "concept_table":
        bullets_html = "".join(f"<li>{esc(b)}</li>" for b in scene["bullets"])
        ths = "".join(f"<th>{esc(h)}</th>" for h in scene["table"]["headers"])
        trs = "".join(
            "<tr>" + "".join(f"<td>{esc(c)}</td>" for c in r) + "</tr>"
            for r in scene["table"]["rows"]
        )
        body = f"""
        <div class="tag">{esc(scene["tag"])}</div>
        <div class="slide-title">{esc(scene["title"])}</div>
        <div class="formula-bar">{esc(scene["formula"])}</div>
        <ul class="bullets">{bullets_html}</ul>
        <table class="data-table"><thead><tr>{ths}</tr></thead><tbody>{trs}</tbody></table>
        """

    elif layout == "concept_cards":
        cards_html = "".join(
            f"""<div class="info-card {esc(c['color'])}">
              <h3>{esc(c['heading'])}</h3>
              <p>{esc(c['body'])}</p>
              <div class="info-example">{esc(c['example'])}</div>
            </div>"""
            for c in scene["cards"]
        )
        body = f"""
        <div class="tag">{esc(scene["tag"])}</div>
        <div class="slide-title">{esc(scene["title"])}</div>
        <div class="formula-bar">{esc(scene["formula"])}</div>
        <div class="card-grid-2">{cards_html}</div>
        """

    elif layout == "concept_svg":
        bullets_html = "".join(f"<li>{esc(b)}</li>" for b in scene["bullets"])
        body = f"""
        <div class="tag">{esc(scene["tag"])}</div>
        <div class="slide-title">{esc(scene["title"])}</div>
        <div class="formula-bar">{esc(scene["formula"])}</div>
        <div style="margin-bottom:18px;">{scene["svg"]}</div>
        <ul class="bullets">{bullets_html}</ul>
        """

    elif layout == "split_svg":
        bullets_html = "".join(f"<li>{esc(b)}</li>" for b in scene["bullets"])
        body = f"""
        <div class="tag">{esc(scene["tag"])}</div>
        <div class="slide-title">{esc(scene["title"])}</div>
        <div class="formula-bar">{esc(scene["formula"])}</div>
        <div class="split-row">
          <div class="svg-box">{scene["svg"]}</div>
          <ul class="bullets">{bullets_html}</ul>
        </div>
        """

    elif layout == "trap_compare":
        traps_html = "".join(
            f"""<div class="trap-card">
              <div class="trap-badge">⚠️ {esc(t['num'])}</div>
              <div class="trap-cols">
                <div class="trap-wrong"><strong>❌ 常見錯法：</strong>{esc(t['wrong'])}</div>
                <div class="trap-right"><strong>✅ 正確觀念：</strong>{esc(t['right'])}</div>
              </div>
              <div class="trap-tip">💡 {esc(t['tip'])}</div>
            </div>"""
            for t in scene["traps"]
        )
        body = f"""
        <div class="tag">{esc(scene["tag"])}</div>
        <div class="slide-title">{esc(scene["title"])}</div>
        <div class="trap-list">{traps_html}</div>
        """

    elif layout == "example":
        steps_html = "".join(
            f"""<div class="step-row">
              <div class="step-label">{esc(lbl)}</div>
              <div class="step-text">{esc(txt)}</div>
            </div>"""
            for lbl, txt in scene["steps"]
        )
        shortcut_html = (
            f'<div class="shortcut-box">⚡ {esc(scene["shortcut"])}</div>'
            if scene.get("shortcut")
            else ""
        )
        body = f"""
        <div class="tag">{esc(scene["tag"])}</div>
        <div class="slide-title">{esc(scene["title"])}</div>
        <div class="problem-box">{esc(scene["problem"])}</div>
        <div class="step-list">{steps_html}</div>
        {shortcut_html}
        """

    elif layout == "summary":
        rows = "".join(
            f"""<div class="summary-row">
              <div class="summary-k">{esc(k)}</div>
              <div class="summary-v">{esc(v)}</div>
            </div>"""
            for k, v in scene["cards"]
        )
        body = f"""
        <div class="tag">{esc(scene["tag"])}</div>
        <div class="slide-title">{esc(scene["title"])}</div>
        <div class="summary-grid">{rows}</div>
        """

    elif layout == "math_steps":
        # Progressive step-by-step math derivation board (eq_html allows .frac & highlight spans)
        rows = []
        active_idx = scene.get("active_step", len(scene["math_steps"]) - 1)
        for idx, (badge, eq_html, note) in enumerate(scene["math_steps"]):
            cls = "mstep active" if idx == active_idx else ("mstep done" if idx < active_idx else "mstep")
            rows.append(
                f"""<div class="{cls}">
                  <div class="mstep-badge">{esc(badge)}</div>
                  <div class="mstep-eq">{eq_html}</div>
                  <div class="mstep-note">{esc(note)}</div>
                </div>"""
            )
        formula_html = (
            f'<div class="formula-bar">{scene["formula_html"]}</div>'
            if scene.get("formula_html")
            else (f'<div class="formula-bar">{esc(scene["formula"])}</div>' if scene.get("formula") else "")
        )
        verify_html = (
            f'<div class="verify-bar">✅ {esc(scene["verify"])}</div>'
            if scene.get("verify")
            else ""
        )
        body = f"""
        <div class="tag">{esc(scene["tag"])}</div>
        <div class="slide-title">{esc(scene["title"])}</div>
        {formula_html}
        <div class="math-board">{''.join(rows)}</div>
        {verify_html}
        """

    elif layout == "outro":
        body = f"""
        <div class="outro-wrap">
          <div class="cover-badge">{esc(scene["tag"])}</div>
          <div class="cover-title" style="font-size:64px;">{esc(scene["title"])}</div>
          <div class="cover-sub" style="margin-bottom:10px;">{esc(scene["subtitle"])}</div>
          <div class="next-card">
            <div class="next-title">▶ {esc(scene["next_title"])}</div>
            <div class="next-desc">{esc(scene["next_desc"])}</div>
          </div>
        </div>
        """

    return f"""<!DOCTYPE html>
<html lang="zh-Hant">
<head>
<meta charset="utf-8" />
<style>{BASE_CSS}</style>
</head>
<body>
  <div class="bg-grid"></div>
  <div class="bg-glow"></div>
  {render_header(meta, scene["chapter_idx"])}
  <div class="stage">{body}</div>
</body>
</html>
"""


# ============================================================
# 2. Fast CDP Headless Edge Screenshotter (1920x1080)
# ============================================================

async def render_slides_via_cdp(html_files: list[tuple[pathlib.Path, pathlib.Path]], profile_dir: pathlib.Path):
    import socket
    browser = EDGE_EXE if os.path.exists(EDGE_EXE) else CHROME_EXE
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind(("127.0.0.1", 0))
        port = s.getsockname()[1]
    profile_dir.mkdir(parents=True, exist_ok=True)
    proc = subprocess.Popen(
        [
            browser,
            "--headless=new",
            "--disable-gpu",
            "--no-first-run",
            "--no-default-browser-check",
            "--disable-extensions",
            "--hide-scrollbars",
            f"--remote-debugging-port={port}",
            f"--user-data-dir={profile_dir}",
            "--window-size=1920,1080",
            "about:blank",
        ],
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )
    try:
        # Wait for DevTools JSON endpoint
        ws_url = None
        async with aiohttp.ClientSession() as session:
            for _ in range(40):
                try:
                    async with session.get(f"http://127.0.0.1:{port}/json") as resp:
                        targets = await resp.json()
                        for t in targets:
                            if t.get("type") == "page" and t.get("webSocketDebuggerUrl"):
                                ws_url = t["webSocketDebuggerUrl"]
                                break
                    if ws_url:
                        break
                except Exception:
                    await asyncio.sleep(0.25)

            if not ws_url:
                raise RuntimeError("Failed to connect to Headless Browser CDP")

            async with session.ws_connect(ws_url, max_msg_size=32 * 1024 * 1024) as ws:
                msg_id = 0

                async def cdp_call(method, params=None):
                    nonlocal msg_id
                    msg_id += 1
                    cid = msg_id
                    await ws.send_json({"id": cid, "method": method, "params": params or {}})
                    while True:
                        raw = await ws.receive_json()
                        if raw.get("id") == cid:
                            if "error" in raw:
                                raise RuntimeError(f"CDP error {method}: {raw['error']}")
                            return raw.get("result", {})

                await cdp_call("Page.enable")
                await cdp_call(
                    "Emulation.setDeviceMetricsOverride",
                    {"width": 1920, "height": 1080, "deviceScaleFactor": 1, "mobile": False},
                )

                for html_path, png_path in html_files:
                    if png_path.exists() and png_path.stat().st_size > 15_000 and png_path.stat().st_mtime >= html_path.stat().st_mtime:
                        continue
                    await cdp_call("Page.navigate", {"url": html_path.resolve().as_uri()})
                    await asyncio.sleep(0.06)
                    shot = await cdp_call("Page.captureScreenshot", {"format": "png"})
                    png_path.write_bytes(base64.b64decode(shot["data"]))
                    print(f"  [SLIDE] {png_path.name} ({png_path.stat().st_size // 1024} KB)")
    finally:
        proc.terminate()
        try:
            proc.wait(timeout=3)
        except Exception:
            proc.kill()


# ============================================================
# 3. TTS Generation + Exact Subtitle Chunking
# ============================================================

def split_caption_chunks(text: str, max_chars: int = 24) -> list[str]:
    """Split Traditional Chinese narration into crisp, natural single-line captions."""
    # First split on major/minor punctuation while keeping natural phrasing
    parts = re.split(r"([。！？；：，、])", text.strip())
    clauses = []
    buf = ""
    for p in parts:
        if not p:
            continue
        if p in "。！？；：，、":
            buf += p
            if buf.strip():
                clauses.append(buf.strip())
            buf = ""
        else:
            buf += p
    if buf.strip():
        clauses.append(buf.strip())

    # Merge tiny clauses or split overly long clauses so each caption is ~12-24 chars
    chunks = []
    cur = ""
    for cl in clauses:
        if len(cur) + len(cl) <= max_chars:
            cur += cl
        else:
            if cur:
                chunks.append(cur)
            if len(cl) <= max_chars:
                cur = cl
            else:
                # Hard wrap long clause evenly
                for i in range(0, len(cl), max_chars):
                    sub = cl[i : i + max_chars]
                    if len(sub) < max_chars:
                        cur = sub
                    else:
                        chunks.append(sub)
                        cur = ""
    if cur:
        chunks.append(cur)
    return chunks


def get_audio_duration(path: pathlib.Path) -> float:
    out = subprocess.check_output(
        [
            "ffprobe",
            "-v",
            "error",
            "-show_entries",
            "format=duration",
            "-of",
            "default=noprint_wrappers=1:nokey=1",
            str(path),
        ],
        text=True,
    ).strip()
    return float(out)


def polish_taiwan_tts(text: str) -> str:
    """
    Smooth out punctuation and brackets that trigger robotic AI pauses in Edge-TTS,
    keeping pure natural Taiwanese Mandarin prosody.
    """
    s = text.strip()
    # Replace pause-heavy colons/semicolons/brackets with natural flow
    s = re.sub(r"[（）\(\)\[\]【】「」『』《》]", "", s)
    s = s.replace("：", "，").replace("；", "，").replace("——", "，").replace("—", "，")
    s = s.replace("、", "跟" if False else "、")
    # Remove redundant spaces between Chinese characters & short tokens that cause micro-pauses
    s = re.sub(r"([\u4e00-\u9fff])\s+([A-Za-z0-9])", r"\1\2", s)
    s = re.sub(r"([A-Za-z0-9])\s+([\u4e00-\u9fff])", r"\1\2", s)
    s = re.sub(r"\s+", " ", s)
    s = re.sub(r"[，]{2,}", "，", s)
    s = re.sub(r"[，]([。！？])", r"\1", s)
    return s.strip()


async def generate_scene_tts(scene: dict, voice: str, rate: str, mp3_path: pathlib.Path, sem: asyncio.Semaphore | None = None) -> tuple[float, list[tuple[float, float, str]]]:
    display_text = scene["narration"]
    spoken_text = polish_taiwan_tts(display_text)
    raw_mp3 = mp3_path.with_suffix(".raw.mp3")
    # Reuse cached trimmed mp3 if already generated & non-empty
    if not (mp3_path.exists() and mp3_path.stat().st_size > 2000):
        for attempt in range(4):
            try:
                if sem:
                    async with sem:
                        comm = edge_tts.Communicate(spoken_text, voice=voice, rate=rate)
                        await comm.save(str(raw_mp3))
                else:
                    comm = edge_tts.Communicate(spoken_text, voice=voice, rate=rate)
                    await comm.save(str(raw_mp3))
                if raw_mp3.exists() and raw_mp3.stat().st_size > 2000:
                    break
            except Exception:
                if attempt == 3:
                    raise
                await asyncio.sleep(1.5 * (attempt + 1))

        # Trim robotic leading/trailing dead air & tighten unnatural >0.32s mid-sentence AI pauses
        trim_af = (
            "silenceremove=start_periods=1:start_silence=0.02:start_threshold=-42dB:"
            "stop_periods=-1:stop_duration=0.32:stop_threshold=-42dB,"
            "areverse,silenceremove=start_periods=1:start_silence=0.03:start_threshold=-42dB,areverse"
        )
        subprocess.run(
            ["ffmpeg", "-y", "-v", "error", "-i", str(raw_mp3), "-af", trim_af, "-c:a", "libmp3lame", "-b:a", "192k", str(mp3_path)],
            check=True,
        )
        raw_mp3.unlink(missing_ok=True)

    dur = get_audio_duration(mp3_path)

    # Build proportional caption timing across natural Chinese clauses (synced to trimmed audio!)
    chunks = split_caption_chunks(display_text, max_chars=24)
    weights = []
    for ch in chunks:
        w = len(ch)
        if ch.endswith(("。", "！", "？")):
            w += 2.2
        elif ch.endswith(("，", "；", "：", "、")):
            w += 1.0
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


# ============================================================
# 4. Soft Chapter Chime & Warm Studio Ambient Bed Synthesizer
# ============================================================

def create_chime_wav(wav_path: pathlib.Path, sample_rate: int = 48000):
    duration = 0.48
    n_samples = int(sample_rate * duration)
    freqs = [523.25, 659.25, 783.99, 1046.50]  # Warm C major 7-ish bell
    amps = [0.20, 0.14, 0.10, 0.06]
    with wave.open(str(wav_path), "w") as wf:
        wf.setnchannels(2)
        wf.setsampwidth(2)
        wf.setframerate(sample_rate)
        frames = bytearray()
        for i in range(n_samples):
            t = i / sample_rate
            attack = min(1.0, t / 0.015)
            decay = math.exp(-t * 7.2)
            env = attack * decay
            val = sum(a * math.sin(2.0 * math.pi * f * t) for f, a in zip(freqs, amps)) * env * 0.18
            sample = max(-32767, min(32767, int(val * 32767)))
            frames += struct.pack("<hh", sample, sample)
        wf.writeframes(frames)


def create_ambient_bed_loop(wav_path: pathlib.Path, sample_rate: int = 48000):
    """
    Create a warm, super subtle 16-second Rhodes-style ambient chord loop (Cmaj9 -> Am9 -> Fmaj9 -> G6)
    to eliminate sterile silence gaps and give a warm studio podcast feel under voiceover.
    """
    if wav_path.exists() and wav_path.stat().st_size > 100_000:
        return
    chords = [
        [261.63, 329.63, 392.00, 493.88, 587.33],  # Cmaj9
        [220.00, 261.63, 329.63, 392.00, 493.88],  # Am9
        [174.61, 220.00, 261.63, 329.63, 392.00],  # Fmaj9
        [196.00, 246.94, 293.66, 329.63, 392.00],  # G6
    ]
    bar_sec = 4.0
    total_sec = bar_sec * len(chords)
    n_samples = int(sample_rate * total_sec)
    bar_samples = int(sample_rate * bar_sec)
    with wave.open(str(wav_path), "w") as wf:
        wf.setnchannels(2)
        wf.setsampwidth(2)
        wf.setframerate(sample_rate)
        frames = bytearray()
        for i in range(n_samples):
            bar_idx = min(len(chords) - 1, i // bar_samples)
            local_t = (i % bar_samples) / sample_rate
            t = i / sample_rate
            # Smooth bell-like Rhodes swell inside each 4s bar
            attack = min(1.0, local_t / 0.45)
            release = min(1.0, (bar_sec - local_t) / 0.55)
            bar_env = (attack * release) ** 1.15
            notes = chords[bar_idx]
            val_l = 0.0
            val_r = 0.0
            for idx_n, f in enumerate(notes):
                w = 0.24 if idx_n == 0 else 0.16
                # Subtle stereo detune for warmth
                val_l += w * (math.sin(2.0 * math.pi * f * t) + 0.15 * math.sin(4.0 * math.pi * f * t))
                val_r += w * (math.sin(2.0 * math.pi * (f * 1.0012) * t) + 0.15 * math.sin(4.0 * math.pi * f * t))
            # Gentle overall gain (~ -30 dB when mixed)
            scale = bar_env * 0.022
            sl = max(-32767, min(32767, int(val_l * scale * 32767)))
            sr = max(-32767, min(32767, int(val_r * scale * 32767)))
            frames += struct.pack("<hh", sl, sr)
        wf.writeframes(frames)


# ============================================================
# 5. ASS & SRT Subtitle Writers
# ============================================================

def fmt_ass_time(sec: float) -> str:
    h = int(sec // 3600)
    m = int((sec % 3600) // 60)
    s = sec % 60
    return f"{h}:{m:02d}:{s:05.2f}"


def fmt_srt_time(sec: float) -> str:
    sec = max(0.0, sec)
    h = int(sec // 3600)
    m = int((sec % 3600) // 60)
    s = int(sec % 60)
    ms = int(round((sec - int(sec)) * 1000))
    if ms >= 1000:
        ms = 999
    return f"{h:02d}:{m:02d}:{s:02d},{ms:03d}"


def write_ass_subtitles(all_subs: list[tuple[float, float, str]], ass_path: pathlib.Path):
    header = """[Script Info]
ScriptType: v4.00+
PlayResX: 1920
PlayResY: 1080
WrapStyle: 2

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: Default,Noto Sans TC,46,&H00FFFFFF,&H0000FFFF,&H0020120B,&HA820120B,1,0,0,0,100,100,1.2,0,3,12,0,2,80,80,38,1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
"""
    lines = [header]
    for start, end, text in all_subs:
        safe = text.replace("{", "(").replace("}", ")")
        lines.append(f"Dialogue: 0,{fmt_ass_time(start)},{fmt_ass_time(end)},Default,,0,0,0,,{safe}\n")
    ass_path.write_text("".join(lines), encoding="utf-8")


def write_srt_subtitles(all_subs: list[tuple[float, float, str]], srt_path: pathlib.Path):
    lines = []
    for idx, (start, end, text) in enumerate(all_subs, 1):
        lines.append(f"{idx}\n{fmt_srt_time(start)} --> {fmt_srt_time(end)}\n{text.strip()}\n\n")
    srt_path.write_text("".join(lines), encoding="utf-8")


def ass_to_srt_file(ass_path: pathlib.Path, srt_path: pathlib.Path) -> int:
    """Convert an existing ASS subtitle file into a standard UTF-8 SRT file and return cue count."""
    subs: list[tuple[float, float, str]] = []
    for line in ass_path.read_text(encoding="utf-8").splitlines():
        if not line.startswith("Dialogue:"):
            continue
        parts = line.split(",", 9)
        if len(parts) < 10:
            continue
        def parse_t(ts: str) -> float:
            h, m, s = ts.strip().split(":")
            return int(h) * 3600 + int(m) * 60 + float(s)
        st = parse_t(parts[1])
        en = parse_t(parts[2])
        txt = parts[9].strip()
        if txt:
            subs.append((st, en, txt))
    write_srt_subtitles(subs, srt_path)
    return len(subs)


# ============================================================
# 6. Main Orchestrator
# ============================================================

async def build_from_data(meta: dict, scenes: list[dict], force_tts: bool = False):
    t0 = time.time()
    work_dir = ROOT / "tmp" / "video_build" / meta["id"]
    slides_dir = work_dir / "slides"
    audio_dir = work_dir / "audio"
    out_dir = pathlib.Path(meta.get("out_dir") or (ROOT / "output" / "videos"))
    for d in (slides_dir, audio_dir, out_dir):
        d.mkdir(parents=True, exist_ok=True)

    # Auto-load Arch learning-visual webp for this lesson slug
    subject_slug = meta.get("subject_slug", "math-c")
    arch_webp = ROOT / "apps" / "web" / "public" / "learning-visuals" / subject_slug / f"{meta['slug']}.webp"
    if not arch_webp.exists():
        arch_webp = ROOT / "apps" / "web" / "public" / "learning-visuals" / "math-c" / f"{meta['slug']}.webp"
    arch_uri = image_to_data_uri(arch_webp) if arch_webp.exists() else ""
    for s in scenes:
        if s["layout"] in ("cover", "split_arch") and not s.get("arch_image_uri") and arch_uri:
            s["arch_image_uri"] = arch_uri

    print(f"\n=== Building {meta['id']} {meta['title']} ({len(scenes)} scenes) ===")
    total_chars = sum(len(s["narration"]) for s in scenes)
    print(f"Total narration length: {total_chars} chars | Arch visual: {'YES' if arch_uri else 'NO'}")

    # Step 1: Write HTML files & Render 1080p PNG slides via CDP
    html_pairs = []
    for s in scenes:
        hp = slides_dir / f"scene_{s['id']}.html"
        pp = slides_dir / f"scene_{s['id']}.png"
        new_html = render_scene_html(meta, s)
        if not hp.exists() or hp.read_text(encoding="utf-8") != new_html:
            hp.write_text(new_html, encoding="utf-8")
        html_pairs.append((hp, pp))

    need_render = [pair for pair in html_pairs if not (pair[1].exists() and pair[1].stat().st_size > 15_000 and pair[1].stat().st_mtime >= pair[0].stat().st_mtime)]
    if need_render:
        print(f"[1/4] Rendering {len(need_render)}/{len(html_pairs)} 1080p HTML5+SVG slides via Headless Edge CDP...")
        await render_slides_via_cdp(need_render, work_dir / "edge_profile")
    else:
        print(f"[1/4] All {len(html_pairs)} 1080p slides cached.")

    # Step 2: Generate TTS audio concurrently (semaphore=10)
    print(f"[2/4] Generating natural Taiwan Mandarin TTS ({meta['voice']}, rate={meta['rate']})...")
    chime_wav = audio_dir / "chime.wav"
    if not chime_wav.exists():
        create_chime_wav(chime_wav)

    if force_tts:
        for f in audio_dir.glob("scene_*.mp3"):
            f.unlink(missing_ok=True)

    sem = asyncio.Semaphore(10)
    tts_tasks = [
        generate_scene_tts(s, meta["voice"], meta["rate"], audio_dir / f"scene_{s['id']}.mp3", sem)
        for s in scenes
    ]
    tts_results = await asyncio.gather(*tts_tasks)

    scene_timings = []
    all_subs = []
    cursor = 0.0
    audio_concat_list = []

    for idx, (s, (dur, local_subs)) in enumerate(zip(scenes, tts_results)):
        mp3_path = audio_dir / f"scene_{s['id']}.mp3"
        lead_pad = 0.16 if s.get("chime") else 0.06
        tail_pad = 0.36 if (idx + 1 < len(scenes) and scenes[idx + 1].get("chime")) else 0.22
        if idx == len(scenes) - 1:
            tail_pad = 0.85

        seg_wav = audio_dir / f"seg_{s['id']}.wav"
        delay_ms = int(lead_pad * 1000)
        if not (seg_wav.exists() and seg_wav.stat().st_size > 4000 and seg_wav.stat().st_mtime >= mp3_path.stat().st_mtime):
            if s.get("chime"):
                filter_complex = (
                    f"[0:a]aresample=48000,aformat=channel_layouts=stereo,adelay={delay_ms}|{delay_ms},"
                    f"apad=pad_dur={tail_pad:.3f}[voice];"
                    f"[1:a]aresample=48000,aformat=channel_layouts=stereo[chime];"
                    f"[voice][chime]amix=inputs=2:duration=first:normalize=0[out]"
                )
                subprocess.run(
                    [
                        "ffmpeg", "-y", "-v", "error",
                        "-i", str(mp3_path), "-i", str(chime_wav),
                        "-filter_complex", filter_complex, "-map", "[out]",
                        "-ar", "48000", "-ac", "2", str(seg_wav),
                    ],
                    check=True,
                )
            else:
                af = f"aresample=48000,aformat=channel_layouts=stereo,adelay={delay_ms}|{delay_ms},apad=pad_dur={tail_pad:.3f}"
                subprocess.run(
                    [
                        "ffmpeg", "-y", "-v", "error",
                        "-i", str(mp3_path), "-af", af,
                        "-ar", "48000", "-ac", "2", str(seg_wav),
                    ],
                    check=True,
                )

        seg_dur = dur + lead_pad + tail_pad
        for st, en, txt in local_subs:
            all_subs.append((cursor + lead_pad + st, cursor + lead_pad + en, txt))

        scene_timings.append((slides_dir / f"scene_{s['id']}.png", seg_dur))
        audio_concat_list.append(seg_wav)
        cursor += seg_dur

    # Step 3: Concatenate, loudnorm (-16 LUFS), and blend subtle warm studio bed (-30 dB)
    print(f"[3/4] Mastering smooth broadcast audio (-16 LUFS + warm studio bed) & ASS/SRT subtitles ({cursor:.1f}s / {cursor/60:.2f} min)...")
    audio_list_txt = work_dir / "audio_concat.txt"
    audio_list_txt.write_text(
        "".join(f"file '{p.resolve().as_posix()}'\n" for p in audio_concat_list),
        encoding="utf-8",
    )
    raw_master_wav = work_dir / "master_raw.wav"
    voice_norm_wav = work_dir / "master_voice_norm.wav"
    norm_master_wav = work_dir / "master_norm.wav"
    bed_loop_wav = ROOT / "tmp" / "video_build" / "studio_ambient_bed.wav"
    create_ambient_bed_loop(bed_loop_wav)

    subprocess.run(
        ["ffmpeg", "-y", "-v", "error", "-f", "concat", "-safe", "0", "-i", str(audio_list_txt), "-c", "copy", str(raw_master_wav)],
        check=True,
    )
    subprocess.run(
        [
            "ffmpeg", "-y", "-v", "error", "-i", str(raw_master_wav),
            "-af", "highpass=f=75,equalizer=f=3200:t=q:w=1.2:g=1.5,loudnorm=I=-16:TP=-1.5:LRA=10",
            "-ar", "48000", "-ac", "2", str(voice_norm_wav),
        ],
        check=True,
    )
    fade_out_st = max(1.0, cursor - 2.0)
    subprocess.run(
        [
            "ffmpeg", "-y", "-v", "error",
            "-i", str(voice_norm_wav),
            "-stream_loop", "-1", "-i", str(bed_loop_wav),
            "-filter_complex",
            f"[1:a]atrim=0:{cursor:.3f},afade=t=in:st=0:d=1.2,afade=t=out:st={fade_out_st:.3f}:d=1.8[bed];"
            f"[0:a][bed]amix=inputs=2:duration=first:normalize=0[out]",
            "-map", "[out]", "-ar", "48000", "-ac", "2", str(norm_master_wav),
        ],
        check=True,
    )

    ass_path = work_dir / "subtitles.ass"
    srt_path = work_dir / "subtitles.srt"
    write_ass_subtitles(all_subs, ass_path)
    write_srt_subtitles(all_subs, srt_path)

    # Also copy sidecar .srt and .ass next to the output MP4!
    out_mp4 = out_dir / meta["output_name"]
    out_srt = out_mp4.with_suffix(".srt")
    out_ass = out_mp4.with_suffix(".ass")
    shutil.copy2(srt_path, out_srt)
    shutil.copy2(ass_path, out_ass)

    # Step 4: Assemble final 1080p MP4 with burned-in ASS subtitles AND embedded mov_text soft subtitle track
    print("[4/4] Encoding final 1080p MP4 (with burned-in ASS + embedded soft SRT track)...")
    video_list_txt = work_dir / "video_concat.txt"
    vlines = []
    for png_p, dur in scene_timings:
        vlines.append(f"file '{png_p.resolve().as_posix()}'\n")
        vlines.append(f"duration {dur:.4f}\n")
    vlines.append(f"file '{scene_timings[-1][0].resolve().as_posix()}'\n")
    video_list_txt.write_text("".join(vlines), encoding="utf-8")

    ass_escaped = ass_path.resolve().as_posix().replace(":", r"\:")

    subprocess.run(
        [
            "ffmpeg", "-y", "-v", "warning",
            "-f", "concat", "-safe", "0", "-i", str(video_list_txt),
            "-i", str(norm_master_wav),
            "-i", str(srt_path),
            "-vf", f"fps=12,scale=1920:1080,ass='{ass_escaped}'",
            "-c:v", "libx264", "-preset", "ultrafast", "-tune", "stillimage", "-crf", "22", "-pix_fmt", "yuv420p",
            "-c:a", "aac", "-b:a", "192k",
            "-c:s", "mov_text", "-metadata:s:s:0", "language=zho", "-metadata:s:s:0", "title=繁體中文",
            "-shortest", "-movflags", "+faststart",
            str(out_mp4),
        ],
        check=True,
    )

    final_dur = get_audio_duration(out_mp4)
    size_mb = out_mp4.stat().st_size / (1024 * 1024)
    print(f"DONE! {out_mp4.name} (+ .srt/{len(all_subs)} cues) | {int(final_dur // 60)}m {final_dur % 60:04.1f}s | {size_mb:.2f} MB | {time.time() - t0:.1f}s")
    return {
        "file": str(out_mp4),
        "srt_file": str(out_srt),
        "ass_file": str(out_ass),
        "subtitle_cues": len(all_subs),
        "duration": final_dur,
        "size_mb": size_mb,
    }


async def build_lesson(module_name: str):
    mod = importlib.import_module(f"lessons.{module_name}")
    return await build_from_data(mod.LESSON_META, mod.SCENES)


if __name__ == "__main__":
    mod_name = sys.argv[1] if len(sys.argv) > 1 else "mc01_functions_graphs"
    asyncio.run(build_lesson(mod_name))
