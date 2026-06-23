# CNSS — Wound Plaster Advisor

A pharmaceutical decision-support web application that guides users through a clinical wound assessment and recommends the most suitable plaster type, including plaster size and purulent (discharge) grading.

---

## Features

- 9-question wound assessment wizard (one question at a time)
- Ranks all 4 plaster types by suitability score
- **Plaster size recommendation** based on wound dimensions (< 1 cm to > 6 cm)
- **Purulent level grading** (None → Mild → Moderate → Heavy) with colour-coded severity
- Back/Next navigation — answers are preserved when going back
- Clinical disclaimer on welcome and results screens
- Fully self-contained — no backend or database required

### Plaster Types

| Type | Indication |
|------|------------|
| Normal Plaster | Clean, superficial cuts and abrasions |
| Antimicrobial Plaster | Infected or contaminated wounds |
| Burn Plaster | Thermal or chemical burn injuries |
| Scar Treatment Plaster | Healed wounds / scar reduction |

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [React](https://react.dev/) | ^19 | UI framework |
| [TypeScript](https://www.typescriptlang.org/) | ~6.0 | Type safety |
| [Vite](https://vite.dev/) | ^8 | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com/) | ^4 | Utility-first styling |
| [oxlint](https://oxc.rs/docs/guide/usage/linter.html) | ^1 | Fast JavaScript/TypeScript linter |

---

## Prerequisites

Make sure the following are installed before proceeding:

- **Node.js** v18 or higher — https://nodejs.org/
- **npm** v9 or higher (bundled with Node.js)
- **Git** — https://git-scm.com/

Verify your versions:
```bash
node -v
npm -v
git --version
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone git@github.com:WhiteGabeDog/CNSS.git
cd CNSS
```

Or clone via HTTPS if you have not set up an SSH key:
```bash
git clone https://github.com/WhiteGabeDog/CNSS.git
cd CNSS
```

### 2. Install dependencies

```bash
npm install
```

This installs all runtime and development dependencies listed in `package.json`.

### 3. Start the development server

```bash
npm run dev
```

Open your browser at **http://localhost:5173/**

The dev server supports Hot Module Replacement (HMR) — changes to source files are reflected instantly without a full page reload.

---

## Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| Dev server | `npm run dev` | Start Vite dev server with HMR at localhost:5173 |
| Production build | `npm run build` | Type-check with `tsc` then bundle with Vite into `dist/` |
| Preview build | `npm run preview` | Serve the `dist/` folder locally to test the production build |
| Lint | `npm run lint` | Run oxlint on the source files |

---

## Project Structure

```
CNSS/
├── public/                  Static assets served as-is
│   └── favicon.svg
├── src/
│   ├── types/
│   │   └── index.ts         TypeScript interfaces (Question, Answer, Plaster, etc.)
│   ├── data/
│   │   ├── questions.ts     9 assessment questions with weighted answer scoring
│   │   └── plasters.ts      4 plaster definitions (name, description, indications)
│   ├── utils/
│   │   └── scorer.ts        Accumulates answer scores → ranked PlasterResult[]
│   ├── components/
│   │   ├── WelcomeScreen.tsx   Intro screen with disclaimer and Start button
│   │   ├── ProgressBar.tsx     Animated step progress indicator
│   │   ├── QuestionCard.tsx    Single question with radio-style answer selection
│   │   ├── ResultCard.tsx      Individual plaster recommendation card
│   │   └── ResultsScreen.tsx   Ranked results + size & purulent grading cards
│   ├── App.tsx              Top-level state machine (welcome → questions → results)
│   ├── main.tsx             React entry point
│   └── index.css            Tailwind CSS v4 import
├── index.html               Vite HTML entry
├── vite.config.ts           Vite config with React + Tailwind plugins
├── tsconfig.json            TypeScript project references config
├── tsconfig.app.json        TypeScript config for src/
└── package.json
```

---

## Building for Production

```bash
npm run build
```

Output is written to `dist/`. To preview it locally:

```bash
npm run preview
```

The preview server runs at **http://localhost:4173/** by default.

To deploy, copy the contents of `dist/` to any static hosting service (e.g., GitHub Pages, Netlify, Vercel, Azure Static Web Apps).

---

## Scoring Logic

Each answer option carries a hidden `ScoreMap` — numeric weights for each of the 4 plaster types. After all 9 questions are answered, weights are summed per plaster and the plasters are sorted highest-to-lowest. The top result is highlighted as the **Best Match**.

Answers to Q8 (wound size) and Q9 (purulent quantity) also carry `sizeLabel` and `purulentLabel` strings that are extracted and displayed as dedicated info cards on the results screen.

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-change`
3. Commit your changes: `git commit -m "feat: describe your change"`
4. Push to your fork: `git push origin feature/my-change`
5. Open a Pull Request

---

## Disclaimer

This tool is a clinical decision-support aid only. It does not replace professional medical advice. For serious wounds, burns, or signs of severe infection, consult a qualified healthcare professional immediately.
