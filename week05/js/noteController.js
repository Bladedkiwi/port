//Controlls notes by saving/displaying, and calls both noteModal() and noteView()
//note-taker.js

let allNotes = JSON.parse(localStorage.getItem("all_notes"));
if (allNotes == null) {
    allNotes = [];
}

function noteController() {
    const recentNote = noteModal();
    allNotes.push(recentNote);
    const allNotesString = JSON.stringify(allNotes);
    //console.log(allNotes);
    localStorage.setItem("all_notes", allNotesString);
    noteView();
    document.getElementById("description_input").value = null;
    document.getElementById("note_editor").value = null;
}