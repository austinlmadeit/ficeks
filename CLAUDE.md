# Claude Code Instructions — Ficek Insurance Redesign

This repository contains the complete Next.js website for **Ficek Insurance**, an independent brokerage in Brandon, Manitoba, Canada.

- **GitHub Repository**: `https://github.com/austinlmadeit/ficeks.git` (branch: `main`)
- **Production URL**: `https://www.ficekinsurance.com`
- **Detailed Handoff Guide**: Read [HANDOFF_INSTRUCTIONS.md](./HANDOFF_INSTRUCTIONS.md) for full context.

## Common Commands

```bash
# Development
npm run dev

# Production Build & Verification
npm run build

# Linting
npm run lint

# Deploy to Vercel Production
npx vercel --prod --yes
```

## Tech Stack & Architecture

- **Next.js 16.2.12** (App Router, Turbopack) & **React 19.2.4**
- **Single Source of Truth**: `lib/data.js` holds all team members, locations, carrier partners, reviews, and service definitions.
- **Lead Capture**: `app/api/lead/route.js` & `app/api/sandbox-quote/route.js` send leads via Resend to `austin.l@ficekinsurance.com`.
- **Global Styles**: `app/globals.css` (button utilities, animation keyframes, `.location-showcase-card`, `.hero-logo-card`).

## Critical Business Rules

1. **Dual Locations**:
   - Main HQ: `1439 1st Street, Brandon, MB R7A 6Z4` (204-571-1777)
   - New Space: Strictly formatted as `1525B 18th Street, Brandon, MB R7A 5A9` (204-728-1957, open late until 7 PM)
2. **Team Roster**:
   - Rod Ficek (Owner/Senior Broker) must ALWAYS be at index 0 in `TEAM` in `lib/data.js`.
3. **Quote Requests**:
   - Primary CTA is "Request Quote →", linking to `/quote`.
   - No "Preferred Office" dropdown in quote forms (brokers route internally).
4. **Style**:
   - Clean, professional corporate tone without emoji clutter (no `✨`, `🏆`, or `⏰` in headings/badges).
   - No em-dashes (`—`) in headlines; use colons (`:`) or hyphens (`-`).
   - SGI logo is `/images/carriers/sgi.updated.webp`.
