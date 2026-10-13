# Influze – Influencer Agency Website Design Specification
**Source Template:** Kitpro – Influze Elementor Template Kit (ThemeForest)  
**Target Platform:** Next.js 14+ (App Router), TypeScript, Tailwind CSS, Framer Motion, Lucide React  
**Reference Document Version:** 1.0.0  
**Extraction Date:** October 2026

---

## 1. Discovered Page Architecture (10 Pages)

| # | Route | Page Title | Primary Purpose | Key Components |
|---|-------|------------|-----------------|----------------|
| 1 | `/` | Home | Main agency showcase & conversion portal | Sticky Header, Hero, Marquee, Value Prop, Stats, Client Logos, Strategic Services, Dark Contrast Feature, Video Testimonials, FAQ Accordion, Latest Trends Blog, 4-Column Footer |
| 2 | `/about` | About Us | Agency story, leadership, and mission | Page Banner Hero, Mission & Vision, 4-Metric Counters, Executive Team Roster, Core Values Grid, Marquee, Footer CTA |
| 3 | `/services` | Strategic Services | Detailed capabilities & workflow | Page Banner Hero, 4 Service Pillar Deep-Dives, 4-Step Process Flow (01-04), Client Outcomes, FAQ, Footer CTA |
| 4 | `/creators` | Discover Creators | Talent roster & creator showcase | Page Banner Hero, Category Filter, 8+ Influencer Cards with verified badges, Stats & Social Handles, FAQ, Footer |
| 5 | `/projects` | Case Studies & Projects | Campaign portfolio & proven results | Page Banner Hero, Category Filter, 4+ Featured Case Studies (Reach & Engagement metrics), Client Quote, FAQ, Footer |
| 6 | `/pricing` | Choose Your Plan | Transparent agency tiers & packages | Page Banner Hero, Logos Ribbon, 3-Tier Pricing Grid (Starter $19, Growth $26 [Most Popular], Premium $36), Pricing FAQ, Footer |
| 7 | `/faq` | Support & FAQs | Comprehensive question & answer center | Page Banner Hero, Category Switcher (Brands / Creators / Payments), 10+ Collapsible Accordion Cards, Direct Support Card, Footer |
| 8 | `/blog` | Insights & News | Creator economy thought leadership | Page Banner Hero, Featured Post Hero, 6-Card Article Grid with Category Tags & Read Times, Newsletter Card, Footer |
| 9 | `/contact` | Get In Touch | Inquiries, booking, and consultations | Page Banner Hero, Contact Detail Cards (Address, Phone, Email), Dual-Audience Form (Brand vs Creator), Business Hours, Footer |
| 10 | `/not-found` | 404 Error Page | Graceful missing route fallback | Big 404 Display, Visual Status Badge, Helpful Message, Return Home Pill Button |

---

## 2. Typography Specification

### 2.1 Font Families
- **Primary Headings & Body:** `'Plus Jakarta Sans', system-ui, -apple-system, sans-serif`  
  *Loaded via `next/font/google` with weights `400, 500, 600, 700, 800` and normal/italic styles.*
- **Editorial Italic Accent (Heading Highlights):** `'Plus Jakarta Sans', sans-serif` in `font-style: italic; font-weight: 400` or `font-weight: 500`  
  *(Used consistently across second lines of section headers: "For Modern Brands", "Real Influence", "And Creators", "Questions Answered", "Creator Marketing", "Digital Creators", "Deliver Real Results").*
- **Monospace / Metrics:** `ui-monospace, SFMono-Regular, Menlo, monospace` for KPI counters if needed.

### 2.2 Text Hierarchy & Scale

