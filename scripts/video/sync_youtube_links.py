# -*- coding: utf-8 -*-
"""
Sync uploaded YouTube video links into apps/web/src/data/youtubeUploadedLinks.json.

Guarantees:
  - ONLY lightweight JSON metadata (YouTube videoId, url, title, duration, playlistUrl)
    is written into apps/web/src/data/youtubeUploadedLinks.json.
  - ZERO video binaries (.mp4), subtitles (.srt/.ass), or local generation artifacts
    are ever copied into apps/web/ or GitHub Pages outputs.

Usage:
  # Add/update a single uploaded video:
  python scripts/video/sync_youtube_links.py --add MECH01 https://youtu.be/XXXXXXXXXXX --duration "10:12"

  # Update playlist ID/URL (e.g., if verified full 34-char PL... ID):
  python scripts/video/sync_youtube_links.py --playlist PLxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

  # Merge from tmp/youtube_uploaded_map.json:
  python scripts/video/sync_youtube_links.py --merge tmp/youtube_uploaded_map.json

  # Show upload coverage summary:
  python scripts/video/sync_youtube_links.py --status
"""

import argparse
import datetime
import json
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parents[2]
WEB_LINKS_PATH = ROOT / "apps" / "web" / "src" / "data" / "youtubeUploadedLinks.json"
VOCATIONAL_DIR = ROOT / "output" / "videos-高工"

YT_ID_RE = re.compile(
    r"(?:youtu\.be/|youtube\.com/(?:watch\?v=|embed/|shorts/|live/))([A-Za-z0-9_-]{11})"
)
PL_ID_RE = re.compile(r"(?:list=)?(PL[A-Za-z0-9_-]{10,})")


def extract_video_id(url_or_id: str) -> str:
    s = url_or_id.strip()
    if re.fullmatch(r"[A-Za-z0-9_-]{11}", s):
        return s
    m = YT_ID_RE.search(s)
    if not m:
        raise ValueError(f"Cannot extract 11-char YouTube videoId from: {url_or_id}")
    return m.group(1)


def load_links() -> dict:
    if WEB_LINKS_PATH.exists():
        return json.loads(WEB_LINKS_PATH.read_text(encoding="utf-8"))
    return {
        "playlistId": "PLOgJHtX1BDaQ",
        "playlistUrl": "https://www.youtube.com/playlist?list=PLOgJHtX1BDaQ",
        "playlistTitle": "高工建築科 108 課綱 × 13 科統測全系列教學影片",
        "visibility": "public",
        "madeForKids": False,
        "updatedAt": datetime.datetime.now().astimezone().isoformat(timespec="seconds"),
        "videos": {},
    }


def save_links(data: dict) -> None:
    data["updatedAt"] = datetime.datetime.now().astimezone().isoformat(timespec="seconds")
    WEB_LINKS_PATH.write_text(
        json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--playlist", help="Update playlist ID or full playlist URL")
    ap.add_argument("--playlist-title", help="Update playlist display title")
    ap.add_argument("--add", nargs=2, metavar=("EP_CODE", "URL_OR_ID"), help="Add one episode")
    ap.add_argument("--title", help="Optional video title when using --add")
    ap.add_argument("--duration", help="Optional duration label (e.g. 10:15) when using --add")
    ap.add_argument("--merge", help="Merge a JSON map {EP_CODE: url_or_record}")
    ap.add_argument("--status", action="store_true", help="Print upload coverage summary")
    args = ap.parse_args()

    data = load_links()
    changed = False

    if args.playlist:
        m = PL_ID_RE.search(args.playlist.strip())
        if not m:
            raise ValueError(f"Invalid playlist ID/URL: {args.playlist}")
        pid = m.group(1)
        data["playlistId"] = pid
        data["playlistUrl"] = f"https://www.youtube.com/playlist?list={pid}"
        changed = True

    if args.playlist_title:
        data["playlistTitle"] = args.playlist_title.strip()
        changed = True

    if args.add:
        ep_code, url_or_id = args.add
        ep_code = ep_code.strip().upper()
        vid = extract_video_id(url_or_id)
        rec = {
            "videoId": vid,
            "url": f"https://youtu.be/{vid}",
            "uploadedAt": datetime.datetime.now().astimezone().isoformat(timespec="seconds"),
        }
        if args.title:
            rec["title"] = args.title.strip()
        if args.duration:
            rec["duration"] = args.duration.strip()
        data.setdefault("videos", {})[ep_code] = rec
        changed = True

    if args.merge:
        merge_path = pathlib.Path(args.merge)
        incoming = json.loads(merge_path.read_text(encoding="utf-8"))
        if isinstance(incoming, dict) and "videos" in incoming and isinstance(incoming["videos"], dict):
            if incoming.get("playlistId"):
                data["playlistId"] = incoming["playlistId"]
                data["playlistUrl"] = f"https://www.youtube.com/playlist?list={incoming['playlistId']}"
            incoming = incoming["videos"]
        for ep_code, val in incoming.items():
            code = ep_code.strip().upper()
            if isinstance(val, str):
                vid = extract_video_id(val)
                rec = {
                    "videoId": vid,
                    "url": f"https://youtu.be/{vid}",
                    "uploadedAt": datetime.datetime.now().astimezone().isoformat(timespec="seconds"),
                }
            elif isinstance(val, dict):
                vid = extract_video_id(val.get("videoId") or val.get("url") or "")
                rec = {
                    "videoId": vid,
                    "url": f"https://youtu.be/{vid}",
                    "uploadedAt": val.get("uploadedAt")
                    or datetime.datetime.now().astimezone().isoformat(timespec="seconds"),
                }
                if val.get("title"):
                    rec["title"] = val["title"]
                if val.get("duration"):
                    rec["duration"] = val["duration"]
            else:
                continue
            data.setdefault("videos", {})[code] = rec
            changed = True

    if changed:
        save_links(data)
        print(f"Saved {len(data.get('videos', {}))} uploaded links to {WEB_LINKS_PATH}")

    if args.status or not changed:
        mp4s = sorted(VOCATIONAL_DIR.glob("*.mp4")) if VOCATIONAL_DIR.exists() else []
        all_codes = [p.stem.split("-", 1)[0] for p in mp4s]
        uploaded = set(data.get("videos", {}).keys())
        print(f"Playlist: {data.get('playlistUrl')}")
        print(f"Uploaded: {len(uploaded & set(all_codes))} / {len(all_codes)} episodes")
        missing = [c for c in all_codes if c not in uploaded]
        if missing:
            print(f"Remaining ({len(missing)}): {', '.join(missing[:20])}" + (" ..." if len(missing) > 20 else ""))


if __name__ == "__main__":
    main()
