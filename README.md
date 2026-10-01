# Velora Coating

Landing page for **Velora Coating** — industrial polymer powder coating (EU).

Built from the Figma frame *Velora Coating — главная*.

## Stack

- Next.js 16.3 (App Router)
- React 19
- Tailwind CSS 4
- TypeScript

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Notes

- Images are loaded from temporary Figma MCP asset URLs (valid ~7 days). Download them into `public/` for production.
- Design tokens live in `src/app/globals.css`.
- All 12 sections from the mockup are implemented on a single page.

## Deploy

Connect the repo to Vercel (or any Node host) and deploy.
