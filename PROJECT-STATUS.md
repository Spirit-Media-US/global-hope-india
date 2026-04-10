# Global Hope India — Project Status & Knowledge Base
> Last updated: 2026-04-10 (full launch prep — blog migration, image migration, QA complete)
> **Claude: Read this file before making any statements about project state or touching any code.**

---

## Stack
- **Framework:** Astro v5 + Tailwind CSS v4
- **CMS:** Sanity (projectId: `r33r2z1j`, dataset: `production`)
- **Hosting:** Netlify (site: `global-hope-india`, ID: `b6e92b54-d7b8-4fa6-b7a9-2ec93ce3cefc`)
- **DNS/Proxy:** Cloudflare (PENDING — custom domain not yet connected)
- **Email/CRM:** GoHighLevel (location: `oPP9m0hKJpU6cFB7yD9w`)
- **Media:** R2 CDN (`assets.spiritmediapublishing.com`) + Sanity CDN
- **Repo:** `Spirit-Media-US/global-hope-india` (public)
- **Live URL:** https://global-hope-india.netlify.app
- **Target domain:** globalhopeindia.org
- **Original site:** https://globalhopeindia.org/ (WordPress — still live)

---

## Site Identity
- **Organization:** Global Hope India (GHI)
- **Type:** 501(c)3 nonprofit, Christian missions
- **Location:** Cary/Morrisville, NC
- **Contact:** info@globalhopeindia.org | 919-438-2444 | 1-855-538-2444
- **Address:** PO Box 3251, Cary, NC 27519

---

## Pages (13 total)
| Page | URL | Source | Status |
|------|-----|--------|--------|
| Home | `/` | index.astro | LIVE — hero video, stats, blog cards from Sanity |
| About | `/about` | about.astro | LIVE — all sections, photo collage, parallax |
| Projects | `/projects` | projects.astro | LIVE — 3 cards, resources, 6 accordions |
| Get Involved | `/get-involved` | get-involved.astro | LIVE — Pray/Give/Go columns with forms |
| Impact | `/impact` | impact.astro | LIVE — fetches from Sanity, Load More JS |
| Privacy Policy | `/privacy-policy` | privacy-policy.astro | LIVE |
| 404 | `/404` | 404.astro | LIVE |
| Blog Post x6 | `/blog/[slug]` | blog/[slug].astro | LIVE — all from Sanity CMS |

---

## Sanity CMS
- **Schema:** `blogPost` (title, slug, excerpt, heroImage, externalImageUrl, author, publishDate, tags, body, seoTitle, seoDescription)
- **Tags:** Partners, Projects, Healthcare, Community, Education
- **Default author:** "Global Hope India"
- **externalImageUrl:** R2 CDN fallback when heroImage asset not uploaded
- **GROQ pattern:** `coalesce(heroImage.asset->url, externalImageUrl)` for images

### Blog Posts in Sanity (6 published)
| Slug | Title | Date | Image (R2 CDN) |
|------|-------|------|-----------------|
| our-partners-in-india | Our Partners in India | 2025-03-18 | ghi-ghi-blog-3-03.18.25.webp |
| support-key-projects-in-manipur | Support Key Projects in Manipur | 2025-03-18 | ghi-ghi-blog-2-03.18.25.webp |
| medical-camp-miracles-healing-bodies-and-souls | Medical Camp Miracles | 2025-03-18 | ghi-ghi-blog-1-03.18.25.webp |
| hope-for-indias-special-needs | Hope for India's Special Needs | 2025-03-04 | ghi-ghi-04.04.25-2.webp |
| empowering-the-deaf-community-the-mission-of-dbm-in-nagaland-india | Empowering the Deaf Community | 2025-03-04 | ghi-ghi-blog-03.04.25.webp |
| elim-school-supporting-pastor-mayons-mission-in-manipur | Elim School | 2025-03-04 | ghi-ghi-blog-03.04.25-3-1.webp |

---

