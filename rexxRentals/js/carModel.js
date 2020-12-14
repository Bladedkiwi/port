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
		let carImgList = imgRefList.filter((img) => {
			return img.match(`${carDetails.imgPath}`);
		});
		let carSrcSetList = carImgList.filter((img) => {
			if (!img.match("/mini/")) {
				return img;
			}
		});
		let carMiniList = carImgList.filter((img) => {
			return img.match("/mini/");
		});
	}
}
