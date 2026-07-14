# PRD — A.S. Solutions Website

## Original Problem Statement
Create a simple static website for A.S. Solutions — interior designing, electrical, modern kitchen, furniture and all civil works. Basic informational site.

## Clarified Requirements
- FULLY STATIC site (no backend, no DB). Confirmed by user.
- Use business card branding: black & gold, monogram "AS".
- Contact: Ankur Singh · Mobile 8574971297 · WhatsApp 7738600502 · Email ab7854505@gmail.com · Dombivali East, Tilak Nagar.
- Include a scannable WhatsApp QR code.
- Quote/enquiry via mailto + WhatsApp (no server form).
- Awwwards-level premium design.

## Architecture
- Frontend only: React 19 + Tailwind + framer-motion + lenis + react-fast-marquee + react-qr-code.
- No backend endpoints used. server.py untouched.
- Design tokens: obsidian #0A0A0A, gold #D4AF37, ink #FAFAFA. Fonts: Cormorant Garamond (headings) + Manrope (body).

## Implemented (2026-07-14)
- Kinetic hero with masked line-by-line reveal + parallax background.
- Editorial marquee (react-fast-marquee).
- Numbered manifesto services (Interior, Kitchens, Furniture, Electrical, Civil) with parallax clipped images.
- Asymmetric gallery.
- About / studio section (Ankur Singh) with stats + principles.
- Contact section: all card details, Call/WhatsApp/Email CTAs, live WhatsApp QR code.
- Footer with nav + contact links. Lenis smooth scroll site-wide.

## Backlog / Next
- P1: Add real project photos supplied by client to gallery.
- P2: Add testimonials, service-area map, favicon/logo asset.
- P2: SEO meta tags + Open Graph, Google Business link.
EOF
