import { countNum, getElem, getElemAll } from "./util.js";
export default class CarShow {
	constructor() {}
	//closure combo function to easy grab/assign desired querySelectors
	renderCarNav(cars) {
		let num = countNum(0);
		cars.forEach((car) => {
			let ul = getElem(`#${car.type}`);
			ul.innerHTML += `
            <li class="list__items">
                <h2>${car.name}</h2>
                    <img src="./img/${
											car.imgPath
										}/mini/front-left-side.webp" alt="${car.name}">
                <div>
                    <button data-car="${num()}">Info</button>
                    <a href="${car.rentLnk}" title="Rent on Turo">Rent</a>
                </div>
             </li>`;
		});
	}
	renderTravel(ele, carAttr) {
		ele.innerHTML += `
            <li><em>Cost:</em> ${carAttr.costDay}/day</li>`;
		ele.innerHTML += `<li><em>Trips:</em> ${carAttr.trips}</li>`;
		if (carAttr.longTerm) {
			ele.innerHTML += `<li>Available for Long Term</li>`;
		}
		if (carAttr.distance) {
			ele.innerHTML += `
            <li><em>Distance</em>
                <ul>
                    <li>Day: ${carAttr.distance[0]}</li>
                    <li>Week: ${carAttr.distance[1]}</li>
                    <li>Month: ${carAttr.distance[2]}</li>
                </ul>
            </li>`;
		} else {
			ele.innerHTML += `
            <li><em>Distance Included</em>
                <ul>
                    <li>${carAttr.disIncl[0]}</li>
                    <li>${carAttr.disIncl[1]}</li>
                </ul>
            </li>`;
		}
		ele.innerHTML += `<li><em>Free Delivery Locations:</em> `;
		for (const location of carAttr.freeDropLoc) {
			ele.innerHTML += `<li>${location}</li>`;
		}
		if (carAttr.paidDropLoc) {
			ele.innerHTML += `<li><em>Paid Delivery Locations:</em> `;
			for (const loc of carAttr.paidDropLoc) {
				ele.innerHTML += `<li>${loc}</li>`;
			}
		}
		if (carAttr.req.tunnelWash) {
			ele.innerHTML += `<li>Tunnel Washing is allowed</li>`;
		} else {
			ele.innerHTML += `<li><em>No Tunnel Washing, please</em></li>`;
		}
		if (carAttr.req.rentAgeReq) {
			ele.innerHTML += `<li>Must be <em>${carAttr.req.rentAgeReq}</em> to rent.</li>`;
		}
	}
	renderCarAttr(ele, attr) {
		ele.innerHTML = attr;
	}
	renderCarDetails(ele, attrList) {
		for (const li of attrList) {
			ele.innerHTML += li;
		}
	}
	renderFeatPic(img, imgSet, imgSrc, imgAlt) {
		img.srcset = imgSet;
		img.src = imgSrc;
		img.alt = imgAlt;
	}
	renderCarIcons(carIcons) {
		let ul = getElem(".figcapt__icon-reel");
		carIcons.forEach((icon) => {
			ul.innerHTML += `<li><img src="${icon[1]}" alt="${icon[2]}">${icon[0]}</li>`;
		});
	}
	/*
    Checks img path, and extracts file portion. 
    Then, sets images respectively.
     */
	renderCarImgs(miniList, medList, largeList) {
		let ul = getElem(".car__gallery");
		let mainPic = getElem("#featPic");
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
//This was so cool, the counting back and forth was entertaining. However, it called the cars out of order which was by design, but ended up causing problems in calling the cars from the designation they had in relation to the factory list. So, it didn't get to stay, but it's simpler now which is better.
// getNavLi(ul, cars, count) {
//     let num = countNum(count);
//     cars.forEach((car) => {
//         //fyi: car.imgPath isn't a full path
//         ul.innerHTML += `
//         <li class="list__items">
//             <h2>${car.name}</h2>
//                 <img src="./img/${car.imgPath}/mini/front-left-side.webp" alt="${car.name}">
//             <div>
//                 <button data-car="${num()}">Info</button>
//                 <a href="${car.rentLnk}" title="Rent on Turo">Rent</a>
//             </div>
//          </li>`;
//     });

//     return `${num()}`;
// }
// renderCarNav(carsByType, typeList) {
//     let count = 0;
//     carsByType.forEach((carType) => {
//         let ul = getElem(`#${carType[0].type}`);
//         count = this.getNavLi(ul, carType, count);
//     });
// }
