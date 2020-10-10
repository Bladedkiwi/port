

/*
WES BOS JS30 DAY 1 - Followed along, and researched things for it in the middle of it
*
Keyboard playing drum kit: 
Step One: add eventListener for keys pressed
Step Two: Use a function to select the object that was pressed, and specify which soundKey needed
Step Three: Change class to .playing for userInput
*/

/***Having problem with getting sounds to play:
-Time to console log things, to see if we are getting input
-keys are not being shown in console log when pressed.
-window should work, when changed to document.body it does output data, just not what we want
-tried window.addEventListener('keydown', function) example in w3schools and it works
-Suspecting the parameter to be an issue
-the paramater is the key being pressed, and is passed when EventListener is activated
-Got it! - Syntax error...yay... In the data-key="e.keyCode" I left a bracket inside the "" 
Figured out the error after reading through someone's journey on js30
https://medium.com/@murkrage/javascript-30-day-1-drum-kit-cb3d6e5780ce
*/
function playSound (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    //console.log(audio);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; //stops function if audio is not on that key
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}
function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //skip if it's not a transform
    console.log(e);
    this.classList.remove('playing'); //remove the playing class
}
//Grab all the key div's
const keys = Array.from(document.querySelectorAll('.key'));
//console.log(keys);
//iterate over nodeList and remove playing class when transform is done
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// playSound when key is down 
//window.addEventListener('keydown', e => {console.log(e);})
window.addEventListener('keydown', playSound);
