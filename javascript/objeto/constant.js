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

/*
Nesse exemplo, pessoa é um objeto constante que possui duas propriedades, nome e idade. Ao tentar modificar a propriedade nome, o valor é alterado com sucesso. Porém, se tentarmos reatribuir o objeto constante, o código irá gerar um erro. Objetos constantes são úteis quando se deseja garantir que um objeto não será modificado acidentalmente em algum ponto do código.
*/

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

