# Legal Nodes — Design System

Legal Nodes provides **expert legal support, accelerated by AI**. It positions itself as a startup's *"delegated legal department, built into your growth engine"* — a pay-per-task alternative to traditional law firms and DIY legal tools. The brand sits deliberately at the intersection of **human legal expertise** and **AI-enabled speed**, and the visual language is engineered to make complex legal topics feel simple, structured, and premium.

Audience: founders and operators of modern/tech startups (crypto, Web3, SaaS) handling incorporation, compliance, fundraising, IP, and cross-border structuring.

## Sources provided
All source material was delivered as image exports + one SVG (no codebase, no Figma link):
- `uploads/Homepage Final.png` — full marketing homepage (desktop + mobile).
- `uploads/Incorporate Your Tech Company in the UAE.png` — a Typeform-style landing/lead-capture page.
- `uploads/LN_LOGO_BLACK_CIRCLE.svg` — the logo (stacked wordmark inside a white circle). **The only vector asset.**
- Slide/template sets (PNG frames, ~16:9): `Roadmap *`, `Section.png`, `Article Cover /`, `Checklist Template/`, `Comparison Tables (Jurisdiction)/`, `Infographic Template/`.
- `Lead Magnet 8.5x11 (1)/` — a portrait (US Letter) lead-magnet document template.
- A written brand brief (colours, typography, layout, voice) supplied in the project prompt.

> There is no source code or Figma file. Screens here are recreated from the brief + image exports. Numeric values (paddings, radii) are visually estimated and tuned to the brief, not lifted from source.

---

## CONTENT FUNDAMENTALS

**Voice:** confident, plain-spoken, and reassuring. Legal Nodes translates intimidating legal jargon into founder-friendly language. It is an expert peer, not a stuffy law firm.

**Person / address:** speaks to the reader as **"you" / "your"** ("Your Delegated Legal Department", "built into your growth engine", "Track Progress"). Uses **"we"** for the company ("We embed legal into your GTM efforts", "We give you the capacity of a delegated legal department"). First-person-plural company + second-person reader.

**Tone examples (verbatim from source):**
- Hero: *"Your Delegated Legal Department, built into your **growth engine**"* (accent word highlighted).
- Empathy framing: *"To modern businesses, legal equals cost"* / *"We don't fault you when the traditional legal landscape looks like this."*
- Value prop: *"Legal Nodes offers a new approach to legal."*
- Model in one line: *"Pay for Tasks, not hours. No retainers. No surprises."*
- CTA copy: *"Schedule Free Discovery Call"*, *"Book Free Intro Call"*, *"Start Your UAE Incorporation"* — action-first, benefit-forward, often prefixed with **Free**.

**Casing:**
- Marketing headlines: **sentence case** ("Clear Comparison at a Glance", "Hear from Our Clients", "How it Works").
- Slide/template titles: **Title Case** ("We Assemble Tasks In A Roadmap", "Add Title Here. One Line Max.").
- Button labels: frequently **UPPERCASE with wide letter-spacing** ("SCHEDULE FREE DISCOVERY CALL", "START YOUR UAE INCORPORATION").
- Small labels / overlines: uppercase, wide-tracked ("TRUSTED BY", "LAUNCH LEVER", "EXPANSION LEVER").

**Copy style:** short. Headlines carry one idea; supporting lines are one or two sentences. Numbered process steps ("01 Submit a Request → 05 Track Progress"). Prefers concrete nouns ("Company Incorporation", "Bank Account Opening", "IP Protection") and quantified proof ("Save 60–80% vs retainers", "Join 400+ businesses", "3/4 Steps Complete", "32 Credits").

**Emoji:** **not used in marketing UI**. The template decks use a *small, functional* set — check ✅ / cross ❌ in comparison tables, and country **flag emoji** (🇺🇸 🇪🇺 🇬🇧 🇨🇦) as jurisdiction markers. Never decorative. Never in the product web UI.

**Vibe:** enterprise-ready but human-first. Clean, calm, precise. Never salesy-loud; confidence comes from clarity and whitespace, not exclamation marks.

