
function playPad(e) {
    const key = e.keyCode;

    const btn = document.querySelector(`.pad[data-key="${key}"]`);
    if(!btn) return;
    btn.classList.add('pressed');

    const audio = document.querySelector(`audio[data-key="${key}"]`);
    if(!audio) {return};
    audio.currentTime = 0;
    audio.play();
    
};

function playAudio() {
    const key = parseInt(this.dataset.key);
    
    const btn = document.querySelector(`.pad[data-key="${key}"]`);
    if(!btn) return;
    btn.classList.add('pressed');

    const audio = document.querySelector(`audio[data-key="${key}"]`);
    if(!audio) {return};
    audio.currentTime = 0;
    audio.play();
    
};

function removeTransition(e) {
    this.classList.remove('pressed');
};

const pads = document.querySelectorAll('.pad');
pads.forEach(pad => pad.addEventListener('transitionend', removeTransition));

pads.forEach(pad => pad.addEventListener('click', playAudio));
pads.forEach(pad => pad.addEventListener('touchend', playAudio));

window.addEventListener('keydown', playPad);
