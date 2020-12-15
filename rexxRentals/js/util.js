export {
	activateMenu,
	toggleShow,
	fetchTheBall,
	setNewCarWindow,
	countNum,
	setListeners,
	getElem,
	getElemAll,
	fetchThePaper,
	openTab,
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
function setListeners(elem, event, call) {
	elem.addEventListener(event, call);
}
//slides nav, or changes window location
function activateMenu() {
	const nav = document.querySelector("nav");
	//check which btn was clicked and change width
	let responsive = "";
	screen.width > 500 ? (responsive = "25vw") : (responsive = "100%");
	if (this.className.includes("close")) {
		nav.style.width == `${responsive}`
			? (nav.style.width = "0%")
			: (nav.style.width = "0%");
	} else if (this.id.includes("rent")) {
		window.location = `${this.dataset.src}`;
	} else if (this.id.includes("about")) {
		window.location = "./about.html";
	} else {
		nav.style.width = `${responsive}`;
	}
}
//toggle's display property of child element
function toggleShow() {
	let item = this.children[1];
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
async function fetchThePaper(url) {
	const ball = await fetch(url)
		.then((dog) => {
			if (!dog.ok) {
				throw Error(dog.statusText);
			} else {
				return dog.text();
			}
		})
		.catch((error) => console.log(`Dog is blind: ${error}`));
	return ball;
}
function openTab(e) {
	const pages = document.querySelectorAll(".details__content");
	let lowerTarget = e.target.innerHTML.toLowerCase();
	let setPage = (activePage) => {
		activePage.className += " active";
	};
	pages.forEach((page) => {
		if (page.className.includes("active")) {
			page.classList.remove("active");
		}
		if (page.id.includes(lowerTarget)) {
			setPage(page);
		}
	});
	e.target.classList += " active";
}
function setNewCarWindow(event) {
	window.location.href = `./ourFleet.html#${event.target.dataset.car}`;
	window.onbeforeunload = () => {
		window.scrollTo(0, 0);
	};
	if (window.location.href.match("ourFleet")) {
		window.location.reload();
	}
}
