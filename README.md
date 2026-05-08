# 🥋 The Gentle Art Tracker

A minimalist, dark-mode Gi Jiu-Jitsu training app for serious practitioners.

**Repo:** https://github.com/Mjam7/jiu-jitsu  
**Live app:** https://mjam7.github.io/jiu-jitsu

Built with React + Vite + Tailwind CSS. Zero backend — all data stored locally in your browser.

---

## Features

### 📚 Technique Library
- 8 core BJJ categories: Guard, Pass, Submission, Back Take, Sweep, Escape, Takedown, Guard Pull
- Gi-specific grip metadata (Sleeve, Lapel, Pant, Belt grips)
- 1–10 confidence scoring with visual bar
- Reference video links (YouTube, Instagram)
- Search, filter by category, sort by name/confidence/recency

### 🎙️ Session Log
- Voice-to-text dictation via Web Speech API
- Smart technique tagging — link library moves to each session
- Session metadata: date, title, duration, type
- Full scrollable history with expandable notes

### 🗺️ Game Hub
- A-Game: Confidence 7+, trained in last 21 days
- B-Game: Confidence 4-6, active development
- C-Game / Lab: Experimental moves
- Strategy Map: Visual entry → passing → finishing flow

### 👤 Profile & Competition Tracker
- Belt + stripe selector with visual belt
- Competition log with results and footage links

---

## Stack

- React 18 + Vite
- Tailwind CSS v4
- localStorage (no backend)
- Web Speech API (voice dictation)
- Lucide React icons
- Bebas Neue / DM Mono / DM Sans fonts

---

## Getting Started

```bash
git clone https://github.com/Mjam7/jiu-jitsu.git
cd jiu-jitsu
npm install
npm run dev
```

---

## Deploy to GitHub Pages

```bash
npm run deploy
```

This runs `npm run build` then publishes the `dist/` folder to the `gh-pages` branch automatically. Your app will be live at https://mjam7.github.io/jiu-jitsu within a minute or two.

Make sure GitHub Pages is set to deploy from the `gh-pages` branch in your repo settings:  
Settings → Pages → Source → Deploy from branch → `gh-pages` / `/ (root)`

---

## License

MIT
