# SEDRA / سدرة — Brand Lock

## Name
- **Arabic:** سدرة
- **English:** SEDRA
- **Tagline:** تصاميم إلكترونية · Electronic Designs
- **Established:** ESTB 2025 (small mark only)

## What this is
A clean **electronic designs showcase / gallery** only:
واجهات، موكأب، بوسترات، قوالب، أيقونات، ملصقات رقمية، وهويات بصرية.

Site structure: header (logo + سدرة + tagline) → hero «معرض عرض التصاميم» → filters + search → masonry (~50 designs) → detail → Saved → footer brand.

Live: https://gaber311a-lang.github.io/DesignerAssets/

## Colors (locked)
| Role | Hex | Usage |
|------|-----|--------|
| Forest green | `#003626` | bg / primary dark / text on light |
| Mint / sage | `#CFEDC2` | logo accent / CTAs on dark (alt `#C5E0C1`) |
| Stroke | `#C7E6BC` | borders, soft accents |
| Soft cream | `#F5F7F2` | light sections |
| White | `#FFFFFF` | sparingly on dark |

## Logo
- Path: `assets/logo.jpeg` — **only** mark (deep forest + mint calligraphy). Never substitute.
- Crop as circle in UI (`object-fit: cover; object-position: center 32%`) so any older lockup text on the JPEG does not dominate.
- Adjacent copy is always **تصاميم إلكترونية / Electronic Designs**.

## Typography
- English brand: Cormorant Garamond
- Arabic: system (`"SF Arabic"`, `"Segoe UI"`, Tahoma, sans-serif)
- Layout: Arabic-first RTL · mobile-first

## Do not use
- Honey / organic / food copy (عسل، منتجات عضوية، نحل، برطمانات، «Organic Honey Products»)
- Abu Ezz / أبو عز
- DesignerAssets violet UI (`#5B4DFF` / `#8B82FF`) or generic assets-marketplace pitch
- “Pinterest clone” marketing language
- Random mismatched stock photos — coherent SVG/CSS art matching each design title only

## SHIP LOCK
GitHub Pages stays **electronic designs gallery only**. Logo JPEG may retain older lockup text — CSS circle crop + site copy override; never surface honey/food messaging in HTML/JS visible UI.
