/**
 * Gan Laboratory Website
 * Main JavaScript File
 * Author: Your Name
 * Version: 1.0
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize components
    initNavbar();
    initGalleryFilter();
    initContactForm();
    initLightbox();
    
    /**
     * Initialize navbar functionality
     */
    function initNavbar() {
        // Add scroll event to change navbar color on scroll
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
    }
    
    /**
     * Initialize gallery filter functionality
     */
    function initGalleryFilter() {
        const filterButtons = document.querySelectorAll('.gallery-filter button');
        const galleryItems = document.querySelectorAll('.gallery-item');
        
        if (filterButtons.length === 0 || galleryItems.length === 0) {
            return; // Exit if elements don't exist (not on gallery page)
        }
        
        // Add click event to each filter button
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Get filter value
                const filterValue = this.getAttribute('data-filter');
                
                // Show/hide gallery items based on filter
                galleryItems.forEach(item => {
                    if (filterValue === 'all' || item.classList.contains(filterValue)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
    
    /**
     * Initialize contact form functionality
     */
    function initContactForm() {
        const contactForm = document.getElementById('contactForm');
        
        if (!contactForm) {
            return; // Exit if form doesn't exist (not on contact page)
        }
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Validate form
            if (!name || !email || !subject || !message) {
                alert('Please fill all required fields.');
                return;
            }
            
            // Form submission would normally go to a server
            // For now, display a success message
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
    
    /**
     * Initialize Lightbox functionality
     */
    function initLightbox() {
        // Check if lightbox exists on the page
        if (typeof lightbox !== 'undefined') {
            // Configure lightbox options
            lightbox.option({
                'resizeDuration': 300,
                'wrapAround': true,
                'albumLabel': 'Image %1 of %2'
            });
        }
    }
    
    /**
     * Animate elements on scroll
     */
    function animateOnScroll() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animated');
            }
        });
    }
    
    // Add scroll event for animations
    window.addEventListener('scroll', animateOnScroll);
    // Initial check for animations
    animateOnScroll();
});