(() => {
  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelector("#nav-links");
  const year = document.querySelector("#year");
  const form = document.querySelector("#contact-form");
  const feedback = document.querySelector("#form-feedback");

  if (year) year.textContent = new Date().getFullYear();

  // Theme preference: use the saved choice, otherwise keep the designed dark default.
  const themeToggle = document.querySelector("#theme-toggle");
  const themeIcon = themeToggle?.querySelector(".theme-icon");
  const themeLabel = themeToggle?.querySelector(".theme-label");
  const themeColor = document.querySelector('meta[name="theme-color"]');

  const applyTheme = (theme) => {
    document.documentElement.dataset.theme = theme;
    const isDark = theme === "dark";
    if (themeToggle) {
      themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
      themeToggle.setAttribute("title", isDark ? "Switch to light mode" : "Switch to dark mode");
    }
    if (themeIcon) themeIcon.textContent = isDark ? "☼" : "☾";
    if (themeLabel) themeLabel.textContent = isDark ? "Light mode" : "Dark mode";
    if (themeColor) themeColor.setAttribute("content", isDark ? "#09090b" : "#f7f7fb");
  };

  let savedTheme = null;
  try { savedTheme = localStorage.getItem("abhijeet-portfolio-theme"); } catch (_) {}
  applyTheme(savedTheme === "light" ? "light" : "dark");

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
      try { localStorage.setItem("abhijeet-portfolio-theme", nextTheme); } catch (_) {}
    });
  }

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
      links.classList.toggle("is-open", !isOpen);
    });

    links.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open navigation");
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open navigation");
      }
    });
  }

  // Create an email draft locally; no backend or fake success message is used.
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const email = String(data.get("email") || "").trim();
      const topic = String(data.get("project_type") || "General inquiry").trim();
      const message = String(data.get("message") || "").trim();
      const subject = encodeURIComponent(`${topic} — Portfolio inquiry from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\nMessage:\n${message}`);
      if (feedback) {
        feedback.textContent = "Opening your email app with a draft. Please review it and press Send.";
      }
      window.location.href = `mailto:abhijeetpal0307@gmail.com?subject=${subject}&body=${body}`;
    });
  }
})();