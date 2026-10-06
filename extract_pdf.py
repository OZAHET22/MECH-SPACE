import os
from pypdf import PdfReader

pdf_path = "Mech Space brochure.pdf"
output_path = "extracted_text.txt"

print(f"Extracting text from {pdf_path}...")

try:
    reader = PdfReader(pdf_path)
    with open(output_path, "w", encoding="utf-8") as f:
        for i, page in enumerate(reader.pages):
            text = page.extract_text()
            if text:
                f.write(f"--- PAGE {i + 1} ---\n")
                f.write(text)
                f.write("\n\n")
    print(f"Extraction successful! Saved to {output_path}")
except Exception as e:
    print(f"Error during extraction: {e}")
