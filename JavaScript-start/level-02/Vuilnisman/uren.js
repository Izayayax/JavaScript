const uren = [
    [7, 4, 6, 8],
    [6, 8, 5],
    [5, 5, 8, 7, 6],
    [8, 6, 5, 8, 5],
];

let totaal = 0;
let weeknummer = 1;

for (const weekuren of uren) {
    let weeksom = 0;
    for (const daguren of weekuren) {
        weeksom += daguren
    }
    console.log(`Week ${weeknummer}: ${weeksom} uur`);
    totaal += weeksom;
    weeknummer++;
}
console.log(`Het totaal is ${totaal}`);