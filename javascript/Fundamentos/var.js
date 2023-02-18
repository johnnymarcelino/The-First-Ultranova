{{{{var sera = "Será???"}}}}

console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}

teste()
// console.log(local)  // dentro de uma function a variavel var não se apresenta com sendo uma variavel global

var numero = 1

{
    var numero = 2
    console.log("dentro = ", numero)
}

console.log("fora = ", numero)