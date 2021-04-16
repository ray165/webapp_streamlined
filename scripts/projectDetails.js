// Here lies client side JS 
var docRef = db.collection("projects").doc(projID);

var link = "projectEdit.html?" + new URLSearchParams(window.location.search);
document.getElementById("pDetailsEdit").setAttribute("href", link);

getNote();


// Generate a block of project descriptions. 
// Console log to see if it works, if it works, we run autoFillValues in the form
docRef.get().then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data());
        autoFillValues(doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

// Autofill the html values with what's in the database! 
// Query based on the project id.
function autoFillValues(data){
    document.getElementById("pDescription").value = data.description
    document.getElementById("pDueDate").value = data.dueDate
    document.getElementById("pPriority").value = data.priority
    document.getElementById("pProgress").value = data.progress
};




// Grab all values when 'save' is clicked!
function getNote() {
    document.getElementById("save").addEventListener('click', function () {
        var newNote = document.getElementById("newNote").value

        console.log(newNote)
        writeNote(newNote);
        alert("Success!");

    })
}

// Now write this data into our db. 
function writeNote(newNote) {
    var notes = db.collection("projects").doc(uuidPlaceholder).collection("notesList")
    console.log(notes);
    notes.add({
        note: newNote
    });
}