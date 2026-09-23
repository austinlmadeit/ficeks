# Ficek Insurance Redesign — Project Handoff Instructions

This document provides complete instructions for continuing development and maintenance of the **Ficek Insurance** website redesign using **Claude Code** (or any developer / agent).

---

## 1. Repository & Git Connection

- **GitHub Repository**: [https://github.com/austinlmadeit/ficeks.git](https://github.com/austinlmadeit/ficeks.git)
- **Primary Branch**: `main`
- **Live Production URL**: [https://www.ficekinsurance.com](https://www.ficekinsurance.com) / [https://ficekinsurance.com](https://ficekinsurance.com)
- **Vercel Preview URL**: [https://ficek-insurance-redesign.vercel.app](https://ficek-insurance-redesign.vercel.app)

### Cloning & Connecting to the Repo

```bash
# Clone the repository via HTTPS
git clone https://github.com/austinlmadeit/ficeks.git ficek-insurance-redesign

# Or via SSH
git clone git@github.com:austinlmadeit/ficeks.git ficek-insurance-redesign

# Navigate into the project directory
cd ficek-insurance-redesign

# Ensure you are on main and up to date
git checkout main
git pull origin main
```

---

## 2. Tech Stack & Environment

- **Framework**: Next.js 16.2.12 (Turbopack, App Router)
- **Runtime / UI**: React 19.2.4
- **Language**: JavaScript (ES6+), JSX
- **Styling**: Vanilla CSS, CSS Modules (`Nav.module.css`), `app/globals.css`
- **Email / Lead Delivery**: [Resend](https://resend.com) (`resend@^6.20.0`)
- **Hosting & Deployment**: Vercel (`ficek/ficek-insurance-redesign`)
- **Node Version**: Node.js 18+ (tested with v20 / v24)

### Environment Variables

Copy the example file to `.env.local`:

```bash
cp .env.example .env.local
```

Variables configured in `.env.local` and in Vercel project settings:
```ini
RESEND_API_KEY=re_xxxxxxxxxxxx
LEAD_NOTIFICATION_EMAIL=austin.l@ficekinsurance.com
RESEND_FROM_EMAIL=Ficek Insurance Website <onboarding@resend.dev>
```

---

## 3. Quick Start & Common Commands

```bash
# Install dependencies
npm install

# Start development server (Turbopack)
npm run dev

# Run full production build (Turbopack static generation)
npm run build

# Start local production build
npm run start

# Lint check
npm run lint

# Deploy to Vercel production
npx vercel --prod --yes
```

---

## 4. Architecture & Key Directory Map

```text
ficek-insurance-redesign/
├── app/                              # Next.js App Router
│   ├── layout.js                     # Root layout, fonts (Outfit & Inter), metadata, Nav & Footer
│   ├── globals.css                   # Global styles, button utilities, card classes, animations
│   ├── page.js                       # Homepage (Locations Showcase, Hero, Services, Reviews)
│   ├── about/
│   │   ├── page.js                   # About Us overview & brokerage story
│   │   ├── locations/page.js         # Detailed Brandon locations page (1st St & 18th St)
│   │   └── our-team/page.js          # Broker team directory (Rod Ficek #1)
│   ├── contact/page.js               # Contact form, direct phone, Google Maps, office hours
│   ├── quote/page.js                 # Multi-step Quote Request page (renders QuoteWizard)
│   ├── privacy/page.js               # Privacy policy
│   ├── terms/page.js                 # Terms of service
│   ├── services/
│   │   ├── page.js                   # Service lines overview
│   │   └── [slug]/page.js            # Dynamic service pages (auto, condo, home, commercial, etc.)
│   ├── resources/
│   │   └── mpi-forms/page.js         # Manitoba Public Insurance downloadable forms & links
│   ├── tools/page.js                 # Broker tools & client utilities
│   └── api/
│       ├── lead/route.js             # General quote & contact lead email webhook (via Resend)
│       └── sandbox-quote/route.js    # Dedicated 3-step Sandbox Mutual lead webhook (via Resend)
├── components/                       # Shared React Components
│   ├── Nav.js                        # Sticky navigation bar with mobile hamburger drawer
│   ├── Nav.module.css                # Scoped styles for navigation bar
│   ├── Footer.js                     # Site footer with brand info, office addresses, phone links
│   ├── HeroQuoteWidget.js            # Homepage 1-step quick quote request box
│   ├── QuoteWizard.js                # Full 3-step interactive quote calculation wizard
│   ├── SandboxQuoteForm.js           # 3-step Sandbox Mutual lead capture form
│   ├── CarrierCarousel.js            # Auto-scrolling insurance carrier partner ticker
│   ├── ReviewCarousel.js             # 5-star Google review showcase with location filter
│   └── ContactForm.js                # Direct contact page form
├── lib/
│   └── data.js                       # SINGLE SOURCE OF TRUTH (Team, Locations, Carriers, Reviews)
├── public/                           # Static assets
│   ├── images/
│   │   ├── ficek.logo.jpg            # Primary shield logo emblem
│   │   ├── carriers/                 # Carrier partner logos (e.g. sgi.updated.webp, sandbox.webp)
│   │   └── team/                     # Broker headshots
└── .env.example                      # Sample environment variables
```

---

## 5. Critical Business Rules & Design Constraints

When making changes, adhere to the following decisions established with the client:

1. **Dual Brandon Locations**:
   - **Main Headquarters**: `1439 1st Street, Brandon, MB R7A 6Z4` (Phone: `204-571-1777`, Hours: Mon–Fri 9:00 AM – 5:00 PM).
   - **New Location**: Must **always** be formatted as `1525B 18th Street, Brandon, MB R7A 5A9` (Phone: `204-728-1957`, Hours: Mon–Fri 9:00 AM – 7:00 PM, Sat 10:00 AM – 5:00 PM).
   - Both locations are featured at the top of `app/page.js` with interactive Google Maps iframes. Hovering over either location card dynamically highlights it with the red brand accent border (`.location-showcase-card:hover`).

2. **Broker Roster Order**:
   - **Rod Ficek** (Owner / Senior Broker) **must always be index 0** (the very first person listed) in the `TEAM` array in [`lib/data.js`](lib/data.js).

3. **Quote Flow & Buttons**:
   - The primary CTA across pages is **"Request Quote →"** or **"Get a Quote"**, linking to `/quote`.
   - On individual service pages (`app/services/[slug]/page.js`), the "Why Quote with Ficek Insurance?" card button links to `/quote` (not dead hash anchors).
   - The "Preferred Office" dropdown has been removed from the quote wizard (`components/QuoteWizard.js`); brokers handle internal routing based on client address/needs.

4. **Tone & Style Guidelines**:
   - **Clean & Corporate**: Avoid decorative emojis (`✨`, `🏆`, `⏰`) in headlines and badges.
   - **Punctuation**: Do not use em-dashes (`—`) in main headlines. Use colons (`:`) or standard hyphens (`-`).
   - **Logo Card**: The front-page hero logo (`.hero-logo-card`) uses a clean white container with subtle hover elevation (`translateY(-6px)`). Do not add pulsing ring or ambient aura keyframe animations around it.
   - **Carrier Logos**: SGI Canada uses `/images/carriers/sgi.updated.webp`.

---

## 6. Deployment Workflow

Deployments are automated through Vercel.

```bash
# 1. Verify TypeScript & Next.js production build passes locally
npm run build

# 2. Commit and push changes to GitHub
git add -A
git commit -m "Your descriptive commit message"
git push origin main

# 3. Deploy to production via Vercel CLI (if not using automatic Git integration)
npx vercel --prod --yes
```

---

## 7. Contact & Project Credentials

- **Domain Registrar / DNS**: Points to Vercel nameservers / DNS aliases for `ficekinsurance.com` and `www.ficekinsurance.com`.
- **Lead Email Notifications**: Handled by Resend and routed to `austin.l@ficekinsurance.com`.
