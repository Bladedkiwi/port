import * as util from "./util.js";
import CarFactory from "./carController.js";
//Font Load
WebFont.load({
	google: { families: ["David Libre", "Megrim"] },
});
//add event listeners to nav buttons
const navBtns = Array.from(document.querySelectorAll(".bot-nav-btns button"));
navBtns.push(document.querySelector("nav a"));
navBtns.forEach((element) => {
	if (!element.id.includes("favBtn")) {
		element.addEventListener("click", util.activateMenu);
	} else {
		element.addEventListener("click", util.setNewCarWindow);
	}
});
//add event listeners to accordian menus
const accordianMenus = document.querySelectorAll(".content__type");
accordianMenus.forEach((menu) => {
	menu.addEventListener("click", util.toggleShow);
});
//pass in the desired types to the car factory
async function findFactory() {
	const foundFactory = await util.fetchTheBall("./rexx-rentalsInfo.json");
	const carFactory = new CarFactory("sedan", "truck", "sportsCar");
	carFactory.showCarNav(foundFactory.rentals);
	//check for href change
	if (window.location.href.includes("ourFleet")) {
		let pageRef = window.location.hash;
		pageRef = parseInt(pageRef.match(/[0-9]/));
		const carDetails = foundFactory.rentals[pageRef];
		const imgRefList = await util.fetchTheBall("./imgPaths.json");
		const iconsList = await util.fetchTheBall("./icons.json");
		carFactory.showCarImg(carDetails, imgRefList);
		carFactory.showCarIcons(carDetails, iconsList);
		carFactory.showCarPage(carDetails);
		//async arrow function - super cool
		const loadConditions = async () => {
			util.getElem("#conditions").innerHTML = await util.fetchThePaper(
				"./conditions.txt"
			);
		};
		util.getElem("#conditionsBtn").addEventListener("click", loadConditions);
		const tabList = document.querySelectorAll(".details__tab");
		tabList.forEach((tab) => {
			tab.addEventListener("click", util.openTab);
		});
		carFactory.chkContent(carDetails);
	}
}
findFactory();
