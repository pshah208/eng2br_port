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
| **@azure/msal-browser + msal-react** | Microsoft Entra External ID authentication |
| **localStorage** | Offline/local persistence fallback |
| **Pure CSS** | Styling (no external UI library – DuoLingo-inspired design) |
| **Node.js 20 + Express** | Backend API (`/api`) |
| **Azure Cosmos DB (NoSQL)** | Per-user progress storage |
| **Microsoft Entra External ID** | Managed user registration & sign-in |

---

## 🏗 Architecture

```
┌───────────────────────┐       ┌──────────────────────────┐
│   React Frontend      │──────▶│  Node/Express API (/api) │
│   (Azure App Service) │  JWT  │  (Azure App Service)     │
│                       │◀──────│                          │
│  • MSAL login/logout  │       │  • Entra JWT validation  │
│  • localStorage cache │       │  • Cosmos DB upsert/read │
│  • cloud sync on save │       │  • GET /api/v1/me        │
└───────────────────────┘       │  • PUT /api/v1/me/progress│
           │                    │  • POST /api/v1/me/reset  │
           │                    └──────────┬───────────────┘
           ▼                               │
┌──────────────────────┐        ┌──────────▼───────────────┐
│  Microsoft Entra     │        │  Azure Cosmos DB (NoSQL)  │
│  External ID         │        │  Container: user_progress │
│  (Managed Auth)      │        │  Partition key: /userId   │
└──────────────────────┘        └──────────────────────────┘
```

**Auth flow:**
1. User clicks **Sign In** → MSAL popup login via Entra External ID
2. On success, access token is acquired silently for the API scope
3. `GET /api/v1/me` is called; cloud progress hydrates the app state
4. On each state change (XP, streak, lesson complete, etc.), progress is debounced (1.5s) and sent to `PUT /api/v1/me/progress`
5. **Reset** calls `POST /api/v1/me/reset` to also clear cloud progress
6. Unauthenticated users continue using localStorage only (no sync)

---

## 📁 Project Structure

```
eng2br_port/
├── .env.example                # Frontend env vars (Vite)
├── .github/workflows/
│   ├── frontend-azure.yml      # Deploy frontend to Azure Web App
│   └── api-azure.yml           # Deploy API to Azure Web App
├── index.html
├── package.json
├── vite.config.js
├── README.md
├── api/                        # Node/Express backend
│   ├── .env.example
│   ├── package.json
│   ├── server.js
│   ├── README.md
│   └── src/
│       ├── middleware/
│       │   └── auth.js         # Entra JWT validation middleware
│       ├── routes/
│       │   ├── health.js       # GET /api/v1/health
│       │   └── me.js           # GET/PUT/POST /api/v1/me
│       ├── cosmos/
│       │   └── client.js       # Cosmos DB connection
│       └── services/
│           └── progressService.js  # CRUD operations
└── src/
    ├── auth/
    │   └── msalConfig.js       # MSAL instance + scopes
    ├── context/
    │   ├── AuthContext.jsx     # Auth state (login/logout/token)
    │   └── GameContext.jsx     # Game state + cloud sync
    ├── main.jsx                # React entry + MsalProvider
    ├── App.jsx                 # Root component & screen router
    ├── App.css                 # Global styles
    ├── data/
    │   └── curriculum.js       # All 25 lessons with exercises
    └── components/
        ├── Dashboard.jsx       # Home screen (with login/logout)
        ├── UnitCard.jsx
        ├── LessonScreen.jsx
        ├── ResultScreen.jsx
        ├── ProgressBar.jsx
        ├── Hearts.jsx
        ├── Leaderboard.jsx
        └── exercises/
            ├── MultipleChoice.jsx
            ├── TranslationInput.jsx
            ├── WordBank.jsx
            ├── MatchingPairs.jsx
            ├── FillBlank.jsx
            ├── Flashcard.jsx
            └── MiniQuiz.jsx
```

---

## 🚀 Local Development

### Frontend only (no auth/sync)

```bash
npm install
npm run dev
# → http://localhost:5173  (localStorage only, no sign-in required)
```

### Frontend + API with cloud sync

**1. Set up environment variables:**

```bash
# Frontend
cp .env.example .env
# Fill in VITE_ENTRA_* and VITE_API_BASE_URL

# API
cp api/.env.example api/.env
# Fill in ENTRA_*, COSMOS_* values
```

**2. Start the API:**

```bash
cd api
npm install
npm run dev
# → http://localhost:3001
```

**3. Start the frontend:**

```bash
# (back in repo root)
npm run dev
# → http://localhost:5173
```

---

## ☁️ Azure Setup (Step-by-Step)

### 1. Create Azure resources

```bash
# Resource group
az group create --name rg-eng2br-prod --location eastus

# App Service Plan (Linux, B1)
az appservice plan create \
  --name asp-eng2br \
  --resource-group rg-eng2br-prod \
  --sku B1 --is-linux

# Frontend Web App (Node runtime for static file serving)
az webapp create \
  --name eng2br-frontend \
  --resource-group rg-eng2br-prod \
  --plan asp-eng2br \
  --runtime "NODE:20-lts"

# API Web App
az webapp create \
  --name eng2br-api \
  --resource-group rg-eng2br-prod \
  --plan asp-eng2br \
  --runtime "NODE:20-lts"

# Cosmos DB account (NoSQL/Core API)
az cosmosdb create \
  --name cosmos-eng2br \
  --resource-group rg-eng2br-prod \
  --kind GlobalDocumentDB

# Database and container
az cosmosdb sql database create \
  --account-name cosmos-eng2br \
  --resource-group rg-eng2br-prod \
  --name eng2br

az cosmosdb sql container create \
  --account-name cosmos-eng2br \
  --resource-group rg-eng2br-prod \
  --database-name eng2br \
  --name user_progress \
  --partition-key-path "/userId" \
  --throughput 400
```

