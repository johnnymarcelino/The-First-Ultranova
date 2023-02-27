// console.log('a = ', a)  // hoisting -> inçamento 
// var a = 2
// console.log('a =', a)

console.log()

function test() {
    console.log('a = ', a)
    var a = 2
    console.log('a =', a)
}

test()
// console.log('a = ', a)  // variavel n esta acessivel fora da função

// hoisting com a variavel let n ocorre

console.log()

function test() {
    console.log('a = ', a)
    let a = 2  // com a let não é possivel
    console.log('a =', a)
}

test()
