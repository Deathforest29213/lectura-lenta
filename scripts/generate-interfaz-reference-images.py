from __future__ import annotations

import json
import re
import shutil
import textwrap
import unicodedata
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
CONTENT_FILE = ROOT / "src" / "modules" / "programacion-interfaz" / "content.md"
PUBLIC_ROOT = ROOT / "public"
OUTPUT_ROOT = PUBLIC_ROOT / "resumen-visual" / "programacion-interfaz"
LINKS_FILE = ROOT / "src" / "data" / "interfazIllustrationLinks.ts"


def slugify(value: str) -> str:
    normalized = unicodedata.normalize("NFD", value.lower())
    stripped = "".join(ch for ch in normalized if unicodedata.category(ch) != "Mn")
    slug = re.sub(r"[^a-z0-9]+", "-", stripped).strip("-")
    return slug or "section"


def read_font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    font_name = "seguisb.ttf" if bold else "segoeui.ttf"
    font_path = Path("C:/Windows/Fonts") / font_name
    if font_path.exists():
        return ImageFont.truetype(str(font_path), size)
    return ImageFont.load_default()


TITLE_FONT = read_font(46, bold=True)
HEADING_FONT = read_font(40, bold=True)
SUBTITLE_FONT = read_font(25)
LABEL_FONT = read_font(22, bold=True)
BODY_FONT = read_font(21)
SMALL_FONT = read_font(17)


def clean_inline_markdown(value: str) -> str:
    value = re.sub(r"`([^`]+)`", r"\1", value)
    value = re.sub(r"\*\*([^*]+)\*\*", r"\1", value)
    return value.strip()


def parse_content() -> list[dict[str, str]]:
    entries: list[dict[str, str]] = []
    current_unit = ""
    current_theme = ""
    current_section: dict[str, str] | None = None
    current_block: str | None = None
    block_lines: list[str] = []

    def commit_block() -> None:
        nonlocal block_lines, current_block, current_section
        if current_section and current_block and block_lines:
            current_section[current_block] = clean_inline_markdown(" ".join(line.strip() for line in block_lines))
        block_lines = []
        current_block = None

    def commit_section() -> None:
        nonlocal current_section
        commit_block()
        if current_section:
            entries.append(current_section)
        current_section = None

    for raw_line in CONTENT_FILE.read_text(encoding="utf-8").splitlines():
        line = raw_line.strip()
        if line.startswith("# unit:"):
            commit_section()
            current_unit = line.replace("# unit:", "", 1).strip()
            continue
        if line.startswith("## theme:"):
            commit_section()
            current_theme = line.replace("## theme:", "", 1).strip()
            continue
        if line.startswith("### section:"):
            commit_section()
            current_section = {
                "unitTitle": current_unit,
                "themeTitle": current_theme,
                "sectionTitle": line.replace("### section:", "", 1).strip(),
            }
            continue
        if line.startswith("#### block:"):
            commit_block()
            continue
        if line == "**Purpose**":
            commit_block()
            current_block = "purpose"
            continue
        if line == "**Gallery Sections**":
            commit_block()
            current_block = "gallery"
            continue
        if line == "**Design Rule**":
            commit_block()
            current_block = "rule"
            continue
        if current_block and line:
            block_lines.append(line)

    commit_section()
    return entries


def rounded(draw: ImageDraw.ImageDraw, box: tuple[int, int, int, int], fill: str, outline: str | None = None, width: int = 2, radius: int = 18) -> None:
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def draw_button(draw: ImageDraw.ImageDraw, x: int, y: int, w: int, h: int, label: str, fill: str, outline: str | None = None) -> None:
    rounded(draw, (x, y, x + w, y + h), fill, outline, radius=16)
    bbox = draw.textbbox((0, 0), label, font=SMALL_FONT)
    draw.text((x + (w - (bbox[2] - bbox[0])) / 2, y + (h - (bbox[3] - bbox[1])) / 2 - 2), label, fill="#172033", font=SMALL_FONT)


