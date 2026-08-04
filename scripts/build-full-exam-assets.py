"""Build one-question-at-a-time OCR/text data and figure crops from TCTE PDFs."""

from __future__ import annotations

import base64
import json
import os
import re
import unicodedata
from pathlib import Path

import pdfplumber


ROOT = Path(__file__).resolve().parents[1]
PDF_DIR = ROOT / "tmp" / "pdfs"
FIGURE_DIR = ROOT / "apps" / "web" / "public" / "exams" / "figures"
DATA_DIR = ROOT / "data" / "registry"
YEARS = range(111, 116)
SUBJECTS = {
    "chinese": {"file": "c", "name": "國文", "count": 38, "topic": "國文綜合能力"},
    "english": {"file": "e", "name": "英文", "count": 42, "topic": "英文綜合能力"},
    "math-c": {"file": "mc", "name": "數學(C)", "count": 25, "topic": "數學(C)綜合能力"},
}
QUESTION_START = re.compile(r"(?m)^\s*(\d{1,2})(?:[.．]\s*|\s+(?=\(A\)))")
GROUP_RANGE = re.compile(
    r"(?m)^[ \t]*[▲△][\s\S]{0,180}?(?:回答第|為第|第)\s*(\d{1,2})\s*(?:至|-|~|～)\s*(\d{1,2})\s*題"
)
FIGURE_WORDS = re.compile(
    r"如圖|右圖|左圖|上圖|下圖|圖\s*[（(]|圖表|附圖|示意圖|line graph|bar graph|chart|diagram|map\b|picture\b",
    re.IGNORECASE,
)
OCR_PASSAGE_OVERRIDES = {
    ("111-4y-00-e.pdf", 33, 34): """Karano High School Video Competition

Competition Rules

ENTRY GUIDELINES
1. General
• Participation is open only to students who are now studying in Karano High School.
• Only one video is allowed per student/team.
• Submit your video by September 30th, 2022.

2. Video Production
• Videos must be one minute in length.
• Videos must be original; use of material must be permitted by law.

3. Content
• Must address the theme, “Karano High School - A Special Place!” describing what you love about this school and what it is like to be a student here.
• Must be suitable for all audiences.

JUDGING CRITERIA
Judges will give points based on creativity, production quality, and how well the theme is presented.

PRIZES
Results will be announced on December 1st, 2022 during the School Anniversary Celebration, and three cash prizes totaling NT$10,000 will be awarded.""",
    ("111-4y-00-e.pdf", 35, 37): """To: Molly
From: Jim <jim888@gmailer.com>
Subject: My volunteer trip
16th, July Sat. 12:55 P.M.

Hi Molly,

We arrived in Cuzco last Friday. Can you imagine? This city sits at 3,400 meters above sea level and has a population of 350,000. It’s near the Andes Mountains, and about three hours by train to Machu Picchu. At the end of the four-week volunteer trip, we’re going to visit Machu Picchu. I can’t wait to see the mysterious Inca city!

Here, we all stay with local families. My host family is wonderful. I eat meals with them and speak Spanish with them. I also help them around the house. From Monday to Saturday, we go to a local school to work with the teachers and help them with anything they need. We teach English, and help with art, music, and sports. Also, we help repair the school, such as putting in new windows and painting the classrooms. I feel exhausted sometimes. However, when I see the children’s happy faces, I know that I have made the right decision. How’s your trip?

Jim

To: Jim <jim888@gmailer.com>
From: Molly
Subject: Re: My volunteer trip
17th, July Sun. 10:00 A.M.

Hi Jim,

It’s good to hear that you enjoy what you are doing there. I was worried that you wouldn’t get used to the weather and the hard work in Cuzco. My art trip starts from Louvre museum, Paris. We are now here to see the art display of Leonardo da Vinci, an Italian artist. His paintings are great. Tomorrow, we’ll leave for the British Museum in London. Talk to you then. BTW, don’t forget to share pictures of Machu Picchu. Take care!

Molly""",
}
_PDF_CACHE: dict[str, pdfplumber.PDF] = {}
_PAGE_IMAGE_CACHE: dict[tuple[str, int], object] = {}


