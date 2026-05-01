# My Portfolio

This is a Vite + React portfolio project converted from a Base44 export so it can run locally and deploy on Vercel.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:5173`.

## Deploy on Vercel

1. Upload all files in this folder to a GitHub repository.
2. Do not upload `node_modules` or `dist`.
3. Import the GitHub repository into Vercel.
4. Use these settings:
   - Framework Preset: Vite
   - Install Command: `npm install`
   - Build Command: `npm run build`
   - Output Directory: `dist`

## Important

Upload the contents of this folder directly to GitHub. Your repository should show `index.html`, `package.json`, `vite.config.js`, `src`, and `public` at the top level.
Do not put these files inside another nested folder.