def draw_table(draw: ImageDraw.ImageDraw, x: int, y: int, w: int, h: int) -> None:
    rounded(draw, (x, y, x + w, y + h), "#ffffff", "#cbd5e1", radius=14)
    rows = 4
    cols = 3
    for i in range(1, rows):
        yy = y + int(h * i / rows)
        draw.line((x, yy, x + w, yy), fill="#cbd5e1", width=2)
    for i in range(1, cols):
        xx = x + int(w * i / cols)
        draw.line((xx, y, xx, y + h), fill="#cbd5e1", width=2)
    draw.rectangle((x + 1, y + 1, x + w - 1, y + int(h / rows)), fill="#e0f2fe")


def draw_concept_art(draw: ImageDraw.ImageDraw, title: str) -> None:
    key = title.lower()
    x, y = 86, 300
    w, h = 856, 270

    if "router" in key or "routing" in key or "route" in key or "url launcher" in key or "active links" in key:
        rounded(draw, (x + 130, y + 45, x + 730, y + 225), "#ffffff", "#cbd5e1", radius=18)
        for i, label in enumerate(["/", "/store", "/settings"]):
            yy = y + 78 + i * 46
            rounded(draw, (x + 165, yy, x + 335, yy + 32), "#dbeafe" if i == 1 else "#f8fafc", "#94a3b8", radius=10)
            draw.text((x + 185, yy + 6), label, fill="#0f172a", font=SMALL_FONT)
        draw.line((x + 370, y + 96, x + 650, y + 96), fill="#60a5fa", width=5)
        draw.line((x + 370, y + 142, x + 610, y + 142), fill="#94a3b8", width=5)
        draw.line((x + 370, y + 188, x + 690, y + 188), fill="#cbd5e1", width=5)
        return

    if "navigation" in key or "appbar" in key or "bottomappbar" in key or "hero" in key or "menubar" in key or "submenu" in key:
        if "hero" in key or "gallery" in key:
            rounded(draw, (x + 150, y + 55, x + 340, y + 210), "#dbeafe", "#2563eb", radius=18)
            rounded(draw, (x + 535, y + 35, x + 735, y + 235), "#bfdbfe", "#2563eb", radius=24)
            draw.line((x + 360, y + 132, x + 515, y + 132), fill="#2563eb", width=6)
            draw.polygon([(x + 515, y + 132), (x + 490, y + 116), (x + 490, y + 148)], fill="#2563eb")
        elif "drawer" in key or "rail" in key:
            rounded(draw, (x + 160, y + 35, x + 720, y + 235), "#ffffff", "#cbd5e1", radius=18)
            drawer_w = 170 if "drawer" in key else 85
            draw.rectangle((x + 160, y + 35, x + 160 + drawer_w, y + 235), fill="#dbeafe")
            for i in range(4):
                yy = y + 70 + i * 36
                draw.ellipse((x + 185, yy, x + 207, yy + 22), fill="#2563eb" if i == 1 else "#94a3b8")
                if drawer_w > 100:
                    draw.line((x + 225, yy + 11, x + 300, yy + 11), fill="#334155" if i == 1 else "#94a3b8", width=4)
            draw.line((x + 380, y + 92, x + 650, y + 92), fill="#60a5fa", width=7)
            draw.line((x + 380, y + 140, x + 610, y + 140), fill="#94a3b8", width=5)
        elif "bottom" in key or "navigationbar" in key:
            rounded(draw, (x + 190, y + 55, x + 690, y + 225), "#ffffff", "#cbd5e1", radius=18)
            rounded(draw, (x + 210, y + 165, x + 670, y + 220), "#e0f2fe", "#60a5fa", radius=20)
            for i, label in enumerate(["Home", "Search", "Me"]):
                cx = x + 285 + i * 150
                draw.ellipse((cx - 13, y + 178, cx + 13, y + 204), fill="#2563eb" if i == 0 else "#94a3b8")
                draw.text((cx - 26, y + 206), label, fill="#334155", font=SMALL_FONT)
        else:
            rounded(draw, (x + 160, y + 50, x + 720, y + 230), "#ffffff", "#cbd5e1", radius=18)
            draw.rectangle((x + 160, y + 50, x + 720, y + 100), fill="#bfdbfe")
            draw.text((x + 205, y + 63), "App title", fill="#0f172a", font=BODY_FONT)
            for i in range(3):
                draw.ellipse((x + 610 + i * 30, y + 67, x + 626 + i * 30, y + 83), fill="#2563eb")
            rounded(draw, (x + 250, y + 125, x + 580, y + 205), "#f8fafc", "#cbd5e1", radius=12)
        return

    if "dialog" in key or "banner" in key or "bottomsheet" in key or "snackbar" in key or "datepicker" in key or "date range" in key or "timepicker" in key or "action sheet" in key or "confirmation" in key or "modal" in key:
        if "snackbar" in key:
            rounded(draw, (x + 205, y + 170, x + 700, y + 230), "#0f172a", None, radius=16)
            draw.text((x + 235, y + 190), "Saved", fill="#ffffff", font=BODY_FONT)
            draw.text((x + 585, y + 190), "UNDO", fill="#93c5fd", font=SMALL_FONT)
        elif "bottomsheet" in key or "action sheet" in key:
            rounded(draw, (x + 175, y + 80, x + 705, y + 255), "#ffffff", "#cbd5e1", radius=24)
            draw.line((x + 390, y + 102, x + 490, y + 102), fill="#94a3b8", width=6)
            for i, label in enumerate(["Action", "Option", "Cancel"]):
                draw.text((x + 245, y + 130 + i * 40), label, fill="#334155" if i < 2 else "#dc2626", font=BODY_FONT)
        elif "date" in key or "time" in key:
            rounded(draw, (x + 260, y + 35, x + 610, y + 240), "#ffffff", "#cbd5e1", radius=18)
            draw.rectangle((x + 260, y + 35, x + 610, y + 82), fill="#bfdbfe")
            if "time" in key:
                draw.ellipse((x + 350, y + 102, x + 520, y + 230), fill="#f8fafc", outline="#60a5fa", width=5)
                draw.line((x + 435, y + 166, x + 435, y + 122), fill="#2563eb", width=5)
                draw.line((x + 435, y + 166, x + 475, y + 190), fill="#2563eb", width=5)
            else:
                for i in range(3):
                    for j in range(4):
                        fill = "#60a5fa" if (i, j) == (1, 2) else "#cbd5e1"
                        draw.ellipse((x + 295 + j * 70, y + 110 + i * 36, x + 315 + j * 70, y + 130 + i * 36), fill=fill)
        elif "banner" in key:
            rounded(draw, (x + 145, y + 65, x + 735, y + 170), "#fef3c7", "#f59e0b", radius=16)
            draw.text((x + 190, y + 95), "Important message", fill="#92400e", font=BODY_FONT)
            draw_button(draw, x + 560, y + 92, 120, 46, "Action", "#fde68a", "#f59e0b")
        else:
            rounded(draw, (x + 245, y + 45, x + 625, y + 235), "#ffffff", "#cbd5e1", radius=24)
            draw.text((x + 295, y + 82), "Dialog title", fill="#0f172a", font=SUBTITLE_FONT)
            draw.line((x + 295, y + 125, x + 575, y + 125), fill="#cbd5e1", width=5)
            draw_button(draw, x + 345, y + 170, 110, 46, "Cancel", "#f8fafc", "#94a3b8")
            draw_button(draw, x + 475, y + 170, 110, 46, "OK", "#bfdbfe", "#2563eb")
        return

    if "badge" in key or "avatar" in key:
        draw.ellipse((x + 300, y + 40, x + 480, y + 220), fill="#dbeafe", outline="#2563eb", width=4)
        draw.ellipse((x + 360, y + 82, x + 420, y + 142), fill="#60a5fa")
        draw.arc((x + 330, y + 130, x + 450, y + 240), 200, 340, fill="#60a5fa", width=22)
        draw.ellipse((x + 455, y + 45, x + 515, y + 105), fill="#ef4444")
        draw.text((x + 476, y + 60), "3", fill="#ffffff", font=SMALL_FONT)
        return

    if "canvas" in key or "bezier" in key or "brush" in key or "gradient" in key or "stroke" in key or "triangles" in key or "shape drawer" in key or "circle drawer" in key or "smiling face" in key:
        rounded(draw, (x + 150, y + 20, x + 720, y + 245), "#ffffff", "#cbd5e1", radius=18)
        draw.line((x + 205, y + 180, x + 335, y + 60, x + 460, y + 185, x + 650, y + 70), fill="#2563eb", width=7, joint="curve")
        draw.ellipse((x + 250, y + 95, x + 350, y + 195), fill="#fde68a", outline="#f59e0b", width=4)
        draw.polygon([(x + 515, y + 190), (x + 590, y + 65), (x + 665, y + 190)], fill="#bbf7d0", outline="#16a34a")
        return

    if "activityindicator" in key or "progress" in key or "splash" in key or "gauge" in key:
        if "bar" in key or "splash" in key:
            rounded(draw, (x + 190, y + 100, x + 690, y + 145), "#e2e8f0", "#cbd5e1", radius=20)
            rounded(draw, (x + 190, y + 100, x + 505, y + 145), "#60a5fa", None, radius=20)
            draw.text((x + 405, y + 168), "63%", fill="#334155", font=BODY_FONT)
        else:
            draw.arc((x + 325, y + 35, x + 545, y + 255), start=-90, end=230, fill="#60a5fa", width=24)
            draw.arc((x + 325, y + 35, x + 545, y + 255), start=230, end=270, fill="#e2e8f0", width=24)
            draw.text((x + 397, y + 122), "72%", fill="#0f172a", font=SUBTITLE_FONT)
        return

    if "icon" in key and "lucide" not in key:
        icons = ["+", "i", "✓", "⚙"]
        for i, symbol in enumerate(icons):
            draw.ellipse((x + 170 + i * 165, y + 75, x + 270 + i * 165, y + 175), fill="#dbeafe", outline="#2563eb", width=4)
            bbox = draw.textbbox((0, 0), symbol, font=TITLE_FONT)
            draw.text((x + 220 + i * 165 - (bbox[2] - bbox[0]) / 2, y + 112 - (bbox[3] - bbox[1]) / 2), symbol, fill="#0f172a", font=TITLE_FONT)
        return

    if "image" in key or "svg" in key or "gallery" in key or "lucide" in key or "base64" in key or "fade-in" in key or "gapless" in key:
        rounded(draw, (x + 150, y + 30, x + 720, y + 235), "#ffffff", "#cbd5e1", radius=18)
        draw.rectangle((x + 185, y + 65, x + 685, y + 205), fill="#dbeafe")
        draw.ellipse((x + 235, y + 88, x + 285, y + 138), fill="#fde68a")
        draw.polygon([(x + 210, y + 205), (x + 365, y + 115), (x + 480, y + 205)], fill="#60a5fa")
        draw.polygon([(x + 375, y + 205), (x + 545, y + 100), (x + 680, y + 205)], fill="#2563eb")
        return

    if "map" in key or "camera" in key or "layers" in key or "overlay images" in key or "idle camera" in key or "interaction flags" in key:
        rounded(draw, (x + 140, y + 25, x + 730, y + 240), "#dcfce7", "#16a34a", radius=18)
        draw.line((x + 155, y + 100, x + 710, y + 45), fill="#86efac", width=26)
        draw.line((x + 210, y + 238, x + 650, y + 35), fill="#bfdbfe", width=22)
        draw.line((x + 170, y + 185, x + 715, y + 180), fill="#fef3c7", width=22)
        for px, py in [(x + 335, y + 120), (x + 545, y + 85), (x + 605, y + 175)]:
            draw.ellipse((px - 12, py - 12, px + 12, py + 12), fill="#ef4444")
        return

    if "markdown" in key or "syntax" in key or "text theme" in key or "listviews" in key:
        rounded(draw, (x + 155, y + 20, x + 715, y + 245), "#ffffff", "#cbd5e1", radius=18)
        draw.text((x + 195, y + 50), "# Heading", fill="#0f172a", font=SUBTITLE_FONT)
        draw.line((x + 195, y + 95, x + 545, y + 95), fill="#94a3b8", width=5)
        draw.line((x + 195, y + 125, x + 650, y + 125), fill="#94a3b8", width=5)
        rounded(draw, (x + 195, y + 155, x + 655, y + 218), "#0f172a", None, radius=10)
        draw.text((x + 220, y + 174), "print('code')", fill="#93c5fd", font=BODY_FONT)
        return

    if "text" in key or "rich" in key or "font" in key or "tooltip" in key:
        draw.text((x + 170, y + 55), "Display Text", fill="#0f172a", font=TITLE_FONT)
        draw.text((x + 175, y + 125), "Rich span + link", fill="#2563eb", font=SUBTITLE_FONT)
        rounded(draw, (x + 500, y + 150, x + 760, y + 215), "#0f172a", None, radius=12)
        draw.text((x + 530, y + 170), "Tooltip hint", fill="#ffffff", font=BODY_FONT)
        draw.polygon([(x + 560, y + 215), (x + 585, y + 215), (x + 570, y + 238)], fill="#0f172a")
        return

    if "textfield" in key or "text field" in key or "autocomplete" in key or "searchbar" in key or "autofill" in key or "password" in key:
        rounded(draw, (x + 160, y + 40, x + 700, y + 105), "#ffffff", "#60a5fa", radius=14)
        draw.text((x + 190, y + 60), "Input value", fill="#334155", font=BODY_FONT)
        rounded(draw, (x + 160, y + 135, x + 700, y + 200), "#ffffff", "#cbd5e1", radius=14)
        draw.text((x + 190, y + 155), "Suggestion / helper text", fill="#64748b", font=BODY_FONT)
        draw.line((x + 190, y + 225, x + 650, y + 225), fill="#93c5fd", width=5)
        return

    if "checkbox" in key or "check box" in key or "radio" in key or "switch" in key:
        for i, label in enumerate(["Option A", "Option B", "Option C"]):
            yy = y + 42 + i * 66
            if "radio" in key:
                draw.ellipse((x + 230, yy, x + 264, yy + 34), outline="#2563eb", width=4)
                if i == 1:
                    draw.ellipse((x + 239, yy + 9, x + 255, yy + 25), fill="#2563eb")
            elif "switch" in key:
                rounded(draw, (x + 210, yy - 2, x + 282, yy + 36), "#bfdbfe" if i == 1 else "#e2e8f0", "#64748b", radius=20)
                knob_x = x + (248 if i == 1 else 218)
                draw.ellipse((knob_x, yy + 4, knob_x + 26, yy + 30), fill="#ffffff", outline="#94a3b8")
            else:
                rounded(draw, (x + 230, yy, x + 264, yy + 34), "#dbeafe" if i == 1 else "#ffffff", "#2563eb", radius=8)
                if i == 1:
                    draw.line((x + 238, yy + 17, x + 247, yy + 26, x + 258, yy + 8), fill="#2563eb", width=4)
            draw.text((x + 305, yy + 3), label, fill="#334155", font=BODY_FONT)
        return

    if "slider" in key or "range" in key or "timer" in key or "date" in key or "picker" in key:
        if "picker" in key or "date" in key or "timer" in key:
            rounded(draw, (x + 260, y + 18, x + 610, y + 245), "#ffffff", "#cbd5e1", radius=22)
            for i, text in enumerate(["09", "10", "11", "12"]):
                yy = y + 45 + i * 46
                draw.text((x + 330, yy), text, fill="#94a3b8" if i != 2 else "#0f172a", font=SUBTITLE_FONT)
                draw.text((x + 440, yy), "value", fill="#94a3b8" if i != 2 else "#0f172a", font=SUBTITLE_FONT)
            draw.line((x + 285, y + 142, x + 585, y + 142), fill="#60a5fa", width=4)
            draw.line((x + 285, y + 188, x + 585, y + 188), fill="#60a5fa", width=4)
        else:
            draw.line((x + 170, y + 130, x + 710, y + 130), fill="#cbd5e1", width=12)
            draw.line((x + 270, y + 130, x + 560, y + 130), fill="#60a5fa", width=12)
            draw.ellipse((x + 250, y + 106, x + 298, y + 154), fill="#ffffff", outline="#2563eb", width=5)
            draw.ellipse((x + 538, y + 106, x + 586, y + 154), fill="#ffffff", outline="#2563eb", width=5)
            draw.text((x + 240, y + 172), "min", fill="#64748b", font=SMALL_FONT)
            draw.text((x + 535, y + 172), "max", fill="#64748b", font=SMALL_FONT)
        return

    if "chip" in key or "segmented" in key:
        labels = ["One", "Two", "Three"]
        for i, label in enumerate(labels):
            fill = "#bfdbfe" if i == 1 else "#ffffff"
            draw_button(draw, x + 190 + i * 170, y + 100, 140, 58, label, fill, "#2563eb")
        return

    if "codeeditor" in key or "json" in key or "python" in key or "selection handling" in key:
        rounded(draw, (x + 145, y + 20, x + 720, y + 245), "#0f172a", "#334155", radius=18)
        code_lines = ["def main():", "  value = input()", "  print(value)", "# markers"]
        colors = ["#93c5fd", "#bbf7d0", "#fef3c7", "#fca5a5"]
        for i, line in enumerate(code_lines):
            yy = y + 55 + i * 42
            draw.text((x + 185, yy), f"{i + 1}", fill="#64748b", font=SMALL_FONT)
            draw.text((x + 235, yy), line, fill=colors[i], font=BODY_FONT)
        return

    if "contextmenu" in key or "context menu" in key:
        rounded(draw, (x + 190, y + 60, x + 470, y + 190), "#dbeafe", "#2563eb", radius=18)
        rounded(draw, (x + 500, y + 30, x + 720, y + 230), "#ffffff", "#cbd5e1", radius=16)
        for i, label in enumerate(["Open", "Copy", "Delete"]):
            draw.text((x + 535, y + 62 + i * 52), label, fill="#334155" if i < 2 else "#dc2626", font=BODY_FONT)
        return

    if "reorderable" in key or "drag" in key:
        for i, label in enumerate(["Item A", "Item B", "Item C"]):
            yy = y + 35 + i * 62
            rounded(draw, (x + 210, yy, x + 660, yy + 48), "#ffffff", "#cbd5e1", radius=12)
            draw.text((x + 250, yy + 11), "::", fill="#64748b", font=BODY_FONT)
            draw.text((x + 315, yy + 11), label, fill="#334155", font=BODY_FONT)
        draw.line((x + 695, y + 70, x + 745, y + 120, x + 695, y + 170), fill="#2563eb", width=6)
        return

    if "transparentpointer" in key or "transparent pointer" in key:
        rounded(draw, (x + 220, y + 70, x + 650, y + 190), "#dbeafe", "#2563eb", radius=20)
        draw.text((x + 330, y + 112), "Base action", fill="#0f172a", font=BODY_FONT)
        rounded(draw, (x + 350, y + 35, x + 760, y + 150), "#ffffff", "#94a3b8", radius=20)
        draw.text((x + 430, y + 75), "transparent layer", fill="#64748b", font=BODY_FONT)
        draw.line((x + 360, y + 210, x + 670, y + 70), fill="#16a34a", width=5)
        return

    if "datatable" in key or "table" in key:
        draw_table(draw, x + 90, y + 10, w - 180, h - 20)
        return

    if "button" in key or "boton" in key or "botones" in key or "click" in key or "icon" in key or "menu" in key:
        draw_button(draw, x + 130, y + 70, 190, 68, "Cancel", "#f8fafc", "#94a3b8")
        draw_button(draw, x + 350, y + 70, 220, 68, "Primary", "#93c5fd", "#2563eb")
        draw_button(draw, x + 600, y + 70, 120, 68, "+", "#bbf7d0", "#16a34a")
        rounded(draw, (x + 330, y + 165, x + 610, y + 235), "#ffffff", "#cbd5e1", radius=14)
        draw.text((x + 360, y + 184), "menu item", fill="#334155", font=BODY_FONT)
        return

    if "row" in key or "column" in key or "responsive" in key or "grid" in key:
        colors = ["#bae6fd", "#fecaca", "#bbf7d0", "#fde68a", "#ddd6fe", "#fed7aa"]
        if "column" in key:
            for i in range(4):
                rounded(draw, (x + 285, y + 18 + i * 60, x + 570, y + 65 + i * 60), colors[i], "#64748b", radius=12)
        elif "grid" in key or "responsive" in key:
            for i in range(2):
                for j in range(3):
                    rounded(draw, (x + 190 + j * 170, y + 30 + i * 105, x + 330 + j * 170, y + 110 + i * 105), colors[i * 3 + j], "#64748b", radius=12)
        else:
            for i in range(4):
                rounded(draw, (x + 90 + i * 185, y + 100, x + 245 + i * 185, y + 165), colors[i], "#64748b", radius=12)
        return

    if "stack" in key or "rotated" in key or "layoutcontrol" in key or "animate" in key or "offset" in key:
        rounded(draw, (x + 220, y + 40, x + 620, y + 220), "#dbeafe", "#2563eb", radius=18)
        rounded(draw, (x + 370, y + 90, x + 700, y + 255), "#fed7aa", "#ea580c", radius=18)
        draw.line((x + 230, y + 240, x + 700, y + 40), fill="#0f172a", width=6)
        draw.ellipse((x + 690, y + 28, x + 730, y + 68), fill="#f43f5e")
        return

    if "tab" in key or "pageview" in key or "expansion" in key:
        rounded(draw, (x + 110, y + 30, x + 745, y + 235), "#ffffff", "#cbd5e1", radius=18)
        draw_button(draw, x + 135, y + 55, 150, 52, "Tab 1", "#bae6fd", "#0284c7")
        draw_button(draw, x + 300, y + 55, 150, 52, "Tab 2", "#f8fafc", "#94a3b8")
        draw_button(draw, x + 465, y + 55, 150, 52, "Tab 3", "#f8fafc", "#94a3b8")
        rounded(draw, (x + 140, y + 135, x + 700, y + 195), "#f1f5f9", "#cbd5e1", radius=12)
        return

    if "list" in key or "tile" in key or "dismissible" in key:
        for i in range(4):
            yy = y + 22 + i * 58
            rounded(draw, (x + 180, yy, x + 675, yy + 46), "#ffffff", "#cbd5e1", radius=12)
            draw.ellipse((x + 200, yy + 12, x + 222, yy + 34), fill="#60a5fa")
            draw.line((x + 245, yy + 18, x + 520, yy + 18), fill="#64748b", width=3)
            draw.line((x + 245, yy + 31, x + 440, yy + 31), fill="#cbd5e1", width=3)
        return

    rounded(draw, (x + 170, y + 35, x + 690, y + 235), "#ffffff", "#cbd5e1", radius=22)
    draw.line((x + 215, y + 90, x + 650, y + 90), fill="#60a5fa", width=9)
    draw.line((x + 215, y + 135, x + 565, y + 135), fill="#94a3b8", width=7)
    draw.line((x + 215, y + 178, x + 615, y + 178), fill="#cbd5e1", width=7)


