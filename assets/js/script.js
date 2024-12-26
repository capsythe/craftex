document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
    });
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 60, // Adjust for fixed nav height
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    const scrollPosition = window.scrollY;

    navLinks.forEach(link => {
        if (scrollPosition > 50) { // Adjust this value as needed
            link.classList.add('scrolled');
        } else {
            link.classList.remove('scrolled');
        }
    });

    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

const scrollToTopButton = document.getElementById('scrollToTop');

window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        scrollToTopButton.classList.add('show');
    } else {
        scrollToTopButton.classList.remove('show');
    }
});

scrollToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