| Element | Font Size (Desktop) | Font Size (Tablet) | Font Size (Mobile) | Font Weight | Line Height | Letter Spacing | Text Transform | Default Color |
|---------|---------------------|--------------------|-------------------|-------------|-------------|----------------|----------------|---------------|
| **Display / Hero H1** | 64px (`4rem`) | 48px (`3rem`) | 36px (`2.25rem`) | 700 (Bold) | 1.12 | -0.025em | None | `#0A0A0A` |
| **Section Title H2** | 44px (`2.75rem`) | 36px (`2.25rem`) | 28px (`1.75rem`) | 700 (Bold) | 1.18 | -0.02em | None | `#0A0A0A` (or `#FFFFFF` in dark) |
| **Section Italic Sub-H2** | 44px (`2.75rem`) | 36px (`2.25rem`) | 28px (`1.75rem`) | 400 (Italic) | 1.18 | -0.01em | None | `#0A0A0A` (or `#E5E7EB` in dark) |
| **Card Title H3** | 22px (`1.375rem`) | 20px (`1.25rem`) | 18px (`1.125rem`) | 700 (Bold) | 1.25 | -0.015em | None | `#0A0A0A` |
| **Card Subtitle H4** | 17px (`1.0625rem`) | 16px (`1rem`) | 15px (`0.9375rem`) | 600 (SemiBold) | 1.35 | normal | None | `#111827` |
| **Category Pill Label** | 12px (`0.75rem`) | 12px (`0.75rem`) | 11px (`0.6875rem`) | 700 (Bold) | 1.2 | +0.08em | Uppercase | `#0A0A0A` |
| **Body Large / Lead** | 18px (`1.125rem`) | 17px (`1.0625rem`) | 16px (`1rem`) | 400 (Regular) | 1.6 | normal | None | `#4B5563` |
| **Body Regular** | 15px (`0.9375rem`) | 15px (`0.9375rem`) | 14px (`0.875rem`) | 400 (Regular) | 1.65 | normal | None | `#6B7280` |
| **Nav Links** | 15px (`0.9375rem`) | 15px (`0.9375rem`) | 16px (`1rem`) | 500 (Medium) | 1.0 | -0.01em | None | `#1F2937` |
| **Button Text** | 14px (`0.875rem`) | 14px (`0.875rem`) | 14px (`0.875rem`) | 600 (SemiBold) | 1.0 | normal | None | `#FFFFFF` (Primary) |
| **Stat Counter Numbers** | 48px (`3rem`) | 40px (`2.5rem`) | 32px (`2rem`) | 800 (ExtraBold) | 1.05 | -0.03em | None | `#0A0A0A` |

---

## 3. Color Palette & Design Tokens

### 3.1 Core Swatches

```css
:root {
  /* Neutral / Backgrounds */
  --bg-primary: #FFFFFF;
  --bg-secondary: #FAFAFA;
  --bg-subtle: #F3F4F6;
  --bg-card: #FFFFFF;
  --bg-dark: #0A0A0A;
  --bg-dark-card: #141414;
  --bg-dark-subtle: #1F1F1F;

  /* Foreground / Text */
  --text-primary: #0A0A0A;
  --text-secondary: #4B5563;
  --text-muted: #6B7280;
  --text-subtle: #9CA3AF;
  --text-on-dark: #FFFFFF;
  --text-muted-dark: #A1A1AA;

  /* Accent & Interaction */
  --accent-black: #0A0A0A;
  --accent-black-hover: #262626;
  --accent-verified-blue: #0084FF;
  --accent-star-yellow: #F59E0B;
  
  /* Social Media Accents */
  --social-snapchat: #FFFC00;
  --social-instagram: #E1306C;
  --social-tiktok: #000000;
  --social-youtube: #FF0000;

  /* Borders & Dividers */
  --border-light: #E5E7EB;
  --border-subtle: #F3F4F6;
  --border-dark: #262626;
  --border-focus: #0A0A0A;

  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 6px 20px -4px rgba(0, 0, 0, 0.07);
  --shadow-lg: 0 16px 36px -8px rgba(0, 0, 0, 0.10);
  --shadow-pill: 0 4px 14px rgba(0, 0, 0, 0.06);
}
```

### 3.2 Gradients & Slanted Bands
- **Marquee Band:** Pure white background `#FFFFFF` with black text `#0A0A0A`, rotated -1.5 degrees, or dark black band `#0A0A0A` with white uppercase text.
- **Instagram Gradient Icon/Pill:** `linear-gradient(45deg, #F58529 0%, #DD2A7B 50%, #8134AF 100%)`

---

