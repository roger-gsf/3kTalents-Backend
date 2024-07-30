"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motorcycle = void 0;
// Creating and exporting the class Motorcycle:
var Motorcycle = /** @class */ (function () {
    // Constructor method
    function Motorcycle(model, brand, color, speed) {
        this.model = model;
        this.brand = brand;
        this.color = color;
        this.speed = speed;
    }
    // Getters and Setters:
    Motorcycle.prototype.getModel = function () {
        return this.model;
    };
    Motorcycle.prototype.setModel = function (newModel) {
        return this.model = newModel;
    };
    Motorcycle.prototype.getBrand = function () {
        return this.brand;
    };
    Motorcycle.prototype.setBrand = function (newBrand) {
        return this.brand = newBrand;
    };
    Motorcycle.prototype.getColor = function () {
        return this.color;
    };
    Motorcycle.prototype.setColor = function (newColor) {
        return this.color = newColor;
    };
    Motorcycle.prototype.getSpeed = function () {
        return this.speed;
    };
    Motorcycle.prototype.setSpeed = function (newSpeed) {
        return this.speed = newSpeed;
    };
    // Other methods
    Motorcycle.prototype.turnOn = function () {
        console.log("The motorcycle was turned on");
    };
    Motorcycle.prototype.riseMotorcycle = function () {
        console.log("The motorcycle was raised.");
    };
    Motorcycle.prototype.speedUp = function () {
        console.log("The moto is speeding up.");
    };
    return Motorcycle;
}());
exports.Motorcycle = Motorcycle;