def normalize(text: str) -> str:
    symbol_map = str.maketrans({"\uf02d": "−", "\uf02b": "+", "\uf03d": "=", "\uf03c": "<", "\uf03e": ">", "\uf0b0": "°"})
    return unicodedata.normalize("NFKC", text).translate(symbol_map).replace("\u00ad", "").replace("ˉ", "")


def official_url(year: int, filename: str) -> str:
    encoded = base64.b64encode(filename.encode("utf-8")).decode("ascii")
    return f"https://web1.tcte.edu.tw/EXAM/{year}_4y/downloader.php?obj={encoded}"


def extract_answers(pdf_path: Path, expected: int) -> dict[int, str]:
    with pdfplumber.open(pdf_path) as pdf:
        text = normalize("\n".join(page.extract_text() or "" for page in pdf.pages))
    answers: dict[int, str] = {}
    for match in re.finditer(r"\b(\d{1,2})\s+([ABCD]{1,2}|送分)(?=\s|$)", text):
        number = int(match.group(1))
        if 1 <= number <= expected:
            answers[number] = match.group(2)
    missing = sorted(set(range(1, expected + 1)) - answers.keys())
    if missing:
        raise RuntimeError(f"{pdf_path.name}: missing answers {missing}")
    return answers


def question_pages(pdf_path: Path, expected: int) -> dict[int, int]:
    candidates: dict[int, list[int]] = {number: [] for number in range(1, expected + 1)}
    with pdfplumber.open(pdf_path) as pdf:
        for page_number, page in enumerate(pdf.pages, 1):
            if page_number == 1:
                continue
            text = normalize(page.extract_text() or "")
            for match in QUESTION_START.finditer(text):
                number = int(match.group(1))
                nearby = text[match.end() : match.end() + 2200]
                if 1 <= number <= expected and re.search(r"\([ABCD]\)", nearby):
                    candidates[number].append(page_number)

    pages: dict[int, int | None] = {}
    previous = 2
    for number in range(1, expected + 1):
        valid = [page for page in candidates[number] if page >= previous]
        pages[number] = min(valid) if valid else None
        if pages[number] is not None:
            previous = int(pages[number])
    next_page: int | None = None
    for number in range(expected, 0, -1):
        if pages[number] is None:
            pages[number] = next_page
        else:
            next_page = int(pages[number])
    previous = 2
    for number in range(1, expected + 1):
        pages[number] = int(pages[number] or previous)
        previous = int(pages[number])
    return {number: int(page) for number, page in pages.items()}


def clean_piece(text: str) -> str:
    lines = []
    for line in normalize(text).splitlines():
        stripped = re.sub(r"\s+", " ", line).strip()
        if not stripped:
            continue
        if stripped == "公告試題僅供參考" or re.fullmatch(r"- ?\d+ ?-", stripped):
            continue
        if re.search(r"(?:第\d+頁|共\s*\d+頁).*共同科目", stripped):
            continue
        if re.search(r"\d+年四技.*(?:第\d+頁|共同科目)", stripped):
            continue
        if stripped.startswith("=== PAGE"):
            continue
        lines.append(stripped)
    return "\n".join(lines).strip()


PAGE_CHROME = re.compile(
    r"\s*(?:(?:國文|英文)\s*共同科目\s*共\s*12\s*頁"
    r"|第\s*\d+\s*頁\s*\d{3}\s*年四技"
    r"|\d{3}\s*年四技\s*(?:國文|英文|數學)?\s*共同科目\s*共\s*12\s*頁"
    r"|【以下空白】|公告試題僅供參考)"
)

OPTION_TAIL = re.compile(
    r"\s*(?:(?:國文|英文)\s*共同科目\s*共\s*12\s*頁"
    r"|第\s*\d+\s*頁\s*\d{3}\s*年四技"
    r"|\d{3}\s*年四技\s*(?:國文|英文|數學)?\s*共同科目\s*共\s*12\s*頁"
    r"|【以下空白】|公告試題僅供參考"
    r"|二、\s*(?:非選擇題|寫作測驗)"
    r"|(?:II|III)\.\s*(?:對話題|綜合測驗))"
)


def remove_page_chrome(text: str) -> str:
    """Remove printed headers/footers without discarding following passage lines."""
    cleaned_lines = []
    for line in text.splitlines():
        cleaned_lines.append(PAGE_CHROME.split(line, maxsplit=1)[0].rstrip())
    return "\n".join(line for line in cleaned_lines if line.strip()).strip()


