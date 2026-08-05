# Muhammad Abdullah — Portfolio

A responsive single-page developer portfolio built with plain HTML, CSS, and
JavaScript, styled as a code editor (tabs, gutter line numbers, a typed
object literal in the hero, JSON-style skills, `.env`-style contact info).

## Structure
```
portfolio/
├── index.html
├── css/
│   └── style.css
└── js/
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

## Before you submit this task

1. **Replace placeholder content**
   - Swap the 3 sample projects in `index.html` (`#projects`) with your own,
     and update each `Live Demo` / `Source` link.
   - Update `EMAIL=`, `GITHUB=`, and `LINKEDIN=` values in `#contact`.
   - Adjust the `about` text if you'd like it more personal.

2. **Wire up the contact form (optional)**
   The form currently validates on the front end only, as the task requires.
   To actually receive messages, connect it to a free service like
   [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com) —
   just point the `<form>` at their endpoint.

## Run locally
Just open `index.html` in a browser, or serve it:
```bash
python3 -m http.server 8080
```

## Deploy (pick one)
- **GitHub Pages**: push this folder to a public GitHub repo → Settings →
  Pages → deploy from `main` branch.
- **Vercel**: `npx vercel` inside this folder, or import the GitHub repo at
  vercel.com.
- **Netlify**: drag-and-drop this folder at app.netlify.com/drop, or connect
  the GitHub repo.

## Screenshots for submission
Take one **desktop** screenshot (~1440px wide) and one **mobile** screenshot
(~390px wide, browser DevTools device toolbar) after you've swapped in your
own content and deployed the live link.
