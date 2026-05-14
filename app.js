// ========================================
// PRINCE RAJ — PORTFOLIO SCRIPTS
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // ---- Scroll Animations (IntersectionObserver) ----
    const animateElements = document.querySelectorAll('.animate-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Stagger animation for siblings
                const siblings = entry.target.parentElement.querySelectorAll('.animate-in');
                let delay = 0;
                siblings.forEach((sibling, i) => {
                    if (sibling === entry.target) delay = i * 80;
                });
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, Math.min(delay, 400));
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    });

    animateElements.forEach(el => observer.observe(el));

    // ---- Navbar Scroll Effect ----
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        lastScroll = currentScroll;
    }, { passive: true });

    // ---- Active Nav Link ----
    const sections = document.querySelectorAll('.section, .hero');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }, { passive: true });

    // ---- Mobile Menu Toggle ----
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        navToggle.classList.toggle('active');
    });

    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
            navToggle.classList.remove('active');
        });
    });

    // ---- Smooth scroll for anchor links ----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 70; // navbar height
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });
});
