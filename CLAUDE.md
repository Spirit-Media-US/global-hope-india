# Global Hope India

This site: Global Hope India | Repo: github.com/Spirit-Media-US/global-hope-india | Domain: globalhopeindia.org | Sanity ID: r33r2z1j

## Mandatory — Before Starting Work
Always start Claude sessions from inside this directory:
```
cd /srv/sites/global-hope-india && claude
```
Then run: `git checkout dev && git pull origin dev`

## Developer
- **Vinit** — assigned developer for this site (user: vinit on Bethel)

## Dev Commands
- npm run dev -- --port 4331 --host — local preview
- npm run build — production build (sanity build + astro build) to dist/

## Stack
- Astro 5 + Tailwind CSS v4
- Sanity Studio at `/studio` (static build via `sanity build public/studio`)
- Sanity project: r33r2z1j, dataset: production
- Cloudflare Pages: dev.global-hope-india.pages.dev (preview)
- GHL location: oPP9m0hKJpU6cFB7yD9w

## Design System (matched to original globalhopeindia.org)
- Font: Poppins (400, 500, 600, 700) — load from Google Fonts
- Primary text: #1D1C1C
- Accent/button: #FEC415 (yellow)
- Green accent: #2EAB5A
- Donate button: #06038D (deep indigo)
- Hero Jesus text: #f8c8Dc (soft pink)
- Hero India text: #77dd77 (soft green)
- Tagline bg: #F8F5EF
- Pink banner: #F8C8DC
- Stats/magazine bg: #F8F9F3

## Dev Server
- Port: 4331 (`npm run dev -- --port 4331 --host`)

## Media Assets
- All images: R2 CDN (assets.spiritmediapublishing.com/images/) or Sanity CDN (cdn.sanity.io)
- Videos: R2 CDN (assets.spiritmediapublishing.com/video/)
- .gitignore blocks *.jpg and *.png — NEVER put images in public/ for deployment
- Hero video: assets.spiritmediapublishing.com/video/indian-culture-global-hope-india.mp4
- Impacting video: assets.spiritmediapublishing.com/video/empowering-indias-church-global-hope-india.mp4

## Status — as of 2026-04-10
### LAUNCH READY
- All 13 pages built and deployed to Cloudflare Pages
- All images on R2 CDN (zero WordPress dependencies)
- 6 blog posts live in Sanity CMS with full content + hero images (externalImageUrl)
- Sanity schema deployed (blogPost with externalImageUrl field)
- Full SEO: meta tags, JSON-LD, OG, sitemap, robots.txt on all pages
- Mobile donate button bar matching original site layout
- All QA passes: zero errors, all images 200 OK, all links verified

### Remaining — Requires Kevin
- Connect custom domain globalhopeindia.org in Cloudflare Pages
- Create 2 GHL forms for Get Involved page (Prayer Request + Mission Trip Interest)
- Share Sanity Studio access with GHI staff
- Set up Sanity → Cloudflare Pages rebuild hook (if needed)
- UptimeRobot monitoring

## Rules
- All work goes to the dev branch — never push directly to main
- Only merge dev to main when Kevin says "push to main"
- Read PROJECT-STATUS.md at the start of every session
- All donation links → https://givebutter.com/GlobalHopeIndia (external, never internal form)
- All images → R2 CDN or Sanity CDN (never in Git — blocked by .gitignore)

---

## 100 Club commitments (locked — do not regress)

**100 Club bar (all pages, current and future — anything less is not acceptable):**
- **Homepage**: desktop 100/100/100/100, mobile 100/100/100 + Perf ≥ 95 (flagship, median-of-5)
- **Every other page**: mobile ≥ 90, desktop ≥ 95 (Google's "Good" zone, median-of-3)
- v4 execute plan brings the homepage into the 100 Club; inner pages are enforced by this site-wide tiered bar.

Every commitment below is a LOAD-BEARING structural decision. Do not "re-add" any of them without understanding the consequences.

### Hero image(s) are R2-only, NOT Sanity
- **URL pattern**: `https://assets.spiritmediapublishing.com/images/ghi-hero-poster-*.webp` (plus any other LCP images moved to R2 per this site's hero structure)
- **Why**: same origin as fonts (one TLS handshake), stable URL enables 103 Early Hints, hardcoded URL survives Sanity edits without rebuild
- **To change a hero**: upload a new WebP (matching sizes at matching quality) to the same R2 path. Any Sanity fields for the hero image have been removed from the schema — editors cannot change the hero via the CMS.

### CSS must stay wrapped in @layer base
- `Layout.astro`'s `<style is:inline>` wraps everything in `@layer base` except `@font-face` and `@keyframes`.
- **Why**: unlayered rules beat every `@layer` rule regardless of specificity. Tailwind v4 ships utilities in `@layer utilities`. If critical CSS is unlayered, `.grid-cols-1` overrides external `.lg:grid-cols-4` and grids collapse site-wide.

### ClientRouter is OFF
- No `<ClientRouter />`, no `import { ClientRouter }` in Layout.astro.
- **Why**: static marketing sites don't need SPA nav. Saves ~125ms forced reflow + ~100ms script eval on mobile.
- All page JS uses `DOMContentLoaded` with readyState guard.

### GA loads on first user interaction
- Events: scroll, mousemove, touchstart, keydown, click. 8s fallback timeout.
- **Why**: Lighthouse never interacts, so GA doesn't load in audits. Real users get GA after they engage (post-LCP).

### `<a>` elements on dark backgrounds MUST have an explicit default-state color class
- Base `a { color: var(--color-red|primary) }` rule in `global.css` otherwise applies → brand color on dark bg fails WCAG.
- Any new `<a href="tel:">`, `<a href="mailto:">`, or link in a dark section needs `text-stone-400` / `text-stone-100` / similar. `hover:text-*` doesn't protect the default state.

### `[data-animate]` transitions are transform-only, no opacity
- `global.css`: `transition: transform 0.65s cubic-bezier(...)`. **Do NOT add `opacity` back to the transition.**
- **Why**: Lighthouse captures frames mid-transition; a 0.65s opacity fade catches text at ~50% opacity → 40+ false color-contrast failures. Transform-only gives the same visual slide-in without the a11y artifact.
- If the site doesn't use `data-animate` at all, this commitment is preventive only.

### Early Hints, CSP, X-Robots-Tag in public/_headers
- `X-Robots-Tag: index, follow` overrides CF Pages' default `noindex` on `*.pages.dev`
- CSP allows CF Insights (`static.cloudflareinsights.com` in `script-src`, `cloudflareinsights.com` in `connect-src`) + all origins actually used by this site
- `Link:` headers for 2 critical fonts on `/*` + hero image on `/` → CF Pages promotes to HTTP/2 103 Early Hints

### Images: width/height attrs match urlFor dimensions
- Every below-fold `<img>` has both attrs. Any urlFor resize change must update the attrs in the same commit.
- `sizes` attribute = actual display width in px, NOT `100vw` (the latter forces over-delivery at DPR 2).

### Build pipeline
- `inlineStylesheets: 'auto'` (NOT `'always'`)
- `scripts/async-css.mjs` postbuild rewrites external CSS to `media="print" onload` swap (invoked from `package.json` build script)
- `scripts/100club-verify.mjs` post-build Playwright asserts grids + h-N images + console errors — blocks bad builds
- `/home/deploy/bin/100club-lint.sh` is wired into `lefthook.yml` pre-commit
- No `@playform/inline` / Beasties — incompatible with TW v4 utility-heavy markup
