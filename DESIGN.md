# Design Decisions — Grayonix Studios Landing Page
**Recipe anchor**: Linear (Modern Tool / Builder SaaS) — adapted for Grayonix brand
**Design Read**:
- Artifact: landing page (Persuade mode)
- Audience: Android users seeking privacy-first AI growth tools
- Visual language: Linear-family warm dark, hairline detail, single accent
- Mode: greenfield
- Visual variance: 4/10 | Motion intensity: 3/10 | Information density: 5/10 | Asset dependence: 8/10 | Brand fidelity: 9/10

**Color Palette** (Linear base + Grayonix warm gold):
- Ground: #05070A (near-black warm)
- Surface 1: #0E1014
- Surface 2: #16191F
- Surface 3 (raised): #1E2229
- Hairline border: rgba(255,255,255,0.06)
- Primary text: #F0F4F9
- Secondary text: #A0ADB9
- Muted text: #707D8C
- **Accent (Grayonix gold): #D4A53A** — used on < 5% of pixels
- Accent strong: #E0BA65

**Typography**:
- Display: Archivo weight 800/900 (Google Fonts) — tight tracking -0.025em
- Body: Archivo weight 400/500, 16px base, line-height 1.7
- Mono: JetBrains Mono for tags, shortcuts, data
- Letter-spacing on display: -0.025em

**Spacing**: 4 / 8 / 12 / 16 / 24 / 40 / 64 / 96

**Radius**: 8 (small) / 12 (medium) / 16 (cards) / 24 (hero logo). Never above 24.

**Shadow**: minimal — 0 1px 2px rgba(0,0,0,0.3) on raised; 0 8px 24px -4px rgba(0,0,0,0.5) on hover. **No glow, no colored shadow.**

**Motion**: ease-out cubic-bezier(0.16, 1, 0.3, 1), 150ms hovers, 400ms reveals. Staggered scroll reveal (120ms). Respects prefers-reduced-motion.

**Signature moves** (Linear DNA + Grayonix brand):
1. Hairline 1px borders in rgba(255,255,255,0.06) on every panel
2. Real studio logo (assets/studio-logo.png) as the hero mark — not a colored box
3. Selective gold accent — focused states, tiny pills, key brand surfaces; never on backgrounds
4. App cards with real app icons, 4:3 media area, hairline separation
5. Trust bar with typographic values (3 / 100% / Private First) — no hero-stat template
6. Single CTA, solid gold button on dark ground (high contrast)
7. Bottom-pinned product screenshot approach: app icons in hero trust or app section

**Avoid** (Linear + Brand):
- Emoji
- Bouncy springs / elastic easings
- More than one saturated color (gold is the only accent)
- Border-radius above 24
- Gradient text, gradient backgrounds (hero is solid ground)
- Hero-metric template (big number + small label)
- Kicker/eyebrow above heading

**Checkpoint 1**: This system declared. Ready for v0 build.