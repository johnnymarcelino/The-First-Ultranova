for (var i = 0; i < 10; i++){
    console.log(i)
}

console.log('i = ', i)

console.log()

for (let i = 0; i < 10; i++){  // 'let' fica disponivel/visivel apenas dentro do bloco, contrario da 'var'
    console.log(i)
}

console.log('i = ', i)

const funcsvar = []

console.log()

for (var i = 0; i < 10; i++){  // variavel var não é "respeitada" em um bloco, por n ter escopo de bloco
    funcsvar.push(function() {
        console.log(i)
    })
}

funcsvar[2]()
funcsvar[8]()

console.log()

const funcslet = [] 

for (let i = 0; i < 10; i++){  // variavel let é "respeitada" em um bloco por ter escopo de bloco
    funcslet.push(function() {
        console.log(i)
    })
}

funcslet[2]()
funcslet[8]()
