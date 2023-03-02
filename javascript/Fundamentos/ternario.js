const resultado = nota => nota >= 7 ? "Aprovado" : "Reprovado";

console.log(resultado(6.99999));

// COM CORPO

const resultadoComCorpo = nota => {
    return nota >= 7 ? "Aprovado" : "Reprovado";
}

console.log(resultadoComCorpo(20));
console.log();
const resultadoTeste = teste => teste === 4 ? "sim" : "não"

console.log(resultadoTeste(4))
