

# Tenet System — Implementation Plan

The detailed plan was already approved. This is the implementation breakdown.

## Files to Create/Modify

### Theme & Config
1. **`src/index.css`** — Replace with dark premium theme (CSS variables for blacks, greens, greys), import Inter + JetBrains Mono from Google Fonts
2. **`tailwind.config.ts`** — Add custom colors, font families, animations (fade-in, slide-up)

### Layout & Shared Components
3. **`src/components/Navbar.tsx`** — Sticky navbar with "TENET SYSTEM" logo, anchor links, mobile hamburger, "Get in touch" CTA
4. **`src/components/Footer.tsx`** — Institutional footer with links and tagline
5. **`src/hooks/useScrollAnimation.ts`** — Intersection Observer hook for fade-in on scroll

### Homepage Sections (each a component)
6. **`src/components/HeroSection.tsx`** — Split layout, headline, CTAs, metric labels, ecosystem visual (CSS/SVG cards with connection lines)
7. **`src/components/WhatIsSection.tsx`** — Positioning text + 3 cards
8. **`src/components/ProductsSection.tsx`** — 3 large premium product cards (Tapper, FinGuard, Delta Terminal) with tags and hover effects
9. **`src/components/ApproachSection.tsx`** — 4-step process with numbered pillars
10. **`src/components/WhySection.tsx`** — 5 differentiator points
11. **`src/components/AboutSection.tsx`** — Company + founder block
12. **`src/components/ContactSection.tsx`** — Premium contact form (frontend-only)

### Pages
13. **`src/pages/Index.tsx`** — Compose all sections
14. **`src/pages/PrivacyPolicy.tsx`** — Placeholder legal page
15. **`src/pages/TermsOfService.tsx`** — Placeholder legal page
16. **`src/App.tsx`** — Add routes for legal pages

### Key Design Decisions
- All scroll animations via a shared `useScrollAnimation` hook using Intersection Observer
- Smooth anchor scrolling via `scroll-behavior: smooth` on html
- Product cards with subtle green accent borders on hover
- Ecosystem visual in hero built with positioned divs + SVG lines (no external images)
- Mobile hamburger with sheet/drawer for nav
- Font mono class for labels/numbers using JetBrains Mono
- No new dependencies needed — leveraging existing shadcn components (Button, Card, Input, Textarea, Checkbox, Sheet)

