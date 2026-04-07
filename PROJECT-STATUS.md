# Global Hope India — Project Status & Knowledge Base
> Last updated: 2026-04-07
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

## Components — Sanity Integration Status
| Component | Fetches from Sanity | Notes |
|---|---|---|
| Footer.astro | — | phone, email, socials not yet wired |
| Navbar.astro | — | Logo hardcoded intentionally |

---

## Remaining Tasks
| Task | Priority | Notes |
|---|---|---|
| Phase 3: Build all pages | HIGH | See content/ directory for all content |
| Wire Sanity CMS (Phase 4) | HIGH | projectId: r33r2z1j |
| Kevin: download WP images | HIGH | Upload to Sanity after download |
| Add blogPost schema to Sanity | HIGH | Migrate 6+ posts from WordPress |
| GHL form integration | MEDIUM | Prayer signup, mission trip interest |
| Connect custom domain | HIGH | Netlify → globalhopeindia.org |
| Cloudflare proxy | HIGH | Enable after domain connected |
| Sanity → Netlify webhook | HIGH | Trigger rebuilds on content change |
| UptimeRobot monitoring | MEDIUM | Add after site is live |

---

## Completed & Confirmed
- [x] Phase 1: Infrastructure — GitHub repo, Netlify, Sanity project created (2026-04-07)
- [x] Phase 2: Content extraction — all pages extracted to content/ directory
- [ ] Phase 3: Build all pages
- [ ] Phase 4: Wire Sanity CMS
- [ ] Phase 5: CAR Gate
- [ ] Phase 6: Design Refinement
- [ ] Phase 7: QA
- [ ] Phase 8: Launch
- [ ] Phase 9: Client Delivery

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
