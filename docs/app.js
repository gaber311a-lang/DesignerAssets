(() => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#site-nav");
  const form = document.querySelector("#order-form");
  const status = document.querySelector("#form-status");
  const wa = document.querySelector("#whatsapp-link");

  if (toggle && nav) {
    const setOpen = (open) => {
      toggle.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
    };

    toggle.addEventListener("click", () => {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setOpen(false));
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setOpen(false);
    });
  }

  const buildWaHref = () => {
    if (!form || !wa) return;
    const name = (form.name?.value || "").trim();
    const phone = (form.phone?.value || "").trim();
    const interest = form.interest?.value || "";
    const message = (form.message?.value || "").trim();
    const lines = [
      "طلب من موقع سدرة / SEDRA",
      name && `الاسم: ${name}`,
      phone && `الجوال: ${phone}`,
      interest && `المنتج: ${interest}`,
      message && `الرسالة: ${message}`,
    ].filter(Boolean);
    const text = encodeURIComponent(lines.join("\n"));
    wa.href = `https://wa.me/?text=${text}`;
  };

  if (form) {
    form.addEventListener("input", buildWaHref);
    buildWaHref();
  }

  if (form && status) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const phone = form.phone.value.trim();
      if (!name || !phone) {
        status.textContent = "يرجى إدخال الاسم والجوال.";
        status.classList.remove("is-success");
        return;
      }
      status.textContent = "شكراً لك — استلمنا طلبك وسنتواصل قريباً.";
      status.classList.add("is-success");
      form.reset();
      buildWaHref();
    });
  }
})();
