const keys = document.querySelectorAll(".key"),
  note = document.querySelector(".nowplaying"),
  hints = document.querySelectorAll(".hints");

const audioMap = {}; // Cache audio elements

function playNote(event) {
  const keyCode = event.keyCode;
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);

  if (!key) return;

  const keyNote = key.getAttribute("data-note");

  key.classList.toggle("playing");
  note.innerHTML = keyNote;

  // Use optional chaining and cached audio elements
  const audio = audioMap[keyCode] || (audioMap[keyCode] = document.querySelector(`audio[data-key="${keyCode}"]`));
  audio.currentTime = 0;
  audio.play();
}

function
 
removeTransition(event) {
  if (event.propertyName !== "transform") return;
  this.classList.remove("playing");
}

function hintsOn(hint, index) {
  hint.setAttribute("style", `transition-delay: ${index * 50}ms`);
}

hints.forEach(hintsOn);

keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playNote);