def clean_option_tail(text: str) -> str:
    """Stop an option before page chrome or the next non-multiple-choice section."""
    return OPTION_TAIL.split(re.sub(r"\s+", " ", text).strip(), maxsplit=1)[0].strip()


def strip_group_instruction(context: str) -> tuple[str, str]:
    lines = clean_piece(context).splitlines()
    title_lines: list[str] = []
    passage_lines: list[str] = []
    instruction_done = False
    for line in lines:
        if not instruction_done and (
            line.startswith(("▲", "△", "II.", "III.", "IV.", "V."))
            or re.search(r"(?:回答第|為第|第)\s*\d+\s*(?:至|-|~|～)\s*\d+\s*題", line)
            or re.search(r"(?:空格|題目)的答案", line)
        ):
            title_lines.append(line.lstrip("▲△ "))
            continue
        instruction_done = True
        passage_lines.append(line)
    title = " ".join(title_lines) or "閱讀題組"
    passage = "\n".join(passage_lines).strip()
    return title, passage


def find_starts(body: str, expected: int) -> dict[int, int]:
    candidates: dict[int, list[int]] = {number: [] for number in range(1, expected + 1)}
    matches = list(QUESTION_START.finditer(body))
    positions_by_number: dict[int, list[int]] = {}
    for item in matches:
        positions_by_number.setdefault(int(item.group(1)), []).append(item.start())
    for match in matches:
        number = int(match.group(1))
        following = [position for position in positions_by_number.get(number + 1, []) if position > match.start()]
        next_start = min(following) if following else min(len(body), match.end() + 6000)
        block = body[match.end() : next_start]
        option_keys = {item.group(1) for item in re.finditer(r"\(([ABCD])\)", block)}
        if 1 <= number <= expected and option_keys == set("ABCD"):
            candidates[number].append(match.start())
    starts: dict[int, int] = {}
    previous = -1
    for number in range(1, expected + 1):
        valid = [position for position in candidates[number] if position > previous]
        if not valid:
            raise RuntimeError(f"question text missing for number {number}")
        starts[number] = min(valid)
        previous = starts[number]
    return starts


def extract_common_text(pdf_path: Path, expected: int) -> tuple[dict[int, dict], list[dict]]:
    with pdfplumber.open(pdf_path) as pdf:
        page_texts = [normalize(page.extract_text() or "") for page in pdf.pages[1:]]
    body = "\n".join(f"\n=== PAGE {index + 2} ===\n{text}" for index, text in enumerate(page_texts))
    starts = find_starts(body, expected)
    page_markers = [(match.start(), int(match.group(1))) for match in re.finditer(r"=== PAGE (\d+) ===", body)]
    end_of_body = len(body)

    groups: list[dict] = []
    for match in GROUP_RANGE.finditer(body):
        first, last = int(match.group(1)), int(match.group(2))
        if not (1 <= first < last <= expected) or match.start() >= starts[first]:
            continue
        previous_start = starts.get(first - 1, -1)
        if match.start() < previous_start:
            continue
        raw_context = body[match.start() : starts[first]]
        title, passage = strip_group_instruction(raw_context)
        passage = remove_page_chrome(OCR_PASSAGE_OVERRIDES.get((pdf_path.name, first, last), passage))
        if not passage:
            continue
        groups.append(
            {
                "first": first,
                "last": last,
                "start": match.start(),
                "title": title,
                "passage": passage,
            }
        )

    # Prefer the most specific range when broad section and article ranges overlap.
    selected_group: dict[int, dict] = {}
    for group in sorted(groups, key=lambda item: (item["last"] - item["first"], -item["start"])):
        for number in range(group["first"], group["last"] + 1):
            selected_group.setdefault(number, group)

    records: dict[int, dict] = {}
    for number in range(1, expected + 1):
        end = starts.get(number + 1, end_of_body)
        context_starts = [group["start"] for group in groups if starts[number] < group["start"] < end]
        if context_starts:
            end = min(context_starts)
        block = clean_piece(body[starts[number] : end])
        block = re.sub(rf"^\s*{number}(?:[.．]\s*|\s+(?=\(A\)))", "", block).strip()
        option_matches = list(re.finditer(r"\(([ABCD])\)\s*", block))
        if len({match.group(1) for match in option_matches}) < 4:
            raise RuntimeError(f"{pdf_path.name} q{number}: could not OCR all A-D options")
        first_option = option_matches[0].start()
        excerpt = block[:first_option].strip() or f"第 {number} 格"
        options: dict[str, str] = {}
        for index, match in enumerate(option_matches):
            key = match.group(1)
            if key in options:
                continue
            next_start = option_matches[index + 1].start() if index + 1 < len(option_matches) else len(block)
            options[key] = clean_option_tail(block[match.end() : next_start])
        missing = [key for key in "ABCD" if not options.get(key)]
        for key in missing:
            options[key] = f"選項 {key}(公式或圖形請參照本題圖面)"
        group = selected_group.get(number)
        records[number] = {
            "excerpt": excerpt,
            "options": {key: options[key] for key in "ABCD"},
            "group": group,
            "requiresFigure": bool(missing or FIGURE_WORDS.search("\n".join([excerpt, group["passage"] if group else ""]))),
            "page": max(page for position, page in page_markers if position < starts[number]),
        }
    return records, groups


