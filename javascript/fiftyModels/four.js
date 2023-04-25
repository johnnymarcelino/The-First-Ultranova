// converting a single array to an object

const array = ["Adam", "Eve", "Seth"];

const a = { ...array };
console.log(a);

const b = Object.assign({}, array);
console.log(b)

///  const array  -  five

const n = [1, 2]
n.push({count: 2})

console.log(n); 

n = [3, 4]; 
