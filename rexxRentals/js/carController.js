import CarMaker from "./carModel.js";
import CarShow from "./carView.js";
import { setNewCarWindow, setListeners, getElem, getElemAll } from "./util.js";

export default class CarFactory {
	constructor(type1, type2, type3) {
		this.carTypeList = [type1, type2, type3];
		this.carMaker = new CarMaker();
		this.carShow = new CarShow();
	}
	showCarNav(factory) {
		try {
			this.carShow.renderCarNav(factory);
			//closure start const - sets things up
			const carLot = this.carMaker.getLinkData("data-car");
			factory.forEach((car) => {
				setListeners(carLot(car), "click", setNewCarWindow);
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
			let gallery = getElemAll(".car__gallery img");
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
				getElem("#featPic img"),
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
			this.carShow.renderCarIcons(
				this.carMaker.getCarIcons(carDetails.specs, iconsList)
			);
		} catch (err) {
			console.log(`CarFactory failed to showCarIcons: ${err.message}`);
		}
	}
	showCarPage(carDetails) {
		try {
			//type, name, year, imgPath, rentLnk, about, specs, travel, addons?,pkgIncl?, uniqAttrib?
			this.carShow.renderCarAttr(
				getElem("#featName"),
				this.carMaker.getName(carDetails)
			);
			this.carShow.renderCarAttr(
				getElem("#carName"),
				this.carMaker.getName(carDetails)
			);
			this.carShow.renderCarAttr(
				getElem("#about"),
				this.carMaker.getAbout(carDetails)
			);
			if (carDetails.uniqAttr) {
				this.carShow.renderCarDetails(
					getElem("#uniqAttr ul"),
					this.carMaker.getAttr(carDetails.uniqAttr)
				);
			}
			if (carDetails.addOns) {
				this.carShow.renderCarDetails(
					getElem("#addOns ul"),
					this.carMaker.getAttr(carDetails.addOns)
				);
			}
			if (carDetails.pkgIncl) {
				this.carShow.renderCarDetails(
					getElem("#pkgIncl ul"),
					this.carMaker.getAttr(carDetails.pkgIncl)
				);
			}
			this.carShow.renderCarDetails(
				getElem("#specs ul"),
				this.carMaker.getSpecs(carDetails.specs)
			);
			this.carShow.renderTravel(getElem("#travel ul"), carDetails.travel);
		} catch (err) {
			console.log(`CarFactory failed to showCarPage: ${err.message}`);
		}
	}
	chkContent(carDetails) {
		if (!(carDetails.uniqAttr && carDetails.pkgIncl)) {
			getElem("#enhancements").remove();
			getElem(".tabs__links:nth-of-type(1)").remove();
			getElem("#specs").style.display = "grid";
			getElem("#specsData").classList.add("active");
		}
	}
}
