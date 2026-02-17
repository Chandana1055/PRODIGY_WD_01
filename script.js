/**
 * Brew Haven Landing Page Scripts
 * Functional Features:
 * 1. Scroll-based Navbar Styling
 * 2. Mobile Menu Toggle
 * 3. Dynamic Active Link Highlighting
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Select DOM Elements ---
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinksList = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links a');

    // --- 2. Navbar Scroll Effect ---
    // Changes the navbar background from transparent to solid brown on scroll
    const handleNavbarScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    // --- 3. Mobile Menu Logic ---
    const toggleMobileMenu = () => {
        navLinksList.classList.toggle('active');
        
        // Toggle hamburger icon between '☰' and '✕'
        const isActive = navLinksList.classList.contains('active');
        mobileMenuBtn.innerHTML = isActive ? '&#x2715;' : '&#x2630;';
        
        // Prevent body from scrolling when menu is open
        document.body.style.overflow = isActive ? 'hidden' : 'initial';
    };

    // --- 4. Event Listeners ---
    
    // Listen for scroll events
    window.addEventListener('scroll', handleNavbarScroll);

    // Toggle menu on burger click
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);

    // Close menu when a link is clicked (crucial for mobile UX)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinksList.classList.remove('active');
            mobileMenuBtn.innerHTML = '&#x2630;';
            document.body.style.overflow = 'initial';
        });
    });

    // --- 5. Optional: Smooth Scroll Offset Fix ---
    // Since the navbar is fixed, it can sometimes cover the top of a section.
    // This adjusts the scroll position slightly.
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});