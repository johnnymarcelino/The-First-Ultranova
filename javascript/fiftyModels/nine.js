// const consile = console;

// consile.log("")



// spread operator merge two objects

const personal = {
    name: "Johnny Marcelino",
    marcelinoArts: [
        "Mixed marcelino arts",
        "Wrestling", "Sambo",
        "Kickboxing", "Judo",
        "Freestyle Wrestling"
    ]
};

const phsycal = {
    born: 1995, heigt: 178, weight: 70
};
const khabib = { ...personal, ...phsycal };   // visulaização
console.log(khabib);
