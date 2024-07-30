import { Pizza } from "./Pizza";
import { PizzaFlavor } from "./PizzaFlavor";

const pizza: Pizza = new Pizza(PizzaFlavor.flavor1, 40, 30);
console.log(pizza.description());
