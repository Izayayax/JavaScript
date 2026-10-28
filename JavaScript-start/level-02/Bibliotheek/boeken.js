let catalogus = [
    {
        ISBN: "978-1449355739",
        aantal: 1,
    },
    {
        ISBN: "978-0596806750",
        aantal: 2,
    },
    {
        ISBN: "978-0596805524",
        aantal: 1,
    },
    {
        ISBN: "978-1491905012",
        aantal: 1,
    },
    {
        ISBN: "978-0596008642",
        aantal: 3,
    },
    {
        ISBN: "978-0596004897",
        aantal: 2,
    },
];

const dagverloop = [
    {
        ISBN: "978-0596806750",
        handeling: "uitlening",
    },
    {
        ISBN: "978-1491905012",
        handeling: "teruggave",
    },
    {
        ISBN: "978-0596805524",
        handeling: "uitlening",
    },
    {
        ISBN: "978-1449319243",
        handeling: "teruggave",
    },
    {
        ISBN: "978-1491905012",
        handeling: "uitlening",
    },
    {
        ISBN: "978-0596004897",
        handeling: "uitlening",
    },
    {
        ISBN: "978-1491908426",
        handeling: "teruggave",
    },
    {
        ISBN: "978-1449319243",
        handeling: "uitlening",
    },
    {
        ISBN: "978-0596004361",
        handeling: "teruggave",
    },
    {
        ISBN: "978-1491905012",
        handeling: "uitlening",
    },
    {
        ISBN: "978-1449355739",
        handeling: "uitlening",
    },
];

for (const gebeurtenis of dagverloop) {
    let gevonden = false;

    for (let i = 0; i < catalogus.length; i++) {
        const boek = catalogus[i];

        if (gebeurtenis.handeling === "uitlening") {
            if (boek.ISBN === gebeurtenis.ISBN) {
                gevonden = true;
                boek.aantal = boek.aantal - 1;

                if (boek.aantal === 0) {
                    catalogus.splice(i, 1);
                }
            }
        } else {
            if (gebeurtenis.handeling === "teruggave") {
                if (boek.ISBN === gebeurtenis.ISBN) {
                    gevonden = true;
                    boek.aantal = boek.aantal + 1;
                }
            }
        }
    }

    // Deze controle komt BUITEN de tweede for-loop
    if (gevonden === false) {
        if (gebeurtenis.handeling === "teruggave") {
            catalogus.push({
                ISBN: gebeurtenis.ISBN,
                aantal: 1,
            });
        }
    }

}

let outputString = "";

for (let i = 0; i < catalogus.length; i++) {
    const boek = catalogus[i];
    outputString += (`ISBN: ${boek.ISBN}, aantal: ${boek.aantal} 
`);
}
console.log(outputString);