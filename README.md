# Portfolio website — Vercel deployment info

This is a Vite + React + TypeScript portfolio site.

Quick Vercel setup

1. In the Vercel dashboard, import this repository.
2. Set the build settings (if Vercel doesn't detect them automatically):
   - Framework Preset: Other
   - Build Command: npm run build
   - Output Directory: dist
3. Add environment variables in the Vercel project settings (Environment Variables):
   - VITE_EMAILJS_SERVICE_ID = service_y2qa76w
   - VITE_EMAILJS_TEMPLATE_ID = <your-template-id>
   - VITE_EMAILJS_PUBLIC_KEY = U03_e8wy-S1wQpMMv

Notes
- A `vercel.json` is included to ensure the app is built as a static site and all routes are rewritten to `index.html` (for SPA routing).
- For local development copy `.env.example` to `.env` and update values.
