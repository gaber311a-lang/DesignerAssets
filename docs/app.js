/* Designer Assets — mobile web preview */
(function () {
  "use strict";

  const TYPES = {
    image: { label: "صور", icon: "🖼" },
    accessory: { label: "ملحقات", icon: "🧩" },
    sticker: { label: "ستيكرات", icon: "😊" },
    idea: { label: "أفكار", icon: "💡" },
  };

  const CHIPS = [
    { id: "all", label: "الكل" },
    { id: "image", label: "صور" },
    { id: "accessory", label: "ملحقات" },
    { id: "sticker", label: "ستيكرات" },
    { id: "idea", label: "أفكار" },
  ];

  const SAMPLES = [
    ["تدرج بنفسجي ناعم", "image", ["تدرج", "بنفسجي", "خلفية"], false, false, "PNG", "1:1", 0.72],
    ["ملصق نجمة ذهبية", "sticker", ["ملصق", "نجمة", "ذهبي"], true, false, "PNG", "1:1", 0.12],
    ["إطار إنستغرام", "accessory", ["إطار", "سوشيال", "إنستغرام"], false, false, "SVG", "9:16", 0.55],
    ["فكرة بوست رمضان", "idea", ["رمضان", "بوست", "فكرة"], false, false, "PDF", "4:3", 0.08],
    ["نمط هندسي أزرق", "image", ["نمط", "هندسي", "أزرق"], true, true, "JPG", "16:9", 0.58],
    ["ستيكر قلب متحرك", "sticker", ["قلب", "ستيكر", "لطيف"], false, false, "PNG", "1:1", 0.95],
    ["مجموعة أيقونات UI", "accessory", ["أيقونات", "UI", "واجهة"], true, false, "SVG", "1:1", 0.65],
    ["لوحة ألوان سعودية", "idea", ["ألوان", "هوية", "سعودي"], false, false, "PDF", "16:9", 0.78],
    ["خلفية رخامية بيضاء", "image", ["رخام", "خلفية", "فاخر"], false, false, "HEIC", "4:3", 0.02],
    ["شريط زخرفي عربي", "accessory", ["زخرفة", "عربي", "شريط"], false, false, "SVG", "16:9", 0.82],
    ["ستيكر قهوة", "sticker", ["قهوة", "لطيف", "ستيكر"], false, false, "PNG", "1:1", 0.08],
    ["موك أب آيفون", "image", ["موكأب", "آيفون", "عرض"], true, false, "PNG", "9:16", 0.45],
    ["فكرة كوفر يوتيوب", "idea", ["يوتيوب", "كوفر", "فكرة"], false, false, "JPG", "16:9", 0.35],
    ["ملحق شارة خصم", "accessory", ["شارة", "خصم", "بيع"], false, false, "PNG", "1:1", 0.02],
    ["تدرجات غروب", "image", ["غروب", "تدرج", "دافئ"], false, false, "JPG", "16:9", 0.05],
    ["ستيكر تاج", "sticker", ["تاج", "ملكي", "ذهبي"], true, true, "PNG", "1:1", 0.15],
    ["شبكة تخطيط بوست", "accessory", ["تخطيط", "شبكة", "بوست"], false, false, "PDF", "1:1", 0.50],
    ["فكرة ستوري متجر", "idea", ["ستوري", "متجر", "تجارة"], false, false, "PNG", "9:16", 0.88],
    ["نسيج قماش ناعم", "image", ["نسيج", "قماش", "ملمس"], false, false, "HEIC", "1:1", 0.20],
    ["حزمة إيموجي عربي", "sticker", ["إيموجي", "عربي", "حزمة"], true, false, "PNG", "1:1", 0.90],
  ];

  function hueToGradient(h) {
    const a = `hsl(${Math.round(h * 360)} 55% 72%)`;
    const b = `hsl(${Math.round(((h + 0.12) % 1) * 360)} 65% 42%)`;
    return `linear-gradient(135deg, ${a}, ${b})`;
  }

  function formatCount(n) {
    if (n >= 1000) return (n / 1000).toFixed(1) + "k";
    return String(n);
  }

  const assets = SAMPLES.map((s, i) => ({
    id: i + 1,
    title: s[0],
    type: s[1],
    tags: s[2],
    isPremium: s[3],
    isLocked: s[4],
    format: s[5],
    aspect: s[6],
    hue: s[7],
    downloads: 120 + i * 137,
    saves: 40 + i * 23,
    imageUrl: `https://picsum.photos/seed/da${i + 1}/400/400`,
  }));

  // Wire similar by type
  assets.forEach((a) => {
    a.similar = assets
      .filter((o) => o.id !== a.id && o.type === a.type)
      .slice(0, 6)
      .map((o) => o.id);
  });

  const state = {
    tab: "library", // library | saved
    chip: "all",
    query: "",
    saved: new Set([1, 2, 3, 4]),
    downloading: new Set(),
    detailId: null,
    loadState: "loaded", // loading | loaded | empty
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

  function mediaHTML(asset, large) {
    const icon = TYPES[asset.type].icon;
    const size = large ? "media-icon" : "media-icon";
    // Gradient always works offline; picsum enhances when online
    return `
      <div class="media-grad" style="background:${hueToGradient(asset.hue)}">
        <span class="${size}" aria-hidden="true">${icon}</span>
      </div>
      <img class="media-fill" src="${asset.imageUrl}" alt="" loading="lazy"
        style="position:absolute;inset:0;opacity:0;transition:opacity .3s"
        onload="this.style.opacity=1" onerror="this.remove()" />
    `;
  }

  function cardHTML(asset) {
    const saved = state.saved.has(asset.id);
    const downloading = state.downloading.has(asset.id);
    const stats = `${formatCount(asset.downloads)} تحميل · ${formatCount(asset.saves)} حفظ`;
    return `
      <article class="asset-card" data-id="${asset.id}" role="button" tabindex="0" aria-label="${asset.title}">
        <div class="card-media">
          ${mediaHTML(asset, false)}
          <div class="card-badges">
            ${asset.isPremium ? '<span class="badge-circle badge-premium" title="مدفوع">👑</span>' : ""}
            ${asset.isLocked ? '<span class="badge-circle badge-locked" title="مقفل">🔒</span>' : ""}
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
          <span class="type-chip">${TYPES[asset.type].label}</span>
          <div class="card-title">${asset.title}</div>
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
          <div class="skeleton-line short"></div>
          <div class="skeleton-line med"></div>
          <div class="skeleton-line" style="width:55%"></div>
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
    const preview = $("#detail-preview", root);
    preview.innerHTML = mediaHTML(asset, true);
    preview.querySelector(".media-icon").style.fontSize = "64px";

    $("#detail-chips", root).innerHTML = `
      <span class="meta-pill brand">${TYPES[asset.type].label}</span>
      <span class="meta-pill">${asset.format}</span>
      <span class="meta-pill">${asset.aspect}</span>
      ${asset.isPremium ? '<span class="meta-pill premium">👑 مدفوع</span>' : ""}
      ${asset.isLocked ? '<span class="meta-pill">🔒 مقفل</span>' : ""}
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
          <div class="thumb" style="background:${hueToGradient(s.hue)};display:grid;place-items:center">
            <span style="font-size:28px;color:#fff">${TYPES[s.type].icon}</span>
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
        `<button type="button" class="chip ${state.chip === c.id ? "selected" : ""}" data-chip="${c.id}">${c.label}</button>`
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
    clear.classList.toggle("visible", !!state.query);
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

    // Initial loading skeleton flash
    state.loadState = "loading";
    renderLibrary();
    setTimeout(() => {
      state.loadState = "loaded";
      renderAll();
    }, 600);

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
        renderDetail();
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

    // History back closes detail
    window.addEventListener("popstate", () => {
      if (state.detailId) closeDetail();
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
