let textInput = document.querySelector("textarea");

let btn = document.querySelector("button");
console.log(btn);

let isSpeaking = true;

const textToSpeech = () => {
  const synth = window.speechSynthesis;
  const userText = textInput.value;

  if (!synth.speaking && userText) {
    const utternace = new SpeechSynthesisUtterance(userText);
    synth.speak(utternace);
  }

  if (userText.length > 50) {
    if (synth.speaking && isSpeaking) {
      btn.innerText = "Pause";
      synth.resume();
      isSpeaking = false;
    } else {
      btn.innerText = "Resume";
      synth.pause();
      isSpeaking = true;
    }
  } else {
    isSpeaking = false;
    btn.innerText = "Speeking";
  }

  setInterval(() => {
    if (!synth.speaking && !isSpeaking) {
      isSpeaking = true;
      btn.innerText = "Play Again";
    }
  });
};

btn.addEventListener("click", textToSpeech);
