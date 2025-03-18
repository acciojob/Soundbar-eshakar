//your JS code here. If required.
const buttons = document.querySelectorAll('.btn');
const stopButton = document.querySelector('.stop');
let currentAudio = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Stop any currently playing audio
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        // Create a new audio element for the clicked button
        currentAudio = new Audio(button.getAttribute('data-sound'));
        currentAudio.play();
    });
});

stopButton.addEventListener('click', () => {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
});
