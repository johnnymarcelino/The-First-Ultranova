// conceitos basicos

function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log("Aprovado com ", + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.2)

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log("É verdade... " + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo("")
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(" ")
seForVerdadeEuFalo("?")
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})


// regras de estruturas de blocos

function teste1(num) {
    if(num > 7) {
        console.log(num)
        console.log("Final")
    }
}

// teste1(8)

function teste2(num) {
    if(num > 7); {  // cuidado com o ';', pois se refere a outro bloco em js
        console.log(num)
        console.log("Final")
    }
}
// seria isso praticamente

function teste2(num) {
    if(num > 7); 
    
    {  // cuidado com o ';', pois se refere a outro bloco em js
        console.log(num)
        console.log("Final")
    }
}
// se tiver sem as chaves pode-se utilizar apenas uma sentança de codigo
teste2(5)


//
