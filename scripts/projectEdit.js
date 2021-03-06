// Here lies client side JS 
getProjectEdit();
const url = new URLSearchParams(window.location.search);
const projID = url.get("uid");
console.log(projID);
var docRef = db.collection("projects").doc(projID);

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


// autoFillValues();


// Autofill the html values with what's in the database! 
// Query based on the project id.
function autoFillValues(data){
    document.getElementById("pName").value = data.pName
    document.getElementById("pDescription").value = data.description
    document.getElementById("pDueDate").value = data.dueDate
    document.getElementById("pPriority").value = data.priority
    document.getElementById("pProgress").value = data.progress
};


// Grab all values when 'save' is clicked!
function getProjectEdit() {
    document.getElementById("save").addEventListener('click', function() {
        var pName = document.getElementById("pName").value 
        var pDescription = document.getElementById("pDescription").value
        var pDueDate = document.getElementById("pDueDate").value
        var pPriority = document.getElementById("pPriority").value
        var pProgress = document.getElementById("pProgress").value

        var data = {
            "dueDate": pDueDate, 
            "pName":  pName,
            "description": pDescription,
            "priority": pPriority,
            "progress": pProgress}
     
        writeProjectEdit(data);
        
    })
}

// Now write this data into our db. 
function writeProjectEdit(data){
    docRef.update(data);

    db.collection("projects").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            window.location.href = "projects.html";
        });
    });
}

