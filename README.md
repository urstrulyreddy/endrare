# Endrare

Personal brand website for [endrare.com](https://endrare.com).  
Built with React + Vite. Deployed via Cloudflare Pages.

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
# → http://localhost:5173
```

---

## Build for Production

```bash
npm run build
# Output goes to /dist
```

---

## Deploy to Cloudflare Pages

### Option A — Connect GitHub (recommended)

1. Push this repo to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Click **Create a project** → **Connect to Git**
4. Select your repo
5. Set build settings:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Deploy command:** leave empty
6. Click **Save and Deploy**

Cloudflare will auto-deploy on every push to `main`.

Do not use `npx wrangler deploy` as a Pages deploy command. If your Cloudflare
project currently has that deploy command set, clear it. If Cloudflare requires
a deploy command, use `npx wrangler pages deploy dist --project-name endrare`.

### Skift presentation

The Skift item in `src/sections/SelectedSystems.jsx` links to:

```txt
/presentations/skiftpresentation.html
```

The `npm run build` command copies `presentations/skiftpresentation.html`
into `dist/presentations/skiftpresentation.html`, so Cloudflare serves it as a
standalone page. It also keeps `dist/skiftpresentation.html` and `dist/skift/index.html`
available for older links. The `/skift` and `/skift/` paths redirect to the
presentation file.

The archive entry **Building Skift from real operations** links to:

```txt
/casestudy/skiftcasestudy.html
```

The build also copies `casestudy/skiftcasestudy.html` into
`dist/casestudy/skiftcasestudy.html`. It also keeps `dist/skiftcasestudy.html`
and `dist/skift-case-study/index.html` available for older links. The
`/skift-case-study` and `/skift-case-study/` paths redirect to the case study file.

### Option B — Direct Upload (no Git)

```bash
npm run build
npx wrangler pages deploy dist --project-name endrare
```

Or run:

```bash
npm run deploy
```

### Custom Domain (endrare.com)

1. In Cloudflare Pages → your project → **Custom domains**
2. Add `endrare.com` and `www.endrare.com`
3. Cloudflare handles SSL automatically

---

## Project Structure

```
endrare/
├── index.html              # HTML entry point
├── vite.config.js          # Vite config
├── wrangler.toml           # Cloudflare Pages config
├── package.json
├── presentations/
│   ├── skiftpresentation.html  # Single-file Skift presentation
│   └── copy-skift.mjs          # Copies Skift pages into dist
├── casestudy/
│   └── skiftcasestudy.html     # Single-file Skift case study
└── src/
    ├── main.jsx            # React entry
    ├── App.jsx             # Root component + scroll observer
    ├── styles/
    │   └── global.css      # Design tokens, resets, utilities
    ├── hooks/
    │   └── useReveal.js    # Scroll reveal hook
    ├── components/
    │   ├── Nav.jsx         # Fixed navigation
    │   ├── Nav.module.css
    │   ├── HeroVisual.jsx  # Animated card stack
    │   ├── HeroVisual.module.css
    │   ├── Footer.jsx
    │   └── Footer.module.css
    └── sections/
        ├── Hero.jsx                    # Hero + headline
        ├── Hero.module.css
        ├── CurrentlyInMotion.jsx       # 3-card active work grid
        ├── CurrentlyInMotion.module.css
        ├── WhyIBuild.jsx              # Principles list
        ├── WhyIBuild.module.css
        ├── SelectedSystems.jsx         # Project case rows
        ├── SelectedSystems.module.css
        ├── BuilderStatement.jsx        # About / approach
        ├── BuilderStatement.module.css
        ├── Archive.jsx                 # Thought pieces
        └── Archive.module.css
```

---

## Customisation

- **Contact email** → `src/components/Footer.jsx`
- **Projects** → `src/sections/SelectedSystems.jsx` (SYSTEMS array)
- **Skift presentation URL** → `src/sections/SelectedSystems.jsx` (`href: '/presentations/skiftpresentation.html'`)
- **Skift case study URL** → `src/sections/Archive.jsx` (`href: '/casestudy/skiftcasestudy.html'`)
- **Principles** → `src/sections/WhyIBuild.jsx` (ITEMS array)
- **Archive entries** → `src/sections/Archive.jsx` (ENTRIES array)
- **Hero copy** → `src/sections/Hero.jsx`
- **Design tokens** → `src/styles/global.css` (`:root` variables)
- **Fonts** → `index.html` Google Fonts link + `global.css` font variables

---

## Tech Stack

- React 18
- Vite 5
- CSS Modules
- Google Fonts (DM Sans, Instrument Serif, Fira Code)
- Cloudflare Pages