## 4. Layout, Spacing & Breakpoints

### 4.1 Responsive Breakpoints
- **Desktop Extra-Wide:** `1440px` (Max layout container: `1240px` centered)
- **Desktop Standard:** `1280px`
- **Tablet Landscape / Small Laptop:** `1024px`
- **Tablet Portrait:** `768px` (Navigation collapses to hamburger overlay drawer)
- **Mobile Large:** `480px`
- **Mobile Small:** `375px`

### 4.2 Spacing Metrics
- **Section Top/Bottom Padding:**
  - Desktop: `96px` to `112px` (`py-24` to `py-28`)
  - Tablet: `72px` (`py-18`)
  - Mobile: `56px` (`py-14`)
- **Container Max-Width:** `1240px` with `px-4 sm:px-6 lg:px-8` side safety margin.
- **Grid Gaps:**
  - 3-Column Services / Blog: `gap-6 lg:gap-8` (24px to 32px)
  - 4-Column Creators / Projects: `gap-6` (24px)
  - 2-Column Splits: `gap-12 lg:gap-16` (48px to 64px)
- **Border Radii:**
  - Buttons & Pill Badges: `rounded-full` (`9999px`)
  - Creator & Project Image Cards: `24px` (`rounded-[24px]` with `overflow-hidden`)
  - Content Cards / Accordions: `20px` (`rounded-2xl`)
  - Sub-badges / Tags: `rounded-full` or `rounded-lg` (`8px`)

---

## 5. Buttons & Interactive Controls

### 5.1 Button Variants

#### 1. Primary Pill Button (`Button.primary`)
- **Appearance:** Solid black `#0A0A0A`, text `#FFFFFF`.
- **Dimensions:** Height `48px`, padding `14px 28px`, `rounded-full`.
- **Typography:** 14px, weight 600.
- **Hover State:** Background `#262626`, scale `1.02`, smooth transition `200ms cubic-bezier(0.16, 1, 0.3, 1)`.
- **Focus State:** 2px ring `#0A0A0A` with 2px offset.

#### 2. Secondary Outline Pill Button (`Button.outline`)
- **Appearance:** Solid white background `#FFFFFF`, 1px border `#E5E7EB`, text `#0A0A0A`.
- **Dimensions:** Height `48px`, padding `14px 26px`, `rounded-full`.
- **Hover State:** Background `#0A0A0A`, text `#FFFFFF`, border-color `#0A0A0A`.

#### 3. Circular Arrow Action Button (`Button.iconCircle`)
- **Appearance:** Circle `44px x 44px`, solid black `#0A0A0A`, white right-up arrow icon (`16px`).
- **Hover State:** Rotates arrow by 45 degrees (`rotate-45`), background `#1F2937`, scale `1.06`.

#### 4. Pill Link with Arrow (`Button.linkArrow`)
- **Appearance:** Text link with trailing arrow `->`.
- **Hover State:** Arrow translates right by `4px` (`group-hover:translate-x-1`).

---

## 6. Micro-Animations & Scroll Effects

### 6.1 Framer Motion Variants
- **FadeUp:** `initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }`
- **FadeIn:** `initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true }, transition: { duration: 0.5 }`
- **StaggerContainer:** `variants: { show: { transition: { staggerChildren: 0.1 } } }`
- **CardHoverLift:** `whileHover: { y: -6, transition: { duration: 0.3, ease: 'easeOut' } }`

### 6.2 Infinite Marquee
- **Implementation:** Framer Motion horizontal translation `x: [0, -50%]` with `repeat: Infinity, ease: 'linear', duration: 25s`.
- **Pause on Hover:** `whileHover: { animationPlayState: 'paused' }` for accessibility.

### 6.3 Number Counters (Stats)
- Animated from `0` to target (`220+`, `10M`, `450+`, `98%`) using Framer Motion `useMotionValue` and `useTransform` triggering when entering viewport.

---

## 7. Reusable Component Inventory

