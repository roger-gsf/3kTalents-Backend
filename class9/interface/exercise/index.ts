import { Eletronic } from "./Electronic";
import { Food } from "./Food";
import { Book } from "./Book";
// import * as readlineSync from 'readline-sync';

const food: Food = new Food('Rice', 'Creal grain', 10.00, 5);
const eletronic: Eletronic = new Eletronic('PC', 'Gamer eletronic', 2000.00, 15);
const book: Book = new Book('1984', 'Literature', 35.00, 1.2);

console.log(food);
console.log();
console.log(eletronic);
console.log();
console.log(book);
