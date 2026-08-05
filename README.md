# Muhammad Abdullah — Portfolio

A responsive single-page developer portfolio built with plain HTML, CSS, and
JavaScript, styled as a code editor (tabs, gutter line numbers, a typed
object literal in the hero, JSON-style skills, `.env`-style contact info).

## Structure
```
portfolio/
├── index.html
├── style.css
└── script.js
```

## Sections
- **Hero** — animated typewriter effect typing out a `developer` object
- **About** — bio + quick facts
- **Skills** — categorized skill cards
- **Projects** — 3 project cards (replace with your real work)
- **Contact** — copy-to-clipboard email + validated contact form

## JavaScript interactions included
1. Mobile navigation toggle
2. Scroll-spy active tab highlighting
3. Hero typewriter animation with syntax coloring
4. Copy-email-to-clipboard button
5. Front-end contact form validation (name, email format, message length)

## Run locally
Just open `index.html` in a browser, or serve it:
```bash
python3 -m http.server 8080
```

