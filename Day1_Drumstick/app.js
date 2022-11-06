// The transitionend event is fired when a CSS transition has completed.
function  removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing')
    // console.log("Main chal rha  ")
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // console.log(audio)
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return //stop function for running all
    key.classList.add('playing')
    audio.currentTime = 0; //The currentTime property sets or returns the current position (in seconds) of the audio/video playback.
    audio.play(); //The play() method starts playing the current audio.
}

const keys =Array.from( document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown',playSound)