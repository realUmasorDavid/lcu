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
    
    const admissionForm = document.getElementById('admissionForm');
    
    admissionForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        alert('Thank you for your application! We will review your information and contact you soon.');
        this.reset();
        
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    document.getElementById('current-year').textContent = new Date().getFullYear();
});