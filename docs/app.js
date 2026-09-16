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

  const G = "#003626";
  const S = "#CFEDC2";
  const K = "#C7E6BC";

  function svgWrap(w, h, title, inner) {
    return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${esc(title)}" preserveAspectRatio="xMidYMid slice">
      <rect width="${w}" height="${h}" fill="${G}"/>${inner}</svg>`;
  }

  /** Unique coherent SVG art per design — Sedra palette only */
  function art(d) {
    const title = d.title;
    const byId = {
      "ui-dash": svgWrap(200, 250, title, `
        <rect x="18" y="22" width="40" height="206" rx="8" fill="${K}" opacity=".18"/>
        <circle cx="38" cy="42" r="8" fill="${S}"/>
        <rect x="26" y="62" width="24" height="6" rx="3" fill="${K}"/>
        <rect x="26" y="78" width="24" height="6" rx="3" fill="${K}" opacity=".5"/>
        <rect x="26" y="94" width="24" height="6" rx="3" fill="${K}" opacity=".35"/>
        <rect x="70" y="28" width="50" height="8" rx="4" fill="${S}"/>
        <rect x="70" y="50" width="54" height="46" rx="8" fill="${S}" opacity=".35"/>
        <rect x="130" y="50" width="52" height="46" rx="8" fill="${K}" opacity=".28"/>
        <rect x="70" y="108" width="112" height="70" rx="8" fill="${K}" opacity=".2"/>
        <polyline points="78,160 100,132 122,148 148,118 172,140" fill="none" stroke="${S}" stroke-width="2.5" stroke-linecap="round"/>
        <rect x="70" y="192" width="112" height="10" rx="5" fill="${S}" opacity=".55"/>`),
      "ui-mobile": svgWrap(200, 333, title, `
        <rect x="48" y="18" width="104" height="298" rx="22" fill="none" stroke="${K}" stroke-width="3"/>
        <rect x="78" y="28" width="44" height="6" rx="3" fill="${K}"/>
        <rect x="62" y="50" width="76" height="10" rx="5" fill="${S}"/>
        <rect x="62" y="72" width="76" height="88" rx="10" fill="${K}" opacity=".28"/>
        <rect x="62" y="170" width="34" height="34" rx="8" fill="${S}" opacity=".5"/>
        <rect x="104" y="170" width="34" height="34" rx="8" fill="${K}" opacity=".35"/>
        <rect x="62" y="214" width="76" height="8" rx="4" fill="${K}" opacity=".45"/>
        <rect x="62" y="230" width="52" height="8" rx="4" fill="${K}" opacity=".25"/>
        <rect x="60" y="274" width="80" height="28" rx="10" fill="${S}" opacity=".2"/>
        <circle cx="80" cy="288" r="4" fill="${S}"/>
        <circle cx="100" cy="288" r="4" fill="${K}"/>
        <circle cx="120" cy="288" r="4" fill="${K}"/>`),
      "ui-settings": svgWrap(200, 200, title, `
        <rect x="28" y="28" width="144" height="144" rx="16" fill="none" stroke="${K}" stroke-width="2"/>
        <rect x="44" y="48" width="72" height="8" rx="4" fill="${S}"/>
        <rect x="132" y="46" width="22" height="12" rx="6" fill="${S}" opacity=".7"/>
        <circle cx="148" cy="52" r="5" fill="${G}"/>
        <rect x="44" y="78" width="72" height="8" rx="4" fill="${K}"/>
        <rect x="132" y="76" width="22" height="12" rx="6" fill="${K}" opacity=".4"/>
        <rect x="44" y="108" width="72" height="8" rx="4" fill="${S}" opacity=".7"/>
        <rect x="132" y="106" width="22" height="12" rx="6" fill="${S}"/>
        <circle cx="148" cy="112" r="5" fill="${G}"/>
        <rect x="44" y="138" width="72" height="8" rx="4" fill="${K}" opacity=".6"/>
        <rect x="132" y="136" width="22" height="12" rx="6" fill="${K}" opacity=".3"/>`),
      "ui-onboard": svgWrap(200, 280, title, `
        <circle cx="100" cy="88" r="36" fill="none" stroke="${S}" stroke-width="3"/>
        <circle cx="100" cy="88" r="14" fill="${S}" opacity=".45"/>
        <rect x="50" y="148" width="100" height="10" rx="5" fill="${S}"/>
        <rect x="62" y="168" width="76" height="7" rx="3.5" fill="${K}" opacity=".5"/>
        <rect x="44" y="200" width="112" height="28" rx="14" fill="${S}" opacity=".85"/>
        <rect x="56" y="238" width="88" height="12" rx="6" fill="${K}" opacity=".25"/>
        <circle cx="78" cy="262" r="3.5" fill="${S}"/>
        <circle cx="100" cy="262" r="3.5" fill="${K}"/>
        <circle cx="122" cy="262" r="3.5" fill="${K}" opacity=".5"/>`),
      "ui-chat": svgWrap(200, 280, title, `
        <rect x="24" y="24" width="152" height="232" rx="14" fill="none" stroke="${K}" stroke-width="2"/>
        <circle cx="48" cy="48" r="10" fill="${S}" opacity=".7"/>
        <rect x="66" y="42" width="60" height="7" rx="3.5" fill="${S}"/>
        <rect x="66" y="54" width="40" height="5" rx="2.5" fill="${K}" opacity=".4"/>
        <rect x="40" y="80" width="90" height="28" rx="12" fill="${K}" opacity=".25"/>
        <rect x="70" y="120" width="90" height="28" rx="12" fill="${S}" opacity=".45"/>
        <rect x="40" y="160" width="70" height="24" rx="12" fill="${K}" opacity=".2"/>
        <rect x="36" y="214" width="100" height="22" rx="11" fill="${K}" opacity=".18"/>
        <circle cx="156" cy="225" r="12" fill="${S}"/>`),
      "ui-profile": svgWrap(200, 250, title, `
        <circle cx="100" cy="70" r="32" fill="none" stroke="${S}" stroke-width="3"/>
        <circle cx="100" cy="70" r="14" fill="${S}" opacity=".4"/>
        <rect x="55" y="118" width="90" height="10" rx="5" fill="${S}"/>
        <rect x="70" y="136" width="60" height="7" rx="3.5" fill="${K}" opacity=".5"/>
        <rect x="28" y="168" width="48" height="48" rx="10" fill="${S}" opacity=".3"/>
        <rect x="84" y="168" width="48" height="48" rx="10" fill="${K}" opacity=".28"/>
        <rect x="140" y="168" width="32" height="48" rx="10" fill="${K}" opacity=".18"/>`),
      "ui-login": svgWrap(200, 260, title, `
        <rect x="36" y="36" width="128" height="188" rx="14" fill="none" stroke="${K}" stroke-width="2"/>
        <circle cx="100" cy="72" r="18" fill="${S}" opacity=".5"/>
        <rect x="52" y="110" width="96" height="14" rx="7" fill="${K}" opacity=".25"/>
        <rect x="52" y="136" width="96" height="14" rx="7" fill="${K}" opacity=".18"/>
        <rect x="52" y="168" width="96" height="28" rx="14" fill="${S}" opacity=".8"/>
        <rect x="70" y="208" width="60" height="6" rx="3" fill="${K}" opacity=".35"/>`),
      "ui-cards": svgWrap(200, 220, title, `
        <rect x="20" y="40" width="100" height="130" rx="12" fill="${K}" opacity=".2" transform="rotate(-6 70 105)"/>
        <rect x="50" y="30" width="110" height="140" rx="12" fill="none" stroke="${S}" stroke-width="2.5"/>
        <rect x="66" y="50" width="70" height="8" rx="4" fill="${S}"/>
        <rect x="66" y="70" width="78" height="50" rx="8" fill="${S}" opacity=".28"/>
        <rect x="66" y="132" width="50" height="8" rx="4" fill="${K}" opacity=".45"/>`),
      "mock-phone": svgWrap(200, 333, title, `
        <rect x="52" y="22" width="96" height="250" rx="18" fill="none" stroke="${S}" stroke-width="3"/>
        <circle cx="100" cy="36" r="3" fill="${K}"/>
        <rect x="64" y="48" width="72" height="196" rx="6" fill="${K}" opacity=".16"/>
        <rect x="72" y="62" width="40" height="6" rx="3" fill="${S}"/>
        <rect x="72" y="80" width="56" height="70" rx="8" fill="${S}" opacity=".35"/>
        <rect x="72" y="160" width="56" height="8" rx="4" fill="${K}" opacity=".5"/>
        <ellipse cx="100" cy="292" rx="42" ry="7" fill="${S}" opacity=".18"/>`),
      "mock-tablet": svgWrap(200, 160, title, `
        <rect x="18" y="28" width="164" height="104" rx="12" fill="none" stroke="${S}" stroke-width="3"/>
        <circle cx="174" cy="80" r="4" fill="${K}"/>
        <rect x="32" y="42" width="128" height="76" rx="4" fill="${K}" opacity=".18"/>
        <rect x="40" y="52" width="48" height="6" rx="3" fill="${S}"/>
        <rect x="40" y="66" width="112" height="36" rx="6" fill="${S}" opacity=".3"/>`),
      "mock-browser": svgWrap(200, 150, title, `
        <rect x="16" y="22" width="168" height="108" rx="10" fill="none" stroke="${K}" stroke-width="2.5"/>
        <rect x="16" y="22" width="168" height="22" rx="10" fill="${K}" opacity=".2"/>
        <circle cx="32" cy="33" r="3.5" fill="${S}"/>
        <circle cx="44" cy="33" r="3.5" fill="${K}"/>
        <circle cx="56" cy="33" r="3.5" fill="${K}" opacity=".5"/>
        <rect x="72" y="28" width="92" height="10" rx="5" fill="${G}"/>
        <rect x="28" y="56" width="64" height="60" rx="6" fill="${S}" opacity=".3"/>
        <rect x="100" y="56" width="70" height="18" rx="4" fill="${K}" opacity=".35"/>
        <rect x="100" y="80" width="70" height="36" rx="4" fill="${K}" opacity=".18"/>`),
      "mock-watch": svgWrap(200, 220, title, `
        <rect x="78" y="18" width="44" height="28" rx="6" fill="${K}" opacity=".35"/>
        <rect x="62" y="44" width="76" height="100" rx="22" fill="none" stroke="${S}" stroke-width="3"/>
        <circle cx="100" cy="94" r="22" fill="${S}" opacity=".25"/>
        <text x="100" y="100" text-anchor="middle" fill="${S}" font-family="Georgia, serif" font-size="14">9:41</text>
        <rect x="78" y="152" width="44" height="40" rx="6" fill="${K}" opacity=".3"/>`),
      "mock-desktop": svgWrap(200, 160, title, `
        <rect x="20" y="22" width="160" height="96" rx="6" fill="none" stroke="${S}" stroke-width="2.5"/>
        <rect x="28" y="30" width="144" height="72" rx="3" fill="${K}" opacity=".16"/>
        <rect x="36" y="40" width="50" height="6" rx="3" fill="${S}"/>
        <rect x="36" y="54" width="120" height="36" rx="4" fill="${S}" opacity=".28"/>
        <rect x="70" y="122" width="60" height="8" rx="2" fill="${K}" opacity=".4"/>
        <rect x="50" y="132" width="100" height="10" rx="3" fill="${K}" opacity=".25"/>`),
      "mock-laptop": svgWrap(200, 150, title, `
        <rect x="36" y="22" width="128" height="82" rx="6" fill="none" stroke="${S}" stroke-width="2.5"/>
        <rect x="44" y="30" width="112" height="60" rx="3" fill="${K}" opacity=".18"/>
        <rect x="52" y="40" width="40" height="6" rx="3" fill="${S}"/>
        <rect x="52" y="54" width="80" height="28" rx="4" fill="${S}" opacity=".3"/>
        <path d="M20 110h160l-10 18H30z" fill="${K}" opacity=".35"/>
        <rect x="80" y="114" width="40" height="4" rx="2" fill="${S}" opacity=".5"/>`),
      "tpl-social": svgWrap(200, 250, title, `
        <rect x="22" y="22" width="74" height="74" rx="10" fill="${S}" opacity=".45"/>
        <rect x="104" y="22" width="74" height="74" rx="10" fill="${K}" opacity=".3"/>
        <rect x="22" y="106" width="74" height="74" rx="10" fill="${K}" opacity=".22"/>
        <rect x="104" y="106" width="74" height="74" rx="10" fill="${S}" opacity=".28"/>
        <circle cx="59" cy="55" r="12" fill="${G}" opacity=".35"/>
        <rect x="118" y="48" width="46" height="6" rx="3" fill="${S}"/>
        <rect x="118" y="62" width="32" height="5" rx="2.5" fill="${K}"/>
        <rect x="36" y="196" width="128" height="8" rx="4" fill="${S}" opacity=".5"/>
        <rect x="52" y="214" width="96" height="6" rx="3" fill="${K}" opacity=".35"/>`),
      "tpl-story": svgWrap(200, 356, title, `
        <rect x="44" y="16" width="112" height="324" rx="16" fill="none" stroke="${K}" stroke-width="2.5"/>
        <rect x="56" y="28" width="40" height="4" rx="2" fill="${S}"/>
        <rect x="100" y="28" width="40" height="4" rx="2" fill="${K}" opacity=".4"/>
        <circle cx="68" cy="56" r="10" fill="${S}" opacity=".7"/>
        <rect x="84" y="50" width="52" height="6" rx="3" fill="${K}"/>
        <rect x="56" y="80" width="88" height="160" rx="10" fill="${K}" opacity=".2"/>
        <rect x="56" y="256" width="88" height="10" rx="5" fill="${S}"/>
        <rect x="56" y="274" width="64" height="7" rx="3.5" fill="${K}" opacity=".45"/>
        <rect x="64" y="308" width="72" height="16" rx="8" fill="${S}" opacity=".35"/>`),
      "tpl-email": svgWrap(200, 267, title, `
        <rect x="24" y="18" width="152" height="230" rx="8" fill="none" stroke="${K}" stroke-width="2"/>
        <rect x="24" y="18" width="152" height="36" fill="${S}" opacity=".25"/>
        <rect x="40" y="30" width="64" height="10" rx="5" fill="${S}"/>
        <rect x="40" y="68" width="120" height="8" rx="4" fill="${K}"/>
        <rect x="40" y="86" width="96" height="6" rx="3" fill="${K}" opacity=".45"/>
        <rect x="40" y="108" width="120" height="70" rx="6" fill="${S}" opacity=".22"/>
        <rect x="56" y="196" width="88" height="20" rx="10" fill="${S}" opacity=".7"/>`),
      "tpl-slides": svgWrap(200, 150, title, `
        <rect x="14" y="28" width="172" height="96" rx="8" fill="none" stroke="${K}" stroke-width="2"/>
        <rect x="28" y="44" width="70" height="10" rx="5" fill="${S}"/>
        <rect x="28" y="64" width="96" height="6" rx="3" fill="${K}" opacity=".5"/>
        <rect x="28" y="80" width="80" height="6" rx="3" fill="${K}" opacity=".3"/>
        <circle cx="154" cy="76" r="22" fill="${S}" opacity=".35"/>
        <rect x="70" y="132" width="8" height="8" rx="2" fill="${S}"/>
        <rect x="84" y="132" width="8" height="8" rx="2" fill="${K}" opacity=".5"/>
        <rect x="98" y="132" width="8" height="8" rx="2" fill="${K}" opacity=".3"/>`),
      "tpl-youtube": svgWrap(200, 130, title, `
        <rect x="12" y="22" width="176" height="86" rx="8" fill="none" stroke="${K}" stroke-width="2"/>
        <rect x="12" y="22" width="176" height="86" rx="8" fill="${K}" opacity=".12"/>
        <polygon points="92,50 92,80 118,65" fill="${S}"/>
        <rect x="24" y="90" width="80" height="6" rx="3" fill="${S}" opacity=".6"/>
        <rect x="24" y="100" width="48" height="4" rx="2" fill="${K}" opacity=".4"/>`),
      "tpl-linkedin": svgWrap(200, 200, title, `
        <rect x="24" y="24" width="152" height="152" rx="10" fill="none" stroke="${K}" stroke-width="2"/>
        <circle cx="56" cy="56" r="14" fill="${S}" opacity=".7"/>
        <rect x="80" y="46" width="72" height="8" rx="4" fill="${S}"/>
        <rect x="80" y="60" width="48" height="6" rx="3" fill="${K}" opacity=".45"/>
        <rect x="40" y="90" width="120" height="6" rx="3" fill="${K}" opacity=".35"/>
        <rect x="40" y="104" width="100" height="6" rx="3" fill="${K}" opacity=".25"/>
        <rect x="40" y="128" width="120" height="32" rx="6" fill="${S}" opacity=".22"/>`),
      "tpl-invoice": svgWrap(200, 267, title, `
        <rect x="28" y="16" width="144" height="236" rx="6" fill="none" stroke="${K}" stroke-width="2"/>
        <rect x="40" y="28" width="50" height="10" rx="5" fill="${S}"/>
        <rect x="120" y="30" width="36" height="6" rx="3" fill="${K}" opacity=".4"/>
        <line x1="40" y1="52" x2="160" y2="52" stroke="${K}" stroke-width="1"/>
        <rect x="40" y="64" width="80" height="6" rx="3" fill="${K}" opacity=".5"/>
        <rect x="40" y="80" width="120" height="6" rx="3" fill="${K}" opacity=".3"/>
        <rect x="40" y="96" width="100" height="6" rx="3" fill="${K}" opacity=".25"/>
        <rect x="40" y="130" width="120" height="8" rx="4" fill="${S}" opacity=".2"/>
        <rect x="40" y="148" width="120" height="8" rx="4" fill="${K}" opacity=".15"/>
        <rect x="40" y="166" width="120" height="8" rx="4" fill="${S}" opacity=".15"/>
        <rect x="100" y="210" width="60" height="14" rx="4" fill="${S}" opacity=".55"/>`),
      "tpl-resume": svgWrap(200, 280, title, `
        <rect x="24" y="16" width="152" height="248" rx="6" fill="none" stroke="${K}" stroke-width="2"/>
        <rect x="24" y="16" width="52" height="248" fill="${S}" opacity=".18"/>
        <circle cx="50" cy="48" r="14" fill="${S}" opacity=".6"/>
        <rect x="36" y="78" width="28" height="5" rx="2.5" fill="${S}"/>
        <rect x="36" y="92" width="28" height="5" rx="2.5" fill="${K}" opacity=".4"/>
        <rect x="90" y="36" width="70" height="8" rx="4" fill="${S}"/>
        <rect x="90" y="54" width="50" height="5" rx="2.5" fill="${K}" opacity=".4"/>
        <rect x="90" y="80" width="70" height="5" rx="2.5" fill="${K}" opacity=".3"/>
        <rect x="90" y="96" width="60" height="5" rx="2.5" fill="${K}" opacity=".22"/>
        <rect x="90" y="130" width="70" height="40" rx="4" fill="${K}" opacity=".15"/>`),
      "ico-set": svgWrap(200, 200, title, `
        <g fill="none" stroke="${S}" stroke-width="2.4" stroke-linecap="round">
          <circle cx="58" cy="58" r="18"/>
          <rect x="124" y="40" width="36" height="36" rx="8"/>
          <path d="M40 142l18-22 14 10 16-20"/>
          <path d="M130 124h32M146 108v32"/>
        </g>
        <circle cx="58" cy="58" r="5" fill="${K}"/>
        <circle cx="142" cy="58" r="4" fill="${S}"/>
        <circle cx="146" cy="140" r="4" fill="${K}"/>`),
      "ico-nav": svgWrap(200, 160, title, `
        <rect x="24" y="96" width="152" height="40" rx="16" fill="${K}" opacity=".18"/>
        <g fill="none" stroke="${S}" stroke-width="2.2" stroke-linecap="round">
          <path d="M52 112v12M46 118h12"/>
          <circle cx="100" cy="118" r="8"/>
          <rect x="136" y="110" width="16" height="16" rx="3"/>
        </g>
        <rect x="40" y="36" width="48" height="8" rx="4" fill="${S}"/>
        <rect x="40" y="52" width="120" height="6" rx="3" fill="${K}" opacity=".4"/>
        <rect x="40" y="68" width="88" height="6" rx="3" fill="${K}" opacity=".25"/>`),
      "ico-weather": svgWrap(200, 200, title, `
        <circle cx="86" cy="86" r="28" fill="none" stroke="${S}" stroke-width="3"/>
        <g stroke="${K}" stroke-width="2.5" stroke-linecap="round">
          <path d="M86 42v10M86 120v10M46 86h10M116 86h10"/>
          <path d="M58 58l7 7M107 107l7 7M58 114l7-7M107 65l7-7"/>
        </g>
        <path d="M108 118c18 0 32-12 32-28-12 0-20 6-24 14-6-8-16-10-24-6 4 12 8 20 16 20z" fill="${K}" opacity=".45"/>`),
      "ico-commerce": svgWrap(200, 200, title, `
        <path d="M52 64h96l-10 72H62z" fill="none" stroke="${S}" stroke-width="2.5" stroke-linejoin="round"/>
        <path d="M52 64l-12-20H28" stroke="${K}" stroke-width="2.5" stroke-linecap="round"/>
        <circle cx="78" cy="152" r="8" fill="none" stroke="${S}" stroke-width="2.5"/>
        <circle cx="122" cy="152" r="8" fill="none" stroke="${S}" stroke-width="2.5"/>
        <rect x="70" y="84" width="60" height="8" rx="4" fill="${K}" opacity=".45"/>`),
      "ico-media": svgWrap(200, 200, title, `
        <circle cx="70" cy="100" r="36" fill="none" stroke="${S}" stroke-width="2.5"/>
        <polygon points="62,82 62,118 90,100" fill="${S}"/>
        <rect x="118" y="60" width="48" height="36" rx="6" fill="none" stroke="${K}" stroke-width="2"/>
        <circle cx="142" cy="78" r="6" fill="${S}" opacity=".6"/>
        <rect x="118" y="108" width="48" height="32" rx="6" fill="${K}" opacity=".25"/>`),
      "ico-finance": svgWrap(200, 200, title, `
        <rect x="50" y="50" width="100" height="100" rx="12" fill="none" stroke="${S}" stroke-width="2.5"/>
        <text x="100" y="112" text-anchor="middle" fill="${S}" font-family="Georgia, serif" font-size="36">﷼</text>
        <polyline points="60,150 85,120 110,135 140,95" fill="none" stroke="${K}" stroke-width="2.5" stroke-linecap="round"/>`),
      "ico-social": svgWrap(200, 180, title, `
        <circle cx="60" cy="70" r="22" fill="none" stroke="${S}" stroke-width="2.5"/>
        <circle cx="140" cy="70" r="22" fill="none" stroke="${K}" stroke-width="2.5"/>
        <circle cx="100" cy="120" r="22" fill="none" stroke="${S}" stroke-width="2.5"/>
        <line x1="78" y1="80" x2="122" y2="80" stroke="${K}" stroke-width="2"/>
        <line x1="75" y1="88" x2="90" y2="108" stroke="${K}" stroke-width="2"/>
        <line x1="125" y1="88" x2="110" y2="108" stroke="${K}" stroke-width="2"/>`),
      "pos-event": svgWrap(200, 300, title, `
        <rect x="22" y="18" width="156" height="264" rx="4" fill="none" stroke="${K}" stroke-width="2"/>
        <text x="100" y="70" text-anchor="middle" fill="${S}" font-family="Georgia, serif" font-size="20">SEDRA</text>
        <line x1="56" y1="86" x2="144" y2="86" stroke="${K}" stroke-width="1.5"/>
        <rect x="70" y="108" width="60" height="60" rx="8" fill="${S}" opacity=".2"/>
        <text x="100" y="144" text-anchor="middle" fill="${S}" font-family="Georgia, serif" font-size="22">24</text>
        <rect x="50" y="186" width="100" height="8" rx="4" fill="${S}" opacity=".55"/>
        <rect x="64" y="204" width="72" height="6" rx="3" fill="${K}" opacity=".4"/>
        <rect x="60" y="232" width="80" height="18" rx="9" fill="${S}" opacity=".35"/>`),
      "pos-quote": svgWrap(200, 250, title, `
        <text x="46" y="90" fill="${S}" font-family="Georgia, serif" font-size="64" opacity=".85">“</text>
        <rect x="48" y="108" width="104" height="8" rx="4" fill="${S}"/>
        <rect x="56" y="126" width="88" height="7" rx="3.5" fill="${K}" opacity=".5"/>
        <rect x="64" y="144" width="72" height="7" rx="3.5" fill="${K}" opacity=".3"/>
        <line x1="80" y1="176" x2="120" y2="176" stroke="${S}" stroke-width="1.5"/>
        <text x="100" y="204" text-anchor="middle" fill="${K}" font-family="Georgia, serif" font-size="11" letter-spacing="2">SEDRA</text>`),
      "pos-launch": svgWrap(200, 267, title, `
        <circle cx="100" cy="108" r="44" fill="none" stroke="${S}" stroke-width="2"/>
        <circle cx="100" cy="108" r="18" fill="${S}" opacity=".35"/>
        <g stroke="${K}" stroke-width="2" stroke-linecap="round">
          <path d="M100 48v12M100 156v12M52 108h12M136 108h12"/>
          <path d="M66 74l8 8M126 134l8 8M66 142l8-8M126 74l8-8"/>
        </g>
        <rect x="50" y="196" width="100" height="8" rx="4" fill="${S}" opacity=".6"/>
        <rect x="68" y="214" width="64" height="6" rx="3" fill="${K}" opacity=".4"/>`),
      "pos-exhibit": svgWrap(200, 280, title, `
        <rect x="24" y="20" width="152" height="240" rx="4" fill="none" stroke="${K}" stroke-width="2"/>
        <rect x="40" y="40" width="120" height="80" rx="6" fill="${S}" opacity=".2"/>
        <circle cx="100" cy="80" r="18" fill="none" stroke="${S}" stroke-width="2"/>
        <rect x="48" y="140" width="104" height="8" rx="4" fill="${S}"/>
        <rect x="60" y="158" width="80" height="6" rx="3" fill="${K}" opacity=".45"/>
        <rect x="40" y="184" width="36" height="48" rx="4" fill="${K}" opacity=".25"/>
        <rect x="82" y="184" width="36" height="48" rx="4" fill="${S}" opacity=".3"/>
        <rect x="124" y="184" width="36" height="48" rx="4" fill="${K}" opacity=".18"/>`),
      "pos-typo": svgWrap(200, 280, title, `
        <text x="28" y="90" fill="${S}" font-family="Georgia, serif" font-size="42">سدرة</text>
        <text x="28" y="130" fill="${K}" font-family="Georgia, serif" font-size="18" letter-spacing="4">SEDRA</text>
        <line x1="28" y1="150" x2="120" y2="150" stroke="${S}" stroke-width="2"/>
        <rect x="28" y="170" width="100" height="6" rx="3" fill="${K}" opacity=".4"/>
        <rect x="28" y="186" width="70" height="6" rx="3" fill="${K}" opacity=".25"/>
        <text x="28" y="240" fill="${S}" font-family="Georgia, serif" font-size="11" letter-spacing="2">TYPE POSTER</text>`),
      "pos-minimal": svgWrap(200, 300, title, `
        <circle cx="100" cy="100" r="50" fill="none" stroke="${S}" stroke-width="1.5"/>
        <circle cx="100" cy="100" r="2" fill="${S}"/>
        <line x1="100" y1="160" x2="100" y2="220" stroke="${K}" stroke-width="1.5"/>
        <rect x="60" y="232" width="80" height="6" rx="3" fill="${S}" opacity=".5"/>
        <rect x="75" y="250" width="50" height="4" rx="2" fill="${K}" opacity=".35"/>`),
      "pos-workshop": svgWrap(200, 280, title, `
        <rect x="20" y="20" width="160" height="240" rx="4" fill="none" stroke="${K}" stroke-width="2"/>
        <rect x="20" y="20" width="160" height="50" fill="${S}" opacity=".2"/>
        <text x="100" y="52" text-anchor="middle" fill="${S}" font-family="Georgia, serif" font-size="16">WORKSHOP</text>
        <rect x="40" y="90" width="120" height="10" rx="5" fill="${S}"/>
        <rect x="50" y="112" width="100" height="7" rx="3.5" fill="${K}" opacity=".45"/>
        <rect x="40" y="150" width="50" height="50" rx="6" fill="${S}" opacity=".3"/>
        <rect x="110" y="150" width="50" height="50" rx="6" fill="${K}" opacity=".25"/>
        <rect x="55" y="220" width="90" height="20" rx="10" fill="${S}" opacity=".4"/>`),
      "stk-pack": svgWrap(200, 200, title, `
        <rect x="28" y="36" width="64" height="64" rx="16" fill="${S}" opacity=".85"/>
        <circle cx="140" cy="64" r="30" fill="${K}" opacity=".7"/>
        <path d="M70 128l40-8 12 40-40 10z" fill="${S}" opacity=".55"/>
        <rect x="128" y="122" width="48" height="48" rx="12" transform="rotate(18 152 146)" fill="${K}" opacity=".5"/>
        <circle cx="60" cy="68" r="8" fill="${G}"/>
        <path d="M132 56h16M140 48v16" stroke="${G}" stroke-width="3" stroke-linecap="round"/>`),
      "stk-react": svgWrap(200, 160, title, `
        <circle cx="52" cy="80" r="28" fill="${S}" opacity=".85"/>
        <circle cx="100" cy="80" r="28" fill="${K}" opacity=".7"/>
        <circle cx="148" cy="80" r="28" fill="${S}" opacity=".45"/>
        <circle cx="44" cy="74" r="3" fill="${G}"/>
        <circle cx="60" cy="74" r="3" fill="${G}"/>
        <path d="M44 88c6 8 14 8 16 0" stroke="${G}" stroke-width="2" fill="none" stroke-linecap="round"/>
        <path d="M100 70l4 8 9 1-7 6 2 9-8-5-8 5 2-9-7-6 9-1z" fill="${G}"/>
        <rect x="138" y="70" width="20" height="6" rx="3" fill="${G}" opacity=".7"/>
        <rect x="138" y="84" width="20" height="6" rx="3" fill="${G}" opacity=".4"/>`),
      "stk-badges": svgWrap(200, 200, title, `
        <polygon points="100,30 118,70 162,70 126,98 140,142 100,116 60,142 74,98 38,70 82,70" fill="${S}" opacity=".75"/>
        <circle cx="100" cy="92" r="18" fill="${G}" opacity=".35"/>
        <text x="100" y="98" text-anchor="middle" fill="${G}" font-family="Georgia, serif" font-size="12">★</text>`),
      "stk-frames": svgWrap(200, 220, title, `
        <rect x="40" y="30" width="120" height="160" rx="20" fill="none" stroke="${S}" stroke-width="4" stroke-dasharray="8 6"/>
        <circle cx="100" cy="100" r="36" fill="${K}" opacity=".25"/>
        <rect x="70" y="150" width="60" height="8" rx="4" fill="${S}" opacity=".5"/>`),
      "stk-emoji": svgWrap(200, 180, title, `
        <circle cx="55" cy="90" r="32" fill="${S}" opacity=".85"/>
        <circle cx="100" cy="90" r="32" fill="${K}" opacity=".7"/>
        <circle cx="145" cy="90" r="32" fill="${S}" opacity=".5"/>
        <circle cx="48" cy="82" r="3.5" fill="${G}"/><circle cx="62" cy="82" r="3.5" fill="${G}"/>
        <path d="M48 98c5 7 12 7 14 0" stroke="${G}" stroke-width="2" fill="none"/>
        <path d="M88 82h24M100 74v16" stroke="${G}" stroke-width="2.5" stroke-linecap="round"/>
        <circle cx="138" cy="84" r="3" fill="${G}"/><circle cx="152" cy="84" r="3" fill="${G}"/>
        <path d="M138 100c5-6 14-6 18 0" stroke="${G}" stroke-width="2" fill="none"/>`),
      "br-kit": svgWrap(200, 250, title, `
        <circle cx="100" cy="72" r="30" fill="none" stroke="${S}" stroke-width="3"/>
        <text x="100" y="78" text-anchor="middle" fill="${S}" font-family="Georgia, serif" font-size="14">سدرة</text>
        <text x="100" y="118" text-anchor="middle" fill="${K}" font-family="Georgia, serif" font-size="10" letter-spacing="3">SEDRA</text>
        <rect x="28" y="148" width="36" height="36" rx="6" fill="${S}"/>
        <rect x="72" y="148" width="36" height="36" rx="6" fill="${K}"/>
        <rect x="116" y="148" width="36" height="36" rx="6" fill="#F5F7F2"/>
        <rect x="28" y="196" width="144" height="8" rx="4" fill="${S}" opacity=".35"/>
        <rect x="28" y="212" width="96" height="8" rx="4" fill="${K}" opacity=".3"/>`),
      "br-cards": svgWrap(200, 120, title, `
        <rect x="18" y="28" width="164" height="72" rx="10" fill="none" stroke="${S}" stroke-width="2"/>
        <circle cx="48" cy="64" r="14" fill="${S}" opacity=".7"/>
        <rect x="74" y="50" width="70" height="8" rx="4" fill="${S}"/>
        <rect x="74" y="66" width="48" height="6" rx="3" fill="${K}" opacity=".55"/>
        <text x="170" y="88" text-anchor="end" fill="${K}" font-family="Georgia, serif" font-size="8" letter-spacing="1">SEDRA</text>`),
      "br-social": svgWrap(200, 112, title, `
        <rect x="8" y="18" width="184" height="76" rx="8" fill="none" stroke="${K}" stroke-width="2"/>
        <circle cx="44" cy="56" r="16" fill="${S}" opacity=".7"/>
        <rect x="70" y="44" width="96" height="8" rx="4" fill="${S}"/>
        <rect x="70" y="60" width="64" height="6" rx="3" fill="${K}" opacity=".45"/>`),
      "br-letterhead": svgWrap(200, 260, title, `
        <rect x="24" y="16" width="152" height="228" rx="4" fill="none" stroke="${K}" stroke-width="1.5"/>
        <circle cx="48" cy="40" r="12" fill="${S}" opacity=".7"/>
        <rect x="68" y="32" width="60" height="7" rx="3.5" fill="${S}"/>
        <rect x="68" y="44" width="40" height="5" rx="2.5" fill="${K}" opacity=".4"/>
        <line x1="36" y1="64" x2="164" y2="64" stroke="${K}" stroke-width="1"/>
        <rect x="40" y="84" width="120" height="5" rx="2.5" fill="${K}" opacity=".3"/>
        <rect x="40" y="100" width="100" height="5" rx="2.5" fill="${K}" opacity=".22"/>
        <rect x="40" y="116" width="110" height="5" rx="2.5" fill="${K}" opacity=".18"/>
        <rect x="40" y="132" width="90" height="5" rx="2.5" fill="${K}" opacity=".15"/>`),
      "br-pattern": svgWrap(200, 200, title, `
        <circle cx="50" cy="50" r="18" fill="${S}" opacity=".4"/>
        <circle cx="100" cy="50" r="18" fill="${K}" opacity=".35"/>
        <circle cx="150" cy="50" r="18" fill="${S}" opacity=".3"/>
        <circle cx="50" cy="100" r="18" fill="${K}" opacity=".3"/>
        <circle cx="100" cy="100" r="18" fill="${S}" opacity=".5"/>
        <circle cx="150" cy="100" r="18" fill="${K}" opacity=".28"/>
        <circle cx="50" cy="150" r="18" fill="${S}" opacity=".28"/>
        <circle cx="100" cy="150" r="18" fill="${K}" opacity=".4"/>
        <circle cx="150" cy="150" r="18" fill="${S}" opacity=".35"/>`),
      "br-guidelines": svgWrap(200, 250, title, `
        <rect x="30" y="30" width="50" height="50" rx="8" fill="${S}"/>
        <rect x="90" y="30" width="50" height="50" rx="8" fill="${K}"/>
        <rect x="150" y="30" width="20" height="50" rx="6" fill="#F5F7F2" stroke="${K}"/>
        <rect x="30" y="100" width="140" height="8" rx="4" fill="${S}" opacity=".4"/>
        <rect x="30" y="120" width="100" height="8" rx="4" fill="${K}" opacity=".35"/>
        <rect x="30" y="150" width="60" height="60" rx="8" fill="none" stroke="${S}" stroke-width="2"/>
        <text x="60" y="186" text-anchor="middle" fill="${S}" font-family="Georgia, serif" font-size="11">Aa</text>
        <rect x="110" y="150" width="60" height="60" rx="8" fill="none" stroke="${K}" stroke-width="2"/>
        <text x="140" y="186" text-anchor="middle" fill="${K}" font-family="Georgia, serif" font-size="11">١٢</text>`),
      "ui-wallet": svgWrap(200, 260, title, `
        <rect x="36" y="40" width="128" height="180" rx="16" fill="none" stroke="${K}" stroke-width="2.5"/>
        <rect x="36" y="40" width="128" height="44" rx="16" fill="${S}" opacity=".3"/>
        <circle cx="64" cy="62" r="12" fill="${S}" opacity=".7"/>
        <rect x="84" y="54" width="56" height="8" rx="4" fill="${S}"/>
        <rect x="84" y="68" width="40" height="5" rx="2.5" fill="${K}" opacity=".5"/>
        <rect x="52" y="108" width="96" height="36" rx="8" fill="${K}" opacity=".22"/>
        <rect x="52" y="156" width="44" height="28" rx="6" fill="${S}" opacity=".4"/>
        <rect x="104" y="156" width="44" height="28" rx="6" fill="${K}" opacity=".3"/>
        <rect x="52" y="198" width="96" height="10" rx="5" fill="${S}" opacity=".55"/>`),
      "mock-fold": svgWrap(200, 150, title, `
        <rect x="18" y="30" width="78" height="100" rx="8" fill="none" stroke="${S}" stroke-width="2.5"/>
        <rect x="104" y="30" width="78" height="100" rx="8" fill="none" stroke="${K}" stroke-width="2.5"/>
        <rect x="28" y="42" width="58" height="8" rx="4" fill="${S}"/>
        <rect x="28" y="58" width="58" height="54" rx="6" fill="${S}" opacity=".28"/>
        <rect x="114" y="42" width="58" height="8" rx="4" fill="${K}"/>
        <rect x="114" y="58" width="58" height="54" rx="6" fill="${K}" opacity=".22"/>
        <line x1="100" y1="30" x2="100" y2="130" stroke="${S}" stroke-width="2" opacity=".5"/>`),
      "tpl-calendar": svgWrap(200, 220, title, `
        <rect x="28" y="24" width="144" height="172" rx="12" fill="none" stroke="${K}" stroke-width="2.5"/>
        <rect x="28" y="24" width="144" height="32" rx="12" fill="${S}" opacity=".35"/>
        <rect x="52" y="34" width="96" height="10" rx="5" fill="${S}"/>
        <rect x="44" y="72" width="22" height="18" rx="4" fill="${S}" opacity=".45"/>
        <rect x="72" y="72" width="22" height="18" rx="4" fill="${K}" opacity=".3"/>
        <rect x="100" y="72" width="22" height="18" rx="4" fill="${K}" opacity=".22"/>
        <rect x="128" y="72" width="22" height="18" rx="4" fill="${S}" opacity=".3"/>
        <rect x="44" y="100" width="22" height="18" rx="4" fill="${K}" opacity=".25"/>
        <rect x="72" y="100" width="22" height="18" rx="4" fill="${S}" opacity=".55"/>
        <rect x="100" y="100" width="22" height="18" rx="4" fill="${K}" opacity=".2"/>
        <rect x="128" y="100" width="22" height="18" rx="4" fill="${K}" opacity=".28"/>
        <rect x="44" y="128" width="22" height="18" rx="4" fill="${K}" opacity=".18"/>
        <rect x="72" y="128" width="22" height="18" rx="4" fill="${K}" opacity=".22"/>
        <rect x="100" y="128" width="22" height="18" rx="4" fill="${S}" opacity=".35"/>
        <rect x="128" y="128" width="22" height="18" rx="4" fill="${K}" opacity=".2"/>`),

      "ui-music": svgWrap(200, 280, title, `
        <rect x="40" y="24" width="120" height="232" rx="18" fill="none" stroke="${K}" stroke-width="2.5"/>
        <circle cx="100" cy="88" r="36" fill="${S}" opacity=".25"/>
        <circle cx="100" cy="88" r="14" fill="${S}" opacity=".7"/>
        <rect x="56" y="140" width="88" height="8" rx="4" fill="${S}"/>
        <rect x="68" y="156" width="64" height="6" rx="3" fill="${K}" opacity=".45"/>
        <rect x="52" y="180" width="20" height="40" rx="4" fill="${S}" opacity=".55"/>
        <rect x="80" y="188" width="20" height="32" rx="4" fill="${K}" opacity=".4"/>
        <rect x="108" y="172" width="20" height="48" rx="4" fill="${S}" opacity=".35"/>
        <rect x="136" y="196" width="16" height="24" rx="4" fill="${K}" opacity=".3"/>`),
      "mock-billboard": svgWrap(200, 140, title, `
        <rect x="16" y="28" width="168" height="72" rx="6" fill="none" stroke="${S}" stroke-width="2.5"/>
        <rect x="24" y="36" width="152" height="56" rx="3" fill="${K}" opacity=".16"/>
        <rect x="36" y="48" width="72" height="8" rx="4" fill="${S}"/>
        <rect x="36" y="64" width="120" height="16" rx="4" fill="${S}" opacity=".3"/>
        <rect x="70" y="108" width="8" height="18" fill="${K}" opacity=".4"/>
        <rect x="122" y="108" width="8" height="18" fill="${K}" opacity=".4"/>
        <rect x="50" y="126" width="100" height="6" rx="2" fill="${K}" opacity=".25"/>`),
      "tpl-podcast": svgWrap(200, 200, title, `
        <rect x="30" y="30" width="140" height="140" rx="16" fill="none" stroke="${K}" stroke-width="2"/>
        <circle cx="100" cy="90" r="28" fill="${S}" opacity=".35"/>
        <rect x="92" y="70" width="16" height="40" rx="8" fill="${S}"/>
        <path d="M78 96c0 14 10 24 22 24s22-10 22-24" fill="none" stroke="${K}" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="100" y1="120" x2="100" y2="138" stroke="${S}" stroke-width="2.5" stroke-linecap="round"/>
        <rect x="50" y="148" width="100" height="8" rx="4" fill="${S}" opacity=".5"/>`),
      "ico-edit": svgWrap(200, 200, title, `
        <g fill="none" stroke="${S}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
          <path d="M58 142l80-80 14 14-80 80H58z"/>
          <path d="M128 72l14 14"/>
          <path d="M48 158h40"/>
        </g>
        <rect x="120" y="120" width="36" height="36" rx="8" fill="${K}" opacity=".25"/>
        <circle cx="138" cy="138" r="6" fill="${S}"/>`),

    };
    if (byId[d.id]) return byId[d.id];
    return svgWrap(200, 250, title, `<rect x="40" y="80" width="120" height="12" rx="6" fill="${S}"/>`);
  }

  const DESIGNS = [
    { id: "ui-dash", title: "لوحة تحكم هادئة", titleEn: "Calm Dashboard UI", cat: "ui", format: "Figma", tags: ["واجهة", "داشبورد", "UI", "Figma"], desc: "نظام واجهة لتطبيق إدارة — بطاقات، شريط جانبي، ومساحات تنفس بلون سدرة.", ratio: "4/5" },
    { id: "ui-mobile", title: "تطبيق جوال أنيق", titleEn: "Elegant Mobile App", cat: "ui", format: "Figma", tags: ["واجهة", "موبايل", "تطبيق"], desc: "شاشات تدفق رقمية بألوان الغابة والنعناع لتطبيق جوال.", ratio: "3/5" },
    { id: "ui-settings", title: "شاشة إعدادات", titleEn: "Settings Screen", cat: "ui", format: "SVG", tags: ["واجهة", "إعدادات", "SVG"], desc: "مكوّنات إعدادات قابلة لإعادة الاستخدام بمفاتيح وتسميات واضحة.", ratio: "1/1" },
    { id: "ui-onboard", title: "شاشات ترحيب", titleEn: "Onboarding Screens", cat: "ui", format: "Figma", tags: ["واجهة", "ترحيب", "onboarding"], desc: "ثلاث شاشات ترحيب بتقدّم نقطي وزر أساسي sage.", ratio: "5/7" },
    { id: "ui-chat", title: "واجهة محادثة", titleEn: "Chat UI", cat: "ui", format: "Figma", tags: ["واجهة", "محادثة", "رسائل"], desc: "فقاعات رسائل وترويسة محادثة بهوية سدرة الهادئة.", ratio: "5/7" },
    { id: "ui-profile", title: "ملف شخصي", titleEn: "Profile Screen", cat: "ui", format: "Figma", tags: ["واجهة", "بروفايل", "حساب"], desc: "شاشة ملف شخصي بصورة دائرية وبطاقات إحصاءات.", ratio: "4/5" },
    { id: "ui-login", title: "شاشة دخول", titleEn: "Login Screen", cat: "ui", format: "SVG", tags: ["واجهة", "دخول", "نموذج"], desc: "نموذج دخول نظيف بحقول وحدّ زر sage.", ratio: "10/13" },
    { id: "ui-cards", title: "بطاقات واجهة", titleEn: "UI Card Stack", cat: "ui", format: "Figma", tags: ["واجهة", "بطاقات", "مكوّنات"], desc: "تكديس بطاقات واجهة بظل ناعم ولون سدرة.", ratio: "10/11" },
    { id: "mock-phone", title: "موكأب هاتف", titleEn: "Phone Mockup", cat: "mockup", format: "PNG", tags: ["موكأب", "هاتف", "عرض"], desc: "إطار هاتف لعرض شاشات التطبيق بخلفية سدرة.", ratio: "3/5" },
    { id: "mock-tablet", title: "موكأب جهاز لوحي", titleEn: "Tablet Mockup", cat: "mockup", format: "PNG", tags: ["موكأب", "تابلت"], desc: "موكأب أفقي للعروض التقديمية والواجهات العريضة.", ratio: "5/4" },
    { id: "mock-browser", title: "موكأب متصفح", titleEn: "Browser Mockup", cat: "mockup", format: "SVG", tags: ["موكأب", "ويب"], desc: "نافذة متصفح خفيفة لعرض المواقع واللوحات.", ratio: "4/3" },
    { id: "mock-watch", title: "موكأب ساعة", titleEn: "Watch Mockup", cat: "mockup", format: "PNG", tags: ["موكأب", "ساعة", "wearable"], desc: "إطار ساعة ذكية لعرض واجهات صغيرة.", ratio: "10/11" },
    { id: "mock-desktop", title: "موكأب شاشة", titleEn: "Desktop Monitor", cat: "mockup", format: "SVG", tags: ["موكأب", "سطح مكتب", "شاشة"], desc: "شاشة مكتبية لعرض لوحات الويب والداشبورد.", ratio: "5/4" },
    { id: "mock-laptop", title: "موكأب لابتوب", titleEn: "Laptop Mockup", cat: "mockup", format: "PNG", tags: ["موكأب", "لابتوب"], desc: "لابتوب مفتوح لعرض تطبيقات سطح المكتب.", ratio: "4/3" },
    { id: "tpl-social", title: "قوالب سوشيال", titleEn: "Social Templates", cat: "template", format: "Figma", tags: ["قالب", "سوشيال", "إنستغرام"], desc: "مجموعة منشورات مربعة وقصص عمودية بهوية سدرة.", ratio: "4/5" },
    { id: "tpl-story", title: "قالب قصة", titleEn: "Story Template", cat: "template", format: "PNG", tags: ["قالب", "ستوري"], desc: "إطار قصة جاهز للنص والصورة مع شريط علوي ناعم.", ratio: "9/16" },
    { id: "tpl-email", title: "قالب نشرة بريدية", titleEn: "Email Newsletter", cat: "template", format: "HTML", tags: ["قالب", "بريد", "نشرة", "HTML"], desc: "تخطيط رسالة بريدية نظيف للعلامات الهادئة.", ratio: "3/4" },
    { id: "tpl-slides", title: "قالب عرض تقديمي", titleEn: "Slide Deck", cat: "template", format: "PDF", tags: ["قالب", "شرائح", "عرض"], desc: "شريحة عنوان بهوية سدرة للعروض الرقمية.", ratio: "4/3" },
    { id: "tpl-youtube", title: "غلاف يوتيوب", titleEn: "YouTube Thumbnail", cat: "template", format: "PNG", tags: ["قالب", "يوتيوب", "غلاف"], desc: "غلاف فيديو بنسبة عريضة مع أيقونة تشغيل sage.", ratio: "16/9" },
    { id: "tpl-linkedin", title: "منشور لينكدإن", titleEn: "LinkedIn Post", cat: "template", format: "Figma", tags: ["قالب", "لينكدإن", "مهني"], desc: "قالب منشور مهني بصورة وترويسة وهوية سدرة.", ratio: "1/1" },
    { id: "tpl-invoice", title: "قالب فاتورة", titleEn: "Invoice Template", cat: "template", format: "PDF", tags: ["قالب", "فاتورة", "مستند"], desc: "فاتورة رقمية بجدول بنود وملخص بلون سدرة.", ratio: "3/4" },
    { id: "tpl-resume", title: "قالب سيرة ذاتية", titleEn: "Resume Layout", cat: "template", format: "PDF", tags: ["قالب", "سيرة", "CV"], desc: "تخطيط سيرة ذاتية بعمود جانبي وكتلة محتوى.", ratio: "5/7" },
    { id: "ico-set", title: "حزمة أيقونات خطية", titleEn: "Line Icon Pack", cat: "icon", format: "SVG", tags: ["أيقونة", "خطية", "SVG"], desc: "أيقونات خطية بوزن موحّد ولون sage على خلفية داكنة.", ratio: "1/1" },
    { id: "ico-nav", title: "أيقونات تنقل", titleEn: "Nav Icons", cat: "icon", format: "SVG", tags: ["أيقونة", "تنقل", "تاب بار"], desc: "مجموعة أيقونات شريط سفلي لتطبيقات الجوال.", ratio: "5/4" },
    { id: "ico-weather", title: "أيقونات طقس", titleEn: "Weather Icons", cat: "icon", format: "SVG", tags: ["أيقونة", "طقس"], desc: "رموز طقس بسيطة بضربات sage.", ratio: "1/1" },
    { id: "ico-commerce", title: "أيقونات تجارة", titleEn: "Commerce Icons", cat: "icon", format: "SVG", tags: ["أيقونة", "تجارة", "سلة"], desc: "أيقونة سلة وتجارة إلكترونية بخطوط سدرة.", ratio: "1/1" },
    { id: "ico-media", title: "أيقونات وسائط", titleEn: "Media Icons", cat: "icon", format: "SVG", tags: ["أيقونة", "وسائط", "تشغيل"], desc: "رموز تشغيل وكاميرا للواجهات الإعلامية.", ratio: "1/1" },
    { id: "ico-finance", title: "أيقونات مالية", titleEn: "Finance Icons", cat: "icon", format: "SVG", tags: ["أيقونة", "مالية", "ريال"], desc: "رمز ريال ومخطط صاعد للواجهات المالية.", ratio: "1/1" },
    { id: "ico-social", title: "أيقونات تواصل", titleEn: "Social Network Icons", cat: "icon", format: "SVG", tags: ["أيقونة", "تواصل", "شبكة"], desc: "عقد شبكة اجتماعية مترابطة بضربات سدرة.", ratio: "10/9" },
    { id: "pos-event", title: "بوستر فعالية", titleEn: "Event Poster", cat: "poster", format: "PDF", tags: ["بوستر", "فعالية", "طباعة"], desc: "بوستر رأسي لفعالية تصميم بهوية سدرة.", ratio: "2/3" },
    { id: "pos-quote", title: "بوستر اقتباس", titleEn: "Quote Poster", cat: "poster", format: "PNG", tags: ["بوستر", "اقتباس", "تايبو"], desc: "تكوين تايبوغرافي هادئ للاقتباسات العربية.", ratio: "4/5" },
    { id: "pos-launch", title: "بوستر إطلاق", titleEn: "Launch Poster", cat: "poster", format: "AI", tags: ["بوستر", "إطلاق", "منتج رقمي"], desc: "إعلان إطلاق منتج رقمي بلمسة فاخرة.", ratio: "3/4" },
    { id: "pos-exhibit", title: "بوستر معرض", titleEn: "Exhibit Poster", cat: "poster", format: "PDF", tags: ["بوستر", "معرض", "تصميم"], desc: "ملصق معرض تصاميم إلكترونية بشبكة أعمال مصغّرة.", ratio: "5/7" },
    { id: "pos-typo", title: "بوستر تايبوغرافي", titleEn: "Typography Poster", cat: "poster", format: "AI", tags: ["بوستر", "تايبو", "حروف"], desc: "ملصق حروف يبرز اسم سدرة بتكوين مطبعي.", ratio: "5/7" },
    { id: "pos-minimal", title: "بوستر بسيط", titleEn: "Minimal Poster", cat: "poster", format: "PDF", tags: ["بوستر", "بسيط", "minimal"], desc: "تكوين minimal بدائرة وخط رأسي وهوية هادئة.", ratio: "2/3" },
    { id: "pos-workshop", title: "بوستر ورشة", titleEn: "Workshop Poster", cat: "poster", format: "PNG", tags: ["بوستر", "ورشة", "تعليم"], desc: "إعلان ورشة تصميم إلكتروني بأقسام بصرية واضحة.", ratio: "5/7" },
    { id: "stk-pack", title: "ملصقات رقمية", titleEn: "Digital Stickers", cat: "sticker", format: "PNG", tags: ["ملصق", "ستيكر", "رقمي"], desc: "حزمة ملصقات شفافة للاستخدام في التطبيقات والقصص.", ratio: "1/1" },
    { id: "stk-react", title: "ملصقات تفاعل", titleEn: "Reaction Stickers", cat: "sticker", format: "SVG", tags: ["ملصق", "تفاعل", "إيموجي"], desc: "ردود فعل بصرية متناسقة مع لوحة سدرة.", ratio: "5/4" },
    { id: "stk-badges", title: "شارات رقمية", titleEn: "Digital Badges", cat: "sticker", format: "SVG", tags: ["ملصق", "شارة", "badge"], desc: "شارة نجمة رقمية للاستخدام في الملفات والقصص.", ratio: "1/1" },
    { id: "stk-frames", title: "إطارات ملصقات", titleEn: "Sticker Frames", cat: "sticker", format: "PNG", tags: ["ملصق", "إطار", "حدود"], desc: "إطار متقطع دائري لقصاصات القصص الرقمية.", ratio: "10/11" },
    { id: "stk-emoji", title: "ملصقات تعبيرية", titleEn: "Emoji Stickers", cat: "sticker", format: "SVG", tags: ["ملصق", "تعبير", "وجوه"], desc: "ثلاثة وجوه تعبيرية بلوني sage وstroke.", ratio: "10/9" },
    { id: "br-kit", title: "نظام هوية سدرة", titleEn: "Sedra Brand Kit", cat: "brand", format: "PDF", tags: ["هوية", "براند", "دليل"], desc: "لوحة ألوان، مسافات شعار، وعينات تطبيق للهوية.", ratio: "4/5" },
    { id: "br-cards", title: "بطاقات أعمال", titleEn: "Business Cards", cat: "brand", format: "AI", tags: ["هوية", "بطاقة", "مطبوعات"], desc: "وجهان لبطاقة أعمال رقمية قابلة للطباعة.", ratio: "5/3" },
    { id: "br-social", title: "غلاف سوشيال", titleEn: "Social Cover", cat: "brand", format: "PNG", tags: ["هوية", "غلاف", "سوشيال"], desc: "غلاف ملف شخصي بشعار سدرة ونمط هادئ.", ratio: "16/9" },
    { id: "br-letterhead", title: "ترويسة رقمية", titleEn: "Digital Letterhead", cat: "brand", format: "PDF", tags: ["هوية", "ترويسة", "مستند"], desc: "ترويسة مستند رقمي بشعار ومساحات نص.", ratio: "10/13" },
    { id: "br-pattern", title: "نمط هوية", titleEn: "Brand Pattern", cat: "brand", format: "SVG", tags: ["هوية", "نمط", "pattern"], desc: "شبكة دوائر متكررة من ألوان سدرة للخلفيات.", ratio: "1/1" },
    { id: "ui-wallet", title: "محفظة رقمية", titleEn: "Digital Wallet UI", cat: "ui", format: "Figma", tags: ["واجهة", "محفظة", "دفع"], desc: "شاشة محفظة رقمية برصيد وبطاقات إجراءات سريعة بهوية سدرة.", ratio: "10/13" },
    { id: "mock-fold", title: "موكأب مطوية", titleEn: "Fold Brochure Mockup", cat: "mockup", format: "PNG", tags: ["موكأب", "مطوية", "عرض"], desc: "موكأب مطوية مفتوحة لعرض تصاميم مطبوعة رقمياً.", ratio: "4/3" },
    { id: "tpl-calendar", title: "قالب تقويم", titleEn: "Calendar Template", cat: "template", format: "Figma", tags: ["قالب", "تقويم", "تخطيط"], desc: "شبكة تقويم شهرية أنيقة بألوان الغابة والنعناع.", ratio: "10/11" },
    { id: "br-guidelines", title: "دليل ألوان", titleEn: "Color Guidelines", cat: "brand", format: "PDF", tags: ["هوية", "ألوان", "دليل"], desc: "عينات ألوان وخطوط عربية/لاتينية لدليل العلامة.", ratio: "4/5" },
    { id: "ui-music", title: "مشغّل موسيقى", titleEn: "Music Player UI", cat: "ui", format: "Figma", tags: ["واجهة", "موسيقى", "مشغل"], desc: "شاشة مشغّل صوتي بقرص ألبوم وموجات صوتية بهوية سدرة.", ratio: "5/7" },
    { id: "mock-billboard", title: "موكأب لوحة عرض", titleEn: "Billboard Mockup", cat: "mockup", format: "PNG", tags: ["موكأب", "لوحة", "عرض"], desc: "إطار لوحة عرض أفقية لعرض البوسترات الرقمية.", ratio: "10/7" },
    { id: "tpl-podcast", title: "غلاف بودكاست", titleEn: "Podcast Cover", cat: "template", format: "PNG", tags: ["قالب", "بودكاست", "غلاف"], desc: "غلاف حلقة بودكاست بمكبر صوت وكتلة عنوان.", ratio: "1/1" },
    { id: "ico-edit", title: "أيقونات تحرير", titleEn: "Edit Tool Icons", cat: "icon", format: "SVG", tags: ["أيقونة", "تحرير", "قلم"], desc: "رمز قلم وتحرير للواجهات الإبداعية.", ratio: "1/1" },
  ];

  const SUGGESTIONS = [
    { q: "واجهة", label: "واجهات مستخدم", meta: "UI kits" },
    { q: "موكأب", label: "موكأب أجهزة", meta: "Mockups" },
    { q: "أيقونة", label: "أيقونات SVG", meta: "Icons" },
    { q: "قالب", label: "قوالب سوشيال", meta: "Templates" },
    { q: "بوستر", label: "بوسترات", meta: "Posters" },
    { q: "Figma", label: "ملفات Figma", meta: "Format" },
    { q: "SVG", label: "ملفات SVG", meta: "Format" },
    { q: "هوية", label: "هويات بصرية", meta: "Brand" },
    { q: "ملصق", label: "ملصقات رقمية", meta: "Stickers" },
    { q: "تطبيق", label: "شاشات تطبيق", meta: "Mobile UI" },
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
    discoverTools: document.getElementById("discover-tools"),
    toast: document.getElementById("toast"),
  };

  let state = {
    view: "discover",
    query: "",
    cat: "all",
    type: "",
    format: "",
    activeId: null,
  };

  let toastTimer = 0;
  let searchTimer = 0;

  function esc(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function norm(str) {
    return String(str)
      .toLowerCase()
      .replace(/[\u064B-\u065F\u0670\u0640]/g, "")
      .replace(/[إأآٱ]/g, "ا")
      .replace(/ى/g, "ي")
      .replace(/ة/g, "ه")
      .replace(/ؤ/g, "و")
      .replace(/ئ/g, "ي")
      .trim();
  }

  function arNum(n) {
    return String(n).replace(/[0-9]/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d]);
  }

  let lockScrollY = 0;
  function lockScroll() {
    lockScrollY = window.scrollY || window.pageYOffset;
    document.body.style.top = "-" + lockScrollY + "px";
    document.body.classList.add("detail-open");
  }
  function unlockScroll() {
    document.body.classList.remove("detail-open");
    document.body.style.top = "";
    window.scrollTo(0, lockScrollY);
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
    els.savedCount.textContent = arNum(n);
    els.savedCount.hidden = n === 0;
  }

  function showToast(msg) {
    els.toast.textContent = msg;
    els.toast.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      els.toast.hidden = true;
    }, 1600);
  }

  function matches(d) {
    if (state.cat !== "all" && d.cat !== state.cat) return false;
    if (state.type && d.cat !== state.type) return false;
    if (state.format && d.format.toLowerCase() !== state.format.toLowerCase()) return false;
    if (!state.query) return true;
    const q = norm(state.query);
    const hay = norm([d.title, d.titleEn, d.desc, d.cat, CAT_LABEL[d.cat], CAT_EN[d.cat], d.format, d.id, ...(d.tags || [])].join(" "));
    if (hay.includes(q)) return true;
    return q.split(/\s+/).filter(Boolean).every((w) => hay.includes(w));
  }

  function filtered() {
    return DESIGNS.filter(matches);
  }

  function pinHTML(d) {
    const tags = (d.tags || []).slice(0, 3).map((t) => `<span class="tag">${esc(t)}</span>`).join("");
    const savedMark = isSaved(d.id) ? `<span class="pin-saved-dot" aria-hidden="true"></span>` : "";
    return `<button type="button" class="pin" role="listitem" data-id="${esc(d.id)}" style="--pin-ratio:${d.ratio || "4/5"}">
      <div class="pin-art">${art(d)}${savedMark}</div>
      <div class="pin-body">
        <h3 class="pin-title">${esc(d.title)}</h3>
        <p class="pin-meta">${esc(CAT_LABEL[d.cat])} · ${esc(d.format)}</p>
        <div class="pin-tags">${tags}</div>
      </div>
    </button>`;
  }

  function renderDiscover() {
    const list = filtered();
    const isDiscover = state.view === "discover";
    els.pinGrid.hidden = !isDiscover;
    els.savedPanel.hidden = isDiscover;
    els.hero.hidden = !isDiscover;
    if (els.discoverTools) els.discoverTools.hidden = !isDiscover;

    if (!isDiscover) {
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
    els.resultsMeta.textContent = `${arNum(list.length)} تصميم إلكتروني`;
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
    els.resultsMeta.textContent = `${arNum(list.length)} محفوظ`;
    els.savedGrid.innerHTML = list.map(pinHTML).join("");
  }

  function openDetail(id) {
    const d = DESIGNS.find((x) => x.id === id);
    if (!d) return;
    state.activeId = id;
    els.detailPreview.innerHTML = art(d);
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
    lockScroll();
    els.detailClose.focus();
  }

  function closeDetail() {
    els.overlay.hidden = true;
    unlockScroll();
    state.activeId = null;
  }

  function syncSaveBtn() {
    const saved = state.activeId && isSaved(state.activeId);
    els.detailSave.textContent = saved ? "محفوظ ✓" : "حفظ";
    els.detailSave.classList.toggle("is-saved", !!saved);
  }

  function downloadDesign(d) {
    const blob = new Blob([art(d)], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `sedra-${d.id}.svg`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    showToast("تم التنزيل");
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

  function applyQuery(q) {
    state.query = (q || "").trim();
    els.searchInput.value = state.query;
    els.suggestions.hidden = true;
    els.refineRow.hidden = !(state.query || state.type || state.format);
    if (state.view !== "discover") setView("discover");
    else renderDiscover();
  }

  function showSuggestions(q) {
    const needle = norm(q || "");
    const items = SUGGESTIONS.filter(
      (s) => !needle || norm(s.q).includes(needle) || norm(s.label).includes(needle) || norm(s.meta).includes(needle)
    ).slice(0, 6);

    const designHits = needle
      ? DESIGNS.filter((d) => {
          const hay = norm(d.title + " " + d.titleEn + " " + d.desc + " " + d.tags.join(" ") + " " + d.format);
          return hay.includes(needle);
        }).slice(0, 4)
      : [];

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
    applyQuery(els.searchInput.value);
    els.searchInput.blur();
  });

  els.searchInput.addEventListener("input", () => {
    showSuggestions(els.searchInput.value);
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      state.query = els.searchInput.value.trim();
      if (state.view !== "discover") setView("discover");
      else renderDiscover();
    }, 160);
  });

  els.searchInput.addEventListener("focus", () => {
    showSuggestions(els.searchInput.value);
  });

  els.suggestions.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-q]");
    if (!btn) return;
    applyQuery(btn.dataset.q);
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
    showToast(nowSaved ? "أُضيف للمحفوظات" : "أُزيل من المحفوظات");
    if (state.view === "saved") renderSaved();
    else renderDiscover();
  });

  els.detailDownload.addEventListener("click", () => {
    const d = DESIGNS.find((x) => x.id === state.activeId);
    if (d) downloadDesign(d);
  });

  updateSavedBadge();
  renderDiscover();
})();
