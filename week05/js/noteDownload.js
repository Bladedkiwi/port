//Downloads notes to computer by either showing in notepad, saving to computer, or on another place the user decides.
//note-taker.js
function downloadNotes() {
    /*
    download works! 

    My Process: 
    -Used JSON.stringify() on allNotes, produced undesirable "/\" in various places, and separated each note with "" because it was handling the array properly, its purpose. I'm not positive why after = signs it places in / for you. It might have been dealing with "word" that was in the array and not the equal sign at all. 
    -Wondered whether I should go about changing that text, or figure out how to use the workaround I made from the original assignment
    -Changed it to use the copy area <p> text (textContent) for the URL which naturally worked
    -Wondered why I even needed a <p> tag's textContent to pass to before passing to the URL and changed it to a simple variable that has a string type. Which, also cleaned the code up and made it more direct.
    
    Used link below to understand what the actual problem was originally: the link href was invalid and needed a single comma
    https://ourcodeworld.com/articles/read/189/how-to-create-a-file-and-generate-a-download-with-javascript-in-the-browser-without-a-server
    */
    const fileName = document.getElementById('file_name').value;
    //const copyNotes = document.getElementById('copy_area');
    let noteText = "";
    for (note of allNotes) {
        noteText += note;
    }
    const a = document.createElement('a');
    a.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(noteText));
    a.setAttribute('download', fileName);
    a.style.display = 'none';
    document.body.appendChild(a);
    //console.log(a.href);
    a.click();
    document.body.removeChild(a);
}