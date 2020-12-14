export {
	activateMenu,
	toggleShow,
	fetchTheBall,
	setNewCarWindow,
	countNum,
	setListeners,
	getElem,
	getElemAll
};
function getElem(id) {
	return document.querySelector(`${id}`);
}
function getElemAll(id) {
	return document.querySelectorAll(`${id}`);
}
function countNum(start) {
	let index = start;
	return function () {
		return index++;
	};
}
function setListeners(elem,event, call) {
	elem.addEventListener(event, call);
}
//slides nav, or changes window location
function activateMenu() {
	const nav = document.querySelector("nav");
    //check which btn was clicked and change width
	if (this.className.includes("close")) {
		nav.style.width == "100%"
			? (nav.style.width = "0%")
			: (nav.style.width = "0%");
	} else if (this.id.includes("rent")) {
		window.location = `${this.dataset.src}`;
	} else if (this.id.includes("about")) {
		window.location = "/about.html";
    } else {
		nav.style.width = "100%";
	}
}
//toggle's display property of child element
function toggleShow() {
	let item = this.children[1];
	//if item hasn't been defined -
	//define it block, or if item is defined as none define it block
	//if item is defined as "block" define it none
	item.style.display === "" || item.style.display === "none"
		? (item.style.display = "block")
		: (item.style.display = "none");
}
async function fetchTheBall(url) {
	const ball = await fetch(url)
		.then((dog) => {
			if (!dog.ok) {
				throw Error(dog.statusText);
			} else {
				return dog.json();
			}
		})
		.catch((error) => console.log(`Dog is blind: ${error}`));
	return ball;
}

function setNewCarWindow(event) {
    window.location = `./ourFleet.html#${event.target.dataset.car}`;
}