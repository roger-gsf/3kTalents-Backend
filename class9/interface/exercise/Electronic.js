"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Eletronic = void 0;
var Eletronic = /** @class */ (function () {
    function Eletronic(_name, type, price, weight) {
        this._name = _name;
        this.type = type;
        this.price = price;
        this.weight = weight;
    }
    Eletronic.prototype.beUsed = function () {
        console.log("The eletronic ".concat(this._name, " is being used."));
    };
    return Eletronic;
}());
exports.Eletronic = Eletronic;
