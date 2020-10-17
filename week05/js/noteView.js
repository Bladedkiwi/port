//Note displayer that displays current localStorage notes.
//note-taker.js

function noteView() {
	//function to display the notes to the user
	if (allNotes != null) {
		const noteDisplayer = document.getElementById("all_notes_display");
		noteDisplayer.innerHTML = null;
		for (note of allNotes) {
			noteDisplayer.innerHTML += note;
		}
	}
}
