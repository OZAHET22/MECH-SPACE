Micro-Animations            | Hover effects, button ripples, loading indicators                      |
| 🧊 3D & WebGL Experiences      | Interactive product previews, immersive 3D environments                |
| 📜 Scroll-Based Storytelling   | Parallax, scroll-snap, narrative-driven UX            
 Bold & Expressive Typography| Variable fonts, oversized headings, quirky characters                  |

| 🖼️ Bento Grid Layouts          | Modular card-based content blocks (inspired by Japanese bento boxes)   |
| 🖱️ Custom Cursors              | Brand-driven cursor morphing and trail effects                         
 Gradient + Muted Palettes   | Soft blues/teals for backgrounds, bold warm colors for CTAs            |
| 🕹️ Retro/Y2K Aesthetic         | Pixel art, glitch effects, neon accents, nostalgic feel                |
| 🌐 Human-Centered Organic Design| Analog textures, wavy lines, imperfect authenticity                  |
| ♿ Accessibility-First         | WCAG 2.2, ARIA, European Accessibility Act compliance                  |
| 🔒 Privacy-First UX            | Ethical design, no dark patterns, transparent data use            


Tech Stack (Production Grade)
Frontend: Next.js 15 (App Router) + Tailwind CSS + Shadcn/ui. Server components for SEO, client components only for interactivity. TypeScript throughout.
CMS: Sanity.io — structured content for case studies, products, blog. Non-developer team can update without touching code.

Deploy: Vercel for frontend (automatic preview deployments),  
Analytics: GA4 + Microsoft Clarity (heatmaps, free) + HubSpot for CRM and lead scoring.

You do need:

Fast-loading project gallery with filter
Good video/image showcase for each project
WhatsApp float button (critical for India market)
SEO-optimized service + industry pages
Contact form 
Calendly or Cal.com embed for calls
Mobile-first responsive design
The One Feature Worth Adding
An ROI calculator widget — pure frontend, no backend. Just JavaScript sliders. This keeps visitors on the page longer and makes you look more professional than competitors. No server required.




Case Studies is your most important conversion page. Each study needs: client name/logo, problem statement, solution summary, before/after metrics (cycle time, defect rate, throughput), a video walkthrough, and a "Similar project?" CTA.

Must-Have Functionality in 2025
AI Solution Advisor — a chatbot trained on your product catalog and past projects using Claude API + RAG. User answers 4–5 questions (industry, volume, budget, pain point), and it recommends a specific automation system with a quote button. This replaces a generic contact form and converts 3× better.
ROI Calculator — interactive widget with sliders: current labor cost, shift count, defect rate, production volume. Outputs: payback period, 5-year savings, efficiency gain. Auto-generates a branded PDF. This is the single highest-converting tool for industrial B2B.
Instant Quote Engine — multi-step form (not a single page), each step validates before proceeding. Outputs a PDF quote with line items. Integrates with HubSpot or Pipedrive to create a deal automatically.

Video Showcase with Mux — self-hosted video (not just YouTube embeds) with adaptive streaming. Show plant floor footage, machine demos, and installation reels. Autoplay muted on homepage hero.
WhatsApp Float Button — non-negotiable for Indian market. Pre-filled message: "Hi, I'm interested in [page name]." Captures leads who won't fill forms.
Booking Widget — Cal.com (self-hosted, free) or Calendly embed for consultation scheduling. Directly on homepage above the fold, not buried in the contact page.


## 🎨 17. DESIGN SYSTEM

### Color Palette
| Name           | Hex       | Usage                   |
| -------------- | --------- | ----------------------- |
| Soft White     | `#F5F5F5` | Main background         |
| Pure White     | `#FFFFFF` | Cards / sections        |
| Deep Blue      | `#1B2E76` | Primary brand color     |
| Deep Blue Dark | `#14225A` | Hover / darker buttons  |
| Orange         | `#ED611C` | CTA buttons, highlights |
| Orange Glow    | `#F47A3D` | Hover state             |
| Dark Text      | `#1F2937` | Main text               |
| Muted Gray     | `#6B7280` | Secondary text          |
| Light Border   | `#E5E7EB` | Borders/dividers        |



Advanced / Production
```
Next.js (SSR + SEO optimized)
Tailwind CSS or CSS Modules
GSAP (professional animations)
Sanity / Contentful (CMS for blog/news)
Node.js + Express (form backend)



🔍. SEO REQUIREMENTS

```
- Meta title + description on every page
- OG (Open Graph) tags for social sharing
- Structured data (JSON-LD) for Organization schema
- Sitemap.xml
- robots.txt
- Alt text on all images
- Semantic HTML (h1 → h6 hierarchy, nav, main, section, article, footer)
- Fast loading: compress images, lazy load below-fold images
- Mobile friendly (Google ranking factor)


 16. GLOBAL FEATURES & EXTRAS

