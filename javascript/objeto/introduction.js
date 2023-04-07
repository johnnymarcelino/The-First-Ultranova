// POO em JS envolve o uso de classes e objetos para criar estruturas reutilizáveis de código. Duas características importantes da POO são a encapsulação e a herança. A encapsulação permite que os dados e comportamentos de um objeto sejam mantidos privados, enquanto a herança permite que um objeto herde características de outro. Um exemplo de uso da POO em JS é criar uma classe "Pessoa" que encapsula informações como nome e idade, e ter outras classes como "Estudante" e "Professor" herdam essas informações. Outro exemplo é a criação de uma classe "Carro" com métodos como "ligar" e "acelerar", que pode ser instanciada para criar objetos de carros individuais.

// Exemplo 1: Classe Animal

class Animal {
    constructor(nome, idade, especie) {
        this.nome = nome;
        this.idade = idade;
        this.especie = especie;
    }

    emitirSom() {
        console.log('Esse animal está emitindo um som.');
    }

    getInfo() {
        console.log(`Nome: ${this.nome}, idade: ${this.idade}, espécie: ${this.especie}`);
    }
}

const cachorro = new Animal('Rex', 3, 'cachorro');
cachorro.emitirSom(); // Esse animal está emitindo um som.
cachorro.getInfo(); // Nome: Rex, idade: 3, espécie: cachorro


// Neste exemplo, criamos uma classe Animal com um construtor que recebe nome, idade e espécie, e métodos emitirSom e getInfo. Em seguida, instanciamos um objeto cachorro da classe Animal e chamamos seus métodos.

// ---------------------------------------------------- //


// Exemplo 2: Classe Carro

class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    acelerar() {
        console.log('O carro está acelerando.');
    }

    frear() {
        console.log('O carro está freando.');
    }

    getInfo() {
        console.log(`Marca: ${this.marca}, modelo: ${this.modelo}, ano: ${this.ano}`);
    }
}

const meuCarro = new Carro('Chevrolet', 'Onix', 2022);
meuCarro.acelerar(); // O carro está acelerando.
meuCarro.getInfo(); // Marca: Chevrolet, modelo: Onix, ano: 2022

// Neste exemplo, criamos uma classe Carro com um construtor que recebe marca, modelo e ano, e métodos acelerar, frear e getInfo. Em seguida, instanciamos um objeto meuCarro da classe Carro e chamamos seus métodos.