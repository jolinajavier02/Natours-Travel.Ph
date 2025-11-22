// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
}

// Smooth scrolling for anchor links
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function performSearch() {
    const searchInput = document.querySelector('.search-input');
    const query = searchInput.value.trim();
    
    if (query) {
        // Redirect to recipes page with search query
        window.location.href = `src/pages/recipes?search=${encodeURIComponent(query)}`;
    }
}
    
    images.forEach(img => imageObserver.observe(img));
    
    // Add scroll effect to header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- 2. Image Slider Functionality (Automatic and Manual) ---
    const sliders = document.querySelectorAll('.service-slider');
    
    sliders.forEach(slider => {
        let currentIndex = 0;
        const images = slider.querySelectorAll('.hero-img');
        const totalImages = images.length;
        const sliderId = slider.id.split('-')[1];

        const updateSlider = () => {
            const offset = -currentIndex * images[0].offsetWidth;
            slider.style.transform = `translateX(${offset}px)`;
        };

        const nextSlide = () => {
            currentIndex = (currentIndex + 1) % totalImages;
            updateSlider();
        };

        const prevSlide = () => {
            currentIndex = (currentIndex - 1 + totalImages) % totalImages;
            updateSlider();
        };

        // Automatic sliding (every 4 seconds)
        setInterval(nextSlide, 3000);
        
        // Handle resizing (if the window resizes, recalculate offset)
        window.addEventListener('resize', updateSlider);
    });
// Contact Form Handling
const contactForm = document.getElementById('contact-form');
const budgetSlider = document.getElementById('budget');
const budgetValue = document.getElementById('budget-value');

if (budgetSlider && budgetValue) {
    budgetSlider.addEventListener('input', function() {
        budgetValue.textContent = parseInt(this.value).toLocaleString();
    });
}

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic validation
        const fullname = document.getElementById('fullname').value.trim();
        const email = document.getElementById('email').value.trim();
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value.trim();
        
        if (!fullname || !email || !service || !message) {
            alert('Please fill in all required fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Show success message
        contactForm.style.display = 'none';
        document.getElementById('form-success').style.display = 'block';
        
        // In a real application, you would send the form data to a server here
        console.log('Form submitted:', {
            fullname,
            email,
            service,
            message
        });
    });
}
