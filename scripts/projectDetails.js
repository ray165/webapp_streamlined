// Here lies client side JS 
getNote();

// Grab all values when 'save' is clicked!
function getNote() {
    document.getElementById("save").addEventListener('click', function() {
        var newNote = document.getElementById("newNote").value

        console.log(newNote)     
        writeNote(newNote);
        alert("Success!");
        
    })
}

// Now write this data into our db. 
function writeNote(newNote){
    var notes = db.collection("projects").doc(uuidPlaceholder).collection("notesList")
    console.log(notes);
    notes.add({
        note: newNote
    });
}