def draw_reference(entry: dict[str, str], number: int, output: Path) -> None:
    img = Image.new("RGB", (1024, 640), "#f8fafc")
    draw = ImageDraw.Draw(img)

    draw.rectangle((0, 0, 1024, 104), fill="#0f172a")
    draw.text((56, 30), "Interfaz / Referencia visual", fill="#e2e8f0", font=SUBTITLE_FONT)
    heading_lines = textwrap.wrap(f"{number:02d}. {entry['sectionTitle']}", width=43)[:2]
    if len(heading_lines) == 2 and len(" ".join(textwrap.wrap(f"{number:02d}. {entry['sectionTitle']}", width=43))) > len(" ".join(heading_lines)):
        heading_lines[1] = heading_lines[1].rstrip(". ") + "..."
    for line_index, line in enumerate(heading_lines):
        draw.text((56, 124 + line_index * 46), line, fill="#0f172a", font=HEADING_FONT)
    draw.text((58, 128 + len(heading_lines) * 46), entry["themeTitle"], fill="#475569", font=SUBTITLE_FONT)

    draw_concept_art(draw, f"{entry['themeTitle']} {entry['sectionTitle']}")

    purpose = entry.get("purpose") or entry.get("gallery") or entry.get("rule") or ""
    wrapped = textwrap.wrap(purpose, width=98)[:2]
    draw.text((64, 558), "Concepto:", fill="#0f172a", font=LABEL_FONT)
    draw.multiline_text((64, 588), "\n".join(wrapped), fill="#334155", font=SMALL_FONT, spacing=3)

    output.parent.mkdir(parents=True, exist_ok=True)
    png_output = output.with_suffix(".png")
    img.save(png_output, "PNG", optimize=True)
    Image.open(png_output).save(output, "WEBP", quality=88, method=6)
    png_output.unlink()


