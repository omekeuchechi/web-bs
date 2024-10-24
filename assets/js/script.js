let currentSlide = 0;

function moveSlide(n) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;

    currentSlide = (currentSlide + n + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Infinite auto-slide
setInterval(() => {
    moveSlide(1);
}, 3000);
