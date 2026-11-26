# The Pro Stylist: hero (Next.js)

Video-led hero for Keihla Samone's brand (Houston, TX, @the.prostylist).

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

Requires Node 18.18+. Styling uses Tailwind CSS v4 (no `tailwind.config.js`; tokens live in `globals.css`).

## Structure

- `app/layout.tsx`: fonts (Instrument Serif + Hanken Grotesk via `next/font`), metadata
- `app/globals.css`: Tailwind v4 import and theme (brand colours, fonts, `desk` breakpoint at 861px, headline animation)
- `components/Hero.tsx`: hero markup, copy and Tailwind classes
- `components/HeroVideo.tsx`: client component, muted looping video, honours reduced motion
- `postcss.config.mjs`: Tailwind v4 PostCSS plugin
- `public/hero.mp4`, `public/poster.jpg`: silent reel and poster frame

## To do before launch

- Point `#work`, `#about` and `#book` at real sections or a booking URL.
- Consider re-encoding `hero.mp4` (about 10 MB) for faster loads.