1. **Header / Navbar (`components/layout/Header.tsx`):**
   - Brand Logo with Star Icon
   - Nav Links: Home, About Us (dropdown), Services, Pages (dropdown: Creators, Projects, Pricing, FAQ, 404), Blog, Contact
   - CTA Button: "Get In Touch"
   - Mobile Hamburger trigger & Animated Slide-over Drawer
   - Sticky scroll listener: Adds background blur (`backdrop-blur-md bg-white/90 shadow-sm`) when scrolled > 20px.

2. **Footer (`components/layout/Footer.tsx`):**
   - 4-column layout:
     - Col 1: Brand logo, tagline, circular social icons (Facebook, X, YouTube).
     - Col 2 (Explore): Home, About, Services, Creators, Insights.
     - Col 3 (Services): Influencer Marketing, Campaign Strategy, Creator Management, Content Production.
     - Col 4 (Contact): Hello@Influze.Com, (+68) 72973934, 3783 Newton Maoo.
   - Bottom bar: Copyright & legal links (Privacy, Cookie, Sitemap).

3. **Section Header Badge & Title (`components/ui/SectionHeader.tsx`):**
   - Capsule dot badge (`• BADGE NAME`)
   - Dual-style title: Normal bold line 1 + Editorial italic line 2
   - Optional description paragraph and top/bottom alignment.

4. **Creator Card (`components/ui/CreatorCard.tsx`):**
   - Aspect ratio 3:4 portrait image with rounded-2xl
   - Creator name with blue verified checkmark badge
   - Niche label (e.g. "- Beauty Influencer", "- Tech Reviewer")
   - Circular arrow action button.

5. **Project / Case Study Card (`components/ui/ProjectCard.tsx`):**
   - Aspect ratio 16:10 campaign thumbnail with rounded-2xl
   - Category tags (e.g. Fashion, Lifestyle)
   - Campaign title & description
   - Creator profile pill: Avatar + name + verified badge
   - Reach KPI pill (e.g. "3.2M Reach") + Engagement KPI pill (e.g. "8.9% Engagement")
   - Circular arrow action button.

6. **Service Card (`components/ui/ServiceCard.tsx`):**
   - Image thumbnail with rounded-2xl
   - Service name & category tags
   - Circular arrow button & hover border accent.

7. **Pricing Tier Card (`components/ui/PricingCard.tsx`):**
   - Plan name badge (Starter / Growth / Premium)
   - "Most Popular" dark capsule badge (for Growth plan)
   - Price display (`$19/Month`, `$26/Month`, `$36/Month`)
   - Feature checkmark list with clean icons
   - Choose Plan CTA button.

8. **FAQ Accordion (`components/ui/Accordion.tsx`):**
   - Clean card item with rounded-2xl
   - Question title with plus/minus or chevron icon
   - Framer Motion smooth collapse/expand animation.

9. **Blog / Article Card (`components/ui/BlogCard.tsx`):**
   - Post thumbnail with rounded-2xl
   - Title, excerpt, date, read time
   - "Read More ->" interactive link.

10. **Marquee Banner (`components/ui/MarqueeBand.tsx`):**
    - Slanted or full-width animated ticker band.

---

## 8. Asset Inventory & Replacements

| Asset Type | Description | Dimensions | Strategy |
|------------|-------------|------------|----------|
| **Logo** | Influze Star Icon + Wordmark | 180x40 SVG | Crisp inline SVG component |
| **Hero Image 1** | Model with headphones & camera | 400x520 (3:4) | High-res Unsplash curated influencer portrait |
| **Hero Image 2** | Female model in white sweater | 400x520 (3:4) | High-res Unsplash curated influencer portrait |
| **Video Thumbnail** | Creator recording on smartphone | 600x380 (16:10) | High-res influencer video setup portrait |
| **Creator Portraits (8)** | Ethan Carter, Sophia Bennett, Naomi Mitchell, Ava Collins, Lucas Anderson, Mia Thompson, Lisa Brooks, Chloe Parker | 500x650 (3:4) | Curated professional portraits matching each niche (Tech, Fitness, Beauty, Fashion, Travel, Food) |
| **Project Thumbnails (4)** | Summer Style, Glow Naturally, Explore Beyond, 30-Day Healthy Challenge | 600x380 (16:10) | Curated campaign visual assets matching case study topics |
| **Brand Partner Logos (5)** | Minimalist geometric tech/app sponsor logos | 160x40 SVG | Monochrome SVG partner logos (Logo, Loqo, Lim, Ipsum, Logo) |
| **Social Icons** | Snapchat, Instagram, TikTok, YouTube, Facebook, X | 24x24 SVG | Inline SVGs with exact brand guidelines & color tokens |

