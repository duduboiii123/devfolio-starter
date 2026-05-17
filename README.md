# 🚀 DevFolio Starter

A clean, modern **developer portfolio template** built with pure HTML, CSS, and Vanilla JavaScript. Dark-themed, responsive, and packed with smooth animations.

> **GSSoC 2026 Project** — Open for contributions! See the [Issues](#-known-bugs--open-issues) below to get started.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

---

## ✨ Features

- 🌑 Dark-mode design with CSS custom properties
- 📱 Responsive layout (mobile-first)
- 🔡 Typewriter role animation
- 🎯 Project filter by category
- 📊 Animated skill bars on scroll
- 🔢 Animated stat counters
- 📬 Contact form with validation
- 🔝 Back-to-top button
- 🎞️ Scroll reveal animations
- 🃏 3D tilt effect on project cards

---

## 📁 Project Structure

```
devfolio-starter/
├── index.html          # Main HTML page
├── css/
│   ├── style.css       # Main styles & layout
│   └── animations.css  # Keyframes & animation classes
├── js/
│   ├── main.js         # Core interactivity
│   └── animations.js   # Scroll, parallax, tilt effects
├── assets/             # Images & icons (add your own)
├── CONTRIBUTING.md
└── README.md
```

---

## 🚀 Getting Started

1. **Clone the repo**
   ```bash
   git clone https://github.com/YOUR_USERNAME/devfolio-starter.git
   cd devfolio-starter
   ```

2. **Open in browser**
   ```bash
   # Option 1: Just open index.html in your browser
   open index.html

   # Option 2: Use Live Server (VS Code extension) for hot reload
   ```

3. **Customize**
   - Edit the name, bio, and projects in `index.html`
   - Swap colours via CSS variables in `css/style.css`
   - Add your real photo in the `assets/` folder

---

## 🐛 Known Bugs & Open Issues

These bugs are **intentionally left in the code** for contributors to find and fix as part of **GSSoC 2026**. Each is a real, impactful bug — not a typo.

| # | File | Description | Difficulty |
|---|------|-------------|------------|
| 1 | `index.html` | `<meta name="viewport">` is missing its `content` attribute — page is **not mobile responsive** | 🟢 Easy |
| 2 | `index.html` | Hamburger `<button>` has no `onclick` — but `main.js` attaches the listener; **the bug is in `main.js`** (see #7 below) | 🟢 Easy |
| 3 | `index.html` | Project filter: the `active` class is on the **"JavaScript"** button, not "All" | 🟢 Easy |
| 4 | `index.html` | Skill bar `<div>`s have `style="width: 0%"` hardcoded — the JS observer sets `data-width` correctly but the CSS transition won't work without fixing the initial HTML | 🟡 Medium |
| 5 | `index.html` | Email `<input>` has `type="text"` — should be `type="email"` for proper browser validation | 🟢 Easy |
| 6 | `index.html` | Footer copyright year is **hardcoded as 2023** — should dynamically show the current year via JS | 🟢 Easy |
| 7 | `js/main.js` | `navLinks.classList.toggle()` is called **without the class name argument** — hamburger menu never opens | 🟢 Easy |
| 8 | `js/main.js` | Counter animation `increment` is `target / 10` — with `setInterval` at 80ms this gives imprecise jumpy counts; should use `Math.ceil(target / 50)` or similar | 🟡 Medium |
| 9 | `js/main.js` | Email validation regex `/@/` only checks for `@` — accepts `abc@` as valid. Should be a proper email regex | 🟡 Medium |
| 10 | `js/animations.js` | Page fade-in doesn't animate — `transition` is never set before `opacity` changes, so the body just snaps to visible | 🟡 Medium |

---

## 🙋 How to Contribute (GSSoC 2026)

We welcome all contributions — bug fixes, new features, accessibility improvements, and docs!

### Step 1: Find an issue
Browse the [Issues tab](../../issues) and comment on one you'd like to work on. Wait for it to be assigned to you.

### Step 2: Fork & clone
```bash
git clone https://github.com/YOUR_USERNAME/devfolio-starter.git
```

### Step 3: Create a branch
```bash
git checkout -b fix/bug-7-hamburger-menu
```

### Step 4: Fix & commit
```bash
git add .
git commit -m "fix: hamburger menu toggle missing class name argument"
```

### Step 5: Open a Pull Request
Push to your fork and open a PR against `main`. Reference the issue number in your PR description.

---

## 💡 Feature Ideas (Good First Issues)

- [ ] Add a **dark/light mode toggle**
- [ ] Add a **loading spinner** on page start
- [ ] Make the **navbar active link** highlight based on scroll position
- [ ] Add **form accessibility** (aria-labels, error messages)
- [ ] Add a **smooth scroll progress bar** at the top of the page
- [ ] Convert to use **CSS Grid** for the skills section
- [ ] Add a **"copy email" button** in the contact section
- [ ] Add **keyboard navigation** support for the project filter

---

## 📋 Contribution Guidelines

- One bug fix per pull request
- Write a clear PR description explaining what you changed and why
- Test your changes in at least two browsers (Chrome + Firefox)
- Do not use AI-generated code without understanding every line
- Be respectful and inclusive in all discussions

---

## 📄 License

[MIT](LICENSE) — free to use, modify, and distribute.

---

<p align="center">Made with ❤️ for GSSoC 2026</p>
