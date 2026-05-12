# ENDRARE

## MASTER DESIGN RULEBOOK

### Version 1.2 — Unified Production Document

*For frontend engineers · backend engineers · UI/UX designers · motion directors · brand strategists · content writers · AI coding agents · future contributors · spatial-computing designers*

-----

# Endrare Design System — Master Rulebook

## Version Priority Notice

This document is the long-form source of truth for Endrare Design System v1.2.

If future patch files exist, the newest patch file takes priority over this master rulebook only where it explicitly overrides, replaces, or extends an existing rule.

Rule priority:

1. Latest patch file wins.
2. Specific override beats general guidance.
3. If no patch conflict exists, this master rulebook remains valid.
4. Agent rules are compact implementation guidance, but must follow the master rulebook and latest patches.

-----

> **“Technology should feel emotionally intelligent.”**
> 
> Every pixel, easing curve, line of copy, whitespace decision, interaction response, and typographic choice in Endrare exists to serve one purpose: to make the user feel focused, calm, capable, and inspired. This document is the permanent record of how that promise is kept — across every interface, every platform, every future iteration of this product.
> 
> Read this document before you build anything. Return to it when you are unsure. Protect it from entropy.

-----

## DOCUMENT PHILOSOPHY

This is not a style guide. Style guides describe aesthetics. This is a **design governance system** — a living constitutional document that encodes the identity, psychology, decision-making logic, technical architecture, and emotional philosophy of Endrare into a single permanent reference.

It is written for humans and AI agents alike. It assumes intelligence, rewards careful reading, and demands precision in implementation.

When the document says “never,” it means never. When it says “always,” it means always. When it grants flexibility, it defines exactly where the edges of that flexibility lie. Where a rule is conditional, the conditions are enumerated — there are no implicit exceptions.

