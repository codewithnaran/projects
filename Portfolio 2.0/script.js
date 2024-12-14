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

    // Sticky navigation
    const navbar = document.getElementById('navbar');
    const sticky = navbar.offsetTop;

    window.onscroll = () => {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
        animateOnScroll();
    };

    // Animate elements on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight - 100) {
                element.classList.add('animated');
            }
        });
    }

    // Animate skill bars
    const skillBars = document.querySelectorAll('.progress');
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width;
    });

    // Project modal
    const modal = document.getElementById('project-modal');
    const projectCards = document.querySelectorAll('.project-card');
    const closeBtn = document.querySelector('.close');

    const projectData = {
        project1: {
            title: 'E-commerce Website Redesign',
            image: 'https://placeholder.com/800x600',
            description: 'Redesigned the user interface and improved the user experience for a major e-commerce platform, resulting in a 25% increase in conversions.',
            technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
            liveLink: '#',
            codeLink: '#'
        },
        project2: {
            title: 'Mobile App UI Design',
            image: 'https://placeholder.com/800x600',
            description: 'Created a sleek and intuitive user interface for a fitness tracking mobile app, focusing on user engagement and ease of use.',
            technologies: ['Sketch', 'Adobe XD', 'Prototyping'],
            liveLink: '#',
            codeLink: '#'
        },
        project3: {
            title: 'Corporate Branding Package',
            image: 'https://placeholder.com/800x600',
            description: 'Developed a comprehensive branding package for a tech startup, including logo design, color palette, and brand guidelines.',
            technologies: ['Adobe Illustrator', 'Adobe Photoshop'],
            liveLink: '#',
            codeLink: '#'
        },
        project4: {
            title: 'Interactive Data Visualization',
            image: 'https://placeholder.com/800x600',
            description: 'Built an interactive data visualization dashboard for a financial services company, allowing users to explore complex datasets with ease.',
            technologies: ['D3.js', 'SVG', 'React', 'Node.js'],
            liveLink: '#',
            codeLink: '#'
        }
    };

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const project = projectData[card.getAttribute('data-project')];
            document.getElementById('modal-title').textContent = project.title;
            document.getElementById('modal-image').src = project.image;
            document.getElementById('modal-description').textContent = project.description;
            document.getElementById('modal-tech').innerHTML = project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('');
            document.getElementById('modal-live').href = project.liveLink;
            document.getElementById('modal-code').href = project.codeLink;
            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Form validation
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.querySelector('input[name="name"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const subject = document.querySelector('input[name="subject"]').value;
        const message = document.querySelector('textarea[name="message"]').value;

        if (name && email && subject && message) {
            // Here you would typically send the form data to a server
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
});