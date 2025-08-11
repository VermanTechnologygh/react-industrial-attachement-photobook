# React Group Photobook PWA

A simple, offline-ready photobook website built with React + Vite.  
Deployable on Vercel in minutes.

## Features
- Installable as a PWA
- Works offline
- Autoplay slideshow (5s per photo)
- Easy to update captions & images

## How to Replace Photos & Captions
1. Go to `src/photos.json` and update the `src` and `caption` fields.
2. Add your images into `public/photos/` with the same filenames or update the JSON accordingly.

## Deployment Steps
```bash
git init
git remote add origin https://github.com/YOUR_USERNAME/group-photobook.git
git add .
git commit -m "Initial commit"
git push -u origin main
```
Then go to [Vercel](https://vercel.com) → **New Project** → Import your GitHub repo.

Build settings for Vercel:
- Framework: **Vite**
- Build Command: `npm run build`
- Output Directory: `dist`

## Run Locally
```bash
npm install
npm run dev
```