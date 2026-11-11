# DETECTIVEX – THE INDIAN FILES

> *"Every clue has a story. Every story has a mystery."*

**DetectiveX – The Indian Files** is an interactive, story-driven web application designed to deliver an authentic investigative and deduction experience set in rich historical, cultural, and modern Indian landscapes.

The application features a bespoke vintage-archival aesthetic (warm parchment tones, royal burgundy accents, gold wax seals, and archival stamps), inviting players to step into the role of a consulting detective to examine physical evidence, explore clues one by one, answer logical deduction questions, and solve 9 distinct mystery cases.

---

## 🔍 Key Features

### 1. Central Case Explorer (9 Diverse Domains)
Each case takes approximately **4–5 minutes** to solve and is designed with **Very Easy**, beginner-friendly mechanics:
- **01. HISTORY – The Missing Diamond** (*National Museum, New Delhi*): Locate a misplaced replica diamond moved during marble floor cleaning.
- **02. TECHNOLOGY – The Campus Code** (*Campus Computer Lab, Bengaluru*): Solve a friendly mascot code on computer screens to unlock the robotics portal.
- **03. EDUCATION – The Library Secret** (*Heritage Library, Chennai*): Discover why colorful astronomy books were placed on the study cart.
- **04. ENVIRONMENT – The Green Mystery** (*Sunshine Community Garden, Pune*): Find out why garden marigolds needed extra fresh water after shed cleaning.
- **05. FOOD – The Chef's Secret** (*Old Delhi Heritage Kitchen*): Identify the missing Kashmir saffron threads in Chef Kabir's festive biryani.
- **06. TRAVEL – The Lost Parcel** (*Kalka-Shimla Toy Train*): Trace a gift package containing a wooden clock misrouted at Barog Station.
- **07. ARTS – The Artist's Clue** (*Kala Ghoda Gallery, Mumbai*): Match two landscape sunrise paintings back to their correct artist wall labels.
- **08. SPORTS – The Final Score** (*City Cricket Stadium, Mumbai*): Correct a digital scoreboard error caused by an accidental +10 bulb test.
- **09. INDIAN CULTURE – The Festival Mystery** (*Heritage Pavilion, Madurai*): Locate two traditional bronze peacock lamps polished for the evening prayers.

### 2. Multi-Criteria Search & Filtering
- **Domain Filter:** Filter seamlessly across all 9 domains (*History, Technology, Education, Environment, Food, Travel, Arts, Sports, Indian Culture*).
- **Difficulty Filter:** Filter by *Very Easy*.
- **Live Search:** Instant fuzzy search across case titles, locations, and narrative synopses.
- **Sorting Options:** Sort cases by Default Archival Order, Duration, Alphabetical Title, or Player Rating.

### 3. Step-by-Step Clue Investigation (One by One)
- **One-by-One Clue Inspector:** Displays clues sequentially with `[Previous Clue]` and `[Next Clue]` navigation, detailed analyses, and investigative findings.
- **Clue Revisit Strip:** Clickable numbered tabs (`[Clue 1 ✓]`, `[Clue 2 ✓]`, ...) allow players to instantly revisit previously examined clues at any time.
- **All Clues Grid View:** Toggle switch to inspect all clues in a 3-column overview.
- **Evidence Notebook:** Integrated field notebook recording examined leads, personal observations, and case objectives.
- **Live Investigation Timer:** Active timer measuring elapsed time (target: 4–5 minutes).

### 4. Deduction Questions & Answer Validation
- **3 Easy Multiple-Choice Questions Per Case:** Each question provides **exactly 3 clear options**.
- **Per-Question Hints:** One simple hint available per question (-2 points).
- **Instant Validation Feedback:**
  - Correct: *"Amazing! You're a great detective!"*
  - Incorrect: *"Good try! Let's look at the clues again."*
- **Retry Feature:** Allows players to adjust answers without losing previously discovered evidence.

### 5. Scoring & Case Completion
- **Scoring System:**
  - Correct answer: **10 points** per question ($30\text{ points}$ max per case).
  - Using a hint: **Deduct 2 points**.
  - Completing all questions: **Completion Badge** awarded.
- **Completion Modal:** Displays congratulations banner, itemized points breakdown, solving time, hints used, and the official CID verdict explanation.

### 6. Detective Profile & 6-Tier Ranking System
- Dynamic rank progression calculated from actual gameplay points:
  1. **Junior Munshi** ($0+\text{ pts}$)
  2. **Sub-Inspector** ($20+\text{ pts}$)
  3. **Inspector** ($50+\text{ pts}$)
  4. **Senior Consulting Sleuth** ($100+\text{ pts}$)
  5. **Chief CID Superintendent** ($160+\text{ pts}$)
  6. **Master Detective of the Republic** ($240+\text{ pts}$)
- **Player Stats:** Total accumulated points, completed cases count, remaining cases count, total clues examined, and hint-free clearance rate.
- **Customizable Dossier:** Editable detective name, department, and biographical notes with inline persistence.

### 7. Gameplay Achievement System
Seven unlocked achievements with custom badges and unlock timestamps:
1. 🧭 **First Investigation:** Solve your very first mystery case.
2. 👁️ **Master Observer:** Examine 100% of clues in a single investigation.
3. 🔖 **Clue Collector:** Catalog 10 or more total clues across your career.
4. ⏱️ **Quick Thinker:** Solve any case in under 5 minutes ($300\text{ seconds}$).
5. 🛡️ **Hint-Free Detective:** Solve an investigation with zero hints used.
6. 🏆 **Case Champion:** Solve 5 distinct cases in the repository.
7. 👑 **Mystery Master:** Solve all 9 cases across all nine domains.

