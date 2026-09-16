# SEDRA / سدرة — تصاميم إلكترونية

**Electronic Designs gallery** (not honey, not food). Live on GitHub Pages:

**https://gaber311a-lang.github.io/DesignerAssets/**

Brand: سدرة / SEDRA · tagline **تصاميم إلكترونية · Electronic Designs** · Forest `#003626` · Sage `#CFEDC2` · Stroke `#C7E6BC` · Cream `#F5F7F2`. Official logo only: `docs/assets/logo.jpeg`.

Pages source: [`docs/`](./docs/) on `main`. Brand lock: [`docs/BRAND.md`](./docs/BRAND.md).

---

# Designer Assets / أصول المصمم

SwiftUI iOS scaffold (iOS 17+) for the **Designer Assets** platform — Arabic UI, RTL-ready, Dynamic Type + Dark Mode, design tokens from `DESIGN_BRIEF.md`.

سقالة SwiftUI لتطبيق أصول المصمم — واجهة عربية، جاهزة لـ RTL، Dynamic Type والوضع الداكن، مع توكنات التصميم من الموجز.

---

## Open & Run / فتح وتشغيل

### Requirements / المتطلبات
- macOS with **Xcode 15+** (iOS 17 SDK)
- [XcodeGen](https://github.com/yonaskolb/XcodeGen) — `brew install xcodegen`

### Steps / الخطوات

**English**
1. Clone / copy this folder to your Mac.
2. In Terminal:
   ```bash
   cd DesignerAssets
   brew install xcodegen   # once
   xcodegen generate
   # or: ./Scripts/generate-xcodeproj.sh
   open DesignerAssets.xcodeproj
   ```
3. Select an **iPhone / iPad Simulator** (iOS 17+).
4. Press **⌘R** to build & run.
5. Toggle Dark Mode in Simulator: **Features → Appearance → Dark**.
6. Dynamic Type: **Settings → Accessibility → Display & Text Size → Larger Text**.

**العربية**
1. انسخ المجلد إلى جهاز Mac.
2. في الطرفية:
   ```bash
   cd DesignerAssets
   brew install xcodegen   # مرة واحدة
   xcodegen generate
   open DesignerAssets.xcodeproj
   ```
3. اختر محاكي iPhone أو iPad (iOS 17+).
4. اضغط **⌘R** للبناء والتشغيل.
5. الوضع الداكن من قائمة المحاكي: **Features → Appearance → Dark**.

> **Note:** This repo was authored on Linux, so there is no pre-built `.xcodeproj` binary. `project.yml` + XcodeGen produces a real Xcode project on Mac in one command.

---

## What’s included / ما يتضمنه المشروع

| Area | Details |
|------|---------|
| **Tokens** | Brand / Neutrals / Semantic Light+Dark Asset Catalog + `DAColor` / `Theme` API |
| **Type** | SF Pro / SF Arabic sizes: display→caption (`DATypography`) |
| **Space / Radius / Motion / Elevation** | 4pt scale, sm–xl radius, 150/250/400ms, elevation 0–3 |
| **Shell** | `TabView`: المكتبة + المحفوظات, `layoutDirection` RTL |
| **Library** | LazyVGrid (adaptive 2 / 3–4), sticky header, skeleton / empty / error / end |
| **AssetCard** | 1:1, title, type chip, stats, save/download; pressed 0.98; saved / downloading / locked / premium; contextMenu |
| **Search + Filters** | SearchBar h44, debounce 300ms, filter badge; chips الكل/صور/ملحقات/ستيكرات/أفكار; FilterSheet |
| **Detail** | Preview, meta, tappable tags → search, similar row, sticky Download + Save |
| **Mock data** | 20 assets, offline UI — no backend |

### Out of scope (scaffold)
Real auth, API, admin web, smart search backend, Photos export, sync.

---

## Layout / هيكل المجلدات

```
DesignerAssets/
  README.md
  project.yml                 # XcodeGen → DesignerAssets.xcodeproj
  Package.swift               # optional SPM browsing
  Scripts/generate-xcodeproj.sh
  DesignerAssets/
    App/                      # @main, Info.plist, RootTabView
    DesignSystem/             # Colors, Typography, Spacing, Theme, Components
    Features/Library/         # LibraryView + ViewModel
    Features/Detail/          # AssetDetailView
    Features/Saved/           # SavedView
    Models/                   # Asset, FilterState, MockData
    Resources/
      Assets.xcassets/Colors/ # Light/Dark colorsets (exact brief hex)
      Localizable.xcstrings
      ar.lproj / en.lproj
```

### Key token paths
- `DesignerAssets/DesignSystem/Colors/DAColor.swift`
- `DesignerAssets/DesignSystem/Theme.swift`
- `DesignerAssets/Resources/Assets.xcassets/Colors/*.colorset`

Brand primary Light `#5B4DFF` / Dark `#8B82FF` — matched exactly from the brief.

---

## License / ملاحظة
Internal scaffold for Gaber Hassan / Designer Assets platform. Do not ship with mock-only download behavior.
