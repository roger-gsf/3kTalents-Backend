"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
// Creating and exporting the class Car:
var Car = /** @class */ (function () {
    // Constructor method:
    function Car(model, brand, color, doors, speed) {
        this.model = model;
        this.brand = brand;
        this.color = color;
        this.doors = doors;
        this.speed = speed;
    }
    // Getters and Setters
    Car.prototype.getModel = function () {
        return this.model;
    };
    Car.prototype.setModel = function (newModel) {
        return this.model = newModel;
    };
    Car.prototype.getBrand = function () {
        return this.brand;
    };
    Car.prototype.setBrand = function (newBrand) {
        return this.brand = newBrand;
    };
    Car.prototype.getColor = function () {
        return this.color;
    };
    Car.prototype.setColor = function (newColor) {
        return this.color = newColor;
    };
    Car.prototype.getDoors = function () {
        return this.doors;
    };
    Car.prototype.setDoors = function (newDoors) {
        return this.doors = newDoors;
    };
    Car.prototype.getSpeed = function () {
        return this.speed;
    };
    Car.prototype.setSpeed = function (newSpeed) {
        if (this.speed > 0) {
            this.speed = newSpeed;
        }
        else {
            console.log("The speed must be higher than 0!");
        }
    };
    // Other methods:
    Car.prototype.turnOn = function () {
        console.log("The car was started.");
    };
    Car.prototype.openTheDoor = function () {
        return "The car's door was opened.";
    };
    Car.prototype.speedUp = function () {
        return "The car is speeding up.";
    };
    return Car;
}());
exports.Car = Car;
