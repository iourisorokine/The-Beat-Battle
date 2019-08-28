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
    writeTutorial();
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

// 


writeTutorial = () => {

    let i = 0;
    const tutorialText1 = 'To warm-up, play around with the pad on the left side: - Click on the squares to add notes. - Click on "Play" to play the music. - Change the tempo with the selector.';
    const tutorialText2 = 'When you are ready, press "Start The Round"';
    const speed = 70;
    let feedbackZone = document.getElementById('feedback-zone');

    writeTutorialText1 = () => {
        if (i < tutorialText1.length) {
            feedbackZone.innerHTML += tutorialText1.charAt(i);
            i++;
            setTimeout(writeTutorialText1, speed);
        }
    }

    writeTutorialText2 = () => {
        if (i < tutorialText2.length) {
            feedbackZone.innerHTML += tutorialText2.charAt(i);
            i++;
            setTimeout(writeTutorialText2, speed);
        }
    }
    writeTutorialText1();
    setTimeout(() => {
        feedbackZone.innerHTML = "";
        i = 0;
        writeTutorialText2();
        document.getElementById('start-or-listen-button').appendChild(createStartButton());
    }, 20000);

}


/*
writeTutorial = () => {

    let i = 0;
    const tutorialText1 = 'To warm-up, play around with the pad on the left side: - Click on the squares to add notes. - Click on "Play" to play the music. - Change the tempo with the selector.';
    const tutorialText2 = 'When you are ready, press "Start The Battle"';
    const speed = 70;
    let feedbackZone = document.getElementById('feedback-zone');

    writeTutorialText1 = () => {
        if (i < tutorialText1.length) {
            feedbackZone.innerHTML += tutorialText1.charAt(i);
            i++;
            setTimeout(writeTutorialText1, speed);
        }
    }

    writeTutorialText2 = () => {
        if (i < tutorialText2.length) {
            feedbackZone.innerHTML += tutorialText2.charAt(i);
            i++;
            setTimeout(writeTutorialText2, speed);
        }
    }
    writeTutorialText1();
    setTimeout(() => {
        feedbackZone.innerHTML = "";
        i = 0;
        writeTutorialText2();
        document.getElementById('start-or-listen-button').appendChild(createStartButton());
    }, 20000);

}*/