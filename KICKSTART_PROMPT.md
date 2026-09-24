# Kickstart Prompt — Emerald Grove Website (New Claude Chat)

Paste this prompt at the start of a new Claude conversation, then attach SUMMARY.md and the emerald-grove-site.zip file. Claude will pick up exactly where we left off.

---

## Prompt to paste:

You are continuing an ongoing web development project for a client called **Emerald Grove Events & Spaces** — a flexible premium event and celebration venue in JP Nagar, Bangalore.

I am **Amarnath A**, the Marketing Strategist who has been building this site. I'll attach two files:
1. **SUMMARY.md** — the complete project record: what's been built, what's pending, all credentials and file locations
2. **emerald-grove-site.zip** — the current state of all website files

Please read SUMMARY.md fully before responding to anything. Treat it as the canonical source of truth for this project. Do not ask me to repeat information that's already in it.

### Project context (quick brief)
- **Brand:** Emerald Grove Events & Spaces
- **Domain:** emeraldgrove.co.in (on GoDaddy, pointed to GitHub Pages)
- **Stack:** Vanilla HTML / CSS / JS — no framework, no build step, flat files
- **CMS:** Sanity (project ID: 3ssnn7z8 — currently under my account, needs transfer to client)
- **Form backend:** Google Apps Script → Google Sheet → dual email alert
- **Analytics:** GTM container GTM-KMZ6S8S live in all pages; GA4 not yet connected
- **Design:** Playfair Display + Montserrat; palette is Emerald/Forest/Sage/Sand/Gold/Ivory

### How this project has been run
- All design decisions, palette, typography, logo, brand identity, SEO architecture, and code are documented in brand-design-system.html (inside the zip — single self-contained file)
- config.js is the single source of truth for all brand/contact/credentials — editing it propagates everywhere
- Header and footer are Web Components in components.js — never duplicated across pages
- Pricing page (pricing.html) is intentionally hidden from nav and noindexed — share by direct URL only
- The site has a fully self-contained brand design system at brand-design-system.html

### What's immediately needed (continue from here)
See SUMMARY.md section "What is still pending" for the full ordered list. The most common next tasks are likely:
- Swapping placeholder images with real venue photography
- Replacing logo PNG placeholders with real exports
- Removing the policies draft banner after legal review
- Transferring Sanity to client's account
- Deploying Sanity Studio permanently (`npx sanity deploy`)
- Connecting GA4 inside GTM

### Working style preferences
- Always do a QA verification pass (tag balance, JS syntax, local refs) before packaging
- Package deliverables as a zip with all site files flat (no subfolder nesting issues)
- Always present apps-script-Code.gs separately alongside the zip
- End each session with a "v1.X pending items" list
- Replace the pending list in SUMMARY.md with the updated version each session
- No em dashes anywhere — use en dashes throughout
- When editing files, show only what changes — do not rewrite entire files unnecessarily
- Brand design system stays as a single self-contained HTML file (CSS + JS inlined)

### Key credentials (also in SUMMARY.md)
- Apps Script URL: https://script.google.com/macros/s/AKfycbxD3HDXUvBdO9xPjfia7aIVOjfLG4oYTvL2u7EExDgEn0zK64OD4tIqZlqYapi9je6C3A/exec
- Sanity Project ID: 3ssnn7z8
- GTM Container: GTM-KMZ6S8S
- Public email: info@emeraldgrove.co.in
- Operational Gmail: emeraldgrovevenue@gmail.com
- Phone: +91 91876 61638
- Address: No. 73, 2nd Cross, KR Layout, JP Nagar 6th Phase, Bangalore 560078
- Instagram: @emeraldgrove.blr
- YouTube: youtube.com/@emeraldgroveeventsspaces

Now read SUMMARY.md and tell me what you see as the highest priority next action, then wait for my instruction.
