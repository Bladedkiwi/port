import { countNum } from "./util.js";

export default class CarMaker {
	constructor() {}
	getLinkData() {
		let num = countNum(0);
		return function (item) {
			return (item = document.querySelector(`button[data-car="${num()}"]`));
		};
	}
	getCarImgLists(size, list) {
		if (size === "large") {
			return list.filter((img) => {
				if (!(img.match("/mini/") || img.match("/medium/"))) {
					return img;
				}
			});
		} else {
			return list.filter((img) => {
				return img.match(size);
			});
		}
	}
	getName(car) {
		return `${car.year} ${car.name}`;
	}
	getAbout(car) {
		return `${car.about.car} <a id="aboutURL" href="${car.about.link}" title="Read more about the ${car.year} ${car.name}">Read more..</a>`;
	}
	getAttr(carAttr) {
		let list = carAttr.map((attr) => {
			return `<li>${attr}</li>`;
		});
		return list;
	}
	getSpecs(carAttr) {
		let list = [];
		list.push(`<li>Doors:${carAttr.doors}</li>`);
		list.push(`<li>Seats: ${carAttr.seatsHeatCool[0]}</li>`);
		let mech = carAttr.mechanics;
		list.push(`<li>${mech.drivetrain}</li><li>${mech.transmission}</li>`);
		if (mech.gas) {
			list.push(`<li>Gas: ${mech.gas}</li>`);
			if (mech.mpgHwyCtyAvg) {
				list.push(`<li>Miles Per Gallon:</li>`);
				if (mech.mpgHwyCtyAvg[0]) {
					list.push(`<li>Highway: ${mech.mpgHwyCtyAvg[0]}</li>`);
				}
				if (mech.mpgHwyCtyAvg[1]) {
					list.push(`<li>City: ${mech.mpgHwyCtyAvg[1]}</li>`);
				}
				list.push(`<li>Average: ${mech.mpgHwyCtyAvg[2]}</li>`);
			}
			if (mech.mpgeHwyCtyAvg) {
				list.push(`<li><em>Mile Per Gallon Equivalent:</em></li>`);
				if (mech.mpgHwyCtyAvg[0]) {
					list.push(`<li>Highway: ${mech.mpgeHwyCtyAvg[0]}</li>`);
				}
				if (mech.mpgHwyCtyAvg[1]) {
					list.push(`<li>City: ${mech.mpgeHwyCtyAvg[1]}</li>`);
				}
				list.push(`<li>Average: ${mech.mpgeHwyCtyAvg[2]}</li>`);
			}
		}
		if (mech.zeroToSixty) {
			list.push(`<li>0-60: ${mech.zeroToSixty}</li>`);
		}
		for (const item of carAttr.features) {
			list.push(`<li>${item}</li>`);
		}
		if (carAttr.seatsHeatCool[1]) {
			list.push(`<li>Heated Seats</li>`);
			if (carAttr.seatsHeatCool[2]) {
				list.push(`<li>A/C Seats</li>`);
			}
		}
		if (carAttr.leather) {
			list.push(`<li>Leather Interior</li>`);
		}
		list.push(`</ul>`);
		return list;
	}
	getCarIcons(carDetails, iconsList) {
		//return an array of matching icons and details for the icon - key/value pair
		let carIcons = [];
		let carMech = carDetails.mechanics;
		carIcons.push([`${carDetails.doors}`, `${iconsList.doors}`, "Doors"]);
		carIcons.push([
			`${carDetails.seatsHeatCool[0]}`,
			`${iconsList.seats}`,
			"Seats",
		]);
		carIcons.push([
			`${carMech.drivetrain}`,
			`${iconsList.drivetrain}`,
			"Drivetrain",
		]);
		if (carMech.transmission.includes("Auto")) {
			carIcons.push([
				`Auto`,
				`${iconsList.transmission}`,
				`${carMech.transmission}`,
			]);
		} else if (carMech.transmission.includes("Manual")) {
			carIcons.push([
				`Man`,
				`${iconsList.transmission}`,
				`${carMech.transmission}`,
			]);
		}
		if (carMech.zeroToSixty) {
			carIcons.push([
				`${carMech.zeroToSixty}`,
				`${iconsList.zeroToSixty}`,
				"0-60",
			]);
		}
		if (carDetails.seatsHeatCool[1]) {
			carIcons.push([`Heat`, `${iconsList.heatedSeats}`, "Heated Seats"]);
		}
		if (carDetails.keyLess) {
			carIcons.push([``, `${iconsList.keyLess}`, "KeyLess"]);
		}
		if (carMech.gas) {
			carIcons.push([`${carMech.gas}`, `${iconsList.gas}`, "Gas"]);
		} else if (!carMech.gas) {
			carIcons.push([`Electric`, `${iconsList.electric}`, "Electric"]);
		}
		return carIcons;
	}
}