### 2. Create Entra External ID app registrations

You need **two app registrations** – one for the frontend and one for the API.

#### 2a. API app registration

1. Azure Portal → **Microsoft Entra ID** → **App registrations** → **New registration**
2. Name: `eng2br-api`; Supported account types: **Accounts in this organizational directory only**
3. After creation, note the **Application (client) ID** → this is `ENTRA_CLIENT_ID` for the API
4. Go to **Expose an API** → **Add a scope**:
   - Application ID URI: `api://<eng2br-api-client-id>`
   - Scope name: `user_impersonation`
   - Admin consent display name: `Access Aprenda Português API`
5. Note the full scope: `api://<eng2br-api-client-id>/user_impersonation` → `VITE_ENTRA_API_SCOPE`

#### 2b. Frontend app registration (Entra External ID / CIAM)

1. In your **External ID tenant**: **App registrations** → **New registration**
2. Name: `eng2br-frontend`
3. Redirect URIs → **Single-page application (SPA)**:
   - `http://localhost:5173` (dev)
   - `https://eng2br-frontend.azurewebsites.net` (prod)
4. Under **API permissions** → **Add a permission** → **My APIs** → `eng2br-api` → `user_impersonation`
5. Note the **Application (client) ID** → `VITE_ENTRA_CLIENT_ID`
6. The authority is your **External ID tenant domain**:
   - `https://<tenant>.ciamlogin.com/<tenant>.onmicrosoft.com`

#### 2c. JWKS / issuer values for the API

- `ENTRA_JWKS_URI` = `https://<tenant>.ciamlogin.com/<tenant>.onmicrosoft.com/discovery/v2.0/keys`
- `ENTRA_ISSUER` = `https://<tenant>.ciamlogin.com/<tenant>.onmicrosoft.com/v2.0`

### 3. Configure API App Service settings

```bash
# Get Cosmos DB primary key
COSMOS_KEY=$(az cosmosdb keys list \
  --name cosmos-eng2br \
  --resource-group rg-eng2br-prod \
  --query primaryMasterKey -o tsv)

COSMOS_ENDPOINT=$(az cosmosdb show \
  --name cosmos-eng2br \
  --resource-group rg-eng2br-prod \
  --query documentEndpoint -o tsv)

az webapp config appsettings set \
  --name eng2br-api \
  --resource-group rg-eng2br-prod \
  --settings \
    ENTRA_JWKS_URI="https://<tenant>.ciamlogin.com/<tenant>.onmicrosoft.com/discovery/v2.0/keys" \
    ENTRA_ISSUER="https://<tenant>.ciamlogin.com/<tenant>.onmicrosoft.com/v2.0" \
    ENTRA_CLIENT_ID="<api-client-id>" \
    COSMOS_ENDPOINT="$COSMOS_ENDPOINT" \
    COSMOS_KEY="$COSMOS_KEY" \
    COSMOS_DB_NAME="eng2br" \
    COSMOS_CONTAINER_NAME="user_progress" \
    CORS_ORIGIN="https://eng2br-frontend.azurewebsites.net" \
    NODE_ENV="production" \
    PORT="8080"
```

### 4. Configure CORS on the API App Service

```bash
az webapp cors add \
  --name eng2br-api \
  --resource-group rg-eng2br-prod \
  --allowed-origins "https://eng2br-frontend.azurewebsites.net"
```

### 5. Configure GitHub Actions secrets & variables

In your GitHub repository → **Settings** → **Secrets and variables** → **Actions**:

**Secrets:**
- `AZURE_WEBAPP_PUBLISH_PROFILE_FRONTEND` – publish profile XML from frontend App Service
- `AZURE_WEBAPP_PUBLISH_PROFILE_API` – publish profile XML from API App Service

**Variables:**
- `AZURE_WEBAPP_NAME_FRONTEND` = `eng2br-frontend`
- `AZURE_WEBAPP_NAME_API` = `eng2br-api`
- `VITE_ENTRA_AUTHORITY` = `https://<tenant>.ciamlogin.com/<tenant>.onmicrosoft.com`
- `VITE_ENTRA_CLIENT_ID` = `<frontend-client-id>`
- `VITE_ENTRA_REDIRECT_URI` = `https://eng2br-frontend.azurewebsites.net`
- `VITE_ENTRA_API_SCOPE` = `api://<api-client-id>/user_impersonation`
- `VITE_API_BASE_URL` = `https://eng2br-api.azurewebsites.net/api/v1`

Push to `main` to trigger both deployment workflows.

---

## 🔄 Migration Note

- **Existing users** (localStorage only): progress continues to work locally as before. No sign-in required.
- **Authenticated users**: on first sign-in the cloud profile is fetched and hydrates the local state. All subsequent state changes are synced to the cloud (debounced 1.5 s).
- Last-write-wins strategy: cloud is the source of truth after sign-in.

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
