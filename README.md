# 🌿 Afya AI — Intelligent Health Diagnosis Platform

> **Afya** (Swahili) — *Health, Wellbeing, Vitality*

Afya AI is a bilingual AI-powered health diagnosis web platform built for East Africa. It enables patients and healthcare professionals to analyse symptoms intelligently, receive ranked condition assessments powered by Claude AI, and book verified specialists — all in **English or Swahili**.

[![Built with Claude AI](https://img.shields.io/badge/Powered%20by-Claude%20AI-1A6B5E?style=flat-square)](https://anthropic.com)
[![Language](https://img.shields.io/badge/Language-HTML%20%7C%20CSS%20%7C%20JS-E85D3A?style=flat-square)]()
[![Bilingual](https://img.shields.io/badge/Bilingual-EN%20%7C%20SW-F2C94C?style=flat-square)]()

---

## ✨ Features

- 🔍 **Symptom Checker** — 3-step guided flow: body area → symptom input → severity assessment
- 🤖 **AI Diagnosis** — Claude AI returns ranked conditions with match percentages and risk levels
- 🔗 **Illness Filter** — filter results by severity (Low / Moderate / High) or most similar symptoms
- 👨‍⚕️ **Doctor Directory** — verified specialists with real-time availability and one-click booking
- 💬 **AI Chat** — conversational health guidance in English or Swahili
- 🇰🇪 **Bilingual (EN/SW)** — full Swahili translation across all UI, AI responses, and chat

---

## 📁 Project Structure

```
afya-ai/
├── index.html          # Main HTML — all pages (SPA routing)
├── css/
│   └── style.css       # All styles, CSS variables, responsive layout
├── js/
│   └── app.js          # All logic — routing, AI calls, translations, chat
├── .env.example        # Environment variable template
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/afya-ai.git
cd afya-ai
```

### 2. Set up your API key
```bash
cp .env.example .env
```
Open `.env` and add your Anthropic API key:
```
ANTHROPIC_API_KEY=your_api_key_here
```

> ⚠️ **Important:** The current MVP calls the Anthropic API directly from the browser for demo purposes. Before going to production, move all API calls to a server-side proxy (Node.js/Express) so your API key is never exposed in the client.

### 3. Open locally
Simply open `index.html` in your browser — no build step required.

```bash
# Or use a simple local server (recommended)
npx serve .
# or
python -m http.server 8000
```

---

## 🌐 Deployment

### Deploy to Vercel (recommended — free)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Deploy to Netlify
Drag and drop the project folder at [netlify.com/drop](https://app.netlify.com/drop)

### Deploy to GitHub Pages
1. Go to your repo → **Settings** → **Pages**
2. Set source to `main` branch, `/ (root)`
3. Your site will be live at `https://YOUR_USERNAME.github.io/afya-ai`

---

## 🔑 Environment Variables

| Variable | Description | Required |
|---|---|---|
| `ANTHROPIC_API_KEY` | Your Anthropic Claude API key | Yes |

Get your API key at [console.anthropic.com](https://console.anthropic.com)

---

## 🤖 AI Integration

Afya AI uses **Claude Sonnet** (`claude-sonnet-4-20250514`) in two ways:

**1. Structured Diagnosis (Symptom Checker)**
Sends a structured prompt and receives a JSON response containing:
- `riskLevel` — low / moderate / high
- `conditions[]` — ranked conditions with match %, descriptions, severity, matched symptoms
- `summary` — 2–3 sentence recommendation
- `disclaimer` — medical disclaimer in selected language

**2. Conversational Chat**
Maintains a full message history per session and uses a language-specific system prompt to respond as a compassionate health assistant in English or Swahili.

---

## 🎨 Design System

| Token | Value | Usage |
|---|---|---|
| `--accent` | `#1A6B5E` | Primary teal — actions, active states |
| `--accent2` | `#E85D3A` | Coral — high severity, CTAs |
| `--accent3` | `#F2C94C` | Amber — ratings, moderate severity |
| `--dark` | `#0F1923` | Deep navy — text, dark surfaces |
| `--bg` | `#F5F2EB` | Warm cream — page background |

**Fonts:** Instrument Serif (display) · Syne (headings) · DM Sans (body)

---

## ⚠️ Medical Disclaimer

Afya AI is an informational tool only. It does **not** provide medical diagnoses, replace professional medical advice, or constitute a doctor-patient relationship. Always consult a licensed healthcare professional for medical decisions.

---

## 👤 Founder

**Kelvin Ndung'u Murugi** — Founder & CEO, Afya AI
Built for East Africa, by East Africa. 🇰🇪

---

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.
