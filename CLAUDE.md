# CLAUDE.md — Frontend Website Rules

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

## Reference Images
- If a reference image is provided: match layout, spacing, typography, and color exactly. Swap in placeholder content (images via `https://placehold.co/`, generic copy). Do not improve or add to the design.
- If no reference image: design from scratch with high craft (see guardrails below).
- Screenshot your output, compare against reference, fix mismatches, re-screenshot. Do at least 2 comparison rounds. Stop only when no visible differences remain or user says so.

## Local Server
- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start the dev server: `node serve.mjs` (serves the project root at `http://localhost:3000`)
- `serve.mjs` lives in the project root. Start it in the background before taking any screenshots.
- If the server is already running, do not start a second instance.

## Screenshot Workflow
- Puppeteer is installed at `C:/Users/nateh/AppData/Local/Temp/puppeteer-test/`. Chrome cache is at `C:/Users/nateh/.cache/puppeteer/`.
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:3000`
- Screenshots are saved automatically to `./temporary screenshots/screenshot-N.png` (auto-incremented, never overwritten).
- Optional label suffix: `node screenshot.mjs http://localhost:3000 label` → saves as `screenshot-N-label.png`
- `screenshot.mjs` lives in the project root. Use it as-is.
- After screenshotting, read the PNG from `temporary screenshots/` with the Read tool — Claude can see and analyze the image directly.
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing

## Output Defaults
- Single `index.html` file, all styles inline, unless user says otherwise
- Tailwind CSS via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT`
- Mobile-first responsive

## Brand Assets
- Always check the `brand_assets/` folder before designing. It may contain logos, color guides, style guides, or images.
- If assets exist there, use them. Do not use placeholders where real assets are available.
- If a logo is present, use it. If a color palette is defined, use those exact values — do not invent brand colors.

## Anti-Generic Guardrails
- **Colors:** Never use default Tailwind palette (indigo-500, blue-600, etc.). Pick a custom brand color and derive from it.
- **Shadows:** Never use flat `shadow-md`. Use layered, color-tinted shadows with low opacity.
- **Typography:** Never use the same font for headings and body. Pair a display/serif with a clean sans. Apply tight tracking (`-0.03em`) on large headings, generous line-height (`1.7`) on body.
- **Gradients:** Layer multiple radial gradients. Add grain/texture via SVG noise filter for depth.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use spring-style easing.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Images:** Add a gradient overlay (`bg-gradient-to-t from-black/60`) and a color treatment layer with `mix-blend-multiply`.
- **Spacing:** Use intentional, consistent spacing tokens — not random Tailwind steps.
- **Depth:** Surfaces should have a layering system (base → elevated → floating), not all sit at the same z-plane.

## Hard Rules
- Do not add sections, features, or content not in the reference
- Do not "improve" a reference design — match it
- Do not stop after one screenshot pass
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color

---

# AutoRama Brand Assets

## Colors

### Primary Palette (Hex — used in JSX/Tailwind)
| Name | Hex | Usage |
|------|-----|-------|
| Brand Blue | `#3b5bdb` | CTAs, accents, borders, labels |
| Brand Blue Hover | `#4c6ef5` | Hover states |
| Background | `#000000` | Page background |
| Elevated BG | `#0a0a0f` | Cards, sections |
| Hover BG | `#101019` | Interactive card hover |
| Text Muted | `#9ca3af` | Secondary text, captions |
| Border | `#1a1a20` | Dividers, card borders |
| Sold Badge | `#6b7280` | Sold status badge |
| Destructive | `#dc2626` | Error states |

### CSS Variable System (HSL — shadcn tokens in `index.css`)
| Variable | Value |
|----------|-------|
| `--background` | `220 13% 9%` |
| `--foreground` | `210 40% 98%` |
| `--card` | `220 13% 12%` |
| `--primary` | `200 100% 65%` |
| `--accent` | `45 100% 65%` (gold) |
| `--gold` | `45 100% 65%` |
| `--gold-muted` | `45 80% 55%` |
| `--gold-dark` | `45 90% 45%` |
| `--muted-foreground` | `215 20% 65%` |
| `--automotive-dark` | `220 13% 6%` |
| `--automotive-darker` | `220 13% 4%` |

### Gradients
```css
--gradient-gold: linear-gradient(135deg, hsl(220 100% 65%), hsl(200 90% 45%));
--gradient-dark: linear-gradient(180deg, hsl(220 13% 12%), hsl(220 13% 6%));
--gradient-overlay: linear-gradient(180deg, rgba(0,0,0,0.8), rgba(0,0,0,0.4));
```

### Status Badge Colors
| Status | Color |
|--------|-------|
| For Sale | `#3b5bdb` |
| In Restoration | transparent + `#3b5bdb` border |
| Sold | `#6b7280` |

---

## Typography

| Role | Font | CSS Variable | Tailwind Class |
|------|------|-------------|----------------|
| Display / Headings | Bebas Neue, Oswald | `--font-display` | `font-display` |
| Condensed | Oswald | `--font-condensed` | `font-condensed` |
| Body | Inter | `--font-body` | `font-body` |
| Serif | Playfair Display | `--font-serif` | `font-serif` |

### Fluid Size Classes
| Class | Range |
|-------|-------|
| `fluid-display` | `clamp(2.75rem, 12vw, 5rem)` line-height 0.85 |
| `fluid-display-xl` | `clamp(3rem, 16vw, 12rem)` line-height 0.82 |
| `fluid-display-sm` | `clamp(2rem, 7vw, 5rem)` line-height 0.9 |

---

## Logo

`src/assets/autorama-logo.png`

---

## CSS Utility Classes

| Class | Effect |
|-------|--------|
| `text-brand` | `color: #3b5bdb` |
| `bg-brand` | `background-color: #3b5bdb` |
| `text-ghost` | Transparent + `1px rgba(255,255,255,0.08)` stroke |
| `text-ghost-strong` | Transparent + `1px rgba(255,255,255,0.15)` stroke |
| `text-gradient-gold` | Gradient gold text via background-clip |
| `writing-vertical` | `writing-mode: vertical-rl; transform: rotate(180deg)` |
| `car-image` | `mix-blend-mode: lighten` + radial-gradient mask for bg removal |
| `reveal` | Scroll-reveal start state (`opacity: 0; translateY(24px)`) |
| `reveal.is-visible` | Animated in state via IntersectionObserver |
| `shadow-gold` | `0 10px 30px -5px hsl(45 100% 65% / 0.3)` |
| `shadow-elegant` | `0 25px 50px -12px rgba(0,0,0,0.8)` |