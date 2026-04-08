# Global Hope India — Project Status & Knowledge Base
> Last updated: 2026-04-08 (evening — design match session)
> **Claude: Read this file before making any statements about project state or touching any code.**

---

## Stack
- **Framework:** Astro v5 + Tailwind CSS v4
- **CMS:** Sanity (projectId: `r33r2z1j`, dataset: `production`)
- **Hosting:** Netlify (Spirit-Media-US org)
- **DNS/Proxy:** Cloudflare (proxy status: PENDING — confirm after domain connect)
- **Email/CRM:** GoHighLevel (GHL)
- **Media:** Sanity CDN for images. YouTube for video. R2 for audio (if needed).
- **Repo:** `Spirit-Media-US/global-hope-india`
- **Studio:** https://global-hope-india.sanity.studio (TBC after Phase 1 deploy)
- **Original site:** https://globalhopeindia.org/ (WordPress)
- **Live domain:** globalhopeindia.org

---

## Site Identity
- **Organization:** Global Hope India (GHI)
- **Type:** 501(c)3 nonprofit, Christian missions
- **Location:** Cary/Morrisville, NC
- **Contact:** info@globalhopeindia.org | 919-438-2444 | 1-855-538-2444
- **Address:** PO Box 3251, Cary, NC 27519

---

## Design Tokens (verified against original site 2026-04-08)
- **Primary font:** Poppins (400, 500, 600, 700)
- **Primary text color:** #1D1C1C
- **Accent/button color:** #FEC415 (yellow)
- **Green accent:** #2EAB5A
- **Donate button:** #06038D (deep indigo — navbar + footer)
- **Hero Jesus text:** #f8c8Dc (soft pink, with text-stroke + shadow)
- **Hero India text:** #77dd77 (soft green, with text-stroke + shadow)
- **Tagline bg:** #F8F5EF
- **Pink banner:** #F8C8DC
- **Stats/magazine bg:** #F8F9F3
- **Footer copyright bg:** #F8F9F3
- **Background:** #FFFFFF
- **H1:** 100px desktop / 45px mobile (hero)
- **H2:** 50px desktop / 30px tablet / 26px mobile
- **Blog card title:** 26px
- **Body:** 16px, line-height 1.875em
- **Hero flip animation:** rotateY (horizontal flip, 3s interval)
- **Counter animation:** 30s duration, easeOutQuart

## R2 Videos (both live, served via assets.spiritmediapublishing.com)
| Video | R2 Path | Used In |
|-------|---------|---------|
| Hero background | video/indian-culture-global-hope-india.mp4 | index.astro hero section |
| Impacting section | video/empowering-indias-church-global-hope-india.mp4 | index.astro impacting section |

---

## Pages
| Page | Old URL | New URL | Status |
|------|---------|---------|--------|
| Home | `/` | `/` | Built, design-matched to original |
| About | `/about-ghi/` | `/about` | Built |
| Projects | `/projects/` | `/projects` | Built |
| Get Involved | `/get-involved/` | `/get-involved` | Built |
| Impact | `/impact/` | `/impact` | Built |
| Blog/Magazine | WordPress posts | `/blog/[slug]` | Built, wired to Sanity |
| Privacy Policy | `/privacy-policy/` | `/privacy-policy` | Built |

---

## Sanity Document Counts
| Type | Count | Notes |
|---|---|---|
| blogPost | 0 | Not yet populated |
| siteSettings | 0 | Not yet populated |

---

## Sanity Studio
- Location: `studio/` directory
- Schemas: `blogPost` (tags: Partners, Projects, Healthcare, Community, Education)
- Default author: "Global Hope India"
- Config: `sanity.config.ts` at root (projectId: r33r2z1j, dataset: production, basePath: /studio)

## Components — Sanity Integration Status
| Component | Fetches from Sanity | Notes |
|---|---|---|
| blog/index.astro | blogPost list | Search, tag filter, pagination — all wired |
| blog/[slug].astro | blogPost detail | Related posts, share bar, portable text — all wired |
| index.astro | Latest 6 blogPosts | Fallback to static cards when empty |
| Layout.astro (footer) | — | Contact info hardcoded (rarely changes) |
| Layout.astro (navbar) | — | Logo + links hardcoded intentionally |

---

