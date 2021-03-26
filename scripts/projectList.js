db.collection("projects").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data(), "testing:", doc.data().pName);


        var container, row, projectName, btnContainer, progContainer, progBar = document.createElement("div")
        container.className = "container"
        // var row =  document.createElement("div")
        row.className = "row"
        projectName.className = "col-sm-8"
        projectName.innerHTML = doc.data().pName

        btnContainer.className = "col-sm-4"
        var btn = document.createElement("a")
        btn.setAttribute("type", "button")
        btn.id = doc.id
        btn.className = "btn btn-primary btn-sm"
        btn.innerHTML = "Edit Project!"

        progContainer.className = "progress"
        progBar.className = "progress-bar bg-info"
        progBar.setAttribute("role", "progressbar")
        progBar.setAttribute("style", "width: 50%")
        progBar.setAttribute("aria-valuenow", "50%")
        progBar.setAttribute("aria-valuemin", 0)
        progBar.setAttribute("aria-valuemax","100")

        // Instead of progress %, set it as the number of tasks completed count(n)
        progBar.innerHTML("NOT IMPLEMENTED YET")



        // var projectName = document.createElement("div")
        progContainer.append(progBar)
        container.append(row, progContainer)
        row.append(projectName, btnContainer)
        btnContainer.append(btn);
        var myRoot = document.getElementById('root').append(container);

    });
});




{/* <div class="container">
<div class="row">
    <div class="col-sm-8">Project 1</div>
    <div class="col-sm-4"><a type="button" class="btn btn-primary btn-sm">Edit Project</a></div>
</div>
<div class="progress">
    <div class="progress-bar bg-info" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0"
        aria-valuemax="100">50%</div>
</div>
</div> */}