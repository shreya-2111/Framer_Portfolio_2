# Premium Developer Portfolio

A modern, dark, immersive portfolio built with React + TypeScript + Vite + Tailwind CSS + GSAP + Three.js.

---

## Folder Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Loader.tsx        # Animated loading screen
│   │   ├── Navbar.tsx        # Sticky nav with scroll-spy
│   │   ├── HeroScene.tsx     # Three.js 3D star field + shapes
│   │   ├── Hero.tsx          # Hero section with GSAP intro
│   │   ├── About.tsx         # About + stats
│   │   ├── Skills.tsx        # Animated skill bars
│   │   ├── Projects.tsx      # Project cards with hover effects
│   │   ├── Experience.tsx    # Timeline-style work history
│   │   ├── Contact.tsx       # Contact form
│   │   └── Footer.tsx
│   ├── data/
│   │   └── portfolio.ts      # All your content lives here
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── vite.config.ts
└── package.json
```

---

## Installation

```bash
# 1. Clone or copy the project
cd portfolio

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev

# 4. Build for production
npm run build
```

---

## Customization Guide

All content is in one file: `src/data/portfolio.ts`

- Change `personalInfo` — your name, bio, email, social links
- Edit `skills` array — add/remove skills and levels
- Edit `projects` array — swap in your real projects + images
- Edit `experience` array — your work history

To change colors, edit `src/index.css`:
```css
--accent: #6c63ff;   /* purple */
--accent2: #00d4ff;  /* cyan */
```

---

## Deployment

### Vercel (recommended)
```bash
npm install -g vercel
vercel --prod
```
Or connect your GitHub repo at vercel.com — it auto-detects Vite.

### Netlify
```bash
npm run build
# Drag the dist/ folder to netlify.com/drop
```
Or set build command: `npm run build`, publish dir: `dist`

---

## Performance Best Practices

- Three.js is lazy-loaded (only loads when Hero mounts)
- Vendor chunks are split: three-vendor, gsap-vendor, react-vendor
- Images use `loading="lazy"`
- Fonts are preconnected in index.html
- ScrollTrigger contexts are properly cleaned up on unmount

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 + TypeScript | UI framework |
| Vite | Build tool |
| Tailwind CSS v4 | Styling |
| GSAP + ScrollTrigger | Animations |
| Three.js + R3F | 3D effects |
| Lucide React | Icons |

## 🌐 Live Demo
🔗 [Visit Website](https://framer-portfolio-2.vercel.app/)
