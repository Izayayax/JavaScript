    var kleuren = ["blue", "green", "orange", "black", "red"];
    var huidigeKleur = 0;
    var pagina = document.querySelector("body");

    function kleurButton() {
        pagina.style.backgroundColor = kleuren[huidigeKleur];
        if (kleuren[huidigeKleur] === "black") {
            pagina.style.color = "white";
        } else {
            pagina.style.color = "black";   
        }
        huidigeKleur++;
        if (huidigeKleur === kleuren.length) {
            huidigeKleur = 0;
        }

    }