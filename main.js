/* ===========================
   DevFolio Starter — style.css
   =========================== */

/* --- CSS Variables --- */
:root {
  --bg: #0d0d0d;
  --bg-2: #141414;
  --bg-card: #1a1a1a;
  --border: #2a2a2a;
  --text: #e8e8e8;
  --text-muted: #888;
  --accent: #e8ff47;
  --accent-dim: rgba(232, 255, 71, 0.12);
  --accent-2: #ff6b6b;
  --font-display: 'Syne', sans-serif;
  --font-body: 'DM Sans', sans-serif;
  --radius: 12px;
  --radius-lg: 20px;
  --shadow: 0 4px 24px rgba(0,0,0,0.4);
  --transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* --- Reset --- */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.6;
  overflow-x: hidden;
}

/* --- Utilities --- */
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 2rem;
}

.accent {
  color: var(--accent);
}

.section-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  margin-bottom: 3rem;
  text-align: center;
}

/* ===========================
   NAVBAR
   =========================== */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 2.5rem;
  background: rgba(13,13,13,0.85);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid transparent;
  transition: border-color var(--transition);
}

.navbar.scrolled {
  border-color: var(--border);
}

.nav-logo {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 1.3rem;
  letter-spacing: -0.03em;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text);
  text-decoration: none;
}

.logo-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--accent);
  display: inline-block;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color var(--transition);
}

.nav-links a:hover {
  color: var(--accent);
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: var(--transition);
}

/* Mobile nav */
@media (max-width: 768px) {
  .hamburger { display: flex; }
  .nav-links {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: var(--bg-2);
    flex-direction: column;
    align-items: center;
    gap: 0;
    padding: 0;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease, padding 0.3s;
    border-bottom: 1px solid var(--border);
  }
  .nav-links.open {
    max-height: 400px;
    padding: 1rem 0;
  }
  .nav-links li { width: 100%; text-align: center; }
  .nav-links a { display: block; padding: 0.8rem; }
}

/* ===========================
   HERO
   =========================== */
.hero {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;
  padding: 7rem 5vw 4rem;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: -200px;
  right: -200px;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(232,255,71,0.07) 0%, transparent 70%);
  pointer-events: none;
}

.hero-tag {
  font-size: 1rem;
  color: var(--text-muted);
  margin-bottom: 0.5rem;
  letter-spacing: 0.05em;
}

.hero-name {
  font-family: var(--font-display);
  font-size: clamp(2.8rem, 6vw, 5rem);
  font-weight: 800;
  line-height: 1.05;
  margin-bottom: 0.5rem;
  letter-spacing: -0.03em;
}

.hero-role {
  font-size: 1.2rem;
  color: var(--accent);
  font-weight: 500;
  min-height: 1.8rem;
  margin-bottom: 1.2rem;
}

.hero-desc {
  color: var(--text-muted);
  font-size: 1rem;
  max-width: 480px;
  margin-bottom: 2rem;
  line-height: 1.8;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.8rem;
  border-radius: 999px;
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition);
  text-decoration: none;
  border: 2px solid transparent;
}

.btn-primary {
  background: var(--accent);
  color: #0d0d0d;
  border-color: var(--accent);
}

.btn-primary:hover {
  background: transparent;
  color: var(--accent);
}

.btn-outline {
  background: transparent;
  color: var(--text);
  border-color: var(--border);
}

.btn-outline:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.btn-full {
  width: 100%;
  justify-content: center;
  border-radius: var(--radius);
}

.hero-socials {
  display: flex;
  gap: 1rem;
}

.hero-socials a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 50%;
  color: var(--text-muted);
  transition: all var(--transition);
  text-decoration: none;
}

.hero-socials a svg {
  width: 18px;
  height: 18px;
}

.hero-socials a:hover {
  border-color: var(--accent);
  color: var(--accent);
  transform: translateY(-2px);
}

/* Hero Visual */
.hero-visual {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 420px;
}

.avatar-ring {
  width: 260px;
  height: 260px;
  border-radius: 50%;
  border: 2px solid var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: spin-slow 20s linear infinite;
  position: relative;
}

.avatar-placeholder {
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--bg-card), var(--bg-2));
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: 3rem;
  font-weight: 800;
  color: var(--accent);
  animation: spin-slow-reverse 20s linear infinite;
}

.floating-card {
  position: absolute;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 0.6rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  font-weight: 500;
  box-shadow: var(--shadow);
  white-space: nowrap;
}

.card-emoji { font-size: 1rem; }

.card-1 { top: 20px; right: 0; animation: float 4s ease-in-out infinite; }
.card-2 { bottom: 60px; right: -10px; animation: float 4s ease-in-out infinite 1s; }
.card-3 { bottom: 20px; left: 0; animation: float 4s ease-in-out infinite 2s; }

