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
    
    const contactForm = document.getElementById('contactForm');
    const thankYouMessage = document.getElementById('thankYouMessage');
    const newMessageBtn = document.getElementById('newMessageBtn');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        setTimeout(() => {
            contactForm.style.display = 'none';
            thankYouMessage.style.display = 'block';
            
            thankYouMessage.scrollIntoView({ behavior: 'smooth' });
            contactForm.reset();
        }, 1000);
    });
    
    newMessageBtn.addEventListener('click', function() {
        thankYouMessage.style.display = 'none';
        contactForm.style.display = 'block';
        
        contactForm.scrollIntoView({ behavior: 'smooth' });
    });
    
    document.getElementById('current-year').textContent = new Date().getFullYear();
});