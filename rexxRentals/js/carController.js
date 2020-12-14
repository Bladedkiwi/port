import CarMaker from "./carModel.js";
import CarShow from "./carView.js";
import { setNewCarWindow, setListeners } from "./util.js";

export default class CarFactory {
	constructor(type1, type2, type3) {
		this.carTypeList = [type1, type2, type3];
		this.carMaker = new CarMaker();
		this.carShow = new CarShow();
		//this.factory = list.rentals;
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
	showCarImg(pageRef, imgRefList, factory) {
		pageRef = parseInt(pageRef.match(/[1-9]/));
		const carDetails = factory[pageRef - 1];
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
	}
	changeImgView(event) {
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
		//const featPic = document.querySelector('#featPic');
		//featPic.srcSet = srcSet;
		//featPic.src =
	}
	// showCarPage(pageRef) {
	//     try {
	//         pageRef = parseInt(pageRef.match(/[1-9]/));
	//         const carDetails = this.factory[(pageRef - 1)];
	//         console.log(carDetails);
	//         //type, name, year, imgPath, rentLnk, about, specs, travel, addons?,pkgIncl?, uniqAttrib?
	//         //show name
	//         this.carShow.renderCarName(this.carMaker.getElementData('name'), carDetails);

	//     }catch (err) {
	// 		console.log(`CarFactory failed to showCarPage: ${err.message}`);
	// 	}

	// }
}
