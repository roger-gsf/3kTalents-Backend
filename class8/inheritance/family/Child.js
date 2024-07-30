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
exports.Child = void 0;
var Father_1 = require("./Father");
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(color, _name, height) {
        var _this = _super.call(this, color, _name) || this;
        _this.height = height;
        return _this;
    }
    Child.prototype.study = function () {
        console.log("".concat(this._name, " is studying."));
    };
    return Child;
}(Father_1.Father));
exports.Child = Child;
