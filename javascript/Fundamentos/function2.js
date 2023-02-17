// armazenando uma funçao em uma variavel 
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 5)

// armazenando uma funçao arrow em uma variavel 
const soma = (a, b) => {
    return a + b
}

console.log(2, 4)

// retorno implicito 
const subtracao = (a, b) => a - b
console.log(subtracao(2, 4))

const imprimir2 = a => console.log(a)
imprimir2("Legal!!!!")
