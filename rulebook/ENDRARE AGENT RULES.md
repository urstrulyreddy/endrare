# ENDRARE — AGENT RULES

### Version 1.2 · Compact Implementation Guide for AI Coding Agents

This file is a derived artifact. The source of truth is `ENDRARE_MASTER_DESIGN_RULEBOOK.md`. 


## Version Priority Notice

This file is the compact daily-use implementation guide for Claude, Codex, Cursor, and other AI coding agents.

Before making changes, agents must follow this priority order:

1. Latest patch file wins.
2. This Agent Rules file guides daily implementation.
3. The Master Design Rulebook provides deeper design context.
4. If this file conflicts with the latest patch, follow the patch.
5. If this file conflicts with the master rulebook and no patch exists, follow the master rulebook.
Read this end-to-end before generating any code for Endrare.

-----

## 1. WHAT ENDRARE IS

A personal digital studio that ships product-grade work. Not a startup, not an agency, not a luxury magazine. Identity = Apple minimalism × mathematical precision × calm editorial intelligence.

Goal of every interface: the user feels focused, calm, capable, inspired. If a change makes the surface louder, faster-feeling, or more excited, it is wrong.

The four-phase user arc the design must serve: **Arrival → Curiosity → Focus → Confidence.** Anxiety in any phase is a defect.

-----

## 2. STACK DEFAULTS

|Layer     |Tool                                              |
|----------|--------------------------------------------------|
|Framework |Next.js 14+ App Router                            |
|Styling   |Tailwind CSS + CSS custom properties (token-first)|
|Types     |TypeScript, strict                                |
|UI library|Local primitives only — no external UI kit        |
|Icons     |Lucide *or* Phosphor (pick one, never mix)        |
|Forms     |React Hook Form + Zod                             |
|Content   |MDX for case studies                              |
|Analytics |Plausible / Umami (cookieless, privacy-respecting)|
|Deploy    |Vercel                                            |

Default to **server components**. Use client components only when interactivity requires it.

-----

## 3. TOKEN QUICK REFERENCE

All values come from tokens defined in `styles/tokens.css`. Never hard-code hex, raw px, durations, or easing.

**Surface**

```
--surface-canvas   #FAFAF8   primary page bg
--surface-base     #F5F4F0   cards, containers
--surface-raised   #EFEDE8   hover states, secondary elevation
--surface-sunken   #F0EFEB   inputs, code blocks
--surface-glass    rgba(250,250,248,0.85)
--surface-overlay  rgba(15,15,14,0.40)
```

**Text**

```
--text-primary     #0F0F0E   headings, body
--text-secondary   #3D3C38   subheadings
--text-tertiary    #6B6A65   metadata, captions
--text-muted       #9B9A95   placeholders
--text-ghost       #C4C3BD   decorative only — never informational
--text-inverse     #F5F4F0   on dark surfaces
```

**Border**

```
--border-subtle    #E8E7E2
--border-default   #D4D3CD
--border-strong    #B8B7B0
--border-focus     #0F0F0E
```

**Accent (use sparingly, one per page)**

```
--accent-brand     #1A1A18
--accent-warm      #C4A882   editorial highlights
--accent-cool      #8B9EAD   secondary informational
--accent-success   #4A7C59
--accent-warning   #8B6914
--accent-error     #8B3A3A
```

**Spacing (4px base — all values are multiples of 4)**

```
--size-1=4   --size-2=8    --size-3=12   --size-4=16
--size-5=20  --size-6=24   --size-8=32   --size-10=40
--size-12=48 --size-16=64  --size-20=80  --size-24=96
--size-32=128 --size-40=160 --size-48=192 --size-64=256
```

**Radius**

```
--radius-sm=4   --radius-md=8   --radius-lg=12   --radius-xl=16
--radius-btn=8  --radius-card=12  --radius-modal=16  --radius-tag=9999
```

**Motion duration**

```
--motion-instant=100ms   --motion-fast=200ms     --motion-normal=300ms
--motion-slow=500ms      --motion-cinematic=700ms --motion-ambient=1000ms
```

**Easing**

