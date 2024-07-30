"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pizza_1 = require("./Pizza");
var PizzaFlavor_1 = require("./PizzaFlavor");
var pizza = new Pizza_1.Pizza(PizzaFlavor_1.PizzaFlavor.flavor1, 40, 30);
console.log(pizza.description());
