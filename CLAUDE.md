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

## Status — as of 2026-04-09
### Completed
- Phase 1–9: Infrastructure through Client Delivery (completed 2026-04-08)
- Phase 10: Design match to original site (2026-04-08)
- Phase 11: Full page rebuild + blog creation (2026-04-09):
  - **About page**: Hero text white + parallax, Our Team two-column layout with green leaf SVG, Statement of Faith two-column text with overlapping photo collage + parallax, removed yellow CTA
  - **Projects page**: Rebuilt from scratch — hero image (kids on swings), intro text, 3 project cards (Bibles/Orphan Care/Community Dev), Practical Resources checklist, 6 FAQ accordions, parallax on hero text
  - **Get Involved page**: Rebuilt — hero with Indian flag image + parallax, 3-column layout (Pray/Give/Go) with orange numbered badges, GHL form iframes for Pray and Go, Donate button for Give
  - **Impact page**: Rebuilt — hero image + parallax, 6 story cards (white bg, shadow, green titles 16px), Load More button with JS pagination, cream background
  - **Blog index**: Rebuilt to match SMP blog style — cream bg hero with 3x3 image grid, sticky search/filter bar with green chips, card design (16px green titles forced via inline !important, tags, excerpt, author+date, Read →), green pagination
  - **Blog post template**: Social share icons row, rectangular hero image, centered title + green date, body content, share bar, Leave a Reply comment form (green borders), 3 recent blog cards at bottom
  - **6 static blog posts created**: Our Partners in India, Support Key Projects in Manipur, Medical Camp Miracles, Hope for India's Special Needs (Raja's Home), Empowering the Deaf Community (DBM Nagaland), Elim School (Pastor Mayon Manipur)
  - **Homepage**: Replaced coin poster with Indian youth hero image, added preload=auto
  - **Global CSS**: html background white, body background white
  - **Hero images uploaded**: projects-hero.png, get-involved-hero.png, impact-hero.png

### Still Pending — Developer Tasks
- Connect custom domain in Netlify + Cloudflare DNS (globalhopeindia.org)
- Migrate 6 static blog posts into Sanity Studio (currently hardcoded in [slug].astro)
- GHL form integration (prayer signup, mission trip interest — iframes in place, need webhook URLs)
- UptimeRobot monitoring (add after site is live)
- Sanity → Netlify rebuild webhook
- Add vinit's SSH key to GitHub repo (push currently blocked)
- Comment form backend (currently frontend-only, needs API endpoint)

### Still Pending — Requires Kevin
- Share Sanity Studio access with GHI staff (manage.sanity.io > project r33r2z1j > Members > Invite)
- Add vinit's SSH pubkey as deploy key on Spirit-Media-US/global-hope-india

## Rules
- All work goes to the dev branch — never push directly to main
- Only merge dev to main when Kevin says "push to main"
- Read PROJECT-STATUS.md at the start of every session
- All donation links → https://givebutter.com/GlobalHopeIndia (external, never internal form)
- All images → Sanity (never in Git or public/)
