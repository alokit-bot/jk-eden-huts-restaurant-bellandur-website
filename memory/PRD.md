# PRD — JK Eden Huts Restaurant Website

## Original Problem Statement
Frontend-only single-page website for JK Eden Huts Restaurant, Bellandur, Bengaluru — private bamboo hut dining, tandoor, biryani and Arabian Mandi. Sections: Header/Nav with call CTA, Hero with trust badges, Stats banner, Dining Experience story, Menu with ₹ pricing and category filters (All, Arabian Mandi, Tandoor & Grills, Curries & Breads, Beverages), Reviews, Location/Timings with hut booking inquiry form, Footer. Direct tel: links, WhatsApp link, Google Maps directions. No backend, no database. Design: tropical warm rustic — jungle green #14532D, timber brown #854D0E, lantern amber #D97706, cream #FDFBF7, copper #C2410C. Mobile-first (375/768/1440).

## Architecture
- React (CRA) frontend only, Tailwind CSS, Shadcn sonner for toasts, lucide-react icons
- Single-page anchored sections; static data in `src/data/menu.js`
- Fonts: Playfair Display (headings), Plus Jakarta Sans (body)
- No backend calls; phone via tel:+919148686005, WhatsApp wa.me/919148686005, Google Maps link

## User Personas
- Office teams from RMZ Ecospace looking for team dinners
- Couples wanting private date-night huts
- Families celebrating birthdays; late-night diners till 1 AM

## Core Requirements (static)
- All 11 sections from the brief, INR pricing, badges (Bestseller / Chef's Special / Halal), category filters, mobile responsive, tel/WhatsApp/Maps links

## Implemented (2026-07-14)
- Sticky jungle-green navbar with mobile toggle + Book a Hut CTA
- Hero with bamboo hut imagery, headline, 2 CTAs, 4 trust badges
- Stats banner (4,800+ guests, 4.0★, 20+ huts, 100% halal)
- Dining Experience story with imagery and occasion tags
- Private Huts showcase (3 hut types with capacity/features)
- Menu: 17 dishes, category filter tabs, search, veg toggle, badges, ₹ pricing
- Reviews (3 testimonials + 4.0★ rating pill)
- Hut booking inquiry form with validation, confirmation state + Sonner toast (client-side, MOCKED submission)
- Location section (address, hours, tel, WhatsApp, Google Maps directions)
- Footer with quick links, contact, hours, © 2026

## Backlog / Next Tasks
- P1: Wire booking form to WhatsApp message pre-fill or email notification (Resend)
- P1: Embed live Google Map iframe in Location section
- P2: Full menu page with more dishes / printable menu PDF
- P2: Photo gallery section, online food ordering (Swiggy/Zomato links)
- P2: SEO setup (meta/OG/JSON-LD, sitemap)

## Credentials
- None — no auth, no backend. Contact numbers are public business info.
