let synth = window.speechSynthesis;
let utterance = null;
function speak(){
    let textBox = document.getElementById("textarea").value;
    let voice = new SpeechSynthesisUtterance(textBox);
    synth.speak(voice);
}

function pauseSpeaking() {
    if (synth.speaking && !synth.paused) {
        synth.pause();
        console.log("Speech paused.");
    }
}

function resumeSpeaking() {
    if (synth.paused) {
        synth.resume();
        console.log("Speech resumed.");
    }
}

function stopSpeaking() {
    if (synth.speaking) {
        synth.cancel(); // Stops the speech completely
        console.log("Speech stopped.");
    }
}