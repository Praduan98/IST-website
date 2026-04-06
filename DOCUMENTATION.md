# InsightsTap Website — Documentation

## 1. Technical Setup

### Prerequisites
- Node.js (v18+)
- npm / pnpm

### Installation
```bash
npm install
```

### Available Scripts
| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (webpack mode) |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint checks |

### Tech Stack
| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.1.6 | React framework (App Router) |
| React | 19.2.4 | UI library |
| TypeScript | 5.7.3 | Type safety |
| Tailwind CSS | 4.2.0 | Utility-first styling |
| Framer Motion | 12.36.0 | Animations & transitions |
| Radix UI | — | Accessible component primitives |
| Lucide React | 0.564.0 | Icon library |
| Embla Carousel | 8.6.0 | Carousel/slider |
| React Hook Form + Zod | — | Form handling & validation |
| Vercel Analytics | 1.6.1 | Analytics tracking |

### Configuration
- **Next.js** (`next.config.mjs`): TypeScript build errors ignored, images unoptimized
- **TypeScript** (`tsconfig.json`): Strict mode, path alias `@/*` → project root
- **Tailwind CSS**: v4 with PostCSS plugin

### Design Tokens
| Token | Value | Usage |
|-------|-------|-------|
| Primary Accent | `#0dcfcf` | CTAs, highlights, links |
| Text Dark | `#0F172A` | Headings, primary text |
| Text Light | `#64748B` | Subtext, descriptions |
| Border | `#E2E8F0` | Dividers, card borders |
| Background Light | `#F8FAFC` | Section backgrounds |
| Background White | `#FFFFFF` | Cards, main bg |

---

## 2. Page Structure & Content

### Navigation (`components/navigation.tsx`)
Fixed top header with:
- **Logo**: InsightsTap logo + brand name (capital I and T)
- **Nav links**: About → Services (mega dropdown) → Product (dropdown with JobFeeder) → Contact
- **Mobile**: Hamburger menu with accordion sub-menus

#### Services Mega Menu (4 columns)

**AI-Powered GTM Strategy**
- GTM Strategy & Consulting
- SaaS GTM Execution
- Signal Architecture Design
- DARK Loop™ Intelligence System
- SIGNAL Playbook™ GTM Execution
- Revenue Operations Alignment
- GTM Stack Audit
- Dark Funnel Intelligence

**Custom AI & Agent App Development**
- Custom GPT Applications
- AI Chatbots & Agents
- AI Voice Assistants
- Autonomous & Browser Agents
- AI SaaS Development
- Enterprise AI Integrations
- AI Systems Integration

**CRM, Enrichment & Automation**
- HubSpot Services
- Clay Services
- Apollo.io Services
- RB2B Services
- 6sense Services

**Performance Marketing & ABM**
- Performance Ads Management
- Bridge Ads Development
- Signal-Led ABM Campaigns
- Signal-Led Media Strategy
- Conversion Optimization
- CRM & Ads Integration

---

### Section 1: Hero (`components/hero.tsx`)
- **Badge**: "Intent Signal As A Service"
- **Heading**: "Run your B2B enterprise like an E-commerce store"
- **Subtext**: "Using instant signals, AI agents, and GTM automation, we build Go-to-Market systems that grow your pipeline with the precision and speed of an e-commerce engine."
- **CTAs**: "Book a Strategy Call", "Download GTM Playbook"
- **Background**: Animated floating particles, dot grid, glow orbs

---

### Section 2: Video (`components/video-section.tsx`)
- **Badge**: "WATCH"
- **Heading**: "Still using outdated playbooks for B2B Sales? Do this instead."
- **Subtext**: "Replace outdated sales playbooks with AI-enabled GTM systems that scale revenue."
- **Embed**: YouTube video (`https://www.youtube.com/watch?v=3lOAzPreFt4`)
- **Thumbnail**: YouTube maxresdefault thumbnail with play button overlay

---

### Section 3: Logo Ticker (`components/logo-ticker.tsx`)
- **Heading**: "Trusted by the most innovative companies worldwide"
- **Logos**: Shootsta, Woliba, Innofied, REB2B, Apollo, AWS, AllRide, Snapfix
- **Behavior**: Infinite horizontal scroll (framer-motion based), pauses on hover, grayscale → color on hover

---

### Section 4: Value Proposition (`components/value-proposition.tsx`)
- **Badge**: "THE PROBLEM"
- **Content**: Interactive funnel visualization showing the problem/solution flow
- **Layout**: Image on left, text content on right

---

### Section 5: How It Works (`components/how-it-works.tsx`)
4-step process visualization:

| Step | Title | Details |
|------|-------|---------|
| 1 | Capture Signals | Job monitoring, funding alerts, visitor tracking |
| 2 | AI Processing | Lead scoring, personalization, pattern matching |
| 3 | Smart Automation | Multi-channel, CRM sync, ad targeting |
| 4 | Scale Revenue | Pipeline speed, CAC reduction, revenue growth |

---

### Section 6: Services (`components/services-section.tsx`)
4 service cards:

