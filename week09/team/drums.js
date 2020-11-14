//console.log('connected');
let newTotal = 10;

function playSound(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	if (!audio) return; //stops function if audio is not on that key
	audio.currentTime = 0;
	audio.play();
	key.classList.add("playing");
	let marginTop = key.style.top; //40px
	marginTop = marginTop.slice(0,2);
	marginTop = parseInt(marginTop);
	//let stringNum = marginTop.match(/^[1-9]?[0-9]/); //40
	//console.log(stringNum);
	key.setAttribute("style", `top:${newTotal}px`);
	newTotal === 100 ? (newTotal = 0) : (newTotal += 10);


	/*I played with this afterwards to figure out the full stretch. 
	if (key.style.top === "") {
		//sets initial style
		key.style.top = "10px";
	}
	else {
		//grabs top value, matches the number and makes it an integer, then adds a cap at 100 for reset.
		let marginTop = key.style.top;
		let stringNum = parseInt(marginTop.match(/^[1-9]?[0-9]?[0-9]/));
		stringNum === 100 ? (stringNum = 0) : (stringNum += 10);
		key.style.top = `${stringNum}px`;
	}
	*/
	
	
}
function removeTransition(e) {
	if (e.propertyName !== "transform") return; //skip if it's not a transform
	//console.log(e);
	this.classList.remove("playing"); //remove the playing class
}
//Grab all the key div's
const keys = Array.from(document.querySelectorAll(".key"));
//console.log(keys);
//iterate over nodeList and remove playing class when transform is done
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
// playSound when key is down
//window.addEventListener('keydown', e => {console.log(e);})
document.addEventListener("keydown", playSound);