def locate_question_tops(pdf_path: Path, pages: dict[int, int], expected: int) -> dict[int, float]:
    result: dict[int, float] = {}
    previous_top_by_page: dict[int, float] = {}
    with pdfplumber.open(pdf_path) as pdf:
        for number in range(1, expected + 1):
            page_number = pages[number]
            words = pdf.pages[page_number - 1].extract_words(use_text_flow=True)
            candidates: list[float] = []
            for index, word in enumerate(words):
                text = normalize(word["text"]).strip()
                exact = text in {f"{number}.", f"{number}．"}
                bare = text == str(number) and index + 1 < len(words) and normalize(words[index + 1]["text"]).startswith("(A)")
                if (exact or bare) and float(word["x0"]) < 130:
                    candidates.append(float(word["top"]))
            previous = previous_top_by_page.get(page_number, 35.0)
            valid = [top for top in candidates if top > previous + 0.5]
            result[number] = min(valid or candidates or [previous + 24.0])
            previous_top_by_page[page_number] = result[number]
    return result


def restore_english_answer_blanks(
    pdf_path: Path,
    records: dict[int, dict],
    pages: dict[int, int],
    tops: dict[int, float],
) -> None:
    """Restore answer blanks that are drawn as PDF shapes instead of text.

    Vocabulary (1–8) and dialogue (11–20) questions each contain one answer
    blank.  Several official PDFs draw that blank as a thin rectangle, so plain
    text extraction silently drops it.  Rebuilding only those stems from word
    and shape coordinates preserves the intended location without inserting
    blanks into underlined-word or reading-comprehension questions.
    """

    blank_questions = [*range(1, 9), *range(11, 21)]
    with pdfplumber.open(pdf_path) as pdf:
        for number in blank_questions:
            page = pdf.pages[pages[number] - 1]
            top = tops[number] - 3.0
            next_top = tops.get(number + 1) if pages.get(number + 1) == pages[number] else None
            bottom = next_top - 1.0 if next_top else float(page.height) - 30.0
            words = [
                word
                for word in page.extract_words(use_text_flow=True)
                if top <= float(word["top"]) < bottom and float(word["x0"]) >= 55.0
            ]

            option_tops = [
                float(word["top"])
                for word in words
                if re.match(r"^\([A-D]\)", normalize(word["text"]).strip())
            ]
            if option_tops:
                stem_bottom = min(option_tops) - 1.0
                words = [word for word in words if float(word["top"]) < stem_bottom]
            else:
                stem_bottom = bottom

            shapes = [
                rect
                for rect in page.rects
                if top <= float(rect.get("top", 9999.0)) < stem_bottom
                and float(rect.get("width", 0.0)) >= 18.0
                and float(rect.get("height", 99.0)) <= 3.0
            ]

            # Some years encode the line as underscores in the text layer.
            # In those files the existing extraction already preserves the
            # correct dialogue line breaks, so only normalize its length.
            if not shapes:
                records[number]["excerpt"] = re.sub(r"_{3,}", "________", records[number]["excerpt"])
                continue

            items = [
                {
                    "text": normalize(word["text"]).strip(),
                    "x0": float(word["x0"]),
                    "top": float(word["top"]),
                    "bottom": float(word["bottom"]),
                }
                for word in words
            ]
            for shape in shapes:
                shape_top = float(shape["top"])
                same_line = [item for item in items if abs(item["bottom"] - shape_top) <= 5.0]
                if not same_line:
                    continue
                line_top = min(same_line, key=lambda item: abs(item["bottom"] - shape_top))["top"]
                items.append(
                    {
                        "text": "________",
                        "x0": float(shape["x0"]),
                        "top": line_top,
                        "bottom": shape_top,
                    }
                )

            lines: list[list[dict]] = []
            for item in sorted(items, key=lambda value: (value["top"], value["x0"])):
                line = next((candidate for candidate in lines if abs(candidate[0]["top"] - item["top"]) <= 2.5), None)
                if line is None:
                    lines.append([item])
                else:
                    line.append(item)

            rebuilt_lines: list[str] = []
            for line in lines:
                text = " ".join(item["text"] for item in sorted(line, key=lambda value: value["x0"]))
                text = re.sub(r"\s+([,.;:?!])", r"\1", text)
                text = re.sub(r"\(\s+", "(", text)
                text = re.sub(r"\s+\)", ")", text)
                rebuilt_lines.append(text.strip())
            rebuilt = "\n".join(line for line in rebuilt_lines if line)
            rebuilt = re.sub(rf"^\s*{number}\s*[.．]\s*", "", rebuilt, count=1)
            rebuilt = re.sub(r"_{3,}", "________", rebuilt)
            records[number]["excerpt"] = rebuilt

    # Cloze passages (21–28) share one passage per group. Restore each numbered
    # answer position once in that shared passage; reading questions 29–42 are
    # intentionally left untouched.
    seen_groups: set[int] = set()
    for number in range(21, 29):
        group = records[number].get("group")
        if not group or id(group) in seen_groups:
            continue
        seen_groups.add(id(group))
        passage = group["passage"]
        for member in range(max(21, int(group["first"])), min(28, int(group["last"])) + 1):
            passage = re.sub(
                rf"(?<!\d){member}(?!\d|\s*_{{3,}})",
                f"{member} ________",
                passage,
                count=1,
            )
        group["passage"] = passage