This document governs [endrare.com](https://endrare.com) today and every surface Endrare occupies in the future. It is the source of truth. If the code disagrees with the rulebook, the code is wrong. The rulebook does not move to accommodate a shortcut.

-----

## TABLE OF CONTENTS

**Substrate**
0. Founder Taste Layer

**Foundation**

1. Brand Identity System
1. Design Decision Framework
1. Design Token Architecture

**Visual Language**
4. Color System
5. Typography System
6. Spacing & Layout System
7. Lighting & Depth System
8. Iconography System
9. Image & Media System

**Interaction & Motion**
10. Motion Design System
11. Interaction Psychology System
12. Complete State System

**Components**
13. Component Rulebook
14. Case Study System
15. Data Visualization System

**Content**
16. Content Voice & Writing System

**Engineering**
17. Development Architecture
18. Performance Governance System
19. SEO & Structured Content System

**Platform**
20. Responsive Design System
21. Mobile Safe-Area & Device Philosophy
22. Advanced Accessibility System

**Governance**
23. Controlled Rule-Breaking System
24. Forbidden Design Patterns
25. Long-Term Product Evolution System

**Operations**

- Practical Operational Systems (loading, errors, forms, OG images, privacy)

**Reference**

- Appendix A: Token Quick Reference
- Appendix B: Current Build State Audit
- Appendix C: Design Decision Checklist

-----

-----

# PART ZERO — SUBSTRATE

-----

-----

# 0. FOUNDER TASTE LAYER

This section sits ahead of all others because it sets the substrate. Every rule that follows derives from a specific personal sensibility — Deependra’s. Without this anchor, the system can drift into a generic luxury aesthetic, which is the failure mode the rest of the rulebook exists to prevent.

## 0.1 What Endrare Is Anchored To

Endrare is not a magazine, an agency, or a startup. It is a personal digital studio that ships product-grade work. The interface is the founder’s reasoning made spatial.

Four reference points define the taste substrate:

|Reference                                      |What it contributes                                                         |
|-----------------------------------------------|----------------------------------------------------------------------------|
|Apple Human Interface Guidelines               |Behavioral clarity, semantic correctness, system thinking                   |
|Mathematical typography (Knuth, Bringhurst)    |Modular scales, optical correction, ratio discipline                        |
|Linear, Vercel, Stripe documentation           |Density without noise, monospace as a primary voice, edge-of-pixel precision|
|Editorial long-form (NYT Magazine, The Browser)|Reading rhythm, measure discipline, image punctuation                       |

If a design decision cannot trace itself back to one of these four, it does not belong.

## 0.2 The Operating Sensibility

The founder’s design logic operates through six dispositions. These are not adjectives describing the brand — they are decision rules.

**Restraint as a tool, not a style.** Adding an element requires justification. Removing one does not. Defaults trend toward less.

**Mathematics over taste-as-mood.** Spacing is derived from a 4px base. Typography from a 1.25 modular ratio. Line height from reading physiology research. The system can be audited.

**Apple’s behavior, not Apple’s aesthetic.** Endrare copies Apple’s logic — semantic motion, predictable response, generous touch targets — and rejects its specific visual signatures (rounded cards, San Francisco font, blue accents).

**The system is the brand.** Endrare’s identity is not a logo or a color. It is the consistency between any two surfaces. A button on page A and a button on page B are the same button.

**The interface is one person’s mind.** It is allowed to be specific. It is allowed to refuse trends. It does not optimize for the median user — it is honest about who it is for.

**Build for five years, not five months.** Every decision must survive replacement of the typeface, the framework, the deployment platform. Tokens persist across decisions. Decisions do not persist across tokens.

## 0.3 What Endrare Must Not Borrow

To protect the substrate, the following adjacent aesthetics are explicitly off-limits, even when they overlap with parts of the system:

- The Apple marketing site (we share clarity, not the device-on-gradient hero)
- High-end fashion editorial (we share whitespace, not the serif drama)
- Awwwards-of-the-day studios (we share craft, not the scroll-hijacked spectacle)
- AI-product landing pages (we share nothing — they signal noise, we signal restraint)
- Crypto / Web3 darkmode brutalism
- Notion’s playful illustration layer

The test: if a visitor cannot tell within five seconds whether this is a studio, a product, or a writing surface — that ambiguity is correct. Endrare is all three, on purpose.

## 0.4 The Wordmark Discipline

The wordmark “Endrare” is the brand’s only fixed visual asset. It is treated as a geometric construction, not a typographic logo.

- Set in a monolinear sans with mathematical letterforms (see Section 5.2 Practical Mode)
- Letter-spacing: `-0.01em` to `-0.02em`
- Weight: 500 (medium), never bold
- Color: `--text-primary` (`#0F0F0E`) on light surfaces; `--text-inverse` on the footer
- Never sits on top of an image, video, or pattern
- Never has a shadow, glow, gradient, or outline
- Never animates on hover

The wordmark earns its presence by being the only branded element on the page.

-----

-----

-----

# PART ONE — FOUNDATION

-----

-----

# 1. BRAND IDENTITY SYSTEM

-----

## 1.1 What Endrare Is

Endrare is a **considered product** — one that exists at the intersection of editorial publishing, precision engineering, and emotional intelligence. It is not a startup. It is not a template. It is not a SaaS category play. It is a specific, original thing: a digital environment that makes its users feel more capable, more focused, and more confident simply by being in it.

This distinction is the foundation of every design decision. The interface is not a wrapper around functionality — it is the experience. The quality of the space determines the quality of the thought that happens within it.

## 1.2 Brand Personality Matrix

|Dimension        |Descriptor                 |Anti-Descriptor        |
|-----------------|---------------------------|-----------------------|
|Visual register  |Editorial minimalism       |Startup template       |
|Emotional tone   |Quiet confidence           |Excitement signaling   |
|Intelligence mode|Implied precision          |Stated capability      |
|Pacing           |Deliberate, unhurried      |Fast, urgent, pushy    |
|Trust mechanism  |Silence + craft            |Social proof + volume  |
|Personality      |Considered friend          |Aggressive salesperson |
|Aesthetic lineage|Swiss editorial × Apple HIG|Agency portfolio × Web3|

## 1.3 The Four-Phase Emotional Arc

Every user who visits Endrare should move through a specific, designed emotional sequence. This arc governs all macro-level design decisions:

**Phase 1 — Arrival: Calm**
The page breathes. Nothing competes for attention. The whitespace is generous. The typography is the first thing the eye encounters and it is immediately legible, warm, and assured. The user exhales.

**Phase 2 — Exploration: Curiosity**
Something is clearly crafted here. Details reveal themselves gradually — a precise shadow, a measured transition, a typographic detail that rewards attention. The user leans forward.

**Phase 3 — Reading: Focus**
The typography draws the user in completely. The measure is controlled. The rhythm is consistent. The color creates no distraction. The mind quiets and the content absorbs.

**Phase 4 — Completion: Confidence**
The product is clearly capable. The craft signals competence. The user trusts what they are looking at before they have read a single feature claim.

Any design decision that disrupts this arc — that introduces anxiety in Phase 1, confusion in Phase 2, distraction in Phase 3, or doubt in Phase 4 — is a design failure regardless of how aesthetically interesting it might be.

## 1.4 Visual Identity Core Principles

**Principle 1 — Silence is the loudest signal.**
Luxury products do not beg for attention. Apple retail stores are architecturally quiet. Hermès boutiques use vast emptiness as the display medium. Endrare uses whitespace the same way — not as a budget constraint but as a power statement. Space around an element says: this element matters enough to stand alone.

**Principle 2 — Typography is the primary design element.**
Endrare is a typography-first system. Color, imagery, and motion all exist in service of the type hierarchy. When any of these three compete with typography for visual dominance, the design is wrong.

**Principle 3 — Nothing is decorative. Everything is intentional.**
If a visual element exists only to look interesting — a background texture, an ambient shape, a decorative line — it must be removed or recontextualized as genuinely functional. Every visual choice must serve communication, hierarchy, or emotional register.

**Principle 4 — Restraint is the hardest craft.**
Adding elements is easy. Removing them requires judgment. Every iteration cycle should ask: what can be removed without losing meaning? The final design is the version where nothing further can be taken away without losing something essential.

**Principle 5 — Motion must be invisible.**
Users should never consciously register an animation. They should only feel smoother, calmer, and more oriented as a result of one having occurred. If motion is noticed, it has failed. If motion is absent from the user’s conscious awareness but the interface feels physically coherent, it has succeeded.

**Principle 6 — Performance is a design value.**
A slow interface is not a premium interface. The sensation of smoothness — instant response, fluid transitions, zero layout shift — is as much a design deliverable as the visual aesthetic. Performance governs are encoded in Part 18.

**Principle 7 — Consistency enables trust.**
Unexpected inconsistency — a button styled differently on one page, a heading at a non-standard size, an animation that doesn’t match the system — erodes trust faster than most visual errors. The token system exists to make consistency architectural, not aspirational.

## 1.5 What Endrare Must Never Become

This list is as important as the positive principles. It is a constitutional guard against the most common failure modes. Review it before shipping anything.

**Product category failures:**

- A startup landing page (gradients, floating screenshots, testimonial carousels, urgency timers)
- A SaaS tool interface (feature comparison grids, pricing-table heroes, checkbox-heavy UI)
- A design agency portfolio (overdone parallax, full-screen cursor takeovers, neon palettes)
- A gaming or Web3 product (dark ground-truth, glow effects, mechanical typography)
- A generic corporate enterprise product (navy blue, stock photography, Arial everywhere)
- A generic AI product (purple gradients, neural network visualizations, “powerful AI” copy)

**Aesthetic failure modes:**

- Over-animated showcase (scroll-triggered explosions, physics simulations, particle systems)
- Maximalist complexity (every section uses a different visual language)
- Cold surgical minimalism (so stripped back it communicates nothing)
- Trend-chasing (whatever design Twitter is excited about this quarter)

**Emotional failure modes:**

- Anxiety-inducing (too many elements competing, too much movement)
- Juvenile (rounded everything, pastel colors, playful micro-animations)
- Arrogant (inaccessible, impossible to read, prioritizes aesthetics over usability)
- Generic (could belong to any brand, no specific point of view)

-----

-----

# 2. DESIGN DECISION FRAMEWORK

-----

## 2.1 Philosophy

Before any new interface element is added, modified, or removed, every contributor — designer, engineer, or AI agent — must evaluate that decision against a structured framework. This is not bureaucracy. It is the mechanism by which Endrare’s identity remains coherent across years of iteration, changing teams, and evolving product scope.

Intuition is valuable. This framework makes intuition auditable.

## 2.2 The Ten Questions

These questions must be answered — even briefly, even silently — before any UI decision is finalized.

**Question 1: Does this reduce or increase cognitive load?**
Every visual element occupies space in the user’s working memory. New elements must earn their place by reducing the mental effort required to understand the interface, not by adding visual richness. A decorative element that requires processing — even subconsciously — is a cognitive tax.

**Question 2: Is this visually necessary?**
Separate “I want to add this” from “the user needs this.” A background texture might be visually appealing. But does its absence confuse the user? Does its presence help them? If the honest answer is no on both counts, the element should not exist.

**Question 3: Is this timeless or trendy?**
Ask: will this look dated in three years? If the answer is likely yes — if this element is currently fashionable in design communities but has no deep functional or emotional justification — reconsider. Endrare’s identity must still feel correct in 2030.

**Question 4: Does this improve emotional calmness?**
Does this addition help the user feel more settled, more focused, more in control? Or does it introduce a note of urgency, excitement, or anxiety? Endrare is not trying to excite users. It is trying to calm and focus them.

**Question 5: Is this guiding attention correctly?**
Where does this element direct the eye? Is that the correct direction? Does it reinforce or compete with the existing visual hierarchy? Every element either strengthens hierarchy or weakens it. Neutral elements do not exist.

**Question 6: Can this be simplified?**
Can the same communicative purpose be achieved with less? Fewer colors, simpler shape, smaller size, shorter copy, less animation? The simplest version that works is always preferred.

**Question 7: Is this decorative or functional?**
This question forces honesty. “Decorative” is not a crime in isolation — but in Endrare, decoration must be so subtle and so well-integrated that it functions as emotional atmosphere rather than visual noise. If you cannot articulate the functional or atmospheric purpose of an element, it should be removed.

**Question 8: Does this preserve Endrare’s identity?**
Could this element appear in a competitor’s product without anyone noticing? If yes, it may be technically correct but brand-neutral. Endrare-specific identity comes from the accumulation of precise, consistent choices. Each individual choice must reinforce the whole.

**Question 9: Does this maintain readability?**
Typography and readability are the substrate everything else rests on. No visual decision — not a background color shift, not an overlay effect, not an image placement — should reduce the legibility of text beneath, around, or near it.

**Question 10: Is this emotionally intelligent?**
Does this decision account for the psychological state of the user? Does it recognize that users come to Endrare in different moods and cognitive loads? Does it serve someone who is tired, distracted, or uncertain as well as someone who is focused and energized?

## 2.3 The Simplicity Test

After answering the ten questions, run the simplicity test:

> Remove the element mentally. Does the interface communicate less clearly? Does it feel less emotionally coherent? Is any essential information missing?

If removing the element causes no meaningful loss — it should be removed.

## 2.4 The Identity Test

> Could this UI element appear on a Vercel template, a Framer community site, or a generic SaaS landing page without looking out of place?

If yes — it is not Endrare. Revise it until it could only belong here.

## 2.5 The Longevity Test

> Will this decision still feel correct in 2028?

Design that feels contemporary but lacks depth ages poorly. Design that is deeply considered and rooted in timeless principles (typographic hierarchy, proportional spacing, restrained color) ages gracefully.

## 2.6 Decision Escalation Protocol

When a design decision cannot be resolved by the framework — when two valid options exist and both pass all ten questions — default to the following priority order:

1. **Readability** wins over aesthetics
1. **Simplicity** wins over richness
1. **Consistency** wins over novelty
1. **Emotional calmness** wins over visual interest
1. **Performance** wins over animation
1. **Accessibility** wins over visual precision

-----

-----

# 3. DESIGN TOKEN ARCHITECTURE SYSTEM

-----

## 3.1 Why Token Architecture Matters

Design tokens are not just variables. They are the **structural foundation** of Endrare’s consistency. Without a rigorously organized token system, the following failures become inevitable over time:

- Different contributors introduce slightly different shades of the same color
- Animation durations drift across components
- Spacing values accumulate as a collection of arbitrary pixel numbers
- AI agents generating new UI cannot maintain visual consistency without explicit values
- Theming and future dark mode require full manual restyling
- Refactoring becomes dangerous because values are hard-coded throughout the codebase

A well-designed token architecture makes consistency architectural. The system enforces the design even when individual contributors are unaware of the full design intent.

## 3.2 Token Hierarchy

Endrare uses a **four-tier token hierarchy**. Each tier builds on the one below it. This structure allows the design to evolve at the top layers without breaking the foundation.

```
Tier 1: PRIMITIVE TOKENS
Raw named values. The atoms of the system.
Never used directly in components.

Tier 2: SEMANTIC TOKENS
Map primitive tokens to meaning.
Used by all components.

Tier 3: COMPONENT TOKENS
Map semantic tokens to specific component contexts.
Scoped to a component family.

Tier 4: STATE TOKENS
Map component tokens to interaction states.
Scoped to a specific state within a component.
```

## 3.3 Tier 1 — Primitive Tokens

Primitive tokens are the raw, literal values of the design system. They have no semantic meaning — they are simply named values.

**Naming convention:** `--[category]-[scale]`

```css
/* Color Primitives */
--color-neutral-0:    #FFFFFF;
--color-neutral-50:   #FAFAF8;
--color-neutral-100:  #F5F4F0;
--color-neutral-150:  #EFEDE8;
--color-neutral-200:  #E8E7E2;
--color-neutral-300:  #D4D3CD;
--color-neutral-400:  #B8B7B0;
--color-neutral-500:  #9B9A95;
--color-neutral-600:  #6B6A65;
--color-neutral-700:  #3D3C38;
--color-neutral-800:  #2A2A28;
--color-neutral-900:  #1A1A18;
--color-neutral-950:  #0F0F0E;

--color-warm-100:     #F7F0E6;
--color-warm-200:     #EFE0C9;
--color-warm-300:     #DEC9A8;
--color-warm-400:     #C4A882;
--color-warm-500:     #A88960;
--color-warm-600:     #8B6B42;

--color-cool-100:     #EDF1F5;
--color-cool-200:     #D3DDE6;
--color-cool-300:     #B0C3D1;
--color-cool-400:     #8B9EAD;
--color-cool-500:     #697E8E;
--color-cool-600:     #4E5F6E;

--color-success-100:  #EDF4EF;
--color-success-500:  #4A7C59;
--color-success-700:  #2E5438;

--color-warning-100:  #F5F0E0;
--color-warning-500:  #8B6914;
--color-warning-700:  #5C4509;

--color-error-100:    #F5EAEA;
--color-error-500:    #8B3A3A;
--color-error-700:    #5C2424;

/* Spacing Primitives */
--size-1:   0.25rem;   /* 4px  */
--size-2:   0.5rem;    /* 8px  */
--size-3:   0.75rem;   /* 12px */
--size-4:   1rem;      /* 16px */
--size-5:   1.25rem;   /* 20px */
--size-6:   1.5rem;    /* 24px */
--size-8:   2rem;      /* 32px */
--size-10:  2.5rem;    /* 40px */
--size-12:  3rem;      /* 48px */
--size-16:  4rem;      /* 64px */
--size-20:  5rem;      /* 80px */
--size-24:  6rem;      /* 96px */
--size-32:  8rem;      /* 128px */
--size-40:  10rem;     /* 160px */
--size-48:  12rem;     /* 192px */
--size-64:  16rem;     /* 256px */

/* Radius Primitives */
--radius-0:   0px;
--radius-2:   2px;
--radius-4:   4px;
--radius-6:   6px;
--radius-8:   8px;
--radius-10:  10px;
--radius-12:  12px;
--radius-16:  16px;
--radius-20:  20px;
--radius-24:  24px;
--radius-full: 9999px;

/* Duration Primitives */
--duration-50:   50ms;
--duration-100:  100ms;
--duration-150:  150ms;
--duration-200:  200ms;
--duration-250:  250ms;
--duration-300:  300ms;
--duration-400:  400ms;
--duration-500:  500ms;
--duration-600:  600ms;
--duration-700:  700ms;
--duration-800:  800ms;
--duration-1000: 1000ms;
--duration-1200: 1200ms;
--duration-1500: 1500ms;

/* Easing Primitives */
--easing-premium:    cubic-bezier(0.16, 1, 0.3, 1);
--easing-out:        cubic-bezier(0.0, 0.0, 0.2, 1);
--easing-in-out:     cubic-bezier(0.4, 0, 0.2, 1);
--easing-spring:     cubic-bezier(0.34, 1.56, 0.64, 1);
--easing-linear:     linear;

/* Blur Primitives */
--blur-4:    4px;
--blur-8:    8px;
--blur-12:   12px;
--blur-16:   16px;
--blur-20:   20px;
--blur-24:   24px;
--blur-40:   40px;

/* Typography Scale Primitives */
--font-size-10:  0.625rem;
--font-size-11:  0.6875rem;
--font-size-12:  0.75rem;
--font-size-14:  0.875rem;
--font-size-16:  1rem;
--font-size-18:  1.125rem;
--font-size-20:  1.25rem;
--font-size-24:  1.5rem;
--font-size-30:  1.875rem;
--font-size-36:  2.25rem;
--font-size-48:  3rem;
--font-size-60:  3.75rem;
--font-size-72:  4.5rem;
--font-size-96:  6rem;

/* Font Weight Primitives */
--weight-300: 300;
--weight-400: 400;
--weight-500: 500;
--weight-600: 600;
--weight-700: 700;
--weight-800: 800;

/* Line Height Primitives */
--leading-none:   1.0;
--leading-tight:  1.1;
--leading-snug:   1.25;
--leading-normal: 1.4;
--leading-relaxed: 1.6;
--leading-loose:  1.72;
--leading-caption: 1.5;
```

## 3.4 Tier 2 — Semantic Tokens

Semantic tokens assign meaning to primitives. They are the layer that all components reference. When the design evolves — when a background color shifts slightly — only the semantic token mapping changes, and the update propagates everywhere.

**Naming convention:** `--[category]-[role]-[modifier?]`

```css
/* Surface Semantics */
--surface-canvas:    var(--color-neutral-50);   /* Primary page bg */
--surface-base:      var(--color-neutral-100);  /* Cards, containers */
--surface-raised:    var(--color-neutral-150);  /* Hover states, elevated */
--surface-sunken:    var(--color-neutral-100);  /* Inputs, code blocks */
--surface-overlay:   rgba(15, 15, 14, 0.40);    /* Modal darkened overlay */
--surface-glass:     rgba(250, 250, 248, 0.85); /* Glass panels */

/* Text Semantics */
--text-primary:      var(--color-neutral-950);
--text-secondary:    var(--color-neutral-700);
--text-tertiary:     var(--color-neutral-600);
--text-muted:        var(--color-neutral-500);
--text-ghost:        var(--color-neutral-400);
--text-inverse:      var(--color-neutral-100);
--text-link:         var(--color-neutral-950);
--text-link-hover:   var(--color-neutral-700);

/* Border Semantics */
--border-subtle:     var(--color-neutral-200);
--border-default:    var(--color-neutral-300);
--border-strong:     var(--color-neutral-400);
--border-focus:      var(--color-neutral-950);
--border-glass:      rgba(255, 255, 255, 0.6);

/* Accent Semantics */
--accent-brand:      var(--color-neutral-950);
--accent-warm:       var(--color-warm-400);
--accent-cool:       var(--color-cool-400);
--accent-success:    var(--color-success-500);
--accent-warning:    var(--color-warning-500);
--accent-error:      var(--color-error-500);

/* Motion Semantics */
--motion-instant:    var(--duration-100);
--motion-fast:       var(--duration-200);
--motion-normal:     var(--duration-300);
--motion-slow:       var(--duration-500);
--motion-cinematic:  var(--duration-700);
--motion-ambient:    var(--duration-1000);
--motion-ease:       var(--easing-premium);
--motion-ease-exit:  var(--easing-out);

/* Elevation Semantics */
--elevation-0:  none;
--elevation-1:  0 1px 2px rgba(15,15,14,0.04);
--elevation-2:  0 2px 8px rgba(15,15,14,0.06);
--elevation-3:  0 4px 16px rgba(15,15,14,0.08);
--elevation-4:  0 8px 32px rgba(15,15,14,0.10);
--elevation-5:  0 16px 48px rgba(15,15,14,0.12);

/* Radius Semantics */
--radius-sm:    var(--radius-4);
--radius-md:    var(--radius-8);
--radius-lg:    var(--radius-12);
--radius-xl:    var(--radius-16);
--radius-card:  var(--radius-12);
--radius-input: var(--radius-8);
--radius-btn:   var(--radius-8);
--radius-modal: var(--radius-16);
--radius-tag:   var(--radius-full);

/* Blur Semantics */
--blur-glass:   var(--blur-20);
--blur-overlay: var(--blur-8);
--blur-subtle:  var(--blur-4);
```

## 3.5 Tier 3 — Component Tokens

Component tokens scope semantic tokens to specific component families. This layer allows individual components to evolve without touching the global semantic layer.

**Naming convention:** `--[component]-[element]-[property]`

```css
/* Button Component Tokens */
--btn-primary-bg:            var(--accent-brand);
--btn-primary-bg-hover:      var(--color-neutral-800);
--btn-primary-text:          var(--text-inverse);
--btn-primary-border:        transparent;
--btn-primary-radius:        var(--radius-btn);
--btn-primary-shadow:        var(--elevation-0);
--btn-primary-shadow-hover:  var(--elevation-1);

--btn-secondary-bg:          transparent;
--btn-secondary-bg-hover:    var(--surface-raised);
--btn-secondary-text:        var(--text-primary);
--btn-secondary-border:      var(--border-default);
--btn-secondary-border-hover: var(--border-strong);

/* Card Component Tokens */
--card-bg:                   var(--surface-base);
--card-bg-hover:             var(--surface-base);
--card-border:               var(--border-subtle);
--card-border-hover:         var(--border-default);
--card-radius:               var(--radius-card);
--card-shadow:               var(--elevation-2);
--card-shadow-hover:         var(--elevation-3);
--card-padding:              var(--size-8);

/* Input Component Tokens */
--input-bg:                  var(--surface-sunken);
--input-border:              var(--border-default);
--input-border-focus:        var(--border-focus);
--input-text:                var(--text-primary);
--input-placeholder:         var(--text-ghost);
--input-radius:              var(--radius-input);
--input-height:              44px;

/* Navigation Component Tokens */
--nav-bg:                    transparent;
--nav-bg-scrolled:           var(--surface-glass);
--nav-blur:                  var(--blur-glass);
--nav-border-scrolled:       var(--border-subtle);
--nav-text:                  var(--text-secondary);
--nav-text-hover:            var(--text-primary);
--nav-text-active:           var(--text-primary);
--nav-height:                64px;
--nav-height-mobile:         56px;

/* Case Study Tokens */
--cs-sidebar-width:          240px;
--cs-content-max:            68ch;
--cs-body-size:              var(--font-size-18);
--cs-body-leading:           var(--leading-loose);
--cs-nav-text:               var(--text-tertiary);
--cs-nav-text-active:        var(--text-primary);
--cs-nav-border-active:      var(--text-primary);
--cs-pull-quote-border:      var(--accent-warm);
```

## 3.6 Tier 4 — State Tokens

State tokens handle the visual behavior of components in interactive and conditional states.

```css
/* Interaction States */
--state-hover-overlay:       rgba(15,15,14,0.03);
--state-active-overlay:      rgba(15,15,14,0.06);
--state-focus-ring:          rgba(15,15,14,0.12);
--state-disabled-opacity:    0.38;
--state-skeleton-base:       var(--surface-raised);
--state-skeleton-shine:      rgba(255,255,255,0.5);

/* Semantic States */
--state-success-bg:          var(--color-success-100);
--state-success-text:        var(--color-success-700);
--state-success-border:      var(--color-success-500);

--state-warning-bg:          var(--color-warning-100);
--state-warning-text:        var(--color-warning-700);
--state-warning-border:      var(--color-warning-500);

--state-error-bg:            var(--color-error-100);
--state-error-text:          var(--color-error-700);
--state-error-border:        var(--color-error-500);
```

## 3.7 Token Governance Rules

**Rule 1 — Never use primitive tokens in components.**
Components must reference semantic or component tokens. Using `--color-neutral-950` directly in a button is a governance violation. Use `--btn-primary-bg` instead.

**Rule 2 — Semantic tokens are the single source of truth.**
All visual decisions flow through semantic tokens. If a color needs to change globally, change the semantic token, not the places it is used.

**Rule 3 — No magic numbers.**
No raw pixel values, hex codes, or rgba() values in component CSS. All values must trace back to a token.

**Rule 4 — Token naming is communication.**
Token names must be readable by a developer who has never seen the codebase. `--btn-primary-bg` is correct. `--c1` is not. `--blue-dark-hover-state` is not.

**Rule 5 — AI agents must query tokens before writing CSS.**
When an AI agent writes any CSS, the first step is to identify the applicable token from the token hierarchy. Only if no token exists should a new one be created — and if created, it must be added to the appropriate tier.

-----

-----

# PART TWO — VISUAL LANGUAGE

-----

-----

# 4. COLOR SYSTEM

-----

## 4.1 Color Philosophy

The Endrare color system is built around a single governing idea: **color should reduce cognitive load, not create it.** The palette is not an expression of brand excitement. It is a calibrated environment for extended, focused use.

Three principles govern every color decision:

**Warmth reduces fatigue.** Pure white (#FFFFFF) creates harsh optical contrast with dark text, causing measurable eye fatigue during extended reading sessions. Endrare’s backgrounds carry a 2–3% warm tint — invisible in isolation, transformative in extended use. This is the same principle used by high-end print papers and premium digital editorial platforms.

**Hierarchy through tone, not color.** Text hierarchy in Endrare is expressed through the neutral grayscale spectrum, not through color differentiation. A heading is not blue; a label is not green. The eye reads hierarchy through contrast and weight. Color is reserved for semantic communication: success, warning, error, and the single editorial accent.

**Restraint enables accent power.** Because the palette is almost entirely neutral, the single warm accent (`--accent-warm`) and cool accent (`--accent-cool`) carry enormous communicative weight when they appear. Their power depends entirely on their rarity.

## 4.2 Background Surfaces

|Token             |HEX      |Emotional Quality|Use Case                         |
|------------------|---------|-----------------|---------------------------------|
|`--surface-canvas`|`#FAFAF8`|Warm parchment   |Primary page background          |
|`--surface-base`  |`#F5F4F0`|Lifted warmth    |Cards, containers, panels        |
|`--surface-raised`|`#EFEDE8`|Pressed warmth   |Hover states, secondary elevation|
|`--surface-sunken`|`#F0EFEB`|Recessed warmth  |Input fields, code blocks        |

**Section background rhythm (standard page):**

```
Hero                →  --surface-canvas
Primary feature     →  --surface-base
Quote / editorial   →  --surface-canvas
Documentation       →  --surface-raised
Footer              →  #1A1A18
```

This rhythm creates subtle visual separation between sections without requiring dividers or borders. The eye reads the section changes as atmospheric, not structural.

**Why sections alternate backgrounds:** Full-width solid dividers between sections are mechanical and corporate. Background alternation creates flow. The transition is perceived as natural rather than segmented.

## 4.3 Typography Colors

|Token             |HEX      |WCAG vs Canvas |Use Case                         |
|------------------|---------|---------------|---------------------------------|
|`--text-primary`  |`#0F0F0E`|16.8:1 ✓✓      |Headings, primary body           |
|`--text-secondary`|`#3D3C38`|8.4:1 ✓✓       |Subheadings, emphasized secondary|
|`--text-tertiary` |`#6B6A65`|4.8:1 ✓        |Captions, metadata, labels       |
|`--text-muted`    |`#9B9A95`|3.1:1 ✓ (18px+)|Placeholders, supplemental       |
|`--text-ghost`    |`#C4C3BD`|1.9:1 ✗        |Decorative only, no information  |
|`--text-inverse`  |`#F5F4F0`|—              |All text on dark backgrounds     |

**`--text-ghost` is never informational.** If content cannot be read, it should not be present. `--text-ghost` is used only for visual rhythm purposes — divider characters, decorative typographic elements — where the content is supplemental and non-informational.

**Forbidden color combinations:**

- Any non-inverse text on dark section backgrounds
- `--text-muted` on any surface other than `--surface-canvas` (fails contrast)
- Colored text (blue, green, red) for standard body or heading content
- `--text-ghost` for any content a user might want to read

## 4.4 Accent Colors

|Token             |HEX      |Emotional Role    |Permitted Use                            |
|------------------|---------|------------------|-----------------------------------------|
|`--accent-brand`  |`#1A1A18`|Authority         |Primary buttons, active states, marks    |
|`--accent-warm`   |`#C4A882`|Editorial heritage|Pull quote borders, hover on select links|
|`--accent-cool`   |`#8B9EAD`|Calm precision    |Secondary UI, informational accents      |
|`--accent-success`|`#4A7C59`|Earthy completion |Success states exclusively               |
|`--accent-warning`|`#8B6914`|Measured caution  |Warning states exclusively               |
|`--accent-error`  |`#8B3A3A`|Contained urgency |Error states exclusively                 |

**The accents are desaturated by design.** Standard UI systems use saturated red/green/yellow for states. Endrare uses earth-toned equivalents that communicate the same semantic meaning without the visual aggression. A warm deep red still communicates error. A muted amber communicates warning. The emotional signal is preserved; the visual noise is reduced.

## 4.5 Border & Divider System

|Token             |HEX      |Use Case                         |
|------------------|---------|---------------------------------|
|`--border-subtle` |`#E8E7E2`|Default card borders, containers |
|`--border-default`|`#D4D3CD`|Input borders, table dividers    |
|`--border-strong` |`#B8B7B0`|Focused states, active selections|
|`--border-focus`  |`#0F0F0E`|Focus rings (accessibility)      |

**The divider principle:** Dividers communicate genuine topical transition. They should never be used for decoration, visual rhythm, or section framing. If a section has distinct background from its neighbor, a divider is redundant. Never stack dividers. Never use thick dividers (maximum `1px`).

## 4.6 Shadow & Elevation System

Endrare’s shadow system is built on consistent, warm-cast shadows — not colored, not hard-edged, not dramatic.

|Token          |Value                            |Use                  |Perceived Elevation|
|---------------|---------------------------------|---------------------|-------------------|
|`--elevation-0`|`none`                           |Flat surfaces, canvas|0 — on the page    |
|`--elevation-1`|`0 1px 2px rgba(15,15,14,0.04)`  |Hover lift feedback  |+0.5               |
|`--elevation-2`|`0 2px 8px rgba(15,15,14,0.06)`  |Cards at rest        |+1                 |
|`--elevation-3`|`0 4px 16px rgba(15,15,14,0.08)` |Cards on hover       |+2                 |
|`--elevation-4`|`0 8px 32px rgba(15,15,14,0.10)` |Dropdowns, modals    |+3                 |
|`--elevation-5`|`0 16px 48px rgba(15,15,14,0.12)`|Floating panels      |+4                 |

**Shadow philosophy:** Shadows in Endrare are cast by a soft, overhead light source. They spread gently with low opacity. The cumulative effect is a sense of physical depth that feels tangible without being theatrical. The opacity steps are deliberately small — each level lifts just enough to be perceptible without being dramatic.

**Forbidden shadow behaviors:**

- Colored shadows (no blue glow, no warm amber shadow, no brand-colored elevation)
- Hard drop shadows (`box-shadow: 4px 4px 0px #000000` — this is a retro aesthetic, not Endrare)
- Multiple shadow layers on the same element (creates visual noise)
- Shadows on text elements
- Inset shadows as a primary design pattern
- Shadow values beyond `--elevation-5` at any viewport

## 4.7 Glass & Translucency System

Glass morphism is used sparingly in Endrare — only in contextually justified situations where a surface must float above content while maintaining visual connection to it.

|Token              |Value                   |Use Case                   |
|-------------------|------------------------|---------------------------|
|`--surface-glass`  |`rgba(250,250,248,0.85)`|Sticky nav, floating panels|
|`--border-glass`   |`rgba(255,255,255,0.6)` |Glass panel borders        |
|`--overlay-light`  |`rgba(250,250,248,0.92)`|Modal backdrop (light)     |
|`--surface-overlay`|`rgba(15,15,14,0.40)`   |Modal backdrop (dark)      |

**Standard glass treatment:**

```css
background: var(--surface-glass);
backdrop-filter: blur(var(--blur-glass)) saturate(180%);
-webkit-backdrop-filter: blur(var(--blur-glass)) saturate(180%);
border: 1px solid var(--border-glass);
```

**Glass is permitted only for:**

- Sticky navigation (after scroll threshold)
- Command palettes and search overlays
- Floating tool panels
- Notification toasts

**Glass is forbidden for:**

- Section backgrounds
- Card grids
- Full-screen hero areas
- Decorative floating shapes
- Any surface where the background is already light (invisible glass is meaningless glass)

## 4.8 Atmospheric Gradients (Refined Policy)

The previous prohibition on all gradients was overly broad. Endrare permits gradients in three specific, controlled contexts. All other gradient usage remains forbidden.

**Permitted: Atmospheric background gradients**
Imperceptible gradients that add depth to backgrounds without appearing as gradients. These use the same hue family across a very narrow value range:

```css
background: linear-gradient(
  180deg,
  var(--surface-canvas) 0%,
  var(--surface-base) 100%
);
/* Transition: #FAFAF8 to #F5F4F0 — imperceptible to casual observation */
```

**Permitted: Glass diffusion gradients**
Used within glass panels to simulate depth and physical material:

```css
background: linear-gradient(
  135deg,
  rgba(255,255,255,0.15) 0%,
  rgba(255,255,255,0.05) 100%
);
```

**Permitted: Edge vignettes**
Used at the bottom of hero sections to create a natural fade into content:

```css
background: linear-gradient(
  180deg,
  transparent 60%,
  var(--surface-canvas) 100%
);
```

**Permitted: Image overlay gradients**
A soft dark-to-transparent overlay applied to a photographic hero, used to maintain text contrast over imagery. Acceptable strength is bounded:

```css
background: linear-gradient(
  180deg,
  rgba(15,15,14,0.0) 60%,
  rgba(15,15,14,0.35) 100%
);
```

**The strength test:** if a viewer would describe the surface as “using a gradient,” the gradient is too strong. Atmospheric and overlay gradients should read as ambient depth, not as styled treatment. If the gradient is visible in a thumbnail at 200px wide, it is too strong.

**Absolutely forbidden:**

- Multi-hue gradients (no purple-to-indigo, no blue-to-teal, no sunrise palettes)
- Saturated color gradients of any kind
- Gradient text (`background-clip: text` with color gradients)
- Gradient borders (pseudo-element hack with color gradients)
- Animated gradients as ambient background effects
- Conic or radial gradients as decorative elements
- Brand-color gradient overlays on imagery

## 4.9 Dark Mode Philosophy

Endrare’s primary experience is light mode. Dark mode, when implemented, is not a recolor — it is a re-evaluation of every surface relationship.

**Dark mode principles:**

- Primary background: `#111110` — not pure black, maintains warm undertone
- Elevated surfaces: `#1A1A18`, `#222220` — stacked in the same warm-neutral direction
- Text hierarchy: `#F0EFE9` (primary) → `#B8B7B0` (secondary) → `#6B6A65` (tertiary)
- All accent colors slightly desaturated to reduce glare on dark backgrounds
- Shadows become subtle light-blooms rather than dark drops
- Border values shift to `rgba(255,255,255,0.06)`, `rgba(255,255,255,0.10)`, `rgba(255,255,255,0.16)`

**The rule:** Perfect the light system first. Dark mode is a future investment that requires full re-evaluation, not a color inversion. Do not ship a dark mode until every component in light mode is production-perfect.

-----

# 5. TYPOGRAPHY SYSTEM

-----

## 5.1 Philosophy

Typography in Endrare is the primary design medium — not decoration, not brand flavor, not visual personality. It is the structural and emotional foundation on which everything else rests. When the typography is right, every other decision becomes easier. When it is wrong, no amount of visual polish can save the interface.

The typography system must accomplish five simultaneous goals:

1. Establish clear visual hierarchy across all content types
1. Enable comfortable extended reading without fatigue
1. Signal premium editorial quality through typeface choice and typographic craft
1. Scale gracefully from 375px mobile to 3440px ultrawide
1. Operate consistently when implemented by different contributors, including AI agents

## 5.2 Typeface Selection — Two Operational Modes

The Endrare feeling does not come from the typeface. It comes from the scale, the measure, the line height, the color, and the restraint. The system therefore runs in two operational modes, switchable at the token layer with no component-code changes. Practical Production Mode is the default. Premium Brand Mode is opt-in for future high-polish moments.

### 5.2.1 Practical Production Mode (default — what endrare.com ships)

Open-source, performance-friendly, no licensing risk, broad fallback support.

|Role                            |Typeface                            |Notes                                                     |
|--------------------------------|------------------------------------|----------------------------------------------------------|
|Display & headings              |**Geist** or **Inter**              |Variable font, geometric humanist sans, free under SIL OFL|
|Body & UI                       |**Inter** or **DM Sans**            |High legibility at 16–18px, broad fallback support, free  |
|Long-form reading (case studies)|**Newsreader** or **IBM Plex Sans** |Optional warmer face for editorial body content           |
|Brand wordmark                  |Mathematical sans treatment         |See 5.2.3 below                                           |
|Monospace                       |**JetBrains Mono** or **Geist Mono**|Code, data, technical labels                              |

CSS declaration:

```css
:root {
  --font-display: 'Geist', 'Inter', -apple-system, BlinkMacSystemFont,
                  'Segoe UI', sans-serif;
  --font-body:    'Inter', 'DM Sans', -apple-system, BlinkMacSystemFont,
                  'Segoe UI', sans-serif;
  --font-reading: 'Newsreader', 'IBM Plex Sans', Georgia, serif;
  --font-mono:    'JetBrains Mono', 'Geist Mono', ui-monospace,
                  'SF Mono', Menlo, Consolas, monospace;
}
```

Why this works in production: Geist and Inter are variable fonts with broad weight ranges, tabular numerals, and zero licensing cost. Each subsets to under 50KB Latin-only. The mathematical-sans character of these faces aligns with the Endrare wordmark treatment, so the body voice and the brand mark belong to the same family.

### 5.2.2 Premium Brand Mode (future / optional)

For a future high-polish brand campaign, a major launch, or a refined editorial direction, the system can opt into licensed editorial faces:

|Role   |Premium typeface                |Practical fallback|
|-------|--------------------------------|------------------|
|Display|Editorial New, Canela, GT Alpina|Geist Bold        |
|Body   |Söhne, Styrene A                |Inter             |
|Reading|GT Sectra, Tiempos Text         |Newsreader        |

The mode shift happens at the token layer only — no component code changes:

```css
:root {
  --font-display: 'Editorial New', 'Geist', sans-serif;
  --font-body:    'Söhne', 'Inter', sans-serif;
}
```

Premium Brand Mode is opt-in. Practical Production Mode is the correct production answer indefinitely. Endrare must never depend on paid fonts to feel premium — the system carries that weight on its own.

### 5.2.3 The Endrare Wordmark Treatment

The wordmark “Endrare” carries the mathematical-sans identity regardless of which mode is active.

Implementation options, in order of preference:

1. **Custom SVG wordmark.** Six glyphs drawn as monolinear geometric forms with mathematical proportions. Lives at `/public/wordmark.svg`. Recommended path — rendering-independent, scales perfectly, never depends on a font load.
1. **Typographic treatment.** Geist or Inter at weight 500, letter-spacing `-0.015em`, optional `font-feature-settings: "ss01"` for stylistic alternates. Used inline as `<span class="wordmark">Endrare</span>`.
1. **Math italic styling.** A free face like Newsreader Italic or Instrument Serif Italic at weight 400, for moments where a literary register is intentional (case study mastheads). Used sparingly, never as the primary wordmark.

Wordmark CSS:

```css
.wordmark {
  font-family: var(--font-display);
  font-weight: 500;
  letter-spacing: -0.015em;
  color: var(--text-primary);
}
```

The wordmark never animates, never sits on imagery, never appears with a shadow, glow, gradient, or outline.

### 5.2.4 Font Loading Strategy

Preload only the variable font files used above the fold:

```html
<link rel="preload" href="/fonts/Geist-Variable.woff2"
      as="font" type="font/woff2" crossorigin />
<link rel="preload" href="/fonts/Inter-Variable.woff2"
      as="font" type="font/woff2" crossorigin />
```

Preload limit: maximum two font files. Additional faces load via `font-display: swap` without preloading.

All `@font-face` declarations use `font-display: swap` with metric overrides matched to a system fallback, preventing layout shift on font swap:

```css
@font-face {
  font-family: 'Inter';
  src: url('/fonts/Inter-Variable.woff2') format('woff2-variations');
  font-weight: 100 900;
  font-display: swap;
  ascent-override: 90%;
  descent-override: 22%;
  line-gap-override: 0%;
  size-adjust: 100%;
}
```

Self-host all fonts. No Google Fonts CDN — the same-origin requirement is non-negotiable for performance and privacy.

### 5.2.5 Pairing Logic and Failure Modes

The display face and the body face must contrast on weight and texture without clashing. Geist (display) and Inter (body) work because they share geometric construction but differ in weight presence at large sizes. The result is a reading rhythm: the display heading establishes presence, the body holds attention through legibility.

What this pairing must never become:

- Display + display (two expressive fonts compete, hierarchy collapses)
- System font + system font (no character, no distinction)
- Two unrelated geometric sans fonts (cold, technical, no rhythm)
- A serif display paired with a serif body (no register shift, reads as a print-mimicking pastiche)

## 5.3 Type Scale

The scale follows a **1.25 Major Third modular ratio** with manual adjustment at the extremes.

|Token        |rem     |px  |Line Height|Letter Spacing|Primary Use             |
|-------------|--------|----|-----------|--------------|------------------------|
|`--text-xs`  |0.75rem |12px|1.5        |+0.02em       |Legal, fine print       |
|`--text-sm`  |0.875rem|14px|1.5        |+0.01em       |Captions, metadata      |
|`--text-base`|1rem    |16px|1.65       |0             |Body text (minimum)     |
|`--text-md`  |1.125rem|18px|1.72       |0             |Case study body         |
|`--text-lg`  |1.25rem |20px|1.5        |-0.01em       |Section labels, large UI|
|`--text-xl`  |1.5rem  |24px|1.4        |-0.02em       |Subheadings             |
|`--text-2xl` |1.875rem|30px|1.3        |-0.02em       |Section headings        |
|`--text-3xl` |2.25rem |36px|1.25       |-0.03em       |Page headings           |
|`--text-4xl` |3rem    |48px|1.15       |-0.03em       |Large headings          |
|`--text-5xl` |3.75rem |60px|1.1        |-0.04em       |Hero subheadings        |
|`--text-6xl` |4.5rem  |72px|1.05       |-0.04em       |Hero headings           |
|`--text-7xl` |6rem    |96px|1.0        |-0.05em       |Maximum display         |

**The negative letter-spacing rule is mandatory at display sizes.**
At sizes above 36px, zero letter spacing looks visually loose — the spaces between characters appear too large relative to the glyph widths. This is an optical phenomenon, not a design preference. Tracking tightens proportionally as size increases. Failure to apply this rule is immediately visible to trained eyes and creates the appearance of automated, unconsidered layout.

## 5.4 Fluid Typography (Responsive Scaling)

Large headings that jump harshly between breakpoints create jarring experiences. Endrare uses CSS `clamp()` for fluid type at display sizes:

```css
/* Hero heading — scales from 36px (mobile) to 72px (desktop) */
--text-hero: clamp(2.25rem, 5vw + 1rem, 4.5rem);

/* Section heading — scales from 24px to 36px */
--text-section: clamp(1.5rem, 3vw + 0.5rem, 2.25rem);

/* Large body — scales from 16px to 18px */
--text-reading: clamp(1rem, 1.2vw + 0.5rem, 1.125rem);
```

**Minimum font size is 16px for any body content on any device.** Below this threshold, iOS Safari zooms on input focus, and reading comfort deteriorates for users without optimal vision.

## 5.5 Font Weights

|Weight   |Value|Use Case                                     |
|---------|-----|---------------------------------------------|
|Light    |300  |Italic accents, editorial subheadings only   |
|Regular  |400  |All body text, all captions                  |
|Medium   |500  |UI labels, navigation, small interactive text|
|Semibold |600  |Card titles, list headings                   |
|Bold     |700  |Primary section headings                     |
|Extrabold|800  |Hero headings, maximum display               |

**Weight 900 is never used** unless the typeface has a purpose-designed Black weight. Synthesized heavy weights render poorly on screen, especially on Windows with ClearType.

## 5.6 Line Height Rules

Line height is the most important variable for reading comfort. Endrare uses contextually appropriate line heights that shift by content type:

|Context                  |Line Height|Rationale              |
|-------------------------|-----------|-----------------------|
|Display (72px+)          |1.0 – 1.05 |Monumental compression |
|Hero heading (48px+)     |1.1 – 1.15 |Cinematic but legible  |
|Section heading (30–48px)|1.2 – 1.35 |Structured and readable|
|Subheading (20–30px)     |1.35 – 1.5 |Balanced               |
|Large body / lead (18px) |1.72       |Optimized for long-form|
|Standard body (16px)     |1.65       |Comfortable reading    |
|Caption / label (14px)   |1.5        |Compact, scannable     |
|Code (14px)              |1.65       |Scan-readable structure|

**The 1.72 rule for case studies:** Body text in case study and documentation contexts uses a line height of 1.72. This is derived from classical book typography where the optimal reading line height for extended prose is between 1.65 and 1.75. Below 1.5 for body text, lines feel compressed and eye tracking becomes effortful.

## 5.7 Paragraph Measure (Line Length)

Optimal reading line length is 45–75 characters. The ideal measure is approximately 62–66 characters. Endrare enforces this through container constraints:

|Context           |Max Width|Rationale                           |
|------------------|---------|------------------------------------|
|Case study body   |`72ch`   |Long-form editorial reading         |
|Documentation body|`76ch`   |Slightly wider for technical content|
|Marketing body    |`68ch`   |Balanced readability                |
|Hero headline     |`18ch`   |Forces natural line breaks          |
|Subheading        |`38ch`   |Short, punchy support text          |
|Caption           |`52ch`   |Compact description                 |
|Pull quote        |`56ch`   |Wide enough for weight              |

**Never allow full-container paragraphs.** Prose spanning 1200px columns is unreadable. Users’ eyes cannot find the return point at the end of a long line, causing re-reading and cognitive fatigue. This is not a design preference — it is a reading physiology constraint.

## 5.8 Capitalization Governance

**Uppercase is permitted only for:**

- Navigation link labels (tracking: 0.08em, weight 500, max 12px)
- Section category eyebrow text (tracking: 0.1em, max 11px)
- Table column headers
- Small metadata labels: “PUBLISHED · MARCH 2025”
- Tag labels on case study cards

**Uppercase is forbidden for:**

- Headings (use title case or sentence case)
- Button labels (sentence case: “Get started”)
- Body text of any kind
- Error messages
- Any text above 14px
- Navigation labels above 12px

**The uppercase tracking rule:** Uppercase text without generous letter spacing reads as aggressive and blunt. All uppercase text in Endrare uses `letter-spacing: 0.06em` at minimum, `0.10em` for eyebrow labels. This is non-negotiable. Uppercase with zero tracking is a typographic error.

## 5.9 Hero Typography Specifications

The hero section is the single highest-impact typographic moment in the entire product. It must be precisely controlled.

- **Heading:** Display font, `--text-hero` (fluid), weight 700–800, `--text-primary`, letter-spacing -0.04em to -0.05em, line height 1.0–1.1
- **Heading word count:** 6–12 words. Headlines over 12 words lose display impact. Under 4 words may feel sparse.
- **Subheading:** Body font, `--text-lg` to `--text-xl`, weight 400, `--text-secondary`, line height 1.5–1.6, max-width 38ch
- **Subheading line count:** Maximum 2 lines. Three-line subheadings lose rhythm.
- **CTA label:** Body font, `--text-sm`, weight 500, sentence case
- **Spacing between heading and subheading:** `--size-5` (20px)
- **Spacing between subheading and CTA:** `--size-8` (32px)

**Hero typography must never include:**

- Gradient text effects
- Animated letter-by-letter reveals
- Multiple heading sizes (one primary headline only)
- Bold italic combinations at display sizes
- Text on image backgrounds without an overlay

## 5.10 Reading Typography (Long-Form)

For case studies, documentation, and blog content:

```css
/* Reading container */
.reading-body {
  font-family: var(--font-body);
  font-size: var(--cs-body-size);        /* 18px */
  line-height: var(--cs-body-leading);   /* 1.72 */
  color: var(--text-primary);
  max-width: var(--cs-content-max);      /* 72ch */
}

/* Paragraphs */
.reading-body p {
  margin-bottom: var(--size-6);          /* 24px between paragraphs */
}

/* First paragraph after heading */
.reading-body h2 + p,
.reading-body h3 + p {
  margin-top: var(--size-4);             /* 16px below heading */
}

/* Heading before paragraph (creates space above) */
.reading-body h2 {
  margin-top: var(--size-12);            /* 48px before new section */
}
```

## 5.11 Typographic Motion Rules

Text entrance animations follow specific rules. See Part 10 for motion system, but the typography-specific rules are:

- Reveals are line-by-line or paragraph-by-paragraph, never character-by-character
- The animation is a gentle upward translate + fade only — no scaling, no blurring, no rotation
- Hero headlines reveal first, subheadings stagger 120ms after
- Body paragraphs in reading contexts do not animate — they should simply be present
- Only UI headings and section headers use scroll-triggered reveals

-----

# 6. SPACING & LAYOUT SYSTEM

-----

## 6.1 The Psychology of Whitespace

Whitespace is not empty space. It is the primary medium through which Endrare communicates quality, calm, and confidence.

**Whitespace communicates value.** Products with generous space imply that their contents are worth the room. Cluttered environments signal urgency, compromise, and cheapness. A single product displayed in 80% empty space reads as precious. A hundred products crammed together read as discount.

**Whitespace directs attention.** The visual system naturally fixates on the object with the least competition. Isolate an element with space, and it becomes singular. Crowd it, and it becomes one of many.

**Whitespace reduces cognitive load.** The brain processes spatially separated information in parallel — it can handle multiple isolated elements as a composed scene. Dense, un-spaced content forces serial processing — the eye must work through each element sequentially, exhausting attention rapidly.

**Whitespace signals confidence.** A brand that is willing to leave space is a brand that does not need to sell through visual desperation. Urgency design (countdown timers, notification badges, discount banners, notification bars) signals scarcity anxiety. Generous space signals permanence and stability.

## 6.2 Base Spacing Unit

All spacing in Endrare derives from a **4px base unit**. All spacing values are multiples of 4. No arbitrary spacing values exist anywhere in the codebase.

**Spacing token reference:** See Appendix A for the complete `--size-*` token list (4px through 256px).

## 6.3 Section Spacing

Sections are the macro rhythm of the page. They must breathe at all viewports.

|Context                |Top                |Bottom             |
|-----------------------|-------------------|-------------------|
|Desktop hero           |160px (`--size-40`)|128px (`--size-32`)|
|Desktop content section|128px (`--size-32`)|128px (`--size-32`)|
|Desktop compact section|96px (`--size-24`) |96px (`--size-24`) |
|Tablet hero            |128px              |96px               |
|Tablet content section |96px               |96px               |
|Mobile hero            |80px (`--size-20`) |64px (`--size-16`) |
|Mobile content section |64px               |64px               |

**Minimum desktop section padding is 96px.** Sections that approach each other too closely merge perceptually and the structural hierarchy of the page collapses. This threshold is not aesthetic — it is perceptual.

## 6.4 Container System

|Container |Max Width|Horizontal Padding|
|----------|---------|------------------|
|Global    |`1280px` |`--size-8` (32px) |
|Content   |`1024px` |`--size-8` (32px) |
|Reading   |`768px`  |`--size-6` (24px) |
|Narrow    |`640px`  |`--size-4` (16px) |
|Full bleed|`100%`   |none              |

Container padding scales down on mobile: desktop `--size-8` → tablet `--size-6` → mobile `--size-4`.

## 6.5 Grid System

**12-column grid (desktop):**

- Gutter: `--size-6` (24px)
- Margin: `--size-8` (32px)
- Most content uses 8/12 or 10/12 centered columns
- Case study uses 3/12 sidebar + 7/12 content + 2/12 margin

**8-column grid (tablet):**

- Gutter: `--size-4` (16px)
- Case study: no sidebar, 8/8 content with max-width constraint

**4-column grid (mobile):**

- Gutter: `--size-4` (16px)
- All content single column

## 6.6 Vertical Rhythm

Consistent vertical rhythm creates the sensation of a designed, intentional layout rather than an assembled one.

|Relationship                 |Spacing           |
|-----------------------------|------------------|
|Heading → body paragraph     |`--size-4` (16px) |
|Paragraph → paragraph        |`--size-6` (24px) |
|Body paragraph → next heading|`--size-10` (40px)|
|Section eyebrow → heading    |`--size-3` (12px) |
|Heading → subheading         |`--size-3` (12px) |
|Subheading → body            |`--size-5` (20px) |
|Image → caption              |`--size-2` (8px)  |
|Caption → next element       |`--size-8` (32px) |

-----

# 7. LIGHTING & DEPTH SYSTEM

-----

## 7.1 Philosophy

Light in Endrare is invisible but felt. Users do not see the lighting system — they experience it as a sense of physical presence, material tangibility, and spatial coherence. The goal is not to simulate dramatic studio lighting but to create the ambient, diffuse illumination of a well-lit reading room: soft, warm, overhead, consistent.

## 7.2 Light Source Convention

Endrare uses a single, fixed, ambient light source positioned at the top-center of the viewport. This convention determines:

- Shadows fall downward and slightly spread (no directional casting)
- Elevated elements catch light on their upper surfaces
- Glass panels transmit and diffuse light rather than blocking it
- Dark surfaces absorb light — they are used only at the footer and for intentional weight

**Every depth decision should be consistent with this light model.** A card shadow that appears to the left or right of the card contradicts the ambient top-light convention and feels physically wrong.

## 7.3 Elevation Hierarchy

Surfaces in Endrare exist in a defined vertical stack. Each level of elevation carries semantic meaning:

|Level|Surfaces                     |Shadow Token                |Perceived Distance from Page|
|-----|-----------------------------|----------------------------|----------------------------|
|−1   |Input fields, sunken content |none (inset border)         |Below the page              |
|0    |Page canvas                  |`--elevation-0`             |On the page                 |
|+1   |Cards at rest                |`--elevation-2`             |1mm above page              |
|+2   |Cards on hover, active panels|`--elevation-3`             |2mm above page              |
|+3   |Dropdowns, tooltips          |`--elevation-4`             |4mm above page              |
|+4   |Modals, command palette      |`--elevation-5`             |8mm above page              |
|+5   |Toast notifications          |`--elevation-4` + translateY|Floating                    |

**Violating this hierarchy creates spatial confusion.** A modal with the same shadow as a card feels ungrounded. A card with modal-level shadow feels overwrought. The elevation token assignment must be architecturally consistent.

## 7.4 Depth Perception Techniques

Beyond shadows, Endrare creates perceived depth through:

**Scale and size:** Elements in the “foreground” are rendered at full size. Background elements (decorative assets, secondary content) can be scaled to ~90% to imply recession.

**Opacity:** Distant or less important content is expressed through the `--text-muted` and `--text-ghost` hierarchy — lighter values recede optically.

**Blur:** Background content behind modals and panels receives `blur(var(--blur-overlay))` — a subtle `8px` blur that physically separates the modal layer from the content layer.

**Surface tint:** Elevated surfaces in Endrare carry a fractionally different warm tone — the `--surface-base` and `--surface-raised` progression. This is not contrast-based hierarchy; it is tonal warmth-based hierarchy, visible to the eye as a shift in material quality.

## 7.5 Glass Layering System

When multiple glass surfaces stack — for example, a modal on top of a sticky nav on top of the page — the following rules govern when nesting is permitted and when the upper layer becomes opaque.

**The default:** avoid uncontrolled glass-on-glass layering. When in doubt, the upper layer is opaque (`--surface-canvas`). Glass is a material, not a styling reflex; not every elevated layer needs to be glass.

**Conditional nesting:** glass-on-glass is acceptable when all five conditions are met:

|Condition               |Required                                                       |
|------------------------|---------------------------------------------------------------|
|Contrast separation     |Lower glass at 85% opacity, upper glass at 92%+                |
|Depth hierarchy         |Upper layer has higher elevation shadow than lower             |
|Blur restraint          |Combined effective blur (lower + upper) ≤ 32px                 |
|Readability protection  |Text on upper glass maintains 4.5:1 contrast minimum           |
|Performance verification|Three or fewer total blur surfaces in viewport, 60fps confirmed|

**Stacking parameters:**

- Maximum two glass surfaces visible simultaneously at standard composition
- Lower glass uses less blur (nav: 20px) than upper surfaces
- Glass saturation decreases with stacking depth: `180%` for single layer, `140%` for stacked context
- Modal panels are not glass by default — they use opaque `--surface-canvas` with `--elevation-5`

## 7.6 Atmospheric Depth (Background Treatment)

Sections can use very subtle background gradients to create the impression of depth within the section — the sense that the section recedes slightly toward the bottom:

```css
/* Section with depth atmosphere */
.section-with-depth {
  background: linear-gradient(
    180deg,
    var(--surface-canvas) 0%,
    var(--surface-base) 100%
  );
}
```

This creates a `#FAFAF8` to `#F5F4F0` transition — imperceptible in thumbnail view but felt as atmosphere in actual use. This is the permitted form of gradient usage. The rule: if you can clearly see it is a gradient, it is too strong.

## 7.7 Edge Light Treatment

On premium surfaces (hero sections, large featured cards), a very subtle inner-border light effect can simulate the upper edge catching ambient light:

```css
/* Premium surface edge light */
.surface-premium {
  box-shadow:
    var(--elevation-2),
    inset 0 1px 0 rgba(255,255,255,0.8);
}
```

This is used sparingly — only on featured cards and modal headers where the material quality statement is intentional.

-----

# 8. ICONOGRAPHY SYSTEM

-----

## 8.1 Philosophy

Icons in Endrare are **functional ideograms** — they communicate meaning quickly and reduce cognitive parsing time for frequently repeated actions. They are not decorative objects, not personality injectors, and not brand illustrations.

The ideal Endrare icon is invisible to consciousness. The user registers its meaning without noticing the icon itself. This is the same standard Apple uses: the Maps app’s location pin does not draw attention to its design — it simply communicates “location” instantly.

## 8.2 Icon Style Standard

Endrare uses a single, consistent icon style across all surfaces. Mixing icon styles (outline + filled + illustrated in the same interface) creates visual incoherence.

**Standard specification:**

- **Style:** Outline (not filled, not duotone, not illustrated)
- **Stroke weight:** `1.5px` at `24px` viewport; `1.25px` at `20px`; `1px` at `16px`
- **Corner treatment:** Rounded joins and caps, `border-radius` equivalent of `2px` — not sharp corners, not excessively rounded
- **Geometric balance:** Icons must be optically centered, not mathematically centered
- **Grid:** All icons use a `24px × 24px` base grid with a `2px` safe zone (active area: `20px × 20px`)
- **Complexity:** Maximum 2 visual elements per icon. Complex icons communicate too slowly.

**Recommended icon library:** Phosphor Icons (consistent stroke, excellent variety, clean geometry, MIT license) or Lucide (Feather-based, excellent consistency). Use one library exclusively — never mix libraries.

## 8.3 Icon Sizing System

|Size Token   |px  |Use Case                         |
|-------------|----|---------------------------------|
|`--icon-xs`  |12px|Inline text icons, badges        |
|`--icon-sm`  |16px|Dense UI, table cells, tags      |
|`--icon-md`  |20px|Standard UI, buttons, inputs     |
|`--icon-base`|24px|Navigation, primary actions      |
|`--icon-lg`  |32px|Feature highlights, section icons|
|`--icon-xl`  |48px|Empty states, onboarding         |
|`--icon-hero`|64px|Hero feature moments (rare)      |

**Icons below `16px` must not carry semantic meaning without adjacent text.** At small sizes, icon recognition requires prior familiarity with the symbol — a guarantee Endrare cannot make for all users.

## 8.4 Icon Color Rules

|Context                |Color Token       |
|-----------------------|------------------|
|Default / informational|`--text-tertiary` |
|Active / selected      |`--text-primary`  |
|Hover                  |`--text-secondary`|
|Destructive action     |`--accent-error`  |
|Success state          |`--accent-success`|
|On dark surface        |`--text-inverse`  |
|Disabled               |`--text-ghost`    |

**Never use colored icons decoratively.** A feature icon in `--accent-warm` (golden) reads as “important” or “selected.” If it is neither, the color creates false semantic signal.

## 8.5 Icon + Label Relationships

When icons are paired with labels:

- **Gap:** `--size-2` (8px) between icon and label for inline combinations
- **Vertical alignment:** Icon baseline aligns with text baseline (use `vertical-align: middle` with `line-height: 1`)
- **Label required below `24px` icon size** in navigation contexts
- **Icon-only interactions** require `aria-label` and a tooltip on hover

## 8.6 Navigation Icon Behavior

Icons in navigation contexts follow specific motion rules:

- **Hover:** Icon color transitions to `--text-primary` in `--motion-fast` (200ms), `--motion-ease-exit`
- **Active:** Icon color instantly at `--text-primary`, label weight increases to 500
- **No scale on hover** — navigation icons do not grow or shrink on hover
- **No rotation on hover** (unless the icon is explicitly a spinner or directional indicator)

## 8.7 Icon Animation Restrictions

Icons animate only in three permitted contexts:

**Loading spinners:** Continuous rotation at `800ms` per revolution, linear easing, `--text-tertiary`

**State transitions:** When an icon changes meaning (e.g., play → pause), it fades out and fades in — never morphs. Duration: `150ms` each direction.

**Directional indicators (chevrons, arrows):** May rotate to indicate state change (closed → open). Duration: `200ms`, `--motion-ease`.

**Forbidden icon animations:**

- Bounce on hover
- Scale pulse (the “notification” pulse effect)
- Continuous wiggle or shake
- Path morphing between unrelated icons
- Wave or floating animations

## 8.8 Emotional Role of Icons

Icons in Endrare carry emotional tone through their formal qualities:

- Sharp icons communicate precision and technical capability
- Rounded icons communicate accessibility and approachability
- Complex icons communicate confusion (avoid)
- Consistent stroke weight across all icons communicates system coherence

A single oversized, overly decorative icon in an otherwise consistent set destroys the coherence of the entire set. The system matters more than any individual icon.

## 8.9 Forbidden Icon Styles

The following icon styles are permanently forbidden in Endrare:

- Illustrated or painted icons (emoji-adjacent styles)
- 3D icons or depth-rendered icons
- Multi-color icons for standard UI
- Icons with drop shadows
- Brand logos used as UI icons
- Pixel art or retro bitmap styles
- Icon fonts (use SVG exclusively — icon fonts have inconsistent rendering)
- Animated SVG icons as primary navigation elements

-----

# 9. IMAGE & MEDIA SYSTEM

-----

## 9.1 Photography Philosophy

Photography in Endrare communicates one thing above all else: **considered attention**. Every image must feel like it was selected — not found, not generated, not chosen from a stock library because it was the best available option.

The emotional register of Endrare photography:

- **Calm and still** — not action-heavy, not kinetic
- **Well-lit, soft** — ambient light, no harsh shadows
- **Warm-neutral palette** — no highly saturated color, no cool blue tones
- **Human and intelligent** — if people appear, they are doing something purposeful, not performing for the camera
- **Architectural and spatial** — spaces, interfaces, objects at rest

## 9.2 Photography Rules

**Content rules:**

- No stock photography with people smiling at laptops
- No staged “team collaboration” scenes
- No generic business handshakes
- No illustrated mascots
- No images that could appear in any product without context

**Technical rules:**

- Minimum resolution: 2× screen density (2400px wide for a 1200px display slot)
- All images with defined `width` and `height` attributes (prevents layout shift)
- All images use `loading="lazy"` except above-the-fold hero images
- All images have meaningful `alt` text
- WebP format required, JPEG/PNG fallback
- Maximum file size: 200KB for inline images, 400KB for hero images after optimization

## 9.3 Image Color Treatment

Endrare images are not used raw from the camera or stock source. They are treated to fit the system palette:

**Standard treatment:**

- Slight desaturation: reduce saturation 10–15%
- Slight warmth: add warm temperature +5–8 points
- Gentle contrast reduction at highlights: roll off highlights slightly
- Result: images feel like they exist in the same tonal world as the interface

**This is not heavy filtering.** The treatment should be invisible to users who are not comparing treated vs. untreated. Its purpose is cohesion, not style.

**What to avoid:**

- High contrast, heavy vignettes (dramatic but dated)
- Black-and-white images without strong editorial justification
- Oversaturated photography (colors that fight the neutral palette)
- Cool-tinted photography (creates a clinical feeling incompatible with Endrare’s warmth)

## 9.4 Cinematic Image Treatment (Editorial Use)

For case study hero images and featured editorial imagery, an additional treatment level is applied:

**Grain overlay:** A subtle film grain texture at 3–5% opacity over large images. This adds perceived depth and material quality — the same technique used in premium editorial photography and Apple product films.

```css
/* Grain overlay using pseudo-element */
.editorial-image {
  position: relative;
}
.editorial-image::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('/assets/grain.svg');
  background-size: 200px 200px;
  opacity: 0.03;
  border-radius: inherit;
  pointer-events: none;
}
```

The grain is imperceptible in direct viewing but creates a tactile quality that separates editorial images from UI screenshots.

## 9.5 Screenshot & UI Mockup Styling

Product screenshots and interface mockups follow specific styling rules:

**Standard screenshot container:**

- Background: `--surface-raised` (creates a slight contrast with the screenshot surface)
- Border: `1px solid --border-subtle`
- Border radius: `--radius-lg` (12px)
- Shadow: `--elevation-3`
- Padding: `--size-4` to `--size-6` around the screenshot

**Mockup device frames:**

- Use clean, line-based device frames — not photorealistic renders
- Device frames in `--text-ghost` or very light gray — they frame, not dominate
- No colored device frames
- No 3D perspective transforms on mockups (occasionally permitted in strict Rule-Breaking contexts — see Part 23)

**Screenshot quality requirements:**

- Always `2×` resolution
- Always cropped to show the most communicative portion
- Never show browser chrome unless browser context is relevant
- Cursor visible only if the cursor position is communicating something

## 9.6 Aspect Ratio System

|Context        |Ratio          |Use Case                                         |
|---------------|---------------|-------------------------------------------------|
|Case study hero|`16:9` or `3:2`|Primary featured image                           |
|Card thumbnail |`3:2`          |Case study card images                           |
|Feature image  |`4:3`          |Inline feature illustrations                     |
|Portrait       |`2:3`          |Person photography                               |
|Square         |`1:1`          |Avatars, icons, brand marks                      |
|Ultra-wide     |`21:9`         |Cinematic hero moments (controlled rule-breaking)|
|Full-bleed     |variable       |Background images, edge-to-edge                  |

All image slots define aspect ratios in CSS using `aspect-ratio` property — images never define their own layout dimensions.

## 9.7 Video Embedding

**Rules for video:**

- Autoplay is permitted only for muted, looping ambient background video in hero contexts
- Any video with audio requires explicit user play initiation
- Ambient background video: muted, loop, no controls, `object-fit: cover`
- Embedded video (tutorials, demos): full control UI, visible play button, thumbnail
- Video thumbnails: same quality standards as photography

**What autoplay background video must never be:**

- A promotional reel
- A feature demo running automatically
- A video with motion that competes with foreground text

If ambient video is used in a hero: the video content must be calming — slow, landscape-format, minimal motion. The purpose is atmosphere, not attention capture.

## 9.8 Image Spacing & Layout

|Placement                         |Spacing from adjacent text                                          |
|----------------------------------|--------------------------------------------------------------------|
|Inline image (within reading body)|`--size-8` above, `--size-3` above caption, `--size-8` below caption|
|Full-width editorial image        |`--size-10` above and below                                         |
|Side-by-side image pair           |`--size-6` between images, `--size-8` above and below the row       |
|Image grid                        |`--size-4` gap between images                                       |

## 9.9 Editorial Image Rhythm (Case Studies)

Images in case studies follow an editorial rhythm — they should punctuate the reading, not interrupt it.

- Full-width images appear no more than once every 600–800 words
- Inline images (within content width) appear naturally with text flow
- The pattern alternates: text → inline or wide image → text → full-width image → text
- Back-to-back images without connecting text are never placed unless intentional gallery
- Every image contributes to the narrative — it shows the thing being discussed

**The editorial image test:** Can the reader understand what the image is communicating without reading the caption? If not, the caption must make it clear. If neither the image nor the caption communicates clearly, replace the image.

-----

# PART THREE — INTERACTION & MOTION

-----

-----

# 10. MOTION DESIGN SYSTEM

-----

## 10.1 Motion Philosophy

Motion in Endrare exists to do one thing: **make the physical model of the interface comprehensible.** When elements enter, exit, expand, collapse, transition, or respond, motion explains to the user what has happened, what is happening, and what to expect next. Motion is orientation, not entertainment.

The Endrare motion standard: **cinematic restraint.** Hollywood films use motion to direct attention and create emotional resonance without the audience consciously registering the camera work. Endrare’s motion operates the same way. If a user finishes using the interface and remembers specific animations, the motion system has failed. If they remember only that the experience felt smooth and coherent, it has succeeded.

**The three functions of motion:**

1. **Spatial orientation** — Where did that element come from? Where did it go?
1. **State communication** — What just changed, and how?
1. **Attention guidance** — What should I look at next?

Motion that serves none of these three functions is decorative noise and must be removed.

## 10.2 Easing Curve System

Easing curves define the personality of motion. Endrare uses four curves, each for a specific motion type.

|Token             |Value                              |Character                 |Use                             |
|------------------|-----------------------------------|--------------------------|--------------------------------|
|`--easing-premium`|`cubic-bezier(0.16, 1, 0.3, 1)`    |Fast start, soft settle   |Entrances, positive actions     |
|`--easing-out`    |`cubic-bezier(0.0, 0.0, 0.2, 1)`   |Decelerating, resolving   |Exits, dismissals               |
|`--easing-in-out` |`cubic-bezier(0.4, 0, 0.2, 1)`     |Balanced, mechanical      |Looping, progress indicators    |
|`--easing-spring` |`cubic-bezier(0.34, 1.56, 0.64, 1)`|Slight overshoot, physical|Micro-interactions, button press|

**Why `--easing-premium` as the default?**
This curve — a fast initial acceleration followed by an extremely soft deceleration — mimics the behavior of physical objects with mass in a frictionless environment. Elements move quickly and then settle gently. This is the same easing iOS uses for sheet presentations, the same principle that makes Apple’s spring animations feel physically real. It communicates physical presence.

**Why linear is wrong for interactive UI:**
Linear motion has no acceleration or deceleration. For an interface element responding to user intent — a button, a dropdown, a modal — linear easing reads as mechanical and lifeless. Objects in the physical world do not move at constant velocity in response to a touch. For interactive UI transitions, linear is forbidden.

**Where linear is acceptable:**
Linear easing is correct, and sometimes the only correct choice, for continuous or mechanical motion where constant velocity carries semantic meaning:

- Determinate progress bars and progress rings (true progress is linear over time)
- Loading spinners and mechanical loaders
- Marquee or ticker-style ambient motion
- Continuous looped background animations
- Skeleton shimmer cycles
- Non-interactive ambient elements where deceleration would imply user intent that doesn’t exist

```css
/* Correct uses of linear */
.progress-bar     { transition: width 200ms linear; }
.loader-spinner   { animation: spin 800ms linear infinite; }
.skeleton-shimmer { animation: shimmer 1.5s linear infinite; }
```

For everything else — every hover, every click, every dropdown, every state transition driven by user intent — the four named easing curves apply.

**Asymmetric easing rule:** Entrance animations use `--easing-premium`. Exit animations use `--easing-out`. An element that enters and exits at the same easing curve feels symmetric and robotic. Asymmetric easing creates the sensation of intent: the interface is actively bringing things to you, and politely removing them.

## 10.3 Duration System

Duration scales with three factors: element size, semantic importance, and distance traveled.

|Token               |Duration   |Category                                      |
|--------------------|-----------|----------------------------------------------|
|`--motion-instant`  |100ms      |Immediate feedback (button active, focus ring)|
|`--motion-fast`     |200ms      |Hover state changes, color transitions        |
|`--motion-normal`   |300ms      |Dropdown opens, tab switches, tooltips        |
|`--motion-slow`     |500ms      |Card entrances, component reveals             |
|`--motion-cinematic`|700ms      |Page section reveals, modal entrances         |
|`--motion-ambient`  |1000ms     |Hero sequences, opening animation             |
|`--motion-extended` |1200–1500ms|Cinematic loading, feature showcases          |

**The 100ms threshold:** Any interactive response above 100ms begins to feel delayed. Button press feedback, focus ring appearance, and hover color changes must resolve within 100ms. Above this threshold, users interpret the interface as lagging.

**The 300ms standard:** Most UI state transitions — dropdowns, tabs, small panels — resolve in 300ms. This duration is long enough to be animated, short enough to feel snappy. It is the core operational rhythm of the interface.

**The 700ms ceiling for component animations:** Animations above 700ms test user patience unless they are (a) ambient/background, (b) one-time opening sequences, or (c) progressive loading experiences where the content itself needs time to appear. Standard component animations should never exceed 700ms.

## 10.4 Page Transitions

Between routes in single-page application contexts:

**Exit sequence:**

```css
/* Current page exits */
opacity: 1 → 0;
transform: translateY(0) → translateY(-8px);
duration: 200ms;
easing: --easing-out;
```

**Enter sequence:**

```css
/* New page enters */
opacity: 0 → 1;
transform: translateY(12px) → translateY(0);
duration: 400ms;
easing: --easing-premium;
delay: 100ms after exit completes;
```

**Total perceived transition: ~350ms.** Fast enough to feel immediate, slow enough to orient.

**Forbidden page transition patterns:**

- Horizontal slides (iOS app convention — wrong context)
- Scale transforms on full pages (disorienting)
- Instant page cuts in SPAs (jarring without transition)
- Transitions over 800ms total (tests patience)
- Zoom-in or zoom-out transitions

## 10.5 Scroll Animations (Reveals)

Scroll-triggered animations create the sense of the page composing itself as the user reads. They must be subtle, directional, and purposeful.

**Standard section reveal:**

```css
/* Initial state (applied before intersection) */
.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity var(--motion-cinematic) var(--easing-premium),
    transform var(--motion-cinematic) var(--easing-premium);
}

/* Revealed state (class added by IntersectionObserver) */
.reveal.is-revealed {
  opacity: 1;
  transform: translateY(0);
}
```

**IntersectionObserver threshold:** `0.15` — the reveal triggers when 15% of the element is in view. This creates a natural, slightly anticipatory reveal.

**Stagger system for grid elements:**

```css
.stagger-grid .card:nth-child(1) { transition-delay: 0ms; }
.stagger-grid .card:nth-child(2) { transition-delay: 80ms; }
.stagger-grid .card:nth-child(3) { transition-delay: 160ms; }
.stagger-grid .card:nth-child(4) { transition-delay: 240ms; }
/* 4th element onward: all use 240ms max delay */
.stagger-grid .card:nth-child(n+4) { transition-delay: 240ms; }
```

**What triggers scroll reveals:**

- Section headings
- Feature card grids
- Testimonials or quote blocks
- Image reveal moments
- CTA sections

**What never triggers scroll reveals:**

- Navigation
- Footer
- Elements already in viewport on page load
- Body paragraphs in reading contexts (reading content must simply exist — animating it during active reading is disruptive)
- Elements that have already been revealed (no second-trigger on scroll back up)

## 10.6 Hover Transitions

All hover transitions use specific asymmetric timing:

**Hover enter:** `200ms --easing-premium` — quick, responsive
**Hover exit:** `300ms --easing-out` — slightly slower, settling

This asymmetry creates the physical sensation of an element being light when lifted and having a small amount of mass when set back down.

**Standard hover transform values:**

- Card lift: `translateY(-2px)` — subtle, tangible
- Button lift: `translateY(-1px)` — micro, responsive
- Link underline: `width 0 → 100%` — elegant, confirming

**Maximum hover transform:** Never translate an element more than `4px` on hover. Greater movement feels jumpy and cheap.

## 10.7 Text Reveal Animations (Hero & Section)

For hero headings and key section headings:

```
Reveal unit: lines, not characters or words
Each line: opacity 0 → 1, translateY 16px → 0
Duration: 600ms per line
Stagger: 120ms between lines
Easing: --easing-premium
Subheading: starts 200ms after heading completes
CTA: starts 150ms after subheading
```

**Character-by-character animations are forbidden.** They read as theatrical and startup-template. They also perform poorly with screen readers and create accessibility issues. The line-level reveal is cinematic without being self-conscious.

## 10.8 Loading Transitions

**Skeleton loading:**

```css
.skeleton {
  background: linear-gradient(
    90deg,
    var(--state-skeleton-base) 25%,
    var(--state-skeleton-shine) 50%,
    var(--state-skeleton-base) 75%
  );
  background-size: 200% 100%;
  animation: skeleton-shimmer 1.5s ease-in-out infinite;
}

@keyframes skeleton-shimmer {
  from { background-position: 200% 0; }
  to { background-position: -200% 0; }
}
```

**Progress bar (page-level):**

- Height: 2px
- Color: `--text-primary`
- Position: top of viewport, `z-index: 1000`
- Animation: advances from 0% to ~85% over perceived load time, then completes to 100% on load

## 10.9 Accessibility — Reduced Motion

This is not optional. `prefers-reduced-motion: reduce` support is a constitutional requirement.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

For elements where some feedback is still needed (e.g., hover state changes should still occur, but without transform):

```css
@media (prefers-reduced-motion: reduce) {
  .card {
    /* Remove transform but keep color/opacity transitions at fast speed */
    transition: box-shadow 150ms, border-color 150ms, background-color 150ms;
  }
  .card:hover {
    transform: none; /* Remove the lift */
  }
}
```

## 10.10 Performance Rules for Motion

- **Default to:** `transform`, `opacity`, `filter` (with caution), `color`, `background-color`. These properties do not trigger layout reflow and animate on the compositor thread.
- **Avoid animating layout properties as a default.** Animating `width`, `height`, `top`, `left`, `right`, `bottom`, `margin`, or `padding` typically triggers layout reflow and destroys frame rate. However, layout-property animation is acceptable when the animated element is isolated, contained, and performance-tested. The five permitted patterns:

|Pattern                     |Property animated                   |Why it’s acceptable                                           |
|----------------------------|------------------------------------|--------------------------------------------------------------|
|Progress bar                |`width`                             |Isolated element, single property, no parent reflow           |
|Underline reveal            |`width` on `::after`                |Pseudo-element, no DOM impact                                 |
|Accordion / expandable panel|`max-height` with `overflow: hidden`|Contained panel, single-axis change                           |
|`clip-path` reveal          |`clip-path`                         |GPU-accelerated on modern browsers                            |
|Grid transition (FLIP)      |computed via transform              |Use the FLIP technique; never animate `grid-template` directly|

In each case, test on a mid-tier mobile device (Moto G Power equivalent) and confirm 60fps. If a frame drop appears, fall back to a `transform` + `opacity` solution.

- **`will-change: transform`** only on elements that animate repeatedly and continuously (carousels, progress bars). Not on hover states — it wastes GPU memory. Remove after the animation completes.
- **`backdrop-filter`** is GPU-intensive. Maximum 3 glass surfaces simultaneously at any viewport.
- **Limit stagger groups** to 6 items on desktop, 4 on mobile — stagger beyond these limits on slow devices creates a janky cascade.
- **IntersectionObserver** is preferred over scroll event listeners for all scroll-triggered animations — scroll listeners fire on every scroll tick and degrade performance.

-----

-----

# 11. INTERACTION PSYCHOLOGY SYSTEM

-----

## 11.1 Philosophy

Interaction is the moment the interface becomes real. Until the user touches something, the design is a static image. The moment they click, tap, hover, or scroll, the interface reveals its character. This is where premium experiences separate from adequate ones.

Premium interaction psychology has one governing principle: **every action should feel immediately acknowledged, physically coherent, and emotionally appropriate.** The user should never wonder if their input was received, never feel the interface resisting them, and never experience a response that feels tonally wrong for the context.

## 11.2 Perceived Responsiveness

**The 100ms rule:** Any action that takes more than 100ms to visually acknowledge is perceived as lagging. For all synchronous interactions (hover, click, focus), the visual response must begin within 100ms. For asynchronous operations (form submissions, data loading), the loading state must begin within 100ms of the action.

**Optimistic UI:** For operations that are likely to succeed (form submissions, toggles, quick saves), Endrare uses optimistic UI — the interface updates to the success state immediately, then reverts only if the operation fails. This creates the perception of an instantaneous, capable system.

**Latency masking:** When operations take 300ms–2 seconds, Endrare uses skeleton loading states rather than spinners. Skeletons show the shape of the content to come — they communicate “this is loading” while also communicating “this is what you’ll see.” Spinners communicate only “waiting.” Skeletons communicate expectation.

## 11.3 Click & Tap Response

**Button active state:**

```css
.btn:active {
  transform: translateY(1px) scale(0.98);
  transition: transform 60ms --easing-out;
}
```

This micro-compression simulates the physical sensation of pressing a button. The element moves toward the user (down and slightly smaller) as if responding to physical pressure. The duration is 60ms — below conscious perception but above zero, creating a tactile sensation.

**The physical pressure rule:** Active states must always move toward the user (downward, slightly smaller). Never away from the user. A button that moves up when pressed contradicts the physics of pressing and feels wrong even when users cannot articulate why.

## 11.4 Hover Psychology

Hover is the interface’s way of saying “I see you.” The hover response should be:

- **Immediate:** begin within 100ms of mouse enter
- **Proportional:** small elements respond with small changes; large elements respond with larger changes (but never exceeding the defined maximums)
- **Reversible:** hover exit feels like setting something down, not dropping it

**The hover invitation:** Elements that are interactive should provide a slightly elevated or brightened state on hover — inviting the user to commit. This is distinct from the active state (pressing) and the default state (resting). Three states for every interactive element: default → hover → active.

**Cursor changes:**

- Default interactive elements: `cursor: pointer`
- Draggable elements: `cursor: grab` / `cursor: grabbing`
- Text inputs: `cursor: text`
- Disabled elements: `cursor: not-allowed` (and reduced opacity)
- Resize handles: `cursor: ew-resize` / `cursor: ns-resize`

**Custom cursors:** Endrare does not use custom cursors as a design feature. System cursors are familiar and functional. Custom cursors create novelty at the expense of clarity and can break accessibility expectations.

## 11.5 Focus Guidance

Focus guidance is how the interface directs the user’s eye through a sequence. In Endrare, this is accomplished through:

**Size hierarchy:** The largest element in a section is the entry point. The eye moves from largest to smallest.

**Contrast hierarchy:** The highest-contrast element draws first. `--text-primary` on `--surface-canvas` draws before `--text-secondary` on the same surface.

**Motion as focus pointer:** When an element animates on entry, it briefly becomes the highest-salience element in the view. This is used deliberately — section headings animate before their supporting content, ensuring the user reads in the correct order.

**Whitespace isolation:** An element surrounded by more whitespace than its neighbors becomes focal. This is the most powerful focus-guidance tool in the Endrare system.

## 11.6 Scroll Resistance Philosophy

The experience of scrolling through Endrare should feel like reading a high-quality physical book or magazine — smooth, continuous, without surprise interruptions.

**Forbidden scroll behaviors:**

- Scroll hijacking (overriding native scroll momentum)
- Sticky sections that hold for extended periods (3+ seconds)
- Horizontal scroll sections without strong contextual justification
- Infinite scroll without clear end indicators
- Scroll-triggered animations that fire too early (before the element is actually in view)

**Permitted scroll behaviors:**

- Smooth `scroll-behavior: smooth` for anchor navigation
- Sticky navigation (the single justified exception to “no sticky”)
- Case study reading progress indicator
- Section-based scroll snapping (only for intentional gallery or step-based experiences)

## 11.7 Interaction Calmness

The emotional tone of interactions must match the brand identity: calm, assured, confident.

**What calm interaction looks like:**

- Responses that feel expected and consistent
- No surprising animations in peripheral vision
- No urgent visual feedback for non-urgent actions
- No blinking, pulsing, or attention-demand effects except for genuine alerts
- Error states that are clear but not alarming

**The anxiety test:** If any interaction makes the user feel hurried, uncertain, or alarmed without genuine reason — that interaction is wrong. Success animations should be quiet. Confirmation feedback should be brief. The interface should feel like a competent professional, not an excited assistant.

-----

-----

# 12. COMPLETE STATE SYSTEM

-----

## 12.1 State Philosophy

Every component in Endrare exists in one of several states at any given moment. Precise, consistent state design is what separates an interface that feels professionally engineered from one that feels assembled. States communicate system status, guide user action, provide feedback, and maintain emotional continuity.

## 12.2 Loading States

**Skeleton screens (preferred for content loading):**

- Shape mirrors the actual content layout (not generic gray bars)
- Text skeletons: same width variation as real text (varied widths — not all 100%)
- Image skeletons: exact aspect ratio of the image slot
- Shimmer direction: left to right (matches reading direction)
- Duration: `1.5s` cycle, infinite, `ease-in-out`

**Spinners (for action feedback):**

- Size: `20px` for inline, `40px` for full-section
- Stroke: 2px, `--text-tertiary`
- Never placed inside a button without also disabling the button
- Animation: 360° rotation, `800ms`, linear

**Progress bar (page navigation):**

- `2px` height, full width, top of viewport
- Color: `--text-primary`
- Advances naturalistically: 0% → 30% quickly, 30% → 85% slowly, 85% → 100% on completion
- Exits with `opacity: 0` fade over `400ms` after completion

**Inline loading (small components):**

- Replace content with a single `16px` spinner
- Never show partial content during loading — show skeleton or nothing until ready

## 12.3 Success States

Success states confirm that an action completed correctly. They must be:

- **Brief:** Auto-dismiss after 3–4 seconds unless the information is critical
- **Non-blocking:** The user can continue working
- **Quietly positive:** Color `--state-success-bg` (earthy green tint), never bright green

**Toast notification (success):**

```
[✓ icon]  Action completed successfully.
```

- Background: `--state-success-bg`
- Border: `--state-success-border`
- Text: `--state-success-text`
- Position: bottom-right, 24px from edge
- Entrance: `translateY(8px) → 0`, `opacity: 0 → 1`, `300ms --easing-premium`
- Auto-dismiss: 3500ms, `opacity: 1 → 0`, `200ms`

**Inline success (form fields after submission):**

- Input border transitions to `--state-success-border`
- Checkmark icon appears at right edge of input
- Message appears below: `--text-xs`, `--state-success-text`
- All transitions: `200ms --easing-out`

## 12.4 Warning States

Warnings inform users of conditions that require attention but are not errors. They do not block action.

- Color: `--state-warning-bg`, `--state-warning-text`, `--state-warning-border`
- Icon: caution triangle, `--icon-sm`
- Typography: `--text-sm`, weight 400
- Never use exclamation marks in warning messages (alarming tone)

## 12.5 Error States

Error states must be clear, specific, and constructive. They communicate what went wrong and guide recovery.

**Error message writing rules:**

- State what happened, not just that something failed
- Tell the user what to do next
- Never use technical language in user-facing errors
- Never use alarming language (“Critical error”, “Fatal failure”)
- Use calm, direct language (“We couldn’t save this. Check your connection and try again.”)

**Inline field error:**

```
[Input field with red border: --state-error-border]
[! icon] Email address isn't valid. Try format: name@domain.com
```

- Text: `--text-xs`, `--state-error-text`
- Appears below the field with `--size-2` gap
- Entrance: fade in only (no vertical travel — feels urgent, not decorative)
- Duration: `150ms --easing-out`

**Page-level error:**

- Full-section centered empty state treatment (see 12.9)
- Always provide a clear recovery action (retry button, navigation link)

## 12.6 Disabled States

Disabled elements communicate unavailability without removing the element from the visual hierarchy.

```css
.disabled {
  opacity: var(--state-disabled-opacity); /* 0.38 */
  pointer-events: none;
  cursor: not-allowed;
}
```

**0.38 opacity:** This WCAG-derived value is the maximum reduction that still allows disabled elements to be perceived without creating false contrast failures. Below 0.38, disabled elements become difficult to distinguish from their backgrounds — users cannot see what options are theoretically available.

**Disabled elements never animate on hover.** No hover state, no cursor change to pointer, no visual response. They must communicate that interaction is unavailable.

## 12.7 Empty States

Empty states are emotional moments in the interface — the space between “nothing yet” and “something exists.” They deserve careful design.

**Standard empty state:**

```
        [Icon: 48px, --text-ghost]

   [Heading: --text-xl, weight 600, --text-primary]

[Description: --text-base, --text-tertiary, max-width: 36ch, centered]

        [Primary CTA (if applicable)]
```

**Empty state writing:**

- Heading: describe what will be here (not “No items found” — “Your projects will appear here”)
- Description: explain how to get started or what value this section provides when populated
- CTA: first action the user should take

**Forbidden empty state patterns:**

- Sad/broken imagery (robots crying, broken links illustrations)
- Developer-speak (“null results returned”)
- Apologetic language (“Sorry, nothing to show yet”)
- Humor that might not land for all users

## 12.8 Optimistic UI States

For actions with high expected success rates, Endrare updates the UI immediately:

**Pattern:**

1. User takes action (clicks, toggles, submits)
1. UI immediately reflects the expected outcome
1. API call proceeds in background
1. On success: nothing changes (state already correct)
1. On failure: UI reverts with brief error toast

**Optimistic actions in Endrare:** Saves, favorites, toggles, simple form submissions to known-stable endpoints.

**Never optimistic:** Destructive actions (deletes, account changes), payment operations, actions with side effects the user cannot easily reverse.

## 12.9 Offline States

When network connectivity is lost:

- Toast notification: “You’re offline. Changes will save when you reconnect.” (informational, not alarming)
- Auto-dismiss: no — remains until connectivity restores, then changes to “Back online” with auto-dismiss
- Interface: continues to work for cached/local operations; disabled states for server-dependent actions
- No full-screen error overlays for offline state — the user is still using the product

-----

-----

# PART FOUR — COMPONENTS

-----

-----

# 13. COMPONENT RULEBOOK

-----

## 13.1 Component Philosophy

Every component in Endrare is an atom in a larger designed system. No component exists independently — each one exists as part of a coherent whole. This means:

- Components follow shared spacing, color, typography, and motion tokens
- Components behave consistently across all contexts
- No component is “special” enough to break the system
- New components are created rarely and deliberately — the goal is composition from existing components, not proliferation of new ones

## 13.2 Navbar

**Structure:**

```
[Logo]  ─────────────────────────────────  [Nav Links]  [CTA]
```

**Specifications:**

- Height: `var(--nav-height)` (64px desktop) / `var(--nav-height-mobile)` (56px mobile)
- Position: `fixed`, full-width, `z-index: 100`
- Background: transparent at `scrollY: 0`, transitions to `--nav-bg-scrolled` after 80px
- Scroll transition: `background 400ms --easing-premium`, `border-bottom 400ms`
- Border-bottom: none at 0, `1px solid --border-subtle` when scrolled
- Backdrop: `blur(20px) saturate(180%)` when scrolled

**Logo:**

- Left-aligned, `--size-6` from container edge
- Size: `--text-lg` if wordmark, or SVG mark at appropriate height
- Never animated on hover

**Nav links:**

- `--text-sm`, weight 500, uppercase, `letter-spacing: 0.06em`
- Color: `--nav-text` (`--text-secondary`)
- Hover: `--nav-text-hover` (`--text-primary`), underline `scaleX(0) → 1` from center, `200ms`
- Active page: `--text-primary`, persistent underline at full width
- Gap between links: `--size-8` (32px)

**CTA Button:**

- Primary button style (see 13.4)
- `margin-left: --size-6`

**Mobile behavior:**

- Hamburger: `24×24px`, three horizontal bars, `--text-primary`
- On open: cross animation, `200ms`
- Menu: full viewport overlay, `--surface-canvas` background
- Links: `--text-2xl` to `--text-3xl`, weight 600, staggered entrance
- Menu close: overlay fades, `300ms --easing-out`

## 13.3 Footer

**Structure:**

```
[Logo + Tagline]                    [Link col 1]  [Link col 2]
────────────────────────────────────────────────────────────
[© Copyright + Legal]                            [Socials]
```

**Specifications:**

- Background: `#1A1A18` (near-black)
- Padding: `--size-24` top, `--size-16` bottom
- Logo: `--text-inverse` version, or the wordmark at inverse opacity
- Tagline: `--text-base`, italic, `rgba(245,244,240,0.50)`
- Column headings: `--text-xs`, uppercase, `letter-spacing: 0.10em`, `rgba(245,244,240,0.35)`
- Links: `--text-sm`, `rgba(245,244,240,0.60)`, hover `rgba(245,244,240,1.0)`, `200ms`
- Divider: `1px solid rgba(255,255,255,0.08)`
- Copyright: `--text-xs`, `rgba(245,244,240,0.30)`

## 13.4 Buttons

**Button sizing:**

- Height: `44px` (standard), `36px` (compact), `52px` (large)
- Minimum width: `120px`
- Horizontal padding: `24px` (standard), `16px` (compact), `32px` (large)

**Primary button:**

```css
background: var(--btn-primary-bg);
color: var(--btn-primary-text);
border-radius: var(--btn-primary-radius);
font-family: var(--font-body);
font-size: var(--font-size-14);
font-weight: var(--weight-500);
letter-spacing: 0;
transition:
  background var(--motion-fast) var(--easing-out),
  transform var(--motion-normal) var(--easing-premium),
  box-shadow var(--motion-normal) var(--easing-out);
```

```css
/* Hover */
background: var(--btn-primary-bg-hover);
transform: translateY(-1px);
box-shadow: var(--btn-primary-shadow-hover);

/* Active */
transform: translateY(1px) scale(0.98);
box-shadow: none;
transition-duration: 60ms;

/* Focus */
outline: 2px solid var(--border-focus);
outline-offset: 3px;

/* Disabled */
opacity: 0.38;
pointer-events: none;
```

**Secondary button:** Same sizing, transparent background, `1px solid --btn-secondary-border`. Hover: `--surface-raised` background, `--border-strong` border.

**Ghost button:** No background, no border. Text color `--text-secondary`. Underline on hover. Use only for tertiary actions.

**Loading button state:**

```
[Spinner 16px] Loading...
```

Button disabled while loading, spinner replaces or prepends label, width maintained to prevent layout shift.

**Button label rules:**

- Sentence case exclusively (“Get started”, not “GET STARTED”)
- 2–4 words preferred
- Verb-forward (“Create project”, “View case study”)
- Never marketing language in button labels (“Revolutionize your workflow →”)

## 13.5 Cards

**Standard card:**

```css
background: var(--card-bg);
border: 1px solid var(--card-border);
border-radius: var(--card-radius);
padding: var(--card-padding);
box-shadow: var(--card-shadow);
transition:
  transform var(--motion-normal) var(--easing-premium),
  box-shadow var(--motion-normal) var(--easing-out),
  border-color var(--motion-fast) var(--easing-out);
```

```css
/* Hover */
transform: translateY(-2px);
box-shadow: var(--card-shadow-hover);
border-color: var(--card-border-hover);
```

**Card internal anatomy:**

```
[Optional: image or icon header]
[Title: --text-xl, display font, weight 700]
[Description: --text-base, --text-secondary, max-width: 52ch]
[Footer: tags, date, CTA link]
```

Spacing between anatomy elements: `--size-3` between tightly related elements, `--size-5` between distinct sections.

## 13.6 Glass Panels

```css
.glass-panel {
  background: var(--surface-glass);
  backdrop-filter: blur(var(--blur-glass)) saturate(180%);
  -webkit-backdrop-filter: blur(var(--blur-glass)) saturate(180%);
  border: 1px solid var(--border-glass);
  border-radius: var(--radius-lg);
  box-shadow:
    var(--elevation-4),
    inset 0 1px 0 rgba(255,255,255,0.6);
}
```

Use only for: sticky nav, command palette, floating tool panels, notification toasts.

## 13.7 Modals

**Overlay:**

```css
background: var(--surface-overlay);
backdrop-filter: blur(var(--blur-overlay));
position: fixed; inset: 0; z-index: 200;
```

**Panel:**

```css
background: var(--surface-canvas);
border-radius: var(--radius-modal);
box-shadow: var(--elevation-5);
max-width: 560px; width: 100%;
padding: var(--size-10);
```

**Entrance animation:**

```css
transform: scale(0.96) translateY(8px);
opacity: 0;
→
transform: scale(1) translateY(0);
opacity: 1;
duration: 300ms --easing-premium;
```

**Accessibility requirements:**

- `role="dialog"`, `aria-modal="true"`, `aria-labelledby` referencing modal heading
- Focus trapped within modal on open
- Focus returns to trigger element on close
- Escape key closes
- Overlay click closes
- Screen reader announcement on open

## 13.8 Form Inputs

**Input field:**

```css
height: var(--input-height); /* 44px */
background: var(--input-bg);
border: 1px solid var(--input-border);
border-radius: var(--input-radius);
padding: 0 var(--size-4);
font-family: var(--font-body);
font-size: var(--font-size-16);
color: var(--input-text);
transition: border-color var(--motion-fast), box-shadow var(--motion-fast);
```

```css
/* Focus */
border-color: var(--input-border-focus);
box-shadow: 0 0 0 3px var(--state-focus-ring);
outline: none;
```

**Label:** `--text-sm`, weight 500, `--text-secondary`, `margin-bottom: --size-2`

**Helper text:** `--text-xs`, `--text-tertiary`, below field with `--size-2` gap

**Error state:**

```css
border-color: var(--state-error-border);
box-shadow: 0 0 0 3px rgba(139,58,58,0.10);
```

**Character count:** Right-aligned below field, `--text-xs`, `--text-ghost`, transitions to `--text-muted` at 80%, `--accent-error` at 100%.

## 13.9 Code Blocks

```css
.code-block {
  background: var(--surface-sunken);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: var(--size-6);
  font-family: var(--font-mono);
  font-size: var(--font-size-14);
  line-height: var(--leading-loose);
  overflow-x: auto;
  position: relative;
}
```

**Syntax highlighting (warm, editorial theme):**

- Keywords: `#8B6914` (warm amber)
- Strings: `#4A7C59` (earthy green)
- Comments: `--text-ghost`, italic
- Functions / identifiers: `--text-primary`
- Numbers / constants: `--accent-cool`
- Operators: `--text-secondary`

**Copy button:**

```
[Appears on hover, top-right corner]
Button: --text-xs "Copy" → "Copied ✓" after action
Background: --surface-raised
Border-radius: --radius-md
```

-----

-----

# 14. CASE STUDY SYSTEM

-----

## 14.1 Philosophy

Case studies in Endrare are not project summaries or portfolio pieces in the conventional sense. They are **cinematic essays** — the kind of deeply considered, visually precise narrative that a principal designer might create to document not just what was built, but how it was thought about.

The reading experience must feel like:

- An Apple product story (“Designed by Apple”)
- A premium design journal article
- A well-edited long-form digital essay
- A focused, quiet reading room

The case study page is the single place in Endrare where Endrare’s own design capabilities are demonstrated through the medium of describing a past project. The form must match the content.

## 14.2 Page Structure

```
┌──────────────────────────────────────────────────────────┐
│ HEADER AREA                                              │
│ [Category eyebrow]                                       │
│ [Case study title — display font, large]                 │
│ [Subtitle / summary — body font, secondary color]       │
│ [Metadata: role · client · year]                         │
│ [Hero image — full container width, 16:9 or 3:2]        │
├──────────────────────┬───────────────────────────────────┤
│ SIDEBAR (sticky)     │ CONTENT AREA                      │
│ 240px                │ max-width: 68ch                   │
│                      │                                   │
│ [Nav sections]       │ [Chapter headings]                │
│ · Introduction       │ [Body paragraphs]                 │
│ · Discovery          │ [Pull quotes]                     │
│ · Design Process     │ [Inline images]                   │
│ · Outcome            │ [Full-width editorial images]     │
│ · Reflection         │                                   │
│                      │ [Progress bar: 2px top of page]  │
├──────────────────────┴───────────────────────────────────┤
│ FOOTER AREA                                              │
│ [Next project card]                                      │
│ [Related case studies grid]                              │
└──────────────────────────────────────────────────────────┘
```

## 14.3 Header Specifications

|Element                     |Specification                                                                                       |
|----------------------------|----------------------------------------------------------------------------------------------------|
|Category eyebrow            |Uppercase, `--text-xs`, `letter-spacing: 0.10em`, `--text-tertiary`                                 |
|Eyebrow → title gap         |`--size-3` (12px)                                                                                   |
|Title                       |Display font, `clamp(2.25rem, 4vw + 1rem, 3.75rem)`, weight 700, `--text-primary`, `max-width: 18ch`|
|Title letter-spacing        |`-0.03em` to `-0.04em`                                                                              |
|Title → subtitle gap        |`--size-5` (20px)                                                                                   |
|Subtitle                    |Body font, `--text-lg`, weight 400, `--text-secondary`, `max-width: 52ch`, line-height 1.55         |
|Subtitle → metadata gap     |`--size-6` (24px)                                                                                   |
|Metadata                    |`--text-sm`, `--text-tertiary`, dot-separated items                                                 |
|Metadata → hero image gap   |`--size-10` (40px)                                                                                  |
|Hero image                  |Full container width, `border-radius: --radius-card`, `aspect-ratio: 16/9`                          |
|Hero image → sidebar+content|`--size-16` (64px)                                                                                  |

## 14.4 Sidebar Navigation

**Visual specification:**

```css
.cs-sidebar {
  width: var(--cs-sidebar-width); /* 240px */
  position: sticky;
  top: calc(var(--nav-height) + var(--size-8));
  align-self: flex-start;
  padding-right: var(--size-10);
}
```

**Section label:**

- Text: “CONTENTS” or “IN THIS CASE STUDY”
- Style: `--text-xs`, uppercase, `letter-spacing: 0.10em`, `--text-ghost`
- `margin-bottom: --size-4`

**Nav items:**

```css
.cs-nav-item {
  display: block;
  padding: var(--size-2) var(--size-4);
  font-size: var(--font-size-14);
  color: var(--cs-nav-text); /* --text-tertiary */
  border-left: 2px solid transparent;
  transition:
    color var(--motion-fast) var(--easing-out),
    border-color var(--motion-fast) var(--easing-out);
}

.cs-nav-item.active {
  color: var(--cs-nav-text-active); /* --text-primary */
  font-weight: var(--weight-500);
  border-left-color: var(--cs-nav-border-active);
}
```

**Active detection:** IntersectionObserver on each section heading. When a heading enters the viewport from the top, its corresponding nav item becomes active. Smooth scroll to section on nav click.

**Mobile behavior:** The sidebar becomes a progress bar at the top of the content area. A floating “Contents” button bottom-right opens a slide-up sheet with the nav items.

## 14.5 Content Area Typography

```css
.cs-content {
  max-width: var(--cs-content-max); /* 72ch */
  font-family: var(--font-body);
  font-size: var(--cs-body-size);    /* 18px */
  line-height: var(--cs-body-leading); /* 1.72 */
  color: var(--text-primary);
}

.cs-content p { margin-bottom: var(--size-6); }
.cs-content h2 { margin-top: var(--size-12); }
.cs-content h3 { margin-top: var(--size-8); }
.cs-content img { margin: var(--size-8) 0; border-radius: var(--radius-md); }
```

**Chapter headings (H2):**

- Display font, `--text-2xl`, weight 700, `--text-primary`
- Marks the beginning of a major narrative section

**Section headings (H3):**

- Body font, `--text-xl`, weight 600, `--text-primary`
- Marks a subdivision within a chapter

## 14.6 Pull Quotes

```css
.pull-quote {
  font-family: var(--font-display);
  font-style: italic;
  font-size: var(--font-size-24);
  line-height: 1.4;
  color: var(--text-secondary);
  border-left: 3px solid var(--cs-pull-quote-border); /* --accent-warm */
  padding-left: var(--size-8);
  margin: var(--size-12) 0;
  max-width: 56ch;
}
```

Pull quotes are editorial pauses. They extract the single most resonant or surprising insight from the surrounding text and present it as a standalone statement. They give the reader permission to pause, and they reward the scanner who is looking for signal before committing to full reading.

**Pull quote content rules:**

- Extract real content from the text — never write separate pull quote content
- Maximum 2 pull quotes per 1000 words
- Pull quotes should be the most surprising or most insightful statement in the section
- Never use a pull quote for data or statistics (those belong in the body with context)

-----

-----

# 15. DATA VISUALIZATION SYSTEM

-----

## 15.1 Philosophy

Data in Endrare must feel calm. Numbers, charts, and metrics should communicate clearly and instantly — the user should understand the data without effort. This sounds obvious but is routinely violated: most data visualizations are built to impress rather than to communicate.

The Endrare data philosophy: **data is text that happens to have a visual shorthand.** Every visualization should be reducible to a sentence. If a chart cannot be understood in 3 seconds, it is too complex.

## 15.2 Chart System

**Color palette for charts:**
Charts in Endrare use a curated, desaturated palette from the system:

```css
--chart-1: var(--color-neutral-800);  /* Primary series */
--chart-2: var(--color-warm-400);     /* Secondary series */
--chart-3: var(--color-cool-400);     /* Tertiary series */
--chart-4: var(--color-neutral-400);  /* Quaternary series */
--chart-5: var(--color-warm-200);     /* Quinary series */
```

Never more than 5 data series in a single chart. If the data requires more, break it into multiple focused charts.

**Chart visual rules:**

- No 3D charts — ever. 3D charts distort data perception and add visual weight without informational value
- No pie charts for more than 3 data segments (use a bar chart)
- Gridlines: `--border-subtle`, 1px, horizontal only
- Axis lines: `--border-default`, 1px
- Axis labels: `--font-mono`, `--text-sm`, `--text-tertiary`
- Data labels on bars/points: `--text-sm`, `--text-primary`, weight 500
- Legend: below the chart, left-aligned, `--text-sm`, `--text-secondary`

**Chart interaction:**

- Hover shows tooltip with precise value
- Tooltip: glass panel style, `--elevation-4`, `--text-sm`, max-width 200px
- Active series: full opacity; inactive series: `0.3` opacity
- Transition on hover: `200ms --easing-out`

## 15.3 Table System

**Standard data table:**

```css
table {
  width: 100%;
  border-collapse: collapse;
  font-family: var(--font-body);
  font-size: var(--font-size-14);
}

th {
  text-align: left;
  font-weight: var(--weight-500);
  color: var(--text-secondary);
  padding: var(--size-3) var(--size-4);
  border-bottom: 2px solid var(--border-default);
  font-variant-numeric: tabular-nums;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-size: var(--font-size-12);
}

td {
  padding: var(--size-3) var(--size-4);
  color: var(--text-primary);
  border-bottom: 1px solid var(--border-subtle);
  font-variant-numeric: tabular-nums;
}

tr:hover td {
  background: var(--surface-raised);
}
```

**Tabular numbers:** All numeric data in tables must use `font-variant-numeric: tabular-nums` — this ensures numbers align on decimal points and are visually scannable in columns.

## 15.4 KPI Cards

```
┌─────────────────────┐
│  [Metric label]     │
│  [Large number]     │
│  [△ Change +12%]   │
│  [Sparkline]        │
└─────────────────────┘
```

- Card: standard card component
- Label: `--text-sm`, uppercase, `letter-spacing: 0.08em`, `--text-tertiary`
- Number: `--text-4xl`, `--font-mono`, weight 700, `--text-primary`, `font-variant-numeric: tabular-nums`
- Change: `--text-sm`, weight 500; positive: `--accent-success`; negative: `--accent-error`; neutral: `--text-tertiary`
- Sparkline: 40px height, 80px width, 1px stroke, `--accent-cool`

## 15.5 Dashboard Philosophy

Dashboards are focused tools. They should answer specific questions quickly, not showcase all available data.

**Dashboard principles:**

- Hierarchy: most important metric largest and topmost
- Negative space: dashboards need breathing room — do not fill every available pixel
- Consistent rhythm: all cards align to a grid; no orphaned elements
- Contextual time selector: a single, clear time range control affects all charts
- Loading states: skeleton screens for all chart areas — never empty white boxes

**Empty analytics states:**
When data is genuinely unavailable (new account, no activity):

- Do not show empty chart frames with no data
- Show the skeleton of what will appear with a “connect your data” or “check back after [timeframe]” message
- Keep the emotional tone of the empty state consistent with the product’s calm register

-----

-----

-----

# PART FIVE — CONTENT

-----

-----

# 16. CONTENT VOICE & WRITING SYSTEM

The voice of Endrare is engineered the same way the layout is. Sentences have measured length. Words have function. Decoration in language is the same failure mode as decoration in pixels.

## 16.1 Voice Attributes — Operating Definition

Endrare writes with four fixed attributes. These are testable, not aspirational.

|Attribute                     |Rule                                                                                        |
|------------------------------|--------------------------------------------------------------------------------------------|
|Direct                        |Subject leads. Verb early. One idea per sentence.                                           |
|Specific                      |Numbers over adjectives. Names over descriptions.                                           |
|Unhurried                     |Sentence ends when the thought ends. No filler.                                             |
|First-person plural, sparingly|“We” appears only when the team has taken a position. Default to second person or no person.|

What Endrare does not sound like: poetic, motivational, conversational, self-deprecating, ironic, sales-warm, AI-assistant cheerful.

## 16.2 Headline Construction

A headline states one true thing about the section below it. It does not promise transformation, ask the reader a question, or rely on a sub-line to make sense.

Construction rules:

- 4 to 12 words
- Sentence case
- No terminal punctuation
- No emoji, no em-dashes mid-headline, no exclamation
- One idea per headline — if two ideas, split into headline + subhead

Approved patterns:

- Statement: `A workspace for considered work.`
- Concrete claim: `Read each case study in eight minutes.`
- Named object: `The Endrare reading column.`
- Plain definition: `Case studies, written like essays.`

Forbidden patterns:

- Questions (“Want to ship faster?”)
- Superlatives (“The most powerful…”)
- AI tropes (“Supercharge”, “Unlock”, “Reimagine”)
- Vague invitations (“Discover the difference”)
- Metaphor stacks (“Where craft meets velocity”)

## 16.3 Subheading Rules

A subheading explains the headline. It does not restate it.

- 1 to 2 sentences, max 38 words
- Body font, weight 400
- Ends in a period
- Never ends in an ellipsis, em-dash, or question mark
- Color: `--text-secondary`

## 16.4 Body Paragraph Rhythm

|Metric                              |Target                |
|------------------------------------|----------------------|
|Average sentence length             |12 to 22 words        |
|Sentences per paragraph             |2 to 5                |
|Paragraph length                    |40 to 90 words        |
|Reading grade level (Flesch–Kincaid)|8 to 10               |
|Passive voice                       |Under 10% of sentences|

A paragraph break signals a new thought, not a visual pause. If two adjacent paragraphs cover the same idea, merge them. If a paragraph exceeds 90 words, find the breakpoint.

## 16.5 CTA Writing

CTAs are verbs the user is willing to perform. They are not marketing copy.

Approved:

- `Read the case study`
- `View the project`
- `Get in touch`
- `Start a project`
- `See the system`

Forbidden:

- `Get started for free →` (the arrow is decoration; “for free” is a sales tactic)
- `Unlock your potential` (motivational, vague)
- `Let's chat!` (false intimacy)
- `Click here` (no object)
- Anything with three trailing dots

CTAs: 2 to 4 words, sentence case, no terminal punctuation, no arrow glyphs in the label itself.

## 16.6 Punctuation Discipline

|Mark         |Use                                                                       |
|-------------|--------------------------------------------------------------------------|
|Period       |Used. Every full sentence ends with one, including UI microcopy.          |
|Comma        |Two commas per sentence is the practical ceiling.                         |
|Em dash      |Used to interrupt — like this — never for emphasis. Max one per paragraph.|
|Semicolon    |Permitted in long-form; avoided in UI.                                    |
|Exclamation  |Forbidden in UI copy. Permitted in case study quotes.                     |
|Question mark|For actual questions. Never rhetorical.                                   |
|Ampersand    |Avoided in body. Permitted in compact metadata labels.                    |
|Ellipsis     |Avoided. Unfinished sentences are a defect.                               |

## 16.7 Documentation Tone

Documentation is a colder register than marketing. It is procedural, second-person, present-tense.

Pattern:

```
To do X, use Y.

Example:

[code block]

Result: [what happens].

Constraints: [what to avoid].
```

Documentation does not use the word “simply.” It does not say “just.” It does not apologize for complexity. It assumes the reader is capable.

## 16.8 Case Study Tone

Case study writing is the only register where Endrare allows narrative warmth. It is first-person plural (“we decided”), past-tense, and reflective without being precious.

Structure expectations:

- Open with the problem, not the brand
- State the constraint that shaped the decision
- Show one decision per section, not five
- Pull quotes extract surprising tensions, not summaries
- Close with what the team would do differently next time

What case study writing does not do: declare success, list metrics out of context, use the word “journey,” refer to the team’s process as “creative.”

## 16.9 Forbidden Words and Phrases

These are auto-rejected in any Endrare-published surface:

- “Revolutionize”, “supercharge”, “unlock”, “reimagine”, “elevate”
- “Game-changing”, “next-level”, “world-class”, “best-in-class”
- “Seamless” (overused; specify what’s seamless)
- “Empower” (assumes hierarchy)
- “Cutting-edge”, “state-of-the-art”
- “Solutions” (as a generic noun)
- “Journey” (as a customer experience metaphor)
- “Reach out” (use “get in touch” or “email us”)
- Three-dot ellipses as a stylistic device
- Capitalized “Design” / “Product” / “Engineering” mid-sentence

## 16.10 Microcopy Inventory

A standardized library prevents drift across pages. Maintain this as `content/microcopy.ts` in the repo.

|Surface             |Approved string                                                           |
|--------------------|--------------------------------------------------------------------------|
|Form success        |`Saved.`                                                                  |
|Form error (generic)|`Something didn't go through. Try again, or email us.`                    |
|Empty list          |`Nothing here yet.`                                                       |
|Loading             |`Loading.` (period included)                                              |
|404 heading         |`The page isn't here.`                                                    |
|404 body            |`It may have moved, or it may never have existed. Return to the homepage.`|
|500 heading         |`The server didn't respond.`                                              |
|Maintenance heading |`Briefly offline.`                                                        |
|Cookie notice       |`This site uses minimal analytics. No tracking, no third parties.`        |
|Newsletter confirm  |`Thanks. Check your email to confirm.`                                    |

-----

-----

-----

# PART SIX — ENGINEERING

-----

-----

# 17. DEVELOPMENT ARCHITECTURE

This section governs how the system is implemented in code. It exists so that the design system survives team changes, framework migrations, and AI-generated code contributions.

## 17.1 Stack Defaults

The reference stack for Endrare:

|Layer            |Tool                                               |
|-----------------|---------------------------------------------------|
|Framework        |Next.js 14+ (App Router)                           |
|Styling          |Tailwind CSS + CSS custom properties               |
|Type system      |TypeScript (strict)                                |
|Component library|Local — no external UI kit                         |
|Icons            |Lucide or Phosphor (one, not both)                 |
|Forms            |React Hook Form + Zod validation                   |
|Content          |MDX for case studies; structured data for metadata |
|Deployment       |Vercel                                             |
|Analytics        |Plausible or self-hosted Umami (privacy-respecting)|

Substitutions are permitted as long as the token system and component API are preserved.

## 17.2 Folder Structure

```
endrare/
├── app/                           # Next.js App Router routes
│   ├── layout.tsx
│   ├── page.tsx                   # Home
│   ├── work/
│   │   ├── page.tsx               # Index of case studies
│   │   └── [slug]/
│   │       └── page.tsx           # Individual case study
│   ├── about/
│   ├── contact/
│   ├── api/
│   ├── not-found.tsx              # 404
│   ├── error.tsx                  # 500 / error boundary
│   ├── loading.tsx                # Route-level loading
│   ├── robots.ts
│   ├── sitemap.ts
│   └── opengraph-image.tsx        # Dynamic OG image
├── components/
│   ├── primitives/                # Button, Input, Card, Modal, etc.
│   ├── layout/                    # Nav, Footer, Container, Grid
│   ├── sections/                  # Hero, FeatureBlock, QuoteBlock
│   ├── case-study/                # Sidebar, ProgressBar, PullQuote
│   └── icons/                     # Wrapped icon components
├── content/
│   ├── case-studies/              # MDX files
│   └── microcopy.ts               # Centralized string library
├── lib/
│   ├── utils.ts
│   ├── seo.ts                     # Metadata helpers
│   └── analytics.ts
├── styles/
│   ├── tokens.css                 # All design tokens
│   ├── typography.css             # @font-face, reading styles
│   ├── motion.css                 # @keyframes and reusable animations
│   └── globals.css                # Reset + base
├── public/
│   ├── fonts/
│   └── images/
└── tailwind.config.ts
```

## 17.3 Tailwind Governance

Tailwind is used as the layout and utility layer. Brand values come from CSS custom properties, exposed to Tailwind through `tailwind.config.ts`.

**Rule:** never use raw Tailwind palette classes (`bg-gray-100`, `text-blue-500`). Always use semantic tokens.

`tailwind.config.ts`:

```ts
export default {
  theme: {
    extend: {
      colors: {
        canvas:    'var(--surface-canvas)',
        surface:   'var(--surface-base)',
        raised:    'var(--surface-raised)',
        sunken:    'var(--surface-sunken)',
        ink: {
          primary:   'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          tertiary:  'var(--text-tertiary)',
          muted:     'var(--text-muted)',
          ghost:     'var(--text-ghost)',
          inverse:   'var(--text-inverse)',
        },
        line: {
          subtle:  'var(--border-subtle)',
          default: 'var(--border-default)',
          strong:  'var(--border-strong)',
        },
        accent: {
          warm:    'var(--accent-warm)',
          cool:    'var(--accent-cool)',
          success: 'var(--accent-success)',
          warning: 'var(--accent-warning)',
          error:   'var(--accent-error)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body:    ['var(--font-body)'],
        mono:    ['var(--font-mono)'],
      },
      maxWidth: {
        prose:   '68ch',
        reading: '72ch',
        docs:    '76ch',
        hero:    '18ch',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.16, 1, 0.3, 1)',
        out:     'cubic-bezier(0.0, 0.0, 0.2, 1)',
      },
    },
  },
}
```

**Permitted Tailwind use:**

- Layout: `flex`, `grid`, `gap-*`, `items-*`, `justify-*`
- Spacing: `p-*`, `m-*` (mapped to 4px base)
- Sizing: `w-*`, `h-*`, `max-w-prose`
- Display: `block`, `hidden`, `md:flex`
- Responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`

**Forbidden Tailwind use:**

- Raw color classes (`bg-slate-50`, `text-zinc-700`)
- Arbitrary values (`bg-[#FAFAF8]`) — use tokens
- Long utility chains that obscure intent — extract a component class
- `@apply` inside global stylesheets except for legitimate utility composition

## 17.4 Component Naming

PascalCase for components. Filenames match the export.

```
components/primitives/Button.tsx        → export Button
components/case-study/PullQuote.tsx     → export PullQuote
components/sections/HeroSection.tsx     → export HeroSection
```

Variants are expressed as props, not separate components:

```tsx
<Button variant="primary" size="md">Read the case study</Button>
```

Forbidden:

- `ButtonPrimary.tsx`, `ButtonSecondary.tsx` as separate files
- `<EndraerButton>` (don’t prefix with brand name; the namespace is the folder)
- Generic names like `Wrapper`, `Box`, `Container2`

## 17.5 The Primitive / Section Split

Two component categories, never more:

**Primitives** are stateless, prop-driven, and have no knowledge of business logic. `Button`, `Input`, `Card`, `Modal`, `Tag`, `Icon`. They live in `components/primitives/`.

**Sections** are page-level compositions. `Hero`, `WorkGrid`, `CaseStudyHeader`, `ContactForm`. They live in `components/sections/` and may import primitives and fetch data.

There is no third category called “molecules” or “organisms.” If a section grows complex enough to feel like its own subsystem (the case study reader, the dashboard chart suite), it gets its own folder.

## 17.6 CSS Token File Structure

`styles/tokens.css` is the single source of design truth. It is structured by tier:

```css
:root {
  /* ─── TIER 1: PRIMITIVES ───────────────────── */
  --color-neutral-50:  #FAFAF8;
  --color-neutral-100: #F5F4F0;
  /* … */

  /* ─── TIER 2: SEMANTIC ─────────────────────── */
  --surface-canvas: var(--color-neutral-50);
  --text-primary:   var(--color-neutral-950);
  /* … */

  /* ─── TIER 3: COMPONENT ────────────────────── */
  --btn-primary-bg: var(--accent-brand);
  /* … */

  /* ─── TIER 4: STATE ────────────────────────── */
  --state-disabled-opacity: 0.38;
  /* … */
}
```

No CSS file other than `tokens.css` may define a color, duration, or radius value. All others reference tokens.

## 17.7 Animation Architecture

All keyframes live in `styles/motion.css`. Components reference them by name.

```css
/* motion.css */
@keyframes fade-up {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes skeleton-shimmer {
  from { background-position: 200% 0; }
  to   { background-position: -200% 0; }
}
```

Forbidden:

- `@keyframes` inside component CSS files
- Inline `style={{ animation: '...' }}` props
- JS-driven animations for anything CSS can handle

## 17.8 Forbidden Implementation Patterns

- `!important` outside of `prefers-reduced-motion` overrides
- Inline `style` for design-token values
- `px` for typography (use `rem` so user font-size scaling works)
- Hard-coded hex outside `tokens.css`
- `setTimeout` to stagger animations (use `animation-delay`)
- `z-index` over 100 without a comment explaining the layer
- Viewport units (`vh`, `vw`) for font size on mobile
- Unbounded React re-renders from inline object/array props
- Image elements without `width` and `height`
- Client components when a server component would do

## 17.9 AI Agent Implementation Contract

When an AI coding agent (Claude, Cursor, Codex, GPT, future systems) writes code for Endrare:

1. Read `tokens.css` and `tailwind.config.ts` before writing any styles.
1. Reuse existing primitives. Do not create a new `Button` variant.
1. If a needed token does not exist, propose it as an addition to `tokens.css` rather than hard-coding.
1. Run `prefers-reduced-motion` consideration on every animated element.
1. Provide `aria-label` for icon-only interactive elements.
1. Set `width` and `height` on every image.
1. Default to server components unless interactivity is required.
1. Stop and ask before introducing a new dependency over 10KB gzipped.

-----

# 18. PERFORMANCE GOVERNANCE SYSTEM

Smoothness is a design deliverable. A correct-looking page that takes 3 seconds to become interactive is a failed page. This section defines the budgets and enforcement mechanisms.

## 18.1 Core Web Vitals Targets

|Metric                         |Target |Hard ceiling|
|-------------------------------|-------|------------|
|LCP (Largest Contentful Paint) |< 1.8s |< 2.5s      |
|INP (Interaction to Next Paint)|< 100ms|< 200ms     |
|CLS (Cumulative Layout Shift)  |< 0.05 |< 0.10      |
|FCP (First Contentful Paint)   |< 1.2s |< 1.8s      |
|TTFB (Time to First Byte)      |< 400ms|< 800ms     |

Measured on a 4G connection with a mid-range mobile device (Moto G Power equivalent), at the 75th percentile of real user data. If any hard ceiling is breached on production, that is a P1 incident.

## 18.2 Bundle Budgets

|Bundle                     |Target |Hard ceiling|
|---------------------------|-------|------------|
|Initial JS (gzipped)       |< 90KB |< 150KB     |
|Initial CSS (gzipped)      |< 25KB |< 40KB      |
|Per-route JS               |< 30KB |< 60KB      |
|Total above-the-fold images|< 200KB|< 400KB     |
|Font files (total)         |< 120KB|< 180KB     |

Enforced via CI. A PR that exceeds the hard ceiling is blocked.

## 18.3 Font Loading Strategy

Three principles govern font loading:

1. **No layout shift on font swap.** Use `font-display: swap` with a fallback metric-matched to the loaded font, or `font-display: optional` for non-critical faces.
1. **Self-host all fonts.** No Google Fonts CDN. Fonts ship from the same origin as the site.
1. **Subset and variable.** Use variable fonts where possible. Subset to Latin + Latin Extended unless international audiences are documented.

Example `@font-face`:

```css
@font-face {
  font-family: 'Geist';
  src: url('/fonts/Geist-Variable.woff2') format('woff2-variations');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
  size-adjust: 100%;
  ascent-override: 90%;
  descent-override: 22%;
}
```

Preload only the fonts used above the fold:

```html
<link rel="preload" href="/fonts/Geist-Variable.woff2"
      as="font" type="font/woff2" crossorigin />
```

Preload limit: maximum 2 font files. Additional fonts load via `font-display: swap` without preloading.

## 18.4 Image Compression Standards

|Format|Use                                                     |
|------|--------------------------------------------------------|
|AVIF  |Default for photographs                                 |
|WebP  |Fallback for AVIF                                       |
|JPEG  |Final fallback                                          |
|SVG   |Icons, diagrams, line art                               |
|PNG   |Only when transparency is required and SVG is not viable|

Compression targets:

- Hero images: max 200KB after compression at 2400px wide
- Inline content images: max 120KB at 1600px wide
- Card thumbnails: max 60KB at 800px wide
- All images served with `srcset` for 1x, 2x, and 3x densities
- All images served with appropriate `sizes` attribute
- Lazy-load everything below the fold (`loading="lazy"`)

Use Next.js `<Image>` or equivalent — never raw `<img>` for content imagery.

## 18.5 Animation Performance Rules

- Animate only `transform`, `opacity`, `filter`, `color`, `background-color`.
- Avoid animating layout properties (`width`, `height`, `top`, `left`, `margin`, `padding`) except in the four contained cases enumerated in Section 24.4.
- `will-change: transform` only on elements that animate continuously (progress bars, marquees). Remove after the animation completes.
- Maximum 3 simultaneous `backdrop-filter` surfaces in a viewport.
- Maximum 6 staggered elements per reveal group on mobile.

## 18.6 JavaScript Hydration Strategy

- Default to server components.
- Client components only for interactivity (forms, modals, animations triggered by user input).
- Lazy-load below-the-fold client components with `next/dynamic` + `ssr: false` where safe.
- Avoid client-side data fetching when the data can be fetched at request or build time.

## 18.7 Third-Party Script Discipline

Any third-party script costs performance. Each addition requires justification.

Allowed by default:

- Plausible / Umami (analytics, ~1KB)
- Sentry (error monitoring, dynamically imported)

Allowed with review:

- Embedded videos (load on user interaction only)
- Embedded calendars (load on user interaction only)

Forbidden:

- Live chat widgets (Intercom, Drift, Crisp) — they alone destroy LCP
- Cookie consent banners that block render — use a minimal in-page note instead
- A/B testing platforms that inject synchronous scripts
- Marketing automation pixels (HubSpot, Marketo) on the main site

## 18.8 Performance Budget Checklist (Pre-Deploy)

Before any production deploy, verify:

- [ ] `next build` shows no route exceeding JS budget
- [ ] Lighthouse mobile Performance score ≥ 95
- [ ] No layout shift on font load (FOIT/FOUT inspected manually)
- [ ] All images have explicit dimensions
- [ ] All routes return within 800ms TTFB from primary regions
- [ ] No render-blocking third-party scripts in `<head>`
- [ ] Service Worker (if used) does not cache stale critical CSS

-----

# 19. SEO & STRUCTURED CONTENT SYSTEM

Endrare’s SEO posture is restrained. The site is not optimized for high-volume keyword targeting. It is optimized for being findable by the specific people who would value it, and for being correctly understood by the systems that index it.

## 19.1 Heading Hierarchy Rule

One `<h1>` per page. It matches or closely paraphrases the page title.

```
<h1> — page title (one per page)
  <h2> — top-level section
    <h3> — subsection within section
      <h4> — rare, only for deep documentation
```

Skipping levels (h2 → h4) is a defect, not a style choice.

## 19.2 Metadata Structure

Every route ships with the following metadata, generated via a shared `lib/seo.ts` helper:

```ts
// lib/seo.ts
export function buildMetadata(opts: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
}): Metadata {
  const url = `https://endrare.com${opts.path}`;
  const image = opts.image ?? `https://endrare.com/og/${opts.path}`;

  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: 'Endrare',
      type: opts.type ?? 'website',
      images: [{ url: image, width: 1200, height: 630 }],
      publishedTime: opts.publishedTime,
    },
    twitter: {
      card: 'summary_large_image',
      title: opts.title,
      description: opts.description,
      images: [image],
    },
  };
}
```

Title length: 50 to 60 characters. Description length: 140 to 160 characters. Both should read as natural sentences, not keyword stuffing.

## 19.3 Open Graph Image Rules

Every page gets a unique OG image. They are generated dynamically with Next.js `opengraph-image.tsx`, not designed manually.

Specifications:

- Size: 1200 × 630 pixels
- Background: `--surface-canvas` (`#FAFAF8`)
- Title: display font, 64px, weight 700, `--text-primary`
- Subtitle: body font, 28px, weight 400, `--text-secondary`
- Wordmark: bottom-left, 24px, `--text-tertiary`
- Padding: 80px on all sides

