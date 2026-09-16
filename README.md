# SEDRA / سدرة — تصاميم إلكترونية

**Electronic designs showcase / gallery only** — معرض تصاميم إلكترونية.

**https://gaber311a-lang.github.io/DesignerAssets/**

| | |
|--|--|
| Brand | سدرة / SEDRA |
| Tagline | تصاميم إلكترونية · Electronic Designs |
| Colors | Forest `#003626` · Mint `#CFEDC2` · Stroke `#C7E6BC` · Cream `#F5F7F2` |
| Logo | `docs/assets/logo.jpeg` only (circle crop + scale in UI) |
| Pages source | [`docs/`](./docs/) on `main` |
| Brand lock | [`docs/BRAND.md`](./docs/BRAND.md) |
| Catalog | 54 electronic designs · 7 categories |

Not honey / food / Abu Ezz. Not a generic assets marketplace. Not “Pinterest clone” marketing.

---

## Optional: SwiftUI scaffold (separate)

The repo also contains an older **Designer Assets** SwiftUI iOS scaffold under `DesignerAssets/` (iOS 17+, XcodeGen). That scaffold’s violet tokens (`#5B4DFF`) are **not** the live SEDRA web brand — the GitHub Pages site uses forest/mint only.

### Run scaffold (Mac)
```bash
cd DesignerAssets
brew install xcodegen   # once
xcodegen generate
open DesignerAssets.xcodeproj
```

See `project.yml` and `Scripts/generate-xcodeproj.sh`.
