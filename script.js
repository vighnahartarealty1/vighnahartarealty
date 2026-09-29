/* ==========================================================
  Vighnharta Realty — SCRIPT & MOTION CONTROLLER
  Everything is read from data.js.
  Features: Scroll reveals, Ken Burns, 3D card tilt, animated
  counters, timeline track filling, and scroll progress tracking.
  ========================================================== */

(function () {
  "use strict";

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  /* ---------- Helpers ---------- */
  const wa = (text) =>
    "https://wa.me/" + SITE.whatsappNumber + "?text=" + encodeURIComponent(text);

  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const propertyMessage = (p) =>
    "Hello Vighnharta Realty, I am interested in \"" + p.name + "\" in " + p.location + ". Please share more details.";

  const WA_ICON =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0012 0C5.4 0 .1 5.3.1 11.8c0 2.1.6 4.1 1.6 5.9L0 24l6.500-1.700a11.900 11.900 0 005.500 1.400c6.500 0 11.800-5.300 11.800-11.800 0-3.100-1.200-6-3.300-8.400zM12 21.700c-1.800 0-3.500-.5-5-1.400l-.4-.2-3.800 1 1-3.700-.2-.4a9.800 9.800 0 01-1.500-5.200C2.100 6.400 6.500 2 12 2c2.600 0 5.100 1 6.900 2.900a9.700 9.700 0 012.900 6.900c0 5.400-4.400 9.900-9.800 9.900zm5.400-7.400c-.3-.1-1.800-.9-2-1-.3-.1-.5-.1-.7.1-.2.300-.8 1-.9 1.200-.2.200-.3.200-.6.100-.3-.1-1.300-.5-2.400-1.500-.9-.8-1.500-1.800-1.700-2.100-.2-.3 0-.5.100-.6l.4-.5c.1-.2.200-.3.300-.5.100-.2 0-.4 0-.5-.1-.1-.7-1.600-.9-2.200-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.400-.3.300-1 1-1 2.500s1.100 2.900 1.200 3.100c.1.200 2.100 3.200 5.100 4.500.7.300 1.300.5 1.700.6.7.2 1.400.2 1.900.1.600-.1 1.800-.7 2-1.400.3-.7.300-1.300.2-1.400-.1-.1-.3-.2-.6-.3z"/></svg>';

  /* ---------- Scroll Progress, Parallax & Header Dynamic State ---------- */
  const scrollProgress = $("#scrollProgress");
  const siteHeader = $(".site-header");
  const heroImg = $(".hero-img");
  let ticking = false;

  function updateOnScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    if (scrollProgress) {
      scrollProgress.style.width = Math.min(100, Math.max(0, progress)) + "%";
    }

    if (siteHeader) {
      siteHeader.classList.toggle("scrolled", scrollTop > 30);
    }

    if (heroImg && scrollTop < window.innerHeight) {
      heroImg.style.transform = "translate3d(0, " + (scrollTop * 0.28) + "px, 0)";
    }

    ticking = false;
  }

  function handleScroll() {
    if (!ticking) {
      window.requestAnimationFrame(updateOnScroll);
      ticking = true;
    }
  }

  window.addEventListener("scroll", handleScroll, { passive: true });
  updateOnScroll();

  /* ---------- Mobile menu ---------- */
  const menuBtn = $("#menuBtn");
  const nav = $("#nav");

  function closeMenu() {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "Open menu");
  }
  menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  $$("a", nav).forEach((a) => a.addEventListener("click", closeMenu));

  /* ---------- General "WhatsApp Us" & Floating Button ---------- */
  $$('[data-wa="general"]').forEach((a) => {
    a.href = wa("Hello Vighnharta Realty, I would like to ask about your projects.");
  });

  const floatingWa = $("#floatingWa");
  if (floatingWa) {
    floatingWa.href = wa("Hello Vighnharta Realty, I would like to enquire about your land and property opportunities.");
  }

  /* ---------- Interactive 3D Card Tilt & Cursor Spotlight ---------- */
  function applyCardInteractions(card) {
    // Only apply on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", x + "px");
      card.style.setProperty("--mouse-y", y + "px");

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -3.5;
      const rotateY = ((x - centerX) / centerX) * 3.5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.015)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  }

  /* ---------- Property grid ---------- */
  const grid = $("#grid");
  const empty = $("#empty");
  const count = $("#count");
  const searchInput = $("#search");

  function cardHTML(p, idx) {
    const delay = (idx % 3) * 0.08;
    return (
      '<article class="card card-enter" style="animation-delay:' + delay + 's">' +
        '<div class="card-img">' +
          '<img src="' + esc(p.image) + '" alt="' + esc(p.name) + ", " + esc(p.location) + '" loading="lazy" width="1000" height="750">' +
        "</div>" +
        '<div class="card-body">' +
          '<p class="card-type">' + esc(p.type) + "</p>" +
          "<h3>" + esc(p.name) + "</h3>" +
          '<p class="card-loc">' + esc(p.location) + (p.sizes ? " · " + esc(p.sizes) : "") + "</p>" +
          '<div class="card-actions">' +
            '<button type="button" class="btn btn-brown btn-full btn-glow view-details" data-id="' + p.id + '">View details</button>' +
            '<a class="btn btn-wa-line btn-full" href="' + wa(propertyMessage(p)) + '" target="_blank" rel="noopener">' + WA_ICON + "WhatsApp</a>" +
          "</div>" +
        "</div>" +
      "</article>"
    );
  }

  function renderGrid() {
    const q = searchInput.value.trim().toLowerCase();
    const list = PROPERTIES.filter((p) =>
      !q || p.name.toLowerCase().includes(q) || p.location.toLowerCase().includes(q)
    );
    grid.innerHTML = list.map(cardHTML).join("");
    empty.hidden = list.length > 0;
    count.textContent = q
      ? list.length + " of " + PROPERTIES.length + " projects shown"
      : PROPERTIES.length + " projects";

    $$(".card", grid).forEach(applyCardInteractions);
  }

  searchInput.addEventListener("input", renderGrid);

  /* ---------- Hero Search Capsule Sync ---------- */
  const heroSearchCapsule = $("#heroSearchCapsule");
  const heroSearchInput = $("#heroSearchInput");

  if (heroSearchCapsule && heroSearchInput) {
    heroSearchInput.addEventListener("input", () => {
      searchInput.value = heroSearchInput.value;
      renderGrid();
    });

    heroSearchCapsule.addEventListener("submit", (e) => {
      e.preventDefault();
      searchInput.value = heroSearchInput.value;
      renderGrid();
      const projectsSec = $("#projects");
      if (projectsSec) {
        projectsSec.scrollIntoView({ behavior: "smooth" });
      }
    });

    searchInput.addEventListener("input", () => {
      heroSearchInput.value = searchInput.value;
    });
  }

  /* ---------- Featured projects ---------- */
  const featuredGrid = $("#featuredGrid");
  featuredGrid.innerHTML = PROPERTIES.slice(0, 3).map((p) =>
    '<article class="featured-card">' +
      '<img src="' + esc(p.image) + '" alt="' + esc(p.name) + '" loading="lazy">' +
      '<div>' +
        '<p class="card-type">' + esc(p.type) + '</p>' +
        '<h3>' + esc(p.name) + '</h3>' +
        '<p>' + esc(p.description) + '</p>' +
        '<button type="button" class="text-link view-details" data-id="' + p.id + '">View project details <span aria-hidden="true">→</span></button>' +
      '</div>' +
    '</article>'
  ).join("");

  /* ---------- Details popup ---------- */
  const modal = $("#modal");
  let lastFocus = null;

  function openModal(id) {
    const p = PROPERTIES.find((x) => x.id === id);
    if (!p) return;
    lastFocus = document.activeElement;
    $("#mImg").src = p.image;
    $("#mImg").alt = p.name + ", " + p.location;
    $("#mType").textContent = p.type;
    $("#mTitle").textContent = p.name;
    $("#mLoc").textContent = p.location;
    $("#mDesc").textContent = p.description || "";
    $("#mFacts").innerHTML = [
      ["Available sizes", p.sizes], ["Project highlights", p.highlights], ["Location & connectivity", p.connectivity]
    ].filter((fact) => fact[1]).map((fact) => '<div><strong>' + esc(fact[0]) + '</strong><span>' + esc(fact[1]) + '</span></div>').join("");
    $("#mWa").href = wa(propertyMessage(p));
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
    $("#modalClose").focus();
  }

  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
    if (lastFocus) lastFocus.focus();
  }

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".view-details");
    if (btn) openModal(Number(btn.dataset.id));
  });
  $("#modalClose").addEventListener("click", closeModal);
  $("#modalBackdrop").addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (modal.classList.contains("open")) closeModal();
    closeMenu();
  });

  /* ---------- Timeline with Scroll Filling ---------- */
  const timelineEl = $("#timeline");
  const timelineBar = $("#timelineBar");

  timelineEl.innerHTML = TIMELINE.map(
    (t) =>
      '<li class="tl-item">' +
        '<span class="tl-year">' + esc(t.year) + "</span>" +
        '<div class="tl-body"><h3>' + esc(t.title) + "</h3><p>" + esc(t.text) + "</p></div>" +
      "</li>"
  ).join("");

  function updateTimeline() {
    if (!timelineEl || !timelineBar) return;
    const rect = timelineEl.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const triggerPoint = windowHeight * 0.72;
    const current = triggerPoint - rect.top;
    const total = rect.height;
    const progress = Math.max(0, Math.min(1, current / total));

    timelineBar.style.height = (progress * 100) + "%";

    $$(".tl-item", timelineEl).forEach((item) => {
      const itemRect = item.getBoundingClientRect();
      if (itemRect.top < triggerPoint) {
        item.classList.add("is-active");
      } else {
        item.classList.remove("is-active");
      }
    });
  }
  window.addEventListener("scroll", updateTimeline, { passive: true });
  updateTimeline();

  /* ---------- Contact details ---------- */
  $("#cPhone").innerHTML = 'Phone: <a href="tel:+' + esc(SITE.whatsappNumber) + '">' + esc(SITE.phoneDisplay) + "</a>";
  $("#cEmail").innerHTML = 'Email: <a href="mailto:' + esc(SITE.email) + '">' + esc(SITE.email) + "</a>";
  $("#cAddress").textContent = "Office: " + SITE.address;

  /* ---------- Contact form -> WhatsApp ---------- */
  const form = $("#form");

  function setError(field, msg) {
    const box = field.closest(".field");
    box.classList.toggle("invalid", !!msg);
    $('.err[data-for="' + field.id + '"]', box).textContent = msg || "";
    field.setAttribute("aria-invalid", msg ? "true" : "false");
  }

  function validate() {
    const name = $("#name"), email = $("#email"), interest = $("#interest");
    let ok = true;

    if (!name.value.trim()) { setError(name, "Enter your name."); ok = false; } else setError(name, "");

    if (!email.value.trim()) { setError(email, "Enter your email address."); ok = false; }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) { setError(email, "Enter a valid email address, like name@example.com."); ok = false; }
    else setError(email, "");

    if (!interest.value) { setError(interest, "Choose what you are interested in."); ok = false; } else setError(interest, "");

    return ok;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validate()) {
      const firstBad = $('[aria-invalid="true"]', form);
      if (firstBad) firstBad.focus();
      return;
    }
    const lines = [
      "Hello Vighnharta Realty,",
      "",
      "Name: " + $("#name").value.trim(),
      "Email: " + $("#email").value.trim(),
      "Interested in: " + $("#interest").value
    ];
    const msg = $("#message").value.trim();
    if (msg) lines.push("Message: " + msg);

    window.open(wa(lines.join("\n")), "_blank", "noopener");
  });

  $$("input, select", form).forEach((f) =>
    f.addEventListener("input", () => { if (f.getAttribute("aria-invalid") === "true") validate(); })
  );

  /* ---------- Broken image fallback ---------- */
  const PLACEHOLDER =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="750" viewBox="0 0 1000 750">' +
      '<rect width="1000" height="750" fill="#EBE2D0"/>' +
      '<path d="M500 280 L620 470 H380 Z" fill="none" stroke="#3B2A20" stroke-width="8" stroke-linejoin="round"/>' +
      '<text x="500" y="560" text-anchor="middle" font-family="Georgia,serif" font-size="32" fill="#6F5F53">Photo coming soon</text>' +
      "</svg>"
    );

  document.addEventListener(
    "error",
    (e) => {
      const img = e.target;
      if (img && img.tagName === "IMG" && img.src !== PLACEHOLDER) img.src = PLACEHOLDER;
    },
    true
  );

  /* ---------- Scroll-Triggered Reveal System (IntersectionObserver) ---------- */
  const revealElements = $$("[data-reveal]");
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.revealDelay;
          if (delay) {
            setTimeout(() => {
              entry.target.classList.add("is-visible");
            }, Number(delay));
          } else {
            entry.target.classList.add("is-visible");
          }
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px"
    });

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- Animated Stats Number Counter ---------- */
  let statsAnimated = false;
  function animateStatsCounters() {
    if (statsAnimated) return;
    statsAnimated = true;

    $$(".stat-num").forEach((numEl) => {
      const target = parseInt(numEl.dataset.count, 10) || 0;
      const duration = 1800; // ms
      const startTime = performance.now();

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // easeOutExpo
        const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const val = Math.floor(ease * target);
        numEl.textContent = val;

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          numEl.textContent = target;
        }
      }
      requestAnimationFrame(update);
    });
  }

  // Trigger counters after a gentle load delay or when hero is in view
  const heroStatsEl = $(".hero-stats");
  if (heroStatsEl && "IntersectionObserver" in window) {
    const statsObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setTimeout(animateStatsCounters, 300);
        statsObserver.disconnect();
      }
    }, { threshold: 0.2 });
    statsObserver.observe(heroStatsEl);
  } else {
    setTimeout(animateStatsCounters, 500);
  }

  /* ---------- Active Navigation Spy ---------- */
  const sections = $$("main > section[id]");
  const navLinks = $$(".nav a.nav-link");

  if ("IntersectionObserver" in window && sections.length > 0) {
    const spyObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach((link) => {
            const href = link.getAttribute("href");
            const matches = href === "#" + id || (id === "home" && href === "#top");
            link.classList.toggle("active", matches);
          });
        }
      });
    }, {
      threshold: 0.25,
      rootMargin: "-20% 0px -40% 0px"
    });

    sections.forEach((sec) => spyObserver.observe(sec));
  }

  /* ---------- Footer year + Initial grid render ---------- */
  $("#year").textContent = new Date().getFullYear();
  renderGrid();
})();
