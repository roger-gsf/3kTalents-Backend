<<<<<<< HEAD
// Importing classes:
import { Car } from "./Car";
import { Motorcycle } from "./Motorcycle";

// Importing readline-sync to receive data from the console:
import * as readlineSync from 'readline-sync';

// Receiving car data/information:
console.log(`Car information:`);
const carModel: string = readlineSync.question(`Model: `);
const carBrand: string = readlineSync.question(`Brand: `);
const carColor: string = readlineSync.question(`Color: `);
const carDoors: number = readlineSync.questionInt(`Number of doors: `);
const carSpeed: number = readlineSync.questionInt(`Speed(km/h): `);

console.log();

// Receiving motorcycle data/information:
console.log(`Motorcycle information:`)
const motoModel: string = readlineSync.question(`Model: `);
const motoBrand: string = readlineSync.question(`Brand: `);
const motoColor: string = readlineSync.question(`Color: `);
const motoSpeed: number = readlineSync.questionInt(`Speed(km/h): `);

// Creating the objects:
const myCar: Car = new Car(carModel, carBrand, carColor, carDoors, carSpeed);
const myMoto: Motorcycle = new Motorcycle(motoModel, motoBrand, motoColor, motoSpeed);

console.log();

// Showing car data/information:
console.log(`Car information:`)
console.log(`Model: ${myCar.getModel()}`);
console.log(`Brand: ${myCar.getBrand()}`);
console.log(`Color: ${myCar.getColor()}`);
console.log(`Doors: ${myCar.getDoors()}`);
console.log(`Speed(km/h): ${myCar.getSpeed()}`);

console.log();

// Showing motorcycle data/information:
console.log(`Motorcycle information:`);
console.log(`Model: ${myMoto.getModel()}`);
console.log(`Brand: ${myMoto.getBrand()}`);
console.log(`Color: ${myMoto.getColor()}`);
console.log(`Speed(km/h): ${myMoto.getSpeed()}`);
=======
// Importing classes:
import { Car } from "./Car";
import { Motorcycle } from "./Motorcycle";

// Importing readline-sync to receive data from the console:
import * as readlineSync from 'readline-sync';

// Receiving car data/information:
console.log(`Car information:`);
const carModel: string = readlineSync.question(`Model: `);
const carBrand: string = readlineSync.question(`Brand: `);
const carColor: string = readlineSync.question(`Color: `);
const carDoors: number = readlineSync.questionInt(`Number of doors: `);
const carSpeed: number = readlineSync.questionInt(`Speed(km/h): `);

console.log();

// Receiving motorcycle data/information:
console.log(`Motorcycle information:`)
const motoModel: string = readlineSync.question(`Model: `);
const motoBrand: string = readlineSync.question(`Brand: `);
const motoColor: string = readlineSync.question(`Color: `);
const motoSpeed: number = readlineSync.questionInt(`Speed(km/h): `);

// Creating the objects:
const myCar: Car = new Car(carModel, carBrand, carColor, carDoors, carSpeed);
const myMoto: Motorcycle = new Motorcycle(motoModel, motoBrand, motoColor, motoSpeed);

console.log();

// Showing car data/information:
console.log(`Car information:`)
console.log(`Model: ${myCar.getModel()}`);
console.log(`Brand: ${myCar.getBrand()}`);
console.log(`Color: ${myCar.getColor()}`);
console.log(`Doors: ${myCar.getDoors()}`);
console.log(`Speed(km/h): ${myCar.getSpeed()}`);

console.log();

// Showing motorcycle data/information:
console.log(`Motorcycle information:`);
console.log(`Model: ${myMoto.getModel()}`);
console.log(`Brand: ${myMoto.getBrand()}`);
console.log(`Color: ${myMoto.getColor()}`);
console.log(`Speed(km/h): ${myMoto.getSpeed()}`);
>>>>>>> 1ff6d13774dc46e7266b58706154a15f95555f13
