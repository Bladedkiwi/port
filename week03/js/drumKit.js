

/*
WES BOS JS30 DAY 1 - Followed along, and researched things for it in the middle of it
*
Keyboard playing drum kit: 
Step One: add eventListener for keys pressed
Step Two: Use a function to select the object that was pressed, and specify which soundKey needed
Step Three: Change class to .playing for userInput
*/

function playSound (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}]"`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}]"`);
    if (!audio) return; //stops function if audio is not on that key
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');

}
function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //skip if it's not a transform
    this.classList.remove('playing'); //remove the playing class
}
//Grab all the key div's
const keys = Array.from(document.querySelectorAll('.key'));
//iterate over nodeList and remove playing class when transform is done
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// playSound when key is down 
window.addEventListener('keydown', playSound);


//Curious why keydown, and not keypress
window.addEventListener('keypress', playSound);