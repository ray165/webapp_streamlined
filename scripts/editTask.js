const url = new URLSearchParams(window.location.search);
const projID = url.get("uid");
console.log(projID);
var docRef = db.collection("projects").doc(projID);


// Change the project title.
// I put this in editTask.js as its the first to execute.
docRef.get().then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data());
        document.getElementById("projectName").innerHTML = doc.data().pName;
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
  }).catch((error) => {
    console.log("Error getting document:", error);
  });


getTaskEdit();



function getTaskEdit() {
    document.getElementById("save").addEventListener('click', function () {
        var tName = document.getElementById("tName").value
        var tDescription = document.getElementById("tDescription").value

        var data = {
            "tName": tName,
            "description": tDescription,
        }

        console.log(tName, tDescription,)
        writeTaskEdit(data);
        console.log("data sent to database");

        var task = document.createElement('li');
        task.className = 'list-group-item';
        console.log("createy")



    })
}

function writeTaskEdit(data) {
    // Create a subcollection under the specified project 
    var tasks = docRef.collection("tasks")
    console.log(tasks);
    tasks.add(data);


    db.collection("tasks").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data(), "testing:", doc.data().tName);
        });
    });
}