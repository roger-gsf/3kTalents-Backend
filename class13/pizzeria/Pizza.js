"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pizza = void 0;
var Pizza = /** @class */ (function () {
    function Pizza(flavor, size, price) {
        this.flavor = flavor;
        this.size = size;
        this.price = price;
    }
    Pizza.prototype.description = function () {
        return "".concat(this.flavor, " pizza\nSize: ").concat(this.size, " cm\nPrice: R$ ").concat(this.price.toFixed(2));
    };
    return Pizza;
}());
exports.Pizza = Pizza;
