import { countNum } from "./util.js";
export default class CarShow {
	constructor() {}
	//closure combo function to easy grab/assign desired querySelectors
	getLinkData() {
		let num = countNum(1);
		return function (item) {
			return (item = document.querySelector(`button[data-car="${num()}"]`));
		};
	}
	getElem(id) {
		return document.querySelector(`${id}`);
	}
	getElemAll(id) {
		return document.querySelectorAll(`${id}`);
	}
	getNavLi(ul, cars, count) {
		let num = countNum(count);
        cars.forEach((car) => {
            //fyi: car.imgPath isn't a full path
            ul.innerHTML += `
            <li class="list__items">
                <h2>${car.name}</h2>
                    <img src="./img/${car.imgPath}/mini/front-left-side.webp" alt="${car.name}">
                <div>
                    <button data-car="${num()}">Info</button>
                    <a href="${car.rentLnk}" title="Rent on Turo">Rent</a>
                </div>
             </li>`;
		});

		return `${num()}`;
    }
	renderCarNav(carsByType, typeList) {
		let count = 1;
		carsByType.forEach((carType) => {
			let ul = this.getElem(`#${carType[0].type}`);
			count = this.getNavLi(ul, carType, count);
		});
	}
	renderCarName(ele, car) {
		ele.innerHTML = `${car.year} ${car.name}`;
	}
	renderCarAttributes(ele, car) {
		ele.innerHTML;
    }
    renderFeatPic(img, imgSet, imgSrc, imgAlt) {
		img.srcset = imgSet;
		img.src = imgSrc;
		img.alt = imgAlt;
    }
    renderCarIcons(carIcons) {
        let ul = this.getElem('.figcapt__icon-reel');
        carIcons.forEach((icon) => {
            ul.innerHTML += `<li><img src="${icon[1]}" alt="${icon[2]}">${icon[0]}</li>`;
        })
    }
	/*
    Checks img path, and extracts file portion. 
    Then, sets images respectively.
     */
	renderCarImgs(miniList, medList, largeList) {
		let ul = this.getElem(".car__gallery");
		let mainPic = this.getElem("#featPic");
		ul.innerHTML = "";
		//regex grabs words inbetween / and .
		const imgAltRegx = /(?![/])(\w+-\w+)+(?=[.])/;
		const noDashRegx = /(?![/])(\w+\w+)+(?=[.])/;
		let imgAlt = miniList.map((img) => {
			let imgChk = img.match(imgAltRegx);
			if (imgChk) {
				return imgChk;
			} else {
				return img.match(noDashRegx);
			}
		});
		imgAlt = imgAlt.map((img) => {
			return img[0];
		});
		for (let i = 0; i < miniList.length; i++) {
			ul.innerHTML += `<img src="./img/${miniList[i]}" alt="${imgAlt[i]}" data-srcSet="./img/${medList[i]} 500w, ./img/${largeList[i]} 1000w">`;
		}
		mainPic.innerHTML = `<img srcset="./img/${medList[0]} 500w, ./img/${largeList[0]} 1000w"
             sizes="(max-width: 500px) 500px, 1000px"
             src="./img/${largeList[0]}"
             alt="${imgAlt[0]}">`;
	}
}
