# -*- coding: utf-8 -*-
"""
Read the public YouTube playlist and write each episode's link into the site.

Workflow: upload a video to YouTube by hand, add it to the playlist, then run
this script. Every video whose title starts with its episode code (for example
"MECH01 力的基本概念") is linked to that episode on /videos and its topic page.

Usage:
  python scripts/video/sync_youtube_links.py            # dry run: show what would change
  python scripts/video/sync_youtube_links.py --write    # write youtubeUploadedLinks.json
  python scripts/video/sync_youtube_links.py --write --prune
      # also unlink episodes whose video is no longer in the playlist

Only video IDs, titles and durations are written; no media files are touched.
Needs only the Python standard library and internet access.
"""

import argparse
import datetime
import json
import pathlib
import re
import sys
import urllib.request

ROOT = pathlib.Path(__file__).resolve().parents[2]
LINKS_PATH = ROOT / "apps" / "web" / "src" / "data" / "youtubeUploadedLinks.json"

CODE_RE = re.compile(r"^\s*([A-Z]{2,5}\d{2})\b")
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0 Safari/537.36"
HEADERS = {"User-Agent": UA, "Accept-Language": "zh-TW,zh;q=0.9", "Cookie": "CONSENT=YES+1"}


def _get(url: str) -> str:
    req = urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read().decode("utf-8")


def _post(url: str, body: dict) -> dict:
    req = urllib.request.Request(
        url,
        data=json.dumps(body).encode("utf-8"),
        headers={**HEADERS, "Content-Type": "application/json"},
    )
    with urllib.request.urlopen(req, timeout=30) as r:
        return json.loads(r.read().decode("utf-8"))


def _text(node) -> str:
    if not isinstance(node, dict):
        return ""
    if "simpleText" in node:
        return node["simpleText"]
    if "runs" in node:
        return "".join(run.get("text", "") for run in node["runs"])
    if "content" in node:
        return node["content"]
    return ""


def _walk(node, videos: list, tokens: list) -> None:
    """Collect playlist videos and continuation tokens from any YouTube response shape."""
    if isinstance(node, dict):
        pvr = node.get("playlistVideoRenderer")
        if isinstance(pvr, dict) and pvr.get("videoId"):
            videos.append(
                {
                    "videoId": pvr["videoId"],
                    "title": _text(pvr.get("title")),
                    "seconds": int(pvr["lengthSeconds"]) if str(pvr.get("lengthSeconds", "")).isdigit() else None,
                }
            )
            return
        lvm = node.get("lockupViewModel")  # playlist layout YouTube uses since 2025
        if isinstance(lvm, dict) and lvm.get("contentType") == "LOCKUP_CONTENT_TYPE_VIDEO" and lvm.get("contentId"):
            title = _text(lvm.get("metadata", {}).get("lockupMetadataViewModel", {}).get("title"))
            badge = re.search(r'"text":\s*"(?:(\d+):)?(\d+):(\d\d)"', json.dumps(lvm.get("contentImage", {})))
            seconds = None
            if badge:
                h, m, s = badge.groups()
                seconds = int(h or 0) * 3600 + int(m) * 60 + int(s)
            videos.append({"videoId": lvm["contentId"], "title": title, "seconds": seconds})
            return
        cmd = node.get("continuationCommand")
        if isinstance(cmd, dict) and cmd.get("token"):
            tokens.append(cmd["token"])
        for value in node.values():
            _walk(value, videos, tokens)
    elif isinstance(node, list):
        for value in node:
            _walk(value, videos, tokens)


def fetch_playlist(playlist_id: str) -> tuple[list[dict], int | None]:
    html = _get(f"https://www.youtube.com/playlist?list={playlist_id}")
    m = re.search(r"var ytInitialData\s*=\s*(\{.*?\});</script>", html, re.S)
    if not m:
        raise RuntimeError("Could not find playlist data on the YouTube page (is the playlist public?)")
    data = json.loads(m.group(1))
    key = re.search(r'"INNERTUBE_API_KEY":"([^"]+)"', html)
    ver = re.search(r'"INNERTUBE_CLIENT_VERSION":"([^"]+)"', html)

    count = None
    cm = re.search(r'"numVideosText":\{"runs":\[\{"text":"([\d,]+)"', html) or re.search(
        r'"text":"([\d,]+)"\},\{"text":" (?:videos|部影片)"', html
    )
    if cm:
        count = int(cm.group(1).replace(",", ""))

    videos: list[dict] = []
    tokens: list[str] = []
    _walk(data, videos, tokens)
    seen_tokens = set()
    while tokens and key and ver:
        token = tokens.pop(0)
        if token in seen_tokens:
            continue
        seen_tokens.add(token)
        resp = _post(
            f"https://www.youtube.com/youtubei/v1/browse?key={key.group(1)}",
            {"context": {"client": {"clientName": "WEB", "clientVersion": ver.group(1), "hl": "zh-TW"}}, "continuation": token},
        )
        _walk(resp, videos, tokens)

    unique = {v["videoId"]: v for v in videos}
    return list(unique.values()), count


