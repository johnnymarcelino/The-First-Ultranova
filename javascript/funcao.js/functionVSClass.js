// function

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;

    this.getNome = function () {
        return this.nome;
    }
}

const pessoa1 = new Pessoa("João", 30);
console.log(pessoa1.getNome()); // saída: "João"


// -------------------------------------------------- //

// class
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    getNome() {
        return this.nome;
    }
}

const pessoa1 = new Pessoa("João", 30);
console.log(pessoa1.getNome()); // saída: "João"
