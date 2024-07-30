"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importing classes:
var Car_1 = require("./Car");
var Motorcycle_1 = require("./Motorcycle");
// Importing readline-sync to receive data from the console:
var readlineSync = require("readline-sync");
// Receiving car data/information:
console.log("Car information:");
var carModel = readlineSync.question("Model: ");
var carBrand = readlineSync.question("Brand: ");
var carColor = readlineSync.question("Color: ");
var carDoors = readlineSync.questionInt("Number of doors: ");
var carSpeed = readlineSync.questionInt("Speed(km/h): ");
console.log();
// Receiving motorcycle data/information:
console.log("Motorcycle information:");
var motoModel = readlineSync.question("Model: ");
var motoBrand = readlineSync.question("Brand: ");
var motoColor = readlineSync.question("Color: ");
var motoSpeed = readlineSync.questionInt("Speed(km/h): ");
// Creating the objects:
var myCar = new Car_1.Car(carModel, carBrand, carColor, carDoors, carSpeed);
var myMoto = new Motorcycle_1.Motorcycle(motoModel, motoBrand, motoColor, motoSpeed);
console.log();
// Showing car data/information:
console.log("Car information:");
console.log("Model: ".concat(myCar.getModel()));
console.log("Brand: ".concat(myCar.getBrand()));
console.log("Color: ".concat(myCar.getColor()));
console.log("Doors: ".concat(myCar.getDoors()));
console.log("Speed(km/h): ".concat(myCar.getSpeed()));
console.log();
// Showing motorcycle data/information:
console.log("Motorcycle information:");
console.log("Model: ".concat(myMoto.getModel()));
console.log("Brand: ".concat(myMoto.getBrand()));
console.log("Color: ".concat(myMoto.getColor()));
console.log("Speed(km/h): ".concat(myMoto.getSpeed()));
