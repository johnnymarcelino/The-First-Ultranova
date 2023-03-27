// O uso da palavra "this" depende do contexto.

// Por exemplo, quando usado dentro de uma função, "this" se refere ao objeto global.

function myFunction() {
  console.log(this); // Logs o objeto global
}

// Quando usado dentro de um objeto, "this" se refere ao próprio objeto.

let myObject = {
  name: "John",
  sayName: function () {
    console.log(this.name); // Logs "John"
  }
};

// Quando usado dentro de uma classe, "this" se refere à instância da classe.

class MyClass {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(this.name); // Logs o nome da instância
  }
}

let myInstance = new MyClass("John");
myInstance.sayName(); // Logs "John"

/*

// usando a função bind -> referenciar a palavra 'this'

// Exemplo 1 - usando bind para passar argumentos para uma função
function adicionar(a, b) {
  return a + b;
}

let adicionarDoisNumeros = adicionar.bind(this, 2);
console.log(adicionarDoisNumeros(4)); // resultado 6

// Exemplo 2 - usando bind para definir o contexto de execução de uma função
let obj = {
  nome: 'John'
};

function saudar() {
  return 'Olá, ' + this.nome;
}

let saudarJohn = saudar.bind(obj);
console.log(saudarJohn()); // resultado 'Olá, John'

// Exemplo 3 - usando bind para combinar duas funções
function saudar(greeting, punctuation) {
  return greeting + ' ' + this.nome + punctuation;
}

let saudarJohnComPontoFinal = saudar.bind('Olá', '.');
console.log(saudarJohnComPontoFinal()); // resultado 'Olá John.'

// O método bind() cria uma nova função que, quando chamada, tem seu contexto (this) setado para o objeto passado como primeiro parâmetro, com os argumentos passados depois (se houver).

Exemplo de uso:

function adicionar(a, b) {
    return a + b;
}

// usando bind para passar argumentos para uma função
let adicionarDoisNumeros = adicionar.bind(this, 2);
console.log(adicionarDoisNumeros(4)); // resultado 6

// usando bind para definir o contexto de execução de uma função
let obj = {
    nome: 'John'
};

function saudar() {
    return 'Olá, ' + this.nome;
}

let saudarJohn = saudar.bind(obj);
console.log(saudarJohn()); // resultado 'Olá, John'

// usando bind paracontinueombinar duas funções
function saudar(greeting, punctuation) {
    return greeting + ' ' + this.nome + punctuation;
}

let saudarJohnComPontoFinal = saudar.bind(continue, 'Olá', '.');
console.log(saudarJohnComPontoFinal()); // resultado 'Olá John.'

*/