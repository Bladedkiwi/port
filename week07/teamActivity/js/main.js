import HikeController from "./hikeController.js";
import CommentController from "./commentController.js";

try {
	const hikes = new HikeController("hikes");
	hikes.showLightHikeList();
	hikes.addHikeListener(hikes);

	const comments = new CommentController('.comments__box');
	//if main page view == allHikeShown
	comments.showAllComments();
	//event listener on button
	//let singleComment = comments.appendComment;
	//let boundSingleComment = singleComment.bind(comments);
	//document.querySelector('.comments__input button').addEventListener('click', boundSingleComment);
	document.querySelector('.comments__input button').addEventListener('click', comments.appendComment.bind(comments));
	document.querySelector('.backButton').addEventListener('click', hikes.showLightHikeList.bind(hikes));

	

} catch (err) {
	alert(err.message + " >>main.js");
}
