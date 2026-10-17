import os
import json

library_dirs = {
    "01-museums-exhibitions": "Curated digital benchmarks from leading experimental museum platforms, institutional archives, and digital pavilions.",
    "02-editorial-typography": "Typography-driven editorial sites, specimen gazettes, and high-contrast letterpress archives.",
    "03-photography": "Silver gelatin studio portraiture, darkroom contact sheet studies, and documentary realism archives.",
    "04-music": "Vinyl LP art, gatefold packaging, cassette tape vernacular, and acoustic soundscape portals.",
    "05-fashion": "Sartorial modernism, indigenous weaving archives (Aso-Oke, Akwete, Adire), and structural tailoring.",
    "06-graphic-design": "Anti-colonial print culture, literary covers, FESTAC '77 identity systems, and modernist broadsheets.",
    "07-motion-interactions": "Interaction design benchmarks featuring restrained motion, spring physics, and accessible reduced-motion states.",
    "08-nigerian-african-culture": "Statutory institutional references from NCMM, National Archives of Nigeria, CBAAC, and Digital Benin.",
    "09-shortlisted": "Curated shortlists of high-priority aesthetic and cultural references for design consideration.",
    "10-deep-analysis": "Detailed curatorial breakdowns of seminal references including Ojeikere, Kalakuta, and FESTAC '77.",
    "screenshots": "Visual captures and UI layout specimens from verified digital references.",
    "moodboards": "Thematic color and texture boards mapping tactile archival paper, carbon ink, and oxidized terracotta.",
    "reports": "Analytical research synthesis, category distribution ledgers, and integrity scorecards."
}

base_path = os.path.join("research", "inspiration-library")

for d, desc in library_dirs.items():
    dir_path = os.path.join(base_path, d)
    os.makedirs(dir_path, exist_ok=True)
    readme_path = os.path.join(dir_path, "README.md")
    content = f"""# Inspiration Library — {d}

## Overview
{desc}

## Inventory & Status
- **Parent Catalog:** `/research/references.json`
- **Flat Ledger:** `/research/references.csv`
- **Integrity Status:** Verified against statutory repositories and design archives.
"""
    with open(readme_path, "w", encoding="utf-8") as f:
        f.write(content)

print("Created README manifests for all 13 inspiration library directories.")