---

## 9. Section-by-Section Page Breakdown

### 9.1 Home (`/`)
1. **Header:** Transparent fixed/sticky navigation with logo, 5 nav links, and "Get In Touch" button.
2. **Hero:**
   - Pill badge: `• INFLUENCER MARKETING`
   - Title: "Turn Creators Into [Snapchat][Instagram][->] Your Brand's Biggest Advantage."
   - Subtitle: "We connect brands with top creators to drive real engagement and sales."
   - CTAs: Primary "Our Services", Secondary "Get In Touch".
   - Flanking Creator Cards: Floating left card (Model + "Top Tier Influencer" pill) and floating right card (Model + "Verified Partner" pill).
3. **Slanted Ticker:** Continuous marquee with "INFLUENCER MARKETING • BRAND COLLABORATION • CONTENT CREATION".
4. **Value Prop & Stats:**
   - Left: Big statement "We create influencer campaigns - For brands that value authenticity over vanity metrics..."
   - Right: Studio image preview with play button.
   - Stat Counters: `220+` Talents Managed, `10M` Engagement Generated.
5. **Brand Logo Ribbon:** 5 monochrome brand logos with subtle hover opacity.
6. **Strategic Services:**
   - Header: `• OUR SERVICES` | "Strategic Services / *For Modern Brands*" + "See All" button.
   - 3 Grid Cards: Influencer Marketing, Campaign Strategy, Content Production with images, category tags, and circle arrow buttons.
7. **Dark Feature Showcase:**
   - Background: Deep black `#0A0A0A`.
   - Title: `• WHY CHOOSE US` | "Driving Results Through / *Real Influence*".
   - 3 Column interactive layout: Feature points left, mobile screen mockup center, KPI impact card right.
8. **Testimonials & Social Proof:**
   - Header: `• TESTIMONIALS` | "Trusted By Brands / *And Creators*".
   - Left: 4.9/5 Star Rating with client avatars.
   - Center: Creator video card with play badge.
   - Right: 2 Customer quote cards with 5 yellow stars.
9. **FAQ Accordion:**
   - Header: `• SUPPORT CENTER` | "Your Influencer Marketing / *Questions Answered*".
   - 4 Expandable FAQ items.
10. **Latest Trends (Blog):**
    - Header: `• LATEST ARTICLES` | "Latest Trends In / *Creator Marketing*" + "Read More" button.
    - 3 Article cards with images, titles, excerpts, and links.
11. **Footer:** Comprehensive 4-column footer + copyright line.

### 9.2 About Us (`/about`)
1. **Header Banner:** Breadcrumbs `Home / About Us`, Headline "About Influze", Subtitle on agency philosophy.
2. **Founding Story:** 2-column image + text on bridging brands with creators.
3. **Metrics Grid:** 4 large animated counter cards (450+ Campaigns, 120M+ Reach, 98% Retention, 50+ Global Partners).
4. **Leadership Team:** 4 team cards with photo, name, role, and social links.
5. **Our Core Values:** 4 grid cards (Authenticity, Creativity, Data-Driven, Transparency).
6. **Marquee & Footer.**

### 9.3 Services (`/services`)
1. **Header Banner:** Breadcrumbs `Home / Services`, Headline "Strategic Services", Subtitle.
2. **4 Core Services Deep Dive:**
   - Influencer Marketing: Strategy, vetting, influencer gifting, sponsored content.
   - Campaign Strategy: Goal setting, audience research, creative direction.
   - Creator Management: Talent scouting, contracts, negotiation, deliverables.
   - Content Production: Video editing, UGC shoots, multi-platform adaptations.
