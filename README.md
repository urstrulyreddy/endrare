# Endrare

Software and AI business website, with Deependra’s portfolio and journal, for [endrare.com](https://endrare.com).
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

The build also runs `scripts/build-seo.mjs`, which generates:

- pre-rendered home content that hydrates into the interactive React experience
- `sitemap.xml`
- `robots.txt`
- clean article/product routes
- page-level SEO metadata
- JSON-LD structured data
- Open Graph and Twitter/X metadata
- copied standalone HTML pages from `casestudy/`, `notes/`, and `presentations/`

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

### SEO and Public Pages

All public SEO metadata lives in:

```txt
src/data/seo.js
```

When adding a new public case study, essay, note, build log, presentation, or
product page, add one metadata object there. The build script uses that object
for canonical URLs, sitemap inclusion, Open Graph metadata, JSON-LD, redirects,
archive links, and generated product/archive pages.

Current clean article URLs:

```txt
/case-studies/building-skift-from-real-operations/
/case-studies/why-clarity-is-a-product-decision/
/notes/what-working-in-sweden-taught-me-about-software/
```

Current generated index pages:

```txt
/archive/
/services/
/products/
/start/
/about/
/contact/
```

### Skift presentation

The Skift product story links to the interactive presentation:

```txt
/presentations/skiftpresentation.html
```

The `npm run build` command copies `presentations/skiftpresentation.html`
into `dist/presentations/skiftpresentation.html`, so Cloudflare serves it as a
standalone page. Older `/skift`, `/skift/`, and `/skiftpresentation.html` URLs
redirect to the presentation file.

The archive entry **Building Skift from real operations** uses this canonical URL:

```txt
/case-studies/building-skift-from-real-operations/
```

The build also copies `casestudy/skiftcasestudy.html` into
`dist/case-studies/building-skift-from-real-operations/index.html`. Older
`.html` and `/skift-case-study` URLs redirect to the canonical URL.

The archive entry **What working in Sweden taught me about software** uses this canonical URL:

```txt
/notes/what-working-in-sweden-taught-me-about-software/
```

The build copies `notes/taughtinsweden.html` into
`dist/notes/what-working-in-sweden-taught-me-about-software/index.html`. Older
note URLs redirect to the canonical URL.

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
│   └── copy-skift.mjs          # Compatibility shim for older build commands
├── casestudy/
│   ├── skiftcasestudy.html     # Single-file Skift case study
│   └── productclarity.html     # Single-file product clarity case study
├── notes/
│   └── taughtinsweden.html     # Single-file Sweden/software note
├── scripts/
│   └── build-seo.mjs           # Generates SEO, sitemap, robots, clean routes
├── public/
│   ├── robots.txt
│   ├── favicon.svg
│   ├── manifest.webmanifest
│   └── og/
│       └── endrare-og.svg
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
- **Public SEO/content metadata** → `src/data/seo.js`
- **Archive entries** → `src/data/seo.js` (`CONTENT_ITEMS`)
- **Product pages** → `src/data/seo.js` (`PRODUCT_ITEMS`)
- **Principles** → `src/sections/WhyIBuild.jsx` (ITEMS array)
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

## Site structure and interaction design

- `src/App.jsx` composes the home page. The home project stories and service cards use native horizontal scrolling, with drag, keyboard, and button controls.
- `src/data/design.js` provides the shared navigation, compact footer, and interface illustrations.
- `src/data/services.json` contains 18 services, engagement steps, and FAQs. `scripts/render-services.mjs` generates the directory and structured data.
- `src/data/product-stories.json` and `scripts/render-products.mjs` provide eight distinct product stories and local interactive examples.
- `src/motion.js` renders original particle motion, pauses outside the viewport or hidden tabs, and responds to reduced-motion preferences. The Services lifecycle diagram has its own pause control.
- `src/interactions.js` handles the carousels, portfolio filters, product examples, and contact draft. Product examples are explanatory local interactions; they do not connect to production services.
- `scripts/render-contact.mjs` generates the contact page. It prepares a mailto draft in the visitor’s email app; it does not submit or store a message.
- `public/design.css`, `public/experience.css`, and `public/editorial.css` define the visual system and responsive layouts. Original article content and presentation interactions remain in their standalone sources.
- `public/images/endrare-ribbon.jpg` is an original generated brand visual. Interface illustrations are identified as studies or concepts.

Use `npm run preview` after building to review all generated pages. The development server serves the React home and standalone article sources; generated Services, Contact, and product routes are available in the production preview.

The `.openai/hosting.json` manifest connects a separate owner-private review Site. Publishing that review Site does not update the public endrare.com Cloudflare Pages deployment.
