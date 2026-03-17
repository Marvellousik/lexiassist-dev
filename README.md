🎯 What is LexiAssist?

LexiAssist is an AI-powered learning platform built specifically for students with **dyslexia** and other learning differences. It transforms how students interact with educational content through intelligent assistive technology.

### The Problem We're Solving
- 📚 **Complex Text** — Difficulty reading dense academic material
- 🔤 **Word Decoding** — Struggles with recognizing and processing words  
- ✍️ **Writing Anxiety** — Stress from lengthy writing assignments
- 🎧 **Limited Tools** — Lack of personalized learning aids

### Our Solution
AI-powered tools that adapt to **your** learning style, not the other way around.

---

## ✨ Features

|
 Tool 
|
 What It Does 
|
|
------
|
-------------
|
|
 📖 
**
Reading Assistant
**
|
 Simplifies complex text into digestible language 
|
|
 🔊 
**
Text-to-Speech
**
|
 Natural voice reading with speed control 
|
|
 ✍️ 
**
Writing Assistant
**
|
 Voice-to-text and AI writing enhancement 
|
|
 🎴 
**
Flashcards
**
|
 AI-generated study cards with interactive review 
|
|
 📝 
**
Quizzes
**
|
 Auto-generated assessments from your materials 
|
|
 💬 
**
Chat Assistant
**
|
 24/7 AI tutor for questions and explanations 
|

### 🎨 Accessibility First

- 🌓 **Theme Support** — Dark/light mode
- 🔤 **Dyslexia Fonts** — OpenDyslexic integration
- 🎨 **Color Overlays** — Customizable reading tints
- 📏 **Spacing Controls** — Adjustable line/letter spacing
- ♿ **Screen Reader** — Full ARIA support
- 🖱️ **Reduced Motion** — Respects user preferences

---

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- npm 10+

### Installation

```bash
# Clone the repository
git clone https://github.com/lexiassist/lexiassist.git
cd lexiassist

Install Dependencies 
npm install

# Start development server
npm run dev
Open http://localhost:3000 to see the app.

🛠 Tech Stack
Frontend:     Next.js 16 · React 19 · TypeScript 5 · Tailwind CSS 4
Animations:   Framer Motion
UI Library:   Radix UI + Custom Components
State:        Zustand · TanStack Query
Forms:        React Hook Form · Zod
Icons:        Lucide React
📁 Project Structure
lexiassist/
├── src/
│   ├── app/
│   │   ├── (auth)/          # Login & Register pages
│   │   ├── (main)/          # Dashboard & learning tools
│   │   │   ├── dashboard/
│   │   │   ├── text-to-speech/
│   │   │   ├── reading-assistant/
│   │   │   ├── writing-assistant/
│   │   │   ├── flashcards/
│   │   │   ├── quizzes/
│   │   │   └── chat-assistant/
│   │   └── page.tsx         # Landing page
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   ├── auth/
│   │   └── landing/
│   ├── hooks/               # Custom React hooks
│   ├── store/               # Zustand state stores
│   └── types/               # TypeScript definitions
├── public/
└── package.json
🎨 Design System
Color Palette
Color	Hex	Usage
Primary	#3c8350	Buttons, links, accents
Primary Dark	#2b5d39	Hover states
Primary Light	#ecf3ee	Backgrounds
Text	#272a28	Body text
Muted	#5d655f	Secondary text
Typography
Headings: Poppins (weights: 400, 600, 700)
Body: Nunito / System UI
Dyslexia Support: OpenDyslexic (optional)
🧪 Development
# Run dev server (Turbopack)
npm run dev

# Build for production
npm run build

# Run linter
npm run lint
Commit Convention
feat:     Add new feature
fix:      Fix a bug
docs:     Update documentation
style:    Formatting changes
refactor: Code restructuring
test:     Add/update tests
chore:    Maintenance tasks
🚢 Deployment
Docker (Recommended)
docker-compose up -d
Vercel

🤝 Contributing
We welcome contributions! Please see our Contributing Guide for details.

Fork the repository
Create your feature branch: git checkout -b feat/amazing-feature
Commit your changes: git commit -m 'feat: add amazing feature'
Push to the branch: git push origin feat/amazing-feature
Open a Pull Request
Code of Conduct
This project adheres to a Code of Conduct. By participating, you are expected to uphold this code.
