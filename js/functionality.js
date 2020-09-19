//adding functionality - might change later
function backwards() {
	//for ease of going back a page inside the page
	window.history.back();
}
function toggleNoteArea() {
	document.getElementsByClassName("take_notes")[0].classList.toggle("show");
    if (document.getElementsByClassName("take_notes")[0].classList.contains("show")) {
        document.getElementsByClassName("take_notes")[0].setAttribute('display', 'block');
    }
    else {
        document.getElementsByClassName("take_notes")[0].setAttribute('display', 'none');
    }
}
