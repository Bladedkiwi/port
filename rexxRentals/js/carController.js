import CarMaker from "./carModel.js";
import CarShow from "./carView.js";
import { setNewCarWindow, setListeners } from "./util.js";

export default class CarFactory {
	constructor(type1, type2, type3) {
		this.carTypeList = [type1, type2, type3];
		this.carMaker = new CarMaker();
		this.carShow = new CarShow();
	}
	showCarNav(factory) {
		try {
			this.carShow.renderCarNav(
				this.carMaker.getNavLinkDataByType(factory, this.carTypeList),
				this.carTypeList
			);
			//closure start const - sets things up
			const carLot = this.carShow.getLinkData("data-car");
			factory.forEach((car) => {
				setListeners(carLot(car),"click", setNewCarWindow);
			});
		} catch (err) {
			console.log(`CarFactory failed to showCarNav: ${err.message}`);
		}
	}
	showCarImg(carDetails, imgRefList) {
		try {
			let carImgList = imgRefList.filter((img) => {
				return img.match(`${carDetails.imgPath}`);
			});
			this.carShow.renderCarImgs(
				this.carMaker.getCarImgLists("/mini/", carImgList),
				this.carMaker.getCarImgLists("/medium/", carImgList),
				this.carMaker.getCarImgLists("large", carImgList)
			);
			let gallery = this.carShow.getElemAll(".car__gallery img");
			gallery.forEach((img) => {
				img.addEventListener("click", this.changeImgView.bind(this));
			});
		} catch (err) {
			console.log(`CarFactory failed to showCarImg: ${err.message}`);
		}
	}
	changeImgView(event) {
		try {
			const srcSet = event.target.getAttribute("data-srcSet");
			const alt = event.target.alt;
			let imgSrc = srcSet.split(",");
			imgSrc = imgSrc[1].split(" ");
			this.carShow.renderFeatPic(
				this.carShow.getElem("#featPic img"),
				srcSet,
				imgSrc[1],
				alt
			);
		} catch (err) {
			console.log(`CarFactory failed to changeImgView: ${err.message}`);
		}
	}
	showCarIcons(carDetails, iconsList) {
		try {
			console.log(carDetails);
			console.log(iconsList);

			this.carShow.renderCarIcons(this.carMaker.getCarIcons(carDetails.specs, iconsList))
				
			// 	carDetails.specs;
			// let features = carDetails.features
			// let mechanics = carDetails.specs.mechanics;
			
		} catch (err) {
			console.log(`CarFactory failed to showCarIcons: ${err.message}`);
		}
	}
	showCarPage(carDetails) {
	    try {
	        //type, name, year, imgPath, rentLnk, about, specs, travel, addons?,pkgIncl?, uniqAttrib?
	        //show name
			this.carShow.renderCarName(this.carShow.getElem('#carName'), carDetails);

	    } catch (err) {
			console.log(`CarFactory failed to showCarPage: ${err.message}`);
		}

	}
}
