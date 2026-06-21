# 🇧🇷 Aprenda Português – Learn Brazilian Portuguese

> A DuoLingo-style web application that teaches English speakers Brazilian Portuguese, from absolute beginner (A1) to advanced/pro (C1).

---

## 📸 Screenshot

![Dashboard preview](https://placehold.co/900x500/009C3B/FEDF00?text=Aprenda+Portugu%C3%AAs+Dashboard)

> *Replace this placeholder with an actual screenshot after running the app locally.*

---

## 🚀 How to Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/pshah208/eng2br_port.git
cd eng2br_port

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Open in browser
# → http://localhost:5173
```

To build for production:
```bash
npm run build
npm run preview
```

---

## 📚 Curriculum Overview

The app covers **5 Units × 5 Lessons = 25 lessons** with 8–12 exercises each.

| Unit | Level | Title | Lessons |
|------|-------|-------|---------|
| 1 | A1 | Absolute Beginner 🌱 | Greetings, Numbers 1–20, Colors, Days & Months, Family |
| 2 | A2 | Elementary 📚 | Common Verbs, Food & Drinks, At the Market, Telling the Time, Describing People |
| 3 | B1 | Pre-Intermediate 🚀 | Past Tense, Travel & Directions, Weather, Health & Body, Hobbies |
| 4 | B2 | Intermediate ⭐ | Future & Conditional, Shopping, Work & Professions, Culture & Festivals, Opinions |
| 5 | C1 | Advanced / Pro 🏆 | Subjunctive, Idioms & Slang, News Vocabulary, Passive Voice, Formal Writing |

---

## 🎮 Exercise Types

Each lesson rotates through all exercise types:

| Type | Description |
|------|-------------|
| 🃏 **Flashcard** | Flip card to reveal Portuguese translation + pronunciation |
| 🔠 **Multiple Choice** | 4-option question |
| ✍️ **Translation Input** | Type the Portuguese translation of an English phrase |
| 🧩 **Word Bank** | Arrange shuffled tiles to build a sentence |
| 🔗 **Matching Pairs** | Match English ↔ Portuguese |
| ✏️ **Fill in the Blank** | Complete the sentence |
| 🧪 **Mini Quiz** | 5-question review at end of each lesson |

---

## 🏆 Gamification Features

- **✨ XP Points** – Earn XP for each correct answer and lesson completion; displayed in the header
- **🔥 Streak Counter** – Daily streak tracked via `localStorage` with automatic reset if you miss a day
- **📊 Progress Bar** – Per-lesson (top of screen) and per-unit (on dashboard) progress bars
- **❤️ Hearts / Lives** – 3 hearts per session; incorrect answers cost a heart; restored on lesson completion
- **🏅 Level Badges** – Unlock a badge when all lessons in a unit are completed (Beginner, Elementary, Pre-Intermediate, Intermediate, Pro)
- **🏆 Leaderboard** – Mock leaderboard with simulated competitors; your score updates in real time via `localStorage`

---

## 🛠 Tech Stack

| Technology | Role |
|-----------|------|
| **React 18** | UI framework |
| **Vite 4** | Development server and build tool |
| **React Context + useReducer** | Global state management |
| **localStorage** | Persistence for XP, streak, progress, completed lessons |
| **Pure CSS** | Styling (no external UI library – DuoLingo-inspired design) |
| **Vanilla JS** | All curriculum content in `src/data/curriculum.js` |

No backend required – fully static, runs in the browser.

---

## 📁 Project Structure

```
eng2br_port/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx                    # React entry point
    ├── App.jsx                     # Root component & screen router
    ├── App.css                     # Global styles
    ├── data/
    │   └── curriculum.js           # All 25 lessons with exercises
    ├── context/
    │   └── GameContext.jsx         # XP, streak, hearts, progress state
    └── components/
        ├── Dashboard.jsx           # Home screen with all units
        ├── UnitCard.jsx            # Individual unit display
        ├── LessonScreen.jsx        # Active lesson with exercise renderer
        ├── ResultScreen.jsx        # Lesson complete screen
        ├── ProgressBar.jsx         # Reusable progress bar
        ├── Hearts.jsx              # Heart/lives display
        ├── Leaderboard.jsx         # Leaderboard modal
        └── exercises/
            ├── MultipleChoice.jsx  # Multiple choice questions
            ├── TranslationInput.jsx # Free-text translation
            ├── WordBank.jsx        # Tap to build sentences
            ├── MatchingPairs.jsx   # Match English ↔ Portuguese
            ├── FillBlank.jsx       # Fill in the blank
            ├── Flashcard.jsx       # Flip card review
            └── MiniQuiz.jsx        # 5-question end-of-lesson quiz
```

---

## 🌐 Content & Resources

Vocabulary and grammar content is inspired by:
- [Lição 1 – UW-Madison Portuguese](https://wisc.pb.unizin.org/portuguese/chapter/licao-1/)
- CEFR A1→C1 vocabulary lists
- Common Brazilian Portuguese phrases and expressions

The curriculum includes:
- 50+ greetings and common phrases
- Numbers 1–100
- 50+ food and drink words
- 30+ verb conjugations (ser, estar, ter, ir, fazer, querer, poder, saber)
- 40+ color and adjective words
- 30+ travel and direction phrases
- Idioms, slang, formal language, passive voice, and subjunctive mood

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. **Fork** the repository
2. Create a **feature branch**: `git checkout -b feature/add-lesson-audio`
3. Make your changes and ensure `npm run dev` works correctly
4. **Commit** with a clear message: `git commit -m "feat: add audio pronunciation for Unit 1"`
5. **Push** and open a **Pull Request**

### Ideas for contributions
- 🔊 Add audio pronunciation (Web Speech API or audio files)
- 📖 Expand vocabulary lists with more lessons
- 🌙 Improve dark mode styling
- 🎯 Add spaced-repetition algorithm for flashcard review
- 📱 Add PWA support (offline mode)
- 🧪 Add unit tests with Vitest

---

## 📄 License

MIT License – see [LICENSE](LICENSE) for details.

---

## 💚 Motivation

This project was created to help English speakers learn Brazilian Portuguese through a fun, gamified, self-paced experience. Brazil has the largest Portuguese-speaking population in the world and a rich, diverse culture worth exploring. **Boa sorte!** 🇧🇷