The OG image must not include:

- Stock photography
- Product screenshots with marketing chrome
- Gradient backgrounds
- The headline rendered as an image of the headline (redundant)
- Decorative shapes or icons

## 19.4 Schema.org JSON-LD

Every case study page ships an `Article` schema. Every page ships an `Organization` schema in the root layout.

Root layout:

```tsx
<script type="application/ld+json" dangerouslySetInnerHTML={{
  __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Endrare",
    "url": "https://endrare.com",
    "logo": "https://endrare.com/logo.svg",
    "founder": {
      "@type": "Person",
      "name": "Deependra"
    },
    "sameAs": [
      "https://twitter.com/endrare",
      "https://github.com/endrare"
    ]
  })
}} />
```

Case study:

```tsx
<script type="application/ld+json" dangerouslySetInnerHTML={{
  __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": summary,
    "image": heroImageUrl,
    "datePublished": publishedDate,
    "dateModified": updatedDate,
    "author": { "@type": "Person", "name": "Deependra" },
    "publisher": {
      "@type": "Organization",
      "name": "Endrare",
      "logo": { "@type": "ImageObject", "url": logoUrl }
    },
    "mainEntityOfPage": canonicalUrl
  })
}} />
```

## 19.5 Sitemap

Generated at `app/sitemap.ts`:

