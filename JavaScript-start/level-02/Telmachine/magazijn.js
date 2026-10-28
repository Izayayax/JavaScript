const magazijn = {
    borden: 42,
    glazen: 57,
    messen: 85,
    vorken: 96,
    lepels: 103,
};

const verkocht = [
    "lepel", "vork", "vork", "bord",
    "lepel", "mes", "glas", "glas",
    "bord", "lepel", "lepel", "bord",
    "glas", "bord", "mes", "bord",
    "lepel", "vork", "glas", "bord",
    "vork", "vork",
];

for (const item of verkocht) {
    if (item === "bord") {
        magazijn.borden-= 1;
    }   else if (item === "lepel") {
        magazijn.lepels-=1;
    }   else if (item ==="vork") {
        magazijn.vorken-=1;
    } else if (item === "mes") {
        magazijn.messen-=1;
    } else if (item === "glas") {
        magazijn.glazen-=1;
    }
}
console.log(JSON.stringify(magazijn));