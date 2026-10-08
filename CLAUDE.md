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
- **Lead Capture**: `app/api/lead/route.js` & `app/api/sandbox-quote/route.js` send leads via Resend to `austin.l@ficekinsurance.com` (override with the `LEAD_NOTIFICATION_EMAIL` environment variable). While the sender is Resend's testing address `onboarding@resend.dev`, the recipient MUST be the Resend account owner's address or every lead fails with a 403. Moving leads to `info@ficekinsurance.com` requires a Resend account owned by `info@` (or a verified domain) first.
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

## Changing Lead Capture

Applies to any change touching the quote/contact forms, `app/api/lead`, `app/api/sandbox-quote`, `lib/form-guard.js`, Resend, or the `RESEND_*` / `LEAD_NOTIFICATION_EMAIL` environment variables.

A failed lead email is invisible to the office: the customer sees an error and nobody else sees anything. Between Sept 29 and Oct 8 2026 every website lead failed unnoticed because the recipient was changed without a matching Resend account change, and the change was reported as done after local tests that could not reproduce the failure.

1. **Local tests are not enough.** A dummy `RESEND_API_KEY` proves the code reaches Resend, not that Resend will deliver. Account and recipient problems only appear with the real key.
2. **Test on the branch's Preview deployment** with a real submission before merging to `main` (requires `RESEND_API_KEY` in the Vercel Preview environment).
3. **After it deploys to Production, submit a test lead on the live site** and confirm the email arrived, including the spam folder. Check Vercel Logs for `Resend Lead API error`, `Resend error`, or `RESEND_API_KEY is not set`.
4. **If you cannot run the live test yourself** (for example, the site or Vercel is unreachable from your environment), say so plainly and ask a person to run it. Do not report the change as done until someone has.
5. **Never change the recipient and the sending account separately.** While the sender is `onboarding@resend.dev`, `LEAD_NOTIFICATION_EMAIL` (and the code default) must be the Resend account owner's address, or every lead fails with a 403. Change the key, recipient, and sender together, then run step 3.
