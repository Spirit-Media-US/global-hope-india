# Global Hope India

This site: Global Hope India | Repo: github.com/Spirit-Media-US/global-hope-india | Domain: globalhopeindia.org | Sanity ID: r33r2z1j

## Dev Commands
- npm run dev — local preview (port TBD — assign in astro.config.mjs)
- npm run build — production build to dist/

## Stack
- Astro 5 + Tailwind CSS v4
- Sanity Studio at `/studio` (static build via `sanity build public/studio`)

## Design System
- Font: Poppins (400, 500, 600, 700) — load from Google Fonts
- Primary text: #1D1C1C
- Accent/button: #FEC415 (yellow)
- Green accent: #2EAB5A
- Dark bg (header/footer): #1D1C1C
- White: #FFFFFF

## Status — as of 2026-04-08
### Completed
- Phase 1: Infrastructure — repo, Netlify, Sanity created
- Phase 2: Content extraction — all pages extracted to content/ directory
- Phase 3: Build all pages — 8 pages, build passes
- Phase 4: Wire Sanity CMS — Studio + schemas deployed, dataset live
- Phase 5: CAR Gate — GA4, OG image, JSON-LD, security headers, sitemap all verified
- Phase 6: Design Refinement — active nav, hero poster, removed broken .mov, removed duplicate banner

### Still Pending
- Migrate ~30 WP CDN images to Sanity (will break when domain migrates)
- Phase 7–9: QA, Launch, Delivery

## Rules
- All work goes to the dev branch — never push directly to main
- Only merge dev to main when Kevin says "push to main"
- Read PROJECT-STATUS.md at the start of every session
- All donation links → https://givebutter.com/GlobalHopeIndia (external, never internal form)
- All images → Sanity (never in Git or public/)
