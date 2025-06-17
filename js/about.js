document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navList = document.querySelector('.nav-list');
    const navOverlay = document.createElement('div');
    navOverlay.className = 'nav-overlay';
    document.body.appendChild(navOverlay);
    
    mobileMenuBtn.addEventListener('click', function() {
        this.textContent = navList.classList.contains('active') ? '☰' : '✕';
        navList.classList.toggle('active');
        navOverlay.classList.toggle('active');
        this.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
    
    navOverlay.addEventListener('click', function() {
        navList.classList.remove('active');
        this.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
    
    document.querySelectorAll('.nav-list a').forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
            navOverlay.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });
    
    document.body.classList.remove('no-scroll');
    
    const animateNumbers = () => {
        const numbers = document.querySelectorAll('.fact-number');
        
        numbers.forEach(number => {
            const target = parseInt(number.textContent.replace('+', ''));
            const duration = 1500;
            const increment = target / (duration / 16);
            let current = 0;
            
            const counter = setInterval(() => {
                current += increment;
                if (current >= target) {
                    clearInterval(counter);
                    number.textContent = target + '+';
                } else {
                    number.textContent = Math.floor(current);
                }
            }, 16);
        });
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumbers();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const factsSection = document.querySelector('.quick-facts');
    if (factsSection) {
        observer.observe(factsSection);
    }
    
    document.getElementById('current-year').textContent = new Date().getFullYear();
});