---

## VISUAL FOUNDATIONS

**Overall feel:** clean, structured, modern, intelligent, minimal. Whitespace and typography do the work; decoration is avoided. Every section has a clear purpose.

**Colour**
- **Dark green `#0F2F36`** is the foundation — hero sections, navigation, primary surfaces, and full-bleed dark blocks. The brand alternates **dark-green sections** and **white/light-mist sections** down the page for rhythm.
- **White `#FFFFFF`** for content areas, cards, forms — creates breathing room and readability.
- **Light-mist `#E4E5E9`** is the light canvas for slides/templates (not pure white — a soft neutral gray).
- **Slate/light-blue `#456F78`** used sparingly for secondary text, borders, dividers, icons.
- **Yellow `#FFFC78`** is the accent — **only** for primary CTAs, key highlights, selected words in headings, and important stats. It must stay special; never let it dominate.
- **Category tint chips** appear in decks (roadmap/infographic): soft yellow, orange, blue, pink, teal-fill, gray — used to colour-code task types, not as brand colours.
- **Semantic:** success green `#6DB33F` (checks), danger red `#E5484D` (crosses).
- Max **1–2 background colours per artifact** (dark green + one light neutral).

**Imagery colour vibe:** professional, authentic, enterprise. Real people in real business environments (client testimonial portraits are natural, warm-neutral, not heavily graded). No generic staged stock. Only Legal-Nodes-provided or properly licensed imagery.

**Typography:** **Inter** throughout. Large, confident, **bold** headlines (700–800); regular-weight body. Strong hierarchy, generous line spacing, **left-aligned** by default (centered only on slide titles / covers). Headlines are near-black `#111` on light, white on dark, with the occasional yellow highlighted word.

**Backgrounds & motifs**
- **Concentric circles / rings** — the signature motif (echoes "nodes" / networks / expanding impact). Faint outline rings behind hero graphics and cover pages.
- **Contour / topographic wavy line textures** — subtle, very low-contrast, in the corners of light slides and behind hero areas.
- **Gradients** — deep teal→dark-green→near-black diagonal gradients on cover/section frames (`--ln-gradient-cover`). Used for dividers and lead-magnet backgrounds, not body content.
- **Flow diagrams / node maps** — dashed connectors linking boxes to a central node (infographic template).
- Isometric/system illustrations and simple line icons are endorsed by the brief for explaining concepts; used functionally, never decoratively.

**Cards:** clean thin borders (`1px` hairline), **minimal or no shadow**, consistent padding. On light surfaces, cards are white or light-mist with a `#DDE0E4` border. On dark surfaces, cards use a subtle `rgba(255,255,255,0.14)` hairline. Category cards in decks get a soft tint fill + a small type/credits chip row.

**Corner radii:** restrained. Buttons and CTAs are **rectangular to lightly rounded** (the hero CTA is a near-rectangular yellow block; app buttons ~6–10px). Cards ~10–14px. Chips/labels ~4–6px (near-square). Nothing is heavily pill-rounded except progress bars and small toggles.

**Borders & dividers:** hairline. Timeline uses a dashed connector with small ring nodes. Tables use light row separators with a dark-green header row.

**Shadows:** the brand explicitly prefers *minimal shadows or none*. Reserve a soft `0 2px 8px rgba(15,47,54,.08)` for floating cards (e.g. the hero dashboard widget); otherwise rely on borders and colour blocks.

**Buttons / hover / press:** primary = **yellow fill, dark-green text, high contrast**, uppercase wide-tracked label. Hover = slight darken of fill / subtle lift; press = slight shrink (scale ~0.98). Secondary/ghost buttons = outline on the current surface. Dark "Submit" buttons (near-black) appear in forms.

**Motion:** subtle and professional — short fades and eases (`cubic-bezier(.2,0,.2,1)`, ~120–320ms). **No bounce, no playful spring.** Progress bars fill; carousels slide.

**Layout rules:** large modular sections, strong alignment, consistent spacing, generous whitespace. Content max-width ~1200px. Alternating dark/light full-bleed bands. Fixed top nav on marketing site.

