let valor // não inicializada
console.log(valor)

valor = null
console.log(valor)  // ausência de valor
// console.log(valor.toString())  // ERROR!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.49
console.log(produto)

produto.preco = undefined  // evitar atribuir undefined
console.log(!!produto.preco)
delete produto.preco
console.log(produto)

produto.preco = null  // sem preço
console.log(!!produto.preco)
console.log(produto)

