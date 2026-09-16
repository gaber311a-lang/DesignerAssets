/* Designer Assets — coherent catalog + type-matched generated media */
(function () {
  "use strict";

  const TYPES = {
    image: { label: "صور", order: 0 },
    sticker: { label: "ستيكرات", order: 1 },
    accessory: { label: "ملحقات", order: 2 },
    idea: { label: "أفكار", order: 3 },
  };

  const CHIPS = [
    { id: "all", label: "الكل" },
    { id: "image", label: "صور" },
    { id: "sticker", label: "ستيكرات" },
    { id: "accessory", label: "ملحقات" },
    { id: "idea", label: "أفكار" },
  ];

  const SECTION_ORDER = ["image", "sticker", "accessory", "idea"];

  /* Intentional catalog IA:
     خلفيات (صور) → ستيكرات → إطارات/ملحقات → أفكار محتوى
     Premium/locked used sparingly. */
  const SAMPLES = [
    // —— صور / خلفيات (5)
    {
      title: "خلفية بنفسجية ناعمة",
      type: "image",
      tags: ["خلفية", "تدرج", "بنفسجي"],
      isPremium: false,
      isLocked: false,
      format: "PNG",
      aspect: "1:1",
      palette: ["#6B5CFF", "#B8A9FF", "#EDE9FF"],
      motif: "soft-gradient",
    },
    {
      title: "خلفية غروب دافئة",
      type: "image",
      tags: ["خلفية", "غروب", "دافئ"],
      isPremium: false,
      isLocked: false,
      format: "JPG",
      aspect: "16:9",
      palette: ["#FF6B35", "#FF9A5A", "#FFD4A8"],
      motif: "sunset",
    },
    {
      title: "خلفية رخام أبيض",
      type: "image",
      tags: ["خلفية", "رخام", "فاخر"],
      isPremium: true,
      isLocked: false,
      format: "HEIC",
      aspect: "4:3",
      palette: ["#F5F3F0", "#E4E0DC", "#C9C2BA"],
      motif: "marble",
    },
    {
      title: "نمط هندسي أزرق",
      type: "image",
      tags: ["خلفية", "هندسي", "أزرق"],
      isPremium: false,
      isLocked: false,
      format: "JPG",
      aspect: "1:1",
      palette: ["#1E4D8C", "#3A7BD5", "#A8D0FF"],
      motif: "geo",
    },
    {
      title: "نسيج قماش ناعم",
      type: "image",
      tags: ["خلفية", "نسيج", "ملمس"],
      isPremium: false,
      isLocked: false,
      format: "PNG",
      aspect: "1:1",
      palette: ["#D4C4B0", "#E8DCC8", "#BFA890"],
      motif: "fabric",
    },

    // —— ستيكرات (4)
    {
      title: "ستيكر نجمة ذهبية",
      type: "sticker",
      tags: ["ستيكر", "نجمة", "ذهبي"],
      isPremium: false,
      isLocked: false,
      format: "PNG",
      aspect: "1:1",
      palette: ["#F5C542", "#FFE9A0", "#C9921A"],
      motif: "star",
    },
    {
      title: "ستيكر قلب وردي",
      type: "sticker",
      tags: ["ستيكر", "قلب", "وردي"],
      isPremium: false,
      isLocked: false,
      format: "PNG",
      aspect: "1:1",
      palette: ["#FF5A7A", "#FFB3C1", "#E8385A"],
      motif: "heart",
    },
    {
      title: "ستيكر قهوة",
      type: "sticker",
      tags: ["ستيكر", "قهوة", "لطيف"],
      isPremium: false,
      isLocked: false,
      format: "PNG",
      aspect: "1:1",
      palette: ["#8B5E3C", "#D4A574", "#F5E6D3"],
      motif: "coffee",
    },
    {
      title: "ستيكر تاج ملكي",
      type: "sticker",
      tags: ["ستيكر", "تاج", "ملكي"],
      isPremium: true,
      isLocked: true,
      format: "PNG",
      aspect: "1:1",
      palette: ["#E8C547", "#FFF1A8", "#9A7420"],
      motif: "crown",
    },

    // —— ملحقات / إطارات (5)
    {
      title: "إطار إنستغرام",
      type: "accessory",
      tags: ["إطار", "سوشيال", "إنستغرام"],
      isPremium: false,
      isLocked: false,
      format: "SVG",
      aspect: "9:16",
      palette: ["#5B4DFF", "#EEEDFF", "#2A2750"],
      motif: "frame",
    },
    {
      title: "شارة خصم",
      type: "accessory",
      tags: ["شارة", "خصم", "بيع"],
      isPremium: false,
      isLocked: false,
      format: "PNG",
      aspect: "1:1",
      palette: ["#E23B4A", "#FF8A95", "#FFFFFF"],
      motif: "badge",
    },
    {
      title: "مجموعة أيقونات UI",
      type: "accessory",
      tags: ["أيقونات", "UI", "واجهة"],
      isPremium: true,
      isLocked: false,
      format: "SVG",
      aspect: "1:1",
      palette: ["#5B4DFF", "#8B82FF", "#EEEDFF"],
      motif: "icons",
    },
    {
      title: "شريط زخرفي عربي",
      type: "accessory",
      tags: ["زخرفة", "عربي", "شريط"],
      isPremium: false,
      isLocked: false,
      format: "SVG",
      aspect: "16:9",
      palette: ["#0D7377", "#32E0C4", "#14919B"],
      motif: "ornament",
    },
    {
      title: "شبكة تخطيط بوست",
      type: "accessory",
      tags: ["تخطيط", "شبكة", "بوست"],
      isPremium: false,
      isLocked: false,
      format: "PDF",
      aspect: "1:1",
      palette: ["#3D3D50", "#A0A0B2", "#EEEDFF"],
      motif: "grid",
    },

    // —— أفكار محتوى (4)
    {
      title: "فكرة بوست رمضان",
      type: "idea",
      tags: ["فكرة", "رمضان", "بوست"],
      isPremium: false,
      isLocked: false,
      format: "PDF",
      aspect: "4:3",
      palette: ["#1A2744", "#C9A227", "#F5E6C8"],
      motif: "ramadan",
    },
    {
      title: "لوحة ألوان سعودية",
      type: "idea",
      tags: ["فكرة", "ألوان", "سعودي"],
      isPremium: false,
      isLocked: false,
      format: "PDF",
      aspect: "16:9",
      palette: ["#006C35", "#FFFFFF", "#C8102E"],
      motif: "saudi-palette",
    },
    {
      title: "فكرة كوفر يوتيوب",
      type: "idea",
      tags: ["فكرة", "يوتيوب", "كوفر"],
      isPremium: false,
      isLocked: false,
      format: "JPG",
      aspect: "16:9",
      palette: ["#FF0000", "#282828", "#FFFFFF"],
      motif: "yt-cover",
    },
    {
      title: "فكرة ستوري متجر",
      type: "idea",
      tags: ["فكرة", "ستوري", "متجر"],
      isPremium: false,
      isLocked: false,
      format: "PNG",
      aspect: "9:16",
      palette: ["#5B4DFF", "#FF6B9D", "#FFF5F8"],
      motif: "story",
    },
  ];

  function formatCount(n) {
    if (n >= 1000) return (n / 1000).toFixed(1) + "k";
    return String(n);
  }

  function escapeXml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function shortTitle(title, max) {
    max = max || 14;
    if (title.length <= max) return title;
    return title.slice(0, max - 1) + "…";
  }

  /* ——— Type-specific SVG generators (title always on media, RTL) ——— */

  function svgImage(a) {
    const [c1, c2, c3] = a.palette;
    const t = escapeXml(shortTitle(a.title, 16));
    let body = "";
    if (a.motif === "soft-gradient") {
      body = `
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="${c1}"/>
            <stop offset="55%" stop-color="${c2}"/>
            <stop offset="100%" stop-color="${c3}"/>
          </linearGradient>
          <radialGradient id="blob" cx="30%" cy="25%" r="50%">
            <stop offset="0%" stop-color="#fff" stop-opacity="0.35"/>
            <stop offset="100%" stop-color="#fff" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <rect width="400" height="400" fill="url(#g)"/>
        <circle cx="320" cy="80" r="120" fill="url(#blob)"/>
        <circle cx="60" cy="340" r="90" fill="${c3}" opacity="0.45"/>`;
    } else if (a.motif === "sunset") {
      body = `
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#2B1B4D"/>
            <stop offset="40%" stop-color="${c1}"/>
            <stop offset="70%" stop-color="${c2}"/>
            <stop offset="100%" stop-color="${c3}"/>
          </linearGradient>
        </defs>
        <rect width="400" height="400" fill="url(#g)"/>
        <circle cx="200" cy="210" r="54" fill="#FFE08A"/>
        <ellipse cx="200" cy="320" rx="180" ry="28" fill="${c1}" opacity="0.25"/>`;
    } else if (a.motif === "marble") {
      body = `
        <rect width="400" height="400" fill="${c1}"/>
        <path d="M0 80 Q100 40 180 100 T360 60 L400 90 Q280 140 200 110 T0 160 Z" fill="${c2}" opacity="0.7"/>
        <path d="M0 220 Q120 180 220 240 T400 200 L400 240 Q280 280 180 250 T0 280 Z" fill="${c3}" opacity="0.35"/>
        <path d="M40 0 Q80 120 60 400" stroke="${c3}" stroke-width="1.5" fill="none" opacity="0.4"/>
        <path d="M280 0 Q300 160 260 400" stroke="${c2}" stroke-width="1.2" fill="none" opacity="0.5"/>`;
    } else if (a.motif === "geo") {
      body = `
        <rect width="400" height="400" fill="${c1}"/>
        <g opacity="0.9">
          <polygon points="0,0 200,0 0,200" fill="${c2}"/>
          <polygon points="400,0 400,200 200,0" fill="${c3}" opacity="0.55"/>
          <polygon points="0,400 0,220 180,400" fill="${c3}" opacity="0.4"/>
          <polygon points="220,400 400,400 400,220" fill="${c2}" opacity="0.7"/>
          <rect x="140" y="140" width="120" height="120" fill="none" stroke="${c3}" stroke-width="3" opacity="0.8"/>
        </g>`;
    } else {
      /* fabric */
      body = `
        <defs>
          <pattern id="weave" width="16" height="16" patternUnits="userSpaceOnUse">
            <rect width="16" height="16" fill="${c1}"/>
            <path d="M0 0h16M0 8h16M0 0v16M8 0v16" stroke="${c2}" stroke-width="0.8" opacity="0.6"/>
          </pattern>
        </defs>
        <rect width="400" height="400" fill="url(#weave)"/>
        <rect width="400" height="400" fill="${c3}" opacity="0.12"/>`;
    }
    return wrapCardSvg(body, t, "#FFFFFF", true);
  }

  function svgSticker(a) {
    const [c1, c2, c3] = a.palette;
    const t = escapeXml(shortTitle(a.title, 14));
    let icon = "";
    if (a.motif === "star") {
      icon = `<polygon points="200,95 218,155 282,155 230,192 248,252 200,218 152,252 170,192 118,155 182,155" fill="${c1}" stroke="${c3}" stroke-width="4"/>
        <circle cx="200" cy="185" r="10" fill="${c2}"/>`;
    } else if (a.motif === "heart") {
      icon = `<path d="M200 268 C200 268 110 210 110 155 C110 125 132 108 158 108 C176 108 192 118 200 132 C208 118 224 108 242 108 C268 108 290 125 290 155 C290 210 200 268 200 268 Z" fill="${c1}" stroke="${c3}" stroke-width="4"/>
        <ellipse cx="165" cy="148" rx="14" ry="10" fill="${c2}" opacity="0.55"/>`;
    } else if (a.motif === "coffee") {
      icon = `
        <rect x="145" y="145" width="110" height="100" rx="12" fill="${c1}" stroke="${c3}" stroke-width="4"/>
        <path d="M255 165 h22 a22 22 0 0 1 0 44 h-22" fill="none" stroke="${c3}" stroke-width="6"/>
        <ellipse cx="200" cy="145" rx="50" ry="12" fill="${c2}"/>
        <path d="M175 120 q10 -18 0 -28 M200 118 q10 -20 0 -32 M225 120 q10 -18 0 -28" fill="none" stroke="${c3}" stroke-width="3" stroke-linecap="round" opacity="0.7"/>
        <rect x="160" y="250" width="80" height="10" rx="4" fill="${c3}"/>`;
    } else {
      /* crown */
      icon = `<path d="M120 230 L130 140 L170 190 L200 120 L230 190 L270 140 L280 230 Z" fill="${c1}" stroke="${c3}" stroke-width="4" stroke-linejoin="round"/>
        <rect x="120" y="230" width="160" height="22" rx="4" fill="${c3}"/>
        <circle cx="130" cy="138" r="8" fill="${c2}"/>
        <circle cx="200" cy="118" r="9" fill="${c2}"/>
        <circle cx="270" cy="138" r="8" fill="${c2}"/>`;
    }
    const body = `
      <defs>
        <pattern id="dots" width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.4" fill="#C8C8D4" opacity="0.55"/>
        </pattern>
      </defs>
      <rect width="400" height="400" fill="#F7F7FA"/>
      <rect width="400" height="400" fill="url(#dots)"/>
      <circle cx="200" cy="185" r="118" fill="#FFFFFF" stroke="#E2E2EA" stroke-width="2"/>
      ${icon}`;
    return wrapCardSvg(body, t, "#12121A", false);
  }

  function svgAccessory(a) {
    const [c1, c2, c3] = a.palette;
    const t = escapeXml(shortTitle(a.title, 14));
    let mid = "";
    if (a.motif === "frame") {
      mid = `
        <rect x="70" y="55" width="260" height="250" rx="18" fill="none" stroke="${c1}" stroke-width="10"/>
        <rect x="90" y="75" width="220" height="210" rx="10" fill="${c2}"/>
        <circle cx="200" cy="160" r="36" fill="none" stroke="${c1}" stroke-width="6" opacity="0.5"/>
        <rect x="130" y="230" width="140" height="10" rx="5" fill="${c1}" opacity="0.35"/>`;
    } else if (a.motif === "badge") {
      mid = `
        <circle cx="200" cy="175" r="95" fill="${c1}"/>
        <circle cx="200" cy="175" r="78" fill="none" stroke="${c2}" stroke-width="4" stroke-dasharray="8 6"/>
        <text x="200" y="168" text-anchor="middle" font-family="system-ui,sans-serif" font-size="42" font-weight="800" fill="#fff">٪٥٠</text>
        <text x="200" y="202" text-anchor="middle" font-family="system-ui,sans-serif" font-size="16" font-weight="600" fill="#fff" opacity="0.9">خصم</text>`;
    } else if (a.motif === "icons") {
      mid = `
        <g fill="none" stroke="${c1}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
          <rect x="80" y="90" width="70" height="70" rx="14" fill="${c2}"/>
          <path d="M100 125 h30 M115 110 v30" stroke="${c1}"/>
          <rect x="165" y="90" width="70" height="70" rx="14" fill="${c2}"/>
          <circle cx="200" cy="125" r="16" stroke="${c1}"/>
          <rect x="250" y="90" width="70" height="70" rx="14" fill="${c2}"/>
          <path d="M270 140 l15 -25 15 25" stroke="${c1}"/>
          <rect x="122" y="175" width="70" height="70" rx="14" fill="${c2}"/>
          <path d="M142 210 h30" stroke="${c1}"/>
          <rect x="208" y="175" width="70" height="70" rx="14" fill="${c2}"/>
          <path d="M228 195 l30 30 M258 195 l-30 30" stroke="${c1}"/>
        </g>`;
    } else if (a.motif === "ornament") {
      mid = `
        <rect x="40" y="150" width="320" height="60" rx="8" fill="${c1}"/>
        <path d="M70 180 Q100 150 130 180 T190 180 T250 180 T310 180 T340 180" fill="none" stroke="${c2}" stroke-width="4"/>
        <circle cx="200" cy="180" r="14" fill="${c2}"/>
        <circle cx="130" cy="180" r="7" fill="${c2}" opacity="0.8"/>
        <circle cx="270" cy="180" r="7" fill="${c2}" opacity="0.8"/>`;
    } else {
      /* grid */
      mid = `
        <rect x="70" y="70" width="260" height="220" rx="8" fill="#fff" stroke="${c1}" stroke-width="3"/>
        <path d="M70 143 h260 M70 216 h260 M157 70 v220 M244 70 v220" stroke="${c2}" stroke-width="1.5" opacity="0.7"/>
        <rect x="80" y="80" width="67" height="53" fill="${c3}" opacity="0.5"/>
        <rect x="167" y="153" width="67" height="53" fill="${c1}" opacity="0.2"/>`;
    }
    const body = `
      <rect width="400" height="400" fill="#EEEDFF"/>
      <rect x="24" y="24" width="352" height="352" rx="20" fill="#FFFFFF" stroke="#E2E2EA" stroke-width="1.5"/>
      ${mid}`;
    return wrapCardSvg(body, t, "#12121A", false);
  }

  function svgIdea(a) {
    const [c1, c2, c3] = a.palette;
    const t = escapeXml(shortTitle(a.title, 16));
    let board = "";
    if (a.motif === "ramadan") {
      board = `
        <rect width="400" height="400" fill="${c1}"/>
        <path d="M260 90 a70 70 0 1 0 0 140 a55 55 0 1 1 0 -140" fill="${c2}"/>
        <circle cx="300" cy="100" r="3" fill="${c3}"/>
        <circle cx="320" cy="140" r="2" fill="${c3}"/>
        <circle cx="280" cy="160" r="2.5" fill="${c3}"/>
        <rect x="48" y="250" width="304" height="100" rx="12" fill="${c3}" opacity="0.92"/>
        <text x="200" y="292" text-anchor="middle" font-family="system-ui,sans-serif" font-size="22" font-weight="700" fill="${c1}" direction="rtl">${t}</text>
        <text x="200" y="322" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" fill="${c1}" opacity="0.7" direction="rtl">مودبورد · فكرة محتوى</text>`;
      return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">${board}</svg>`
      )}`;
    }
    if (a.motif === "saudi-palette") {
      board = `
        <rect width="400" height="400" fill="#F4F4F8"/>
        <rect x="40" y="50" width="320" height="200" rx="16" fill="#fff" stroke="#E2E2EA"/>
        <rect x="60" y="70" width="80" height="160" rx="8" fill="${c1}"/>
        <rect x="160" y="70" width="80" height="160" rx="8" fill="${c2}" stroke="#E2E2EA"/>
        <rect x="260" y="70" width="80" height="160" rx="8" fill="${c3}"/>
        <text x="200" y="300" text-anchor="middle" font-family="system-ui,sans-serif" font-size="20" font-weight="700" fill="#12121A" direction="rtl">${t}</text>
        <text x="200" y="330" text-anchor="middle" font-family="system-ui,sans-serif" font-size="13" fill="#5C5C6E" direction="rtl">لوحة ألوان · هوية</text>`;
      return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">${board}</svg>`
      )}`;
    }
    if (a.motif === "yt-cover") {
      board = `
        <rect width="400" height="400" fill="${c2}"/>
        <rect x="30" y="100" width="340" height="160" rx="8" fill="#111"/>
        <rect x="30" y="100" width="8" height="160" fill="${c1}"/>
        <circle cx="200" cy="180" r="28" fill="${c1}"/>
        <polygon points="192,168 216,180 192,192" fill="#fff"/>
        <text x="200" y="310" text-anchor="middle" font-family="system-ui,sans-serif" font-size="20" font-weight="700" fill="#fff" direction="rtl">${t}</text>
        <text x="200" y="338" text-anchor="middle" font-family="system-ui,sans-serif" font-size="12" fill="#A0A0B2" direction="rtl">غلاف فيديو · ١٦:٩</text>`;
      return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">${board}</svg>`
      )}`;
    }
    /* story */
    board = `
      <defs>
        <linearGradient id="sg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${c1}"/>
          <stop offset="100%" stop-color="${c2}"/>
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill="${c3}"/>
      <rect x="110" y="40" width="180" height="280" rx="20" fill="url(#sg)"/>
      <rect x="122" y="55" width="156" height="250" rx="12" fill="#fff" opacity="0.95"/>
      <rect x="140" y="80" width="120" height="70" rx="8" fill="${c1}" opacity="0.2"/>
      <rect x="140" y="165" width="90" height="10" rx="4" fill="${c1}" opacity="0.35"/>
      <rect x="140" y="185" width="70" height="8" rx="4" fill="${c2}" opacity="0.3"/>
      <text x="200" y="355" text-anchor="middle" font-family="system-ui,sans-serif" font-size="18" font-weight="700" fill="#12121A" direction="rtl">${t}</text>`;
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">${board}</svg>`
    )}`;
  }

  function wrapCardSvg(body, titleEscaped, titleColor, lightOverlay) {
    const bar = lightOverlay
      ? `<rect y="320" width="400" height="80" fill="url(#fade)"/>
         <defs><linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
           <stop offset="0%" stop-color="#000" stop-opacity="0"/>
           <stop offset="100%" stop-color="#000" stop-opacity="0.45"/>
         </linearGradient></defs>`
      : "";
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
      ${body}
      ${bar}
      <text x="200" y="362" text-anchor="middle" font-family="system-ui,-apple-system,'SF Arabic',sans-serif"
        font-size="20" font-weight="700" fill="${titleColor}" direction="rtl">${titleEscaped}</text>
    </svg>`;
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  }

  function buildMediaUrl(asset) {
    if (asset.type === "image") return svgImage(asset);
    if (asset.type === "sticker") return svgSticker(asset);
    if (asset.type === "accessory") return svgAccessory(asset);
    return svgIdea(asset);
  }

  const CROWN_SVG =
    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 17h18l-1.5-9-4.5 3.5L12 5l-3 6.5L4.5 8 3 17zm2 2h14v1.5H5V19z"/></svg>';
  const LOCK_SVG =
    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17 9V7a5 5 0 0 0-10 0v2H5v12h14V9h-2zm-8 0V7a3 3 0 0 1 6 0v2H9z"/></svg>';

  const TYPE_ICON = {
    image:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.5" cy="10" r="1.5"/><path d="M21 16l-5.5-5.5L7 19"/></svg>',
    accessory:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l2.2 4.5 5 .7-3.6 3.5.9 5L12 14.8 7.5 16.7l.9-5L4.8 8.2l5-.7L12 3z"/></svg>',
    sticker:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8.5 10h.01M15.5 10h.01M8.5 15c1.2 1.2 2.8 1.8 3.5 1.8s2.3-.6 3.5-1.8"/></svg>',
    idea:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3 11c.4.5.7 1.1.8 1.7h4.4c.1-.6.4-1.2.8-1.7A6 6 0 0 0 12 3z"/></svg>',
  };

  const assets = SAMPLES.map((s, i) => {
    const asset = {
      id: i + 1,
      title: s.title,
      type: s.type,
      tags: s.tags,
      isPremium: s.isPremium,
      isLocked: s.isLocked,
      format: s.format,
      aspect: s.aspect,
      palette: s.palette,
      motif: s.motif,
      downloads: 180 + i * 97,
      saves: 28 + i * 19,
    };
    asset.imageUrl = buildMediaUrl(asset);
    return asset;
  });

  assets.forEach((a) => {
    a.similar = assets
      .filter((o) => o.id !== a.id && o.type === a.type)
      .slice(0, 6)
      .map((o) => o.id);
  });

  const state = {
    tab: "library",
    chip: "all",
    query: "",
    saved: new Set([1, 6, 10, 15]),
    downloading: new Set(),
    detailId: null,
    loadState: "loaded",
    toastTimer: null,
  };

  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  function filtered() {
    let list = assets.slice();
    if (state.chip !== "all") list = list.filter((a) => a.type === state.chip);
    const q = state.query.trim();
    if (q) {
      const lower = q.toLowerCase();
      list = list.filter(
        (a) =>
          a.title.includes(q) ||
          a.tags.some((t) => t.includes(q)) ||
          TYPES[a.type].label.includes(q) ||
          a.title.toLowerCase().includes(lower)
      );
    }
    return list;
  }

  function showToast(msg) {
    const el = $("#toast");
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(state.toastTimer);
    state.toastTimer = setTimeout(() => el.classList.remove("show"), 2200);
  }

  function mediaHTML(asset) {
    return `
      <div class="media-ph media-ph--${asset.type}" aria-hidden="true">${TYPE_ICON[asset.type] || TYPE_ICON.image}</div>
      <img class="media-fill" src="${asset.imageUrl}" alt="${escapeXml(asset.title)}" loading="lazy" decoding="async"
        onload="this.style.opacity=1"
        onerror="this.style.opacity=0"
        style="opacity:0;transition:opacity .2s ease" />
    `;
  }

  function cardHTML(asset) {
    const saved = state.saved.has(asset.id);
    const downloading = state.downloading.has(asset.id);
    const stats = `${formatCount(asset.downloads)} تحميل · ${formatCount(asset.saves)} حفظ`;
    return `
      <article class="asset-card" data-id="${asset.id}" role="button" tabindex="0" aria-label="${asset.title}">
        <div class="card-media">
          ${mediaHTML(asset)}
          <div class="card-badges">
            ${asset.isPremium ? `<span class="badge-circle badge-premium" title="مدفوع">${CROWN_SVG}</span>` : ""}
            ${asset.isLocked ? `<span class="badge-circle badge-locked" title="مقفل">${LOCK_SVG}</span>` : ""}
          </div>
          ${
            downloading
              ? `<div class="download-ring" aria-label="جارٍ التنزيل">
                  <div class="ring">
                    <svg viewBox="0 0 28 28" aria-hidden="true">
                      <circle class="track" cx="14" cy="14" r="12"></circle>
                      <circle class="prog" cx="14" cy="14" r="12"></circle>
                    </svg>
                  </div>
                </div>`
              : ""
          }
        </div>
        <div class="card-meta">
          <div class="card-title-row">
            <div class="card-title">${asset.title}</div>
            <span class="type-chip">${TYPES[asset.type].label}</span>
          </div>
          <div class="card-row">
            <span class="card-stats">${stats}</span>
            <button class="save-btn ${saved ? "saved" : ""}" data-save="${asset.id}" aria-label="${saved ? "إزالة من المحفوظات" : "حفظ"}" type="button">
              ${bookmarkSVG(saved)}
            </button>
          </div>
        </div>
      </article>
    `;
  }

  function bookmarkSVG(filled) {
    if (filled) {
      return `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v17l-6-3.5L6 21V4z"/></svg>`;
    }
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 3.5h10a1.5 1.5 0 0 1 1.5 1.5v15.2l-6.5-3.6-6.5 3.6V5A1.5 1.5 0 0 1 7 3.5z"/></svg>`;
  }

  function skeletonHTML() {
    return Array.from({ length: 6 })
      .map(
        () => `
      <div class="asset-card skeleton-card" aria-hidden="true">
        <div class="card-media"></div>
        <div class="card-meta">
          <div class="skeleton-line med"></div>
          <div class="skeleton-line short"></div>
        </div>
      </div>`
      )
      .join("");
  }

  function sectionHeaderHTML(type) {
    return `<div class="section-header" role="heading" aria-level="2">
      <span class="section-header-icon">${TYPE_ICON[type]}</span>
      <span>${TYPES[type].label}</span>
    </div>`;
  }

  function renderLibrary() {
    const grid = $("#library-grid");
    const end = $("#library-end");
    const empty = $("#library-empty");

    if (state.loadState === "loading") {
      grid.className = "grid";
      grid.innerHTML = skeletonHTML();
      end.hidden = true;
      empty.hidden = true;
      return;
    }

    const list = filtered();
    if (!list.length) {
      grid.className = "grid";
      grid.innerHTML = "";
      empty.hidden = false;
      end.hidden = true;
      return;
    }
    empty.hidden = true;

    const showSections = state.chip === "all" && !state.query.trim();
    if (showSections) {
      grid.className = "library-sections";
      let html = "";
      SECTION_ORDER.forEach((type) => {
        const group = list.filter((a) => a.type === type);
        if (!group.length) return;
        html += sectionHeaderHTML(type);
        html += `<div class="grid section-grid">${group.map(cardHTML).join("")}</div>`;
      });
      grid.innerHTML = html;
    } else {
      grid.className = "grid";
      grid.innerHTML = list.map(cardHTML).join("");
    }

    end.hidden = false;
    bindCardEvents(grid);
  }

  function renderSaved() {
    const grid = $("#saved-grid");
    const empty = $("#saved-empty");
    const list = assets.filter((a) => state.saved.has(a.id));
    if (!list.length) {
      grid.innerHTML = "";
      empty.hidden = false;
      return;
    }
    empty.hidden = true;
    grid.className = "grid";
    grid.innerHTML = list.map(cardHTML).join("");
    bindCardEvents(grid);
  }

  function bindCardEvents(root) {
    $$(".asset-card", root).forEach((card) => {
      card.addEventListener("click", (e) => {
        if (e.target.closest("[data-save]")) return;
        openDetail(Number(card.dataset.id));
      });
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openDetail(Number(card.dataset.id));
        }
      });
    });
    $$("[data-save]", root).forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleSave(Number(btn.dataset.save));
      });
    });
  }

  function toggleSave(id) {
    if (state.saved.has(id)) {
      state.saved.delete(id);
      showToast("أُزيل من المحفوظات");
    } else {
      state.saved.add(id);
      showToast("تم الحفظ");
    }
    renderAll();
    if (state.detailId === id) renderDetail();
  }

  function openDetail(id) {
    state.detailId = id;
    $("#app").classList.add("detail-open");
    $("#screen-library").classList.remove("active");
    $("#screen-saved").classList.remove("active");
    $("#screen-detail").classList.add("active");
    renderDetail();
    $("#detail-scroll").scrollTop = 0;
  }

  function closeDetail() {
    state.detailId = null;
    $("#app").classList.remove("detail-open");
    $("#screen-detail").classList.remove("active");
    if (state.tab === "saved") {
      $("#screen-saved").classList.add("active");
    } else {
      $("#screen-library").classList.add("active");
    }
    renderAll();
  }

  function renderDetail() {
    const asset = assets.find((a) => a.id === state.detailId);
    if (!asset) return;
    const saved = state.saved.has(asset.id);
    const root = $("#screen-detail");
    $("#detail-title", root).textContent = asset.title;
    $("#detail-preview", root).innerHTML = mediaHTML(asset);

    $("#detail-chips", root).innerHTML = `
      <span class="meta-pill brand">${TYPES[asset.type].label}</span>
      <span class="meta-pill">${asset.format}</span>
      <span class="meta-pill">${asset.aspect}</span>
      ${asset.isPremium ? `<span class="meta-pill premium">${CROWN_SVG} مدفوع</span>` : ""}
      ${asset.isLocked ? `<span class="meta-pill">${LOCK_SVG} مقفل</span>` : ""}
    `;
    $("#detail-stats", root).textContent =
      `${formatCount(asset.downloads)} تحميل · ${formatCount(asset.saves)} حفظ`;

    $("#detail-tags", root).innerHTML = asset.tags
      .map((t) => `<button type="button" class="tag" data-tag="${t}">${t}</button>`)
      .join("");
    $$("[data-tag]", root).forEach((el) => {
      el.addEventListener("click", () => {
        state.query = el.dataset.tag;
        $("#search-input").value = state.query;
        updateClearBtn();
        closeDetail();
        state.tab = "library";
        switchTab("library");
        renderLibrary();
      });
    });

    const similar = asset.similar.map((id) => assets.find((a) => a.id === id)).filter(Boolean);
    const simEl = $("#detail-similar", root);
    if (!similar.length) {
      simEl.innerHTML = "";
      $("#similar-section", root).hidden = true;
    } else {
      $("#similar-section", root).hidden = false;
      simEl.innerHTML = similar
        .map(
          (s) => `
        <button type="button" class="similar-item" data-similar="${s.id}">
          <div class="thumb">
            <div class="media-ph media-ph--${s.type}" aria-hidden="true">${TYPE_ICON[s.type]}</div>
            <img class="media-fill" src="${s.imageUrl}" alt="" loading="lazy" decoding="async"
              onload="this.style.opacity=1"
              onerror="this.style.opacity=0"
              style="opacity:0;transition:opacity .2s ease" />
          </div>
          <div class="caption">${s.title}</div>
        </button>`
        )
        .join("");
      $$("[data-similar]", root).forEach((btn) => {
        btn.addEventListener("click", () => openDetail(Number(btn.dataset.similar)));
      });
    }

    const saveBtn = $("#detail-save");
    saveBtn.classList.toggle("saved", saved);
    saveBtn.innerHTML = bookmarkSVG(saved);
    saveBtn.setAttribute("aria-label", saved ? "إزالة من المحفوظات" : "حفظ");
  }

  function renderChips() {
    const el = $("#chips");
    el.innerHTML = CHIPS.map(
      (c) =>
        `<button type="button" class="chip ${state.chip === c.id ? "selected" : ""}" role="tab" aria-selected="${state.chip === c.id}" data-chip="${c.id}">${c.label}</button>`
    ).join("");
    $$("[data-chip]", el).forEach((btn) => {
      btn.addEventListener("click", () => {
        state.chip = btn.dataset.chip;
        renderChips();
        renderLibrary();
      });
    });
  }

  function renderAll() {
    renderLibrary();
    renderSaved();
  }

  function switchTab(tab) {
    state.tab = tab;
    $$(".tab-bar button").forEach((b) => b.classList.toggle("active", b.dataset.tab === tab));
    $("#screen-library").classList.toggle("active", tab === "library" && !state.detailId);
    $("#screen-saved").classList.toggle("active", tab === "saved" && !state.detailId);
  }

  function updateClearBtn() {
    const clear = $("#search-clear");
    if (state.query) clear.removeAttribute("hidden");
    else clear.setAttribute("hidden", "");
  }

  function applyTheme(mode) {
    const root = document.documentElement;
    if (mode === "system") {
      root.removeAttribute("data-theme");
      localStorage.removeItem("da-theme");
    } else {
      root.setAttribute("data-theme", mode);
      localStorage.setItem("da-theme", mode);
    }
    updateThemeIcon();
  }

  function updateThemeIcon() {
    const btn = $("#theme-toggle");
    const current = document.documentElement.getAttribute("data-theme");
    const dark =
      current === "dark" ||
      (!current && window.matchMedia("(prefers-color-scheme: dark)").matches);
    btn.innerHTML = dark
      ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>`
      : `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 14.5A8.5 8.5 0 1 1 9.5 3a7 7 0 0 0 11.5 11.5z"/></svg>`;
    btn.setAttribute("aria-label", dark ? "الوضع الفاتح" : "الوضع الداكن");
  }

  function init() {
    const savedTheme = localStorage.getItem("da-theme");
    if (savedTheme) document.documentElement.setAttribute("data-theme", savedTheme);

    renderChips();

    state.loadState = "loading";
    renderLibrary();
    setTimeout(() => {
      state.loadState = "loaded";
      renderAll();
    }, 420);

    const search = $("#search-input");
    let debounce;
    search.addEventListener("input", () => {
      state.query = search.value;
      updateClearBtn();
      clearTimeout(debounce);
      debounce = setTimeout(renderLibrary, 300);
    });
    $("#search-clear").addEventListener("click", () => {
      search.value = "";
      state.query = "";
      updateClearBtn();
      renderLibrary();
      search.focus();
    });

    $$(".tab-bar button").forEach((btn) => {
      btn.addEventListener("click", () => {
        if (state.detailId) closeDetail();
        switchTab(btn.dataset.tab);
        renderAll();
      });
    });

    $("#back-btn").addEventListener("click", closeDetail);

    $("#detail-save").addEventListener("click", () => {
      if (state.detailId) toggleSave(state.detailId);
    });

    $("#detail-download").addEventListener("click", () => {
      const id = state.detailId;
      if (!id) return;
      const asset = assets.find((a) => a.id === id);
      if (asset && asset.isLocked) {
        showToast("هذا الأصل مقفل");
        return;
      }
      state.downloading.add(id);
      renderDetail();
      renderAll();
      showToast("جارٍ التنزيل…");
      setTimeout(() => {
        state.downloading.delete(id);
        showToast("تم التنزيل");
        if (state.detailId === id) renderDetail();
        renderAll();
      }, 1400);
    });

    $("#theme-toggle").addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (!current) {
        applyTheme(systemDark ? "light" : "dark");
      } else if (current === "dark") {
        applyTheme("light");
      } else {
        applyTheme("dark");
      }
    });

    updateThemeIcon();
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", updateThemeIcon);

    window.addEventListener("popstate", () => {
      if (state.detailId) closeDetail();
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
