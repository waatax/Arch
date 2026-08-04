"""Build common-subject exam data and local official-page images.

Inputs are the official TCTE PDFs downloaded to tmp/pdfs. Generated JSON and
WebP files are committed so the static GitHub Pages site never depends on a PDF
viewer while a student is taking a simulation.
"""

from __future__ import annotations

import base64
import json
import re
import unicodedata
from pathlib import Path

import pdfplumber


ROOT = Path(__file__).resolve().parents[1]
PDF_DIR = ROOT / "tmp" / "pdfs"
PUBLIC_DIR = ROOT / "apps" / "web" / "public" / "exams" / "pages"
DATA_DIR = ROOT / "data" / "registry"
YEARS = range(111, 116)
SUBJECTS = {
    "chinese": {"file": "c", "name": "國文", "count": 38, "topic": "國文綜合能力"},
    "english": {"file": "e", "name": "英文", "count": 42, "topic": "英文綜合能力"},
    "math-c": {"file": "mc", "name": "數學(C)", "count": 25, "topic": "數學(C)綜合能力"},
}


def official_url(year: int, filename: str) -> str:
    encoded = base64.b64encode(filename.encode("utf-8")).decode("ascii")
    return f"https://web1.tcte.edu.tw/EXAM/{year}_4y/downloader.php?obj={encoded}"


def extract_answers(pdf_path: Path, expected: int) -> dict[int, str]:
    with pdfplumber.open(pdf_path) as pdf:
        text = unicodedata.normalize("NFKC", "\n".join(page.extract_text() or "" for page in pdf.pages))
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
            text = page.extract_text() or ""
            for match in re.finditer(r"(?m)^\s*(\d{1,2})[\.．]\s*", text):
                number = int(match.group(1))
                nearby = text[match.end() : match.end() + 1800]
                if 1 <= number <= expected and re.search(r"\([ABCD]\)", nearby):
                    candidates[number].append(page_number)

    result: dict[int, int | None] = {}
    previous = 2
    for number in range(1, expected + 1):
        valid = [page for page in candidates[number] if page >= previous]
        result[number] = min(valid) if valid else None
        if result[number] is not None:
            previous = int(result[number])

    next_page: int | None = None
    for number in range(expected, 0, -1):
        if result[number] is None:
            result[number] = next_page
        else:
            next_page = int(result[number])
    previous = 2
    for number in range(1, expected + 1):
        if result[number] is None:
            result[number] = previous
        previous = int(result[number])

    pages = {number: int(page) for number, page in result.items()}
    if any(pages[number] > pages[number + 1] for number in range(1, expected)):
        raise RuntimeError(f"{pdf_path.name}: non-monotonic question page map")
    return pages


def image_route(year: int, exam: str, page: int) -> str:
    return f"/exams/pages/{year}/{exam}-p{page}.webp"


def render_pages(pdf_path: Path, year: int, exam: str, pages: set[int]) -> None:
    output_dir = PUBLIC_DIR / str(year)
    output_dir.mkdir(parents=True, exist_ok=True)
    with pdfplumber.open(pdf_path) as pdf:
        for page_number in sorted(pages):
            target = output_dir / f"{exam}-p{page_number}.webp"
            image = pdf.pages[page_number - 1].to_image(resolution=132).original.convert("RGB")
            image.save(target, "WEBP", quality=82, method=6)


def main() -> None:
    common_questions: list[dict] = []
    common_sources: list[dict] = []
    page_map: dict[str, dict] = {}

    for year in YEARS:
        for exam, config in SUBJECTS.items():
            stem_name = f"{year}-4y-00-{config['file']}.pdf"
            answer_name = f"{year}-4y-00-{config['file']}-standard.pdf"
            stem_path = PDF_DIR / stem_name
            answer_path = PDF_DIR / answer_name
            answers = extract_answers(answer_path, int(config["count"]))
            pages = question_pages(stem_path, int(config["count"]))
            render_pages(stem_path, year, exam, set(pages.values()))
            common_sources.append(
                {
                    "year": year,
                    "exam": exam,
                    "name": config["name"],
                    "sourceUrl": official_url(year, stem_name),
                    "answerUrl": official_url(year, answer_name),
                }
            )
            for number in range(1, int(config["count"]) + 1):
                common_questions.append(
                    {
                        "id": f"{year}-{exam}-{number}",
                        "year": year,
                        "exam": exam,
                        "subject": exam,
                        "subjectName": config["name"],
                        "questionNo": number,
                        "answer": answers[number],
                        "excerpt": "請閱讀下方官方原題圖面後作答。",
                        "options": {"A": "", "B": "", "C": "", "D": ""},
                        "requiresOfficialFigure": True,
                        "questionImage": image_route(year, exam, pages[number]),
                        "originalPage": pages[number],
                        "sourceLabel": f"{year} 年統測 · {config['name']}",
                        "sourceUrl": official_url(year, stem_name),
                        "topic": config["topic"],
                        "lessonRoute": None,
                    }
                )

    coverage_path = DATA_DIR / "exam-coverage.json"
    coverage = json.loads(coverage_path.read_text(encoding="utf-8"))
    for year in YEARS:
        for paper in (1, 2):
            pdf_path = PDF_DIR / f"{year}-4y-06-{paper}.pdf"
            pages = question_pages(pdf_path, 40)
            required = [
                question
                for question in coverage["questions"]
                if question["year"] == year
                and question["paper"] == paper
                and question["requiresOfficialFigure"]
            ]
            required_pages = {pages[question["questionNo"]] for question in required}
            render_pages(pdf_path, year, f"professional-{paper}", required_pages)
            for question in required:
                page = pages[question["questionNo"]]
                page_map[question["id"]] = {
                    "questionImage": image_route(year, f"professional-{paper}", page),
                    "originalPage": page,
                }

    common_output = {
        "version": "5.1.0",
        "scope": "111–115 學年度國文、英文、數學(C)",
        "sources": common_sources,
        "questions": common_questions,
    }
    (DATA_DIR / "common-exam-questions.json").write_text(
        json.dumps(common_output, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    (DATA_DIR / "exam-page-map.json").write_text(
        json.dumps(page_map, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    print(
        f"Built {len(common_questions)} common-subject questions and "
        f"{len(page_map)} professional figure mappings."
    )


if __name__ == "__main__":
    main()
