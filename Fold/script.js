document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Project filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            projectItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // See More button functionality
    const seeMoreBtn = document.getElementById('see-more');
    let visibleProjects = 3;

    seeMoreBtn.addEventListener('click', () => {
        const hiddenProjects = document.querySelectorAll('.project-item[style="display: none;"]');
        const projectsToShow = Array.from(hiddenProjects).slice(0, 3);

        projectsToShow.forEach(project => {
            project.style.display = 'block';
        });

        visibleProjects += projectsToShow.length;

        if (visibleProjects >= projectItems.length) {
            seeMoreBtn.style.display = 'none';
        }
    });

    // Testimonial carousel
    const testimonials = document.querySelectorAll('.testimonial-item');
    const prevBtn = document.getElementById('prev-testimonial');
    const nextBtn = document.getElementById('next-testimonial');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonials.forEach(item => item.classList.remove('active'));
        testimonials[index].classList.add('active');
    }

    prevBtn.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentTestimonial);
    });

    nextBtn.addEventListener('click', () => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    });

    // Initial display
    showTestimonial(currentTestimonial);

    // Form submission (you can add your own logic here)
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Form submitted successfully!');
        contactForm.reset();
    });

    // Fade-in animation for sections
    const sections = document.querySelectorAll('section');
    const fadeInOptions = {
        threshold: 0.1
    };

    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, fadeInOptions);

    sections.forEach(section => {
        section.classList.add('fade-out');
        fadeInObserver.observe(section);
    });
});