// convert a date to a string

const date = new Date();
console.log(date);

const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
};

let now = date.toLocaleDateString('en', options);
now = date.toLocaleDateString('bra', options);
now = date.toLocaleDateString('es', options);
now = date.toLocaleDateString('ar', options);

console.log(now);
