const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(3))
console.log(media.toString(2)) // <- em binário
console.log(typeof media)
console.log(typeof Number)

console.log(8 / 0.00000000000000000001)
console.log("10.2" / 2)
console.log(0.3 + 0.7)

// OBJECT MATH

const raio = 5.6
const area = Math.PI * Math.pow(raio, 2)

console.log(area)
console.log(typeof Math)