### 8. My Investigations Hub
- **Individual Progress Matrix:** Overview grid showing statuses (*Solved*, *In Progress*, *Unopened*), score badges, and action buttons.
- **Filtered Tab Views:** Dedicated views for *Completed Cases*, *In Progress Cases*, and *Not Started Cases*.
- **Investigator's Field Notes:** Add, review, filter by case, and delete custom field notes.

### 9. Persistent LocalStorage State
- Automatically persists all progress, completed case histories, unlocked achievements, active case timers, field notes, and profile settings across page refreshes and browser sessions.

---

## 🛠️ Technology Stack

| Category | Technology |
|---|---|
| **Frontend Framework** | [React 18.3](https://react.dev/) |
| **Build Tool & Dev Server** | [Vite 6.0](https://vite.dev/) |
| **Routing** | [React Router DOM v6](https://reactrouter.com/) |
| **Styling & Design System** | [Tailwind CSS v3.4](https://tailwindcss.com/) |
| **Iconography** | [Lucide React](https://lucide.dev/) |
| **State Persistence** | Custom React `useLocalStorage` Hook |
| **Typography** | Google Fonts (*Cinzel*, *Playfair Display*, *Plus Jakarta Sans*, *JetBrains Mono*) |

---

## 📁 Project Structure

```text
detectiveX/
├── index.html                   # HTML entry point with Google Fonts integration
├── package.json                 # Dependencies and npm scripts
├── postcss.config.js            # PostCSS configuration
├── tailwind.config.js           # Custom color palette, fonts, and shadows
├── vite.config.js               # Vite bundler configuration
├── src/
│   ├── main.jsx                 # React root render
│   ├── App.jsx                  # Main application router and global state coordination
│   ├── index.css                # Custom parchment backgrounds, fonts, and utility classes
│   ├── components/
│   │   ├── cases/
│   │   │   └── CaseCard.jsx     # Reusable case card with status badges and action links
│   │   ├── common/
│   │   │   ├── Badge.jsx        # Difficulty badges
│   │   │   ├── Footer.jsx       # Archival footer with dispatches and navigation
│   │   │   ├── IndianMotif.jsx  # Archival stamps, wax seals, ornamental dividers
│   │   │   └── Navbar.jsx       # Responsive header with live active case indicator
│   │   ├── home/
│   │   │   ├── FeaturedCases.jsx # Priority case dossiers showcase
│   │   │   ├── HeroSection.jsx  # Landing hero section
│   │   │   ├── HowItWorks.jsx   # 4-step investigative process
│   │   │   └── StatisticsSection.jsx # National repository stats
│   │   └── investigation/
│   │       ├── CaseCompletionModal.jsx # Score breakdown & verdict screen
│   │       ├── ClueDetailModal.jsx     # Magnifying glass clue inspection modal
│   │       ├── EvidenceNotebook.jsx    # Interactive notebook side panel
│   │       ├── HintModal.jsx           # Tiered CID hint dialog
│   │       └── SubmitDeductionModal.jsx # Question validation & deduction modal
│   ├── data/
│   │   ├── achievementsData.js  # 7 achievements and 6 detective ranks
│   │   ├── casesData.js         # Complete metadata and storylines for 9 cases
│   │   ├── investigationData.js # Clues, progressive hints, questions, and verdicts
│   │   └── mockUserData.js      # Initial user state template
│   ├── hooks/
│   │   └── useLocalStorage.js   # Safe error-handled LocalStorage hook
│   ├── pages/
│   │   ├── AboutPage.jsx        # Platform philosophy, game mechanics, and domain guide
│   │   ├── CaseDetailPage.jsx   # Case dossier overview and story briefing
│   │   ├── ExploreCasesPage.jsx # 9-case grid with search, filter, and sorting
│   │   ├── HomePage.jsx         # Landing page
│   │   ├── InvestigationPage.jsx# Full interactive investigation workspace
│   │   ├── MyInvestigationsPage.jsx # Progress matrix, tabs, and field notes diary
│   │   ├── NotFoundPage.jsx     # Thematic 404 handler
│   │   └── ProfilePage.jsx      # Live detective dossier, badges, and history log
│   └── utils/
│       └── progressManager.js   # Scoring math, rank evaluation, and achievement logic
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (Version 18.x, 20.x, or later)
- [npm](https://www.npmjs.com/) (Version 9.x or later)

### Installation

1. **Clone or navigate to the repository:**
   ```bash
   cd detectiveX
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:3000/`.

4. **Build for production:**
   ```bash
   npm run build
   ```
   The compiled static assets will be output to the `dist/` folder.

---

## 🎨 Design Direction & Aesthetic Guidelines

The platform strictly avoids modern neon, cyberpunk, or flat dark themes in favor of an authentic vintage archival aesthetic:
- **Warm White (`#FCFAF7`) & Soft Cream (`#F5EFEB`):** Clean, parchment-inspired reading surfaces.
- **Deep Burgundy (`#6E1A29`, `#4A0E17`):** Official investigative dossiers, seals, and primary accents.
- **Subtle Antique Gold (`#C99738`, `#DFB15B`):** Archival borders, stars, and achievement badges.
- **Deep Sepia Dark (`#2C1E18`):** High-contrast typography for optimal readability.
- **Indian Motifs:** Custom SVG Wax Seals, Ashoka star embellishments, and archival stamps.

---

## 📜 License
This project is developed for educational and portfolio demonstration purposes. All historical and cultural references are crafted with reverence for Indian heritage.
