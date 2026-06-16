# Jethia Lao — Architecture Portfolio

A minimalist-luxury, editorial portfolio website for **Jethia Victoria Lao**, BS Architecture graduate of Cebu Institute of Technology – University. Selected works 2025–2026.

Built with **Next.js 15 (App Router)**, **Tailwind CSS**, **Framer Motion**, and **TypeScript**. Designed for **Vercel** deployment.

## Features

- **Oversized editorial type** — Playfair Display / Source Serif 4 / JetBrains Mono on a monochrome gallery palette.
- **Smooth scroll animations** — scroll-reveal, parallax hero images, word-by-word headline reveals, a scroll progress bar (all respecting `prefers-reduced-motion`).
- **Project showcase pages** — `/projects` index plus rich detail pages with facts, narrative sections, an image **lightbox** (keyboard + arrows), and drawings.
- **About & Contact** — education timeline, animated software-skill bars, and a validated contact form (opens the visitor's mail client).
- **PDF download** — one-click portfolio download from the nav, footer, about, and contact pages.
- **Responsive & accessible** — mobile-first, full-screen mobile menu, skip link, visible focus states, semantic landmarks, and `next/image` optimization.

## Project structure

```
src/
  app/
    layout.tsx            # fonts, metadata, chrome
    page.tsx              # home
    projects/page.tsx     # work index
    projects/[slug]/      # project detail (static-generated)
    about/  contact/      # about & contact pages
    globals.css
  components/              # Navbar, Footer, Hero, Gallery, Reveal, etc.
  lib/
    site.ts               # contact + about data
    projects.ts           # project content
public/
  images/                 # web-optimized renders (extracted from the PDF)
  Jethia-Lao-Architecture-Portfolio.pdf
```

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import it at [vercel.com/new](https://vercel.com/new) — the Next.js preset is detected automatically.
3. Deploy. No environment variables are required.

## Editing content

- Update text, contact details, and the project list in `src/lib/site.ts` and `src/lib/projects.ts`.
- Replace renders in `public/images/<project-slug>/` (keep the filenames) and the CV at `public/Jethia-Lao-Architecture-Portfolio.pdf`.
