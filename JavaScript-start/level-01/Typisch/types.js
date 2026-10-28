let datas = ["Hello", 3, 3.2, "3", true, false, 3.0 + 3, 3 + "3"];

for (let uitkomsten of datas) {
    let types = typeof uitkomsten;

    if (types === "number") {
        if (Number.isInteger(uitkomsten)) {
            console.log("Waarde " + uitkomsten + " heeft als type number int");
        } else {
            console.log("Waarde " + uitkomsten + " heeft als type number float");
        }
    } else {
        console.log("Waarde " + uitkomsten + " heeft als type " + typeof uitkomsten);
    }
}