```ts
export default async function sitemap() {
  const cases = await getAllCaseStudies();
  const caseUrls = cases.map(c => ({
    url: `https://endrare.com/work/${c.slug}`,
    lastModified: c.updatedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    { url: 'https://endrare.com',          changeFrequency: 'weekly',  priority: 1.0 },
    { url: 'https://endrare.com/work',     changeFrequency: 'weekly',  priority: 0.9 },
    { url: 'https://endrare.com/about',    changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://endrare.com/contact',  changeFrequency: 'yearly',  priority: 0.5 },
    ...caseUrls,
  ];
}
```

## 19.6 Robots.txt Philosophy

Endrare uses a permissive robots policy. Search engines index everything except utility routes and the API.

```ts
// app/robots.ts
export default function robots() {
  return {
    rules: [{
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/draft/'],
    }],
    sitemap: 'https://endrare.com/sitemap.xml',
  };
}
```

No `noindex` on case studies under any circumstance. No blocking of AI training crawlers as a default — that is a separate brand-level decision documented elsewhere.

## 19.7 Canonical URLs

Every page declares a canonical. Pages that exist at multiple paths (trailing slash, query parameters, alternate hosts) canonicalize to the primary path.

```html
<link rel="canonical" href="https://endrare.com/work/considered-systems" />
```

Trailing slashes: choose one convention site-wide. Endrare uses **no trailing slash** (`/work/slug`, not `/work/slug/`).

## 19.8 RSS Feed

The case study index ships an RSS feed at `/work/feed.xml`. Each item includes title, summary, publication date, canonical URL, and the first 200 words of the body.

This is non-negotiable for an editorial-leaning property. RSS is how serious readers subscribe.

## 19.9 Internal Linking Discipline

Every case study links to at least one related case study at its end. The “Related Work” section is part of the page template, not optional. Links within body copy point to other case studies or to external sources — never to marketing pages.

-----

-----

-----

# PART SEVEN — PLATFORM

-----

-----

# 20. RESPONSIVE DESIGN SYSTEM

The site adapts to viewport, not to a list of devices. Breakpoints are content thresholds.

## 20.1 Breakpoint Set

|Token|Value |Where content shifts                                     |
|-----|------|---------------------------------------------------------|
|`sm` |640px |Large phone — typography settles, eyebrow labels appear  |
|`md` |768px |Tablet — two-column grids become possible                |
|`lg` |1024px|Small desktop — full nav, sidebar appears in case studies|
|`xl` |1280px|Standard desktop — global container reaches max          |
|`2xl`|1536px|Wide desktop — type stops scaling up                     |
|`3xl`|1920px|Ultrawide — content max is enforced; remainder is margin |

The site renders correctly at any width between 320px and 3840px. There is no “designed for desktop” excuse.

## 20.2 Fluid Typography

Display sizes scale fluidly between mobile and desktop, locking at both ends:

```css
:root {
  --text-hero:    clamp(2.25rem, 4vw + 1rem, 4.5rem);   /* 36px → 72px */
  --text-section: clamp(1.5rem,  2vw + 1rem, 2.25rem);  /* 24px → 36px */
  --text-lead:    clamp(1rem,    0.5vw + 0.9rem, 1.125rem); /* 16px → 18px */
}
```

Body text does not scale fluidly. It is fixed at 16px (mobile/tablet) or 18px (case study reading column). Fluid body text produces awkward intermediate sizes.

## 20.3 Container Behavior

```css
.container {
  width: 100%;
  margin-inline: auto;
  padding-inline: var(--container-padding);
  max-width: var(--container-max);
}

