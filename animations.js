/* ===========================
   DevFolio Starter — animations.css
   =========================== */

/* Keyframes */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-12px); }
}

@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

@keyframes spin-slow-reverse {
  from { transform: rotate(360deg); }
  to   { transform: rotate(0deg); }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}

@keyframes scaleIn {
  from { transform: scale(0.9); opacity: 0; }
  to   { transform: scale(1); opacity: 1; }
}

/* ===== Scroll Reveal ===== */
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger delays for children */
.reveal-stagger > *:nth-child(1) { transition-delay: 0s; }
.reveal-stagger > *:nth-child(2) { transition-delay: 0.1s; }
.reveal-stagger > *:nth-child(3) { transition-delay: 0.2s; }
.reveal-stagger > *:nth-child(4) { transition-delay: 0.3s; }
.reveal-stagger > *:nth-child(5) { transition-delay: 0.4s; }
.reveal-stagger > *:nth-child(6) { transition-delay: 0.5s; }

/* ===== Hero Entrance ===== */
.hero-tag    { animation: fadeInUp 0.6s ease both; animation-delay: 0.1s; }
.hero-name   { animation: fadeInUp 0.6s ease both; animation-delay: 0.2s; }
.hero-role   { animation: fadeInUp 0.6s ease both; animation-delay: 0.35s; }
.hero-desc   { animation: fadeInUp 0.6s ease both; animation-delay: 0.45s; }
.hero-cta    { animation: fadeInUp 0.6s ease both; animation-delay: 0.55s; }
.hero-socials { animation: fadeInUp 0.6s ease both; animation-delay: 0.65s; }
.hero-visual  { animation: fadeIn 0.8s ease both;  animation-delay: 0.4s; }

/* ===== Cursor blink for typed effect ===== */
.typed-cursor {
  display: inline-block;
  color: var(--accent);
  animation: blink 0.8s ease-in-out infinite;
  margin-left: 2px;
  font-weight: 300;
}

/* ===== Project card hover glow ===== */
.project-card::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  transition: opacity 0.3s;
  box-shadow: 0 0 0 1px var(--accent);
  pointer-events: none;
}

.project-card {
  position: relative;
}

.project-card:hover::after {
  opacity: 0.5;
}

/* ===== Page load overlay ===== */
.page-loader {
  position: fixed;
  inset: 0;
  background: var(--bg);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.3s ease, fadeOut 0.4s ease 1s forwards;
}

@keyframes fadeOut {
  to { opacity: 0; pointer-events: none; }
}

.loader-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--accent);
  animation: loader-pulse 0.8s ease-in-out infinite alternate;
}

@keyframes loader-pulse {
  from { transform: scale(0.6); opacity: 0.4; }
  to   { transform: scale(1.2); opacity: 1; }
}

/* ===== Smooth section transitions ===== */
section {
  transition: opacity 0.3s ease;
}
