// Floating Navigation Toggle
const toggleNav = document.querySelector('.toggle-nav');
const floatingNav = document.querySelector('.floating-nav');
const toggleLabel = document.querySelector('.toggle-label');
toggleNav.addEventListener('click', function () {
    this.classList.toggle('collapsed');
    floatingNav.classList.toggle('collapsed');
    if (floatingNav.classList.contains('collapsed')) {
        toggleLabel.style.display = 'inline';
    } else {
        toggleLabel.style.display = 'none';
    }
});
// Set initial state
document.addEventListener('DOMContentLoaded', function () {
    toggleLabel.style.display = floatingNav.classList.contains('collapsed') ? 'inline' : 'none';
});

// Update active link based on scroll position
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.floating-nav a');

    window.addEventListener('scroll', function () {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}); 