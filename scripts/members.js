db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots

        var col = document.createElement("div");
        var card = document.createElement("div");
        var cardBody = document.createElement("div");
        var pfp = document.createElement("img");
        var title = document.createElement("h5");
        var desc = document.createElement("p");
        
        col.className = "col";
        card.className = "card";
        cardBody.className = "cardBody";
        pfp.className = "card-img-top";
        pfp.setAttribute("src", "images/defaultpfp.png");
        pfp.setAttribute("alt", "member img");
        title.className = "card-title";
        desc.className = "card-text";

        title.innerHTML = doc.data().name;
        desc.innerHTML = doc.data().email;
        
        cardBody.append(title, desc);
        card.append(pfp, cardBody);
        col.append(card);
        document.getElementById("root").append(col);
    });
});