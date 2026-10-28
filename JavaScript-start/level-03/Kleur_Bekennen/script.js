function kiesKleur() {
    var userKleur = document.querySelector("#kleur");
    var gekozenKleur = userKleur.value;
    var pagina = document.querySelector("body");
    pagina.style.backgroundColor = gekozenKleur;
}