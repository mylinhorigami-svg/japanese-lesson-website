import csv
import asyncio
from pathlib import Path
import edge_tts

VOICE = "ja-JP-NanamiNeural"
CSV_FILE = Path("data/audio_list.csv")
OUTPUT_ROOT = Path("assets/audio")

async def create_audio(category, filename, text):

    output_dir = OUTPUT_ROOT / category
    output_dir.mkdir(parents=True, exist_ok=True)

    output_file = output_dir / f"{filename}.mp3"

    # Nếu file đã tồn tại thì bỏ qua
    if output_file.exists():
        print(f"✓ Skip: {output_file.name}")
        return

    print(f"Creating: {output_file.name}")

    communicate = edge_tts.Communicate(
        text=text,
        voice=VOICE,
        rate="-10%"
    )

    await communicate.save(str(output_file))
async def main():
    if not CSV_FILE.exists():
        print("Không tìm thấy file data/audio_list.csv")
        return

    with open(CSV_FILE, newline="", encoding="utf-8-sig") as f:
        reader = csv.DictReader(f)

        for row in reader:
            category = row["category"].strip()
            filename = row["filename"].strip()
            text = row["text"].strip()

            if category and filename and text:
                await create_audio(category, filename, text)

asyncio.run(main())