def crop_route(year: int, exam: str, name: str) -> str:
    return f"/exams/figures/{year}/{exam}-{name}.webp"


def render_question_crop(
    pdf_path: Path,
    year: int,
    exam: str,
    name: str,
    page_number: int,
    top: float,
    bottom: float,
    left: float = 38.0,
    right: float | None = None,
) -> str:
    output_dir = FIGURE_DIR / str(year)
    output_dir.mkdir(parents=True, exist_ok=True)
    target = output_dir / f"{exam}-{name}.webp"
    if os.environ.get("REUSE_EXAM_FIGURES") == "1" and target.exists():
        return crop_route(year, exam, name)
    cache_key = (str(pdf_path), page_number)
    pdf = _PDF_CACHE.setdefault(str(pdf_path), pdfplumber.open(pdf_path))
    page = pdf.pages[page_number - 1]
    if cache_key not in _PAGE_IMAGE_CACHE:
        _PAGE_IMAGE_CACHE[cache_key] = page.to_image(resolution=150).original.convert("RGB")
    full_image = _PAGE_IMAGE_CACHE[cache_key]
    safe_top = max(36.0, top - 8.0)
    safe_bottom = min(float(page.height) - 32.0, max(bottom, safe_top + 80.0))
    scale = 150 / 72
    image = full_image.crop(
        (
            round(left * scale),
            round(safe_top * scale),
            round((right if right is not None else float(page.width) - 38.0) * scale),
            round(safe_bottom * scale),
        )
    )
    image.save(target, "WEBP", quality=84, method=6)
    return crop_route(year, exam, name)


