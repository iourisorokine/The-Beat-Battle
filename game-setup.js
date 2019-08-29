// creation of global variables
// player sounds and DJ sounds are loaded separately, to allow synch playing
const soundsPlayer = document.querySelectorAll(".sound");
const soundsDJ = document.querySelectorAll(".sound");
const soundsAmbiance = document.querySelectorAll(".ambiance-sound");
const notes = Array.from(document.querySelectorAll(".note"));
const notesCols = Array.from(document.querySelectorAll(".notes-col"));
const startOrListenButton = document.getElementById('start-or-listen-button');
let partitionsToPickFrom = easyPartitions;
let musicPlaying;
let playerScore = 0;
let roundNb = 0;
let roundIsStarted = false;
let userMusicIsPlaying = false;
let tempo = partitionsToPickFrom[roundNb].tempo; // user tempo removed
let timeoutTempo = 60000 / (tempo * 2);


// loading the settings for the current round
let partitionDJ = partitionsToPickFrom[roundNb].notes;
let roundDifficulty = partitionsToPickFrom[roundNb].difficulty;
let currentScore = 0;
const feedbackZone = document.getElementById('feedback-zone');
const userMusicControls = document.getElementById('button-play-div');

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

// eds the current game
endTheGame = () => {
    document.getElementById('end-game-score').innerText = playerScore;
    document.getElementById('end-game-board').style.display = 'flex';
    soundsAmbiance[2].play();
}

// starts a new game when the button "Play again" is clicked

playAgain = (difficulty) => {
    document.getElementById('end-game-board').style.display = 'none';
    soundsAmbiance[2].pause();
    clearFeedbackZone();
    writeTutorialText2();
    partitionsToPickFrom = (difficulty === 'easy') ? easyPartitions : hardPartitions;
    roundNb = 0;
    playerScore = 0;
    document.getElementById('score-span').innerText = `Score: 0`;
    resetTime()
    moveToNextRound();
}

// listener for the buttons on the beat maker section
window.addEventListener("load", () => {
    notes.forEach(note => {
        note.addEventListener("click", function () {
            note.classList.toggle("highlighted");
            const rowsToggle = note.id.split("-")[1];
            const colsToggle = note.id.split("-")[2];
            partitionUser[rowsToggle][colsToggle] = !partitionUser[rowsToggle][colsToggle];
            if (userMusicIsPlaying === false) playUserMusic();

        });
    });
});


// Instructions appear in the bubble 

let tuto1i = 0;
let tuto2i = 0;
writeTutorialText1 = () => {
    let feedbackZone = document.getElementById('feedback-zone');
    const tutorialText = 'To warm-up, play around with the pad on the left side: - Click on the squares to add notes. - Click on "Play" / "Stop" to play or stop the music.';
    if (tuto1i < tutorialText.length) {
        feedbackZone.innerHTML += tutorialText.charAt(tuto1i);
        tuto1i++;
        setTimeout(writeTutorialText1, 70);
    }
}

writeTutorialText2 = () => {
    let feedbackZone = document.getElementById('feedback-zone');
    const tutorialText = 'When you are ready, press "Start The Round"';
    if (tuto2i < tutorialText.length) {
        feedbackZone.innerHTML += tutorialText.charAt(tuto2i);
        tuto2i++;
        setTimeout(writeTutorialText2, 70);
    }
}

writeTutorial = () => {

    writeTutorialText1();
    setTimeout(() => {
        feedbackZone.innerHTML = "";
        writeTutorialText2();
        startOrListenButton.appendChild(createStartButton());
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