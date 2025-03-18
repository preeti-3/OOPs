class Phone {
    private name: string
    private inMemory: number

    constructor(name: string, inMemory: number) {
        this.name = name
        this.inMemory = inMemory
    }
    call() {
        console.log('calling with ' + this.name);
    }

    ram() {
        console.log(this.name + " ram: " + this.inMemory);
    }
}
class Human {
    private name: string

    constructor(name: string) {
        this.name = name
    }
    greet() {
        console.log(this.name);
    }

}

class computers {
    private name: string
    private inMemory: number

    constructor(name: string, inMemory: number) {
        this.name = name
        this.inMemory = inMemory
    }
    company() {
        console.log('company: ' + this.name);
    }

    ram() {
        console.log(this.name + " ram: " + this.inMemory);
    }

}

const american = new Human("Hi");
const indian = new Human("Namaste");
const korean = new Human("Anniyohaseo");
const asus = new computers("asus", 16);
const dell = new computers("dell", 8);
const hp = new computers("HP", 6);

american.greet();
indian.greet();
korean.greet();

asus.company();
asus.ram();
dell.company();
dell.ram();
hp.company();
hp.ram();

class Planets {
    private name: string
    private distanceFromSun: number
    constructor(name: string, distanceFromSun: number) {
        this.name = name
        this.distanceFromSun = distanceFromSun
    }
    printPlanetInfo() {
        console.log('Planet Name:'+ this.name + ', Distance from Sun:'+ this.distanceFromSun +'km');
    }
}

let earth = new Planets('Earth', 149.6);
let sun = new Planets('Sun', 0);

earth.printPlanetInfo();
sun.printPlanetInfo();
