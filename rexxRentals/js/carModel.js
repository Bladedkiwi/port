import { fetchTheBall } from "./util.js";

export default class CarMaker {
	constructor() {}
	getNavLinkDataByType(cars, typeList) {
		let carList = [];
		let type1List = [];
		let type2List = [];
		let type3List = [];
		cars.forEach((car) => {
			if (car.type === typeList[0]) {
				type1List.push(car);
			} else if (car.type === typeList[1]) {
				type2List.push(car);
			} else if (car.type === typeList[2]) {
				type3List.push(car);
			} else {
				console.log("New Type of Car Detected");
			}
		});
		carList.push(type1List, type2List, type3List);
		return carList;
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
	getCarIcons(carDetails, iconsList) {
		//return an array of matching icons and details for the icon - key/value pair
		let carIcons = [];
		let carMech = carDetails.mechanics;
		carIcons.push([`${carDetails.doors}`,`${iconsList.doors}`,"Doors"]);
		carIcons.push([`${carDetails.seatsHeatCool[0]}`,`${iconsList.seats}`,"Seats"]);
		carIcons.push([`${carMech.drivetrain}`,`${iconsList.drivetrain}`,"Drivetrain"]);
		carIcons.push([`${carMech.transmission}`,`${iconsList.transmission}`,"Transmission"]);
		if (carMech.zeroToSixty) {
			carIcons.push([`${carMech.zeroToSixty}`,`${iconsList.zeroToSixty}`,"0-60"]);
		} else if (carDetails.seatsHeatCool[1]) {
			carIcons.push([`Heat`,`${iconsList.heatedSeats}`,"Heated Seats"]);
		} else if (carDetails.keyLess) {
			carIcons.push([``,`${iconsList.keyLess}`,"KeyLess"]);
		} else if (carMech.gas) {
			carIcons.push([`${carMech.gas}`,`${iconsList.gas}`,"Gas"]);
		} else if (!(carMech.gas)) {
			carIcons.push([`Electric`,`${iconsList.electric}`,"Electric"]);
		} 
		return carIcons;
	}
}
