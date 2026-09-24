# Emerald Grove Events & Spaces — Project Summary
**Version:** 1.4 | **Date:** September 2026  
**Brand:** Emerald Grove Events & Spaces  
**Domain:** emeraldgrove.co.in  
**Hosted on:** GitHub Pages  
**Built by:** Amarnath A (Marketing Strategist)  
**Client:** Deepti

---

## What has been built

### Website — 7 pages (vanilla HTML / CSS / JS, no framework, no build step)

| Page | File | Status | Notes |
|---|---|---|---|
| Home | index.html | Live | Hero, segments, amenities, capacity, how-it-works, value props, gallery preview, about teaser, FAQ, Instagram CTA |
| About | about.html | Live | Origin story, purpose/mission/vision, values, platform thesis |
| Gallery | gallery.html | Live | Masonry grid, 5 category filters, Sanity-powered (falls back to placeholders if Sanity not configured) |
| Contact | contact.html | Live | Enquiry form → Apps Script → Google Sheet + dual email; Google Maps embed; Get directions button |
| Policies | policies.html | Live — DRAFT | 6-section accordion: Booking, Cancellation/Refunds, Security Deposit, Venue Rules, T&C, Privacy |
| Pricing | pricing.html | Live — internal only | noindex + robots.txt Disallow; not linked anywhere; share by URL only |
| Brand Design System | brand-design-system.html | Internal | Single self-contained HTML file (CSS + JS inlined, 78KB); noindex; all 18 sections |
| 404 | 404.html | Live | GitHub Pages serves this automatically for any missing page |

### Shared infrastructure
- **components.js** — `<site-header>` and `<site-footer>` as Web Components; built once, injected into every page
- **config.js** — single source of truth for brand name, contact details, social links, Apps Script URL, Sanity credentials
- **variables.css** — all design tokens (colours, fonts, spacing, radius, motion) in one file
- **GTM** — container `GTM-KMZ6S8S` injected in all 6 public pages (head + noscript body snippets)
- **robots.txt** — blocks /pricing.html from crawlers
- **sitemap.xml** — 5 public pages listed
- **favicon.svg** — simplified emerald grove mark, ivory background

