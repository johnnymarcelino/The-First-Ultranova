function criarPessoa(nome, idade, profissao) {
    return {
        nome: nome,
        idade: idade,
        profissao: profissao,
        apresentar: function () {
            console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e trabalho como ${this.profissao}.`);
        }
    }
}

const pessoa1 = criarPessoa('Maria', 30, 'engenheira');
const pessoa2 = criarPessoa('João', 25, 'advogado');

pessoa1.apresentar(); // Olá, meu nome é Maria, tenho 30 anos e trabalho como engenheira.
pessoa2.apresentar(); // Olá, meu nome é João, tenho 25 anos e trabalho como advogado.


//////////////////////////////////////////////////

// objeto constante

const pessoa = {
    nome: 'João',
    idade: 30
}

console.log(pessoa.nome) // João

// Tentando modificar uma propriedade do objeto constante
pessoa.nome = 'Maria'

console.log(pessoa.nome) // Maria

// Tentando reatribuir o objeto constante (gerará um erro)
pessoa = {}
