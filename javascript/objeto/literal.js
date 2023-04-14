// Criando um objeto com propriedades e métodos:

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log(person.firstName); // output: John
console.log(person.fullName()); // output: John Doe



// Criando um objeto com nomes de propriedade calculados:

const propertyName = 'firstName';

const person = {
    [propertyName]: 'John',
    lastName: 'Doe'
};

console.log(person.firstName); // output: John


// Criando um objeto com uma propriedade que é um array:

const person = {
    firstName: 'John',
    lastName: 'Doe',
    hobbies: ['reading', 'swimming', 'hiking']
};

console.log(person.hobbies[1]); // output: swimming

// Creating an object with a nested object:

const person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA'
    }
};

console.log(person.address.city); // output: Anytown


// Criando um objeto com um método que usa uma função de seta:

const person = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: () => {
        return `${this.firstName} ${this.lastName}`;
    },
    funcao02() {
        // ....
    }
};

console.log(person.fullName()); // output: undefined undefined

// Observe que a função de seta no último exemplo não funciona como esperado, pois não se refere ao próprio objeto. Geralmente é recomendado usar funções regulares ao definir métodos em objetos literais.

