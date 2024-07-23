let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item-cards');
    const totalSlides = slides.length;

    // Atualiza o índice atual
    currentIndex = (index + totalSlides) % totalSlides;

    // Move o carrossel para o slide atual
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Muda de slide a cada 3 segundos
setInterval(() => {
    showSlide(currentIndex + 1);
}, 4000);

// Exibe o primeiro slide inicialmente
showSlide(currentIndex);