@media (max-width: 768px) {
  .hero {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 6rem 1.5rem 3rem;
  }
  .hero-visual { display: none; }
  .hero-cta, .hero-socials { justify-content: center; }
  .hero-desc { margin: 0 auto 2rem; }
}

/* ===========================
   ABOUT
   =========================== */
.about {
  padding: 6rem 0;
  background: var(--bg-2);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-text p {
  color: var(--text-muted);
  margin-bottom: 1.2rem;
  line-height: 1.8;
}

.about-stats {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.stat-number {
  font-family: var(--font-display);
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--accent);
  line-height: 1;
}

.stat span:nth-child(2) {
  font-size: 1.5rem;
  color: var(--accent);
  font-weight: 700;
}

.stat-label {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-top: 0.2rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.about-image {
  display: flex;
  justify-content: center;
}

.image-frame {
  width: 320px;
  height: 380px;
  border-radius: var(--radius-lg);
  border: 2px solid var(--border);
  background: var(--bg-card);
  overflow: hidden;
  position: relative;
}

.image-frame::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--accent-dim), transparent);
}

.image-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: var(--text-muted);
  gap: 0.5rem;
  font-size: 0.9rem;
}

.image-placeholder span { font-size: 3rem; }

@media (max-width: 768px) {
  .about-grid { grid-template-columns: 1fr; }
  .about-image { order: -1; }
  .image-frame { width: 100%; height: 260px; }
}

/* ===========================
   PROJECTS
   =========================== */
.projects {
  padding: 6rem 0;
}

.filter-btns {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.5rem 1.4rem;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: none;
  color: var(--text-muted);
  cursor: pointer;
  font-family: var(--font-body);
  font-size: 0.85rem;
  transition: all var(--transition);
}

.filter-btn:hover, .filter-btn.active {
  background: var(--accent);
  border-color: var(--accent);
  color: #0d0d0d;
  font-weight: 600;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.project-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  transition: all var(--transition);
}

.project-card:hover {
  border-color: var(--accent);
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(232,255,71,0.08);
}

.project-card.hidden {
  display: none;
}

.project-thumb {
  font-size: 2.5rem;
  margin-bottom: 0.3rem;
}

.project-card h3 {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 700;
}

.project-card p {
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.6;
  flex: 1;
}

.project-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.project-tags span {
  background: var(--accent-dim);
  color: var(--accent);
  border-radius: 999px;
  padding: 0.2rem 0.7rem;
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid rgba(232,255,71,0.2);
}

.project-links {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
}

.project-link {
  font-size: 0.85rem;
  color: var(--accent);
  text-decoration: none;
  font-weight: 500;
  transition: opacity var(--transition);
}

.project-link:hover {
  opacity: 0.7;
  text-decoration: underline;
}

/* ===========================
   SKILLS
   =========================== */
.skills {
  padding: 6rem 0;
  background: var(--bg-2);
}

.skills-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.skill-category h3 {
  font-family: var(--font-display);
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--text);
}

.skill-bars {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.skill-bar-wrap {}

.skill-label {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
  color: var(--text-muted);
}

.skill-bar {
  height: 6px;
  background: var(--border);
  border-radius: 999px;
  overflow: hidden;
}

.skill-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--accent), #b8ff00);
  border-radius: 999px;
  transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
}

@media (max-width: 768px) {
  .skills-grid { grid-template-columns: 1fr; }
}

/* ===========================
   CONTACT
   =========================== */
.contact {
  padding: 6rem 0;
}

.contact-sub {
  text-align: center;
  color: var(--text-muted);
  margin-top: -2rem;
  margin-bottom: 3rem;
}

.contact-form {
  max-width: 680px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.form-group label {
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.form-group input,
.form-group textarea {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  color: var(--text);
  font-family: var(--font-body);
  font-size: 0.95rem;
  padding: 0.85rem 1rem;
  transition: border-color var(--transition);
  resize: vertical;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--text-muted);
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--accent);
}

.form-status {
  text-align: center;
  font-size: 0.9rem;
  min-height: 1.2rem;
}

.form-status.success { color: var(--accent); }
.form-status.error { color: var(--accent-2); }

@media (max-width: 600px) {
  .form-row { grid-template-columns: 1fr; }
}

/* ===========================
   FOOTER
   =========================== */
.footer {
  padding: 2rem 0;
  background: var(--bg-2);
  border-top: 1px solid var(--border);
  text-align: center;
}

.footer .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  position: relative;
}

.footer p {
  font-size: 0.85rem;
  color: var(--text-muted);
}

.footer-copy {
  font-size: 0.75rem !important;
  opacity: 0.5;
}

.back-to-top {
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: var(--text-muted);
  cursor: pointer;
  font-size: 1rem;
  transition: all var(--transition);
  display: flex;
  align-items: center;
  justify-content: center;
}

.back-to-top:hover {
  border-color: var(--accent);
  color: var(--accent);
}
