// const prod1 = {}
// prod1.nome = 'Celular Ultra Mega'
// prod1.preco = 5344.543
// prod1['Desconto Legal'] = 0.40

// console.log(prod1)

// const prod2 = {
//     nome: 'Camisa Polo',
//     preco: 589.32
// }

// console.log(prod2)



// parte 2

// console.log(typeof Object)
// console.log(typeof new Object)

// const Client = function(){}
// console.log(typeof Client)
// console.log(typeof new Client)

// class Product {}  // ES 2015 (ES6)
// console.log(typeof Product)
// console.log(typeof new Product())

// PARTE 3

// NOTAÇÃO PONTO 

console.log(typeof Math)
console.log(typeof Math.ceil(6.2))

const obj1 = {}
obj1.nome = 'bola'
// obj1['nome'] = 'bola2';
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}
console.log()
const obj2 = new Obj('Cadeira')
const obj3 = new Obj("Mesa")
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()
