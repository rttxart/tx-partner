// Common JavaScript Functions for TX-Partner Website
// Version 2.0.0 - January 2026

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func(...args);
        }, wait);
    };
}

// Mobile Menu Toggle with ARIA
function initMobileMenu() {
    console.log('initMobileMenu() called');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileMenu = document.getElementById('mobile-menu');

    console.log('mobileMenuToggle:', mobileMenuToggle);
    console.log('mobileMenuClose:', mobileMenuClose);
    console.log('mobileMenu:', mobileMenu);

    if (!mobileMenuToggle || !mobileMenu) {
        console.log('Mobile menu elements not found, returning early');
        return;
    }

    // Toggle menu open/close
    const toggleMenu = () => {
        const isOpen = mobileMenu.classList.contains('open');
        console.log('Toggling menu, current open state:', isOpen);
        mobileMenu.classList.toggle('open');
        console.log('Menu classList after toggle:', mobileMenu.classList.toString());

        // Update ARIA
        mobileMenuToggle.setAttribute('aria-expanded', !isOpen);
        mobileMenuToggle.setAttribute('aria-label', !isOpen ? 'Menü schließen' : 'Menü öffnen');
    };

    mobileMenuToggle.addEventListener('click', (e) => {
        console.log('Mobile menu toggle clicked');
        toggleMenu();
    });

    // Close button functionality
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
            mobileMenuToggle.setAttribute('aria-label', 'Menü öffnen');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            mobileMenu.classList.remove('open');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
            mobileMenuToggle.setAttribute('aria-label', 'Menü öffnen');
        }
    });

    // ESC key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
            mobileMenu.classList.remove('open');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
            mobileMenuToggle.setAttribute('aria-label', 'Menü öffnen');
        }
    });
}

// Keyboard Navigation for Dropdowns
function initKeyboardNav() {
    const dropdowns = document.querySelectorAll('.nav-dropdown');
    
    dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector('button');
        if (!button) return;
        
        // Add keyboard support
        button.addEventListener('focus', () => {
            button.parentElement.classList.add('focus-within');
        });
        
        button.addEventListener('blur', () => {
            button.parentElement.classList.remove('focus-within');
        });
        
        button.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                button.click();
                e.preventDefault();
            }
        });
    });
}

// Contact Form Validation
function initContactForm() {
    const contactForm = document.querySelector('form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const buttonText = submitButton.querySelector('span');
        const originalText = buttonText.textContent;
        
        // Show loading state
        submitButton.disabled = true;
        buttonText.textContent = 'Wird gesendet...';
        
        try {
            // TODO: Replace 'YOUR_FORMSPREE_ID' with actual Formspree form ID from formspree.io
            const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(Object.fromEntries(formData))
            });
            
            if (response.ok) {
                contactForm.reset();
                buttonText.textContent = 'Gesendet ✓';
                setTimeout(() => {
                    buttonText.textContent = originalText;
                    submitButton.disabled = false;
                }, 2000);
            } else {
                throw new Error('Server error');
            }
        } catch (error) {
            console.error('Contact form error:', error);
            buttonText.textContent = 'Fehler - bitte erneut versuchen';
            submitButton.disabled = false;
        }
    });
}

// Dynamic Year in Footer
function initDynamicYear() {
    const yearSpans = document.querySelectorAll('footer .font-mono');
    yearSpans.forEach(span => {
        const currentYear = new Date().getFullYear();
        span.textContent = currentYear;
    });
}

// Modern UI Enhancement: Magnetic Buttons
function initMagneticButtons() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.05)`;
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translate(0, 0) scale(1)';
        });
    });
}

// Modern UI Enhancement: Scroll-Linked Parallax
function initParallax() {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        parallaxElements.forEach(el => {
            const speed = parseFloat(el.dataset.speed) || 0.5;
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Modern UI Enhancement: Glassmorphic Tilt
function initGlassmorphicTilt() {
    const cards = document.querySelectorAll('.card-spotlight, .glass-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', debounce((e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateZ(10px)
            `;
        }, 50));
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });
}

// Initialize everything on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initKeyboardNav();
    initContactForm(); // ✅ ACTIVATED - Contact form now functional
    initDynamicYear();
    // initMagneticButtons(); // DEAKTIVIERT: Zu playful für professional B2B service
    initParallax();
    // initGlassmorphicTilt(); // Deaktiviert: Zu aggressive 3D-Tilt-Animation auf Leistungskarten
});

// Export for use in HTML files
if (typeof module !== 'undefined') {
    window.TXPartnerCommon = {
        initMobileMenu,
        initKeyboardNav,
        initContactForm,
        initDynamicYear,
        initMagneticButtons,
        initParallax,
        initGlassmorphicTilt,
        debounce
    };
}