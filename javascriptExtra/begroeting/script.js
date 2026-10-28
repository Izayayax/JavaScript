var getText = document.querySelector("#textType");
var getBegroeting = document.querySelector("#begroeting");

function verstuur(){
    console.log(getText.value);
    if (getText.value === "") {
        console.log("Je hebt niks ingevuld");
    }else {
        getBegroeting.textContent = "Hallo, " + getText.value;

    }
}