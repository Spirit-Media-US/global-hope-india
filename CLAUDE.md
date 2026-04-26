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
