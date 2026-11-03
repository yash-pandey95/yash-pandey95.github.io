# Yash Pandey — Premium Developer Portfolio

A modern, high-performance, responsive portfolio website built with **React**, **Vite**, **Tailwind CSS**, and **Lucide Icons** showcasing technical competencies, machine learning projects, DSA journey, and educational background for **Yash Pandey** — Computer Science Engineering student specializing in AI & Machine Learning.

---

## 🚀 Live Tech Stack

- **Frontend Core**: React 18, Vite 6
- **Styling**: Tailwind CSS (Futuristic Dark Theme `#080B12`, Electric Blue, Cyan, Purple Glow)
- **Icons**: Lucide React
- **Deployment Ready**: GitHub Pages (Relative base `./` & automated GitHub Actions workflow)

---

## 📂 Project Architecture

```text
yash-pandey-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages CI/CD workflow
├── public/                     # Static assets & resume placeholder
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky glassmorphism navigation & mobile drawer
│   │   ├── Hero.jsx            # High-tech hero with live terminal & ML pipeline preview
│   │   ├── About.jsx           # Background, mission, and academic info card
│   │   ├── Skills.jsx          # Categorized skills grid with visual hierarchy
│   │   ├── Projects.jsx        # Project showcase with category filters
│   │   ├── ProjectCard.jsx     # Glassmorphic card with expandable architecture
│   │   ├── DSA.jsx             # Dedicated C++ algorithmic journey & topic tracker
│   │   ├── Education.jsx       # B.Tech CSE (AIML) Quantum University timeline
│   │   ├── Contact.jsx         # Connection channels, email copy, & direct inquiry
│   │   └── Footer.jsx          # Copyright, credits, and back-to-top button
│   ├── data/
│   │   ├── projects.js         # Decoupled project metadata and architectures
│   │   └── skills.js           # Categorized skills and proficiency hierarchy
│   ├── App.jsx                 # Root component assembly
│   ├── index.css               # Cyber grid, glows, and custom scrollbar
│   └── main.jsx                # React DOM entry point
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🛠️ Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 3. Build for Production
```bash
npm run build
```
Production build will be generated in the `dist/` directory.

---

## 🌐 Deploying to GitHub Pages

### Method 1: Automatic Deployment via GitHub Actions (Recommended)
1. Initialize a git repository and commit your files:
   ```bash
   git init
   git add .
   git commit -m "feat: Initial commit for Yash Pandey Portfolio"
   ```
2. Create a repository on GitHub (e.g. `portfolio` or `<your-username>.github.io`).
3. Link your remote and push:
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git branch -M main
   git push -u origin main
   ```
4. On your GitHub repository:
   - Go to **Settings** &rarr; **Pages**.
   - Under **Build and deployment** &rarr; **Source**, select **GitHub Actions**.
   - The included `.github/workflows/deploy.yml` workflow will automatically build and publish your site!

---

## ⚙️ Customizing Links & Profiles

Edit the placeholder URLs with your actual links:
- **`src/data/projects.js`**: Update repository (`githubUrl`) and live preview (`liveUrl`) links.
- **`src/components/Hero.jsx` & `src/components/Contact.jsx`**: Update GitHub, LinkedIn, and email.
- **`src/components/DSA.jsx`**: Update your LeetCode and GitHub profile URLs.
- **Resume**: Save your resume as `resume.pdf` in the `public/` directory.
