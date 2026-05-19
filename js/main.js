/* ===========================
   DevFolio Starter — main.js
   =========================== */

// ===== Navbar scroll effect =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== Hamburger Menu =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

// BUG #2 Fix is here — the HTML button has no onclick; this listener handles it.
// But the toggle logic below has a bug:
// BUG #7: classList.toggle is missing the class name string argument
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle(); // should be: navLinks.classList.toggle('open')
});

// Close nav when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ===== Typed Role Effect =====
const roles = [
  'Frontend Developer',
  'UI/UX Enthusiast',
  'Open Source Contributor',
  'Problem Solver'
];

const typedEl = document.getElementById('typed-role');
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeRole() {
  const current = roles[roleIndex];

  if (isDeleting) {
    typedEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === current.length) {
    isDeleting = true;
    setTimeout(typeRole, 1800);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  const speed = isDeleting ? 60 : 100;
  setTimeout(typeRole, speed);
}

typeRole();

// ===== Project Filter =====
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active from all
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    projectCards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// ===== Counter Animation =====
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  let count = 0;
  // BUG #8: increment is calculated wrong — dividing by 10 makes very slow/imprecise counters
  // Fix: use Math.ceil(target / 50) or a fixed step
  const increment = target / 10;
  const interval = setInterval(() => {
    count += increment;
    if (count >= target) {
      el.textContent = target;
      clearInterval(interval);
    } else {
      el.textContent = Math.floor(count);
    }
  }, 80);
}

// ===== Scroll Reveal =====
const revealEls = document.querySelectorAll('.reveal');
const statNumbers = document.querySelectorAll('.stat-number');
const skillFills = document.querySelectorAll('.skill-fill');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => observer.observe(el));

// Counter observer
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

statNumbers.forEach(el => counterObserver.observe(el));

// Skill bar observer
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const width = entry.target.dataset.width;
      entry.target.style.width = width + '%';
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

skillFills.forEach(el => skillObserver.observe(el));

// ===== Contact Form =====
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Basic validation
  // BUG #9: email regex is wrong — it only checks for "@" but not a valid domain
  const emailRegex = /@/;
  if (!emailRegex.test(email)) {
    formStatus.textContent = 'Please enter a valid email address.';
    formStatus.className = 'form-status error';
    return;
  }

  // Simulate sending
  const btn = contactForm.querySelector('button[type="submit"]');
  btn.disabled = true;
  btn.textContent = 'Sending...';

  setTimeout(() => {
    formStatus.textContent = `Thanks, ${name}! I'll get back to you soon. 🎉`;
    formStatus.className = 'form-status success';
    contactForm.reset();
    btn.disabled = false;
    btn.textContent = 'Send Message 🚀';
  }, 1500);
});

// ===== Back to Top =====
const backToTop = document.getElementById('back-to-top');

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Show/hide back-to-top based on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.style.opacity = '1';
  } else {
    backToTop.style.opacity = '0';
  }
});

// Init hidden
backToTop.style.opacity = '0';
backToTop.style.transition = 'opacity 0.3s ease';

// ===== Dynamic Footer Year =====
const currentYear = document.getElementById('current-year');
if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

// Add reveal class to sections
document.querySelectorAll('.about, .projects, .skills, .contact').forEach(section => {
  section.classList.add('reveal');
});