1. **AI-Led GTM Systems** — Signal detection, AI processing, auto-engagement
2. **Signal-Led Outreach & ABM** — Intent signals, multi-channel, personalization
3. **Ads, Analytics & CRM Automation** — HubSpot/Salesforce, smart workflows
4. **Custom AI Apps & Agents** — Chatbots, voice AI, custom apps

---

### Section 7: Interactive Stats (`components/interactive-stats.tsx`)
- **Theme switcher**: Night / Sunrise / Day / Sunset modes
- **Stats row**: 40% Lower CAC · 3x Pipeline Growth · 2.5x More Meetings · 90 Days to Results
- **Signal Flow**: SIGNALS → AI AGENTS → AUTOMATION → REVENUE
- **Background**: Canvas-based particle constellation (grid-scattered, 288 dots, 110px connection distance)
- **Icon containers**: Opaque backgrounds using theme bg color

---

### Section 8: Case Studies (`components/case-studies.tsx`)
- **Badge**: "RESULTS"
- **Heading**: "Success **Stories**" (gradient on "Stories")
- 4 carousel cards:

| Metric | Description | Client Type |
|--------|-------------|-------------|
| 40% Reduction | Customer Acquisition Cost | B2B IT Firm |
| 3x Pipeline Velocity | Increase in 90 Days | SaaS Company |
| 3 weeks | From Concept to Working GPT App | AI Startup |
| 25x Increase | Qualified Meeting Bookings | Enterprise Software |

---

### Section 9: Tech Stack (`components/tech-stack.tsx`)
- **Badge**: "INFRASTRUCTURE"
- **Heading**: "Built on a Best-in-Class **Tech Stack**" (gradient on "Tech Stack")
- Tool categories with brand icons:
  - Signal Capture (JobFeeder, RB2B, Factors.ai, Common Room, Vector)
  - Prospecting & Enrichment (Apollo, Clay, FullEnrich, Ocean.io, Sales Navigator)
  - Sequencing & Outreach (Instantly, Smartlead, HeyReach, Expandi)
  - CRM & Automation (HubSpot, Salesforce, Make, n8n)
  - Ad Platforms (Google Ads, Meta Ads, LinkedIn Ads)
  - AI & Analytics (OpenAI, Anthropic, Gemini)

---

### Section 10: Founder (`components/founder-section.tsx`)
- **Badge**: "MEET THE FOUNDER"
- **Content**: Founder photo, bio, and background
- **CTA**: "Read more about us →"
- **Social icons**: LinkedIn, Twitter, Email

---

### Section 11: FAQ (`components/faq-section.tsx`)
Accordion-style with 3 questions:
1. "How are you different?"
2. "What results can I expect?"
3. "Do you work with my tools?"

---

### Section 12: Testimonials (`components/testimonials.tsx`)
- **Badge**: "WHAT CLIENTS SAY"
- **Heading**: "Trusted by **Industry Leaders**" (gradient on "Industry Leaders")
- 4 client testimonials from CMO, Founder, Head of Growth, CTO

---

### Section 13: Final CTA (`components/final-cta.tsx`)
- **Badge**: "Transform Your GTM Strategy"
- **Heading**: "Ready to Scale **Smarter**?" (gradient on "Smarter")
- **Subtext**: "Let's turn buyer signals into booked meetings and real revenue."
- **CTAs**: "Book a Strategy Call", "Download GTM Playbook"
- **Background**: Pulsing glow orb, floating particles

---

### Footer (`components/footer.tsx`)
5-column layout:

| Brand | Company | Services | Product | Quick Links |
|-------|---------|----------|---------|-------------|
| Logo + InsightsTap | About | AI-Powered GTM Strategy | JobFeeder | Privacy Policy |
| Tagline | Service | Custom AI & Agent App Dev | | Refund Policy |
| Address (with map link) | Product | CRM, Enrichment & Automation | | Terms and Conditions |
| Social icons (LinkedIn, Twitter, YouTube) | Contact | Performance Marketing & ABM | | |

**Address**: 539 W Commerce St #2588, Dallas, TX 75208, USA
**Copyright**: © 2026 InsightsTap. All rights reserved.

---

## 3. Project File Structure

```
├── app/
│   ├── globals.css          # Global styles & animations
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page (assembles all sections)
├── components/
│   ├── navigation.tsx       # Fixed header + mega menu
│   ├── hero.tsx             # Hero section
│   ├── video-section.tsx    # Video embed
│   ├── logo-ticker.tsx      # Client logos carousel
│   ├── value-proposition.tsx# Problem/solution funnel
│   ├── how-it-works.tsx     # 4-step process
│   ├── services-section.tsx # Service offerings
│   ├── interactive-stats.tsx# Themed stats + particle bg
│   ├── case-studies.tsx     # Success stories carousel
│   ├── tech-stack.tsx       # Tools & integrations
│   ├── founder-section.tsx  # Founder bio
│   ├── faq-section.tsx      # FAQ accordion
│   ├── testimonials.tsx     # Client quotes
│   ├── final-cta.tsx        # Call-to-action
│   ├── footer.tsx           # Footer
│   └── ui/                  # Reusable Radix UI primitives
├── public/
│   ├── logo.png             # Brand logo
│   └── logos/               # Client & partner logos
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```