```
--easing-premium  cubic-bezier(0.16, 1, 0.3, 1)   entrances, hover-in
--easing-out      cubic-bezier(0.0, 0.0, 0.2, 1)  exits, hover-out
--easing-in-out   cubic-bezier(0.4, 0, 0.2, 1)    looping, progress
--easing-spring   cubic-bezier(0.34, 1.56, 0.64, 1) micro-interactions
```

**Elevation**

```
--elevation-1  0 1px  2px rgba(15,15,14,0.04)   hover lift
--elevation-2  0 2px  8px rgba(15,15,14,0.06)   cards at rest
--elevation-3  0 4px 16px rgba(15,15,14,0.08)   cards on hover
--elevation-4  0 8px 32px rgba(15,15,14,0.10)   dropdowns, modals
--elevation-5  0 16px 48px rgba(15,15,14,0.12)  floating panels
```

-----

## 4. TYPOGRAPHY QUICK REFERENCE

**Fonts (Practical Production Mode — what production uses)**

```
--font-display  'Geist', 'Inter', system-ui, sans-serif
--font-body     'Inter', 'DM Sans', system-ui, sans-serif
--font-mono     'JetBrains Mono', 'Geist Mono', ui-monospace
--font-reading  'Newsreader', 'IBM Plex Sans', Georgia, serif
```

Self-host all fonts. Preload max 2 variable font files. Use `font-display: swap` with metric-matched fallback.

**Scale, line-height, tracking**

|Token|px|line-height|letter-spacing|Use               |
|-----|--|----------:|--------------|------------------|
|xs   |12|1.5        |+0.02em       |legal, fine print |
|sm   |14|1.5        |+0.01em       |captions, metadata|
|base |16|1.65       |0             |body (minimum)    |
|md   |18|1.72       |0             |case-study body   |
|lg   |20|1.5        |-0.01em       |section labels    |
|xl   |24|1.4        |-0.02em       |subheadings       |
|2xl  |30|1.3        |-0.02em       |section headings  |
|3xl  |36|1.25       |-0.03em       |page headings     |
|4xl  |48|1.15       |-0.03em       |large headings    |
|5xl  |60|1.1        |-0.04em       |hero subheadings  |
|6xl  |72|1.05       |-0.04em       |hero headings     |
|7xl  |96|1.0        |-0.05em       |maximum display   |

**Negative letter-spacing at display sizes is mandatory.** Above 36px, zero tracking looks loose.

**Max-width by context**

```
prose       68ch    marketing body
reading     72ch    case study body
docs        76ch    documentation
hero        18ch    hero headline (forces line breaks)
subheading  38ch
caption     52ch
pull-quote  56ch
```

**Fluid display sizes**

```css
--text-hero:    clamp(2.25rem, 4vw + 1rem, 4.5rem);
--text-section: clamp(1.5rem,  2vw + 1rem, 2.25rem);
```

Body text does not scale fluidly. Fixed 16px (mobile) or 18px (case study).

-----

## 5. COMPONENT API QUICK REFERENCE

**Button**

```tsx
<Button variant="primary|secondary|ghost" size="sm|md|lg">Read the case study</Button>
```

- Height: 44px (md), 36px (sm), 52px (lg). Min-width 120px.
- Primary: `--accent-brand` bg, `--text-inverse` text, radius `--radius-btn`.
- Hover: translateY(-1px), `--elevation-1`. Active: translateY(1px) scale(0.98) over 60ms.
- Label: sentence case, 2–4 words, verb-led, no period, no emoji.

**Card**

- bg `--surface-base`, border `--border-subtle`, radius `--radius-card`, padding `--size-8`.
- Hover: translateY(-2px), shadow `--elevation-3`, border `--border-default`. Transition 300ms `--easing-premium`.

**Input**

- height 44px, bg `--surface-sunken`, border `--border-default`, radius `--radius-input`, padding-x `--size-4`, font-size 16px.
- Focus: border `--text-primary`, ring `0 0 0 3px rgba(15,15,14,0.08)`.
- Error: border `--accent-error`, message below in `--text-xs` `--accent-error`.

**Modal**

