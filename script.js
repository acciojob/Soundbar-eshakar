//your JS code here. If required.
let myaudio  = new Audio();

function applause() {
	myaudio.src = "./sounds/sound1";
	myaudio.currentTime = 0;
	myaudio.play();
}

function boo() {
	myaudio.src = "./sounds/sound2";
	myaudio.currentTime = 0;
	myaudio.play();
}

function gasp() {
	myaudio.src = "./sounds/sound3";
	myaudio.currentTime = 0;
	myaudio.play();
}

function tada() {
	myaudio.src = "./sounds/sound4";
	myaudio.currentTime = 0;
	myaudio.play();
}

function victory() {
	myaudio.src = "./sounds/sound5";
	myaudio.currentTime = 0;
	myaudio.play();
}

function wrong() {
	myaudio.src = "./sounds/sound6";
	myaudio.currentTime = 0;
	myaudio.play();
}

function stop() {
	myaudio.src = "./sounds/sound7";
	myaudio.currentTime = 0;
	myaudio.play();
}


function stop() {
	myaudio.pause();
}

const audio = document.getElementById("audio");

function play(src) {
	audio.src=src;
	audio.play();
}

function stop() {
	audio.pause();
}
