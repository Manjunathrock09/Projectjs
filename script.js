const pianoKeys = document.querySelectorAll(".piano-keys .key"),
      volumeSlider = document.querySelector(".volume-slider input"),
      keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [],
    audio = new Audio(); 
const playTune = (key) => {
    audio.src = `tunes/${key}.wav`; 
    audio.currentTime = 0; 
    audio.play(); 

    const clickedKey = document.querySelector(`[data-key="${key}"]`); 
    clickedKey.classList.add("active"); 
    setTimeout(() => {
        clickedKey.classList.remove("active"); 
    }, 150);
};

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key); 
    key.addEventListener("click", () => playTune(key.dataset.key));
});

const handleVolume = (e) => {
    audio.volume = e.target.value / 100; 
};

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
};

const pressedKey = (e) => {
    const key = e.key.toLowerCase();
    if (allKeys.includes(key)) {
        playTune(key); 
    }
};

keysCheckbox.addEventListener("click", showHideKeys); 
volumeSlider.addEventListener("input", handleVolume); 
document.addEventListener("keydown", pressedKey); 

volumeSlider.value = audio.volume * 100; 
