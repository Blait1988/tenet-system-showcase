

# Differentiating Tenet System from Delta Terminal

## The Problem

Looking at the Delta Terminal screenshots and the current Tenet System code, the similarities are clear:
- Same dark background + green accent pattern
- Same numbered card layout (01, 02, 03) in both Approach sections
- Same card-heavy, dashboard-like composition
- Same border/card styling with subtle borders on dark backgrounds
- Same monospace number styling
- Overall "monitoring tool" feeling rather than "parent company"

## Design Strategy

Tenet System needs to feel like **the company that owns Delta Terminal**, not its sibling. Think: Alphabet vs Google, LVMH vs Louis Vuitton, Berkshire Hathaway vs GEICO.

### Color Shift
- **Primary accent**: Move from blue `215 45% 48%` to a warmer, more refined tone — a **warm neutral / champagne gold** (`38 25% 58%`) as primary. This immediately separates it from Delta's cold green.
- **Background**: Slightly warmer dark — shift from blue-black `220 20% 4%` to a **neutral warm black** (`0 0% 5%`, `0 0% 8%`). Less "terminal", more "luxury".
- **Muted text**: Warmer greys instead of blue-tinted greys.
- **Product accents stay** per-product (violet for Tapper, cyan for FinGuard, green for Delta) — but the **company-level identity** uses warm gold/champagne, not any product color.

### Layout & Composition Changes
- **Hero**: Replace the CSS-block ecosystem diagram with something more **editorial** — a large typographic hero with a subtle gradient, no "node diagram". More Apple/Stripe corporate feel.
- **WhatIs Section**: Instead of 3 identical cards, use a more **editorial asymmetric layout** — large text block with side indicators.
- **Approach**: Remove the numbered `01/02/03/04` pattern (too similar to Delta's Monitoraggio/Validazione/Accesso). Use a **horizontal timeline** or **large text blocks** instead.
- **Products**: Make cards larger, more distinct, more "portfolio case study" style rather than SaaS feature cards.
- **WhySection**: More editorial — large statement typography rather than bordered cards.

### Typography
- Remove all monospace usage from headings and numbers
- Use Inter at larger sizes with tighter tracking for headings — more architectural
- Section labels: use small caps Inter instead of monospace

## Files to Modify

### 1. `src/index.css`
- Shift entire color palette to warm neutrals
- Primary: warm champagne/gold instead of blue
- Background: pure warm dark instead of blue-tinted dark
- Borders: warm grey instead of blue-grey

### 2. `tailwind.config.ts`
- Update any hardcoded color references

### 3. `src/components/HeroSection.tsx`
- Remove the `EcosystemVisual` component (CSS node diagram = too similar to Delta)
- Replace with a large editorial hero: massive headline, elegant subline, and a subtle **abstract gradient** or **geometric background element**
- More vertical breathing room, centered or asymmetric text layout
- Labels below CTAs rendered as a refined horizontal list, no card borders

### 4. `src/components/WhatIsSection.tsx`
- Replace 3 identical bordered cards with an **editorial grid**: one large statement left, three text items right (no card borders, just clean typography with thin dividers)

### 5. `src/components/ProductsSection.tsx`
- Make cards more portfolio-like: taller, with more vertical space
- Each card gets its own accent color bar (already there, keep it)
- Remove the uniform rounded-2xl bordered card look — use more editorial spacing with divider lines instead of full card borders

### 6. `src/components/ApproachSection.tsx`
- Remove the `01/02/03/04` numbered badge pattern (too Delta-like)
- Replace with a **2x2 or single-column editorial layout** with large titles and descriptive text, separated by horizontal rules

### 7. `src/components/WhySection.tsx`
- Replace the stack of bordered cards with **clean typographic list items** — large title + description, separated by thin lines. More editorial, less dashboard.

### 8. `src/components/AboutSection.tsx`
- Minor refinements to match new warm palette

### 9. `src/components/ContactSection.tsx`
- Adjust form styling to warm palette

### 10. `src/components/Navbar.tsx` & `src/components/Footer.tsx`
- Update CTA button color to match new primary

## Key Visual Differences After Refactor

| Aspect | Delta Terminal | Tenet System (new) |
|---|---|---|
| Accent color | Green | Warm champagne/gold |
| Background tone | Cold blue-black | Warm neutral black |
| Cards | Bordered dark cards | Editorial layouts with dividers |
| Numbers | Monospace 01/02/03 | No numbered steps |
| Hero visual | Dashboard mockup | Large typography + gradient |
| Overall feel | Product/tool | Corporate holding company |

