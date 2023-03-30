// Definição de uma função arrow
const soma = (a, b) => {
    return a + b;
  }

// Chamada da função arrow
console.log(soma(2, 3)); // Imprime: 5


///////////////////////////////////////////////

// Definição de uma função arrow com sintaxe reduzida
const quadrado = x => x * x;  // return implicito

// Chamada da função arrow
console.log(quadrado(5)); // Imprime: 25


ola = () => "olá"  // forma padrao
ola = _ => "olá"  // forma incomum - "_" é considerado um parametro ou param

//////////////////////////////////////////////////

// função arrow com a funçao bind e a palavra this

// Função arrow
const soma = (a, b) => a + b;

console.log(soma(2, 3)); // Imprime: 5


// Utilizando bind
const objeto = {
  valor: 10,
  incrementa: function() {
    const self = this;
    function maisUm() {
      self.valor++;
    }
    maisUm.bind(this)();
  }
};

objeto.incrementa();
console.log(objeto.valor); // Imprime: 11


// Utilizando arrow function
const objeto2 = {
  valor: 10,
  incrementa: function() {
    const maisUm = () => {
      this.valor++;
    }
    maisUm();
  }
};

objeto2.incrementa();
console.log(objeto2.valor); // Imprime: 11


