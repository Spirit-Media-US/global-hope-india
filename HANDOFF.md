# Global Hope India -- Site Handoff Document

> Prepared by Spirit Media Publishing, April 2026

---

## Site Overview

| Detail | Value |
|--------|-------|
| **Organization** | Global Hope India (GHI) |
| **Domain** | globalhopeindia.org |
| **Framework** | Astro 5 + Tailwind CSS v4 |
| **CMS** | Sanity (content editing) |
| **Hosting** | Netlify (auto-deploys on code changes) |
| **CDN/DNS** | Cloudflare |
| **Analytics** | Google Analytics 4 (GA4) |

---

## Key URLs

| Resource | URL |
|----------|-----|
| **Live site** | https://globalhopeindia.org |
| **Netlify preview** | https://global-hope-india.netlify.app |
| **Sanity Studio** | https://globalhopeindia.org/studio/ |
| **GitHub repo** | https://github.com/Spirit-Media-US/global-hope-india |
| **Netlify dashboard** | https://app.netlify.com/sites/global-hope-india |
| **Sanity project** | https://www.sanity.io/manage/project/r33r2z1j |
| **Donation page** | https://givebutter.com/GlobalHopeIndia |

---

## Pages

| Page | URL | Description |
|------|-----|-------------|
| Home | `/` | Hero video, mission statement, impact stats, latest blog posts |
| About | `/about` | Vision, mission, cultural values, history, statement of faith |
| Projects | `/projects` | Funded project areas, partner churches, stewardship |
| Get Involved | `/get-involved` | Pray, Give, Go sections with CTAs |
| Impact | `/impact` | Impact statistics, blog highlights, donation CTA |
| Blog | `/blog` | Searchable, filterable blog index with pagination |
| Blog Post | `/blog/[slug]` | Individual post with share bar, related posts, donation CTA |
| Privacy Policy | `/privacy-policy` | Standard privacy policy |
| 404 | `/404` | Custom error page |

---

## Content Management

### What GHI Staff Can Edit (via Sanity Studio)

- **Blog posts**: Add, edit, delete. Changes go live automatically within minutes
- **Images**: Upload directly in Sanity Studio. Auto-optimized and served via Sanity CDN

### What Requires Spirit Media

- Page content changes (text, layout, sections on non-blog pages)
- Navigation links
- Design changes
- New pages
- Form integrations
- Domain/DNS changes

---

## Architecture

```
globalhopeindia.org
    |
    |-- Cloudflare (DNS, SSL, CDN)
    |-- Netlify (hosting, builds)
    |       |-- GitHub repo (source code on main branch)
    |       |-- Auto-deploys on push to main
    |
    |-- Sanity CMS (content)
    |       |-- Blog posts (client editable)
    |       |-- Images (client uploadable)
    |       |-- Webhook --> triggers Netlify rebuild on publish
    |
    |-- Google Analytics 4
            |-- Property ID: G-W3R21TNHTX
```

---

## Automated Workflows

| Trigger | What Happens |
|---------|--------------|
| Blog post published/updated in Sanity | Sanity webhook triggers Netlify rebuild. Site updates within ~2 minutes |
| Code pushed to `main` branch on GitHub | Netlify auto-builds and deploys |
| Code pushed to `dev` branch | No production deploy (dev is for staging) |

---

## SEO Features

- **JSON-LD structured data** on all pages (Organization, Blog, BlogPosting)
- **Open Graph + Twitter Card meta** on all pages
- **XML Sitemap** auto-generated at `/sitemap-index.xml`
- **Canonical URLs** on all pages
- **Per-post SEO fields** (custom title + description in Sanity)
- **301 redirects** from old WordPress URLs to new Astro URLs

---

## Security

- **Content Security Policy (CSP)** restricts script/image/font sources
- **X-Frame-Options**: SAMEORIGIN (prevents clickjacking)
- **X-Content-Type-Options**: nosniff
- **Referrer-Policy**: strict-origin-when-cross-origin
- **Permissions-Policy**: camera, microphone, geolocation disabled
- **HTTPS enforced** via Cloudflare + Netlify

---

## Third-Party Services

| Service | Purpose | Account |
|---------|---------|---------|
| **Netlify** | Hosting + deploys | Spirit Media org |
| **Sanity** | CMS (blog content + images) | Project ID: r33r2z1j |
| **Cloudflare** | DNS + SSL + CDN | Spirit Media account |
| **Google Analytics** | Traffic analytics | admin@spiritmedia.us |
| **Givebutter** | Donation processing | GHI's own account |
| **GitHub** | Source code | Spirit-Media-US org |

---

## Support

Spirit Media Publishing manages all technical aspects of this site.

- **Content questions**: See CLIENT-GUIDE.md for Sanity Studio instructions
- **Technical issues**: Contact Spirit Media Publishing
- **Domain/DNS**: Managed by Spirit Media via Cloudflare

---

## Maintenance Notes

- **Node.js version**: 20 (set in netlify.toml)
- **Sanity Studio**: Built as static files in `/public/studio/` during each deploy
- **Images**: All served from Sanity CDN (`cdn.sanity.io`). No images stored in Git
- **Video**: Hero background video served from Cloudflare R2 (`assets.spiritmediapublishing.com`)
- **Fonts**: Google Fonts (Poppins 400/500/600/700)
