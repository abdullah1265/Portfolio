document.addEventListener("DOMContentLoaded", () => {
  /* ============================================================
     1. MOBILE NAV TOGGLE
     ============================================================ */
  const navToggle = document.getElementById("navToggle");
  const tabNav = document.getElementById("tabNav");

  navToggle.addEventListener("click", () => {
    const isOpen = tabNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      tabNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  /* ============================================================
     2. SCROLL SPY — highlight the active tab
     ============================================================ */
  const sections = document.querySelectorAll("main section[id]");
  const tabs = document.querySelectorAll(".tab");

  const spyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          tabs.forEach((tab) => {
            tab.classList.toggle("is-active", tab.getAttribute("href") === `#${id}`);
          });
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
  );
  sections.forEach((section) => spyObserver.observe(section));

  /* ============================================================
     3. HERO TYPEWRITER — types out a "developer" code object,
        then applies syntax-style coloring once finished
     ============================================================ */
  const codeEl = document.getElementById("typedCode");
  const gutterEl = document.getElementById("gutter");
  const caretEl = document.getElementById("caret");

  const codeLines = [
    "const developer = {",
    '  name: "Muhammad Abdullah",',
    '  degree: "BSCS",',
    '  role: "Web Developer",',
    '  skills: ["HTML", "CSS", "JavaScript"],',
    "  hire: () => \"Let's build something great.\"",
    "};",
  ];
  const fullCode = codeLines.join("\n");

  function highlight(raw) {
    return raw
      .replace(/"([^"]*)"/g, '<span class="code-string">"$1"</span>')
      .replace(/\b(const|hire|name|degree|role|skills)\b(?=:| =)/g, '<span class="code-key">$1</span>')
      .replace(/([{}[\]:,;])/g, '<span class="code-punct">$1</span>');
  }

  let charIndex = 0;
  let lineCount = 1;
  gutterEl.innerHTML = "<span>1</span>";

  function typeNextChar() {
    if (charIndex >= fullCode.length) {
      codeEl.innerHTML = highlight(fullCode);
      caretEl.style.animationPlayState = "running";
      return;
    }
    const char = fullCode[charIndex];
    codeEl.textContent += char;
    if (char === "\n") {
      lineCount += 1;
      const span = document.createElement("span");
      span.textContent = lineCount;
      gutterEl.appendChild(span);
    }
    charIndex += 1;
    const delay = char === "\n" ? 120 : 14 + Math.random() * 18;
    setTimeout(typeNextChar, delay);
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    codeEl.innerHTML = highlight(fullCode);
    codeLines.forEach((_, i) => {
      const span = document.createElement("span");
      span.textContent = i + 1;
      if (i > 0) gutterEl.appendChild(span);
    });
  } else {
    setTimeout(typeNextChar, 400);
  }

  /* ============================================================
     4. COPY EMAIL TO CLIPBOARD
     ============================================================ */
  const copyBtn = document.getElementById("copyBtn");
  const emailValue = document.getElementById("emailValue");

  copyBtn.addEventListener("click", async () => {
    const email = emailValue.textContent.trim();
    try {
      await navigator.clipboard.writeText(email);
    } catch (err) {
      const tempInput = document.createElement("input");
      tempInput.value = email;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
    }
    const original = copyBtn.textContent;
    copyBtn.textContent = "Copied!";
    copyBtn.classList.add("is-copied");
    setTimeout(() => {
      copyBtn.textContent = original;
      copyBtn.classList.remove("is-copied");
    }, 1800);
  });

  /* ============================================================
     5. CONTACT FORM — front-end validation only
     ============================================================ */
  const form = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  const fields = {
    name: { input: document.getElementById("name"), error: document.getElementById("nameError") },
    email: { input: document.getElementById("email"), error: document.getElementById("emailError") },
    message: { input: document.getElementById("message"), error: document.getElementById("messageError") },
  };

  function setError(key, message) {
    const { input, error } = fields[key];
    error.textContent = message;
    input.closest(".field").classList.toggle("has-error", Boolean(message));
  }

  function validate() {
    let isValid = true;

    const name = fields.name.input.value.trim();
    if (!name) {
      setError("name", "Please enter your name.");
      isValid = false;
    } else {
      setError("name", "");
    }

    const email = fields.email.input.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setError("email", "Please enter your email.");
      isValid = false;
    } else if (!emailPattern.test(email)) {
      setError("email", "Please enter a valid email address.");
      isValid = false;
    } else {
      setError("email", "");
    }

    const message = fields.message.input.value.trim();
    if (!message) {
      setError("message", "Please enter a message.");
      isValid = false;
    } else if (message.length < 10) {
      setError("message", "Message should be at least 10 characters.");
      isValid = false;
    } else {
      setError("message", "");
    }

    return isValid;
  }

  Object.values(fields).forEach(({ input }) => {
    input.addEventListener("blur", validate);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    formStatus.textContent = "";

    if (!validate()) {
      formStatus.textContent = "Please fix the errors above before sending.";
      formStatus.style.color = "var(--pink)";
      return;
    }

    formStatus.style.color = "var(--green)";
    formStatus.textContent = "✓ Message ready to send — connect this form to a backend or a service like Formspree to go live.";
    form.reset();
  });

  /* ============================================================
     6. FOOTER YEAR
     ============================================================ */
  document.getElementById("year").textContent = new Date().getFullYear();
});
