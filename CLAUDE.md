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
- npm run dev — local preview (port TBD — assign in astro.config.mjs)
- npm run build — production build to dist/

## Stack
- Astro 5 + Tailwind CSS v4
- Sanity Studio at `/studio` (static build via `sanity build public/studio`)

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
- Footer copyright bg: #F8F9F3

## Dev Server
- Port: 4331 (`npm run dev -- --port 4331 --host`)

## R2 Videos
- Hero: assets.spiritmediapublishing.com/video/indian-culture-global-hope-india.mp4 (live)
- Impacting: assets.spiritmediapublishing.com/video/empowering-indias-church-global-hope-india.mp4 (live, uploaded 2026-04-08)

## Status — as of 2026-04-08
### Completed
- Phase 1: Infrastructure — repo, Netlify, Sanity created
- Phase 2: Content extraction — all pages extracted to content/ directory
- Phase 3: Build all pages — 8 pages, build passes
- Phase 4: Wire Sanity CMS — Studio + schemas deployed, dataset live
- Phase 5: CAR Gate — GA4, OG image, JSON-LD, security headers, sitemap all verified
- Phase 6: Design Refinement — active nav, hero poster, removed broken .mov, removed duplicate banner
- Phase 7: QA — 22 images migrated WP CDN → Sanity, `<main>` landmark added, all audits pass
- Phase 8: Launch Prep — WP→Astro 301 redirects, Netlify/Sanity webhook/security headers verified
- Phase 9: Client Delivery — CLIENT-GUIDE.md, HANDOFF.md, LAUNCH-CHECKLIST.md
- Hero video migrated from WP CDN to R2
- Impacting section video uploaded to R2 (empowering-indias-church-global-hope-india.mp4)
- First deploy to main — merged 2026-04-08, Netlify auto-build triggered
- Phase 10: Design match to original site (2026-04-08) — full section-by-section comparison and update:
  - Navbar: indigo donate button, removed Blog link, font-semibold 16px links, no underline active state
  - Hero: soft pink/green text colors, text-stroke, text-shadow, rotateY flip, 100px text
  - Tagline: #F8F5EF bg, #F8C8DC pink banner
  - 25 Years: dark heading, white "25 Years" span, rounded corners, shadow, negative margin overlap
  - Impact Stats: #F8F9F3 bg, 35px counters, 30s animation, mobile vertical layout with green blobs
  - Impacting: 70vh height, 3% overlay, large badge overlapping top
  - GHI Magazine: #F8F9F3 bg, 5px radius cards, stronger shadows, 300px images, 26px titles, circular thumbnails, tag chips
  - Footer: light gray bg, indigo donate button, centered mobile, #F8F9F3 copyright bar, full horizontal logo

### Still Pending — Developer Tasks
- Connect custom domain in Netlify + Cloudflare DNS (globalhopeindia.org)
- Populate blog posts in Sanity Studio (migrate 6+ from WordPress)
- GHL form integration (prayer signup, mission trip interest)
- UptimeRobot monitoring (add after site is live)
- Sanity → Netlify rebuild webhook
- Add vinit's SSH key to GitHub repo (push currently blocked)

### Still Pending — Requires Kevin
- Share Sanity Studio access with GHI staff (manage.sanity.io > project r33r2z1j > Members > Invite)
- Add vinit's SSH pubkey as deploy key on Spirit-Media-US/global-hope-india

## Rules
- All work goes to the dev branch — never push directly to main
- Only merge dev to main when Kevin says "push to main"
- Read PROJECT-STATUS.md at the start of every session
- All donation links → https://givebutter.com/GlobalHopeIndia (external, never internal form)
- All images → Sanity (never in Git or public/)
