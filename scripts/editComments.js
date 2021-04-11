// These constants shared with all other js files opened by the html.
// url and projID defined in taskEdit.js

// const url = new URLSearchParams(window.location.search);
// const projID = url.get("uid");

// const url = new URLSearchParams(window.location.search);
// const projID = url.get("uid");

var docRef = db.collection("projects").doc(projID);
var counter = 0;





setCommentsDB();

function setCommentsDB() {
  document
    .getElementById("saveComments")
    .addEventListener("click", function () {
      var cName = document.getElementById("cName").value;
      var cDescription = document.getElementById("cDescription").value;
      // var cTimeStmap =

      var data = {
        cName: cName,
        cDescription: cDescription,
        cTimeStamp: firebase.firestore.Timestamp.fromDate(new Date()),
      };

      console.log(cName, cDescription);
      writeCommentsEdit(data);
      console.log("data sent to database");

      // Refresh every time u click save again.
      document.getElementById("cName").innerHTML = "";
      document.getElementById("cDescription").innerHTML = "";

      //Refresh the page.
      // location.reload();
    });
}

function writeCommentsEdit(data) {
  // Create a subcollection under the specified project
  var comments = docRef.collection("comments");
  // console.log(tasks);
  comments.add(data);

  // test by pulling from db.
  db.collection("comments")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data(), "testing:", doc.data().cName);
      });
    });
}


docRef
  .collection("comments")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // Type of doc.data() not defined yet!
      // doc.data().name
      // doc.data().time
      // doc.data().comment

      counter++; // increment to differentiate the accordions.

      // the root node is 'accordion' div class which will be on the html. We'll append to that.
      var item = document.createElement("div");
      item.className = "accordion-item";
      var h2 = document.createElement("h2");
      h2.className = "accordion-header";
      h2.id = "heading" + counter; // add the counter in to differentiate the accordions.
      var button = document.createElement("button");
      button.className = "accordion-button";
      button.setAttribute("type", "button");
      button.setAttribute("data-bs-toggle", "collapse");
      button.setAttribute("data-bs-target", "#collapse" + counter);
      button.setAttribute("aria-expanded", "true");
      button.setAttribute("aria-controls", "collapse" + counter);
      // need the data.
      //   var myDate = new Date(doc.data().cTimeStamp.toDate());
      var myDate = doc.data().cTimeStamp.toDate()
      let date = myDate.getDate();
      let month = myDate.getMonth(); // jan is 0, not 1.
      let year = myDate.getFullYear();
      var dateString = date + "/" + (month + 1) + "/" + year;
      button.innerHTML =
      doc.data().cTimeStamp.toDate() + "    " + "<strong>" + doc.data().cName + "</strong>"; // DOESNT EXIST YET

      var collapse = document.createElement("div");
      collapse.id = "collapse" + counter;
      collapse.className = "accordion-collapse collapse show";
      collapse.setAttribute("aria-labelledby", "heading" + counter);
      collapse.setAttribute("data-bs-parent", "#accordionExample");

      var body = document.createElement("div");
      body.className = "accordion-body";
      body.innerHTML = doc.data().cDescription; // text doesnt exist yet!!

      // My appends
      h2.append(button);
      collapse.append(body);
      item.append(h2, collapse);
      document.querySelector(".accordion").append(item);
    });
  });
