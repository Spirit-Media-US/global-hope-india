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

### Completed — SEO Implementation, Wave 1 — 2026-04-28
Six source-only commits shipped to dev. Branch is now 6 ahead of main (plus this docs commit).

| SHA | Phase | Description |
|-----|-------|-------------|
| 908c792 | 1A | seo(projects): correct fallback wording for accountability list — defensive fallback at `projects.astro:73` now says "Over 85%" instead of "100%". Visible bug on live site is in Sanity, not source (see findings) |
| 24b9a5e | 1B | seo(meta): add twitter:site and twitter:creator tags sitewide — both `@GlobalHopeIndia` in Layout.astro |
| 2e30cbb | 1C | seo(privacy-policy): fix double-suffixed title, sync JSON-LD name — title is now `Privacy Policy \| Global Hope India` |
| ef747a1 | 1D | seo(get-involved): disambiguate title from homepage to fix cannibalization — homepage now owns `Donate to India Missions` exclusively |
| 1df4c15 | 1E | seo(give): add brand suffix to bibles and church-planting titles — both end with `\| GHI`, redundant tails dropped |
| 62c0ebe | 1F-i | seo(blog): enrich BlogPosting schema with dateModified and mainEntityOfPage — GROQ now projects `_updatedAt`, JSON-LD has new fields, OG `article:modified_time` meta added |

#### Heads-up for Vinit / future blog work
- `src/pages/blog/[slug].astro` GROQ now projects `_updatedAt` from Sanity. Preserve it in any future query changes — the BlogPosting `dateModified` field depends on it.

#### Findings surfaced during this wave (separate tickets)
- **Sanity has 11 blog posts, not 6.** PROJECT-STATUS.md is stale on the count.
- **`studio/schemaTypes/blogPost.ts` is missing the `externalImageUrl` field** that's live on the deployed Sanity schema (the GROQ at `src/pages/blog/[slug].astro:17` uses it via `coalesce(heroImage.asset->url, externalImageUrl)`). Running `sanity deploy` from this repo would drop the field from the live schema. Needs a separate sync commit before any future schema deploy.
- **Three different cities for GHI in source:** Cary (homepage NGO schema, footer address), Raleigh (`Layout.astro:294` legal banner), Morrisville (`projects.astro:67` accountability item). Pick one before any NonprofitOrganization schema enrichment. Needs Kevin's call.
- **`/projects/` Financial Accountability accordion still renders "100% of every dollar"** on the live page despite Phase 1A. The bug lives in a Sanity `accountabilityItem` document, not source. Source fallback was fixed defensively in 908c792; the live fix needs a Sanity Studio edit (separate task).

#### Phase 1 status
Source-only Phase 1 SEO work is complete. Remaining Phase 1 items are blocked on Kevin's input:
- NonprofitOrganization schema enrichment (needs city decision + EIN + founding date + logo URL)
- OG image expansion to per-page custom images (needs design direction)
- Sanity content edits (the `accountabilityItem` 100%/85% live fix; potentially others)

## Rules
- All work goes to the dev branch — never push directly to main
- Only merge dev to main when Kevin says "push to main"
- Read PROJECT-STATUS.md at the start of every session
- All donation links → https://givebutter.com/GlobalHopeIndia (external, never internal form)
- All images → R2 CDN or Sanity CDN (never in Git — blocked by .gitignore)
