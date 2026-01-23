// ===== PRESTIGE PR & COMMUNICATIONS - MAIN JAVASCRIPT =====

// ===== THEME TOGGLE FUNCTION =====
function toggleTheme() {
    const html = document.documentElement;
    const themeIcon = document.getElementById('themeIcon');
    const currentTheme = html.getAttribute('data-theme');
    
    if (currentTheme === 'light') {
        html.removeAttribute('data-theme');
        themeIcon.classList.remove('bi-sun');
        themeIcon.classList.add('bi-moon');
        localStorage.setItem('theme', 'dark');
    } else {
        html.setAttribute('data-theme', 'light');
        themeIcon.classList.remove('bi-moon');
        themeIcon.classList.add('bi-sun');
        localStorage.setItem('theme', 'light');
    }
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    const themeIcon = document.getElementById('themeIcon');
    
    if (savedTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        if (themeIcon) {
            themeIcon.classList.remove('bi-moon');
            themeIcon.classList.add('bi-sun');
        }
    }
    
    initializeAnimations();
    initializeCounters();
    initializeScrollReveal();
    initializeNavbar();
    initializeCaseModals();
    initializeFormValidation();
});

// ===== NAVBAR SCROLL EFFECT =====
function initializeNavbar() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.backgroundColor = 'rgba(11, 13, 16, 0.98)';
            navbar.style.boxShadow = '0 5px 20px rgba(198, 162, 74, 0.1)';
        } else {
            navbar.style.backgroundColor = 'rgba(11, 13, 16, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// ===== COUNTER ANIMATION =====
function initializeCounters() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200;
    
    const countUp = (counter) => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(() => countUp(counter), 10);
        } else {
            counter.innerText = target;
        }
    };
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                countUp(entry.target);
                entry.target.classList.add('counted');
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// ===== SCROLL REVEAL ANIMATION =====
function initializeScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
}

// ===== CASE STUDY MODALS =====
function initializeCaseModals() {
    const caseData = {
        case1: {
            title: 'Tech Startup Launch',
            content: `
                <h4 class="text-gold mb-3">Challenge</h4>
                <p>An emerging AI startup needed to establish market presence and secure Series A funding through strategic media coverage.</p>
                
                <h4 class="text-gold mb-3">Strategy</h4>
                <ul>
                    <li>Developed comprehensive media kit and brand narrative</li>
                    <li>Targeted outreach to tech journalists and industry analysts</li>
                    <li>Secured speaking opportunities at major tech conferences</li>
                    <li>Created thought leadership content program</li>
                </ul>
                
                <h4 class="text-gold mb-3">Results</h4>
                <div class="row">
                    <div class="col-md-6">
                        <div class="stat-box bg-ivory p-3 rounded mb-3">
                            <h5 class="text-black">200+ Media Mentions</h5>
                            <p class="text-black mb-0">Including TechCrunch, Forbes, and VentureBeat</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="stat-box bg-ivory p-3 rounded mb-3">
                            <h5 class="text-black">300% ROI</h5>
                            <p class="text-black mb-0">Generated $15M in funding interest</p>
                        </div>
                    </div>
                </div>
            `
        },
        case2: {
            title: 'Crisis Management',
            content: `
                <h4 class="text-gold mb-3">Challenge</h4>
                <p>Major healthcare brand faced reputation crisis following product safety concerns that threatened market trust.</p>
                
                <h4 class="text-gold mb-3">Strategy</h4>
                <ul>
                    <li>24/7 crisis monitoring and response team activation</li>
                    <li>Transparent communication strategy across all channels</li>
                    <li>Stakeholder engagement and media relations management</li>
                    <li>Reputation rebuilding campaign post-crisis</li>
                </ul>
                
                <h4 class="text-gold mb-3">Results</h4>
                <div class="row">
                    <div class="col-md-6">
                        <div class="stat-box bg-ivory p-3 rounded mb-3">
                            <h5 class="text-black">48hr Response Time</h5>
                            <p class="text-black mb-0">Immediate crisis containment</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="stat-box bg-ivory p-3 rounded mb-3">
                            <h5 class="text-black">Reputation Restored</h5>
                            <p class="text-black mb-0">85% positive sentiment within 6 months</p>
                        </div>
                    </div>
                </div>
            `
        },
        case3: {
            title: 'Brand Repositioning',
            content: `
                <h4 class="text-gold mb-3">Challenge</h4>
                <p>Traditional financial services company needed to transform into a digital-first brand to attract younger demographics.</p>
                
                <h4 class="text-gold mb-3">Strategy</h4>
                <ul>
                    <li>Comprehensive brand audit and market research</li>
                    <li>Digital transformation narrative development</li>
                    <li>Influencer partnerships and social media campaign</li>
                    <li>Thought leadership positioning in fintech space</li>
                </ul>
                
                <h4 class="text-gold mb-3">Results</h4>
                <div class="row">
                    <div class="col-md-6">
                        <div class="stat-box bg-ivory p-3 rounded mb-3">
                            <h5 class="text-black">Industry Award</h5>
                            <p class="text-black mb-0">Best Digital Transformation 2023</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="stat-box bg-ivory p-3 rounded mb-3">
                            <h5 class="text-black">50% Growth</h5>
                            <p class="text-black mb-0">New customer acquisition</p>
                        </div>
                    </div>
                </div>
            `
        }
    };
    
    window.openCaseModal = function(caseId) {
        const modal = document.getElementById('caseModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalBody = document.getElementById('modalBody');
        
        if (caseData[caseId]) {
            modalTitle.textContent = caseData[caseId].title;
            modalBody.innerHTML = caseData[caseId].content;
            
            const bsModal = new bootstrap.Modal(modal);
            bsModal.show();
        }
    };
}

// ===== ANIMATION INITIALIZATION =====
function initializeAnimations() {
    // Add reveal class to elements that should animate on scroll
    const elementsToReveal = document.querySelectorAll('.service-card, .case-card, .stat-item');
    elementsToReveal.forEach(element => {
        element.classList.add('reveal');
    });
}

// ===== FORM VALIDATION =====
function initializeFormValidation() {
    const forms = document.querySelectorAll('.needs-validation');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            
            form.classList.add('was-validated');
        });
    });
}