**Transparency & blur:** used lightly — hairline borders via translucent white on dark; faint background textures. No heavy glassmorphism.

---

## ICONOGRAPHY

- **No proprietary icon font or SVG icon set was provided** in the sources. The homepage uses a few simple **line/duotone glyphs** (briefcase, clock, target/pin) inside light chips for the "problems" section, and arrow glyphs (`→`) for process steps.
- **Recommendation & substitution:** use **[Lucide](https://lucide.dev)** (CDN) as the icon system — thin, consistent, modern line icons that match the brand's minimal line-icon direction. This is a **substitution**, flagged for the user; swap for the official set if Legal Nodes has one. Stroke weight ~1.75–2px, `currentColor`, sized 20–24px.
- **Functional emoji** are part of the *template/deck* language only: check ✅, cross ❌, and country flags (🇺🇸 🇪🇺 🇬🇧 🇨🇦) as jurisdiction markers. Do **not** introduce decorative emoji into product/web UI.
- **Arrows:** the brand uses a simple right arrow (`→`) for steps and links.
- **Logo mark:** the "legal nodes" stacked wordmark is the primary identity; a circular badge version exists for avatars/favicons. See `assets/`.

### Logo assets (`assets/`)
- `logo-wordmark-white.svg` — stacked wordmark, white (for dark-green surfaces). **Primary usage.**
- `logo-wordmark-black.svg` — stacked wordmark in brand green `#0F2F36` (for light surfaces).
- `logo-circle.svg` — black wordmark inside a white circle (avatar/badge/favicon).
- `logo-circle-green.svg` — green wordmark inside a white circle.

> Partner "trusted by" logos (Techstars, Google for Startups, Grow London, London & Partners, Mayor of London) appear in the sources but were only available baked into PNGs — **not** extracted. Request vector versions if needed.

---

## VISUAL LANGUAGE — quick reference
| Element | Treatment |
|---|---|
| Primary surface | Dark green `#0F2F36`, white text |
| Light surface | Mist `#E4E5E9` or white, near-black text |
| Accent | Yellow `#FFFC78` — CTAs & highlights only |
| Headlines | Inter Bold, large, left-aligned, sentence/Title case |
| Motif | Concentric rings + contour line textures |
| Cards | Hairline border, minimal/no shadow, ~10–14px radius |
| CTA | Yellow block, dark-green uppercase label |
| Motion | Subtle fades/eases, no bounce |

---

## COMPONENTS

Reusable React primitives, grouped by concern. No source codebase/Figma defined a component inventory, so this is a standard set **sized to what the Legal Nodes sources actually show** (CTAs, cards, forms, category chips, the dashboard stat widget, numbered process steps, the logo).

- **Button** (`components/actions/`) — yellow primary CTA + secondary / secondary-invert / dark / ghost; sizes; uppercase; icons.
- **Input** (`components/forms/`) — minimal white field, underline & boxed variants, invert for dark surfaces.
- **Card** (`components/content/`) — hairline-border surface: light / muted / dark / outline.
- **Badge** (`components/content/`) — category chip & credit counter; tints + solid + outline.
- **StatTile** (`components/content/`) — dashboard metric/progress widget (light / dark / accent).
- **ProcessStep** (`components/content/`) — numbered "01 → 05" step row.
- **Logo** (`components/brand/`) — stacked wordmark & circle badge, all tones (inline SVG).
- **LBALogo** (`components/brand/`) — **Legal Brain Academy** sub-brand lockups (horizontal, stacked, symbol, avatar).
- **Icon** (`components/brand/`) — Lucide line-icon wrapper.

### Intentional additions
- **Icon** — the sources ship no icon set; Lucide is adopted as a flagged substitute (see ICONOGRAPHY). Swap for the official set when available.

Namespace for `@dsCard` HTML: `window.LegalNodesDesignSystem_0002bb`.

## SUB-BRAND — Legal Brain Academy

**Legal Brain Academy** is the education sub-brand, endorsed "by Legal Nodes". Source: `uploads/Legal Brain Academy identity.pdf` (*Brand Identity Concept — Connected Brain · v2*).

**The mark — "Connected Brain".** Five circular nodes and six straight connections resolve into a hidden capital **B** (for Brain): a vertical spine of reasoning on the left, two connected bodies of knowledge branching right. Nothing is illustrated — the meaning sits entirely in the arrangement, so the mark stays abstract and holds at any size. The nodes are a direct inheritance from Legal Nodes: discrete capabilities linked into one system, applied here to knowledge rather than delivery. One node is larger and rendered in Soft Mint, joined by a single mint connection — the new insight, the AI-enabled step that turns knowledge into judgement. **It is the only accent in the system, which is what keeps it meaningful.**

**Palette** (own, distinct from the parent):
| Colour | Hex | Use |
|---|---|---|
| Deep Teal | `#0D3B45` | Primary surface, typography, all structure |
| Soft Mint | `#BFE6DD` | Accent only — one node, one line, the rules |
| Warm Off-White | `#F4F7F6` | Light canvas for reverse artwork |
| White | `#FFFFFF` | Cards, forms, and the mark on teal |

**Typography:** **Poppins** — geometric sans with softly rounded terminals, contemporary and approachable, sympathetic to the Legal Nodes wordmark. Bold for the name, Regular tracked **+0.2em** for ACADEMY, Regular with a bold parent-brand name for the endorsement. **Inter** carries body and UI text, as in the parent brand.

**Usage rules:** clear space equals the diameter of the accent node on all sides. Minimum symbol height **24px**; minimum horizontal lockup width **240px** — with the endorsement shown, that means `LBALogo` needs `height={66}` or greater for `variant="horizontal"`. Mint never fills more than one node, one line, and the endorsement rules. **No shadows, glows, 3D or gradients.** Never place the lockup on imagery without a solid teal or off-white panel behind it. At small sizes (76/44/24px) use a single ink — the accent node keeps its larger diameter so the mark stays legible; below 32px it fills solid.

**Lockups available:** primary horizontal, reverse horizontal, stacked, symbol (teal / white / mono), social avatar (teal squircle).
- **Symbol + avatar** ship as flat files: `assets/lba-symbol-teal.svg`, `-white`, `-mono-teal`, `-mono-white`, `lba-avatar.svg`.
- **Horizontal and stacked lockups are component-only** (`LBALogo`) — the wordmark is set live in Poppins, so there is no flat `lba-logo-horizontal-*.svg` / `lba-logo-stacked-*.svg` in this project even though the identity doc's editable-artwork list names them. Request those files from the brand owner (or ask me to outline the text) if you need self-contained SVG lockups for email or third-party tools.

> The symbol SVGs were **extracted from the PDF's own vector geometry** (node centres, radii, connection endpoints, 8-unit round-capped strokes) — not redrawn. The wordmark is set live in Poppins by the `LBALogo` component, so the horizontal/stacked lockups are components rather than flat SVGs.

## INDEX / manifest

Root:
- `styles.css` — global entry (import this one file). → `tokens/fonts.css`, `colors.css`, `typography.css`, `layout.css`, `subbrand-lba.css`.
- `readme.md` — this guide. `SKILL.md` — portable Agent-Skill wrapper.
- `thumbnail.html` — homepage tile.
- `assets/` — `logo-wordmark-white.svg`, `logo-wordmark-black.svg`, `logo-circle.svg`, `logo-circle-green.svg`; Legal Brain Academy: `lba-symbol-teal.svg`, `lba-symbol-white.svg`, `lba-symbol-mono-teal.svg`, `lba-symbol-mono-white.svg`, `lba-avatar.svg`.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `components/` — `actions/`, `forms/`, `content/`, `brand/` (see COMPONENTS).
- `ui_kits/marketing/` — homepage + lead-capture recreation.
- `slides/` — deck sample slides (title, roadmap, comparison, infographic, checklist, closing).
- `uploads/` — original source images + logo SVG (reference only).
