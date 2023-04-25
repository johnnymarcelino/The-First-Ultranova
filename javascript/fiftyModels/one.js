class Vehicle {
    constructor(emoji, speed) {
        this.emoji = emoji;
        this.speed = speed;
    }

addToPage() {
    const path = document.createElement("MARQUEE");
    path.innerText = this.emoji;
    path.scrollAmount = this.speed;
    document.body.appendChild(path);
    }
}

const bicycle = new Vehicle("🚲", 1);
bicycle.addToPage();
const motorcycle = new Vehicle("🏍️", 3);
motorcycle.addToPage();
const motorScooter = new Vehicle("🛵", 2);
motorScooter.addToPage();
