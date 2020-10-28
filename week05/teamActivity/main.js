import HikeController from "./hikeController.js";

try {
	const hikes = new HikeController("hikes");
	hikes.showLightHikeList();
	//above works/tested - below is in progress 
	hikes.addHikeListener(hikes);
} catch (err) {
	alert(err.message + " >>main.js");
}