## R2 CDN Images (all at assets.spiritmediapublishing.com/images/)
| File | Used In |
|------|---------|
| ghi-about-hero.webp | About hero |
| ghi-radical-group.jpg | About "Did Someone Say Radical" |
| ghi-began.jpg | About "How GHI Began" (was local, migrated 2026-04-10) |
| ghi-projects-hero.png | Projects hero (was local, migrated 2026-04-10) |
| ghi-get-involved-hero.png | Get Involved hero (was local, migrated 2026-04-10) |
| ghi-impact-hero.png | Impact hero (was local, migrated 2026-04-10) |
| ghi-bic-office.jpg | Footer office photo |
| ghi-img_4700-scaled.jpg | Get Involved Pray photo |
| ghi-img_2295-scaled.jpg | Get Involved Give photo |
| ghi-img_6300-scaled.jpg | Get Involved Go photo |
| ghi-20191230-img_8353cary-...jpg | About "How GHI Began" woman photo |
| ghi-201811_globalhopeindia_church-56-scaled.jpg | About Statement of Faith collage |
| ghi-201811_globalhopeindia_church-20-scaled.jpg | About Statement of Faith collage |
| ghi-20200106-img_0052cary-...jpg | About Statement of Faith collage |
| ghi-ghi-blog-*.webp (6 files) | Blog post hero images |

## R2 CDN Videos
| File | Used In |
|------|---------|
| video/indian-culture-global-hope-india.mp4 | Homepage hero |
| video/empowering-indias-church-global-hope-india.mp4 | Homepage "Impacting" section |

---

## Completed & Confirmed
- [x] Phase 1-9: Infrastructure through Client Delivery (2026-04-07 to 2026-04-08)
- [x] Phase 10: Design match to original site (2026-04-08)
- [x] Phase 11: Full page rebuild + blog creation (2026-04-09)
- [x] Phase 12: Launch prep (2026-04-10):
  - Fixed broken /contact link → mailto:info@globalhopeindia.org
  - Migrated 13 WordPress images to R2 CDN (zero WP dependencies)
  - Fixed 2 absolute globalhopeindia.org links → relative /
  - Removed /blog index page, redirected "See more blogs" → /impact
  - Matched homepage blog cards to Impact page design
  - Created robots.txt with sitemap reference
  - Fixed Vimeo footer link → correct profile URL
  - Added mobile donate button bar below header (matching original)
  - Fixed mobile spacing on About page Our Team section
  - Reverted Get Involved forms to original HTML (GHL integration post-launch)
  - Sanity schema deployed with externalImageUrl field
  - All 6 blog posts created, enriched with full content, published in Sanity
  - Migrated impact.astro from hardcoded array to Sanity fetch
  - Updated GROQ queries to use coalesce(heroImage.asset->url, externalImageUrl)
  - Migrated 4 local hero images to R2 (were blocked by .gitignore)
  - Full QA: 13 pages, all images 200 OK, all links verified, full SEO
  - Deployed to Netlify via PR merge (3 PRs total)

---

## Remaining — Requires Kevin
| Task | Priority | Notes |
|------|----------|-------|
| Connect custom domain | HIGH | Netlify domain config + Cloudflare CNAME → globalhopeindia.org |
| Create 2 GHL forms | MEDIUM | Prayer Request + Mission Trip Interest for Get Involved page |
| Share Sanity Studio access | MEDIUM | Invite GHI staff as Editors (manage.sanity.io > project r33r2z1j) |
| Sanity → Netlify webhook | MEDIUM | Auto-rebuild when blog posts are edited |
| UptimeRobot monitoring | LOW | Add after custom domain is live |

---

## Key Rules (always apply)
- Never store images in Git — .gitignore blocks *.jpg and *.png
- All images → R2 CDN or Sanity CDN
- Videos → R2 CDN (YouTube for embeds)
- Donation links → https://givebutter.com/GlobalHopeIndia
- All work on dev branch — only Kevin merges to main
- One push to main = one Netlify build credit
- Always `npm run build` before pushing
- Update this file at the end of every session