def fmt_duration(seconds: int | None) -> str | None:
    if not seconds:
        return None
    h, rem = divmod(seconds, 3600)
    m, s = divmod(rem, 60)
    return f"{h}:{m:02d}:{s:02d}" if h else f"{m}:{s:02d}"


def to_seconds(label: str | None) -> int | None:
    if not label or not re.fullmatch(r"\d+(:\d\d){1,2}", label):
        return None
    total = 0
    for part in label.split(":"):
        total = total * 60 + int(part)
    return total


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--write", action="store_true", help="write the changes (default is a dry run)")
    ap.add_argument("--prune", action="store_true", help="unlink episodes whose video left the playlist")
    args = ap.parse_args()

    links = json.loads(LINKS_PATH.read_text(encoding="utf-8"))
    current: dict = links.get("videos", {})
    playlist_id = links["playlistId"]

    videos, expected = fetch_playlist(playlist_id)
    print(f"Playlist {playlist_id}: read {len(videos)} videos" + (f" (YouTube reports {expected})" if expected else ""))
    complete = expected is None or len(videos) >= expected
    if not complete:
        print("WARNING: did not read the whole playlist; nothing will be unlinked this run.")

    found: dict[str, dict] = {}
    no_code, dup = [], []
    for v in videos:
        m = CODE_RE.match(v["title"])
        if not m:
            no_code.append(v["title"])
            continue
        code = m.group(1)
        if code in found:
            dup.append(code)
            continue
        found[code] = v

    now = datetime.datetime.now().astimezone().isoformat(timespec="seconds")
    new_videos: dict = {}
    added, changed = [], []
    for code, v in sorted(found.items()):
        old = current.get(code, {})
        rec = {
            "videoId": v["videoId"],
            "url": f"https://youtu.be/{v['videoId']}",
            "uploadedAt": old.get("uploadedAt") if old.get("videoId") == v["videoId"] else now,
            "title": v["title"],
        }
        dur = fmt_duration(v["seconds"]) or old.get("duration")
        old_secs = to_seconds(old.get("duration"))
        if v["seconds"] and old_secs is not None and abs(v["seconds"] - old_secs) <= 2:
            dur = old["duration"]  # ignore rounding differences between encoder and YouTube
        if dur:
            rec["duration"] = dur
        if not old:
            added.append(code)
        elif {k: old.get(k) for k in ("videoId", "title", "duration")} != {k: rec.get(k) for k in ("videoId", "title", "duration")}:
            changed.append(code)
        new_videos[code] = rec

    gone = sorted(set(current) - set(found))
    kept = []
    for code in gone:
        if args.prune and complete:
            continue
        new_videos[code] = current[code]
        kept.append(code)

    removed = [c for c in gone if c not in kept]
    print(f"Linked: {len(new_videos)}  new: {len(added)}  changed: {len(changed)}  unlinked: {len(removed)}")
    for label, items in (("New", added), ("Changed", changed), ("Unlinked", removed)):
        if items:
            print(f"  {label}: {', '.join(items)}")
    if kept:
        print(f"  Not in playlist (kept; use --prune to unlink): {', '.join(kept)}")
    if no_code:
        print("  Skipped (title does not start with an episode code such as MECH01):")
        for t in no_code:
            print(f"    - {t}")
    if dup:
        print(f"  Skipped duplicates (first one kept): {', '.join(dup)}")

    if not (added or changed or removed):
        print("Site links already match the playlist.")
        return 0
    if not args.write:
        print("Dry run only. Re-run with --write to update the site data.")
        return 0

    links["videos"] = dict(sorted(new_videos.items()))
    links["updatedAt"] = now
    LINKS_PATH.write_text(json.dumps(links, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {LINKS_PATH.relative_to(ROOT)}. Commit and push it to update GitHub Pages.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
