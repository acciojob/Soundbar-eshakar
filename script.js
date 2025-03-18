//your JS code here. If required.
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
        const audioObjects = {};
        
        // Create audio objects for each sound
        sounds.forEach(sound => {
            audioObjects[sound] = new Audio(`sounds/${sound}.mp3`);
        });
        
        // Function to play a sound
        function playSound(sound) {
            // Stop all currently playing sounds
            stopSounds();
            
            // Play the selected sound
            audioObjects[sound].play();
        }
        
        // Function to stop all sounds
        function stopSounds() {
            sounds.forEach(sound => {
                const audio = audioObjects[sound];
                audio.pause();
                audio.currentTime = 0;
            });
        }
        
        // Add event listeners to all sound buttons
        sounds.forEach(sound => {
            document.getElementById(sound).addEventListener('click', function() {
                playSound(sound);
            });
        });
        
        // Add event listener to stop button
        document.getElementById('stop').addEventListener('click', stopSounds);