:root {
  --container-padding: 1rem;   /* 16px mobile */
  --container-max: 1280px;
}

@media (min-width: 768px) {
  :root { --container-padding: 1.5rem; }   /* 24px */
}
@media (min-width: 1024px) {
  :root { --container-padding: 2rem; }     /* 32px */
}
```

Above `2xl` (1536px), the container does not grow further. The extra width becomes margin.

## 20.4 Section Padding by Viewport

|Viewport                     |Section top|Section bottom|
|-----------------------------|-----------|--------------|
|< 768px (mobile)             |64px       |64px          |
|768 – 1024px (tablet)        |96px       |96px          |
|1024 – 1280px (small desktop)|112px      |112px         |
|1280px+ (desktop)            |128px      |128px         |
|Hero, desktop                |160px      |128px         |
|Hero, mobile                 |80px       |64px          |

## 20.5 Grid Collapse Rules

|Layout                      |Desktop              |Tablet                    |Mobile                    |
|----------------------------|---------------------|--------------------------|--------------------------|
|3-column feature grid       |3 cols               |2 cols                    |1 col                     |
|4-column work grid          |4 cols               |2 cols                    |1 col                     |
|Case study sidebar + content|sidebar + 68ch column|top progress bar + content|top progress bar + content|
|KPI dashboard               |4 cols               |2 cols                    |1 col                     |
|Footer link columns         |4 cols               |2 cols                    |accordion                 |

Grid gaps:

- Desktop: 24px
- Tablet: 20px
- Mobile: 16px

## 20.6 Container Queries

Use container queries (`@container`) for components that need to adapt to their container, not the viewport. Example: a card grid where each card adjusts internal layout based on its own width.

```css
.card {
  container-type: inline-size;
}

