// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

// Observe all skill cards
document.querySelectorAll('.skill-card').forEach(card => {
    observer.observe(card);
});

// Add initial visibility for cards in view
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.skill-card').forEach(card => {
        if (card.getBoundingClientRect().top < window.innerHeight) {
            card.classList.add('visible');
        }
    });
});