# Global Hope India — Site Inventory
> Phase 2: Content Extraction
> Extracted: 2026-04-07
> Source: https://globalhopeindia.org/

---

## URL Map

| URL | Page | Status |
|-----|------|--------|
| `/` | Home | Extracted |
| `/about-ghi/` | About | Extracted |
| `/projects/` | Projects | Extracted |
| `/get-involved/` | Get Involved | Extracted |
| `/impact/` | Impact | Extracted |
| `/privacy-policy/` | Privacy Policy | Extracted |
| `/magazine/` | Blog/Magazine index | Extracted (posts via Sanity) |
| External: `https://givebutter.com/GlobalHopeIndia` | Donate | External — no new page needed |

## Navigation Structure

**Primary Nav (header + mobile):**
- Home → `/`
- About → `/about-ghi/` → new: `/about`
- Projects → `/projects/` → new: `/projects`
- Get Involved → `/get-involved/` → new: `/get-involved`
- Impact → `/impact/` → new: `/impact`
- Donate → `https://givebutter.com/GlobalHopeIndia` (external)

**Footer links:**
- Donate Now → `https://givebutter.com/global-hope-india`
- Privacy Policy → `/privacy-policy/`

## Page Count
- Old site: 6 pages + blog posts (WordPress)
- New site: 6 pages + blog (Sanity/Astro)

## Key Features to Replicate
- Hero with tagline + headline + body + donate CTA
- Impact statistics counter (animated counters)
- GHI Magazine / blog grid (6 posts visible on homepage + /impact)
- "Celebrating 25+ Years" section
- Footer with contact info, social links, certification badges
- External donation: Givebutter platform (all donate links → givebutter.com)
- Social: Facebook, Twitter, YouTube, Instagram, Vimeo

## Forms
- No contact form found on site
- Prayer signup: "Send me prayer points" CTA on get-involved page (destination unclear — likely email/GHL)
- All donations: external Givebutter platform

## Blog/Magazine
- WordPress blog posts at root slugs (e.g. `/our-partners-in-india/`)
- New site: Sanity blogPost schema → `/blog/[slug]`
- Existing posts to migrate to Sanity (6 visible, likely more)
