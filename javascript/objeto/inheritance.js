// inheritance - part 1

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(ferrari.prototype.__proto__ === null)

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)


// inheritance - part 2

// Cadeia de protótipos (Prototype chain)

Object.prototype.attr0 = '0'
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: '3' }
const filho = { __proto__: pai, attr3: 'C' }
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        }else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.modelo}: ${super.status()}`
        // return `Velocidade atual: ${this.velAtual}km/h`
    }
}

Object.setPrototypeOf(ferrario, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(300)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())

// inheritance - part 3

const pai1 = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai1)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai1, {
    nome: {
        value: 'Maria',
        writable: false,
        enumerable: true,
        configurable: false
    }
})

console.log(filha2.nome)
filha2.nome = "Carla"
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha2) {
    filha2.hasOwnPropety(key) ?
    console.log(key) : console.log(`Por herança: ${key}`)
}

