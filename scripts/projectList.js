db.collection("projects").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data(), "testing:", doc.data().name);


        var container = document.createElement("div");
        var row = document.createElement("div");
        var projectName = document.createElement("div");
        var btnContainer = document.createElement("div");
        var progContainer = document.createElement("div"); 
        var progBar = document.createElement("div");
<<<<<<< HEAD
        container.className = "container"
        // var row =  document.createElement("div")
        row.className = "row"
        projectName.className = "col-sm-8"
        projectName.innerHTML = doc.data().name

        btnContainer.className = "col-sm-4"
        var btn = document.createElement("a")
        btn.setAttribute("type", "button")
        btn.id = doc.id
        btn.className = "btn btn-primary btn-sm"
        btn.innerHTML = "Edit Project!"
        btn.setAttribute("href", "projectEdit.html")

        progContainer.className = "progress"
        progBar.className = "progress-bar bg-info"
        progBar.setAttribute("role", "progressbar")
        progBar.setAttribute("style", "width: 50%")
        progBar.setAttribute("aria-valuenow", "50%")
        progBar.setAttribute("aria-valuemin", 0)
        progBar.setAttribute("aria-valuemax","100")
=======
        container.className = "container";
        row.className = "row";
        projectName.className = "col-sm-8";
        projectName.innerHTML = doc.data().name;

        btnContainer.className = "col-sm-4";
        var btn = document.createElement("a");
        btn.setAttribute("type", "button");
        btn.className = "btn btn-primary btn-sm";
        var link = "projectEdit.html?uid=" + doc.id;
        btn.setAttribute("href", link);

        btn.innerHTML = "Edit Project!";

        progContainer.className = "progress";
        progBar.className = "progress-bar bg-info";
        progBar.setAttribute("role", "progressbar");
        progBar.setAttribute("style", "width: 50%");
        progBar.setAttribute("aria-valuenow", "50%");
        progBar.setAttribute("aria-valuemin", 0);
        progBar.setAttribute("aria-valuemax","100");
>>>>>>> a24f756d2821402d29559d28a8805e3b73297d3f

        // Instead of progress %, set it as the number of tasks completed count(n)
        // progBar.innerHTML("NOT IMPLEMENTED YET")




        // var projectName = document.createElement("div")
        progContainer.append(progBar)
        container.append(row, progContainer)
        row.append(projectName, btnContainer)
        btnContainer.append(btn);
        document.getElementById('root').append(container);

    });
});


// When you click on the btn, it will send you to projectEdit.html
// And, it will temporarily store the ID of the button (which is the project ID)
// We need this so that we know which project we're editing
function sendClickedID(projID) {
    document.getElementById(projID).addEventListener('click', function() {

        alert("it worked!");
        
    })
}