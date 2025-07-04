/* 
Definition:
Lets you define a family of algorithms, put each of them into a separate class, and make their objects interchangeable
*/

interface TransportType {
    label: string;
    time(): number;
    cost(): number;
    travel(): void;
}

class Bus implements TransportType {
    public label: string = 'bus';
    constructor() {
    }

    time() {
        return 90;
    }

    cost() {
        return 50;
    }

    travel(): void {
        console.log("Travelling in Bus");
    }
}

class Cab implements TransportType {
    public label: string = 'Cab';
    constructor() {
    }

    time() {
        return 40;
    }

    cost() {
        return 450;
    }

    travel(): void {
        console.log("Travelling in Cab");
    }
}

class Bike implements TransportType {
    public label: string = 'Bike';
    constructor() {
    }

    time() {
        return 60;
    }

    cost() {
        return 200;
    }

    travel(): void {
        console.log("Travelling on Bike");
    }
}

class AirportTrip {
    public strategy: TransportType;

    constructor(strategy: TransportType) {
        this.strategy = strategy;
    }
    start() {
        this.strategy.travel();
    }
}

const budget = 100;
const time = 60;

const bus = new Bus();
const cab = new Cab();
const bike = new Bike();

let chosen: TransportType;
if (cab.cost() <= budget && time <= cab.time()) {
    chosen = cab;
} else if (bike.cost() <= budget && time <= bike.time()) {
    chosen = bike;
} else {
    chosen = bus;
}

const trip = new AirportTrip(chosen);
trip.start();
