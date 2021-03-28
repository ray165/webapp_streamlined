// Here lies client side JS 
getProjectEdit();

// Grab all values when 'save' is clicked!
function getProjectEdit() {
    document.getElementById("save").addEventListener('click', function() {
        var pName = document.getElementById("pName").value 
        var pDescription = document.getElementById("pDescription").value
        var pDueDate = document.getElementById("pDueDate").value
        var pPriority = document.getElementById("pPriority").value
        var pProgress = document.getElementById("pProgress").value

        console.log(pName, pDescription, pDueDate, pPriority, pProgress)     
        writeProjectEdit(pName, pDescription, pDueDate, pPriority, pProgress);
        alert("it worked!");
        
    })
}

// Now write this data into our db. 
function writeProjectEdit(pName, pDescription, pDueDate, pPriority, pProgress){
    var projects = db.collection("projects")
    console.log(projects);
    projects.add({
        dueDate: pDueDate,
        name: pName, 
        description: pDescription,
        priority: pPriority,
        progress: pProgress
    });
}


// async function getProjectEdit(){

// }