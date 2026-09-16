/* Designer Assets — premium iOS-like mobile preview */
(function () {
  "use strict";

  const TYPES = {
    image: { label: "صور" },
    accessory: { label: "ملحقات" },
    sticker: { label: "ستيكرات" },
    idea: { label: "أفكار" },
  };

  const CHIPS = [
    { id: "all", label: "الكل" },
    { id: "image", label: "صور" },
    { id: "accessory", label: "ملحقات" },
    { id: "sticker", label: "ستيكرات" },
    { id: "idea", label: "أفكار" },
  ];

  const SAMPLES = [
    ["تدرج بنفسجي ناعم", "image", ["تدرج", "بنفسجي", "خلفية"], false, false, "PNG", "1:1"],
    ["ملصق نجمة ذهبية", "sticker", ["ملصق", "نجمة", "ذهبي"], true, false, "PNG", "1:1"],
    ["إطار إنستغرام", "accessory", ["إطار", "سوشيال", "إنستغرام"], false, false, "SVG", "9:16"],
    ["فكرة بوست رمضان", "idea", ["رمضان", "بوست", "فكرة"], false, false, "PDF", "4:3"],
    ["نمط هندسي أزرق", "image", ["نمط", "هندسي", "أزرق"], true, true, "JPG", "16:9"],
    ["ستيكر قلب متحرك", "sticker", ["قلب", "ستيكر", "لطيف"], false, false, "PNG", "1:1"],
    ["مجموعة أيقونات UI", "accessory", ["أيقونات", "UI", "واجهة"], true, false, "SVG", "1:1"],
    ["لوحة ألوان سعودية", "idea", ["ألوان", "هوية", "سعودي"], false, false, "PDF", "16:9"],
    ["خلفية رخامية بيضاء", "image", ["رخام", "خلفية", "فاخر"], false, false, "HEIC", "4:3"],
    ["شريط زخرفي عربي", "accessory", ["زخرفة", "عربي", "شريط"], false, false, "SVG", "16:9"],
    ["ستيكر قهوة", "sticker", ["قهوة", "لطيف", "ستيكر"], false, false, "PNG", "1:1"],
    ["موك أب آيفون", "image", ["موكأب", "آيفون", "عرض"], true, false, "PNG", "9:16"],
    ["فكرة كوفر يوتيوب", "idea", ["يوتيوب", "كوفر", "فكرة"], false, false, "JPG", "16:9"],
    ["ملحق شارة خصم", "accessory", ["شارة", "خصم", "بيع"], false, false, "PNG", "1:1"],
    ["تدرجات غروب", "image", ["غروب", "تدرج", "دافئ"], false, false, "JPG", "16:9"],
    ["ستيكر تاج", "sticker", ["تاج", "ملكي", "ذهبي"], true, true, "PNG", "1:1"],
    ["شبكة تخطيط بوست", "accessory", ["تخطيط", "شبكة", "بوست"], false, false, "PDF", "1:1"],
    ["فكرة ستوري متجر", "idea", ["ستوري", "متجر", "تجارة"], false, false, "PNG", "9:16"],
    ["نسيج قماش ناعم", "image", ["نسيج", "قماش", "ملمس"], false, false, "HEIC", "1:1"],
    ["حزمة إيموجي عربي", "sticker", ["إيموجي", "عربي", "حزمة"], true, false, "PNG", "1:1"],
  ];

  function formatCount(n) {
    if (n >= 1000) return (n / 1000).toFixed(1) + "k";
    return String(n);
  }

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

  const CROWN_SVG =
    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 17h18l-1.5-9-4.5 3.5L12 5l-3 6.5L4.5 8 3 17zm2 2h14v1.5H5V19z"/></svg>';
  const LOCK_SVG =
    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17 9V7a5 5 0 0 0-10 0v2H5v12h14V9h-2zm-8 0V7a3 3 0 0 1 6 0v2H9z"/></svg>';

  const assets = SAMPLES.map((s, i) => ({
    id: i + 1,
    title: s[0],
    type: s[1],
    tags: s[2],
    isPremium: s[3],
    isLocked: s[4],
    format: s[5],
    aspect: s[6],
    downloads: 120 + i * 137,
    saves: 40 + i * 23,
    imageUrl: `https://picsum.photos/seed/da${i + 1}/400/400`,
  }));

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
    saved: new Set([1, 2, 3, 4]),
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

  function placeholderHTML(type) {
    return `<div class="media-ph" aria-hidden="true">${TYPE_ICON[type] || TYPE_ICON.image}</div>`;
  }

  function mediaHTML(asset) {
    return `
      ${placeholderHTML(asset.type)}
      <img class="media-fill" src="${asset.imageUrl}" alt="" loading="lazy" decoding="async"
        onload="this.style.opacity=1"
        onerror="this.remove()"
        style="opacity:0;transition:opacity .25s ease" />
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

  function renderLibrary() {
    const grid = $("#library-grid");
    const end = $("#library-end");
    const empty = $("#library-empty");

    if (state.loadState === "loading") {
      grid.innerHTML = skeletonHTML();
      end.hidden = true;
      empty.hidden = true;
      return;
    }

    const list = filtered();
    if (!list.length) {
      grid.innerHTML = "";
      empty.hidden = false;
      end.hidden = true;
      return;
    }
    empty.hidden = true;
    grid.innerHTML = list.map(cardHTML).join("");
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
            ${placeholderHTML(s.type)}
            <img src="${s.imageUrl}" alt="" loading="lazy" decoding="async"
              onload="this.style.opacity=1"
              onerror="this.remove()"
              style="opacity:0;transition:opacity .25s ease" />
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
    }, 480);

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
