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

    })
}

function writeTaskEdit(data) {
    var tasks = db.collection("tasks")
    console.log(tasks);
    tasks.add(data);


    db.collection("tasks").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data(), "testing:", doc.data().tName);
        });
    });
}