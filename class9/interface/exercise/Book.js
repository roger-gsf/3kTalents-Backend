"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(_name, type, price, weight) {
        this._name = _name;
        this.type = type;
        this.price = price;
        this.weight = weight;
    }
    Book.prototype.beRead = function () {
        console.log("The book ".concat(this._name, " is being read."));
    };
    return Book;
}());
exports.Book = Book;
