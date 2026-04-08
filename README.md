# Spirit Media Site Template

> **Claude:** Always read `PROJECT-STATUS.md` at the start of every session before touching any code or making any claims about project state.

Astro + Tailwind + Sanity CMS starter for all Spirit Media Network sites.

## Site Checklist

### 1. Repo setup
- [x] Repo created under `Spirit-Media-US` org as `global-hope-india`
- [x] SANITY_AUTH_TOKEN — pending Sanity auth resolution

### 2. Sanity
- [x] Sanity project created (ID: `r33r2z1j`)
- [x] `src/lib/sanity.ts` configured with project ID
- [x] `sanity.config.ts` configured
- [x] Schema defined: `blogPost`
- [ ] Create `production` dataset (needs Sanity auth)
- [ ] Deploy schema to Sanity (needs Sanity auth)

### 3. Netlify
- [ ] Import repo in Netlify → assign to `Spirit-Media-US` org
- [ ] Add custom domain (globalhopeindia.org) + enable Cloudflare proxy
- [ ] Add Sanity build hook

### 4. Code
- [x] `astro.config.mjs` configured with `globalhopeindia.org`
- [x] `netlify.toml` configured with domain and CSP
- [x] Design tokens in `src/styles/global.css`
- [x] All 8 pages built with Sanity integration

## Stack
- **Astro** + Vite
- **Tailwind CSS** v4 (via `@tailwindcss/vite`)
- **Sanity** CMS (content), studio auto-deploys on push
- **Netlify** hosting (branch previews enabled)
- **Cloudflare** DNS + proxy

## Dev
```bash
npm install
npm run dev        # localhost:4321
npm run build      # production build to dist/
```