- Overlay: `--surface-overlay`, blur 8px.
- Panel: `--surface-canvas`, radius `--radius-modal`, `--elevation-5`, max-width 560px, padding `--size-10`.
- Entrance: scale 0.96→1, translateY 8→0, opacity 0→1, 300ms `--easing-premium`.
- Must: `role="dialog"`, `aria-modal="true"`, focus trap, Escape closes, overlay click closes, focus returns to trigger.

**Toast**

- bg `--state-success-bg` etc., border-colored, position bottom-right 24px.
- Entrance: translateY 8→0, 300ms `--easing-premium`. Auto-dismiss 3500ms.
- Min visible 2500ms. No emoji icons in body.

**Navbar**

- Height 64px desktop / 56px mobile, position fixed, z-index 100.
- Background: transparent at scrollY 0, transitions to `--surface-glass` after 80px scroll.
- Backdrop: `blur(20px) saturate(180%)` when scrolled.

**Footer**

- bg `#1A1A18`, padding-top `--size-24`, padding-bottom `--size-16`.
- Text uses `--text-inverse` and rgba inverse variants.

-----

## 6. THE TEN DECISION QUESTIONS

Before adding/modifying any UI element, verify:

1. Does this reduce cognitive load?
1. Is this visually necessary?
1. Is this timeless, not trendy?
1. Does this improve emotional calmness?
1. Is this guiding attention correctly?
1. Can this be simpler?
1. Is this functional, not decorative?
1. Does this preserve Endrare’s identity?
1. Does this maintain readability?
1. Is this emotionally intelligent?

Tie-break priority (top wins): readability > simplicity > consistency > calmness > performance > accessibility.

If two valid options pass all ten, default to less.

-----

## 7. THE “NEVER” LIST

Color & surface

- Pure white `#FFFFFF` as a primary surface
- Pure black `#000000` anywhere except shadow ink
- Multi-hue gradients (purple-to-indigo, blue-to-teal, sunrise palettes)
- Saturated color gradients of any kind
- Colored shadows (no blue glow, no warm-amber drop)
- More than one accent color on the same page
- Dark mode shipped before light mode is production-perfect

Typography

- Comic Sans, Impact, Papyrus, novelty faces
- All-caps body text
- Justified alignment in paragraphs
- Letter-spacing on body text (labels only)
- Gradient text (`background-clip: text`)
- Drop shadow on text
- Synthesized heavy weights (only use designed 800)

Layout & motion

- Full-screen parallax backgrounds
- Content touching the viewport edge at any size
- Centered hero text with centered body paragraphs
- Scroll hijacking
- Typewriter effects
- Hover transforms moving content more than 4px
- Page transitions longer than 800ms total
- Letter-by-letter text reveals
- Linear easing for *interactive* UI transitions (acceptable for mechanical/ambient motion only)
- Animating layout properties as default (acceptable in 5 contained cases — see master Section 10.10)

Components

- Live chat widgets
- Modal-style cookie consent banners (use a slim in-page strip)
- Countdown timers for urgency
- Social-proof popup notifications
- Auto-playing video with audio
- Toast that auto-dismisses under 2.5s
- Tooltips on touch devices

Imagery

- Stock photo of people smiling at laptops
- Illustrated mascots / characters
- Images without explicit `width` and `height`
- AI-generated images that look AI-generated

Copy

- Forbidden words: revolutionize, supercharge, unlock, reimagine, elevate, game-changing, next-level, world-class, seamless, empower, cutting-edge, state-of-the-art, journey, reach out, solutions (generic)
- CTAs like “Get started for free →”, “Let’s chat!”, “Click here”
- Three-dot ellipses as a stylistic device
- Exclamation marks in UI copy

Code

- `!important` outside `prefers-reduced-motion` overrides
- Inline `style` for token-able values
- `px` for typography (use `rem`)
- Hard-coded hex outside `tokens.css`
- Arbitrary Tailwind values (`bg-[#FAFAF8]`) — use tokens
- `setTimeout` for animation staggering (use `animation-delay`)
- `z-index` over 100 without a comment
- Viewport units for font size on mobile
- Image without `width`/`height`

-----

## 8. AI AGENT IMPLEMENTATION CONTRACT

When you write code for Endrare:

