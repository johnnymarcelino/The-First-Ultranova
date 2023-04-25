const fighters = [
    { name: "Johnny Marcelino", born: 1995 },
    { name: "Bruce Lee", born: 1940 },
    { name: "Rocky Marciano", born: 1923 },
    { name: "Koca Yusuf", born: 1898 },
];

fighters.forEach(fighter => console.log(
    `${fighter.name} was born in ${fighter.born} years}`
));

