import * as util from "./util.js";
import CarFactory from "./carController.js";
//Font Load
WebFont.load({
	google: { families: ["David Libre", "Megrim"] },
});
/*NAV*/
//add event listeners to nav buttons
const navBtns = Array.from(document.querySelectorAll(".bot-nav-btns button"));
navBtns.push(document.querySelector("nav a"));
navBtns.forEach((element) =>
	element.addEventListener("click", util.activateMenu)
);
//add event listeners to accordian menus
const accordianMenus = document.querySelectorAll(".content__type");
accordianMenus.forEach((menu) => {
	menu.addEventListener("click", util.toggleShow);
});
//pass in the desired types to the car factory
async function findFactory() {
	const foundFactory = await util.fetchTheBall('./../rexx-rentalsInfo.json');
	const carFactory = new CarFactory("sedan", "truck", "sportsCar");
	carFactory.showCarNav(foundFactory.rentals);
	//
	if (window.location.href.includes('ourFleet')) {
		let pageRef = window.location.hash;
		pageRef = parseInt(pageRef.match(/[1-9]/));
		pageRef -= 1;
		const carDetails = foundFactory.rentals[pageRef];
		const imgRefList = await util.fetchTheBall('./../imgPaths.json');
		const iconsList = await util.fetchTheBall('./../icons.json');
		carFactory.showCarImg(carDetails, imgRefList);
		carFactory.showCarIcons(carDetails, iconsList);
		carFactory.showCarPage(carDetails);
		//console.log(document.querySelector('meta[name="description"]').content);
	}
}
findFactory();

