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

### Completed — SEO Implementation, Wave 2 — 2026-05-01
Six more source-only commits shipped to dev on top of Wave 1. Branch is now 13 ahead of main (plus this docs commit).

| SHA | Phase | Description |
|-----|-------|-------------|
| 35fd39e | 2A | seo(homepage): trim title from 67 to 53 chars per audit Priority #2 — dropped trailing `\| GHI` from homepage `<title>` only; Layout-derived og:title and twitter:title update in lockstep. Other pages keep their suffix |
| ecd2157 | 2B | seo(meta): remove keywords tag sitewide per audit Additional Recs — 13 deletions across 11 files; Layout.astro Props interface tightened so re-adding `keywords=` will fail astro check (intentional guardrail). `/blog` index used inline tag (bypasses Layout pattern) — also removed |
| b2a3062 | 2C | seo(blog): add ItemList schema enumerating all 11 posts on /blog — sibling JSON-LD added to existing Blog block; iterates `rawSanityPosts` for ISO `datePublished`, NOT `sanityPostsFormatted` (display dates) |
| 3d5b4f7 | 2D | seo(projects): replace generic H1 with keyword-led version per audit — `Church Project: Building Faith & Community` → `Give to India Missions — Bibles, Orphan Care & Church Planting`. `<br/>` break preserved (hero was sized for two-line H1) |
| 5e70d32 | 2E | seo(get-involved): promote Pray/Give/Go from H3 to H2 per audit — three single-tag swaps; Tailwind sizing was explicit so render is byte-identical, document outline now H1 → H2,H2,H2 |
| 31706ce | 2F | seo(get-involved): add intro paragraph above Pray/Give/Go columns — verbatim audit copy added; styling mirrors /projects intro-paragraph pattern (`text-[#444] text-base lg:text-lg leading-relaxed`, `max-w-4xl mb-12 lg:mb-16`) |

#### Heads-up for Vinit / future contributors
- **`/blog` schema iterates `rawSanityPosts`, not `sanityPostsFormatted`.** The two arrays in `src/pages/blog/index.astro` exist for distinct purposes: `rawSanityPosts` keeps Sanity's ISO `YYYY-MM-DD` dates that Schema.org `datePublished` requires; `sanityPostsFormatted` has human-readable display dates for the visible UI. Both Wave 1's BlogPosting enrichment (62c0ebe) and Wave 2's ItemList (b2a3062) depend on this split. Don't merge them.
- **`Layout.astro` no longer accepts a `keywords` prop.** The Props interface entry, destructure, and conditional render were all deleted in 2B. Re-adding `keywords="..."` on any page will fail `astro check`. This is intentional — the audit confirmed the meta tag is dead weight and we want a build-time guard against re-introduction.
- **Intro-paragraph styling convention now established on two pages.** `/projects` and `/get-involved` both use `text-[#444] text-base lg:text-lg leading-relaxed` inside a `max-w-4xl` container with `mb-12 lg:mb-16`. If a future page needs an intro paragraph, mirror this rather than reinventing.

#### Findings surfaced during this wave (separate tickets)
- **`/projects` Financial Accountability accordion still renders "100% of every dollar"** on the live site. Wave 1's commit 908c792 fixed only the defensive source fallback at `projects.astro:73` ("Over 85%"); the visible bug lives in a Sanity `accountabilityItem` document. Edit needs Sanity Studio access — currently in Kevin's queue. This is Audit Priority #1 and the only audit-flagged item still outstanding.
- **Audit enumeration drift in three places** — all within audit intent, none byte-exact:
  - 2A: homepage title shipped at 51 chars, not 53 (commit body recorded 53; the audit's input stat of 67 was correct)
  - 2D: shipped H1 differs from audit's prescribed copy in two small ways — sans terminal period, and with a manual `<br/>` break landing on the em-dash (preserved the existing two-line H1 typography that the hero layout was designed around)
  - 2F: prescribed paragraph is 292 chars; audit estimated "~340"
  Recording transparently so the next person reading the commits doesn't re-verify and conclude something is wrong.

#### Phase 2 status
Source-side audit-actionable work is complete for Global Hope India. Remaining items are genuinely Kevin-blocked:
- **Sanity content edit** for the 85% / 100% accordion fix (Studio access required; Audit Priority #1)
- **Accessibility 95 → 100** contrast tweaks would be a separate commit (touches perf-traits territory — needs Kevin's call on whether to spend cycles given current Lighthouse score is already in the green zone)

## Rules
- All work goes to the dev branch — never push directly to main
- Only merge dev to main when Kevin says "push to main"
- Read PROJECT-STATUS.md at the start of every session
- All donation links → https://givebutter.com/GlobalHopeIndia (external, never internal form)
- All images → R2 CDN or Sanity CDN (never in Git — blocked by .gitignore)
