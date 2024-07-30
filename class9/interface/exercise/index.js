"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Electronic_1 = require("./Electronic");
var Food_1 = require("./Food");
var Book_1 = require("./Book");
// import * as readlineSync from 'readline-sync';
var food = new Food_1.Food('Rice', 'Creal grain', 10.00, 5);
var eletronic = new Electronic_1.Eletronic('PC', 'Gamer eletronic', 2000.00, 15);
var book = new Book_1.Book('1984', 'Literature', 35.00, 1.2);
console.log(food);
console.log();
console.log(eletronic);
console.log();
console.log(book);