| Feature | Description |
|---|---|
| **Custom Cursor** | Small orange dot follows mouse; larger ring lags behind with smooth lerp animation |
| **Scroll Reveal** | IntersectionObserver adds `.visible` class → elements fade up from below |
| **Staggered Delays** | CSS `transition-delay` classes (d1, d2, d3, d4) on each child element |
| **Back to Top Button** | Fixed bottom-right, appears after 400px scroll, arrow shape, smooth scroll |
| **Cookie Consent Bar** | Fixed bottom bar, slides up after 2.5s, saves choice to localStorage |
| **Active Nav Link** | Scroll event checks section positions, highlights matching nav link |
| **Orange Scrollbar** | CSS `::-webkit-scrollbar` override (4px wide, orange thumb) |
| **Hover Cursor Scale** | Cursor ring scales up (1.8x) when hovering over clickable elements |
Typography
| Font | Weight | Usage |
|---|---|---|
| **Barlow Condensed** | 700, 800 | All headings, nav, numbers, buttons |
| **Barlow** | 400, 500, 600 | Body text, descriptions, form inputs |
| **Rajdhani** | 500, 600, 700 | Labels, tags, badges, small caps |

### Spacing System
```
Section padding: 100px top/bottom, 6% left/right
Card gap: 2px (tight grid), 24px (normal grid)
Section label → title gap: 16px
Title → description gap: 16px
```

### Shapes / Details
- Buttons use `clip-path: polygon(12px 0%, 100% 0%, calc(100%-12px) 100%, 0% 100%)` → cut corner look
- Active tabs have 3px left orange border
- Card containers have 2px orange top border
- Gradient overlays on all image cards (dark bottom, transparent top)

### Animation Values
```css
--ease: cubic-bezier(0.25, 0.46, 0.45, 0.94);
Reveal duration: 0.8s
Counter duration: 2000ms
Hover transitions: 0.3s
Cursor ring lag: lerp factor 0.12
```

---

## 📱 18. RESPONSIVE BREAKPOINTS

| Breakpoint | Changes |
|---|---|
| **Desktop** `> 1100px` | Full layout — all columns, dropdowns, all effects |
| **Tablet** `< 1100px` | Industries: 2 cols · Solution tabs: horizontal row · Stats: 2 cols · Process: 3 cols · Footer: 2 cols |
| **Mobile** `< 768px` | Single column · Hamburger menu · Stacked stats · Hero stats vertical · Full-width cards · Footer: 1 col |

---

Project Overview

### What Type of Site Is This?
This is a **B2B Lead Generation Website** for an industrial engineering/manufacturing company. The business sells **high-ticket, custom-engineered equipment** — so the website's job is NOT to convert visitors on the spot. Instead it must:

- **Build trust and credibility** through social proof, case studies, certifications, and experience stats
- **Qualify leads** by clearly communicating what industries/projects they serve
- **Capture warm leads** via contact forms, consultation booking, and calls-to-action
- **Educate prospects** through technology explanations, process walkthroughs, and FAQs

### Core Business Goals Translated to Web Goals
| Business Goal | Web Feature |
|---|---|
| Show expertise | Case studies, partner logos, stats (100% employee-owned) |
| Target specific industries | Dedicated industry pages with tailored copy |
| Generate qualified leads | Multi-step contact form with industry selector |
| Build long-term relationships | Events page, news/blog, care/support section |
| Demonstrate capability | Video hero, technology tabs, robotics integration page |

---

## 2. Site Architecture & Page Map

```
/ (Homepage)
│
├── /technology                     → Core machine technologies overview
│
├── /industries/                    → Industry hub landing page
│   ├── /life-sciences-medical-device
│   ├── /aerosol
│   ├── /consumer-goods
│   ├── /food-beverage
│   └── /health-and-beauty
│
├── /service/                       → Services hub
│   ├── /service (Project Services)
│   └── /haumiller-cares-support-services
│
├── /case-studies/                  → Case studies index
│   ├── /chem-pak-aerosol
│   └── /sharpie-cap-assembly
│
├── /company                        → About / Company history
├── /facilities                     → Facility tour / photos
├── /events                         → Trade shows & upcoming events
├── /culture-and-esop               → Culture, ownership structure
├── /careers                        → Job listings & internships
├── /resources (news)               → Blog / news / announcements
│   └── /news-insights/:slug        → Individual article
│
├── /contact/contact                → Main contact + booking form
└── /privacy-policy                 → Legal
```

### Routing Strategy
- Use **hash-based or path-based SPA routing** if building in React/Vue
- Each industry and case study is a **dynamic route** fed from a CMS
- Keep URLs **clean and semantic** — no query strings for navigation

---



