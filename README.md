# The-Beat-Battle

The Beat Battle is a game built as the first project in the frames of the Ironhack Full Stack Web Development bootcamp

## The Rules

The game is played using the mouse. On the left side of the screen, the player has a pad that contains 4 rows of 6 different sounds. Rows represent time signatures ("bars"), and the player can switch the sounds on and off to play or mute them.
A battle takes place where, on each round, the player hears a beat and then needs to reproduce it in a limited time. 
Once the time has ellapsed or if the player did the right pattern, the game moves to the next round.

![Screenshot of the game](https://https://github.com/iourisorokine/The-Beat-Battle/screenshots/screenshot1.jpg)

## Inspirations

My main inspirations for this project were Dev Ed's [Tap Music](https://www.youtube.com/watch?v=2VJlzeEVL8A) and Wes Bos [Drum Machine](https://www.youtube.com/watch?v=VuN8qwZoego), as well as the tradition music hardware and software that allow to create instrument loops.

## Technology Used

JavaScript ES6, HTML5 and CSS3 were used to build the game, without additional frameworks. Interactions are created using DOM manipulations. For each column of the pad, a loop iterates trough an array representing all the sounds with a "true" / "false" boolean value. When the value is "true", the sound is played. There are 4 columns that are also subject to an iteration with  a loop, separated by time intervals using setInterval().

## Issues and solutions

Usability: the first version included a tempo slider, as guessing the tempo was part of the challenge, as well as more buttons, more challenging rounds, and less time. This version was way too hard to grasp and the game was simplified for a better usability. 
Buttons "play", "stop" and "listen" on the user side were replaced by a play/stop toggle button and a start round/listen again toggle button for a better logic. The music plays auto once the user touches the pad, the highlight of the played notes has been enhanced.

Overlapping loops: pressing several times "play" could create play loops to overlap each other, making the music unstoppable and considerably slowing down the browser. This was solved 90% by making the play buttons disappear while the music is played so that calling the loop several times is technically impossible. A bug still remains when passing the rounds very fast: several "listen again" buttons get created and the music overlaps

## Special Thanks

My special thanks go to the Ironhack teaching staff who helped us all along the project: Pierre, Montasar, Svenja, Bruno, and Min. 
