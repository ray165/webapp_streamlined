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
displayTasks();
getCheckBoxInputs();

function getTaskEdit() {
    document.getElementById("save").addEventListener('click', function () {
        var tName = document.getElementById("tName").value
        var tDescription = document.getElementById("tDescription").value

        var data = {
            "tName": tName,
            "description": tDescription,
            "status": false // for check box!
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


// Generate tasks into html
// var counter = 0; // no longer needed
function displayTasks() {
    docRef
    .collection("tasks")
    .get()
    .then((querySnapshot) => {

      querySnapshot.forEach((doc) => {
        console.log(doc.id + "this should be the task id");
        var task = document.createElement("li");
        task.className = "list-group-item" 
        task.innerHTML = "<strong>" + doc.data().tName + "</strong>";
        var checkContainer = document.createElement("div");
        checkContainer.className = "form-check float-end";
        var input = document.createElement("input");
        input.className = "form-check-input";
        input.setAttribute("type", "checkbox");
        input.value = "";
        input.id = doc.id;
        input.checked = doc.data().status; // Display whether the checkbox should be done or not
        var label =  document.createElement("label");
        label.className = "form-check-label";
        label.setAttribute("for", doc.id);

        var description = document.createElement("p");
        description.innerHTML = doc.data().description;

        // Appends 
        checkContainer.append(input, label);
        task.append(checkContainer, description);
        document.querySelector("#rootTasks").append(task); // Append each task to html
      });
    });
};


// Click to save the task status into firebase. 
function getCheckBoxInputs(){
    document.getElementById("saveCheckBox").addEventListener('click', function(){
        var boxes = document.querySelectorAll(".form-check-input");
        console.log("btn clicked" + boxes)
        Array.from(boxes).forEach(function(box) {
            var dbLocation = docRef.collection("tasks").doc(box.id);
            var data = {
                "status": document.getElementById(box.id).checked
            };
            dbLocation.update(data);
            console.log("checkboxes updated!");
        });
        // Force refresh page
        // setTimeout(function(){
        //     window.location.reload(1);
        //  }, 0); 
    });
}


/* <li class="list-group-item">
          Task One
          <div class="form-check float-end">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
            <label class="form-check-label" for="flexCheckDefault">
            </label>
          </div>
        </li> */