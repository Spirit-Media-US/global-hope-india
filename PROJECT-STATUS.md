# Global Hope India — Project Status & Knowledge Base
> Last updated: 2026-04-08
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

## Design Tokens (from Phase 2 extraction)
- **Primary font:** Poppins (400, 500, 600, 700)
- **Primary text color:** #1D1C1C
- **Accent/button color:** #FEC415 (yellow)
- **Green accent:** #2EAB5A
- **Background:** #FFFFFF
- **Footer/header dark bg:** #1D1C1C
- **H1:** 70px desktop / 50px tablet / 35px mobile
- **H2:** 50px desktop / 30px tablet / 26px mobile
- **Body:** 16px, line-height 1.875em

---

## Pages
| Page | Old URL | New URL | Status |
|------|---------|---------|--------|
| Home | `/` | `/` | Phase 3 — not built |
| About | `/about-ghi/` | `/about` | Phase 3 — not built |
| Projects | `/projects/` | `/projects` | Phase 3 — not built |
| Get Involved | `/get-involved/` | `/get-involved` | Phase 3 — not built |
| Impact | `/impact/` | `/impact` | Phase 3 — not built |
| Blog/Magazine | WordPress posts | `/blog/[slug]` | Phase 3 + Sanity |
| Privacy Policy | `/privacy-policy/` | `/privacy-policy` | Phase 3 — not built |

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

## Remaining Tasks
| Task | Priority | Notes |
|---|---|---|
| Upload hero video MP4 to R2 | HIGH | Last WP CDN reference: `GHI-Site-Video-v3.mp4` on home hero — Kevin uploads to R2, then update index.astro:79 |
| Populate blog posts in Sanity Studio | HIGH | Migrate 6+ posts from WordPress |
| GHL form integration | MEDIUM | Prayer signup, mission trip interest |
| Connect custom domain | HIGH | Netlify → globalhopeindia.org |
| Cloudflare proxy | HIGH | Enable after domain connected |
| Sanity → Netlify webhook | HIGH | Trigger rebuilds on content change |
| UptimeRobot monitoring | MEDIUM | Add after site is live |

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
