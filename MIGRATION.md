# Glenn Lundy Website Migration

## Project Overview

Migrating glennlundy.com from Framer to a self-hosted Next.js site on Vercel.

**Target domain:** 800percent.life  
**Current staging:** m5.800percent.life (existing Vercel project)

## Why We're Migrating

1. Framer's design UI is slow and limiting
2. Want CLI-based development with AI assistance
3. Full control over hosting and code
4. The original code was AI-generated and pasted into Framer, so it's already portable React

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Inline styles (converted from Framer, can refactor to Tailwind later)
- **Hosting:** Vercel
- **Forms:** GoHighLevel (GHL) iframes - already work, no changes needed
- **Images:** Currently on Imgur (can migrate to /public later)

## Migration Process

### For Each Page:
1. Get the code from Framer's custom code component
2. Add `"use client"` directive at top
3. Replace local footer with `import Footer from "@/components/Footer"`
4. Update internal links: `glennlundy.com/*` → relative paths (`/*`)
5. Update external links: `M5.800percent.life` → `m5.800percent.life`
6. Create folder in `src/app/[route]/page.jsx`

### Link Conversion Pattern:
```
https://www.glennlundy.com/faq → /faq
https://www.glennlundy.com/800/training → /800/training
https://M5.800percent.life → https://m5.800percent.life
```

## Pages Migrated

- [x] `/` - Homepage
- [x] `/morning-5` - Morning 5 Planner (order page)
- [x] `/800` - 800% Elite Auto Club
- [x] `/800/wds-thank-you` - Thank you page
- [x] `/800/training` - Training materials
- [x] `/meet-the-team` - Team page

## Pages Remaining

Based on Framer structure, approximately 18 more pages:
- `/life` (with subpages)
- `/about`
- `/faq`
- `/blog`
- `/upcoming-events`
- `/media-kit`
- `/privacy-policy`
- `/contact`
- `/testimonials`
- Plus others in the Framer file tree

## Shared Components

### `src/components/Footer.jsx`
- Shared footer with social links
- All footer links use relative paths

### `src/components/ScrollIndicator.jsx`  
- Animated scroll-down chevron
- Used on homepage sections

## Deployment

### To Deploy:
1. Connect repo to Vercel: https://vercel.com/new
2. Import `kaceygoins/glennlundy`
3. Deploy (auto-detects Next.js)
4. Add custom domain: `800percent.life`

### DNS Setup (in GoDaddy):
1. Remove old forwarding rule
2. Delete GHL A records (15.197.225.128, 3.33.251.168)
3. Add Vercel DNS records
4. Keep `m5` CNAME for existing Vercel app

### glennlundy.com Redirect:
Move DNS to Cloudflare and add redirect rule:
`glennlundy.com/*` → `https://800percent.life/$1` (301)

## Notes

- GHL form embeds work as-is (iframe + script injection)
- Images on Imgur will continue working
- No Framer-specific code - all standard React
- Inline styles work but could be refactored to Tailwind for maintainability
