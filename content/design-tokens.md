# Global Hope India — Design Tokens
> Phase 2: CSS Extraction
> Extracted from: https://globalhopeindia.org/ (live site computed styles)

---

## Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary` | `#1D1C1C` | Primary text, sticky header bg, button hover bg |
| `--color-accent` | `#FEC415` | Buttons, CTAs, highlights (bright yellow) |
| `--color-green` | `#2EAB5A` | Secondary accent (success, nature, India-green) |
| `--color-white` | `#FFFFFF` | Backgrounds, overlays, button text on dark |
| `--color-bg` | `#FFFFFF` | Page background |

**Notes:**
- No separate link color detected — links use accent yellow or primary dark
- Footer background: `#1D1C1C` (dark)
- Hero: appears to use full-bleed images with text overlay

## Typography

| Element | Font | Size (desktop) | Size (tablet) | Size (mobile) | Weight |
|---------|------|----------------|---------------|---------------|--------|
| Body | Poppins | 16px | 16px | 16px | 400 |
| H1 | Poppins | 70px | 50px | 35px | 700 |
| H2 | Poppins | 50px | 30px | 26px | 700 |
| H3 | Poppins | — | — | — | 600 |
| Nav links | Poppins | — | — | — | 500–600 |
| Button text | Poppins | — | — | — | 600–700 |
| Body line-height | — | 1.875em | — | — | — |

**Google Font:** `Poppins` (weights: 400, 500, 600, 700)

## Spacing (estimated from visual extraction)
- Section padding: ~80–120px top/bottom desktop, ~40–60px mobile
- Container max-width: ~1200px
- Grid gap: ~30px

## Buttons
- Background: `#FEC415` (yellow)
- Text: `#1D1C1C` (dark)
- Hover background: `#1D1C1C`
- Hover text: `#FFFFFF`
- Border radius: rounded (pill or slightly rounded)
- Font: Poppins 600–700

## Navigation
- Desktop: horizontal nav, sticky header with dark bg on scroll
- Mobile: hamburger menu
- Header background (sticky): `#1D1C1C`
- Logo: GHI logo (webp, from Sanity)

## Logo
- Source: `https://globalhopeindia.org/wp-content/uploads/2020/04/GHI-logo-150x150.webp`
- Also: scaled version at `/wp-content/uploads/2020/04/GHI-logo-scaled.webp`
- Upload to Sanity → use Sanity CDN URL in new site

## Hero Section
- Full-width image background
- Tagline: smaller text above headline
- H1: large white text
- Body: white/light text
- CTA button: yellow (`#FEC415`)

## Stats/Counters
- Animated number counters
- Icon per stat (SVG)
- Stats displayed: Donors, Amount Collected, Bibles, Mission Teams, Volunteers, Water Projects, Orphans Sponsored, Hygiene Kits, Lives Impacted
