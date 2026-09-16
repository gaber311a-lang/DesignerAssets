/* SEDRA / سدرة — Electronic Designs gallery */
(function () {
  "use strict";

  const G = "#003626";
  const S = "#CFEDC2";
  const K = "#C7E6BC";

  const CAT_LABEL = {
    ui: "واجهات",
    mockup: "موكأب",
    template: "قوالب",
    icon: "أيقونات",
    poster: "بوسترات",
    sticker: "ملصقات",
    brand: "هويات",
  };

  const CAT_EN = {
    ui: "UI",
    mockup: "Mockup",
    template: "Template",
    icon: "Icon",
    poster: "Poster",
    sticker: "Sticker",
    brand: "Brand",
  };

  function esc(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /** Unique coherent SVG per design id — Sedra palette only */
  function art(id, title) {
    const t = esc(title);
    const wrap = (vb, body) =>
      `<svg viewBox="${vb}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${t}">${body}</svg>`;
    const bg = (h) => `<rect width="200" height="${h}" fill="${G}"/>`;

    const arts = {
      "ui-dash": wrap(
        "0 0 200 260",
        `${bg(260)}
        <rect x="22" y="24" width="156" height="212" rx="14" fill="none" stroke="${K}" stroke-width="2"/>
        <rect x="34" y="40" width="48" height="188" rx="8" fill="${K}" opacity=".2"/>
        <rect x="42" y="52" width="32" height="6" rx="3" fill="${S}"/>
        <rect x="42" y="70" width="28" height="6" rx="3" fill="${K}" opacity=".6"/>
        <rect x="42" y="88" width="28" height="6" rx="3" fill="${K}" opacity=".4"/>
        <rect x="94" y="40" width="72" height="10" rx="5" fill="${S}"/>
        <rect x="94" y="62" width="72" height="44" rx="8" fill="${K}" opacity=".35"/>
        <rect x="94" y="118" width="32" height="36" rx="8" fill="${S}" opacity=".45"/>
        <rect x="134" y="118" width="32" height="36" rx="8" fill="${K}" opacity=".35"/>
        <rect x="94" y="168" width="72" height="48" rx="8" fill="${K}" opacity=".25"/>`
      ),
      "ui-mobile": wrap(
        "0 0 200 300",
        `${bg(300)}
        <rect x="58" y="28" width="84" height="244" rx="16" fill="none" stroke="${S}" stroke-width="2.5"/>
        <circle cx="100" cy="42" r="3" fill="${K}"/>
        <rect x="70" y="56" width="60" height="8" rx="4" fill="${S}"/>
        <rect x="70" y="76" width="60" height="70" rx="10" fill="${K}" opacity=".3"/>
        <rect x="70" y="158" width="28" height="28" rx="8" fill="${S}" opacity=".5"/>
        <rect x="102" y="158" width="28" height="28" rx="8" fill="${K}" opacity=".4"/>
        <rect x="70" y="198" width="60" height="10" rx="5" fill="${S}" opacity=".7"/>
        <rect x="78" y="248" width="44" height="5" rx="2.5" fill="${K}"/>`
      ),
      "ui-settings": wrap(
        "0 0 200 200",
        `${bg(200)}
        <rect x="30" y="36" width="140" height="128" rx="12" fill="none" stroke="${K}" stroke-width="2"/>
        <circle cx="52" cy="68" r="10" fill="${S}" opacity=".7"/>
        <rect x="72" y="62" width="80" height="8" rx="4" fill="${S}"/>
        <rect x="72" y="76" width="56" height="5" rx="2.5" fill="${K}" opacity=".5"/>
        <line x1="40" y1="100" x2="160" y2="100" stroke="${K}" stroke-width="1" opacity=".5"/>
        <circle cx="52" cy="128" r="10" fill="${K}" opacity=".45"/>
        <rect x="72" y="122" width="80" height="8" rx="4" fill="${K}" opacity=".7"/>
        <rect x="72" y="136" width="48" height="5" rx="2.5" fill="${K}" opacity=".4"/>`
      ),
      "mock-phone": wrap(
        "0 0 200 280",
        `${bg(280)}
        <rect x="55" y="30" width="90" height="190" rx="14" fill="none" stroke="${S}" stroke-width="3"/>
        <rect x="68" y="48" width="64" height="140" rx="4" fill="${K}" opacity=".22"/>
        <rect x="74" y="58" width="36" height="6" rx="3" fill="${S}"/>
        <rect x="74" y="74" width="52" height="36" rx="6" fill="${S}" opacity=".35"/>
        <circle cx="100" cy="200" r="6" fill="${K}"/>
        <ellipse cx="100" cy="245" rx="36" ry="5" fill="${S}" opacity=".18"/>`
      ),
      "mock-tablet": wrap(
        "0 0 200 160",
        `${bg(160)}
        <rect x="24" y="28" width="152" height="104" rx="10" fill="none" stroke="${S}" stroke-width="2.5"/>
        <rect x="36" y="42" width="128" height="76" rx="4" fill="${K}" opacity=".25"/>
        <rect x="44" y="52" width="50" height="8" rx="4" fill="${S}"/>
        <rect x="44" y="70" width="112" height="36" rx="6" fill="${S}" opacity=".3"/>`
      ),
      "mock-browser": wrap(
        "0 0 200 150",
        `${bg(150)}
        <rect x="18" y="28" width="164" height="100" rx="8" fill="none" stroke="${K}" stroke-width="2"/>
        <rect x="18" y="28" width="164" height="22" rx="8" fill="${K}" opacity=".2"/>
        <circle cx="34" cy="39" r="3.5" fill="${S}"/><circle cx="46" cy="39" r="3.5" fill="${K}"/><circle cx="58" cy="39" r="3.5" fill="${K}" opacity=".6"/>
        <rect x="72" y="33" width="90" height="12" rx="6" fill="${G}" stroke="${K}" stroke-width="1"/>
        <rect x="30" y="62" width="70" height="50" rx="6" fill="${S}" opacity=".35"/>
        <rect x="110" y="62" width="60" height="22" rx="4" fill="${K}" opacity=".4"/>
        <rect x="110" y="92" width="60" height="20" rx="4" fill="${K}" opacity=".25"/>`
      ),
      "tpl-social": wrap(
        "0 0 200 240",
        `${bg(240)}
        <rect x="36" y="28" width="128" height="128" rx="10" fill="none" stroke="${S}" stroke-width="2"/>
        <circle cx="100" cy="78" r="22" fill="${S}" opacity=".4"/>
        <rect x="56" y="118" width="88" height="8" rx="4" fill="${S}"/>
        <rect x="68" y="134" width="64" height="6" rx="3" fill="${K}" opacity=".55"/>
        <rect x="36" y="172" width="128" height="40" rx="8" fill="${K}" opacity=".2"/>
        <rect x="48" y="184" width="40" height="16" rx="4" fill="${S}" opacity=".5"/>
        <rect x="96" y="184" width="56" height="16" rx="4" fill="${K}" opacity=".4"/>`
      ),
      "tpl-story": wrap(
        "0 0 200 320",
        `${bg(320)}
        <rect x="48" y="20" width="104" height="280" rx="14" fill="none" stroke="${K}" stroke-width="2"/>
        <rect x="60" y="36" width="80" height="6" rx="3" fill="${S}" opacity=".7"/>
        <rect x="60" y="56" width="80" height="120" rx="8" fill="${K}" opacity=".28"/>
        <rect x="60" y="192" width="60" height="10" rx="5" fill="${S}"/>
        <rect x="60" y="212" width="80" height="6" rx="3" fill="${K}" opacity=".5"/>
        <rect x="60" y="248" width="80" height="28" rx="8" fill="${S}" opacity=".35"/>`
      ),
      "tpl-email": wrap(
        "0 0 200 240",
        `${bg(240)}
        <rect x="30" y="24" width="140" height="192" rx="6" fill="none" stroke="${K}" stroke-width="2"/>
        <rect x="30" y="24" width="140" height="36" fill="${S}" opacity=".35"/>
        <text x="100" y="48" text-anchor="middle" fill="${S}" font-family="Georgia, serif" font-size="11">SEDRA</text>
        <rect x="44" y="76" width="112" height="8" rx="4" fill="${S}" opacity=".6"/>
        <rect x="44" y="94" width="90" height="6" rx="3" fill="${K}" opacity=".45"/>
        <rect x="44" y="114" width="112" height="50" rx="6" fill="${K}" opacity=".25"/>
        <rect x="60" y="180" width="80" height="18" rx="9" fill="${S}" opacity=".7"/>`
      ),
      "ico-set": wrap(
        "0 0 200 200",
        `${bg(200)}
        <circle cx="70" cy="70" r="22" fill="none" stroke="${S}" stroke-width="2.5"/>
        <path d="M70 58v24M58 70h24" stroke="${K}" stroke-width="2.5" stroke-linecap="round"/>
        <rect x="108" y="50" width="40" height="40" rx="8" fill="none" stroke="${S}" stroke-width="2.5"/>
        <path d="M118 70h20M128 60v20" stroke="${K}" stroke-width="2.5" stroke-linecap="round"/>
        <polygon points="70,118 92,150 48,150" fill="none" stroke="${S}" stroke-width="2.5"/>
        <circle cx="128" cy="134" r="20" fill="${S}" opacity=".35"/>
        <circle cx="128" cy="134" r="8" fill="${S}"/>`
      ),
      "ico-nav": wrap(
        "0 0 200 160",
        `${bg(160)}
        <rect x="28" y="100" width="144" height="36" rx="12" fill="${K}" opacity=".2"/>
        <circle cx="56" cy="118" r="8" fill="${S}"/>
        <rect x="88" y="112" width="12" height="12" rx="2" fill="${K}" opacity=".7"/>
        <polygon points="128,112 140,112 134,124" fill="${S}" opacity=".7"/>
        <circle cx="160" cy="118" r="8" fill="none" stroke="${S}" stroke-width="2"/>
        <text x="100" y="60" text-anchor="middle" fill="${S}" font-family="Georgia, serif" font-size="14">nav</text>`
      ),
      "ico-weather": wrap(
        "0 0 200 200",
        `${bg(200)}
        <circle cx="88" cy="88" r="28" fill="${S}" opacity=".55"/>
        <path d="M88 48v12M88 116v12M48 88h12M116 88h12M60 60l8 8M108 108l8 8M108 60l-8 8M60 108l-8 8" stroke="${K}" stroke-width="2.5" stroke-linecap="round"/>
        <ellipse cx="130" cy="130" rx="36" ry="18" fill="${K}" opacity=".35"/>
        <ellipse cx="118" cy="126" rx="22" ry="12" fill="${S}" opacity=".4"/>`
      ),
      "pos-event": wrap(
        "0 0 200 300",
        `${bg(300)}
        <rect x="22" y="22" width="156" height="256" rx="4" fill="none" stroke="${K}" stroke-width="2"/>
        <text x="100" y="80" text-anchor="middle" fill="${S}" font-family="Georgia, serif" font-size="20">SEDRA</text>
        <line x1="55" y1="96" x2="145" y2="96" stroke="${K}" stroke-width="1.5"/>
        <rect x="50" y="120" width="100" height="10" rx="5" fill="${S}" opacity=".6"/>
        <rect x="65" y="142" width="70" height="6" rx="3" fill="${K}" opacity=".45"/>
        <circle cx="100" cy="210" r="36" fill="none" stroke="${S}" stroke-width="2"/>
        <circle cx="100" cy="210" r="14" fill="${S}" opacity=".4"/>
        <text x="100" y="260" text-anchor="middle" fill="${K}" font-family="Georgia, serif" font-size="10">EVENT</text>`
      ),
      "pos-quote": wrap(
        "0 0 200 260",
        `${bg(260)}
        <text x="48" y="90" fill="${S}" font-family="Georgia, serif" font-size="48" opacity=".5">“</text>
        <rect x="48" y="110" width="104" height="8" rx="4" fill="${S}"/>
        <rect x="56" y="130" width="88" height="6" rx="3" fill="${K}" opacity=".55"/>
        <rect x="64" y="148" width="72" height="6" rx="3" fill="${K}" opacity=".35"/>
        <line x1="70" y1="190" x2="130" y2="190" stroke="${S}" stroke-width="1.5"/>
        <text x="100" y="220" text-anchor="middle" fill="${K}" font-family="Georgia, serif" font-size="11">سدرة</text>`
      ),
      "pos-launch": wrap(
        "0 0 200 260",
        `${bg(260)}
        <rect x="28" y="28" width="144" height="204" rx="6" fill="none" stroke="${S}" stroke-width="2"/>
        <circle cx="100" cy="100" r="40" fill="${S}" opacity=".25"/>
        <polygon points="100,70 118,120 82,120" fill="${S}" opacity=".7"/>
        <rect x="55" y="160" width="90" height="10" rx="5" fill="${S}"/>
        <rect x="70" y="180" width="60" height="6" rx="3" fill="${K}" opacity=".5"/>
        <text x="100" y="215" text-anchor="middle" fill="${K}" font-family="Georgia, serif" font-size="10" letter-spacing="2">LAUNCH</text>`
      ),
      "stk-pack": wrap(
        "0 0 200 200",
        `${bg(200)}
        <path d="M70 50c20 0 36 14 36 34 0 28-36 54-36 54S34 112 34 84c0-20 16-34 36-34z" fill="${S}" opacity=".85"/>
        <circle cx="70" cy="82" r="12" fill="${G}"/>
        <path d="M64 82h12M70 76v12" stroke="${S}" stroke-width="2.5" stroke-linecap="round"/>
        <circle cx="140" cy="70" r="28" fill="${K}" opacity=".35"/>
        <circle cx="140" cy="70" r="12" fill="${S}" opacity=".7"/>
        <rect x="118" y="120" width="50" height="50" rx="12" fill="${S}" opacity=".4" transform="rotate(12 143 145)"/>`
      ),
      "stk-react": wrap(
        "0 0 200 180",
        `${bg(180)}
        <circle cx="60" cy="90" r="28" fill="${S}" opacity=".5"/>
        <circle cx="52" cy="84" r="3" fill="${G}"/><circle cx="68" cy="84" r="3" fill="${G}"/>
        <path d="M52 100c4 8 12 8 16 0" stroke="${G}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <circle cx="140" cy="90" r="28" fill="${K}" opacity=".4"/>
        <circle cx="132" cy="84" r="3" fill="${G}"/><circle cx="148" cy="84" r="3" fill="${G}"/>
        <path d="M132 102c4-6 12-6 16 0" stroke="${G}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <circle cx="100" cy="50" r="16" fill="${S}" opacity=".7"/>`
      ),
      "br-kit": wrap(
        "0 0 200 240",
        `${bg(240)}
        <circle cx="100" cy="80" r="36" fill="none" stroke="${S}" stroke-width="3"/>
        <text x="100" y="88" text-anchor="middle" fill="${S}" font-family="Georgia, serif" font-size="16">سدرة</text>
        <text x="100" y="130" text-anchor="middle" fill="${K}" font-family="Georgia, serif" font-size="10" letter-spacing="3">SEDRA</text>
        <rect x="40" y="150" width="28" height="28" rx="4" fill="${S}"/>
        <rect x="76" y="150" width="28" height="28" rx="4" fill="${K}"/>
        <rect x="112" y="150" width="28" height="28" rx="4" fill="${S}" opacity=".45"/>
        <rect x="148" y="150" width="28" height="28" rx="4" fill="#F5F7F2"/>
        <rect x="50" y="198" width="100" height="4" rx="2" fill="${S}" opacity=".5"/>`
      ),
      "br-cards": wrap(
        "0 0 200 140",
        `${bg(140)}
        <rect x="24" y="36" width="120" height="72" rx="6" fill="none" stroke="${S}" stroke-width="2"/>
        <text x="40" y="70" fill="${S}" font-family="Georgia, serif" font-size="14">سدرة</text>
        <text x="40" y="88" fill="${K}" font-family="Georgia, serif" font-size="8" letter-spacing="2">SEDRA</text>
        <rect x="70" y="48" width="100" height="60" rx="6" fill="${K}" opacity=".2" stroke="${K}" stroke-width="1.5"/>`
      ),
      "br-social": wrap(
        "0 0 200 112",
        `${bg(112)}
        <rect x="10" y="18" width="180" height="76" rx="8" fill="none" stroke="${K}" stroke-width="2"/>
        <circle cx="48" cy="56" r="18" fill="${S}" opacity=".4"/>
        <text x="80" y="52" fill="${S}" font-family="Georgia, serif" font-size="14">SEDRA</text>
        <text x="80" y="70" fill="${K}" font-family="Georgia, serif" font-size="8">Electronic Designs</text>`
      ),
    };

    return arts[id] || wrap("0 0 200 200", `${bg(200)}<circle cx="100" cy="100" r="40" fill="none" stroke="${S}" stroke-width="2"/>`);
  }

  const DESIGNS = [
    { id: "ui-dash", title: "لوحة تحكم هادئة", titleEn: "Calm Dashboard UI", cat: "ui", format: "Figma", tags: ["واجهة", "داشبورد", "UI", "Figma"], desc: "نظام واجهة لتطبيق إدارة — بطاقات، شريط جانبي، ومساحات تنفس بلون سدرة.", ratio: "4/5" },
    { id: "ui-mobile", title: "تطبيق جوال أنيق", titleEn: "Elegant Mobile App", cat: "ui", format: "Figma", tags: ["واجهة", "موبايل", "تطبيق"], desc: "شاشات تدفق رقمي بألوان الغابة والنعناع.", ratio: "2/3" },
    { id: "ui-settings", title: "شاشة إعدادات", titleEn: "Settings Screen", cat: "ui", format: "SVG", tags: ["واجهة", "إعدادات", "SVG"], desc: "مكوّنات إعدادات قابلة لإعادة الاستخدام.", ratio: "1/1" },
    { id: "mock-phone", title: "موكأب هاتف", titleEn: "Phone Mockup", cat: "mockup", format: "PNG", tags: ["موكأب", "هاتف", "عرض"], desc: "إطار هاتف لعرض شاشات التطبيق بخلفية سدرة.", ratio: "5/7" },
    { id: "mock-tablet", title: "موكأب جهاز لوحي", titleEn: "Tablet Mockup", cat: "mockup", format: "PNG", tags: ["موكأب", "تابلت"], desc: "موكأب أفقي للعروض التقديمية والواجهات العريضة.", ratio: "5/4" },
    { id: "mock-browser", title: "موكأب متصفح", titleEn: "Browser Mockup", cat: "mockup", format: "SVG", tags: ["موكأب", "ويب"], desc: "نافذة متصفح خفيفة لعرض المواقع واللوحات.", ratio: "4/3" },
    { id: "tpl-social", title: "قوالب سوشيال", titleEn: "Social Templates", cat: "template", format: "Figma", tags: ["قالب", "سوشيال", "إنستغرام"], desc: "مجموعة منشورات مربعة وقصص عمودية بهوية سدرة.", ratio: "5/6" },
    { id: "tpl-story", title: "قالب قصة", titleEn: "Story Template", cat: "template", format: "PNG", tags: ["قالب", "ستوري"], desc: "إطار قصة جاهز للنص والصورة مع شريط علوي ناعم.", ratio: "9/16" },
    { id: "tpl-email", title: "قالب نشرة بريدية", titleEn: "Email Newsletter", cat: "template", format: "HTML", tags: ["قالب", "بريد", "نشرة"], desc: "تخطيط رسالة بريدية نظيف للعلامات الهادئة.", ratio: "5/6" },
    { id: "ico-set", title: "حزمة أيقونات خطية", titleEn: "Line Icon Pack", cat: "icon", format: "SVG", tags: ["أيقونة", "خطية", "SVG"], desc: "٢٤ أيقونة خطية بوزن موحّد ولون sage على خلفية داكنة.", ratio: "1/1" },
    { id: "ico-nav", title: "أيقونات تنقل", titleEn: "Nav Icons", cat: "icon", format: "SVG", tags: ["أيقونة", "تنقل", "تاب بار"], desc: "مجموعة أيقونات شريط سفلي لتطبيقات الجوال.", ratio: "5/4" },
    { id: "ico-weather", title: "أيقونات طقس", titleEn: "Weather Icons", cat: "icon", format: "SVG", tags: ["أيقونة", "طقس"], desc: "رموز طقس بسيطة بضربات sage.", ratio: "1/1" },
    { id: "pos-event", title: "بوستر فعالية", titleEn: "Event Poster", cat: "poster", format: "PDF", tags: ["بوستر", "فعالية", "طباعة"], desc: "بوستر رأسي لفعالية تصميم بهوية سدرة.", ratio: "2/3" },
    { id: "pos-quote", title: "بوستر اقتباس", titleEn: "Quote Poster", cat: "poster", format: "PNG", tags: ["بوستر", "اقتباس", "تايبو"], desc: "تكوين تايبوغرافي هادئ للاقتباسات العربية.", ratio: "4/5" },
    { id: "pos-launch", title: "بوستر إطلاق", titleEn: "Launch Poster", cat: "poster", format: "AI", tags: ["بوستر", "إطلاق", "رقمي"], desc: "إعلان إطلاق منتج رقمي بلمسة فاخرة.", ratio: "5/6" },
    { id: "stk-pack", title: "ملصقات رقمية", titleEn: "Digital Stickers", cat: "sticker", format: "PNG", tags: ["ملصق", "ستيكر", "رقمي"], desc: "حزمة ملصقات شفافة للاستخدام في التطبيقات والقصص.", ratio: "1/1" },
    { id: "stk-react", title: "ملصقات تفاعل", titleEn: "Reaction Stickers", cat: "sticker", format: "SVG", tags: ["ملصق", "تفاعل"], desc: "ردود فعل بصرية متناسقة مع لوحة سدرة.", ratio: "10/9" },
    { id: "br-kit", title: "نظام هوية سدرة", titleEn: "Sedra Brand Kit", cat: "brand", format: "PDF", tags: ["هوية", "براند", "دليل"], desc: "لوحة ألوان، مسافات شعار، وعينات تطبيق للهوية.", ratio: "5/6" },
    { id: "br-cards", title: "بطاقات أعمال", titleEn: "Business Cards", cat: "brand", format: "AI", tags: ["هوية", "بطاقة"], desc: "وجهان لبطاقة أعمال رقمية قابلة للطباعة.", ratio: "10/7" },
    { id: "br-social", title: "غلاف سوشيال", titleEn: "Social Cover", cat: "brand", format: "PNG", tags: ["هوية", "غلاف", "سوشيال"], desc: "غلاف ملف شخصي بشعار سدرة ونمط هادئ.", ratio: "16/9" },
  ];

  const SUGGESTIONS = [
    { q: "واجهة", label: "واجهات مستخدم", meta: "UI kits" },
    { q: "موكأب", label: "موكأب أجهزة", meta: "Mockups" },
    { q: "أيقونة", label: "أيقونات SVG", meta: "Icons" },
    { q: "قالب", label: "قوالب سوشيال", meta: "Templates" },
    { q: "بوستر", label: "بوسترات", meta: "Posters" },
    { q: "Figma", label: "ملفات Figma", meta: "Format" },
    { q: "هوية", label: "هويات بصرية", meta: "Brand" },
    { q: "ملصق", label: "ملصقات رقمية", meta: "Stickers" },
  ];

  const STORAGE_KEY = "sedra-saved-designs";

  const els = {
    pinGrid: document.getElementById("pin-grid"),
    savedGrid: document.getElementById("saved-grid"),
    savedPanel: document.getElementById("saved-panel"),
    savedEmpty: document.getElementById("saved-empty"),
    emptyState: document.getElementById("empty-state"),
    resultsMeta: document.getElementById("results-meta"),
    searchForm: document.getElementById("search-form"),
    searchInput: document.getElementById("search-input"),
    suggestions: document.getElementById("suggestions"),
    refineRow: document.getElementById("refine-row"),
    filterType: document.getElementById("filter-type"),
    filterFormat: document.getElementById("filter-format"),
    clearFilters: document.getElementById("clear-filters"),
    savedCount: document.getElementById("saved-count"),
    hero: document.getElementById("hero"),
    discoverTools: document.getElementById("discover-tools"),
    toast: document.getElementById("toast"),
    overlay: document.getElementById("detail-overlay"),
    detailPreview: document.getElementById("detail-preview"),
    detailTitle: document.getElementById("detail-title"),
    detailDesc: document.getElementById("detail-desc"),
    detailCat: document.getElementById("detail-cat"),
    detailMeta: document.getElementById("detail-meta"),
    detailTags: document.getElementById("detail-tags"),
    detailSave: document.getElementById("detail-save"),
    detailDownload: document.getElementById("detail-download"),
    detailClose: document.getElementById("detail-close"),
  };

  let state = {
    view: "discover",
    query: "",
    cat: "all",
    type: "",
    format: "",
    activeId: null,
  };

  function loadSaved() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const arr = raw ? JSON.parse(raw) : [];
      return Array.isArray(arr) ? arr : [];
    } catch (_) {
      return [];
    }
  }

  function saveSaved(ids) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
    updateSavedBadge();
  }

  function isSaved(id) {
    return loadSaved().includes(id);
  }

  function toggleSave(id) {
    const ids = loadSaved();
    const i = ids.indexOf(id);
    if (i >= 0) ids.splice(i, 1);
    else ids.push(id);
    saveSaved(ids);
    return ids.includes(id);
  }

  function updateSavedBadge() {
    const n = loadSaved().length;
    els.savedCount.textContent = String(n);
    els.savedCount.hidden = n === 0;
  }

  function matches(d) {
    if (state.cat !== "all" && d.cat !== state.cat) return false;
    if (state.type && d.cat !== state.type) return false;
    if (state.format && d.format.toLowerCase() !== state.format.toLowerCase()) return false;
    if (!state.query) return true;
    const q = state.query.trim().toLowerCase();
    const hay = [d.title, d.titleEn, d.cat, CAT_LABEL[d.cat], d.format, ...(d.tags || [])]
      .join(" ")
      .toLowerCase();
    return hay.includes(q) || q.split(/\s+/).every((w) => hay.includes(w));
  }

  function filtered() {
    return DESIGNS.filter(matches);
  }

  function pinHTML(d) {
    const tags = (d.tags || []).slice(0, 3).map((t) => `<span class="tag">${esc(t)}</span>`).join("");
    return `<button type="button" class="pin" role="listitem" data-id="${esc(d.id)}" style="--pin-ratio:${d.ratio || "4/5"}">
      <div class="pin-art">${art(d.id, d.title)}</div>
      <div class="pin-body">
        <h3 class="pin-title">${esc(d.title)}</h3>
        <p class="pin-meta">${esc(CAT_LABEL[d.cat])} · ${esc(d.format)}</p>
        <div class="pin-tags">${tags}</div>
      </div>
    </button>`;
  }


  let toastTimer = null;
  function showToast(msg) {
    if (!els.toast) return;
    els.toast.textContent = msg;
    els.toast.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { els.toast.hidden = true; }, 2200);
  }

  function renderDiscover() {
    const list = filtered();
    const onDiscover = state.view === "discover";
    els.pinGrid.hidden = !onDiscover;
    els.savedPanel.hidden = state.view !== "saved";
    els.hero.hidden = !onDiscover;
    if (els.discoverTools) els.discoverTools.hidden = !onDiscover;

    if (state.view === "saved") {
      renderSaved();
      return;
    }

    els.refineRow.hidden = !(state.query || state.type || state.format);
    if (!list.length) {
      els.pinGrid.innerHTML = "";
      els.emptyState.hidden = false;
      els.resultsMeta.textContent = "٠ نتائج";
      return;
    }
    els.emptyState.hidden = true;
    els.resultsMeta.textContent = `${list.length} تصميم`;
    els.pinGrid.innerHTML = list.map(pinHTML).join("");
  }

  function renderSaved() {
    const ids = loadSaved();
    const list = DESIGNS.filter((d) => ids.includes(d.id));
    els.emptyState.hidden = true;
    els.pinGrid.hidden = true;
    els.savedPanel.hidden = false;
    if (!list.length) {
      els.savedGrid.innerHTML = "";
      els.savedEmpty.hidden = false;
      els.resultsMeta.textContent = "";
      return;
    }
    els.savedEmpty.hidden = true;
    els.resultsMeta.textContent = `${list.length} محفوظ`;
    els.savedGrid.innerHTML = list.map(pinHTML).join("");
  }

  function openDetail(id) {
    const d = DESIGNS.find((x) => x.id === id);
    if (!d) return;
    state.activeId = id;
    els.detailPreview.innerHTML = art(d.id, d.title);
    els.detailTitle.textContent = d.title;
    els.detailDesc.textContent = d.desc;
    els.detailCat.textContent = `${CAT_EN[d.cat]} · ${CAT_LABEL[d.cat]}`;
    els.detailMeta.innerHTML = `
      <dt>الصيغة</dt><dd>${esc(d.format)}</dd>
      <dt>العنوان EN</dt><dd class="en">${esc(d.titleEn)}</dd>
      <dt>المعرّف</dt><dd><code>${esc(d.id)}</code></dd>`;
    els.detailTags.innerHTML = (d.tags || []).map((t) => `<span class="tag">${esc(t)}</span>`).join("");
    syncSaveBtn();
    els.overlay.hidden = false;
    document.body.classList.add("detail-open");
    els.detailClose.focus();
  }

  function closeDetail() {
    els.overlay.hidden = true;
    document.body.classList.remove("detail-open");
    state.activeId = null;
  }

  function syncSaveBtn() {
    const saved = state.activeId && isSaved(state.activeId);
    els.detailSave.textContent = saved ? "محفوظ ✓" : "حفظ";
    els.detailSave.classList.toggle("is-saved", !!saved);
  }

  function downloadDesign(d) {
    const svg = art(d.id, d.title);
    const blob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `sedra-${d.id}.svg`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  function setView(view) {
    state.view = view;
    document.querySelectorAll(".nav-tab").forEach((btn) => {
      const on = btn.dataset.view === view;
      btn.classList.toggle("is-active", on);
      if (on) btn.setAttribute("aria-current", "page");
      else btn.removeAttribute("aria-current");
    });
    renderDiscover();
  }

  function showSuggestions(q) {
    const needle = (q || "").trim().toLowerCase();
    const items = SUGGESTIONS.filter(
      (s) => !needle || s.q.toLowerCase().includes(needle) || s.label.includes(needle)
    ).slice(0, 6);

    const designHits = DESIGNS.filter((d) => {
      if (!needle) return false;
      return (d.title + d.titleEn + d.tags.join(" ")).toLowerCase().includes(needle);
    }).slice(0, 4);

    if (!items.length && !designHits.length) {
      els.suggestions.hidden = true;
      els.suggestions.innerHTML = "";
      return;
    }

    const parts = items.map(
      (s) => `<button type="button" class="suggestion-item" role="option" data-q="${esc(s.q)}">
        ${esc(s.label)}<span class="s-meta en">${esc(s.meta)}</span></button>`
    );
    designHits.forEach((d) => {
      parts.push(
        `<button type="button" class="suggestion-item" role="option" data-q="${esc(d.title)}">
          ${esc(d.title)}<span class="s-meta">${esc(CAT_LABEL[d.cat])} · ${esc(d.format)}</span></button>`
      );
    });
    els.suggestions.innerHTML = parts.join("");
    els.suggestions.hidden = false;
  }

  document.querySelectorAll(".nav-tab").forEach((btn) => {
    btn.addEventListener("click", () => setView(btn.dataset.view));
  });

  document.querySelectorAll(".chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".chip").forEach((c) => c.classList.remove("is-active"));
      chip.classList.add("is-active");
      state.cat = chip.dataset.cat;
      if (state.view !== "discover") setView("discover");
      else renderDiscover();
    });
  });

  els.searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    state.query = els.searchInput.value.trim();
    els.suggestions.hidden = true;
    els.refineRow.hidden = false;
    if (state.view !== "discover") setView("discover");
    else renderDiscover();
  });

  els.searchInput.addEventListener("input", () => showSuggestions(els.searchInput.value));
  els.searchInput.addEventListener("focus", () => showSuggestions(els.searchInput.value));

  els.suggestions.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-q]");
    if (!btn) return;
    els.searchInput.value = btn.dataset.q;
    state.query = btn.dataset.q;
    els.suggestions.hidden = true;
    els.refineRow.hidden = false;
    setView("discover");
    renderDiscover();
  });

  document.addEventListener("click", (e) => {
    if (!els.searchForm.contains(e.target)) els.suggestions.hidden = true;
  });

  els.filterType.addEventListener("change", () => {
    state.type = els.filterType.value;
    renderDiscover();
  });
  els.filterFormat.addEventListener("change", () => {
    state.format = els.filterFormat.value;
    renderDiscover();
  });

  els.clearFilters.addEventListener("click", () => {
    state.query = "";
    state.type = "";
    state.format = "";
    state.cat = "all";
    els.searchInput.value = "";
    els.filterType.value = "";
    els.filterFormat.value = "";
    document.querySelectorAll(".chip").forEach((c) => {
      c.classList.toggle("is-active", c.dataset.cat === "all");
    });
    els.refineRow.hidden = true;
    renderDiscover();
  });

  document.getElementById("rescue-clear").addEventListener("click", () => {
    els.clearFilters.click();
  });
  document.getElementById("rescue-suggest").addEventListener("click", (e) => {
    const q = e.currentTarget.dataset.q;
    els.searchInput.value = q;
    state.query = q;
    state.cat = "ui";
    document.querySelectorAll(".chip").forEach((c) => {
      c.classList.toggle("is-active", c.dataset.cat === "ui");
    });
    renderDiscover();
  });
  document.getElementById("rescue-icons").addEventListener("click", (e) => {
    const q = e.currentTarget.dataset.q;
    els.searchInput.value = q;
    state.query = q;
    state.cat = "icon";
    document.querySelectorAll(".chip").forEach((c) => {
      c.classList.toggle("is-active", c.dataset.cat === "icon");
    });
    renderDiscover();
  });

  document.querySelectorAll("[data-view-switch]").forEach((btn) => {
    btn.addEventListener("click", () => setView(btn.dataset.viewSwitch));
  });

  els.pinGrid.addEventListener("click", (e) => {
    const pin = e.target.closest(".pin");
    if (pin) openDetail(pin.dataset.id);
  });
  els.savedGrid.addEventListener("click", (e) => {
    const pin = e.target.closest(".pin");
    if (pin) openDetail(pin.dataset.id);
  });

  els.detailClose.addEventListener("click", closeDetail);
  els.overlay.addEventListener("click", (e) => {
    if (e.target === els.overlay) closeDetail();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !els.overlay.hidden) closeDetail();
  });

  els.detailSave.addEventListener("click", () => {
    if (!state.activeId) return;
    const nowSaved = toggleSave(state.activeId);
    syncSaveBtn();
    showToast(nowSaved ? "تم الحفظ" : "أُزيل من المحفوظات");
    if (state.view === "saved") renderSaved();
  });

  els.detailDownload.addEventListener("click", () => {
    const d = DESIGNS.find((x) => x.id === state.activeId);
    if (d) {
      downloadDesign(d);
      showToast("تم تنزيل SVG");
    }
  });

  updateSavedBadge();
  renderDiscover();
})();