3. **Our Process (4 Steps):**
   - Step 01: Brand Discovery & Strategy
   - Step 02: Creator Vetting & Matching
   - Step 03: Content Production & Launch
   - Step 04: Analytics & Optimization
4. **FAQ & Footer.**

### 9.4 Creators (`/creators`)
1. **Header Banner:** Breadcrumbs `Home / Creators`, Headline "Trusted Creator Partners", Subtitle.
2. **Logos Ribbon:** Monochrome client brands.
3. **Talents Showcase:**
   - Header: `• OUR TALENTS` | "Discover Exceptional / *Digital Creators*".
   - Filter Tabs: All, Lifestyle, Beauty, Tech, Fashion, Fitness, Food.
   - 8 Cards Grid: Ethan Carter, Sophia Bennett, Naomi Mitchell, Ava Collins, Lucas Anderson, Mia Thompson, Lisa Brooks, Chloe Parker.
4. **Marquee Banner.**
5. **Support Center FAQ:** 4 Accordion items.
6. **Footer.**

### 9.5 Projects (`/projects`)
1. **Header Banner:** Breadcrumbs `Home / Projects`, Headline "Our Latest Projects", Subtitle.
2. **Logos Ribbon.**
3. **Campaigns Grid:**
   - Header: `• FEATURED PROJECTS` | "Campaigns That / *Deliver Real Results*" + "Learn More" button.
   - 4 Featured Campaign Cards with Reach & Engagement stats, category tags, creator profiles, and circular arrow links.
4. **Marquee Banner.**
5. **Support Center FAQ.**
6. **Footer.**

### 9.6 Pricing (`/pricing`)
1. **Header Banner:** Breadcrumbs `Home / Pricing`, Headline "Choose Your Plan", Subtitle.
2. **Logos Ribbon.**
3. **Pricing Plans:**
   - Header: `• PRICING PLANS` | "Choose The *Perfect* / *Campaign Plan*" + "Learn More" button.
   - 3 Pricing Tier Cards:
     - Starter Plan ($19/Month): Up to 3 Influencer Collaborations, Campaign Strategy Consultation, Content Performance Report, Email Support.
     - Growth Plan ($26/Month - Most Popular with black card styling): Up to 8 Collaborations, Priority Strategy, Bi-weekly Reports, Dedicated Account Manager.
     - Premium Plan ($36/Month): Unlimited Collaborations, Custom Briefings, Real-time Dashboard, 24/7 VIP Support.
4. **Marquee Banner.**
5. **Support Center FAQ.**
6. **Footer.**

### 9.7 FAQ (`/faq`)
1. **Header Banner:** Breadcrumbs `Home / FAQ`, Headline "Frequently Asked Questions", Subtitle.
2. **Categories:** Brand Inquiries, Creator Management, Billing & Escrow, Campaign Analytics.
3. **Interactive Accordion:** 10+ categorized questions with smooth animation.
4. **Direct Help CTA Box:** "Can't find what you're looking for?" with quick contact options.
5. **Footer.**

### 9.8 Blog (`/blog`)
1. **Header Banner:** Breadcrumbs `Home / Blog`, Headline "Latest Trends & Insights", Subtitle.
2. **Featured Post Hero:** Large hero article with image and meta tags.
3. **Article Grid:** 6 articles with category tags, read times, titles, summaries, and authors.
4. **Newsletter Subscribe Box.**
5. **Footer.**

### 9.9 Contact Us (`/contact`)
1. **Header Banner:** Breadcrumbs `Home / Contact`, Headline "Get In Touch", Subtitle.
2. **Contact Info Cards:** Office address, Email, Phone, Working hours.
3. **Metform Contact Form:**
   - Type selector: "I am a Brand" vs "I am a Creator"
   - Inputs: Full Name, Work Email, Company/Handle, Budget Range, Campaign Goals, Message.
   - Pill Submit button with status feedback.
4. **Map / Location graphic.**
5. **Footer.**

### 9.10 404 Not Found (`/not-found`)
1. **Error Layout:** Centered high-impact layout with "404" display font.
2. **Copy:** "Oops! Page Not Found" + friendly explanation.
3. **Navigation Action:** Black pill "Return to Home" button.
4. **Footer.**
