// Snowfall animation
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowflake.style.opacity = Math.random();
    snowflake.innerHTML = '❄';
    document.getElementById('snowfall').appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

setInterval(createSnowflake, 100);

// Background music toggle
const musicToggle = document.getElementById('toggleMusic');
const backgroundMusic = document.getElementById('backgroundMusic');

musicToggle.addEventListener('click', () => {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        musicToggle.textContent = '🔇';
    } else {
        backgroundMusic.pause();
        musicToggle.textContent = '🔊';
    }
});

// Navigation
function navigateTo(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Form steps
let currentStep = 0;
const formSteps = document.querySelectorAll('.form-step');
const progressBar = document.querySelector('.progress');

function updateProgressBar() {
    const progress = ((currentStep + 1) / formSteps.length) * 100;
    progressBar.style.width = `${progress}%`;
}

function nextStep(step) {
    formSteps[currentStep].classList.remove('active');
    currentStep = step;
    formSteps[currentStep].classList.add('active');
    updateProgressBar();
}

function prevStep(step) {
    formSteps[currentStep].classList.remove('active');
    currentStep = step - 1;
    formSteps[currentStep].classList.add('active');
    updateProgressBar();
}

// Form submission
document.getElementById('contestForm').addEventListener('submit', (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    navigateTo('thank-you');
    startConfetti();
    startCountdown();
});

// Spin the wheel game
const wheel = document.querySelector('.wheel');
const spinButton = document.getElementById('spinWheel');

spinButton.addEventListener('click', () => {
    const rotation = Math.floor(Math.random() * 360) + 720; // At least 2 full spins
    wheel.style.transform = `rotate(${rotation}deg)`;
    spinButton.disabled = true;
    setTimeout(() => {
        alert('Congratulations! You won a holiday sticker!');
        spinButton.disabled = false;
    }, 5000);
});

// Gift box animation
const giftLid = document.querySelector('.gift-lid');
const statusMessage = document.getElementById('statusMessage');

function animateGiftBox() {
    giftLid.style.transform = 'translateY(-20px) rotateX(60deg)';
    setTimeout(() => {
        statusMessage.textContent = 'Status: Approved!';
        statusMessage.style.color = 'green';
    }, 500);
}

setTimeout(animateGiftBox, 3000); // Animate after 3 seconds for demo purposes

// Confetti animation
function startConfetti() {
    const confettiContainer = document.getElementById('confetti');
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confettiContainer.appendChild(confetti);
    }
    setTimeout(() => {
        confettiContainer.innerHTML = '';
    }, 5000);
}

// Countdown timer
function startCountdown() {
    const countdownElement = document.getElementById('countdown');
    let timeLeft = 24 * 60 * 60; // 24 hours in seconds

    function updateCountdown() {
        const hours = Math.floor(timeLeft / 3600);
        const minutes = Math.floor((timeLeft % 3600) / 60);
        const seconds = timeLeft % 60;

        countdownElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        if (timeLeft > 0) {
            timeLeft--;
            setTimeout(updateCountdown, 1000);
        } else {
            countdownElement.textContent = "Winners Announced!";
        }
    }

    updateCountdown();
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    navigateTo('home');
    updateProgressBar();

    // Animate decorations
    gsap.to('.lights', {duration: 1, opacity: 0.5, repeat: -1, yoyo: true, ease: "power1.inOut"});
    gsap.to('.tree', {duration: 2, y: -10, repeat: -1, yoyo: true, ease: "power1.inOut"});
    gsap.to('.gifts', {duration: 1.5, scale: 1.1, repeat: -1, yoyo: true, ease: "power1.inOut"});

    // Animate CTA button
    gsap.to('.cta-button', {duration: 0.5, y: -5, repeat: -1, yoyo: true, ease: "power1.inOut"});
});

