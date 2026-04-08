# Global Hope India -- Launch Checklist

> For Kevin. Complete these steps in order to go live.

---

## Pre-Launch (Do Before Merging)

- [ ] **Upload hero video to R2**
  - Download: `https://globalhopeindia.org/wp-content/uploads/2023/12/GHI-Site-Video-v3.mp4`
  - Upload to R2 bucket: `spirit-media-assets/global-hope-india/GHI-Site-Video-v3.mp4`
  - Update `src/pages/index.astro` line 79: change the video `<source src="...">` URL to `https://assets.spiritmediapublishing.com/global-hope-india/GHI-Site-Video-v3.mp4`
  - Commit and push to dev

- [ ] **Populate blog posts in Sanity** (optional -- can do after launch)
  - Open Sanity Studio and create 3-6 posts from existing WordPress content
  - Or leave the fallback static cards on the home page until posts are added

---

## Launch (Domain Cutover)

- [ ] **Merge dev to main**
  - Run: `source /home/deploy/.secrets && gh api /repos/Spirit-Media-US/global-hope-india/merges -X POST -f base=main -f head=dev -f commit_message="Deploy: Global Hope India launch" && git checkout dev && git merge origin/main && git push origin dev`
  - Wait for Netlify build to complete (~2 minutes)
  - Verify at: https://global-hope-india.netlify.app

- [ ] **Connect custom domain on Netlify**
  - Netlify dashboard > Domain management > Add custom domain: `globalhopeindia.org`
  - Also add `www.globalhopeindia.org` (redirects to non-www via netlify.toml)

- [ ] **Update Cloudflare DNS**
  - Set CNAME record: `globalhopeindia.org` -> `global-hope-india.netlify.app` (proxied/orange cloud)
  - Set CNAME record: `www.globalhopeindia.org` -> `global-hope-india.netlify.app` (proxied/orange cloud)
  - Keep any existing mail-related DNS records (MX, SPF, DKIM) unchanged
  - Keep mail subdomain CNAME records as DNS-only (grey cloud)

- [ ] **Verify SSL**
  - Netlify should auto-provision Let's Encrypt cert
  - If using Cloudflare proxy, set SSL mode to "Full (strict)"
  - Test: `curl -I https://globalhopeindia.org` -- should return 200

---

## Post-Launch Verification

- [ ] **Check all pages load**
  - https://globalhopeindia.org
  - https://globalhopeindia.org/about
  - https://globalhopeindia.org/projects
  - https://globalhopeindia.org/get-involved
  - https://globalhopeindia.org/impact
  - https://globalhopeindia.org/blog
  - https://globalhopeindia.org/privacy-policy
  - https://globalhopeindia.org/studio/ (Sanity Studio)

- [ ] **Test redirects**
  - https://globalhopeindia.org/about-ghi/ -> should redirect to /about/
  - https://globalhopeindia.org/wp-admin -> should redirect to /studio/
  - https://www.globalhopeindia.org -> should redirect to non-www

- [ ] **Test donation link**
  - Click "Donate" in the nav -- should open Givebutter

- [ ] **Verify Google Analytics**
  - Visit the site, then check GA4 real-time report
  - Property: G-W3R21TNHTX

- [ ] **Add UptimeRobot monitor**
  - URL: https://globalhopeindia.org
  - Interval: 5 minutes
  - Alert contacts: Kevin

- [ ] **Test Sanity webhook**
  - Create or edit a blog post in Sanity Studio
  - Verify Netlify build triggers automatically
  - Verify the change appears on the live site within ~2 minutes

---

## Client Handoff

- [ ] **Share Sanity Studio access** with GHI staff (Google account authorization)
- [ ] **Send CLIENT-GUIDE.md** to GHI team (blog content management instructions)
- [ ] **Send HANDOFF.md** to GHI leadership (site overview and architecture reference)
- [ ] **Confirm GHI can create/edit/publish a blog post** independently

---

## Notes

- CSP allows `globalhopeindia.org` as an image/media source -- once the video is on R2, you can remove `globalhopeindia.org` from the `media-src` directive in `netlify.toml` if desired
- The old WordPress site should stay up briefly as a fallback, then can be decommissioned after confirming everything works
- Each push to main = 1 Netlify build credit (1,000/month). The Sanity webhook also uses build credits, so be aware if publishing many posts rapidly
