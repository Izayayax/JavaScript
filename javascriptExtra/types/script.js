var dier = "hond";
var nummer = 14
var booo = true
var array = []
var alvin = { naam: "Alvin", leeftijd: 15}



var outputDier = document.querySelector("#dierType")
var outputNummer = document.querySelector("#nummer")
var outputBooo = document.querySelector("#booo")
var outputArray = document.querySelector("#array")
var outputAlvin = document.querySelector("#alvin")




outputDier.textContent = "Dier is een " + typeof dier;
outputNummer.textContent = "14 is een " + typeof nummer;
outputBooo.textContent = "True en False is een " + typeof booo;
outputArray.textContent = "[] is een array " + Array.isArray(array);
outputAlvin.textContent = "Alvin is een " + typeof alvin