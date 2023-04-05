// Closure é o processo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função

// contexto léxico em ação!

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }

    return dentro()
}

const minhaFuncao = fora()
console.log(minhaFuncao)



// --------------------------------------------------------------- //

// Em JavaScript, uma função factory é uma função que retorna outras funções. O objetivo é criar funções que sejam personalizáveis e possam ser reutilizadas com diferentes parâmetros.

// Um exemplo simples de uma função factory é uma função que cria funções de multiplicação com um determinado número fixo. A seguir, estão dois exemplos concretos que explicam como funciona uma função factory em JavaScript:

// Exemplo 1: Função factory que cria funções de multiplicação


function createMultiplier(num) {
    return function (x) {
        return num * x;
    };
}

const double = createMultiplier(2);
console.log(double(5)); // retorna 10

const triple = createMultiplier(3);
console.log(triple(5)); // retorna 15


// Exemplo 2: Função factory que cria funções de adição com um prefixo

function createAdder(prefix) {
    return function (str) {
        return prefix + str;
    };
}

const addHello = createAdder("Hello, ");
console.log(addHello("world!")); // retorna "Hello, world!"

const addGoodbye = createAdder("Goodbye, ");
console.log(addGoodbye("John!")); // retorna "Goodbye, John!"