## Remaining Tasks — Developer
| Task | Priority | Notes |
|---|---|---|
| Populate blog posts in Sanity Studio | HIGH | Migrate 6+ posts from WordPress |
| Connect custom domain | HIGH | Netlify domain config + Cloudflare CNAME → globalhopeindia.org |
| Cloudflare proxy | HIGH | Enable orange cloud after domain connected |
| Sanity → Netlify webhook | HIGH | Trigger rebuilds on content change |
| GHL form integration | MEDIUM | Prayer signup, mission trip interest — get webhook URL from GHL MCP |
| UptimeRobot monitoring | MEDIUM | Add after site is live |
| Push latest commits to remote | HIGH | vinit SSH key not on GitHub — blocked |

## Remaining Tasks — Requires Kevin
| Task | Priority | Notes |
|---|---|---|
| Share Sanity Studio access | MEDIUM | Invite GHI staff as Editors (manage.sanity.io > project r33r2z1j > Members) |
| Add vinit SSH key to GitHub | HIGH | Key: `ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIJE2PVFEJ1TvKtD0o1CQPKNBiN7JAHIsq7SGA4V0A7UF vinit@spiritmediapublishing.com` — add as deploy key on Spirit-Media-US/global-hope-india |

---

## Completed & Confirmed
- [x] Phase 1: Infrastructure — GitHub repo, Netlify, Sanity project created (2026-04-07)
- [x] Phase 2: Content extraction — all pages extracted to content/ directory (2026-04-07)
- [x] Phase 3: Build all pages — 8 pages built, `npm run build` passes (2026-04-07)
- [x] Phase 4: Wire Sanity CMS — Studio + schemas created, pages wired, dataset + schema deployed (2026-04-08)
- [x] Phase 5: CAR Gate — GA4 added, OG image fixed, logo upgraded, no placeholders, JSON-LD on all pages, security headers verified, sitemap correct (2026-04-08)
- [x] Phase 6: Design Refinement — active nav highlighting, hero video poster, removed broken .mov video, removed duplicate banner (2026-04-08)
- [x] Phase 7: QA — migrated 22 WP CDN images to Sanity, added `<main>` landmark, verified SEO/links/sitemap/accessibility/donation links/no placeholders, build clean (2026-04-08)
- [x] Phase 8: Launch Prep — WP→Astro 301 redirects, Netlify verified, Sanity webhook confirmed, security headers confirmed (2026-04-08)
- [x] Phase 9: Client Delivery — CLIENT-GUIDE.md, HANDOFF.md, LAUNCH-CHECKLIST.md created (2026-04-08)
- [x] Hero video migrated from WP CDN to R2 — assets.spiritmediapublishing.com/video/GHI-Site-Video-v3.mp4 (2026-04-08)
- [x] First deploy: dev merged to main, Netlify auto-build triggered (2026-04-08)
- [x] Phase 10: Design match to original site (2026-04-08 evening):
  - Uploaded Impacting video to R2 via rclone (empowering-indias-church-global-hope-india.mp4)
  - Navbar: #06038D indigo donate button, removed Blog link, 16px font-semibold links, no-underline active state, reduced height to 68px
  - Hero: soft pink (#f8c8Dc) / soft green (#77dd77) text colors, text-stroke + text-shadow, rotateY horizontal flip, 100px desktop text, separate .txt-for sizing (70px/25px)
  - Tagline: #F8F5EF bg, #F8C8DC pink banner, -mt-28 mobile overlap
  - 25 Years: #1D1C1C heading with white "25 Years" span, rounded-[10px], box-shadow, -mt-20 overlap
  - Impact Stats: #F8F9F3 bg, 35px counters, 30s animation, mobile vertical layout with green blobs + dashed path
  - Impacting: 70vh min-height, 3% overlay, large badge overlapping top (-top-5)
  - GHI Magazine: #F8F9F3 bg, rounded-[5px] cards, stronger shadows, min-h-[300px] images, 26px titles, circular thumbnails, green tag chips, excerpts on fallback posts
  - Footer: light gray bg, #06038D indigo donate button, green square social icons, centered mobile layout, full horizontal logo (250px), #F8F9F3 copyright bar with #1D1C1C text

---

## Key Rules (always apply)
- Never store video/audio in Git or public/ — YouTube for video, R2 for audio
- All images → Sanity (no local files in repo)
- Cloudflare CNAME records for mail subdomains must be DNS-only (grey cloud)
- Netlify import always defaults to personal account — switch to Spirit-Media-US org manually
- Use `astro:page-load` not `pageshow` for post-navigation scripts
- One session = one push = one Netlify build credit
- Always `npm run dev` and preview locally before pushing
- Update this file at the end of every session before the final push
- Donation links always external → `https://givebutter.com/GlobalHopeIndia`
