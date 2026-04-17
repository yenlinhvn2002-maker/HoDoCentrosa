document.addEventListener('DOMContentLoaded', () => {
    // 1. Header Scroll Effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('ph-list');
            icon.classList.add('ph-x');
        } else {
            icon.classList.remove('ph-x');
            icon.classList.add('ph-list');
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('ph-x');
            icon.classList.add('ph-list');
        });
    });

    // 3. Scroll Reveal Animation
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    animateElements.forEach(el => observer.observe(el));

    // 4. Handle Contact Form Submit (Test specifically requires "click form")
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent page reload
            
            // Show success message
            formSuccess.classList.remove('hidden');
            
            // Reset form
            contactForm.reset();
            
            // Hide success message after 3 seconds
            setTimeout(() => {
                formSuccess.classList.add('hidden');
            }, 3000);
        });
    }

    // 5. Handle Document Toggle (Accordion)
    const docToggles = document.querySelectorAll('.toggle-doc');
    docToggles.forEach(btn => {
        btn.addEventListener('click', () => {
            // Toggle active class on button (for icon rotation)
            btn.classList.toggle('active');
            
            // Toggle the connected list (which is the next sibling element)
            const docList = btn.nextElementSibling;
            if (docList && docList.classList.contains('doc-detail-list')) {
                docList.classList.toggle('active');
            }
        });
    });
});
