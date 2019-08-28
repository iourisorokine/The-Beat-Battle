// creation of global variables
// player sounds and DJ sounds are loaded separately, to allow synch playing
const soundsPlayer = document.querySelectorAll(".sound");
const soundsDJ = document.querySelectorAll(".sound");
const soundsAmbiance = document.querySelectorAll(".ambiance-sound");
const notes = Array.from(document.querySelectorAll(".note"));
const notesCols = Array.from(document.querySelectorAll(".notes-col"));
let musicPlaying;
let playerScore = 0;
let tempo = 120;
let timeoutTempo = 60000 / (tempo * 2);
let roundNb = 0;
let roundIsStarted = false;


// loading the settings for the current round
let timeoutTempoDJ = 60000 / (partitionsToPickFrom[roundNb].tempo * 2);
let partitionDJ = partitionsToPickFrom[roundNb].notes;
let roundDifficulty = partitionsToPickFrom[roundNb].difficulty;
let currentScore = 0;
let feedbackZone = document.getElementById('feedback-zone');
let userMusicControls = document.getElementById('user-music-controls');

// starts the game by removing the welcome screen
welcomeScreenOff = () => {
    const welcomeScreen = document.getElementById('game-start-page');
    welcomeScreen.style.display = 'none';
}

// load sounds for the pad
window.addEventListener("load", () => {
    const pads = document.querySelectorAll(".note-def");
    // controls the bottom pads to play sounds
    pads.forEach((pad, index) => {
        pad.addEventListener("click", function () {
            soundsPlayer[index].currentTime = 0;
            soundsPlayer[index].play();
        });
    });
});

// listener for the buttons on the beat maker section
window.addEventListener("load", () => {
    notes.forEach(note => {
        note.addEventListener("click", function () {
            note.classList.toggle("highlighted");
            const rowsToggle = note.id.split("-")[1];
            const colsToggle = note.id.split("-")[2];
            partitionUser[rowsToggle][colsToggle] = !partitionUser[rowsToggle][colsToggle];
            soundsPlayer[colsToggle].play();
        });
    });
});

// creation of the pad and attribution of the ids

createColumn = () => {

}