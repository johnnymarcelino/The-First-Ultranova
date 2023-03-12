function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`)
    }else {
        return area
    }
}

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 3, 14, 54, 43))
console.log(area(5, 5))


//////////////////////////////////////////////////
// PARAMETROS VARIAVEIS

function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.2, 3.4, 5.7))
console.log(soma(1.2, 3.4, 5.7, "Teste" ))
console.log(soma("a", "b", "c"))


/////////////////////////////////////////////////////////////
// PARAMETRO PADRÃO

// estrategia 1
function soma1(a, b, c) {
    a = a || 1
    a = b || 2
    a = c || 3
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))


// estrategia 2
function soma2(a, b, c) {
    a = a != undefined ? a : 1
    a = b || 2
    a = c || 3
    return a + b + c
}


// estrategia 3 - mais usual
function soma3(a = 1, b = 2, c = 3) {
    return a + b + c;
}