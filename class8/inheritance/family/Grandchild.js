"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grandchild = void 0;
var Child_1 = require("./Child");
var Grandchild = /** @class */ (function (_super) {
    __extends(Grandchild, _super);
    function Grandchild(color, _name, height, weight) {
        var _this = _super.call(this, color, _name, height) || this;
        _this.weight = weight;
        return _this;
    }
    //metodo
    Grandchild.prototype.walk = function () {
        console.log("".concat(this._name, " is engatinhando."));
    };
    return Grandchild;
}(Child_1.Child));
exports.Grandchild = Grandchild;