1. Read `tokens.css` and `tailwind.config.ts` before writing any styles.
1. Reuse existing primitives. Do not create new `Button` variants.
1. If a token doesn’t exist, propose adding it to `tokens.css` rather than hard-coding.
1. Apply `prefers-reduced-motion` consideration to every animated element.
1. Provide `aria-label` for every icon-only interactive element.
1. Set explicit `width` and `height` on every image.
1. Default to server components; client only for interactivity.
1. Stop and ask before adding any dependency over 10KB gzipped.
1. Match copy conventions in Section 9 below.
1. Run the per-component checklist (Section 10) mentally before submitting.

-----

## 9. COPY CONVENTIONS

- **Headlines:** 4–12 words, sentence case, no terminal punctuation, no emoji, one idea per headline.
- **Subheadings:** 1–2 sentences, max 38 words, end with a period.
- **Body:** average sentence 12–22 words, paragraphs 40–90 words, 2–5 sentences each.
- **CTAs:** 2–4 words, sentence case, verb-led, no arrow in label, no terminal punctuation.
- **Microcopy library** lives at `content/microcopy.ts` — use it. Don’t invent strings.

Standard strings:

```
Form success:  "Saved."
Generic error: "Something didn't go through. Try again, or email us."
Empty list:    "Nothing here yet."
Loading:       "Loading."
404 heading:   "The page isn't here."
500 heading:   "The server didn't respond."
```

-----

## 10. PER-COMPONENT CHECKLIST BEFORE SUBMITTING

```
[ ] All values come from tokens — no hard-coded hex, px, or durations
[ ] Default, hover, focus, active, and disabled states defined
[ ] :focus-visible is visible (outline 2px --text-primary, offset 3px)
[ ] prefers-reduced-motion respected — transforms removed, transitions ≤ 1ms
[ ] Contrast ≥ 4.5:1 for body, ≥ 3:1 for large text and UI
[ ] Touch target ≥ 44 × 44px on mobile
[ ] Image has explicit width and height attributes
[ ] Renders correctly at 320px, 768px, 1024px, 1440px
[ ] No layout shift on font load (CLS < 0.05)
[ ] Copy passes headline / CTA / body conventions
[ ] No forbidden words in any visible string
[ ] aria-label on icon-only buttons
[ ] Semantic HTML (button vs link, nav, main, footer used correctly)
[ ] Server component by default; client only if interactive
```

-----

## 11. ENDRARE-CONSISTENT PROMPT PATTERNS

When prompting yourself or another agent to build an Endrare component, use this scaffold:

```
Build a [component name] for Endrare.

Use tokens from tokens.css. Do not hard-code values.
- Surface: --surface-canvas or --surface-base
- Text:    --text-primary / --text-secondary / --text-tertiary
- Border:  --border-subtle / --border-default
- Spacing: 4px base scale (--size-1 through --size-64)
- Radius:  --radius-card / --radius-btn / --radius-modal
- Motion:  200–500ms with --easing-premium for entrance, --easing-out for exit

Typography:
- Display: var(--font-display), negative letter-spacing at 36px+
- Body:    var(--font-body), line-height 1.65, max-width 68ch

Required:
- Hover, focus-visible, active states
- prefers-reduced-motion fallback
- Mobile (44px touch targets, 16px min font)
- aria-label if icon-only

Avoid:
- Gradients beyond the four permitted categories (atmospheric, glass diffusion, edge vignette, image overlay)
- Colored shadows
- Hover transforms > 4px
- Marketing language in copy
- Anything that would look at home on a Vercel template
```

-----

## 12. THE SOUL OF ENDRARE (FOR INTERNAL CALIBRATION)

Before generating any UI, internally check tone:

- Is this what a thoughtful founder building a personal studio would ship?
- Does it look like it could only be Endrare, not a generic premium template?
- Does it carry mathematical restraint rather than decorative drama?
- Is the typography doing the work, or is color and motion compensating for weak type?
- Would this still feel correct in 2030?

If any answer is uncertain, revise. When in doubt, do less.

-----

*ENDRARE_AGENT_RULES.md — derived from ENDRARE_MASTER_DESIGN_RULEBOOK.md v1.2. 