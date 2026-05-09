# Jai Prakash — Portfolio

> Dark editorial brutalism meets Japanese minimalism.

## 🚀 Setup

```bash
npm install
npm run dev
```

## 📸 Adding Your Photo

1. Place your photo as `src/assets/0101.png`
2. The hero section will automatically use it

## ✏️ Editing Content

All your info lives in **one file**: `src/data/portfolio.js`

- Personal details, links → `personal`
- Typewriter roles → `roles`
- About bio + stats → `about`
- Tech stack → `stack`
- Projects → `projects`
- Experience → `experience`
- Education → `education`
- Certifications → `certifications`
- Blog posts → `blogs`

## 🛠 Tech Stack

- React 18 + Vite
- Framer Motion (animations)
- react-intersection-observer (scroll triggers)
- Space Mono + Syne fonts
- Pure CSS (no Tailwind needed)

## 📁 Structure

```
src/
├── assets/         ← put 0101.png here
├── components/     ← one file per section
├── data/
│   └── portfolio.js ← ALL YOUR DATA HERE
├── hooks/
│   └── useScrollReveal.js
├── App.jsx
├── main.jsx
└── index.css
```
