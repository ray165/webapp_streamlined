// Here lies client side JS 
// THIS IS FOR FIRST CREATION.
getProjectEdit();

// Grab all values when 'save' is clicked!
function getProjectEdit() {
    document.getElementById("save").addEventListener('click', function () {
        var pName = document.getElementById("pName").value
        var pDescription = document.getElementById("pDescription").value
        var pDueDate = document.getElementById("pDueDate").value
        var pPriority = document.getElementById("pPriority").value
        var pProgress = document.getElementById("pProgress").value

        var data = {
            "dueDate": pDueDate,
            "pName": pName,
            "description": pDescription,
            "priority": pPriority,
            "progress": pProgress
        }

        console.log(pName, pDescription, pDueDate, pPriority, pProgress)
        writeProjectEdit(data);
        console.log("data sent to db!");

    })
}

// Now write this data into our db. 
function writeProjectEdit(data) {
    var projects = db.collection("projects")
    console.log(projects);
    projects.add(data);



    db.collection("projects").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data(), "testing:", doc.data().pName);
        });
    });

}


// read data 


// async function getProjectEdit(){

// }