def public_path(path: Path) -> str:
    return "/" + path.relative_to(PUBLIC_ROOT).as_posix()


def write_links(entries: list[dict[str, str]], image_paths: dict[tuple[str, str, str], str]) -> None:
    links = []
    for entry in entries:
        unit_id = slugify(entry["unitTitle"])
        theme_id = slugify(entry["themeTitle"])
        section_id = slugify(entry["sectionTitle"])
        source = entry.get("purpose") or entry.get("gallery") or entry.get("rule") or entry["sectionTitle"]
        links.append(
            {
                "unitId": unit_id,
                "themeId": theme_id,
                "sectionId": section_id,
                "unitTitle": entry["unitTitle"],
                "themeTitle": entry["themeTitle"],
                "sectionTitle": entry["sectionTitle"],
                "images": [image_paths[(entry["unitTitle"], entry["themeTitle"], entry["sectionTitle"])]],
                "sourceParagraphs": [source],
            }
        )

    content = (
        "import type { IllustrationLink } from '../reader/types/modules'\n\n"
        "export const interfazIllustrationLinks = "
        + json.dumps(links, ensure_ascii=False, indent=2)
        + " satisfies IllustrationLink[]\n"
    )
    LINKS_FILE.write_text(content, encoding="utf-8")


def main() -> None:
    entries = parse_content()
    counters: dict[str, int] = {}
    image_paths: dict[tuple[str, str, str], str] = {}

    if OUTPUT_ROOT.exists():
        shutil.rmtree(OUTPUT_ROOT)

    for entry in entries:
        unit = entry["unitTitle"]
        counters[unit] = counters.get(unit, 0) + 1
        number = counters[unit]
        filename = f"{number:02d}-{slugify(entry['sectionTitle'])}.webp"
        output = OUTPUT_ROOT / unit / filename
        draw_reference(entry, number, output)
        image_paths[(unit, entry["themeTitle"], entry["sectionTitle"])] = public_path(output)

    write_links(entries, image_paths)
    print(f"Generated {len(entries)} reference images")
    print(f"Generated {LINKS_FILE.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
