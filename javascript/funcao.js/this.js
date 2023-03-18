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