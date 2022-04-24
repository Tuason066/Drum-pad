class UI {
    static playAudio() {
        const key = parseInt(this.dataset.key);
    
        const btn = document.querySelector(`.pad[data-key="${key}"]`);
        if(!btn) return;
        btn.classList.add('pressed');

        const audio = document.querySelector(`audio[data-key="${key}"]`);
        if(!audio) {return};
        audio.currentTime = 0;
        audio.play();
    };

    static playPad(e) {
        const key = e.keyCode;

        const btn = document.querySelector(`.pad[data-key="${key}"]`);
        if(!btn) return;
        btn.classList.add('pressed');

        const audio = document.querySelector(`audio[data-key="${key}"]`);
        if(!audio) {return};
        audio.currentTime = 0;
        audio.play();
    };

    static removeTransition() {
        this.classList.remove('pressed');
    }
};

const pads = document.querySelectorAll('.pad');
pads.forEach(pad => pad.addEventListener('transitionend', UI.removeTransition));
pads.forEach(pad => pad.addEventListener('touchend', UI.playAudio));
window.addEventListener('keydown', UI.playPad);

window.addEventListener('resize', () => {
    const screenWidth = window.innerWidth;
    if(screenWidth > 768) {
        pads.forEach(pad => pad.addEventListener('click', UI.playAudio));
    };
});