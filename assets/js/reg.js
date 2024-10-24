document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    
    if (name.trim() === '') {
        speak('Please enter your name.');
    } else {
        speak(`Thank you, ${name}. Your form has been submitted.`);
    }
});

function speak(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(speech);
}
