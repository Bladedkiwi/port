//Note template that returns said note
//note-taker.js

function noteModal() {
	const currentDateAndTime = new Date();
	const aNoteDescription = document.getElementById("description_input").value;
	const aNoteText = document.getElementById("note_editor").value;
	const aCompleteNote = `<hr><article class="notebook__note">${currentDateAndTime.toLocaleString()}--<h2>${aNoteDescription}</h2><div class="note__content">${aNoteText}</div></article>`;
	return aCompleteNote;
}
