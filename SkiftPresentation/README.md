# SkiftPresentation

Standalone product showcase for Skift.

## What it is

- Independent from the main iOS app
- Static presentation site built with HTML, CSS, and JavaScript
- Designed for Safari or any local browser preview
- Uses scroll-based storytelling, glassmorphism, and Apple-style motion cues

## Files

- `index.html`: page structure and story sections
- `styles.css`: visual system, layout, and animations
- `script.js`: scroll reveals, sales count-up, calendar mode cycling, and role-card motion

## Run locally

Option 1:

- Open `index.html` directly in Safari

Option 2:

- From the repo root, run:

```bash
cd SkiftPresentation
python3 -m http.server 4173
```

- Then open `http://localhost:4173`

## Deploy to `skift.endrare.com`

Deploy this folder as a separate Cloudflare Pages project. This keeps Skift on
its own subdomain instead of publishing it under `endrare.com/skift`.

### Git-connected Pages project

Use these Cloudflare Pages settings:

- **Project root:** `SkiftPresentation`
- **Build command:** leave empty
- **Build output directory:** `/`
- **Custom domain:** `skift.endrare.com`

### Direct upload

From this folder:

```bash
npx wrangler pages deploy . --project-name skift-endrare
```

Then add `skift.endrare.com` in Cloudflare Pages → your Skift project → Custom domains.

## Notes

- No existing Skift app files were modified
- The presentation uses crafted UI mockups rather than live app assets, since no standalone screenshots were present in the repo
