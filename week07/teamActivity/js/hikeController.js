import HikeModel from "./hikeModel.js";
import HikesView from "./hikesView.js";

export default class HikeController {
	constructor(parentId) {
		//parentId is ul from team.html
		this.parentElement = document.getElementById(parentId);
		this.hikeModel = new HikeModel();
		this.hikesView = new HikesView(parentId);
	}
	showLightHikeList() {
		try {
			if (this.parentElement.querySelector('li')) {
				for (const li of this.parentElement.childNodes) {
					if (li.classList.contains('hide')) {
						toggleHide(li);
					};
				}
				toggleHide(document.querySelector('button'));
			}
			else {
				let listElement = document.createElement("li");
				
				listElement = this.hikesView.renderLightHikeList(
					this.hikeModel.getAllHikes(),
					listElement
				);
				
				this.parentElement.innerHTML = listElement.innerHTML;
			}
		} catch (err) {
			console.log(err.message + ">>hikeController.js line 18");
		}
	}
	showOneHike(e) {
		try {
			//const expandedHike = this.getHikeByName(this.firstChild.innerHTML);
			//const hike = this.getHikeByName(hikeName.path);
			//console.log(hikeName.path.li);
			//const currList = hikeName.path;
			//currList.filter((i) => {
			//	if (hikeName[i] == ) {
			//		console.log('yes');
			//	}
			//});
			//this.hikesView.renderExpandedHike(
			//	this.hikeModel.getHikeByName(hikeName),
			//	this.parentElement
			//);

			//added during wk7
			//console.log(e);
			/*
			if (anything but hikename)
				e.srcElement.parentElement.parentElement gives li item
			if (hikename)
				e.srcElement.parentElement gives li item
			
			*/
			const parent = e.srcElement.parentElement;
			//show back Button
			document.querySelector('.backButton').classList.toggle('hide');
			//if description/directions are undefined
			if (parent.nodeName != "LI") {
				//grabbing li element
				let name = parent.parentElement.firstChild.textContent;
				//expanding the clicked hike info
				this.hikesView.renderExpandedHike(this.hikeModel.getHikeByName(name), parent.parentElement);			
			}
			else {
				let name = parent.firstChild.textContent;
				this.hikesView.renderExpandedHike(this.hikeModel.getHikeByName(name), parent);
			}
			
			
		} catch (err) {
			alert(err.message + " " + err.log);
		}
	}
	addHikeListener(list) {
		//iterate over list items in parent ul, and add event listener to each one with event "click" to expand the details of that one hike.
		//making ul into an array to be able to iterate over it - not working yet
		const arrParent = Array.from(this.parentElement.querySelectorAll('li'));
		
		//const that = this.showOneHike.bind(this);

		//for (const hike of arrParent) {
		//	console.log(hike);
		//	hike.addEventListener('click', this.parentElement.showOneHike);
		//}
		//arrParent.forEach(hike => that.hike.addEventListener('click', this.showOneHike));
		//after solution:
		//arrParent.forEach(hike => this.hike.addEventListener('click', e => { that.showOneHike(e.currentTarget.dataset.name) }));

		arrParent.forEach((element) => element.addEventListener('click', list.showOneHike.bind(list),{once: true}));

	}

	//
	// idea - that we ran out of time on
	//showDifficultyHikes(diff) {
	//this.hikeModel.getHikeByDifficulty(diff);
	//this.hikesView.renderHikeList(this.hikeModel, this.parentElement);
	//}
}