@container (min-width: 360px) {
  .card { padding: 2rem; }
  .card__title { font-size: 1.25rem; }
}
```

Container queries replace fragile media-query-based responsive components.

## 20.7 Touch vs Pointer

Hover states are progressive enhancements. The site must function without hover.

```css
@media (hover: hover) {
  .card:hover { transform: translateY(-2px); }
}
```

Touch targets: minimum 44 × 44px tap area, regardless of visible size.

-----

# 21. MOBILE SAFE-AREA & DEVICE PHILOSOPHY

Mobile is not a smaller desktop. It is a different surface with its own constraints and affordances.

## 21.1 Safe Area Insets

iOS devices with notches and home indicators require `env(safe-area-inset-*)` handling. This applies to any fixed or sticky element.

```css
.nav-fixed {
  padding-top: env(safe-area-inset-top);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
}

.bottom-cta {
  padding-bottom: max(1rem, env(safe-area-inset-bottom));
}
```

Set `viewport-fit=cover` in the meta viewport:

```html
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
```

## 21.2 Dynamic Island and Status Bar

Sticky navigation must not visually collide with the iOS Dynamic Island. Maintain at least 8px of clearance below `safe-area-inset-top`.

The navigation background extends fully through the safe area when scrolled. The content (logo, links) starts after the safe area inset.

## 21.3 Thumb Zone Map

On a 6.1” phone held one-handed, the comfortable thumb reach extends from the bottom-center outward in a curved arc. The top-right corner is the least accessible region.

Implications:

- Primary actions belong in the bottom 60% of the screen on mobile.
- Destructive or rarely-used actions can sit at the top.
- Floating action buttons sit at `bottom: max(24px, env(safe-area-inset-bottom) + 16px)` and `right: 16px`.
- A “back to top” affordance, if used, sits at the bottom-right and is keyboard-reachable.

## 21.4 Mobile Navigation

The mobile navigation overlay:

- Triggered by a 44 × 44px hamburger button in the navbar
- Slides in from the right, or fades in as a full-screen panel
- Background: `--surface-canvas`, fully opaque (not glass on mobile — glass costs GPU and battery)
- Links: 28px, weight 600, stacked vertically with 24px gaps
- Close button: top-right, 44 × 44px tap target
- Closes on link tap, escape key, or backdrop click
- Locks body scroll while open (use `overflow: hidden` on `body`, restore on close)

## 21.5 Gesture-Safe Layout

The horizontal 12px edges of the screen are reserved for system gestures (back swipe on iOS, edge swipes on Android). Do not place interactive elements directly against these edges. Container padding handles this naturally — but custom horizontal scrollers must respect it explicitly.

## 21.6 Mobile Motion Reduction

Even without `prefers-reduced-motion`, mobile reduces motion intensity:

- Scroll reveals: shorter distance (`translateY(12px)` instead of `20px`)
- Stagger groups: capped at 4 items (not 6)
- `backdrop-filter` on mobile: capped at 12px blur (not 20px) to save GPU
- Page transitions: shortened to 250ms total

## 21.7 Foldable & Tablet Awareness

For foldable devices and tablets, treat width directly — use container queries on key sections (hero, work grid) so they adapt to the actual rendered width rather than guessing from device class.

iPad Pro at 1024px wide should receive the small-desktop layout, not the tablet layout. The breakpoint at 1024px exists for this reason.

## 21.8 Mobile Readability Floor

|Property                      |Minimum on mobile|
|------------------------------|-----------------|
|Body font size                |16px             |
|Line height (body)            |1.6              |
|Paragraph margin              |20px             |
|Touch target                  |44 × 44px        |
|Color contrast (body)         |4.5:1            |
|Horizontal padding (container)|16px             |

Going below any of these on mobile is a defect.

-----

# 22. ADVANCED ACCESSIBILITY SYSTEM

Accessibility is treated as a baseline, not a bolt-on. The system targets WCAG 2.2 AA across all surfaces, AAA for reading content.

## 22.1 Contrast Verified Pairings

|Text token                    |Surface                       |Ratio   |Verdict                |
|------------------------------|------------------------------|--------|-----------------------|
|`--text-primary` (`#0F0F0E`)  |`--surface-canvas` (`#FAFAF8`)|16.8 : 1|AAA                    |
|`--text-secondary` (`#3D3C38`)|`--surface-canvas`            |8.4 : 1 |AAA                    |
|`--text-tertiary` (`#6B6A65`) |`--surface-canvas`            |4.8 : 1 |AA                     |
|`--text-muted` (`#9B9A95`)    |`--surface-canvas`            |3.1 : 1 |AA Large only          |
|`--text-ghost` (`#C4C3BD`)    |`--surface-canvas`            |1.9 : 1 |Fails — decorative only|
|`--accent-error` (`#8B3A3A`)  |`--surface-canvas`            |6.2 : 1 |AAA                    |
|`--accent-success` (`#4A7C59`)|`--surface-canvas`            |4.6 : 1 |AA                     |

