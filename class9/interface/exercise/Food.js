"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = void 0;
var Food = /** @class */ (function () {
    function Food(_name, type, price, weight) {
        this._name = _name;
        this.type = type;
        this.price = price;
        this.weight = weight;
    }
    Food.prototype.beEaten = function () {
        console.log("The food ".concat(this._name, " is being eaten."));
    };
    return Food;
}());
exports.Food = Food;
