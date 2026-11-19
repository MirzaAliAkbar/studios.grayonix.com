// Grayonix Studios - Main JavaScript
// Navigation, hamburger, active section highlighting, scroll reveal

document.addEventListener('DOMContentLoaded', function () {
  const hamburgerMenu = document.querySelector('#hamburger-menu');
  const navMenu = document.querySelector('#nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!hamburgerMenu || !navMenu) return;

  // Hamburger menu toggle with ARIA
  hamburgerMenu.addEventListener('click', function () {
    const isExpanded = hamburgerMenu.getAttribute('aria-expanded') === 'true';
    hamburgerMenu.setAttribute('aria-expanded', !isExpanded);
    hamburgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Nav link clicks: close menu, smooth scroll to #anchor
  navLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');

      // Close mobile menu
      hamburgerMenu.setAttribute('aria-expanded', 'false');
      hamburgerMenu.classList.remove('active');
      navMenu.classList.remove('active');

      // Smooth scroll for same-page anchors
      if (targetId?.startsWith('#')) {
        e.preventDefault();
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // Scroll spy: highlight active nav link
  const sections = document.querySelectorAll('main section[id]');
  if (sections.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach((link) => {
              link.classList.remove('active');
              if (link.getAttribute('href') === `#${id}`) {
                link.classList.add('active');
              }
            });
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
  }

  // Scroll reveal for value cards and app cards
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReducedMotion) {
    const revealElements = document.querySelectorAll('[data-reveal]');
    if (revealElements.length) {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
              // Stagger the reveal
              setTimeout(() => {
                entry.target.classList.add('is-visible');
              }, index * 120);
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
      );

      revealElements.forEach((el) => revealObserver.observe(el));
    }
  } else {
    // Respect reduced motion - show all immediately
    document.querySelectorAll('[data-reveal]').forEach((el) => {
      el.classList.add('is-visible');
    });
  }
});