### Logo system
- `assets/images/logo/logo-light.png` — **PLACEHOLDER** — replace with emerald (#0F3D2E) mark on transparent BG
- `assets/images/logo/logo-dark.png` — **PLACEHOLDER** — replace with gold (#D4AF37) + sage (#8FA892) mark on transparent BG
- favicon.svg stays as-is (SVG, already correct)

### Apps Script (backend)
- **File:** apps-script-Code.gs
- **Live URL:** https://script.google.com/macros/s/AKfycbxD3HDXUvBdO9xPjfia7aIVOjfLG4oYTvL2u7EExDgEn0zK64OD4tIqZlqYapi9je6C3A/exec
- **What it does:** Receives form submissions → logs to Google Sheet → sends alert to both owner emails → sends confirmation to customer
- **Owner emails:** info@emeraldgrove.co.in and emeraldgrovevenue@gmail.com
- **Booking ID format:** EG-YYMMDD-0001 (sequential, not random)
- **Honeypot:** hidden field blocks bots silently

### Sanity CMS (gallery images)
- **Project:** EG | **Project ID:** 3ssnn7z8 | **Dataset:** production
- **⚠️ IMPORTANT:** This is currently under Amarnath's Sanity account. Before handover to client, create a new Sanity project under Deepti's account, copy the schema files across, and update config.js with the new project ID + update CORS origins
- **Schema:** galleryImage — fields: title, category (5 options), image (with hotspot), alt text, display order
- **Studio folder:** sanity-studio/ (inside the project folder, not pushed to GitHub)
- **To deploy Studio for Deepti:** run `npx sanity deploy` inside sanity-studio/ — gives a permanent URL like eg.sanity.studio
- **Gallery page behaviour:** fetches from Sanity on every page load; falls back to placeholder HTML if projectId = 'YOUR_PROJECT_ID'

### Social links (with UTM tracking)
- **Instagram footer:** utm_source=website&utm_medium=footer&utm_campaign=social
- **Instagram CTA button:** utm_source=website&utm_medium=cta_button&utm_campaign=social
- **YouTube footer:** utm_source=website&utm_medium=footer&utm_campaign=social

---

## What is still pending (ordered by priority)

### Blockers — must resolve before public launch

1. **Real venue photography**
   - Replace all picsum.photos placeholder images across Home, About, Gallery
   - Remove all "Placeholder photo" labels from image cards
   - Gallery images go via Sanity Studio (Deepti uploads them there)
   - Hero/About/segment card images are still hardcoded in HTML — swap src URLs directly

2. **Logo PNGs**
   - Export logo-light.png: mark in #0F3D2E (deep emerald) on transparent BG, min 400×400px
   - Export logo-dark.png: mark in #D4AF37 (gold) frame+chandelier with #8FA892 (sage) leaves, transparent BG, min 400×400px
   - Drop both files into assets/images/logo/ (placeholders already there with correct filenames)
   - The placeholder currently shows a dashed outline box — any uploaded PNG will replace it

3. **Policies legal review**
   - policies.html has a yellow draft notice banner at the top
   - Get a CA or solicitor to review the T&C, Refund, Privacy, and Deposit sections
   - Once reviewed: remove the draft-notice div from policies.html

4. **Registered entity name + address in Policies**
   - Two placeholder strings in policies.html T&C section:
     [registered legal entity name to be inserted once business registration is complete]
     [registered address]
   - Fill these once business registration is done

5. **Sanity account transfer**
   - Currently: Sanity project 3ssnn7z8 is under Amarnath's account
   - Action: Deepti creates a Sanity account → Amarnath creates a new project there → copy schema files → update config.js projectId → update CORS origins
   - OR: Amarnath adds Deepti as an admin to the existing project at sanity.io/manage → Members

6. **Deploy Sanity Studio for Deepti**
   - Run `npx sanity deploy` inside sanity-studio/
   - This gives a permanent URL (e.g. eg.sanity.studio) Deepti can bookmark
   - Without this, Studio only runs on Amarnath's laptop

7. **Map coordinates**
   - config.js has a placeholder JP Nagar 7th Phase pin (not the exact venue address)
   - Once venue is confirmed: update mapsEmbedSrc and mapsUrl in config.js with exact lat/lng

8. **Domain pointing**
   - GoDaddy domain (emeraldgrove.co.in) needs DNS pointed to GitHub Pages
   - Add CNAME record: www → YOUR-USERNAME.github.io
   - Add A records for GitHub Pages IPs (185.199.108.153 etc.)
   - Add custom domain in GitHub Pages settings

### Important — not blocking launch but do soon

9. **GTM → GA4 setup**
   - GTM container GTM-KMZ6S8S is live in all pages
   - Next: create a GA4 property at analytics.google.com
   - In GTM: Tags → New → Google Analytics 4 Configuration → paste GA4 Measurement ID → publish container
   - No code changes needed — GTM handles it

10. **Google Business Profile**
    - Name must exactly match: Emerald Grove Events & Spaces
    - Phone: +91 91876 61638
    - Address: No. 73, 2nd Cross, KR Layout, JP Nagar 6th Phase, Bangalore 560078
    - Inconsistency between GBP and website hurts local SEO

11. **OG / social share image**
    - When someone shares the site link on WhatsApp or Instagram, there's no preview image
    - Create a 1200×630px image: brand name + tagline on dark emerald background
    - Add to all HTML pages: `<meta property="og:image" content="https://emeraldgrove.co.in/og-image.jpg">`

12. **sitemap.xml → Google Search Console**
    - Submit https://emeraldgrove.co.in/sitemap.xml to Google Search Console
    - Do this after domain is live and indexed

13. **Facebook URL**
    - config.js has facebook: "#" placeholder
    - Update once Facebook page is created

14. **robots.txt — verify on GitHub Pages**
    - GitHub Pages serves robots.txt correctly from root
    - After domain goes live: check https://emeraldgrove.co.in/robots.txt loads correctly

### Nice to have — Phase 2

15. **Contact page on Sanity** — allow client to edit address, phone, response-time message without touching config.js
16. **Home page segment photos on Sanity** — currently hardcoded picsum URLs in index.html
17. **Testimonials section** — once real events have happened and reviews come in
18. **WhatsApp chat widget** — floating button → wa.me/919187661638; low effort, high conversion for venue bookings
19. **Instagram feed embed** — show @emeraldgrove.blr feed directly on the site (requires Meta Basic Display API or a third-party embed service)
20. **Pricing page access control** — currently anyone with the URL can see it; consider a simple password field if needed

---

## Tech stack reference

| Item | Detail |
|---|---|
| Frontend | Vanilla HTML / CSS / JS — no framework, no build step |
| Hosting | GitHub Pages |
| Domain registrar | GoDaddy |
| CMS | Sanity (gallery images only) |
| Form backend | Google Apps Script → Google Sheet |
| Analytics | GTM (GTM-KMZ6S8S) — GA4 not yet connected |
| Fonts | Playfair Display (headings) + Montserrat (body) via Google Fonts |
| Palette | Emerald #0F3D2E · Forest #2E5D46 · Sage #8FA892 · Sand #E9E1D4 · Gold #D4AF37 · Ivory #FAF7EF |
| Logo | PNG (placeholder) + favicon SVG |
| Brand Design System | brand-design-system.html (single self-contained file) |

---

## Key file locations

```
emerald-grove-site/
  index.html            Home page
  about.html            About page
  gallery.html          Gallery (Sanity-powered)
  contact.html          Contact + form + map
  policies.html         Policies (draft)
  pricing.html          Pricing (internal, noindex)
  404.html              404 error page
  brand-design-system.html  Brand doc (internal, noindex)
  config.js             ← SINGLE SOURCE OF TRUTH — edit this for any brand/contact change
  components.js         Header + footer Web Components
  gallery.js            Sanity fetch + filter logic
  contact.js            Form submission + map
  main.js               Scroll reveal + FAQ accordion
  variables.css         All design tokens
  base.css              Reset + layout primitives
  components.css        Header, footer, card styles
  home.css              Home page section styles
  favicon.svg           Browser tab icon
  robots.txt            SEO crawler rules
  sitemap.xml           5 public pages listed
  assets/images/logo/
    logo-light.png      ← PLACEHOLDER — replace with real PNG
    logo-dark.png       ← PLACEHOLDER — replace with real PNG
  apps-script-Code.gs   Google Apps Script source (not deployed to website)
  sanity-studio/        Sanity Studio (not pushed to GitHub, runs locally)
```
