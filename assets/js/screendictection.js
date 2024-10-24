function handleScreenChange(e) {
    const content = document.getElementById('content');
    if (e.matches) {
        content.innerHTML = 'This is a small screen';
        document.body.style.backgroundColor = '#ff6b6b';
    } else {
        content.innerHTML = 'This is a large screen';
        document.body.style.backgroundColor = '#6e6cd8';
    }
}

// Create a MediaQueryList object
const mediaQuery = window.matchMedia('(max-width: 600px)');

// Call the function at run time
handleScreenChange(mediaQuery);

// Attach the listener function to the state changes
mediaQuery.addEventListener('change', handleScreenChange);
