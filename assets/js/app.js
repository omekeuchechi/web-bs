// let currentIndex = 0;

// function showSlide(index) {
//     const slides = document.querySelectorAll('.slide');
//     if (index >= slides.length) {
//         currentIndex = 0;
//     } else if (index < 0) {
//         currentIndex = slides.length - 1;
//     } else {
//         currentIndex = index;
//     }
//     const slidesContainer = document.querySelector('.slides');
//     slidesContainer.style.transform = `translateX(${-currentIndex * 100}%)`;
// }

// function moveSlide(direction) {
//     showSlide(currentIndex + direction);
// }

// // Optional: Automatically move to the next slide every 5 seconds
// setInterval(() => {
//     moveSlide(1);
// }, 5000);

// // Initial display
// showSlide(currentIndex);

// Add any interactive animations or dynamic content here
document.querySelector('.cta-button').addEventListener('click', function() {
    alert('Let\'s get started!');
});
