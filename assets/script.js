function togglemenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector("hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open"); 
}
// script.js

function toggleMenu() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    hamburgerMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });

            // Close the menu on mobile after a link is clicked
            const hamburgerMenu = document.querySelector('.hamburger-menu');
            const navLinks = document.querySelector('.nav-links');
            hamburgerMenu.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});


// Optional: Add a back-to-top button
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = "&uarr;"; // Up arrow symbol
backToTopButton.classList.add('back-to-top');
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) { // Show after scrolling 100px
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
