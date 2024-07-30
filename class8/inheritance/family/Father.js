"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Father = void 0;
var Father = /** @class */ (function () {
    function Father(_name, color) {
        this._name = _name;
        this.color = color;
    }
    Father.prototype.walk = function () {
        console.log("".concat(this._name, " is walking."));
    };
    return Father;
}());
exports.Father = Father;
