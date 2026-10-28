var beginGetal = 0;
var getalElement = document.querySelector("#getal");
function teller() {
    beginGetal++;
    getalElement.textContent = beginGetal;
}

function resetKnop() {
    beginGetal = 0;
    getalElement.textContent = beginGetal;
}