# Prithvix Marketing Website - PRD

## Original Problem Statement
Build a premium, production-style marketing website for Prithvix - an AgriTech dealer management app for agricultural input dealers across rural India.

## Architecture
- **Frontend**: React.js + Tailwind CSS + Three.js (raw, not R3F) + Framer Motion
- **Backend**: FastAPI (minimal, no active use for marketing site)
- **Database**: MongoDB (available but unused for static marketing site)

## User Personas
- Agricultural input dealers in rural India
- Potential investors/partners evaluating Prithvix
- Farmers discovering the platform

## Core Requirements (Static)
- Premium AgriTech brand feel: earthy, grounded, trustworthy, modern
- Brand colors: #1A3C2B (forest green), #D4A853 (gold), #F5F0E8 (cream), #0E1A14 (dark)
- Typography: Playfair Display (headings), Plus Jakarta Sans (body), JetBrains Mono (mono)
- Fully responsive (375px, 768px, 1280px, 1440px)
- 3D hero scene with fallback

## What's Been Implemented (Dec 2025)
- [x] Splash screen with animated logo reveal + "Enter Experience" button
- [x] 3D "Living Crop Intelligence Terrain" hero (raw Three.js: terrain, crops, particles, markers)
- [x] Glassmorphism sticky header with nav links
- [x] 6 feature sections with animated UI mockups (Farmer Registration, Field Visit, Credit Ledger, Inventory, Analytics, AI Chat)
- [x] Animated stats bar (2,000+ Farmers, 5 Languages, 30% Faster, 100% Visibility)
- [x] How It Works 4-step flow with connecting timeline
- [x] Pricing section (Basic INR 999/mo, Premium INR 2,499/mo) with glowing recommended card
- [x] Testimonials carousel with 4 dealer personas
- [x] Trust badges (Made in India, Offline-First, Built for Agri Retailers)
- [x] Demo request modal with contact form
- [x] Premium dark footer with PRITHVIX watermark
- [x] Mobile responsive with hamburger menu
- [x] SEO meta tags (title, description, keywords, canonical)
- [x] Open Graph tags (og:title, og:description, og:image, og:site_name)
- [x] Twitter Card tags (summary_large_image)
- [x] Apple mobile web app tags
- [x] WhatsApp chat widget (floating FAB + tooltip with "Start Chat" CTA)
- [x] Hero flash fix (removed lazy loading for above-the-fold 3D scene)

## Prioritized Backlog
### P0 (Critical) - All done
### P1 (Important)
- Contact form backend integration (Supabase/API)
- SEO meta tags and Open Graph images
- Performance optimization (lazy loading, image optimization)
### P2 (Nice to have)
- Video embed for "Watch How It Works"
- Blog/content section
- Localization (Hindi, Marathi, Gujarati)
- Cookie consent banner
- Analytics integration (Google Analytics/Mixpanel)

## Next Tasks
1. Connect demo form to backend/email service
2. Add SEO meta tags and OG images
3. Add video content for product demo
4. Performance audit and optimization
