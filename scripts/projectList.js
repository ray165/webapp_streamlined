db.collection("projects").orderBy("dueDate", "asc").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots

        var container = document.createElement("div");
        var row = document.createElement("div");
        var projectName = document.createElement("div");
        // var dtlContainer = document.createElement("div");
        // var editContainer = document.createElement("div");
        var progContainer = document.createElement("div"); 
        var progBar = document.createElement("div");
        container.className = "container";
        row.className = "row";
        projectName.className = "col-sm-8";
        projectName.innerHTML = doc.data().pName;

        // dtlContainer.className = "";
        var dtlbtn = document.createElement("a");
        dtlbtn.setAttribute("type", "button");
        dtlbtn.className = "btn btn-primary btn-sm";
        var link = "projectDetails.html?uid=" + doc.id;
        dtlbtn.setAttribute("href", link);

        dtlbtn.innerHTML = "Project Details";

        // editContainer.className = "";
        var editbtn = document.createElement("a");
        editbtn.setAttribute("type", "button");
        editbtn.className = "btn btn-success btn-sm";
        var link = "projectEdit.html?uid=" + doc.id;
        editbtn.setAttribute("href", link);

        editbtn.innerHTML = "Edit Project";

        progContainer.className = "progress";
        progBar.className = "progress-bar bg-info";
        progBar.setAttribute("role", "progressbar");
        progBar.setAttribute("style", "width: 50%");
        progBar.setAttribute("aria-valuenow", "50%");
        progBar.setAttribute("aria-valuemin", 0);
        progBar.setAttribute("aria-valuemax","100");

        // Instead of progress %, set it as the number of tasks completed count(n)
        // progBar.innerHTML("NOT IMPLEMENTED YET")

        // grid to contain the buttons! "col-sm-4"
        var gridContainer = document.createElement('div');
        gridContainer.className = 'col-sm-5';
        gridContainer.append(dtlbtn, editbtn);


        // var projectName = document.createElement("div")
        progContainer.append(progBar)
        container.append(row, progContainer)
        row.append(projectName, gridContainer)
        document.getElementById('root').append(container);

    });
});