// ===== SMOOTH SCROLL =====
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

// ===== LOADING STATES =====
function showLoading(element) {
    element.disabled = true;
    element.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Loading...';
}

function hideLoading(element, originalText) {
    element.disabled = false;
    element.innerHTML = originalText;
}

// ===== TOAST NOTIFICATIONS =====
function showToast(message, type = 'success') {
    const toastContainer = document.getElementById('toastContainer') || createToastContainer();
    
    const toast = document.createElement('div');
    toast.className = `toast align-items-center text-white bg-${type === 'success' ? 'success' : 'danger'} border-0`;
    toast.setAttribute('role', 'alert');
    toast.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">
                ${message}
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
        </div>
    `;
    
    toastContainer.appendChild(toast);
    
    const bsToast = new bootstrap.Toast(toast);
    bsToast.show();
    
    toast.addEventListener('hidden.bs.toast', () => {
        toast.remove();
    });
}

function createToastContainer() {
    const container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container position-fixed bottom-0 end-0 p-3';
    document.body.appendChild(container);
    return container;
}

// ===== PARALLAX EFFECT =====
function initializeParallax() {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// ===== TYPING EFFECT =====
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ===== MAGNETIC BUTTON EFFECT =====
function initializeMagneticButtons() {
    const buttons = document.querySelectorAll('.btn-gold');
    
    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translate(0, 0)';
        });
    });
}

// ===== LAZY LOADING =====
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
}

// ===== UTILITY FUNCTIONS =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===== PERFORMANCE MONITORING =====
function initializePerformanceMonitoring() {
    if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
                if (entry.entryType === 'largest-contentful-paint') {
                    console.log('LCP:', entry.startTime);
                }
                if (entry.entryType === 'first-input') {
                    console.log('FID:', entry.processingStart - entry.startTime);
                }
            });
        });
        
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });
    }
}

// ===== INITIALIZATION CALL =====
document.addEventListener('DOMContentLoaded', function() {
    initializeParallax();
    initializeMagneticButtons();
    initializeLazyLoading();
    initializePerformanceMonitoring();
});