`--text-ghost` is never used for content a user needs to read.

## 22.2 Focus Visibility

Every interactive element has a visible `:focus-visible` state. Default rings use the text color as the ring:

```css
:focus-visible {
  outline: 2px solid var(--text-primary);
  outline-offset: 3px;
  border-radius: var(--radius-sm);
}
```

Focus rings are never removed. If a custom focus style is needed (e.g., inset for inputs), it must remain visible against any background.

## 22.3 Keyboard Navigation Contract

- Tab order matches visual order (verified manually before deploy).
- A skip link (`Skip to main content`) appears as the first focusable element. It is visually hidden until focused.
- All modals trap focus while open; focus returns to the triggering element on close.
- Dropdowns and combobox patterns support arrow keys, Enter, and Escape.
- `tabindex` greater than 0 is forbidden — it breaks natural order.

Skip link implementation:

```tsx
<a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:bg-canvas focus:text-ink-primary focus:px-4 focus:py-2 focus:rounded">
  Skip to main content
</a>
```

## 22.4 Reduced Motion

Treat reduced motion as the preference, not the exception, in animation logic:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

For animations carrying meaning (e.g., a checkmark appearing on success), preserve a non-motion equivalent — fade only, no transform.

## 22.5 Cognitive Accessibility

- Sentences below 22 words on average.
- One concept per heading.
- Error messages name what went wrong and what to do next.
- Confirmation modals state the consequence explicitly (“This deletes the project permanently”).
- Loading states show approximate duration or stage when an operation exceeds 3 seconds.

## 22.6 Dyslexia-Adjacent Considerations

The body face must be a humanist sans with distinguishable letterforms (clear `I`, `l`, `1`; clear `b`, `d`, `p`, `q`). Inter, Geist, and DM Sans all pass this test.

Avoid:

- Justified text (creates rivers and uneven gaps)
- Letter-spacing below default on body text
- All-caps for anything over 14px

## 22.7 Screen Reader Considerations

Semantic HTML carries the load. Aria attributes supplement, never replace.

|Surface                |Semantic                       |
|-----------------------|-------------------------------|
|Site nav               |`<nav aria-label="Primary">`   |
|Footer nav             |`<nav aria-label="Footer">`    |
|Main content           |`<main>`                       |
|Case study chapter     |`<section aria-labelledby="…">`|
|Image with caption     |`<figure>` + `<figcaption>`    |
|Form errors            |`<p role="alert">`             |
|Live region for loading|`<div aria-live="polite">`     |
|Icon-only button       |`<button aria-label="…">`      |
|Decorative icon        |`aria-hidden="true"`           |

## 22.8 Zoom Behavior

The page remains usable at 200% browser zoom and 400% text zoom without horizontal scroll.

- Use `rem` for font sizes so user font-size preferences are honored.
- Containers use `max-width` with fluid `padding`, not fixed pixel widths that break at zoom.
- Disable `user-scalable=no` in viewport meta — that flag is an accessibility violation.

## 22.9 Accessibility Testing Checklist

Run before every deploy:

- [ ] axe DevTools scan returns zero violations on each route
- [ ] Lighthouse Accessibility score ≥ 100 on each route
- [ ] Manual keyboard walk: every interactive element reachable, focus visible, escape closes
- [ ] Tab order verified by screen recording
- [ ] VoiceOver or NVDA reads the page top-to-bottom in correct order
- [ ] 200% zoom: no horizontal scroll, all text readable
- [ ] `prefers-reduced-motion`: enabled, all animations effectively stop
- [ ] Form errors announced by screen reader
- [ ] All images have meaningful `alt` (or empty `alt=""` if decorative)

-----

-----

-----

# PART EIGHT — GOVERNANCE

-----

-----

# 23. CONTROLLED RULE-BREAKING SYSTEM

The rules are correct most of the time. Once or twice per product, a specific moment justifies breaking them. This section defines when and how — so that breaks remain rare, intentional, and consistent with the system rather than against it.

## 23.1 The Principle

A rule break is only permitted when it serves the same underlying goal the rule was designed to protect. The motion restraint rule exists to keep the interface coherent. A single cinematic opening animation on the homepage hero serves that same goal at a higher amplitude — provided everything else stays still.

The test: would a thoughtful reader notice the break as deliberate craft, or as an inconsistency? If the answer is the latter, it is not a sanctioned break — it is drift.

## 23.2 Sanctioned Break: The Homepage Opening Sequence

The first 1.2 seconds after the homepage loads can break the standard motion budget.

Permitted:

- A reveal duration up to 1500ms
- A staggered word-level or phrase-level entrance for the hero headline (not character-level)
- A subtle camera-like zoom on a hero image (5% scale across 1500ms)

Required:

- The sequence plays once per session, not on every visit
- It respects `prefers-reduced-motion` (skipped entirely)
- It does not delay LCP (the headline renders immediately in its final position from SSR; animation enhances, not gates)

## 23.3 Sanctioned Break: Case Study Cinematic Moments

Within a case study, up to two “cinematic” moments are permitted per piece. These can use:

- Full-bleed imagery at 21:9 (the only place this aspect ratio is permitted)
- A pull-quote rendered at display-typography scale
- A scroll-pinned moment where one image holds for up to 2 seconds before continuing

Required:

- The break supports the narrative — never decorative
- The break never interrupts a CTA, a form, or a navigation moment
- The cinematic moment is preceded and followed by standard reading layout

## 23.4 Sanctioned Break: Expressive Typography

For section dividers in long-form case studies, the display font may appear in:

- Italic at large sizes (>48px) for a single pull quote
- A drop cap at the start of an opening paragraph (one per case study, never per section)
- A two-line “chapter mark” treatment combining a number and a label

Required:

- Used at most once per case study, except drop caps which are once per piece
- Always uses the system’s display font, never a one-off typeface
- Always sits inside the standard reading column

## 23.5 Sanctioned Break: Asymmetric Hero Layouts

The standard hero is centered. A specific case study or homepage variant may use an asymmetric layout: text left, image right, neither perfectly centered. This is permitted when:

- The asymmetry serves the content (e.g., a quote pulled from a person, with their photo offset)
- The layout still respects the 12-column grid
- The asymmetric block does not appear more than once per page

## 23.6 Sanctioned Break: Darker Sections

A single dark section per page is permitted, beyond the standard near-black footer. Use cases:

- A testimonial or quote block that gains gravity from inversion
- A “manifesto” block on the about page

Specifications when used:

- Background: `--color-neutral-900` (`#1A1A18`)
- Text: `--text-inverse` and its inverted muted variants
- The section retains all standard typography rules, just inverted

## 23.7 What Is Never a Sanctioned Break

These are not breakable, regardless of context:

- Accessibility minimums (contrast ratios, focus visibility, keyboard reachability)
- Mobile readability floors (16px body, 44px touch targets)
- Performance budgets
- Token usage discipline (no hard-coded hex)
- Forbidden Word list in copy
- The Endrare wordmark treatment

## 23.8 The Documentation Requirement

Every sanctioned break is documented in a `design-decisions.md` file at the case study or page level. The note states:

1. What rule was broken
1. Why
1. What was the alternative
1. Why the alternative was rejected

This file is read before the next contributor proposes their own break, preventing drift through inheritance.

-----

