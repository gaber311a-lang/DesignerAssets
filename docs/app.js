/* SEDRA / سدرة — Electronic Designs gallery */
(function () {
  "use strict";

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

  /** Coherent SVG art per design — Sedra palette */
  function art(kind, title) {
    const g = "#003626";
    const s = "#CFEDC2";
    const k = "#C7E6BC";
    const arts = {
      ui: `<svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${esc(title)}">
        <rect width="200" height="260" fill="${g}"/>
        <rect x="24" y="28" width="152" height="204" rx="14" fill="none" stroke="${k}" stroke-width="2"/>
        <rect x="36" y="44" width="80" height="10" rx="5" fill="${s}"/>
        <rect x="36" y="66" width="128" height="48" rx="8" fill="${k}" opacity=".35"/>
        <rect x="36" y="128" width="56" height="56" rx="10" fill="${s}" opacity=".5"/>
        <rect x="104" y="128" width="60" height="24" rx="6" fill="${k}" opacity=".45"/>
        <rect x="104" y="160" width="60" height="24" rx="6" fill="${k}" opacity=".25"/>
        <rect x="36" y="200" width="128" height="12" rx="6" fill="${s}" opacity=".7"/>
      </svg>`,
      mockup: `<svg viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${esc(title)}">
        <rect width="200" height="280" fill="${g}"/>
        <rect x="55" y="36" width="90" height="180" rx="14" fill="none" stroke="${s}" stroke-width="3"/>
        <circle cx="100" cy="48" r="3" fill="${k}"/>
        <rect x="65" y="60" width="70" height="100" rx="4" fill="${k}" opacity=".25"/>
        <rect x="72" y="72" width="40" height="6" rx="3" fill="${s}"/>
        <rect x="72" y="88" width="56" height="40" rx="6" fill="${s}" opacity=".4"/>
        <rect x="70" y="200" width="60" height="6" rx="3" fill="${k}"/>
        <ellipse cx="100" cy="240" rx="40" ry="6" fill="${s}" opacity=".2"/>
      </svg>`,
      template: `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${esc(title)}">
        <rect width="200" height="240" fill="${g}"/>
        <rect x="28" y="28" width="144" height="184" rx="8" fill="none" stroke="${k}" stroke-width="2"/>
        <rect x="40" y="44" width="72" height="8" rx="4" fill="${s}"/>
        <rect x="40" y="64" width="120" height="50" rx="6" fill="${k}" opacity=".3"/>
        <rect x="40" y="128" width="54" height="54" rx="6" fill="${s}" opacity=".45"/>
        <rect x="106" y="128" width="54" height="24" rx="4" fill="${k}" opacity=".4"/>
        <rect x="106" y="160" width="54" height="22" rx="4" fill="${k}" opacity=".25"/>
      </svg>`,
      icon: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${esc(title)}">
        <rect width="200" height="200" fill="${g}"/>
        <circle cx="100" cy="100" r="52" fill="none" stroke="${s}" stroke-width="3"/>
        <path d="M100 68v64M68 100h64" stroke="${k}" stroke-width="4" stroke-linecap="round"/>
        <circle cx="100" cy="100" r="10" fill="${s}"/>
        <circle cx="72" cy="72" r="6" fill="${k}" opacity=".7"/>
        <circle cx="128" cy="72" r="6" fill="${k}" opacity=".7"/>
        <circle cx="72" cy="128" r="6" fill="${k}" opacity=".7"/>
        <circle cx="128" cy="128" r="6" fill="${k}" opacity=".7"/>
      </svg>`,
      poster: `<svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${esc(title)}">
        <rect width="200" height="300" fill="${g}"/>
        <rect x="20" y="20" width="160" height="260" rx="4" fill="none" stroke="${k}" stroke-width="2"/>
        <text x="100" y="90" text-anchor="middle" fill="${s}" font-family="Georgia, serif" font-size="22">SEDRA</text>
        <line x1="55" y1="110" x2="145" y2="110" stroke="${k}" stroke-width="1.5"/>
        <rect x="50" y="140" width="100" height="8" rx="4" fill="${s}" opacity=".55"/>
        <rect x="65" y="160" width="70" height="6" rx="3" fill="${k}" opacity=".45"/>
        <circle cx="100" cy="220" r="28" fill="none" stroke="${s}" stroke-width="2"/>
        <circle cx="100" cy="220" r="12" fill="${s}" opacity=".4"/>
      </svg>`,
      sticker: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${esc(title)}">
        <rect width="200" height="200" fill="${g}"/>
        <path d="M100 36c28 0 52 22 52 52 0 40-52 76-52 76S48 128 48 88c0-30 24-52 52-52z" fill="${s}" opacity=".85"/>
        <circle cx="100" cy="86" r="18" fill="${g}"/>
        <path d="M92 86h16M100 78v16" stroke="${s}" stroke-width="3" stroke-linecap="round"/>
      </svg>`,
      brand: `<svg viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${esc(title)}">
        <rect width="200" height="220" fill="${g}"/>
        <circle cx="100" cy="88" r="42" fill="none" stroke="${s}" stroke-width="3"/>
        <text x="100" y="96" text-anchor="middle" fill="${s}" font-family="Georgia, serif" font-size="18">سدرة</text>
        <text x="100" y="150" text-anchor="middle" fill="${k}" font-family="Georgia, serif" font-size="11" letter-spacing="3">SEDRA</text>
        <rect x="60" y="168" width="80" height="4" rx="2" fill="${s}" opacity=".5"/>
      </svg>`,
    };
    return arts[kind] || arts.ui;
  }

  const DESIGNS = [
    { id: "ui-dash", title: "لوحة تحكم هادئة", titleEn: "Calm Dashboard UI", cat: "ui", format: "Figma", tags: ["واجهة", "داشبورد", "UI", "Figma"], desc: "نظام واجهة لتطبيق إدارة — بطاقات، شريط جانبي، ومساحات تنفس بلون سدرة.", ratio: "4/5", h: 1 },
    { id: "ui-mobile", title: "تطبيق جوال أنيق", titleEn: "Elegant Mobile App", cat: "ui", format: "Figma", tags: ["واجهة", "موبايل", "تطبيق"], desc: "شاشات تدفق شراء رقمية بألوان الغابة والنعناع.", ratio: "3/5", h: 2 },
    { id: "ui-settings", title: "شاشة إعدادات", titleEn: "Settings Screen", cat: "ui", format: "SVG", tags: ["واجهة", "إعدادات", "SVG"], desc: "مكوّنات إعدادات قابلة لإعادة الاستخدام.", ratio: "1/1", h: 0 },
    { id: "mock-phone", title: "موكأب هاتف", titleEn: "Phone Mockup", cat: "mockup", format: "PNG", tags: ["موكأب", "هاتف", "عرض"], desc: "إطار هاتف لعرض شاشات التطبيق بخلفية سدرة.", ratio: "3/5", h: 2 },
    { id: "mock-tablet", title: "موكأب جهاز لوحي", titleEn: "Tablet Mockup", cat: "mockup", format: "PNG", tags: ["موكأب", "تابلت"], desc: "موكأب أفقي للعروض التقديمية والواجهات العريضة.", ratio: "5/4", h: 0 },
    { id: "mock-browser", title: "موكأب متصفح", titleEn: "Browser Mockup", cat: "mockup", format: "SVG", tags: ["موكأب", "ويب"], desc: "نافذة متصفح خفيفة لعرض المواقع واللوحات.", ratio: "4/3", h: 1 },
    { id: "tpl-social", title: "قوالب سوشيال", titleEn: "Social Templates", cat: "template", format: "Figma", tags: ["قالب", "سوشيال", "إنستغرام"], desc: "مجموعة منشورات مربعة وقصص عمودية بهوية سدرة.", ratio: "4/5", h: 1 },
    { id: "tpl-story", title: "قالب قصة", titleEn: "Story Template", cat: "template", format: "PNG", tags: ["قالب", "ستوري"], desc: "إطار قصة جاهز للنص والصورة مع شريط علوي ناعم.", ratio: "9/16", h: 2 },
    { id: "tpl-email", title: "قالب نشرة بريدية", titleEn: "Email Newsletter", cat: "template", format: "HTML", tags: ["قالب", "بريد", "نشرة"], desc: "تخطيط رسالة بريدية نظيف للعلامات الهادئة.", ratio: "3/4", h: 1 },
    { id: "ico-set", title: "حزمة أيقونات خطية", titleEn: "Line Icon Pack", cat: "icon", format: "SVG", tags: ["أيقونة", "خطية", "SVG"], desc: "٢٤ أيقونة خطية بوزن موحّد ولون sage على خلفية داكنة.", ratio: "1/1", h: 0 },
    { id: "ico-nav", title: "أيقونات تنقل", titleEn: "Nav Icons", cat: "icon", format: "SVG", tags: ["أيقونة", "تنقل", "تاب بار"], desc: "مجموعة أيقونات شريط سفلي لتطبيقات الجوال.", ratio: "5/4", h: 0 },
    { id: "ico-weather", title: "أيقونات طقس", titleEn: "Weather Icons", cat: "icon", format: "SVG", tags: ["أيقونة", "طقس"], desc: "رموز طقس بسيطة بضربات sage.", ratio: "1/1", h: 0 },
    { id: "pos-event", title: "بوستر فعالية", titleEn: "Event Poster", cat: "poster", format: "PDF", tags: ["بوستر", "فعالية", "طباعة"], desc: "بوستر رأسي لفعالية تصميم بهوية سدرة.", ratio: "2/3", h: 2 },
    { id: "pos-quote", title: "بوستر اقتباس", titleEn: "Quote Poster", cat: "poster", format: "PNG", tags: ["بوستر", "اقتباس", "تايبو"], desc: "تكوين تايبوغرافي هادئ للاقتباسات العربية.", ratio: "4/5", h: 1 },
    { id: "pos-launch", title: "بوستر إطلاق", titleEn: "Launch Poster", cat: "poster", format: "AI", tags: ["بوستر", "إطلاق", "منتج"], desc: "إعلان إطلاق منتج رقمي بلمسة فاخرة.", ratio: "3/4", h: 1 },
    { id: "stk-pack", title: "ملصقات رقمية", titleEn: "Digital Stickers", cat: "sticker", format: "PNG", tags: ["ملصق", "ستيكر", "رقمي"], desc: "حزمة ملصقات شفافة للاستخدام في التطبيقات والقصص.", ratio: "1/1", h: 0 },
    { id: "stk-react", title: "ملصقات تفاعل", titleEn: "Reaction Stickers", cat: "sticker", format: "SVG", tags: ["ملصق", "تفاعل", "إيموجي"], desc: "ردود فعل بصرية متناسقة مع لوحة سدرة.", ratio: "5/4", h: 0 },
    { id: "br-kit", title: "نظام هوية سدرة", titleEn: "Sedra Brand Kit", cat: "brand", format: "PDF", tags: ["هوية", "براند", "دليل"], desc: "لوحة ألوان، مسافات شعار، وعينات تطبيق للهوية.", ratio: "4/5", h: 1 },
    { id: "br-cards", title: "بطاقات أعمال", titleEn: "Business Cards", cat: "brand", format: "AI", tags: ["هوية", "بطاقة", "مطبوعات"], desc: "وجهان لبطاقة أعمال رقمية قابلة للطباعة.", ratio: "5/3", h: 0 },
    { id: "br-social", title: "غلاف سوشيال", titleEn: "Social Cover", cat: "brand", format: "PNG", tags: ["هوية", "غلاف", "سوشيال"], desc: "غلاف ملف شخصي بشعار سدرة ونمط هادئ.", ratio: "16/9", h: 0 },
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

  function esc(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

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
      <div class="pin-art">${art(d.cat, d.title)}</div>
      <div class="pin-body">
        <h3 class="pin-title">${esc(d.title)}</h3>
        <p class="pin-meta">${esc(CAT_LABEL[d.cat])} · ${esc(d.format)}</p>
        <div class="pin-tags">${tags}</div>
      </div>
    </button>`;
  }

  function renderDiscover() {
    const list = filtered();
    els.pinGrid.hidden = state.view !== "discover";
    els.savedPanel.hidden = state.view !== "saved";
    els.hero.hidden = state.view !== "discover";

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
    els.detailPreview.innerHTML = art(d.cat, d.title);
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
    const svg = art(d.cat, d.title);
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
    if (!items.length || (needle && items.length === 0)) {
      els.suggestions.hidden = true;
      els.suggestions.innerHTML = "";
      return;
    }
    // Also suggest matching design titles
    const designHits = DESIGNS.filter((d) => {
      if (!needle) return false;
      return (d.title + d.titleEn + d.tags.join(" ")).toLowerCase().includes(needle);
    }).slice(0, 4);

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

  /* Events */
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

  els.searchInput.addEventListener("input", () => {
    showSuggestions(els.searchInput.value);
  });

  els.searchInput.addEventListener("focus", () => {
    showSuggestions(els.searchInput.value);
  });

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
    toggleSave(state.activeId);
    syncSaveBtn();
    if (state.view === "saved") renderSaved();
  });

  els.detailDownload.addEventListener("click", () => {
    const d = DESIGNS.find((x) => x.id === state.activeId);
    if (d) downloadDesign(d);
  });

  updateSavedBadge();
  renderDiscover();
})();