def main() -> None:
    common_questions: list[dict] = []
    common_sources: list[dict] = []
    figure_map: dict[str, dict] = {}

    for year in YEARS:
        for exam, config in SUBJECTS.items():
            count = int(config["count"])
            stem_name = f"{year}-4y-00-{config['file']}.pdf"
            answer_name = f"{year}-4y-00-{config['file']}-standard.pdf"
            stem_path = PDF_DIR / stem_name
            answers = extract_answers(PDF_DIR / answer_name, count)
            text_records, _ = extract_common_text(stem_path, count)
            pages = {number: int(text_records[number]["page"]) for number in range(1, count + 1)}
            tops = locate_question_tops(stem_path, pages, count)
            if exam == "english":
                restore_english_answer_blanks(stem_path, text_records, pages, tops)
            common_sources.append(
                {
                    "year": year,
                    "exam": exam,
                    "name": config["name"],
                    "sourceUrl": official_url(year, stem_name),
                    "answerUrl": official_url(year, answer_name),
                }
            )
            for number in range(1, count + 1):
                text_record = text_records[number]
                group = text_record["group"]
                group_id = f"{year}-{exam}-g{group['first']}-{group['last']}" if group else None
                figure_image = None
                if text_record["requiresFigure"] or exam == "math-c":
                    next_top = tops.get(number + 1) if pages.get(number + 1) == pages[number] else None
                    bottom = (next_top - 34.0) if next_top else 806.0
                    figure_left = 330.0 if exam == "chinese" and re.search(r"右圖|左圖", text_record["excerpt"]) else 38.0
                    if figure_left > 38.0:
                        bottom = min((next_top - 8.0) if next_top else bottom, 806.0)
                    figure_image = render_question_crop(
                        stem_path,
                        year,
                        exam,
                        f"q{number}",
                        pages[number],
                        tops[number],
                        bottom,
                        left=figure_left,
                    )
                common_questions.append(
                    {
                        "id": f"{year}-{exam}-{number}",
                        "year": year,
                        "exam": exam,
                        "subject": exam,
                        "subjectName": config["name"],
                        "questionNo": number,
                        "answer": answers[number],
                        "excerpt": text_record["excerpt"],
                        "options": text_record["options"],
                        "requiresOfficialFigure": bool(figure_image),
                        "figureImage": figure_image,
                        "originalPage": pages[number],
                        "groupId": group_id,
                        "groupTitle": group["title"] if group else None,
                        "passage": group["passage"] if group else None,
                        "sourceLabel": f"{year} 年統測 · {config['name']}",
                        "sourceUrl": official_url(year, stem_name),
                        "topic": config["topic"],
                        "lessonRoute": None,
                        "recognition": "PDF text layer + OCR-style normalization; one-question segmentation",
                    }
                )

    coverage = json.loads((DATA_DIR / "exam-coverage.json").read_text(encoding="utf-8"))
    for year in YEARS:
        for paper in (1, 2):
            exam = f"professional-{paper}"
            pdf_path = PDF_DIR / f"{year}-4y-06-{paper}.pdf"
            pages = question_pages(pdf_path, 40)
            tops = locate_question_tops(pdf_path, pages, 40)
            required = [
                question
                for question in coverage["questions"]
                if question["year"] == year and question["paper"] == paper and question["requiresOfficialFigure"]
            ]
            for question in required:
                number = question["questionNo"]
                next_top = tops.get(number + 1) if pages.get(number + 1) == pages[number] else None
                bottom = (next_top - 34.0) if next_top else 806.0
                route = render_question_crop(pdf_path, year, exam, f"q{number}", pages[number], tops[number], bottom)
                figure_map[question["id"]] = {"figureImage": route, "originalPage": pages[number]}

    common_output = {
        "version": "5.2.0",
        "scope": "111–115 學年度國文、英文、數學(C)逐題辨識資料",
        "sources": common_sources,
        "questions": common_questions,
    }
    (DATA_DIR / "common-exam-questions.json").write_text(
        json.dumps(common_output, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    (DATA_DIR / "exam-page-map.json").write_text(
        json.dumps(figure_map, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    groups = len({question["groupId"] for question in common_questions if question["groupId"]})
    figures = sum(bool(question["figureImage"]) for question in common_questions) + len(figure_map)
    print(f"Built {len(common_questions)} OCR questions, {groups} passage groups and {figures} single-question figure crops.")
    for pdf in _PDF_CACHE.values():
        pdf.close()


if __name__ == "__main__":
    main()
