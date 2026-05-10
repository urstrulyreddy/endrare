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

## Deploy with Endrare

The main Endrare build copies this folder into `dist/skift`, so it is deployed
with the main website at:

```txt
https://endrare.com/skift
```

The copy step lives in `scripts/copy-skift.mjs` and runs after `vite build`.

## Notes

- No existing Skift app files were modified
- The presentation uses crafted UI mockups rather than live app assets, since no standalone screenshots were present in the repo
