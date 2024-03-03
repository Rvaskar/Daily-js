function speak(){
    let textBox = document.getElementById("textarea").value;
    let synth = window.speechSynthesis;
    let voice = new SpeechSynthesisUtterance(textBox);
    synth.speak(voice);
}