# 24. FORBIDDEN DESIGN PATTERNS

This is the negative space of the system. The positive principles define what Endrare is. This section defines what it is not — and what no contributor, including AI agents, may introduce.

## 24.1 Color and Surface

- Pure white (`#FFFFFF`) as a primary surface
- Pure black (`#000000`) anywhere except as a momentary `box-shadow` ink
- Multi-hue color gradients (purple-to-indigo, blue-to-teal, sunrise palettes)
- Saturated brand-color gradient overlays on images
- Colored shadows (no blue glow, no warm amber drop shadow)
- Neon, fluorescent, or AI-product-defaults palette
- More than one accent color visible on the same page
- Rainbow or multi-stop gradients of any kind
- Dark mode shipped before light mode is production-perfect

## 24.2 Typography

- Comic Sans, Impact, Papyrus, or any novelty typeface
- All-caps body text
- Justified alignment in paragraphs (creates rivers)
- Text below 12px for any informational content
- Text below 16px for body on mobile
- Letter-spacing on body text — that property is for labels only
- Stacked heading + subheading + sub-subheading at the same size
- Gradient text (`background-clip: text` with color gradients)
- Drop shadow on text
- Synthesized heavy weights (use 800 only if the typeface has a designed 800)

## 24.3 Layout

- Full-screen parallax background images
- Content that touches the viewport edge on any size
- Equal-hierarchy three-column or four-column hero layouts
- Centered hero text with centered body paragraphs
- Sticky elements that persist for more than one scroll context
- Carousels without visible navigation
- Infinite scroll without a clear end
- Horizontal scroll desktop sections except for explicit gallery contexts

## 24.4 Motion — Refined Rules

Animation restrictions, revised from the broader “never” framing in earlier sections:

**Layout-property animation:** Avoid animating `width`, `height`, `top`, `left`, `margin`, `padding` as a default. Acceptable contained cases:

- Progress bars (animating `width`, isolated element)
- Underline reveals (animating `width` on a pseudo-element)
- `clip-path` reveals (GPU-accelerated)
- Isolated expandable panels (`max-height` transitions with `overflow: hidden`)
- Grid transitions within a single container that is fixed in size

In each case, the animated element is isolated, off the layout flow’s critical path, and tested for frame rate at 60fps on mid-tier mobile.

**Linear easing:** Forbidden for interactive UI transitions (hovers, clicks, dropdowns). Acceptable for:

- Continuous looping motion (marquees, slow ambient drifts)
- Determinate progress indicators
- Mechanical spinners and loaders
- Non-interactive ambient motion where constant velocity is semantically correct

**Forbidden motion patterns:**

- Scroll hijacking (overriding native scroll momentum)
- Elements that spin continuously without user-controlled justification
- Typewriter effects on hero headlines
- Parallax depth on background images as a primary effect
- Hover effects that move content more than 4px
- Page transitions longer than 800ms total
- More than 6 staggered elements per reveal on mobile
- Letter-by-letter text reveal animations
- Bouncy spring overshoot above 8% (reads as toy-like)

## 24.5 Components

- Live chat widgets unless the product genuinely requires conversational support
- Cookie consent banners styled as modal overlays — use a slim in-page strip instead
- Countdown timers for urgency
- Social-proof popup notifications (“John from Denver just signed up”)
- Auto-playing video with audio
- Floating “back to top” arrows above the desktop fold
- Toast notifications that auto-dismiss in under 2.5 seconds (too fast to read)
- Tooltips on touch devices (they are pointer artifacts)

## 24.6 Imagery

- Stock photography featuring people smiling at laptops
- Illustrated mascots, characters, or avatars
- 3D abstract shapes used as decoration
- Low-resolution images at any viewport
- Images without explicit `width` and `height` attributes
- Background photography behind text without an overlay
- AI-generated images that look AI-generated (rendering artifacts, hand defects, dreamlike compositions)

## 24.7 Marketing & Sales Patterns

- “Trusted by 10,000+ teams” logo strips
- Feature checkmark comparison grids against competitors
- Testimonial carousels with avatar circles and star ratings
- Hero pricing toggles (monthly / annual)
- “Scroll down” arrow animations at the bottom of the hero
- “As seen in” press logo rows
- “Book a demo” as the sole CTA
- Floating product screenshots with colored glow shadows

## 24.8 The Generic AI Aesthetic

The most current threat to brand integrity is the look produced by AI coding assistants generating UI without design direction:

- Purple-to-indigo gradient heroes
- Inter or Geist on everything with no other typographic decision
- `rounded-2xl` applied to every container
- Dark glass cards on dark gradient backgrounds
- Floating product UI mockups with glow shadows
- Copy like “Powerful AI” / “10x your workflow” / “Built with AI”
- Animated gradient borders on feature cards
- Neural network visualizations as decoration

If any generated output resembles a Vercel template or a Framer community site — revise it until it could only belong to Endrare.

-----

# 25. LONG-TERM PRODUCT EVOLUTION SYSTEM

This section governs how Endrare can change without losing what it is. A design system that cannot evolve becomes a museum piece. A design system that evolves without discipline becomes another brand entirely. The goal is shape-preserving growth.

## 25.1 What Is Permitted to Change

The following layers can be revised as the product matures:

- Specific typeface choices (licensing improvements, new releases)
- Specific hex values (subtle calibration over time)
- Animation durations (as devices and browsers improve)
- Component patterns (as the product surface expands)
- New page archetypes (a research surface, a tools index, a writing log)
- Localization (additional languages)
- Platforms (native apps, spatial computing, AI surfaces)

## 25.2 What Must Not Change

The following must persist through all future iterations:

- The warm near-white surface philosophy
- Typography-first hierarchy (color and motion serve type, not the other way around)
- The whitespace doctrine (sections breathe)
- The motion restraint principle (invisible, supportive, never theatrical)
- The token system architecture (four-tier hierarchy)
- The anti-pattern list (Section 24)
- The Founder Taste Layer substrate (Section 0)
- The wordmark discipline (Section 0.4)

If a proposed change would alter any of the above, it is not an evolution — it is a rebrand. That requires a different conversation than a design system update.

## 25.3 One-Year Horizon

In the next twelve months, Endrare can mature in these ways without changing what it is:

- Production-perfect dark mode shipped as an opt-in
- A full design tokens export (JSON, Style Dictionary) for use in Figma and other tools
- A documented component library README per primitive
- A `/notes` section for short-form writing in addition to long-form case studies
- An RSS feed for `/notes` and `/work`
- A more refined wordmark — possibly a custom-cut version of the mathematical sans treatment
- Multilingual content support if the audience warrants it

## 25.4 Three-Year Horizon

Within three years, the system supports:

- A small native app surface (iOS) for reading saved case studies offline
- A more extensive editorial archive — possibly book-format long-form
- A first-party tool or product surface, not just a portfolio site
- A signed, versioned design system package (`@endrare/tokens`, `@endrare/ui`)
- Federated identity across product surfaces (consistent navigation across the marketing site, the tool, and the writing surface)

The system absorbs these additions because the token architecture is decoupled from any single surface.

## 25.5 Five-Year Horizon

Within five years, the question shifts from “what does the website look like” to “what does Endrare feel like across surfaces.”

- Spatial computing surfaces (visionOS, equivalent platforms): the typography and motion principles transfer. The color system inverts to deep neutral with high-contrast text. Glass becomes a primary substrate rather than an occasional layer.
- AI-conversational surfaces: the voice rules in Section 16 govern any system that speaks as Endrare. The tone is the same whether on a webpage, a button label, or a generative interaction.
- Long-form publication: if Endrare ships a printed book or zine, the typography system extends to print. Display sizes scale up; spacing units convert to picas; the warm-neutral palette renders as cream paper.
- Generative product (if applicable): the brand identity governs not the model behind it, but the surface around it.

## 25.6 The Brand Continuity Test

Before any major evolution, run this test:

1. Place a current Endrare page and a proposed future page side by side.
1. Strip both of the wordmark and any explicit brand markers.
1. Ask three people who know the brand: do these belong to the same system?

If the answer is unambiguous yes, the evolution is sound. If the answer is “kind of” or “they could,” the evolution has drifted. Revise it until the answer is yes.

## 25.7 Governance Against Drift

Two failure modes erode the system over years: drift through accumulation (small inconsistencies that compound) and drift through reaction (chasing trends or competitor changes).

Counter-mechanisms:

- A quarterly audit reading the full site against this rulebook. Any drift is logged.
- A “decision log” file in the repo recording every design decision that diverged from a previous one and why.
- A six-month embargo on adopting any new design trend. By month six, the trend has either matured (and Endrare can evaluate it on its own terms) or evaporated (and was never worth absorbing).
- A standing rule that the rulebook governs the code, not the other way around. If the code is wrong, the code changes. The rulebook does not move to accommodate a shortcut.

-----

-----

-----

# PART NINE — OPERATIONS

-----

-----

# PRACTICAL OPERATIONAL SYSTEMS

These are the surfaces every production site needs that the v1.1 document did not cover with implementation specificity.

## P.1 Loading Behavior

Three loading contexts, three patterns:

|Context           |Pattern                                                          |Duration shown     |
|------------------|-----------------------------------------------------------------|-------------------|
|Initial route load|Top progress bar, 2px, `--text-primary`, indeterminate           |Until route renders|
|In-page data fetch|Skeleton mirroring final layout                                  |While fetching     |
|Form submission   |Button enters loading state, label changes to spinner + “Saving…”|Until response     |

Initial route loader:

```css
.route-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 2px;
  background: var(--text-primary);
  width: 0;
  transition: width 200ms linear;
  z-index: 1000;
}
.route-progress.is-loading { width: 85%; }
.route-progress.is-done    { width: 100%; opacity: 0;
                             transition: opacity 400ms 200ms ease; }
```

Avoid full-page spinners. They feel like the application is broken even when it isn’t.

## P.2 404 Page

```
The page isn't here.

It may have moved, or it may never have existed.
Return to the homepage, or read recent work.

[Back to homepage]   [View recent work]
```

Specification:

- Layout: full-viewport centered single column, max-width 52ch
- Heading: `--text-3xl`, weight 600, `--text-primary`
- Body: `--text-base`, `--text-secondary`, line-height 1.6
- Two buttons: primary (home) and secondary (work)
- No illustration, no broken-robot graphic, no “Oops!”
- Returns HTTP 404 status code (required for SEO)

## P.3 500 / Error Boundary Page

```
The server didn't respond.

Try the request again in a moment, or email us if it keeps happening:
hello@endrare.com.

[Retry]   [Go to homepage]
```

Specification:

- Same layout structure as 404
- Provide retry as the primary action when feasible
- Email address as plain `mailto:` link
- Returns HTTP 500 status
- Errors logged to Sentry (or equivalent) with anonymized context

## P.4 Maintenance Page

Used only for planned downtime. Returns HTTP 503 with `Retry-After` header.

```
Briefly offline.

Endrare is updating. The site returns within ten minutes.

For anything urgent, email hello@endrare.com.
```

Visible at the same domain or at a `status.endrare.com` subdomain depending on infrastructure. No illustration, no countdown timer.

## P.5 Form Validation

Validation runs at three points: on blur (after the user leaves a field), on submit (final check), and progressively while typing for fields with format requirements (email, URL).

|State               |Visual treatment                                   |
|--------------------|---------------------------------------------------|
|Default             |Standard input style                               |
|Focused             |Border `--text-primary`, ring `rgba(15,15,14,0.08)`|
|Valid (after blur)  |Standard input, optional checkmark icon at right   |
|Invalid (after blur)|Border `--accent-error`, message below             |
|Submitting          |Field disabled, opacity 0.6                        |

Error messages live below the field with `--size-2` gap, `--text-xs`, `--accent-error`. They begin with what went wrong, then how to fix it:

- `Email address isn't valid. Try the format: name@domain.com.`
- `Password needs at least eight characters.`
- `This field is required.`

Never:

- Validate on every keystroke (jarring)
- Use ❌ or ⚠ emoji in error text
- Hide which field failed when summarizing errors

## P.6 Contact Section

A contact form is a piece of microcopy, a piece of validation, and a piece of trust. The minimum viable Endrare contact pattern:

```
Get in touch.

For project inquiries, writing collaboration, or anything specific.
Replies are direct and usually within two business days.

Name        [          ]
Email       [          ]
Message     [          ]
            [          ]
            [          ]

[Send message]
```

Layout:

- Single column, max-width 480px
- Fields stack vertically, 24px gap
- Submit button is full-width on mobile, auto-width on desktop
- No phone field unless calls are genuinely offered
- No “How did you hear about us?” — it’s a tax on the sender
- No CAPTCHA visible to the user; use a honeypot or invisible Turnstile

After submit:

- Optimistic UI: button shows “Sending…” then transitions to a success state inline
- Success message replaces the form: “Thanks. I’ll reply within two business days.”
- On failure: form remains, an error message appears at the top

## P.7 Analytics & Privacy

Endrare collects the minimum data needed to understand how the site is used. No third-party trackers, no advertising pixels, no behavioral profiling.

Approved stack:

- **Plausible** or **Umami** (self-hosted) — page views, referrers, country (not city), device class
- **Sentry** — error monitoring, with PII scrubbing enabled

Privacy posture:

- No cookies for analytics (Plausible and Umami are cookieless)
- No fingerprinting
- IP addresses anonymized at collection
- A small in-page notice at the bottom of the homepage:
  `This site uses minimal analytics. No tracking, no third parties.`
- A `/privacy` page listing exactly what is collected, why, and how to opt out

GDPR / CCPA compliance is achieved by collecting so little that consent flows are not legally required. This is the correct architectural answer, not a workaround.

## P.8 Newsletter Behavior (if shipped)

If a newsletter is offered:

- Single field (email), single button (`Subscribe`)
- Double opt-in confirmation (legal requirement in most jurisdictions)
- Confirmation copy: `Thanks. Check your email to confirm.`
- Unsubscribe link in every email, one-click
- Sender: human name, not “Endrare Team”
- No automated drip sequences — write each issue

## P.9 Image Compression Pipeline

Every image entering the repo passes through this pipeline:

1. Original at source resolution stored in `/public/images/originals/` (not deployed)
1. Optimized variants generated at 1x, 2x, 3x densities for each defined `sizes` breakpoint
1. AVIF as primary, WebP as fallback, JPEG/PNG as final fallback
1. EXIF data stripped
1. SVGs run through SVGO with default settings

Tool: Next.js `<Image>` handles this automatically for most cases. For images that need manual control, use `sharp` in a pre-deploy script.

Naming convention: `kebab-case-descriptive-name.{format}` — never `IMG_1234.jpg`.

## P.10 Open Graph Image Generation

Dynamic OG images via `app/opengraph-image.tsx`:

```tsx
import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{
        width: '100%', height: '100%',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'space-between',
        background: '#FAFAF8',
        padding: 80,
        fontFamily: 'Geist',
      }}>
        <div style={{ fontSize: 64, fontWeight: 700, color: '#0F0F0E', maxWidth: 900 }}>
          A workspace for considered work.
        </div>
        <div style={{ fontSize: 24, color: '#6B6A65' }}>
          Endrare
        </div>
      </div>
    ),
    size
  );
}
```

Each route can override `opengraph-image.tsx` with its own title and subtitle.

-----

-----

-----

# REFERENCE

-----

-----

# APPENDIX A — TOKEN QUICK REFERENCE

A consolidated view of all tokens used in the system. The full definitions live in `styles/tokens.css`.

## A.1 Surface

```
--surface-canvas    #FAFAF8   Primary page background
--surface-base      #F5F4F0   Cards, containers
--surface-raised    #EFEDE8   Hover states, secondary elevation
--surface-sunken    #F0EFEB   Inputs, code blocks
--surface-glass     rgba(250,250,248,0.85)
--surface-overlay   rgba(15,15,14,0.40)
```

## A.2 Text

```
--text-primary      #0F0F0E   Headings, body
--text-secondary    #3D3C38   Subheadings
--text-tertiary     #6B6A65   Metadata
--text-muted        #9B9A95   Placeholders
--text-ghost        #C4C3BD   Decorative only
--text-inverse      #F5F4F0   On dark surfaces
```

## A.3 Border

```
--border-subtle     #E8E7E2
--border-default    #D4D3CD
--border-strong     #B8B7B0
--border-focus      #0F0F0E
```

## A.4 Accent

```
--accent-brand      #1A1A18
--accent-warm       #C4A882
--accent-cool       #8B9EAD
--accent-success    #4A7C59
--accent-warning    #8B6914
--accent-error      #8B3A3A
```

## A.5 Spacing

```
--size-1   4px       --size-12  48px
--size-2   8px       --size-16  64px
--size-3   12px      --size-20  80px
--size-4   16px      --size-24  96px
--size-5   20px      --size-32  128px
--size-6   24px      --size-40  160px
--size-8   32px      --size-48  192px
--size-10  40px      --size-64  256px
```

## A.6 Radius

```
--radius-sm     4px
--radius-md     8px
--radius-lg     12px
--radius-xl     16px
--radius-card   12px
--radius-input  8px
--radius-btn    8px
--radius-modal  16px
```

## A.7 Motion

```
--motion-instant    100ms
--motion-fast       200ms
--motion-normal     300ms
--motion-slow       500ms
--motion-cinematic  700ms
--motion-ambient    1000ms

--easing-premium    cubic-bezier(0.16, 1, 0.3, 1)
--easing-out        cubic-bezier(0.0, 0.0, 0.2, 1)
--easing-in-out     cubic-bezier(0.4, 0, 0.2, 1)
--easing-spring     cubic-bezier(0.34, 1.56, 0.64, 1)
```

## A.8 Elevation

```
--elevation-0   none
--elevation-1   0 1px 2px  rgba(15,15,14,0.04)
--elevation-2   0 2px 8px  rgba(15,15,14,0.06)
--elevation-3   0 4px 16px rgba(15,15,14,0.08)
--elevation-4   0 8px 32px rgba(15,15,14,0.10)
--elevation-5   0 16px 48px rgba(15,15,14,0.12)
```

## A.9 Typography

```
--font-display  'Geist', 'Inter', system-ui, sans-serif
--font-body     'Inter', 'DM Sans', system-ui, sans-serif
--font-mono     'JetBrains Mono', 'Geist Mono', ui-monospace
--font-reading  'Newsreader', 'IBM Plex Sans', Georgia, serif

--font-size-12  0.75rem      --font-size-30  1.875rem
--font-size-14  0.875rem     --font-size-36  2.25rem
--font-size-16  1rem         --font-size-48  3rem
--font-size-18  1.125rem     --font-size-60  3.75rem
--font-size-20  1.25rem      --font-size-72  4.5rem
--font-size-24  1.5rem       --font-size-96  6rem
```

-----

# APPENDIX B — CURRENT BUILD STATE AUDIT

What is currently in place on endrare.com, and what needs work before v1.2 finalizes.

## B.1 In Place

- Warm near-white surface palette
- Math Sans / geometric wordmark treatment
- Restraint-led typographic hierarchy
- Case study reading layout with sidebar navigation
- Sectional whitespace at production-grade values
- Subtle hover affordances on interactive elements
- Editorial body typography for case study content

## B.2 Needs Formalization

- Full token migration: some values are still hard-coded; complete the move to `tokens.css`
- Motion duration and easing standardization across components
- Mobile responsive audit at 320px, 375px, 414px specifically
- `:focus-visible` style consistency across all interactive elements
- Component variants documented with TypeScript prop types
- `prefers-reduced-motion` coverage on every animated element
- Image dimensions audit (every `<img>` must have explicit `width`/`height`)

## B.3 To Build

- Glass nav: transparent at scroll top, blurred surface after 80px scroll
- Standardized scroll-reveal system with IntersectionObserver and 80ms stagger
- Documentation typography variant for any non-case-study long form
- Dark footer with the exact specifications in Section 13.3
- 404 page with HTTP 404 status
- 500 error boundary
- Loading state across routes
- Dynamic OG image generation per route
- RSS feed for case study index
- Schema.org JSON-LD on every route
- Accessibility test pass with axe DevTools

-----

# APPENDIX C — DESIGN DECISION CHECKLIST

A laminated-card version of the Ten Questions, formatted for quick reference during design or code review.

```
Before shipping any new UI element, verify:

[ ] Does this reduce cognitive load?
[ ] Is this visually necessary?
[ ] Is this timeless, not trendy?
[ ] Does this improve calmness?
[ ] Does this guide attention correctly?
[ ] Can this be simpler?
[ ] Is this functional, not decorative?
[ ] Does this preserve Endrare's identity?
[ ] Does this maintain readability?
[ ] Is this emotionally intelligent?

Then:
[ ] Could it be removed without loss? → Remove it.
[ ] Could it belong on a Vercel template? → Revise it.
[ ] Will it look correct in 2028? → Keep it.

Then check:
[ ] All values come from tokens, none hard-coded.
[ ] Hover, focus, and active states defined.
[ ] prefers-reduced-motion respected.
[ ] Contrast ≥ 4.5:1 for body, ≥ 3:1 for large.
[ ] Touch target ≥ 44px on mobile.
[ ] Image has explicit dimensions.
[ ] Copy follows headline / CTA / body rules.
[ ] No forbidden words in any visible text.
```

-----

## END NOTE

This is Version 1.2 — Unified Production Document. It supersedes all prior versions of the Endrare Master Design Rulebook. Every section is current. Every rule is enforceable. Every token reference matches `styles/tokens.css` on production.

Maintenance:

- This rulebook is versioned. Significant changes increment the version number.
- The companion file `ENDRARE_AGENT_RULES.md` is derived from this document and regenerated when this document changes — never edited independently.
- A quarterly audit reads the full live site against this rulebook and logs any drift.
- A “decision log” file in the repo records every design decision that diverged from a previous one, and why.

Authorship: this document carries the design logic of Endrare’s founder and the discipline of the contributors who maintain it. It is not a marketing artifact. It is the substrate of a product.

*— Endrare Master Design Rulebook v1.2*