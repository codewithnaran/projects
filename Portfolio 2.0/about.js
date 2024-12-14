 // Add intersection observer for animation triggers
 const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.visibility = 'visible';
        }
    });
}, {
    threshold: 0.1
});

// Observe all animated elements
document.querySelectorAll('.content > *, .circle').forEach(el => {
    observer.observe(el);
});