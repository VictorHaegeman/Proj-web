// Sélection des éléments
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

let currentIndex = 0;
let autoTimer = null;
const AUTO_DELAY = 5000; // 5s

// Fonction pour afficher un slide
function showSlide(index) {

    // Boucle infinie (revient au début à la fin)
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;

    // Retire "active" partout
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));

    // Active le bon slide + bon dot
    slides[index].classList.add('active');
    dots[index].classList.add('active');

    currentIndex = index;
}

function startAuto() {
    stopAuto();
    autoTimer = setInterval(() => {
        showSlide(currentIndex + 1);
    }, AUTO_DELAY);
}

function stopAuto() {
    if (autoTimer) {
        clearInterval(autoTimer);
        autoTimer = null;
    }
}

// Bouton PREV
prevBtn.addEventListener('click', () => {
    showSlide(currentIndex - 1);
    startAuto();
});

// Bouton NEXT
nextBtn.addEventListener('click', () => {
    showSlide(currentIndex + 1);
    startAuto();
});

// Clic sur les petits points
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const index = parseInt(dot.dataset.index);
        showSlide(index);
        startAuto();
    });
});

// Démarrage auto + pause au survol
const carousel = document.querySelector('.carousel');
if (carousel) {
    carousel.addEventListener('mouseenter', stopAuto);
    carousel.addEventListener('mouseleave', startAuto);
    startAuto();
}
