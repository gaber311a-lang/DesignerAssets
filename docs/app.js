/* Designer Assets — Pinterest-like masonry discovery feed */
(function () {
  "use strict";

  const TYPES = {
    image: { label: "صور", order: 0 },
    accessory: { label: "ملحقات", order: 1 },
    sticker: { label: "ستيكرات", order: 2 },
    idea: { label: "أفكار", order: 3 },
  };

  /* Spec order: الكل، صور، ملحقات، ستيكرات، أفكار */
  const CHIPS = [
    { id: "all", label: "الكل" },
    { id: "image", label: "صور" },
    { id: "accessory", label: "ملحقات" },
    { id: "sticker", label: "ستيكرات" },
    { id: "idea", label: "أفكار" },
  ];

  const ASPECT_SIZE = {
    "1:1": [400, 400],
    "4:3": [400, 300],
    "3:4": [300, 400],
    "16:9": [400, 225],
    "9:16": [270, 480],
    "2:3": [300, 450],
    "3:2": [420, 280],
  };

  /* Coherent catalog — every visual matches Arabic title + type */
  const SAMPLES = [
    // —— صور
    {
      title: "خلفية بنفسجية ناعمة",
      type: "image",
      tags: ["خلفية", "تدرج", "بنفسجي"],
      isPremium: false,
      isLocked: false,
      format: "PNG",
      aspect: "3:4",
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
      aspect: "2:3",
      palette: ["#D4C4B0", "#E8DCC8", "#BFA890"],
      motif: "fabric",
    },
    {
      title: "سماء ليلية بنفسجية",
      type: "image",
      tags: ["خلفية", "ليل", "نجوم"],
      isPremium: false,
      isLocked: false,
      format: "JPG",
      aspect: "9:16",
      palette: ["#1A1440", "#5B4DFF", "#A59EFF"],
      motif: "night",
    },

    // —— ملحقات
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
      aspect: "3:4",
      palette: ["#3D3D50", "#A0A0B2", "#EEEDFF"],
      motif: "grid",
    },

    // —— ستيكرات
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
      aspect: "3:4",
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
    {
      title: "ستيكر ابتسامة",
      type: "sticker",
      tags: ["ستيكر", "ابتسامة", "لطيف"],
      isPremium: false,
      isLocked: false,
      format: "PNG",
      aspect: "1:1",
      palette: ["#FFD54A", "#FFF3C0", "#E6A800"],
      motif: "smile",
    },

    // —— أفكار
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
      aspect: "3:2",
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
    {
      title: "مودبورد هوية بنفسجية",
      type: "idea",
      tags: ["فكرة", "هوية", "مودبورد"],
      isPremium: true,
      isLocked: false,
      format: "PDF",
      aspect: "3:4",
      palette: ["#5B4DFF", "#EEEDFF", "#12121A"],
      motif: "moodboard",
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

  function dims(a) {
    return ASPECT_SIZE[a.aspect] || [400, 400];
  }

  function toDataUri(svg) {
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  }

  function titleBar(w, h, titleEscaped, titleColor, lightOverlay) {
    const barH = Math.max(48, Math.round(h * 0.18));
    const y = h - Math.round(barH * 0.35);
    const fade = lightOverlay
      ? `<defs><linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
           <stop offset="0%" stop-color="#000" stop-opacity="0"/>
           <stop offset="100%" stop-color="#000" stop-opacity="0.5"/>
         </linearGradient></defs>
         <rect y="${h - barH}" width="${w}" height="${barH}" fill="url(#fade)"/>`
      : "";
    return `${fade}
      <text x="${w / 2}" y="${y}" text-anchor="middle"
        font-family="system-ui,-apple-system,'SF Arabic',sans-serif"
        font-size="${Math.max(14, Math.round(w * 0.05))}" font-weight="700"
        fill="${titleColor}" direction="rtl">${titleEscaped}</text>`;
  }

  function svgImage(a) {
    const [w, h] = dims(a);
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
        <rect width="${w}" height="${h}" fill="url(#g)"/>
        <circle cx="${w * 0.8}" cy="${h * 0.2}" r="${w * 0.3}" fill="url(#blob)"/>
        <circle cx="${w * 0.15}" cy="${h * 0.85}" r="${w * 0.22}" fill="${c3}" opacity="0.45"/>`;
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
        <rect width="${w}" height="${h}" fill="url(#g)"/>
        <circle cx="${w / 2}" cy="${h * 0.52}" r="${Math.min(w, h) * 0.14}" fill="#FFE08A"/>
        <ellipse cx="${w / 2}" cy="${h * 0.8}" rx="${w * 0.45}" ry="${h * 0.07}" fill="${c1}" opacity="0.25"/>`;
    } else if (a.motif === "marble") {
      body = `
        <rect width="${w}" height="${h}" fill="${c1}"/>
        <path d="M0 ${h * 0.2} Q${w * 0.25} ${h * 0.1} ${w * 0.45} ${h * 0.25} T${w * 0.9} ${h * 0.15} L${w} ${h * 0.22} Q${w * 0.7} ${h * 0.35} ${w * 0.5} ${h * 0.28} T0 ${h * 0.4} Z" fill="${c2}" opacity="0.7"/>
        <path d="M0 ${h * 0.55} Q${w * 0.3} ${h * 0.45} ${w * 0.55} ${h * 0.6} T${w} ${h * 0.5} L${w} ${h * 0.6} Q${w * 0.7} ${h * 0.7} ${w * 0.45} ${h * 0.62} T0 ${h * 0.7} Z" fill="${c3}" opacity="0.35"/>
        <path d="M${w * 0.1} 0 Q${w * 0.2} ${h * 0.3} ${w * 0.15} ${h}" stroke="${c3}" stroke-width="1.5" fill="none" opacity="0.4"/>
        <path d="M${w * 0.7} 0 Q${w * 0.75} ${h * 0.4} ${w * 0.65} ${h}" stroke="${c2}" stroke-width="1.2" fill="none" opacity="0.5"/>`;
    } else if (a.motif === "geo") {
      body = `
        <rect width="${w}" height="${h}" fill="${c1}"/>
        <polygon points="0,0 ${w / 2},0 0,${h / 2}" fill="${c2}"/>
        <polygon points="${w},0 ${w},${h / 2} ${w / 2},0" fill="${c3}" opacity="0.55"/>
        <polygon points="0,${h} 0,${h * 0.55} ${w * 0.45},${h}" fill="${c3}" opacity="0.4"/>
        <polygon points="${w * 0.55},${h} ${w},${h} ${w},${h * 0.55}" fill="${c2}" opacity="0.7"/>
        <rect x="${w * 0.35}" y="${h * 0.35}" width="${w * 0.3}" height="${h * 0.3}" fill="none" stroke="${c3}" stroke-width="3" opacity="0.8"/>`;
    } else if (a.motif === "night") {
      body = `
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="${c1}"/>
            <stop offset="70%" stop-color="${c2}"/>
            <stop offset="100%" stop-color="${c3}"/>
          </linearGradient>
        </defs>
        <rect width="${w}" height="${h}" fill="url(#g)"/>
        <circle cx="${w * 0.2}" cy="${h * 0.15}" r="2" fill="#fff" opacity="0.9"/>
        <circle cx="${w * 0.7}" cy="${h * 0.1}" r="1.5" fill="#fff" opacity="0.8"/>
        <circle cx="${w * 0.5}" cy="${h * 0.22}" r="1.2" fill="#fff" opacity="0.7"/>
        <circle cx="${w * 0.85}" cy="${h * 0.3}" r="2" fill="#fff" opacity="0.85"/>
        <circle cx="${w * 0.3}" cy="${h * 0.35}" r="1" fill="#fff" opacity="0.6"/>
        <circle cx="${w * 0.75}" cy="${h * 0.18}" r="3" fill="${c3}" opacity="0.5"/>`;
    } else {
      body = `
        <defs>
          <pattern id="weave" width="16" height="16" patternUnits="userSpaceOnUse">
            <rect width="16" height="16" fill="${c1}"/>
            <path d="M0 0h16M0 8h16M0 0v16M8 0v16" stroke="${c2}" stroke-width="0.8" opacity="0.6"/>
          </pattern>
        </defs>
        <rect width="${w}" height="${h}" fill="url(#weave)"/>
        <rect width="${w}" height="${h}" fill="${c3}" opacity="0.12"/>`;
    }
    return toDataUri(
      `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${body}${titleBar(w, h, t, "#FFFFFF", true)}</svg>`
    );
  }

  function svgSticker(a) {
    const [w, h] = dims(a);
    const [c1, c2, c3] = a.palette;
    const t = escapeXml(shortTitle(a.title, 14));
    const cx = w / 2;
    const cy = h * 0.42;
    const r = Math.min(w, h) * 0.28;
    let icon = "";
    if (a.motif === "star") {
      const s = r * 0.9;
      icon = `<polygon points="${cx},${cy - s} ${cx + s * 0.22},${cy - s * 0.25} ${cx + s},${cy - s * 0.25} ${cx + s * 0.35},${cy + s * 0.15} ${cx + s * 0.55},${cy + s} ${cx},${cy + s * 0.45} ${cx - s * 0.55},${cy + s} ${cx - s * 0.35},${cy + s * 0.15} ${cx - s},${cy - s * 0.25} ${cx - s * 0.22},${cy - s * 0.25}" fill="${c1}" stroke="${c3}" stroke-width="3"/>`;
    } else if (a.motif === "heart") {
      icon = `<path d="M${cx} ${cy + r * 0.7} C${cx} ${cy + r * 0.7} ${cx - r} ${cy + r * 0.1} ${cx - r} ${cy - r * 0.35} C${cx - r} ${cy - r * 0.7} ${cx - r * 0.55} ${cy - r * 0.9} ${cx - r * 0.25} ${cy - r * 0.9} C${cx - r * 0.05} ${cy - r * 0.9} ${cx + r * 0.05} ${cy - r * 0.75} ${cx} ${cy - r * 0.55} C${cx - r * 0.05} ${cy - r * 0.75} ${cx + r * 0.05} ${cy - r * 0.9} ${cx + r * 0.25} ${cy - r * 0.9} C${cx + r * 0.55} ${cy - r * 0.9} ${cx + r} ${cy - r * 0.7} ${cx + r} ${cy - r * 0.35} C${cx + r} ${cy + r * 0.1} ${cx} ${cy + r * 0.7} ${cx} ${cy + r * 0.7} Z" fill="${c1}" stroke="${c3}" stroke-width="3"/>`;
    } else if (a.motif === "coffee") {
      icon = `
        <rect x="${cx - r * 0.45}" y="${cy - r * 0.35}" width="${r * 0.9}" height="${r * 0.85}" rx="10" fill="${c1}" stroke="${c3}" stroke-width="3"/>
        <path d="M${cx + r * 0.45} ${cy - r * 0.15} h${r * 0.2} a${r * 0.2} ${r * 0.2} 0 0 1 0 ${r * 0.4} h-${r * 0.2}" fill="none" stroke="${c3}" stroke-width="5"/>
        <ellipse cx="${cx}" cy="${cy - r * 0.35}" rx="${r * 0.4}" ry="${r * 0.1}" fill="${c2}"/>
        <path d="M${cx - r * 0.2} ${cy - r * 0.55} q${r * 0.08} -${r * 0.2} 0 -${r * 0.3} M${cx} ${cy - r * 0.58} q${r * 0.08} -${r * 0.22} 0 -${r * 0.35} M${cx + r * 0.2} ${cy - r * 0.55} q${r * 0.08} -${r * 0.2} 0 -${r * 0.3}" fill="none" stroke="${c3}" stroke-width="2.5" stroke-linecap="round" opacity="0.7"/>`;
    } else if (a.motif === "smile") {
      icon = `
        <circle cx="${cx}" cy="${cy}" r="${r}" fill="${c1}" stroke="${c3}" stroke-width="3"/>
        <circle cx="${cx - r * 0.35}" cy="${cy - r * 0.15}" r="${r * 0.1}" fill="${c3}"/>
        <circle cx="${cx + r * 0.35}" cy="${cy - r * 0.15}" r="${r * 0.1}" fill="${c3}"/>
        <path d="M${cx - r * 0.4} ${cy + r * 0.2} Q${cx} ${cy + r * 0.55} ${cx + r * 0.4} ${cy + r * 0.2}" fill="none" stroke="${c3}" stroke-width="4" stroke-linecap="round"/>`;
    } else {
      icon = `<path d="M${cx - r} ${cy + r * 0.4} L${cx - r * 0.85} ${cy - r * 0.5} L${cx - r * 0.3} ${cy} L${cx} ${cy - r * 0.85} L${cx + r * 0.3} ${cy} L${cx + r * 0.85} ${cy - r * 0.5} L${cx + r} ${cy + r * 0.4} Z" fill="${c1}" stroke="${c3}" stroke-width="3" stroke-linejoin="round"/>
        <rect x="${cx - r}" y="${cy + r * 0.4}" width="${r * 2}" height="${r * 0.2}" rx="3" fill="${c3}"/>
        <circle cx="${cx - r * 0.85}" cy="${cy - r * 0.52}" r="6" fill="${c2}"/>
        <circle cx="${cx}" cy="${cy - r * 0.88}" r="7" fill="${c2}"/>
        <circle cx="${cx + r * 0.85}" cy="${cy - r * 0.52}" r="6" fill="${c2}"/>`;
    }
    const body = `
      <defs>
        <pattern id="dots" width="18" height="18" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.4" fill="#C8C8D4" opacity="0.55"/>
        </pattern>
      </defs>
      <rect width="${w}" height="${h}" fill="#F7F7FA"/>
      <rect width="${w}" height="${h}" fill="url(#dots)"/>
      <circle cx="${cx}" cy="${cy}" r="${r * 1.15}" fill="#FFFFFF" stroke="#E2E2EA" stroke-width="2"/>
      ${icon}`;
    return toDataUri(
      `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${body}${titleBar(w, h, t, "#12121A", false)}</svg>`
    );
  }

  function svgAccessory(a) {
    const [w, h] = dims(a);
    const [c1, c2, c3] = a.palette;
    const t = escapeXml(shortTitle(a.title, 14));
    let mid = "";
    if (a.motif === "frame") {
      const fw = w * 0.62;
      const fh = h * 0.62;
      const fx = (w - fw) / 2;
      const fy = h * 0.12;
      mid = `
        <rect x="${fx}" y="${fy}" width="${fw}" height="${fh}" rx="16" fill="none" stroke="${c1}" stroke-width="8"/>
        <rect x="${fx + 14}" y="${fy + 14}" width="${fw - 28}" height="${fh - 28}" rx="8" fill="${c2}"/>
        <circle cx="${w / 2}" cy="${fy + fh * 0.4}" r="${Math.min(fw, fh) * 0.12}" fill="none" stroke="${c1}" stroke-width="5" opacity="0.5"/>
        <rect x="${w / 2 - fw * 0.25}" y="${fy + fh * 0.72}" width="${fw * 0.5}" height="8" rx="4" fill="${c1}" opacity="0.35"/>`;
    } else if (a.motif === "badge") {
      mid = `
        <circle cx="${w / 2}" cy="${h * 0.42}" r="${Math.min(w, h) * 0.28}" fill="${c1}"/>
        <circle cx="${w / 2}" cy="${h * 0.42}" r="${Math.min(w, h) * 0.22}" fill="none" stroke="${c2}" stroke-width="3" stroke-dasharray="7 5"/>
        <text x="${w / 2}" y="${h * 0.41}" text-anchor="middle" font-family="system-ui,sans-serif" font-size="${Math.min(w, h) * 0.14}" font-weight="800" fill="#fff">٪٥٠</text>
        <text x="${w / 2}" y="${h * 0.5}" text-anchor="middle" font-family="system-ui,sans-serif" font-size="${Math.min(w, h) * 0.05}" font-weight="600" fill="#fff" opacity="0.9">خصم</text>`;
    } else if (a.motif === "icons") {
      const s = Math.min(w, h) * 0.18;
      const gap = s * 0.25;
      const ox = (w - (s * 3 + gap * 2)) / 2;
      const oy = h * 0.22;
      mid = `
        <g fill="none" stroke="${c1}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
          <rect x="${ox}" y="${oy}" width="${s}" height="${s}" rx="10" fill="${c2}"/>
          <path d="M${ox + s * 0.28} ${oy + s * 0.5} h${s * 0.44} M${ox + s * 0.5} ${oy + s * 0.28} v${s * 0.44}" stroke="${c1}"/>
          <rect x="${ox + s + gap}" y="${oy}" width="${s}" height="${s}" rx="10" fill="${c2}"/>
          <circle cx="${ox + s + gap + s / 2}" cy="${oy + s / 2}" r="${s * 0.22}" stroke="${c1}"/>
          <rect x="${ox + (s + gap) * 2}" y="${oy}" width="${s}" height="${s}" rx="10" fill="${c2}"/>
          <path d="M${ox + (s + gap) * 2 + s * 0.28} ${oy + s * 0.65} l${s * 0.22} -${s * 0.35} l${s * 0.22} ${s * 0.35}" stroke="${c1}"/>
          <rect x="${ox + s * 0.5}" y="${oy + s + gap}" width="${s}" height="${s}" rx="10" fill="${c2}"/>
          <path d="M${ox + s * 0.5 + s * 0.28} ${oy + s + gap + s * 0.5} h${s * 0.44}" stroke="${c1}"/>
          <rect x="${ox + s * 0.5 + s + gap}" y="${oy + s + gap}" width="${s}" height="${s}" rx="10" fill="${c2}"/>
          <path d="M${ox + s * 0.5 + s + gap + s * 0.28} ${oy + s + gap + s * 0.28} l${s * 0.44} ${s * 0.44} M${ox + s * 0.5 + s + gap + s * 0.72} ${oy + s + gap + s * 0.28} l-${s * 0.44} ${s * 0.44}" stroke="${c1}"/>
        </g>`;
    } else if (a.motif === "ornament") {
      mid = `
        <rect x="${w * 0.08}" y="${h * 0.38}" width="${w * 0.84}" height="${h * 0.22}" rx="8" fill="${c1}"/>
        <path d="M${w * 0.15} ${h * 0.49} Q${w * 0.25} ${h * 0.38} ${w * 0.35} ${h * 0.49} T${w * 0.55} ${h * 0.49} T${w * 0.75} ${h * 0.49} T${w * 0.88} ${h * 0.49}" fill="none" stroke="${c2}" stroke-width="3"/>
        <circle cx="${w / 2}" cy="${h * 0.49}" r="10" fill="${c2}"/>
        <circle cx="${w * 0.35}" cy="${h * 0.49}" r="5" fill="${c2}" opacity="0.8"/>
        <circle cx="${w * 0.65}" cy="${h * 0.49}" r="5" fill="${c2}" opacity="0.8"/>`;
    } else {
      const gw = w * 0.7;
      const gh = h * 0.55;
      const gx = (w - gw) / 2;
      const gy = h * 0.15;
      mid = `
        <rect x="${gx}" y="${gy}" width="${gw}" height="${gh}" rx="8" fill="#fff" stroke="${c1}" stroke-width="2.5"/>
        <path d="M${gx} ${gy + gh / 3} h${gw} M${gx} ${gy + (gh * 2) / 3} h${gw} M${gx + gw / 3} ${gy} v${gh} M${gx + (gw * 2) / 3} ${gy} v${gh}" stroke="${c2}" stroke-width="1.2" opacity="0.7"/>
        <rect x="${gx + 8}" y="${gy + 8}" width="${gw / 3 - 12}" height="${gh / 3 - 12}" fill="${c3}" opacity="0.5"/>
        <rect x="${gx + gw / 3 + 6}" y="${gy + gh / 3 + 6}" width="${gw / 3 - 12}" height="${gh / 3 - 12}" fill="${c1}" opacity="0.2"/>`;
    }
    const pad = Math.min(w, h) * 0.05;
    const body = `
      <rect width="${w}" height="${h}" fill="#EEEDFF"/>
      <rect x="${pad}" y="${pad}" width="${w - pad * 2}" height="${h - pad * 2}" rx="16" fill="#FFFFFF" stroke="#E2E2EA" stroke-width="1.5"/>
      ${mid}`;
    return toDataUri(
      `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${body}${titleBar(w, h, t, "#12121A", false)}</svg>`
    );
  }

  function svgIdea(a) {
    const [w, h] = dims(a);
    const [c1, c2, c3] = a.palette;
    const t = escapeXml(shortTitle(a.title, 16));
    let board = "";
    if (a.motif === "ramadan") {
      board = `
        <rect width="${w}" height="${h}" fill="${c1}"/>
        <path d="M${w * 0.65} ${h * 0.18} a${w * 0.16} ${w * 0.16} 0 1 0 0 ${w * 0.32} a${w * 0.12} ${w * 0.12} 0 1 1 0 -${w * 0.32}" fill="${c2}"/>
        <circle cx="${w * 0.78}" cy="${h * 0.2}" r="2.5" fill="${c3}"/>
        <circle cx="${w * 0.85}" cy="${h * 0.3}" r="2" fill="${c3}"/>
        <circle cx="${w * 0.72}" cy="${h * 0.35}" r="2" fill="${c3}"/>
        <rect x="${w * 0.1}" y="${h * 0.62}" width="${w * 0.8}" height="${h * 0.22}" rx="12" fill="${c3}" opacity="0.92"/>
        <text x="${w / 2}" y="${h * 0.72}" text-anchor="middle" font-family="system-ui,sans-serif" font-size="${Math.max(14, w * 0.05)}" font-weight="700" fill="${c1}" direction="rtl">${t}</text>
        <text x="${w / 2}" y="${h * 0.78}" text-anchor="middle" font-family="system-ui,sans-serif" font-size="${Math.max(11, w * 0.032)}" fill="${c1}" opacity="0.7" direction="rtl">مودبورد · فكرة محتوى</text>`;
    } else if (a.motif === "saudi-palette") {
      board = `
        <rect width="${w}" height="${h}" fill="#F4F4F8"/>
        <rect x="${w * 0.08}" y="${h * 0.1}" width="${w * 0.84}" height="${h * 0.55}" rx="14" fill="#fff" stroke="#E2E2EA"/>
        <rect x="${w * 0.12}" y="${h * 0.16}" width="${w * 0.22}" height="${h * 0.42}" rx="8" fill="${c1}"/>
        <rect x="${w * 0.39}" y="${h * 0.16}" width="${w * 0.22}" height="${h * 0.42}" rx="8" fill="${c2}" stroke="#E2E2EA"/>
        <rect x="${w * 0.66}" y="${h * 0.16}" width="${w * 0.22}" height="${h * 0.42}" rx="8" fill="${c3}"/>
        <text x="${w / 2}" y="${h * 0.8}" text-anchor="middle" font-family="system-ui,sans-serif" font-size="${Math.max(14, w * 0.048)}" font-weight="700" fill="#12121A" direction="rtl">${t}</text>
        <text x="${w / 2}" y="${h * 0.88}" text-anchor="middle" font-family="system-ui,sans-serif" font-size="${Math.max(11, w * 0.03)}" fill="#5C5C6E" direction="rtl">لوحة ألوان · هوية</text>`;
    } else if (a.motif === "yt-cover") {
      board = `
        <rect width="${w}" height="${h}" fill="${c2}"/>
        <rect x="${w * 0.06}" y="${h * 0.22}" width="${w * 0.88}" height="${h * 0.42}" rx="8" fill="#111"/>
        <rect x="${w * 0.06}" y="${h * 0.22}" width="6" height="${h * 0.42}" fill="${c1}"/>
        <circle cx="${w / 2}" cy="${h * 0.43}" r="${Math.min(w, h) * 0.08}" fill="${c1}"/>
        <polygon points="${w / 2 - 6},${h * 0.43 - 8} ${w / 2 + 10},${h * 0.43} ${w / 2 - 6},${h * 0.43 + 8}" fill="#fff"/>
        <text x="${w / 2}" y="${h * 0.8}" text-anchor="middle" font-family="system-ui,sans-serif" font-size="${Math.max(14, w * 0.045)}" font-weight="700" fill="#fff" direction="rtl">${t}</text>
        <text x="${w / 2}" y="${h * 0.9}" text-anchor="middle" font-family="system-ui,sans-serif" font-size="${Math.max(11, w * 0.028)}" fill="#A0A0B2" direction="rtl">غلاف فيديو · ١٦:٩</text>`;
    } else if (a.motif === "moodboard") {
      board = `
        <rect width="${w}" height="${h}" fill="${c2}"/>
        <rect x="${w * 0.08}" y="${h * 0.08}" width="${w * 0.5}" height="${h * 0.35}" rx="10" fill="${c1}"/>
        <rect x="${w * 0.62}" y="${h * 0.08}" width="${w * 0.3}" height="${h * 0.2}" rx="8" fill="${c3}" opacity="0.85"/>
        <rect x="${w * 0.62}" y="${h * 0.32}" width="${w * 0.3}" height="${h * 0.11}" rx="6" fill="#fff"/>
        <rect x="${w * 0.08}" y="${h * 0.48}" width="${w * 0.38}" height="${h * 0.22}" rx="8" fill="#fff"/>
        <rect x="${w * 0.5}" y="${h * 0.48}" width="${w * 0.42}" height="${h * 0.22}" rx="8" fill="${c1}" opacity="0.35"/>
        <text x="${w / 2}" y="${h * 0.85}" text-anchor="middle" font-family="system-ui,sans-serif" font-size="${Math.max(13, w * 0.05)}" font-weight="700" fill="${c3}" direction="rtl">${t}</text>
        <text x="${w / 2}" y="${h * 0.92}" text-anchor="middle" font-family="system-ui,sans-serif" font-size="${Math.max(11, w * 0.032)}" fill="${c1}" direction="rtl">مودبورد · هوية</text>`;
    } else {
      /* story */
      board = `
        <defs>
          <linearGradient id="sg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="${c1}"/>
            <stop offset="100%" stop-color="${c2}"/>
          </linearGradient>
        </defs>
        <rect width="${w}" height="${h}" fill="${c3}"/>
        <rect x="${w * 0.22}" y="${h * 0.08}" width="${w * 0.56}" height="${h * 0.62}" rx="18" fill="url(#sg)"/>
        <rect x="${w * 0.26}" y="${h * 0.11}" width="${w * 0.48}" height="${h * 0.55}" rx="12" fill="#fff" opacity="0.95"/>
        <rect x="${w * 0.32}" y="${h * 0.18}" width="${w * 0.36}" height="${h * 0.14}" rx="8" fill="${c1}" opacity="0.2"/>
        <rect x="${w * 0.32}" y="${h * 0.38}" width="${w * 0.28}" height="8" rx="4" fill="${c1}" opacity="0.35"/>
        <rect x="${w * 0.32}" y="${h * 0.43}" width="${w * 0.2}" height="6" rx="3" fill="${c2}" opacity="0.3"/>
        <text x="${w / 2}" y="${h * 0.85}" text-anchor="middle" font-family="system-ui,sans-serif" font-size="${Math.max(13, w * 0.055)}" font-weight="700" fill="#12121A" direction="rtl">${t}</text>`;
    }
    return toDataUri(
      `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${board}</svg>`
    );
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
    saved: new Set([1, 7, 12, 18]),
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

  function bookmarkSVG(filled) {
    if (filled) {
      return `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v17l-6-3.5L6 21V4z"/></svg>`;
    }
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 3.5h10a1.5 1.5 0 0 1 1.5 1.5v15.2l-6.5-3.6-6.5 3.6V5A1.5 1.5 0 0 1 7 3.5z"/></svg>`;
  }

  function pinHTML(asset) {
    const saved = state.saved.has(asset.id);
    const downloading = state.downloading.has(asset.id);
    return `
      <article class="pin" data-id="${asset.id}" role="button" tabindex="0" aria-label="${asset.title}">
        <div class="pin-media" data-aspect="${asset.aspect}">
          ${mediaHTML(asset)}
          <div class="pin-badges">
            ${asset.isPremium ? `<span class="badge-circle badge-premium" title="مدفوع">${CROWN_SVG}</span>` : ""}
            ${asset.isLocked ? `<span class="badge-circle badge-locked" title="مقفل">${LOCK_SVG}</span>` : ""}
          </div>
          <button class="save-overlay ${saved ? "saved" : ""}" data-save="${asset.id}" aria-label="${saved ? "إزالة من المحفوظات" : "حفظ"}" type="button">
            ${bookmarkSVG(saved)}
          </button>
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
        <div class="pin-meta">
          <div class="pin-title">${asset.title}</div>
          <span class="pin-type">${TYPES[asset.type].label}</span>
        </div>
      </article>
    `;
  }

  function skeletonHTML() {
    return Array.from({ length: 6 })
      .map(
        () => `
      <div class="pin skeleton-pin" aria-hidden="true">
        <div class="pin-media"></div>
        <div class="pin-meta">
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
      grid.className = "masonry skeleton-mode";
      grid.innerHTML = skeletonHTML();
      end.hidden = true;
      empty.hidden = true;
      return;
    }

    const list = filtered();
    if (!list.length) {
      grid.className = "masonry";
      grid.innerHTML = "";
      empty.hidden = false;
      end.hidden = true;
      return;
    }
    empty.hidden = true;
    grid.className = "masonry";
    grid.innerHTML = list.map(pinHTML).join("");
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
    grid.className = "masonry";
    grid.innerHTML = list.map(pinHTML).join("");
    bindCardEvents(grid);
  }

  function bindCardEvents(root) {
    $$(".pin", root).forEach((card) => {
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
    preview.setAttribute("data-aspect", asset.aspect);
    preview.innerHTML = mediaHTML(asset);

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
  }

  document.addEventListener("DOMContentLoaded", init);
})();
