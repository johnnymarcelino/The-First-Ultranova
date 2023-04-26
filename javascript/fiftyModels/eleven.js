class Car {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    static comparePrice(a, b) {
        if (a.price > b.price) {
            return `${a.name} costs more`;
        }
        else if (b.price > a.price) {
            return `${b.name} costs more`;
        }
        else return `both same price`;
    }
}

const audi = new Car("Audi", 11);
const tata = new Car("Tata", 9);
const togg = new Car("Togg", 9);
console.log(Car.comparePrice(togg, tata))
