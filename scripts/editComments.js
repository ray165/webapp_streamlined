const url = new URLSearchParams(window.location.search);
const projID = url.get("uid");
console.log(projID);
var docRef = db.collection("projects").doc(projID);
var counter = 0;

// Comments hasn't been created yet!
docRef.collection("comments").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // Type of doc.data() not defined yet! 
        // doc.data().name 
        // doc.data().time
        // doc.data().comment

        counter++; // increment to differentiate the accordions.

        // the root node is 'accordion' div class which will be on the html. We'll append to that.
        var item = document.createElement('div');
        item.className = 'accordion-item';
        var h2 = document.createElement('h2');
        h2.className = 'accordion-header';
        h2.id = "heading" + counter; // add the counter in to differentiate the accordions.
        var button = document.createElement('button');
        button.className = 'accordion-button';
        button.setAttribute("type", "button");
        button.setAttribute("data-bs-toggle", "collapse");
        button.setAttribute("data-bs-target", "#collapse" + counter);
        button.setAttribute("aria-expanded", "true");
        button.setAttribute("aria-controls", "collapse" + counter);
        // need the data.
        button.innerHTML = doc.data().time + " " + doc.data().name;  // DOESNT EXIST YET

        var collapse = document.createElement('div');
        collapse.id = "collapse" + counter;
        collapse.className = "accordion-collapse collapse show";
        collapse.setAttribute("aria-labelledby", "heading" + counter);
        collapse.setAttribute("data-bs-parent", "#accordionExample");

        var body = document.createElement("div");
        body.className = "accordion-body";
        div.innerHTML = doc.data().comment;  // text doesnt exist yet!!


        // My appends
        h2.append(button);
        collapse.append(body);
        item.append(h2, collapse);
    });
});


