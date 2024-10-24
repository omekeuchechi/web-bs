const readMoreBtn = document.getElementById('readMoreBtn');
const extraContent = document.getElementById('extraContent');
const scrollToTopBtn = document.getElementById('scrollToTop');

// Toggle visibility of extra content
readMoreBtn.addEventListener('click', () => {
if (extraContent.classList.contains('hidden')) {
    extraContent.classList.remove('hidden');
    readMoreBtn.innerText = 'Read Less';
} else {
    extraContent.classList.add('hidden');
    readMoreBtn.innerText = 'Read More';
}
});


// Show or hide the scroll-to-top button
window.addEventListener('scroll', () => {
if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollToTopBtn.classList.remove('hidden');
} else {
    scrollToTopBtn.classList.add('hidden');
}
});

// Scroll to top when button is clicked
scrollToTopBtn.addEventListener('click', () => {
window.scrollTo({
top: 0,
behavior: 'smooth'
});
});

const headingAnimation = document.getElementById('about');

// animation of about text in web page
headingAnimation.addEventListener('click', () => {
    if (headingAnimation.classList.contains('scale')) {
        setInterval(() => {
            headingAnimation.classList.remove('scale');
        }, 3000);
    }
    else {
        headingAnimation.classList.add('scale');
    }
});

const mobileBar = document.querySelector('.fa-bars');
const hideNav = document.getElementById('ull');
const fadeBg = document.getElementById('blur');
// let cl = 'show';
// let timeSprite = 'fas fa-times';
// let body =
let classes = {
    'cl': 'show',
    'timeSprite': 'fas fa-times',
    'bodyStr': 'opc'
}

mobileBar.addEventListener('click', () => {
    if (hideNav.classList.contains(classes['cl'])) {
        hideNav.classList.remove(classes['cl']);
        mobileBar.setAttribute('class', 'fas fa-bars');
        fadeBg.classList.remove('fade');
    }
    else {
        hideNav.classList.add(classes['cl']);
        mobileBar.setAttribute('class', classes['timeSprite']);
        fadeBg.classList.add('fade');
    }
})

const mobileChanges_1 = document.getElementById('logo');
// const width = window.innerWidth;
// const height = window.innerHeight;

//     window.addEventListener('load', () => {
//         if (window.width < 380) {
//             mobileChanges_1.innerText = 'W-B';
//         }
//         else if (window.width >= 990) {
//             mobileChanges_1.innerText = 'web-BS';
//         }
//         else {
//             mobileChanges_1.innerText = 'web-Bros';
//         }
//     })

