const swiperWrapper = document.querySelector('.swiper-wrapper');
const slides = document.querySelectorAll('.swiper-slide');
let currentIndex = 0;

function showSlide(index) {
    const totalSlides = slides.length;
    // Ensure index wraps around
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    // Move the slides
    const offset = -currentIndex * 100; // negative percentage
    swiperWrapper.style.transform = `translateX(${offset}%)`;
}

// Automatic slide change every 5 seconds
setInterval(() => {
    showSlide(currentIndex + 1);
}, 5000);

// Initial display
showSlide(currentIndex);